require("../models/database");
const Category = require("../models/Category");
const Recipe = require("../models/Recipe");

exports.homepage = async (req, res) => {
  try {
    const limitNumber = 5;
    const categories = await Category.find({}).limit(limitNumber);

    res.render("index", { title: "Cooking Blog - Home", categories });
  } catch (error) {
    res.status(500).send({ message: error.message || "Error Occure" });
  }
};

// Get categories /categories

exports.exploreCategories = async (req, res) => {
  try {
    const limitNumber = 20;
    const categories = await Category.find({}).limit(limitNumber);

    res.render("categories", {
      title: "Cooking Blog - Categories",
      categories,
    });
  } catch (error) {
    res.status(500).send({ message: error.message || "Error Occure" });
  }
};

// -------------------------------Example of inserting data in db

// async function insertDummyCategoryData() {
//   try {
//     await Category.insertMany([
//       {
//         name: "Thai",
//         image: "thai-food.jpg",
//       },
//       {
//         name: "American",
//         image: "american-food.jpg",
//       },
//       {
//         name: "Chinese",
//         image: "chinese-food.jpg",
//       },
//       {
//         name: "Mexican",
//         image: "mexican-food.jpg",
//       },
//       {
//         name: "Indian",
//         image: "indian-food.jpg",
//       },
//       {
//         name: "Spanish",
//         image: "spanish-food.jpg",
//       },
//     ]);
//   } catch (error) {
//     console.log("err", +error);
//   }
// }

// insertDummyCategoryData();
