import { FETCH_SECTIONS, NEW_SECTION } from './types';

export const fetchSections = () => dispatch => {
    console.log('fetching');
        fetch('https://forum-application-1.herokuapp.com/boards')
        .then(res => res.json())
        .then(sections => dispatch({
            type:FETCH_SECTIONS,
            payload: sections
        })
        );
    };
