<script setup lang="ts">
import { useColorMode, useCycleList } from '@vueuse/core'
import { watchEffect } from 'vue-demi'

const mode = useColorMode({
  emitAuto: true,
  modes: {
    contrast: 'dark contrast',
    cafe: 'cafe',
  },
})

const siteMenu = [
  { name: 'Home', link: '/', mobile: true },
  {
    name: 'About', link: '/aboutus', mobile: true,
    submenu: [
      { name: 'Us', link: '/us', mobile: true },
      { name: 'Location', link: '/location', mobile: true },
      { name: 'Staff', link: '/staff', mobile: true },
      { name: 'Beliefs', link: '/beliefs', mobile: true }
    ]
  },
  { name: 'Media', link: '/media', mobile: true },
  { name: 'Give', link: '/give', mobile: true },
  { name: 'Salvation', link: '/salvation', mobile: true },
  { name: 'News', link: '/news', mobile: true },
]

const { state, next } = useCycleList(['dark', 'light', 'cafe', 'contrast', 'auto'] as const, { initialValue: mode })

watchEffect(() => mode.value = state.value)
</script>

<template>
  <div>

    <div class="navbar bg-base-100">
      <div class="navbar-start">
        <div class="dropdown">
          <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabindex="0" class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li>
              <a>About</a>
              <ul class="p-2">
                <li>
                  <NuxtLink to="/aboutus">Location</NuxtLink>
                </li>
                <li>
                  <NuxtLink>Staff</NuxtLink>
                </li>
                <li>
                  <NuxtLink>Beliefs</NuxtLink>
                </li>
              </ul>
            </li>
            <li><a>Media</a></li>
            <li><a>Give</a></li>
            <li><a>Salvation</a></li>
          </ul>
        </div>
        <NuxtLink to="/" class="btn btn-ghost text-xl">Lifegate Baptist Church</NuxtLink>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal px-1">
          <li>
            <details>
              <summary>About</summary>
              <ul class="p-2">
                <li>
                  <NuxtLink to="/aboutus">Us</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/location">Location</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/staff">Staff</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/beliefs">Beliefs</NuxtLink>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <NuxtLink to="/media">Media</NuxtLink>
          </li>
          <li><a>Give</a></li>
          <li><a>Salvation</a></li>
          <li>
            <NuxtLink to="/news">News</NuxtLink>
          </li>
        </ul>
      </div>
      <div class="navbar-end">
        <button @click="next()" class="btn btn-sm">
          <Icon v-if="state === 'dark'" name="carbon:moon" class="text-2xl" />
          <Icon v-if="state === 'light'" name="carbon:sun" class="text-2xl" />
          <Icon v-if="state === 'cafe'" name="carbon:cafe" class="text-2xl" />
          <Icon v-if="state === 'contrast'" name="carbon:split-discard" class="text-2xl" />
          <Icon v-if="state === 'auto'" name="line-md:computer" class="text-2xl" />
        </button>
        <button class="btn btn-ghost btn-circle">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
        <button class="btn btn-ghost btn-circle">
          <div class="indicator">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            <span class="badge badge-xs badge-primary indicator-item"></span>
          </div>
        </button>
        <div class="dropdown dropdown-end">
          <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
            <div class="w-10 rounded-full">
              <!-- <img alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" /> -->
              <Icon name="carbon:user-filled" class="text-3xl" />

            </div>
          </div>
          <ul tabindex="0" class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li>
              <a class="justify-between">
                Profile
                <span class="badge">New</span>
              </a>
            </li>
            <li><a>Settings</a></li>
            <li><a>Logout</a></li>
          </ul>
        </div>
      </div>
    </div>

    <div id="bodyContent" class="flex-grow overflow-auto">
      <slot />
    </div>

    <div id="footer" class="xfixed xbottom-0 w-full">
      <footer class="footer bg-base-200 text-base-content p-10">
        <nav class="grid grid-flow-col gap-4">
          <NuxtLink to="/aboutus" class="link link-hover">About Us</NuxtLink>
          <NuxtLink to="/" class="link link-hover">Contact</NuxtLink>
          <NuxtLink to="/news" class="link link-hover">News</NuxtLink>
        </nav>
      </footer>
      <footer class="footer bg-base-200 text-base-content border-base-300 border-t px-10 py-4">
        <aside class="grid-flow-col items-center">
          <Icon name="game-icons:church" class="text-3xl" />
          <p>
            Lifegate Baptist Church
            <br />
            Est. ????
          </p>
        </aside>
        <nav class="md:place-self-center md:justify-self-end">
          <div class="grid grid-flow-col gap-4">
            <a>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current">
                <path
                  d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z">
                </path>
              </svg>
            </a>
            <a>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current">
                <path
                  d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z">
                </path>
              </svg>
            </a>
            <a>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current">
                <path
                  d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z">
                </path>
              </svg>
            </a>
          </div>
        </nav>
      </footer>
    </div>
  </div>
</template>

<style>
html.cafe {
  filter: sepia(0.9) hue-rotate(315deg) brightness(0.9);
}

html.contrast {
  filter: contrast(2);
}
</style>