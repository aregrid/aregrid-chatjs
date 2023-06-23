<script setup>
import { ref } from "vue";
import { SimpleAffineEditor } from "@blocksuite/editor";
import "@blocksuite/editor/themes/affine.css";

try {
  const editor = new SimpleAffineEditor();
  document.body.appendChild(editor);
  // editor.mode = "edgeless";
  window.editor = document.querySelector("editor-container");
  // window.editor.mode = "edgeless";
} catch (e) {
  console.error("Failed to load editor");
  console.error(e);
}
</script>

<template></template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
