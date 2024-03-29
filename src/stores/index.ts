import type { User } from 'firebase/auth';
import { writable } from 'svelte/store';

export const isLoading = writable<boolean>(false);
export const user = writable<User>();
export const notifications = writable<CustomNotification[]>([]);
export const cardsByUser = writable<RegisterationData[]>([]);
export const analyticsPopupOpen = writable<string | null>(null);
