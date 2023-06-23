<script setup></script>
<template>
  <div class="h-screen w-screen flex flex-col bg-gray-100">
    <!-- Header -->
    <header class="h-16 bg-white shadow flex items-center justify-between px-6">
      <h1 class="text-lg font-bold text-gray-700">AI Wiki</h1>
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
          <!-- Page 1 -->
          <li>
            <a href="#" class="text-gray-700 hover:text-blue-500">
              <h2 class="text-sm font-bold">Introduction to AI</h2>
              <p class="text-xs text-gray-500">
                A brief overview of artificial intelligence
              </p>
            </a>
          </li>
          <!-- Page 2 -->
          <li>
            <a href="#" class="text-gray-700 hover:text-blue-500">
              <h2 class="text-sm font-bold">Machine Learning</h2>
              <p class="text-xs text-gray-500">
                Understanding machine learning and its applications
              </p>
            </a>
          </li>
          <!-- Add more wiki pages here -->
        </ul>
      </aside>

      <!-- Wiki Content -->
      <main class="flex-grow bg-gray-100 p-6 overflow-y-scroll">
        <article>
          <h1 class="text-2xl font-bold text-gray-700 mb-4">
            Introduction to AI
          </h1>
          <p class="text-gray-600">
            Artificial intelligence (AI) refers to the simulation of human
            intelligence in machines that are programmed to think like humans
            and mimic their actions. The term may also be applied to any machine
            that exhibits traits associated with a human mind such as learning
            and problem-solving. The ideal characteristic of artificial
            intelligence is its ability to rationalize and take actions that
            have the best chance of achieving a specific goal.
          </p>

          <h1 class="text-2xl font-bold text-gray-700 mb-4 mt-6">
            Machine Learning
          </h1>
          <p class="text-gray-600">
            Machine learning is a type of artificial intelligence (AI) that
            allows software applications to become more accurate in predicting
            outcomes without being explicitly programmed to do so. Machine
            learning algorithms use historical data as input to predict new
            output values. Recommendations in your streaming service,
            predictions in your weather app, and tagging in your photo album are
            all influenced by machine learning algorithms.
          </p>
        </article>
      </main>
    </div>
  </div>
</template>

<style scoped></style>
