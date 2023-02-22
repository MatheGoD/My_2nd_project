const { writingsDao } = require('../models');

const searchTitle = async (searchWord) => {
    return await writingsDao.searchTitle(searchWord);
};

const getWritings = async (price, cate_id, offset, limit) => {
    return await writingsDao.getWritings(price, cate_id, offset, limit);
};

const getwritingInfo = async (writings_id) => {
    return await writingsDao.getwritingInfo(writings_id);
};

const createWriting = async (user_id, title, content, header_image, price, category_id, color_id) => {
    return await writingsDao.createWriting(user_id, title, content, header_image, price, category_id, color_id);
};

module.exports = { searchTitle, getWritings, getwritingInfo, createWriting };
