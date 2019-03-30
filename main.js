// NPM Load Block
const inquirer = require("inquirer");
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "ice_creamDB"
});

function sell() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "itemName",
        message: "Name of item: "
      },

      {
        type: "input",
        name: "itemPrice",
        message: "Price: "
      },

      {
        type: "checkbox",
        name: "itemShipping",
        message: "Prime Shipping?",
        choices: ["Yes", "No", "Free Domestic"]
      }
    ])
    .then(sell => {
      console.log(sell.itemName);
      console.log(sell.itemPrice);
      console.log(sell.itemShipping);
    });
}

function buy() {}

inquirer
  .prompt([
    {
      type: "list",
      name: "mainSelect",
      choices: ["Buy", "Sell"]
    }
  ])
  .then(main => {
    if (main.mainSelect === "Buy") {
    }
    if (main.mainSelect === "Sell") {
      sell();
      //   inquirer
      //     .prompt([
      //       {
      //         type: "input",
      //         name: "itemName",
      //         message: "Name of item: "
      //       },

      //       {
      //         type: "input",
      //         name: "itemPrice",
      //         message: "Price: "
      //       },

      //       {
      //         type: "checkbox",
      //         name: "itemShipping",
      //         message: "Prime Shipping?",
      //         choices: ["Yes", "No", "Free Domestic"]
      //       }
      //     ])
      //     .then(sell => {
      //       console.log(sell.itemName);
      //       console.log(sell.itemPrice);
      //       console.log(sell.itemShipping);
      //     });
    }
  });
