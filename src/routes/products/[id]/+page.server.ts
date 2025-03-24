import { db } from '$lib/server/db';
import { products } from '$lib/server/db/schema';
import { fail, redirect, json } from '@sveltejs/kit';
import { eq } from 'drizzle-orm';
import * as table from '$lib/server/db/schema';
import type { Actions, PageServerLoad } from './$types';


export const load: PageServerLoad = async ({ params }) => {

// export const load = async ({ params }) => {
  // return {
  //   user: locals.user
  // };

  // const num = Number(params);
  // const n = params.id
  // parseInt(params.id, 10);

  // const num = +n;


  const item = await db.select().from(products).where(eq(products.id, 1)).get();


  // const item = await db.select().from(products).where(eq(products.id, 1)).get();

// Number(params.id)
  console.log('server ts: ', params);

  console.log('server ts with params.id: ', params.id);

  console.log('data in server: ', item);
  // if (!item) throw error(404, "Product not found");
  return { item };


};
