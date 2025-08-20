# TRANSCRIPTOR UNIVERSAL

Un simple transcriptor universal para lenguas con caracteres unicode.

## INSTALACIÓN

```bash
npm i transcriptor-universal
```

## USO

```js
let texto1 = 'Este relato es una fábula que ilustra una competencia entre el Viento del Norte y el Sol ...';

let regla1 = ':,V:B, r: rr,ci:zi,co:ko, y : i ,qu:k';
let regla2 = 'φБVφBБ rφ rrБciφziБcoφkoБ y φ i Бquφk';

let transcriptor = require('transcriptor-universal');

let textoFonema1 = transcriptor.Transcribir(texto1,regla1);
let textoFonema2 = transcriptor.Transcribir(texto1,regla2);

console.log(textoFonema1[0]);
console.log(textoFonema2[0]);

// Este rrelato es una fábula ke ilustra una kompetenzia entre el Biento del Norte i el Sol ...
// Este rrelato es una fábula ke ilustra una kompetenzia entre el Biento del Norte i el Sol ...
```

## TEST

```bash
npm test
```

## DEMO

[HOME](https://armotus.github.io/transcriptor-universal)

## LICENCIA

[MIT](https://opensource.org/license/mit)