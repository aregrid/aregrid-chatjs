<script setup>
import { onMounted, ref } from "vue";

import { SimpleAffineEditor } from "@blocksuite/editor";
import "@blocksuite/editor/themes/affine.css";
import "./affine.css";
const host = ref(null);
onMounted(() => {
  try {
    const editor = new SimpleAffineEditor();
    host.value.appendChild(editor);
    // editor.mode = "edgeless";
    // window.editor = document.querySelector("editor-container");
    // window.editor.mode = "edgeless";
  } catch (e) {
    console.error("Failed to load editor");
    console.error(e);
  }
});
</script>

<template>
  <div ref="host"></div>
</template>

<style scoped></style>
