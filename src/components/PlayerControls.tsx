import { useMusicPlayer } from '@/hooks/useMusicPlayer';
import {
    faPause,
    faPlay,
    faStepBackward,
    faStepForward,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const PlayerControls = () => {
    const {
        currentTrackName,
        playNextTrack,
        playPreviousTrack,
        togglePlay,
        isPlaying,
    } = useMusicPlayer();

    return (
        <div className='flex flex-col gap-1 items-center pt-6'>
            <h3 className='scroll-m-20 text-2xl font-semibold'>
                {currentTrackName}
            </h3>

            <div className='flex items-center gap-4'>
                <button onClick={playPreviousTrack}>
                    <FontAwesomeIcon icon={faStepBackward} size='2x' />
                </button>

                <button onClick={togglePlay}>
                    {isPlaying ? (
                        <FontAwesomeIcon icon={faPause} size='xl' />
                    ) : (
                        <FontAwesomeIcon icon={faPlay} size='xl' />
                    )}
                </button>

                <button onClick={playNextTrack}>
                    <FontAwesomeIcon icon={faStepForward} size='2x' />
                </button>
            </div>
        </div>
    );
};
