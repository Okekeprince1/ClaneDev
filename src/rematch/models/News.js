import { ClaneNewsApi } from "../../constants/api";

const claneNewsApi = new ClaneNewsApi();

export const News = {
    state: {
        loading: false,
        news: [],
        newsPage: 1,
        newsLimit: 10,
        error: false
    },
    reducers: {
        // handle state changes with pure functions
        fetchingNews(state) {
            return {
                loading: true,
                news: [],
                newsPage: 1,
                newsLimit: 10,
                error: false
            }
        },
        fetchingNewsSuccess(state, payload){
            
            return {
                loading : false,
                news : state.news.push(payload),
                ...state
            }

        },
        fetchingNewsError(state){
            return {
                ...state,
                loading: false,
                error: true
            }
        },
        incrementPage(state, payload){
            return {
                newsPage : state.newsPage + payload,
                ...state
            }
        },
        decrementPage(state, payload){
            let newPage = state.newsPage - payload;
            if (newPage < 1) {
                newPage = 1;
            }

            return {
                ...state,
                newsPage : newPage
            }
        }
    },
    effects:  dispatch => ({
        async fetchNews(rootState) {

            dispatch.News.fetchingNews()
            // const limit = rootState.News.state.newsLimit.value
            // const page =  rootState.News.state.newsPage.value
            try {                
                const res = await claneNewsApi.getPageNews(1, 10);
                
                console.log(res)

                dispatch.News.fetchingNewsSuccess(res.data)
            } catch (error) {
                console.log(error)
                dispatch.News.fetchingNewsError()
            }
            
        },
    }),
}




export const count = {
    state: 0, // initial state
    reducers: {
        // handle state changes with pure functions
        increment(state, payload) {
            return state + payload
        },
    },
    effects: dispatch => ({
        // handle state changes with impure functions.
        // use async/await for async actions
        async incrementAsync(payload, rootState) {
            await new Promise(resolve => setTimeout(resolve, 1000))
            dispatch.count.increment(payload)
        },
    }),
}