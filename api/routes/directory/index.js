const express = require('express');

const { saveCity, getAllCitys } = require('../../services/crm/directory/directory.service');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Products');
});

router.post('/city/addOneData', async (req, res) => {
  const data = req.body;
  try {
    await saveCity(data);
    res.json({ ok: true });
  } catch (e) {
    console.error(e);
    res.json({ ok: false });
  }
});

router.get('/citys/getAll', async (req, res) => {
  const citys = await getAllCitys();
  res.json({ ok: true, data: citys });
});

module.exports = router;
