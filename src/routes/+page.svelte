<script>
  import { enhance } from '$app/forms';

  const { data } = $props(); 

  console.log('feed: ', data.items);
</script>


<svelte:head>
  <title>Social App</title>
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
</svelte:head>


<div class="max-w-2xl mx-auto p-4 py-6">

    <h5 class="mb-3 font-semibold md:text-xl">
    Posts
    </h5>

    <form></form>
    

    <div class="grid grid-cols-1 gap-6">
      {#each data.items as i}
        <div class="rounded-lg flex flex-col p-6 w-full p-4 border bg-white border-gray-200 rounded-lg shadow">
            <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">{i.content}</h3>
                <p class="my-4">{i.id}</p>
            </blockquote>
            <figcaption class="flex items-center justify-center ">
                <img class="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="profile picture">
                <div class="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                    <div>{i.user_id}</div>
                    <div class="text-sm text-gray-500 dark:text-gray-400 ">{i.date_created}</div>
                </div>
            </figcaption>    
        </div>


      {/each}
    </div>

</div>


<!-- <div class="grid mb-8 border border-gray-200 rounded-lg shadow-xs dark:border-gray-700 md:mb-12 md:grid-cols-2 bg-white dark:bg-gray-800"> -->
