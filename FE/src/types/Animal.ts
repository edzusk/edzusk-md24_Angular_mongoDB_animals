type Animal = {
  breed: string;
  species: string;
  _id: string;
}

type NewAnimal = {
  breed: string;
  species: string;
}

type Species = 'all' | 'dog' | 'cat';

export default Animal

export type { Animal, NewAnimal, Species }

