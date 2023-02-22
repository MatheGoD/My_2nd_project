const { appDataSource } = require('./data-source');

const checkExistWriting = async (user_id, writing_id) => {
    const [result] = await appDataSource.query(
        `
        SELECT EXISTS (
            SELECT 
                *
            FROM
                users_like_writings
            WHERE user_id = ? AND writing_id = ?) AS EXIST
        `,
        [user_id, writing_id]
    );
    return result.EXIST;
};

const createLikesWriting = async (user_id, writing_id) => {
    await appDataSource.query(
        `
        INSERT INTO users_like_writings(
            user_id,
            writing_id
        ) 
        VALUES (?,?);
        `,
        [user_id, writing_id]
    );
};

const deleteLikesWriting = async (user_id, writing_id) => {
    await appDataSource.query(
        `
        DELETE 
        FROM users_like_writings
        WHERE user_id = ? AND writing_id = ?
         `,
        [user_id, writing_id]
    );
};

const checkExistAuthor = async (user_id, author_id) => {
    const [result] = await appDataSource.query(
        `SELECT EXISTS (
            SELECT 
                *
            FROM
                authors_likes
                WHERE user_id = ? AND author_id = ?) AS EXIST
        `,
        [user_id, author_id]
    );
    return result.EXIST;
};

const createLikesAuthor = async (user_id, author_id) => {
    await appDataSource.query(
        `INSERT INTO authors_likes(
            user_id,
            author_id
        ) VALUES (?,?);
        `,
        [user_id, author_id]
    );
};

const deleteLikesAuthor = async (user_id, author_id) => {
    await appDataSource.query(
        `DELETE 
         FROM authors_likes
         WHERE user_id = ? AND author_id = ?
         `,
        [user_id, author_id]
    );
};

module.exports = {
    checkExistWriting,
    createLikesWriting,
    deleteLikesWriting,
    checkExistAuthor,
    createLikesAuthor,
    deleteLikesAuthor,
};
