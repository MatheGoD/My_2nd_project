const { cartsDao } = require('../models');

const showCart = async (user_id) => {
    return await cartsDao.showCart(user_id);
};

const addCart = async (user_id, writing_id) => {
    const check = await cartsDao.checkCart(user_id, writing_id);
    if (check == '0') {
        await cartsDao.addCart(user_id, writing_id);
        return 'SUCCESSFULLY ADDED';
    } else {
        return 'ALREADY ADDED';
    }
};

const deleteCart = async (cart_id) => {
    return await cartsDao.deleteCart(cart_id);
};

module.exports = { showCart, addCart, deleteCart };
