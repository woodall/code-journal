var window_functions = [
"AbortController",
"AbortSignal",
"AbsoluteOrientationSensor",
"Accelerometer",
"AnalyserNode",
"AnimationEvent",
"ApplicationCache",
"ApplicationCacheErrorEvent",
"Array",
"ArrayBuffer",
"Attr",
"Audio",
"AudioBuffer",
"AudioBufferSourceNode",
"AudioContext",
"AudioDestinationNode",
"AudioListener",
"AudioNode",
"AudioParam",
"AudioParamMap",
"AudioProcessingEvent",
"AudioScheduledSourceNode",
"AudioWorklet",
"AudioWorkletNode",
"AuthenticatorAssertionResponse",
"AuthenticatorAttestationResponse",
"AuthenticatorResponse",
"BackgroundFetchManager",
"BackgroundFetchRecord",
"BackgroundFetchRegistration",
"BarProp",
"BaseAudioContext",
"BatteryManager",
"BeforeInstallPromptEvent",
"BeforeUnloadEvent",
"BigInt",
"BigInt64Array",
"BigUint64Array",
"BiquadFilterNode",
"Blob",
"BlobEvent",
"Bluetooth",
"BluetoothCharacteristicProperties",
"BluetoothDevice",
"BluetoothRemoteGATTCharacteristic",
"BluetoothRemoteGATTDescriptor",
"BluetoothRemoteGATTServer",
"BluetoothRemoteGATTService",
"BluetoothUUID",
"Boolean",
"BroadcastChannel",
"ByteLengthQueuingStrategy",
"CDATASection",
"CSS",
"CSSConditionRule",
"CSSFontFaceRule",
"CSSGroupingRule",
"CSSImageValue",
"CSSImportRule",
"CSSKeyframeRule",
"CSSKeyframesRule",
"CSSKeywordValue",
"CSSMathInvert",
"CSSMathMax",
"CSSMathMin",
"CSSMathNegate",
"CSSMathProduct",
"CSSMathSum",
"CSSMathValue",
"CSSMatrixComponent",
"CSSMediaRule",
"CSSNamespaceRule",
"CSSNumericArray",
"CSSNumericValue",
"CSSPageRule",
"CSSPerspective",
"CSSPositionValue",
"CSSRotate",
"CSSRule",
"CSSRuleList",
"CSSScale",
"CSSSkew",
"CSSSkewX",
"CSSSkewY",
"CSSStyleDeclaration",
"CSSStyleRule",
"CSSStyleSheet",
"CSSStyleValue",
"CSSSupportsRule",
"CSSTransformComponent",
"CSSTransformValue",
"CSSTranslate",
"CSSUnitValue",
"CSSUnparsedValue",
"CSSVariableReferenceValue",
"Cache",
"CacheStorage",
"CanvasCaptureMediaStreamTrack",
"CanvasGradient",
"CanvasPattern",
"CanvasRenderingContext2D",
"ChannelMergerNode",
"ChannelSplitterNode",
"CharacterData",
"Clipboard",
"ClipboardEvent",
"CloseEvent",
"Comment",
"CompositionEvent",
"ConstantSourceNode",
"ConvolverNode",
"CountQueuingStrategy",
"Credential",
"CredentialsContainer",
"Crypto",
"CryptoKey",
"CustomElementRegistry",
"CustomEvent",
"DOMError",
"DOMException",
"DOMImplementation",
"DOMMatrix",
"DOMMatrixReadOnly",
"DOMParser",
"DOMPoint",
"DOMPointReadOnly",
"DOMQuad",
"DOMRect",
"DOMRectList",
"DOMRectReadOnly",
"DOMStringList",
"DOMStringMap",
"DOMTokenList",
"DataTransfer",
"DataTransferItem",
"DataTransferItemList",
"DataView",
"Date",
"DelayNode",
"DeviceMotionEvent",
"DeviceMotionEventAcceleration",
"DeviceMotionEventRotationRate",
"DeviceOrientationEvent",
"Document",
"DocumentFragment",
"DocumentType",
"DragEvent",
"DynamicsCompressorNode",
"Element",
"EnterPictureInPictureEvent",
"Error",
"ErrorEvent",
"EvalError",
"Event",
"EventSource",
"EventTarget",
"External",
"FederatedCredential",
"File",
"FileList",
"FileReader",
"Float32Array",
"Float64Array",
"FocusEvent",
"FontFace",
"FontFaceSetLoadEvent",
"FormData",
"Function",
"GainNode",
"Gamepad",
"GamepadButton",
"GamepadEvent",
"GamepadHapticActuator",
"Gyroscope",
"HTMLAllCollection",
"HTMLAnchorElement",
"HTMLAreaElement",
"HTMLAudioElement",
"HTMLBRElement",
"HTMLBaseElement",
"HTMLBodyElement",
"HTMLButtonElement",
"HTMLCanvasElement",
"HTMLCollection",
"HTMLContentElement",
"HTMLDListElement",
"HTMLDataElement",
"HTMLDataListElement",
"HTMLDetailsElement",
"HTMLDialogElement",
"HTMLDirectoryElement",
"HTMLDivElement",
"HTMLDocument",
"HTMLElement",
"HTMLEmbedElement",
"HTMLFieldSetElement",
"HTMLFontElement",
"HTMLFormControlsCollection",
"HTMLFormElement",
"HTMLFrameElement",
"HTMLFrameSetElement",
"HTMLHRElement",
"HTMLHeadElement",
"HTMLHeadingElement",
"HTMLHtmlElement",
"HTMLIFrameElement",
"HTMLImageElement",
"HTMLInputElement",
"HTMLLIElement",
"HTMLLabelElement",
"HTMLLegendElement",
"HTMLLinkElement",
"HTMLMapElement",
"HTMLMarqueeElement",
"HTMLMediaElement",
"HTMLMenuElement",
"HTMLMetaElement",
"HTMLMeterElement",
"HTMLModElement",
"HTMLOListElement",
"HTMLObjectElement",
"HTMLOptGroupElement",
"HTMLOptionElement",
"HTMLOptionsCollection",
"HTMLOutputElement",
"HTMLParagraphElement",
"HTMLParamElement",
"HTMLPictureElement",
"HTMLPreElement",
"HTMLProgressElement",
"HTMLQuoteElement",
"HTMLScriptElement",
"HTMLSelectElement",
"HTMLShadowElement",
"HTMLSlotElement",
"HTMLSourceElement",
"HTMLSpanElement",
"HTMLStyleElement",
"HTMLTableCaptionElement",
"HTMLTableCellElement",
"HTMLTableColElement",
"HTMLTableElement",
"HTMLTableRowElement",
"HTMLTableSectionElement",
"HTMLTemplateElement",
"HTMLTextAreaElement",
"HTMLTimeElement",
"HTMLTitleElement",
"HTMLTrackElement",
"HTMLUListElement",
"HTMLUnknownElement",
"HTMLVideoElement",
"HashChangeEvent",
"Headers",
"History",
"IDBCursor",
"IDBCursorWithValue",
"IDBDatabase",
"IDBFactory",
"IDBIndex",
"IDBKeyRange",
"IDBObjectStore",
"IDBOpenDBRequest",
"IDBRequest",
"IDBTransaction",
"IDBVersionChangeEvent",
"IIRFilterNode",
"IdleDeadline",
"Image",
"ImageBitmap",
"ImageBitmapRenderingContext",
"ImageCapture",
"ImageData",
"InputDeviceCapabilities",
"InputDeviceInfo",
"InputEvent",
"Int8Array",
"Int16Array",
"Int32Array",
"IntersectionObserver",
"IntersectionObserverEntry",
  getCanonicalLocales: ƒ,
DateTimeFormat: ƒ,
NumberFormat: ƒ,
Collator: ƒ,
v8BreakIterator: ƒ, …}JSON: JSON {
  parse: ƒ,
stringify: ƒ, Symbol(Symbol.toStringTag): "JSON"}
"Keyboard",
"KeyboardEvent",
"KeyboardLayoutMap",
"LinearAccelerationSensor",
"Location",
"Lock",
"LockManager",
"MIDIAccess",
"MIDIConnectionEvent",
"MIDIInput",
"MIDIInputMap",
"MIDIMessageEvent",
"MIDIOutput",
"MIDIOutputMap",
"MIDIPort",
"Map",
  abs: ƒ,
