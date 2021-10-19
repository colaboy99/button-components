<template>
  <div id="buttons">
    <h2 class="head-title">Buttons</h2>

    <div class="buttons-container">
      <div class="row">
        <div class="buttons-component">
          <p class="button-component-text">&#60;Button &#47;&#62;</p>
          <button class="btn">Default</button>
        </div>

        <div class="buttons-component">
          <p class="button-component-hoverText">&:hover, &:focus</p>
          <button class="btn btn-hover">Default</button>
        </div>
      </div>

      <div class="row">
        <div class="buttons-component">
          <p class="button-component-text">
            &#60;Button variant="outline" &#47;&#62;
          </p>
          <button class="btn btn-outline btn-primary btn-disableShadow">
            Default
          </button>
        </div>

        <div class="buttons-component">
          <p class="button-component-hoverText">&:hover, &:focus</p>
          <button
            class="btn btn-outline btn-primary btn-disableShadow btn-hover"
          >
            Default
          </button>
        </div>
      </div>

      <div class="row">
        <div class="buttons-component">
          <p class="button-component-text">
            &#60;Button variant="text" &#47;&#62;
          </p>
          <button class="btn btn-text btn-primary btn-disableShadow">
            Default
          </button>
        </div>

        <div class="buttons-component">
          <p class="button-component-hoverText">&:hover, &:focus</p>
          <button class="btn btn-text btn-primary btn-hover btn-disableShadow">
            Default
          </button>
        </div>
      </div>

      <div class="row">
        <div class="buttons-component">
          <p class="button-component-text">
            &#60;Button disableShadow &#47;&#62;
          </p>
          <button class="btn btn-primary btn-disableShadow">Default</button>
        </div>
      </div>

      <div class="row">
        <div class="buttons-component">
          <p class="button-component-text">&#60;Button disabled &#47;&#62;</p>
          <button class="btn" disabled>Default</button>
        </div>

        <div class="buttons-component">
          <p class="button-component-text">
            &#60;Button variant="text" disabled &#47;&#62;
          </p>
          <button class="btn btn-text" disabled>Default</button>
        </div>
      </div>

      <div class="row">
        <div class="buttons-component">
          <p class="button-component-text">
            &#60;Button variant="startIcon" &#47;&#62;
          </p>
          <button class="btn btn-primary btn-startIcon">
            <span class="material-icons-outlined"> local_grocery_store </span
            >Default
          </button>
        </div>

        <div class="buttons-component">
          <p class="button-component-text">
            &#60;Button variant="endIcon" &#47;&#62;
          </p>
          <button class="btn btn-primary btn-endIcon">
            Default<span class="material-icons-outlined">
              local_grocery_store
            </span>
          </button>
        </div>
      </div>

      <div class="row">
        <div class="buttons-component">
          <p class="button-component-text">&#60;Button size="sm" &#47;&#62;</p>
          <button class="btn btn-primary btn-sizeSM">Default</button>
        </div>

        <div class="buttons-component">
          <p class="button-component-text">&#60;Button size="md" &#47;&#62;</p>
          <button class="btn btn-primary btn-sizeMD">Default</button>
        </div>

        <div class="buttons-component">
          <p class="button-component-text">&#60;Button size="lg" &#47;&#62;</p>
          <button class="btn btn-primary btn-sizeLG">Default</button>
        </div>
      </div>

      <div class="row">
        <div class="buttons-component">
          <p class="button-component-text">
            &#60;Button color="default" &#47;&#62;
          </p>
          <button class="btn">Default</button>
        </div>

        <div class="buttons-component">
          <p class="button-component-text">
            &#60;Button color="primary" &#47;&#62;
          </p>
          <button class="btn btn-primary">Primary</button>
        </div>

        <div class="buttons-component">
          <p class="button-component-text">
            &#60;Button color="secondary" &#47;&#62;
          </p>
          <button class="btn btn-secondary">Secondary</button>
        </div>

        <div class="buttons-component">
          <p class="button-component-text">
            &#60;Button color="danger" &#47;&#62;
          </p>
          <button class="btn btn-danger">Danger</button>
        </div>
      </div>

      <div class="row">
        <div class="buttons-component">
          <p class="button-component-hoverText">&:hover, &:focus</p>
          <button class="btn btn-hover">Default</button>
        </div>
        <div class="buttons-component">
          <p class="button-component-hoverText">&nbsp;</p>
          <button class="btn btn-hover btn-primary">Primary</button>
        </div>
        <div class="buttons-component">
          <p class="button-component-hoverText">&nbsp;</p>
          <button class="btn btn-hover btn-secondary">Secondary</button>
        </div>
        <div class="buttons-component">
          <p class="button-component-hoverText">&nbsp;</p>
          <button class="btn btn-hover btn-danger">Danger</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Buttons",
};
</script>

<style lang="scss" scoped>
#buttons {
  .buttons-container {
    margin-bottom: 50px;
    .row {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      grid-row-gap: 45px;
      margin-bottom: 45px;

      .buttons-component {
        min-width: 105px;
        font-family: "Ubuntu Mono", monospace;
        font-size: 12px;
        font-weight: 500;
        line-height: 12px;
        word-break: break-all;

        p {
          margin-bottom: 12px;
        }

        .button-component-text {
          color: #333;
        }

        .button-component-hoverText {
          color: #828282;
        }

        .button-row {
          display: flex;
          column-gap: 132px;
          flex-wrap: wrap;
          row-gap: 45px;
        }
      }
    }
  }
}
</style>
