import { useMusicPlayer } from '@/hooks/useMusicPlayer';
import { faPause, faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const TrackList = () => {
    const music = useMusicPlayer();
    const { isPlaying, currentTrackIndex, playTrack } = music;

    return (
        <div className='space-y-2'>
            {music.trackList.map((track, i) => (
                <div
                    key={`${track}_${i}`}
                    className='flex w-28 justify-between'
                >
                    <h3 className='scroll-m-20 text-2xl font-semibold'>
                        {track.name}
                    </h3>

                    <button onClick={() => playTrack(i)}>
                        {isPlaying && currentTrackIndex === i ? (
                            <FontAwesomeIcon icon={faPause} size='xl' />
                        ) : (
                            <FontAwesomeIcon icon={faPlay} size='xl' />
                        )}
                    </button>
                </div>
            ))}
        </div>
    );
};
