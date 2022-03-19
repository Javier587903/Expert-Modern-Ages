// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')

var planks = [
    'minecraft:oak_planks',
    'minecraft:spruce_planks',
    'minecraft:birch_planks',
    'minecraft:jungle_planks',
    'minecraft:acacia_planks',
    'minecraft:dark_oak_planks',
    'minecraft:crimson_planks',
    'minecraft:warped_planks'
]

var logs = [
    'minecraft:oak_log',
    'minecraft:spruce_log',
    'minecraft:birch_log',
    'minecraft:jungle_log',
    'minecraft:acacia_log',
    'minecraft:dark_oak_log',
    'minecraft:crimson_stem',
    'minecraft:warped_stem'
]

var crafting_base = [
    'kubejs:oak_crafting_base',
    'kubejs:spruce_crafting_base',
    'kubejs:birch_crafting_base',
    'kubejs:jungle_crafting_base',
    'kubejs:acacia_crafting_base',
    'kubejs:dark_oak_crafting_base',
    'kubejs:crimson_crafting_base',
    'kubejs:warped_crafting_base'
]
var leños = [
    'minecraft:stripped_oak_wood',
    'minecraft:stripped_spruce_wood',
    'minecraft:stripped_birch_wood',
    'minecraft:stripped_jungle_wood',
    'minecraft:stripped_acacia_wood',
    'minecraft:stripped_dark_oak_wood',
    'minecraft:stripped_crimson_hyphae',
    'minecraft:stripped_warped_hyphae'
]

var leñosnos = [
    'minecraft:oak_wood',
    'minecraft:spruce_wood',
    'minecraft:birch_wood',
    'minecraft:jungle_wood',
    'minecraft:acacia_wood',
    'minecraft:dark_oak_wood',
    'minecraft:crimson_hyphae',
    'minecraft:warped_hyphae'
]

var partes_mesa = [
    Item.of('tconstruct:pickaxe_head', '{Material:"tconstruct:wood"}'),
    Item.of('tconstruct:pickaxe_head', '{Material:"tconstruct:stone"}'),
    Item.of('tconstruct:tool_binding', '{Material:"tconstruct:wood"}'),
    Item.of('tconstruct:tool_binding', '{Material:"tconstruct:stone"}'),
    Item.of('tconstruct:small_axe_head', '{Material:"tconstruct:wood"}'),
    Item.of('tconstruct:small_axe_head', '{Material:"tconstruct:stone"}'),
    Item.of('tconstruct:tool_handle', '{Material:"tconstruct:wood"}'),
    'minecraft:crafting_table'
]

var tools = [
    Item.of('tconstruct:pickaxe', '{tic_multipliers:{},tic_stats:{"tconstruct:attack_speed":1.2f,"tconstruct:mining_speed":2.0f,"tconstruct:attack_damage":0.0f,"tconstruct:harvest_level":0.0f,"tconstruct:durability":60.0f},tic_broken:0b,HideFlags:3,tic_modifiers:[{name:"tconstruct:cultivated",level:3s},{name:"tconstruct:piercing",level:1s}],tic_materials:["tconstruct:wood","tconstruct:wood","tconstruct:wood"],Damage:0,tic_persistent_data:{abilities:1,upgrades:3}}'),
    Item.of('tconstruct:pickaxe', '{tic_multipliers:{},tic_stats:{"tconstruct:attack_speed":1.2f,"tconstruct:mining_speed":4.0f,"tconstruct:attack_damage":1.0f,"tconstruct:harvest_level":1.0f,"tconstruct:durability":130.0f},tic_broken:0b,HideFlags:3,tic_modifiers:[{name:"tconstruct:cultivated",level:1s},{name:"tconstruct:piercing",level:1s},{name:"tconstruct:stonebound",level:2s}],tic_materials:["tconstruct:stone","tconstruct:wood","tconstruct:stone"],Damage:0,tic_persistent_data:{abilities:1,upgrades:3}}'),
    Item.of('tconstruct:hand_axe', '{tic_multipliers:{},tic_stats:{"tconstruct:attack_speed":0.9f,"tconstruct:mining_speed":2.0f,"tconstruct:attack_damage":6.0f,"tconstruct:harvest_level":0.0f,"tconstruct:durability":60.0f},tic_broken:0b,HideFlags:3,tic_modifiers:[{name:"tconstruct:cultivated",level:3s},{name:"tconstruct:axe_transform_hidden",level:1s}],tic_materials:["tconstruct:wood","tconstruct:wood","tconstruct:wood"],Damage:0,tic_persistent_data:{abilities:1,upgrades:3}}'),
    Item.of('tconstruct:hand_axe', '{tic_multipliers:{},tic_stats:{"tconstruct:attack_speed":0.9f,"tconstruct:mining_speed":4.0f,"tconstruct:attack_damage":7.0f,"tconstruct:harvest_level":1.0f,"tconstruct:durability":130.0f},tic_broken:0b,HideFlags:3,tic_modifiers:[{name:"tconstruct:cultivated",level:1s},{name:"tconstruct:stonebound",level:2s},{name:"tconstruct:axe_transform_hidden",level:1s}],tic_materials:["tconstruct:stone","tconstruct:wood","tconstruct:stone"],Damage:0,tic_persistent_data:{abilities:1,upgrades:3}}')
]

