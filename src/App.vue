<template>
  <div id="app">
    <div class="eg-slideshow">
      <slide leave='fadeOut'>
        <title-slide></title-slide>
      </slide>
      <slide leave='fadeOut'>
        wer
      </slide>
    </div>
  </div>
</template>

<script>
import { Slideshow } from "eagle.js";
import TitleSlide from "./slides/TitleSlide.vue";

export default {
    name: "app",
    components: { TitleSlide },
    mixins: [Slideshow],
    props: {
        mouseNavigation: { default: false },
    },
    data: function() {
        return {
            baseUrl: process.env.BASE_URL,
        };
    },
};
</script>

<style lang="scss">
@import "./assets/fonts/plex/css/ibm-plex.css";
@import "./variables.scss";

body {
    margin: 0;
}

.eg-slideshow,
.eg-slide {
    height: 100%;
    overflow: hidden;
    width: 100%;
    position: absolute;
}

.eg-slideshow {
    background-color: $black;
    font-family: "IBM Plex Serif", Helvetica, sans-serif;
    color: $white;
}

.eg-slide {
    margin-top: $space * 12;
    margin-left: $space * 14;
}

h1 {
    font-size: $space * 10;
    font-weight: 400;
}

h2 {
    font-size: $space * 6;
}

h3 {
    font-size: $space * 4;
}

a {
    color: $blue;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }

    &:active {
        color: lighten($blue, 10%);
    }
}
</style>
