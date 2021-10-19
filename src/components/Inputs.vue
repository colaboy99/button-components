<template>
  <div id="inputs">
    <h2 class="head-title">Inputs</h2>

    <div class="row">
      <div class="input-item">
        <div class="input-title">&#60;Input &#47;&#62;</div>
        <div class="input-container">
          <input type="text" placeholder="Placeholder" />
          <label for="">Label</label>
        </div>
      </div>

      <div class="input-item">
        <div class="input-hover-title">&:hover</div>
        <div class="input-container">
          <input type="text" placeholder="Placeholder" class="input-hover" />
          <label for="">Label</label>
        </div>
      </div>

      <div class="input-item">
        <div class="input-hover-title">&:focus</div>
        <div class="input-container">
          <input type="text" placeholder="Placeholder" class="input-focus" />
          <label for="">Label</label>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="input-item">
        <div class="input-title">&#60;Input error &#47;&#62;</div>
        <div class="input-container">
          <input type="text" placeholder="Placeholder" required />
          <label for="">Label</label>
        </div>
      </div>

      <div class="input-item">
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

      <div class="input-item">
        <div class="input-hover-title">&:focus</div>
        <div class="input-container">
          <input
            type="text"
            placeholder="Placeholder"
            required
            class="input-focus"
          />
          <label for="">Label</label>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="input-item">
        <div class="input-title">&#60;Input disabled &#47;&#62;</div>
        <div class="input-container">
          <input type="text" placeholder="Placeholder" disabled />
          <label for="">Label</label>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="input-item">
        <div class="input-title">
          &#60;Input helperText="Some interesting text" &#47;&#62;
        </div>
        <div class="input-container">
          <input type="text" placeholder="Placeholder" />
          <label for="">Label</label>
          <small class="helperText">Some interesting text</small>
        </div>
      </div>

      <div class="input-item">
        <div class="input-title">
          &#60;Input helperText="Some interesting text" error &#47;&#62;
        </div>
        <div class="input-container">
          <input type="text" placeholder="Placeholder" required />
          <label for="">Label</label>
          <small class="helperText">Some interesting text</small>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="input-item">
        <div class="input-title">&#60;Input startIcon &#47;&#62;</div>
        <div class="input-container startIcon">
          <input type="text" placeholder="Placeholder" />
          <span class="material-icons-round"> call </span>
          <label for="">Label</label>
        </div>
      </div>

      <div class="input-item">
        <div class="input-title">&#60;Input endIcon &#47;&#62;</div>
        <div class="input-container endIcon">
          <input type="text" placeholder="Placeholder" />
          <span class="material-icons-round"> lock </span>
          <label for="">Label</label>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="input-item">
        <div class="input-title">&#60;Input value="text" &#47;&#62;</div>
        <div class="input-container">
          <input type="text" placeholder="Placeholder" value="Text" />
          <label for="">Label</label>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="input-item">
        <div class="input-title">&#60;Input size="sm" &#47;&#62;</div>
        <div class="input-container input-sm">
          <input type="text" placeholder="Placeholder" />
          <label for="">Label</label>
        </div>
      </div>

      <div class="input-item">
        <div class="input-title">&#60;Input size="md" &#47;&#62;</div>
        <div class="input-container input-md">
          <input type="text" placeholder="Placeholder" />
          <label for="">Label</label>
        </div>
      </div>
    </div>

    <div class="row fullWidth">
      <div class="input-item">
        <div class="input-title">&#60;Input fullwidth &#47;&#62;</div>
        <div class="input-container input-fullWidth">
          <input type="text" placeholder="Placeholder" />
          <label for="">Label</label>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="input-item">
        <div class="input-title">&#60;Input multiline row="4" &#47;&#62;</div>
        <div class="input-container">
          <textarea type="text" placeholder="Placeholder" rows="4"></textarea>
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
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    row-gap: 45px;
    column-gap: 60px;
    margin-bottom: 40px;

    @media screen and (min-width: 1024px) {
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    }
    &.fullWidth {
      grid-template-columns: 1fr;
    }

    .input-item {
      width: 100%;

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
    }
  }
}
</style>