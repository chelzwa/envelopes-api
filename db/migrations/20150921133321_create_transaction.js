
exports.up = function(knex, Promise) {
  return knex.schema.createTable('transaction', function(table) {
    table.increments();
    table.datetime('createdAt');
    table.datetime('updatedAt');
    table.decimal('amount', 12, 2);
    table.text('description');
    table.integer('envelope');
    table.boolean('repeats');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('transaction');
};
