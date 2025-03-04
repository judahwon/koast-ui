import type { Meta, StoryObj } from '@storybook/react';
import { Select, SelectItem } from './Select';
import { useState } from 'react';

/**
 * Select 컴포넌트는 사용자가 여러 옵션 중 하나를 선택할 수 있는 드롭다운 메뉴를 제공합니다.
 * 다양한 크기, 변형, 상태를 지원합니다.
 */
const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: 'text',
      description: 'Select의 값입니다.',
    },
    defaultValue: {
      control: 'text',
      description: '기본 값입니다. (비제어 컴포넌트로 사용할 때)',
    },
    placeholder: {
      control: 'text',
      description: 'Select의 placeholder입니다.',
      defaultValue: '선택하세요',
    },
    disabled: {
      control: 'boolean',
      description: 'Select의 비활성화 상태를 지정합니다.',
      defaultValue: false,
    },
    required: {
      control: 'boolean',
      description: 'Select의 필수 입력 여부를 지정합니다.',
      defaultValue: false,
    },
    fullWidth: {
      control: 'boolean',
      description: 'Select의 전체 너비 사용 여부를 지정합니다.',
      defaultValue: false,
    },
    size: {
      control: 'radio',
      options: ['sm', 'md', 'lg'],
      description: 'Select의 크기를 지정합니다.',
      defaultValue: 'md',
    },
    error: {
      control: 'boolean',
      description: 'Select의 에러 상태를 지정합니다.',
      defaultValue: false,
    },
    variant: {
      control: 'radio',
      options: ['outlined', 'underlined', 'text'],
      description: 'Select의 변형을 지정합니다.',
      defaultValue: 'outlined',
    },
    errorText: {
      control: 'text',
      description: 'Select에 에러가 났을 때 하단에 표시할 텍스트입니다.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

/**
 * 기본 Select 예시입니다.
 */
export const Default: Story = {
  render: () => (
    <Select placeholder={'선택하세요'}>
      <SelectItem value={'option1'}>{'옵션 1'}</SelectItem>
      <SelectItem value={'option2'}>{'옵션 2'}</SelectItem>
      <SelectItem value={'option3'}>{'옵션 3'}</SelectItem>
    </Select>
  ),
};

/**
 * 제어 컴포넌트로 사용하는 Select 예시입니다.
 */
export const Controlled: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState<string>('option2');

    return (
      <div className={'flex flex-col gap-4'}>
        <p>{'선택된 값: '}{value}</p>
        <Select
          value={value}
          onChange={(newValue) => setValue(newValue as string)}
        >
          <SelectItem value={'option1'}>{'옵션 1'}</SelectItem>
          <SelectItem value={'option2'}>{'옵션 2'}</SelectItem>
          <SelectItem value={'option3'}>{'옵션 3'}</SelectItem>
        </Select>
      </div>
    );
  },
};

/**
 * Select 변형(variant) 예시입니다.
 */
export const Variants: Story = {
  render: () => (
    <div className={'flex gap-4'}>
      <Select variant={'outlined'} placeholder={'outlined'}>
        <SelectItem value={'option1'}>{'옵션 1'}</SelectItem>
        <SelectItem value={'option2'}>{'옵션 2'}</SelectItem>
      </Select>
      <Select variant={'underlined'} placeholder={'underlined'}>
        <SelectItem value={'option1'}>{'옵션 1'}</SelectItem>
        <SelectItem value={'option2'}>{'옵션 2'}</SelectItem>
      </Select>
      <Select variant={'text'} placeholder={'text'}>
        <SelectItem value={'option1'}>{'옵션 1'}</SelectItem>
        <SelectItem value={'option2'}>{'옵션 2'}</SelectItem>
      </Select>
    </div>
  ),
};

/**
 * Select 크기(size) 예시입니다.
 */
export const Sizes: Story = {
  render: () => (
    <div className={'flex items-end gap-4'}>
      <Select size={'sm'} placeholder={'Small'}>
        <SelectItem value={'option1'}>{'옵션 1'}</SelectItem>
        <SelectItem value={'option2'}>{'옵션 2'}</SelectItem>
      </Select>
      <Select size={'md'} placeholder={'Medium'}>
        <SelectItem value={'option1'}>{'옵션 1'}</SelectItem>
        <SelectItem value={'option2'}>{'옵션 2'}</SelectItem>
      </Select>
      <Select size={'lg'} placeholder={'Large'}>
        <SelectItem value={'option1'}>{'옵션 1'}</SelectItem>
        <SelectItem value={'option2'}>{'옵션 2'}</SelectItem>
      </Select>
    </div>
  ),
};

/**
 * 비활성화된 Select 예시입니다.
 */
