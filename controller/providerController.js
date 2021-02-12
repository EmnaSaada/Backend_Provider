const Provider = require('../model/ProviderModel');

exports.createProvider = (req, res, next) => { 
const provider = new Provider({  
  ...req.body 
});
provider.save().then(()=> res.status(201).json({message: "The request has succeeded"}))
.catch(error => res.status(400).json({error}))
};

exports.UpdateProvider = (req, res, next) => {
    Provider.updateOne({_id: req.params.id}, {...req.body, _id: req.params.id})
    .then(() => res.status(200).json("The request has succeeded."))
    .catch(error => res.status(400).json("Invalid ID."));
    };
    exports.getAll = (req, res, next) => {
      Provider.find()
      .then(providers => res.status(200).json(providers))
      .catch(error => res.status(400).json({ error }));
    };
    exports.getOneProvider =  (req, res, next) => {
      Provider.findOne({_id: req.params.id })
      .then(providers => res.status(200).json(providers))
      .catch(error => res.status(400).json({ message: "Invalid ID" }));
    };
    exports.deleteProvider =  (req, res, next) => {
      Provider.findByIdAndDelete({_id:req.params.id})
    .then(()=> res.status(201).json("The request has succeeded"))
    .catch(error=> res.status(400).json(" Invalid ID."));
    };
    

