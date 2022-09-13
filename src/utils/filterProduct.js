const { Op } = require("sequelize");
const { limiterText } = require("../utils/stringHelper");
const price = require("../utils/priceHelper");

const filters = {
  filter: async (req, res, model) => {
    let brands;
    let value;
    let order;

    const { brand1, brand2, brand3, brand4, brand5, brand6, brand7 } = req.body;
    const { value1, value2, value3, value4 } = req.body;
    const { priceUp, priceDown } = req.body;

    if (brand1) {
      brands = "Computador";
    }
    if (brand2) {
      brands = "Notebook";
    }
    if (brand3) {
      brands = "Smartphone";
    }
    if (brand4) {
      brands = "Periféricos";
    }
    if (brand5) {
      brands = "Tablet";
    }
    if (brand6) {
      brands = "Tv";
    }
    if (brand7) {
      brands = "Gamer";
    }
    if (priceUp) {
      console.log(5)
      order = "DESC";
    }
    if (priceDown) {
      order = "ASC";
    }
    if (value1) {
      value = 600;
    }
    if (value2) {
      value = 1000;
    }
    if (value3) {
      value = 2000;
    }
    if (value4) {
      value = 2000;
    }

    let allProducts;

    if(!brands && !value && !order){
      res.redirect("/menu/todos-produtos")
    }

    if (brands && !order && !value) {
      allProducts = await model.findAll({
       where:{
        category:brands
       }
      });
    }

    if (brands && order) {
      allProducts = await model.findAll({
       where:{
        category:brands
       },
       order: [["price_discount", order]],
       
      });
    }

    if (priceDown || priceUp && !brands) {
      allProducts = await model.findAll({
        order: [["price_discount", order]],
      });
    }

    if (value && brands && !order) {
      allProducts = await model.findAll({
        where: {
          category: brands,
          price_discount: { [Op.lt]: value }
        }
      });
    }

    if (value && order && !brands) {
      allProducts = await model.findAll({
        where: {
          price_discount: { [Op.lt]: value },
        },
          order: [["price_discount", order]]
      })};

    if (brands && value && !order) {
      allProducts = await model.findAll({
        where: {
          category: brands,
          price_discount: { [Op.lt]: value },
        }
      });
    }

    if (brands && value && order) {
      allProducts = await model.findAll({
        where: {
          category: brands,
          price_discount: { [Op.lt]: value },
        },
          order: [["price_discount", order]]
      });
    }

    if (!brands && value && !order) {
      allProducts = await model.findAll({
        where: {
          price_discount: { [Op.lt]: value },
        }
      });
    }

    let limit = "none";

    return res.render("allProducts", {
      products: allProducts,
      limiterText,
      price,
      limit,
    });
  },
};

module.exports = filters;
