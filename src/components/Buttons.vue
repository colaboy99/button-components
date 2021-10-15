<template>
  <div id="buttons">
    <h2 class="buttons-title">Buttons</h2>

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
          <div class="buttons-component-btns">
            <button class="btn btn-hover">Default</button>
            <button class="btn btn-hover btn-primary">Primary</button>
            <button class="btn btn-hover btn-secondary">Secondary</button>
            <button class="btn btn-hover btn-danger">Danger</button>
          </div>
        </div>
      </div>
    </div>

    <p class="buttons-iconUrl">
      Icons:
      https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp
    </p>
    <p class="copyright">created by <span>colaboy99</span> - devchallenge.io</p>
  </div>
</template>

<script>
export default {
  name: "Buttons",
};
</script>

<style lang="scss" scoped>
#buttons {
  padding: 50px 80px;

  .buttons-title {
    font-family: "Poppins", sans-serif;
    font-size: 24px;
    font-weight: 500;
    line-height: 36px;
    color: $dark-tertiary;
    margin-bottom: 30px;
  }

  .buttons-container {
    margin-bottom: 50px;
    .row {
      display: flex;
      column-gap: 60px;
      margin-bottom: 45px;

      .buttons-component {
        min-width: 180px;
        font-family: "Ubuntu Mono", monospace;
        font-size: 12px;
        font-weight: 500;
        line-height: 12px;

        p {
          margin-bottom: 12px;
        }

        .button-component-text {
          color: #333;
        }

        .button-component-hoverText {
          color: #828282;
        }

        .buttons-component-btns {
          button {
            margin-right: 120px;
          }
        }
      }
    }
  }

  .buttons-iconUrl {
    font-family: "Ubuntu Mono", monospace;
    font-size: 12px;
    font-weight: 500;
    line-height: 12px;
    color: #828282;
    margin-bottom: 30px;
  }

  .copyright {
    font-family: "Montserrat", sans-serif;
    font-size: 14px;
    font-weight: 500;
    line-height: 17px;
    color: #a9a9a9;

    span {
      font-weight: 700;
    }
  }
}
</style>
