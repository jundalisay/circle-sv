import { db } from '$lib/server/db';
import { services } from '$lib/server/db/schema';
import { fail, redirect, json } from '@sveltejs/kit';
import { eq } from 'drizzle-orm';
import * as table from '$lib/server/db/schema';
import type { Actions, PageServerLoad } from './$types';


export const load: PageServerLoad = async ({ locals }) => {
  // return {
  //   user: locals.user
  // };

  const items = await db.select().from(services);

  // return json({ allproducts });

  return { items };

  console.log('page server load: ', items);
  // json(allProducts);
};



// export const actions: Actions = {
//   create: async (event) => {
//     const formData = await event.request.formData();
//     const name = formData.get('name');
//     const points = formData.get('points');

//     console.log('name ', name);

//     try {
//       await db.insert(table.products).values({ name: name, points: points });

//     } catch (e) {
//       return fail(500, { message: 'An error has occurred!!!!' });
//     }
//     return redirect(302, '/');

//   },
// };

