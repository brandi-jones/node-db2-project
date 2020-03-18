//change we want to make to our schema (applied to db)
exports.up = function(knex) {
  return knex.schema.createTable("cars", tbl => {

    tbl.increments(); //built in function that creates an autoincremented primary key

    tbl
        .integer('VIN', 17)
        .unique()
        .notNullable();

    tbl
        .string('make')
        .notNullable();

    tbl
        .string('model')
        .notNullable();

    tbl
        .integer('mileage')
        .notNullable();

    tbl
        .string('transmission')
        .defaultTo('')
    
    tbl
        .string('status')
        .defaultTo('')
  })
};

//undo the changes from the up function
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars'); 
};