acos: ƒ,
acosh: ƒ,
asin: ƒ,
asinh: ƒ, …}
"MediaCapabilities",
"MediaDeviceInfo",
"MediaDevices",
"MediaElementAudioSourceNode",
"MediaEncryptedEvent",
"MediaError",
"MediaKeyMessageEvent",
"MediaKeySession",
"MediaKeyStatusMap",
"MediaKeySystemAccess",
"MediaKeys",
"MediaList",
"MediaMetadata",
"MediaQueryList",
"MediaQueryListEvent",
"MediaRecorder",
"MediaSession",
"MediaSettingsRange",
"MediaSource",
"MediaStream",
"MediaStreamAudioDestinationNode",
"MediaStreamAudioSourceNode",
"MediaStreamEvent",
"MediaStreamTrack",
"MediaStreamTrackEvent",
"MessageChannel",
"MessageEvent",
"MessagePort",
"MimeType",
"MimeTypeArray",
"MouseEvent",
"MutationEvent",
"MutationObserver",
"MutationRecord",
"NaNNamedNodeMap",
"NavigationPreloadManager",
"Navigator",
"NetworkInformation",
"Node",
"NodeFilter",
"NodeIterator",
"NodeList",
"Notification",
"Number",
"Object",
"OfflineAudioCompletionEvent",
"OfflineAudioContext",
"OffscreenCanvas",
"OffscreenCanvasRenderingContext2D",
"Option",
"OrientationSensor",
"OscillatorNode",
"OverconstrainedError",
"PageTransitionEvent",
"PannerNode",
"PasswordCredential",
"Path2D",
"PaymentAddress",
"PaymentInstruments",
"PaymentManager",
"PaymentRequest",
"PaymentRequestUpdateEvent",
"PaymentResponse",
"Performance",
"PerformanceEntry",
"PerformanceLongTaskTiming",
"PerformanceMark",
"PerformanceMeasure",
"PerformanceNavigation",
"PerformanceNavigationTiming",
"PerformanceObserver",
"PerformanceObserverEntryList",
"PerformancePaintTiming",
"PerformanceResourceTiming",
"PerformanceServerTiming",
"PerformanceTiming",
"PeriodicWave",
"PermissionStatus",
"Permissions",
"PhotoCapabilities",
"PictureInPictureWindow",
"Plugin",
"PluginArray",
"PointerEvent",
"PopStateEvent",
"Presentation",
"PresentationAvailability",
"PresentationConnection",
"PresentationConnectionAvailableEvent",PresentationConnectionAvailableEvent()
"PresentationConnectionCloseEvent",
"PresentationConnectionList",
"PresentationReceiver",
"PresentationRequest",
"ProcessingInstruction",
"ProgressEvent",
"Promise",
"PromiseRejectionEvent",
"Proxy",
"PublicKeyCredential",
"PushManager",
"PushSubscription",
"PushSubscriptionOptions",
"RTCCertificate",
"RTCDTMFSender",
"RTCDTMFToneChangeEvent",
"RTCDataChannel",
"RTCDataChannelEvent",
"RTCError",
"RTCErrorEvent",
"RTCIceCandidate",
"RTCPeerConnection",
"RTCPeerConnectionIceEvent",
"RTCRtpReceiver",
"RTCRtpSender",
"RTCRtpTransceiver",
"RTCSessionDescription",
"RTCStatsReport",
"RTCTrackEvent",
"RadioNodeList",
"Range",
"RangeError",
"ReadableStream",
"ReferenceError",
  defineProperty: ƒ,
