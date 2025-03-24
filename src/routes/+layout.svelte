<script lang="ts">
  import '../app.css';
  let { children } = $props();

  import { enhance } from '$app/forms';
  import type { PageServerData } from './$types';

  import { page } from '$app/stores';
  import { derived } from 'svelte/store';

  const menuHref = derived(page, ($page) => 
    $page.url.pathname === '/menu' ? '/' : '/menu'
  );  // let { data }: { data: PageServerData } = $props();

  const menuIcon = derived(page, ($page) => 
    $page.url.pathname === '/menu' ? '/home.png' : '/pp.png'
  );
</script>



<div class="flex min-h-screen w-full flex-col bg-gray-100">
  <div class="fixed bottom-4 left-4 z-10">
    <a href={$menuHref} class="group flex h-9 w-9 shrink-0 items-center justify-center">
      <img src={$menuIcon} alt="Menu Icon">
    </a>
  </div>
  <div class="flex flex-col sm:gap-4 sm:py-2 sm:pl-14">
    <main>    
      {@render children()}
    </main>
  </div>
</div>

<!-- <script>
	import '../app.css';
	// export let { children } = $props();
  import { writable } from 'svelte/store';
  // export let menuOpen = writable(false);
  function logout() {
    fetch('/logout', { method: 'POST' }).then(() => {
      window.location.href = '/login';
    });
  }

</script>


<div class="fixed bottom-4 right-4">
  <a href="/menu" class="bg-blue-500 p-4 rounded-full shadow-lg text-white">Menu</a>
</div>
 -->

<!-- {#if $menuOpen}
  <div class="fixed inset-0 bg-white/90 backdrop-blur-lg flex flex-col items-center justify-center p-6 space-y-6">
    <button on:click={() => menuOpen.set(false)} class="absolute top-4 right-4 text-xl">✖</button>
    <div class="grid grid-cols-2 gap-4 w-full max-w-md">
      <a href="/demo" class="p-6 bg-gray-100 rounded-lg shadow-lg text-center">Announcements</a>
      <a href="/products" class="p-6 bg-gray-100 rounded-lg shadow-lg text-center">Products</a>
      <a href="/services" class="p-6 bg-gray-100 rounded-lg shadow-lg text-center">Services</a>
      <a href="/points" class="p-6 bg-gray-100 rounded-lg shadow-lg text-center">Points</a>
      <a href="/settings" class="p-6 bg-gray-100 rounded-lg shadow-lg text-center">Settings</a>
      <button on:click={logout} class="p-6 bg-red-500 text-white rounded-lg shadow-lg text-center">Logout</button>
    </div>
  </div>
{/if}
 -->
