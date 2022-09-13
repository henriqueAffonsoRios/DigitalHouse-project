const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');
const auth = require('../middlewares/cartAuth')

router.get('/', mainController.index);

router.get('/carrinho',auth, mainController.carrinho);

router.post('/carrinho/:id',auth, mainController.cartCreate);

router.post('/remover-produto/:id',auth, mainController.removeItem);

router.get('/pagamento', auth, mainController.paymentMethod);

router.post('/pagamento',auth, mainController.paymentNext);

router.get('/detalhe', mainController.detail);

router.get('/meu-endereco', auth, mainController.myAddress);

router.get('/sucesso', auth, mainController.sucess);

router.post('/meu-endereco',auth, mainController.newAddress);

router.get('/endereco/resumo',auth, mainController.addressResume);

router.get('/detalhe/:id', mainController.detailProduct);


module.exports = router;