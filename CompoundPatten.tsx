import { createContext, useContext, useState } from 'react';
import { isNull } from 'lodash';

type CountContextType = {
	increase: () => void;
	decrease: () => void;
	count: number;
} | null;
const CountContext = createContext<CountContextType>(null);

// parents component
function Counter({ children }) {
	const [count, setCount] = useState(0);

	const increase = () => setCount((prev) => prev + 1);
	const decrease = () => setCount((prev) => prev - 1);

	return <CountContext.Provider value={{ count, increase, decrease }}>{children}</CountContext.Provider>;
}

// child component
function Count() {
	const count = !isNull(CountContext) ? useContext<CountContextType>(CountContext)?.count : 0;
	return <span>{count}</span>;
}

function Increase({ icon }) {
	const increase = !isNull(CountContext) ? useContext(CountContext)?.increase : () => {};
	return <button onClick={increase}>{icon}</button>;
}

function Decrease({ icon }) {
	const decrease = !isNull(CountContext) ? useContext(CountContext)?.decrease : () => {};
	return <button onClick={decrease}>{icon}</button>;
}

// 자식 컴포넌트를 부모 컴포넌의 프로퍼티로 연결
Counter.Count = Count;
Counter.Increase = Increase;
Counter.Decrease = Decrease;
