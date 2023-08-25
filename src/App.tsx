import { useState } from 'react';
import TrackList from './components/TrackList';
import { PlayerControls } from './components/PlayerControls';
import { MusicContext, MusicContextType } from './context/MusicContex';

const initState = {
    audioPlayer: new Audio(),
    tracks: [
        {
            name: 'Track 1',
            file: '',
        },
        {
            name: 'Track 2',
            file: '',
        },
    ],
    currentTrackIndex: 0,
    isPlaying: false,
};

const App = () => {
    const [state, setState] = useState(initState) as MusicContextType;

    return (
        <MusicContext.Provider value={[state, setState]}>
            <div className='flex flex-col justify-center items-center h-screen'>
                <TrackList />
                <PlayerControls />
            </div>
        </MusicContext.Provider>
    );
};

export default App;
