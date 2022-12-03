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

module.exports = { searchTitle };
