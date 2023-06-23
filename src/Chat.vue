<script setup></script>
<template>
  <div class="flex flex-col h-screen bg-gray-100">
    <!-- Header -->
    <header class="h-16 bg-white shadow flex items-center justify-between px-6">
      <h1 class="text-lg font-bold text-gray-700">Chat Room</h1>
      <div class="flex items-center space-x-4">
        <button class="bg-blue-500 text-white px-4 py-2 rounded text-sm">
          Start Meeting
        </button>
      </div>
    </header>

    <!-- Main content (chat area and input field) -->
    <div class="flex flex-grow overflow-hidden">
      <!-- Chat Area -->
      <main class="flex-grow bg-white p-6 overflow-y-scroll">
        <!-- Text Message -->
        <div class="mb-4">
          <h2 class="font-bold">Username</h2>
          <p class="bg-gray-100 rounded p-2 inline-block">
            Hello, how are you?
          </p>
        </div>

        <!-- Media Message -->
        <div class="mb-4">
          <h2 class="font-bold">Username</h2>
          <img
            class="w-48 h-32 object-cover rounded"
            src="https://via.placeholder.com/150"
            alt="Media Message"
          />
        </div>

        <!-- Code Message -->
        <div class="mb-4">
          <h2 class="font-bold">Username</h2>
          <pre
            class="bg-gray-800 text-white p-2 rounded"
          ><code>// Some code here</code></pre>
        </div>

        <!-- File Message -->
        <div class="mb-4">
          <h2 class="font-bold">Username</h2>
          <a href="#" class="text-blue-500">file.txt</a>
        </div>

        <!-- Emoji Message -->
        <div class="mb-4">
          <h2 class="font-bold">Username</h2>
          <p class="bg-gray-100 rounded p-2 inline-block">👋</p>
        </div>

        <!-- Heading Message -->
        <div class="mb-4">
          <h2 class="font-bold">Username</h2>
          <h3 class="text-lg font-bold">This is a Heading</h3>
        </div>
        <!-- Card Message -->
        <div class="mb-4">
          <h2 class="font-bold">Username</h2>
          <div class="rounded shadow-lg p-4 bg-white">
            <h3 class="font-bold text-xl mb-2">Card Title</h3>
            <p>
              Card content goes here. It could be a brief about an article, a
              task, etc.
            </p>
          </div>
        </div>

        <!-- List Message -->
        <div class="mb-4">
          <h2 class="font-bold">Username</h2>
          <ul class="list-disc list-inside">
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
        </div>
        <!-- Table Message -->
        <div class="mb-4">
          <h2 class="font-bold">Username</h2>
          <table class="table-auto">
            <thead>
              <tr>
                <th class="px-4 py-2">Title</th>
                <th class="px-4 py-2">Author</th>
                <th class="px-4 py-2">Views</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border px-4 py-2">Intro to CSS</td>
                <td class="border px-4 py-2">Adam</td>
                <td class="border px-4 py-2">858</td>
              </tr>
              <tr class="bg-gray-100">
                <td class="border px-4 py-2">A Guide to Flexbox</td>
                <td class="border px-4 py-2">Chris</td>
                <td class="border px-4 py-2">231</td>
              </tr>
              <tr>
                <td class="border px-4 py-2">Learning JavaScript</td>
                <td class="border px-4 py-2">Brett</td>
                <td class="border px-4 py-2">655</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="mb-4 p-4 bg-white rounded shadow">
          <h3 class="font-bold text-xl mb-2">Blog Title</h3>
          <p>First few lines of the blog content...</p>
          <a href="#" class="text-blue-500">Read more</a>
        </div>

        <div class="mb-4 p-4 bg-white rounded shadow">
          <h3 class="font-bold text-xl mb-2">Meeting: Team Standup</h3>
          <p>Date: 23rd June 2023</p>
          <p>Time: 10:00 AM - 10:30 AM</p>
        </div>
      </main>

      <!-- Message Input Field -->
      <footer
        class="h-16 bg-white border-t border-gray-200 flex items-center px-4"
      >
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
