<template>
  <div id="menubar" :class="{ active: isActive }">
    <div class="logo_content">
      <div class="logo">
        <div class="logo_name"><span>Dev</span>challenge.io</div>
      </div>
      <span class="material-icons-round" id="btn-menu" @click="toggleActive">
        {{ isActive ? "menu_open" : "menu" }}
      </span>
    </div>
    <ul class="nav_list">
      <li
        :class="{ active: ActiveComp === list['name'] }"
        v-for="(list, index) in lists"
        :key="index"
        @click="listToggleActive(list['name'])"
      >
        <a href="#">
          <span class="material-icons-round"> {{ list["icon"] }} </span>
          <span class="links_name">{{ list["name"] }}</span>
        </a>
        <span class="tooltip">{{ list["name"] }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "MenuBar",
  data() {
    return {
      isActive: true,
      lists: [
        { icon: "palette", name: "Colors" },
        { icon: "title", name: "Typography" },
        { icon: "space_bar", name: "Spaces" },
        { icon: "smart_button", name: "Buttons" },
        { icon: "input", name: "Inputs" },
        { icon: "grid_3x3", name: "Grid" },
      ],
    };
  },
  methods: {
    toggleActive: function () {
      this.isActive = !this.isActive;
    },

    listToggleActive: function (option) {
      this.$store.commit("ChangeComp", option);
    },
  },
  computed: mapState(["ActiveComp"]),
};
</script>

<style lang="scss" scoped>
#menubar {
  width: 80px;
  height: 100%;
  background-color: $background-light;
  padding: 6px 14px;
  transition: all 0.5s ease;

  .logo_content {
    position: relative;
    font-family: "Poppins", sans-serif;

    .logo {
      color: $dark-primary;
      display: flex;
      height: 50px;
      width: 100%;
      align-items: center;
      opacity: 0;
      pointer-events: none;

      .logo_name {
        font-size: 18px;
        font-weight: 600;
        line-height: 19px;
        margin-left: 10px;
        span {
          color: #f7542e;
        }
      }
    }

    #btn-menu {
      position: absolute;
      color: $light-secondary;
      left: 50%;
      top: 0px;
      font-size: 20px;
      width: 50px;
      height: 50px;
      text-align: center;
      line-height: 50px;
      transform: translateX(-50%);
      cursor: pointer;
    }
  }

  .nav_list {
    margin-top: 100px;
    font-family: "Noto Sans SC", sans-serif;

    li {
      position: relative;
      width: 100%;
      height: 60px;
      list-style: none;
      margin: 0 5px;
      line-height: 50px;

      a {
        color: $light-secondary;
        display: flex;
        align-items: center;
        text-decoration: none;

        span {
          min-width: 40px;
          height: 50px;
          font-size: 16px;
          font-weight: 500;
          border-radius: 12px;
          line-height: 50px;
          text-align: center;
        }

        .links_name {
          opacity: 0;
          pointer-events: none;
          text-align: left;
          margin-left: 10px;
        }

        &:hover {
          color: $dark-tertiary;
        }
      }

      .tooltip {
        position: absolute;
        top: 0%;
        left: 80px;
        width: 120px;
        height: 35px;
        color: $light-primary;
        background-color: $dark-secondary;
        border-radius: 8px;
        line-height: 35px;
        text-align: center;
        transform: translateY(-50%);
        transition: 0s;
        opacity: 0;
        pointer-events: none;
      }

      &:hover {
        .tooltip {
          transition: all 0.5s ease;
          top: 40%;
          opacity: 1;
        }
      }

      &.active {
        a {
          color: $dark-primary;

          span {
            font-weight: 700;
          }
        }
      }
    }
  }

  &.active {
    width: 240px;

    .logo_content {
      .logo {
        opacity: 1;
        pointer-events: auto;
      }

      #btn-menu {
        left: 90%;
      }
    }

    .nav_list {
      li {
        a {
          .links_name {
            opacity: 1;
            pointer-events: auto;
          }
        }
        .tooltip {
          display: none;
        }
      }
    }
  }
}
</style>