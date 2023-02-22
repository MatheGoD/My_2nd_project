const { cartsService } = require('../services');
const { catchAsync } = require('../utils/err');

const showCart = catchAsync(async (req, res) => {
    const user_id = req.user;
    const result = await cartsService.showCart(user_id);
    if (!result[0]) {
        return res.status(200).json({ message: '장바구니가 비어있습니다.' });
    }
    return res.status(200).json({ result });
});

const addCart = catchAsync(async (req, res) => {
    const user_id = req.user;
    const writing_id = req.body.writing_id;
    const result = await cartsService.addCart(user_id, writing_id);

    return res.status(200).json({ message: result });
});

const deleteCart = catchAsync(async (req, res) => {
    const cart_id = req.body.cart_id;

    await cartsService.deleteCart(cart_id);

    return res.status(200).json({ message: '성공적으로 삭제되었습니다.' });
});

module.exports = { showCart, addCart, deleteCart };
