<template>
  <div class="drawer bg-base-200">
    <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content flex flex-col">
      <!-- Navbar -->
      <div class="w-full navbar">
        <div class="flex-none md:hidden m-4 p-2">
          <label for="my-drawer-3" class="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="inline-block w-6 h-6 stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
        </div>
        <div class="flex-1"></div>
        <div class="flex-none hidden md:block">
          <ul class="menu menu-horizontal">
            <!-- Navbar menu content here -->
            <NuxtLink
              to="/"
              class="m-4 p-2 hover:scale-125 transition-all hover:ring-2 hover:ring-primary hover:rounded-md text-lg font-semibold"
              >Home</NuxtLink
            >
            <NuxtLink
              to="/services"
              class="m-4 p-2 hover:scale-125 transition-all hover:ring-2 hover:ring-primary hover:rounded-md text-lg font-semibold"
            >
              Services</NuxtLink
            >
            <NuxtLink
              to="/contact"
              class="m-4 p-2 hover:scale-125 transition-all hover:ring-2 hover:ring-primary hover:rounded-md text-lg font-semibold"
            >
              Contact Us</NuxtLink
            >
          </ul>
        </div>
      </div>
    </div>
    <div class="drawer-side">
      <label for="my-drawer-3" class="drawer-overlay"></label>
      <ul class="menu p-4 w-[80vw] min-h-full bg-base-200">
        <li><a>Home</a></li>
        <li><a>Contact Us</a></li>
      </ul>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