var materiales = [
    'emendatusenigmatica:iron_plate', //0
    'minecraft:bricks', //1
    'minecraft:furnace', //2
    'minecraft:smooth_stone_slab', //3
    'minecraft:iron_bars', //4
    'compressed:cobblestone_i', //5
    'compressed:charcoal_block_i', //6
    'emendatusenigmatica:iron_rod', //7
    'compressed:stone_i', //8
    'emendatusenigmatica:iron_gear', //9
    'minecraft:iron_nugget', //10
    'minecraft:iron_ingot', //11
    'minecraft:string', //12
    'minecraft:stick', //13
    'emendatusenigmatica:enigmatic_hammer', //14
    'compressed:coal_block_i', //15
    'minecraft:smoker' //16
]

var cofres = [
    'quark:oak_chest',
    'quark:spruce_chest',
    'quark:birch_chest',
    'quark:jungle_chest',
    'quark:acacia_chest',
    'quark:dark_oak_chest',
    'quark:crimson_chest',
    'quark:warped_chest'
]

var slabs = [
    'minecraft:oak_slab',
    'minecraft:spruce_slab',
    'minecraft:birch_slab',
    'minecraft:jungle_slab',
    'minecraft:acacia_slab',
    'minecraft:dark_oak_slab',
    'minecraft:crimson_slab',
    'minecraft:warped_slab'
]

var exnihi = [
    'exnihilosequentia:piece_copper',
    'exnihilosequentia:piece_lead',
    'exnihilosequentia:piece_nickel',
    'exnihilosequentia:piece_silver',
    'exnihilosequentia:piece_aluminum',
    'exnihilosequentia:piece_uranium',
    'exnihilosequentia:piece_iron',
    'exnihilosequentia:piece_gold'
]

