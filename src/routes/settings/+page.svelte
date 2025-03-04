<script lang="ts">
  import { page } from '$app/stores';
  
  export let data;
  const { user } = data;
</script>


<svelte:head>
  <title>Settings | Social App</title>
</svelte:head>


<div class="max-w-2xl mx-auto p-4 py-6">

<div class="w-full p-4 border bg-white border-gray-200 rounded-lg shadow sm:p-6">

  <h1 class="text-2xl font-bold">Settings</h1>
  
      <h2 class="text-xl font-medium mb-4">Profile Information</h2>
      
      <div class="space-y-4">
        <div>
          <p class="text-sm text-gray-500">Username</p>
          <p class="font-medium">{user.username}</p>
        </div>
        
        <div>
          <p class="text-sm text-gray-500">Codename</p>
          <p class="font-medium">{user.codename}</p>
        </div>
        
        <div>
          <p class="text-sm text-gray-500">Email</p>
          <p class="font-medium">{user.email || 'Not provided'}</p>
        </div>
        
        <div>
          <p class="text-sm text-gray-500">Phone</p>
          <p class="font-medium">{user.phone || 'Not provided'}</p>
        </div>
      </div>
      
      <div class="mt-6 pt-6 border-t border-gray-200">
        <h3 class="text-lg font-medium mb-4">Account Settings</h3>
        <p class="text-gray-600 mb-4">Profile editing functionality coming soon.</p>
        
        <button class="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors duration-300">
          Edit Profile
        </button>
      </div>

</div>
</div>

