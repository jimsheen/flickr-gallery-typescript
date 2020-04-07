import React, { useState, useEffect } from 'react';
import './Gallery.css';
import useGetPhotos from '../../hooks/useGetPhotos';
import LoadingSpinner from '../LoadingSpinner';

import GalleryItem from './GalleryItem';

export default () => {

  const { photos, isLoading } = useGetPhotos();

  return (
		<div className="gallery-container">
			<div className="gallery">
			{photos.map((photo: any, index: number) => (
				<GalleryItem photo={photo} />
			))}
			</div>
			{isLoading &&
				<LoadingSpinner/>
			}
		</div>
  )
}
