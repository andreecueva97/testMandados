'use strict';

import Realm from 'realm';


// export class Imagee extends Realm.Object {}//DOG
// Imagee.schema = {
//     name: 'Imagee',
//     properties: {
//       height: 'int', 
//       mime: 'string', 
//       uri: 'string', 
//       width:'int'
//     },
// };
///////////////////////////////////////////////////////////////
export class Juego extends Realm.Object {}//DONACION
Juego.schema = {
    name: 'Juego',
    properties: {
      id: 'int',
      tipo:'int[]',     //posiciones de localidades en la partida
      persona:'Persons'
    },
};
//////////////////////////////////////////////////////////////

//---------------------------------
//---------------------------------
export class UserLogin extends Realm.Object {}//PERSONS
Persons.schema = {
    name: 'Persons',
    
    properties: {
            id: 'int',
            name: 'string',
            apellido:'string',
            edad:'int',
            dni:'int',
            //listDogs:'string[]',
            listJuegos:{type: 'list', objectType: 'Juego'},
    },
};

//////////////////////////////////////
export class User extends Realm.Object {}//PERSONS  USERS
User.schema = {
    name: 'User',
    properties: {
      id: 'int',
      name: 'string',
      apellido:'string',
      edad:'int',
      dni:'int',
      //listDogs:'string[]',
      listJuegos:{type: 'list', objectType: 'Juego'},
     // imagen:'Imagee'       // una persona loggeada debe tener una foto
    },
};
///////////////////////////////////////
// export const Schemaa = [Person, Dog];
// export const databaseOptions = {
//   path:'UserDataba232s2e22.realm',
//   schema: Schemaa,
//   //
// };

// export const heheh=[Dogo,Persons,Donacion,PersonsLogin,Imagee,Dogos];
// export const heeeqSchema ={
//   path:'ezewweresafdawewfsadfafadfewrfdsfasdfawe12134dfdsD123213FSADSFADSwe.realm',
//   schema: heheh,
//   schemaVersion:222,
// };

//export default new Realm(heeeqSchema);
//export default new Realm({schema: [AppSetting, Gps, ...], schemaVersion: 0});
export default new Realm({schema:[User,Juego,UserLogin],schemaVersion:1});