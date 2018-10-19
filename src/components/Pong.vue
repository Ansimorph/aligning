<template>
  <div class="pong">
    <div class="net"></div>
    <div class="pad pad--left" :style="{transform: `translate(${padLeftX}px, ${padLeftY}px) rotate(-90deg)`}">Developer</div>
    <div class="pad pad--right" :style="{transform: `translate(${padRightX}px, ${padRightY}px) rotate(90deg)`}">Designer</div>
    <div class="ball" :style="{transform: `translate(${ballX}px, ${ballY}px)`}"></div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            inertia: 0.001,
            inertiaX: 0,
            inertiaY: 0,
            canvasWidth: 0,
            canvasHeight: 0,
            padding: 10,
            padWidth: 0,
            padLeftX: 0,
            padLeftY: 0,
            padRightX: 0,
            padRightY: 0,
            ballDiameter: 0,
            ballX: 0,
            ballY: 0,
        };
    },
    mounted: function() {
        this.init();
        this.gameLoop();
    },
    computed: {},
    directives: {},
    methods: {
        init() {
            const slideDimensions = document
                .getElementsByClassName("eg-slideshow")[0]
                .getBoundingClientRect();

            const padLeftDimensions = document
                .getElementsByClassName("pad--left")[0]
                .getBoundingClientRect();

            const ballDimensions = document
                .getElementsByClassName("ball")[0]
                .getBoundingClientRect();

            // const padRightDimensions = document
            //     .getElementsByClassName("pad--right")[0]
            //     .getBoundingClientRect();

            this.canvasWidth = slideDimensions.width;
            this.canvasHeight = slideDimensions.height;

            this.padWidth = padLeftDimensions.height;

            this.padLeftX = this.padding;
            this.padLeftY = this.padWidth + this.padding;

            this.padRightX = this.canvasWidth - this.padding;
            this.padRightY = this.padding;

            this.ballDiameter = ballDimensions.width;

            this.ballX = slideDimensions.width / 2 - this.ballDiameter / 2;
            this.ballY = slideDimensions.height / 2 - this.ballDiameter / 2;

            this.inertiaX = this.inertia;
            this.inertiaY = this.inertia;
        },
        gameLoop(tFrame) {
            window.requestAnimationFrame(this.gameLoop);
            this.update(tFrame);
        },
        update() {
            this.ballX += this.inertiaX;
        },
    },
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
    padding: ($space) ($space * 4) ($space * 2);
    transform-origin: 0% 0%;
}

.ball,
.pad {
    left: 0;
    top: 0;
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
