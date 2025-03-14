import React from 'react';

/**
 * Select 컴포넌트의 속성을 정의하는 인터페이스
 * @template T - string, number 또는 객체 타입 (기본값: string | number)
 */
export interface SelectProps<T extends string | number | Record<string, string | number> = string | number> {
  /**
   * Select의 값입니다.
   * string, number 또는 { [key: string]: string | number } 형태의 객체가 될 수 있습니다.
   */
  value?: T;

  /**
   * 기본 값입니다. (비제어 컴포넌트로 사용할 때)
   * string, number 또는 { [key: string]: string | number } 형태의 객체가 될 수 있습니다.
   */
  defaultValue?: T;

  /**
   * 값이 변경될 때 호출되는 함수입니다.
   * @param value - 선택된 새로운 값
   */
  onChange?: (value: T)=> void;

  /**
   * Select의 placeholder입니다.
   */
  placeholder?: string;

  /**
   * Select의 비활성화 상태를 지정합니다.
   * @default false
   */
  disabled?: boolean;

  /**
   * Select의 필수 입력 여부를 지정합니다.
   * @default false
  */
  required?: boolean;

  /**
  * Select의 전체 너비 사용 여부를 지정합니다.
  * @default false
 */
  fullWidth?: boolean;

  /**
   * Select의 크기를 지정합니다.
   * @default 'md'
  */
  size?: 'sm' | 'md' | 'lg';

  /**
   * Select의 에러 상태를 지정합니다.
   * @default false
   */
  error?: boolean;

  /**
   * Select의 변형을 지정합니다.
   * @default 'outlined'
   */
  variant?: 'outlined' | 'underlined' | 'text';

  /**
   * Select에 에러가 났을 때 하단에 표시할 텍스트입니다.
   */
  errorText?: React.ReactNode;

  /**
   * Select에 추가할 CSS 클래스명입니다.
   */
  className?: string;

  /**
   * Select의 자식 요소입니다. (SelectItem 컴포넌트들)
   */
  children: React.ReactNode;

  /**
   * Select의 ID입니다.
   */
  id?: string;

  /**
   * Select의 이름입니다.
   */
  name?: string;
}

/**
 * SelectItem 컴포넌트의 속성을 정의하는 인터페이스
 */
export interface SelectItemProps {
  /**
   * SelectItem의 값입니다.
   * string, number 또는 { [key: string]: string | number } 형태의 객체가 될 수 있습니다.
   */
  value: string | number | Record<string, string | number>;

  /**
   * SelectItem의 자식 요소입니다.
   */
  children: React.ReactNode;

  /**
   * SelectItem의 비활성화 상태를 지정합니다.
   * @default false
   */
  disabled?: boolean;

  /**
   * SelectItem에 추가할 CSS 클래스명입니다.
   */
  className?: string;
}

export type SelectSize = 'sm' | 'md' | 'lg';
export type SelectVariant = 'outlined' | 'underlined' | 'text';