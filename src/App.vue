<script setup>
import CCDraw from "./components/CCDraw.vue";
</script>
<template>
  <div class="h-screen bg-gray-100 flex">
    <aside class="w-1/4 bg-gray-200 p-4">
      <h2 class="text-lg font-semibold text-gray-800 mb-4">Sidebar</h2>
      <!-- Sidebar content goes here -->
    </aside>

    <div class="flex-1 bg-white">
      <header class="bg-white border-b border-gray-300 p-4">
        <h1 class="text-xl font-semibold text-gray-800">
          Welcome to our Whiteboard
        </h1>
      </header>

      <main class="p-4">
        <h2 class="text-lg font-semibold text-gray-800 mb-4">Whiteboard</h2>
        <div class="bg-white rounded-lg shadow-md p-6">
          <!-- Whiteboard content goes here -->
          <CCDraw />
        </div>
      </main>

      <footer class="bg-white border-t border-gray-300 p-4 text-gray-600">
        <p>Footer content goes here</p>
      </footer>
    </div>
  </div>
</template>

<style scoped></style>
