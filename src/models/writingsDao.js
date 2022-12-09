const { appDataSource } = require('./data-source');

const searchTitle = async (searchWord) => {
    const word = {
        toSqlString: function () {
            return searchWord;
        },
    };
    const result = await appDataSource.query(
        `
    SELECT
      id,
      title
    FROM 
      writings
    WHERE 
      title LIKE "%?%";
    `,
        [word]
    );
    return result;
};

const getAllWritings = async (price, cate_id, limit, offset) => {
    const limitOffset = setLimitOffset(limit, offset);
    const whereList = makeWhereList(price, cate_id);
    const result = await appDataSource.query(
        `
        SELECT
          w.id,
          w.title,
          w.content,
          w.header_image,
          w.price,
        (
          SELECT
            u.name
          FROM
            users u
          WHERE
            u.id = w.user_id
        ) as authors,
        c.color
        FROM writings w
        LEFT JOIN colors c ON w.color_id = c.id
        ?
        ORDER BY w.id ASC
        ?
        `,
        [whereList, limitOffset]
    );
    return result;
};

const setLimitOffset = (limit, offset) => {
    if (!limit) limit = 8;
    if (!offset) offset = 0;
    return {
        toSqlString: function () {
            return `LIMIT ${limit} OFFSET ${offset}`;
        },
    };
};

const makeWhereList = (price, cate_id) => {
    const startLine = `WHERE `;
    const filter = [`w.id IS NOT NULL`];
    if (cate_id) {
        filter.push(`w.category_id = ${cate_id}`);
    }
    if (price) {
        filter.push(`w.price = ${price}`);
    }
    const body = filter.join(' AND ');
    const combined = startLine + body;
    return {
        toSqlString: function () {
            return combined;
        },
    };
};

const createWriting = async (user_id, title, content, header_image, price, category_id, color_id) => {
    await appDataSource.query(
        `
        INSERT INTO writings (
            title,
            content,
            header_image,
            color_id,
            price,
            category_id,
            user_id
        ) VALUES (?,?,?,?,?,?,?)`,
        [title, content, header_image, color_id, price, category_id, user_id]
    );
};

const getWritingInfo = async (writing_id) => {
    const result = await appDataSource.query(
        `
        SELECT
        w.id,
        w.title,
        w.content,
        w.price,
        w.header_image,
        u.name as writer,
        w.user_id as author_id,
        count(lw.writing_id) as likes,
        (
           SELECT 
           COUNT(al.author_id)
           FROM authors_likes al 
           WHERE al.author_id = w.user_id
        ) as subscribers,
        c.color
        FROM
        writings w
        LEFT join users u on w.user_id = u.id
        LEFT join users_like_writings lw on w.id = lw.writing_id
        LEFT JOIN colors c ON c.id = w.color_id
        where w.id= ?
        GROUP by w.title
        `,
        [writing_id]
    );
    return result;
};

const categoryList = async () => {
    const result = await appDataSource.query(
        `SELECT 
        * FROM categories
        ORDER BY id ASC`
    );
    return result;
};

const getColorList = async () => {
    const result = await appDataSource.query(
        `
        SELECT
        * FROM colors
        ORDER BY id ASC`
    );
    return result;
};

module.exports = { searchTitle, getAllWritings, createWriting, getWritingInfo, categoryList, getColorList };
