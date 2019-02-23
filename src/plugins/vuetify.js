import Vue from "vue";
import Vuetify from "vuetify/lib";
import "vuetify/src/stylus/app.styl";
import colors from "vuetify/es5/util/colors";

Vue.use(Vuetify, {
  iconfont: "md",
  // theme: {
  //   primary: "#3949AB",
  //   accent: "#9C27B0"
  // }
  theme: {
    primary: colors.blue,
    accent: colors.pink.darken1,
    secondary: colors.amber.darken3,
    info: colors.teal.lighten1,
    warning: colors.amber.base,
    error: colors.deepOrange.accent4,
    success: colors.green.accent3
  }
});
