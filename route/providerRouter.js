const express = require('express');
const router = express.Router();
const providerController = require('../controller/providerController');



router.post('/create', providerController.createProvider);
router.put('/update/:id', providerController.UpdateProvider);
router.get('/get',  providerController.getAll);
router.get('/getOne/:id',  providerController.getOneProvider);
router.delete('/delete/:id',  providerController.deleteProvider);


module.exports = router;