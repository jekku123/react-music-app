import { Dispatch, SetStateAction, createContext } from 'react';

export interface IMusicContext {
    audioPlayer: HTMLAudioElement;
    currentTrackIndex: number;
    isPlaying: boolean;
    tracks: { name: string; file: string }[];
}

export type MusicContextType = [
    state: IMusicContext,
    setState: Dispatch<SetStateAction<IMusicContext>>
];

export const MusicContext = createContext<MusicContextType | null>(null);
