var outputFur = [
    'minecraft:stone',
    'minecraft:brick'
]

var inputfur = [
    'minecraft:cobblestone',
    'minecraft:clay_ball'
]

var clusterfur = [
    'emendatusenigmatica:copper_cluster',
    'emendatusenigmatica:lead_cluster',
    'emendatusenigmatica:nickel_cluster',
    'emendatusenigmatica:silver_cluster',
    'emendatusenigmatica:aluminum_cluster',
    'emendatusenigmatica:uranium_cluster',
    'emendatusenigmatica:iron_cluster',
    'emendatusenigmatica:gold_cluster'
]

var nuggets = [
    'emendatusenigmatica:copper_nugget',
    'emendatusenigmatica:lead_nugget',
    'emendatusenigmatica:nickel_nugget',
    'emendatusenigmatica:silver_nugget',
    'emendatusenigmatica:aluminum_nugget',
    'emendatusenigmatica:uranium_nugget',
    'minecraft:iron_nugget',
    'minecraft:gold_nugget'
]

var outputsmoki = [
    'minecraft:charcoal'
]

var inputsmoki = [
    '#minecraft:logs'
]

var lingotes = [
    'emendatusenigmatica:copper_ingot',
    'emendatusenigmatica:lead_ingot',
    'emendatusenigmatica:nickel_ingot',
    'emendatusenigmatica:silver_ingot',
    'emendatusenigmatica:aluminum_ingot',
    'emendatusenigmatica:uranium_ingot',
    'minecraft:iron_ingot',
    'minecraft:gold_ingot'
]


onEvent('recipes', event => {



    for (var i = 0; i <= 1; i++) {

        event.smelting(outputFur[i], inputfur[i])

    }

    for (var i = 0; i <= 0; i++) {

        event.smoking(outputsmoki[i], inputsmoki[i])

    }

    for (var i = 0; i <= 7; i++) {

        event.smelting("2x " + nuggets[i], clusterfur[i])

        event.blasting("4x " + nuggets[i], clusterfur[i])

        event.shaped(lingotes[i], [
            'SS ',
            'SSS',
            ' SS'
        ], {
            S: nuggets[i],
        })

    }





})