// import type { Handle } from '@sveltejs/kit';
// import * as auth from '$lib/server/auth.js';

// const handleAuth: Handle = async ({ event, resolve }) => {
// 	const sessionToken = event.cookies.get(auth.sessionCookieName);
// 	if (!sessionToken) {
// 		event.locals.user = null;
// 		event.locals.session = null;
// 		return resolve(event);
// 	}

// 	const { session, user } = await auth.validateSessionToken(sessionToken);
// 	if (session) {
// 		auth.setSessionTokenCookie(event, sessionToken, session.expiresAt);
// 	} else {
// 		auth.deleteSessionTokenCookie(event);
// 	}

// 	event.locals.user = user;
// 	event.locals.session = session;

// 	return resolve(event);
// };

// export const handle: Handle = handleAuth;


import { db } from '$lib/server/db';
import { users } from '$lib/server/schema';
import { eq } from 'drizzle-orm';

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
  // Get the session from cookies
  const sessionId = event.cookies.get('sessionId');
  
  if (sessionId) {
    // Fetch the user based on session ID (you'll need a sessions table for this)
    // This is simplified - you should implement proper session management
    try {
      const user = await db.select().from(users).where(eq(users.id, sessionId)).get();
      
      if (user) {
        event.locals.user = {
          id: user.id,
          username: user.username
        };
      }
    } catch (error) {
      console.error('Session verification error', error);
    }
  }
  
  const response = await resolve(event);
  return response;
}
