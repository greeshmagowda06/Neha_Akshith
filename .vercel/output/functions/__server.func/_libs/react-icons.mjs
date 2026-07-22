import { r as __toESM } from "../_runtime.mjs";
import { r as require_react } from "./react+tanstack__react-query.mjs";
//#region node_modules/react-icons/lib/iconContext.mjs
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var DefaultContext = {
	color: void 0,
	size: void 0,
	className: void 0,
	style: void 0,
	attr: void 0
};
var IconContext = import_react.createContext && /*#__PURE__*/ import_react.createContext(DefaultContext);
//#endregion
//#region node_modules/react-icons/lib/iconBase.mjs
var _excluded = [
	"attr",
	"size",
	"title"
];
function _objectWithoutProperties(e, t) {
	if (null == e) return {};
	var o, r, i = _objectWithoutPropertiesLoose(e, t);
	if (Object.getOwnPropertySymbols) {
		var n = Object.getOwnPropertySymbols(e);
		for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
	}
	return i;
}
function _objectWithoutPropertiesLoose(r, e) {
	if (null == r) return {};
	var t = {};
	for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
		if (-1 !== e.indexOf(n)) continue;
		t[n] = r[n];
	}
	return t;
}
function _extends() {
	return _extends = Object.assign ? Object.assign.bind() : function(n) {
		for (var e = 1; e < arguments.length; e++) {
			var t = arguments[e];
			for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
		}
		return n;
	}, _extends.apply(null, arguments);
}
function ownKeys(e, r) {
	var t = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var o = Object.getOwnPropertySymbols(e);
		r && (o = o.filter(function(r) {
			return Object.getOwnPropertyDescriptor(e, r).enumerable;
		})), t.push.apply(t, o);
	}
	return t;
}
function _objectSpread(e) {
	for (var r = 1; r < arguments.length; r++) {
		var t = null != arguments[r] ? arguments[r] : {};
		r % 2 ? ownKeys(Object(t), !0).forEach(function(r) {
			_defineProperty(e, r, t[r]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r) {
			Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
		});
	}
	return e;
}
function _defineProperty(e, r, t) {
	return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
		value: t,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[r] = t, e;
}
function _toPropertyKey(t) {
	var i = _toPrimitive(t, "string");
	return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive(t, r) {
	if ("object" != typeof t || !t) return t;
	var e = t[Symbol.toPrimitive];
	if (void 0 !== e) {
		var i = e.call(t, r || "default");
		if ("object" != typeof i) return i;
		throw new TypeError("@@toPrimitive must return a primitive value.");
	}
	return ("string" === r ? String : Number)(t);
}
function Tree2Element(tree) {
	return tree && tree.map((node, i) => /*#__PURE__*/ import_react.createElement(node.tag, _objectSpread({ key: i }, node.attr), Tree2Element(node.child)));
}
function GenIcon(data) {
	return (props) => /*#__PURE__*/ import_react.createElement(IconBase, _extends({ attr: _objectSpread({}, data.attr) }, props), Tree2Element(data.child));
}
function IconBase(props) {
	var elem = (conf) => {
		var attr = props.attr, size = props.size, title = props.title, svgProps = _objectWithoutProperties(props, _excluded);
		var computedSize = size || conf.size || "1em";
		var className;
		if (conf.className) className = conf.className;
		if (props.className) className = (className ? className + " " : "") + props.className;
		return /*#__PURE__*/ import_react.createElement("svg", _extends({
			stroke: "currentColor",
			fill: "currentColor",
			strokeWidth: "0"
		}, conf.attr, attr, svgProps, {
			className,
			style: _objectSpread(_objectSpread({ color: props.color || conf.color }, conf.style), props.style),
			height: computedSize,
			width: computedSize,
			xmlns: "http://www.w3.org/2000/svg"
		}), title && /*#__PURE__*/ import_react.createElement("title", null, title), props.children);
	};
	return IconContext !== void 0 ? /*#__PURE__*/ import_react.createElement(IconContext.Consumer, null, (conf) => elem(conf)) : elem(DefaultContext);
}
//#endregion
//#region node_modules/react-icons/fi/index.mjs
function FiMapPin(props) {
	return GenIcon({
		"tag": "svg",
		"attr": {
			"viewBox": "0 0 24 24",
			"fill": "none",
			"stroke": "currentColor",
			"strokeWidth": "2",
			"strokeLinecap": "round",
			"strokeLinejoin": "round"
		},
		"child": [{
			"tag": "path",
			"attr": { "d": "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" },
			"child": []
		}, {
			"tag": "circle",
			"attr": {
				"cx": "12",
				"cy": "10",
				"r": "3"
			},
			"child": []
		}]
	})(props);
}
function FiHeart(props) {
	return GenIcon({
		"tag": "svg",
		"attr": {
			"viewBox": "0 0 24 24",
			"fill": "none",
			"stroke": "currentColor",
			"strokeWidth": "2",
			"strokeLinecap": "round",
			"strokeLinejoin": "round"
		},
		"child": [{
			"tag": "path",
			"attr": { "d": "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" },
			"child": []
		}]
	})(props);
}
function FiCalendar(props) {
	return GenIcon({
		"tag": "svg",
		"attr": {
			"viewBox": "0 0 24 24",
			"fill": "none",
			"stroke": "currentColor",
			"strokeWidth": "2",
			"strokeLinecap": "round",
			"strokeLinejoin": "round"
		},
		"child": [
			{
				"tag": "rect",
				"attr": {
					"x": "3",
					"y": "4",
					"width": "18",
					"height": "18",
					"rx": "2",
					"ry": "2"
				},
				"child": []
			},
			{
				"tag": "line",
				"attr": {
					"x1": "16",
					"y1": "2",
					"x2": "16",
					"y2": "6"
				},
				"child": []
			},
			{
				"tag": "line",
				"attr": {
					"x1": "8",
					"y1": "2",
					"x2": "8",
					"y2": "6"
				},
				"child": []
			},
			{
				"tag": "line",
				"attr": {
					"x1": "3",
					"y1": "10",
					"x2": "21",
					"y2": "10"
				},
				"child": []
			}
		]
	})(props);
}
//#endregion
//#region node_modules/react-icons/gi/index.mjs
function GiLotus(props) {
	return GenIcon({
		"tag": "svg",
		"attr": { "viewBox": "0 0 512 512" },
		"child": [{
			"tag": "path",
			"attr": { "d": "M254.963 40.213c-37.634 31.356-62.038 67.976-77.916 109.394 8.544 12.5 16.607 25.44 24.228 38.594 15.642-5.553 32.468-8.587 49.995-8.587 17.886 0 35.046 3.156 50.96 8.93 9.07-14.52 18.652-28.856 28.89-42.66-15.736-38.504-39.406-74.025-76.157-105.67zM434.593 72.5c-46.74 28.5-83.334 74.49-114.616 123.826 21.934 11.372 40.696 28.023 54.636 48.244 23.212-22.514 48.206-44.643 75.58-66.82-.882-31.955-5.798-67.033-15.6-105.25zm-353.03 1.094c-9.435 37.96-14.433 72.695-15.74 104.27 23.62 20.078 45.453 40.406 65.78 61.603 13.77-18.29 31.614-33.345 52.194-43.774-28.336-48.245-62.472-92.77-102.234-122.1zm-54.59 96.7C9.708 278.34 31.295 358.165 72.27 411.517c22.427 29.2 50.77 50.62 82.128 64.363-20.892-35.934-25.973-76.777-16.613-116.112 4.668-19.617 12.848-38.864 24.274-57.09-38.14-48.11-82.083-90.01-135.087-132.383zm462.588.464c-59.87 45.918-108.408 90.682-151.36 138.615 9.625 17.744 16.24 36.16 19.722 54.732 7.08 37.78 1.012 76.134-18.31 109.926 32.2-14.254 62.005-35.988 86.51-65.214 44.98-53.64 72.394-132.675 63.44-238.058zM251.27 198.3c-44.09 0-83.025 21.667-106.764 54.954 9.898 10.856 19.428 21.973 28.64 33.42 18.55-24.415 43.224-46.48 73.372-64.422l5.072-3.02 4.906 3.286c30.383 20.345 54.374 44.323 71.65 70.185 10.638-11.774 21.61-23.376 33.012-34.85-23.354-35.875-63.803-59.552-109.888-59.552zm-.268 43.182c-51.58 32.272-84.19 77.032-95.035 122.612-10.94 45.97-.302 92.658 35.986 130.607h108.904c34.806-36.38 47.222-81.652 38.696-127.15-8.466-45.177-37.988-90.634-88.55-126.068z" },
			"child": []
		}]
	})(props);
}
function GiIndianPalace(props) {
	return GenIcon({
		"tag": "svg",
		"attr": { "viewBox": "0 0 512 512" },
		"child": [{
			"tag": "path",
			"attr": { "d": "M256 27.88c-8.97 10.574-20.842 21.506-33.637 33.347-16.767 15.515-34.995 32.31-49.45 49.656-14.453 17.345-24.872 35.13-27.25 51.994-2.265 16.054 1.912 31.8 18.275 49.244h184.125c16.362-17.444 20.54-33.19 18.275-49.243-2.38-16.865-12.798-34.65-27.252-51.994-14.454-17.345-32.682-34.14-49.45-49.656C276.843 49.387 264.97 38.454 256 27.88zM32 68.12c-16 16-16 32-16 48h7v71h-7v18h7v279h18v-279h7v-18h-7v-71h7c0-16 0-32-16-48zm448 0c-16 16-16 32-16 48h7v71h-7v18h7v279h18v-279h7v-18h-7v-71h7c0-16 0-32-16-48zm-368 137c-16 16-32 32-32 48v23h64v-23c0-16-16-32-32-48zm288 0c-16 16-32 32-32 48v23h64v-23c0-16-16-32-32-48zm-231 25v14h174v-14zm0 32v222h39v-135c0-16 32-48 48-64 16 16 48 48 48 64v135h39v-222zm-96 32v190h78v-190zm288 0v190h78v-190zm-249 7s16 8.234 16 16v32H96v-32c0-7.766 16-16 16-16zm288 5.464s16 8.233 16 16v32h-32v-32c0-7.767 16-16 16-16zM112 365.12s16 8.234 16 16v32H96v-32c0-7.766 16-16 16-16zm288 0s16 8.234 16 16v32h-32v-32c0-7.766 16-16 16-16zm-288 64s16 8.234 16 16v32H96v-32c0-7.766 16-16 16-16zm288 0s16 8.234 16 16v32h-32v-32c0-7.766 16-16 16-16z" },
			"child": []
		}]
	})(props);
}
//#endregion
export { FiMapPin as a, FiHeart as i, GiLotus as n, FiCalendar as r, GiIndianPalace as t };
