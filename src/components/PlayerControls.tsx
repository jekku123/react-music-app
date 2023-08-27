import { useMusicPlayer } from '@/hooks/useMusicPlayer';
import {
    faPause,
    faPlay,
    faStepBackward,
    faStepForward,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const PlayerControls = () => {
    const music = useMusicPlayer();

    return (
        <div className='flex flex-col gap-1 items-center pt-6'>
            <h3 className='scroll-m-20 text-2xl font-semibold tracking-tight'>
                {music.currentTrackName}
            </h3>

            <div className='flex items-center gap-4'>
                <button>
                    <FontAwesomeIcon
                        icon={faStepBackward}
                        size='2x'
                        onClick={music.playPreviousTrack}
                    />
                </button>

                <button onClick={music.togglePlay}>
                    {music?.isPlaying ? (
                        <FontAwesomeIcon icon={faPause} size='xl' />
                    ) : (
                        <FontAwesomeIcon icon={faPlay} size='xl' />
                    )}
                </button>

                <button>
                    <FontAwesomeIcon
                        icon={faStepForward}
                        size='2x'
                        onClick={music.playNextTrack}
                    />
                </button>
            </div>
        </div>
    );
};
