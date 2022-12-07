const { likesService } = require('../services');
const { catchAsync } = require('../utils/err');

const likeWriting = catchAsync(async (req, res) => {
    const user_id = req.user;
    const writing_id = req.params.writing_id;

    const result = await likesService.likeWriting(user_id, writing_id);

    return res.status(200).json({ message: result });
});

const likeAuthor = catchAsync(async (req, res) => {
    const user_id = req.user;
    const author_id = req.params.author_id;

    const result = await likesService.likeAuthor(user_id, author_id);

    return res.status(200).json({ message: result });
});

module.exports = { likeWriting, likeAuthor };
