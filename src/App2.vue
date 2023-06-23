<script setup>
import CCDraw from "./components/CCDraw.vue";
</script>
<template>
  <div class="h-screen flex overflow-hidden bg-blue-50">
    <!-- Sidebar (Slides navigation) -->
    <div class="w-64 bg-blue-200 overflow-auto">
      <!-- Slide Previews -->
      <div class="p-4">
        <!-- Repeat this block for each slide preview -->
        <!-- The number can be dynamically generated if using a templating or scripting language -->
        <div class="bg-blue-100 rounded p-2 mb-2">
          <img
            class="w-full h-20 object-cover rounded"
            src="https://via.placeholder.com/150"
            alt="Slide preview"
          />
          <p class="text-sm mt-2">Slide 1</p>
        </div>

        <!-- Add more slide previews as needed -->
        <!-- ... -->
      </div>
    </div>

    <!-- Main area (Toolbar and Slide content) -->
    <div class="flex-grow bg-white overflow-auto">
      <!-- Toolbar -->
      <div
        class="h-16 bg-blue-200 border-b border-blue-300 flex items-center px-4"
      >
        <!-- Toolbar buttons -->
        <button class="bg-blue-300 rounded px-4 py-2 mr-2 text-white">
          Button 1
        </button>
        <button class="bg-blue-300 rounded px-4 py-2 mr-2 text-white">
          Button 2
        </button>
        <!-- Add more toolbar buttons here -->
      </div>

      <!-- Slide content -->
      <div class="p-6">
        <img
          class="w-full h-64 object-cover rounded"
          src="https://via.placeholder.com/350"
          alt="Slide content"
        />
        <h2 class="text-2xl font-bold mt-4">Slide Title</h2>
        <p class="mt-2 text-blue-800">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
          odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
          quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
        </p>
        <CCDraw />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
