import SpotifyWebApi from 'spotifiy-web-api-js';

// Create an instance of the Spotify Web API clinet
const spotifyApi = new SpotifyWebApi();

// Set the authorization token
spotifyApi.setAccessToken('YOUR_SPOTIFY_ACESS_TOKEN');

//Export the API client so it can be used elsewjere in the app
export default spotifyApi;