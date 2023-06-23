<script setup>
import CCDraw from "./components/CCDraw.vue";
</script>
<template>
  <div class="h-screen w-screen flex flex-col bg-gray-100">
    <!-- Top navigation bar -->
    <div class="h-16 bg-white shadow-md flex items-center justify-between px-6">
      <div class="flex items-center space-x-4">
        <img
          class="h-8 w-8"
          src="https://via.placeholder.com/32"
          alt="App logo"
        />
        <h1 class="text-lg font-bold text-gray-700">YourAppName</h1>
      </div>
      <div class="flex items-center space-x-4">
        <!-- You can replace these with actual icons -->
        <span class="material-icons-outlined text-gray-500">search</span>
        <span class="material-icons-outlined text-gray-500">notifications</span>
        <span class="material-icons-outlined text-gray-500">settings</span>
      </div>
    </div>

    <!-- Main content (sidebar and content area) -->
    <div class="flex-grow flex">
      <!-- Left sidebar -->
      <div class="w-64 bg-white shadow-md overflow-y-auto">
        <ul class="divide-y divide-gray-200">
          <!-- Repeat this for each menu item -->
          <li>
            <a href="#" class="block px-6 py-4 hover:bg-gray-100">
              <span class="material-icons-outlined text-gray-500 mr-2"
                >home</span
              >
              <span class="text-gray-700">Home</span>
            </a>
          </li>
          <!-- Add more menu items here -->
        </ul>
      </div>

      <!-- Main content area -->
      <div class="flex-grow bg-gray-100 p-6">
        <!-- Your content goes here -->
        <h2 class="text-2xl font-bold text-gray-700 mb-6">
          Welcome to YourAppName
        </h2>
        <p class="text-gray-600">Start building your content here...</p>
        CC Draw: <CCDraw />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
