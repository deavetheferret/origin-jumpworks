<template>
  <div class="o-container">
    <v-container>
      <v-row>
        <v-col cols="12" class="wide-col">
          <span>Error №</span>
          <h1>404</h1>
          <p>You seem lost, may we help you find your way again.</p>
          <p>
            This page is either under construction or simply non-existent, if
            this is the case we are terribly sorry.
          </p>
          <router-link to="/">Back to the site</router-link>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style scoped>
.o-container {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 250px;
    font-weight: 600;
    display: inline-block;
    margin-left: 20px;
  }
  span {
    font-size: 20px;
    display: inline-block;
  }
  p {
    margin-bottom: 20px;
  }
  a {
    font-size: 20px;
    font-weight: 500;
  }
}
</style>
