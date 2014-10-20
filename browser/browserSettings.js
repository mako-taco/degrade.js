var IE8 = {
	Object: {
		whitelist: {
			props: [
				'defineProperty',
				'getOwnPropertyDescriptor'
			],
		},
		prototype: {
			whitelist: [
				'constructor',
				'hasOwnProperty',
				'isPrototypeOf',
				'propertyIsEnumerable',
				'toLocaleString',
				'toString',
				'valueOf'
			]
		}
	},
	Array: {
		whitelist: {
			props: [],
		},
		prototype: {
			props: [
				'concat',
				'join',
				'length',
				'slice',
				'sort',
				'pop',
				'push',
				'reverse',
				'shift',
				'unshift'
			]
		}
	},
	Date: {
		whitelist: {
			props: [
				'UTC',
				'length',
				'parse'
			]
		},
		prototype: {
			blacklist: [
				'toISOString'
			]
		}
	},
	String: {
		blacklist: [],
		prototype: {
			blacklist: [
				'trim'
			]
		}
	},
	Number: {
		blacklist: [],
		prototype: {
			blacklist: []
		}
	},
	Function: {
		blacklist: [],
		prototype: {
			blacklist: [
				'bind'
			]
		}
	},
	JSON: {
		blacklist: [],
		prototype: {
			blacklist: []
		}
	},
	Event: {
		blacklist: [],
		prototype: {
			blacklist: [
				'preventDefault'
			]
		}
	},
	Error: {
		blacklist: [],
		prototype: {
			blacklist: []
		}
	},
	window: {
		whitelist: [
			'unescape',
			'Infinity',
			'SyntaxError',
			'Math',
			'Date',
			'document',
			'Number',
			'eval',
			'encodeURI',
			'Boolean',
			'Error',
			'RangeError',
			'URIError',
			'external',
			'isFinite',
			'TypeError',
			'isNaN',
			'decodeURIComponent',
			'decodeURI',
			'parseFloat',
			'parseInt',
			'escape',
			'String',
			'Function',
			'Object',
			'EvalError',
			'NaN',
			'Array',
			'top',
			'RegExp',
			'JSON',
			'location',
			'window',
			'ReferenceError',
			'encodeURIComponent',
			'localStorage',
			'sessionStorage',
			'XMLHttpRequest',
			'Window',
			'Text',
			'StyleSheetList',
			'Storage',
			'Selection',
			'Screen',
			'NodeList',
			'Navigator',
			'NamedNodeMap',
			'Location',
			'History',
			'HTMLUnknownElement',
			'HTMLUListElement',
			'HTMLTitleElement',
			'HTMLTextAreaElement',
			'HTMLTableSectionElement',
			'HTMLTableRowElement',
			'HTMLTableElement',
			'HTMLTableColElement',
			'HTMLTableCellElement',
			'HTMLTableCaptionElement',
			'HTMLStyleElement',
			'HTMLSpanElement',
			'HTMLSelectElement',
			'HTMLScriptElement',
			'HTMLParamElement',
			'HTMLParagraphElement',
			'Option',
			'HTMLOptionElement',
			'HTMLObjectElement',
			'HTMLOListElement',
			'HTMLMetaElement',
			'HTMLMarqueeElement',
			'HTMLMapElement',
			'HTMLLinkElement',
			'HTMLLegendElement',
			'HTMLLabelElement',
			'HTMLLIElement',
			'HTMLInputElement',
			'Image',
			'HTMLImageElement',
			'HTMLIFrameElement',
			'HTMLHtmlElement',
			'HTMLHeadingElement',
			'HTMLHeadElement',
			'HTMLHRElement',
			'HTMLFrameSetElement',
			'HTMLFrameElement',
			'HTMLFormElement',
			'HTMLFontElement',
			'HTMLFieldSetElement',
			'HTMLEmbedElement',
			'HTMLDocument',
			'HTMLDivElement',
			'HTMLDListElement',
			'HTMLCollection',
			'HTMLButtonElement',
			'HTMLBodyElement',
			'HTMLBaseElement',
			'HTMLBRElement',
			'HTMLAreaElement',
			'HTMLAnchorElement',
			'Event',
			'Element',
			'DataTransfer',
			'DOMImplementation',
			'CSSStyleSheet',
			'CSSStyleRule',
			'CSSStyleDeclaration',
			'CSSRuleList',
			'Attr',
			'console',
			'parent',
			'frames',
			'self',
			'defaultStatus',
			'status',
			'name',
			'length',
			'closed',
			'screenTop',
			'screenLeft',
			'offscreenBuffering',
			'frameElement',
			'event',
			'clientInformation',
			'navigator',
			'history',
			'screen'
		]
	}
};

module.exports = {
	IE8: IE8
};