<template>
  <div id="inputs">
    <h2 class="head-title">Inputs</h2>

    <div class="row">
      <div class="input">
        <div class="input-title">&#60;Input &#47;&#62;</div>
        <div class="input-container">
          <input type="text" placeholder="Placeholder" />
          <label for="">Label</label>
        </div>
      </div>

      <div class="input">
        <div class="input-hover-title">&:hover</div>
        <div class="input-container">
          <input type="text" placeholder="Placeholder" class="input-hover" />
          <label for="">Label</label>
        </div>
      </div>

      <div class="input">
        <div class="input-hover-title">&:focus</div>
        <div class="input-container">
          <input type="text" placeholder="Placeholder" class="input-focus" />
          <label for="">Label</label>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="input">
        <div class="input-title">&#60;Input error &#47;&#62;</div>
        <div class="input-container">
          <input type="text" placeholder="Placeholder" required />
          <label for="">Label</label>
        </div>
      </div>

      <div class="input">
        <div class="input-hover-title">&:hover</div>
        <div class="input-container">
          <input
            type="text"
            placeholder="Placeholder"
            class="input-hover"
            required
          />
          <label for="">Label</label>
        </div>
      </div>

      <div class="input">
        <div class="input-hover-title">&:focus</div>
        <div class="input-container">
          <input type="text" placeholder="Placeholder" required />
          <label for="">Label</label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Inputs",
};
</script>

<style lang="scss" scoped>
#inputs {
  .row {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 40px;
    .input {
      margin-right: 70px;
      .input-title {
        min-width: 105px;
        font-family: "Ubuntu Mono", monospace;
        font-size: 12px;
        font-weight: 500;
        line-height: 12px;
        word-break: break-all;
        color: #333;
        margin-bottom: 16px;
      }

      .input-hover-title {
        min-width: 105px;
        font-family: "Ubuntu Mono", monospace;
        font-size: 12px;
        font-weight: 500;
        line-height: 12px;
        word-break: break-all;
        color: #828282;
        margin-bottom: 16px;
      }

      .input-container {
        display: flex;
        flex-direction: column-reverse;
      }
    }
  }
}
</style>