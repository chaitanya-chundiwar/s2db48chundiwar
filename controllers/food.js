var Food = require('../models/food');

exports.food_list = async function (req, res) {
    try {
        tFoods = await Food.find();
        res.send(tFoods);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

exports.food_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: Food detail: ' + req.params.id);
};

exports.food_create_post = async function (req, res) {
    console.log(req.body)
    let document = new Food();
    document.food_brand = req.body.food_brand;
    document.food_cost = req.body.food_cost;
    document.food_color = req.body.food_color;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

exports.food_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: Food delete DELETE ' + req.params.id);
};

exports.food_update_put = function (req, res) {
    res.send('NOT IMPLEMENTED: Food update PUT' + req.params.id);
};


exports.food_view_all_Page = async function (req, res) {
    try {
        tFoods = await Food.find();
        res.render('foods', { title: 'Food Search Results', results: tFoods });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};