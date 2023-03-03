db = db.getSiblingDB('animals');
db.createCollection('animals');
db.animals.insertMany([
  {
    breed: 'American Bobtail',
    species : 'cat'

},
  {
    breed: 'Birman',
    species : 'cat'
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