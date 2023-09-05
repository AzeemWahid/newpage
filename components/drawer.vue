<template>
  <div class="drawer">
    <input
      id="my-drawer-3"
      type="checkbox"
      class="drawer-toggle"
      ref="drawerCheckbox"
    />
    <div class="drawer-content flex flex-col">
      <!-- Navbar -->
      <div class="w-full navbar">
        <div class="flex-none md:hidden">
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
          <!-- Navbar menu content here -->
          <NuxtLink
            to="/"
            class="hover:scale-125 transition-all hover:ring-2 hover:ring-success hover:rounded-md text-lg font-semibold ml-4 mr-4 pl-4 pr-4 pt-2 pb-2"
            >Home</NuxtLink
          >
          <NuxtLink
            to="/services"
            class="hover:scale-125 transition-all hover:ring-2 hover:ring-success hover:rounded-md text-lg font-semibold ml-4 mr-4 pl-4 pr-4 pt-2 pb-2"
          >
            Services</NuxtLink
          >
          <NuxtLink
            to="/contact"
            class="hover:scale-125 transition-all hover:ring-2 hover:ring-success hover:rounded-md text-lg font-semibold ml-4 mr-4 pl-4 pr-4 pt-2 pb-2"
          >
            Contact Us</NuxtLink
          >
        </div>
      </div>
    </div>
    <div class="drawer-side z-10">
      <label for="my-drawer-3" class="drawer-overlay"></label>
      <ul
        class="menu p-4 w-[80vw] xs:w-[50vw] sm:w-[40vw] md:w-[30vw] lg:w-[20vw] min-h-full bg-base-200 pt-16 flex gap-12"
      >
        <NuxtLink
          @click="toggle"
          class="text-lg font-semibold p-4 flex justify-center"
          to="/"
        >
          Home
        </NuxtLink>
        <NuxtLink
          @click="toggle"
          class="text-lg font-semibold p-4 flex justify-center"
          to="/services"
        >
          Services</NuxtLink
        >
        <NuxtLink
          @click="toggle"
          class="text-lg font-semibold p-4 flex justify-center"
          to="/contact"
        >
          Contact
        </NuxtLink>
      </ul>
    </div>
  </div>
</template>

<script setup>
const drawerCheckbox = ref();
function toggle() {
  drawerCheckbox.value.checked = !drawerCheckbox.value.checked;
}
</script>

<style lang="scss" scoped></style>
