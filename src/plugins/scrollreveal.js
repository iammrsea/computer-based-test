import Scrollreveal from "scrollreveal";

export default {
  install(Vue, options = {}) {
    Vue.directive("scroll-reveal", {
      inserted(el, binding) {
        if (options || binding.value) {
          Object.assign(options, binding.value);
          Scrollreveal().reveal(el, options);
        } else {
          Scrollreveal().reveal(el, options);
        }
      }
    });
  }
};
