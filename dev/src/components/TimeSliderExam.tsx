import React from 'react';
import { TimeSlider, TimeSliderSize, TimeUnit } from '../../../src';

const TimeSliderExam = () => {
  const props = {
    start: new Date('2025-03-10 07:47'),
    end:  new Date('2025-03-10 09:47'),
    initialDate: new Date('2025-03-10 08:17'),
    stepValue: 30,
    stepUnit: 'minute' as TimeUnit,
    size: 'md' as TimeSliderSize,
    onChange: undefined,
    renderRulerLabel: (date: Date) => {
      const format = (date: Date) => {
        const dateDate = date.getDate();
        const month = date.getMonth() + 1;

        const hour = date.getHours();
        const min = date.getMinutes();

        return `${ month }-${ dateDate } ${ hour }:${ min }`;
      };
      return format(date);
    },
  };
  return (
    <TimeSlider {...props} />
  );
};

export default TimeSliderExam;
