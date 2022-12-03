-- migrate:up
CREATE TABLE carts (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    writing_id  INT NOT NULL,
    CONSTRAINT carts_user_id_fkey FOREIGN KEY (user_id) REFERENCES users(id),
    CONSTRAINT carts_writing_id_fkey FOREIGN KEY (writing_id) REFERENCES writings(id)
)

-- migrate:down
DROP TABLE carts
