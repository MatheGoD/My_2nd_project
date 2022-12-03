const { appDataSource } = require('./data-source');

const showCart = async (user_id) => {
    const result = await appDataSource.query(
        `
        SELECT
            c.id,
            w.title,
            w.content,
            w.header_image,
            w.price,
            (
                SELECT
                    u.name
                FROM
                    users u
                WHERE u.id = w.user_id
            ) as authors
        FROM
            carts c
        JOIN writings w ON w.id = c.writing_id
        JOIN users u ON u.id = c.user_id
        WHERE u.id = ?
        `,
        [user_id]
    );
    return result;
};

const checkCart = async (user_id, writing_id) => {
    const [result] = await appDataSource.query(
        `
        SELECT EXISTS (
            SELECT 
                *
            FROM
                carts
            WHERE user_id = ? AND writing_id = ?) AS EXIST
        `,
        [user_id, writing_id]
    );
    return result.EXIST;
};

const addCart = async (user_id, writing_id) => {
    await appDataSource.query(
        `
        INSERT INTO carts (
            user_id,
            writing_id
        ) VALUES
        (?,?);
        `,
        [user_id, writing_id]
    );
};

const deleteCart = async (cart_id) => {
    await appDataSource.query(
        `
        DELETE 
        FROM 
            carts 
        WHERE carts.id = ?
        `,
        [cart_id]
    );
};

module.exports = { showCart, checkCart, addCart, deleteCart };
