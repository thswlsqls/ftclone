import { Col, Row, Button } from 'antd';
import React from 'react';
import { RightOutlined, LeftOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';

function CalanderHeadPresenter({
  selectedDate,
  nextMonth,
  getToday,
  prevMonth,
}) {
  return (
    <Row
      style={{
        minWidth: '100%',
        height: '10%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Row
        style={{
          minWidth: '100%',
          height: '50%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Row style={{ fontSize: '24px', color: '#555555', fontWeight: 'bold' }}>
          &nbsp;&nbsp;{selectedDate}
        </Row>
        <Row
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <Row
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
            }}
          >
            <Button
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
              }}
              icon={<LeftOutlined />}
              href='#'
              onClick={prevMonth}
            />
            <Button
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
              }}
              onClick={getToday}
            >
              &nbsp;Today&nbsp;
            </Button>
            <Button
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
              }}
              icon={<RightOutlined />}
              href='#'
              onClick={nextMonth}
            />
            &nbsp;&nbsp;
          </Row>
        </Row>
      </Row>
      <Row
        style={{
          minWidth: '100%',
          height: '50%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: '2px solid rgb(245, 245, 245, 1)',
          fontWeight: 'bold',
          paddingTop: '6px',
          paddingBottom: '6px',
        }}
      >
        {' '}
        <Col style={{ textAlign: 'end', color: '#1890ff' }} span={2} order={7}>
          SAT &nbsp;
        </Col>
        <Col style={{ textAlign: 'end', color: '#555555' }} span={4} order={6}>
          FRI &nbsp;
        </Col>
        <Col style={{ textAlign: 'end', color: '#555555' }} span={4} order={5}>
          THU &nbsp;
        </Col>
        <Col style={{ textAlign: 'end', color: '#555555' }} span={4} order={4}>
          WED &nbsp;
        </Col>
        <Col style={{ textAlign: 'end', color: '#555555' }} span={4} order={3}>
          TUE &nbsp;
        </Col>
        <Col style={{ textAlign: 'end', color: '#555555' }} span={4} order={2}>
          MON &nbsp;
        </Col>
        <Col style={{ textAlign: 'end', color: '#ff4d4f' }} span={2} order={1}>
          SUN &nbsp;
        </Col>
      </Row>
    </Row>
  );
}

export default CalanderHeadPresenter;
