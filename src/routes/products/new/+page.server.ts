import { db } from '$lib/server/db';
import { user, products } from '$lib/server/db/schema';
import { fail, redirect } from '@sveltejs/kit';
import { eq } from 'drizzle-orm';
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

