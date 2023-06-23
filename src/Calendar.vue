<script setup></script>
<template>
  <div class="bg-gray-100 h-screen p-10">
    <!-- Calendar Container -->
    <div class="bg-white rounded-lg shadow p-6">
      <!-- Calendar Header -->
      <div class="flex justify-between items-center mb-6">
        <div>
          <h2 class="text-lg font-medium text-gray-800">June 2023</h2>
        </div>
        <div>
          <button class="bg-blue-500 text-white px-4 py-2 rounded text-sm">
            Today
          </button>
        </div>
      </div>

      <!-- Days of the Week -->
      <div class="grid grid-cols-7 text-center">
        <div class="text-gray-500">Sun</div>
        <div class="text-gray-500">Mon</div>
        <div class="text-gray-500">Tue</div>
        <div class="text-gray-500">Wed</div>
        <div class="text-gray-500">Thu</div>
        <div class="text-gray-500">Fri</div>
        <div class="text-gray-500">Sat</div>
      </div>

      <!-- Calendar Grid -->
      <div class="grid grid-cols-7 gap-4 mt-4">
        <!-- Repeat this for each day -->
        <div class="border rounded p-2">
          <div class="text-right text-sm text-gray-500">1</div>
          <!-- Add events here -->
        </div>

        <!-- Add more days here -->
        <!-- ... -->
      </div>
    </div>
  </div>
</template>

<style scoped></style>
