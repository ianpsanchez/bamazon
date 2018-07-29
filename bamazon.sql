DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

productsCREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(45) NULL,
  department_name VARCHAR(45) NULL,
  price DECIMAL(10,2) NULL,
  stock_quantity INT NULL,
  PRIMARY KEY (item_id)
);

USE bamazon;

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Hot Wheels", "Toys", 2.50, 100);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Voltron", "Toys", 11.50, 20);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Jordan Tens", "Shoes", 120.99, 4);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Air Force Ones", "Shoes", 2.50, 100);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Wildcats Hat", "Hats", 12.00, 29);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Sun Devils Hat", "Hats", 15.50, 28);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Playstation", "Electronics", 255.00, 75);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Xbox III", "Electronics", 399.99, 21);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Chicken", "Food", 2.50, 100);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Pork", "Food", 2.50, 100);

SELECT * FROM products;