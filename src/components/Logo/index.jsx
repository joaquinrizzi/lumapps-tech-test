import React from 'react';
import pic from '../../assets/Marvel_logo_red.png';
import {ImageBlock, Theme, Alignment, AspectRatio, Size} from '@lumx/react';

const Logo = () => (
	<ImageBlock 
		image={pic}
		theme={Theme.dark}
		alt="Marvel"
		align={Alignment.center}
		thumbnailProps={{ aspectRatio: AspectRatio.original }}
		size={Size.xl}
	/>
);

export default Logo;
