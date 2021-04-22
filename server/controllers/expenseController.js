const Expense = require("../models/expense");
const validationHandler = require("../validations/validationHandler");

exports.index = async (req, res) => {
    try {
        const pagination = req.query.pagination
        ? parseInt(req.query.pagination)
        : 10;

        const page = req.query.page ? parseInt(req.query.page) : 1;
        const expenses = await Expense.find().sort({ createdAt: -1 })
        .skip((page - 1) * pagination)
        .limit(pagination)
        .populate("user")
        .sort({ createdAt: -1});
        res.send(expenses);
    } catch (err) {
        next(err);
    }
};

exports.indexQuery = async (req, res) => {
    if(req.query.status){
        try {
            const expenses = await Expense.find({
                "status": req.query.status
            }).sort({ createdAt: -1 });
            res.send( expenses );
        } catch (err) {
            next(err);
        }
    }else{
    try {
        const expenses = await Expense.find({
            "client": req.query.client
        }).sort({ createdAt: -1 });
        res.send( expenses );
    } catch (err) {
        next(err);
    }
}
}

exports.show = async (req, res) => {
    try {
        const expenses = await Expense.findOne({
            _id: req.params.id
        }).populate("user");
        res.send(expenses);
    }catch(err){
        next(err);
    }
}


exports.store = async(req, res, next) => {
  try {
      validationHandler(req);
      let expense = new Expense();
      expense.title = req.body.title;
      expense.employeeName = req.body.employeeName;
      expense.client = req.body.client;
      expense.clientEngagement = req.body.clientEngagement;
      expense.amount = req.body.amount;
      expense.gstAmount = req.body.gstAmount;
      expense.category = req.body.category;
      expense.fromDate = req.body.fromDate;
      expense.toDate = req.body.toDate; 
      expense.description = req.body.description;
      expense.status = req.body.status;
    // expense.image = req.file.filename;
    expense.user = req.user;
    expense = await expense.save();
      res.send(expense);

  }catch(err){
      next(err);
  }
}



exports.update = async(req, res, next) => {
    try {
        validationHandler(req);
        // this "Post.findById(req.params.id)" is method done by mongoose option
        let expense = await Expense.findById(req.params.id);
        if(!expense || expense.user != req.user.id){
            const error = new Error ("Wrong request");
            error.statusCode = 400;
            throw error;
        }
        expense.title = req.body.title;
        expense.employeeName = req.body.employeeName;
        expense.client = req.body.client;
        expense.clientEngagement = req.body.clientEngagement;
        expense.amount = req.body.amount;
        expense.gstAmount = req.body.gstAmount;
        expense.category = req.body.category;
        expense.fromDate = req.body.fromDate;
        expense.toDate = req.body.toDate; 
        expense.status = req.body.status;
        // expense.description = req.body.description;
        expense = await expense.save();
        res.send(expense);
    }catch(err){
        next(err);
    }
  }



  exports.delete = async(req, res, next) => {
    try {
        let expenses = await Expense.findById(req.params.id);
        if(!expenses || expenses.user != req.user.id){
            const error = new Error ("Wrong request");
            error.statusCode = 400;
            throw error;
        }
        expenses = await expenses.delete();
        res.send({"message":"successfully removed the expense"});
  
    }catch(err){
        next(err);
    }
  }