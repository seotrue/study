import React, {Component, PropTypes} from 'react';

// prop의 데이터 타입을 나열 해준다
const propTypes ={
    number :PropTypes.number
}

// prop의 디폴트 값을 설정
const defaultProps ={
    number : -1
}

class Value extends Component {
    render() {
        return(
            <div>
                <h1>{this.props.number}</h1>
            </div>
        )
    }
}

Value.propTypes = propTypes;
Value.defaultProps = defaultProps;

export default Value