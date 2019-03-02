import { getCV, getListOfSubjects } from "../services/storyblok";

export const loadSubjects = app => {
  app.$store.dispatch("setLoading", true);
  app.$store.dispatch("setError", false);
  getCV()
    .then(res => {
      app.$store.dispatch("cacheVersion", res.data.space.version);
      return getListOfSubjects({
        starts_with: "subjects"
      });
    })
    .then(res => {
      app.$store.dispatch("setLoading", false);
      const subjects = [];
      const stories = res.data.stories;
      stories.forEach(story => {
        subjects.push(story.content.name);
      });
      app.$store.dispatch("subjects", subjects);
    })
    .catch(error => {
      app.$store.dispatch("setError", error);
  
    });
};
