-- migrate:up
ALTER TABLE purchase_history DROP FOREIGN KEY purchase_history_writing_id_fkey;

ALTER TABLE purchase_history RENAME COLUMN writing_id TO purchased_writings;

ALTER TABLE purchase_history MODIFY COLUMN purchased_writings varchar(500) NOT NULL;

ALTER TABLE purchase_history ADD approval_code VARCHAR(500) AFTER price;

-- migrate:down