export const Disabled: Story = {
  render: () => (
    <div className={'flex flex-col gap-4'}>
      <Select disabled placeholder={'비활성화된 Select'}>
        <SelectItem value={'option1'}>{'옵션 1'}</SelectItem>
        <SelectItem value={'option2'}>{'옵션 2'}</SelectItem>
      </Select>

      <Select placeholder={'비활성화된 옵션이 있는 Select'}>
        <SelectItem value={'option1'}>{'옵션 1'}</SelectItem>
        <SelectItem value={'option2'} disabled>{'옵션 2 (비활성화)'}</SelectItem>
        <SelectItem value={'option3'}>{'옵션 3'}</SelectItem>
      </Select>
    </div>
  ),
};

/**
 * 필수 입력 Select 예시입니다.
 */
export const Required: Story = {
  render: () => (
    <Select required placeholder={'필수 입력 항목'}>
      <SelectItem value={'option1'}>{'옵션 1'}</SelectItem>
      <SelectItem value={'option2'}>{'옵션 2'}</SelectItem>
    </Select>
  ),
};

/**
 * 에러 상태의 Select 예시입니다.
 */
export const Error: Story = {
  render: () => (
    <div className={'flex flex-col gap-4'}>
      <Select error placeholder={'에러 상태'}>
        <SelectItem value={'option1'}>{'옵션 1'}</SelectItem>
        <SelectItem value={'option2'}>{'옵션 2'}</SelectItem>
      </Select>

      <Select
        error
        errorText={'필수 항목을 선택해주세요'}
        placeholder={'에러 메시지 포함'}
      >
        <SelectItem value={'option1'}>{'옵션 1'}</SelectItem>
        <SelectItem value={'option2'}>{'옵션 2'}</SelectItem>
      </Select>
    </div>
  ),
};

/**
 * 전체 너비(fullWidth) Select 예시입니다.
 */
export const FullWidth: Story = {
  render: () => (
    <div className={'w-80'}>
      <Select fullWidth placeholder={'전체 너비 Select'}>
        <SelectItem value={'option1'}>{'옵션 1'}</SelectItem>
        <SelectItem value={'option2'}>{'옵션 2'}</SelectItem>
        <SelectItem value={'option3'}>{'옵션 3'}</SelectItem>
      </Select>
    </div>
  ),
};

/**
 * 다양한 옵션을 가진 Select 예시입니다.
 */
export const ManyOptions: Story = {
  render: () => (
    <Select placeholder={'국가 선택'}>
      <SelectItem value={'kr'}>{'대한민국'}</SelectItem>
      <SelectItem value={'us'}>{'미국'}</SelectItem>
      <SelectItem value={'jp'}>{'일본'}</SelectItem>
      <SelectItem value={'cn'}>{'중국'}</SelectItem>
      <SelectItem value={'gb'}>{'영국'}</SelectItem>
      <SelectItem value={'fr'}>{'프랑스'}</SelectItem>
      <SelectItem value={'de'}>{'독일'}</SelectItem>
      <SelectItem value={'it'}>{'이탈리아'}</SelectItem>
      <SelectItem value={'es'}>{'스페인'}</SelectItem>
      <SelectItem value={'ca'}>{'캐나다'}</SelectItem>
    </Select>
  ),
};

/**
 * 숫자 값을 가진 Select 예시입니다.
 */
export const NumberValues: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState<number>(20);

    return (
      <div className={'flex flex-col gap-4'}>
        <p>{'선택된 값: '}{value}</p>
        <Select<number>
          value={value}
          onChange={(newValue) => setValue(newValue)}
          placeholder={'나이 선택'}
        >
          <SelectItem value={10}>{'10세'}</SelectItem>
          <SelectItem value={20}>{'20세'}</SelectItem>
          <SelectItem value={30}>{'30세'}</SelectItem>
          <SelectItem value={40}>{'40세'}</SelectItem>
          <SelectItem value={50}>{'50세'}</SelectItem>
        </Select>
      </div>
    );
  },
};

/**
 * 커스텀 스타일이 적용된 Select 예시입니다.
 */
export const CustomStyled: Story = {
  render: () => (
    <Select
      variant={'text'}
      className={'border-2 border-purple-500 bg-purple-50'}
      placeholder={'커스텀 스타일 Select'}
    >
      <SelectItem value={'option1'} className={'text-purple-700 hover:bg-purple-100'}>
        {'커스텀 옵션 1'}
      </SelectItem>
      <SelectItem value={'option2'} className={'text-purple-700 hover:bg-purple-100'}>
        {'커스텀 옵션 2'}
      </SelectItem>
    </Select>
  ),
};
