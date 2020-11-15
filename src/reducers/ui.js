import * as types from '../actions/ActionTypes'

const initialState = {
    color: [255,255,255]
}
// 리듀서는 변화를 일으키는 함수
// 액션생성자가 액션을 만들면 디스패치를 통해 리듀서 인자로 전달받음음
// 액션 타입에 따라  어떤일을 할지
export default  function ui(state=initialState,action) {
 if(action.type === types.SET_COLOR){
     return{
         //새로운 객체를 만들어서 반환 컬러의 값은 액션에서 갖구 온다
         color:action.color
     }

 }else{
     return state;
 }
}