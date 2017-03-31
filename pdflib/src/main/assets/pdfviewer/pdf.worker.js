/* Copyright 2017 Mozilla Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("pdfjs-dist/build/pdf.worker",[],t):"object"==typeof exports?exports["pdfjs-dist/build/pdf.worker"]=t():e["pdfjs-dist/build/pdf.worker"]=e.pdfjsDistBuildPdfWorker=t()}(this,function(){return function(e){function t(r){if(a[r])return a[r].exports
var i=a[r]={i:r,l:!1,exports:{}}
return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var a={}
return t.m=e,t.c=a,t.i=function(e){return e},t.d=function(e,a,r){t.o(e,a)||Object.defineProperty(e,a,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e}
return t.d(a,"a",a),a},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=36)}([function(e,t,a){"use strict";(function(e){function r(e){ae=e}function i(){return ae}function n(e){ae>=$.infos&&console.log("Info: "+e)}function s(e){ae>=$.warnings&&console.log("Warning: "+e)}function o(e){console.log("Deprecated API usage: "+e)}function c(e){throw ae>=$.errors&&(console.log("Error: "+e),console.log(l())),new Error(e)}function l(){try{throw new Error}catch(e){return e.stack?e.stack.split("\n").slice(2).join("\n"):""}}function h(e,t){e||c(t)}function u(e,t){try{var a=new URL(e)
if(!a.origin||"null"===a.origin)return!1}catch(e){return!1}var r=new URL(t,a)
return a.origin===r.origin}function f(e){if(!e)return!1
switch(e.protocol){case"http:":case"https:":case"ftp:":case"mailto:":case"tel:":return!0
default:return!1}}function d(e,t){if(!e)return null
try{var a=t?new URL(e,t):new URL(e)
if(f(a))return a}catch(e){}return null}function g(e,t,a){return Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!1}),a}function p(e){var t
return function(){return e&&(t=Object.create(null),e(t),e=null),t}}function m(e){return"string"!=typeof e?(s("The argument for removeNullCharacters must be a string."),e):e.replace(de,"")}function b(e){h(null!==e&&"object"==typeof e&&void 0!==e.length,"Invalid argument for bytesToString")
var t=e.length
if(t<8192)return String.fromCharCode.apply(null,e)
for(var a=[],r=0;r<t;r+=8192){var i=Math.min(r+8192,t),n=e.subarray(r,i)
a.push(String.fromCharCode.apply(null,n))}return a.join("")}function v(e){h("string"==typeof e,"Invalid argument for stringToBytes")
for(var t=e.length,a=new Uint8Array(t),r=0;r<t;++r)a[r]=255&e.charCodeAt(r)
return a}function y(e){return void 0!==e.length?e.length:(h(void 0!==e.byteLength),e.byteLength)}function k(e){if(1===e.length&&e[0]instanceof Uint8Array)return e[0]
var t,a,r,i=0,n=e.length
for(t=0;t<n;t++)a=e[t],r=y(a),i+=r
var s=0,o=new Uint8Array(i)
for(t=0;t<n;t++)a=e[t],a instanceof Uint8Array||(a="string"==typeof a?v(a):new Uint8Array(a)),r=a.byteLength,o.set(a,s),s+=r
return o}function w(e){return String.fromCharCode(e>>24&255,e>>16&255,e>>8&255,255&e)}function x(e){for(var t=1,a=0;e>t;)t<<=1,a++
return a}function C(e,t){return e[t]<<24>>24}function S(e,t){return e[t]<<8|e[t+1]}function A(e,t){return(e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3])>>>0}function I(){var e=new Uint8Array(2)
return e[0]=1,1===new Uint16Array(e.buffer)[0]}function B(){try{return new Function(""),!0}catch(e){return!1}}function R(e){var t,a=e.length,r=[]
if("þ"===e[0]&&"ÿ"===e[1])for(t=2;t<a;t+=2)r.push(String.fromCharCode(e.charCodeAt(t)<<8|e.charCodeAt(t+1)))
else for(t=0;t<a;++t){var i=ve[e.charCodeAt(t)]
r.push(i?String.fromCharCode(i):e.charAt(t))}return r.join("")}function T(e){return decodeURIComponent(escape(e))}function O(e){return unescape(encodeURIComponent(e))}function P(e){for(var t in e)return!1
return!0}function M(e){return"boolean"==typeof e}function E(e){return"number"==typeof e&&(0|e)===e}function L(e){return"number"==typeof e}function D(e){return"string"==typeof e}function F(e){return e instanceof Array}function q(e){return"object"==typeof e&&null!==e&&void 0!==e.byteLength}function U(e){return 32===e||9===e||13===e||10===e}function N(){return"undefined"==typeof __pdfjsdev_webpack__&&("object"==typeof process&&process+""=="[object process]")}function j(){var e={}
return e.promise=new Promise(function(t,a){e.resolve=t,e.reject=a}),e}function _(e,t,a){this.sourceName=e,this.targetName=t,this.comObj=a,this.callbackIndex=1,this.postMessageTransfers=!0
var r=this.callbacksCapabilities=Object.create(null),i=this.actionHandler=Object.create(null)
this._onComObjOnMessage=function(e){var t=e.data
if(t.targetName===this.sourceName)if(t.isReply){var n=t.callbackId
if(t.callbackId in r){var s=r[n]
delete r[n],"error"in t?s.reject(t.error):s.resolve(t.data)}else c("Cannot resolve callback "+n)}else if(t.action in i){var o=i[t.action]
if(t.callbackId){var l=this.sourceName,h=t.sourceName
Promise.resolve().then(function(){return o[0].call(o[1],t.data)}).then(function(e){a.postMessage({sourceName:l,targetName:h,isReply:!0,callbackId:t.callbackId,data:e})},function(e){e instanceof Error&&(e+=""),a.postMessage({sourceName:l,targetName:h,isReply:!0,callbackId:t.callbackId,error:e})})}else o[0].call(o[1],t.data)}else c("Unknown action from worker: "+t.action)}.bind(this),a.addEventListener("message",this._onComObjOnMessage)}function z(e,t,a){var r=new Image
r.onload=function(){a.resolve(e,r)},r.onerror=function(){a.resolve(e,null),s("Error during JPEG image loading")},r.src=t}var H=(a(37),"undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:void 0),G=[.001,0,0,.001,0,0],X={FILL:0,STROKE:1,FILL_STROKE:2,INVISIBLE:3,FILL_ADD_TO_PATH:4,STROKE_ADD_TO_PATH:5,FILL_STROKE_ADD_TO_PATH:6,ADD_TO_PATH:7,FILL_STROKE_MASK:3,ADD_TO_PATH_FLAG:4},V={GRAYSCALE_1BPP:1,RGB_24BPP:2,RGBA_32BPP:3},W={TEXT:1,LINK:2,FREETEXT:3,LINE:4,SQUARE:5,CIRCLE:6,POLYGON:7,POLYLINE:8,HIGHLIGHT:9,UNDERLINE:10,SQUIGGLY:11,STRIKEOUT:12,STAMP:13,CARET:14,INK:15,POPUP:16,FILEATTACHMENT:17,SOUND:18,MOVIE:19,WIDGET:20,SCREEN:21,PRINTERMARK:22,TRAPNET:23,WATERMARK:24,THREED:25,REDACT:26},K={INVISIBLE:1,HIDDEN:2,PRINT:4,NOZOOM:8,NOROTATE:16,NOVIEW:32,READONLY:64,LOCKED:128,TOGGLENOVIEW:256,LOCKEDCONTENTS:512},Y={READONLY:1,REQUIRED:2,NOEXPORT:4,MULTILINE:4096,PASSWORD:8192,NOTOGGLETOOFF:16384,RADIO:32768,PUSHBUTTON:65536,COMBO:131072,EDIT:262144,SORT:524288,FILESELECT:1048576,MULTISELECT:2097152,DONOTSPELLCHECK:4194304,DONOTSCROLL:8388608,COMB:16777216,RICHTEXT:33554432,RADIOSINUNISON:33554432,COMMITONSELCHANGE:67108864},J={SOLID:1,DASHED:2,BEVELED:3,INSET:4,UNDERLINE:5},Z={UNKNOWN:0,FLATE:1,LZW:2,DCT:3,JPX:4,JBIG:5,A85:6,AHX:7,CCF:8,RL:9},Q={UNKNOWN:0,TYPE1:1,TYPE1C:2,CIDFONTTYPE0:3,CIDFONTTYPE0C:4,TRUETYPE:5,CIDFONTTYPE2:6,TYPE3:7,OPENTYPE:8,TYPE0:9,MMTYPE1:10},$={errors:0,warnings:1,infos:5},ee={NONE:0,BINARY:1,STREAM:2},te={dependency:1,setLineWidth:2,setLineCap:3,setLineJoin:4,setMiterLimit:5,setDash:6,setRenderingIntent:7,setFlatness:8,setGState:9,save:10,restore:11,transform:12,moveTo:13,lineTo:14,curveTo:15,curveTo2:16,curveTo3:17,closePath:18,rectangle:19,stroke:20,closeStroke:21,fill:22,eoFill:23,fillStroke:24,eoFillStroke:25,closeFillStroke:26,closeEOFillStroke:27,endPath:28,clip:29,eoClip:30,beginText:31,endText:32,setCharSpacing:33,setWordSpacing:34,setHScale:35,setLeading:36,setFont:37,setTextRenderingMode:38,setTextRise:39,moveText:40,setLeadingMoveText:41,setTextMatrix:42,nextLine:43,showText:44,showSpacedText:45,nextLineShowText:46,nextLineSetSpacingShowText:47,setCharWidth:48,setCharWidthAndBounds:49,setStrokeColorSpace:50,setFillColorSpace:51,setStrokeColor:52,setStrokeColorN:53,setFillColor:54,setFillColorN:55,setStrokeGray:56,setFillGray:57,setStrokeRGBColor:58,setFillRGBColor:59,setStrokeCMYKColor:60,setFillCMYKColor:61,shadingFill:62,beginInlineImage:63,beginImageData:64,endInlineImage:65,paintXObject:66,markPoint:67,markPointProps:68,beginMarkedContent:69,beginMarkedContentProps:70,endMarkedContent:71,beginCompat:72,endCompat:73,paintFormXObjectBegin:74,paintFormXObjectEnd:75,beginGroup:76,endGroup:77,beginAnnotations:78,endAnnotations:79,beginAnnotation:80,endAnnotation:81,paintJpegXObject:82,paintImageMaskXObject:83,paintImageMaskXObjectGroup:84,paintImageXObject:85,paintInlineImageXObject:86,paintInlineImageXObjectGroup:87,paintImageXObjectRepeat:88,paintImageMaskXObjectRepeat:89,paintSolidColorImageMask:90,constructPath:91},ae=$.warnings,re={unknown:"unknown",forms:"forms",javaScript:"javaScript",smask:"smask",shadingPattern:"shadingPattern",font:"font"},ie={NEED_PASSWORD:1,INCORRECT_PASSWORD:2},ne=function(){function e(e,t){this.name="PasswordException",this.message=e,this.code=t}return e.prototype=new Error,e.constructor=e,e}(),se=function(){function e(e,t){this.name="UnknownErrorException",this.message=e,this.details=t}return e.prototype=new Error,e.constructor=e,e}(),oe=function(){function e(e){this.name="InvalidPDFException",this.message=e}return e.prototype=new Error,e.constructor=e,e}(),ce=function(){function e(e){this.name="MissingPDFException",this.message=e}return e.prototype=new Error,e.constructor=e,e}(),le=function(){function e(e,t){this.name="UnexpectedResponseException",this.message=e,this.status=t}return e.prototype=new Error,e.constructor=e,e}(),he=function(){function e(e){this.message=e}return e.prototype=new Error,e.prototype.name="NotImplementedException",e.constructor=e,e}(),ue=function(){function e(e,t){this.begin=e,this.end=t,this.message="Missing data ["+e+", "+t+")"}return e.prototype=new Error,e.prototype.name="MissingDataException",e.constructor=e,e}(),fe=function(){function e(e){this.message=e}return e.prototype=new Error,e.prototype.name="XRefParseException",e.constructor=e,e}(),de=/\x00/g,ge=function(){function e(e,t){this.buffer=e,this.byteLength=e.length,this.length=void 0===t?this.byteLength>>2:t,a(this.length)}function t(e){return{get:function(){var t=this.buffer,a=e<<2
return(t[a]|t[a+1]<<8|t[a+2]<<16|t[a+3]<<24)>>>0},set:function(t){var a=this.buffer,r=e<<2
a[r]=255&t,a[r+1]=t>>8&255,a[r+2]=t>>16&255,a[r+3]=t>>>24&255}}}function a(a){for(;r<a;)Object.defineProperty(e.prototype,r,t(r)),r++}e.prototype=Object.create(null)
var r=0
return e}()
t.Uint32ArrayView=ge
var pe=[1,0,0,1,0,0],me=function(){function e(){}var t=["rgb(",0,",",0,",",0,")"]
e.makeCssRgb=function(e,a,r){return t[1]=e,t[3]=a,t[5]=r,t.join("")},e.transform=function(e,t){return[e[0]*t[0]+e[2]*t[1],e[1]*t[0]+e[3]*t[1],e[0]*t[2]+e[2]*t[3],e[1]*t[2]+e[3]*t[3],e[0]*t[4]+e[2]*t[5]+e[4],e[1]*t[4]+e[3]*t[5]+e[5]]},e.applyTransform=function(e,t){return[e[0]*t[0]+e[1]*t[2]+t[4],e[0]*t[1]+e[1]*t[3]+t[5]]},e.applyInverseTransform=function(e,t){var a=t[0]*t[3]-t[1]*t[2]
return[(e[0]*t[3]-e[1]*t[2]+t[2]*t[5]-t[4]*t[3])/a,(-e[0]*t[1]+e[1]*t[0]+t[4]*t[1]-t[5]*t[0])/a]},e.getAxialAlignedBoundingBox=function(t,a){var r=e.applyTransform(t,a),i=e.applyTransform(t.slice(2,4),a),n=e.applyTransform([t[0],t[3]],a),s=e.applyTransform([t[2],t[1]],a)
return[Math.min(r[0],i[0],n[0],s[0]),Math.min(r[1],i[1],n[1],s[1]),Math.max(r[0],i[0],n[0],s[0]),Math.max(r[1],i[1],n[1],s[1])]},e.inverseTransform=function(e){var t=e[0]*e[3]-e[1]*e[2]
return[e[3]/t,-e[1]/t,-e[2]/t,e[0]/t,(e[2]*e[5]-e[4]*e[3])/t,(e[4]*e[1]-e[5]*e[0])/t]},e.apply3dTransform=function(e,t){return[e[0]*t[0]+e[1]*t[1]+e[2]*t[2],e[3]*t[0]+e[4]*t[1]+e[5]*t[2],e[6]*t[0]+e[7]*t[1]+e[8]*t[2]]},e.singularValueDecompose2dScale=function(e){var t=[e[0],e[2],e[1],e[3]],a=e[0]*t[0]+e[1]*t[2],r=e[0]*t[1]+e[1]*t[3],i=e[2]*t[0]+e[3]*t[2],n=e[2]*t[1]+e[3]*t[3],s=(a+n)/2,o=Math.sqrt((a+n)*(a+n)-4*(a*n-i*r))/2,c=s+o||1,l=s-o||1
return[Math.sqrt(c),Math.sqrt(l)]},e.normalizeRect=function(e){var t=e.slice(0)
return e[0]>e[2]&&(t[0]=e[2],t[2]=e[0]),e[1]>e[3]&&(t[1]=e[3],t[3]=e[1]),t},e.intersect=function(t,a){function r(e,t){return e-t}var i=[t[0],t[2],a[0],a[2]].sort(r),n=[t[1],t[3],a[1],a[3]].sort(r),s=[]
return t=e.normalizeRect(t),a=e.normalizeRect(a),(i[0]===t[0]&&i[1]===a[0]||i[0]===a[0]&&i[1]===t[0])&&(s[0]=i[1],s[2]=i[2],(n[0]===t[1]&&n[1]===a[1]||n[0]===a[1]&&n[1]===t[1])&&(s[1]=n[1],s[3]=n[2],s))},e.sign=function(e){return e<0?-1:1}
var a=["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM","","X","XX","XXX","XL","L","LX","LXX","LXXX","XC","","I","II","III","IV","V","VI","VII","VIII","IX"]
return e.toRoman=function(e,t){h(E(e)&&e>0,"The number should be a positive integer.")
for(var r,i=[];e>=1e3;)e-=1e3,i.push("M")
r=e/100|0,e%=100,i.push(a[r]),r=e/10|0,e%=10,i.push(a[10+r]),i.push(a[20+e])
var n=i.join("")
return t?n.toLowerCase():n},e.appendToArray=function(e,t){Array.prototype.push.apply(e,t)},e.prependToArray=function(e,t){Array.prototype.unshift.apply(e,t)},e.extendObj=function(e,t){for(var a in t)e[a]=t[a]},e.getInheritableProperty=function(e,t,a){for(;e&&!e.has(t);)e=e.get("Parent")
return e?a?e.getArray(t):e.get(t):null},e.inherit=function(e,t,a){e.prototype=Object.create(t.prototype),e.prototype.constructor=e
for(var r in a)e.prototype[r]=a[r]},e.loadScript=function(e,t){var a=document.createElement("script"),r=!1
a.setAttribute("src",e),t&&(a.onload=function(){r||t(),r=!0}),document.getElementsByTagName("head")[0].appendChild(a)},e}(),be=function(){function e(e,t,a,r,i,n){this.viewBox=e,this.scale=t,this.rotation=a,this.offsetX=r,this.offsetY=i
var s,o,c,l,h=(e[2]+e[0])/2,u=(e[3]+e[1])/2
switch(a%=360,a=a<0?a+360:a){case 180:s=-1,o=0,c=0,l=1
break
case 90:s=0,o=1,c=1,l=0
break
case 270:s=0,o=-1,c=-1,l=0
break
default:s=1,o=0,c=0,l=-1}n&&(c=-c,l=-l)
var f,d,g,p
0===s?(f=Math.abs(u-e[1])*t+r,d=Math.abs(h-e[0])*t+i,g=Math.abs(e[3]-e[1])*t,p=Math.abs(e[2]-e[0])*t):(f=Math.abs(h-e[0])*t+r,d=Math.abs(u-e[1])*t+i,g=Math.abs(e[2]-e[0])*t,p=Math.abs(e[3]-e[1])*t),this.transform=[s*t,o*t,c*t,l*t,f-s*t*h-c*t*u,d-o*t*h-l*t*u],this.width=g,this.height=p,this.fontScale=t}return e.prototype={clone:function(t){t=t||{}
var a="scale"in t?t.scale:this.scale,r="rotation"in t?t.rotation:this.rotation
return new e(this.viewBox.slice(),a,r,this.offsetX,this.offsetY,t.dontFlip)},convertToViewportPoint:function(e,t){return me.applyTransform([e,t],this.transform)},convertToViewportRectangle:function(e){var t=me.applyTransform([e[0],e[1]],this.transform),a=me.applyTransform([e[2],e[3]],this.transform)
return[t[0],t[1],a[0],a[1]]},convertToPdfPoint:function(e,t){return me.applyInverseTransform([e,t],this.transform)}},e}(),ve=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,728,711,710,729,733,731,730,732,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8226,8224,8225,8230,8212,8211,402,8260,8249,8250,8722,8240,8222,8220,8221,8216,8217,8218,8482,64257,64258,321,338,352,376,381,305,322,339,353,382,0,8364],ye=function(){function e(e,t,a){for(;e.length<a;)e+=t
return e}function t(){this.started=Object.create(null),this.times=[],this.enabled=!0}return t.prototype={time:function(e){this.enabled&&(e in this.started&&s("Timer is already running for "+e),this.started[e]=Date.now())},timeEnd:function(e){this.enabled&&(e in this.started||s("Timer has not been started for "+e),this.times.push({name:e,start:this.started[e],end:Date.now()}),delete this.started[e])},toString:function(){var t,a,r=this.times,i="",n=0
for(t=0,a=r.length;t<a;++t){var s=r[t].name
s.length>n&&(n=s.length)}for(t=0,a=r.length;t<a;++t){var o=r[t],c=o.end-o.start
i+=e(o.name," ",n)+" "+c+"ms\n"}return i}},t}(),ke=function(e,t){if("undefined"!=typeof Blob)return new Blob([e],{type:t})
s('The "Blob" constructor is not supported.')},we=function(){var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
return function(t,a,r){if(!r&&"undefined"!=typeof URL&&URL.createObjectURL){var i=ke(t,a)
return URL.createObjectURL(i)}for(var n="data:"+a+";base64,",s=0,o=t.length;s<o;s+=3){var c=255&t[s],l=255&t[s+1],h=255&t[s+2],u=c>>2,f=(3&c)<<4|l>>4,d=s+1<o?(15&l)<<2|h>>6:64,g=s+2<o?63&h:64
n+=e[u]+e[f]+e[d]+e[g]}return n}}()
_.prototype={on:function(e,t,a){var r=this.actionHandler
r[e]&&c('There is already an actionName called "'+e+'"'),r[e]=[t,a]},send:function(e,t,a){var r={sourceName:this.sourceName,targetName:this.targetName,action:e,data:t}
this.postMessage(r,a)},sendWithPromise:function(e,t,a){var r=this.callbackIndex++,i={sourceName:this.sourceName,targetName:this.targetName,action:e,data:t,callbackId:r},n=j()
this.callbacksCapabilities[r]=n
try{this.postMessage(i,a)}catch(e){n.reject(e)}return n.promise},postMessage:function(e,t){t&&this.postMessageTransfers?this.comObj.postMessage(e,t):this.comObj.postMessage(e)},destroy:function(){this.comObj.removeEventListener("message",this._onComObjOnMessage)}},t.FONT_IDENTITY_MATRIX=G,t.IDENTITY_MATRIX=pe,t.OPS=te,t.VERBOSITY_LEVELS=$,t.UNSUPPORTED_FEATURES=re,t.AnnotationBorderStyleType=J,t.AnnotationFieldFlag=Y,t.AnnotationFlag=K,t.AnnotationType=W,t.FontType=Q,t.ImageKind=V,t.CMapCompressionType=ee,t.InvalidPDFException=oe,t.MessageHandler=_,t.MissingDataException=ue,t.MissingPDFException=ce,t.NotImplementedException=he,t.PageViewport=be,t.PasswordException=ne,t.PasswordResponses=ie,t.StatTimer=ye,t.StreamType=Z,t.TextRenderingMode=X,t.UnexpectedResponseException=le,t.UnknownErrorException=se,t.Util=me,t.XRefParseException=fe,t.arrayByteLength=y,t.arraysToBytes=k,t.assert=h,t.bytesToString=b,t.createBlob=ke,t.createPromiseCapability=j,t.createObjectURL=we,t.deprecated=o,t.error=c,t.getLookupTableFactory=p,t.getVerbosityLevel=i,t.globalScope=H,t.info=n,t.isArray=F,t.isArrayBuffer=q,t.isBool=M,t.isEmptyObj=P,t.isInt=E,t.isNum=L,t.isString=D,t.isSpace=U,t.isNodeJS=N,t.isSameOrigin=u,t.createValidAbsoluteUrl=d,t.isLittleEndian=I,t.isEvalSupported=B,t.loadJpegStream=z,t.log2=x,t.readInt8=C,t.readUint16=S,t.readUint32=A,t.removeNullCharacters=m,t.setVerbosityLevel=r,t.shadow=g,t.string32=w,t.stringToBytes=v,t.stringToPDFString=R,t.stringToUTF8String=T,t.utf8StringToString=O,t.warn=s}).call(t,a(9))},function(e,t,a){"use strict"
function r(e){return e===f}function i(e,t){return e instanceof d&&(void 0===t||e.name===t)}function n(e,t){return e instanceof g&&(void 0===t||e.cmd===t)}function s(e,t){return e instanceof p&&(void 0===t||i(e.get("Type"),t))}function o(e){return e instanceof m}function c(e,t){return e.num===t.num&&e.gen===t.gen}function l(e){return"object"==typeof e&&null!==e&&void 0!==e.getBytes}var h=a(0),u=h.isArray,f={},d=function(){function e(e){this.name=e}e.prototype={}
var t=Object.create(null)
return e.get=function(a){var r=t[a]
return r||(t[a]=new e(a))},e}(),g=function(){function e(e){this.cmd=e}e.prototype={}
var t=Object.create(null)
return e.get=function(a){var r=t[a]
return r||(t[a]=new e(a))},e}(),p=function(){function e(e){this.map=Object.create(null),this.xref=e,this.objId=null,this.suppressEncryption=!1,this.__nonSerializable__=t}var t=function(){return t}
return e.prototype={assignXref:function(e){this.xref=e},get:function(e,t,a){var r,i=this.xref,n=this.suppressEncryption
return void 0!==(r=this.map[e])||e in this.map||void 0===t?i?i.fetchIfRef(r,n):r:void 0!==(r=this.map[t])||t in this.map||void 0===a?i?i.fetchIfRef(r,n):r:(r=this.map[a]||null,i?i.fetchIfRef(r,n):r)},getAsync:function(e,t,a){var r,i=this.xref,n=this.suppressEncryption
return void 0!==(r=this.map[e])||e in this.map||void 0===t?i?i.fetchIfRefAsync(r,n):Promise.resolve(r):void 0!==(r=this.map[t])||t in this.map||void 0===a?i?i.fetchIfRefAsync(r,n):Promise.resolve(r):(r=this.map[a]||null,i?i.fetchIfRefAsync(r,n):Promise.resolve(r))},getArray:function(e,t,a){var r=this.get(e,t,a),i=this.xref,n=this.suppressEncryption
if(!u(r)||!i)return r
r=r.slice()
for(var s=0,c=r.length;s<c;s++)o(r[s])&&(r[s]=i.fetch(r[s],n))
return r},getRaw:function(e){return this.map[e]},getKeys:function(){return Object.keys(this.map)},set:function(e,t){this.map[e]=t},has:function(e){return e in this.map},forEach:function(e){for(var t in this.map)e(t,this.get(t))}},e.empty=new e(null),e.merge=function(t,a){for(var r=new e(t),i=0,n=a.length;i<n;i++){var o=a[i]
if(s(o))for(var c in o.map)r.map[c]||(r.map[c]=o.map[c])}return r},e}(),m=function(){function e(e,t){this.num=e,this.gen=t}return e.prototype={toString:function(){var e=this.num+"R"
return 0!==this.gen&&(e+=this.gen),e}},e}(),b=function(){function e(){this.dict=Object.create(null)}return e.prototype={has:function(e){return e.toString()in this.dict},put:function(e){this.dict[e.toString()]=!0},remove:function(e){delete this.dict[e.toString()]}},e}(),v=function(){function e(){this.dict=Object.create(null)}return e.prototype={get:function(e){return this.dict[e.toString()]},has:function(e){return e.toString()in this.dict},put:function(e,t){this.dict[e.toString()]=t},putAlias:function(e,t){this.dict[e.toString()]=this.get(t)},forEach:function(e,t){for(var a in this.dict)e.call(t,this.dict[a])},clear:function(){this.dict=Object.create(null)}},e}()
t.EOF=f,t.Cmd=g,t.Dict=p,t.Name=d,t.Ref=m,t.RefSet=b,t.RefSetCache=v,t.isEOF=r,t.isCmd=n,t.isDict=s,t.isName=i,t.isRef=o,t.isRefsEqual=c,t.isStream=l},function(e,t,a){"use strict"
var r=a(0),i=a(1),n=a(28),s=a(29),o=a(15),c=r.Util,l=r.error,h=r.info,u=r.isInt,f=r.isArray,d=r.createObjectURL,g=r.shadow,p=r.isSpace,m=i.Dict,b=i.isDict,v=i.isStream,y=n.Jbig2Image,k=s.JpegImage,w=o.JpxImage,x=function(){function e(e,t,a,r){this.bytes=e instanceof Uint8Array?e:new Uint8Array(e),this.start=t||0,this.pos=this.start,this.end=t+a||this.bytes.length,this.dict=r}return e.prototype={get length(){return this.end-this.start},get isEmpty(){return 0===this.length},getByte:function(){return this.pos>=this.end?-1:this.bytes[this.pos++]},getUint16:function(){var e=this.getByte(),t=this.getByte()
return e===-1||t===-1?-1:(e<<8)+t},getInt32:function(){return(this.getByte()<<24)+(this.getByte()<<16)+(this.getByte()<<8)+this.getByte()},getBytes:function(e){var t=this.bytes,a=this.pos,r=this.end
if(!e)return t.subarray(a,r)
var i=a+e
return i>r&&(i=r),this.pos=i,t.subarray(a,i)},peekByte:function(){var e=this.getByte()
return this.pos--,e},peekBytes:function(e){var t=this.getBytes(e)
return this.pos-=t.length,t},skip:function(e){e||(e=1),this.pos+=e},reset:function(){this.pos=this.start},moveStart:function(){this.start=this.pos},makeSubStream:function(t,a,r){return new e(this.bytes.buffer,t,a,r)}},e}(),C=function(){function e(e){for(var t=e.length,a=new Uint8Array(t),r=0;r<t;++r)a[r]=e.charCodeAt(r)
x.call(this,a)}return e.prototype=x.prototype,e}(),S=function(){function e(e){if(this.pos=0,this.bufferLength=0,this.eof=!1,this.buffer=t,this.minBufferLength=512,e)for(;this.minBufferLength<e;)this.minBufferLength*=2}var t=new Uint8Array(0)
return e.prototype={get isEmpty(){for(;!this.eof&&0===this.bufferLength;)this.readBlock()
return 0===this.bufferLength},ensureBuffer:function(e){var t=this.buffer
if(e<=t.byteLength)return t
for(var a=this.minBufferLength;a<e;)a*=2
var r=new Uint8Array(a)
return r.set(t),this.buffer=r},getByte:function(){for(var e=this.pos;this.bufferLength<=e;){if(this.eof)return-1
this.readBlock()}return this.buffer[this.pos++]},getUint16:function(){var e=this.getByte(),t=this.getByte()
return e===-1||t===-1?-1:(e<<8)+t},getInt32:function(){return(this.getByte()<<24)+(this.getByte()<<16)+(this.getByte()<<8)+this.getByte()},getBytes:function(e){var t,a=this.pos
if(e){for(this.ensureBuffer(a+e),t=a+e;!this.eof&&this.bufferLength<t;)this.readBlock()
var r=this.bufferLength
t>r&&(t=r)}else{for(;!this.eof;)this.readBlock()
t=this.bufferLength}return this.pos=t,this.buffer.subarray(a,t)},peekByte:function(){var e=this.getByte()
return this.pos--,e},peekBytes:function(e){var t=this.getBytes(e)
return this.pos-=t.length,t},makeSubStream:function(e,t,a){for(var r=e+t;this.bufferLength<=r&&!this.eof;)this.readBlock()
return new x(this.buffer,e,t,a)},skip:function(e){e||(e=1),this.pos+=e},reset:function(){this.pos=0},getBaseStreams:function(){return this.str&&this.str.getBaseStreams?this.str.getBaseStreams():[]}},e}(),A=function(){function e(e){this.streams=e,S.call(this,null)}return e.prototype=Object.create(S.prototype),e.prototype.readBlock=function(){var e=this.streams
if(0===e.length)return void(this.eof=!0)
var t=e.shift(),a=t.getBytes(),r=this.bufferLength,i=r+a.length
this.ensureBuffer(i).set(a,r),this.bufferLength=i},e.prototype.getBaseStreams=function(){for(var e=[],t=0,a=this.streams.length;t<a;t++){var r=this.streams[t]
r.getBaseStreams&&c.appendToArray(e,r.getBaseStreams())}return e},e}(),I=function(){function e(e,t){this.str=e,this.dict=e.dict
var a=e.getByte(),r=e.getByte()
a!==-1&&r!==-1||l("Invalid header in flate stream: "+a+", "+r),8!=(15&a)&&l("Unknown compression method in flate stream: "+a+", "+r),((a<<8)+r)%31!=0&&l("Bad FCHECK in flate stream: "+a+", "+r),32&r&&l("FDICT bit set in flate stream: "+a+", "+r),this.codeSize=0,this.codeBuf=0,S.call(this,t)}var t=new Int32Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),a=new Int32Array([3,4,5,6,7,8,9,10,65547,65549,65551,65553,131091,131095,131099,131103,196643,196651,196659,196667,262211,262227,262243,262259,327811,327843,327875,327907,258,258,258]),r=new Int32Array([1,2,3,4,65541,65543,131081,131085,196625,196633,262177,262193,327745,327777,393345,393409,459009,459137,524801,525057,590849,591361,657409,658433,724993,727041,794625,798721,868353,876545]),i=[new Int32Array([459008,524368,524304,524568,459024,524400,524336,590016,459016,524384,524320,589984,524288,524416,524352,590048,459012,524376,524312,589968,459028,524408,524344,590032,459020,524392,524328,59e4,524296,524424,524360,590064,459010,524372,524308,524572,459026,524404,524340,590024,459018,524388,524324,589992,524292,524420,524356,590056,459014,524380,524316,589976,459030,524412,524348,590040,459022,524396,524332,590008,524300,524428,524364,590072,459009,524370,524306,524570,459025,524402,524338,590020,459017,524386,524322,589988,524290,524418,524354,590052,459013,524378,524314,589972,459029,524410,524346,590036,459021,524394,524330,590004,524298,524426,524362,590068,459011,524374,524310,524574,459027,524406,524342,590028,459019,524390,524326,589996,524294,524422,524358,590060,459015,524382,524318,589980,459031,524414,524350,590044,459023,524398,524334,590012,524302,524430,524366,590076,459008,524369,524305,524569,459024,524401,524337,590018,459016,524385,524321,589986,524289,524417,524353,590050,459012,524377,524313,589970,459028,524409,524345,590034,459020,524393,524329,590002,524297,524425,524361,590066,459010,524373,524309,524573,459026,524405,524341,590026,459018,524389,524325,589994,524293,524421,524357,590058,459014,524381,524317,589978,459030,524413,524349,590042,459022,524397,524333,590010,524301,524429,524365,590074,459009,524371,524307,524571,459025,524403,524339,590022,459017,524387,524323,589990,524291,524419,524355,590054,459013,524379,524315,589974,459029,524411,524347,590038,459021,524395,524331,590006,524299,524427,524363,590070,459011,524375,524311,524575,459027,524407,524343,590030,459019,524391,524327,589998,524295,524423,524359,590062,459015,524383,524319,589982,459031,524415,524351,590046,459023,524399,524335,590014,524303,524431,524367,590078,459008,524368,524304,524568,459024,524400,524336,590017,459016,524384,524320,589985,524288,524416,524352,590049,459012,524376,524312,589969,459028,524408,524344,590033,459020,524392,524328,590001,524296,524424,524360,590065,459010,524372,524308,524572,459026,524404,524340,590025,459018,524388,524324,589993,524292,524420,524356,590057,459014,524380,524316,589977,459030,524412,524348,590041,459022,524396,524332,590009,524300,524428,524364,590073,459009,524370,524306,524570,459025,524402,524338,590021,459017,524386,524322,589989,524290,524418,524354,590053,459013,524378,524314,589973,459029,524410,524346,590037,459021,524394,524330,590005,524298,524426,524362,590069,459011,524374,524310,524574,459027,524406,524342,590029,459019,524390,524326,589997,524294,524422,524358,590061,459015,524382,524318,589981,459031,524414,524350,590045,459023,524398,524334,590013,524302,524430,524366,590077,459008,524369,524305,524569,459024,524401,524337,590019,459016,524385,524321,589987,524289,524417,524353,590051,459012,524377,524313,589971,459028,524409,524345,590035,459020,524393,524329,590003,524297,524425,524361,590067,459010,524373,524309,524573,459026,524405,524341,590027,459018,524389,524325,589995,524293,524421,524357,590059,459014,524381,524317,589979,459030,524413,524349,590043,459022,524397,524333,590011,524301,524429,524365,590075,459009,524371,524307,524571,459025,524403,524339,590023,459017,524387,524323,589991,524291,524419,524355,590055,459013,524379,524315,589975,459029,524411,524347,590039,459021,524395,524331,590007,524299,524427,524363,590071,459011,524375,524311,524575,459027,524407,524343,590031,459019,524391,524327,589999,524295,524423,524359,590063,459015,524383,524319,589983,459031,524415,524351,590047,459023,524399,524335,590015,524303,524431,524367,590079]),9],n=[new Int32Array([327680,327696,327688,327704,327684,327700,327692,327708,327682,327698,327690,327706,327686,327702,327694,0,327681,327697,327689,327705,327685,327701,327693,327709,327683,327699,327691,327707,327687,327703,327695,0]),5]
return e.prototype=Object.create(S.prototype),e.prototype.getBits=function(e){for(var t,a=this.str,r=this.codeSize,i=this.codeBuf;r<e;)(t=a.getByte())===-1&&l("Bad encoding in flate stream"),i|=t<<r,r+=8
return t=i&(1<<e)-1,this.codeBuf=i>>e,this.codeSize=r-=e,t},e.prototype.getCode=function(e){for(var t,a=this.str,r=e[0],i=e[1],n=this.codeSize,s=this.codeBuf;n<i&&(t=a.getByte())!==-1;)s|=t<<n,n+=8
var o=r[s&(1<<i)-1],c=o>>16,h=65535&o
return(c<1||n<c)&&l("Bad encoding in flate stream"),this.codeBuf=s>>c,this.codeSize=n-c,h},e.prototype.generateHuffmanTable=function(e){var t,a=e.length,r=0
for(t=0;t<a;++t)e[t]>r&&(r=e[t])
for(var i=1<<r,n=new Int32Array(i),s=1,o=0,c=2;s<=r;++s,o<<=1,c<<=1)for(var l=0;l<a;++l)if(e[l]===s){var h=0,u=o
for(t=0;t<s;++t)h=h<<1|1&u,u>>=1
for(t=h;t<i;t+=c)n[t]=s<<16|l;++o}return[n,r]},e.prototype.readBlock=function(){var e,s,o=this.str,c=this.getBits(3)
if(1&c&&(this.eof=!0),0!==(c>>=1)){var h,u
if(1===c)h=i,u=n
else if(2===c){var f,d=this.getBits(5)+257,g=this.getBits(5)+1,p=this.getBits(4)+4,m=new Uint8Array(t.length)
for(f=0;f<p;++f)m[t[f]]=this.getBits(3)
var b=this.generateHuffmanTable(m)
s=0,f=0
for(var v,y,k,w=d+g,x=new Uint8Array(w);f<w;){var C=this.getCode(b)
if(16===C)v=2,y=3,k=s
else if(17===C)v=3,y=3,k=s=0
else{if(18!==C){x[f++]=s=C
continue}v=7,y=11,k=s=0}for(var S=this.getBits(v)+y;S-- >0;)x[f++]=k}h=this.generateHuffmanTable(x.subarray(0,d)),u=this.generateHuffmanTable(x.subarray(d,w))}else l("Unknown block type in flate stream")
e=this.buffer
for(var A=e?e.length:0,I=this.bufferLength;;){var B=this.getCode(h)
if(B<256)I+1>=A&&(e=this.ensureBuffer(I+1),A=e.length),e[I++]=B
else{if(256===B)return void(this.bufferLength=I)
B-=257,B=a[B]
var R=B>>16
R>0&&(R=this.getBits(R)),s=(65535&B)+R,B=this.getCode(u),B=r[B],R=B>>16,R>0&&(R=this.getBits(R))
var T=(65535&B)+R
I+s>=A&&(e=this.ensureBuffer(I+s),A=e.length)
for(var O=0;O<s;++O,++I)e[I]=e[I-T]}}}else{var P;(P=o.getByte())===-1&&l("Bad block header in flate stream")
var M=P;(P=o.getByte())===-1&&l("Bad block header in flate stream"),M|=P<<8,(P=o.getByte())===-1&&l("Bad block header in flate stream")
var E=P;(P=o.getByte())===-1&&l("Bad block header in flate stream"),E|=P<<8,E===(65535&~M)||0===M&&0===E||l("Bad uncompressed block length in flate stream"),this.codeBuf=0,this.codeSize=0
var L=this.bufferLength
e=this.ensureBuffer(L+M)
var D=L+M
if(this.bufferLength=D,0===M)o.peekByte()===-1&&(this.eof=!0)
else for(var F=L;F<D;++F){if((P=o.getByte())===-1){this.eof=!0
break}e[F]=P}}},e}(),B=function(){function e(e,t,a){if(!b(a))return e
var r=this.predictor=a.get("Predictor")||1
if(r<=1)return e
2!==r&&(r<10||r>15)&&l("Unsupported predictor: "+r),this.readBlock=2===r?this.readBlockTiff:this.readBlockPng,this.str=e,this.dict=e.dict
var i=this.colors=a.get("Colors")||1,n=this.bits=a.get("BitsPerComponent")||8,s=this.columns=a.get("Columns")||1
return this.pixBytes=i*n+7>>3,this.rowBytes=s*i*n+7>>3,S.call(this,t),this}return e.prototype=Object.create(S.prototype),e.prototype.readBlockTiff=function(){var e=this.rowBytes,t=this.bufferLength,a=this.ensureBuffer(t+e),r=this.bits,i=this.colors,n=this.str.getBytes(e)
if(this.eof=!n.length,!this.eof){var s,o=0,c=0,l=0,h=0,u=t
if(1===r&&1===i)for(s=0;s<e;++s){var f=n[s]^o
f^=f>>1,f^=f>>2,f^=f>>4,o=(1&f)<<7,a[u++]=f}else if(8===r){for(s=0;s<i;++s)a[u++]=n[s]
for(;s<e;++s)a[u]=a[u-i]+n[s],u++}else{var d=new Uint8Array(i+1),g=(1<<r)-1,p=0,m=t,b=this.columns
for(s=0;s<b;++s)for(var v=0;v<i;++v)l<r&&(o=o<<8|255&n[p++],l+=8),d[v]=d[v]+(o>>l-r)&g,l-=r,c=c<<r|d[v],(h+=r)>=8&&(a[m++]=c>>h-8&255,h-=8)
h>0&&(a[m++]=(c<<8-h)+(o&(1<<8-h)-1))}this.bufferLength+=e}},e.prototype.readBlockPng=function(){var e=this.rowBytes,t=this.pixBytes,a=this.str.getByte(),r=this.str.getBytes(e)
if(this.eof=!r.length,!this.eof){var i=this.bufferLength,n=this.ensureBuffer(i+e),s=n.subarray(i-e,i)
0===s.length&&(s=new Uint8Array(e))
var o,c,h,u=i
switch(a){case 0:for(o=0;o<e;++o)n[u++]=r[o]
break
case 1:for(o=0;o<t;++o)n[u++]=r[o]
for(;o<e;++o)n[u]=n[u-t]+r[o]&255,u++
break
case 2:for(o=0;o<e;++o)n[u++]=s[o]+r[o]&255
break
case 3:for(o=0;o<t;++o)n[u++]=(s[o]>>1)+r[o]
for(;o<e;++o)n[u]=(s[o]+n[u-t]>>1)+r[o]&255,u++
break
case 4:for(o=0;o<t;++o)c=s[o],h=r[o],n[u++]=c+h
for(;o<e;++o){c=s[o]
var f=s[o-t],d=n[u-t],g=d+c-f,p=g-d
p<0&&(p=-p)
var m=g-c
m<0&&(m=-m)
var b=g-f
b<0&&(b=-b),h=r[o],n[u++]=p<=m&&p<=b?d+h:m<=b?c+h:f+h}break
default:l("Unsupported predictor: "+a)}this.bufferLength+=e}},e}(),R=function(){function e(e,t,a,r){for(var i;(i=e.getByte())!==-1;)if(255===i){e.skip(-1)
break}this.stream=e,this.maybeLength=t,this.dict=a,this.params=r,S.call(this,t)}return e.prototype=Object.create(S.prototype),Object.defineProperty(e.prototype,"bytes",{get:function(){return g(this,"bytes",this.stream.getBytes(this.maybeLength))},configurable:!0}),e.prototype.ensureBuffer=function(e){if(!this.bufferLength){var t=new k,a=this.dict.getArray("Decode","D")
if(this.forceRGB&&f(a)){for(var r=this.dict.get("BitsPerComponent")||8,i=a.length,n=new Int32Array(i),s=!1,o=(1<<r)-1,c=0;c<i;c+=2)n[c]=256*(a[c+1]-a[c])|0,n[c+1]=a[c]*o|0,256===n[c]&&0===n[c+1]||(s=!0)
s&&(t.decodeTransform=n)}if(b(this.params)){var l=this.params.get("ColorTransform")
u(l)&&(t.colorTransform=l)}t.parse(this.bytes)
var h=t.getData(this.drawWidth,this.drawHeight,this.forceRGB)
this.buffer=h,this.bufferLength=h.length,this.eof=!0}},e.prototype.getBytes=function(e){return this.ensureBuffer(),this.buffer},e.prototype.getIR=function(e){return d(this.bytes,"image/jpeg",e)},e}(),T=function(){function e(e,t,a,r){this.stream=e,this.maybeLength=t,this.dict=a,this.params=r,S.call(this,t)}return e.prototype=Object.create(S.prototype),Object.defineProperty(e.prototype,"bytes",{get:function(){return g(this,"bytes",this.stream.getBytes(this.maybeLength))},configurable:!0}),e.prototype.ensureBuffer=function(e){if(!this.bufferLength){var t=new w
t.parse(this.bytes)
var a=t.width,r=t.height,i=t.componentsCount,n=t.tiles.length
if(1===n)this.buffer=t.tiles[0].items
else{for(var s=new Uint8Array(a*r*i),o=0;o<n;o++)for(var c=t.tiles[o],l=c.width,h=c.height,u=c.left,f=c.top,d=c.items,g=0,p=(a*f+u)*i,m=a*i,b=l*i,v=0;v<h;v++){var y=d.subarray(g,g+b)
s.set(y,p),g+=b,p+=m}this.buffer=s}this.bufferLength=this.buffer.length,this.eof=!0}},e}(),O=function(){function e(e,t,a,r){this.stream=e,this.maybeLength=t,this.dict=a,this.params=r,S.call(this,t)}return e.prototype=Object.create(S.prototype),Object.defineProperty(e.prototype,"bytes",{get:function(){return g(this,"bytes",this.stream.getBytes(this.maybeLength))},configurable:!0}),e.prototype.ensureBuffer=function(e){if(!this.bufferLength){var t=new y,a=[]
if(b(this.params)){var r=this.params.get("JBIG2Globals")
if(v(r)){var i=r.getBytes()
a.push({data:i,start:0,end:i.length})}}a.push({data:this.bytes,start:0,end:this.bytes.length})
for(var n=t.parseChunks(a),s=n.length,o=0;o<s;o++)n[o]^=255
this.buffer=n,this.bufferLength=s,this.eof=!0}},e}(),P=function(){function e(e,t,a){this.str=e,this.dict=e.dict,this.decrypt=a,this.nextChunk=null,this.initialized=!1,S.call(this,t)}return e.prototype=Object.create(S.prototype),e.prototype.readBlock=function(){var e
if(this.initialized?e=this.nextChunk:(e=this.str.getBytes(512),this.initialized=!0),!e||0===e.length)return void(this.eof=!0)
this.nextChunk=this.str.getBytes(512)
var t=this.nextChunk&&this.nextChunk.length>0
e=(0,this.decrypt)(e,!t)
var a,r=this.bufferLength,i=e.length,n=this.ensureBuffer(r+i)
for(a=0;a<i;a++)n[r++]=e[a]
this.bufferLength=r},e}(),M=function(){function e(e,t){this.str=e,this.dict=e.dict,this.input=new Uint8Array(5),t&&(t*=.8),S.call(this,t)}return e.prototype=Object.create(S.prototype),e.prototype.readBlock=function(){for(var e=this.str,t=e.getByte();p(t);)t=e.getByte()
if(t===-1||126===t)return void(this.eof=!0)
var a,r,i=this.bufferLength
if(122===t){for(a=this.ensureBuffer(i+4),r=0;r<4;++r)a[i+r]=0
this.bufferLength+=4}else{var n=this.input
for(n[0]=t,r=1;r<5;++r){for(t=e.getByte();p(t);)t=e.getByte()
if(n[r]=t,t===-1||126===t)break}if(a=this.ensureBuffer(i+r-1),this.bufferLength+=r-1,r<5){for(;r<5;++r)n[r]=117
this.eof=!0}var s=0
for(r=0;r<5;++r)s=85*s+(n[r]-33)
for(r=3;r>=0;--r)a[i+r]=255&s,s>>=8}},e}(),E=function(){function e(e,t){this.str=e,this.dict=e.dict,this.firstDigit=-1,t&&(t*=.5),S.call(this,t)}return e.prototype=Object.create(S.prototype),e.prototype.readBlock=function(){var e=this.str.getBytes(8e3)
if(!e.length)return void(this.eof=!0)
for(var t=e.length+1>>1,a=this.ensureBuffer(this.bufferLength+t),r=this.bufferLength,i=this.firstDigit,n=0,s=e.length;n<s;n++){var o,c=e[n]
if(c>=48&&c<=57)o=15&c
else{if(!(c>=65&&c<=70||c>=97&&c<=102)){if(62===c){this.eof=!0
break}continue}o=9+(15&c)}i<0?i=o:(a[r++]=i<<4|o,i=-1)}i>=0&&this.eof&&(a[r++]=i<<4,i=-1),this.firstDigit=i,this.bufferLength=r},e}(),L=function(){function e(e,t){this.str=e,this.dict=e.dict,S.call(this,t)}return e.prototype=Object.create(S.prototype),e.prototype.readBlock=function(){var e=this.str.getBytes(2)
if(!e||e.length<2||128===e[0])return void(this.eof=!0)
var t,a=this.bufferLength,r=e[0]
if(r<128){if(t=this.ensureBuffer(a+r+1),t[a++]=e[1],r>0){var i=this.str.getBytes(r)
t.set(i,a),a+=r}}else{r=257-r
var n=e[1]
t=this.ensureBuffer(a+r+1)
for(var s=0;s<r;s++)t[a++]=n}this.bufferLength=a},e}(),D=function(){function e(e,t,a){this.str=e,this.dict=e.dict,a=a||m.empty,this.encoding=a.get("K")||0,this.eoline=a.get("EndOfLine")||!1,this.byteAlign=a.get("EncodedByteAlign")||!1,this.columns=a.get("Columns")||1728,this.rows=a.get("Rows")||0
var r=a.get("EndOfBlock")
null!==r&&void 0!==r||(r=!0),this.eoblock=r,this.black=a.get("BlackIs1")||!1,this.codingLine=new Uint32Array(this.columns+1),this.refLine=new Uint32Array(this.columns+2),this.codingLine[0]=this.columns,this.codingPos=0,this.row=0,this.nextLine2D=this.encoding<0,this.inputBits=0,this.inputBuf=0,this.outputBits=0
for(var i;0===(i=this.lookBits(12));)this.eatBits(1)
1===i&&this.eatBits(12),this.encoding>0&&(this.nextLine2D=!this.lookBits(1),this.eatBits(1)),S.call(this,t)}var t=[[-1,-1],[-1,-1],[7,8],[7,7],[6,6],[6,6],[6,5],[6,5],[4,0],[4,0],[4,0],[4,0],[4,0],[4,0],[4,0],[4,0],[3,1],[3,1],[3,1],[3,1],[3,1],[3,1],[3,1],[3,1],[3,1],[3,1],[3,1],[3,1],[3,1],[3,1],[3,1],[3,1],[3,4],[3,4],[3,4],[3,4],[3,4],[3,4],[3,4],[3,4],[3,4],[3,4],[3,4],[3,4],[3,4],[3,4],[3,4],[3,4],[3,3],[3,3],[3,3],[3,3],[3,3],[3,3],[3,3],[3,3],[3,3],[3,3],[3,3],[3,3],[3,3],[3,3],[3,3],[3,3],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2]],a=[[-1,-1],[12,-2],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[11,1792],[11,1792],[12,1984],[12,2048],[12,2112],[12,2176],[12,2240],[12,2304],[11,1856],[11,1856],[11,1920],[11,1920],[12,2368],[12,2432],[12,2496],[12,2560]],r=[[-1,-1],[-1,-1],[-1,-1],[-1,-1],[8,29],[8,29],[8,30],[8,30],[8,45],[8,45],[8,46],[8,46],[7,22],[7,22],[7,22],[7,22],[7,23],[7,23],[7,23],[7,23],[8,47],[8,47],[8,48],[8,48],[6,13],[6,13],[6,13],[6,13],[6,13],[6,13],[6,13],[6,13],[7,20],[7,20],[7,20],[7,20],[8,33],[8,33],[8,34],[8,34],[8,35],[8,35],[8,36],[8,36],[8,37],[8,37],[8,38],[8,38],[7,19],[7,19],[7,19],[7,19],[8,31],[8,31],[8,32],[8,32],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[6,12],[6,12],[6,12],[6,12],[6,12],[6,12],[6,12],[6,12],[8,53],[8,53],[8,54],[8,54],[7,26],[7,26],[7,26],[7,26],[8,39],[8,39],[8,40],[8,40],[8,41],[8,41],[8,42],[8,42],[8,43],[8,43],[8,44],[8,44],[7,21],[7,21],[7,21],[7,21],[7,28],[7,28],[7,28],[7,28],[8,61],[8,61],[8,62],[8,62],[8,63],[8,63],[8,0],[8,0],[8,320],[8,320],[8,384],[8,384],[5,10],[5,10],[5,10],[5,10],[5,10],[5,10],[5,10],[5,10],[5,10],[5,10],[5,10],[5,10],[5,10],[5,10],[5,10],[5,10],[5,11],[5,11],[5,11],[5,11],[5,11],[5,11],[5,11],[5,11],[5,11],[5,11],[5,11],[5,11],[5,11],[5,11],[5,11],[5,11],[7,27],[7,27],[7,27],[7,27],[8,59],[8,59],[8,60],[8,60],[9,1472],[9,1536],[9,1600],[9,1728],[7,18],[7,18],[7,18],[7,18],[7,24],[7,24],[7,24],[7,24],[8,49],[8,49],[8,50],[8,50],[8,51],[8,51],[8,52],[8,52],[7,25],[7,25],[7,25],[7,25],[8,55],[8,55],[8,56],[8,56],[8,57],[8,57],[8,58],[8,58],[6,192],[6,192],[6,192],[6,192],[6,192],[6,192],[6,192],[6,192],[6,1664],[6,1664],[6,1664],[6,1664],[6,1664],[6,1664],[6,1664],[6,1664],[8,448],[8,448],[8,512],[8,512],[9,704],[9,768],[8,640],[8,640],[8,576],[8,576],[9,832],[9,896],[9,960],[9,1024],[9,1088],[9,1152],[9,1216],[9,1280],[9,1344],[9,1408],[7,256],[7,256],[7,256],[7,256],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[5,128],[5,128],[5,128],[5,128],[5,128],[5,128],[5,128],[5,128],[5,128],[5,128],[5,128],[5,128],[5,128],[5,128],[5,128],[5,128],[5,8],[5,8],[5,8],[5,8],[5,8],[5,8],[5,8],[5,8],[5,8],[5,8],[5,8],[5,8],[5,8],[5,8],[5,8],[5,8],[5,9],[5,9],[5,9],[5,9],[5,9],[5,9],[5,9],[5,9],[5,9],[5,9],[5,9],[5,9],[5,9],[5,9],[5,9],[5,9],[6,16],[6,16],[6,16],[6,16],[6,16],[6,16],[6,16],[6,16],[6,17],[6,17],[6,17],[6,17],[6,17],[6,17],[6,17],[6,17],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[6,14],[6,14],[6,14],[6,14],[6,14],[6,14],[6,14],[6,14],[6,15],[6,15],[6,15],[6,15],[6,15],[6,15],[6,15],[6,15],[5,64],[5,64],[5,64],[5,64],[5,64],[5,64],[5,64],[5,64],[5,64],[5,64],[5,64],[5,64],[5,64],[5,64],[5,64],[5,64],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7]],i=[[-1,-1],[-1,-1],[12,-2],[12,-2],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[11,1792],[11,1792],[11,1792],[11,1792],[12,1984],[12,1984],[12,2048],[12,2048],[12,2112],[12,2112],[12,2176],[12,2176],[12,2240],[12,2240],[12,2304],[12,2304],[11,1856],[11,1856],[11,1856],[11,1856],[11,1920],[11,1920],[11,1920],[11,1920],[12,2368],[12,2368],[12,2432],[12,2432],[12,2496],[12,2496],[12,2560],[12,2560],[10,18],[10,18],[10,18],[10,18],[10,18],[10,18],[10,18],[10,18],[12,52],[12,52],[13,640],[13,704],[13,768],[13,832],[12,55],[12,55],[12,56],[12,56],[13,1280],[13,1344],[13,1408],[13,1472],[12,59],[12,59],[12,60],[12,60],[13,1536],[13,1600],[11,24],[11,24],[11,24],[11,24],[11,25],[11,25],[11,25],[11,25],[13,1664],[13,1728],[12,320],[12,320],[12,384],[12,384],[12,448],[12,448],[13,512],[13,576],[12,53],[12,53],[12,54],[12,54],[13,896],[13,960],[13,1024],[13,1088],[13,1152],[13,1216],[10,64],[10,64],[10,64],[10,64],[10,64],[10,64],[10,64],[10,64]],n=[[8,13],[8,13],[8,13],[8,13],[8,13],[8,13],[8,13],[8,13],[8,13],[8,13],[8,13],[8,13],[8,13],[8,13],[8,13],[8,13],[11,23],[11,23],[12,50],[12,51],[12,44],[12,45],[12,46],[12,47],[12,57],[12,58],[12,61],[12,256],[10,16],[10,16],[10,16],[10,16],[10,17],[10,17],[10,17],[10,17],[12,48],[12,49],[12,62],[12,63],[12,30],[12,31],[12,32],[12,33],[12,40],[12,41],[11,22],[11,22],[8,14],[8,14],[8,14],[8,14],[8,14],[8,14],[8,14],[8,14],[8,14],[8,14],[8,14],[8,14],[8,14],[8,14],[8,14],[8,14],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[9,15],[9,15],[9,15],[9,15],[9,15],[9,15],[9,15],[9,15],[12,128],[12,192],[12,26],[12,27],[12,28],[12,29],[11,19],[11,19],[11,20],[11,20],[12,34],[12,35],[12,36],[12,37],[12,38],[12,39],[11,21],[11,21],[12,42],[12,43],[10,0],[10,0],[10,0],[10,0],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12]],s=[[-1,-1],[-1,-1],[-1,-1],[-1,-1],[6,9],[6,8],[5,7],[5,7],[4,6],[4,6],[4,6],[4,6],[4,5],[4,5],[4,5],[4,5],[3,1],[3,1],[3,1],[3,1],[3,1],[3,1],[3,1],[3,1],[3,4],[3,4],[3,4],[3,4],[3,4],[3,4],[3,4],[3,4],[2,3],[2,3],[2,3],[2,3],[2,3],[2,3],[2,3],[2,3],[2,3],[2,3],[2,3],[2,3],[2,3],[2,3],[2,3],[2,3],[2,2],[2,2],[2,2],[2,2],[2,2],[2,2],[2,2],[2,2],[2,2],[2,2],[2,2],[2,2],[2,2],[2,2],[2,2],[2,2]]
return e.prototype=Object.create(S.prototype),e.prototype.readBlock=function(){for(;!this.eof;){var e=this.lookChar()
this.ensureBuffer(this.bufferLength+1),this.buffer[this.bufferLength++]=e}},e.prototype.addPixels=function(e,t){var a=this.codingLine,r=this.codingPos
e>a[r]&&(e>this.columns&&(h("row is wrong length"),this.err=!0,e=this.columns),1&r^t&&++r,a[r]=e),this.codingPos=r},e.prototype.addPixelsNeg=function(e,t){var a=this.codingLine,r=this.codingPos
if(e>a[r])e>this.columns&&(h("row is wrong length"),this.err=!0,e=this.columns),1&r^t&&++r,a[r]=e
else if(e<a[r]){for(e<0&&(h("invalid code"),this.err=!0,e=0);r>0&&e<a[r-1];)--r
a[r]=e}this.codingPos=r},e.prototype.lookChar=function(){var e,t,a,r,i=this.refLine,n=this.codingLine,s=this.columns
if(0===this.outputBits){if(this.eof)return null
this.err=!1
var o,c,l
if(this.nextLine2D){for(r=0;n[r]<s;++r)i[r]=n[r]
for(i[r++]=s,i[r]=s,n[0]=0,this.codingPos=0,e=0,t=0;n[this.codingPos]<s;)switch(o=this.getTwoDimCode()){case 0:this.addPixels(i[e+1],t),i[e+1]<s&&(e+=2)
break
case 1:if(o=c=0,t){do{o+=l=this.getBlackCode()}while(l>=64)
do{c+=l=this.getWhiteCode()}while(l>=64)}else{do{o+=l=this.getWhiteCode()}while(l>=64)
do{c+=l=this.getBlackCode()}while(l>=64)}for(this.addPixels(n[this.codingPos]+o,t),n[this.codingPos]<s&&this.addPixels(n[this.codingPos]+c,1^t);i[e]<=n[this.codingPos]&&i[e]<s;)e+=2
break
case 7:if(this.addPixels(i[e]+3,t),t^=1,n[this.codingPos]<s)for(++e;i[e]<=n[this.codingPos]&&i[e]<s;)e+=2
break
case 5:if(this.addPixels(i[e]+2,t),t^=1,n[this.codingPos]<s)for(++e;i[e]<=n[this.codingPos]&&i[e]<s;)e+=2
break
case 3:if(this.addPixels(i[e]+1,t),t^=1,n[this.codingPos]<s)for(++e;i[e]<=n[this.codingPos]&&i[e]<s;)e+=2
break
case 2:if(this.addPixels(i[e],t),t^=1,n[this.codingPos]<s)for(++e;i[e]<=n[this.codingPos]&&i[e]<s;)e+=2
break
case 8:if(this.addPixelsNeg(i[e]-3,t),t^=1,n[this.codingPos]<s)for(e>0?--e:++e;i[e]<=n[this.codingPos]&&i[e]<s;)e+=2
break
case 6:if(this.addPixelsNeg(i[e]-2,t),t^=1,n[this.codingPos]<s)for(e>0?--e:++e;i[e]<=n[this.codingPos]&&i[e]<s;)e+=2
break
case 4:if(this.addPixelsNeg(i[e]-1,t),t^=1,n[this.codingPos]<s)for(e>0?--e:++e;i[e]<=n[this.codingPos]&&i[e]<s;)e+=2
break
case-1:this.addPixels(s,0),this.eof=!0
break
default:h("bad 2d code"),this.addPixels(s,0),this.err=!0}}else for(n[0]=0,this.codingPos=0,t=0;n[this.codingPos]<s;){if(o=0,t)do{o+=l=this.getBlackCode()}while(l>=64)
else do{o+=l=this.getWhiteCode()}while(l>=64)
this.addPixels(n[this.codingPos]+o,t),t^=1}var u=!1
if(this.byteAlign&&(this.inputBits&=-8),this.eoblock||this.row!==this.rows-1){if(o=this.lookBits(12),this.eoline)for(;o!==-1&&1!==o;)this.eatBits(1),o=this.lookBits(12)
else for(;0===o;)this.eatBits(1),o=this.lookBits(12)
1===o?(this.eatBits(12),u=!0):o===-1&&(this.eof=!0)}else this.eof=!0
if(!this.eof&&this.encoding>0&&(this.nextLine2D=!this.lookBits(1),this.eatBits(1)),this.eoblock&&u&&this.byteAlign){if(1===(o=this.lookBits(12))){if(this.eatBits(12),this.encoding>0&&(this.lookBits(1),this.eatBits(1)),this.encoding>=0)for(r=0;r<4;++r)o=this.lookBits(12),1!==o&&h("bad rtc code: "+o),this.eatBits(12),this.encoding>0&&(this.lookBits(1),this.eatBits(1))
this.eof=!0}}else if(this.err&&this.eoline){for(;;){if((o=this.lookBits(13))===-1)return this.eof=!0,null
if(o>>1==1)break
this.eatBits(1)}this.eatBits(12),this.encoding>0&&(this.eatBits(1),this.nextLine2D=!(1&o))}n[0]>0?this.outputBits=n[this.codingPos=0]:this.outputBits=n[this.codingPos=1],this.row++}var f
if(this.outputBits>=8)f=1&this.codingPos?0:255,this.outputBits-=8,0===this.outputBits&&n[this.codingPos]<s&&(this.codingPos++,this.outputBits=n[this.codingPos]-n[this.codingPos-1])
else{a=8,f=0
do{this.outputBits>a?(f<<=a,1&this.codingPos||(f|=255>>8-a),this.outputBits-=a,a=0):(f<<=this.outputBits,1&this.codingPos||(f|=255>>8-this.outputBits),a-=this.outputBits,this.outputBits=0,n[this.codingPos]<s?(this.codingPos++,this.outputBits=n[this.codingPos]-n[this.codingPos-1]):a>0&&(f<<=a,a=0))}while(a)}return this.black&&(f^=255),f},e.prototype.findTableCode=function(e,t,a,r){for(var i=r||0,n=e;n<=t;++n){var s=this.lookBits(n)
if(s===-1)return[!0,1,!1]
if(n<t&&(s<<=t-n),!i||s>=i){var o=a[s-i]
if(o[0]===n)return this.eatBits(n),[!0,o[1],!0]}}return[!1,0,!1]},e.prototype.getTwoDimCode=function(){var e,a=0
if(this.eoblock){if(a=this.lookBits(7),(e=t[a])&&e[0]>0)return this.eatBits(e[0]),e[1]}else{var r=this.findTableCode(1,7,t)
if(r[0]&&r[2])return r[1]}return h("Bad two dim code"),-1},e.prototype.getWhiteCode=function(){var e,t=0
if(this.eoblock){if((t=this.lookBits(12))===-1)return 1
if(e=t>>5==0?a[t]:r[t>>3],e[0]>0)return this.eatBits(e[0]),e[1]}else{var i=this.findTableCode(1,9,r)
if(i[0])return i[1]
if(i=this.findTableCode(11,12,a),i[0])return i[1]}return h("bad white code"),this.eatBits(1),1},e.prototype.getBlackCode=function(){var e,t
if(this.eoblock){if((e=this.lookBits(13))===-1)return 1
if(t=e>>7==0?i[e]:e>>9==0&&e>>7!=0?n[(e>>1)-64]:s[e>>7],t[0]>0)return this.eatBits(t[0]),t[1]}else{var a=this.findTableCode(2,6,s)
if(a[0])return a[1]
if(a=this.findTableCode(7,12,n,64),a[0])return a[1]
if(a=this.findTableCode(10,13,i),a[0])return a[1]}return h("bad black code"),this.eatBits(1),1},e.prototype.lookBits=function(e){for(var t;this.inputBits<e;){if((t=this.str.getByte())===-1)return 0===this.inputBits?-1:this.inputBuf<<e-this.inputBits&65535>>16-e
this.inputBuf=this.inputBuf<<8|t,this.inputBits+=8}return this.inputBuf>>this.inputBits-e&65535>>16-e},e.prototype.eatBits=function(e){(this.inputBits-=e)<0&&(this.inputBits=0)},e}(),F=function(){function e(e,t,a){this.str=e,this.dict=e.dict,this.cachedData=0,this.bitsCached=0
for(var r={earlyChange:a,codeLength:9,nextCode:258,dictionaryValues:new Uint8Array(4096),dictionaryLengths:new Uint16Array(4096),dictionaryPrevCodes:new Uint16Array(4096),currentSequence:new Uint8Array(4096),currentSequenceLength:0},i=0;i<256;++i)r.dictionaryValues[i]=i,r.dictionaryLengths[i]=1
this.lzwState=r,S.call(this,t)}return e.prototype=Object.create(S.prototype),e.prototype.readBits=function(e){for(var t=this.bitsCached,a=this.cachedData;t<e;){var r=this.str.getByte()
if(r===-1)return this.eof=!0,null
a=a<<8|r,t+=8}return this.bitsCached=t-=e,this.cachedData=a,this.lastCode=null,a>>>t&(1<<e)-1},e.prototype.readBlock=function(){var e,t,a,r=1024,i=this.lzwState
if(i){var n=i.earlyChange,s=i.nextCode,o=i.dictionaryValues,c=i.dictionaryLengths,l=i.dictionaryPrevCodes,h=i.codeLength,u=i.prevCode,f=i.currentSequence,d=i.currentSequenceLength,g=0,p=this.bufferLength,m=this.ensureBuffer(this.bufferLength+r)
for(e=0;e<512;e++){var b=this.readBits(h),v=d>0
if(b<256)f[0]=b,d=1
else{if(!(b>=258)){if(256===b){h=9,s=258,d=0
continue}this.eof=!0,delete this.lzwState
break}if(b<s)for(d=c[b],t=d-1,a=b;t>=0;t--)f[t]=o[a],a=l[a]
else f[d++]=f[0]}if(v&&(l[s]=u,c[s]=c[u]+1,o[s]=f[0],s++,h=s+n&s+n-1?h:0|Math.min(Math.log(s+n)/.6931471805599453+1,12)),u=b,g+=d,r<g){do{r+=512}while(r<g)
m=this.ensureBuffer(this.bufferLength+r)}for(t=0;t<d;t++)m[p++]=f[t]}i.nextCode=s,i.codeLength=h,i.prevCode=u,i.currentSequenceLength=d,this.bufferLength=p}},e}(),q=function(){function e(){x.call(this,new Uint8Array(0))}return e.prototype=x.prototype,e}()
t.Ascii85Stream=M,t.AsciiHexStream=E,t.CCITTFaxStream=D,t.DecryptStream=P,t.DecodeStream=S,t.FlateStream=I,t.Jbig2Stream=O,t.JpegStream=R,t.JpxStream=T,t.NullStream=q,t.PredictorStream=B,t.RunLengthStream=L,t.Stream=x,t.StreamsSequenceStream=A,t.StringStream=C,t.LZWStream=F},function(e,t,a){"use strict"
var r=a(0),i=a(1),n=a(6),s=r.error,o=r.info,c=r.isArray,l=r.isString,h=r.shadow,u=r.warn,f=i.isDict,d=i.isName,g=i.isStream,p=n.PDFFunction,m=function(){function e(e,t,a,r,i,n,s,o){s=1!==s?0:s
var c,l,h,u,f=a/i,d=r/n,g=0,p=new Uint16Array(i),m=3*a
for(c=0;c<i;c++)p[c]=3*Math.floor(c*f)
for(c=0;c<n;c++)for(h=Math.floor(c*d)*m,l=0;l<i;l++)u=h+p[l],o[g++]=e[u++],o[g++]=e[u++],o[g++]=e[u++],g+=s}function t(){s("should not call ColorSpace constructor")}return t.prototype={getRgb:function(e,t){var a=new Uint8Array(3)
return this.getRgbItem(e,t,a,0),a},getRgbItem:function(e,t,a,r){s("Should not call ColorSpace.getRgbItem")},getRgbBuffer:function(e,t,a,r,i,n,o){s("Should not call ColorSpace.getRgbBuffer")},getOutputLength:function(e,t){s("Should not call ColorSpace.getOutputLength")},isPassthrough:function(e){return!1},fillRgb:function(t,a,r,i,n,s,o,c,l){var h,u,f=a*r,d=null,g=1<<o,p=r!==n||a!==i
if(this.isPassthrough(o))d=c
else if(1===this.numComps&&f>g&&"DeviceGray"!==this.name&&"DeviceRGB"!==this.name){var m,b=o<=8?new Uint8Array(g):new Uint16Array(g)
for(h=0;h<g;h++)b[h]=h
var v=new Uint8Array(3*g)
this.getRgbBuffer(b,0,g,v,0,o,0)
var y,k
if(p)for(d=new Uint8Array(3*f),k=0,h=0;h<f;++h)m=3*c[h],d[k++]=v[m],d[k++]=v[m+1],d[k++]=v[m+2]
else for(y=0,h=0;h<f;++h)m=3*c[h],t[y++]=v[m],t[y++]=v[m+1],t[y++]=v[m+2],y+=l}else p?(d=new Uint8Array(3*f),this.getRgbBuffer(c,0,f,d,0,o,0)):this.getRgbBuffer(c,0,i*s,t,0,o,l)
if(d)if(p)e(d,o,a,r,i,n,l,t)
else for(k=0,y=0,h=0,u=i*s;h<u;h++)t[y++]=d[k++],t[y++]=d[k++],t[y++]=d[k++],y+=l},usesZeroToOneRange:!0},t.parse=function(e,a,r){var i=t.parseToIR(e,a,r)
return i instanceof b?i:t.fromIR(i)},t.fromIR=function(e){var a,r,i,n=c(e)?e[0]:e
switch(n){case"DeviceGrayCS":return this.singletons.gray
case"DeviceRgbCS":return this.singletons.rgb
case"DeviceCmykCS":return this.singletons.cmyk
case"CalGrayCS":return a=e[1],r=e[2],i=e[3],new C(a,r,i)
case"CalRGBCS":a=e[1],r=e[2],i=e[3]
var o=e[4]
return new S(a,r,i,o)
case"PatternCS":var l=e[1]
return l&&(l=t.fromIR(l)),new v(l)
case"IndexedCS":var h=e[1],u=e[2],f=e[3]
return new y(t.fromIR(h),u,f)
case"AlternateCS":var d=e[1],g=e[2],m=e[3]
return new b(d,t.fromIR(g),p.fromIR(m))
case"LabCS":a=e[1],r=e[2]
var k=e[3]
return new A(a,r,k)
default:s("Unknown name "+n)}return null},t.parseToIR=function(e,a,r){if(d(e)){var i=r.get("ColorSpace")
if(f(i)){var n=i.get(e.name)
n&&(e=n)}}if(e=a.fetchIfRef(e),d(e))switch(e.name){case"DeviceGray":case"G":return"DeviceGrayCS"
case"DeviceRGB":case"RGB":return"DeviceRgbCS"
case"DeviceCMYK":case"CMYK":return"DeviceCmykCS"
case"Pattern":return["PatternCS",null]
default:s("unrecognized colorspace "+e.name)}else if(c(e)){var o,l,h,m,b,v,y=a.fetchIfRef(e[0]).name
switch(y){case"DeviceGray":case"G":return"DeviceGrayCS"
case"DeviceRGB":case"RGB":return"DeviceRgbCS"
case"DeviceCMYK":case"CMYK":return"DeviceCmykCS"
case"CalGray":return l=a.fetchIfRef(e[1]),m=l.getArray("WhitePoint"),b=l.getArray("BlackPoint"),v=l.get("Gamma"),["CalGrayCS",m,b,v]
case"CalRGB":l=a.fetchIfRef(e[1]),m=l.getArray("WhitePoint"),b=l.getArray("BlackPoint"),v=l.getArray("Gamma")
var k=l.getArray("Matrix")
return["CalRGBCS",m,b,v,k]
case"ICCBased":var w=a.fetchIfRef(e[1]),x=w.dict
if(o=x.get("N"),h=x.get("Alternate")){var C=t.parseToIR(h,a,r),S=t.fromIR(C)
if(S.numComps===o)return C
u("ICCBased color space: Ignoring incorrect /Alternate entry.")}if(1===o)return"DeviceGrayCS"
if(3===o)return"DeviceRgbCS"
if(4===o)return"DeviceCmykCS"
break
case"Pattern":var A=e[1]||null
return A&&(A=t.parseToIR(A,a,r)),["PatternCS",A]
case"Indexed":case"I":var I=t.parseToIR(e[1],a,r),B=a.fetchIfRef(e[2])+1,R=a.fetchIfRef(e[3])
return g(R)&&(R=R.getBytes()),["IndexedCS",I,B,R]
case"Separation":case"DeviceN":var T=a.fetchIfRef(e[1])
o=c(T)?T.length:1,h=t.parseToIR(e[2],a,r)
var O=p.getIR(a,a.fetchIfRef(e[3]))
return["AlternateCS",o,h,O]
case"Lab":l=a.fetchIfRef(e[1]),m=l.getArray("WhitePoint"),b=l.getArray("BlackPoint")
var P=l.getArray("Range")
return["LabCS",m,b,P]
default:s('unimplemented color space object "'+y+'"')}}else s('unrecognized color space object: "'+e+'"')
return null},t.isDefaultDecode=function(e,t){if(!c(e))return!0
if(2*t!==e.length)return u("The decode map is not the correct length"),!0
for(var a=0,r=e.length;a<r;a+=2)if(0!==e[a]||1!==e[a+1])return!1
return!0},t.singletons={get gray(){return h(this,"gray",new k)},get rgb(){return h(this,"rgb",new w)},get cmyk(){return h(this,"cmyk",new x)}},t}(),b=function(){function e(e,t,a){this.name="Alternate",this.numComps=e,this.defaultColor=new Float32Array(e)
for(var r=0;r<e;++r)this.defaultColor[r]=1
this.base=t,this.tintFn=a,this.tmpBuf=new Float32Array(t.numComps)}return e.prototype={getRgb:m.prototype.getRgb,getRgbItem:function(e,t,a,r){var i=this.tmpBuf
this.tintFn(e,t,i,0),this.base.getRgbItem(i,0,a,r)},getRgbBuffer:function(e,t,a,r,i,n,s){var o,c,l=this.tintFn,h=this.base,u=1/((1<<n)-1),f=h.numComps,d=h.usesZeroToOneRange,g=(h.isPassthrough(8)||!d)&&0===s,p=g?i:0,m=g?r:new Uint8Array(f*a),b=this.numComps,v=new Float32Array(b),y=new Float32Array(f)
for(o=0;o<a;o++){for(c=0;c<b;c++)v[c]=e[t++]*u
if(l(v,0,y,0),d)for(c=0;c<f;c++)m[p++]=255*y[c]
else h.getRgbItem(y,0,m,p),p+=f}g||h.getRgbBuffer(m,0,a,r,i,8,s)},getOutputLength:function(e,t){return this.base.getOutputLength(e*this.base.numComps/this.numComps,t)},isPassthrough:m.prototype.isPassthrough,fillRgb:m.prototype.fillRgb,isDefaultDecode:function(e){return m.isDefaultDecode(e,this.numComps)},usesZeroToOneRange:!0},e}(),v=function(){function e(e){this.name="Pattern",this.base=e}return e.prototype={},e}(),y=function(){function e(e,t,a){this.name="Indexed",this.numComps=1,this.defaultColor=new Uint8Array(this.numComps),this.base=e,this.highVal=t
var r=e.numComps,i=r*t
if(g(a)){this.lookup=new Uint8Array(i)
var n=a.getBytes(i)
this.lookup.set(n)}else if(l(a)){this.lookup=new Uint8Array(i)
for(var o=0;o<i;++o)this.lookup[o]=a.charCodeAt(o)}else a instanceof Uint8Array||a instanceof Array?this.lookup=a:s("Unrecognized lookup table: "+a)}return e.prototype={getRgb:m.prototype.getRgb,getRgbItem:function(e,t,a,r){var i=this.base.numComps,n=e[t]*i
this.base.getRgbItem(this.lookup,n,a,r)},getRgbBuffer:function(e,t,a,r,i,n,s){for(var o=this.base,c=o.numComps,l=o.getOutputLength(c,s),h=this.lookup,u=0;u<a;++u){var f=e[t++]*c
o.getRgbBuffer(h,f,1,r,i,8,s),i+=l}},getOutputLength:function(e,t){return this.base.getOutputLength(e*this.base.numComps,t)},isPassthrough:m.prototype.isPassthrough,fillRgb:m.prototype.fillRgb,isDefaultDecode:function(e){return!0},usesZeroToOneRange:!0},e}(),k=function(){function e(){this.name="DeviceGray",this.numComps=1,this.defaultColor=new Float32Array(this.numComps)}return e.prototype={getRgb:m.prototype.getRgb,getRgbItem:function(e,t,a,r){var i=255*e[t]|0
i=i<0?0:i>255?255:i,a[r]=a[r+1]=a[r+2]=i},getRgbBuffer:function(e,t,a,r,i,n,s){for(var o=255/((1<<n)-1),c=t,l=i,h=0;h<a;++h){var u=o*e[c++]|0
r[l++]=u,r[l++]=u,r[l++]=u,l+=s}},getOutputLength:function(e,t){return e*(3+t)},isPassthrough:m.prototype.isPassthrough,fillRgb:m.prototype.fillRgb,isDefaultDecode:function(e){return m.isDefaultDecode(e,this.numComps)},usesZeroToOneRange:!0},e}(),w=function(){function e(){this.name="DeviceRGB",this.numComps=3,this.defaultColor=new Float32Array(this.numComps)}return e.prototype={getRgb:m.prototype.getRgb,getRgbItem:function(e,t,a,r){var i=255*e[t]|0,n=255*e[t+1]|0,s=255*e[t+2]|0
a[r]=i<0?0:i>255?255:i,a[r+1]=n<0?0:n>255?255:n,a[r+2]=s<0?0:s>255?255:s},getRgbBuffer:function(e,t,a,r,i,n,s){if(8===n&&0===s)return void r.set(e.subarray(t,t+3*a),i)
for(var o=255/((1<<n)-1),c=t,l=i,h=0;h<a;++h)r[l++]=o*e[c++]|0,r[l++]=o*e[c++]|0,r[l++]=o*e[c++]|0,l+=s},getOutputLength:function(e,t){return e*(3+t)/3|0},isPassthrough:function(e){return 8===e},fillRgb:m.prototype.fillRgb,isDefaultDecode:function(e){return m.isDefaultDecode(e,this.numComps)},usesZeroToOneRange:!0},e}(),x=function(){function e(e,t,a,r,i){var n=e[t+0]*a,s=e[t+1]*a,o=e[t+2]*a,c=e[t+3]*a,l=n*(-4.387332384609988*n+54.48615194189176*s+18.82290502165302*o+212.25662451639585*c-285.2331026137004)+s*(1.7149763477362134*s-5.6096736904047315*o+-17.873870861415444*c-5.497006427196366)+o*(-2.5217340131683033*o-21.248923337353073*c+17.5119270841813)+c*(-21.86122147463605*c-189.48180835922747)+255|0,h=n*(8.841041422036149*n+60.118027045597366*s+6.871425592049007*o+31.159100130055922*c-79.2970844816548)+s*(-15.310361306967817*s+17.575251261109482*o+131.35250912493976*c-190.9453302588951)+o*(4.444339102852739*o+9.8632861493405*c-24.86741582555878)+c*(-20.737325471181034*c-187.80453709719578)+255|0,u=n*(.8842522430003296*n+8.078677503112928*s+30.89978309703729*o-.23883238689178934*c-14.183576799673286)+s*(10.49593273432072*s+63.02378494754052*o+50.606957656360734*c-112.23884253719248)+o*(.03296041114873217*o+115.60384449646641*c-193.58209356861505)+c*(-22.33816807309886*c-180.12613974708367)+255|0
r[i]=l>255?255:l<0?0:l,r[i+1]=h>255?255:h<0?0:h,r[i+2]=u>255?255:u<0?0:u}function t(){this.name="DeviceCMYK",this.numComps=4,this.defaultColor=new Float32Array(this.numComps),this.defaultColor[3]=1}return t.prototype={getRgb:m.prototype.getRgb,getRgbItem:function(t,a,r,i){e(t,a,1,r,i)},getRgbBuffer:function(t,a,r,i,n,s,o){for(var c=1/((1<<s)-1),l=0;l<r;l++)e(t,a,c,i,n),a+=4,n+=3+o},getOutputLength:function(e,t){return e/4*(3+t)|0},isPassthrough:m.prototype.isPassthrough,fillRgb:m.prototype.fillRgb,isDefaultDecode:function(e){return m.isDefaultDecode(e,this.numComps)},usesZeroToOneRange:!0},t}(),C=function(){function e(e,t,a){this.name="CalGray",this.numComps=1,this.defaultColor=new Float32Array(this.numComps),e||s("WhitePoint missing - required for color space CalGray"),t=t||[0,0,0],a=a||1,this.XW=e[0],this.YW=e[1],this.ZW=e[2],this.XB=t[0],this.YB=t[1],this.ZB=t[2],this.G=a,(this.XW<0||this.ZW<0||1!==this.YW)&&s("Invalid WhitePoint components for "+this.name+", no fallback available"),(this.XB<0||this.YB<0||this.ZB<0)&&(o("Invalid BlackPoint for "+this.name+", falling back to default"),this.XB=this.YB=this.ZB=0),0===this.XB&&0===this.YB&&0===this.ZB||u(this.name+", BlackPoint: XB: "+this.XB+", YB: "+this.YB+", ZB: "+this.ZB+", only default values are supported."),this.G<1&&(o("Invalid Gamma: "+this.G+" for "+this.name+", falling back to default"),this.G=1)}function t(e,t,a,r,i,n){var s=t[a]*n,o=Math.pow(s,e.G),c=e.YW*o,l=0|Math.max(295.8*Math.pow(c,.3333333333333333)-40.8,0)
r[i]=l,r[i+1]=l,r[i+2]=l}return e.prototype={getRgb:m.prototype.getRgb,getRgbItem:function(e,a,r,i){t(this,e,a,r,i,1)},getRgbBuffer:function(e,a,r,i,n,s,o){for(var c=1/((1<<s)-1),l=0;l<r;++l)t(this,e,a,i,n,c),a+=1,n+=3+o},getOutputLength:function(e,t){return e*(3+t)},isPassthrough:m.prototype.isPassthrough,fillRgb:m.prototype.fillRgb,isDefaultDecode:function(e){return m.isDefaultDecode(e,this.numComps)},usesZeroToOneRange:!0},e}(),S=function(){function e(e,t,a,r){this.name="CalRGB",this.numComps=3,this.defaultColor=new Float32Array(this.numComps),e||s("WhitePoint missing - required for color space CalRGB"),t=t||new Float32Array(3),a=a||new Float32Array([1,1,1]),r=r||new Float32Array([1,0,0,0,1,0,0,0,1])
var i=e[0],n=e[1],c=e[2]
this.whitePoint=e
var l=t[0],h=t[1],u=t[2]
this.blackPoint=t,this.GR=a[0],this.GG=a[1],this.GB=a[2],this.MXA=r[0],this.MYA=r[1],this.MZA=r[2],this.MXB=r[3],this.MYB=r[4],this.MZB=r[5],this.MXC=r[6],this.MYC=r[7],this.MZC=r[8],(i<0||c<0||1!==n)&&s("Invalid WhitePoint components for "+this.name+", no fallback available"),(l<0||h<0||u<0)&&(o("Invalid BlackPoint for "+this.name+" ["+l+", "+h+", "+u+"], falling back to default"),this.blackPoint=new Float32Array(3)),(this.GR<0||this.GG<0||this.GB<0)&&(o("Invalid Gamma ["+this.GR+", "+this.GG+", "+this.GB+"] for "+this.name+", falling back to default"),this.GR=this.GG=this.GB=1),(this.MXA<0||this.MYA<0||this.MZA<0||this.MXB<0||this.MYB<0||this.MZB<0||this.MXC<0||this.MYC<0||this.MZC<0)&&(o("Invalid Matrix for "+this.name+" ["+this.MXA+", "+this.MYA+", "+this.MZA+this.MXB+", "+this.MYB+", "+this.MZB+this.MXC+", "+this.MYC+", "+this.MZC+"], falling back to default"),this.MXA=this.MYB=this.MZC=1,this.MXB=this.MYA=this.MZA=this.MXC=this.MYC=this.MZB=0)}function t(e,t,a){a[0]=e[0]*t[0]+e[1]*t[1]+e[2]*t[2],a[1]=e[3]*t[0]+e[4]*t[1]+e[5]*t[2],a[2]=e[6]*t[0]+e[7]*t[1]+e[8]*t[2]}function a(e,t,a){a[0]=1*t[0]/e[0],a[1]=1*t[1]/e[1],a[2]=1*t[2]/e[2]}function r(e,t,a){a[0]=.95047*t[0]/e[0],a[1]=1*t[1]/e[1],a[2]=1.08883*t[2]/e[2]}function i(e){return e<=.0031308?n(0,1,12.92*e):n(0,1,1.055*Math.pow(e,1/2.4)-.055)}function n(e,t,a){return Math.max(e,Math.min(t,a))}function c(e){return e<0?-c(-e):e>8?Math.pow((e+16)/116,3):e*w}function l(e,t,a){if(0===e[0]&&0===e[1]&&0===e[2])return a[0]=t[0],a[1]=t[1],void(a[2]=t[2])
var r=c(0),i=r,n=c(e[0]),s=r,o=c(e[1]),l=r,h=c(e[2]),u=(1-i)/(1-n),f=1-u,d=(1-s)/(1-o),g=1-d,p=(1-l)/(1-h),m=1-p
a[0]=t[0]*u+f,a[1]=t[1]*d+g,a[2]=t[2]*p+m}function h(e,r,i){if(1===e[0]&&1===e[2])return i[0]=r[0],i[1]=r[1],void(i[2]=r[2])
var n=i
t(d,r,n)
var s=v
a(e,n,s),t(g,s,i)}function u(e,a,i){var n=i
t(d,a,n)
var s=v
r(e,n,s),t(g,s,i)}function f(e,a,r,s,o,c){var f=n(0,1,a[r]*c),d=n(0,1,a[r+1]*c),g=n(0,1,a[r+2]*c),m=Math.pow(f,e.GR),v=Math.pow(d,e.GG),w=Math.pow(g,e.GB),x=e.MXA*m+e.MXB*v+e.MXC*w,C=e.MYA*m+e.MYB*v+e.MYC*w,S=e.MZA*m+e.MZB*v+e.MZC*w,A=y
A[0]=x,A[1]=C,A[2]=S
var I=k
h(e.whitePoint,A,I)
var B=y
l(e.blackPoint,I,B)
var R=k
u(b,B,R)
var T=y
t(p,R,T)
var O=i(T[0]),P=i(T[1]),M=i(T[2])
s[o]=Math.round(255*O),s[o+1]=Math.round(255*P),s[o+2]=Math.round(255*M)}var d=new Float32Array([.8951,.2664,-.1614,-.7502,1.7135,.0367,.0389,-.0685,1.0296]),g=new Float32Array([.9869929,-.1470543,.1599627,.4323053,.5183603,.0492912,-.0085287,.0400428,.9684867]),p=new Float32Array([3.2404542,-1.5371385,-.4985314,-.969266,1.8760108,.041556,.0556434,-.2040259,1.0572252]),b=new Float32Array([1,1,1]),v=new Float32Array(3),y=new Float32Array(3),k=new Float32Array(3),w=Math.pow(24/116,3)/8
return e.prototype={getRgb:function(e,t){var a=new Uint8Array(3)
return this.getRgbItem(e,t,a,0),a},getRgbItem:function(e,t,a,r){f(this,e,t,a,r,1)},getRgbBuffer:function(e,t,a,r,i,n,s){for(var o=1/((1<<n)-1),c=0;c<a;++c)f(this,e,t,r,i,o),t+=3,i+=3+s},getOutputLength:function(e,t){return e*(3+t)/3|0},isPassthrough:m.prototype.isPassthrough,fillRgb:m.prototype.fillRgb,isDefaultDecode:function(e){return m.isDefaultDecode(e,this.numComps)},usesZeroToOneRange:!0},e}(),A=function(){function e(e,t,a){this.name="Lab",this.numComps=3,this.defaultColor=new Float32Array(this.numComps),e||s("WhitePoint missing - required for color space Lab"),t=t||[0,0,0],a=a||[-100,100,-100,100],this.XW=e[0],this.YW=e[1],this.ZW=e[2],this.amin=a[0],this.amax=a[1],this.bmin=a[2],this.bmax=a[3],this.XB=t[0],this.YB=t[1],this.ZB=t[2],(this.XW<0||this.ZW<0||1!==this.YW)&&s("Invalid WhitePoint components, no fallback available"),(this.XB<0||this.YB<0||this.ZB<0)&&(o("Invalid BlackPoint, falling back to default"),this.XB=this.YB=this.ZB=0),(this.amin>this.amax||this.bmin>this.bmax)&&(o("Invalid Range, falling back to defaults"),this.amin=-100,this.amax=100,this.bmin=-100,this.bmax=100)}function t(e){return e>=6/29?e*e*e:108/841*(e-4/29)}function a(e,t,a,r){return a+e*(r-a)/t}function r(e,r,i,n,s,o){var c=r[i],l=r[i+1],h=r[i+2]
n!==!1&&(c=a(c,n,0,100),l=a(l,n,e.amin,e.amax),h=a(h,n,e.bmin,e.bmax)),l=l>e.amax?e.amax:l<e.amin?e.amin:l,h=h>e.bmax?e.bmax:h<e.bmin?e.bmin:h
var u,f,d,g=(c+16)/116,p=g+l/500,m=g-h/200,b=e.XW*t(p),v=e.YW*t(g),y=e.ZW*t(m)
e.ZW<1?(u=3.1339*b+v*-1.617+y*-.4906,f=b*-.9785+1.916*v+.0333*y,d=.072*b+v*-.229+1.4057*y):(u=3.2406*b+v*-1.5372+y*-.4986,f=b*-.9689+1.8758*v+.0415*y,d=.0557*b+v*-.204+1.057*y),s[o]=u<=0?0:u>=1?255:255*Math.sqrt(u)|0,s[o+1]=f<=0?0:f>=1?255:255*Math.sqrt(f)|0,s[o+2]=d<=0?0:d>=1?255:255*Math.sqrt(d)|0}return e.prototype={getRgb:m.prototype.getRgb,getRgbItem:function(e,t,a,i){r(this,e,t,!1,a,i)},getRgbBuffer:function(e,t,a,i,n,s,o){for(var c=(1<<s)-1,l=0;l<a;l++)r(this,e,t,c,i,n),t+=3,n+=3+o},getOutputLength:function(e,t){return e*(3+t)/3|0},isPassthrough:m.prototype.isPassthrough,fillRgb:m.prototype.fillRgb,isDefaultDecode:function(e){return!0},usesZeroToOneRange:!1},e}()
t.ColorSpace=m},function(e,t,a){"use strict"
function r(e){switch(e){case"WinAnsiEncoding":return c
case"StandardEncoding":return o
case"MacRomanEncoding":return s
case"SymbolSetEncoding":return l
case"ZapfDingbatsEncoding":return h
case"ExpertEncoding":return i
case"MacExpertEncoding":return n
default:return null}}var i=["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","space","exclamsmall","Hungarumlautsmall","","dollaroldstyle","dollarsuperior","ampersandsmall","Acutesmall","parenleftsuperior","parenrightsuperior","twodotenleader","onedotenleader","comma","hyphen","period","fraction","zerooldstyle","oneoldstyle","twooldstyle","threeoldstyle","fouroldstyle","fiveoldstyle","sixoldstyle","sevenoldstyle","eightoldstyle","nineoldstyle","colon","semicolon","commasuperior","threequartersemdash","periodsuperior","questionsmall","","asuperior","bsuperior","centsuperior","dsuperior","esuperior","","","isuperior","","","lsuperior","msuperior","nsuperior","osuperior","","","rsuperior","ssuperior","tsuperior","","ff","fi","fl","ffi","ffl","parenleftinferior","","parenrightinferior","Circumflexsmall","hyphensuperior","Gravesmall","Asmall","Bsmall","Csmall","Dsmall","Esmall","Fsmall","Gsmall","Hsmall","Ismall","Jsmall","Ksmall","Lsmall","Msmall","Nsmall","Osmall","Psmall","Qsmall","Rsmall","Ssmall","Tsmall","Usmall","Vsmall","Wsmall","Xsmall","Ysmall","Zsmall","colonmonetary","onefitted","rupiah","Tildesmall","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","exclamdownsmall","centoldstyle","Lslashsmall","","","Scaronsmall","Zcaronsmall","Dieresissmall","Brevesmall","Caronsmall","","Dotaccentsmall","","","Macronsmall","","","figuredash","hypheninferior","","","Ogoneksmall","Ringsmall","Cedillasmall","","","","onequarter","onehalf","threequarters","questiondownsmall","oneeighth","threeeighths","fiveeighths","seveneighths","onethird","twothirds","","","zerosuperior","onesuperior","twosuperior","threesuperior","foursuperior","fivesuperior","sixsuperior","sevensuperior","eightsuperior","ninesuperior","zeroinferior","oneinferior","twoinferior","threeinferior","fourinferior","fiveinferior","sixinferior","seveninferior","eightinferior","nineinferior","centinferior","dollarinferior","periodinferior","commainferior","Agravesmall","Aacutesmall","Acircumflexsmall","Atildesmall","Adieresissmall","Aringsmall","AEsmall","Ccedillasmall","Egravesmall","Eacutesmall","Ecircumflexsmall","Edieresissmall","Igravesmall","Iacutesmall","Icircumflexsmall","Idieresissmall","Ethsmall","Ntildesmall","Ogravesmall","Oacutesmall","Ocircumflexsmall","Otildesmall","Odieresissmall","OEsmall","Oslashsmall","Ugravesmall","Uacutesmall","Ucircumflexsmall","Udieresissmall","Yacutesmall","Thornsmall","Ydieresissmall"],n=["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","space","exclamsmall","Hungarumlautsmall","centoldstyle","dollaroldstyle","dollarsuperior","ampersandsmall","Acutesmall","parenleftsuperior","parenrightsuperior","twodotenleader","onedotenleader","comma","hyphen","period","fraction","zerooldstyle","oneoldstyle","twooldstyle","threeoldstyle","fouroldstyle","fiveoldstyle","sixoldstyle","sevenoldstyle","eightoldstyle","nineoldstyle","colon","semicolon","","threequartersemdash","","questionsmall","","","","","Ethsmall","","","onequarter","onehalf","threequarters","oneeighth","threeeighths","fiveeighths","seveneighths","onethird","twothirds","","","","","","","ff","fi","fl","ffi","ffl","parenleftinferior","","parenrightinferior","Circumflexsmall","hypheninferior","Gravesmall","Asmall","Bsmall","Csmall","Dsmall","Esmall","Fsmall","Gsmall","Hsmall","Ismall","Jsmall","Ksmall","Lsmall","Msmall","Nsmall","Osmall","Psmall","Qsmall","Rsmall","Ssmall","Tsmall","Usmall","Vsmall","Wsmall","Xsmall","Ysmall","Zsmall","colonmonetary","onefitted","rupiah","Tildesmall","","","asuperior","centsuperior","","","","","Aacutesmall","Agravesmall","Acircumflexsmall","Adieresissmall","Atildesmall","Aringsmall","Ccedillasmall","Eacutesmall","Egravesmall","Ecircumflexsmall","Edieresissmall","Iacutesmall","Igravesmall","Icircumflexsmall","Idieresissmall","Ntildesmall","Oacutesmall","Ogravesmall","Ocircumflexsmall","Odieresissmall","Otildesmall","Uacutesmall","Ugravesmall","Ucircumflexsmall","Udieresissmall","","eightsuperior","fourinferior","threeinferior","sixinferior","eightinferior","seveninferior","Scaronsmall","","centinferior","twoinferior","","Dieresissmall","","Caronsmall","osuperior","fiveinferior","","commainferior","periodinferior","Yacutesmall","","dollarinferior","","Thornsmall","","nineinferior","zeroinferior","Zcaronsmall","AEsmall","Oslashsmall","questiondownsmall","oneinferior","Lslashsmall","","","","","","","Cedillasmall","","","","","","OEsmall","figuredash","hyphensuperior","","","","","exclamdownsmall","","Ydieresissmall","","onesuperior","twosuperior","threesuperior","foursuperior","fivesuperior","sixsuperior","sevensuperior","ninesuperior","zerosuperior","","esuperior","rsuperior","tsuperior","","","isuperior","ssuperior","dsuperior","","","","","","lsuperior","Ogoneksmall","Brevesmall","Macronsmall","bsuperior","nsuperior","msuperior","commasuperior","periodsuperior","Dotaccentsmall","Ringsmall"],s=["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","space","exclam","quotedbl","numbersign","dollar","percent","ampersand","quotesingle","parenleft","parenright","asterisk","plus","comma","hyphen","period","slash","zero","one","two","three","four","five","six","seven","eight","nine","colon","semicolon","less","equal","greater","question","at","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","bracketleft","backslash","bracketright","asciicircum","underscore","grave","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","braceleft","bar","braceright","asciitilde","","Adieresis","Aring","Ccedilla","Eacute","Ntilde","Odieresis","Udieresis","aacute","agrave","acircumflex","adieresis","atilde","aring","ccedilla","eacute","egrave","ecircumflex","edieresis","iacute","igrave","icircumflex","idieresis","ntilde","oacute","ograve","ocircumflex","odieresis","otilde","uacute","ugrave","ucircumflex","udieresis","dagger","degree","cent","sterling","section","bullet","paragraph","germandbls","registered","copyright","trademark","acute","dieresis","notequal","AE","Oslash","infinity","plusminus","lessequal","greaterequal","yen","mu","partialdiff","summation","product","pi","integral","ordfeminine","ordmasculine","Omega","ae","oslash","questiondown","exclamdown","logicalnot","radical","florin","approxequal","Delta","guillemotleft","guillemotright","ellipsis","space","Agrave","Atilde","Otilde","OE","oe","endash","emdash","quotedblleft","quotedblright","quoteleft","quoteright","divide","lozenge","ydieresis","Ydieresis","fraction","currency","guilsinglleft","guilsinglright","fi","fl","daggerdbl","periodcentered","quotesinglbase","quotedblbase","perthousand","Acircumflex","Ecircumflex","Aacute","Edieresis","Egrave","Iacute","Icircumflex","Idieresis","Igrave","Oacute","Ocircumflex","apple","Ograve","Uacute","Ucircumflex","Ugrave","dotlessi","circumflex","tilde","macron","breve","dotaccent","ring","cedilla","hungarumlaut","ogonek","caron"],o=["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","space","exclam","quotedbl","numbersign","dollar","percent","ampersand","quoteright","parenleft","parenright","asterisk","plus","comma","hyphen","period","slash","zero","one","two","three","four","five","six","seven","eight","nine","colon","semicolon","less","equal","greater","question","at","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","bracketleft","backslash","bracketright","asciicircum","underscore","quoteleft","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","braceleft","bar","braceright","asciitilde","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","exclamdown","cent","sterling","fraction","yen","florin","section","currency","quotesingle","quotedblleft","guillemotleft","guilsinglleft","guilsinglright","fi","fl","","endash","dagger","daggerdbl","periodcentered","","paragraph","bullet","quotesinglbase","quotedblbase","quotedblright","guillemotright","ellipsis","perthousand","","questiondown","","grave","acute","circumflex","tilde","macron","breve","dotaccent","dieresis","","ring","cedilla","","hungarumlaut","ogonek","caron","emdash","","","","","","","","","","","","","","","","","AE","","ordfeminine","","","","","Lslash","Oslash","OE","ordmasculine","","","","","","ae","","","","dotlessi","","","lslash","oslash","oe","germandbls"],c=["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","space","exclam","quotedbl","numbersign","dollar","percent","ampersand","quotesingle","parenleft","parenright","asterisk","plus","comma","hyphen","period","slash","zero","one","two","three","four","five","six","seven","eight","nine","colon","semicolon","less","equal","greater","question","at","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","bracketleft","backslash","bracketright","asciicircum","underscore","grave","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","braceleft","bar","braceright","asciitilde","bullet","Euro","bullet","quotesinglbase","florin","quotedblbase","ellipsis","dagger","daggerdbl","circumflex","perthousand","Scaron","guilsinglleft","OE","bullet","Zcaron","bullet","bullet","quoteleft","quoteright","quotedblleft","quotedblright","bullet","endash","emdash","tilde","trademark","scaron","guilsinglright","oe","bullet","zcaron","Ydieresis","space","exclamdown","cent","sterling","currency","yen","brokenbar","section","dieresis","copyright","ordfeminine","guillemotleft","logicalnot","hyphen","registered","macron","degree","plusminus","twosuperior","threesuperior","acute","mu","paragraph","periodcentered","cedilla","onesuperior","ordmasculine","guillemotright","onequarter","onehalf","threequarters","questiondown","Agrave","Aacute","Acircumflex","Atilde","Adieresis","Aring","AE","Ccedilla","Egrave","Eacute","Ecircumflex","Edieresis","Igrave","Iacute","Icircumflex","Idieresis","Eth","Ntilde","Ograve","Oacute","Ocircumflex","Otilde","Odieresis","multiply","Oslash","Ugrave","Uacute","Ucircumflex","Udieresis","Yacute","Thorn","germandbls","agrave","aacute","acircumflex","atilde","adieresis","aring","ae","ccedilla","egrave","eacute","ecircumflex","edieresis","igrave","iacute","icircumflex","idieresis","eth","ntilde","ograve","oacute","ocircumflex","otilde","odieresis","divide","oslash","ugrave","uacute","ucircumflex","udieresis","yacute","thorn","ydieresis"],l=["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","space","exclam","universal","numbersign","existential","percent","ampersand","suchthat","parenleft","parenright","asteriskmath","plus","comma","minus","period","slash","zero","one","two","three","four","five","six","seven","eight","nine","colon","semicolon","less","equal","greater","question","congruent","Alpha","Beta","Chi","Delta","Epsilon","Phi","Gamma","Eta","Iota","theta1","Kappa","Lambda","Mu","Nu","Omicron","Pi","Theta","Rho","Sigma","Tau","Upsilon","sigma1","Omega","Xi","Psi","Zeta","bracketleft","therefore","bracketright","perpendicular","underscore","radicalex","alpha","beta","chi","delta","epsilon","phi","gamma","eta","iota","phi1","kappa","lambda","mu","nu","omicron","pi","theta","rho","sigma","tau","upsilon","omega1","omega","xi","psi","zeta","braceleft","bar","braceright","similar","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","Euro","Upsilon1","minute","lessequal","fraction","infinity","florin","club","diamond","heart","spade","arrowboth","arrowleft","arrowup","arrowright","arrowdown","degree","plusminus","second","greaterequal","multiply","proportional","partialdiff","bullet","divide","notequal","equivalence","approxequal","ellipsis","arrowvertex","arrowhorizex","carriagereturn","aleph","Ifraktur","Rfraktur","weierstrass","circlemultiply","circleplus","emptyset","intersection","union","propersuperset","reflexsuperset","notsubset","propersubset","reflexsubset","element","notelement","angle","gradient","registerserif","copyrightserif","trademarkserif","product","radical","dotmath","logicalnot","logicaland","logicalor","arrowdblboth","arrowdblleft","arrowdblup","arrowdblright","arrowdbldown","lozenge","angleleft","registersans","copyrightsans","trademarksans","summation","parenlefttp","parenleftex","parenleftbt","bracketlefttp","bracketleftex","bracketleftbt","bracelefttp","braceleftmid","braceleftbt","braceex","","angleright","integral","integraltp","integralex","integralbt","parenrighttp","parenrightex","parenrightbt","bracketrighttp","bracketrightex","bracketrightbt","bracerighttp","bracerightmid","bracerightbt"],h=["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","space","a1","a2","a202","a3","a4","a5","a119","a118","a117","a11","a12","a13","a14","a15","a16","a105","a17","a18","a19","a20","a21","a22","a23","a24","a25","a26","a27","a28","a6","a7","a8","a9","a10","a29","a30","a31","a32","a33","a34","a35","a36","a37","a38","a39","a40","a41","a42","a43","a44","a45","a46","a47","a48","a49","a50","a51","a52","a53","a54","a55","a56","a57","a58","a59","a60","a61","a62","a63","a64","a65","a66","a67","a68","a69","a70","a71","a72","a73","a74","a203","a75","a204","a76","a77","a78","a79","a81","a82","a83","a84","a97","a98","a99","a100","","a89","a90","a93","a94","a91","a92","a205","a85","a206","a86","a87","a88","a95","a96","","","","","","","","","","","","","","","","","","","","a101","a102","a103","a104","a106","a107","a108","a112","a111","a110","a109","a120","a121","a122","a123","a124","a125","a126","a127","a128","a129","a130","a131","a132","a133","a134","a135","a136","a137","a138","a139","a140","a141","a142","a143","a144","a145","a146","a147","a148","a149","a150","a151","a152","a153","a154","a155","a156","a157","a158","a159","a160","a161","a163","a164","a196","a165","a192","a166","a167","a168","a169","a170","a171","a172","a173","a162","a174","a175","a176","a177","a178","a179","a193","a180","a199","a181","a200","a182","","a201","a183","a184","a197","a185","a194","a198","a186","a195","a187","a188","a189","a190","a191"]
t.WinAnsiEncoding=c,t.StandardEncoding=o,t.MacRomanEncoding=s,t.SymbolSetEncoding=l,t.ZapfDingbatsEncoding=h,t.ExpertEncoding=i,t.getEncoding=r},function(e,t,a){"use strict"
var r=a(0),i=a(1),n=a(2),s=r.MissingDataException,o=r.StreamType,c=r.assert,l=r.error,h=r.info,u=r.isArray,f=r.isInt,d=r.isNum,g=r.isString,p=r.warn,m=i.EOF,b=i.Cmd,v=i.Dict,y=i.Name,k=i.Ref,w=i.isEOF,x=i.isCmd,C=i.isDict,S=i.isName,A=n.Ascii85Stream,I=n.AsciiHexStream,B=n.CCITTFaxStream,R=n.FlateStream,T=n.Jbig2Stream,O=n.JpegStream,P=n.JpxStream,M=n.LZWStream,E=n.NullStream,L=n.PredictorStream,D=n.RunLengthStream,F=function(){function e(e,t,a,r){this.lexer=e,this.allowStreams=t,this.xref=a,this.recoveryMode=r||!1,this.imageCache=Object.create(null),this.refill()}return e.prototype={refill:function(){this.buf1=this.lexer.getObj(),this.buf2=this.lexer.getObj()},shift:function(){x(this.buf2,"ID")?(this.buf1=this.buf2,this.buf2=null):(this.buf1=this.buf2,this.buf2=this.lexer.getObj())},tryShift:function(){try{return this.shift(),!0}catch(e){if(e instanceof s)throw e
return!1}},getObj:function(e){var t=this.buf1
if(this.shift(),t instanceof b)switch(t.cmd){case"BI":return this.makeInlineImage(e)
case"[":for(var a=[];!x(this.buf1,"]")&&!w(this.buf1);)a.push(this.getObj(e))
return w(this.buf1)?(this.recoveryMode||l("End of file inside array"),a):(this.shift(),a)
case"<<":for(var r=new v(this.xref);!x(this.buf1,">>")&&!w(this.buf1);)if(S(this.buf1)){var i=this.buf1.name
if(this.shift(),w(this.buf1))break
r.set(i,this.getObj(e))}else h("Malformed dictionary: key must be a name object"),this.shift()
return w(this.buf1)?(this.recoveryMode||l("End of file inside dictionary"),r):x(this.buf2,"stream")?this.allowStreams?this.makeStream(r,e):r:(this.shift(),r)
default:return t}if(f(t)){var n=t
if(f(this.buf1)&&x(this.buf2,"R")){var s=new k(n,this.buf1)
return this.shift(),this.shift(),s}return n}if(g(t)){var o=t
return e&&(o=e.decryptString(o)),o}return t},findDefaultInlineStreamEnd:function(e){for(var t,a,r,i,n=e.pos,s=0;(t=e.getByte())!==-1;)if(0===s)s=69===t?1:0
else if(1===s)s=73===t?2:0
else if(c(2===s),32===t||10===t||13===t){for(r=5,i=e.peekBytes(r),a=0;a<r;a++)if(10!==(t=i[a])&&13!==t&&(t<32||t>127)){s=0
break}if(2===s)break}else s=0
return e.pos-4-n},findDCTDecodeInlineStreamEnd:function(e){for(var t,a,r,i=e.pos,n=!1;(t=e.getByte())!==-1;)if(255===t){switch(e.getByte()){case 0:break
case 255:e.skip(-1)
break
case 217:n=!0
break
case 192:case 193:case 194:case 195:case 197:case 198:case 199:case 201:case 202:case 203:case 205:case 206:case 207:case 196:case 204:case 218:case 219:case 220:case 221:case 222:case 223:case 224:case 225:case 226:case 227:case 228:case 229:case 230:case 231:case 232:case 233:case 234:case 235:case 236:case 237:case 238:case 239:case 254:a=e.getUint16(),a>2?e.skip(a-2):e.skip(-2)}if(n)break}return r=e.pos-i,t===-1?(p("Inline DCTDecode image stream: EOI marker not found, searching for /EI/ instead."),e.skip(-r),this.findDefaultInlineStreamEnd(e)):(this.inlineStreamSkipEI(e),r)},findASCII85DecodeInlineStreamEnd:function(e){for(var t,a,r=e.pos;(t=e.getByte())!==-1;)if(126===t&&62===e.peekByte()){e.skip()
break}return a=e.pos-r,t===-1?(p("Inline ASCII85Decode image stream: EOD marker not found, searching for /EI/ instead."),e.skip(-a),this.findDefaultInlineStreamEnd(e)):(this.inlineStreamSkipEI(e),a)},findASCIIHexDecodeInlineStreamEnd:function(e){for(var t,a,r=e.pos;(t=e.getByte())!==-1&&62!==t;);return a=e.pos-r,t===-1?(p("Inline ASCIIHexDecode image stream: EOD marker not found, searching for /EI/ instead."),e.skip(-a),this.findDefaultInlineStreamEnd(e)):(this.inlineStreamSkipEI(e),a)},inlineStreamSkipEI:function(e){for(var t,a=0;(t=e.getByte())!==-1;)if(0===a)a=69===t?1:0
else if(1===a)a=73===t?2:0
else if(2===a)break},makeInlineImage:function(e){for(var t=this.lexer,a=t.stream,r=new v(this.xref);!x(this.buf1,"ID")&&!w(this.buf1);){S(this.buf1)||l("Dictionary key must be a name object")
var i=this.buf1.name
if(this.shift(),w(this.buf1))break
r.set(i,this.getObj(e))}var n,s=r.get("Filter","F")
if(S(s))n=s.name
else if(u(s)){var o=this.xref.fetchIfRef(s[0])
S(o)&&(n=o.name)}var c,h,f,d=a.pos
c="DCTDecode"===n||"DCT"===n?this.findDCTDecodeInlineStreamEnd(a):"ASCII85Decide"===n||"A85"===n?this.findASCII85DecodeInlineStreamEnd(a):"ASCIIHexDecode"===n||"AHx"===n?this.findASCIIHexDecodeInlineStreamEnd(a):this.findDefaultInlineStreamEnd(a)
var g,p=a.makeSubStream(d,c,r)
if(c<1e3){var m=p.getBytes()
p.reset()
var y=1,k=0
for(h=0,f=m.length;h<f;++h)y+=255&m[h],k+=y
if(g=k%65521<<16|y%65521,this.imageCache.adler32===g)return this.buf2=b.get("EI"),this.shift(),this.imageCache[g].reset(),this.imageCache[g]}return e&&(p=e.createStream(p,c)),p=this.filter(p,r,c),p.dict=r,void 0!==g&&(p.cacheKey="inline_"+c+"_"+g,this.imageCache[g]=p),this.buf2=b.get("EI"),this.shift(),p},makeStream:function(e,t){var a=this.lexer,r=a.stream
a.skipToNextLine()
var i=r.pos-1,n=e.get("Length")
if(f(n)||(h("Bad "+n+" attribute in stream"),n=0),r.pos=i+n,a.nextChar(),this.tryShift()&&x(this.buf2,"endstream"))this.shift()
else{r.pos=i
for(var s,o,c=[101,110,100,115,116,114,101,97,109],u=0,d=!1;r.pos<r.end;){var g=r.peekBytes(2048),p=g.length-9
if(p<=0)break
for(d=!1,s=0;s<p;){for(o=0;o<9&&g[s+o]===c[o];)o++
if(o>=9){d=!0
break}s++}if(d){u+=s,r.pos+=s
break}u+=p,r.pos+=p}d||l("Missing endstream"),n=u,a.nextChar(),this.shift(),this.shift()}return this.shift(),r=r.makeSubStream(i,n,e),t&&(r=t.createStream(r,n)),r=this.filter(r,e,n),r.dict=e,r},filter:function(e,t,a){var r=t.get("Filter","F"),i=t.get("DecodeParms","DP")
if(S(r))return u(i)&&(i=this.xref.fetchIfRef(i[0])),this.makeFilter(e,r.name,a,i)
var n=a
if(u(r))for(var s=r,o=i,c=0,h=s.length;c<h;++c)r=this.xref.fetchIfRef(s[c]),S(r)||l("Bad filter name: "+r),i=null,u(o)&&c in o&&(i=this.xref.fetchIfRef(o[c])),e=this.makeFilter(e,r.name,n,i),n=null
return e},makeFilter:function(e,t,a,r){if(0===a)return p('Empty "'+t+'" stream.'),new E(e)
try{var i=this.xref.stats.streamTypes
if("FlateDecode"===t||"Fl"===t)return i[o.FLATE]=!0,r?new L(new R(e,a),a,r):new R(e,a)
if("LZWDecode"===t||"LZW"===t){i[o.LZW]=!0
var n=1
return r?(r.has("EarlyChange")&&(n=r.get("EarlyChange")),new L(new M(e,a,n),a,r)):new M(e,a,n)}return"DCTDecode"===t||"DCT"===t?(i[o.DCT]=!0,new O(e,a,e.dict,r)):"JPXDecode"===t||"JPX"===t?(i[o.JPX]=!0,new P(e,a,e.dict,r)):"ASCII85Decode"===t||"A85"===t?(i[o.A85]=!0,new A(e,a)):"ASCIIHexDecode"===t||"AHx"===t?(i[o.AHX]=!0,new I(e,a)):"CCITTFaxDecode"===t||"CCF"===t?(i[o.CCF]=!0,new B(e,a,r)):"RunLengthDecode"===t||"RL"===t?(i[o.RL]=!0,new D(e,a)):"JBIG2Decode"===t?(i[o.JBIG]=!0,new T(e,a,e.dict,r)):(p('filter "'+t+'" not supported yet'),e)}catch(t){if(t instanceof s)throw t
return p('Invalid stream: "'+t+'"'),new E(e)}}},e}(),q=function(){function e(e,t){this.stream=e,this.nextChar(),this.strBuf=[],this.knownCommands=t}function t(e){return e>=48&&e<=57?15&e:e>=65&&e<=70||e>=97&&e<=102?9+(15&e):-1}var a=[1,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,2,0,0,2,2,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,2,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
return e.prototype={nextChar:function(){return this.currentChar=this.stream.getByte()},peekChar:function(){return this.stream.peekByte()},getNumber:function(){var e=this.currentChar,t=!1,a=0,r=1
if(45===e?(r=-1,45===(e=this.nextChar())&&(e=this.nextChar())):43===e&&(e=this.nextChar()),46===e&&(a=10,e=this.nextChar()),e<48||e>57)return l("Invalid number: "+String.fromCharCode(e)),0
for(var i=e-48,n=0,s=1;(e=this.nextChar())>=0;)if(48<=e&&e<=57){var o=e-48
t?n=10*n+o:(0!==a&&(a*=10),i=10*i+o)}else if(46===e){if(0!==a)break
a=1}else if(45===e)p("Badly formatted number")
else{if(69!==e&&101!==e)break
if(43===(e=this.peekChar())||45===e)s=45===e?-1:1,this.nextChar()
else if(e<48||e>57)break
t=!0}return 0!==a&&(i/=a),t&&(i*=Math.pow(10,s*n)),r*i},getString:function(){var e=1,t=!1,a=this.strBuf
a.length=0
for(var r=this.nextChar();;){var i=!1
switch(0|r){case-1:p("Unterminated string"),t=!0
break
case 40:++e,a.push("(")
break
case 41:0==--e?(this.nextChar(),t=!0):a.push(")")
break
case 92:switch(r=this.nextChar()){case-1:p("Unterminated string"),t=!0
break
case 110:a.push("\n")
break
case 114:a.push("\r")
break
case 116:a.push("\t")
break
case 98:a.push("\b")
break
case 102:a.push("\f")
break
case 92:case 40:case 41:a.push(String.fromCharCode(r))
break
case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:var n=15&r
r=this.nextChar(),i=!0,r>=48&&r<=55&&(n=(n<<3)+(15&r),(r=this.nextChar())>=48&&r<=55&&(i=!1,n=(n<<3)+(15&r))),a.push(String.fromCharCode(n))
break
case 13:10===this.peekChar()&&this.nextChar()
break
case 10:break
default:a.push(String.fromCharCode(r))}break
default:a.push(String.fromCharCode(r))}if(t)break
i||(r=this.nextChar())}return a.join("")},getName:function(){var e,r,i=this.strBuf
for(i.length=0;(e=this.nextChar())>=0&&!a[e];)if(35===e){if(e=this.nextChar(),a[e]){p("Lexer_getName: NUMBER SIGN (#) should be followed by a hexadecimal number."),i.push("#")
break}var n=t(e)
if(n!==-1){r=e,e=this.nextChar()
var s=t(e)
if(s===-1){if(p("Lexer_getName: Illegal digit ("+String.fromCharCode(e)+") in hexadecimal number."),i.push("#",String.fromCharCode(r)),a[e])break
i.push(String.fromCharCode(e))
continue}i.push(String.fromCharCode(n<<4|s))}else i.push("#",String.fromCharCode(e))}else i.push(String.fromCharCode(e))
return i.length>127&&p("name token is longer than allowed by the spec: "+i.length),y.get(i.join(""))},getHexString:function(){var e=this.strBuf
e.length=0
for(var r,i,n=this.currentChar,s=!0;;){if(n<0){p("Unterminated hex string")
break}if(62===n){this.nextChar()
break}if(1!==a[n]){if(s){if((r=t(n))===-1){p('Ignoring invalid character "'+n+'" in hex string'),n=this.nextChar()
continue}}else{if((i=t(n))===-1){p('Ignoring invalid character "'+n+'" in hex string'),n=this.nextChar()
continue}e.push(String.fromCharCode(r<<4|i))}s=!s,n=this.nextChar()}else n=this.nextChar()}return e.join("")},getObj:function(){for(var e=!1,t=this.currentChar;;){if(t<0)return m
if(e)10!==t&&13!==t||(e=!1)
else if(37===t)e=!0
else if(1!==a[t])break
t=this.nextChar()}switch(0|t){case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:case 43:case 45:case 46:return this.getNumber()
case 40:return this.getString()
case 47:return this.getName()
case 91:return this.nextChar(),b.get("[")
case 93:return this.nextChar(),b.get("]")
case 60:return t=this.nextChar(),60===t?(this.nextChar(),b.get("<<")):this.getHexString()
case 62:return t=this.nextChar(),62===t?(this.nextChar(),b.get(">>")):b.get(">")
case 123:return this.nextChar(),b.get("{")
case 125:return this.nextChar(),b.get("}")
case 41:this.nextChar(),l("Illegal character: "+t)}for(var r=String.fromCharCode(t),i=this.knownCommands,n=i&&void 0!==i[r];(t=this.nextChar())>=0&&!a[t];){var s=r+String.fromCharCode(t)
if(n&&void 0===i[s])break
128===r.length&&l("Command token too long: "+r.length),r=s,n=i&&void 0!==i[r]}return"true"===r||"false"!==r&&("null"===r?null:b.get(r))},skipToNextLine:function(){for(var e=this.currentChar;e>=0;){if(13===e){e=this.nextChar(),10===e&&this.nextChar()
break}if(10===e){this.nextChar()
break}e=this.nextChar()}}},e}(),U={create:function(e){function t(e,t){var a=c.get(e)
if(f(a)&&(t?a>=0:a>0))return a
throw new Error('The "'+e+'" parameter in the linearization dictionary is invalid.')}var a,r,i=new F(new q(e),!1,null),n=i.getObj(),s=i.getObj(),o=i.getObj(),c=i.getObj()
if(!(f(n)&&f(s)&&x(o,"obj")&&C(c)&&d(a=c.get("Linearized"))&&a>0))return null
if((r=t("L"))!==e.length)throw new Error('The "L" parameter in the linearization dictionary does not equal the stream length.')
return{length:r,hints:function(){var e,t,a=c.get("H")
if(u(a)&&(2===(e=a.length)||4===e)){for(var r=0;r<e;r++)if(!(f(t=a[r])&&t>0))throw new Error("Hint ("+r+") in the linearization dictionary is invalid.")
return a}throw new Error("Hint array in the linearization dictionary is invalid.")}(),objectNumberFirst:t("O"),endFirst:t("E"),numPages:t("N"),mainXRefEntriesOffset:t("T"),pageFirst:c.has("P")?t("P",!0):0}}}
t.Lexer=q,t.Linearization=U,t.Parser=F},function(e,t,a){"use strict"
function r(e){var t
if("object"!=typeof e)return!1
if(u(e))t=e
else{if(!f(e))return!1
t=e.dict}return t.has("FunctionType")}var i=a(0),n=a(1),s=a(34),o=i.error,c=i.info,l=i.isArray,h=i.isBool,u=n.isDict,f=n.isStream,d=s.PostScriptLexer,g=s.PostScriptParser,p=function(){return{getSampleArray:function(e,t,a,r){var i,n,s=1
for(i=0,n=e.length;i<n;i++)s*=e[i]
s*=t
var o=new Array(s),c=0,l=0,h=1/(Math.pow(2,a)-1),u=r.getBytes((s*a+7)/8),f=0
for(i=0;i<s;i++){for(;c<a;)l<<=8,l|=u[f++],c+=8
c-=a,o[i]=(l>>c)*h,l&=(1<<c)-1}return o},getIR:function(e,t){var a=t.dict
a||(a=t)
var r=[this.constructSampled,null,this.constructInterpolated,this.constructStiched,this.constructPostScript],i=a.get("FunctionType"),n=r[i]
return n||o("Unknown type of function"),n.call(this,t,a,e)},fromIR:function(e){switch(e[0]){case 0:return this.constructSampledFromIR(e)
case 2:return this.constructInterpolatedFromIR(e)
case 3:return this.constructStichedFromIR(e)
default:return this.constructPostScriptFromIR(e)}},parse:function(e,t){var a=this.getIR(e,t)
return this.fromIR(a)},parseArray:function(e,t){if(!l(t))return this.parse(e,t)
for(var a=[],r=0,i=t.length;r<i;r++){var n=e.fetchIfRef(t[r])
a.push(p.parse(e,n))}return function(e,t,r,i){for(var n=0,s=a.length;n<s;n++)a[n](e,t,r,i+n)}},constructSampled:function(e,t){function a(e){for(var t=e.length,a=[],r=0,i=0;i<t;i+=2)a[r]=[e[i],e[i+1]],++r
return a}var r=t.getArray("Domain"),i=t.getArray("Range")
r&&i||o("No domain or range")
var n=r.length/2,s=i.length/2
r=a(r),i=a(i)
var l=t.get("Size"),h=t.get("BitsPerSample"),u=t.get("Order")||1
1!==u&&c("No support for cubic spline interpolation: "+u)
var f=t.getArray("Encode")
if(!f){f=[]
for(var d=0;d<n;++d)f.push(0),f.push(l[d]-1)}f=a(f)
var g=t.getArray("Decode")
return g=g?a(g):i,[0,n,r,f,g,this.getSampleArray(l,s,h,e),l,s,Math.pow(2,h)-1,i]},constructSampledFromIR:function(e){function t(e,t,a,r,i){return r+(i-r)/(a-t)*(e-t)}return function(a,r,i,n){var s,o,c=e[1],l=e[2],h=e[3],u=e[4],f=e[5],d=e[6],g=e[7],p=e[9],m=1<<c,b=new Float64Array(m),v=new Uint32Array(m)
for(o=0;o<m;o++)b[o]=1
var y=g,k=1
for(s=0;s<c;++s){var w=l[s][0],x=l[s][1],C=Math.min(Math.max(a[r+s],w),x),S=t(C,w,x,h[s][0],h[s][1]),A=d[s]
S=Math.min(Math.max(S,0),A-1)
var I=S<A-1?Math.floor(S):S-1,B=I+1-S,R=S-I,T=I*y,O=T+y
for(o=0;o<m;o++)o&k?(b[o]*=R,v[o]+=O):(b[o]*=B,v[o]+=T)
y*=A,k<<=1}for(o=0;o<g;++o){var P=0
for(s=0;s<m;s++)P+=f[v[s]+o]*b[s]
P=t(P,0,1,u[o][0],u[o][1]),i[n+o]=Math.min(Math.max(P,p[o][0]),p[o][1])}}},constructInterpolated:function(e,t){var a=t.getArray("C0")||[0],r=t.getArray("C1")||[1],i=t.get("N")
l(a)&&l(r)||o("Illegal dictionary for interpolated function")
for(var n=a.length,s=[],c=0;c<n;++c)s.push(r[c]-a[c])
return[2,a,s,i]},constructInterpolatedFromIR:function(e){var t=e[1],a=e[2],r=e[3],i=a.length
return function(e,n,s,o){for(var c=1===r?e[n]:Math.pow(e[n],r),l=0;l<i;++l)s[o+l]=t[l]+c*a[l]}},constructStiched:function(e,t,a){var r=t.getArray("Domain")
r||o("No domain"),1!=r.length/2&&o("Bad domain for stiched function")
for(var i=t.get("Functions"),n=[],s=0,c=i.length;s<c;++s)n.push(p.getIR(a,a.fetchIfRef(i[s])))
return[3,r,t.getArray("Bounds"),t.getArray("Encode"),n]},constructStichedFromIR:function(e){for(var t=e[1],a=e[2],r=e[3],i=e[4],n=[],s=new Float32Array(1),o=0,c=i.length;o<c;o++)n.push(p.fromIR(i[o]))
return function(e,i,o,c){for(var l=function(e,t,a){return e>a?e=a:e<t&&(e=t),e}(e[i],t[0],t[1]),h=0,u=a.length;h<u&&!(l<a[h]);++h);var f=t[0]
h>0&&(f=a[h-1])
var d=t[1]
h<a.length&&(d=a[h])
var g=r[2*h],p=r[2*h+1]
s[0]=f===d?g:g+(l-f)*(p-g)/(d-f),n[h](s,0,o,c)}},constructPostScript:function(e,t,a){var r=t.getArray("Domain"),i=t.getArray("Range")
r||o("No domain."),i||o("No range.")
var n=new d(e)
return[4,r,i,new g(n).parse()]},constructPostScriptFromIR:function(e){var t=e[1],a=e[2],r=e[3],i=(new v).compile(r,t,a)
if(i)return new Function("src","srcOffset","dest","destOffset",i)
c("Unable to compile PS function")
var n=a.length>>1,s=t.length>>1,o=new b(r),l=Object.create(null),h=8192,u=new Float32Array(s)
return function(e,t,r,i){var c,f,d="",g=u
for(c=0;c<s;c++)f=e[t+c],g[c]=f,d+=f+"_"
var p=l[d]
if(void 0!==p)return void r.set(p,i)
var m=new Float32Array(n),b=o.execute(g),v=b.length-n
for(c=0;c<n;c++){f=b[v+c]
var y=a[2*c]
f<y?f=y:(y=a[2*c+1],f>y&&(f=y)),m[c]=f}h>0&&(h--,l[d]=m),r.set(m,i)}}}}(),m=function(){function e(e){this.stack=e?Array.prototype.slice.call(e,0):[]}return e.prototype={push:function(e){this.stack.length>=100&&o("PostScript function stack overflow."),this.stack.push(e)},pop:function(){return this.stack.length<=0&&o("PostScript function stack underflow."),this.stack.pop()},copy:function(e){this.stack.length+e>=100&&o("PostScript function stack overflow.")
for(var t=this.stack,a=t.length-e,r=e-1;r>=0;r--,a++)t.push(t[a])},index:function(e){this.push(this.stack[this.stack.length-e-1])},roll:function(e,t){var a,r,i,n=this.stack,s=n.length-e,o=n.length-1,c=s+(t-Math.floor(t/e)*e)
for(a=s,r=o;a<r;a++,r--)i=n[a],n[a]=n[r],n[r]=i
for(a=s,r=c-1;a<r;a++,r--)i=n[a],n[a]=n[r],n[r]=i
for(a=c,r=o;a<r;a++,r--)i=n[a],n[a]=n[r],n[r]=i}},e}(),b=function(){function e(e){this.operators=e}return e.prototype={execute:function(e){for(var t,a,r,i=new m(e),n=0,s=this.operators,c=s.length;n<c;)if("number"!=typeof(t=s[n++]))switch(t){case"jz":r=i.pop(),a=i.pop(),a||(n=r)
break
case"j":a=i.pop(),n=a
break
case"abs":a=i.pop(),i.push(Math.abs(a))
break
case"add":r=i.pop(),a=i.pop(),i.push(a+r)
break
case"and":r=i.pop(),a=i.pop(),h(a)&&h(r)?i.push(a&&r):i.push(a&r)
break
case"atan":a=i.pop(),i.push(Math.atan(a))
break
case"bitshift":r=i.pop(),a=i.pop(),a>0?i.push(a<<r):i.push(a>>r)
break
case"ceiling":a=i.pop(),i.push(Math.ceil(a))
break
case"copy":a=i.pop(),i.copy(a)
break
case"cos":a=i.pop(),i.push(Math.cos(a))
break
case"cvi":a=0|i.pop(),i.push(a)
break
case"cvr":break
case"div":r=i.pop(),a=i.pop(),i.push(a/r)
break
case"dup":i.copy(1)
break
case"eq":r=i.pop(),a=i.pop(),i.push(a===r)
break
case"exch":i.roll(2,1)
break
case"exp":r=i.pop(),a=i.pop(),i.push(Math.pow(a,r))
break
case"false":i.push(!1)
break
case"floor":a=i.pop(),i.push(Math.floor(a))
break
case"ge":r=i.pop(),a=i.pop(),i.push(a>=r)
break
case"gt":r=i.pop(),a=i.pop(),i.push(a>r)
break
case"idiv":r=i.pop(),a=i.pop(),i.push(a/r|0)
break
case"index":a=i.pop(),i.index(a)
break
case"le":r=i.pop(),a=i.pop(),i.push(a<=r)
break
case"ln":a=i.pop(),i.push(Math.log(a))
break
case"log":a=i.pop(),i.push(Math.log(a)/Math.LN10)
break
case"lt":r=i.pop(),a=i.pop(),i.push(a<r)
break
case"mod":r=i.pop(),a=i.pop(),i.push(a%r)
break
case"mul":r=i.pop(),a=i.pop(),i.push(a*r)
break
case"ne":r=i.pop(),a=i.pop(),i.push(a!==r)
break
case"neg":a=i.pop(),i.push(-a)
break
case"not":a=i.pop(),h(a)?i.push(!a):i.push(~a)
break
case"or":r=i.pop(),a=i.pop(),h(a)&&h(r)?i.push(a||r):i.push(a|r)
break
case"pop":i.pop()
break
case"roll":r=i.pop(),a=i.pop(),i.roll(a,r)
break
case"round":a=i.pop(),i.push(Math.round(a))
break
case"sin":a=i.pop(),i.push(Math.sin(a))
break
case"sqrt":a=i.pop(),i.push(Math.sqrt(a))
break
case"sub":r=i.pop(),a=i.pop(),i.push(a-r)
break
case"true":i.push(!0)
break
case"truncate":a=i.pop(),a=a<0?Math.ceil(a):Math.floor(a),i.push(a)
break
case"xor":r=i.pop(),a=i.pop(),h(a)&&h(r)?i.push(a!==r):i.push(a^r)
break
default:o("Unknown operator "+t)}else i.push(t)
return i.stack}},e}(),v=function(){function e(e){this.type=e}function t(t,a,r){e.call(this,"args"),this.index=t,this.min=a,this.max=r}function a(t){e.call(this,"literal"),this.number=t,this.min=t,this.max=t}function r(t,a,r,i,n){e.call(this,"binary"),this.op=t,this.arg1=a,this.arg2=r,this.min=i,this.max=n}function i(t,a){e.call(this,"max"),this.arg=t,this.min=t.min,this.max=a}function n(t,a,r){e.call(this,"var"),this.index=t,this.min=a,this.max=r}function s(t,a){e.call(this,"definition"),this.variable=t,this.arg=a}function o(){this.parts=[]}function c(e,t){return"literal"===t.type&&0===t.number?e:"literal"===e.type&&0===e.number?t:"literal"===t.type&&"literal"===e.type?new a(e.number+t.number):new r("+",e,t,e.min+t.min,e.max+t.max)}function l(e,t){if("literal"===t.type){if(0===t.number)return new a(0)
if(1===t.number)return e
if("literal"===e.type)return new a(e.number*t.number)}if("literal"===e.type){if(0===e.number)return new a(0)
if(1===e.number)return t}return new r("*",e,t,Math.min(e.min*t.min,e.min*t.max,e.max*t.min,e.max*t.max),Math.max(e.min*t.min,e.min*t.max,e.max*t.min,e.max*t.max))}function h(e,t){if("literal"===t.type){if(0===t.number)return e
if("literal"===e.type)return new a(e.number-t.number)}return"binary"===t.type&&"-"===t.op&&"literal"===e.type&&1===e.number&&"literal"===t.arg1.type&&1===t.arg1.number?t.arg2:new r("-",e,t,e.min-t.max,e.max-t.min)}function u(e,t){return e.min>=t?new a(t):e.max<=t?e:new i(e,t)}function f(){}return e.prototype.visit=function(e){throw new Error("abstract method")},t.prototype=Object.create(e.prototype),t.prototype.visit=function(e){e.visitArgument(this)},a.prototype=Object.create(e.prototype),a.prototype.visit=function(e){e.visitLiteral(this)},r.prototype=Object.create(e.prototype),r.prototype.visit=function(e){e.visitBinaryOperation(this)},i.prototype=Object.create(e.prototype),i.prototype.visit=function(e){e.visitMin(this)},n.prototype=Object.create(e.prototype),n.prototype.visit=function(e){e.visitVariable(this)},s.prototype=Object.create(e.prototype),s.prototype.visit=function(e){e.visitVariableDefinition(this)},o.prototype={visitArgument:function(e){this.parts.push("Math.max(",e.min,", Math.min(",e.max,", src[srcOffset + ",e.index,"]))")},visitVariable:function(e){this.parts.push("v",e.index)},visitLiteral:function(e){this.parts.push(e.number)},visitBinaryOperation:function(e){this.parts.push("("),e.arg1.visit(this),this.parts.push(" ",e.op," "),e.arg2.visit(this),this.parts.push(")")},visitVariableDefinition:function(e){this.parts.push("var "),e.variable.visit(this),this.parts.push(" = "),e.arg.visit(this),this.parts.push(";")},visitMin:function(e){this.parts.push("Math.min("),e.arg.visit(this),this.parts.push(", ",e.max,")")},toString:function(){return this.parts.join("")}},f.prototype={compile:function(e,r,i){var f,d,g,p,m,b,v,y,k,w,x=[],C=[],S=r.length>>1,A=i.length>>1,I=0
for(f=0;f<S;f++)x.push(new t(f,r[2*f],r[2*f+1]))
for(f=0,d=e.length;f<d;f++)if("number"!=typeof(w=e[f]))switch(w){case"add":if(x.length<2)return null
b=x.pop(),m=x.pop(),x.push(c(m,b))
break
case"cvr":if(x.length<1)return null
break
case"mul":if(x.length<2)return null
b=x.pop(),m=x.pop(),x.push(l(m,b))
break
case"sub":if(x.length<2)return null
b=x.pop(),m=x.pop(),x.push(h(m,b))
break
case"exch":if(x.length<2)return null
v=x.pop(),y=x.pop(),x.push(v,y)
break
case"pop":if(x.length<1)return null
x.pop()
break
case"index":if(x.length<1)return null
if(m=x.pop(),"literal"!==m.type)return null
if((g=m.number)<0||(0|g)!==g||x.length<g)return null
if(v=x[x.length-g-1],"literal"===v.type||"var"===v.type){x.push(v)
break}k=new n(I++,v.min,v.max),x[x.length-g-1]=k,x.push(k),C.push(new s(k,v))
break
case"dup":if(x.length<1)return null
if("number"==typeof e[f+1]&&"gt"===e[f+2]&&e[f+3]===f+7&&"jz"===e[f+4]&&"pop"===e[f+5]&&e[f+6]===e[f+1]){m=x.pop(),x.push(u(m,e[f+1])),f+=6
break}if(v=x[x.length-1],"literal"===v.type||"var"===v.type){x.push(v)
break}k=new n(I++,v.min,v.max),x[x.length-1]=k,x.push(k),C.push(new s(k,v))
break
case"roll":if(x.length<2)return null
if(b=x.pop(),m=x.pop(),"literal"!==b.type||"literal"!==m.type)return null
if(p=b.number,(g=m.number)<=0||(0|g)!==g||(0|p)!==p||x.length<g)return null
if(0===(p=(p%g+g)%g))break
Array.prototype.push.apply(x,x.splice(x.length-g,g-p))
break
default:return null}else x.push(new a(w))
if(x.length!==A)return null
var B=[]
return C.forEach(function(e){var t=new o
e.visit(t),B.push(t.toString())}),x.forEach(function(e,t){var a=new o
e.visit(a)
var r=i[2*t],n=i[2*t+1],s=[a.toString()]
r>e.min&&(s.unshift("Math.max(",r,", "),s.push(")")),n<e.max&&(s.unshift("Math.min(",n,", "),s.push(")")),s.unshift("dest[destOffset + ",t,"] = "),s.push(";"),B.push(s.join(""))}),B.join("\n")}},f}()
t.isPDFFunction=r,t.PDFFunction=p,t.PostScriptEvaluator=b,t.PostScriptCompiler=v},function(e,t,a){"use strict"
var r=a(0),i=r.getLookupTableFactory,n=i(function(e){e.A=65,e.AE=198,e.AEacute=508,e.AEmacron=482,e.AEsmall=63462,e.Aacute=193,e.Aacutesmall=63457,e.Abreve=258,e.Abreveacute=7854,e.Abrevecyrillic=1232,e.Abrevedotbelow=7862,e.Abrevegrave=7856,e.Abrevehookabove=7858,e.Abrevetilde=7860,e.Acaron=461,e.Acircle=9398,e.Acircumflex=194,e.Acircumflexacute=7844,e.Acircumflexdotbelow=7852,e.Acircumflexgrave=7846,e.Acircumflexhookabove=7848,e.Acircumflexsmall=63458,e.Acircumflextilde=7850,e.Acute=63177,e.Acutesmall=63412,e.Acyrillic=1040,e.Adblgrave=512,e.Adieresis=196,e.Adieresiscyrillic=1234,e.Adieresismacron=478,e.Adieresissmall=63460,e.Adotbelow=7840,e.Adotmacron=480,e.Agrave=192,e.Agravesmall=63456,e.Ahookabove=7842,e.Aiecyrillic=1236,e.Ainvertedbreve=514,e.Alpha=913,e.Alphatonos=902,e.Amacron=256,e.Amonospace=65313,e.Aogonek=260,e.Aring=197,e.Aringacute=506,e.Aringbelow=7680,e.Aringsmall=63461,e.Asmall=63329,e.Atilde=195,e.Atildesmall=63459,e.Aybarmenian=1329,e.B=66,e.Bcircle=9399,e.Bdotaccent=7682,e.Bdotbelow=7684,e.Becyrillic=1041,e.Benarmenian=1330,e.Beta=914,e.Bhook=385,e.Blinebelow=7686,e.Bmonospace=65314,e.Brevesmall=63220,e.Bsmall=63330,e.Btopbar=386,e.C=67,e.Caarmenian=1342,e.Cacute=262,e.Caron=63178,e.Caronsmall=63221,e.Ccaron=268,e.Ccedilla=199,e.Ccedillaacute=7688,e.Ccedillasmall=63463,e.Ccircle=9400,e.Ccircumflex=264,e.Cdot=266,e.Cdotaccent=266,e.Cedillasmall=63416,e.Chaarmenian=1353,e.Cheabkhasiancyrillic=1212,e.Checyrillic=1063,e.Chedescenderabkhasiancyrillic=1214,e.Chedescendercyrillic=1206,e.Chedieresiscyrillic=1268,e.Cheharmenian=1347,e.Chekhakassiancyrillic=1227,e.Cheverticalstrokecyrillic=1208,e.Chi=935,e.Chook=391,e.Circumflexsmall=63222,e.Cmonospace=65315,e.Coarmenian=1361,e.Csmall=63331,e.D=68,e.DZ=497,e.DZcaron=452,e.Daarmenian=1332,e.Dafrican=393,e.Dcaron=270,e.Dcedilla=7696,e.Dcircle=9401,e.Dcircumflexbelow=7698,e.Dcroat=272,e.Ddotaccent=7690,e.Ddotbelow=7692,e.Decyrillic=1044,e.Deicoptic=1006,e.Delta=8710,e.Deltagreek=916,e.Dhook=394,e.Dieresis=63179,e.DieresisAcute=63180,e.DieresisGrave=63181,e.Dieresissmall=63400,e.Digammagreek=988,e.Djecyrillic=1026,e.Dlinebelow=7694,e.Dmonospace=65316,e.Dotaccentsmall=63223,e.Dslash=272,e.Dsmall=63332,e.Dtopbar=395,e.Dz=498,e.Dzcaron=453,e.Dzeabkhasiancyrillic=1248,e.Dzecyrillic=1029,e.Dzhecyrillic=1039,e.E=69,e.Eacute=201,e.Eacutesmall=63465,e.Ebreve=276,e.Ecaron=282,e.Ecedillabreve=7708,e.Echarmenian=1333,e.Ecircle=9402,e.Ecircumflex=202,e.Ecircumflexacute=7870,e.Ecircumflexbelow=7704,e.Ecircumflexdotbelow=7878,e.Ecircumflexgrave=7872,e.Ecircumflexhookabove=7874,e.Ecircumflexsmall=63466,e.Ecircumflextilde=7876,e.Ecyrillic=1028,e.Edblgrave=516,e.Edieresis=203,e.Edieresissmall=63467,e.Edot=278,e.Edotaccent=278,e.Edotbelow=7864,e.Efcyrillic=1060,e.Egrave=200,e.Egravesmall=63464,e.Eharmenian=1335,e.Ehookabove=7866,e.Eightroman=8551,e.Einvertedbreve=518,e.Eiotifiedcyrillic=1124,e.Elcyrillic=1051,e.Elevenroman=8554,e.Emacron=274,e.Emacronacute=7702,e.Emacrongrave=7700,e.Emcyrillic=1052,e.Emonospace=65317,e.Encyrillic=1053,e.Endescendercyrillic=1186,e.Eng=330,e.Enghecyrillic=1188,e.Enhookcyrillic=1223,e.Eogonek=280,e.Eopen=400,e.Epsilon=917,e.Epsilontonos=904,e.Ercyrillic=1056,e.Ereversed=398,e.Ereversedcyrillic=1069,e.Escyrillic=1057,e.Esdescendercyrillic=1194,e.Esh=425,e.Esmall=63333,e.Eta=919,e.Etarmenian=1336,e.Etatonos=905,e.Eth=208,e.Ethsmall=63472,e.Etilde=7868,e.Etildebelow=7706,e.Euro=8364,e.Ezh=439,e.Ezhcaron=494,e.Ezhreversed=440,e.F=70,e.Fcircle=9403,e.Fdotaccent=7710,e.Feharmenian=1366,e.Feicoptic=996,e.Fhook=401,e.Fitacyrillic=1138,e.Fiveroman=8548
e.Fmonospace=65318,e.Fourroman=8547,e.Fsmall=63334,e.G=71,e.GBsquare=13191,e.Gacute=500,e.Gamma=915,e.Gammaafrican=404,e.Gangiacoptic=1002,e.Gbreve=286,e.Gcaron=486,e.Gcedilla=290,e.Gcircle=9404,e.Gcircumflex=284,e.Gcommaaccent=290,e.Gdot=288,e.Gdotaccent=288,e.Gecyrillic=1043,e.Ghadarmenian=1346,e.Ghemiddlehookcyrillic=1172,e.Ghestrokecyrillic=1170,e.Gheupturncyrillic=1168,e.Ghook=403,e.Gimarmenian=1331,e.Gjecyrillic=1027,e.Gmacron=7712,e.Gmonospace=65319,e.Grave=63182,e.Gravesmall=63328,e.Gsmall=63335,e.Gsmallhook=667,e.Gstroke=484,e.H=72,e.H18533=9679,e.H18543=9642,e.H18551=9643,e.H22073=9633,e.HPsquare=13259,e.Haabkhasiancyrillic=1192,e.Hadescendercyrillic=1202,e.Hardsigncyrillic=1066,e.Hbar=294,e.Hbrevebelow=7722,e.Hcedilla=7720,e.Hcircle=9405,e.Hcircumflex=292,e.Hdieresis=7718,e.Hdotaccent=7714,e.Hdotbelow=7716,e.Hmonospace=65320,e.Hoarmenian=1344,e.Horicoptic=1e3,e.Hsmall=63336,e.Hungarumlaut=63183,e.Hungarumlautsmall=63224,e.Hzsquare=13200,e.I=73,e.IAcyrillic=1071,e.IJ=306,e.IUcyrillic=1070,e.Iacute=205,e.Iacutesmall=63469,e.Ibreve=300,e.Icaron=463,e.Icircle=9406,e.Icircumflex=206,e.Icircumflexsmall=63470,e.Icyrillic=1030,e.Idblgrave=520,e.Idieresis=207,e.Idieresisacute=7726,e.Idieresiscyrillic=1252,e.Idieresissmall=63471,e.Idot=304,e.Idotaccent=304,e.Idotbelow=7882,e.Iebrevecyrillic=1238,e.Iecyrillic=1045,e.Ifraktur=8465,e.Igrave=204,e.Igravesmall=63468,e.Ihookabove=7880,e.Iicyrillic=1048,e.Iinvertedbreve=522,e.Iishortcyrillic=1049,e.Imacron=298,e.Imacroncyrillic=1250,e.Imonospace=65321,e.Iniarmenian=1339,e.Iocyrillic=1025,e.Iogonek=302,e.Iota=921,e.Iotaafrican=406,e.Iotadieresis=938,e.Iotatonos=906,e.Ismall=63337,e.Istroke=407,e.Itilde=296,e.Itildebelow=7724,e.Izhitsacyrillic=1140,e.Izhitsadblgravecyrillic=1142,e.J=74,e.Jaarmenian=1345,e.Jcircle=9407,e.Jcircumflex=308,e.Jecyrillic=1032,e.Jheharmenian=1355,e.Jmonospace=65322,e.Jsmall=63338,e.K=75,e.KBsquare=13189,e.KKsquare=13261,e.Kabashkircyrillic=1184,e.Kacute=7728,e.Kacyrillic=1050,e.Kadescendercyrillic=1178,e.Kahookcyrillic=1219,e.Kappa=922,e.Kastrokecyrillic=1182,e.Kaverticalstrokecyrillic=1180,e.Kcaron=488,e.Kcedilla=310,e.Kcircle=9408,e.Kcommaaccent=310,e.Kdotbelow=7730,e.Keharmenian=1364,e.Kenarmenian=1343,e.Khacyrillic=1061,e.Kheicoptic=998,e.Khook=408,e.Kjecyrillic=1036,e.Klinebelow=7732,e.Kmonospace=65323,e.Koppacyrillic=1152,e.Koppagreek=990,e.Ksicyrillic=1134,e.Ksmall=63339,e.L=76,e.LJ=455,e.LL=63167,e.Lacute=313,e.Lambda=923,e.Lcaron=317,e.Lcedilla=315,e.Lcircle=9409,e.Lcircumflexbelow=7740,e.Lcommaaccent=315,e.Ldot=319,e.Ldotaccent=319,e.Ldotbelow=7734,e.Ldotbelowmacron=7736,e.Liwnarmenian=1340,e.Lj=456,e.Ljecyrillic=1033,e.Llinebelow=7738,e.Lmonospace=65324,e.Lslash=321,e.Lslashsmall=63225,e.Lsmall=63340,e.M=77,e.MBsquare=13190,e.Macron=63184,e.Macronsmall=63407,e.Macute=7742,e.Mcircle=9410,e.Mdotaccent=7744,e.Mdotbelow=7746,e.Menarmenian=1348,e.Mmonospace=65325,e.Msmall=63341,e.Mturned=412,e.Mu=924,e.N=78,e.NJ=458,e.Nacute=323,e.Ncaron=327,e.Ncedilla=325,e.Ncircle=9411,e.Ncircumflexbelow=7754,e.Ncommaaccent=325,e.Ndotaccent=7748,e.Ndotbelow=7750,e.Nhookleft=413,e.Nineroman=8552,e.Nj=459,e.Njecyrillic=1034,e.Nlinebelow=7752,e.Nmonospace=65326,e.Nowarmenian=1350,e.Nsmall=63342,e.Ntilde=209,e.Ntildesmall=63473,e.Nu=925,e.O=79,e.OE=338,e.OEsmall=63226,e.Oacute=211,e.Oacutesmall=63475,e.Obarredcyrillic=1256,e.Obarreddieresiscyrillic=1258
e.Obreve=334,e.Ocaron=465,e.Ocenteredtilde=415,e.Ocircle=9412,e.Ocircumflex=212,e.Ocircumflexacute=7888,e.Ocircumflexdotbelow=7896,e.Ocircumflexgrave=7890,e.Ocircumflexhookabove=7892,e.Ocircumflexsmall=63476,e.Ocircumflextilde=7894,e.Ocyrillic=1054,e.Odblacute=336,e.Odblgrave=524,e.Odieresis=214,e.Odieresiscyrillic=1254,e.Odieresissmall=63478,e.Odotbelow=7884,e.Ogoneksmall=63227,e.Ograve=210,e.Ogravesmall=63474,e.Oharmenian=1365,e.Ohm=8486,e.Ohookabove=7886,e.Ohorn=416,e.Ohornacute=7898,e.Ohorndotbelow=7906,e.Ohorngrave=7900,e.Ohornhookabove=7902,e.Ohorntilde=7904,e.Ohungarumlaut=336,e.Oi=418,e.Oinvertedbreve=526,e.Omacron=332,e.Omacronacute=7762,e.Omacrongrave=7760,e.Omega=8486,e.Omegacyrillic=1120,e.Omegagreek=937,e.Omegaroundcyrillic=1146,e.Omegatitlocyrillic=1148,e.Omegatonos=911,e.Omicron=927,e.Omicrontonos=908,e.Omonospace=65327,e.Oneroman=8544,e.Oogonek=490,e.Oogonekmacron=492,e.Oopen=390,e.Oslash=216,e.Oslashacute=510,e.Oslashsmall=63480,e.Osmall=63343,e.Ostrokeacute=510,e.Otcyrillic=1150,e.Otilde=213,e.Otildeacute=7756,e.Otildedieresis=7758,e.Otildesmall=63477,e.P=80,e.Pacute=7764,e.Pcircle=9413,e.Pdotaccent=7766,e.Pecyrillic=1055,e.Peharmenian=1354,e.Pemiddlehookcyrillic=1190,e.Phi=934,e.Phook=420,e.Pi=928,e.Piwrarmenian=1363,e.Pmonospace=65328,e.Psi=936,e.Psicyrillic=1136,e.Psmall=63344,e.Q=81,e.Qcircle=9414,e.Qmonospace=65329,e.Qsmall=63345,e.R=82,e.Raarmenian=1356,e.Racute=340,e.Rcaron=344,e.Rcedilla=342,e.Rcircle=9415,e.Rcommaaccent=342,e.Rdblgrave=528,e.Rdotaccent=7768,e.Rdotbelow=7770,e.Rdotbelowmacron=7772,e.Reharmenian=1360,e.Rfraktur=8476,e.Rho=929,e.Ringsmall=63228,e.Rinvertedbreve=530,e.Rlinebelow=7774,e.Rmonospace=65330,e.Rsmall=63346,e.Rsmallinverted=641,e.Rsmallinvertedsuperior=694,e.S=83,e.SF010000=9484,e.SF020000=9492,e.SF030000=9488,e.SF040000=9496,e.SF050000=9532,e.SF060000=9516,e.SF070000=9524,e.SF080000=9500,e.SF090000=9508,e.SF100000=9472,e.SF110000=9474,e.SF190000=9569,e.SF200000=9570,e.SF210000=9558,e.SF220000=9557,e.SF230000=9571,e.SF240000=9553,e.SF250000=9559,e.SF260000=9565,e.SF270000=9564,e.SF280000=9563,e.SF360000=9566,e.SF370000=9567,e.SF380000=9562,e.SF390000=9556,e.SF400000=9577,e.SF410000=9574,e.SF420000=9568,e.SF430000=9552,e.SF440000=9580,e.SF450000=9575,e.SF460000=9576,e.SF470000=9572,e.SF480000=9573,e.SF490000=9561,e.SF500000=9560,e.SF510000=9554,e.SF520000=9555,e.SF530000=9579,e.SF540000=9578,e.Sacute=346,e.Sacutedotaccent=7780,e.Sampigreek=992,e.Scaron=352,e.Scarondotaccent=7782,e.Scaronsmall=63229,e.Scedilla=350,e.Schwa=399,e.Schwacyrillic=1240,e.Schwadieresiscyrillic=1242,e.Scircle=9416,e.Scircumflex=348,e.Scommaaccent=536,e.Sdotaccent=7776,e.Sdotbelow=7778,e.Sdotbelowdotaccent=7784,e.Seharmenian=1357,e.Sevenroman=8550,e.Shaarmenian=1351,e.Shacyrillic=1064,e.Shchacyrillic=1065,e.Sheicoptic=994,e.Shhacyrillic=1210,e.Shimacoptic=1004,e.Sigma=931,e.Sixroman=8549,e.Smonospace=65331,e.Softsigncyrillic=1068,e.Ssmall=63347,e.Stigmagreek=986,e.T=84,e.Tau=932,e.Tbar=358,e.Tcaron=356,e.Tcedilla=354,e.Tcircle=9417,e.Tcircumflexbelow=7792,e.Tcommaaccent=354,e.Tdotaccent=7786,e.Tdotbelow=7788,e.Tecyrillic=1058,e.Tedescendercyrillic=1196,e.Tenroman=8553,e.Tetsecyrillic=1204,e.Theta=920,e.Thook=428,e.Thorn=222,e.Thornsmall=63486,e.Threeroman=8546,e.Tildesmall=63230,e.Tiwnarmenian=1359,e.Tlinebelow=7790,e.Tmonospace=65332,e.Toarmenian=1337,e.Tonefive=444,e.Tonesix=388,e.Tonetwo=423,e.Tretroflexhook=430,e.Tsecyrillic=1062,e.Tshecyrillic=1035
e.Tsmall=63348,e.Twelveroman=8555,e.Tworoman=8545,e.U=85,e.Uacute=218,e.Uacutesmall=63482,e.Ubreve=364,e.Ucaron=467,e.Ucircle=9418,e.Ucircumflex=219,e.Ucircumflexbelow=7798,e.Ucircumflexsmall=63483,e.Ucyrillic=1059,e.Udblacute=368,e.Udblgrave=532,e.Udieresis=220,e.Udieresisacute=471,e.Udieresisbelow=7794,e.Udieresiscaron=473,e.Udieresiscyrillic=1264,e.Udieresisgrave=475,e.Udieresismacron=469,e.Udieresissmall=63484,e.Udotbelow=7908,e.Ugrave=217,e.Ugravesmall=63481,e.Uhookabove=7910,e.Uhorn=431,e.Uhornacute=7912,e.Uhorndotbelow=7920,e.Uhorngrave=7914,e.Uhornhookabove=7916,e.Uhorntilde=7918,e.Uhungarumlaut=368,e.Uhungarumlautcyrillic=1266,e.Uinvertedbreve=534,e.Ukcyrillic=1144,e.Umacron=362,e.Umacroncyrillic=1262,e.Umacrondieresis=7802,e.Umonospace=65333,e.Uogonek=370,e.Upsilon=933,e.Upsilon1=978,e.Upsilonacutehooksymbolgreek=979,e.Upsilonafrican=433,e.Upsilondieresis=939,e.Upsilondieresishooksymbolgreek=980,e.Upsilonhooksymbol=978,e.Upsilontonos=910,e.Uring=366,e.Ushortcyrillic=1038,e.Usmall=63349,e.Ustraightcyrillic=1198,e.Ustraightstrokecyrillic=1200,e.Utilde=360,e.Utildeacute=7800,e.Utildebelow=7796,e.V=86,e.Vcircle=9419,e.Vdotbelow=7806,e.Vecyrillic=1042,e.Vewarmenian=1358,e.Vhook=434,e.Vmonospace=65334,e.Voarmenian=1352,e.Vsmall=63350,e.Vtilde=7804,e.W=87,e.Wacute=7810,e.Wcircle=9420,e.Wcircumflex=372,e.Wdieresis=7812,e.Wdotaccent=7814,e.Wdotbelow=7816,e.Wgrave=7808,e.Wmonospace=65335,e.Wsmall=63351,e.X=88,e.Xcircle=9421,e.Xdieresis=7820,e.Xdotaccent=7818,e.Xeharmenian=1341,e.Xi=926,e.Xmonospace=65336,e.Xsmall=63352,e.Y=89,e.Yacute=221,e.Yacutesmall=63485,e.Yatcyrillic=1122,e.Ycircle=9422,e.Ycircumflex=374,e.Ydieresis=376,e.Ydieresissmall=63487,e.Ydotaccent=7822,e.Ydotbelow=7924,e.Yericyrillic=1067,e.Yerudieresiscyrillic=1272,e.Ygrave=7922,e.Yhook=435,e.Yhookabove=7926,e.Yiarmenian=1349,e.Yicyrillic=1031,e.Yiwnarmenian=1362,e.Ymonospace=65337,e.Ysmall=63353,e.Ytilde=7928,e.Yusbigcyrillic=1130,e.Yusbigiotifiedcyrillic=1132,e.Yuslittlecyrillic=1126,e.Yuslittleiotifiedcyrillic=1128,e.Z=90,e.Zaarmenian=1334,e.Zacute=377,e.Zcaron=381,e.Zcaronsmall=63231,e.Zcircle=9423,e.Zcircumflex=7824,e.Zdot=379,e.Zdotaccent=379,e.Zdotbelow=7826,e.Zecyrillic=1047,e.Zedescendercyrillic=1176,e.Zedieresiscyrillic=1246,e.Zeta=918,e.Zhearmenian=1338,e.Zhebrevecyrillic=1217,e.Zhecyrillic=1046,e.Zhedescendercyrillic=1174,e.Zhedieresiscyrillic=1244,e.Zlinebelow=7828,e.Zmonospace=65338,e.Zsmall=63354,e.Zstroke=437,e.a=97,e.aabengali=2438,e.aacute=225,e.aadeva=2310,e.aagujarati=2694,e.aagurmukhi=2566,e.aamatragurmukhi=2622,e.aarusquare=13059,e.aavowelsignbengali=2494,e.aavowelsigndeva=2366,e.aavowelsigngujarati=2750,e.abbreviationmarkarmenian=1375,e.abbreviationsigndeva=2416,e.abengali=2437,e.abopomofo=12570,e.abreve=259,e.abreveacute=7855,e.abrevecyrillic=1233,e.abrevedotbelow=7863,e.abrevegrave=7857,e.abrevehookabove=7859,e.abrevetilde=7861,e.acaron=462,e.acircle=9424,e.acircumflex=226,e.acircumflexacute=7845,e.acircumflexdotbelow=7853,e.acircumflexgrave=7847,e.acircumflexhookabove=7849,e.acircumflextilde=7851,e.acute=180,e.acutebelowcmb=791,e.acutecmb=769,e.acutecomb=769,e.acutedeva=2388,e.acutelowmod=719,e.acutetonecmb=833,e.acyrillic=1072,e.adblgrave=513,e.addakgurmukhi=2673,e.adeva=2309,e.adieresis=228,e.adieresiscyrillic=1235,e.adieresismacron=479,e.adotbelow=7841,e.adotmacron=481,e.ae=230,e.aeacute=509,e.aekorean=12624,e.aemacron=483,e.afii00208=8213,e.afii08941=8356,e.afii10017=1040,e.afii10018=1041,e.afii10019=1042,e.afii10020=1043,e.afii10021=1044,e.afii10022=1045,e.afii10023=1025,e.afii10024=1046,e.afii10025=1047,e.afii10026=1048,e.afii10027=1049,e.afii10028=1050,e.afii10029=1051,e.afii10030=1052
e.afii10031=1053,e.afii10032=1054,e.afii10033=1055,e.afii10034=1056,e.afii10035=1057,e.afii10036=1058,e.afii10037=1059,e.afii10038=1060,e.afii10039=1061,e.afii10040=1062,e.afii10041=1063,e.afii10042=1064,e.afii10043=1065,e.afii10044=1066,e.afii10045=1067,e.afii10046=1068,e.afii10047=1069,e.afii10048=1070,e.afii10049=1071,e.afii10050=1168,e.afii10051=1026,e.afii10052=1027,e.afii10053=1028,e.afii10054=1029,e.afii10055=1030,e.afii10056=1031,e.afii10057=1032,e.afii10058=1033,e.afii10059=1034,e.afii10060=1035,e.afii10061=1036,e.afii10062=1038,e.afii10063=63172,e.afii10064=63173,e.afii10065=1072,e.afii10066=1073,e.afii10067=1074,e.afii10068=1075,e.afii10069=1076,e.afii10070=1077,e.afii10071=1105,e.afii10072=1078,e.afii10073=1079,e.afii10074=1080,e.afii10075=1081,e.afii10076=1082,e.afii10077=1083,e.afii10078=1084,e.afii10079=1085,e.afii10080=1086,e.afii10081=1087,e.afii10082=1088,e.afii10083=1089,e.afii10084=1090,e.afii10085=1091,e.afii10086=1092,e.afii10087=1093,e.afii10088=1094,e.afii10089=1095,e.afii10090=1096,e.afii10091=1097,e.afii10092=1098,e.afii10093=1099,e.afii10094=1100,e.afii10095=1101,e.afii10096=1102,e.afii10097=1103,e.afii10098=1169,e.afii10099=1106,e.afii10100=1107,e.afii10101=1108,e.afii10102=1109,e.afii10103=1110,e.afii10104=1111,e.afii10105=1112,e.afii10106=1113,e.afii10107=1114,e.afii10108=1115,e.afii10109=1116,e.afii10110=1118,e.afii10145=1039,e.afii10146=1122,e.afii10147=1138,e.afii10148=1140,e.afii10192=63174,e.afii10193=1119,e.afii10194=1123,e.afii10195=1139,e.afii10196=1141,e.afii10831=63175,e.afii10832=63176,e.afii10846=1241,e.afii299=8206,e.afii300=8207,e.afii301=8205,e.afii57381=1642,e.afii57388=1548,e.afii57392=1632,e.afii57393=1633,e.afii57394=1634,e.afii57395=1635,e.afii57396=1636,e.afii57397=1637,e.afii57398=1638,e.afii57399=1639,e.afii57400=1640,e.afii57401=1641,e.afii57403=1563,e.afii57407=1567,e.afii57409=1569,e.afii57410=1570,e.afii57411=1571,e.afii57412=1572,e.afii57413=1573,e.afii57414=1574,e.afii57415=1575,e.afii57416=1576,e.afii57417=1577,e.afii57418=1578,e.afii57419=1579,e.afii57420=1580,e.afii57421=1581,e.afii57422=1582,e.afii57423=1583,e.afii57424=1584,e.afii57425=1585,e.afii57426=1586,e.afii57427=1587,e.afii57428=1588,e.afii57429=1589,e.afii57430=1590,e.afii57431=1591,e.afii57432=1592,e.afii57433=1593,e.afii57434=1594,e.afii57440=1600,e.afii57441=1601,e.afii57442=1602,e.afii57443=1603,e.afii57444=1604,e.afii57445=1605,e.afii57446=1606,e.afii57448=1608,e.afii57449=1609,e.afii57450=1610,e.afii57451=1611,e.afii57452=1612,e.afii57453=1613,e.afii57454=1614,e.afii57455=1615,e.afii57456=1616,e.afii57457=1617,e.afii57458=1618,e.afii57470=1607,e.afii57505=1700,e.afii57506=1662,e.afii57507=1670,e.afii57508=1688,e.afii57509=1711,e.afii57511=1657,e.afii57512=1672,e.afii57513=1681,e.afii57514=1722,e.afii57519=1746,e.afii57534=1749,e.afii57636=8362,e.afii57645=1470,e.afii57658=1475,e.afii57664=1488,e.afii57665=1489,e.afii57666=1490,e.afii57667=1491,e.afii57668=1492,e.afii57669=1493,e.afii57670=1494,e.afii57671=1495,e.afii57672=1496,e.afii57673=1497,e.afii57674=1498,e.afii57675=1499,e.afii57676=1500,e.afii57677=1501,e.afii57678=1502,e.afii57679=1503,e.afii57680=1504,e.afii57681=1505,e.afii57682=1506,e.afii57683=1507,e.afii57684=1508,e.afii57685=1509,e.afii57686=1510,e.afii57687=1511,e.afii57688=1512,e.afii57689=1513,e.afii57690=1514,e.afii57694=64298,e.afii57695=64299,e.afii57700=64331,e.afii57705=64287,e.afii57716=1520
e.afii57717=1521,e.afii57718=1522,e.afii57723=64309,e.afii57793=1460,e.afii57794=1461,e.afii57795=1462,e.afii57796=1467,e.afii57797=1464,e.afii57798=1463,e.afii57799=1456,e.afii57800=1458,e.afii57801=1457,e.afii57802=1459,e.afii57803=1474,e.afii57804=1473,e.afii57806=1465,e.afii57807=1468,e.afii57839=1469,e.afii57841=1471,e.afii57842=1472,e.afii57929=700,e.afii61248=8453,e.afii61289=8467,e.afii61352=8470,e.afii61573=8236,e.afii61574=8237,e.afii61575=8238,e.afii61664=8204,e.afii63167=1645,e.afii64937=701,e.agrave=224,e.agujarati=2693,e.agurmukhi=2565,e.ahiragana=12354,e.ahookabove=7843,e.aibengali=2448,e.aibopomofo=12574,e.aideva=2320,e.aiecyrillic=1237,e.aigujarati=2704,e.aigurmukhi=2576,e.aimatragurmukhi=2632,e.ainarabic=1593,e.ainfinalarabic=65226,e.aininitialarabic=65227,e.ainmedialarabic=65228,e.ainvertedbreve=515,e.aivowelsignbengali=2504,e.aivowelsigndeva=2376,e.aivowelsigngujarati=2760,e.akatakana=12450,e.akatakanahalfwidth=65393,e.akorean=12623,e.alef=1488,e.alefarabic=1575,e.alefdageshhebrew=64304,e.aleffinalarabic=65166,e.alefhamzaabovearabic=1571,e.alefhamzaabovefinalarabic=65156,e.alefhamzabelowarabic=1573,e.alefhamzabelowfinalarabic=65160,e.alefhebrew=1488,e.aleflamedhebrew=64335,e.alefmaddaabovearabic=1570,e.alefmaddaabovefinalarabic=65154,e.alefmaksuraarabic=1609,e.alefmaksurafinalarabic=65264,e.alefmaksurainitialarabic=65267,e.alefmaksuramedialarabic=65268,e.alefpatahhebrew=64302,e.alefqamatshebrew=64303,e.aleph=8501,e.allequal=8780,e.alpha=945,e.alphatonos=940,e.amacron=257,e.amonospace=65345,e.ampersand=38,e.ampersandmonospace=65286,e.ampersandsmall=63270,e.amsquare=13250,e.anbopomofo=12578,e.angbopomofo=12580,e.angbracketleft=12296,e.angbracketright=12297,e.angkhankhuthai=3674,e.angle=8736,e.anglebracketleft=12296,e.anglebracketleftvertical=65087,e.anglebracketright=12297,e.anglebracketrightvertical=65088,e.angleleft=9001,e.angleright=9002,e.angstrom=8491,e.anoteleia=903,e.anudattadeva=2386,e.anusvarabengali=2434,e.anusvaradeva=2306,e.anusvaragujarati=2690,e.aogonek=261,e.apaatosquare=13056,e.aparen=9372,e.apostrophearmenian=1370,e.apostrophemod=700,e.apple=63743,e.approaches=8784,e.approxequal=8776,e.approxequalorimage=8786,e.approximatelyequal=8773,e.araeaekorean=12686,e.araeakorean=12685,e.arc=8978,e.arighthalfring=7834,e.aring=229,e.aringacute=507,e.aringbelow=7681,e.arrowboth=8596,e.arrowdashdown=8675,e.arrowdashleft=8672,e.arrowdashright=8674,e.arrowdashup=8673,e.arrowdblboth=8660,e.arrowdbldown=8659,e.arrowdblleft=8656,e.arrowdblright=8658,e.arrowdblup=8657,e.arrowdown=8595,e.arrowdownleft=8601,e.arrowdownright=8600,e.arrowdownwhite=8681,e.arrowheaddownmod=709,e.arrowheadleftmod=706,e.arrowheadrightmod=707,e.arrowheadupmod=708,e.arrowhorizex=63719,e.arrowleft=8592,e.arrowleftdbl=8656,e.arrowleftdblstroke=8653,e.arrowleftoverright=8646,e.arrowleftwhite=8678,e.arrowright=8594,e.arrowrightdblstroke=8655,e.arrowrightheavy=10142,e.arrowrightoverleft=8644,e.arrowrightwhite=8680,e.arrowtableft=8676,e.arrowtabright=8677,e.arrowup=8593,e.arrowupdn=8597,e.arrowupdnbse=8616,e.arrowupdownbase=8616,e.arrowupleft=8598,e.arrowupleftofdown=8645,e.arrowupright=8599,e.arrowupwhite=8679,e.arrowvertex=63718,e.asciicircum=94,e.asciicircummonospace=65342,e.asciitilde=126,e.asciitildemonospace=65374,e.ascript=593,e.ascriptturned=594,e.asmallhiragana=12353,e.asmallkatakana=12449,e.asmallkatakanahalfwidth=65383,e.asterisk=42,e.asteriskaltonearabic=1645,e.asteriskarabic=1645,e.asteriskmath=8727,e.asteriskmonospace=65290,e.asterisksmall=65121,e.asterism=8258,e.asuperior=63209,e.asymptoticallyequal=8771,e.at=64,e.atilde=227,e.atmonospace=65312,e.atsmall=65131,e.aturned=592,e.aubengali=2452,e.aubopomofo=12576,e.audeva=2324,e.augujarati=2708,e.augurmukhi=2580,e.aulengthmarkbengali=2519,e.aumatragurmukhi=2636,e.auvowelsignbengali=2508,e.auvowelsigndeva=2380,e.auvowelsigngujarati=2764,e.avagrahadeva=2365,e.aybarmenian=1377,e.ayin=1506,e.ayinaltonehebrew=64288,e.ayinhebrew=1506,e.b=98,e.babengali=2476,e.backslash=92,e.backslashmonospace=65340,e.badeva=2348,e.bagujarati=2732
e.bagurmukhi=2604,e.bahiragana=12400,e.bahtthai=3647,e.bakatakana=12496,e.bar=124,e.barmonospace=65372,e.bbopomofo=12549,e.bcircle=9425,e.bdotaccent=7683,e.bdotbelow=7685,e.beamedsixteenthnotes=9836,e.because=8757,e.becyrillic=1073,e.beharabic=1576,e.behfinalarabic=65168,e.behinitialarabic=65169,e.behiragana=12409,e.behmedialarabic=65170,e.behmeeminitialarabic=64671,e.behmeemisolatedarabic=64520,e.behnoonfinalarabic=64621,e.bekatakana=12505,e.benarmenian=1378,e.bet=1489,e.beta=946,e.betasymbolgreek=976,e.betdagesh=64305,e.betdageshhebrew=64305,e.bethebrew=1489,e.betrafehebrew=64332,e.bhabengali=2477,e.bhadeva=2349,e.bhagujarati=2733,e.bhagurmukhi=2605,e.bhook=595,e.bihiragana=12403,e.bikatakana=12499,e.bilabialclick=664,e.bindigurmukhi=2562,e.birusquare=13105,e.blackcircle=9679,e.blackdiamond=9670,e.blackdownpointingtriangle=9660,e.blackleftpointingpointer=9668,e.blackleftpointingtriangle=9664,e.blacklenticularbracketleft=12304,e.blacklenticularbracketleftvertical=65083,e.blacklenticularbracketright=12305,e.blacklenticularbracketrightvertical=65084,e.blacklowerlefttriangle=9699,e.blacklowerrighttriangle=9698,e.blackrectangle=9644,e.blackrightpointingpointer=9658,e.blackrightpointingtriangle=9654,e.blacksmallsquare=9642,e.blacksmilingface=9787,e.blacksquare=9632,e.blackstar=9733,e.blackupperlefttriangle=9700,e.blackupperrighttriangle=9701,e.blackuppointingsmalltriangle=9652,e.blackuppointingtriangle=9650,e.blank=9251,e.blinebelow=7687,e.block=9608,e.bmonospace=65346,e.bobaimaithai=3610,e.bohiragana=12412,e.bokatakana=12508,e.bparen=9373,e.bqsquare=13251,e.braceex=63732,e.braceleft=123,e.braceleftbt=63731,e.braceleftmid=63730,e.braceleftmonospace=65371,e.braceleftsmall=65115,e.bracelefttp=63729,e.braceleftvertical=65079,e.braceright=125,e.bracerightbt=63742,e.bracerightmid=63741,e.bracerightmonospace=65373,e.bracerightsmall=65116,e.bracerighttp=63740,e.bracerightvertical=65080,e.bracketleft=91,e.bracketleftbt=63728,e.bracketleftex=63727,e.bracketleftmonospace=65339,e.bracketlefttp=63726,e.bracketright=93,e.bracketrightbt=63739,e.bracketrightex=63738,e.bracketrightmonospace=65341,e.bracketrighttp=63737,e.breve=728,e.brevebelowcmb=814,e.brevecmb=774,e.breveinvertedbelowcmb=815,e.breveinvertedcmb=785,e.breveinverteddoublecmb=865,e.bridgebelowcmb=810,e.bridgeinvertedbelowcmb=826,e.brokenbar=166,e.bstroke=384,e.bsuperior=63210,e.btopbar=387,e.buhiragana=12406,e.bukatakana=12502,e.bullet=8226,e.bulletinverse=9688,e.bulletoperator=8729,e.bullseye=9678,e.c=99,e.caarmenian=1390,e.cabengali=2458,e.cacute=263,e.cadeva=2330,e.cagujarati=2714,e.cagurmukhi=2586,e.calsquare=13192,e.candrabindubengali=2433,e.candrabinducmb=784,e.candrabindudeva=2305,e.candrabindugujarati=2689,e.capslock=8682,e.careof=8453,e.caron=711,e.caronbelowcmb=812,e.caroncmb=780,e.carriagereturn=8629,e.cbopomofo=12568,e.ccaron=269,e.ccedilla=231,e.ccedillaacute=7689,e.ccircle=9426,e.ccircumflex=265,e.ccurl=597,e.cdot=267,e.cdotaccent=267,e.cdsquare=13253,e.cedilla=184,e.cedillacmb=807,e.cent=162,e.centigrade=8451,e.centinferior=63199,e.centmonospace=65504,e.centoldstyle=63394,e.centsuperior=63200,e.chaarmenian=1401,e.chabengali=2459,e.chadeva=2331,e.chagujarati=2715,e.chagurmukhi=2587,e.chbopomofo=12564,e.cheabkhasiancyrillic=1213,e.checkmark=10003,e.checyrillic=1095,e.chedescenderabkhasiancyrillic=1215,e.chedescendercyrillic=1207,e.chedieresiscyrillic=1269,e.cheharmenian=1395,e.chekhakassiancyrillic=1228,e.cheverticalstrokecyrillic=1209,e.chi=967,e.chieuchacirclekorean=12919,e.chieuchaparenkorean=12823,e.chieuchcirclekorean=12905,e.chieuchkorean=12618,e.chieuchparenkorean=12809,e.chochangthai=3594,e.chochanthai=3592,e.chochingthai=3593,e.chochoethai=3596,e.chook=392,e.cieucacirclekorean=12918,e.cieucaparenkorean=12822,e.cieuccirclekorean=12904,e.cieuckorean=12616,e.cieucparenkorean=12808,e.cieucuparenkorean=12828,e.circle=9675,e.circlecopyrt=169,e.circlemultiply=8855,e.circleot=8857,e.circleplus=8853,e.circlepostalmark=12342,e.circlewithlefthalfblack=9680,e.circlewithrighthalfblack=9681,e.circumflex=710,e.circumflexbelowcmb=813,e.circumflexcmb=770,e.clear=8999,e.clickalveolar=450,e.clickdental=448,e.clicklateral=449,e.clickretroflex=451,e.club=9827,e.clubsuitblack=9827
e.clubsuitwhite=9831,e.cmcubedsquare=13220,e.cmonospace=65347,e.cmsquaredsquare=13216,e.coarmenian=1409,e.colon=58,e.colonmonetary=8353,e.colonmonospace=65306,e.colonsign=8353,e.colonsmall=65109,e.colontriangularhalfmod=721,e.colontriangularmod=720,e.comma=44,e.commaabovecmb=787,e.commaaboverightcmb=789,e.commaaccent=63171,e.commaarabic=1548,e.commaarmenian=1373,e.commainferior=63201,e.commamonospace=65292,e.commareversedabovecmb=788,e.commareversedmod=701,e.commasmall=65104,e.commasuperior=63202,e.commaturnedabovecmb=786,e.commaturnedmod=699,e.compass=9788,e.congruent=8773,e.contourintegral=8750,e.control=8963,e.controlACK=6,e.controlBEL=7,e.controlBS=8,e.controlCAN=24,e.controlCR=13,e.controlDC1=17,e.controlDC2=18,e.controlDC3=19,e.controlDC4=20,e.controlDEL=127,e.controlDLE=16,e.controlEM=25,e.controlENQ=5,e.controlEOT=4,e.controlESC=27,e.controlETB=23,e.controlETX=3,e.controlFF=12,e.controlFS=28,e.controlGS=29,e.controlHT=9,e.controlLF=10,e.controlNAK=21,e.controlNULL=0,e.controlRS=30,e.controlSI=15,e.controlSO=14,e.controlSOT=2,e.controlSTX=1,e.controlSUB=26,e.controlSYN=22,e.controlUS=31,e.controlVT=11,e.copyright=169,e.copyrightsans=63721,e.copyrightserif=63193,e.cornerbracketleft=12300,e.cornerbracketlefthalfwidth=65378,e.cornerbracketleftvertical=65089,e.cornerbracketright=12301,e.cornerbracketrighthalfwidth=65379,e.cornerbracketrightvertical=65090,e.corporationsquare=13183,e.cosquare=13255,e.coverkgsquare=13254,e.cparen=9374,e.cruzeiro=8354,e.cstretched=663,e.curlyand=8911,e.curlyor=8910,e.currency=164,e.cyrBreve=63185,e.cyrFlex=63186,e.cyrbreve=63188,e.cyrflex=63189,e.d=100,e.daarmenian=1380,e.dabengali=2470,e.dadarabic=1590,e.dadeva=2342,e.dadfinalarabic=65214,e.dadinitialarabic=65215,e.dadmedialarabic=65216,e.dagesh=1468,e.dageshhebrew=1468,e.dagger=8224,e.daggerdbl=8225,e.dagujarati=2726,e.dagurmukhi=2598,e.dahiragana=12384,e.dakatakana=12480,e.dalarabic=1583,e.dalet=1491,e.daletdagesh=64307,e.daletdageshhebrew=64307,e.dalethebrew=1491,e.dalfinalarabic=65194,e.dammaarabic=1615,e.dammalowarabic=1615,e.dammatanaltonearabic=1612,e.dammatanarabic=1612,e.danda=2404,e.dargahebrew=1447,e.dargalefthebrew=1447,e.dasiapneumatacyrilliccmb=1157,e.dblGrave=63187,e.dblanglebracketleft=12298,e.dblanglebracketleftvertical=65085,e.dblanglebracketright=12299,e.dblanglebracketrightvertical=65086,e.dblarchinvertedbelowcmb=811,e.dblarrowleft=8660,e.dblarrowright=8658,e.dbldanda=2405,e.dblgrave=63190,e.dblgravecmb=783,e.dblintegral=8748,e.dbllowline=8215,e.dbllowlinecmb=819,e.dbloverlinecmb=831,e.dblprimemod=698,e.dblverticalbar=8214,e.dblverticallineabovecmb=782,e.dbopomofo=12553,e.dbsquare=13256,e.dcaron=271,e.dcedilla=7697,e.dcircle=9427,e.dcircumflexbelow=7699,e.dcroat=273,e.ddabengali=2465,e.ddadeva=2337,e.ddagujarati=2721,e.ddagurmukhi=2593,e.ddalarabic=1672,e.ddalfinalarabic=64393,e.dddhadeva=2396,e.ddhabengali=2466,e.ddhadeva=2338,e.ddhagujarati=2722,e.ddhagurmukhi=2594,e.ddotaccent=7691,e.ddotbelow=7693,e.decimalseparatorarabic=1643,e.decimalseparatorpersian=1643,e.decyrillic=1076,e.degree=176,e.dehihebrew=1453,e.dehiragana=12391,e.deicoptic=1007,e.dekatakana=12487,e.deleteleft=9003,e.deleteright=8998,e.delta=948,e.deltaturned=397,e.denominatorminusonenumeratorbengali=2552,e.dezh=676,e.dhabengali=2471,e.dhadeva=2343,e.dhagujarati=2727,e.dhagurmukhi=2599,e.dhook=599,e.dialytikatonos=901,e.dialytikatonoscmb=836,e.diamond=9830,e.diamondsuitwhite=9826,e.dieresis=168,e.dieresisacute=63191,e.dieresisbelowcmb=804,e.dieresiscmb=776,e.dieresisgrave=63192,e.dieresistonos=901,e.dihiragana=12386,e.dikatakana=12482,e.dittomark=12291,e.divide=247,e.divides=8739,e.divisionslash=8725,e.djecyrillic=1106,e.dkshade=9619,e.dlinebelow=7695,e.dlsquare=13207,e.dmacron=273,e.dmonospace=65348,e.dnblock=9604,e.dochadathai=3598,e.dodekthai=3604,e.dohiragana=12393,e.dokatakana=12489,e.dollar=36
e.dollarinferior=63203,e.dollarmonospace=65284,e.dollaroldstyle=63268,e.dollarsmall=65129,e.dollarsuperior=63204,e.dong=8363,e.dorusquare=13094,e.dotaccent=729,e.dotaccentcmb=775,e.dotbelowcmb=803,e.dotbelowcomb=803,e.dotkatakana=12539,e.dotlessi=305,e.dotlessj=63166,e.dotlessjstrokehook=644,e.dotmath=8901,e.dottedcircle=9676,e.doubleyodpatah=64287,e.doubleyodpatahhebrew=64287,e.downtackbelowcmb=798,e.downtackmod=725,e.dparen=9375,e.dsuperior=63211,e.dtail=598,e.dtopbar=396,e.duhiragana=12389,e.dukatakana=12485,e.dz=499,e.dzaltone=675,e.dzcaron=454,e.dzcurl=677,e.dzeabkhasiancyrillic=1249,e.dzecyrillic=1109,e.dzhecyrillic=1119,e.e=101,e.eacute=233,e.earth=9793,e.ebengali=2447,e.ebopomofo=12572,e.ebreve=277,e.ecandradeva=2317,e.ecandragujarati=2701,e.ecandravowelsigndeva=2373,e.ecandravowelsigngujarati=2757,e.ecaron=283,e.ecedillabreve=7709,e.echarmenian=1381,e.echyiwnarmenian=1415,e.ecircle=9428,e.ecircumflex=234,e.ecircumflexacute=7871,e.ecircumflexbelow=7705,e.ecircumflexdotbelow=7879,e.ecircumflexgrave=7873,e.ecircumflexhookabove=7875,e.ecircumflextilde=7877,e.ecyrillic=1108,e.edblgrave=517,e.edeva=2319,e.edieresis=235,e.edot=279,e.edotaccent=279,e.edotbelow=7865,e.eegurmukhi=2575,e.eematragurmukhi=2631,e.efcyrillic=1092,e.egrave=232,e.egujarati=2703,e.eharmenian=1383,e.ehbopomofo=12573,e.ehiragana=12360,e.ehookabove=7867,e.eibopomofo=12575,e.eight=56,e.eightarabic=1640,e.eightbengali=2542,e.eightcircle=9319,e.eightcircleinversesansserif=10129,e.eightdeva=2414,e.eighteencircle=9329,e.eighteenparen=9349,e.eighteenperiod=9369,e.eightgujarati=2798,e.eightgurmukhi=2670,e.eighthackarabic=1640,e.eighthangzhou=12328,e.eighthnotebeamed=9835,e.eightideographicparen=12839,e.eightinferior=8328,e.eightmonospace=65304,e.eightoldstyle=63288,e.eightparen=9339,e.eightperiod=9359,e.eightpersian=1784,e.eightroman=8567,e.eightsuperior=8312,e.eightthai=3672,e.einvertedbreve=519,e.eiotifiedcyrillic=1125,e.ekatakana=12456,e.ekatakanahalfwidth=65396,e.ekonkargurmukhi=2676,e.ekorean=12628,e.elcyrillic=1083,e.element=8712,e.elevencircle=9322,e.elevenparen=9342,e.elevenperiod=9362,e.elevenroman=8570,e.ellipsis=8230,e.ellipsisvertical=8942,e.emacron=275,e.emacronacute=7703,e.emacrongrave=7701,e.emcyrillic=1084,e.emdash=8212,e.emdashvertical=65073,e.emonospace=65349,e.emphasismarkarmenian=1371,e.emptyset=8709,e.enbopomofo=12579,e.encyrillic=1085,e.endash=8211,e.endashvertical=65074,e.endescendercyrillic=1187,e.eng=331,e.engbopomofo=12581,e.enghecyrillic=1189,e.enhookcyrillic=1224,e.enspace=8194,e.eogonek=281,e.eokorean=12627,e.eopen=603,e.eopenclosed=666,e.eopenreversed=604,e.eopenreversedclosed=606,e.eopenreversedhook=605,e.eparen=9376,e.epsilon=949,e.epsilontonos=941,e.equal=61,e.equalmonospace=65309,e.equalsmall=65126,e.equalsuperior=8316,e.equivalence=8801,e.erbopomofo=12582,e.ercyrillic=1088,e.ereversed=600,e.ereversedcyrillic=1101,e.escyrillic=1089,e.esdescendercyrillic=1195,e.esh=643,e.eshcurl=646,e.eshortdeva=2318,e.eshortvowelsigndeva=2374,e.eshreversedloop=426,e.eshsquatreversed=645,e.esmallhiragana=12359,e.esmallkatakana=12455,e.esmallkatakanahalfwidth=65386,e.estimated=8494,e.esuperior=63212,e.eta=951,e.etarmenian=1384,e.etatonos=942,e.eth=240,e.etilde=7869,e.etildebelow=7707,e.etnahtafoukhhebrew=1425,e.etnahtafoukhlefthebrew=1425,e.etnahtahebrew=1425,e.etnahtalefthebrew=1425,e.eturned=477,e.eukorean=12641,e.euro=8364,e.evowelsignbengali=2503,e.evowelsigndeva=2375,e.evowelsigngujarati=2759,e.exclam=33,e.exclamarmenian=1372,e.exclamdbl=8252,e.exclamdown=161,e.exclamdownsmall=63393,e.exclammonospace=65281,e.exclamsmall=63265,e.existential=8707,e.ezh=658,e.ezhcaron=495,e.ezhcurl=659,e.ezhreversed=441,e.ezhtail=442,e.f=102,e.fadeva=2398,e.fagurmukhi=2654,e.fahrenheit=8457,e.fathaarabic=1614,e.fathalowarabic=1614,e.fathatanarabic=1611,e.fbopomofo=12552,e.fcircle=9429
e.fdotaccent=7711,e.feharabic=1601,e.feharmenian=1414,e.fehfinalarabic=65234,e.fehinitialarabic=65235,e.fehmedialarabic=65236,e.feicoptic=997,e.female=9792,e.ff=64256,e.ffi=64259,e.ffl=64260,e.fi=64257,e.fifteencircle=9326,e.fifteenparen=9346,e.fifteenperiod=9366,e.figuredash=8210,e.filledbox=9632,e.filledrect=9644,e.finalkaf=1498,e.finalkafdagesh=64314,e.finalkafdageshhebrew=64314,e.finalkafhebrew=1498,e.finalmem=1501,e.finalmemhebrew=1501,e.finalnun=1503,e.finalnunhebrew=1503,e.finalpe=1507,e.finalpehebrew=1507,e.finaltsadi=1509,e.finaltsadihebrew=1509,e.firsttonechinese=713,e.fisheye=9673,e.fitacyrillic=1139,e.five=53,e.fivearabic=1637,e.fivebengali=2539,e.fivecircle=9316,e.fivecircleinversesansserif=10126,e.fivedeva=2411,e.fiveeighths=8541,e.fivegujarati=2795,e.fivegurmukhi=2667,e.fivehackarabic=1637,e.fivehangzhou=12325,e.fiveideographicparen=12836,e.fiveinferior=8325,e.fivemonospace=65301,e.fiveoldstyle=63285,e.fiveparen=9336,e.fiveperiod=9356,e.fivepersian=1781,e.fiveroman=8564,e.fivesuperior=8309,e.fivethai=3669,e.fl=64258,e.florin=402,e.fmonospace=65350,e.fmsquare=13209,e.fofanthai=3615,e.fofathai=3613,e.fongmanthai=3663,e.forall=8704,e.four=52,e.fourarabic=1636,e.fourbengali=2538,e.fourcircle=9315,e.fourcircleinversesansserif=10125,e.fourdeva=2410,e.fourgujarati=2794,e.fourgurmukhi=2666,e.fourhackarabic=1636,e.fourhangzhou=12324,e.fourideographicparen=12835,e.fourinferior=8324,e.fourmonospace=65300,e.fournumeratorbengali=2551,e.fouroldstyle=63284,e.fourparen=9335,e.fourperiod=9355,e.fourpersian=1780,e.fourroman=8563,e.foursuperior=8308,e.fourteencircle=9325,e.fourteenparen=9345,e.fourteenperiod=9365,e.fourthai=3668,e.fourthtonechinese=715,e.fparen=9377,e.fraction=8260,e.franc=8355,e.g=103,e.gabengali=2455,e.gacute=501,e.gadeva=2327,e.gafarabic=1711,e.gaffinalarabic=64403,e.gafinitialarabic=64404,e.gafmedialarabic=64405,e.gagujarati=2711,e.gagurmukhi=2583,e.gahiragana=12364,e.gakatakana=12460,e.gamma=947,e.gammalatinsmall=611,e.gammasuperior=736,e.gangiacoptic=1003,e.gbopomofo=12557,e.gbreve=287,e.gcaron=487,e.gcedilla=291,e.gcircle=9430,e.gcircumflex=285,e.gcommaaccent=291,e.gdot=289,e.gdotaccent=289,e.gecyrillic=1075,e.gehiragana=12370,e.gekatakana=12466,e.geometricallyequal=8785,e.gereshaccenthebrew=1436,e.gereshhebrew=1523,e.gereshmuqdamhebrew=1437,e.germandbls=223,e.gershayimaccenthebrew=1438,e.gershayimhebrew=1524,e.getamark=12307,e.ghabengali=2456,e.ghadarmenian=1394,e.ghadeva=2328,e.ghagujarati=2712,e.ghagurmukhi=2584,e.ghainarabic=1594,e.ghainfinalarabic=65230,e.ghaininitialarabic=65231,e.ghainmedialarabic=65232,e.ghemiddlehookcyrillic=1173,e.ghestrokecyrillic=1171,e.gheupturncyrillic=1169,e.ghhadeva=2394,e.ghhagurmukhi=2650,e.ghook=608,e.ghzsquare=13203,e.gihiragana=12366,e.gikatakana=12462,e.gimarmenian=1379,e.gimel=1490,e.gimeldagesh=64306,e.gimeldageshhebrew=64306,e.gimelhebrew=1490,e.gjecyrillic=1107,e.glottalinvertedstroke=446,e.glottalstop=660,e.glottalstopinverted=662,e.glottalstopmod=704,e.glottalstopreversed=661,e.glottalstopreversedmod=705,e.glottalstopreversedsuperior=740,e.glottalstopstroke=673,e.glottalstopstrokereversed=674,e.gmacron=7713,e.gmonospace=65351,e.gohiragana=12372,e.gokatakana=12468,e.gparen=9378,e.gpasquare=13228,e.gradient=8711,e.grave=96,e.gravebelowcmb=790,e.gravecmb=768,e.gravecomb=768,e.gravedeva=2387,e.gravelowmod=718,e.gravemonospace=65344,e.gravetonecmb=832,e.greater=62,e.greaterequal=8805,e.greaterequalorless=8923,e.greatermonospace=65310,e.greaterorequivalent=8819,e.greaterorless=8823,e.greateroverequal=8807,e.greatersmall=65125,e.gscript=609,e.gstroke=485,e.guhiragana=12368,e.guillemotleft=171,e.guillemotright=187,e.guilsinglleft=8249,e.guilsinglright=8250,e.gukatakana=12464,e.guramusquare=13080,e.gysquare=13257,e.h=104,e.haabkhasiancyrillic=1193,e.haaltonearabic=1729,e.habengali=2489,e.hadescendercyrillic=1203,e.hadeva=2361,e.hagujarati=2745,e.hagurmukhi=2617
e.haharabic=1581,e.hahfinalarabic=65186,e.hahinitialarabic=65187,e.hahiragana=12399,e.hahmedialarabic=65188,e.haitusquare=13098,e.hakatakana=12495,e.hakatakanahalfwidth=65418,e.halantgurmukhi=2637,e.hamzaarabic=1569,e.hamzalowarabic=1569,e.hangulfiller=12644,e.hardsigncyrillic=1098,e.harpoonleftbarbup=8636,e.harpoonrightbarbup=8640,e.hasquare=13258,e.hatafpatah=1458,e.hatafpatah16=1458,e.hatafpatah23=1458,e.hatafpatah2f=1458,e.hatafpatahhebrew=1458,e.hatafpatahnarrowhebrew=1458,e.hatafpatahquarterhebrew=1458,e.hatafpatahwidehebrew=1458,e.hatafqamats=1459,e.hatafqamats1b=1459,e.hatafqamats28=1459,e.hatafqamats34=1459,e.hatafqamatshebrew=1459,e.hatafqamatsnarrowhebrew=1459,e.hatafqamatsquarterhebrew=1459,e.hatafqamatswidehebrew=1459,e.hatafsegol=1457,e.hatafsegol17=1457,e.hatafsegol24=1457,e.hatafsegol30=1457,e.hatafsegolhebrew=1457,e.hatafsegolnarrowhebrew=1457,e.hatafsegolquarterhebrew=1457,e.hatafsegolwidehebrew=1457,e.hbar=295,e.hbopomofo=12559,e.hbrevebelow=7723,e.hcedilla=7721,e.hcircle=9431,e.hcircumflex=293,e.hdieresis=7719,e.hdotaccent=7715,e.hdotbelow=7717,e.he=1492,e.heart=9829,e.heartsuitblack=9829,e.heartsuitwhite=9825,e.hedagesh=64308,e.hedageshhebrew=64308,e.hehaltonearabic=1729,e.heharabic=1607,e.hehebrew=1492,e.hehfinalaltonearabic=64423,e.hehfinalalttwoarabic=65258,e.hehfinalarabic=65258,e.hehhamzaabovefinalarabic=64421,e.hehhamzaaboveisolatedarabic=64420,e.hehinitialaltonearabic=64424,e.hehinitialarabic=65259,e.hehiragana=12408,e.hehmedialaltonearabic=64425,e.hehmedialarabic=65260,e.heiseierasquare=13179,e.hekatakana=12504,e.hekatakanahalfwidth=65421,e.hekutaarusquare=13110,e.henghook=615,e.herutusquare=13113,e.het=1495,e.hethebrew=1495,e.hhook=614,e.hhooksuperior=689,e.hieuhacirclekorean=12923,e.hieuhaparenkorean=12827,e.hieuhcirclekorean=12909,e.hieuhkorean=12622,e.hieuhparenkorean=12813,e.hihiragana=12402,e.hikatakana=12498,e.hikatakanahalfwidth=65419,e.hiriq=1460,e.hiriq14=1460,e.hiriq21=1460,e.hiriq2d=1460,e.hiriqhebrew=1460,e.hiriqnarrowhebrew=1460,e.hiriqquarterhebrew=1460,e.hiriqwidehebrew=1460,e.hlinebelow=7830,e.hmonospace=65352,e.hoarmenian=1392,e.hohipthai=3627,e.hohiragana=12411,e.hokatakana=12507,e.hokatakanahalfwidth=65422,e.holam=1465,e.holam19=1465,e.holam26=1465,e.holam32=1465,e.holamhebrew=1465,e.holamnarrowhebrew=1465,e.holamquarterhebrew=1465,e.holamwidehebrew=1465,e.honokhukthai=3630,e.hookabovecomb=777,e.hookcmb=777,e.hookpalatalizedbelowcmb=801,e.hookretroflexbelowcmb=802,e.hoonsquare=13122,e.horicoptic=1001,e.horizontalbar=8213,e.horncmb=795,e.hotsprings=9832,e.house=8962,e.hparen=9379,e.hsuperior=688,e.hturned=613,e.huhiragana=12405,e.huiitosquare=13107,e.hukatakana=12501,e.hukatakanahalfwidth=65420,e.hungarumlaut=733,e.hungarumlautcmb=779,e.hv=405,e.hyphen=45,e.hypheninferior=63205,e.hyphenmonospace=65293,e.hyphensmall=65123,e.hyphensuperior=63206,e.hyphentwo=8208,e.i=105,e.iacute=237,e.iacyrillic=1103,e.ibengali=2439,e.ibopomofo=12583,e.ibreve=301,e.icaron=464,e.icircle=9432,e.icircumflex=238,e.icyrillic=1110,e.idblgrave=521,e.ideographearthcircle=12943,e.ideographfirecircle=12939,e.ideographicallianceparen=12863,e.ideographiccallparen=12858,e.ideographiccentrecircle=12965,e.ideographicclose=12294,e.ideographiccomma=12289,e.ideographiccommaleft=65380,e.ideographiccongratulationparen=12855,e.ideographiccorrectcircle=12963,e.ideographicearthparen=12847,e.ideographicenterpriseparen=12861,e.ideographicexcellentcircle=12957,e.ideographicfestivalparen=12864,e.ideographicfinancialcircle=12950,e.ideographicfinancialparen=12854,e.ideographicfireparen=12843,e.ideographichaveparen=12850,e.ideographichighcircle=12964,e.ideographiciterationmark=12293,e.ideographiclaborcircle=12952,e.ideographiclaborparen=12856,e.ideographicleftcircle=12967,e.ideographiclowcircle=12966,e.ideographicmedicinecircle=12969,e.ideographicmetalparen=12846,e.ideographicmoonparen=12842,e.ideographicnameparen=12852,e.ideographicperiod=12290,e.ideographicprintcircle=12958,e.ideographicreachparen=12867,e.ideographicrepresentparen=12857,e.ideographicresourceparen=12862,e.ideographicrightcircle=12968,e.ideographicsecretcircle=12953,e.ideographicselfparen=12866,e.ideographicsocietyparen=12851,e.ideographicspace=12288,e.ideographicspecialparen=12853,e.ideographicstockparen=12849,e.ideographicstudyparen=12859,e.ideographicsunparen=12848,e.ideographicsuperviseparen=12860,e.ideographicwaterparen=12844,e.ideographicwoodparen=12845,e.ideographiczero=12295,e.ideographmetalcircle=12942,e.ideographmooncircle=12938,e.ideographnamecircle=12948,e.ideographsuncircle=12944,e.ideographwatercircle=12940,e.ideographwoodcircle=12941,e.ideva=2311
e.idieresis=239,e.idieresisacute=7727,e.idieresiscyrillic=1253,e.idotbelow=7883,e.iebrevecyrillic=1239,e.iecyrillic=1077,e.ieungacirclekorean=12917,e.ieungaparenkorean=12821,e.ieungcirclekorean=12903,e.ieungkorean=12615,e.ieungparenkorean=12807,e.igrave=236,e.igujarati=2695,e.igurmukhi=2567,e.ihiragana=12356,e.ihookabove=7881,e.iibengali=2440,e.iicyrillic=1080,e.iideva=2312,e.iigujarati=2696,e.iigurmukhi=2568,e.iimatragurmukhi=2624,e.iinvertedbreve=523,e.iishortcyrillic=1081,e.iivowelsignbengali=2496,e.iivowelsigndeva=2368,e.iivowelsigngujarati=2752,e.ij=307,e.ikatakana=12452,e.ikatakanahalfwidth=65394,e.ikorean=12643,e.ilde=732,e.iluyhebrew=1452,e.imacron=299,e.imacroncyrillic=1251,e.imageorapproximatelyequal=8787,e.imatragurmukhi=2623,e.imonospace=65353,e.increment=8710,e.infinity=8734,e.iniarmenian=1387,e.integral=8747,e.integralbottom=8993,e.integralbt=8993,e.integralex=63733,e.integraltop=8992,e.integraltp=8992,e.intersection=8745,e.intisquare=13061,e.invbullet=9688,e.invcircle=9689,e.invsmileface=9787,e.iocyrillic=1105,e.iogonek=303,e.iota=953,e.iotadieresis=970,e.iotadieresistonos=912,e.iotalatin=617,e.iotatonos=943,e.iparen=9380,e.irigurmukhi=2674,e.ismallhiragana=12355,e.ismallkatakana=12451,e.ismallkatakanahalfwidth=65384,e.issharbengali=2554,e.istroke=616,e.isuperior=63213,e.iterationhiragana=12445,e.iterationkatakana=12541,e.itilde=297,e.itildebelow=7725,e.iubopomofo=12585,e.iucyrillic=1102,e.ivowelsignbengali=2495,e.ivowelsigndeva=2367,e.ivowelsigngujarati=2751,e.izhitsacyrillic=1141,e.izhitsadblgravecyrillic=1143,e.j=106,e.jaarmenian=1393,e.jabengali=2460,e.jadeva=2332,e.jagujarati=2716,e.jagurmukhi=2588,e.jbopomofo=12560,e.jcaron=496,e.jcircle=9433,e.jcircumflex=309,e.jcrossedtail=669,e.jdotlessstroke=607,e.jecyrillic=1112,e.jeemarabic=1580,e.jeemfinalarabic=65182,e.jeeminitialarabic=65183,e.jeemmedialarabic=65184,e.jeharabic=1688,e.jehfinalarabic=64395,e.jhabengali=2461,e.jhadeva=2333,e.jhagujarati=2717,e.jhagurmukhi=2589,e.jheharmenian=1403,e.jis=12292,e.jmonospace=65354,e.jparen=9381,e.jsuperior=690,e.k=107,e.kabashkircyrillic=1185,e.kabengali=2453,e.kacute=7729,e.kacyrillic=1082,e.kadescendercyrillic=1179,e.kadeva=2325,e.kaf=1499,e.kafarabic=1603,e.kafdagesh=64315,e.kafdageshhebrew=64315,e.kaffinalarabic=65242,e.kafhebrew=1499,e.kafinitialarabic=65243,e.kafmedialarabic=65244,e.kafrafehebrew=64333,e.kagujarati=2709,e.kagurmukhi=2581,e.kahiragana=12363,e.kahookcyrillic=1220,e.kakatakana=12459,e.kakatakanahalfwidth=65398,e.kappa=954,e.kappasymbolgreek=1008,e.kapyeounmieumkorean=12657,e.kapyeounphieuphkorean=12676,e.kapyeounpieupkorean=12664,e.kapyeounssangpieupkorean=12665,e.karoriisquare=13069,e.kashidaautoarabic=1600,e.kashidaautonosidebearingarabic=1600,e.kasmallkatakana=12533,e.kasquare=13188,e.kasraarabic=1616,e.kasratanarabic=1613,e.kastrokecyrillic=1183,e.katahiraprolongmarkhalfwidth=65392,e.kaverticalstrokecyrillic=1181,e.kbopomofo=12558,e.kcalsquare=13193,e.kcaron=489,e.kcedilla=311,e.kcircle=9434,e.kcommaaccent=311,e.kdotbelow=7731,e.keharmenian=1412,e.kehiragana=12369,e.kekatakana=12465,e.kekatakanahalfwidth=65401,e.kenarmenian=1391,e.kesmallkatakana=12534,e.kgreenlandic=312,e.khabengali=2454,e.khacyrillic=1093,e.khadeva=2326,e.khagujarati=2710,e.khagurmukhi=2582,e.khaharabic=1582,e.khahfinalarabic=65190,e.khahinitialarabic=65191,e.khahmedialarabic=65192,e.kheicoptic=999,e.khhadeva=2393,e.khhagurmukhi=2649,e.khieukhacirclekorean=12920,e.khieukhaparenkorean=12824,e.khieukhcirclekorean=12906,e.khieukhkorean=12619,e.khieukhparenkorean=12810,e.khokhaithai=3586,e.khokhonthai=3589,e.khokhuatthai=3587,e.khokhwaithai=3588,e.khomutthai=3675,e.khook=409,e.khorakhangthai=3590,e.khzsquare=13201,e.kihiragana=12365,e.kikatakana=12461,e.kikatakanahalfwidth=65399,e.kiroguramusquare=13077,e.kiromeetorusquare=13078,e.kirosquare=13076,e.kiyeokacirclekorean=12910,e.kiyeokaparenkorean=12814,e.kiyeokcirclekorean=12896,e.kiyeokkorean=12593,e.kiyeokparenkorean=12800,e.kiyeoksioskorean=12595,e.kjecyrillic=1116,e.klinebelow=7733,e.klsquare=13208,e.kmcubedsquare=13222,e.kmonospace=65355
e.kmsquaredsquare=13218,e.kohiragana=12371,e.kohmsquare=13248,e.kokaithai=3585,e.kokatakana=12467,e.kokatakanahalfwidth=65402,e.kooposquare=13086,e.koppacyrillic=1153,e.koreanstandardsymbol=12927,e.koroniscmb=835,e.kparen=9382,e.kpasquare=13226,e.ksicyrillic=1135,e.ktsquare=13263,e.kturned=670,e.kuhiragana=12367,e.kukatakana=12463,e.kukatakanahalfwidth=65400,e.kvsquare=13240,e.kwsquare=13246,e.l=108,e.labengali=2482,e.lacute=314,e.ladeva=2354,e.lagujarati=2738,e.lagurmukhi=2610,e.lakkhangyaothai=3653,e.lamaleffinalarabic=65276,e.lamalefhamzaabovefinalarabic=65272,e.lamalefhamzaaboveisolatedarabic=65271,e.lamalefhamzabelowfinalarabic=65274,e.lamalefhamzabelowisolatedarabic=65273,e.lamalefisolatedarabic=65275,e.lamalefmaddaabovefinalarabic=65270,e.lamalefmaddaaboveisolatedarabic=65269,e.lamarabic=1604,e.lambda=955,e.lambdastroke=411,e.lamed=1500,e.lameddagesh=64316,e.lameddageshhebrew=64316,e.lamedhebrew=1500,e.lamfinalarabic=65246,e.lamhahinitialarabic=64714,e.laminitialarabic=65247,e.lamjeeminitialarabic=64713,e.lamkhahinitialarabic=64715,e.lamlamhehisolatedarabic=65010,e.lammedialarabic=65248,e.lammeemhahinitialarabic=64904,e.lammeeminitialarabic=64716,e.largecircle=9711,e.lbar=410,e.lbelt=620,e.lbopomofo=12556,e.lcaron=318,e.lcedilla=316,e.lcircle=9435,e.lcircumflexbelow=7741,e.lcommaaccent=316,e.ldot=320,e.ldotaccent=320,e.ldotbelow=7735,e.ldotbelowmacron=7737,e.leftangleabovecmb=794,e.lefttackbelowcmb=792,e.less=60,e.lessequal=8804,e.lessequalorgreater=8922,e.lessmonospace=65308,e.lessorequivalent=8818,e.lessorgreater=8822,e.lessoverequal=8806,e.lesssmall=65124,e.lezh=622,e.lfblock=9612,e.lhookretroflex=621,e.lira=8356,e.liwnarmenian=1388,e.lj=457,e.ljecyrillic=1113,e.ll=63168,e.lladeva=2355,e.llagujarati=2739,e.llinebelow=7739,e.llladeva=2356,e.llvocalicbengali=2529,e.llvocalicdeva=2401,e.llvocalicvowelsignbengali=2531,e.llvocalicvowelsigndeva=2403,e.lmiddletilde=619,e.lmonospace=65356,e.lmsquare=13264,e.lochulathai=3628,e.logicaland=8743,e.logicalnot=172,e.logicalnotreversed=8976,e.logicalor=8744,e.lolingthai=3621,e.longs=383,e.lowlinecenterline=65102,e.lowlinecmb=818,e.lowlinedashed=65101,e.lozenge=9674,e.lparen=9383,e.lslash=322,e.lsquare=8467,e.lsuperior=63214,e.ltshade=9617,e.luthai=3622,e.lvocalicbengali=2444,e.lvocalicdeva=2316,e.lvocalicvowelsignbengali=2530,e.lvocalicvowelsigndeva=2402,e.lxsquare=13267,e.m=109,e.mabengali=2478,e.macron=175,e.macronbelowcmb=817,e.macroncmb=772,e.macronlowmod=717,e.macronmonospace=65507,e.macute=7743,e.madeva=2350,e.magujarati=2734,e.magurmukhi=2606,e.mahapakhhebrew=1444,e.mahapakhlefthebrew=1444,e.mahiragana=12414,e.maichattawalowleftthai=63637,e.maichattawalowrightthai=63636,e.maichattawathai=3659,e.maichattawaupperleftthai=63635,e.maieklowleftthai=63628,e.maieklowrightthai=63627,e.maiekthai=3656,e.maiekupperleftthai=63626,e.maihanakatleftthai=63620,e.maihanakatthai=3633,e.maitaikhuleftthai=63625,e.maitaikhuthai=3655,e.maitholowleftthai=63631,e.maitholowrightthai=63630,e.maithothai=3657,e.maithoupperleftthai=63629,e.maitrilowleftthai=63634,e.maitrilowrightthai=63633,e.maitrithai=3658,e.maitriupperleftthai=63632,e.maiyamokthai=3654,e.makatakana=12510,e.makatakanahalfwidth=65423,e.male=9794,e.mansyonsquare=13127,e.maqafhebrew=1470,e.mars=9794,e.masoracirclehebrew=1455,e.masquare=13187,e.mbopomofo=12551,e.mbsquare=13268,e.mcircle=9436,e.mcubedsquare=13221,e.mdotaccent=7745,e.mdotbelow=7747,e.meemarabic=1605,e.meemfinalarabic=65250,e.meeminitialarabic=65251,e.meemmedialarabic=65252,e.meemmeeminitialarabic=64721,e.meemmeemisolatedarabic=64584,e.meetorusquare=13133,e.mehiragana=12417,e.meizierasquare=13182,e.mekatakana=12513,e.mekatakanahalfwidth=65426,e.mem=1502,e.memdagesh=64318,e.memdageshhebrew=64318,e.memhebrew=1502,e.menarmenian=1396,e.merkhahebrew=1445,e.merkhakefulahebrew=1446,e.merkhakefulalefthebrew=1446,e.merkhalefthebrew=1445,e.mhook=625,e.mhzsquare=13202,e.middledotkatakanahalfwidth=65381,e.middot=183,e.mieumacirclekorean=12914,e.mieumaparenkorean=12818,e.mieumcirclekorean=12900,e.mieumkorean=12609,e.mieumpansioskorean=12656,e.mieumparenkorean=12804,e.mieumpieupkorean=12654,e.mieumsioskorean=12655,e.mihiragana=12415,e.mikatakana=12511,e.mikatakanahalfwidth=65424,e.minus=8722
e.minusbelowcmb=800,e.minuscircle=8854,e.minusmod=727,e.minusplus=8723,e.minute=8242,e.miribaarusquare=13130,e.mirisquare=13129,e.mlonglegturned=624,e.mlsquare=13206,e.mmcubedsquare=13219,e.mmonospace=65357,e.mmsquaredsquare=13215,e.mohiragana=12418,e.mohmsquare=13249,e.mokatakana=12514,e.mokatakanahalfwidth=65427,e.molsquare=13270,e.momathai=3617,e.moverssquare=13223,e.moverssquaredsquare=13224,e.mparen=9384,e.mpasquare=13227,e.mssquare=13235,e.msuperior=63215,e.mturned=623,e.mu=181,e.mu1=181,e.muasquare=13186,e.muchgreater=8811,e.muchless=8810,e.mufsquare=13196,e.mugreek=956,e.mugsquare=13197,e.muhiragana=12416,e.mukatakana=12512,e.mukatakanahalfwidth=65425,e.mulsquare=13205,e.multiply=215,e.mumsquare=13211,e.munahhebrew=1443,e.munahlefthebrew=1443,e.musicalnote=9834,e.musicalnotedbl=9835,e.musicflatsign=9837,e.musicsharpsign=9839,e.mussquare=13234,e.muvsquare=13238,e.muwsquare=13244,e.mvmegasquare=13241,e.mvsquare=13239,e.mwmegasquare=13247,e.mwsquare=13245,e.n=110,e.nabengali=2472,e.nabla=8711,e.nacute=324,e.nadeva=2344,e.nagujarati=2728,e.nagurmukhi=2600,e.nahiragana=12394,e.nakatakana=12490,e.nakatakanahalfwidth=65413,e.napostrophe=329,e.nasquare=13185,e.nbopomofo=12555,e.nbspace=160,e.ncaron=328,e.ncedilla=326,e.ncircle=9437,e.ncircumflexbelow=7755,e.ncommaaccent=326,e.ndotaccent=7749,e.ndotbelow=7751,e.nehiragana=12397,e.nekatakana=12493,e.nekatakanahalfwidth=65416,e.newsheqelsign=8362,e.nfsquare=13195,e.ngabengali=2457,e.ngadeva=2329,e.ngagujarati=2713,e.ngagurmukhi=2585,e.ngonguthai=3591,e.nhiragana=12435,e.nhookleft=626,e.nhookretroflex=627,e.nieunacirclekorean=12911,e.nieunaparenkorean=12815,e.nieuncieuckorean=12597,e.nieuncirclekorean=12897,e.nieunhieuhkorean=12598,e.nieunkorean=12596,e.nieunpansioskorean=12648,e.nieunparenkorean=12801,e.nieunsioskorean=12647,e.nieuntikeutkorean=12646,e.nihiragana=12395,e.nikatakana=12491,e.nikatakanahalfwidth=65414,e.nikhahitleftthai=63641,e.nikhahitthai=3661,e.nine=57,e.ninearabic=1641,e.ninebengali=2543,e.ninecircle=9320,e.ninecircleinversesansserif=10130,e.ninedeva=2415,e.ninegujarati=2799,e.ninegurmukhi=2671,e.ninehackarabic=1641,e.ninehangzhou=12329,e.nineideographicparen=12840,e.nineinferior=8329,e.ninemonospace=65305,e.nineoldstyle=63289,e.nineparen=9340,e.nineperiod=9360,e.ninepersian=1785,e.nineroman=8568,e.ninesuperior=8313,e.nineteencircle=9330,e.nineteenparen=9350,e.nineteenperiod=9370,e.ninethai=3673,e.nj=460,e.njecyrillic=1114,e.nkatakana=12531,e.nkatakanahalfwidth=65437,e.nlegrightlong=414,e.nlinebelow=7753,e.nmonospace=65358,e.nmsquare=13210,e.nnabengali=2467,e.nnadeva=2339,e.nnagujarati=2723,e.nnagurmukhi=2595,e.nnnadeva=2345,e.nohiragana=12398,e.nokatakana=12494,e.nokatakanahalfwidth=65417,e.nonbreakingspace=160,e.nonenthai=3603,e.nonuthai=3609,e.noonarabic=1606,e.noonfinalarabic=65254,e.noonghunnaarabic=1722,e.noonghunnafinalarabic=64415,e.nooninitialarabic=65255,e.noonjeeminitialarabic=64722,e.noonjeemisolatedarabic=64587,e.noonmedialarabic=65256,e.noonmeeminitialarabic=64725,e.noonmeemisolatedarabic=64590,e.noonnoonfinalarabic=64653,e.notcontains=8716,e.notelement=8713,e.notelementof=8713,e.notequal=8800,e.notgreater=8815,e.notgreaternorequal=8817,e.notgreaternorless=8825,e.notidentical=8802,e.notless=8814,e.notlessnorequal=8816,e.notparallel=8742,e.notprecedes=8832,e.notsubset=8836,e.notsucceeds=8833,e.notsuperset=8837,e.nowarmenian=1398,e.nparen=9385,e.nssquare=13233,e.nsuperior=8319,e.ntilde=241,e.nu=957,e.nuhiragana=12396,e.nukatakana=12492,e.nukatakanahalfwidth=65415,e.nuktabengali=2492,e.nuktadeva=2364,e.nuktagujarati=2748,e.nuktagurmukhi=2620,e.numbersign=35,e.numbersignmonospace=65283,e.numbersignsmall=65119,e.numeralsigngreek=884,e.numeralsignlowergreek=885,e.numero=8470,e.nun=1504,e.nundagesh=64320,e.nundageshhebrew=64320,e.nunhebrew=1504,e.nvsquare=13237,e.nwsquare=13243,e.nyabengali=2462,e.nyadeva=2334,e.nyagujarati=2718,e.nyagurmukhi=2590,e.o=111,e.oacute=243
e.oangthai=3629,e.obarred=629,e.obarredcyrillic=1257,e.obarreddieresiscyrillic=1259,e.obengali=2451,e.obopomofo=12571,e.obreve=335,e.ocandradeva=2321,e.ocandragujarati=2705,e.ocandravowelsigndeva=2377,e.ocandravowelsigngujarati=2761,e.ocaron=466,e.ocircle=9438,e.ocircumflex=244,e.ocircumflexacute=7889,e.ocircumflexdotbelow=7897,e.ocircumflexgrave=7891,e.ocircumflexhookabove=7893,e.ocircumflextilde=7895,e.ocyrillic=1086,e.odblacute=337,e.odblgrave=525,e.odeva=2323,e.odieresis=246,e.odieresiscyrillic=1255,e.odotbelow=7885,e.oe=339,e.oekorean=12634,e.ogonek=731,e.ogonekcmb=808,e.ograve=242,e.ogujarati=2707,e.oharmenian=1413,e.ohiragana=12362,e.ohookabove=7887,e.ohorn=417,e.ohornacute=7899,e.ohorndotbelow=7907,e.ohorngrave=7901,e.ohornhookabove=7903,e.ohorntilde=7905,e.ohungarumlaut=337,e.oi=419,e.oinvertedbreve=527,e.okatakana=12458,e.okatakanahalfwidth=65397,e.okorean=12631,e.olehebrew=1451,e.omacron=333,e.omacronacute=7763,e.omacrongrave=7761,e.omdeva=2384,e.omega=969,e.omega1=982,e.omegacyrillic=1121,e.omegalatinclosed=631,e.omegaroundcyrillic=1147,e.omegatitlocyrillic=1149,e.omegatonos=974,e.omgujarati=2768,e.omicron=959,e.omicrontonos=972,e.omonospace=65359,e.one=49,e.onearabic=1633,e.onebengali=2535,e.onecircle=9312,e.onecircleinversesansserif=10122,e.onedeva=2407,e.onedotenleader=8228,e.oneeighth=8539,e.onefitted=63196,e.onegujarati=2791,e.onegurmukhi=2663,e.onehackarabic=1633,e.onehalf=189,e.onehangzhou=12321,e.oneideographicparen=12832,e.oneinferior=8321,e.onemonospace=65297,e.onenumeratorbengali=2548,e.oneoldstyle=63281,e.oneparen=9332,e.oneperiod=9352,e.onepersian=1777,e.onequarter=188,e.oneroman=8560,e.onesuperior=185,e.onethai=3665,e.onethird=8531,e.oogonek=491,e.oogonekmacron=493,e.oogurmukhi=2579,e.oomatragurmukhi=2635,e.oopen=596,e.oparen=9386,e.openbullet=9702,e.option=8997,e.ordfeminine=170,e.ordmasculine=186,e.orthogonal=8735,e.oshortdeva=2322,e.oshortvowelsigndeva=2378,e.oslash=248,e.oslashacute=511,e.osmallhiragana=12361,e.osmallkatakana=12457,e.osmallkatakanahalfwidth=65387,e.ostrokeacute=511,e.osuperior=63216,e.otcyrillic=1151,e.otilde=245,e.otildeacute=7757,e.otildedieresis=7759,e.oubopomofo=12577,e.overline=8254,e.overlinecenterline=65098,e.overlinecmb=773,e.overlinedashed=65097,e.overlinedblwavy=65100,e.overlinewavy=65099,e.overscore=175,e.ovowelsignbengali=2507,e.ovowelsigndeva=2379,e.ovowelsigngujarati=2763,e.p=112,e.paampssquare=13184,e.paasentosquare=13099,e.pabengali=2474,e.pacute=7765,e.padeva=2346,e.pagedown=8671,e.pageup=8670,e.pagujarati=2730,e.pagurmukhi=2602,e.pahiragana=12401,e.paiyannoithai=3631,e.pakatakana=12497,e.palatalizationcyrilliccmb=1156,e.palochkacyrillic=1216,e.pansioskorean=12671,e.paragraph=182,e.parallel=8741,e.parenleft=40,e.parenleftaltonearabic=64830,e.parenleftbt=63725,e.parenleftex=63724,e.parenleftinferior=8333,e.parenleftmonospace=65288,e.parenleftsmall=65113,e.parenleftsuperior=8317,e.parenlefttp=63723,e.parenleftvertical=65077,e.parenright=41,e.parenrightaltonearabic=64831,e.parenrightbt=63736,e.parenrightex=63735,e.parenrightinferior=8334,e.parenrightmonospace=65289,e.parenrightsmall=65114,e.parenrightsuperior=8318,e.parenrighttp=63734,e.parenrightvertical=65078,e.partialdiff=8706,e.paseqhebrew=1472,e.pashtahebrew=1433,e.pasquare=13225,e.patah=1463,e.patah11=1463,e.patah1d=1463,e.patah2a=1463,e.patahhebrew=1463,e.patahnarrowhebrew=1463,e.patahquarterhebrew=1463,e.patahwidehebrew=1463,e.pazerhebrew=1441,e.pbopomofo=12550,e.pcircle=9439,e.pdotaccent=7767,e.pe=1508,e.pecyrillic=1087,e.pedagesh=64324,e.pedageshhebrew=64324,e.peezisquare=13115,e.pefinaldageshhebrew=64323,e.peharabic=1662,e.peharmenian=1402,e.pehebrew=1508,e.pehfinalarabic=64343,e.pehinitialarabic=64344,e.pehiragana=12410,e.pehmedialarabic=64345,e.pekatakana=12506,e.pemiddlehookcyrillic=1191,e.perafehebrew=64334,e.percent=37,e.percentarabic=1642,e.percentmonospace=65285,e.percentsmall=65130,e.period=46
e.periodarmenian=1417,e.periodcentered=183,e.periodhalfwidth=65377,e.periodinferior=63207,e.periodmonospace=65294,e.periodsmall=65106,e.periodsuperior=63208,e.perispomenigreekcmb=834,e.perpendicular=8869,e.perthousand=8240,e.peseta=8359,e.pfsquare=13194,e.phabengali=2475,e.phadeva=2347,e.phagujarati=2731,e.phagurmukhi=2603,e.phi=966,e.phi1=981,e.phieuphacirclekorean=12922,e.phieuphaparenkorean=12826,e.phieuphcirclekorean=12908,e.phieuphkorean=12621,e.phieuphparenkorean=12812,e.philatin=632,e.phinthuthai=3642,e.phisymbolgreek=981,e.phook=421,e.phophanthai=3614,e.phophungthai=3612,e.phosamphaothai=3616,e.pi=960,e.pieupacirclekorean=12915,e.pieupaparenkorean=12819,e.pieupcieuckorean=12662,e.pieupcirclekorean=12901,e.pieupkiyeokkorean=12658,e.pieupkorean=12610,e.pieupparenkorean=12805,e.pieupsioskiyeokkorean=12660,e.pieupsioskorean=12612,e.pieupsiostikeutkorean=12661,e.pieupthieuthkorean=12663,e.pieuptikeutkorean=12659,e.pihiragana=12404,e.pikatakana=12500,e.pisymbolgreek=982,e.piwrarmenian=1411,e.plus=43,e.plusbelowcmb=799,e.pluscircle=8853,e.plusminus=177,e.plusmod=726,e.plusmonospace=65291,e.plussmall=65122,e.plussuperior=8314,e.pmonospace=65360,e.pmsquare=13272,e.pohiragana=12413,e.pointingindexdownwhite=9759,e.pointingindexleftwhite=9756,e.pointingindexrightwhite=9758,e.pointingindexupwhite=9757,e.pokatakana=12509,e.poplathai=3611,e.postalmark=12306,e.postalmarkface=12320,e.pparen=9387,e.precedes=8826,e.prescription=8478,e.primemod=697,e.primereversed=8245,e.product=8719,e.projective=8965,e.prolongedkana=12540,e.propellor=8984,e.propersubset=8834,e.propersuperset=8835,e.proportion=8759,e.proportional=8733,e.psi=968,e.psicyrillic=1137,e.psilipneumatacyrilliccmb=1158,e.pssquare=13232,e.puhiragana=12407,e.pukatakana=12503,e.pvsquare=13236,e.pwsquare=13242,e.q=113,e.qadeva=2392,e.qadmahebrew=1448,e.qafarabic=1602,e.qaffinalarabic=65238,e.qafinitialarabic=65239,e.qafmedialarabic=65240,e.qamats=1464,e.qamats10=1464,e.qamats1a=1464,e.qamats1c=1464,e.qamats27=1464,e.qamats29=1464,e.qamats33=1464,e.qamatsde=1464,e.qamatshebrew=1464,e.qamatsnarrowhebrew=1464,e.qamatsqatanhebrew=1464,e.qamatsqatannarrowhebrew=1464,e.qamatsqatanquarterhebrew=1464,e.qamatsqatanwidehebrew=1464,e.qamatsquarterhebrew=1464,e.qamatswidehebrew=1464,e.qarneyparahebrew=1439,e.qbopomofo=12561,e.qcircle=9440,e.qhook=672,e.qmonospace=65361,e.qof=1511,e.qofdagesh=64327,e.qofdageshhebrew=64327,e.qofhebrew=1511,e.qparen=9388,e.quarternote=9833,e.qubuts=1467,e.qubuts18=1467,e.qubuts25=1467,e.qubuts31=1467,e.qubutshebrew=1467,e.qubutsnarrowhebrew=1467,e.qubutsquarterhebrew=1467,e.qubutswidehebrew=1467,e.question=63,e.questionarabic=1567,e.questionarmenian=1374,e.questiondown=191,e.questiondownsmall=63423,e.questiongreek=894,e.questionmonospace=65311,e.questionsmall=63295,e.quotedbl=34,e.quotedblbase=8222,e.quotedblleft=8220,e.quotedblmonospace=65282,e.quotedblprime=12318,e.quotedblprimereversed=12317,e.quotedblright=8221,e.quoteleft=8216,e.quoteleftreversed=8219,e.quotereversed=8219,e.quoteright=8217,e.quoterightn=329,e.quotesinglbase=8218,e.quotesingle=39,e.quotesinglemonospace=65287,e.r=114,e.raarmenian=1404,e.rabengali=2480,e.racute=341,e.radeva=2352,e.radical=8730,e.radicalex=63717,e.radoverssquare=13230,e.radoverssquaredsquare=13231,e.radsquare=13229,e.rafe=1471,e.rafehebrew=1471,e.ragujarati=2736,e.ragurmukhi=2608,e.rahiragana=12425,e.rakatakana=12521,e.rakatakanahalfwidth=65431,e.ralowerdiagonalbengali=2545,e.ramiddlediagonalbengali=2544,e.ramshorn=612,e.ratio=8758,e.rbopomofo=12566,e.rcaron=345,e.rcedilla=343,e.rcircle=9441,e.rcommaaccent=343,e.rdblgrave=529,e.rdotaccent=7769,e.rdotbelow=7771,e.rdotbelowmacron=7773,e.referencemark=8251,e.reflexsubset=8838,e.reflexsuperset=8839,e.registered=174,e.registersans=63720,e.registerserif=63194,e.reharabic=1585,e.reharmenian=1408,e.rehfinalarabic=65198,e.rehiragana=12428,e.rekatakana=12524,e.rekatakanahalfwidth=65434,e.resh=1512,e.reshdageshhebrew=64328,e.reshhebrew=1512,e.reversedtilde=8765,e.reviahebrew=1431,e.reviamugrashhebrew=1431
e.revlogicalnot=8976,e.rfishhook=638,e.rfishhookreversed=639,e.rhabengali=2525,e.rhadeva=2397,e.rho=961,e.rhook=637,e.rhookturned=635,e.rhookturnedsuperior=693,e.rhosymbolgreek=1009,e.rhotichookmod=734,e.rieulacirclekorean=12913,e.rieulaparenkorean=12817,e.rieulcirclekorean=12899,e.rieulhieuhkorean=12608,e.rieulkiyeokkorean=12602,e.rieulkiyeoksioskorean=12649,e.rieulkorean=12601,e.rieulmieumkorean=12603,e.rieulpansioskorean=12652,e.rieulparenkorean=12803,e.rieulphieuphkorean=12607,e.rieulpieupkorean=12604,e.rieulpieupsioskorean=12651,e.rieulsioskorean=12605,e.rieulthieuthkorean=12606,e.rieultikeutkorean=12650,e.rieulyeorinhieuhkorean=12653,e.rightangle=8735,e.righttackbelowcmb=793,e.righttriangle=8895,e.rihiragana=12426,e.rikatakana=12522,e.rikatakanahalfwidth=65432,e.ring=730,e.ringbelowcmb=805,e.ringcmb=778,e.ringhalfleft=703,e.ringhalfleftarmenian=1369,e.ringhalfleftbelowcmb=796,e.ringhalfleftcentered=723,e.ringhalfright=702,e.ringhalfrightbelowcmb=825,e.ringhalfrightcentered=722,e.rinvertedbreve=531,e.rittorusquare=13137,e.rlinebelow=7775,e.rlongleg=636,e.rlonglegturned=634,e.rmonospace=65362,e.rohiragana=12429,e.rokatakana=12525,e.rokatakanahalfwidth=65435,e.roruathai=3619,e.rparen=9389,e.rrabengali=2524,e.rradeva=2353,e.rragurmukhi=2652,e.rreharabic=1681,e.rrehfinalarabic=64397,e.rrvocalicbengali=2528,e.rrvocalicdeva=2400,e.rrvocalicgujarati=2784,e.rrvocalicvowelsignbengali=2500,e.rrvocalicvowelsigndeva=2372,e.rrvocalicvowelsigngujarati=2756,e.rsuperior=63217,e.rtblock=9616,e.rturned=633,e.rturnedsuperior=692,e.ruhiragana=12427,e.rukatakana=12523,e.rukatakanahalfwidth=65433,e.rupeemarkbengali=2546,e.rupeesignbengali=2547,e.rupiah=63197,e.ruthai=3620,e.rvocalicbengali=2443,e.rvocalicdeva=2315,e.rvocalicgujarati=2699,e.rvocalicvowelsignbengali=2499,e.rvocalicvowelsigndeva=2371,e.rvocalicvowelsigngujarati=2755,e.s=115,e.sabengali=2488,e.sacute=347,e.sacutedotaccent=7781,e.sadarabic=1589,e.sadeva=2360,e.sadfinalarabic=65210,e.sadinitialarabic=65211,e.sadmedialarabic=65212,e.sagujarati=2744,e.sagurmukhi=2616,e.sahiragana=12373,e.sakatakana=12469,e.sakatakanahalfwidth=65403,e.sallallahoualayhewasallamarabic=65018,e.samekh=1505,e.samekhdagesh=64321,e.samekhdageshhebrew=64321,e.samekhhebrew=1505,e.saraaathai=3634,e.saraaethai=3649,e.saraaimaimalaithai=3652,e.saraaimaimuanthai=3651,e.saraamthai=3635,e.saraathai=3632,e.saraethai=3648,e.saraiileftthai=63622,e.saraiithai=3637,e.saraileftthai=63621,e.saraithai=3636,e.saraothai=3650,e.saraueeleftthai=63624,e.saraueethai=3639,e.saraueleftthai=63623,e.sarauethai=3638,e.sarauthai=3640,e.sarauuthai=3641,e.sbopomofo=12569,e.scaron=353,e.scarondotaccent=7783,e.scedilla=351,e.schwa=601,e.schwacyrillic=1241,e.schwadieresiscyrillic=1243,e.schwahook=602,e.scircle=9442,e.scircumflex=349,e.scommaaccent=537,e.sdotaccent=7777,e.sdotbelow=7779,e.sdotbelowdotaccent=7785,e.seagullbelowcmb=828,e.second=8243,e.secondtonechinese=714,e.section=167,e.seenarabic=1587,e.seenfinalarabic=65202,e.seeninitialarabic=65203,e.seenmedialarabic=65204,e.segol=1462,e.segol13=1462,e.segol1f=1462,e.segol2c=1462,e.segolhebrew=1462,e.segolnarrowhebrew=1462,e.segolquarterhebrew=1462,e.segoltahebrew=1426,e.segolwidehebrew=1462,e.seharmenian=1405,e.sehiragana=12379,e.sekatakana=12475,e.sekatakanahalfwidth=65406,e.semicolon=59,e.semicolonarabic=1563,e.semicolonmonospace=65307,e.semicolonsmall=65108,e.semivoicedmarkkana=12444,e.semivoicedmarkkanahalfwidth=65439,e.sentisquare=13090,e.sentosquare=13091,e.seven=55,e.sevenarabic=1639,e.sevenbengali=2541,e.sevencircle=9318,e.sevencircleinversesansserif=10128,e.sevendeva=2413,e.seveneighths=8542,e.sevengujarati=2797,e.sevengurmukhi=2669,e.sevenhackarabic=1639,e.sevenhangzhou=12327,e.sevenideographicparen=12838,e.seveninferior=8327,e.sevenmonospace=65303,e.sevenoldstyle=63287,e.sevenparen=9338,e.sevenperiod=9358,e.sevenpersian=1783,e.sevenroman=8566,e.sevensuperior=8311,e.seventeencircle=9328,e.seventeenparen=9348,e.seventeenperiod=9368,e.seventhai=3671,e.sfthyphen=173,e.shaarmenian=1399,e.shabengali=2486,e.shacyrillic=1096,e.shaddaarabic=1617,e.shaddadammaarabic=64609,e.shaddadammatanarabic=64606,e.shaddafathaarabic=64608,e.shaddakasraarabic=64610,e.shaddakasratanarabic=64607,e.shade=9618,e.shadedark=9619,e.shadelight=9617
e.shademedium=9618,e.shadeva=2358,e.shagujarati=2742,e.shagurmukhi=2614,e.shalshelethebrew=1427,e.shbopomofo=12565,e.shchacyrillic=1097,e.sheenarabic=1588,e.sheenfinalarabic=65206,e.sheeninitialarabic=65207,e.sheenmedialarabic=65208,e.sheicoptic=995,e.sheqel=8362,e.sheqelhebrew=8362,e.sheva=1456,e.sheva115=1456,e.sheva15=1456,e.sheva22=1456,e.sheva2e=1456,e.shevahebrew=1456,e.shevanarrowhebrew=1456,e.shevaquarterhebrew=1456,e.shevawidehebrew=1456,e.shhacyrillic=1211,e.shimacoptic=1005,e.shin=1513,e.shindagesh=64329,e.shindageshhebrew=64329,e.shindageshshindot=64300,e.shindageshshindothebrew=64300,e.shindageshsindot=64301,e.shindageshsindothebrew=64301,e.shindothebrew=1473,e.shinhebrew=1513,e.shinshindot=64298,e.shinshindothebrew=64298,e.shinsindot=64299,e.shinsindothebrew=64299,e.shook=642,e.sigma=963,e.sigma1=962,e.sigmafinal=962,e.sigmalunatesymbolgreek=1010,e.sihiragana=12375,e.sikatakana=12471,e.sikatakanahalfwidth=65404,e.siluqhebrew=1469,e.siluqlefthebrew=1469,e.similar=8764,e.sindothebrew=1474,e.siosacirclekorean=12916,e.siosaparenkorean=12820,e.sioscieuckorean=12670,e.sioscirclekorean=12902,e.sioskiyeokkorean=12666,e.sioskorean=12613,e.siosnieunkorean=12667,e.siosparenkorean=12806,e.siospieupkorean=12669,e.siostikeutkorean=12668,e.six=54,e.sixarabic=1638,e.sixbengali=2540,e.sixcircle=9317,e.sixcircleinversesansserif=10127,e.sixdeva=2412,e.sixgujarati=2796,e.sixgurmukhi=2668,e.sixhackarabic=1638,e.sixhangzhou=12326,e.sixideographicparen=12837,e.sixinferior=8326,e.sixmonospace=65302,e.sixoldstyle=63286,e.sixparen=9337,e.sixperiod=9357,e.sixpersian=1782,e.sixroman=8565,e.sixsuperior=8310,e.sixteencircle=9327,e.sixteencurrencydenominatorbengali=2553,e.sixteenparen=9347,e.sixteenperiod=9367,e.sixthai=3670,e.slash=47,e.slashmonospace=65295,e.slong=383,e.slongdotaccent=7835,e.smileface=9786,e.smonospace=65363,e.sofpasuqhebrew=1475,e.softhyphen=173,e.softsigncyrillic=1100,e.sohiragana=12381,e.sokatakana=12477,e.sokatakanahalfwidth=65407,e.soliduslongoverlaycmb=824,e.solidusshortoverlaycmb=823,e.sorusithai=3625,e.sosalathai=3624,e.sosothai=3595,e.sosuathai=3626,e.space=32,e.spacehackarabic=32,e.spade=9824,e.spadesuitblack=9824,e.spadesuitwhite=9828,e.sparen=9390,e.squarebelowcmb=827,e.squarecc=13252,e.squarecm=13213,e.squarediagonalcrosshatchfill=9641,e.squarehorizontalfill=9636,e.squarekg=13199,e.squarekm=13214,e.squarekmcapital=13262,e.squareln=13265,e.squarelog=13266,e.squaremg=13198,e.squaremil=13269,e.squaremm=13212,e.squaremsquared=13217,e.squareorthogonalcrosshatchfill=9638,e.squareupperlefttolowerrightfill=9639,e.squareupperrighttolowerleftfill=9640,e.squareverticalfill=9637,e.squarewhitewithsmallblack=9635,e.srsquare=13275,e.ssabengali=2487,e.ssadeva=2359,e.ssagujarati=2743,e.ssangcieuckorean=12617,e.ssanghieuhkorean=12677,e.ssangieungkorean=12672,e.ssangkiyeokkorean=12594,e.ssangnieunkorean=12645,e.ssangpieupkorean=12611,e.ssangsioskorean=12614,e.ssangtikeutkorean=12600,e.ssuperior=63218,e.sterling=163,e.sterlingmonospace=65505,e.strokelongoverlaycmb=822,e.strokeshortoverlaycmb=821,e.subset=8834,e.subsetnotequal=8842,e.subsetorequal=8838,e.succeeds=8827,e.suchthat=8715,e.suhiragana=12377,e.sukatakana=12473,e.sukatakanahalfwidth=65405,e.sukunarabic=1618,e.summation=8721,e.sun=9788,e.superset=8835,e.supersetnotequal=8843,e.supersetorequal=8839,e.svsquare=13276,e.syouwaerasquare=13180,e.t=116,e.tabengali=2468,e.tackdown=8868,e.tackleft=8867,e.tadeva=2340,e.tagujarati=2724,e.tagurmukhi=2596,e.taharabic=1591,e.tahfinalarabic=65218,e.tahinitialarabic=65219,e.tahiragana=12383,e.tahmedialarabic=65220,e.taisyouerasquare=13181,e.takatakana=12479,e.takatakanahalfwidth=65408,e.tatweelarabic=1600,e.tau=964,e.tav=1514,e.tavdages=64330,e.tavdagesh=64330,e.tavdageshhebrew=64330,e.tavhebrew=1514,e.tbar=359,e.tbopomofo=12554,e.tcaron=357,e.tccurl=680,e.tcedilla=355,e.tcheharabic=1670,e.tchehfinalarabic=64379,e.tchehinitialarabic=64380,e.tchehmedialarabic=64381,e.tcircle=9443,e.tcircumflexbelow=7793,e.tcommaaccent=355,e.tdieresis=7831,e.tdotaccent=7787,e.tdotbelow=7789,e.tecyrillic=1090,e.tedescendercyrillic=1197,e.teharabic=1578
e.tehfinalarabic=65174,e.tehhahinitialarabic=64674,e.tehhahisolatedarabic=64524,e.tehinitialarabic=65175,e.tehiragana=12390,e.tehjeeminitialarabic=64673,e.tehjeemisolatedarabic=64523,e.tehmarbutaarabic=1577,e.tehmarbutafinalarabic=65172,e.tehmedialarabic=65176,e.tehmeeminitialarabic=64676,e.tehmeemisolatedarabic=64526,e.tehnoonfinalarabic=64627,e.tekatakana=12486,e.tekatakanahalfwidth=65411,e.telephone=8481,e.telephoneblack=9742,e.telishagedolahebrew=1440,e.telishaqetanahebrew=1449,e.tencircle=9321,e.tenideographicparen=12841,e.tenparen=9341,e.tenperiod=9361,e.tenroman=8569,e.tesh=679,e.tet=1496,e.tetdagesh=64312,e.tetdageshhebrew=64312,e.tethebrew=1496,e.tetsecyrillic=1205,e.tevirhebrew=1435,e.tevirlefthebrew=1435,e.thabengali=2469,e.thadeva=2341,e.thagujarati=2725,e.thagurmukhi=2597,e.thalarabic=1584,e.thalfinalarabic=65196,e.thanthakhatlowleftthai=63640,e.thanthakhatlowrightthai=63639,e.thanthakhatthai=3660,e.thanthakhatupperleftthai=63638,e.theharabic=1579,e.thehfinalarabic=65178,e.thehinitialarabic=65179,e.thehmedialarabic=65180,e.thereexists=8707,e.therefore=8756,e.theta=952,e.theta1=977,e.thetasymbolgreek=977,e.thieuthacirclekorean=12921,e.thieuthaparenkorean=12825,e.thieuthcirclekorean=12907,e.thieuthkorean=12620,e.thieuthparenkorean=12811,e.thirteencircle=9324,e.thirteenparen=9344,e.thirteenperiod=9364,e.thonangmonthothai=3601,e.thook=429,e.thophuthaothai=3602,e.thorn=254,e.thothahanthai=3607,e.thothanthai=3600,e.thothongthai=3608,e.thothungthai=3606,e.thousandcyrillic=1154,e.thousandsseparatorarabic=1644,e.thousandsseparatorpersian=1644,e.three=51,e.threearabic=1635,e.threebengali=2537,e.threecircle=9314,e.threecircleinversesansserif=10124,e.threedeva=2409,e.threeeighths=8540,e.threegujarati=2793,e.threegurmukhi=2665,e.threehackarabic=1635,e.threehangzhou=12323,e.threeideographicparen=12834,e.threeinferior=8323,e.threemonospace=65299,e.threenumeratorbengali=2550,e.threeoldstyle=63283,e.threeparen=9334,e.threeperiod=9354,e.threepersian=1779,e.threequarters=190,e.threequartersemdash=63198,e.threeroman=8562,e.threesuperior=179,e.threethai=3667,e.thzsquare=13204,e.tihiragana=12385,e.tikatakana=12481,e.tikatakanahalfwidth=65409,e.tikeutacirclekorean=12912,e.tikeutaparenkorean=12816,e.tikeutcirclekorean=12898,e.tikeutkorean=12599,e.tikeutparenkorean=12802,e.tilde=732,e.tildebelowcmb=816,e.tildecmb=771,e.tildecomb=771,e.tildedoublecmb=864,e.tildeoperator=8764,e.tildeoverlaycmb=820,e.tildeverticalcmb=830,e.timescircle=8855,e.tipehahebrew=1430,e.tipehalefthebrew=1430,e.tippigurmukhi=2672,e.titlocyrilliccmb=1155,e.tiwnarmenian=1407,e.tlinebelow=7791,e.tmonospace=65364,e.toarmenian=1385,e.tohiragana=12392,e.tokatakana=12488,e.tokatakanahalfwidth=65412,e.tonebarextrahighmod=741,e.tonebarextralowmod=745,e.tonebarhighmod=742,e.tonebarlowmod=744,e.tonebarmidmod=743,e.tonefive=445,e.tonesix=389,e.tonetwo=424,e.tonos=900,e.tonsquare=13095,e.topatakthai=3599,e.tortoiseshellbracketleft=12308,e.tortoiseshellbracketleftsmall=65117,e.tortoiseshellbracketleftvertical=65081,e.tortoiseshellbracketright=12309,e.tortoiseshellbracketrightsmall=65118,e.tortoiseshellbracketrightvertical=65082,e.totaothai=3605,e.tpalatalhook=427,e.tparen=9391,e.trademark=8482,e.trademarksans=63722,e.trademarkserif=63195,e.tretroflexhook=648,e.triagdn=9660,e.triaglf=9668,e.triagrt=9658,e.triagup=9650,e.ts=678,e.tsadi=1510,e.tsadidagesh=64326,e.tsadidageshhebrew=64326,e.tsadihebrew=1510,e.tsecyrillic=1094,e.tsere=1461,e.tsere12=1461,e.tsere1e=1461,e.tsere2b=1461,e.tserehebrew=1461,e.tserenarrowhebrew=1461,e.tserequarterhebrew=1461,e.tserewidehebrew=1461,e.tshecyrillic=1115,e.tsuperior=63219,e.ttabengali=2463,e.ttadeva=2335,e.ttagujarati=2719,e.ttagurmukhi=2591,e.tteharabic=1657,e.ttehfinalarabic=64359,e.ttehinitialarabic=64360,e.ttehmedialarabic=64361,e.tthabengali=2464,e.tthadeva=2336,e.tthagujarati=2720,e.tthagurmukhi=2592,e.tturned=647,e.tuhiragana=12388,e.tukatakana=12484,e.tukatakanahalfwidth=65410,e.tusmallhiragana=12387,e.tusmallkatakana=12483,e.tusmallkatakanahalfwidth=65391,e.twelvecircle=9323,e.twelveparen=9343,e.twelveperiod=9363,e.twelveroman=8571,e.twentycircle=9331,e.twentyhangzhou=21316,e.twentyparen=9351,e.twentyperiod=9371,e.two=50,e.twoarabic=1634,e.twobengali=2536,e.twocircle=9313,e.twocircleinversesansserif=10123,e.twodeva=2408
e.twodotenleader=8229,e.twodotleader=8229,e.twodotleadervertical=65072,e.twogujarati=2792,e.twogurmukhi=2664,e.twohackarabic=1634,e.twohangzhou=12322,e.twoideographicparen=12833,e.twoinferior=8322,e.twomonospace=65298,e.twonumeratorbengali=2549,e.twooldstyle=63282,e.twoparen=9333,e.twoperiod=9353,e.twopersian=1778,e.tworoman=8561,e.twostroke=443,e.twosuperior=178,e.twothai=3666,e.twothirds=8532,e.u=117,e.uacute=250,e.ubar=649,e.ubengali=2441,e.ubopomofo=12584,e.ubreve=365,e.ucaron=468,e.ucircle=9444,e.ucircumflex=251,e.ucircumflexbelow=7799,e.ucyrillic=1091,e.udattadeva=2385,e.udblacute=369,e.udblgrave=533,e.udeva=2313,e.udieresis=252,e.udieresisacute=472,e.udieresisbelow=7795,e.udieresiscaron=474,e.udieresiscyrillic=1265,e.udieresisgrave=476,e.udieresismacron=470,e.udotbelow=7909,e.ugrave=249,e.ugujarati=2697,e.ugurmukhi=2569,e.uhiragana=12358,e.uhookabove=7911,e.uhorn=432,e.uhornacute=7913,e.uhorndotbelow=7921,e.uhorngrave=7915,e.uhornhookabove=7917,e.uhorntilde=7919,e.uhungarumlaut=369,e.uhungarumlautcyrillic=1267,e.uinvertedbreve=535,e.ukatakana=12454,e.ukatakanahalfwidth=65395,e.ukcyrillic=1145,e.ukorean=12636,e.umacron=363,e.umacroncyrillic=1263,e.umacrondieresis=7803,e.umatragurmukhi=2625,e.umonospace=65365,e.underscore=95,e.underscoredbl=8215,e.underscoremonospace=65343,e.underscorevertical=65075,e.underscorewavy=65103,e.union=8746,e.universal=8704,e.uogonek=371,e.uparen=9392,e.upblock=9600,e.upperdothebrew=1476,e.upsilon=965,e.upsilondieresis=971,e.upsilondieresistonos=944,e.upsilonlatin=650,e.upsilontonos=973,e.uptackbelowcmb=797,e.uptackmod=724,e.uragurmukhi=2675,e.uring=367,e.ushortcyrillic=1118,e.usmallhiragana=12357,e.usmallkatakana=12453,e.usmallkatakanahalfwidth=65385,e.ustraightcyrillic=1199,e.ustraightstrokecyrillic=1201,e.utilde=361,e.utildeacute=7801,e.utildebelow=7797,e.uubengali=2442,e.uudeva=2314,e.uugujarati=2698,e.uugurmukhi=2570,e.uumatragurmukhi=2626,e.uuvowelsignbengali=2498,e.uuvowelsigndeva=2370,e.uuvowelsigngujarati=2754,e.uvowelsignbengali=2497,e.uvowelsigndeva=2369,e.uvowelsigngujarati=2753,e.v=118,e.vadeva=2357,e.vagujarati=2741,e.vagurmukhi=2613,e.vakatakana=12535,e.vav=1493,e.vavdagesh=64309,e.vavdagesh65=64309,e.vavdageshhebrew=64309,e.vavhebrew=1493,e.vavholam=64331,e.vavholamhebrew=64331,e.vavvavhebrew=1520,e.vavyodhebrew=1521,e.vcircle=9445,e.vdotbelow=7807,e.vecyrillic=1074,e.veharabic=1700,e.vehfinalarabic=64363,e.vehinitialarabic=64364,e.vehmedialarabic=64365,e.vekatakana=12537,e.venus=9792,e.verticalbar=124,e.verticallineabovecmb=781,e.verticallinebelowcmb=809,e.verticallinelowmod=716,e.verticallinemod=712,e.vewarmenian=1406,e.vhook=651,e.vikatakana=12536,e.viramabengali=2509,e.viramadeva=2381,e.viramagujarati=2765,e.visargabengali=2435,e.visargadeva=2307,e.visargagujarati=2691,e.vmonospace=65366,e.voarmenian=1400,e.voicediterationhiragana=12446,e.voicediterationkatakana=12542,e.voicedmarkkana=12443,e.voicedmarkkanahalfwidth=65438,e.vokatakana=12538,e.vparen=9393,e.vtilde=7805,e.vturned=652,e.vuhiragana=12436,e.vukatakana=12532,e.w=119,e.wacute=7811,e.waekorean=12633,e.wahiragana=12431,e.wakatakana=12527,e.wakatakanahalfwidth=65436,e.wakorean=12632,e.wasmallhiragana=12430,e.wasmallkatakana=12526,e.wattosquare=13143,e.wavedash=12316,e.wavyunderscorevertical=65076,e.wawarabic=1608,e.wawfinalarabic=65262,e.wawhamzaabovearabic=1572,e.wawhamzaabovefinalarabic=65158,e.wbsquare=13277,e.wcircle=9446,e.wcircumflex=373,e.wdieresis=7813,e.wdotaccent=7815,e.wdotbelow=7817,e.wehiragana=12433,e.weierstrass=8472,e.wekatakana=12529,e.wekorean=12638,e.weokorean=12637,e.wgrave=7809,e.whitebullet=9702,e.whitecircle=9675,e.whitecircleinverse=9689,e.whitecornerbracketleft=12302,e.whitecornerbracketleftvertical=65091,e.whitecornerbracketright=12303,e.whitecornerbracketrightvertical=65092,e.whitediamond=9671,e.whitediamondcontainingblacksmalldiamond=9672,e.whitedownpointingsmalltriangle=9663,e.whitedownpointingtriangle=9661,e.whiteleftpointingsmalltriangle=9667,e.whiteleftpointingtriangle=9665,e.whitelenticularbracketleft=12310,e.whitelenticularbracketright=12311,e.whiterightpointingsmalltriangle=9657,e.whiterightpointingtriangle=9655
e.whitesmallsquare=9643,e.whitesmilingface=9786,e.whitesquare=9633,e.whitestar=9734,e.whitetelephone=9743,e.whitetortoiseshellbracketleft=12312,e.whitetortoiseshellbracketright=12313,e.whiteuppointingsmalltriangle=9653,e.whiteuppointingtriangle=9651,e.wihiragana=12432,e.wikatakana=12528,e.wikorean=12639,e.wmonospace=65367,e.wohiragana=12434,e.wokatakana=12530,e.wokatakanahalfwidth=65382,e.won=8361,e.wonmonospace=65510,e.wowaenthai=3623,e.wparen=9394,e.wring=7832,e.wsuperior=695,e.wturned=653,e.wynn=447,e.x=120,e.xabovecmb=829,e.xbopomofo=12562,e.xcircle=9447,e.xdieresis=7821,e.xdotaccent=7819,e.xeharmenian=1389,e.xi=958,e.xmonospace=65368,e.xparen=9395,e.xsuperior=739,e.y=121,e.yaadosquare=13134,e.yabengali=2479,e.yacute=253,e.yadeva=2351,e.yaekorean=12626,e.yagujarati=2735,e.yagurmukhi=2607,e.yahiragana=12420,e.yakatakana=12516,e.yakatakanahalfwidth=65428,e.yakorean=12625,e.yamakkanthai=3662,e.yasmallhiragana=12419,e.yasmallkatakana=12515,e.yasmallkatakanahalfwidth=65388,e.yatcyrillic=1123,e.ycircle=9448,e.ycircumflex=375,e.ydieresis=255,e.ydotaccent=7823,e.ydotbelow=7925,e.yeharabic=1610,e.yehbarreearabic=1746,e.yehbarreefinalarabic=64431,e.yehfinalarabic=65266,e.yehhamzaabovearabic=1574,e.yehhamzaabovefinalarabic=65162,e.yehhamzaaboveinitialarabic=65163,e.yehhamzaabovemedialarabic=65164,e.yehinitialarabic=65267,e.yehmedialarabic=65268,e.yehmeeminitialarabic=64733,e.yehmeemisolatedarabic=64600,e.yehnoonfinalarabic=64660,e.yehthreedotsbelowarabic=1745,e.yekorean=12630,e.yen=165,e.yenmonospace=65509,e.yeokorean=12629,e.yeorinhieuhkorean=12678,e.yerahbenyomohebrew=1450,e.yerahbenyomolefthebrew=1450,e.yericyrillic=1099,e.yerudieresiscyrillic=1273,e.yesieungkorean=12673,e.yesieungpansioskorean=12675,e.yesieungsioskorean=12674,e.yetivhebrew=1434,e.ygrave=7923,e.yhook=436,e.yhookabove=7927,e.yiarmenian=1397,e.yicyrillic=1111,e.yikorean=12642,e.yinyang=9775,e.yiwnarmenian=1410,e.ymonospace=65369,e.yod=1497,e.yoddagesh=64313,e.yoddageshhebrew=64313,e.yodhebrew=1497,e.yodyodhebrew=1522,e.yodyodpatahhebrew=64287,e.yohiragana=12424,e.yoikorean=12681,e.yokatakana=12520,e.yokatakanahalfwidth=65430,e.yokorean=12635,e.yosmallhiragana=12423,e.yosmallkatakana=12519,e.yosmallkatakanahalfwidth=65390,e.yotgreek=1011,e.yoyaekorean=12680,e.yoyakorean=12679,e.yoyakthai=3618,e.yoyingthai=3597,e.yparen=9396,e.ypogegrammeni=890,e.ypogegrammenigreekcmb=837,e.yr=422,e.yring=7833,e.ysuperior=696,e.ytilde=7929,e.yturned=654,e.yuhiragana=12422,e.yuikorean=12684,e.yukatakana=12518,e.yukatakanahalfwidth=65429,e.yukorean=12640,e.yusbigcyrillic=1131,e.yusbigiotifiedcyrillic=1133,e.yuslittlecyrillic=1127,e.yuslittleiotifiedcyrillic=1129,e.yusmallhiragana=12421,e.yusmallkatakana=12517,e.yusmallkatakanahalfwidth=65389,e.yuyekorean=12683,e.yuyeokorean=12682,e.yyabengali=2527,e.yyadeva=2399,e.z=122,e.zaarmenian=1382,e.zacute=378,e.zadeva=2395,e.zagurmukhi=2651,e.zaharabic=1592,e.zahfinalarabic=65222,e.zahinitialarabic=65223,e.zahiragana=12374,e.zahmedialarabic=65224,e.zainarabic=1586,e.zainfinalarabic=65200,e.zakatakana=12470,e.zaqefgadolhebrew=1429,e.zaqefqatanhebrew=1428,e.zarqahebrew=1432,e.zayin=1494,e.zayindagesh=64310,e.zayindageshhebrew=64310,e.zayinhebrew=1494,e.zbopomofo=12567,e.zcaron=382,e.zcircle=9449,e.zcircumflex=7825,e.zcurl=657,e.zdot=380,e.zdotaccent=380,e.zdotbelow=7827,e.zecyrillic=1079,e.zedescendercyrillic=1177,e.zedieresiscyrillic=1247,e.zehiragana=12380,e.zekatakana=12476,e.zero=48,e.zeroarabic=1632,e.zerobengali=2534,e.zerodeva=2406,e.zerogujarati=2790,e.zerogurmukhi=2662,e.zerohackarabic=1632,e.zeroinferior=8320,e.zeromonospace=65296,e.zerooldstyle=63280,e.zeropersian=1776,e.zerosuperior=8304,e.zerothai=3664,e.zerowidthjoiner=65279,e.zerowidthnonjoiner=8204,e.zerowidthspace=8203,e.zeta=950,e.zhbopomofo=12563,e.zhearmenian=1386,e.zhebrevecyrillic=1218,e.zhecyrillic=1078,e.zhedescendercyrillic=1175,e.zhedieresiscyrillic=1245,e.zihiragana=12376,e.zikatakana=12472,e.zinorhebrew=1454,e.zlinebelow=7829,e.zmonospace=65370,e.zohiragana=12382,e.zokatakana=12478,e.zparen=9397
e.zretroflexhook=656,e.zstroke=438,e.zuhiragana=12378,e.zukatakana=12474,e[".notdef"]=0,e.angbracketleftbig=9001,e.angbracketleftBig=9001,e.angbracketleftbigg=9001,e.angbracketleftBigg=9001,e.angbracketrightBig=9002,e.angbracketrightbig=9002,e.angbracketrightBigg=9002,e.angbracketrightbigg=9002,e.arrowhookleft=8618,e.arrowhookright=8617,e.arrowlefttophalf=8636,e.arrowleftbothalf=8637,e.arrownortheast=8599,e.arrownorthwest=8598,e.arrowrighttophalf=8640,e.arrowrightbothalf=8641,e.arrowsoutheast=8600,e.arrowsouthwest=8601,e.backslashbig=8726,e.backslashBig=8726,e.backslashBigg=8726,e.backslashbigg=8726,e.bardbl=8214,e.bracehtipdownleft=65079,e.bracehtipdownright=65079,e.bracehtipupleft=65080,e.bracehtipupright=65080,e.braceleftBig=123,e.braceleftbig=123,e.braceleftbigg=123,e.braceleftBigg=123,e.bracerightBig=125,e.bracerightbig=125,e.bracerightbigg=125,e.bracerightBigg=125,e.bracketleftbig=91,e.bracketleftBig=91,e.bracketleftbigg=91,e.bracketleftBigg=91,e.bracketrightBig=93,e.bracketrightbig=93,e.bracketrightbigg=93,e.bracketrightBigg=93,e.ceilingleftbig=8968,e.ceilingleftBig=8968,e.ceilingleftBigg=8968,e.ceilingleftbigg=8968,e.ceilingrightbig=8969,e.ceilingrightBig=8969,e.ceilingrightbigg=8969,e.ceilingrightBigg=8969,e.circledotdisplay=8857,e.circledottext=8857,e.circlemultiplydisplay=8855,e.circlemultiplytext=8855,e.circleplusdisplay=8853,e.circleplustext=8853,e.contintegraldisplay=8750,e.contintegraltext=8750,e.coproductdisplay=8720,e.coproducttext=8720,e.floorleftBig=8970,e.floorleftbig=8970,e.floorleftbigg=8970,e.floorleftBigg=8970,e.floorrightbig=8971,e.floorrightBig=8971,e.floorrightBigg=8971,e.floorrightbigg=8971,e.hatwide=770,e.hatwider=770,e.hatwidest=770,e.intercal=7488,e.integraldisplay=8747,e.integraltext=8747,e.intersectiondisplay=8898,e.intersectiontext=8898,e.logicalanddisplay=8743,e.logicalandtext=8743,e.logicalordisplay=8744,e.logicalortext=8744,e.parenleftBig=40,e.parenleftbig=40,e.parenleftBigg=40,e.parenleftbigg=40,e.parenrightBig=41,e.parenrightbig=41,e.parenrightBigg=41,e.parenrightbigg=41,e.prime=8242,e.productdisplay=8719,e.producttext=8719,e.radicalbig=8730,e.radicalBig=8730,e.radicalBigg=8730,e.radicalbigg=8730,e.radicalbt=8730,e.radicaltp=8730,e.radicalvertex=8730,e.slashbig=47,e.slashBig=47,e.slashBigg=47,e.slashbigg=47,e.summationdisplay=8721,e.summationtext=8721,e.tildewide=732,e.tildewider=732,e.tildewidest=732,e.uniondisplay=8899,e.unionmultidisplay=8846,e.unionmultitext=8846,e.unionsqdisplay=8852,e.unionsqtext=8852,e.uniontext=8899,e.vextenddouble=8741,e.vextendsingle=8739}),s=i(function(e){e.space=32,e.a1=9985,e.a2=9986,e.a202=9987,e.a3=9988,e.a4=9742,e.a5=9990,e.a119=9991,e.a118=9992,e.a117=9993,e.a11=9755,e.a12=9758,e.a13=9996,e.a14=9997,e.a15=9998,e.a16=9999,e.a105=1e4,e.a17=10001,e.a18=10002,e.a19=10003,e.a20=10004,e.a21=10005,e.a22=10006,e.a23=10007,e.a24=10008,e.a25=10009,e.a26=10010,e.a27=10011,e.a28=10012,e.a6=10013,e.a7=10014,e.a8=10015,e.a9=10016,e.a10=10017,e.a29=10018,e.a30=10019,e.a31=10020,e.a32=10021,e.a33=10022,e.a34=10023,e.a35=9733,e.a36=10025,e.a37=10026,e.a38=10027,e.a39=10028,e.a40=10029,e.a41=10030,e.a42=10031,e.a43=10032,e.a44=10033,e.a45=10034,e.a46=10035,e.a47=10036,e.a48=10037,e.a49=10038,e.a50=10039,e.a51=10040,e.a52=10041,e.a53=10042,e.a54=10043,e.a55=10044,e.a56=10045,e.a57=10046,e.a58=10047,e.a59=10048,e.a60=10049,e.a61=10050,e.a62=10051,e.a63=10052,e.a64=10053,e.a65=10054,e.a66=10055,e.a67=10056,e.a68=10057,e.a69=10058,e.a70=10059,e.a71=9679,e.a72=10061,e.a73=9632,e.a74=10063,e.a203=10064,e.a75=10065,e.a204=10066,e.a76=9650,e.a77=9660,e.a78=9670,e.a79=10070,e.a81=9687,e.a82=10072,e.a83=10073,e.a84=10074,e.a97=10075,e.a98=10076,e.a99=10077,e.a100=10078,e.a101=10081,e.a102=10082,e.a103=10083,e.a104=10084,e.a106=10085,e.a107=10086,e.a108=10087,e.a112=9827,e.a111=9830,e.a110=9829,e.a109=9824,e.a120=9312,e.a121=9313,e.a122=9314,e.a123=9315,e.a124=9316,e.a125=9317,e.a126=9318,e.a127=9319,e.a128=9320,e.a129=9321,e.a130=10102,e.a131=10103,e.a132=10104,e.a133=10105,e.a134=10106,e.a135=10107,e.a136=10108,e.a137=10109,e.a138=10110,e.a139=10111,e.a140=10112,e.a141=10113,e.a142=10114,e.a143=10115,e.a144=10116,e.a145=10117,e.a146=10118,e.a147=10119,e.a148=10120,e.a149=10121,e.a150=10122,e.a151=10123,e.a152=10124,e.a153=10125,e.a154=10126,e.a155=10127,e.a156=10128,e.a157=10129,e.a158=10130,e.a159=10131,e.a160=10132,e.a161=8594,e.a163=8596,e.a164=8597,e.a196=10136,e.a165=10137,e.a192=10138,e.a166=10139,e.a167=10140,e.a168=10141,e.a169=10142,e.a170=10143,e.a171=10144,e.a172=10145,e.a173=10146,e.a162=10147,e.a174=10148,e.a175=10149,e.a176=10150,e.a177=10151,e.a178=10152,e.a179=10153,e.a193=10154,e.a180=10155,e.a199=10156,e.a181=10157,e.a200=10158,e.a182=10159,e.a201=10161,e.a183=10162,e.a184=10163,e.a197=10164,e.a185=10165,e.a194=10166,e.a198=10167,e.a186=10168,e.a195=10169,e.a187=10170,e.a188=10171,e.a189=10172,e.a190=10173,e.a191=10174,e.a89=10088,e.a90=10089,e.a93=10090,e.a94=10091,e.a91=10092,e.a92=10093,e.a205=10094,e.a85=10095,e.a206=10096,e.a86=10097,e.a87=10098,e.a88=10099
e.a95=10100,e.a96=10101,e[".notdef"]=0})
t.getGlyphsUnicode=n,t.getDingbatsGlyphsUnicode=s},function(e,t,a){"use strict"
function r(e){i=e}var i,n=a(0),s=a(1),o=a(33),c=n.UNSUPPORTED_FEATURES,l=n.InvalidPDFException,h=n.MessageHandler,u=n.MissingPDFException,f=n.UnexpectedResponseException,d=n.PasswordException,g=n.UnknownErrorException,p=n.XRefParseException,m=n.arrayByteLength,b=n.arraysToBytes,v=n.assert,y=n.createPromiseCapability,k=n.info,w=n.warn,x=n.setVerbosityLevel,C=n.isNodeJS,S=s.Ref,A=o.LocalPdfManager,I=o.NetworkPdfManager,B=function(){function e(e){this.name=e,this.terminated=!1,this._capability=y()}return e.prototype={get finished(){return this._capability.promise},finish:function(){this._capability.resolve()},terminate:function(){this.terminated=!0},ensureNotTerminated:function(){if(this.terminated)throw new Error("Worker task was terminated")}},e}(),R=function(){function e(e,t){this._queuedChunks=[]
var a=e.initialData
a&&a.length>0&&this._queuedChunks.push(a),this._msgHandler=t,this._isRangeSupported=!e.disableRange,this._isStreamingSupported=!e.disableStream,this._contentLength=e.length,this._fullRequestReader=null,this._rangeReaders=[],t.on("OnDataRange",this._onReceiveData.bind(this)),t.on("OnDataProgress",this._onProgress.bind(this))}function t(e,t){this._stream=e,this._done=!1,this._queuedChunks=t||[],this._requests=[],this._headersReady=Promise.resolve(),e._fullRequestReader=this,this.onProgress=null}function a(e,t,a){this._stream=e,this._begin=t,this._end=a,this._queuedChunk=null,this._requests=[],this._done=!1,this.onProgress=null}return e.prototype={_onReceiveData:function(e){if(void 0===e.begin)this._fullRequestReader?this._fullRequestReader._enqueue(e.chunk):this._queuedChunks.push(e.chunk)
else{var t=this._rangeReaders.some(function(t){return t._begin===e.begin&&(t._enqueue(e.chunk),!0)})
v(t)}},_onProgress:function(e){if(this._rangeReaders.length>0){var t=this._rangeReaders[0]
t.onProgress&&t.onProgress({loaded:e.loaded})}},_removeRangeReader:function(e){var t=this._rangeReaders.indexOf(e)
t>=0&&this._rangeReaders.splice(t,1)},getFullReader:function(){v(!this._fullRequestReader)
var e=this._queuedChunks
return this._queuedChunks=null,new t(this,e)},getRangeReader:function(e,t){var r=new a(this,e,t)
return this._msgHandler.send("RequestDataRange",{begin:e,end:t}),this._rangeReaders.push(r),r},cancelAllRequests:function(e){this._fullRequestReader&&this._fullRequestReader.cancel(e),this._rangeReaders.slice(0).forEach(function(t){t.cancel(e)})}},t.prototype={_enqueue:function(e){if(!this._done){if(this._requests.length>0){return void this._requests.shift().resolve({value:e,done:!1})}this._queuedChunks.push(e)}},get headersReady(){return this._headersReady},get isRangeSupported(){return this._stream._isRangeSupported},get isStreamingSupported(){return this._stream._isStreamingSupported},get contentLength(){return this._stream._contentLength},read:function(){if(this._queuedChunks.length>0){var e=this._queuedChunks.shift()
return Promise.resolve({value:e,done:!1})}if(this._done)return Promise.resolve({value:void 0,done:!0})
var t=y()
return this._requests.push(t),t.promise},cancel:function(e){this._done=!0,this._requests.forEach(function(e){e.resolve({value:void 0,done:!0})}),this._requests=[]}},a.prototype={_enqueue:function(e){if(!this._done){if(0===this._requests.length)this._queuedChunk=e
else{this._requests.shift().resolve({value:e,done:!1}),this._requests.forEach(function(e){e.resolve({value:void 0,done:!0})}),this._requests=[]}this._done=!0,this._stream._removeRangeReader(this)}},get isStreamingSupported(){return!1},read:function(){if(this._queuedChunk)return Promise.resolve({value:this._queuedChunk,done:!1})
if(this._done)return Promise.resolve({value:void 0,done:!0})
var e=y()
return this._requests.push(e),e.promise},cancel:function(e){this._done=!0,this._requests.forEach(function(e){e.resolve({value:void 0,done:!0})}),this._requests=[],this._stream._removeRangeReader(this)}},e}(),T={setup:function(e,t){var a=!1
e.on("test",function(t){if(!a){if(a=!0,!(t instanceof Uint8Array))return void e.send("test","main",!1)
var r=255===t[0]
e.postMessageTransfers=r
var i=new XMLHttpRequest,n="response"in i
try{i.responseType}catch(e){n=!1}if(!n)return void e.send("test",!1)
e.send("test",{supportTypedArray:!0,supportTransfers:r})}}),e.on("configure",function(e){x(e.verbosity)}),e.on("GetDocRequest",function(e){return T.createDocumentHandler(e,t)})},createDocumentHandler:function(e,t){function a(){if(T)throw new Error("Worker was terminated")}function r(e){P.push(e)}function n(e){e.finish()
var t=P.indexOf(e)
P.splice(t,1)}function s(e){var t=y(),a=function(){var e=C.ensureDoc("numPages"),a=C.ensureDoc("fingerprint"),i=C.ensureXRef("encrypt")
Promise.all([e,a,i]).then(function(e){var a={numPages:e[0],fingerprint:e[1],encrypted:!!e[2]}
t.resolve(a)},r)},r=function(e){t.reject(e)}
return C.ensureDoc("checkHeader",[]).then(function(){C.ensureDoc("parseStartXRef",[]).then(function(){C.ensureDoc("parse",[e]).then(a,r)},r)},r),t.promise}function o(e,t){var r,n=y(),s=e.source
if(s.data){try{r=new A(M,s.data,s.password,t,E),n.resolve(r)}catch(e){n.reject(e)}return n.promise}var o
try{s.chunkedViewerLoading?o=new R(s,D):(v(i,"pdfjs/core/network module is not loaded"),o=new i(e))}catch(e){return n.reject(e),n.promise}var c=o.getFullReader()
c.headersReady.then(function(){if(c.isStreamingSupported&&c.isRangeSupported||(c.onProgress=function(e){D.send("DocProgress",{loaded:e.loaded,total:e.total})}),c.isRangeSupported){var e=s.disableAutoFetch||c.isStreamingSupported
r=new I(M,o,{msgHandler:D,url:s.url,password:s.password,length:c.contentLength,disableAutoFetch:e,rangeChunkSize:s.rangeChunkSize},t,E),n.resolve(r),O=null}}).catch(function(e){n.reject(e),O=null})
var l=[],h=0,u=function(){var e=b(l)
s.length&&e.length!==s.length&&w("reported HTTP length is different from actual")
try{r=new A(M,e,s.password,t,E),n.resolve(r)}catch(e){n.reject(e)}l=[]}
return new Promise(function(e,t){var i=function(e){try{if(a(),e.done)return r||u(),void(O=null)
var n=e.value
h+=m(n),c.isStreamingSupported||D.send("DocProgress",{loaded:h,total:Math.max(h,c.contentLength||0)}),r?r.sendProgressiveData(n):l.push(n),c.read().then(i,t)}catch(e){t(e)}}
c.read().then(i,t)}).catch(function(e){n.reject(e),O=null}),O=function(){o.cancelAllRequests("abort")},n.promise}function x(e){function t(e){a(),D.send("GetDoc",{pdfInfo:e})}function i(e){if(e instanceof d){var t=new B("PasswordException: response "+e.code)
r(t),D.sendWithPromise("PasswordRequest",e).then(function(e){n(t),C.updatePassword(e.password),c()}).catch(function(e){n(t),D.send("PasswordException",e)}.bind(null,e))}else e instanceof l?D.send("InvalidPDF",e):e instanceof u?D.send("MissingPDF",e):e instanceof f?D.send("UnexpectedResponse",e):D.send("UnknownError",new g(e.message,e.toString()))}function c(){a(),s(!1).then(t,function(e){if(a(),!(e instanceof p))return void i(e)
C.requestLoadedStream(),C.onLoadedStream().then(function(){a(),s(!0).then(t,i)})},i)}a(),o(e,{forceDataSchema:e.disableCreateObjectURL,maxImageSize:void 0===e.maxImageSize?-1:e.maxImageSize,disableFontFace:e.disableFontFace,disableNativeImageDecoder:e.disableNativeImageDecoder}).then(function(e){if(T)throw e.terminate(),new Error("Worker was terminated")
C=e,D.send("PDFManagerReady",null),C.onLoadedStream().then(function(e){D.send("DataLoaded",{length:e.bytes.byteLength})})}).then(c,i)}var C,T=!1,O=null,P=[],M=e.docId,E=e.docBaseUrl,L=e.docId+"_worker",D=new h(L,M,t)
return D.postMessageTransfers=e.postMessageTransfers,D.on("GetPage",function(e){return C.getPage(e.pageIndex).then(function(e){var t=C.ensure(e,"rotate"),a=C.ensure(e,"ref"),r=C.ensure(e,"userUnit"),i=C.ensure(e,"view")
return Promise.all([t,a,r,i]).then(function(e){return{rotate:e[0],ref:e[1],userUnit:e[2],view:e[3]}})})}),D.on("GetPageIndex",function(e){var t=new S(e.ref.num,e.ref.gen)
return C.pdfDocument.catalog.getPageIndex(t)}),D.on("GetDestinations",function(e){return C.ensureCatalog("destinations")}),D.on("GetDestination",function(e){return C.ensureCatalog("getDestination",[e.id])}),D.on("GetPageLabels",function(e){return C.ensureCatalog("pageLabels")}),D.on("GetAttachments",function(e){return C.ensureCatalog("attachments")}),D.on("GetJavaScript",function(e){return C.ensureCatalog("javaScript")}),D.on("GetOutline",function(e){return C.ensureCatalog("documentOutline")}),D.on("GetMetadata",function(e){return Promise.all([C.ensureDoc("documentInfo"),C.ensureCatalog("metadata")])}),D.on("GetData",function(e){return C.requestLoadedStream(),C.onLoadedStream().then(function(e){return e.bytes})}),D.on("GetStats",function(e){return C.pdfDocument.xref.stats}),D.on("GetAnnotations",function(e){return C.getPage(e.pageIndex).then(function(t){return C.ensure(t,"getAnnotationsData",[e.intent])})}),D.on("RenderPageRequest",function(e){var t=e.pageIndex
C.getPage(t).then(function(a){var i=new B("RenderPageRequest: page "+t)
r(i)
var s=t+1,o=Date.now()
a.getOperatorList(D,i,e.intent,e.renderInteractiveForms).then(function(e){n(i),k("page="+s+" - getOperatorList: time="+(Date.now()-o)+"ms, len="+e.totalLength)},function(t){if(n(i),!i.terminated){D.send("UnsupportedFeature",{featureId:c.unknown})
var a,r="worker.js: while trying to getPage() and getOperatorList()"
a="string"==typeof t?{message:t,stack:r}:"object"==typeof t?{message:t.message||t.toString(),stack:t.stack||r}:{message:"Unknown exception type: "+typeof t,stack:r},D.send("PageError",{pageNum:s,error:a,intent:e.intent})}})})},this),D.on("GetTextContent",function(e){var t=e.pageIndex,a=e.normalizeWhitespace,i=e.combineTextItems
return C.getPage(t).then(function(e){var s=new B("GetTextContent: page "+t)
r(s)
var o=t+1,c=Date.now()
return e.extractTextContent(D,s,a,i).then(function(e){return n(s),k("text indexing: page="+o+" - time="+(Date.now()-c)+"ms"),e},function(e){if(n(s),!s.terminated)throw e})})}),D.on("Cleanup",function(e){return C.cleanup()}),D.on("Terminate",function(e){T=!0,C&&(C.terminate(),C=null),O&&O()
var t=[]
return P.forEach(function(e){t.push(e.finished),e.terminate()}),Promise.all(t).then(function(){D.destroy(),D=null})}),D.on("Ready",function(t){x(e),e=null}),L}}
"undefined"!=typeof window||C()||function(){var e=new h("worker","main",self)
T.setup(e,self),e.send("ready",null)}(),t.setPDFNetworkStreamClass=r,t.WorkerTask=B,t.WorkerMessageHandler=T},function(e,t,a){"use strict"
var r
r=function(){return this}()
try{r=r||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(r=window)}e.exports=r},function(e,t,a){"use strict"
var r=function(){function e(e,t,a){this.data=e,this.bp=t,this.dataEnd=a,this.chigh=e[t],this.clow=0,this.byteIn(),this.chigh=this.chigh<<7&65535|this.clow>>9&127,this.clow=this.clow<<7&65535,this.ct-=7,this.a=32768}var t=[{qe:22017,nmps:1,nlps:1,switchFlag:1},{qe:13313,nmps:2,nlps:6,switchFlag:0},{qe:6145,nmps:3,nlps:9,switchFlag:0},{qe:2753,nmps:4,nlps:12,switchFlag:0},{qe:1313,nmps:5,nlps:29,switchFlag:0},{qe:545,nmps:38,nlps:33,switchFlag:0},{qe:22017,nmps:7,nlps:6,switchFlag:1},{qe:21505,nmps:8,nlps:14,switchFlag:0},{qe:18433,nmps:9,nlps:14,switchFlag:0},{qe:14337,nmps:10,nlps:14,switchFlag:0},{qe:12289,nmps:11,nlps:17,switchFlag:0},{qe:9217,nmps:12,nlps:18,switchFlag:0},{qe:7169,nmps:13,nlps:20,switchFlag:0},{qe:5633,nmps:29,nlps:21,switchFlag:0},{qe:22017,nmps:15,nlps:14,switchFlag:1},{qe:21505,nmps:16,nlps:14,switchFlag:0},{qe:20737,nmps:17,nlps:15,switchFlag:0},{qe:18433,nmps:18,nlps:16,switchFlag:0},{qe:14337,nmps:19,nlps:17,switchFlag:0},{qe:13313,nmps:20,nlps:18,switchFlag:0},{qe:12289,nmps:21,nlps:19,switchFlag:0},{qe:10241,nmps:22,nlps:19,switchFlag:0},{qe:9217,nmps:23,nlps:20,switchFlag:0},{qe:8705,nmps:24,nlps:21,switchFlag:0},{qe:7169,nmps:25,nlps:22,switchFlag:0},{qe:6145,nmps:26,nlps:23,switchFlag:0},{qe:5633,nmps:27,nlps:24,switchFlag:0},{qe:5121,nmps:28,nlps:25,switchFlag:0},{qe:4609,nmps:29,nlps:26,switchFlag:0},{qe:4353,nmps:30,nlps:27,switchFlag:0},{qe:2753,nmps:31,nlps:28,switchFlag:0},{qe:2497,nmps:32,nlps:29,switchFlag:0},{qe:2209,nmps:33,nlps:30,switchFlag:0},{qe:1313,nmps:34,nlps:31,switchFlag:0},{qe:1089,nmps:35,nlps:32,switchFlag:0},{qe:673,nmps:36,nlps:33,switchFlag:0},{qe:545,nmps:37,nlps:34,switchFlag:0},{qe:321,nmps:38,nlps:35,switchFlag:0},{qe:273,nmps:39,nlps:36,switchFlag:0},{qe:133,nmps:40,nlps:37,switchFlag:0},{qe:73,nmps:41,nlps:38,switchFlag:0},{qe:37,nmps:42,nlps:39,switchFlag:0},{qe:21,nmps:43,nlps:40,switchFlag:0},{qe:9,nmps:44,nlps:41,switchFlag:0},{qe:5,nmps:45,nlps:42,switchFlag:0},{qe:1,nmps:45,nlps:43,switchFlag:0},{qe:22017,nmps:46,nlps:46,switchFlag:0}]
return e.prototype={byteIn:function(){var e=this.data,t=this.bp
if(255===e[t]){e[t+1]>143?(this.clow+=65280,this.ct=8):(t++,this.clow+=e[t]<<9,this.ct=7,this.bp=t)}else t++,this.clow+=t<this.dataEnd?e[t]<<8:65280,this.ct=8,this.bp=t
this.clow>65535&&(this.chigh+=this.clow>>16,this.clow&=65535)},readBit:function(e,a){var r,i=e[a]>>1,n=1&e[a],s=t[i],o=s.qe,c=this.a-o
if(this.chigh<o)c<o?(c=o,r=n,i=s.nmps):(c=o,r=1^n,1===s.switchFlag&&(n=r),i=s.nlps)
else{if(this.chigh-=o,0!=(32768&c))return this.a=c,n
c<o?(r=1^n,1===s.switchFlag&&(n=r),i=s.nlps):(r=n,i=s.nmps)}do{0===this.ct&&this.byteIn(),c<<=1,this.chigh=this.chigh<<1&65535|this.clow>>15&1,this.clow=this.clow<<1&65535,this.ct--}while(0==(32768&c))
return this.a=c,e[a]=i<<1|n,r}},e}()
t.ArithmeticDecoder=r},function(e,t,a){"use strict"
var r=a(0),i=a(22),n=a(4),s=r.error,o=r.info,c=r.bytesToString,l=r.warn,h=r.isArray,u=r.Util,f=r.stringToBytes,d=r.assert,g=i.ISOAdobeCharset,p=i.ExpertCharset,m=i.ExpertSubsetCharset,b=n.StandardEncoding,v=n.ExpertEncoding,y=[".notdef","space","exclam","quotedbl","numbersign","dollar","percent","ampersand","quoteright","parenleft","parenright","asterisk","plus","comma","hyphen","period","slash","zero","one","two","three","four","five","six","seven","eight","nine","colon","semicolon","less","equal","greater","question","at","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","bracketleft","backslash","bracketright","asciicircum","underscore","quoteleft","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","braceleft","bar","braceright","asciitilde","exclamdown","cent","sterling","fraction","yen","florin","section","currency","quotesingle","quotedblleft","guillemotleft","guilsinglleft","guilsinglright","fi","fl","endash","dagger","daggerdbl","periodcentered","paragraph","bullet","quotesinglbase","quotedblbase","quotedblright","guillemotright","ellipsis","perthousand","questiondown","grave","acute","circumflex","tilde","macron","breve","dotaccent","dieresis","ring","cedilla","hungarumlaut","ogonek","caron","emdash","AE","ordfeminine","Lslash","Oslash","OE","ordmasculine","ae","dotlessi","lslash","oslash","oe","germandbls","onesuperior","logicalnot","mu","trademark","Eth","onehalf","plusminus","Thorn","onequarter","divide","brokenbar","degree","thorn","threequarters","twosuperior","registered","minus","eth","multiply","threesuperior","copyright","Aacute","Acircumflex","Adieresis","Agrave","Aring","Atilde","Ccedilla","Eacute","Ecircumflex","Edieresis","Egrave","Iacute","Icircumflex","Idieresis","Igrave","Ntilde","Oacute","Ocircumflex","Odieresis","Ograve","Otilde","Scaron","Uacute","Ucircumflex","Udieresis","Ugrave","Yacute","Ydieresis","Zcaron","aacute","acircumflex","adieresis","agrave","aring","atilde","ccedilla","eacute","ecircumflex","edieresis","egrave","iacute","icircumflex","idieresis","igrave","ntilde","oacute","ocircumflex","odieresis","ograve","otilde","scaron","uacute","ucircumflex","udieresis","ugrave","yacute","ydieresis","zcaron","exclamsmall","Hungarumlautsmall","dollaroldstyle","dollarsuperior","ampersandsmall","Acutesmall","parenleftsuperior","parenrightsuperior","twodotenleader","onedotenleader","zerooldstyle","oneoldstyle","twooldstyle","threeoldstyle","fouroldstyle","fiveoldstyle","sixoldstyle","sevenoldstyle","eightoldstyle","nineoldstyle","commasuperior","threequartersemdash","periodsuperior","questionsmall","asuperior","bsuperior","centsuperior","dsuperior","esuperior","isuperior","lsuperior","msuperior","nsuperior","osuperior","rsuperior","ssuperior","tsuperior","ff","ffi","ffl","parenleftinferior","parenrightinferior","Circumflexsmall","hyphensuperior","Gravesmall","Asmall","Bsmall","Csmall","Dsmall","Esmall","Fsmall","Gsmall","Hsmall","Ismall","Jsmall","Ksmall","Lsmall","Msmall","Nsmall","Osmall","Psmall","Qsmall","Rsmall","Ssmall","Tsmall","Usmall","Vsmall","Wsmall","Xsmall","Ysmall","Zsmall","colonmonetary","onefitted","rupiah","Tildesmall","exclamdownsmall","centoldstyle","Lslashsmall","Scaronsmall","Zcaronsmall","Dieresissmall","Brevesmall","Caronsmall","Dotaccentsmall","Macronsmall","figuredash","hypheninferior","Ogoneksmall","Ringsmall","Cedillasmall","questiondownsmall","oneeighth","threeeighths","fiveeighths","seveneighths","onethird","twothirds","zerosuperior","foursuperior","fivesuperior","sixsuperior","sevensuperior","eightsuperior","ninesuperior","zeroinferior","oneinferior","twoinferior","threeinferior","fourinferior","fiveinferior","sixinferior","seveninferior","eightinferior","nineinferior","centinferior","dollarinferior","periodinferior","commainferior","Agravesmall","Aacutesmall","Acircumflexsmall","Atildesmall","Adieresissmall","Aringsmall","AEsmall","Ccedillasmall","Egravesmall","Eacutesmall","Ecircumflexsmall","Edieresissmall","Igravesmall","Iacutesmall","Icircumflexsmall","Idieresissmall","Ethsmall","Ntildesmall","Ogravesmall","Oacutesmall","Ocircumflexsmall","Otildesmall","Odieresissmall","OEsmall","Oslashsmall","Ugravesmall","Uacutesmall","Ucircumflexsmall","Udieresissmall","Yacutesmall","Thornsmall","Ydieresissmall","001.000","001.001","001.002","001.003","Black","Bold","Book","Light","Medium","Regular","Roman","Semibold"],k=function(){function e(e,t,a){this.bytes=e.getBytes(),this.properties=t,this.seacAnalysisEnabled=!!a}var t=[null,{id:"hstem",min:2,stackClearing:!0,stem:!0},null,{id:"vstem",min:2,stackClearing:!0,stem:!0},{id:"vmoveto",min:1,stackClearing:!0},{id:"rlineto",min:2,resetStack:!0},{id:"hlineto",min:1,resetStack:!0},{id:"vlineto",min:1,resetStack:!0},{id:"rrcurveto",min:6,resetStack:!0},null,{id:"callsubr",min:1,undefStack:!0},{id:"return",min:0,undefStack:!0},null,null,{id:"endchar",min:0,stackClearing:!0},null,null,null,{id:"hstemhm",min:2,stackClearing:!0,stem:!0},{id:"hintmask",min:0,stackClearing:!0},{id:"cntrmask",min:0,stackClearing:!0},{id:"rmoveto",min:2,stackClearing:!0},{id:"hmoveto",min:1,stackClearing:!0},{id:"vstemhm",min:2,stackClearing:!0,stem:!0},{id:"rcurveline",min:8,resetStack:!0},{id:"rlinecurve",min:8,resetStack:!0},{id:"vvcurveto",min:4,resetStack:!0},{id:"hhcurveto",min:4,resetStack:!0},null,{id:"callgsubr",min:1,undefStack:!0},{id:"vhcurveto",min:4,resetStack:!0},{id:"hvcurveto",min:4,resetStack:!0}],a=[null,null,null,{id:"and",min:2,stackDelta:-1},{id:"or",min:2,stackDelta:-1},{id:"not",min:1,stackDelta:0},null,null,null,{id:"abs",min:1,stackDelta:0},{id:"add",min:2,stackDelta:-1,stackFn:function(e,t){e[t-2]=e[t-2]+e[t-1]}},{id:"sub",min:2,stackDelta:-1,stackFn:function(e,t){e[t-2]=e[t-2]-e[t-1]}},{id:"div",min:2,stackDelta:-1,stackFn:function(e,t){e[t-2]=e[t-2]/e[t-1]}},null,{id:"neg",min:1,stackDelta:0,stackFn:function(e,t){e[t-1]=-e[t-1]}},{id:"eq",min:2,stackDelta:-1},null,null,{id:"drop",min:1,stackDelta:-1},null,{id:"put",min:2,stackDelta:-2},{id:"get",min:1,stackDelta:0},{id:"ifelse",min:4,stackDelta:-3},{id:"random",min:0,stackDelta:1},{id:"mul",min:2,stackDelta:-1,stackFn:function(e,t){e[t-2]=e[t-2]*e[t-1]}},null,{id:"sqrt",min:1,stackDelta:0},{id:"dup",min:1,stackDelta:1},{id:"exch",min:2,stackDelta:0},{id:"index",min:2,stackDelta:0},{id:"roll",min:3,stackDelta:-2},null,null,null,{id:"hflex",min:7,resetStack:!0},{id:"flex",min:13,resetStack:!0},{id:"hflex1",min:9,resetStack:!0},{id:"flex1",min:11,resetStack:!0}]
return e.prototype={parse:function(){var e=this.properties,t=new w
this.cff=t
var a=this.parseHeader(),r=this.parseIndex(a.endPos),i=this.parseIndex(r.endPos),n=this.parseIndex(i.endPos),s=this.parseIndex(n.endPos),o=this.parseDict(i.obj.get(0)),c=this.createDict(I,o,t.strings)
t.header=a.obj,t.names=this.parseNameIndex(r.obj),t.strings=this.parseStringIndex(n.obj),t.topDict=c,t.globalSubrIndex=s.obj,this.parsePrivateDict(t.topDict),t.isCIDFont=c.hasName("ROS")
var l=c.getByName("CharStrings"),h=this.parseIndex(l).obj,u=c.getByName("FontMatrix")
u&&(e.fontMatrix=u)
var f=c.getByName("FontBBox")
f&&(e.ascent=Math.max(f[3],f[1]),e.descent=Math.min(f[1],f[3]),e.ascentScaled=!0)
var d,g
if(t.isCIDFont){for(var p=this.parseIndex(c.getByName("FDArray")).obj,m=0,b=p.count;m<b;++m){var v=p.get(m),y=this.createDict(I,this.parseDict(v),t.strings)
this.parsePrivateDict(y),t.fdArray.push(y)}g=null,d=this.parseCharsets(c.getByName("charset"),h.count,t.strings,!0),t.fdSelect=this.parseFDSelect(c.getByName("FDSelect"),h.count)}else d=this.parseCharsets(c.getByName("charset"),h.count,t.strings,!1),g=this.parseEncoding(c.getByName("Encoding"),e,t.strings,d.charset)
t.charset=d,t.encoding=g
var k=this.parseCharStrings(h,c.privateDict.subrsIndex,s.obj,t.fdSelect,t.fdArray)
return t.charStrings=k.charStrings,t.seacs=k.seacs,t.widths=k.widths,t},parseHeader:function(){for(var e=this.bytes,t=e.length,a=0;a<t&&1!==e[a];)++a
a>=t?s("Invalid CFF header"):0!==a&&(o("cff data is shifted"),e=e.subarray(a),this.bytes=e)
var r=e[0],i=e[1],n=e[2],c=e[3]
return{obj:new x(r,i,n,c),endPos:n}},parseDict:function(e){function t(){for(var t="",r=["0","1","2","3","4","5","6","7","8","9",".","E","E-",null,"-"],i=e.length;a<i;){var n=e[a++],s=n>>4,o=15&n
if(15===s)break
if(t+=r[s],15===o)break
t+=r[o]}return parseFloat(t)}var a=0,r=[],i=[]
a=0
for(var n=e.length;a<n;){var s=e[a]
s<=21?(12===s&&(s=s<<8|e[++a]),i.push([s,r]),r=[],++a):r.push(function(){var r=e[a++]
return 30===r?t():28===r?(r=e[a++],r=(r<<24|e[a++]<<16)>>16):29===r?(r=e[a++],r=r<<8|e[a++],r=r<<8|e[a++],r=r<<8|e[a++]):r>=32&&r<=246?r-139:r>=247&&r<=250?256*(r-247)+e[a++]+108:r>=251&&r<=254?-256*(r-251)-e[a++]-108:(l('CFFParser_parseDict: "'+r+'" is a reserved command.'),0/0)}())}return i},parseIndex:function(e){var t,a,r=new S,i=this.bytes,n=i[e++]<<8|i[e++],s=[],o=e
if(0!==n){var c=i[e++],l=e+(n+1)*c-1
for(t=0,a=n+1;t<a;++t){for(var h=0,u=0;u<c;++u)h<<=8,h+=i[e++]
s.push(l+h)}o=s[n]}for(t=0,a=s.length-1;t<a;++t){var f=s[t],d=s[t+1]
r.add(i.subarray(f,d))}return{obj:r,endPos:o}},parseNameIndex:function(e){for(var t=[],a=0,r=e.count;a<r;++a){for(var i=e.get(a),n=Math.min(i.length,127),s=[],o=0;o<n;++o){var l=i[o]
0!==o||0!==l?s[o]=l<33||l>126||91===l||93===l||40===l||41===l||123===l||125===l||60===l||62===l||47===l||37===l||35===l?95:l:s[o]=l}t.push(c(s))}return t},parseStringIndex:function(e){for(var t=new C,a=0,r=e.count;a<r;++a){var i=e.get(a)
t.add(c(i))}return t},createDict:function(e,t,a){for(var r=new e(a),i=0,n=t.length;i<n;++i){var s=t[i],o=s[0],c=s[1]
r.setByKey(o,c)}return r},parseCharString:function(e,r,i,n){if(!r||e.callDepth>10)return!1
for(var s=e.stackSize,o=e.stack,c=r.length,h=0;h<c;){var u=r[h++],f=null
if(12===u){var d=r[h++]
0===d?(r[h-2]=139,r[h-1]=22,s=0):f=a[d]}else if(28===u)o[s]=(r[h]<<24|r[h+1]<<16)>>16,h+=2,s++
else if(14===u){if(s>=4&&(s-=4,this.seacAnalysisEnabled))return e.seac=o.slice(s,s+4),!1
f=t[u]}else if(u>=32&&u<=246)o[s]=u-139,s++
else if(u>=247&&u<=254)o[s]=u<251?(u-247<<8)+r[h]+108:-(u-251<<8)-r[h]-108,h++,s++
else if(255===u)o[s]=(r[h]<<24|r[h+1]<<16|r[h+2]<<8|r[h+3])/65536,h+=4,s++
else if(19===u||20===u)e.hints+=s>>1,h+=e.hints+7>>3,s%=2,f=t[u]
else{if(10===u||29===u){var g
if(!(g=10===u?i:n))return f=t[u],l("Missing subrsIndex for "+f.id),!1
var p=32768
g.count<1240?p=107:g.count<33900&&(p=1131)
var m=o[--s]+p
if(m<0||m>=g.count||isNaN(m))return f=t[u],l("Out of bounds subrIndex for "+f.id),!1
e.stackSize=s,e.callDepth++
var b=this.parseCharString(e,g.get(m),i,n)
if(!b)return!1
e.callDepth--,s=e.stackSize
continue}if(11===u)return e.stackSize=s,!0
f=t[u]}if(f){if(f.stem&&(e.hints+=s>>1),"min"in f&&!e.undefStack&&s<f.min)return l("Not enough parameters for "+f.id+"; actual: "+s+", expected: "+f.min),!1
e.firstStackClearing&&f.stackClearing&&(e.firstStackClearing=!1,s-=f.min,s>=2&&f.stem?s%=2:s>1&&l("Found too many parameters for stack-clearing command"),s>0&&o[s-1]>=0&&(e.width=o[s-1])),"stackDelta"in f?("stackFn"in f&&f.stackFn(o,s),s+=f.stackDelta):f.stackClearing?s=0:f.resetStack?(s=0,e.undefStack=!1):f.undefStack&&(s=0,e.undefStack=!0,e.firstStackClearing=!1)}}return e.stackSize=s,!0},parseCharStrings:function(e,t,a,r,i){for(var n=[],s=[],o=e.count,c=0;c<o;c++){var h=e.get(c),u={callDepth:0,stackSize:0,stack:[],undefStack:!0,hints:0,firstStackClearing:!0,seac:null,width:null},f=!0,d=null
if(r&&i.length){var g=r.getFDIndex(c)
g===-1&&(l("Glyph index is not in fd select."),f=!1),g>=i.length&&(l("Invalid fd index for glyph index."),f=!1),f&&(d=i[g].privateDict.subrsIndex)}else t&&(d=t)
f&&(f=this.parseCharString(u,h,d,a)),null!==u.width&&(s[c]=u.width),null!==u.seac&&(n[c]=u.seac),f||e.set(c,new Uint8Array([14]))}return{charStrings:e,seacs:n,widths:s}},emptyPrivateDictionary:function(e){var t=this.createDict(B,[],e.strings)
e.setByKey(18,[0,0]),e.privateDict=t},parsePrivateDict:function(e){if(!e.hasName("Private"))return void this.emptyPrivateDictionary(e)
var t=e.getByName("Private")
if(!h(t)||2!==t.length)return void e.removeByName("Private")
var a=t[0],r=t[1]
if(0===a||r>=this.bytes.length)return void this.emptyPrivateDictionary(e)
var i=r+a,n=this.bytes.subarray(r,i),s=this.parseDict(n),o=this.createDict(B,s,e.strings)
if(e.privateDict=o,o.getByName("Subrs")){var c=o.getByName("Subrs"),l=r+c
if(0===c||l>=this.bytes.length)return void this.emptyPrivateDictionary(e)
var u=this.parseIndex(l)
o.subrsIndex=u.obj}},parseCharsets:function(e,t,a,r){if(0===e)return new T(!0,R.ISO_ADOBE,g)
if(1===e)return new T(!0,R.EXPERT,p)
if(2===e)return new T(!0,R.EXPERT_SUBSET,m)
var i,n,o,c=this.bytes,l=e,h=c[e++],u=[".notdef"]
switch(t-=1,h){case 0:for(o=0;o<t;o++)i=c[e++]<<8|c[e++],u.push(r?i:a.get(i))
break
case 1:for(;u.length<=t;)for(i=c[e++]<<8|c[e++],n=c[e++],o=0;o<=n;o++)u.push(r?i++:a.get(i++))
break
case 2:for(;u.length<=t;)for(i=c[e++]<<8|c[e++],n=c[e++]<<8|c[e++],o=0;o<=n;o++)u.push(r?i++:a.get(i++))
break
default:s("Unknown charset format")}var f=e,d=c.subarray(l,f)
return new T(!1,h,u,d)},parseEncoding:function(e,t,a,r){var i,n,o,c=Object.create(null),l=this.bytes,h=!1,u=null
if(0===e||1===e){h=!0,i=e
var f=e?v:b
for(n=0,o=r.length;n<o;n++){var d=f.indexOf(r[n])
d!==-1&&(c[d]=n)}}else{var g=e
switch(127&(i=l[e++])){case 0:var p=l[e++]
for(n=1;n<=p;n++)c[l[e++]]=n
break
case 1:var m=l[e++],y=1
for(n=0;n<m;n++)for(var k=l[e++],w=l[e++],x=k;x<=k+w;x++)c[x]=y++
break
default:s("Unknown encoding format: "+i+" in CFF")}var C=e
128&i&&(l[g]&=127,function(){var t=l[e++]
for(n=0;n<t;n++){var i=l[e++],s=(l[e++]<<8)+(255&l[e++])
c[i]=r.indexOf(a.get(s))}}()),u=l.subarray(g,C)}return i&=127,new O(h,i,c,u)},parseFDSelect:function(e,t){var a,r,i=e,n=this.bytes,o=n[e++],c=[],h=!1
switch(o){case 0:for(r=0;r<t;++r){var u=n[e++]
c.push(u)}a=n.subarray(i,e)
break
case 3:var f=n[e++]<<8|n[e++]
for(r=0;r<f;++r){var g=n[e++]<<8|n[e++]
0===r&&0!==g&&(l("parseFDSelect: The first range must have a first GID of 0 -- trying to recover."),h=!0,g=0)
for(var p=n[e++],m=n[e]<<8|n[e+1],b=g;b<m;++b)c.push(p)}e+=2,a=n.subarray(i,e),h&&(a[3]=a[4]=0)
break
default:s('parseFDSelect: Unknown format "'+o+'".')}return d(c.length===t,"parseFDSelect: Invalid font data."),new P(c,a)}},e}(),w=function(){function e(){this.header=null,this.names=[],this.topDict=null,this.strings=new C,this.globalSubrIndex=null,this.encoding=null,this.charset=null,this.charStrings=null,this.fdArray=[],this.fdSelect=null,this.isCIDFont=!1}return e}(),x=function(){function e(e,t,a,r){this.major=e,this.minor=t,this.hdrSize=a,this.offSize=r}return e}(),C=function(){function e(){this.strings=[]}return e.prototype={get:function(e){return e>=0&&e<=390?y[e]:e-391<=this.strings.length?this.strings[e-391]:y[0]},add:function(e){this.strings.push(e)},get count(){return this.strings.length}},e}(),S=function(){function e(){this.objects=[],this.length=0}return e.prototype={add:function(e){this.length+=e.length,this.objects.push(e)},set:function(e,t){this.length+=t.length-this.objects[e].length,this.objects[e]=t},get:function(e){return this.objects[e]},get count(){return this.objects.length}},e}(),A=function(){function e(e,t){this.keyToNameMap=e.keyToNameMap,this.nameToKeyMap=e.nameToKeyMap,this.defaults=e.defaults,this.types=e.types,this.opcodes=e.opcodes,this.order=e.order,this.strings=t,this.values=Object.create(null)}return e.prototype={setByKey:function(e,t){if(!(e in this.keyToNameMap))return!1
var a=t.length
if(0===a)return!0
for(var r=0;r<a;r++)if(isNaN(t[r]))return l('Invalid CFFDict value: "'+t+'" for key "'+e+'".'),!0
var i=this.types[e]
return"num"!==i&&"sid"!==i&&"offset"!==i||(t=t[0]),this.values[e]=t,!0},setByName:function(e,t){e in this.nameToKeyMap||s('Invalid dictionary name "'+e+'"'),this.values[this.nameToKeyMap[e]]=t},hasName:function(e){return this.nameToKeyMap[e]in this.values},getByName:function(e){e in this.nameToKeyMap||s('Invalid dictionary name "'+e+'"')
var t=this.nameToKeyMap[e]
return t in this.values?this.values[t]:this.defaults[t]},removeByName:function(e){delete this.values[this.nameToKeyMap[e]]}},e.createTables=function(e){for(var t={keyToNameMap:{},nameToKeyMap:{},defaults:{},types:{},opcodes:{},order:[]},a=0,r=e.length;a<r;++a){var i=e[a],n=h(i[0])?(i[0][0]<<8)+i[0][1]:i[0]
t.keyToNameMap[n]=i[1],t.nameToKeyMap[i[1]]=n,t.types[n]=i[2],t.defaults[n]=i[3],t.opcodes[n]=h(i[0])?i[0]:[i[0]],t.order.push(n)}return t},e}(),I=function(){function e(e){null===a&&(a=A.createTables(t)),A.call(this,a,e),this.privateDict=null}var t=[[[12,30],"ROS",["sid","sid","num"],null],[[12,20],"SyntheticBase","num",null],[0,"version","sid",null],[1,"Notice","sid",null],[[12,0],"Copyright","sid",null],[2,"FullName","sid",null],[3,"FamilyName","sid",null],[4,"Weight","sid",null],[[12,1],"isFixedPitch","num",0],[[12,2],"ItalicAngle","num",0],[[12,3],"UnderlinePosition","num",-100],[[12,4],"UnderlineThickness","num",50],[[12,5],"PaintType","num",0],[[12,6],"CharstringType","num",2],[[12,7],"FontMatrix",["num","num","num","num","num","num"],[.001,0,0,.001,0,0]],[13,"UniqueID","num",null],[5,"FontBBox",["num","num","num","num"],[0,0,0,0]],[[12,8],"StrokeWidth","num",0],[14,"XUID","array",null],[15,"charset","offset",0],[16,"Encoding","offset",0],[17,"CharStrings","offset",0],[18,"Private",["offset","offset"],null],[[12,21],"PostScript","sid",null],[[12,22],"BaseFontName","sid",null],[[12,23],"BaseFontBlend","delta",null],[[12,31],"CIDFontVersion","num",0],[[12,32],"CIDFontRevision","num",0],[[12,33],"CIDFontType","num",0],[[12,34],"CIDCount","num",8720],[[12,35],"UIDBase","num",null],[[12,37],"FDSelect","offset",null],[[12,36],"FDArray","offset",null],[[12,38],"FontName","sid",null]],a=null
return e.prototype=Object.create(A.prototype),e}(),B=function(){function e(e){null===a&&(a=A.createTables(t)),A.call(this,a,e),this.subrsIndex=null}var t=[[6,"BlueValues","delta",null],[7,"OtherBlues","delta",null],[8,"FamilyBlues","delta",null],[9,"FamilyOtherBlues","delta",null],[[12,9],"BlueScale","num",.039625],[[12,10],"BlueShift","num",7],[[12,11],"BlueFuzz","num",1],[10,"StdHW","num",null],[11,"StdVW","num",null],[[12,12],"StemSnapH","delta",null],[[12,13],"StemSnapV","delta",null],[[12,14],"ForceBold","num",0],[[12,17],"LanguageGroup","num",0],[[12,18],"ExpansionFactor","num",.06],[[12,19],"initialRandomSeed","num",0],[20,"defaultWidthX","num",0],[21,"nominalWidthX","num",0],[19,"Subrs","offset",null]],a=null
return e.prototype=Object.create(A.prototype),e}(),R={ISO_ADOBE:0,EXPERT:1,EXPERT_SUBSET:2},T=function(){function e(e,t,a,r){this.predefined=e,this.format=t,this.charset=a,this.raw=r}return e}(),O=function(){function e(e,t,a,r){this.predefined=e,this.format=t,this.encoding=a,this.raw=r}return e}(),P=function(){function e(e,t){this.fdSelect=e,this.raw=t}return e.prototype={getFDIndex:function(e){return e<0||e>=this.fdSelect.length?-1:this.fdSelect[e]}},e}(),M=function(){function e(){this.offsets=Object.create(null)}return e.prototype={isTracking:function(e){return e in this.offsets},track:function(e,t){e in this.offsets&&s("Already tracking location of "+e),this.offsets[e]=t},offset:function(e){for(var t in this.offsets)this.offsets[t]+=e},setEntryLocation:function(e,t,a){e in this.offsets||s("Not tracking location of "+e)
for(var r=a.data,i=this.offsets[e],n=0,o=t.length;n<o;++n){var c=5*n+i,l=c+1,h=c+2,u=c+3,f=c+4
29===r[c]&&0===r[l]&&0===r[h]&&0===r[u]&&0===r[f]||s("writing to an offset that is not empty")
var d=t[n]
r[c]=29,r[l]=d>>24&255,r[h]=d>>16&255,r[u]=d>>8&255,r[f]=255&d}}},e}(),E=function(){function e(e){this.cff=e}return e.prototype={compile:function(){var e=this.cff,t={data:[],length:0,add:function(e){this.data=this.data.concat(e),this.length=this.data.length}},a=this.compileHeader(e.header)
t.add(a)
var r=this.compileNameIndex(e.names)
if(t.add(r),e.isCIDFont&&e.topDict.hasName("FontMatrix")){var i=e.topDict.getByName("FontMatrix")
e.topDict.removeByName("FontMatrix")
for(var n=0,s=e.fdArray.length;n<s;n++){var o=e.fdArray[n],c=i.slice(0)
o.hasName("FontMatrix")&&(c=u.transform(c,o.getByName("FontMatrix"))),o.setByName("FontMatrix",c)}}var l=this.compileTopDicts([e.topDict],t.length,e.isCIDFont)
t.add(l.output)
var h=l.trackers[0],f=this.compileStringIndex(e.strings.strings)
t.add(f)
var d=this.compileIndex(e.globalSubrIndex)
if(t.add(d),e.encoding&&e.topDict.hasName("Encoding"))if(e.encoding.predefined)h.setEntryLocation("Encoding",[e.encoding.format],t)
else{var g=this.compileEncoding(e.encoding)
h.setEntryLocation("Encoding",[t.length],t),t.add(g)}if(e.charset&&e.topDict.hasName("charset"))if(e.charset.predefined)h.setEntryLocation("charset",[e.charset.format],t)
else{var p=this.compileCharset(e.charset)
h.setEntryLocation("charset",[t.length],t),t.add(p)}var m=this.compileCharStrings(e.charStrings)
if(h.setEntryLocation("CharStrings",[t.length],t),t.add(m),e.isCIDFont){h.setEntryLocation("FDSelect",[t.length],t)
var b=this.compileFDSelect(e.fdSelect.raw)
t.add(b),l=this.compileTopDicts(e.fdArray,t.length,!0),h.setEntryLocation("FDArray",[t.length],t),t.add(l.output)
var v=l.trackers
this.compilePrivateDicts(e.fdArray,v,t)}return this.compilePrivateDicts([e.topDict],[h],t),t.add([0]),t.data},encodeNumber:function(e){return parseFloat(e)!==parseInt(e,10)||isNaN(e)?this.encodeFloat(e):this.encodeInteger(e)},encodeFloat:function(e){var t=e.toString(),a=/\.(\d*?)(?:9{5,20}|0{5,20})\d{0,2}(?:e(.+)|$)/.exec(t)
if(a){var r=parseFloat("1e"+((a[2]?+a[2]:0)+a[1].length))
t=(Math.round(e*r)/r).toString()}var i,n,s=""
for(i=0,n=t.length;i<n;++i){var o=t[i]
s+="e"===o?"-"===t[++i]?"c":"b":"."===o?"a":"-"===o?"e":o}s+=1&s.length?"f":"ff"
var c=[30]
for(i=0,n=s.length;i<n;i+=2)c.push(parseInt(s.substr(i,2),16))
return c},encodeInteger:function(e){var t
return e>=-107&&e<=107?t=[e+139]:e>=108&&e<=1131?(e-=108,t=[247+(e>>8),255&e]):e>=-1131&&e<=-108?(e=-e-108,t=[251+(e>>8),255&e]):t=e>=-32768&&e<=32767?[28,e>>8&255,255&e]:[29,e>>24&255,e>>16&255,e>>8&255,255&e],t},compileHeader:function(e){return[e.major,e.minor,e.hdrSize,e.offSize]},compileNameIndex:function(e){for(var t=new S,a=0,r=e.length;a<r;++a)t.add(f(e[a]))
return this.compileIndex(t)},compileTopDicts:function(e,t,a){for(var r=[],i=new S,n=0,s=e.length;n<s;++n){var o=e[n]
a&&(o.removeByName("CIDFontVersion"),o.removeByName("CIDFontRevision"),o.removeByName("CIDFontType"),o.removeByName("CIDCount"),o.removeByName("UIDBase"))
var c=new M,l=this.compileDict(o,c)
r.push(c),i.add(l),c.offset(t)}return i=this.compileIndex(i,r),{trackers:r,output:i}},compilePrivateDicts:function(e,t,a){for(var r=0,i=e.length;r<i;++r){var n=e[r]
d(n.privateDict&&n.hasName("Private"),"There must be an private dictionary.")
var s=n.privateDict,o=new M,c=this.compileDict(s,o),l=a.length
if(o.offset(l),c.length||(l=0),t[r].setEntryLocation("Private",[c.length,l],a),a.add(c),s.subrsIndex&&s.hasName("Subrs")){var h=this.compileIndex(s.subrsIndex)
o.setEntryLocation("Subrs",[c.length],a),a.add(h)}}},compileDict:function(e,t){for(var a=[],r=e.order,i=0;i<r.length;++i){var n=r[i]
if(n in e.values){var o=e.values[n],c=e.types[n]
if(h(c)||(c=[c]),h(o)||(o=[o]),0!==o.length){for(var l=0,u=c.length;l<u;++l){var f=c[l],d=o[l]
switch(f){case"num":case"sid":a=a.concat(this.encodeNumber(d))
break
case"offset":var g=e.keyToNameMap[n]
t.isTracking(g)||t.track(g,a.length),a=a.concat([29,0,0,0,0])
break
case"array":case"delta":a=a.concat(this.encodeNumber(d))
for(var p=1,m=o.length;p<m;++p)a=a.concat(this.encodeNumber(o[p]))
break
default:s("Unknown data type of "+f)}}a=a.concat(e.opcodes[n])}}}return a},compileStringIndex:function(e){for(var t=new S,a=0,r=e.length;a<r;++a)t.add(f(e[a]))
return this.compileIndex(t)},compileGlobalSubrIndex:function(){var e=this.cff.globalSubrIndex
this.out.writeByteArray(this.compileIndex(e))},compileCharStrings:function(e){return this.compileIndex(e)},compileCharset:function(e){return this.compileTypedArray(e.raw)},compileEncoding:function(e){return this.compileTypedArray(e.raw)},compileFDSelect:function(e){return this.compileTypedArray(e)},compileTypedArray:function(e){for(var t=[],a=0,r=e.length;a<r;++a)t[a]=e[a]
return t},compileIndex:function(e,t){t=t||[]
var a=e.objects,r=a.length
if(0===r)return[0,0,0]
var i,n=[r>>8&255,255&r],s=1
for(i=0;i<r;++i)s+=a[i].length
var o
o=s<256?1:s<65536?2:s<16777216?3:4,n.push(o)
var c=1
for(i=0;i<r+1;i++)1===o?n.push(255&c):2===o?n.push(c>>8&255,255&c):3===o?n.push(c>>16&255,c>>8&255,255&c):n.push(c>>>24&255,c>>16&255,c>>8&255,255&c),a[i]&&(c+=a[i].length)
for(i=0;i<r;i++){t[i]&&t[i].offset(n.length)
for(var l=0,h=a[i].length;l<h;l++)n.push(a[i][l])}return n}},e}()
t.CFFStandardStrings=y,t.CFFParser=k,t.CFF=w,t.CFFHeader=x,t.CFFStrings=C,t.CFFIndex=S,t.CFFCharset=T,t.CFFTopDict=I,t.CFFPrivateDict=B,t.CFFCompiler=E},function(e,t,a){"use strict"
var r=a(0),i=r.MissingDataException,n=r.arrayByteLength,s=r.arraysToBytes,o=r.assert,c=r.createPromiseCapability,l=r.isInt,h=r.isEmptyObj,u=function(){function e(e,t,a){this.bytes=new Uint8Array(e),this.start=0,this.pos=0,this.end=e,this.chunkSize=t,this.loadedChunks=[],this.numChunksLoaded=0,this.numChunks=Math.ceil(e/t),this.manager=a,this.progressiveDataLength=0,this.lastSuccessfulEnsureByteChunk=-1}return e.prototype={getMissingChunks:function(){for(var e=[],t=0,a=this.numChunks;t<a;++t)this.loadedChunks[t]||e.push(t)
return e},getBaseStreams:function(){return[this]},allChunksLoaded:function(){return this.numChunksLoaded===this.numChunks},onReceiveData:function(e,t){var a=e+t.byteLength
o(e%this.chunkSize==0,"Bad begin offset: "+e)
var r=this.bytes.length
o(a%this.chunkSize==0||a===r,"Bad end offset: "+a),this.bytes.set(new Uint8Array(t),e)
var i,n=this.chunkSize,s=Math.floor(e/n),c=Math.floor((a-1)/n)+1
for(i=s;i<c;++i)this.loadedChunks[i]||(this.loadedChunks[i]=!0,++this.numChunksLoaded)},onReceiveProgressiveData:function(e){var t=this.progressiveDataLength,a=Math.floor(t/this.chunkSize)
this.bytes.set(new Uint8Array(e),t),t+=e.byteLength,this.progressiveDataLength=t
var r,i=t>=this.end?this.numChunks:Math.floor(t/this.chunkSize)
for(r=a;r<i;++r)this.loadedChunks[r]||(this.loadedChunks[r]=!0,++this.numChunksLoaded)},ensureByte:function(e){var t=Math.floor(e/this.chunkSize)
if(t!==this.lastSuccessfulEnsureByteChunk){if(!this.loadedChunks[t])throw new i(e,e+1)
this.lastSuccessfulEnsureByteChunk=t}},ensureRange:function(e,t){if(!(e>=t||t<=this.progressiveDataLength))for(var a=this.chunkSize,r=Math.floor(e/a),n=Math.floor((t-1)/a)+1,s=r;s<n;++s)if(!this.loadedChunks[s])throw new i(e,t)},nextEmptyChunk:function(e){for(var t,a=this.numChunks,r=0;r<a;++r)if(t=(e+r)%a,!this.loadedChunks[t])return t
return null},hasChunk:function(e){return!!this.loadedChunks[e]},get length(){return this.end-this.start},get isEmpty(){return 0===this.length},getByte:function(){var e=this.pos
return e>=this.end?-1:(this.ensureByte(e),this.bytes[this.pos++])},getUint16:function(){var e=this.getByte(),t=this.getByte()
return e===-1||t===-1?-1:(e<<8)+t},getInt32:function(){return(this.getByte()<<24)+(this.getByte()<<16)+(this.getByte()<<8)+this.getByte()},getBytes:function(e){var t=this.bytes,a=this.pos,r=this.end
if(!e)return this.ensureRange(a,r),t.subarray(a,r)
var i=a+e
return i>r&&(i=r),this.ensureRange(a,i),this.pos=i,t.subarray(a,i)},peekByte:function(){var e=this.getByte()
return this.pos--,e},peekBytes:function(e){var t=this.getBytes(e)
return this.pos-=t.length,t},getByteRange:function(e,t){return this.ensureRange(e,t),this.bytes.subarray(e,t)},skip:function(e){e||(e=1),this.pos+=e},reset:function(){this.pos=this.start},moveStart:function(){this.start=this.pos},makeSubStream:function(e,t,a){function r(){}this.ensureRange(e,e+t),r.prototype=Object.create(this),r.prototype.getMissingChunks=function(){for(var e=this.chunkSize,t=Math.floor(this.start/e),a=Math.floor((this.end-1)/e)+1,r=[],i=t;i<a;++i)this.loadedChunks[i]||r.push(i)
return r}
var i=new r
return i.pos=i.start=e,i.end=e+t||this.end,i.dict=a,i}},e}(),f=function(){function e(e,t){var a=t.rangeChunkSize,r=t.length
this.stream=new u(r,a,this),this.length=r,this.chunkSize=a,this.pdfNetworkStream=e,this.url=t.url,this.disableAutoFetch=t.disableAutoFetch,this.msgHandler=t.msgHandler,this.currRequestId=0,this.chunksNeededByRequest=Object.create(null),this.requestsByChunk=Object.create(null),this.promisesByRequest=Object.create(null),this.progressiveDataLength=0,this.aborted=!1,this._loadedStreamCapability=c()}return e.prototype={onLoadedStream:function(){return this._loadedStreamCapability.promise},sendRequest:function(e,t){var a=this.pdfNetworkStream.getRangeReader(e,t)
a.isStreamingSupported||(a.onProgress=this.onProgress.bind(this))
var r=[],i=0,o=this
new Promise(function(e,t){var c=function(l){try{if(!l.done){var h=l.value
return r.push(h),i+=n(h),a.isStreamingSupported&&o.onProgress({loaded:i}),void a.read().then(c,t)}var u=s(r)
r=null,e(u)}catch(e){t(e)}}
a.read().then(c,t)}).then(function(t){this.aborted||this.onReceiveData({chunk:t,begin:e})}.bind(this))},requestAllChunks:function(){var e=this.stream.getMissingChunks()
return this._requestChunks(e),this._loadedStreamCapability.promise},_requestChunks:function(e){var t,a,r=this.currRequestId++,i=Object.create(null)
for(this.chunksNeededByRequest[r]=i,t=0,a=e.length;t<a;t++)this.stream.hasChunk(e[t])||(i[e[t]]=!0)
if(h(i))return Promise.resolve()
var n=c()
this.promisesByRequest[r]=n
var s=[]
for(var o in i)o|=0,o in this.requestsByChunk||(this.requestsByChunk[o]=[],s.push(o)),this.requestsByChunk[o].push(r)
if(!s.length)return n.promise
var l=this.groupChunks(s)
for(t=0;t<l.length;++t){var u=l[t],f=u.beginChunk*this.chunkSize,d=Math.min(u.endChunk*this.chunkSize,this.length)
this.sendRequest(f,d)}return n.promise},getStream:function(){return this.stream},requestRange:function(e,t){t=Math.min(t,this.length)
for(var a=this.getBeginChunk(e),r=this.getEndChunk(t),i=[],n=a;n<r;++n)i.push(n)
return this._requestChunks(i)},requestRanges:function(e){e=e||[]
for(var t=[],a=0;a<e.length;a++)for(var r=this.getBeginChunk(e[a].begin),i=this.getEndChunk(e[a].end),n=r;n<i;++n)t.indexOf(n)<0&&t.push(n)
return t.sort(function(e,t){return e-t}),this._requestChunks(t)},groupChunks:function(e){for(var t=[],a=-1,r=-1,i=0;i<e.length;++i){var n=e[i]
a<0&&(a=n),r>=0&&r+1!==n&&(t.push({beginChunk:a,endChunk:r+1}),a=n),i+1===e.length&&t.push({beginChunk:a,endChunk:n+1}),r=n}return t},onProgress:function(e){var t=this.stream.numChunksLoaded*this.chunkSize+e.loaded
this.msgHandler.send("DocProgress",{loaded:t,total:this.length})},onReceiveData:function(e){var t=e.chunk,a=void 0===e.begin,r=a?this.progressiveDataLength:e.begin,i=r+t.byteLength,n=Math.floor(r/this.chunkSize),s=i<this.length?Math.floor(i/this.chunkSize):Math.ceil(i/this.chunkSize)
a?(this.stream.onReceiveProgressiveData(t),this.progressiveDataLength=i):this.stream.onReceiveData(r,t),this.stream.allChunksLoaded()&&this._loadedStreamCapability.resolve(this.stream)
var o,c,u=[]
for(t=n;t<s;++t){var f=this.requestsByChunk[t]||[]
for(delete this.requestsByChunk[t],o=0;o<f.length;++o){c=f[o]
var d=this.chunksNeededByRequest[c]
t in d&&delete d[t],h(d)&&u.push(c)}}if(!this.disableAutoFetch&&h(this.requestsByChunk)){var g
if(1===this.stream.numChunksLoaded){var p=this.stream.numChunks-1
this.stream.hasChunk(p)||(g=p)}else g=this.stream.nextEmptyChunk(s)
l(g)&&this._requestChunks([g])}for(o=0;o<u.length;++o){c=u[o]
var m=this.promisesByRequest[c]
delete this.promisesByRequest[c],m.resolve()}this.msgHandler.send("DocProgress",{loaded:this.stream.numChunksLoaded*this.chunkSize,total:this.length})},onError:function(e){this._loadedStreamCapability.reject(e)},getBeginChunk:function(e){return Math.floor(e/this.chunkSize)},getEndChunk:function(e){return Math.floor((e-1)/this.chunkSize)+1},abort:function(){this.aborted=!0,this.pdfNetworkStream&&this.pdfNetworkStream.cancelAllRequests("abort")
for(var e in this.promisesByRequest){this.promisesByRequest[e].reject(new Error("Request was aborted"))}}},e}()
t.ChunkedStream=u,t.ChunkedStreamManager=f},function(e,t,a){"use strict"
var r=a(0),i=a(1),n=a(2),s=r.PasswordException,o=r.PasswordResponses,c=r.bytesToString,l=r.warn,h=r.error,u=r.assert,f=r.isInt,d=r.stringToBytes,g=r.utf8StringToString,p=i.Name,m=i.isName,b=i.isDict,v=n.DecryptStream,y=function(){function e(e){this.a=0,this.b=0
var t,a,r=new Uint8Array(256),i=0,n=e.length
for(t=0;t<256;++t)r[t]=t
for(t=0;t<256;++t)a=r[t],i=i+a+e[t%n]&255,r[t]=r[i],r[i]=a
this.s=r}return e.prototype={encryptBlock:function(e){var t,a,r,i=e.length,n=this.a,s=this.b,o=this.s,c=new Uint8Array(i)
for(t=0;t<i;++t)n=n+1&255,a=o[n],s=s+a&255,r=o[s],o[n]=r,o[s]=a,c[t]=e[t]^o[a+r&255]
return this.a=n,this.b=s,c}},e.prototype.decryptBlock=e.prototype.encryptBlock,e}(),k=function(){function e(e,r,i){var n,s,o,c=1732584193,l=-271733879,h=-1732584194,u=271733878,f=i+72&-64,d=new Uint8Array(f)
for(n=0;n<i;++n)d[n]=e[r++]
for(d[n++]=128,o=f-8;n<o;)d[n++]=0
d[n++]=i<<3&255,d[n++]=i>>5&255,d[n++]=i>>13&255,d[n++]=i>>21&255,d[n++]=i>>>29&255,d[n++]=0,d[n++]=0,d[n++]=0
var g=new Int32Array(16)
for(n=0;n<f;){for(s=0;s<16;++s,n+=4)g[s]=d[n]|d[n+1]<<8|d[n+2]<<16|d[n+3]<<24
var p,m,b=c,v=l,y=h,k=u
for(s=0;s<64;++s){s<16?(p=v&y|~v&k,m=s):s<32?(p=k&v|~k&y,m=5*s+1&15):s<48?(p=v^y^k,m=3*s+5&15):(p=y^(v|~k),m=7*s&15)
var w=k,x=b+p+a[s]+g[m]|0,C=t[s]
k=y,y=v,v=v+(x<<C|x>>>32-C)|0,b=w}c=c+b|0,l=l+v|0,h=h+y|0,u=u+k|0}return new Uint8Array([255&c,c>>8&255,c>>16&255,c>>>24&255,255&l,l>>8&255,l>>16&255,l>>>24&255,255&h,h>>8&255,h>>16&255,h>>>24&255,255&u,u>>8&255,u>>16&255,u>>>24&255])}var t=new Uint8Array([7,12,17,22,7,12,17,22,7,12,17,22,7,12,17,22,5,9,14,20,5,9,14,20,5,9,14,20,5,9,14,20,4,11,16,23,4,11,16,23,4,11,16,23,4,11,16,23,6,10,15,21,6,10,15,21,6,10,15,21,6,10,15,21]),a=new Int32Array([-680876936,-389564586,606105819,-1044525330,-176418897,1200080426,-1473231341,-45705983,1770035416,-1958414417,-42063,-1990404162,1804603682,-40341101,-1502002290,1236535329,-165796510,-1069501632,643717713,-373897302,-701558691,38016083,-660478335,-405537848,568446438,-1019803690,-187363961,1163531501,-1444681467,-51403784,1735328473,-1926607734,-378558,-2022574463,1839030562,-35309556,-1530992060,1272893353,-155497632,-1094730640,681279174,-358537222,-722521979,76029189,-640364487,-421815835,530742520,-995338651,-198630844,1126891415,-1416354905,-57434055,1700485571,-1894986606,-1051523,-2054922799,1873313359,-30611744,-1560198380,1309151649,-145523070,-1120210379,718787259,-343485551])
return e}(),w=function(){function e(e,t){this.high=0|e,this.low=0|t}return e.prototype={and:function(e){this.high&=e.high,this.low&=e.low},xor:function(e){this.high^=e.high,this.low^=e.low},or:function(e){this.high|=e.high,this.low|=e.low},shiftRight:function(e){e>=32?(this.low=this.high>>>e-32|0,this.high=0):(this.low=this.low>>>e|this.high<<32-e,this.high=this.high>>>e|0)},shiftLeft:function(e){e>=32?(this.high=this.low<<e-32,this.low=0):(this.high=this.high<<e|this.low>>>32-e,this.low=this.low<<e)},rotateRight:function(e){var t,a
32&e?(a=this.low,t=this.high):(t=this.low,a=this.high),e&=31,this.low=t>>>e|a<<32-e,this.high=a>>>e|t<<32-e},not:function(){this.high=~this.high,this.low=~this.low},add:function(e){var t=(this.low>>>0)+(e.low>>>0),a=(this.high>>>0)+(e.high>>>0)
t>4294967295&&(a+=1),this.low=0|t,this.high=0|a},copyTo:function(e,t){e[t]=this.high>>>24&255,e[t+1]=this.high>>16&255,e[t+2]=this.high>>8&255,e[t+3]=255&this.high,e[t+4]=this.low>>>24&255,e[t+5]=this.low>>16&255,e[t+6]=this.low>>8&255,e[t+7]=255&this.low},assign:function(e){this.high=e.high,this.low=e.low}},e}(),x=function(){function e(e,t){return e>>>t|e<<32-t}function t(e,t,a){return e&t^~e&a}function a(e,t,a){return e&t^e&a^t&a}function r(t){return e(t,2)^e(t,13)^e(t,22)}function i(t){return e(t,6)^e(t,11)^e(t,25)}function n(t){return e(t,7)^e(t,18)^t>>>3}function s(t){return e(t,17)^e(t,19)^t>>>10}function o(e,o,l){var h,u,f,d=1779033703,g=3144134277,p=1013904242,m=2773480762,b=1359893119,v=2600822924,y=528734635,k=1541459225,w=64*Math.ceil((l+9)/64),x=new Uint8Array(w)
for(h=0;h<l;++h)x[h]=e[o++]
for(x[h++]=128,f=w-8;h<f;)x[h++]=0
x[h++]=0,x[h++]=0,x[h++]=0,x[h++]=l>>>29&255,x[h++]=l>>21&255,x[h++]=l>>13&255,x[h++]=l>>5&255,x[h++]=l<<3&255
var C=new Uint32Array(64)
for(h=0;h<w;){for(u=0;u<16;++u)C[u]=x[h]<<24|x[h+1]<<16|x[h+2]<<8|x[h+3],h+=4
for(u=16;u<64;++u)C[u]=s(C[u-2])+C[u-7]+n(C[u-15])+C[u-16]|0
var S,A,I=d,B=g,R=p,T=m,O=b,P=v,M=y,E=k
for(u=0;u<64;++u)S=E+i(O)+t(O,P,M)+c[u]+C[u],A=r(I)+a(I,B,R),E=M,M=P,P=O,O=T+S|0,T=R,R=B,B=I,I=S+A|0
d=d+I|0,g=g+B|0,p=p+R|0,m=m+T|0,b=b+O|0,v=v+P|0,y=y+M|0,k=k+E|0}return new Uint8Array([d>>24&255,d>>16&255,d>>8&255,255&d,g>>24&255,g>>16&255,g>>8&255,255&g,p>>24&255,p>>16&255,p>>8&255,255&p,m>>24&255,m>>16&255,m>>8&255,255&m,b>>24&255,b>>16&255,b>>8&255,255&b,v>>24&255,v>>16&255,v>>8&255,255&v,y>>24&255,y>>16&255,y>>8&255,255&y,k>>24&255,k>>16&255,k>>8&255,255&k])}var c=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]
return o}(),C=function(){function e(e,t,a,r,i){e.assign(t),e.and(a),i.assign(t),i.not(),i.and(r),e.xor(i)}function t(e,t,a,r,i){e.assign(t),e.and(a),i.assign(t),i.and(r),e.xor(i),i.assign(a),i.and(r),e.xor(i)}function a(e,t,a){e.assign(t),e.rotateRight(28),a.assign(t),a.rotateRight(34),e.xor(a),a.assign(t),a.rotateRight(39),e.xor(a)}function r(e,t,a){e.assign(t),e.rotateRight(14),a.assign(t),a.rotateRight(18),e.xor(a),a.assign(t),a.rotateRight(41),e.xor(a)}function i(e,t,a){e.assign(t),e.rotateRight(1),a.assign(t),a.rotateRight(8),e.xor(a),a.assign(t),a.shiftRight(7),e.xor(a)}function n(e,t,a){e.assign(t),e.rotateRight(19),a.assign(t),a.rotateRight(61),e.xor(a),a.assign(t),a.shiftRight(6),e.xor(a)}function s(s,c,l,h){h=!!h
var u,f,d,g,p,m,b,v
h?(u=new w(3418070365,3238371032),f=new w(1654270250,914150663),d=new w(2438529370,812702999),g=new w(355462360,4144912697),p=new w(1731405415,4290775857),m=new w(2394180231,1750603025),b=new w(3675008525,1694076839),v=new w(1203062813,3204075428)):(u=new w(1779033703,4089235720),f=new w(3144134277,2227873595),d=new w(1013904242,4271175723),g=new w(2773480762,1595750129),p=new w(1359893119,2917565137),m=new w(2600822924,725511199),b=new w(528734635,4215389547),v=new w(1541459225,327033209))
var y,k,x,C=128*Math.ceil((l+17)/128),S=new Uint8Array(C)
for(y=0;y<l;++y)S[y]=s[c++]
for(S[y++]=128,x=C-16;y<x;)S[y++]=0
S[y++]=0,S[y++]=0,S[y++]=0,S[y++]=0,S[y++]=0,S[y++]=0,S[y++]=0,S[y++]=0,S[y++]=0,S[y++]=0,S[y++]=0,S[y++]=l>>>29&255,S[y++]=l>>21&255,S[y++]=l>>13&255,S[y++]=l>>5&255,S[y++]=l<<3&255
var A=new Array(80)
for(y=0;y<80;y++)A[y]=new w(0,0)
var I,B=new w(0,0),R=new w(0,0),T=new w(0,0),O=new w(0,0),P=new w(0,0),M=new w(0,0),E=new w(0,0),L=new w(0,0),D=new w(0,0),F=new w(0,0),q=new w(0,0),U=new w(0,0)
for(y=0;y<C;){for(k=0;k<16;++k)A[k].high=S[y]<<24|S[y+1]<<16|S[y+2]<<8|S[y+3],A[k].low=S[y+4]<<24|S[y+5]<<16|S[y+6]<<8|S[y+7],y+=8
for(k=16;k<80;++k)I=A[k],n(I,A[k-2],U),I.add(A[k-7]),i(q,A[k-15],U),I.add(q),I.add(A[k-16])
for(B.assign(u),R.assign(f),T.assign(d),O.assign(g),P.assign(p),M.assign(m),E.assign(b),L.assign(v),k=0;k<80;++k)D.assign(L),r(q,P,U),D.add(q),e(q,P,M,E,U),D.add(q),D.add(o[k]),D.add(A[k]),a(F,B,U),t(q,B,R,T,U),F.add(q),I=L,L=E,E=M,M=P,O.add(D),P=O,O=T,T=R,R=B,I.assign(D),I.add(F),B=I
u.add(B),f.add(R),d.add(T),g.add(O),p.add(P),m.add(M),b.add(E),v.add(L)}var N
return h?(N=new Uint8Array(48),u.copyTo(N,0),f.copyTo(N,8),d.copyTo(N,16),g.copyTo(N,24),p.copyTo(N,32),m.copyTo(N,40)):(N=new Uint8Array(64),u.copyTo(N,0),f.copyTo(N,8),d.copyTo(N,16),g.copyTo(N,24),p.copyTo(N,32),m.copyTo(N,40),b.copyTo(N,48),v.copyTo(N,56)),N}var o=[new w(1116352408,3609767458),new w(1899447441,602891725),new w(3049323471,3964484399),new w(3921009573,2173295548),new w(961987163,4081628472),new w(1508970993,3053834265),new w(2453635748,2937671579),new w(2870763221,3664609560),new w(3624381080,2734883394),new w(310598401,1164996542),new w(607225278,1323610764),new w(1426881987,3590304994),new w(1925078388,4068182383),new w(2162078206,991336113),new w(2614888103,633803317),new w(3248222580,3479774868),new w(3835390401,2666613458),new w(4022224774,944711139),new w(264347078,2341262773),new w(604807628,2007800933),new w(770255983,1495990901),new w(1249150122,1856431235),new w(1555081692,3175218132),new w(1996064986,2198950837),new w(2554220882,3999719339),new w(2821834349,766784016),new w(2952996808,2566594879),new w(3210313671,3203337956),new w(3336571891,1034457026),new w(3584528711,2466948901),new w(113926993,3758326383),new w(338241895,168717936),new w(666307205,1188179964),new w(773529912,1546045734),new w(1294757372,1522805485),new w(1396182291,2643833823),new w(1695183700,2343527390),new w(1986661051,1014477480),new w(2177026350,1206759142),new w(2456956037,344077627),new w(2730485921,1290863460),new w(2820302411,3158454273),new w(3259730800,3505952657),new w(3345764771,106217008),new w(3516065817,3606008344),new w(3600352804,1432725776),new w(4094571909,1467031594),new w(275423344,851169720),new w(430227734,3100823752),new w(506948616,1363258195),new w(659060556,3750685593),new w(883997877,3785050280),new w(958139571,3318307427),new w(1322822218,3812723403),new w(1537002063,2003034995),new w(1747873779,3602036899),new w(1955562222,1575990012),new w(2024104815,1125592928),new w(2227730452,2716904306),new w(2361852424,442776044),new w(2428436474,593698344),new w(2756734187,3733110249),new w(3204031479,2999351573),new w(3329325298,3815920427),new w(3391569614,3928383900),new w(3515267271,566280711),new w(3940187606,3454069534),new w(4118630271,4000239992),new w(116418474,1914138554),new w(174292421,2731055270),new w(289380356,3203993006),new w(460393269,320620315),new w(685471733,587496836),new w(852142971,1086792851),new w(1017036298,365543100),new w(1126000580,2618297676),new w(1288033470,3409855158),new w(1501505948,4234509866),new w(1607167915,987167468),new w(1816402316,1246189591)]
return s}(),S=function(){function e(e,t,a){return C(e,t,a,!0)}return e}(),A=function(){function e(){}return e.prototype={decryptBlock:function(e){return e}},e}(),I=function(){function e(e){var t=new Uint8Array(176)
t.set(e)
for(var a=16,r=1;a<176;++r){var i=t[a-3],o=t[a-2],c=t[a-1],l=t[a-4]
i=s[i],o=s[o],c=s[c],l=s[l],i^=n[r]
for(var h=0;h<4;++h)t[a]=i^=t[a-16],a++,t[a]=o^=t[a-16],a++,t[a]=c^=t[a-16],a++,t[a]=l^=t[a-16],a++}return t}function t(e,t){var a=new Uint8Array(16)
a.set(e)
var r,i,n,s,c,l
for(i=0,n=160;i<16;++i,++n)a[i]^=t[n]
for(r=9;r>=1;--r){for(s=a[13],a[13]=a[9],a[9]=a[5],a[5]=a[1],a[1]=s,s=a[14],c=a[10],a[14]=a[6],a[10]=a[2],a[6]=s,a[2]=c,s=a[15],c=a[11],l=a[7],a[15]=a[3],a[11]=s,a[7]=c,a[3]=l,i=0;i<16;++i)a[i]=o[a[i]]
for(i=0,n=16*r;i<16;++i,++n)a[i]^=t[n]
for(i=0;i<16;i+=4){var u=h[a[i]],f=h[a[i+1]],d=h[a[i+2]],g=h[a[i+3]]
s=u^f>>>8^f<<24^d>>>16^d<<16^g>>>24^g<<8,a[i]=s>>>24&255,a[i+1]=s>>16&255,a[i+2]=s>>8&255,a[i+3]=255&s}}for(s=a[13],a[13]=a[9],a[9]=a[5],a[5]=a[1],a[1]=s,s=a[14],c=a[10],a[14]=a[6],a[10]=a[2],a[6]=s,a[2]=c,s=a[15],c=a[11],l=a[7],a[15]=a[3],a[11]=s,a[7]=c,a[3]=l,i=0;i<16;++i)a[i]=o[a[i]],a[i]^=t[i]
return a}function a(e,t){var a,r,i,n,o=new Uint8Array(16)
for(o.set(e),h=0;h<16;++h)o[h]^=t[h]
for(l=1;l<10;l++){for(h=0;h<16;++h)o[h]=s[o[h]]
i=o[1],o[1]=o[5],o[5]=o[9],o[9]=o[13],o[13]=i,i=o[2],r=o[6],o[2]=o[10],o[6]=o[14],o[10]=i,o[14]=r,i=o[3],r=o[7],a=o[11],o[3]=o[15],o[7]=i,o[11]=r,o[15]=a
for(var h=0;h<16;h+=4){var u=o[h+0],f=o[h+1],d=o[h+2],g=o[h+3]
a=u^f^d^g,o[h+0]^=a^c[u^f],o[h+1]^=a^c[f^d],o[h+2]^=a^c[d^g],o[h+3]^=a^c[g^u]}for(h=0,n=16*l;h<16;++h,++n)o[h]^=t[n]}for(h=0;h<16;++h)o[h]=s[o[h]]
for(i=o[1],o[1]=o[5],o[5]=o[9],o[9]=o[13],o[13]=i,i=o[2],r=o[6],o[2]=o[10],o[6]=o[14],o[10]=i,o[14]=r,i=o[3],r=o[7],a=o[11],o[3]=o[15],o[7]=i,o[11]=r,o[15]=a,h=0,n=160;h<16;++h,++n)o[h]^=t[n]
return o}function r(t){this.key=e(t),this.buffer=new Uint8Array(16),this.bufferPosition=0}function i(e,a){var r,i,n,s=e.length,o=this.buffer,c=this.bufferPosition,l=[],h=this.iv
for(r=0;r<s;++r)if(o[c]=e[r],!(++c<16)){var u=t(o,this.key)
for(i=0;i<16;++i)u[i]^=h[i]
h=o,l.push(u),o=new Uint8Array(16),c=0}if(this.buffer=o,this.bufferLength=c,this.iv=h,0===l.length)return new Uint8Array([])
var f=16*l.length
if(a){var d=l[l.length-1],g=d[15]
if(g<=16){for(r=15,n=16-g;r>=n;--r)if(d[r]!==g){g=0
break}f-=g,l[l.length-1]=d.subarray(0,16-g)}}var p=new Uint8Array(f)
for(r=0,i=0,n=l.length;r<n;++r,i+=16)p.set(l[r],i)
return p}for(var n=new Uint8Array([141,1,2,4,8,16,32,64,128,27,54,108,216,171,77,154,47,94,188,99,198,151,53,106,212,179,125,250,239,197,145,57,114,228,211,189,97,194,159,37,74,148,51,102,204,131,29,58,116,232,203,141,1,2,4,8,16,32,64,128,27,54,108,216,171,77,154,47,94,188,99,198,151,53,106,212,179,125,250,239,197,145,57,114,228,211,189,97,194,159,37,74,148,51,102,204,131,29,58,116,232,203,141,1,2,4,8,16,32,64,128,27,54,108,216,171,77,154,47,94,188,99,198,151,53,106,212,179,125,250,239,197,145,57,114,228,211,189,97,194,159,37,74,148,51,102,204,131,29,58,116,232,203,141,1,2,4,8,16,32,64,128,27,54,108,216,171,77,154,47,94,188,99,198,151,53,106,212,179,125,250,239,197,145,57,114,228,211,189,97,194,159,37,74,148,51,102,204,131,29,58,116,232,203,141,1,2,4,8,16,32,64,128,27,54,108,216,171,77,154,47,94,188,99,198,151,53,106,212,179,125,250,239,197,145,57,114,228,211,189,97,194,159,37,74,148,51,102,204,131,29,58,116,232,203,141]),s=new Uint8Array([99,124,119,123,242,107,111,197,48,1,103,43,254,215,171,118,202,130,201,125,250,89,71,240,173,212,162,175,156,164,114,192,183,253,147,38,54,63,247,204,52,165,229,241,113,216,49,21,4,199,35,195,24,150,5,154,7,18,128,226,235,39,178,117,9,131,44,26,27,110,90,160,82,59,214,179,41,227,47,132,83,209,0,237,32,252,177,91,106,203,190,57,74,76,88,207,208,239,170,251,67,77,51,133,69,249,2,127,80,60,159,168,81,163,64,143,146,157,56,245,188,182,218,33,16,255,243,210,205,12,19,236,95,151,68,23,196,167,126,61,100,93,25,115,96,129,79,220,34,42,144,136,70,238,184,20,222,94,11,219,224,50,58,10,73,6,36,92,194,211,172,98,145,149,228,121,231,200,55,109,141,213,78,169,108,86,244,234,101,122,174,8,186,120,37,46,28,166,180,198,232,221,116,31,75,189,139,138,112,62,181,102,72,3,246,14,97,53,87,185,134,193,29,158,225,248,152,17,105,217,142,148,155,30,135,233,206,85,40,223,140,161,137,13,191,230,66,104,65,153,45,15,176,84,187,22]),o=new Uint8Array([82,9,106,213,48,54,165,56,191,64,163,158,129,243,215,251,124,227,57,130,155,47,255,135,52,142,67,68,196,222,233,203,84,123,148,50,166,194,35,61,238,76,149,11,66,250,195,78,8,46,161,102,40,217,36,178,118,91,162,73,109,139,209,37,114,248,246,100,134,104,152,22,212,164,92,204,93,101,182,146,108,112,72,80,253,237,185,218,94,21,70,87,167,141,157,132,144,216,171,0,140,188,211,10,247,228,88,5,184,179,69,6,208,44,30,143,202,63,15,2,193,175,189,3,1,19,138,107,58,145,17,65,79,103,220,234,151,242,207,206,240,180,230,115,150,172,116,34,231,173,53,133,226,249,55,232,28,117,223,110,71,241,26,113,29,41,197,137,111,183,98,14,170,24,190,27,252,86,62,75,198,210,121,32,154,219,192,254,120,205,90,244,31,221,168,51,136,7,199,49,177,18,16,89,39,128,236,95,96,81,127,169,25,181,74,13,45,229,122,159,147,201,156,239,160,224,59,77,174,42,245,176,200,235,187,60,131,83,153,97,23,43,4,126,186,119,214,38,225,105,20,99,85,33,12,125]),c=new Uint8Array(256),l=0;l<256;l++)c[l]=l<128?l<<1:l<<1^27
var h=new Uint32Array([0,235474187,470948374,303765277,941896748,908933415,607530554,708780849,1883793496,2118214995,1817866830,1649639237,1215061108,1181045119,1417561698,1517767529,3767586992,4003061179,4236429990,4069246893,3635733660,3602770327,3299278474,3400528769,2430122216,2664543715,2362090238,2193862645,2835123396,2801107407,3035535058,3135740889,3678124923,3576870512,3341394285,3374361702,3810496343,3977675356,4279080257,4043610186,2876494627,2776292904,3076639029,3110650942,2472011535,2640243204,2403728665,2169303058,1001089995,899835584,666464733,699432150,59727847,226906860,530400753,294930682,1273168787,1172967064,1475418501,1509430414,1942435775,2110667444,1876241833,1641816226,2910219766,2743034109,2976151520,3211623147,2505202138,2606453969,2302690252,2269728455,3711829422,3543599269,3240894392,3475313331,3843699074,3943906441,4178062228,4144047775,1306967366,1139781709,1374988112,1610459739,1975683434,2076935265,1775276924,1742315127,1034867998,866637845,566021896,800440835,92987698,193195065,429456164,395441711,1984812685,2017778566,1784663195,1683407248,1315562145,1080094634,1383856311,1551037884,101039829,135050206,437757123,337553864,1042385657,807962610,573804783,742039012,2531067453,2564033334,2328828971,2227573024,2935566865,2700099354,3001755655,3168937228,3868552805,3902563182,4203181171,4102977912,3736164937,3501741890,3265478751,3433712980,1106041591,1340463100,1576976609,1408749034,2043211483,2009195472,1708848333,1809054150,832877231,1068351396,766945465,599762354,159417987,126454664,361929877,463180190,2709260871,2943682380,3178106961,3009879386,2572697195,2538681184,2236228733,2336434550,3509871135,3745345300,3441850377,3274667266,3910161971,3877198648,4110568485,4211818798,2597806476,2497604743,2261089178,2295101073,2733856160,2902087851,3202437046,2968011453,3936291284,3835036895,4136440770,4169408201,3535486456,3702665459,3467192302,3231722213,2051518780,1951317047,1716890410,1750902305,1113818384,1282050075,1584504582,1350078989,168810852,67556463,371049330,404016761,841739592,1008918595,775550814,540080725,3969562369,3801332234,4035489047,4269907996,3569255213,3669462566,3366754619,3332740144,2631065433,2463879762,2160117071,2395588676,2767645557,2868897406,3102011747,3069049960,202008497,33778362,270040487,504459436,875451293,975658646,675039627,641025152,2084704233,1917518562,1615861247,1851332852,1147550661,1248802510,1484005843,1451044056,933301370,967311729,733156972,632953703,260388950,25965917,328671808,496906059,1206477858,1239443753,1543208500,1441952575,2144161806,1908694277,1675577880,1842759443,3610369226,3644379585,3408119516,3307916247,4011190502,3776767469,4077384432,4245618683,2809771154,2842737049,3144396420,3043140495,2673705150,2438237621,2203032232,2370213795])
return r.prototype={decryptBlock:function(e,t){var a,r=e.length,n=this.buffer,s=this.bufferPosition
for(a=0;s<16&&a<r;++a,++s)n[s]=e[a]
return s<16?(this.bufferLength=s,new Uint8Array([])):(this.iv=n,this.buffer=new Uint8Array(16),this.bufferLength=0,this.decryptBlock=i,this.decryptBlock(e.subarray(16),t))},encrypt:function(e,t){var r,i,n,s=e.length,o=this.buffer,c=this.bufferPosition,l=[]
for(t||(t=new Uint8Array(16)),r=0;r<s;++r)if(o[c]=e[r],!(++c<16)){for(i=0;i<16;++i)o[i]^=t[i]
var h=a(o,this.key)
t=h,l.push(h),o=new Uint8Array(16),c=0}if(this.buffer=o,this.bufferLength=c,this.iv=t,0===l.length)return new Uint8Array([])
var u=16*l.length,f=new Uint8Array(u)
for(r=0,i=0,n=l.length;r<n;++r,i+=16)f.set(l[r],i)
return f}},r}(),B=function(){function e(e){var t=new Uint8Array(240),a=1
t.set(e)
for(var r=32,i=1;r<240;++i){if(r%32==16)s=n[s],o=n[o],c=n[c],l=n[l]
else if(r%32==0){var s=t[r-3],o=t[r-2],c=t[r-1],l=t[r-4]
s=n[s],o=n[o],c=n[c],l=n[l],s^=a,(a<<=1)>=256&&(a=255&(27^a))}for(var h=0;h<4;++h)t[r]=s^=t[r-32],r++,t[r]=o^=t[r-32],r++,t[r]=c^=t[r-32],r++,t[r]=l^=t[r-32],r++}return t}function t(e,t){var a=new Uint8Array(16)
a.set(e)
var r,i,n,o,c,h
for(i=0,n=224;i<16;++i,++n)a[i]^=t[n]
for(r=13;r>=1;--r){for(o=a[13],a[13]=a[9],a[9]=a[5],a[5]=a[1],a[1]=o,o=a[14],c=a[10],a[14]=a[6],a[10]=a[2],a[6]=o,a[2]=c,o=a[15],c=a[11],h=a[7],a[15]=a[3],a[11]=o,a[7]=c,a[3]=h,i=0;i<16;++i)a[i]=s[a[i]]
for(i=0,n=16*r;i<16;++i,++n)a[i]^=t[n]
for(i=0;i<16;i+=4){var u=l[a[i]],f=l[a[i+1]],d=l[a[i+2]],g=l[a[i+3]]
o=u^f>>>8^f<<24^d>>>16^d<<16^g>>>24^g<<8,a[i]=o>>>24&255,a[i+1]=o>>16&255,a[i+2]=o>>8&255,a[i+3]=255&o}}for(o=a[13],a[13]=a[9],a[9]=a[5],a[5]=a[1],a[1]=o,o=a[14],c=a[10],a[14]=a[6],a[10]=a[2],a[6]=o,a[2]=c,o=a[15],c=a[11],h=a[7],a[15]=a[3],a[11]=o,a[7]=c,a[3]=h,i=0;i<16;++i)a[i]=s[a[i]],a[i]^=t[i]
return a}function a(e,t){var a,r,i,s,l=new Uint8Array(16)
for(l.set(e),h=0;h<16;++h)l[h]^=t[h]
for(c=1;c<14;c++){for(h=0;h<16;++h)l[h]=n[l[h]]
i=l[1],l[1]=l[5],l[5]=l[9],l[9]=l[13],l[13]=i,i=l[2],r=l[6],l[2]=l[10],l[6]=l[14],l[10]=i,l[14]=r,i=l[3],r=l[7],a=l[11],l[3]=l[15],l[7]=i,l[11]=r,l[15]=a
for(var h=0;h<16;h+=4){var u=l[h+0],f=l[h+1],d=l[h+2],g=l[h+3]
a=u^f^d^g,l[h+0]^=a^o[u^f],l[h+1]^=a^o[f^d],l[h+2]^=a^o[d^g],l[h+3]^=a^o[g^u]}for(h=0,s=16*c;h<16;++h,++s)l[h]^=t[s]}for(h=0;h<16;++h)l[h]=n[l[h]]
for(i=l[1],l[1]=l[5],l[5]=l[9],l[9]=l[13],l[13]=i,i=l[2],r=l[6],l[2]=l[10],l[6]=l[14],l[10]=i,l[14]=r,i=l[3],r=l[7],a=l[11],l[3]=l[15],l[7]=i,l[11]=r,l[15]=a,h=0,s=224;h<16;++h,++s)l[h]^=t[s]
return l}function r(t){this.key=e(t),this.buffer=new Uint8Array(16),this.bufferPosition=0}function i(e,a){var r,i,n,s=e.length,o=this.buffer,c=this.bufferPosition,l=[],h=this.iv
for(r=0;r<s;++r)if(o[c]=e[r],!(++c<16)){var u=t(o,this.key)
for(i=0;i<16;++i)u[i]^=h[i]
h=o,l.push(u),o=new Uint8Array(16),c=0}if(this.buffer=o,this.bufferLength=c,this.iv=h,0===l.length)return new Uint8Array([])
var f=16*l.length
if(a){var d=l[l.length-1],g=d[15]
if(g<=16){for(r=15,n=16-g;r>=n;--r)if(d[r]!==g){g=0
break}f-=g,l[l.length-1]=d.subarray(0,16-g)}}var p=new Uint8Array(f)
for(r=0,i=0,n=l.length;r<n;++r,i+=16)p.set(l[r],i)
return p}for(var n=new Uint8Array([99,124,119,123,242,107,111,197,48,1,103,43,254,215,171,118,202,130,201,125,250,89,71,240,173,212,162,175,156,164,114,192,183,253,147,38,54,63,247,204,52,165,229,241,113,216,49,21,4,199,35,195,24,150,5,154,7,18,128,226,235,39,178,117,9,131,44,26,27,110,90,160,82,59,214,179,41,227,47,132,83,209,0,237,32,252,177,91,106,203,190,57,74,76,88,207,208,239,170,251,67,77,51,133,69,249,2,127,80,60,159,168,81,163,64,143,146,157,56,245,188,182,218,33,16,255,243,210,205,12,19,236,95,151,68,23,196,167,126,61,100,93,25,115,96,129,79,220,34,42,144,136,70,238,184,20,222,94,11,219,224,50,58,10,73,6,36,92,194,211,172,98,145,149,228,121,231,200,55,109,141,213,78,169,108,86,244,234,101,122,174,8,186,120,37,46,28,166,180,198,232,221,116,31,75,189,139,138,112,62,181,102,72,3,246,14,97,53,87,185,134,193,29,158,225,248,152,17,105,217,142,148,155,30,135,233,206,85,40,223,140,161,137,13,191,230,66,104,65,153,45,15,176,84,187,22]),s=new Uint8Array([82,9,106,213,48,54,165,56,191,64,163,158,129,243,215,251,124,227,57,130,155,47,255,135,52,142,67,68,196,222,233,203,84,123,148,50,166,194,35,61,238,76,149,11,66,250,195,78,8,46,161,102,40,217,36,178,118,91,162,73,109,139,209,37,114,248,246,100,134,104,152,22,212,164,92,204,93,101,182,146,108,112,72,80,253,237,185,218,94,21,70,87,167,141,157,132,144,216,171,0,140,188,211,10,247,228,88,5,184,179,69,6,208,44,30,143,202,63,15,2,193,175,189,3,1,19,138,107,58,145,17,65,79,103,220,234,151,242,207,206,240,180,230,115,150,172,116,34,231,173,53,133,226,249,55,232,28,117,223,110,71,241,26,113,29,41,197,137,111,183,98,14,170,24,190,27,252,86,62,75,198,210,121,32,154,219,192,254,120,205,90,244,31,221,168,51,136,7,199,49,177,18,16,89,39,128,236,95,96,81,127,169,25,181,74,13,45,229,122,159,147,201,156,239,160,224,59,77,174,42,245,176,200,235,187,60,131,83,153,97,23,43,4,126,186,119,214,38,225,105,20,99,85,33,12,125]),o=new Uint8Array(256),c=0;c<256;c++)o[c]=c<128?c<<1:c<<1^27
var l=new Uint32Array([0,235474187,470948374,303765277,941896748,908933415,607530554,708780849,1883793496,2118214995,1817866830,1649639237,1215061108,1181045119,1417561698,1517767529,3767586992,4003061179,4236429990,4069246893,3635733660,3602770327,3299278474,3400528769,2430122216,2664543715,2362090238,2193862645,2835123396,2801107407,3035535058,3135740889,3678124923,3576870512,3341394285,3374361702,3810496343,3977675356,4279080257,4043610186,2876494627,2776292904,3076639029,3110650942,2472011535,2640243204,2403728665,2169303058,1001089995,899835584,666464733,699432150,59727847,226906860,530400753,294930682,1273168787,1172967064,1475418501,1509430414,1942435775,2110667444,1876241833,1641816226,2910219766,2743034109,2976151520,3211623147,2505202138,2606453969,2302690252,2269728455,3711829422,3543599269,3240894392,3475313331,3843699074,3943906441,4178062228,4144047775,1306967366,1139781709,1374988112,1610459739,1975683434,2076935265,1775276924,1742315127,1034867998,866637845,566021896,800440835,92987698,193195065,429456164,395441711,1984812685,2017778566,1784663195,1683407248,1315562145,1080094634,1383856311,1551037884,101039829,135050206,437757123,337553864,1042385657,807962610,573804783,742039012,2531067453,2564033334,2328828971,2227573024,2935566865,2700099354,3001755655,3168937228,3868552805,3902563182,4203181171,4102977912,3736164937,3501741890,3265478751,3433712980,1106041591,1340463100,1576976609,1408749034,2043211483,2009195472,1708848333,1809054150,832877231,1068351396,766945465,599762354,159417987,126454664,361929877,463180190,2709260871,2943682380,3178106961,3009879386,2572697195,2538681184,2236228733,2336434550,3509871135,3745345300,3441850377,3274667266,3910161971,3877198648,4110568485,4211818798,2597806476,2497604743,2261089178,2295101073,2733856160,2902087851,3202437046,2968011453,3936291284,3835036895,4136440770,4169408201,3535486456,3702665459,3467192302,3231722213,2051518780,1951317047,1716890410,1750902305,1113818384,1282050075,1584504582,1350078989,168810852,67556463,371049330,404016761,841739592,1008918595,775550814,540080725,3969562369,3801332234,4035489047,4269907996,3569255213,3669462566,3366754619,3332740144,2631065433,2463879762,2160117071,2395588676,2767645557,2868897406,3102011747,3069049960,202008497,33778362,270040487,504459436,875451293,975658646,675039627,641025152,2084704233,1917518562,1615861247,1851332852,1147550661,1248802510,1484005843,1451044056,933301370,967311729,733156972,632953703,260388950,25965917,328671808,496906059,1206477858,1239443753,1543208500,1441952575,2144161806,1908694277,1675577880,1842759443,3610369226,3644379585,3408119516,3307916247,4011190502,3776767469,4077384432,4245618683,2809771154,2842737049,3144396420,3043140495,2673705150,2438237621,2203032232,2370213795])
return r.prototype={decryptBlock:function(e,t,a){var r,n=e.length,s=this.buffer,o=this.bufferPosition
if(a)this.iv=a
else{for(r=0;o<16&&r<n;++r,++o)s[o]=e[r]
if(o<16)return this.bufferLength=o,new Uint8Array([])
this.iv=s,e=e.subarray(16)}return this.buffer=new Uint8Array(16),this.bufferLength=0,this.decryptBlock=i,this.decryptBlock(e,t)},encrypt:function(e,t){var r,i,n,s=e.length,o=this.buffer,c=this.bufferPosition,l=[]
for(t||(t=new Uint8Array(16)),r=0;r<s;++r)if(o[c]=e[r],!(++c<16)){for(i=0;i<16;++i)o[i]^=t[i]
var h=a(o,this.key)
this.iv=h,l.push(h),o=new Uint8Array(16),c=0}if(this.buffer=o,this.bufferLength=c,this.iv=t,0===l.length)return new Uint8Array([])
var u=16*l.length,f=new Uint8Array(u)
for(r=0,i=0,n=l.length;r<n;++r,i+=16)f.set(l[r],i)
return f}},r}(),R=function(){function e(e,t){if(e.length!==t.length)return!1
for(var a=0;a<e.length;a++)if(e[a]!==t[a])return!1
return!0}function t(){}return t.prototype={checkOwnerPassword:function(t,a,r,i){var n=new Uint8Array(t.length+56)
return n.set(t,0),n.set(a,t.length),n.set(r,t.length+a.length),e(x(n,0,n.length),i)},checkUserPassword:function(t,a,r){var i=new Uint8Array(t.length+8)
return i.set(t,0),i.set(a,t.length),e(x(i,0,i.length),r)},getOwnerKey:function(e,t,a,r){var i=new Uint8Array(e.length+56)
i.set(e,0),i.set(t,e.length),i.set(a,e.length+t.length)
var n=x(i,0,i.length)
return new B(n).decryptBlock(r,!1,new Uint8Array(16))},getUserKey:function(e,t,a){var r=new Uint8Array(e.length+8)
r.set(e,0),r.set(t,e.length)
var i=x(r,0,r.length)
return new B(i).decryptBlock(a,!1,new Uint8Array(16))}},t}(),T=function(){function e(e,t){var a=new Uint8Array(e.length+t.length)
return a.set(e,0),a.set(t,e.length),a}function t(t,a,r){for(var i=x(a,0,a.length).subarray(0,32),n=[0],s=0;s<64||n[n.length-1]>s-32;){var o=t.length+i.length+r.length,c=new Uint8Array(64*o),l=e(t,i)
l=e(l,r)
for(var h=0,u=0;h<64;h++,u+=o)c.set(l,u)
n=new I(i.subarray(0,16)).encrypt(c,i.subarray(16,32))
for(var f=0,d=0;d<16;d++)f*=1,f%=3,f+=(n[d]>>>0)%3,f%=3
0===f?i=x(n,0,n.length):1===f?i=S(n,0,n.length):2===f&&(i=C(n,0,n.length)),s++}return i.subarray(0,32)}function a(){}function r(e,t){if(e.length!==t.length)return!1
for(var a=0;a<e.length;a++)if(e[a]!==t[a])return!1
return!0}return a.prototype={hash:function(e,a,r){return t(e,a,r)},checkOwnerPassword:function(e,a,i,n){var s=new Uint8Array(e.length+56)
return s.set(e,0),s.set(a,e.length),s.set(i,e.length+a.length),r(t(e,s,i),n)},checkUserPassword:function(e,a,i){var n=new Uint8Array(e.length+8)
return n.set(e,0),n.set(a,e.length),r(t(e,n,[]),i)},getOwnerKey:function(e,a,r,i){var n=new Uint8Array(e.length+56)
n.set(e,0),n.set(a,e.length),n.set(r,e.length+a.length)
var s=t(e,n,r)
return new B(s).decryptBlock(i,!1,new Uint8Array(16))},getUserKey:function(e,a,r){var i=new Uint8Array(e.length+8)
i.set(e,0),i.set(a,e.length)
var n=t(e,i,[])
return new B(n).decryptBlock(r,!1,new Uint8Array(16))}},a}(),O=function(){function e(e,t){this.StringCipherConstructor=e,this.StreamCipherConstructor=t}return e.prototype={createStream:function(e,t){var a=new this.StreamCipherConstructor
return new v(e,t,function(e,t){return a.decryptBlock(e,t)})},decryptString:function(e){var t=new this.StringCipherConstructor,a=d(e)
return a=t.decryptBlock(a,!0),c(a)}},e}(),P=function(){function e(e,t,a,r,i,n,s,o,c,l,h,u){if(t){var f=Math.min(127,t.length)
t=t.subarray(0,f)}else t=[]
var d
return d=6===e?new T:new R,d.checkUserPassword(t,o,s)?d.getUserKey(t,c,h):t.length&&d.checkOwnerPassword(t,r,n,a)?d.getOwnerKey(t,i,n,l):null}function t(e,t,a,r,i,n,s,o){var l,h,u=40+a.length+e.length,f=new Uint8Array(u),d=0
if(t)for(h=Math.min(32,t.length);d<h;++d)f[d]=t[d]
for(l=0;d<32;)f[d++]=c[l++]
for(l=0,h=a.length;l<h;++l)f[d++]=a[l]
for(f[d++]=255&i,f[d++]=i>>8&255,f[d++]=i>>16&255,f[d++]=i>>>24&255,l=0,h=e.length;l<h;++l)f[d++]=e[l]
n>=4&&!o&&(f[d++]=255,f[d++]=255,f[d++]=255,f[d++]=255)
var g=k(f,0,d),p=s>>3
if(n>=3)for(l=0;l<50;++l)g=k(g,0,p)
var m,b,v=g.subarray(0,p)
if(n>=3){for(d=0;d<32;++d)f[d]=c[d]
for(l=0,h=e.length;l<h;++l)f[d++]=e[l]
m=new y(v),b=m.encryptBlock(k(f,0,d)),h=v.length
var w,x=new Uint8Array(h)
for(l=1;l<=19;++l){for(w=0;w<h;++w)x[w]=v[w]^l
m=new y(x),b=m.encryptBlock(b)}for(l=0,h=b.length;l<h;++l)if(r[l]!==b[l])return null}else for(m=new y(v),b=m.encryptBlock(c),l=0,h=b.length;l<h;++l)if(r[l]!==b[l])return null
return v}function a(e,t,a,r){var i,n,s=new Uint8Array(32),o=0
for(n=Math.min(32,e.length);o<n;++o)s[o]=e[o]
for(i=0;o<32;)s[o++]=c[i++]
var l=k(s,0,o),h=r>>3
if(a>=3)for(i=0;i<50;++i)l=k(l,0,l.length)
var u,f
if(a>=3){f=t
var d,g=new Uint8Array(h)
for(i=19;i>=0;i--){for(d=0;d<h;++d)g[d]=l[d]^i
u=new y(g),f=u.encryptBlock(f)}}else u=new y(l.subarray(0,h)),f=u.encryptBlock(t)
return f}function r(r,i,n){var c=r.get("Filter")
m(c,"Standard")||h("unknown encryption method"),this.dict=r
var u=r.get("V");(!f(u)||1!==u&&2!==u&&4!==u&&5!==u)&&h("unsupported encryption algorithm"),this.algorithm=u
var p=r.get("Length")
if(!p)if(u<=3)p=40
else{var y=r.get("CF"),k=r.get("StmF")
if(b(y)&&m(k)){y.suppressEncryption=!0
var w=y.get(k.name)
p=w&&w.get("Length")||128,p<40&&(p<<=3)}}(!f(p)||p<40||p%8!=0)&&h("invalid key length")
var x=d(r.get("O")).subarray(0,32),C=d(r.get("U")).subarray(0,32),S=r.get("P"),A=r.get("R"),I=(4===u||5===u)&&r.get("EncryptMetadata")!==!1
this.encryptMetadata=I
var B,R=d(i)
if(n){if(6===A)try{n=g(n)}catch(e){l("CipherTransformFactory: Unable to convert UTF8 encoded password.")}B=d(n)}var T
if(5!==u)T=t(R,B,x,C,S,A,p,I)
else{T=e(A,B,x,d(r.get("O")).subarray(32,40),d(r.get("O")).subarray(40,48),d(r.get("U")).subarray(0,48),C,d(r.get("U")).subarray(32,40),d(r.get("U")).subarray(40,48),d(r.get("OE")),d(r.get("UE")),d(r.get("Perms")))}if(!T&&!n)throw new s("No password given",o.NEED_PASSWORD)
if(!T&&n){T=t(R,a(B,x,A,p),x,C,S,A,p,I)}if(!T)throw new s("Incorrect Password",o.INCORRECT_PASSWORD)
if(this.encryptionKey=T,u>=4){var O=r.get("CF")
b(O)&&(O.suppressEncryption=!0),this.cf=O,this.stmf=r.get("StmF")||v,this.strf=r.get("StrF")||v,this.eff=r.get("EFF")||this.stmf}}function i(e,t,a,r){var i,n,s=new Uint8Array(a.length+9)
for(i=0,n=a.length;i<n;++i)s[i]=a[i]
return s[i++]=255&e,s[i++]=e>>8&255,s[i++]=e>>16&255,s[i++]=255&t,s[i++]=t>>8&255,r&&(s[i++]=115,s[i++]=65,s[i++]=108,s[i++]=84),k(s,0,i).subarray(0,Math.min(a.length+5,16))}function n(e,t,a,r,n){u(m(t),"Invalid crypt filter name.")
var s,o=e.get(t.name)
return null!==o&&void 0!==o&&(s=o.get("CFM")),s&&"None"!==s.name?"V2"===s.name?function(){return new y(i(a,r,n,!1))}:"AESV2"===s.name?function(){return new I(i(a,r,n,!0))}:"AESV3"===s.name?function(){return new B(n)}:void h("Unknown crypto method"):function(){return new A}}var c=new Uint8Array([40,191,78,94,78,117,138,65,100,0,78,86,255,250,1,8,46,46,0,182,208,104,62,128,47,12,169,254,100,83,105,122]),v=p.get("Identity")
return r.prototype={createCipherTransform:function(e,t){if(4===this.algorithm||5===this.algorithm)return new O(n(this.cf,this.stmf,e,t,this.encryptionKey),n(this.cf,this.strf,e,t,this.encryptionKey))
var a=i(e,t,this.encryptionKey,!1),r=function(){return new y(a)}
return new O(r,r)}},r}()
t.AES128Cipher=I,t.AES256Cipher=B,t.ARCFourCipher=y,t.CipherTransformFactory=P,t.PDF17=R,t.PDF20=T,t.calculateMD5=k,t.calculateSHA256=x,t.calculateSHA384=S,t.calculateSHA512=C},function(e,t,a){"use strict"
var r=a(0),i=a(1),n=a(2),s=a(5),o=a(27),c=a(3),l=a(31),h=a(26),u=a(6),f=a(32),d=a(23),g=a(30),p=a(21),m=a(4),b=a(17),v=a(18),y=a(7),k=r.FONT_IDENTITY_MATRIX,w=r.IDENTITY_MATRIX,x=r.UNSUPPORTED_FEATURES,C=r.ImageKind,S=r.OPS,A=r.TextRenderingMode,I=r.CMapCompressionType,B=r.Util,R=r.assert,T=r.createPromiseCapability,O=r.error,P=r.info,M=r.isArray,E=r.isNum,L=r.isString,D=r.getLookupTableFactory,F=r.warn,q=i.Dict,U=i.Name,N=i.isEOF,j=i.isCmd,_=i.isDict,z=i.isName,H=i.isRef,G=i.isStream,X=n.DecodeStream,V=n.JpegStream,W=n.Stream,K=s.Lexer,Y=s.Parser,J=o.PDFImage,Z=c.ColorSpace,Q=l.MurmurHash3_64,$=h.ErrorFont,ee=h.FontFlags,te=h.Font,ae=h.IdentityToUnicodeMap,re=h.ToUnicodeMap,ie=h.getFontType,ne=u.isPDFFunction,se=u.PDFFunction,oe=f.Pattern,ce=f.getTilingPatternIR,le=d.CMapFactory,he=d.IdentityCMap,ue=g.getMetrics,fe=p.bidi,de=m.WinAnsiEncoding,ge=m.StandardEncoding,pe=m.MacRomanEncoding,me=m.SymbolSetEncoding,be=m.ZapfDingbatsEncoding,ve=m.getEncoding,ye=b.getStdFontMap,ke=b.getSerifFonts,we=b.getSymbolsFonts,xe=v.getNormalizedUnicodes,Ce=v.reverseIfRtl,Se=v.getUnicodeForGlyph,Ae=y.getGlyphsUnicode,Ie=function(){function e(e,t,a,r){this.xref=e,this.resources=t,this.handler=a,this.forceDataSchema=r}function t(e,t,a,i,n,s,o,c){this.pdfManager=e,this.xref=t,this.handler=a,this.pageIndex=i,this.idFactory=n,this.fontCache=s,this.builtInCMapCache=o,this.options=c||r,this.fetchBuiltInCMap=function(e){var t=o[e]
return t?Promise.resolve(t):a.sendWithPromise("FetchBuiltInCMap",{name:e}).then(function(t){return t.compressionType!==I.NONE&&(o[e]=t),t})}}function a(){this.reset()}var r={forceDataSchema:!1,maxImageSize:-1,disableFontFace:!1,disableNativeImageDecoder:!1}
e.prototype={canDecode:function(t){return t instanceof V&&e.isDecodable(t,this.xref,this.resources)},decode:function(e){var t=e.dict,a=t.get("ColorSpace","CS")
a=Z.parse(a,this.xref,this.resources)
var r=a.numComps
return this.handler.sendWithPromise("JpegDecode",[e.getIR(this.forceDataSchema),r]).then(function(t){var a=t.data
return new W(a,0,a.length,e.dict)})}},e.isSupported=function(e,t,a){var r=e.dict
if(r.has("DecodeParms")||r.has("DP"))return!1
var i=Z.parse(r.get("ColorSpace","CS"),t,a)
return("DeviceGray"===i.name||"DeviceRGB"===i.name)&&i.isDefaultDecode(r.getArray("Decode","D"))},e.isDecodable=function(e,t,a){var r=e.dict
if(r.has("DecodeParms")||r.has("DP"))return!1
var i=Z.parse(r.get("ColorSpace","CS"),t,a)
return(1===i.numComps||3===i.numComps)&&i.isDefaultDecode(r.getArray("Decode","D"))}
a.prototype={check:function(){return!(++this.checked<100)&&(this.checked=0,this.endTime<=Date.now())},reset:function(){this.endTime=Date.now()+20,this.checked=0}}
var i=Promise.resolve()
return t.prototype={hasBlendModes:function(e){if(!_(e))return!1
var t=Object.create(null)
e.objId&&(t[e.objId]=!0)
for(var a=[e],r=this.xref;a.length;){var i,n,s,o=a.shift(),c=o.get("ExtGState")
if(_(c)){var l=c.getKeys()
for(n=0,s=l.length;n<s;n++){i=l[n]
var h=c.get(i),u=h.get("BM")
if(z(u)&&"Normal"!==u.name)return!0}}var f=o.get("XObject")
if(_(f)){var d=f.getKeys()
for(n=0,s=d.length;n<s;n++){i=d[n]
var g=f.getRaw(i)
if(H(g)){if(t[g.toString()])continue
g=r.fetch(g)}if(G(g)){if(g.dict.objId){if(t[g.dict.objId])continue
t[g.dict.objId]=!0}var p=g.dict.get("Resources")
!_(p)||p.objId&&t[p.objId]||(a.push(p),p.objId&&(t[p.objId]=!0))}}}}return!1},buildFormXObject:function(e,t,a,r,i,n){var s=t.dict.getArray("Matrix"),o=t.dict.getArray("BBox"),c=t.dict.get("Group")
if(c){var l,h={matrix:s,bbox:o,smask:a,isolated:!1,knockout:!1},u=c.get("S")
z(u,"Transparency")&&(h.isolated=c.get("I")||!1,h.knockout=c.get("K")||!1,l=c.has("CS")?Z.parse(c.get("CS"),this.xref,e):null),a&&a.backdrop&&(l=l||Z.singletons.rgb,a.backdrop=l.getRgb(a.backdrop,0)),r.addOp(S.beginGroup,[h])}return r.addOp(S.paintFormXObjectBegin,[s,o]),this.getOperatorList(t,i,t.dict.get("Resources")||e,r,n).then(function(){r.addOp(S.paintFormXObjectEnd,[]),c&&r.addOp(S.endGroup,[h])})},buildPaintImageXObject:function(t,a,r,i,n,s){var o=this,c=a.dict,l=c.get("Width","W"),h=c.get("Height","H")
if(!(l&&E(l)&&h&&E(h)))return void F("Image dimensions are missing, or not numbers.")
var u=this.options.maxImageSize
if(u!==-1&&l*h>u)return void F("Image exceeded maximum allowed size and was removed.")
var f,d,g=c.get("ImageMask","IM")||!1
if(g){var p=c.get("Width","W"),m=c.get("Height","H"),b=p+7>>3,v=a.getBytes(b*m),y=c.getArray("Decode","D"),k=!!y&&y[0]>0
return f=J.createMask(v,p,m,a instanceof X,k),f.cached=!0,d=[f],i.addOp(S.paintImageMaskXObject,d),void(n&&(s[n]={fn:S.paintImageMaskXObject,args:d}))}var w=c.get("SMask","SM")||!1,x=c.get("Mask")||!1
if(r&&!w&&!x&&!(a instanceof V)&&l+h<200){return f=new J(this.xref,t,a,r,null,null).createImageData(!0),void i.addOp(S.paintInlineImageXObject,[f])}var C=!this.options.disableNativeImageDecoder,A="img_"+this.idFactory.createObjId()
if(i.addDependency(A),d=[A,l,h],C&&!w&&!x&&a instanceof V&&e.isSupported(a,this.xref,t))return i.addOp(S.paintJpegXObject,d),void this.handler.send("obj",[A,this.pageIndex,"JpegStream",a.getIR(this.options.forceDataSchema)])
var I=null
C&&(a instanceof V||x instanceof V||w instanceof V)&&(I=new e(o.xref,t,o.handler,o.options.forceDataSchema)),J.buildImage(o.handler,o.xref,t,a,r,I).then(function(e){var t=e.createImageData(!1)
o.handler.send("obj",[A,o.pageIndex,"Image",t],[t.data.buffer])}).then(void 0,function(e){F("Unable to decode image: "+e),o.handler.send("obj",[A,o.pageIndex,"Image",null])}),i.addOp(S.paintImageXObject,d),n&&(s[n]={fn:S.paintImageXObject,args:d})},handleSMask:function(e,t,a,r,i){var n=e.get("G"),s={subtype:e.get("S").name,backdrop:e.get("BC")},o=e.get("TR")
if(ne(o)){for(var c=se.parse(this.xref,o),l=new Uint8Array(256),h=new Float32Array(1),u=0;u<256;u++)h[0]=u/255,c(h,0,h,0),l[u]=255*h[0]|0
s.transferMap=l}return this.buildFormXObject(t,n,s,a,r,i.state.clone())},handleTilingType:function(e,t,a,r,i,n,s){var o=new Re,c=[i.get("Resources"),a],l=q.merge(this.xref,c)
return this.getOperatorList(r,s,l,o).then(function(){n.addDependencies(o.dependencies),n.addOp(e,ce({fnArray:o.fnArray,argsArray:o.argsArray},i,t))})},handleSetFont:function(e,t,a,r,i,n){var s
t&&(t=t.slice(),s=t[0].name)
var o=this
return this.loadFont(s,a,e).then(function(t){return t.font.isType3Font?t.loadType3Data(o,e,r,i).then(function(){return t},function(e){return o.handler.send("UnsupportedFeature",{featureId:x.font}),new Be("g_font_error",new $("Type3 font load error: "+e),t.font)}):t}).then(function(e){return n.font=e.font,e.send(o.handler),e.loadedName})},handleText:function(e,t){var a=t.font,r=a.charsToGlyphs(e),i=!!(t.textRenderingMode&A.ADD_TO_PATH_FLAG)
if(a.data&&(i||this.options.disableFontFace))for(var n=function(e){if(!a.renderer.hasBuiltPath(e)){var t=a.renderer.getPathJs(e)
this.handler.send("commonobj",[a.loadedName+"_path_"+e,"FontPath",t])}}.bind(this),s=0,o=r.length;s<o;s++){var c=r[s]
n(c.fontChar)
var l=c.accent
l&&l.fontChar&&n(l.fontChar)}return r},setGState:function(e,t,a,r,i){for(var n=[],s=t.getKeys(),o=this,c=Promise.resolve(),l=0,h=s.length;l<h;l++){var u=s[l],f=t.get(u)
switch(u){case"Type":break
case"LW":case"LC":case"LJ":case"ML":case"D":case"RI":case"FL":case"CA":case"ca":n.push([u,f])
break
case"Font":c=c.then(function(){return o.handleSetFont(e,null,f[0],a,r,i.state).then(function(e){a.addDependency(e),n.push([u,[e,f[1]]])})})
break
case"BM":n.push([u,f])
break
case"SMask":if(z(f,"None")){n.push([u,!1])
break}_(f)?(c=c.then(function(t){return o.handleSMask(t,e,a,r,i)}.bind(this,f)),n.push([u,!0])):F("Unsupported SMask type")
break
case"OP":case"op":case"OPM":case"BG":case"BG2":case"UCR":case"UCR2":case"TR":case"TR2":case"HT":case"SM":case"SA":case"AIS":case"TK":P("graphic state operator "+u)
break
default:P("Unknown graphic state operator "+u)}}return c.then(function(){n.length>0&&a.addOp(S.setGState,[n])})},loadFont:function(e,t,a){function r(){return Promise.resolve(new Be("g_font_error",new $("Font "+e+" is not available"),t))}var i,n=this.xref
if(t)R(H(t)),i=t
else{var s=a.get("Font")
if(!s)return F("fontRes not available"),r()
i=s.getRaw(e)}if(!i)return F("fontRef not available"),r()
if(this.fontCache.has(i))return this.fontCache.get(i)
if(t=n.fetchIfRef(i),!_(t))return r()
if(t.translated)return t.translated
var o,c=T(),l=this.preEvaluateFont(t),h=l.descriptor,u=H(i)
if(u&&(o=i.toString()),_(h)){h.fontAliases||(h.fontAliases=Object.create(null))
var f=h.fontAliases,d=l.hash
if(f[d]){var g=f[d].aliasRef
if(u&&g&&this.fontCache.has(g))return this.fontCache.putAlias(i,g),this.fontCache.get(i)}else f[d]={fontID:te.getFontID()}
u&&(f[d].aliasRef=i),o=f[d].fontID}u?this.fontCache.put(i,c.promise):(o||(o=this.idFactory.createObjId()),this.fontCache.put("id_"+o,c.promise)),R(o,'The "fontID" must be defined.'),t.loadedName="g_"+this.pdfManager.docId+"_f"+o,t.translated=c.promise
var p
try{p=this.translateFont(l)}catch(e){p=Promise.reject(e)}var m=this
return p.then(function(e){if(void 0!==e.fontType){n.stats.fontTypes[e.fontType]=!0}c.resolve(new Be(t.loadedName,e,t))},function(e){m.handler.send("UnsupportedFeature",{featureId:x.font})
try{var a=l.descriptor,r=a&&a.get("FontFile3"),i=r&&r.get("Subtype"),s=ie(l.type,i&&i.name)
n.stats.fontTypes[s]=!0}catch(e){}c.resolve(new Be(t.loadedName,new $(e instanceof Error?e.message:e),t))}),c.promise},buildPath:function(e,t,a){var r=e.length-1
if(a||(a=[]),r<0||e.fnArray[r]!==S.constructPath)e.addOp(S.constructPath,[[t],a])
else{var i=e.argsArray[r]
i[0].push(t),Array.prototype.push.apply(i[1],a)}},handleColorN:function(e,t,a,r,i,n,s){var o,c=a[a.length-1]
if(z(c)&&(o=i.get(c.name))){var l=G(o)?o.dict:o,h=l.get("PatternType")
if(1===h){var u=r.base?r.base.getRgb(a,0):null
return this.handleTilingType(t,u,n,o,l,e,s)}if(2===h){var f=l.get("Shading"),d=l.getArray("Matrix")
return o=oe.parseShading(f,d,this.xref,n,this.handler),e.addOp(t,o.getIR()),Promise.resolve()}return Promise.reject("Unknown PatternType: "+h)}return e.addOp(t,a),Promise.resolve()},getOperatorList:function(e,t,r,n,s){var o=this,c=this.xref,l=Object.create(null)
R(n),r=r||q.empty
var h=r.get("XObject")||q.empty,u=r.get("Pattern")||q.empty,f=new Te(s||new Pe),d=new Me(e,c,f),g=new a
return new Promise(function e(a,s){var p=function(t){t.then(function(){try{e(a,s)}catch(e){s(e)}},s)}
t.ensureNotTerminated(),g.reset()
for(var m,b,v,y,k={};!(m=g.check())&&(k.args=null,d.read(k));){var w=k.args,x=k.fn
switch(0|x){case S.paintXObject:if(w[0].code)break
var C=w[0].name
if(!C){F("XObject must be referred to by name.")
continue}if(void 0!==l[C]){n.addOp(l[C].fn,l[C].args),w=null
continue}var A=h.get(C)
if(A){R(G(A),"XObject should be a stream")
var I=A.dict.get("Subtype")
if(R(z(I),"XObject should have a Name subtype"),"Form"===I.name)return f.save(),void p(o.buildFormXObject(r,A,null,n,t,f.state.clone()).then(function(){f.restore()}))
if("Image"===I.name){o.buildPaintImageXObject(r,A,!1,n,C,l),w=null
continue}if("PS"===I.name){P("Ignored XObject subtype PS")
continue}O("Unhandled XObject subtype "+I.name)}break
case S.setFont:var B=w[1]
return void p(o.handleSetFont(r,w,null,n,t,f.state).then(function(e){n.addDependency(e),n.addOp(S.setFont,[e,B])}))
case S.endInlineImage:var T=w[0].cacheKey
if(T){var M=l[T]
if(void 0!==M){n.addOp(M.fn,M.args),w=null
continue}}o.buildPaintImageXObject(r,w[0],!0,n,T,l),w=null
continue
case S.showText:w[0]=o.handleText(w[0],f.state)
break
case S.showSpacedText:var D=w[0],U=[],N=D.length,j=f.state
for(b=0;b<N;++b){var H=D[b]
L(H)?Array.prototype.push.apply(U,o.handleText(H,j)):E(H)&&U.push(H)}w[0]=U,x=S.showText
break
case S.nextLineShowText:n.addOp(S.nextLine),w[0]=o.handleText(w[0],f.state),x=S.showText
break
case S.nextLineSetSpacingShowText:n.addOp(S.nextLine),n.addOp(S.setWordSpacing,[w.shift()]),n.addOp(S.setCharSpacing,[w.shift()]),w[0]=o.handleText(w[0],f.state),x=S.showText
break
case S.setTextRenderingMode:f.state.textRenderingMode=w[0]
break
case S.setFillColorSpace:f.state.fillColorSpace=Z.parse(w[0],c,r)
continue
case S.setStrokeColorSpace:f.state.strokeColorSpace=Z.parse(w[0],c,r)
continue
case S.setFillColor:y=f.state.fillColorSpace,w=y.getRgb(w,0),x=S.setFillRGBColor
break
case S.setStrokeColor:y=f.state.strokeColorSpace,w=y.getRgb(w,0),x=S.setStrokeRGBColor
break
case S.setFillGray:f.state.fillColorSpace=Z.singletons.gray,w=Z.singletons.gray.getRgb(w,0),x=S.setFillRGBColor
break
case S.setStrokeGray:f.state.strokeColorSpace=Z.singletons.gray,w=Z.singletons.gray.getRgb(w,0),x=S.setStrokeRGBColor
break
case S.setFillCMYKColor:f.state.fillColorSpace=Z.singletons.cmyk,w=Z.singletons.cmyk.getRgb(w,0),x=S.setFillRGBColor
break
case S.setStrokeCMYKColor:f.state.strokeColorSpace=Z.singletons.cmyk,w=Z.singletons.cmyk.getRgb(w,0),x=S.setStrokeRGBColor
break
case S.setFillRGBColor:f.state.fillColorSpace=Z.singletons.rgb,w=Z.singletons.rgb.getRgb(w,0)
break
case S.setStrokeRGBColor:f.state.strokeColorSpace=Z.singletons.rgb,w=Z.singletons.rgb.getRgb(w,0)
break
case S.setFillColorN:if(y=f.state.fillColorSpace,"Pattern"===y.name)return void p(o.handleColorN(n,S.setFillColorN,w,y,u,r,t))
w=y.getRgb(w,0),x=S.setFillRGBColor
break
case S.setStrokeColorN:if(y=f.state.strokeColorSpace,"Pattern"===y.name)return void p(o.handleColorN(n,S.setStrokeColorN,w,y,u,r,t))
w=y.getRgb(w,0),x=S.setStrokeRGBColor
break
case S.shadingFill:var X=r.get("Shading")
R(X,"No shading resource found")
var V=X.get(w[0].name)
R(V,"No shading object found")
w=[oe.parseShading(V,null,c,r,o.handler).getIR()],x=S.shadingFill
break
case S.setGState:var W=w[0],K=r.get("ExtGState")
if(!_(K)||!K.has(W.name))break
var Y=K.get(W.name)
return void p(o.setGState(r,Y,n,t,f))
case S.moveTo:case S.lineTo:case S.curveTo:case S.curveTo2:case S.curveTo3:case S.closePath:case S.rectangle:o.buildPath(n,x,w)
continue
case S.markPoint:case S.markPointProps:case S.beginMarkedContent:case S.beginMarkedContentProps:case S.endMarkedContent:case S.beginCompat:case S.endCompat:continue
default:if(null!==w){for(b=0,v=w.length;b<v&&!(w[b]instanceof q);b++);if(b<v){F("getOperatorList - ignoring operator: "+x)
continue}}}n.addOp(x,w)}if(m)return void p(i)
for(b=0,v=d.savedStatesDepth;b<v;b++)n.addOp(S.restore,[])
a()})},getTextContent:function(e,t,r,n,s,o){function c(){if(b.initialized)return b
var e=I.font
e.loadedName in m.styles||(m.styles[e.loadedName]={fontFamily:e.fallbackName,ascent:e.ascent,descent:e.descent,vertical:e.vertical}),b.fontName=e.loadedName
var t=[I.fontSize*I.textHScale,0,0,I.fontSize,0,I.textRise]
if(e.isType3Font&&I.fontMatrix!==k&&1===I.fontSize){var a=e.bbox[3]-e.bbox[1]
a>0&&(a*=I.fontMatrix[3],t[3]*=a)}var r=B.transform(I.ctm,B.transform(I.textMatrix,t))
b.transform=r,e.vertical?(b.width=Math.sqrt(r[0]*r[0]+r[1]*r[1]),b.height=0,b.vertical=!0):(b.width=0,b.height=Math.sqrt(r[2]*r[2]+r[3]*r[3]),b.vertical=!1)
var i=I.textLineMatrix[0],n=I.textLineMatrix[1],s=Math.sqrt(i*i+n*n)
i=I.ctm[0],n=I.ctm[1]
var o=Math.sqrt(i*i+n*n)
b.textAdvanceScale=o*s,b.lastAdvanceWidth=0,b.lastAdvanceHeight=0
var c=e.spaceWidth/1e3*I.fontSize
return c?(b.spaceWidth=c,b.fakeSpaceMin=c*v,b.fakeMultiSpaceMin=c*y,b.fakeMultiSpaceMax=c*x,b.textRunBreakAllowed=!e.isMonospace):(b.spaceWidth=0,b.fakeSpaceMin=1/0,b.fakeMultiSpaceMin=1/0,b.fakeMultiSpaceMax=0,b.textRunBreakAllowed=!1),b.initialized=!0,b}function l(e){for(var t,a=0,r=e.length;a<r&&(t=e.charCodeAt(a))>=32&&t<=127;)a++
return a<r?e.replace(p," "):e}function h(e){var t=e.str.join(""),a=fe(t,-1,e.vertical)
return{str:s?l(a.str):a.str,dir:a.dir,width:e.width,height:e.height,transform:e.transform,fontName:e.fontName}}function u(e,t){return C.loadFont(e,t,r).then(function(e){I.font=e.font,I.fontMatrix=e.font.fontMatrix||k})}function f(e){for(var t=I.font,a=c(),r=0,i=0,n=t.charsToGlyphs(e),s=0;s<n.length;s++){var o=n[s],l=null
l=t.vertical&&o.vmetric?o.vmetric[0]:o.width
var h=o.unicode,u=xe()
void 0!==u[h]&&(h=u[h]),h=Ce(h)
var f=I.charSpacing
if(o.isSpace){var g=I.wordSpacing
f+=g,g>0&&d(g,a.str)}var p=0,m=0
if(t.vertical){m=l*I.fontMatrix[0]*I.fontSize+f,i+=m}else{p=(l*I.fontMatrix[0]*I.fontSize+f)*I.textHScale,r+=p}I.translateTextMatrix(p,m),a.str.push(h)}return t.vertical?(a.lastAdvanceHeight=i,a.height+=Math.abs(i)):(a.lastAdvanceWidth=r,a.width+=r),a}function d(e,t){if(!(e<b.fakeSpaceMin)){if(e<b.fakeMultiSpaceMin)return void t.push(" ")
for(var a=Math.round(e/b.spaceWidth);a-- >0;)t.push(" ")}}function g(){b.initialized&&(b.width*=b.textAdvanceScale,b.height*=b.textAdvanceScale,m.items.push(h(b)),b.initialized=!1,b.str.length=0)}n=n||new Te(new Oe)
var p=/\s/g,m={items:[],styles:Object.create(null)},b={initialized:!1,str:[],width:0,height:0,vertical:!1,lastAdvanceWidth:0,lastAdvanceHeight:0,textAdvanceScale:0,spaceWidth:0,fakeSpaceMin:1/0,fakeMultiSpaceMin:1/0,fakeMultiSpaceMax:-0,textRunBreakAllowed:!1,transform:null,fontName:null},v=.3,y=1.5,x=4,C=this,A=this.xref
r=A.fetchIfRef(r)||q.empty
var I,T=null,O=Object.create(null),P=new Me(e,A,n),L=new a
return new Promise(function e(a,l){var h=function(t){t.then(function(){try{e(a,l)}catch(e){l(e)}},l)}
t.ensureNotTerminated(),L.reset()
for(var p,v={},y=[];!(p=L.check())&&(y.length=0,v.args=y,P.read(v));){I=n.state
var k=v.fn
y=v.args
var x,A
switch(0|k){case S.setFont:var D=y[0].name,F=y[1]
if(I.font&&D===I.fontName&&F===I.fontSize)break
return g(),I.fontName=D,I.fontSize=F,void h(u(D,null))
case S.setTextRise:g(),I.textRise=y[0]
break
case S.setHScale:g(),I.textHScale=y[0]/100
break
case S.setLeading:g(),I.leading=y[0]
break
case S.moveText:var U=!!I.font&&0===(I.font.vertical?y[0]:y[1])
if(x=y[0]-y[1],o&&U&&b.initialized&&x>0&&x<=b.fakeMultiSpaceMax){I.translateTextLineMatrix(y[0],y[1]),b.width+=y[0]-b.lastAdvanceWidth,b.height+=y[1]-b.lastAdvanceHeight,A=y[0]-b.lastAdvanceWidth-(y[1]-b.lastAdvanceHeight),d(A,b.str)
break}g(),I.translateTextLineMatrix(y[0],y[1]),I.textMatrix=I.textLineMatrix.slice()
break
case S.setLeadingMoveText:g(),I.leading=-y[1],I.translateTextLineMatrix(y[0],y[1]),I.textMatrix=I.textLineMatrix.slice()
break
case S.nextLine:g(),I.carriageReturn()
break
case S.setTextMatrix:if(x=I.calcTextLineMatrixAdvance(y[0],y[1],y[2],y[3],y[4],y[5]),o&&null!==x&&b.initialized&&x.value>0&&x.value<=b.fakeMultiSpaceMax){I.translateTextLineMatrix(x.width,x.height),b.width+=x.width-b.lastAdvanceWidth,b.height+=x.height-b.lastAdvanceHeight,A=x.width-b.lastAdvanceWidth-(x.height-b.lastAdvanceHeight),d(A,b.str)
break}g(),I.setTextMatrix(y[0],y[1],y[2],y[3],y[4],y[5]),I.setTextLineMatrix(y[0],y[1],y[2],y[3],y[4],y[5])
break
case S.setCharSpacing:I.charSpacing=y[0]
break
case S.setWordSpacing:I.wordSpacing=y[0]
break
case S.beginText:g(),I.textMatrix=w.slice(),I.textLineMatrix=w.slice()
break
case S.showSpacedText:for(var N,j=y[0],H=0,X=j.length;H<X;H++)if("string"==typeof j[H])f(j[H])
else if(E(j[H])){c(),x=j[H]*I.fontSize/1e3
var V=!1
I.font.vertical?(N=x,I.translateTextMatrix(0,N),(V=b.textRunBreakAllowed&&x>b.fakeMultiSpaceMax)||(b.height+=N)):(x=-x,N=x*I.textHScale,I.translateTextMatrix(N,0),(V=b.textRunBreakAllowed&&x>b.fakeMultiSpaceMax)||(b.width+=N)),V?g():x>0&&d(x,b.str)}break
case S.showText:f(y[0])
break
case S.nextLineShowText:g(),I.carriageReturn(),f(y[0])
break
case S.nextLineSetSpacingShowText:g(),I.wordSpacing=y[0],I.charSpacing=y[1],I.carriageReturn(),f(y[2])
break
case S.paintXObject:if(g(),y[0].code)break
T||(T=r.get("XObject")||q.empty)
var W=y[0].name
if(O.key===W){O.texts&&(B.appendToArray(m.items,O.texts.items),B.extendObj(m.styles,O.texts.styles))
break}var K=T.get(W)
if(!K)break
R(G(K),"XObject should be a stream")
var Y=K.dict.get("Subtype")
if(R(z(Y),"XObject should have a Name subtype"),"Form"!==Y.name){O.key=W,O.texts=null
break}n.save()
var J=K.dict.getArray("Matrix")
return M(J)&&6===J.length&&n.transform(J),void h(C.getTextContent(K,t,K.dict.get("Resources")||r,n,s,o).then(function(e){B.appendToArray(m.items,e.items),B.extendObj(m.styles,e.styles),n.restore(),O.key=W,O.texts=e}))
case S.setGState:g()
var Z=y[0],Q=r.get("ExtGState")
if(!_(Q)||!z(Z))break
var $=Q.get(Z.name)
if(!_($))break
var ee=$.get("Font")
if(ee)return I.fontName=null,I.fontSize=ee[1],void h(u(null,ee[0]))}}if(p)return void h(i)
g(),a(m)})},extractDataStructures:function(e,t,a){var r=this.xref,i=e.get("ToUnicode")||t.get("ToUnicode"),n=i?this.readToUnicode(i):Promise.resolve(void 0)
if(a.composite){var s=e.get("CIDSystemInfo")
_(s)&&(a.cidSystemInfo={registry:s.get("Registry"),ordering:s.get("Ordering"),supplement:s.get("Supplement")})
var o=e.get("CIDToGIDMap")
G(o)&&(a.cidToGidMap=this.readCidToGidMap(o))}var c,l=[],h=null
if(e.has("Encoding")){if(c=e.get("Encoding"),_(c)){if(h=c.get("BaseEncoding"),h=z(h)?h.name:null,c.has("Differences"))for(var u=c.get("Differences"),f=0,d=0,g=u.length;d<g;d++){var p=r.fetchIfRef(u[d])
E(p)?f=p:z(p)?l[f++]=p.name:O("Invalid entry in 'Differences' array: "+p)}}else z(c)?h=c.name:O("Encoding is not a Name nor a Dict")
"MacRomanEncoding"!==h&&"MacExpertEncoding"!==h&&"WinAnsiEncoding"!==h&&(h=null)}if(h)a.defaultEncoding=ve(h).slice()
else{var m=!!(a.flags&ee.Symbolic),b=!!(a.flags&ee.Nonsymbolic)
c=ge,"TrueType"!==a.type||b||(c=de),m&&(c=pe,a.file||(/Symbol/i.test(a.name)?c=me:/Dingbats/i.test(a.name)&&(c=be))),a.defaultEncoding=c}return a.differences=l,a.baseEncodingName=h,a.hasEncoding=!!h||l.length>0,a.dict=e,n.then(function(e){return a.toUnicode=e,this.buildToUnicode(a)}.bind(this)).then(function(e){return a.toUnicode=e,a})},buildToUnicode:function(e){if(e.hasIncludedToUnicodeMap=!!e.toUnicode&&e.toUnicode.length>0,e.hasIncludedToUnicodeMap)return Promise.resolve(e.toUnicode)
var t,a,r
if(!e.composite){t=[]
var i=e.defaultEncoding.slice(),n=e.baseEncodingName,s=e.differences
for(a in s)".notdef"!==(r=s[a])&&(i[a]=r)
var o=Ae()
for(a in i)if(""!==(r=i[a]))if(void 0!==o[r])t[a]=String.fromCharCode(o[r])
else{var c=0
switch(r[0]){case"G":3===r.length&&(c=parseInt(r.substr(1),16))
break
case"g":5===r.length&&(c=parseInt(r.substr(1),16))
break
case"C":case"c":r.length>=3&&(c=+r.substr(1))
break
default:var l=Se(r,o)
l!==-1&&(c=l)}if(c){if(n&&c===+a){var h=ve(n)
if(h&&(r=h[a])){t[a]=String.fromCharCode(o[r])
continue}}t[a]=String.fromCharCode(c)}}return Promise.resolve(new re(t))}if(e.composite&&(e.cMap.builtInCMap&&!(e.cMap instanceof he)||"Adobe"===e.cidSystemInfo.registry&&("GB1"===e.cidSystemInfo.ordering||"CNS1"===e.cidSystemInfo.ordering||"Japan1"===e.cidSystemInfo.ordering||"Korea1"===e.cidSystemInfo.ordering))){var u=e.cidSystemInfo.registry,f=e.cidSystemInfo.ordering,d=U.get(u+"-"+f+"-UCS2")
return le.create({encoding:d,fetchBuiltInCMap:this.fetchBuiltInCMap,useCMap:null}).then(function(a){var r=e.cMap
return t=[],r.forEach(function(e,r){R(r<=65535,"Max size of CID is 65,535")
var i=a.lookup(r)
i&&(t[e]=String.fromCharCode((i.charCodeAt(0)<<8)+i.charCodeAt(1)))}),new re(t)})}return Promise.resolve(new ae(e.firstChar,e.lastChar))},readToUnicode:function(e){var t=e
return z(t)?le.create({encoding:t,fetchBuiltInCMap:this.fetchBuiltInCMap,useCMap:null}).then(function(e){return e instanceof he?new ae(0,65535):new re(e.getMap())}):G(t)?le.create({encoding:t,fetchBuiltInCMap:this.fetchBuiltInCMap,useCMap:null}).then(function(e){if(e instanceof he)return new ae(0,65535)
var t=new Array(e.length)
return e.forEach(function(e,a){for(var r=[],i=0;i<a.length;i+=2){var n=a.charCodeAt(i)<<8|a.charCodeAt(i+1)
if(55296==(63488&n)){i+=2
var s=a.charCodeAt(i)<<8|a.charCodeAt(i+1)
r.push(((1023&n)<<10)+(1023&s)+65536)}else r.push(n)}t[e]=String.fromCharCode.apply(String,r)}),new re(t)}):Promise.resolve(null)},readCidToGidMap:function(e){for(var t=e.getBytes(),a=[],r=0,i=t.length;r<i;r++){var n=t[r++]<<8|t[r]
if(0!==n){a[r>>1]=n}}return a},extractWidths:function(e,t,a){var r,i,n,s,o,c,l,h,u=this.xref,f=[],d=0,g=[]
if(a.composite){if(d=e.get("DW")||1e3,h=e.get("W"))for(i=0,n=h.length;i<n;i++)if(c=u.fetchIfRef(h[i++]),l=u.fetchIfRef(h[i]),M(l))for(s=0,o=l.length;s<o;s++)f[c++]=u.fetchIfRef(l[s])
else{var p=u.fetchIfRef(h[++i])
for(s=c;s<=l;s++)f[s]=p}if(a.vertical){var m=e.getArray("DW2")||[880,-1e3]
if(r=[m[1],.5*d,m[0]],m=e.get("W2"))for(i=0,n=m.length;i<n;i++)if(c=u.fetchIfRef(m[i++]),l=u.fetchIfRef(m[i]),M(l))for(s=0,o=l.length;s<o;s++)g[c++]=[u.fetchIfRef(l[s++]),u.fetchIfRef(l[s++]),u.fetchIfRef(l[s])]
else{var b=[u.fetchIfRef(m[++i]),u.fetchIfRef(m[++i]),u.fetchIfRef(m[++i])]
for(s=c;s<=l;s++)g[s]=b}}}else{var v=a.firstChar
if(h=e.get("Widths")){for(s=v,i=0,n=h.length;i<n;i++)f[s++]=u.fetchIfRef(h[i])
d=parseFloat(t.get("MissingWidth"))||0}else{var y=e.get("BaseFont")
if(z(y)){var k=this.getBaseFontMetrics(y.name)
f=this.buildCharCodeToWidth(k.widths,a),d=k.defaultWidth}}}var w=!0,x=d
for(var C in f){var S=f[C]
if(S)if(x){if(x!==S){w=!1
break}}else x=S}w&&(a.flags|=ee.FixedPitch),a.defaultWidth=d,a.widths=f,a.defaultVMetrics=r,a.vmetrics=g},isSerifFont:function(e){var t=e.split("-")[0]
return t in ke()||t.search(/serif/gi)!==-1},getBaseFontMetrics:function(e){var t=0,a=[],r=!1,i=ye(),n=i[e]||e,s=ue()
n in s||(n=this.isSerifFont(e)?"Times-Roman":"Helvetica")
var o=s[n]
return E(o)?(t=o,r=!0):a=o(),{defaultWidth:t,monospace:r,widths:a}},buildCharCodeToWidth:function(e,t){for(var a=Object.create(null),r=t.differences,i=t.defaultEncoding,n=0;n<256;n++)n in r&&e[r[n]]?a[n]=e[r[n]]:n in i&&e[i[n]]&&(a[n]=e[i[n]])
return a},preEvaluateFont:function(e){var t=e,a=e.get("Subtype")
R(z(a),"invalid font Subtype")
var r,i=!1
if("Type0"===a.name){var n=e.get("DescendantFonts")
R(n,"Descendant fonts are not specified"),e=M(n)?this.xref.fetchIfRef(n[0]):n,a=e.get("Subtype"),R(z(a),"invalid font Subtype"),i=!0}var s=e.get("FontDescriptor")
if(s){var o=new Q,c=t.getRaw("Encoding")
if(z(c))o.update(c.name)
else if(H(c))o.update(c.toString())
else if(_(c))for(var l=c.getKeys(),h=0,u=l.length;h<u;h++){var f=c.getRaw(l[h])
if(z(f))o.update(f.name)
else if(H(f))o.update(f.toString())
else if(M(f)){for(var d=f.length,g=new Array(d),p=0;p<d;p++){var m=f[p]
z(m)?g[p]=m.name:(E(m)||H(m))&&(g[p]=m.toString())}o.update(g.join())}}var b=e.get("ToUnicode")||t.get("ToUnicode")
if(G(b)){var v=b.str||b
r=v.buffer?new Uint8Array(v.buffer.buffer,0,v.bufferLength):new Uint8Array(v.bytes.buffer,v.start,v.end-v.start),o.update(r)}else z(b)&&o.update(b.name)
var y=e.get("Widths")||t.get("Widths")
y&&(r=new Uint8Array(new Uint32Array(y).buffer),o.update(r))}return{descriptor:s,dict:e,baseDict:t,composite:i,type:a.name,hash:o?o.hexdigest():""}},translateFont:function(e){var t,a=e.baseDict,r=e.dict,i=e.composite,n=e.descriptor,s=e.type,o=i?65535:255
if(!n){if("Type3"!==s){var c=r.get("BaseFont")
R(z(c),"Base font is not specified"),c=c.name.replace(/[,_]/g,"-")
var l=this.getBaseFontMetrics(c),h=c.split("-")[0],u=(this.isSerifFont(h)?ee.Serif:0)|(l.monospace?ee.FixedPitch:0)|(we()[h]?ee.Symbolic:ee.Nonsymbolic)
return t={type:s,name:c,widths:l.widths,defaultWidth:l.defaultWidth,flags:u,firstChar:0,lastChar:o},this.extractDataStructures(r,r,t).then(function(e){return e.widths=this.buildCharCodeToWidth(l.widths,e),new te(c,null,e)}.bind(this))}n=new q(null),n.set("FontName",U.get(s)),n.set("FontBBox",r.getArray("FontBBox"))}var f=r.get("FirstChar")||0,d=r.get("LastChar")||o,g=n.get("FontName"),p=r.get("BaseFont")
if(L(g)&&(g=U.get(g)),L(p)&&(p=U.get(p)),"Type3"!==s){var m=g&&g.name,b=p&&p.name
m!==b&&(P("The FontDescriptor's FontName is \""+m+'" but should be the same as the Font\'s BaseFont "'+b+'"'),m&&b&&0===b.indexOf(m)&&(g=p))}g=g||p,R(z(g),"invalid font name")
var v=n.get("FontFile","FontFile2","FontFile3")
if(v&&v.dict){var y=v.dict.get("Subtype")
y&&(y=y.name)
var w=v.dict.get("Length1"),x=v.dict.get("Length2"),C=v.dict.get("Length3")}t={type:s,name:g.name,subtype:y,file:v,length1:w,length2:x,length3:C,loadedName:a.loadedName,composite:i,wideChars:i,fixedPitch:!1,fontMatrix:r.getArray("FontMatrix")||k,firstChar:f||0,lastChar:d||o,bbox:n.getArray("FontBBox"),ascent:n.get("Ascent"),descent:n.get("Descent"),xHeight:n.get("XHeight"),capHeight:n.get("CapHeight"),flags:n.get("Flags"),italicAngle:n.get("ItalicAngle"),coded:!1}
var S
if(i){var A=a.get("Encoding")
z(A)&&(t.cidEncoding=A.name),S=le.create({encoding:A,fetchBuiltInCMap:this.fetchBuiltInCMap,useCMap:null}).then(function(e){t.cMap=e,t.vertical=t.cMap.vertical})}else S=Promise.resolve(void 0)
return S.then(function(){return this.extractDataStructures(r,a,t)}.bind(this)).then(function(e){return this.extractWidths(r,n,e),"Type3"===s&&(e.isType3Font=!0),new te(g.name,v,e)}.bind(this))}},t}(),Be=function(){function e(e,t,a){this.loadedName=e,this.font=t,this.dict=a,this.type3Loaded=null,this.sent=!1}return e.prototype={send:function(e){if(!this.sent){var t=this.font.exportData()
e.send("commonobj",[this.loadedName,"Font",t]),this.sent=!0}},loadType3Data:function(e,t,a,r){if(R(this.font.isType3Font),this.type3Loaded)return this.type3Loaded
for(var i=this.font,n=Promise.resolve(),s=this.dict.get("CharProcs"),o=this.dict.get("Resources")||t,c=s.getKeys(),l=Object.create(null),h=0,u=c.length;h<u;++h)n=n.then(function(t){var i=s.get(t),n=new Re
return e.getOperatorList(i,r,o,n).then(function(){l[t]=n.getIR(),a.addDependencies(n.dependencies)},function(e){F('Type3 font resource "'+t+'" is not available')
var a=new Re
l[t]=a.getIR()})}.bind(this,c[h]))
return this.type3Loaded=n.then(function(){i.charProcOperatorList=l}),this.type3Loaded}},e}(),Re=function(){function e(e){for(var t=[],a=e.fnArray,r=e.argsArray,i=0,n=e.length;i<n;i++)switch(a[i]){case S.paintInlineImageXObject:case S.paintInlineImageXObjectGroup:case S.paintImageMaskXObject:var s=r[i][0]
s.cached||t.push(s.data.buffer)}return t}function t(e,t,a){this.messageHandler=t,this.fnArray=[],this.argsArray=[],this.dependencies=Object.create(null),this._totalLength=0,this.pageIndex=a,this.intent=e}return t.prototype={get length(){return this.argsArray.length},get totalLength(){return this._totalLength+this.length},addOp:function(e,t){this.fnArray.push(e),this.argsArray.push(t),this.messageHandler&&(this.fnArray.length>=1e3?this.flush():this.fnArray.length>=995&&(e===S.restore||e===S.endText)&&this.flush())},addDependency:function(e){e in this.dependencies||(this.dependencies[e]=!0,this.addOp(S.dependency,[e]))},addDependencies:function(e){for(var t in e)this.addDependency(t)},addOpList:function(e){B.extendObj(this.dependencies,e.dependencies)
for(var t=0,a=e.length;t<a;t++)this.addOp(e.fnArray[t],e.argsArray[t])},getIR:function(){return{fnArray:this.fnArray,argsArray:this.argsArray,length:this.length}},flush:function(t){"oplist"!==this.intent&&(new Ee).optimize(this)
var a=e(this),r=this.length
this._totalLength+=r,this.messageHandler.send("RenderPageChunk",{operatorList:{fnArray:this.fnArray,argsArray:this.argsArray,lastChunk:t,length:r},pageIndex:this.pageIndex,intent:this.intent},a),this.dependencies=Object.create(null),this.fnArray.length=0,this.argsArray.length=0}},t}(),Te=function(){function e(e){this.state=e,this.stateStack=[]}return e.prototype={save:function(){var e=this.state
this.stateStack.push(this.state),this.state=e.clone()},restore:function(){var e=this.stateStack.pop()
e&&(this.state=e)},transform:function(e){this.state.ctm=B.transform(this.state.ctm,e)}},e}(),Oe=function(){function e(){this.ctm=new Float32Array(w),this.fontName=null,this.fontSize=0,this.font=null,this.fontMatrix=k,this.textMatrix=w.slice(),this.textLineMatrix=w.slice(),this.charSpacing=0,this.wordSpacing=0,this.leading=0,this.textHScale=1,this.textRise=0}return e.prototype={setTextMatrix:function(e,t,a,r,i,n){var s=this.textMatrix
s[0]=e,s[1]=t,s[2]=a,s[3]=r,s[4]=i,s[5]=n},setTextLineMatrix:function(e,t,a,r,i,n){var s=this.textLineMatrix
s[0]=e,s[1]=t,s[2]=a,s[3]=r,s[4]=i,s[5]=n},translateTextMatrix:function(e,t){var a=this.textMatrix
a[4]=a[0]*e+a[2]*t+a[4],a[5]=a[1]*e+a[3]*t+a[5]},translateTextLineMatrix:function(e,t){var a=this.textLineMatrix
a[4]=a[0]*e+a[2]*t+a[4],a[5]=a[1]*e+a[3]*t+a[5]},calcTextLineMatrixAdvance:function(e,t,a,r,i,n){var s=this.font
if(!s)return null
var o=this.textLineMatrix
if(e!==o[0]||t!==o[1]||a!==o[2]||r!==o[3])return null
var c=i-o[4],l=n-o[5]
if(s.vertical&&0!==c||!s.vertical&&0!==l)return null
var h,u,f=e*r-t*a
return s.vertical?(h=-l*a/f,u=l*e/f):(h=c*r/f,u=-c*t/f),{width:h,height:u,value:s.vertical?u:h}},calcRenderMatrix:function(e){var t=[this.fontSize*this.textHScale,0,0,this.fontSize,0,this.textRise]
return B.transform(e,B.transform(this.textMatrix,t))},carriageReturn:function(){this.translateTextLineMatrix(0,-this.leading),this.textMatrix=this.textLineMatrix.slice()},clone:function(){var e=Object.create(this)
return e.textMatrix=this.textMatrix.slice(),e.textLineMatrix=this.textLineMatrix.slice(),e.fontMatrix=this.fontMatrix.slice(),e}},e}(),Pe=function(){function e(){this.ctm=new Float32Array(w),this.font=null,this.textRenderingMode=A.FILL,this.fillColorSpace=Z.singletons.gray,this.strokeColorSpace=Z.singletons.gray}return e.prototype={clone:function(){return Object.create(this)}},e}(),Me=function(){function e(e,a,r){this.opMap=t(),this.parser=new Y(new K(e,this.opMap),!1,a),this.stateManager=r,this.nonProcessedArgs=[]}var t=D(function(e){e.w={id:S.setLineWidth,numArgs:1,variableArgs:!1},e.J={id:S.setLineCap,numArgs:1,variableArgs:!1},e.j={id:S.setLineJoin,numArgs:1,variableArgs:!1},e.M={id:S.setMiterLimit,numArgs:1,variableArgs:!1},e.d={id:S.setDash,numArgs:2,variableArgs:!1},e.ri={id:S.setRenderingIntent,numArgs:1,variableArgs:!1},e.i={id:S.setFlatness,numArgs:1,variableArgs:!1},e.gs={id:S.setGState,numArgs:1,variableArgs:!1},e.q={id:S.save,numArgs:0,variableArgs:!1},e.Q={id:S.restore,numArgs:0,variableArgs:!1},e.cm={id:S.transform,numArgs:6,variableArgs:!1},e.m={id:S.moveTo,numArgs:2,variableArgs:!1},e.l={id:S.lineTo,numArgs:2,variableArgs:!1},e.c={id:S.curveTo,numArgs:6,variableArgs:!1},e.v={id:S.curveTo2,numArgs:4,variableArgs:!1},e.y={id:S.curveTo3,numArgs:4,variableArgs:!1},e.h={id:S.closePath,numArgs:0,variableArgs:!1},e.re={id:S.rectangle,numArgs:4,variableArgs:!1},e.S={id:S.stroke,numArgs:0,variableArgs:!1},e.s={id:S.closeStroke,numArgs:0,variableArgs:!1},e.f={id:S.fill,numArgs:0,variableArgs:!1},e.F={id:S.fill,numArgs:0,variableArgs:!1},e["f*"]={id:S.eoFill,numArgs:0,variableArgs:!1},e.B={id:S.fillStroke,numArgs:0,variableArgs:!1},e["B*"]={id:S.eoFillStroke,numArgs:0,variableArgs:!1},e.b={id:S.closeFillStroke,numArgs:0,variableArgs:!1},e["b*"]={id:S.closeEOFillStroke,numArgs:0,variableArgs:!1},e.n={id:S.endPath,numArgs:0,variableArgs:!1},e.W={id:S.clip,numArgs:0,variableArgs:!1},e["W*"]={id:S.eoClip,numArgs:0,variableArgs:!1},e.BT={id:S.beginText,numArgs:0,variableArgs:!1},e.ET={id:S.endText,numArgs:0,variableArgs:!1},e.Tc={id:S.setCharSpacing,numArgs:1,variableArgs:!1},e.Tw={id:S.setWordSpacing,numArgs:1,variableArgs:!1},e.Tz={id:S.setHScale,numArgs:1,variableArgs:!1},e.TL={id:S.setLeading,numArgs:1,variableArgs:!1},e.Tf={id:S.setFont,numArgs:2,variableArgs:!1},e.Tr={id:S.setTextRenderingMode,numArgs:1,variableArgs:!1},e.Ts={id:S.setTextRise,numArgs:1,variableArgs:!1},e.Td={id:S.moveText,numArgs:2,variableArgs:!1},e.TD={id:S.setLeadingMoveText,numArgs:2,variableArgs:!1},e.Tm={id:S.setTextMatrix,numArgs:6,variableArgs:!1},e["T*"]={id:S.nextLine,numArgs:0,variableArgs:!1},e.Tj={id:S.showText,numArgs:1,variableArgs:!1},e.TJ={id:S.showSpacedText,numArgs:1,variableArgs:!1},e["'"]={id:S.nextLineShowText,numArgs:1,variableArgs:!1},e['"']={id:S.nextLineSetSpacingShowText,numArgs:3,variableArgs:!1},e.d0={id:S.setCharWidth,numArgs:2,variableArgs:!1},e.d1={id:S.setCharWidthAndBounds,numArgs:6,variableArgs:!1},e.CS={id:S.setStrokeColorSpace,numArgs:1,variableArgs:!1},e.cs={id:S.setFillColorSpace,numArgs:1,variableArgs:!1},e.SC={id:S.setStrokeColor,numArgs:4,variableArgs:!0},e.SCN={id:S.setStrokeColorN,numArgs:33,variableArgs:!0},e.sc={id:S.setFillColor,numArgs:4,variableArgs:!0},e.scn={id:S.setFillColorN,numArgs:33,variableArgs:!0},e.G={id:S.setStrokeGray,numArgs:1,variableArgs:!1},e.g={id:S.setFillGray,numArgs:1,variableArgs:!1},e.RG={id:S.setStrokeRGBColor,numArgs:3,variableArgs:!1},e.rg={id:S.setFillRGBColor,numArgs:3,variableArgs:!1},e.K={id:S.setStrokeCMYKColor,numArgs:4,variableArgs:!1},e.k={id:S.setFillCMYKColor,numArgs:4,variableArgs:!1},e.sh={id:S.shadingFill,numArgs:1,variableArgs:!1},e.BI={id:S.beginInlineImage,numArgs:0,variableArgs:!1},e.ID={id:S.beginImageData,numArgs:0,variableArgs:!1},e.EI={id:S.endInlineImage,numArgs:1,variableArgs:!1},e.Do={id:S.paintXObject,numArgs:1,variableArgs:!1},e.MP={id:S.markPoint,numArgs:1,variableArgs:!1},e.DP={id:S.markPointProps,numArgs:2,variableArgs:!1},e.BMC={id:S.beginMarkedContent,numArgs:1,variableArgs:!1},e.BDC={id:S.beginMarkedContentProps,numArgs:2,variableArgs:!1},e.EMC={id:S.endMarkedContent,numArgs:0,variableArgs:!1},e.BX={id:S.beginCompat,numArgs:0,variableArgs:!1},e.EX={id:S.endCompat,numArgs:0,variableArgs:!1},e.BM=null,e.BD=null,e.true=null,e.fa=null,e.fal=null,e.fals=null,e.false=null,e.nu=null,e.nul=null,e.null=null})
return e.prototype={get savedStatesDepth(){return this.stateManager.stateStack.length},read:function(e){for(var t=e.args;;){var a=this.parser.getObj()
if(j(a)){var r=a.cmd,i=this.opMap[r]
if(!i){F('Unknown command "'+r+'"')
continue}var n=i.id,s=i.numArgs,o=null!==t?t.length:0
if(i.variableArgs)o>s&&P("Command "+n+": expected [0,"+s+"] args, but received "+o+" args.")
else{if(o!==s){for(var c=this.nonProcessedArgs;o>s;)c.push(t.shift()),o--
for(;o<s&&0!==c.length;)null===t&&(t=[]),t.unshift(c.pop()),o++}if(o<s){F("Skipping command "+n+": expected "+s+" args, but received "+o+" args."),null!==t&&(t.length=0)
continue}}return this.preprocessCommand(n,t),e.fn=n,e.args=t,!0}if(N(a))return!1
null!==a&&(null===t&&(t=[]),t.push(a),R(t.length<=33,"Too many arguments"))}},preprocessCommand:function(e,t){switch(0|e){case S.save:this.stateManager.save()
break
case S.restore:this.stateManager.restore()
break
case S.transform:this.stateManager.transform(t)}}},e}(),Ee=function(){function e(e,t,a){for(var r=e,i=0,n=t.length-1;i<n;i++){var s=t[i]
r=r[s]||(r[s]=[])}r[t[t.length-1]]=a}function t(e,t,a,r){for(var i=e+2,n=0;n<t;n++){var s=r[i+4*n],o=1===s.length&&s[0]
if(!o||1!==o.width||1!==o.height||o.data.length&&(1!==o.data.length||0!==o.data[0]))break
a[i+4*n]=S.paintSolidColorImageMask}return t-n}function a(){}var r=[]
return e(r,[S.save,S.transform,S.paintInlineImageXObject,S.restore],function(e){for(var t=e.fnArray,a=e.argsArray,r=e.iCurr,i=r-3,n=r-2,s=r-1,o=i+4,c=t.length;o+3<c&&t[o]===S.save&&t[o+1]===S.transform&&t[o+2]===S.paintInlineImageXObject&&t[o+3]===S.restore;)o+=4
var l=Math.min((o-i)/4,200)
if(l<10)return o
var h,u=0,f=[],d=0,g=1,p=1
for(h=0;h<l;h++){var m=a[n+(h<<2)],b=a[s+(h<<2)][0]
g+b.width>1e3&&(u=Math.max(u,g),p+=d+2,g=0,d=0),f.push({transform:m,x:g,y:p,w:b.width,h:b.height}),g+=b.width+2,d=Math.max(d,b.height)}var v=Math.max(u,g)+1,y=p+d+1,k=new Uint8Array(v*y*4),w=v<<2
for(h=0;h<l;h++){var x=a[s+(h<<2)][0].data,A=f[h].w<<2,I=0,B=f[h].x+f[h].y*v<<2
k.set(x.subarray(0,A),B-w)
for(var R=0,T=f[h].h;R<T;R++)k.set(x.subarray(I,I+A),B),I+=A,B+=w
for(k.set(x.subarray(I-A,I),B);B>=0;)x[B-4]=x[B],x[B-3]=x[B+1],x[B-2]=x[B+2],x[B-1]=x[B+3],x[B+A]=x[B+A-4],x[B+A+1]=x[B+A-3],x[B+A+2]=x[B+A-2],x[B+A+3]=x[B+A-1],B-=w}return t.splice(i,4*l,S.paintInlineImageXObjectGroup),a.splice(i,4*l,[{width:v,height:y,kind:C.RGBA_32BPP,data:k},f]),i+1}),e(r,[S.save,S.transform,S.paintImageMaskXObject,S.restore],function(e){for(var a=e.fnArray,r=e.argsArray,i=e.iCurr,n=i-3,s=i-2,o=i-1,c=n+4,l=a.length;c+3<l&&a[c]===S.save&&a[c+1]===S.transform&&a[c+2]===S.paintImageMaskXObject&&a[c+3]===S.restore;)c+=4
var h=(c-n)/4
if((h=t(n,h,a,r))<10)return c
var u,f,d,g=!1,p=r[o][0]
if(0===r[s][1]&&0===r[s][2]){g=!0
var m=r[s][0],b=r[s][3]
f=s+4
var v=o+4
for(u=1;u<h;u++,f+=4,v+=4)if(d=r[f],r[v][0]!==p||d[0]!==m||0!==d[1]||0!==d[2]||d[3]!==b){u<10?g=!1:h=u
break}}if(g){h=Math.min(h,1e3)
var y=new Float32Array(2*h)
for(f=s,u=0;u<h;u++,f+=4)d=r[f],y[u<<1]=d[4],y[1+(u<<1)]=d[5]
a.splice(n,4*h,S.paintImageMaskXObjectRepeat),r.splice(n,4*h,[p,m,b,y])}else{h=Math.min(h,100)
var k=[]
for(u=0;u<h;u++){d=r[s+(u<<2)]
var w=r[o+(u<<2)][0]
k.push({data:w.data,width:w.width,height:w.height,transform:d})}a.splice(n,4*h,S.paintImageMaskXObjectGroup),r.splice(n,4*h,[k])}return n+1}),e(r,[S.save,S.transform,S.paintImageXObject,S.restore],function(e){var t=e.fnArray,a=e.argsArray,r=e.iCurr,i=r-3,n=r-2,s=r-1,o=r
if(0!==a[n][1]||0!==a[n][2])return o+1
for(var c=a[s][0],l=a[n][0],h=a[n][3],u=i+4,f=t.length;u+3<f&&t[u]===S.save&&t[u+1]===S.transform&&t[u+2]===S.paintImageXObject&&t[u+3]===S.restore&&a[u+1][0]===l&&0===a[u+1][1]&&0===a[u+1][2]&&a[u+1][3]===h&&a[u+2][0]===c;)u+=4
var d=Math.min((u-i)/4,1e3)
if(d<3)return u
for(var g=new Float32Array(2*d),p=n,m=0;m<d;m++,p+=4){var b=a[p]
g[m<<1]=b[4],g[1+(m<<1)]=b[5]}var v=[c,l,h,g]
return t.splice(i,4*d,S.paintImageXObjectRepeat),a.splice(i,4*d,v),i+1}),e(r,[S.beginText,S.setFont,S.setTextMatrix,S.showText,S.endText],function(e){for(var t=e.fnArray,a=e.argsArray,r=e.iCurr,i=r-4,n=r-3,s=r-2,o=r-1,c=r,l=a[n][0],h=a[n][1],u=i+5,f=t.length;u+4<f&&t[u]===S.beginText&&t[u+1]===S.setFont&&t[u+2]===S.setTextMatrix&&t[u+3]===S.showText&&t[u+4]===S.endText&&a[u+1][0]===l&&a[u+1][1]===h;)u+=5
var d=Math.min((u-i)/5,1e3)
if(d<3)return u
var g=i
i>=4&&t[i-4]===t[n]&&t[i-3]===t[s]&&t[i-2]===t[o]&&t[i-1]===t[c]&&a[i-4][0]===l&&a[i-4][1]===h&&(d++,g-=5)
for(var p=g+4,m=1;m<d;m++)t.splice(p,3),a.splice(p,3),p+=2
return p+1}),a.prototype={optimize:function(e){for(var t,a=e.fnArray,i=e.argsArray,n={iCurr:0,fnArray:a,argsArray:i},s=0,o=a.length;s<o;)t=(t||r)[a[s]],"function"==typeof t?(n.iCurr=s,s=t(n),t=void 0,o=n.fnArray.length):s++}},a}()
t.OperatorList=Re,t.PartialEvaluator=Ie},function(e,t,a){"use strict"
var r=a(0),i=a(10),n=r.info,s=r.warn,o=r.error,c=r.log2,l=r.readUint16,h=r.readUint32,u=i.ArithmeticDecoder,f=function(){function e(){this.failOnCorruptedImage=!1}function t(e,t){e.x0=Math.ceil(t.XOsiz/e.XRsiz),e.x1=Math.ceil(t.Xsiz/e.XRsiz),e.y0=Math.ceil(t.YOsiz/e.YRsiz),e.y1=Math.ceil(t.Ysiz/e.YRsiz),e.width=e.x1-e.x0,e.height=e.y1-e.y0}function a(e,t){for(var a,r=e.SIZ,i=[],n=Math.ceil((r.Xsiz-r.XTOsiz)/r.XTsiz),s=Math.ceil((r.Ysiz-r.YTOsiz)/r.YTsiz),o=0;o<s;o++)for(var c=0;c<n;c++)a={},a.tx0=Math.max(r.XTOsiz+c*r.XTsiz,r.XOsiz),a.ty0=Math.max(r.YTOsiz+o*r.YTsiz,r.YOsiz),a.tx1=Math.min(r.XTOsiz+(c+1)*r.XTsiz,r.Xsiz),a.ty1=Math.min(r.YTOsiz+(o+1)*r.YTsiz,r.Ysiz),a.width=a.tx1-a.tx0,a.height=a.ty1-a.ty0,a.components=[],i.push(a)
e.tiles=i
for(var l=r.Csiz,h=0,u=l;h<u;h++)for(var f=t[h],d=0,g=i.length;d<g;d++){var p={}
a=i[d],p.tcx0=Math.ceil(a.tx0/f.XRsiz),p.tcy0=Math.ceil(a.ty0/f.YRsiz),p.tcx1=Math.ceil(a.tx1/f.XRsiz),p.tcy1=Math.ceil(a.ty1/f.YRsiz),p.width=p.tcx1-p.tcx0,p.height=p.tcy1-p.tcy0,a.components[h]=p}}function r(e,t,a){var r=t.codingStyleParameters,i={}
return r.entropyCoderWithCustomPrecincts?(i.PPx=r.precinctsSizes[a].PPx,i.PPy=r.precinctsSizes[a].PPy):(i.PPx=15,i.PPy=15),i.xcb_=a>0?Math.min(r.xcb,i.PPx-1):Math.min(r.xcb,i.PPx),i.ycb_=a>0?Math.min(r.ycb,i.PPy-1):Math.min(r.ycb,i.PPy),i}function i(e,t,a){var r=1<<a.PPx,i=1<<a.PPy,n=0===t.resLevel,s=1<<a.PPx+(n?0:-1),o=1<<a.PPy+(n?0:-1),c=t.trx1>t.trx0?Math.ceil(t.trx1/r)-Math.floor(t.trx0/r):0,l=t.try1>t.try0?Math.ceil(t.try1/i)-Math.floor(t.try0/i):0,h=c*l
t.precinctParameters={precinctWidth:r,precinctHeight:i,numprecinctswide:c,numprecinctshigh:l,numprecincts:h,precinctWidthInSubband:s,precinctHeightInSubband:o}}function f(e,t,a){var r,i,n,s,o=a.xcb_,c=a.ycb_,l=1<<o,h=1<<c,u=t.tbx0>>o,f=t.tby0>>c,d=t.tbx1+l-1>>o,g=t.tby1+h-1>>c,p=t.resolution.precinctParameters,m=[],b=[]
for(i=f;i<g;i++)for(r=u;r<d;r++){n={cbx:r,cby:i,tbx0:l*r,tby0:h*i,tbx1:l*(r+1),tby1:h*(i+1)},n.tbx0_=Math.max(t.tbx0,n.tbx0),n.tby0_=Math.max(t.tby0,n.tby0),n.tbx1_=Math.min(t.tbx1,n.tbx1),n.tby1_=Math.min(t.tby1,n.tby1)
var v=Math.floor((n.tbx0_-t.tbx0)/p.precinctWidthInSubband),y=Math.floor((n.tby0_-t.tby0)/p.precinctHeightInSubband)
if(s=v+y*p.numprecinctswide,n.precinctNumber=s,n.subbandType=t.type,n.Lblock=3,!(n.tbx1_<=n.tbx0_||n.tby1_<=n.tby0_)){m.push(n)
var k=b[s]
void 0!==k?(r<k.cbxMin?k.cbxMin=r:r>k.cbxMax&&(k.cbxMax=r),i<k.cbyMin?k.cbxMin=i:i>k.cbyMax&&(k.cbyMax=i)):b[s]=k={cbxMin:r,cbyMin:i,cbxMax:r,cbyMax:i},n.precinct=k}}t.codeblockParameters={codeblockWidth:o,codeblockHeight:c,numcodeblockwide:d-u+1,numcodeblockhigh:g-f+1},t.codeblocks=m,t.precincts=b}function d(e,t,a){for(var r=[],i=e.subbands,n=0,s=i.length;n<s;n++)for(var o=i[n],c=o.codeblocks,l=0,h=c.length;l<h;l++){var u=c[l]
u.precinctNumber===t&&r.push(u)}return{layerNumber:a,codeblocks:r}}function g(e){for(var t=e.SIZ,a=e.currentTile.index,r=e.tiles[a],i=r.codingStyleDefaultParameters.layersCount,n=t.Csiz,s=0,c=0;c<n;c++)s=Math.max(s,r.components[c].codingStyleParameters.decompositionLevelsCount)
var l=0,h=0,u=0,f=0
this.nextPacket=function(){for(;l<i;l++){for(;h<=s;h++){for(;u<n;u++){var e=r.components[u]
if(!(h>e.codingStyleParameters.decompositionLevelsCount)){for(var t=e.resolutions[h],a=t.precinctParameters.numprecincts;f<a;){var c=d(t,f,l)
return f++,c}f=0}}u=0}h=0}o("JPX Error: Out of packets")}}function p(e){for(var t=e.SIZ,a=e.currentTile.index,r=e.tiles[a],i=r.codingStyleDefaultParameters.layersCount,n=t.Csiz,s=0,c=0;c<n;c++)s=Math.max(s,r.components[c].codingStyleParameters.decompositionLevelsCount)
var l=0,h=0,u=0,f=0
this.nextPacket=function(){for(;l<=s;l++){for(;h<i;h++){for(;u<n;u++){var e=r.components[u]
if(!(l>e.codingStyleParameters.decompositionLevelsCount)){for(var t=e.resolutions[l],a=t.precinctParameters.numprecincts;f<a;){var c=d(t,f,h)
return f++,c}f=0}}u=0}h=0}o("JPX Error: Out of packets")}}function m(e){var t,a,r,i,n=e.SIZ,s=e.currentTile.index,c=e.tiles[s],l=c.codingStyleDefaultParameters.layersCount,h=n.Csiz,u=0
for(r=0;r<h;r++){var f=c.components[r]
u=Math.max(u,f.codingStyleParameters.decompositionLevelsCount)}var g=new Int32Array(u+1)
for(a=0;a<=u;++a){var p=0
for(r=0;r<h;++r){var m=c.components[r].resolutions
a<m.length&&(p=Math.max(p,m[a].precinctParameters.numprecincts))}g[a]=p}t=0,a=0,r=0,i=0,this.nextPacket=function(){for(;a<=u;a++){for(;i<g[a];i++){for(;r<h;r++){var e=c.components[r]
if(!(a>e.codingStyleParameters.decompositionLevelsCount)){var n=e.resolutions[a],s=n.precinctParameters.numprecincts
if(!(i>=s)){for(;t<l;){var f=d(n,i,t)
return t++,f}t=0}}}r=0}i=0}o("JPX Error: Out of packets")}}function b(e){var t=e.SIZ,a=e.currentTile.index,r=e.tiles[a],i=r.codingStyleDefaultParameters.layersCount,n=t.Csiz,s=k(r),c=s,l=0,h=0,u=0,f=0,g=0
this.nextPacket=function(){for(;g<c.maxNumHigh;g++){for(;f<c.maxNumWide;f++){for(;u<n;u++){for(var e=r.components[u],t=e.codingStyleParameters.decompositionLevelsCount;h<=t;h++){var a=e.resolutions[h],p=s.components[u].resolutions[h],m=y(f,g,p,c,a)
if(null!==m){for(;l<i;){var b=d(a,m,l)
return l++,b}l=0}}h=0}u=0}f=0}o("JPX Error: Out of packets")}}function v(e){var t=e.SIZ,a=e.currentTile.index,r=e.tiles[a],i=r.codingStyleDefaultParameters.layersCount,n=t.Csiz,s=k(r),c=0,l=0,h=0,u=0,f=0
this.nextPacket=function(){for(;h<n;++h){for(var e=r.components[h],t=s.components[h],a=e.codingStyleParameters.decompositionLevelsCount;f<t.maxNumHigh;f++){for(;u<t.maxNumWide;u++){for(;l<=a;l++){var g=e.resolutions[l],p=t.resolutions[l],m=y(u,f,p,t,g)
if(null!==m){for(;c<i;){var b=d(g,m,c)
return c++,b}c=0}}l=0}u=0}f=0}o("JPX Error: Out of packets")}}function y(e,t,a,r,i){var n=e*r.minWidth,s=t*r.minHeight
if(n%a.width!=0||s%a.height!=0)return null
var o=s/a.width*i.precinctParameters.numprecinctswide
return n/a.height+o}function k(e){for(var t=e.components.length,a=Number.MAX_VALUE,r=Number.MAX_VALUE,i=0,n=0,s=new Array(t),o=0;o<t;o++){for(var c=e.components[o],l=c.codingStyleParameters.decompositionLevelsCount,h=new Array(l+1),u=Number.MAX_VALUE,f=Number.MAX_VALUE,d=0,g=0,p=1,m=l;m>=0;--m){var b=c.resolutions[m],v=p*b.precinctParameters.precinctWidth,y=p*b.precinctParameters.precinctHeight
u=Math.min(u,v),f=Math.min(f,y),d=Math.max(d,b.precinctParameters.numprecinctswide),g=Math.max(g,b.precinctParameters.numprecinctshigh),h[m]={width:v,height:y},p<<=1}a=Math.min(a,u),r=Math.min(r,f),i=Math.max(i,d),n=Math.max(n,g),s[o]={resolutions:h,minWidth:u,minHeight:f,maxNumWide:d,maxNumHigh:g}}return{components:s,minWidth:a,minHeight:r,maxNumWide:i,maxNumHigh:n}}function w(e){for(var t=e.SIZ,a=e.currentTile.index,n=e.tiles[a],s=t.Csiz,c=0;c<s;c++){for(var l=n.components[c],h=l.codingStyleParameters.decompositionLevelsCount,u=[],d=[],y=0;y<=h;y++){var k=r(e,l,y),w={},x=1<<h-y
w.trx0=Math.ceil(l.tcx0/x),w.try0=Math.ceil(l.tcy0/x),w.trx1=Math.ceil(l.tcx1/x),w.try1=Math.ceil(l.tcy1/x),w.resLevel=y,i(e,w,k),u.push(w)
var C
if(0===y)C={},C.type="LL",C.tbx0=Math.ceil(l.tcx0/x),C.tby0=Math.ceil(l.tcy0/x),C.tbx1=Math.ceil(l.tcx1/x),C.tby1=Math.ceil(l.tcy1/x),C.resolution=w,f(e,C,k),d.push(C),w.subbands=[C]
else{var S=1<<h-y+1,A=[]
C={},C.type="HL",C.tbx0=Math.ceil(l.tcx0/S-.5),C.tby0=Math.ceil(l.tcy0/S),C.tbx1=Math.ceil(l.tcx1/S-.5),C.tby1=Math.ceil(l.tcy1/S),C.resolution=w,f(e,C,k),d.push(C),A.push(C),C={},C.type="LH",C.tbx0=Math.ceil(l.tcx0/S),C.tby0=Math.ceil(l.tcy0/S-.5),C.tbx1=Math.ceil(l.tcx1/S),C.tby1=Math.ceil(l.tcy1/S-.5),C.resolution=w,f(e,C,k),d.push(C),A.push(C),C={},C.type="HH",C.tbx0=Math.ceil(l.tcx0/S-.5),C.tby0=Math.ceil(l.tcy0/S-.5),C.tbx1=Math.ceil(l.tcx1/S-.5),C.tby1=Math.ceil(l.tcy1/S-.5),C.resolution=w,f(e,C,k),d.push(C),A.push(C),w.subbands=A}}l.resolutions=u,l.subbands=d}var I=n.codingStyleDefaultParameters.progressionOrder
switch(I){case 0:n.packetsIterator=new g(e)
break
case 1:n.packetsIterator=new p(e)
break
case 2:n.packetsIterator=new m(e)
break
case 3:n.packetsIterator=new b(e)
break
case 4:n.packetsIterator=new v(e)
break
default:o("JPX Error: Unsupported progression order "+I)}}function x(e,t,a,r){function i(e){for(;u<e;){var r=t[a+h]
h++,f?(l=l<<7|r,u+=7,f=!1):(l=l<<8|r,u+=8),255===r&&(f=!0)}return u-=e,l>>>u&(1<<e)-1}function n(e){return 255===t[a+h-1]&&t[a+h]===e?(s(1),!0):255===t[a+h]&&t[a+h+1]===e&&(s(2),!0)}function s(e){h+=e}function o(){u=0,f&&(h++,f=!1)}for(var l,h=0,u=0,f=!1,d=e.currentTile.index,g=e.tiles[d],p=e.COD.sopMarkerUsed,m=e.COD.ephMarkerUsed,b=g.packetsIterator;h<r;){o(),p&&n(145)&&s(4)
var v=b.nextPacket()
if(i(1)){for(var y,k=v.layerNumber,w=[],x=0,C=v.codeblocks.length;x<C;x++){y=v.codeblocks[x]
var S=y.precinct,A=y.cbx-S.cbxMin,I=y.cby-S.cbyMin,B=!1,O=!1
if(void 0!==y.included)B=!!i(1)
else{S=y.precinct
var P,M
if(void 0!==S.inclusionTree)P=S.inclusionTree
else{var E=S.cbxMax-S.cbxMin+1,L=S.cbyMax-S.cbyMin+1
P=new T(E,L,k),M=new R(E,L),S.inclusionTree=P,S.zeroBitPlanesTree=M}if(P.reset(A,I,k))for(;;){if(!i(1)){P.incrementValue(k)
break}if(!P.nextLevel()){y.included=!0,B=O=!0
break}}}if(B){if(O){for(M=S.zeroBitPlanesTree,M.reset(A,I);;)if(i(1)){if(!M.nextLevel())break}else M.incrementValue()
y.zeroBitPlanes=M.value}for(var D=function(){if(0===i(1))return 1
if(0===i(1))return 2
var e=i(2)
return e<3?e+3:(e=i(5))<31?e+6:(e=i(7))+37}();i(1);)y.Lblock++
var F=c(D),q=(D<1<<F?F-1:F)+y.Lblock,U=i(q)
w.push({codeblock:y,codingpasses:D,dataLength:U})}}for(o(),m&&n(146);w.length>0;){var N=w.shift()
y=N.codeblock,void 0===y.data&&(y.data=[]),y.data.push({data:t,start:a+h,end:a+h+N.dataLength,codingpasses:N.codingpasses}),h+=N.dataLength}}}return h}function C(e,t,a,r,i,n,s,o){for(var c=r.tbx0,l=r.tby0,h=r.tbx1-r.tbx0,f=r.codeblocks,d="H"===r.type.charAt(0)?1:0,g="H"===r.type.charAt(1)?t:0,p=0,m=f.length;p<m;++p){var b=f[p],v=b.tbx1_-b.tbx0_,y=b.tby1_-b.tby0_
if(0!==v&&0!==y&&void 0!==b.data){var k,w
k=new O(v,y,b.subbandType,b.zeroBitPlanes,n),w=2
var x,C,S,A=b.data,I=0,B=0
for(x=0,C=A.length;x<C;x++)S=A[x],I+=S.end-S.start,B+=S.codingpasses
var R=new Uint8Array(I),T=0
for(x=0,C=A.length;x<C;x++){S=A[x]
var P=S.data.subarray(S.start,S.end)
R.set(P,T),T+=P.length}var M=new u(R,0,I)
for(k.setDecoder(M),x=0;x<B;x++){switch(w){case 0:k.runSignificancePropagationPass()
break
case 1:k.runMagnitudeRefinementPass()
break
case 2:k.runCleanupPass(),o&&k.checkSegmentationSymbol()}w=(w+1)%3}var E,L,D,F=b.tbx0_-c+(b.tby0_-l)*h,q=k.coefficentsSign,U=k.coefficentsMagnitude,N=k.bitsDecoded,j=s?0:.5
T=0
var _="LL"!==r.type
for(x=0;x<y;x++){var z=F/h|0,H=2*z*(t-h)+d+g
for(E=0;E<v;E++){if(0!==(L=U[T])){L=(L+j)*i,0!==q[T]&&(L=-L),D=N[T]
var G=_?H+(F<<1):F
e[G]=s&&D>=n?L:L*(1<<n-D)}F++,T++}F+=h-v}}}}function S(e,t,a){for(var r=t.components[a],i=r.codingStyleParameters,n=r.quantizationParameters,s=i.decompositionLevelsCount,o=n.SPqcds,c=n.scalarExpounded,l=n.guardBits,h=i.segmentationSymbolUsed,u=e.components[a].precision,f=i.reversibleTransformation,d=f?new E:new M,g=[],p=0,m=0;m<=s;m++){for(var b=r.resolutions[m],v=b.trx1-b.trx0,y=b.try1-b.try0,k=new Float32Array(v*y),w=0,x=b.subbands.length;w<x;w++){var S,A
c?(S=o[p].mu,A=o[p].epsilon,p++):(S=o[0].mu,A=o[0].epsilon+(m>0?1-m:0))
var I=b.subbands[w],R=B[I.type]
C(k,v,y,I,f?1:Math.pow(2,u+R-A)*(1+S/2048),l+A-1,f,h)}g.push({width:v,height:y,items:k})}var T=d.calculate(g,r.tcx0,r.tcy0)
return{left:r.tcx0,top:r.tcy0,width:T.width,height:T.height,items:T.items}}function A(e){for(var t=e.SIZ,a=e.components,r=t.Csiz,i=[],n=0,s=e.tiles.length;n<s;n++){var o,c=e.tiles[n],l=[]
for(o=0;o<r;o++)l[o]=S(e,c,o)
var h,u,f,d,g,p,m,b,v,y,k,w,x,C,A,I=l[0],B=new Uint8Array(I.items.length*r),R={left:I.left,top:I.top,width:I.width,height:I.height,items:B},T=0
if(c.codingStyleDefaultParameters.multipleComponentTransform){var O=4===r,P=l[0].items,M=l[1].items,E=l[2].items,L=O?l[3].items:null
h=a[0].precision-8,u=.5+(128<<h),f=255*(1<<h),g=.5*f,d=-g
var D=c.components[0],F=r-3
if(m=P.length,D.codingStyleParameters.reversibleTransformation)for(p=0;p<m;p++,T+=F)b=P[p]+u,v=M[p],y=E[p],w=b-(y+v>>2),k=w+y,x=w+v,B[T++]=k<=0?0:k>=f?255:k>>h,B[T++]=w<=0?0:w>=f?255:w>>h,B[T++]=x<=0?0:x>=f?255:x>>h
else for(p=0;p<m;p++,T+=F)b=P[p]+u,v=M[p],y=E[p],k=b+1.402*y,w=b-.34413*v-.71414*y,x=b+1.772*v,B[T++]=k<=0?0:k>=f?255:k>>h,B[T++]=w<=0?0:w>=f?255:w>>h,B[T++]=x<=0?0:x>=f?255:x>>h
if(O)for(p=0,T=3;p<m;p++,T+=4)C=L[p],B[T]=C<=d?0:C>=g?255:C+u>>h}else for(o=0;o<r;o++){var q=l[o].items
for(h=a[o].precision-8,u=.5+(128<<h),f=127.5*(1<<h),d=-f,T=o,p=0,m=q.length;p<m;p++)A=q[p],B[T]=A<=d?0:A>=f?255:A+u>>h,T+=r}i.push(R)}return i}function I(e,t){for(var a=e.SIZ,r=a.Csiz,i=e.tiles[t],n=0;n<r;n++){var s=i.components[n],o=void 0!==e.currentTile.QCC[n]?e.currentTile.QCC[n]:e.currentTile.QCD
s.quantizationParameters=o
var c=void 0!==e.currentTile.COC[n]?e.currentTile.COC[n]:e.currentTile.COD
s.codingStyleParameters=c}i.codingStyleDefaultParameters=e.currentTile.COD}var B={LL:0,LH:1,HL:1,HH:2}
e.prototype={parse:function(e){if(65359===l(e,0))return void this.parseCodestream(e,0,e.length)
for(var t=0,a=e.length;t<a;){var r=8,i=h(e,t),c=h(e,t+4)
t+=r,1===i&&(i=4294967296*h(e,t)+h(e,t+4),t+=8,r+=8),0===i&&(i=a-t+r),i<r&&o("JPX Error: Invalid box field size")
var u=i-r,f=!0
switch(c){case 1785737832:f=!1
break
case 1668246642:var d=e[t]
if(1===d){var g=h(e,t+3)
switch(g){case 16:case 17:case 18:break
default:s("Unknown colorspace "+g)}}else 2===d&&n("ICC profile not supported")
break
case 1785737827:this.parseCodestream(e,t,t+u)
break
case 1783636e3:218793738!==h(e,t)&&s("Invalid JP2 signature")
break
case 1783634458:case 1718909296:case 1920099697:case 1919251232:case 1768449138:break
default:var p=String.fromCharCode(c>>24&255,c>>16&255,c>>8&255,255&c)
s("Unsupported header type "+c+" ("+p+")")}f&&(t+=u)}},parseImageProperties:function(e){for(var t=e.getByte();t>=0;){var a=t
t=e.getByte()
if(65361===(a<<8|t)){e.skip(4)
var r=e.getInt32()>>>0,i=e.getInt32()>>>0,n=e.getInt32()>>>0,s=e.getInt32()>>>0
e.skip(16)
var c=e.getUint16()
return this.width=r-n,this.height=i-s,this.componentsCount=c,void(this.bitsPerComponent=8)}}o("JPX Error: No size marker found in JPX stream")},parseCodestream:function(e,r,i){var n={},c=!1
try{for(var u=r;u+1<i;){var f=l(e,u)
u+=2
var d,g,p,m,b,v,y=0
switch(f){case 65359:n.mainHeader=!0
break
case 65497:break
case 65361:y=l(e,u)
var k={}
k.Xsiz=h(e,u+4),k.Ysiz=h(e,u+8),k.XOsiz=h(e,u+12),k.YOsiz=h(e,u+16),k.XTsiz=h(e,u+20),k.YTsiz=h(e,u+24),k.XTOsiz=h(e,u+28),k.YTOsiz=h(e,u+32)
var C=l(e,u+36)
k.Csiz=C
var S=[]
d=u+38
for(var B=0;B<C;B++){var R={precision:1+(127&e[d]),isSigned:!!(128&e[d]),XRsiz:e[d+1],YRsiz:e[d+1]}
t(R,k),S.push(R)}n.SIZ=k,n.components=S,a(n,S),n.QCC=[],n.COC=[]
break
case 65372:y=l(e,u)
var T={}
switch(d=u+2,31&(g=e[d++])){case 0:m=8,b=!0
break
case 1:m=16,b=!1
break
case 2:m=16,b=!0
break
default:throw new Error("Invalid SQcd value "+g)}for(T.noQuantization=8===m,T.scalarExpounded=b,T.guardBits=g>>5,p=[];d<y+u;){var O={}
8===m?(O.epsilon=e[d++]>>3,O.mu=0):(O.epsilon=e[d]>>3,O.mu=(7&e[d])<<8|e[d+1],d+=2),p.push(O)}T.SPqcds=p,n.mainHeader?n.QCD=T:(n.currentTile.QCD=T,n.currentTile.QCC=[])
break
case 65373:y=l(e,u)
var P={}
d=u+2
var M
switch(n.SIZ.Csiz<257?M=e[d++]:(M=l(e,d),d+=2),31&(g=e[d++])){case 0:m=8,b=!0
break
case 1:m=16,b=!1
break
case 2:m=16,b=!0
break
default:throw new Error("Invalid SQcd value "+g)}for(P.noQuantization=8===m,P.scalarExpounded=b,P.guardBits=g>>5,p=[];d<y+u;)O={},8===m?(O.epsilon=e[d++]>>3,O.mu=0):(O.epsilon=e[d]>>3,O.mu=(7&e[d])<<8|e[d+1],d+=2),p.push(O)
P.SPqcds=p,n.mainHeader?n.QCC[M]=P:n.currentTile.QCC[M]=P
break
case 65362:y=l(e,u)
var E={}
d=u+2
var L=e[d++]
E.entropyCoderWithCustomPrecincts=!!(1&L),E.sopMarkerUsed=!!(2&L),E.ephMarkerUsed=!!(4&L),E.progressionOrder=e[d++],E.layersCount=l(e,d),d+=2,E.multipleComponentTransform=e[d++],E.decompositionLevelsCount=e[d++],E.xcb=2+(15&e[d++]),E.ycb=2+(15&e[d++])
var D=e[d++]
if(E.selectiveArithmeticCodingBypass=!!(1&D),E.resetContextProbabilities=!!(2&D),E.terminationOnEachCodingPass=!!(4&D),E.verticalyStripe=!!(8&D),E.predictableTermination=!!(16&D),E.segmentationSymbolUsed=!!(32&D),E.reversibleTransformation=e[d++],E.entropyCoderWithCustomPrecincts){for(var F=[];d<y+u;){var q=e[d++]
F.push({PPx:15&q,PPy:q>>4})}E.precinctsSizes=F}var U=[]
if(E.selectiveArithmeticCodingBypass&&U.push("selectiveArithmeticCodingBypass"),E.resetContextProbabilities&&U.push("resetContextProbabilities"),E.terminationOnEachCodingPass&&U.push("terminationOnEachCodingPass"),E.verticalyStripe&&U.push("verticalyStripe"),E.predictableTermination&&U.push("predictableTermination"),U.length>0)throw c=!0,new Error("Unsupported COD options ("+U.join(", ")+")")
n.mainHeader?n.COD=E:(n.currentTile.COD=E,n.currentTile.COC=[])
break
case 65424:y=l(e,u),v={},v.index=l(e,u+2),v.length=h(e,u+4),v.dataEnd=v.length+u-2,v.partIndex=e[u+8],v.partsCount=e[u+9],n.mainHeader=!1,0===v.partIndex&&(v.COD=n.COD,v.COC=n.COC.slice(0),v.QCD=n.QCD,v.QCC=n.QCC.slice(0)),n.currentTile=v
break
case 65427:v=n.currentTile,0===v.partIndex&&(I(n,v.index),w(n)),y=v.dataEnd-u,x(n,e,u,y)
break
case 65365:case 65367:case 65368:case 65380:y=l(e,u)
break
case 65363:throw new Error("Codestream code 0xFF53 (COC) is not implemented")
default:throw new Error("Unknown codestream code: "+f.toString(16))}u+=y}}catch(e){c||this.failOnCorruptedImage?o("JPX Error: "+e.message):s("JPX: Trying to recover from: "+e.message)}this.tiles=A(n),this.width=n.SIZ.Xsiz-n.SIZ.XOsiz,this.height=n.SIZ.Ysiz-n.SIZ.YOsiz,this.componentsCount=n.SIZ.Csiz}}
var R=function(){function e(e,t){var a=c(Math.max(e,t))+1
this.levels=[]
for(var r=0;r<a;r++){var i={width:e,height:t,items:[]}
this.levels.push(i),e=Math.ceil(e/2),t=Math.ceil(t/2)}}return e.prototype={reset:function(e,t){for(var a,r=0,i=0;r<this.levels.length;){a=this.levels[r]
var n=e+t*a.width
if(void 0!==a.items[n]){i=a.items[n]
break}a.index=n,e>>=1,t>>=1,r++}r--,a=this.levels[r],a.items[a.index]=i,this.currentLevel=r,delete this.value},incrementValue:function(){var e=this.levels[this.currentLevel]
e.items[e.index]++},nextLevel:function(){var e=this.currentLevel,t=this.levels[e],a=t.items[t.index]
return--e<0?(this.value=a,!1):(this.currentLevel=e,t=this.levels[e],t.items[t.index]=a,!0)}},e}(),T=function(){function e(e,t,a){var r=c(Math.max(e,t))+1
this.levels=[]
for(var i=0;i<r;i++){for(var n=new Uint8Array(e*t),s=0,o=n.length;s<o;s++)n[s]=a
var l={width:e,height:t,items:n}
this.levels.push(l),e=Math.ceil(e/2),t=Math.ceil(t/2)}}return e.prototype={reset:function(e,t,a){for(var r=0;r<this.levels.length;){var i=this.levels[r],n=e+t*i.width
i.index=n
var s=i.items[n]
if(255===s)break
if(s>a)return this.currentLevel=r,this.propagateValues(),!1
e>>=1,t>>=1,r++}return this.currentLevel=r-1,!0},incrementValue:function(e){var t=this.levels[this.currentLevel]
t.items[t.index]=e+1,this.propagateValues()},propagateValues:function(){for(var e=this.currentLevel,t=this.levels[e],a=t.items[t.index];--e>=0;)t=this.levels[e],t.items[t.index]=a},nextLevel:function(){var e=this.currentLevel,t=this.levels[e],a=t.items[t.index]
return t.items[t.index]=255,!(--e<0)&&(this.currentLevel=e,t=this.levels[e],t.items[t.index]=a,!0)}},e}(),O=function(){function e(e,i,n,s,o){this.width=e,this.height=i,this.contextLabelTable="HH"===n?r:"HL"===n?a:t
var c=e*i
this.neighborsSignificance=new Uint8Array(c),this.coefficentsSign=new Uint8Array(c),this.coefficentsMagnitude=o>14?new Uint32Array(c):o>6?new Uint16Array(c):new Uint8Array(c),this.processingFlags=new Uint8Array(c)
var l=new Uint8Array(c)
if(0!==s)for(var h=0;h<c;h++)l[h]=s
this.bitsDecoded=l,this.reset()}var t=new Uint8Array([0,5,8,0,3,7,8,0,4,7,8,0,0,0,0,0,1,6,8,0,3,7,8,0,4,7,8,0,0,0,0,0,2,6,8,0,3,7,8,0,4,7,8,0,0,0,0,0,2,6,8,0,3,7,8,0,4,7,8,0,0,0,0,0,2,6,8,0,3,7,8,0,4,7,8]),a=new Uint8Array([0,3,4,0,5,7,7,0,8,8,8,0,0,0,0,0,1,3,4,0,6,7,7,0,8,8,8,0,0,0,0,0,2,3,4,0,6,7,7,0,8,8,8,0,0,0,0,0,2,3,4,0,6,7,7,0,8,8,8,0,0,0,0,0,2,3,4,0,6,7,7,0,8,8,8]),r=new Uint8Array([0,1,2,0,1,2,2,0,2,2,2,0,0,0,0,0,3,4,5,0,4,5,5,0,5,5,5,0,0,0,0,0,6,7,7,0,7,7,7,0,7,7,7,0,0,0,0,0,8,8,8,0,8,8,8,0,8,8,8,0,0,0,0,0,8,8,8,0,8,8,8,0,8,8,8])
return e.prototype={setDecoder:function(e){this.decoder=e},reset:function(){this.contexts=new Int8Array(19),this.contexts[0]=8,this.contexts[17]=92,this.contexts[18]=6},setNeighborsSignificance:function(e,t,a){var r,i=this.neighborsSignificance,n=this.width,s=this.height,o=t>0,c=t+1<n
e>0&&(r=a-n,o&&(i[r-1]+=16),c&&(i[r+1]+=16),i[r]+=4),e+1<s&&(r=a+n,o&&(i[r-1]+=16),c&&(i[r+1]+=16),i[r]+=4),o&&(i[a-1]+=1),c&&(i[a+1]+=1),i[a]|=128},runSignificancePropagationPass:function(){for(var e=this.decoder,t=this.width,a=this.height,r=this.coefficentsMagnitude,i=this.coefficentsSign,n=this.neighborsSignificance,s=this.processingFlags,o=this.contexts,c=this.contextLabelTable,l=this.bitsDecoded,h=0;h<a;h+=4)for(var u=0;u<t;u++)for(var f=h*t+u,d=0;d<4;d++,f+=t){var g=h+d
if(g>=a)break
if(s[f]&=-2,!r[f]&&n[f]){var p=c[n[f]],m=e.readBit(o,p)
if(m){var b=this.decodeSignBit(g,u,f)
i[f]=b,r[f]=1,this.setNeighborsSignificance(g,u,f),s[f]|=2}l[f]++,s[f]|=1}}},decodeSignBit:function(e,t,a){var r,i,n,s,o,c,l=this.width,h=this.height,u=this.coefficentsMagnitude,f=this.coefficentsSign
s=t>0&&0!==u[a-1],t+1<l&&0!==u[a+1]?(n=f[a+1],s?(i=f[a-1],r=1-n-i):r=1-n-n):s?(i=f[a-1],r=1-i-i):r=0
var d=3*r
return s=e>0&&0!==u[a-l],e+1<h&&0!==u[a+l]?(n=f[a+l],s?(i=f[a-l],r=1-n-i+d):r=1-n-n+d):s?(i=f[a-l],r=1-i-i+d):r=d,r>=0?(o=9+r,c=this.decoder.readBit(this.contexts,o)):(o=9-r,c=1^this.decoder.readBit(this.contexts,o)),c},runMagnitudeRefinementPass:function(){for(var e,t=this.decoder,a=this.width,r=this.height,i=this.coefficentsMagnitude,n=this.neighborsSignificance,s=this.contexts,o=this.bitsDecoded,c=this.processingFlags,l=a*r,h=4*a,u=0;u<l;u=e){e=Math.min(l,u+h)
for(var f=0;f<a;f++)for(var d=u+f;d<e;d+=a)if(i[d]&&0==(1&c[d])){var g=16
if(0!=(2&c[d])){c[d]^=2
var p=127&n[d]
g=0===p?15:14}var m=t.readBit(s,g)
i[d]=i[d]<<1|m,o[d]++,c[d]|=1}}},runCleanupPass:function(){for(var e,t=this.decoder,a=this.width,r=this.height,i=this.neighborsSignificance,n=this.coefficentsMagnitude,s=this.coefficentsSign,o=this.contexts,c=this.contextLabelTable,l=this.bitsDecoded,h=this.processingFlags,u=a,f=2*a,d=3*a,g=0;g<r;g=e){e=Math.min(g+4,r)
for(var p=g*a,m=g+3<r,b=0;b<a;b++){var v,y=p+b,k=m&&0===h[y]&&0===h[y+u]&&0===h[y+f]&&0===h[y+d]&&0===i[y]&&0===i[y+u]&&0===i[y+f]&&0===i[y+d],w=0,x=y,C=g
if(k){if(!t.readBit(o,18)){l[y]++,l[y+u]++,l[y+f]++,l[y+d]++
continue}w=t.readBit(o,17)<<1|t.readBit(o,17),0!==w&&(C=g+w,x+=w*a),v=this.decodeSignBit(C,b,x),s[x]=v,n[x]=1,this.setNeighborsSignificance(C,b,x),h[x]|=2,x=y
for(var S=g;S<=C;S++,x+=a)l[x]++
w++}for(C=g+w;C<e;C++,x+=a)if(!n[x]&&0==(1&h[x])){var A=c[i[x]],I=t.readBit(o,A)
1===I&&(v=this.decodeSignBit(C,b,x),s[x]=v,n[x]=1,this.setNeighborsSignificance(C,b,x),h[x]|=2),l[x]++}}}},checkSegmentationSymbol:function(){var e=this.decoder,t=this.contexts
10!=(e.readBit(t,17)<<3|e.readBit(t,17)<<2|e.readBit(t,17)<<1|e.readBit(t,17))&&o("JPX Error: Invalid segmentation symbol")}},e}(),P=function(){function e(){}return e.prototype.calculate=function(e,t,a){for(var r=e[0],i=1,n=e.length;i<n;i++)r=this.iterate(r,e[i],t,a)
return r},e.prototype.extend=function(e,t,a){var r=t-1,i=t+1,n=t+a-2,s=t+a
e[r--]=e[i++],e[s++]=e[n--],e[r--]=e[i++],e[s++]=e[n--],e[r--]=e[i++],e[s++]=e[n--],e[r]=e[i],e[s]=e[n]},e.prototype.iterate=function(e,t,a,r){var i,n,s,o,c,l,h=e.width,u=e.height,f=e.items,d=t.width,g=t.height,p=t.items
for(s=0,i=0;i<u;i++)for(o=2*i*d,n=0;n<h;n++,s++,o+=2)p[o]=f[s]
f=e.items=null
var m=new Float32Array(d+8)
if(1===d){if(0!=(1&a))for(l=0,s=0;l<g;l++,s+=d)p[s]*=.5}else for(l=0,s=0;l<g;l++,s+=d)m.set(p.subarray(s,s+d),4),this.extend(m,4,d),this.filter(m,4,d),p.set(m.subarray(4,4+d),s)
var b=16,v=[]
for(i=0;i<b;i++)v.push(new Float32Array(g+8))
var y,k=0
if(e=4+g,1===g){if(0!=(1&r))for(c=0;c<d;c++)p[c]*=.5}else for(c=0;c<d;c++){if(0===k){for(b=Math.min(d-c,b),s=c,o=4;o<e;s+=d,o++)for(y=0;y<b;y++)v[y][o]=p[s+y]
k=b}k--
var w=v[k]
if(this.extend(w,4,g),this.filter(w,4,g),0===k)for(s=c-b+1,o=4;o<e;s+=d,o++)for(y=0;y<b;y++)p[s+y]=v[y][o]}return{width:d,height:g,items:p}},e}(),M=function(){function e(){P.call(this)}return e.prototype=Object.create(P.prototype),e.prototype.filter=function(e,t,a){var r=a>>1
t|=0
var i,n,s,o,c=-1.586134342059924,l=-.052980118572961,h=.882911075530934,u=.443506852043971,f=1.230174104914001
for(i=t-3,n=r+4;n--;i+=2)e[i]*=1/f
for(i=t-2,s=u*e[i-1],n=r+3;n--&&(o=u*e[i+1],e[i]=f*e[i]-s-o,n--);i+=2)i+=2,s=u*e[i+1],e[i]=f*e[i]-s-o
for(i=t-1,s=h*e[i-1],n=r+2;n--&&(o=h*e[i+1],e[i]-=s+o,n--);i+=2)i+=2,s=h*e[i+1],e[i]-=s+o
for(i=t,s=l*e[i-1],n=r+1;n--&&(o=l*e[i+1],e[i]-=s+o,n--);i+=2)i+=2,s=l*e[i+1],e[i]-=s+o
if(0!==r)for(i=t+1,s=c*e[i-1],n=r;n--&&(o=c*e[i+1],e[i]-=s+o,n--);i+=2)i+=2,s=c*e[i+1],e[i]-=s+o},e}(),E=function(){function e(){P.call(this)}return e.prototype=Object.create(P.prototype),e.prototype.filter=function(e,t,a){var r=a>>1
t|=0
var i,n
for(i=t,n=r+1;n--;i+=2)e[i]-=e[i-1]+e[i+1]+2>>2
for(i=t+1,n=r;n--;i+=2)e[i]+=e[i-1]+e[i+1]>>1},e}()
return e}()
t.JpxImage=f},function(e,t,a){"use strict"
var r=a(0),i=a(1),n=a(13),s=a(5),o=a(12),c=a(3),l=r.InvalidPDFException,h=r.MissingDataException,u=r.XRefParseException,f=r.assert,d=r.bytesToString,g=r.createPromiseCapability,p=r.error,m=r.info,b=r.isArray,v=r.isBool,y=r.isInt,k=r.isString,w=r.shadow,x=r.stringToPDFString,C=r.stringToUTF8String,S=r.warn,A=r.createValidAbsoluteUrl,I=r.Util,B=i.Ref,R=i.RefSet,T=i.RefSetCache,O=i.isName,P=i.isCmd,M=i.isDict,E=i.isRef,L=i.isRefsEqual,D=i.isStream,F=n.CipherTransformFactory,q=s.Lexer,U=s.Parser,N=o.ChunkedStream,j=c.ColorSpace,_=function(){function e(e,t,a){this.pdfManager=e,this.xref=t,this.catDict=t.getCatalogObj(),this.fontCache=new T,this.builtInCMapCache=Object.create(null),f(M(this.catDict),"catalog object is not a dictionary"),this.pageFactory=a,this.pagePromises=[]}return e.prototype={get metadata(){var e=this.catDict.getRaw("Metadata")
if(!E(e))return w(this,"metadata",null)
var t,a=!!this.xref.encrypt&&this.xref.encrypt.encryptMetadata,r=this.xref.fetch(e,!a)
if(r&&M(r.dict)){var i=r.dict.get("Type"),n=r.dict.get("Subtype")
if(O(i,"Metadata")&&O(n,"XML"))try{t=C(d(r.getBytes()))}catch(e){if(e instanceof h)throw e
m("Skipping invalid metadata.")}}return w(this,"metadata",t)},get toplevelPagesDict(){var e=this.catDict.get("Pages")
return f(M(e),"invalid top-level pages dictionary"),w(this,"toplevelPagesDict",e)},get documentOutline(){var e=null
try{e=this.readDocumentOutline()}catch(e){if(e instanceof h)throw e
S("Unable to read document outline")}return w(this,"documentOutline",e)},readDocumentOutline:function(){var t=this.catDict.get("Outlines")
if(!M(t))return null
if(t=t.getRaw("First"),!E(t))return null
var a={items:[]},r=[{obj:t,parent:a}],i=new R
i.put(t)
for(var n=this.xref,s=new Uint8Array(3);r.length>0;){var o=r.shift(),c=n.fetchIfRef(o.obj)
if(null!==c){f(c.has("Title"),"Invalid outline item")
var l={url:null,dest:null}
e.parseDestDictionary({destDict:c,resultObj:l,docBaseUrl:this.pdfManager.docBaseUrl})
var h=c.get("Title"),u=c.get("F")||0,d=c.getArray("C"),g=s
!b(d)||3!==d.length||0===d[0]&&0===d[1]&&0===d[2]||(g=j.singletons.rgb.getRgb(d,0))
var p={dest:l.dest,url:l.url,unsafeUrl:l.unsafeUrl,newWindow:l.newWindow,title:x(h),color:g,count:c.get("Count"),bold:!!(2&u),italic:!!(1&u),items:[]}
o.parent.items.push(p),t=c.getRaw("First"),E(t)&&!i.has(t)&&(r.push({obj:t,parent:p}),i.put(t)),t=c.getRaw("Next"),E(t)&&!i.has(t)&&(r.push({obj:t,parent:o.parent}),i.put(t))}}return a.items.length>0?a.items:null},get numPages(){var e=this.toplevelPagesDict.get("Count")
return f(y(e),"page count in top level pages object is not an integer"),w(this,"num",e)},get destinations(){function e(e){return M(e)?e.get("D"):e}var t,a,r=this.xref,i={},n=this.catDict.get("Names")
if(n&&n.has("Dests")?t=n.getRaw("Dests"):this.catDict.has("Dests")&&(a=this.catDict.get("Dests")),a&&(n=a,n.forEach(function(t,a){a&&(i[t]=e(a))})),t){var s=new G(t,r),o=s.getAll()
for(var c in o)i[c]=e(o[c])}return w(this,"destinations",i)},getDestination:function(e){function t(e){return M(e)?e.get("D"):e}var a,r,i=this.xref,n=null,s=this.catDict.get("Names")
if(s&&s.has("Dests")?a=s.getRaw("Dests"):this.catDict.has("Dests")&&(r=this.catDict.get("Dests")),r){var o=r.get(e)
o&&(n=t(o))}if(a){n=t(new G(a,i).get(e))}return n},get pageLabels(){var e=null
try{e=this.readPageLabels()}catch(e){if(e instanceof h)throw e
S("Unable to read page labels.")}return w(this,"pageLabels",e)},readPageLabels:function(){var e=this.catDict.getRaw("PageLabels")
if(!e)return null
for(var t=new Array(this.numPages),a=null,r="",i=new X(e,this.xref),n=i.getAll(),s="",o=1,c=0,l=this.numPages;c<l;c++){if(c in n){var h=n[c]
f(M(h),"The PageLabel is not a dictionary.")
var u=h.get("Type")
f(!u||O(u,"PageLabel"),"Invalid type in PageLabel dictionary.")
var d=h.get("S")
f(!d||O(d),"Invalid style in PageLabel dictionary."),a=d?d.name:null
var g=h.get("P")
f(!g||k(g),"Invalid prefix in PageLabel dictionary."),r=g?x(g):""
var p=h.get("St")
f(!p||y(p)&&p>=1,"Invalid start in PageLabel dictionary."),o=p||1}switch(a){case"D":s=o
break
case"R":case"r":s=I.toRoman(o,"r"===a)
break
case"A":case"a":for(var m="a"===a?97:65,b=o-1,v=String.fromCharCode(m+b%26),w=[],C=0,S=b/26|0;C<=S;C++)w.push(v)
s=w.join("")
break
default:f(!a,'Invalid style "'+a+'" in PageLabel dictionary.')}t[c]=r+s,s="",o++}return t},get attachments(){var e,t=this.xref,a=null,r=this.catDict.get("Names")
if(r&&(e=r.getRaw("EmbeddedFiles")),e){var i=new G(e,t),n=i.getAll()
for(var s in n){var o=new V(n[s],t)
a||(a=Object.create(null)),a[x(s)]=o.serializable}}return w(this,"attachments",a)},get javaScript(){function e(e){var t=e.get("S")
if(O(t,"JavaScript")){var a=e.get("JS")
if(D(a))a=d(a.getBytes())
else if(!k(a))return
r.push(x(a))}}var t=this.xref,a=this.catDict.get("Names"),r=[]
if(a&&a.has("JavaScript")){var i=new G(a.getRaw("JavaScript"),t),n=i.getAll()
for(var s in n){var o=n[s]
M(o)&&e(o)}}var c=this.catDict.get("OpenAction")
if(M(c,"Action")){var l=c.get("S")
if(O(l,"Named")){var h=c.get("N")
O(h,"Print")&&r.push("print({});")}else e(c)}return w(this,"javaScript",r)},cleanup:function(){var e=[]
return this.fontCache.forEach(function(t){e.push(t)}),Promise.all(e).then(function(e){for(var t=0,a=e.length;t<a;t++){delete e[t].dict.translated}this.fontCache.clear(),this.builtInCMapCache=Object.create(null)}.bind(this))},getPage:function(e){return e in this.pagePromises||(this.pagePromises[e]=this.getPageDict(e).then(function(t){var a=t[0],r=t[1]
return this.pageFactory.createPage(e,a,r,this.fontCache,this.builtInCMapCache)}.bind(this))),this.pagePromises[e]},getPageDict:function(e){function t(){for(;r.length;){var s=r.pop()
if(E(s))return void n.fetchAsync(s).then(function(n){if(M(n,"Page")||M(n)&&!n.has("Kids"))return void(e===i?a.resolve([n,s]):(i++,t()))
r.push(n),t()},a.reject)
f(M(s),"page dictionary kid reference points to wrong type of object")
var o=s.get("Count")
if(i+o<=e)i+=o
else{var c=s.get("Kids")
f(b(c),"page dictionary kids object is not an array")
for(var l=c.length-1;l>=0;l--)r.push(c[l])}}a.reject("Page index "+e+" not found.")}var a=g(),r=[this.catDict.getRaw("Pages")],i=0,n=this.xref
return t(),a.promise},getPageIndex:function(e){function t(t){var a,i=0
return r.fetchAsync(t).then(function(r){if(L(t,e)&&!M(r,"Page")&&(!M(r)||r.has("Type")||!r.has("Contents")))throw new Error("The reference does not point to a /Page Dict.")
return r?(f(M(r),"node must be a Dict."),a=r.getRaw("Parent"),r.getAsync("Parent")):null}).then(function(e){return e?(f(M(e),"parent must be a Dict."),e.getAsync("Kids")):null}).then(function(e){if(!e)return null
for(var n=[],s=!1,o=0;o<e.length;o++){var c=e[o]
if(f(E(c),"kid must be a Ref."),c.num===t.num){s=!0
break}n.push(r.fetchAsync(c).then(function(e){if(e.has("Count")){var t=e.get("Count")
i+=t}else i++}))}return s||p("kid ref not found in parents kids"),Promise.all(n).then(function(){return[i,a]})})}function a(e){return t(e).then(function(e){if(!e)return i
var t=e[0],r=e[1]
return i+=t,a(r)})}var r=this.xref,i=0
return a(e)}},e.parseDestDictionary=function(e){var t=e.destDict
if(!M(t))return void S('Catalog_parseDestDictionary: "destDict" must be a dictionary.')
var a=e.resultObj
if("object"!=typeof a)return void S('Catalog_parseDestDictionary: "resultObj" must be an object.')
var r,i,n=e.docBaseUrl||null,s=t.get("A")
if(M(s)){var o=s.get("S").name
switch(o){case"URI":r=s.get("URI"),O(r)?r="/"+r.name:k(r)&&(r=function(e){return 0===e.indexOf("www.")?"http://"+e:e}(r))
break
case"GoTo":i=s.get("D")
break
case"Launch":case"GoToR":var c=s.get("F")
M(c)?r=c.get("F")||null:k(c)&&(r=c)
var l=s.get("D")
if(l&&(O(l)&&(l=l.name),k(r))){var h=r.split("#")[0]
k(l)?r=h+"#"+(/^\d+$/.test(l)?"nameddest=":"")+l:b(l)&&(r=h+"#"+JSON.stringify(l))}var u=s.get("NewWindow")
v(u)&&(a.newWindow=u)
break
case"Named":var f=s.get("N")
O(f)&&(a.action=f.name)
break
case"JavaScript":var g,p=s.get("JS")
if(D(p)?g=d(p.getBytes()):k(p)&&(g=p),g){var m=["app.launchURL","window.open"],y=new RegExp("^\\s*("+m.join("|").split(".").join("\\.")+")\\((?:'|\")([^'\"]*)(?:'|\")(?:,\\s*(\\w+)\\)|\\))","i"),w=y.exec(x(g))
if(w&&w[2]){r=w[2],"true"===w[3]&&"app.launchURL"===w[1]&&(a.newWindow=!0)
break}}default:S('Catalog_parseDestDictionary: Unrecognized link type "'+o+'".')}}else t.has("Dest")&&(i=t.get("Dest"))
if(k(r)){r=function(e){try{return C(e)}catch(t){return e}}(r)
var I=A(r,n)
I&&(a.url=I.href),a.unsafeUrl=r}i&&(O(i)&&(i=i.name),(k(i)||b(i))&&(a.dest=i))},e}(),z=function(){function e(e,t){this.stream=e,this.pdfManager=t,this.entries=[],this.xrefstms=Object.create(null),this.cache=[],this.stats={streamTypes:[],fontTypes:[]}}return e.prototype={setStartXRef:function(e){this.startXRefQueue=[e]},parse:function(e){var t
e?(S("Indexing all PDF objects"),t=this.indexObjects()):t=this.readXRef(),t.assignXref(this),this.trailer=t
var a=t.get("Encrypt")
if(M(a)){var r=t.get("ID"),i=r&&r.length?r[0]:""
a.suppressEncryption=!0,this.encrypt=new F(a,i,this.pdfManager.password)}(this.root=t.get("Root"))||p("Invalid root reference")},processXRefTable:function(e){"tableState"in this||(this.tableState={entryNum:0,streamPos:e.lexer.stream.pos,parserBuf1:e.buf1,parserBuf2:e.buf2})
var t=this.readXRefTable(e)
P(t,"trailer")||p("Invalid XRef table: could not find trailer dictionary")
var a=e.getObj()
return!M(a)&&a.dict&&(a=a.dict),M(a)||p("Invalid XRef table: could not parse trailer dictionary"),delete this.tableState,a},readXRefTable:function(e){var t=e.lexer.stream,a=this.tableState
t.pos=a.streamPos,e.buf1=a.parserBuf1,e.buf2=a.parserBuf2
for(var r;;){if(!("firstEntryNum"in a&&"entryCount"in a)){if(P(r=e.getObj(),"trailer"))break
a.firstEntryNum=r,a.entryCount=e.getObj()}var i=a.firstEntryNum,n=a.entryCount
y(i)&&y(n)||p("Invalid XRef table: wrong types in subsection header")
for(var s=a.entryNum;s<n;s++){a.streamPos=t.pos,a.entryNum=s,a.parserBuf1=e.buf1,a.parserBuf2=e.buf2
var o={}
o.offset=e.getObj(),o.gen=e.getObj()
var c=e.getObj()
P(c,"f")?o.free=!0:P(c,"n")&&(o.uncompressed=!0),y(o.offset)&&y(o.gen)&&(o.free||o.uncompressed)||p("Invalid entry in XRef subsection: "+i+", "+n),0===s&&o.free&&1===i&&(i=0),this.entries[s+i]||(this.entries[s+i]=o)}a.entryNum=0,a.streamPos=t.pos,a.parserBuf1=e.buf1,a.parserBuf2=e.buf2,delete a.firstEntryNum,delete a.entryCount}return this.entries[0]&&!this.entries[0].free&&p("Invalid XRef table: unexpected first object"),r},processXRefStream:function(e){if(!("streamState"in this)){var t=e.dict,a=t.get("W"),r=t.get("Index")
r||(r=[0,t.get("Size")]),this.streamState={entryRanges:r,byteWidths:a,entryNum:0,streamPos:e.pos}}return this.readXRefStream(e),delete this.streamState,e.dict},readXRefStream:function(e){var t,a,r=this.streamState
e.pos=r.streamPos
for(var i=r.byteWidths,n=i[0],s=i[1],o=i[2],c=r.entryRanges;c.length>0;){var l=c[0],h=c[1]
for(y(l)&&y(h)||p("Invalid XRef range fields: "+l+", "+h),y(n)&&y(s)&&y(o)||p("Invalid XRef entry fields length: "+l+", "+h),t=r.entryNum;t<h;++t){r.entryNum=t,r.streamPos=e.pos
var u=0,f=0,d=0
for(a=0;a<n;++a)u=u<<8|e.getByte()
for(0===n&&(u=1),a=0;a<s;++a)f=f<<8|e.getByte()
for(a=0;a<o;++a)d=d<<8|e.getByte()
var g={}
switch(g.offset=f,g.gen=d,u){case 0:g.free=!0
break
case 1:g.uncompressed=!0
break
case 2:break
default:p("Invalid XRef entry type: "+u)}this.entries[l+t]||(this.entries[l+t]=g)}r.entryNum=0,r.streamPos=e.pos,c.splice(0,2)}},indexObjects:function(){function e(e,t,a){for(var r=a.length,i=e.length,n=0;t<i;){for(var s=0;s<r&&e[t+s]===a[s];)++s
if(s>=r)break
t++,n++}return n}var t=10,a=13,r=60,i=/^(\d+)\s+(\d+)\s+obj\b/,n=new Uint8Array([116,114,97,105,108,101,114]),s=new Uint8Array([115,116,97,114,116,120,114,101,102]),o=new Uint8Array([101,110,100,111,98,106]),c=new Uint8Array([47,88,82,101,102])
this.entries.length=0
var h=this.stream
h.pos=0
for(var u=h.getBytes(),f=h.start,d=u.length,g=[],p=[];f<d;){var m=u[f]
if(9!==m&&m!==t&&m!==a&&32!==m)if(37!==m){var b,v=function(e,i){for(var n="",s=e[i];s!==t&&s!==a&&s!==r&&!(++i>=e.length);)n+=String.fromCharCode(s),s=e[i]
return n}(u,f)
if(0!==v.indexOf("xref")||4!==v.length&&!/\s/.test(v[4]))if(b=i.exec(v)){void 0===this.entries[b[1]]&&(this.entries[b[1]]={offset:f-h.start,gen:0|b[2],uncompressed:!0})
var y=e(u,f,o)+7,k=u.subarray(f,f+y),w=e(k,0,c)
w<y&&k[w+5]<64&&(p.push(f-h.start),this.xrefstms[f-h.start]=1),f+=y}else 0!==v.indexOf("trailer")||7!==v.length&&!/\s/.test(v[7])?f+=v.length+1:(g.push(f),f+=e(u,f,s))
else f+=e(u,f,n),g.push(f),f+=e(u,f,s)}else do{if(++f>=d)break
m=u[f]}while(m!==t&&m!==a)
else++f}var x,C
for(x=0,C=p.length;x<C;++x)this.startXRefQueue.push(p[x]),this.readXRef(!0)
var S
for(x=0,C=g.length;x<C;++x){h.pos=g[x]
var A=new U(new q(h),!0,this,!0),I=A.getObj()
if(P(I,"trailer")&&(S=A.getObj(),M(S)&&S.has("ID")))return S}if(S)return S
throw new l("Invalid PDF structure")},readXRef:function(e){var t=this.stream
try{for(;this.startXRefQueue.length;){var a=this.startXRefQueue[0]
t.pos=a+t.start
var r,i=new U(new q(t),!0,this),n=i.getObj()
if(P(n,"xref")){if(r=this.processXRefTable(i),this.topDict||(this.topDict=r),n=r.get("XRefStm"),y(n)){var s=n
s in this.xrefstms||(this.xrefstms[s]=1,this.startXRefQueue.push(s))}}else y(n)?(y(i.getObj())&&P(i.getObj(),"obj")&&D(n=i.getObj())||p("Invalid XRef stream"),r=this.processXRefStream(n),this.topDict||(this.topDict=r),r||p("Failed to read XRef stream")):p("Invalid XRef stream header")
n=r.get("Prev"),y(n)?this.startXRefQueue.push(n):E(n)&&this.startXRefQueue.push(n.num),this.startXRefQueue.shift()}return this.topDict}catch(e){if(e instanceof h)throw e
m("(while reading XRef): "+e)}if(!e)throw new u},getEntry:function(e){var t=this.entries[e]
return t&&!t.free&&t.offset?t:null},fetchIfRef:function(e,t){return E(e)?this.fetch(e,t):e},fetch:function(e,t){f(E(e),"ref object is not a reference")
var a=e.num
if(a in this.cache){var r=this.cache[a]
return M(r)&&!r.objId&&(r.objId=e.toString()),r}var i=this.getEntry(a)
return null===i?this.cache[a]=null:(i=i.uncompressed?this.fetchUncompressed(e,i,t):this.fetchCompressed(i,t),M(i)?i.objId=e.toString():D(i)&&(i.dict.objId=e.toString()),i)},fetchUncompressed:function(e,t,a){var r=e.gen,i=e.num
t.gen!==r&&p("inconsistent generation in XRef")
var n=this.stream.makeSubStream(t.offset+this.stream.start),s=new U(new q(n),!0,this),o=s.getObj(),c=s.getObj(),l=s.getObj()
if(y(o)&&parseInt(o,10)===i&&y(c)&&parseInt(c,10)===r&&P(l)||p("bad XRef entry"),!P(l,"obj")){if(0===l.cmd.indexOf("obj")&&(i=parseInt(l.cmd.substring(3),10),!isNaN(i)))return i
p("bad XRef entry")}return t=this.encrypt&&!a?s.getObj(this.encrypt.createCipherTransform(i,r)):s.getObj(),D(t)||(this.cache[i]=t),t},fetchCompressed:function(e,t){var a=e.offset,r=this.fetch(new B(a,0))
D(r)||p("bad ObjStm stream")
var i=r.dict.get("First"),n=r.dict.get("N")
y(i)&&y(n)||p("invalid first and n parameters for ObjStm stream")
var s=new U(new q(r),!1,this)
s.allowStreams=!0
var o,c,l=[],h=[]
for(o=0;o<n;++o){c=s.getObj(),y(c)||p("invalid object number in the ObjStm stream: "+c),h.push(c)
var u=s.getObj()
y(u)||p("invalid object offset in the ObjStm stream: "+u)}for(o=0;o<n;++o){l.push(s.getObj()),P(s.buf1,"endobj")&&s.shift(),c=h[o]
var f=this.entries[c]
f&&f.offset===a&&f.gen===o&&(this.cache[c]=l[o])}return e=l[e.gen],void 0===e&&p("bad XRef entry for compressed object"),e},fetchIfRefAsync:function(e,t){return E(e)?this.fetchAsync(e,t):Promise.resolve(e)},fetchAsync:function(e,t){var a=this.stream.manager,r=this
return new Promise(function i(n,s){try{n(r.fetch(e,t))}catch(e){if(e instanceof h)return void a.requestRange(e.begin,e.end).then(function(){i(n,s)},s)
s(e)}})},getCatalogObj:function(){return this.root}},e}(),H=function(){function e(e,t){throw new Error("Cannot initialize NameOrNumberTree.")}return e.prototype={getAll:function(){var e=Object.create(null)
if(!this.root)return e
var t=this.xref,a=new R
a.put(this.root)
for(var r=[this.root];r.length>0;){var i,n,s=t.fetchIfRef(r.shift())
if(M(s))if(s.has("Kids")){var o=s.get("Kids")
for(i=0,n=o.length;i<n;i++){var c=o[i]
f(!a.has(c),'Duplicate entry in "'+this._type+'" tree.'),r.push(c),a.put(c)}}else{var l=s.get(this._type)
if(b(l))for(i=0,n=l.length;i<n;i+=2)e[t.fetchIfRef(l[i])]=t.fetchIfRef(l[i+1])}}return e},get:function(e){if(!this.root)return null
for(var t,a,r,i=this.xref,n=i.fetchIfRef(this.root),s=0;n.has("Kids");){if(++s>10)return S('Search depth limit reached for "'+this._type+'" tree.'),null
var o=n.get("Kids")
if(!b(o))return null
for(t=0,a=o.length-1;t<=a;){r=t+a>>1
var c=i.fetchIfRef(o[r]),l=c.get("Limits")
if(e<i.fetchIfRef(l[0]))a=r-1
else{if(!(e>i.fetchIfRef(l[1]))){n=i.fetchIfRef(o[r])
break}t=r+1}}if(t>a)return null}var h=n.get(this._type)
if(b(h))for(t=0,a=h.length-2;t<=a;){r=t+a&-2
var u=i.fetchIfRef(h[r])
if(e<u)a=r-2
else{if(!(e>u))return i.fetchIfRef(h[r+1])
t=r+2}}return null}},e}(),G=function(){function e(e,t){this.root=e,this.xref=t,this._type="Names"}return I.inherit(e,H,{}),e}(),X=function(){function e(e,t){this.root=e,this.xref=t,this._type="Nums"}return I.inherit(e,H,{}),e}(),V=function(){function e(e,t){e&&M(e)&&(this.xref=t,this.root=e,e.has("FS")&&(this.fs=e.get("FS")),this.description=e.has("Desc")?x(e.get("Desc")):"",e.has("RF")&&S("Related file specifications are not supported"),this.contentAvailable=!0,e.has("EF")||(this.contentAvailable=!1,S("Non-embedded file specifications are not supported")))}function t(e){return e.has("UF")?e.get("UF"):e.has("F")?e.get("F"):e.has("Unix")?e.get("Unix"):e.has("Mac")?e.get("Mac"):e.has("DOS")?e.get("DOS"):null}return e.prototype={get filename(){if(!this._filename&&this.root){var e=t(this.root)||"unnamed"
this._filename=x(e).replace(/\\\\/g,"\\").replace(/\\\//g,"/").replace(/\\/g,"/")}return this._filename},get content(){if(!this.contentAvailable)return null
!this.contentRef&&this.root&&(this.contentRef=t(this.root.get("EF")))
var e=null
if(this.contentRef){var a=this.xref,r=a.fetchIfRef(this.contentRef)
r&&D(r)?e=r.getBytes():S("Embedded file specification points to non-existing/invalid content")}else S("Embedded file specification does not have a content")
return e},get serializable(){return{filename:this.filename,content:this.content}}},e}(),W=function(){function e(e){return E(e)||M(e)||b(e)||D(e)}function t(t,a){var r
if(M(t)||D(t)){var i
i=M(t)?t.map:t.dict.map
for(var n in i)r=i[n],e(r)&&a.push(r)}else if(b(t))for(var s=0,o=t.length;s<o;s++)r=t[s],e(r)&&a.push(r)}function a(e,t,a){this.obj=e,this.keys=t,this.xref=a,this.refSet=null,this.capability=null}return a.prototype={load:function(){var e=this.keys
if(this.capability=g(),!(this.xref.stream instanceof N)||0===this.xref.stream.getMissingChunks().length)return this.capability.resolve(),this.capability.promise
this.refSet=new R
for(var t=[],a=0;a<e.length;a++)t.push(this.obj[e[a]])
return this._walk(t),this.capability.promise},_walk:function(e){for(var a=[],r=[];e.length;){var i=e.pop()
if(E(i)){if(this.refSet.has(i))continue
try{var n=i
this.refSet.put(n),i=this.xref.fetch(i)}catch(e){if(!(e instanceof h))throw e
a.push(i),r.push({begin:e.begin,end:e.end})}}if(i&&i.getBaseStreams){for(var s=i.getBaseStreams(),o=!1,c=0;c<s.length;c++){var l=s[c]
l.getMissingChunks&&l.getMissingChunks().length&&(o=!0,r.push({begin:l.start,end:l.end}))}o&&a.push(i)}t(i,e)}if(r.length)return void this.xref.stream.manager.requestRanges(r).then(function(){e=a
for(var t=0;t<a.length;t++){var r=a[t]
E(r)&&this.refSet.remove(r)}this._walk(e)}.bind(this),this.capability.reject)
this.refSet=null,this.capability.resolve()}},a}()
t.Catalog=_,t.ObjectLoader=W,t.XRef=z,t.FileSpec=V},function(e,t,a){"use strict"
var r=a(0),i=r.getLookupTableFactory,n=i(function(e){e.ArialNarrow="Helvetica",e["ArialNarrow-Bold"]="Helvetica-Bold",e["ArialNarrow-BoldItalic"]="Helvetica-BoldOblique",e["ArialNarrow-Italic"]="Helvetica-Oblique",e.ArialBlack="Helvetica",e["ArialBlack-Bold"]="Helvetica-Bold",e["ArialBlack-BoldItalic"]="Helvetica-BoldOblique",e["ArialBlack-Italic"]="Helvetica-Oblique",e["Arial-Black"]="Helvetica",e["Arial-Black-Bold"]="Helvetica-Bold",e["Arial-Black-BoldItalic"]="Helvetica-BoldOblique",e["Arial-Black-Italic"]="Helvetica-Oblique",e.Arial="Helvetica",e["Arial-Bold"]="Helvetica-Bold",e["Arial-BoldItalic"]="Helvetica-BoldOblique",e["Arial-Italic"]="Helvetica-Oblique",e["Arial-BoldItalicMT"]="Helvetica-BoldOblique",e["Arial-BoldMT"]="Helvetica-Bold",e["Arial-ItalicMT"]="Helvetica-Oblique",e.ArialMT="Helvetica",e["Courier-Bold"]="Courier-Bold",e["Courier-BoldItalic"]="Courier-BoldOblique",e["Courier-Italic"]="Courier-Oblique",e.CourierNew="Courier",e["CourierNew-Bold"]="Courier-Bold",e["CourierNew-BoldItalic"]="Courier-BoldOblique",e["CourierNew-Italic"]="Courier-Oblique",e["CourierNewPS-BoldItalicMT"]="Courier-BoldOblique",e["CourierNewPS-BoldMT"]="Courier-Bold",e["CourierNewPS-ItalicMT"]="Courier-Oblique",e.CourierNewPSMT="Courier",e.Helvetica="Helvetica",e["Helvetica-Bold"]="Helvetica-Bold",e["Helvetica-BoldItalic"]="Helvetica-BoldOblique",e["Helvetica-BoldOblique"]="Helvetica-BoldOblique",e["Helvetica-Italic"]="Helvetica-Oblique",e["Helvetica-Oblique"]="Helvetica-Oblique",e["Symbol-Bold"]="Symbol",e["Symbol-BoldItalic"]="Symbol",e["Symbol-Italic"]="Symbol",e.TimesNewRoman="Times-Roman",e["TimesNewRoman-Bold"]="Times-Bold",e["TimesNewRoman-BoldItalic"]="Times-BoldItalic",e["TimesNewRoman-Italic"]="Times-Italic",e.TimesNewRomanPS="Times-Roman",e["TimesNewRomanPS-Bold"]="Times-Bold",e["TimesNewRomanPS-BoldItalic"]="Times-BoldItalic",e["TimesNewRomanPS-BoldItalicMT"]="Times-BoldItalic",e["TimesNewRomanPS-BoldMT"]="Times-Bold",e["TimesNewRomanPS-Italic"]="Times-Italic",e["TimesNewRomanPS-ItalicMT"]="Times-Italic",e.TimesNewRomanPSMT="Times-Roman",e["TimesNewRomanPSMT-Bold"]="Times-Bold",e["TimesNewRomanPSMT-BoldItalic"]="Times-BoldItalic",e["TimesNewRomanPSMT-Italic"]="Times-Italic"}),s=i(function(e){e.CenturyGothic="Helvetica",e["CenturyGothic-Bold"]="Helvetica-Bold",e["CenturyGothic-BoldItalic"]="Helvetica-BoldOblique",e["CenturyGothic-Italic"]="Helvetica-Oblique",e.ComicSansMS="Comic Sans MS",e["ComicSansMS-Bold"]="Comic Sans MS-Bold",e["ComicSansMS-BoldItalic"]="Comic Sans MS-BoldItalic",e["ComicSansMS-Italic"]="Comic Sans MS-Italic",e.LucidaConsole="Courier",e["LucidaConsole-Bold"]="Courier-Bold",e["LucidaConsole-BoldItalic"]="Courier-BoldOblique",e["LucidaConsole-Italic"]="Courier-Oblique",e["MS-Gothic"]="MS Gothic",e["MS-Gothic-Bold"]="MS Gothic-Bold",e["MS-Gothic-BoldItalic"]="MS Gothic-BoldItalic",e["MS-Gothic-Italic"]="MS Gothic-Italic",e["MS-Mincho"]="MS Mincho",e["MS-Mincho-Bold"]="MS Mincho-Bold",e["MS-Mincho-BoldItalic"]="MS Mincho-BoldItalic",e["MS-Mincho-Italic"]="MS Mincho-Italic",e["MS-PGothic"]="MS PGothic",e["MS-PGothic-Bold"]="MS PGothic-Bold",e["MS-PGothic-BoldItalic"]="MS PGothic-BoldItalic",e["MS-PGothic-Italic"]="MS PGothic-Italic",e["MS-PMincho"]="MS PMincho",e["MS-PMincho-Bold"]="MS PMincho-Bold",e["MS-PMincho-BoldItalic"]="MS PMincho-BoldItalic",e["MS-PMincho-Italic"]="MS PMincho-Italic",e.NuptialScript="Times-Italic",e.Wingdings="ZapfDingbats"}),o=i(function(e){e["Adobe Jenson"]=!0,e["Adobe Text"]=!0,e.Albertus=!0,e.Aldus=!0,e.Alexandria=!0,e.Algerian=!0,e["American Typewriter"]=!0,e.Antiqua=!0,e.Apex=!0,e.Arno=!0,e.Aster=!0,e.Aurora=!0,e.Baskerville=!0,e.Bell=!0,e.Bembo=!0,e["Bembo Schoolbook"]=!0,e.Benguiat=!0,e["Berkeley Old Style"]=!0,e["Bernhard Modern"]=!0,e["Berthold City"]=!0,e.Bodoni=!0,e["Bauer Bodoni"]=!0,e["Book Antiqua"]=!0,e.Bookman=!0,e["Bordeaux Roman"]=!0,e["Californian FB"]=!0,e.Calisto=!0,e.Calvert=!0,e.Capitals=!0,e.Cambria=!0,e.Cartier=!0,e.Caslon=!0,e.Catull=!0,e.Centaur=!0,e["Century Old Style"]=!0,e["Century Schoolbook"]=!0,e.Chaparral=!0,e["Charis SIL"]=!0,e.Cheltenham=!0,e["Cholla Slab"]=!0,e.Clarendon=!0,e.Clearface=!0,e.Cochin=!0,e.Colonna=!0,e["Computer Modern"]=!0,e["Concrete Roman"]=!0,e.Constantia=!0,e["Cooper Black"]=!0,e.Corona=!0,e.Ecotype=!0,e.Egyptienne=!0,e.Elephant=!0,e.Excelsior=!0,e.Fairfield=!0,e["FF Scala"]=!0,e.Folkard=!0,e.Footlight=!0,e.FreeSerif=!0,e["Friz Quadrata"]=!0,e.Garamond=!0,e.Gentium=!0,e.Georgia=!0,e.Gloucester=!0,e["Goudy Old Style"]=!0,e["Goudy Schoolbook"]=!0,e["Goudy Pro Font"]=!0,e.Granjon=!0,e["Guardian Egyptian"]=!0,e.Heather=!0,e.Hercules=!0,e["High Tower Text"]=!0,e.Hiroshige=!0,e["Hoefler Text"]=!0,e["Humana Serif"]=!0,e.Imprint=!0,e["Ionic No. 5"]=!0,e.Janson=!0,e.Joanna=!0,e.Korinna=!0,e.Lexicon=!0,e["Liberation Serif"]=!0,e["Linux Libertine"]=!0,e.Literaturnaya=!0,e.Lucida=!0,e["Lucida Bright"]=!0,e.Melior=!0,e.Memphis=!0,e.Miller=!0,e.Minion=!0,e.Modern=!0,e["Mona Lisa"]=!0,e["Mrs Eaves"]=!0,e["MS Serif"]=!0,e["Museo Slab"]=!0,e["New York"]=!0,e["Nimbus Roman"]=!0,e["NPS Rawlinson Roadway"]=!0,e.NuptialScript=!0,e.Palatino=!0,e.Perpetua=!0,e.Plantin=!0,e["Plantin Schoolbook"]=!0,e.Playbill=!0,e["Poor Richard"]=!0,e["Rawlinson Roadway"]=!0,e.Renault=!0,e.Requiem=!0,e.Rockwell=!0,e.Roman=!0,e["Rotis Serif"]=!0,e.Sabon=!0,e.Scala=!0,e.Seagull=!0,e.Sistina=!0,e.Souvenir=!0,e.STIX=!0,e["Stone Informal"]=!0,e["Stone Serif"]=!0,e.Sylfaen=!0,e.Times=!0,e.Trajan=!0,e["Trinité"]=!0,e["Trump Mediaeval"]=!0,e.Utopia=!0,e["Vale Type"]=!0,e["Bitstream Vera"]=!0,e["Vera Serif"]=!0,e.Versailles=!0,e.Wanted=!0,e.Weiss=!0,e["Wide Latin"]=!0,e.Windsor=!0,e.XITS=!0}),c=i(function(e){e.Dingbats=!0,e.Symbol=!0,e.ZapfDingbats=!0}),l=i(function(e){e[2]=10,e[3]=32,e[4]=33,e[5]=34,e[6]=35,e[7]=36,e[8]=37,e[9]=38,e[10]=39,e[11]=40,e[12]=41,e[13]=42,e[14]=43,e[15]=44,e[16]=45,e[17]=46,e[18]=47,e[19]=48,e[20]=49,e[21]=50,e[22]=51,e[23]=52,e[24]=53,e[25]=54,e[26]=55,e[27]=56,e[28]=57,e[29]=58,e[30]=894,e[31]=60,e[32]=61,e[33]=62,e[34]=63,e[35]=64,e[36]=65,e[37]=66,e[38]=67,e[39]=68,e[40]=69,e[41]=70,e[42]=71,e[43]=72,e[44]=73,e[45]=74,e[46]=75,e[47]=76,e[48]=77,e[49]=78,e[50]=79,e[51]=80,e[52]=81,e[53]=82,e[54]=83,e[55]=84,e[56]=85,e[57]=86,e[58]=87,e[59]=88,e[60]=89,e[61]=90,e[62]=91,e[63]=92,e[64]=93,e[65]=94,e[66]=95,e[67]=96,e[68]=97,e[69]=98,e[70]=99,e[71]=100,e[72]=101,e[73]=102,e[74]=103,e[75]=104,e[76]=105,e[77]=106,e[78]=107,e[79]=108,e[80]=109,e[81]=110,e[82]=111,e[83]=112,e[84]=113,e[85]=114,e[86]=115,e[87]=116,e[88]=117,e[89]=118,e[90]=119,e[91]=120,e[92]=121,e[93]=122,e[94]=123,e[95]=124,e[96]=125,e[97]=126,e[98]=196,e[99]=197,e[100]=199,e[101]=201,e[102]=209,e[103]=214,e[104]=220,e[105]=225,e[106]=224,e[107]=226,e[108]=228,e[109]=227,e[110]=229,e[111]=231,e[112]=233,e[113]=232,e[114]=234,e[115]=235,e[116]=237,e[117]=236,e[118]=238,e[119]=239,e[120]=241,e[121]=243,e[122]=242,e[123]=244,e[124]=246,e[125]=245,e[126]=250,e[127]=249,e[128]=251,e[129]=252,e[130]=8224,e[131]=176,e[132]=162,e[133]=163,e[134]=167,e[135]=8226,e[136]=182,e[137]=223,e[138]=174,e[139]=169,e[140]=8482,e[141]=180,e[142]=168,e[143]=8800,e[144]=198,e[145]=216,e[146]=8734,e[147]=177,e[148]=8804,e[149]=8805,e[150]=165,e[151]=181,e[152]=8706,e[153]=8721,e[154]=8719,e[156]=8747,e[157]=170,e[158]=186,e[159]=8486,e[160]=230,e[161]=248,e[162]=191,e[163]=161,e[164]=172,e[165]=8730,e[166]=402,e[167]=8776,e[168]=8710,e[169]=171,e[170]=187,e[171]=8230,e[210]=218,e[223]=711,e[224]=321,e[225]=322,e[227]=353,e[229]=382,e[234]=253,e[252]=263,e[253]=268,e[254]=269,e[258]=258,e[260]=260,e[261]=261,e[265]=280,e[266]=281,e[268]=283,e[269]=313,e[275]=323,e[276]=324,e[278]=328,e[284]=345,e[285]=346,e[286]=347,e[292]=367,e[295]=377,e[296]=378,e[298]=380,e[305]=963,e[306]=964,e[307]=966,e[308]=8215
e[309]=8252,e[310]=8319,e[311]=8359,e[312]=8592,e[313]=8593,e[337]=9552,e[493]=1039,e[494]=1040,e[705]=1524,e[706]=8362,e[710]=64288,e[711]=64298,e[759]=1617,e[761]=1776,e[763]=1778,e[775]=1652,e[777]=1764,e[778]=1780,e[779]=1781,e[780]=1782,e[782]=771,e[783]=64726,e[786]=8363,e[788]=8532,e[790]=768,e[791]=769,e[792]=768,e[795]=803,e[797]=64336,e[798]=64337,e[799]=64342,e[800]=64343,e[801]=64344,e[802]=64345,e[803]=64362,e[804]=64363,e[805]=64364,e[2424]=7821,e[2425]=7822,e[2426]=7823,e[2427]=7824,e[2428]=7825,e[2429]=7826,e[2430]=7827,e[2433]=7682,e[2678]=8045,e[2679]=8046,e[2830]=1552,e[2838]=686,e[2840]=751,e[2842]=753,e[2843]=754,e[2844]=755,e[2846]=757,e[2856]=767,e[2857]=848,e[2858]=849,e[2862]=853,e[2863]=854,e[2864]=855,e[2865]=861,e[2866]=862,e[2906]=7460,e[2908]=7462,e[2909]=7463,e[2910]=7464,e[2912]=7466,e[2913]=7467,e[2914]=7468,e[2916]=7470,e[2917]=7471,e[2918]=7472,e[2920]=7474,e[2921]=7475,e[2922]=7476,e[2924]=7478,e[2925]=7479,e[2926]=7480,e[2928]=7482,e[2929]=7483,e[2930]=7484,e[2932]=7486,e[2933]=7487,e[2934]=7488,e[2936]=7490,e[2937]=7491,e[2938]=7492,e[2940]=7494,e[2941]=7495,e[2942]=7496,e[2944]=7498,e[2946]=7500,e[2948]=7502,e[2950]=7504,e[2951]=7505,e[2952]=7506,e[2954]=7508,e[2955]=7509,e[2956]=7510,e[2958]=7512,e[2959]=7513,e[2960]=7514,e[2962]=7516,e[2963]=7517,e[2964]=7518,e[2966]=7520,e[2967]=7521,e[2968]=7522,e[2970]=7524,e[2971]=7525,e[2972]=7526,e[2974]=7528,e[2975]=7529,e[2976]=7530,e[2978]=1537,e[2979]=1538,e[2980]=1539,e[2982]=1549,e[2983]=1551,e[2984]=1552,e[2986]=1554,e[2987]=1555,e[2988]=1556,e[2990]=1623,e[2991]=1624,e[2995]=1775,e[2999]=1791,e[3002]=64290,e[3003]=64291,e[3004]=64292,e[3006]=64294,e[3007]=64295,e[3008]=64296,e[3011]=1900,e[3014]=8223,e[3015]=8244,e[3017]=7532,e[3018]=7533,e[3019]=7534,e[3075]=7590,e[3076]=7591,e[3079]=7594,e[3080]=7595,e[3083]=7598,e[3084]=7599,e[3087]=7602,e[3088]=7603,e[3091]=7606,e[3092]=7607,e[3095]=7610,e[3096]=7611,e[3099]=7614,e[3100]=7615,e[3103]=7618,e[3104]=7619,e[3107]=8337,e[3108]=8338,e[3116]=1884,e[3119]=1885,e[3120]=1885,e[3123]=1886,e[3124]=1886,e[3127]=1887,e[3128]=1887,e[3131]=1888,e[3132]=1888,e[3135]=1889,e[3136]=1889,e[3139]=1890,e[3140]=1890,e[3143]=1891,e[3144]=1891,e[3147]=1892,e[3148]=1892,e[3153]=580,e[3154]=581,e[3157]=584,e[3158]=585,e[3161]=588,e[3162]=589,e[3165]=891,e[3166]=892,e[3169]=1274,e[3170]=1275,e[3173]=1278,e[3174]=1279,e[3181]=7622,e[3182]=7623,e[3282]=11799,e[3316]=578,e[3379]=42785,e[3393]=1159,e[3416]=8377}),h=i(function(e){e[227]=322,e[264]=261,e[291]=346})
t.getStdFontMap=n,t.getNonStdFontMap=s,t.getSerifFonts=o,t.getSymbolsFonts=c,t.getGlyphMapForStandardFonts=l,t.getSupplementalGlyphMapForArialBlack=h},function(e,t,a){"use strict"
function r(e){return e>=65520&&e<=65535?0:e>=62976&&e<=63743?h()[e]||e:e}function i(e,t){var a=t[e]
if(void 0!==a)return a
if(!e)return-1
if("u"===e[0]){var r,i=e.length
if(7===i&&"n"===e[1]&&"i"===e[2])r=e.substr(3)
else{if(!(i>=5&&i<=7))return-1
r=e.substr(1)}if(r===r.toUpperCase()&&(a=parseInt(r,16))>=0)return a}return-1}function n(e){for(var t=0,a=u.length;t<a;t++){var r=u[t]
if(e>=r.begin&&e<r.end)return t}return-1}function s(e){var t=u[13]
return e>=t.begin&&e<t.end||(t=u[11],e>=t.begin&&e<t.end)}function o(e){var t=e.length
if(t<=1||!s(e.charCodeAt(0)))return e
for(var a="",r=t-1;r>=0;r--)a+=e[r]
return a}var c=a(0),l=c.getLookupTableFactory,h=l(function(e){e[63721]=169,e[63193]=169,e[63720]=174,e[63194]=174,e[63722]=8482,e[63195]=8482,e[63729]=9127,e[63730]=9128,e[63731]=9129,e[63740]=9131,e[63741]=9132,e[63742]=9133,e[63726]=9121,e[63727]=9122,e[63728]=9123,e[63737]=9124,e[63738]=9125,e[63739]=9126,e[63723]=9115,e[63724]=9116,e[63725]=9117,e[63734]=9118,e[63735]=9119,e[63736]=9120}),u=[{begin:0,end:127},{begin:128,end:255},{begin:256,end:383},{begin:384,end:591},{begin:592,end:687},{begin:688,end:767},{begin:768,end:879},{begin:880,end:1023},{begin:11392,end:11519},{begin:1024,end:1279},{begin:1328,end:1423},{begin:1424,end:1535},{begin:42240,end:42559},{begin:1536,end:1791},{begin:1984,end:2047},{begin:2304,end:2431},{begin:2432,end:2559},{begin:2560,end:2687},{begin:2688,end:2815},{begin:2816,end:2943},{begin:2944,end:3071},{begin:3072,end:3199},{begin:3200,end:3327},{begin:3328,end:3455},{begin:3584,end:3711},{begin:3712,end:3839},{begin:4256,end:4351},{begin:6912,end:7039},{begin:4352,end:4607},{begin:7680,end:7935},{begin:7936,end:8191},{begin:8192,end:8303},{begin:8304,end:8351},{begin:8352,end:8399},{begin:8400,end:8447},{begin:8448,end:8527},{begin:8528,end:8591},{begin:8592,end:8703},{begin:8704,end:8959},{begin:8960,end:9215},{begin:9216,end:9279},{begin:9280,end:9311},{begin:9312,end:9471},{begin:9472,end:9599},{begin:9600,end:9631},{begin:9632,end:9727},{begin:9728,end:9983},{begin:9984,end:10175},{begin:12288,end:12351},{begin:12352,end:12447},{begin:12448,end:12543},{begin:12544,end:12591},{begin:12592,end:12687},{begin:43072,end:43135},{begin:12800,end:13055},{begin:13056,end:13311},{begin:44032,end:55215},{begin:55296,end:57343},{begin:67840,end:67871},{begin:19968,end:40959},{begin:57344,end:63743},{begin:12736,end:12783},{begin:64256,end:64335},{begin:64336,end:65023},{begin:65056,end:65071},{begin:65040,end:65055},{begin:65104,end:65135},{begin:65136,end:65279},{begin:65280,end:65519},{begin:65520,end:65535},{begin:3840,end:4095},{begin:1792,end:1871},{begin:1920,end:1983},{begin:3456,end:3583},{begin:4096,end:4255},{begin:4608,end:4991},{begin:5024,end:5119},{begin:5120,end:5759},{begin:5760,end:5791},{begin:5792,end:5887},{begin:6016,end:6143},{begin:6144,end:6319},{begin:10240,end:10495},{begin:40960,end:42127},{begin:5888,end:5919},{begin:66304,end:66351},{begin:66352,end:66383},{begin:66560,end:66639},{begin:118784,end:119039},{begin:119808,end:120831},{begin:1044480,end:1048573},{begin:65024,end:65039},{begin:917504,end:917631},{begin:6400,end:6479},{begin:6480,end:6527},{begin:6528,end:6623},{begin:6656,end:6687},{begin:11264,end:11359},{begin:11568,end:11647},{begin:19904,end:19967},{begin:43008,end:43055},{begin:65536,end:65663},{begin:65856,end:65935},{begin:66432,end:66463},{begin:66464,end:66527},{begin:66640,end:66687},{begin:66688,end:66735},{begin:67584,end:67647},{begin:68096,end:68191},{begin:119552,end:119647},{begin:73728,end:74751},{begin:119648,end:119679},{begin:7040,end:7103},{begin:7168,end:7247},{begin:7248,end:7295},{begin:43136,end:43231},{begin:43264,end:43311},{begin:43312,end:43359},{begin:43520,end:43615},{begin:65936,end:65999},{begin:66e3,end:66047},{begin:66208,end:66271},{begin:127024,end:127135}],f=l(function(e){e["¨"]=" ̈",e["¯"]=" ̄",e["´"]=" ́",e["µ"]="μ",e["¸"]=" ̧",e["Ĳ"]="IJ",e["ĳ"]="ij",e["Ŀ"]="L·",e["ŀ"]="l·",e["ŉ"]="ʼn",e["ſ"]="s",e["Ǆ"]="DŽ",e["ǅ"]="Dž",e["ǆ"]="dž",e["Ǉ"]="LJ",e["ǈ"]="Lj",e["ǉ"]="lj",e["Ǌ"]="NJ",e["ǋ"]="Nj",e["ǌ"]="nj",e["Ǳ"]="DZ",e["ǲ"]="Dz",e["ǳ"]="dz",e["˘"]=" ̆",e["˙"]=" ̇",e["˚"]=" ̊",e["˛"]=" ̨",e["˜"]=" ̃",e["˝"]=" ̋",e["ͺ"]=" ͅ",e["΄"]=" ́",e["ϐ"]="β",e["ϑ"]="θ",e["ϒ"]="Υ",e["ϕ"]="φ",e["ϖ"]="π",e["ϰ"]="κ",e["ϱ"]="ρ",e["ϲ"]="ς",e["ϴ"]="Θ",e["ϵ"]="ε",e["Ϲ"]="Σ",e["և"]="եւ",e["ٵ"]="اٴ",e["ٶ"]="وٴ",e["ٷ"]="ۇٴ",e["ٸ"]="يٴ",e["ำ"]="ํา",e["ຳ"]="ໍາ",e["ໜ"]="ຫນ",e["ໝ"]="ຫມ",e["ཷ"]="ྲཱྀ",e["ཹ"]="ླཱྀ",e["ẚ"]="aʾ",e["᾽"]=" ̓",e["᾿"]=" ̓",e["῀"]=" ͂",e["῾"]=" ̔",e[" "]=" ",e[" "]=" ",e[" "]=" ",e[" "]=" ",e[" "]=" ",e[" "]=" ",e[" "]=" ",e[" "]=" ",e["‗"]=" ̳",e["․"]=".",e["‥"]="..",e["…"]="...",e["″"]="′′",e["‴"]="′′′",e["‶"]="‵‵",e["‷"]="‵‵‵",e["‼"]="!!",e["‾"]=" ̅",e["⁇"]="??",e["⁈"]="?!",e["⁉"]="!?",e["⁗"]="′′′′",e[" "]=" ",e["₨"]="Rs",e["℀"]="a/c",e["℁"]="a/s",e["℃"]="°C",e["℅"]="c/o",e["℆"]="c/u",e["ℇ"]="Ɛ",e["℉"]="°F",e["№"]="No",e["℡"]="TEL",e["ℵ"]="א",e["ℶ"]="ב",e["ℷ"]="ג",e["ℸ"]="ד",e["℻"]="FAX",e["Ⅰ"]="I",e["Ⅱ"]="II",e["Ⅲ"]="III",e["Ⅳ"]="IV",e["Ⅴ"]="V",e["Ⅵ"]="VI",e["Ⅶ"]="VII",e["Ⅷ"]="VIII",e["Ⅸ"]="IX",e["Ⅹ"]="X",e["Ⅺ"]="XI",e["Ⅻ"]="XII",e["Ⅼ"]="L",e["Ⅽ"]="C",e["Ⅾ"]="D",e["Ⅿ"]="M",e["ⅰ"]="i",e["ⅱ"]="ii",e["ⅲ"]="iii",e["ⅳ"]="iv",e["ⅴ"]="v",e["ⅵ"]="vi",e["ⅶ"]="vii",e["ⅷ"]="viii",e["ⅸ"]="ix",e["ⅹ"]="x",e["ⅺ"]="xi",e["ⅻ"]="xii",e["ⅼ"]="l",e["ⅽ"]="c",e["ⅾ"]="d",e["ⅿ"]="m",e["∬"]="∫∫",e["∭"]="∫∫∫",e["∯"]="∮∮",e["∰"]="∮∮∮",e["⑴"]="(1)",e["⑵"]="(2)",e["⑶"]="(3)",e["⑷"]="(4)",e["⑸"]="(5)",e["⑹"]="(6)",e["⑺"]="(7)",e["⑻"]="(8)",e["⑼"]="(9)",e["⑽"]="(10)",e["⑾"]="(11)",e["⑿"]="(12)",e["⒀"]="(13)",e["⒁"]="(14)",e["⒂"]="(15)",e["⒃"]="(16)",e["⒄"]="(17)",e["⒅"]="(18)",e["⒆"]="(19)",e["⒇"]="(20)",e["⒈"]="1.",e["⒉"]="2.",e["⒊"]="3.",e["⒋"]="4.",e["⒌"]="5.",e["⒍"]="6.",e["⒎"]="7.",e["⒏"]="8.",e["⒐"]="9.",e["⒑"]="10.",e["⒒"]="11.",e["⒓"]="12.",e["⒔"]="13.",e["⒕"]="14.",e["⒖"]="15.",e["⒗"]="16.",e["⒘"]="17.",e["⒙"]="18.",e["⒚"]="19.",e["⒛"]="20.",e["⒜"]="(a)",e["⒝"]="(b)",e["⒞"]="(c)",e["⒟"]="(d)",e["⒠"]="(e)",e["⒡"]="(f)",e["⒢"]="(g)",e["⒣"]="(h)",e["⒤"]="(i)",e["⒥"]="(j)",e["⒦"]="(k)",e["⒧"]="(l)",e["⒨"]="(m)",e["⒩"]="(n)",e["⒪"]="(o)",e["⒫"]="(p)",e["⒬"]="(q)",e["⒭"]="(r)",e["⒮"]="(s)",e["⒯"]="(t)",e["⒰"]="(u)",e["⒱"]="(v)",e["⒲"]="(w)",e["⒳"]="(x)",e["⒴"]="(y)",e["⒵"]="(z)",e["⨌"]="∫∫∫∫",e["⩴"]="::="
e["⩵"]="==",e["⩶"]="===",e["⺟"]="母",e["⻳"]="龟",e["⼀"]="一",e["⼁"]="丨",e["⼂"]="丶",e["⼃"]="丿",e["⼄"]="乙",e["⼅"]="亅",e["⼆"]="二",e["⼇"]="亠",e["⼈"]="人",e["⼉"]="儿",e["⼊"]="入",e["⼋"]="八",e["⼌"]="冂",e["⼍"]="冖",e["⼎"]="冫",e["⼏"]="几",e["⼐"]="凵",e["⼑"]="刀",e["⼒"]="力",e["⼓"]="勹",e["⼔"]="匕",e["⼕"]="匚",e["⼖"]="匸",e["⼗"]="十",e["⼘"]="卜",e["⼙"]="卩",e["⼚"]="厂",e["⼛"]="厶",e["⼜"]="又",e["⼝"]="口",e["⼞"]="囗",e["⼟"]="土",e["⼠"]="士",e["⼡"]="夂",e["⼢"]="夊",e["⼣"]="夕",e["⼤"]="大",e["⼥"]="女",e["⼦"]="子",e["⼧"]="宀",e["⼨"]="寸",e["⼩"]="小",e["⼪"]="尢",e["⼫"]="尸",e["⼬"]="屮",e["⼭"]="山",e["⼮"]="巛",e["⼯"]="工",e["⼰"]="己",e["⼱"]="巾",e["⼲"]="干",e["⼳"]="幺",e["⼴"]="广",e["⼵"]="廴",e["⼶"]="廾",e["⼷"]="弋",e["⼸"]="弓",e["⼹"]="彐",e["⼺"]="彡",e["⼻"]="彳",e["⼼"]="心",e["⼽"]="戈",e["⼾"]="戶",e["⼿"]="手",e["⽀"]="支",e["⽁"]="攴",e["⽂"]="文",e["⽃"]="斗",e["⽄"]="斤",e["⽅"]="方",e["⽆"]="无",e["⽇"]="日",e["⽈"]="曰",e["⽉"]="月",e["⽊"]="木",e["⽋"]="欠",e["⽌"]="止",e["⽍"]="歹",e["⽎"]="殳",e["⽏"]="毋",e["⽐"]="比",e["⽑"]="毛",e["⽒"]="氏",e["⽓"]="气",e["⽔"]="水",e["⽕"]="火",e["⽖"]="爪",e["⽗"]="父",e["⽘"]="爻",e["⽙"]="爿",e["⽚"]="片",e["⽛"]="牙",e["⽜"]="牛",e["⽝"]="犬",e["⽞"]="玄",e["⽟"]="玉",e["⽠"]="瓜",e["⽡"]="瓦",e["⽢"]="甘",e["⽣"]="生",e["⽤"]="用",e["⽥"]="田",e["⽦"]="疋",e["⽧"]="疒",e["⽨"]="癶",e["⽩"]="白",e["⽪"]="皮",e["⽫"]="皿",e["⽬"]="目",e["⽭"]="矛",e["⽮"]="矢",e["⽯"]="石",e["⽰"]="示",e["⽱"]="禸",e["⽲"]="禾",e["⽳"]="穴",e["⽴"]="立",e["⽵"]="竹",e["⽶"]="米",e["⽷"]="糸",e["⽸"]="缶",e["⽹"]="网",e["⽺"]="羊",e["⽻"]="羽",e["⽼"]="老",e["⽽"]="而",e["⽾"]="耒",e["⽿"]="耳",e["⾀"]="聿",e["⾁"]="肉",e["⾂"]="臣",e["⾃"]="自",e["⾄"]="至",e["⾅"]="臼",e["⾆"]="舌",e["⾇"]="舛",e["⾈"]="舟",e["⾉"]="艮",e["⾊"]="色",e["⾋"]="艸",e["⾌"]="虍",e["⾍"]="虫",e["⾎"]="血",e["⾏"]="行",e["⾐"]="衣",e["⾑"]="襾",e["⾒"]="見",e["⾓"]="角",e["⾔"]="言",e["⾕"]="谷",e["⾖"]="豆",e["⾗"]="豕",e["⾘"]="豸",e["⾙"]="貝",e["⾚"]="赤",e["⾛"]="走",e["⾜"]="足",e["⾝"]="身",e["⾞"]="車",e["⾟"]="辛",e["⾠"]="辰",e["⾡"]="辵",e["⾢"]="邑",e["⾣"]="酉",e["⾤"]="釆",e["⾥"]="里",e["⾦"]="金",e["⾧"]="長",e["⾨"]="門",e["⾩"]="阜",e["⾪"]="隶",e["⾫"]="隹",e["⾬"]="雨",e["⾭"]="靑",e["⾮"]="非",e["⾯"]="面",e["⾰"]="革",e["⾱"]="韋",e["⾲"]="韭",e["⾳"]="音",e["⾴"]="頁",e["⾵"]="風",e["⾶"]="飛",e["⾷"]="食",e["⾸"]="首",e["⾹"]="香",e["⾺"]="馬",e["⾻"]="骨",e["⾼"]="高",e["⾽"]="髟",e["⾾"]="鬥",e["⾿"]="鬯",e["⿀"]="鬲",e["⿁"]="鬼",e["⿂"]="魚",e["⿃"]="鳥"
e["⿄"]="鹵",e["⿅"]="鹿",e["⿆"]="麥",e["⿇"]="麻",e["⿈"]="黃",e["⿉"]="黍",e["⿊"]="黑",e["⿋"]="黹",e["⿌"]="黽",e["⿍"]="鼎",e["⿎"]="鼓",e["⿏"]="鼠",e["⿐"]="鼻",e["⿑"]="齊",e["⿒"]="齒",e["⿓"]="龍",e["⿔"]="龜",e["⿕"]="龠",e["〶"]="〒",e["〸"]="十",e["〹"]="卄",e["〺"]="卅",e["゛"]=" ゙",e["゜"]=" ゚",e["ㄱ"]="ᄀ",e["ㄲ"]="ᄁ",e["ㄳ"]="ᆪ",e["ㄴ"]="ᄂ",e["ㄵ"]="ᆬ",e["ㄶ"]="ᆭ",e["ㄷ"]="ᄃ",e["ㄸ"]="ᄄ",e["ㄹ"]="ᄅ",e["ㄺ"]="ᆰ",e["ㄻ"]="ᆱ",e["ㄼ"]="ᆲ",e["ㄽ"]="ᆳ",e["ㄾ"]="ᆴ",e["ㄿ"]="ᆵ",e["ㅀ"]="ᄚ",e["ㅁ"]="ᄆ",e["ㅂ"]="ᄇ",e["ㅃ"]="ᄈ",e["ㅄ"]="ᄡ",e["ㅅ"]="ᄉ",e["ㅆ"]="ᄊ",e["ㅇ"]="ᄋ",e["ㅈ"]="ᄌ",e["ㅉ"]="ᄍ",e["ㅊ"]="ᄎ",e["ㅋ"]="ᄏ",e["ㅌ"]="ᄐ",e["ㅍ"]="ᄑ",e["ㅎ"]="ᄒ",e["ㅏ"]="ᅡ",e["ㅐ"]="ᅢ",e["ㅑ"]="ᅣ",e["ㅒ"]="ᅤ",e["ㅓ"]="ᅥ",e["ㅔ"]="ᅦ",e["ㅕ"]="ᅧ",e["ㅖ"]="ᅨ",e["ㅗ"]="ᅩ",e["ㅘ"]="ᅪ",e["ㅙ"]="ᅫ",e["ㅚ"]="ᅬ",e["ㅛ"]="ᅭ",e["ㅜ"]="ᅮ",e["ㅝ"]="ᅯ",e["ㅞ"]="ᅰ",e["ㅟ"]="ᅱ",e["ㅠ"]="ᅲ",e["ㅡ"]="ᅳ",e["ㅢ"]="ᅴ",e["ㅣ"]="ᅵ",e["ㅤ"]="ᅠ",e["ㅥ"]="ᄔ",e["ㅦ"]="ᄕ",e["ㅧ"]="ᇇ",e["ㅨ"]="ᇈ",e["ㅩ"]="ᇌ",e["ㅪ"]="ᇎ",e["ㅫ"]="ᇓ",e["ㅬ"]="ᇗ",e["ㅭ"]="ᇙ",e["ㅮ"]="ᄜ",e["ㅯ"]="ᇝ",e["ㅰ"]="ᇟ",e["ㅱ"]="ᄝ",e["ㅲ"]="ᄞ",e["ㅳ"]="ᄠ",e["ㅴ"]="ᄢ",e["ㅵ"]="ᄣ",e["ㅶ"]="ᄧ",e["ㅷ"]="ᄩ",e["ㅸ"]="ᄫ",e["ㅹ"]="ᄬ",e["ㅺ"]="ᄭ",e["ㅻ"]="ᄮ",e["ㅼ"]="ᄯ",e["ㅽ"]="ᄲ",e["ㅾ"]="ᄶ",e["ㅿ"]="ᅀ",e["ㆀ"]="ᅇ",e["ㆁ"]="ᅌ",e["ㆂ"]="ᇱ",e["ㆃ"]="ᇲ",e["ㆄ"]="ᅗ",e["ㆅ"]="ᅘ",e["ㆆ"]="ᅙ",e["ㆇ"]="ᆄ",e["ㆈ"]="ᆅ",e["ㆉ"]="ᆈ",e["ㆊ"]="ᆑ",e["ㆋ"]="ᆒ",e["ㆌ"]="ᆔ",e["ㆍ"]="ᆞ",e["ㆎ"]="ᆡ",e["㈀"]="(ᄀ)",e["㈁"]="(ᄂ)",e["㈂"]="(ᄃ)",e["㈃"]="(ᄅ)",e["㈄"]="(ᄆ)",e["㈅"]="(ᄇ)",e["㈆"]="(ᄉ)",e["㈇"]="(ᄋ)",e["㈈"]="(ᄌ)",e["㈉"]="(ᄎ)",e["㈊"]="(ᄏ)",e["㈋"]="(ᄐ)",e["㈌"]="(ᄑ)",e["㈍"]="(ᄒ)",e["㈎"]="(가)",e["㈏"]="(나)",e["㈐"]="(다)",e["㈑"]="(라)",e["㈒"]="(마)",e["㈓"]="(바)",e["㈔"]="(사)",e["㈕"]="(아)",e["㈖"]="(자)",e["㈗"]="(차)",e["㈘"]="(카)",e["㈙"]="(타)",e["㈚"]="(파)",e["㈛"]="(하)",e["㈜"]="(주)",e["㈝"]="(오전)",e["㈞"]="(오후)",e["㈠"]="(一)",e["㈡"]="(二)",e["㈢"]="(三)",e["㈣"]="(四)",e["㈤"]="(五)",e["㈥"]="(六)",e["㈦"]="(七)",e["㈧"]="(八)",e["㈨"]="(九)",e["㈩"]="(十)",e["㈪"]="(月)",e["㈫"]="(火)",e["㈬"]="(水)",e["㈭"]="(木)",e["㈮"]="(金)",e["㈯"]="(土)",e["㈰"]="(日)",e["㈱"]="(株)",e["㈲"]="(有)",e["㈳"]="(社)",e["㈴"]="(名)",e["㈵"]="(特)",e["㈶"]="(財)",e["㈷"]="(祝)",e["㈸"]="(労)",e["㈹"]="(代)",e["㈺"]="(呼)",e["㈻"]="(学)",e["㈼"]="(監)",e["㈽"]="(企)",e["㈾"]="(資)",e["㈿"]="(協)",e["㉀"]="(祭)",e["㉁"]="(休)",e["㉂"]="(自)",e["㉃"]="(至)",e["㋀"]="1月",e["㋁"]="2月",e["㋂"]="3月",e["㋃"]="4月",e["㋄"]="5月",e["㋅"]="6月",e["㋆"]="7月",e["㋇"]="8月",e["㋈"]="9月",e["㋉"]="10月",e["㋊"]="11月",e["㋋"]="12月",e["㍘"]="0点",e["㍙"]="1点",e["㍚"]="2点"
e["㍛"]="3点",e["㍜"]="4点",e["㍝"]="5点",e["㍞"]="6点",e["㍟"]="7点",e["㍠"]="8点",e["㍡"]="9点",e["㍢"]="10点",e["㍣"]="11点",e["㍤"]="12点",e["㍥"]="13点",e["㍦"]="14点",e["㍧"]="15点",e["㍨"]="16点",e["㍩"]="17点",e["㍪"]="18点",e["㍫"]="19点",e["㍬"]="20点",e["㍭"]="21点",e["㍮"]="22点",e["㍯"]="23点",e["㍰"]="24点",e["㏠"]="1日",e["㏡"]="2日",e["㏢"]="3日",e["㏣"]="4日",e["㏤"]="5日",e["㏥"]="6日",e["㏦"]="7日",e["㏧"]="8日",e["㏨"]="9日",e["㏩"]="10日",e["㏪"]="11日",e["㏫"]="12日",e["㏬"]="13日",e["㏭"]="14日",e["㏮"]="15日",e["㏯"]="16日",e["㏰"]="17日",e["㏱"]="18日",e["㏲"]="19日",e["㏳"]="20日",e["㏴"]="21日",e["㏵"]="22日",e["㏶"]="23日",e["㏷"]="24日",e["㏸"]="25日",e["㏹"]="26日",e["㏺"]="27日",e["㏻"]="28日",e["㏼"]="29日",e["㏽"]="30日",e["㏾"]="31日",e["ﬀ"]="ff",e["ﬁ"]="fi",e["ﬂ"]="fl",e["ﬃ"]="ffi",e["ﬄ"]="ffl",e["ﬅ"]="ſt",e["ﬆ"]="st",e["ﬓ"]="մն",e["ﬔ"]="մե",e["ﬕ"]="մի",e["ﬖ"]="վն",e["ﬗ"]="մխ",e["ﭏ"]="אל",e["ﭐ"]="ٱ",e["ﭑ"]="ٱ",e["ﭒ"]="ٻ",e["ﭓ"]="ٻ",e["ﭔ"]="ٻ",e["ﭕ"]="ٻ",e["ﭖ"]="پ",e["ﭗ"]="پ",e["ﭘ"]="پ",e["ﭙ"]="پ",e["ﭚ"]="ڀ",e["ﭛ"]="ڀ",e["ﭜ"]="ڀ",e["ﭝ"]="ڀ",e["ﭞ"]="ٺ",e["ﭟ"]="ٺ",e["ﭠ"]="ٺ",e["ﭡ"]="ٺ",e["ﭢ"]="ٿ",e["ﭣ"]="ٿ",e["ﭤ"]="ٿ",e["ﭥ"]="ٿ",e["ﭦ"]="ٹ",e["ﭧ"]="ٹ",e["ﭨ"]="ٹ",e["ﭩ"]="ٹ",e["ﭪ"]="ڤ",e["ﭫ"]="ڤ",e["ﭬ"]="ڤ",e["ﭭ"]="ڤ",e["ﭮ"]="ڦ",e["ﭯ"]="ڦ",e["ﭰ"]="ڦ",e["ﭱ"]="ڦ",e["ﭲ"]="ڄ",e["ﭳ"]="ڄ",e["ﭴ"]="ڄ",e["ﭵ"]="ڄ",e["ﭶ"]="ڃ",e["ﭷ"]="ڃ",e["ﭸ"]="ڃ",e["ﭹ"]="ڃ",e["ﭺ"]="چ",e["ﭻ"]="چ",e["ﭼ"]="چ",e["ﭽ"]="چ",e["ﭾ"]="ڇ",e["ﭿ"]="ڇ",e["ﮀ"]="ڇ",e["ﮁ"]="ڇ",e["ﮂ"]="ڍ",e["ﮃ"]="ڍ",e["ﮄ"]="ڌ",e["ﮅ"]="ڌ",e["ﮆ"]="ڎ",e["ﮇ"]="ڎ",e["ﮈ"]="ڈ",e["ﮉ"]="ڈ",e["ﮊ"]="ژ",e["ﮋ"]="ژ",e["ﮌ"]="ڑ",e["ﮍ"]="ڑ",e["ﮎ"]="ک",e["ﮏ"]="ک",e["ﮐ"]="ک",e["ﮑ"]="ک",e["ﮒ"]="گ",e["ﮓ"]="گ",e["ﮔ"]="گ",e["ﮕ"]="گ",e["ﮖ"]="ڳ",e["ﮗ"]="ڳ",e["ﮘ"]="ڳ",e["ﮙ"]="ڳ",e["ﮚ"]="ڱ",e["ﮛ"]="ڱ",e["ﮜ"]="ڱ",e["ﮝ"]="ڱ",e["ﮞ"]="ں",e["ﮟ"]="ں",e["ﮠ"]="ڻ",e["ﮡ"]="ڻ",e["ﮢ"]="ڻ",e["ﮣ"]="ڻ",e["ﮤ"]="ۀ",e["ﮥ"]="ۀ",e["ﮦ"]="ہ",e["ﮧ"]="ہ",e["ﮨ"]="ہ",e["ﮩ"]="ہ",e["ﮪ"]="ھ",e["ﮫ"]="ھ",e["ﮬ"]="ھ",e["ﮭ"]="ھ",e["ﮮ"]="ے",e["ﮯ"]="ے",e["ﮰ"]="ۓ",e["ﮱ"]="ۓ",e["ﯓ"]="ڭ",e["ﯔ"]="ڭ",e["ﯕ"]="ڭ",e["ﯖ"]="ڭ",e["ﯗ"]="ۇ",e["ﯘ"]="ۇ",e["ﯙ"]="ۆ",e["ﯚ"]="ۆ",e["ﯛ"]="ۈ",e["ﯜ"]="ۈ",e["ﯝ"]="ٷ",e["ﯞ"]="ۋ",e["ﯟ"]="ۋ",e["ﯠ"]="ۅ",e["ﯡ"]="ۅ",e["ﯢ"]="ۉ",e["ﯣ"]="ۉ",e["ﯤ"]="ې",e["ﯥ"]="ې",e["ﯦ"]="ې",e["ﯧ"]="ې",e["ﯨ"]="ى",e["ﯩ"]="ى",e["ﯪ"]="ئا",e["ﯫ"]="ئا",e["ﯬ"]="ئە",e["ﯭ"]="ئە",e["ﯮ"]="ئو",e["ﯯ"]="ئو",e["ﯰ"]="ئۇ",e["ﯱ"]="ئۇ",e["ﯲ"]="ئۆ",e["ﯳ"]="ئۆ",e["ﯴ"]="ئۈ",e["ﯵ"]="ئۈ",e["ﯶ"]="ئې"
e["ﯷ"]="ئې",e["ﯸ"]="ئې",e["ﯹ"]="ئى",e["ﯺ"]="ئى",e["ﯻ"]="ئى",e["ﯼ"]="ی",e["ﯽ"]="ی",e["ﯾ"]="ی",e["ﯿ"]="ی",e["ﰀ"]="ئج",e["ﰁ"]="ئح",e["ﰂ"]="ئم",e["ﰃ"]="ئى",e["ﰄ"]="ئي",e["ﰅ"]="بج",e["ﰆ"]="بح",e["ﰇ"]="بخ",e["ﰈ"]="بم",e["ﰉ"]="بى",e["ﰊ"]="بي",e["ﰋ"]="تج",e["ﰌ"]="تح",e["ﰍ"]="تخ",e["ﰎ"]="تم",e["ﰏ"]="تى",e["ﰐ"]="تي",e["ﰑ"]="ثج",e["ﰒ"]="ثم",e["ﰓ"]="ثى",e["ﰔ"]="ثي",e["ﰕ"]="جح",e["ﰖ"]="جم",e["ﰗ"]="حج",e["ﰘ"]="حم",e["ﰙ"]="خج",e["ﰚ"]="خح",e["ﰛ"]="خم",e["ﰜ"]="سج",e["ﰝ"]="سح",e["ﰞ"]="سخ",e["ﰟ"]="سم",e["ﰠ"]="صح",e["ﰡ"]="صم",e["ﰢ"]="ضج",e["ﰣ"]="ضح",e["ﰤ"]="ضخ",e["ﰥ"]="ضم",e["ﰦ"]="طح",e["ﰧ"]="طم",e["ﰨ"]="ظم",e["ﰩ"]="عج",e["ﰪ"]="عم",e["ﰫ"]="غج",e["ﰬ"]="غم",e["ﰭ"]="فج",e["ﰮ"]="فح",e["ﰯ"]="فخ",e["ﰰ"]="فم",e["ﰱ"]="فى",e["ﰲ"]="في",e["ﰳ"]="قح",e["ﰴ"]="قم",e["ﰵ"]="قى",e["ﰶ"]="قي",e["ﰷ"]="كا",e["ﰸ"]="كج",e["ﰹ"]="كح",e["ﰺ"]="كخ",e["ﰻ"]="كل",e["ﰼ"]="كم",e["ﰽ"]="كى",e["ﰾ"]="كي",e["ﰿ"]="لج",e["ﱀ"]="لح",e["ﱁ"]="لخ",e["ﱂ"]="لم",e["ﱃ"]="لى",e["ﱄ"]="لي",e["ﱅ"]="مج",e["ﱆ"]="مح",e["ﱇ"]="مخ",e["ﱈ"]="مم",e["ﱉ"]="مى",e["ﱊ"]="مي",e["ﱋ"]="نج",e["ﱌ"]="نح",e["ﱍ"]="نخ",e["ﱎ"]="نم",e["ﱏ"]="نى",e["ﱐ"]="ني",e["ﱑ"]="هج",e["ﱒ"]="هم",e["ﱓ"]="هى",e["ﱔ"]="هي",e["ﱕ"]="يج",e["ﱖ"]="يح",e["ﱗ"]="يخ",e["ﱘ"]="يم",e["ﱙ"]="يى",e["ﱚ"]="يي",e["ﱛ"]="ذٰ",e["ﱜ"]="رٰ",e["ﱝ"]="ىٰ",e["ﱞ"]=" ٌّ",e["ﱟ"]=" ٍّ",e["ﱠ"]=" َّ",e["ﱡ"]=" ُّ",e["ﱢ"]=" ِّ",e["ﱣ"]=" ّٰ",e["ﱤ"]="ئر",e["ﱥ"]="ئز",e["ﱦ"]="ئم",e["ﱧ"]="ئن",e["ﱨ"]="ئى",e["ﱩ"]="ئي",e["ﱪ"]="بر",e["ﱫ"]="بز",e["ﱬ"]="بم",e["ﱭ"]="بن",e["ﱮ"]="بى",e["ﱯ"]="بي",e["ﱰ"]="تر",e["ﱱ"]="تز",e["ﱲ"]="تم",e["ﱳ"]="تن",e["ﱴ"]="تى",e["ﱵ"]="تي",e["ﱶ"]="ثر",e["ﱷ"]="ثز",e["ﱸ"]="ثم",e["ﱹ"]="ثن",e["ﱺ"]="ثى",e["ﱻ"]="ثي",e["ﱼ"]="فى",e["ﱽ"]="في",e["ﱾ"]="قى",e["ﱿ"]="قي",e["ﲀ"]="كا",e["ﲁ"]="كل",e["ﲂ"]="كم",e["ﲃ"]="كى",e["ﲄ"]="كي",e["ﲅ"]="لم",e["ﲆ"]="لى",e["ﲇ"]="لي",e["ﲈ"]="ما",e["ﲉ"]="مم",e["ﲊ"]="نر",e["ﲋ"]="نز",e["ﲌ"]="نم",e["ﲍ"]="نن",e["ﲎ"]="نى",e["ﲏ"]="ني",e["ﲐ"]="ىٰ",e["ﲑ"]="ير",e["ﲒ"]="يز",e["ﲓ"]="يم",e["ﲔ"]="ين",e["ﲕ"]="يى",e["ﲖ"]="يي",e["ﲗ"]="ئج",e["ﲘ"]="ئح",e["ﲙ"]="ئخ",e["ﲚ"]="ئم",e["ﲛ"]="ئه",e["ﲜ"]="بج",e["ﲝ"]="بح",e["ﲞ"]="بخ",e["ﲟ"]="بم",e["ﲠ"]="به",e["ﲡ"]="تج",e["ﲢ"]="تح",e["ﲣ"]="تخ",e["ﲤ"]="تم",e["ﲥ"]="ته",e["ﲦ"]="ثم",e["ﲧ"]="جح",e["ﲨ"]="جم",e["ﲩ"]="حج",e["ﲪ"]="حم",e["ﲫ"]="خج",e["ﲬ"]="خم",e["ﲭ"]="سج",e["ﲮ"]="سح",e["ﲯ"]="سخ",e["ﲰ"]="سم",e["ﲱ"]="صح",e["ﲲ"]="صخ",e["ﲳ"]="صم",e["ﲴ"]="ضج",e["ﲵ"]="ضح",e["ﲶ"]="ضخ",e["ﲷ"]="ضم",e["ﲸ"]="طح",e["ﲹ"]="ظم",e["ﲺ"]="عج",e["ﲻ"]="عم",e["ﲼ"]="غج",e["ﲽ"]="غم",e["ﲾ"]="فج"
e["ﲿ"]="فح",e["ﳀ"]="فخ",e["ﳁ"]="فم",e["ﳂ"]="قح",e["ﳃ"]="قم",e["ﳄ"]="كج",e["ﳅ"]="كح",e["ﳆ"]="كخ",e["ﳇ"]="كل",e["ﳈ"]="كم",e["ﳉ"]="لج",e["ﳊ"]="لح",e["ﳋ"]="لخ",e["ﳌ"]="لم",e["ﳍ"]="له",e["ﳎ"]="مج",e["ﳏ"]="مح",e["ﳐ"]="مخ",e["ﳑ"]="مم",e["ﳒ"]="نج",e["ﳓ"]="نح",e["ﳔ"]="نخ",e["ﳕ"]="نم",e["ﳖ"]="نه",e["ﳗ"]="هج",e["ﳘ"]="هم",e["ﳙ"]="هٰ",e["ﳚ"]="يج",e["ﳛ"]="يح",e["ﳜ"]="يخ",e["ﳝ"]="يم",e["ﳞ"]="يه",e["ﳟ"]="ئم",e["ﳠ"]="ئه",e["ﳡ"]="بم",e["ﳢ"]="به",e["ﳣ"]="تم",e["ﳤ"]="ته",e["ﳥ"]="ثم",e["ﳦ"]="ثه",e["ﳧ"]="سم",e["ﳨ"]="سه",e["ﳩ"]="شم",e["ﳪ"]="شه",e["ﳫ"]="كل",e["ﳬ"]="كم",e["ﳭ"]="لم",e["ﳮ"]="نم",e["ﳯ"]="نه",e["ﳰ"]="يم",e["ﳱ"]="يه",e["ﳲ"]="ـَّ",e["ﳳ"]="ـُّ",e["ﳴ"]="ـِّ",e["ﳵ"]="طى",e["ﳶ"]="طي",e["ﳷ"]="عى",e["ﳸ"]="عي",e["ﳹ"]="غى",e["ﳺ"]="غي",e["ﳻ"]="سى",e["ﳼ"]="سي",e["ﳽ"]="شى",e["ﳾ"]="شي",e["ﳿ"]="حى",e["ﴀ"]="حي",e["ﴁ"]="جى",e["ﴂ"]="جي",e["ﴃ"]="خى",e["ﴄ"]="خي",e["ﴅ"]="صى",e["ﴆ"]="صي",e["ﴇ"]="ضى",e["ﴈ"]="ضي",e["ﴉ"]="شج",e["ﴊ"]="شح",e["ﴋ"]="شخ",e["ﴌ"]="شم",e["ﴍ"]="شر",e["ﴎ"]="سر",e["ﴏ"]="صر",e["ﴐ"]="ضر",e["ﴑ"]="طى",e["ﴒ"]="طي",e["ﴓ"]="عى",e["ﴔ"]="عي",e["ﴕ"]="غى",e["ﴖ"]="غي",e["ﴗ"]="سى",e["ﴘ"]="سي",e["ﴙ"]="شى",e["ﴚ"]="شي",e["ﴛ"]="حى",e["ﴜ"]="حي",e["ﴝ"]="جى",e["ﴞ"]="جي",e["ﴟ"]="خى",e["ﴠ"]="خي",e["ﴡ"]="صى",e["ﴢ"]="صي",e["ﴣ"]="ضى",e["ﴤ"]="ضي",e["ﴥ"]="شج",e["ﴦ"]="شح",e["ﴧ"]="شخ",e["ﴨ"]="شم",e["ﴩ"]="شر",e["ﴪ"]="سر",e["ﴫ"]="صر",e["ﴬ"]="ضر",e["ﴭ"]="شج",e["ﴮ"]="شح",e["ﴯ"]="شخ",e["ﴰ"]="شم",e["ﴱ"]="سه",e["ﴲ"]="شه",e["ﴳ"]="طم",e["ﴴ"]="سج",e["ﴵ"]="سح",e["ﴶ"]="سخ",e["ﴷ"]="شج",e["ﴸ"]="شح",e["ﴹ"]="شخ",e["ﴺ"]="طم",e["ﴻ"]="ظم",e["ﴼ"]="اً",e["ﴽ"]="اً",e["ﵐ"]="تجم",e["ﵑ"]="تحج",e["ﵒ"]="تحج",e["ﵓ"]="تحم",e["ﵔ"]="تخم",e["ﵕ"]="تمج",e["ﵖ"]="تمح",e["ﵗ"]="تمخ",e["ﵘ"]="جمح",e["ﵙ"]="جمح",e["ﵚ"]="حمي",e["ﵛ"]="حمى",e["ﵜ"]="سحج",e["ﵝ"]="سجح",e["ﵞ"]="سجى",e["ﵟ"]="سمح",e["ﵠ"]="سمح",e["ﵡ"]="سمج",e["ﵢ"]="سمم",e["ﵣ"]="سمم",e["ﵤ"]="صحح",e["ﵥ"]="صحح",e["ﵦ"]="صمم",e["ﵧ"]="شحم",e["ﵨ"]="شحم",e["ﵩ"]="شجي",e["ﵪ"]="شمخ",e["ﵫ"]="شمخ",e["ﵬ"]="شمم",e["ﵭ"]="شمم",e["ﵮ"]="ضحى",e["ﵯ"]="ضخم",e["ﵰ"]="ضخم",e["ﵱ"]="طمح",e["ﵲ"]="طمح",e["ﵳ"]="طمم",e["ﵴ"]="طمي",e["ﵵ"]="عجم",e["ﵶ"]="عمم",e["ﵷ"]="عمم",e["ﵸ"]="عمى",e["ﵹ"]="غمم",e["ﵺ"]="غمي",e["ﵻ"]="غمى",e["ﵼ"]="فخم",e["ﵽ"]="فخم",e["ﵾ"]="قمح",e["ﵿ"]="قمم",e["ﶀ"]="لحم",e["ﶁ"]="لحي",e["ﶂ"]="لحى",e["ﶃ"]="لجج",e["ﶄ"]="لجج",e["ﶅ"]="لخم",e["ﶆ"]="لخم",e["ﶇ"]="لمح",e["ﶈ"]="لمح",e["ﶉ"]="محج",e["ﶊ"]="محم",e["ﶋ"]="محي",e["ﶌ"]="مجح",e["ﶍ"]="مجم",e["ﶎ"]="مخج",e["ﶏ"]="مخم",e["ﶒ"]="مجخ",e["ﶓ"]="همج",e["ﶔ"]="همم",e["ﶕ"]="نحم",e["ﶖ"]="نحى",e["ﶗ"]="نجم",e["ﶘ"]="نجم",e["ﶙ"]="نجى",e["ﶚ"]="نمي"
e["ﶛ"]="نمى",e["ﶜ"]="يمم",e["ﶝ"]="يمم",e["ﶞ"]="بخي",e["ﶟ"]="تجي",e["ﶠ"]="تجى",e["ﶡ"]="تخي",e["ﶢ"]="تخى",e["ﶣ"]="تمي",e["ﶤ"]="تمى",e["ﶥ"]="جمي",e["ﶦ"]="جحى",e["ﶧ"]="جمى",e["ﶨ"]="سخى",e["ﶩ"]="صحي",e["ﶪ"]="شحي",e["ﶫ"]="ضحي",e["ﶬ"]="لجي",e["ﶭ"]="لمي",e["ﶮ"]="يحي",e["ﶯ"]="يجي",e["ﶰ"]="يمي",e["ﶱ"]="ممي",e["ﶲ"]="قمي",e["ﶳ"]="نحي",e["ﶴ"]="قمح",e["ﶵ"]="لحم",e["ﶶ"]="عمي",e["ﶷ"]="كمي",e["ﶸ"]="نجح",e["ﶹ"]="مخي",e["ﶺ"]="لجم",e["ﶻ"]="كمم",e["ﶼ"]="لجم",e["ﶽ"]="نجح",e["ﶾ"]="جحي",e["ﶿ"]="حجي",e["ﷀ"]="مجي",e["ﷁ"]="فمي",e["ﷂ"]="بحي",e["ﷃ"]="كمم",e["ﷄ"]="عجم",e["ﷅ"]="صمم",e["ﷆ"]="سخي",e["ﷇ"]="نجي",e["﹉"]="‾",e["﹊"]="‾",e["﹋"]="‾",e["﹌"]="‾",e["﹍"]="_",e["﹎"]="_",e["﹏"]="_",e["ﺀ"]="ء",e["ﺁ"]="آ",e["ﺂ"]="آ",e["ﺃ"]="أ",e["ﺄ"]="أ",e["ﺅ"]="ؤ",e["ﺆ"]="ؤ",e["ﺇ"]="إ",e["ﺈ"]="إ",e["ﺉ"]="ئ",e["ﺊ"]="ئ",e["ﺋ"]="ئ",e["ﺌ"]="ئ",e["ﺍ"]="ا",e["ﺎ"]="ا",e["ﺏ"]="ب",e["ﺐ"]="ب",e["ﺑ"]="ب",e["ﺒ"]="ب",e["ﺓ"]="ة",e["ﺔ"]="ة",e["ﺕ"]="ت",e["ﺖ"]="ت",e["ﺗ"]="ت",e["ﺘ"]="ت",e["ﺙ"]="ث",e["ﺚ"]="ث",e["ﺛ"]="ث",e["ﺜ"]="ث",e["ﺝ"]="ج",e["ﺞ"]="ج",e["ﺟ"]="ج",e["ﺠ"]="ج",e["ﺡ"]="ح",e["ﺢ"]="ح",e["ﺣ"]="ح",e["ﺤ"]="ح",e["ﺥ"]="خ",e["ﺦ"]="خ",e["ﺧ"]="خ",e["ﺨ"]="خ",e["ﺩ"]="د",e["ﺪ"]="د",e["ﺫ"]="ذ",e["ﺬ"]="ذ",e["ﺭ"]="ر",e["ﺮ"]="ر",e["ﺯ"]="ز",e["ﺰ"]="ز",e["ﺱ"]="س",e["ﺲ"]="س",e["ﺳ"]="س",e["ﺴ"]="س",e["ﺵ"]="ش",e["ﺶ"]="ش",e["ﺷ"]="ش",e["ﺸ"]="ش",e["ﺹ"]="ص",e["ﺺ"]="ص",e["ﺻ"]="ص",e["ﺼ"]="ص",e["ﺽ"]="ض",e["ﺾ"]="ض",e["ﺿ"]="ض",e["ﻀ"]="ض",e["ﻁ"]="ط",e["ﻂ"]="ط",e["ﻃ"]="ط",e["ﻄ"]="ط",e["ﻅ"]="ظ",e["ﻆ"]="ظ",e["ﻇ"]="ظ",e["ﻈ"]="ظ",e["ﻉ"]="ع",e["ﻊ"]="ع",e["ﻋ"]="ع",e["ﻌ"]="ع",e["ﻍ"]="غ",e["ﻎ"]="غ",e["ﻏ"]="غ",e["ﻐ"]="غ",e["ﻑ"]="ف",e["ﻒ"]="ف",e["ﻓ"]="ف",e["ﻔ"]="ف",e["ﻕ"]="ق",e["ﻖ"]="ق",e["ﻗ"]="ق",e["ﻘ"]="ق",e["ﻙ"]="ك",e["ﻚ"]="ك",e["ﻛ"]="ك",e["ﻜ"]="ك",e["ﻝ"]="ل",e["ﻞ"]="ل",e["ﻟ"]="ل",e["ﻠ"]="ل",e["ﻡ"]="م",e["ﻢ"]="م",e["ﻣ"]="م",e["ﻤ"]="م",e["ﻥ"]="ن",e["ﻦ"]="ن",e["ﻧ"]="ن",e["ﻨ"]="ن",e["ﻩ"]="ه",e["ﻪ"]="ه",e["ﻫ"]="ه",e["ﻬ"]="ه",e["ﻭ"]="و",e["ﻮ"]="و",e["ﻯ"]="ى",e["ﻰ"]="ى",e["ﻱ"]="ي",e["ﻲ"]="ي",e["ﻳ"]="ي",e["ﻴ"]="ي",e["ﻵ"]="لآ",e["ﻶ"]="لآ",e["ﻷ"]="لأ",e["ﻸ"]="لأ",e["ﻹ"]="لإ",e["ﻺ"]="لإ",e["ﻻ"]="لا",e["ﻼ"]="لا"})
t.mapSpecialUnicodeValues=r,t.reverseIfRtl=o,t.getUnicodeRangeFor=n,t.getNormalizedUnicodes=f,t.getUnicodeForGlyph=i},function(e,t,a){"use strict"
function r(e,t){this.url=e,t=t||{},this.isHttp=/^https?:/i.test(e),this.httpHeaders=this.isHttp&&t.httpHeaders||{},this.withCredentials=t.withCredentials||!1,this.getXhr=t.getXhr||function(){return new XMLHttpRequest},this.currXhrId=0,this.pendingRequests=Object.create(null),this.loadedRequests=Object.create(null)}function i(e){var t=e.response
if("string"!=typeof t)return t
for(var a=t.length,r=new Uint8Array(a),i=0;i<a;i++)r[i]=255&t.charCodeAt(i)
return r.buffer}function n(e){this._options=e
var t=e.source
this._manager=new r(t.url,{httpHeaders:t.httpHeaders,withCredentials:t.withCredentials}),this._rangeChunkSize=t.rangeChunkSize,this._fullRequestReader=null,this._rangeRequestReaders=[]}function s(e,t){this._manager=e
var a=t.source,r={onHeadersReceived:this._onHeadersReceived.bind(this),onProgressiveData:a.disableStream?null:this._onProgressiveData.bind(this),onDone:this._onDone.bind(this),onError:this._onError.bind(this),onProgress:this._onProgress.bind(this)}
this._url=a.url,this._fullRequestId=e.requestFull(r),this._headersReceivedCapability=d(),this._disableRange=t.disableRange||!1,this._contentLength=a.length,this._rangeChunkSize=a.rangeChunkSize,this._rangeChunkSize||this._disableRange||(this._disableRange=!0),this._isStreamingSupported=!1,this._isRangeSupported=!1,this._cachedChunks=[],this._requests=[],this._done=!1,this._storedError=void 0,this.onProgress=null}function o(e,t,a){this._manager=e
var r={onDone:this._onDone.bind(this),onProgress:this._onProgress.bind(this)}
this._requestId=e.requestRange(t,a,r),this._requests=[],this._queuedChunk=null,this._done=!1,this.onProgress=null,this.onClosed=null}var c=a(0),l=a(8),h=c.globalScope,u=function(){try{var e=new XMLHttpRequest
return e.open("GET",h.location.href),e.responseType="moz-chunked-arraybuffer","moz-chunked-arraybuffer"===e.responseType}catch(e){return!1}}()
r.prototype={requestRange:function(e,t,a){var r={begin:e,end:t}
for(var i in a)r[i]=a[i]
return this.request(r)},requestFull:function(e){return this.request(e)},request:function(e){var t=this.getXhr(),a=this.currXhrId++,r=this.pendingRequests[a]={xhr:t}
t.open("GET",this.url),t.withCredentials=this.withCredentials
for(var i in this.httpHeaders){var n=this.httpHeaders[i]
void 0!==n&&t.setRequestHeader(i,n)}if(this.isHttp&&"begin"in e&&"end"in e){var s=e.begin+"-"+(e.end-1)
t.setRequestHeader("Range","bytes="+s),r.expectedStatus=206}else r.expectedStatus=200
return u&&!!e.onProgressiveData?(t.responseType="moz-chunked-arraybuffer",r.onProgressiveData=e.onProgressiveData,r.mozChunked=!0):t.responseType="arraybuffer",e.onError&&(t.onerror=function(a){e.onError(t.status)}),t.onreadystatechange=this.onStateChange.bind(this,a),t.onprogress=this.onProgress.bind(this,a),r.onHeadersReceived=e.onHeadersReceived,r.onDone=e.onDone,r.onError=e.onError,r.onProgress=e.onProgress,t.send(null),a},onProgress:function(e,t){var a=this.pendingRequests[e]
if(a){if(a.mozChunked){var r=i(a.xhr)
a.onProgressiveData(r)}var n=a.onProgress
n&&n(t)}},onStateChange:function(e,t){var a=this.pendingRequests[e]
if(a){var r=a.xhr
if(r.readyState>=2&&a.onHeadersReceived&&(a.onHeadersReceived(),delete a.onHeadersReceived),4===r.readyState&&e in this.pendingRequests){if(delete this.pendingRequests[e],0===r.status&&this.isHttp)return void(a.onError&&a.onError(r.status))
var n=r.status||200
if(!(200===n&&206===a.expectedStatus)&&n!==a.expectedStatus)return void(a.onError&&a.onError(r.status))
this.loadedRequests[e]=!0
var s=i(r)
if(206===n){var o=r.getResponseHeader("Content-Range"),c=/bytes (\d+)-(\d+)\/(\d+)/.exec(o),l=parseInt(c[1],10)
a.onDone({begin:l,chunk:s})}else a.onProgressiveData?a.onDone(null):s?a.onDone({begin:0,chunk:s}):a.onError&&a.onError(r.status)}}},hasPendingRequests:function(){for(var e in this.pendingRequests)return!0
return!1},getRequestXhr:function(e){return this.pendingRequests[e].xhr},isStreamingRequest:function(e){return!!this.pendingRequests[e].onProgressiveData},isPendingRequest:function(e){return e in this.pendingRequests},isLoadedRequest:function(e){return e in this.loadedRequests},abortAllRequests:function(){for(var e in this.pendingRequests)this.abortRequest(0|e)},abortRequest:function(e){var t=this.pendingRequests[e].xhr
delete this.pendingRequests[e],t.abort()}}
var f=c.assert,d=c.createPromiseCapability,g=c.isInt,p=c.MissingPDFException,m=c.UnexpectedResponseException
n.prototype={_onRangeRequestReaderClosed:function(e){var t=this._rangeRequestReaders.indexOf(e)
t>=0&&this._rangeRequestReaders.splice(t,1)},getFullReader:function(){return f(!this._fullRequestReader),this._fullRequestReader=new s(this._manager,this._options),this._fullRequestReader},getRangeReader:function(e,t){var a=new o(this._manager,e,t)
return a.onClosed=this._onRangeRequestReaderClosed.bind(this),this._rangeRequestReaders.push(a),a},cancelAllRequests:function(e){this._fullRequestReader&&this._fullRequestReader.cancel(e),this._rangeRequestReaders.slice(0).forEach(function(t){t.cancel(e)})}},s.prototype={_validateRangeRequestCapabilities:function(){if(this._disableRange)return!1
var e=this._manager
if(!e.isHttp)return!1
var t=this._fullRequestId,a=e.getRequestXhr(t)
if("bytes"!==a.getResponseHeader("Accept-Ranges"))return!1
if("identity"!==(a.getResponseHeader("Content-Encoding")||"identity"))return!1
var r=a.getResponseHeader("Content-Length")
return r=parseInt(r,10),!!g(r)&&(this._contentLength=r,!(r<=2*this._rangeChunkSize))},_onHeadersReceived:function(){this._validateRangeRequestCapabilities()&&(this._isRangeSupported=!0)
var e=this._manager,t=this._fullRequestId
e.isStreamingRequest(t)?this._isStreamingSupported=!0:this._isRangeSupported&&e.abortRequest(t),this._headersReceivedCapability.resolve()},_onProgressiveData:function(e){if(this._requests.length>0){this._requests.shift().resolve({value:e,done:!1})}else this._cachedChunks.push(e)},_onDone:function(e){e&&this._onProgressiveData(e.chunk),this._done=!0,this._cachedChunks.length>0||(this._requests.forEach(function(e){e.resolve({value:void 0,done:!0})}),this._requests=[])},_onError:function(e){var t,a=this._url
t=404===e||0===e&&/^file:/.test(a)?new p('Missing PDF "'+a+'".'):new m("Unexpected server response ("+e+') while retrieving PDF "'+a+'".',e),this._storedError=t,this._headersReceivedCapability.reject(t),this._requests.forEach(function(e){e.reject(t)}),this._requests=[],this._cachedChunks=[]},_onProgress:function(e){this.onProgress&&this.onProgress({loaded:e.loaded,total:e.lengthComputable?e.total:this._contentLength})},get isRangeSupported(){return this._isRangeSupported},get isStreamingSupported(){return this._isStreamingSupported},get contentLength(){return this._contentLength},get headersReady(){return this._headersReceivedCapability.promise},read:function(){if(this._storedError)return Promise.reject(this._storedError)
if(this._cachedChunks.length>0){var e=this._cachedChunks.shift()
return Promise.resolve(e)}if(this._done)return Promise.resolve({value:void 0,done:!0})
var t=d()
return this._requests.push(t),t.promise},cancel:function(e){this._done=!0,this._headersReceivedCapability.reject(e),this._requests.forEach(function(e){e.resolve({value:void 0,done:!0})}),this._requests=[],this._manager.isPendingRequest(this._fullRequestId)&&this._manager.abortRequest(this._fullRequestId),this._fullRequestReader=null}},o.prototype={_close:function(){this.onClosed&&this.onClosed(this)},_onDone:function(e){var t=e.chunk
if(this._requests.length>0){this._requests.shift().resolve({value:t,done:!1})}else this._queuedChunk=t
this._done=!0,this._requests.forEach(function(e){e.resolve({value:void 0,done:!0})}),this._requests=[],this._close()},_onProgress:function(e){!this.isStreamingSupported&&this.onProgress&&this.onProgress({loaded:e.loaded})},get isStreamingSupported(){return!1},read:function(){if(null!==this._queuedChunk){var e=this._queuedChunk
return this._queuedChunk=null,Promise.resolve({value:e,done:!1})}if(this._done)return Promise.resolve({value:void 0,done:!0})
var t=d()
return this._requests.push(t),t.promise},cancel:function(e){this._done=!0,this._requests.forEach(function(e){e.resolve({value:void 0,done:!0})}),this._requests=[],this._manager.isPendingRequest(this._requestId)&&this._manager.abortRequest(this._requestId),this._close()}},l.setPDFNetworkStreamClass(n),t.PDFNetworkStream=n,t.NetworkManager=r},function(e,t,a){"use strict"
function r(){}var i=a(0),n=a(1),s=a(2),o=a(3),c=a(16),l=a(14),h=i.AnnotationBorderStyleType,u=i.AnnotationFieldFlag,f=i.AnnotationFlag,d=i.AnnotationType,g=i.OPS,p=i.Util,m=i.isArray,b=i.isInt,v=i.stringToBytes,y=i.stringToPDFString,k=i.warn,w=n.Dict,x=n.isDict,C=n.isName,S=n.isRef,A=n.isStream,I=s.Stream,B=o.ColorSpace,R=c.Catalog,T=c.ObjectLoader,O=c.FileSpec,P=l.OperatorList
r.prototype={create:function(e,t,a,r){var i=e.fetchIfRef(t)
if(x(i)){var n=S(t)?t.toString():"annot_"+r.createObjId(),s=i.get("Subtype")
s=C(s)?s.name:null
var o={xref:e,dict:i,ref:S(t)?t:null,subtype:s,id:n,pdfManager:a}
switch(s){case"Link":return new N(o)
case"Text":return new U(o)
case"Widget":var c=p.getInheritableProperty(i,"FT")
switch(c=C(c)?c.name:null){case"Tx":return new D(o)
case"Btn":return new F(o)
case"Ch":return new q(o)}return k('Unimplemented widget field type "'+c+'", falling back to base field type.'),new L(o)
case"Popup":return new j(o)
case"Highlight":return new _(o)
case"Underline":return new z(o)
case"Squiggly":return new H(o)
case"StrikeOut":return new G(o)
case"FileAttachment":return new X(o)
default:return k(s?'Unimplemented annotation type "'+s+'", falling back to base annotation.':"Annotation is missing the required /Subtype."),new M(o)}}}}
var M=function(){function e(e,t,a){var r=p.getAxialAlignedBoundingBox(t,a),i=r[0],n=r[1],s=r[2],o=r[3]
if(i===s||n===o)return[1,0,0,1,e[0],e[1]]
var c=(e[2]-e[0])/(s-i),l=(e[3]-e[1])/(o-n)
return[c,0,0,l,e[0]-i*c,e[1]-n*l]}function t(e){var t=e.dict
this.setFlags(t.get("F")),this.setRectangle(t.getArray("Rect")),this.setColor(t.getArray("C")),this.setBorderStyle(t),this.setAppearance(t),this.data={},this.data.id=e.id,this.data.subtype=e.subtype,this.data.annotationFlags=this.flags,this.data.rect=this.rectangle,this.data.color=this.color,this.data.borderStyle=this.borderStyle,this.data.hasAppearance=!!this.appearance}return t.prototype={_hasFlag:function(e,t){return!!(e&t)},_isViewable:function(e){return!this._hasFlag(e,f.INVISIBLE)&&!this._hasFlag(e,f.HIDDEN)&&!this._hasFlag(e,f.NOVIEW)},_isPrintable:function(e){return this._hasFlag(e,f.PRINT)&&!this._hasFlag(e,f.INVISIBLE)&&!this._hasFlag(e,f.HIDDEN)},get viewable(){return 0===this.flags||this._isViewable(this.flags)},get printable(){return 0!==this.flags&&this._isPrintable(this.flags)},setFlags:function(e){this.flags=b(e)&&e>0?e:0},hasFlag:function(e){return this._hasFlag(this.flags,e)},setRectangle:function(e){m(e)&&4===e.length?this.rectangle=p.normalizeRect(e):this.rectangle=[0,0,0,0]},setColor:function(e){var t=new Uint8Array(3)
if(!m(e))return void(this.color=t)
switch(e.length){case 0:this.color=null
break
case 1:B.singletons.gray.getRgbItem(e,0,t,0),this.color=t
break
case 3:B.singletons.rgb.getRgbItem(e,0,t,0),this.color=t
break
case 4:B.singletons.cmyk.getRgbItem(e,0,t,0),this.color=t
break
default:this.color=t}},setBorderStyle:function(e){if(this.borderStyle=new E,x(e))if(e.has("BS")){var t=e.get("BS"),a=t.get("Type")
a&&!C(a,"Border")||(this.borderStyle.setWidth(t.get("W")),this.borderStyle.setStyle(t.get("S")),this.borderStyle.setDashArray(t.getArray("D")))}else if(e.has("Border")){var r=e.getArray("Border")
m(r)&&r.length>=3&&(this.borderStyle.setHorizontalCornerRadius(r[0]),this.borderStyle.setVerticalCornerRadius(r[1]),this.borderStyle.setWidth(r[2]),4===r.length&&this.borderStyle.setDashArray(r[3]))}else this.borderStyle.setWidth(0)},setAppearance:function(e){this.appearance=null
var t=e.get("AP")
if(x(t)){var a=t.get("N")
if(A(a))return void(this.appearance=a)
if(x(a)){var r=e.get("AS")
C(r)&&a.has(r.name)&&(this.appearance=a.get(r.name))}}},_preparePopup:function(e){e.has("C")||(this.data.color=null),this.data.hasPopup=e.has("Popup"),this.data.title=y(e.get("T")||""),this.data.contents=y(e.get("Contents")||"")},loadResources:function(e){return new Promise(function(t,a){this.appearance.dict.getAsync("Resources").then(function(r){if(!r)return void t()
new T(r.map,e,r.xref).load().then(function(){t(r)},a)},a)}.bind(this))},getOperatorList:function(t,a,r){if(!this.appearance)return Promise.resolve(new P)
var i=this.data,n=this.appearance.dict,s=this.loadResources(["ExtGState","ColorSpace","Pattern","Shading","XObject","Font"]),o=n.getArray("BBox")||[0,0,1,1],c=n.getArray("Matrix")||[1,0,0,1,0,0],l=e(i.rect,o,c),h=this
return s.then(function(e){var r=new P
return r.addOp(g.beginAnnotation,[i.rect,l,c]),t.getOperatorList(h.appearance,a,e,r).then(function(){return r.addOp(g.endAnnotation,[]),h.appearance.reset(),r})})}},t}(),E=function(){function e(){this.width=1,this.style=h.SOLID,this.dashArray=[3],this.horizontalCornerRadius=0,this.verticalCornerRadius=0}return e.prototype={setWidth:function(e){e===(0|e)&&(this.width=e)},setStyle:function(e){if(e)switch(e.name){case"S":this.style=h.SOLID
break
case"D":this.style=h.DASHED
break
case"B":this.style=h.BEVELED
break
case"I":this.style=h.INSET
break
case"U":this.style=h.UNDERLINE}},setDashArray:function(e){if(m(e)&&e.length>0){for(var t=!0,a=!0,r=0,i=e.length;r<i;r++){var n=e[r]
if(!(+n>=0)){t=!1
break}n>0&&(a=!1)}t&&!a?this.dashArray=e:this.width=0}else e&&(this.width=0)},setHorizontalCornerRadius:function(e){e===(0|e)&&(this.horizontalCornerRadius=e)},setVerticalCornerRadius:function(e){e===(0|e)&&(this.verticalCornerRadius=e)}},e}(),L=function(){function e(e){M.call(this,e)
var t=e.dict,a=this.data
a.annotationType=d.WIDGET,a.fieldName=this._constructFieldName(t),a.fieldValue=p.getInheritableProperty(t,"V",!0),a.alternativeText=y(t.get("TU")||""),a.defaultAppearance=p.getInheritableProperty(t,"DA")||""
var r=p.getInheritableProperty(t,"FT")
a.fieldType=C(r)?r.name:null,this.fieldResources=p.getInheritableProperty(t,"DR")||w.empty,a.fieldFlags=p.getInheritableProperty(t,"Ff"),(!b(a.fieldFlags)||a.fieldFlags<0)&&(a.fieldFlags=0),a.readOnly=this.hasFieldFlag(u.READONLY),"Sig"===a.fieldType&&this.setFlags(f.HIDDEN)}return p.inherit(e,M,{_constructFieldName:function(e){if(!e.has("T")&&!e.has("Parent"))return k("Unknown field name, falling back to empty field name."),""
if(!e.has("Parent"))return y(e.get("T"))
var t=[]
e.has("T")&&t.unshift(y(e.get("T")))
for(var a=e;a.has("Parent")&&(a=a.get("Parent"),x(a));)a.has("T")&&t.unshift(y(a.get("T")))
return t.join(".")},hasFieldFlag:function(e){return!!(this.data.fieldFlags&e)}}),e}(),D=function(){function e(e){L.call(this,e),this.data.fieldValue=y(this.data.fieldValue||"")
var t=p.getInheritableProperty(e.dict,"Q");(!b(t)||t<0||t>2)&&(t=null),this.data.textAlignment=t
var a=p.getInheritableProperty(e.dict,"MaxLen");(!b(a)||a<0)&&(a=null),this.data.maxLen=a,this.data.multiLine=this.hasFieldFlag(u.MULTILINE),this.data.comb=this.hasFieldFlag(u.COMB)&&!this.hasFieldFlag(u.MULTILINE)&&!this.hasFieldFlag(u.PASSWORD)&&!this.hasFieldFlag(u.FILESELECT)&&null!==this.data.maxLen}return p.inherit(e,L,{getOperatorList:function(e,t,a){var r=new P
if(a)return Promise.resolve(r)
if(this.appearance)return M.prototype.getOperatorList.call(this,e,t,a)
if(!this.data.defaultAppearance)return Promise.resolve(r)
var i=new I(v(this.data.defaultAppearance))
return e.getOperatorList(i,t,this.fieldResources,r).then(function(){return r})}}),e}(),F=function(){function e(e){if(L.call(this,e),this.data.checkBox=!this.hasFieldFlag(u.RADIO)&&!this.hasFieldFlag(u.PUSHBUTTON),this.data.checkBox){if(!C(this.data.fieldValue))return
this.data.fieldValue=this.data.fieldValue.name}if(this.data.radioButton=this.hasFieldFlag(u.RADIO)&&!this.hasFieldFlag(u.PUSHBUTTON),this.data.radioButton){this.data.fieldValue=this.data.buttonValue=null
var t=e.dict.get("Parent")
if(x(t)&&t.has("V")){var a=t.get("V")
C(a)&&(this.data.fieldValue=a.name)}var r=e.dict.get("AP")
if(!x(r))return
var i=r.get("N")
if(!x(i))return
for(var n=i.getKeys(),s=0,o=n.length;s<o;s++)if("Off"!==n[s]){this.data.buttonValue=n[s]
break}}}return p.inherit(e,L,{getOperatorList:function(e,t,a){var r=new P
return a?Promise.resolve(r):this.appearance?M.prototype.getOperatorList.call(this,e,t,a):Promise.resolve(r)}}),e}(),q=function(){function e(e){L.call(this,e),this.data.options=[]
var t=p.getInheritableProperty(e.dict,"Opt")
if(m(t))for(var a=e.xref,r=0,i=t.length;r<i;r++){var n=a.fetchIfRef(t[r]),s=m(n)
this.data.options[r]={exportValue:s?a.fetchIfRef(n[0]):n,displayValue:s?a.fetchIfRef(n[1]):n}}m(this.data.fieldValue)||(this.data.fieldValue=[this.data.fieldValue]),this.data.combo=this.hasFieldFlag(u.COMBO),this.data.multiSelect=this.hasFieldFlag(u.MULTISELECT)}return p.inherit(e,L,{getOperatorList:function(e,t,a){var r=new P
return a?Promise.resolve(r):M.prototype.getOperatorList.call(this,e,t,a)}}),e}(),U=function(){function e(e){M.call(this,e),this.data.annotationType=d.TEXT,this.data.hasAppearance?this.data.name="NoIcon":(this.data.rect[1]=this.data.rect[3]-t,this.data.rect[2]=this.data.rect[0]+t,this.data.name=e.dict.has("Name")?e.dict.get("Name").name:"Note"),this._preparePopup(e.dict)}var t=22
return p.inherit(e,M,{}),e}(),N=function(){function e(e){M.call(this,e)
var t=this.data
t.annotationType=d.LINK,R.parseDestDictionary({destDict:e.dict,resultObj:t,docBaseUrl:e.pdfManager.docBaseUrl})}return p.inherit(e,M,{}),e}(),j=function(){function e(e){M.call(this,e),this.data.annotationType=d.POPUP
var t=e.dict,a=t.get("Parent")
if(!a)return void k("Popup annotation has a missing or invalid parent annotation.")
if(this.data.parentId=t.getRaw("Parent").toString(),this.data.title=y(a.get("T")||""),this.data.contents=y(a.get("Contents")||""),a.has("C")?(this.setColor(a.getArray("C")),this.data.color=this.color):this.data.color=null,!this.viewable){var r=a.get("F")
this._isViewable(r)&&this.setFlags(r)}}return p.inherit(e,M,{}),e}(),_=function(){function e(e){M.call(this,e),this.data.annotationType=d.HIGHLIGHT,this._preparePopup(e.dict),this.data.borderStyle.setWidth(0)}return p.inherit(e,M,{}),e}(),z=function(){function e(e){M.call(this,e),this.data.annotationType=d.UNDERLINE,this._preparePopup(e.dict),this.data.borderStyle.setWidth(0)}return p.inherit(e,M,{}),e}(),H=function(){function e(e){M.call(this,e),this.data.annotationType=d.SQUIGGLY,this._preparePopup(e.dict),this.data.borderStyle.setWidth(0)}return p.inherit(e,M,{}),e}(),G=function(){function e(e){M.call(this,e),this.data.annotationType=d.STRIKEOUT,this._preparePopup(e.dict),this.data.borderStyle.setWidth(0)}return p.inherit(e,M,{}),e}(),X=function(){function e(e){M.call(this,e)
var t=new O(e.dict.get("FS"),e.xref)
this.data.annotationType=d.FILEATTACHMENT,this.data.file=t.serializable,this._preparePopup(e.dict)}return p.inherit(e,M,{}),e}()
t.Annotation=M,t.AnnotationBorderStyle=E,t.AnnotationFactory=r},function(e,t,a){"use strict"
function r(e){return 0!=(1&e)}function i(e){return 0==(1&e)}function n(e,t,a){for(var r=t,i=e.length;r<i;++r)if(e[r]!==a)return r
return r}function s(e,t,a,r){for(var i=t;i<a;++i)e[i]=r}function o(e,t,a){for(var r=t,i=a-1;r<i;++r,--i){var n=e[r]
e[r]=e[i],e[i]=n}}function c(e,t,a){return{str:e,dir:a?"ttb":t?"ltr":"rtl"}}function l(e,t,a){var l=!0,h=e.length
if(0===h||a)return c(e,l,a)
g.length=h,p.length=h
var m,b,v=0
for(m=0;m<h;++m){g[m]=e.charAt(m)
var y=e.charCodeAt(m),k="L"
y<=255?k=f[y]:1424<=y&&y<=1524?k="R":1536<=y&&y<=1791?(k=d[255&y])||u("Bidi: invalid Unicode character "+y.toString(16)):1792<=y&&y<=2220&&(k="AL"),"R"!==k&&"AL"!==k&&"AN"!==k||v++,p[m]=k}if(0===v)return l=!0,c(e,l)
t===-1&&(v/h<.3?(l=!0,t=0):(l=!1,t=1))
var w=[]
for(m=0;m<h;++m)w[m]=t
var x=r(t)?"R":"L",C=x,S=C,A=C
for(m=0;m<h;++m)"NSM"===p[m]?p[m]=A:A=p[m]
A=C
var I
for(m=0;m<h;++m)I=p[m],"EN"===I?p[m]="AL"===A?"AN":"EN":"R"!==I&&"L"!==I&&"AL"!==I||(A=I)
for(m=0;m<h;++m)"AL"===(I=p[m])&&(p[m]="R")
for(m=1;m<h-1;++m)"ES"===p[m]&&"EN"===p[m-1]&&"EN"===p[m+1]&&(p[m]="EN"),"CS"!==p[m]||"EN"!==p[m-1]&&"AN"!==p[m-1]||p[m+1]!==p[m-1]||(p[m]=p[m-1])
for(m=0;m<h;++m)if("EN"===p[m]){var B
for(B=m-1;B>=0&&"ET"===p[B];--B)p[B]="EN"
for(B=m+1;B<h&&"ET"===p[B];++B)p[B]="EN"}for(m=0;m<h;++m)"WS"!==(I=p[m])&&"ES"!==I&&"ET"!==I&&"CS"!==I||(p[m]="ON")
for(A=C,m=0;m<h;++m)I=p[m],"EN"===I?p[m]="L"===A?"L":"EN":"R"!==I&&"L"!==I||(A=I)
for(m=0;m<h;++m)if("ON"===p[m]){var R=n(p,m+1,"ON"),T=C
m>0&&(T=p[m-1])
var O=S
R+1<h&&(O=p[R+1]),"L"!==T&&(T="R"),"L"!==O&&(O="R"),T===O&&s(p,m,R,T),m=R-1}for(m=0;m<h;++m)"ON"===p[m]&&(p[m]=x)
for(m=0;m<h;++m)I=p[m],i(w[m])?"R"===I?w[m]+=1:"AN"!==I&&"EN"!==I||(w[m]+=2):"L"!==I&&"AN"!==I&&"EN"!==I||(w[m]+=1)
var P,M=-1,E=99
for(m=0,b=w.length;m<b;++m)P=w[m],M<P&&(M=P),E>P&&r(P)&&(E=P)
for(P=M;P>=E;--P){var L=-1
for(m=0,b=w.length;m<b;++m)w[m]<P?L>=0&&(o(g,L,m),L=-1):L<0&&(L=m)
L>=0&&o(g,L,w.length)}for(m=0,b=g.length;m<b;++m){var D=g[m]
"<"!==D&&">"!==D||(g[m]="")}return c(g.join(""),l)}var h=a(0),u=h.warn,f=["BN","BN","BN","BN","BN","BN","BN","BN","BN","S","B","S","WS","B","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","B","B","B","S","WS","ON","ON","ET","ET","ET","ON","ON","ON","ON","ON","ES","CS","ES","CS","CS","EN","EN","EN","EN","EN","EN","EN","EN","EN","EN","CS","ON","ON","ON","ON","ON","ON","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","ON","ON","ON","ON","ON","ON","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","ON","ON","ON","ON","BN","BN","BN","BN","BN","BN","B","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","CS","ON","ET","ET","ET","ET","ON","ON","ON","ON","L","ON","ON","BN","ON","ON","ET","ET","EN","EN","ON","L","ON","ON","ON","EN","L","ON","ON","ON","ON","ON","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","ON","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","ON","L","L","L","L","L","L","L","L"],d=["AN","AN","AN","AN","AN","AN","ON","ON","AL","ET","ET","AL","CS","AL","ON","ON","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","AL","AL","","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","AN","AN","AN","AN","AN","AN","AN","AN","AN","AN","ET","AN","AN","AL","AL","AL","NSM","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","NSM","NSM","NSM","NSM","NSM","NSM","NSM","AN","ON","NSM","NSM","NSM","NSM","NSM","NSM","AL","AL","NSM","NSM","ON","NSM","NSM","NSM","NSM","AL","AL","EN","EN","EN","EN","EN","EN","EN","EN","EN","EN","AL","AL","AL","AL","AL","AL"],g=[],p=[]
t.bidi=l},function(e,t,a){"use strict"
var r=[".notdef","space","exclam","quotedbl","numbersign","dollar","percent","ampersand","quoteright","parenleft","parenright","asterisk","plus","comma","hyphen","period","slash","zero","one","two","three","four","five","six","seven","eight","nine","colon","semicolon","less","equal","greater","question","at","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","bracketleft","backslash","bracketright","asciicircum","underscore","quoteleft","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","braceleft","bar","braceright","asciitilde","exclamdown","cent","sterling","fraction","yen","florin","section","currency","quotesingle","quotedblleft","guillemotleft","guilsinglleft","guilsinglright","fi","fl","endash","dagger","daggerdbl","periodcentered","paragraph","bullet","quotesinglbase","quotedblbase","quotedblright","guillemotright","ellipsis","perthousand","questiondown","grave","acute","circumflex","tilde","macron","breve","dotaccent","dieresis","ring","cedilla","hungarumlaut","ogonek","caron","emdash","AE","ordfeminine","Lslash","Oslash","OE","ordmasculine","ae","dotlessi","lslash","oslash","oe","germandbls","onesuperior","logicalnot","mu","trademark","Eth","onehalf","plusminus","Thorn","onequarter","divide","brokenbar","degree","thorn","threequarters","twosuperior","registered","minus","eth","multiply","threesuperior","copyright","Aacute","Acircumflex","Adieresis","Agrave","Aring","Atilde","Ccedilla","Eacute","Ecircumflex","Edieresis","Egrave","Iacute","Icircumflex","Idieresis","Igrave","Ntilde","Oacute","Ocircumflex","Odieresis","Ograve","Otilde","Scaron","Uacute","Ucircumflex","Udieresis","Ugrave","Yacute","Ydieresis","Zcaron","aacute","acircumflex","adieresis","agrave","aring","atilde","ccedilla","eacute","ecircumflex","edieresis","egrave","iacute","icircumflex","idieresis","igrave","ntilde","oacute","ocircumflex","odieresis","ograve","otilde","scaron","uacute","ucircumflex","udieresis","ugrave","yacute","ydieresis","zcaron"],i=[".notdef","space","exclamsmall","Hungarumlautsmall","dollaroldstyle","dollarsuperior","ampersandsmall","Acutesmall","parenleftsuperior","parenrightsuperior","twodotenleader","onedotenleader","comma","hyphen","period","fraction","zerooldstyle","oneoldstyle","twooldstyle","threeoldstyle","fouroldstyle","fiveoldstyle","sixoldstyle","sevenoldstyle","eightoldstyle","nineoldstyle","colon","semicolon","commasuperior","threequartersemdash","periodsuperior","questionsmall","asuperior","bsuperior","centsuperior","dsuperior","esuperior","isuperior","lsuperior","msuperior","nsuperior","osuperior","rsuperior","ssuperior","tsuperior","ff","fi","fl","ffi","ffl","parenleftinferior","parenrightinferior","Circumflexsmall","hyphensuperior","Gravesmall","Asmall","Bsmall","Csmall","Dsmall","Esmall","Fsmall","Gsmall","Hsmall","Ismall","Jsmall","Ksmall","Lsmall","Msmall","Nsmall","Osmall","Psmall","Qsmall","Rsmall","Ssmall","Tsmall","Usmall","Vsmall","Wsmall","Xsmall","Ysmall","Zsmall","colonmonetary","onefitted","rupiah","Tildesmall","exclamdownsmall","centoldstyle","Lslashsmall","Scaronsmall","Zcaronsmall","Dieresissmall","Brevesmall","Caronsmall","Dotaccentsmall","Macronsmall","figuredash","hypheninferior","Ogoneksmall","Ringsmall","Cedillasmall","onequarter","onehalf","threequarters","questiondownsmall","oneeighth","threeeighths","fiveeighths","seveneighths","onethird","twothirds","zerosuperior","onesuperior","twosuperior","threesuperior","foursuperior","fivesuperior","sixsuperior","sevensuperior","eightsuperior","ninesuperior","zeroinferior","oneinferior","twoinferior","threeinferior","fourinferior","fiveinferior","sixinferior","seveninferior","eightinferior","nineinferior","centinferior","dollarinferior","periodinferior","commainferior","Agravesmall","Aacutesmall","Acircumflexsmall","Atildesmall","Adieresissmall","Aringsmall","AEsmall","Ccedillasmall","Egravesmall","Eacutesmall","Ecircumflexsmall","Edieresissmall","Igravesmall","Iacutesmall","Icircumflexsmall","Idieresissmall","Ethsmall","Ntildesmall","Ogravesmall","Oacutesmall","Ocircumflexsmall","Otildesmall","Odieresissmall","OEsmall","Oslashsmall","Ugravesmall","Uacutesmall","Ucircumflexsmall","Udieresissmall","Yacutesmall","Thornsmall","Ydieresissmall"],n=[".notdef","space","dollaroldstyle","dollarsuperior","parenleftsuperior","parenrightsuperior","twodotenleader","onedotenleader","comma","hyphen","period","fraction","zerooldstyle","oneoldstyle","twooldstyle","threeoldstyle","fouroldstyle","fiveoldstyle","sixoldstyle","sevenoldstyle","eightoldstyle","nineoldstyle","colon","semicolon","commasuperior","threequartersemdash","periodsuperior","asuperior","bsuperior","centsuperior","dsuperior","esuperior","isuperior","lsuperior","msuperior","nsuperior","osuperior","rsuperior","ssuperior","tsuperior","ff","fi","fl","ffi","ffl","parenleftinferior","parenrightinferior","hyphensuperior","colonmonetary","onefitted","rupiah","centoldstyle","figuredash","hypheninferior","onequarter","onehalf","threequarters","oneeighth","threeeighths","fiveeighths","seveneighths","onethird","twothirds","zerosuperior","onesuperior","twosuperior","threesuperior","foursuperior","fivesuperior","sixsuperior","sevensuperior","eightsuperior","ninesuperior","zeroinferior","oneinferior","twoinferior","threeinferior","fourinferior","fiveinferior","sixinferior","seveninferior","eightinferior","nineinferior","centinferior","dollarinferior","periodinferior","commainferior"]
t.ISOAdobeCharset=r,t.ExpertCharset=i,t.ExpertSubsetCharset=n},function(e,t,a){"use strict"
var r=a(0),i=a(1),n=a(2),s=a(5),o=r.Util,c=r.assert,l=r.warn,h=r.error,u=r.isInt,f=r.isString,d=r.MissingDataException,g=r.CMapCompressionType,p=i.isEOF,m=i.isName,b=i.isCmd,v=i.isStream,y=n.Stream,k=s.Lexer,w=["Adobe-GB1-UCS2","Adobe-CNS1-UCS2","Adobe-Japan1-UCS2","Adobe-Korea1-UCS2","78-EUC-H","78-EUC-V","78-H","78-RKSJ-H","78-RKSJ-V","78-V","78ms-RKSJ-H","78ms-RKSJ-V","83pv-RKSJ-H","90ms-RKSJ-H","90ms-RKSJ-V","90msp-RKSJ-H","90msp-RKSJ-V","90pv-RKSJ-H","90pv-RKSJ-V","Add-H","Add-RKSJ-H","Add-RKSJ-V","Add-V","Adobe-CNS1-0","Adobe-CNS1-1","Adobe-CNS1-2","Adobe-CNS1-3","Adobe-CNS1-4","Adobe-CNS1-5","Adobe-CNS1-6","Adobe-GB1-0","Adobe-GB1-1","Adobe-GB1-2","Adobe-GB1-3","Adobe-GB1-4","Adobe-GB1-5","Adobe-Japan1-0","Adobe-Japan1-1","Adobe-Japan1-2","Adobe-Japan1-3","Adobe-Japan1-4","Adobe-Japan1-5","Adobe-Japan1-6","Adobe-Korea1-0","Adobe-Korea1-1","Adobe-Korea1-2","B5-H","B5-V","B5pc-H","B5pc-V","CNS-EUC-H","CNS-EUC-V","CNS1-H","CNS1-V","CNS2-H","CNS2-V","ETHK-B5-H","ETHK-B5-V","ETen-B5-H","ETen-B5-V","ETenms-B5-H","ETenms-B5-V","EUC-H","EUC-V","Ext-H","Ext-RKSJ-H","Ext-RKSJ-V","Ext-V","GB-EUC-H","GB-EUC-V","GB-H","GB-V","GBK-EUC-H","GBK-EUC-V","GBK2K-H","GBK2K-V","GBKp-EUC-H","GBKp-EUC-V","GBT-EUC-H","GBT-EUC-V","GBT-H","GBT-V","GBTpc-EUC-H","GBTpc-EUC-V","GBpc-EUC-H","GBpc-EUC-V","H","HKdla-B5-H","HKdla-B5-V","HKdlb-B5-H","HKdlb-B5-V","HKgccs-B5-H","HKgccs-B5-V","HKm314-B5-H","HKm314-B5-V","HKm471-B5-H","HKm471-B5-V","HKscs-B5-H","HKscs-B5-V","Hankaku","Hiragana","KSC-EUC-H","KSC-EUC-V","KSC-H","KSC-Johab-H","KSC-Johab-V","KSC-V","KSCms-UHC-H","KSCms-UHC-HW-H","KSCms-UHC-HW-V","KSCms-UHC-V","KSCpc-EUC-H","KSCpc-EUC-V","Katakana","NWP-H","NWP-V","RKSJ-H","RKSJ-V","Roman","UniCNS-UCS2-H","UniCNS-UCS2-V","UniCNS-UTF16-H","UniCNS-UTF16-V","UniCNS-UTF32-H","UniCNS-UTF32-V","UniCNS-UTF8-H","UniCNS-UTF8-V","UniGB-UCS2-H","UniGB-UCS2-V","UniGB-UTF16-H","UniGB-UTF16-V","UniGB-UTF32-H","UniGB-UTF32-V","UniGB-UTF8-H","UniGB-UTF8-V","UniJIS-UCS2-H","UniJIS-UCS2-HW-H","UniJIS-UCS2-HW-V","UniJIS-UCS2-V","UniJIS-UTF16-H","UniJIS-UTF16-V","UniJIS-UTF32-H","UniJIS-UTF32-V","UniJIS-UTF8-H","UniJIS-UTF8-V","UniJIS2004-UTF16-H","UniJIS2004-UTF16-V","UniJIS2004-UTF32-H","UniJIS2004-UTF32-V","UniJIS2004-UTF8-H","UniJIS2004-UTF8-V","UniJISPro-UCS2-HW-V","UniJISPro-UCS2-V","UniJISPro-UTF8-V","UniJISX0213-UTF32-H","UniJISX0213-UTF32-V","UniJISX02132004-UTF32-H","UniJISX02132004-UTF32-V","UniKS-UCS2-H","UniKS-UCS2-V","UniKS-UTF16-H","UniKS-UTF16-V","UniKS-UTF32-H","UniKS-UTF32-V","UniKS-UTF8-H","UniKS-UTF8-V","V","WP-Symbol"],x=function(){function e(e){this.codespaceRanges=[[],[],[],[]],this.numCodespaceRanges=0,this._map=[],this.name="",this.vertical=!1,this.useCMap=null,this.builtInCMap=e}return e.prototype={addCodespaceRange:function(e,t,a){this.codespaceRanges[e-1].push(t,a),this.numCodespaceRanges++},mapCidRange:function(e,t,a){for(;e<=t;)this._map[e++]=a++},mapBfRange:function(e,t,a){for(var r=a.length-1;e<=t;)this._map[e++]=a,a=a.substr(0,r)+String.fromCharCode(a.charCodeAt(r)+1)},mapBfRangeToArray:function(e,t,a){for(var r=0,i=a.length;e<=t&&r<i;)this._map[e]=a[r++],++e},mapOne:function(e,t){this._map[e]=t},lookup:function(e){return this._map[e]},contains:function(e){return void 0!==this._map[e]},forEach:function(e){var t,a=this._map,r=a.length
if(r<=65536)for(t=0;t<r;t++)void 0!==a[t]&&e(t,a[t])
else for(t in this._map)e(t,a[t])},charCodeOf:function(e){return this._map.indexOf(e)},getMap:function(){return this._map},readCharCode:function(e,t,a){for(var r=0,i=this.codespaceRanges,n=this.codespaceRanges.length,s=0;s<n;s++){r=(r<<8|e.charCodeAt(t+s))>>>0
for(var o=i[s],c=0,l=o.length;c<l;){var h=o[c++],u=o[c++]
if(r>=h&&r<=u)return a.charcode=r,void(a.length=s+1)}}a.charcode=0,a.length=1},get length(){return this._map.length},get isIdentityCMap(){if("Identity-H"!==this.name&&"Identity-V"!==this.name)return!1
if(65536!==this._map.length)return!1
for(var e=0;e<65536;e++)if(this._map[e]!==e)return!1
return!0}},e}(),C=function(){function e(e,t){x.call(this),this.vertical=e,this.addCodespaceRange(t,0,65535)}return o.inherit(e,x,{}),e.prototype={addCodespaceRange:x.prototype.addCodespaceRange,mapCidRange:function(e,t,a){h("should not call mapCidRange")},mapBfRange:function(e,t,a){h("should not call mapBfRange")},mapBfRangeToArray:function(e,t,a){h("should not call mapBfRangeToArray")},mapOne:function(e,t){h("should not call mapCidOne")},lookup:function(e){return u(e)&&e<=65535?e:void 0},contains:function(e){return u(e)&&e<=65535},forEach:function(e){for(var t=0;t<=65535;t++)e(t,t)},charCodeOf:function(e){return u(e)&&e<=65535?e:-1},getMap:function(){for(var e=new Array(65536),t=0;t<=65535;t++)e[t]=t
return e},readCharCode:x.prototype.readCharCode,get length(){return 65536},get isIdentityCMap(){h("should not access .isIdentityCMap")}},e}(),S=function(){function e(e,t){for(var a=0,r=0;r<=t;r++)a=a<<8|e[r]
return a>>>0}function t(e,t){return 1===t?String.fromCharCode(e[0],e[1]):3===t?String.fromCharCode(e[0],e[1],e[2],e[3]):String.fromCharCode.apply(null,e.subarray(0,t+1))}function a(e,t,a){for(var r=0,i=a;i>=0;i--)r+=e[i]+t[i],e[i]=255&r,r>>=8}function r(e,t){for(var a=1,r=t;r>=0&&a>0;r--)a+=e[r],e[r]=255&a,a>>=8}function i(e){this.buffer=e,this.pos=0,this.end=e.length,this.tmpBuf=new Uint8Array(l)}function n(n,s,l){return new Promise(function(h,u){var f=new i(n),d=f.readByte()
s.vertical=!!(1&d)
for(var g,p,m=null,b=new Uint8Array(o),v=new Uint8Array(o),y=new Uint8Array(o),k=new Uint8Array(o),w=new Uint8Array(o);(p=f.readByte())>=0;){var x=p>>5
if(7!==x){var C=!!(16&p),S=15&p
c(S+1<=o)
var A,I=f.readNumber()
switch(x){case 0:for(f.readHex(b,S),f.readHexNumber(v,S),a(v,b,S),s.addCodespaceRange(S+1,e(b,S),e(v,S)),A=1;A<I;A++)r(v,S),f.readHexNumber(b,S),a(b,v,S),f.readHexNumber(v,S),a(v,b,S),s.addCodespaceRange(S+1,e(b,S),e(v,S))
break
case 1:for(f.readHex(b,S),f.readHexNumber(v,S),a(v,b,S),g=f.readNumber(),A=1;A<I;A++)r(v,S),f.readHexNumber(b,S),a(b,v,S),f.readHexNumber(v,S),a(v,b,S),g=f.readNumber()
break
case 2:for(f.readHex(y,S),g=f.readNumber(),s.mapOne(e(y,S),g),A=1;A<I;A++)r(y,S),C||(f.readHexNumber(w,S),a(y,w,S)),g=f.readSigned()+(g+1),s.mapOne(e(y,S),g)
break
case 3:for(f.readHex(b,S),f.readHexNumber(v,S),a(v,b,S),g=f.readNumber(),s.mapCidRange(e(b,S),e(v,S),g),A=1;A<I;A++)r(v,S),C?b.set(v):(f.readHexNumber(b,S),a(b,v,S)),f.readHexNumber(v,S),a(v,b,S),g=f.readNumber(),s.mapCidRange(e(b,S),e(v,S),g)
break
case 4:for(f.readHex(y,1),f.readHex(k,S),s.mapOne(e(y,1),t(k,S)),A=1;A<I;A++)r(y,1),C||(f.readHexNumber(w,1),a(y,w,1)),r(k,S),f.readHexSigned(w,S),a(k,w,S),s.mapOne(e(y,1),t(k,S))
break
case 5:for(f.readHex(b,1),f.readHexNumber(v,1),a(v,b,1),f.readHex(k,S),s.mapBfRange(e(b,1),e(v,1),t(k,S)),A=1;A<I;A++)r(v,1),C?b.set(v):(f.readHexNumber(b,1),a(b,v,1)),f.readHexNumber(v,1),a(v,b,1),f.readHex(k,S),s.mapBfRange(e(b,1),e(v,1),t(k,S))
break
default:return void u(new Error("processBinaryCMap: Unknown type: "+x))}}else switch(31&p){case 0:f.readString()
break
case 1:m=f.readString()}}if(m)return void h(l(m))
h(s)})}function s(){}var o=16,l=19
return i.prototype={readByte:function(){return this.pos>=this.end?-1:this.buffer[this.pos++]},readNumber:function(){var e,t=0
do{var a=this.readByte()
a<0&&h("unexpected EOF in bcmap"),e=!(128&a),t=t<<7|127&a}while(!e)
return t},readSigned:function(){var e=this.readNumber()
return 1&e?~(e>>>1):e>>>1},readHex:function(e,t){e.set(this.buffer.subarray(this.pos,this.pos+t+1)),this.pos+=t+1},readHexNumber:function(e,t){var a,r=this.tmpBuf,i=0
do{var n=this.readByte()
n<0&&h("unexpected EOF in bcmap"),a=!(128&n),r[i++]=127&n}while(!a)
for(var s=t,o=0,c=0;s>=0;){for(;c<8&&r.length>0;)o=r[--i]<<c|o,c+=7
e[s]=255&o,s--,o>>=8,c-=8}},readHexSigned:function(e,t){this.readHexNumber(e,t)
for(var a=1&e[t]?255:0,r=0,i=0;i<=t;i++)r=(1&r)<<8|e[i],e[i]=r>>1^a},readString:function(){for(var e=this.readNumber(),t="",a=0;a<e;a++)t+=String.fromCharCode(this.readNumber())
return t}},s.prototype={process:n},s}(),A=function(){function e(e){for(var t=0,a=0;a<e.length;a++)t=t<<8|e.charCodeAt(a)
return t>>>0}function t(e){f(e)||h("Malformed CMap: expected string.")}function a(e){u(e)||h("Malformed CMap: expected int.")}function r(a,r){for(;;){var i=r.getObj()
if(p(i))break
if(b(i,"endbfchar"))return
t(i)
var n=e(i)
i=r.getObj(),t(i)
var s=i
a.mapOne(n,s)}}function i(a,r){for(;;){var i=r.getObj()
if(p(i))break
if(b(i,"endbfrange"))return
t(i)
var n=e(i)
i=r.getObj(),t(i)
var s=e(i)
if(i=r.getObj(),u(i)||f(i)){var o=u(i)?String.fromCharCode(i):i
a.mapBfRange(n,s,o)}else{if(!b(i,"["))break
i=r.getObj()
for(var c=[];!b(i,"]")&&!p(i);)c.push(i),i=r.getObj()
a.mapBfRangeToArray(n,s,c)}}h("Invalid bf range.")}function n(r,i){for(;;){var n=i.getObj()
if(p(n))break
if(b(n,"endcidchar"))return
t(n)
var s=e(n)
n=i.getObj(),a(n)
var o=n
r.mapOne(s,o)}}function s(r,i){for(;;){var n=i.getObj()
if(p(n))break
if(b(n,"endcidrange"))return
t(n)
var s=e(n)
n=i.getObj(),t(n)
var o=e(n)
n=i.getObj(),a(n)
var c=n
r.mapCidRange(s,o,c)}}function o(t,a){for(;;){var r=a.getObj()
if(p(r))break
if(b(r,"endcodespacerange"))return
if(!f(r))break
var i=e(r)
if(r=a.getObj(),!f(r))break
var n=e(r)
t.addCodespaceRange(r.length,i,n)}h("Invalid codespace range.")}function A(e,t){var a=t.getObj()
u(a)&&(e.vertical=!!a)}function I(e,t){var a=t.getObj()
m(a)&&f(a.name)&&(e.name=a.name)}function B(e,t,a,c){var h,u
e:for(;;)try{var f=t.getObj()
if(p(f))break
if(m(f))"WMode"===f.name?A(e,t):"CMapName"===f.name&&I(e,t),h=f
else if(b(f))switch(f.cmd){case"endcmap":break e
case"usecmap":m(h)&&(u=h.name)
break
case"begincodespacerange":o(e,t)
break
case"beginbfchar":r(e,t)
break
case"begincidchar":n(e,t)
break
case"beginbfrange":i(e,t)
break
case"begincidrange":s(e,t)}}catch(e){if(e instanceof d)throw e
l("Invalid cMap data: "+e)
continue}return!c&&u&&(c=u),c?R(e,a,c):Promise.resolve(e)}function R(e,t,a){return T(a,t).then(function(t){if(e.useCMap=t,0===e.numCodespaceRanges){for(var a=e.useCMap.codespaceRanges,r=0;r<a.length;r++)e.codespaceRanges[r]=a[r].slice()
e.numCodespaceRanges=e.useCMap.numCodespaceRanges}return e.useCMap.forEach(function(t,a){e.contains(t)||e.mapOne(t,e.useCMap.lookup(t))}),e})}function T(e,t){return"Identity-H"===e?Promise.resolve(new C(!1,2)):"Identity-V"===e?Promise.resolve(new C(!0,2)):w.indexOf(e)===-1?Promise.reject(new Error("Unknown cMap name: "+e)):(c(t,"Built-in CMap parameters are not provided."),t(e).then(function(e){var a=e.cMapData,r=e.compressionType,i=new x(!0)
if(r===g.BINARY)return(new S).process(a,i,function(e){return R(i,t,e)})
c(r===g.NONE,"TODO: Only BINARY/NONE CMap compression is currently supported.")
var n=new k(new y(a))
return B(i,n,t,null)}))}return{create:function(e){var t=e.encoding,a=e.fetchBuiltInCMap,r=e.useCMap
if(m(t))return T(t.name,a)
if(v(t)){return B(new x,new k(t),a,r).then(function(e){return e.isIdentityCMap?T(e.name,a):e})}return Promise.reject(new Error("Encoding required."))}}}()
t.CMap=x,t.CMapFactory=A,t.IdentityCMap=C},function(e,t,a){"use strict"
var r=a(0),i=a(1),n=a(2),s=a(16),o=a(5),c=a(13),l=a(14),h=a(20),u=r.OPS,f=r.MissingDataException,d=r.Util,g=r.assert,p=r.error,m=r.info,b=r.isArray,v=r.isArrayBuffer,y=r.isNum,k=r.isString,w=r.shadow,x=r.stringToBytes,C=r.stringToPDFString,S=r.warn,A=r.isSpace,I=i.Dict,B=i.isDict,R=i.isName,T=i.isStream,O=n.NullStream,P=n.Stream,M=n.StreamsSequenceStream,E=s.Catalog,L=s.ObjectLoader,D=s.XRef,F=o.Linearization,q=c.calculateMD5,U=l.OperatorList,N=l.PartialEvaluator,j=h.AnnotationFactory,_=function(){function e(e,t){return"display"===t&&e.viewable||"print"===t&&e.printable}function t(e,t,a,r,i,n,s){this.pdfManager=e,this.pageIndex=a,this.pageDict=r,this.xref=t,this.ref=i,this.fontCache=n,this.builtInCMapCache=s,this.evaluatorOptions=e.evaluatorOptions,this.resourcesPromise=null
var o="p"+this.pageIndex+"_",c={obj:0}
this.idFactory={createObjId:function(){return o+ ++c.obj}}}var a=[0,0,612,792]
return t.prototype={getPageProp:function(e){return this.pageDict.get(e)},getInheritedPageProp:function(e,t){var a=this.pageDict,r=null,i=0
for(t=t||!1;a;){var n=t?a.getArray(e):a.get(e)
if(void 0!==n&&(r||(r=[]),r.push(n)),++i>100)return S("getInheritedPageProp: maximum loop count exceeded for "+e),r?r[0]:void 0
a=a.get("Parent")}if(r)return 1!==r.length&&B(r[0])?I.merge(this.xref,r):r[0]},get content(){return this.getPageProp("Contents")},get resources(){return w(this,"resources",this.getInheritedPageProp("Resources")||I.empty)},get mediaBox(){var e=this.getInheritedPageProp("MediaBox",!0)
return b(e)&&4===e.length?w(this,"mediaBox",e):w(this,"mediaBox",a)},get cropBox(){var e=this.getInheritedPageProp("CropBox",!0)
return b(e)&&4===e.length?w(this,"cropBox",e):w(this,"cropBox",this.mediaBox)},get userUnit(){var e=this.getPageProp("UserUnit")
return(!y(e)||e<=0)&&(e=1),w(this,"userUnit",e)},get view(){var e=this.mediaBox,t=this.cropBox
if(e===t)return w(this,"view",e)
var a=d.intersect(t,e)
return w(this,"view",a||e)},get rotate(){var e=this.getInheritedPageProp("Rotate")||0
return e%90!=0?e=0:e>=360?e%=360:e<0&&(e=(e%360+360)%360),w(this,"rotate",e)},getContentStream:function(){var e,t=this.content
if(b(t)){var a,r=this.xref,i=t.length,n=[]
for(a=0;a<i;++a)n.push(r.fetchIfRef(t[a]))
e=new M(n)}else e=T(t)?t:new O
return e},loadResources:function(e){return this.resourcesPromise||(this.resourcesPromise=this.pdfManager.ensure(this,"resources")),this.resourcesPromise.then(function(){return new L(this.resources.map,e,this.xref).load()}.bind(this))},getOperatorList:function(t,a,r,i){var n=this,s=this.pdfManager,o=s.ensure(this,"getContentStream",[]),c=this.loadResources(["ExtGState","ColorSpace","Pattern","Shading","XObject","Font"]),l=new N(s,this.xref,t,this.pageIndex,this.idFactory,this.fontCache,this.builtInCMapCache,this.evaluatorOptions),h=Promise.all([o,c]),f=h.then(function(e){var i=e[0],s=new U(r,t,n.pageIndex)
return t.send("StartRenderPage",{transparency:l.hasBlendModes(n.resources),pageIndex:n.pageIndex,intent:r}),l.getOperatorList(i,a,n.resources,s).then(function(){return s})}),d=s.ensure(this,"annotations")
return Promise.all([f,d]).then(function(t){var n=t[0],s=t[1]
if(0===s.length)return n.flush(!0),n
var o,c,h=[]
for(o=0,c=s.length;o<c;o++)e(s[o],r)&&h.push(s[o].getOperatorList(l,a,i))
return Promise.all(h).then(function(e){for(n.addOp(u.beginAnnotations,[]),o=0,c=e.length;o<c;o++)n.addOpList(e[o])
return n.addOp(u.endAnnotations,[]),n.flush(!0),n})})},extractTextContent:function(e,t,a,r){var i=this,n=this.pdfManager,s=n.ensure(this,"getContentStream",[]),o=this.loadResources(["ExtGState","XObject","Font"])
return Promise.all([s,o]).then(function(s){var o=s[0]
return new N(n,i.xref,e,i.pageIndex,i.idFactory,i.fontCache,i.builtInCMapCache,i.evaluatorOptions).getTextContent(o,t,i.resources,null,a,r)})},getAnnotationsData:function(t){for(var a=this.annotations,r=[],i=0,n=a.length;i<n;++i)t&&!e(a[i],t)||r.push(a[i].data)
return r},get annotations(){for(var e=[],t=this.getInheritedPageProp("Annots")||[],a=new j,r=0,i=t.length;r<i;++r){var n=t[r],s=a.create(this.xref,n,this.pdfManager,this.idFactory)
s&&e.push(s)}return w(this,"annotations",e)}},t}(),z=function(){function e(e,t){var a
T(t)?a=t:v(t)?a=new P(t):p("PDFDocument: Unknown argument type"),g(a.length>0,"stream must have data"),this.pdfManager=e,this.stream=a,this.xref=new D(a,e)}function t(e,t,a,r){var i=e.pos,n=e.end,s=[]
i+a>n&&(a=n-i)
for(var o=0;o<a;++o)s.push(String.fromCharCode(e.getByte()))
var c=s.join("")
e.pos=i
var l=r?c.lastIndexOf(t):c.indexOf(t)
return l!==-1&&(e.pos+=l,!0)}var a={get entries(){return w(this,"entries",{Title:k,Author:k,Subject:k,Keywords:k,Creator:k,Producer:k,CreationDate:k,ModDate:k,Trapped:R})}}
return e.prototype={parse:function(e){this.setup(e)
var t=this.catalog.catDict.get("Version")
R(t)&&(this.pdfFormatVersion=t.name)
try{if(this.acroForm=this.catalog.catDict.get("AcroForm"),this.acroForm){this.xfa=this.acroForm.get("XFA")
var a=this.acroForm.get("Fields")
a&&b(a)&&0!==a.length||this.xfa||(this.acroForm=null)}}catch(e){if(e instanceof f)throw e
m("Something wrong with AcroForm entry"),this.acroForm=null}},get linearization(){var e=null
if(this.stream.length)try{e=F.create(this.stream)}catch(e){if(e instanceof f)throw e
m(e)}return w(this,"linearization",e)},get startXRef(){var e=this.stream,a=0
if(this.linearization)e.reset(),t(e,"endobj",1024)&&(a=e.pos+6)
else{for(var r=!1,i=e.end;!r&&i>0;)i-=1024-"startxref".length,i<0&&(i=0),e.pos=i,r=t(e,"startxref",1024,!0)
if(r){e.skip(9)
var n
do{n=e.getByte()}while(A(n))
for(var s="";n>=32&&n<=57;)s+=String.fromCharCode(n),n=e.getByte()
a=parseInt(s,10),isNaN(a)&&(a=0)}}return w(this,"startXRef",a)},get mainXRefEntriesOffset(){var e=0,t=this.linearization
return t&&(e=t.mainXRefEntriesOffset),w(this,"mainXRefEntriesOffset",e)},checkHeader:function(){var e=this.stream
if(e.reset(),t(e,"%PDF-",1024)){e.moveStart()
for(var a,r="";(a=e.getByte())>32&&!(r.length>=12);)r+=String.fromCharCode(a)
return void(this.pdfFormatVersion||(this.pdfFormatVersion=r.substring(5)))}},parseStartXRef:function(){var e=this.startXRef
this.xref.setStartXRef(e)},setup:function(e){this.xref.parse(e)
var t=this,a={createPage:function(e,a,r,i,n){return new _(t.pdfManager,t.xref,e,a,r,i,n)}}
this.catalog=new E(this.pdfManager,this.xref,a)},get numPages(){var e=this.linearization,t=e?e.numPages:this.catalog.numPages
return w(this,"numPages",t)},get documentInfo(){var e,t={PDFFormatVersion:this.pdfFormatVersion,IsAcroFormPresent:!!this.acroForm,IsXFAPresent:!!this.xfa}
try{e=this.xref.trailer.get("Info")}catch(e){if(e instanceof f)throw e
m("The document information dictionary is invalid.")}if(e){var r=a.entries
for(var i in r)if(e.has(i)){var n=e.get(i)
r[i](n)?t[i]="string"!=typeof n?n:C(n):m('Bad value in document info for "'+i+'"')}}return w(this,"documentInfo",t)},get fingerprint(){var e,t=this.xref,a="",r=t.trailer.get("ID")
r&&b(r)&&r[0]&&k(r[0])&&"\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0"!==r[0]?e=x(r[0]):(this.stream.ensureRange&&this.stream.ensureRange(0,Math.min(1024,this.stream.end)),e=q(this.stream.bytes.subarray(0,1024),0,1024))
for(var i=0,n=e.length;i<n;i++){var s=e[i].toString(16)
a+=1===s.length?"0"+s:s}return w(this,"fingerprint",a)},getPage:function(e){return this.catalog.getPage(e)},cleanup:function(){return this.catalog.cleanup()}},e}()
t.Page=_,t.PDFDocument=z},function(e,t,a){"use strict"
var r=a(0),i=a(2),n=a(7),s=a(4),o=a(11),c=r.Util,l=r.bytesToString,h=r.error,u=i.Stream,f=n.getGlyphsUnicode,d=s.StandardEncoding,g=o.CFFParser,p=function(){function e(e,t){return e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3]}function t(e,t){return e[t]<<8|e[t+1]}function a(a,r,i){var n,s,o,c=1===t(a,r+2)?e(a,r+8):e(a,r+16),l=t(a,r+c)
if(4===l){t(a,r+c+2)
var u=t(a,r+c+6)>>1
for(s=r+c+14,n=[],o=0;o<u;o++,s+=2)n[o]={end:t(a,s)}
for(s+=2,o=0;o<u;o++,s+=2)n[o].start=t(a,s)
for(o=0;o<u;o++,s+=2)n[o].idDelta=t(a,s)
for(o=0;o<u;o++,s+=2){var f=t(a,s)
if(0!==f){n[o].ids=[]
for(var d=0,g=n[o].end-n[o].start+1;d<g;d++)n[o].ids[d]=t(a,s+f),f+=2}}return n}if(12===l){e(a,r+c+4)
var p=e(a,r+c+12)
for(s=r+c+16,n=[],o=0;o<p;o++)n.push({start:e(a,s),end:e(a,s+4),idDelta:e(a,s+8)-e(a,s)}),s+=12
return n}h("not supported cmap: "+l)}function r(e,t,a,r){var i={},n=new g(new u(e,t,a-t),i,r),s=n.parse()
return{glyphs:s.charStrings.objects,subrs:s.topDict.privateDict&&s.topDict.privateDict.subrsIndex&&s.topDict.privateDict.subrsIndex.objects,gsubrs:s.globalSubrIndex&&s.globalSubrIndex.objects}}function i(e,t,a){var r,i
a?(r=4,i=function(e,t){return e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3]}):(r=2,i=function(e,t){return e[t]<<9|e[t+1]<<1})
for(var n=[],s=i(t,0),o=r;o<t.length;o+=r){var c=i(t,o)
n.push(e.subarray(s,c)),s=c}return n}function n(e,t){for(var a=t.charCodeAt(0),r=0,i=0,n=e.length-1;i<n;){var s=i+n+1>>1
a<e[s].start?n=s-1:i=s}return e[i].start<=a&&a<=e[i].end&&(r=e[i].idDelta+(e[i].ids?e[i].ids[a-e[i].start]:a)&65535),{charCode:a,glyphId:r}}function s(e,t,a){function r(e,a,r,i){t.push({cmd:"quadraticCurveTo",args:[e,a,r,i]})}var i,n=0,o=(e[n]<<24|e[n+1]<<16)>>16,c=0,l=0
if(n+=10,o<0)do{i=e[n]<<8|e[n+1]
var h=e[n+2]<<8|e[n+3]
n+=4
var u,f
1&i?(u=(e[n]<<24|e[n+1]<<16)>>16,f=(e[n+2]<<24|e[n+3]<<16)>>16,n+=4):(u=e[n++],f=e[n++]),2&i?(c=u,l=f):(c=0,l=0)
var d=1,g=1,p=0,m=0
8&i?(d=g=(e[n]<<24|e[n+1]<<16)/1073741824,n+=2):64&i?(d=(e[n]<<24|e[n+1]<<16)/1073741824,g=(e[n+2]<<24|e[n+3]<<16)/1073741824,n+=4):128&i&&(d=(e[n]<<24|e[n+1]<<16)/1073741824,p=(e[n+2]<<24|e[n+3]<<16)/1073741824,m=(e[n+4]<<24|e[n+5]<<16)/1073741824,g=(e[n+6]<<24|e[n+7]<<16)/1073741824,n+=8)
var b=a.glyphs[h]
b&&(t.push({cmd:"save"}),t.push({cmd:"transform",args:[d,p,m,g,c,l]}),s(b,t,a),t.push({cmd:"restore"}))}while(32&i)
else{var v,y,k=[]
for(v=0;v<o;v++)k.push(e[n]<<8|e[n+1]),n+=2
n+=2+(e[n]<<8|e[n+1])
for(var w=k[k.length-1]+1,x=[];x.length<w;){i=e[n++]
var C=1
for(8&i&&(C+=e[n++]);C-- >0;)x.push({flags:i})}for(v=0;v<w;v++){switch(18&x[v].flags){case 0:c+=(e[n]<<24|e[n+1]<<16)>>16,n+=2
break
case 2:c-=e[n++]
break
case 18:c+=e[n++]}x[v].x=c}for(v=0;v<w;v++){switch(36&x[v].flags){case 0:l+=(e[n]<<24|e[n+1]<<16)>>16,n+=2
break
case 4:l-=e[n++]
break
case 36:l+=e[n++]}x[v].y=l}var S=0
for(n=0;n<o;n++){var A=k[n],I=x.slice(S,A+1)
if(1&I[0].flags)I.push(I[0])
else if(1&I[I.length-1].flags)I.unshift(I[I.length-1])
else{var B={flags:1,x:(I[0].x+I[I.length-1].x)/2,y:(I[0].y+I[I.length-1].y)/2}
I.unshift(B),I.push(B)}for(function(e,a){t.push({cmd:"moveTo",args:[e,a]})}(I[0].x,I[0].y),v=1,y=I.length;v<y;v++)1&I[v].flags?function(e,a){t.push({cmd:"lineTo",args:[e,a]})}(I[v].x,I[v].y):1&I[v+1].flags?(r(I[v].x,I[v].y,I[v+1].x,I[v+1].y),v++):r(I[v].x,I[v].y,(I[v].x+I[v+1].x)/2,(I[v].y+I[v+1].y)/2)
S=A+1}}}function o(e,t,a){function r(e,a){t.push({cmd:"moveTo",args:[e,a]})}function i(e,a){t.push({cmd:"lineTo",args:[e,a]})}function s(e,a,r,i,n,s){t.push({cmd:"bezierCurveTo",args:[e,a,r,i,n,s]})}function c(e){for(var p=0;p<e.length;){var m,b,v,y,k,w,x,C,S,A=!1,I=e[p++]
switch(I){case 1:case 3:g+=l.length>>1,A=!0
break
case 4:f+=l.pop(),r(u,f),A=!0
break
case 5:for(;l.length>0;)u+=l.shift(),f+=l.shift(),i(u,f)
break
case 6:for(;l.length>0&&(u+=l.shift(),i(u,f),0!==l.length);)f+=l.shift(),i(u,f)
break
case 7:for(;l.length>0&&(f+=l.shift(),i(u,f),0!==l.length);)u+=l.shift(),i(u,f)
break
case 8:for(;l.length>0;)m=u+l.shift(),v=f+l.shift(),b=m+l.shift(),y=v+l.shift(),u=b+l.shift(),f=y+l.shift(),s(m,v,b,y,u,f)
break
case 10:C=l.pop()+a.subrsBias,S=a.subrs[C],S&&c(S)
break
case 11:return
case 12:switch(I=e[p++]){case 34:m=u+l.shift(),b=m+l.shift(),k=f+l.shift(),u=b+l.shift(),s(m,f,b,k,u,k),m=u+l.shift(),b=m+l.shift(),u=b+l.shift(),s(m,k,b,f,u,f)
break
case 35:m=u+l.shift(),v=f+l.shift(),b=m+l.shift(),y=v+l.shift(),u=b+l.shift(),f=y+l.shift(),s(m,v,b,y,u,f),m=u+l.shift(),v=f+l.shift(),b=m+l.shift(),y=v+l.shift(),u=b+l.shift(),f=y+l.shift(),s(m,v,b,y,u,f),l.pop()
break
case 36:m=u+l.shift(),k=f+l.shift(),b=m+l.shift(),w=k+l.shift(),u=b+l.shift(),s(m,k,b,w,u,w),m=u+l.shift(),b=m+l.shift(),x=w+l.shift(),u=b+l.shift(),s(m,w,b,x,u,f)
break
case 37:var B=u,R=f
m=u+l.shift(),v=f+l.shift(),b=m+l.shift(),y=v+l.shift(),u=b+l.shift(),f=y+l.shift(),s(m,v,b,y,u,f),m=u+l.shift(),v=f+l.shift(),b=m+l.shift(),y=v+l.shift(),u=b,f=y,Math.abs(u-B)>Math.abs(f-R)?u+=l.shift():f+=l.shift(),s(m,v,b,y,u,f)
break
default:h("unknown operator: 12 "+I)}break
case 14:if(l.length>=4){var T=l.pop(),O=l.pop()
f=l.pop(),u=l.pop(),t.push({cmd:"save"}),t.push({cmd:"translate",args:[u,f]})
var P=n(a.cmap,String.fromCharCode(a.glyphNameMap[d[T]]))
o(a.glyphs[P.glyphId],t,a),t.push({cmd:"restore"}),P=n(a.cmap,String.fromCharCode(a.glyphNameMap[d[O]])),o(a.glyphs[P.glyphId],t,a)}return
case 18:g+=l.length>>1,A=!0
break
case 19:case 20:g+=l.length>>1,p+=g+7>>3,A=!0
break
case 21:f+=l.pop(),u+=l.pop(),r(u,f),A=!0
break
case 22:u+=l.pop(),r(u,f),A=!0
break
case 23:g+=l.length>>1,A=!0
break
case 24:for(;l.length>2;)m=u+l.shift(),v=f+l.shift(),b=m+l.shift(),y=v+l.shift(),u=b+l.shift(),f=y+l.shift(),s(m,v,b,y,u,f)
u+=l.shift(),f+=l.shift(),i(u,f)
break
case 25:for(;l.length>6;)u+=l.shift(),f+=l.shift(),i(u,f)
m=u+l.shift(),v=f+l.shift(),b=m+l.shift(),y=v+l.shift(),u=b+l.shift(),f=y+l.shift(),s(m,v,b,y,u,f)
break
case 26:for(l.length%2&&(u+=l.shift());l.length>0;)m=u,v=f+l.shift(),b=m+l.shift(),y=v+l.shift(),u=b,f=y+l.shift(),s(m,v,b,y,u,f)
break
case 27:for(l.length%2&&(f+=l.shift());l.length>0;)m=u+l.shift(),v=f,b=m+l.shift(),y=v+l.shift(),u=b+l.shift(),f=y,s(m,v,b,y,u,f)
break
case 28:l.push((e[p]<<24|e[p+1]<<16)>>16),p+=2
break
case 29:C=l.pop()+a.gsubrsBias,S=a.gsubrs[C],S&&c(S)
break
case 30:for(;l.length>0&&(m=u,v=f+l.shift(),b=m+l.shift(),y=v+l.shift(),u=b+l.shift(),f=y+(1===l.length?l.shift():0),s(m,v,b,y,u,f),0!==l.length);)m=u+l.shift(),v=f,b=m+l.shift(),y=v+l.shift(),f=y+l.shift(),u=b+(1===l.length?l.shift():0),s(m,v,b,y,u,f)
break
case 31:for(;l.length>0&&(m=u+l.shift(),v=f,b=m+l.shift(),y=v+l.shift(),f=y+l.shift(),u=b+(1===l.length?l.shift():0),s(m,v,b,y,u,f),0!==l.length);)m=u,v=f+l.shift(),b=m+l.shift(),y=v+l.shift(),u=b+l.shift(),f=y+(1===l.length?l.shift():0),s(m,v,b,y,u,f)
break
default:I<32&&h("unknown operator: "+I),I<247?l.push(I-139):I<251?l.push(256*(I-247)+e[p++]+108):I<255?l.push(256*-(I-251)-e[p++]-108):(l.push((e[p]<<24|e[p+1]<<16|e[p+2]<<8|e[p+3])/65536),p+=4)}A&&(l.length=0)}}var l=[],u=0,f=0,g=0
c(e)}function p(e){this.compiledGlyphs=Object.create(null),this.compiledCharCodeToGlyphId=Object.create(null),this.fontMatrix=e}function m(e,t,a){a=a||[488e-6,0,0,488e-6,0,0],p.call(this,a),this.glyphs=e,this.cmap=t}function b(e,t,a,r){a=a||[.001,0,0,.001,0,0],p.call(this,a),this.glyphs=e.glyphs,this.gsubrs=e.gsubrs||[],this.subrs=e.subrs||[],this.cmap=t,this.glyphNameMap=r||f(),this.gsubrsBias=this.gsubrs.length<1240?107:this.gsubrs.length<33900?1131:32768,this.subrsBias=this.subrs.length<1240?107:this.subrs.length<33900?1131:32768}return p.prototype={getPathJs:function(e){var t=n(this.cmap,e),a=this.compiledGlyphs[t.glyphId]
return a||(a=this.compileGlyph(this.glyphs[t.glyphId]),this.compiledGlyphs[t.glyphId]=a),void 0===this.compiledCharCodeToGlyphId[t.charCode]&&(this.compiledCharCodeToGlyphId[t.charCode]=t.glyphId),a},compileGlyph:function(e){if(!e||0===e.length||14===e[0])return""
var t=[]
return t.push({cmd:"save"}),t.push({cmd:"transform",args:this.fontMatrix.slice()}),t.push({cmd:"scale",args:["size","-size"]}),this.compileGlyphImpl(e,t),t.push({cmd:"restore"}),t},compileGlyphImpl:function(){h("Children classes should implement this.")},hasBuiltPath:function(e){var t=n(this.cmap,e)
return void 0!==this.compiledGlyphs[t.glyphId]&&void 0!==this.compiledCharCodeToGlyphId[t.charCode]}},c.inherit(m,p,{compileGlyphImpl:function(e,t){s(e,t,this)}}),c.inherit(b,p,{compileGlyphImpl:function(e,t){o(e,t,this)}}),{create:function(n,s){for(var o,c,h,u,f,d,g=new Uint8Array(n.data),p=t(g,4),v=0,y=12;v<p;v++,y+=16){var k=l(g.subarray(y,y+4)),w=e(g,y+8),x=e(g,y+12)
switch(k){case"cmap":o=a(g,w,w+x)
break
case"glyf":c=g.subarray(w,w+x)
break
case"loca":h=g.subarray(w,w+x)
break
case"head":d=t(g,w+18),f=t(g,w+50)
break
case"CFF ":u=r(g,w,w+x,s)}}if(c){var C=d?[1/d,0,0,1/d,0,0]:n.fontMatrix
return new m(i(c,h,f),o,C)}return new b(u,o,n.fontMatrix,n.glyphNameMap)}}}()
t.FontRendererFactory=p},function(e,t,a){"use strict"
function r(e){if(e.fontMatrix&&e.fontMatrix[0]!==b[0]){var t=.001/e.fontMatrix[0],a=e.widths
for(var r in a)a[r]*=t
e.defaultWidth*=t}}function i(e,t){if(!e.hasIncludedToUnicodeMap&&!(e.hasEncoding||t===e.defaultEncoding||e.toUnicode instanceof ge)){var a=[],r=E()
for(var i in t){var n=t[i],s=W(n,r)
s!==-1&&(a[i]=String.fromCharCode(s))}e.toUnicode.amend(a)}}function n(e,t){switch(e){case"Type1":return"Type1C"===t?v.TYPE1C:v.TYPE1
case"CIDFontType0":return"CIDFontType0C"===t?v.CIDFONTTYPE0C:v.CIDFONTTYPE0
case"OpenType":return v.OPENTYPE
case"TrueType":return v.TRUETYPE
case"CIDFontType2":return v.CIDFONTTYPE2
case"MMType1":return v.MMTYPE1
case"Type0":return v.TYPE0
default:return v.UNKNOWN}}function s(e,t){if(void 0!==t[e])return e
var a=W(e,t)
if(a!==-1)for(var r in t)if(t[r]===a)return r
return x("Unable to recover a standard glyph name for: "+e),e}function o(e,t,a){var r,i,n,o=Object.create(null),c=!!(e.flags&he.Symbolic)
if(e.baseEncodingName)for(n=j(e.baseEncodingName),i=0;i<n.length;i++)r=a.indexOf(n[i]),o[i]=r>=0?r:0
else if(c)for(i in t)o[i]=t[i]
else for(n=F,i=0;i<n.length;i++)r=a.indexOf(n[i]),o[i]=r>=0?r:0
var l,h=e.differences
if(h)for(i in h){var u=h[i]
if((r=a.indexOf(u))===-1){l||(l=E())
var f=s(u,l)
f!==u&&(r=a.indexOf(f))}o[i]=r>=0?r:0}return o}var c=a(0),l=(a(1),a(2)),h=a(7),u=a(25),f=a(4),d=a(17),g=a(18),p=a(35),m=a(11),b=c.FONT_IDENTITY_MATRIX,v=c.FontType,y=c.assert,k=c.bytesToString,w=c.error,x=c.info,C=c.isArray,S=c.isInt,A=c.isNum,I=c.readUint32,B=c.shadow,R=c.string32,T=c.warn,O=c.MissingDataException,P=c.isSpace,M=l.Stream,E=h.getGlyphsUnicode,L=h.getDingbatsGlyphsUnicode,D=u.FontRendererFactory,F=f.StandardEncoding,q=f.MacRomanEncoding,U=f.SymbolSetEncoding,N=f.ZapfDingbatsEncoding,j=f.getEncoding,_=d.getStdFontMap,z=d.getNonStdFontMap,H=d.getGlyphMapForStandardFonts,G=d.getSupplementalGlyphMapForArialBlack,X=g.getUnicodeRangeFor,V=g.mapSpecialUnicodeValues,W=g.getUnicodeForGlyph,K=p.Type1Parser,Y=m.CFFStandardStrings,J=m.CFFParser,Z=m.CFFCompiler,Q=m.CFF,$=m.CFFHeader,ee=m.CFFTopDict,te=m.CFFPrivateDict,ae=m.CFFStrings,re=m.CFFIndex,ie=m.CFFCharset,ne=57344,se=63743,oe=!1,ce=1e3,le=!1,he={FixedPitch:1,Serif:2,Symbolic:4,Script:8,Nonsymbolic:32,Italic:64,AllCap:65536,SmallCap:131072,ForceBold:262144},ue=[".notdef",".null","nonmarkingreturn","space","exclam","quotedbl","numbersign","dollar","percent","ampersand","quotesingle","parenleft","parenright","asterisk","plus","comma","hyphen","period","slash","zero","one","two","three","four","five","six","seven","eight","nine","colon","semicolon","less","equal","greater","question","at","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","bracketleft","backslash","bracketright","asciicircum","underscore","grave","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","braceleft","bar","braceright","asciitilde","Adieresis","Aring","Ccedilla","Eacute","Ntilde","Odieresis","Udieresis","aacute","agrave","acircumflex","adieresis","atilde","aring","ccedilla","eacute","egrave","ecircumflex","edieresis","iacute","igrave","icircumflex","idieresis","ntilde","oacute","ograve","ocircumflex","odieresis","otilde","uacute","ugrave","ucircumflex","udieresis","dagger","degree","cent","sterling","section","bullet","paragraph","germandbls","registered","copyright","trademark","acute","dieresis","notequal","AE","Oslash","infinity","plusminus","lessequal","greaterequal","yen","mu","partialdiff","summation","product","pi","integral","ordfeminine","ordmasculine","Omega","ae","oslash","questiondown","exclamdown","logicalnot","radical","florin","approxequal","Delta","guillemotleft","guillemotright","ellipsis","nonbreakingspace","Agrave","Atilde","Otilde","OE","oe","endash","emdash","quotedblleft","quotedblright","quoteleft","quoteright","divide","lozenge","ydieresis","Ydieresis","fraction","currency","guilsinglleft","guilsinglright","fi","fl","daggerdbl","periodcentered","quotesinglbase","quotedblbase","perthousand","Acircumflex","Ecircumflex","Aacute","Edieresis","Egrave","Iacute","Icircumflex","Idieresis","Igrave","Oacute","Ocircumflex","apple","Ograve","Uacute","Ucircumflex","Ugrave","dotlessi","circumflex","tilde","macron","breve","dotaccent","ring","cedilla","hungarumlaut","ogonek","caron","Lslash","lslash","Scaron","scaron","Zcaron","zcaron","brokenbar","Eth","eth","Yacute","yacute","Thorn","thorn","minus","multiply","onesuperior","twosuperior","threesuperior","onehalf","onequarter","threequarters","franc","Gbreve","gbreve","Idotaccent","Scedilla","scedilla","Cacute","cacute","Ccaron","ccaron","dcroat"],fe=function(){function e(e,t,a,r,i,n,s,o){this.fontChar=e,this.unicode=t,this.accent=a,this.width=r,this.vmetric=i,this.operatorListId=n,this.isSpace=s,this.isInFont=o}return e.prototype.matchesForCache=function(e,t,a,r,i,n,s,o){return this.fontChar===e&&this.unicode===t&&this.accent===a&&this.width===r&&this.vmetric===i&&this.operatorListId===n&&this.isSpace===s&&this.isInFont===o},e}(),de=function(){function e(e){this._map=e}return e.prototype={get length(){return this._map.length},forEach:function(e){for(var t in this._map)e(t,this._map[t].charCodeAt(0))},has:function(e){return void 0!==this._map[e]},get:function(e){return this._map[e]},charCodeOf:function(e){return this._map.indexOf(e)},amend:function(e){for(var t in e)this._map[t]=e[t]}},e}(),ge=function(){function e(e,t){this.firstChar=e,this.lastChar=t}return e.prototype={get length(){return this.lastChar+1-this.firstChar},forEach:function(e){for(var t=this.firstChar,a=this.lastChar;t<=a;t++)e(t,t)},has:function(e){return this.firstChar<=e&&e<=this.lastChar},get:function(e){if(this.firstChar<=e&&e<=this.lastChar)return String.fromCharCode(e)},charCodeOf:function(e){return S(e)&&e>=this.firstChar&&e<=this.lastChar?e:-1},amend:function(e){w("Should not call amend()")}},e}(),pe=function(){function e(e,t,a){e[t]=a>>8&255,e[t+1]=255&a}function t(e,t,a){e[t]=a>>24&255,e[t+1]=a>>16&255,e[t+2]=a>>8&255,e[t+3]=255&a}function a(e,t,a){var r,i
if(a instanceof Uint8Array)e.set(a,t)
else if("string"==typeof a)for(r=0,i=a.length;r<i;r++)e[t++]=255&a.charCodeAt(r)
else for(r=0,i=a.length;r<i;r++)e[t++]=255&a[r]}function r(e){this.sfnt=e,this.tables=Object.create(null)}r.getSearchParams=function(e,t){for(var a=1,r=0;(a^e)>a;)a<<=1,r++
var i=a*t
return{range:i,entry:r,rangeShift:t*e-i}}
return r.prototype={toArray:function(){var i=this.sfnt,n=this.tables,s=Object.keys(n)
s.sort()
var o,c,l,h,u,f=s.length,d=12+16*f,g=[d]
for(o=0;o<f;o++){h=n[s[o]]
d+=(h.length+3&-4)>>>0,g.push(d)}var p=new Uint8Array(d)
for(o=0;o<f;o++)h=n[s[o]],a(p,g[o],h)
"true"===i&&(i=R(65536)),p[0]=255&i.charCodeAt(0),p[1]=255&i.charCodeAt(1),p[2]=255&i.charCodeAt(2),p[3]=255&i.charCodeAt(3),e(p,4,f)
var m=r.getSearchParams(f,16)
for(e(p,6,m.range),e(p,8,m.entry),e(p,10,m.rangeShift),d=12,o=0;o<f;o++){u=s[o],p[d]=255&u.charCodeAt(0),p[d+1]=255&u.charCodeAt(1),p[d+2]=255&u.charCodeAt(2),p[d+3]=255&u.charCodeAt(3)
var b=0
for(c=g[o],l=g[o+1];c<l;c+=4){b=b+I(p,c)>>>0}t(p,d+4,b),t(p,d+8,g[o]),t(p,d+12,n[u].length),d+=16}return p},addTable:function(e,t){if(e in this.tables)throw new Error("Table "+e+" already exists")
this.tables[e]=t}},r}(),me=new Int32Array([0,32,127,161,173,174,1536,1920,2208,4256,6016,6144,7168,7248,8192,8208,8209,8210,8232,8240,8287,8304,9676,9677,12288,12289,43616,43648,65520,65536]),be=function(){function e(e,t,a){var i,s,o
this.name=e,this.loadedName=a.loadedName,this.isType3Font=a.isType3Font,this.sizes=[],this.missingFile=!1,this.glyphCache=Object.create(null),this.isSerifFont=!!(a.flags&he.Serif),this.isSymbolicFont=!!(a.flags&he.Symbolic),this.isMonospace=!!(a.flags&he.FixedPitch)
var c=a.type,l=a.subtype
if(this.type=c,this.fallbackName=this.isMonospace?"monospace":this.isSerifFont?"serif":"sans-serif",this.differences=a.differences,this.widths=a.widths,this.defaultWidth=a.defaultWidth,this.composite=a.composite,this.wideChars=a.wideChars,this.cMap=a.cMap,this.ascent=a.ascent/ce,this.descent=a.descent/ce,this.fontMatrix=a.fontMatrix,this.bbox=a.bbox,this.toUnicode=a.toUnicode,this.toFontChar=[],"Type3"===a.type){for(i=0;i<256;i++)this.toFontChar[i]=this.differences[i]||a.defaultEncoding[i]
return void(this.fontType=v.TYPE3)}this.cidEncoding=a.cidEncoding,this.vertical=a.vertical,this.vertical&&(this.vmetrics=a.vmetrics,this.defaultVMetrics=a.defaultVMetrics)
var g
if(!t||t.isEmpty){t&&T('Font file is empty in "'+e+'" ('+this.loadedName+")"),this.missingFile=!0
var p=e.replace(/[,_]/g,"-"),m=_(),b=z(),y=!!m[p]||!(!b[p]||!m[b[p]])
if(p=m[p]||b[p]||p,this.bold=p.search(/bold/gi)!==-1,this.italic=p.search(/oblique/gi)!==-1||p.search(/italic/gi)!==-1,this.black=e.search(/Black/g)!==-1,this.remeasure=Object.keys(this.widths).length>0,y&&"CIDFontType2"===c&&0===a.cidEncoding.indexOf("Identity-")){var k=H(),C=[]
for(i in k)C[+i]=k[i]
if(/Arial-?Black/i.test(e)){var S=G()
for(i in S)C[+i]=S[i]}this.toUnicode instanceof ge||this.toUnicode.forEach(function(e,t){C[+e]=t}),this.toFontChar=C,this.toUnicode=new de(C)}else/Symbol/i.test(p)?this.toFontChar=d(U,E(),a.differences):/Dingbats/i.test(p)?(/Wingdings/i.test(e)&&T("Non-embedded Wingdings font, falling back to ZapfDingbats."),this.toFontChar=d(N,L(),a.differences)):y?this.toFontChar=d(a.defaultEncoding,E(),a.differences):(g=E(),this.toUnicode.forEach(function(e,t){this.composite||(s=a.differences[e]||a.defaultEncoding[e],(o=W(s,g))!==-1&&(t=o)),this.toFontChar[e]=t}.bind(this)))
return this.loadedName=p.split("-")[0],this.loading=!1,void(this.fontType=n(c,l))}"Type1C"===l&&("Type1"!==c&&"MMType1"!==c?h(t)?l="TrueType":c="Type1":u(t)&&(c=l="OpenType")),"CIDFontType0C"===l&&"CIDFontType0"!==c&&(c="CIDFontType0"),"OpenType"===l&&(c="OpenType"),"CIDFontType0"===c&&(f(t)?l="CIDFontType0":u(t)?c=l="OpenType":l="CIDFontType0C")
var A
switch(c){case"MMType1":x("MMType1 font ("+e+"), falling back to Type1.")
case"Type1":case"CIDFontType0":this.mimetype="font/opentype"
var I="Type1C"===l||"CIDFontType0C"===l?new ke(t,a):new ye(e,t,a)
r(a),A=this.convert(e,I,a)
break
case"OpenType":case"TrueType":case"CIDFontType2":this.mimetype="font/opentype",A=this.checkAndRepair(e,t,a),this.isOpenType&&(r(a),c="OpenType")
break
default:w("Font "+c+" is not supported")}this.data=A,this.fontType=n(c,l),this.fontMatrix=a.fontMatrix,this.widths=a.widths,this.defaultWidth=a.defaultWidth,this.toUnicode=a.toUnicode,this.encoding=a.baseEncoding,this.seacMap=a.seacMap,this.loading=!0}function t(e,t){return(e<<8)+t}function a(e,t){var a=(e<<8)+t
return 32768&a?a-65536:a}function o(e,t,a,r){return(e<<24)+(t<<16)+(a<<8)+r}function c(e){return String.fromCharCode(e>>8&255,255&e)}function l(e){return e=e>32767?32767:e<-32768?-32768:e,String.fromCharCode(e>>8&255,255&e)}function h(e){var t=e.peekBytes(4)
return 65536===I(t,0)}function u(e){var t=e.peekBytes(4)
return"OTTO"===k(t)}function f(e){var t=e.peekBytes(2)
return 37===t[0]&&33===t[1]||128===t[0]&&1===t[1]}function d(e,t,a){for(var r,i=[],n=0,s=e.length;n<s;n++)(r=W(e[n],t))!==-1&&(i[n]=r)
for(var o in a)(r=W(a[o],t))!==-1&&(i[+o]=r)
return i}function g(e){for(var t=0,a=me.length-1;t<a;){var r=t+a+1>>1
e<me[r]?a=r-1:t=r}return!(1&t)}function p(e,t){var a=t.toUnicode,r=!!(t.flags&he.Symbolic),i=t.toUnicode instanceof ge,n=Object.create(null),s=[],o=[],c=ne
for(var l in e){l|=0
var h=e[l],u=l,f=!1
if(!i&&a.has(l)){f=!0
var d=a.get(u)
1===d.length&&(u=d.charCodeAt(0))}if((void 0!==o[u]||g(u)||r&&!f)&&c<=se)do{u=c++,oe&&61440===u&&(u=61472,c=u+1)}while(void 0!==o[u]&&c<=se)
n[u]=h,s[l]=u,o[u]=!0}return{toFontChar:s,charCodeToGlyphId:n,nextAvailableFontCharCode:c}}function m(e,t){var a=[]
for(var r in e)e[r]>=t||a.push({fontCharCode:0|r,glyphId:e[r]})
a.sort(function(e,t){return e.fontCharCode-t.fontCharCode})
for(var i=[],n=a.length,s=0;s<n;){var o=a[s].fontCharCode,c=[a[s].glyphId];++s
for(var l=o;s<n&&l+1===a[s].fontCharCode&&(c.push(a[s].glyphId),++l,++s,65535!==l););i.push([o,l,c])}return i}function C(e,t){var a,r,i,n,s=m(e,t),o=s[s.length-1][1]>65535?2:1,l="\0\0"+c(o)+"\0\0"+R(4+8*o)
for(a=s.length-1;a>=0&&!(s[a][0]<=65535);--a);var h=a+1
s[a][0]<65535&&65535===s[a][1]&&(s[a][1]=65534)
var u,f,d,g,p=s[a][1]<65535?1:0,b=h+p,v=pe.getSearchParams(b,2),y="",k="",w="",x="",C="",S=0
for(a=0,r=h;a<r;a++){u=s[a],f=u[0],d=u[1],y+=c(f),k+=c(d),g=u[2]
var A=!0
for(i=1,n=g.length;i<n;++i)if(g[i]!==g[i-1]+1){A=!1
break}if(A){w+=c(g[0]-f&65535),x+=c(0)}else{var I=2*(b-a)+2*S
for(S+=d-f+1,w+=c(0),x+=c(I),i=0,n=g.length;i<n;++i)C+=c(g[i])}}p>0&&(k+="ÿÿ",y+="ÿÿ",w+="\0",x+="\0\0")
var B="\0\0"+c(2*b)+c(v.range)+c(v.entry)+c(v.rangeShift)+k+"\0\0"+y+w+x+C,T="",O=""
if(o>1){for(l+="\0\0\n"+R(4+8*o+4+B.length),T="",a=0,r=s.length;a<r;a++){u=s[a],f=u[0],g=u[2]
var P=g[0]
for(i=1,n=g.length;i<n;++i)g[i]!==g[i-1]+1&&(d=u[0]+i-1,T+=R(f)+R(d)+R(P),f=d+1,P=g[i])
T+=R(f)+R(u[1])+R(P)}O="\0\f\0\0"+R(T.length+16)+"\0\0\0\0"+R(T.length/12)}return l+"\0"+c(B.length+4)+B+O+T}function S(e){var t=new M(e.data),a=t.getUint16()
t.getBytes(60)
var r=t.getUint16()
return!(a<4&&768&r)&&(!(t.getUint16()>t.getUint16())&&(t.getBytes(6),0!==t.getUint16()&&(e.data[8]=e.data[9]=0,!0)))}function O(e,t,a){a=a||{unitsPerEm:0,yMax:0,yMin:0,ascent:0,descent:0}
var r=0,i=0,n=0,s=0,o=null,l=0
if(t)for(var h in t){h|=0,(o>h||!o)&&(o=h),l<h&&(l=h)
var u=X(h)
u<32?r|=1<<u:u<64?i|=1<<u-32:u<96?n|=1<<u-64:u<123?s|=1<<u-96:w("Unicode ranges Bits > 123 are reserved for internal usage")}else o=0,l=255
var f=e.bbox||[0,0,0,0],d=a.unitsPerEm||1/(e.fontMatrix||b)[0],g=e.ascentScaled?1:d/ce,p=a.ascent||Math.round(g*(e.ascent||f[3])),m=a.descent||Math.round(g*(e.descent||f[1]))
m>0&&e.descent>0&&f[1]<0&&(m=-m)
var v=a.yMax||p,y=-a.yMin||-m
return"\0$ô\0\0\0»\0\0\0»\0\0ß\x001\0\0\0\0"+String.fromCharCode(e.fixedPitch?9:0)+"\0\0\0\0\0\0"+R(r)+R(i)+R(n)+R(s)+"*21*"+c(e.italicAngle?1:0)+c(o||e.firstChar)+c(l||e.lastChar)+c(p)+c(m)+"\0d"+c(v)+c(y)+"\0\0\0\0\0\0\0\0"+c(e.xHeight)+c(e.capHeight)+c(0)+c(o||e.firstChar)+"\0"}function P(e){var t=Math.floor(e.italicAngle*Math.pow(2,16))
return"\0\0\0"+R(t)+"\0\0\0\0"+R(e.fixedPitch)+"\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0"}function K(e,t){t||(t=[[],[]])
var a,r,i,n,s,o=[t[0][0]||"Original licence",t[0][1]||e,t[0][2]||"Unknown",t[0][3]||"uniqueID",t[0][4]||e,t[0][5]||"Version 0.11",t[0][6]||"",t[0][7]||"Unknown",t[0][8]||"Unknown",t[0][9]||"Unknown"],l=[]
for(a=0,r=o.length;a<r;a++){s=t[1][a]||o[a]
var h=[]
for(i=0,n=s.length;i<n;i++)h.push(c(s.charCodeAt(i)))
l.push(h.join(""))}var u=[o,l],f=["\0","\0"],d=["\0\0","\0"],g=["\0\0","\t"],p=o.length*f.length,m="\0\0"+c(p)+c(12*p+6),b=0
for(a=0,r=f.length;a<r;a++){var v=u[a]
for(i=0,n=v.length;i<n;i++){s=v[i]
m+=f[a]+d[a]+g[a]+c(i)+c(s.length)+c(b),b+=s.length}}return m+=o.join("")+l.join("")}return e.getFontID=function(){var e=1
return function(){return String(e++)}}(),e.prototype={name:null,font:null,mimetype:null,encoding:null,get renderer(){var e=D.create(this,le)
return B(this,"renderer",e)},exportData:function(){var e={}
for(var t in this)this.hasOwnProperty(t)&&(e[t]=this[t])
return e},checkAndRepair:function(e,i,n){function c(e,t,a,r,i,n){if(a-t<=12)return 0
var s=e.subarray(t,a),o=s[0]<<8|s[1]
if(32768&o)return r.set(s,i),s.length
var c,l=10,h=0
for(c=0;c<o;c++){h=(s[l]<<8|s[l+1])+1,l+=2}var u=l,f=s[l]<<8|s[l+1]
l+=2+f
var d=l,g=0
for(c=0;c<h;c++){var p=s[l++]
192&p&&(s[l-1]=63&p)
var m=(2&p?1:16&p?0:2)+(4&p?1:32&p?0:2)
if(g+=m,8&p){var b=s[l++]
c+=b,g+=b*m}}if(0===g)return 0
var v=l+g
return v>s.length?0:!n&&f>0?(r.set(s.subarray(0,u),i),r.set([0,0],i+u),r.set(s.subarray(d,v),i+u+2),v-=f,s.length-v>3&&(v=v+3&-4),v):s.length-v>3?(v=v+3&-4,r.set(s.subarray(0,v),i),v):(r.set(s,i),s.length)}function l(e,t){for(var a,r,i,n,s,o=e.data,c=0,l=0,h=0,f=[],g=[],p=[],m=t.tooComplexToFollowFunctions,b=!1,v=0,y=0,k=o.length;c<k;){var w=o[c++]
if(64===w)if(r=o[c++],b||y)c+=r
else for(a=0;a<r;a++)f.push(o[c++])
else if(65===w)if(r=o[c++],b||y)c+=2*r
else for(a=0;a<r;a++)i=o[c++],f.push(i<<8|o[c++])
else if(176==(248&w))if(r=w-176+1,b||y)c+=r
else for(a=0;a<r;a++)f.push(o[c++])
else if(184==(248&w))if(r=w-184+1,b||y)c+=2*r
else for(a=0;a<r;a++)i=o[c++],f.push(i<<8|o[c++])
else if(43!==w||m)if(44!==w||m){if(45===w)if(b)b=!1,l=c
else{if(!(s=g.pop()))return T("TT: ENDF bad stack"),void(t.hintsValid=!1)
n=p.pop(),o=s.data,c=s.i,t.functionsStackDeltas[n]=f.length-s.stackTop}else if(137===w)(b||y)&&(T("TT: nested IDEFs not allowed"),m=!0),b=!0,h=c
else if(88===w)++v
else if(27===w)y=v
else if(89===w)y===v&&(y=0),--v
else if(28===w&&!b&&!y){var x=f[f.length-1]
x>0&&(c+=x-1)}}else(b||y)&&(T("TT: nested FDEFs not allowed"),m=!0),b=!0,h=c,n=f.pop(),t.functionsDefined[n]={data:o,i:c}
else if(!b&&!y)if(n=f[f.length-1],t.functionsUsed[n]=!0,n in t.functionsStackDeltas)f.length+=t.functionsStackDeltas[n]
else if(n in t.functionsDefined&&p.indexOf(n)<0){if(g.push({data:o,i:c,stackTop:f.length-1}),p.push(n),!(s=t.functionsDefined[n]))return T("TT: CALL non-existent function"),void(t.hintsValid=!1)
o=s.data,c=s.i}if(!b&&!y){var C=w<=142?d[w]:w>=192&&w<=223?-1:w>=224?-2:0
for(w>=113&&w<=117&&(r=f.pop(),isNaN(r)||(C=2*-r));C<0&&f.length>0;)f.pop(),C++
for(;C>0;)f.push(0/0),C--}}t.tooComplexToFollowFunctions=m
var S=[o]
c>o.length&&S.push(new Uint8Array(c-o.length)),h>l&&(T("TT: complementing a missing function tail"),S.push(new Uint8Array([34,45]))),u(e,S)}function h(e,t){if(!e.tooComplexToFollowFunctions){if(e.functionsDefined.length>t)return T("TT: more functions defined than expected"),void(e.hintsValid=!1)
for(var a=0,r=e.functionsUsed.length;a<r;a++){if(a>t)return T("TT: invalid function id: "+a),void(e.hintsValid=!1)
if(e.functionsUsed[a]&&!e.functionsDefined[a])return T("TT: undefined function: "+a),void(e.hintsValid=!1)}}}function u(e,t){if(t.length>1){var a,r,i=0
for(a=0,r=t.length;a<r;a++)i+=t[a].length
i=i+3&-4
var n=new Uint8Array(i),s=0
for(a=0,r=t.length;a<r;a++)n.set(t[a],s),s+=t[a].length
e.data=n,e.length=i}}function f(e,t,a){return!G[e]||(!!(!ee&&t>=0&&Q.has(t))||!!($&&a>=0&&A($[a])))}var d=[0,0,0,0,0,0,0,0,-2,-2,-2,-2,0,0,-2,-5,-1,-1,-1,-1,-1,-1,-1,-1,0,0,-1,0,-1,-1,-1,-1,1,-1,-999,0,1,0,-1,-2,0,-1,-2,-1,-1,0,-1,-1,0,0,-999,-999,-1,-1,-1,-1,-2,-999,-2,-2,-999,0,-2,-2,0,0,-2,0,-2,0,0,0,-2,-1,-1,1,1,0,0,-1,-1,-1,-1,-1,-1,-1,0,0,-1,0,-1,-1,0,-999,-1,-1,-1,-1,-1,-1,0,0,0,0,0,0,0,0,0,0,0,0,-2,-999,-999,-999,-999,-999,-1,-1,-2,-2,0,0,0,0,-1,-1,-999,-2,-2,0,0,-1,-2,-2,0,0,0,-1,-1,-1,-2]
i=new M(new Uint8Array(i.getBytes()))
var g,m,b=["OS/2","cmap","head","hhea","hmtx","maxp","name","post","loca","glyf","fpgm","prep","cvt ","CFF "],v=function(e){return{version:k(e.getBytes(4)),numTables:e.getUint16(),searchRange:e.getUint16(),entrySelector:e.getUint16(),rangeShift:e.getUint16()}}(i),I=v.numTables,B=Object.create(null)
B["OS/2"]=null,B.cmap=null,B.head=null,B.hhea=null,B.hmtx=null,B.maxp=null,B.name=null,B.post=null
for(var R,L=0;L<I;L++)R=function(e){var t=k(e.getBytes(4)),a=e.getInt32()>>>0,r=e.getInt32()>>>0,i=e.getInt32()>>>0,n=e.pos
e.pos=e.start?e.start:0,e.skip(r)
var s=e.getBytes(i)
return e.pos=n,"head"===t&&(s[8]=s[9]=s[10]=s[11]=0,s[17]|=32),{tag:t,checksum:a,length:i,offset:r,data:s}}(i),b.indexOf(R.tag)<0||0!==R.length&&(B[R.tag]=R)
var D=!B["CFF "]
if(D)B.loca||w('Required "loca" table is not found'),B.glyf||(T('Required "glyf" table is not found -- trying to recover.'),B.glyf={tag:"glyf",data:new Uint8Array(0)}),this.isOpenType=!1
else{if("OTTO"===v.version&&!n.composite||!B.head||!B.hhea||!B.maxp||!B.post)return m=new M(B["CFF "].data),g=new ke(m,n),r(n),this.convert(e,g,n)
delete B.glyf,delete B.loca,delete B.fpgm,delete B.prep,delete B["cvt "],this.isOpenType=!0}B.maxp||w('Required "maxp" table is not found'),i.pos=(i.start||0)+B.maxp.offset
var U=i.getInt32(),N=i.getUint16(),_=0
if(U>=65536&&B.maxp.length>=22){i.pos+=8
i.getUint16()>2&&(B.maxp.data[14]=0,B.maxp.data[15]=2),i.pos+=4,_=i.getUint16()}var z=!1
"CIDFontType2"===n.type&&n.toUnicode&&n.toUnicode.get(0)>"\0"&&(z=!0,N++,B.maxp.data[4]=N>>8,B.maxp.data[5]=255&N)
var H=function(e,t,a,r){var i={functionsDefined:[],functionsUsed:[],functionsStackDeltas:[],tooComplexToFollowFunctions:!1,hintsValid:!0}
if(e&&l(e,i),t&&l(t,i),e&&h(i,r),a&&1&a.length){var n=new Uint8Array(a.length+1)
n.set(a.data),a.data=n}return i.hintsValid}(B.fpgm,B.prep,B["cvt "],_)
H||(delete B.fpgm,delete B.prep,delete B["cvt "]),function(e,t,a,r){if(!t)return void(a&&(a.data=null))
e.pos=(e.start?e.start:0)+t.offset,e.pos+=t.length-2
var i=e.getUint16()
i>r&&(x("The numOfMetrics ("+i+") should not be greater than the numGlyphs ("+r+")"),i=r,t.data[34]=(65280&i)>>8,t.data[35]=255&i)
var n=r-i,s=n-(a.length-4*i>>1)
if(s>0){var o=new Uint8Array(a.length+2*s)
o.set(a.data),a.data=o}}(i,B.hhea,B.hmtx,N),B.head||w('Required "head" table is not found'),function(e,a,r){var i=e.data,n=o(i[0],i[1],i[2],i[3])
n>>16!=1&&(x("Attempting to fix invalid version in head table: "+n),i[0]=0,i[1]=1,i[2]=0,i[3]=0)
var s=t(i[50],i[51])
if(s<0||s>1){x("Attempting to fix invalid indexToLocFormat in head table: "+s)
var c=a+1
r===c<<1?(i[50]=0,i[51]=0):r===c<<2?(i[50]=0,i[51]=1):T("Could not fix indexToLocFormat: "+s)}}(B.head,N,D?B.loca.length:0)
var G=Object.create(null)
if(D){var X=t(B.head.data[50],B.head.data[51])
G=function(e,t,a,r,i,n){var s,o,l
r?(s=4,o=function(e,t){return e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3]},l=function(e,t,a){e[t]=a>>>24&255,e[t+1]=a>>16&255,e[t+2]=a>>8&255,e[t+3]=255&a}):(s=2,o=function(e,t){return e[t]<<9|e[t+1]<<1},l=function(e,t,a){e[t]=a>>9&255,e[t+1]=a>>1&255})
var h=e.data,u=s*(1+a)
h.length!==u&&(h=new Uint8Array(u),h.set(e.data.subarray(0,u)),e.data=h)
var f=t.data,d=f.length,g=new Uint8Array(d),p=o(h,0),m=0,b=Object.create(null)
l(h,0,m)
var v,y
for(v=0,y=s;v<a;v++,y+=s){var k=o(h,y)
if(k>d&&(d+3&-4)===k&&(k=d),k>d)l(h,y,m),p=k
else{p===k&&(b[v]=!0)
m+=c(f,p,k,g,m,i),l(h,y,m),p=k}}if(0===m){var w=new Uint8Array([0,1,0,0,0,0,0,0,0,0,0,0,0,0,49,0])
for(v=0,y=s;v<a;v++,y+=s)l(h,y,w.length)
return t.data=w,b}if(n){var x=o(h,s)
g.length>x+m?t.data=g.subarray(0,x+m):(t.data=new Uint8Array(x+m),t.data.set(g.subarray(0,m))),t.data.set(g.subarray(0,x),m),l(e.data,h.length-s,m+x)}else t.data=g.subarray(0,m)
return b}(B.loca,B.glyf,N,X,H,z)}B.hhea||w('Required "hhea" table is not found'),0===B.hhea.data[10]&&0===B.hhea.data[11]&&(B.hhea.data[10]=255,B.hhea.data[11]=255)
var V={unitsPerEm:t(B.head.data[18],B.head.data[19]),yMax:t(B.head.data[42],B.head.data[43]),yMin:a(B.head.data[38],B.head.data[39]),ascent:t(B.hhea.data[4],B.hhea.data[5]),descent:a(B.hhea.data[6],B.hhea.data[7])}
if(this.ascent=V.ascent/V.unitsPerEm,this.descent=V.descent/V.unitsPerEm,B.post){(function(e,t,a){var r=(i.start?i.start:0)+e.offset
i.pos=r
var n=e.length,s=r+n,o=i.getInt32()
i.getBytes(28)
var c,l,h=!0
switch(o){case 65536:c=ue
break
case 131072:var u=i.getUint16()
if(u!==a){h=!1
break}var f=[]
for(l=0;l<u;++l){var d=i.getUint16()
if(d>=32768){h=!1
break}f.push(d)}if(!h)break
for(var g=[],p=[];i.pos<s;){var m=i.getByte()
for(p.length=m,l=0;l<m;++l)p[l]=String.fromCharCode(i.getByte())
g.push(p.join(""))}for(c=[],l=0;l<u;++l){var b=f[l]
b<258?c.push(ue[b]):c.push(g[b-258])}break
case 196608:break
default:T("Unknown/unsupported post table version "+o),h=!1,t.defaultEncoding&&(c=t.defaultEncoding)}return t.glyphNames=c,h})(B.post,n,N)||(B.post=null)}var W,Y=[],Q=n.toUnicode,$=n.widths,ee=Q instanceof ge||65536===Q.length
if(n.composite){var te=n.cidToGidMap||[],ae=0===te.length
n.cMap.forEach(function(e,t){y(t<=65535,"Max size of CID is 65,535")
var a=-1
ae?a=t:void 0!==te[t]&&(a=te[t]),a>=0&&a<N&&f(a,e,t)&&(Y[e]=a)}),!z||!ae&&Y[0]||(Y[0]=N-1)}else{var re=function(e,t,a,r){if(!e)return T("No cmap table available."),{platformId:-1,encodingId:-1,mappings:[],hasShortCmap:!1}
var i,n=(t.start?t.start:0)+e.offset
t.pos=n,t.getUint16()
for(var s,o=t.getUint16(),c=!1,l=0;l<o;l++){var h=t.getUint16(),u=t.getUint16(),f=t.getInt32()>>>0,d=!1
if(0===h&&0===u?d=!0:1===h&&0===u?d=!0:3!==h||1!==u||!r&&s?a&&3===h&&0===u&&(d=!0,c=!0):(d=!0,a||(c=!0)),d&&(s={platformId:h,encodingId:u,offset:f}),c)break}if(s&&(t.pos=n+s.offset),!s||t.peekByte()===-1)return T("Could not find a preferred cmap table."),{platformId:-1,encodingId:-1,mappings:[],hasShortCmap:!1}
var g=t.getUint16()
t.getUint16(),t.getUint16()
var p,m,b=!1,v=[]
if(0===g){for(p=0;p<256;p++){var y=t.getByte()
y&&v.push({charCode:p,glyphId:y})}b=!0}else if(4===g){var k=t.getUint16()>>1
t.getBytes(6)
var w,x=[]
for(w=0;w<k;w++)x.push({end:t.getUint16()})
for(t.getUint16(),w=0;w<k;w++)x[w].start=t.getUint16()
for(w=0;w<k;w++)x[w].delta=t.getUint16()
var C=0
for(w=0;w<k;w++){i=x[w]
var S=t.getUint16()
if(S){var A=(S>>1)-(k-w)
i.offsetIndex=A,C=Math.max(C,A+i.end-i.start+1)}else i.offsetIndex=-1}var I=[]
for(p=0;p<C;p++)I.push(t.getUint16())
for(w=0;w<k;w++){i=x[w],n=i.start
var B=i.end,R=i.delta
for(A=i.offsetIndex,p=n;p<=B;p++)65535!==p&&(m=A<0?p:I[A+p-n],0!==(m=m+R&65535)&&v.push({charCode:p,glyphId:m}))}}else{if(6!==g)return T("cmap table has unsupported format: "+g),{platformId:-1,encodingId:-1,mappings:[],hasShortCmap:!1}
var O=t.getUint16(),P=t.getUint16()
for(p=0;p<P;p++){m=t.getUint16()
var M=O+p
v.push({charCode:M,glyphId:m})}}for(v.sort(function(e,t){return e.charCode-t.charCode}),l=1;l<v.length;l++)v[l-1].charCode===v[l].charCode&&(v.splice(l,1),l--)
return{platformId:s.platformId,encodingId:s.encodingId,mappings:v,hasShortCmap:b}}(B.cmap,i,this.isSymbolicFont,n.hasEncoding),ie=re.platformId,ne=re.encodingId,se=re.mappings,oe=se.length
if(n.hasEncoding&&(3===ie&&1===ne||1===ie&&0===ne)||ie===-1&&ne===-1&&j(n.baseEncodingName)){var ce=[]
"MacRomanEncoding"!==n.baseEncodingName&&"WinAnsiEncoding"!==n.baseEncodingName||(ce=j(n.baseEncodingName))
var he=E()
for(W=0;W<256;W++){var fe,de
if(fe=this.differences&&W in this.differences?this.differences[W]:W in ce&&""!==ce[W]?ce[W]:F[W]){de=s(fe,he)
var me,be=!1
3===ie&&1===ne?(me=he[de],be=!0):1===ie&&0===ne&&(me=q.indexOf(de))
var ve=!1
for(L=0;L<oe;++L)if(se[L].charCode===me){var ye=be?W:me
if(f(se[L].glyphId,ye,-1)){Y[W]=se[L].glyphId,ve=!0
break}}if(!ve&&n.glyphNames){var we=n.glyphNames.indexOf(fe)
we===-1&&de!==fe&&(we=n.glyphNames.indexOf(de)),we>0&&f(we,-1,-1)&&(Y[W]=we,ve=!0)}ve||(Y[W]=0)}}}else if(0===ie&&0===ne)for(L=0;L<oe;++L)Y[se[L].charCode]=se[L].glyphId
else for(L=0;L<oe;++L)W=255&se[L].charCode,Y[W]=se[L].glyphId}0===Y.length&&(Y[0]=0)
var xe=p(Y,n)
if(this.toFontChar=xe.toFontChar,B.cmap={tag:"cmap",data:C(xe.charCodeToGlyphId,N)},B["OS/2"]&&S(B["OS/2"])||(B["OS/2"]={tag:"OS/2",data:O(n,xe.charCodeToGlyphId,V)}),B.post||(B.post={tag:"post",data:P(n)}),!D)try{m=new M(B["CFF "].data)
g=new J(m,n,le).parse()
var Ce=new Z(g)
B["CFF "].data=Ce.compile()}catch(e){T("Failed to compile font "+n.loadedName)}if(B.name){var Se=function(e){var t=(i.start?i.start:0)+e.offset
i.pos=t
var a=[[],[]],r=e.length,n=t+r
if(0!==i.getUint16()||r<6)return a
var s,o,c=i.getUint16(),l=i.getUint16(),h=[]
for(s=0;s<c&&i.pos+12<=n;s++){var u={platform:i.getUint16(),encoding:i.getUint16(),language:i.getUint16(),name:i.getUint16(),length:i.getUint16(),offset:i.getUint16()};(1===u.platform&&0===u.encoding&&0===u.language||3===u.platform&&1===u.encoding&&1033===u.language)&&h.push(u)}for(s=0,o=h.length;s<o;s++){var f=h[s]
if(!(f.length<=0)){var d=t+l+f.offset
if(!(d+f.length>n)){i.pos=d
var g=f.name
if(f.encoding){for(var p="",m=0,b=f.length;m<b;m+=2)p+=String.fromCharCode(i.getUint16())
a[1][g]=p}else a[0][g]=k(i.getBytes(f.length))}}}return a}(B.name)
B.name.data=K(e,Se)}else B.name={tag:"name",data:K(this.name)}
var Ae=new pe(v.version)
for(var Ie in B)Ae.addTable(Ie,B[Ie].data)
return Ae.toArray()},convert:function(e,t,a){function r(e,t){for(var a in e)if(t===e[a])return 0|a
return s.charCodeToGlyphId[s.nextAvailableFontCharCode]=t,s.nextAvailableFontCharCode++}a.fixedPitch=!1,a.builtInEncoding&&i(a,a.builtInEncoding)
var n=t.getGlyphMapping(a),s=p(n,a)
this.toFontChar=s.toFontChar
var o=t.numGlyphs,h=t.seacs
if(le&&h&&h.length){var u=a.fontMatrix||b,f=t.getCharset(),d=Object.create(null)
for(var g in h){g|=0
var m=h[g],v=F[m[2]],y=F[m[3]],k=f.indexOf(v),w=f.indexOf(y)
if(!(k<0||w<0)){var x={x:m[0]*u[0]+m[1]*u[2]+u[4],y:m[0]*u[1]+m[1]*u[3]+u[5]},S=function(e,t){var a=null
for(var r in e)t===e[r]&&(a||(a=[]),a.push(0|r))
return a}(n,g)
if(S)for(var A=0,I=S.length;A<I;A++){var B=S[A],R=s.charCodeToGlyphId,T=r(R,k),M=r(R,w)
d[B]={baseFontCharCode:T,accentFontCharCode:M,accentOffset:x}}}}a.seacMap=d}var E=1/(a.fontMatrix||b)[0],L=new pe("OTTO")
return L.addTable("CFF ",t.data),L.addTable("OS/2",O(a,s.charCodeToGlyphId)),L.addTable("cmap",C(s.charCodeToGlyphId,o)),L.addTable("head","\0\0\0\0\0\0\0\0\0\0_<õ\0\0"+l(E)+"\0\0\0\0\v~'\0\0\0\0\v~'\0\0"+l(a.descent)+"ÿ"+l(a.ascent)+c(a.italicAngle?2:0)+"\0\0\0\0\0\0\0"),L.addTable("hhea","\0\0\0"+l(a.ascent)+l(a.descent)+"\0\0ÿÿ\0\0\0\0\0\0"+l(a.capHeight)+l(Math.tan(a.italicAngle)*a.xHeight)+"\0\0\0\0\0\0\0\0\0\0\0\0"+c(o)),L.addTable("hmtx",function(){for(var e=t.charstrings,a=t.cff?t.cff.widths:null,r="\0\0\0\0",i=1,n=o;i<n;i++){var s=0
if(e){var l=e[i-1]
s="width"in l?l.width:0}else a&&(s=Math.ceil(a[i]||0))
r+=c(s)+c(0)}return r}()),L.addTable("maxp","\0\0P\0"+c(o)),L.addTable("name",K(e)),L.addTable("post",P(a)),L.toArray()},get spaceWidth(){if("_shadowWidth"in this)return this._shadowWidth
for(var e,t=["space","minus","one","i","I"],a=0,r=t.length;a<r;a++){var i=t[a]
if(i in this.widths){e=this.widths[i]
break}var n=E(),s=n[i],o=0
if(this.composite&&this.cMap.contains(s)&&(o=this.cMap.lookup(s)),!o&&this.toUnicode&&(o=this.toUnicode.charCodeOf(s)),o<=0&&(o=s),e=this.widths[o])break}return e=e||this.defaultWidth,this._shadowWidth=e,e},charToGlyph:function(e,t){var a,r,i,n=e
this.cMap&&this.cMap.contains(e)&&(n=this.cMap.lookup(e)),r=this.widths[n],r=A(r)?r:this.defaultWidth
var s=this.vmetrics&&this.vmetrics[n],o=this.toUnicode.get(e)||e
"number"==typeof o&&(o=String.fromCharCode(o))
var c=e in this.toFontChar
a=this.toFontChar[e]||e,this.missingFile&&(a=V(a)),this.isType3Font&&(i=a)
var l=null
if(this.seacMap&&this.seacMap[e]){c=!0
var h=this.seacMap[e]
a=h.baseFontCharCode,l={fontChar:String.fromCharCode(h.accentFontCharCode),offset:h.accentOffset}}var u=String.fromCharCode(a),f=this.glyphCache[e]
return f&&f.matchesForCache(u,o,l,r,s,i,t,c)||(f=new fe(u,o,l,r,s,i,t,c),this.glyphCache[e]=f),f},charsToGlyphs:function(e){var t,a,r,i=this.charsCache
if(i&&(t=i[e]))return t
i||(i=this.charsCache=Object.create(null)),t=[]
var n,s=e,o=0
if(this.cMap)for(var c=Object.create(null);o<e.length;){this.cMap.readCharCode(e,o,c),r=c.charcode
var l=c.length
o+=l
var h=1===l&&32===e.charCodeAt(o-1)
a=this.charToGlyph(r,h),t.push(a)}else for(o=0,n=e.length;o<n;++o)r=e.charCodeAt(o),a=this.charToGlyph(r,32===r),t.push(a)
return i[s]=t}},e}(),ve=function(){function e(e){this.error=e,this.loadedName="g_font_error",this.loading=!1}return e.prototype={charsToGlyphs:function(){return[]},exportData:function(){return{error:this.error}}},e}(),ye=function(){function e(e,t,a){for(var r,i=e.length,n=t.length,s=i-n,o=a,c=!1;o<s;){for(r=0;r<n&&e[o+r]===t[r];)r++
if(r>=n){for(o+=r;o<i&&P(e[o]);)o++
c=!0
break}o++}return{found:c,length:o}}function t(t,a){var r,i,n,s=[101,101,120,101,99],o=t.pos
try{r=t.getBytes(a),i=r.length}catch(e){if(e instanceof O)throw e}if(i===a&&(n=e(r,s,a-2*s.length),n.found&&n.length===a))return{stream:new M(r),length:a}
T('Invalid "Length1" property in Type1 font -- trying to recover.'),t.pos=o
for(var c;;){if(n=e(t.peekBytes(2048),s,0),0===n.length)break
if(t.pos+=n.length,n.found){c=t.pos-o
break}}return t.pos=o,c?{stream:new M(t.getBytes(c)),length:c}:(T('Unable to recover "Length1" property in Type1 font -- using as is.'),{stream:new M(t.getBytes(a)),length:a})}function a(e,t){var a=e.getBytes()
return{stream:new M(a),length:a.length}}function r(e,r,i){var n=i.length1,s=i.length2,o=r.peekBytes(6),c=128===o[0]&&1===o[1]
c&&(r.skip(6),n=o[5]<<24|o[4]<<16|o[3]<<8|o[2])
var l=t(r,n)
n=l.length,new K(l.stream,!1,le).extractFontHeader(i),c&&(o=r.getBytes(6),s=o[5]<<24|o[4]<<16|o[3]<<8|o[2])
var h=a(r,s)
s=h.length
var u=new K(h.stream,!0,le),f=u.extractFontProgram()
for(var d in f.properties)i[d]=f.properties[d]
var g=f.charstrings,p=this.getType2Charstrings(g),m=this.getType2Subrs(f.subrs)
this.charstrings=g,this.data=this.wrap(e,p,this.charstrings,m,i),this.seacs=this.getSeacs(f.charstrings)}return r.prototype={get numGlyphs(){return this.charstrings.length+1},getCharset:function(){for(var e=[".notdef"],t=this.charstrings,a=0;a<t.length;a++)e.push(t[a].glyphName)
return e},getGlyphMapping:function(e){var t,a=this.charstrings,r=[".notdef"]
for(t=0;t<a.length;t++)r.push(a[t].glyphName)
var i=e.builtInEncoding
if(i){var n=Object.create(null)
for(var s in i)(t=r.indexOf(i[s]))>=0&&(n[s]=t)}return o(e,n,r)},getSeacs:function(e){var t,a,r=[]
for(t=0,a=e.length;t<a;t++){var i=e[t]
i.seac&&(r[t+1]=i.seac)}return r},getType2Charstrings:function(e){for(var t=[],a=0,r=e.length;a<r;a++)t.push(e[a].charstring)
return t},getType2Subrs:function(e){var t=0,a=e.length
t=a<1133?107:a<33769?1131:32768
var r,i=[]
for(r=0;r<t;r++)i.push([11])
for(r=0;r<a;r++)i.push(e[r])
return i},wrap:function(e,t,a,r,i){var n=new Q
n.header=new $(1,0,4,4),n.names=[e]
var s=new ee
s.setByName("version",391),s.setByName("Notice",392),s.setByName("FullName",393),s.setByName("FamilyName",394),s.setByName("Weight",395),s.setByName("Encoding",null),s.setByName("FontMatrix",i.fontMatrix),s.setByName("FontBBox",i.bbox),s.setByName("charset",null),s.setByName("CharStrings",null),s.setByName("Private",null),n.topDict=s
var o=new ae
o.add("Version 0.11"),o.add("See original notice"),o.add(e),o.add(e),o.add("Medium"),n.strings=o,n.globalSubrIndex=new re
var c,l,h=t.length,u=[0]
for(c=0;c<h;c++){var f=Y.indexOf(a[c].glyphName)
f===-1&&(f=0),u.push(f>>8&255,255&f)}n.charset=new ie(!1,0,[],u)
var d=new re
for(d.add([139,14]),c=0;c<h;c++){var g=t[c]
0!==g.length?d.add(g):d.add([139,14])}n.charStrings=d
var p=new te
p.setByName("Subrs",null)
var m=["BlueValues","OtherBlues","FamilyBlues","FamilyOtherBlues","StemSnapH","StemSnapV","BlueShift","BlueFuzz","BlueScale","LanguageGroup","ExpansionFactor","ForceBold","StdHW","StdVW"]
for(c=0,l=m.length;c<l;c++){var b=m[c]
if(b in i.privateData){var v=i.privateData[b]
if(C(v))for(var y=v.length-1;y>0;y--)v[y]-=v[y-1]
p.setByName(b,v)}}n.topDict.privateDict=p
var k=new re
for(c=0,l=r.length;c<l;c++)k.add(r[c])
return p.subrsIndex=k,new Z(n).compile()}},r}(),ke=function(){function e(e,t){this.properties=t
var a=new J(e,t,le)
this.cff=a.parse()
var r=new Z(this.cff)
this.seacs=this.cff.seacs
try{this.data=r.compile()}catch(a){T("Failed to compile font "+t.loadedName),this.data=e}}return e.prototype={get numGlyphs(){return this.cff.charStrings.count},getCharset:function(){return this.cff.charset.charset},getGlyphMapping:function(){var e,t,a=this.cff,r=this.properties,i=a.charset.charset
if(r.composite){if(e=Object.create(null),a.isCIDFont)for(t=0;t<i.length;t++){var n=i[t],s=r.cMap.charCodeOf(n)
e[s]=t}else for(t=0;t<a.charStrings.count;t++)e[t]=t
return e}return e=o(r,a.encoding?a.encoding.encoding:null,i)}},e}()
!function(){"undefined"!=typeof navigator&&/Windows/.test(navigator.userAgent)&&(le=!0)}(),function(){"undefined"!=typeof navigator&&/Windows.*Chrome/.test(navigator.userAgent)&&(oe=!0)}(),t.SEAC_ANALYSIS_ENABLED=le,t.PRIVATE_USE_OFFSET_START=ne,t.PRIVATE_USE_OFFSET_END=se,t.ErrorFont=ve,t.Font=be,t.FontFlags=he,t.IdentityToUnicodeMap=ge,t.ProblematicCharRanges=me,t.ToUnicodeMap=de,t.getFontType=n},function(e,t,a){"use strict"
var r=a(0),i=a(1),n=a(3),s=a(2),o=a(15),c=r.ImageKind,l=r.assert,h=r.error,u=r.info,f=r.isArray,d=r.warn,g=i.Name,p=i.isStream,m=n.ColorSpace,b=s.DecodeStream,v=s.JpegStream,y=o.JpxImage,k=function(){function e(e,t){return t&&t.canDecode(e)?t.decode(e):Promise.resolve(e)}function t(e,t,a,r){return e=t+e*a,e<0?0:e>r?r:e}function a(e,t,a,r,i,n){var s,o,c,l,h=i*n,u=t<=8?new Uint8Array(h):t<=16?new Uint16Array(h):new Uint32Array(h),f=a/i,d=r/n,g=0,p=new Uint16Array(i),m=a
for(s=0;s<i;s++)p[s]=Math.floor(s*f)
for(s=0;s<n;s++)for(c=Math.floor(s*d)*m,o=0;o<i;o++)l=c+p[o],u[g++]=e[l]
return u}function r(e,t,a,i,n,s,o){this.image=a
var c=a.dict
if(c.has("Filter")){var l=c.get("Filter").name
if("JPXDecode"===l){var f=new y
f.parseImageProperties(a.stream),a.stream.reset(),a.bitsPerComponent=f.bitsPerComponent,a.numComps=f.componentsCount}else"JBIG2Decode"===l&&(a.bitsPerComponent=1,a.numComps=1)}this.width=c.get("Width","W"),this.height=c.get("Height","H"),(this.width<1||this.height<1)&&h("Invalid image width: "+this.width+" or height: "+this.height),this.interpolate=c.get("Interpolate","I")||!1,this.imageMask=c.get("ImageMask","IM")||!1,this.matte=c.get("Matte")||!1
var b=a.bitsPerComponent
if(b||(b=c.get("BitsPerComponent","BPC"))||(this.imageMask?b=1:h("Bits per component missing in image: "+this.imageMask)),this.bpc=b,!this.imageMask){var v=c.get("ColorSpace","CS")
if(!v)switch(u("JPX images (which do not require color spaces)"),a.numComps){case 1:v=g.get("DeviceGray")
break
case 3:v=g.get("DeviceRGB")
break
case 4:v=g.get("DeviceCMYK")
break
default:h("JPX images with "+this.numComps+" color components not supported.")}this.colorSpace=m.parse(v,e,t),this.numComps=this.colorSpace.numComps}if(this.decode=c.getArray("Decode","D"),this.needsDecode=!1,this.decode&&(this.colorSpace&&!this.colorSpace.isDefaultDecode(this.decode)||o&&!m.isDefaultDecode(this.decode,1))){this.needsDecode=!0
var k=(1<<b)-1
this.decodeCoefficients=[],this.decodeAddends=[]
for(var w=0,x=0;w<this.decode.length;w+=2,++x){var C=this.decode[w],S=this.decode[w+1]
this.decodeCoefficients[x]=S-C,this.decodeAddends[x]=k*C}}if(n)this.smask=new r(e,t,n,!1)
else if(s)if(p(s)){var A=s.dict,I=A.get("ImageMask","IM")
I?this.mask=new r(e,t,s,!1,null,null,!0):d("Ignoring /Mask in image without /ImageMask.")}else this.mask=s}return r.buildImage=function(t,a,i,n,s,o){var c,l,h=e(n,o),u=n.dict.get("SMask"),g=n.dict.get("Mask")
return u?(c=e(u,o),l=Promise.resolve(null)):(c=Promise.resolve(null),g?p(g)?l=e(g,o):f(g)?l=Promise.resolve(g):(d("Unsupported mask format."),l=Promise.resolve(null)):l=Promise.resolve(null)),Promise.all([h,c,l]).then(function(e){var t=e[0],n=e[1],o=e[2]
return new r(a,i,t,s,n,o)})},r.createMask=function(e,t,a,r,i){var n,s,o=(t+7>>3)*a,c=e.byteLength,l=o===c
if(!r||i&&!l)if(i)for(n=new Uint8Array(o),n.set(e),s=c;s<o;s++)n[s]=255
else n=new Uint8Array(c),n.set(e)
else n=e
if(i)for(s=0;s<c;s++)n[s]=~n[s]
return{data:n,width:t,height:a}},r.prototype={get drawWidth(){return Math.max(this.width,this.smask&&this.smask.width||0,this.mask&&this.mask.width||0)},get drawHeight(){return Math.max(this.height,this.smask&&this.smask.height||0,this.mask&&this.mask.height||0)},decodeBuffer:function(e){var a,r,i=this.bpc,n=this.numComps,s=this.decodeAddends,o=this.decodeCoefficients,c=(1<<i)-1
if(1!==i){var l=0
for(a=0,r=this.width*this.height;a<r;a++)for(var h=0;h<n;h++)e[l]=t(e[l],s[h],o[h],c),l++}else for(a=0,r=e.length;a<r;a++)e[a]=+!e[a]},getComponents:function(e){var t=this.bpc
if(8===t)return e
var a,r,i=this.width,n=this.height,s=this.numComps,o=i*n*s,c=0,l=t<=8?new Uint8Array(o):t<=16?new Uint16Array(o):new Uint32Array(o),h=i*s,u=(1<<t)-1,f=0
if(1===t)for(var d,g,p,m=0;m<n;m++){for(g=f+(h&-8),p=f+h;f<g;)r=e[c++],l[f]=r>>7&1,l[f+1]=r>>6&1,l[f+2]=r>>5&1,l[f+3]=r>>4&1,l[f+4]=r>>3&1,l[f+5]=r>>2&1,l[f+6]=r>>1&1,l[f+7]=1&r,f+=8
if(f<p)for(r=e[c++],d=128;f<p;)l[f++]=+!!(r&d),d>>=1}else{var b=0
for(r=0,f=0,a=o;f<a;++f){for(f%h==0&&(r=0,b=0);b<t;)r=r<<8|e[c++],b+=8
var v=b-t,y=r>>v
l[f]=y<0?0:y>u?u:y,r&=(1<<v)-1,b=v}}return l},fillOpacity:function(e,t,i,n,s){var o,c,l,u,d,g,p=this.smask,m=this.mask
if(p)c=p.width,l=p.height,o=new Uint8Array(c*l),p.fillGrayBuffer(o),c===t&&l===i||(o=a(o,p.bpc,c,l,t,i))
else if(m)if(m instanceof r){for(c=m.width,l=m.height,o=new Uint8Array(c*l),m.numComps=1,m.fillGrayBuffer(o),u=0,d=c*l;u<d;++u)o[u]=255-o[u]
c===t&&l===i||(o=a(o,m.bpc,c,l,t,i))}else if(f(m)){o=new Uint8Array(t*i)
var b=this.numComps
for(u=0,d=t*i;u<d;++u){var v=0,y=u*b
for(g=0;g<b;++g){var k=s[y+g],w=2*g
if(k<m[w]||k>m[w+1]){v=255
break}}o[u]=v}}else h("Unknown mask format.")
if(o)for(u=0,g=3,d=t*n;u<d;++u,g+=4)e[g]=o[u]
else for(u=0,g=3,d=t*n;u<d;++u,g+=4)e[g]=255},undoPreblend:function(e,t,a){var r=this.smask&&this.smask.matte
if(r)for(var i,n,s,o=this.colorSpace.getRgb(r,0),c=o[0],l=o[1],h=o[2],u=t*a*4,f=0;f<u;f+=4){var d=e[f+3]
if(0!==d){var g=255/d
i=(e[f]-c)*g+c,n=(e[f+1]-l)*g+l,s=(e[f+2]-h)*g+h,e[f]=i<=0?0:i>=255?255:0|i,e[f+1]=n<=0?0:n>=255?255:0|n,e[f+2]=s<=0?0:s>=255?255:0|s}else e[f]=255,e[f+1]=255,e[f+2]=255}},createImageData:function(e){var t,a=this.drawWidth,r=this.drawHeight,i={width:a,height:r},n=this.numComps,s=this.width,o=this.height,h=this.bpc,u=s*n*h+7>>3
if(!e){var f
if("DeviceGray"===this.colorSpace.name&&1===h?f=c.GRAYSCALE_1BPP:"DeviceRGB"!==this.colorSpace.name||8!==h||this.needsDecode||(f=c.RGB_24BPP),f&&!this.smask&&!this.mask&&a===s&&r===o){if(i.kind=f,t=this.getImageBytes(o*u),this.image instanceof b)i.data=t
else{var d=new Uint8Array(t.length)
d.set(t),i.data=d}if(this.needsDecode){l(f===c.GRAYSCALE_1BPP)
for(var g=i.data,p=0,m=g.length;p<m;p++)g[p]^=255}return i}if(this.image instanceof v&&!this.smask&&!this.mask&&("DeviceGray"===this.colorSpace.name||"DeviceRGB"===this.colorSpace.name||"DeviceCMYK"===this.colorSpace.name))return i.kind=c.RGB_24BPP,i.data=this.getImageBytes(o*u,a,r,!0),i}t=this.getImageBytes(o*u)
var y,k,w=0|t.length/u*r/o,x=this.getComponents(t)
return e||this.smask||this.mask?(i.kind=c.RGBA_32BPP,i.data=new Uint8Array(a*r*4),y=1,k=!0,this.fillOpacity(i.data,a,r,w,x)):(i.kind=c.RGB_24BPP,i.data=new Uint8Array(a*r*3),y=0,k=!1),this.needsDecode&&this.decodeBuffer(x),this.colorSpace.fillRgb(i.data,s,o,a,r,w,h,x,y),k&&this.undoPreblend(i.data,a,w),i},fillGrayBuffer:function(e){var t=this.numComps
1!==t&&h("Reading gray scale from a color image: "+t)
var a,r,i=this.width,n=this.height,s=this.bpc,o=i*t*s+7>>3,c=this.getImageBytes(n*o),l=this.getComponents(c)
if(1!==s){this.needsDecode&&this.decodeBuffer(l),r=i*n
var u=255/((1<<s)-1)
for(a=0;a<r;++a)e[a]=u*l[a]|0}else if(r=i*n,this.needsDecode)for(a=0;a<r;++a)e[a]=l[a]-1&255
else for(a=0;a<r;++a)e[a]=255&-l[a]},getImageBytes:function(e,t,a,r){return this.image.reset(),this.image.drawWidth=t||this.width,this.image.drawHeight=a||this.height,this.image.forceRGB=!!r,this.image.getBytes(e)}},r}()
t.PDFImage=k},function(e,t,a){"use strict"
var r=a(0),i=a(10),n=r.error,s=r.log2,o=r.readInt8,c=r.readUint16,l=r.readUint32,h=r.shadow,u=i.ArithmeticDecoder,f=function(){function e(){}function t(e,t,a){this.data=e,this.start=t,this.end=a}function a(e,t,a){function r(e){for(var t=0,r=0;r<e;r++){var s=a.readBit(i,n)
n=n<256?n<<1|s:511&(n<<1|s)|256,t=t<<1|s}return t>>>0}var i=e.getContexts(t),n=1,s=r(1),o=r(1)?r(1)?r(1)?r(1)?r(1)?r(32)+4436:r(12)+340:r(8)+84:r(6)+20:r(4)+4:r(2)
return 0===s?o:o>0?-o:null}function r(e,t,a){for(var r=e.getContexts("IAID"),i=1,n=0;n<a;n++){i=i<<1|t.readBit(r,i)}return a<31?i&(1<<a)-1:2147483647&i}function i(e,t,a){var r,i,n,s,o,c,l,h=a.decoder,u=a.contextCache.getContexts("GB"),f=[]
for(i=0;i<t;i++)for(o=f[i]=new Uint8Array(e),c=i<1?o:f[i-1],l=i<2?o:f[i-2],r=l[0]<<13|l[1]<<12|l[2]<<11|c[0]<<7|c[1]<<6|c[2]<<5|c[3]<<4,n=0;n<e;n++)o[n]=s=h.readBit(u,r),r=(31735&r)<<1|(n+3<e?l[n+3]<<11:0)|(n+4<e?c[n+4]<<4:0)|s
return f}function f(e,t,a,r,s,o,c,l){if(e&&n("JBIG2 error: MMR encoding is not supported"),0===r&&!o&&!s&&4===c.length&&3===c[0].x&&c[0].y===-1&&c[1].x===-3&&c[1].y===-1&&2===c[2].x&&c[2].y===-2&&c[3].x===-2&&c[3].y===-2)return i(t,a,l)
var h=!!o,u=A[r].concat(c)
u.sort(function(e,t){return e.y-t.y||e.x-t.x})
var f,d,g=u.length,p=new Int8Array(g),m=new Int8Array(g),b=[],v=0,y=0,k=0,w=0
for(d=0;d<g;d++)p[d]=u[d].x,m[d]=u[d].y,y=Math.min(y,u[d].x),k=Math.max(k,u[d].x),w=Math.min(w,u[d].y),d<g-1&&u[d].y===u[d+1].y&&u[d].x===u[d+1].x-1?v|=1<<g-1-d:b.push(d)
var x=b.length,C=new Int8Array(x),S=new Int8Array(x),I=new Uint16Array(x)
for(f=0;f<x;f++)d=b[f],C[f]=u[d].x,S[f]=u[d].y,I[f]=1<<g-1-d
for(var R,T,O,P,M,E=-y,L=-w,D=t-k,F=B[r],q=new Uint8Array(t),U=[],N=l.decoder,j=l.contextCache.getContexts("GB"),_=0,z=0,H=0;H<a;H++){if(s){if(_^=N.readBit(j,F)){U.push(q)
continue}}for(q=new Uint8Array(q),U.push(q),R=0;R<t;R++)if(h&&o[H][R])q[R]=0
else{if(R>=E&&R<D&&H>=L)for(z=z<<1&v,d=0;d<x;d++)T=H+S[d],O=R+C[d],(P=U[T][O])&&(P=I[d],z|=P)
else for(z=0,M=g-1,d=0;d<g;d++,M--)(O=R+p[d])>=0&&O<t&&(T=H+m[d])>=0&&(P=U[T][O])&&(z|=P<<M)
var G=N.readBit(j,z)
q[R]=G}}return U}function d(e,t,a,r,i,s,o,c,l){var h=I[a].coding
0===a&&(h=h.concat([c[0]]))
var u,f=h.length,d=new Int32Array(f),g=new Int32Array(f)
for(u=0;u<f;u++)d[u]=h[u].x,g[u]=h[u].y
var p=I[a].reference
0===a&&(p=p.concat([c[1]]))
var m=p.length,b=new Int32Array(m),v=new Int32Array(m)
for(u=0;u<m;u++)b[u]=p[u].x,v[u]=p[u].y
for(var y=r[0].length,k=r.length,w=R[a],x=[],C=l.decoder,S=l.contextCache.getContexts("GR"),A=0,B=0;B<t;B++){if(o){A^=C.readBit(S,w),A&&n("JBIG2 error: prediction is not supported")}var T=new Uint8Array(e)
x.push(T)
for(var O=0;O<e;O++){var P,M,E=0
for(u=0;u<f;u++)P=B+g[u],M=O+d[u],P<0||M<0||M>=e?E<<=1:E=E<<1|x[P][M]
for(u=0;u<m;u++)P=B+v[u]+s,M=O+b[u]+i,P<0||P>=k||M<0||M>=y?E<<=1:E=E<<1|r[P][M]
var L=C.readBit(S,E)
T[O]=L}}return x}function g(e,t,i,o,c,l,h,u,g,m,b){e&&n("JBIG2 error: huffman is not supported")
for(var v=[],y=0,k=s(i.length+o),w=b.decoder,x=b.contextCache;v.length<o;){y+=a(x,"IADH",w)
for(var C=0;;){var S=a(x,"IADW",w)
if(null===S)break
C+=S
var A
if(t){var I=a(x,"IAAI",w)
if(I>1)A=p(e,t,C,y,0,I,1,i.concat(v),k,0,0,1,0,l,g,m,b)
else{var B=r(x,w,k),R=a(x,"IARDX",w),T=a(x,"IARDY",w)
A=d(C,y,g,B<i.length?i[B]:v[B-i.length],R,T,!1,m,b)}}else A=f(!1,C,y,h,!1,null,u,b)
v.push(A)}}for(var O=[],P=[],M=!1,E=i.length+o;P.length<E;){for(var L=a(x,"IAEX",w);L--;)P.push(M)
M=!M}for(var D=0,F=i.length;D<F;D++)P[D]&&O.push(i[D])
for(var q=0;q<o;D++,q++)P[D]&&O.push(v[q])
return O}function p(e,t,i,s,o,c,l,h,u,f,g,p,m,b,v,y,k){e&&n("JBIG2 error: huffman is not supported")
var w,x,C=[]
for(w=0;w<s;w++){if(x=new Uint8Array(i),o)for(var S=0;S<i;S++)x[S]=o
C.push(x)}var A=k.decoder,I=k.contextCache,B=-a(I,"IADT",A),R=0
for(w=0;w<c;){B+=a(I,"IADT",A)
R+=a(I,"IAFS",A)
for(var T=R;;){var O=1===l?0:a(I,"IAIT",A),P=l*B+O,M=r(I,A,u),E=t&&a(I,"IARI",A),L=h[M],D=L[0].length,F=L.length
if(E){var q=a(I,"IARDW",A),U=a(I,"IARDH",A),N=a(I,"IARDX",A),j=a(I,"IARDY",A)
D+=q,F+=U,L=d(D,F,v,L,(q>>1)+N,(U>>1)+j,!1,y,k)}var _,z,H,G=P-(1&p?0:F),X=T-(2&p?D:0)
if(f){for(_=0;_<F;_++)if(x=C[X+_]){H=L[_]
var V=Math.min(i-G,D)
switch(m){case 0:for(z=0;z<V;z++)x[G+z]|=H[z]
break
case 2:for(z=0;z<V;z++)x[G+z]^=H[z]
break
default:n("JBIG2 error: operator "+m+" is not supported")}}T+=F-1}else{for(z=0;z<F;z++)if(x=C[G+z])switch(H=L[z],m){case 0:for(_=0;_<D;_++)x[X+_]|=H[_]
break
case 2:for(_=0;_<D;_++)x[X+_]^=H[_]
break
default:n("JBIG2 error: operator "+m+" is not supported")}T+=D-1}w++
var W=a(I,"IADS",A)
if(null===W)break
T+=W+g}}return C}function m(e,t){var a={}
a.number=l(e,t)
var r=e[t+4],i=63&r
S[i]||n("JBIG2 error: invalid segment type: "+i),a.type=i,a.typeName=S[i],a.deferredNonRetain=!!(128&r)
var s=!!(64&r),o=e[t+5],h=o>>5&7,u=[31&o],f=t+6
if(7===o){h=536870911&l(e,f-1),f+=3
var d=h+7>>3
for(u[0]=e[f++];--d>0;)u.push(e[f++])}else 5!==o&&6!==o||n("JBIG2 error: invalid referred-to flags")
a.retainBits=u
var g,p,m=a.number<=256?1:a.number<=65536?2:4,b=[]
for(g=0;g<h;g++){var y=1===m?e[f]:2===m?c(e,f):l(e,f)
b.push(y),f+=m}if(a.referredTo=b,s?(a.pageAssociation=l(e,f),f+=4):a.pageAssociation=e[f++],a.length=l(e,f),f+=4,4294967295===a.length)if(38===i){var k=v(e,f),w=e[f+T],x=!!(1&w),C=new Uint8Array(6)
for(x||(C[0]=255,C[1]=172),C[2]=k.height>>>24&255,C[3]=k.height>>16&255,C[4]=k.height>>8&255,C[5]=255&k.height,g=f,p=e.length;g<p;g++){for(var A=0;A<6&&C[A]===e[g+A];)A++
if(6===A){a.length=g+6
break}}4294967295===a.length&&n("JBIG2 error: segment end was not found")}else n("JBIG2 error: invalid unknown segment length")
return a.headerEnd=f,a}function b(e,t,a,r){for(var i=[],n=a;n<r;){var s=m(t,n)
n=s.headerEnd
var o={header:s,data:t}
if(e.randomAccess||(o.start=n,n+=s.length,o.end=n),i.push(o),51===s.type)break}if(e.randomAccess)for(var c=0,l=i.length;c<l;c++)i[c].start=n,n+=i[c].header.length,i[c].end=n
return i}function v(e,t){return{width:l(e,t),height:l(e,t+4),x:l(e,t+8),y:l(e,t+12),combinationOperator:7&e[t+16]}}function y(e,t){var a,r,i,s,h=e.header,u=e.data,f=e.start,d=e.end
switch(h.type){case 0:var g={},p=c(u,f)
if(g.huffman=!!(1&p),g.refinement=!!(2&p),g.huffmanDHSelector=p>>2&3,g.huffmanDWSelector=p>>4&3,g.bitmapSizeSelector=p>>6&1,g.aggregationInstancesSelector=p>>7&1,g.bitmapCodingContextUsed=!!(256&p),g.bitmapCodingContextRetained=!!(512&p),g.template=p>>10&3,g.refinementTemplate=p>>12&1,f+=2,!g.huffman){for(s=0===g.template?4:1,r=[],i=0;i<s;i++)r.push({x:o(u,f),y:o(u,f+1)}),f+=2
g.at=r}if(g.refinement&&!g.refinementTemplate){for(r=[],i=0;i<2;i++)r.push({x:o(u,f),y:o(u,f+1)}),f+=2
g.refinementAt=r}g.numberOfExportedSymbols=l(u,f),f+=4,g.numberOfNewSymbols=l(u,f),f+=4,a=[g,h.number,h.referredTo,u,f,d]
break
case 6:case 7:var m={}
m.info=v(u,f),f+=T
var b=c(u,f)
if(f+=2,m.huffman=!!(1&b),m.refinement=!!(2&b),m.stripSize=1<<(b>>2&3),m.referenceCorner=b>>4&3,m.transposed=!!(64&b),m.combinationOperator=b>>7&3,m.defaultPixelValue=b>>9&1,m.dsOffset=b<<17>>27,m.refinementTemplate=b>>15&1,m.huffman){var y=c(u,f)
f+=2,m.huffmanFS=3&y,m.huffmanDS=y>>2&3,m.huffmanDT=y>>4&3,m.huffmanRefinementDW=y>>6&3,m.huffmanRefinementDH=y>>8&3,m.huffmanRefinementDX=y>>10&3,m.huffmanRefinementDY=y>>12&3,m.huffmanRefinementSizeSelector=!!(14&y)}if(m.refinement&&!m.refinementTemplate){for(r=[],i=0;i<2;i++)r.push({x:o(u,f),y:o(u,f+1)}),f+=2
m.refinementAt=r}m.numberOfSymbolInstances=l(u,f),f+=4,m.huffman&&n("JBIG2 error: huffman is not supported"),a=[m,h.referredTo,u,f,d]
break
case 38:case 39:var k={}
k.info=v(u,f),f+=T
var w=u[f++]
if(k.mmr=!!(1&w),k.template=w>>1&3,k.prediction=!!(8&w),!k.mmr){for(s=0===k.template?4:1,r=[],i=0;i<s;i++)r.push({x:o(u,f),y:o(u,f+1)}),f+=2
k.at=r}a=[k,u,f,d]
break
case 48:var x={width:l(u,f),height:l(u,f+4),resolutionX:l(u,f+8),resolutionY:l(u,f+12)}
4294967295===x.height&&delete x.height
var C=u[f+16]
c(u,f+17),x.lossless=!!(1&C),x.refinement=!!(2&C),x.defaultPixelValue=C>>2&1,x.combinationOperator=C>>3&3,x.requiresBuffer=!!(32&C),x.combinationOperatorOverride=!!(64&C),a=[x]
break
case 49:case 50:case 51:case 62:break
default:n("JBIG2 error: segment type "+h.typeName+"("+h.type+") is not implemented")}var S="on"+h.typeName
S in t&&t[S].apply(t,a)}function k(e,t){for(var a=0,r=e.length;a<r;a++)y(e[a],t)}function w(e){for(var t=new x,a=0,r=e.length;a<r;a++){var i=e[a]
k(b({},i.data,i.start,i.end),t)}return t.buffer}function x(){}function C(){}e.prototype={getContexts:function(e){return e in this?this[e]:this[e]=new Int8Array(65536)}},t.prototype={get decoder(){var e=new u(this.data,this.start,this.end)
return h(this,"decoder",e)},get contextCache(){var t=new e
return h(this,"contextCache",t)}}
var S=["SymbolDictionary",null,null,null,"IntermediateTextRegion",null,"ImmediateTextRegion","ImmediateLosslessTextRegion",null,null,null,null,null,null,null,null,"patternDictionary",null,null,null,"IntermediateHalftoneRegion",null,"ImmediateHalftoneRegion","ImmediateLosslessHalftoneRegion",null,null,null,null,null,null,null,null,null,null,null,null,"IntermediateGenericRegion",null,"ImmediateGenericRegion","ImmediateLosslessGenericRegion","IntermediateGenericRefinementRegion",null,"ImmediateGenericRefinementRegion","ImmediateLosslessGenericRefinementRegion",null,null,null,null,"PageInformation","EndOfPage","EndOfStripe","EndOfFile","Profiles","Tables",null,null,null,null,null,null,null,null,"Extension"],A=[[{x:-1,y:-2},{x:0,y:-2},{x:1,y:-2},{x:-2,y:-1},{x:-1,y:-1},{x:0,y:-1},{x:1,y:-1},{x:2,y:-1},{x:-4,y:0},{x:-3,y:0},{x:-2,y:0},{x:-1,y:0}],[{x:-1,y:-2},{x:0,y:-2},{x:1,y:-2},{x:2,y:-2},{x:-2,y:-1},{x:-1,y:-1},{x:0,y:-1},{x:1,y:-1},{x:2,y:-1},{x:-3,y:0},{x:-2,y:0},{x:-1,y:0}],[{x:-1,y:-2},{x:0,y:-2},{x:1,y:-2},{x:-2,y:-1},{x:-1,y:-1},{x:0,y:-1},{x:1,y:-1},{x:-2,y:0},{x:-1,y:0}],[{x:-3,y:-1},{x:-2,y:-1},{x:-1,y:-1},{x:0,y:-1},{x:1,y:-1},{x:-4,y:0},{x:-3,y:0},{x:-2,y:0},{x:-1,y:0}]],I=[{coding:[{x:0,y:-1},{x:1,y:-1},{x:-1,y:0}],reference:[{x:0,y:-1},{x:1,y:-1},{x:-1,y:0},{x:0,y:0},{x:1,y:0},{x:-1,y:1},{x:0,y:1},{x:1,y:1}]},{coding:[{x:-1,y:-1},{x:0,y:-1},{x:1,y:-1},{x:-1,y:0}],reference:[{x:0,y:-1},{x:-1,y:0},{x:0,y:0},{x:1,y:0},{x:0,y:1},{x:1,y:1}]}],B=[39717,1941,229,405],R=[32,8],T=17
return x.prototype={onPageInformation:function(e){this.currentPageInfo=e
var t=e.width+7>>3,a=new Uint8Array(t*e.height)
if(e.defaultPixelValue)for(var r=0,i=a.length;r<i;r++)a[r]=255
this.buffer=a},drawBitmap:function(e,t){var a,r,i,s,o=this.currentPageInfo,c=e.width,l=e.height,h=o.width+7>>3,u=o.combinationOperatorOverride?e.combinationOperator:o.combinationOperator,f=this.buffer,d=128>>(7&e.x),g=e.y*h+(e.x>>3)
switch(u){case 0:for(a=0;a<l;a++){for(i=d,s=g,r=0;r<c;r++)t[a][r]&&(f[s]|=i),(i>>=1)||(i=128,s++)
g+=h}break
case 2:for(a=0;a<l;a++){for(i=d,s=g,r=0;r<c;r++)t[a][r]&&(f[s]^=i),(i>>=1)||(i=128,s++)
g+=h}break
default:n("JBIG2 error: operator "+u+" is not supported")}},onImmediateGenericRegion:function(e,a,r,i){var n=e.info,s=new t(a,r,i),o=f(e.mmr,n.width,n.height,e.template,e.prediction,null,e.at,s)
this.drawBitmap(n,o)},onImmediateLosslessGenericRegion:function(){this.onImmediateGenericRegion.apply(this,arguments)},onSymbolDictionary:function(e,a,r,i,s,o){e.huffman&&n("JBIG2 error: huffman is not supported")
var c=this.symbols
c||(this.symbols=c={})
for(var l=[],h=0,u=r.length;h<u;h++)l=l.concat(c[r[h]])
var f=new t(i,s,o)
c[a]=g(e.huffman,e.refinement,l,e.numberOfNewSymbols,e.numberOfExportedSymbols,void 0,e.template,e.at,e.refinementTemplate,e.refinementAt,f)},onImmediateTextRegion:function(e,a,r,i,n){for(var o=e.info,c=this.symbols,l=[],h=0,u=a.length;h<u;h++)l=l.concat(c[a[h]])
var f=s(l.length),d=new t(r,i,n),g=p(e.huffman,e.refinement,o.width,o.height,e.defaultPixelValue,e.numberOfSymbolInstances,e.stripSize,l,f,e.transposed,e.dsOffset,e.referenceCorner,e.combinationOperator,void 0,e.refinementTemplate,e.refinementAt,d)
this.drawBitmap(o,g)},onImmediateLosslessTextRegion:function(){this.onImmediateTextRegion.apply(this,arguments)}},C.prototype={parseChunks:function(e){return w(e)}},C}()
t.Jbig2Image=f},function(e,t,a){"use strict"
var r=a(0),i=r.warn,n=r.error,s=function(){function e(){this.decodeTransform=null,this.colorTransform=-1}function t(e,t){for(var a,r,i=0,n=[],s=16;s>0&&!e[s-1];)s--
n.push({children:[],index:0})
var o,c=n[0]
for(a=0;a<s;a++){for(r=0;r<e[a];r++){for(c=n.pop(),c.children[c.index]=t[i];c.index>0;)c=n.pop()
for(c.index++,n.push(c);n.length<=a;)n.push(o={children:[],index:0}),c.children[c.index]=o.children,c=o
i++}a+1<s&&(n.push(o={children:[],index:0}),c.children[c.index]=o.children,c=o)}return n[0].children}function a(e,t,a){return 64*((e.blocksPerLine+1)*t+a)}function r(e,t,r,s,o,c,u,f,d){function g(){if(L>0)return L--,E>>L&1
if(255===(E=e[t++])){var a=e[t++]
a&&n("JPEG error: unexpected marker "+(E<<8|a).toString(16))}return L=7,E>>>7}function p(e){for(var t=e;;){if("number"==typeof(t=t[g()]))return t
"object"!=typeof t&&n("JPEG error: invalid huffman sequence")}}function m(e){for(var t=0;e>0;)t=t<<1|g(),e--
return t}function b(e){if(1===e)return 1===g()?1:-1
var t=m(e)
return t>=1<<e-1?t:t+(-1<<e)+1}function v(e,t){var a=p(e.huffmanTableDC),r=0===a?0:b(a)
e.blockData[t]=e.pred+=r
for(var i=1;i<64;){var n=p(e.huffmanTableAC),s=15&n,o=n>>4
if(0!==s){i+=o
var c=h[i]
e.blockData[t+c]=b(s),i++}else{if(o<15)break
i+=16}}}function y(e,t){var a=p(e.huffmanTableDC),r=0===a?0:b(a)<<d
e.blockData[t]=e.pred+=r}function k(e,t){e.blockData[t]|=g()<<d}function w(e,t){if(D>0)return void D--
for(var a=c,r=u;a<=r;){var i=p(e.huffmanTableAC),n=15&i,s=i>>4
if(0!==n){a+=s
var o=h[a]
e.blockData[t+o]=b(n)*(1<<d),a++}else{if(s<15){D=m(s)+(1<<s)-1
break}a+=16}}}function x(e,t){for(var a,r,i=c,s=u,o=0;i<=s;){var l=h[i]
switch(F){case 0:r=p(e.huffmanTableAC),a=15&r,o=r>>4,0===a?o<15?(D=m(o)+(1<<o),F=4):(o=16,F=1):(1!==a&&n("JPEG error: invalid ACn encoding"),C=b(a),F=o?2:3)
continue
case 1:case 2:e.blockData[t+l]?e.blockData[t+l]+=g()<<d:0===--o&&(F=2===F?3:0)
break
case 3:e.blockData[t+l]?e.blockData[t+l]+=g()<<d:(e.blockData[t+l]=C<<d,F=0)
break
case 4:e.blockData[t+l]&&(e.blockData[t+l]+=g()<<d)}i++}4===F&&0===--D&&(F=0)}var C,S,A,I,B,R,T,O=r.mcusPerLine,P=r.progressive,M=t,E=0,L=0,D=0,F=0,q=s.length
T=P?0===c?0===f?y:k:0===f?w:x:v
var U,N,j=0
N=1===q?s[0].blocksPerLine*s[0].blocksPerColumn:O*r.mcusPerColumn
for(var _,z;j<N;){var H=o?Math.min(N-j,o):N
for(A=0;A<q;A++)s[A].pred=0
if(D=0,1===q)for(S=s[0],R=0;R<H;R++)!function(e,t,r){t(e,a(e,r/e.blocksPerLine|0,r%e.blocksPerLine))}(S,T,j),j++
else for(R=0;R<H;R++){for(A=0;A<q;A++)for(S=s[A],_=S.h,z=S.v,I=0;I<z;I++)for(B=0;B<_;B++)!function(e,t,r,i,n){var s=r/O|0,o=r%O
t(e,a(e,s*e.v+i,o*e.h+n))}(S,T,j,I,B)
j++}L=0,U=l(e,t),U&&U.invalid&&(i("decodeScan - unexpected MCU data, next marker is: "+U.invalid),t=U.offset)
var G=U&&U.marker
if((!G||G<=65280)&&n("JPEG error: marker was not found"),!(G>=65488&&G<=65495))break
t+=2}return U=l(e,t),U&&U.invalid&&(i("decodeScan - unexpected Scan data, next marker is: "+U.invalid),t=U.offset),t-M}function s(e,t,a){var r,i,s,o,c,l,h,y,k,w,x,C,S,A,I,B,R,T=e.quantizationTable,O=e.blockData
T||n("JPEG error: missing required Quantization Table.")
for(var P=0;P<64;P+=8)k=O[t+P],w=O[t+P+1],x=O[t+P+2],C=O[t+P+3],S=O[t+P+4],A=O[t+P+5],I=O[t+P+6],B=O[t+P+7],k*=T[P],0!=(w|x|C|S|A|I|B)?(w*=T[P+1],x*=T[P+2],C*=T[P+3],S*=T[P+4],A*=T[P+5],I*=T[P+6],B*=T[P+7],r=b*k+128>>8,i=b*S+128>>8,s=x,o=I,c=v*(w-B)+128>>8,y=v*(w+B)+128>>8,l=C<<4,h=A<<4,r=r+i+1>>1,i=r-i,R=s*m+o*p+128>>8,s=s*p-o*m+128>>8,o=R,c=c+h+1>>1,h=c-h,y=y+l+1>>1,l=y-l,r=r+o+1>>1,o=r-o,i=i+s+1>>1,s=i-s,R=c*g+y*d+2048>>12,c=c*d-y*g+2048>>12,y=R,R=l*f+h*u+2048>>12,l=l*u-h*f+2048>>12,h=R,a[P]=r+y,a[P+7]=r-y,a[P+1]=i+h,a[P+6]=i-h,a[P+2]=s+l,a[P+5]=s-l,a[P+3]=o+c,a[P+4]=o-c):(R=b*k+512>>10,a[P]=R,a[P+1]=R,a[P+2]=R,a[P+3]=R,a[P+4]=R,a[P+5]=R,a[P+6]=R,a[P+7]=R)
for(var M=0;M<8;++M)k=a[M],w=a[M+8],x=a[M+16],C=a[M+24],S=a[M+32],A=a[M+40],I=a[M+48],B=a[M+56],0!=(w|x|C|S|A|I|B)?(r=b*k+2048>>12,i=b*S+2048>>12,s=x,o=I,c=v*(w-B)+2048>>12,y=v*(w+B)+2048>>12,l=C,h=A,r=4112+(r+i+1>>1),i=r-i,R=s*m+o*p+2048>>12,s=s*p-o*m+2048>>12,o=R,c=c+h+1>>1,h=c-h,y=y+l+1>>1,l=y-l,r=r+o+1>>1,o=r-o,i=i+s+1>>1,s=i-s,R=c*g+y*d+2048>>12,c=c*d-y*g+2048>>12,y=R,R=l*f+h*u+2048>>12,l=l*u-h*f+2048>>12,h=R,k=r+y,B=r-y,w=i+h,I=i-h,x=s+l,A=s-l,C=o+c,S=o-c,k=k<16?0:k>=4080?255:k>>4,w=w<16?0:w>=4080?255:w>>4,x=x<16?0:x>=4080?255:x>>4,C=C<16?0:C>=4080?255:C>>4,S=S<16?0:S>=4080?255:S>>4,A=A<16?0:A>=4080?255:A>>4,I=I<16?0:I>=4080?255:I>>4,B=B<16?0:B>=4080?255:B>>4,O[t+M]=k,O[t+M+8]=w,O[t+M+16]=x,O[t+M+24]=C,O[t+M+32]=S,O[t+M+40]=A,O[t+M+48]=I,O[t+M+56]=B):(R=b*k+8192>>14,R=R<-2040?0:R>=2024?255:R+2056>>4,O[t+M]=R,O[t+M+8]=R,O[t+M+16]=R,O[t+M+24]=R,O[t+M+32]=R,O[t+M+40]=R,O[t+M+48]=R,O[t+M+56]=R)}function o(e,t){for(var r=t.blocksPerLine,i=t.blocksPerColumn,n=new Int16Array(64),o=0;o<i;o++)for(var c=0;c<r;c++){var l=a(t,o,c)
s(t,l,n)}return t.blockData}function c(e){return e<=0?0:e>=255?255:e}function l(e,t,a){function r(t){return e[t]<<8|e[t+1]}var i=e.length-1,n=a<t?a:t
if(t>=i)return null
var s=r(t)
if(s>=65472&&s<=65534)return{invalid:null,marker:s,offset:t}
for(var o=r(n);!(o>=65472&&o<=65534);){if(++n>=i)return null
o=r(n)}return{invalid:s.toString(16),marker:o,offset:n}}var h=new Uint8Array([0,1,8,16,9,2,3,10,17,24,32,25,18,11,4,5,12,19,26,33,40,48,41,34,27,20,13,6,7,14,21,28,35,42,49,56,57,50,43,36,29,22,15,23,30,37,44,51,58,59,52,45,38,31,39,46,53,60,61,54,47,55,62,63]),u=4017,f=799,d=3406,g=2276,p=1567,m=3784,b=5793,v=2896
return e.prototype={parse:function(e){function a(){var t=e[u]<<8|e[u+1]
return u+=2,t}var s,c,u=0,f=null,d=null,g=[],p=[],m=[],b=a()
for(65496!==b&&n("JPEG error: SOI not found"),b=a();65497!==b;){var v,y,k
switch(b){case 65504:case 65505:case 65506:case 65507:case 65508:case 65509:case 65510:case 65511:case 65512:case 65513:case 65514:case 65515:case 65516:case 65517:case 65518:case 65519:case 65534:var w=function(){var t=a(),r=u+t-2,n=l(e,r,u)
n&&n.invalid&&(i("readDataBlock - incorrect length, next marker is: "+n.invalid),r=n.offset)
var s=e.subarray(u,r)
return u+=s.length,s}()
65504===b&&74===w[0]&&70===w[1]&&73===w[2]&&70===w[3]&&0===w[4]&&(f={version:{major:w[5],minor:w[6]},densityUnits:w[7],xDensity:w[8]<<8|w[9],yDensity:w[10]<<8|w[11],thumbWidth:w[12],thumbHeight:w[13],thumbData:w.subarray(14,14+3*w[12]*w[13])}),65518===b&&65===w[0]&&100===w[1]&&111===w[2]&&98===w[3]&&101===w[4]&&(d={version:w[5]<<8|w[6],flags0:w[7]<<8|w[8],flags1:w[9]<<8|w[10],transformCode:w[11]})
break
case 65499:for(var x,C=a(),S=C+u-2;u<S;){var A=e[u++],I=new Uint16Array(64)
if(A>>4==0)for(y=0;y<64;y++)x=h[y],I[x]=e[u++]
else if(A>>4==1)for(y=0;y<64;y++)x=h[y],I[x]=a()
else n("JPEG error: DQT - invalid table spec")
g[15&A]=I}break
case 65472:case 65473:case 65474:s&&n("JPEG error: Only single frame JPEGs supported"),a(),s={},s.extended=65473===b,s.progressive=65474===b,s.precision=e[u++],s.scanLines=a(),s.samplesPerLine=a(),s.components=[],s.componentIds={}
var B,R=e[u++],T=0,O=0
for(v=0;v<R;v++){B=e[u]
var P=e[u+1]>>4,M=15&e[u+1]
T<P&&(T=P),O<M&&(O=M)
var E=e[u+2]
k=s.components.push({h:P,v:M,quantizationId:E,quantizationTable:null}),s.componentIds[B]=k-1,u+=3}s.maxH=T,s.maxV=O,function(e){for(var t=Math.ceil(e.samplesPerLine/8/e.maxH),a=Math.ceil(e.scanLines/8/e.maxV),r=0;r<e.components.length;r++){N=e.components[r]
var i=Math.ceil(Math.ceil(e.samplesPerLine/8)*N.h/e.maxH),n=Math.ceil(Math.ceil(e.scanLines/8)*N.v/e.maxV),s=t*N.h,o=a*N.v,c=64*o*(s+1)
N.blockData=new Int16Array(c),N.blocksPerLine=i,N.blocksPerColumn=n}e.mcusPerLine=t,e.mcusPerColumn=a}(s)
break
case 65476:var L=a()
for(v=2;v<L;){var D=e[u++],F=new Uint8Array(16),q=0
for(y=0;y<16;y++,u++)q+=F[y]=e[u]
var U=new Uint8Array(q)
for(y=0;y<q;y++,u++)U[y]=e[u]
v+=17+q,(D>>4==0?m:p)[15&D]=t(F,U)}break
case 65501:a(),c=a()
break
case 65498:a()
var N,j=e[u++],_=[]
for(v=0;v<j;v++){var z=s.componentIds[e[u++]]
N=s.components[z]
var H=e[u++]
N.huffmanTableDC=m[H>>4],N.huffmanTableAC=p[15&H],_.push(N)}var G=e[u++],X=e[u++],V=e[u++],W=r(e,u,s,_,c,G,X,V>>4,15&V)
u+=W
break
case 65535:255!==e[u]&&u--
break
default:if(255===e[u-3]&&e[u-2]>=192&&e[u-2]<=254){u-=3
break}n("JPEG error: unknown marker "+b.toString(16))}b=a()}for(this.width=s.samplesPerLine,this.height=s.scanLines,this.jfif=f,this.adobe=d,this.components=[],v=0;v<s.components.length;v++){N=s.components[v]
var K=g[N.quantizationId]
K&&(N.quantizationTable=K),this.components.push({output:o(s,N),scaleX:N.h/s.maxH,scaleY:N.v/s.maxV,blocksPerLine:N.blocksPerLine,blocksPerColumn:N.blocksPerColumn})}this.numComponents=this.components.length},_getLinearizedBlockData:function(e,t){var a,r,i,n,s,o,c,l,h,u,f,d=this.width/e,g=this.height/t,p=0,m=this.components.length,b=e*t*m,v=new Uint8Array(b),y=new Uint32Array(e)
for(c=0;c<m;c++){for(a=this.components[c],r=a.scaleX*d,i=a.scaleY*g,p=c,f=a.output,n=a.blocksPerLine+1<<3,s=0;s<e;s++)l=0|s*r,y[s]=(4294967288&l)<<3|7&l
for(o=0;o<t;o++)for(l=0|o*i,u=n*(4294967288&l)|(7&l)<<3,s=0;s<e;s++)v[p]=f[u+y[s]],p+=m}var k=this.decodeTransform
if(k)for(c=0;c<b;)for(l=0,h=0;l<m;l++,c++,h+=2)v[c]=(v[c]*k[h]>>8)+k[h+1]
return v},_isColorConversionNeeded:function(){return!(!this.adobe||!this.adobe.transformCode)||(3===this.numComponents?!(!this.adobe&&0===this.colorTransform):!this.adobe&&1===this.colorTransform)},_convertYccToRgb:function(e){for(var t,a,r,i=0,n=e.length;i<n;i+=3)t=e[i],a=e[i+1],r=e[i+2],e[i]=c(t-179.456+1.402*r),e[i+1]=c(t+135.459-.344*a-.714*r),e[i+2]=c(t-226.816+1.772*a)
return e},_convertYcckToRgb:function(e){for(var t,a,r,i,n=0,s=0,o=e.length;s<o;s+=4){t=e[s],a=e[s+1],r=e[s+2],i=e[s+3]
var l=a*(-660635669420364e-19*a+.000437130475926232*r-54080610064599e-18*t+.00048449797120281*i-.154362151871126)-122.67195406894+r*(-.000957964378445773*r+.000817076911346625*t-.00477271405408747*i+1.53380253221734)+t*(.000961250184130688*t-.00266257332283933*i+.48357088451265)+i*(-.000336197177618394*i+.484791561490776),h=107.268039397724+a*(219927104525741e-19*a-.000640992018297945*r+.000659397001245577*t+.000426105652938837*i-.176491792462875)+r*(-.000778269941513683*r+.00130872261408275*t+.000770482631801132*i-.151051492775562)+t*(.00126935368114843*t-.00265090189010898*i+.25802910206845)+i*(-.000318913117588328*i-.213742400323665),u=a*(-.000570115196973677*a-263409051004589e-19*r+.0020741088115012*t-.00288260236853442*i+.814272968359295)-20.810012546947+r*(-153496057440975e-19*r-.000132689043961446*t+.000560833691242812*i-.195152027534049)+t*(.00174418132927582*t-.00255243321439347*i+.116935020465145)+i*(-.000343531996510555*i+.24165260232407)
e[n++]=c(l),e[n++]=c(h),e[n++]=c(u)}return e},_convertYcckToCmyk:function(e){for(var t,a,r,i=0,n=e.length;i<n;i+=4)t=e[i],a=e[i+1],r=e[i+2],e[i]=c(434.456-t-1.402*r),e[i+1]=c(119.541-t+.344*a+.714*r),e[i+2]=c(481.816-t-1.772*a)
return e},_convertCmykToRgb:function(e){for(var t,a,r,i,n=0,s=-16581375,o=0,c=e.length;o<c;o+=4){t=e[o],a=e[o+1],r=e[o+2],i=e[o+3]
var l=t*(-4.387332384609988*t+54.48615194189176*a+18.82290502165302*r+212.25662451639585*i-72734.4411664936)+a*(1.7149763477362134*a-5.6096736904047315*r-17.873870861415444*i-1401.7366389350734)+r*(-2.5217340131683033*r-21.248923337353073*i+4465.541406466231)-i*(21.86122147463605*i+48317.86113160301),h=t*(8.841041422036149*t+60.118027045597366*a+6.871425592049007*r+31.159100130055922*i-20220.756542821975)+a*(-15.310361306967817*a+17.575251261109482*r+131.35250912493976*i-48691.05921601825)+r*(4.444339102852739*r+9.8632861493405*i-6341.191035517494)-i*(20.737325471181034*i+47890.15695978492),u=t*(.8842522430003296*t+8.078677503112928*a+30.89978309703729*r-.23883238689178934*i-3616.812083916688)+a*(10.49593273432072*a+63.02378494754052*r+50.606957656360734*i-28620.90484698408)+r*(.03296041114873217*r+115.60384449646641*i-49363.43385999684)-i*(22.33816807309886*i+45932.16563550634)
e[n++]=l>=0?255:l<=s?0:255+l*(1/255/255)|0,e[n++]=h>=0?255:h<=s?0:255+h*(1/255/255)|0,e[n++]=u>=0?255:u<=s?0:255+u*(1/255/255)|0}return e},getData:function(e,t,a){this.numComponents>4&&n("JPEG error: Unsupported color mode")
var r=this._getLinearizedBlockData(e,t)
if(1===this.numComponents&&a){for(var i=r.length,s=new Uint8Array(3*i),o=0,c=0;c<i;c++){var l=r[c]
s[o++]=l,s[o++]=l,s[o++]=l}return s}if(3===this.numComponents&&this._isColorConversionNeeded())return this._convertYccToRgb(r)
if(4===this.numComponents){if(this._isColorConversionNeeded())return a?this._convertYcckToRgb(r):this._convertYcckToCmyk(r)
if(a)return this._convertCmykToRgb(r)}return r}},e}()
t.JpegImage=s},function(e,t,a){"use strict"
var r=a(0),i=r.getLookupTableFactory,n=i(function(e){e.Courier=600,e["Courier-Bold"]=600,e["Courier-BoldOblique"]=600,e["Courier-Oblique"]=600,e.Helvetica=i(function(e){e.space=278,e.exclam=278,e.quotedbl=355,e.numbersign=556,e.dollar=556,e.percent=889,e.ampersand=667,e.quoteright=222,e.parenleft=333,e.parenright=333,e.asterisk=389,e.plus=584,e.comma=278,e.hyphen=333,e.period=278,e.slash=278,e.zero=556,e.one=556,e.two=556,e.three=556,e.four=556,e.five=556,e.six=556,e.seven=556,e.eight=556,e.nine=556,e.colon=278,e.semicolon=278,e.less=584,e.equal=584,e.greater=584,e.question=556,e.at=1015,e.A=667,e.B=667,e.C=722,e.D=722,e.E=667,e.F=611,e.G=778,e.H=722,e.I=278,e.J=500,e.K=667,e.L=556,e.M=833,e.N=722,e.O=778,e.P=667,e.Q=778,e.R=722,e.S=667,e.T=611,e.U=722,e.V=667,e.W=944,e.X=667,e.Y=667,e.Z=611,e.bracketleft=278,e.backslash=278,e.bracketright=278,e.asciicircum=469,e.underscore=556,e.quoteleft=222,e.a=556,e.b=556,e.c=500,e.d=556,e.e=556,e.f=278,e.g=556,e.h=556,e.i=222,e.j=222,e.k=500,e.l=222,e.m=833,e.n=556,e.o=556,e.p=556,e.q=556,e.r=333,e.s=500,e.t=278,e.u=556,e.v=500,e.w=722,e.x=500,e.y=500,e.z=500,e.braceleft=334,e.bar=260,e.braceright=334,e.asciitilde=584,e.exclamdown=333,e.cent=556,e.sterling=556,e.fraction=167,e.yen=556,e.florin=556,e.section=556,e.currency=556,e.quotesingle=191,e.quotedblleft=333,e.guillemotleft=556,e.guilsinglleft=333,e.guilsinglright=333,e.fi=500,e.fl=500,e.endash=556,e.dagger=556,e.daggerdbl=556,e.periodcentered=278,e.paragraph=537,e.bullet=350,e.quotesinglbase=222,e.quotedblbase=333,e.quotedblright=333,e.guillemotright=556,e.ellipsis=1e3,e.perthousand=1e3,e.questiondown=611,e.grave=333,e.acute=333,e.circumflex=333,e.tilde=333,e.macron=333,e.breve=333,e.dotaccent=333,e.dieresis=333,e.ring=333,e.cedilla=333,e.hungarumlaut=333,e.ogonek=333,e.caron=333,e.emdash=1e3,e.AE=1e3,e.ordfeminine=370,e.Lslash=556,e.Oslash=778,e.OE=1e3,e.ordmasculine=365,e.ae=889,e.dotlessi=278,e.lslash=222,e.oslash=611,e.oe=944,e.germandbls=611,e.Idieresis=278,e.eacute=556,e.abreve=556,e.uhungarumlaut=556,e.ecaron=556,e.Ydieresis=667,e.divide=584,e.Yacute=667,e.Acircumflex=667,e.aacute=556,e.Ucircumflex=722,e.yacute=500,e.scommaaccent=500,e.ecircumflex=556,e.Uring=722,e.Udieresis=722,e.aogonek=556,e.Uacute=722,e.uogonek=556,e.Edieresis=667,e.Dcroat=722,e.commaaccent=250,e.copyright=737,e.Emacron=667,e.ccaron=500,e.aring=556,e.Ncommaaccent=722,e.lacute=222,e.agrave=556,e.Tcommaaccent=611,e.Cacute=722,e.atilde=556,e.Edotaccent=667,e.scaron=500,e.scedilla=500,e.iacute=278,e.lozenge=471,e.Rcaron=722,e.Gcommaaccent=778,e.ucircumflex=556,e.acircumflex=556,e.Amacron=667,e.rcaron=333,e.ccedilla=500,e.Zdotaccent=611,e.Thorn=667,e.Omacron=778,e.Racute=722,e.Sacute=667,e.dcaron=643,e.Umacron=722
e.uring=556,e.threesuperior=333,e.Ograve=778,e.Agrave=667,e.Abreve=667,e.multiply=584,e.uacute=556,e.Tcaron=611,e.partialdiff=476,e.ydieresis=500,e.Nacute=722,e.icircumflex=278,e.Ecircumflex=667,e.adieresis=556,e.edieresis=556,e.cacute=500,e.nacute=556,e.umacron=556,e.Ncaron=722,e.Iacute=278,e.plusminus=584,e.brokenbar=260,e.registered=737,e.Gbreve=778,e.Idotaccent=278,e.summation=600,e.Egrave=667,e.racute=333,e.omacron=556,e.Zacute=611,e.Zcaron=611,e.greaterequal=549,e.Eth=722,e.Ccedilla=722,e.lcommaaccent=222,e.tcaron=317,e.eogonek=556,e.Uogonek=722,e.Aacute=667,e.Adieresis=667,e.egrave=556,e.zacute=500,e.iogonek=222,e.Oacute=778,e.oacute=556,e.amacron=556,e.sacute=500,e.idieresis=278,e.Ocircumflex=778,e.Ugrave=722,e.Delta=612,e.thorn=556,e.twosuperior=333,e.Odieresis=778,e.mu=556,e.igrave=278,e.ohungarumlaut=556,e.Eogonek=667,e.dcroat=556,e.threequarters=834,e.Scedilla=667,e.lcaron=299,e.Kcommaaccent=667,e.Lacute=556,e.trademark=1e3,e.edotaccent=556,e.Igrave=278,e.Imacron=278,e.Lcaron=556,e.onehalf=834,e.lessequal=549,e.ocircumflex=556,e.ntilde=556,e.Uhungarumlaut=722,e.Eacute=667,e.emacron=556,e.gbreve=556,e.onequarter=834,e.Scaron=667,e.Scommaaccent=667,e.Ohungarumlaut=778,e.degree=400,e.ograve=556,e.Ccaron=722,e.ugrave=556,e.radical=453,e.Dcaron=722,e.rcommaaccent=333,e.Ntilde=722,e.otilde=556,e.Rcommaaccent=722,e.Lcommaaccent=556,e.Atilde=667,e.Aogonek=667,e.Aring=667,e.Otilde=778,e.zdotaccent=500,e.Ecaron=667,e.Iogonek=278,e.kcommaaccent=500,e.minus=584,e.Icircumflex=278,e.ncaron=556,e.tcommaaccent=278,e.logicalnot=584,e.odieresis=556,e.udieresis=556,e.notequal=549,e.gcommaaccent=556,e.eth=556,e.zcaron=500,e.ncommaaccent=556,e.onesuperior=333,e.imacron=278,e.Euro=556}),e["Helvetica-Bold"]=i(function(e){e.space=278,e.exclam=333,e.quotedbl=474,e.numbersign=556,e.dollar=556,e.percent=889,e.ampersand=722,e.quoteright=278,e.parenleft=333,e.parenright=333,e.asterisk=389,e.plus=584,e.comma=278,e.hyphen=333,e.period=278,e.slash=278,e.zero=556,e.one=556,e.two=556,e.three=556,e.four=556,e.five=556,e.six=556,e.seven=556,e.eight=556,e.nine=556,e.colon=333,e.semicolon=333,e.less=584,e.equal=584,e.greater=584,e.question=611,e.at=975,e.A=722,e.B=722,e.C=722,e.D=722,e.E=667,e.F=611,e.G=778,e.H=722,e.I=278,e.J=556,e.K=722,e.L=611,e.M=833,e.N=722,e.O=778,e.P=667,e.Q=778,e.R=722,e.S=667,e.T=611,e.U=722,e.V=667,e.W=944,e.X=667,e.Y=667,e.Z=611,e.bracketleft=333,e.backslash=278,e.bracketright=333,e.asciicircum=584,e.underscore=556,e.quoteleft=278,e.a=556,e.b=611,e.c=556,e.d=611,e.e=556,e.f=333,e.g=611,e.h=611,e.i=278,e.j=278,e.k=556,e.l=278,e.m=889,e.n=611,e.o=611,e.p=611,e.q=611,e.r=389,e.s=556,e.t=333,e.u=611,e.v=556,e.w=778,e.x=556,e.y=556,e.z=500,e.braceleft=389,e.bar=280,e.braceright=389,e.asciitilde=584,e.exclamdown=333,e.cent=556,e.sterling=556,e.fraction=167,e.yen=556,e.florin=556,e.section=556,e.currency=556,e.quotesingle=238,e.quotedblleft=500,e.guillemotleft=556,e.guilsinglleft=333,e.guilsinglright=333,e.fi=611,e.fl=611,e.endash=556,e.dagger=556,e.daggerdbl=556,e.periodcentered=278,e.paragraph=556,e.bullet=350,e.quotesinglbase=278,e.quotedblbase=500,e.quotedblright=500,e.guillemotright=556,e.ellipsis=1e3,e.perthousand=1e3,e.questiondown=611,e.grave=333,e.acute=333,e.circumflex=333,e.tilde=333,e.macron=333,e.breve=333,e.dotaccent=333,e.dieresis=333,e.ring=333,e.cedilla=333,e.hungarumlaut=333,e.ogonek=333,e.caron=333,e.emdash=1e3,e.AE=1e3,e.ordfeminine=370,e.Lslash=611,e.Oslash=778,e.OE=1e3,e.ordmasculine=365,e.ae=889,e.dotlessi=278,e.lslash=278,e.oslash=611,e.oe=944,e.germandbls=611,e.Idieresis=278,e.eacute=556,e.abreve=556,e.uhungarumlaut=611,e.ecaron=556,e.Ydieresis=667,e.divide=584,e.Yacute=667,e.Acircumflex=722,e.aacute=556,e.Ucircumflex=722,e.yacute=556,e.scommaaccent=556,e.ecircumflex=556,e.Uring=722,e.Udieresis=722,e.aogonek=556,e.Uacute=722,e.uogonek=611,e.Edieresis=667,e.Dcroat=722,e.commaaccent=250,e.copyright=737,e.Emacron=667,e.ccaron=556,e.aring=556,e.Ncommaaccent=722,e.lacute=278,e.agrave=556,e.Tcommaaccent=611,e.Cacute=722,e.atilde=556,e.Edotaccent=667,e.scaron=556,e.scedilla=556,e.iacute=278,e.lozenge=494,e.Rcaron=722,e.Gcommaaccent=778,e.ucircumflex=611,e.acircumflex=556,e.Amacron=722,e.rcaron=389,e.ccedilla=556,e.Zdotaccent=611,e.Thorn=667,e.Omacron=778,e.Racute=722,e.Sacute=667,e.dcaron=743,e.Umacron=722
e.uring=611,e.threesuperior=333,e.Ograve=778,e.Agrave=722,e.Abreve=722,e.multiply=584,e.uacute=611,e.Tcaron=611,e.partialdiff=494,e.ydieresis=556,e.Nacute=722,e.icircumflex=278,e.Ecircumflex=667,e.adieresis=556,e.edieresis=556,e.cacute=556,e.nacute=611,e.umacron=611,e.Ncaron=722,e.Iacute=278,e.plusminus=584,e.brokenbar=280,e.registered=737,e.Gbreve=778,e.Idotaccent=278,e.summation=600,e.Egrave=667,e.racute=389,e.omacron=611,e.Zacute=611,e.Zcaron=611,e.greaterequal=549,e.Eth=722,e.Ccedilla=722,e.lcommaaccent=278,e.tcaron=389,e.eogonek=556,e.Uogonek=722,e.Aacute=722,e.Adieresis=722,e.egrave=556,e.zacute=500,e.iogonek=278,e.Oacute=778,e.oacute=611,e.amacron=556,e.sacute=556,e.idieresis=278,e.Ocircumflex=778,e.Ugrave=722,e.Delta=612,e.thorn=611,e.twosuperior=333,e.Odieresis=778,e.mu=611,e.igrave=278,e.ohungarumlaut=611,e.Eogonek=667,e.dcroat=611,e.threequarters=834,e.Scedilla=667,e.lcaron=400,e.Kcommaaccent=722,e.Lacute=611,e.trademark=1e3,e.edotaccent=556,e.Igrave=278,e.Imacron=278,e.Lcaron=611,e.onehalf=834,e.lessequal=549,e.ocircumflex=611,e.ntilde=611,e.Uhungarumlaut=722,e.Eacute=667,e.emacron=556,e.gbreve=611,e.onequarter=834,e.Scaron=667,e.Scommaaccent=667,e.Ohungarumlaut=778,e.degree=400,e.ograve=611,e.Ccaron=722,e.ugrave=611,e.radical=549,e.Dcaron=722,e.rcommaaccent=389,e.Ntilde=722,e.otilde=611,e.Rcommaaccent=722,e.Lcommaaccent=611,e.Atilde=722,e.Aogonek=722,e.Aring=722,e.Otilde=778,e.zdotaccent=500,e.Ecaron=667,e.Iogonek=278,e.kcommaaccent=556,e.minus=584,e.Icircumflex=278,e.ncaron=611,e.tcommaaccent=333,e.logicalnot=584,e.odieresis=611,e.udieresis=611,e.notequal=549,e.gcommaaccent=611,e.eth=611,e.zcaron=500,e.ncommaaccent=611,e.onesuperior=333,e.imacron=278,e.Euro=556}),e["Helvetica-BoldOblique"]=i(function(e){e.space=278,e.exclam=333,e.quotedbl=474,e.numbersign=556,e.dollar=556,e.percent=889,e.ampersand=722,e.quoteright=278,e.parenleft=333,e.parenright=333,e.asterisk=389,e.plus=584,e.comma=278,e.hyphen=333,e.period=278,e.slash=278,e.zero=556,e.one=556,e.two=556,e.three=556,e.four=556,e.five=556,e.six=556,e.seven=556,e.eight=556,e.nine=556,e.colon=333,e.semicolon=333,e.less=584,e.equal=584,e.greater=584,e.question=611,e.at=975,e.A=722,e.B=722,e.C=722,e.D=722,e.E=667,e.F=611,e.G=778,e.H=722,e.I=278,e.J=556,e.K=722,e.L=611,e.M=833,e.N=722,e.O=778,e.P=667,e.Q=778,e.R=722,e.S=667,e.T=611,e.U=722,e.V=667,e.W=944,e.X=667,e.Y=667,e.Z=611,e.bracketleft=333,e.backslash=278,e.bracketright=333,e.asciicircum=584,e.underscore=556,e.quoteleft=278,e.a=556,e.b=611,e.c=556,e.d=611,e.e=556,e.f=333,e.g=611,e.h=611,e.i=278,e.j=278,e.k=556,e.l=278,e.m=889,e.n=611,e.o=611,e.p=611,e.q=611,e.r=389,e.s=556,e.t=333,e.u=611,e.v=556,e.w=778,e.x=556,e.y=556,e.z=500,e.braceleft=389,e.bar=280,e.braceright=389,e.asciitilde=584,e.exclamdown=333,e.cent=556,e.sterling=556,e.fraction=167,e.yen=556,e.florin=556,e.section=556,e.currency=556,e.quotesingle=238,e.quotedblleft=500,e.guillemotleft=556,e.guilsinglleft=333,e.guilsinglright=333,e.fi=611,e.fl=611,e.endash=556,e.dagger=556,e.daggerdbl=556,e.periodcentered=278,e.paragraph=556,e.bullet=350,e.quotesinglbase=278,e.quotedblbase=500,e.quotedblright=500,e.guillemotright=556,e.ellipsis=1e3,e.perthousand=1e3,e.questiondown=611,e.grave=333,e.acute=333,e.circumflex=333,e.tilde=333,e.macron=333,e.breve=333,e.dotaccent=333,e.dieresis=333,e.ring=333,e.cedilla=333,e.hungarumlaut=333,e.ogonek=333,e.caron=333,e.emdash=1e3,e.AE=1e3,e.ordfeminine=370,e.Lslash=611,e.Oslash=778,e.OE=1e3,e.ordmasculine=365,e.ae=889,e.dotlessi=278,e.lslash=278,e.oslash=611,e.oe=944,e.germandbls=611,e.Idieresis=278,e.eacute=556,e.abreve=556,e.uhungarumlaut=611,e.ecaron=556,e.Ydieresis=667,e.divide=584,e.Yacute=667,e.Acircumflex=722,e.aacute=556,e.Ucircumflex=722,e.yacute=556,e.scommaaccent=556,e.ecircumflex=556,e.Uring=722,e.Udieresis=722,e.aogonek=556,e.Uacute=722,e.uogonek=611,e.Edieresis=667,e.Dcroat=722,e.commaaccent=250,e.copyright=737,e.Emacron=667,e.ccaron=556,e.aring=556,e.Ncommaaccent=722,e.lacute=278,e.agrave=556,e.Tcommaaccent=611,e.Cacute=722,e.atilde=556,e.Edotaccent=667,e.scaron=556,e.scedilla=556,e.iacute=278,e.lozenge=494,e.Rcaron=722,e.Gcommaaccent=778,e.ucircumflex=611,e.acircumflex=556,e.Amacron=722,e.rcaron=389,e.ccedilla=556,e.Zdotaccent=611,e.Thorn=667,e.Omacron=778,e.Racute=722,e.Sacute=667,e.dcaron=743,e.Umacron=722
e.uring=611,e.threesuperior=333,e.Ograve=778,e.Agrave=722,e.Abreve=722,e.multiply=584,e.uacute=611,e.Tcaron=611,e.partialdiff=494,e.ydieresis=556,e.Nacute=722,e.icircumflex=278,e.Ecircumflex=667,e.adieresis=556,e.edieresis=556,e.cacute=556,e.nacute=611,e.umacron=611,e.Ncaron=722,e.Iacute=278,e.plusminus=584,e.brokenbar=280,e.registered=737,e.Gbreve=778,e.Idotaccent=278,e.summation=600,e.Egrave=667,e.racute=389,e.omacron=611,e.Zacute=611,e.Zcaron=611,e.greaterequal=549,e.Eth=722,e.Ccedilla=722,e.lcommaaccent=278,e.tcaron=389,e.eogonek=556,e.Uogonek=722,e.Aacute=722,e.Adieresis=722,e.egrave=556,e.zacute=500,e.iogonek=278,e.Oacute=778,e.oacute=611,e.amacron=556,e.sacute=556,e.idieresis=278,e.Ocircumflex=778,e.Ugrave=722,e.Delta=612,e.thorn=611,e.twosuperior=333,e.Odieresis=778,e.mu=611,e.igrave=278,e.ohungarumlaut=611,e.Eogonek=667,e.dcroat=611,e.threequarters=834,e.Scedilla=667,e.lcaron=400,e.Kcommaaccent=722,e.Lacute=611,e.trademark=1e3,e.edotaccent=556,e.Igrave=278,e.Imacron=278,e.Lcaron=611,e.onehalf=834,e.lessequal=549,e.ocircumflex=611,e.ntilde=611,e.Uhungarumlaut=722,e.Eacute=667,e.emacron=556,e.gbreve=611,e.onequarter=834,e.Scaron=667,e.Scommaaccent=667,e.Ohungarumlaut=778,e.degree=400,e.ograve=611,e.Ccaron=722,e.ugrave=611,e.radical=549,e.Dcaron=722,e.rcommaaccent=389,e.Ntilde=722,e.otilde=611,e.Rcommaaccent=722,e.Lcommaaccent=611,e.Atilde=722,e.Aogonek=722,e.Aring=722,e.Otilde=778,e.zdotaccent=500,e.Ecaron=667,e.Iogonek=278,e.kcommaaccent=556,e.minus=584,e.Icircumflex=278,e.ncaron=611,e.tcommaaccent=333,e.logicalnot=584,e.odieresis=611,e.udieresis=611,e.notequal=549,e.gcommaaccent=611,e.eth=611,e.zcaron=500,e.ncommaaccent=611,e.onesuperior=333,e.imacron=278,e.Euro=556}),e["Helvetica-Oblique"]=i(function(e){e.space=278,e.exclam=278,e.quotedbl=355,e.numbersign=556,e.dollar=556,e.percent=889,e.ampersand=667,e.quoteright=222,e.parenleft=333,e.parenright=333,e.asterisk=389,e.plus=584,e.comma=278,e.hyphen=333,e.period=278,e.slash=278,e.zero=556,e.one=556,e.two=556,e.three=556,e.four=556,e.five=556,e.six=556,e.seven=556,e.eight=556,e.nine=556,e.colon=278,e.semicolon=278,e.less=584,e.equal=584,e.greater=584,e.question=556,e.at=1015,e.A=667,e.B=667,e.C=722,e.D=722,e.E=667,e.F=611,e.G=778,e.H=722,e.I=278,e.J=500,e.K=667,e.L=556,e.M=833,e.N=722,e.O=778,e.P=667,e.Q=778,e.R=722,e.S=667,e.T=611,e.U=722,e.V=667,e.W=944,e.X=667,e.Y=667,e.Z=611,e.bracketleft=278,e.backslash=278,e.bracketright=278,e.asciicircum=469,e.underscore=556,e.quoteleft=222,e.a=556,e.b=556,e.c=500,e.d=556,e.e=556,e.f=278,e.g=556,e.h=556,e.i=222,e.j=222,e.k=500,e.l=222,e.m=833,e.n=556,e.o=556,e.p=556,e.q=556,e.r=333,e.s=500,e.t=278,e.u=556,e.v=500,e.w=722,e.x=500,e.y=500,e.z=500,e.braceleft=334,e.bar=260,e.braceright=334,e.asciitilde=584,e.exclamdown=333,e.cent=556,e.sterling=556,e.fraction=167,e.yen=556,e.florin=556,e.section=556,e.currency=556,e.quotesingle=191,e.quotedblleft=333,e.guillemotleft=556,e.guilsinglleft=333,e.guilsinglright=333,e.fi=500,e.fl=500,e.endash=556,e.dagger=556,e.daggerdbl=556,e.periodcentered=278,e.paragraph=537,e.bullet=350,e.quotesinglbase=222,e.quotedblbase=333,e.quotedblright=333,e.guillemotright=556,e.ellipsis=1e3,e.perthousand=1e3,e.questiondown=611,e.grave=333,e.acute=333,e.circumflex=333,e.tilde=333,e.macron=333,e.breve=333,e.dotaccent=333,e.dieresis=333,e.ring=333,e.cedilla=333,e.hungarumlaut=333,e.ogonek=333,e.caron=333,e.emdash=1e3,e.AE=1e3,e.ordfeminine=370,e.Lslash=556,e.Oslash=778,e.OE=1e3,e.ordmasculine=365,e.ae=889,e.dotlessi=278,e.lslash=222,e.oslash=611,e.oe=944,e.germandbls=611,e.Idieresis=278,e.eacute=556,e.abreve=556,e.uhungarumlaut=556,e.ecaron=556,e.Ydieresis=667,e.divide=584,e.Yacute=667,e.Acircumflex=667,e.aacute=556,e.Ucircumflex=722,e.yacute=500,e.scommaaccent=500,e.ecircumflex=556,e.Uring=722,e.Udieresis=722,e.aogonek=556,e.Uacute=722,e.uogonek=556,e.Edieresis=667,e.Dcroat=722,e.commaaccent=250,e.copyright=737,e.Emacron=667,e.ccaron=500,e.aring=556,e.Ncommaaccent=722,e.lacute=222,e.agrave=556,e.Tcommaaccent=611,e.Cacute=722,e.atilde=556,e.Edotaccent=667,e.scaron=500,e.scedilla=500,e.iacute=278,e.lozenge=471,e.Rcaron=722,e.Gcommaaccent=778,e.ucircumflex=556,e.acircumflex=556,e.Amacron=667,e.rcaron=333,e.ccedilla=500,e.Zdotaccent=611,e.Thorn=667,e.Omacron=778,e.Racute=722,e.Sacute=667,e.dcaron=643,e.Umacron=722
e.uring=556,e.threesuperior=333,e.Ograve=778,e.Agrave=667,e.Abreve=667,e.multiply=584,e.uacute=556,e.Tcaron=611,e.partialdiff=476,e.ydieresis=500,e.Nacute=722,e.icircumflex=278,e.Ecircumflex=667,e.adieresis=556,e.edieresis=556,e.cacute=500,e.nacute=556,e.umacron=556,e.Ncaron=722,e.Iacute=278,e.plusminus=584,e.brokenbar=260,e.registered=737,e.Gbreve=778,e.Idotaccent=278,e.summation=600,e.Egrave=667,e.racute=333,e.omacron=556,e.Zacute=611,e.Zcaron=611,e.greaterequal=549,e.Eth=722,e.Ccedilla=722,e.lcommaaccent=222,e.tcaron=317,e.eogonek=556,e.Uogonek=722,e.Aacute=667,e.Adieresis=667,e.egrave=556,e.zacute=500,e.iogonek=222,e.Oacute=778,e.oacute=556,e.amacron=556,e.sacute=500,e.idieresis=278,e.Ocircumflex=778,e.Ugrave=722,e.Delta=612,e.thorn=556,e.twosuperior=333,e.Odieresis=778,e.mu=556,e.igrave=278,e.ohungarumlaut=556,e.Eogonek=667,e.dcroat=556,e.threequarters=834,e.Scedilla=667,e.lcaron=299,e.Kcommaaccent=667,e.Lacute=556,e.trademark=1e3,e.edotaccent=556,e.Igrave=278,e.Imacron=278,e.Lcaron=556,e.onehalf=834,e.lessequal=549,e.ocircumflex=556,e.ntilde=556,e.Uhungarumlaut=722,e.Eacute=667,e.emacron=556,e.gbreve=556,e.onequarter=834,e.Scaron=667,e.Scommaaccent=667,e.Ohungarumlaut=778,e.degree=400,e.ograve=556,e.Ccaron=722,e.ugrave=556,e.radical=453,e.Dcaron=722,e.rcommaaccent=333,e.Ntilde=722,e.otilde=556,e.Rcommaaccent=722,e.Lcommaaccent=556,e.Atilde=667,e.Aogonek=667,e.Aring=667,e.Otilde=778,e.zdotaccent=500,e.Ecaron=667,e.Iogonek=278,e.kcommaaccent=500,e.minus=584,e.Icircumflex=278,e.ncaron=556,e.tcommaaccent=278,e.logicalnot=584,e.odieresis=556,e.udieresis=556,e.notequal=549,e.gcommaaccent=556,e.eth=556,e.zcaron=500,e.ncommaaccent=556,e.onesuperior=333,e.imacron=278,e.Euro=556}),e.Symbol=i(function(e){e.space=250,e.exclam=333,e.universal=713,e.numbersign=500,e.existential=549,e.percent=833,e.ampersand=778,e.suchthat=439,e.parenleft=333,e.parenright=333,e.asteriskmath=500,e.plus=549,e.comma=250,e.minus=549,e.period=250,e.slash=278,e.zero=500,e.one=500,e.two=500,e.three=500,e.four=500,e.five=500,e.six=500,e.seven=500,e.eight=500,e.nine=500,e.colon=278,e.semicolon=278,e.less=549,e.equal=549,e.greater=549,e.question=444,e.congruent=549,e.Alpha=722,e.Beta=667,e.Chi=722,e.Delta=612,e.Epsilon=611,e.Phi=763,e.Gamma=603,e.Eta=722,e.Iota=333,e.theta1=631,e.Kappa=722,e.Lambda=686,e.Mu=889,e.Nu=722,e.Omicron=722,e.Pi=768,e.Theta=741,e.Rho=556,e.Sigma=592,e.Tau=611,e.Upsilon=690,e.sigma1=439,e.Omega=768,e.Xi=645,e.Psi=795,e.Zeta=611,e.bracketleft=333,e.therefore=863,e.bracketright=333,e.perpendicular=658,e.underscore=500,e.radicalex=500,e.alpha=631,e.beta=549,e.chi=549,e.delta=494,e.epsilon=439,e.phi=521,e.gamma=411,e.eta=603,e.iota=329,e.phi1=603,e.kappa=549,e.lambda=549,e.mu=576,e.nu=521,e.omicron=549,e.pi=549,e.theta=521,e.rho=549,e.sigma=603,e.tau=439,e.upsilon=576,e.omega1=713,e.omega=686,e.xi=493,e.psi=686,e.zeta=494,e.braceleft=480,e.bar=200,e.braceright=480,e.similar=549,e.Euro=750,e.Upsilon1=620,e.minute=247,e.lessequal=549,e.fraction=167,e.infinity=713,e.florin=500,e.club=753,e.diamond=753,e.heart=753,e.spade=753,e.arrowboth=1042,e.arrowleft=987,e.arrowup=603,e.arrowright=987,e.arrowdown=603,e.degree=400,e.plusminus=549,e.second=411,e.greaterequal=549,e.multiply=549,e.proportional=713,e.partialdiff=494,e.bullet=460,e.divide=549,e.notequal=549,e.equivalence=549,e.approxequal=549,e.ellipsis=1e3,e.arrowvertex=603,e.arrowhorizex=1e3,e.carriagereturn=658,e.aleph=823,e.Ifraktur=686,e.Rfraktur=795,e.weierstrass=987,e.circlemultiply=768,e.circleplus=768,e.emptyset=823,e.intersection=768,e.union=768,e.propersuperset=713,e.reflexsuperset=713,e.notsubset=713,e.propersubset=713,e.reflexsubset=713,e.element=713,e.notelement=713,e.angle=768,e.gradient=713,e.registerserif=790,e.copyrightserif=790,e.trademarkserif=890,e.product=823,e.radical=549,e.dotmath=250,e.logicalnot=713,e.logicaland=603,e.logicalor=603,e.arrowdblboth=1042,e.arrowdblleft=987,e.arrowdblup=603,e.arrowdblright=987,e.arrowdbldown=603,e.lozenge=494,e.angleleft=329,e.registersans=790,e.copyrightsans=790,e.trademarksans=786,e.summation=713,e.parenlefttp=384,e.parenleftex=384,e.parenleftbt=384,e.bracketlefttp=384,e.bracketleftex=384,e.bracketleftbt=384,e.bracelefttp=494,e.braceleftmid=494,e.braceleftbt=494,e.braceex=494,e.angleright=329,e.integral=274,e.integraltp=686,e.integralex=686,e.integralbt=686,e.parenrighttp=384,e.parenrightex=384,e.parenrightbt=384,e.bracketrighttp=384,e.bracketrightex=384,e.bracketrightbt=384,e.bracerighttp=494,e.bracerightmid=494,e.bracerightbt=494,e.apple=790}),e["Times-Roman"]=i(function(e){e.space=250,e.exclam=333,e.quotedbl=408,e.numbersign=500,e.dollar=500,e.percent=833,e.ampersand=778,e.quoteright=333,e.parenleft=333,e.parenright=333,e.asterisk=500,e.plus=564,e.comma=250,e.hyphen=333,e.period=250,e.slash=278,e.zero=500,e.one=500,e.two=500,e.three=500,e.four=500,e.five=500,e.six=500,e.seven=500,e.eight=500,e.nine=500,e.colon=278,e.semicolon=278,e.less=564,e.equal=564,e.greater=564,e.question=444,e.at=921,e.A=722,e.B=667,e.C=667,e.D=722,e.E=611,e.F=556,e.G=722,e.H=722,e.I=333,e.J=389,e.K=722,e.L=611,e.M=889,e.N=722,e.O=722,e.P=556,e.Q=722,e.R=667,e.S=556,e.T=611,e.U=722,e.V=722,e.W=944,e.X=722,e.Y=722,e.Z=611,e.bracketleft=333,e.backslash=278,e.bracketright=333,e.asciicircum=469,e.underscore=500,e.quoteleft=333,e.a=444,e.b=500,e.c=444,e.d=500,e.e=444,e.f=333,e.g=500,e.h=500,e.i=278,e.j=278,e.k=500,e.l=278,e.m=778,e.n=500,e.o=500,e.p=500,e.q=500,e.r=333,e.s=389,e.t=278,e.u=500,e.v=500,e.w=722,e.x=500,e.y=500,e.z=444,e.braceleft=480,e.bar=200,e.braceright=480,e.asciitilde=541,e.exclamdown=333,e.cent=500,e.sterling=500,e.fraction=167,e.yen=500,e.florin=500,e.section=500,e.currency=500,e.quotesingle=180,e.quotedblleft=444,e.guillemotleft=500,e.guilsinglleft=333,e.guilsinglright=333,e.fi=556,e.fl=556,e.endash=500,e.dagger=500,e.daggerdbl=500,e.periodcentered=250,e.paragraph=453,e.bullet=350,e.quotesinglbase=333,e.quotedblbase=444,e.quotedblright=444,e.guillemotright=500,e.ellipsis=1e3,e.perthousand=1e3,e.questiondown=444,e.grave=333,e.acute=333,e.circumflex=333,e.tilde=333,e.macron=333,e.breve=333,e.dotaccent=333,e.dieresis=333,e.ring=333,e.cedilla=333,e.hungarumlaut=333,e.ogonek=333,e.caron=333,e.emdash=1e3,e.AE=889,e.ordfeminine=276,e.Lslash=611,e.Oslash=722,e.OE=889,e.ordmasculine=310,e.ae=667,e.dotlessi=278,e.lslash=278,e.oslash=500,e.oe=722,e.germandbls=500,e.Idieresis=333,e.eacute=444,e.abreve=444,e.uhungarumlaut=500,e.ecaron=444,e.Ydieresis=722,e.divide=564,e.Yacute=722,e.Acircumflex=722,e.aacute=444,e.Ucircumflex=722,e.yacute=500,e.scommaaccent=389,e.ecircumflex=444,e.Uring=722,e.Udieresis=722,e.aogonek=444,e.Uacute=722,e.uogonek=500,e.Edieresis=611,e.Dcroat=722,e.commaaccent=250,e.copyright=760,e.Emacron=611,e.ccaron=444,e.aring=444,e.Ncommaaccent=722,e.lacute=278,e.agrave=444,e.Tcommaaccent=611,e.Cacute=667,e.atilde=444,e.Edotaccent=611,e.scaron=389,e.scedilla=389,e.iacute=278,e.lozenge=471,e.Rcaron=667,e.Gcommaaccent=722,e.ucircumflex=500,e.acircumflex=444,e.Amacron=722,e.rcaron=333,e.ccedilla=444,e.Zdotaccent=611,e.Thorn=556,e.Omacron=722,e.Racute=667,e.Sacute=556,e.dcaron=588,e.Umacron=722
e.uring=500,e.threesuperior=300,e.Ograve=722,e.Agrave=722,e.Abreve=722,e.multiply=564,e.uacute=500,e.Tcaron=611,e.partialdiff=476,e.ydieresis=500,e.Nacute=722,e.icircumflex=278,e.Ecircumflex=611,e.adieresis=444,e.edieresis=444,e.cacute=444,e.nacute=500,e.umacron=500,e.Ncaron=722,e.Iacute=333,e.plusminus=564,e.brokenbar=200,e.registered=760,e.Gbreve=722,e.Idotaccent=333,e.summation=600,e.Egrave=611,e.racute=333,e.omacron=500,e.Zacute=611,e.Zcaron=611,e.greaterequal=549,e.Eth=722,e.Ccedilla=667,e.lcommaaccent=278,e.tcaron=326,e.eogonek=444,e.Uogonek=722,e.Aacute=722,e.Adieresis=722,e.egrave=444,e.zacute=444,e.iogonek=278,e.Oacute=722,e.oacute=500,e.amacron=444,e.sacute=389,e.idieresis=278,e.Ocircumflex=722,e.Ugrave=722,e.Delta=612,e.thorn=500,e.twosuperior=300,e.Odieresis=722,e.mu=500,e.igrave=278,e.ohungarumlaut=500,e.Eogonek=611,e.dcroat=500,e.threequarters=750,e.Scedilla=556,e.lcaron=344,e.Kcommaaccent=722,e.Lacute=611,e.trademark=980,e.edotaccent=444,e.Igrave=333,e.Imacron=333,e.Lcaron=611,e.onehalf=750,e.lessequal=549,e.ocircumflex=500,e.ntilde=500,e.Uhungarumlaut=722,e.Eacute=611,e.emacron=444,e.gbreve=500,e.onequarter=750,e.Scaron=556,e.Scommaaccent=556,e.Ohungarumlaut=722,e.degree=400,e.ograve=500,e.Ccaron=667,e.ugrave=500,e.radical=453,e.Dcaron=722,e.rcommaaccent=333,e.Ntilde=722,e.otilde=500,e.Rcommaaccent=667,e.Lcommaaccent=611,e.Atilde=722,e.Aogonek=722,e.Aring=722,e.Otilde=722,e.zdotaccent=444,e.Ecaron=611,e.Iogonek=333,e.kcommaaccent=500,e.minus=564,e.Icircumflex=333,e.ncaron=500,e.tcommaaccent=278,e.logicalnot=564,e.odieresis=500,e.udieresis=500,e.notequal=549,e.gcommaaccent=500,e.eth=500,e.zcaron=444,e.ncommaaccent=500,e.onesuperior=300,e.imacron=278,e.Euro=500}),e["Times-Bold"]=i(function(e){e.space=250,e.exclam=333,e.quotedbl=555,e.numbersign=500,e.dollar=500,e.percent=1e3,e.ampersand=833,e.quoteright=333,e.parenleft=333,e.parenright=333,e.asterisk=500,e.plus=570,e.comma=250,e.hyphen=333,e.period=250,e.slash=278,e.zero=500,e.one=500,e.two=500,e.three=500,e.four=500,e.five=500,e.six=500,e.seven=500,e.eight=500,e.nine=500,e.colon=333,e.semicolon=333,e.less=570,e.equal=570,e.greater=570,e.question=500,e.at=930,e.A=722,e.B=667,e.C=722,e.D=722,e.E=667,e.F=611,e.G=778,e.H=778,e.I=389,e.J=500,e.K=778,e.L=667,e.M=944,e.N=722,e.O=778,e.P=611,e.Q=778,e.R=722,e.S=556,e.T=667,e.U=722,e.V=722,e.W=1e3,e.X=722,e.Y=722,e.Z=667,e.bracketleft=333,e.backslash=278,e.bracketright=333,e.asciicircum=581,e.underscore=500,e.quoteleft=333,e.a=500,e.b=556,e.c=444,e.d=556,e.e=444,e.f=333,e.g=500,e.h=556,e.i=278,e.j=333,e.k=556,e.l=278,e.m=833,e.n=556,e.o=500,e.p=556,e.q=556,e.r=444,e.s=389,e.t=333,e.u=556,e.v=500,e.w=722,e.x=500,e.y=500,e.z=444,e.braceleft=394,e.bar=220,e.braceright=394,e.asciitilde=520,e.exclamdown=333,e.cent=500,e.sterling=500,e.fraction=167,e.yen=500,e.florin=500,e.section=500,e.currency=500,e.quotesingle=278,e.quotedblleft=500,e.guillemotleft=500,e.guilsinglleft=333,e.guilsinglright=333,e.fi=556,e.fl=556,e.endash=500,e.dagger=500,e.daggerdbl=500,e.periodcentered=250,e.paragraph=540,e.bullet=350,e.quotesinglbase=333,e.quotedblbase=500,e.quotedblright=500,e.guillemotright=500,e.ellipsis=1e3,e.perthousand=1e3,e.questiondown=500,e.grave=333,e.acute=333,e.circumflex=333,e.tilde=333,e.macron=333,e.breve=333,e.dotaccent=333,e.dieresis=333,e.ring=333,e.cedilla=333,e.hungarumlaut=333,e.ogonek=333,e.caron=333,e.emdash=1e3,e.AE=1e3,e.ordfeminine=300,e.Lslash=667,e.Oslash=778,e.OE=1e3,e.ordmasculine=330,e.ae=722,e.dotlessi=278,e.lslash=278,e.oslash=500,e.oe=722,e.germandbls=556,e.Idieresis=389,e.eacute=444,e.abreve=500,e.uhungarumlaut=556,e.ecaron=444,e.Ydieresis=722,e.divide=570,e.Yacute=722,e.Acircumflex=722,e.aacute=500,e.Ucircumflex=722,e.yacute=500,e.scommaaccent=389,e.ecircumflex=444,e.Uring=722,e.Udieresis=722,e.aogonek=500,e.Uacute=722,e.uogonek=556,e.Edieresis=667,e.Dcroat=722,e.commaaccent=250,e.copyright=747,e.Emacron=667,e.ccaron=444,e.aring=500,e.Ncommaaccent=722,e.lacute=278,e.agrave=500,e.Tcommaaccent=667,e.Cacute=722,e.atilde=500,e.Edotaccent=667,e.scaron=389,e.scedilla=389,e.iacute=278,e.lozenge=494,e.Rcaron=722,e.Gcommaaccent=778,e.ucircumflex=556,e.acircumflex=500,e.Amacron=722,e.rcaron=444,e.ccedilla=444,e.Zdotaccent=667,e.Thorn=611,e.Omacron=778,e.Racute=722,e.Sacute=556,e.dcaron=672,e.Umacron=722
e.uring=556,e.threesuperior=300,e.Ograve=778,e.Agrave=722,e.Abreve=722,e.multiply=570,e.uacute=556,e.Tcaron=667,e.partialdiff=494,e.ydieresis=500,e.Nacute=722,e.icircumflex=278,e.Ecircumflex=667,e.adieresis=500,e.edieresis=444,e.cacute=444,e.nacute=556,e.umacron=556,e.Ncaron=722,e.Iacute=389,e.plusminus=570,e.brokenbar=220,e.registered=747,e.Gbreve=778,e.Idotaccent=389,e.summation=600,e.Egrave=667,e.racute=444,e.omacron=500,e.Zacute=667,e.Zcaron=667,e.greaterequal=549,e.Eth=722,e.Ccedilla=722,e.lcommaaccent=278,e.tcaron=416,e.eogonek=444,e.Uogonek=722,e.Aacute=722,e.Adieresis=722,e.egrave=444,e.zacute=444,e.iogonek=278,e.Oacute=778,e.oacute=500,e.amacron=500,e.sacute=389,e.idieresis=278,e.Ocircumflex=778,e.Ugrave=722,e.Delta=612,e.thorn=556,e.twosuperior=300,e.Odieresis=778,e.mu=556,e.igrave=278,e.ohungarumlaut=500,e.Eogonek=667,e.dcroat=556,e.threequarters=750,e.Scedilla=556,e.lcaron=394,e.Kcommaaccent=778,e.Lacute=667,e.trademark=1e3,e.edotaccent=444,e.Igrave=389,e.Imacron=389,e.Lcaron=667,e.onehalf=750,e.lessequal=549,e.ocircumflex=500,e.ntilde=556,e.Uhungarumlaut=722,e.Eacute=667,e.emacron=444,e.gbreve=500,e.onequarter=750,e.Scaron=556,e.Scommaaccent=556,e.Ohungarumlaut=778,e.degree=400,e.ograve=500,e.Ccaron=722,e.ugrave=556,e.radical=549,e.Dcaron=722,e.rcommaaccent=444,e.Ntilde=722,e.otilde=500,e.Rcommaaccent=722,e.Lcommaaccent=667,e.Atilde=722,e.Aogonek=722,e.Aring=722,e.Otilde=778,e.zdotaccent=444,e.Ecaron=667,e.Iogonek=389,e.kcommaaccent=556,e.minus=570,e.Icircumflex=389,e.ncaron=556,e.tcommaaccent=333,e.logicalnot=570,e.odieresis=500,e.udieresis=556,e.notequal=549,e.gcommaaccent=500,e.eth=500,e.zcaron=444,e.ncommaaccent=556,e.onesuperior=300,e.imacron=278,e.Euro=500}),e["Times-BoldItalic"]=i(function(e){e.space=250,e.exclam=389,e.quotedbl=555,e.numbersign=500,e.dollar=500,e.percent=833,e.ampersand=778,e.quoteright=333,e.parenleft=333,e.parenright=333,e.asterisk=500,e.plus=570,e.comma=250,e.hyphen=333,e.period=250,e.slash=278,e.zero=500,e.one=500,e.two=500,e.three=500,e.four=500,e.five=500,e.six=500,e.seven=500,e.eight=500,e.nine=500,e.colon=333,e.semicolon=333,e.less=570,e.equal=570,e.greater=570,e.question=500,e.at=832,e.A=667,e.B=667,e.C=667,e.D=722,e.E=667,e.F=667,e.G=722,e.H=778,e.I=389,e.J=500,e.K=667,e.L=611,e.M=889,e.N=722,e.O=722,e.P=611,e.Q=722,e.R=667,e.S=556,e.T=611,e.U=722,e.V=667,e.W=889,e.X=667,e.Y=611,e.Z=611,e.bracketleft=333,e.backslash=278,e.bracketright=333,e.asciicircum=570,e.underscore=500,e.quoteleft=333,e.a=500,e.b=500,e.c=444,e.d=500,e.e=444,e.f=333,e.g=500,e.h=556,e.i=278,e.j=278,e.k=500,e.l=278,e.m=778,e.n=556,e.o=500,e.p=500,e.q=500,e.r=389,e.s=389,e.t=278,e.u=556,e.v=444,e.w=667,e.x=500,e.y=444,e.z=389,e.braceleft=348,e.bar=220,e.braceright=348,e.asciitilde=570,e.exclamdown=389,e.cent=500,e.sterling=500,e.fraction=167,e.yen=500,e.florin=500,e.section=500,e.currency=500,e.quotesingle=278,e.quotedblleft=500,e.guillemotleft=500,e.guilsinglleft=333,e.guilsinglright=333,e.fi=556,e.fl=556,e.endash=500,e.dagger=500,e.daggerdbl=500,e.periodcentered=250,e.paragraph=500,e.bullet=350,e.quotesinglbase=333,e.quotedblbase=500,e.quotedblright=500,e.guillemotright=500,e.ellipsis=1e3,e.perthousand=1e3,e.questiondown=500,e.grave=333,e.acute=333,e.circumflex=333,e.tilde=333,e.macron=333,e.breve=333,e.dotaccent=333,e.dieresis=333,e.ring=333,e.cedilla=333,e.hungarumlaut=333,e.ogonek=333,e.caron=333,e.emdash=1e3,e.AE=944,e.ordfeminine=266,e.Lslash=611,e.Oslash=722,e.OE=944,e.ordmasculine=300,e.ae=722,e.dotlessi=278,e.lslash=278,e.oslash=500,e.oe=722,e.germandbls=500,e.Idieresis=389,e.eacute=444,e.abreve=500,e.uhungarumlaut=556,e.ecaron=444,e.Ydieresis=611,e.divide=570,e.Yacute=611,e.Acircumflex=667,e.aacute=500,e.Ucircumflex=722,e.yacute=444,e.scommaaccent=389,e.ecircumflex=444,e.Uring=722,e.Udieresis=722,e.aogonek=500,e.Uacute=722,e.uogonek=556,e.Edieresis=667,e.Dcroat=722,e.commaaccent=250,e.copyright=747,e.Emacron=667,e.ccaron=444,e.aring=500,e.Ncommaaccent=722,e.lacute=278,e.agrave=500,e.Tcommaaccent=611,e.Cacute=667,e.atilde=500,e.Edotaccent=667,e.scaron=389,e.scedilla=389,e.iacute=278,e.lozenge=494,e.Rcaron=667,e.Gcommaaccent=722,e.ucircumflex=556,e.acircumflex=500,e.Amacron=667,e.rcaron=389,e.ccedilla=444,e.Zdotaccent=611,e.Thorn=611,e.Omacron=722,e.Racute=667,e.Sacute=556,e.dcaron=608,e.Umacron=722
e.uring=556,e.threesuperior=300,e.Ograve=722,e.Agrave=667,e.Abreve=667,e.multiply=570,e.uacute=556,e.Tcaron=611,e.partialdiff=494,e.ydieresis=444,e.Nacute=722,e.icircumflex=278,e.Ecircumflex=667,e.adieresis=500,e.edieresis=444,e.cacute=444,e.nacute=556,e.umacron=556,e.Ncaron=722,e.Iacute=389,e.plusminus=570,e.brokenbar=220,e.registered=747,e.Gbreve=722,e.Idotaccent=389,e.summation=600,e.Egrave=667,e.racute=389,e.omacron=500,e.Zacute=611,e.Zcaron=611,e.greaterequal=549,e.Eth=722,e.Ccedilla=667,e.lcommaaccent=278,e.tcaron=366,e.eogonek=444,e.Uogonek=722,e.Aacute=667,e.Adieresis=667,e.egrave=444,e.zacute=389,e.iogonek=278,e.Oacute=722,e.oacute=500,e.amacron=500,e.sacute=389,e.idieresis=278,e.Ocircumflex=722,e.Ugrave=722,e.Delta=612,e.thorn=500,e.twosuperior=300,e.Odieresis=722,e.mu=576,e.igrave=278,e.ohungarumlaut=500,e.Eogonek=667,e.dcroat=500,e.threequarters=750,e.Scedilla=556,e.lcaron=382,e.Kcommaaccent=667,e.Lacute=611,e.trademark=1e3,e.edotaccent=444,e.Igrave=389,e.Imacron=389,e.Lcaron=611,e.onehalf=750,e.lessequal=549,e.ocircumflex=500,e.ntilde=556,e.Uhungarumlaut=722,e.Eacute=667,e.emacron=444,e.gbreve=500,e.onequarter=750,e.Scaron=556,e.Scommaaccent=556,e.Ohungarumlaut=722,e.degree=400,e.ograve=500,e.Ccaron=667,e.ugrave=556,e.radical=549,e.Dcaron=722,e.rcommaaccent=389,e.Ntilde=722,e.otilde=500,e.Rcommaaccent=667,e.Lcommaaccent=611,e.Atilde=667,e.Aogonek=667,e.Aring=667,e.Otilde=722,e.zdotaccent=389,e.Ecaron=667,e.Iogonek=389,e.kcommaaccent=500,e.minus=606,e.Icircumflex=389,e.ncaron=556,e.tcommaaccent=278,e.logicalnot=606,e.odieresis=500,e.udieresis=556,e.notequal=549,e.gcommaaccent=500,e.eth=500,e.zcaron=389,e.ncommaaccent=556,e.onesuperior=300,e.imacron=278,e.Euro=500}),e["Times-Italic"]=i(function(e){e.space=250,e.exclam=333,e.quotedbl=420,e.numbersign=500,e.dollar=500,e.percent=833,e.ampersand=778,e.quoteright=333,e.parenleft=333,e.parenright=333,e.asterisk=500,e.plus=675,e.comma=250,e.hyphen=333,e.period=250,e.slash=278,e.zero=500,e.one=500,e.two=500,e.three=500,e.four=500,e.five=500,e.six=500,e.seven=500,e.eight=500,e.nine=500,e.colon=333,e.semicolon=333,e.less=675,e.equal=675,e.greater=675,e.question=500,e.at=920,e.A=611,e.B=611,e.C=667,e.D=722,e.E=611,e.F=611,e.G=722,e.H=722,e.I=333,e.J=444,e.K=667,e.L=556,e.M=833,e.N=667,e.O=722,e.P=611,e.Q=722,e.R=611,e.S=500,e.T=556,e.U=722,e.V=611,e.W=833,e.X=611,e.Y=556,e.Z=556,e.bracketleft=389,e.backslash=278,e.bracketright=389,e.asciicircum=422,e.underscore=500,e.quoteleft=333,e.a=500,e.b=500,e.c=444,e.d=500,e.e=444,e.f=278,e.g=500,e.h=500,e.i=278,e.j=278,e.k=444,e.l=278,e.m=722,e.n=500,e.o=500,e.p=500,e.q=500,e.r=389,e.s=389,e.t=278,e.u=500,e.v=444,e.w=667,e.x=444,e.y=444,e.z=389,e.braceleft=400,e.bar=275,e.braceright=400,e.asciitilde=541,e.exclamdown=389,e.cent=500,e.sterling=500,e.fraction=167,e.yen=500,e.florin=500,e.section=500,e.currency=500,e.quotesingle=214,e.quotedblleft=556,e.guillemotleft=500,e.guilsinglleft=333,e.guilsinglright=333,e.fi=500,e.fl=500,e.endash=500,e.dagger=500,e.daggerdbl=500,e.periodcentered=250,e.paragraph=523,e.bullet=350,e.quotesinglbase=333,e.quotedblbase=556,e.quotedblright=556,e.guillemotright=500,e.ellipsis=889,e.perthousand=1e3,e.questiondown=500,e.grave=333,e.acute=333,e.circumflex=333,e.tilde=333,e.macron=333,e.breve=333,e.dotaccent=333,e.dieresis=333,e.ring=333,e.cedilla=333,e.hungarumlaut=333,e.ogonek=333,e.caron=333,e.emdash=889,e.AE=889,e.ordfeminine=276,e.Lslash=556,e.Oslash=722,e.OE=944,e.ordmasculine=310,e.ae=667,e.dotlessi=278,e.lslash=278,e.oslash=500,e.oe=667,e.germandbls=500,e.Idieresis=333,e.eacute=444,e.abreve=500,e.uhungarumlaut=500,e.ecaron=444,e.Ydieresis=556,e.divide=675,e.Yacute=556,e.Acircumflex=611,e.aacute=500,e.Ucircumflex=722,e.yacute=444,e.scommaaccent=389,e.ecircumflex=444,e.Uring=722,e.Udieresis=722,e.aogonek=500,e.Uacute=722,e.uogonek=500,e.Edieresis=611,e.Dcroat=722,e.commaaccent=250,e.copyright=760,e.Emacron=611,e.ccaron=444,e.aring=500,e.Ncommaaccent=667,e.lacute=278,e.agrave=500,e.Tcommaaccent=556,e.Cacute=667,e.atilde=500,e.Edotaccent=611,e.scaron=389,e.scedilla=389,e.iacute=278,e.lozenge=471,e.Rcaron=611,e.Gcommaaccent=722,e.ucircumflex=500,e.acircumflex=500,e.Amacron=611,e.rcaron=389,e.ccedilla=444,e.Zdotaccent=556,e.Thorn=611,e.Omacron=722,e.Racute=611,e.Sacute=500,e.dcaron=544,e.Umacron=722
e.uring=500,e.threesuperior=300,e.Ograve=722,e.Agrave=611,e.Abreve=611,e.multiply=675,e.uacute=500,e.Tcaron=556,e.partialdiff=476,e.ydieresis=444,e.Nacute=667,e.icircumflex=278,e.Ecircumflex=611,e.adieresis=500,e.edieresis=444,e.cacute=444,e.nacute=500,e.umacron=500,e.Ncaron=667,e.Iacute=333,e.plusminus=675,e.brokenbar=275,e.registered=760,e.Gbreve=722,e.Idotaccent=333,e.summation=600,e.Egrave=611,e.racute=389,e.omacron=500,e.Zacute=556,e.Zcaron=556,e.greaterequal=549,e.Eth=722,e.Ccedilla=667,e.lcommaaccent=278,e.tcaron=300,e.eogonek=444,e.Uogonek=722,e.Aacute=611,e.Adieresis=611,e.egrave=444,e.zacute=389,e.iogonek=278,e.Oacute=722,e.oacute=500,e.amacron=500,e.sacute=389,e.idieresis=278,e.Ocircumflex=722,e.Ugrave=722,e.Delta=612,e.thorn=500,e.twosuperior=300,e.Odieresis=722,e.mu=500,e.igrave=278,e.ohungarumlaut=500,e.Eogonek=611,e.dcroat=500,e.threequarters=750,e.Scedilla=500,e.lcaron=300,e.Kcommaaccent=667,e.Lacute=556,e.trademark=980,e.edotaccent=444,e.Igrave=333,e.Imacron=333,e.Lcaron=611,e.onehalf=750,e.lessequal=549,e.ocircumflex=500,e.ntilde=500,e.Uhungarumlaut=722,e.Eacute=611,e.emacron=444,e.gbreve=500,e.onequarter=750,e.Scaron=500,e.Scommaaccent=500,e.Ohungarumlaut=722,e.degree=400,e.ograve=500,e.Ccaron=667,e.ugrave=500,e.radical=453,e.Dcaron=722,e.rcommaaccent=389,e.Ntilde=667,e.otilde=500,e.Rcommaaccent=611,e.Lcommaaccent=556,e.Atilde=611,e.Aogonek=611,e.Aring=611,e.Otilde=722,e.zdotaccent=389,e.Ecaron=611,e.Iogonek=333,e.kcommaaccent=444,e.minus=675,e.Icircumflex=333,e.ncaron=500,e.tcommaaccent=278,e.logicalnot=675,e.odieresis=500,e.udieresis=500,e.notequal=549,e.gcommaaccent=500,e.eth=500,e.zcaron=389,e.ncommaaccent=500,e.onesuperior=300,e.imacron=278,e.Euro=500}),e.ZapfDingbats=i(function(e){e.space=278,e.a1=974,e.a2=961,e.a202=974,e.a3=980,e.a4=719,e.a5=789,e.a119=790,e.a118=791,e.a117=690,e.a11=960,e.a12=939,e.a13=549,e.a14=855,e.a15=911,e.a16=933,e.a105=911,e.a17=945,e.a18=974,e.a19=755,e.a20=846,e.a21=762,e.a22=761,e.a23=571,e.a24=677,e.a25=763,e.a26=760,e.a27=759,e.a28=754,e.a6=494,e.a7=552,e.a8=537,e.a9=577,e.a10=692,e.a29=786,e.a30=788,e.a31=788,e.a32=790,e.a33=793,e.a34=794,e.a35=816,e.a36=823,e.a37=789,e.a38=841,e.a39=823,e.a40=833,e.a41=816,e.a42=831,e.a43=923,e.a44=744,e.a45=723,e.a46=749,e.a47=790,e.a48=792,e.a49=695,e.a50=776,e.a51=768,e.a52=792,e.a53=759,e.a54=707,e.a55=708,e.a56=682,e.a57=701,e.a58=826,e.a59=815,e.a60=789,e.a61=789,e.a62=707,e.a63=687,e.a64=696,e.a65=689,e.a66=786,e.a67=787,e.a68=713,e.a69=791,e.a70=785,e.a71=791,e.a72=873,e.a73=761,e.a74=762,e.a203=762,e.a75=759,e.a204=759,e.a76=892,e.a77=892,e.a78=788,e.a79=784,e.a81=438,e.a82=138,e.a83=277,e.a84=415,e.a97=392,e.a98=392,e.a99=668,e.a100=668,e.a89=390,e.a90=390,e.a93=317,e.a94=317,e.a91=276,e.a92=276,e.a205=509,e.a85=509,e.a206=410,e.a86=410,e.a87=234,e.a88=234,e.a95=334,e.a96=334,e.a101=732,e.a102=544,e.a103=544,e.a104=910,e.a106=667,e.a107=760,e.a108=760,e.a112=776,e.a111=595,e.a110=694,e.a109=626,e.a120=788,e.a121=788,e.a122=788,e.a123=788,e.a124=788,e.a125=788,e.a126=788,e.a127=788,e.a128=788,e.a129=788,e.a130=788,e.a131=788,e.a132=788,e.a133=788,e.a134=788,e.a135=788,e.a136=788,e.a137=788,e.a138=788,e.a139=788,e.a140=788,e.a141=788,e.a142=788,e.a143=788,e.a144=788,e.a145=788,e.a146=788,e.a147=788,e.a148=788,e.a149=788,e.a150=788,e.a151=788,e.a152=788,e.a153=788,e.a154=788,e.a155=788,e.a156=788,e.a157=788,e.a158=788,e.a159=788,e.a160=894,e.a161=838,e.a163=1016,e.a164=458,e.a196=748,e.a165=924,e.a192=748,e.a166=918,e.a167=927,e.a168=928,e.a169=928,e.a170=834,e.a171=873,e.a172=828,e.a173=924,e.a162=924,e.a174=917,e.a175=930,e.a176=931,e.a177=463,e.a178=883,e.a179=836,e.a193=836,e.a180=867,e.a199=867,e.a181=696,e.a200=696,e.a182=874,e.a201=874,e.a183=760,e.a184=946,e.a197=771,e.a185=865,e.a194=771,e.a198=888,e.a186=967,e.a195=888,e.a187=831,e.a188=873,e.a189=927
e.a190=970,e.a191=918})})
t.getMetrics=n},function(e,t,a){"use strict"
var r=a(0),i=r.Uint32ArrayView,n=function(e){function t(e){this.h1=e?4294967295&e:3285377520,this.h2=e?4294967295&e:3285377520}var a=!1
try{new Uint32Array(new Uint8Array(5).buffer,0,1)}catch(e){a=!0}return t.prototype={update:function(e){var t,r=a
if("string"==typeof e){var n=new Uint8Array(2*e.length),s=0
for(t=0;t<e.length;t++){var o=e.charCodeAt(t)
o<=255?n[s++]=o:(n[s++]=o>>>8,n[s++]=255&o)}}else if(e instanceof Uint8Array)n=e,s=n.length
else{if(!("object"==typeof e&&"length"in e))throw new Error("Wrong data format in MurmurHash3_64_update. Input must be a string or array.")
n=e,s=n.length,r=!0}var c=s>>2,l=s-4*c,h=r?new i(n,c):new Uint32Array(n.buffer,0,c),u=0,f=0,d=this.h1,g=this.h2,p=3432918353,m=461845907
for(t=0;t<c;t++)1&t?(u=h[t],u=u*p&4294901760|11601*u&65535,u=u<<15|u>>>17,u=u*m&4294901760|13715*u&65535,d^=u,d=d<<13|d>>>19,d=5*d+3864292196):(f=h[t],f=f*p&4294901760|11601*f&65535,f=f<<15|f>>>17,f=f*m&4294901760|13715*f&65535,g^=f,g=g<<13|g>>>19,g=5*g+3864292196)
switch(u=0,l){case 3:u^=n[4*c+2]<<16
case 2:u^=n[4*c+1]<<8
case 1:u^=n[4*c],u=u*p&4294901760|11601*u&65535,u=u<<15|u>>>17,u=u*m&4294901760|13715*u&65535,1&c?d^=u:g^=u}return this.h1=d,this.h2=g,this},hexdigest:function(){var e=this.h1,t=this.h2
e^=t>>>1,e=3981806797*e&4294901760|36045*e&65535,t=4283543511*t&4294901760|(2950163797*(t<<16|e>>>16)&4294901760)>>>16,e^=t>>>1,e=444984403*e&4294901760|60499*e&65535,t=3301882366*t&4294901760|(3120437893*(t<<16|e>>>16)&4294901760)>>>16,e^=t>>>1
for(var a=0,r=[e,t],i="";a<r.length;a++){for(var n=(r[a]>>>0).toString(16);n.length<8;)n="0"+n
i+=n}return i}},t}()
t.MurmurHash3_64=n},function(e,t,a){"use strict"
function r(e,t,a){return["TilingPattern",a,e,t.getArray("Matrix"),t.getArray("BBox"),t.get("XStep"),t.get("YStep"),t.get("PaintType"),t.get("TilingType")]}var i=a(0),n=a(1),s=a(6),o=a(3),c=i.UNSUPPORTED_FEATURES,l=i.MissingDataException,h=i.Util,u=i.assert,f=i.error,d=i.info,g=i.warn,p=n.isStream,m=s.PDFFunction,b=o.ColorSpace,v={FUNCTION_BASED:1,AXIAL:2,RADIAL:3,FREE_FORM_MESH:4,LATTICE_FORM_MESH:5,COONS_PATCH_MESH:6,TENSOR_PATCH_MESH:7},y=function(){function e(){f("should not call Pattern constructor")}return e.prototype={getPattern:function(e){f("Should not call Pattern.getStyle: "+e)}},e.parseShading=function(e,t,a,r,i){var n=p(e)?e.dict:e,s=n.get("ShadingType")
try{switch(s){case v.AXIAL:case v.RADIAL:return new k.RadialAxial(n,t,a,r)
case v.FREE_FORM_MESH:case v.LATTICE_FORM_MESH:case v.COONS_PATCH_MESH:case v.TENSOR_PATCH_MESH:return new k.Mesh(e,t,a,r)
default:throw new Error("Unsupported ShadingType: "+s)}}catch(e){if(e instanceof l)throw e
return i.send("UnsupportedFeature",{featureId:c.shadingPattern}),g(e),new k.Dummy}},e}(),k={}
k.SMALL_NUMBER=1e-6,k.RadialAxial=function(){function e(e,t,a,r){this.matrix=t,this.coordsArr=e.getArray("Coords"),this.shadingType=e.get("ShadingType"),this.type="Pattern"
var i=e.get("ColorSpace","CS")
i=b.parse(i,a,r),this.cs=i
var n=0,s=1
if(e.has("Domain")){var o=e.getArray("Domain")
n=o[0],s=o[1]}var c=!1,l=!1
if(e.has("Extend")){var u=e.getArray("Extend")
c=u[0],l=u[1]}if(!(this.shadingType!==v.RADIAL||c&&l)){var f=this.coordsArr[0],p=this.coordsArr[1],y=this.coordsArr[2],w=this.coordsArr[3],x=this.coordsArr[4],C=this.coordsArr[5],S=Math.sqrt((f-w)*(f-w)+(p-x)*(p-x))
y<=C+S&&C<=y+S&&g("Unsupported radial gradient.")}this.extendStart=c,this.extendEnd=l
var A=e.get("Function"),I=m.parseArray(a,A),B=s-n,R=B/10,T=this.colorStops=[]
if(n>=s||R<=0)return void d("Bad shading domain.")
for(var O,P=new Float32Array(i.numComps),M=new Float32Array(1),E=n;E<=s;E+=R){M[0]=E,I(M,0,P,0),O=i.getRgb(P,0)
var L=h.makeCssRgb(O[0],O[1],O[2])
T.push([(E-n)/B,L])}var D="transparent"
e.has("Background")&&(O=i.getRgb(e.get("Background"),0),D=h.makeCssRgb(O[0],O[1],O[2])),c||(T.unshift([0,D]),T[1][0]+=k.SMALL_NUMBER),l||(T[T.length-1][0]-=k.SMALL_NUMBER,T.push([1,D])),this.colorStops=T}return e.prototype={getIR:function(){var e,t,a,r,i,n=this.coordsArr,s=this.shadingType
s===v.AXIAL?(t=[n[0],n[1]],a=[n[2],n[3]],r=null,i=null,e="axial"):s===v.RADIAL?(t=[n[0],n[1]],a=[n[3],n[4]],r=n[2],i=n[5],e="radial"):f("getPattern type unknown: "+s)
var o=this.matrix
if(o&&(t=h.applyTransform(t,o),a=h.applyTransform(a,o),s===v.RADIAL)){var c=h.singularValueDecompose2dScale(o)
r*=c[0],i*=c[1]}return["RadialAxial",e,this.colorStops,t,a,r,i]}},e}(),k.Mesh=function(){function e(e,t){this.stream=e,this.context=t,this.buffer=0,this.bufferLength=0
var a=t.numComps
this.tmpCompsBuf=new Float32Array(a)
var r=t.colorSpace.numComps
this.tmpCsCompsBuf=t.colorFn?new Float32Array(r):this.tmpCompsBuf}function t(e,t){for(var a=e.coords,r=e.colors,i=[],n=[],s=0;t.hasData;){var o=t.readFlag(),c=t.readCoordinate(),l=t.readComponents()
if(0===s){switch(u(0<=o&&o<=2,"Unknown type4 flag"),o){case 0:s=3
break
case 1:n.push(n[n.length-2],n[n.length-1]),s=1
break
case 2:n.push(n[n.length-3],n[n.length-1]),s=1}i.push(o)}n.push(a.length),a.push(c),r.push(l),s--,t.align()}e.figures.push({type:"triangles",coords:new Int32Array(n),colors:new Int32Array(n)})}function a(e,t,a){for(var r=e.coords,i=e.colors,n=[];t.hasData;){var s=t.readCoordinate(),o=t.readComponents()
n.push(r.length),r.push(s),i.push(o)}e.figures.push({type:"lattice",coords:new Int32Array(n),colors:new Int32Array(n),verticesPerRow:a})}function r(e,t){var a=e.figures[t]
u("patch"===a.type,"Unexpected patch mesh figure")
var r=e.coords,i=e.colors,n=a.coords,s=a.colors,o=Math.min(r[n[0]][0],r[n[3]][0],r[n[12]][0],r[n[15]][0]),c=Math.min(r[n[0]][1],r[n[3]][1],r[n[12]][1],r[n[15]][1]),f=Math.max(r[n[0]][0],r[n[3]][0],r[n[12]][0],r[n[15]][0]),p=Math.max(r[n[0]][1],r[n[3]][1],r[n[12]][1],r[n[15]][1]),m=Math.ceil((f-o)*d/(e.bounds[2]-e.bounds[0]))
m=Math.max(l,Math.min(h,m))
var b=Math.ceil((p-c)*d/(e.bounds[3]-e.bounds[1]))
b=Math.max(l,Math.min(h,b))
for(var v=m+1,y=new Int32Array((b+1)*v),k=new Int32Array((b+1)*v),w=0,x=new Uint8Array(3),C=new Uint8Array(3),S=i[s[0]],A=i[s[1]],I=i[s[2]],B=i[s[3]],R=g(b),T=g(m),O=0;O<=b;O++){x[0]=(S[0]*(b-O)+I[0]*O)/b|0,x[1]=(S[1]*(b-O)+I[1]*O)/b|0,x[2]=(S[2]*(b-O)+I[2]*O)/b|0,C[0]=(A[0]*(b-O)+B[0]*O)/b|0,C[1]=(A[1]*(b-O)+B[1]*O)/b|0,C[2]=(A[2]*(b-O)+B[2]*O)/b|0
for(var P=0;P<=m;P++,w++)if(0!==O&&O!==b||0!==P&&P!==m){for(var M=0,E=0,L=0,D=0;D<=3;D++)for(var F=0;F<=3;F++,L++){var q=R[O][D]*T[P][F]
M+=r[n[L]][0]*q,E+=r[n[L]][1]*q}y[w]=r.length,r.push([M,E]),k[w]=i.length
var U=new Uint8Array(3)
U[0]=(x[0]*(m-P)+C[0]*P)/m|0,U[1]=(x[1]*(m-P)+C[1]*P)/m|0,U[2]=(x[2]*(m-P)+C[2]*P)/m|0,i.push(U)}}y[0]=n[0],k[0]=s[0],y[m]=n[3],k[m]=s[1],y[v*b]=n[12],k[v*b]=s[2],y[v*b+m]=n[15],k[v*b+m]=s[3],e.figures[t]={type:"lattice",coords:y,colors:k,verticesPerRow:v}}function i(e,t){for(var a=e.coords,r=e.colors,i=new Int32Array(16),n=new Int32Array(4);t.hasData;){var s=t.readFlag()
u(0<=s&&s<=3,"Unknown type6 flag")
var o,c,l=a.length
for(o=0,c=0!==s?8:12;o<c;o++)a.push(t.readCoordinate())
var h=r.length
for(o=0,c=0!==s?2:4;o<c;o++)r.push(t.readComponents())
var f,d,g,p
switch(s){case 0:i[12]=l+3,i[13]=l+4,i[14]=l+5,i[15]=l+6,i[8]=l+2,i[11]=l+7,i[4]=l+1,i[7]=l+8,i[0]=l,i[1]=l+11,i[2]=l+10,i[3]=l+9,n[2]=h+1,n[3]=h+2,n[0]=h,n[1]=h+3
break
case 1:f=i[12],d=i[13],g=i[14],p=i[15],i[12]=p,i[13]=l+0,i[14]=l+1,i[15]=l+2,i[8]=g,i[11]=l+3,i[4]=d,i[7]=l+4,i[0]=f,i[1]=l+7,i[2]=l+6,i[3]=l+5,f=n[2],d=n[3],n[2]=d,n[3]=h,n[0]=f,n[1]=h+1
break
case 2:f=i[15],d=i[11],i[12]=i[3],i[13]=l+0,i[14]=l+1,i[15]=l+2,i[8]=i[7],i[11]=l+3,i[4]=d,i[7]=l+4,i[0]=f,i[1]=l+7,i[2]=l+6,i[3]=l+5,f=n[3],n[2]=n[1],n[3]=h,n[0]=f,n[1]=h+1
break
case 3:i[12]=i[0],i[13]=l+0,i[14]=l+1,i[15]=l+2,i[8]=i[1],i[11]=l+3,i[4]=i[2],i[7]=l+4,i[0]=i[3],i[1]=l+7,i[2]=l+6,i[3]=l+5,n[2]=n[0],n[3]=h,n[0]=n[1],n[1]=h+1}i[5]=a.length,a.push([(-4*a[i[0]][0]-a[i[15]][0]+6*(a[i[4]][0]+a[i[1]][0])-2*(a[i[12]][0]+a[i[3]][0])+3*(a[i[13]][0]+a[i[7]][0]))/9,(-4*a[i[0]][1]-a[i[15]][1]+6*(a[i[4]][1]+a[i[1]][1])-2*(a[i[12]][1]+a[i[3]][1])+3*(a[i[13]][1]+a[i[7]][1]))/9]),i[6]=a.length,a.push([(-4*a[i[3]][0]-a[i[12]][0]+6*(a[i[2]][0]+a[i[7]][0])-2*(a[i[0]][0]+a[i[15]][0])+3*(a[i[4]][0]+a[i[14]][0]))/9,(-4*a[i[3]][1]-a[i[12]][1]+6*(a[i[2]][1]+a[i[7]][1])-2*(a[i[0]][1]+a[i[15]][1])+3*(a[i[4]][1]+a[i[14]][1]))/9]),i[9]=a.length,a.push([(-4*a[i[12]][0]-a[i[3]][0]+6*(a[i[8]][0]+a[i[13]][0])-2*(a[i[0]][0]+a[i[15]][0])+3*(a[i[11]][0]+a[i[1]][0]))/9,(-4*a[i[12]][1]-a[i[3]][1]+6*(a[i[8]][1]+a[i[13]][1])-2*(a[i[0]][1]+a[i[15]][1])+3*(a[i[11]][1]+a[i[1]][1]))/9]),i[10]=a.length,a.push([(-4*a[i[15]][0]-a[i[0]][0]+6*(a[i[11]][0]+a[i[14]][0])-2*(a[i[12]][0]+a[i[3]][0])+3*(a[i[2]][0]+a[i[8]][0]))/9,(-4*a[i[15]][1]-a[i[0]][1]+6*(a[i[11]][1]+a[i[14]][1])-2*(a[i[12]][1]+a[i[3]][1])+3*(a[i[2]][1]+a[i[8]][1]))/9]),e.figures.push({type:"patch",coords:new Int32Array(i),colors:new Int32Array(n)})}}function n(e,t){for(var a=e.coords,r=e.colors,i=new Int32Array(16),n=new Int32Array(4);t.hasData;){var s=t.readFlag()
u(0<=s&&s<=3,"Unknown type7 flag")
var o,c,l=a.length
for(o=0,c=0!==s?12:16;o<c;o++)a.push(t.readCoordinate())
var h=r.length
for(o=0,c=0!==s?2:4;o<c;o++)r.push(t.readComponents())
var f,d,g,p
switch(s){case 0:i[12]=l+3,i[13]=l+4,i[14]=l+5,i[15]=l+6,i[8]=l+2,i[9]=l+13,i[10]=l+14,i[11]=l+7,i[4]=l+1,i[5]=l+12,i[6]=l+15,i[7]=l+8,i[0]=l,i[1]=l+11,i[2]=l+10,i[3]=l+9,n[2]=h+1,n[3]=h+2,n[0]=h,n[1]=h+3
break
case 1:f=i[12],d=i[13],g=i[14],p=i[15],i[12]=p,i[13]=l+0,i[14]=l+1,i[15]=l+2,i[8]=g,i[9]=l+9,i[10]=l+10,i[11]=l+3,i[4]=d,i[5]=l+8,i[6]=l+11,i[7]=l+4,i[0]=f,i[1]=l+7,i[2]=l+6,i[3]=l+5,f=n[2],d=n[3],n[2]=d,n[3]=h,n[0]=f,n[1]=h+1
break
case 2:f=i[15],d=i[11],i[12]=i[3],i[13]=l+0,i[14]=l+1,i[15]=l+2,i[8]=i[7],i[9]=l+9,i[10]=l+10,i[11]=l+3,i[4]=d,i[5]=l+8,i[6]=l+11,i[7]=l+4,i[0]=f,i[1]=l+7,i[2]=l+6,i[3]=l+5,f=n[3],n[2]=n[1],n[3]=h,n[0]=f,n[1]=h+1
break
case 3:i[12]=i[0],i[13]=l+0,i[14]=l+1,i[15]=l+2,i[8]=i[1],i[9]=l+9,i[10]=l+10,i[11]=l+3,i[4]=i[2],i[5]=l+8,i[6]=l+11,i[7]=l+4,i[0]=i[3],i[1]=l+7,i[2]=l+6,i[3]=l+5,n[2]=n[0],n[3]=h,n[0]=n[1],n[1]=h+1}e.figures.push({type:"patch",coords:new Int32Array(i),colors:new Int32Array(n)})}}function s(e){for(var t=e.coords[0][0],a=e.coords[0][1],r=t,i=a,n=1,s=e.coords.length;n<s;n++){var o=e.coords[n][0],c=e.coords[n][1]
t=t>o?o:t,a=a>c?c:a,r=r<o?o:r,i=i<c?c:i}e.bounds=[t,a,r,i]}function o(e){var t,a,r,i,n=e.coords,s=new Float32Array(2*n.length)
for(t=0,r=0,a=n.length;t<a;t++){var o=n[t]
s[r++]=o[0],s[r++]=o[1]}e.coords=s
var c=e.colors,l=new Uint8Array(3*c.length)
for(t=0,r=0,a=c.length;t<a;t++){var h=c[t]
l[r++]=h[0],l[r++]=h[1],l[r++]=h[2]}e.colors=l
var u=e.figures
for(t=0,a=u.length;t<a;t++){var f=u[t],d=f.coords,g=f.colors
for(r=0,i=d.length;r<i;r++)d[r]*=2,g[r]*=3}}function c(c,l,h,d){u(p(c),"Mesh data is not a stream")
var g=c.dict
this.matrix=l,this.shadingType=g.get("ShadingType"),this.type="Pattern",this.bbox=g.getArray("BBox")
var y=g.get("ColorSpace","CS")
y=b.parse(y,h,d),this.cs=y,this.background=g.has("Background")?y.getRgb(g.get("Background"),0):null
var k=g.get("Function"),w=k?m.parseArray(h,k):null
this.coords=[],this.colors=[],this.figures=[]
var x={bitsPerCoordinate:g.get("BitsPerCoordinate"),bitsPerComponent:g.get("BitsPerComponent"),bitsPerFlag:g.get("BitsPerFlag"),decode:g.getArray("Decode"),colorFn:w,colorSpace:y,numComps:w?1:y.numComps},C=new e(c,x),S=!1
switch(this.shadingType){case v.FREE_FORM_MESH:t(this,C)
break
case v.LATTICE_FORM_MESH:var A=0|g.get("VerticesPerRow")
u(A>=2,"Invalid VerticesPerRow"),a(this,C,A)
break
case v.COONS_PATCH_MESH:i(this,C),S=!0
break
case v.TENSOR_PATCH_MESH:n(this,C),S=!0
break
default:f("Unsupported mesh type.")}if(S){s(this)
for(var I=0,B=this.figures.length;I<B;I++)r(this,I)}s(this),o(this)}e.prototype={get hasData(){if(this.stream.end)return this.stream.pos<this.stream.end
if(this.bufferLength>0)return!0
var e=this.stream.getByte()
return!(e<0)&&(this.buffer=e,this.bufferLength=8,!0)},readBits:function(e){var t=this.buffer,a=this.bufferLength
if(32===e){if(0===a)return(this.stream.getByte()<<24|this.stream.getByte()<<16|this.stream.getByte()<<8|this.stream.getByte())>>>0
t=t<<24|this.stream.getByte()<<16|this.stream.getByte()<<8|this.stream.getByte()
var r=this.stream.getByte()
return this.buffer=r&(1<<a)-1,(t<<8-a|(255&r)>>a)>>>0}if(8===e&&0===a)return this.stream.getByte()
for(;a<e;)t=t<<8|this.stream.getByte(),a+=8
return a-=e,this.bufferLength=a,this.buffer=t&(1<<a)-1,t>>a},align:function(){this.buffer=0,this.bufferLength=0},readFlag:function(){return this.readBits(this.context.bitsPerFlag)},readCoordinate:function(){var e=this.context.bitsPerCoordinate,t=this.readBits(e),a=this.readBits(e),r=this.context.decode,i=e<32?1/((1<<e)-1):2.3283064365386963e-10
return[t*i*(r[1]-r[0])+r[0],a*i*(r[3]-r[2])+r[2]]},readComponents:function(){for(var e=this.context.numComps,t=this.context.bitsPerComponent,a=t<32?1/((1<<t)-1):2.3283064365386963e-10,r=this.context.decode,i=this.tmpCompsBuf,n=0,s=4;n<e;n++,s+=2){var o=this.readBits(t)
i[n]=o*a*(r[s+1]-r[s])+r[s]}var c=this.tmpCsCompsBuf
return this.context.colorFn&&this.context.colorFn(i,0,c,0),this.context.colorSpace.getRgb(c,0)}}
var l=3,h=20,d=20,g=function(){function e(e){for(var t=[],a=0;a<=e;a++){var r=a/e,i=1-r
t.push(new Float32Array([i*i*i,3*r*i*i,3*r*r*i,r*r*r]))}return t}var t=[]
return function(a){return t[a]||(t[a]=e(a)),t[a]}}()
return c.prototype={getIR:function(){return["Mesh",this.shadingType,this.coords,this.colors,this.figures,this.bounds,this.matrix,this.bbox,this.background]}},c}(),k.Dummy=function(){function e(){this.type="Pattern"}return e.prototype={getIR:function(){return["Dummy"]}},e}(),t.Pattern=y,t.getTilingPatternIR=r},function(e,t,a){"use strict"
var r=a(0),i=a(2),n=a(12),s=a(24),o=r.warn,c=r.createValidAbsoluteUrl,l=r.shadow,h=r.NotImplementedException,u=r.MissingDataException,f=r.createPromiseCapability,d=r.Util,g=i.Stream,p=n.ChunkedStreamManager,m=s.PDFDocument,b=function(){function e(){throw new Error("Cannot initialize BaseManagerManager")}return e.prototype={get docId(){return this._docId},get password(){return this._password},get docBaseUrl(){var e=null
if(this._docBaseUrl){var t=c(this._docBaseUrl)
t?e=t.href:o('Invalid absolute docBaseUrl: "'+this._docBaseUrl+'".')}return l(this,"docBaseUrl",e)},onLoadedStream:function(){throw new h},ensureDoc:function(e,t){return this.ensure(this.pdfDocument,e,t)},ensureXRef:function(e,t){return this.ensure(this.pdfDocument.xref,e,t)},ensureCatalog:function(e,t){return this.ensure(this.pdfDocument.catalog,e,t)},getPage:function(e){return this.pdfDocument.getPage(e)},cleanup:function(){return this.pdfDocument.cleanup()},ensure:function(e,t,a){return new h},requestRange:function(e,t){return new h},requestLoadedStream:function(){return new h},sendProgressiveData:function(e){return new h},updatePassword:function(e){this._password=e},terminate:function(){return new h}},e}(),v=function(){function e(e,t,a,r,i){this._docId=e,this._password=a,this._docBaseUrl=i,this.evaluatorOptions=r
var n=new g(t)
this.pdfDocument=new m(this,n),this._loadedStreamCapability=f(),this._loadedStreamCapability.resolve(n)}return d.inherit(e,b,{ensure:function(e,t,a){return new Promise(function(r,i){try{var n,s=e[t]
n="function"==typeof s?s.apply(e,a):s,r(n)}catch(e){i(e)}})},requestRange:function(e,t){return Promise.resolve()},requestLoadedStream:function(){},onLoadedStream:function(){return this._loadedStreamCapability.promise},terminate:function(){}}),e}(),y=function(){function e(e,t,a,r,i){this._docId=e,this._password=a.password,this._docBaseUrl=i,this.msgHandler=a.msgHandler,this.evaluatorOptions=r
var n={msgHandler:a.msgHandler,url:a.url,length:a.length,disableAutoFetch:a.disableAutoFetch,rangeChunkSize:a.rangeChunkSize}
this.streamManager=new p(t,n),this.pdfDocument=new m(this,this.streamManager.getStream())}return d.inherit(e,b,{ensure:function(e,t,a){var r=this
return new Promise(function(i,n){function s(){try{var o,c=e[t]
o="function"==typeof c?c.apply(e,a):c,i(o)}catch(e){if(!(e instanceof u))return void n(e)
r.streamManager.requestRange(e.begin,e.end).then(s,n)}}s()})},requestRange:function(e,t){return this.streamManager.requestRange(e,t)},requestLoadedStream:function(){this.streamManager.requestAllChunks()},sendProgressiveData:function(e){this.streamManager.onReceiveData({chunk:e})},onLoadedStream:function(){return this.streamManager.onLoadedStream()},terminate:function(){this.streamManager.abort()}}),e}()
t.LocalPdfManager=v,t.NetworkPdfManager=y},function(e,t,a){"use strict"
var r=a(0),i=a(1),n=r.error,s=r.isSpace,o=i.EOF,c=function(){function e(e){this.lexer=e,this.operators=[],this.token=null,this.prev=null}return e.prototype={nextToken:function(){this.prev=this.token,this.token=this.lexer.getToken()},accept:function(e){return this.token.type===e&&(this.nextToken(),!0)},expect:function(e){if(this.accept(e))return!0
n("Unexpected symbol: found "+this.token.type+" expected "+e+".")},parse:function(){return this.nextToken(),this.expect(l.LBRACE),this.parseBlock(),this.expect(l.RBRACE),this.operators},parseBlock:function(){for(;;)if(this.accept(l.NUMBER))this.operators.push(this.prev.value)
else if(this.accept(l.OPERATOR))this.operators.push(this.prev.value)
else{if(!this.accept(l.LBRACE))return
this.parseCondition()}},parseCondition:function(){var e=this.operators.length
if(this.operators.push(null,null),this.parseBlock(),this.expect(l.RBRACE),this.accept(l.IF))this.operators[e]=this.operators.length,this.operators[e+1]="jz"
else if(this.accept(l.LBRACE)){var t=this.operators.length
this.operators.push(null,null)
var a=this.operators.length
this.parseBlock(),this.expect(l.RBRACE),this.expect(l.IFELSE),this.operators[t]=this.operators.length,this.operators[t+1]="j",this.operators[e]=a,this.operators[e+1]="jz"}else n("PS Function: error parsing conditional.")}},e}(),l={LBRACE:0,RBRACE:1,NUMBER:2,OPERATOR:3,IF:4,IFELSE:5},h=function(){function e(e,t){this.type=e,this.value=t}var t=Object.create(null)
return e.getOperator=function(a){var r=t[a]
return r||(t[a]=new e(l.OPERATOR,a))},e.LBRACE=new e(l.LBRACE,"{"),e.RBRACE=new e(l.RBRACE,"}"),e.IF=new e(l.IF,"IF"),e.IFELSE=new e(l.IFELSE,"IFELSE"),e}(),u=function(){function e(e){this.stream=e,this.nextChar(),this.strBuf=[]}return e.prototype={nextChar:function(){return this.currentChar=this.stream.getByte()},getToken:function(){for(var e=!1,t=this.currentChar;;){if(t<0)return o
if(e)10!==t&&13!==t||(e=!1)
else if(37===t)e=!0
else if(!s(t))break
t=this.nextChar()}switch(0|t){case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:case 43:case 45:case 46:return new h(l.NUMBER,this.getNumber())
case 123:return this.nextChar(),h.LBRACE
case 125:return this.nextChar(),h.RBRACE}var a=this.strBuf
for(a.length=0,a[0]=String.fromCharCode(t);(t=this.nextChar())>=0&&(t>=65&&t<=90||t>=97&&t<=122);)a.push(String.fromCharCode(t))
var r=a.join("")
switch(r.toLowerCase()){case"if":return h.IF
case"ifelse":return h.IFELSE
default:return h.getOperator(r)}},getNumber:function(){var e=this.currentChar,t=this.strBuf
for(t.length=0,t[0]=String.fromCharCode(e);(e=this.nextChar())>=0&&(e>=48&&e<=57||45===e||46===e);)t.push(String.fromCharCode(e))
var a=parseFloat(t.join(""))
return isNaN(a)&&n("Invalid floating point number: "+a),a}},e}()
t.PostScriptLexer=u,t.PostScriptParser=c},function(e,t,a){"use strict"
var r=a(0),i=a(2),n=a(4),s=r.warn,o=r.isSpace,c=i.Stream,l=n.getEncoding,h=function(){function e(){this.width=0,this.lsb=0,this.flexing=!1,this.output=[],this.stack=[]}var t={hstem:[1],vstem:[3],vmoveto:[4],rlineto:[5],hlineto:[6],vlineto:[7],rrcurveto:[8],callsubr:[10],flex:[12,35],drop:[12,18],endchar:[14],rmoveto:[21],hmoveto:[22],vhcurveto:[30],hvcurveto:[31]}
return e.prototype={convert:function(e,a,r){for(var i,n,o,c=e.length,l=!1,h=0;h<c;h++){var u=e[h]
if(u<32){switch(12===u&&(u=(u<<8)+e[++h]),u){case 1:case 3:this.stack=[]
break
case 4:if(this.flexing){if(this.stack.length<1){l=!0
break}var f=this.stack.pop()
this.stack.push(0,f)
break}l=this.executeCommand(1,t.vmoveto)
break
case 5:l=this.executeCommand(2,t.rlineto)
break
case 6:l=this.executeCommand(1,t.hlineto)
break
case 7:l=this.executeCommand(1,t.vlineto)
break
case 8:l=this.executeCommand(6,t.rrcurveto)
break
case 9:this.stack=[]
break
case 10:if(this.stack.length<1){l=!0
break}o=this.stack.pop(),l=this.convert(a[o],a,r)
break
case 11:return l
case 13:if(this.stack.length<2){l=!0
break}i=this.stack.pop(),n=this.stack.pop(),this.lsb=n,this.width=i,this.stack.push(i,n),l=this.executeCommand(2,t.hmoveto)
break
case 14:this.output.push(t.endchar[0])
break
case 21:if(this.flexing)break
l=this.executeCommand(2,t.rmoveto)
break
case 22:if(this.flexing){this.stack.push(0)
break}l=this.executeCommand(1,t.hmoveto)
break
case 30:l=this.executeCommand(4,t.vhcurveto)
break
case 31:l=this.executeCommand(4,t.hvcurveto)
break
case 3072:case 3073:case 3074:this.stack=[]
break
case 3078:r?(this.seac=this.stack.splice(-4,4),l=this.executeCommand(0,t.endchar)):l=this.executeCommand(4,t.endchar)
break
case 3079:if(this.stack.length<4){l=!0
break}this.stack.pop(),i=this.stack.pop()
var d=this.stack.pop()
n=this.stack.pop(),this.lsb=n,this.width=i,this.stack.push(i,n,d),l=this.executeCommand(3,t.rmoveto)
break
case 3084:if(this.stack.length<2){l=!0
break}var g=this.stack.pop(),p=this.stack.pop()
this.stack.push(p/g)
break
case 3088:if(this.stack.length<2){l=!0
break}o=this.stack.pop()
var m=this.stack.pop()
if(0===o&&3===m){var b=this.stack.splice(this.stack.length-17,17)
this.stack.push(b[2]+b[0],b[3]+b[1],b[4],b[5],b[6],b[7],b[8],b[9],b[10],b[11],b[12],b[13],b[14]),l=this.executeCommand(13,t.flex,!0),this.flexing=!1,this.stack.push(b[15],b[16])}else 1===o&&0===m&&(this.flexing=!0)
break
case 3089:break
case 3105:this.stack=[]
break
default:s('Unknown type 1 charstring command of "'+u+'"')}if(l)break}else u<=246?u-=139:u=u<=250?256*(u-247)+e[++h]+108:u<=254?-256*(u-251)-e[++h]-108:(255&e[++h])<<24|(255&e[++h])<<16|(255&e[++h])<<8|(255&e[++h])<<0,this.stack.push(u)}return l},executeCommand:function(e,t,a){var r=this.stack.length
if(e>r)return!0
for(var i=r-e,n=i;n<r;n++){var s=this.stack[n]
s===(0|s)?this.output.push(28,s>>8&255,255&s):(s=65536*s|0,this.output.push(255,s>>24&255,s>>16&255,s>>8&255,255&s))}return this.output.push.apply(this.output,t),a?this.stack.splice(i,e):this.stack.length=0,!1}},e}(),u=function(){function e(e){return e>=48&&e<=57||e>=65&&e<=70||e>=97&&e<=102}function t(e,t,a){if(a>=e.length)return new Uint8Array(0)
var r,i,n=0|t
for(r=0;r<a;r++)n=52845*(e[r]+n)+22719&65535
var s=e.length-a,o=new Uint8Array(s)
for(r=a,i=0;i<s;r++,i++){var c=e[r]
o[i]=c^n>>8,n=52845*(c+n)+22719&65535}return o}function a(t,a,r){var i,n,s=0|a,o=t.length,c=o>>>1,l=new Uint8Array(c)
for(i=0,n=0;i<o;i++){var h=t[i]
if(e(h)){i++
for(var u;i<o&&!e(u=t[i]);)i++
if(i<o){var f=parseInt(String.fromCharCode(h,u),16)
l[n++]=f^s>>8,s=52845*(f+s)+22719&65535}}}return Array.prototype.slice.call(l,r,n)}function r(e){return 47===e||91===e||93===e||123===e||125===e||40===e||41===e}function i(r,i,s){if(i){var o=r.getBytes(),l=!(e(o[0])&&e(o[1])&&e(o[2])&&e(o[3]))
r=new c(l?t(o,n,4):a(o,n,4))}this.seacAnalysisEnabled=!!s,this.stream=r,this.nextChar()}var n=55665
return i.prototype={readNumberArray:function(){this.getToken()
for(var e=[];;){var t=this.getToken()
if(null===t||"]"===t||"}"===t)break
e.push(parseFloat(t||0))}return e},readNumber:function(){var e=this.getToken()
return parseFloat(e||0)},readInt:function(){var e=this.getToken()
return 0|parseInt(e||0,10)},readBoolean:function(){return"true"===this.getToken()?1:0},nextChar:function(){return this.currentChar=this.stream.getByte()},getToken:function(){for(var e=!1,t=this.currentChar;;){if(t===-1)return null
if(e)10!==t&&13!==t||(e=!1)
else if(37===t)e=!0
else if(!o(t))break
t=this.nextChar()}if(r(t))return this.nextChar(),String.fromCharCode(t)
var a=""
do{a+=String.fromCharCode(t),t=this.nextChar()}while(t>=0&&!o(t)&&!r(t))
return a},extractFontProgram:function(){var e=this.stream,a=[],r=[],i=Object.create(null)
i.lenIV=4
for(var n,s,o,c,l,u={subrs:[],charstrings:[],properties:{privateData:i}};null!==(n=this.getToken());)if("/"===n)switch(n=this.getToken()){case"CharStrings":for(this.getToken(),this.getToken(),this.getToken(),this.getToken();;){if(null===(n=this.getToken())||"end"===n)break
if("/"===n){var f=this.getToken()
s=this.readInt(),this.getToken(),o=e.makeSubStream(e.pos,s),c=u.properties.privateData.lenIV,l=t(o.getBytes(),4330,c),e.skip(s),this.nextChar(),n=this.getToken(),"noaccess"===n&&this.getToken(),r.push({glyph:f,encoded:l})}}break
case"Subrs":for(this.readInt(),this.getToken();"dup"===(n=this.getToken());){var d=this.readInt()
s=this.readInt(),this.getToken(),o=e.makeSubStream(e.pos,s),c=u.properties.privateData.lenIV,l=t(o.getBytes(),4330,c),e.skip(s),this.nextChar(),n=this.getToken(),"noaccess"===n&&this.getToken(),a[d]=l}break
case"BlueValues":case"OtherBlues":case"FamilyBlues":case"FamilyOtherBlues":var g=this.readNumberArray()
g.length>0&&g.length,1
break
case"StemSnapH":case"StemSnapV":u.properties.privateData[n]=this.readNumberArray()
break
case"StdHW":case"StdVW":u.properties.privateData[n]=this.readNumberArray()[0]
break
case"BlueShift":case"lenIV":case"BlueFuzz":case"BlueScale":case"LanguageGroup":case"ExpansionFactor":u.properties.privateData[n]=this.readNumber()
break
case"ForceBold":u.properties.privateData[n]=this.readBoolean()}for(var p=0;p<r.length;p++){f=r[p].glyph,l=r[p].encoded
var m=new h,b=m.convert(l,a,this.seacAnalysisEnabled),v=m.output
b&&(v=[14]),u.charstrings.push({glyphName:f,charstring:v,width:m.width,lsb:m.lsb,seac:m.seac})}return u},extractFontHeader:function(e){for(var t;null!==(t=this.getToken());)if("/"===t)switch(t=this.getToken()){case"FontMatrix":var a=this.readNumberArray()
e.fontMatrix=a
break
case"Encoding":var r,i=this.getToken()
if(/^\d+$/.test(i)){r=[]
var n=0|parseInt(i,10)
this.getToken()
for(var s=0;s<n;s++){for(t=this.getToken();"dup"!==t&&"def"!==t;)if(null===(t=this.getToken()))return
if("def"===t)break
var o=this.readInt()
this.getToken()
var c=this.getToken()
r[o]=c,this.getToken()}}else r=l(i)
e.builtInEncoding=r
break
case"FontBBox":var h=this.readNumberArray()
e.ascent=Math.max(h[3],h[1]),e.descent=Math.min(h[1],h[3]),e.ascentScaled=!0}}},i}()
t.Type1Parser=u},function(e,t,a){"use strict"
var r=a(8)
a(19),t.WorkerMessageHandler=r.WorkerMessageHandler},function(e,t,a){"use strict";(function(e){if("undefined"==typeof PDFJS||!PDFJS.compatibilityChecked){var t="undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:void 0,a="undefined"!=typeof navigator&&navigator.userAgent||"",r=/Android/.test(a),i=/Android\s[0-2][^\d]/.test(a),n=/Android\s[0-4][^\d]/.test(a),s=a.indexOf("Chrom")>=0,o=/Chrome\/(39|40)\./.test(a),c=a.indexOf("CriOS")>=0,l=a.indexOf("Trident")>=0,h=/\b(iPad|iPhone|iPod)(?=;)/.test(a),u=a.indexOf("Opera")>=0,f=/Safari\//.test(a)&&!/(Chrome\/|Android\s)/.test(a),d="object"==typeof window&&"object"==typeof document
"undefined"==typeof PDFJS&&(t.PDFJS={}),PDFJS.compatibilityChecked=!0,function(){function e(e,t){return new r(this.slice(e,t))}function a(e,t){arguments.length<2&&(t=0)
for(var a=0,r=e.length;a<r;++a,++t)this[t]=255&e[a]}function r(t){var r,i,n
if("number"==typeof t)for(r=[],i=0;i<t;++i)r[i]=0
else if("slice"in t)r=t.slice(0)
else for(r=[],i=0,n=t.length;i<n;++i)r[i]=t[i]
return r.subarray=e,r.buffer=r,r.byteLength=r.length,r.set=a,"object"==typeof t&&t.buffer&&(r.buffer=t.buffer),r}if("undefined"!=typeof Uint8Array)return void 0===Uint8Array.prototype.subarray&&(Uint8Array.prototype.subarray=function(e,t){return new Uint8Array(this.slice(e,t))},Float32Array.prototype.subarray=function(e,t){return new Float32Array(this.slice(e,t))}),void("undefined"==typeof Float64Array&&(t.Float64Array=Float32Array))
t.Uint8Array=r,t.Int8Array=r,t.Uint32Array=r,t.Int32Array=r,t.Uint16Array=r,t.Float32Array=r,t.Float64Array=r}(),function(){t.URL||(t.URL=t.webkitURL)}(),function(){if(void 0!==Object.defineProperty){var e=!0
try{d&&Object.defineProperty(new Image,"id",{value:"test"})
var t=function(){}
t.prototype={get id(){}},Object.defineProperty(new t,"id",{value:"",configurable:!0,enumerable:!0,writable:!1})}catch(t){e=!1}if(e)return}Object.defineProperty=function(e,t,a){delete e[t],"get"in a&&e.__defineGetter__(t,a.get),"set"in a&&e.__defineSetter__(t,a.set),"value"in a&&(e.__defineSetter__(t,function(e){return this.__defineGetter__(t,function(){return e}),e}),e[t]=a.value)}}(),function(){if("undefined"!=typeof XMLHttpRequest){var e=XMLHttpRequest.prototype,t=new XMLHttpRequest
if("overrideMimeType"in t||Object.defineProperty(e,"overrideMimeType",{value:function(e){}}),!("responseType"in t)){if(Object.defineProperty(e,"responseType",{get:function(){return this._responseType||"text"},set:function(e){"text"!==e&&"arraybuffer"!==e||(this._responseType=e,"arraybuffer"===e&&"function"==typeof this.overrideMimeType&&this.overrideMimeType("text/plain; charset=x-user-defined"))}}),"undefined"!=typeof VBArray)return void Object.defineProperty(e,"response",{get:function(){return"arraybuffer"===this.responseType?new Uint8Array(new VBArray(this.responseBody).toArray()):this.responseText}})
Object.defineProperty(e,"response",{get:function(){if("arraybuffer"!==this.responseType)return this.responseText
var e,t=this.responseText,a=t.length,r=new Uint8Array(a)
for(e=0;e<a;++e)r[e]=255&t.charCodeAt(e)
return r.buffer}})}}}(),function(){if(!("btoa"in t)){var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
t.btoa=function(t){var a,r,i=""
for(a=0,r=t.length;a<r;a+=3){var n=255&t.charCodeAt(a),s=255&t.charCodeAt(a+1),o=255&t.charCodeAt(a+2),c=n>>2,l=(3&n)<<4|s>>4,h=a+1<r?(15&s)<<2|o>>6:64,u=a+2<r?63&o:64
i+=e.charAt(c)+e.charAt(l)+e.charAt(h)+e.charAt(u)}return i}}}(),function(){if(!("atob"in t)){t.atob=function(e){if(e=e.replace(/=+$/,""),e.length%4==1)throw new Error("bad atob input")
for(var t,a,r=0,i=0,n="";a=e.charAt(i++);~a&&(t=r%4?64*t+a:a,r++%4)?n+=String.fromCharCode(255&t>>(-2*r&6)):0)a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a)
return n}}}(),function(){void 0===Function.prototype.bind&&(Function.prototype.bind=function(e){var t=this,a=Array.prototype.slice.call(arguments,1)
return function(){var r=a.concat(Array.prototype.slice.call(arguments))
return t.apply(e,r)}})}(),function(){if(d){"dataset"in document.createElement("div")||Object.defineProperty(HTMLElement.prototype,"dataset",{get:function(){if(this._dataset)return this._dataset
for(var e={},t=0,a=this.attributes.length;t<a;t++){var r=this.attributes[t]
if("data-"===r.name.substring(0,5)){e[r.name.substring(5).replace(/\-([a-z])/g,function(e,t){return t.toUpperCase()})]=r.value}}return Object.defineProperty(this,"_dataset",{value:e,writable:!1,enumerable:!1}),e},enumerable:!0})}}(),function(){function e(e,t,a,r){var i=e.className||"",n=i.split(/\s+/g)
""===n[0]&&n.shift()
var s=n.indexOf(t)
return s<0&&a&&n.push(t),s>=0&&r&&n.splice(s,1),e.className=n.join(" "),s>=0}if(d){if(!("classList"in document.createElement("div"))){var t={add:function(t){e(this.element,t,!0,!1)},contains:function(t){return e(this.element,t,!1,!1)},remove:function(t){e(this.element,t,!1,!0)},toggle:function(t){e(this.element,t,!0,!0)}}
Object.defineProperty(HTMLElement.prototype,"classList",{get:function(){if(this._classList)return this._classList
var e=Object.create(t,{element:{value:this,writable:!1,enumerable:!0}})
return Object.defineProperty(this,"_classList",{value:e,writable:!1,enumerable:!1}),e},enumerable:!0})}}}(),function(){if(!("undefined"==typeof importScripts||"console"in t)){var e={},a={log:function(){var e=Array.prototype.slice.call(arguments)
t.postMessage({targetName:"main",action:"console_log",data:e})},error:function(){var e=Array.prototype.slice.call(arguments)
t.postMessage({targetName:"main",action:"console_error",data:e})},time:function(t){e[t]=Date.now()},timeEnd:function(t){var a=e[t]
if(!a)throw new Error("Unknown timer name "+t)
this.log("Timer:",t,Date.now()-a)}}
t.console=a}}(),function(){if(d)"console"in window?"bind"in console.log||(console.log=function(e){return function(t){return e(t)}}(console.log),console.error=function(e){return function(t){return e(t)}}(console.error),console.warn=function(e){return function(t){return e(t)}}(console.warn)):window.console={log:function(){},error:function(){},warn:function(){}}}(),function(){function e(e){t(e.target)&&e.stopPropagation()}function t(e){return e.disabled||e.parentNode&&t(e.parentNode)}u&&document.addEventListener("click",e,!0)}(),function(){(l||c)&&(PDFJS.disableCreateObjectURL=!0)}(),function(){"undefined"!=typeof navigator&&("language"in navigator||(PDFJS.locale=navigator.userLanguage||"en-US"))}(),function(){(f||i||o||h)&&(PDFJS.disableRange=!0,PDFJS.disableStream=!0)}(),function(){d&&(history.pushState&&!i||(PDFJS.disableHistory=!0))}(),function(){if(d)if(window.CanvasPixelArray)"function"!=typeof window.CanvasPixelArray.prototype.set&&(window.CanvasPixelArray.prototype.set=function(e){for(var t=0,a=this.length;t<a;t++)this[t]=e[t]})
else{var e,t=!1
if(s?(e=a.match(/Chrom(e|ium)\/([0-9]+)\./),t=e&&parseInt(e[2])<21):r?t=n:f&&(e=a.match(/Version\/([0-9]+)\.([0-9]+)\.([0-9]+) Safari\//),t=e&&parseInt(e[1])<6),t){var i=window.CanvasRenderingContext2D.prototype,o=i.createImageData
i.createImageData=function(e,t){var a=o.call(this,e,t)
return a.data.set=function(e){for(var t=0,a=this.length;t<a;t++)this[t]=e[t]},a},i=null}}}(),function(){function e(e){window.setTimeout(e,20)}if(d)h?window.requestAnimationFrame=e:"requestAnimationFrame"in window||(window.requestAnimationFrame=window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||e)}(),function(){(h||r)&&(PDFJS.maxCanvasPixels=5242880)}(),function(){d&&l&&window.parent!==window&&(PDFJS.disableFullscreen=!0)}(),function(){d&&("currentScript"in document||Object.defineProperty(document,"currentScript",{get:function(){var e=document.getElementsByTagName("script")
return e[e.length-1]},enumerable:!0,configurable:!0}))}(),function(){if(d){var e=document.createElement("input")
try{e.type="number"}catch(r){var t=e.constructor.prototype,a=Object.getOwnPropertyDescriptor(t,"type")
Object.defineProperty(t,"type",{get:function(){return a.get.call(this)},set:function(e){a.set.call(this,"number"===e?"text":e)},enumerable:!0,configurable:!0})}}}(),function(){if(d&&document.attachEvent){var e=document.constructor.prototype,t=Object.getOwnPropertyDescriptor(e,"readyState")
Object.defineProperty(e,"readyState",{get:function(){var e=t.get.call(this)
return"interactive"===e?"loading":e},set:function(e){t.set.call(this,e)},enumerable:!0,configurable:!0})}}(),function(){d&&void 0===Element.prototype.remove&&(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)})}(),function(){if(t.Promise)return"function"!=typeof t.Promise.all&&(t.Promise.all=function(e){var a,r,i=0,n=[],s=new t.Promise(function(e,t){a=e,r=t})
return e.forEach(function(e,t){i++,e.then(function(e){n[t]=e,0===--i&&a(n)},r)}),0===i&&a(n),s}),"function"!=typeof t.Promise.resolve&&(t.Promise.resolve=function(e){return new t.Promise(function(t){t(e)})}),"function"!=typeof t.Promise.reject&&(t.Promise.reject=function(e){return new t.Promise(function(t,a){a(e)})}),void("function"!=typeof t.Promise.prototype.catch&&(t.Promise.prototype.catch=function(e){return t.Promise.prototype.then(void 0,e)}))
var e=2,a={handlers:[],running:!1,unhandledRejections:[],pendingRejectionCheck:!1,scheduleHandlers:function(e){0!==e._status&&(this.handlers=this.handlers.concat(e._handlers),e._handlers=[],this.running||(this.running=!0,setTimeout(this.runHandlers.bind(this),0)))},runHandlers:function(){for(var t=Date.now()+1;this.handlers.length>0;){var a=this.handlers.shift(),r=a.thisPromise._status,i=a.thisPromise._value
try{1===r?"function"==typeof a.onResolve&&(i=a.onResolve(i)):"function"==typeof a.onReject&&(i=a.onReject(i),r=1,a.thisPromise._unhandledRejection&&this.removeUnhandeledRejection(a.thisPromise))}catch(t){r=e,i=t}if(a.nextPromise._updateStatus(r,i),Date.now()>=t)break}if(this.handlers.length>0)return void setTimeout(this.runHandlers.bind(this),0)
this.running=!1},addUnhandledRejection:function(e){this.unhandledRejections.push({promise:e,time:Date.now()}),this.scheduleRejectionCheck()},removeUnhandeledRejection:function(e){e._unhandledRejection=!1
for(var t=0;t<this.unhandledRejections.length;t++)this.unhandledRejections[t].promise===e&&(this.unhandledRejections.splice(t),t--)},scheduleRejectionCheck:function(){this.pendingRejectionCheck||(this.pendingRejectionCheck=!0,setTimeout(function(){this.pendingRejectionCheck=!1
for(var e=Date.now(),t=0;t<this.unhandledRejections.length;t++)if(e-this.unhandledRejections[t].time>500){var a=this.unhandledRejections[t].promise._value,r="Unhandled rejection: "+a
a.stack&&(r+="\n"+a.stack)
try{throw new Error(r)}catch(e){console.warn(r)}this.unhandledRejections.splice(t),t--}this.unhandledRejections.length&&this.scheduleRejectionCheck()}.bind(this),500))}},r=function(e){this._status=0,this._handlers=[]
try{e.call(this,this._resolve.bind(this),this._reject.bind(this))}catch(e){this._reject(e)}}
r.all=function(t){function a(t){s._status!==e&&(c=[],n(t))}var i,n,s=new r(function(e,t){i=e,n=t}),o=t.length,c=[]
if(0===o)return i(c),s
for(var l=0,h=t.length;l<h;++l){var u=t[l],f=function(t){return function(a){s._status!==e&&(c[t]=a,0===--o&&i(c))}}(l)
r.isPromise(u)?u.then(f,a):f(u)}return s},r.isPromise=function(e){return e&&"function"==typeof e.then},r.resolve=function(e){return new r(function(t){t(e)})},r.reject=function(e){return new r(function(t,a){a(e)})},r.prototype={_status:null,_value:null,_handlers:null,_unhandledRejection:null,_updateStatus:function(t,i){if(1!==this._status&&this._status!==e){if(1===t&&r.isPromise(i))return void i.then(this._updateStatus.bind(this,1),this._updateStatus.bind(this,e))
this._status=t,this._value=i,t===e&&0===this._handlers.length&&(this._unhandledRejection=!0,a.addUnhandledRejection(this)),a.scheduleHandlers(this)}},_resolve:function(e){this._updateStatus(1,e)},_reject:function(t){this._updateStatus(e,t)},then:function(e,t){var i=new r(function(e,t){this.resolve=e,this.reject=t})
return this._handlers.push({thisPromise:this,onResolve:e,onReject:t,nextPromise:i}),a.scheduleHandlers(this),i},catch:function(e){return this.then(void 0,e)}},t.Promise=r}(),function(){function e(){this.id="$weakmap"+a++}if(!t.WeakMap){var a=0
e.prototype={has:function(e){return!!Object.getOwnPropertyDescriptor(e,this.id)},get:function(e,t){return this.has(e)?e[this.id]:t},set:function(e,t){Object.defineProperty(e,this.id,{value:t,enumerable:!1,configurable:!0})},delete:function(e){delete e[this.id]}},t.WeakMap=e}}(),function(){function e(e){return void 0!==u[e]}function a(){o.call(this),this._isInvalid=!0}function r(e){return""===e&&a.call(this),e.toLowerCase()}function i(e){var t=e.charCodeAt(0)
return t>32&&t<127&&[34,35,60,62,63,96].indexOf(t)===-1?e:encodeURIComponent(e)}function n(e){var t=e.charCodeAt(0)
return t>32&&t<127&&[34,35,60,62,96].indexOf(t)===-1?e:encodeURIComponent(e)}function s(t,s,o){function c(e){y.push(e)}var l=s||"scheme start",h=0,m="",b=!1,v=!1,y=[]
e:for(;(t[h-1]!==d||0===h)&&!this._isInvalid;){var k=t[h]
switch(l){case"scheme start":if(!k||!g.test(k)){if(s){c("Invalid scheme.")
break e}m="",l="no scheme"
continue}m+=k.toLowerCase(),l="scheme"
break
case"scheme":if(k&&p.test(k))m+=k.toLowerCase()
else{if(":"!==k){if(s){if(k===d)break e
c("Code point not allowed in scheme: "+k)
break e}m="",h=0,l="no scheme"
continue}if(this._scheme=m,m="",s)break e
e(this._scheme)&&(this._isRelative=!0),l="file"===this._scheme?"relative":this._isRelative&&o&&o._scheme===this._scheme?"relative or authority":this._isRelative?"authority first slash":"scheme data"}break
case"scheme data":"?"===k?(this._query="?",l="query"):"#"===k?(this._fragment="#",l="fragment"):k!==d&&"\t"!==k&&"\n"!==k&&"\r"!==k&&(this._schemeData+=i(k))
break
case"no scheme":if(o&&e(o._scheme)){l="relative"
continue}c("Missing scheme."),a.call(this)
break
case"relative or authority":if("/"!==k||"/"!==t[h+1]){c("Expected /, got: "+k),l="relative"
continue}l="authority ignore slashes"
break
case"relative":if(this._isRelative=!0,"file"!==this._scheme&&(this._scheme=o._scheme),k===d){this._host=o._host,this._port=o._port,this._path=o._path.slice(),this._query=o._query,this._username=o._username,this._password=o._password
break e}if("/"===k||"\\"===k)"\\"===k&&c("\\ is an invalid code point."),l="relative slash"
else if("?"===k)this._host=o._host,this._port=o._port,this._path=o._path.slice(),this._query="?",this._username=o._username,this._password=o._password,l="query"
else{if("#"!==k){var w=t[h+1],x=t[h+2];("file"!==this._scheme||!g.test(k)||":"!==w&&"|"!==w||x!==d&&"/"!==x&&"\\"!==x&&"?"!==x&&"#"!==x)&&(this._host=o._host,this._port=o._port,this._username=o._username,this._password=o._password,this._path=o._path.slice(),this._path.pop()),l="relative path"
continue}this._host=o._host,this._port=o._port,this._path=o._path.slice(),this._query=o._query,this._fragment="#",this._username=o._username,this._password=o._password,l="fragment"}break
case"relative slash":if("/"!==k&&"\\"!==k){"file"!==this._scheme&&(this._host=o._host,this._port=o._port,this._username=o._username,this._password=o._password),l="relative path"
continue}"\\"===k&&c("\\ is an invalid code point."),l="file"===this._scheme?"file host":"authority ignore slashes"
break
case"authority first slash":if("/"!==k){c("Expected '/', got: "+k),l="authority ignore slashes"
continue}l="authority second slash"
break
case"authority second slash":if(l="authority ignore slashes","/"!==k){c("Expected '/', got: "+k)
continue}break
case"authority ignore slashes":if("/"!==k&&"\\"!==k){l="authority"
continue}c("Expected authority, got: "+k)
break
case"authority":if("@"===k){b&&(c("@ already seen."),m+="%40"),b=!0
for(var C=0;C<m.length;C++){var S=m[C]
if("\t"!==S&&"\n"!==S&&"\r"!==S)if(":"!==S||null!==this._password){var A=i(S)
null!==this._password?this._password+=A:this._username+=A}else this._password=""
else c("Invalid whitespace in authority.")}m=""}else{if(k===d||"/"===k||"\\"===k||"?"===k||"#"===k){h-=m.length,m="",l="host"
continue}m+=k}break
case"file host":if(k===d||"/"===k||"\\"===k||"?"===k||"#"===k){2!==m.length||!g.test(m[0])||":"!==m[1]&&"|"!==m[1]?0===m.length?l="relative path start":(this._host=r.call(this,m),m="",l="relative path start"):l="relative path"
continue}"\t"===k||"\n"===k||"\r"===k?c("Invalid whitespace in file host."):m+=k
break
case"host":case"hostname":if(":"!==k||v){if(k===d||"/"===k||"\\"===k||"?"===k||"#"===k){if(this._host=r.call(this,m),m="",l="relative path start",s)break e
continue}"\t"!==k&&"\n"!==k&&"\r"!==k?("["===k?v=!0:"]"===k&&(v=!1),m+=k):c("Invalid code point in host/hostname: "+k)}else if(this._host=r.call(this,m),m="",l="port","hostname"===s)break e
break
case"port":if(/[0-9]/.test(k))m+=k
else{if(k===d||"/"===k||"\\"===k||"?"===k||"#"===k||s){if(""!==m){var I=parseInt(m,10)
I!==u[this._scheme]&&(this._port=I+""),m=""}if(s)break e
l="relative path start"
continue}"\t"===k||"\n"===k||"\r"===k?c("Invalid code point in port: "+k):a.call(this)}break
case"relative path start":if("\\"===k&&c("'\\' not allowed in path."),l="relative path","/"!==k&&"\\"!==k)continue
break
case"relative path":if(k!==d&&"/"!==k&&"\\"!==k&&(s||"?"!==k&&"#"!==k))"\t"!==k&&"\n"!==k&&"\r"!==k&&(m+=i(k))
else{"\\"===k&&c("\\ not allowed in relative path.")
var B;(B=f[m.toLowerCase()])&&(m=B),".."===m?(this._path.pop(),"/"!==k&&"\\"!==k&&this._path.push("")):"."===m&&"/"!==k&&"\\"!==k?this._path.push(""):"."!==m&&("file"===this._scheme&&0===this._path.length&&2===m.length&&g.test(m[0])&&"|"===m[1]&&(m=m[0]+":"),this._path.push(m)),m="","?"===k?(this._query="?",l="query"):"#"===k&&(this._fragment="#",l="fragment")}break
case"query":s||"#"!==k?k!==d&&"\t"!==k&&"\n"!==k&&"\r"!==k&&(this._query+=n(k)):(this._fragment="#",l="fragment")
break
case"fragment":k!==d&&"\t"!==k&&"\n"!==k&&"\r"!==k&&(this._fragment+=k)}h++}}function o(){this._scheme="",this._schemeData="",this._username="",this._password=null,this._host="",this._port="",this._path=[],this._query="",this._fragment="",this._isInvalid=!1,this._isRelative=!1}function c(e,t){void 0===t||t instanceof c||(t=new c(String(t))),this._url=e,o.call(this)
var a=e.replace(/^[ \t\r\n\f]+|[ \t\r\n\f]+$/g,"")
s.call(this,a,null,t)}var l=!1
try{if("function"==typeof URL&&"object"==typeof URL.prototype&&"origin"in URL.prototype){var h=new URL("b","http://a")
h.pathname="c%20d",l="http://a/c%20d"===h.href}}catch(e){}if(!l){var u=Object.create(null)
u.ftp=21,u.file=0,u.gopher=70,u.http=80,u.https=443,u.ws=80,u.wss=443
var f=Object.create(null)
f["%2e"]=".",f[".%2e"]="..",f["%2e."]="..",f["%2e%2e"]=".."
var d,g=/[a-zA-Z]/,p=/[a-zA-Z0-9\+\-\.]/
c.prototype={toString:function(){return this.href},get href(){if(this._isInvalid)return this._url
var e=""
return""===this._username&&null===this._password||(e=this._username+(null!==this._password?":"+this._password:"")+"@"),this.protocol+(this._isRelative?"//"+e+this.host:"")+this.pathname+this._query+this._fragment},set href(e){o.call(this),s.call(this,e)},get protocol(){return this._scheme+":"},set protocol(e){this._isInvalid||s.call(this,e+":","scheme start")},get host(){return this._isInvalid?"":this._port?this._host+":"+this._port:this._host},set host(e){!this._isInvalid&&this._isRelative&&s.call(this,e,"host")},get hostname(){return this._host},set hostname(e){!this._isInvalid&&this._isRelative&&s.call(this,e,"hostname")},get port(){return this._port},set port(e){!this._isInvalid&&this._isRelative&&s.call(this,e,"port")},get pathname(){return this._isInvalid?"":this._isRelative?"/"+this._path.join("/"):this._schemeData},set pathname(e){!this._isInvalid&&this._isRelative&&(this._path=[],s.call(this,e,"relative path start"))},get search(){return this._isInvalid||!this._query||"?"===this._query?"":this._query},set search(e){!this._isInvalid&&this._isRelative&&(this._query="?","?"===e[0]&&(e=e.slice(1)),s.call(this,e,"query"))},get hash(){return this._isInvalid||!this._fragment||"#"===this._fragment?"":this._fragment},set hash(e){this._isInvalid||(this._fragment="#","#"===e[0]&&(e=e.slice(1)),s.call(this,e,"fragment"))},get origin(){var e
if(this._isInvalid||!this._scheme)return""
switch(this._scheme){case"data":case"file":case"javascript":case"mailto":return"null"}return e=this.host,e?this._scheme+"://"+e:""}}
var m=t.URL
m&&(c.createObjectURL=function(e){return m.createObjectURL.apply(m,arguments)},c.revokeObjectURL=function(e){m.revokeObjectURL(e)}),t.URL=c}}()}}).call(t,a(9))}])})
