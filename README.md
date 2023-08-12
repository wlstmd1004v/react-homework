# React Homework

**주제** : Figma를 사용해 아토믹(atomic) 컴포넌트를 설계(design)한 후, 리액트 컴포넌트로 구현합니다.

[Figma](https://www.figma.com/file/yrqOJbPBtbpgyGGRfuvl3y/%EC%95%84%ED%86%A0%EB%AF%B9-%EB%94%94%EC%9E%90%EC%9D%B8?type=design&node-id=0-1&mode=design&t=N2topnr0cuvdqXDE-0)

## Structure
- main.jsx
```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import EUID from './components/EUID'
import SeulbinimButton from './components/seulbinim';
import BeomButton from './components/beom'
import YamooButton from './components/yamoo9';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <EUID />
    <SeulbinimButton />
    <BeomButton />
    <YamooButton />
  </React.StrictMode>,
)

```

## RESULT
![result](https://github.com/wlstmd1004v/react-homework/assets/111503649/395d4d50-e04f-4d91-bfa7-1f6353ce5f6e)





다음번에는 버튼을 클릭시 변경되게 구현할 생각입니다