onEvent('item.tags', event => {

    for (var i = 0; i <= 7; i++) {

        event.add('clasificacion:crafting_base', crafting_base[i])
        event.add('clasificacion:lenos', leñosnos[i])
        event.add('clasificacion:hammer', materiales[14])

    }



    // Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
    // event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})

onEvent('recipes', event => {
    //Eliminar crafteos
    event.remove({ output: 'minecraft:crafting_table' })
    event.remove({ output: 'minecraft:stick' })
    event.remove({ output: 'minecraft:iron_ingot' })
    event.remove({ output: 'minecraft:blast_furnace' })
    event.remove({ output: 'minecraft:furnace' })
    event.remove({ output: 'minecraft:stonecutter' })
    event.remove({ output: 'minecraft:chest' })
    event.remove({ output: 'minecraft:smoker' })
    event.remove({ output: '%tools' })
    event.remove({ output: '%emendatusenigmatica' })
    event.remove({ output: '#minecraft:planks' })
    event.remove({ output: '#clasificacion:lenos' })
    event.remove({ output: '#quark:boatable_chests' })
    event.remove({ type: 'minecraft:smelting' })
    event.remove({ type: 'minecraft:blasting' })

    for (var i of exnihi) {

        event.remove({ output: exnihi[i] })

    }


    //Añadir crafteos
    event.shaped('minecraft:stick', [
        ' S',
        ' S'
    ], {
        S: '#minecraft:planks'
    })

    event.shaped(materiales[11], [
        'SS ',
        'SSS',
        ' SS'
    ], {
        S: materiales[10]
    })

    event.shaped(materiales[16], [
        'A A',
        'ASA',
        'BBB'
    ], {
        S: materiales[15],
        A: materiales[5],
        B: '#clasificacion:crafting_base'
    })

    event.shaped('minecraft:blast_furnace', [
        'SSS',
        'ABA',
        'CDC'
    ], {
        S: materiales[0],
        A: materiales[1],
        B: materiales[2],
        C: materiales[3],
        D: materiales[4]
    })

    event.shaped('minecraft:furnace', [
        'SSS',
        'SAS',
        'SSS'
    ], {
        S: materiales[5],
        A: materiales[6]
    })

    event.shaped(materiales[14], [
        ' AC',
        ' BA',
        'S  '
    ], {
        S: materiales[10],
        A: materiales[11],
        B: materiales[13],
        C: materiales[12]
    })


    event.shaped('minecraft:stonecutter', [
        'SAS',
        'BCB',
        'DBD'
    ], {
        S: materiales[0],
        A: materiales[9],
        B: materiales[8],
        C: materiales[7],
        D: '#clasificacion:crafting_base'
    })



    event.shaped(partes_mesa[6], [
        ' S',
        'S '
    ], {
        S: 'minecraft:stick'
    })

    //Pico
    //Madera
    event.shaped(partes_mesa[0], [
        'S ',
        'SS'
    ], {
        S: '#minecraft:planks'
    })

    event.shaped(partes_mesa[2], [
        'SS',
        'SS'
    ], {
        S: '#minecraft:planks'
    })

    //Piedra
    event.shaped(partes_mesa[1], [
        'S ',
        'SS'
    ], {
        S: '#forge:cobblestone'
    })

    event.shaped(partes_mesa[3], [
        'SS',
        'SS'
    ], {
        S: '#forge:cobblestone'
    })

    //Hacha
    //Madera

    event.shaped(partes_mesa[4], [
        'SS',
        'S '
    ], {
        S: '#minecraft:planks'
    })

    //Piedra

    event.shaped(partes_mesa[5], [
        'SS',
        'S '
    ], {
        S: '#forge:cobblestone'
    })

    //Heramientas
    //Pico

    event.shaped(tools[0], [
        'AS',
        'B '
    ], {
        S: partes_mesa[0],
        A: partes_mesa[2],
        B: partes_mesa[6]
    })

    event.shaped(tools[1], [
        'AS',
        'B '
    ], {
        S: partes_mesa[1],
        A: partes_mesa[3],
        B: partes_mesa[6]
    })

    //Hacha

    event.shaped(tools[2], [
        'AS',
        'B '
    ], {
        S: partes_mesa[4],
        A: partes_mesa[2],
        B: partes_mesa[6]
    })

    event.shaped(tools[3], [
        'AS',
        'B '
    ], {
        S: partes_mesa[5],
        A: partes_mesa[3],
        B: partes_mesa[6]
    })


    //Mesa de Crafteo

    event.shaped(partes_mesa[7], [
        'BA',
        'SS'
    ], {
        S: '#clasificacion:crafting_base',
        A: tools[1],
        B: tools[3]
    })

    for (var i = 0; i <= 7; i++) {

        event.shapeless("2x " + planks[i], [logs[i]])

        event.shaped(crafting_base[i], [
            'SS',
            'AA'
        ], {
            S: planks[i],
            A: leños[i]
        })

        event.shaped(leñosnos[i], [
            'SS',
            'SS'
        ], {
            S: logs[i]
        })

        event.shaped(cofres[i], [
            'ABA',
            'CDC',
            'SSS'
        ], {
            S: crafting_base[i],
            A: leños[i],
            B: slabs[i],
            C: 'emendatusenigmatica:iron_rod',
            D: 'emendatusenigmatica:iron_plate'
        })

    }

})