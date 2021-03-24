<template>
  <nav class="horizontal-scroll">
    <ul class="tab-nav">
      <router-link
        v-for="(page, idx) in pages"
        :key="idx"
        :to="page"
        :exact="page.name === 'Home'"
        v-slot="{ href, navigate, isActive, isExactActive }"
        custom
      >
        <li
          class="tab-nav-item"
          :class="[isActive && 'router-link-active', isExactActive && 'router-link-exact-active']"
          @click="navigate"
          ref="navItemsRef"
        >
          <a class="tab-nav-link" :href="href">{{ page.label }}</a>
        </li>
      </router-link>

      <span v-if="canShowMarker" class="tab-nav-marker" :style="markerStyle"></span>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    pages: {
      type: Array,
      required: true,
    },
  },
  data: () => ({
    markerWidth: 0,
    markerLeft: 0,
    canAnimateMarker: false,
  }),
  computed: {
    markerStyle() {
      return {
        width: `${this.markerWidth}px`,
        left: `${this.markerLeft}px`,
      }
    },
    canShowMarker() {
      return this.markerWidth !== 0
    },
  },
  watch: {
    $route: {
      handler() {
        this.onRouteChange()
      },
    },
  },
  mounted() {
    this.onRouteChange()
  },
  methods: {
    onRouteChange() {
      const activeIndex = this.pages.findIndex((page) => page.name === this.$route.name)
      if (activeIndex === -1) {
        return
      }
      const activeNavElement = this.$refs.navItemsRef[activeIndex].children[0]
      this.markerLeft = activeNavElement.offsetLeft
      this.markerWidth = activeNavElement.getBoundingClientRect().width
    },
  },
}
</script>

<style lang="scss">
$spaceBetweenElements: 8px;
$innerSpace: 4px;
$parentPadding: 16px;
$scrollPadding: 16px;
$activeColor: #9c27b0;
$hoverColor: #4e1358;
$easing: cubic-bezier(0.4, 0, 0.2, 1);

// * {
//   outline: 1px solid red !important;
//   outline-offset: 0 !important;
// }
nav {
  margin: 0 (-$parentPadding);
  padding-left: $scrollPadding;
  &::after {
    display: block;
    content: '';
    min-width: $scrollPadding;
  }
}
.tab-nav {
  display: flex;
  padding: 0;
  margin: 0;
  position: relative;
  font-weight: 700;
  flex-shrink: 0;

  &-item {
    display: block;
    padding: 0 $spaceBetweenElements / 2;
    flex-shrink: 0;
    cursor: pointer;
    transition: all 0.3s $easing;
    &:hover {
      color: $hoverColor;
    }
    &.router-link-active {
      color: $activeColor;
    }
  }

  &-link {
    text-decoration: none;
    color: inherit;
    padding: $innerSpace;
    display: block;
  }

  &-marker {
    position: absolute;
    height: 2px;
    bottom: 0;
    background-color: $activeColor;
    transition: all 0.3s $easing;
  }
}
</style>
