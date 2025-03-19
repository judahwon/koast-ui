import React from 'react';
import { MapLegendProps, LegendData } from './MapLegend.types';
import {
  getLegendContainerStyles,
  getLegendHeaderStyles,
  getLegendContentStyles,
  getLegendButtonGroupStyles,
  getLegendButtonStyles,
  getLegendBarContainerStyles,
  getLegendColorBarStyles,
  getLegendValueBarStyles,
  getLegendColorItemStyles,
  getLegendValueItemStyles,
} from './MapLegend.styles';

/**
 * 범례 바 컴포넌트입니다.
 */
const LegendBar = ({ legendData }: { legendData: LegendData }) => {
  return (
    <>
      <div className={getLegendColorBarStyles()}>
        {legendData.colors.map((color, index) => (
          <span
            key={`${ color }-${ index }`}
            className={getLegendColorItemStyles(index === 0, index === legendData.colors.length - 1)}
            style={{
              backgroundColor: color,
              opacity: legendData.opacity ?? 1,
            }}
          />
        ))}
      </div>
      <div className={getLegendValueBarStyles()}>
        {legendData.values.map((value, index) => (
          <span key={`${ value }-${ index }`} className={getLegendValueItemStyles()}>
            {value}
          </span>
        ))}
      </div>
    </>
  );
};

/**
 * 지도 범례 컴포넌트입니다.
 *
 * @param {string} [props.title='범례'] - 범례 제목입니다. 타입 : string, 기본값 : '범례'
 * @param {ToolbarButton[]} props.toolbarButtons - 툴바 버튼 배열의 배열입니다. 타입 : ToolbarButton[][]
 * @param {Record<string, LegendData>} props.legendData - 범례 데이터를 포함하는 객체입니다. 타입 : Record<string, LegendData>
 * @param {string} props.selectedLayerId - 현재 선택된 레이어 ID입니다. 타입 : string
 * @param {Function} [props.onLayerSelect] - 레이어 선택 시 호출될 함수입니다. 타입 : Function
 * @param {Function} [props.onClose] - 범례 닫기 버튼 클릭 시 호출될 함수입니다. 타입 : Function
 * @param {boolean} [props.visible=true] - 범례의 표시 여부를 결정합니다. 타입 : boolean, 기본값 : true
 * @param {string} [props.className] - 범례 컨테이너에 추가할 CSS 클래스명입니다. 타입 : string, 기본값 : ''
 * @param {string[]} [props.excludeButtonIds=[]] - 필터링할 버튼 ID 배열입니다. 타입 : string[], 기본값 : []
 *
 * @example
 * ```tsx
 * <MapLegend
 *   visible={true}
 *   onClose={() => setLegendVisible(false)}
 *   selectedLayerId="초기값id"
 *   onLayerSelect={(id) => setSelectedLayer(id)}
 *   toolbarButtons={toolbarButtons}
 *   legendData={legendData}
 * />
 * ```
 */
export const MapLegend = (props: MapLegendProps) => {
  const {
    title = '범례',
    toolbarButtons,
    legendData,
    selectedLayerId,
    onLayerSelect,
    onClose,
    visible = true,
    className = '',
    excludeButtonIds = [],
  } = props;
  // 범례가 보이지 않으면 null 반환
  if (!visible) return null;

  // 제외할 버튼 ID 집합 생성
  const excludeSet = new Set(excludeButtonIds);

  return (
    <div className={getLegendContainerStyles(className)}>
      <div className={getLegendHeaderStyles()}>
        <span>{title}</span>
        {onClose && (
          <button
            type={'button'}
            onClick={onClose}
            aria-label={'Close legend'}
          >
            <svg
              xmlns={'http://www.w3.org/2000/svg'}
              width={'16'}
              height={'16'}
              viewBox={'0 0 24 24'}
              fill={'none'}
              stroke={'currentColor'}
              strokeWidth={'2'}
              strokeLinecap={'round'}
              strokeLinejoin={'round'}
            >
              <line x1={'18'} y1={'6'} x2={'6'} y2={'18'} />
              <line x1={'6'} y1={'6'} x2={'18'} y2={'18'} />
            </svg>
          </button>
        )}
      </div>
      <div className={getLegendContentStyles()}>
        <div className={getLegendButtonGroupStyles()}>
          {toolbarButtons
            .flat()
            .filter((btn) => !excludeSet.has(btn.id))
            .map((btn) => (
              <button
                key={btn.id}
                className={getLegendButtonStyles(selectedLayerId === btn.id)}
                onClick={() => onLayerSelect?.(btn.id)}
                aria-pressed={selectedLayerId === btn.id}
              >
                {btn.icon && <span className={'inline-flex'}>{btn.icon}</span>}
                <span>{btn.label}</span>
              </button>
            ))}
        </div>
        <div className={getLegendBarContainerStyles()}>
          {legendData[selectedLayerId] && <LegendBar legendData={legendData[selectedLayerId]} />}
        </div>
      </div>
    </div>
  );
};

export default MapLegend;
