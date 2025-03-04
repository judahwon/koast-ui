# KOAST UI

한국해양기상기술을 위한 **React UI 라이브러리**입니다.

작은 단위의 ui부터 프로젝트에 꼭 필요한 Slider, Legend 등 제작할 예정입니다.
일정 수준 만들어지면, 문서화 및 테스트 코드 작성하겠습니다. (storybook 적용 예정)

기존에는 [http://10.2.10.79:4873](http://10.2.10.79:4873)에 [Verdaccio](https://verdaccio.org/)를 구축하여 진행했습니다만, 그렇게 진행할 필요가 없어서 npmjs.org에 직접 배포하는 방식으로 변경하였습니다.

- `Publish` 권한이 필요한 경우, `judahwon`에게 요청해주시기 바랍니다.

## 환경

- node >= 20
- npm >= 9
- react >= 18 (권장 >= 19)
- typescript >= 5
- tailwindcss >= 3
- eslint >= 9
- vite >= 5

## 프로젝트 실행 방법

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

## 프로젝트에서 @koast/ui 사용 방법

### 1. 패키지 설치

```bash
npm install @koast/ui --save-dev
```

### 3. 패키지 사용

```tsx
import { Button } from "@koast/ui";

const App = () => {
  return <Button>Click me</Button>;
};

export default App;
```