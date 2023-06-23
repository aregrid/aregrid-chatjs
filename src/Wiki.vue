<script setup></script>
<template>
  <div class="h-screen w-screen flex flex-col bg-gray-100">
    <!-- Header -->
    <header class="h-16 bg-white shadow flex items-center justify-between px-6">
      <h1 class="text-lg font-bold text-gray-700">Your Wiki Name</h1>
      <div class="flex items-center space-x-4">
        <button class="bg-blue-500 text-white px-4 py-2 rounded text-sm">
          Edit
        </button>
      </div>
    </header>

    <!-- Main content (sidebar and content area) -->
    <div class="flex flex-grow overflow-hidden">
      <!-- Sidebar (Wiki Tree) -->
      <aside class="w-64 bg-white shadow overflow-y-scroll">
        <ul class="divide-y divide-gray-200 p-4 space-y-2">
          <!-- Repeat this for each wiki page -->
          <li>
            <a href="#" class="text-gray-700 hover:text-blue-500">
              <h2 class="text-sm font-bold">Page Title</h2>
              <p class="text-xs text-gray-500">Page description</p>
            </a>
          </li>
          <!-- Add more wiki pages here -->
        </ul>
      </aside>

      <!-- Wiki Content -->
      <main class="flex-grow bg-gray-100 p-6 overflow-y-scroll">
        <article>
          <h1 class="text-2xl font-bold text-gray-700 mb-4">Page Title</h1>
          <p class="text-gray-600">Page content goes here...</p>
        </article>
      </main>
    </div>
  </div>
</template>

<style scoped></style>
