module.exports = function(bookshelf) {
  return {
    Person : bookshelf.Model.extend({
      tableName: 'people'
    }),
    Donor : bookshelf.Model.extend({
      tableName: 'donors'
    }),
  };
}
