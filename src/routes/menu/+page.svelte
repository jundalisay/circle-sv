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
<svg aria-hidden="true" class="h-4" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M72.0998 0.600098H48.3998H24.5998H0.799805V24.4001V48.2001V49.7001V71.8001V71.9001V95.5001H24.5998V72.0001V71.9001V49.8001V48.3001V24.5001H48.3998H72.1998H95.9998V0.700104H72.0998V0.600098Z" fill="#617BFF"/><path d="M48.5 71.8002H72.1V95.6002H73C79.1 95.6002 84.9 93.2002 89.2 88.9002C93.5 84.6002 95.9 78.8002 95.9 72.7002V48.2002H48.5V71.8002Z" fill="#617BFF"/></svg>
<span class="flex-1 ms-3 whitespace-nowrap">Posts</span>
<span class="inline-flex items-center justify-center px-2 py-0.5 ms-3 text-xs font-medium text-gray-500 bg-gray-200 rounded-sm dark:bg-gray-700 dark:text-gray-400">100 New</span>
</a>
</li>



<li>
<a href="/products" class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-300 hover:bg-gray-100 group hover:shadow">

<svg aria-hidden="true" class="h-5" viewBox="0 0 292 292" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M145.7 291.66C226.146 291.66 291.36 226.446 291.36 146C291.36 65.5541 226.146 0.339844 145.7 0.339844C65.2542 0.339844 0.0400391 65.5541 0.0400391 146C0.0400391 226.446 65.2542 291.66 145.7 291.66Z" fill="#3259A5"/><path d="M195.94 155.5C191.49 179.08 170.8 196.91 145.93 196.91C117.81 196.91 95.0204 174.12 95.0204 146C95.0204 117.88 117.81 95.0897 145.93 95.0897C170.8 95.0897 191.49 112.93 195.94 136.5H247.31C242.52 84.7197 198.96 44.1797 145.93 44.1797C89.6904 44.1797 44.1104 89.7697 44.1104 146C44.1104 202.24 89.7004 247.82 145.93 247.82C198.96 247.82 242.52 207.28 247.31 155.5H195.94Z" fill="white"/></svg>

<span class="flex-1 ms-3 whitespace-nowrap">Products</span>
<span class="inline-flex items-center justify-center px-2 py-0.5 ms-3 text-xs font-medium text-gray-500 bg-gray-200 rounded-sm dark:bg-gray-700 dark:text-gray-400">Number of Items</span>
</a>
</li>


<li>
<a href="/services" class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-300 hover:bg-gray-100 group hover:shadow">

<svg aria-hidden="true" class="h-4" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M72.0998 0.600098H48.3998H24.5998H0.799805V24.4001V48.2001V49.7001V71.8001V71.9001V95.5001H24.5998V72.0001V71.9001V49.8001V48.3001V24.5001H48.3998H72.1998H95.9998V0.700104H72.0998V0.600098Z" fill="#617BFF"/><path d="M48.5 71.8002H72.1V95.6002H73C79.1 95.6002 84.9 93.2002 89.2 88.9002C93.5 84.6002 95.9 78.8002 95.9 72.7002V48.2002H48.5V71.8002Z" fill="#617BFF"/></svg>
<span class="flex-1 ms-3 whitespace-nowrap">Services</span>
<span class="inline-flex items-center justify-center px-2 py-0.5 ms-3 text-xs font-medium text-gray-500 bg-gray-200 rounded-sm dark:bg-gray-700 dark:text-gray-400">Number of Items</span>
</a>
</li>


<li>
<a href="/points" class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
<svg aria-hidden="true" class="h-4" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M72.0998 0.600098H48.3998H24.5998H0.799805V24.4001V48.2001V49.7001V71.8001V71.9001V95.5001H24.5998V72.0001V71.9001V49.8001V48.3001V24.5001H48.3998H72.1998H95.9998V0.700104H72.0998V0.600098Z" fill="#617BFF"/><path d="M48.5 71.8002H72.1V95.6002H73C79.1 95.6002 84.9 93.2002 89.2 88.9002C93.5 84.6002 95.9 78.8002 95.9 72.7002V48.2002H48.5V71.8002Z" fill="#617BFF"/></svg>
<span class="flex-1 ms-3 whitespace-nowrap">Points</span>
<span class="inline-flex items-center justify-center px-2 py-0.5 ms-3 text-xs font-medium text-gray-500 bg-gray-200 rounded-sm dark:bg-gray-700 dark:text-gray-400">100</span>
</a>
</li>


<li>
<a href="/settings" class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-300 hover:bg-gray-100 group hover:shadow">

<svg aria-hidden="true" class="h-4" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M72.0998 0.600098H48.3998H24.5998H0.799805V24.4001V48.2001V49.7001V71.8001V71.9001V95.5001H24.5998V72.0001V71.9001V49.8001V48.3001V24.5001H48.3998H72.1998H95.9998V0.700104H72.0998V0.600098Z" fill="#617BFF"/><path d="M48.5 71.8002H72.1V95.6002H73C79.1 95.6002 84.9 93.2002 89.2 88.9002C93.5 84.6002 95.9 78.8002 95.9 72.7002V48.2002H48.5V71.8002Z" fill="#617BFF"/></svg>

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
