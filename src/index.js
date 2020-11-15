import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {createStore} from 'redux'
import reducers from "./reducers";
import * as action from './actions'
//import {acttion} from "@testing-library/react";
import {Provider} from 'react-redux'
const store = createStore(reducers)// 스토어 생성
console.log(store.getState()) // 현재의 상태를 갑고옴
//store.subscribe(()=>console.log(store.getState()))// 변화를 할때마다 이 롤백 함수ㅡㄹ 실행
//store.dispatch(action.increment())// 이 액선 생성자 action.increment()를 실행하면 하나의 액션으로 반환 그걸 디스패치 함수를 통해서 전달 을 함

// 디스패치 액션 : 액션을 리듀서로 보낸다
// 디스ㅐ치가 실행되면 현재 자신의 상태와 방금 전달반은 액션을 리듀서에거 전달
// 그럼 리듀서가 어떤변화가 잇는지 파악후 새로운걸 반환
ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>

          <App />
      </Provider>

  </React.StrictMode>,
  document.getElementById('root')
);


