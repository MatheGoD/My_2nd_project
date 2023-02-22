-- migrate:up
CREATE TABLE writings(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(200) NOT NULL UNIQUE,
    content VARCHAR(5000) NOT NULL,
    header_image VARCHAR(2500) NOT NULL,
    price INT NOT NULL,
    category_id INT NOT NULL,
    user_id INT NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT writings_category_id_fkey FOREIGN KEY (category_id) REFERENCES categories(id),
    CONSTRAINT writings_user_id_fkey FOREIGN KEY (user_id) REFERENCES users(id)
)

-- migrate:down
DROP TABLE writings;
