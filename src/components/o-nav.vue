<template ref="o-navigation">
  <nav class="nav" :class="{ open: navOpen }">
    <v-container>
      <v-row>
        <v-col cols="5">
          <ul class="nav-links" :class="{ open: navOpen }">
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/events">Events</router-link></li>
            <li><router-link to="/history">History</router-link></li>
            <li><router-link to="/ships">Ships</router-link></li>
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
import { ref, toRefs } from "vue";

export default {
  props: {
    navOpen: Boolean,
  },
};
</script>

<style scoped>
nav {
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
  animation: slide-out var(--ori-trans);
  ul {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    list-style: none;
    li {
      font-size: 96px;
      cursor: pointer;
      a {
        display: inline-block;
        font-weight: 300;
        transform: translateX(0);
        transition: transform var(--ori-trans);
        &:hover {
          transform: translateX(12px);
        }
      }
    }
  }
  img {
    width: 50%;
    max-width: 100%;
    height: auto;
    position: absolute;
    right: 0;
    top: 55%;
    transform: translateY(-52%);
  }
}

.nav {
  transform: translateY(-100%);
  transition: transform 1s ease-in-out;
}

.nav.open {
  transform: translateY(0);
}

.nav-links {
  transform: translateX(-100%);
  transition: transform 1s ease-in-out 0.2s; /* delay of 0.2s */
}

.nav-links.open {
  transform: translateX(0);
}

.nav-image {
  transform: translateX(100%);
  transition: transform 1s ease-in-out;
}

.nav-image.open {
  transform: translateX(0);
}
</style>
