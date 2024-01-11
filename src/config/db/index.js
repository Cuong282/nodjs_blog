const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/blog_education");
    console.log('connect')
  } catch (error) {
    console.log('miss')

  }
}
module.exports = { connect };
