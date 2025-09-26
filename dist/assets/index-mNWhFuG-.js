(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))a(l);new MutationObserver(l=>{for(const h of l)if(h.type==="childList")for(const d of h.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const h={};return l.integrity&&(h.integrity=l.integrity),l.referrerPolicy&&(h.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?h.credentials="include":l.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function a(l){if(l.ep)return;l.ep=!0;const h=i(l);fetch(l.href,h)}})();function Uv(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var rd={exports:{}},ol={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qy;function BA(){if(Qy)return ol;Qy=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(a,l,h){var d=null;if(h!==void 0&&(d=""+h),l.key!==void 0&&(d=""+l.key),"key"in l){h={};for(var p in l)p!=="key"&&(h[p]=l[p])}else h=l;return l=h.ref,{$$typeof:s,type:a,key:d,ref:l!==void 0?l:null,props:h}}return ol.Fragment=t,ol.jsx=i,ol.jsxs=i,ol}var Xy;function jA(){return Xy||(Xy=1,rd.exports=BA()),rd.exports}var nt=jA(),ad={exports:{}},Tt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $y;function HA(){if($y)return Tt;$y=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),h=Symbol.for("react.consumer"),d=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),_=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),A=Symbol.for("react.lazy"),I=Symbol.iterator;function k(O){return O===null||typeof O!="object"?null:(O=I&&O[I]||O["@@iterator"],typeof O=="function"?O:null)}var Q={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},$=Object.assign,it={};function Z(O,K,et){this.props=O,this.context=K,this.refs=it,this.updater=et||Q}Z.prototype.isReactComponent={},Z.prototype.setState=function(O,K){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,K,"setState")},Z.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function Et(){}Et.prototype=Z.prototype;function _t(O,K,et){this.props=O,this.context=K,this.refs=it,this.updater=et||Q}var ht=_t.prototype=new Et;ht.constructor=_t,$(ht,Z.prototype),ht.isPureReactComponent=!0;var vt=Array.isArray,lt={H:null,A:null,T:null,S:null,V:null},St=Object.prototype.hasOwnProperty;function C(O,K,et,W,ot,Dt){return et=Dt.ref,{$$typeof:s,type:O,key:K,ref:et!==void 0?et:null,props:Dt}}function S(O,K){return C(O.type,K,void 0,void 0,void 0,O.props)}function R(O){return typeof O=="object"&&O!==null&&O.$$typeof===s}function M(O){var K={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(et){return K[et]})}var D=/\/+/g;function V(O,K){return typeof O=="object"&&O!==null&&O.key!=null?M(""+O.key):K.toString(36)}function b(){}function Pt(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(b,b):(O.status="pending",O.then(function(K){O.status==="pending"&&(O.status="fulfilled",O.value=K)},function(K){O.status==="pending"&&(O.status="rejected",O.reason=K)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function Zt(O,K,et,W,ot){var Dt=typeof O;(Dt==="undefined"||Dt==="boolean")&&(O=null);var mt=!1;if(O===null)mt=!0;else switch(Dt){case"bigint":case"string":case"number":mt=!0;break;case"object":switch(O.$$typeof){case s:case t:mt=!0;break;case A:return mt=O._init,Zt(mt(O._payload),K,et,W,ot)}}if(mt)return ot=ot(O),mt=W===""?"."+V(O,0):W,vt(ot)?(et="",mt!=null&&(et=mt.replace(D,"$&/")+"/"),Zt(ot,K,et,"",function(Nn){return Nn})):ot!=null&&(R(ot)&&(ot=S(ot,et+(ot.key==null||O&&O.key===ot.key?"":(""+ot.key).replace(D,"$&/")+"/")+mt)),K.push(ot)),1;mt=0;var De=W===""?".":W+":";if(vt(O))for(var jt=0;jt<O.length;jt++)W=O[jt],Dt=De+V(W,jt),mt+=Zt(W,K,et,Dt,ot);else if(jt=k(O),typeof jt=="function")for(O=jt.call(O),jt=0;!(W=O.next()).done;)W=W.value,Dt=De+V(W,jt++),mt+=Zt(W,K,et,Dt,ot);else if(Dt==="object"){if(typeof O.then=="function")return Zt(Pt(O),K,et,W,ot);throw K=String(O),Error("Objects are not valid as a React child (found: "+(K==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":K)+"). If you meant to render a collection of children, use an array instead.")}return mt}function H(O,K,et){if(O==null)return O;var W=[],ot=0;return Zt(O,W,"","",function(Dt){return K.call(et,Dt,ot++)}),W}function tt(O){if(O._status===-1){var K=O._result;K=K(),K.then(function(et){(O._status===0||O._status===-1)&&(O._status=1,O._result=et)},function(et){(O._status===0||O._status===-1)&&(O._status=2,O._result=et)}),O._status===-1&&(O._status=0,O._result=K)}if(O._status===1)return O._result.default;throw O._result}var ut=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var K=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(K))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)};function Vt(){}return Tt.Children={map:H,forEach:function(O,K,et){H(O,function(){K.apply(this,arguments)},et)},count:function(O){var K=0;return H(O,function(){K++}),K},toArray:function(O){return H(O,function(K){return K})||[]},only:function(O){if(!R(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},Tt.Component=Z,Tt.Fragment=i,Tt.Profiler=l,Tt.PureComponent=_t,Tt.StrictMode=a,Tt.Suspense=_,Tt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=lt,Tt.__COMPILER_RUNTIME={__proto__:null,c:function(O){return lt.H.useMemoCache(O)}},Tt.cache=function(O){return function(){return O.apply(null,arguments)}},Tt.cloneElement=function(O,K,et){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var W=$({},O.props),ot=O.key,Dt=void 0;if(K!=null)for(mt in K.ref!==void 0&&(Dt=void 0),K.key!==void 0&&(ot=""+K.key),K)!St.call(K,mt)||mt==="key"||mt==="__self"||mt==="__source"||mt==="ref"&&K.ref===void 0||(W[mt]=K[mt]);var mt=arguments.length-2;if(mt===1)W.children=et;else if(1<mt){for(var De=Array(mt),jt=0;jt<mt;jt++)De[jt]=arguments[jt+2];W.children=De}return C(O.type,ot,void 0,void 0,Dt,W)},Tt.createContext=function(O){return O={$$typeof:d,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:h,_context:O},O},Tt.createElement=function(O,K,et){var W,ot={},Dt=null;if(K!=null)for(W in K.key!==void 0&&(Dt=""+K.key),K)St.call(K,W)&&W!=="key"&&W!=="__self"&&W!=="__source"&&(ot[W]=K[W]);var mt=arguments.length-2;if(mt===1)ot.children=et;else if(1<mt){for(var De=Array(mt),jt=0;jt<mt;jt++)De[jt]=arguments[jt+2];ot.children=De}if(O&&O.defaultProps)for(W in mt=O.defaultProps,mt)ot[W]===void 0&&(ot[W]=mt[W]);return C(O,Dt,void 0,void 0,null,ot)},Tt.createRef=function(){return{current:null}},Tt.forwardRef=function(O){return{$$typeof:p,render:O}},Tt.isValidElement=R,Tt.lazy=function(O){return{$$typeof:A,_payload:{_status:-1,_result:O},_init:tt}},Tt.memo=function(O,K){return{$$typeof:v,type:O,compare:K===void 0?null:K}},Tt.startTransition=function(O){var K=lt.T,et={};lt.T=et;try{var W=O(),ot=lt.S;ot!==null&&ot(et,W),typeof W=="object"&&W!==null&&typeof W.then=="function"&&W.then(Vt,ut)}catch(Dt){ut(Dt)}finally{lt.T=K}},Tt.unstable_useCacheRefresh=function(){return lt.H.useCacheRefresh()},Tt.use=function(O){return lt.H.use(O)},Tt.useActionState=function(O,K,et){return lt.H.useActionState(O,K,et)},Tt.useCallback=function(O,K){return lt.H.useCallback(O,K)},Tt.useContext=function(O){return lt.H.useContext(O)},Tt.useDebugValue=function(){},Tt.useDeferredValue=function(O,K){return lt.H.useDeferredValue(O,K)},Tt.useEffect=function(O,K,et){var W=lt.H;if(typeof et=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return W.useEffect(O,K)},Tt.useId=function(){return lt.H.useId()},Tt.useImperativeHandle=function(O,K,et){return lt.H.useImperativeHandle(O,K,et)},Tt.useInsertionEffect=function(O,K){return lt.H.useInsertionEffect(O,K)},Tt.useLayoutEffect=function(O,K){return lt.H.useLayoutEffect(O,K)},Tt.useMemo=function(O,K){return lt.H.useMemo(O,K)},Tt.useOptimistic=function(O,K){return lt.H.useOptimistic(O,K)},Tt.useReducer=function(O,K,et){return lt.H.useReducer(O,K,et)},Tt.useRef=function(O){return lt.H.useRef(O)},Tt.useState=function(O){return lt.H.useState(O)},Tt.useSyncExternalStore=function(O,K,et){return lt.H.useSyncExternalStore(O,K,et)},Tt.useTransition=function(){return lt.H.useTransition()},Tt.version="19.1.1",Tt}var Zy;function Xd(){return Zy||(Zy=1,ad.exports=HA()),ad.exports}var Wt=Xd();const qA=Uv(Wt);var od={exports:{}},ll={},ld={exports:{}},ud={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jy;function GA(){return Jy||(Jy=1,(function(s){function t(H,tt){var ut=H.length;H.push(tt);t:for(;0<ut;){var Vt=ut-1>>>1,O=H[Vt];if(0<l(O,tt))H[Vt]=tt,H[ut]=O,ut=Vt;else break t}}function i(H){return H.length===0?null:H[0]}function a(H){if(H.length===0)return null;var tt=H[0],ut=H.pop();if(ut!==tt){H[0]=ut;t:for(var Vt=0,O=H.length,K=O>>>1;Vt<K;){var et=2*(Vt+1)-1,W=H[et],ot=et+1,Dt=H[ot];if(0>l(W,ut))ot<O&&0>l(Dt,W)?(H[Vt]=Dt,H[ot]=ut,Vt=ot):(H[Vt]=W,H[et]=ut,Vt=et);else if(ot<O&&0>l(Dt,ut))H[Vt]=Dt,H[ot]=ut,Vt=ot;else break t}}return tt}function l(H,tt){var ut=H.sortIndex-tt.sortIndex;return ut!==0?ut:H.id-tt.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var h=performance;s.unstable_now=function(){return h.now()}}else{var d=Date,p=d.now();s.unstable_now=function(){return d.now()-p}}var _=[],v=[],A=1,I=null,k=3,Q=!1,$=!1,it=!1,Z=!1,Et=typeof setTimeout=="function"?setTimeout:null,_t=typeof clearTimeout=="function"?clearTimeout:null,ht=typeof setImmediate<"u"?setImmediate:null;function vt(H){for(var tt=i(v);tt!==null;){if(tt.callback===null)a(v);else if(tt.startTime<=H)a(v),tt.sortIndex=tt.expirationTime,t(_,tt);else break;tt=i(v)}}function lt(H){if(it=!1,vt(H),!$)if(i(_)!==null)$=!0,St||(St=!0,V());else{var tt=i(v);tt!==null&&Zt(lt,tt.startTime-H)}}var St=!1,C=-1,S=5,R=-1;function M(){return Z?!0:!(s.unstable_now()-R<S)}function D(){if(Z=!1,St){var H=s.unstable_now();R=H;var tt=!0;try{t:{$=!1,it&&(it=!1,_t(C),C=-1),Q=!0;var ut=k;try{e:{for(vt(H),I=i(_);I!==null&&!(I.expirationTime>H&&M());){var Vt=I.callback;if(typeof Vt=="function"){I.callback=null,k=I.priorityLevel;var O=Vt(I.expirationTime<=H);if(H=s.unstable_now(),typeof O=="function"){I.callback=O,vt(H),tt=!0;break e}I===i(_)&&a(_),vt(H)}else a(_);I=i(_)}if(I!==null)tt=!0;else{var K=i(v);K!==null&&Zt(lt,K.startTime-H),tt=!1}}break t}finally{I=null,k=ut,Q=!1}tt=void 0}}finally{tt?V():St=!1}}}var V;if(typeof ht=="function")V=function(){ht(D)};else if(typeof MessageChannel<"u"){var b=new MessageChannel,Pt=b.port2;b.port1.onmessage=D,V=function(){Pt.postMessage(null)}}else V=function(){Et(D,0)};function Zt(H,tt){C=Et(function(){H(s.unstable_now())},tt)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(H){H.callback=null},s.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<H?Math.floor(1e3/H):5},s.unstable_getCurrentPriorityLevel=function(){return k},s.unstable_next=function(H){switch(k){case 1:case 2:case 3:var tt=3;break;default:tt=k}var ut=k;k=tt;try{return H()}finally{k=ut}},s.unstable_requestPaint=function(){Z=!0},s.unstable_runWithPriority=function(H,tt){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var ut=k;k=H;try{return tt()}finally{k=ut}},s.unstable_scheduleCallback=function(H,tt,ut){var Vt=s.unstable_now();switch(typeof ut=="object"&&ut!==null?(ut=ut.delay,ut=typeof ut=="number"&&0<ut?Vt+ut:Vt):ut=Vt,H){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=ut+O,H={id:A++,callback:tt,priorityLevel:H,startTime:ut,expirationTime:O,sortIndex:-1},ut>Vt?(H.sortIndex=ut,t(v,H),i(_)===null&&H===i(v)&&(it?(_t(C),C=-1):it=!0,Zt(lt,ut-Vt))):(H.sortIndex=O,t(_,H),$||Q||($=!0,St||(St=!0,V()))),H},s.unstable_shouldYield=M,s.unstable_wrapCallback=function(H){var tt=k;return function(){var ut=k;k=tt;try{return H.apply(this,arguments)}finally{k=ut}}}})(ud)),ud}var Wy;function FA(){return Wy||(Wy=1,ld.exports=GA()),ld.exports}var cd={exports:{}},je={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var t_;function YA(){if(t_)return je;t_=1;var s=Xd();function t(_){var v="https://react.dev/errors/"+_;if(1<arguments.length){v+="?args[]="+encodeURIComponent(arguments[1]);for(var A=2;A<arguments.length;A++)v+="&args[]="+encodeURIComponent(arguments[A])}return"Minified React error #"+_+"; visit "+v+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var a={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function h(_,v,A){var I=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:I==null?null:""+I,children:_,containerInfo:v,implementation:A}}var d=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(_,v){if(_==="font")return"";if(typeof v=="string")return v==="use-credentials"?v:""}return je.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,je.createPortal=function(_,v){var A=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!v||v.nodeType!==1&&v.nodeType!==9&&v.nodeType!==11)throw Error(t(299));return h(_,v,null,A)},je.flushSync=function(_){var v=d.T,A=a.p;try{if(d.T=null,a.p=2,_)return _()}finally{d.T=v,a.p=A,a.d.f()}},je.preconnect=function(_,v){typeof _=="string"&&(v?(v=v.crossOrigin,v=typeof v=="string"?v==="use-credentials"?v:"":void 0):v=null,a.d.C(_,v))},je.prefetchDNS=function(_){typeof _=="string"&&a.d.D(_)},je.preinit=function(_,v){if(typeof _=="string"&&v&&typeof v.as=="string"){var A=v.as,I=p(A,v.crossOrigin),k=typeof v.integrity=="string"?v.integrity:void 0,Q=typeof v.fetchPriority=="string"?v.fetchPriority:void 0;A==="style"?a.d.S(_,typeof v.precedence=="string"?v.precedence:void 0,{crossOrigin:I,integrity:k,fetchPriority:Q}):A==="script"&&a.d.X(_,{crossOrigin:I,integrity:k,fetchPriority:Q,nonce:typeof v.nonce=="string"?v.nonce:void 0})}},je.preinitModule=function(_,v){if(typeof _=="string")if(typeof v=="object"&&v!==null){if(v.as==null||v.as==="script"){var A=p(v.as,v.crossOrigin);a.d.M(_,{crossOrigin:A,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0})}}else v==null&&a.d.M(_)},je.preload=function(_,v){if(typeof _=="string"&&typeof v=="object"&&v!==null&&typeof v.as=="string"){var A=v.as,I=p(A,v.crossOrigin);a.d.L(_,A,{crossOrigin:I,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0,type:typeof v.type=="string"?v.type:void 0,fetchPriority:typeof v.fetchPriority=="string"?v.fetchPriority:void 0,referrerPolicy:typeof v.referrerPolicy=="string"?v.referrerPolicy:void 0,imageSrcSet:typeof v.imageSrcSet=="string"?v.imageSrcSet:void 0,imageSizes:typeof v.imageSizes=="string"?v.imageSizes:void 0,media:typeof v.media=="string"?v.media:void 0})}},je.preloadModule=function(_,v){if(typeof _=="string")if(v){var A=p(v.as,v.crossOrigin);a.d.m(_,{as:typeof v.as=="string"&&v.as!=="script"?v.as:void 0,crossOrigin:A,integrity:typeof v.integrity=="string"?v.integrity:void 0})}else a.d.m(_)},je.requestFormReset=function(_){a.d.r(_)},je.unstable_batchedUpdates=function(_,v){return _(v)},je.useFormState=function(_,v,A){return d.H.useFormState(_,v,A)},je.useFormStatus=function(){return d.H.useHostTransitionStatus()},je.version="19.1.1",je}var e_;function KA(){if(e_)return cd.exports;e_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),cd.exports=YA(),cd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n_;function QA(){if(n_)return ll;n_=1;var s=FA(),t=Xd(),i=KA();function a(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)n+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function h(e){var n=e,r=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(r=n.return),e=n.return;while(e)}return n.tag===3?r:null}function d(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function p(e){if(h(e)!==e)throw Error(a(188))}function _(e){var n=e.alternate;if(!n){if(n=h(e),n===null)throw Error(a(188));return n!==e?null:e}for(var r=e,o=n;;){var c=r.return;if(c===null)break;var f=c.alternate;if(f===null){if(o=c.return,o!==null){r=o;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===r)return p(c),e;if(f===o)return p(c),n;f=f.sibling}throw Error(a(188))}if(r.return!==o.return)r=c,o=f;else{for(var y=!1,E=c.child;E;){if(E===r){y=!0,r=c,o=f;break}if(E===o){y=!0,o=c,r=f;break}E=E.sibling}if(!y){for(E=f.child;E;){if(E===r){y=!0,r=f,o=c;break}if(E===o){y=!0,o=f,r=c;break}E=E.sibling}if(!y)throw Error(a(189))}}if(r.alternate!==o)throw Error(a(190))}if(r.tag!==3)throw Error(a(188));return r.stateNode.current===r?e:n}function v(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=v(e),n!==null)return n;e=e.sibling}return null}var A=Object.assign,I=Symbol.for("react.element"),k=Symbol.for("react.transitional.element"),Q=Symbol.for("react.portal"),$=Symbol.for("react.fragment"),it=Symbol.for("react.strict_mode"),Z=Symbol.for("react.profiler"),Et=Symbol.for("react.provider"),_t=Symbol.for("react.consumer"),ht=Symbol.for("react.context"),vt=Symbol.for("react.forward_ref"),lt=Symbol.for("react.suspense"),St=Symbol.for("react.suspense_list"),C=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),R=Symbol.for("react.activity"),M=Symbol.for("react.memo_cache_sentinel"),D=Symbol.iterator;function V(e){return e===null||typeof e!="object"?null:(e=D&&e[D]||e["@@iterator"],typeof e=="function"?e:null)}var b=Symbol.for("react.client.reference");function Pt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===b?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case $:return"Fragment";case Z:return"Profiler";case it:return"StrictMode";case lt:return"Suspense";case St:return"SuspenseList";case R:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case Q:return"Portal";case ht:return(e.displayName||"Context")+".Provider";case _t:return(e._context.displayName||"Context")+".Consumer";case vt:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case C:return n=e.displayName||null,n!==null?n:Pt(e.type)||"Memo";case S:n=e._payload,e=e._init;try{return Pt(e(n))}catch{}}return null}var Zt=Array.isArray,H=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,tt=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ut={pending:!1,data:null,method:null,action:null},Vt=[],O=-1;function K(e){return{current:e}}function et(e){0>O||(e.current=Vt[O],Vt[O]=null,O--)}function W(e,n){O++,Vt[O]=e.current,e.current=n}var ot=K(null),Dt=K(null),mt=K(null),De=K(null);function jt(e,n){switch(W(mt,n),W(Dt,e),W(ot,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Ay(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Ay(n),e=Sy(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}et(ot),W(ot,e)}function Nn(){et(ot),et(Dt),et(mt)}function to(e){e.memoizedState!==null&&W(De,e);var n=ot.current,r=Sy(n,e.type);n!==r&&(W(Dt,e),W(ot,r))}function Gr(e){Dt.current===e&&(et(ot),et(Dt)),De.current===e&&(et(De),nl._currentValue=ut)}var Fr=Object.prototype.hasOwnProperty,qs=s.unstable_scheduleCallback,Yr=s.unstable_cancelCallback,rh=s.unstable_shouldYield,eo=s.unstable_requestPaint,Je=s.unstable_now,kl=s.unstable_getCurrentPriorityLevel,_e=s.unstable_ImmediatePriority,Ae=s.unstable_UserBlockingPriority,yi=s.unstable_NormalPriority,ah=s.unstable_LowPriority,no=s.unstable_IdlePriority,oh=s.log,Gs=s.unstable_setDisableYieldValue,Yi=null,Le=null;function yn(e){if(typeof oh=="function"&&Gs(e),Le&&typeof Le.setStrictMode=="function")try{Le.setStrictMode(Yi,e)}catch{}}var Ke=Math.clz32?Math.clz32:Pl,lh=Math.log,Ul=Math.LN2;function Pl(e){return e>>>=0,e===0?32:31-(lh(e)/Ul|0)|0}var $n=256,Ki=4194304;function Mn(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function _n(e,n,r){var o=e.pendingLanes;if(o===0)return 0;var c=0,f=e.suspendedLanes,y=e.pingedLanes;e=e.warmLanes;var E=o&134217727;return E!==0?(o=E&~f,o!==0?c=Mn(o):(y&=E,y!==0?c=Mn(y):r||(r=E&~e,r!==0&&(c=Mn(r))))):(E=o&~f,E!==0?c=Mn(E):y!==0?c=Mn(y):r||(r=o&~e,r!==0&&(c=Mn(r)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,r=n&-n,f>=r||f===32&&(r&4194048)!==0)?n:c}function Qi(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Kr(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function io(){var e=$n;return $n<<=1,($n&4194048)===0&&($n=256),e}function Xi(){var e=Ki;return Ki<<=1,(Ki&62914560)===0&&(Ki=4194304),e}function Qr(e){for(var n=[],r=0;31>r;r++)n.push(e);return n}function le(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ll(e,n,r,o,c,f){var y=e.pendingLanes;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=r,e.entangledLanes&=r,e.errorRecoveryDisabledLanes&=r,e.shellSuspendCounter=0;var E=e.entanglements,w=e.expirationTimes,L=e.hiddenUpdates;for(r=y&~r;0<r;){var q=31-Ke(r),F=1<<q;E[q]=0,w[q]=-1;var z=L[q];if(z!==null)for(L[q]=null,q=0;q<z.length;q++){var B=z[q];B!==null&&(B.lane&=-536870913)}r&=~F}o!==0&&$i(e,o,0),f!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=f&~(y&~n))}function $i(e,n,r){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-Ke(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|r&4194090}function Zi(e,n){var r=e.entangledLanes|=n;for(e=e.entanglements;r;){var o=31-Ke(r),c=1<<o;c&n|e[o]&n&&(e[o]|=n),r&=~c}}function so(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ro(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function _i(){var e=tt.p;return e!==0?e:(e=window.event,e===void 0?32:Hy(e.type))}function uh(e,n){var r=tt.p;try{return tt.p=e,n()}finally{tt.p=r}}var Zn=Math.random().toString(36).slice(2),ue="__reactFiber$"+Zn,Oe="__reactProps$"+Zn,vi="__reactContainer$"+Zn,Fs="__reactEvents$"+Zn,Ys="__reactListeners$"+Zn,ch="__reactHandles$"+Zn,Vn="__reactResources$"+Zn,Ji="__reactMarker$"+Zn;function Xr(e){delete e[ue],delete e[Oe],delete e[Fs],delete e[Ys],delete e[ch]}function Jn(e){var n=e[ue];if(n)return n;for(var r=e.parentNode;r;){if(n=r[vi]||r[ue]){if(r=n.alternate,n.child!==null||r!==null&&r.child!==null)for(e=Iy(e);e!==null;){if(r=e[ue])return r;e=Iy(e)}return n}e=r,r=e.parentNode}return null}function Wn(e){if(e=e[ue]||e[vi]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function Wi(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(a(33))}function ts(e){var n=e[Vn];return n||(n=e[Vn]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function ce(e){e[Ji]=!0}var zl=new Set,Ks={};function ti(e,n){ei(e,n),ei(e+"Capture",n)}function ei(e,n){for(Ks[e]=n,e=0;e<n.length;e++)zl.add(n[e])}var Qs=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ni={},$r={};function hh(e){return Fr.call($r,e)?!0:Fr.call(ni,e)?!1:Qs.test(e)?$r[e]=!0:(ni[e]=!0,!1)}function Xs(e,n,r){if(hh(n))if(r===null)e.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+r)}}function $s(e,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+r)}}function vn(e,n,r,o){if(o===null)e.removeAttribute(r);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(r);return}e.setAttributeNS(n,r,""+o)}}var Zs,Zr;function Ei(e){if(Zs===void 0)try{throw Error()}catch(r){var n=r.stack.trim().match(/\n( *(at )?)/);Zs=n&&n[1]||"",Zr=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Zs+e+Zr}var Jr=!1;function Wr(e,n){if(!e||Jr)return"";Jr=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var F=function(){throw Error()};if(Object.defineProperty(F.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(F,[])}catch(B){var z=B}Reflect.construct(e,[],F)}else{try{F.call()}catch(B){z=B}e.call(F.prototype)}}else{try{throw Error()}catch(B){z=B}(F=e())&&typeof F.catch=="function"&&F.catch(function(){})}}catch(B){if(B&&z&&typeof B.stack=="string")return[B.stack,z.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),y=f[0],E=f[1];if(y&&E){var w=y.split(`
`),L=E.split(`
`);for(c=o=0;o<w.length&&!w[o].includes("DetermineComponentFrameRoot");)o++;for(;c<L.length&&!L[c].includes("DetermineComponentFrameRoot");)c++;if(o===w.length||c===L.length)for(o=w.length-1,c=L.length-1;1<=o&&0<=c&&w[o]!==L[c];)c--;for(;1<=o&&0<=c;o--,c--)if(w[o]!==L[c]){if(o!==1||c!==1)do if(o--,c--,0>c||w[o]!==L[c]){var q=`
`+w[o].replace(" at new "," at ");return e.displayName&&q.includes("<anonymous>")&&(q=q.replace("<anonymous>",e.displayName)),q}while(1<=o&&0<=c);break}}}finally{Jr=!1,Error.prepareStackTrace=r}return(r=e?e.displayName||e.name:"")?Ei(r):""}function fh(e){switch(e.tag){case 26:case 27:case 5:return Ei(e.type);case 16:return Ei("Lazy");case 13:return Ei("Suspense");case 19:return Ei("SuspenseList");case 0:case 15:return Wr(e.type,!1);case 11:return Wr(e.type.render,!1);case 1:return Wr(e.type,!0);case 31:return Ei("Activity");default:return""}}function xn(e){try{var n="";do n+=fh(e),e=e.return;while(e);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}function ne(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function es(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Js(e){var n=es(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),o=""+e[n];if(!e.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var c=r.get,f=r.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return c.call(this)},set:function(y){o=""+y,f.call(this,y)}}),Object.defineProperty(e,n,{enumerable:r.enumerable}),{getValue:function(){return o},setValue:function(y){o=""+y},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function ns(e){e._valueTracker||(e._valueTracker=Js(e))}function Ht(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var r=n.getValue(),o="";return e&&(o=es(e)?e.checked?"true":"false":e.value),e=o,e!==r?(n.setValue(e),!0):!1}function Ti(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Ws=/[\n"\\]/g;function Se(e){return e.replace(Ws,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function ao(e,n,r,o,c,f,y,E){e.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?e.type=y:e.removeAttribute("type"),n!=null?y==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+ne(n)):e.value!==""+ne(n)&&(e.value=""+ne(n)):y!=="submit"&&y!=="reset"||e.removeAttribute("value"),n!=null?lo(e,y,ne(n)):r!=null?lo(e,y,ne(r)):o!=null&&e.removeAttribute("value"),c==null&&f!=null&&(e.defaultChecked=!!f),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?e.name=""+ne(E):e.removeAttribute("name")}function oo(e,n,r,o,c,f,y,E){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||r!=null){if(!(f!=="submit"&&f!=="reset"||n!=null))return;r=r!=null?""+ne(r):"",n=n!=null?""+ne(n):r,E||n===e.value||(e.value=n),e.defaultValue=n}o=o??c,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=E?e.checked:!!o,e.defaultChecked=!!o,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(e.name=y)}function lo(e,n,r){n==="number"&&Ti(e.ownerDocument)===e||e.defaultValue===""+r||(e.defaultValue=""+r)}function is(e,n,r,o){if(e=e.options,n){n={};for(var c=0;c<r.length;c++)n["$"+r[c]]=!0;for(r=0;r<e.length;r++)c=n.hasOwnProperty("$"+e[r].value),e[r].selected!==c&&(e[r].selected=c),c&&o&&(e[r].defaultSelected=!0)}else{for(r=""+ne(r),n=null,c=0;c<e.length;c++){if(e[c].value===r){e[c].selected=!0,o&&(e[c].defaultSelected=!0);return}n!==null||e[c].disabled||(n=e[c])}n!==null&&(n.selected=!0)}}function Bl(e,n,r){if(n!=null&&(n=""+ne(n),n!==e.value&&(e.value=n),r==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=r!=null?""+ne(r):""}function jl(e,n,r,o){if(n==null){if(o!=null){if(r!=null)throw Error(a(92));if(Zt(o)){if(1<o.length)throw Error(a(93));o=o[0]}r=o}r==null&&(r=""),n=r}r=ne(n),e.defaultValue=r,o=e.textContent,o===r&&o!==""&&o!==null&&(e.value=o)}function En(e,n){if(n){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=n;return}}e.textContent=n}var Ai=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function uo(e,n,r){var o=n.indexOf("--")===0;r==null||typeof r=="boolean"||r===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,r):typeof r!="number"||r===0||Ai.has(n)?n==="float"?e.cssFloat=r:e[n]=(""+r).trim():e[n]=r+"px"}function co(e,n,r){if(n!=null&&typeof n!="object")throw Error(a(62));if(e=e.style,r!=null){for(var o in r)!r.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var c in n)o=n[c],n.hasOwnProperty(c)&&r[c]!==o&&uo(e,c,o)}else for(var f in n)n.hasOwnProperty(f)&&uo(e,f,n[f])}function ta(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Hl=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),ql=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function kn(e){return ql.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var ho=null;function fo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ss=null,Qe=null;function Gl(e){var n=Wn(e);if(n&&(e=n.stateNode)){var r=e[Oe]||null;t:switch(e=n.stateNode,n.type){case"input":if(ao(e,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),n=r.name,r.type==="radio"&&n!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+Se(""+n)+'"][type="radio"]'),n=0;n<r.length;n++){var o=r[n];if(o!==e&&o.form===e.form){var c=o[Oe]||null;if(!c)throw Error(a(90));ao(o,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<r.length;n++)o=r[n],o.form===e.form&&Ht(o)}break t;case"textarea":Bl(e,r.value,r.defaultValue);break t;case"select":n=r.value,n!=null&&is(e,!!r.multiple,n,!1)}}}var tr=!1;function er(e,n,r){if(tr)return e(n,r);tr=!0;try{var o=e(n);return o}finally{if(tr=!1,(ss!==null||Qe!==null)&&(Vu(),ss&&(n=ss,e=Qe,Qe=ss=null,Gl(n),e)))for(n=0;n<e.length;n++)Gl(e[n])}}function rs(e,n){var r=e.stateNode;if(r===null)return null;var o=r[Oe]||null;if(o===null)return null;r=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(a(231,n,typeof r));return r}var Xe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Si=!1;if(Xe)try{var as={};Object.defineProperty(as,"passive",{get:function(){Si=!0}}),window.addEventListener("test",as,as),window.removeEventListener("test",as,as)}catch{Si=!1}var Tn=null,Kt=null,ea=null;function Fl(){if(ea)return ea;var e,n=Kt,r=n.length,o,c="value"in Tn?Tn.value:Tn.textContent,f=c.length;for(e=0;e<r&&n[e]===c[e];e++);var y=r-e;for(o=1;o<=y&&n[r-o]===c[f-o];o++);return ea=c.slice(e,1<o?1-o:void 0)}function nr(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function ir(){return!0}function mo(){return!1}function ve(e){function n(r,o,c,f,y){this._reactName=r,this._targetInst=c,this.type=o,this.nativeEvent=f,this.target=y,this.currentTarget=null;for(var E in e)e.hasOwnProperty(E)&&(r=e[E],this[E]=r?r(f):f[E]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?ir:mo,this.isPropagationStopped=mo,this}return A(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=ir)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=ir)},persist:function(){},isPersistent:ir}),n}var ze={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},sr=ve(ze),rr=A({},ze,{view:0,detail:0}),ar=ve(rr),na,or,ii,lr=A({},rr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ra,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ii&&(ii&&e.type==="mousemove"?(na=e.screenX-ii.screenX,or=e.screenY-ii.screenY):or=na=0,ii=e),na)},movementY:function(e){return"movementY"in e?e.movementY:or}}),ur=ve(lr),dh=A({},lr,{dataTransfer:0}),Yl=ve(dh),cr=A({},rr,{relatedTarget:0}),ia=ve(cr),Kl=A({},ze,{animationName:0,elapsedTime:0,pseudoElement:0}),go=ve(Kl),po=A({},ze,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ql=ve(po),sa=A({},ze,{data:0}),yo=ve(sa),Xl={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},bi={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},$l={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Zl(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=$l[e])?!!n[e]:!1}function ra(){return Zl}var Jl=A({},rr,{key:function(e){if(e.key){var n=Xl[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=nr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?bi[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ra,charCode:function(e){return e.type==="keypress"?nr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?nr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),aa=ve(Jl),$e=A({},lr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_o=ve($e),Wl=A({},rr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ra}),os=ve(Wl),u=A({},ze,{propertyName:0,elapsedTime:0,pseudoElement:0}),m=ve(u),g=A({},lr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),T=ve(g),P=A({},ze,{newState:0,oldState:0}),j=ve(P),J=[9,13,27,32],yt=Xe&&"CompositionEvent"in window,$t=null;Xe&&"documentMode"in document&&($t=document.documentMode);var Lt=Xe&&"TextEvent"in window&&!$t,he=Xe&&(!yt||$t&&8<$t&&11>=$t),ln=" ",si=!1;function Un(e,n){switch(e){case"keyup":return J.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Pn(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ln=!1;function vo(e,n){switch(e){case"compositionend":return Pn(n);case"keypress":return n.which!==32?null:(si=!0,ln);case"textInput":return e=n.data,e===ln&&si?null:e;default:return null}}function d0(e,n){if(Ln)return e==="compositionend"||!yt&&Un(e,n)?(e=Fl(),ea=Kt=Tn=null,Ln=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return he&&n.locale!=="ko"?null:n.data;default:return null}}var m0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Um(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!m0[e.type]:n==="textarea"}function Pm(e,n,r,o){ss?Qe?Qe.push(o):Qe=[o]:ss=o,n=zu(n,"onChange"),0<n.length&&(r=new sr("onChange","change",null,r,o),e.push({event:r,listeners:n}))}var Eo=null,To=null;function g0(e){yy(e,0)}function tu(e){var n=Wi(e);if(Ht(n))return e}function Lm(e,n){if(e==="change")return n}var zm=!1;if(Xe){var mh;if(Xe){var gh="oninput"in document;if(!gh){var Bm=document.createElement("div");Bm.setAttribute("oninput","return;"),gh=typeof Bm.oninput=="function"}mh=gh}else mh=!1;zm=mh&&(!document.documentMode||9<document.documentMode)}function jm(){Eo&&(Eo.detachEvent("onpropertychange",Hm),To=Eo=null)}function Hm(e){if(e.propertyName==="value"&&tu(To)){var n=[];Pm(n,To,e,fo(e)),er(g0,n)}}function p0(e,n,r){e==="focusin"?(jm(),Eo=n,To=r,Eo.attachEvent("onpropertychange",Hm)):e==="focusout"&&jm()}function y0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return tu(To)}function _0(e,n){if(e==="click")return tu(n)}function v0(e,n){if(e==="input"||e==="change")return tu(n)}function E0(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var un=typeof Object.is=="function"?Object.is:E0;function Ao(e,n){if(un(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var r=Object.keys(e),o=Object.keys(n);if(r.length!==o.length)return!1;for(o=0;o<r.length;o++){var c=r[o];if(!Fr.call(n,c)||!un(e[c],n[c]))return!1}return!0}function qm(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Gm(e,n){var r=qm(e);e=0;for(var o;r;){if(r.nodeType===3){if(o=e+r.textContent.length,e<=n&&o>=n)return{node:r,offset:n-e};e=o}t:{for(;r;){if(r.nextSibling){r=r.nextSibling;break t}r=r.parentNode}r=void 0}r=qm(r)}}function Fm(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Fm(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Ym(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Ti(e.document);n instanceof e.HTMLIFrameElement;){try{var r=typeof n.contentWindow.location.href=="string"}catch{r=!1}if(r)e=n.contentWindow;else break;n=Ti(e.document)}return n}function ph(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var T0=Xe&&"documentMode"in document&&11>=document.documentMode,oa=null,yh=null,So=null,_h=!1;function Km(e,n,r){var o=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;_h||oa==null||oa!==Ti(o)||(o=oa,"selectionStart"in o&&ph(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),So&&Ao(So,o)||(So=o,o=zu(yh,"onSelect"),0<o.length&&(n=new sr("onSelect","select",null,n,r),e.push({event:n,listeners:o}),n.target=oa)))}function hr(e,n){var r={};return r[e.toLowerCase()]=n.toLowerCase(),r["Webkit"+e]="webkit"+n,r["Moz"+e]="moz"+n,r}var la={animationend:hr("Animation","AnimationEnd"),animationiteration:hr("Animation","AnimationIteration"),animationstart:hr("Animation","AnimationStart"),transitionrun:hr("Transition","TransitionRun"),transitionstart:hr("Transition","TransitionStart"),transitioncancel:hr("Transition","TransitionCancel"),transitionend:hr("Transition","TransitionEnd")},vh={},Qm={};Xe&&(Qm=document.createElement("div").style,"AnimationEvent"in window||(delete la.animationend.animation,delete la.animationiteration.animation,delete la.animationstart.animation),"TransitionEvent"in window||delete la.transitionend.transition);function fr(e){if(vh[e])return vh[e];if(!la[e])return e;var n=la[e],r;for(r in n)if(n.hasOwnProperty(r)&&r in Qm)return vh[e]=n[r];return e}var Xm=fr("animationend"),$m=fr("animationiteration"),Zm=fr("animationstart"),A0=fr("transitionrun"),S0=fr("transitionstart"),b0=fr("transitioncancel"),Jm=fr("transitionend"),Wm=new Map,Eh="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Eh.push("scrollEnd");function zn(e,n){Wm.set(e,n),ti(n,[e])}var tg=new WeakMap;function An(e,n){if(typeof e=="object"&&e!==null){var r=tg.get(e);return r!==void 0?r:(n={value:e,source:n,stack:xn(n)},tg.set(e,n),n)}return{value:e,source:n,stack:xn(n)}}var Sn=[],ua=0,Th=0;function eu(){for(var e=ua,n=Th=ua=0;n<e;){var r=Sn[n];Sn[n++]=null;var o=Sn[n];Sn[n++]=null;var c=Sn[n];Sn[n++]=null;var f=Sn[n];if(Sn[n++]=null,o!==null&&c!==null){var y=o.pending;y===null?c.next=c:(c.next=y.next,y.next=c),o.pending=c}f!==0&&eg(r,c,f)}}function nu(e,n,r,o){Sn[ua++]=e,Sn[ua++]=n,Sn[ua++]=r,Sn[ua++]=o,Th|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Ah(e,n,r,o){return nu(e,n,r,o),iu(e)}function ca(e,n){return nu(e,null,null,n),iu(e)}function eg(e,n,r){e.lanes|=r;var o=e.alternate;o!==null&&(o.lanes|=r);for(var c=!1,f=e.return;f!==null;)f.childLanes|=r,o=f.alternate,o!==null&&(o.childLanes|=r),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(c=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,c&&n!==null&&(c=31-Ke(r),e=f.hiddenUpdates,o=e[c],o===null?e[c]=[n]:o.push(n),n.lane=r|536870912),f):null}function iu(e){if(50<Qo)throw Qo=0,Df=null,Error(a(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var ha={};function w0(e,n,r,o){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function cn(e,n,r,o){return new w0(e,n,r,o)}function Sh(e){return e=e.prototype,!(!e||!e.isReactComponent)}function wi(e,n){var r=e.alternate;return r===null?(r=cn(e.tag,n,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=n,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&65011712,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,n=e.dependencies,r.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r.refCleanup=e.refCleanup,r}function ng(e,n){e.flags&=65011714;var r=e.alternate;return r===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=r.childLanes,e.lanes=r.lanes,e.child=r.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=r.memoizedProps,e.memoizedState=r.memoizedState,e.updateQueue=r.updateQueue,e.type=r.type,n=r.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function su(e,n,r,o,c,f){var y=0;if(o=e,typeof e=="function")Sh(e)&&(y=1);else if(typeof e=="string")y=IA(e,r,ot.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case R:return e=cn(31,r,n,c),e.elementType=R,e.lanes=f,e;case $:return dr(r.children,c,f,n);case it:y=8,c|=24;break;case Z:return e=cn(12,r,n,c|2),e.elementType=Z,e.lanes=f,e;case lt:return e=cn(13,r,n,c),e.elementType=lt,e.lanes=f,e;case St:return e=cn(19,r,n,c),e.elementType=St,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Et:case ht:y=10;break t;case _t:y=9;break t;case vt:y=11;break t;case C:y=14;break t;case S:y=16,o=null;break t}y=29,r=Error(a(130,e===null?"null":typeof e,"")),o=null}return n=cn(y,r,n,c),n.elementType=e,n.type=o,n.lanes=f,n}function dr(e,n,r,o){return e=cn(7,e,o,n),e.lanes=r,e}function bh(e,n,r){return e=cn(6,e,null,n),e.lanes=r,e}function wh(e,n,r){return n=cn(4,e.children!==null?e.children:[],e.key,n),n.lanes=r,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var fa=[],da=0,ru=null,au=0,bn=[],wn=0,mr=null,Ri=1,Ii="";function gr(e,n){fa[da++]=au,fa[da++]=ru,ru=e,au=n}function ig(e,n,r){bn[wn++]=Ri,bn[wn++]=Ii,bn[wn++]=mr,mr=e;var o=Ri;e=Ii;var c=32-Ke(o)-1;o&=~(1<<c),r+=1;var f=32-Ke(n)+c;if(30<f){var y=c-c%5;f=(o&(1<<y)-1).toString(32),o>>=y,c-=y,Ri=1<<32-Ke(n)+c|r<<c|o,Ii=f+e}else Ri=1<<f|r<<c|o,Ii=e}function Rh(e){e.return!==null&&(gr(e,1),ig(e,1,0))}function Ih(e){for(;e===ru;)ru=fa[--da],fa[da]=null,au=fa[--da],fa[da]=null;for(;e===mr;)mr=bn[--wn],bn[wn]=null,Ii=bn[--wn],bn[wn]=null,Ri=bn[--wn],bn[wn]=null}var Ze=null,re=null,kt=!1,pr=null,ri=!1,Ch=Error(a(519));function yr(e){var n=Error(a(418,""));throw Ro(An(n,e)),Ch}function sg(e){var n=e.stateNode,r=e.type,o=e.memoizedProps;switch(n[ue]=e,n[Oe]=o,r){case"dialog":Ct("cancel",n),Ct("close",n);break;case"iframe":case"object":case"embed":Ct("load",n);break;case"video":case"audio":for(r=0;r<$o.length;r++)Ct($o[r],n);break;case"source":Ct("error",n);break;case"img":case"image":case"link":Ct("error",n),Ct("load",n);break;case"details":Ct("toggle",n);break;case"input":Ct("invalid",n),oo(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),ns(n);break;case"select":Ct("invalid",n);break;case"textarea":Ct("invalid",n),jl(n,o.value,o.defaultValue,o.children),ns(n)}r=o.children,typeof r!="string"&&typeof r!="number"&&typeof r!="bigint"||n.textContent===""+r||o.suppressHydrationWarning===!0||Ty(n.textContent,r)?(o.popover!=null&&(Ct("beforetoggle",n),Ct("toggle",n)),o.onScroll!=null&&Ct("scroll",n),o.onScrollEnd!=null&&Ct("scrollend",n),o.onClick!=null&&(n.onclick=Bu),n=!0):n=!1,n||yr(e)}function rg(e){for(Ze=e.return;Ze;)switch(Ze.tag){case 5:case 13:ri=!1;return;case 27:case 3:ri=!0;return;default:Ze=Ze.return}}function bo(e){if(e!==Ze)return!1;if(!kt)return rg(e),kt=!0,!1;var n=e.tag,r;if((r=n!==3&&n!==27)&&((r=n===5)&&(r=e.type,r=!(r!=="form"&&r!=="button")||Ff(e.type,e.memoizedProps)),r=!r),r&&re&&yr(e),rg(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));t:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(r=e.data,r==="/$"){if(n===0){re=jn(e.nextSibling);break t}n--}else r!=="$"&&r!=="$!"&&r!=="$?"||n++;e=e.nextSibling}re=null}}else n===27?(n=re,Ss(e.type)?(e=Xf,Xf=null,re=e):re=n):re=Ze?jn(e.stateNode.nextSibling):null;return!0}function wo(){re=Ze=null,kt=!1}function ag(){var e=pr;return e!==null&&(en===null?en=e:en.push.apply(en,e),pr=null),e}function Ro(e){pr===null?pr=[e]:pr.push(e)}var Dh=K(null),_r=null,Ci=null;function ls(e,n,r){W(Dh,n._currentValue),n._currentValue=r}function Di(e){e._currentValue=Dh.current,et(Dh)}function Oh(e,n,r){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===r)break;e=e.return}}function Nh(e,n,r,o){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var f=c.dependencies;if(f!==null){var y=c.child;f=f.firstContext;t:for(;f!==null;){var E=f;f=c;for(var w=0;w<n.length;w++)if(E.context===n[w]){f.lanes|=r,E=f.alternate,E!==null&&(E.lanes|=r),Oh(f.return,r,e),o||(y=null);break t}f=E.next}}else if(c.tag===18){if(y=c.return,y===null)throw Error(a(341));y.lanes|=r,f=y.alternate,f!==null&&(f.lanes|=r),Oh(y,r,e),y=null}else y=c.child;if(y!==null)y.return=c;else for(y=c;y!==null;){if(y===e){y=null;break}if(c=y.sibling,c!==null){c.return=y.return,y=c;break}y=y.return}c=y}}function Io(e,n,r,o){e=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var y=c.alternate;if(y===null)throw Error(a(387));if(y=y.memoizedProps,y!==null){var E=c.type;un(c.pendingProps.value,y.value)||(e!==null?e.push(E):e=[E])}}else if(c===De.current){if(y=c.alternate,y===null)throw Error(a(387));y.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(nl):e=[nl])}c=c.return}e!==null&&Nh(n,e,r,o),n.flags|=262144}function ou(e){for(e=e.firstContext;e!==null;){if(!un(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function vr(e){_r=e,Ci=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Be(e){return og(_r,e)}function lu(e,n){return _r===null&&vr(e),og(e,n)}function og(e,n){var r=n._currentValue;if(n={context:n,memoizedValue:r,next:null},Ci===null){if(e===null)throw Error(a(308));Ci=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Ci=Ci.next=n;return r}var R0=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(r,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(r){return r()})}},I0=s.unstable_scheduleCallback,C0=s.unstable_NormalPriority,Ee={$$typeof:ht,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Mh(){return{controller:new R0,data:new Map,refCount:0}}function Co(e){e.refCount--,e.refCount===0&&I0(C0,function(){e.controller.abort()})}var Do=null,Vh=0,ma=0,ga=null;function D0(e,n){if(Do===null){var r=Do=[];Vh=0,ma=Uf(),ga={status:"pending",value:void 0,then:function(o){r.push(o)}}}return Vh++,n.then(lg,lg),n}function lg(){if(--Vh===0&&Do!==null){ga!==null&&(ga.status="fulfilled");var e=Do;Do=null,ma=0,ga=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function O0(e,n){var r=[],o={status:"pending",value:null,reason:null,then:function(c){r.push(c)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var c=0;c<r.length;c++)(0,r[c])(n)},function(c){for(o.status="rejected",o.reason=c,c=0;c<r.length;c++)(0,r[c])(void 0)}),o}var ug=H.S;H.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&D0(e,n),ug!==null&&ug(e,n)};var Er=K(null);function xh(){var e=Er.current;return e!==null?e:Qt.pooledCache}function uu(e,n){n===null?W(Er,Er.current):W(Er,n.pool)}function cg(){var e=xh();return e===null?null:{parent:Ee._currentValue,pool:e}}var Oo=Error(a(460)),hg=Error(a(474)),cu=Error(a(542)),kh={then:function(){}};function fg(e){return e=e.status,e==="fulfilled"||e==="rejected"}function hu(){}function dg(e,n,r){switch(r=e[r],r===void 0?e.push(n):r!==n&&(n.then(hu,hu),n=r),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,gg(e),e;default:if(typeof n.status=="string")n.then(hu,hu);else{if(e=Qt,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=o}},function(o){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,gg(e),e}throw No=n,Oo}}var No=null;function mg(){if(No===null)throw Error(a(459));var e=No;return No=null,e}function gg(e){if(e===Oo||e===cu)throw Error(a(483))}var us=!1;function Uh(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ph(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function cs(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function hs(e,n,r){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(zt&2)!==0){var c=o.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),o.pending=n,n=iu(e),eg(e,null,r),n}return nu(e,o,n,r),iu(e)}function Mo(e,n,r){if(n=n.updateQueue,n!==null&&(n=n.shared,(r&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,r|=o,n.lanes=r,Zi(e,r)}}function Lh(e,n){var r=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,r===o)){var c=null,f=null;if(r=r.firstBaseUpdate,r!==null){do{var y={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};f===null?c=f=y:f=f.next=y,r=r.next}while(r!==null);f===null?c=f=n:f=f.next=n}else c=f=n;r={baseState:o.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=n:e.next=n,r.lastBaseUpdate=n}var zh=!1;function Vo(){if(zh){var e=ga;if(e!==null)throw e}}function xo(e,n,r,o){zh=!1;var c=e.updateQueue;us=!1;var f=c.firstBaseUpdate,y=c.lastBaseUpdate,E=c.shared.pending;if(E!==null){c.shared.pending=null;var w=E,L=w.next;w.next=null,y===null?f=L:y.next=L,y=w;var q=e.alternate;q!==null&&(q=q.updateQueue,E=q.lastBaseUpdate,E!==y&&(E===null?q.firstBaseUpdate=L:E.next=L,q.lastBaseUpdate=w))}if(f!==null){var F=c.baseState;y=0,q=L=w=null,E=f;do{var z=E.lane&-536870913,B=z!==E.lane;if(B?(Nt&z)===z:(o&z)===z){z!==0&&z===ma&&(zh=!0),q!==null&&(q=q.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});t:{var gt=e,ft=E;z=n;var Ft=r;switch(ft.tag){case 1:if(gt=ft.payload,typeof gt=="function"){F=gt.call(Ft,F,z);break t}F=gt;break t;case 3:gt.flags=gt.flags&-65537|128;case 0:if(gt=ft.payload,z=typeof gt=="function"?gt.call(Ft,F,z):gt,z==null)break t;F=A({},F,z);break t;case 2:us=!0}}z=E.callback,z!==null&&(e.flags|=64,B&&(e.flags|=8192),B=c.callbacks,B===null?c.callbacks=[z]:B.push(z))}else B={lane:z,tag:E.tag,payload:E.payload,callback:E.callback,next:null},q===null?(L=q=B,w=F):q=q.next=B,y|=z;if(E=E.next,E===null){if(E=c.shared.pending,E===null)break;B=E,E=B.next,B.next=null,c.lastBaseUpdate=B,c.shared.pending=null}}while(!0);q===null&&(w=F),c.baseState=w,c.firstBaseUpdate=L,c.lastBaseUpdate=q,f===null&&(c.shared.lanes=0),vs|=y,e.lanes=y,e.memoizedState=F}}function pg(e,n){if(typeof e!="function")throw Error(a(191,e));e.call(n)}function yg(e,n){var r=e.callbacks;if(r!==null)for(e.callbacks=null,e=0;e<r.length;e++)pg(r[e],n)}var pa=K(null),fu=K(0);function _g(e,n){e=Ui,W(fu,e),W(pa,n),Ui=e|n.baseLanes}function Bh(){W(fu,Ui),W(pa,pa.current)}function jh(){Ui=fu.current,et(pa),et(fu)}var fs=0,bt=null,qt=null,me=null,du=!1,ya=!1,Tr=!1,mu=0,ko=0,_a=null,N0=0;function fe(){throw Error(a(321))}function Hh(e,n){if(n===null)return!1;for(var r=0;r<n.length&&r<e.length;r++)if(!un(e[r],n[r]))return!1;return!0}function qh(e,n,r,o,c,f){return fs=f,bt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,H.H=e===null||e.memoizedState===null?ep:np,Tr=!1,f=r(o,c),Tr=!1,ya&&(f=Eg(n,r,o,c)),vg(e),f}function vg(e){H.H=Eu;var n=qt!==null&&qt.next!==null;if(fs=0,me=qt=bt=null,du=!1,ko=0,_a=null,n)throw Error(a(300));e===null||be||(e=e.dependencies,e!==null&&ou(e)&&(be=!0))}function Eg(e,n,r,o){bt=e;var c=0;do{if(ya&&(_a=null),ko=0,ya=!1,25<=c)throw Error(a(301));if(c+=1,me=qt=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}H.H=L0,f=n(r,o)}while(ya);return f}function M0(){var e=H.H,n=e.useState()[0];return n=typeof n.then=="function"?Uo(n):n,e=e.useState()[0],(qt!==null?qt.memoizedState:null)!==e&&(bt.flags|=1024),n}function Gh(){var e=mu!==0;return mu=0,e}function Fh(e,n,r){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~r}function Yh(e){if(du){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}du=!1}fs=0,me=qt=bt=null,ya=!1,ko=mu=0,_a=null}function We(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return me===null?bt.memoizedState=me=e:me=me.next=e,me}function ge(){if(qt===null){var e=bt.alternate;e=e!==null?e.memoizedState:null}else e=qt.next;var n=me===null?bt.memoizedState:me.next;if(n!==null)me=n,qt=e;else{if(e===null)throw bt.alternate===null?Error(a(467)):Error(a(310));qt=e,e={memoizedState:qt.memoizedState,baseState:qt.baseState,baseQueue:qt.baseQueue,queue:qt.queue,next:null},me===null?bt.memoizedState=me=e:me=me.next=e}return me}function Kh(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Uo(e){var n=ko;return ko+=1,_a===null&&(_a=[]),e=dg(_a,e,n),n=bt,(me===null?n.memoizedState:me.next)===null&&(n=n.alternate,H.H=n===null||n.memoizedState===null?ep:np),e}function gu(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Uo(e);if(e.$$typeof===ht)return Be(e)}throw Error(a(438,String(e)))}function Qh(e){var n=null,r=bt.updateQueue;if(r!==null&&(n=r.memoCache),n==null){var o=bt.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),r===null&&(r=Kh(),bt.updateQueue=r),r.memoCache=n,r=n.data[n.index],r===void 0)for(r=n.data[n.index]=Array(e),o=0;o<e;o++)r[o]=M;return n.index++,r}function Oi(e,n){return typeof n=="function"?n(e):n}function pu(e){var n=ge();return Xh(n,qt,e)}function Xh(e,n,r){var o=e.queue;if(o===null)throw Error(a(311));o.lastRenderedReducer=r;var c=e.baseQueue,f=o.pending;if(f!==null){if(c!==null){var y=c.next;c.next=f.next,f.next=y}n.baseQueue=c=f,o.pending=null}if(f=e.baseState,c===null)e.memoizedState=f;else{n=c.next;var E=y=null,w=null,L=n,q=!1;do{var F=L.lane&-536870913;if(F!==L.lane?(Nt&F)===F:(fs&F)===F){var z=L.revertLane;if(z===0)w!==null&&(w=w.next={lane:0,revertLane:0,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null}),F===ma&&(q=!0);else if((fs&z)===z){L=L.next,z===ma&&(q=!0);continue}else F={lane:0,revertLane:L.revertLane,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null},w===null?(E=w=F,y=f):w=w.next=F,bt.lanes|=z,vs|=z;F=L.action,Tr&&r(f,F),f=L.hasEagerState?L.eagerState:r(f,F)}else z={lane:F,revertLane:L.revertLane,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null},w===null?(E=w=z,y=f):w=w.next=z,bt.lanes|=F,vs|=F;L=L.next}while(L!==null&&L!==n);if(w===null?y=f:w.next=E,!un(f,e.memoizedState)&&(be=!0,q&&(r=ga,r!==null)))throw r;e.memoizedState=f,e.baseState=y,e.baseQueue=w,o.lastRenderedState=f}return c===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function $h(e){var n=ge(),r=n.queue;if(r===null)throw Error(a(311));r.lastRenderedReducer=e;var o=r.dispatch,c=r.pending,f=n.memoizedState;if(c!==null){r.pending=null;var y=c=c.next;do f=e(f,y.action),y=y.next;while(y!==c);un(f,n.memoizedState)||(be=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),r.lastRenderedState=f}return[f,o]}function Tg(e,n,r){var o=bt,c=ge(),f=kt;if(f){if(r===void 0)throw Error(a(407));r=r()}else r=n();var y=!un((qt||c).memoizedState,r);y&&(c.memoizedState=r,be=!0),c=c.queue;var E=bg.bind(null,o,c,e);if(Po(2048,8,E,[e]),c.getSnapshot!==n||y||me!==null&&me.memoizedState.tag&1){if(o.flags|=2048,va(9,yu(),Sg.bind(null,o,c,r,n),null),Qt===null)throw Error(a(349));f||(fs&124)!==0||Ag(o,n,r)}return r}function Ag(e,n,r){e.flags|=16384,e={getSnapshot:n,value:r},n=bt.updateQueue,n===null?(n=Kh(),bt.updateQueue=n,n.stores=[e]):(r=n.stores,r===null?n.stores=[e]:r.push(e))}function Sg(e,n,r,o){n.value=r,n.getSnapshot=o,wg(n)&&Rg(e)}function bg(e,n,r){return r(function(){wg(n)&&Rg(e)})}function wg(e){var n=e.getSnapshot;e=e.value;try{var r=n();return!un(e,r)}catch{return!0}}function Rg(e){var n=ca(e,2);n!==null&&gn(n,e,2)}function Zh(e){var n=We();if(typeof e=="function"){var r=e;if(e=r(),Tr){yn(!0);try{r()}finally{yn(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Oi,lastRenderedState:e},n}function Ig(e,n,r,o){return e.baseState=r,Xh(e,qt,typeof o=="function"?o:Oi)}function V0(e,n,r,o,c){if(vu(e))throw Error(a(485));if(e=n.action,e!==null){var f={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){f.listeners.push(y)}};H.T!==null?r(!0):f.isTransition=!1,o(f),r=n.pending,r===null?(f.next=n.pending=f,Cg(n,f)):(f.next=r.next,n.pending=r.next=f)}}function Cg(e,n){var r=n.action,o=n.payload,c=e.state;if(n.isTransition){var f=H.T,y={};H.T=y;try{var E=r(c,o),w=H.S;w!==null&&w(y,E),Dg(e,n,E)}catch(L){Jh(e,n,L)}finally{H.T=f}}else try{f=r(c,o),Dg(e,n,f)}catch(L){Jh(e,n,L)}}function Dg(e,n,r){r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(function(o){Og(e,n,o)},function(o){return Jh(e,n,o)}):Og(e,n,r)}function Og(e,n,r){n.status="fulfilled",n.value=r,Ng(n),e.state=r,n=e.pending,n!==null&&(r=n.next,r===n?e.pending=null:(r=r.next,n.next=r,Cg(e,r)))}function Jh(e,n,r){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=r,Ng(n),n=n.next;while(n!==o)}e.action=null}function Ng(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Mg(e,n){return n}function Vg(e,n){if(kt){var r=Qt.formState;if(r!==null){t:{var o=bt;if(kt){if(re){e:{for(var c=re,f=ri;c.nodeType!==8;){if(!f){c=null;break e}if(c=jn(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){re=jn(c.nextSibling),o=c.data==="F!";break t}}yr(o)}o=!1}o&&(n=r[0])}}return r=We(),r.memoizedState=r.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Mg,lastRenderedState:n},r.queue=o,r=Jg.bind(null,bt,o),o.dispatch=r,o=Zh(!1),f=sf.bind(null,bt,!1,o.queue),o=We(),c={state:n,dispatch:null,action:e,pending:null},o.queue=c,r=V0.bind(null,bt,c,f,r),c.dispatch=r,o.memoizedState=e,[n,r,!1]}function xg(e){var n=ge();return kg(n,qt,e)}function kg(e,n,r){if(n=Xh(e,n,Mg)[0],e=pu(Oi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=Uo(n)}catch(y){throw y===Oo?cu:y}else o=n;n=ge();var c=n.queue,f=c.dispatch;return r!==n.memoizedState&&(bt.flags|=2048,va(9,yu(),x0.bind(null,c,r),null)),[o,f,e]}function x0(e,n){e.action=n}function Ug(e){var n=ge(),r=qt;if(r!==null)return kg(n,r,e);ge(),n=n.memoizedState,r=ge();var o=r.queue.dispatch;return r.memoizedState=e,[n,o,!1]}function va(e,n,r,o){return e={tag:e,create:r,deps:o,inst:n,next:null},n=bt.updateQueue,n===null&&(n=Kh(),bt.updateQueue=n),r=n.lastEffect,r===null?n.lastEffect=e.next=e:(o=r.next,r.next=e,e.next=o,n.lastEffect=e),e}function yu(){return{destroy:void 0,resource:void 0}}function Pg(){return ge().memoizedState}function _u(e,n,r,o){var c=We();o=o===void 0?null:o,bt.flags|=e,c.memoizedState=va(1|n,yu(),r,o)}function Po(e,n,r,o){var c=ge();o=o===void 0?null:o;var f=c.memoizedState.inst;qt!==null&&o!==null&&Hh(o,qt.memoizedState.deps)?c.memoizedState=va(n,f,r,o):(bt.flags|=e,c.memoizedState=va(1|n,f,r,o))}function Lg(e,n){_u(8390656,8,e,n)}function zg(e,n){Po(2048,8,e,n)}function Bg(e,n){return Po(4,2,e,n)}function jg(e,n){return Po(4,4,e,n)}function Hg(e,n){if(typeof n=="function"){e=e();var r=n(e);return function(){typeof r=="function"?r():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function qg(e,n,r){r=r!=null?r.concat([e]):null,Po(4,4,Hg.bind(null,n,e),r)}function Wh(){}function Gg(e,n){var r=ge();n=n===void 0?null:n;var o=r.memoizedState;return n!==null&&Hh(n,o[1])?o[0]:(r.memoizedState=[e,n],e)}function Fg(e,n){var r=ge();n=n===void 0?null:n;var o=r.memoizedState;if(n!==null&&Hh(n,o[1]))return o[0];if(o=e(),Tr){yn(!0);try{e()}finally{yn(!1)}}return r.memoizedState=[o,n],o}function tf(e,n,r){return r===void 0||(fs&1073741824)!==0?e.memoizedState=n:(e.memoizedState=r,e=Qp(),bt.lanes|=e,vs|=e,r)}function Yg(e,n,r,o){return un(r,n)?r:pa.current!==null?(e=tf(e,r,o),un(e,n)||(be=!0),e):(fs&42)===0?(be=!0,e.memoizedState=r):(e=Qp(),bt.lanes|=e,vs|=e,n)}function Kg(e,n,r,o,c){var f=tt.p;tt.p=f!==0&&8>f?f:8;var y=H.T,E={};H.T=E,sf(e,!1,n,r);try{var w=c(),L=H.S;if(L!==null&&L(E,w),w!==null&&typeof w=="object"&&typeof w.then=="function"){var q=O0(w,o);Lo(e,n,q,mn(e))}else Lo(e,n,o,mn(e))}catch(F){Lo(e,n,{then:function(){},status:"rejected",reason:F},mn())}finally{tt.p=f,H.T=y}}function k0(){}function ef(e,n,r,o){if(e.tag!==5)throw Error(a(476));var c=Qg(e).queue;Kg(e,c,n,ut,r===null?k0:function(){return Xg(e),r(o)})}function Qg(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:ut,baseState:ut,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Oi,lastRenderedState:ut},next:null};var r={};return n.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Oi,lastRenderedState:r},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Xg(e){var n=Qg(e).next.queue;Lo(e,n,{},mn())}function nf(){return Be(nl)}function $g(){return ge().memoizedState}function Zg(){return ge().memoizedState}function U0(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var r=mn();e=cs(r);var o=hs(n,e,r);o!==null&&(gn(o,n,r),Mo(o,n,r)),n={cache:Mh()},e.payload=n;return}n=n.return}}function P0(e,n,r){var o=mn();r={lane:o,revertLane:0,action:r,hasEagerState:!1,eagerState:null,next:null},vu(e)?Wg(n,r):(r=Ah(e,n,r,o),r!==null&&(gn(r,e,o),tp(r,n,o)))}function Jg(e,n,r){var o=mn();Lo(e,n,r,o)}function Lo(e,n,r,o){var c={lane:o,revertLane:0,action:r,hasEagerState:!1,eagerState:null,next:null};if(vu(e))Wg(n,c);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var y=n.lastRenderedState,E=f(y,r);if(c.hasEagerState=!0,c.eagerState=E,un(E,y))return nu(e,n,c,0),Qt===null&&eu(),!1}catch{}finally{}if(r=Ah(e,n,c,o),r!==null)return gn(r,e,o),tp(r,n,o),!0}return!1}function sf(e,n,r,o){if(o={lane:2,revertLane:Uf(),action:o,hasEagerState:!1,eagerState:null,next:null},vu(e)){if(n)throw Error(a(479))}else n=Ah(e,r,o,2),n!==null&&gn(n,e,2)}function vu(e){var n=e.alternate;return e===bt||n!==null&&n===bt}function Wg(e,n){ya=du=!0;var r=e.pending;r===null?n.next=n:(n.next=r.next,r.next=n),e.pending=n}function tp(e,n,r){if((r&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,r|=o,n.lanes=r,Zi(e,r)}}var Eu={readContext:Be,use:gu,useCallback:fe,useContext:fe,useEffect:fe,useImperativeHandle:fe,useLayoutEffect:fe,useInsertionEffect:fe,useMemo:fe,useReducer:fe,useRef:fe,useState:fe,useDebugValue:fe,useDeferredValue:fe,useTransition:fe,useSyncExternalStore:fe,useId:fe,useHostTransitionStatus:fe,useFormState:fe,useActionState:fe,useOptimistic:fe,useMemoCache:fe,useCacheRefresh:fe},ep={readContext:Be,use:gu,useCallback:function(e,n){return We().memoizedState=[e,n===void 0?null:n],e},useContext:Be,useEffect:Lg,useImperativeHandle:function(e,n,r){r=r!=null?r.concat([e]):null,_u(4194308,4,Hg.bind(null,n,e),r)},useLayoutEffect:function(e,n){return _u(4194308,4,e,n)},useInsertionEffect:function(e,n){_u(4,2,e,n)},useMemo:function(e,n){var r=We();n=n===void 0?null:n;var o=e();if(Tr){yn(!0);try{e()}finally{yn(!1)}}return r.memoizedState=[o,n],o},useReducer:function(e,n,r){var o=We();if(r!==void 0){var c=r(n);if(Tr){yn(!0);try{r(n)}finally{yn(!1)}}}else c=n;return o.memoizedState=o.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},o.queue=e,e=e.dispatch=P0.bind(null,bt,e),[o.memoizedState,e]},useRef:function(e){var n=We();return e={current:e},n.memoizedState=e},useState:function(e){e=Zh(e);var n=e.queue,r=Jg.bind(null,bt,n);return n.dispatch=r,[e.memoizedState,r]},useDebugValue:Wh,useDeferredValue:function(e,n){var r=We();return tf(r,e,n)},useTransition:function(){var e=Zh(!1);return e=Kg.bind(null,bt,e.queue,!0,!1),We().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,r){var o=bt,c=We();if(kt){if(r===void 0)throw Error(a(407));r=r()}else{if(r=n(),Qt===null)throw Error(a(349));(Nt&124)!==0||Ag(o,n,r)}c.memoizedState=r;var f={value:r,getSnapshot:n};return c.queue=f,Lg(bg.bind(null,o,f,e),[e]),o.flags|=2048,va(9,yu(),Sg.bind(null,o,f,r,n),null),r},useId:function(){var e=We(),n=Qt.identifierPrefix;if(kt){var r=Ii,o=Ri;r=(o&~(1<<32-Ke(o)-1)).toString(32)+r,n="«"+n+"R"+r,r=mu++,0<r&&(n+="H"+r.toString(32)),n+="»"}else r=N0++,n="«"+n+"r"+r.toString(32)+"»";return e.memoizedState=n},useHostTransitionStatus:nf,useFormState:Vg,useActionState:Vg,useOptimistic:function(e){var n=We();n.memoizedState=n.baseState=e;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=r,n=sf.bind(null,bt,!0,r),r.dispatch=n,[e,n]},useMemoCache:Qh,useCacheRefresh:function(){return We().memoizedState=U0.bind(null,bt)}},np={readContext:Be,use:gu,useCallback:Gg,useContext:Be,useEffect:zg,useImperativeHandle:qg,useInsertionEffect:Bg,useLayoutEffect:jg,useMemo:Fg,useReducer:pu,useRef:Pg,useState:function(){return pu(Oi)},useDebugValue:Wh,useDeferredValue:function(e,n){var r=ge();return Yg(r,qt.memoizedState,e,n)},useTransition:function(){var e=pu(Oi)[0],n=ge().memoizedState;return[typeof e=="boolean"?e:Uo(e),n]},useSyncExternalStore:Tg,useId:$g,useHostTransitionStatus:nf,useFormState:xg,useActionState:xg,useOptimistic:function(e,n){var r=ge();return Ig(r,qt,e,n)},useMemoCache:Qh,useCacheRefresh:Zg},L0={readContext:Be,use:gu,useCallback:Gg,useContext:Be,useEffect:zg,useImperativeHandle:qg,useInsertionEffect:Bg,useLayoutEffect:jg,useMemo:Fg,useReducer:$h,useRef:Pg,useState:function(){return $h(Oi)},useDebugValue:Wh,useDeferredValue:function(e,n){var r=ge();return qt===null?tf(r,e,n):Yg(r,qt.memoizedState,e,n)},useTransition:function(){var e=$h(Oi)[0],n=ge().memoizedState;return[typeof e=="boolean"?e:Uo(e),n]},useSyncExternalStore:Tg,useId:$g,useHostTransitionStatus:nf,useFormState:Ug,useActionState:Ug,useOptimistic:function(e,n){var r=ge();return qt!==null?Ig(r,qt,e,n):(r.baseState=e,[e,r.queue.dispatch])},useMemoCache:Qh,useCacheRefresh:Zg},Ea=null,zo=0;function Tu(e){var n=zo;return zo+=1,Ea===null&&(Ea=[]),dg(Ea,e,n)}function Bo(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Au(e,n){throw n.$$typeof===I?Error(a(525)):(e=Object.prototype.toString.call(n),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function ip(e){var n=e._init;return n(e._payload)}function sp(e){function n(x,N){if(e){var U=x.deletions;U===null?(x.deletions=[N],x.flags|=16):U.push(N)}}function r(x,N){if(!e)return null;for(;N!==null;)n(x,N),N=N.sibling;return null}function o(x){for(var N=new Map;x!==null;)x.key!==null?N.set(x.key,x):N.set(x.index,x),x=x.sibling;return N}function c(x,N){return x=wi(x,N),x.index=0,x.sibling=null,x}function f(x,N,U){return x.index=U,e?(U=x.alternate,U!==null?(U=U.index,U<N?(x.flags|=67108866,N):U):(x.flags|=67108866,N)):(x.flags|=1048576,N)}function y(x){return e&&x.alternate===null&&(x.flags|=67108866),x}function E(x,N,U,G){return N===null||N.tag!==6?(N=bh(U,x.mode,G),N.return=x,N):(N=c(N,U),N.return=x,N)}function w(x,N,U,G){var st=U.type;return st===$?q(x,N,U.props.children,G,U.key):N!==null&&(N.elementType===st||typeof st=="object"&&st!==null&&st.$$typeof===S&&ip(st)===N.type)?(N=c(N,U.props),Bo(N,U),N.return=x,N):(N=su(U.type,U.key,U.props,null,x.mode,G),Bo(N,U),N.return=x,N)}function L(x,N,U,G){return N===null||N.tag!==4||N.stateNode.containerInfo!==U.containerInfo||N.stateNode.implementation!==U.implementation?(N=wh(U,x.mode,G),N.return=x,N):(N=c(N,U.children||[]),N.return=x,N)}function q(x,N,U,G,st){return N===null||N.tag!==7?(N=dr(U,x.mode,G,st),N.return=x,N):(N=c(N,U),N.return=x,N)}function F(x,N,U){if(typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint")return N=bh(""+N,x.mode,U),N.return=x,N;if(typeof N=="object"&&N!==null){switch(N.$$typeof){case k:return U=su(N.type,N.key,N.props,null,x.mode,U),Bo(U,N),U.return=x,U;case Q:return N=wh(N,x.mode,U),N.return=x,N;case S:var G=N._init;return N=G(N._payload),F(x,N,U)}if(Zt(N)||V(N))return N=dr(N,x.mode,U,null),N.return=x,N;if(typeof N.then=="function")return F(x,Tu(N),U);if(N.$$typeof===ht)return F(x,lu(x,N),U);Au(x,N)}return null}function z(x,N,U,G){var st=N!==null?N.key:null;if(typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint")return st!==null?null:E(x,N,""+U,G);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case k:return U.key===st?w(x,N,U,G):null;case Q:return U.key===st?L(x,N,U,G):null;case S:return st=U._init,U=st(U._payload),z(x,N,U,G)}if(Zt(U)||V(U))return st!==null?null:q(x,N,U,G,null);if(typeof U.then=="function")return z(x,N,Tu(U),G);if(U.$$typeof===ht)return z(x,N,lu(x,U),G);Au(x,U)}return null}function B(x,N,U,G,st){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return x=x.get(U)||null,E(N,x,""+G,st);if(typeof G=="object"&&G!==null){switch(G.$$typeof){case k:return x=x.get(G.key===null?U:G.key)||null,w(N,x,G,st);case Q:return x=x.get(G.key===null?U:G.key)||null,L(N,x,G,st);case S:var Rt=G._init;return G=Rt(G._payload),B(x,N,U,G,st)}if(Zt(G)||V(G))return x=x.get(U)||null,q(N,x,G,st,null);if(typeof G.then=="function")return B(x,N,U,Tu(G),st);if(G.$$typeof===ht)return B(x,N,U,lu(N,G),st);Au(N,G)}return null}function gt(x,N,U,G){for(var st=null,Rt=null,at=N,dt=N=0,Re=null;at!==null&&dt<U.length;dt++){at.index>dt?(Re=at,at=null):Re=at.sibling;var xt=z(x,at,U[dt],G);if(xt===null){at===null&&(at=Re);break}e&&at&&xt.alternate===null&&n(x,at),N=f(xt,N,dt),Rt===null?st=xt:Rt.sibling=xt,Rt=xt,at=Re}if(dt===U.length)return r(x,at),kt&&gr(x,dt),st;if(at===null){for(;dt<U.length;dt++)at=F(x,U[dt],G),at!==null&&(N=f(at,N,dt),Rt===null?st=at:Rt.sibling=at,Rt=at);return kt&&gr(x,dt),st}for(at=o(at);dt<U.length;dt++)Re=B(at,x,dt,U[dt],G),Re!==null&&(e&&Re.alternate!==null&&at.delete(Re.key===null?dt:Re.key),N=f(Re,N,dt),Rt===null?st=Re:Rt.sibling=Re,Rt=Re);return e&&at.forEach(function(Cs){return n(x,Cs)}),kt&&gr(x,dt),st}function ft(x,N,U,G){if(U==null)throw Error(a(151));for(var st=null,Rt=null,at=N,dt=N=0,Re=null,xt=U.next();at!==null&&!xt.done;dt++,xt=U.next()){at.index>dt?(Re=at,at=null):Re=at.sibling;var Cs=z(x,at,xt.value,G);if(Cs===null){at===null&&(at=Re);break}e&&at&&Cs.alternate===null&&n(x,at),N=f(Cs,N,dt),Rt===null?st=Cs:Rt.sibling=Cs,Rt=Cs,at=Re}if(xt.done)return r(x,at),kt&&gr(x,dt),st;if(at===null){for(;!xt.done;dt++,xt=U.next())xt=F(x,xt.value,G),xt!==null&&(N=f(xt,N,dt),Rt===null?st=xt:Rt.sibling=xt,Rt=xt);return kt&&gr(x,dt),st}for(at=o(at);!xt.done;dt++,xt=U.next())xt=B(at,x,dt,xt.value,G),xt!==null&&(e&&xt.alternate!==null&&at.delete(xt.key===null?dt:xt.key),N=f(xt,N,dt),Rt===null?st=xt:Rt.sibling=xt,Rt=xt);return e&&at.forEach(function(zA){return n(x,zA)}),kt&&gr(x,dt),st}function Ft(x,N,U,G){if(typeof U=="object"&&U!==null&&U.type===$&&U.key===null&&(U=U.props.children),typeof U=="object"&&U!==null){switch(U.$$typeof){case k:t:{for(var st=U.key;N!==null;){if(N.key===st){if(st=U.type,st===$){if(N.tag===7){r(x,N.sibling),G=c(N,U.props.children),G.return=x,x=G;break t}}else if(N.elementType===st||typeof st=="object"&&st!==null&&st.$$typeof===S&&ip(st)===N.type){r(x,N.sibling),G=c(N,U.props),Bo(G,U),G.return=x,x=G;break t}r(x,N);break}else n(x,N);N=N.sibling}U.type===$?(G=dr(U.props.children,x.mode,G,U.key),G.return=x,x=G):(G=su(U.type,U.key,U.props,null,x.mode,G),Bo(G,U),G.return=x,x=G)}return y(x);case Q:t:{for(st=U.key;N!==null;){if(N.key===st)if(N.tag===4&&N.stateNode.containerInfo===U.containerInfo&&N.stateNode.implementation===U.implementation){r(x,N.sibling),G=c(N,U.children||[]),G.return=x,x=G;break t}else{r(x,N);break}else n(x,N);N=N.sibling}G=wh(U,x.mode,G),G.return=x,x=G}return y(x);case S:return st=U._init,U=st(U._payload),Ft(x,N,U,G)}if(Zt(U))return gt(x,N,U,G);if(V(U)){if(st=V(U),typeof st!="function")throw Error(a(150));return U=st.call(U),ft(x,N,U,G)}if(typeof U.then=="function")return Ft(x,N,Tu(U),G);if(U.$$typeof===ht)return Ft(x,N,lu(x,U),G);Au(x,U)}return typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint"?(U=""+U,N!==null&&N.tag===6?(r(x,N.sibling),G=c(N,U),G.return=x,x=G):(r(x,N),G=bh(U,x.mode,G),G.return=x,x=G),y(x)):r(x,N)}return function(x,N,U,G){try{zo=0;var st=Ft(x,N,U,G);return Ea=null,st}catch(at){if(at===Oo||at===cu)throw at;var Rt=cn(29,at,null,x.mode);return Rt.lanes=G,Rt.return=x,Rt}finally{}}}var Ta=sp(!0),rp=sp(!1),Rn=K(null),ai=null;function ds(e){var n=e.alternate;W(Te,Te.current&1),W(Rn,e),ai===null&&(n===null||pa.current!==null||n.memoizedState!==null)&&(ai=e)}function ap(e){if(e.tag===22){if(W(Te,Te.current),W(Rn,e),ai===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&(ai=e)}}else ms()}function ms(){W(Te,Te.current),W(Rn,Rn.current)}function Ni(e){et(Rn),ai===e&&(ai=null),et(Te)}var Te=K(0);function Su(e){for(var n=e;n!==null;){if(n.tag===13){var r=n.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||Qf(r)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function rf(e,n,r,o){n=e.memoizedState,r=r(o,n),r=r==null?n:A({},n,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var af={enqueueSetState:function(e,n,r){e=e._reactInternals;var o=mn(),c=cs(o);c.payload=n,r!=null&&(c.callback=r),n=hs(e,c,o),n!==null&&(gn(n,e,o),Mo(n,e,o))},enqueueReplaceState:function(e,n,r){e=e._reactInternals;var o=mn(),c=cs(o);c.tag=1,c.payload=n,r!=null&&(c.callback=r),n=hs(e,c,o),n!==null&&(gn(n,e,o),Mo(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var r=mn(),o=cs(r);o.tag=2,n!=null&&(o.callback=n),n=hs(e,o,r),n!==null&&(gn(n,e,r),Mo(n,e,r))}};function op(e,n,r,o,c,f,y){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,f,y):n.prototype&&n.prototype.isPureReactComponent?!Ao(r,o)||!Ao(c,f):!0}function lp(e,n,r,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(r,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(r,o),n.state!==e&&af.enqueueReplaceState(n,n.state,null)}function Ar(e,n){var r=n;if("ref"in n){r={};for(var o in n)o!=="ref"&&(r[o]=n[o])}if(e=e.defaultProps){r===n&&(r=A({},r));for(var c in e)r[c]===void 0&&(r[c]=e[c])}return r}var bu=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function up(e){bu(e)}function cp(e){console.error(e)}function hp(e){bu(e)}function wu(e,n){try{var r=e.onUncaughtError;r(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function fp(e,n,r){try{var o=e.onCaughtError;o(r.value,{componentStack:r.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function of(e,n,r){return r=cs(r),r.tag=3,r.payload={element:null},r.callback=function(){wu(e,n)},r}function dp(e){return e=cs(e),e.tag=3,e}function mp(e,n,r,o){var c=r.type.getDerivedStateFromError;if(typeof c=="function"){var f=o.value;e.payload=function(){return c(f)},e.callback=function(){fp(n,r,o)}}var y=r.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(e.callback=function(){fp(n,r,o),typeof c!="function"&&(Es===null?Es=new Set([this]):Es.add(this));var E=o.stack;this.componentDidCatch(o.value,{componentStack:E!==null?E:""})})}function z0(e,n,r,o,c){if(r.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=r.alternate,n!==null&&Io(n,r,c,!0),r=Rn.current,r!==null){switch(r.tag){case 13:return ai===null?Nf():r.alternate===null&&ae===0&&(ae=3),r.flags&=-257,r.flags|=65536,r.lanes=c,o===kh?r.flags|=16384:(n=r.updateQueue,n===null?r.updateQueue=new Set([o]):n.add(o),Vf(e,o,c)),!1;case 22:return r.flags|=65536,o===kh?r.flags|=16384:(n=r.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},r.updateQueue=n):(r=n.retryQueue,r===null?n.retryQueue=new Set([o]):r.add(o)),Vf(e,o,c)),!1}throw Error(a(435,r.tag))}return Vf(e,o,c),Nf(),!1}if(kt)return n=Rn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,o!==Ch&&(e=Error(a(422),{cause:o}),Ro(An(e,r)))):(o!==Ch&&(n=Error(a(423),{cause:o}),Ro(An(n,r))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,o=An(o,r),c=of(e.stateNode,o,c),Lh(e,c),ae!==4&&(ae=2)),!1;var f=Error(a(520),{cause:o});if(f=An(f,r),Ko===null?Ko=[f]:Ko.push(f),ae!==4&&(ae=2),n===null)return!0;o=An(o,r),r=n;do{switch(r.tag){case 3:return r.flags|=65536,e=c&-c,r.lanes|=e,e=of(r.stateNode,o,e),Lh(r,e),!1;case 1:if(n=r.type,f=r.stateNode,(r.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Es===null||!Es.has(f))))return r.flags|=65536,c&=-c,r.lanes|=c,c=dp(c),mp(c,e,r,o),Lh(r,c),!1}r=r.return}while(r!==null);return!1}var gp=Error(a(461)),be=!1;function Ne(e,n,r,o){n.child=e===null?rp(n,null,r,o):Ta(n,e.child,r,o)}function pp(e,n,r,o,c){r=r.render;var f=n.ref;if("ref"in o){var y={};for(var E in o)E!=="ref"&&(y[E]=o[E])}else y=o;return vr(n),o=qh(e,n,r,y,f,c),E=Gh(),e!==null&&!be?(Fh(e,n,c),Mi(e,n,c)):(kt&&E&&Rh(n),n.flags|=1,Ne(e,n,o,c),n.child)}function yp(e,n,r,o,c){if(e===null){var f=r.type;return typeof f=="function"&&!Sh(f)&&f.defaultProps===void 0&&r.compare===null?(n.tag=15,n.type=f,_p(e,n,f,o,c)):(e=su(r.type,null,o,n,n.mode,c),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!gf(e,c)){var y=f.memoizedProps;if(r=r.compare,r=r!==null?r:Ao,r(y,o)&&e.ref===n.ref)return Mi(e,n,c)}return n.flags|=1,e=wi(f,o),e.ref=n.ref,e.return=n,n.child=e}function _p(e,n,r,o,c){if(e!==null){var f=e.memoizedProps;if(Ao(f,o)&&e.ref===n.ref)if(be=!1,n.pendingProps=o=f,gf(e,c))(e.flags&131072)!==0&&(be=!0);else return n.lanes=e.lanes,Mi(e,n,c)}return lf(e,n,r,o,c)}function vp(e,n,r){var o=n.pendingProps,c=o.children,f=e!==null?e.memoizedState:null;if(o.mode==="hidden"){if((n.flags&128)!==0){if(o=f!==null?f.baseLanes|r:r,e!==null){for(c=n.child=e.child,f=0;c!==null;)f=f|c.lanes|c.childLanes,c=c.sibling;n.childLanes=f&~o}else n.childLanes=0,n.child=null;return Ep(e,n,o,r)}if((r&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&uu(n,f!==null?f.cachePool:null),f!==null?_g(n,f):Bh(),ap(n);else return n.lanes=n.childLanes=536870912,Ep(e,n,f!==null?f.baseLanes|r:r,r)}else f!==null?(uu(n,f.cachePool),_g(n,f),ms(),n.memoizedState=null):(e!==null&&uu(n,null),Bh(),ms());return Ne(e,n,c,r),n.child}function Ep(e,n,r,o){var c=xh();return c=c===null?null:{parent:Ee._currentValue,pool:c},n.memoizedState={baseLanes:r,cachePool:c},e!==null&&uu(n,null),Bh(),ap(n),e!==null&&Io(e,n,o,!0),null}function Ru(e,n){var r=n.ref;if(r===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof r!="function"&&typeof r!="object")throw Error(a(284));(e===null||e.ref!==r)&&(n.flags|=4194816)}}function lf(e,n,r,o,c){return vr(n),r=qh(e,n,r,o,void 0,c),o=Gh(),e!==null&&!be?(Fh(e,n,c),Mi(e,n,c)):(kt&&o&&Rh(n),n.flags|=1,Ne(e,n,r,c),n.child)}function Tp(e,n,r,o,c,f){return vr(n),n.updateQueue=null,r=Eg(n,o,r,c),vg(e),o=Gh(),e!==null&&!be?(Fh(e,n,f),Mi(e,n,f)):(kt&&o&&Rh(n),n.flags|=1,Ne(e,n,r,f),n.child)}function Ap(e,n,r,o,c){if(vr(n),n.stateNode===null){var f=ha,y=r.contextType;typeof y=="object"&&y!==null&&(f=Be(y)),f=new r(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=af,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},Uh(n),y=r.contextType,f.context=typeof y=="object"&&y!==null?Be(y):ha,f.state=n.memoizedState,y=r.getDerivedStateFromProps,typeof y=="function"&&(rf(n,r,y,o),f.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(y=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),y!==f.state&&af.enqueueReplaceState(f,f.state,null),xo(n,o,f,c),Vo(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){f=n.stateNode;var E=n.memoizedProps,w=Ar(r,E);f.props=w;var L=f.context,q=r.contextType;y=ha,typeof q=="object"&&q!==null&&(y=Be(q));var F=r.getDerivedStateFromProps;q=typeof F=="function"||typeof f.getSnapshotBeforeUpdate=="function",E=n.pendingProps!==E,q||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(E||L!==y)&&lp(n,f,o,y),us=!1;var z=n.memoizedState;f.state=z,xo(n,o,f,c),Vo(),L=n.memoizedState,E||z!==L||us?(typeof F=="function"&&(rf(n,r,F,o),L=n.memoizedState),(w=us||op(n,r,w,o,z,L,y))?(q||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=L),f.props=o,f.state=L,f.context=y,o=w):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,Ph(e,n),y=n.memoizedProps,q=Ar(r,y),f.props=q,F=n.pendingProps,z=f.context,L=r.contextType,w=ha,typeof L=="object"&&L!==null&&(w=Be(L)),E=r.getDerivedStateFromProps,(L=typeof E=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(y!==F||z!==w)&&lp(n,f,o,w),us=!1,z=n.memoizedState,f.state=z,xo(n,o,f,c),Vo();var B=n.memoizedState;y!==F||z!==B||us||e!==null&&e.dependencies!==null&&ou(e.dependencies)?(typeof E=="function"&&(rf(n,r,E,o),B=n.memoizedState),(q=us||op(n,r,q,o,z,B,w)||e!==null&&e.dependencies!==null&&ou(e.dependencies))?(L||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,B,w),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,B,w)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||y===e.memoizedProps&&z===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&z===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=B),f.props=o,f.state=B,f.context=w,o=q):(typeof f.componentDidUpdate!="function"||y===e.memoizedProps&&z===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&z===e.memoizedState||(n.flags|=1024),o=!1)}return f=o,Ru(e,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,r=o&&typeof r.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&o?(n.child=Ta(n,e.child,null,c),n.child=Ta(n,null,r,c)):Ne(e,n,r,c),n.memoizedState=f.state,e=n.child):e=Mi(e,n,c),e}function Sp(e,n,r,o){return wo(),n.flags|=256,Ne(e,n,r,o),n.child}var uf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function cf(e){return{baseLanes:e,cachePool:cg()}}function hf(e,n,r){return e=e!==null?e.childLanes&~r:0,n&&(e|=In),e}function bp(e,n,r){var o=n.pendingProps,c=!1,f=(n.flags&128)!==0,y;if((y=f)||(y=e!==null&&e.memoizedState===null?!1:(Te.current&2)!==0),y&&(c=!0,n.flags&=-129),y=(n.flags&32)!==0,n.flags&=-33,e===null){if(kt){if(c?ds(n):ms(),kt){var E=re,w;if(w=E){t:{for(w=E,E=ri;w.nodeType!==8;){if(!E){E=null;break t}if(w=jn(w.nextSibling),w===null){E=null;break t}}E=w}E!==null?(n.memoizedState={dehydrated:E,treeContext:mr!==null?{id:Ri,overflow:Ii}:null,retryLane:536870912,hydrationErrors:null},w=cn(18,null,null,0),w.stateNode=E,w.return=n,n.child=w,Ze=n,re=null,w=!0):w=!1}w||yr(n)}if(E=n.memoizedState,E!==null&&(E=E.dehydrated,E!==null))return Qf(E)?n.lanes=32:n.lanes=536870912,null;Ni(n)}return E=o.children,o=o.fallback,c?(ms(),c=n.mode,E=Iu({mode:"hidden",children:E},c),o=dr(o,c,r,null),E.return=n,o.return=n,E.sibling=o,n.child=E,c=n.child,c.memoizedState=cf(r),c.childLanes=hf(e,y,r),n.memoizedState=uf,o):(ds(n),ff(n,E))}if(w=e.memoizedState,w!==null&&(E=w.dehydrated,E!==null)){if(f)n.flags&256?(ds(n),n.flags&=-257,n=df(e,n,r)):n.memoizedState!==null?(ms(),n.child=e.child,n.flags|=128,n=null):(ms(),c=o.fallback,E=n.mode,o=Iu({mode:"visible",children:o.children},E),c=dr(c,E,r,null),c.flags|=2,o.return=n,c.return=n,o.sibling=c,n.child=o,Ta(n,e.child,null,r),o=n.child,o.memoizedState=cf(r),o.childLanes=hf(e,y,r),n.memoizedState=uf,n=c);else if(ds(n),Qf(E)){if(y=E.nextSibling&&E.nextSibling.dataset,y)var L=y.dgst;y=L,o=Error(a(419)),o.stack="",o.digest=y,Ro({value:o,source:null,stack:null}),n=df(e,n,r)}else if(be||Io(e,n,r,!1),y=(r&e.childLanes)!==0,be||y){if(y=Qt,y!==null&&(o=r&-r,o=(o&42)!==0?1:so(o),o=(o&(y.suspendedLanes|r))!==0?0:o,o!==0&&o!==w.retryLane))throw w.retryLane=o,ca(e,o),gn(y,e,o),gp;E.data==="$?"||Nf(),n=df(e,n,r)}else E.data==="$?"?(n.flags|=192,n.child=e.child,n=null):(e=w.treeContext,re=jn(E.nextSibling),Ze=n,kt=!0,pr=null,ri=!1,e!==null&&(bn[wn++]=Ri,bn[wn++]=Ii,bn[wn++]=mr,Ri=e.id,Ii=e.overflow,mr=n),n=ff(n,o.children),n.flags|=4096);return n}return c?(ms(),c=o.fallback,E=n.mode,w=e.child,L=w.sibling,o=wi(w,{mode:"hidden",children:o.children}),o.subtreeFlags=w.subtreeFlags&65011712,L!==null?c=wi(L,c):(c=dr(c,E,r,null),c.flags|=2),c.return=n,o.return=n,o.sibling=c,n.child=o,o=c,c=n.child,E=e.child.memoizedState,E===null?E=cf(r):(w=E.cachePool,w!==null?(L=Ee._currentValue,w=w.parent!==L?{parent:L,pool:L}:w):w=cg(),E={baseLanes:E.baseLanes|r,cachePool:w}),c.memoizedState=E,c.childLanes=hf(e,y,r),n.memoizedState=uf,o):(ds(n),r=e.child,e=r.sibling,r=wi(r,{mode:"visible",children:o.children}),r.return=n,r.sibling=null,e!==null&&(y=n.deletions,y===null?(n.deletions=[e],n.flags|=16):y.push(e)),n.child=r,n.memoizedState=null,r)}function ff(e,n){return n=Iu({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Iu(e,n){return e=cn(22,e,null,n),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function df(e,n,r){return Ta(n,e.child,null,r),e=ff(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function wp(e,n,r){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),Oh(e.return,n,r)}function mf(e,n,r,o,c){var f=e.memoizedState;f===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:r,tailMode:c}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=o,f.tail=r,f.tailMode=c)}function Rp(e,n,r){var o=n.pendingProps,c=o.revealOrder,f=o.tail;if(Ne(e,n,o.children,r),o=Te.current,(o&2)!==0)o=o&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&wp(e,r,n);else if(e.tag===19)wp(e,r,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}switch(W(Te,o),c){case"forwards":for(r=n.child,c=null;r!==null;)e=r.alternate,e!==null&&Su(e)===null&&(c=r),r=r.sibling;r=c,r===null?(c=n.child,n.child=null):(c=r.sibling,r.sibling=null),mf(n,!1,c,r,f);break;case"backwards":for(r=null,c=n.child,n.child=null;c!==null;){if(e=c.alternate,e!==null&&Su(e)===null){n.child=c;break}e=c.sibling,c.sibling=r,r=c,c=e}mf(n,!0,r,null,f);break;case"together":mf(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Mi(e,n,r){if(e!==null&&(n.dependencies=e.dependencies),vs|=n.lanes,(r&n.childLanes)===0)if(e!==null){if(Io(e,n,r,!1),(r&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(a(153));if(n.child!==null){for(e=n.child,r=wi(e,e.pendingProps),n.child=r,r.return=n;e.sibling!==null;)e=e.sibling,r=r.sibling=wi(e,e.pendingProps),r.return=n;r.sibling=null}return n.child}function gf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&ou(e)))}function B0(e,n,r){switch(n.tag){case 3:jt(n,n.stateNode.containerInfo),ls(n,Ee,e.memoizedState.cache),wo();break;case 27:case 5:to(n);break;case 4:jt(n,n.stateNode.containerInfo);break;case 10:ls(n,n.type,n.memoizedProps.value);break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(ds(n),n.flags|=128,null):(r&n.child.childLanes)!==0?bp(e,n,r):(ds(n),e=Mi(e,n,r),e!==null?e.sibling:null);ds(n);break;case 19:var c=(e.flags&128)!==0;if(o=(r&n.childLanes)!==0,o||(Io(e,n,r,!1),o=(r&n.childLanes)!==0),c){if(o)return Rp(e,n,r);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),W(Te,Te.current),o)break;return null;case 22:case 23:return n.lanes=0,vp(e,n,r);case 24:ls(n,Ee,e.memoizedState.cache)}return Mi(e,n,r)}function Ip(e,n,r){if(e!==null)if(e.memoizedProps!==n.pendingProps)be=!0;else{if(!gf(e,r)&&(n.flags&128)===0)return be=!1,B0(e,n,r);be=(e.flags&131072)!==0}else be=!1,kt&&(n.flags&1048576)!==0&&ig(n,au,n.index);switch(n.lanes=0,n.tag){case 16:t:{e=n.pendingProps;var o=n.elementType,c=o._init;if(o=c(o._payload),n.type=o,typeof o=="function")Sh(o)?(e=Ar(o,e),n.tag=1,n=Ap(null,n,o,e,r)):(n.tag=0,n=lf(null,n,o,e,r));else{if(o!=null){if(c=o.$$typeof,c===vt){n.tag=11,n=pp(null,n,o,e,r);break t}else if(c===C){n.tag=14,n=yp(null,n,o,e,r);break t}}throw n=Pt(o)||o,Error(a(306,n,""))}}return n;case 0:return lf(e,n,n.type,n.pendingProps,r);case 1:return o=n.type,c=Ar(o,n.pendingProps),Ap(e,n,o,c,r);case 3:t:{if(jt(n,n.stateNode.containerInfo),e===null)throw Error(a(387));o=n.pendingProps;var f=n.memoizedState;c=f.element,Ph(e,n),xo(n,o,null,r);var y=n.memoizedState;if(o=y.cache,ls(n,Ee,o),o!==f.cache&&Nh(n,[Ee],r,!0),Vo(),o=y.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:y.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Sp(e,n,o,r);break t}else if(o!==c){c=An(Error(a(424)),n),Ro(c),n=Sp(e,n,o,r);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(re=jn(e.firstChild),Ze=n,kt=!0,pr=null,ri=!0,r=rp(n,null,o,r),n.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling}else{if(wo(),o===c){n=Mi(e,n,r);break t}Ne(e,n,o,r)}n=n.child}return n;case 26:return Ru(e,n),e===null?(r=Ny(n.type,null,n.pendingProps,null))?n.memoizedState=r:kt||(r=n.type,e=n.pendingProps,o=ju(mt.current).createElement(r),o[ue]=n,o[Oe]=e,Ve(o,r,e),ce(o),n.stateNode=o):n.memoizedState=Ny(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return to(n),e===null&&kt&&(o=n.stateNode=Cy(n.type,n.pendingProps,mt.current),Ze=n,ri=!0,c=re,Ss(n.type)?(Xf=c,re=jn(o.firstChild)):re=c),Ne(e,n,n.pendingProps.children,r),Ru(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&kt&&((c=o=re)&&(o=mA(o,n.type,n.pendingProps,ri),o!==null?(n.stateNode=o,Ze=n,re=jn(o.firstChild),ri=!1,c=!0):c=!1),c||yr(n)),to(n),c=n.type,f=n.pendingProps,y=e!==null?e.memoizedProps:null,o=f.children,Ff(c,f)?o=null:y!==null&&Ff(c,y)&&(n.flags|=32),n.memoizedState!==null&&(c=qh(e,n,M0,null,null,r),nl._currentValue=c),Ru(e,n),Ne(e,n,o,r),n.child;case 6:return e===null&&kt&&((e=r=re)&&(r=gA(r,n.pendingProps,ri),r!==null?(n.stateNode=r,Ze=n,re=null,e=!0):e=!1),e||yr(n)),null;case 13:return bp(e,n,r);case 4:return jt(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=Ta(n,null,o,r):Ne(e,n,o,r),n.child;case 11:return pp(e,n,n.type,n.pendingProps,r);case 7:return Ne(e,n,n.pendingProps,r),n.child;case 8:return Ne(e,n,n.pendingProps.children,r),n.child;case 12:return Ne(e,n,n.pendingProps.children,r),n.child;case 10:return o=n.pendingProps,ls(n,n.type,o.value),Ne(e,n,o.children,r),n.child;case 9:return c=n.type._context,o=n.pendingProps.children,vr(n),c=Be(c),o=o(c),n.flags|=1,Ne(e,n,o,r),n.child;case 14:return yp(e,n,n.type,n.pendingProps,r);case 15:return _p(e,n,n.type,n.pendingProps,r);case 19:return Rp(e,n,r);case 31:return o=n.pendingProps,r=n.mode,o={mode:o.mode,children:o.children},e===null?(r=Iu(o,r),r.ref=n.ref,n.child=r,r.return=n,n=r):(r=wi(e.child,o),r.ref=n.ref,n.child=r,r.return=n,n=r),n;case 22:return vp(e,n,r);case 24:return vr(n),o=Be(Ee),e===null?(c=xh(),c===null&&(c=Qt,f=Mh(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=r),c=f),n.memoizedState={parent:o,cache:c},Uh(n),ls(n,Ee,c)):((e.lanes&r)!==0&&(Ph(e,n),xo(n,null,null,r),Vo()),c=e.memoizedState,f=n.memoizedState,c.parent!==o?(c={parent:o,cache:o},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),ls(n,Ee,o)):(o=f.cache,ls(n,Ee,o),o!==c.cache&&Nh(n,[Ee],r,!0))),Ne(e,n,n.pendingProps.children,r),n.child;case 29:throw n.pendingProps}throw Error(a(156,n.tag))}function Vi(e){e.flags|=4}function Cp(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Uy(n)){if(n=Rn.current,n!==null&&((Nt&4194048)===Nt?ai!==null:(Nt&62914560)!==Nt&&(Nt&536870912)===0||n!==ai))throw No=kh,hg;e.flags|=8192}}function Cu(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Xi():536870912,e.lanes|=n,wa|=n)}function jo(e,n){if(!kt)switch(e.tailMode){case"hidden":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function ie(e){var n=e.alternate!==null&&e.alternate.child===e.child,r=0,o=0;if(n)for(var c=e.child;c!==null;)r|=c.lanes|c.childLanes,o|=c.subtreeFlags&65011712,o|=c.flags&65011712,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)r|=c.lanes|c.childLanes,o|=c.subtreeFlags,o|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=o,e.childLanes=r,n}function j0(e,n,r){var o=n.pendingProps;switch(Ih(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ie(n),null;case 1:return ie(n),null;case 3:return r=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Di(Ee),Nn(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(bo(n)?Vi(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,ag())),ie(n),null;case 26:return r=n.memoizedState,e===null?(Vi(n),r!==null?(ie(n),Cp(n,r)):(ie(n),n.flags&=-16777217)):r?r!==e.memoizedState?(Vi(n),ie(n),Cp(n,r)):(ie(n),n.flags&=-16777217):(e.memoizedProps!==o&&Vi(n),ie(n),n.flags&=-16777217),null;case 27:Gr(n),r=mt.current;var c=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Vi(n);else{if(!o){if(n.stateNode===null)throw Error(a(166));return ie(n),null}e=ot.current,bo(n)?sg(n):(e=Cy(c,o,r),n.stateNode=e,Vi(n))}return ie(n),null;case 5:if(Gr(n),r=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Vi(n);else{if(!o){if(n.stateNode===null)throw Error(a(166));return ie(n),null}if(e=ot.current,bo(n))sg(n);else{switch(c=ju(mt.current),e){case 1:e=c.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:e=c.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":e=c.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":e=c.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":e=c.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof o.is=="string"?c.createElement("select",{is:o.is}):c.createElement("select"),o.multiple?e.multiple=!0:o.size&&(e.size=o.size);break;default:e=typeof o.is=="string"?c.createElement(r,{is:o.is}):c.createElement(r)}}e[ue]=n,e[Oe]=o;t:for(c=n.child;c!==null;){if(c.tag===5||c.tag===6)e.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===n)break t;for(;c.sibling===null;){if(c.return===null||c.return===n)break t;c=c.return}c.sibling.return=c.return,c=c.sibling}n.stateNode=e;t:switch(Ve(e,r,o),r){case"button":case"input":case"select":case"textarea":e=!!o.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&Vi(n)}}return ie(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&Vi(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(a(166));if(e=mt.current,bo(n)){if(e=n.stateNode,r=n.memoizedProps,o=null,c=Ze,c!==null)switch(c.tag){case 27:case 5:o=c.memoizedProps}e[ue]=n,e=!!(e.nodeValue===r||o!==null&&o.suppressHydrationWarning===!0||Ty(e.nodeValue,r)),e||yr(n)}else e=ju(e).createTextNode(o),e[ue]=n,n.stateNode=e}return ie(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=bo(n),o!==null&&o.dehydrated!==null){if(e===null){if(!c)throw Error(a(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(a(317));c[ue]=n}else wo(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;ie(n),c=!1}else c=ag(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(Ni(n),n):(Ni(n),null)}if(Ni(n),(n.flags&128)!==0)return n.lanes=r,n;if(r=o!==null,e=e!==null&&e.memoizedState!==null,r){o=n.child,c=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(c=o.alternate.memoizedState.cachePool.pool);var f=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==c&&(o.flags|=2048)}return r!==e&&r&&(n.child.flags|=8192),Cu(n,n.updateQueue),ie(n),null;case 4:return Nn(),e===null&&Bf(n.stateNode.containerInfo),ie(n),null;case 10:return Di(n.type),ie(n),null;case 19:if(et(Te),c=n.memoizedState,c===null)return ie(n),null;if(o=(n.flags&128)!==0,f=c.rendering,f===null)if(o)jo(c,!1);else{if(ae!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=Su(e),f!==null){for(n.flags|=128,jo(c,!1),e=f.updateQueue,n.updateQueue=e,Cu(n,e),n.subtreeFlags=0,e=r,r=n.child;r!==null;)ng(r,e),r=r.sibling;return W(Te,Te.current&1|2),n.child}e=e.sibling}c.tail!==null&&Je()>Nu&&(n.flags|=128,o=!0,jo(c,!1),n.lanes=4194304)}else{if(!o)if(e=Su(f),e!==null){if(n.flags|=128,o=!0,e=e.updateQueue,n.updateQueue=e,Cu(n,e),jo(c,!0),c.tail===null&&c.tailMode==="hidden"&&!f.alternate&&!kt)return ie(n),null}else 2*Je()-c.renderingStartTime>Nu&&r!==536870912&&(n.flags|=128,o=!0,jo(c,!1),n.lanes=4194304);c.isBackwards?(f.sibling=n.child,n.child=f):(e=c.last,e!==null?e.sibling=f:n.child=f,c.last=f)}return c.tail!==null?(n=c.tail,c.rendering=n,c.tail=n.sibling,c.renderingStartTime=Je(),n.sibling=null,e=Te.current,W(Te,o?e&1|2:e&1),n):(ie(n),null);case 22:case 23:return Ni(n),jh(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(r&536870912)!==0&&(n.flags&128)===0&&(ie(n),n.subtreeFlags&6&&(n.flags|=8192)):ie(n),r=n.updateQueue,r!==null&&Cu(n,r.retryQueue),r=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==r&&(n.flags|=2048),e!==null&&et(Er),null;case 24:return r=null,e!==null&&(r=e.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),Di(Ee),ie(n),null;case 25:return null;case 30:return null}throw Error(a(156,n.tag))}function H0(e,n){switch(Ih(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Di(Ee),Nn(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Gr(n),null;case 13:if(Ni(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(a(340));wo()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return et(Te),null;case 4:return Nn(),null;case 10:return Di(n.type),null;case 22:case 23:return Ni(n),jh(),e!==null&&et(Er),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Di(Ee),null;case 25:return null;default:return null}}function Dp(e,n){switch(Ih(n),n.tag){case 3:Di(Ee),Nn();break;case 26:case 27:case 5:Gr(n);break;case 4:Nn();break;case 13:Ni(n);break;case 19:et(Te);break;case 10:Di(n.type);break;case 22:case 23:Ni(n),jh(),e!==null&&et(Er);break;case 24:Di(Ee)}}function Ho(e,n){try{var r=n.updateQueue,o=r!==null?r.lastEffect:null;if(o!==null){var c=o.next;r=c;do{if((r.tag&e)===e){o=void 0;var f=r.create,y=r.inst;o=f(),y.destroy=o}r=r.next}while(r!==c)}}catch(E){Yt(n,n.return,E)}}function gs(e,n,r){try{var o=n.updateQueue,c=o!==null?o.lastEffect:null;if(c!==null){var f=c.next;o=f;do{if((o.tag&e)===e){var y=o.inst,E=y.destroy;if(E!==void 0){y.destroy=void 0,c=n;var w=r,L=E;try{L()}catch(q){Yt(c,w,q)}}}o=o.next}while(o!==f)}}catch(q){Yt(n,n.return,q)}}function Op(e){var n=e.updateQueue;if(n!==null){var r=e.stateNode;try{yg(n,r)}catch(o){Yt(e,e.return,o)}}}function Np(e,n,r){r.props=Ar(e.type,e.memoizedProps),r.state=e.memoizedState;try{r.componentWillUnmount()}catch(o){Yt(e,n,o)}}function qo(e,n){try{var r=e.ref;if(r!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof r=="function"?e.refCleanup=r(o):r.current=o}}catch(c){Yt(e,n,c)}}function oi(e,n){var r=e.ref,o=e.refCleanup;if(r!==null)if(typeof o=="function")try{o()}catch(c){Yt(e,n,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof r=="function")try{r(null)}catch(c){Yt(e,n,c)}else r.current=null}function Mp(e){var n=e.type,r=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":r.autoFocus&&o.focus();break t;case"img":r.src?o.src=r.src:r.srcSet&&(o.srcset=r.srcSet)}}catch(c){Yt(e,e.return,c)}}function pf(e,n,r){try{var o=e.stateNode;uA(o,e.type,r,n),o[Oe]=n}catch(c){Yt(e,e.return,c)}}function Vp(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ss(e.type)||e.tag===4}function yf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Vp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ss(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function _f(e,n,r){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).insertBefore(e,n):(n=r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,n.appendChild(e),r=r._reactRootContainer,r!=null||n.onclick!==null||(n.onclick=Bu));else if(o!==4&&(o===27&&Ss(e.type)&&(r=e.stateNode,n=null),e=e.child,e!==null))for(_f(e,n,r),e=e.sibling;e!==null;)_f(e,n,r),e=e.sibling}function Du(e,n,r){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?r.insertBefore(e,n):r.appendChild(e);else if(o!==4&&(o===27&&Ss(e.type)&&(r=e.stateNode),e=e.child,e!==null))for(Du(e,n,r),e=e.sibling;e!==null;)Du(e,n,r),e=e.sibling}function xp(e){var n=e.stateNode,r=e.memoizedProps;try{for(var o=e.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);Ve(n,o,r),n[ue]=e,n[Oe]=r}catch(f){Yt(e,e.return,f)}}var xi=!1,de=!1,vf=!1,kp=typeof WeakSet=="function"?WeakSet:Set,we=null;function q0(e,n){if(e=e.containerInfo,qf=Ku,e=Ym(e),ph(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else t:{r=(r=e.ownerDocument)&&r.defaultView||window;var o=r.getSelection&&r.getSelection();if(o&&o.rangeCount!==0){r=o.anchorNode;var c=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{r.nodeType,f.nodeType}catch{r=null;break t}var y=0,E=-1,w=-1,L=0,q=0,F=e,z=null;e:for(;;){for(var B;F!==r||c!==0&&F.nodeType!==3||(E=y+c),F!==f||o!==0&&F.nodeType!==3||(w=y+o),F.nodeType===3&&(y+=F.nodeValue.length),(B=F.firstChild)!==null;)z=F,F=B;for(;;){if(F===e)break e;if(z===r&&++L===c&&(E=y),z===f&&++q===o&&(w=y),(B=F.nextSibling)!==null)break;F=z,z=F.parentNode}F=B}r=E===-1||w===-1?null:{start:E,end:w}}else r=null}r=r||{start:0,end:0}}else r=null;for(Gf={focusedElem:e,selectionRange:r},Ku=!1,we=n;we!==null;)if(n=we,e=n.child,(n.subtreeFlags&1024)!==0&&e!==null)e.return=n,we=e;else for(;we!==null;){switch(n=we,f=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,r=n,c=f.memoizedProps,f=f.memoizedState,o=r.stateNode;try{var gt=Ar(r.type,c,r.elementType===r.type);e=o.getSnapshotBeforeUpdate(gt,f),o.__reactInternalSnapshotBeforeUpdate=e}catch(ft){Yt(r,r.return,ft)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,r=e.nodeType,r===9)Kf(e);else if(r===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Kf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(a(163))}if(e=n.sibling,e!==null){e.return=n.return,we=e;break}we=n.return}}function Up(e,n,r){var o=r.flags;switch(r.tag){case 0:case 11:case 15:ps(e,r),o&4&&Ho(5,r);break;case 1:if(ps(e,r),o&4)if(e=r.stateNode,n===null)try{e.componentDidMount()}catch(y){Yt(r,r.return,y)}else{var c=Ar(r.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(c,n,e.__reactInternalSnapshotBeforeUpdate)}catch(y){Yt(r,r.return,y)}}o&64&&Op(r),o&512&&qo(r,r.return);break;case 3:if(ps(e,r),o&64&&(e=r.updateQueue,e!==null)){if(n=null,r.child!==null)switch(r.child.tag){case 27:case 5:n=r.child.stateNode;break;case 1:n=r.child.stateNode}try{yg(e,n)}catch(y){Yt(r,r.return,y)}}break;case 27:n===null&&o&4&&xp(r);case 26:case 5:ps(e,r),n===null&&o&4&&Mp(r),o&512&&qo(r,r.return);break;case 12:ps(e,r);break;case 13:ps(e,r),o&4&&zp(e,r),o&64&&(e=r.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(r=J0.bind(null,r),pA(e,r))));break;case 22:if(o=r.memoizedState!==null||xi,!o){n=n!==null&&n.memoizedState!==null||de,c=xi;var f=de;xi=o,(de=n)&&!f?ys(e,r,(r.subtreeFlags&8772)!==0):ps(e,r),xi=c,de=f}break;case 30:break;default:ps(e,r)}}function Pp(e){var n=e.alternate;n!==null&&(e.alternate=null,Pp(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Xr(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Jt=null,tn=!1;function ki(e,n,r){for(r=r.child;r!==null;)Lp(e,n,r),r=r.sibling}function Lp(e,n,r){if(Le&&typeof Le.onCommitFiberUnmount=="function")try{Le.onCommitFiberUnmount(Yi,r)}catch{}switch(r.tag){case 26:de||oi(r,n),ki(e,n,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode,r.parentNode.removeChild(r));break;case 27:de||oi(r,n);var o=Jt,c=tn;Ss(r.type)&&(Jt=r.stateNode,tn=!1),ki(e,n,r),Jo(r.stateNode),Jt=o,tn=c;break;case 5:de||oi(r,n);case 6:if(o=Jt,c=tn,Jt=null,ki(e,n,r),Jt=o,tn=c,Jt!==null)if(tn)try{(Jt.nodeType===9?Jt.body:Jt.nodeName==="HTML"?Jt.ownerDocument.body:Jt).removeChild(r.stateNode)}catch(f){Yt(r,n,f)}else try{Jt.removeChild(r.stateNode)}catch(f){Yt(r,n,f)}break;case 18:Jt!==null&&(tn?(e=Jt,Ry(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,r.stateNode),al(e)):Ry(Jt,r.stateNode));break;case 4:o=Jt,c=tn,Jt=r.stateNode.containerInfo,tn=!0,ki(e,n,r),Jt=o,tn=c;break;case 0:case 11:case 14:case 15:de||gs(2,r,n),de||gs(4,r,n),ki(e,n,r);break;case 1:de||(oi(r,n),o=r.stateNode,typeof o.componentWillUnmount=="function"&&Np(r,n,o)),ki(e,n,r);break;case 21:ki(e,n,r);break;case 22:de=(o=de)||r.memoizedState!==null,ki(e,n,r),de=o;break;default:ki(e,n,r)}}function zp(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{al(e)}catch(r){Yt(n,n.return,r)}}function G0(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new kp),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new kp),n;default:throw Error(a(435,e.tag))}}function Ef(e,n){var r=G0(e);n.forEach(function(o){var c=W0.bind(null,e,o);r.has(o)||(r.add(o),o.then(c,c))})}function hn(e,n){var r=n.deletions;if(r!==null)for(var o=0;o<r.length;o++){var c=r[o],f=e,y=n,E=y;t:for(;E!==null;){switch(E.tag){case 27:if(Ss(E.type)){Jt=E.stateNode,tn=!1;break t}break;case 5:Jt=E.stateNode,tn=!1;break t;case 3:case 4:Jt=E.stateNode.containerInfo,tn=!0;break t}E=E.return}if(Jt===null)throw Error(a(160));Lp(f,y,c),Jt=null,tn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)Bp(n,e),n=n.sibling}var Bn=null;function Bp(e,n){var r=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:hn(n,e),fn(e),o&4&&(gs(3,e,e.return),Ho(3,e),gs(5,e,e.return));break;case 1:hn(n,e),fn(e),o&512&&(de||r===null||oi(r,r.return)),o&64&&xi&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(r=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=r===null?o:r.concat(o))));break;case 26:var c=Bn;if(hn(n,e),fn(e),o&512&&(de||r===null||oi(r,r.return)),o&4){var f=r!==null?r.memoizedState:null;if(o=e.memoizedState,r===null)if(o===null)if(e.stateNode===null){t:{o=e.type,r=e.memoizedProps,c=c.ownerDocument||c;e:switch(o){case"title":f=c.getElementsByTagName("title")[0],(!f||f[Ji]||f[ue]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(o),c.head.insertBefore(f,c.querySelector("head > title"))),Ve(f,o,r),f[ue]=e,ce(f),o=f;break t;case"link":var y=xy("link","href",c).get(o+(r.href||""));if(y){for(var E=0;E<y.length;E++)if(f=y[E],f.getAttribute("href")===(r.href==null||r.href===""?null:r.href)&&f.getAttribute("rel")===(r.rel==null?null:r.rel)&&f.getAttribute("title")===(r.title==null?null:r.title)&&f.getAttribute("crossorigin")===(r.crossOrigin==null?null:r.crossOrigin)){y.splice(E,1);break e}}f=c.createElement(o),Ve(f,o,r),c.head.appendChild(f);break;case"meta":if(y=xy("meta","content",c).get(o+(r.content||""))){for(E=0;E<y.length;E++)if(f=y[E],f.getAttribute("content")===(r.content==null?null:""+r.content)&&f.getAttribute("name")===(r.name==null?null:r.name)&&f.getAttribute("property")===(r.property==null?null:r.property)&&f.getAttribute("http-equiv")===(r.httpEquiv==null?null:r.httpEquiv)&&f.getAttribute("charset")===(r.charSet==null?null:r.charSet)){y.splice(E,1);break e}}f=c.createElement(o),Ve(f,o,r),c.head.appendChild(f);break;default:throw Error(a(468,o))}f[ue]=e,ce(f),o=f}e.stateNode=o}else ky(c,e.type,e.stateNode);else e.stateNode=Vy(c,o,e.memoizedProps);else f!==o?(f===null?r.stateNode!==null&&(r=r.stateNode,r.parentNode.removeChild(r)):f.count--,o===null?ky(c,e.type,e.stateNode):Vy(c,o,e.memoizedProps)):o===null&&e.stateNode!==null&&pf(e,e.memoizedProps,r.memoizedProps)}break;case 27:hn(n,e),fn(e),o&512&&(de||r===null||oi(r,r.return)),r!==null&&o&4&&pf(e,e.memoizedProps,r.memoizedProps);break;case 5:if(hn(n,e),fn(e),o&512&&(de||r===null||oi(r,r.return)),e.flags&32){c=e.stateNode;try{En(c,"")}catch(B){Yt(e,e.return,B)}}o&4&&e.stateNode!=null&&(c=e.memoizedProps,pf(e,c,r!==null?r.memoizedProps:c)),o&1024&&(vf=!0);break;case 6:if(hn(n,e),fn(e),o&4){if(e.stateNode===null)throw Error(a(162));o=e.memoizedProps,r=e.stateNode;try{r.nodeValue=o}catch(B){Yt(e,e.return,B)}}break;case 3:if(Gu=null,c=Bn,Bn=Hu(n.containerInfo),hn(n,e),Bn=c,fn(e),o&4&&r!==null&&r.memoizedState.isDehydrated)try{al(n.containerInfo)}catch(B){Yt(e,e.return,B)}vf&&(vf=!1,jp(e));break;case 4:o=Bn,Bn=Hu(e.stateNode.containerInfo),hn(n,e),fn(e),Bn=o;break;case 12:hn(n,e),fn(e);break;case 13:hn(n,e),fn(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(Rf=Je()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Ef(e,o)));break;case 22:c=e.memoizedState!==null;var w=r!==null&&r.memoizedState!==null,L=xi,q=de;if(xi=L||c,de=q||w,hn(n,e),de=q,xi=L,fn(e),o&8192)t:for(n=e.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(r===null||w||xi||de||Sr(e)),r=null,n=e;;){if(n.tag===5||n.tag===26){if(r===null){w=r=n;try{if(f=w.stateNode,c)y=f.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none";else{E=w.stateNode;var F=w.memoizedProps.style,z=F!=null&&F.hasOwnProperty("display")?F.display:null;E.style.display=z==null||typeof z=="boolean"?"":(""+z).trim()}}catch(B){Yt(w,w.return,B)}}}else if(n.tag===6){if(r===null){w=n;try{w.stateNode.nodeValue=c?"":w.memoizedProps}catch(B){Yt(w,w.return,B)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;r===n&&(r=null),n=n.return}r===n&&(r=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(r=o.retryQueue,r!==null&&(o.retryQueue=null,Ef(e,r))));break;case 19:hn(n,e),fn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Ef(e,o)));break;case 30:break;case 21:break;default:hn(n,e),fn(e)}}function fn(e){var n=e.flags;if(n&2){try{for(var r,o=e.return;o!==null;){if(Vp(o)){r=o;break}o=o.return}if(r==null)throw Error(a(160));switch(r.tag){case 27:var c=r.stateNode,f=yf(e);Du(e,f,c);break;case 5:var y=r.stateNode;r.flags&32&&(En(y,""),r.flags&=-33);var E=yf(e);Du(e,E,y);break;case 3:case 4:var w=r.stateNode.containerInfo,L=yf(e);_f(e,L,w);break;default:throw Error(a(161))}}catch(q){Yt(e,e.return,q)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function jp(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;jp(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function ps(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Up(e,n.alternate,n),n=n.sibling}function Sr(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:gs(4,n,n.return),Sr(n);break;case 1:oi(n,n.return);var r=n.stateNode;typeof r.componentWillUnmount=="function"&&Np(n,n.return,r),Sr(n);break;case 27:Jo(n.stateNode);case 26:case 5:oi(n,n.return),Sr(n);break;case 22:n.memoizedState===null&&Sr(n);break;case 30:Sr(n);break;default:Sr(n)}e=e.sibling}}function ys(e,n,r){for(r=r&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,c=e,f=n,y=f.flags;switch(f.tag){case 0:case 11:case 15:ys(c,f,r),Ho(4,f);break;case 1:if(ys(c,f,r),o=f,c=o.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(L){Yt(o,o.return,L)}if(o=f,c=o.updateQueue,c!==null){var E=o.stateNode;try{var w=c.shared.hiddenCallbacks;if(w!==null)for(c.shared.hiddenCallbacks=null,c=0;c<w.length;c++)pg(w[c],E)}catch(L){Yt(o,o.return,L)}}r&&y&64&&Op(f),qo(f,f.return);break;case 27:xp(f);case 26:case 5:ys(c,f,r),r&&o===null&&y&4&&Mp(f),qo(f,f.return);break;case 12:ys(c,f,r);break;case 13:ys(c,f,r),r&&y&4&&zp(c,f);break;case 22:f.memoizedState===null&&ys(c,f,r),qo(f,f.return);break;case 30:break;default:ys(c,f,r)}n=n.sibling}}function Tf(e,n){var r=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==r&&(e!=null&&e.refCount++,r!=null&&Co(r))}function Af(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Co(e))}function li(e,n,r,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Hp(e,n,r,o),n=n.sibling}function Hp(e,n,r,o){var c=n.flags;switch(n.tag){case 0:case 11:case 15:li(e,n,r,o),c&2048&&Ho(9,n);break;case 1:li(e,n,r,o);break;case 3:li(e,n,r,o),c&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Co(e)));break;case 12:if(c&2048){li(e,n,r,o),e=n.stateNode;try{var f=n.memoizedProps,y=f.id,E=f.onPostCommit;typeof E=="function"&&E(y,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(w){Yt(n,n.return,w)}}else li(e,n,r,o);break;case 13:li(e,n,r,o);break;case 23:break;case 22:f=n.stateNode,y=n.alternate,n.memoizedState!==null?f._visibility&2?li(e,n,r,o):Go(e,n):f._visibility&2?li(e,n,r,o):(f._visibility|=2,Aa(e,n,r,o,(n.subtreeFlags&10256)!==0)),c&2048&&Tf(y,n);break;case 24:li(e,n,r,o),c&2048&&Af(n.alternate,n);break;default:li(e,n,r,o)}}function Aa(e,n,r,o,c){for(c=c&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var f=e,y=n,E=r,w=o,L=y.flags;switch(y.tag){case 0:case 11:case 15:Aa(f,y,E,w,c),Ho(8,y);break;case 23:break;case 22:var q=y.stateNode;y.memoizedState!==null?q._visibility&2?Aa(f,y,E,w,c):Go(f,y):(q._visibility|=2,Aa(f,y,E,w,c)),c&&L&2048&&Tf(y.alternate,y);break;case 24:Aa(f,y,E,w,c),c&&L&2048&&Af(y.alternate,y);break;default:Aa(f,y,E,w,c)}n=n.sibling}}function Go(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var r=e,o=n,c=o.flags;switch(o.tag){case 22:Go(r,o),c&2048&&Tf(o.alternate,o);break;case 24:Go(r,o),c&2048&&Af(o.alternate,o);break;default:Go(r,o)}n=n.sibling}}var Fo=8192;function Sa(e){if(e.subtreeFlags&Fo)for(e=e.child;e!==null;)qp(e),e=e.sibling}function qp(e){switch(e.tag){case 26:Sa(e),e.flags&Fo&&e.memoizedState!==null&&DA(Bn,e.memoizedState,e.memoizedProps);break;case 5:Sa(e);break;case 3:case 4:var n=Bn;Bn=Hu(e.stateNode.containerInfo),Sa(e),Bn=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=Fo,Fo=16777216,Sa(e),Fo=n):Sa(e));break;default:Sa(e)}}function Gp(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Yo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];we=o,Yp(o,e)}Gp(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Fp(e),e=e.sibling}function Fp(e){switch(e.tag){case 0:case 11:case 15:Yo(e),e.flags&2048&&gs(9,e,e.return);break;case 3:Yo(e);break;case 12:Yo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Ou(e)):Yo(e);break;default:Yo(e)}}function Ou(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];we=o,Yp(o,e)}Gp(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:gs(8,n,n.return),Ou(n);break;case 22:r=n.stateNode,r._visibility&2&&(r._visibility&=-3,Ou(n));break;default:Ou(n)}e=e.sibling}}function Yp(e,n){for(;we!==null;){var r=we;switch(r.tag){case 0:case 11:case 15:gs(8,r,n);break;case 23:case 22:if(r.memoizedState!==null&&r.memoizedState.cachePool!==null){var o=r.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Co(r.memoizedState.cache)}if(o=r.child,o!==null)o.return=r,we=o;else t:for(r=e;we!==null;){o=we;var c=o.sibling,f=o.return;if(Pp(o),o===r){we=null;break t}if(c!==null){c.return=f,we=c;break t}we=f}}}var F0={getCacheForType:function(e){var n=Be(Ee),r=n.data.get(e);return r===void 0&&(r=e(),n.data.set(e,r)),r}},Y0=typeof WeakMap=="function"?WeakMap:Map,zt=0,Qt=null,It=null,Nt=0,Bt=0,dn=null,_s=!1,ba=!1,Sf=!1,Ui=0,ae=0,vs=0,br=0,bf=0,In=0,wa=0,Ko=null,en=null,wf=!1,Rf=0,Nu=1/0,Mu=null,Es=null,Me=0,Ts=null,Ra=null,Ia=0,If=0,Cf=null,Kp=null,Qo=0,Df=null;function mn(){if((zt&2)!==0&&Nt!==0)return Nt&-Nt;if(H.T!==null){var e=ma;return e!==0?e:Uf()}return _i()}function Qp(){In===0&&(In=(Nt&536870912)===0||kt?io():536870912);var e=Rn.current;return e!==null&&(e.flags|=32),In}function gn(e,n,r){(e===Qt&&(Bt===2||Bt===9)||e.cancelPendingCommit!==null)&&(Ca(e,0),As(e,Nt,In,!1)),le(e,r),((zt&2)===0||e!==Qt)&&(e===Qt&&((zt&2)===0&&(br|=r),ae===4&&As(e,Nt,In,!1)),ui(e))}function Xp(e,n,r){if((zt&6)!==0)throw Error(a(327));var o=!r&&(n&124)===0&&(n&e.expiredLanes)===0||Qi(e,n),c=o?X0(e,n):Mf(e,n,!0),f=o;do{if(c===0){ba&&!o&&As(e,n,0,!1);break}else{if(r=e.current.alternate,f&&!K0(r)){c=Mf(e,n,!1),f=!1;continue}if(c===2){if(f=n,e.errorRecoveryDisabledLanes&f)var y=0;else y=e.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){n=y;t:{var E=e;c=Ko;var w=E.current.memoizedState.isDehydrated;if(w&&(Ca(E,y).flags|=256),y=Mf(E,y,!1),y!==2){if(Sf&&!w){E.errorRecoveryDisabledLanes|=f,br|=f,c=4;break t}f=en,en=c,f!==null&&(en===null?en=f:en.push.apply(en,f))}c=y}if(f=!1,c!==2)continue}}if(c===1){Ca(e,0),As(e,n,0,!0);break}t:{switch(o=e,f=c,f){case 0:case 1:throw Error(a(345));case 4:if((n&4194048)!==n)break;case 6:As(o,n,In,!_s);break t;case 2:en=null;break;case 3:case 5:break;default:throw Error(a(329))}if((n&62914560)===n&&(c=Rf+300-Je(),10<c)){if(As(o,n,In,!_s),_n(o,0,!0)!==0)break t;o.timeoutHandle=by($p.bind(null,o,r,en,Mu,wf,n,In,br,wa,_s,f,2,-0,0),c);break t}$p(o,r,en,Mu,wf,n,In,br,wa,_s,f,0,-0,0)}}break}while(!0);ui(e)}function $p(e,n,r,o,c,f,y,E,w,L,q,F,z,B){if(e.timeoutHandle=-1,F=n.subtreeFlags,(F&8192||(F&16785408)===16785408)&&(el={stylesheets:null,count:0,unsuspend:CA},qp(n),F=OA(),F!==null)){e.cancelPendingCommit=F(iy.bind(null,e,n,f,r,o,c,y,E,w,q,1,z,B)),As(e,f,y,!L);return}iy(e,n,f,r,o,c,y,E,w)}function K0(e){for(var n=e;;){var r=n.tag;if((r===0||r===11||r===15)&&n.flags&16384&&(r=n.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var o=0;o<r.length;o++){var c=r[o],f=c.getSnapshot;c=c.value;try{if(!un(f(),c))return!1}catch{return!1}}if(r=n.child,n.subtreeFlags&16384&&r!==null)r.return=n,n=r;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function As(e,n,r,o){n&=~bf,n&=~br,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var c=n;0<c;){var f=31-Ke(c),y=1<<f;o[f]=-1,c&=~y}r!==0&&$i(e,r,n)}function Vu(){return(zt&6)===0?(Xo(0),!1):!0}function Of(){if(It!==null){if(Bt===0)var e=It.return;else e=It,Ci=_r=null,Yh(e),Ea=null,zo=0,e=It;for(;e!==null;)Dp(e.alternate,e),e=e.return;It=null}}function Ca(e,n){var r=e.timeoutHandle;r!==-1&&(e.timeoutHandle=-1,hA(r)),r=e.cancelPendingCommit,r!==null&&(e.cancelPendingCommit=null,r()),Of(),Qt=e,It=r=wi(e.current,null),Nt=n,Bt=0,dn=null,_s=!1,ba=Qi(e,n),Sf=!1,wa=In=bf=br=vs=ae=0,en=Ko=null,wf=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var c=31-Ke(o),f=1<<c;n|=e[c],o&=~f}return Ui=n,eu(),r}function Zp(e,n){bt=null,H.H=Eu,n===Oo||n===cu?(n=mg(),Bt=3):n===hg?(n=mg(),Bt=4):Bt=n===gp?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,dn=n,It===null&&(ae=1,wu(e,An(n,e.current)))}function Jp(){var e=H.H;return H.H=Eu,e===null?Eu:e}function Wp(){var e=H.A;return H.A=F0,e}function Nf(){ae=4,_s||(Nt&4194048)!==Nt&&Rn.current!==null||(ba=!0),(vs&134217727)===0&&(br&134217727)===0||Qt===null||As(Qt,Nt,In,!1)}function Mf(e,n,r){var o=zt;zt|=2;var c=Jp(),f=Wp();(Qt!==e||Nt!==n)&&(Mu=null,Ca(e,n)),n=!1;var y=ae;t:do try{if(Bt!==0&&It!==null){var E=It,w=dn;switch(Bt){case 8:Of(),y=6;break t;case 3:case 2:case 9:case 6:Rn.current===null&&(n=!0);var L=Bt;if(Bt=0,dn=null,Da(e,E,w,L),r&&ba){y=0;break t}break;default:L=Bt,Bt=0,dn=null,Da(e,E,w,L)}}Q0(),y=ae;break}catch(q){Zp(e,q)}while(!0);return n&&e.shellSuspendCounter++,Ci=_r=null,zt=o,H.H=c,H.A=f,It===null&&(Qt=null,Nt=0,eu()),y}function Q0(){for(;It!==null;)ty(It)}function X0(e,n){var r=zt;zt|=2;var o=Jp(),c=Wp();Qt!==e||Nt!==n?(Mu=null,Nu=Je()+500,Ca(e,n)):ba=Qi(e,n);t:do try{if(Bt!==0&&It!==null){n=It;var f=dn;e:switch(Bt){case 1:Bt=0,dn=null,Da(e,n,f,1);break;case 2:case 9:if(fg(f)){Bt=0,dn=null,ey(n);break}n=function(){Bt!==2&&Bt!==9||Qt!==e||(Bt=7),ui(e)},f.then(n,n);break t;case 3:Bt=7;break t;case 4:Bt=5;break t;case 7:fg(f)?(Bt=0,dn=null,ey(n)):(Bt=0,dn=null,Da(e,n,f,7));break;case 5:var y=null;switch(It.tag){case 26:y=It.memoizedState;case 5:case 27:var E=It;if(!y||Uy(y)){Bt=0,dn=null;var w=E.sibling;if(w!==null)It=w;else{var L=E.return;L!==null?(It=L,xu(L)):It=null}break e}}Bt=0,dn=null,Da(e,n,f,5);break;case 6:Bt=0,dn=null,Da(e,n,f,6);break;case 8:Of(),ae=6;break t;default:throw Error(a(462))}}$0();break}catch(q){Zp(e,q)}while(!0);return Ci=_r=null,H.H=o,H.A=c,zt=r,It!==null?0:(Qt=null,Nt=0,eu(),ae)}function $0(){for(;It!==null&&!rh();)ty(It)}function ty(e){var n=Ip(e.alternate,e,Ui);e.memoizedProps=e.pendingProps,n===null?xu(e):It=n}function ey(e){var n=e,r=n.alternate;switch(n.tag){case 15:case 0:n=Tp(r,n,n.pendingProps,n.type,void 0,Nt);break;case 11:n=Tp(r,n,n.pendingProps,n.type.render,n.ref,Nt);break;case 5:Yh(n);default:Dp(r,n),n=It=ng(n,Ui),n=Ip(r,n,Ui)}e.memoizedProps=e.pendingProps,n===null?xu(e):It=n}function Da(e,n,r,o){Ci=_r=null,Yh(n),Ea=null,zo=0;var c=n.return;try{if(z0(e,c,n,r,Nt)){ae=1,wu(e,An(r,e.current)),It=null;return}}catch(f){if(c!==null)throw It=c,f;ae=1,wu(e,An(r,e.current)),It=null;return}n.flags&32768?(kt||o===1?e=!0:ba||(Nt&536870912)!==0?e=!1:(_s=e=!0,(o===2||o===9||o===3||o===6)&&(o=Rn.current,o!==null&&o.tag===13&&(o.flags|=16384))),ny(n,e)):xu(n)}function xu(e){var n=e;do{if((n.flags&32768)!==0){ny(n,_s);return}e=n.return;var r=j0(n.alternate,n,Ui);if(r!==null){It=r;return}if(n=n.sibling,n!==null){It=n;return}It=n=e}while(n!==null);ae===0&&(ae=5)}function ny(e,n){do{var r=H0(e.alternate,e);if(r!==null){r.flags&=32767,It=r;return}if(r=e.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!n&&(e=e.sibling,e!==null)){It=e;return}It=e=r}while(e!==null);ae=6,It=null}function iy(e,n,r,o,c,f,y,E,w){e.cancelPendingCommit=null;do ku();while(Me!==0);if((zt&6)!==0)throw Error(a(327));if(n!==null){if(n===e.current)throw Error(a(177));if(f=n.lanes|n.childLanes,f|=Th,Ll(e,r,f,y,E,w),e===Qt&&(It=Qt=null,Nt=0),Ra=n,Ts=e,Ia=r,If=f,Cf=c,Kp=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,tA(yi,function(){return ly(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=H.T,H.T=null,c=tt.p,tt.p=2,y=zt,zt|=4;try{q0(e,n,r)}finally{zt=y,tt.p=c,H.T=o}}Me=1,sy(),ry(),ay()}}function sy(){if(Me===1){Me=0;var e=Ts,n=Ra,r=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||r){r=H.T,H.T=null;var o=tt.p;tt.p=2;var c=zt;zt|=4;try{Bp(n,e);var f=Gf,y=Ym(e.containerInfo),E=f.focusedElem,w=f.selectionRange;if(y!==E&&E&&E.ownerDocument&&Fm(E.ownerDocument.documentElement,E)){if(w!==null&&ph(E)){var L=w.start,q=w.end;if(q===void 0&&(q=L),"selectionStart"in E)E.selectionStart=L,E.selectionEnd=Math.min(q,E.value.length);else{var F=E.ownerDocument||document,z=F&&F.defaultView||window;if(z.getSelection){var B=z.getSelection(),gt=E.textContent.length,ft=Math.min(w.start,gt),Ft=w.end===void 0?ft:Math.min(w.end,gt);!B.extend&&ft>Ft&&(y=Ft,Ft=ft,ft=y);var x=Gm(E,ft),N=Gm(E,Ft);if(x&&N&&(B.rangeCount!==1||B.anchorNode!==x.node||B.anchorOffset!==x.offset||B.focusNode!==N.node||B.focusOffset!==N.offset)){var U=F.createRange();U.setStart(x.node,x.offset),B.removeAllRanges(),ft>Ft?(B.addRange(U),B.extend(N.node,N.offset)):(U.setEnd(N.node,N.offset),B.addRange(U))}}}}for(F=[],B=E;B=B.parentNode;)B.nodeType===1&&F.push({element:B,left:B.scrollLeft,top:B.scrollTop});for(typeof E.focus=="function"&&E.focus(),E=0;E<F.length;E++){var G=F[E];G.element.scrollLeft=G.left,G.element.scrollTop=G.top}}Ku=!!qf,Gf=qf=null}finally{zt=c,tt.p=o,H.T=r}}e.current=n,Me=2}}function ry(){if(Me===2){Me=0;var e=Ts,n=Ra,r=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||r){r=H.T,H.T=null;var o=tt.p;tt.p=2;var c=zt;zt|=4;try{Up(e,n.alternate,n)}finally{zt=c,tt.p=o,H.T=r}}Me=3}}function ay(){if(Me===4||Me===3){Me=0,eo();var e=Ts,n=Ra,r=Ia,o=Kp;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Me=5:(Me=0,Ra=Ts=null,oy(e,e.pendingLanes));var c=e.pendingLanes;if(c===0&&(Es=null),ro(r),n=n.stateNode,Le&&typeof Le.onCommitFiberRoot=="function")try{Le.onCommitFiberRoot(Yi,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=H.T,c=tt.p,tt.p=2,H.T=null;try{for(var f=e.onRecoverableError,y=0;y<o.length;y++){var E=o[y];f(E.value,{componentStack:E.stack})}}finally{H.T=n,tt.p=c}}(Ia&3)!==0&&ku(),ui(e),c=e.pendingLanes,(r&4194090)!==0&&(c&42)!==0?e===Df?Qo++:(Qo=0,Df=e):Qo=0,Xo(0)}}function oy(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Co(n)))}function ku(e){return sy(),ry(),ay(),ly()}function ly(){if(Me!==5)return!1;var e=Ts,n=If;If=0;var r=ro(Ia),o=H.T,c=tt.p;try{tt.p=32>r?32:r,H.T=null,r=Cf,Cf=null;var f=Ts,y=Ia;if(Me=0,Ra=Ts=null,Ia=0,(zt&6)!==0)throw Error(a(331));var E=zt;if(zt|=4,Fp(f.current),Hp(f,f.current,y,r),zt=E,Xo(0,!1),Le&&typeof Le.onPostCommitFiberRoot=="function")try{Le.onPostCommitFiberRoot(Yi,f)}catch{}return!0}finally{tt.p=c,H.T=o,oy(e,n)}}function uy(e,n,r){n=An(r,n),n=of(e.stateNode,n,2),e=hs(e,n,2),e!==null&&(le(e,2),ui(e))}function Yt(e,n,r){if(e.tag===3)uy(e,e,r);else for(;n!==null;){if(n.tag===3){uy(n,e,r);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Es===null||!Es.has(o))){e=An(r,e),r=dp(2),o=hs(n,r,2),o!==null&&(mp(r,o,n,e),le(o,2),ui(o));break}}n=n.return}}function Vf(e,n,r){var o=e.pingCache;if(o===null){o=e.pingCache=new Y0;var c=new Set;o.set(n,c)}else c=o.get(n),c===void 0&&(c=new Set,o.set(n,c));c.has(r)||(Sf=!0,c.add(r),e=Z0.bind(null,e,n,r),n.then(e,e))}function Z0(e,n,r){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&r,e.warmLanes&=~r,Qt===e&&(Nt&r)===r&&(ae===4||ae===3&&(Nt&62914560)===Nt&&300>Je()-Rf?(zt&2)===0&&Ca(e,0):bf|=r,wa===Nt&&(wa=0)),ui(e)}function cy(e,n){n===0&&(n=Xi()),e=ca(e,n),e!==null&&(le(e,n),ui(e))}function J0(e){var n=e.memoizedState,r=0;n!==null&&(r=n.retryLane),cy(e,r)}function W0(e,n){var r=0;switch(e.tag){case 13:var o=e.stateNode,c=e.memoizedState;c!==null&&(r=c.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(a(314))}o!==null&&o.delete(n),cy(e,r)}function tA(e,n){return qs(e,n)}var Uu=null,Oa=null,xf=!1,Pu=!1,kf=!1,wr=0;function ui(e){e!==Oa&&e.next===null&&(Oa===null?Uu=Oa=e:Oa=Oa.next=e),Pu=!0,xf||(xf=!0,nA())}function Xo(e,n){if(!kf&&Pu){kf=!0;do for(var r=!1,o=Uu;o!==null;){if(e!==0){var c=o.pendingLanes;if(c===0)var f=0;else{var y=o.suspendedLanes,E=o.pingedLanes;f=(1<<31-Ke(42|e)+1)-1,f&=c&~(y&~E),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(r=!0,my(o,f))}else f=Nt,f=_n(o,o===Qt?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||Qi(o,f)||(r=!0,my(o,f));o=o.next}while(r);kf=!1}}function eA(){hy()}function hy(){Pu=xf=!1;var e=0;wr!==0&&(cA()&&(e=wr),wr=0);for(var n=Je(),r=null,o=Uu;o!==null;){var c=o.next,f=fy(o,n);f===0?(o.next=null,r===null?Uu=c:r.next=c,c===null&&(Oa=r)):(r=o,(e!==0||(f&3)!==0)&&(Pu=!0)),o=c}Xo(e)}function fy(e,n){for(var r=e.suspendedLanes,o=e.pingedLanes,c=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var y=31-Ke(f),E=1<<y,w=c[y];w===-1?((E&r)===0||(E&o)!==0)&&(c[y]=Kr(E,n)):w<=n&&(e.expiredLanes|=E),f&=~E}if(n=Qt,r=Nt,r=_n(e,e===n?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,r===0||e===n&&(Bt===2||Bt===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&Yr(o),e.callbackNode=null,e.callbackPriority=0;if((r&3)===0||Qi(e,r)){if(n=r&-r,n===e.callbackPriority)return n;switch(o!==null&&Yr(o),ro(r)){case 2:case 8:r=Ae;break;case 32:r=yi;break;case 268435456:r=no;break;default:r=yi}return o=dy.bind(null,e),r=qs(r,o),e.callbackPriority=n,e.callbackNode=r,n}return o!==null&&o!==null&&Yr(o),e.callbackPriority=2,e.callbackNode=null,2}function dy(e,n){if(Me!==0&&Me!==5)return e.callbackNode=null,e.callbackPriority=0,null;var r=e.callbackNode;if(ku()&&e.callbackNode!==r)return null;var o=Nt;return o=_n(e,e===Qt?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(Xp(e,o,n),fy(e,Je()),e.callbackNode!=null&&e.callbackNode===r?dy.bind(null,e):null)}function my(e,n){if(ku())return null;Xp(e,n,!0)}function nA(){fA(function(){(zt&6)!==0?qs(_e,eA):hy()})}function Uf(){return wr===0&&(wr=io()),wr}function gy(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:kn(""+e)}function py(e,n){var r=n.ownerDocument.createElement("input");return r.name=n.name,r.value=n.value,e.id&&r.setAttribute("form",e.id),n.parentNode.insertBefore(r,n),e=new FormData(e),r.parentNode.removeChild(r),e}function iA(e,n,r,o,c){if(n==="submit"&&r&&r.stateNode===c){var f=gy((c[Oe]||null).action),y=o.submitter;y&&(n=(n=y[Oe]||null)?gy(n.formAction):y.getAttribute("formAction"),n!==null&&(f=n,y=null));var E=new sr("action","action",null,o,c);e.push({event:E,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(wr!==0){var w=y?py(c,y):new FormData(c);ef(r,{pending:!0,data:w,method:c.method,action:f},null,w)}}else typeof f=="function"&&(E.preventDefault(),w=y?py(c,y):new FormData(c),ef(r,{pending:!0,data:w,method:c.method,action:f},f,w))},currentTarget:c}]})}}for(var Pf=0;Pf<Eh.length;Pf++){var Lf=Eh[Pf],sA=Lf.toLowerCase(),rA=Lf[0].toUpperCase()+Lf.slice(1);zn(sA,"on"+rA)}zn(Xm,"onAnimationEnd"),zn($m,"onAnimationIteration"),zn(Zm,"onAnimationStart"),zn("dblclick","onDoubleClick"),zn("focusin","onFocus"),zn("focusout","onBlur"),zn(A0,"onTransitionRun"),zn(S0,"onTransitionStart"),zn(b0,"onTransitionCancel"),zn(Jm,"onTransitionEnd"),ei("onMouseEnter",["mouseout","mouseover"]),ei("onMouseLeave",["mouseout","mouseover"]),ei("onPointerEnter",["pointerout","pointerover"]),ei("onPointerLeave",["pointerout","pointerover"]),ti("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ti("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ti("onBeforeInput",["compositionend","keypress","textInput","paste"]),ti("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ti("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ti("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var $o="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),aA=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat($o));function yy(e,n){n=(n&4)!==0;for(var r=0;r<e.length;r++){var o=e[r],c=o.event;o=o.listeners;t:{var f=void 0;if(n)for(var y=o.length-1;0<=y;y--){var E=o[y],w=E.instance,L=E.currentTarget;if(E=E.listener,w!==f&&c.isPropagationStopped())break t;f=E,c.currentTarget=L;try{f(c)}catch(q){bu(q)}c.currentTarget=null,f=w}else for(y=0;y<o.length;y++){if(E=o[y],w=E.instance,L=E.currentTarget,E=E.listener,w!==f&&c.isPropagationStopped())break t;f=E,c.currentTarget=L;try{f(c)}catch(q){bu(q)}c.currentTarget=null,f=w}}}}function Ct(e,n){var r=n[Fs];r===void 0&&(r=n[Fs]=new Set);var o=e+"__bubble";r.has(o)||(_y(n,e,2,!1),r.add(o))}function zf(e,n,r){var o=0;n&&(o|=4),_y(r,e,o,n)}var Lu="_reactListening"+Math.random().toString(36).slice(2);function Bf(e){if(!e[Lu]){e[Lu]=!0,zl.forEach(function(r){r!=="selectionchange"&&(aA.has(r)||zf(r,!1,e),zf(r,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Lu]||(n[Lu]=!0,zf("selectionchange",!1,n))}}function _y(e,n,r,o){switch(Hy(n)){case 2:var c=VA;break;case 8:c=xA;break;default:c=td}r=c.bind(null,n,r,e),c=void 0,!Si||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),o?c!==void 0?e.addEventListener(n,r,{capture:!0,passive:c}):e.addEventListener(n,r,!0):c!==void 0?e.addEventListener(n,r,{passive:c}):e.addEventListener(n,r,!1)}function jf(e,n,r,o,c){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var y=o.tag;if(y===3||y===4){var E=o.stateNode.containerInfo;if(E===c)break;if(y===4)for(y=o.return;y!==null;){var w=y.tag;if((w===3||w===4)&&y.stateNode.containerInfo===c)return;y=y.return}for(;E!==null;){if(y=Jn(E),y===null)return;if(w=y.tag,w===5||w===6||w===26||w===27){o=f=y;continue t}E=E.parentNode}}o=o.return}er(function(){var L=f,q=fo(r),F=[];t:{var z=Wm.get(e);if(z!==void 0){var B=sr,gt=e;switch(e){case"keypress":if(nr(r)===0)break t;case"keydown":case"keyup":B=aa;break;case"focusin":gt="focus",B=ia;break;case"focusout":gt="blur",B=ia;break;case"beforeblur":case"afterblur":B=ia;break;case"click":if(r.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":B=ur;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":B=Yl;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":B=os;break;case Xm:case $m:case Zm:B=go;break;case Jm:B=m;break;case"scroll":case"scrollend":B=ar;break;case"wheel":B=T;break;case"copy":case"cut":case"paste":B=Ql;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":B=_o;break;case"toggle":case"beforetoggle":B=j}var ft=(n&4)!==0,Ft=!ft&&(e==="scroll"||e==="scrollend"),x=ft?z!==null?z+"Capture":null:z;ft=[];for(var N=L,U;N!==null;){var G=N;if(U=G.stateNode,G=G.tag,G!==5&&G!==26&&G!==27||U===null||x===null||(G=rs(N,x),G!=null&&ft.push(Zo(N,G,U))),Ft)break;N=N.return}0<ft.length&&(z=new B(z,gt,null,r,q),F.push({event:z,listeners:ft}))}}if((n&7)===0){t:{if(z=e==="mouseover"||e==="pointerover",B=e==="mouseout"||e==="pointerout",z&&r!==ho&&(gt=r.relatedTarget||r.fromElement)&&(Jn(gt)||gt[vi]))break t;if((B||z)&&(z=q.window===q?q:(z=q.ownerDocument)?z.defaultView||z.parentWindow:window,B?(gt=r.relatedTarget||r.toElement,B=L,gt=gt?Jn(gt):null,gt!==null&&(Ft=h(gt),ft=gt.tag,gt!==Ft||ft!==5&&ft!==27&&ft!==6)&&(gt=null)):(B=null,gt=L),B!==gt)){if(ft=ur,G="onMouseLeave",x="onMouseEnter",N="mouse",(e==="pointerout"||e==="pointerover")&&(ft=_o,G="onPointerLeave",x="onPointerEnter",N="pointer"),Ft=B==null?z:Wi(B),U=gt==null?z:Wi(gt),z=new ft(G,N+"leave",B,r,q),z.target=Ft,z.relatedTarget=U,G=null,Jn(q)===L&&(ft=new ft(x,N+"enter",gt,r,q),ft.target=U,ft.relatedTarget=Ft,G=ft),Ft=G,B&&gt)e:{for(ft=B,x=gt,N=0,U=ft;U;U=Na(U))N++;for(U=0,G=x;G;G=Na(G))U++;for(;0<N-U;)ft=Na(ft),N--;for(;0<U-N;)x=Na(x),U--;for(;N--;){if(ft===x||x!==null&&ft===x.alternate)break e;ft=Na(ft),x=Na(x)}ft=null}else ft=null;B!==null&&vy(F,z,B,ft,!1),gt!==null&&Ft!==null&&vy(F,Ft,gt,ft,!0)}}t:{if(z=L?Wi(L):window,B=z.nodeName&&z.nodeName.toLowerCase(),B==="select"||B==="input"&&z.type==="file")var st=Lm;else if(Um(z))if(zm)st=v0;else{st=y0;var Rt=p0}else B=z.nodeName,!B||B.toLowerCase()!=="input"||z.type!=="checkbox"&&z.type!=="radio"?L&&ta(L.elementType)&&(st=Lm):st=_0;if(st&&(st=st(e,L))){Pm(F,st,r,q);break t}Rt&&Rt(e,z,L),e==="focusout"&&L&&z.type==="number"&&L.memoizedProps.value!=null&&lo(z,"number",z.value)}switch(Rt=L?Wi(L):window,e){case"focusin":(Um(Rt)||Rt.contentEditable==="true")&&(oa=Rt,yh=L,So=null);break;case"focusout":So=yh=oa=null;break;case"mousedown":_h=!0;break;case"contextmenu":case"mouseup":case"dragend":_h=!1,Km(F,r,q);break;case"selectionchange":if(T0)break;case"keydown":case"keyup":Km(F,r,q)}var at;if(yt)t:{switch(e){case"compositionstart":var dt="onCompositionStart";break t;case"compositionend":dt="onCompositionEnd";break t;case"compositionupdate":dt="onCompositionUpdate";break t}dt=void 0}else Ln?Un(e,r)&&(dt="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(dt="onCompositionStart");dt&&(he&&r.locale!=="ko"&&(Ln||dt!=="onCompositionStart"?dt==="onCompositionEnd"&&Ln&&(at=Fl()):(Tn=q,Kt="value"in Tn?Tn.value:Tn.textContent,Ln=!0)),Rt=zu(L,dt),0<Rt.length&&(dt=new yo(dt,e,null,r,q),F.push({event:dt,listeners:Rt}),at?dt.data=at:(at=Pn(r),at!==null&&(dt.data=at)))),(at=Lt?vo(e,r):d0(e,r))&&(dt=zu(L,"onBeforeInput"),0<dt.length&&(Rt=new yo("onBeforeInput","beforeinput",null,r,q),F.push({event:Rt,listeners:dt}),Rt.data=at)),iA(F,e,L,r,q)}yy(F,n)})}function Zo(e,n,r){return{instance:e,listener:n,currentTarget:r}}function zu(e,n){for(var r=n+"Capture",o=[];e!==null;){var c=e,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=rs(e,r),c!=null&&o.unshift(Zo(e,c,f)),c=rs(e,n),c!=null&&o.push(Zo(e,c,f))),e.tag===3)return o;e=e.return}return[]}function Na(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function vy(e,n,r,o,c){for(var f=n._reactName,y=[];r!==null&&r!==o;){var E=r,w=E.alternate,L=E.stateNode;if(E=E.tag,w!==null&&w===o)break;E!==5&&E!==26&&E!==27||L===null||(w=L,c?(L=rs(r,f),L!=null&&y.unshift(Zo(r,L,w))):c||(L=rs(r,f),L!=null&&y.push(Zo(r,L,w)))),r=r.return}y.length!==0&&e.push({event:n,listeners:y})}var oA=/\r\n?/g,lA=/\u0000|\uFFFD/g;function Ey(e){return(typeof e=="string"?e:""+e).replace(oA,`
`).replace(lA,"")}function Ty(e,n){return n=Ey(n),Ey(e)===n}function Bu(){}function Gt(e,n,r,o,c,f){switch(r){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||En(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&En(e,""+o);break;case"className":$s(e,"class",o);break;case"tabIndex":$s(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":$s(e,r,o);break;case"style":co(e,o,f);break;case"data":if(n!=="object"){$s(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||r!=="href")){e.removeAttribute(r);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(r);break}o=kn(""+o),e.setAttribute(r,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(r==="formAction"?(n!=="input"&&Gt(e,n,"name",c.name,c,null),Gt(e,n,"formEncType",c.formEncType,c,null),Gt(e,n,"formMethod",c.formMethod,c,null),Gt(e,n,"formTarget",c.formTarget,c,null)):(Gt(e,n,"encType",c.encType,c,null),Gt(e,n,"method",c.method,c,null),Gt(e,n,"target",c.target,c,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(r);break}o=kn(""+o),e.setAttribute(r,o);break;case"onClick":o!=null&&(e.onclick=Bu);break;case"onScroll":o!=null&&Ct("scroll",e);break;case"onScrollEnd":o!=null&&Ct("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(a(61));if(r=o.__html,r!=null){if(c.children!=null)throw Error(a(60));e.innerHTML=r}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}r=kn(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(r,""+o):e.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(r,""):e.removeAttribute(r);break;case"capture":case"download":o===!0?e.setAttribute(r,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(r,o):e.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(r,o):e.removeAttribute(r);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(r):e.setAttribute(r,o);break;case"popover":Ct("beforetoggle",e),Ct("toggle",e),Xs(e,"popover",o);break;case"xlinkActuate":vn(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":vn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":vn(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":vn(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":vn(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":vn(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":vn(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":vn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":vn(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Xs(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(r=Hl.get(r)||r,Xs(e,r,o))}}function Hf(e,n,r,o,c,f){switch(r){case"style":co(e,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(a(61));if(r=o.__html,r!=null){if(c.children!=null)throw Error(a(60));e.innerHTML=r}}break;case"children":typeof o=="string"?En(e,o):(typeof o=="number"||typeof o=="bigint")&&En(e,""+o);break;case"onScroll":o!=null&&Ct("scroll",e);break;case"onScrollEnd":o!=null&&Ct("scrollend",e);break;case"onClick":o!=null&&(e.onclick=Bu);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ks.hasOwnProperty(r))t:{if(r[0]==="o"&&r[1]==="n"&&(c=r.endsWith("Capture"),n=r.slice(2,c?r.length-7:void 0),f=e[Oe]||null,f=f!=null?f[r]:null,typeof f=="function"&&e.removeEventListener(n,f,c),typeof o=="function")){typeof f!="function"&&f!==null&&(r in e?e[r]=null:e.hasAttribute(r)&&e.removeAttribute(r)),e.addEventListener(n,o,c);break t}r in e?e[r]=o:o===!0?e.setAttribute(r,""):Xs(e,r,o)}}}function Ve(e,n,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ct("error",e),Ct("load",e);var o=!1,c=!1,f;for(f in r)if(r.hasOwnProperty(f)){var y=r[f];if(y!=null)switch(f){case"src":o=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,n));default:Gt(e,n,f,y,r,null)}}c&&Gt(e,n,"srcSet",r.srcSet,r,null),o&&Gt(e,n,"src",r.src,r,null);return;case"input":Ct("invalid",e);var E=f=y=c=null,w=null,L=null;for(o in r)if(r.hasOwnProperty(o)){var q=r[o];if(q!=null)switch(o){case"name":c=q;break;case"type":y=q;break;case"checked":w=q;break;case"defaultChecked":L=q;break;case"value":f=q;break;case"defaultValue":E=q;break;case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(a(137,n));break;default:Gt(e,n,o,q,r,null)}}oo(e,f,E,w,L,y,c,!1),ns(e);return;case"select":Ct("invalid",e),o=y=f=null;for(c in r)if(r.hasOwnProperty(c)&&(E=r[c],E!=null))switch(c){case"value":f=E;break;case"defaultValue":y=E;break;case"multiple":o=E;default:Gt(e,n,c,E,r,null)}n=f,r=y,e.multiple=!!o,n!=null?is(e,!!o,n,!1):r!=null&&is(e,!!o,r,!0);return;case"textarea":Ct("invalid",e),f=c=o=null;for(y in r)if(r.hasOwnProperty(y)&&(E=r[y],E!=null))switch(y){case"value":o=E;break;case"defaultValue":c=E;break;case"children":f=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(a(91));break;default:Gt(e,n,y,E,r,null)}jl(e,o,c,f),ns(e);return;case"option":for(w in r)if(r.hasOwnProperty(w)&&(o=r[w],o!=null))switch(w){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Gt(e,n,w,o,r,null)}return;case"dialog":Ct("beforetoggle",e),Ct("toggle",e),Ct("cancel",e),Ct("close",e);break;case"iframe":case"object":Ct("load",e);break;case"video":case"audio":for(o=0;o<$o.length;o++)Ct($o[o],e);break;case"image":Ct("error",e),Ct("load",e);break;case"details":Ct("toggle",e);break;case"embed":case"source":case"link":Ct("error",e),Ct("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(L in r)if(r.hasOwnProperty(L)&&(o=r[L],o!=null))switch(L){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,n));default:Gt(e,n,L,o,r,null)}return;default:if(ta(n)){for(q in r)r.hasOwnProperty(q)&&(o=r[q],o!==void 0&&Hf(e,n,q,o,r,void 0));return}}for(E in r)r.hasOwnProperty(E)&&(o=r[E],o!=null&&Gt(e,n,E,o,r,null))}function uA(e,n,r,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,y=null,E=null,w=null,L=null,q=null;for(B in r){var F=r[B];if(r.hasOwnProperty(B)&&F!=null)switch(B){case"checked":break;case"value":break;case"defaultValue":w=F;default:o.hasOwnProperty(B)||Gt(e,n,B,null,o,F)}}for(var z in o){var B=o[z];if(F=r[z],o.hasOwnProperty(z)&&(B!=null||F!=null))switch(z){case"type":f=B;break;case"name":c=B;break;case"checked":L=B;break;case"defaultChecked":q=B;break;case"value":y=B;break;case"defaultValue":E=B;break;case"children":case"dangerouslySetInnerHTML":if(B!=null)throw Error(a(137,n));break;default:B!==F&&Gt(e,n,z,B,o,F)}}ao(e,y,E,w,L,q,f,c);return;case"select":B=y=E=z=null;for(f in r)if(w=r[f],r.hasOwnProperty(f)&&w!=null)switch(f){case"value":break;case"multiple":B=w;default:o.hasOwnProperty(f)||Gt(e,n,f,null,o,w)}for(c in o)if(f=o[c],w=r[c],o.hasOwnProperty(c)&&(f!=null||w!=null))switch(c){case"value":z=f;break;case"defaultValue":E=f;break;case"multiple":y=f;default:f!==w&&Gt(e,n,c,f,o,w)}n=E,r=y,o=B,z!=null?is(e,!!r,z,!1):!!o!=!!r&&(n!=null?is(e,!!r,n,!0):is(e,!!r,r?[]:"",!1));return;case"textarea":B=z=null;for(E in r)if(c=r[E],r.hasOwnProperty(E)&&c!=null&&!o.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:Gt(e,n,E,null,o,c)}for(y in o)if(c=o[y],f=r[y],o.hasOwnProperty(y)&&(c!=null||f!=null))switch(y){case"value":z=c;break;case"defaultValue":B=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(a(91));break;default:c!==f&&Gt(e,n,y,c,o,f)}Bl(e,z,B);return;case"option":for(var gt in r)if(z=r[gt],r.hasOwnProperty(gt)&&z!=null&&!o.hasOwnProperty(gt))switch(gt){case"selected":e.selected=!1;break;default:Gt(e,n,gt,null,o,z)}for(w in o)if(z=o[w],B=r[w],o.hasOwnProperty(w)&&z!==B&&(z!=null||B!=null))switch(w){case"selected":e.selected=z&&typeof z!="function"&&typeof z!="symbol";break;default:Gt(e,n,w,z,o,B)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ft in r)z=r[ft],r.hasOwnProperty(ft)&&z!=null&&!o.hasOwnProperty(ft)&&Gt(e,n,ft,null,o,z);for(L in o)if(z=o[L],B=r[L],o.hasOwnProperty(L)&&z!==B&&(z!=null||B!=null))switch(L){case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(a(137,n));break;default:Gt(e,n,L,z,o,B)}return;default:if(ta(n)){for(var Ft in r)z=r[Ft],r.hasOwnProperty(Ft)&&z!==void 0&&!o.hasOwnProperty(Ft)&&Hf(e,n,Ft,void 0,o,z);for(q in o)z=o[q],B=r[q],!o.hasOwnProperty(q)||z===B||z===void 0&&B===void 0||Hf(e,n,q,z,o,B);return}}for(var x in r)z=r[x],r.hasOwnProperty(x)&&z!=null&&!o.hasOwnProperty(x)&&Gt(e,n,x,null,o,z);for(F in o)z=o[F],B=r[F],!o.hasOwnProperty(F)||z===B||z==null&&B==null||Gt(e,n,F,z,o,B)}var qf=null,Gf=null;function ju(e){return e.nodeType===9?e:e.ownerDocument}function Ay(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Sy(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Ff(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Yf=null;function cA(){var e=window.event;return e&&e.type==="popstate"?e===Yf?!1:(Yf=e,!0):(Yf=null,!1)}var by=typeof setTimeout=="function"?setTimeout:void 0,hA=typeof clearTimeout=="function"?clearTimeout:void 0,wy=typeof Promise=="function"?Promise:void 0,fA=typeof queueMicrotask=="function"?queueMicrotask:typeof wy<"u"?function(e){return wy.resolve(null).then(e).catch(dA)}:by;function dA(e){setTimeout(function(){throw e})}function Ss(e){return e==="head"}function Ry(e,n){var r=n,o=0,c=0;do{var f=r.nextSibling;if(e.removeChild(r),f&&f.nodeType===8)if(r=f.data,r==="/$"){if(0<o&&8>o){r=o;var y=e.ownerDocument;if(r&1&&Jo(y.documentElement),r&2&&Jo(y.body),r&4)for(r=y.head,Jo(r),y=r.firstChild;y;){var E=y.nextSibling,w=y.nodeName;y[Ji]||w==="SCRIPT"||w==="STYLE"||w==="LINK"&&y.rel.toLowerCase()==="stylesheet"||r.removeChild(y),y=E}}if(c===0){e.removeChild(f),al(n);return}c--}else r==="$"||r==="$?"||r==="$!"?c++:o=r.charCodeAt(0)-48;else o=0;r=f}while(r);al(n)}function Kf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var r=n;switch(n=n.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":Kf(r),Xr(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(r.rel.toLowerCase()==="stylesheet")continue}e.removeChild(r)}}function mA(e,n,r,o){for(;e.nodeType===1;){var c=r;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[Ji])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=jn(e.nextSibling),e===null)break}return null}function gA(e,n,r){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!r||(e=jn(e.nextSibling),e===null))return null;return e}function Qf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function pA(e,n){var r=e.ownerDocument;if(e.data!=="$?"||r.readyState==="complete")n();else{var o=function(){n(),r.removeEventListener("DOMContentLoaded",o)};r.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function jn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}var Xf=null;function Iy(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(n===0)return e;n--}else r==="/$"&&n++}e=e.previousSibling}return null}function Cy(e,n,r){switch(n=ju(r),e){case"html":if(e=n.documentElement,!e)throw Error(a(452));return e;case"head":if(e=n.head,!e)throw Error(a(453));return e;case"body":if(e=n.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}function Jo(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Xr(e)}var Cn=new Map,Dy=new Set;function Hu(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Pi=tt.d;tt.d={f:yA,r:_A,D:vA,C:EA,L:TA,m:AA,X:bA,S:SA,M:wA};function yA(){var e=Pi.f(),n=Vu();return e||n}function _A(e){var n=Wn(e);n!==null&&n.tag===5&&n.type==="form"?Xg(n):Pi.r(e)}var Ma=typeof document>"u"?null:document;function Oy(e,n,r){var o=Ma;if(o&&typeof n=="string"&&n){var c=Se(n);c='link[rel="'+e+'"][href="'+c+'"]',typeof r=="string"&&(c+='[crossorigin="'+r+'"]'),Dy.has(c)||(Dy.add(c),e={rel:e,crossOrigin:r,href:n},o.querySelector(c)===null&&(n=o.createElement("link"),Ve(n,"link",e),ce(n),o.head.appendChild(n)))}}function vA(e){Pi.D(e),Oy("dns-prefetch",e,null)}function EA(e,n){Pi.C(e,n),Oy("preconnect",e,n)}function TA(e,n,r){Pi.L(e,n,r);var o=Ma;if(o&&e&&n){var c='link[rel="preload"][as="'+Se(n)+'"]';n==="image"&&r&&r.imageSrcSet?(c+='[imagesrcset="'+Se(r.imageSrcSet)+'"]',typeof r.imageSizes=="string"&&(c+='[imagesizes="'+Se(r.imageSizes)+'"]')):c+='[href="'+Se(e)+'"]';var f=c;switch(n){case"style":f=Va(e);break;case"script":f=xa(e)}Cn.has(f)||(e=A({rel:"preload",href:n==="image"&&r&&r.imageSrcSet?void 0:e,as:n},r),Cn.set(f,e),o.querySelector(c)!==null||n==="style"&&o.querySelector(Wo(f))||n==="script"&&o.querySelector(tl(f))||(n=o.createElement("link"),Ve(n,"link",e),ce(n),o.head.appendChild(n)))}}function AA(e,n){Pi.m(e,n);var r=Ma;if(r&&e){var o=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+Se(o)+'"][href="'+Se(e)+'"]',f=c;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=xa(e)}if(!Cn.has(f)&&(e=A({rel:"modulepreload",href:e},n),Cn.set(f,e),r.querySelector(c)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(tl(f)))return}o=r.createElement("link"),Ve(o,"link",e),ce(o),r.head.appendChild(o)}}}function SA(e,n,r){Pi.S(e,n,r);var o=Ma;if(o&&e){var c=ts(o).hoistableStyles,f=Va(e);n=n||"default";var y=c.get(f);if(!y){var E={loading:0,preload:null};if(y=o.querySelector(Wo(f)))E.loading=5;else{e=A({rel:"stylesheet",href:e,"data-precedence":n},r),(r=Cn.get(f))&&$f(e,r);var w=y=o.createElement("link");ce(w),Ve(w,"link",e),w._p=new Promise(function(L,q){w.onload=L,w.onerror=q}),w.addEventListener("load",function(){E.loading|=1}),w.addEventListener("error",function(){E.loading|=2}),E.loading|=4,qu(y,n,o)}y={type:"stylesheet",instance:y,count:1,state:E},c.set(f,y)}}}function bA(e,n){Pi.X(e,n);var r=Ma;if(r&&e){var o=ts(r).hoistableScripts,c=xa(e),f=o.get(c);f||(f=r.querySelector(tl(c)),f||(e=A({src:e,async:!0},n),(n=Cn.get(c))&&Zf(e,n),f=r.createElement("script"),ce(f),Ve(f,"link",e),r.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(c,f))}}function wA(e,n){Pi.M(e,n);var r=Ma;if(r&&e){var o=ts(r).hoistableScripts,c=xa(e),f=o.get(c);f||(f=r.querySelector(tl(c)),f||(e=A({src:e,async:!0,type:"module"},n),(n=Cn.get(c))&&Zf(e,n),f=r.createElement("script"),ce(f),Ve(f,"link",e),r.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(c,f))}}function Ny(e,n,r,o){var c=(c=mt.current)?Hu(c):null;if(!c)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof r.precedence=="string"&&typeof r.href=="string"?(n=Va(r.href),r=ts(c).hoistableStyles,o=r.get(n),o||(o={type:"style",instance:null,count:0,state:null},r.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(r.rel==="stylesheet"&&typeof r.href=="string"&&typeof r.precedence=="string"){e=Va(r.href);var f=ts(c).hoistableStyles,y=f.get(e);if(y||(c=c.ownerDocument||c,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,y),(f=c.querySelector(Wo(e)))&&!f._p&&(y.instance=f,y.state.loading=5),Cn.has(e)||(r={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},Cn.set(e,r),f||RA(c,e,r,y.state))),n&&o===null)throw Error(a(528,""));return y}if(n&&o!==null)throw Error(a(529,""));return null;case"script":return n=r.async,r=r.src,typeof r=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=xa(r),r=ts(c).hoistableScripts,o=r.get(n),o||(o={type:"script",instance:null,count:0,state:null},r.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function Va(e){return'href="'+Se(e)+'"'}function Wo(e){return'link[rel="stylesheet"]['+e+"]"}function My(e){return A({},e,{"data-precedence":e.precedence,precedence:null})}function RA(e,n,r,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Ve(n,"link",r),ce(n),e.head.appendChild(n))}function xa(e){return'[src="'+Se(e)+'"]'}function tl(e){return"script[async]"+e}function Vy(e,n,r){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+Se(r.href)+'"]');if(o)return n.instance=o,ce(o),o;var c=A({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),ce(o),Ve(o,"style",c),qu(o,r.precedence,e),n.instance=o;case"stylesheet":c=Va(r.href);var f=e.querySelector(Wo(c));if(f)return n.state.loading|=4,n.instance=f,ce(f),f;o=My(r),(c=Cn.get(c))&&$f(o,c),f=(e.ownerDocument||e).createElement("link"),ce(f);var y=f;return y._p=new Promise(function(E,w){y.onload=E,y.onerror=w}),Ve(f,"link",o),n.state.loading|=4,qu(f,r.precedence,e),n.instance=f;case"script":return f=xa(r.src),(c=e.querySelector(tl(f)))?(n.instance=c,ce(c),c):(o=r,(c=Cn.get(f))&&(o=A({},r),Zf(o,c)),e=e.ownerDocument||e,c=e.createElement("script"),ce(c),Ve(c,"link",o),e.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(a(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,qu(o,r.precedence,e));return n.instance}function qu(e,n,r){for(var o=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=o.length?o[o.length-1]:null,f=c,y=0;y<o.length;y++){var E=o[y];if(E.dataset.precedence===n)f=E;else if(f!==c)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=r.nodeType===9?r.head:r,n.insertBefore(e,n.firstChild))}function $f(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Zf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Gu=null;function xy(e,n,r){if(Gu===null){var o=new Map,c=Gu=new Map;c.set(r,o)}else c=Gu,o=c.get(r),o||(o=new Map,c.set(r,o));if(o.has(e))return o;for(o.set(e,null),r=r.getElementsByTagName(e),c=0;c<r.length;c++){var f=r[c];if(!(f[Ji]||f[ue]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var y=f.getAttribute(n)||"";y=e+y;var E=o.get(y);E?E.push(f):o.set(y,[f])}}return o}function ky(e,n,r){e=e.ownerDocument||e,e.head.insertBefore(r,n==="title"?e.querySelector("head > title"):null)}function IA(e,n,r){if(r===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Uy(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var el=null;function CA(){}function DA(e,n,r){if(el===null)throw Error(a(475));var o=el;if(n.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var c=Va(r.href),f=e.querySelector(Wo(c));if(f){e=f._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(o.count++,o=Fu.bind(o),e.then(o,o)),n.state.loading|=4,n.instance=f,ce(f);return}f=e.ownerDocument||e,r=My(r),(c=Cn.get(c))&&$f(r,c),f=f.createElement("link"),ce(f);var y=f;y._p=new Promise(function(E,w){y.onload=E,y.onerror=w}),Ve(f,"link",r),n.instance=f}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(o.count++,n=Fu.bind(o),e.addEventListener("load",n),e.addEventListener("error",n))}}function OA(){if(el===null)throw Error(a(475));var e=el;return e.stylesheets&&e.count===0&&Jf(e,e.stylesheets),0<e.count?function(n){var r=setTimeout(function(){if(e.stylesheets&&Jf(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r)}}:null}function Fu(){if(this.count--,this.count===0){if(this.stylesheets)Jf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yu=null;function Jf(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yu=new Map,n.forEach(NA,e),Yu=null,Fu.call(e))}function NA(e,n){if(!(n.state.loading&4)){var r=Yu.get(e);if(r)var o=r.get(null);else{r=new Map,Yu.set(e,r);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var y=c[f];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(r.set(y.dataset.precedence,y),o=y)}o&&r.set(null,o)}c=n.instance,y=c.getAttribute("data-precedence"),f=r.get(y)||o,f===o&&r.set(null,c),r.set(y,c),this.count++,o=Fu.bind(this),c.addEventListener("load",o),c.addEventListener("error",o),f?f.parentNode.insertBefore(c,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),n.state.loading|=4}}var nl={$$typeof:ht,Provider:null,Consumer:null,_currentValue:ut,_currentValue2:ut,_threadCount:0};function MA(e,n,r,o,c,f,y,E){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Qr(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Qr(0),this.hiddenUpdates=Qr(null),this.identifierPrefix=o,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=E,this.incompleteTransitions=new Map}function Py(e,n,r,o,c,f,y,E,w,L,q,F){return e=new MA(e,n,r,y,E,w,L,F),n=1,f===!0&&(n|=24),f=cn(3,null,null,n),e.current=f,f.stateNode=e,n=Mh(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:r,cache:n},Uh(f),e}function Ly(e){return e?(e=ha,e):ha}function zy(e,n,r,o,c,f){c=Ly(c),o.context===null?o.context=c:o.pendingContext=c,o=cs(n),o.payload={element:r},f=f===void 0?null:f,f!==null&&(o.callback=f),r=hs(e,o,n),r!==null&&(gn(r,e,n),Mo(r,e,n))}function By(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<n?r:n}}function Wf(e,n){By(e,n),(e=e.alternate)&&By(e,n)}function jy(e){if(e.tag===13){var n=ca(e,67108864);n!==null&&gn(n,e,67108864),Wf(e,67108864)}}var Ku=!0;function VA(e,n,r,o){var c=H.T;H.T=null;var f=tt.p;try{tt.p=2,td(e,n,r,o)}finally{tt.p=f,H.T=c}}function xA(e,n,r,o){var c=H.T;H.T=null;var f=tt.p;try{tt.p=8,td(e,n,r,o)}finally{tt.p=f,H.T=c}}function td(e,n,r,o){if(Ku){var c=ed(o);if(c===null)jf(e,n,o,Qu,r),qy(e,o);else if(UA(c,e,n,r,o))o.stopPropagation();else if(qy(e,o),n&4&&-1<kA.indexOf(e)){for(;c!==null;){var f=Wn(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var y=Mn(f.pendingLanes);if(y!==0){var E=f;for(E.pendingLanes|=2,E.entangledLanes|=2;y;){var w=1<<31-Ke(y);E.entanglements[1]|=w,y&=~w}ui(f),(zt&6)===0&&(Nu=Je()+500,Xo(0))}}break;case 13:E=ca(f,2),E!==null&&gn(E,f,2),Vu(),Wf(f,2)}if(f=ed(o),f===null&&jf(e,n,o,Qu,r),f===c)break;c=f}c!==null&&o.stopPropagation()}else jf(e,n,o,null,r)}}function ed(e){return e=fo(e),nd(e)}var Qu=null;function nd(e){if(Qu=null,e=Jn(e),e!==null){var n=h(e);if(n===null)e=null;else{var r=n.tag;if(r===13){if(e=d(n),e!==null)return e;e=null}else if(r===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Qu=e,null}function Hy(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(kl()){case _e:return 2;case Ae:return 8;case yi:case ah:return 32;case no:return 268435456;default:return 32}default:return 32}}var id=!1,bs=null,ws=null,Rs=null,il=new Map,sl=new Map,Is=[],kA="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function qy(e,n){switch(e){case"focusin":case"focusout":bs=null;break;case"dragenter":case"dragleave":ws=null;break;case"mouseover":case"mouseout":Rs=null;break;case"pointerover":case"pointerout":il.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":sl.delete(n.pointerId)}}function rl(e,n,r,o,c,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:r,eventSystemFlags:o,nativeEvent:f,targetContainers:[c]},n!==null&&(n=Wn(n),n!==null&&jy(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),e)}function UA(e,n,r,o,c){switch(n){case"focusin":return bs=rl(bs,e,n,r,o,c),!0;case"dragenter":return ws=rl(ws,e,n,r,o,c),!0;case"mouseover":return Rs=rl(Rs,e,n,r,o,c),!0;case"pointerover":var f=c.pointerId;return il.set(f,rl(il.get(f)||null,e,n,r,o,c)),!0;case"gotpointercapture":return f=c.pointerId,sl.set(f,rl(sl.get(f)||null,e,n,r,o,c)),!0}return!1}function Gy(e){var n=Jn(e.target);if(n!==null){var r=h(n);if(r!==null){if(n=r.tag,n===13){if(n=d(r),n!==null){e.blockedOn=n,uh(e.priority,function(){if(r.tag===13){var o=mn();o=so(o);var c=ca(r,o);c!==null&&gn(c,r,o),Wf(r,o)}});return}}else if(n===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Xu(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var r=ed(e.nativeEvent);if(r===null){r=e.nativeEvent;var o=new r.constructor(r.type,r);ho=o,r.target.dispatchEvent(o),ho=null}else return n=Wn(r),n!==null&&jy(n),e.blockedOn=r,!1;n.shift()}return!0}function Fy(e,n,r){Xu(e)&&r.delete(n)}function PA(){id=!1,bs!==null&&Xu(bs)&&(bs=null),ws!==null&&Xu(ws)&&(ws=null),Rs!==null&&Xu(Rs)&&(Rs=null),il.forEach(Fy),sl.forEach(Fy)}function $u(e,n){e.blockedOn===n&&(e.blockedOn=null,id||(id=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,PA)))}var Zu=null;function Yy(e){Zu!==e&&(Zu=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){Zu===e&&(Zu=null);for(var n=0;n<e.length;n+=3){var r=e[n],o=e[n+1],c=e[n+2];if(typeof o!="function"){if(nd(o||r)===null)continue;break}var f=Wn(r);f!==null&&(e.splice(n,3),n-=3,ef(f,{pending:!0,data:c,method:r.method,action:o},o,c))}}))}function al(e){function n(w){return $u(w,e)}bs!==null&&$u(bs,e),ws!==null&&$u(ws,e),Rs!==null&&$u(Rs,e),il.forEach(n),sl.forEach(n);for(var r=0;r<Is.length;r++){var o=Is[r];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Is.length&&(r=Is[0],r.blockedOn===null);)Gy(r),r.blockedOn===null&&Is.shift();if(r=(e.ownerDocument||e).$$reactFormReplay,r!=null)for(o=0;o<r.length;o+=3){var c=r[o],f=r[o+1],y=c[Oe]||null;if(typeof f=="function")y||Yy(r);else if(y){var E=null;if(f&&f.hasAttribute("formAction")){if(c=f,y=f[Oe]||null)E=y.formAction;else if(nd(c)!==null)continue}else E=y.action;typeof E=="function"?r[o+1]=E:(r.splice(o,3),o-=3),Yy(r)}}}function sd(e){this._internalRoot=e}Ju.prototype.render=sd.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(a(409));var r=n.current,o=mn();zy(r,o,e,n,null,null)},Ju.prototype.unmount=sd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;zy(e.current,2,null,e,null,null),Vu(),n[vi]=null}};function Ju(e){this._internalRoot=e}Ju.prototype.unstable_scheduleHydration=function(e){if(e){var n=_i();e={blockedOn:null,target:e,priority:n};for(var r=0;r<Is.length&&n!==0&&n<Is[r].priority;r++);Is.splice(r,0,e),r===0&&Gy(e)}};var Ky=t.version;if(Ky!=="19.1.1")throw Error(a(527,Ky,"19.1.1"));tt.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=_(n),e=e!==null?v(e):null,e=e===null?null:e.stateNode,e};var LA={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:H,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Wu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Wu.isDisabled&&Wu.supportsFiber)try{Yi=Wu.inject(LA),Le=Wu}catch{}}return ll.createRoot=function(e,n){if(!l(e))throw Error(a(299));var r=!1,o="",c=up,f=cp,y=hp,E=null;return n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(y=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(E=n.unstable_transitionCallbacks)),n=Py(e,1,!1,null,null,r,o,c,f,y,E,null),e[vi]=n.current,Bf(e),new sd(n)},ll.hydrateRoot=function(e,n,r){if(!l(e))throw Error(a(299));var o=!1,c="",f=up,y=cp,E=hp,w=null,L=null;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(c=r.identifierPrefix),r.onUncaughtError!==void 0&&(f=r.onUncaughtError),r.onCaughtError!==void 0&&(y=r.onCaughtError),r.onRecoverableError!==void 0&&(E=r.onRecoverableError),r.unstable_transitionCallbacks!==void 0&&(w=r.unstable_transitionCallbacks),r.formState!==void 0&&(L=r.formState)),n=Py(e,1,!0,n,r??null,o,c,f,y,E,w,L),n.context=Ly(null),r=n.current,o=mn(),o=so(o),c=cs(o),c.callback=null,hs(r,c,o),r=o,n.current.lanes=r,le(n,r),ui(n),e[vi]=n.current,Bf(e),new Ju(n)},ll.version="19.1.1",ll}var i_;function XA(){if(i_)return od.exports;i_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),od.exports=QA(),od.exports}var $A=XA();const ZA=Uv($A);var lc=(s=>(s.VR="VR",s.IRL="IRL",s.Online="Online",s))(lc||{});const JA=()=>{};var s_={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pv=function(s){const t=[];let i=0;for(let a=0;a<s.length;a++){let l=s.charCodeAt(a);l<128?t[i++]=l:l<2048?(t[i++]=l>>6|192,t[i++]=l&63|128):(l&64512)===55296&&a+1<s.length&&(s.charCodeAt(a+1)&64512)===56320?(l=65536+((l&1023)<<10)+(s.charCodeAt(++a)&1023),t[i++]=l>>18|240,t[i++]=l>>12&63|128,t[i++]=l>>6&63|128,t[i++]=l&63|128):(t[i++]=l>>12|224,t[i++]=l>>6&63|128,t[i++]=l&63|128)}return t},WA=function(s){const t=[];let i=0,a=0;for(;i<s.length;){const l=s[i++];if(l<128)t[a++]=String.fromCharCode(l);else if(l>191&&l<224){const h=s[i++];t[a++]=String.fromCharCode((l&31)<<6|h&63)}else if(l>239&&l<365){const h=s[i++],d=s[i++],p=s[i++],_=((l&7)<<18|(h&63)<<12|(d&63)<<6|p&63)-65536;t[a++]=String.fromCharCode(55296+(_>>10)),t[a++]=String.fromCharCode(56320+(_&1023))}else{const h=s[i++],d=s[i++];t[a++]=String.fromCharCode((l&15)<<12|(h&63)<<6|d&63)}}return t.join("")},Lv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(s,t){if(!Array.isArray(s))throw Error("encodeByteArray takes an array as a parameter");this.init_();const i=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,a=[];for(let l=0;l<s.length;l+=3){const h=s[l],d=l+1<s.length,p=d?s[l+1]:0,_=l+2<s.length,v=_?s[l+2]:0,A=h>>2,I=(h&3)<<4|p>>4;let k=(p&15)<<2|v>>6,Q=v&63;_||(Q=64,d||(k=64)),a.push(i[A],i[I],i[k],i[Q])}return a.join("")},encodeString(s,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(s):this.encodeByteArray(Pv(s),t)},decodeString(s,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(s):WA(this.decodeStringToByteArray(s,t))},decodeStringToByteArray(s,t){this.init_();const i=t?this.charToByteMapWebSafe_:this.charToByteMap_,a=[];for(let l=0;l<s.length;){const h=i[s.charAt(l++)],p=l<s.length?i[s.charAt(l)]:0;++l;const v=l<s.length?i[s.charAt(l)]:64;++l;const I=l<s.length?i[s.charAt(l)]:64;if(++l,h==null||p==null||v==null||I==null)throw new tS;const k=h<<2|p>>4;if(a.push(k),v!==64){const Q=p<<4&240|v>>2;if(a.push(Q),I!==64){const $=v<<6&192|I;a.push($)}}}return a},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let s=0;s<this.ENCODED_VALS.length;s++)this.byteToCharMap_[s]=this.ENCODED_VALS.charAt(s),this.charToByteMap_[this.byteToCharMap_[s]]=s,this.byteToCharMapWebSafe_[s]=this.ENCODED_VALS_WEBSAFE.charAt(s),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[s]]=s,s>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(s)]=s,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(s)]=s)}}};class tS extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const eS=function(s){const t=Pv(s);return Lv.encodeByteArray(t,!0)},_c=function(s){return eS(s).replace(/\./g,"")},zv=function(s){try{return Lv.decodeString(s,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iS=()=>nS().__FIREBASE_DEFAULTS__,sS=()=>{if(typeof process>"u"||typeof s_>"u")return;const s=s_.__FIREBASE_DEFAULTS__;if(s)return JSON.parse(s)},rS=()=>{if(typeof document>"u")return;let s;try{s=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=s&&zv(s[1]);return t&&JSON.parse(t)},Hc=()=>{try{return JA()||iS()||sS()||rS()}catch(s){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${s}`);return}},Bv=s=>{var t,i;return(i=(t=Hc())==null?void 0:t.emulatorHosts)==null?void 0:i[s]},jv=s=>{const t=Bv(s);if(!t)return;const i=t.lastIndexOf(":");if(i<=0||i+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const a=parseInt(t.substring(i+1),10);return t[0]==="["?[t.substring(1,i-1),a]:[t.substring(0,i),a]},Hv=()=>{var s;return(s=Hc())==null?void 0:s.config},qv=s=>{var t;return(t=Hc())==null?void 0:t[`_${s}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aS{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,i)=>{this.resolve=t,this.reject=i})}wrapCallback(t){return(i,a)=>{i?this.reject(i):this.resolve(a),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(i):t(i,a))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zr(s){try{return(s.startsWith("http://")||s.startsWith("https://")?new URL(s).hostname:s).endsWith(".cloudworkstations.dev")}catch{return!1}}async function $d(s){return(await fetch(s,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gv(s,t){if(s.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const i={alg:"none",type:"JWT"},a=t||"demo-project",l=s.iat||0,h=s.sub||s.user_id;if(!h)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const d={iss:`https://securetoken.google.com/${a}`,aud:a,iat:l,exp:l+3600,auth_time:l,sub:h,user_id:h,firebase:{sign_in_provider:"custom",identities:{}},...s};return[_c(JSON.stringify(i)),_c(JSON.stringify(d)),""].join(".")}const hl={};function oS(){const s={prod:[],emulator:[]};for(const t of Object.keys(hl))hl[t]?s.emulator.push(t):s.prod.push(t);return s}function lS(s){let t=document.getElementById(s),i=!1;return t||(t=document.createElement("div"),t.setAttribute("id",s),i=!0),{created:i,element:t}}let r_=!1;function Zd(s,t){if(typeof window>"u"||typeof document>"u"||!zr(window.location.host)||hl[s]===t||hl[s]||r_)return;hl[s]=t;function i(k){return`__firebase__banner__${k}`}const a="__firebase__banner",h=oS().prod.length>0;function d(){const k=document.getElementById(a);k&&k.remove()}function p(k){k.style.display="flex",k.style.background="#7faaf0",k.style.position="fixed",k.style.bottom="5px",k.style.left="5px",k.style.padding=".5em",k.style.borderRadius="5px",k.style.alignItems="center"}function _(k,Q){k.setAttribute("width","24"),k.setAttribute("id",Q),k.setAttribute("height","24"),k.setAttribute("viewBox","0 0 24 24"),k.setAttribute("fill","none"),k.style.marginLeft="-6px"}function v(){const k=document.createElement("span");return k.style.cursor="pointer",k.style.marginLeft="16px",k.style.fontSize="24px",k.innerHTML=" &times;",k.onclick=()=>{r_=!0,d()},k}function A(k,Q){k.setAttribute("id",Q),k.innerText="Learn more",k.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",k.setAttribute("target","__blank"),k.style.paddingLeft="5px",k.style.textDecoration="underline"}function I(){const k=lS(a),Q=i("text"),$=document.getElementById(Q)||document.createElement("span"),it=i("learnmore"),Z=document.getElementById(it)||document.createElement("a"),Et=i("preprendIcon"),_t=document.getElementById(Et)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(k.created){const ht=k.element;p(ht),A(Z,it);const vt=v();_(_t,Et),ht.append(_t,$,Z,vt),document.body.appendChild(ht)}h?($.innerText="Preview backend disconnected.",_t.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(_t.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,$.innerText="Preview backend running in this workspace."),$.setAttribute("id",Q)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",I):I()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ye(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function uS(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ye())}function cS(){var t;const s=(t=Hc())==null?void 0:t.forceEnvironment;if(s==="node")return!0;if(s==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function hS(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Fv(){const s=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof s=="object"&&s.id!==void 0}function fS(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function dS(){const s=Ye();return s.indexOf("MSIE ")>=0||s.indexOf("Trident/")>=0}function mS(){return!cS()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Yv(){try{return typeof indexedDB=="object"}catch{return!1}}function Kv(){return new Promise((s,t)=>{try{let i=!0;const a="validate-browser-context-for-indexeddb-analytics-module",l=self.indexedDB.open(a);l.onsuccess=()=>{l.result.close(),i||self.indexedDB.deleteDatabase(a),s(!0)},l.onupgradeneeded=()=>{i=!1},l.onerror=()=>{var h;t(((h=l.error)==null?void 0:h.message)||"")}}catch(i){t(i)}})}function gS(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pS="FirebaseError";class On extends Error{constructor(t,i,a){super(i),this.code=t,this.customData=a,this.name=pS,Object.setPrototypeOf(this,On.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Br.prototype.create)}}class Br{constructor(t,i,a){this.service=t,this.serviceName=i,this.errors=a}create(t,...i){const a=i[0]||{},l=`${this.service}/${t}`,h=this.errors[t],d=h?yS(h,a):"Error",p=`${this.serviceName}: ${d} (${l}).`;return new On(l,p,a)}}function yS(s,t){return s.replace(_S,(i,a)=>{const l=t[a];return l!=null?String(l):`<${a}?>`})}const _S=/\{\$([^}]+)}/g;function vS(s){for(const t in s)if(Object.prototype.hasOwnProperty.call(s,t))return!1;return!0}function Ps(s,t){if(s===t)return!0;const i=Object.keys(s),a=Object.keys(t);for(const l of i){if(!a.includes(l))return!1;const h=s[l],d=t[l];if(a_(h)&&a_(d)){if(!Ps(h,d))return!1}else if(h!==d)return!1}for(const l of a)if(!i.includes(l))return!1;return!0}function a_(s){return s!==null&&typeof s=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wl(s){const t=[];for(const[i,a]of Object.entries(s))Array.isArray(a)?a.forEach(l=>{t.push(encodeURIComponent(i)+"="+encodeURIComponent(l))}):t.push(encodeURIComponent(i)+"="+encodeURIComponent(a));return t.length?"&"+t.join("&"):""}function ES(s,t){const i=new TS(s,t);return i.subscribe.bind(i)}class TS{constructor(t,i){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=i,this.task.then(()=>{t(this)}).catch(a=>{this.error(a)})}next(t){this.forEachObserver(i=>{i.next(t)})}error(t){this.forEachObserver(i=>{i.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,i,a){let l;if(t===void 0&&i===void 0&&a===void 0)throw new Error("Missing Observer.");AS(t,["next","error","complete"])?l=t:l={next:t,error:i,complete:a},l.next===void 0&&(l.next=hd),l.error===void 0&&(l.error=hd),l.complete===void 0&&(l.complete=hd);const h=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?l.error(this.finalError):l.complete()}catch{}}),this.observers.push(l),h}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let i=0;i<this.observers.length;i++)this.sendOne(i,t)}sendOne(t,i){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{i(this.observers[t])}catch(a){typeof console<"u"&&console.error&&console.error(a)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function AS(s,t){if(typeof s!="object"||s===null)return!1;for(const i of t)if(i in s&&typeof s[i]=="function")return!0;return!1}function hd(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SS=1e3,bS=2,wS=14400*1e3,RS=.5;function o_(s,t=SS,i=bS){const a=t*Math.pow(i,s),l=Math.round(RS*a*(Math.random()-.5)*2);return Math.min(wS,a+l)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function an(s){return s&&s._delegate?s._delegate:s}class Dn{constructor(t,i,a){this.name=t,this.instanceFactory=i,this.type=a,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IS{constructor(t,i){this.name=t,this.container=i,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const i=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(i)){const a=new aS;if(this.instancesDeferred.set(i,a),this.isInitialized(i)||this.shouldAutoInitialize())try{const l=this.getOrInitializeService({instanceIdentifier:i});l&&a.resolve(l)}catch{}}return this.instancesDeferred.get(i).promise}getImmediate(t){const i=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),a=(t==null?void 0:t.optional)??!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(l){if(a)return null;throw l}else{if(a)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(DS(t))try{this.getOrInitializeService({instanceIdentifier:Rr})}catch{}for(const[i,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);try{const h=this.getOrInitializeService({instanceIdentifier:l});a.resolve(h)}catch{}}}}clearInstance(t=Rr){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(i=>"INTERNAL"in i).map(i=>i.INTERNAL.delete()),...t.filter(i=>"_delete"in i).map(i=>i._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Rr){return this.instances.has(t)}getOptions(t=Rr){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:i={}}=t,a=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(a))throw Error(`${this.name}(${a}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const l=this.getOrInitializeService({instanceIdentifier:a,options:i});for(const[h,d]of this.instancesDeferred.entries()){const p=this.normalizeInstanceIdentifier(h);a===p&&d.resolve(l)}return l}onInit(t,i){const a=this.normalizeInstanceIdentifier(i),l=this.onInitCallbacks.get(a)??new Set;l.add(t),this.onInitCallbacks.set(a,l);const h=this.instances.get(a);return h&&t(h,a),()=>{l.delete(t)}}invokeOnInitCallbacks(t,i){const a=this.onInitCallbacks.get(i);if(a)for(const l of a)try{l(t,i)}catch{}}getOrInitializeService({instanceIdentifier:t,options:i={}}){let a=this.instances.get(t);if(!a&&this.component&&(a=this.component.instanceFactory(this.container,{instanceIdentifier:CS(t),options:i}),this.instances.set(t,a),this.instancesOptions.set(t,i),this.invokeOnInitCallbacks(a,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,a)}catch{}return a||null}normalizeInstanceIdentifier(t=Rr){return this.component?this.component.multipleInstances?t:Rr:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function CS(s){return s===Rr?void 0:s}function DS(s){return s.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OS{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const i=this.getProvider(t.name);if(i.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);i.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const i=new IS(t,this);return this.providers.set(t,i),i}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ot;(function(s){s[s.DEBUG=0]="DEBUG",s[s.VERBOSE=1]="VERBOSE",s[s.INFO=2]="INFO",s[s.WARN=3]="WARN",s[s.ERROR=4]="ERROR",s[s.SILENT=5]="SILENT"})(Ot||(Ot={}));const NS={debug:Ot.DEBUG,verbose:Ot.VERBOSE,info:Ot.INFO,warn:Ot.WARN,error:Ot.ERROR,silent:Ot.SILENT},MS=Ot.INFO,VS={[Ot.DEBUG]:"log",[Ot.VERBOSE]:"log",[Ot.INFO]:"info",[Ot.WARN]:"warn",[Ot.ERROR]:"error"},xS=(s,t,...i)=>{if(t<s.logLevel)return;const a=new Date().toISOString(),l=VS[t];if(l)console[l](`[${a}]  ${s.name}:`,...i);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class qc{constructor(t){this.name=t,this._logLevel=MS,this._logHandler=xS,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Ot))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?NS[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Ot.DEBUG,...t),this._logHandler(this,Ot.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Ot.VERBOSE,...t),this._logHandler(this,Ot.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Ot.INFO,...t),this._logHandler(this,Ot.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Ot.WARN,...t),this._logHandler(this,Ot.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Ot.ERROR,...t),this._logHandler(this,Ot.ERROR,...t)}}const kS=(s,t)=>t.some(i=>s instanceof i);let l_,u_;function US(){return l_||(l_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function PS(){return u_||(u_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Qv=new WeakMap,Cd=new WeakMap,Xv=new WeakMap,fd=new WeakMap,Jd=new WeakMap;function LS(s){const t=new Promise((i,a)=>{const l=()=>{s.removeEventListener("success",h),s.removeEventListener("error",d)},h=()=>{i(xs(s.result)),l()},d=()=>{a(s.error),l()};s.addEventListener("success",h),s.addEventListener("error",d)});return t.then(i=>{i instanceof IDBCursor&&Qv.set(i,s)}).catch(()=>{}),Jd.set(t,s),t}function zS(s){if(Cd.has(s))return;const t=new Promise((i,a)=>{const l=()=>{s.removeEventListener("complete",h),s.removeEventListener("error",d),s.removeEventListener("abort",d)},h=()=>{i(),l()},d=()=>{a(s.error||new DOMException("AbortError","AbortError")),l()};s.addEventListener("complete",h),s.addEventListener("error",d),s.addEventListener("abort",d)});Cd.set(s,t)}let Dd={get(s,t,i){if(s instanceof IDBTransaction){if(t==="done")return Cd.get(s);if(t==="objectStoreNames")return s.objectStoreNames||Xv.get(s);if(t==="store")return i.objectStoreNames[1]?void 0:i.objectStore(i.objectStoreNames[0])}return xs(s[t])},set(s,t,i){return s[t]=i,!0},has(s,t){return s instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in s}};function BS(s){Dd=s(Dd)}function jS(s){return s===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...i){const a=s.call(dd(this),t,...i);return Xv.set(a,t.sort?t.sort():[t]),xs(a)}:PS().includes(s)?function(...t){return s.apply(dd(this),t),xs(Qv.get(this))}:function(...t){return xs(s.apply(dd(this),t))}}function HS(s){return typeof s=="function"?jS(s):(s instanceof IDBTransaction&&zS(s),kS(s,US())?new Proxy(s,Dd):s)}function xs(s){if(s instanceof IDBRequest)return LS(s);if(fd.has(s))return fd.get(s);const t=HS(s);return t!==s&&(fd.set(s,t),Jd.set(t,s)),t}const dd=s=>Jd.get(s);function $v(s,t,{blocked:i,upgrade:a,blocking:l,terminated:h}={}){const d=indexedDB.open(s,t),p=xs(d);return a&&d.addEventListener("upgradeneeded",_=>{a(xs(d.result),_.oldVersion,_.newVersion,xs(d.transaction),_)}),i&&d.addEventListener("blocked",_=>i(_.oldVersion,_.newVersion,_)),p.then(_=>{h&&_.addEventListener("close",()=>h()),l&&_.addEventListener("versionchange",v=>l(v.oldVersion,v.newVersion,v))}).catch(()=>{}),p}const qS=["get","getKey","getAll","getAllKeys","count"],GS=["put","add","delete","clear"],md=new Map;function c_(s,t){if(!(s instanceof IDBDatabase&&!(t in s)&&typeof t=="string"))return;if(md.get(t))return md.get(t);const i=t.replace(/FromIndex$/,""),a=t!==i,l=GS.includes(i);if(!(i in(a?IDBIndex:IDBObjectStore).prototype)||!(l||qS.includes(i)))return;const h=async function(d,...p){const _=this.transaction(d,l?"readwrite":"readonly");let v=_.store;return a&&(v=v.index(p.shift())),(await Promise.all([v[i](...p),l&&_.done]))[0]};return md.set(t,h),h}BS(s=>({...s,get:(t,i,a)=>c_(t,i)||s.get(t,i,a),has:(t,i)=>!!c_(t,i)||s.has(t,i)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FS{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(i=>{if(YS(i)){const a=i.getImmediate();return`${a.library}/${a.version}`}else return null}).filter(i=>i).join(" ")}}function YS(s){const t=s.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Od="@firebase/app",h_="0.14.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qi=new qc("@firebase/app"),KS="@firebase/app-compat",QS="@firebase/analytics-compat",XS="@firebase/analytics",$S="@firebase/app-check-compat",ZS="@firebase/app-check",JS="@firebase/auth",WS="@firebase/auth-compat",tb="@firebase/database",eb="@firebase/data-connect",nb="@firebase/database-compat",ib="@firebase/functions",sb="@firebase/functions-compat",rb="@firebase/installations",ab="@firebase/installations-compat",ob="@firebase/messaging",lb="@firebase/messaging-compat",ub="@firebase/performance",cb="@firebase/performance-compat",hb="@firebase/remote-config",fb="@firebase/remote-config-compat",db="@firebase/storage",mb="@firebase/storage-compat",gb="@firebase/firestore",pb="@firebase/ai",yb="@firebase/firestore-compat",_b="firebase",vb="12.3.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nd="[DEFAULT]",Eb={[Od]:"fire-core",[KS]:"fire-core-compat",[XS]:"fire-analytics",[QS]:"fire-analytics-compat",[ZS]:"fire-app-check",[$S]:"fire-app-check-compat",[JS]:"fire-auth",[WS]:"fire-auth-compat",[tb]:"fire-rtdb",[eb]:"fire-data-connect",[nb]:"fire-rtdb-compat",[ib]:"fire-fn",[sb]:"fire-fn-compat",[rb]:"fire-iid",[ab]:"fire-iid-compat",[ob]:"fire-fcm",[lb]:"fire-fcm-compat",[ub]:"fire-perf",[cb]:"fire-perf-compat",[hb]:"fire-rc",[fb]:"fire-rc-compat",[db]:"fire-gcs",[mb]:"fire-gcs-compat",[gb]:"fire-fst",[yb]:"fire-fst-compat",[pb]:"fire-vertex","fire-js":"fire-js",[_b]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vc=new Map,Tb=new Map,Md=new Map;function f_(s,t){try{s.container.addComponent(t)}catch(i){qi.debug(`Component ${t.name} failed to register with FirebaseApp ${s.name}`,i)}}function Xn(s){const t=s.name;if(Md.has(t))return qi.debug(`There were multiple attempts to register component ${t}.`),!1;Md.set(t,s);for(const i of vc.values())f_(i,s);for(const i of Tb.values())f_(i,s);return!0}function Hs(s,t){const i=s.container.getProvider("heartbeat").getImmediate({optional:!0});return i&&i.triggerHeartbeat(),s.container.getProvider(t)}function qn(s){return s==null?!1:s.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ab={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ks=new Br("app","Firebase",Ab);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sb{constructor(t,i,a){this._isDeleted=!1,this._options={...t},this._config={...i},this._name=i.name,this._automaticDataCollectionEnabled=i.automaticDataCollectionEnabled,this._container=a,this.container.addComponent(new Dn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw ks.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jr=vb;function Zv(s,t={}){let i=s;typeof t!="object"&&(t={name:t});const a={name:Nd,automaticDataCollectionEnabled:!0,...t},l=a.name;if(typeof l!="string"||!l)throw ks.create("bad-app-name",{appName:String(l)});if(i||(i=Hv()),!i)throw ks.create("no-options");const h=vc.get(l);if(h){if(Ps(i,h.options)&&Ps(a,h.config))return h;throw ks.create("duplicate-app",{appName:l})}const d=new OS(l);for(const _ of Md.values())d.addComponent(_);const p=new Sb(i,a,d);return vc.set(l,p),p}function Gc(s=Nd){const t=vc.get(s);if(!t&&s===Nd&&Hv())return Zv();if(!t)throw ks.create("no-app",{appName:s});return t}function sn(s,t,i){let a=Eb[s]??s;i&&(a+=`-${i}`);const l=a.match(/\s|\//),h=t.match(/\s|\//);if(l||h){const d=[`Unable to register library "${a}" with version "${t}":`];l&&d.push(`library name "${a}" contains illegal characters (whitespace or "/")`),l&&h&&d.push("and"),h&&d.push(`version name "${t}" contains illegal characters (whitespace or "/")`),qi.warn(d.join(" "));return}Xn(new Dn(`${a}-version`,()=>({library:a,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bb="firebase-heartbeat-database",wb=1,vl="firebase-heartbeat-store";let gd=null;function Jv(){return gd||(gd=$v(bb,wb,{upgrade:(s,t)=>{switch(t){case 0:try{s.createObjectStore(vl)}catch(i){console.warn(i)}}}}).catch(s=>{throw ks.create("idb-open",{originalErrorMessage:s.message})})),gd}async function Rb(s){try{const i=(await Jv()).transaction(vl),a=await i.objectStore(vl).get(Wv(s));return await i.done,a}catch(t){if(t instanceof On)qi.warn(t.message);else{const i=ks.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});qi.warn(i.message)}}}async function d_(s,t){try{const a=(await Jv()).transaction(vl,"readwrite");await a.objectStore(vl).put(t,Wv(s)),await a.done}catch(i){if(i instanceof On)qi.warn(i.message);else{const a=ks.create("idb-set",{originalErrorMessage:i==null?void 0:i.message});qi.warn(a.message)}}}function Wv(s){return`${s.name}!${s.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ib=1024,Cb=30;class Db{constructor(t){this.container=t,this._heartbeatsCache=null;const i=this.container.getProvider("app").getImmediate();this._storage=new Nb(i),this._heartbeatsCachePromise=this._storage.read().then(a=>(this._heartbeatsCache=a,a))}async triggerHeartbeat(){var t,i;try{const l=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),h=m_();if(((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((i=this._heartbeatsCache)==null?void 0:i.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===h||this._heartbeatsCache.heartbeats.some(d=>d.date===h))return;if(this._heartbeatsCache.heartbeats.push({date:h,agent:l}),this._heartbeatsCache.heartbeats.length>Cb){const d=Mb(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(d,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(a){qi.warn(a)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const i=m_(),{heartbeatsToSend:a,unsentEntries:l}=Ob(this._heartbeatsCache.heartbeats),h=_c(JSON.stringify({version:2,heartbeats:a}));return this._heartbeatsCache.lastSentHeartbeatDate=i,l.length>0?(this._heartbeatsCache.heartbeats=l,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),h}catch(i){return qi.warn(i),""}}}function m_(){return new Date().toISOString().substring(0,10)}function Ob(s,t=Ib){const i=[];let a=s.slice();for(const l of s){const h=i.find(d=>d.agent===l.agent);if(h){if(h.dates.push(l.date),g_(i)>t){h.dates.pop();break}}else if(i.push({agent:l.agent,dates:[l.date]}),g_(i)>t){i.pop();break}a=a.slice(1)}return{heartbeatsToSend:i,unsentEntries:a}}class Nb{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Yv()?Kv().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const i=await Rb(this.app);return i!=null&&i.heartbeats?i:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const a=await this.read();return d_(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??a.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const a=await this.read();return d_(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??a.lastSentHeartbeatDate,heartbeats:[...a.heartbeats,...t.heartbeats]})}else return}}function g_(s){return _c(JSON.stringify({version:2,heartbeats:s})).length}function Mb(s){if(s.length===0)return-1;let t=0,i=s[0].date;for(let a=1;a<s.length;a++)s[a].date<i&&(i=s[a].date,t=a);return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vb(s){Xn(new Dn("platform-logger",t=>new FS(t),"PRIVATE")),Xn(new Dn("heartbeat",t=>new Db(t),"PRIVATE")),sn(Od,h_,s),sn(Od,h_,"esm2020"),sn("fire-js","")}Vb("");var xb="firebase",kb="12.3.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */sn(xb,kb,"app");var p_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Wd;(function(){var s;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(C,S){function R(){}R.prototype=S.prototype,C.F=S.prototype,C.prototype=new R,C.prototype.constructor=C,C.D=function(M,D,V){for(var b=Array(arguments.length-2),Pt=2;Pt<arguments.length;Pt++)b[Pt-2]=arguments[Pt];return S.prototype[D].apply(M,b)}}function i(){this.blockSize=-1}function a(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}t(a,i),a.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function l(C,S,R){R||(R=0);const M=Array(16);if(typeof S=="string")for(var D=0;D<16;++D)M[D]=S.charCodeAt(R++)|S.charCodeAt(R++)<<8|S.charCodeAt(R++)<<16|S.charCodeAt(R++)<<24;else for(D=0;D<16;++D)M[D]=S[R++]|S[R++]<<8|S[R++]<<16|S[R++]<<24;S=C.g[0],R=C.g[1],D=C.g[2];let V=C.g[3],b;b=S+(V^R&(D^V))+M[0]+3614090360&4294967295,S=R+(b<<7&4294967295|b>>>25),b=V+(D^S&(R^D))+M[1]+3905402710&4294967295,V=S+(b<<12&4294967295|b>>>20),b=D+(R^V&(S^R))+M[2]+606105819&4294967295,D=V+(b<<17&4294967295|b>>>15),b=R+(S^D&(V^S))+M[3]+3250441966&4294967295,R=D+(b<<22&4294967295|b>>>10),b=S+(V^R&(D^V))+M[4]+4118548399&4294967295,S=R+(b<<7&4294967295|b>>>25),b=V+(D^S&(R^D))+M[5]+1200080426&4294967295,V=S+(b<<12&4294967295|b>>>20),b=D+(R^V&(S^R))+M[6]+2821735955&4294967295,D=V+(b<<17&4294967295|b>>>15),b=R+(S^D&(V^S))+M[7]+4249261313&4294967295,R=D+(b<<22&4294967295|b>>>10),b=S+(V^R&(D^V))+M[8]+1770035416&4294967295,S=R+(b<<7&4294967295|b>>>25),b=V+(D^S&(R^D))+M[9]+2336552879&4294967295,V=S+(b<<12&4294967295|b>>>20),b=D+(R^V&(S^R))+M[10]+4294925233&4294967295,D=V+(b<<17&4294967295|b>>>15),b=R+(S^D&(V^S))+M[11]+2304563134&4294967295,R=D+(b<<22&4294967295|b>>>10),b=S+(V^R&(D^V))+M[12]+1804603682&4294967295,S=R+(b<<7&4294967295|b>>>25),b=V+(D^S&(R^D))+M[13]+4254626195&4294967295,V=S+(b<<12&4294967295|b>>>20),b=D+(R^V&(S^R))+M[14]+2792965006&4294967295,D=V+(b<<17&4294967295|b>>>15),b=R+(S^D&(V^S))+M[15]+1236535329&4294967295,R=D+(b<<22&4294967295|b>>>10),b=S+(D^V&(R^D))+M[1]+4129170786&4294967295,S=R+(b<<5&4294967295|b>>>27),b=V+(R^D&(S^R))+M[6]+3225465664&4294967295,V=S+(b<<9&4294967295|b>>>23),b=D+(S^R&(V^S))+M[11]+643717713&4294967295,D=V+(b<<14&4294967295|b>>>18),b=R+(V^S&(D^V))+M[0]+3921069994&4294967295,R=D+(b<<20&4294967295|b>>>12),b=S+(D^V&(R^D))+M[5]+3593408605&4294967295,S=R+(b<<5&4294967295|b>>>27),b=V+(R^D&(S^R))+M[10]+38016083&4294967295,V=S+(b<<9&4294967295|b>>>23),b=D+(S^R&(V^S))+M[15]+3634488961&4294967295,D=V+(b<<14&4294967295|b>>>18),b=R+(V^S&(D^V))+M[4]+3889429448&4294967295,R=D+(b<<20&4294967295|b>>>12),b=S+(D^V&(R^D))+M[9]+568446438&4294967295,S=R+(b<<5&4294967295|b>>>27),b=V+(R^D&(S^R))+M[14]+3275163606&4294967295,V=S+(b<<9&4294967295|b>>>23),b=D+(S^R&(V^S))+M[3]+4107603335&4294967295,D=V+(b<<14&4294967295|b>>>18),b=R+(V^S&(D^V))+M[8]+1163531501&4294967295,R=D+(b<<20&4294967295|b>>>12),b=S+(D^V&(R^D))+M[13]+2850285829&4294967295,S=R+(b<<5&4294967295|b>>>27),b=V+(R^D&(S^R))+M[2]+4243563512&4294967295,V=S+(b<<9&4294967295|b>>>23),b=D+(S^R&(V^S))+M[7]+1735328473&4294967295,D=V+(b<<14&4294967295|b>>>18),b=R+(V^S&(D^V))+M[12]+2368359562&4294967295,R=D+(b<<20&4294967295|b>>>12),b=S+(R^D^V)+M[5]+4294588738&4294967295,S=R+(b<<4&4294967295|b>>>28),b=V+(S^R^D)+M[8]+2272392833&4294967295,V=S+(b<<11&4294967295|b>>>21),b=D+(V^S^R)+M[11]+1839030562&4294967295,D=V+(b<<16&4294967295|b>>>16),b=R+(D^V^S)+M[14]+4259657740&4294967295,R=D+(b<<23&4294967295|b>>>9),b=S+(R^D^V)+M[1]+2763975236&4294967295,S=R+(b<<4&4294967295|b>>>28),b=V+(S^R^D)+M[4]+1272893353&4294967295,V=S+(b<<11&4294967295|b>>>21),b=D+(V^S^R)+M[7]+4139469664&4294967295,D=V+(b<<16&4294967295|b>>>16),b=R+(D^V^S)+M[10]+3200236656&4294967295,R=D+(b<<23&4294967295|b>>>9),b=S+(R^D^V)+M[13]+681279174&4294967295,S=R+(b<<4&4294967295|b>>>28),b=V+(S^R^D)+M[0]+3936430074&4294967295,V=S+(b<<11&4294967295|b>>>21),b=D+(V^S^R)+M[3]+3572445317&4294967295,D=V+(b<<16&4294967295|b>>>16),b=R+(D^V^S)+M[6]+76029189&4294967295,R=D+(b<<23&4294967295|b>>>9),b=S+(R^D^V)+M[9]+3654602809&4294967295,S=R+(b<<4&4294967295|b>>>28),b=V+(S^R^D)+M[12]+3873151461&4294967295,V=S+(b<<11&4294967295|b>>>21),b=D+(V^S^R)+M[15]+530742520&4294967295,D=V+(b<<16&4294967295|b>>>16),b=R+(D^V^S)+M[2]+3299628645&4294967295,R=D+(b<<23&4294967295|b>>>9),b=S+(D^(R|~V))+M[0]+4096336452&4294967295,S=R+(b<<6&4294967295|b>>>26),b=V+(R^(S|~D))+M[7]+1126891415&4294967295,V=S+(b<<10&4294967295|b>>>22),b=D+(S^(V|~R))+M[14]+2878612391&4294967295,D=V+(b<<15&4294967295|b>>>17),b=R+(V^(D|~S))+M[5]+4237533241&4294967295,R=D+(b<<21&4294967295|b>>>11),b=S+(D^(R|~V))+M[12]+1700485571&4294967295,S=R+(b<<6&4294967295|b>>>26),b=V+(R^(S|~D))+M[3]+2399980690&4294967295,V=S+(b<<10&4294967295|b>>>22),b=D+(S^(V|~R))+M[10]+4293915773&4294967295,D=V+(b<<15&4294967295|b>>>17),b=R+(V^(D|~S))+M[1]+2240044497&4294967295,R=D+(b<<21&4294967295|b>>>11),b=S+(D^(R|~V))+M[8]+1873313359&4294967295,S=R+(b<<6&4294967295|b>>>26),b=V+(R^(S|~D))+M[15]+4264355552&4294967295,V=S+(b<<10&4294967295|b>>>22),b=D+(S^(V|~R))+M[6]+2734768916&4294967295,D=V+(b<<15&4294967295|b>>>17),b=R+(V^(D|~S))+M[13]+1309151649&4294967295,R=D+(b<<21&4294967295|b>>>11),b=S+(D^(R|~V))+M[4]+4149444226&4294967295,S=R+(b<<6&4294967295|b>>>26),b=V+(R^(S|~D))+M[11]+3174756917&4294967295,V=S+(b<<10&4294967295|b>>>22),b=D+(S^(V|~R))+M[2]+718787259&4294967295,D=V+(b<<15&4294967295|b>>>17),b=R+(V^(D|~S))+M[9]+3951481745&4294967295,C.g[0]=C.g[0]+S&4294967295,C.g[1]=C.g[1]+(D+(b<<21&4294967295|b>>>11))&4294967295,C.g[2]=C.g[2]+D&4294967295,C.g[3]=C.g[3]+V&4294967295}a.prototype.v=function(C,S){S===void 0&&(S=C.length);const R=S-this.blockSize,M=this.C;let D=this.h,V=0;for(;V<S;){if(D==0)for(;V<=R;)l(this,C,V),V+=this.blockSize;if(typeof C=="string"){for(;V<S;)if(M[D++]=C.charCodeAt(V++),D==this.blockSize){l(this,M),D=0;break}}else for(;V<S;)if(M[D++]=C[V++],D==this.blockSize){l(this,M),D=0;break}}this.h=D,this.o+=S},a.prototype.A=function(){var C=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);C[0]=128;for(var S=1;S<C.length-8;++S)C[S]=0;S=this.o*8;for(var R=C.length-8;R<C.length;++R)C[R]=S&255,S/=256;for(this.v(C),C=Array(16),S=0,R=0;R<4;++R)for(let M=0;M<32;M+=8)C[S++]=this.g[R]>>>M&255;return C};function h(C,S){var R=p;return Object.prototype.hasOwnProperty.call(R,C)?R[C]:R[C]=S(C)}function d(C,S){this.h=S;const R=[];let M=!0;for(let D=C.length-1;D>=0;D--){const V=C[D]|0;M&&V==S||(R[D]=V,M=!1)}this.g=R}var p={};function _(C){return-128<=C&&C<128?h(C,function(S){return new d([S|0],S<0?-1:0)}):new d([C|0],C<0?-1:0)}function v(C){if(isNaN(C)||!isFinite(C))return I;if(C<0)return Z(v(-C));const S=[];let R=1;for(let M=0;C>=R;M++)S[M]=C/R|0,R*=4294967296;return new d(S,0)}function A(C,S){if(C.length==0)throw Error("number format error: empty string");if(S=S||10,S<2||36<S)throw Error("radix out of range: "+S);if(C.charAt(0)=="-")return Z(A(C.substring(1),S));if(C.indexOf("-")>=0)throw Error('number format error: interior "-" character');const R=v(Math.pow(S,8));let M=I;for(let V=0;V<C.length;V+=8){var D=Math.min(8,C.length-V);const b=parseInt(C.substring(V,V+D),S);D<8?(D=v(Math.pow(S,D)),M=M.j(D).add(v(b))):(M=M.j(R),M=M.add(v(b)))}return M}var I=_(0),k=_(1),Q=_(16777216);s=d.prototype,s.m=function(){if(it(this))return-Z(this).m();let C=0,S=1;for(let R=0;R<this.g.length;R++){const M=this.i(R);C+=(M>=0?M:4294967296+M)*S,S*=4294967296}return C},s.toString=function(C){if(C=C||10,C<2||36<C)throw Error("radix out of range: "+C);if($(this))return"0";if(it(this))return"-"+Z(this).toString(C);const S=v(Math.pow(C,6));var R=this;let M="";for(;;){const D=vt(R,S).g;R=Et(R,D.j(S));let V=((R.g.length>0?R.g[0]:R.h)>>>0).toString(C);if(R=D,$(R))return V+M;for(;V.length<6;)V="0"+V;M=V+M}},s.i=function(C){return C<0?0:C<this.g.length?this.g[C]:this.h};function $(C){if(C.h!=0)return!1;for(let S=0;S<C.g.length;S++)if(C.g[S]!=0)return!1;return!0}function it(C){return C.h==-1}s.l=function(C){return C=Et(this,C),it(C)?-1:$(C)?0:1};function Z(C){const S=C.g.length,R=[];for(let M=0;M<S;M++)R[M]=~C.g[M];return new d(R,~C.h).add(k)}s.abs=function(){return it(this)?Z(this):this},s.add=function(C){const S=Math.max(this.g.length,C.g.length),R=[];let M=0;for(let D=0;D<=S;D++){let V=M+(this.i(D)&65535)+(C.i(D)&65535),b=(V>>>16)+(this.i(D)>>>16)+(C.i(D)>>>16);M=b>>>16,V&=65535,b&=65535,R[D]=b<<16|V}return new d(R,R[R.length-1]&-2147483648?-1:0)};function Et(C,S){return C.add(Z(S))}s.j=function(C){if($(this)||$(C))return I;if(it(this))return it(C)?Z(this).j(Z(C)):Z(Z(this).j(C));if(it(C))return Z(this.j(Z(C)));if(this.l(Q)<0&&C.l(Q)<0)return v(this.m()*C.m());const S=this.g.length+C.g.length,R=[];for(var M=0;M<2*S;M++)R[M]=0;for(M=0;M<this.g.length;M++)for(let D=0;D<C.g.length;D++){const V=this.i(M)>>>16,b=this.i(M)&65535,Pt=C.i(D)>>>16,Zt=C.i(D)&65535;R[2*M+2*D]+=b*Zt,_t(R,2*M+2*D),R[2*M+2*D+1]+=V*Zt,_t(R,2*M+2*D+1),R[2*M+2*D+1]+=b*Pt,_t(R,2*M+2*D+1),R[2*M+2*D+2]+=V*Pt,_t(R,2*M+2*D+2)}for(C=0;C<S;C++)R[C]=R[2*C+1]<<16|R[2*C];for(C=S;C<2*S;C++)R[C]=0;return new d(R,0)};function _t(C,S){for(;(C[S]&65535)!=C[S];)C[S+1]+=C[S]>>>16,C[S]&=65535,S++}function ht(C,S){this.g=C,this.h=S}function vt(C,S){if($(S))throw Error("division by zero");if($(C))return new ht(I,I);if(it(C))return S=vt(Z(C),S),new ht(Z(S.g),Z(S.h));if(it(S))return S=vt(C,Z(S)),new ht(Z(S.g),S.h);if(C.g.length>30){if(it(C)||it(S))throw Error("slowDivide_ only works with positive integers.");for(var R=k,M=S;M.l(C)<=0;)R=lt(R),M=lt(M);var D=St(R,1),V=St(M,1);for(M=St(M,2),R=St(R,2);!$(M);){var b=V.add(M);b.l(C)<=0&&(D=D.add(R),V=b),M=St(M,1),R=St(R,1)}return S=Et(C,D.j(S)),new ht(D,S)}for(D=I;C.l(S)>=0;){for(R=Math.max(1,Math.floor(C.m()/S.m())),M=Math.ceil(Math.log(R)/Math.LN2),M=M<=48?1:Math.pow(2,M-48),V=v(R),b=V.j(S);it(b)||b.l(C)>0;)R-=M,V=v(R),b=V.j(S);$(V)&&(V=k),D=D.add(V),C=Et(C,b)}return new ht(D,C)}s.B=function(C){return vt(this,C).h},s.and=function(C){const S=Math.max(this.g.length,C.g.length),R=[];for(let M=0;M<S;M++)R[M]=this.i(M)&C.i(M);return new d(R,this.h&C.h)},s.or=function(C){const S=Math.max(this.g.length,C.g.length),R=[];for(let M=0;M<S;M++)R[M]=this.i(M)|C.i(M);return new d(R,this.h|C.h)},s.xor=function(C){const S=Math.max(this.g.length,C.g.length),R=[];for(let M=0;M<S;M++)R[M]=this.i(M)^C.i(M);return new d(R,this.h^C.h)};function lt(C){const S=C.g.length+1,R=[];for(let M=0;M<S;M++)R[M]=C.i(M)<<1|C.i(M-1)>>>31;return new d(R,C.h)}function St(C,S){const R=S>>5;S%=32;const M=C.g.length-R,D=[];for(let V=0;V<M;V++)D[V]=S>0?C.i(V+R)>>>S|C.i(V+R+1)<<32-S:C.i(V+R);return new d(D,C.h)}a.prototype.digest=a.prototype.A,a.prototype.reset=a.prototype.u,a.prototype.update=a.prototype.v,d.prototype.add=d.prototype.add,d.prototype.multiply=d.prototype.j,d.prototype.modulo=d.prototype.B,d.prototype.compare=d.prototype.l,d.prototype.toNumber=d.prototype.m,d.prototype.toString=d.prototype.toString,d.prototype.getBits=d.prototype.i,d.fromNumber=v,d.fromString=A,Wd=d}).apply(typeof p_<"u"?p_:typeof self<"u"?self:typeof window<"u"?window:{});var tc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var tE,cl,eE,uc,Vd,nE,iE,sE;(function(){var s,t=Object.defineProperty;function i(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof tc=="object"&&tc];for(var m=0;m<u.length;++m){var g=u[m];if(g&&g.Math==Math)return g}throw Error("Cannot find global object")}var a=i(this);function l(u,m){if(m)t:{var g=a;u=u.split(".");for(var T=0;T<u.length-1;T++){var P=u[T];if(!(P in g))break t;g=g[P]}u=u[u.length-1],T=g[u],m=m(T),m!=T&&m!=null&&t(g,u,{configurable:!0,writable:!0,value:m})}}l("Symbol.dispose",function(u){return u||Symbol("Symbol.dispose")}),l("Array.prototype.values",function(u){return u||function(){return this[Symbol.iterator]()}}),l("Object.entries",function(u){return u||function(m){var g=[],T;for(T in m)Object.prototype.hasOwnProperty.call(m,T)&&g.push([T,m[T]]);return g}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},d=this||self;function p(u){var m=typeof u;return m=="object"&&u!=null||m=="function"}function _(u,m,g){return u.call.apply(u.bind,arguments)}function v(u,m,g){return v=_,v.apply(null,arguments)}function A(u,m){var g=Array.prototype.slice.call(arguments,1);return function(){var T=g.slice();return T.push.apply(T,arguments),u.apply(this,T)}}function I(u,m){function g(){}g.prototype=m.prototype,u.Z=m.prototype,u.prototype=new g,u.prototype.constructor=u,u.Ob=function(T,P,j){for(var J=Array(arguments.length-2),yt=2;yt<arguments.length;yt++)J[yt-2]=arguments[yt];return m.prototype[P].apply(T,J)}}var k=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?u=>u&&AsyncContext.Snapshot.wrap(u):u=>u;function Q(u){const m=u.length;if(m>0){const g=Array(m);for(let T=0;T<m;T++)g[T]=u[T];return g}return[]}function $(u,m){for(let T=1;T<arguments.length;T++){const P=arguments[T];var g=typeof P;if(g=g!="object"?g:P?Array.isArray(P)?"array":g:"null",g=="array"||g=="object"&&typeof P.length=="number"){g=u.length||0;const j=P.length||0;u.length=g+j;for(let J=0;J<j;J++)u[g+J]=P[J]}else u.push(P)}}class it{constructor(m,g){this.i=m,this.j=g,this.h=0,this.g=null}get(){let m;return this.h>0?(this.h--,m=this.g,this.g=m.next,m.next=null):m=this.i(),m}}function Z(u){d.setTimeout(()=>{throw u},0)}function Et(){var u=C;let m=null;return u.g&&(m=u.g,u.g=u.g.next,u.g||(u.h=null),m.next=null),m}class _t{constructor(){this.h=this.g=null}add(m,g){const T=ht.get();T.set(m,g),this.h?this.h.next=T:this.g=T,this.h=T}}var ht=new it(()=>new vt,u=>u.reset());class vt{constructor(){this.next=this.g=this.h=null}set(m,g){this.h=m,this.g=g,this.next=null}reset(){this.next=this.g=this.h=null}}let lt,St=!1,C=new _t,S=()=>{const u=Promise.resolve(void 0);lt=()=>{u.then(R)}};function R(){for(var u;u=Et();){try{u.h.call(u.g)}catch(g){Z(g)}var m=ht;m.j(u),m.h<100&&(m.h++,u.next=m.g,m.g=u)}St=!1}function M(){this.u=this.u,this.C=this.C}M.prototype.u=!1,M.prototype.dispose=function(){this.u||(this.u=!0,this.N())},M.prototype[Symbol.dispose]=function(){this.dispose()},M.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function D(u,m){this.type=u,this.g=this.target=m,this.defaultPrevented=!1}D.prototype.h=function(){this.defaultPrevented=!0};var V=(function(){if(!d.addEventListener||!Object.defineProperty)return!1;var u=!1,m=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const g=()=>{};d.addEventListener("test",g,m),d.removeEventListener("test",g,m)}catch{}return u})();function b(u){return/^[\s\xa0]*$/.test(u)}function Pt(u,m){D.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u&&this.init(u,m)}I(Pt,D),Pt.prototype.init=function(u,m){const g=this.type=u.type,T=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;this.target=u.target||u.srcElement,this.g=m,m=u.relatedTarget,m||(g=="mouseover"?m=u.fromElement:g=="mouseout"&&(m=u.toElement)),this.relatedTarget=m,T?(this.clientX=T.clientX!==void 0?T.clientX:T.pageX,this.clientY=T.clientY!==void 0?T.clientY:T.pageY,this.screenX=T.screenX||0,this.screenY=T.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=u.pointerType,this.state=u.state,this.i=u,u.defaultPrevented&&Pt.Z.h.call(this)},Pt.prototype.h=function(){Pt.Z.h.call(this);const u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var Zt="closure_listenable_"+(Math.random()*1e6|0),H=0;function tt(u,m,g,T,P){this.listener=u,this.proxy=null,this.src=m,this.type=g,this.capture=!!T,this.ha=P,this.key=++H,this.da=this.fa=!1}function ut(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function Vt(u,m,g){for(const T in u)m.call(g,u[T],T,u)}function O(u,m){for(const g in u)m.call(void 0,u[g],g,u)}function K(u){const m={};for(const g in u)m[g]=u[g];return m}const et="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function W(u,m){let g,T;for(let P=1;P<arguments.length;P++){T=arguments[P];for(g in T)u[g]=T[g];for(let j=0;j<et.length;j++)g=et[j],Object.prototype.hasOwnProperty.call(T,g)&&(u[g]=T[g])}}function ot(u){this.src=u,this.g={},this.h=0}ot.prototype.add=function(u,m,g,T,P){const j=u.toString();u=this.g[j],u||(u=this.g[j]=[],this.h++);const J=mt(u,m,T,P);return J>-1?(m=u[J],g||(m.fa=!1)):(m=new tt(m,this.src,j,!!T,P),m.fa=g,u.push(m)),m};function Dt(u,m){const g=m.type;if(g in u.g){var T=u.g[g],P=Array.prototype.indexOf.call(T,m,void 0),j;(j=P>=0)&&Array.prototype.splice.call(T,P,1),j&&(ut(m),u.g[g].length==0&&(delete u.g[g],u.h--))}}function mt(u,m,g,T){for(let P=0;P<u.length;++P){const j=u[P];if(!j.da&&j.listener==m&&j.capture==!!g&&j.ha==T)return P}return-1}var De="closure_lm_"+(Math.random()*1e6|0),jt={};function Nn(u,m,g,T,P){if(Array.isArray(m)){for(let j=0;j<m.length;j++)Nn(u,m[j],g,T,P);return null}return g=kl(g),u&&u[Zt]?u.J(m,g,p(T)?!!T.capture:!1,P):to(u,m,g,!1,T,P)}function to(u,m,g,T,P,j){if(!m)throw Error("Invalid event type");const J=p(P)?!!P.capture:!!P;let yt=eo(u);if(yt||(u[De]=yt=new ot(u)),g=yt.add(m,g,T,J,j),g.proxy)return g;if(T=Gr(),g.proxy=T,T.src=u,T.listener=g,u.addEventListener)V||(P=J),P===void 0&&(P=!1),u.addEventListener(m.toString(),T,P);else if(u.attachEvent)u.attachEvent(Yr(m.toString()),T);else if(u.addListener&&u.removeListener)u.addListener(T);else throw Error("addEventListener and attachEvent are unavailable.");return g}function Gr(){function u(g){return m.call(u.src,u.listener,g)}const m=rh;return u}function Fr(u,m,g,T,P){if(Array.isArray(m))for(var j=0;j<m.length;j++)Fr(u,m[j],g,T,P);else T=p(T)?!!T.capture:!!T,g=kl(g),u&&u[Zt]?(u=u.i,j=String(m).toString(),j in u.g&&(m=u.g[j],g=mt(m,g,T,P),g>-1&&(ut(m[g]),Array.prototype.splice.call(m,g,1),m.length==0&&(delete u.g[j],u.h--)))):u&&(u=eo(u))&&(m=u.g[m.toString()],u=-1,m&&(u=mt(m,g,T,P)),(g=u>-1?m[u]:null)&&qs(g))}function qs(u){if(typeof u!="number"&&u&&!u.da){var m=u.src;if(m&&m[Zt])Dt(m.i,u);else{var g=u.type,T=u.proxy;m.removeEventListener?m.removeEventListener(g,T,u.capture):m.detachEvent?m.detachEvent(Yr(g),T):m.addListener&&m.removeListener&&m.removeListener(T),(g=eo(m))?(Dt(g,u),g.h==0&&(g.src=null,m[De]=null)):ut(u)}}}function Yr(u){return u in jt?jt[u]:jt[u]="on"+u}function rh(u,m){if(u.da)u=!0;else{m=new Pt(m,this);const g=u.listener,T=u.ha||u.src;u.fa&&qs(u),u=g.call(T,m)}return u}function eo(u){return u=u[De],u instanceof ot?u:null}var Je="__closure_events_fn_"+(Math.random()*1e9>>>0);function kl(u){return typeof u=="function"?u:(u[Je]||(u[Je]=function(m){return u.handleEvent(m)}),u[Je])}function _e(){M.call(this),this.i=new ot(this),this.M=this,this.G=null}I(_e,M),_e.prototype[Zt]=!0,_e.prototype.removeEventListener=function(u,m,g,T){Fr(this,u,m,g,T)};function Ae(u,m){var g,T=u.G;if(T)for(g=[];T;T=T.G)g.push(T);if(u=u.M,T=m.type||m,typeof m=="string")m=new D(m,u);else if(m instanceof D)m.target=m.target||u;else{var P=m;m=new D(T,u),W(m,P)}P=!0;let j,J;if(g)for(J=g.length-1;J>=0;J--)j=m.g=g[J],P=yi(j,T,!0,m)&&P;if(j=m.g=u,P=yi(j,T,!0,m)&&P,P=yi(j,T,!1,m)&&P,g)for(J=0;J<g.length;J++)j=m.g=g[J],P=yi(j,T,!1,m)&&P}_e.prototype.N=function(){if(_e.Z.N.call(this),this.i){var u=this.i;for(const m in u.g){const g=u.g[m];for(let T=0;T<g.length;T++)ut(g[T]);delete u.g[m],u.h--}}this.G=null},_e.prototype.J=function(u,m,g,T){return this.i.add(String(u),m,!1,g,T)},_e.prototype.K=function(u,m,g,T){return this.i.add(String(u),m,!0,g,T)};function yi(u,m,g,T){if(m=u.i.g[String(m)],!m)return!0;m=m.concat();let P=!0;for(let j=0;j<m.length;++j){const J=m[j];if(J&&!J.da&&J.capture==g){const yt=J.listener,$t=J.ha||J.src;J.fa&&Dt(u.i,J),P=yt.call($t,T)!==!1&&P}}return P&&!T.defaultPrevented}function ah(u,m){if(typeof u!="function")if(u&&typeof u.handleEvent=="function")u=v(u.handleEvent,u);else throw Error("Invalid listener argument");return Number(m)>2147483647?-1:d.setTimeout(u,m||0)}function no(u){u.g=ah(()=>{u.g=null,u.i&&(u.i=!1,no(u))},u.l);const m=u.h;u.h=null,u.m.apply(null,m)}class oh extends M{constructor(m,g){super(),this.m=m,this.l=g,this.h=null,this.i=!1,this.g=null}j(m){this.h=arguments,this.g?this.i=!0:no(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Gs(u){M.call(this),this.h=u,this.g={}}I(Gs,M);var Yi=[];function Le(u){Vt(u.g,function(m,g){this.g.hasOwnProperty(g)&&qs(m)},u),u.g={}}Gs.prototype.N=function(){Gs.Z.N.call(this),Le(this)},Gs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var yn=d.JSON.stringify,Ke=d.JSON.parse,lh=class{stringify(u){return d.JSON.stringify(u,void 0)}parse(u){return d.JSON.parse(u,void 0)}};function Ul(){}function Pl(){}var $n={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Ki(){D.call(this,"d")}I(Ki,D);function Mn(){D.call(this,"c")}I(Mn,D);var _n={},Qi=null;function Kr(){return Qi=Qi||new _e}_n.Ia="serverreachability";function io(u){D.call(this,_n.Ia,u)}I(io,D);function Xi(u){const m=Kr();Ae(m,new io(m))}_n.STAT_EVENT="statevent";function Qr(u,m){D.call(this,_n.STAT_EVENT,u),this.stat=m}I(Qr,D);function le(u){const m=Kr();Ae(m,new Qr(m,u))}_n.Ja="timingevent";function Ll(u,m){D.call(this,_n.Ja,u),this.size=m}I(Ll,D);function $i(u,m){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return d.setTimeout(function(){u()},m)}function Zi(){this.g=!0}Zi.prototype.ua=function(){this.g=!1};function so(u,m,g,T,P,j){u.info(function(){if(u.g)if(j){var J="",yt=j.split("&");for(let Lt=0;Lt<yt.length;Lt++){var $t=yt[Lt].split("=");if($t.length>1){const he=$t[0];$t=$t[1];const ln=he.split("_");J=ln.length>=2&&ln[1]=="type"?J+(he+"="+$t+"&"):J+(he+"=redacted&")}}}else J=null;else J=j;return"XMLHTTP REQ ("+T+") [attempt "+P+"]: "+m+`
`+g+`
`+J})}function ro(u,m,g,T,P,j,J){u.info(function(){return"XMLHTTP RESP ("+T+") [ attempt "+P+"]: "+m+`
`+g+`
`+j+" "+J})}function _i(u,m,g,T){u.info(function(){return"XMLHTTP TEXT ("+m+"): "+Zn(u,g)+(T?" "+T:"")})}function uh(u,m){u.info(function(){return"TIMEOUT: "+m})}Zi.prototype.info=function(){};function Zn(u,m){if(!u.g)return m;if(!m)return null;try{const j=JSON.parse(m);if(j){for(u=0;u<j.length;u++)if(Array.isArray(j[u])){var g=j[u];if(!(g.length<2)){var T=g[1];if(Array.isArray(T)&&!(T.length<1)){var P=T[0];if(P!="noop"&&P!="stop"&&P!="close")for(let J=1;J<T.length;J++)T[J]=""}}}}return yn(j)}catch{return m}}var ue={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Oe={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},vi;function Fs(){}I(Fs,Ul),Fs.prototype.g=function(){return new XMLHttpRequest},vi=new Fs;function Ys(u){return encodeURIComponent(String(u))}function ch(u){var m=1;u=u.split(":");const g=[];for(;m>0&&u.length;)g.push(u.shift()),m--;return u.length&&g.push(u.join(":")),g}function Vn(u,m,g,T){this.j=u,this.i=m,this.l=g,this.S=T||1,this.V=new Gs(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Ji}function Ji(){this.i=null,this.g="",this.h=!1}var Xr={},Jn={};function Wn(u,m,g){u.M=1,u.A=Ti(ne(m)),u.u=g,u.R=!0,Wi(u,null)}function Wi(u,m){u.F=Date.now(),Ks(u),u.B=ne(u.A);var g=u.B,T=u.S;Array.isArray(T)||(T=[String(T)]),Hl(g.i,"t",T),u.C=0,g=u.j.L,u.h=new Ji,u.g=ra(u.j,g?m:null,!u.u),u.P>0&&(u.O=new oh(v(u.Y,u,u.g),u.P)),m=u.V,g=u.g,T=u.ba;var P="readystatechange";Array.isArray(P)||(P&&(Yi[0]=P.toString()),P=Yi);for(let j=0;j<P.length;j++){const J=Nn(g,P[j],T||m.handleEvent,!1,m.h||m);if(!J)break;m.g[J.key]=J}m=u.J?K(u.J):{},u.u?(u.v||(u.v="POST"),m["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.B,u.v,u.u,m)):(u.v="GET",u.g.ea(u.B,u.v,null,m)),Xi(),so(u.i,u.v,u.B,u.l,u.S,u.u)}Vn.prototype.ba=function(u){u=u.target;const m=this.O;m&&ze(u)==3?m.j():this.Y(u)},Vn.prototype.Y=function(u){try{if(u==this.g)t:{const yt=ze(this.g),$t=this.g.ya(),Lt=this.g.ca();if(!(yt<3)&&(yt!=3||this.g&&(this.h.h||this.g.la()||sr(this.g)))){this.K||yt!=4||$t==7||($t==8||Lt<=0?Xi(3):Xi(2)),ei(this);var m=this.g.ca();this.X=m;var g=ts(this);if(this.o=m==200,ro(this.i,this.v,this.B,this.l,this.S,yt,m),this.o){if(this.U&&!this.L){e:{if(this.g){var T,P=this.g;if((T=P.g?P.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!b(T)){var j=T;break e}}j=null}if(u=j)_i(this.i,this.l,u,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,$r(this,u);else{this.o=!1,this.m=3,le(12),ni(this),Qs(this);break t}}if(this.R){u=!0;let he;for(;!this.K&&this.C<g.length;)if(he=zl(this,g),he==Jn){yt==4&&(this.m=4,le(14),u=!1),_i(this.i,this.l,null,"[Incomplete Response]");break}else if(he==Xr){this.m=4,le(15),_i(this.i,this.l,g,"[Invalid Chunk]"),u=!1;break}else _i(this.i,this.l,he,null),$r(this,he);if(ce(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),yt!=4||g.length!=0||this.h.h||(this.m=1,le(16),u=!1),this.o=this.o&&u,!u)_i(this.i,this.l,g,"[Invalid Chunked Response]"),ni(this),Qs(this);else if(g.length>0&&!this.W){this.W=!0;var J=this.j;J.g==this&&J.aa&&!J.P&&(J.j.info("Great, no buffering proxy detected. Bytes received: "+g.length),po(J),J.P=!0,le(11))}}else _i(this.i,this.l,g,null),$r(this,g);yt==4&&ni(this),this.o&&!this.K&&(yt==4?yo(this.j,this):(this.o=!1,Ks(this)))}else rr(this.g),m==400&&g.indexOf("Unknown SID")>0?(this.m=3,le(12)):(this.m=0,le(13)),ni(this),Qs(this)}}}catch{}finally{}};function ts(u){if(!ce(u))return u.g.la();const m=sr(u.g);if(m==="")return"";let g="";const T=m.length,P=ze(u.g)==4;if(!u.h.i){if(typeof TextDecoder>"u")return ni(u),Qs(u),"";u.h.i=new d.TextDecoder}for(let j=0;j<T;j++)u.h.h=!0,g+=u.h.i.decode(m[j],{stream:!(P&&j==T-1)});return m.length=0,u.h.g+=g,u.C=0,u.h.g}function ce(u){return u.g?u.v=="GET"&&u.M!=2&&u.j.Aa:!1}function zl(u,m){var g=u.C,T=m.indexOf(`
`,g);return T==-1?Jn:(g=Number(m.substring(g,T)),isNaN(g)?Xr:(T+=1,T+g>m.length?Jn:(m=m.slice(T,T+g),u.C=T+g,m)))}Vn.prototype.cancel=function(){this.K=!0,ni(this)};function Ks(u){u.T=Date.now()+u.H,ti(u,u.H)}function ti(u,m){if(u.D!=null)throw Error("WatchDog timer not null");u.D=$i(v(u.aa,u),m)}function ei(u){u.D&&(d.clearTimeout(u.D),u.D=null)}Vn.prototype.aa=function(){this.D=null;const u=Date.now();u-this.T>=0?(uh(this.i,this.B),this.M!=2&&(Xi(),le(17)),ni(this),this.m=2,Qs(this)):ti(this,this.T-u)};function Qs(u){u.j.I==0||u.K||yo(u.j,u)}function ni(u){ei(u);var m=u.O;m&&typeof m.dispose=="function"&&m.dispose(),u.O=null,Le(u.V),u.g&&(m=u.g,u.g=null,m.abort(),m.dispose())}function $r(u,m){try{var g=u.j;if(g.I!=0&&(g.g==u||Zs(g.h,u))){if(!u.L&&Zs(g.h,u)&&g.I==3){try{var T=g.Ba.g.parse(m)}catch{T=null}if(Array.isArray(T)&&T.length==3){var P=T;if(P[0]==0){t:if(!g.v){if(g.g)if(g.g.F+3e3<u.F)sa(g),ii(g);else break t;go(g),le(18)}}else g.xa=P[1],0<g.xa-g.K&&P[2]<37500&&g.F&&g.A==0&&!g.C&&(g.C=$i(v(g.Va,g),6e3));vn(g.h)<=1&&g.ta&&(g.ta=void 0)}else bi(g,11)}else if((u.L||g.g==u)&&sa(g),!b(m))for(P=g.Ba.g.parse(m),m=0;m<P.length;m++){let Lt=P[m];const he=Lt[0];if(!(he<=g.K))if(g.K=he,Lt=Lt[1],g.I==2)if(Lt[0]=="c"){g.M=Lt[1],g.ba=Lt[2];const ln=Lt[3];ln!=null&&(g.ka=ln,g.j.info("VER="+g.ka));const si=Lt[4];si!=null&&(g.za=si,g.j.info("SVER="+g.za));const Un=Lt[5];Un!=null&&typeof Un=="number"&&Un>0&&(T=1.5*Un,g.O=T,g.j.info("backChannelRequestTimeoutMs_="+T)),T=g;const Pn=u.g;if(Pn){const Ln=Pn.g?Pn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ln){var j=T.h;j.g||Ln.indexOf("spdy")==-1&&Ln.indexOf("quic")==-1&&Ln.indexOf("h2")==-1||(j.j=j.l,j.g=new Set,j.h&&(Zr(j,j.h),j.h=null))}if(T.G){const vo=Pn.g?Pn.g.getResponseHeader("X-HTTP-Session-Id"):null;vo&&(T.wa=vo,Ht(T.J,T.G,vo))}}g.I=3,g.l&&g.l.ra(),g.aa&&(g.T=Date.now()-u.F,g.j.info("Handshake RTT: "+g.T+"ms")),T=g;var J=u;if(T.na=Zl(T,T.L?T.ba:null,T.W),J.L){Ei(T.h,J);var yt=J,$t=T.O;$t&&(yt.H=$t),yt.D&&(ei(yt),Ks(yt)),T.g=J}else Kl(T);g.i.length>0&&ur(g)}else Lt[0]!="stop"&&Lt[0]!="close"||bi(g,7);else g.I==3&&(Lt[0]=="stop"||Lt[0]=="close"?Lt[0]=="stop"?bi(g,7):or(g):Lt[0]!="noop"&&g.l&&g.l.qa(Lt),g.A=0)}}Xi(4)}catch{}}var hh=class{constructor(u,m){this.g=u,this.map=m}};function Xs(u){this.l=u||10,d.PerformanceNavigationTiming?(u=d.performance.getEntriesByType("navigation"),u=u.length>0&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(d.chrome&&d.chrome.loadTimes&&d.chrome.loadTimes()&&d.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function $s(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function vn(u){return u.h?1:u.g?u.g.size:0}function Zs(u,m){return u.h?u.h==m:u.g?u.g.has(m):!1}function Zr(u,m){u.g?u.g.add(m):u.h=m}function Ei(u,m){u.h&&u.h==m?u.h=null:u.g&&u.g.has(m)&&u.g.delete(m)}Xs.prototype.cancel=function(){if(this.i=Jr(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function Jr(u){if(u.h!=null)return u.i.concat(u.h.G);if(u.g!=null&&u.g.size!==0){let m=u.i;for(const g of u.g.values())m=m.concat(g.G);return m}return Q(u.i)}var Wr=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function fh(u,m){if(u){u=u.split("&");for(let g=0;g<u.length;g++){const T=u[g].indexOf("=");let P,j=null;T>=0?(P=u[g].substring(0,T),j=u[g].substring(T+1)):P=u[g],m(P,j?decodeURIComponent(j.replace(/\+/g," ")):"")}}}function xn(u){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let m;u instanceof xn?(this.l=u.l,es(this,u.j),this.o=u.o,this.g=u.g,Js(this,u.u),this.h=u.h,ns(this,ql(u.i)),this.m=u.m):u&&(m=String(u).match(Wr))?(this.l=!1,es(this,m[1]||"",!0),this.o=Ws(m[2]||""),this.g=Ws(m[3]||"",!0),Js(this,m[4]),this.h=Ws(m[5]||"",!0),ns(this,m[6]||"",!0),this.m=Ws(m[7]||"")):(this.l=!1,this.i=new En(null,this.l))}xn.prototype.toString=function(){const u=[];var m=this.j;m&&u.push(Se(m,oo,!0),":");var g=this.g;return(g||m=="file")&&(u.push("//"),(m=this.o)&&u.push(Se(m,oo,!0),"@"),u.push(Ys(g).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),g=this.u,g!=null&&u.push(":",String(g))),(g=this.h)&&(this.g&&g.charAt(0)!="/"&&u.push("/"),u.push(Se(g,g.charAt(0)=="/"?is:lo,!0))),(g=this.i.toString())&&u.push("?",g),(g=this.m)&&u.push("#",Se(g,jl)),u.join("")},xn.prototype.resolve=function(u){const m=ne(this);let g=!!u.j;g?es(m,u.j):g=!!u.o,g?m.o=u.o:g=!!u.g,g?m.g=u.g:g=u.u!=null;var T=u.h;if(g)Js(m,u.u);else if(g=!!u.h){if(T.charAt(0)!="/")if(this.g&&!this.h)T="/"+T;else{var P=m.h.lastIndexOf("/");P!=-1&&(T=m.h.slice(0,P+1)+T)}if(P=T,P==".."||P==".")T="";else if(P.indexOf("./")!=-1||P.indexOf("/.")!=-1){T=P.lastIndexOf("/",0)==0,P=P.split("/");const j=[];for(let J=0;J<P.length;){const yt=P[J++];yt=="."?T&&J==P.length&&j.push(""):yt==".."?((j.length>1||j.length==1&&j[0]!="")&&j.pop(),T&&J==P.length&&j.push("")):(j.push(yt),T=!0)}T=j.join("/")}else T=P}return g?m.h=T:g=u.i.toString()!=="",g?ns(m,ql(u.i)):g=!!u.m,g&&(m.m=u.m),m};function ne(u){return new xn(u)}function es(u,m,g){u.j=g?Ws(m,!0):m,u.j&&(u.j=u.j.replace(/:$/,""))}function Js(u,m){if(m){if(m=Number(m),isNaN(m)||m<0)throw Error("Bad port number "+m);u.u=m}else u.u=null}function ns(u,m,g){m instanceof En?(u.i=m,ho(u.i,u.l)):(g||(m=Se(m,Bl)),u.i=new En(m,u.l))}function Ht(u,m,g){u.i.set(m,g)}function Ti(u){return Ht(u,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),u}function Ws(u,m){return u?m?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function Se(u,m,g){return typeof u=="string"?(u=encodeURI(u).replace(m,ao),g&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function ao(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var oo=/[#\/\?@]/g,lo=/[#\?:]/g,is=/[#\?]/g,Bl=/[#\?@]/g,jl=/#/g;function En(u,m){this.h=this.g=null,this.i=u||null,this.j=!!m}function Ai(u){u.g||(u.g=new Map,u.h=0,u.i&&fh(u.i,function(m,g){u.add(decodeURIComponent(m.replace(/\+/g," ")),g)}))}s=En.prototype,s.add=function(u,m){Ai(this),this.i=null,u=kn(this,u);let g=this.g.get(u);return g||this.g.set(u,g=[]),g.push(m),this.h+=1,this};function uo(u,m){Ai(u),m=kn(u,m),u.g.has(m)&&(u.i=null,u.h-=u.g.get(m).length,u.g.delete(m))}function co(u,m){return Ai(u),m=kn(u,m),u.g.has(m)}s.forEach=function(u,m){Ai(this),this.g.forEach(function(g,T){g.forEach(function(P){u.call(m,P,T,this)},this)},this)};function ta(u,m){Ai(u);let g=[];if(typeof m=="string")co(u,m)&&(g=g.concat(u.g.get(kn(u,m))));else for(u=Array.from(u.g.values()),m=0;m<u.length;m++)g=g.concat(u[m]);return g}s.set=function(u,m){return Ai(this),this.i=null,u=kn(this,u),co(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[m]),this.h+=1,this},s.get=function(u,m){return u?(u=ta(this,u),u.length>0?String(u[0]):m):m};function Hl(u,m,g){uo(u,m),g.length>0&&(u.i=null,u.g.set(kn(u,m),Q(g)),u.h+=g.length)}s.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],m=Array.from(this.g.keys());for(let T=0;T<m.length;T++){var g=m[T];const P=Ys(g);g=ta(this,g);for(let j=0;j<g.length;j++){let J=P;g[j]!==""&&(J+="="+Ys(g[j])),u.push(J)}}return this.i=u.join("&")};function ql(u){const m=new En;return m.i=u.i,u.g&&(m.g=new Map(u.g),m.h=u.h),m}function kn(u,m){return m=String(m),u.j&&(m=m.toLowerCase()),m}function ho(u,m){m&&!u.j&&(Ai(u),u.i=null,u.g.forEach(function(g,T){const P=T.toLowerCase();T!=P&&(uo(this,T),Hl(this,P,g))},u)),u.j=m}function fo(u,m){const g=new Zi;if(d.Image){const T=new Image;T.onload=A(Qe,g,"TestLoadImage: loaded",!0,m,T),T.onerror=A(Qe,g,"TestLoadImage: error",!1,m,T),T.onabort=A(Qe,g,"TestLoadImage: abort",!1,m,T),T.ontimeout=A(Qe,g,"TestLoadImage: timeout",!1,m,T),d.setTimeout(function(){T.ontimeout&&T.ontimeout()},1e4),T.src=u}else m(!1)}function ss(u,m){const g=new Zi,T=new AbortController,P=setTimeout(()=>{T.abort(),Qe(g,"TestPingServer: timeout",!1,m)},1e4);fetch(u,{signal:T.signal}).then(j=>{clearTimeout(P),j.ok?Qe(g,"TestPingServer: ok",!0,m):Qe(g,"TestPingServer: server error",!1,m)}).catch(()=>{clearTimeout(P),Qe(g,"TestPingServer: error",!1,m)})}function Qe(u,m,g,T,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),T(g)}catch{}}function Gl(){this.g=new lh}function tr(u){this.i=u.Sb||null,this.h=u.ab||!1}I(tr,Ul),tr.prototype.g=function(){return new er(this.i,this.h)};function er(u,m){_e.call(this),this.H=u,this.o=m,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}I(er,_e),s=er.prototype,s.open=function(u,m){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=u,this.D=m,this.readyState=1,Si(this)},s.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const m={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};u&&(m.body=u),(this.H||d).fetch(new Request(this.D,m)).then(this.Pa.bind(this),this.ga.bind(this))},s.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Xe(this)),this.readyState=0},s.Pa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,Si(this)),this.g&&(this.readyState=3,Si(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof d.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;rs(this)}else u.text().then(this.Oa.bind(this),this.ga.bind(this))};function rs(u){u.j.read().then(u.Ma.bind(u)).catch(u.ga.bind(u))}s.Ma=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var m=u.value?u.value:new Uint8Array(0);(m=this.B.decode(m,{stream:!u.done}))&&(this.response=this.responseText+=m)}u.done?Xe(this):Si(this),this.readyState==3&&rs(this)}},s.Oa=function(u){this.g&&(this.response=this.responseText=u,Xe(this))},s.Na=function(u){this.g&&(this.response=u,Xe(this))},s.ga=function(){this.g&&Xe(this)};function Xe(u){u.readyState=4,u.l=null,u.j=null,u.B=null,Si(u)}s.setRequestHeader=function(u,m){this.A.append(u,m)},s.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},s.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],m=this.h.entries();for(var g=m.next();!g.done;)g=g.value,u.push(g[0]+": "+g[1]),g=m.next();return u.join(`\r
`)};function Si(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(er.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function as(u){let m="";return Vt(u,function(g,T){m+=T,m+=":",m+=g,m+=`\r
`}),m}function Tn(u,m,g){t:{for(T in g){var T=!1;break t}T=!0}T||(g=as(g),typeof u=="string"?g!=null&&Ys(g):Ht(u,m,g))}function Kt(u){_e.call(this),this.headers=new Map,this.L=u||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}I(Kt,_e);var ea=/^https?$/i,Fl=["POST","PUT"];s=Kt.prototype,s.Fa=function(u){this.H=u},s.ea=function(u,m,g,T){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);m=m?m.toUpperCase():"GET",this.D=u,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():vi.g(),this.g.onreadystatechange=k(v(this.Ca,this));try{this.B=!0,this.g.open(m,String(u),!0),this.B=!1}catch(j){nr(this,j);return}if(u=g||"",g=new Map(this.headers),T)if(Object.getPrototypeOf(T)===Object.prototype)for(var P in T)g.set(P,T[P]);else if(typeof T.keys=="function"&&typeof T.get=="function")for(const j of T.keys())g.set(j,T.get(j));else throw Error("Unknown input type for opt_headers: "+String(T));T=Array.from(g.keys()).find(j=>j.toLowerCase()=="content-type"),P=d.FormData&&u instanceof d.FormData,!(Array.prototype.indexOf.call(Fl,m,void 0)>=0)||T||P||g.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[j,J]of g)this.g.setRequestHeader(j,J);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(u),this.v=!1}catch(j){nr(this,j)}};function nr(u,m){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=m,u.o=5,ir(u),ve(u)}function ir(u){u.A||(u.A=!0,Ae(u,"complete"),Ae(u,"error"))}s.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=u||7,Ae(this,"complete"),Ae(this,"abort"),ve(this))},s.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ve(this,!0)),Kt.Z.N.call(this)},s.Ca=function(){this.u||(this.B||this.v||this.j?mo(this):this.Xa())},s.Xa=function(){mo(this)};function mo(u){if(u.h&&typeof h<"u"){if(u.v&&ze(u)==4)setTimeout(u.Ca.bind(u),0);else if(Ae(u,"readystatechange"),ze(u)==4){u.h=!1;try{const j=u.ca();t:switch(j){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var m=!0;break t;default:m=!1}var g;if(!(g=m)){var T;if(T=j===0){let J=String(u.D).match(Wr)[1]||null;!J&&d.self&&d.self.location&&(J=d.self.location.protocol.slice(0,-1)),T=!ea.test(J?J.toLowerCase():"")}g=T}if(g)Ae(u,"complete"),Ae(u,"success");else{u.o=6;try{var P=ze(u)>2?u.g.statusText:""}catch{P=""}u.l=P+" ["+u.ca()+"]",ir(u)}}finally{ve(u)}}}}function ve(u,m){if(u.g){u.m&&(clearTimeout(u.m),u.m=null);const g=u.g;u.g=null,m||Ae(u,"ready");try{g.onreadystatechange=null}catch{}}}s.isActive=function(){return!!this.g};function ze(u){return u.g?u.g.readyState:0}s.ca=function(){try{return ze(this)>2?this.g.status:-1}catch{return-1}},s.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},s.La=function(u){if(this.g){var m=this.g.responseText;return u&&m.indexOf(u)==0&&(m=m.substring(u.length)),Ke(m)}};function sr(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.F){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function rr(u){const m={};u=(u.g&&ze(u)>=2&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let T=0;T<u.length;T++){if(b(u[T]))continue;var g=ch(u[T]);const P=g[0];if(g=g[1],typeof g!="string")continue;g=g.trim();const j=m[P]||[];m[P]=j,j.push(g)}O(m,function(T){return T.join(", ")})}s.ya=function(){return this.o},s.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function ar(u,m,g){return g&&g.internalChannelParams&&g.internalChannelParams[u]||m}function na(u){this.za=0,this.i=[],this.j=new Zi,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=ar("failFast",!1,u),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=ar("baseRetryDelayMs",5e3,u),this.Za=ar("retryDelaySeedMs",1e4,u),this.Ta=ar("forwardChannelMaxRetries",2,u),this.va=ar("forwardChannelRequestTimeoutMs",2e4,u),this.ma=u&&u.xmlHttpFactory||void 0,this.Ua=u&&u.Rb||void 0,this.Aa=u&&u.useFetchStreams||!1,this.O=void 0,this.L=u&&u.supportsCrossDomainXhr||!1,this.M="",this.h=new Xs(u&&u.concurrentRequestLimit),this.Ba=new Gl,this.S=u&&u.fastHandshake||!1,this.R=u&&u.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=u&&u.Pb||!1,u&&u.ua&&this.j.ua(),u&&u.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&u&&u.detectBufferingProxy||!1,this.ia=void 0,u&&u.longPollingTimeout&&u.longPollingTimeout>0&&(this.ia=u.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}s=na.prototype,s.ka=8,s.I=1,s.connect=function(u,m,g,T){le(0),this.W=u,this.H=m||{},g&&T!==void 0&&(this.H.OSID=g,this.H.OAID=T),this.F=this.X,this.J=Zl(this,null,this.W),ur(this)};function or(u){if(lr(u),u.I==3){var m=u.V++,g=ne(u.J);if(Ht(g,"SID",u.M),Ht(g,"RID",m),Ht(g,"TYPE","terminate"),cr(u,g),m=new Vn(u,u.j,m),m.M=2,m.A=Ti(ne(g)),g=!1,d.navigator&&d.navigator.sendBeacon)try{g=d.navigator.sendBeacon(m.A.toString(),"")}catch{}!g&&d.Image&&(new Image().src=m.A,g=!0),g||(m.g=ra(m.j,null),m.g.ea(m.A)),m.F=Date.now(),Ks(m)}$l(u)}function ii(u){u.g&&(po(u),u.g.cancel(),u.g=null)}function lr(u){ii(u),u.v&&(d.clearTimeout(u.v),u.v=null),sa(u),u.h.cancel(),u.m&&(typeof u.m=="number"&&d.clearTimeout(u.m),u.m=null)}function ur(u){if(!$s(u.h)&&!u.m){u.m=!0;var m=u.Ea;lt||S(),St||(lt(),St=!0),C.add(m,u),u.D=0}}function dh(u,m){return vn(u.h)>=u.h.j-(u.m?1:0)?!1:u.m?(u.i=m.G.concat(u.i),!0):u.I==1||u.I==2||u.D>=(u.Sa?0:u.Ta)?!1:(u.m=$i(v(u.Ea,u,m),Xl(u,u.D)),u.D++,!0)}s.Ea=function(u){if(this.m)if(this.m=null,this.I==1){if(!u){this.V=Math.floor(Math.random()*1e5),u=this.V++;const P=new Vn(this,this.j,u);let j=this.o;if(this.U&&(j?(j=K(j),W(j,this.U)):j=this.U),this.u!==null||this.R||(P.J=j,j=null),this.S)t:{for(var m=0,g=0;g<this.i.length;g++){e:{var T=this.i[g];if("__data__"in T.map&&(T=T.map.__data__,typeof T=="string")){T=T.length;break e}T=void 0}if(T===void 0)break;if(m+=T,m>4096){m=g;break t}if(m===4096||g===this.i.length-1){m=g+1;break t}}m=1e3}else m=1e3;m=ia(this,P,m),g=ne(this.J),Ht(g,"RID",u),Ht(g,"CVER",22),this.G&&Ht(g,"X-HTTP-Session-Id",this.G),cr(this,g),j&&(this.R?m="headers="+Ys(as(j))+"&"+m:this.u&&Tn(g,this.u,j)),Zr(this.h,P),this.Ra&&Ht(g,"TYPE","init"),this.S?(Ht(g,"$req",m),Ht(g,"SID","null"),P.U=!0,Wn(P,g,null)):Wn(P,g,m),this.I=2}}else this.I==3&&(u?Yl(this,u):this.i.length==0||$s(this.h)||Yl(this))};function Yl(u,m){var g;m?g=m.l:g=u.V++;const T=ne(u.J);Ht(T,"SID",u.M),Ht(T,"RID",g),Ht(T,"AID",u.K),cr(u,T),u.u&&u.o&&Tn(T,u.u,u.o),g=new Vn(u,u.j,g,u.D+1),u.u===null&&(g.J=u.o),m&&(u.i=m.G.concat(u.i)),m=ia(u,g,1e3),g.H=Math.round(u.va*.5)+Math.round(u.va*.5*Math.random()),Zr(u.h,g),Wn(g,T,m)}function cr(u,m){u.H&&Vt(u.H,function(g,T){Ht(m,T,g)}),u.l&&Vt({},function(g,T){Ht(m,T,g)})}function ia(u,m,g){g=Math.min(u.i.length,g);const T=u.l?v(u.l.Ka,u.l,u):null;t:{var P=u.i;let yt=-1;for(;;){const $t=["count="+g];yt==-1?g>0?(yt=P[0].g,$t.push("ofs="+yt)):yt=0:$t.push("ofs="+yt);let Lt=!0;for(let he=0;he<g;he++){var j=P[he].g;const ln=P[he].map;if(j-=yt,j<0)yt=Math.max(0,P[he].g-100),Lt=!1;else try{j="req"+j+"_"||"";try{var J=ln instanceof Map?ln:Object.entries(ln);for(const[si,Un]of J){let Pn=Un;p(Un)&&(Pn=yn(Un)),$t.push(j+si+"="+encodeURIComponent(Pn))}}catch(si){throw $t.push(j+"type="+encodeURIComponent("_badmap")),si}}catch{T&&T(ln)}}if(Lt){J=$t.join("&");break t}}J=void 0}return u=u.i.splice(0,g),m.G=u,J}function Kl(u){if(!u.g&&!u.v){u.Y=1;var m=u.Da;lt||S(),St||(lt(),St=!0),C.add(m,u),u.A=0}}function go(u){return u.g||u.v||u.A>=3?!1:(u.Y++,u.v=$i(v(u.Da,u),Xl(u,u.A)),u.A++,!0)}s.Da=function(){if(this.v=null,Ql(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var u=4*this.T;this.j.info("BP detection timer enabled: "+u),this.B=$i(v(this.Wa,this),u)}},s.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,le(10),ii(this),Ql(this))};function po(u){u.B!=null&&(d.clearTimeout(u.B),u.B=null)}function Ql(u){u.g=new Vn(u,u.j,"rpc",u.Y),u.u===null&&(u.g.J=u.o),u.g.P=0;var m=ne(u.na);Ht(m,"RID","rpc"),Ht(m,"SID",u.M),Ht(m,"AID",u.K),Ht(m,"CI",u.F?"0":"1"),!u.F&&u.ia&&Ht(m,"TO",u.ia),Ht(m,"TYPE","xmlhttp"),cr(u,m),u.u&&u.o&&Tn(m,u.u,u.o),u.O&&(u.g.H=u.O);var g=u.g;u=u.ba,g.M=1,g.A=Ti(ne(m)),g.u=null,g.R=!0,Wi(g,u)}s.Va=function(){this.C!=null&&(this.C=null,ii(this),go(this),le(19))};function sa(u){u.C!=null&&(d.clearTimeout(u.C),u.C=null)}function yo(u,m){var g=null;if(u.g==m){sa(u),po(u),u.g=null;var T=2}else if(Zs(u.h,m))g=m.G,Ei(u.h,m),T=1;else return;if(u.I!=0){if(m.o)if(T==1){g=m.u?m.u.length:0,m=Date.now()-m.F;var P=u.D;T=Kr(),Ae(T,new Ll(T,g)),ur(u)}else Kl(u);else if(P=m.m,P==3||P==0&&m.X>0||!(T==1&&dh(u,m)||T==2&&go(u)))switch(g&&g.length>0&&(m=u.h,m.i=m.i.concat(g)),P){case 1:bi(u,5);break;case 4:bi(u,10);break;case 3:bi(u,6);break;default:bi(u,2)}}}function Xl(u,m){let g=u.Qa+Math.floor(Math.random()*u.Za);return u.isActive()||(g*=2),g*m}function bi(u,m){if(u.j.info("Error code "+m),m==2){var g=v(u.bb,u),T=u.Ua;const P=!T;T=new xn(T||"//www.google.com/images/cleardot.gif"),d.location&&d.location.protocol=="http"||es(T,"https"),Ti(T),P?fo(T.toString(),g):ss(T.toString(),g)}else le(2);u.I=0,u.l&&u.l.pa(m),$l(u),lr(u)}s.bb=function(u){u?(this.j.info("Successfully pinged google.com"),le(2)):(this.j.info("Failed to ping google.com"),le(1))};function $l(u){if(u.I=0,u.ja=[],u.l){const m=Jr(u.h);(m.length!=0||u.i.length!=0)&&($(u.ja,m),$(u.ja,u.i),u.h.i.length=0,Q(u.i),u.i.length=0),u.l.oa()}}function Zl(u,m,g){var T=g instanceof xn?ne(g):new xn(g);if(T.g!="")m&&(T.g=m+"."+T.g),Js(T,T.u);else{var P=d.location;T=P.protocol,m=m?m+"."+P.hostname:P.hostname,P=+P.port;const j=new xn(null);T&&es(j,T),m&&(j.g=m),P&&Js(j,P),g&&(j.h=g),T=j}return g=u.G,m=u.wa,g&&m&&Ht(T,g,m),Ht(T,"VER",u.ka),cr(u,T),T}function ra(u,m,g){if(m&&!u.L)throw Error("Can't create secondary domain capable XhrIo object.");return m=u.Aa&&!u.ma?new Kt(new tr({ab:g})):new Kt(u.ma),m.Fa(u.L),m}s.isActive=function(){return!!this.l&&this.l.isActive(this)};function Jl(){}s=Jl.prototype,s.ra=function(){},s.qa=function(){},s.pa=function(){},s.oa=function(){},s.isActive=function(){return!0},s.Ka=function(){};function aa(){}aa.prototype.g=function(u,m){return new $e(u,m)};function $e(u,m){_e.call(this),this.g=new na(m),this.l=u,this.h=m&&m.messageUrlParams||null,u=m&&m.messageHeaders||null,m&&m.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=m&&m.initMessageHeaders||null,m&&m.messageContentType&&(u?u["X-WebChannel-Content-Type"]=m.messageContentType:u={"X-WebChannel-Content-Type":m.messageContentType}),m&&m.sa&&(u?u["X-WebChannel-Client-Profile"]=m.sa:u={"X-WebChannel-Client-Profile":m.sa}),this.g.U=u,(u=m&&m.Qb)&&!b(u)&&(this.g.u=u),this.A=m&&m.supportsCrossDomainXhr||!1,this.v=m&&m.sendRawJson||!1,(m=m&&m.httpSessionIdParam)&&!b(m)&&(this.g.G=m,u=this.h,u!==null&&m in u&&(u=this.h,m in u&&delete u[m])),this.j=new os(this)}I($e,_e),$e.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},$e.prototype.close=function(){or(this.g)},$e.prototype.o=function(u){var m=this.g;if(typeof u=="string"){var g={};g.__data__=u,u=g}else this.v&&(g={},g.__data__=yn(u),u=g);m.i.push(new hh(m.Ya++,u)),m.I==3&&ur(m)},$e.prototype.N=function(){this.g.l=null,delete this.j,or(this.g),delete this.g,$e.Z.N.call(this)};function _o(u){Ki.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var m=u.__sm__;if(m){t:{for(const g in m){u=g;break t}u=void 0}(this.i=u)&&(u=this.i,m=m!==null&&u in m?m[u]:void 0),this.data=m}else this.data=u}I(_o,Ki);function Wl(){Mn.call(this),this.status=1}I(Wl,Mn);function os(u){this.g=u}I(os,Jl),os.prototype.ra=function(){Ae(this.g,"a")},os.prototype.qa=function(u){Ae(this.g,new _o(u))},os.prototype.pa=function(u){Ae(this.g,new Wl)},os.prototype.oa=function(){Ae(this.g,"b")},aa.prototype.createWebChannel=aa.prototype.g,$e.prototype.send=$e.prototype.o,$e.prototype.open=$e.prototype.m,$e.prototype.close=$e.prototype.close,sE=function(){return new aa},iE=function(){return Kr()},nE=_n,Vd={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},ue.NO_ERROR=0,ue.TIMEOUT=8,ue.HTTP_ERROR=6,uc=ue,Oe.COMPLETE="complete",eE=Oe,Pl.EventType=$n,$n.OPEN="a",$n.CLOSE="b",$n.ERROR="c",$n.MESSAGE="d",_e.prototype.listen=_e.prototype.J,cl=Pl,Kt.prototype.listenOnce=Kt.prototype.K,Kt.prototype.getLastError=Kt.prototype.Ha,Kt.prototype.getLastErrorCode=Kt.prototype.ya,Kt.prototype.getStatus=Kt.prototype.ca,Kt.prototype.getResponseJson=Kt.prototype.La,Kt.prototype.getResponseText=Kt.prototype.la,Kt.prototype.send=Kt.prototype.ea,Kt.prototype.setWithCredentials=Kt.prototype.Fa,tE=Kt}).apply(typeof tc<"u"?tc:typeof self<"u"?self:typeof window<"u"?window:{});const y_="@firebase/firestore",__="4.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}qe.UNAUTHENTICATED=new qe(null),qe.GOOGLE_CREDENTIALS=new qe("google-credentials-uid"),qe.FIRST_PARTY=new qe("first-party-uid"),qe.MOCK_USER=new qe("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Za="12.3.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mr=new qc("@firebase/firestore");function Pa(){return Mr.logLevel}function rt(s,...t){if(Mr.logLevel<=Ot.DEBUG){const i=t.map(tm);Mr.debug(`Firestore (${Za}): ${s}`,...i)}}function Vr(s,...t){if(Mr.logLevel<=Ot.ERROR){const i=t.map(tm);Mr.error(`Firestore (${Za}): ${s}`,...i)}}function Fc(s,...t){if(Mr.logLevel<=Ot.WARN){const i=t.map(tm);Mr.warn(`Firestore (${Za}): ${s}`,...i)}}function tm(s){if(typeof s=="string")return s;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(i){return JSON.stringify(i)})(s)}catch{return s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wt(s,t,i){let a="Unexpected state";typeof t=="string"?a=t:i=t,rE(s,a,i)}function rE(s,t,i){let a=`FIRESTORE (${Za}) INTERNAL ASSERTION FAILED: ${t} (ID: ${s.toString(16)})`;if(i!==void 0)try{a+=" CONTEXT: "+JSON.stringify(i)}catch{a+=" CONTEXT: "+i}throw Vr(a),new Error(a)}function oe(s,t,i,a){let l="Unexpected state";typeof i=="string"?l=i:a=i,s||rE(t,l,a)}function Xt(s,t){return s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ct extends On{constructor(t,i){super(t,i),this.code=t,this.message=i,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{constructor(){this.promise=new Promise(((t,i)=>{this.resolve=t,this.reject=i}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aE{constructor(t,i){this.user=i,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Ub{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,i){t.enqueueRetryable((()=>i(qe.UNAUTHENTICATED)))}shutdown(){}}class Pb{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,i){this.changeListener=i,t.enqueueRetryable((()=>i(this.token.user)))}shutdown(){this.changeListener=null}}class Lb{constructor(t){this.t=t,this.currentUser=qe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,i){oe(this.o===void 0,42304);let a=this.i;const l=_=>this.i!==a?(a=this.i,i(_)):Promise.resolve();let h=new Dr;this.o=()=>{this.i++,this.currentUser=this.u(),h.resolve(),h=new Dr,t.enqueueRetryable((()=>l(this.currentUser)))};const d=()=>{const _=h;t.enqueueRetryable((async()=>{await _.promise,await l(this.currentUser)}))},p=_=>{rt("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=_,this.o&&(this.auth.addAuthTokenListener(this.o),d())};this.t.onInit((_=>p(_))),setTimeout((()=>{if(!this.auth){const _=this.t.getImmediate({optional:!0});_?p(_):(rt("FirebaseAuthCredentialsProvider","Auth not yet detected"),h.resolve(),h=new Dr)}}),0),d()}getToken(){const t=this.i,i=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(i).then((a=>this.i!==t?(rt("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):a?(oe(typeof a.accessToken=="string",31837,{l:a}),new aE(a.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return oe(t===null||typeof t=="string",2055,{h:t}),new qe(t)}}class zb{constructor(t,i,a){this.P=t,this.T=i,this.I=a,this.type="FirstParty",this.user=qe.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Bb{constructor(t,i,a){this.P=t,this.T=i,this.I=a}getToken(){return Promise.resolve(new zb(this.P,this.T,this.I))}start(t,i){t.enqueueRetryable((()=>i(qe.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class v_{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class jb{constructor(t,i){this.V=i,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,qn(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,i){oe(this.o===void 0,3512);const a=h=>{h.error!=null&&rt("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${h.error.message}`);const d=h.token!==this.m;return this.m=h.token,rt("FirebaseAppCheckTokenProvider",`Received ${d?"new":"existing"} token.`),d?i(h.token):Promise.resolve()};this.o=h=>{t.enqueueRetryable((()=>a(h)))};const l=h=>{rt("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=h,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((h=>l(h))),setTimeout((()=>{if(!this.appCheck){const h=this.V.getImmediate({optional:!0});h?l(h):rt("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new v_(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((i=>i?(oe(typeof i.token=="string",44558,{tokenResult:i}),this.m=i.token,new v_(i.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hb(s){const t=typeof self<"u"&&(self.crypto||self.msCrypto),i=new Uint8Array(s);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(i);else for(let a=0;a<s;a++)i[a]=Math.floor(256*Math.random());return i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class em{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",i=62*Math.floor(4.129032258064516);let a="";for(;a.length<20;){const l=Hb(40);for(let h=0;h<l.length;++h)a.length<20&&l[h]<i&&(a+=t.charAt(l[h]%62))}return a}}function Ut(s,t){return s<t?-1:s>t?1:0}function xd(s,t){const i=Math.min(s.length,t.length);for(let a=0;a<i;a++){const l=s.charAt(a),h=t.charAt(a);if(l!==h)return pd(l)===pd(h)?Ut(l,h):pd(l)?1:-1}return Ut(s.length,t.length)}const qb=55296,Gb=57343;function pd(s){const t=s.charCodeAt(0);return t>=qb&&t<=Gb}function Fa(s,t,i){return s.length===t.length&&s.every(((a,l)=>i(a,t[l])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E_="__name__";class ci{constructor(t,i,a){i===void 0?i=0:i>t.length&&wt(637,{offset:i,range:t.length}),a===void 0?a=t.length-i:a>t.length-i&&wt(1746,{length:a,range:t.length-i}),this.segments=t,this.offset=i,this.len=a}get length(){return this.len}isEqual(t){return ci.comparator(this,t)===0}child(t){const i=this.segments.slice(this.offset,this.limit());return t instanceof ci?t.forEach((a=>{i.push(a)})):i.push(t),this.construct(i)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let i=0;i<this.length;i++)if(this.get(i)!==t.get(i))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let i=0;i<this.length;i++)if(this.get(i)!==t.get(i))return!1;return!0}forEach(t){for(let i=this.offset,a=this.limit();i<a;i++)t(this.segments[i])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,i){const a=Math.min(t.length,i.length);for(let l=0;l<a;l++){const h=ci.compareSegments(t.get(l),i.get(l));if(h!==0)return h}return Ut(t.length,i.length)}static compareSegments(t,i){const a=ci.isNumericId(t),l=ci.isNumericId(i);return a&&!l?-1:!a&&l?1:a&&l?ci.extractNumericId(t).compare(ci.extractNumericId(i)):xd(t,i)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return Wd.fromString(t.substring(4,t.length-2))}}class se extends ci{construct(t,i,a){return new se(t,i,a)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const i=[];for(const a of t){if(a.indexOf("//")>=0)throw new ct(X.INVALID_ARGUMENT,`Invalid segment (${a}). Paths must not contain // in them.`);i.push(...a.split("/").filter((l=>l.length>0)))}return new se(i)}static emptyPath(){return new se([])}}const Fb=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ue extends ci{construct(t,i,a){return new Ue(t,i,a)}static isValidIdentifier(t){return Fb.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ue.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===E_}static keyField(){return new Ue([E_])}static fromServerFormat(t){const i=[];let a="",l=0;const h=()=>{if(a.length===0)throw new ct(X.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);i.push(a),a=""};let d=!1;for(;l<t.length;){const p=t[l];if(p==="\\"){if(l+1===t.length)throw new ct(X.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const _=t[l+1];if(_!=="\\"&&_!=="."&&_!=="`")throw new ct(X.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);a+=_,l+=2}else p==="`"?(d=!d,l++):p!=="."||d?(a+=p,l++):(h(),l++)}if(h(),d)throw new ct(X.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Ue(i)}static emptyPath(){return new Ue([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(t){this.path=t}static fromPath(t){return new At(se.fromString(t))}static fromName(t){return new At(se.fromString(t).popFirst(5))}static empty(){return new At(se.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&se.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,i){return se.comparator(t.path,i.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new At(new se(t.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oE(s,t,i){if(!i)throw new ct(X.INVALID_ARGUMENT,`Function ${s}() cannot be called with an empty ${t}.`)}function Yb(s,t,i,a){if(t===!0&&a===!0)throw new ct(X.INVALID_ARGUMENT,`${s} and ${i} cannot be used together.`)}function T_(s){if(!At.isDocumentKey(s))throw new ct(X.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${s} has ${s.length}.`)}function A_(s){if(At.isDocumentKey(s))throw new ct(X.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${s} has ${s.length}.`)}function lE(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}function nm(s){if(s===void 0)return"undefined";if(s===null)return"null";if(typeof s=="string")return s.length>20&&(s=`${s.substring(0,20)}...`),JSON.stringify(s);if(typeof s=="number"||typeof s=="boolean")return""+s;if(typeof s=="object"){if(s instanceof Array)return"an array";{const t=(function(a){return a.constructor?a.constructor.name:null})(s);return t?`a custom ${t} object`:"an object"}}return typeof s=="function"?"a function":wt(12329,{type:typeof s})}function uE(s,t){if("_delegate"in s&&(s=s._delegate),!(s instanceof t)){if(t.name===s.constructor.name)throw new ct(X.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const i=nm(s);throw new ct(X.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${i}`)}}return s}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ye(s,t){const i={typeString:s};return t&&(i.value=t),i}function Rl(s,t){if(!lE(s))throw new ct(X.INVALID_ARGUMENT,"JSON must be an object");let i;for(const a in t)if(t[a]){const l=t[a].typeString,h="value"in t[a]?{value:t[a].value}:void 0;if(!(a in s)){i=`JSON missing required field: '${a}'`;break}const d=s[a];if(l&&typeof d!==l){i=`JSON field '${a}' must be a ${l}.`;break}if(h!==void 0&&d!==h.value){i=`Expected '${a}' field to equal '${h.value}'`;break}}if(i)throw new ct(X.INVALID_ARGUMENT,i);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S_=-62135596800,b_=1e6;class ee{static now(){return ee.fromMillis(Date.now())}static fromDate(t){return ee.fromMillis(t.getTime())}static fromMillis(t){const i=Math.floor(t/1e3),a=Math.floor((t-1e3*i)*b_);return new ee(i,a)}constructor(t,i){if(this.seconds=t,this.nanoseconds=i,i<0)throw new ct(X.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+i);if(i>=1e9)throw new ct(X.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+i);if(t<S_)throw new ct(X.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new ct(X.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/b_}_compareTo(t){return this.seconds===t.seconds?Ut(this.nanoseconds,t.nanoseconds):Ut(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ee._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(Rl(t,ee._jsonSchema))return new ee(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-S_;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ee._jsonSchemaVersion="firestore/timestamp/1.0",ee._jsonSchema={type:ye("string",ee._jsonSchemaVersion),seconds:ye("number"),nanoseconds:ye("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{static fromTimestamp(t){return new te(t)}static min(){return new te(new ee(0,0))}static max(){return new te(new ee(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const El=-1;function Kb(s,t){const i=s.toTimestamp().seconds,a=s.toTimestamp().nanoseconds+1,l=te.fromTimestamp(a===1e9?new ee(i+1,0):new ee(i,a));return new Ls(l,At.empty(),t)}function Qb(s){return new Ls(s.readTime,s.key,El)}class Ls{constructor(t,i,a){this.readTime=t,this.documentKey=i,this.largestBatchId=a}static min(){return new Ls(te.min(),At.empty(),El)}static max(){return new Ls(te.max(),At.empty(),El)}}function Xb(s,t){let i=s.readTime.compareTo(t.readTime);return i!==0?i:(i=At.comparator(s.documentKey,t.documentKey),i!==0?i:Ut(s.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $b="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Zb{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function im(s){if(s.code!==X.FAILED_PRECONDITION||s.message!==$b)throw s;rt("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((i=>{this.isDone=!0,this.result=i,this.nextCallback&&this.nextCallback(i)}),(i=>{this.isDone=!0,this.error=i,this.catchCallback&&this.catchCallback(i)}))}catch(t){return this.next(void 0,t)}next(t,i){return this.callbackAttached&&wt(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(i,this.error):this.wrapSuccess(t,this.result):new Y(((a,l)=>{this.nextCallback=h=>{this.wrapSuccess(t,h).next(a,l)},this.catchCallback=h=>{this.wrapFailure(i,h).next(a,l)}}))}toPromise(){return new Promise(((t,i)=>{this.next(t,i)}))}wrapUserFunction(t){try{const i=t();return i instanceof Y?i:Y.resolve(i)}catch(i){return Y.reject(i)}}wrapSuccess(t,i){return t?this.wrapUserFunction((()=>t(i))):Y.resolve(i)}wrapFailure(t,i){return t?this.wrapUserFunction((()=>t(i))):Y.reject(i)}static resolve(t){return new Y(((i,a)=>{i(t)}))}static reject(t){return new Y(((i,a)=>{a(t)}))}static waitFor(t){return new Y(((i,a)=>{let l=0,h=0,d=!1;t.forEach((p=>{++l,p.next((()=>{++h,d&&h===l&&i()}),(_=>a(_)))})),d=!0,h===l&&i()}))}static or(t){let i=Y.resolve(!1);for(const a of t)i=i.next((l=>l?Y.resolve(l):a()));return i}static forEach(t,i){const a=[];return t.forEach(((l,h)=>{a.push(i.call(this,l,h))})),this.waitFor(a)}static mapArray(t,i){return new Y(((a,l)=>{const h=t.length,d=new Array(h);let p=0;for(let _=0;_<h;_++){const v=_;i(t[v]).next((A=>{d[v]=A,++p,p===h&&a(d)}),(A=>l(A)))}}))}static doWhile(t,i){return new Y(((a,l)=>{const h=()=>{t()===!0?i().next((()=>{h()}),l):a()};h()}))}}function Jb(s){const t=s.match(/Android ([\d.]+)/i),i=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(i)}function Il(s){return s.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sm{constructor(t,i){this.previousValue=t,i&&(i.sequenceNumberHandler=a=>this.ae(a),this.ue=a=>i.writeSequenceNumber(a))}ae(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ue&&this.ue(t),t}}sm.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rm=-1;function am(s){return s==null}function Ec(s){return s===0&&1/s==-1/0}function Wb(s){return typeof s=="number"&&Number.isInteger(s)&&!Ec(s)&&s<=Number.MAX_SAFE_INTEGER&&s>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cE="";function t1(s){let t="";for(let i=0;i<s.length;i++)t.length>0&&(t=w_(t)),t=e1(s.get(i),t);return w_(t)}function e1(s,t){let i=t;const a=s.length;for(let l=0;l<a;l++){const h=s.charAt(l);switch(h){case"\0":i+="";break;case cE:i+="";break;default:i+=h}}return i}function w_(s){return s+cE+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R_(s){let t=0;for(const i in s)Object.prototype.hasOwnProperty.call(s,i)&&t++;return t}function Ja(s,t){for(const i in s)Object.prototype.hasOwnProperty.call(s,i)&&t(i,s[i])}function hE(s){for(const t in s)if(Object.prototype.hasOwnProperty.call(s,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(t,i){this.comparator=t,this.root=i||xe.EMPTY}insert(t,i){return new on(this.comparator,this.root.insert(t,i,this.comparator).copy(null,null,xe.BLACK,null,null))}remove(t){return new on(this.comparator,this.root.remove(t,this.comparator).copy(null,null,xe.BLACK,null,null))}get(t){let i=this.root;for(;!i.isEmpty();){const a=this.comparator(t,i.key);if(a===0)return i.value;a<0?i=i.left:a>0&&(i=i.right)}return null}indexOf(t){let i=0,a=this.root;for(;!a.isEmpty();){const l=this.comparator(t,a.key);if(l===0)return i+a.left.size;l<0?a=a.left:(i+=a.left.size+1,a=a.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((i,a)=>(t(i,a),!1)))}toString(){const t=[];return this.inorderTraversal(((i,a)=>(t.push(`${i}:${a}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new ec(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new ec(this.root,t,this.comparator,!1)}getReverseIterator(){return new ec(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new ec(this.root,t,this.comparator,!0)}}class ec{constructor(t,i,a,l){this.isReverse=l,this.nodeStack=[];let h=1;for(;!t.isEmpty();)if(h=i?a(t.key,i):1,i&&l&&(h*=-1),h<0)t=this.isReverse?t.left:t.right;else{if(h===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const i={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return i}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class xe{constructor(t,i,a,l,h){this.key=t,this.value=i,this.color=a??xe.RED,this.left=l??xe.EMPTY,this.right=h??xe.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,i,a,l,h){return new xe(t??this.key,i??this.value,a??this.color,l??this.left,h??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,i,a){let l=this;const h=a(t,l.key);return l=h<0?l.copy(null,null,null,l.left.insert(t,i,a),null):h===0?l.copy(null,i,null,null,null):l.copy(null,null,null,null,l.right.insert(t,i,a)),l.fixUp()}removeMin(){if(this.left.isEmpty())return xe.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,i){let a,l=this;if(i(t,l.key)<0)l.left.isEmpty()||l.left.isRed()||l.left.left.isRed()||(l=l.moveRedLeft()),l=l.copy(null,null,null,l.left.remove(t,i),null);else{if(l.left.isRed()&&(l=l.rotateRight()),l.right.isEmpty()||l.right.isRed()||l.right.left.isRed()||(l=l.moveRedRight()),i(t,l.key)===0){if(l.right.isEmpty())return xe.EMPTY;a=l.right.min(),l=l.copy(a.key,a.value,null,null,l.right.removeMin())}l=l.copy(null,null,null,null,l.right.remove(t,i))}return l.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,xe.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,xe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),i=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,i)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw wt(43730,{key:this.key,value:this.value});if(this.right.isRed())throw wt(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw wt(27949);return t+(this.isRed()?0:1)}}xe.EMPTY=null,xe.RED=!0,xe.BLACK=!1;xe.EMPTY=new class{constructor(){this.size=0}get key(){throw wt(57766)}get value(){throw wt(16141)}get color(){throw wt(16727)}get left(){throw wt(29726)}get right(){throw wt(36894)}copy(t,i,a,l,h){return this}insert(t,i,a){return new xe(t,i)}remove(t,i){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(t){this.comparator=t,this.data=new on(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((i,a)=>(t(i),!1)))}forEachInRange(t,i){const a=this.data.getIteratorFrom(t[0]);for(;a.hasNext();){const l=a.getNext();if(this.comparator(l.key,t[1])>=0)return;i(l.key)}}forEachWhile(t,i){let a;for(a=i!==void 0?this.data.getIteratorFrom(i):this.data.getIterator();a.hasNext();)if(!t(a.getNext().key))return}firstAfterOrEqual(t){const i=this.data.getIteratorFrom(t);return i.hasNext()?i.getNext().key:null}getIterator(){return new I_(this.data.getIterator())}getIteratorFrom(t){return new I_(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let i=this;return i.size<t.size&&(i=t,t=this),t.forEach((a=>{i=i.add(a)})),i}isEqual(t){if(!(t instanceof Pe)||this.size!==t.size)return!1;const i=this.data.getIterator(),a=t.data.getIterator();for(;i.hasNext();){const l=i.getNext().key,h=a.getNext().key;if(this.comparator(l,h)!==0)return!1}return!0}toArray(){const t=[];return this.forEach((i=>{t.push(i)})),t}toString(){const t=[];return this.forEach((i=>t.push(i))),"SortedSet("+t.toString()+")"}copy(t){const i=new Pe(this.comparator);return i.data=t,i}}class I_{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{constructor(t){this.fields=t,t.sort(Ue.comparator)}static empty(){return new Yn([])}unionWith(t){let i=new Pe(Ue.comparator);for(const a of this.fields)i=i.add(a);for(const a of t)i=i.add(a);return new Yn(i.toArray())}covers(t){for(const i of this.fields)if(i.isPrefixOf(t))return!0;return!1}isEqual(t){return Fa(this.fields,t.fields,((i,a)=>i.isEqual(a)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n1 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(t){this.binaryString=t}static fromBase64String(t){const i=(function(l){try{return atob(l)}catch(h){throw typeof DOMException<"u"&&h instanceof DOMException?new n1("Invalid base64 string: "+h):h}})(t);return new di(i)}static fromUint8Array(t){const i=(function(l){let h="";for(let d=0;d<l.length;++d)h+=String.fromCharCode(l[d]);return h})(t);return new di(i)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(i){return btoa(i)})(this.binaryString)}toUint8Array(){return(function(i){const a=new Uint8Array(i.length);for(let l=0;l<i.length;l++)a[l]=i.charCodeAt(l);return a})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Ut(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}di.EMPTY_BYTE_STRING=new di("");const i1=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function xr(s){if(oe(!!s,39018),typeof s=="string"){let t=0;const i=i1.exec(s);if(oe(!!i,46558,{timestamp:s}),i[1]){let l=i[1];l=(l+"000000000").substr(0,9),t=Number(l)}const a=new Date(s);return{seconds:Math.floor(a.getTime()/1e3),nanos:t}}return{seconds:ke(s.seconds),nanos:ke(s.nanos)}}function ke(s){return typeof s=="number"?s:typeof s=="string"?Number(s):0}function Ya(s){return typeof s=="string"?di.fromBase64String(s):di.fromUint8Array(s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fE="server_timestamp",dE="__type__",mE="__previous_value__",gE="__local_write_time__";function om(s){var i,a;return((a=(((i=s==null?void 0:s.mapValue)==null?void 0:i.fields)||{})[dE])==null?void 0:a.stringValue)===fE}function lm(s){const t=s.mapValue.fields[mE];return om(t)?lm(t):t}function Tc(s){const t=xr(s.mapValue.fields[gE].timestampValue);return new ee(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s1{constructor(t,i,a,l,h,d,p,_,v,A){this.databaseId=t,this.appId=i,this.persistenceKey=a,this.host=l,this.ssl=h,this.forceLongPolling=d,this.autoDetectLongPolling=p,this.longPollingOptions=_,this.useFetchStreams=v,this.isUsingEmulator=A}}const Ac="(default)";class Sc{constructor(t,i){this.projectId=t,this.database=i||Ac}static empty(){return new Sc("","")}get isDefaultDatabase(){return this.database===Ac}isEqual(t){return t instanceof Sc&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pE="__type__",r1="__max__",nc={mapValue:{}},yE="__vector__",kd="value";function kr(s){return"nullValue"in s?0:"booleanValue"in s?1:"integerValue"in s||"doubleValue"in s?2:"timestampValue"in s?3:"stringValue"in s?5:"bytesValue"in s?6:"referenceValue"in s?7:"geoPointValue"in s?8:"arrayValue"in s?9:"mapValue"in s?om(s)?4:o1(s)?9007199254740991:a1(s)?10:11:wt(28295,{value:s})}function mi(s,t){if(s===t)return!0;const i=kr(s);if(i!==kr(t))return!1;switch(i){case 0:case 9007199254740991:return!0;case 1:return s.booleanValue===t.booleanValue;case 4:return Tc(s).isEqual(Tc(t));case 3:return(function(l,h){if(typeof l.timestampValue=="string"&&typeof h.timestampValue=="string"&&l.timestampValue.length===h.timestampValue.length)return l.timestampValue===h.timestampValue;const d=xr(l.timestampValue),p=xr(h.timestampValue);return d.seconds===p.seconds&&d.nanos===p.nanos})(s,t);case 5:return s.stringValue===t.stringValue;case 6:return(function(l,h){return Ya(l.bytesValue).isEqual(Ya(h.bytesValue))})(s,t);case 7:return s.referenceValue===t.referenceValue;case 8:return(function(l,h){return ke(l.geoPointValue.latitude)===ke(h.geoPointValue.latitude)&&ke(l.geoPointValue.longitude)===ke(h.geoPointValue.longitude)})(s,t);case 2:return(function(l,h){if("integerValue"in l&&"integerValue"in h)return ke(l.integerValue)===ke(h.integerValue);if("doubleValue"in l&&"doubleValue"in h){const d=ke(l.doubleValue),p=ke(h.doubleValue);return d===p?Ec(d)===Ec(p):isNaN(d)&&isNaN(p)}return!1})(s,t);case 9:return Fa(s.arrayValue.values||[],t.arrayValue.values||[],mi);case 10:case 11:return(function(l,h){const d=l.mapValue.fields||{},p=h.mapValue.fields||{};if(R_(d)!==R_(p))return!1;for(const _ in d)if(d.hasOwnProperty(_)&&(p[_]===void 0||!mi(d[_],p[_])))return!1;return!0})(s,t);default:return wt(52216,{left:s})}}function Tl(s,t){return(s.values||[]).find((i=>mi(i,t)))!==void 0}function Ka(s,t){if(s===t)return 0;const i=kr(s),a=kr(t);if(i!==a)return Ut(i,a);switch(i){case 0:case 9007199254740991:return 0;case 1:return Ut(s.booleanValue,t.booleanValue);case 2:return(function(h,d){const p=ke(h.integerValue||h.doubleValue),_=ke(d.integerValue||d.doubleValue);return p<_?-1:p>_?1:p===_?0:isNaN(p)?isNaN(_)?0:-1:1})(s,t);case 3:return C_(s.timestampValue,t.timestampValue);case 4:return C_(Tc(s),Tc(t));case 5:return xd(s.stringValue,t.stringValue);case 6:return(function(h,d){const p=Ya(h),_=Ya(d);return p.compareTo(_)})(s.bytesValue,t.bytesValue);case 7:return(function(h,d){const p=h.split("/"),_=d.split("/");for(let v=0;v<p.length&&v<_.length;v++){const A=Ut(p[v],_[v]);if(A!==0)return A}return Ut(p.length,_.length)})(s.referenceValue,t.referenceValue);case 8:return(function(h,d){const p=Ut(ke(h.latitude),ke(d.latitude));return p!==0?p:Ut(ke(h.longitude),ke(d.longitude))})(s.geoPointValue,t.geoPointValue);case 9:return D_(s.arrayValue,t.arrayValue);case 10:return(function(h,d){var k,Q,$,it;const p=h.fields||{},_=d.fields||{},v=(k=p[kd])==null?void 0:k.arrayValue,A=(Q=_[kd])==null?void 0:Q.arrayValue,I=Ut((($=v==null?void 0:v.values)==null?void 0:$.length)||0,((it=A==null?void 0:A.values)==null?void 0:it.length)||0);return I!==0?I:D_(v,A)})(s.mapValue,t.mapValue);case 11:return(function(h,d){if(h===nc.mapValue&&d===nc.mapValue)return 0;if(h===nc.mapValue)return 1;if(d===nc.mapValue)return-1;const p=h.fields||{},_=Object.keys(p),v=d.fields||{},A=Object.keys(v);_.sort(),A.sort();for(let I=0;I<_.length&&I<A.length;++I){const k=xd(_[I],A[I]);if(k!==0)return k;const Q=Ka(p[_[I]],v[A[I]]);if(Q!==0)return Q}return Ut(_.length,A.length)})(s.mapValue,t.mapValue);default:throw wt(23264,{he:i})}}function C_(s,t){if(typeof s=="string"&&typeof t=="string"&&s.length===t.length)return Ut(s,t);const i=xr(s),a=xr(t),l=Ut(i.seconds,a.seconds);return l!==0?l:Ut(i.nanos,a.nanos)}function D_(s,t){const i=s.values||[],a=t.values||[];for(let l=0;l<i.length&&l<a.length;++l){const h=Ka(i[l],a[l]);if(h)return h}return Ut(i.length,a.length)}function Qa(s){return Ud(s)}function Ud(s){return"nullValue"in s?"null":"booleanValue"in s?""+s.booleanValue:"integerValue"in s?""+s.integerValue:"doubleValue"in s?""+s.doubleValue:"timestampValue"in s?(function(i){const a=xr(i);return`time(${a.seconds},${a.nanos})`})(s.timestampValue):"stringValue"in s?s.stringValue:"bytesValue"in s?(function(i){return Ya(i).toBase64()})(s.bytesValue):"referenceValue"in s?(function(i){return At.fromName(i).toString()})(s.referenceValue):"geoPointValue"in s?(function(i){return`geo(${i.latitude},${i.longitude})`})(s.geoPointValue):"arrayValue"in s?(function(i){let a="[",l=!0;for(const h of i.values||[])l?l=!1:a+=",",a+=Ud(h);return a+"]"})(s.arrayValue):"mapValue"in s?(function(i){const a=Object.keys(i.fields||{}).sort();let l="{",h=!0;for(const d of a)h?h=!1:l+=",",l+=`${d}:${Ud(i.fields[d])}`;return l+"}"})(s.mapValue):wt(61005,{value:s})}function cc(s){switch(kr(s)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=lm(s);return t?16+cc(t):16;case 5:return 2*s.stringValue.length;case 6:return Ya(s.bytesValue).approximateByteSize();case 7:return s.referenceValue.length;case 9:return(function(a){return(a.values||[]).reduce(((l,h)=>l+cc(h)),0)})(s.arrayValue);case 10:case 11:return(function(a){let l=0;return Ja(a.fields,((h,d)=>{l+=h.length+cc(d)})),l})(s.mapValue);default:throw wt(13486,{value:s})}}function Pd(s){return!!s&&"integerValue"in s}function um(s){return!!s&&"arrayValue"in s}function hc(s){return!!s&&"mapValue"in s}function a1(s){var i,a;return((a=(((i=s==null?void 0:s.mapValue)==null?void 0:i.fields)||{})[pE])==null?void 0:a.stringValue)===yE}function fl(s){if(s.geoPointValue)return{geoPointValue:{...s.geoPointValue}};if(s.timestampValue&&typeof s.timestampValue=="object")return{timestampValue:{...s.timestampValue}};if(s.mapValue){const t={mapValue:{fields:{}}};return Ja(s.mapValue.fields,((i,a)=>t.mapValue.fields[i]=fl(a))),t}if(s.arrayValue){const t={arrayValue:{values:[]}};for(let i=0;i<(s.arrayValue.values||[]).length;++i)t.arrayValue.values[i]=fl(s.arrayValue.values[i]);return t}return{...s}}function o1(s){return(((s.mapValue||{}).fields||{}).__type__||{}).stringValue===r1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(t){this.value=t}static empty(){return new Gn({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let i=this.value;for(let a=0;a<t.length-1;++a)if(i=(i.mapValue.fields||{})[t.get(a)],!hc(i))return null;return i=(i.mapValue.fields||{})[t.lastSegment()],i||null}}set(t,i){this.getFieldsMap(t.popLast())[t.lastSegment()]=fl(i)}setAll(t){let i=Ue.emptyPath(),a={},l=[];t.forEach(((d,p)=>{if(!i.isImmediateParentOf(p)){const _=this.getFieldsMap(i);this.applyChanges(_,a,l),a={},l=[],i=p.popLast()}d?a[p.lastSegment()]=fl(d):l.push(p.lastSegment())}));const h=this.getFieldsMap(i);this.applyChanges(h,a,l)}delete(t){const i=this.field(t.popLast());hc(i)&&i.mapValue.fields&&delete i.mapValue.fields[t.lastSegment()]}isEqual(t){return mi(this.value,t.value)}getFieldsMap(t){let i=this.value;i.mapValue.fields||(i.mapValue={fields:{}});for(let a=0;a<t.length;++a){let l=i.mapValue.fields[t.get(a)];hc(l)&&l.mapValue.fields||(l={mapValue:{fields:{}}},i.mapValue.fields[t.get(a)]=l),i=l}return i.mapValue.fields}applyChanges(t,i,a){Ja(i,((l,h)=>t[l]=h));for(const l of a)delete t[l]}clone(){return new Gn(fl(this.value))}}function _E(s){const t=[];return Ja(s.fields,((i,a)=>{const l=new Ue([i]);if(hc(a)){const h=_E(a.mapValue).fields;if(h.length===0)t.push(l);else for(const d of h)t.push(l.child(d))}else t.push(l)})),new Yn(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(t,i,a,l,h,d,p){this.key=t,this.documentType=i,this.version=a,this.readTime=l,this.createTime=h,this.data=d,this.documentState=p}static newInvalidDocument(t){return new Hn(t,0,te.min(),te.min(),te.min(),Gn.empty(),0)}static newFoundDocument(t,i,a,l){return new Hn(t,1,i,te.min(),a,l,0)}static newNoDocument(t,i){return new Hn(t,2,i,te.min(),te.min(),Gn.empty(),0)}static newUnknownDocument(t,i){return new Hn(t,3,i,te.min(),te.min(),Gn.empty(),2)}convertToFoundDocument(t,i){return!this.createTime.isEqual(te.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=i,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Gn.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Gn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=te.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Hn&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Hn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bc{constructor(t,i){this.position=t,this.inclusive=i}}function O_(s,t,i){let a=0;for(let l=0;l<s.position.length;l++){const h=t[l],d=s.position[l];if(h.field.isKeyField()?a=At.comparator(At.fromName(d.referenceValue),i.key):a=Ka(d,i.data.field(h.field)),h.dir==="desc"&&(a*=-1),a!==0)break}return a}function N_(s,t){if(s===null)return t===null;if(t===null||s.inclusive!==t.inclusive||s.position.length!==t.position.length)return!1;for(let i=0;i<s.position.length;i++)if(!mi(s.position[i],t.position[i]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc{constructor(t,i="asc"){this.field=t,this.dir=i}}function l1(s,t){return s.dir===t.dir&&s.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vE{}class Ce extends vE{constructor(t,i,a){super(),this.field=t,this.op=i,this.value=a}static create(t,i,a){return t.isKeyField()?i==="in"||i==="not-in"?this.createKeyFieldInFilter(t,i,a):new c1(t,i,a):i==="array-contains"?new d1(t,a):i==="in"?new m1(t,a):i==="not-in"?new g1(t,a):i==="array-contains-any"?new p1(t,a):new Ce(t,i,a)}static createKeyFieldInFilter(t,i,a){return i==="in"?new h1(t,a):new f1(t,a)}matches(t){const i=t.data.field(this.field);return this.op==="!="?i!==null&&i.nullValue===void 0&&this.matchesComparison(Ka(i,this.value)):i!==null&&kr(this.value)===kr(i)&&this.matchesComparison(Ka(i,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return wt(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class zs extends vE{constructor(t,i){super(),this.filters=t,this.op=i,this.Pe=null}static create(t,i){return new zs(t,i)}matches(t){return EE(this)?this.filters.find((i=>!i.matches(t)))===void 0:this.filters.find((i=>i.matches(t)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((t,i)=>t.concat(i.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function EE(s){return s.op==="and"}function TE(s){return u1(s)&&EE(s)}function u1(s){for(const t of s.filters)if(t instanceof zs)return!1;return!0}function Ld(s){if(s instanceof Ce)return s.field.canonicalString()+s.op.toString()+Qa(s.value);if(TE(s))return s.filters.map((t=>Ld(t))).join(",");{const t=s.filters.map((i=>Ld(i))).join(",");return`${s.op}(${t})`}}function AE(s,t){return s instanceof Ce?(function(a,l){return l instanceof Ce&&a.op===l.op&&a.field.isEqual(l.field)&&mi(a.value,l.value)})(s,t):s instanceof zs?(function(a,l){return l instanceof zs&&a.op===l.op&&a.filters.length===l.filters.length?a.filters.reduce(((h,d,p)=>h&&AE(d,l.filters[p])),!0):!1})(s,t):void wt(19439)}function SE(s){return s instanceof Ce?(function(i){return`${i.field.canonicalString()} ${i.op} ${Qa(i.value)}`})(s):s instanceof zs?(function(i){return i.op.toString()+" {"+i.getFilters().map(SE).join(" ,")+"}"})(s):"Filter"}class c1 extends Ce{constructor(t,i,a){super(t,i,a),this.key=At.fromName(a.referenceValue)}matches(t){const i=At.comparator(t.key,this.key);return this.matchesComparison(i)}}class h1 extends Ce{constructor(t,i){super(t,"in",i),this.keys=bE("in",i)}matches(t){return this.keys.some((i=>i.isEqual(t.key)))}}class f1 extends Ce{constructor(t,i){super(t,"not-in",i),this.keys=bE("not-in",i)}matches(t){return!this.keys.some((i=>i.isEqual(t.key)))}}function bE(s,t){var i;return(((i=t.arrayValue)==null?void 0:i.values)||[]).map((a=>At.fromName(a.referenceValue)))}class d1 extends Ce{constructor(t,i){super(t,"array-contains",i)}matches(t){const i=t.data.field(this.field);return um(i)&&Tl(i.arrayValue,this.value)}}class m1 extends Ce{constructor(t,i){super(t,"in",i)}matches(t){const i=t.data.field(this.field);return i!==null&&Tl(this.value.arrayValue,i)}}class g1 extends Ce{constructor(t,i){super(t,"not-in",i)}matches(t){if(Tl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const i=t.data.field(this.field);return i!==null&&i.nullValue===void 0&&!Tl(this.value.arrayValue,i)}}class p1 extends Ce{constructor(t,i){super(t,"array-contains-any",i)}matches(t){const i=t.data.field(this.field);return!(!um(i)||!i.arrayValue.values)&&i.arrayValue.values.some((a=>Tl(this.value.arrayValue,a)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y1{constructor(t,i=null,a=[],l=[],h=null,d=null,p=null){this.path=t,this.collectionGroup=i,this.orderBy=a,this.filters=l,this.limit=h,this.startAt=d,this.endAt=p,this.Te=null}}function M_(s,t=null,i=[],a=[],l=null,h=null,d=null){return new y1(s,t,i,a,l,h,d)}function cm(s){const t=Xt(s);if(t.Te===null){let i=t.path.canonicalString();t.collectionGroup!==null&&(i+="|cg:"+t.collectionGroup),i+="|f:",i+=t.filters.map((a=>Ld(a))).join(","),i+="|ob:",i+=t.orderBy.map((a=>(function(h){return h.field.canonicalString()+h.dir})(a))).join(","),am(t.limit)||(i+="|l:",i+=t.limit),t.startAt&&(i+="|lb:",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map((a=>Qa(a))).join(",")),t.endAt&&(i+="|ub:",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map((a=>Qa(a))).join(",")),t.Te=i}return t.Te}function hm(s,t){if(s.limit!==t.limit||s.orderBy.length!==t.orderBy.length)return!1;for(let i=0;i<s.orderBy.length;i++)if(!l1(s.orderBy[i],t.orderBy[i]))return!1;if(s.filters.length!==t.filters.length)return!1;for(let i=0;i<s.filters.length;i++)if(!AE(s.filters[i],t.filters[i]))return!1;return s.collectionGroup===t.collectionGroup&&!!s.path.isEqual(t.path)&&!!N_(s.startAt,t.startAt)&&N_(s.endAt,t.endAt)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yc{constructor(t,i=null,a=[],l=[],h=null,d="F",p=null,_=null){this.path=t,this.collectionGroup=i,this.explicitOrderBy=a,this.filters=l,this.limit=h,this.limitType=d,this.startAt=p,this.endAt=_,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function _1(s,t,i,a,l,h,d,p){return new Yc(s,t,i,a,l,h,d,p)}function v1(s){return new Yc(s)}function V_(s){return s.filters.length===0&&s.limit===null&&s.startAt==null&&s.endAt==null&&(s.explicitOrderBy.length===0||s.explicitOrderBy.length===1&&s.explicitOrderBy[0].field.isKeyField())}function E1(s){return s.collectionGroup!==null}function dl(s){const t=Xt(s);if(t.Ie===null){t.Ie=[];const i=new Set;for(const h of t.explicitOrderBy)t.Ie.push(h),i.add(h.field.canonicalString());const a=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(d){let p=new Pe(Ue.comparator);return d.filters.forEach((_=>{_.getFlattenedFilters().forEach((v=>{v.isInequality()&&(p=p.add(v.field))}))})),p})(t).forEach((h=>{i.has(h.canonicalString())||h.isKeyField()||t.Ie.push(new wc(h,a))})),i.has(Ue.keyField().canonicalString())||t.Ie.push(new wc(Ue.keyField(),a))}return t.Ie}function Or(s){const t=Xt(s);return t.Ee||(t.Ee=T1(t,dl(s))),t.Ee}function T1(s,t){if(s.limitType==="F")return M_(s.path,s.collectionGroup,t,s.filters,s.limit,s.startAt,s.endAt);{t=t.map((l=>{const h=l.dir==="desc"?"asc":"desc";return new wc(l.field,h)}));const i=s.endAt?new bc(s.endAt.position,s.endAt.inclusive):null,a=s.startAt?new bc(s.startAt.position,s.startAt.inclusive):null;return M_(s.path,s.collectionGroup,t,s.filters,s.limit,i,a)}}function zd(s,t,i){return new Yc(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),t,i,s.startAt,s.endAt)}function wE(s,t){return hm(Or(s),Or(t))&&s.limitType===t.limitType}function RE(s){return`${cm(Or(s))}|lt:${s.limitType}`}function ul(s){return`Query(target=${(function(i){let a=i.path.canonicalString();return i.collectionGroup!==null&&(a+=" collectionGroup="+i.collectionGroup),i.filters.length>0&&(a+=`, filters: [${i.filters.map((l=>SE(l))).join(", ")}]`),am(i.limit)||(a+=", limit: "+i.limit),i.orderBy.length>0&&(a+=`, orderBy: [${i.orderBy.map((l=>(function(d){return`${d.field.canonicalString()} (${d.dir})`})(l))).join(", ")}]`),i.startAt&&(a+=", startAt: ",a+=i.startAt.inclusive?"b:":"a:",a+=i.startAt.position.map((l=>Qa(l))).join(",")),i.endAt&&(a+=", endAt: ",a+=i.endAt.inclusive?"a:":"b:",a+=i.endAt.position.map((l=>Qa(l))).join(",")),`Target(${a})`})(Or(s))}; limitType=${s.limitType})`}function fm(s,t){return t.isFoundDocument()&&(function(a,l){const h=l.key.path;return a.collectionGroup!==null?l.key.hasCollectionId(a.collectionGroup)&&a.path.isPrefixOf(h):At.isDocumentKey(a.path)?a.path.isEqual(h):a.path.isImmediateParentOf(h)})(s,t)&&(function(a,l){for(const h of dl(a))if(!h.field.isKeyField()&&l.data.field(h.field)===null)return!1;return!0})(s,t)&&(function(a,l){for(const h of a.filters)if(!h.matches(l))return!1;return!0})(s,t)&&(function(a,l){return!(a.startAt&&!(function(d,p,_){const v=O_(d,p,_);return d.inclusive?v<=0:v<0})(a.startAt,dl(a),l)||a.endAt&&!(function(d,p,_){const v=O_(d,p,_);return d.inclusive?v>=0:v>0})(a.endAt,dl(a),l))})(s,t)}function A1(s){return(t,i)=>{let a=!1;for(const l of dl(s)){const h=S1(l,t,i);if(h!==0)return h;a=a||l.field.isKeyField()}return 0}}function S1(s,t,i){const a=s.field.isKeyField()?At.comparator(t.key,i.key):(function(h,d,p){const _=d.data.field(h),v=p.data.field(h);return _!==null&&v!==null?Ka(_,v):wt(42886)})(s.field,t,i);switch(s.dir){case"asc":return a;case"desc":return-1*a;default:return wt(19790,{direction:s.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(t,i){this.mapKeyFn=t,this.equalsFn=i,this.inner={},this.innerSize=0}get(t){const i=this.mapKeyFn(t),a=this.inner[i];if(a!==void 0){for(const[l,h]of a)if(this.equalsFn(l,t))return h}}has(t){return this.get(t)!==void 0}set(t,i){const a=this.mapKeyFn(t),l=this.inner[a];if(l===void 0)return this.inner[a]=[[t,i]],void this.innerSize++;for(let h=0;h<l.length;h++)if(this.equalsFn(l[h][0],t))return void(l[h]=[t,i]);l.push([t,i]),this.innerSize++}delete(t){const i=this.mapKeyFn(t),a=this.inner[i];if(a===void 0)return!1;for(let l=0;l<a.length;l++)if(this.equalsFn(a[l][0],t))return a.length===1?delete this.inner[i]:a.splice(l,1),this.innerSize--,!0;return!1}forEach(t){Ja(this.inner,((i,a)=>{for(const[l,h]of a)t(l,h)}))}isEmpty(){return hE(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b1=new on(At.comparator);function Rc(){return b1}const IE=new on(At.comparator);function ic(...s){let t=IE;for(const i of s)t=t.insert(i.key,i);return t}function CE(s){let t=IE;return s.forEach(((i,a)=>t=t.insert(i,a.overlayedDocument))),t}function Ir(){return ml()}function DE(){return ml()}function ml(){return new Hr((s=>s.toString()),((s,t)=>s.isEqual(t)))}const w1=new on(At.comparator),R1=new Pe(At.comparator);function Ge(...s){let t=R1;for(const i of s)t=t.add(i);return t}const I1=new Pe(Ut);function C1(){return I1}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dm(s,t){if(s.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ec(t)?"-0":t}}function OE(s){return{integerValue:""+s}}function D1(s,t){return Wb(t)?OE(t):dm(s,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kc{constructor(){this._=void 0}}function O1(s,t,i){return s instanceof Ic?(function(l,h){const d={fields:{[dE]:{stringValue:fE},[gE]:{timestampValue:{seconds:l.seconds,nanos:l.nanoseconds}}}};return h&&om(h)&&(h=lm(h)),h&&(d.fields[mE]=h),{mapValue:d}})(i,t):s instanceof Al?ME(s,t):s instanceof Sl?VE(s,t):(function(l,h){const d=NE(l,h),p=x_(d)+x_(l.Ae);return Pd(d)&&Pd(l.Ae)?OE(p):dm(l.serializer,p)})(s,t)}function N1(s,t,i){return s instanceof Al?ME(s,t):s instanceof Sl?VE(s,t):i}function NE(s,t){return s instanceof Cc?(function(a){return Pd(a)||(function(h){return!!h&&"doubleValue"in h})(a)})(t)?t:{integerValue:0}:null}class Ic extends Kc{}class Al extends Kc{constructor(t){super(),this.elements=t}}function ME(s,t){const i=xE(t);for(const a of s.elements)i.some((l=>mi(l,a)))||i.push(a);return{arrayValue:{values:i}}}class Sl extends Kc{constructor(t){super(),this.elements=t}}function VE(s,t){let i=xE(t);for(const a of s.elements)i=i.filter((l=>!mi(l,a)));return{arrayValue:{values:i}}}class Cc extends Kc{constructor(t,i){super(),this.serializer=t,this.Ae=i}}function x_(s){return ke(s.integerValue||s.doubleValue)}function xE(s){return um(s)&&s.arrayValue.values?s.arrayValue.values.slice():[]}function M1(s,t){return s.field.isEqual(t.field)&&(function(a,l){return a instanceof Al&&l instanceof Al||a instanceof Sl&&l instanceof Sl?Fa(a.elements,l.elements,mi):a instanceof Cc&&l instanceof Cc?mi(a.Ae,l.Ae):a instanceof Ic&&l instanceof Ic})(s.transform,t.transform)}class V1{constructor(t,i){this.version=t,this.transformResults=i}}class Bi{constructor(t,i){this.updateTime=t,this.exists=i}static none(){return new Bi}static exists(t){return new Bi(void 0,t)}static updateTime(t){return new Bi(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function fc(s,t){return s.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(s.updateTime):s.exists===void 0||s.exists===t.isFoundDocument()}class Qc{}function kE(s,t){if(!s.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return s.isNoDocument()?new PE(s.key,Bi.none()):new Cl(s.key,s.data,Bi.none());{const i=s.data,a=Gn.empty();let l=new Pe(Ue.comparator);for(let h of t.fields)if(!l.has(h)){let d=i.field(h);d===null&&h.length>1&&(h=h.popLast(),d=i.field(h)),d===null?a.delete(h):a.set(h,d),l=l.add(h)}return new qr(s.key,a,new Yn(l.toArray()),Bi.none())}}function x1(s,t,i){s instanceof Cl?(function(l,h,d){const p=l.value.clone(),_=U_(l.fieldTransforms,h,d.transformResults);p.setAll(_),h.convertToFoundDocument(d.version,p).setHasCommittedMutations()})(s,t,i):s instanceof qr?(function(l,h,d){if(!fc(l.precondition,h))return void h.convertToUnknownDocument(d.version);const p=U_(l.fieldTransforms,h,d.transformResults),_=h.data;_.setAll(UE(l)),_.setAll(p),h.convertToFoundDocument(d.version,_).setHasCommittedMutations()})(s,t,i):(function(l,h,d){h.convertToNoDocument(d.version).setHasCommittedMutations()})(0,t,i)}function gl(s,t,i,a){return s instanceof Cl?(function(h,d,p,_){if(!fc(h.precondition,d))return p;const v=h.value.clone(),A=P_(h.fieldTransforms,_,d);return v.setAll(A),d.convertToFoundDocument(d.version,v).setHasLocalMutations(),null})(s,t,i,a):s instanceof qr?(function(h,d,p,_){if(!fc(h.precondition,d))return p;const v=P_(h.fieldTransforms,_,d),A=d.data;return A.setAll(UE(h)),A.setAll(v),d.convertToFoundDocument(d.version,A).setHasLocalMutations(),p===null?null:p.unionWith(h.fieldMask.fields).unionWith(h.fieldTransforms.map((I=>I.field)))})(s,t,i,a):(function(h,d,p){return fc(h.precondition,d)?(d.convertToNoDocument(d.version).setHasLocalMutations(),null):p})(s,t,i)}function k1(s,t){let i=null;for(const a of s.fieldTransforms){const l=t.data.field(a.field),h=NE(a.transform,l||null);h!=null&&(i===null&&(i=Gn.empty()),i.set(a.field,h))}return i||null}function k_(s,t){return s.type===t.type&&!!s.key.isEqual(t.key)&&!!s.precondition.isEqual(t.precondition)&&!!(function(a,l){return a===void 0&&l===void 0||!(!a||!l)&&Fa(a,l,((h,d)=>M1(h,d)))})(s.fieldTransforms,t.fieldTransforms)&&(s.type===0?s.value.isEqual(t.value):s.type!==1||s.data.isEqual(t.data)&&s.fieldMask.isEqual(t.fieldMask))}class Cl extends Qc{constructor(t,i,a,l=[]){super(),this.key=t,this.value=i,this.precondition=a,this.fieldTransforms=l,this.type=0}getFieldMask(){return null}}class qr extends Qc{constructor(t,i,a,l,h=[]){super(),this.key=t,this.data=i,this.fieldMask=a,this.precondition=l,this.fieldTransforms=h,this.type=1}getFieldMask(){return this.fieldMask}}function UE(s){const t=new Map;return s.fieldMask.fields.forEach((i=>{if(!i.isEmpty()){const a=s.data.field(i);t.set(i,a)}})),t}function U_(s,t,i){const a=new Map;oe(s.length===i.length,32656,{Re:i.length,Ve:s.length});for(let l=0;l<i.length;l++){const h=s[l],d=h.transform,p=t.data.field(h.field);a.set(h.field,N1(d,p,i[l]))}return a}function P_(s,t,i){const a=new Map;for(const l of s){const h=l.transform,d=i.data.field(l.field);a.set(l.field,O1(h,d,t))}return a}class PE extends Qc{constructor(t,i){super(),this.key=t,this.precondition=i,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class U1 extends Qc{constructor(t,i){super(),this.key=t,this.precondition=i,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P1{constructor(t,i,a,l){this.batchId=t,this.localWriteTime=i,this.baseMutations=a,this.mutations=l}applyToRemoteDocument(t,i){const a=i.mutationResults;for(let l=0;l<this.mutations.length;l++){const h=this.mutations[l];h.key.isEqual(t.key)&&x1(h,t,a[l])}}applyToLocalView(t,i){for(const a of this.baseMutations)a.key.isEqual(t.key)&&(i=gl(a,t,i,this.localWriteTime));for(const a of this.mutations)a.key.isEqual(t.key)&&(i=gl(a,t,i,this.localWriteTime));return i}applyToLocalDocumentSet(t,i){const a=DE();return this.mutations.forEach((l=>{const h=t.get(l.key),d=h.overlayedDocument;let p=this.applyToLocalView(d,h.mutatedFields);p=i.has(l.key)?null:p;const _=kE(d,p);_!==null&&a.set(l.key,_),d.isValidDocument()||d.convertToNoDocument(te.min())})),a}keys(){return this.mutations.reduce(((t,i)=>t.add(i.key)),Ge())}isEqual(t){return this.batchId===t.batchId&&Fa(this.mutations,t.mutations,((i,a)=>k_(i,a)))&&Fa(this.baseMutations,t.baseMutations,((i,a)=>k_(i,a)))}}class mm{constructor(t,i,a,l){this.batch=t,this.commitVersion=i,this.mutationResults=a,this.docVersions=l}static from(t,i,a){oe(t.mutations.length===a.length,58842,{me:t.mutations.length,fe:a.length});let l=(function(){return w1})();const h=t.mutations;for(let d=0;d<h.length;d++)l=l.insert(h[d].key,a[d].version);return new mm(t,i,a,l)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L1{constructor(t,i){this.largestBatchId=t,this.mutation=i}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pe,Mt;function z1(s){switch(s){case X.OK:return wt(64938);case X.CANCELLED:case X.UNKNOWN:case X.DEADLINE_EXCEEDED:case X.RESOURCE_EXHAUSTED:case X.INTERNAL:case X.UNAVAILABLE:case X.UNAUTHENTICATED:return!1;case X.INVALID_ARGUMENT:case X.NOT_FOUND:case X.ALREADY_EXISTS:case X.PERMISSION_DENIED:case X.FAILED_PRECONDITION:case X.ABORTED:case X.OUT_OF_RANGE:case X.UNIMPLEMENTED:case X.DATA_LOSS:return!0;default:return wt(15467,{code:s})}}function B1(s){if(s===void 0)return Vr("GRPC error has no .code"),X.UNKNOWN;switch(s){case pe.OK:return X.OK;case pe.CANCELLED:return X.CANCELLED;case pe.UNKNOWN:return X.UNKNOWN;case pe.DEADLINE_EXCEEDED:return X.DEADLINE_EXCEEDED;case pe.RESOURCE_EXHAUSTED:return X.RESOURCE_EXHAUSTED;case pe.INTERNAL:return X.INTERNAL;case pe.UNAVAILABLE:return X.UNAVAILABLE;case pe.UNAUTHENTICATED:return X.UNAUTHENTICATED;case pe.INVALID_ARGUMENT:return X.INVALID_ARGUMENT;case pe.NOT_FOUND:return X.NOT_FOUND;case pe.ALREADY_EXISTS:return X.ALREADY_EXISTS;case pe.PERMISSION_DENIED:return X.PERMISSION_DENIED;case pe.FAILED_PRECONDITION:return X.FAILED_PRECONDITION;case pe.ABORTED:return X.ABORTED;case pe.OUT_OF_RANGE:return X.OUT_OF_RANGE;case pe.UNIMPLEMENTED:return X.UNIMPLEMENTED;case pe.DATA_LOSS:return X.DATA_LOSS;default:return wt(39323,{code:s})}}(Mt=pe||(pe={}))[Mt.OK=0]="OK",Mt[Mt.CANCELLED=1]="CANCELLED",Mt[Mt.UNKNOWN=2]="UNKNOWN",Mt[Mt.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Mt[Mt.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Mt[Mt.NOT_FOUND=5]="NOT_FOUND",Mt[Mt.ALREADY_EXISTS=6]="ALREADY_EXISTS",Mt[Mt.PERMISSION_DENIED=7]="PERMISSION_DENIED",Mt[Mt.UNAUTHENTICATED=16]="UNAUTHENTICATED",Mt[Mt.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Mt[Mt.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Mt[Mt.ABORTED=10]="ABORTED",Mt[Mt.OUT_OF_RANGE=11]="OUT_OF_RANGE",Mt[Mt.UNIMPLEMENTED=12]="UNIMPLEMENTED",Mt[Mt.INTERNAL=13]="INTERNAL",Mt[Mt.UNAVAILABLE=14]="UNAVAILABLE",Mt[Mt.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Wd([4294967295,4294967295],0);class j1{constructor(t,i){this.databaseId=t,this.useProto3Json=i}}function Bd(s,t){return s.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function H1(s,t){return s.useProto3Json?t.toBase64():t.toUint8Array()}function q1(s,t){return Bd(s,t.toTimestamp())}function Ba(s){return oe(!!s,49232),te.fromTimestamp((function(i){const a=xr(i);return new ee(a.seconds,a.nanos)})(s))}function LE(s,t){return jd(s,t).canonicalString()}function jd(s,t){const i=(function(l){return new se(["projects",l.projectId,"databases",l.database])})(s).child("documents");return t===void 0?i:i.child(t)}function G1(s){const t=se.fromString(s);return oe(J1(t),10190,{key:t.toString()}),t}function Hd(s,t){return LE(s.databaseId,t.path)}function F1(s){const t=G1(s);return t.length===4?se.emptyPath():K1(t)}function Y1(s){return new se(["projects",s.databaseId.projectId,"databases",s.databaseId.database]).canonicalString()}function K1(s){return oe(s.length>4&&s.get(4)==="documents",29091,{key:s.toString()}),s.popFirst(5)}function L_(s,t,i){return{name:Hd(s,t),fields:i.value.mapValue.fields}}function Q1(s,t){let i;if(t instanceof Cl)i={update:L_(s,t.key,t.value)};else if(t instanceof PE)i={delete:Hd(s,t.key)};else if(t instanceof qr)i={update:L_(s,t.key,t.data),updateMask:Z1(t.fieldMask)};else{if(!(t instanceof U1))return wt(16599,{Vt:t.type});i={verify:Hd(s,t.key)}}return t.fieldTransforms.length>0&&(i.updateTransforms=t.fieldTransforms.map((a=>(function(h,d){const p=d.transform;if(p instanceof Ic)return{fieldPath:d.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(p instanceof Al)return{fieldPath:d.field.canonicalString(),appendMissingElements:{values:p.elements}};if(p instanceof Sl)return{fieldPath:d.field.canonicalString(),removeAllFromArray:{values:p.elements}};if(p instanceof Cc)return{fieldPath:d.field.canonicalString(),increment:p.Ae};throw wt(20930,{transform:d.transform})})(0,a)))),t.precondition.isNone||(i.currentDocument=(function(l,h){return h.updateTime!==void 0?{updateTime:q1(l,h.updateTime)}:h.exists!==void 0?{exists:h.exists}:wt(27497)})(s,t.precondition)),i}function X1(s,t){return s&&s.length>0?(oe(t!==void 0,14353),s.map((i=>(function(l,h){let d=l.updateTime?Ba(l.updateTime):Ba(h);return d.isEqual(te.min())&&(d=Ba(h)),new V1(d,l.transformResults||[])})(i,t)))):[]}function $1(s){let t=F1(s.parent);const i=s.structuredQuery,a=i.from?i.from.length:0;let l=null;if(a>0){oe(a===1,65062);const A=i.from[0];A.allDescendants?l=A.collectionId:t=t.child(A.collectionId)}let h=[];i.where&&(h=(function(I){const k=zE(I);return k instanceof zs&&TE(k)?k.getFilters():[k]})(i.where));let d=[];i.orderBy&&(d=(function(I){return I.map((k=>(function($){return new wc(La($.field),(function(Z){switch(Z){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})($.direction))})(k)))})(i.orderBy));let p=null;i.limit&&(p=(function(I){let k;return k=typeof I=="object"?I.value:I,am(k)?null:k})(i.limit));let _=null;i.startAt&&(_=(function(I){const k=!!I.before,Q=I.values||[];return new bc(Q,k)})(i.startAt));let v=null;return i.endAt&&(v=(function(I){const k=!I.before,Q=I.values||[];return new bc(Q,k)})(i.endAt)),_1(t,l,d,h,p,"F",_,v)}function zE(s){return s.unaryFilter!==void 0?(function(i){switch(i.unaryFilter.op){case"IS_NAN":const a=La(i.unaryFilter.field);return Ce.create(a,"==",{doubleValue:NaN});case"IS_NULL":const l=La(i.unaryFilter.field);return Ce.create(l,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const h=La(i.unaryFilter.field);return Ce.create(h,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const d=La(i.unaryFilter.field);return Ce.create(d,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return wt(61313);default:return wt(60726)}})(s):s.fieldFilter!==void 0?(function(i){return Ce.create(La(i.fieldFilter.field),(function(l){switch(l){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return wt(58110);default:return wt(50506)}})(i.fieldFilter.op),i.fieldFilter.value)})(s):s.compositeFilter!==void 0?(function(i){return zs.create(i.compositeFilter.filters.map((a=>zE(a))),(function(l){switch(l){case"AND":return"and";case"OR":return"or";default:return wt(1026)}})(i.compositeFilter.op))})(s):wt(30097,{filter:s})}function La(s){return Ue.fromServerFormat(s.fieldPath)}function Z1(s){const t=[];return s.fields.forEach((i=>t.push(i.canonicalString()))),{fieldPaths:t}}function J1(s){return s.length>=4&&s.get(0)==="projects"&&s.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W1{constructor(t){this.yt=t}}function tw(s){const t=$1({parent:s.parent,structuredQuery:s.structuredQuery});return s.limitType==="LAST"?zd(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ew{constructor(){this.Cn=new nw}addToCollectionParentIndex(t,i){return this.Cn.add(i),Y.resolve()}getCollectionParents(t,i){return Y.resolve(this.Cn.getEntries(i))}addFieldIndex(t,i){return Y.resolve()}deleteFieldIndex(t,i){return Y.resolve()}deleteAllFieldIndexes(t){return Y.resolve()}createTargetIndexes(t,i){return Y.resolve()}getDocumentsMatchingTarget(t,i){return Y.resolve(null)}getIndexType(t,i){return Y.resolve(0)}getFieldIndexes(t,i){return Y.resolve([])}getNextCollectionGroupToUpdate(t){return Y.resolve(null)}getMinOffset(t,i){return Y.resolve(Ls.min())}getMinOffsetFromCollectionGroup(t,i){return Y.resolve(Ls.min())}updateCollectionGroup(t,i,a){return Y.resolve()}updateIndexEntries(t,i){return Y.resolve()}}class nw{constructor(){this.index={}}add(t){const i=t.lastSegment(),a=t.popLast(),l=this.index[i]||new Pe(se.comparator),h=!l.has(a);return this.index[i]=l.add(a),h}has(t){const i=t.lastSegment(),a=t.popLast(),l=this.index[i];return l&&l.has(a)}getEntries(t){return(this.index[t]||new Pe(se.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z_={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},BE=41943040;class nn{static withCacheSize(t){return new nn(t,nn.DEFAULT_COLLECTION_PERCENTILE,nn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,i,a){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=i,this.maximumSequenceNumbersToCollect=a}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */nn.DEFAULT_COLLECTION_PERCENTILE=10,nn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,nn.DEFAULT=new nn(BE,nn.DEFAULT_COLLECTION_PERCENTILE,nn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),nn.DISABLED=new nn(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xa{constructor(t){this.ar=t}next(){return this.ar+=2,this.ar}static ur(){return new Xa(0)}static cr(){return new Xa(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B_="LruGarbageCollector",iw=1048576;function j_([s,t],[i,a]){const l=Ut(s,i);return l===0?Ut(t,a):l}class sw{constructor(t){this.Ir=t,this.buffer=new Pe(j_),this.Er=0}dr(){return++this.Er}Ar(t){const i=[t,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(i);else{const a=this.buffer.last();j_(i,a)<0&&(this.buffer=this.buffer.delete(a).add(i))}}get maxValue(){return this.buffer.last()[0]}}class rw{constructor(t,i,a){this.garbageCollector=t,this.asyncQueue=i,this.localStore=a,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(t){rt(B_,`Garbage collection scheduled in ${t}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(i){Il(i)?rt(B_,"Ignoring IndexedDB error during garbage collection: ",i):await im(i)}await this.Vr(3e5)}))}}class aw{constructor(t,i){this.mr=t,this.params=i}calculateTargetCount(t,i){return this.mr.gr(t).next((a=>Math.floor(i/100*a)))}nthSequenceNumber(t,i){if(i===0)return Y.resolve(sm.ce);const a=new sw(i);return this.mr.forEachTarget(t,(l=>a.Ar(l.sequenceNumber))).next((()=>this.mr.pr(t,(l=>a.Ar(l))))).next((()=>a.maxValue))}removeTargets(t,i,a){return this.mr.removeTargets(t,i,a)}removeOrphanedDocuments(t,i){return this.mr.removeOrphanedDocuments(t,i)}collect(t,i){return this.params.cacheSizeCollectionThreshold===-1?(rt("LruGarbageCollector","Garbage collection skipped; disabled"),Y.resolve(z_)):this.getCacheSize(t).next((a=>a<this.params.cacheSizeCollectionThreshold?(rt("LruGarbageCollector",`Garbage collection skipped; Cache size ${a} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),z_):this.yr(t,i)))}getCacheSize(t){return this.mr.getCacheSize(t)}yr(t,i){let a,l,h,d,p,_,v;const A=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next((I=>(I>this.params.maximumSequenceNumbersToCollect?(rt("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${I}`),l=this.params.maximumSequenceNumbersToCollect):l=I,d=Date.now(),this.nthSequenceNumber(t,l)))).next((I=>(a=I,p=Date.now(),this.removeTargets(t,a,i)))).next((I=>(h=I,_=Date.now(),this.removeOrphanedDocuments(t,a)))).next((I=>(v=Date.now(),Pa()<=Ot.DEBUG&&rt("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${d-A}ms
	Determined least recently used ${l} in `+(p-d)+`ms
	Removed ${h} targets in `+(_-p)+`ms
	Removed ${I} documents in `+(v-_)+`ms
Total Duration: ${v-A}ms`),Y.resolve({didRun:!0,sequenceNumbersCollected:l,targetsRemoved:h,documentsRemoved:I}))))}}function ow(s,t){return new aw(s,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lw{constructor(){this.changes=new Hr((t=>t.toString()),((t,i)=>t.isEqual(i))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,i){this.assertNotApplied(),this.changes.set(t,Hn.newInvalidDocument(t).setReadTime(i))}getEntry(t,i){this.assertNotApplied();const a=this.changes.get(i);return a!==void 0?Y.resolve(a):this.getFromCache(t,i)}getEntries(t,i){return this.getAllFromCache(t,i)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uw{constructor(t,i){this.overlayedDocument=t,this.mutatedFields=i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cw{constructor(t,i,a,l){this.remoteDocumentCache=t,this.mutationQueue=i,this.documentOverlayCache=a,this.indexManager=l}getDocument(t,i){let a=null;return this.documentOverlayCache.getOverlay(t,i).next((l=>(a=l,this.remoteDocumentCache.getEntry(t,i)))).next((l=>(a!==null&&gl(a.mutation,l,Yn.empty(),ee.now()),l)))}getDocuments(t,i){return this.remoteDocumentCache.getEntries(t,i).next((a=>this.getLocalViewOfDocuments(t,a,Ge()).next((()=>a))))}getLocalViewOfDocuments(t,i,a=Ge()){const l=Ir();return this.populateOverlays(t,l,i).next((()=>this.computeViews(t,i,l,a).next((h=>{let d=ic();return h.forEach(((p,_)=>{d=d.insert(p,_.overlayedDocument)})),d}))))}getOverlayedDocuments(t,i){const a=Ir();return this.populateOverlays(t,a,i).next((()=>this.computeViews(t,i,a,Ge())))}populateOverlays(t,i,a){const l=[];return a.forEach((h=>{i.has(h)||l.push(h)})),this.documentOverlayCache.getOverlays(t,l).next((h=>{h.forEach(((d,p)=>{i.set(d,p)}))}))}computeViews(t,i,a,l){let h=Rc();const d=ml(),p=(function(){return ml()})();return i.forEach(((_,v)=>{const A=a.get(v.key);l.has(v.key)&&(A===void 0||A.mutation instanceof qr)?h=h.insert(v.key,v):A!==void 0?(d.set(v.key,A.mutation.getFieldMask()),gl(A.mutation,v,A.mutation.getFieldMask(),ee.now())):d.set(v.key,Yn.empty())})),this.recalculateAndSaveOverlays(t,h).next((_=>(_.forEach(((v,A)=>d.set(v,A))),i.forEach(((v,A)=>p.set(v,new uw(A,d.get(v)??null)))),p)))}recalculateAndSaveOverlays(t,i){const a=ml();let l=new on(((d,p)=>d-p)),h=Ge();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,i).next((d=>{for(const p of d)p.keys().forEach((_=>{const v=i.get(_);if(v===null)return;let A=a.get(_)||Yn.empty();A=p.applyToLocalView(v,A),a.set(_,A);const I=(l.get(p.batchId)||Ge()).add(_);l=l.insert(p.batchId,I)}))})).next((()=>{const d=[],p=l.getReverseIterator();for(;p.hasNext();){const _=p.getNext(),v=_.key,A=_.value,I=DE();A.forEach((k=>{if(!h.has(k)){const Q=kE(i.get(k),a.get(k));Q!==null&&I.set(k,Q),h=h.add(k)}})),d.push(this.documentOverlayCache.saveOverlays(t,v,I))}return Y.waitFor(d)})).next((()=>a))}recalculateAndSaveOverlaysForDocumentKeys(t,i){return this.remoteDocumentCache.getEntries(t,i).next((a=>this.recalculateAndSaveOverlays(t,a)))}getDocumentsMatchingQuery(t,i,a,l){return(function(d){return At.isDocumentKey(d.path)&&d.collectionGroup===null&&d.filters.length===0})(i)?this.getDocumentsMatchingDocumentQuery(t,i.path):E1(i)?this.getDocumentsMatchingCollectionGroupQuery(t,i,a,l):this.getDocumentsMatchingCollectionQuery(t,i,a,l)}getNextDocuments(t,i,a,l){return this.remoteDocumentCache.getAllFromCollectionGroup(t,i,a,l).next((h=>{const d=l-h.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,i,a.largestBatchId,l-h.size):Y.resolve(Ir());let p=El,_=h;return d.next((v=>Y.forEach(v,((A,I)=>(p<I.largestBatchId&&(p=I.largestBatchId),h.get(A)?Y.resolve():this.remoteDocumentCache.getEntry(t,A).next((k=>{_=_.insert(A,k)}))))).next((()=>this.populateOverlays(t,v,h))).next((()=>this.computeViews(t,_,v,Ge()))).next((A=>({batchId:p,changes:CE(A)})))))}))}getDocumentsMatchingDocumentQuery(t,i){return this.getDocument(t,new At(i)).next((a=>{let l=ic();return a.isFoundDocument()&&(l=l.insert(a.key,a)),l}))}getDocumentsMatchingCollectionGroupQuery(t,i,a,l){const h=i.collectionGroup;let d=ic();return this.indexManager.getCollectionParents(t,h).next((p=>Y.forEach(p,(_=>{const v=(function(I,k){return new Yc(k,null,I.explicitOrderBy.slice(),I.filters.slice(),I.limit,I.limitType,I.startAt,I.endAt)})(i,_.child(h));return this.getDocumentsMatchingCollectionQuery(t,v,a,l).next((A=>{A.forEach(((I,k)=>{d=d.insert(I,k)}))}))})).next((()=>d))))}getDocumentsMatchingCollectionQuery(t,i,a,l){let h;return this.documentOverlayCache.getOverlaysForCollection(t,i.path,a.largestBatchId).next((d=>(h=d,this.remoteDocumentCache.getDocumentsMatchingQuery(t,i,a,h,l)))).next((d=>{h.forEach(((_,v)=>{const A=v.getKey();d.get(A)===null&&(d=d.insert(A,Hn.newInvalidDocument(A)))}));let p=ic();return d.forEach(((_,v)=>{const A=h.get(_);A!==void 0&&gl(A.mutation,v,Yn.empty(),ee.now()),fm(i,v)&&(p=p.insert(_,v))})),p}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hw{constructor(t){this.serializer=t,this.Lr=new Map,this.kr=new Map}getBundleMetadata(t,i){return Y.resolve(this.Lr.get(i))}saveBundleMetadata(t,i){return this.Lr.set(i.id,(function(l){return{id:l.id,version:l.version,createTime:Ba(l.createTime)}})(i)),Y.resolve()}getNamedQuery(t,i){return Y.resolve(this.kr.get(i))}saveNamedQuery(t,i){return this.kr.set(i.name,(function(l){return{name:l.name,query:tw(l.bundledQuery),readTime:Ba(l.readTime)}})(i)),Y.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fw{constructor(){this.overlays=new on(At.comparator),this.qr=new Map}getOverlay(t,i){return Y.resolve(this.overlays.get(i))}getOverlays(t,i){const a=Ir();return Y.forEach(i,(l=>this.getOverlay(t,l).next((h=>{h!==null&&a.set(l,h)})))).next((()=>a))}saveOverlays(t,i,a){return a.forEach(((l,h)=>{this.St(t,i,h)})),Y.resolve()}removeOverlaysForBatchId(t,i,a){const l=this.qr.get(a);return l!==void 0&&(l.forEach((h=>this.overlays=this.overlays.remove(h))),this.qr.delete(a)),Y.resolve()}getOverlaysForCollection(t,i,a){const l=Ir(),h=i.length+1,d=new At(i.child("")),p=this.overlays.getIteratorFrom(d);for(;p.hasNext();){const _=p.getNext().value,v=_.getKey();if(!i.isPrefixOf(v.path))break;v.path.length===h&&_.largestBatchId>a&&l.set(_.getKey(),_)}return Y.resolve(l)}getOverlaysForCollectionGroup(t,i,a,l){let h=new on(((v,A)=>v-A));const d=this.overlays.getIterator();for(;d.hasNext();){const v=d.getNext().value;if(v.getKey().getCollectionGroup()===i&&v.largestBatchId>a){let A=h.get(v.largestBatchId);A===null&&(A=Ir(),h=h.insert(v.largestBatchId,A)),A.set(v.getKey(),v)}}const p=Ir(),_=h.getIterator();for(;_.hasNext()&&(_.getNext().value.forEach(((v,A)=>p.set(v,A))),!(p.size()>=l)););return Y.resolve(p)}St(t,i,a){const l=this.overlays.get(a.key);if(l!==null){const d=this.qr.get(l.largestBatchId).delete(a.key);this.qr.set(l.largestBatchId,d)}this.overlays=this.overlays.insert(a.key,new L1(i,a));let h=this.qr.get(i);h===void 0&&(h=Ge(),this.qr.set(i,h)),this.qr.set(i,h.add(a.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dw{constructor(){this.sessionToken=di.EMPTY_BYTE_STRING}getSessionToken(t){return Y.resolve(this.sessionToken)}setSessionToken(t,i){return this.sessionToken=i,Y.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gm{constructor(){this.Qr=new Pe(Ie.$r),this.Ur=new Pe(Ie.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(t,i){const a=new Ie(t,i);this.Qr=this.Qr.add(a),this.Ur=this.Ur.add(a)}Wr(t,i){t.forEach((a=>this.addReference(a,i)))}removeReference(t,i){this.Gr(new Ie(t,i))}zr(t,i){t.forEach((a=>this.removeReference(a,i)))}jr(t){const i=new At(new se([])),a=new Ie(i,t),l=new Ie(i,t+1),h=[];return this.Ur.forEachInRange([a,l],(d=>{this.Gr(d),h.push(d.key)})),h}Jr(){this.Qr.forEach((t=>this.Gr(t)))}Gr(t){this.Qr=this.Qr.delete(t),this.Ur=this.Ur.delete(t)}Hr(t){const i=new At(new se([])),a=new Ie(i,t),l=new Ie(i,t+1);let h=Ge();return this.Ur.forEachInRange([a,l],(d=>{h=h.add(d.key)})),h}containsKey(t){const i=new Ie(t,0),a=this.Qr.firstAfterOrEqual(i);return a!==null&&t.isEqual(a.key)}}class Ie{constructor(t,i){this.key=t,this.Yr=i}static $r(t,i){return At.comparator(t.key,i.key)||Ut(t.Yr,i.Yr)}static Kr(t,i){return Ut(t.Yr,i.Yr)||At.comparator(t.key,i.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mw{constructor(t,i){this.indexManager=t,this.referenceDelegate=i,this.mutationQueue=[],this.tr=1,this.Zr=new Pe(Ie.$r)}checkEmpty(t){return Y.resolve(this.mutationQueue.length===0)}addMutationBatch(t,i,a,l){const h=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const d=new P1(h,i,a,l);this.mutationQueue.push(d);for(const p of l)this.Zr=this.Zr.add(new Ie(p.key,h)),this.indexManager.addToCollectionParentIndex(t,p.key.path.popLast());return Y.resolve(d)}lookupMutationBatch(t,i){return Y.resolve(this.Xr(i))}getNextMutationBatchAfterBatchId(t,i){const a=i+1,l=this.ei(a),h=l<0?0:l;return Y.resolve(this.mutationQueue.length>h?this.mutationQueue[h]:null)}getHighestUnacknowledgedBatchId(){return Y.resolve(this.mutationQueue.length===0?rm:this.tr-1)}getAllMutationBatches(t){return Y.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,i){const a=new Ie(i,0),l=new Ie(i,Number.POSITIVE_INFINITY),h=[];return this.Zr.forEachInRange([a,l],(d=>{const p=this.Xr(d.Yr);h.push(p)})),Y.resolve(h)}getAllMutationBatchesAffectingDocumentKeys(t,i){let a=new Pe(Ut);return i.forEach((l=>{const h=new Ie(l,0),d=new Ie(l,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([h,d],(p=>{a=a.add(p.Yr)}))})),Y.resolve(this.ti(a))}getAllMutationBatchesAffectingQuery(t,i){const a=i.path,l=a.length+1;let h=a;At.isDocumentKey(h)||(h=h.child(""));const d=new Ie(new At(h),0);let p=new Pe(Ut);return this.Zr.forEachWhile((_=>{const v=_.key.path;return!!a.isPrefixOf(v)&&(v.length===l&&(p=p.add(_.Yr)),!0)}),d),Y.resolve(this.ti(p))}ti(t){const i=[];return t.forEach((a=>{const l=this.Xr(a);l!==null&&i.push(l)})),i}removeMutationBatch(t,i){oe(this.ni(i.batchId,"removed")===0,55003),this.mutationQueue.shift();let a=this.Zr;return Y.forEach(i.mutations,(l=>{const h=new Ie(l.key,i.batchId);return a=a.delete(h),this.referenceDelegate.markPotentiallyOrphaned(t,l.key)})).next((()=>{this.Zr=a}))}ir(t){}containsKey(t,i){const a=new Ie(i,0),l=this.Zr.firstAfterOrEqual(a);return Y.resolve(i.isEqual(l&&l.key))}performConsistencyCheck(t){return this.mutationQueue.length,Y.resolve()}ni(t,i){return this.ei(t)}ei(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Xr(t){const i=this.ei(t);return i<0||i>=this.mutationQueue.length?null:this.mutationQueue[i]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gw{constructor(t){this.ri=t,this.docs=(function(){return new on(At.comparator)})(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,i){const a=i.key,l=this.docs.get(a),h=l?l.size:0,d=this.ri(i);return this.docs=this.docs.insert(a,{document:i.mutableCopy(),size:d}),this.size+=d-h,this.indexManager.addToCollectionParentIndex(t,a.path.popLast())}removeEntry(t){const i=this.docs.get(t);i&&(this.docs=this.docs.remove(t),this.size-=i.size)}getEntry(t,i){const a=this.docs.get(i);return Y.resolve(a?a.document.mutableCopy():Hn.newInvalidDocument(i))}getEntries(t,i){let a=Rc();return i.forEach((l=>{const h=this.docs.get(l);a=a.insert(l,h?h.document.mutableCopy():Hn.newInvalidDocument(l))})),Y.resolve(a)}getDocumentsMatchingQuery(t,i,a,l){let h=Rc();const d=i.path,p=new At(d.child("__id-9223372036854775808__")),_=this.docs.getIteratorFrom(p);for(;_.hasNext();){const{key:v,value:{document:A}}=_.getNext();if(!d.isPrefixOf(v.path))break;v.path.length>d.length+1||Xb(Qb(A),a)<=0||(l.has(A.key)||fm(i,A))&&(h=h.insert(A.key,A.mutableCopy()))}return Y.resolve(h)}getAllFromCollectionGroup(t,i,a,l){wt(9500)}ii(t,i){return Y.forEach(this.docs,(a=>i(a)))}newChangeBuffer(t){return new pw(this)}getSize(t){return Y.resolve(this.size)}}class pw extends lw{constructor(t){super(),this.Nr=t}applyChanges(t){const i=[];return this.changes.forEach(((a,l)=>{l.isValidDocument()?i.push(this.Nr.addEntry(t,l)):this.Nr.removeEntry(a)})),Y.waitFor(i)}getFromCache(t,i){return this.Nr.getEntry(t,i)}getAllFromCache(t,i){return this.Nr.getEntries(t,i)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yw{constructor(t){this.persistence=t,this.si=new Hr((i=>cm(i)),hm),this.lastRemoteSnapshotVersion=te.min(),this.highestTargetId=0,this.oi=0,this._i=new gm,this.targetCount=0,this.ai=Xa.ur()}forEachTarget(t,i){return this.si.forEach(((a,l)=>i(l))),Y.resolve()}getLastRemoteSnapshotVersion(t){return Y.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return Y.resolve(this.oi)}allocateTargetId(t){return this.highestTargetId=this.ai.next(),Y.resolve(this.highestTargetId)}setTargetsMetadata(t,i,a){return a&&(this.lastRemoteSnapshotVersion=a),i>this.oi&&(this.oi=i),Y.resolve()}Pr(t){this.si.set(t.target,t);const i=t.targetId;i>this.highestTargetId&&(this.ai=new Xa(i),this.highestTargetId=i),t.sequenceNumber>this.oi&&(this.oi=t.sequenceNumber)}addTargetData(t,i){return this.Pr(i),this.targetCount+=1,Y.resolve()}updateTargetData(t,i){return this.Pr(i),Y.resolve()}removeTargetData(t,i){return this.si.delete(i.target),this._i.jr(i.targetId),this.targetCount-=1,Y.resolve()}removeTargets(t,i,a){let l=0;const h=[];return this.si.forEach(((d,p)=>{p.sequenceNumber<=i&&a.get(p.targetId)===null&&(this.si.delete(d),h.push(this.removeMatchingKeysForTargetId(t,p.targetId)),l++)})),Y.waitFor(h).next((()=>l))}getTargetCount(t){return Y.resolve(this.targetCount)}getTargetData(t,i){const a=this.si.get(i)||null;return Y.resolve(a)}addMatchingKeys(t,i,a){return this._i.Wr(i,a),Y.resolve()}removeMatchingKeys(t,i,a){this._i.zr(i,a);const l=this.persistence.referenceDelegate,h=[];return l&&i.forEach((d=>{h.push(l.markPotentiallyOrphaned(t,d))})),Y.waitFor(h)}removeMatchingKeysForTargetId(t,i){return this._i.jr(i),Y.resolve()}getMatchingKeysForTargetId(t,i){const a=this._i.Hr(i);return Y.resolve(a)}containsKey(t,i){return Y.resolve(this._i.containsKey(i))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jE{constructor(t,i){this.ui={},this.overlays={},this.ci=new sm(0),this.li=!1,this.li=!0,this.hi=new dw,this.referenceDelegate=t(this),this.Pi=new yw(this),this.indexManager=new ew,this.remoteDocumentCache=(function(l){return new gw(l)})((a=>this.referenceDelegate.Ti(a))),this.serializer=new W1(i),this.Ii=new hw(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let i=this.overlays[t.toKey()];return i||(i=new fw,this.overlays[t.toKey()]=i),i}getMutationQueue(t,i){let a=this.ui[t.toKey()];return a||(a=new mw(i,this.referenceDelegate),this.ui[t.toKey()]=a),a}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(t,i,a){rt("MemoryPersistence","Starting transaction:",t);const l=new _w(this.ci.next());return this.referenceDelegate.Ei(),a(l).next((h=>this.referenceDelegate.di(l).next((()=>h)))).toPromise().then((h=>(l.raiseOnCommittedEvent(),h)))}Ai(t,i){return Y.or(Object.values(this.ui).map((a=>()=>a.containsKey(t,i))))}}class _w extends Zb{constructor(t){super(),this.currentSequenceNumber=t}}class pm{constructor(t){this.persistence=t,this.Ri=new gm,this.Vi=null}static mi(t){return new pm(t)}get fi(){if(this.Vi)return this.Vi;throw wt(60996)}addReference(t,i,a){return this.Ri.addReference(a,i),this.fi.delete(a.toString()),Y.resolve()}removeReference(t,i,a){return this.Ri.removeReference(a,i),this.fi.add(a.toString()),Y.resolve()}markPotentiallyOrphaned(t,i){return this.fi.add(i.toString()),Y.resolve()}removeTarget(t,i){this.Ri.jr(i.targetId).forEach((l=>this.fi.add(l.toString())));const a=this.persistence.getTargetCache();return a.getMatchingKeysForTargetId(t,i.targetId).next((l=>{l.forEach((h=>this.fi.add(h.toString())))})).next((()=>a.removeTargetData(t,i)))}Ei(){this.Vi=new Set}di(t){const i=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Y.forEach(this.fi,(a=>{const l=At.fromPath(a);return this.gi(t,l).next((h=>{h||i.removeEntry(l,te.min())}))})).next((()=>(this.Vi=null,i.apply(t))))}updateLimboDocument(t,i){return this.gi(t,i).next((a=>{a?this.fi.delete(i.toString()):this.fi.add(i.toString())}))}Ti(t){return 0}gi(t,i){return Y.or([()=>Y.resolve(this.Ri.containsKey(i)),()=>this.persistence.getTargetCache().containsKey(t,i),()=>this.persistence.Ai(t,i)])}}class Dc{constructor(t,i){this.persistence=t,this.pi=new Hr((a=>t1(a.path)),((a,l)=>a.isEqual(l))),this.garbageCollector=ow(this,i)}static mi(t,i){return new Dc(t,i)}Ei(){}di(t){return Y.resolve()}forEachTarget(t,i){return this.persistence.getTargetCache().forEachTarget(t,i)}gr(t){const i=this.wr(t);return this.persistence.getTargetCache().getTargetCount(t).next((a=>i.next((l=>a+l))))}wr(t){let i=0;return this.pr(t,(a=>{i++})).next((()=>i))}pr(t,i){return Y.forEach(this.pi,((a,l)=>this.br(t,a,l).next((h=>h?Y.resolve():i(l)))))}removeTargets(t,i,a){return this.persistence.getTargetCache().removeTargets(t,i,a)}removeOrphanedDocuments(t,i){let a=0;const l=this.persistence.getRemoteDocumentCache(),h=l.newChangeBuffer();return l.ii(t,(d=>this.br(t,d,i).next((p=>{p||(a++,h.removeEntry(d,te.min()))})))).next((()=>h.apply(t))).next((()=>a))}markPotentiallyOrphaned(t,i){return this.pi.set(i,t.currentSequenceNumber),Y.resolve()}removeTarget(t,i){const a=i.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,a)}addReference(t,i,a){return this.pi.set(a,t.currentSequenceNumber),Y.resolve()}removeReference(t,i,a){return this.pi.set(a,t.currentSequenceNumber),Y.resolve()}updateLimboDocument(t,i){return this.pi.set(i,t.currentSequenceNumber),Y.resolve()}Ti(t){let i=t.key.toString().length;return t.isFoundDocument()&&(i+=cc(t.data.value)),i}br(t,i,a){return Y.or([()=>this.persistence.Ai(t,i),()=>this.persistence.getTargetCache().containsKey(t,i),()=>{const l=this.pi.get(i);return Y.resolve(l!==void 0&&l>a)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ym{constructor(t,i,a,l){this.targetId=t,this.fromCache=i,this.Es=a,this.ds=l}static As(t,i){let a=Ge(),l=Ge();for(const h of i.docChanges)switch(h.type){case 0:a=a.add(h.doc.key);break;case 1:l=l.add(h.doc.key)}return new ym(t,i.fromCache,a,l)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vw{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ew{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return mS()?8:Jb(Ye())>0?6:4})()}initialize(t,i){this.ps=t,this.indexManager=i,this.Rs=!0}getDocumentsMatchingQuery(t,i,a,l){const h={result:null};return this.ys(t,i).next((d=>{h.result=d})).next((()=>{if(!h.result)return this.ws(t,i,l,a).next((d=>{h.result=d}))})).next((()=>{if(h.result)return;const d=new vw;return this.Ss(t,i,d).next((p=>{if(h.result=p,this.Vs)return this.bs(t,i,d,p.size)}))})).next((()=>h.result))}bs(t,i,a,l){return a.documentReadCount<this.fs?(Pa()<=Ot.DEBUG&&rt("QueryEngine","SDK will not create cache indexes for query:",ul(i),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),Y.resolve()):(Pa()<=Ot.DEBUG&&rt("QueryEngine","Query:",ul(i),"scans",a.documentReadCount,"local documents and returns",l,"documents as results."),a.documentReadCount>this.gs*l?(Pa()<=Ot.DEBUG&&rt("QueryEngine","The SDK decides to create cache indexes for query:",ul(i),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Or(i))):Y.resolve())}ys(t,i){if(V_(i))return Y.resolve(null);let a=Or(i);return this.indexManager.getIndexType(t,a).next((l=>l===0?null:(i.limit!==null&&l===1&&(i=zd(i,null,"F"),a=Or(i)),this.indexManager.getDocumentsMatchingTarget(t,a).next((h=>{const d=Ge(...h);return this.ps.getDocuments(t,d).next((p=>this.indexManager.getMinOffset(t,a).next((_=>{const v=this.Ds(i,p);return this.Cs(i,v,d,_.readTime)?this.ys(t,zd(i,null,"F")):this.vs(t,v,i,_)}))))})))))}ws(t,i,a,l){return V_(i)||l.isEqual(te.min())?Y.resolve(null):this.ps.getDocuments(t,a).next((h=>{const d=this.Ds(i,h);return this.Cs(i,d,a,l)?Y.resolve(null):(Pa()<=Ot.DEBUG&&rt("QueryEngine","Re-using previous result from %s to execute query: %s",l.toString(),ul(i)),this.vs(t,d,i,Kb(l,El)).next((p=>p)))}))}Ds(t,i){let a=new Pe(A1(t));return i.forEach(((l,h)=>{fm(t,h)&&(a=a.add(h))})),a}Cs(t,i,a,l){if(t.limit===null)return!1;if(a.size!==i.size)return!0;const h=t.limitType==="F"?i.last():i.first();return!!h&&(h.hasPendingWrites||h.version.compareTo(l)>0)}Ss(t,i,a){return Pa()<=Ot.DEBUG&&rt("QueryEngine","Using full collection scan to execute query:",ul(i)),this.ps.getDocumentsMatchingQuery(t,i,Ls.min(),a)}vs(t,i,a,l){return this.ps.getDocumentsMatchingQuery(t,a,l).next((h=>(i.forEach((d=>{h=h.insert(d.key,d)})),h)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tw="LocalStore";class Aw{constructor(t,i,a,l){this.persistence=t,this.Fs=i,this.serializer=l,this.Ms=new on(Ut),this.xs=new Hr((h=>cm(h)),hm),this.Os=new Map,this.Ns=t.getRemoteDocumentCache(),this.Pi=t.getTargetCache(),this.Ii=t.getBundleCache(),this.Bs(a)}Bs(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new cw(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(i=>t.collect(i,this.Ms)))}}function Sw(s,t,i,a){return new Aw(s,t,i,a)}async function HE(s,t){const i=Xt(s);return await i.persistence.runTransaction("Handle user change","readonly",(a=>{let l;return i.mutationQueue.getAllMutationBatches(a).next((h=>(l=h,i.Bs(t),i.mutationQueue.getAllMutationBatches(a)))).next((h=>{const d=[],p=[];let _=Ge();for(const v of l){d.push(v.batchId);for(const A of v.mutations)_=_.add(A.key)}for(const v of h){p.push(v.batchId);for(const A of v.mutations)_=_.add(A.key)}return i.localDocuments.getDocuments(a,_).next((v=>({Ls:v,removedBatchIds:d,addedBatchIds:p})))}))}))}function bw(s,t){const i=Xt(s);return i.persistence.runTransaction("Acknowledge batch","readwrite-primary",(a=>{const l=t.batch.keys(),h=i.Ns.newChangeBuffer({trackRemovals:!0});return(function(p,_,v,A){const I=v.batch,k=I.keys();let Q=Y.resolve();return k.forEach(($=>{Q=Q.next((()=>A.getEntry(_,$))).next((it=>{const Z=v.docVersions.get($);oe(Z!==null,48541),it.version.compareTo(Z)<0&&(I.applyToRemoteDocument(it,v),it.isValidDocument()&&(it.setReadTime(v.commitVersion),A.addEntry(it)))}))})),Q.next((()=>p.mutationQueue.removeMutationBatch(_,I)))})(i,a,t,h).next((()=>h.apply(a))).next((()=>i.mutationQueue.performConsistencyCheck(a))).next((()=>i.documentOverlayCache.removeOverlaysForBatchId(a,l,t.batch.batchId))).next((()=>i.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(a,(function(p){let _=Ge();for(let v=0;v<p.mutationResults.length;++v)p.mutationResults[v].transformResults.length>0&&(_=_.add(p.batch.mutations[v].key));return _})(t)))).next((()=>i.localDocuments.getDocuments(a,l)))}))}function ww(s){const t=Xt(s);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(i=>t.Pi.getLastRemoteSnapshotVersion(i)))}function Rw(s,t){const i=Xt(s);return i.persistence.runTransaction("Get next mutation batch","readonly",(a=>(t===void 0&&(t=rm),i.mutationQueue.getNextMutationBatchAfterBatchId(a,t))))}class H_{constructor(){this.activeTargetIds=C1()}zs(t){this.activeTargetIds=this.activeTargetIds.add(t)}js(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Gs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Iw{constructor(){this.Mo=new H_,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,i,a){}addLocalQueryTarget(t,i=!0){return i&&this.Mo.zs(t),this.xo[t]||"not-current"}updateQueryState(t,i,a){this.xo[t]=i}removeLocalQueryTarget(t){this.Mo.js(t)}isLocalQueryTarget(t){return this.Mo.activeTargetIds.has(t)}clearQueryState(t){delete this.xo[t]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(t){return this.Mo.activeTargetIds.has(t)}start(){return this.Mo=new H_,Promise.resolve()}handleUserChange(t,i,a){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cw{Oo(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q_="ConnectivityMonitor";class G_{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(t){this.qo.push(t)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){rt(q_,"Network connectivity changed: AVAILABLE");for(const t of this.qo)t(0)}ko(){rt(q_,"Network connectivity changed: UNAVAILABLE");for(const t of this.qo)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sc=null;function qd(){return sc===null?sc=(function(){return 268435456+Math.round(2147483648*Math.random())})():sc++,"0x"+sc.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yd="RestConnection",Dw={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Ow{get $o(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const i=t.ssl?"https":"http",a=encodeURIComponent(this.databaseId.projectId),l=encodeURIComponent(this.databaseId.database);this.Uo=i+"://"+t.host,this.Ko=`projects/${a}/databases/${l}`,this.Wo=this.databaseId.database===Ac?`project_id=${a}`:`project_id=${a}&database_id=${l}`}Go(t,i,a,l,h){const d=qd(),p=this.zo(t,i.toUriEncodedString());rt(yd,`Sending RPC '${t}' ${d}:`,p,a);const _={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(_,l,h);const{host:v}=new URL(p),A=zr(v);return this.Jo(t,p,_,a,A).then((I=>(rt(yd,`Received RPC '${t}' ${d}: `,I),I)),(I=>{throw Fc(yd,`RPC '${t}' ${d} failed with error: `,I,"url: ",p,"request:",a),I}))}Ho(t,i,a,l,h,d){return this.Go(t,i,a,l,h)}jo(t,i,a){t["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Za})(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),i&&i.headers.forEach(((l,h)=>t[h]=l)),a&&a.headers.forEach(((l,h)=>t[h]=l))}zo(t,i){const a=Dw[t];return`${this.Uo}/v1/${i}:${a}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nw{constructor(t){this.Yo=t.Yo,this.Zo=t.Zo}Xo(t){this.e_=t}t_(t){this.n_=t}r_(t){this.i_=t}onMessage(t){this.s_=t}close(){this.Zo()}send(t){this.Yo(t)}o_(){this.e_()}__(){this.n_()}a_(t){this.i_(t)}u_(t){this.s_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const He="WebChannelConnection";class Mw extends Ow{constructor(t){super(t),this.c_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Jo(t,i,a,l,h){const d=qd();return new Promise(((p,_)=>{const v=new tE;v.setWithCredentials(!0),v.listenOnce(eE.COMPLETE,(()=>{try{switch(v.getLastErrorCode()){case uc.NO_ERROR:const I=v.getResponseJson();rt(He,`XHR for RPC '${t}' ${d} received:`,JSON.stringify(I)),p(I);break;case uc.TIMEOUT:rt(He,`RPC '${t}' ${d} timed out`),_(new ct(X.DEADLINE_EXCEEDED,"Request time out"));break;case uc.HTTP_ERROR:const k=v.getStatus();if(rt(He,`RPC '${t}' ${d} failed with status:`,k,"response text:",v.getResponseText()),k>0){let Q=v.getResponseJson();Array.isArray(Q)&&(Q=Q[0]);const $=Q==null?void 0:Q.error;if($&&$.status&&$.message){const it=(function(Et){const _t=Et.toLowerCase().replace(/_/g,"-");return Object.values(X).indexOf(_t)>=0?_t:X.UNKNOWN})($.status);_(new ct(it,$.message))}else _(new ct(X.UNKNOWN,"Server responded with status "+v.getStatus()))}else _(new ct(X.UNAVAILABLE,"Connection failed."));break;default:wt(9055,{l_:t,streamId:d,h_:v.getLastErrorCode(),P_:v.getLastError()})}}finally{rt(He,`RPC '${t}' ${d} completed.`)}}));const A=JSON.stringify(l);rt(He,`RPC '${t}' ${d} sending request:`,l),v.send(i,"POST",A,a,15)}))}T_(t,i,a){const l=qd(),h=[this.Uo,"/","google.firestore.v1.Firestore","/",t,"/channel"],d=sE(),p=iE(),_={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},v=this.longPollingOptions.timeoutSeconds;v!==void 0&&(_.longPollingTimeout=Math.round(1e3*v)),this.useFetchStreams&&(_.useFetchStreams=!0),this.jo(_.initMessageHeaders,i,a),_.encodeInitMessageHeaders=!0;const A=h.join("");rt(He,`Creating RPC '${t}' stream ${l}: ${A}`,_);const I=d.createWebChannel(A,_);this.I_(I);let k=!1,Q=!1;const $=new Nw({Yo:Z=>{Q?rt(He,`Not sending because RPC '${t}' stream ${l} is closed:`,Z):(k||(rt(He,`Opening RPC '${t}' stream ${l} transport.`),I.open(),k=!0),rt(He,`RPC '${t}' stream ${l} sending:`,Z),I.send(Z))},Zo:()=>I.close()}),it=(Z,Et,_t)=>{Z.listen(Et,(ht=>{try{_t(ht)}catch(vt){setTimeout((()=>{throw vt}),0)}}))};return it(I,cl.EventType.OPEN,(()=>{Q||(rt(He,`RPC '${t}' stream ${l} transport opened.`),$.o_())})),it(I,cl.EventType.CLOSE,(()=>{Q||(Q=!0,rt(He,`RPC '${t}' stream ${l} transport closed`),$.a_(),this.E_(I))})),it(I,cl.EventType.ERROR,(Z=>{Q||(Q=!0,Fc(He,`RPC '${t}' stream ${l} transport errored. Name:`,Z.name,"Message:",Z.message),$.a_(new ct(X.UNAVAILABLE,"The operation could not be completed")))})),it(I,cl.EventType.MESSAGE,(Z=>{var Et;if(!Q){const _t=Z.data[0];oe(!!_t,16349);const ht=_t,vt=(ht==null?void 0:ht.error)||((Et=ht[0])==null?void 0:Et.error);if(vt){rt(He,`RPC '${t}' stream ${l} received error:`,vt);const lt=vt.status;let St=(function(R){const M=pe[R];if(M!==void 0)return B1(M)})(lt),C=vt.message;St===void 0&&(St=X.INTERNAL,C="Unknown error status: "+lt+" with message "+vt.message),Q=!0,$.a_(new ct(St,C)),I.close()}else rt(He,`RPC '${t}' stream ${l} received:`,_t),$.u_(_t)}})),it(p,nE.STAT_EVENT,(Z=>{Z.stat===Vd.PROXY?rt(He,`RPC '${t}' stream ${l} detected buffering proxy`):Z.stat===Vd.NOPROXY&&rt(He,`RPC '${t}' stream ${l} detected no buffering proxy`)})),setTimeout((()=>{$.__()}),0),$}terminate(){this.c_.forEach((t=>t.close())),this.c_=[]}I_(t){this.c_.push(t)}E_(t){this.c_=this.c_.filter((i=>i===t))}}function _d(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xc(s){return new j1(s,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qE{constructor(t,i,a=1e3,l=1.5,h=6e4){this.Mi=t,this.timerId=i,this.d_=a,this.A_=l,this.R_=h,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(t){this.cancel();const i=Math.floor(this.V_+this.y_()),a=Math.max(0,Date.now()-this.f_),l=Math.max(0,i-a);l>0&&rt("ExponentialBackoff",`Backing off for ${l} ms (base delay: ${this.V_} ms, delay with jitter: ${i} ms, last attempt: ${a} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,l,(()=>(this.f_=Date.now(),t()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F_="PersistentStream";class Vw{constructor(t,i,a,l,h,d,p,_){this.Mi=t,this.S_=a,this.b_=l,this.connection=h,this.authCredentialsProvider=d,this.appCheckCredentialsProvider=p,this.listener=_,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new qE(t,i)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(t){this.Q_(),this.stream.send(t)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,i){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,t!==4?this.M_.reset():i&&i.code===X.RESOURCE_EXHAUSTED?(Vr(i.toString()),Vr("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):i&&i.code===X.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.r_(i)}K_(){}auth(){this.state=1;const t=this.W_(this.D_),i=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([a,l])=>{this.D_===i&&this.G_(a,l)}),(a=>{t((()=>{const l=new ct(X.UNKNOWN,"Fetching auth token failed: "+a.message);return this.z_(l)}))}))}G_(t,i){const a=this.W_(this.D_);this.stream=this.j_(t,i),this.stream.Xo((()=>{a((()=>this.listener.Xo()))})),this.stream.t_((()=>{a((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((l=>{a((()=>this.z_(l)))})),this.stream.onMessage((l=>{a((()=>++this.F_==1?this.J_(l):this.onNext(l)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(t){return rt(F_,`close with error: ${t}`),this.stream=null,this.close(4,t)}W_(t){return i=>{this.Mi.enqueueAndForget((()=>this.D_===t?i():(rt(F_,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class xw extends Vw{constructor(t,i,a,l,h,d){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",i,a,l,d),this.serializer=h}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(t,i){return this.connection.T_("Write",t,i)}J_(t){return oe(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,oe(!t.writeResults||t.writeResults.length===0,55816),this.listener.ta()}onNext(t){oe(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.M_.reset();const i=X1(t.writeResults,t.commitTime),a=Ba(t.commitTime);return this.listener.na(a,i)}ra(){const t={};t.database=Y1(this.serializer),this.q_(t)}ea(t){const i={streamToken:this.lastStreamToken,writes:t.map((a=>Q1(this.serializer,a)))};this.q_(i)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kw{}class Uw extends kw{constructor(t,i,a,l){super(),this.authCredentials=t,this.appCheckCredentials=i,this.connection=a,this.serializer=l,this.ia=!1}sa(){if(this.ia)throw new ct(X.FAILED_PRECONDITION,"The client has already been terminated.")}Go(t,i,a,l){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([h,d])=>this.connection.Go(t,jd(i,a),l,h,d))).catch((h=>{throw h.name==="FirebaseError"?(h.code===X.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new ct(X.UNKNOWN,h.toString())}))}Ho(t,i,a,l,h){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([d,p])=>this.connection.Ho(t,jd(i,a),l,d,p,h))).catch((d=>{throw d.name==="FirebaseError"?(d.code===X.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),d):new ct(X.UNKNOWN,d.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class Pw{constructor(t,i){this.asyncQueue=t,this.onlineStateHandler=i,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(t){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ca("Offline")))}set(t){this.Pa(),this.oa=0,t==="Online"&&(this.aa=!1),this.ca(t)}ca(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}la(t){const i=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Vr(i),this.aa=!1):rt("OnlineStateTracker",i)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dl="RemoteStore";class Lw{constructor(t,i,a,l,h){this.localStore=t,this.datastore=i,this.asyncQueue=a,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=h,this.Aa.Oo((d=>{a.enqueueAndForget((async()=>{Nl(this)&&(rt(Dl,"Restarting streams for network reachability change."),await(async function(_){const v=Xt(_);v.Ea.add(4),await Ol(v),v.Ra.set("Unknown"),v.Ea.delete(4),await $c(v)})(this))}))})),this.Ra=new Pw(a,l)}}async function $c(s){if(Nl(s))for(const t of s.da)await t(!0)}async function Ol(s){for(const t of s.da)await t(!1)}function Nl(s){return Xt(s).Ea.size===0}async function GE(s,t,i){if(!Il(t))throw t;s.Ea.add(1),await Ol(s),s.Ra.set("Offline"),i||(i=()=>ww(s.localStore)),s.asyncQueue.enqueueRetryable((async()=>{rt(Dl,"Retrying IndexedDB access"),await i(),s.Ea.delete(1),await $c(s)}))}function FE(s,t){return t().catch((i=>GE(s,i,t)))}async function Zc(s){const t=Xt(s),i=Bs(t);let a=t.Ta.length>0?t.Ta[t.Ta.length-1].batchId:rm;for(;zw(t);)try{const l=await Rw(t.localStore,a);if(l===null){t.Ta.length===0&&i.L_();break}a=l.batchId,Bw(t,l)}catch(l){await GE(t,l)}YE(t)&&KE(t)}function zw(s){return Nl(s)&&s.Ta.length<10}function Bw(s,t){s.Ta.push(t);const i=Bs(s);i.O_()&&i.X_&&i.ea(t.mutations)}function YE(s){return Nl(s)&&!Bs(s).x_()&&s.Ta.length>0}function KE(s){Bs(s).start()}async function jw(s){Bs(s).ra()}async function Hw(s){const t=Bs(s);for(const i of s.Ta)t.ea(i.mutations)}async function qw(s,t,i){const a=s.Ta.shift(),l=mm.from(a,t,i);await FE(s,(()=>s.remoteSyncer.applySuccessfulWrite(l))),await Zc(s)}async function Gw(s,t){t&&Bs(s).X_&&await(async function(a,l){if((function(d){return z1(d)&&d!==X.ABORTED})(l.code)){const h=a.Ta.shift();Bs(a).B_(),await FE(a,(()=>a.remoteSyncer.rejectFailedWrite(h.batchId,l))),await Zc(a)}})(s,t),YE(s)&&KE(s)}async function Y_(s,t){const i=Xt(s);i.asyncQueue.verifyOperationInProgress(),rt(Dl,"RemoteStore received new credentials");const a=Nl(i);i.Ea.add(3),await Ol(i),a&&i.Ra.set("Unknown"),await i.remoteSyncer.handleCredentialChange(t),i.Ea.delete(3),await $c(i)}async function Fw(s,t){const i=Xt(s);t?(i.Ea.delete(2),await $c(i)):t||(i.Ea.add(2),await Ol(i),i.Ra.set("Unknown"))}function Bs(s){return s.fa||(s.fa=(function(i,a,l){const h=Xt(i);return h.sa(),new xw(a,h.connection,h.authCredentials,h.appCheckCredentials,h.serializer,l)})(s.datastore,s.asyncQueue,{Xo:()=>Promise.resolve(),t_:jw.bind(null,s),r_:Gw.bind(null,s),ta:Hw.bind(null,s),na:qw.bind(null,s)}),s.da.push((async t=>{t?(s.fa.B_(),await Zc(s)):(await s.fa.stop(),s.Ta.length>0&&(rt(Dl,`Stopping write stream with ${s.Ta.length} pending writes`),s.Ta=[]))}))),s.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _m{constructor(t,i,a,l,h){this.asyncQueue=t,this.timerId=i,this.targetTimeMs=a,this.op=l,this.removalCallback=h,this.deferred=new Dr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((d=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,i,a,l,h){const d=Date.now()+a,p=new _m(t,i,d,l,h);return p.start(a),p}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ct(X.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function QE(s,t){if(Vr("AsyncQueue",`${t}: ${s}`),Il(s))return new ct(X.UNAVAILABLE,`${t}: ${s}`);throw s}class Yw{constructor(){this.queries=K_(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(i,a){const l=Xt(i),h=l.queries;l.queries=K_(),h.forEach(((d,p)=>{for(const _ of p.Sa)_.onError(a)}))})(this,new ct(X.ABORTED,"Firestore shutting down"))}}function K_(){return new Hr((s=>RE(s)),wE)}function Kw(s){s.Ca.forEach((t=>{t.next()}))}var Q_,X_;(X_=Q_||(Q_={})).Ma="default",X_.Cache="cache";const Qw="SyncEngine";class Xw{constructor(t,i,a,l,h,d){this.localStore=t,this.remoteStore=i,this.eventManager=a,this.sharedClientState=l,this.currentUser=h,this.maxConcurrentLimboResolutions=d,this.Pu={},this.Tu=new Hr((p=>RE(p)),wE),this.Iu=new Map,this.Eu=new Set,this.du=new on(At.comparator),this.Au=new Map,this.Ru=new gm,this.Vu={},this.mu=new Map,this.fu=Xa.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function $w(s,t,i){const a=tR(s);try{const l=await(function(d,p){const _=Xt(d),v=ee.now(),A=p.reduce(((Q,$)=>Q.add($.key)),Ge());let I,k;return _.persistence.runTransaction("Locally write mutations","readwrite",(Q=>{let $=Rc(),it=Ge();return _.Ns.getEntries(Q,A).next((Z=>{$=Z,$.forEach(((Et,_t)=>{_t.isValidDocument()||(it=it.add(Et))}))})).next((()=>_.localDocuments.getOverlayedDocuments(Q,$))).next((Z=>{I=Z;const Et=[];for(const _t of p){const ht=k1(_t,I.get(_t.key).overlayedDocument);ht!=null&&Et.push(new qr(_t.key,ht,_E(ht.value.mapValue),Bi.exists(!0)))}return _.mutationQueue.addMutationBatch(Q,v,Et,p)})).next((Z=>{k=Z;const Et=Z.applyToLocalDocumentSet(I,it);return _.documentOverlayCache.saveOverlays(Q,Z.batchId,Et)}))})).then((()=>({batchId:k.batchId,changes:CE(I)})))})(a.localStore,t);a.sharedClientState.addPendingMutation(l.batchId),(function(d,p,_){let v=d.Vu[d.currentUser.toKey()];v||(v=new on(Ut)),v=v.insert(p,_),d.Vu[d.currentUser.toKey()]=v})(a,l.batchId,i),await Jc(a,l.changes),await Zc(a.remoteStore)}catch(l){const h=QE(l,"Failed to persist write");i.reject(h)}}function $_(s,t,i){const a=Xt(s);if(a.isPrimaryClient&&i===0||!a.isPrimaryClient&&i===1){const l=[];a.Tu.forEach(((h,d)=>{const p=d.view.va(t);p.snapshot&&l.push(p.snapshot)})),(function(d,p){const _=Xt(d);_.onlineState=p;let v=!1;_.queries.forEach(((A,I)=>{for(const k of I.Sa)k.va(p)&&(v=!0)})),v&&Kw(_)})(a.eventManager,t),l.length&&a.Pu.H_(l),a.onlineState=t,a.isPrimaryClient&&a.sharedClientState.setOnlineState(t)}}async function Zw(s,t){const i=Xt(s),a=t.batch.batchId;try{const l=await bw(i.localStore,t);$E(i,a,null),XE(i,a),i.sharedClientState.updateMutationState(a,"acknowledged"),await Jc(i,l)}catch(l){await im(l)}}async function Jw(s,t,i){const a=Xt(s);try{const l=await(function(d,p){const _=Xt(d);return _.persistence.runTransaction("Reject batch","readwrite-primary",(v=>{let A;return _.mutationQueue.lookupMutationBatch(v,p).next((I=>(oe(I!==null,37113),A=I.keys(),_.mutationQueue.removeMutationBatch(v,I)))).next((()=>_.mutationQueue.performConsistencyCheck(v))).next((()=>_.documentOverlayCache.removeOverlaysForBatchId(v,A,p))).next((()=>_.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(v,A))).next((()=>_.localDocuments.getDocuments(v,A)))}))})(a.localStore,t);$E(a,t,i),XE(a,t),a.sharedClientState.updateMutationState(t,"rejected",i),await Jc(a,l)}catch(l){await im(l)}}function XE(s,t){(s.mu.get(t)||[]).forEach((i=>{i.resolve()})),s.mu.delete(t)}function $E(s,t,i){const a=Xt(s);let l=a.Vu[a.currentUser.toKey()];if(l){const h=l.get(t);h&&(i?h.reject(i):h.resolve(),l=l.remove(t)),a.Vu[a.currentUser.toKey()]=l}}async function Jc(s,t,i){const a=Xt(s),l=[],h=[],d=[];a.Tu.isEmpty()||(a.Tu.forEach(((p,_)=>{d.push(a.pu(_,t,i).then((v=>{var A;if((v||i)&&a.isPrimaryClient){const I=v?!v.fromCache:(A=i==null?void 0:i.targetChanges.get(_.targetId))==null?void 0:A.current;a.sharedClientState.updateQueryState(_.targetId,I?"current":"not-current")}if(v){l.push(v);const I=ym.As(_.targetId,v);h.push(I)}})))})),await Promise.all(d),a.Pu.H_(l),await(async function(_,v){const A=Xt(_);try{await A.persistence.runTransaction("notifyLocalViewChanges","readwrite",(I=>Y.forEach(v,(k=>Y.forEach(k.Es,(Q=>A.persistence.referenceDelegate.addReference(I,k.targetId,Q))).next((()=>Y.forEach(k.ds,(Q=>A.persistence.referenceDelegate.removeReference(I,k.targetId,Q)))))))))}catch(I){if(!Il(I))throw I;rt(Tw,"Failed to update sequence numbers: "+I)}for(const I of v){const k=I.targetId;if(!I.fromCache){const Q=A.Ms.get(k),$=Q.snapshotVersion,it=Q.withLastLimboFreeSnapshotVersion($);A.Ms=A.Ms.insert(k,it)}}})(a.localStore,h))}async function Ww(s,t){const i=Xt(s);if(!i.currentUser.isEqual(t)){rt(Qw,"User change. New user:",t.toKey());const a=await HE(i.localStore,t);i.currentUser=t,(function(h,d){h.mu.forEach((p=>{p.forEach((_=>{_.reject(new ct(X.CANCELLED,d))}))})),h.mu.clear()})(i,"'waitForPendingWrites' promise is rejected due to a user change."),i.sharedClientState.handleUserChange(t,a.removedBatchIds,a.addedBatchIds),await Jc(i,a.Ls)}}function tR(s){const t=Xt(s);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Zw.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Jw.bind(null,t),t}class Oc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Xc(t.databaseInfo.databaseId),this.sharedClientState=this.Du(t),this.persistence=this.Cu(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Fu(t,this.localStore),this.indexBackfillerScheduler=this.Mu(t,this.localStore)}Fu(t,i){return null}Mu(t,i){return null}vu(t){return Sw(this.persistence,new Ew,t.initialUser,this.serializer)}Cu(t){return new jE(pm.mi,this.serializer)}Du(t){return new Iw}async terminate(){var t,i;(t=this.gcScheduler)==null||t.stop(),(i=this.indexBackfillerScheduler)==null||i.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Oc.provider={build:()=>new Oc};class eR extends Oc{constructor(t){super(),this.cacheSizeBytes=t}Fu(t,i){oe(this.persistence.referenceDelegate instanceof Dc,46915);const a=this.persistence.referenceDelegate.garbageCollector;return new rw(a,t.asyncQueue,i)}Cu(t){const i=this.cacheSizeBytes!==void 0?nn.withCacheSize(this.cacheSizeBytes):nn.DEFAULT;return new jE((a=>Dc.mi(a,i)),this.serializer)}}class Gd{async initialize(t,i){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(i),this.remoteStore=this.createRemoteStore(i),this.eventManager=this.createEventManager(i),this.syncEngine=this.createSyncEngine(i,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=a=>$_(this.syncEngine,a,1),this.remoteStore.remoteSyncer.handleCredentialChange=Ww.bind(null,this.syncEngine),await Fw(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return(function(){return new Yw})()}createDatastore(t){const i=Xc(t.databaseInfo.databaseId),a=(function(h){return new Mw(h)})(t.databaseInfo);return(function(h,d,p,_){return new Uw(h,d,p,_)})(t.authCredentials,t.appCheckCredentials,a,i)}createRemoteStore(t){return(function(a,l,h,d,p){return new Lw(a,l,h,d,p)})(this.localStore,this.datastore,t.asyncQueue,(i=>$_(this.syncEngine,i,0)),(function(){return G_.v()?new G_:new Cw})())}createSyncEngine(t,i){return(function(l,h,d,p,_,v,A){const I=new Xw(l,h,d,p,_,v);return A&&(I.gu=!0),I})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,i)}async terminate(){var t,i;await(async function(l){const h=Xt(l);rt(Dl,"RemoteStore shutting down."),h.Ea.add(5),await Ol(h),h.Aa.shutdown(),h.Ra.set("Unknown")})(this.remoteStore),(t=this.datastore)==null||t.terminate(),(i=this.eventManager)==null||i.terminate()}}Gd.provider={build:()=>new Gd};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const js="FirestoreClient";class nR{constructor(t,i,a,l,h){this.authCredentials=t,this.appCheckCredentials=i,this.asyncQueue=a,this.databaseInfo=l,this.user=qe.UNAUTHENTICATED,this.clientId=em.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=h,this.authCredentials.start(a,(async d=>{rt(js,"Received user=",d.uid),await this.authCredentialListener(d),this.user=d})),this.appCheckCredentials.start(a,(d=>(rt(js,"Received new app check token=",d),this.appCheckCredentialListener(d,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Dr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(i){const a=QE(i,"Failed to shutdown persistence");t.reject(a)}})),t.promise}}async function vd(s,t){s.asyncQueue.verifyOperationInProgress(),rt(js,"Initializing OfflineComponentProvider");const i=s.configuration;await t.initialize(i);let a=i.initialUser;s.setCredentialChangeListener((async l=>{a.isEqual(l)||(await HE(t.localStore,l),a=l)})),t.persistence.setDatabaseDeletedListener((()=>s.terminate())),s._offlineComponents=t}async function Z_(s,t){s.asyncQueue.verifyOperationInProgress();const i=await iR(s);rt(js,"Initializing OnlineComponentProvider"),await t.initialize(i,s.configuration),s.setCredentialChangeListener((a=>Y_(t.remoteStore,a))),s.setAppCheckTokenChangeListener(((a,l)=>Y_(t.remoteStore,l))),s._onlineComponents=t}async function iR(s){if(!s._offlineComponents)if(s._uninitializedComponentsProvider){rt(js,"Using user provided OfflineComponentProvider");try{await vd(s,s._uninitializedComponentsProvider._offline)}catch(t){const i=t;if(!(function(l){return l.name==="FirebaseError"?l.code===X.FAILED_PRECONDITION||l.code===X.UNIMPLEMENTED:!(typeof DOMException<"u"&&l instanceof DOMException)||l.code===22||l.code===20||l.code===11})(i))throw i;Fc("Error using user provided cache. Falling back to memory cache: "+i),await vd(s,new Oc)}}else rt(js,"Using default OfflineComponentProvider"),await vd(s,new eR(void 0));return s._offlineComponents}async function sR(s){return s._onlineComponents||(s._uninitializedComponentsProvider?(rt(js,"Using user provided OnlineComponentProvider"),await Z_(s,s._uninitializedComponentsProvider._online)):(rt(js,"Using default OnlineComponentProvider"),await Z_(s,new Gd))),s._onlineComponents}function rR(s){return sR(s).then((t=>t.syncEngine))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZE(s){const t={};return s.timeoutSeconds!==void 0&&(t.timeoutSeconds=s.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J_=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JE="firestore.googleapis.com",W_=!0;class tv{constructor(t){if(t.host===void 0){if(t.ssl!==void 0)throw new ct(X.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=JE,this.ssl=W_}else this.host=t.host,this.ssl=t.ssl??W_;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=BE;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<iw)throw new ct(X.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Yb("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ZE(t.experimentalLongPollingOptions??{}),(function(a){if(a.timeoutSeconds!==void 0){if(isNaN(a.timeoutSeconds))throw new ct(X.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (must not be NaN)`);if(a.timeoutSeconds<5)throw new ct(X.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (minimum allowed value is 5)`);if(a.timeoutSeconds>30)throw new ct(X.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(function(a,l){return a.timeoutSeconds===l.timeoutSeconds})(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Wc{constructor(t,i,a,l){this._authCredentials=t,this._appCheckCredentials=i,this._databaseId=a,this._app=l,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new tv({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ct(X.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new ct(X.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new tv(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=(function(a){if(!a)return new Ub;switch(a.type){case"firstParty":return new Bb(a.sessionIndex||"0",a.iamToken||null,a.authTokenFactory||null);case"provider":return a.client;default:throw new ct(X.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(i){const a=J_.get(i);a&&(rt("ComponentProvider","Removing Datastore"),J_.delete(i),a.terminate())})(this),Promise.resolve()}}function aR(s,t,i,a={}){var v;s=uE(s,Wc);const l=zr(t),h=s._getSettings(),d={...h,emulatorOptions:s._getEmulatorOptions()},p=`${t}:${i}`;l&&($d(`https://${p}`),Zd("Firestore",!0)),h.host!==JE&&h.host!==p&&Fc("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const _={...h,host:p,ssl:l,emulatorOptions:a};if(!Ps(_,d)&&(s._setSettings(_),a.mockUserToken)){let A,I;if(typeof a.mockUserToken=="string")A=a.mockUserToken,I=qe.MOCK_USER;else{A=Gv(a.mockUserToken,(v=s._app)==null?void 0:v.options.projectId);const k=a.mockUserToken.sub||a.mockUserToken.user_id;if(!k)throw new ct(X.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");I=new qe(k)}s._authCredentials=new Pb(new aE(A,I))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vm{constructor(t,i,a){this.converter=i,this._query=a,this.type="query",this.firestore=t}withConverter(t){return new vm(this.firestore,t,this._query)}}class Fe{constructor(t,i,a){this.converter=i,this._key=a,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Us(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Fe(this.firestore,t,this._key)}toJSON(){return{type:Fe._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,i,a){if(Rl(i,Fe._jsonSchema))return new Fe(t,a||null,new At(se.fromString(i.referencePath)))}}Fe._jsonSchemaVersion="firestore/documentReference/1.0",Fe._jsonSchema={type:ye("string",Fe._jsonSchemaVersion),referencePath:ye("string")};class Us extends vm{constructor(t,i,a){super(t,i,v1(a)),this._path=a,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Fe(this.firestore,null,new At(t))}withConverter(t){return new Us(this.firestore,t,this._path)}}function oR(s,t,...i){if(s=an(s),oE("collection","path",t),s instanceof Wc){const a=se.fromString(t,...i);return A_(a),new Us(s,null,a)}{if(!(s instanceof Fe||s instanceof Us))throw new ct(X.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const a=s._path.child(se.fromString(t,...i));return A_(a),new Us(s.firestore,null,a)}}function lR(s,t,...i){if(s=an(s),arguments.length===1&&(t=em.newId()),oE("doc","path",t),s instanceof Wc){const a=se.fromString(t,...i);return T_(a),new Fe(s,null,new At(a))}{if(!(s instanceof Fe||s instanceof Us))throw new ct(X.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const a=s._path.child(se.fromString(t,...i));return T_(a),new Fe(s.firestore,s instanceof Us?s.converter:null,new At(a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ev="AsyncQueue";class nv{constructor(t=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new qE(this,"async_queue_retry"),this._c=()=>{const a=_d();a&&rt(ev,"Visibility state changed to "+a.visibilityState),this.M_.w_()},this.ac=t;const i=_d();i&&typeof i.addEventListener=="function"&&i.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.uc(),this.cc(t)}enterRestrictedMode(t){if(!this.ec){this.ec=!0,this.sc=t||!1;const i=_d();i&&typeof i.removeEventListener=="function"&&i.removeEventListener("visibilitychange",this._c)}}enqueue(t){if(this.uc(),this.ec)return new Promise((()=>{}));const i=new Dr;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(t().then(i.resolve,i.reject),i.promise))).then((()=>i.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Xu.push(t),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(t){if(!Il(t))throw t;rt(ev,"Operation failed with retryable error: "+t)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(t){const i=this.ac.then((()=>(this.rc=!0,t().catch((a=>{throw this.nc=a,this.rc=!1,Vr("INTERNAL UNHANDLED ERROR: ",iv(a)),a})).then((a=>(this.rc=!1,a))))));return this.ac=i,i}enqueueAfterDelay(t,i,a){this.uc(),this.oc.indexOf(t)>-1&&(i=0);const l=_m.createAndSchedule(this,t,i,a,(h=>this.hc(h)));return this.tc.push(l),l}uc(){this.nc&&wt(47125,{Pc:iv(this.nc)})}verifyOperationInProgress(){}async Tc(){let t;do t=this.ac,await t;while(t!==this.ac)}Ic(t){for(const i of this.tc)if(i.timerId===t)return!0;return!1}Ec(t){return this.Tc().then((()=>{this.tc.sort(((i,a)=>i.targetTimeMs-a.targetTimeMs));for(const i of this.tc)if(i.skipDelay(),t!=="all"&&i.timerId===t)break;return this.Tc()}))}dc(t){this.oc.push(t)}hc(t){const i=this.tc.indexOf(t);this.tc.splice(i,1)}}function iv(s){let t=s.message||"";return s.stack&&(t=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),t}class WE extends Wc{constructor(t,i,a,l){super(t,i,a,l),this.type="firestore",this._queue=new nv,this._persistenceKey=(l==null?void 0:l.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new nv(t),this._firestoreClient=void 0,await t}}}function uR(s,t){const i=typeof s=="object"?s:Gc(),a=typeof s=="string"?s:Ac,l=Hs(i,"firestore").getImmediate({identifier:a});if(!l._initialized){const h=jv("firestore");h&&aR(l,...h)}return l}function cR(s){if(s._terminated)throw new ct(X.FAILED_PRECONDITION,"The client has already been terminated.");return s._firestoreClient||hR(s),s._firestoreClient}function hR(s){var a,l,h;const t=s._freezeSettings(),i=(function(p,_,v,A){return new s1(p,_,v,A.host,A.ssl,A.experimentalForceLongPolling,A.experimentalAutoDetectLongPolling,ZE(A.experimentalLongPollingOptions),A.useFetchStreams,A.isUsingEmulator)})(s._databaseId,((a=s._app)==null?void 0:a.options.appId)||"",s._persistenceKey,t);s._componentsProvider||(l=t.localCache)!=null&&l._offlineComponentProvider&&((h=t.localCache)!=null&&h._onlineComponentProvider)&&(s._componentsProvider={_offline:t.localCache._offlineComponentProvider,_online:t.localCache._onlineComponentProvider}),s._firestoreClient=new nR(s._authCredentials,s._appCheckCredentials,s._queue,i,s._componentsProvider&&(function(p){const _=p==null?void 0:p._online.build();return{_offline:p==null?void 0:p._offline.build(_),_online:_}})(s._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Fn(di.fromBase64String(t))}catch(i){throw new ct(X.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+i)}}static fromUint8Array(t){return new Fn(di.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:Fn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(Rl(t,Fn._jsonSchema))return Fn.fromBase64String(t.bytes)}}Fn._jsonSchemaVersion="firestore/bytes/1.0",Fn._jsonSchema={type:ye("string",Fn._jsonSchemaVersion),bytes:ye("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Em{constructor(...t){for(let i=0;i<t.length;++i)if(t[i].length===0)throw new ct(X.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ue(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tT{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(t,i){if(!isFinite(t)||t<-90||t>90)throw new ct(X.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(i)||i<-180||i>180)throw new ct(X.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+i);this._lat=t,this._long=i}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return Ut(this._lat,t._lat)||Ut(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:ji._jsonSchemaVersion}}static fromJSON(t){if(Rl(t,ji._jsonSchema))return new ji(t.latitude,t.longitude)}}ji._jsonSchemaVersion="firestore/geoPoint/1.0",ji._jsonSchema={type:ye("string",ji._jsonSchemaVersion),latitude:ye("number"),longitude:ye("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(t){this._values=(t||[]).map((i=>i))}toArray(){return this._values.map((t=>t))}isEqual(t){return(function(a,l){if(a.length!==l.length)return!1;for(let h=0;h<a.length;++h)if(a[h]!==l[h])return!1;return!0})(this._values,t._values)}toJSON(){return{type:Hi._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(Rl(t,Hi._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every((i=>typeof i=="number")))return new Hi(t.vectorValues);throw new ct(X.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Hi._jsonSchemaVersion="firestore/vectorValue/1.0",Hi._jsonSchema={type:ye("string",Hi._jsonSchemaVersion),vectorValues:ye("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fR=/^__.*__$/;class dR{constructor(t,i,a){this.data=t,this.fieldMask=i,this.fieldTransforms=a}toMutation(t,i){return this.fieldMask!==null?new qr(t,this.data,this.fieldMask,i,this.fieldTransforms):new Cl(t,this.data,i,this.fieldTransforms)}}function eT(s){switch(s){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw wt(40011,{Ac:s})}}class Tm{constructor(t,i,a,l,h,d){this.settings=t,this.databaseId=i,this.serializer=a,this.ignoreUndefinedProperties=l,h===void 0&&this.Rc(),this.fieldTransforms=h||[],this.fieldMask=d||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(t){return new Tm({...this.settings,...t},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(t){var l;const i=(l=this.path)==null?void 0:l.child(t),a=this.Vc({path:i,fc:!1});return a.gc(t),a}yc(t){var l;const i=(l=this.path)==null?void 0:l.child(t),a=this.Vc({path:i,fc:!1});return a.Rc(),a}wc(t){return this.Vc({path:void 0,fc:!0})}Sc(t){return Nc(t,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(t){return this.fieldMask.find((i=>t.isPrefixOf(i)))!==void 0||this.fieldTransforms.find((i=>t.isPrefixOf(i.field)))!==void 0}Rc(){if(this.path)for(let t=0;t<this.path.length;t++)this.gc(this.path.get(t))}gc(t){if(t.length===0)throw this.Sc("Document fields must not be empty");if(eT(this.Ac)&&fR.test(t))throw this.Sc('Document fields cannot begin and end with "__"')}}class mR{constructor(t,i,a){this.databaseId=t,this.ignoreUndefinedProperties=i,this.serializer=a||Xc(t)}Cc(t,i,a,l=!1){return new Tm({Ac:t,methodName:i,Dc:a,path:Ue.emptyPath(),fc:!1,bc:l},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function gR(s){const t=s._freezeSettings(),i=Xc(s._databaseId);return new mR(s._databaseId,!!t.ignoreUndefinedProperties,i)}function pR(s,t,i,a,l,h={}){const d=s.Cc(h.merge||h.mergeFields?2:0,t,i,l);rT("Data must be an object, but it was:",d,a);const p=iT(a,d);let _,v;if(h.merge)_=new Yn(d.fieldMask),v=d.fieldTransforms;else if(h.mergeFields){const A=[];for(const I of h.mergeFields){const k=yR(t,I,i);if(!d.contains(k))throw new ct(X.INVALID_ARGUMENT,`Field '${k}' is specified in your field mask but missing from your input data.`);vR(A,k)||A.push(k)}_=new Yn(A),v=d.fieldTransforms.filter((I=>_.covers(I.field)))}else _=null,v=d.fieldTransforms;return new dR(new Gn(p),_,v)}function nT(s,t){if(sT(s=an(s)))return rT("Unsupported field value:",t,s),iT(s,t);if(s instanceof tT)return(function(a,l){if(!eT(l.Ac))throw l.Sc(`${a._methodName}() can only be used with update() and set()`);if(!l.path)throw l.Sc(`${a._methodName}() is not currently supported inside arrays`);const h=a._toFieldTransform(l);h&&l.fieldTransforms.push(h)})(s,t),null;if(s===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),s instanceof Array){if(t.settings.fc&&t.Ac!==4)throw t.Sc("Nested arrays are not supported");return(function(a,l){const h=[];let d=0;for(const p of a){let _=nT(p,l.wc(d));_==null&&(_={nullValue:"NULL_VALUE"}),h.push(_),d++}return{arrayValue:{values:h}}})(s,t)}return(function(a,l){if((a=an(a))===null)return{nullValue:"NULL_VALUE"};if(typeof a=="number")return D1(l.serializer,a);if(typeof a=="boolean")return{booleanValue:a};if(typeof a=="string")return{stringValue:a};if(a instanceof Date){const h=ee.fromDate(a);return{timestampValue:Bd(l.serializer,h)}}if(a instanceof ee){const h=new ee(a.seconds,1e3*Math.floor(a.nanoseconds/1e3));return{timestampValue:Bd(l.serializer,h)}}if(a instanceof ji)return{geoPointValue:{latitude:a.latitude,longitude:a.longitude}};if(a instanceof Fn)return{bytesValue:H1(l.serializer,a._byteString)};if(a instanceof Fe){const h=l.databaseId,d=a.firestore._databaseId;if(!d.isEqual(h))throw l.Sc(`Document reference is for database ${d.projectId}/${d.database} but should be for database ${h.projectId}/${h.database}`);return{referenceValue:LE(a.firestore._databaseId||l.databaseId,a._key.path)}}if(a instanceof Hi)return(function(d,p){return{mapValue:{fields:{[pE]:{stringValue:yE},[kd]:{arrayValue:{values:d.toArray().map((v=>{if(typeof v!="number")throw p.Sc("VectorValues must only contain numeric values.");return dm(p.serializer,v)}))}}}}}})(a,l);throw l.Sc(`Unsupported field value: ${nm(a)}`)})(s,t)}function iT(s,t){const i={};return hE(s)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Ja(s,((a,l)=>{const h=nT(l,t.mc(a));h!=null&&(i[a]=h)})),{mapValue:{fields:i}}}function sT(s){return!(typeof s!="object"||s===null||s instanceof Array||s instanceof Date||s instanceof ee||s instanceof ji||s instanceof Fn||s instanceof Fe||s instanceof tT||s instanceof Hi)}function rT(s,t,i){if(!sT(i)||!lE(i)){const a=nm(i);throw a==="an object"?t.Sc(s+" a custom object"):t.Sc(s+" "+a)}}function yR(s,t,i){if((t=an(t))instanceof Em)return t._internalPath;if(typeof t=="string")return aT(s,t);throw Nc("Field path arguments must be of type string or ",s,!1,void 0,i)}const _R=new RegExp("[~\\*/\\[\\]]");function aT(s,t,i){if(t.search(_R)>=0)throw Nc(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,s,!1,void 0,i);try{return new Em(...t.split("."))._internalPath}catch{throw Nc(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,s,!1,void 0,i)}}function Nc(s,t,i,a,l){const h=a&&!a.isEmpty(),d=l!==void 0;let p=`Function ${t}() called with invalid data`;i&&(p+=" (via `toFirestore()`)"),p+=". ";let _="";return(h||d)&&(_+=" (found",h&&(_+=` in field ${a}`),d&&(_+=` in document ${l}`),_+=")"),new ct(X.INVALID_ARGUMENT,p+s+_)}function vR(s,t){return s.some((i=>i.isEqual(t)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oT{constructor(t,i,a,l,h){this._firestore=t,this._userDataWriter=i,this._key=a,this._document=l,this._converter=h}get id(){return this._key.path.lastSegment()}get ref(){return new Fe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new ER(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const i=this._document.data.field(lT("DocumentSnapshot.get",t));if(i!==null)return this._userDataWriter.convertValue(i)}}}class ER extends oT{data(){return super.data()}}function lT(s,t){return typeof t=="string"?aT(s,t):t instanceof Em?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TR(s,t,i){let a;return a=s?s.toFirestore(t):t,a}class rc{constructor(t,i){this.hasPendingWrites=t,this.fromCache=i}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class ja extends oT{constructor(t,i,a,l,h,d){super(t,i,a,l,d),this._firestore=t,this._firestoreImpl=t,this.metadata=h}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const i=new dc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(i,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,i={}){if(this._document){const a=this._document.data.field(lT("DocumentSnapshot.get",t));if(a!==null)return this._userDataWriter.convertValue(a,i.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ct(X.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,i={};return i.type=ja._jsonSchemaVersion,i.bundle="",i.bundleSource="DocumentSnapshot",i.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?i:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),i.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),i)}}ja._jsonSchemaVersion="firestore/documentSnapshot/1.0",ja._jsonSchema={type:ye("string",ja._jsonSchemaVersion),bundleSource:ye("string","DocumentSnapshot"),bundleName:ye("string"),bundle:ye("string")};class dc extends ja{data(t={}){return super.data(t)}}class pl{constructor(t,i,a,l){this._firestore=t,this._userDataWriter=i,this._snapshot=l,this.metadata=new rc(l.hasPendingWrites,l.fromCache),this.query=a}get docs(){const t=[];return this.forEach((i=>t.push(i))),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,i){this._snapshot.docs.forEach((a=>{t.call(i,new dc(this._firestore,this._userDataWriter,a.key,a,new rc(this._snapshot.mutatedKeys.has(a.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const i=!!t.includeMetadataChanges;if(i&&this._snapshot.excludesMetadataChanges)throw new ct(X.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===i||(this._cachedChanges=(function(l,h){if(l._snapshot.oldDocs.isEmpty()){let d=0;return l._snapshot.docChanges.map((p=>{const _=new dc(l._firestore,l._userDataWriter,p.doc.key,p.doc,new rc(l._snapshot.mutatedKeys.has(p.doc.key),l._snapshot.fromCache),l.query.converter);return p.doc,{type:"added",doc:_,oldIndex:-1,newIndex:d++}}))}{let d=l._snapshot.oldDocs;return l._snapshot.docChanges.filter((p=>h||p.type!==3)).map((p=>{const _=new dc(l._firestore,l._userDataWriter,p.doc.key,p.doc,new rc(l._snapshot.mutatedKeys.has(p.doc.key),l._snapshot.fromCache),l.query.converter);let v=-1,A=-1;return p.type!==0&&(v=d.indexOf(p.doc.key),d=d.delete(p.doc.key)),p.type!==1&&(d=d.add(p.doc),A=d.indexOf(p.doc.key)),{type:AR(p.type),doc:_,oldIndex:v,newIndex:A}}))}})(this,i),this._cachedChangesIncludeMetadataChanges=i),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ct(X.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=pl._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=em.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const i=[],a=[],l=[];return this.docs.forEach((h=>{h._document!==null&&(i.push(h._document),a.push(this._userDataWriter.convertObjectMap(h._document.data.value.mapValue.fields,"previous")),l.push(h.ref.path))})),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function AR(s){switch(s){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return wt(61501,{type:s})}}pl._jsonSchemaVersion="firestore/querySnapshot/1.0",pl._jsonSchema={type:ye("string",pl._jsonSchemaVersion),bundleSource:ye("string","QuerySnapshot"),bundleName:ye("string"),bundle:ye("string")};function SR(s,t){const i=uE(s.firestore,WE),a=lR(s),l=TR(s.converter,t);return bR(i,[pR(gR(s.firestore),"addDoc",a._key,l,s.converter!==null,{}).toMutation(a._key,Bi.exists(!1))]).then((()=>a))}function bR(s,t){return(function(a,l){const h=new Dr;return a.asyncQueue.enqueueAndForget((async()=>$w(await rR(a),l,h))),h.promise})(cR(s),t)}(function(t,i=!0){(function(l){Za=l})(jr),Xn(new Dn("firestore",((a,{instanceIdentifier:l,options:h})=>{const d=a.getProvider("app").getImmediate(),p=new WE(new Lb(a.getProvider("auth-internal")),new jb(d,a.getProvider("app-check-internal")),(function(v,A){if(!Object.prototype.hasOwnProperty.apply(v.options,["projectId"]))throw new ct(X.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Sc(v.options.projectId,A)})(d,l),d);return h={useFetchStreams:i,...h},p._setSettings(h),p}),"PUBLIC").setMultipleInstances(!0)),sn(y_,__,t),sn(y_,__,"esm2020")})();function uT(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const wR=uT,cT=new Br("auth","Firebase",uT());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mc=new qc("@firebase/auth");function RR(s,...t){Mc.logLevel<=Ot.WARN&&Mc.warn(`Auth (${jr}): ${s}`,...t)}function mc(s,...t){Mc.logLevel<=Ot.ERROR&&Mc.error(`Auth (${jr}): ${s}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gi(s,...t){throw Am(s,...t)}function hi(s,...t){return Am(s,...t)}function hT(s,t,i){const a={...wR(),[t]:i};return new Br("auth","Firebase",a).create(t,{appName:s.name})}function Nr(s){return hT(s,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Am(s,...t){if(typeof s!="string"){const i=t[0],a=[...t.slice(1)];return a[0]&&(a[0].appName=s.name),s._errorFactory.create(i,...a)}return cT.create(s,...t)}function pt(s,t,...i){if(!s)throw Am(t,...i)}function Li(s){const t="INTERNAL ASSERTION FAILED: "+s;throw mc(t),new Error(t)}function Fi(s,t){s||Li(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fd(){var s;return typeof self<"u"&&((s=self.location)==null?void 0:s.href)||""}function IR(){return sv()==="http:"||sv()==="https:"}function sv(){var s;return typeof self<"u"&&((s=self.location)==null?void 0:s.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CR(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(IR()||Fv()||"connection"in navigator)?navigator.onLine:!0}function DR(){if(typeof navigator>"u")return null;const s=navigator;return s.languages&&s.languages[0]||s.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ml{constructor(t,i){this.shortDelay=t,this.longDelay=i,Fi(i>t,"Short delay should be less than long delay!"),this.isMobile=uS()||fS()}get(){return CR()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sm(s,t){Fi(s.emulator,"Emulator should always be set here");const{url:i}=s.emulator;return t?`${i}${t.startsWith("/")?t.slice(1):t}`:i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fT{static initialize(t,i,a){this.fetchImpl=t,i&&(this.headersImpl=i),a&&(this.responseImpl=a)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Li("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Li("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Li("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OR={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NR=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],MR=new Ml(3e4,6e4);function bm(s,t){return s.tenantId&&!t.tenantId?{...t,tenantId:s.tenantId}:t}async function Wa(s,t,i,a,l={}){return dT(s,l,async()=>{let h={},d={};a&&(t==="GET"?d=a:h={body:JSON.stringify(a)});const p=wl({key:s.config.apiKey,...d}).slice(1),_=await s._getAdditionalHeaders();_["Content-Type"]="application/json",s.languageCode&&(_["X-Firebase-Locale"]=s.languageCode);const v={method:t,headers:_,...h};return hS()||(v.referrerPolicy="no-referrer"),s.emulatorConfig&&zr(s.emulatorConfig.host)&&(v.credentials="include"),fT.fetch()(await mT(s,s.config.apiHost,i,p),v)})}async function dT(s,t,i){s._canInitEmulator=!1;const a={...OR,...t};try{const l=new xR(s),h=await Promise.race([i(),l.promise]);l.clearNetworkTimeout();const d=await h.json();if("needConfirmation"in d)throw ac(s,"account-exists-with-different-credential",d);if(h.ok&&!("errorMessage"in d))return d;{const p=h.ok?d.errorMessage:d.error.message,[_,v]=p.split(" : ");if(_==="FEDERATED_USER_ID_ALREADY_LINKED")throw ac(s,"credential-already-in-use",d);if(_==="EMAIL_EXISTS")throw ac(s,"email-already-in-use",d);if(_==="USER_DISABLED")throw ac(s,"user-disabled",d);const A=a[_]||_.toLowerCase().replace(/[_\s]+/g,"-");if(v)throw hT(s,A,v);Gi(s,A)}}catch(l){if(l instanceof On)throw l;Gi(s,"network-request-failed",{message:String(l)})}}async function VR(s,t,i,a,l={}){const h=await Wa(s,t,i,a,l);return"mfaPendingCredential"in h&&Gi(s,"multi-factor-auth-required",{_serverResponse:h}),h}async function mT(s,t,i,a){const l=`${t}${i}?${a}`,h=s,d=h.config.emulator?Sm(s.config,l):`${s.config.apiScheme}://${l}`;return NR.includes(i)&&(await h._persistenceManagerAvailable,h._getPersistenceType()==="COOKIE")?h._getPersistence()._getFinalTarget(d).toString():d}class xR{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((i,a)=>{this.timer=setTimeout(()=>a(hi(this.auth,"network-request-failed")),MR.get())})}}function ac(s,t,i){const a={appName:s.name};i.email&&(a.email=i.email),i.phoneNumber&&(a.phoneNumber=i.phoneNumber);const l=hi(s,t,a);return l.customData._tokenResponse=i,l}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kR(s,t){return Wa(s,"POST","/v1/accounts:delete",t)}async function Vc(s,t){return Wa(s,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yl(s){if(s)try{const t=new Date(Number(s));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function UR(s,t=!1){const i=an(s),a=await i.getIdToken(t),l=wm(a);pt(l&&l.exp&&l.auth_time&&l.iat,i.auth,"internal-error");const h=typeof l.firebase=="object"?l.firebase:void 0,d=h==null?void 0:h.sign_in_provider;return{claims:l,token:a,authTime:yl(Ed(l.auth_time)),issuedAtTime:yl(Ed(l.iat)),expirationTime:yl(Ed(l.exp)),signInProvider:d||null,signInSecondFactor:(h==null?void 0:h.sign_in_second_factor)||null}}function Ed(s){return Number(s)*1e3}function wm(s){const[t,i,a]=s.split(".");if(t===void 0||i===void 0||a===void 0)return mc("JWT malformed, contained fewer than 3 sections"),null;try{const l=zv(i);return l?JSON.parse(l):(mc("Failed to decode base64 JWT payload"),null)}catch(l){return mc("Caught error parsing JWT payload as JSON",l==null?void 0:l.toString()),null}}function rv(s){const t=wm(s);return pt(t,"internal-error"),pt(typeof t.exp<"u","internal-error"),pt(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bl(s,t,i=!1){if(i)return t;try{return await t}catch(a){throw a instanceof On&&PR(a)&&s.auth.currentUser===s&&await s.auth.signOut(),a}}function PR({code:s}){return s==="auth/user-disabled"||s==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LR{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){if(t){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const a=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,a)}}schedule(t=!1){if(!this.isRunning)return;const i=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},i)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yd{constructor(t,i){this.createdAt=t,this.lastLoginAt=i,this._initializeTime()}_initializeTime(){this.lastSignInTime=yl(this.lastLoginAt),this.creationTime=yl(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xc(s){var I;const t=s.auth,i=await s.getIdToken(),a=await bl(s,Vc(t,{idToken:i}));pt(a==null?void 0:a.users.length,t,"internal-error");const l=a.users[0];s._notifyReloadListener(l);const h=(I=l.providerUserInfo)!=null&&I.length?gT(l.providerUserInfo):[],d=BR(s.providerData,h),p=s.isAnonymous,_=!(s.email&&l.passwordHash)&&!(d!=null&&d.length),v=p?_:!1,A={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:d,metadata:new Yd(l.createdAt,l.lastLoginAt),isAnonymous:v};Object.assign(s,A)}async function zR(s){const t=an(s);await xc(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function BR(s,t){return[...s.filter(a=>!t.some(l=>l.providerId===a.providerId)),...t]}function gT(s){return s.map(({providerId:t,...i})=>({providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jR(s,t){const i=await dT(s,{},async()=>{const a=wl({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:l,apiKey:h}=s.config,d=await mT(s,l,"/v1/token",`key=${h}`),p=await s._getAdditionalHeaders();p["Content-Type"]="application/x-www-form-urlencoded";const _={method:"POST",headers:p,body:a};return s.emulatorConfig&&zr(s.emulatorConfig.host)&&(_.credentials="include"),fT.fetch()(d,_)});return{accessToken:i.access_token,expiresIn:i.expires_in,refreshToken:i.refresh_token}}async function HR(s,t){return Wa(s,"POST","/v2/accounts:revokeToken",bm(s,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){pt(t.idToken,"internal-error"),pt(typeof t.idToken<"u","internal-error"),pt(typeof t.refreshToken<"u","internal-error");const i="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):rv(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,i)}updateFromIdToken(t){pt(t.length!==0,"internal-error");const i=rv(t);this.updateTokensAndExpiration(t,null,i)}async getToken(t,i=!1){return!i&&this.accessToken&&!this.isExpired?this.accessToken:(pt(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,i){const{accessToken:a,refreshToken:l,expiresIn:h}=await jR(t,i);this.updateTokensAndExpiration(a,l,Number(h))}updateTokensAndExpiration(t,i,a){this.refreshToken=i||null,this.accessToken=t||null,this.expirationTime=Date.now()+a*1e3}static fromJSON(t,i){const{refreshToken:a,accessToken:l,expirationTime:h}=i,d=new Ha;return a&&(pt(typeof a=="string","internal-error",{appName:t}),d.refreshToken=a),l&&(pt(typeof l=="string","internal-error",{appName:t}),d.accessToken=l),h&&(pt(typeof h=="number","internal-error",{appName:t}),d.expirationTime=h),d}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Ha,this.toJSON())}_performRefresh(){return Li("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ds(s,t){pt(typeof s=="string"||typeof s>"u","internal-error",{appName:t})}class Kn{constructor({uid:t,auth:i,stsTokenManager:a,...l}){this.providerId="firebase",this.proactiveRefresh=new LR(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=a,this.accessToken=a.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new Yd(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(t){const i=await bl(this,this.stsTokenManager.getToken(this.auth,t));return pt(i,this.auth,"internal-error"),this.accessToken!==i&&(this.accessToken=i,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),i}getIdTokenResult(t){return UR(this,t)}reload(){return zR(this)}_assign(t){this!==t&&(pt(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(i=>({...i})),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const i=new Kn({...this,auth:t,stsTokenManager:this.stsTokenManager._clone()});return i.metadata._copy(this.metadata),i}_onReload(t){pt(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,i=!1){let a=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),a=!0),i&&await xc(this),await this.auth._persistUserIfCurrent(this),a&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(qn(this.auth.app))return Promise.reject(Nr(this.auth));const t=await this.getIdToken();return await bl(this,kR(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>({...t})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,i){const a=i.displayName??void 0,l=i.email??void 0,h=i.phoneNumber??void 0,d=i.photoURL??void 0,p=i.tenantId??void 0,_=i._redirectEventId??void 0,v=i.createdAt??void 0,A=i.lastLoginAt??void 0,{uid:I,emailVerified:k,isAnonymous:Q,providerData:$,stsTokenManager:it}=i;pt(I&&it,t,"internal-error");const Z=Ha.fromJSON(this.name,it);pt(typeof I=="string",t,"internal-error"),Ds(a,t.name),Ds(l,t.name),pt(typeof k=="boolean",t,"internal-error"),pt(typeof Q=="boolean",t,"internal-error"),Ds(h,t.name),Ds(d,t.name),Ds(p,t.name),Ds(_,t.name),Ds(v,t.name),Ds(A,t.name);const Et=new Kn({uid:I,auth:t,email:l,emailVerified:k,displayName:a,isAnonymous:Q,photoURL:d,phoneNumber:h,tenantId:p,stsTokenManager:Z,createdAt:v,lastLoginAt:A});return $&&Array.isArray($)&&(Et.providerData=$.map(_t=>({..._t}))),_&&(Et._redirectEventId=_),Et}static async _fromIdTokenResponse(t,i,a=!1){const l=new Ha;l.updateFromServerResponse(i);const h=new Kn({uid:i.localId,auth:t,stsTokenManager:l,isAnonymous:a});return await xc(h),h}static async _fromGetAccountInfoResponse(t,i,a){const l=i.users[0];pt(l.localId!==void 0,"internal-error");const h=l.providerUserInfo!==void 0?gT(l.providerUserInfo):[],d=!(l.email&&l.passwordHash)&&!(h!=null&&h.length),p=new Ha;p.updateFromIdToken(a);const _=new Kn({uid:l.localId,auth:t,stsTokenManager:p,isAnonymous:d}),v={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:h,metadata:new Yd(l.createdAt,l.lastLoginAt),isAnonymous:!(l.email&&l.passwordHash)&&!(h!=null&&h.length)};return Object.assign(_,v),_}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const av=new Map;function zi(s){Fi(s instanceof Function,"Expected a class definition");let t=av.get(s);return t?(Fi(t instanceof s,"Instance stored in cache mismatched with class"),t):(t=new s,av.set(s,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pT{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,i){this.storage[t]=i}async _get(t){const i=this.storage[t];return i===void 0?null:i}async _remove(t){delete this.storage[t]}_addListener(t,i){}_removeListener(t,i){}}pT.type="NONE";const ov=pT;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gc(s,t,i){return`firebase:${s}:${t}:${i}`}class qa{constructor(t,i,a){this.persistence=t,this.auth=i,this.userKey=a;const{config:l,name:h}=this.auth;this.fullUserKey=gc(this.userKey,l.apiKey,h),this.fullPersistenceKey=gc("persistence",l.apiKey,h),this.boundEventHandler=i._onStorageEvent.bind(i),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);if(!t)return null;if(typeof t=="string"){const i=await Vc(this.auth,{idToken:t}).catch(()=>{});return i?Kn._fromGetAccountInfoResponse(this.auth,i,t):null}return Kn._fromJSON(this.auth,t)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const i=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,i)return this.setCurrentUser(i)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,i,a="authUser"){if(!i.length)return new qa(zi(ov),t,a);const l=(await Promise.all(i.map(async v=>{if(await v._isAvailable())return v}))).filter(v=>v);let h=l[0]||zi(ov);const d=gc(a,t.config.apiKey,t.name);let p=null;for(const v of i)try{const A=await v._get(d);if(A){let I;if(typeof A=="string"){const k=await Vc(t,{idToken:A}).catch(()=>{});if(!k)break;I=await Kn._fromGetAccountInfoResponse(t,k,A)}else I=Kn._fromJSON(t,A);v!==h&&(p=I),h=v;break}}catch{}const _=l.filter(v=>v._shouldAllowMigration);return!h._shouldAllowMigration||!_.length?new qa(h,t,a):(h=_[0],p&&await h._set(d,p.toJSON()),await Promise.all(i.map(async v=>{if(v!==h)try{await v._remove(d)}catch{}})),new qa(h,t,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lv(s){const t=s.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(ET(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(yT(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(AT(t))return"Blackberry";if(ST(t))return"Webos";if(_T(t))return"Safari";if((t.includes("chrome/")||vT(t))&&!t.includes("edge/"))return"Chrome";if(TT(t))return"Android";{const i=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,a=s.match(i);if((a==null?void 0:a.length)===2)return a[1]}return"Other"}function yT(s=Ye()){return/firefox\//i.test(s)}function _T(s=Ye()){const t=s.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function vT(s=Ye()){return/crios\//i.test(s)}function ET(s=Ye()){return/iemobile/i.test(s)}function TT(s=Ye()){return/android/i.test(s)}function AT(s=Ye()){return/blackberry/i.test(s)}function ST(s=Ye()){return/webos/i.test(s)}function Rm(s=Ye()){return/iphone|ipad|ipod/i.test(s)||/macintosh/i.test(s)&&/mobile/i.test(s)}function qR(s=Ye()){var t;return Rm(s)&&!!((t=window.navigator)!=null&&t.standalone)}function GR(){return dS()&&document.documentMode===10}function bT(s=Ye()){return Rm(s)||TT(s)||ST(s)||AT(s)||/windows phone/i.test(s)||ET(s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wT(s,t=[]){let i;switch(s){case"Browser":i=lv(Ye());break;case"Worker":i=`${lv(Ye())}-${s}`;break;default:i=s}const a=t.length?t.join(","):"FirebaseCore-web";return`${i}/JsCore/${jr}/${a}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FR{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,i){const a=h=>new Promise((d,p)=>{try{const _=t(h);d(_)}catch(_){p(_)}});a.onAbort=i,this.queue.push(a);const l=this.queue.length-1;return()=>{this.queue[l]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const i=[];try{for(const a of this.queue)await a(t),a.onAbort&&i.push(a.onAbort)}catch(a){i.reverse();for(const l of i)try{l()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:a==null?void 0:a.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YR(s,t={}){return Wa(s,"GET","/v2/passwordPolicy",bm(s,t))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KR=6;class QR{constructor(t){var a;const i=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=i.minPasswordLength??KR,i.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=i.maxPasswordLength),i.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=i.containsLowercaseCharacter),i.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=i.containsUppercaseCharacter),i.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=i.containsNumericCharacter),i.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=i.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((a=t.allowedNonAlphanumericCharacters)==null?void 0:a.join(""))??"",this.forceUpgradeOnSignin=t.forceUpgradeOnSignin??!1,this.schemaVersion=t.schemaVersion}validatePassword(t){const i={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,i),this.validatePasswordCharacterOptions(t,i),i.isValid&&(i.isValid=i.meetsMinPasswordLength??!0),i.isValid&&(i.isValid=i.meetsMaxPasswordLength??!0),i.isValid&&(i.isValid=i.containsLowercaseLetter??!0),i.isValid&&(i.isValid=i.containsUppercaseLetter??!0),i.isValid&&(i.isValid=i.containsNumericCharacter??!0),i.isValid&&(i.isValid=i.containsNonAlphanumericCharacter??!0),i}validatePasswordLengthOptions(t,i){const a=this.customStrengthOptions.minPasswordLength,l=this.customStrengthOptions.maxPasswordLength;a&&(i.meetsMinPasswordLength=t.length>=a),l&&(i.meetsMaxPasswordLength=t.length<=l)}validatePasswordCharacterOptions(t,i){this.updatePasswordCharacterOptionsStatuses(i,!1,!1,!1,!1);let a;for(let l=0;l<t.length;l++)a=t.charAt(l),this.updatePasswordCharacterOptionsStatuses(i,a>="a"&&a<="z",a>="A"&&a<="Z",a>="0"&&a<="9",this.allowedNonAlphanumericCharacters.includes(a))}updatePasswordCharacterOptionsStatuses(t,i,a,l,h){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=i)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=a)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=l)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=h))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XR{constructor(t,i,a,l){this.app=t,this.heartbeatServiceProvider=i,this.appCheckServiceProvider=a,this.config=l,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new uv(this),this.idTokenSubscription=new uv(this),this.beforeStateQueue=new FR(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=cT,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=l.sdkClientVersion,this._persistenceManagerAvailable=new Promise(h=>this._resolvePersistenceManagerAvailable=h)}_initializeWithPersistence(t,i){return i&&(this._popupRedirectResolver=zi(i)),this._initializationPromise=this.queue(async()=>{var a,l,h;if(!this._deleted&&(this.persistenceManager=await qa.create(this,t),(a=this._resolvePersistenceManagerAvailable)==null||a.call(this),!this._deleted)){if((l=this._popupRedirectResolver)!=null&&l._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(i),this.lastNotifiedUid=((h=this.currentUser)==null?void 0:h.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const i=await Vc(this,{idToken:t}),a=await Kn._fromGetAccountInfoResponse(this,i,t);await this.directlySetCurrentUser(a)}catch(i){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",i),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var h;if(qn(this.app)){const d=this.app.settings.authIdToken;return d?new Promise(p=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(d).then(p,p))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let a=i,l=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const d=(h=this.redirectUser)==null?void 0:h._redirectEventId,p=a==null?void 0:a._redirectEventId,_=await this.tryRedirectSignIn(t);(!d||d===p)&&(_!=null&&_.user)&&(a=_.user,l=!0)}if(!a)return this.directlySetCurrentUser(null);if(!a._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(a)}catch(d){a=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(d))}return a?this.reloadAndSetCurrentUserOrClear(a):this.directlySetCurrentUser(null)}return pt(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===a._redirectEventId?this.directlySetCurrentUser(a):this.reloadAndSetCurrentUserOrClear(a)}async tryRedirectSignIn(t){let i=null;try{i=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return i}async reloadAndSetCurrentUserOrClear(t){try{await xc(t)}catch(i){if((i==null?void 0:i.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=DR()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(qn(this.app))return Promise.reject(Nr(this));const i=t?an(t):null;return i&&pt(i.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(i&&i._clone(this))}async _updateCurrentUser(t,i=!1){if(!this._deleted)return t&&pt(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),i||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return qn(this.app)?Promise.reject(Nr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return qn(this.app)?Promise.reject(Nr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(zi(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const i=this._getPasswordPolicyInternal();return i.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):i.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await YR(this),i=new QR(t);this.tenantId===null?this._projectPasswordPolicy=i:this._tenantPasswordPolicies[this.tenantId]=i}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(t){this._errorFactory=new Br("auth","Firebase",t())}onAuthStateChanged(t,i,a){return this.registerStateListener(this.authStateSubscription,t,i,a)}beforeAuthStateChanged(t,i){return this.beforeStateQueue.pushCallback(t,i)}onIdTokenChanged(t,i,a){return this.registerStateListener(this.idTokenSubscription,t,i,a)}authStateReady(){return new Promise((t,i)=>{if(this.currentUser)t();else{const a=this.onAuthStateChanged(()=>{a(),t()},i)}})}async revokeAccessToken(t){if(this.currentUser){const i=await this.currentUser.getIdToken(),a={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:i};this.tenantId!=null&&(a.tenantId=this.tenantId),await HR(this,a)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)==null?void 0:t.toJSON()}}async _setRedirectUser(t,i){const a=await this.getOrInitRedirectPersistenceManager(i);return t===null?a.removeCurrentUser():a.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const i=t&&zi(t)||this._popupRedirectResolver;pt(i,this,"argument-error"),this.redirectPersistenceManager=await qa.create(this,[zi(i._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var i,a;return this._isInitialized&&await this.queue(async()=>{}),((i=this._currentUser)==null?void 0:i._redirectEventId)===t?this._currentUser:((a=this.redirectUser)==null?void 0:a._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var i;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const t=((i=this.currentUser)==null?void 0:i.uid)??null;this.lastNotifiedUid!==t&&(this.lastNotifiedUid=t,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,i,a,l){if(this._deleted)return()=>{};const h=typeof i=="function"?i:i.next.bind(i);let d=!1;const p=this._isInitialized?Promise.resolve():this._initializationPromise;if(pt(p,this,"internal-error"),p.then(()=>{d||h(this.currentUser)}),typeof i=="function"){const _=t.addObserver(i,a,l);return()=>{d=!0,_()}}else{const _=t.addObserver(i);return()=>{d=!0,_()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return pt(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=wT(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var l;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((l=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:l.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const a=await this._getAppCheckToken();return a&&(t["X-Firebase-AppCheck"]=a),t}async _getAppCheckToken(){var i;if(qn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((i=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getToken());return t!=null&&t.error&&RR(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Im(s){return an(s)}class uv{constructor(t){this.auth=t,this.observer=null,this.addObserver=ES(i=>this.observer=i)}get next(){return pt(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Cm={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function $R(s){Cm=s}function ZR(s){return Cm.loadJS(s)}function JR(){return Cm.gapiScript}function WR(s){return`__${s}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tI(s,t){const i=Hs(s,"auth");if(i.isInitialized()){const l=i.getImmediate(),h=i.getOptions();if(Ps(h,t??{}))return l;Gi(l,"already-initialized")}return i.initialize({options:t})}function eI(s,t){const i=(t==null?void 0:t.persistence)||[],a=(Array.isArray(i)?i:[i]).map(zi);t!=null&&t.errorMap&&s._updateErrorMap(t.errorMap),s._initializeWithPersistence(a,t==null?void 0:t.popupRedirectResolver)}function nI(s,t,i){const a=Im(s);pt(/^https?:\/\//.test(t),a,"invalid-emulator-scheme");const l=!1,h=RT(t),{host:d,port:p}=iI(t),_=p===null?"":`:${p}`,v={url:`${h}//${d}${_}/`},A=Object.freeze({host:d,port:p,protocol:h.replace(":",""),options:Object.freeze({disableWarnings:l})});if(!a._canInitEmulator){pt(a.config.emulator&&a.emulatorConfig,a,"emulator-config-failed"),pt(Ps(v,a.config.emulator)&&Ps(A,a.emulatorConfig),a,"emulator-config-failed");return}a.config.emulator=v,a.emulatorConfig=A,a.settings.appVerificationDisabledForTesting=!0,zr(d)?($d(`${h}//${d}${_}`),Zd("Auth",!0)):sI()}function RT(s){const t=s.indexOf(":");return t<0?"":s.substr(0,t+1)}function iI(s){const t=RT(s),i=/(\/\/)?([^?#/]+)/.exec(s.substr(t.length));if(!i)return{host:"",port:null};const a=i[2].split("@").pop()||"",l=/^(\[[^\]]+\])(:|$)/.exec(a);if(l){const h=l[1];return{host:h,port:cv(a.substr(h.length+1))}}else{const[h,d]=a.split(":");return{host:h,port:cv(d)}}}function cv(s){if(!s)return null;const t=Number(s);return isNaN(t)?null:t}function sI(){function s(){const t=document.createElement("p"),i=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",i.position="fixed",i.width="100%",i.backgroundColor="#ffffff",i.border=".1em solid #000000",i.color="#b50000",i.bottom="0px",i.left="0px",i.margin="0px",i.zIndex="10000",i.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",s):s())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IT{constructor(t,i){this.providerId=t,this.signInMethod=i}toJSON(){return Li("not implemented")}_getIdTokenResponse(t){return Li("not implemented")}_linkToIdToken(t,i){return Li("not implemented")}_getReauthenticationResolver(t){return Li("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ga(s,t){return VR(s,"POST","/v1/accounts:signInWithIdp",bm(s,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rI="http://localhost";class Ur extends IT{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const i=new Ur(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(i.idToken=t.idToken),t.accessToken&&(i.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(i.nonce=t.nonce),t.pendingToken&&(i.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(i.accessToken=t.oauthToken,i.secret=t.oauthTokenSecret):Gi("argument-error"),i}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const i=typeof t=="string"?JSON.parse(t):t,{providerId:a,signInMethod:l,...h}=i;if(!a||!l)return null;const d=new Ur(a,l);return d.idToken=h.idToken||void 0,d.accessToken=h.accessToken||void 0,d.secret=h.secret,d.nonce=h.nonce,d.pendingToken=h.pendingToken||null,d}_getIdTokenResponse(t){const i=this.buildRequest();return Ga(t,i)}_linkToIdToken(t,i){const a=this.buildRequest();return a.idToken=i,Ga(t,a)}_getReauthenticationResolver(t){const i=this.buildRequest();return i.autoCreate=!1,Ga(t,i)}buildRequest(){const t={requestUri:rI,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const i={};this.idToken&&(i.id_token=this.idToken),this.accessToken&&(i.access_token=this.accessToken),this.secret&&(i.oauth_token_secret=this.secret),i.providerId=this.providerId,this.nonce&&!this.pendingToken&&(i.nonce=this.nonce),t.postBody=wl(i)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CT{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl extends CT{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os extends Vl{constructor(){super("facebook.com")}static credential(t){return Ur._fromParams({providerId:Os.PROVIDER_ID,signInMethod:Os.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Os.credentialFromTaggedObject(t)}static credentialFromError(t){return Os.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Os.credential(t.oauthAccessToken)}catch{return null}}}Os.FACEBOOK_SIGN_IN_METHOD="facebook.com";Os.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns extends Vl{constructor(){super("google.com"),this.addScope("profile")}static credential(t,i){return Ur._fromParams({providerId:Ns.PROVIDER_ID,signInMethod:Ns.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:i})}static credentialFromResult(t){return Ns.credentialFromTaggedObject(t)}static credentialFromError(t){return Ns.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:i,oauthAccessToken:a}=t;if(!i&&!a)return null;try{return Ns.credential(i,a)}catch{return null}}}Ns.GOOGLE_SIGN_IN_METHOD="google.com";Ns.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms extends Vl{constructor(){super("github.com")}static credential(t){return Ur._fromParams({providerId:Ms.PROVIDER_ID,signInMethod:Ms.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Ms.credentialFromTaggedObject(t)}static credentialFromError(t){return Ms.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Ms.credential(t.oauthAccessToken)}catch{return null}}}Ms.GITHUB_SIGN_IN_METHOD="github.com";Ms.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs extends Vl{constructor(){super("twitter.com")}static credential(t,i){return Ur._fromParams({providerId:Vs.PROVIDER_ID,signInMethod:Vs.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:i})}static credentialFromResult(t){return Vs.credentialFromTaggedObject(t)}static credentialFromError(t){return Vs.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:i,oauthTokenSecret:a}=t;if(!i||!a)return null;try{return Vs.credential(i,a)}catch{return null}}}Vs.TWITTER_SIGN_IN_METHOD="twitter.com";Vs.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,i,a,l=!1){const h=await Kn._fromIdTokenResponse(t,a,l),d=hv(a);return new $a({user:h,providerId:d,_tokenResponse:a,operationType:i})}static async _forOperation(t,i,a){await t._updateTokensIfNecessary(a,!0);const l=hv(a);return new $a({user:t,providerId:l,_tokenResponse:a,operationType:i})}}function hv(s){return s.providerId?s.providerId:"phoneNumber"in s?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kc extends On{constructor(t,i,a,l){super(i.code,i.message),this.operationType=a,this.user=l,Object.setPrototypeOf(this,kc.prototype),this.customData={appName:t.name,tenantId:t.tenantId??void 0,_serverResponse:i.customData._serverResponse,operationType:a}}static _fromErrorAndOperation(t,i,a,l){return new kc(t,i,a,l)}}function DT(s,t,i,a){return(t==="reauthenticate"?i._getReauthenticationResolver(s):i._getIdTokenResponse(s)).catch(h=>{throw h.code==="auth/multi-factor-auth-required"?kc._fromErrorAndOperation(s,h,t,a):h})}async function aI(s,t,i=!1){const a=await bl(s,t._linkToIdToken(s.auth,await s.getIdToken()),i);return $a._forOperation(s,"link",a)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oI(s,t,i=!1){const{auth:a}=s;if(qn(a.app))return Promise.reject(Nr(a));const l="reauthenticate";try{const h=await bl(s,DT(a,l,t,s),i);pt(h.idToken,a,"internal-error");const d=wm(h.idToken);pt(d,a,"internal-error");const{sub:p}=d;return pt(s.uid===p,a,"user-mismatch"),$a._forOperation(s,l,h)}catch(h){throw(h==null?void 0:h.code)==="auth/user-not-found"&&Gi(a,"user-mismatch"),h}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lI(s,t,i=!1){if(qn(s.app))return Promise.reject(Nr(s));const a="signIn",l=await DT(s,a,t),h=await $a._fromIdTokenResponse(s,a,l);return i||await s._updateCurrentUser(h.user),h}function uI(s,t,i,a){return an(s).onIdTokenChanged(t,i,a)}function cI(s,t,i){return an(s).beforeAuthStateChanged(t,i)}const Uc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OT{constructor(t,i){this.storageRetriever=t,this.type=i}_isAvailable(){try{return this.storage?(this.storage.setItem(Uc,"1"),this.storage.removeItem(Uc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,i){return this.storage.setItem(t,JSON.stringify(i)),Promise.resolve()}_get(t){const i=this.storage.getItem(t);return Promise.resolve(i?JSON.parse(i):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hI=1e3,fI=10;class NT extends OT{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,i)=>this.onStorageEvent(t,i),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=bT(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const i of Object.keys(this.listeners)){const a=this.storage.getItem(i),l=this.localCache[i];a!==l&&t(i,l,a)}}onStorageEvent(t,i=!1){if(!t.key){this.forAllChangedKeys((d,p,_)=>{this.notifyListeners(d,_)});return}const a=t.key;i?this.detachListener():this.stopPolling();const l=()=>{const d=this.storage.getItem(a);!i&&this.localCache[a]===d||this.notifyListeners(a,d)},h=this.storage.getItem(a);GR()&&h!==t.newValue&&t.newValue!==t.oldValue?setTimeout(l,fI):l()}notifyListeners(t,i){this.localCache[t]=i;const a=this.listeners[t];if(a)for(const l of Array.from(a))l(i&&JSON.parse(i))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,i,a)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:i,newValue:a}),!0)})},hI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,i){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(i)}_removeListener(t,i){this.listeners[t]&&(this.listeners[t].delete(i),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,i){await super._set(t,i),this.localCache[t]=JSON.stringify(i)}async _get(t){const i=await super._get(t);return this.localCache[t]=JSON.stringify(i),i}async _remove(t){await super._remove(t),delete this.localCache[t]}}NT.type="LOCAL";const dI=NT;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MT extends OT{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,i){}_removeListener(t,i){}}MT.type="SESSION";const VT=MT;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mI(s){return Promise.all(s.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(i){return{fulfilled:!1,reason:i}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const i=this.receivers.find(l=>l.isListeningto(t));if(i)return i;const a=new th(t);return this.receivers.push(a),a}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const i=t,{eventId:a,eventType:l,data:h}=i.data,d=this.handlersMap[l];if(!(d!=null&&d.size))return;i.ports[0].postMessage({status:"ack",eventId:a,eventType:l});const p=Array.from(d).map(async v=>v(i.origin,h)),_=await mI(p);i.ports[0].postMessage({status:"done",eventId:a,eventType:l,response:_})}_subscribe(t,i){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(i)}_unsubscribe(t,i){this.handlersMap[t]&&i&&this.handlersMap[t].delete(i),(!i||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}th.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dm(s="",t=10){let i="";for(let a=0;a<t;a++)i+=Math.floor(Math.random()*10);return s+i}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gI{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,i,a=50){const l=typeof MessageChannel<"u"?new MessageChannel:null;if(!l)throw new Error("connection_unavailable");let h,d;return new Promise((p,_)=>{const v=Dm("",20);l.port1.start();const A=setTimeout(()=>{_(new Error("unsupported_event"))},a);d={messageChannel:l,onMessage(I){const k=I;if(k.data.eventId===v)switch(k.data.status){case"ack":clearTimeout(A),h=setTimeout(()=>{_(new Error("timeout"))},3e3);break;case"done":clearTimeout(h),p(k.data.response);break;default:clearTimeout(A),clearTimeout(h),_(new Error("invalid_response"));break}}},this.handlers.add(d),l.port1.addEventListener("message",d.onMessage),this.target.postMessage({eventType:t,eventId:v,data:i},[l.port2])}).finally(()=>{d&&this.removeMessageHandler(d)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fi(){return window}function pI(s){fi().location.href=s}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xT(){return typeof fi().WorkerGlobalScope<"u"&&typeof fi().importScripts=="function"}async function yI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function _I(){var s;return((s=navigator==null?void 0:navigator.serviceWorker)==null?void 0:s.controller)||null}function vI(){return xT()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kT="firebaseLocalStorageDb",EI=1,Pc="firebaseLocalStorage",UT="fbase_key";class xl{constructor(t){this.request=t}toPromise(){return new Promise((t,i)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{i(this.request.error)})})}}function eh(s,t){return s.transaction([Pc],t?"readwrite":"readonly").objectStore(Pc)}function TI(){const s=indexedDB.deleteDatabase(kT);return new xl(s).toPromise()}function Kd(){const s=indexedDB.open(kT,EI);return new Promise((t,i)=>{s.addEventListener("error",()=>{i(s.error)}),s.addEventListener("upgradeneeded",()=>{const a=s.result;try{a.createObjectStore(Pc,{keyPath:UT})}catch(l){i(l)}}),s.addEventListener("success",async()=>{const a=s.result;a.objectStoreNames.contains(Pc)?t(a):(a.close(),await TI(),t(await Kd()))})})}async function fv(s,t,i){const a=eh(s,!0).put({[UT]:t,value:i});return new xl(a).toPromise()}async function AI(s,t){const i=eh(s,!1).get(t),a=await new xl(i).toPromise();return a===void 0?null:a.value}function dv(s,t){const i=eh(s,!0).delete(t);return new xl(i).toPromise()}const SI=800,bI=3;class PT{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Kd(),this.db)}async _withRetries(t){let i=0;for(;;)try{const a=await this._openDb();return await t(a)}catch(a){if(i++>bI)throw a;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return xT()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=th._getInstance(vI()),this.receiver._subscribe("keyChanged",async(t,i)=>({keyProcessed:(await this._poll()).includes(i.key)})),this.receiver._subscribe("ping",async(t,i)=>["keyChanged"])}async initializeSender(){var i,a;if(this.activeServiceWorker=await yI(),!this.activeServiceWorker)return;this.sender=new gI(this.activeServiceWorker);const t=await this.sender._send("ping",{},800);t&&(i=t[0])!=null&&i.fulfilled&&(a=t[0])!=null&&a.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||_I()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Kd();return await fv(t,Uc,"1"),await dv(t,Uc),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,i){return this._withPendingWrite(async()=>(await this._withRetries(a=>fv(a,t,i)),this.localCache[t]=i,this.notifyServiceWorker(t)))}async _get(t){const i=await this._withRetries(a=>AI(a,t));return this.localCache[t]=i,i}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(i=>dv(i,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(l=>{const h=eh(l,!1).getAll();return new xl(h).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const i=[],a=new Set;if(t.length!==0)for(const{fbase_key:l,value:h}of t)a.add(l),JSON.stringify(this.localCache[l])!==JSON.stringify(h)&&(this.notifyListeners(l,h),i.push(l));for(const l of Object.keys(this.localCache))this.localCache[l]&&!a.has(l)&&(this.notifyListeners(l,null),i.push(l));return i}notifyListeners(t,i){this.localCache[t]=i;const a=this.listeners[t];if(a)for(const l of Array.from(a))l(i)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),SI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,i){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(i)}_removeListener(t,i){this.listeners[t]&&(this.listeners[t].delete(i),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}PT.type="LOCAL";const wI=PT;new Ml(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RI(s,t){return t?zi(t):(pt(s._popupRedirectResolver,s,"argument-error"),s._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Om extends IT{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Ga(t,this._buildIdpRequest())}_linkToIdToken(t,i){return Ga(t,this._buildIdpRequest(i))}_getReauthenticationResolver(t){return Ga(t,this._buildIdpRequest())}_buildIdpRequest(t){const i={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(i.idToken=t),i}}function II(s){return lI(s.auth,new Om(s),s.bypassAuthState)}function CI(s){const{auth:t,user:i}=s;return pt(i,t,"internal-error"),oI(i,new Om(s),s.bypassAuthState)}async function DI(s){const{auth:t,user:i}=s;return pt(i,t,"internal-error"),aI(i,new Om(s),s.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LT{constructor(t,i,a,l,h=!1){this.auth=t,this.resolver=a,this.user=l,this.bypassAuthState=h,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(i)?i:[i]}execute(){return new Promise(async(t,i)=>{this.pendingPromise={resolve:t,reject:i};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(a){this.reject(a)}})}async onAuthEvent(t){const{urlResponse:i,sessionId:a,postBody:l,tenantId:h,error:d,type:p}=t;if(d){this.reject(d);return}const _={auth:this.auth,requestUri:i,sessionId:a,tenantId:h||void 0,postBody:l||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(p)(_))}catch(v){this.reject(v)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return II;case"linkViaPopup":case"linkViaRedirect":return DI;case"reauthViaPopup":case"reauthViaRedirect":return CI;default:Gi(this.auth,"internal-error")}}resolve(t){Fi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Fi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OI=new Ml(2e3,1e4);class za extends LT{constructor(t,i,a,l,h){super(t,i,l,h),this.provider=a,this.authWindow=null,this.pollId=null,za.currentPopupAction&&za.currentPopupAction.cancel(),za.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return pt(t,this.auth,"internal-error"),t}async onExecution(){Fi(this.filter.length===1,"Popup operations only handle one event");const t=Dm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(i=>{this.reject(i)}),this.resolver._isIframeWebStorageSupported(this.auth,i=>{i||this.reject(hi(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)==null?void 0:t.associatedEvent)||null}cancel(){this.reject(hi(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,za.currentPopupAction=null}pollUserCancellation(){const t=()=>{var i,a;if((a=(i=this.authWindow)==null?void 0:i.window)!=null&&a.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(hi(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,OI.get())};t()}}za.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NI="pendingRedirect",pc=new Map;class MI extends LT{constructor(t,i,a=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],i,void 0,a),this.eventId=null}async execute(){let t=pc.get(this.auth._key());if(!t){try{const a=await VI(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(a)}catch(i){t=()=>Promise.reject(i)}pc.set(this.auth._key(),t)}return this.bypassAuthState||pc.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const i=await this.auth._redirectUserForId(t.eventId);if(i)return this.user=i,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function VI(s,t){const i=UI(t),a=kI(s);if(!await a._isAvailable())return!1;const l=await a._get(i)==="true";return await a._remove(i),l}function xI(s,t){pc.set(s._key(),t)}function kI(s){return zi(s._redirectPersistence)}function UI(s){return gc(NI,s.config.apiKey,s.name)}async function PI(s,t,i=!1){if(qn(s.app))return Promise.reject(Nr(s));const a=Im(s),l=RI(a,t),d=await new MI(a,l,i).execute();return d&&!i&&(delete d.user._redirectEventId,await a._persistUserIfCurrent(d.user),await a._setRedirectUser(null,t)),d}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LI=600*1e3;class zI{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let i=!1;return this.consumers.forEach(a=>{this.isEventForConsumer(t,a)&&(i=!0,this.sendToConsumer(t,a),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!BI(t)||(this.hasHandledPotentialRedirect=!0,i||(this.queuedRedirectEvent=t,i=!0)),i}sendToConsumer(t,i){var a;if(t.error&&!zT(t)){const l=((a=t.error.code)==null?void 0:a.split("auth/")[1])||"internal-error";i.onError(hi(this.auth,l))}else i.onAuthEvent(t)}isEventForConsumer(t,i){const a=i.eventId===null||!!t.eventId&&t.eventId===i.eventId;return i.filter.includes(t.type)&&a}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=LI&&this.cachedEventUids.clear(),this.cachedEventUids.has(mv(t))}saveEventToCache(t){this.cachedEventUids.add(mv(t)),this.lastProcessedEventTime=Date.now()}}function mv(s){return[s.type,s.eventId,s.sessionId,s.tenantId].filter(t=>t).join("-")}function zT({type:s,error:t}){return s==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function BI(s){switch(s.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return zT(s);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jI(s,t={}){return Wa(s,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,qI=/^https?/;async function GI(s){if(s.config.emulator)return;const{authorizedDomains:t}=await jI(s);for(const i of t)try{if(FI(i))return}catch{}Gi(s,"unauthorized-domain")}function FI(s){const t=Fd(),{protocol:i,hostname:a}=new URL(t);if(s.startsWith("chrome-extension://")){const d=new URL(s);return d.hostname===""&&a===""?i==="chrome-extension:"&&s.replace("chrome-extension://","")===t.replace("chrome-extension://",""):i==="chrome-extension:"&&d.hostname===a}if(!qI.test(i))return!1;if(HI.test(s))return a===s;const l=s.replace(/\./g,"\\.");return new RegExp("^(.+\\."+l+"|"+l+")$","i").test(a)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YI=new Ml(3e4,6e4);function gv(){const s=fi().___jsl;if(s!=null&&s.H){for(const t of Object.keys(s.H))if(s.H[t].r=s.H[t].r||[],s.H[t].L=s.H[t].L||[],s.H[t].r=[...s.H[t].L],s.CP)for(let i=0;i<s.CP.length;i++)s.CP[i]=null}}function KI(s){return new Promise((t,i)=>{var l,h,d;function a(){gv(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{gv(),i(hi(s,"network-request-failed"))},timeout:YI.get()})}if((h=(l=fi().gapi)==null?void 0:l.iframes)!=null&&h.Iframe)t(gapi.iframes.getContext());else if((d=fi().gapi)!=null&&d.load)a();else{const p=WR("iframefcb");return fi()[p]=()=>{gapi.load?a():i(hi(s,"network-request-failed"))},ZR(`${JR()}?onload=${p}`).catch(_=>i(_))}}).catch(t=>{throw yc=null,t})}let yc=null;function QI(s){return yc=yc||KI(s),yc}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XI=new Ml(5e3,15e3),$I="__/auth/iframe",ZI="emulator/auth/iframe",JI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},WI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function t2(s){const t=s.config;pt(t.authDomain,s,"auth-domain-config-required");const i=t.emulator?Sm(t,ZI):`https://${s.config.authDomain}/${$I}`,a={apiKey:t.apiKey,appName:s.name,v:jr},l=WI.get(s.config.apiHost);l&&(a.eid=l);const h=s._getFrameworks();return h.length&&(a.fw=h.join(",")),`${i}?${wl(a).slice(1)}`}async function e2(s){const t=await QI(s),i=fi().gapi;return pt(i,s,"internal-error"),t.open({where:document.body,url:t2(s),messageHandlersFilter:i.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:JI,dontclear:!0},a=>new Promise(async(l,h)=>{await a.restyle({setHideOnLeave:!1});const d=hi(s,"network-request-failed"),p=fi().setTimeout(()=>{h(d)},XI.get());function _(){fi().clearTimeout(p),l(a)}a.ping(_).then(_,()=>{h(d)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n2={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},i2=500,s2=600,r2="_blank",a2="http://localhost";class pv{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function o2(s,t,i,a=i2,l=s2){const h=Math.max((window.screen.availHeight-l)/2,0).toString(),d=Math.max((window.screen.availWidth-a)/2,0).toString();let p="";const _={...n2,width:a.toString(),height:l.toString(),top:h,left:d},v=Ye().toLowerCase();i&&(p=vT(v)?r2:i),yT(v)&&(t=t||a2,_.scrollbars="yes");const A=Object.entries(_).reduce((k,[Q,$])=>`${k}${Q}=${$},`,"");if(qR(v)&&p!=="_self")return l2(t||"",p),new pv(null);const I=window.open(t||"",p,A);pt(I,s,"popup-blocked");try{I.focus()}catch{}return new pv(I)}function l2(s,t){const i=document.createElement("a");i.href=s,i.target=t;const a=document.createEvent("MouseEvent");a.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),i.dispatchEvent(a)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u2="__/auth/handler",c2="emulator/auth/handler",h2=encodeURIComponent("fac");async function yv(s,t,i,a,l,h){pt(s.config.authDomain,s,"auth-domain-config-required"),pt(s.config.apiKey,s,"invalid-api-key");const d={apiKey:s.config.apiKey,appName:s.name,authType:i,redirectUrl:a,v:jr,eventId:l};if(t instanceof CT){t.setDefaultLanguage(s.languageCode),d.providerId=t.providerId||"",vS(t.getCustomParameters())||(d.customParameters=JSON.stringify(t.getCustomParameters()));for(const[A,I]of Object.entries({}))d[A]=I}if(t instanceof Vl){const A=t.getScopes().filter(I=>I!=="");A.length>0&&(d.scopes=A.join(","))}s.tenantId&&(d.tid=s.tenantId);const p=d;for(const A of Object.keys(p))p[A]===void 0&&delete p[A];const _=await s._getAppCheckToken(),v=_?`#${h2}=${encodeURIComponent(_)}`:"";return`${f2(s)}?${wl(p).slice(1)}${v}`}function f2({config:s}){return s.emulator?Sm(s,c2):`https://${s.authDomain}/${u2}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Td="webStorageSupport";class d2{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=VT,this._completeRedirectFn=PI,this._overrideRedirectResult=xI}async _openPopup(t,i,a,l){var d;Fi((d=this.eventManagers[t._key()])==null?void 0:d.manager,"_initialize() not called before _openPopup()");const h=await yv(t,i,a,Fd(),l);return o2(t,h,Dm())}async _openRedirect(t,i,a,l){await this._originValidation(t);const h=await yv(t,i,a,Fd(),l);return pI(h),new Promise(()=>{})}_initialize(t){const i=t._key();if(this.eventManagers[i]){const{manager:l,promise:h}=this.eventManagers[i];return l?Promise.resolve(l):(Fi(h,"If manager is not set, promise should be"),h)}const a=this.initAndGetManager(t);return this.eventManagers[i]={promise:a},a.catch(()=>{delete this.eventManagers[i]}),a}async initAndGetManager(t){const i=await e2(t),a=new zI(t);return i.register("authEvent",l=>(pt(l==null?void 0:l.authEvent,t,"invalid-auth-event"),{status:a.onEvent(l.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:a},this.iframes[t._key()]=i,a}_isIframeWebStorageSupported(t,i){this.iframes[t._key()].send(Td,{type:Td},l=>{var d;const h=(d=l==null?void 0:l[0])==null?void 0:d[Td];h!==void 0&&i(!!h),Gi(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const i=t._key();return this.originValidationPromises[i]||(this.originValidationPromises[i]=GI(t)),this.originValidationPromises[i]}get _shouldInitProactively(){return bT()||_T()||Rm()}}const m2=d2;var _v="@firebase/auth",vv="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g2{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)==null?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const i=this.auth.onIdTokenChanged(a=>{t((a==null?void 0:a.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,i),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const i=this.internalListeners.get(t);i&&(this.internalListeners.delete(t),i(),this.updateProactiveRefresh())}assertAuthConfigured(){pt(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p2(s){switch(s){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function y2(s){Xn(new Dn("auth",(t,{options:i})=>{const a=t.getProvider("app").getImmediate(),l=t.getProvider("heartbeat"),h=t.getProvider("app-check-internal"),{apiKey:d,authDomain:p}=a.options;pt(d&&!d.includes(":"),"invalid-api-key",{appName:a.name});const _={apiKey:d,authDomain:p,clientPlatform:s,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:wT(s)},v=new XR(a,l,h,_);return eI(v,i),v},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,i,a)=>{t.getProvider("auth-internal").initialize()})),Xn(new Dn("auth-internal",t=>{const i=Im(t.getProvider("auth").getImmediate());return(a=>new g2(a))(i)},"PRIVATE").setInstantiationMode("EXPLICIT")),sn(_v,vv,p2(s)),sn(_v,vv,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _2=300,v2=qv("authIdTokenMaxAge")||_2;let Ev=null;const E2=s=>async t=>{const i=t&&await t.getIdTokenResult(),a=i&&(new Date().getTime()-Date.parse(i.issuedAtTime))/1e3;if(a&&a>v2)return;const l=i==null?void 0:i.token;Ev!==l&&(Ev=l,await fetch(s,{method:l?"POST":"DELETE",headers:l?{Authorization:`Bearer ${l}`}:{}}))};function T2(s=Gc()){const t=Hs(s,"auth");if(t.isInitialized())return t.getImmediate();const i=tI(s,{popupRedirectResolver:m2,persistence:[wI,dI,VT]}),a=qv("authTokenSyncURL");if(a&&typeof isSecureContext=="boolean"&&isSecureContext){const h=new URL(a,location.origin);if(location.origin===h.origin){const d=E2(h.toString());cI(i,d,()=>d(i.currentUser)),uI(i,p=>d(p))}}const l=Bv("auth");return l&&nI(i,`http://${l}`),i}function A2(){var s;return((s=document.getElementsByTagName("head"))==null?void 0:s[0])??document}$R({loadJS(s){return new Promise((t,i)=>{const a=document.createElement("script");a.setAttribute("src",s),a.onload=t,a.onerror=l=>{const h=hi("internal-error");h.customData=l,i(h)},a.type="text/javascript",a.charset="UTF-8",A2().appendChild(a)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});y2("Browser");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BT="firebasestorage.googleapis.com",S2="storageBucket",b2=120*1e3,w2=600*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi extends On{constructor(t,i,a=0){super(Ad(t),`Firebase Storage: ${i} (${Ad(t)})`),this.status_=a,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,pi.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return Ad(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var gi;(function(s){s.UNKNOWN="unknown",s.OBJECT_NOT_FOUND="object-not-found",s.BUCKET_NOT_FOUND="bucket-not-found",s.PROJECT_NOT_FOUND="project-not-found",s.QUOTA_EXCEEDED="quota-exceeded",s.UNAUTHENTICATED="unauthenticated",s.UNAUTHORIZED="unauthorized",s.UNAUTHORIZED_APP="unauthorized-app",s.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",s.INVALID_CHECKSUM="invalid-checksum",s.CANCELED="canceled",s.INVALID_EVENT_NAME="invalid-event-name",s.INVALID_URL="invalid-url",s.INVALID_DEFAULT_BUCKET="invalid-default-bucket",s.NO_DEFAULT_BUCKET="no-default-bucket",s.CANNOT_SLICE_BLOB="cannot-slice-blob",s.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",s.NO_DOWNLOAD_URL="no-download-url",s.INVALID_ARGUMENT="invalid-argument",s.INVALID_ARGUMENT_COUNT="invalid-argument-count",s.APP_DELETED="app-deleted",s.INVALID_ROOT_OPERATION="invalid-root-operation",s.INVALID_FORMAT="invalid-format",s.INTERNAL_ERROR="internal-error",s.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(gi||(gi={}));function Ad(s){return"storage/"+s}function R2(){const s="An unknown error occurred, please check the error payload for server response.";return new pi(gi.UNKNOWN,s)}function I2(){return new pi(gi.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function C2(){return new pi(gi.CANCELED,"User canceled the upload/download.")}function D2(s){return new pi(gi.INVALID_URL,"Invalid URL '"+s+"'.")}function O2(s){return new pi(gi.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+s+"'.")}function Tv(s){return new pi(gi.INVALID_ARGUMENT,s)}function jT(){return new pi(gi.APP_DELETED,"The Firebase app was deleted.")}function N2(s){return new pi(gi.INVALID_ROOT_OPERATION,"The operation '"+s+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(t,i){this.bucket=t,this.path_=i}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,i){let a;try{a=Qn.makeFromUrl(t,i)}catch{return new Qn(t,"")}if(a.path==="")return a;throw O2(t)}static makeFromUrl(t,i){let a=null;const l="([A-Za-z0-9.\\-_]+)";function h(vt){vt.path.charAt(vt.path.length-1)==="/"&&(vt.path_=vt.path_.slice(0,-1))}const d="(/(.*))?$",p=new RegExp("^gs://"+l+d,"i"),_={bucket:1,path:3};function v(vt){vt.path_=decodeURIComponent(vt.path)}const A="v[A-Za-z0-9_]+",I=i.replace(/[.]/g,"\\."),k="(/([^?#]*).*)?$",Q=new RegExp(`^https?://${I}/${A}/b/${l}/o${k}`,"i"),$={bucket:1,path:3},it=i===BT?"(?:storage.googleapis.com|storage.cloud.google.com)":i,Z="([^?#]*)",Et=new RegExp(`^https?://${it}/${l}/${Z}`,"i"),ht=[{regex:p,indices:_,postModify:h},{regex:Q,indices:$,postModify:v},{regex:Et,indices:{bucket:1,path:2},postModify:v}];for(let vt=0;vt<ht.length;vt++){const lt=ht[vt],St=lt.regex.exec(t);if(St){const C=St[lt.indices.bucket];let S=St[lt.indices.path];S||(S=""),a=new Qn(C,S),lt.postModify(a);break}}if(a==null)throw D2(t);return a}}class M2{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V2(s,t,i){let a=1,l=null,h=null,d=!1,p=0;function _(){return p===2}let v=!1;function A(...Z){v||(v=!0,t.apply(null,Z))}function I(Z){l=setTimeout(()=>{l=null,s(Q,_())},Z)}function k(){h&&clearTimeout(h)}function Q(Z,...Et){if(v){k();return}if(Z){k(),A.call(null,Z,...Et);return}if(_()||d){k(),A.call(null,Z,...Et);return}a<64&&(a*=2);let ht;p===1?(p=2,ht=0):ht=(a+Math.random())*1e3,I(ht)}let $=!1;function it(Z){$||($=!0,k(),!v&&(l!==null?(Z||(p=2),clearTimeout(l),I(0)):Z||(p=1)))}return I(0),h=setTimeout(()=>{d=!0,it(!0)},i),it}function x2(s){s(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k2(s){return s!==void 0}function Av(s,t,i,a){if(a<t)throw Tv(`Invalid value for '${s}'. Expected ${t} or greater.`);if(a>i)throw Tv(`Invalid value for '${s}'. Expected ${i} or less.`)}function U2(s){const t=encodeURIComponent;let i="?";for(const a in s)if(s.hasOwnProperty(a)){const l=t(a)+"="+t(s[a]);i=i+l+"&"}return i=i.slice(0,-1),i}var Lc;(function(s){s[s.NO_ERROR=0]="NO_ERROR",s[s.NETWORK_ERROR=1]="NETWORK_ERROR",s[s.ABORT=2]="ABORT"})(Lc||(Lc={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P2(s,t){const i=s>=500&&s<600,l=[408,429].indexOf(s)!==-1,h=t.indexOf(s)!==-1;return i||l||h}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L2{constructor(t,i,a,l,h,d,p,_,v,A,I,k=!0,Q=!1){this.url_=t,this.method_=i,this.headers_=a,this.body_=l,this.successCodes_=h,this.additionalRetryCodes_=d,this.callback_=p,this.errorCallback_=_,this.timeout_=v,this.progressCallback_=A,this.connectionFactory_=I,this.retry=k,this.isUsingEmulator=Q,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise(($,it)=>{this.resolve_=$,this.reject_=it,this.start_()})}start_(){const t=(a,l)=>{if(l){a(!1,new oc(!1,null,!0));return}const h=this.connectionFactory_();this.pendingConnection_=h;const d=p=>{const _=p.loaded,v=p.lengthComputable?p.total:-1;this.progressCallback_!==null&&this.progressCallback_(_,v)};this.progressCallback_!==null&&h.addUploadProgressListener(d),h.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&h.removeUploadProgressListener(d),this.pendingConnection_=null;const p=h.getErrorCode()===Lc.NO_ERROR,_=h.getStatus();if(!p||P2(_,this.additionalRetryCodes_)&&this.retry){const A=h.getErrorCode()===Lc.ABORT;a(!1,new oc(!1,null,A));return}const v=this.successCodes_.indexOf(_)!==-1;a(!0,new oc(v,h))})},i=(a,l)=>{const h=this.resolve_,d=this.reject_,p=l.connection;if(l.wasSuccessCode)try{const _=this.callback_(p,p.getResponse());k2(_)?h(_):h()}catch(_){d(_)}else if(p!==null){const _=R2();_.serverResponse=p.getErrorText(),this.errorCallback_?d(this.errorCallback_(p,_)):d(_)}else if(l.canceled){const _=this.appDelete_?jT():C2();d(_)}else{const _=I2();d(_)}};this.canceled_?i(!1,new oc(!1,null,!0)):this.backoffId_=V2(t,i,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&x2(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class oc{constructor(t,i,a){this.wasSuccessCode=t,this.connection=i,this.canceled=!!a}}function z2(s,t){t!==null&&t.length>0&&(s.Authorization="Firebase "+t)}function B2(s,t){s["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function j2(s,t){t&&(s["X-Firebase-GMPID"]=t)}function H2(s,t){t!==null&&(s["X-Firebase-AppCheck"]=t)}function q2(s,t,i,a,l,h,d=!0,p=!1){const _=U2(s.urlParams),v=s.url+_,A=Object.assign({},s.headers);return j2(A,t),z2(A,i),B2(A,h),H2(A,a),new L2(v,s.method,A,s.body,s.successCodes,s.additionalRetryCodes,s.handler,s.errorHandler,s.timeout,s.progressCallback,l,d,p)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G2(s){if(s.length===0)return null;const t=s.lastIndexOf("/");return t===-1?"":s.slice(0,t)}function F2(s){const t=s.lastIndexOf("/",s.length-2);return t===-1?s:s.slice(t+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zc{constructor(t,i){this._service=t,i instanceof Qn?this._location=i:this._location=Qn.makeFromUrl(i,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,i){return new zc(t,i)}get root(){const t=new Qn(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return F2(this._location.path)}get storage(){return this._service}get parent(){const t=G2(this._location.path);if(t===null)return null;const i=new Qn(this._location.bucket,t);return new zc(this._service,i)}_throwIfRoot(t){if(this._location.path==="")throw N2(t)}}function Sv(s,t){const i=t==null?void 0:t[S2];return i==null?null:Qn.makeFromBucketSpec(i,s)}function Y2(s,t,i,a={}){s.host=`${t}:${i}`;const l=zr(t);l&&($d(`https://${s.host}/b`),Zd("Storage",!0)),s._isUsingEmulator=!0,s._protocol=l?"https":"http";const{mockUserToken:h}=a;h&&(s._overrideAuthToken=typeof h=="string"?h:Gv(h,s.app.options.projectId))}class K2{constructor(t,i,a,l,h,d=!1){this.app=t,this._authProvider=i,this._appCheckProvider=a,this._url=l,this._firebaseVersion=h,this._isUsingEmulator=d,this._bucket=null,this._host=BT,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=b2,this._maxUploadRetryTime=w2,this._requests=new Set,l!=null?this._bucket=Qn.makeFromBucketSpec(l,this._host):this._bucket=Sv(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=Qn.makeFromBucketSpec(this._url,t):this._bucket=Sv(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){Av("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){Av("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const i=await t.getToken();if(i!==null)return i.accessToken}return null}async _getAppCheckToken(){if(qn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new zc(this,t)}_makeRequest(t,i,a,l,h=!0){if(this._deleted)return new M2(jT());{const d=q2(t,this._appId,a,l,i,this._firebaseVersion,h,this._isUsingEmulator);return this._requests.add(d),d.getPromise().then(()=>this._requests.delete(d),()=>this._requests.delete(d)),d}}async makeRequestWithTokens(t,i){const[a,l]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,i,a,l).getPromise()}}const bv="@firebase/storage",wv="0.14.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HT="storage";function Q2(s=Gc(),t){s=an(s);const a=Hs(s,HT).getImmediate({identifier:t}),l=jv("storage");return l&&X2(a,...l),a}function X2(s,t,i,a={}){Y2(s,t,i,a)}function $2(s,{instanceIdentifier:t}){const i=s.getProvider("app").getImmediate(),a=s.getProvider("auth-internal"),l=s.getProvider("app-check-internal");return new K2(i,a,l,t,jr)}function Z2(){Xn(new Dn(HT,$2,"PUBLIC").setMultipleInstances(!0)),sn(bv,wv,""),sn(bv,wv,"esm2020")}Z2();const qT="@firebase/installations",Nm="0.6.19";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GT=1e4,FT=`w:${Nm}`,YT="FIS_v2",J2="https://firebaseinstallations.googleapis.com/v1",W2=3600*1e3,tC="installations",eC="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nC={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Pr=new Br(tC,eC,nC);function KT(s){return s instanceof On&&s.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QT({projectId:s}){return`${J2}/projects/${s}/installations`}function XT(s){return{token:s.token,requestStatus:2,expiresIn:sC(s.expiresIn),creationTime:Date.now()}}async function $T(s,t){const a=(await t.json()).error;return Pr.create("request-failed",{requestName:s,serverCode:a.code,serverMessage:a.message,serverStatus:a.status})}function ZT({apiKey:s}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":s})}function iC(s,{refreshToken:t}){const i=ZT(s);return i.append("Authorization",rC(t)),i}async function JT(s){const t=await s();return t.status>=500&&t.status<600?s():t}function sC(s){return Number(s.replace("s","000"))}function rC(s){return`${YT} ${s}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aC({appConfig:s,heartbeatServiceProvider:t},{fid:i}){const a=QT(s),l=ZT(s),h=t.getImmediate({optional:!0});if(h){const v=await h.getHeartbeatsHeader();v&&l.append("x-firebase-client",v)}const d={fid:i,authVersion:YT,appId:s.appId,sdkVersion:FT},p={method:"POST",headers:l,body:JSON.stringify(d)},_=await JT(()=>fetch(a,p));if(_.ok){const v=await _.json();return{fid:v.fid||i,registrationStatus:2,refreshToken:v.refreshToken,authToken:XT(v.authToken)}}else throw await $T("Create Installation",_)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WT(s){return new Promise(t=>{setTimeout(t,s)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oC(s){return btoa(String.fromCharCode(...s)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lC=/^[cdef][\w-]{21}$/,Qd="";function uC(){try{const s=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(s),s[0]=112+s[0]%16;const i=cC(s);return lC.test(i)?i:Qd}catch{return Qd}}function cC(s){return oC(s).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nh(s){return`${s.appName}!${s.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t0=new Map;function e0(s,t){const i=nh(s);n0(i,t),hC(i,t)}function n0(s,t){const i=t0.get(s);if(i)for(const a of i)a(t)}function hC(s,t){const i=fC();i&&i.postMessage({key:s,fid:t}),dC()}let Cr=null;function fC(){return!Cr&&"BroadcastChannel"in self&&(Cr=new BroadcastChannel("[Firebase] FID Change"),Cr.onmessage=s=>{n0(s.data.key,s.data.fid)}),Cr}function dC(){t0.size===0&&Cr&&(Cr.close(),Cr=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mC="firebase-installations-database",gC=1,Lr="firebase-installations-store";let Sd=null;function Mm(){return Sd||(Sd=$v(mC,gC,{upgrade:(s,t)=>{switch(t){case 0:s.createObjectStore(Lr)}}})),Sd}async function Bc(s,t){const i=nh(s),l=(await Mm()).transaction(Lr,"readwrite"),h=l.objectStore(Lr),d=await h.get(i);return await h.put(t,i),await l.done,(!d||d.fid!==t.fid)&&e0(s,t.fid),t}async function i0(s){const t=nh(s),a=(await Mm()).transaction(Lr,"readwrite");await a.objectStore(Lr).delete(t),await a.done}async function ih(s,t){const i=nh(s),l=(await Mm()).transaction(Lr,"readwrite"),h=l.objectStore(Lr),d=await h.get(i),p=t(d);return p===void 0?await h.delete(i):await h.put(p,i),await l.done,p&&(!d||d.fid!==p.fid)&&e0(s,p.fid),p}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vm(s){let t;const i=await ih(s.appConfig,a=>{const l=pC(a),h=yC(s,l);return t=h.registrationPromise,h.installationEntry});return i.fid===Qd?{installationEntry:await t}:{installationEntry:i,registrationPromise:t}}function pC(s){const t=s||{fid:uC(),registrationStatus:0};return s0(t)}function yC(s,t){if(t.registrationStatus===0){if(!navigator.onLine){const l=Promise.reject(Pr.create("app-offline"));return{installationEntry:t,registrationPromise:l}}const i={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},a=_C(s,i);return{installationEntry:i,registrationPromise:a}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:vC(s)}:{installationEntry:t}}async function _C(s,t){try{const i=await aC(s,t);return Bc(s.appConfig,i)}catch(i){throw KT(i)&&i.customData.serverCode===409?await i0(s.appConfig):await Bc(s.appConfig,{fid:t.fid,registrationStatus:0}),i}}async function vC(s){let t=await Rv(s.appConfig);for(;t.registrationStatus===1;)await WT(100),t=await Rv(s.appConfig);if(t.registrationStatus===0){const{installationEntry:i,registrationPromise:a}=await Vm(s);return a||i}return t}function Rv(s){return ih(s,t=>{if(!t)throw Pr.create("installation-not-found");return s0(t)})}function s0(s){return EC(s)?{fid:s.fid,registrationStatus:0}:s}function EC(s){return s.registrationStatus===1&&s.registrationTime+GT<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TC({appConfig:s,heartbeatServiceProvider:t},i){const a=AC(s,i),l=iC(s,i),h=t.getImmediate({optional:!0});if(h){const v=await h.getHeartbeatsHeader();v&&l.append("x-firebase-client",v)}const d={installation:{sdkVersion:FT,appId:s.appId}},p={method:"POST",headers:l,body:JSON.stringify(d)},_=await JT(()=>fetch(a,p));if(_.ok){const v=await _.json();return XT(v)}else throw await $T("Generate Auth Token",_)}function AC(s,{fid:t}){return`${QT(s)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xm(s,t=!1){let i;const a=await ih(s.appConfig,h=>{if(!r0(h))throw Pr.create("not-registered");const d=h.authToken;if(!t&&wC(d))return h;if(d.requestStatus===1)return i=SC(s,t),h;{if(!navigator.onLine)throw Pr.create("app-offline");const p=IC(h);return i=bC(s,p),p}});return i?await i:a.authToken}async function SC(s,t){let i=await Iv(s.appConfig);for(;i.authToken.requestStatus===1;)await WT(100),i=await Iv(s.appConfig);const a=i.authToken;return a.requestStatus===0?xm(s,t):a}function Iv(s){return ih(s,t=>{if(!r0(t))throw Pr.create("not-registered");const i=t.authToken;return CC(i)?{...t,authToken:{requestStatus:0}}:t})}async function bC(s,t){try{const i=await TC(s,t),a={...t,authToken:i};return await Bc(s.appConfig,a),i}catch(i){if(KT(i)&&(i.customData.serverCode===401||i.customData.serverCode===404))await i0(s.appConfig);else{const a={...t,authToken:{requestStatus:0}};await Bc(s.appConfig,a)}throw i}}function r0(s){return s!==void 0&&s.registrationStatus===2}function wC(s){return s.requestStatus===2&&!RC(s)}function RC(s){const t=Date.now();return t<s.creationTime||s.creationTime+s.expiresIn<t+W2}function IC(s){const t={requestStatus:1,requestTime:Date.now()};return{...s,authToken:t}}function CC(s){return s.requestStatus===1&&s.requestTime+GT<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DC(s){const t=s,{installationEntry:i,registrationPromise:a}=await Vm(t);return a?a.catch(console.error):xm(t).catch(console.error),i.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OC(s,t=!1){const i=s;return await NC(i),(await xm(i,t)).token}async function NC(s){const{registrationPromise:t}=await Vm(s);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MC(s){if(!s||!s.options)throw bd("App Configuration");if(!s.name)throw bd("App Name");const t=["projectId","apiKey","appId"];for(const i of t)if(!s.options[i])throw bd(i);return{appName:s.name,projectId:s.options.projectId,apiKey:s.options.apiKey,appId:s.options.appId}}function bd(s){return Pr.create("missing-app-config-values",{valueName:s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a0="installations",VC="installations-internal",xC=s=>{const t=s.getProvider("app").getImmediate(),i=MC(t),a=Hs(t,"heartbeat");return{app:t,appConfig:i,heartbeatServiceProvider:a,_delete:()=>Promise.resolve()}},kC=s=>{const t=s.getProvider("app").getImmediate(),i=Hs(t,a0).getImmediate();return{getId:()=>DC(i),getToken:l=>OC(i,l)}};function UC(){Xn(new Dn(a0,xC,"PUBLIC")),Xn(new Dn(VC,kC,"PRIVATE"))}UC();sn(qT,Nm);sn(qT,Nm,"esm2020");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jc="analytics",PC="firebase_id",LC="origin",zC=60*1e3,BC="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",km="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rn=new qc("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jC={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},pn=new Br("analytics","Analytics",jC);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HC(s){if(!s.startsWith(km)){const t=pn.create("invalid-gtag-resource",{gtagURL:s});return rn.warn(t.message),""}return s}function o0(s){return Promise.all(s.map(t=>t.catch(i=>i)))}function qC(s,t){let i;return window.trustedTypes&&(i=window.trustedTypes.createPolicy(s,t)),i}function GC(s,t){const i=qC("firebase-js-sdk-policy",{createScriptURL:HC}),a=document.createElement("script"),l=`${km}?l=${s}&id=${t}`;a.src=i?i==null?void 0:i.createScriptURL(l):l,a.async=!0,document.head.appendChild(a)}function FC(s){let t=[];return Array.isArray(window[s])?t=window[s]:window[s]=t,t}async function YC(s,t,i,a,l,h){const d=a[l];try{if(d)await t[d];else{const _=(await o0(i)).find(v=>v.measurementId===l);_&&await t[_.appId]}}catch(p){rn.error(p)}s("config",l,h)}async function KC(s,t,i,a,l){try{let h=[];if(l&&l.send_to){let d=l.send_to;Array.isArray(d)||(d=[d]);const p=await o0(i);for(const _ of d){const v=p.find(I=>I.measurementId===_),A=v&&t[v.appId];if(A)h.push(A);else{h=[];break}}}h.length===0&&(h=Object.values(t)),await Promise.all(h),s("event",a,l||{})}catch(h){rn.error(h)}}function QC(s,t,i,a){async function l(h,...d){try{if(h==="event"){const[p,_]=d;await KC(s,t,i,p,_)}else if(h==="config"){const[p,_]=d;await YC(s,t,i,a,p,_)}else if(h==="consent"){const[p,_]=d;s("consent",p,_)}else if(h==="get"){const[p,_,v]=d;s("get",p,_,v)}else if(h==="set"){const[p]=d;s("set",p)}else s(h,...d)}catch(p){rn.error(p)}}return l}function XC(s,t,i,a,l){let h=function(...d){window[a].push(arguments)};return window[l]&&typeof window[l]=="function"&&(h=window[l]),window[l]=QC(h,s,t,i),{gtagCore:h,wrappedGtag:window[l]}}function $C(s){const t=window.document.getElementsByTagName("script");for(const i of Object.values(t))if(i.src&&i.src.includes(km)&&i.src.includes(s))return i;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZC=30,JC=1e3;class WC{constructor(t={},i=JC){this.throttleMetadata=t,this.intervalMillis=i}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,i){this.throttleMetadata[t]=i}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const l0=new WC;function tD(s){return new Headers({Accept:"application/json","x-goog-api-key":s})}async function eD(s){var d;const{appId:t,apiKey:i}=s,a={method:"GET",headers:tD(i)},l=BC.replace("{app-id}",t),h=await fetch(l,a);if(h.status!==200&&h.status!==304){let p="";try{const _=await h.json();(d=_.error)!=null&&d.message&&(p=_.error.message)}catch{}throw pn.create("config-fetch-failed",{httpStatus:h.status,responseMessage:p})}return h.json()}async function nD(s,t=l0,i){const{appId:a,apiKey:l,measurementId:h}=s.options;if(!a)throw pn.create("no-app-id");if(!l){if(h)return{measurementId:h,appId:a};throw pn.create("no-api-key")}const d=t.getThrottleMetadata(a)||{backoffCount:0,throttleEndTimeMillis:Date.now()},p=new rD;return setTimeout(async()=>{p.abort()},zC),u0({appId:a,apiKey:l,measurementId:h},d,p,t)}async function u0(s,{throttleEndTimeMillis:t,backoffCount:i},a,l=l0){var p;const{appId:h,measurementId:d}=s;try{await iD(a,t)}catch(_){if(d)return rn.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${d} provided in the "measurementId" field in the local Firebase config. [${_==null?void 0:_.message}]`),{appId:h,measurementId:d};throw _}try{const _=await eD(s);return l.deleteThrottleMetadata(h),_}catch(_){const v=_;if(!sD(v)){if(l.deleteThrottleMetadata(h),d)return rn.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${d} provided in the "measurementId" field in the local Firebase config. [${v==null?void 0:v.message}]`),{appId:h,measurementId:d};throw _}const A=Number((p=v==null?void 0:v.customData)==null?void 0:p.httpStatus)===503?o_(i,l.intervalMillis,ZC):o_(i,l.intervalMillis),I={throttleEndTimeMillis:Date.now()+A,backoffCount:i+1};return l.setThrottleMetadata(h,I),rn.debug(`Calling attemptFetch again in ${A} millis`),u0(s,I,a,l)}}function iD(s,t){return new Promise((i,a)=>{const l=Math.max(t-Date.now(),0),h=setTimeout(i,l);s.addEventListener(()=>{clearTimeout(h),a(pn.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function sD(s){if(!(s instanceof On)||!s.customData)return!1;const t=Number(s.customData.httpStatus);return t===429||t===500||t===503||t===504}class rD{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function aD(s,t,i,a,l){if(l&&l.global){s("event",i,a);return}else{const h=await t,d={...a,send_to:h};s("event",i,d)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oD(){if(Yv())try{await Kv()}catch(s){return rn.warn(pn.create("indexeddb-unavailable",{errorInfo:s==null?void 0:s.toString()}).message),!1}else return rn.warn(pn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function lD(s,t,i,a,l,h,d){const p=nD(s);p.then(k=>{i[k.measurementId]=k.appId,s.options.measurementId&&k.measurementId!==s.options.measurementId&&rn.warn(`The measurement ID in the local Firebase config (${s.options.measurementId}) does not match the measurement ID fetched from the server (${k.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(k=>rn.error(k)),t.push(p);const _=oD().then(k=>{if(k)return a.getId()}),[v,A]=await Promise.all([p,_]);$C(h)||GC(h,v.measurementId),l("js",new Date);const I=(d==null?void 0:d.config)??{};return I[LC]="firebase",I.update=!0,A!=null&&(I[PC]=A),l("config",v.measurementId,I),v.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uD{constructor(t){this.app=t}_delete(){return delete _l[this.app.options.appId],Promise.resolve()}}let _l={},Cv=[];const Dv={};let wd="dataLayer",cD="gtag",Ov,c0,Nv=!1;function hD(){const s=[];if(Fv()&&s.push("This is a browser extension environment."),gS()||s.push("Cookies are not available."),s.length>0){const t=s.map((a,l)=>`(${l+1}) ${a}`).join(" "),i=pn.create("invalid-analytics-context",{errorInfo:t});rn.warn(i.message)}}function fD(s,t,i){hD();const a=s.options.appId;if(!a)throw pn.create("no-app-id");if(!s.options.apiKey)if(s.options.measurementId)rn.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${s.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw pn.create("no-api-key");if(_l[a]!=null)throw pn.create("already-exists",{id:a});if(!Nv){FC(wd);const{wrappedGtag:h,gtagCore:d}=XC(_l,Cv,Dv,wd,cD);c0=h,Ov=d,Nv=!0}return _l[a]=lD(s,Cv,Dv,t,Ov,wd,i),new uD(s)}function dD(s=Gc()){s=an(s);const t=Hs(s,jc);return t.isInitialized()?t.getImmediate():mD(s)}function mD(s,t={}){const i=Hs(s,jc);if(i.isInitialized()){const l=i.getImmediate();if(Ps(t,i.getOptions()))return l;throw pn.create("already-initialized")}return i.initialize({options:t})}function gD(s,t,i,a){s=an(s),aD(c0,_l[s.app.options.appId],t,i,a).catch(l=>rn.error(l))}const Mv="@firebase/analytics",Vv="0.10.18";function pD(){Xn(new Dn(jc,(t,{options:i})=>{const a=t.getProvider("app").getImmediate(),l=t.getProvider("installations-internal").getImmediate();return fD(a,l,i)},"PUBLIC")),Xn(new Dn("analytics-internal",s,"PRIVATE")),sn(Mv,Vv),sn(Mv,Vv,"esm2020");function s(t){try{const i=t.getProvider(jc).getImmediate();return{logEvent:(a,l,h)=>gD(i,a,l,h)}}catch(i){throw pn.create("interop-component-reg-failed",{reason:i})}}}pD();const yD={apiKey:"AIzaSyA6nJyQhMFBLWWVHnTlUehun8de0BMjTZk",authDomain:"rsvp-system-2f6de.firebaseapp.com",projectId:"rsvp-system-2f6de",storageBucket:"rsvp-system-2f6de.firebasestorage.app",messagingSenderId:"59287727345",appId:"1:59287727345:web:273abf36e76a2cb68f8d50",measurementId:"G-8PKQMC1M49"},sh=Zv(yD),_D=uR(sh);T2(sh);Q2(sh);dD(sh);const vD=({onSubmit:s})=>{const[t,i]=Wt.useState({name:"",email:"",connectionMethod:null,eventId:"default-event"}),[a,l]=Wt.useState(""),[h,d]=Wt.useState(!1),p=A=>{const{name:I,value:k}=A.target;i(Q=>({...Q,[I]:k}))},_=A=>{i(I=>({...I,connectionMethod:A}))},v=async A=>{if(A.preventDefault(),!h){if(!t.name.trim()){l("Please enter your name.");return}if(!t.email.trim()||!/^\S+@\S+\.\S+$/.test(t.email)){l("Please enter a valid email.");return}if(!t.connectionMethod){l("Please select how you will connect.");return}l(""),d(!0);try{const I=await SR(oR(_D,"rsvps"),{...t,submittedAt:new Date});console.log("Document written with ID: ",I.id),s()}catch(I){console.error("Error adding document: ",I),l("Failed to submit RSVP. Please try again later.")}finally{d(!1)}}};return nt.jsxs("form",{onSubmit:v,className:"space-y-6",children:[nt.jsxs("div",{children:[nt.jsx("label",{htmlFor:"name",className:"block text-sm font-medium text-gray-700 mb-1",children:"Name"}),nt.jsx("input",{type:"text",id:"name",name:"name",value:t.name,onChange:p,className:"w-full px-4 py-3 border-2 border-slate-300 rounded-xl focus:ring-purple-500 focus:border-purple-500 transition duration-300 text-lg",placeholder:"Your Name"})]}),nt.jsxs("div",{children:[nt.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-700 mb-1",children:"Email"}),nt.jsx("input",{type:"email",id:"email",name:"email",value:t.email,onChange:p,className:"w-full px-4 py-3 border-2 border-slate-300 rounded-xl focus:ring-purple-500 focus:border-purple-500 transition duration-300 text-lg",placeholder:"your@email.com"})]}),nt.jsxs("div",{children:[nt.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"How will you connect?"}),nt.jsx("div",{className:"grid grid-cols-3 gap-3",children:Object.keys(lc).map(A=>nt.jsxs("div",{children:[nt.jsx("input",{type:"radio",id:A,name:"connectionMethod",value:A,className:"sr-only peer",checked:t.connectionMethod===A,onChange:()=>_(lc[A])}),nt.jsx("label",{htmlFor:A,className:"flex items-center justify-center w-full p-4 border-2 border-slate-300 rounded-xl cursor-pointer transition-all duration-300 peer-checked:bg-purple-500 peer-checked:text-white peer-checked:border-purple-500 hover:border-purple-400",children:lc[A]})]},A))})]}),a&&nt.jsx("p",{className:"text-red-500 text-center",children:a}),nt.jsx("button",{type:"submit",disabled:h,className:"w-full bg-yellow-400 hover:bg-yellow-500 text-slate-800 font-bold text-2xl py-4 px-4 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out disabled:bg-gray-400 disabled:cursor-not-allowed disabled:transform-none",children:h?"Submitting...":"Submit RSVP"})]})},xv=400,ka=200,kv=30,Ua=30,ED=.5,TD=-10,Rd=20,Id=40,AD=4,SD=({onPlayAgain:s})=>{const[t,i]=Wt.useState(ka-Ua),[a,l]=Wt.useState(0),[h,d]=Wt.useState([]),[p,_]=Wt.useState(0),[v,A]=Wt.useState(!1),[I,k]=Wt.useState(!1),Q=Wt.useRef(null),$=Wt.useRef(null),it=Wt.useRef(0),Z=Wt.useRef(0),Et=()=>nt.jsx("div",{style:{width:kv,height:Ua},className:"bg-gradient-to-b from-red-500 via-yellow-400 to-blue-500 rounded-md flex items-center justify-center",children:nt.jsx("div",{className:"text-xl",children:"🌈"})}),_t=()=>nt.jsx("div",{style:{width:Rd,height:Id},className:"bg-green-600 border-2 border-green-800 rounded-t-md flex items-center justify-center text-white",children:"🌵"}),ht=Wt.useCallback(C=>{if(!$.current){$.current=C,Q.current=requestAnimationFrame(ht);return}const S=C-$.current;l(M=>{const D=M+ED;return i(V=>Math.min(V+D,ka-Ua)),D});let R=!1;if(d(M=>{const D=M.map(b=>({...b,x:b.x-AD})).filter(b=>b.x>-Rd),V={x:50,y:t,width:kv,height:Ua};for(const b of D){const Pt={x:b.x,y:ka-Id,width:Rd,height:Id};V.x<Pt.x+Pt.width&&V.x+V.width>Pt.x&&V.y<Pt.y+Pt.height&&V.y+V.height>Pt.y&&(R=!0)}return D}),R){A(!0),k(!1),cancelAnimationFrame(Q.current);return}Z.current-=S,Z.current<=0&&(d(M=>[...M,{x:xv,id:it.current++}]),Z.current=1e3+Math.random()*1500),_(M=>M+1),$.current=C,Q.current=requestAnimationFrame(ht)},[t]),vt=Wt.useCallback(()=>{i(ka-Ua),l(0),d([]),_(0),A(!1),k(!0),it.current=0,Z.current=1500+Math.random()*1e3,$.current=void 0,Q.current=requestAnimationFrame(C=>ht(C))},[ht]),lt=Wt.useCallback(()=>{vt()},[vt]),St=Wt.useCallback(()=>{!v&&t>=ka-Ua&&l(TD)},[v,t]);return Wt.useEffect(()=>{const C=R=>{(R.code==="Space"||R.key==="ArrowUp")&&(R.preventDefault(),!I&&!v?lt():St())},S=R=>{R.preventDefault(),!I&&!v?lt():St()};return window.addEventListener("keydown",C),window.addEventListener("touchstart",S),()=>{window.removeEventListener("keydown",C),window.removeEventListener("touchstart",S),Q.current&&cancelAnimationFrame(Q.current)}},[I,v,St,lt]),nt.jsxs("div",{className:"flex flex-col items-center text-center",children:[nt.jsx("h2",{className:"text-2xl font-bold mb-2",children:"Thanks for your RSVP!"}),nt.jsx("p",{className:"text-gray-600 mb-4",children:"Have some fun while you wait!"}),nt.jsxs("div",{className:"relative bg-gray-100 border-4 border-gray-300 rounded-lg overflow-hidden cursor-pointer",style:{width:xv,height:ka},onClick:()=>{!I&&!v?lt():St()},children:[nt.jsx("div",{className:"absolute left-[50px] transition-transform duration-100",style:{transform:`translateY(${t}px)`},children:nt.jsx(Et,{})}),h.map(C=>nt.jsx("div",{className:"absolute bottom-0",style:{transform:`translateX(${C.x}px)`},children:nt.jsx(_t,{})},C.id)),nt.jsxs("div",{className:"absolute top-2 right-2 text-lg font-bold text-gray-500",children:["Score: ",Math.floor(p/10)]}),!I&&!v&&nt.jsxs("div",{className:"absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-30 text-white",children:[nt.jsx("h3",{className:"text-3xl font-bold",children:"Rainbow Hop!"}),nt.jsx("p",{children:"Click or Press Space to Start"})]}),v&&nt.jsxs("div",{className:"absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white",children:[nt.jsx("h3",{className:"text-4xl font-bold mb-2",children:"Game Over"}),nt.jsx("button",{onClick:lt,className:"mt-4 bg-yellow-400 hover:bg-yellow-500 text-slate-800 font-bold py-2 px-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300",children:"Play Again"})]})]}),nt.jsx("button",{onClick:s,className:"mt-6 text-sm text-gray-500 hover:text-purple-600 underline",children:"Back to RSVP Form"})]})},h0=()=>nt.jsx("div",{className:"relative w-full h-full",children:nt.jsxs("svg",{viewBox:"0 0 200 200",className:"w-full h-full",children:[nt.jsx("defs",{children:nt.jsx("style",{children:`
                    @import url('https://fonts.googleapis.com/css2?family=Fredoka+One&family=Luckiest+Guy&display=swap');
                `})}),nt.jsx("circle",{cx:"100",cy:"100",r:"98",fill:"white",stroke:"black",strokeWidth:"3"}),nt.jsx("path",{d:"M 2 100 A 98 98 0 0 1 198 100 L 2 100",fill:"#FBBF24"}),nt.jsxs("text",{x:"100",y:"45",textAnchor:"middle",style:{fontFamily:"Fredoka One, cursive"},fontSize:"11",fill:"black",fontWeight:"500",children:[nt.jsx("tspan",{x:"100",dy:"0",children:"You are invited to play in"}),nt.jsx("tspan",{x:"100",dy:"1.3em",children:"the soda labs. An all day music,"}),nt.jsx("tspan",{x:"100",dy:"1.3em",children:"culture and tech experiment"})]}),nt.jsxs("g",{children:[nt.jsx("circle",{cx:"100",cy:"100",r:"25",fill:"white",stroke:"black",strokeWidth:"0.5"}),nt.jsx("circle",{cx:"100",cy:"100",r:"23",fill:"#FBBF24",stroke:"black",strokeWidth:"0.5"}),nt.jsx("text",{x:"100",y:"105",textAnchor:"middle",style:{fontFamily:"Fredoka One, cursive"},fontSize:"12",fill:"black",fontWeight:"bold",children:"RSVP"})]}),nt.jsx("text",{x:"100",y:"165",textAnchor:"middle",style:{fontFamily:"Luckiest Guy, cursive"},fontSize:"40",fill:"#FBBF24",stroke:"black",strokeWidth:"2.5",strokeLinejoin:"round",letterSpacing:"1",children:"prototype sessions"})]})}),bD=({onContinue:s})=>nt.jsxs("div",{className:"min-h-screen w-full flex flex-col items-center justify-center p-4 bg-[#8A2BE2] text-white cursor-pointer",onClick:s,role:"button",tabIndex:0,onKeyPress:t=>t.key==="Enter"&&s(),"aria-label":"Continue to RSVP form",children:[nt.jsxs("main",{className:"w-full max-w-md mx-auto flex flex-col items-center",children:[nt.jsx("div",{className:"w-full max-w-xs sm:max-w-sm transform hover:scale-105 transition-transform duration-300 ease-in-out",children:nt.jsx(h0,{})}),nt.jsx("p",{className:"mt-8 text-2xl",style:{fontFamily:"'Fredoka One', cursive"},children:"Click anywhere to RSVP"})]}),nt.jsx("footer",{className:"absolute bottom-4 text-center text-white text-opacity-70 text-sm",children:nt.jsx("p",{children:"Created with fun by a World-Class React Engineer"})})]}),wD=()=>{const[s,t]=Wt.useState(!1),[i,a]=Wt.useState(!1),l=Wt.useCallback(()=>{t(!0)},[]),h=Wt.useCallback(()=>{a(!0)},[]),d=Wt.useCallback(()=>{a(!1)},[]);return s?nt.jsx("div",{className:"min-h-screen w-full flex flex-col items-center justify-center p-4 bg-[#8A2BE2] text-slate-800",children:nt.jsxs("main",{className:"w-full max-w-md mx-auto",children:[nt.jsxs("div",{className:"bg-white rounded-3xl shadow-2xl overflow-hidden transition-all duration-500",children:[nt.jsx("div",{className:"bg-yellow-400 p-6",children:nt.jsx("div",{className:"w-48 h-48 mx-auto",children:nt.jsx(h0,{})})}),nt.jsx("div",{className:"p-8",children:i?nt.jsx(SD,{onPlayAgain:d}):nt.jsx(vD,{onSubmit:h})})]}),nt.jsx("footer",{className:"text-center text-white text-opacity-70 mt-4 text-sm",children:nt.jsx("p",{children:"Created with fun by a World-Class React Engineer"})})]})}):nt.jsx(bD,{onContinue:l})},f0=document.getElementById("root");if(!f0)throw new Error("Could not find root element to mount to");const RD=ZA.createRoot(f0);RD.render(nt.jsx(qA.StrictMode,{children:nt.jsx(wD,{})}));
