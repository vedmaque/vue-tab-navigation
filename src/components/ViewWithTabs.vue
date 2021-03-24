<template>
  <div class="layout-tabs">
    <TabNav :pages="pages" />

    <div class="layout-tabs-view">
      <transition :name="transitionName" mode="out-in">
        <router-view />
      </transition>
    </div>
  </div>
</template>

<script>
import TabNav from '@/components/TabNav.vue'

export default {
  components: { TabNav },
  props: {
    pages: {
      type: Array,
      required: true,
    },
  },
  data: () => ({
    transitionName: '',
  }),
  watch: {
    $route: {
      handler(to, from) {
        const toIndex = this.pages.findIndex((page) => page.name === to.name)
        const fromIndex = this.pages.findIndex((page) => page.name === from.name)
        this.transitionName = toIndex < fromIndex ? 'slide-right' : 'slide-left'
      },
    },
  },
}
</script>

<style lang="scss">
.layout-tabs {
  padding: 16px;
  overflow-x: hidden;
}
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition-duration: 0.3s;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  transform: translate(50px, 0);
}

.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  transform: translate(-50px, 0);
}
</style>
