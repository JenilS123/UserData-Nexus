const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const schema = new mongoose.Schema({
  names: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

const data = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  emails: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  textArea: {
    type: String,
    required: true,
  },
});


schema.methods.genarateToken = async function () {
  try {
    const tokened = jwt.sign({ _id: this._id }, process.env.SECUREKEY);
    this.tokens = this.tokens.concat({ token: tokened });
    await this.save();
    return tokened;
  } catch (error) {
    console.log("token genration error : " + error);
  }
};

const FormData = mongoose.model("formData", schema);
const ContactData = mongoose.model("ContactData", data);

module.exports = { FormData, ContactData };
