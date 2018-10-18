<template>
  <div class="title-container">
    <div class="icons">
      <span class="icons__item icons__item--active"></span>
      <span class="icons__item"></span>
      <span class="icons__item"></span>
      <span class="icons__item"></span>
    </div>
    <h1>Aligning Development & Design</h1>
    <div class="author">
      Björn Ganslandt<br />
      <a href="https://twitter.com/Ansimorph">@ansimorph</a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../variables.scss";
@import url(../assets/fonts/material-design-iconic-font/css/material-design-iconic-font.css);

.title-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: $space * 81.5;
}

.icons {
    display: flex;
    justify-content: space-between;
    width: $space * 40;
}

.icons__item {
    font-family: "Material-Design-Iconic-Font";
    font-size: $space * 5;

    &--active {
        color: $blue;
    }
}

.author {
    color: $blue;
    font-family: "IBM Plex Sans", Helvetica, sans-serif;
    line-height: 1.5;
    font-size: $h4size;
}
</style>
