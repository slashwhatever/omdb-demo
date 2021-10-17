import ajaxService from '../services/ajaxService.js';

/**
 * Results
 * Simple model to set up the initial state, reducers and side effects for the app
 */
const initialState = {
  items: [],
  error: undefined,
  isLoading: false
};

export const results = {
  state: initialState, 
  reducers: {
    setLoading(state, { isLoading }) {
      return {
        ...state, 
        isLoading,
      }
    },
    clearResults(state) {
      return initialState;
    },
    afterFetch(state, { items }) {
      return {
        ...state,
        error: initialState.error,     // make sure after a fetch, we clean up the error state
        items
      }
    },
    apiError(state, { error }) {
      return {
        ...state,
        items: initialState.items,
        error,
      };
    },
  },
  effects: (dispatch) => ({
    async fetchResults({ searchText }, rootState) {

      dispatch.results.setLoading({ isLoading: true })

      const response = await ajaxService.searchByTitle(searchText);

      if ( response.error ) dispatch.results.apiError({ error: response.error })
      else dispatch.results.afterFetch({ items: response });
 
      dispatch.results.setLoading({ isLoading: false })

    },
  }),
};