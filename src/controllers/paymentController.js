const { paymentService } = require('../services');
const { catchAsync } = require('../utils/err');

const arrangePayment = catchAsync(async (req, res) => {
    const { item_name, quantity, total_amount, tax_free_amount } = req.body;
    const data = await paymentService.arrangePayment(item_name, quantity, total_amount, tax_free_amount);
    return res.status(200).json(data);
});

const finalizePayment = catchAsync(async (req, res) => {
    const user_id = req.user;
    const { tid, pg_token } = req.body;
    if (!pg_token) {
        const err = new Error('BAD REQUEST');
        err.status = 400;
        throw err;
    }
    const result = await paymentService.finalizePayment(user_id, tid, pg_token);

    return res.status(200).json({ result });
});

module.exports = { arrangePayment, finalizePayment };
