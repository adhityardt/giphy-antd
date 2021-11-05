import React, { useEffect, useCallback } from 'react';
import { BottomScrollListener } from 'react-bottom-scroll-listener';
import { useSelector, useDispatch } from 'react-redux';
import Loader from "react-loader-spinner";
import { Row, Col, Typography } from 'antd';
import MasonryItems from '../../components/MasonryItems';
import Header from '../../components/Header'
import giphyAction from '../../redux/giphy/actions';

/**
 * App Root Page or Component
 * 
 * containers Folder --> contained with App's Pages
 */

const { Title } = Typography;
const Home = () => {
  const giphyState = useSelector((state) => state.giphy);
  const dispatch = useDispatch();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const stableDispatch = useCallback(dispatch, [])

  useEffect(() => {
    stableDispatch(giphyAction.fetchList({}))
    return () => {
      stableDispatch(giphyAction.reset())
    }
  }, [stableDispatch]);

  const onButtom = () => {
    if (!giphyState.loading && !giphyState.notFound) dispatch(giphyAction.fetchList({ loadMore: true }));
  }
  
  return (
    <>
      <BottomScrollListener onBottom={onButtom} />
      <Header />
      <Row justify='start'>
        <Col>
          <Title level={4} style={{ color: 'white' }}>
            Trending GIFs
          </Title>
        </Col>
      </Row>
      <Row justify='center'>
        <Col span={24}>
          <MasonryItems
            notFound={giphyState.notFound}
            data={giphyState.result}
          />
        </Col>
        {giphyState.loading && (
          <Col>
            <Loader type="ThreeDots" color="#9933ff" height={80} width={100} />
          </Col>
        )}
      </Row>
    </>
  )
}

export default Home;