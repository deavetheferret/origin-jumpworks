<template ref="o-navigation">
  <nav class="nav" :class="{ open: navOpen }">
    <v-container>
      <v-row>
        <v-col cols="5">
          <ul class="nav-links" :class="{ open: navOpen }">
            <li class="link-a">
              <router-link @click.native="handleLinkClick" to="/"
                >Home</router-link
              >
            </li>
            <li class="link-b">
              <router-link @click.native="handleLinkClick" to="/events"
                >Events</router-link
              >
            </li>
            <li class="link-c">
              <router-link @click.native="handleLinkClick" to="/history"
                >History</router-link
              >
            </li>
            <li class="link-d">
              <router-link @click.native="handleLinkClick" to="/ships"
                >Ships</router-link
              >
            </li>
          </ul>
        </v-col>
        <img
          class="nav-image"
          :class="{ open: navOpen }"
          src="../assets/img/appart-poster.png"
          alt=""
        />
      </v-row>
    </v-container>
  </nav>
</template>

<script>
export default {
  props: {
    navOpen: Boolean,
  },
  methods: {
    handleLinkClick(eB) {
      eB.preventDefault();
      this.$emit("toggleNav");
    },
  },
};
</script>

<style scoped>
nav.nav {
  position: absolute;
  top: 0;
  height: 100vh;
  left: 0;
  z-index: -1;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--ori-color-white);
  transform: translateY(-100%);
  transition: transform 1s var(--ori-trans);
  &.open {
    transform: translateY(0);
  }
  ul.nav-links {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    list-style: none;
    &.open {
      li {
        transform: translateX(0);
      }
    }
    li {
      font-size: 96px;
      cursor: pointer;
      transform: translateX(-400%);
      transition: transform 1s var(--ori-trans);
      &.link-a {
        transition-delay: 0s;
      }
      &.link-b {
        transition-delay: 0.2s;
      }
      &.link-c {
        transition-delay: 0.4s;
      }
      &.link-d {
        transition-delay: 0.6s;
      }

      a {
        display: inline-block;
        font-weight: 300;
        transform: translateX(0);
        transition: transform 0.2s var(--ori-trans);
        &:hover {
          transform: translateX(12px);
        }
      }
    }
  }
  img.nav-image {
    width: 50%;
    max-width: 100%;
    height: auto;
    position: absolute;
    right: 0;
    top: 55%;
    transform: translate(400%, -52%);
    transition: transform 1s var(--ori-trans) 0.4s;
    &.open {
      transform: translate(0, -52%);
    }
  }
}
</style>
