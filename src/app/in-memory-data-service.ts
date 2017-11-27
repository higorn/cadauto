import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Automovel } from './automovel';

export class InMemoryDataService implements InMemoryDbService {

  createDb(): {} {
    const automovel: Automovel[] = [
      {id: 1, marca: 'Ford', modelo: 'Focus', ano: 1999},
      {id: 2, marca: 'Ford', modelo: 'Fusion', ano: 2007},
      {id: 3, marca: 'Fiat', modelo: 'Palio', ano: 2014},
      {id: 4, marca: 'Chevrolet', modelo: 'Camaro', ano: 2016},
      {id: 5, marca: 'Volkswagem', modelo: 'Gol', ano: 2000},
    ]
    return {automovel};
  }
}
