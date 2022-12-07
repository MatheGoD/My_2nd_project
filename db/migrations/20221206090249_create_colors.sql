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


-- migrate:down

