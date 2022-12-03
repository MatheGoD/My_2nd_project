const { usersDao } = require('../models');

const getUserInformation = async (user_id) => {
    return await usersDao.getUserInformation(user_id);
};

const getMyWritings = async (user_id) => {
    return await usersDao.getMyWritings(user_id);
};

const getMyLikes = async (user_id) => {
    return await usersDao.getMyLikes(user_id);
};

const getMyPurchase = async (user_id) => {
    return await usersDao.getMyPurchase(user_id);
};

module.exports = { getUserInformation, getMyWritings, getMyLikes, getMyPurchase };
