<template>
  <footer>
    <v-container>
      <v-row>
        <v-col cols="3">
          <img :src="logoWide" alt="Origin logo" class="logo-wide" />
          <ul>
            <li><a href="/policies#terms">Terms of service</a></li>
            <li><a href="/policies#privacy">Privacy policy</a></li>
            <li><a href="/privacy#cookie">Cookie policy</a></li>
          </ul>
        </v-col>
        <v-col cols="1"></v-col>
        <v-col cols="8">
          <v-row>
            <v-col cols="3">
              <router-link to="/" class="links-topic">Home</router-link>
              <ul>
                <li><router-link to="/#featured">Featured</router-link></li>
                <li>
                  <router-link to="/#our-history">Our history</router-link>
                </li>
                <li>
                  <router-link to="/#our-presence">Our presence</router-link>
                </li>
                <li>
                  <router-link to="/#find-a-ship">Find a ship</router-link>
                </li>
              </ul>
            </v-col>
            <v-col cols="3">
              <router-link to="/events" class="links-topic">Events</router-link>
              <ul>
                <li>
                  <router-link to="/events#featured">Featured</router-link>
                </li>
                <li>
                  <router-link to="/events#this-year">This year</router-link>
                </li>
                <li>
                  <router-link to="/events#passed-events"
                    >Passed events</router-link
                  >
                </li>
                <li><router-link to="/events#gallery">Gallery</router-link></li>
              </ul>
            </v-col>
            <v-col cols="3">
              <router-link to="/history" class="links-topic"
                >History</router-link
              >
              <ul>
                <li>
                  <router-link to="/history#overview">Overview</router-link>
                </li>
                <li>
                  <router-link to="/history#gallery">Gallery</router-link>
                </li>
              </ul>
            </v-col>
            <v-col cols="3">
              <router-link to="/ships" class="links-topic">Ships</router-link>
              <ul>
                <li>
                  <router-link to="/ships#all-ships">All ships</router-link>
                </li>
                <li>
                  <router-link to="/ships#featured">Featured</router-link>
                </li>
                <li>
                  <router-link to="/ships#find-your-way"
                    >Find your way</router-link
                  >
                </li>
              </ul>
            </v-col>
            <v-col cols="6">
              <a href="https://robertsspaceindustries.com/"
                >Star Citizen website</a
              >
            </v-col>
            <v-col cols="6">
              <a href="#">Subscribe to our newsletter</a>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row class="disclaimer">
        <v-col cols="4">
          <p>
            © 2012-2024 Cloud Imperium Rights LLC and Cloud Imperium Rights Ltd.
          </p>
        </v-col>
        <v-col cols="4">
          <p>
            Origin Jumpworks™ and all its affiliated labels, logos or names are
            registered trademarks and the property of Cloud Imperium LLC and
            Cloud Imperium Ltd.
          </p>
        </v-col>
        <v-col cols="4">
          <p>
            This website is only for personal purpose, it is not official or
            affiliated to Cloud Imperium. Made by a-frank.dev
          </p>
        </v-col>
      </v-row>
    </v-container>
  </footer>
</template>

<script setup>
import logoWide from "@/assets/img/logo-wide.svg";
</script>

<style scoped>
footer {
  padding: 60px 0;
  background-color: var(--ori-color-black);
  color: var(--ori-color-white);
  width: 100vw;
  font-size: 18px;
  ul {
    list-style: none;
    gap: 8px;
    display: flex;
    flex-direction: column;
    li {
      opacity: 0.5;
      position: relative;
    }
  }
  img.logo-wide {
    width: 100%;
    margin-bottom: 12px;
  }
  .links-topic {
    font-size: 24px;
    font-weight: 500;
  }
  .disclaimer {
    opacity: 0.3;
    font-size: 16px;
  }
}
</style>
