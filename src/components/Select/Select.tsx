import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { SelectProps, SelectItemProps } from './Select.types';
import { getSizeStyles, getVariantStyles, getErrorStyles, getWidthStyles } from './Select.styles';

/**
 * Koast/ui SelectItem 컴포넌트입니다.
 * Select 컴포넌트의 옵션으로 사용됩니다.
 *
 * @param {string | number} props.value - 항목의 값 : string | number
 * @param {React.ReactNode} props.children - 항목에 표시될 내용 : React.ReactNode
 * @param {boolean} [props.disabled=false] - 비활성화 상태 : boolean
 * @param {string} [props.className] - 추가 CSS 클래스 : string
 *
 * @example
 * ```tsx
 * <SelectItem value="option1" disabled={false}>옵션 1</SelectItem>
 * ```
 */
export const SelectItem = ({ value, children, disabled, className }: SelectItemProps) => {
  return (
    <div
      data-value={value}
      className={`cursor-pointer px-4 py-2 hover:bg-gray-100 ${
        disabled ? 'cursor-not-allowed opacity-50' : ''
      } ${ className || '' }`}
    >
      {children}
    </div>
  );
};

/**
 * Koast/ui Select 컴포넌트입니다.
 * 사용자가 여러 옵션 중 하나를 선택할 수 있는 드롭다운 메뉴를 제공합니다.
 *
 * @param {string | number} [props.value] - 선택된 값 : string | number
 * @param {string | number} [props.defaultValue] - 기본 선택 값 : string | number
 * @param {Function} [props.onChange] - 값 변경 시 호출되는 콜백 함수 : Function
 * @param {string} [props.placeholder] - 선택되지 않았을 때 표시되는 텍스트 : string
 * @param {boolean} [props.disabled=false] - 비활성화 상태 : boolean
 * @param {boolean} [props.required=false] - 필수 입력 여부 : boolean
 * @param {boolean} [props.fullWidth=false] - 전체 너비 사용 여부 : boolean
 * @param {'sm' | 'md' | 'lg'} [props.size='md'] - 컴포넌트 크기 : 'sm' | 'md' | 'lg'
 * @param {'outlined' | 'filled' | 'standard'} [props.variant='outlined'] - 컴포넌트 스타일 변형 : 'outlined' | 'filled' | 'standard'
 * @param {boolean} [props.error=false] - 오류 상태 : boolean
 * @param {string} [props.errorText] - 오류 메시지 : string
 * @param {string} [props.className] - 추가 CSS 클래스 : string
 * @param {React.ReactNode} props.children - SelectItem 컴포넌트들 : React.ReactNode
 * @param {string} [props.id] - 컴포넌트 ID : string
 * @param {string} [props.name] - 폼 제출 시 사용되는 이름 : string
 *
 * @example
 * ```tsx
 * <Select label="Age" value={age} onChange={(value) => setAge(value)}>
 *   <SelectItem value={10}>Ten</SelectItem>
 *   <SelectItem value={20}>Twenty</SelectItem>
 *   <SelectItem value={30}>Thirty</SelectItem>
 * </Select>
 * ```
 */
export const Select = <T extends string | number = string | number>(props: SelectProps<T>) => {
  const {
    value,
    defaultValue,
    onChange,
    placeholder,
    disabled = false,
    required = false,
    fullWidth = false,
    size = 'md',
    variant = 'outlined',
    error = false,
    errorText,
    className,
    children,
    id,
    name,
  } = props;

  // 내부 상태 관리
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string | number | undefined>(
    value !== undefined ? value : defaultValue,
  );
  const [selectedLabel, setSelectedLabel] = useState<React.ReactNode>('');
  const selectRef = useRef<HTMLDivElement>(null);

  // 외부 클릭 감지를 위한 이벤트 리스너
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // 값이 변경될 때 선택된 라벨 업데이트
  useEffect(() => {
    if (value !== undefined) {
      setSelectedValue(value);

      // 선택된 값에 해당하는 라벨 찾기
      React.Children.forEach(children, (child) => {
        if (React.isValidElement(child) && (child.props as SelectItemProps).value === value) {
          setSelectedLabel((child.props as SelectItemProps).children);
        }
      });
    }
  }, [value, children]);

  // 초기 선택된 라벨 설정
  useEffect(() => {
    if (selectedValue !== undefined) {
      React.Children.forEach(children, (child) => {
        if (React.isValidElement(child) && (child.props as SelectItemProps).value === selectedValue) {
          setSelectedLabel((child.props as SelectItemProps).children);
        }
      });
    }
  }, [selectedValue, children]);

  // 옵션 선택 핸들러
  const handleSelect = (value: string | number) => {
    setSelectedValue(value);
    setIsOpen(false);

    if (onChange) {
      // 원래 값의 타입에 맞게 변환하여 전달
      onChange(value as T);
    }
  };

  // 렌더링
  return (
    <div className={`inline-block ${ getWidthStyles(fullWidth) } ${ className || '' }`} ref={selectRef}>
      <div className={'relative'}>
        <div
          className={`
            flex cursor-pointer items-center justify-between rounded
            ${ getVariantStyles(variant) }
            ${ getSizeStyles(size) }
            ${ getErrorStyles(error) }
            ${ disabled ? 'cursor-not-allowed bg-gray-50 opacity-50' : 'hover:border-gray-400' }
            transition-colors duration-200
          `}
          onClick={() => !disabled && setIsOpen(!isOpen)}
          tabIndex={disabled ? -1 : 0}
          role={'combobox'}
          aria-expanded={isOpen}
          aria-haspopup={'listbox'}
          aria-labelledby={id}
          aria-required={required}
          id={id}
          data-name={name}
        >
          <div className={`flex grow items-center justify-between truncate ${ !selectedValue && placeholder ? 'text-gray-400' : '' }`}>
            {selectedValue ? selectedLabel : placeholder || ''}
            {required && !selectedValue && <span className={'ml-1.5 text-xs text-red-500'}>{'필수*'}</span>}
          </div>
          <ChevronDown
            size={20}
            className={`ml-2 transition-transform duration-200 ${ isOpen ? 'rotate-180' : '' }`}
          />
        </div>

        {isOpen && (
          <div className={'absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded border border-gray-300 bg-white shadow-lg'}>
            {React.Children.map(children, (child) => {
              if (!React.isValidElement(child)) return null;

              const { value: itemValue, disabled: itemDisabled } = child.props as SelectItemProps;

              return (
                <div
                  onClick={() => !itemDisabled && handleSelect(itemValue)}
                  className={`${
                    selectedValue === itemValue ? 'bg-blue-50 text-blue-800' : ''
                  }`}
                >
                  {child}
                </div>
              );
            })}
          </div>
        )}
      </div>

      {error && errorText && (
        <div className={'mt-1 text-sm text-red-500'}>
          {errorText}
        </div>
      )}
    </div>
  );
};

export default Select;
