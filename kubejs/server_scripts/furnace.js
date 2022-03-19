var outputFur = [
    'minecraft:stone',
    'minecraft:brick'
]

var inputfur = [
    'minecraft:cobblestone',
    'minecraft:clay_ball'
]

var chunks = [
    'emendatusenigmatica:iron_chunk'
]

var nuggets = [
    'minecraft:iron_nugget'
]

var outputsmoki = [
    'minecraft:charcoal'
]

var inputsmoki = [
    '#minecraft:logs'
]


onEvent('recipes', event => {

    

    for (var i = 0; i <= 1; i++) {

        event.smelting(outputFur[i], inputfur[i])

    }

    for(var i = 0; i <= 0; i++){

        event.smoking(outputsmoki[i], inputsmoki[i])

    }

    for (var i = 0; i <= 0; i++) {

        event.smelting("2x " + nuggets[i], chunks[i])

        event.blasting("4x " + nuggets[i], chunks[i])

    }

    

    

})