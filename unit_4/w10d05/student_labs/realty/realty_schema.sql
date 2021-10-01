-- enter your schema for apartments, offices and storefronts below
CREATE TABLE apartments
(
    id SERIAL PRIMARY KEY,
    apartment_number INT,
    bedrooms INT,
    bathrooms INT,
    address VARCHAR(100),
    tenant VARCHAR(50),
    occupied BOOLEAN,
    sq_ft INT,
    price INT
);

CREATE TABLE offices
(
    id SERIAL PRIMARY KEY,
    office_number INT,
    floors INT,
    sq_ft INT,
    cubicles INT,
    bathrooms INT,
    address VARCHAR(100),
    company VARCHAR(50),
    occupied BOOLEAN,
    price INT
);

CREATE TABLE storefront
(
    id SERIAL PRIMARY KEY,
    address VARCHAR(100),
    occupied BOOLEAN,
    price INT,
    kitchen BOOLEAN,
    sq_ft INT,
    owner VARCHAR(50),
    outdoor_seating BOOLEAN
);