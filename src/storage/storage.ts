import { create } from 'zustand';
import { GuestSlice, createGuestSlice } from './guestSlice';
import { createJSONStorage, persist } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

type StoreState = GuestSlice;

export const useAppStore = create<StoreState>()(
	persist(
		(...a) => ({
			...createGuestSlice(...a),
		}),
		{
			name: 'is-guest',
			storage: createJSONStorage(() => AsyncStorage),
		},
	),
);
