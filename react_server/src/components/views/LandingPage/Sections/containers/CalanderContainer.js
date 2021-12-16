import { Space, Row, Col, Spin } from 'antd';
import React, { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { connect } from 'react-redux';
import WeekPresenter from '../Presenters/WeekPresenter';
import CalanderHeadPresenter from '../Presenters/CalanderHeadPresenter';
import styled from 'styled-components';

import 'antd/dist/antd.css';

import {
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  format,
  isEqual,
  add,
} from 'date-fns';

import axios from 'axios';

import {
  daysRequest,
  daysSuccess,
  daysFailure,
} from '../../../../../REDUX_actions/day_actions';

export const CalanderContainer = (props) => {
  const [selectedDate, setselectedDate] = useState(new Date());
  const [daysMap, setdaysMap] = useState(new Map());

  const dispatch = useDispatch();

  const params = [
    'getHoliDeInfo',
    'getRestDeInfo',
    'getAnniversaryInfo',
    'get24DivisionsInfo',
    'getSundryDayInfo',
  ];

  const getThisWeekDayArr = (startDate, endDate) => {
    let daysArr = []
      .concat(daysMap.get(`${format(selectedDate, 'yyyyMM')}getHoliDeInfo`))
      .concat(daysMap.get(`${format(selectedDate, 'yyyyMM')}getRestDeInfo`))
      .concat(
        daysMap.get(`${format(selectedDate, 'yyyyMM')}getAnniversaryInfo`)
      )
      .concat(
        daysMap.get(`${format(selectedDate, 'yyyyMM')}get24DivisionsInfo`)
      )
      .concat(daysMap.get(`${format(selectedDate, 'yyyyMM')}getSundryDayInfo`))
      .filter((day, index) => {
        return (
          day !== undefined &&
          parseInt(format(startDate, 'yyyyMMdd')) <= parseInt(day[1].locdate) &&
          parseInt(format(endDate, 'yyyyMMdd')) >= parseInt(day[1].locdate)
        );
      });

    let weekDaysMap = new Map();

    Object.entries(Object(daysArr)).forEach((day, index) => {
      weekDaysMap.set(String(day[1][1].locdate), String(day[1][1].dateName));
    });

    return weekDaysMap;
  };

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getAPI(param) {
      setLoading(true);

      try {
        let call = await new Promise((resolve, rejct) => {
          //days요청중 액션 디스패치, days상태를 요청중으로 state에 반영
          dispatch(daysRequest());
          axios({
            method: 'get',
            headers: {
              Accept: 'application/json',
              ContentType: 'application/json;charset=UTF-8',
            },
            url: `/B090041/openapi/service/SpcdeInfoService/${param}?solYear=${format(
              selectedDate,
              'yyyy'
            )}&solMonth=${format(
              selectedDate,
              'MM'
            )}&ServiceKey=U24ae6cdBQzfnRlvJeD686IrbPE8z8K4cEgZyj1uMQzmtma4WlGgConFFNKxlYmc48BdmhE%2B5A1Dvj6kHDenoA%3D%3D`,
          }).then(function (res) {
            console.log(res.data);
            var items = res.data.response.body.items.item;

            setdaysMap(
              daysMap.set(
                `${format(selectedDate, 'yyyyMM')}${param}`,
                Object.entries(Object(items))
              )
            );
            //days요청 성공 액션 디스패치, days상태와 daysMap을 state에 반영
            dispatch(daysSuccess());
            console.log(daysMap);
            console.log(
              `${format(selectedDate, 'MM')} / ${format(selectedDate, 'yyyy')}`
            );
          });
          resolve('success');
        });
      } catch (e) {
        dispatch(daysFailure());
        //days요청 실패 액션 디스패치, days상태를 실패로 state반영
        console.error(e);
      }

      setLoading(false);
    }

    params.forEach((param, i) => {
      getAPI(param);
    });
  }, [selectedDate]);

  var { daysPendding } = useSelector((state) => state.days_reducer);

  // if (daysPendding) {
  //   console.log('특일정보 조회중...');
  //   return (
  //     <SpinContainer>
  //       <Spin></Spin>
  //     </SpinContainer>
  //   );
  // }

  // if (Object.keys(daysMap).length == 0) {
  //   return (
  //     <SpinContainer>
  //       <Spin></Spin>
  //     </SpinContainer>
  //   );
  // }

  const prevMonth = () => {
    if (
      isEqual(
        startOfWeek(startOfMonth(selectedDate)),
        startOfMonth(selectedDate)
      )
    ) {
      setselectedDate(
        startOfMonth(add(startOfMonth(selectedDate), { days: -1 }))
      );
      console.log('true' + selectedDate);
    } else {
      setselectedDate(startOfMonth(startOfWeek(startOfMonth(selectedDate))));
      console.log(selectedDate);
    }
  };

  const nextMonth = () => {
    if (
      isEqual(endOfWeek(endOfMonth(selectedDate)), endOfMonth(selectedDate))
    ) {
      setselectedDate(add(endOfMonth(selectedDate), { days: 1 }));
      console.log('true' + selectedDate);
    } else {
      setselectedDate(startOfMonth(endOfWeek(endOfMonth(selectedDate))));
      console.log(selectedDate);
    }
  };

  const getToday = () => {
    setselectedDate(new Date());
    console.log(selectedDate);
  };

  const selectDate = (date) => {
    setselectedDate(date);
    console.log(selectedDate);
  };

  return (
    <>
      {daysPendding && (
        <SpinContainer>
          <Spin></Spin>
        </SpinContainer>
      )}
      <Row
        style={{
          minWidth: '100%',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: '20px',
          marginBottom: '20px',
          height: '100%',
        }}
      >
        <CalanderHeadPresenter
          selectedDate={format(selectedDate, 'yyyy년 MM월')}
          nextMonth={nextMonth}
          getToday={getToday}
          prevMonth={prevMonth}
        />
        <WeekPresenter
          thisWeekStartDate={startOfWeek(startOfMonth(selectedDate))}
          selectedDate={selectedDate}
          selectDate={selectDate}
          style={{ width: '100%', height: '(1/6 * 9/10 * 100)%' }}
          weekDaysMap={getThisWeekDayArr(
            add(startOfWeek(startOfMonth(selectedDate)), {
              days: 7 * 0,
            }),
            add(startOfWeek(startOfMonth(selectedDate)), {
              days: 7 * 0 + 6,
            })
          )}
        />
        <WeekPresenter
          thisWeekStartDate={add(startOfWeek(startOfMonth(selectedDate)), {
            days: 7 * 1,
          })}
          selectedDate={selectedDate}
          selectDate={selectDate}
          style={{ width: '100%', height: '(1/6 * 9/10 * 100)%' }}
          weekDaysMap={getThisWeekDayArr(
            add(startOfWeek(startOfMonth(selectedDate)), {
              days: 7 * 1,
            }),
            add(startOfWeek(startOfMonth(selectedDate)), {
              days: 7 * 1 + 6,
            })
          )}
        />
        <WeekPresenter
          thisWeekStartDate={add(startOfWeek(startOfMonth(selectedDate)), {
            days: 7 * 2,
          })}
          selectedDate={selectedDate}
          selectDate={selectDate}
          style={{ width: '100%', height: '(1/6 * 9/10 * 100)%' }}
          weekDaysMap={getThisWeekDayArr(
            add(startOfWeek(startOfMonth(selectedDate)), {
              days: 7 * 2,
            }),
            add(startOfWeek(startOfMonth(selectedDate)), {
              days: 7 * 2 + 6,
            })
          )}
        />
        <WeekPresenter
          thisWeekStartDate={add(startOfWeek(startOfMonth(selectedDate)), {
            days: 7 * 3,
          })}
          selectedDate={selectedDate}
          selectDate={selectDate}
          style={{ width: '100%', height: '(1/6 * 9/10 * 100)%' }}
          weekDaysMap={getThisWeekDayArr(
            add(startOfWeek(startOfMonth(selectedDate)), {
              days: 7 * 3,
            }),
            add(startOfWeek(startOfMonth(selectedDate)), {
              days: 7 * 3 + 6,
            })
          )}
        />
        <WeekPresenter
          thisWeekStartDate={add(startOfWeek(startOfMonth(selectedDate)), {
            days: 7 * 4,
          })}
          selectedDate={selectedDate}
          selectDate={selectDate}
          style={{ width: '100%', height: '(1/6 * 9/10 * 100)%' }}
          weekDaysMap={getThisWeekDayArr(
            add(startOfWeek(startOfMonth(selectedDate)), {
              days: 7 * 4,
            }),
            add(startOfWeek(startOfMonth(selectedDate)), {
              days: 7 * 4 + 6,
            })
          )}
        />
        <WeekPresenter
          thisWeekStartDate={add(startOfWeek(startOfMonth(selectedDate)), {
            days: 7 * 5,
          })}
          selectedDate={selectedDate}
          selectDate={selectDate}
          style={{ width: '100%', height: '(1/6 * 9/10 * 100)%' }}
          weekDaysMap={getThisWeekDayArr(
            add(startOfWeek(startOfMonth(selectedDate)), {
              days: 7 * 5,
            }),
            add(startOfWeek(startOfMonth(selectedDate)), {
              days: 7 * 5 + 6,
            })
          )}
        />
      </Row>
    </>
  );
};

const SpinContainer = styled.div`
  position: fixed;
  z-index: 1200;
  flex-shrink: 0;
  inset: 0px;
  /* background-color: #fff; */
  color: #262627;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// const mapStateToProps = (state) => ({});

// const mapDispatchToProps = {};

// export default connect(mapStateToProps, mapDispatchToProps)(CalanderContainer);
export default CalanderContainer;
