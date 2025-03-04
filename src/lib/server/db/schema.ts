import { sql } from 'drizzle-orm';
import {
  index,
  integer,
  real,
  sqliteTable,
  text,
  uniqueIndex,
} from 'drizzle-orm/sqlite-core';
// import { createInsertSchema, createSelectSchema } from 'drizzle-zod';


export const user = sqliteTable('user', {
  id: text('id').primaryKey(),
  codename: text('codename').unique(),
  username: text('username').notNull().unique(),
  pin: integer('pin'),
  phone: text('phone'),
  email: text('email'),
  passwordHash: text('password_hash').notNull()
});


export const session = sqliteTable('session', {
  id: text('id').primaryKey(),
  userId: text('user_id')
    .notNull()
    .references(() => user.id),
  expiresAt: integer('expires_at', { mode: 'timestamp' }).notNull()
});

export const posts = sqliteTable('posts', {
  id: text('id').primaryKey(),
  content: text('content').notNull(),
  user_id: text('user_id').references(() => user.id).notNull(),
  date_created: integer('date_created', { mode: 'timestamp' }).notNull()
});


export const products = sqliteTable('products', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  points: integer('points').notNull(),
  photo: text('photo'),
  photo1: text('photo1'),
  photo2: text('photo2'),
  photo3: text('photo3'),     
  description: text('description'),
  short_description: text('short_description'),
  user_id: text('user_id').references(() => user.id).notNull()
});


export const services = sqliteTable('services', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  points: integer('points').notNull(),
  photo: text('photo'),
  photo1: text('photo1'),
  photo2: text('photo2'),
  photo3: text('photo3'),     
  description: text('description'),
  short_description: text('short_description'),
  user_id: text('user_id').references(() => user.id).notNull()
});


export const transactions = sqliteTable('transactions', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  points: integer('points').notNull(),
  measure: text('measure').notNull(),  
  amount: text('amount').notNull(),
  photo: text('photo'),
  notes: text('notes'),
  kind: text('kind'),
  status: text('status'),
  transferee_id: text('user_id').references(() => user.id),
  giver_id: text('user_id').references(() => user.id).notNull(),
  getter_id: text('user_id').references(() => user.id).notNull(), 
  date_accepted: integer('date_accepted', { mode: 'timestamp' }),
  date_cancelled: integer('date_cancelled', { mode: 'timestamp' }),
  date_transferred: integer('date_transferred', { mode: 'timestamp' }),
  date_modified: integer('date_modified', { mode: 'timestamp' }),
  date_created: integer('date_created', { mode: 'timestamp' }).notNull()
});


// export type Session = typeof session.$inferSelect;
// export type User = typeof user.$inferSelect;


// export const user = sqliteTable('user', {
//   id: text('id').primaryKey(),
//   age: integer('age'),
//   username: text('username').notNull().unique(),
//   passwordHash: text('password_hash').notNull()
// });


// export const session = sqliteTable('session', {
//   id: text('id').primaryKey(),
//   userId: text('user_id')
//     .notNull()
//     .references(() => user.id),
//   expiresAt: integer('expires_at', { mode: 'timestamp' }).notNull()
// });




// export type Session = typeof session.$inferSelect;
// export type User = typeof user.$inferSelect;

// export type Product = typeof product.$inferSelect;


// import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

// export const user = sqliteTable('user', {
//   id: text('id').primaryKey(),
//   pin: integer('pin').notNull(),
//   username: text('username').notNull().unique(),
//   codename: text('codename').unique().notNull(),
//   passwordHash: text('password_hash').notNull(),
//   email: text('email'),
//   phone: text('phone'),
// });



// export const session = sqliteTable('session', {
//   id: text('id').primaryKey(),
//   userId: text('user_id')
//     .notNull()
//     .references(() => user.id),
//   expiresAt: integer('expires_at', { mode: 'timestamp' }).notNull()
// });


// import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

// export const users = sqliteTable("users", {
//   id: text("id").primaryKey(),
//   username: text("username").notNull().unique(),
//   codename: text("codename").notNull(),
//   password: text("password").notNull(),
//   pinCode: text("pin_code").notNull(),
//   email: text("email").unique(),
//   phone: text("phone"),
//   createdAt: integer("created_at").notNull(),
// });

// export const announcements = sqliteTable("announcements", {
//   id: text("id").primaryKey(),
//   content: text("content").notNull(),
//   userId: text("user_id").notNull().references(() => users.id),
//   createdAt: integer("created_at").notNull(),
// });

// export type User = typeof users.$inferSelect;
// export type NewUser = typeof users.$inferInsert;
// export type Announcement = typeof announcements.$inferSelect;
// export type NewAnnouncement = typeof announcements.$inferInsert;