import { get, writable } from 'svelte/store';
import { items } from './data';

export const makeStore = () => {
	const todoItems = writable(items);

	const deleteItem = (id: number) => {
		todoItems.set(get(todoItems).filter((i) => i.id !== id));
	};

	return {
		todoItems,
		deleteItem
	};
};
export type Store = ReturnType<typeof makeStore>;
