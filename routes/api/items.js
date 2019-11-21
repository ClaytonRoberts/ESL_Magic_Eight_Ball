const express = require('express');
const router = express.Router();

//Item Model
const Item = require('../../models/Item');

// @route   Get api/items
// @desc    Get All Items
// @access  Public

//// I'm not currently using any routes, etc, but I will keep this in case I add a DB later. 
// router.get('/', (req, res) => {
//     Item.find()
//     .then(items => res.json(items))
// });

module.exports = router;