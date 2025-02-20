<script lang="ts">
	import { flip } from 'svelte/animate';
	import Item from './components/Item.svelte';
	import { makeStore } from './store';

	const store = makeStore();
	const { todoItems, deleteItem } = store;
</script>

{#each $todoItems as item (item)}
	<div animate:flip>
		<Item {...item} onDelete={deleteItem} />
	</div>
{/each}
