// Compiles a dart2wasm-generated main module from `source` which can then
// instantiatable via the `instantiate` method.
//
// `source` needs to be a `Response` object (or promise thereof) e.g. created
// via the `fetch()` JS API.
export async function compileStreaming(source) {
  const builtins = {builtins: ['js-string']};
  return new CompiledApp(
      await WebAssembly.compileStreaming(source, builtins), builtins);
}

// Compiles a dart2wasm-generated wasm modules from `bytes` which is then
// instantiatable via the `instantiate` method.
export async function compile(bytes) {
  const builtins = {builtins: ['js-string']};
  return new CompiledApp(await WebAssembly.compile(bytes, builtins), builtins);
}

// DEPRECATED: Please use `compile` or `compileStreaming` to get a compiled app,
// use `instantiate` method to get an instantiated app and then call
// `invokeMain` to invoke the main function.
export async function instantiate(modulePromise, importObjectPromise) {
  var moduleOrCompiledApp = await modulePromise;
  if (!(moduleOrCompiledApp instanceof CompiledApp)) {
    moduleOrCompiledApp = new CompiledApp(moduleOrCompiledApp);
  }
  const instantiatedApp = await moduleOrCompiledApp.instantiate(await importObjectPromise);
  return instantiatedApp.instantiatedModule;
}

// DEPRECATED: Please use `compile` or `compileStreaming` to get a compiled app,
// use `instantiate` method to get an instantiated app and then call
// `invokeMain` to invoke the main function.
export const invoke = (moduleInstance, ...args) => {
  moduleInstance.exports.$invokeMain(args);
}

class CompiledApp {
  constructor(module, builtins) {
    this.module = module;
    this.builtins = builtins;
  }

