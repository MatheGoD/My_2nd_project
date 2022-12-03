const { usersService } = require('../services');
const { catchAsync } = require('../utils/err');

const getUserInformation = catchAsync(async (req, res) => {
    const user_id = req.body.id;

    const result = await usersService.getUserInformation(user_id);

    return res.status(200).json({ result });
});

const getMyWritings = catchAsync(async (req, res) => {
    const user_id = req.body.id;

    const result = await usersService.getMyWritings(user_id);

    return res.status(200).json({ result });
});

const getMyLikes = catchAsync(async (req, res) => {
    const user_id = req.body.id;

    const result = await usersService.getMyLikes(user_id);

    return res.status(200).json({ result });
});

const getMyPurchase = catchAsync(async (req, res) => {
    const user_id = req.body.id;

    const result = await usersService.getMyPurchase(user_id);

    return res.status(200).json({ result });
});
module.exports = { getUserInformation, getMyWritings, getMyLikes, getMyPurchase };
