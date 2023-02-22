const axios = require('axios');
const { paymentDao } = require('../models');

const finalizePayment = async (user_id, tid, pg_token) => {
    const ADMIN_KEY = process.env.APP_ADMIN_KEY;

    const response = await axios({
        method: 'post',
        url: 'https://kapi.kakao.com/v1/payment/approve',
        headers: {
            Authorization: `KakaoAK ${ADMIN_KEY}`,
            'Content-type': 'application/x-www-form-urlencoded;charser=-utf-8',
        },
        data: new URLSearchParams({
            cid: 'TC0ONETIME',
            tid: tid,
            partner_order_id: 'partner_order_id',
            partner_user_id: 'partner_user_id',
            pg_token: pg_token,
        }),
    });
    if (response.status !== 200) {
        const err = new Error('SOMETHING WRONG WITH PAYMENT');
        err.status = 400;
        throw err;
    }

    const { item_name, amount, aid } = response.data;
    const price = amount.total;
    await paymentDao.purchaseList(user_id, item_name, price, aid);
    return 'PAYMENT MADE';
};

module.exports = { finalizePayment };
