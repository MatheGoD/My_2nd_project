const { usersService } = require('../services');
const { catchAsync } = require('../utils/err');

const getMyPage = catchAsync(async (req, res) => {
    const user_id = req.user;

    const result = await usersService.getMyPage(user_id);

    return res.status(200).json({ result });
});

module.exports = { getMyPage };
