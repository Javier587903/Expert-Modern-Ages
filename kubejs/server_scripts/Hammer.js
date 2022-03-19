var materialeshammer = [
    '#clasificacion:hammer',
    'minecraft:iron_ingot',
    'emendatusenigmatica:iron_rod',
    'emendatusenigmatica:iron_plate',
    'emendatusenigmatica:iron_gear',
    'minecraft:stick'

]

onEvent('recipes', event => {

    event.shaped(materialeshammer[3], [
        'SA',
        'A '
      ], {
        S: materialeshammer[0],
        A: materialeshammer[1]
      })

    event.shaped(materialeshammer[2], [
        'SA',
        'AC'
      ], {
        S: materialeshammer[0],
        A: materialeshammer[3],
        C: materialeshammer[5]
      })

    event.shaped(materialeshammer[4], [
        ' A ',
        'ASA',
        ' A '
      ], {
        S: materialeshammer[0],
        A: materialeshammer[3]
      })

})
