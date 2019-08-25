import { SET_SITE } from '../actions/types';

export default function(state = 'https://remoteok.io/', action) {
    switch (action.type) {
        case SET_SITE:
            return action.payload || false;
        default:
            return state;
    }
}
