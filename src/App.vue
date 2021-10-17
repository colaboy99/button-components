<template>
  <div id="container">
    <div class="container-left-col">
      <MenuBar />
    </div>
    <div class="container-right-col">
      <component :is="ActiveComp"></component>
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
    padding: 20px 20px;

    @media screen and (min-width: 768px) {
      padding: 50px 80px;
    }
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
