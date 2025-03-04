<script lang="ts">
	import { enhance } from '$app/forms';
	import type { ActionData } from './$types';

	let { form }: { form: ActionData } = $props();
</script>


<!-- <h1>Login/Register</h1>
<form method="post" action="?/login" use:enhance>
	<label>
		Username
		<input name="username" />
	</label>
	<label>
		Password
		<input type="password" name="password" />
	</label>
	<button>Login</button>
	<button formaction="?/register">Register</button>
</form>

<p style="color: red">{form?.message ?? ''}</p> -->




<!-- <form >
	<label>
		Username
		<input name="username" />
	</label>
	<label>
		Password
		<input type="password" name="password" />
	</label>
	<button>Login</button>
	<button >Register</button>
</form>
 -->


<div class="max-w-2xl mx-auto p-4 py-6">

<div class="w-full p-4 border bg-white border-gray-200 rounded-lg shadow sm:p-6">

<form method="post" action="?/login" use:enhance class="mt-5 max-w-sm mx-auto">
  <h1 class="font-bold text-xl mb-5">Login/Register</h1>
  <p style="color: red">{form?.message ?? ''}</p>

    <label for="username" class="block mb-2 text-sm font-medium">Username</label>
 	
 	<div class="relative">

    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
      <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
        <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
        <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
      </svg>
    </div>

      <input
        type="text"
        id="username"
        name="username"
        placeholder="john"
        required
        class="w-full mb-5 px-3 py-2 border border-gray-300 ps-10 p-3.5 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        value={form?.values?.username || ''}>
  </div>


    <label for="password" class="block mb-2 text-sm font-medium">Your password</label>

 	<div class="relative mb-5">

    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
      <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
        <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
        <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
      </svg>
    </div>

    <input name="password" type="password" id="password" required 
    class="w-full mb-5 px-3 py-2 border border-gray-300 ps-10 p-3.5 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
  </div>



  <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>

  <button formaction="?/register" type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register</button>

</form>

</div>

</div>

    <!-- class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"  /> -->
