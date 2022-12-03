const { appDataSource } = require("./data-source");

const searchTitle = async (searchWord) => {
  const word = {
    toSqlString: function () {
      return searchWord;
    },
  };
  const result = await appDataSource.query(
    `
        SELECT
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

module.exports = { searchTitle };
