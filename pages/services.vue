<template>
  <div class="">
    <div class="hero min-h-[30vh] bg-base-200 mb-12">
      <div class="hero-content text-center">
        <div class="max-w-md">
          <p class="text-5xl font-bold text-secondary">
            Get exactly what you need
          </p>
          <p class="p-4 mt-4 text-lg">
            Websites can seem intimidating, so let's demystify what it takes to
            deliver the right fit to you
          </p>
        </div>
      </div>
    </div>

    <div
      class="flex flex-col items-center md:flex-row md:flex-wrap md:justify-center gap-6 md:gap-0 md:items-stretch"
    >
      <div
        class="card max-w-[90%] md:max-w-[35%] ring-2 ring-primary m-2 p-2 md:m-8 md:p-8 shadow-sm"
      >
        <img src="/images/responsive-wide.png" class="pt-2" />
        <div class="card-body flex justify-end">
          <div class="card-title text-2xl text-primary">Responsive Design</div>
          <span class="font-semibold">
            Your website should look beautiful and mould perfectly to the screen
            of any device.</span
          >
        </div>
      </div>

      <div
        class="card max-w-[90%] md:max-w-[35%] ring-2 ring-primary m-2 p-2 md:m-8 md:p-8 shadow-sm"
      >
        <img src="/images/ui-wide.png" />
        <div class="card-body">
          <div class="card-title text-2xl text-primary">Seamless Interface</div>
          <span class="font-semibold">
            Your content should
            <span class="text-accent">captivate </span> your users. Keep them
            satisfied with an intuitive and easy to use interface and you'll
            gain their loyalty
          </span>
        </div>
      </div>

      <div
        class="card max-w-[90%] md:max-w-[35%] ring-2 ring-primary m-2 p-2 md:m-8 md:p-8 shadow-sm"
      >
        <img src="/images/security1.png" />
        <div class="card-body">
          <div class="card-title text-2xl text-primary">Security</div>
          <span class="font-semibold">
            The web can be an unsafe place, but your website should offer the
            best
            <span class="text-accent"> protection</span> for you and your users
            from bad actors
          </span>
        </div>
      </div>

      <div
        class="card max-w-[90%] md:max-w-[35%] ring-2 ring-primary m-2 p-2 md:m-8 md:p-8 shadow-sm"
      >
        <img src="/images/speed.png" class="pt-6" />
        <div class="card-body flex justify-end">
          <div class="card-title text-2xl text-primary">High Performance</div>
          <span class="font-semibold">
            With all these demands, it can seem like a lot to manage, but your
            website should still deliver them all and remain
            <span class="text-accent">blazing fast!</span>
          </span>
        </div>
      </div>

      <!-- Advertising -->

      <div class="hero min-h-[30vh] bg-base-200 mt-12 mb-12">
        <div class="hero-content text-center">
          <div class="max-w-md">
            <p class="text-5xl font-bold text-secondary">Develop your brand</p>
            <p class="p-4 mt-4 text-lg">
              Branding and websites go hand in hand. We have you covered.
            </p>
          </div>
        </div>
      </div>

      <div
        class="flex flex-col items-center md:flex-row md:flex-wrap md:justify-center gap-6 md:gap-0 md:items-stretch mb-12"
      >
        <div
          class="card max-w-[90%] md:max-w-[40%] lg:max-w-[25%] ring-2 ring-primary m-2 p-2 md:m-8 md:p-8 shadow-sm"
        >
          <img src="/images/speed.png" class="pt-6" />
          <div class="card-body flex justify-end">
            <div class="card-title text-2xl text-primary">Logo Design</div>
            <span class="font-semibold">
              With all these demands, it can seem like a lot to manage, but your
              website should still deliver them all and remain
              <span class="text-accent">blazing fast!</span>
            </span>
          </div>
        </div>

        <div
          class="card max-w-[90%] md:max-w-[40%] lg:max-w-[25%] ring-2 ring-primary m-2 p-2 md:m-8 md:p-8 shadow-sm"
        >
          <img src="/images/speed.png" class="pt-6" />
          <div class="card-body flex justify-end">
            <div class="card-title text-2xl text-primary">Branding Design</div>
            <span class="font-semibold">
              With all these demands, it can seem like a lot to manage, but your
              website should still deliver them all and remain
              <span class="text-accent">blazing fast!</span>
            </span>
          </div>
        </div>

        <div
          class="card max-w-[90%] md:max-w-[40%] lg:max-w-[25%] ring-2 ring-primary m-2 p-2 md:m-8 md:p-8 shadow-sm"
        >
          <img src="/images/speed.png" class="pt-6" />
          <div class="card-body flex justify-end">
            <div class="card-title text-2xl text-primary">
              Advertisement Design
            </div>
            <span class="font-semibold">
              Branding and websites go hand in hand, thats
              <span class="text-accent">blazing fast!</span>
            </span>
          </div>
        </div>

        <div class="hero min-h-[10vh] bg-base-200 mt-12 mb-12 pt-6 pb-6">
          <div class="hero-content text-center">
            <div class="max-w-md">
              <p class="text-3xl font-bold">Commonly asked questions</p>
            </div>
          </div>
        </div>

        <div class="flex flex-wrap w-[90%] md:w-[50%]">
          <div
            v-for="faq in faqData"
            :key="faqData.question"
            class="collapse ring-2 ring-secondary m-4"
          >
            <input type="radio" name="my-accordion-1" checked="checked" />
            <div class="collapse-title text-xl font-medium">
              {{ faq.question }}
            </div>
            <div class="collapse-content border-t pt-2 border-secondary">
              <p>{{ faq.answer }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const faqData = [
  {
    question: "How much does it cost to build a website with you?",
    answer:
      "Websites can range from a simple static website with a few pages to very complex web applications with dynamic data or even ecommerce stores. This means that the pricing for each project can vary quite a bit. We usually analyze your needs closely and then discuss pricing.",
  },
  {
    question: "What is the typical timeline for website development?",
    answer:
      "Depending on the type and complexity of the website, it can range anywhere from a few days, to a few weeks. Large projects may span for month(s).",
  },
  {
    question: "How do I get started with a project?",
    answer:
      "You can reach out to us via any one of our contact mediums. We are open on whatsapp, phone, email and the contact form on our website. ",
  },
  {
    question: "What technologies do you use to develop websites?",
    answer:
      "We use a variety of technologies such as HTML, CSS and Javascript, Vue.js, Nuxt.js and Content Management Systems such as Wordpress.",
  },
  {
    question: "What is your payment process?",
    answer:
      "The payment mediums currently supported are bank transfer or cash payments.",
  },
  {
    question: "Do you provide hosting and domain registration services?",
    answer:
      "Yes, hosting and domain registration are provided with every project by default.",
  },
  {
    question: "Do you offer website maintenance services?",
    answer: "Yes, all websites are frequently maintained and updated by us.",
  },
  {
    question:
      "Can you help with content creation, copywriting and graphic design?",
    answer:
      "Yes, these services aid in the design and brand representation of any website and we can provide them as needed. ",
  },
  {
    question:
      "What if i encounter technical issues or bugs with my website after it's built?",
    answer:
      "All websites undergo rigorous testing before deployment, however if any issues or bugs are detected in the website, we will debug and fix them for you.",
  },
];
</script>

<style lang="scss" scoped></style>
