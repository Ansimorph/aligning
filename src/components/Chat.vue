<template>
  <ul class="chat">
    <transition-group name="fade">
      <li v-for="(bubble, index) in chatBubbles" v-if="step >= index + 2" :key="bubble" class="chat__bubble">
        {{ bubble }}
      </li>
    </transition-group>
  </ul>
</template>

<script>
export default {
    data() {
        return {
            chatBubbles: [
                "Ideate in your favourite design tool",
                "Discuss Tradeoffs before they mean discarding high fidelity designs",
            ],
        };
    },
    props: ["step"],
};
</script>

<style lang="scss" scoped>
@import "../variables.scss";

.chat {
    list-style: none;
    padding: 0;
    margin: 0;
    width: 100%;
}

.chat__bubble {
    background: $white;
    color: $black;
    padding: ($space * 2) ($space * 4);
    font-size: $h4size;
    border-radius: $space * 2;
    max-width: 70%;
    clear: both;

    &:not(:last-child) {
        margin-bottom: $space * 8;
    }

    &:nth-child(odd) {
        float: left;
    }

    &:nth-child(even) {
        float: right;
    }
}
</style>
