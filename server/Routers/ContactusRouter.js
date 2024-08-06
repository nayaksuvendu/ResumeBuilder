const {Router} = require ('express');
const conatactUs = require('../controllers/ContactUsControler');

const router = Router();
router.post('/',conatactUs);

module.exports = router;
