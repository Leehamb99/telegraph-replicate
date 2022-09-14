DROP TABLE IF EXSITS blogs;

CREATE TABLE blogs (
    id serial PRIMARY KEY,
    title varchar(100) NOT NULL,
    name varchar(100) NOT NULL,
    text varchar(1000) NOT NULL,
);
