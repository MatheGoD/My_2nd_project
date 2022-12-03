-- migrate:up
CREATE TABLE authors_likes (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    author_id INT NOT NULL,
    CONSTRAINT authors_likes_user_id_fkey FOREIGN KEY (user_id) REFERENCES users(id),
    CONSTRAINT authors_likes_author_id_fkey FOREIGN KEY (author_id) REFERENCES users(id)
)
-- migrate:down
DROP TABLE authors_likes

