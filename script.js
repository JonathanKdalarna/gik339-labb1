// GIK339 - Labb 1
// JavaScript intro, variabler och funktioner


// Uppgift 2 - Variabler och scope

// Uppgift 2 - Variabler och scope

// console.log(blockLet);   // kraschar, finns inte före blocket
// console.log(blockConst); // kraschar, finns inte före blocket
// console.log(blockVar);   // undefined, var hissas men har inget värde än

{
  let blockLet = 'let i blocket';
  const blockConst = 'const i blocket';
  var blockVar = 'var i blocket';

  console.log(blockLet);
  console.log(blockConst);
  console.log(blockVar);
}

console.log(blockVar); // funkar, var ligger kvar
// console.log(blockLet);   // fel, let är block-scopad
// console.log(blockConst); // fel, const är block-scopad

/*
Reflektion uppgift 2:

var är inte block-scopad utan kan användas utanför ett vanligt block.
let och const är block-scopade och kan bara användas i blocket där de
deklarerades.

let kan tilldelas ett nytt värde medan const inte kan tilldelas om.

Om console.log används före deklarationen av var kan värdet bli undefined
på grund av hoisting. För let och const får man ReferenceError om man
försöker använda dem före deklarationen. Jag testade detta genom att logga
alla tre före blocket. blockVar blev undefined, medan blockLet och
blockConst kraschade, så jag kommenterade bort dem.

Inuti blocket fungerar alla tre variablerna. Efter blocket fungerar var,
men inte let och const.
*/


// Uppgift 3 - Funktion för att addera tal

const add = (num1, num2) => {

  // Uppgift 4 - Jämförelser och specialvärden

  console.log(num1 == 0);
  console.log(num2 === '0');
  console.log(num2 === 0);
  console.log(num1 == NaN);

  console.log(num1 ? 'truthy' : 'falsy');

  if (num1 != null && num2 != null &&
      typeof num1 === 'number' && typeof num2 === 'number' &&
      !isNaN(num1) && !isNaN(num2)) {
    return num1 + num2;
  } else {
    console.log('Fel input, båda måste vara siffror.');
    return undefined;
  }
};


/*
Reflektion uppgift 3:

Om jag hade använt let istället för const hade jag kunnat tilldela
variabeln add en annan funktion senare, vilket inte går nu då const låser
bindningen mellan namnet add och funktionen.

En funktionsdeklaration hade sett ut så här:

function add(num1, num2) {
    return num1 + num2;
}

Return betyder att funktionen skickar tillbaka ett värde till den kod som
anropade funktionen. Värdet kan sparas i en variabel eller användas direkt.
*/


/*
Reflektion uppgift 4:

En ternary operator är ett kortare sätt att skriva ett villkor. Den använder
? och : för att välja mellan två olika värden.

Exempel:
num1 ? "truthy" : "falsy"

En if-sats kan innehålla flera instruktioner medan ternary operator passar
bra för enklare villkor.

== jämför värden och kan omvandla datatyper.
=== jämför både värde och datatyp.

Jag använder != null för att kontrollera att värdena inte är null eller
undefined. Med && måste alla villkor vara sanna för att if-satsen ska köras.

typeof kontrollerar att båda värdena är nummer.
isNaN kontrollerar att värdena inte är NaN.
*/


// Uppgift 5 - Anropa funktioner

const num1 = 0;
let arg1;
let sum = false;

// Test 1: argumenten sum och 1
console.log('Test 1:', add(sum, 1));

// Test 2: argumenten "0" och 3
sum = add('0', 3);
console.log('Test 2:', sum);

// Test 3: argumenten 3 och "num1"
sum = add(3, 'num1');
console.log('Test 3:', sum);

// Test 4: argumenten -5 och num1
sum = add(-5, num1);
console.log('Test 4:', sum);

// Test 5: argumenten arg1 och 7
sum = add(arg1, 7);
console.log('Test 5:', sum);

// Test 6: anrop utan argument
sum = add();
console.log('Test 6:', sum);

// Skriver ut variablerna sist
console.log('num1 sist:', num1);
console.log('sum sist:', sum);


/*
Reflektion uppgift 5:

En parameter är ett namn som står i funktionens definition, exempelvis
num1 och num2.

Ett argument är det faktiska värde som skickas in vid funktionsanropet.

En variabel används för att lagra ett värde.

Test 1:
false och 1 skickas in. false är en boolean och inte ett nummer.
Resultatet blir undefined.

Test 2:
"0" är en sträng och inte ett nummer. Resultatet blir undefined.

Test 3:
3 är ett nummer men "num1" är en sträng. Resultatet blir undefined.

Test 4:
-5 och num1 skickas in. num1 får värdet -5 och num2 får värdet 0.
num1 == 0 ger false. num2 === '0' ger false eftersom 0 är number och
'0' är string. num2 === 0 ger true. num1 == NaN ger false eftersom NaN
aldrig är lika med något. Ternary skriver ut truthy eftersom -5 är
truthy. If-villkoret stämmer eftersom båda är number och ingen är null,
undefined eller NaN. Funktionen returnerar -5 + 0 vilket ger -5.

Test 5:
arg1 har inget värde och är därför undefined. Resultatet blir undefined.

Test 6:
Inga argument skickas in. Båda parametrarna blir undefined.
Resultatet blir undefined.

num1 är fortfarande 0. Det beror inte på att den deklarerades med const,
för den hade varit 0 med let också. Det beror på att num1 aldrig tilldelas
ett nytt värde, och parametern inuti funktionen är en egen kopia.

sum skrivs över i varje test. Test 6 anropar add() utan argument och
returnerar undefined, så sum blir undefined till slut.
*/