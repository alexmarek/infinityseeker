<template>
  <layout>
    <div v-html="$page.wordPressPage.content" class="mt-16 mb-16"></div>
  </layout>
</template>

<page-query>
query Page {
  wordPressPage (id: "1417"){
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
    title: "About"
  }
};
</script>
