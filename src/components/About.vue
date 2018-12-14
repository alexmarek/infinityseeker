<template>
  <div class="about">
    <h1>{{ msg }}</h1>
    <ul>
      <li  v-html="pages.pages[3].content.rendered" ></li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: 'About',
  data () {
    return {
      msg: 'This is who I am professionally'
    }
  },
  created() {
    this.getPosts();
  },
  computed: mapState({
    pages: state => state.pages
  }),
  methods: {
    ...mapActions(["getPosts"])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
