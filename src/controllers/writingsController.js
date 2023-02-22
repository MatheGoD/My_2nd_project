const { writingsService } = require('../services');
const { catchAsync } = require('../utils/err');

const searchTitle = catchAsync(async (req, res) => {
    const { searchWord } = req.query;
    if (!searchWord) {
        return res.status(204).end();
    }

    const result = await writingsService.searchTitle(searchWord);
    return res.status(200).json({ result });
});

const getWritings = catchAsync(async (req, res) => {
    const { price, cate_id, limit, offset } = req.query;

    const result = await writingsService.getWritings(price, cate_id, limit, offset);

    return res.status(200).json({ result });
});

const getwritingInfo = catchAsync(async (req, res) => {
    const { writings_id } = req.params;
    if (isNaN(writings_id)) {
        throw new CustomError('BAD_REQUEST', 400);
    }
    const writing = await writingsService.getwritingInfo(writings_id);

    return res.status(200).json({ writing });
});

const createWriting = catchAsync(async (req, res) => {
    const user_id = req.user;
    const { title, content, header_image, price, category_id, color_id } = req.body;
    if (!title || !content || isNaN(price) || !category_id) {
        const err = new Error('KEY ERROR');
        err.statusCode = 400;
        throw err;
    }
    await writingsService.createWriting(user_id, title, content, header_image, price, category_id, color_id);

    return res.status(201).json({ message: '성공적으로 글을 게시하였습니다.' });
});

module.exports = { searchTitle, getWritings, getwritingInfo, createWriting };
