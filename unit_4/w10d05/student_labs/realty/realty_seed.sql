--enter your seed data below
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

INSERT INTO offices
    (office_number, floors, sq_ft, cubicles, bathrooms, address, company, occupied, price)
VALUES
    (240, 2, 800, 20, 4, "123 Fake Street", "Cool Company", false, 10000),
    (1, 1, 100, 10, 14, "789 Real Road", "Creative Company", true, 5000),
    (99, 9, 9000, 0, 40, "1 Great Place", "Best Business", false, 1000000);
INSERT INTO apartments
    (apartment_number, bedrooms, bathrooms, address, tenant, occupied, sq_ft, price )
VALUES
    (101, 2, 1, 'lolly park', 'Bobby Brown', true, 1500, 2000),
    (102, 3, 2, 'Paollu ave', 'Tiffany Turner', true, 1500, 2200),
    (103, 5 , 3, 'holly dolly', 'Captain America', true, 1700, 2300);

INSERT INTO storefront
    (address, occupied, price, kitchen, sq_ft, owner, outdoor_seating)
VALUES
    ("12 Place", true, 4000, true, 800, "ME", true),
    ("8 Road", true, 400, false, 8000, "This Guy", false),
    ("83 American Ave", true, 40000, true, 10000, "America", true);
