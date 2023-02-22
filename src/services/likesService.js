const { likesDao } = require('../models');

const likeWriting = async (user_id, writing_id) => {
    const result = await likesDao.checkExistWriting(user_id, writing_id);

    if (result == '0') {
        await likesDao.createLikesWriting(user_id, writing_id);
        return 'WRITING LIKES CREATED';
    } else {
        await likesDao.deleteLikesWriting(user_id, writing_id);
        return 'WRITING LIKES DELETED';
    }
};

const likeAuthor = async (user_id, author_id) => {
    const result = await likesDao.checkExistAuthor(user_id, author_id);

    if (result == '0') {
        await likesDao.createLikesAuthor(user_id, author_id);
        return 'AUTHOR LIKES CREATED';
    } else {
        await likesDao.deleteLikesAuthor(user_id, author_id);
        return 'AUTHOR LIKES DELETED';
    }
};

module.exports = { likeWriting, likeAuthor };
