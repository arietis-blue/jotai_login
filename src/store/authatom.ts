import { atom } from 'jotai'

interface User {
    id: string;
    username: string;
}

export const userAtom = atom<User | null>(null);