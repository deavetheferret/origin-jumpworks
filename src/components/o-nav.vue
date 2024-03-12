<template ref="o-navigation">
  <nav>
    <v-container>
      <v-row>
        <v-col cols="5">
          <ul>
            <li><a href="./">Home</a></li>
            <li><a href="#">Events</a></li>
            <li><a href="#">History</a></li>
            <li><a href="#">Ships</a></li>
          </ul>
        </v-col>
        <img src="../assets/img/appart-poster.png" alt="" />
      </v-row>
    </v-container>
  </nav>
</template>

<script></script>

<style scoped>
nav {
  height: 85vh;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: red; */
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
        transition: transform 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
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
</style>
