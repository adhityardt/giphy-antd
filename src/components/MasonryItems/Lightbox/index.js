import React from 'react';
import { Row, Col } from 'antd';
import PropsType from 'prop-types';
import './index.style.css'

/**
 * Lightbox Component. Render GIFs detail by expanding the selected GIF
 */

const LightBox = (props) => {
  const { onClose, item } = props;
  return (
    <Row>
      <Col span={24}>
        <div
          className="lightbox"
          onClick={onClose}
        >
          <div className="lightbox-credits">
            <div> Title : {item.title} </div>
            <div> Username : {item.username} </div>
            <div> Rating : {item.rating} </div>
          </div>
          <img
            alt={item.alt}
            className="lightbox-img"
            src={item.src}  
          />
        </div>
      </Col>
    </Row>
  )
}

LightBox.propTypes = {
  onClose: PropsType.func,
  item: PropsType.shape({
    alt: PropsType.string,
    src: PropsType.string,
    title: PropsType.string,
    username: PropsType.string,
    rating: PropsType.string,
  }),
};

export default LightBox;