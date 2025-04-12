const SongCard = ({ song, onClick }) => {
    return (
        <div
            className="bg-white p-4 rounded-md shadow-lg cursor-pointer"
            onClick={() => onClick(song)}
        >
        <img
            src={song.album.images[0].url}
            alt={song.name}
            className ="w-full h-48 object-cover rounded-md"
        />
        <h3 className="text-x1 mt-2">{song.name}</h3>
        <p className="text-sm text-gray-500">{song.artists[0].name}</p>    
        </div>
    );
};

export default SongCard;