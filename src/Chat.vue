<script setup>
import ChatArea from "./components/ChatArea.vue";
</script>
<template>
  <div class="flex flex-col h-screen bg-gray-100">
    <!-- Header -->
    <header class="h-32 shadow flex items-center justify-between px-6">
      <h1 class="text-lg font-bold text-gray-700">Chat Room</h1>
      <div class="flex items-center space-x-4">
        <button class="bg-blue-500 text-white px-4 py-2 rounded text-sm">
          Start Meeting
        </button>
      </div>
    </header>

    <!-- Main content (chat area and input field) -->
    <div class="flex flex-grow overflow-hidden">
      <!-- Message Input Field -->
      <ChatArea />
      <footer class="h-16 border-t border-gray-200 flex items-center px-4">
        <input
          class="flex-grow h-10 px-4 py-2 border rounded"
          type="text"
          placeholder="Type your message here..."
        />
        <button class="bg-blue-500 text-white px-4 py-2 rounded ml-2">
          Send
        </button>
      </footer>
    </div>
  </div>
</template>
<style></style>
