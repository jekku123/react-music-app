import { useState } from 'react';
import TrackList from './components/TrackList';
import { PlayerControls } from './components/PlayerControls';
import { MusicContext } from './context/MusicContex';

function App() {
    const [state, setState] = useState({
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
            {
                name: 'Track 3',
                file: '',
            },
            {
                name: 'Track 4',
                file: '',
            },
        ],
        currentTrackIndex: 0,
        isPlaying: false,
    }) as MusicContextType;

    return (
        <MusicContext.Provider value={[state, setState] as MusicContextType}>
            <div className='flex flex-col justify-center items-center h-screen'>
                <TrackList />
                <PlayerControls />
            </div>
        </MusicContext.Provider>
    );
}

export default App;
