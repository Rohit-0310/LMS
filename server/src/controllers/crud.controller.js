const post = (model) => async (req, res) => {
    try {
      const item = await model.create(req.body);

      return res.status(201).send(item);
    } catch (e) {
      return res.status(500).json({ message: e.message, status: "Failed" });
    }
};

const get = (model) => async(req, res) => {
    const items = await model.find().lean().exec(); // db.tag.find() //thennable => proper promise

    return res.status(200).send({items});
};

const getOne = (model) => async(req, res) => {
    const item = await model.findById(req.params.id).lean().exec()  // db.tags.findOne({_id: ""})

    return res.status(200).send({item});
};

const updateOne = (model) => async(req, res) => {
    const item = await model.findByIdAndUpdate(req.params.id, req.body, {new: true}).lean().exec()  // db.tag.update({_id: ""},$set:{"first_name": "Rohit"})

    return res.status(200).send({item});
};

const DeleteOne = (model) => async(req, res) => {
    const item = await model.findByIdAndDelete(req.params.id).lean().exec()  // db.users.remove({_id: ""})

    return res.status(200).send({item});
}


module.exports = {
    post,
    get,
    getOne,
    updateOne,
    DeleteOne
};