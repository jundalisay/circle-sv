<script lang="ts">
  import { enhance } from '$app/forms';
  import type { PageServerData } from './$types';

  let { data }: { data: PageServerData } = $props();
</script>



<!-- <div class="min-h-screen bg-gray-100">
  <header class="bg-white shadow-sm">
    <div class="max-w-2xl mx-auto px-4 py-4">
      <h1 class="text-2xl font-bold">Menu</h1>
    </div>
  </header>
  
  <main class="max-w-2xl mx-auto p-4 py-6">

    <div class="fixed inset-0 bg-white p-6 flex flex-col gap-4">
      <a href="/products">Products</a>
      <a href="/services">Services</a>
      <a href="/points">Points</a>
      <a href="/settings">Settings</a>
    </div>
  </main>
</div>
 -->


<!-- <div class="min-h-screen bg-gray-100 p-4"> -->
<div class="max-w-2xl mx-auto p-4 py-6">

<div class="w-full p-4 border bg-white border-gray-200 rounded-lg shadow sm:p-6">

<h5 class="mb-3 font-semibold md:text-xl">
Hi, {data.user.username}!
</h5>

<p class="pb-4 text-sm font-normal text-gray-500 dark:text-gray-400">Your user ID is {data.user.id}.</p>

<ul class="my-4 space-y-3">


<li>
<a href="/" class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-300 hover:bg-gray-100 group hover:shadow">
  <img src="/bullhorn.png" alt="Bullhorn" class="size-8">
<span class="flex-1 ms-3 whitespace-nowrap">Posts</span>
<span class="inline-flex items-center justify-center px-2 py-0.5 ms-3 text-xs font-medium text-gray-500 bg-gray-200 rounded-sm dark:bg-gray-700 dark:text-gray-400">100 New</span>
</a>
</li>



<li>
<a href="/products" class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-300 hover:bg-gray-100 group hover:shadow">

  <img src="/candy.png" alt="Candy" class="size-8">

<span class="flex-1 ms-3 whitespace-nowrap">Products</span>
<span class="inline-flex items-center justify-center px-2 py-0.5 ms-3 text-xs font-medium text-gray-500 bg-gray-200 rounded-sm dark:bg-gray-700 dark:text-gray-400">Number of Items</span>
</a>
</li>


<li>
<a href="/services" class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-300 hover:bg-gray-100 group hover:shadow">

<img src="/code.png" alt="Coding" class="size-8">


<span class="flex-1 ms-3 whitespace-nowrap">Services</span>
<span class="inline-flex items-center justify-center px-2 py-0.5 ms-3 text-xs font-medium text-gray-500 bg-gray-200 rounded-sm dark:bg-gray-700 dark:text-gray-400">Number of Items</span>
</a>
</li>


<li>
<a href="/pointss" class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-300 hover:bg-gray-100 group hover:shadow">

  <img src="/1.png" alt="Bullhorn" class="size-8">


<span class="flex-1 ms-3 whitespace-nowrap">Points</span>
<span class="inline-flex items-center justify-center px-2 py-0.5 ms-3 text-xs font-medium text-gray-500 bg-gray-200 rounded-sm dark:bg-gray-700 dark:text-gray-400">100</span>
</a>
</li>


<li>
<a href="/settings" class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-300 hover:bg-gray-100 group hover:shadow">

  <img src="/wrench.png" alt="Bullhorn" class="size-8">

<span class="flex-1 ms-3 whitespace-nowrap">Settings</span>
</a>
</li>

<li>
  <form method="post" action="?/logout" use:enhance>
    <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign Out</button>    
  </form>
</li>

</ul>

<!-- <div>
<a href="#" class="inline-flex items-center text-xs font-normal text-gray-500 hover:underline dark:text-gray-400">
<svg class="w-3 h-3 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7.529 7.988a2.502 2.502 0 0 1 5 .191A2.441 2.441 0 0 1 10 10.582V12m-.01 3.008H10M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
</svg>
Why do I need to connect with my wallet?</a>
</div> -->

</div>

</div>
