import storyblokClient from "@/utils/storyblok";

const endPoint = "cdn/stories";

export const getCV = () => {
  return storyblokClient
    .get("cdn/spaces/me", {})
    .then(response => {
      return response;
    })
    .catch(error => {
      //console.log(error);
      return new Error(error);
    });
};

export const get50Questions = (options = {}) => {
  return storyblokClient
    .get(endPoint, {
      ...options,
      version: "published",
      per_page: 50
    })
    .then(res => {
      return res;
    })
    .catch(error => {
      //console.log(error);
      return new Error(error);
    });
};

export const get25Questions = (options = {}) => {
  return storyblokClient
    .get(endPoint, {
      ...options,
      version: "published",
      per_page: 25
    })
    .then(res => {
      return res;
    })
    .catch(error => {
      return new Error(error);
      //console.log(error);
    });
};

export const getListOfSubjects = (options = {}) => {
  return storyblokClient
    .get(endPoint, {
      ...options,
      version: "published"
    })
    .then(res => {
      return res;
    })
    .catch(error => {
      return new Error(error);
      //console.log(error);
    });
};
