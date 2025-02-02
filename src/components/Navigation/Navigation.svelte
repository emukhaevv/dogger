<script lang="ts">
	import settings from './images/settings.svg';
	import basket from './images/basket.svg';
	import list from './images/list.svg';
	import { page } from '$app/state';
	import { CART_PAGE, MAIN_PAGE, SETTINGS_PAGE } from '../../constants/routes';
	import { Routes } from './types';
	import Tab from './components/Tab.svelte';

	const activeUrl = $derived(() => {
		switch (page.url.pathname) {
			case MAIN_PAGE:
				return Routes.MAIN_PAGE;
			case CART_PAGE:
				return Routes.CART_PAGE;
			case SETTINGS_PAGE:
				return Routes.SETTINGS_PAGE;
		}

		return Routes.MAIN_PAGE;
	});
</script>

<div class="content">
	<div class="wrapper wrapper-circle">
		<Tab icon={settings} url={SETTINGS_PAGE} isActive={activeUrl() === Routes.SETTINGS_PAGE} />
	</div>
	<div class="wrapper">
		<Tab icon={list} url={MAIN_PAGE} isActive={activeUrl() === Routes.MAIN_PAGE} />
		<Tab icon={basket} url={CART_PAGE} isActive={activeUrl() === Routes.CART_PAGE} />
	</div>
</div>

<style>
	.content {
		position: fixed;
		bottom: 20px;
		right: 30px;
		left: 30px;
		display: flex;
		justify-content: space-between;
		gap: 8px;
	}

	.wrapper {
		display: inline-flex;
		gap: 8px;
		padding: 8px;
		background: #ccd5ae;
		border-radius: 40px;
	}

	.wrapper-circle {
		border-radius: 50%;
	}
</style>
