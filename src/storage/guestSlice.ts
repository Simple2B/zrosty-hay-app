import { StateCreator } from 'zustand';

export interface GuestSlice {
	isGuest: boolean;
	setGuest: (isGuest: boolean) => void;
}

export const createGuestSlice: StateCreator<GuestSlice> = (set) => ({
	isGuest: false,
	setGuest: (isGuest: boolean) => {
		set({ isGuest: isGuest });
	},
});
