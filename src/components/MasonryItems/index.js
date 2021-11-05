import React, { useState } from 'react';
import Masonry from 'react-masonry-css'
import PropsType from 'prop-types';
import { Row, Col, Typography } from 'antd';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './index.style.css'
import LightBox from './Lightbox';

/**
 * Gifs Mosaic Component. Render list of trending GIFs 
 */

const { Title } = Typography;

const MasonryItems = (props) => {
  const { data, notFound } = props;
  const [selectedItem, setSelectedItem] = useState(null);

  const onClick = (item) => {
    setSelectedItem({
      alt: item.title,
      src: item.images.original.url,
      title: item.title,
      username: item.username,
      rating: item.rating,
    })
  }
  if (notFound) {
    return (
      <Row justify="center">
        <Col span={5}>
          <Title level={3} style={{ color: 'white' }}>
            GIFs not found
          </Title>
          <LazyLoadImage 
            alt="not-found"
            src="https://media1.giphy.com/media/9J7tdYltWyXIY/giphy.gif?cid=790b76119cc557c93ad962cbc17a52209b1d725c0fe820af&rid=giphy.gif&ct=g"
            effect="blur"
          />
        </Col>
      </Row>
    )
  }
  return (
    <>
      {selectedItem !== null && (
        <LightBox
          onClose={() => setSelectedItem(null)}
          item={selectedItem}
        />
      )}
      <Masonry
        className="masonry-class"
        breakpointCols={4}
      >
      {
        data.map((item) => (
          <div
            key={item.nanoId}
            className="photo"
            onClick={() => onClick(item)}
          >
            <div className="photo-credits">
              <div className="photo-title">
                {item.title}
              </div>
            </div>
              <LazyLoadImage 
                alt={item.title}
                src={`${item.images.downsized.url}`}
                effect="blur"
              />
          </div>
        ))
      }
      </Masonry>
    </>
  )
}

MasonryItems.propTypes = {
  data: PropsType.array,
  notFound: PropsType.bool,
};

MasonryItems.defaultProps = {
  notFound: false,
};

export default MasonryItems;