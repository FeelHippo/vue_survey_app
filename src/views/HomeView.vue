<template>
  <v-container fill-height justify-center align-center class="hero">
    <v-col style="height: 100vh;">
      <v-row style="height: 10%;">
        <v-col align="center" justify="center">
          <v-sheet>
            <h2>This is the Home Section</h2>
          </v-sheet>
        </v-col>
      </v-row>
      <v-row style="height: 10%;">
        <v-col align="center" justify="center">
          <v-sheet>
            <v-btn
              color="secondary"
              @click="$router.push({ path: '/create-survey' })"
            >
              Create a Questionnaire
            </v-btn>
          </v-sheet>
        </v-col>
      </v-row>
      <v-row>
        <router-view />
      </v-row>
    </v-col>
  </v-container>
</template>

<style scoped>
.v-sheet {
  background: transparent;
}
.hero {
  background: url('../../public/home.png');
  background-size: cover;
  height: 100vh;
}
</style>
