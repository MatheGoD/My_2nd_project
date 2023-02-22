-- migrate:up
CREATE TABLE comments (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    writing_id  INT NOT NULL,
    content VARCHAR(2500) NOT NULL,
    CONSTRAINT comments_user_id_fkey FOREIGN KEY (user_id) REFERENCES users(id),
    CONSTRAINT comments_writing_id_fkey FOREIGN KEY (writing_id) REFERENCES writings(id)
)

-- migrate:down
DROP TABLE comments
