-- migrate:up
ALTER TABLE writings ADD color_id INT NULL AFTER header_image
-- migrate:down

