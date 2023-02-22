-- migrate:up
CREATE TABLE users_like_writings (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    writing_id  INT NOT NULL,
    CONSTRAINT users_like_writings_user_id_fkey FOREIGN KEY (user_id) REFERENCES users(id),
    CONSTRAINT users_like_writings_writing_id_fkey FOREIGN KEY (writing_id) REFERENCES writings(id)
)

-- migrate:down
DROP TABLE users_like_writings 
