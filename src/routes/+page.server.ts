import * as auth from '$lib/server/auth';
import { fail, redirect } from '@sveltejs/kit';
import { db } from '$lib/server/db';
import { posts } from '$lib/server/db/schema';
import { json } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';



export const load: PageServerLoad = async ({ locals }) => {
	if (!locals.user) {
		return redirect(302, '/login');
	}

  const items = await db.select().from(posts);
  console.log('page server load: ', items);
  return { user: locals.user, items };

};

// export async function POST({ request }) {
//   const data = await request.json();
//   await db.insert(posts).values(data);
//   return json({ success: true });
// }

