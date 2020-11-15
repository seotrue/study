import React, { Component} from "react";
import Value  from "./Value";
import Control from "./Control";
import {connect} from 'react-redux'

import * as actions from '../actions';
// 스토어는 어플리케이션의 현재 상태를 지니고 잇음

//creatStore의 인수로 리듀서로
class Counter extends Component{
    constructor(props) {
        super(props);
        this.setRandomColor = this.setRandomColor.bind(this);
    }
    setRandomColor() {
        const color = [
            Math.floor((Math.random()*55) + 200),
            Math.floor((Math.random()*55) + 200),
            Math.floor((Math.random()*55) + 200)
        ];

        this.props.handleSetColor(color);
    }

    render() {
        const color = this.props.color;
        const style = {
            background: `rgb(${color[0]}, ${color[1]}, ${color[2]})`
        };

        return(
            <div style={style}>
                <Value number={this.props.number}/>
                <Control
                    onPlus={this.props.handleIncrement}
                    onSubtract={this.props.handleDecrement}
                    onRandomizeColor={this.setRandomColor}
                />
            </div>
        );
    }

}

// 리덕스 스테이트 안에 잇는걸 해당 컴포넌트의 프랍스와 매핑해준다 인수의 스테이트는 리덕스의 스테이트를 말함
const mapStateToProps = (state) => {
    return {
        // 프랍스 : 리덕스의 스테이트 값
        number: state.counter.number,
        color: state.ui.color
    };
};

// 디스패치응인수로 받구
const mapDispatchToProps = (dispatch) => {
    //return bindActionCreators(actions, dispatch);
    return {
        // 액션을 디스배치를 받는 함수를 프랍수 로 연결

        handleIncrement: () => { dispatch(actions.increment())},
        handleDecrement: () => { dispatch(actions.decrement())},
        handleSetColor: (color) => { dispatch(actions.setColor(color))}
    };
};


// connet 카운터라는컴포넌트가 리더스에 연결되어 새로운 컴포넌트를 반환
export default connect(mapStateToProps, mapDispatchToProps)(Counter);

