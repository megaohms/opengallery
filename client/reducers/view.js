import { initialState } from '../../test/initialState'
import { TOGGLE_GALLERY } from '../actions/gallery'
import { SHOW_WORDMAP, HIDE_WORDMAP } from '../actions/wordmap.actions'
import { TOGGLE_SIGNOUT } from '../actions/nav.actions'

let startingState = initialState.view;

var isNode = new Function("try {return this===global;}catch(e){return false;}");

if (isNode() !== true) {
  let prevState = localStorage['my-save-key'] ? JSON.parse(localStorage['my-save-key']) : undefined;
  startingState = prevState ? prevState.view : initialState.view;
}

const view = (state = startingState, action) => {
  switch (action.type) {
    case TOGGLE_GALLERY:
      return Object.assign({}, state, {
        displayGallery: !state.displayGallery
      })
    case SHOW_WORDMAP:
      return Object.assign({}, state, {
        displayWordmap: true
      })
    case HIDE_WORDMAP:
      return Object.assign({}, state, {
        displayWordmap: false
      })
    case 'TOGGLE_PHOTOUPLOAD_MODAL':
      return Object.assign({}, state, {
        isUploadModalOpen: !state.isUploadModalOpen
      })
    case 'TOGGLE_GRID_MESSAGE_FEED':
      return Object.assign({}, state, {
        displayGridAndNotMessageFeed: !state.displayGridAndNotMessageFeed
      })
    case 'TOGGLE_MESSAGE_MODAL':
      console.log('called');
      return Object.assign({}, state, {
        displayMessageModal: !state.displayMessageModal
      })
    case 'TOGGLE_CONVERSATIONS':
      return Object.assign({}, state, {
        hideConversationsInMessageModal: !state.hideConversationsInMessageModal
      })
    case TOGGLE_SIGNOUT:
      return Object.assign({}, state, {
        showSignOut: !state.showSignOut
      })  
    default:
      return state
  }
}

export default view
