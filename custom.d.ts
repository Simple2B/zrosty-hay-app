declare module '*.svg' {
	const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
	export default content;
}

declare module '*.jpg' {
	const value: any;
	export = value;
}

declare module '*.png' {
	const value: any;
	export = value;
}
