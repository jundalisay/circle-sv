<script>
  import { enhance } from '$app/forms';

  const { data } = $props(); 

  console.log('pages: ', data.items);
</script>



<svelte:head>
  <title>Products | Pantrypoints</title>
</svelte:head>



<div class="p-6 max-w-4xl mx-auto">
  <div class="flex justify-between items-center mb-6">
    <h1 class="text-2xl font-bold">Products</h1>
    <a href="/products/new" class="bg-blue-500 text-white px-4 py-2 rounded">Add Product</a>
  </div>
  
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {#each data.items as i}

      <a href='#' class="shadow max-w-sm rounded-lg shadow-lg bg-white hover:bg-yellow-50">
        <img class="rounded-t-lg" src={i.photo} alt={i.name} />
        <div class="p-5">
            <h5 class="mb-2 text-2xl font-bold tracking-tight">{ i.name }</h5>
            
            <p class="mb-3 font-normal text-gray-700">{ i.short_description }</p>
        </div>
      </a>

    {/each}
  </div>
</div>
