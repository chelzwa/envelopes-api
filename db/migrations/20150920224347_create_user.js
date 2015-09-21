
exports.up = function(knex, Promise) {
  return knex.schema.createTable('user', function(table) {
    table.increments();
    table.datetime('createdAt');
    table.datetime('updatedAt');
    table.text('email').unique();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('user');
};
