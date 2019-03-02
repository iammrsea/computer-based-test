import StoryblokClient from "storyblok-js-client";

const ACCESS_TOKEN = "phEwFrYujfrxL1CAKfse6wtt";

export default new StoryblokClient({
  accessToken: ACCESS_TOKEN,
  cache: {
    clear: "auto",
    type: "memory"
  }
});
