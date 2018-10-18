<template>
  <div class="pong">
    <div class="pad">Developer</div>
    <div class="pad">Designer</div>
    <div class="ball"></div>
    <div class="net"></div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            browserSize: 0,
        };
    },
    computed: {},
    directives: {},
    methods: {},
};
</script>

<style lang="scss" scoped>
@import "../variables.scss";

.net {
    position: absolute;
    left: 50%;
    top: 0;
    height: 100%;
    transform: translateX(-50%);
    width: $space;
    background: repeating-linear-gradient(
        180deg,
        $blue,
        $blue ($space * 3),
        $black ($space * 3),
        $black ($space * 6.1)
    );
}

.pad {
    padding: $space ($space * 4);
    transform: rotate(90deg);
}

.ball,
.pad {
    position: absolute;
    background-color: $white;
    color: $black;
    font-size: $h3size;
}

.ball {
    width: $space * 4;
    height: $space * 4;
}
</style>
