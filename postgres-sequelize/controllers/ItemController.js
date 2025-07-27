const { Op } = require("sequelize");
const { Item } = require("../models");

class ItemController {
  static async getItems(req, res) {
    try {
      let items = await Item.findAll();
      res.status(200).json(items);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async getItemById(req, res) {
    try {
      const id = +req.params.id;
      let result = await Item.findOne({
        where: { id },
      });
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  static async add(req, res) {
    try {
      const { name, category, price, stock, image } = req.body;
      let result = await Item.create({
        name,
        category,
        price,
        stock,
        image,
      });
      res.status(201).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async delete(req, res) {
    try {
      const id = +req.params.id;
      let result = await Item.destroy({
        where: { id },
      });
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  static async edit(req, res) {
    try {
      const id = +req.params.id;
      const { name, category, price, stock, image } = req.body;
      let result = await Item.update(
        {
          name,
          category,
          price,
          stock,
          image,
        },
        {
          where: { id },
        }
      );
      res.status(201).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  static async search(req, res) {
    try {
      const searchQuery = req.query.name;
      let result = await Item.findAll({
        where: {
          name: {
            [Op.iLike]: `%${searchQuery}%`,
          },
        },
      });
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}

module.exports = ItemController;
