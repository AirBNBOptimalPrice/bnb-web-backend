
exports.up = function(knex) {
    return knex.schema
    .createTable('users', tbl => {
        tbl.increments();
    
        tbl
          .string('username', 255)
          .notNullable()
          .unique();
        tbl.string('password', 255).notNullable();
      })
    .createTable('features', tbl => {
        tbl.increments();
        tbl
            .string('neighbourhood_group_cleansed', 255)
            .notNullable();
        tbl
            .text('description')
        tbl
            .string('property_type')
            .notNullable();
        tbl
            .integer('accommodates')
            .notNullable();
        tbl
            .float('bathrooms')
            .notNullable()
        tbl
            .float('security_deposit')
            .notNullable()
        tbl
            .float('cleaning_fee')
            .notNullable()

        tbl
            .integer('guests_included')
            .notNullable()

        tbl
            .float('extra_people')
            .notNullable()

        tbl
            .integer('minimum_nights')
            .notNullable()

        tbl
            .boolean('instant_bookable')
            .notNullable()
            .defaultTo(false)

        tbl
            .string('cancellation_policy')
            .notNullable()
        tbl
            .boolean('tv_cable')
            .notNullable()
            .defaultTo(false)
        tbl
            .boolean('pets_allowed')
            .notNullable()
            .defaultTo(false)
        tbl
            .integer('bedrooms')
            .notNullable()
    })
    .createTable('user_id_features', tbl => {
        tbl.increments()
        tbl
            .integer('user_id')
            .unsigned()
            .references('id')
            .inTable('users')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
        tbl
            .integer('feature_id')
            .unsigned()
            .references('id')
            .inTable('features')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
    })
};
  
  exports.down = function(knex, Promise) {
    return knex.schema
    .dropTableIfExists('user_id_features')
    .dropTableIfExists('features')
    .dropTableIfExists('users')
  };
  