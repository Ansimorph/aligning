<template>
  <div>
    <transition-group name="fade">
      <prism
        v-for="(line, index) in codeLines"
        v-if="step >= index + 2"
        :key="line"
        class="code-block"
      >{{ line }}</prism>
    </transition-group>
  </div>
</template>

<script>
import "prismjs";
import Prism from "vue-prism-component";

export default {
    data() {
        return {
            codeLines: [
                "<p>High fidelity is for browsers</p>",
                "<p>Learn to pair</p>",
                "<p>Make tweaks together before they feel like criticism</p>",
            ],
        };
    },
    props: ["step"],
    components: {
        Prism,
    },
};
</script>

<style lang="scss">
@import "../variables.scss";

code[class*="language-"],
pre[class*="language-"] {
    color: $white;
    background: none;
    font-family: "IBM Plex Mono", Consolas, Monaco, "Andale Mono", "Ubuntu Mono",
        monospace;
    font-size: $h3size;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    white-space: pre-wrap;
    line-height: 1.3;
    tab-size: 4;
    hyphens: none;
}

pre[class*="language-"]::selection,
pre[class*="language-"] ::selection,
code[class*="language-"]::selection,
code[class*="language-"] ::selection {
    text-shadow: none;
    background: #9aa2b1;
}

@media print {
    code[class*="language-"],
    pre[class*="language-"] {
        text-shadow: none;
    }
}
/* Code blocks */
pre[class*="language-"] {
    padding: 0;
    margin: 0;
    overflow: auto;
}

/* Inline code */
:not(pre) > code[class*="language-"] {
    padding: 0.1em;
    border-radius: 0.3em;
    white-space: normal;
}

.token.comment,
.token.prolog,
.token.doctype,
.token.cdata {
    color: #5c6370;
}

.token.punctuation {
    color: #abb2bf;
}

.token.selector,
.token.tag {
    color: $red;
}

.token.property,
.token.boolean,
.token.number,
.token.constant,
.token.symbol,
.token.attr-name,
.token.deleted {
    color: #d19a66;
}

.token.string,
.token.char,
.token.attr-value,
.token.builtin,
.token.inserted {
    color: #98c379;
}

.token.operator,
.token.entity,
.token.url,
.language-css .token.string,
.style .token.string {
    color: #56b6c2;
}

.token.atrule,
.token.keyword {
    color: $purple;
}

.token.function {
    color: $blue;
}

.token.regex,
.token.important,
.token.variable {
    color: $purple;
}

.token.important,
.token.bold {
    font-weight: bold;
}

.token.italic {
    font-style: italic;
}

.token.entity {
    cursor: help;
}

pre.code-block {
    margin-bottom: $space * 6;
}
</style>
