/*
 * @Author: 卢天宇
 * @Date: 2023-12-19 22:39:18
 * @Description: 类型定义
 */
// * 类型定义

export type Type = any;
export type Key = any;
export type Ref = any;
export type Props = any;
export type ElementType = any;

export interface ReactElement {
	$$typeof: symbol | number;
	type: ElementType;
	key: Key;
	props: Props;
	ref: Ref;
	__mark: string;
}
