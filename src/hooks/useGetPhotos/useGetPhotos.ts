import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useClient from '../useClient';
import { useBottomScrollListener } from 'react-bottom-scroll-listener';
import { getPhotos } from '../../api';

export default () => {
	const initialState = {
    photos: [],
    isLoading: true,
    error: false,
  }

  type stateType = {
  	photos: any[],
  	isLoading: boolean,
  	error: boolean,
  }


  const [state, setState] = useState<stateType>(initialState);

  const [page, setPage] = useState(1);

  useBottomScrollListener(() => {
    if (!state.isLoading) return setPage(page + 1);
  }, window.innerHeight - 200, 200);

  useEffect(() => {
    const fetchArticles = async () => {
      setState(state => ({ ...state, isLoading: true }));
      try {
        const { data } = await axios(getPhotos({ 
        	per_page: 20,
        	page 
        }));
        console.log(data.photos.photo);

        setState(state => ({ 
        	...state, 
        	photos: [ ...state.photos, ...data.photos.photo ], 
        	isLoading: false 
        }));
      } catch (error) {
        setState(state => ({ ...state, error, isLoading: false, }));
      }
    }
    fetchArticles();
  }, [page]);

  return state;
}


 