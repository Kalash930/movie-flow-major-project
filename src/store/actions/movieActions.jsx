
export {removeMovie} from '../reducers/movieSlice'
import axios from '../../utils/axios';
import {loadMovie} from '../reducers/movieSlice'

export const asyncLoadMovie=(id)=>async(dispatch,getState)=>{
    try {
           const detail = await axios.get(`/movie/${id}`)
           const externalId = await axios.get(`/movie/${id}/external_ids`)
           const recommendations = await axios.get(`/movie/${id}/recommendations`)
           const similar = await axios.get(`/movie/${id}/similar`)
           const translations = await axios.get(`/movie/${id}/translations`)
           const videos = await axios.get(`/movie/${id}/videos`)
           const watchProviders = await axios.get(`/movie/${id}/watch/providers`)
             let theUltimateDetails = {
                     detail: detail.data,
                     externalId: externalId.data,
                     recommendations: recommendations.data.results,
                     similar: similar.data.results,
                     translations: translations.data.translations.map(t => t.name),
                     videos: videos.data.results.find(m => m.type === 'Trailer'),
                     watchProviders: watchProviders.data.results.IN,
    }
            dispatch(loadMovie(theUltimateDetails));
           console.log(theUltimateDetails);
        
    } catch (error) {
        console.log(error);
        
    }
}