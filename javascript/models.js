module.exports = function(bookshelf) {
  var knex = bookshelf.knex;
  knex.schema.createTableIfNotExists('people', function(people) {
    people.increments();
    people.string('name');
    people.integer('age');
    people.date('ageRecorded');
    people.string('gender');
    people.binary('photo');
    people.string('phone');
    people.string('email');
    people.string('location');
  }
  knex.schema.createTableIfNotExists('donors', function(donors) {
    donors.increments();
    donors.string('name');
    donors.string('phone');
    donors.string('email');
    donors.string('location');
    donors.boolean('facebook');
  }
  return {
    Person : bookshelf.Model.extend({
      tableName: 'people'
    }),
    Donor : bookshelf.Model.extend({
      tableName: 'donors'
    }),
  };
}
