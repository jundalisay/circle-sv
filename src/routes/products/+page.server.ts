import { db } from '$lib/server/db';
import { user, products } from '$lib/server/db/schema';
// import { json } from '@sveltejs/kit';

import { fail, redirect } from '@sveltejs/kit';
import { eq } from 'drizzle-orm';
// import * as table from '$lib/server/db/schema';
import type { Actions, PageServerLoad } from './$types';


export const load: PageServerLoad = async ({ fetch }) => {
  // return {
  //   user: locals.user
  // };

  const items = await db.select().from(products);

  // return json({ allproducts });

  console.log('page server load: ', items);
  // json(allProducts);

  return { items };
};



// export async function POST({ request }) {
//   const data = await request.json();
//   await db.insert(products).values(data);
//   return json({ success: true });
// }



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

