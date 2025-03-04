# KOAST UI

한국해양기상기술을 위한 **React UI 라이브러리**입니다.

작은 단위의 ui부터 프로젝트에 꼭 필요한 Slider, Legend 등 제작할 예정입니다.

(기존에는 [http://10.2.10.79:4873](http://10.2.10.79:4873)에 [Verdaccio](https://verdaccio.org/)를 구축하여 진행했습니다만, 그렇게 진행할 필요가 없어서 npmjs.org에 직접 배포하는 방식으로 변경하였습니다.)

- NPM 배포 : [koast-ui](https://www.npmjs.com/package/koast-ui)
- 문서 : [koast-ui storybook](https://judahwon.github.io/koast-ui/)
(`github pages`를 사용하기 위해 `judahwon` 계정에서 public repo로 배포하고 있습니다.)
- `Publish` 권한이 필요한 경우, `judahwon`에게 요청해주시기 바랍니다.
- 추가적으로, main branch에 push될 때마다 자동으로 배포되도록 설정하였습니다. 또한, PR merge될 때마다 NPM 배포도 자동으로 진행됩니다.

<br>

## 환경

- node >= 20
- npm >= 9
- react >= 18 (권장 >= 19)
- typescript >= 5
- tailwindcss >= 3
- eslint >= 9
- vite >= 5

<br>


## 프로젝트 실행 방법(PR을 위한)

### 1. project clone

- https
```bash
git clone https://github.com/koast-crew/koast-ui.git
```

### 2. npm install

```bash
npm install
```

### 3. npm run build

```bash
npm run build
```

### 4. npm run dev

- 아직은 playground 없이, dev폴더에서 테스트를 해볼 수 있습니다.

```bash
npm run dev
```
<br>

## 프로젝트에서 @koast/ui 사용 방법

### 1. 패키지 설치

```bash
npm install koast-ui
```

### 3. 패키지 사용

```tsx
import { Button } from "koast-ui";

const App = () => {
  return <Button>Click me</Button>;
};

export default App;
```
<br>

## 제작할 컴포넌트 목록

### 베타 기능 (3월 말 목표)

| 제작여부 | 컴포넌트 | 설명 |
| :---: | :---: | :---: |
| ✅ | Button | 버튼 |
|  | ButtonGroup | 버튼 그룹 |
| ✅ | Select | 셀렉트 드롭다운 |
|  | CheckBox | 체크박스 |
|  | RadioGroup | 라디오 그룹 |
|  | Slider | 슬라이더 |
|  | TimeSlider | 시간 슬라이더 |
|  | Switch | 스위치 |
|  | TextField | 텍스트 필드 |
|  | Table | 테이블 |
|  | Progress | 프로그레스 바  |
|  | Accordion | 아코디언 |
|  | Pagination | 페이지네이션 |
|  | MapLegend | 지도 범례 |

### 베타 기능 이후 제작 예정

| 제작여부 | 컴포넌트 | 설명 |
| :---: | :---: | :---: |
|  | Skeleton | 스켈레톤 - |
|  | Tooltip | 툴팁 |
|  | Alert | 알림 |