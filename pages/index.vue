<template>
  <div class="hero h-[calc(100vh-7rem)] bg-base-200">
    <div class="hero-content flex-col lg:flex-row-reverse">
      <div class="w-[80%] sm:max-w-sm lg:mr-8">
        <img src="/images/newpage-logo.png" class="rounded-lg shadow-2xl" />
      </div>
      <div class="p-8 lg:mr-8">
        <h1 class="text-5xl font-bold">Your Online Presence Starts Here</h1>
        <p class="py-6 text-lg">
          Let's transform your vision into a stunning website that reflects your
          brand and achieves your digital goals
        </p>

        <NuxtLink to="/services"
          ><button class="btn btn-primary">Get Started</button></NuxtLink
        >
      </div>
    </div>
  </div>
</template>

<script setup></script>
