-- migrate:up
CREATE TABLE writing_images (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    writing_id INT NOT NULL,
    image_url  VARCHAR(2500)  NOT NULL,
    CONSTRAINT writing_images_writing_id_fkey FOREIGN KEY (writing_id) REFERENCES writings(id)
)

-- migrate:down
DROP TABLE writing_images 
