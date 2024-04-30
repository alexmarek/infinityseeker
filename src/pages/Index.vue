<template>
  <layout>
    <div v-html="$page.wordPressPage.content" class="mt-16"></div>
  </layout>
</template>

<page-query>
query Page {
  wordPressPage (id: "1701"){
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
    title: "Home Page"
  }
};
</script>
