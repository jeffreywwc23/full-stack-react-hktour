import React from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function FeatureTourItem(props) {
    return (
        <>
            <li className='feature-tours-single-item'>
                <Link className='feature-tours-single-item-link' to={props.path}>
                    <figure className='feature-tours-single-item-pic-wrap' data-category={props.label}>
                        <LazyLoadImage
                            effect="blur"
                            className='feature-tours-single-item-image'
                            alt='FeatureTourItemImage'
                            src={props.src}
                        />
                    </figure>
                    <div className='feature-tours-single-item-info'>
                        <h5 className='feature-tours-single-item-text'>{props.text}</h5>
                    </div>
                </Link>
            </li>
        </>
    );
}

export default React.memo(FeatureTourItem);
