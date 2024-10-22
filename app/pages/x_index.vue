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

<script lang="ts" setup>

</script>

<style></style>