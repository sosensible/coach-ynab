<script lang="ts" setup>
import * as ynab from 'ynab';
import config from '~~/config.json';
import { ClientOnly } from '../../.nuxt/components';

// ynab.clientId = config.clientId;
// ynab.redirectUri = config.redirectUri;
// ynab.token = null;
// ynab.api = null;

console.log(ynab);

const loading = ref(false);
const error = ref(null);
const budgetId = ref(null);
const budgets = ref([]);
const transactions = ref([]);

if (process.ClientOnly) {

  const getBudgets = () => {
    loading.value = true;
    error.value = null;
    ynab.api.budgets.getBudgets().then((res) => {
      budgets.value = res.data.budgets;
    }).catch((err) => {
      error.value = err.error.detail;
    }).finally(() => {
      loading.value = false;
    });
  };

  const selectBudget = (id) => {
    loading.value = true;
    error.value = null;
    budgetId.value = id;
    transactions.value = [];
    ynab.api.transactions.getTransactions(id).then((res) => {
      transactions.value = res.data.transactions;
    }).catch((err) => {
      error.value = err.error.detail;
    }).finally(() => {
      loading.value = false;
    });
  };

  const authorizeWithYNAB = (e) => {
    e.preventDefault();
    const uri = `https://app.ynab.com/oauth/authorize?client_id=${ynab.clientId}&redirect_uri=${ynab.redirectUri}&response_type=token`;
    alert(uri);
    window.location.replace(uri);
  };

  const findYNABToken = () => {
    let token = null;
    console.log(process.client);

    const search = window.location.hash.substring(1).replace(/&/g, '","').replace(/=/g, '":"');
    if (search && search !== '') {
      const params = JSON.parse('{"' + search + '"}', function (key, value) {
        return key === '' ? value : decodeURIComponent(value);
      });
      token = params.access_token;
      sessionStorage.setItem('ynab_access_token', token);
      window.location.hash = '';
    } else {
      token = sessionStorage.getItem('ynab_access_token');
    }
    return token;
  };

  const resetToken = () => {
    sessionStorage.removeItem('ynab_access_token');
    ynab.token = null;
    error.value = null;
  };

  ynab.token = findYNABToken();
  if (ynab.token) {
    ynab.api = new ynabapi.api(ynab.token);
    if (!budgetId) {
      getBudgets();
    } else {
      selectBudget(budgetId);
    }
  }

} else {
  console.log('ServerOnly');
}

// console.log(ynab.value);

</script>

<template>
  <div class="container">

    <!-- Display a loading message if loading -->
    <h1 v-if="loading" class="display-4">Loading...</h1>

    <!-- Display an error if we got one -->
    <div v-if="error">
      <h1 class="display-4">Oops!</h1>
      <p class="lead">{{ error }}</p>
      <button class="btn btn-primary" @click="resetToken">Try Again &gt;</button>
    </div>

    <!-- Otherwise show our app contents -->
    <div v-else>

      <!-- If we dont have a token ask the user to authorize with YNAB -->
      <form v-if="!ynab.token">
        <h1 class="display-4">Congrats!</h1>
        <p class="lead">You have successfully initialized a new YNAB API Application!</p>
        <p>The next step is the OAuth configuration, you can
          <a
            href="https://github.com/ynab/ynab-api-starter-kit#step-2-obtain-an-oauth-client-id-so-the-app-can-access-the-ynab-api">read
            detailed instructions in the README.md</a>. Essentially:
        </p>
        <ul>
          <li>Make sure to be logged into your YNAB account, go to your <a
              href="https://app.ynab.com/settings/developer" target="_blank" rel="noopener noreferrer">YNAB Developer
              Settings</a> and create a new OAuth Application.</li>
          <li>Enter the URL of this project as a Redirect URI (in addition to the existing three options), then "Save
            Application."</li>
          <li>Copy your Client ID and Redirect URI into the <em>src/config.json</em> file of your project.</li>
          <li>Then build your amazing app!</li>
        </ul>
        <p>If you have any questions please reach out to us at <strong>api@ynab.com</strong>.</p>
        <p>&nbsp;</p>

        <div class="form-group">
          <h2>Hello!</h2>
          <p class="lead">If you would like to use this App, please authorize with YNAB!</p>
          <button @click="authorizeWithYNAB" class="btn btn-primary">Authorize This App With YNAB &gt;</button>
        </div>
      </form>

      <!-- Otherwise if we have a token, show the budget select -->
      <Budgets v-else-if="!budgetId" :budgets="budgets" :selectBudget="selectBudget" />

      <!-- If a budget has been selected, display transactions from that budget -->
      <div v-else>
        <Transactions :transactions="transactions" />
        <button class="btn btn-info" @click="budgetId = null">&lt; Select Another Budget</button>
      </div>

    </div>

    <Footer />
  </div>
</template>

<style></style>