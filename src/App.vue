<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
body {
  margin: 0;
}
* {
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.horizontal-scroll {
  display: flex;
  -webkit-overflow-scrolling: touch;
  overflow-x: scroll;
  -ms-overflow-style: none;
  overflow: -moz-scrollbars-none;
  scrollbar-width: none; /* Firefox 64 */

  &::-webkit-scrollbar {
    display: none;
  }
}
</style>
