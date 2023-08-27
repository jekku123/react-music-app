import { faMusic } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { PlayerControls, TrackList } from './components';
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
                <h2 className='scroll-m-20 border-b mb-6 pb-1 text-4xl font-semibold'>
                    Music Player <FontAwesomeIcon icon={faMusic} />
                </h2>
                <TrackList />
                <PlayerControls />
            </div>
        </MusicContext.Provider>
    );
};

export default App;
