const { addListener } = require('nodemon');
const { appDataSource } = require('./data-source');

const purchaseList = async (user_id, item_name, price, aid) => {
    await appDataSource.query(
        `INSERT INTO purchase_history
            (
                user_id,
                purchased_writings,
                price,
                approval_code
            ) VALUES(?,?,?,?)`,
        [user_id, item_name, price, aid]
    );
};

module.exports = { purchaseList };
