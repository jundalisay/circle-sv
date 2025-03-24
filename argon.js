import argon2 from 'argon2-browser';

async function hashPassword(password) {
  const hash = await argon2.hash({
    pass: password,
    salt: crypto.getRandomValues(new Uint8Array(16))
  });
  return hash.encoded;
}



// src/routes/api/auth/signup/+server.ts or login
import { json } from '@sveltejs/kit';
import argon2 from '@node-rs/argon2';

export async function POST({ request }) {
    const { username, password } = await request.json();

    // Hash the password
    const hash = await argon2.hash(password);

    // Store username and hashed password in the database (Turso + Drizzle)
    // Example:
    // await db.insert(users).values({ username, password_hash: hash });

    return json({ success: true, message: 'User registered!' });
}



// 
import { json } from '@sveltejs/kit';
import argon2 from '@node-rs/argon2';

// Fake database lookup
const fakeDB = {
    username: 'testuser',
    password_hash: '$argon2id$v=19$m=65536,t=3,p=4$...' // Example hashed password
};

export async function POST({ request }) {
    const { username, password } = await request.json();

    // Fetch user from database (replace this with actual DB query)
    const user = username === fakeDB.username ? fakeDB : null;

    if (!user) {
        return json({ success: false, message: 'Invalid username or password' }, { status: 401 });
    }

    // Verify password
    const isValid = await argon2.verify(user.password_hash, password);
    if (!isValid) {
        return json({ success: false, message: 'Invalid username or password' }, { status: 401 });
    }

    return json({ success: true, message: 'Login successful!' });
}



// 
import { json } from '@sveltejs/kit';
import argon2 from 'argon2-browser';

export async function POST({ request }) {
    const { username, password } = await request.json();

    // Generate a salt
    const salt = crypto.getRandomValues(new Uint8Array(16));

    // Hash the password using `argon2-browser`
    const hash = await argon2.hash({
        pass: password,
        salt: salt
    });

    return json({ success: true, hash: hash.encoded });
}
