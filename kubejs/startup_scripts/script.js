// priority: 0

console.info('Hello, World! (You will only see this line once in console, during startup)')

onEvent('item.registry', event => {
	// Register new items here
	event.create('oak_crafting_base', item => {
		item.displayName('Oak Crafting Base')
	  })
	event.create('spruce_crafting_base', item => {
		item.displayName('Spruce Crafting Base')
	})
	event.create('birch_crafting_base', item => {
		item.displayName('Birch Crafting Base')
	  })
	event.create('jungle_crafting_base', item => {
		item.displayName('Jungle Crafting Base')
	  })
	event.create('acacia_crafting_base', item => {
		item.displayName('Acacia Crafting Base')
	  })
	event.create('dark_oak_crafting_base', item => {
		item.displayName('Dark Oak Crafting Base')
	  })
	event.create('crimson_crafting_base', item => {
		item.displayName('Crimson Crafting Base')
	  })
	event.create('warped_crafting_base', item => {
		item.displayName('Warped Crafting Base')
	  })
})

onEvent('item.modification', event => {
	event.modify('minecraft:coal', item => {
	  item.burnTime = 800
	})
  })

onEvent('block.registry', event => {
	// Register new blocks here
	// event.create('example_block').material('wood').hardness(1.0).displayName('Example Block')
})