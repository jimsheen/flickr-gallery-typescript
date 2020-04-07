import React, { useState, useEffect } from 'react';
import { getInfo } from '../../../api';
import useClient from '../../../hooks/useClient';

import LoadingSpinner from '../../LoadingSpinner';

const truncate = (input: string, length: number = 100) => input.length > length ? `${input.substring(0, length)}...` : input;

export default ({photo} : {photo: any}) => {

	const {
		farm,
		server,
		id,
		secret,
		title,
	} = photo;

	const [imageLoading, setImageLoading] = useState(false);
	const { response, isLoading }: { response: any, isLoading: boolean} = useClient(getInfo(id));
	const src = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`;

	useEffect(() => {
    // add onload listener when image src changes
    const newImage = new Image();
    newImage.src = src;
    setImageLoading(true);
    newImage.onload = () => setImageLoading(false);
  }, [src]);

	return (
		<div className="gallery__item" key={photo.id}>
		{imageLoading && isLoading &&
				<LoadingSpinner/>
			}
			{!imageLoading && !isLoading && response &&
				<React.Fragment>
					<img className="photo" src={src}/>
					<p>{title} by {response.photo.owner.username}</p>
					<small>
						{truncate(response.photo.description._content)}
					</small>
				</React.Fragment>
			}
		</div>
	)
}