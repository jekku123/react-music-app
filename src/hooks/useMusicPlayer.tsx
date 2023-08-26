import { useMusicContext } from '@/context/MusicContex';

export const useMusicPlayer = () => {
    const contextValue = useMusicContext();

    if (!contextValue) {
        throw new Error(
            'useMusicPlayer must be used within a MusicContextProvider'
        );
    }

    const [state, setState] = contextValue;
    const { isPlaying, currentTrackIndex, tracks } = state;
    let { audioPlayer } = state;

    const togglePlay = () => {
        if (isPlaying) {
            setState({ ...state, isPlaying: false });
        } else {
            setState({ ...state, isPlaying: true });
            audioPlayer.play();
        }
    };

    const playTrack = (index: number) => {
        if (index === currentTrackIndex) {
            togglePlay();
        } else {
            audioPlayer = new Audio(tracks[index].file);
            audioPlayer.play();

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
            ? (newIndex = tracks.length - 1)
            : (newIndex = currentTrackIndex - 1);

        playTrack(newIndex);
    };

    const playNextTrack = () => {
        let newIndex = null;

        state.currentTrackIndex === tracks.length - 1
            ? (newIndex = 0)
            : (newIndex = currentTrackIndex + 1);

        playTrack(newIndex);
    };

    return {
        togglePlay,
        playTrack,
        currentTrackIndex: currentTrackIndex,
        currentTrackName:
            currentTrackIndex !== null && tracks[currentTrackIndex].name,
        trackList: tracks,
        isPlaying: isPlaying,
        playPreviousTrack,
        playNextTrack,
    };
};
