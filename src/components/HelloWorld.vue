<script setup>
import { ref } from "vue";
import { SimpleAffineEditor } from "@blocksuite/editor";
import "@blocksuite/editor/themes/affine.css";

const editor = new SimpleAffineEditor();
document.body.appendChild(editor);
</script>

<template></template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
