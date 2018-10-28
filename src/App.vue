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
      <slide leave='fadeOut' :steps="4">
        <pong :step="step"></pong>
      </slide>
      <slide leave='fadeOut'><h1 class="solitary-headline">2. The Solution</h1></slide>
      <slide :steps="2" leave='fadeOut'>
        <div class="side-by-side">
          <div>
            <h1 class="solitary-headline">A better Jira?</h1>
            <p class="h2size" v-if="step >= 2">No</p>
          </div>
          <img class="jira-image" src="./assets/images/jira.png" />
        </div>
      </slide>
      <slide :steps="2" leave='fadeOut'>
        <div class="side-by-side">
          <div>
            <h1 class="solitary-headline">A better Photoshop?</h1>
            <p class="h2size" v-if="step >= 2">Maybe</p>
          </div>
          <img class="photoshop-image" src="./assets/images/photoshop.png" />
        </div>
      </slide>
      <slide leave='fadeOut'>
        <h1 class="fullsize-headline">Every design tool matching the web platform in expressiveness will also match it in complexity
        </h1>
      </slide>
      <slide :steps="2" leave='fadeOut'>
        <div class="side-by-side">
          <div>
            <h1 class="solitary-headline">Design Systems?</h1>
            <p class="h2size" v-if="step >= 2">Only if they establish a common language for designers and developers</p>
          </div>
          <img class="ds-image" src="./assets/images/designsystem.png" />
        </div>
      </slide>
      <slide leave='fadeOut'><h1 class="solitary-headline">3. The Real Solution</h1></slide>
      <slide leave='fadeOut'>
        <h1 class="solitary-headline">
          Don't improve the handoff – abandon it
        </h1>
      </slide>
      <slide leave='fadeOut' :steps="3">
        <div class="side-by-side">
          <h1 class="solitary-headline">Talk early</h1>
          <chat :step="step"></chat>
        </div>
      </slide>
      <slide leave='fadeOut'>
        <h1 class="solitary-headline">Code early</h1>
        High fidelity is for browsers<br>
        Make tweaks together before they feel like criticism<br>
        Learn to pair
      </slide>
      <slide leave='fadeOut'>
        <h1 class="solitary-headline">Build up respect for each others craft</h1>
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
import Chat from "./components/Chat.vue";

export default {
    name: "app",
    components: { TitleSlide, BrowserWindow, Pong, Chat },
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

h2,
.h2size {
    font-size: $h2size;
}

h3,
.h3size {
    font-size: $h3size;
}

.solitary-headline {
    margin-top: $space * 9;
}

.fullsize-headline {
    margin-top: $space * 8.5;
    padding-left: $space * 3;
    margin-left: auto;
    margin-right: auto;
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

    > :first-child {
        width: 50%;
        padding-right: $space * 15;
        flex-shrink: 0;
    }
}

// Very slide-specifc stuff

.jira-image {
    height: 150vh;
    max-height: 1426px;
}

.photoshop-image {
    height: 150vh;
    max-height: 1890px;
}

.ds-image {
    height: 100vh;
    max-height: 1246px;
}
</style>
