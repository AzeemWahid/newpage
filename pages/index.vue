<template>
  <div class="hero h-[100vh] gradient-background -mt-[4rem]">
    <div class="hero-content flex-col lg:flex-row-reverse">
      <div class="w-[80%] sm:max-w-sm lg:mr-8">
        <NuxtImg src="/images/newpage-logo.png" class="rounded-lg shadow-2xl" />
      </div>
      <div class="p-8 lg:mr-8">
        <h1 class="text-5xl font-bold text-white">
          Your Online Presence Starts Here
        </h1>
        <p class="py-6 text-lg text-white">
          Let's transform your vision into a stunning website that reflects your
          brand and achieves your digital goals
        </p>

        <NuxtLink to="/services"
          ><button class="btn btn-success">Get Started</button></NuxtLink
        >
      </div>
    </div>
  </div>
</template>

<script setup></script>
