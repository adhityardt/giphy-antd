import React from 'react';
import { Row, Col, Input, Button, Form } from 'antd';
import { useDispatch } from 'react-redux';
import { SearchOutlined } from '@ant-design/icons';
import './index.style.css'
import giphyAction from '../../redux/giphy/actions'

/**
 * Header Component. Render Search Box
 */

const Header = (props) => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const onSearch = () => {
    const input = form.getFieldValue('input');
    if (!input || input.match(/^ *$/) !== null) {
      dispatch(giphyAction.fetchList({ reset: true }))
      form.resetFields(['input'])
    } else {
      dispatch(giphyAction.fetchList({ q: input }))
    }
  }

  return (
    <Row>
      <Col span={23}>
        <Form form={form} name="search-bar">
          <Form.Item
            name="input"
          >
            <Input
              placeholder='Search all GIFs'
              size="large"
            />
          </Form.Item>
        </Form>
      </Col>
      <Col span={1}>
        <Button
          icon={<SearchOutlined />}
          size="large"
          onClick={onSearch}
        />
      </Col>
    </Row>
  )
}

export default Header;