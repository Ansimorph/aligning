<template>
  <div class="title-container" :style="{'text-align': alignment, 'align-items': flexAlignment}">
    <div class="icons">
      <input type="radio" v-model="alignment" value="left" id="left" name="align" class="visually-hidden icons__input" />
      <label class="icons__item" for="left"></label>
      <input type="radio" v-model="alignment" value="center" id="center" name="align" class="visually-hidden icons__input" />
      <label class="icons__item" for="center"></label>
      <input type="radio" v-model="alignment" value="right" id="right" name="align" class="visually-hidden icons__input" />
      <label class="icons__item" for="right"></label>
      <input type="radio" v-model="alignment" value="justify" id="justify" name="align" class="visually-hidden icons__input" />
      <label class="icons__item" for="justify"></label>
    </div>
    <h1>Aligning Development & Design</h1>
    <div class="author">
      Björn Ganslandt<br />
      <a href="https://twitter.com/Ansimorph">@ansimorph</a>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            alignment: "left",
        };
    },
    computed: {
        flexAlignment: function() {
            switch (this.alignment) {
                case "left":
                    return "flex-start";
                case "right":
                    return "flex-end";
                case "justify":
                    return "stretch";
                default:
                    return this.alignment;
            }
        },
    },
};
</script>

<style lang="scss" scoped>
@import "../variables.scss";
@import url(../assets/fonts/material-design-iconic-font/css/material-design-iconic-font.css);

.title-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: $space * 87;
}

.icons {
    display: flex;
    justify-content: space-between;
    width: $space * 40;
}

.icons__item {
    font-family: "Material-Design-Iconic-Font";
    font-size: $space * 5;
    cursor: pointer;

    .icons__input:checked + &,
    &:hover {
        color: $blue;
    }
}

.author {
    color: $blue;
    font-family: $sans;
    line-height: 1.5;
    font-size: $h4size;
}
</style>
