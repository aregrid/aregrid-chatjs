<script setup>
import { SimpleAffineEditor } from "@blocksuite/editor";
import "@blocksuite/editor/themes/affine.css";

try {
  const host = new SimpleAffineEditor();
  document.body.appendChild(host);
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
