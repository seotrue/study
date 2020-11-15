import * as types from '../actions/ActionTypes'

const initialState = {
    number : 0,
    dumbObject :{
        d:0,
        u:1,
        m:2,
        b:3
    }
}
// 이전 상태와 액션을 받는다

export default function counter(state=initialState,action) {
    switch (action.type) {
        case types.INCREMENT:
            return{
                ...state,// 기존 스테이들 값들이 복사한것 //기존 거를 갖고와서 푼다 그리고  number, u:0} 로 변경된건 덮어쓴다  기존거를 안갖고 오면 그냥
                number: state.number +1,
                dumbObjec :{...state.dumbObjec, u:0}
            } // 기존 거를 갖고와서 푼다 그리고 u:0만 변경해준다

        case types.DECREMENT:
            return {
                ...state,
                number: state.number - 1
            };
        default:
            return state;
    }
}