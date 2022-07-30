import type { RouterConfig } from "@nuxt/schema";

// https://router.vuejs.org/api/#routeroptions
export default <RouterConfig>{
  scrollBehavior: async (to, _from, savedPosition) => {
    if (savedPosition) {
      return savedPosition;
    }

    // https://dev.to/dimer191996/nuxt-js-smooth-scrolling-with-hash-links-94a
    const findEl = (hash: string, x?: number) => {
      return (
        document.querySelector(hash) ||
        new Promise((resolve, _reject) => {
          if (x > 50) {
            return resolve(findEl("body"));
          }
          setTimeout(() => {
            resolve(findEl(hash, ++x || 1));
          }, 100);
        })
      );
    };

    if (to.hash) {
      const el = await findEl(to.hash);
      if ("scrollBehavior" in document.documentElement.style) {
        return window.scrollTo({ top: el.offsetTop, behavior: "smooth" });
      } else {
        return window.scrollTo(0, el.offsetTop);
      }
    }

    return new Promise((resolve, _reject) => {
      setTimeout(() => {
        resolve({ top: 0, behavior: "smooth" });
      }, 100);
    });
  },
};
