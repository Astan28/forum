import axios from "axios";
import { FETCH_SECTIONS, FETCH_SECTION, NEW_SECTION, UPDATE_SECTION, DELETE_SECTION } from './types';
import { baseUrl } from "../../requestUrl";

export const fetchSections = () => dispatch => {
    console.log('fetching');
        fetch(`${baseUrl}/boards`)
        .then(res => res.json())
        .then(sections => dispatch({
            type:FETCH_SECTIONS,
            payload: sections
        })
        );
    };
    export const fetchSection = (id) => dispatch => {
      console.log('fetching single section');
          fetch(`${baseUrl}/boards/${id}`)
          .then(res => res.json())
          .then(sections => dispatch({
              type:FETCH_SECTION,
              payload: sections
          })
          );
      };


    export const createSection = (sectionData) => (dispatch) => {
        axios
          .post("http://localhost:8080/boards", sectionData)
        //   .then((response) => response.json())
          .then(section => dispatch({
            type: NEW_SECTION,
            payload: section
          }))
          .catch((error) => {
            console.log(error);
          });
      };

      export const updateSection = (sectionData, id) => (dispatch) => {
        axios
          .put(`http://localhost:8080/boards/${id}`, sectionData)
        //   .then((response) => response.json())
          .then(section => dispatch({
            type: UPDATE_SECTION,
            payload: section
          }))
          .catch((error) => {
            console.log(error);
          });
          
      };


      export const deleteSection = (id) => (dispatch) => {
        axios
          .delete(`http://localhost:8080/boards/${id}`)
        //   .then((response) => response.json())
          .then(section => dispatch({
            type: DELETE_SECTION,
            payload: section
          }))
          .catch((error) => {
            console.log(error);
          });
          
      };

    