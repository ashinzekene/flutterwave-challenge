const express = require('express');
const router = express.Router();
const Ravepay = require('ravepay');
const axios = require('axios');
const { handleAxiosError } = require('../utils/helpers')

const PRODUCTION_FLAG = process.env.PRODUCTION_FLAG;
const PUBLIC_KEY = process.env.PUBLIC_KEY;
const SECRET_KEY = process.env.SECRET_KEY;

const rave = new Ravepay(PUBLIC_KEY, SECRET_KEY, !!PRODUCTION_FLAG);

router.get('/banks', (req, res) => {
  rave.Misc.getBanks()
    .then(resp => {
      res.json(JSON.parse(resp.body));
    })
    .catch(err => {
      res.status(400).json({
        err: err
      });
    })
})

router.get('/status', (req, res) => {
  rave.Misc.getBanks()
    .then(resp => {
      res.json(JSON.parse(resp.body));
    })
    .catch(err => {
      res.status(400).json({
        err: err
      });
    })
})

router.post('/charge', (req, res) => {
  let payload = req.body;
  rave.Card.charge(payload).then(resp => {
      //Get the ref of the card charge from response body. This will be used to validate the transaction
      console.log('Received response');
      txRef = resp.body.data.txRef;
      res.json(resp.body)
    })
    .catch(err => {
      //Handle error
      console.log('Encountered error');
      res.status(400).json({
        err: err
      });
    })
})

router.post('/qr', (req, res) => {
  const key = rave.security.getEncryptionKey(SECRET_KEY);
  const client = rave.security.encrypt(key, JSON.stringify(req.body))
  const alg = '3DES-24'
  axios.post('https://ravesandboxapi.flutterwave.com/flwv3-pug/getpaidx/api/charge', { PBFPubKey: key, client, alg })
    .then(res => {
      console.log('Received qr response');
      txRef = resp.body.data.txRef;
      res.json(resp.body)
    })
    .catch(err => {
      //Handle error
      let error = handleAxiosError(err);
      console.log('Encountered qr error');
      res.status(400).json({ error });
    })
})

router.post('/validate', (req, res) => {
  rave.Card.validate(req.body)
    .then(resp => {
      console.log('Successful validation', res.body);
      res.json(resp.body)
    })
    .catch(err => {
      console.log('Error in validation');
      res.status(404).json({
        err: err
      });
    })
})

router.post('/bulk-charge', (req, res) => {

})

module.exports = router;