  // The second argument is an options object containing:
  // `loadDeferredWasm` is a JS function that takes a module name matching a
  //   wasm file produced by the dart2wasm compiler and returns the bytes to
  //   load the module. These bytes can be in either a format supported by
  //   `WebAssembly.compile` or `WebAssembly.compileStreaming`.
  // `loadDynamicModule` is a JS function that takes two string names matching,
  //   in order, a wasm file produced by the dart2wasm compiler during dynamic
  //   module compilation and a corresponding js file produced by the same
  //   compilation. It should return a JS Array containing 2 elements. The first
  //   should be the bytes for the wasm module in a format supported by
  //   `WebAssembly.compile` or `WebAssembly.compileStreaming`. The second
  //   should be the result of using the JS 'import' API on the js file path.
  async instantiate(additionalImports, {loadDeferredWasm, loadDynamicModule} = {}) {
    let dartInstance;

    // Prints to the console
    function printToConsole(value) {
      if (typeof dartPrint == "function") {
        dartPrint(value);
        return;
      }
      if (typeof console == "object" && typeof console.log != "undefined") {
        console.log(value);
        return;
      }
      if (typeof print == "function") {
        print(value);
        return;
      }

      throw "Unable to print message: " + value;
    }

    // A special symbol attached to functions that wrap Dart functions.
    const jsWrappedDartFunctionSymbol = Symbol("JSWrappedDartFunction");

    function finalizeWrapper(dartFunction, wrapped) {
      wrapped.dartFunction = dartFunction;
      wrapped[jsWrappedDartFunctionSymbol] = true;
      return wrapped;
    }

    // Imports
    const dart2wasm = {
            _4: (o, c) => o instanceof c,
      _5: o => Object.keys(o),
      _8: (o, a) => o + a,
      _36: x0 => new Array(x0),
      _38: x0 => x0.length,
      _40: (x0,x1) => x0[x1],
      _41: (x0,x1,x2) => { x0[x1] = x2 },
      _43: x0 => new Promise(x0),
      _45: (x0,x1,x2) => new DataView(x0,x1,x2),
      _47: x0 => new Int8Array(x0),
      _48: (x0,x1,x2) => new Uint8Array(x0,x1,x2),
      _49: x0 => new Uint8Array(x0),
      _51: x0 => new Uint8ClampedArray(x0),
      _53: x0 => new Int16Array(x0),
      _55: x0 => new Uint16Array(x0),
      _57: x0 => new Int32Array(x0),
      _59: x0 => new Uint32Array(x0),
      _61: x0 => new Float32Array(x0),
      _63: x0 => new Float64Array(x0),
      _65: (x0,x1,x2) => x0.call(x1,x2),
      _70: (decoder, codeUnits) => decoder.decode(codeUnits),
      _71: () => new TextDecoder("utf-8", {fatal: true}),
      _72: () => new TextDecoder("utf-8", {fatal: false}),
      _73: (s) => +s,
      _74: x0 => new Uint8Array(x0),
      _75: (x0,x1,x2) => x0.set(x1,x2),
      _76: (x0,x1) => x0.transferFromImageBitmap(x1),
      _77: x0 => x0.arrayBuffer(),
      _78: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._78(f,arguments.length,x0) }),
      _79: x0 => new window.FinalizationRegistry(x0),
      _80: (x0,x1,x2,x3) => x0.register(x1,x2,x3),
      _81: (x0,x1) => x0.unregister(x1),
      _82: (x0,x1,x2) => x0.slice(x1,x2),
      _83: (x0,x1) => x0.decode(x1),
      _84: (x0,x1) => x0.segment(x1),
      _85: () => new TextDecoder(),
      _87: x0 => x0.buffer,
      _88: x0 => x0.wasmMemory,
      _89: () => globalThis.window._flutter_skwasmInstance,
      _90: x0 => x0.rasterStartMilliseconds,
      _91: x0 => x0.rasterEndMilliseconds,
      _92: x0 => x0.imageBitmaps,
      _196: x0 => x0.stopPropagation(),
      _197: x0 => x0.preventDefault(),
      _199: x0 => x0.remove(),
      _200: (x0,x1) => x0.append(x1),
      _201: (x0,x1,x2,x3) => x0.addEventListener(x1,x2,x3),
      _246: x0 => x0.unlock(),
      _247: x0 => x0.getReader(),
      _248: (x0,x1,x2) => x0.addEventListener(x1,x2),
      _249: (x0,x1,x2) => x0.removeEventListener(x1,x2),
      _250: (x0,x1) => x0.item(x1),
      _251: x0 => x0.next(),
      _252: x0 => x0.now(),
      _253: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._253(f,arguments.length,x0) }),
      _254: (x0,x1) => x0.addListener(x1),
      _255: (x0,x1) => x0.removeListener(x1),
      _256: (x0,x1) => x0.matchMedia(x1),
      _257: (x0,x1) => x0.revokeObjectURL(x1),
      _258: x0 => x0.close(),
      _259: (x0,x1,x2,x3,x4) => ({type: x0,data: x1,premultiplyAlpha: x2,colorSpaceConversion: x3,preferAnimation: x4}),
      _260: x0 => new window.ImageDecoder(x0),
      _261: x0 => ({frameIndex: x0}),
      _262: (x0,x1) => x0.decode(x1),
      _263: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._263(f,arguments.length,x0) }),
      _264: (x0,x1) => x0.getModifierState(x1),
      _265: (x0,x1) => x0.removeProperty(x1),
      _266: (x0,x1) => x0.prepend(x1),
      _267: x0 => new Intl.Locale(x0),
      _268: x0 => x0.disconnect(),
      _269: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._269(f,arguments.length,x0) }),
      _270: (x0,x1) => x0.getAttribute(x1),
      _271: (x0,x1) => x0.contains(x1),
      _272: (x0,x1) => x0.querySelector(x1),
      _273: x0 => x0.blur(),
      _274: x0 => x0.hasFocus(),
      _275: (x0,x1,x2) => x0.insertBefore(x1,x2),
      _276: (x0,x1) => x0.hasAttribute(x1),
      _277: (x0,x1) => x0.getModifierState(x1),
      _278: (x0,x1) => x0.createTextNode(x1),
      _279: (x0,x1) => x0.appendChild(x1),
      _280: (x0,x1) => x0.removeAttribute(x1),
      _281: x0 => x0.getBoundingClientRect(),
      _282: (x0,x1) => x0.observe(x1),
      _283: x0 => x0.disconnect(),
      _284: (x0,x1) => x0.closest(x1),
      _707: () => globalThis.window.flutterConfiguration,
      _709: x0 => x0.assetBase,
      _714: x0 => x0.canvasKitMaximumSurfaces,
      _715: x0 => x0.debugShowSemanticsNodes,
      _716: x0 => x0.hostElement,
      _717: x0 => x0.multiViewEnabled,
      _718: x0 => x0.nonce,
      _720: x0 => x0.fontFallbackBaseUrl,
      _730: x0 => x0.console,
      _731: x0 => x0.devicePixelRatio,
      _732: x0 => x0.document,
      _733: x0 => x0.history,
      _734: x0 => x0.innerHeight,
      _735: x0 => x0.innerWidth,
      _736: x0 => x0.location,
      _737: x0 => x0.navigator,
      _738: x0 => x0.visualViewport,
      _739: x0 => x0.performance,
      _741: x0 => x0.URL,
      _743: (x0,x1) => x0.getComputedStyle(x1),
      _744: x0 => x0.screen,
      _745: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._745(f,arguments.length,x0) }),
      _746: (x0,x1) => x0.requestAnimationFrame(x1),
      _751: (x0,x1) => x0.warn(x1),
      _753: (x0,x1) => x0.debug(x1),
      _754: x0 => globalThis.parseFloat(x0),
      _755: () => globalThis.window,
      _756: () => globalThis.Intl,
      _757: () => globalThis.Symbol,
      _758: (x0,x1,x2,x3,x4) => globalThis.createImageBitmap(x0,x1,x2,x3,x4),
      _760: x0 => x0.clipboard,
      _761: x0 => x0.maxTouchPoints,
      _762: x0 => x0.vendor,
      _763: x0 => x0.language,
      _764: x0 => x0.platform,
      _765: x0 => x0.userAgent,
      _766: (x0,x1) => x0.vibrate(x1),
      _767: x0 => x0.languages,
      _768: x0 => x0.documentElement,
      _769: (x0,x1) => x0.querySelector(x1),
      _772: (x0,x1) => x0.createElement(x1),
      _775: (x0,x1) => x0.createEvent(x1),
      _776: x0 => x0.activeElement,
      _779: x0 => x0.head,
      _780: x0 => x0.body,
      _782: (x0,x1) => { x0.title = x1 },
      _785: x0 => x0.visibilityState,
      _786: () => globalThis.document,
      _787: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._787(f,arguments.length,x0) }),
      _788: (x0,x1) => x0.dispatchEvent(x1),
      _796: x0 => x0.target,
      _798: x0 => x0.timeStamp,
      _799: x0 => x0.type,
      _801: (x0,x1,x2,x3) => x0.initEvent(x1,x2,x3),
      _807: x0 => x0.baseURI,
      _808: x0 => x0.firstChild,
      _812: x0 => x0.parentElement,
      _814: (x0,x1) => { x0.textContent = x1 },
      _815: x0 => x0.parentNode,
      _816: x0 => x0.nextSibling,
      _817: (x0,x1) => x0.removeChild(x1),
      _818: x0 => x0.isConnected,
      _826: x0 => x0.clientHeight,
      _827: x0 => x0.clientWidth,
      _828: x0 => x0.offsetHeight,
      _829: x0 => x0.offsetWidth,
      _830: x0 => x0.id,
      _831: (x0,x1) => { x0.id = x1 },
      _834: (x0,x1) => { x0.spellcheck = x1 },
      _835: x0 => x0.tagName,
      _836: x0 => x0.style,
      _838: (x0,x1) => x0.querySelectorAll(x1),
      _839: (x0,x1,x2) => x0.setAttribute(x1,x2),
      _840: (x0,x1) => { x0.tabIndex = x1 },
      _841: x0 => x0.tabIndex,
      _842: (x0,x1) => x0.focus(x1),
      _843: x0 => x0.scrollTop,
      _844: (x0,x1) => { x0.scrollTop = x1 },
      _845: x0 => x0.scrollLeft,
      _846: (x0,x1) => { x0.scrollLeft = x1 },
      _847: x0 => x0.classList,
      _849: (x0,x1) => { x0.className = x1 },
      _851: (x0,x1) => x0.getElementsByClassName(x1),
      _852: x0 => x0.click(),
      _853: (x0,x1) => x0.attachShadow(x1),
      _856: x0 => x0.computedStyleMap(),
      _857: (x0,x1) => x0.get(x1),
      _863: (x0,x1) => x0.getPropertyValue(x1),
      _864: (x0,x1,x2,x3) => x0.setProperty(x1,x2,x3),
      _865: x0 => x0.offsetLeft,
      _866: x0 => x0.offsetTop,
      _867: x0 => x0.offsetParent,
      _869: (x0,x1) => { x0.name = x1 },
      _870: x0 => x0.content,
      _871: (x0,x1) => { x0.content = x1 },
      _875: (x0,x1) => { x0.src = x1 },
      _876: x0 => x0.naturalWidth,
      _877: x0 => x0.naturalHeight,
      _881: (x0,x1) => { x0.crossOrigin = x1 },
      _883: (x0,x1) => { x0.decoding = x1 },
      _884: x0 => x0.decode(),
      _889: (x0,x1) => { x0.nonce = x1 },
      _894: (x0,x1) => { x0.width = x1 },
      _896: (x0,x1) => { x0.height = x1 },
      _899: (x0,x1) => x0.getContext(x1),
      _960: x0 => x0.width,
      _961: x0 => x0.height,
      _963: (x0,x1) => x0.fetch(x1),
      _964: x0 => x0.status,
      _966: x0 => x0.body,
      _967: x0 => x0.arrayBuffer(),
      _970: x0 => x0.read(),
      _971: x0 => x0.value,
      _972: x0 => x0.done,
      _979: x0 => x0.name,
      _980: x0 => x0.x,
      _981: x0 => x0.y,
      _984: x0 => x0.top,
      _985: x0 => x0.right,
      _986: x0 => x0.bottom,
      _987: x0 => x0.left,
      _997: x0 => x0.height,
      _998: x0 => x0.width,
      _999: x0 => x0.scale,
      _1000: (x0,x1) => { x0.value = x1 },
      _1003: (x0,x1) => { x0.placeholder = x1 },
      _1005: (x0,x1) => { x0.name = x1 },
      _1006: x0 => x0.selectionDirection,
      _1007: x0 => x0.selectionStart,
      _1008: x0 => x0.selectionEnd,
      _1011: x0 => x0.value,
      _1013: (x0,x1,x2) => x0.setSelectionRange(x1,x2),
      _1014: x0 => x0.readText(),
      _1015: (x0,x1) => x0.writeText(x1),
      _1017: x0 => x0.altKey,
      _1018: x0 => x0.code,
      _1019: x0 => x0.ctrlKey,
      _1020: x0 => x0.key,
      _1021: x0 => x0.keyCode,
      _1022: x0 => x0.location,
      _1023: x0 => x0.metaKey,
      _1024: x0 => x0.repeat,
      _1025: x0 => x0.shiftKey,
      _1026: x0 => x0.isComposing,
      _1028: x0 => x0.state,
      _1029: (x0,x1) => x0.go(x1),
      _1031: (x0,x1,x2,x3) => x0.pushState(x1,x2,x3),
      _1032: (x0,x1,x2,x3) => x0.replaceState(x1,x2,x3),
      _1033: x0 => x0.pathname,
      _1034: x0 => x0.search,
      _1035: x0 => x0.hash,
      _1039: x0 => x0.state,
      _1042: (x0,x1) => x0.createObjectURL(x1),
      _1044: x0 => new Blob(x0),
      _1046: x0 => new MutationObserver(x0),
      _1047: (x0,x1,x2) => x0.observe(x1,x2),
      _1048: f => finalizeWrapper(f, function(x0,x1) { return dartInstance.exports._1048(f,arguments.length,x0,x1) }),
      _1051: x0 => x0.attributeName,
      _1052: x0 => x0.type,
      _1053: x0 => x0.matches,
      _1054: x0 => x0.matches,
      _1058: x0 => x0.relatedTarget,
      _1060: x0 => x0.clientX,
      _1061: x0 => x0.clientY,
      _1062: x0 => x0.offsetX,
      _1063: x0 => x0.offsetY,
      _1066: x0 => x0.button,
      _1067: x0 => x0.buttons,
      _1068: x0 => x0.ctrlKey,
      _1072: x0 => x0.pointerId,
      _1073: x0 => x0.pointerType,
      _1074: x0 => x0.pressure,
      _1075: x0 => x0.tiltX,
      _1076: x0 => x0.tiltY,
      _1077: x0 => x0.getCoalescedEvents(),
      _1080: x0 => x0.deltaX,
      _1081: x0 => x0.deltaY,
      _1082: x0 => x0.wheelDeltaX,
      _1083: x0 => x0.wheelDeltaY,
      _1084: x0 => x0.deltaMode,
      _1091: x0 => x0.changedTouches,
      _1094: x0 => x0.clientX,
      _1095: x0 => x0.clientY,
      _1098: x0 => x0.data,
      _1101: (x0,x1) => { x0.disabled = x1 },
      _1103: (x0,x1) => { x0.type = x1 },
      _1104: (x0,x1) => { x0.max = x1 },
      _1105: (x0,x1) => { x0.min = x1 },
      _1106: x0 => x0.value,
      _1107: (x0,x1) => { x0.value = x1 },
      _1108: x0 => x0.disabled,
      _1109: (x0,x1) => { x0.disabled = x1 },
      _1111: (x0,x1) => { x0.placeholder = x1 },
      _1112: (x0,x1) => { x0.name = x1 },
      _1115: (x0,x1) => { x0.autocomplete = x1 },
      _1116: x0 => x0.selectionDirection,
      _1117: x0 => x0.selectionStart,
      _1119: x0 => x0.selectionEnd,
      _1122: (x0,x1,x2) => x0.setSelectionRange(x1,x2),
      _1123: (x0,x1) => x0.add(x1),
      _1126: (x0,x1) => { x0.noValidate = x1 },
      _1127: (x0,x1) => { x0.method = x1 },
      _1128: (x0,x1) => { x0.action = x1 },
      _1129: (x0,x1) => new OffscreenCanvas(x0,x1),
      _1135: (x0,x1) => x0.getContext(x1),
      _1137: x0 => x0.convertToBlob(),
      _1154: x0 => x0.orientation,
      _1155: x0 => x0.width,
      _1156: x0 => x0.height,
      _1157: (x0,x1) => x0.lock(x1),
      _1176: x0 => new ResizeObserver(x0),
      _1179: f => finalizeWrapper(f, function(x0,x1) { return dartInstance.exports._1179(f,arguments.length,x0,x1) }),
      _1187: x0 => x0.length,
      _1188: x0 => x0.iterator,
      _1189: x0 => x0.Segmenter,
      _1190: x0 => x0.v8BreakIterator,
      _1191: (x0,x1) => new Intl.Segmenter(x0,x1),
      _1194: x0 => x0.language,
      _1195: x0 => x0.script,
      _1196: x0 => x0.region,
      _1214: x0 => x0.done,
      _1215: x0 => x0.value,
      _1216: x0 => x0.index,
      _1220: (x0,x1) => new Intl.v8BreakIterator(x0,x1),
      _1221: (x0,x1) => x0.adoptText(x1),
      _1222: x0 => x0.first(),
      _1223: x0 => x0.next(),
      _1224: x0 => x0.current(),
      _1238: x0 => x0.hostElement,
      _1239: x0 => x0.viewConstraints,
      _1242: x0 => x0.maxHeight,
      _1243: x0 => x0.maxWidth,
      _1244: x0 => x0.minHeight,
      _1245: x0 => x0.minWidth,
      _1246: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1246(f,arguments.length,x0) }),
      _1247: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1247(f,arguments.length,x0) }),
      _1248: (x0,x1) => ({addView: x0,removeView: x1}),
      _1251: x0 => x0.loader,
      _1252: () => globalThis._flutter,
      _1253: (x0,x1) => x0.didCreateEngineInitializer(x1),
      _1254: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1254(f,arguments.length,x0) }),
      _1255: f => finalizeWrapper(f, function() { return dartInstance.exports._1255(f,arguments.length) }),
      _1256: (x0,x1) => ({initializeEngine: x0,autoStart: x1}),
      _1259: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1259(f,arguments.length,x0) }),
      _1260: x0 => ({runApp: x0}),
      _1262: f => finalizeWrapper(f, function(x0,x1) { return dartInstance.exports._1262(f,arguments.length,x0,x1) }),
      _1263: x0 => x0.length,
      _1264: () => globalThis.window.ImageDecoder,
      _1265: x0 => x0.tracks,
      _1267: x0 => x0.completed,
      _1269: x0 => x0.image,
      _1275: x0 => x0.displayWidth,
      _1276: x0 => x0.displayHeight,
      _1277: x0 => x0.duration,
      _1280: x0 => x0.ready,
      _1281: x0 => x0.selectedTrack,
      _1282: x0 => x0.repetitionCount,
      _1283: x0 => x0.frameCount,
      _1331: (x0,x1) => x0.createElement(x1),
      _1337: (x0,x1,x2) => x0.addEventListener(x1,x2),
      _1339: (x0,x1,x2,x3) => x0.addEventListener(x1,x2,x3),
      _1340: (x0,x1,x2,x3) => x0.removeEventListener(x1,x2,x3),
      _1341: (x0,x1) => x0.createElement(x1),
      _1343: (x0,x1) => x0.removeAttribute(x1),
      _1348: (x0,x1,x2,x3) => x0.open(x1,x2,x3),
      _1349: (x0,x1) => x0.canShare(x1),
      _1350: (x0,x1) => x0.share(x1),
      _1354: (x0,x1) => ({files: x0,title: x1}),
      _1355: x0 => ({files: x0}),
      _1358: x0 => x0.click(),
      _1359: x0 => x0.remove(),
      _1360: () => ({}),
      _1361: (x0,x1,x2) => new File(x0,x1,x2),
      _1368: x0 => x0.toArray(),
      _1369: x0 => x0.toUint8Array(),
      _1370: x0 => ({serverTimestamps: x0}),
      _1371: x0 => ({source: x0}),
      _1372: x0 => ({merge: x0}),
      _1374: x0 => new firebase_firestore.FieldPath(x0),
      _1375: (x0,x1) => new firebase_firestore.FieldPath(x0,x1),
      _1376: (x0,x1,x2) => new firebase_firestore.FieldPath(x0,x1,x2),
      _1377: (x0,x1,x2,x3) => new firebase_firestore.FieldPath(x0,x1,x2,x3),
      _1378: (x0,x1,x2,x3,x4) => new firebase_firestore.FieldPath(x0,x1,x2,x3,x4),
      _1379: (x0,x1,x2,x3,x4,x5) => new firebase_firestore.FieldPath(x0,x1,x2,x3,x4,x5),
      _1380: (x0,x1,x2,x3,x4,x5,x6) => new firebase_firestore.FieldPath(x0,x1,x2,x3,x4,x5,x6),
      _1381: (x0,x1,x2,x3,x4,x5,x6,x7) => new firebase_firestore.FieldPath(x0,x1,x2,x3,x4,x5,x6,x7),
      _1382: (x0,x1,x2,x3,x4,x5,x6,x7,x8) => new firebase_firestore.FieldPath(x0,x1,x2,x3,x4,x5,x6,x7,x8),
      _1383: (x0,x1,x2,x3,x4,x5,x6,x7,x8,x9) => new firebase_firestore.FieldPath(x0,x1,x2,x3,x4,x5,x6,x7,x8,x9),
      _1384: () => globalThis.firebase_firestore.documentId(),
      _1385: (x0,x1) => new firebase_firestore.GeoPoint(x0,x1),
      _1386: x0 => globalThis.firebase_firestore.vector(x0),
      _1387: x0 => globalThis.firebase_firestore.Bytes.fromUint8Array(x0),
      _1389: (x0,x1) => globalThis.firebase_firestore.collection(x0,x1),
      _1391: (x0,x1) => globalThis.firebase_firestore.doc(x0,x1),
      _1394: x0 => x0.call(),
      _1424: x0 => globalThis.firebase_firestore.getDoc(x0),
      _1425: x0 => globalThis.firebase_firestore.getDocFromServer(x0),
      _1426: x0 => globalThis.firebase_firestore.getDocFromCache(x0),
      _1427: (x0,x1) => ({includeMetadataChanges: x0,source: x1}),
      _1430: (x0,x1,x2,x3) => globalThis.firebase_firestore.onSnapshot(x0,x1,x2,x3),
      _1432: (x0,x1,x2) => globalThis.firebase_firestore.setDoc(x0,x1,x2),
      _1433: (x0,x1) => globalThis.firebase_firestore.setDoc(x0,x1),
      _1434: (x0,x1) => globalThis.firebase_firestore.query(x0,x1),
      _1435: x0 => globalThis.firebase_firestore.getDocs(x0),
      _1436: x0 => globalThis.firebase_firestore.getDocsFromServer(x0),
      _1437: x0 => globalThis.firebase_firestore.getDocsFromCache(x0),
      _1438: x0 => globalThis.firebase_firestore.limit(x0),
      _1439: x0 => globalThis.firebase_firestore.limitToLast(x0),
      _1440: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1440(f,arguments.length,x0) }),
      _1441: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1441(f,arguments.length,x0) }),
      _1442: (x0,x1) => globalThis.firebase_firestore.orderBy(x0,x1),
      _1444: (x0,x1,x2) => globalThis.firebase_firestore.where(x0,x1,x2),
      _1446: x0 => globalThis.firebase_firestore.doc(x0),
      _1449: (x0,x1) => x0.data(x1),
      _1453: x0 => x0.docChanges(),
      _1470: (x0,x1) => globalThis.firebase_firestore.getFirestore(x0,x1),
      _1472: x0 => globalThis.firebase_firestore.Timestamp.fromMillis(x0),
      _1473: f => finalizeWrapper(f, function() { return dartInstance.exports._1473(f,arguments.length) }),
      _1490: () => globalThis.firebase_firestore.updateDoc,
      _1491: () => globalThis.firebase_firestore.or,
      _1492: () => globalThis.firebase_firestore.and,
      _1497: x0 => x0.path,
      _1500: () => globalThis.firebase_firestore.GeoPoint,
      _1501: x0 => x0.latitude,
      _1502: x0 => x0.longitude,
      _1504: () => globalThis.firebase_firestore.VectorValue,
      _1505: () => globalThis.firebase_firestore.Bytes,
      _1508: x0 => x0.type,
      _1510: x0 => x0.doc,
      _1512: x0 => x0.oldIndex,
      _1514: x0 => x0.newIndex,
      _1516: () => globalThis.firebase_firestore.DocumentReference,
      _1520: x0 => x0.path,
      _1529: x0 => x0.metadata,
      _1530: x0 => x0.ref,
      _1535: x0 => x0.docs,
      _1537: x0 => x0.metadata,
      _1541: () => globalThis.firebase_firestore.Timestamp,
      _1542: x0 => x0.seconds,
      _1543: x0 => x0.nanoseconds,
      _1579: x0 => x0.hasPendingWrites,
      _1581: x0 => x0.fromCache,
      _1588: x0 => x0.source,
      _1593: () => globalThis.firebase_firestore.startAfter,
      _1594: () => globalThis.firebase_firestore.startAt,
      _1595: () => globalThis.firebase_firestore.endBefore,
      _1596: () => globalThis.firebase_firestore.endAt,
      _1597: () => globalThis.firebase_firestore.arrayRemove,
      _1598: () => globalThis.firebase_firestore.arrayUnion,
      _1600: x0 => x0.load(),
      _1601: x0 => x0.play(),
      _1602: x0 => x0.pause(),
      _1604: (x0,x1,x2) => x0.addEventListener(x1,x2),
      _1605: (x0,x1,x2) => x0.removeEventListener(x1,x2),
      _1606: (x0,x1) => x0.start(x1),
      _1607: (x0,x1) => x0.end(x1),
      _1608: x0 => x0.decode(),
      _1609: (x0,x1,x2,x3) => x0.open(x1,x2,x3),
      _1610: (x0,x1,x2) => x0.setRequestHeader(x1,x2),
      _1611: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1611(f,arguments.length,x0) }),
      _1612: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1612(f,arguments.length,x0) }),
      _1613: x0 => x0.send(),
      _1614: () => new XMLHttpRequest(),
      _1634: (x0,x1) => x0.getIdTokenResult(x1),
      _1635: x0 => x0.toJSON(),
      _1636: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1636(f,arguments.length,x0) }),
      _1637: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1637(f,arguments.length,x0) }),
      _1638: (x0,x1,x2) => x0.onAuthStateChanged(x1,x2),
      _1639: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1639(f,arguments.length,x0) }),
      _1640: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1640(f,arguments.length,x0) }),
      _1641: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1641(f,arguments.length,x0) }),
      _1642: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1642(f,arguments.length,x0) }),
      _1643: (x0,x1,x2) => x0.onIdTokenChanged(x1,x2),
      _1647: (x0,x1,x2) => globalThis.firebase_auth.createUserWithEmailAndPassword(x0,x1,x2),
      _1653: (x0,x1,x2) => globalThis.firebase_auth.sendPasswordResetEmail(x0,x1,x2),
      _1657: (x0,x1,x2) => globalThis.firebase_auth.signInWithEmailAndPassword(x0,x1,x2),
      _1662: x0 => x0.signOut(),
      _1663: (x0,x1) => globalThis.firebase_auth.connectAuthEmulator(x0,x1),
      _1686: x0 => globalThis.firebase_auth.OAuthProvider.credentialFromResult(x0),
      _1701: x0 => globalThis.firebase_auth.getAdditionalUserInfo(x0),
      _1702: (x0,x1,x2) => ({errorMap: x0,persistence: x1,popupRedirectResolver: x2}),
      _1703: (x0,x1) => globalThis.firebase_auth.initializeAuth(x0,x1),
      _1709: x0 => globalThis.firebase_auth.OAuthProvider.credentialFromError(x0),
      _1724: () => globalThis.firebase_auth.debugErrorMap,
      _1727: () => globalThis.firebase_auth.browserSessionPersistence,
      _1729: () => globalThis.firebase_auth.browserLocalPersistence,
      _1731: () => globalThis.firebase_auth.indexedDBLocalPersistence,
      _1734: x0 => globalThis.firebase_auth.multiFactor(x0),
      _1735: (x0,x1) => globalThis.firebase_auth.getMultiFactorResolver(x0,x1),
      _1737: x0 => x0.currentUser,
      _1741: x0 => x0.tenantId,
      _1745: x0 => x0.authTime,
      _1746: x0 => x0.claims,
      _1747: x0 => x0.expirationTime,
      _1748: x0 => x0.issuedAtTime,
      _1749: x0 => x0.signInProvider,
      _1750: x0 => x0.token,
      _1751: x0 => x0.displayName,
      _1752: x0 => x0.email,
      _1753: x0 => x0.phoneNumber,
      _1754: x0 => x0.photoURL,
      _1755: x0 => x0.providerId,
      _1756: x0 => x0.uid,
      _1757: x0 => x0.emailVerified,
      _1758: x0 => x0.isAnonymous,
      _1759: x0 => x0.providerData,
      _1760: x0 => x0.refreshToken,
      _1761: x0 => x0.tenantId,
      _1762: x0 => x0.metadata,
      _1764: x0 => x0.providerId,
      _1765: x0 => x0.signInMethod,
      _1766: x0 => x0.accessToken,
      _1767: x0 => x0.idToken,
      _1768: x0 => x0.secret,
      _1779: x0 => x0.creationTime,
      _1780: x0 => x0.lastSignInTime,
      _1785: x0 => x0.code,
      _1787: x0 => x0.message,
      _1799: x0 => x0.email,
      _1800: x0 => x0.phoneNumber,
      _1801: x0 => x0.tenantId,
      _1824: x0 => x0.user,
      _1827: x0 => x0.providerId,
      _1828: x0 => x0.profile,
      _1829: x0 => x0.username,
      _1830: x0 => x0.isNewUser,
      _1833: () => globalThis.firebase_auth.browserPopupRedirectResolver,
      _1838: x0 => x0.displayName,
      _1839: x0 => x0.enrollmentTime,
      _1840: x0 => x0.factorId,
      _1841: x0 => x0.uid,
      _1843: x0 => x0.hints,
      _1844: x0 => x0.session,
      _1846: x0 => x0.phoneNumber,
      _1858: (x0,x1) => x0.getItem(x1),
      _1863: (x0,x1) => x0.appendChild(x1),
      _1865: (x0,x1) => x0.removeItem(x1),
      _1866: (x0,x1,x2) => x0.setItem(x1,x2),
      _1867: (x0,x1) => x0.querySelector(x1),
      _1868: x0 => ({type: x0}),
      _1869: (x0,x1) => new Blob(x0,x1),
      _1870: x0 => globalThis.URL.createObjectURL(x0),
      _1871: (x0,x1) => x0.item(x1),
      _1872: () => new FileReader(),
      _1874: (x0,x1) => x0.readAsArrayBuffer(x1),
      _1875: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1875(f,arguments.length,x0) }),
      _1876: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1876(f,arguments.length,x0) }),
      _1877: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1877(f,arguments.length,x0) }),
      _1878: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1878(f,arguments.length,x0) }),
      _1879: (x0,x1) => x0.removeChild(x1),
      _1884: (x0,x1,x2,x3,x4,x5,x6,x7) => ({apiKey: x0,authDomain: x1,databaseURL: x2,projectId: x3,storageBucket: x4,messagingSenderId: x5,measurementId: x6,appId: x7}),
      _1885: (x0,x1) => globalThis.firebase_core.initializeApp(x0,x1),
      _1886: x0 => globalThis.firebase_core.getApp(x0),
      _1887: () => globalThis.firebase_core.getApp(),
      _1888: (x0,x1,x2) => globalThis.firebase_core.registerVersion(x0,x1,x2),
      _1896: (x0,x1) => globalThis.firebase_storage.getStorage(x0,x1),
      _1901: x0 => globalThis.firebase_storage.getDownloadURL(x0),
      _1905: (x0,x1) => globalThis.firebase_storage.ref(x0,x1),
      _1907: (x0,x1,x2) => globalThis.firebase_storage.uploadBytesResumable(x0,x1,x2),
      _1941: x0 => x0.snapshot,
      _1951: x0 => x0.state,
      _1964: (x0,x1) => { x0.contentType = x1 },
      _1966: (x0,x1) => { x0.customMetadata = x1 },
      _1977: () => ({}),
      _1978: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1978(f,arguments.length,x0) }),
      _1979: (x0,x1) => x0.then(x1),
      _1984: x0 => globalThis.firebase_storage.getStorage(x0),
      _1985: () => globalThis.firebase_core.SDK_VERSION,
      _1991: x0 => x0.apiKey,
      _1993: x0 => x0.authDomain,
      _1995: x0 => x0.databaseURL,
      _1997: x0 => x0.projectId,
      _1999: x0 => x0.storageBucket,
      _2001: x0 => x0.messagingSenderId,
      _2003: x0 => x0.measurementId,
      _2005: x0 => x0.appId,
      _2007: x0 => x0.name,
      _2008: x0 => x0.options,
      _2009: (x0,x1) => x0.debug(x1),
      _2010: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._2010(f,arguments.length,x0) }),
      _2011: f => finalizeWrapper(f, function(x0,x1) { return dartInstance.exports._2011(f,arguments.length,x0,x1) }),
      _2012: (x0,x1) => ({createScript: x0,createScriptURL: x1}),
      _2013: (x0,x1,x2) => x0.createPolicy(x1,x2),
      _2014: (x0,x1) => x0.createScriptURL(x1),
      _2015: (x0,x1,x2) => x0.createScript(x1,x2),
      _2016: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._2016(f,arguments.length,x0) }),
      _2018: Date.now,
      _2020: s => new Date(s * 1000).getTimezoneOffset() * 60,
      _2021: s => {
        if (!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(s)) {
          return NaN;
        }
        return parseFloat(s);
      },
      _2022: () => {
        let stackString = new Error().stack.toString();
        let frames = stackString.split('\n');
        let drop = 2;
        if (frames[0] === 'Error') {
            drop += 1;
        }
        return frames.slice(drop).join('\n');
      },
      _2023: () => typeof dartUseDateNowForTicks !== "undefined",
      _2024: () => 1000 * performance.now(),
      _2025: () => Date.now(),
      _2026: () => {
        // On browsers return `globalThis.location.href`
        if (globalThis.location != null) {
          return globalThis.location.href;
        }
        return null;
      },
      _2027: () => {
        return typeof process != "undefined" &&
               Object.prototype.toString.call(process) == "[object process]" &&
               process.platform == "win32"
      },
      _2028: () => new WeakMap(),
      _2029: (map, o) => map.get(o),
      _2030: (map, o, v) => map.set(o, v),
      _2031: x0 => new WeakRef(x0),
      _2032: x0 => x0.deref(),
      _2039: () => globalThis.WeakRef,
      _2042: s => JSON.stringify(s),
      _2043: s => printToConsole(s),
      _2044: (o, p, r) => o.replaceAll(p, () => r),
      _2045: (o, p, r) => o.replace(p, () => r),
      _2046: Function.prototype.call.bind(String.prototype.toLowerCase),
      _2047: s => s.toUpperCase(),
      _2048: s => s.trim(),
      _2049: s => s.trimLeft(),
      _2050: s => s.trimRight(),
      _2051: (string, times) => string.repeat(times),
      _2052: Function.prototype.call.bind(String.prototype.indexOf),
      _2053: (s, p, i) => s.lastIndexOf(p, i),
      _2054: (string, token) => string.split(token),
      _2055: Object.is,
      _2056: o => o instanceof Array,
      _2057: (a, i) => a.push(i),
      _2061: a => a.pop(),
      _2062: (a, i) => a.splice(i, 1),
      _2063: (a, s) => a.join(s),
      _2064: (a, s, e) => a.slice(s, e),
      _2066: (a, b) => a == b ? 0 : (a > b ? 1 : -1),
      _2067: a => a.length,
      _2069: (a, i) => a[i],
      _2070: (a, i, v) => a[i] = v,
      _2072: o => {
        if (o instanceof ArrayBuffer) return 0;
        if (globalThis.SharedArrayBuffer !== undefined &&
            o instanceof SharedArrayBuffer) {
          return 1;
        }
        return 2;
      },
      _2073: (o, offsetInBytes, lengthInBytes) => {
        var dst = new ArrayBuffer(lengthInBytes);
        new Uint8Array(dst).set(new Uint8Array(o, offsetInBytes, lengthInBytes));
        return new DataView(dst);
      },
      _2075: o => o instanceof Uint8Array,
      _2076: (o, start, length) => new Uint8Array(o.buffer, o.byteOffset + start, length),
      _2077: o => o instanceof Int8Array,
      _2078: (o, start, length) => new Int8Array(o.buffer, o.byteOffset + start, length),
      _2079: o => o instanceof Uint8ClampedArray,
      _2080: (o, start, length) => new Uint8ClampedArray(o.buffer, o.byteOffset + start, length),
      _2081: o => o instanceof Uint16Array,
      _2082: (o, start, length) => new Uint16Array(o.buffer, o.byteOffset + start, length),
      _2083: o => o instanceof Int16Array,
      _2084: (o, start, length) => new Int16Array(o.buffer, o.byteOffset + start, length),
      _2085: o => o instanceof Uint32Array,
      _2086: (o, start, length) => new Uint32Array(o.buffer, o.byteOffset + start, length),
      _2087: o => o instanceof Int32Array,
      _2088: (o, start, length) => new Int32Array(o.buffer, o.byteOffset + start, length),
      _2090: (o, start, length) => new BigInt64Array(o.buffer, o.byteOffset + start, length),
      _2091: o => o instanceof Float32Array,
      _2092: (o, start, length) => new Float32Array(o.buffer, o.byteOffset + start, length),
      _2093: o => o instanceof Float64Array,
      _2094: (o, start, length) => new Float64Array(o.buffer, o.byteOffset + start, length),
      _2095: (t, s) => t.set(s),
      _2096: l => new DataView(new ArrayBuffer(l)),
      _2097: (o) => new DataView(o.buffer, o.byteOffset, o.byteLength),
      _2098: o => o.byteLength,
      _2099: o => o.buffer,
      _2100: o => o.byteOffset,
      _2101: Function.prototype.call.bind(Object.getOwnPropertyDescriptor(DataView.prototype, 'byteLength').get),
      _2102: (b, o) => new DataView(b, o),
      _2103: (b, o, l) => new DataView(b, o, l),
      _2104: Function.prototype.call.bind(DataView.prototype.getUint8),
      _2105: Function.prototype.call.bind(DataView.prototype.setUint8),
      _2106: Function.prototype.call.bind(DataView.prototype.getInt8),
      _2107: Function.prototype.call.bind(DataView.prototype.setInt8),
      _2108: Function.prototype.call.bind(DataView.prototype.getUint16),
      _2109: Function.prototype.call.bind(DataView.prototype.setUint16),
      _2110: Function.prototype.call.bind(DataView.prototype.getInt16),
      _2111: Function.prototype.call.bind(DataView.prototype.setInt16),
      _2112: Function.prototype.call.bind(DataView.prototype.getUint32),
      _2113: Function.prototype.call.bind(DataView.prototype.setUint32),
      _2114: Function.prototype.call.bind(DataView.prototype.getInt32),
      _2115: Function.prototype.call.bind(DataView.prototype.setInt32),
      _2118: Function.prototype.call.bind(DataView.prototype.getBigInt64),
      _2119: Function.prototype.call.bind(DataView.prototype.setBigInt64),
      _2120: Function.prototype.call.bind(DataView.prototype.getFloat32),
      _2121: Function.prototype.call.bind(DataView.prototype.setFloat32),
      _2122: Function.prototype.call.bind(DataView.prototype.getFloat64),
      _2123: Function.prototype.call.bind(DataView.prototype.setFloat64),
      _2136: (ms, c) =>
      setTimeout(() => dartInstance.exports.$invokeCallback(c),ms),
      _2137: (handle) => clearTimeout(handle),
      _2138: (ms, c) =>
      setInterval(() => dartInstance.exports.$invokeCallback(c), ms),
      _2139: (handle) => clearInterval(handle),
      _2140: (c) =>
      queueMicrotask(() => dartInstance.exports.$invokeCallback(c)),
      _2141: () => Date.now(),
      _2142: (s, m) => {
        try {
          return new RegExp(s, m);
        } catch (e) {
          return String(e);
        }
      },
      _2143: (x0,x1) => x0.exec(x1),
      _2144: (x0,x1) => x0.test(x1),
      _2145: x0 => x0.pop(),
      _2147: o => o === undefined,
      _2149: o => typeof o === 'function' && o[jsWrappedDartFunctionSymbol] === true,
      _2151: o => {
        const proto = Object.getPrototypeOf(o);
        return proto === Object.prototype || proto === null;
      },
      _2152: o => o instanceof RegExp,
      _2153: (l, r) => l === r,
      _2154: o => o,
      _2155: o => o,
      _2156: o => o,
      _2157: b => !!b,
      _2158: o => o.length,
      _2160: (o, i) => o[i],
      _2161: f => f.dartFunction,
      _2162: () => ({}),
      _2163: () => [],
      _2165: () => globalThis,
      _2166: (constructor, args) => {
        const factoryFunction = constructor.bind.apply(
            constructor, [null, ...args]);
        return new factoryFunction();
      },
      _2167: (o, p) => p in o,
      _2168: (o, p) => o[p],
      _2169: (o, p, v) => o[p] = v,
      _2170: (o, m, a) => o[m].apply(o, a),
      _2172: o => String(o),
      _2173: (p, s, f) => p.then(s, (e) => f(e, e === undefined)),
      _2174: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._2174(f,arguments.length,x0) }),
      _2175: f => finalizeWrapper(f, function(x0,x1) { return dartInstance.exports._2175(f,arguments.length,x0,x1) }),
      _2176: o => {
        if (o === undefined) return 1;
        var type = typeof o;
        if (type === 'boolean') return 2;
        if (type === 'number') return 3;
        if (type === 'string') return 4;
        if (o instanceof Array) return 5;
        if (ArrayBuffer.isView(o)) {
          if (o instanceof Int8Array) return 6;
          if (o instanceof Uint8Array) return 7;
          if (o instanceof Uint8ClampedArray) return 8;
          if (o instanceof Int16Array) return 9;
          if (o instanceof Uint16Array) return 10;
          if (o instanceof Int32Array) return 11;
          if (o instanceof Uint32Array) return 12;
          if (o instanceof Float32Array) return 13;
          if (o instanceof Float64Array) return 14;
          if (o instanceof DataView) return 15;
        }
        if (o instanceof ArrayBuffer) return 16;
        // Feature check for `SharedArrayBuffer` before doing a type-check.
        if (globalThis.SharedArrayBuffer !== undefined &&
            o instanceof SharedArrayBuffer) {
            return 17;
        }
        if (o instanceof Promise) return 18;
        return 19;
      },
      _2177: o => [o],
      _2178: (o0, o1) => [o0, o1],
      _2179: (o0, o1, o2) => [o0, o1, o2],
      _2180: (o0, o1, o2, o3) => [o0, o1, o2, o3],
      _2181: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const getValue = dartInstance.exports.$wasmI8ArrayGet;
        for (let i = 0; i < length; i++) {
          jsArray[jsArrayOffset + i] = getValue(wasmArray, wasmArrayOffset + i);
        }
      },
      _2182: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const setValue = dartInstance.exports.$wasmI8ArraySet;
        for (let i = 0; i < length; i++) {
          setValue(wasmArray, wasmArrayOffset + i, jsArray[jsArrayOffset + i]);
        }
      },
      _2183: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const getValue = dartInstance.exports.$wasmI16ArrayGet;
        for (let i = 0; i < length; i++) {
          jsArray[jsArrayOffset + i] = getValue(wasmArray, wasmArrayOffset + i);
        }
      },
      _2184: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const setValue = dartInstance.exports.$wasmI16ArraySet;
        for (let i = 0; i < length; i++) {
          setValue(wasmArray, wasmArrayOffset + i, jsArray[jsArrayOffset + i]);
        }
      },
      _2185: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const getValue = dartInstance.exports.$wasmI32ArrayGet;
        for (let i = 0; i < length; i++) {
          jsArray[jsArrayOffset + i] = getValue(wasmArray, wasmArrayOffset + i);
        }
      },
      _2186: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const setValue = dartInstance.exports.$wasmI32ArraySet;
        for (let i = 0; i < length; i++) {
          setValue(wasmArray, wasmArrayOffset + i, jsArray[jsArrayOffset + i]);
        }
      },
      _2187: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const getValue = dartInstance.exports.$wasmF32ArrayGet;
        for (let i = 0; i < length; i++) {
          jsArray[jsArrayOffset + i] = getValue(wasmArray, wasmArrayOffset + i);
        }
      },
      _2188: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const setValue = dartInstance.exports.$wasmF32ArraySet;
        for (let i = 0; i < length; i++) {
          setValue(wasmArray, wasmArrayOffset + i, jsArray[jsArrayOffset + i]);
        }
      },
      _2189: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const getValue = dartInstance.exports.$wasmF64ArrayGet;
        for (let i = 0; i < length; i++) {
          jsArray[jsArrayOffset + i] = getValue(wasmArray, wasmArrayOffset + i);
        }
      },
      _2190: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const setValue = dartInstance.exports.$wasmF64ArraySet;
        for (let i = 0; i < length; i++) {
          setValue(wasmArray, wasmArrayOffset + i, jsArray[jsArrayOffset + i]);
        }
      },
      _2191: x0 => new ArrayBuffer(x0),
      _2192: s => {
        if (/[[\]{}()*+?.\\^$|]/.test(s)) {
            s = s.replace(/[[\]{}()*+?.\\^$|]/g, '\\$&');
        }
        return s;
      },
      _2194: x0 => x0.index,
      _2195: x0 => x0.groups,
      _2196: x0 => x0.flags,
      _2197: x0 => x0.multiline,
      _2198: x0 => x0.ignoreCase,
      _2199: x0 => x0.unicode,
      _2200: x0 => x0.dotAll,
      _2201: (x0,x1) => { x0.lastIndex = x1 },
      _2202: (o, p) => p in o,
      _2203: (o, p) => o[p],
      _2204: (o, p, v) => o[p] = v,
      _2205: (o, p) => delete o[p],
      _2206: () => new XMLHttpRequest(),
      _2207: (x0,x1,x2,x3) => x0.open(x1,x2,x3),
      _2211: x0 => x0.send(),
      _2213: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._2213(f,arguments.length,x0) }),
      _2214: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._2214(f,arguments.length,x0) }),
      _2234: (x0,x1) => x0.key(x1),
      _2235: x0 => x0.trustedTypes,
      _2236: (x0,x1) => { x0.text = x1 },
      _2237: x0 => x0.random(),
      _2238: (x0,x1) => x0.getRandomValues(x1),
      _2239: () => globalThis.crypto,
      _2240: () => globalThis.Math,
      _2250: Function.prototype.call.bind(Number.prototype.toString),
      _2251: Function.prototype.call.bind(BigInt.prototype.toString),
      _2252: Function.prototype.call.bind(Number.prototype.toString),
      _2253: (d, digits) => d.toFixed(digits),
      _2257: () => globalThis.document,
      _2263: (x0,x1) => { x0.height = x1 },
      _2265: (x0,x1) => { x0.width = x1 },
      _2274: x0 => x0.style,
      _2277: x0 => x0.src,
      _2278: (x0,x1) => { x0.src = x1 },
      _2279: x0 => x0.naturalWidth,
      _2280: x0 => x0.naturalHeight,
      _2296: x0 => x0.status,
      _2297: (x0,x1) => { x0.responseType = x1 },
      _2299: x0 => x0.response,
      _2348: (x0,x1) => { x0.responseType = x1 },
      _2349: x0 => x0.response,
      _2409: (x0,x1) => { x0.draggable = x1 },
      _2425: x0 => x0.style,
      _2784: (x0,x1) => { x0.download = x1 },
      _2809: (x0,x1) => { x0.href = x1 },
      _2997: x0 => x0.videoWidth,
      _2998: x0 => x0.videoHeight,
      _3002: (x0,x1) => { x0.playsInline = x1 },
      _3028: x0 => x0.error,
      _3030: (x0,x1) => { x0.src = x1 },
      _3039: x0 => x0.buffered,
      _3042: x0 => x0.currentTime,
      _3043: (x0,x1) => { x0.currentTime = x1 },
      _3044: x0 => x0.duration,
      _3049: (x0,x1) => { x0.playbackRate = x1 },
      _3056: (x0,x1) => { x0.autoplay = x1 },
      _3058: (x0,x1) => { x0.loop = x1 },
      _3060: (x0,x1) => { x0.controls = x1 },
      _3062: (x0,x1) => { x0.volume = x1 },
      _3064: (x0,x1) => { x0.muted = x1 },
      _3079: x0 => x0.code,
      _3080: x0 => x0.message,
      _3153: x0 => x0.length,
      _3349: (x0,x1) => { x0.accept = x1 },
      _3363: x0 => x0.files,
      _3389: (x0,x1) => { x0.multiple = x1 },
      _3407: (x0,x1) => { x0.type = x1 },
      _3659: (x0,x1) => { x0.type = x1 },
      _3667: (x0,x1) => { x0.crossOrigin = x1 },
      _3669: (x0,x1) => { x0.text = x1 },
      _4126: () => globalThis.window,
      _4169: x0 => x0.location,
      _4188: x0 => x0.navigator,
      _4450: x0 => x0.trustedTypes,
      _4451: x0 => x0.sessionStorage,
      _4452: x0 => x0.localStorage,
      _4467: x0 => x0.hostname,
      _4575: x0 => x0.userAgent,
      _4576: x0 => x0.vendor,
      _4783: x0 => x0.length,
      _6687: x0 => x0.type,
      _6789: x0 => x0.firstChild,
      _6800: () => globalThis.document,
      _6881: x0 => x0.body,
      _6883: x0 => x0.head,
      _7214: (x0,x1) => { x0.id = x1 },
      _7241: x0 => x0.children,
      _8742: x0 => x0.size,
      _8743: x0 => x0.type,
      _8746: (x0,x1) => { x0.type = x1 },
      _8749: x0 => x0.name,
      _8755: x0 => x0.length,
      _8760: x0 => x0.result,
      _11391: (x0,x1) => { x0.border = x1 },
      _11669: (x0,x1) => { x0.display = x1 },
      _11833: (x0,x1) => { x0.height = x1 },
      _12523: (x0,x1) => { x0.width = x1 },
      _12891: x0 => x0.name,
      _12892: x0 => x0.message,
      _13607: () => globalThis.console,
      _13635: x0 => x0.name,
      _13636: x0 => x0.message,
      _13637: x0 => x0.code,
      _13639: x0 => x0.customData,

    };

    const baseImports = {
      dart2wasm: dart2wasm,
      Math: Math,
      Date: Date,
      Object: Object,
      Array: Array,
      Reflect: Reflect,
      S: new Proxy({}, { get(_, prop) { return prop; } }),

    };

    const jsStringPolyfill = {
      "charCodeAt": (s, i) => s.charCodeAt(i),
      "compare": (s1, s2) => {
        if (s1 < s2) return -1;
        if (s1 > s2) return 1;
        return 0;
      },
      "concat": (s1, s2) => s1 + s2,
      "equals": (s1, s2) => s1 === s2,
      "fromCharCode": (i) => String.fromCharCode(i),
      "length": (s) => s.length,
      "substring": (s, a, b) => s.substring(a, b),
      "fromCharCodeArray": (a, start, end) => {
        if (end <= start) return '';

        const read = dartInstance.exports.$wasmI16ArrayGet;
        let result = '';
        let index = start;
        const chunkLength = Math.min(end - index, 500);
        let array = new Array(chunkLength);
        while (index < end) {
          const newChunkLength = Math.min(end - index, 500);
          for (let i = 0; i < newChunkLength; i++) {
            array[i] = read(a, index++);
          }
          if (newChunkLength < chunkLength) {
            array = array.slice(0, newChunkLength);
          }
          result += String.fromCharCode(...array);
        }
        return result;
      },
      "intoCharCodeArray": (s, a, start) => {
        if (s === '') return 0;

        const write = dartInstance.exports.$wasmI16ArraySet;
        for (var i = 0; i < s.length; ++i) {
          write(a, start++, s.charCodeAt(i));
        }
        return s.length;
      },
      "test": (s) => typeof s == "string",
    };


    

    dartInstance = await WebAssembly.instantiate(this.module, {
      ...baseImports,
      ...additionalImports,
      
      "wasm:js-string": jsStringPolyfill,
    });

    return new InstantiatedApp(this, dartInstance);
  }
}

class InstantiatedApp {
  constructor(compiledApp, instantiatedModule) {
    this.compiledApp = compiledApp;
    this.instantiatedModule = instantiatedModule;
  }

  // Call the main function with the given arguments.
  invokeMain(...args) {
    this.instantiatedModule.exports.$invokeMain(args);
  }
}
