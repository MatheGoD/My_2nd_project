-- migrate:up
CREATE TABLE purchase_history (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    writing_id  INT NOT NULL,
    price INT NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT purchase_history_user_id_fkey FOREIGN KEY (user_id) REFERENCES users(id),
    CONSTRAINT purchase_history_writing_id_fkey FOREIGN KEY (writing_id) REFERENCES writings(id)
)

-- migrate:down
DROP TABLE purchase_history
