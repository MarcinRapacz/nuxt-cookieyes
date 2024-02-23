// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      script: [
        {
          src: "https://cdn-cookieyes.com/client_data/fcf743ce2c6c407518757022/script.js",
          type: "text/javascript",
          id: "cookieyes",
        },
      ],
    },
  },
});
