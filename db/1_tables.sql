DROP TABLE IF EXISTS blogs;

CREATE TABLE blogs (
    id serial PRIMARY KEY,
    name varchar(100) NOT NULL,
    title varchar(100) NOT NULL,
    text varchar(1000) NOT NULL
);
