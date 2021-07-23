/* Creación de la tabla countries */


CREATE TABLE `covid_analytics`.`countries` ( 
   `id` INT NOT NULL AUTO_INCREMENT , 
   `region_id` INT NOT NULL , 
   `countriesAndTerritories` VARCHAR(42) NOT NULL , 
   `geoId` VARCHAR(8) NOT NULL , 
   `countryterritoryCode` VARCHAR(11) NOT NULL , 
   `popData2019` VARCHAR(12) NOT NULL , 
   PRIMARY KEY (`id`), 
   FOREIGN KEY (region_id) REFERENCES `covid_analytics`.`region`(id)
);

/* Creación de la tabla entries */


CREATE TABLE `covid_analytics`.`entries` ( 
   `id` INT NOT NULL AUTO_INCREMENT , 
   `country_id` INT NOT NULL , 
   `dateRep` VARCHAR(12) NOT NULL , 
   `day` INT NOT NULL , 
   `month` INT NOT NULL , 
   `year` INT NOT NULL , 
   `cases` INT NOT NULL , 
   `deaths` INT NOT NULL , 
   `acumulative_number_for_14_days_of_COVID` INT NULL DEFAULT '0' , 
   PRIMARY KEY (`id`), 
   FOREIGN KEY (country_id) REFERENCES `covid_analytics`.`countries`(id)
);