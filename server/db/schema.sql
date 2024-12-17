DROP TABLE IF EXISTS public.categories;

CREATE TABLE categories (
    category_id VARCHAR(50) PRIMARY KEY,
    name VARCHAR(100),
    created_at DATE
);

DROP TABLE IF EXISTS public.collections;

CREATE TABLE collections (
    collection_id VARCHAR(50) PRIMARY KEY,
    name VARCHAR(100),
    description TEXT,
    image_url TEXT,
    created_at DATE
);

DROP TABLE IF EXISTS public.inventory;

CREATE TABLE inventory (
    product_id VARCHAR(50),
    sku VARCHAR(50),
    color VARCHAR(50),
    size VARCHAR(10),
    list_price NUMERIC(10, 2),
    discount NUMERIC(10, 2),
    discount_percentage NUMERIC(5, 2),
    sale_price NUMERIC(10, 2),
    sold INT,
    stock INT,
    PRIMARY KEY (product_id, sku)  -- Composite primary key to uniquely identify each product variant
);

DROP TABLE IF EXISTS public.product_details;

CREATE TABLE product_details (
    product_id VARCHAR(50),
    title VARCHAR(100),
    description_item TEXT,
    PRIMARY KEY (product_id, title, description_item)
);

DROP TABLE IF EXISTS public.product_reviews;

CREATE TABLE product_reviews (
    product_id VARCHAR(50),
    user_id VARCHAR(50),
    rating INT,
    content TEXT,
    created_at DATE,
    PRIMARY KEY (product_id, user_id, created_at)  -- Assuming a user can submit one review per product per date
);

DROP TABLE IF EXISTS public.products;

CREATE TABLE products (
    product_id VARCHAR(50) PRIMARY KEY,
    name VARCHAR(100),
    description TEXT,
    category VARCHAR(50),
    collection VARCHAR(50),
    created_at DATE
);

DROP TABLE IF EXISTS public.users;

CREATE TABLE users (
    user_id VARCHAR(50) PRIMARY KEY,
    name VARCHAR(100),
    avatar_url TEXT
);