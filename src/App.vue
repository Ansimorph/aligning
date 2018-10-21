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
      <slide leave='fadeOut'>
        <pong></pong>
      </slide>
      <slide leave='fadeOut'><h1 class="solitary-headline">2. The Solution</h1></slide>
      <slide leave='fadeOut'><h1 class="solitary-headline">A better Jira?</h1></slide>
      <slide leave='fadeOut'><h1 class="solitary-headline">A better Photoshop?</h1></slide>
      <slide leave='fadeOut'>
        <h1 class="fullsize-headline">Every design tool matching the web platform in expressiveness will also match it in complexity
        </h1>
      </slide>
      <slide leave='fadeOut'><h1 class="solitary-headline">Design Systems?</h1></slide>
      <slide leave='fadeOut'><h1 class="solitary-headline">3. The Real Solution</h1></slide>
      <slide leave='fadeOut'>
        <h1 class="solitary-headline">Don't improve the handoff – replace it
        </h1>
      </slide>
      <slide leave='fadeOut'>
        <h1 class="solitary-headline">Talk early talk often</h1>
        <h3>Discuss Tradeoffs before they mean discarding designs</h3>
        <h3>Make tweaks together before they feel like criticism</h3>
        <h3>Build up respect for each others craft</h3>
      </slide>
      <slide leave='fadeOut'>
        <h1 class="solitary-headline">High fidelity is for browsers</h1>
        <h1 class="solitary-headline">Ideation belongs in sketch</h1>
      </slide>
      <slide leave='fadeOut'><h1 class="solitary-headline">4. Implications</h1></slide>
      <slide leave='fadeOut'><h1 class="solitary-headline">More trust, less documentation, more risk, better results</h1></slide>
      <slide leave='fadeOut'><h1 class="solitary-headline">Follow Me On Twitter</h1></slide>
    </div>
  </div>
</template>

<script>
import { Slideshow } from "eagle.js";
import TitleSlide from "./slides/TitleSlide.vue";
import BrowserWindow from "./components/BrowserWindow.vue";
import Pong from "./components/Pong.vue";

export default {
    name: "app",
    components: { TitleSlide, BrowserWindow, Pong },
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

h1,
h2,
h3 {
    font-weight: 400;
}

h1 {
    font-size: $h1size;
    line-height: $space * 7;
    margin: 0;
    max-width: 10em;
}

h2 {
    font-size: $h2size;
}

h3 {
    font-size: $h3size;
}

.solitary-headline {
    margin-top: $space * 9;
}

.fullsize-headline {
    margin-top: $space * 8.5;
    line-height: $space * 8;
    max-width: 28ch;
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
}
</style>
