<script setup>
import { onMounted } from "vue";

import { SimpleAffineEditor } from "@blocksuite/editor";
import "@blocksuite/editor/themes/affine.css";

onMounted(() => {
  try {
    const host = new SimpleAffineEditor();
    document.getElementById("editor").appendChild(host);
    // editor.mode = "edgeless";
    window.editor = document.querySelector("editor-container");
    // window.editor.mode = "edgeless";
  } catch (e) {
    console.error("Failed to load editor");
    console.error(e);
  }
});
</script>

<template>
  <div id="editor"></div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
