const { Product } = require("../database/models");
const { Op } = require("sequelize");
const { limiterText } = require("../utils/stringHelper");
const price = require("../utils/priceHelper");

const menuController = {
  smartphones: async (req, res) => {



    const allSmartphones = await Product.findAll({
      where: { category: "Smartphone" },
    });

    const smartphones = [];
    allSmartphones.map((product) => {
      smartphones.push(product._previousDataValues);
    });
    res.render("smartphones", { smartphones, limiterText, price });
  },

  perifericos: (req, res) => {
    Product.findAll({
      where: {
        category: "Periféricos",
      },
    })
      .then((products) => {
        const perifericos = [];
        products.map((product) => {
          perifericos.push(product._previousDataValues);
        });
        res.render("perifericos", { perifericos, limiterText, price });
      })
      .catch((error) => {
        console.log(error);
      });
  },

  tablet: (req, res) => {
    Product.findAll({
      where: {
        category: "Tablet",
      },
    })
      .then((products) => {
        const tablet = [];
        products.map((product) => {
          tablet.push(product._previousDataValues);
        });
        const { limiterText } = require("../utils/stringHelper");
        res.render("tablet", { tablet, price, limiterText });
      })
      .catch((error) => {
        console.log(error);
      });
  },
  tv: (req, res) => {
    Product.findAll({
      where: {
        category: "TV",
      },
    })
      .then((products) => {
        const tv = [];
        products.map((product) => {
          tv.push(product._previousDataValues);
        });
        res.render("tv", { tv, price, limiterText });
      })
      .catch((error) => {
        console.log(error);
      });
  },
  seach: (req, res)=>{
const {searchTerm} = req.body

const search = `%${searchTerm}%`

    Product.findAll({
      where: {
        name: {
          [Op.like]: search,
        },
      },
    })
      .then((products) => {
        let result = [];

        products.map((product) => {
          result.push(product._previousDataValues);
        });
        if(result.length <1){
          result ==false
        }
        res.render("search-result", { result, price, limiterText });
      })
      .catch((error) => {
        console.log(error);
      });

  }
};

module.exports = menuController;
