const { writingsDao } = require('../models');

const searchTitle = async (searchWord) => {
    return await writingsDao.searchTitle(searchWord);
};

const getWritings = async (price, cate_id, offset, limit) => {
    return await writingsDao.getAllWritings(price, cate_id, offset, limit);
};

const createWriting = async (user_id, title, content, header_image, price, category_id, color_id) => {
    return await writingsDao.createWriting(user_id, title, content, header_image, price, category_id, color_id);
};

const getWritingInfo = async (writing_Id) => {
    return await writingsDao.getWritingInfo(writing_Id);
};

const getMainList = async () => {
    const categoryList = await writingsDao.categoryList();
    const writing = await writingsDao.getAllWritings();
    const set = { category: categoryList, writing: writing };
    return set;
};

const getColorList = async () => {
    return await writingsDao.getColorList();
};

module.exports = { searchTitle, getWritings, createWriting, getWritingInfo, getMainList, getColorList };
