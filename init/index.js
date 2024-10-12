const mongoose = require(`mongoose`);
const initData = require(`./data.js`);
const Listing = require(`../models/listing.js`);

main()
  .then(() => {
    console.log(`Connection Done`);
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(`mongodb://127.0.0.1:27017/wanderLust`);
}

let initDataBase = async () => {
  await Listing.deleteMany();
  initData.data = initData.data.map((obj) => ({
    ...obj,
    owner: "670b000c1f13012b9204fbd1",
  }));
  await Listing.insertMany(initData.data);

  console.log(`Data Save Successfully`);
};

initDataBase();
