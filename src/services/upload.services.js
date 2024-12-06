import axios from "axios"

class UploadServices {

    constructor() {
        this.axiosApp = axios.create({
            baseURL: `${import.meta.env.VITE_APP_API_URL}/upload`
        })
    }

    uploadImage(imageForm) {
        return (
            this.axiosApp.post('/image', imageForm)
        )
    }

}

export default new UploadServices()