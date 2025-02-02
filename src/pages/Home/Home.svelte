<script lang="ts">
	import { flip } from 'svelte/animate';
	import Item from './components/Item.svelte';

	let items = $state([
		{
			id: 0,
			title: 'Сходить в туалет',
			description: 'Сделать это срочно'
		},
		{
			id: 1,
			title: 'Разгадать капчу',
			description: 'Сделать это срочно'
		},
		{
			id: 2,
			title: 'Найти нефть',
			description: 'Сделать это срочно'
		}
	]);

	const onDeleteAction = (id: number) => {
		items = items.filter((i) => i.id !== id);
	};
</script>

<div class="items">
	{#each items as item (item)}
		<div animate:flip>
			<Item {...item} {onDeleteAction} />
		</div>
	{/each}
</div>
