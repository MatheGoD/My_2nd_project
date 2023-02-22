-- migrate:up
ALTER TABLE users ADD kakaoId BIGINT NOT NULL UNIQUE

-- migrate:down

