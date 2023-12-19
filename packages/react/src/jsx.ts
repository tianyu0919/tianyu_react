import { REACT_ELEMENT_TYPE } from 'shared/ReactSymbols';
import {
	type Key,
	type Ref,
	type Props,
	type Type,
	type ReactElement,
	type ElementType
} from 'shared/ReactTypes';

// * ReactElement 类型定义
const ReactElement = function (
	type: Type,
	key: Key,
	ref: Ref,
	props: Props
): ReactElement {
	const element = {
		$$typeof: REACT_ELEMENT_TYPE,
		type,
		key,
		ref,
		props,
		__mark: 'Tianyu'
	};

	return element;
};

export const jsx = function (
	type: ElementType,
	config: any,
	...maybeChildren: any
) {
	let key = null;
	const props: Props = {};
	let ref: Ref = null;

	for (const prop in config) {
		const val = config[prop];
		if (prop === 'key') {
			if (prop !== undefined) {
				key = '' + val;
			}
			continue;
		}
		if (prop === 'ref') {
			if (prop !== undefined) {
				ref = val;
			}
			continue;
		}
		if ({}.hasOwnProperty.call(config, prop)) {
			props[prop] = val;
		}
	}

	const maybeChildrenLength = maybeChildren.length;
	if (maybeChildrenLength) {
		// * 两种情况
		// * children [children, children, children]
		if (maybeChildrenLength === 1) {
			props.children = maybeChildren[0];
		} else {
			props.children = maybeChildren;
		}
	}

	return ReactElement(type, key, ref, props);
};

export const jsxDEV = jsx;
