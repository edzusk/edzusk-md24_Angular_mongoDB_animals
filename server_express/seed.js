db = db.getSiblingDB('animals');
db.createCollection('animals');
db.recipes.insertMany([
  {
    breed: 'American Bobtail',
    species : 'cat'

},
  {
    breed: 'Birman',
    species : 'dog'
},
  {
    breed: 'poodle',
    species : 'dog'
},
  {
    breed: 'german shepherd dog',
    species : 'dog'
},
]);