deleteProperty: ƒ,
apply: ƒ,
construct: ƒ,
get: ƒ, …}
"RegExp",
"RelativeOrientationSensor",
"RemotePlayback",
"ReportingObserver",
"Request",
"ResizeObserver",
"ResizeObserverEntry",
"Response",
"SVGAElement",
"SVGAngle",
"SVGAnimateElement",
"SVGAnimateMotionElement",
"SVGAnimateTransformElement",
"SVGAnimatedAngle",
"SVGAnimatedBoolean",
"SVGAnimatedEnumeration",
"SVGAnimatedInteger",
"SVGAnimatedLength",
"SVGAnimatedLengthList",
"SVGAnimatedNumber",
"SVGAnimatedNumberList",
"SVGAnimatedPreserveAspectRatio",
"SVGAnimatedRect",
"SVGAnimatedString",
"SVGAnimatedTransformList",
"SVGAnimationElement",
"SVGCircleElement",
"SVGClipPathElement",
"SVGComponentTransferFunctionElement",
"SVGDefsElement",
"SVGDescElement",
"SVGDiscardElement",
"SVGElement",
"SVGEllipseElement",
"SVGFEBlendElement",
"SVGFEColorMatrixElement",
"SVGFEComponentTransferElement",
"SVGFECompositeElement",
"SVGFEConvolveMatrixElement",
"SVGFEDiffuseLightingElement",
"SVGFEDisplacementMapElement",
"SVGFEDistantLightElement",
"SVGFEDropShadowElement",
"SVGFEFloodElement",
"SVGFEFuncAElement",
"SVGFEFuncBElement",
"SVGFEFuncGElement",
"SVGFEFuncRElement",
"SVGFEGaussianBlurElement",
"SVGFEImageElement",
"SVGFEMergeElement",
"SVGFEMergeNodeElement",
"SVGFEMorphologyElement",
"SVGFEOffsetElement",
"SVGFEPointLightElement",
"SVGFESpecularLightingElement",
"SVGFESpotLightElement",
"SVGFETileElement",
"SVGFETurbulenceElement",
"SVGFilterElement",
"SVGForeignObjectElement",
"SVGGElement",
"SVGGeometryElement",
"SVGGradientElement",
"SVGGraphicsElement",
"SVGImageElement",
"SVGLength",
"SVGLengthList",
"SVGLineElement",
"SVGLinearGradientElement",
"SVGMPathElement",
"SVGMarkerElement",
"SVGMaskElement",
"SVGMatrix",
"SVGMetadataElement",
"SVGNumber",
"SVGNumberList",
"SVGPathElement",
"SVGPatternElement",
"SVGPoint",
"SVGPointList",
"SVGPolygonElement",
"SVGPolylineElement",
"SVGPreserveAspectRatio",
"SVGRadialGradientElement",
"SVGRect",
"SVGRectElement",
"SVGSVGElement",
"SVGScriptElement",
"SVGSetElement",
"SVGStopElement",
"SVGStringList",
"SVGStyleElement",
"SVGSwitchElement",
"SVGSymbolElement",
"SVGTSpanElement",
"SVGTextContentElement",
"SVGTextElement",
"SVGTextPathElement",
"SVGTextPositioningElement",
"SVGTitleElement",
"SVGTransform",
"SVGTransformList",
"SVGUnitTypes",
"SVGUseElement",
"SVGViewElement",
"Screen",
"ScreenOrientation",
"ScriptProcessorNode",
"SecurityPolicyViolationEvent",
"Selection",
"Sensor",
"SensorErrorEvent",
"ServiceWorker",
"ServiceWorkerContainer",
"ServiceWorkerRegistration",
"Set",
"ShadowRoot",
"SharedArrayBuffer",
"SharedWorker",
"SourceBuffer",
"SourceBufferList",
"SpeechSynthesisErrorEvent",
"SpeechSynthesisEvent",
"SpeechSynthesisUtterance",
"StaticRange",
"StereoPannerNode",
"Storage",
"StorageEvent",
"StorageManager",
"String",
"StylePropertyMap",
"StylePropertyMapReadOnly",
"StyleSheet",
"StyleSheetList",
"SubtleCrypto",
"Symbol",
"SyncManager",
"SyntaxError",
"TaskAttributionTiming",
"Text",
"TextDecoder",
"TextDecoderStream",
"TextEncoder",
"TextEncoderStream",
"TextEvent",
"TextMetrics",
"TextTrack",
"TextTrackCue",
"TextTrackCueList",
"TextTrackList",
"TimeRanges",
"Touch",
"TouchEvent",
"TouchList",
"TrackEvent",
"TransformStream",
"TransitionEvent",
"TreeWalker",
"TypeError",
"UIEvent",
"URIError",
"URL",
"URLSearchParams",
"USB",
"USBAlternateInterface",
"USBConfiguration",
"USBConnectionEvent",
"USBDevice",
"USBEndpoint",
"USBInTransferResult",
"USBInterface",
"USBIsochronousInTransferPacket",
"USBIsochronousInTransferResult",
"USBIsochronousOutTransferPacket",
"USBIsochronousOutTransferResult",
"USBOutTransferResult",
"Uint8Array",
"Uint8ClampedArray",
"Uint16Array",
"Uint32Array",
"UserActivation",
"VTTCue",
"ValidityState",
"VisualViewport",
"WaveShaperNode",
"WeakMap",
"WeakSet",
  compile: ƒ,
