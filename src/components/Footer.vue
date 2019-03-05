<template>
  <footer id="footer">
    <v-layout>
      <v-flex xs12>
        <span
          id="feedback"
          class="white--text text-xs-center text-uppercase"
        >For Feedback(s), contact</span>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs5 class="text-xs-center">
        <i class="fas fa-phone"></i>
        <span class="white--text text-xs-center mb-2 pa-2">+2347067859271</span>
      </v-flex>
      <v-flex xs7 class="text-xs-center">
        <i class="far fa-envelope"></i>
        <span class="white--text text-xs-center mb-2 pa-2">Ekwughaandrew@gmail.com</span>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex xs12>
        <span id="footer" class="white--text text-xs-center">&copy; 2019</span>
      </v-flex>
    </v-layout>
  </footer>
</template>
<style scoped>
#footer {
  background: #0d47a1;
}
span {
  display: block;
  text-align: start;
}
i {
  font-size: 18px;
  margin-top: 20px;
  padding: 10px;

  color: #fff;
}
#feeback {
  padding: 20px;
  margin-top:30px;
}
#footer {
  padding: 10px;
  margin-top: 10px;
}
</style>
