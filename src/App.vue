<template>
  <div id="app">
    <div class="eg-slideshow">
      <slide leave='fadeOut'>
        <title-slide></title-slide>
      </slide>
      <slide leave='fadeOut'>
        <h1 class="solitary-headline">1. The Problem</h1>
      </slide>
      <slide leave='fadeOut'>
        <div class="side-by-side">
          <h1 class="solitary-headline">Gaps between Design and Specification</h1>
          <div class="horizontal-center">
            <browser-window></browser-window>
          </div>
        </div>
      </slide>
    </div>
  </div>
</template>

<script>
import { Slideshow } from "eagle.js";
import TitleSlide from "./slides/TitleSlide.vue";
import BrowserWindow from "./components/BrowserWindow.vue";

export default {
    name: "app",
    components: { TitleSlide, BrowserWindow },
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
@import "./base.scss";

h1 {
    font-size: $space * 10;
    font-weight: 400;
    margin: 0;
    max-width: 10em;
}

h2 {
    font-size: $space * 6;
}

h3 {
    font-size: $space * 4;
}

.solitary-headline {
    margin-top: $space * 9;
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

.vertical-center {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
}

.horizontal-center {
    display: flex;
    flex: 1;
    justify-content: center;
}

.side-by-side {
    display: flex;

    > *:not(:last-child) {
        margin-right: $space * 10;
    }
}
</style>
