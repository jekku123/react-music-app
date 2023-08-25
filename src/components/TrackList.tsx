import { useMusicPlayer } from '@/hooks/useMusicPlayer';
import { faPause, faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TrackList = () => {
    const music = useMusicPlayer();

    return (
        <div>
            {music.trackList.map((track, i) => (
                <div key={`${track}_${i}`}>
                    <button onClick={() => music.playTrack(i)}>
                        {music.isPlaying && music.currentTrackIndex === i ? (
                            <FontAwesomeIcon icon={faPause} />
                        ) : (
                            <FontAwesomeIcon icon={faPlay} />
                        )}
                    </button>
                    <div>Track Playing: {track.name}</div>
                </div>
            ))}
        </div>
    );
};

export default TrackList;
