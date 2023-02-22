-- migrate:up
CREATE TABLE colors (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    color  VARCHAR(200)  NOT NULL
);

ALTER TABLE writings MODIFY COLUMN header_image varchar(2500) null;

ALTER TABLE writings
ADD COLUMN color_id INT AFTER header_image;

ALTER TABLE writings
ADD CONSTRAINT FK_color_id_colors FOREIGN KEY (color_id) REFERENCES colors(id);

ALTER TABLE purchase_history DROP FOREIGN KEY purchase_history_writing_id_fkey;

ALTER TABLE purchase_history RENAME COLUMN writing_id TO purchased_writings;

ALTER TABLE purchase_history MODIFY COLUMN purchased_writings varchar(500) NOT NULL;

ALTER TABLE purchase_history ADD approval_code VARCHAR(500) AFTER price;

-- migrate:down

