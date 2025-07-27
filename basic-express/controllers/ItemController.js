class ItemController {
  static getItems(req, res) {
    res.json({
      message: `Item main page`,
    });
  }
  static add(req, res) {
    res.json({
      message: `Item add page`,
    });
  }
  static delete(req, res) {
    console.log(+req.params.id);
    res.json({
      message: `Item delete page`,
    });
  }
  static edit(req, res) {
    console.log(+req.params.id);
    res.json({
      message: `Item edit page`,
    });
  }
  static search(req, res) {
    res.json({
      message: `Item search page`,
    });
  }
}

module.exports = ItemController;
