Use heroku_

CREATE TABLE burger( 
item_id INTEGER(11) AUTO_INCREMENT NOT NULL,
burger_name VARCHAR(50) NOT NULL,
devoured boolean,
date timestamp,
PRIMARY KEY (item_id)
);