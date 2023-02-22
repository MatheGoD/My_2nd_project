const { usersDao } = require('../models');

const getMyPage = async (user_id) => {
    const getMyInfo = await usersDao.getMyInfo(user_id);
    const getMyWritings = await usersDao.getMyWritings(user_id);
    const getMyLikes = await usersDao.getMyLikes(user_id);

    const myPage = {
        myInfo: getMyInfo,
        myWritings: getMyWritings,
        myLikes: getMyLikes,
    };

    return myPage;
};

module.exports = { getMyPage };
