const URL= "https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=spain&api_key=711fff339dacffea30b728d731e72bcc&format=json"

function getArtists(){

	return fetch(URL)
		.then( response => response.json())
		.then( data => data.topartists.artist)
		.then( artists => artists.map(artist => {
			return {
				name : artist.name,
				image : artist.image[3]['#text'],
				likes: 200,
				comments: 140,
			}
		}))
}



export {getArtists}