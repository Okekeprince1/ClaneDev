import axios from "axios"

axios.defaults.baseURL = "https://5e4bfc87a641ed0014b02740.mockapi.io/api/clane/"

class ClaneNewsApi {

    constructor () {
        
    }

    getAllNews = async () => {

        try {
            const res = await axios.get("news")
            return res
        } catch (error) {
            console.log('error', error)
        }

    }

    getPageNews = async (page, limit) => {
        try {
            const res = await axios.get(`news?page=${page}&limit=${limit}`)
            
            return res
        } catch (error) {
            console.log('error', error)
        }
    }

    getById = async (id) => {
        try {
            
            const { res } = await axios.get(`news/${id}`)

            return res

        } catch (error) {
            console.error('error', error)
        }
    }

    addNews = async (args) => {
        try {
            
            const { res } = await axios.post("news", {...args})

            return res
        } catch (error) {
            console.error('error', error)
        }
    }

    updateNews = async (id, args) => {
        try {
            
            const { res } = await axios.put(`news/${id}`, {...args})

            return res
        } catch (error) {
            console.error('error', error)
        }
    }


    deleteNews = async (id) => {
         try {
            
            const { res } = await axios.delete(`news/${id}`)

            return res
        } catch (error) {
            console.error('error', error)
        }
    }

    getNewImages = async (id) => {
        try {
            const { res } = await axios.get(`news/${id}/images`)

            return res
        } catch (error) {
            console.error('error', error)
        }
    }

    addNewsImages = async (id, image) => {
         try {
            const { res } = await axios.post(`news/${id}/images`, {...image})

            return res
        } catch (error) {
            console.error('error', error)
        }
    }


    getNewsComments = async (id) => {
        try {
            const { res } = await axios.get(`news/${id}/comments`)

            return res
        } catch (error) {
            console.error('error', error)
        }
    }


    addNewsComments = async (id, args) => {
        try {
            const res = await axios.post(`news/${id}/comments`, {...args})
        } catch (error) {
            console.error('error', error)
        }
    } 

    editNewsComment = async (id, commentId, args) => {
        try {
            const res = await axios.put(`news/${id}/comments/${commentId}`, {...args})
        } catch (error) {
            console.error('error', error)
        }
    } 

    deleteNewsComment = async (id, commentId) => {
        try {
            const res = await axios.delete(`news/${id}/comments/${commentId}`)
        } catch (error) {
            console.error('error', error)
        }
    } 
}


export {
    ClaneNewsApi
}