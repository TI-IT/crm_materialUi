const express = require('express');
const router = express.Router();

const people = [
  { vehicle: 'car', ownerName: 'tigra', details: 'деталное описание' },
  { vehicle: 'bice', ownerName: 'Bruno', details: 'деталное описание' },
  { vehicle: 'airplane', ownerName: 'Mike', details: 'деталное описание' },
  { vehicle: 'ttr', ownerName: 'owName', details: 'деталное описание' },
  { vehicle: 'moped', ownerName: 'NewName', details: 'деталное описание' },
];

router.get('/', (req, res) => {
  res.json({ ok: true, people: people });
});
router.get('/people', (req, res) => {
  res.json(people);
});

module.exports = router;
