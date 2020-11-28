const objeto = {
    name: 'Adrian',
    lastName: 'Solimano',
    email: '123@456',
    edad: 36,
    datosBancarios: {
        cbu: '12345678',
        numeroCuenta: '123123123',
    }
}
const {
    //puedo destructurar un objeto y si lo pongo completo antes del destructurado lo obtengo completo de nuevo.
    //completo
    datosBancarios,
    //destructurado
    datosBancarios: { numeroCuenta },
} = objeto;

//console.log(datosBancarios);

//INMUTABILIDAD (metodos para protejer los datos)
//JS 'strict mode', hace que me obligue a nombrar correctamente las variables y usarlo correctamente.

//Freeze - no voy a poder modificar la variable por el modo estricto
Object.freeze(objeto);
//Seal - permite modificar los datos dentro pero no eliminar/agregar
Object.seal(objeto);

//*** EJERCICIOS ***
let bulbasaur = {
    name: "Bulbasaur",
    type: "grass",
    ability: {
        primary: "Overgrow",
        hidden: "Chlorophyll",
    },
    stats: {
        hp: 45,
        attack: 49,
        deffense: 59,
        speed: 45,
    },
    moves: ["Growl", "Tackle", "Vine Whip", "Razor Leaf"],
    modifiers: {
        weakness: ["fire, ice", "flying", "psychic"],
        resistances: ["water", "grass", "electric", "fighter"],
    },
};

let charmander = {
    name: "Charmander",
    type: "fire",
    ability: {
        primary: "Blaze",
        hidden: "Solar Power",
    },
    stats: {
        hp: 39,
        attack: 52,
        deffense: 43,
        speed: 65,
    },
    moves: ["Growl", "Scratch", "Flamethrower", "Dragon Breath"],
    modifiers: {
        weakness: ["water", "ground", "rock"],
        resistances: ["fire", "ice", "grass", "steal"],
    },
};

let squirtle = {
    name: "Squirtle",
    type: "water",
    ability: {
        primary: "Torrent",
        hidden: "Rain Dish",
    },
    stats: {
        hp: 44,
        attack: 48,
        deffense: 50,
        speed: 43,
    },
    moves: ["Tackle", "Tail Whip", "Water Gun", "Hydro Pump"],
    modifiers: {
        weakness: ["electric", "grass"],
        resistances: ["water", "fire", "ice", "steel"],
    },
};

let pikachu = {
    name: "Pikachu",
    type: "electric",
    ability: {
        primary: "Static",
        hidden: "Lightning rod",
    },
    stats: {
        hp: 35,
        attack: 55,
        deffense: 40,
        speed: 90,
    },
    moves: ["Quick Attack", "Volt Tackle", "Iron Tail", "Thunderbolt"],
    modifiers: {
        weakness: ["ground"],
        resistances: ["electric", "flying", "water", "steel"],
    },
};

//let pokemon = { pikachu, squirtle, charmander, bulbasaur };

// 1 - Crear una función getMoves que tome como argumento un pokémon y devuelva la lista de movimientos
const getMoves = ({ moves }) => moves;
//console.log(getMoves(squirtle));

// 2 -Crear una función getPrimaryAbility que tome como argumento un pokémon y devuelva la habilidad primaria
const getPrimaryAbility = ({ ability: { primary } }) => primary;
//console.log(getPrimaryAbility(charmander));

// 3 -Crear una función getWeaknesses que tome como argumento un pokémon y devuelva la lista de tipos contra los que es débil
const getWeaknesses = ({ modifiers: { weakness } }) => weakness;
//console.log(getWeaknesses(pikachu));

// 4 - Crear una función getResistances que tome como argumento un pokémon y devuelva la lista de tipos contra los que es débil
const getResistances = ({ modifiers: { resistances } }) => resistances;
//console.log(getResistances(bulbasaur));

