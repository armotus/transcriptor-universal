'use strict';

// node uso.js

let texto1 = 'Este relato es una fábula que ilustra una competencia entre el Viento del Norte y el Sol ...';

let regla1 = ':,V:B, r: rr,ci:zi,co:ko, y : i ,qu:k';
let regla2 = '>|V>B| r> rr|ci>zi|co>ko| y > i |qu>k';
let regla3 = 'φБVφBБ rφ rrБciφziБcoφkoБ y φ i Бquφk';
let regla4 = 'çÿVçBÿ rç rrÿciçziÿcoçkoÿ y ç i ÿquçk';
let regla5 = '}έV}Bέ r} rrέci}ziέco}koέ y } i έqu}k';
let regla6 = 'ş/VşB/ rş rr/cişzi/coşko/ y ş i /quşk';

let transcriptor = require('../js/transcriptor-universal.js');

let textoFonema1 = transcriptor.Transcribir(texto1,regla1);
let textoFonema2 = transcriptor.Transcribir(texto1,regla2);
let textoFonema3 = transcriptor.Transcribir(texto1,regla3);
let textoFonema4 = transcriptor.Transcribir(texto1,regla4);
let textoFonema5 = transcriptor.Transcribir(texto1,regla5);
let textoFonema6 = transcriptor.Transcribir(texto1,regla6);

console.log(textoFonema1[0]);
console.log(textoFonema2[0]);
console.log(textoFonema3[0]);
console.log(textoFonema4[0]);
console.log(textoFonema5[0]);
console.log(textoFonema6[0]);

// Este rrelato es una fábula ke ilustra una kompetenzia entre el Biento del Norte i el Sol ...
// Este rrelato es una fábula ke ilustra una kompetenzia entre el Biento del Norte i el Sol ...
// Este rrelato es una fábula ke ilustra una kompetenzia entre el Biento del Norte i el Sol ...
// Este rrelato es una fábula ke ilustra una kompetenzia entre el Biento del Norte i el Sol ...
// Este rrelato es una fábula ke ilustra una kompetenzia entre el Biento del Norte i el Sol ...
// Este rrelato es una fábula ke ilustra una kompetenzia entre el Biento del Norte i el Sol ...
