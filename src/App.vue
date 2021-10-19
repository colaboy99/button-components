<template>
  <div id="container">
    <div class="container-left-col">
      <MenuBar />
    </div>
    <div class="container-right-col">
      <component :is="ActiveComp"></component>
      <p class="iconUrl">
        Icons:
        https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp
      </p>
      <p class="copyright">
        created by
        <a href="https://github.com/colaboy99" target="_blank">colaboy99</a> -
        devchallenge.io
      </p>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import MenuBar from "./components/MenuBar.vue";
import Buttons from "./components/Buttons.vue";
import Inputs from "./components/Inputs.vue";
import Colors from "./components/Colors.vue";
import Spaces from "./components/Spaces.vue";
import Grid from "./components/Grid.vue";
import Typography from "./components/Typography.vue";

export default {
  name: "App",
  components: {
    MenuBar,
    Buttons,
    Inputs,
    Colors,
    Spaces,
    Grid,
    Typography,
  },
  computed: mapState(["ActiveComp"]),
};
</script>

<style lang="scss">
#container {
  .container-right-col {
    .head-title {
      font-family: "Poppins", sans-serif;
      font-size: 24px;
      font-weight: 500;
      line-height: 36px;
      color: $dark-tertiary;
      margin-bottom: 30px;
    }
  }
}
</style>
