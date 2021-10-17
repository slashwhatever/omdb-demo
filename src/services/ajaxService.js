import axios from 'axios'

const API_KEY = 'c71a5b5'

/**
 * 
 * @param {string} searchText title of movie to search for
 * @returns {object} reponse object
 */
const searchByTitle = (searchText) => {
  return axios.get(`http://www.omdbapi.com/?s=${searchText}&apikey=${API_KEY}`)
    .then(response => response)
    .catch(error => ({error: error.message}))
}

// normally this would be a more robust set of instructions detailing how to deal with various 
// response codes and statuses as well as a way to shape response results 
axios.interceptors.response.use(({ data }) => {
 if ( data.Error ) throw new Error(data.Error)
 else return data.Search;
})

export default {
  searchByTitle
}
