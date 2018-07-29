var mysql = require("mysql");
var inquirer = require("inquirer");


var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "root",
    database: "bamazon"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.config.port);

    afterConnection();

});



function afterConnection() {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;

        for (var i = 0; i < res.length; i++) {
            console.log("Item ID: " + res[i].item_id + "  Product Name: " + res[i].product_name + "  Price: " + res[i].price);
        }
        console.log("\n");

        askCustwhatIdandProduct();

    });
}

function askCustwhatIdandProduct() {
    inquirer.prompt([

        {
            type: "input",
            name: "inq_id",
            message: "Enter the product ID of the item you want to buy? --> "
        },

        {
            type: "input",
            name: "inq_product",
            message: "How many do you want to buy? --> "
        }
    ]).then(function (user) {

        //debug point
        // console.log(user.inq_id);
        // console.log(user.inq_product);

        
        connection.query("SELECT * FROM products where ?", { item_id: user.inq_id }, function (err, res) {
            if (err) throw err;

            //debug point
            // console.log("Product Name: --> " + res[0].product_name);
            // console.log("Product Inventory Quantity: --> " + res[0].stock_quantity);

            if (res[0].stock_quantity >= user.inq_product) {
                
                var stock_dif = res[0].stock_quantity - user.inq_product;
                
                //debug point
                // console.log("New Stock Count: --> " + stock_dif);
                
                connection.query("UPDATE Products SET stock_quantity = ? WHERE item_id = ?", [ stock_dif, user.inq_id ], function (err, res) {
                    if (err) throw err;
                    
                    //debug point
                    // console.log("updated stock qty <---");
                    // console.log("Total is: --> " + );
                });

                connection.query("SELECT * FROM Products WHERE item_id = ?",[user.inq_id],function(err,res){
                    if(err) throw err;
                    
                    //debug point
                    // console.log(res[0].item_id);
                    // console.log(res[0].product_name);
                    // console.log(res[0].department_name);
                    // console.log(res[0].price);
                    // console.log(res[0].stock_quantity);

                    console.log("\n");
                    console.log("|==================================================");
                    console.log("| Your Total Cost: --> $" + user.inq_product * res[0].price);
                    console.log("|==================================================");
                });
            }else{
                console.log("\n");
                console.log("|=========================================================================");
                console.log("| We don't have enough in stock, sorry lady. We only have " + res[0].stock_quantity + " items.");
                console.log("|=========================================================================");
            }

            connection.end();

        });
    });
}