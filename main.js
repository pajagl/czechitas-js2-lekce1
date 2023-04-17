// tady je místo pro náš program

/*
//c. zeptejte se uživatele na rodné číslo
const cislo = prompt ("Zadej rodné číslo")

//d. ověř, zda má rodné číslo 10 znaků
if (cislo.length === 10) {
    console.log ('Zadané rodné číslo má správně deset znaků.')
} else (console.log ('Uživatel zadal rodné číslo neplatné délky.'))

//e. musí být celé číslo
if (Number.isInteger(Number(cislo))) {
    console.log('Rodné číslo je celé číslo.')
} else (console.log('Rodné číslo obsahuje nepovolené znaky.'))

//f. musí být dělitelné 11
if (Number(cislo) % 11 === 0) {
    console.log('Rodné číslo je dělitelné 11.')
} else (console.log ('Rodné číslo není dělitelné 11.'))
*/

// pokud jsou všechny podmínky splěnny >> 'Zadané rodné číslo je platné' else 'Uživatel zadal neplatné rodné číslo.' 

// 2. Platnost jako funkce

const rodnaCislaKOtestovani = [
   '123',
   'nepovím',
   '7060201236',
   '123456789123456789',
   '9062185440',
   '123č56q8y7',
 ];

const checkBirthID = (item) => {

    if (item.length !== 10) {
        return `Invalid Item`;
    }

    if (!Number.isInteger(Number(item))) {
        return `notANumber`;
    }

    if (Number(item) % 11 !== 0) {
        return `failedChecksum`;
    }

    return `ok`;
}

console.log(checkBirthID('7060201236'));
rodnaCislaKOtestovani.forEach(checkBirthID);