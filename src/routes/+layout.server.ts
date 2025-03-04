import { json } from '@sveltejs/kit';
import { db } from '$lib/server/db';
import { announcements } from '$lib/server/db/schema';
import { getUserFromCookie, generateId } from '$lib/server/auth';
import type { RequestHandler } from './$types';


// export const GET: RequestHandler = async ({ cookies }) => {
//   const user = await getUserFromCookie(cookies);
  
//   if (!user) {
//     return json({ error: 'Not authenticated' }, { status: 401 });
//   }
  
//   try {
//     const posts = await db.query.announcements.findMany({
//       orderBy: (announcements, { desc }) => [desc(announcements.createdAt)],
//       with: {
//         user: {
//           columns: {
//             id: true,
//             username: true,
//             codename: true,
//           }
//         }
//       }
//     });
    
//     return json({ announcements: posts });
//   } catch (error) {
//     console.error('Error fetching announcements:', error);
//     return json({ error: 'Failed to fetch announcements' }, { status: 500 });
//   }
// };

// export const POST: RequestHandler = async ({ request, cookies }) => {
//   const user = await getUserFromCookie(cookies);
  
//   if (!user) {
//     return json({ error: 'Not authenticated' }, { status: 401 });
//   }
  
//   const data = await request.json();
  
//   if (!data.content) {
//     return json({ error: 'Content is required' }, { status: 400 });
//   }
  
//   try {
//     const newAnnouncement = {
//       id: generateId(),
//       content: data.content,
//       userId: user.id,
//       createdAt: Date.now()
//     };
    
//     await db.insert(announcements).values(newAnnouncement);
    
//     return json({ success: true, announcement: newAnnouncement });
//   } catch (error) {
//     console.error('Error creating announcement:', error);
//     return json({ error: 'Failed to create announcement' }, { status: 500 });
//   }
// };

