<script>
  // import { page } from "$app/stores";
  import { page } from '$app/state';
  // import type { PageProps } from './$types';

  // let { data } = $props();

  export let data;
  // const { data } = $props();

  console.log('data transferred to svelte: ', page.data.item);
    // const { item } = page.data;
  console.log('data transferred to svelte2: ', data.item);
    //const { item } = $page.data;
  // const { data } = $props();
  // console.log('pages: ', data.item);
  // let item = data;
</script>


<svelte:head>
  <title>Product Details | Pantrypoints</title>
</svelte:head>



<div class="max-w-2xl mx-auto p-4 py-6">

<div class="w-full p-4 border bg-white border-gray-200 rounded-lg shadow sm:p-6">

<h5 class="mb-3 font-semibold md:text-xl">
{page.data.name}
</h5>

</div>
</div>



<div class="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">

asdfgsd

  <!-- <img src={data.item.photo} alt={data.item.name} class="w-full h-64 rounded-md"> -->
  <!-- <h1 class="text-2xl font-bold mt-4">{item.name}</h1>
  <p class="text-gray-600 mt-2">${data.item.points}</p>
  <p class="mt-4">{data.item.description}</p> -->
</div>