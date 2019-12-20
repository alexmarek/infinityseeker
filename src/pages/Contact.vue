<template>
  <layout>
    <div class="mt-16">alex at infinityseeker.com</div>
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


