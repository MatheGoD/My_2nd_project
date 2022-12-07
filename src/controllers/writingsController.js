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

const getAllWritings = catchAsync(async (req, res) => {
    const { price, limit, offset } = req.query;

    const result = await writingsService.getAllWritings(price, limit, offset);

    return res.status(200).json({ result });
});

const createWriting = catchAsync(async (req, res) => {
    // const user_id = req.user.id;
    const { user_id, title, content, header_image, price, category_id } = req.body;
    console.log(req.body);

    await writingsService.createWriting(user_id, title, content, header_image, price, category_id);

    return res.status(201).json({ message: 'WRITING CREATED' });
});

const getWritingInfo = catchAsync(async (req, res) => {
    const { writing_id } = req.params;
    const writing = await writingsService.getWritingInfo(writing_id);

    return res.status(200).json({ writing });
});

const editWriting = catchAsync(async (req, res) => {});

const deleteWriting = catchAsync(async (req, res) => {});

module.exports = { searchTitle, getAllWritings, createWriting, editWriting, deleteWriting, getWritingInfo };
