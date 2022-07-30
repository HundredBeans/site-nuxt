// copied from https://github.com/nuxt/framework/issues/4888#issuecomment-1179582115
import type { RouterConfig } from "@nuxt/schema";

// https://router.vuejs.org/api/#routeroptions
export default <RouterConfig>{
  scrollBehavior(to, _from, savedPosition) {
    return new Promise((resolve, _reject) => {
      setTimeout(() => {
        if (savedPosition) {
          resolve(savedPosition);
        } else if (to.hash) {
          resolve({
            el: to.hash,
            top: 80,
            behavior: "smooth",
          });
        } else {
          resolve({ top: 0, behavior: "smooth" });
        }
      }, 100);
    });
  },
};
