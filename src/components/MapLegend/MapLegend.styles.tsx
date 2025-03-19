/**
 * 범례 컨테이너의 기본 스타일을 반환합니다.
 */
export const getLegendContainerStyles = (className: string = '') => {
  const baseStyle = 'z-10 mb-9 flex h-auto w-auto flex-col justify-center rounded-lg bg-white px-3 py-2 shadow-lg';
  return `${ baseStyle } ${ className }`;
};

/**
 * 범례 헤더의 스타일을 반환합니다.
 */
export const getLegendHeaderStyles = () => {
  return 'flex h-8 w-full items-center justify-between font-bold';
};

/**
 * 범례 내용 영역의 스타일을 반환합니다.
 */
export const getLegendContentStyles = () => {
  return 'flex flex-col gap-2 pt-2 text-sm';
};

/**
 * 범례 버튼 그룹의 스타일을 반환합니다.
 */
export const getLegendButtonGroupStyles = () => {
  return 'flex flex-wrap gap-2';
};

/**
 * 범례 버튼의 스타일을 반환합니다.
 */
export const getLegendButtonStyles = (isSelected: boolean) => {
  const baseStyle = 'flex items-center gap-1 rounded-full px-3 py-1';
  const selectedStyle = isSelected ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-700';
  return `${ baseStyle } ${ selectedStyle }`;
};

/**
 * 범례 바 컨테이너의 스타일을 반환합니다.
 */
export const getLegendBarContainerStyles = () => {
  return 'mt-2 flex w-full flex-col gap-2';
};

/**
 * 범례 색상 바의 스타일을 반환합니다.
 */
export const getLegendColorBarStyles = () => {
  return 'flex w-full px-[18px]';
};

/**
 * 범례 값 바의 스타일을 반환합니다.
 */
export const getLegendValueBarStyles = () => {
  return 'flex w-full justify-between';
};

/**
 * 범례 색상 항목의 스타일을 반환합니다.
 */
export const getLegendColorItemStyles = (isFirst: boolean, isLast: boolean) => {
  const borderRadius = isFirst ? 'rounded-l-full' : isLast ? 'rounded-r-full' : '';
  return `h-4 w-full ${ borderRadius }`;
};

/**
 * 범례 값 항목의 스타일을 반환합니다.
 */
export const getLegendValueItemStyles = () => {
  return 'w-10 text-center text-[12px]';
};