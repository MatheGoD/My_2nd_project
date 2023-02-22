-- migrate:up
CREATE TABLE categories(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    category VARCHAR(200) UNIQUE NOT NULL,
    CONSTRAINT categories_category_ukey UNIQUE (category)
)

-- migrate:down
DROP TABLE categories;

