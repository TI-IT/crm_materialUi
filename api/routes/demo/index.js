const express = require('express');

const {
  save,
  getAll,
  getSmallData,
  getDirectorys,
  directorysOrdersSmall,
} = require('../../services/crm/demo/demo.service');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('demo');
});

router.post('/addOneData', async (req, res) => {
  const data = req.body;
  try {
    await save(data);
    res.json({ ok: true });
  } catch (e) {
    console.error(e);
    res.json({ ok: false });
  }
});

router.get('/getAllData', async (req, res) => {
  const data = await getAll();
  res.json({ ok: true, data: data });
});

router.get('/getSmallData', async (req, res) => {
  const data = await getSmallData();
  res.json({ ok: true, data: data });
});
router.get('/getDirectorys', async (req, res) => {
  const data = await getDirectorys();
  res.json({ ok: true, data: data });
});
router.get('/directorysOrdersSmall', async (req, res) => {
  const data = await directorysOrdersSmall();
  res.json({ ok: true, data: data });
});

module.exports = router;
