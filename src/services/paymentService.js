const axios = require('axios');
const { paymentDao } = require('../models');
const arrangePayment = async (item_name, quantity, total_amount, tax_free_amount) => {
    const APP_ADMIN_KEY = process.env.APP_ADMIN_KEY;
    ////////////////////////////////////////////////////////////
    const payment = await axios({
        method: 'post',
        url: 'https://kapi.kakao.com/v1/payment/ready',
        headers: {
            'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
            Authorization: `KakaoAK ${APP_ADMIN_KEY}`,
        },
        data: new URLSearchParams({
            cid: 'TC0ONETIME',
            partner_order_id: 'partner_order_id',
            partner_user_id: 'partner_user_id',
            item_name: item_name,
            quantity: quantity,
            total_amount: total_amount,
            tax_free_amount: tax_free_amount,
            approval_url: 'http://localhost:3000/payment',
            cancel_url: 'http://localhost:3000/payment/approval',
            fail_url: 'http://localhost:3000/payment/approval',
        }),
    });

    const { tid, next_redirect_pc_url } = payment.data;
    return { tid, next_redirect_pc_url };
};

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

module.exports = { arrangePayment, finalizePayment };
