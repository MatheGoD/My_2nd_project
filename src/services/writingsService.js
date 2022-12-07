const { writingsDao } = require('../models');

const searchTitle = async (searchWord) => {
    return await writingsDao.searchTitle(searchWord);
};

const getAllWritings = async (price, offset, limit) => {
    return await writingsDao.getAllWritings(price, offset, limit);
};

const createWriting = async (user_id, title, content, header_image, price, category_id) => {
    return await writingsDao.createWriting(user_id, title, content, header_image, price, category_id);
};

const getWritingInfo = async (writing_Id) => {
    return await writingsDao.getWritingInfo(writing_Id);
};

module.exports = { searchTitle, getAllWritings, createWriting, getWritingInfo };
