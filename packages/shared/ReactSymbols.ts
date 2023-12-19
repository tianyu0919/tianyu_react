// * 判断当前的环境是否支持Symbol
const supperSymbol = typeof Symbol === 'function' && Symbol.for;

// * 如果支持symbol，就使用symbol，否则使用16进制
export const REACT_ELEMENT_TYPE = supperSymbol
	? Symbol.for('react.element')
	: 0xeac7;
