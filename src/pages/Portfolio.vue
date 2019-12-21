<template>
  <Layout>
    <div class="portfolio pb-20 mt-16">
      <masonry :cols="{ default: 2, 700: 1 }" :gutter="20">
        <div
          v-for="(edge, index) in $static.portfolios.edges"
          :key="index"
          class="portfolio__item mb-8"
          :class="{ 'no-transform': modalIndex !== null }"
        >
          <img
            :src="edge.node.acf.portfolioImage"
            :alt="edge.node.title"
            :title="edge.node.title"
            :key="index"
            @click="show(index)"
            class="rounded shadow-lg"
          />
          <transition name="fade">
            <div class="portfolio__modal fixed" v-show="index == modalIndex">
              <h3 v-html="edge.node.title"></h3>
              <span v-html="edge.node.content"></span>
              <button
                class="bg-transparent hover:bg-gray-700 text-gray-900 font-semibold hover:text-white py-2 px-4 my-8 border border-gray-900 hover:border-transparent rounded"
              >
                <a
                  :href="'https://' + edge.node.acf.siteUrl"
                  target="_blank"
                  rel="noopener nofollower"
                  >Visit Site</a
                >
              </button>
              <button
                @click="hide(index)"
                class="bg-transparent absolute top-5 right-5 hover:text-gray-400 text-gray-800 text-6xl font-hairline"
              >
                &times;
              </button>
            </div>
          </transition>
        </div>
      </masonry>
    </div>
  </Layout>
</template>

<static-query>

query Portfolio {
  portfolios: allWordPressPortfolio {
    edges {
      node { 
        title
        content
        id
        acf {portfolioImage, siteUrl}

      }
    }
  }
}
</static-query>

<script>
export default {
  metaInfo: {
    title: "Portfolio"
  },
  data() {
    return {
      modalIndex: null
    };
  },
  methods: {
    show(index) {
      this.modalIndex = index.toString();
    },
    hide(index) {
      this.modalIndex = null;
      console.log("modalIndex: " + this.modalIndex);
    }
  }
};
</script>

<style lang="scss" scoped>
.no-transform {
  transform: none !important;
}
.portfolio {
  &__item {
    transition: 0.2s transform ease-in-out;
    &:hover {
      transform: scale(1.05);
    }
    img {
      cursor: pointer;
    }
  }
  &__modal {
    width: 100vw;
    height: 100vh;
    padding: 2rem;
    top: 0;
    left: 0;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    @media (min-width: 768px) {
      padding: 10rem 20rem;
    }
    h3 {
      width: 100%;
    }
    button {
      top: 0;
      right: 2rem;
      @media (min-width: 768px) {
        top: 1rem;
        right: 4rem;
      }
    }
  }
}
</style>
