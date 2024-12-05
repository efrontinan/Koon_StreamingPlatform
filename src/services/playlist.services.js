import axios from 'axios'

class PlaylistServices {
    constructor() {

        this.axiosApp = axios.create({
            baseURL: `${import.meta.env.VITE_APP_API_URL}/api`
        })

    }

    fetchPlaylists() {
        return (
            this.axiosApp.get('/playlists')
        )
    }

    fetchOnePlaylist(id) {
        return (
            this.axiosApp.get(`/playlists/${id}`)
        )
    }

    fetchLastPlaylists() {
        return (
            this.axiosApp.get('/playlists/last')
        )
    }
}

export default new PlaylistServices()