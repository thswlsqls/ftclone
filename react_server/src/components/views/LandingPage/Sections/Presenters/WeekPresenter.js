import { Col, Row, Tag } from 'antd';
import React from 'react';
import 'antd/dist/antd.css';
import {
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  format,
  isEqual,
  add,
  getMonth,
} from 'date-fns';

function Calander({ thisWeekStartDate, selectedDate, weekDaysMap }) {
  console.log(weekDaysMap);
  console.log(
    weekDaysMap.get(format(add(thisWeekStartDate, { days: 5 }), 'yyyyMMdd'))
  );

  console.log(weekDaysMap);
  console.log(Object.entries(Object(weekDaysMap)));
  Object.entries(Object(weekDaysMap)).forEach((day, index) => {
    console.log(day);
    console.log(day[1][1].locdate + ' / ' + day[1][1].dateName);
  });

  return (
    <Row
      gutter={[0, 0]}
      style={{
        minWidth: '100%',
        height: '16%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontWeight: 'bold',
      }}
    >
      <Col
        style={{
          textAlign: 'end',
          width: '(1/7 * 100)%',
          height: '100%',
          // paddingTop: '4px',
          border: '1px solid rgb(245, 245, 246, 1)',
          backgroundColor: 'rgb(245, 245, 245, 1)',
          color: isEqual(
            getMonth(add(thisWeekStartDate, { days: 6 })),
            getMonth(selectedDate)
          )
            ? '#1890ff'
            : 'rgb(195, 195, 195, 1)',
        }}
        span={2}
        order={7}
        // onClick={selectDate(add(thisWeekStartDate, { days: 6 }))}
      >
        {format(add(thisWeekStartDate, { days: 6 }), 'd')}
        <br />
        {weekDaysMap.get(
          format(add(thisWeekStartDate, { days: 6 }), 'yyyyMMdd')
        ) !== undefined && (
          <Tag
            style={{ borderRadius: '4px', color: '#555555' }}
            color='#ebc9df'
          >
            {weekDaysMap.get(
              format(add(thisWeekStartDate, { days: 6 }), 'yyyyMMdd')
            )}
          </Tag>
        )}
      </Col>
      <Col
        style={{
          textAlign: 'end',
          width: '(1/7 * 100)%',
          height: '100%',
          border: '1px solid rgb(245, 245, 246, 1)',
          color: isEqual(
            getMonth(add(thisWeekStartDate, { days: 5 })),
            getMonth(selectedDate)
          )
            ? '#555555'
            : 'rgb(195, 195, 195, 1)',
        }}
        span={4}
        order={6}
      >
        {format(add(thisWeekStartDate, { days: 5 }), 'd')}
        <br />
        {weekDaysMap.get(
          format(add(thisWeekStartDate, { days: 5 }), 'yyyyMMdd')
        ) !== undefined && (
          <Tag
            style={{ borderRadius: '4px', color: '#555555' }}
            color='#ebc9df'
          >
            {weekDaysMap.get(
              format(add(thisWeekStartDate, { days: 5 }), 'yyyyMMdd')
            )}
          </Tag>
        )}
      </Col>
      <Col
        style={{
          textAlign: 'end',
          width: '(1/7 * 100)%',
          height: '100%',
          border: '1px solid rgb(245, 245, 246, 1)',
          color: isEqual(
            getMonth(add(thisWeekStartDate, { days: 4 })),
            getMonth(selectedDate)
          )
            ? '#555555'
            : 'rgb(195, 195, 195, 1)',
        }}
        span={4}
        order={5}
      >
        {format(add(thisWeekStartDate, { days: 4 }), 'd')}
        <br />
        {weekDaysMap.get(
          format(add(thisWeekStartDate, { days: 4 }), 'yyyyMMdd')
        ) !== undefined && (
          <Tag
            style={{ borderRadius: '4px', color: '#555555' }}
            color='#ebc9df'
          >
            {weekDaysMap.get(
              format(add(thisWeekStartDate, { days: 4 }), 'yyyyMMdd')
            )}
          </Tag>
        )}
      </Col>
      <Col
        style={{
          textAlign: 'end',
          width: '(1/7 * 100)%',
          height: '100%',
          border: '1px solid rgb(245, 245, 246, 1)',
          color: isEqual(
            getMonth(add(thisWeekStartDate, { days: 3 })),
            getMonth(selectedDate)
          )
            ? '#555555'
            : 'rgb(195, 195, 195, 1)',
        }}
        span={4}
        order={4}
      >
        {format(add(thisWeekStartDate, { days: 3 }), 'd')}
        <br />
        {weekDaysMap.get(
          format(add(thisWeekStartDate, { days: 3 }), 'yyyyMMdd')
        ) !== undefined && (
          <Tag
            style={{ borderRadius: '4px', color: '#555555' }}
            color='#ebc9df'
          >
            {weekDaysMap.get(
              format(add(thisWeekStartDate, { days: 3 }), 'yyyyMMdd')
            )}
          </Tag>
        )}
      </Col>
      <Col
        style={{
          textAlign: 'end',
          width: '(1/7 * 100)%',
          height: '100%',
          border: '1px solid rgb(245, 245, 246, 1)',
          color: isEqual(
            getMonth(add(thisWeekStartDate, { days: 2 })),
            getMonth(selectedDate)
          )
            ? '#555555'
            : 'rgb(195, 195, 195, 1)',
        }}
        span={4}
        order={3}
      >
        {format(add(thisWeekStartDate, { days: 2 }), 'd')}
        <br />
        {weekDaysMap.get(
          format(add(thisWeekStartDate, { days: 2 }), 'yyyyMMdd')
        ) !== undefined && (
          <Tag
            style={{ borderRadius: '4px', color: '#555555' }}
            color='#ebc9df'
          >
            {weekDaysMap.get(
              format(add(thisWeekStartDate, { days: 2 }), 'yyyyMMdd')
            )}
          </Tag>
        )}
      </Col>
      <Col
        style={{
          textAlign: 'end',
          width: '(1/7 * 100)%',
          height: '100%',
          border: '1px solid rgb(245, 245, 246, 1)',
          color: isEqual(
            getMonth(add(thisWeekStartDate, { days: 1 })),
            getMonth(selectedDate)
          )
            ? '#555555'
            : 'rgb(195, 195, 195, 1)',
        }}
        span={4}
        order={2}
      >
        {format(add(thisWeekStartDate, { days: 1 }), 'd')}
        <br />
        {weekDaysMap.get(
          format(add(thisWeekStartDate, { days: 1 }), 'yyyyMMdd')
        ) !== undefined && (
          <Tag
            style={{ borderRadius: '4px', color: '#555555' }}
            color='#ebc9df'
          >
            {weekDaysMap.get(
              format(add(thisWeekStartDate, { days: 1 }), 'yyyyMMdd')
            )}
          </Tag>
        )}
      </Col>
      <Col
        style={{
          textAlign: 'end',
          width: '(1/7 * 100)%',
          height: '100%',
          border: '1px solid rgb(245, 245, 246, 1)',
          backgroundColor: 'rgb(245, 245, 245, 1)',
          color: isEqual(getMonth(thisWeekStartDate), getMonth(selectedDate))
            ? '#ff4d4f'
            : 'rgb(195, 195, 195, 1)',
        }}
        span={2}
        order={1}
      >
        {format(thisWeekStartDate, 'd')}
        <br />
        {weekDaysMap.get(
          format(add(thisWeekStartDate, { days: 0 }), 'yyyyMMdd')
        ) !== undefined && (
          <Tag
            style={{ borderRadius: '4px', color: '#555555' }}
            color='#ebc9df'
          >
            {weekDaysMap.get(
              format(add(thisWeekStartDate, { days: 0 }), 'yyyyMMdd')
            )}
          </Tag>
        )}
      </Col>
    </Row>
  );
}

export default Calander;
