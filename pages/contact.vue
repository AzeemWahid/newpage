<template>
  <div>
    <!-- <NuxtLink to="https://wa.me/18687141381">
      <button
        class="btn bg-[url('/images/WhatsAppButtonGreenLarge.svg')] w-[200px]"
      ></button>
    </NuxtLink> -->
    <div class="card rounded-sm w-[90%] md:w-[65%] mx-auto mt-12 p-8 shadow-xl">
      <div class="p-2 text-2xl font-bold">
        Tell us about your website
      </div>
      <form @submit.prevent="submitForm">
        <div class="p-2">
          <label for="name" class="block font-semibold py-1">Your name </label>
          <input id="name" required name="name" type="text" v-model="name"
            class="input input-bordered input-primary rounded-sm w-full p-2">
        </div>

        <div class="p-2">
          <label for="email" class="block font-semibold py-1">Your email address </label>
          <input id="email" name="email" required v-model="email" type="email"
            class="input input-bordered input-primary rounded-sm w-full p-2">
        </div>

        <div class="p-2">
          <label for="phone" class="block font-semibold py-1">Your contact number </label>
          <input id="phone" name="phone" required type="tel" v-model="phone"
            class="input input-bordered input-primary rounded-sm w-full p-2">
        </div>

        <div class="p-2">
          <label for="message" class="block font-semibold py-1">Briefly describe what kind of web service you have in
            mind</label>
          <textarea id="message" name="message" required minlength="20" maxlength="1500" v-model=message
            class="textarea textarea-primary outline-none rounded-sm w-full p-2"></textarea>
          <div v-if="message" class="text-sm text-purple-400"> {{ messageLength }}</div>
        </div>
        <div class="px-2 pt-2 flex justify-end">
          <button class="btn btn-active btn-primary text-white" type="submit">
            Submit </button>
        </div>
      </form>
    </div>


    <div class="flex flex-col md:flex-row mx-auto justify-around w-[90%] md:w-[80%] my-16">
      <NuxtLink to="https://wa.me/18684818374" target="blank">
        <div class="card shadow-xl p-8 hover:scale-110 ease-in duration-200 w-[50vw] md:w-[100%] mx-auto">
          <NuxtImg src="/images/whatsapp.svg" width="100" height="100" class="mx-auto" />
          <div class="pt-4 text-center font-semibold text-xl"> Whatsapp
          </div>
        </div>
      </NuxtLink>

      <NuxtLink to="tel:+18684818374" target="blank">
        <div class="card shadow-xl p-8 hover:scale-110 ease-in duration-200 w-[50vw] md:w-[100%] mx-auto">
          <NuxtImg src="/images/phone.svg" width="100" height="100" class="mx-auto" />
          <div class="pt-4 text-center font-semibold text-xl">
            Phone
          </div>
        </div>
      </NuxtLink>

      <NuxtLink to="mailto:newpagewebservices@gmail.com" target="blank">
        <div class="card shadow-xl p-8 hover:scale-110 ease-in duration-200 w-[50vw] md:w-[100%] mx-auto">
          <img src="/images/email.svg" width="100" height="100" class="mx-auto" />
          <div class="pt-4 text-center font-semibold text-xl">
            Email
          </div>
        </div>
      </NuxtLink>

    </div>
  </div>
</template>

<script setup>
const message = ref('')
const phone = ref('')
const email = ref('')
const name = ref('')


async function submitForm() {
  console.log('fired')
  const formSubmission = markRaw({
    name: name.value, email: email.value, phone: phone.value, message: message.value
  })

  const mailResponse = await useFetch('/api/form', { method: 'POST', body: { formSubmission } })
  message.value = '', email.value = '', name.value = '', phone.value = ''

  console.log('mailResponse', mailResponse.data.value.mailResponse)

  if (mailResponse.data.value.mailResponse) {
    const router = useRouter()
    router.push({ path: "/success" })
  }
}

const messageLength = computed(() => {
  return (1500 - message.value.length) + " remaining"
})

</script>

<style lang="scss" scoped></style>
