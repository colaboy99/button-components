<template>
  <div id="container">
    <div class="container-left-col">
      <MenuBar />
    </div>
    <div class="container-right-col">
      <Buttons />
    </div>
  </div>
</template>

<script>
import MenuBar from "./components/MenuBar.vue";
import Buttons from "./components/Buttons.vue";


export default {
  name: "App",
  components: {
    MenuBar,
    Buttons
  },
};
</script>

<style lang="scss">
// APP 
</style>
