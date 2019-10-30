import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import 'react-alice-carousel/lib/alice-carousel.css';
import AliceCarousel from 'react-alice-carousel';
import Resource from 'components/common/resource/CarouselResource';

const ResourceCarousel = props => {
  const { resources } = props;
  let carouselItems = [];
  if (resources) {
    carouselItems = resources.map(resource => {
      return (
        <div>
          <Resource
            contentType={resource.contentType}
            id={resource.id}
            artifactId={resource.artifact}
          />
          <p className="legend">{resource.name}</p>
          <p className="legend">{resource.description}</p>
          <Link
            target="_blank"
            to={`/artifact/${resource.artifact}/resource/${resource.id}`}
          >
            Open Image In New Tab
          </Link>
        </div>
      );
    });
  }

  return carouselItems && <AliceCarousel items={carouselItems} />;
};

ResourceCarousel.propTypes = {
  resources: PropTypes.array.isRequired,
};

export default ResourceCarousel;
