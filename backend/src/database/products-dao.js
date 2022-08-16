const { ObjectId } = require("mongodb");
const { injectDB } = require("./getDB");

const productsCollectionName = "products";

function addNewProduct(productInfo) {

  return new Promise((resolve, reject) => {
    injectDB()
      .then(db => db.collection(productsCollectionName).insertOne(productInfo))
      .then(result => {
        if (result.acknowledged === true && result.insertedId) {
          return resolve({
            _id: result.insertedId,
            ...productInfo,
          })
        } else {
          // result könnte ein error sein, daher reject...
          return reject(result)
        }
      }).catch((err) => reject(err))
  })
  // const db = await injectDB();
  // return db.collection(productsCollectionName).insertOne(productInfo);
}

module.exports = { addNewProduct };
