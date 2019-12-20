// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Infinity Seeker - Web Engineer",
  plugins: [
    {
      use: "@gridsome/source-wordpress",
      options: {
        baseUrl: "https://data.infinityseeker.com", // required
        typeName: "WordPress", // GraphQL schema name (Optional)
        perPage: 100, // How many posts to load from server per request (Optional)
        concurrent: 10, // How many requests to run simultaneously (Optional)
        routes: {
          post: "/:year/:month/:day/:slug", //adds route for "post" post type (Optional)
          post_tag: "/tag/:slug" // adds route for "post_tag" post type (Optional)
        }
      }
    },
    {
      use: "gridsome-plugin-tailwindcss",
      options: {
        purgeConfig: {},
        presetEnvConfig: {},
        shouldPurge: true,
        shouldImport: true,
        shouldTimeTravel: true
      }
    },
    {
      use: "@gridsome/plugin-critical",
      options: {
        paths: ["/"],
        width: 1300,
        height: 900
      }
    }
  ]
};
