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

const createWriting = catchAsync(async (req, res) => {
    const user_id = req.user;
    const { title, content, header_image, price, category_id, color_id } = req.body;

    await writingsService.createWriting(user_id, title, content, header_image, price, category_id, color_id);

    return res.status(201).json({ message: 'WRITING CREATED' });
});

const getWritingInfo = catchAsync(async (req, res) => {
    const { writing_id } = req.params;
    const writing = await writingsService.getWritingInfo(writing_id);

    return res.status(200).json({ writing });
});

const getMainList = catchAsync(async (req, res) => {
    const result = await writingsService.getMainList();

    return res.status(200).json({ result });
});

const getColorList = catchAsync(async (req, res) => {
    const result = await writingsService.getColorList();

    return res.status(200).json({ result });
});

module.exports = {
    searchTitle,
    getWritings,
    createWriting,
    getWritingInfo,
    getMainList,
    getColorList,
};
