/* eslint-disable react-refresh/only-export-components */
import { Dispatch, SetStateAction, createContext, useContext } from 'react';

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

export const useMusicContext = () => {
    return useContext(MusicContext);
};
