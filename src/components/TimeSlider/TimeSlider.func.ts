import { DateToStringFunc, TimeSliderSize, TimeUnit } from './TimeSlider.types';
import clsx from 'clsx';

export const generateSteps = (
  start: Date,
  end: Date,
  stepValue: number,
  stepUnit: TimeUnit = 'minute',
): Date[] => {
  const steps: Date[] = [];
  const current = new Date(start);
  while (current <= end) {
    steps.push(new Date(current));
    switch (stepUnit) {
      case 'year':
        current.setFullYear(current.getFullYear() + stepValue);
        break;
      case 'month':
        current.setMonth(current.getMonth() + stepValue);
        break;
      case 'day':
        current.setDate(current.getDate() + stepValue);
        break;
      case 'hour':
        current.setHours(current.getHours() + stepValue);
        break;
      case 'minute':
        current.setMinutes(current.getMinutes() + stepValue);
        break;
      case 'second':
        current.setSeconds(current.getSeconds() + stepValue);
        break;
      default:
        break;
    }
  }
  return steps;
};

const zeroPad = (num: number, length = 2): string => {
  return String(num).padStart(length, '0');
};

const getMonthOneBased = (date: Date): number => {
  return date.getMonth() + 1;
};

export const getDefaultMessage = (date: Date, stepUnit: TimeUnit) => {
  switch (stepUnit) {
    case 'year':
      return String(date.getFullYear());
    case 'month':
      return `${ date.getFullYear() }-${ zeroPad(getMonthOneBased(date)) }`;
    case 'day':
      return `${ zeroPad(getMonthOneBased(date)) }-${ zeroPad(date.getDate()) }`;
    case 'second':
      return `${ zeroPad(date.getMinutes()) }:${ zeroPad(date.getSeconds()) }`;
    case 'hour':
    case 'minute':
    default:
      return `${ zeroPad(date.getHours()) }:${ zeroPad(date.getMinutes()) }`;
  }
};

export const getRectMetrics = (elem: HTMLDivElement) => {
  const { left, width } = elem.getBoundingClientRect();
  return { left, width };
};

export const calculateClickX = (elem: HTMLDivElement, clientX: number): number => {
  const { left } = getRectMetrics(elem);
  return clientX - left;
};

export const calculateIndex = (elem: HTMLDivElement, clientX: number, dataLength: number): number => {
  const { left, width } = getRectMetrics(elem);
  const clickX = clientX - left;
  const percentage = Math.max(0, Math.min(1, clickX / width));
  return Math.min(Math.floor(percentage * dataLength), dataLength - 1);
};

interface ShowGuageHoverMessageProps {
  e: React.MouseEvent<HTMLDivElement>,
  guageElem: HTMLDivElement | null,
  gaugeHoverGuideElem: HTMLDivElement | null,
  gaugeHoverGuideTextElem: HTMLDivElement | null,
  steps: Date[],
  stepUnit: TimeUnit,
  render?: DateToStringFunc
}

export const showGuageHoverMessage = ({ e, guageElem, gaugeHoverGuideElem, gaugeHoverGuideTextElem, steps, stepUnit, render }: ShowGuageHoverMessageProps) => {
  if (!guageElem || !gaugeHoverGuideElem || !gaugeHoverGuideTextElem) return;

  const { width } = getRectMetrics(guageElem);
  const pixel = calculateClickX(guageElem, e.clientX);

  if (pixel < 0 || pixel > width) return;

  const { width:guideWidth } = getRectMetrics(gaugeHoverGuideElem);
  gaugeHoverGuideElem.style.left = `${ pixel - (guideWidth / 2) }px`;
  gaugeHoverGuideElem.style.opacity = '1';

  const newIndex = calculateIndex(guageElem, e.clientX, steps.length);
  const date = steps[newIndex];
  gaugeHoverGuideTextElem.innerText = render ? render(date) : getDefaultMessage(date, stepUnit);
};

export const hideGuageHoverMessage = (elem: HTMLDivElement | null) => {
  if (!elem ) return;
  elem.style.opacity = '0';
};

interface ChangeSelectedGuideMessageProps {
  guageElem: HTMLDivElement | null,
  selectedGuideElem: HTMLDivElement | null,
  selectedGuideTextElem: HTMLDivElement | null,
  stepWidthPercentage: number,
  index: number,
  date: Date,
  stepUnit: TimeUnit,
  render?: DateToStringFunc
}

export const changeSelectedGuideMessage = ({ guageElem, selectedGuideElem, selectedGuideTextElem, stepWidthPercentage, index, date, stepUnit, render }: ChangeSelectedGuideMessageProps) => {
  if (!guageElem || !selectedGuideElem || !selectedGuideTextElem) return;
  const { width:gaugeWidth } = getRectMetrics(guageElem);
  const { width:selectedGuideWidth } = getRectMetrics(selectedGuideElem);

  const selectedGuideOffsetPercentage = (selectedGuideWidth / 2 / gaugeWidth) * 100;
  const leftPercentage = (stepWidthPercentage * index) + (stepWidthPercentage / 2) - selectedGuideOffsetPercentage;

  selectedGuideElem.style.left = `${ leftPercentage }%`;
  selectedGuideTextElem.innerText = render ? render(date) : getDefaultMessage(date, stepUnit);
};

