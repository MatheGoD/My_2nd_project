const { appDataSource } = require('./data-source');

const createUser = async (kakaoId, name, profile_image, description) => {
    const result = await appDataSource.query(
        `INSERT INTO users (
            kakaoId,
            name,
            profile_image,
            description
        ) VALUES (?,?,?,?);`,
        [kakaoId, name, profile_image, description]
    );
    return result['insertId'];
};

const getUserById = async (id) => {
    const result = await appDataSource.query(
        `
		SELECT
           *
		FROM users
		WHERE id = ?`,
        [id]
    );

    return result[0];
};

const getUserBykakaoId = async (kakaoId) => {
    const result = await appDataSource.query(
        `
		SELECT 
            *
		FROM users
		WHERE kakaoId = ?`,
        [kakaoId]
    );

    return result[0];
};

module.exports = { createUser, getUserById, getUserBykakaoId };
