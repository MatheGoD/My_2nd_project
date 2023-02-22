const { appDataSource } = require('./data-source');

const getMyInfo = async (user_id) => {
    const result = await appDataSource.query(
        `
        SELECT
            u.name,
            u.profile_image,
            u.description,
            (
            SELECT
                COUNT(al.author_id)
                FROM
                    authors_likes al
                WHERE
                    al.user_id = ?
            ) as 관심작가,
            (
            SELECT
                COUNT(al.author_id)
                FROM
                    authors_likes al
                WHERE
                    al.author_id = ?
            ) as 구독자
        FROM
            users u
        WHERE
            u.id = ?
        `,
        [user_id, user_id, user_id]
    );
    return result;
};

const getMyWritings = async (user_id) => {
    const result = await appDataSource.query(
        `
        SELECT
            w.id,
            w.title,
            w.header_image,
            (
                SELECT
                    u.name
                    FROM
                        users u
                    WHERE
                        u.id = w.user_id
            ) as authors,
            w.content,
            c.color
        FROM 
            writings w
        JOIN colors c ON c.id = w.color_id
        WHERE 
            w.user_id = ?
        LIMIT 4;
        `,
        [user_id]
    );
    return result;
};

const getMyLikes = async (user_id) => {
    const result = await appDataSource.query(
        `
        SELECT 
            w.id,
            uw.id,
            w.title,
            w.content,
            (
            SELECT
                u.name
                FROM
                    users u
                WHERE
                    u.id = w.user_id
            ) as authors,
            w.header_image,
            c.color
        FROM
            users_like_writings uw
        JOIN writings w ON uw.writing_id = w.id
        JOIN colors c ON c.id = w.color_id
        WHERE
            uw.user_id = ?
        LIMIT 4
        `,
        [user_id]
    );
    return result;
};

module.exports = { getMyInfo, getMyWritings, getMyLikes };
