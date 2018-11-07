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
          <h1 class="solitary-headline">Gaps between Product and Specification</h1>
          <div class="horizontal-center">
            <browser-window></browser-window>
          </div>
        </div>
      </slide>
      <slide leave='fadeOut' :steps="4  ">
        <pong :step="step"></pong>
      </slide>
      <slide leave='fadeOut'><h1 class="solitary-headline">2. The Solution</h1></slide>
      <slide :steps="2" leave='fadeOut'>
        <div class="side-by-side">
          <div>
            <h1 class="solitary-headline margin-medium">A better Jira?</h1>
            <p class="h2size" v-if="step >= 2">No</p>
          </div>
          <img class="jira-image" src="./assets/images/jira.png" />
        </div>
      </slide>
      <slide :steps="2" leave='fadeOut'>
        <div class="side-by-side">
          <div>
            <h1 class="solitary-headline margin-medium">A better Photoshop?</h1>
            <p class="h2size" v-if="step >= 2">Maybe</p>
          </div>
          <img class="photoshop-image" src="./assets/images/photoshop.png" />
        </div>
      </slide>
      <!-- <slide leave='fadeOut'>
        <h1 class="fullsize-headline">Every design tool matching the web platform in expressiveness will also match it in complexity
        </h1>
      </slide> -->
      <slide :steps="2" leave='fadeOut'>
        <div class="side-by-side">
          <div>
            <h1 class="solitary-headline margin-medium">Design Systems?</h1>
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
      <slide leave='fadeOut' :steps="4">
        <div class="side-by-side">
          <h1 class="solitary-headline">Code early</h1>
          <code-component :step="step"></code-component>
        </div>
      </slide>
      <slide leave='fadeOut'>
        <h1 class="solitary-headline">Build up respect for each others craft</h1>
      </slide>
      <slide leave='fadeOut'>
        <h1 class="solitary-headline">Because unicorns don't scale</h1>
      </slide>
      <slide leave='fadeOut'><h1 class="solitary-headline">4. Implications</h1></slide>
      <slide leave='fadeOut'>
        <div class="side-by-side">
          <h1 class="solitary-headline">A workflow relying on trust</h1>
        </div>
      </slide>
      <slide leave='fadeOut'>
        <div class="credits">
          <p class="h2size margin-small">Follow Me On Twitter:</p>
          <p class="margin-large">
            <a class="h3size" href="https://twitter.com/Ansimorph">@ansimorph</a>
          </p>
          <p class="h2size margin-small">Get the slides:</p>
          <a class="h3size" href="https://github.com/Ansimorph/aligning/">https://github.com/Ansimorph/aligning/</a>
        </div>
      </slide>
    </div>
  </div>
</template>

<script>
import { Slideshow } from "eagle.js";
import TitleSlide from "./slides/TitleSlide.vue";
import BrowserWindow from "./components/BrowserWindow.vue";
import Pong from "./components/Pong.vue";
import Chat from "./components/Chat.vue";
import CodeComponent from "./components/CodeComponent.vue";

export default {
    name: "app",
    components: { TitleSlide, BrowserWindow, Pong, Chat, CodeComponent },
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
h3,
.h1size,
.h2size,
.h3size {
    font-weight: 400;
    line-height: 1.1;
}

h1,
.h1size {
    font-size: $h1size;
    margin: 0;
    max-width: 10em;
    text-transform: capitalize;
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

p {
    margin-top: 0;
    margin-bottom: $space;
}

.margin-small {
    margin-bottom: $space * 2;
}

.margin-medium {
    margin-bottom: $space * 4;
}

.margin-large {
    margin-bottom: $space * 12;
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
        padding-right: $space * 15;
        flex-shrink: 0;
        width: 50%;
    }
}

.fade-enter-active,
.fade-leave-active {
    transition: all 0.3s;
    transform: translateY(0);
}
.fade-enter,
.fade-leave-to {
    opacity: 0;
    transform: translateY(20%);
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

.credits {
    margin-top: $space * 20;
}
</style>
