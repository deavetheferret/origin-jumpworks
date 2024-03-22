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
          <img
            :src="logoImg"
            alt="origin jumpworks logo"
            @click="goHome"
            @mouseover="itsAlive"
          />
          <div class="gradient-bg"></div>
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
    <o-nav
      :navOpen="navOpen"
      @toggleNav="toggleNav"
      @closeNav="closeNav"
    ></o-nav>
  </header>
</template>

<script setup>
import { ref } from "vue";
import oNav from "@/components/o-nav.vue";

import logoImg from "@/assets/img/logo.svg";

const navOpen = ref(false);

const toggleNav = () => {
  navOpen.value = !navOpen.value;
  const burgerMenu = document.querySelector(".burger-menu");
  burgerMenu.classList.toggle("open");
  document.body.classList.toggle("no-scroll");
};

const closeNav = () => {
  navOpen.value = false;
};

const goHome = () => {
  closeNav();
  window.location.href = "/";
};

const itsAlive = () => {
  const gradientBg = document.querySelector(".gradient-bg");
  const logo = document.querySelector(".logo-col img");
  gradientBg.classList.add("alive");
  logo.addEventListener("mouseleave", () => {
    gradientBg.classList.remove("alive");
  });
};
</script>

<style scoped>
header {
  position: fixed;
  padding-top: 20px;
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
  position: relative;
  img {
    cursor: pointer;
    transition: transform 1s var(--ori-trans);
    transform: scale(1) translateY(0);
    &:hover {
      transform: scale(1.1) translateY(10px);
    }
    z-index: 900;
  }
  .gradient-bg {
    width: 100%;
    position: absolute;
    height: 10%;
    z-index: 899;
    pointer-events: none;
    top: -100%;
    transition: all 1s var(--ori-trans);
    background: radial-gradient(
      50.83% 100.67% at 50% 0%,
      #0029ff -50%,
      rgba(0, 41, 255, 0) 100%
    );

    &.alive {
      height: 100%;
      top: -20px;
      animation-name: itMoves;
      animation-duration: 10s;
      animation-iteration-count: infinite;
      animation-timing-function: cubic-bezier(0.46, 0.26, 0.46, 0.74);
    }
  }
}
@keyframes itMoves {
  0% {
    transform: scale(1) translate(0, 0);
  }
  50% {
    transform: scale(1.4) translate(0, 10px);
  }
  100% {
    transform: scale(1) translate(0, 0);
  }
}
.link-col {
  justify-content: flex-end;
  a {
    font-weight: 500;
    &.white {
      background-color: var(--ori-color-white);
    }
  }
}
.burger-menu {
  width: 45px;
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
  transition: transform 0.2s var(--ori-trans);
}
</style>
