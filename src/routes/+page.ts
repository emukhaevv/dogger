import { redirect } from '@sveltejs/kit';
import { MAIN_PAGE } from '../constants/routes';

export function load() {
	redirect(302, MAIN_PAGE);
}