// 5 - Crear una función resistsType que tome como argumentos un pokémon y un tipo y devuelva true si el pokémon es resistente a dicho tipo
const resistsType = ({ modifiers: { resistances } }, type) => {
    if (resistances.includes(type)) {
        return true;
    }
    else { return false };
}
//console.log(resistsType(bulbasaur, 'fire'));

// 6 - Crear una función resistsMove que tome como argumentos un pokémon y un movimiento y devuelva true si el pokémon es resistente a dicho ataque. El movimiento es un objeto que contiene nombre del mismo y tipo, p. ej.: { name: "Rain dance", type: "water" }
const resistsMove = ({ modifiers: { resistances } }, { type }) => resistances.includes(type);
//console.log(resistsMove(charmander, 'Scratch'));

// 7 - Crear una función isWeakAgainst que tome como argumento un objeto con dos propiedades, attacker y attacked, donde cada valor es un pokémon (p.ej. { attacker: pikachu, attacked: squirtle }) y devuelva true si el pokémon atacado es débil frente al tipo de pokémon que lo ataca
const isWeakAgainst = ({ type }, { modifiers: { weakness } }) => {
    if (weakness.includes(type)) {
        return true;
    }
    else { return false };
}
//console.log(isWeakAgainst(squirtle, charmander));

// 8 - Crear una función isStrongAgainst que tome como argumento un objeto con dos propiedades, attacker y attacked, donde cada valor es un pokémon (p.ej. { attacker: pikachu, attacked: squirtle }) y devuelva true si el pokémon atacado es resistente al tipo de pokémon que lo ataca
const isStrongAgainst = ({ type }, attacked) => {
    const resistencia = getResistances(attacked)
    return resistencia.includes(type)
}
//console.log(isStrongAgainst(squirtle, bulbasaur));

// 9 - Crear una función addAbility que tome como argumentos un pokémon y un objeto con un tipo de habilidad y el nombre de la misma (p. ej.: { secondary: "Discharge" }) y devuelva el pokémon con la habilidad agregada
const addAbility = (pokemon, habilidad) => {
    for (let prop in habilidad) {
        pokemon.ability[prop] = ability[prop];
    }
}
const newAbility = { secondary: 'Discharge' };
//console.log(addAbility(pikachu, newAbility))

// 10 - Crear una función addMove que tome como argumentos un pokémon y un movimiento, agregue dicho movimiento a su lista y devuelva el pokémon con el movimiento agregado
const addMove = (pokemon, move) => {
    //deconstructuro y me quedo solo con moves
    const { moves } = pokemon;
    //pusheo el parametro 'move'
    moves.push(move);
    return pokemon;
}
//console.log(addMove(charmander, 'jump'))

// 11 - Crear una función removeMove que tome como argumentos un pokémon y un movimiento, elimine dicho movimiento de su lista y devuelva el pokémon con el movimiento agregado
const removeMove = (pokemon, move) => {
    const { moves } = pokemon;
    if (moves.includes(move)) {
        let indice = moves.indexOf(move);
        moves.splice(indice, 1);
    }
    return pokemon;
}
//console.log(removeMove(pikachu, 'Iron Tail'))
//console.log(removeMove(pikachu, 'Thunderbolt'))
/*
12 - Crear una función getAttackModifier, tome como argumento un objeto con dos propiedades, attacker y attacked, donde cada valor es un pokémon (p.ej. { attacker: pikachu, attacked: squirtle }) y devuelva:
- 2, si el pokémon atacado es débil (weakness) contra el tipo del pokémon que ataca
- 0,5, si el pokémon atacado es resistente (resistances) contra el tipo del pokémon que ataca
- 1, si no es débil ni resistente
*/
const getAttackModifier = (attacker, attacked) => {
    if (isWeakAgainst(attacker, attacked)) {
        return 2;
    }
    else if (isStrongAgainst(attacker, attacked)) {
        return 0.5;
    }
    else {
        return 1;
    }
}
//console.log(getAttackModifier(pikachu, charmander));
