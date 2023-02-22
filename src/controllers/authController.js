const { authService } = require('../services');
const { catchAsync } = require('../utils/err');

const signIn = catchAsync(async (req, res) => {
    const { KAKAO_CODE } = req.body;
    const userInfo = await authService.kakaoLogin(KAKAO_CODE);

    return res.status(200).json({ userInfo: userInfo });
});

module.exports = { signIn };
