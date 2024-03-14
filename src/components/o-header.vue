<template>
  <header>
    <v-container>
      <v-row>
        <v-col cols="2">
          <div class="burger-menu" @click="toggleNav">
            <div class="burger-menu-bar-1"></div>
            <div class="burger-menu-bar-2"></div>
          </div>
        </v-col>
        <v-col cols="8" class="logo-col">
          <img src="../assets/img/logo.svg" alt="origin jumpworks logo" />
        </v-col>
        <v-col cols="2" class="link-col interactable">
          <a
            href="https://robertsspaceindustries.com/pledge/ships?manufacturer_id%5B%5D=6"
            target="_blank"
            >Find a dealer</a
          >
        </v-col>
      </v-row>
    </v-container>
    <o-nav :navOpen="navOpen" @toggleNav="toggleNav"></o-nav>
  </header>
</template>

<script setup>
import { ref } from "vue";
import oNav from "@/components/o-nav.vue";

const navOpen = ref(false);

const toggleNav = () => {
  navOpen.value = !navOpen.value;
  const burgerMenu = document.querySelector(".burger-menu");
  burgerMenu.classList.toggle("open");
  document.body.classList.toggle("no-scroll");
  return { navOpen, toggleNav };
};
</script>

<style scoped>
header {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 900;
  width: 100%;
}

.v-col {
  display: flex;
  align-items: center;
}
.logo-col {
  justify-content: center;
  img {
    transition: transform var(--ori-trans);
    &:hover {
      transform: scale(1.1);
    }
  }
}
.link-col {
  justify-content: flex-end;
  a {
    font-weight: 500;
  }
}
.burger-menu {
  width: var(--burger-bars-length);
  display: flex;
  flex-direction: column;
  gap: 12px;
  cursor: pointer;
  &:hover {
    .burger-menu-bar-1 {
      transform: translateY(-4px);
    }
    .burger-menu-bar-2 {
      transform: translateY(4px);
    }
  }
  &:active,
  &.open {
    .burger-menu-bar-1 {
      transform: rotate(18deg) scaleX(1.05);
    }
    .burger-menu-bar-2 {
      transform: rotate(-18deg) scaleX(1.05);
    }
    cursor: pointer;
  }
}
.burger-menu-bar-1,
.burger-menu-bar-2 {
  height: 2px;
  width: 100%;
  transform-origin: 0 50%;
  background-color: #1f1f1f;
  transition: transform var(--ori-trans);
}
</style>
