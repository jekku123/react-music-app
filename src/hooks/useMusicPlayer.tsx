import { MusicContext } from '@/context/MusicContex';
import { useContext } from 'react';

type MusicPlayerHookReturnType = {
    togglePlay: () => void;
    playTrack: (index: number) => void;
    currentTrackIndex: number;
    currentTrackName: string | false;
    trackList: { name: string; file: string }[];
    isPlaying: boolean;
    playPreviousTrack: () => void;
    playNextTrack: () => void;
};

export const useMusicPlayer = (): MusicPlayerHookReturnType => {
    const contextValue = useContext(MusicContext);

    if (!contextValue) {
        throw new Error(
            'useMusicPlayer must be used within a MusicContextProvider'
        );
    }
    const [state, setState] = contextValue;

    const togglePlay = () => {
        if (state.isPlaying) {
            setState({ ...state, isPlaying: false });
        } else {
            setState({ ...state, isPlaying: true });
            state.audioPlayer.play();
        }
    };

    const playTrack = (index: number) => {
        if (index === state.currentTrackIndex) {
            togglePlay();
        } else {
            state.audioPlayer;
            state.audioPlayer = new Audio(state.tracks[index].file);
            state.audioPlayer.play();
            setState({
                ...state,
                currentTrackIndex: index,
                isPlaying: true,
            });
        }
    };

    const playPreviousTrack = () => {
        let newIndex = null;
        state.currentTrackIndex === 0
            ? (newIndex = state.tracks.length - 1)
            : (newIndex = state.currentTrackIndex - 1);

        playTrack(newIndex);
    };

    const playNextTrack = () => {
        let newIndex = null;
        state.currentTrackIndex === state.tracks.length - 1
            ? (newIndex = 0)
            : (newIndex = state.currentTrackIndex + 1);
        playTrack(newIndex);
    };

    return {
        togglePlay,
        playTrack,
        currentTrackIndex: state.currentTrackIndex,
        currentTrackName:
            state.currentTrackIndex !== null &&
            state.tracks[state.currentTrackIndex].name,
        trackList: state.tracks,
        isPlaying: state.isPlaying,
        playPreviousTrack,
        playNextTrack,
    };
};