validate: ƒ,
instantiate: ƒ,
compileStreaming: ƒ,
instantiateStreaming: ƒ, …}
"WebGL2RenderingContext",
"WebGLActiveInfo",
"WebGLBuffer",
"WebGLContextEvent",
"WebGLFramebuffer",
"WebGLProgram",
"WebGLQuery",
"WebGLRenderbuffer",
"WebGLRenderingContext",
"WebGLSampler",
"WebGLShader",
"WebGLShaderPrecisionFormat",
"WebGLSync",
"WebGLTexture",
"WebGLTransformFeedback",
"WebGLUniformLocation",
"WebGLVertexArrayObject",
"WebKitCSSMatrix",
"WebKitMutationObserver",
"WebSocket",
"WheelEvent",
"Window",
"Worker",
"Worklet",
"WritableStream",
"XMLDocument",
"XMLHttpRequest",
"XMLHttpRequestEventTarget",
"XMLHttpRequestUpload",
"XMLSerializer",
"XPathEvaluator",
"XPathExpression",
"XPathResult",
"XSLTProcessor",
"console",
"decodeURI",
"decodeURIComponent",
"encodeURI",
"encodeURIComponent",
"escape",
"eval",
"postMessage",
"blur",
"focus",
"close",
"parent",
"window",
"isFinite",
"isNaN",
"trueparseFloat",
"parseInt",
"undefinedunescape",
"webkitMediaStream",
"webkitRTCPeerConnection",
"webkitSpeechGrammar",
"webkitSpeechGrammarList",
"webkitSpeechRecognition",
"webkitSpeechRecognitionError",
"webkitSpeechRecognitionEvent",
"webkitURL"
]