import { doublePrecision, pgTable, text, timestamp } from 'drizzle-orm/pg-core'

export const ordersTable = pgTable('orders', {
    id: text('id').primaryKey().default('uuid_generate_v4()'),
    name: text('name').notNull(),
    imageId: text('imageId').notNull(),
    price: doublePrecision('price').notNull(), 
    productID: text('productid').notNull(), 
    size: text('size'),
    color: text('color'),
  })
  
  export type Product = typeof ordersTable.$inferSelect