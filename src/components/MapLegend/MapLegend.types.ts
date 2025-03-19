import React from 'react';

/**
 * 범례 바에 표시될 데이터 형식을 정의합니다.
 */
export interface LegendData {
  /**
   * 범례에 표시될 색상 배열입니다.
   */
  colors: string[];

  /**
   * 범례에 표시될 값 배열입니다.
   */
  values: string[];

  /**
   * 범례 색상의 투명도입니다.
   * @default 1
   */
  opacity?: number;
}

/**
 * 툴바 버튼 항목을 정의합니다.
 */
export interface ToolbarButton {
  /**
   * 버튼의 고유 식별자입니다.
   */
  id: string;

  /**
   * 버튼에 표시될 텍스트입니다.
   */
  label: string;

  /**
   * 버튼에 표시될 아이콘입니다.
   */
  icon?: React.ReactNode;
}

/**
 * MapLegend 컴포넌트의 속성을 정의하는 인터페이스입니다.
 */
export interface MapLegendProps {
  /**
   * 범례의 표시 여부를 결정합니다.
   * @default true
   */
  visible?: boolean;

  /**
   * 범례 닫기 버튼 클릭 시 호출될 함수입니다.
   */
  onClose?: ()=> void;

  /**
   * 현재 선택된 레이어 ID입니다.
   */
  selectedLayerId: string;

  /**
   * 레이어 선택 시 호출될 함수입니다.
   */
  onLayerSelect?: (id: string)=> void;

  /**
   * 툴바 버튼 배열의 배열입니다.
   * 중첩 배열을 사용하여 버튼 그룹을 구성할 수 있습니다.
   */
  toolbarButtons: ToolbarButton[];

  /**
   * 범례 데이터를 포함하는 객체입니다.
   * 키는 레이어 ID와 일치해야 합니다.
   */
  legendData: Record<string, LegendData>;

  /**
   * 범례 컨테이너에 추가할 CSS 클래스명입니다.
   */
  className?: string;

  /**
   * 범례 제목입니다.
   * @default '범례'
   */
  title?: string;

  /**
   * 필터링할 버튼 ID 배열입니다.
   * 이 배열에 포함된 ID를 가진 버튼은 표시되지 않습니다.
   * @default []
   */
  excludeButtonIds?: string[];
}