export const returnDate = (date: Date | number) => date instanceof Date ? date : new Date(date);

const currentStopSizeClassName = (size: TimeSliderSize) => {
  switch (size) {
    case 'lg': {
      return 'before:left-[17px] before:top-[7.5px] before:border-y-[15px] before:border-l-[15px]';
    }
    case 'sm': {
      return 'before:left-[8.75px] before:top-[3.75px] before:border-y-[7.5px] before:border-l-[7.5px]';
    }
    case 'md': {
      return 'before:left-[11.5px] before:top-[5px] before:border-y-[10px] before:border-l-[10px]';
    }
  }
};

const currentPlaySizeClassName = (size: TimeSliderSize) => {
  switch (size) {
    case 'lg': {
      return 'before:top-[12px] before:left-[12px] before:w-[6px] before:h-[18px] after:top-[12px] after:right-[12px] after:w-[6px] after:h-[18px]';
    }
    case 'sm': {
      return 'before:top-[6px] before:left-[6px] before:w-[3px] before:h-[9px] after:top-[6px] after:right-[6px] after:w-[3px] after:h-[9px]';
    }
    case 'md': {
      return 'before:top-[8px] before:left-[8px] before:w-[4px] before:h-[12px] after:top-[8px] after:right-[8px] after:w-[4px] after:h-[12px]';
    }
  }
};

const currentStopStyle = (size: TimeSliderSize) => clsx(
  'before:absolute',
  currentStopSizeClassName(size),
  'before:border-y-transparent before:border-l-[#9d0300] before:content-[""]',
);

const currentPlayStyle = (size: TimeSliderSize) => clsx(
  'before:absolute before:bg-[#9d0300] after:absolute after:bg-[#9d0300]',
  currentPlaySizeClassName(size),
);

export const playStyleStatus = (run: boolean, size: TimeSliderSize) =>
  !run ? currentStopStyle(size) : currentPlayStyle(size);

export const animationWidthPercent = 0.05;
export const sliderWidthPercent = 0.90;
export const playPercent = 0.75;
export const prevnextPercent = 0.375;
export const sizeToTWClassName = (size: TimeSliderSize) => {
  /* const animationWidthPercent = 0.05;
  const sliderWidthPercent = 0.90;
  const playPercent = 0.75;
  const prevnextPercent = 0.375;
  const mainHeight = 48;
   */
  let mainWidth = 800;
  let mainSize = 'h-[48px] w-[800px]';
  let animationBoxWrapperWidth = 'w-[40px]';
  let timeSliderWrapperWidth = 'w-[720px]';
  let playSizeAndRounded = 'size-[30px] rounded-[30px]';
  let prevnextSizeAndRounded = 'size-[15px] rounded-[15px]';

  /* const animationBoxWrapperWidth = mainWidth * animationWidthPercent;
  const playSize = animationBoxWrapperWidth * playPercent;
  const prevnextSize = animationBoxWrapperWidth * prevnextPercent;
   */
  switch (size) {
    case 'sm': {
      // mainHeight = 36;
      mainWidth = 600;
      mainSize = 'h-[36px] w-[600px]';
      animationBoxWrapperWidth = 'w-[30px]';
      timeSliderWrapperWidth = 'w-[540px]';
      playSizeAndRounded = 'size-[22.5px] rounded-[22.5px]';
      prevnextSizeAndRounded = 'size-[11.25px] rounded-[11.25px]';
      break;
    }
    case 'lg': {
      // mainHeight = 72;
      mainWidth = 1200;
      mainSize = 'h-[72px] w-[1200px]';
      animationBoxWrapperWidth = 'w-[60px]';
      timeSliderWrapperWidth = 'w-[1080px]';
      playSizeAndRounded = 'size-[45px] rounded-[45px]';
      prevnextSizeAndRounded = 'size-[22.5px] rounded-[22.5px]';
      break;
    }
    /* case 'md':
    default: {
      // mainHeight = 48;
      // mainWidth = 800;
      mainSize = 'w-[48px] h-[800px]';
      animationBoxWrapperWidth = 'w-[40px]';
      timeSliderWrapperWidth = 'w-[720px]';
      playSizeAndRounded = 'size-[30px] rounded-[30px]';
      prevnextSizeAndRounded = 'size-[15px] rounded-[15px]';
    } */
  }
  const timeSliderWrapperWidthNumber = mainWidth * sliderWidthPercent;

  return {
    mainSize,
    animationBoxWrapperWidth,
    playSizeAndRounded,
    prevnextSizeAndRounded,
    timeSliderWrapperWidth,
    timeSliderWrapperWidthNumber,
  };
};