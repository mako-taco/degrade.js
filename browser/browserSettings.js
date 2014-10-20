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
			whitelist: [
				'toDateString',
				'toTimeString',
				'toLocaleString',
				'toLocaleDateString',
				'toLocaleTimeString',
				'getTime',
				'getFullYear',
				'getUTCFullYear',
				'getMonth',
				'getUTCMonth',
				'getDate',
				'getUTCDate',
				'getDay',
				'getUTCDay',
				'getHours',
				'getUTCHours',
				'getMinutes',
				'getUTCMinutes',
				'getSeconds',
				'getUTCSeconds',
				'getMilliseconds',
				'getUTCMilliseconds',
				'getTimezoneOffset',
				'setTime',
				'setMilliseconds',
				'setUTCMilliseconds',
				'setSeconds',
				'setUTCSeconds',
				'setMinutes',
				'setUTCMinutes',
				'setHours',
				'setUTCHours',
				'setDate',
				'setUTCDate',
				'setMonth',
				'setUTCMonth',
				'setFullYear',
				'setUTCFullYear',
				'toGMTString',
				'toUTCString',
				'getYear',
				'setYear',
				'toJSON'
			]
		}
	},
	String: {
		whitelist: [
			'length',
			'fromCharCode'
		],
		prototype: {
			whitelist: [
				'length',
				'constructor',
				'valueOf',
				'toString',
				'charAt',
				'charCodeAt',
				'concat',
				'indexOf',
				'lastIndexOf',
				'localeCompare',
				'match',
				'replace',
				'search',
				'slice',
				'split',
				'substring',
				'substr',
				'toLowerCase',
				'toLocaleLowerCase',
				'toUpperCase',
				'toLocaleUpperCase',
				'link',
				'anchor',
				'fontcolor',
				'fontsize',
				'big',
				'blink',
				'bold',
				'fixed',
				'italics',
				'small',
				'strike',
				'sub',
				'sup'
			]
		}
	},
	Number: {
		whitelist: [
			'length',
			'MAX_VALUE',
			'MIN_VALUE',
			'NaN',
			'NEGATIVE_INFINITY',
			'POSITIVE_INFINITY'
		],
		prototype: {
			whitelist: [
				'toFixed',
				'toExponential',
				'toPrecision'
			]
		}
	},
	Function: {
		blacklist: [],
		prototype: {
			whitelist: [
				'length',
				'constructor',
				'toString',
				'call',
				'apply'
			]
		}
	},
	JSON: {
		blacklist: [],
		prototype: {
			blacklist: []
		}
	},
	//@TODO this is going to be a big project
	Event: {
		blacklist: [
			'toString'
		],
		prototype: {
			blacklist: []
		}
	},
	Error: {
		whitelist: [],
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