<template>
  <v-container>
    <h1>This is my testing component</h1>
    <h2>This is the cv {{cv}}</h2>
    <div v-if="subjects.length>0">
      <div v-for="(question,i) in subjects" :key="i">
        <div>{{question}}</div>
      </div>
    </div>
    <div>
      {{currentPage}}
      <v-btn @click="onNext">Next</v-btn>
    </div>
  </v-container>
</template>
<script>
// import { getCV, get25Questions, get50Questions } from "@/services/storyblok.js";
// import StoryblokClient from "storyblok-js-client";
// import marked from "marked";

export default {
  // data() {
  //   return {
  //     cv: "",
  //     data: null,
  //     subjects: [],
  //     currentPage: 0
  //   };
  // },
  // filters: {
  //   markedQuestion(question) {
  //     return marked(question);
  //   }
  // },
  // created() {
  // console.log(localStorage.remainingSpace);
  // getCV()
  //   .then(res => {
  //     this.cv = res.data.space.version;
  //     return get25Questions({
  //       cv: this.cv,
  //       starts_with: "english",
  //       page: 1
  //     });
  //   })
  //   .then(response => {
  //     response.data.stories.forEach(story => {
  //       this.pushDataToArray("english", story);
  //     });
  //     return get50Questions({
  //       cv: this.cv,
  //       starts_with: "physics",
  //       page: 1,
  //       sort_by: "name:asc"
  //     });
  //   })
  //   .then(response => {
  //     console.log(response);
  //     response.data.stories.forEach(story => {
  //       this.pushDataToArray("physics", story);
  //     });
  //   })
  //   .catch(error => {
  //     console.log(error);
  //   });
  //   this.$store.dispatch("setLoading", true);
  //   this.$store.dispatch("setError", false);
  //   const cv = this.$store.getters["cacheVersion"];
  //   get25Questions({
  //     cv: cv,
  //     starts_with: "Chemistry",
  //     page: 1
  //   }).then(res => {
  //     this.$store.dispatch("setLoading", false);
  //     console.log(res);
  //     res.data.stories.forEach(story => {
  //       this.pushDataToArray("English Language", story);
  //     });
  //   });
  // },
  // methods: {
  //   pushDataToArray(name, story) {
  //     const content = story.content;
  //     content.selectedAnswer = null;
  //     content.question = marked(content.question);
  //     content.name = name;
  //     this.subjects.push(content);
  //   },
  //   onNext() {
  //     this.currentPage =
  //       (this.currentPage + 1) % 5 === 0 ? 1 : (this.currentPage + 1) % 5;
  //   }
  // }
};
</script>
