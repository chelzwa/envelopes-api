
exports.up = function(knex, Promise) {
  return knex.schema.createTable('envelope', function(table) {
    table.increments();
    table.datetime('createdAt');
    table.datetime('updatedAt');
    table.text('name').unique();
    table.decimal('goal', 12, 2);
    table.integer('user');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('envelope');
};
