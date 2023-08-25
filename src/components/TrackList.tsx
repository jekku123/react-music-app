import { useMusicPlayer } from '@/hooks/useMusicPlayer';
import { faPause, faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TrackList = () => {
    const music = useMusicPlayer();

    return (
        <div className='flex gap-10 p-10'>
            {music.trackList.map((track, i) => (
                <div key={`${track}_${i}`}>
                    <h2>Song: {track.name}</h2>
                    <div className='flex justify-center'>
                        <button onClick={() => music.playTrack(i)}>
                            {music.isPlaying &&
                            music.currentTrackIndex === i ? (
                                <FontAwesomeIcon icon={faPause} />
                            ) : (
                                <FontAwesomeIcon icon={faPlay} />
                            )}
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TrackList;
