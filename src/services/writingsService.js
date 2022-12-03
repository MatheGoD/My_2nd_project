const { writingsDao } = require("../models");

const searchTitle = async (searchWord) => {
  return await writingsDao.searchTitle(searchWord);
};

module.exports = { searchTitle };
