const axios = require('axios');
const qs = require('qs');
const jwt = require('jsonwebtoken');

const { authDao } = require('../models');

const GRANT_TYPE = process.env.GRANT_TYPE;
const REST_API_KEY = process.env.REST_API_KEY;
const REDIRECT_URI = process.env.REDIRECT_URI;

const kakaoLogin = async (KAKAO_CODE) => {
    const kakaoAccessToken = await axios({
        method: 'post',
        url: 'https://kauth.kakao.com/oauth/token',
        headers: { 'Content-type': 'application/x-www-form-urlencoded;charset=utf-8' },
        data: qs.stringify({
            grant_type: GRANT_TYPE,
            client_id: REST_API_KEY,
            redirect_uri: REDIRECT_URI,
            code: KAKAO_CODE,
        }),
    }).then((response) => response.data);

    const kakaoUserInfo = await axios({
        method: 'get',
        url: 'https://kapi.kakao.com/v2/user/me',
        headers: {
            'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
            Authorization: `Bearer ${kakaoAccessToken['access_token']}`,
        },
    }).then((response) => response.data);

    const kakaoId = kakaoUserInfo['id'];
    const name = kakaoUserInfo.properties['nickname'];
    const profile_image = kakaoUserInfo.properties['profile_image'];
    const description = `${name}의 공간입니다.`;

    const userInfo = await authDao.getUserBykakaoId(kakaoId);

    if (!userInfo) {
        await authDao.createUser(kakaoId, name, profile_image, description);
    }

    const accessToken = jwt.sign({ id: userInfo.id }, process.env.JWT_SECRET);
    userInfo.token = accessToken;
    return userInfo;
};

const getUserById = async (id) => {
    return await authDao.getUserById(id);
};

module.exports = { kakaoLogin, getUserById };
