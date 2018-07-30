const express = require('express');
const Ravepay = require('ravepay');
const axios = require('axios');
const { handleAxiosError } = require('../utils/helpers')

const router = express.Router();

const PRODUCTION_FLAG = process.env.PRODUCTION_FLAG;
const PUBLIC_KEY = process.env.PUBLIC_KEY;
const SECRET_KEY = process.env.SECRET_KEY;

const rave = new Ravepay(PUBLIC_KEY, SECRET_KEY, !!PRODUCTION_FLAG);

const def_payload = {
  cardno: "5438898014560229",
  cvv: "789",
  expirymonth: "07",
  expiryyear: "18",
  currency: "NGN",
  pin: "7552",
  country: "NG",
  amount: "10",
  email: "user@example.com",
  txRef: "MC-7663-YU",
  phonenumber: "1234555",
  suggested_auth: "PIN",
  firstname: "user1",
  lastname: "user2",
  IP: "355426087298442",
  device_fingerprint: "69e6b7f0b72037aa8428b70fbe03986c"
};

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
      console.log('Encountered error', err);
      res.status(400).json({
        err: err
      });
    })
})

router.post('/qr', (req, res) => {
  axios.post('https://ravesandboxapi.flutterwave.com/flwv3-pug/getpaidx/api/charge', req.body)
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
      console.log('Successful validation', resp);
      res.json(resp.body.data)
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