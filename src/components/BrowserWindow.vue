<template>
  <div class="browser-window">
    <div class="browser-window__head">
      <div class="browser-window__dot"></div>
      <div class="browser-window__dot"></div>
      <div class="browser-window__dot"></div>
    </div>
    <div class="browser-window__body" v-resize="onResize">
      <div class="website" v-if="websiteVisible" :class="{ 'website--mobile': mobile }">
        <div class="website__hero"></div>
        <div class="website__teaser"></div>
        <div class="website__teaser"></div>
        <div class="website__teaser"></div>
      </div>
      <div class="question-mark" v-if="!websiteVisible">?</div>
    </div>
  </div>
</template>

<script>
import resize from "vue-resize-directive";

export default {
    data() {
        return {
            browserSize: 0,
        };
    },
    computed: {
        websiteVisible: function() {
            return this.browserSize > 12 || this.browserSize < 8;
        },
        mobile: function() {
            return this.browserSize < 10;
        },
    },
    directives: {
        resize,
    },
    methods: {
        // returns the size of the mini browser in em
        onResize(element) {
            const appElement = document.getElementById("app");
            const baseFontSize = parseFloat(
                getComputedStyle(appElement).fontSize,
            );
            this.browserSize = parseInt(element.style.width, 10) / baseFontSize;
        },
    },
};
</script>

<style lang="scss" scoped>
@import "../variables.scss";

.browser-window__head {
    display: flex;
    background-color: $white;
    padding: ($space * 2) ($space * 5);
    border-top-left-radius: $space;
    border-top-right-radius: $space;
}

.browser-window__dot {
    width: $space * 3;
    height: $space * 3;
    border-radius: 50%;
    margin-right: $space * 2;
    background-color: $black;
}

.browser-window__body {
    background-color: $black;
    padding: $space * 4;
    border-bottom-left-radius: $space;
    border-bottom-right-radius: $space;
    border: ($space * 0.5) solid $white;
    border-top: none;
    resize: horizontal;
    overflow: auto;
}

.website {
    display: grid;
    grid-template-columns: repeat(3, minmax(#{$space * 8}, 1fr));
    grid-auto-rows: #{$space * 20};
    grid-gap: $space * 4;

    &--mobile {
        grid-template-columns: 1fr;
    }

    min-width: $space * 15;
}

.website__hero,
.website__teaser {
    background-color: mix($white, $black);
    border-radius: $space;
}

.website__hero {
    grid-column: 1/-1;
}

.question-mark {
    height: 100%;
    text-align: center;
    font-size: $h2size;
    margin: ($space * 10) 0;
}
</style>
