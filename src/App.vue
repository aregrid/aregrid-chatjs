<script setup>
import CCDraw from "./components/CCDraw.vue";
</script>

<template>
  <div class="banner">CCDraw</div>
  <div class="ccdraw-wrapper">
    <CCDraw />
  </div>
</template>

<style scoped>
.banner {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3em;
  background-color: #646cff;
  color: white;
  font-size: 1.5em;
  font-weight: bold;
}
.ccdraw-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  box-shadow: 0 0 1em #00000022;
}
</style>
