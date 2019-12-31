<template>
  <layout>
    <form
      class="w-full max-w-lg mt-20"
      name="contact"
      method="POST"
      data-netlify-recaptcha="true"
      data-netlify="true"
    >
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-first-name"
          >First Name</label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-first-name"
            type="text"
            placeholder="Jane"
          />
        </div>
        <div class="w-full md:w-1/2 px-3">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-last-name"
          >Last Name</label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-last-name"
            type="text"
            placeholder="Doe"
          />
        </div>
        <div class="w-full px-3">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-6"
            for="grid-email"
          >Email</label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-email"
            type="email"
            placeholder="jane@doe.com"
          />
        </div>
        <div class="w-full px-3">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-6"
            for="grid-message"
          >Message</label>
          <textarea
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            rows="10"
            id="grid-message"
            type="email"
            placeholder="Your enquiry goes here..."
          />
        </div>
      </div>
      <div data-netlify-recaptcha="true"></div>
      <div class="flex items-center justify-between">
        <button
          type="submit"
          class="bg-transparent hover:bg-gray-700 text-gray-700 font-semibold hover:text-white py-2 px-4 mb-20 border border-gray-700 hover:border-transparent rounded"
        >Let's do it!</button>
      </div>
    </form>
  </layout>
</template>

<page-query>
query Page {
  wordPressPage (id: "1419"){
    id
    title
    content
    slug
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: "Contact"
  }
};
</script>

 
<style lang="scss" scoped>
</style>


