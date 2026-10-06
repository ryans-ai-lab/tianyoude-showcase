import{r as Tv,g as Qb,a as Wb}from"./react-D-vXKkXw.js";import{B as ci,a as dt,T as Jb,b as ph,c as xv,L as $b,d as jl,F as Sv,M as Hi,V as Me,C as Kt,e as Ui,S as Ls,f as eT,P as zh,D as gh,g as qe,h as Q,I as _v,Q as Kl,i as tT,O as tc,j as iT,k as nT,l as aT,m as wv,N as sT,n as lT,o as rT,p as Ot,q as He,R as bi,r as oT,s as sn,t as cT,u as qf,v as uT,w as Zl,x as ic,y as Cs,z as fT,A as hT,E as kt,G as dT,H as mT,J as pT,K as gT,U as it,W as nc,X as We,Y as Av,Z as vT,_ as yT,$ as bT,a0 as TT,a1 as Ev,a2 as xT,a3 as gg,a4 as vg,a5 as yg,a6 as bg,a7 as Tg,a8 as Wo,a9 as ST,aa as zt,ab as _T,ac as wT,ad as Ns,ae as Ds,af as vh,ag as AT,ah as Lh,ai as Bh,aj as Mv,ak as Uh,al as ET,am as MT,an as RT,ao as ln,ap as Ms,aq as Rv,ar as kl,as as oi,at as jf,au as mt,av as yh,aw as CT,ax as xg,ay as DT,az as nt,aA as bh,aB as Cv,aC as OT,aD as Dv,aE as Jo,aF as NT,aG as Bs,aH as $o,aI as ac,aJ as Ql,aK as Yl,aL as an,aM as Bi,aN as zT,aO as LT,aP as BT,aQ as UT,aR as Ov,aS as Nv,aT as HT,aU as IT,aV as FT,aW as GT,aX as Nl,aY as ps,aZ as VT,a_ as PT,a$ as qT,b0 as jT,b1 as kT,b2 as YT}from"./three-DaWd-3z3.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const f of o)if(f.type==="childList")for(const c of f.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function s(o){const f={};return o.integrity&&(f.integrity=o.integrity),o.referrerPolicy&&(f.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?f.credentials="include":o.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function l(o){if(o.ep)return;o.ep=!0;const f=s(o);fetch(o.href,f)}})();var Oe=Tv();const V=Qb(Oe);var kf={exports:{}},zl={},Yf={exports:{}},Xf={};var Sg;function XT(){return Sg||(Sg=1,(function(h){function a(K,ae){var ie=K.length;K.push(ae);e:for(;0<ie;){var oe=ie-1>>>1,de=K[oe];if(0<o(de,ae))K[oe]=ae,K[ie]=de,ie=oe;else break e}}function s(K){return K.length===0?null:K[0]}function l(K){if(K.length===0)return null;var ae=K[0],ie=K.pop();if(ie!==ae){K[0]=ie;e:for(var oe=0,de=K.length,Ce=de>>>1;oe<Ce;){var at=2*(oe+1)-1,ui=K[at],gt=at+1,st=K[gt];if(0>o(ui,ie))gt<de&&0>o(st,ui)?(K[oe]=st,K[gt]=ie,oe=gt):(K[oe]=ui,K[at]=ie,oe=at);else if(gt<de&&0>o(st,ie))K[oe]=st,K[gt]=ie,oe=gt;else break e}}return ae}function o(K,ae){var ie=K.sortIndex-ae.sortIndex;return ie!==0?ie:K.id-ae.id}if(h.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;h.unstable_now=function(){return f.now()}}else{var c=Date,d=c.now();h.unstable_now=function(){return c.now()-d}}var m=[],p=[],y=1,v=null,g=3,T=!1,_=!1,w=!1,x=!1,A=typeof setTimeout=="function"?setTimeout:null,M=typeof clearTimeout=="function"?clearTimeout:null,E=typeof setImmediate<"u"?setImmediate:null;function C(K){for(var ae=s(p);ae!==null;){if(ae.callback===null)l(p);else if(ae.startTime<=K)l(p),ae.sortIndex=ae.expirationTime,a(m,ae);else break;ae=s(p)}}function D(K){if(w=!1,C(K),!_)if(s(m)!==null)_=!0,U||(U=!0,G());else{var ae=s(p);ae!==null&&ne(D,ae.startTime-K)}}var U=!1,N=-1,Y=5,P=-1;function j(){return x?!0:!(h.unstable_now()-P<Y)}function X(){if(x=!1,U){var K=h.unstable_now();P=K;var ae=!0;try{e:{_=!1,w&&(w=!1,M(N),N=-1),T=!0;var ie=g;try{t:{for(C(K),v=s(m);v!==null&&!(v.expirationTime>K&&j());){var oe=v.callback;if(typeof oe=="function"){v.callback=null,g=v.priorityLevel;var de=oe(v.expirationTime<=K);if(K=h.unstable_now(),typeof de=="function"){v.callback=de,C(K),ae=!0;break t}v===s(m)&&l(m),C(K)}else l(m);v=s(m)}if(v!==null)ae=!0;else{var Ce=s(p);Ce!==null&&ne(D,Ce.startTime-K),ae=!1}}break e}finally{v=null,g=ie,T=!1}ae=void 0}}finally{ae?G():U=!1}}}var G;if(typeof E=="function")G=function(){E(X)};else if(typeof MessageChannel<"u"){var Z=new MessageChannel,W=Z.port2;Z.port1.onmessage=X,G=function(){W.postMessage(null)}}else G=function(){A(X,0)};function ne(K,ae){N=A(function(){K(h.unstable_now())},ae)}h.unstable_IdlePriority=5,h.unstable_ImmediatePriority=1,h.unstable_LowPriority=4,h.unstable_NormalPriority=3,h.unstable_Profiling=null,h.unstable_UserBlockingPriority=2,h.unstable_cancelCallback=function(K){K.callback=null},h.unstable_forceFrameRate=function(K){0>K||125<K?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Y=0<K?Math.floor(1e3/K):5},h.unstable_getCurrentPriorityLevel=function(){return g},h.unstable_next=function(K){switch(g){case 1:case 2:case 3:var ae=3;break;default:ae=g}var ie=g;g=ae;try{return K()}finally{g=ie}},h.unstable_requestPaint=function(){x=!0},h.unstable_runWithPriority=function(K,ae){switch(K){case 1:case 2:case 3:case 4:case 5:break;default:K=3}var ie=g;g=K;try{return ae()}finally{g=ie}},h.unstable_scheduleCallback=function(K,ae,ie){var oe=h.unstable_now();switch(typeof ie=="object"&&ie!==null?(ie=ie.delay,ie=typeof ie=="number"&&0<ie?oe+ie:oe):ie=oe,K){case 1:var de=-1;break;case 2:de=250;break;case 5:de=1073741823;break;case 4:de=1e4;break;default:de=5e3}return de=ie+de,K={id:y++,callback:ae,priorityLevel:K,startTime:ie,expirationTime:de,sortIndex:-1},ie>oe?(K.sortIndex=ie,a(p,K),s(m)===null&&K===s(p)&&(w?(M(N),N=-1):w=!0,ne(D,ie-oe))):(K.sortIndex=de,a(m,K),_||T||(_=!0,U||(U=!0,G()))),K},h.unstable_shouldYield=j,h.unstable_wrapCallback=function(K){var ae=g;return function(){var ie=g;g=ae;try{return K.apply(this,arguments)}finally{g=ie}}}})(Xf)),Xf}var _g;function KT(){return _g||(_g=1,Yf.exports=XT()),Yf.exports}var wg;function ZT(){if(wg)return zl;wg=1;var h=KT(),a=Tv(),s=Wb();function l(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var i=2;i<arguments.length;i++)t+="&args[]="+encodeURIComponent(arguments[i])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function f(e){for(var t=e,i=t;i&&!i.alternate;)t=i,(t.flags&4098)!==0&&(e=t.return),i=t.return;for(;t.return;)t=t.return;return t.tag===3?e:null}function c(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function d(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function m(e){if(f(e)!==e)throw Error(l(188))}function p(e){var t=e.alternate;if(!t){if(t=f(e),t===null)throw Error(l(188));return t!==e?null:e}for(var i=e,n=t;;){var r=i.return;if(r===null)break;var u=r.alternate;if(u===null){if(n=r.return,n!==null){i=n;continue}break}if(r.child===u.child){for(u=r.child;u;){if(u===i)return m(r),e;if(u===n)return m(r),t;u=u.sibling}throw Error(l(188))}if(i.return!==n.return)i=r,n=u;else{for(var b=!1,S=r.child;S;){if(S===i){b=!0,i=r,n=u;break}if(S===n){b=!0,n=r,i=u;break}S=S.sibling}if(!b){for(S=u.child;S;){if(S===i){b=!0,i=u,n=r;break}if(S===n){b=!0,n=u,i=r;break}S=S.sibling}if(!b)throw Error(l(189))}}if(i.alternate!==n)throw Error(l(190))}if(i.tag!==3)throw Error(l(188));return i.stateNode.current===i?e:t}function y(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=y(e),t!==null)return t;e=e.sibling}return null}function v(e,t,i,n,r,u){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&i(e,n,r,u)||(e.tag!==22||e.memoizedState===null)&&(t||e.tag!==5&&e.tag!==27)&&v(e.child,t,i,n,r,u))return!0;e=e.sibling}return!1}function g(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function T(e){var t=!1;for(e=e.return;e!==null&&(e.tag===4&&(t=!0),!(e.tag===3||e.tag===5||e.tag===27));)e=e.return;return t}function _(e){var t=[null,null],i=g(e);return i===null||w(t,e,i.child,{foundSelf:!1}),t}function w(e,t,i,n){for(;i!==null;){if(i===t)n.foundSelf=!0;else if(i.tag===5||i.tag===27||i.tag===6){if(n.foundSelf)return e[1]=i,!0;e[0]=i}else if((i.tag!==22||i.memoizedState===null)&&w(e,t,i.child,n))return!0;i=i.sibling}return!1}function x(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(l(559))}}var A=null,M=null;function E(e,t,i){return e===i?!0:e===t?(A=e,!0):!1}function C(e,t,i){return e===i?(M=e,!1):e===t?(M!==null&&(A=e),!0):!1}function D(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function U(e,t,i){for(var n=0,r=e;r;r=i(r))n++;r=0;for(var u=t;u;u=i(u))r++;for(;0<n-r;)e=i(e),n--;for(;0<r-n;)t=i(t),r--;for(;n--;){if(e===t||t!==null&&e===t.alternate)return e;e=i(e),t=i(t)}return null}var N=Object.assign,Y=Symbol.for("react.element"),P=Symbol.for("react.transitional.element"),j=Symbol.for("react.portal"),X=Symbol.for("react.fragment"),G=Symbol.for("react.strict_mode"),Z=Symbol.for("react.profiler"),W=Symbol.for("react.consumer"),ne=Symbol.for("react.context"),K=Symbol.for("react.forward_ref"),ae=Symbol.for("react.suspense"),ie=Symbol.for("react.suspense_list"),oe=Symbol.for("react.memo"),de=Symbol.for("react.lazy"),Ce=Symbol.for("react.activity"),at=Symbol.for("react.legacy_hidden"),ui=Symbol.for("react.memo_cache_sentinel"),gt=Symbol.for("react.view_transition"),st=Symbol.for("react.recoverable"),_a=Symbol.iterator;function Ii(e){return e===null||typeof e!="object"?null:(e=_a&&e[_a]||e["@@iterator"],typeof e=="function"?e:null)}var Hs=Symbol.for("react.client.reference");function jn(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Hs?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case X:return"Fragment";case Z:return"Profiler";case G:return"StrictMode";case ae:return"Suspense";case ie:return"SuspenseList";case Ce:return"Activity";case gt:return"ViewTransition"}if(typeof e=="object")switch(e.$$typeof){case j:return"Portal";case ne:return e.displayName||"Context";case W:return(e._context.displayName||"Context")+".Consumer";case K:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case oe:return t=e.displayName||null,t!==null?t:jn(e.type)||"Memo";case de:t=e._payload,e=e._init;try{return jn(e(t))}catch{}}return null}var se=Array.isArray,J=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,fe=s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,kn={pending:!1,data:null,method:null,action:null},rc=[],wa=-1;function xi(e){return{current:e}}function lt(e){0>wa||(e.current=rc[wa],rc[wa]=null,wa--)}function Ne(e,t){wa++,rc[wa]=e.current,e.current=t}var Si=xi(null),Is=xi(null),on=xi(null),Wl=xi(null);function Jl(e,t){switch(Ne(on,t),Ne(Is,e),Ne(Si,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?A0(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=A0(t),e=E0(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}lt(Si),Ne(Si,e)}function Aa(){lt(Si),lt(Is),lt(on)}function oc(e){var t=e.memoizedState;t!==null&&(hs._currentValue=t.memoizedState,Ne(Wl,e)),t=Si.current;var i=E0(t,e.type);t!==i&&(Ne(Is,e),Ne(Si,i))}function $l(e){Is.current===e&&(lt(Si),lt(Is)),Wl.current===e&&(lt(Wl),hs._currentValue=kn)}var cc,Yh;function cn(e){if(cc===void 0)try{throw Error()}catch(i){var t=i.stack.trim().match(/\n( *(at )?)/);cc=t&&t[1]||"",Yh=-1<i.stack.indexOf(`
    at`)?" (<anonymous>)":-1<i.stack.indexOf("@")?"@unknown:0:0":""}return`
`+cc+e+Yh}var uc=!1;function fc(e,t){if(!e||uc)return"";uc=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(t){var k=function(){throw Error()};if(Object.defineProperty(k.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(k,[])}catch($){var z=$}Reflect.construct(e,[],k)}else{try{k.call()}catch($){z=$}k=!1;try{var I=Object.getOwnPropertyDescriptor(e.prototype,"props");Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),k=!0,new e}finally{k&&(I!==void 0?Object.defineProperty(e.prototype,"props",I):delete e.prototype.props)}}}else{try{throw Error()}catch($){z=$}(k=e())&&typeof k.catch=="function"&&k.catch(function(){})}}catch($){if($&&z&&typeof $.stack=="string")return[$.stack,z.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var r=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");r&&r.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=n.DetermineComponentFrameRoot(),b=u[0],S=u[1];if(b&&S){var R=b.split(`
`),B=S.split(`
`);for(r=n=0;n<R.length&&!R[n].includes("DetermineComponentFrameRoot");)n++;for(;r<B.length&&!B[r].includes("DetermineComponentFrameRoot");)r++;if(n===R.length||r===B.length)for(n=R.length-1,r=B.length-1;1<=n&&0<=r&&R[n]!==B[r];)r--;for(;1<=n&&0<=r;n--,r--)if(R[n]!==B[r]){if(n!==1||r!==1)do if(n--,r--,0>r||R[n]!==B[r]){var F=`
`+R[n].replace(" at new "," at ");return e.displayName&&F.includes("<anonymous>")&&(F=F.replace("<anonymous>",e.displayName)),F}while(1<=n&&0<=r);break}}}finally{uc=!1,Error.prepareStackTrace=i}return(i=e?e.displayName||e.name:"")?cn(i):""}function ey(e,t){switch(e.tag){case 26:case 27:case 5:return cn(e.type);case 16:return cn("Lazy");case 13:return e.child!==t&&t!==null?cn("Suspense Fallback"):cn("Suspense");case 19:return cn("SuspenseList");case 0:case 15:return fc(e.type,!1);case 11:return fc(e.type.render,!1);case 1:return fc(e.type,!0);case 31:return cn("Activity");case 30:return cn("ViewTransition");default:return""}}function Xh(e){try{var t="",i=null;do t+=ey(e,i),i=e,e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}var hc=Object.prototype.hasOwnProperty,dc=h.unstable_scheduleCallback,mc=h.unstable_cancelCallback,ty=h.unstable_shouldYield,iy=h.unstable_requestPaint,Lt=h.unstable_now,ny=h.unstable_getCurrentPriorityLevel,Kh=h.unstable_ImmediatePriority,Zh=h.unstable_UserBlockingPriority,er=h.unstable_NormalPriority,ay=h.unstable_LowPriority,Qh=h.unstable_IdlePriority,sy=h.log,ly=h.unstable_setDisableYieldValue,Fs=null,Bt=null;function un(e){if(typeof sy=="function"&&ly(e),Bt&&typeof Bt.setStrictMode=="function")try{Bt.setStrictMode(Fs,e)}catch{}}var Ut=Math.clz32?Math.clz32:cy,ry=Math.log,oy=Math.LN2;function cy(e){return e>>>=0,e===0?32:31-(ry(e)/oy|0)|0}var tr=256,ir=262144,nr=4194304;function Yn(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ar(e,t,i){var n=e.pendingLanes;if(n===0)return 0;var r=0,u=e.suspendedLanes,b=e.pingedLanes;e=e.warmLanes;var S=n&134217727;return S!==0?(n=S&~u,n!==0?r=Yn(n):(b&=S,b!==0?r=Yn(b):i||(i=S&~e,i!==0&&(r=Yn(i))))):(S=n&~u,S!==0?r=Yn(S):b!==0?r=Yn(b):i||(i=n&~e,i!==0&&(r=Yn(i)))),r===0?0:t!==0&&t!==r&&(t&u)===0&&(u=r&-r,i=t&-t,u>=i||u===32&&(i&4194048)!==0)?t:r}function Gs(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Wh(e,t){(t&8)!==0&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var n=31-Ut(i),r=1<<n;t|=e[n],i&=~r}return t}function uy(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Jh(){var e=nr;return nr<<=1,(nr&62914560)===0&&(nr=4194304),e}function pc(e){for(var t=[],i=0;31>i;i++)t.push(e);return t}function Vs(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function fy(e,t,i,n,r,u){var b=e.pendingLanes;e.pendingLanes=i,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=i,e.entangledLanes&=i,e.errorRecoveryDisabledLanes&=i,e.shellSuspendCounter=0;var S=e.entanglements,R=e.expirationTimes,B=e.hiddenUpdates;for(i=b&~i;0<i;){var F=31-Ut(i),k=1<<F;S[F]=0,R[F]=-1;var z=B[F];if(z!==null)for(B[F]=null,F=0;F<z.length;F++){var I=z[F];I!==null&&(I.lane&=-536870913)}i&=~k}n!==0&&$h(e,n,0),u!==0&&r===0&&e.tag!==0&&(e.suspendedLanes|=u&~(b&~t))}function $h(e,t,i){e.pendingLanes|=t,e.suspendedLanes&=~t;var n=31-Ut(t);e.entangledLanes|=t,e.entanglements[n]=e.entanglements[n]|1073741824|i&261930}function ed(e,t){var i=e.entangledLanes|=t;for(e=e.entanglements;i;){var n=31-Ut(i),r=1<<n;r&t|e[n]&t&&(e[n]|=t),i&=~r}}function td(e,t){var i=t&-t;return i=(i&42)!==0?1:gc(i),(i&(e.suspendedLanes|t))!==0?0:i}function gc(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function vc(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function id(){var e=fe.p;return e!==0?e:(e=window.event,e===void 0?32:cg(e.type))}function nd(e,t){var i=fe.p;try{return fe.p=e,t()}finally{fe.p=i}}var Fi=Math.random().toString(36).slice(2),rt="__reactFiber$"+Fi,_t="__reactProps$"+Fi,Ea="__reactContainer$"+Fi,ad="__reactEvents$"+Fi,hy="__reactListeners$"+Fi,dy="__reactHandles$"+Fi,sd="__reactResources$"+Fi,Ps="__reactMarker$"+Fi,sr="__reactLoad$"+Fi;function lr(e){delete e[rt],delete e[_t],delete e[hy],delete e[dy]}function Xn(e){var t;if(t=e[rt])return t;for(var i=e.parentNode;i;){if(t=i[Ea]||i[rt]){if(i=t.alternate,t.child!==null||i!==null&&i.child!==null)for(e=q0(e);e!==null;){if(i=e[rt])return i;e=q0(e)}return t}e=i,i=e.parentNode}return null}function Ma(e){if(e=e[rt]||e[Ea]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function qs(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(l(33))}function Ra(e){var t=e[sd];return t||(t=e[sd]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Je(e){e[Ps]=!0}function ld(e){e[sr]=void 0}var rd=new Set,od={};function Kn(e,t){Ca(e,t),Ca(e+"Capture",t)}function Ca(e,t){for(od[e]=t,e=0;e<t.length;e++)rd.add(t[e])}var my=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),cd={},ud={};function py(e){return hc.call(ud,e)?!0:hc.call(cd,e)?!1:my.test(e)?ud[e]=!0:(cd[e]=!0,!1)}var Te=!1;function fd(){var e=Te;return Te=!1,e}function rr(e,t,i){if(py(t))if(i===null)e.removeAttribute(t);else{switch(typeof i){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var n=t.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,i)}}function or(e,t,i){if(i===null)e.removeAttribute(t);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,i)}}function Gi(e,t,i,n){if(n===null)e.removeAttribute(i);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttributeNS(t,i,n)}}function Ht(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function hd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function gy(e,t,i){var n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,u=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return r.call(this)},set:function(b){i=""+b,u.call(this,b)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(b){i=""+b},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function yc(e){if(!e._valueTracker){var t=hd(e)?"checked":"value";e._valueTracker=gy(e,t,""+e[t])}}function dd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var i=t.getValue(),n="";return e&&(n=hd(e)?e.checked?"true":"false":e.value),e=n,e!==i?(t.setValue(e),!0):!1}var vy=/[\n"\\]/g;function Zt(e){return e.replace(vy,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function bc(e,t,i,n,r,u,b,S){e.name="",b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?e.type=b:e.removeAttribute("type"),t!=null?b==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Ht(t)):e.value!==""+Ht(t)&&(e.value=""+Ht(t)):b!=="submit"&&b!=="reset"||e.removeAttribute("value"),t!=null?b==="number"&&e.value==t?Tc(e,Ht(e.value)):Tc(e,Ht(t)):i!=null?Tc(e,Ht(i)):n!=null&&e.removeAttribute("value"),r==null&&u!=null&&(e.defaultChecked=!!u),r!=null&&(e.checked=r&&typeof r!="function"&&typeof r!="symbol"),S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?e.name=""+Ht(S):e.removeAttribute("name")}function md(e,t,i,n,r,u,b,S){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.type=u),t!=null||i!=null){if(!(u!=="submit"&&u!=="reset"||t!=null)){yc(e);return}i=i!=null?""+Ht(i):"",t=t!=null?""+Ht(t):i,S||t===e.value||(e.value=t),e.defaultValue=t}n=n??r,n=typeof n!="function"&&typeof n!="symbol"&&!!n,e.checked=S?e.checked:!!n,e.defaultChecked=!!n,b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"&&(e.name=b),yc(e)}function Tc(e,t){e.defaultValue!==""+t&&(e.defaultValue=""+t)}function Da(e,t,i,n){if(e=e.options,t){t={};for(var r=0;r<i.length;r++)t["$"+i[r]]=!0;for(i=0;i<e.length;i++)r=t.hasOwnProperty("$"+e[i].value),e[i].selected!==r&&(e[i].selected=r),r&&n&&(e[i].defaultSelected=!0)}else{for(i=""+Ht(i),t=null,r=0;r<e.length;r++){if(e[r].value===i){e[r].selected=!0,n&&(e[r].defaultSelected=!0);return}t!==null||e[r].disabled||(t=e[r])}t!==null&&(t.selected=!0)}}function pd(e,t,i){if(t!=null&&(t=""+Ht(t),t!==e.value&&(e.value=t),i==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=i!=null?""+Ht(i):""}function gd(e,t,i,n){if(t==null){if(n!=null){if(i!=null)throw Error(l(92));if(se(n)){if(1<n.length)throw Error(l(93));n=n[0]}i=n}i==null&&(i=""),t=i}i=Ht(t),e.defaultValue=i,n=e.textContent,n===i&&n!==""&&n!==null&&(e.value=n),yc(e)}function Oa(e,t){if(t){var i=e.firstChild;if(i&&i===e.lastChild&&i.nodeType===3){i.nodeValue=t;return}}e.textContent=t}var yy=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function vd(e,t,i){var n=t.indexOf("--")===0;i==null||typeof i=="boolean"||i===""?n?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":n?e.setProperty(t,i):typeof i!="number"||i===0||yy.has(t)?t==="float"?e.cssFloat=i:e[t]=(""+i).trim():e[t]=i+"px"}function yd(e,t,i){if(t!=null&&typeof t!="object")throw Error(l(62));if(e=e.style,i!=null){for(var n in i)!i.hasOwnProperty(n)||t!=null&&t.hasOwnProperty(n)||(n.indexOf("--")===0?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="",Te=!0);for(var r in t)n=t[r],t.hasOwnProperty(r)&&i[r]!==n&&(vd(e,r,n),Te=!0)}else for(var u in t)t.hasOwnProperty(u)&&vd(e,u,t[u])}function xc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var by=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ty=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function cr(e){return Ty.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function _i(){}var Sc=null;function _c(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Na=null,za=null;function bd(e){var t=Ma(e);if(t&&(e=t.stateNode)){var i=e[_t]||null;e:switch(e=t.stateNode,t.type){case"input":if(bc(e,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name),t=i.name,i.type==="radio"&&t!=null){for(i=e;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll('input[name="'+Zt(""+t)+'"][type="radio"]'),t=0;t<i.length;t++){var n=i[t];if(n!==e&&n.form===e.form){var r=n[_t]||null;if(!r)throw Error(l(90));bc(n,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name)}}for(t=0;t<i.length;t++)n=i[t],n.form===e.form&&dd(n)}break e;case"textarea":pd(e,i.value,i.defaultValue);break e;case"select":t=i.value,t!=null&&Da(e,!!i.multiple,t,!1)}}}var wc=!1;function Td(e,t,i){if(wc)return e(t,i);wc=!0;try{var n=e(t);return n}finally{if(wc=!1,(Na!==null||za!==null)&&(co(),Na&&(t=Na,e=za,za=Na=null,bd(t),e)))for(t=0;t<e.length;t++)bd(e[t])}}function js(e,t){var i=e.stateNode;if(i===null)return null;var n=i[_t]||null;if(n===null)return null;i=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(i&&typeof i!="function")throw Error(l(231,t,typeof i));return i}var Vi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ac=!1;if(Vi)try{var ks={};Object.defineProperty(ks,"passive",{get:function(){Ac=!0}}),window.addEventListener("test",ks,ks),window.removeEventListener("test",ks,ks)}catch{Ac=!1}var fn=null,Ec=null,ur=null;function xd(){if(ur)return ur;var e,t=Ec,i=t.length,n,r="value"in fn?fn.value:fn.textContent,u=r.length;for(e=0;e<i&&t[e]===r[e];e++);var b=i-e;for(n=1;n<=b&&t[i-n]===r[u-n];n++);return ur=r.slice(e,1<n?1-n:void 0)}function fr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function hr(){return!0}function Sd(){return!1}function vt(e){function t(i,n,r,u,b){this._reactName=i,this._targetInst=r,this.type=n,this.nativeEvent=u,this.target=b,this.currentTarget=null;for(var S in e)e.hasOwnProperty(S)&&(i=e[S],this[S]=i?i(u):u[S]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?hr:Sd,this.isPropagationStopped=Sd,this}return N(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=hr)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=hr)},persist:function(){},isPersistent:hr}),t}var hn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},dr=vt(hn),Ys=N({},hn,{view:0,detail:0}),xy=vt(Ys),Mc,Rc,Xs,mr=N({},Ys,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Dc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Xs&&(Xs&&e.type==="mousemove"?(Mc=e.screenX-Xs.screenX,Rc=e.screenY-Xs.screenY):Rc=Mc=0,Xs=e),Mc)},movementY:function(e){return"movementY"in e?e.movementY:Rc}}),_d=vt(mr),Sy=N({},mr,{dataTransfer:0}),_y=vt(Sy),wy=N({},Ys,{relatedTarget:0}),Cc=vt(wy),Ay=N({},hn,{animationName:0,elapsedTime:0,pseudoElement:0}),Ey=vt(Ay),My=N({},hn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ry=vt(My),Cy=N({},hn,{data:0}),wd=vt(Cy),Dy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Oy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ny={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function zy(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Ny[e])?!!t[e]:!1}function Dc(){return zy}var Ly=N({},Ys,{key:function(e){if(e.key){var t=Dy[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=fr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Oy[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Dc,charCode:function(e){return e.type==="keypress"?fr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?fr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),By=vt(Ly),Uy=N({},mr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ad=vt(Uy),Hy=N({},hn,{submitter:0}),Iy=vt(Hy),Fy=N({},Ys,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Dc}),Gy=vt(Fy),Vy=N({},hn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Py=vt(Vy),qy=N({},mr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),jy=vt(qy),ky=N({},hn,{newState:0,oldState:0,source:0}),Yy=vt(ky),Xy=[9,13,27,32],Oc=Vi&&"CompositionEvent"in window,Ks=null;Vi&&"documentMode"in document&&(Ks=document.documentMode);var Ky=Vi&&"TextEvent"in window&&!Ks,Ed=Vi&&(!Oc||Ks&&8<Ks&&11>=Ks),Md=" ",Rd=!1;function Cd(e,t){switch(e){case"keyup":return Xy.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Dd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var La=!1;function Zy(e,t){switch(e){case"compositionend":return Dd(t);case"keypress":return t.which!==32?null:(Rd=!0,Md);case"textInput":return e=t.data,e===Md&&Rd?null:e;default:return null}}function Qy(e,t){if(La)return e==="compositionend"||!Oc&&Cd(e,t)?(e=xd(),ur=Ec=fn=null,La=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ed&&t.locale!=="ko"?null:t.data;default:return null}}var Wy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Od(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Wy[e.type]:t==="textarea"}function Nd(e,t,i,n){Na?za?za.push(n):za=[n]:Na=n,t=go(t,"onChange"),0<t.length&&(i=new dr("onChange","change",null,i,n),e.push({event:i,listeners:t}))}var Zs=null,Qs=null;function Jy(e){b0(e,0)}function pr(e){var t=qs(e);if(dd(t))return e}function zd(e,t){if(e==="change")return t}var Ld=!1;if(Vi){var Nc;if(Vi){var zc="oninput"in document;if(!zc){var Bd=document.createElement("div");Bd.setAttribute("oninput","return;"),zc=typeof Bd.oninput=="function"}Nc=zc}else Nc=!1;Ld=Nc&&(!document.documentMode||9<document.documentMode)}function Ud(){Zs&&(Zs.detachEvent("onpropertychange",Hd),Qs=Zs=null)}function Hd(e){if(e.propertyName==="value"&&pr(Qs)){var t=[];Nd(t,Qs,e,_c(e)),Td(Jy,t)}}function $y(e,t,i){e==="focusin"?(Ud(),Zs=t,Qs=i,Zs.attachEvent("onpropertychange",Hd)):e==="focusout"&&Ud()}function e1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return pr(Qs)}function t1(e,t){if(e==="click")return pr(t)}function i1(e,t){if(e==="input"||e==="change")return pr(t)}function n1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var It=typeof Object.is=="function"?Object.is:n1;function Ws(e,t){if(It(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var i=Object.keys(e),n=Object.keys(t);if(i.length!==n.length)return!1;for(n=0;n<i.length;n++){var r=i[n];if(!hc.call(t,r)||!It(e[r],t[r]))return!1}return!0}function Lc(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Id(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Fd(e,t){var i=Id(e);e=0;for(var n;i;){if(i.nodeType===3){if(n=e+i.textContent.length,e<=t&&n>=t)return{node:i,offset:t-e};e=n}e:{for(;i;){if(i.nextSibling){i=i.nextSibling;break e}i=i.parentNode}i=void 0}i=Id(i)}}function Gd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Gd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Vd(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Lc(e.document);t instanceof e.HTMLIFrameElement;){try{var i=typeof t.contentWindow.location.href=="string"}catch{i=!1}if(i)e=t.contentWindow;else break;t=Lc(e.document)}return t}function Bc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var a1=Vi&&"documentMode"in document&&11>=document.documentMode,Ba=null,Uc=null,Js=null,Hc=!1;function Pd(e,t,i){var n=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;Hc||Ba==null||Ba!==Lc(n)||(n=Ba,"selectionStart"in n&&Bc(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Js&&Ws(Js,n)||(Js=n,n=go(Uc,"onSelect"),0<n.length&&(t=new dr("onSelect","select",null,t,i),e.push({event:t,listeners:n}),t.target=Ba)))}function Zn(e,t){var i={};return i[e.toLowerCase()]=t.toLowerCase(),i["Webkit"+e]="webkit"+t,i["Moz"+e]="moz"+t,i}var Ua={animationend:Zn("Animation","AnimationEnd"),animationiteration:Zn("Animation","AnimationIteration"),animationstart:Zn("Animation","AnimationStart"),transitionrun:Zn("Transition","TransitionRun"),transitionstart:Zn("Transition","TransitionStart"),transitioncancel:Zn("Transition","TransitionCancel"),transitionend:Zn("Transition","TransitionEnd")},Ic={},qd={};Vi&&(qd=document.createElement("div").style,"AnimationEvent"in window||(delete Ua.animationend.animation,delete Ua.animationiteration.animation,delete Ua.animationstart.animation),"TransitionEvent"in window||delete Ua.transitionend.transition);function Qn(e){if(Ic[e])return Ic[e];if(!Ua[e])return e;var t=Ua[e],i;for(i in t)if(t.hasOwnProperty(i)&&i in qd)return Ic[e]=t[i];return e}var jd=Qn("animationend"),kd=Qn("animationiteration"),Yd=Qn("animationstart"),s1=Qn("transitionrun"),l1=Qn("transitionstart"),r1=Qn("transitioncancel"),Xd=Qn("transitionend"),Kd=new Map,Fc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Fc.push("scrollEnd");function fi(e,t){Kd.set(e,t),Kn(t,[e])}var o1=0;function Pi(e,t){if(e.name!=null&&e.name!=="auto")return e.name;if(t.autoName!==null)return t.autoName;e=pi.identifierPrefix;var i=o1++;return e="_"+e+"t_"+i.toString(32)+"_",t.autoName=e}function Zd(e){if(e==null||typeof e=="string")return e;var t=null,i=is;if(i!==null)for(var n=0;n<i.length;n++){var r=e[i[n]];if(r!=null){if(r==="none")return"none";t=t==null?r:t+(" "+r)}}return t??e.default}function qi(e,t){return e=Zd(e),t=Zd(t),t==null?e==="auto"?null:e:t==="auto"?null:t}var gr=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Qt=[],Ha=0,Gc=0;function vr(){for(var e=Ha,t=Gc=Ha=0;t<e;){var i=Qt[t];Qt[t++]=null;var n=Qt[t];Qt[t++]=null;var r=Qt[t];Qt[t++]=null;var u=Qt[t];if(Qt[t++]=null,n!==null&&r!==null){var b=n.pending;b===null?r.next=r:(r.next=b.next,b.next=r),n.pending=r}u!==0&&Qd(i,r,u)}}function yr(e,t,i,n){Qt[Ha++]=e,Qt[Ha++]=t,Qt[Ha++]=i,Qt[Ha++]=n,Gc|=n,e.lanes|=n,e=e.alternate,e!==null&&(e.lanes|=n)}function Vc(e,t,i,n){return yr(e,t,i,n),br(e)}function Wn(e,t){return yr(e,null,null,t),br(e)}function Qd(e,t,i){e.lanes|=i;var n=e.alternate;n!==null&&(n.lanes|=i);for(var r=!1,u=e.return;u!==null;)u.childLanes|=i,n=u.alternate,n!==null&&(n.childLanes|=i),u.tag===22&&(e=u.stateNode,e===null||e._visibility&1||(r=!0)),e=u,u=u.return;return e.tag===3?(u=e.stateNode,r&&t!==null&&(r=31-Ut(i),e=u.hiddenUpdates,n=e[r],n===null?e[r]=[t]:n.push(t),t.lane=i|536870912),u):null}function br(e){if(50<Tl)throw Tl=0,oo=null,Error(l(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Ia={};function c1(e,t,i,n){this.tag=e,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function wt(e,t,i,n){return new c1(e,t,i,n)}function Pc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ji(e,t){var i=e.alternate;return i===null?(i=wt(e.tag,t,e.key,e.mode),i.elementType=e.elementType,i.type=e.type,i.stateNode=e.stateNode,i.alternate=e,e.alternate=i):(i.pendingProps=t,i.type=e.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=e.flags&1206910976,i.childLanes=e.childLanes,i.lanes=e.lanes,i.child=e.child,i.memoizedProps=e.memoizedProps,i.memoizedState=e.memoizedState,i.updateQueue=e.updateQueue,t=e.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},i.sibling=e.sibling,i.index=e.index,i.ref=e.ref,i.refCleanup=e.refCleanup,i}function Wd(e,t){e.flags&=1206910978;var i=e.alternate;return i===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=i.childLanes,e.lanes=i.lanes,e.child=i.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=i.memoizedProps,e.memoizedState=i.memoizedState,e.updateQueue=i.updateQueue,e.type=i.type,t=i.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Tr(e,t,i,n,r,u){var b=0;if(n=e,typeof n=="function")Pc(n)&&(b=1);else if(typeof n=="string")b=Hb(e,i,Si.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(n){case Ce:return e=wt(31,i,t,r),e.elementType=Ce,e.lanes=u,e;case X:return Jn(i.children,r,u,t);case G:b=8,r|=24;break;case Z:return e=wt(12,i,t,r|2),e.elementType=Z,e.lanes=u,e;case ae:return e=wt(13,i,t,r),e.elementType=ae,e.lanes=u,e;case ie:return e=wt(19,i,t,r),e.elementType=ie,e.lanes=u,e;case at:case gt:return e=r|32,e=wt(30,i,t,e),e.elementType=gt,e.lanes=u,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case ne:b=10;break e;case W:b=9;break e;case K:b=11;break e;case oe:b=14;break e;case de:b=16,n=null;break e}b=29,i=Error(l(130,e===null?"null":typeof e,"")),n=null}return t=wt(b,i,t,r),t.elementType=e,t.type=n,t.lanes=u,t}function Jn(e,t,i,n){return e=wt(7,e,n,t),e.lanes=i,e}function qc(e,t,i){return e=wt(6,e,null,t),e.lanes=i,e}function Jd(e){var t=wt(18,null,null,0);return t.stateNode=e,t}function jc(e,t,i){return t=wt(4,e.children!==null?e.children:[],e.key,t),t.lanes=i,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var $d=new WeakMap;function Wt(e,t){if(typeof e=="object"&&e!==null){var i=$d.get(e);return i!==void 0?i:(t={value:e,source:t,stack:Xh(t)},$d.set(e,t),t)}return{value:e,source:t,stack:Xh(t)}}var Fa=[],Ga=0,xr=null,$s=0,Jt=[],$t=0,dn=null,wi=1,Ai="";function ki(e,t){Fa[Ga++]=$s,Fa[Ga++]=xr,xr=e,$s=t}function em(e,t,i){Jt[$t++]=wi,Jt[$t++]=Ai,Jt[$t++]=dn,dn=e;var n=wi;e=Ai;var r=32-Ut(n)-1;n&=~(1<<r),i+=1;var u=32-Ut(t)+r;if(30<u){var b=r-r%5;u=(n&(1<<b)-1).toString(32),n>>=b,r-=b,wi=1<<32-Ut(t)+r|i<<r|n,Ai=u+e}else wi=1<<u|i<<r|n,Ai=e}function Sr(e){e.return!==null&&(ki(e,1),em(e,1,0))}function kc(e){for(;e===xr;)xr=Fa[--Ga],Fa[Ga]=null,$s=Fa[--Ga],Fa[Ga]=null;for(;e===dn;)dn=Jt[--$t],Jt[$t]=null,Ai=Jt[--$t],Jt[$t]=null,wi=Jt[--$t],Jt[$t]=null}function tm(e,t){Jt[$t++]=wi,Jt[$t++]=Ai,Jt[$t++]=dn,wi=t.id,Ai=t.overflow,dn=e}var $e=null,ze=null,he=!1,mn=null,ei=!1,Yc=Error(l(519));function pn(e){var t=Error(l(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw el(Wt(t,e)),Yc}function im(e){var t=e.stateNode,i=e.type,n=e.memoizedProps;switch(t[rt]=e,t[_t]=n,i){case"dialog":pe("cancel",t),pe("close",t);break;case"iframe":case"object":case"embed":pe("load",t);break;case"video":case"audio":for(i=0;i<Sl.length;i++)pe(Sl[i],t);break;case"source":pe("error",t);break;case"img":case"image":case"link":pe("error",t),pe("load",t);break;case"details":pe("toggle",t);break;case"input":pe("invalid",t),md(t,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0);break;case"select":pe("invalid",t);break;case"textarea":pe("invalid",t),gd(t,n.value,n.defaultValue,n.children)}i=n.children,typeof i!="string"&&typeof i!="number"&&typeof i!="bigint"||t.textContent===""+i||n.suppressHydrationWarning===!0||_0(t.textContent,i)?(n.popover!=null&&(pe("beforetoggle",t),pe("toggle",t)),n.onScroll!=null&&pe("scroll",t),n.onScrollEnd!=null&&pe("scrollend",t),n.onClick!=null&&(t.onclick=_i),t=!0):t=!1,t||pn(e,!0)}function _r(e){for($e=e.return;$e;)switch($e.tag){case 5:case 31:case 13:ei=!1;return;case 27:case 3:ei=!0;return;default:$e=$e.return}}function Va(e){if(e!==$e)return!1;if(!he)return _r(e),he=!0,!1;var t=e.tag,i;if((i=t!==3&&t!==27)&&((i=t===5)&&(i=e.type,i=!(i!=="form"&&i!=="button")||_f(e.type,e.memoizedProps)),i=!i),i&&ze&&pn(e),_r(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(317));ze=P0(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(317));ze=P0(e)}else t===27?(t=ze,On(e.type)?(e=Nf,Nf=null,ze=e):ze=t):ze=$e?ii(e.stateNode.nextSibling):null;return!0}function $n(){ze=$e=null,he=!1}function Xc(){var e=mn;return e!==null&&(Mt===null?Mt=e:Mt.push.apply(Mt,e),mn=null),e}function el(e){mn===null?mn=[e]:mn.push(e)}var Kc=xi(null),ea=null,Yi=null;function gn(e,t,i){Ne(Kc,t._currentValue),t._currentValue=i}function Xi(e){e._currentValue=Kc.current,lt(Kc)}function wr(e,t,i){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===i)break;e=e.return}}function Zc(e,t,i,n){var r=e.child;for(r!==null&&(r.return=e);r!==null;){var u=r.dependencies;if(u!==null){var b=r.child;u=u.firstContext;e:for(;u!==null;){var S=u;u=r;for(var R=0;R<t.length;R++)if(S.context===t[R]){u.lanes|=i,S=u.alternate,S!==null&&(S.lanes|=i),wr(u.return,i,e),n||(b=null);break e}u=S.next}}else if(r.tag===18){if(b=r.return,b===null)throw Error(l(341));b.lanes|=i,u=b.alternate,u!==null&&(u.lanes|=i),wr(b,i,e),b=null}else r.tag===13&&r.memoizedState!==null&&r.memoizedState.dehydrated===null?(r.lanes|=i,b=r.alternate,b!==null&&(b.lanes|=i),wr(r.return,i,e),b=r.child,b=b!==null?b.sibling:null):b=r.child;if(b!==null)b.return=r;else for(b=r;b!==null;){if(b===e){b=null;break}if(r=b.sibling,r!==null){r.return=b.return,b=r;break}b=b.return}r=b}}function ta(e,t,i,n){e=null;for(var r=t,u=!1;r!==null;){if(!u){if((r.flags&524288)!==0)u=!0;else if((r.flags&262144)!==0)break}if(r.tag===10){var b=r.alternate;if(b===null)throw Error(l(387));if(b=b.memoizedProps,b!==null){var S=r.type;It(r.pendingProps.value,b.value)||(e!==null?e.push(S):e=[S])}}else if(r===Wl.current){if(b=r.alternate,b===null)throw Error(l(387));b.memoizedState.memoizedState!==r.memoizedState.memoizedState&&(e!==null?e.push(hs):e=[hs])}r=r.return}return e!==null&&Zc(t,e,i,n),t.flags|=262144,e!==null}function Ar(e){for(e=e.firstContext;e!==null;){if(!It(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ia(e){ea=e,Yi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ot(e){return nm(ea,e)}function Er(e,t){return ea===null&&ia(e),nm(e,t)}function nm(e,t){var i=t._currentValue;if(t={context:t,memoizedValue:i,next:null},Yi===null){if(e===null)throw Error(l(308));Yi=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Yi=Yi.next=t;return i}var u1=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(i,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(i){return i()})}},f1=h.unstable_scheduleCallback,h1=h.unstable_NormalPriority,je={$$typeof:ne,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Qc(){return{controller:new u1,data:new Map,refCount:0}}function tl(e){e.refCount--,e.refCount===0&&f1(h1,function(){e.controller.abort()})}function am(e,t){if((e.pendingLanes&4194048)!==0){var i=e.transitionTypes;for(i===null&&(i=e.transitionTypes=[]),e=0;e<t.length;e++){var n=t[e];i.indexOf(n)===-1&&i.push(n)}}}var il=null;function d1(e){var t=e.transitionTypes;return e.transitionTypes=null,t}var nl=null,Wc=0,na=0,Pa=null;function m1(e,t){if(nl===null){var i=nl=[];Wc=0,na=mf(),Pa={status:"pending",value:void 0,then:function(n){i.push(n)}}}return Wc++,t.then(sm,sm),t}function sm(){if(--Wc===0&&(il=null,nl!==null)){Pa!==null&&(Pa.status="fulfilled");var e=nl;nl=null,na=0,Pa=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function p1(e,t){var i=[],n={status:"pending",value:null,reason:null,then:function(r){i.push(r)}};return e.then(function(){n.status="fulfilled",n.value=t;for(var r=0;r<i.length;r++)(0,i[r])(t)},function(r){for(n.status="rejected",n.reason=r,r=0;r<i.length;r++)(0,i[r])(void 0)}),n}var lm=J.S;J.S=function(e,t){if(Jp=Lt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&m1(e,t),il!==null)for(var i=ls;i!==null;)am(i,il),i=i.next;if(i=e.types,i!==null){for(var n=ls;n!==null;)am(n,i),n=n.next;if(na!==0){n=il,n===null&&(n=il=[]);for(var r=0;r<i.length;r++){var u=i[r];n.indexOf(u)===-1&&n.push(u)}}}lm!==null&&lm(e,t)};var aa=xi(null);function Jc(){var e=aa.current;return e!==null?e:De.pooledCache}function Mr(e,t){t===null?Ne(aa,aa.current):Ne(aa,t.pool)}function rm(){var e=Jc();return e===null?null:{parent:je._currentValue,pool:e}}var qa=Error(l(460)),$c=Error(l(474)),Rr=Error(l(542)),Cr={then:function(){}};function om(e){return e=e.status,e==="fulfilled"||e==="rejected"}function cm(e,t,i){switch(i=e[i],i===void 0?e.push(t):i!==t&&(t.then(_i,_i),t=i),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,fm(e),e===void 0&&!("reason"in t)?Error(l(600)):e;default:if(typeof t.status=="string")t.then(_i,_i);else{if(e=De,e!==null&&100<e.shellSuspendCounter)throw Error(l(482));e=t,e.status="pending",e.then(function(n){if(t.status==="pending"){var r=t;r.status="fulfilled",r.value=n}},function(n){if(t.status==="pending"){var r=t;r.status="rejected",r.reason=n}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,fm(e),e}throw la=t,qa}}function sa(e){try{var t=e._init;return t(e._payload)}catch(i){throw i!==null&&typeof i=="object"&&typeof i.then=="function"?(la=i,qa):i}}var la=null;function um(){if(la===null)throw Error(l(459));var e=la;return la=null,e}function fm(e){if(e===qa||e===Rr)throw Error(l(483))}var ja=null,al=0;function Dr(e){var t=al;return al+=1,ja===null&&(ja=[]),cm(ja,e,t)}function vn(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Or(e,t){throw t.$$typeof===Y?Error(l(525)):(e=Object.prototype.toString.call(t),Error(l(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function hm(e){function t(L,O){if(e){var H=L.deletions;H===null?(L.deletions=[O],L.flags|=16):H.push(O)}}function i(L,O){if(!e)return null;for(;O!==null;)t(L,O),O=O.sibling;return null}function n(L){for(var O=new Map;L!==null;)L.key===null?O.set(L.index,L):O.set(L.key,L),L=L.sibling;return O}function r(L,O){return L=ji(L,O),L.index=0,L.sibling=null,L}function u(L,O,H){return L.index=H,e?(H=L.alternate,H!==null?(H=H.index,H<O?(L.flags|=2,O):H):(L.flags|=134217730,O)):(L.flags|=1048576,O)}function b(L){return e&&L.alternate===null&&(L.flags|=134217730),L}function S(L,O,H,q){return O===null||O.tag!==6?(O=qc(H,L.mode,q),O.return=L,O):(O=r(O,H),O.return=L,O)}function R(L,O,H,q){var ee=H.type;return ee===X?(L=F(L,O,H.props.children,q,H.key),vn(L,H),L):O!==null&&(O.elementType===ee||typeof ee=="object"&&ee!==null&&ee.$$typeof===de&&sa(ee)===O.type)?(O=r(O,H.props),vn(O,H),O.return=L,O):(O=Tr(H.type,H.key,H.props,null,L.mode,q),vn(O,H),O.return=L,O)}function B(L,O,H,q){return O===null||O.tag!==4||O.stateNode.containerInfo!==H.containerInfo||O.stateNode.implementation!==H.implementation?(O=jc(H,L.mode,q),O.return=L,O):(O=r(O,H.children||[]),O.return=L,O)}function F(L,O,H,q,ee){return O===null||O.tag!==7?(O=Jn(H,L.mode,q,ee),O.return=L,O):(O=r(O,H),O.return=L,O)}function k(L,O,H){if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return O=qc(""+O,L.mode,H),O.return=L,O;if(typeof O=="object"&&O!==null){switch(O.$$typeof){case P:return H=Tr(O.type,O.key,O.props,null,L.mode,H),vn(H,O),H.return=L,H;case j:return O=jc(O,L.mode,H),O.return=L,O;case de:return O=sa(O),k(L,O,H)}if(se(O)||Ii(O))return O=Jn(O,L.mode,H,null),O.return=L,O;if(typeof O.then=="function")return k(L,Dr(O),H);if(O.$$typeof===ne)return k(L,Er(L,O),H);Or(L,O)}return null}function z(L,O,H,q){var ee=O!==null?O.key:null;if(typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint")return ee!==null?null:S(L,O,""+H,q);if(typeof H=="object"&&H!==null){switch(H.$$typeof){case P:return H.key===ee?R(L,O,H,q):null;case j:return H.key===ee?B(L,O,H,q):null;case de:return H=sa(H),z(L,O,H,q)}if(se(H)||Ii(H))return ee!==null?null:F(L,O,H,q,null);if(typeof H.then=="function")return z(L,O,Dr(H),q);if(H.$$typeof===ne)return z(L,O,Er(L,H),q);Or(L,H)}return null}function I(L,O,H,q,ee){if(typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint")return L=L.get(H)||null,S(O,L,""+q,ee);if(typeof q=="object"&&q!==null){switch(q.$$typeof){case P:return L=L.get(q.key===null?H:q.key)||null,R(O,L,q,ee);case j:return L=L.get(q.key===null?H:q.key)||null,B(O,L,q,ee);case de:return q=sa(q),I(L,O,H,q,ee)}if(se(q)||Ii(q))return L=L.get(H)||null,F(O,L,q,ee,null);if(typeof q.then=="function")return I(L,O,H,Dr(q),ee);if(q.$$typeof===ne)return I(L,O,H,Er(O,q),ee);Or(O,q)}return null}function $(L,O,H,q){for(var ee=null,ye=null,le=O,re=O=0,Xe=null;le!==null&&re<H.length;re++){le.index>re?(Xe=le,le=null):Xe=le.sibling;var be=z(L,le,H[re],q);if(be===null){le===null&&(le=Xe);break}e&&le&&be.alternate===null&&t(L,le),O=u(be,O,re),ye===null?ee=be:ye.sibling=be,ye=be,le=Xe}if(re===H.length)return i(L,le),he&&ki(L,re),ee;if(le===null){for(;re<H.length;re++)le=k(L,H[re],q),le!==null&&(O=u(le,O,re),ye===null?ee=le:ye.sibling=le,ye=le);return he&&ki(L,re),ee}for(le=n(le);re<H.length;re++)Xe=I(le,L,re,H[re],q),Xe!==null&&(e&&(be=Xe.alternate,be!==null&&le.delete(be.key===null?re:be.key)),O=u(Xe,O,re),ye===null?ee=Xe:ye.sibling=Xe,ye=Xe);return e&&le.forEach(function(Un){return t(L,Un)}),he&&ki(L,re),ee}function te(L,O,H,q){if(H==null)throw Error(l(151));for(var ee=null,ye=null,le=O,re=O=0,Xe=null,be=H.next();le!==null&&!be.done;re++,be=H.next()){le.index>re?(Xe=le,le=null):Xe=le.sibling;var Un=z(L,le,be.value,q);if(Un===null){le===null&&(le=Xe);break}e&&le&&Un.alternate===null&&t(L,le),O=u(Un,O,re),ye===null?ee=Un:ye.sibling=Un,ye=Un,le=Xe}if(be.done)return i(L,le),he&&ki(L,re),ee;if(le===null){for(;!be.done;re++,be=H.next())be=k(L,be.value,q),be!==null&&(O=u(be,O,re),ye===null?ee=be:ye.sibling=be,ye=be);return he&&ki(L,re),ee}for(le=n(le);!be.done;re++,be=H.next())be=I(le,L,re,be.value,q),be!==null&&(e&&(Xe=be.alternate,Xe!==null&&le.delete(Xe.key===null?re:Xe.key)),O=u(be,O,re),ye===null?ee=be:ye.sibling=be,ye=be);return e&&le.forEach(function(Zb){return t(L,Zb)}),he&&ki(L,re),ee}function ue(L,O,H,q){if(typeof H=="object"&&H!==null&&H.type===X&&H.key===null&&H.props.ref===void 0&&(H=H.props.children),typeof H=="object"&&H!==null){switch(H.$$typeof){case P:e:{for(var ee=H.key;O!==null;){if(O.key===ee){if(ee=H.type,ee===X){if(O.tag===7){i(L,O.sibling),q=r(O,H.props.children),vn(q,H),q.return=L,L=q;break e}}else if(O.elementType===ee||typeof ee=="object"&&ee!==null&&ee.$$typeof===de&&sa(ee)===O.type){i(L,O.sibling),q=r(O,H.props),vn(q,H),q.return=L,L=q;break e}i(L,O);break}else t(L,O);O=O.sibling}H.type===X?(q=Jn(H.props.children,L.mode,q,H.key),vn(q,H),q.return=L,L=q):(q=Tr(H.type,H.key,H.props,null,L.mode,q),vn(q,H),q.return=L,L=q)}return b(L);case j:e:{for(ee=H.key;O!==null;){if(O.key===ee)if(O.tag===4&&O.stateNode.containerInfo===H.containerInfo&&O.stateNode.implementation===H.implementation){i(L,O.sibling),q=r(O,H.children||[]),q.return=L,L=q;break e}else{i(L,O);break}else t(L,O);O=O.sibling}q=jc(H,L.mode,q),q.return=L,L=q}return b(L);case de:return H=sa(H),ue(L,O,H,q)}if(se(H))return $(L,O,H,q);if(Ii(H)){if(ee=Ii(H),typeof ee!="function")throw Error(l(150));return H=ee.call(H),te(L,O,H,q)}if(typeof H.then=="function")return ue(L,O,Dr(H),q);if(H.$$typeof===ne)return ue(L,O,Er(L,H),q);Or(L,H)}return typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint"?(H=""+H,O!==null&&O.tag===6?(i(L,O.sibling),q=r(O,H),q.return=L,L=q):(i(L,O),q=qc(H,L.mode,q),q.return=L,L=q),b(L)):i(L,O)}return function(L,O,H,q){try{al=0;var ee=ue(L,O,H,q);return ja=null,ee}catch(le){if(le===qa||le===Rr)throw le;var ye=wt(29,le,null,L.mode);return ye.lanes=q,ye.return=L,ye}}}var ra=hm(!0),dm=hm(!1),yn=!1;function eu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function tu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function bn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Tn(e,t,i){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(xe&2)!==0){var r=n.pending;return r===null?t.next=t:(t.next=r.next,r.next=t),n.pending=t,t=br(e),Qd(e,null,i),t}return yr(e,n,t,i),br(e)}function sl(e,t,i){if(t=t.updateQueue,t!==null&&(t=t.shared,(i&4194048)!==0)){var n=t.lanes;n&=e.pendingLanes,i|=n,t.lanes=i,ed(e,i)}}function iu(e,t){var i=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,i===n)){var r=null,u=null;if(i=i.firstBaseUpdate,i!==null){do{var b={lane:i.lane,tag:i.tag,payload:i.payload,callback:null,next:null};u===null?r=u=b:u=u.next=b,i=i.next}while(i!==null);u===null?r=u=t:u=u.next=t}else r=u=t;i={baseState:n.baseState,firstBaseUpdate:r,lastBaseUpdate:u,shared:n.shared,callbacks:n.callbacks},e.updateQueue=i;return}e=i.lastBaseUpdate,e===null?i.firstBaseUpdate=t:e.next=t,i.lastBaseUpdate=t}var nu=!1;function ll(){if(nu){var e=Pa;if(e!==null)throw e}}function rl(e,t,i,n){nu=!1;var r=e.updateQueue;yn=!1;var u=r.firstBaseUpdate,b=r.lastBaseUpdate,S=r.shared.pending;if(S!==null){r.shared.pending=null;var R=S,B=R.next;R.next=null,b===null?u=B:b.next=B,b=R;var F=e.alternate;F!==null&&(F=F.updateQueue,S=F.lastBaseUpdate,S!==b&&(S===null?F.firstBaseUpdate=B:S.next=B,F.lastBaseUpdate=R))}if(u!==null){var k=r.baseState;b=0,F=B=R=null,S=u;do{var z=S.lane&-536870913,I=z!==S.lane;if(I?(ve&z)===z:(n&z)===z){z!==0&&z===na&&(nu=!0),F!==null&&(F=F.next={lane:0,tag:S.tag,payload:S.payload,callback:null,next:null});e:{var $=e,te=S;z=t;var ue=i;switch(te.tag){case 1:if($=te.payload,typeof $=="function"){k=$.call(ue,k,z);break e}k=$;break e;case 3:$.flags=$.flags&-65537|128;case 0:if($=te.payload,z=typeof $=="function"?$.call(ue,k,z):$,z==null)break e;k=N({},k,z);break e;case 2:yn=!0}}z=S.callback,z!==null&&(e.flags|=64,I&&(e.flags|=8192),I=r.callbacks,I===null?r.callbacks=[z]:I.push(z))}else I={lane:z,tag:S.tag,payload:S.payload,callback:S.callback,next:null},F===null?(B=F=I,R=k):F=F.next=I,b|=z;if(S=S.next,S===null){if(S=r.shared.pending,S===null)break;I=S,S=I.next,I.next=null,r.lastBaseUpdate=I,r.shared.pending=null}}while(!0);F===null&&(R=k),r.baseState=R,r.firstBaseUpdate=B,r.lastBaseUpdate=F,u===null&&(r.shared.lanes=0),Mn|=b,e.lanes=b,e.memoizedState=k}}function mm(e,t){if(typeof e!="function")throw Error(l(191,e));e.call(t)}function pm(e,t){var i=e.callbacks;if(i!==null)for(e.callbacks=null,e=0;e<i.length;e++)mm(i[e],t)}var xn=xi(null),Nr=xi(0);function gm(e,t){e=Ji,Ne(Nr,e),Ne(xn,t),Ji=e|t.baseLanes}function au(){Ne(Nr,Ji),Ne(xn,xn.current)}function su(){Ji=Nr.current,lt(xn),lt(Nr)}var ct=xi(null),pt=null;function Sn(e){var t=e.alternate;Ne(ut,ut.current&1),Ne(ct,e),pt===null&&(t===null||xn.current!==null||t.memoizedState!==null)&&(pt=e)}function lu(e){Ne(ut,ut.current),Ne(ct,e),pt===null&&(pt=e)}function vm(e){e.tag===22?(Ne(ut,ut.current),Ne(ct,e),pt===null&&(pt=e)):_n()}function _n(){Ne(ut,ut.current),Ne(ct,ct.current)}function Ft(e){lt(ct),pt===e&&(pt=null),lt(ut)}var ut=xi(0);function ol(e,t){Ne(ct,ct.current),Ne(ut,t)}function ru(e){lt(ut),lt(ct),pt===e&&(pt=null)}function zr(e){for(var t=e;t!==null;){if(t.tag===13){var i=t.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||Df(i)||Of(i)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!=="independent"){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ki=0,ce=null,Ee=null,ke=null,Lr=!1,ka=!1,oa=!1,Br=0,cl=0,Ya=null,g1=0;function Fe(){throw Error(l(321))}function ou(e,t){if(t===null)return!1;for(var i=0;i<t.length&&i<e.length;i++)if(!It(e[i],t[i]))return!1;return!0}function cu(e,t,i,n,r,u){return Ki=u,ce=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,J.H=e===null||e.memoizedState===null?ep:tp,oa=!1,u=i(n,r),oa=!1,ka&&(u=bm(t,i,n,r)),ym(e),u}function ym(e){J.H=Pr;var t=Ee!==null&&Ee.next!==null;if(Ki=0,ke=Ee=ce=null,Lr=!1,cl=0,Ya=null,t)throw Error(l(300));e===null||Ye||(e=e.dependencies,e!==null&&Ar(e)&&(Ye=!0))}function bm(e,t,i,n){ce=e;var r=0;do{if(ka&&(Ya=null),cl=0,ka=!1,25<=r)throw Error(l(301));if(r+=1,ke=Ee=null,e.updateQueue!=null){var u=e.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}J.H=w1,u=t(i,n)}while(ka);return u}function v1(){var e=J.H,t=e.useState()[0];return t=typeof t.then=="function"?ul(t):t,e=e.useState()[0],(Ee!==null?Ee.memoizedState:null)!==e&&(ce.flags|=1024),t}function uu(){var e=Br!==0;return Br=0,e}function fu(e,t,i){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i}function hu(e){if(Lr){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Lr=!1}Ki=0,ke=Ee=ce=null,ka=!1,cl=Br=0,Ya=null}function yt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ke===null?ce.memoizedState=ke=e:ke=ke.next=e,ke}function Pe(){if(Ee===null){var e=ce.alternate;e=e!==null?e.memoizedState:null}else e=Ee.next;var t=ke===null?ce.memoizedState:ke.next;if(t!==null)ke=t,Ee=e;else{if(e===null)throw ce.alternate===null?Error(l(467)):Error(l(310));Ee=e,e={memoizedState:Ee.memoizedState,baseState:Ee.baseState,baseQueue:Ee.baseQueue,queue:Ee.queue,next:null},ke===null?ce.memoizedState=ke=e:ke=ke.next=e}return ke}function Ur(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ul(e){var t=cl;return cl+=1,Ya===null&&(Ya=[]),e=cm(Ya,e,t),t=ce,(ke===null?t.memoizedState:ke.next)===null&&(t=t.alternate,J.H=t===null||t.memoizedState===null?ep:tp),e}function Hr(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ul(e);if(e.$$typeof===st)return;if(e.$$typeof===ne)return ot(e)}throw Error(l(438,String(e)))}function du(e){var t=null,i=ce.updateQueue;if(i!==null&&(t=i.memoCache),t==null){var n=ce.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(t={data:n.data.map(function(r){return r.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),i===null&&(i=Ur(),ce.updateQueue=i),i.memoCache=t,i=t.data[t.index],i===void 0)for(i=t.data[t.index]=Array(e),n=0;n<e;n++)i[n]=ui;return t.index++,i}function Zi(e,t){return typeof t=="function"?t(e):t}function Ir(e){var t=Pe();return mu(t,Ee,e)}function mu(e,t,i){var n=e.queue;if(n===null)throw Error(l(311));n.lastRenderedReducer=i;var r=e.baseQueue,u=n.pending;if(u!==null){if(r!==null){var b=r.next;r.next=u.next,u.next=b}t.baseQueue=r=u,n.pending=null}if(u=e.baseState,r===null)e.memoizedState=u;else{t=r.next;var S=b=null,R=null,B=t,F=!1;do{var k=B.lane&-536870913;if(k!==B.lane?(ve&k)===k:(Ki&k)===k){var z=B.revertLane;if(z===0)R!==null&&(R=R.next={lane:0,revertLane:0,gesture:null,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null}),k===na&&(F=!0);else if((Ki&z)===z){B=B.next,z===na&&(F=!0);continue}else k={lane:0,revertLane:B.revertLane,gesture:null,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null},R===null?(S=R=k,b=u):R=R.next=k,ce.lanes|=z,Mn|=z;k=B.action,oa&&i(u,k),u=B.hasEagerState?B.eagerState:i(u,k)}else z={lane:k,revertLane:B.revertLane,gesture:B.gesture,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null},R===null?(S=R=z,b=u):R=R.next=z,ce.lanes|=k,Mn|=k;B=B.next}while(B!==null&&B!==t);if(R===null?b=u:R.next=S,!It(u,e.memoizedState)&&(Ye=!0,F&&(i=Pa,i!==null)))throw i;e.memoizedState=u,e.baseState=b,e.baseQueue=R,n.lastRenderedState=u}return r===null&&(n.lanes=0),[e.memoizedState,n.dispatch]}function pu(e){var t=Pe(),i=t.queue;if(i===null)throw Error(l(311));i.lastRenderedReducer=e;var n=i.dispatch,r=i.pending,u=t.memoizedState;if(r!==null){i.pending=null;var b=r=r.next;do u=e(u,b.action),b=b.next;while(b!==r);It(u,t.memoizedState)||(Ye=!0),t.memoizedState=u,t.baseQueue===null&&(t.baseState=u),i.lastRenderedState=u}return[u,n]}function Tm(e,t,i){var n=ce,r=Pe(),u=he;if(u){if(i===void 0)throw Error(l(407));i=i()}else i=t();var b=!It((Ee||r).memoizedState,i);if(b&&(r.memoizedState=i,Ye=!0),r=r.queue,yu(_m.bind(null,n,r,e),[e]),e=r.getSnapshot!==t||b||ke!==null&&(ke.memoizedState.tag&1)!==0,Xa(e?9:8,{destroy:void 0},Sm.bind(null,n,r,i,t),null),e){if(n.flags|=2048,De===null)throw Error(l(349));u||(Ki&127)!==0||xm(n,t,i)}return i}function xm(e,t,i){e.flags|=16384,e={getSnapshot:t,value:i},t=ce.updateQueue,t===null?(t=Ur(),ce.updateQueue=t,t.stores=[e]):(i=t.stores,i===null?t.stores=[e]:i.push(e))}function Sm(e,t,i,n){t.value=i,t.getSnapshot=n,wm(t)&&Am(e)}function _m(e,t,i){return i(function(){wm(t)&&Am(e)})}function wm(e){var t=e.getSnapshot;e=e.value;try{var i=t();return!It(e,i)}catch{return!0}}function Am(e){var t=Wn(e,2);t!==null&&Rt(t,e,2)}function gu(e){var t=yt();if(typeof e=="function"){var i=e;if(e=i(),oa){un(!0);try{i()}finally{un(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zi,lastRenderedState:e},t}function Em(e,t,i,n){return e.baseState=i,mu(e,Ee,typeof n=="function"?n:Zi)}function y1(e,t,i,n,r){if(Vr(e))throw Error(l(485));if(e=t.action,e!==null){var u={payload:r,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(b){u.listeners.push(b)}};J.T!==null?i(!0):u.isTransition=!1,n(u),i=t.pending,i===null?(u.next=t.pending=u,Mm(t,u)):(u.next=i.next,t.pending=i.next=u)}}function Mm(e,t){var i=t.action,n=t.payload,r=e.state;if(t.isTransition){var u=J.T,b={};b.types=u!==null?u.types:null,J.T=b;try{var S=i(r,n),R=J.S;R!==null&&R(b,S),Rm(e,t,S)}catch(B){vu(e,t,B)}finally{u!==null&&b.types!==null&&(u.types=b.types),J.T=u}}else try{u=i(r,n),Rm(e,t,u)}catch(B){vu(e,t,B)}}function Rm(e,t,i){i!==null&&typeof i=="object"&&typeof i.then=="function"?i.then(function(n){Cm(e,t,n)},function(n){return vu(e,t,n)}):Cm(e,t,i)}function Cm(e,t,i){t.status="fulfilled",t.value=i,Dm(t),e.state=i,t=e.pending,t!==null&&(i=t.next,i===t?e.pending=null:(i=i.next,t.next=i,Mm(e,i)))}function vu(e,t,i){var n=e.pending;if(e.pending=null,n!==null){n=n.next;do t.status="rejected",t.reason=i,Dm(t),t=t.next;while(t!==n)}e.action=null}function Dm(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Om(e,t){return t}function Nm(e,t){if(he){var i=De.formState;if(i!==null){e:{var n=ce;if(he){if(ze){t:{for(var r=ze,u=ei;r.nodeType!==8;){if(!u){r=null;break t}if(r=ii(r.nextSibling),r===null){r=null;break t}}u=r.data,r=u==="F!"||u==="F"?r:null}if(r){ze=ii(r.nextSibling),n=r.data==="F!";break e}}pn(n)}n=!1}n&&(t=i[0])}}return i=yt(),i.memoizedState=i.baseState=t,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Om,lastRenderedState:t},i.queue=n,i=Wm.bind(null,ce,n),n.dispatch=i,n=gu(!1),u=_u.bind(null,ce,!1,n.queue),n=yt(),r={state:t,dispatch:null,action:e,pending:null},n.queue=r,i=y1.bind(null,ce,r,u,i),r.dispatch=i,n.memoizedState=e,[t,i,!1]}function zm(e){var t=Pe();return Lm(t,Ee,e)}function Lm(e,t,i){if(t=mu(e,t,Om)[0],e=Ir(Zi)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var n=ul(t)}catch(b){throw b===qa?Rr:b}else n=t;t=Pe();var r=t.queue,u=r.dispatch;return i!==t.memoizedState&&(ce.flags|=2048,Xa(9,{destroy:void 0},b1.bind(null,r,i),null)),[n,u,e]}function b1(e,t){e.action=t}function Bm(e){var t=Pe(),i=Ee;if(i!==null)return Lm(t,i,e);Pe(),t=t.memoizedState,i=Pe();var n=i.queue.dispatch;return i.memoizedState=e,[t,n,!1]}function Xa(e,t,i,n){return e={tag:e,create:i,deps:n,inst:t,next:null},t=ce.updateQueue,t===null&&(t=Ur(),ce.updateQueue=t),i=t.lastEffect,i===null?t.lastEffect=e.next=e:(n=i.next,i.next=e,e.next=n,t.lastEffect=e),e}function Um(){return Pe().memoizedState}function Fr(e,t,i,n){var r=yt();ce.flags|=e,r.memoizedState=Xa(1|t,{destroy:void 0},i,n===void 0?null:n)}function Gr(e,t,i,n){var r=Pe();n=n===void 0?null:n;var u=r.memoizedState.inst;Ee!==null&&n!==null&&ou(n,Ee.memoizedState.deps)?r.memoizedState=Xa(t,u,i,n):(ce.flags|=e,r.memoizedState=Xa(1|t,u,i,n))}function Hm(e,t){Fr(8390656,8,e,t)}function yu(e,t){Gr(2048,8,e,t)}function T1(e){ce.flags|=4;var t=ce.updateQueue;if(t===null)t=Ur(),ce.updateQueue=t,t.events=[e];else{var i=t.events;i===null?t.events=[e]:i.push(e)}}function Im(e){var t=Pe().memoizedState;return T1({ref:t,nextImpl:e}),function(){if((xe&2)!==0)throw Error(l(440));return t.impl.apply(void 0,arguments)}}function Fm(e,t){return Gr(4,2,e,t)}function Gm(e,t){return Gr(4,4,e,t)}function Vm(e,t){if(typeof t=="function"){e=e();var i=t(e);return function(){typeof i=="function"?i():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Pm(e,t,i){i=i!=null?i.concat([e]):null,Gr(4,4,Vm.bind(null,t,e),i)}function bu(){}function qm(e,t){var i=Pe();t=t===void 0?null:t;var n=i.memoizedState;return t!==null&&ou(t,n[1])?n[0]:(i.memoizedState=[e,t],e)}function jm(e,t){var i=Pe();t=t===void 0?null:t;var n=i.memoizedState;if(t!==null&&ou(t,n[1]))return n[0];if(n=e(),oa){un(!0);try{e()}finally{un(!1)}}return i.memoizedState=[n,t],n}function Tu(e,t,i){return i===void 0||(Ki&1073741824)!==0&&(ve&261930)===0?e.memoizedState=t:(e.memoizedState=i,e=e0(),ce.lanes|=e,Mn|=e,i)}function km(e,t,i,n){return It(i,t)?i:xn.current!==null?(e=Tu(e,i,n),It(e,t)||(Ye=!0),e):(Ki&106)===0||(Ki&1073741824)!==0&&(ve&261930)===0?(Ye=!0,e.memoizedState=i):(e=e0(),ce.lanes|=e,Mn|=e,t)}function Ym(e,t,i,n,r){var u=fe.p;fe.p=u!==0&&8>u?u:8;var b=J.T,S={};S.types=b!==null?b.types:null,J.T=S,_u(e,!1,t,i);try{var R=r(),B=J.S;if(B!==null&&B(S,R),R!==null&&typeof R=="object"&&typeof R.then=="function"){var F=p1(R,n);fl(e,t,F,qt(e))}else fl(e,t,n,qt(e))}catch(k){fl(e,t,{then:function(){},status:"rejected",reason:k},qt())}finally{fe.p=u,b!==null&&S.types!==null&&(b.types=S.types),J.T=b}}function x1(){}function xu(e,t,i,n){if(e.tag!==5)throw Error(l(476));var r=Xm(e).queue;Ym(e,r,t,kn,i===null?x1:function(){return Km(e),i(n)})}function Xm(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:kn,baseState:kn,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zi,lastRenderedState:kn},next:null};var i={};return t.next={memoizedState:i,baseState:i,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zi,lastRenderedState:i},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Km(e){var t=Xm(e);t.next===null&&(t=e.alternate.memoizedState),fl(e,t.next.queue,{},qt())}function Su(){return ot(hs)}function Zm(){return Pe().memoizedState}function Qm(){return Pe().memoizedState}function S1(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var i=qt();e=bn(i);var n=Tn(t,e,i);n!==null&&(Rt(n,t,i),sl(n,t,i)),t={cache:Qc()},e.payload=t;return}t=t.return}}function _1(e,t,i){var n=qt();i={lane:n,revertLane:0,gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},Vr(e)?Jm(t,i):(i=Vc(e,t,i,n),i!==null&&(Rt(i,e,n),$m(i,t,n)))}function Wm(e,t,i){var n=qt();fl(e,t,i,n)}function fl(e,t,i,n){var r={lane:n,revertLane:0,gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null};if(Vr(e))Jm(t,r);else{var u=e.alternate;if(e.lanes===0&&(u===null||u.lanes===0)&&(u=t.lastRenderedReducer,u!==null))try{var b=t.lastRenderedState,S=u(b,i);if(r.hasEagerState=!0,r.eagerState=S,It(S,b))return yr(e,t,r,0),De===null&&vr(),!1}catch{}if(i=Vc(e,t,r,n),i!==null)return Rt(i,e,n),$m(i,t,n),!0}return!1}function _u(e,t,i,n){if(n={lane:2,revertLane:mf(),gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Vr(e)){if(t)throw Error(l(479))}else t=Vc(e,i,n,2),t!==null&&Rt(t,e,2)}function Vr(e){var t=e.alternate;return e===ce||t!==null&&t===ce}function Jm(e,t){ka=Lr=!0;var i=e.pending;i===null?t.next=t:(t.next=i.next,i.next=t),e.pending=t}function $m(e,t,i){if((i&4194048)!==0){var n=t.lanes;n&=e.pendingLanes,i|=n,t.lanes=i,ed(e,i)}}var Pr={readContext:ot,use:Hr,useCallback:Fe,useContext:Fe,useEffect:Fe,useImperativeHandle:Fe,useLayoutEffect:Fe,useInsertionEffect:Fe,useMemo:Fe,useReducer:Fe,useRef:Fe,useState:Fe,useDebugValue:Fe,useDeferredValue:Fe,useTransition:Fe,useSyncExternalStore:Fe,useId:Fe,useHostTransitionStatus:Fe,useFormState:Fe,useActionState:Fe,useOptimistic:Fe,useMemoCache:Fe,useCacheRefresh:Fe,useEffectEvent:Fe},ep={readContext:ot,use:Hr,useCallback:function(e,t){return yt().memoizedState=[e,t===void 0?null:t],e},useContext:ot,useEffect:Hm,useImperativeHandle:function(e,t,i){i=i!=null?i.concat([e]):null,Fr(4194308,4,Vm.bind(null,t,e),i)},useLayoutEffect:function(e,t){return Fr(4194308,4,e,t)},useInsertionEffect:function(e,t){Fr(4,2,e,t)},useMemo:function(e,t){var i=yt();t=t===void 0?null:t;var n=e();if(oa){un(!0);try{e()}finally{un(!1)}}return i.memoizedState=[n,t],n},useReducer:function(e,t,i){var n=yt();if(i!==void 0){var r=i(t);if(oa){un(!0);try{i(t)}finally{un(!1)}}}else r=t;return n.memoizedState=n.baseState=r,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},n.queue=e,e=e.dispatch=_1.bind(null,ce,e),[n.memoizedState,e]},useRef:function(e){var t=yt();return e={current:e},t.memoizedState=e},useState:function(e){e=gu(e);var t=e.queue,i=Wm.bind(null,ce,t);return t.dispatch=i,[e.memoizedState,i]},useDebugValue:bu,useDeferredValue:function(e,t){var i=yt();return Tu(i,e,t)},useTransition:function(){var e=gu(!1);return e=Ym.bind(null,ce,e.queue,!0,!1),yt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,i){var n=ce,r=yt();if(he){if(i===void 0)throw Error(l(407));i=i()}else{if(i=t(),De===null)throw Error(l(349));(ve&127)!==0||xm(n,t,i)}r.memoizedState=i;var u={value:i,getSnapshot:t};return r.queue=u,Hm(_m.bind(null,n,u,e),[e]),n.flags|=2048,Xa(9,{destroy:void 0},Sm.bind(null,n,u,i,t),null),i},useId:function(){var e=yt(),t=De.identifierPrefix;if(he){var i=Ai,n=wi;i=(n&~(1<<32-Ut(n)-1)).toString(32)+i,t="_"+t+"R_"+i,i=Br++,0<i&&(t+="H"+i.toString(32)),t+="_"}else i=g1++,t="_"+t+"r_"+i.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Su,useFormState:Nm,useActionState:Nm,useOptimistic:function(e){var t=yt();t.memoizedState=t.baseState=e;var i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=i,t=_u.bind(null,ce,!0,i),i.dispatch=t,[e,t]},useMemoCache:du,useCacheRefresh:function(){return yt().memoizedState=S1.bind(null,ce)},useEffectEvent:function(e){var t=yt(),i={impl:e};return t.memoizedState=i,function(){if((xe&2)!==0)throw Error(l(440));return i.impl.apply(void 0,arguments)}}},tp={readContext:ot,use:Hr,useCallback:qm,useContext:ot,useEffect:yu,useImperativeHandle:Pm,useInsertionEffect:Fm,useLayoutEffect:Gm,useMemo:jm,useReducer:Ir,useRef:Um,useState:function(){return Ir(Zi)},useDebugValue:bu,useDeferredValue:function(e,t){var i=Pe();return km(i,Ee.memoizedState,e,t)},useTransition:function(){var e=Ir(Zi)[0],t=Pe().memoizedState;return[typeof e=="boolean"?e:ul(e),t]},useSyncExternalStore:Tm,useId:Zm,useHostTransitionStatus:Su,useFormState:zm,useActionState:zm,useOptimistic:function(e,t){var i=Pe();return Em(i,Ee,e,t)},useMemoCache:du,useCacheRefresh:Qm,useEffectEvent:Im},w1={readContext:ot,use:Hr,useCallback:qm,useContext:ot,useEffect:yu,useImperativeHandle:Pm,useInsertionEffect:Fm,useLayoutEffect:Gm,useMemo:jm,useReducer:pu,useRef:Um,useState:function(){return pu(Zi)},useDebugValue:bu,useDeferredValue:function(e,t){var i=Pe();return Ee===null?Tu(i,e,t):km(i,Ee.memoizedState,e,t)},useTransition:function(){var e=pu(Zi)[0],t=Pe().memoizedState;return[typeof e=="boolean"?e:ul(e),t]},useSyncExternalStore:Tm,useId:Zm,useHostTransitionStatus:Su,useFormState:Bm,useActionState:Bm,useOptimistic:function(e,t){var i=Pe();return Ee!==null?Em(i,Ee,e,t):(i.baseState=e,[e,i.queue.dispatch])},useMemoCache:du,useCacheRefresh:Qm,useEffectEvent:Im};function wu(e,t,i,n){t=e.memoizedState,i=i(n,t),i=i==null?t:N({},t,i),e.memoizedState=i,e.lanes===0&&(e.updateQueue.baseState=i)}var Au={enqueueSetState:function(e,t,i){e=e._reactInternals;var n=qt(),r=bn(n);r.payload=t,i!=null&&(r.callback=i),t=Tn(e,r,n),t!==null&&(Rt(t,e,n),sl(t,e,n))},enqueueReplaceState:function(e,t,i){e=e._reactInternals;var n=qt(),r=bn(n);r.tag=1,r.payload=t,i!=null&&(r.callback=i),t=Tn(e,r,n),t!==null&&(Rt(t,e,n),sl(t,e,n))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var i=qt(),n=bn(i);n.tag=2,t!=null&&(n.callback=t),t=Tn(e,n,i),t!==null&&(Rt(t,e,i),sl(t,e,i))}};function ip(e,t,i,n,r,u,b){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,u,b):t.prototype&&t.prototype.isPureReactComponent?!Ws(i,n)||!Ws(r,u):!0}function np(e,t,i,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(i,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(i,n),t.state!==e&&Au.enqueueReplaceState(t,t.state,null)}function ca(e,t){var i=t;if("ref"in t){i={};for(var n in t)n!=="ref"&&(i[n]=t[n])}if(e=e.defaultProps){i===t&&(i=N({},i));for(var r in e)i[r]===void 0&&(i[r]=e[r])}return i}function ap(e){gr(e)}function sp(e){console.error(e)}function lp(e){gr(e)}function qr(e,t){try{var i=e.onUncaughtError;i(t.value,{componentStack:t.stack})}catch(n){setTimeout(function(){throw n})}}function rp(e,t,i){try{var n=e.onCaughtError;n(i.value,{componentStack:i.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(r){setTimeout(function(){throw r})}}function Eu(e,t,i){return i=bn(i),i.tag=3,i.payload={element:null},i.callback=function(){qr(e,t)},i}function op(e){return e=bn(e),e.tag=3,e}function cp(e,t,i,n){var r=i.type.getDerivedStateFromError;if(typeof r=="function"){var u=n.value;e.payload=function(){return r(u)},e.callback=function(){rp(t,i,n)}}var b=i.stateNode;b!==null&&typeof b.componentDidCatch=="function"&&(e.callback=function(){rp(t,i,n),typeof r!="function"&&(Rn===null?Rn=new Set([this]):Rn.add(this));var S=n.stack;this.componentDidCatch(n.value,{componentStack:S!==null?S:""})})}function A1(e,t,i,n,r){if(i.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(t=i.alternate,t!==null&&ta(t,i,r,!0),i=ct.current,i!==null){switch(i.tag){case 31:case 13:case 19:return pt===null?uo():i.alternate===null&&Ge===0&&(Ge=3),i.flags&=-257,i.flags|=65536,i.lanes=r,n===Cr?i.flags|=16384:(t=i.updateQueue,t===null?i.updateQueue=new Set([n]):t.add(n),ff(e,n,r)),!1;case 22:return i.flags|=65536,n===Cr?i.flags|=16384:(t=i.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([n])},i.updateQueue=t):(i=t.retryQueue,i===null?t.retryQueue=new Set([n]):i.add(n)),ff(e,n,r)),!1}throw Error(l(435,i.tag))}return ff(e,n,r),uo(),!1}if(he)return t=ct.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=r,n!==Yc&&(e=Error(l(422),{cause:n}),el(Wt(e,i)))):(n!==Yc&&(t=Error(l(423),{cause:n}),el(Wt(t,i))),e=e.current.alternate,e.flags|=65536,r&=-r,e.lanes|=r,n=Wt(n,i),r=Eu(e.stateNode,n,r),iu(e,r),Ge!==4&&(Ge=2)),!1;var u=Error(l(520),{cause:n});if(u=Wt(u,i),bl===null?bl=[u]:bl.push(u),Ge!==4&&(Ge=2),t===null)return!0;n=Wt(n,i),i=t;do{switch(i.tag){case 3:return i.flags|=65536,e=r&-r,i.lanes|=e,e=Eu(i.stateNode,n,e),iu(i,e),!1;case 1:if(t=i.type,u=i.stateNode,(i.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(Rn===null||!Rn.has(u))))return i.flags|=65536,r&=-r,i.lanes|=r,r=op(r),cp(r,e,i,n),iu(i,r),!1;break;case 22:if(i.memoizedState!==null)return i.flags|=65536,!1}i=i.return}while(i!==null);return!1}var Mu=Error(l(461)),Ye=!1;function Ze(e,t,i,n){t.child=e===null?dm(t,null,i,n):ra(t,e.child,i,n)}function up(e,t,i,n,r){i=i.render;var u=t.ref;if("ref"in n){var b={};for(var S in n)S!=="ref"&&(b[S]=n[S])}else b=n;return ia(t),n=cu(e,t,i,b,u,r),S=uu(),e!==null&&!Ye?(fu(e,t,r),Qi(e,t,r)):(he&&S&&Sr(t),t.flags|=1,Ze(e,t,n,r),t.child)}function fp(e,t,i,n,r){if(e===null){var u=i.type;return typeof u=="function"&&!Pc(u)&&u.defaultProps===void 0&&i.compare===null?(t.tag=15,t.type=u,hp(e,t,u,n,r)):(e=Tr(i.type,null,n,t,t.mode,r),e.ref=t.ref,e.return=t,t.child=e)}if(u=e.child,!Bu(e,r)){var b=u.memoizedProps;if(i=i.compare,i=i!==null?i:Ws,i(b,n)&&e.ref===t.ref)return Qi(e,t,r)}return t.flags|=1,e=ji(u,n),e.ref=t.ref,e.return=t,t.child=e}function hp(e,t,i,n,r){if(e!==null){var u=e.memoizedProps;if(Ws(u,n)&&e.ref===t.ref)if(Ye=!1,t.pendingProps=n=u,Bu(e,r))(e.flags&131072)!==0&&(Ye=!0);else return t.lanes=e.lanes,Qi(e,t,r)}return Ru(e,t,i,n,r)}function dp(e,t,i,n){var r=n.children,u=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.mode==="hidden"){if((t.flags&128)!==0){if(u=u!==null?u.baseLanes|i:i,e!==null){for(n=t.child=e.child,r=0;n!==null;)r=r|n.lanes|n.childLanes,n=n.sibling;n=r&~u}else n=0,t.child=null;return mp(e,t,u,i,n)}if((i&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Mr(t,u!==null?u.cachePool:null),u!==null?gm(t,u):au(),vm(t);else return n=t.lanes=536870912,mp(e,t,u!==null?u.baseLanes|i:i,i,n)}else u!==null?(Mr(t,u.cachePool),gm(t,u),_n(),t.memoizedState=null):(e!==null&&Mr(t,null),au(),_n());return Ze(e,t,r,i),t.child}function hl(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function mp(e,t,i,n,r){var u=Jc();return u=u===null?null:{parent:je._currentValue,pool:u},t.memoizedState={baseLanes:i,cachePool:u},e!==null&&Mr(t,null),au(),vm(t),e!==null&&ta(e,t,n,!0),t.childLanes=r,null}function jr(e,t){return t=kr({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function pp(e,t,i){return ra(t,e.child,null,i),e=jr(t,t.pendingProps),e.flags|=2,Ft(t),t.memoizedState=null,e}function E1(e,t,i){var n=t.pendingProps,r=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(he){if(n.mode==="hidden")return e=jr(t,n),t.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},hl(null,e);if(lu(t),(e=ze)?(e=V0(e,ei),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:dn!==null?{id:wi,overflow:Ai}:null,retryLane:536870912,hydrationErrors:null},i=Jd(e),i.return=t,t.child=i,$e=t,ze=null)):e=null,e===null)throw pn(t);return t.lanes=536870912,null}return jr(t,n)}var u=e.memoizedState;if(u!==null){var b=u.dehydrated;if(lu(t),r)if(t.flags&256)t.flags&=-257,t=pp(e,t,i);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(l(558));else if(Ye||ta(e,t,i,!1),r=(i&e.childLanes)!==0,Ye||r){if(xn.current===null){if(n=De,n!==null&&(b=td(n,i),b!==0&&b!==u.retryLane))throw u.retryLane=b,Wn(e,b),Rt(n,e,b),Mu;uo()}t=pp(e,t,i)}else e=u.treeContext,ze=ii(b.nextSibling),$e=t,he=!0,mn=null,ei=!1,e!==null&&tm(t,e),t=jr(t,n),t.flags|=134221824;return t}return e=ji(e.child,{mode:n.mode,children:n.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Ka(e,t){var i=t.ref;if(i===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof i!="function"&&typeof i!="object")throw Error(l(284));(e===null||e.ref!==i)&&(t.flags|=4194816)}}function Ru(e,t,i,n,r){return ia(t),i=cu(e,t,i,n,void 0,r),n=uu(),e!==null&&!Ye?(fu(e,t,r),Qi(e,t,r)):(he&&n&&Sr(t),t.flags|=1,Ze(e,t,i,r),t.child)}function gp(e,t,i,n,r,u){return ia(t),t.updateQueue=null,i=bm(t,n,i,r),ym(e),n=uu(),e!==null&&!Ye?(fu(e,t,u),Qi(e,t,u)):(he&&n&&Sr(t),t.flags|=1,Ze(e,t,i,u),t.child)}function vp(e,t,i,n,r){if(ia(t),t.stateNode===null){var u=Ia,b=i.contextType;typeof b=="object"&&b!==null&&(u=ot(b)),u=new i(n,u),t.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=Au,t.stateNode=u,u._reactInternals=t,u=t.stateNode,u.props=n,u.state=t.memoizedState,u.refs={},eu(t),b=i.contextType,u.context=typeof b=="object"&&b!==null?ot(b):Ia,u.state=t.memoizedState,b=i.getDerivedStateFromProps,typeof b=="function"&&(wu(t,i,b,n),u.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(b=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),b!==u.state&&Au.enqueueReplaceState(u,u.state,null),rl(t,n,u,r),ll(),u.state=t.memoizedState),typeof u.componentDidMount=="function"&&(t.flags|=4194308),n=!0}else if(e===null){u=t.stateNode;var S=t.memoizedProps,R=ca(i,S);u.props=R;var B=u.context,F=i.contextType;b=Ia,typeof F=="object"&&F!==null&&(b=ot(F));var k=i.getDerivedStateFromProps;F=typeof k=="function"||typeof u.getSnapshotBeforeUpdate=="function",S=t.pendingProps!==S,F||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(S||B!==b)&&np(t,u,n,b),yn=!1;var z=t.memoizedState;u.state=z,rl(t,n,u,r),ll(),B=t.memoizedState,S||z!==B||yn?(typeof k=="function"&&(wu(t,i,k,n),B=t.memoizedState),(R=yn||ip(t,i,R,n,z,B,b))?(F||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(t.flags|=4194308)):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=B),u.props=n,u.state=B,u.context=b,n=R):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{u=t.stateNode,tu(e,t),b=t.memoizedProps,F=ca(i,b),u.props=F,k=t.pendingProps,z=u.context,B=i.contextType,R=Ia,typeof B=="object"&&B!==null&&(R=ot(B)),S=i.getDerivedStateFromProps,(B=typeof S=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(b!==k||z!==R)&&np(t,u,n,R),yn=!1,z=t.memoizedState,u.state=z,rl(t,n,u,r),ll();var I=t.memoizedState;b!==k||z!==I||yn||e!==null&&e.dependencies!==null&&Ar(e.dependencies)?(typeof S=="function"&&(wu(t,i,S,n),I=t.memoizedState),(F=yn||ip(t,i,F,n,z,I,R)||e!==null&&e.dependencies!==null&&Ar(e.dependencies))?(B||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(n,I,R),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(n,I,R)),typeof u.componentDidUpdate=="function"&&(t.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof u.componentDidUpdate!="function"||b===e.memoizedProps&&z===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||b===e.memoizedProps&&z===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=I),u.props=n,u.state=I,u.context=R,n=F):(typeof u.componentDidUpdate!="function"||b===e.memoizedProps&&z===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||b===e.memoizedProps&&z===e.memoizedState||(t.flags|=1024),n=!1)}return u=n,Ka(e,t),n=(t.flags&128)!==0,u||n?(u=t.stateNode,i=n&&typeof i.getDerivedStateFromError!="function"?null:u.render(),t.flags|=1,e!==null&&n?(t.child=ra(t,e.child,null,r),t.child=ra(t,null,i,r)):Ze(e,t,i,r),t.memoizedState=u.state,e=t.child):e=Qi(e,t,r),e}function yp(e,t,i,n){return $n(),t.flags|=256,Ze(e,t,i,n),t.child}var Cu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Du(e){return{baseLanes:e,cachePool:rm()}}function Ou(e,t,i){return e=e!==null?e.childLanes&~i:0,t&&(e|=Pt),e}function bp(e,t,i){var n=t.pendingProps,r=!1,u=(t.flags&128)!==0,b;if((b=u)||(b=e!==null&&e.memoizedState===null?!1:(ut.current&2)!==0),b&&(r=!0,t.flags&=-129),b=(t.flags&32)!==0,t.flags&=-33,e===null){if(he){if(r?Sn(t):_n(),(e=ze)?(e=V0(e,ei),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:dn!==null?{id:wi,overflow:Ai}:null,retryLane:536870912,hydrationErrors:null},i=Jd(e),i.return=t,t.child=i,$e=t,ze=null)):e=null,e===null)throw pn(t);return Of(e)?t.lanes=32:t.lanes=536870912,null}return u=n.children,n=n.fallback,r?(_n(),r=t.mode,u=kr({mode:"hidden",children:u},r),n=Jn(n,r,i,null),u.return=t,n.return=t,u.sibling=n,t.child=u,n=t.child,n.memoizedState=Du(i),n.childLanes=Ou(e,b,i),t.memoizedState=Cu,hl(null,n)):(Sn(t),Nu(t,u))}var S=e.memoizedState;if(S!==null){var R=S.dehydrated;if(R!==null)return M1(e,t,u,b,n,R,S,i)}return r?(_n(),r=n.fallback,u=t.mode,S=e.child,R=S.sibling,n=ji(S,{mode:"hidden",children:n.children}),n.subtreeFlags=S.subtreeFlags&1206910976,R!==null?r=ji(R,r):(r=Jn(r,u,i,null),r.flags|=2),r.return=t,n.return=t,n.sibling=r,t.child=n,hl(null,n),n=t.child,r=e.child.memoizedState,r===null?r=Du(i):(u=r.cachePool,u!==null?(S=je._currentValue,u=u.parent!==S?{parent:S,pool:S}:u):u=rm(),r={baseLanes:r.baseLanes|i,cachePool:u}),n.memoizedState=r,n.childLanes=Ou(e,b,i),t.memoizedState=Cu,hl(e.child,n)):(Sn(t),i=e.child,e=i.sibling,i=ji(i,{mode:"visible",children:n.children}),i.return=t,i.sibling=null,e!==null&&(b=t.deletions,b===null?(t.deletions=[e],t.flags|=16):b.push(e)),t.child=i,t.memoizedState=null,i)}function Nu(e,t){return t=kr({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function kr(e,t){return e=wt(22,e,null,t),e.lanes=0,e}function Yr(e,t,i){return ra(t,e.child,null,i),e=Nu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function M1(e,t,i,n,r,u,b,S){if(i)return t.flags&256?(Sn(t),t.flags&=-257,Yr(e,t,S)):t.memoizedState!==null?(_n(),t.child=e.child,t.flags|=128,null):(_n(),u=r.fallback,b=t.mode,r=kr({mode:"visible",children:r.children},b),u=Jn(u,b,S,null),u.flags|=2,r.return=t,u.return=t,r.sibling=u,t.child=r,ra(t,e.child,null,S),r=t.child,r.memoizedState=Du(S),r.childLanes=Ou(e,n,S),t.memoizedState=Cu,hl(null,r));if(Sn(t),Of(u)){if(n=u.nextSibling&&u.nextSibling.dataset,n)var R=n.dgst;return n=R,n!==""&&(r=Error(l(419)),r.stack="",r.digest=n,el({value:r,source:null,stack:null})),Yr(e,t,S)}if(Ye||ta(e,t,S,!1),n=(S&e.childLanes)!==0,Ye||n){if(xn.current!==null)return Yr(e,t,S);if(n=De,n!==null&&(r=td(n,S),r!==0&&r!==b.retryLane))throw b.retryLane=r,Wn(e,r),Rt(n,e,r),Mu;return Df(u)||uo(),Yr(e,t,S)}return Df(u)?(t.flags|=192,t.child=e.child,null):(e=b.treeContext,ze=ii(u.nextSibling),$e=t,he=!0,mn=null,ei=!1,e!==null&&tm(t,e),t=Nu(t,r.children),t.flags|=134221824,t)}function Tp(e,t,i){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),wr(e.return,t,i)}function xp(e){for(var t=null;e!==null;){var i=e.alternate;i!==null&&zr(i)===null&&(t=e),e=e.sibling}return t}function Xr(e,t,i,n,r,u){var b=e.memoizedState;b===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:i,tailMode:r,treeForkCount:u}:(b.isBackwards=t,b.rendering=null,b.renderingStartTime=0,b.last=n,b.tail=i,b.tailMode=r,b.treeForkCount=u)}function zu(e){var t=e.child;for(e.child=null;t!==null;){var i=t.sibling;t.sibling=e.child,e.child=t,t=i}}function Lu(e,t,i){var n=t.pendingProps,r=n.revealOrder,u=n.tail;n=n.children;var b=ut.current;if(t.flags&128)return ol(t,b),null;var S=(b&2)!==0;if(S?(b=b&1|2,t.flags|=128):b&=1,ol(t,b),r==="backwards"&&e!==null?(zu(e),Ze(e,t,n,i),zu(e)):Ze(e,t,n,i),n=he?$s:0,!S&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Tp(e,i,t);else if(e.tag===19)Tp(e,i,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(r){case"backwards":i=xp(t.child),i===null?(r=t.child,t.child=null):(r=i.sibling,i.sibling=null,zu(t)),Xr(t,!0,r,null,u,n);break;case"unstable_legacy-backwards":for(i=null,r=t.child,t.child=null;r!==null;){if(e=r.alternate,e!==null&&zr(e)===null){t.child=r;break}e=r.sibling,r.sibling=i,i=r,r=e}Xr(t,!0,i,null,u,n);break;case"together":Xr(t,!1,null,null,void 0,n);break;case"independent":t.memoizedState=null;break;default:i=xp(t.child),i===null?(r=t.child,t.child=null):(r=i.sibling,i.sibling=null),Xr(t,!1,r,i,u,n)}return t.child}function Sp(e,t,i){var n=t.pendingProps;return gn(t,t.type,n.value),Ze(e,t,n.children,i),t.child}function Qi(e,t,i){if(e!==null&&(t.dependencies=e.dependencies),Mn|=t.lanes,(i&t.childLanes)===0)if(e!==null){if(ta(e,t,i,!1),(i&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(l(153));if(t.child!==null){for(e=t.child,i=ji(e,e.pendingProps),t.child=i,i.return=t;e.sibling!==null;)e=e.sibling,i=i.sibling=ji(e,e.pendingProps),i.return=t;i.sibling=null}return t.child}function Bu(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Ar(e)))}function R1(e,t,i){switch(t.tag){case 3:Jl(t,t.stateNode.containerInfo),gn(t,je,e.memoizedState.cache),$n();break;case 27:case 5:oc(t);break;case 4:Jl(t,t.stateNode.containerInfo);break;case 10:gn(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,lu(t),null;break;case 13:var n=t.memoizedState;if(n!==null){if(n.dehydrated!==null)return Sn(t),t.flags|=128,null;n=ta(e,t,i,!1);var r=t.child.childLanes;return n||(i&r)!==0?bp(e,t,i):(Sn(t),e=Qi(e,t,i),e!==null?e.sibling:null)}Sn(t);break;case 19:if(t.flags&128)return Lu(e,t,i);if(r=(e.flags&128)!==0,n=(i&t.childLanes)!==0,n||(ta(e,t,i,!1),n=(i&t.childLanes)!==0),r){if(n)return Lu(e,t,i);t.flags|=128}if(r=t.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ol(t,ut.current),n)break;return null;case 22:return t.lanes=0,dp(e,t,i,t.pendingProps);case 24:gn(t,je,e.memoizedState.cache)}return Qi(e,t,i)}function _p(e,t,i){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ye=!0;else{if(!Bu(e,i)&&(t.flags&128)===0)return Ye=!1,R1(e,t,i);Ye=(e.flags&131072)!==0}else Ye=!1,he&&(t.flags&1048576)!==0&&em(t,$s,t.index);switch(t.lanes=0,t.tag){case 16:e:{var n=t.pendingProps;if(e=sa(t.elementType),t.type=e,typeof e=="function")Pc(e)?(n=ca(e,n),t.tag=1,t=vp(null,t,e,n,i)):(t.tag=0,t=Ru(null,t,e,n,i));else{if(e!=null){var r=e.$$typeof;if(r===K){t.tag=11,t=up(null,t,e,n,i);break e}else if(r===oe){t.tag=14,t=fp(null,t,e,n,i);break e}else if(r===ne){t.tag=10,t.type=e,t=Sp(null,t,i);break e}}throw t=jn(e)||e,Error(l(306,t,""))}}return t;case 0:return Ru(e,t,t.type,t.pendingProps,i);case 1:return n=t.type,r=ca(n,t.pendingProps),vp(e,t,n,r,i);case 3:e:{if(Jl(t,t.stateNode.containerInfo),e===null)throw Error(l(387));n=t.pendingProps;var u=t.memoizedState;r=u.element,tu(e,t),rl(t,n,null,i);var b=t.memoizedState;if(n=b.cache,gn(t,je,n),n!==u.cache&&Zc(t,[je],i,!0),ll(),n=b.element,u.isDehydrated)if(u={element:n,isDehydrated:!1,cache:b.cache},t.updateQueue.baseState=u,t.memoizedState=u,t.flags&256){t=yp(e,t,n,i);break e}else if(n!==r){r=Wt(Error(l(424)),t),el(r),t=yp(e,t,n,i);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,ze=ii(e.firstChild),$e=t,he=!0,mn=null,ei=!0,i=dm(t,null,n,i),t.child=i;i;)i.flags=i.flags&-3|134221824,i=i.sibling;else{if($n(),n===r){t=Qi(e,t,i);break e}Ze(e,t,n,i)}t=t.child}return t;case 26:return Ka(e,t),e===null?(i=K0(t.type,null,t.pendingProps,null))?t.memoizedState=i:he||(t.stateNode=M0(t.type,t.pendingProps,on.current,t)):t.memoizedState=K0(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return oc(t),e===null&&he&&(n=t.stateNode=j0(t.type,t.pendingProps,on.current),$e=t,ei=!0,r=ze,On(t.type)?(Nf=r,ze=ii(n.firstChild)):ze=r),Ze(e,t,t.pendingProps.children,i),Ka(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&he&&((r=n=ze)&&(n=Sb(n,t.type,t.pendingProps,ei),n!==null?(t.stateNode=n,$e=t,ze=ii(n.firstChild),ei=!1,r=!0):r=!1),r||pn(t)),oc(t),r=t.type,u=t.pendingProps,b=e!==null?e.memoizedProps:null,n=u.children,_f(r,u)?n=null:b!==null&&_f(r,b)&&(t.flags|=32),t.memoizedState!==null&&(r=cu(e,t,v1,null,null,i),hs._currentValue=r),Ka(e,t),Ze(e,t,n,i),t.child;case 6:return e===null&&he&&((e=i=ze)&&(i=_b(i,t.pendingProps,ei),i!==null?(t.stateNode=i,$e=t,ze=null,e=!0):e=!1),e||pn(t)),null;case 13:return bp(e,t,i);case 4:return Jl(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=ra(t,null,n,i):Ze(e,t,n,i),t.child;case 11:return up(e,t,t.type,t.pendingProps,i);case 7:return n=t.pendingProps,Ka(e,t),Ze(e,t,n,i),t.child;case 8:return Ze(e,t,t.pendingProps.children,i),t.child;case 12:return Ze(e,t,t.pendingProps.children,i),t.child;case 10:return Sp(e,t,i);case 9:return r=t.type._context,n=t.pendingProps.children,ia(t),r=ot(r),n=n(r),t.flags|=1,Ze(e,t,n,i),t.child;case 14:return fp(e,t,t.type,t.pendingProps,i);case 15:return hp(e,t,t.type,t.pendingProps,i);case 19:return Lu(e,t,i);case 31:return E1(e,t,i);case 22:return dp(e,t,i,t.pendingProps);case 24:return ia(t),n=ot(je),e===null?(r=Jc(),r===null&&(r=De,u=Qc(),r.pooledCache=u,u.refCount++,u!==null&&(r.pooledCacheLanes|=i),r=u),t.memoizedState={parent:n,cache:r},eu(t),gn(t,je,r)):((e.lanes&i)!==0&&(tu(e,t),rl(t,null,null,i),ll()),r=e.memoizedState,u=t.memoizedState,r.parent!==n?(r={parent:n,cache:n},t.memoizedState=r,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=r),gn(t,je,n)):(n=u.cache,gn(t,je,n),n!==r.cache&&Zc(t,[je],i,!0))),Ze(e,t,t.pendingProps.children,i),t.child;case 30:return t.stateNode===null&&(t.stateNode={autoName:null,paired:null,clones:null,ref:null}),n=t.pendingProps,n.name!=null&&n.name!=="auto"?t.flags|=e===null?18882560:18874368:he&&Sr(t),e!==null&&e.memoizedProps.name!==n.name?t.flags|=4194816:Ka(e,t),Ze(e,t,n.children,i),t.child;case 29:throw t.pendingProps}throw Error(l(156,t.tag))}function Wi(e){e.flags|=4}function Uu(e,t,i,n,r){var u;if((u=(e.mode&32)!==0)&&(u=i===null?J0(t,n):J0(t,n)&&(n.src!==i.src||n.srcSet!==i.srcSet)),u){if(e.flags|=16777216,(r&335544128)===r)if(e.stateNode.complete)e.flags|=8192;else if(a0())e.flags|=8192;else throw la=Cr,$c}else e.flags&=-16777217}function wp(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!$0(t))if(a0())e.flags|=8192;else throw la=Cr,$c}function Kr(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Jh():536870912,e.lanes|=t,$a|=t)}function dl(e,t){if(!he)switch(e.tailMode){case"visible":break;case"collapsed":for(var i=e.tail,n=null;i!==null;)i.alternate!==null&&(n=i),i=i.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null;break;default:for(t=e.tail,i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e.tail=null:i.sibling=null}}function Le(e){var t=e.alternate!==null&&e.alternate.child===e.child,i=0,n=0;if(t)for(var r=e.child;r!==null;)i|=r.lanes|r.childLanes,n|=r.subtreeFlags&1206910976,n|=r.flags&1206910976,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)i|=r.lanes|r.childLanes,n|=r.subtreeFlags,n|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=n,e.childLanes=i,t}function C1(e,t,i){var n=t.pendingProps;switch(kc(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Le(t),null;case 1:return Le(t),null;case 3:return i=t.stateNode,n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Xi(je),Aa(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(Va(t)?Wi(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Xc())),Le(t),null;case 26:var r=t.type,u=t.memoizedState;return e===null?(Wi(t),u!==null?(Le(t),wp(t,u)):(Le(t),Uu(t,r,null,n,i))):u?u!==e.memoizedState?(Wi(t),Le(t),wp(t,u)):(Le(t),t.flags&=-16777217):(e=e.memoizedProps,e!==n&&Wi(t),Le(t),Uu(t,r,e,n,i)),null;case 27:if($l(t),i=on.current,r=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&Wi(t);else{if(!n){if(t.stateNode===null)throw Error(l(166));return Le(t),t.subtreeFlags&=-33554433,null}e=Si.current,Va(t)?im(t):(e=j0(r,n,i),t.stateNode=e,Wi(t))}return Le(t),t.subtreeFlags&=-33554433,null;case 5:if($l(t),r=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&Wi(t);else{if(!n){if(t.stateNode===null)throw Error(l(166));return Le(t),t.subtreeFlags&=-33554433,null}if(u=Si.current,Va(t))im(t);else{var b=wl(on.current);switch(u){case 1:u=b.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:u=b.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":u=b.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":u=b.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":u=b.createElement("div"),u.innerHTML="<script><\/script>",u=u.removeChild(u.firstChild);break;case"select":u=typeof n.is=="string"?b.createElement("select",{is:n.is}):b.createElement("select"),n.multiple?u.multiple=!0:n.size&&(u.size=n.size);break;default:u=typeof n.is=="string"?b.createElement(r,{is:n.is}):b.createElement(r)}}u[rt]=t,u[_t]=n;e:for(b=t.child;b!==null;){if(b.tag===5||b.tag===6)u.appendChild(b.stateNode);else if(b.tag!==4&&b.tag!==27&&b.child!==null){b.child.return=b,b=b.child;continue}if(b===t)break e;for(;b.sibling===null;){if(b.return===null||b.return===t)break e;b=b.return}b.sibling.return=b.return,b=b.sibling}t.stateNode=u;e:switch(ht(u,r,n),r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&Wi(t)}}return Le(t),t.subtreeFlags&=-33554433,Uu(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,i),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==n&&Wi(t);else{if(typeof n!="string"&&t.stateNode===null)throw Error(l(166));if(e=on.current,Va(t)){if(e=t.stateNode,i=t.memoizedProps,n=null,r=$e,r!==null)switch(r.tag){case 27:case 5:n=r.memoizedProps}e[rt]=t,e=!!(e.nodeValue===i||n!==null&&n.suppressHydrationWarning===!0||_0(e.nodeValue,i)),e||pn(t,!0)}else e=wl(e).createTextNode(n),e[rt]=t,t.stateNode=e}return Le(t),null;case 31:if(i=t.memoizedState,e===null||e.memoizedState!==null){if(n=Va(t),i!==null){if(e===null){if(!n)throw Error(l(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(557));e[rt]=t}else $n(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Le(t),e=!1}else i=Xc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),e=!0;if(!e)return t.flags&256?(Ft(t),t):(Ft(t),null);if((t.flags&128)!==0)throw Error(l(558))}return Le(t),null;case 13:if(n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(r=Va(t),n!==null&&n.dehydrated!==null){if(e===null){if(!r)throw Error(l(318));if(r=t.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(l(317));r[rt]=t}else $n(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Le(t),r=!1}else r=Xc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=r),r=!0;if(!r)return t.flags&256?(Ft(t),t):(Ft(t),null)}return Ft(t),(t.flags&128)!==0?(t.lanes=i,t):(i=n!==null,e=e!==null&&e.memoizedState!==null,i&&(n=t.child,r=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(r=n.alternate.memoizedState.cachePool.pool),u=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(u=n.memoizedState.cachePool.pool),u!==r&&(n.flags|=2048)),i!==e&&i&&(t.child.flags|=8192),Kr(t,t.updateQueue),Le(t),null);case 4:return Aa(),e===null&&yf(t.stateNode.containerInfo),t.flags|=67108864,Le(t),null;case 10:return Xi(t.type),Le(t),null;case 19:if(ru(t),n=t.memoizedState,n===null)return Le(t),null;if(r=(t.flags&128)!==0,u=n.rendering,u===null)if(r)dl(n,!1);else{if(Ge!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(u=zr(e),u!==null){for(t.flags|=128,dl(n,!1),e=u.updateQueue,t.updateQueue=e,Kr(t,e),t.subtreeFlags=0,e=i,i=t.child;i!==null;)Wd(i,e),i=i.sibling;return ol(t,ut.current&1|2),he&&ki(t,n.treeForkCount),t.child}e=e.sibling}n.tail!==null&&Lt()>lo&&(t.flags|=128,r=!0,dl(n,!1),t.lanes=4194304)}else{if(!r)if(e=zr(u),e!==null){if(t.flags|=128,r=!0,e=e.updateQueue,t.updateQueue=e,Kr(t,e),dl(n,!0),n.tail===null&&n.tailMode!=="collapsed"&&n.tailMode!=="visible"&&!u.alternate&&!he)return Le(t),null}else 2*Lt()-n.renderingStartTime>lo&&i!==536870912&&(t.flags|=128,r=!0,dl(n,!1),t.lanes=4194304);n.isBackwards?(u.sibling=t.child,t.child=u):(e=n.last,e!==null?e.sibling=u:t.child=u,n.last=u)}if(n.tail!==null){e=n.tail;e:{for(i=e;i!==null;){if(i.alternate!==null){i=!1;break e}i=i.sibling}i=!0}return n.rendering=e,n.tail=e.sibling,n.renderingStartTime=Lt(),e.sibling=null,u=ut.current,u=r?u&1|2:u&1,n.tailMode==="visible"||n.tailMode==="collapsed"||!i||he?ol(t,u):(i=u,Ne(ct,t),Ne(ut,i),pt===null&&(pt=t)),he&&ki(t,n.treeForkCount),e}return Le(t),null;case 22:case 23:return Ft(t),su(),n=t.memoizedState!==null,e!==null?e.memoizedState!==null!==n&&(t.flags|=8192):n&&(t.flags|=8192),n?(i&536870912)!==0&&(t.flags&128)===0&&(Le(t),t.subtreeFlags&6&&(t.flags|=8192)):Le(t),i=t.updateQueue,i!==null&&Kr(t,i.retryQueue),i=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(i=e.memoizedState.cachePool.pool),n=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),n!==i&&(t.flags|=2048),e!==null&&lt(aa),null;case 24:return i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),Xi(je),Le(t),null;case 25:return null;case 30:return t.flags|=33554432,Le(t),null}throw Error(l(156,t.tag))}function D1(e,t){switch(kc(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Xi(je),Aa(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return $l(t),null;case 31:if(t.memoizedState!==null){if(Ft(t),t.alternate===null)throw Error(l(340));$n()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Ft(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(l(340));$n()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ru(t),e=t.flags,e&65536?(t.flags=e&-65537|128,e=t.memoizedState,e!==null&&(e.rendering=null,e.tail=null),t.flags|=4,t):null;case 4:return Aa(),null;case 10:return Xi(t.type),null;case 22:case 23:return Ft(t),su(),e!==null&&lt(aa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Xi(je),null;case 25:return null;default:return null}}function Ap(e,t){switch(kc(t),t.tag){case 3:Xi(je),Aa();break;case 26:case 27:case 5:$l(t);break;case 4:Aa();break;case 31:t.memoizedState!==null&&Ft(t);break;case 13:Ft(t);break;case 19:ru(t);break;case 10:Xi(t.type);break;case 22:case 23:Ft(t),su(),e!==null&&lt(aa);break;case 24:Xi(je)}}function ml(e,t){try{var i=t.updateQueue,n=i!==null?i.lastEffect:null;if(n!==null){var r=n.next;i=r;do{if((i.tag&e)===e){n=void 0;var u=i.create,b=i.inst;n=u(),b.destroy=n}i=i.next}while(i!==r)}}catch(S){we(t,t.return,S)}}function wn(e,t,i){try{var n=t.updateQueue,r=n!==null?n.lastEffect:null;if(r!==null){var u=r.next;n=u;do{if((n.tag&e)===e){var b=n.inst,S=b.destroy;if(S!==void 0){b.destroy=void 0,r=t;var R=i,B=S;try{B()}catch(F){we(r,R,F)}}}n=n.next}while(n!==u)}}catch(F){we(t,t.return,F)}}function Ep(e){var t=e.updateQueue;if(t!==null){var i=e.stateNode;try{pm(t,i)}catch(n){we(e,e.return,n)}}}function Mp(e,t,i){i.props=ca(e.type,e.memoizedProps),i.state=e.memoizedState;try{i.componentWillUnmount()}catch(n){we(e,t,n)}}function Ei(e,t){try{var i=e.ref;if(i!==null){switch(e.tag){case 26:case 27:case 5:var n=e.stateNode;break;case 30:var r=e.stateNode,u=Pi(e.memoizedProps,r);(r.ref===null||r.ref.name!==u)&&(r.ref=L0(u)),n=r.ref;break;case 7:if(e.stateNode===null){var b=new jt(e);v(e.child,!1,Tb,b,void 0,void 0),e.stateNode=b}n=e.stateNode;break;default:n=e.stateNode}typeof i=="function"?e.refCleanup=i(n):i.current=n}}catch(S){we(e,t,S)}}function ft(e,t){var i=e.ref,n=e.refCleanup;if(i!==null)if(typeof n=="function")try{n()}catch(r){we(e,t,r)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof i=="function")try{i(null)}catch(r){we(e,t,r)}else i.current=null}function Zr(e,t){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&t!==null)for(var i=0;i<t.length;i++)G0(e.stateNode,t[i])}function Rp(e){for(var t=e.return;t!==null&&(Iu(t)&&G0(e.stateNode,t.stateNode),!Hu(t));)t=t.return}function pl(e){for(var t=e.return;t!==null&&(Iu(t)&&xb(e.stateNode,t.stateNode),!Hu(t));)t=t.return}function Hu(e){return e.tag===5||e.tag===3||e.tag===27}function Iu(e){return e&&e.tag===7&&e.stateNode!==null}function Fu(e){var t=e.type,i=e.memoizedProps,n=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":i.autoFocus&&n.focus();break e;case"img":i.src?n.src=i.src:i.srcSet&&(n.srcset=i.srcSet)}}catch(r){we(e,e.return,r)}}function Gu(e,t,i){try{var n=e.stateNode;ib(n,e.type,i,t),n[_t]=t}catch(r){we(e,e.return,r)}}function Cp(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&On(e.type)||e.tag===4}function Vu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Cp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&On(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Pu(e,t,i,n){var r=e.tag;if(r===5||r===6)r=e.stateNode,t?(i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i).insertBefore(r,t):(t=i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i,t.appendChild(r),i=i._reactRootContainer,i!=null||t.onclick!==null||(t.onclick=_i)),Zr(e,n),Te=!0;else if(r!==4&&(r===27&&(Zr(e,n),n=null,On(e.type)&&(i=e.stateNode,t=null)),e=e.child,e!==null))for(Pu(e,t,i,n),e=e.sibling;e!==null;)Pu(e,t,i,n),e=e.sibling}function Qr(e,t,i,n){var r=e.tag;if(r===5||r===6)r=e.stateNode,t?i.insertBefore(r,t):i.appendChild(r),Zr(e,n),Te=!0;else if(r!==4&&(r===27&&(Zr(e,n),n=null,On(e.type)&&(i=e.stateNode)),e=e.child,e!==null))for(Qr(e,t,i,n),e=e.sibling;e!==null;)Qr(e,t,i,n),e=e.sibling}function Dp(e){var t=e.stateNode,i=e.memoizedProps;try{for(var n=e.type,r=t.attributes;r.length;)t.removeAttributeNode(r[0]);ht(t,n,i),t[rt]=e,t[_t]=i}catch(u){we(e,e.return,u)}}var Wr=!1,Gt=null;function Op(e){(e.tag===30||(e.subtreeFlags&33554432)!==0)&&(Wr=!0)}var Mi=null;function Np(){var e=Mi;return Mi=null,e}var At=0;function Za(e,t,i,n,r){return At=0,zp(e.child,t,i,n,r)}function zp(e,t,i,n,r){for(var u=!1;e!==null;){if(e.tag===5){var b=e.stateNode;if(n!==null){var S=Ef(b);n.push(S),S.view&&(u=!0)}else u||Ef(b).view&&(u=!0);Wr=!0,N0(b,At===0?t:t+"_"+At,i),At++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&r||zp(e.child,t,i,n,r)&&(u=!0));e=e.sibling}return u}function Ri(e,t){for(;e!==null;)e.tag===5?z0(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&t||Ri(e.child,t)),e=e.sibling}function Jr(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(Jr(e),e.tag===30&&(e.flags&18874368)!==0&&e.stateNode.paired)){var t=e.memoizedProps;if(t.name==null||t.name==="auto")throw Error(l(544));var i=t.name;t=qi(t.default,t.share),t!=="none"&&(Za(e,i,t,null,!1)||Ri(e.child,!1))}e=e.sibling}}function qu(e,t){if(e.tag===30){var i=e.stateNode,n=e.memoizedProps,r=Pi(n,i),u=qi(n.default,i.paired?n.share:n.enter);u!=="none"?Za(e,r,u,null,!1)?(Jr(e),i.paired||t||ns(e,n.onEnter)):Ri(e.child,!1):Jr(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)qu(e,t),e=e.sibling;else Jr(e)}function ju(e){if(Gt!==null&&Gt.size!==0){var t=Gt;if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var i=e.memoizedProps,n=i.name;if(n!=null&&n!=="auto"){var r=t.get(n);if(r!==void 0){var u=qi(i.default,i.share);if(u!=="none"&&(Za(e,n,u,null,!1)?(u=e.stateNode,r.paired=u,u.paired=r,ns(e,i.onShare)):Ri(e.child,!1)),t.delete(n),t.size===0)break}}}ju(e)}e=e.sibling}}}function ku(e){if(e.tag===30){var t=e.memoizedProps,i=Pi(t,e.stateNode),n=Gt!==null?Gt.get(i):void 0,r=qi(t.default,n!==void 0?t.share:t.exit);r!=="none"&&(Za(e,i,r,null,!1)?n!==void 0?(r=e.stateNode,n.paired=r,r.paired=n,Gt.delete(i),ns(e,t.onShare)):ns(e,t.onExit):Ri(e.child,!1)),Gt!==null&&ju(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)ku(e),e=e.sibling;else Gt!==null&&ju(e)}function Lp(e){for(e=e.child;e!==null;){if(e.tag===30){var t=e.memoizedProps,i=Pi(t,e.stateNode);t=qi(t.default,t.update),e.flags&=-5,t!=="none"&&Za(e,i,t,e.memoizedState=[],!1)}else(e.subtreeFlags&33554432)!==0&&Lp(e);e=e.sibling}}function Yu(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var t=e.stateNode;t.paired!==null&&(t.paired=null,Ri(e.child,!1))}Yu(e)}e=e.sibling}}function $r(e){if(e.tag===30)e.stateNode.paired=null,Ri(e.child,!1),Yu(e);else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)$r(e),e=e.sibling;else Yu(e)}function Bp(e){for(e=e.child;e!==null;)e.tag===30?Ri(e.child,!1):(e.subtreeFlags&33554432)!==0&&Bp(e),e=e.sibling}function Xu(e,t,i,n,r,u,b){for(var S=!1;t!==null;){if(t.tag===5){var R=t.stateNode;if(u!==null&&At<u.length){var B=u[At],F=Ef(R);(B.view||F.view)&&(S=!0);var k;if(k=(e.flags&4)===0)if(F.clip)k=!0;else{k=B.rect;var z=F.rect;k=k.y!==z.y||k.x!==z.x||k.height!==z.height||k.width!==z.width}k&&(e.flags|=4),F.abs?F=!B.abs:(B=B.rect,F=F.rect,F=B.height!==F.height||B.width!==F.width),F&&(e.flags|=32)}else e.flags|=32;(e.flags&4)!==0&&N0(R,At===0?i:i+"_"+At,r),S&&(e.flags&4)!==0||(Mi===null&&(Mi=[]),Mi.push(R,At===0?n:n+"_"+At,t.memoizedProps)),At++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&b?e.flags|=t.flags&32:Xu(e,t.child,i,n,r,u,b)&&(S=!0));t=t.sibling}return S}function Up(e,t){for(e=e.child;e!==null;){if(e.tag===30){var i=e.memoizedProps,n=e.stateNode,r=Pi(i,n),u=qi(i.default,i.update),b;b=e.memoizedState,e.memoizedState=null,n=e;var S=e.child;At=0,r=Xu(n,S,r,r,u,b,!1),(e.flags&4)!==0&&r&&ns(e,i.onUpdate)}else(e.subtreeFlags&33554432)!==0&&Up(e);e=e.sibling}}var et=!1,Se=!1,Ci=!1,Ku=!1,Hp=typeof WeakSet=="function"?WeakSet:Set,tt=null,Di=!1,gl=!1,eo=!1,Zu=!1;function O1(e,t,i){if(e=e.containerInfo,xf=ds,e=Vd(e),Bc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var u=r.anchorOffset,b=r.focusNode;r=r.focusOffset;try{n.nodeType,b.nodeType}catch{n=null;break e}var S=0,R=-1,B=-1,F=0,k=0,z=e,I=null;t:for(;;){for(var $;z!==n||u!==0&&z.nodeType!==3||(R=S+u),z!==b||r!==0&&z.nodeType!==3||(B=S+r),z.nodeType===3&&(S+=z.nodeValue.length),($=z.firstChild)!==null;)I=z,z=$;for(;;){if(z===e)break t;if(I===n&&++F===u&&(R=S),I===b&&++k===r&&(B=S),($=z.nextSibling)!==null)break;z=I,I=z.parentNode}z=$}n=R===-1||B===-1?null:{start:R,end:B}}else n=null}n=n||{start:0,end:0}}else n=null;for(Sf={focusedElem:e,selectionRange:n},ds=!1,i=(i&335544064)===i,tt=t,t=i?9270:1024;tt!==null;){if(e=tt,i&&(n=e.deletions,n!==null))for(u=0;u<n.length;u++)i&&ku(n[u]);if(e.alternate===null&&(e.flags&2)!==0)i&&Op(e),to(i);else{if(e.tag===22){if(n=e.alternate,e.memoizedState!==null){n!==null&&n.memoizedState===null&&i&&ku(n),to(i);continue}else if(n!==null&&n.memoizedState!==null){i&&Op(e),to(i);continue}}n=e.child,(e.subtreeFlags&t)!==0&&n!==null?(n.return=e,tt=n):(i&&Lp(e),to(i))}}Gt=null}function to(e){for(;tt!==null;){var t=tt,i=e,n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 15:break;case 1:if((r&1024)!==0&&n!==null){i=void 0,r=n.memoizedProps,n=n.memoizedState;var u=t.stateNode;try{var b=ca(t.type,r);i=u.getSnapshotBeforeUpdate(b,n),u.__reactInternalSnapshotBeforeUpdate=i}catch(S){we(t,t.return,S)}}break;case 3:if((r&1024)!==0){if(n=t.stateNode.containerInfo,i=n.nodeType,i===9)Cf(n);else if(i===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":Cf(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:i&&n!==null&&(i=Pi(n.memoizedProps,n.stateNode),r=t.memoizedProps,r=qi(r.default,r.update),r!=="none"&&Za(n,i,r,n.memoizedState=[],!0));break;default:if((r&1024)!==0)throw Error(l(163))}if(n=t.sibling,n!==null){n.return=t.return,tt=n;break}tt=t.return}}function Ip(e,t,i){var n=i.flags;switch(i.tag){case 0:case 11:case 15:Oi(e,i),n&4&&ml(5,i);break;case 1:if(Oi(e,i),n&4)if(e=i.stateNode,t===null)try{e.componentDidMount()}catch(b){we(i,i.return,b)}else{var r=ca(i.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(r,t,e.__reactInternalSnapshotBeforeUpdate)}catch(b){we(i,i.return,b)}}n&64&&Ep(i),n&512&&Ei(i,i.return);break;case 3:if(Oi(e,i),n&64&&(e=i.updateQueue,e!==null)){if(t=null,i.child!==null)switch(i.child.tag){case 27:case 5:t=i.child.stateNode;break;case 1:t=i.child.stateNode}try{pm(e,t)}catch(b){we(i,i.return,b)}}break;case 27:t===null&&n&4&&Dp(i);case 26:case 5:Oi(e,i),t===null&&n&4&&Fu(i),n&512&&Ei(i,i.return);break;case 12:Oi(e,i);break;case 31:Oi(e,i),n&4&&Pp(e,i);break;case 13:Oi(e,i),n&4&&qp(e,i),n&64&&(e=i.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(i=q1.bind(null,i),wb(e,i))));break;case 22:if(n=i.memoizedState!==null||et,!n){var u=t!==null&&t.memoizedState!==null||Se;t=et,r=Se,et=n,(Se=u)&&!r?(n=2,(i.subtreeFlags&8772)!==0&&(n|=1),mi(e,i,n)):Oi(e,i),et=t,Se=r}break;case 30:Oi(e,i),n&512&&Ei(i,i.return);break;case 7:n&512&&Ei(i,i.return);default:Oi(e,i)}}function Qu(e,t){for(e=e.child;e!==null;)Fp(e,t),e=e.sibling}function Fp(e,t){switch(e.tag){case 5:case 26:try{var i=e.stateNode;if(t){var n=i.style;typeof n.setProperty=="function"?n.setProperty("display","none","important"):n.display="none"}else{var r=e.stateNode,u=e.memoizedProps.style,b=u!=null&&u.hasOwnProperty("display")?u.display:null;r.style.display=b==null||typeof b=="boolean"?"":(""+b).trim()}}catch(R){we(e,e.return,R)}Wu(e,t);break;case 6:try{e.stateNode.nodeValue=t?"":e.memoizedProps,Te=!0}catch(R){we(e,e.return,R)}break;case 18:try{var S=e.stateNode;t?O0(S,!0):O0(e.stateNode,!1)}catch(R){we(e,e.return,R)}break;case 22:case 23:e.memoizedState===null&&Qu(e,t);break;default:Qu(e,t)}}function Wu(e,t){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){e:{var i=e,n=t;switch(i.tag){case 4:Fp(i,n);break e;case 22:i.memoizedState===null&&Wu(i,n);break e;default:Wu(i,n)}}e=e.sibling}}function Gp(e){var t=e.alternate;t!==null&&(e.alternate=null,Gp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&lr(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ue=null,Et=!1;function hi(e,t,i){for(i=i.child;i!==null;)Vp(e,t,i),i=i.sibling}function Vp(e,t,i){if(Bt&&typeof Bt.onCommitFiberUnmount=="function")try{Bt.onCommitFiberUnmount(Fs,i)}catch{}switch(i.tag){case 26:Se||ft(i,t),hi(e,t,i),i.memoizedState?i.memoizedState.count--:i.stateNode&&!Se&&(i=i.stateNode,i.parentNode.removeChild(i));break;case 27:Se||ft(i,t),pl(i);var n=Ue,r=Et;On(i.type)&&(Ue=i.stateNode,Et=!1),hi(e,t,i),k0(i.stateNode,i.type,i.memoizedProps),Ue=n,Et=r;break;case 5:Se||ft(i,t),pl(i);case 6:if(i.tag===6&&pl(i),n=Ue,r=Et,Ue=null,hi(e,t,i),Ue=n,Et=r,Ue!==null)if(Et)try{(Ue.nodeType===9?Ue.body:Ue.nodeName==="HTML"?Ue.ownerDocument.body:Ue).removeChild(i.stateNode),Te=!0}catch(u){we(i,t,u)}else try{Ue.removeChild(i.stateNode),Te=!0}catch(u){we(i,t,u)}break;case 18:Ue!==null&&(Et?(e=Ue,D0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,i.stateNode),ms(e)):D0(Ue,i.stateNode));break;case 4:n=Ue,r=Et,Ue=i.stateNode.containerInfo,Et=!0,hi(e,t,i),Ue=n,Et=r;break;case 0:case 11:case 14:case 15:wn(2,i,t),Se||wn(4,i,t),hi(e,t,i);break;case 1:Se||(ft(i,t),n=i.stateNode,typeof n.componentWillUnmount=="function"&&Mp(i,t,n)),hi(e,t,i);break;case 21:hi(e,t,i);break;case 22:Se=(n=Se)||i.memoizedState!==null,hi(e,t,i),Se=n;break;case 30:ft(i,t),hi(e,t,i);break;case 7:Se||ft(i,t),hi(e,t,i);break;default:hi(e,t,i)}}function Pp(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{ms(e)}catch(i){we(t,t.return,i)}}}function qp(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{ms(e)}catch(i){we(t,t.return,i)}}function N1(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Hp),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Hp),t;default:throw Error(l(435,e.tag))}}function io(e,t){var i=N1(e);t.forEach(function(n){if(!i.has(n)){i.add(n);var r=j1.bind(null,e,n);n.then(r,r)}})}function bt(e,t,i){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var u=n[r],b=e,S=t,R=S;e:for(;R!==null;){switch(R.tag){case 27:if(On(R.type)){Ue=R.stateNode,Et=!1;break e}break;case 5:Ue=R.stateNode,Et=!1;break e;case 3:case 4:Ue=R.stateNode.containerInfo,Et=!0;break e}R=R.return}if(Ue===null)throw Error(l(160));Vp(b,S,u),Ue=null,Et=!1,b=u.alternate,b!==null&&(b.return=null),u.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)jp(t,e,i),t=t.sibling}var di=null;function jp(e,t,i){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(r&4&&(n=e.updateQueue,n=n!==null?n.events:null,n!==null))for(var u=0;u<n.length;u++){var b=n[u];b.ref.impl=b.nextImpl}bt(t,e,i),Tt(e),r&4&&(wn(3,e,e.return),ml(3,e),wn(5,e,e.return));break;case 1:bt(t,e,i),Tt(e),r&512&&(Se||n===null||ft(n,n.return)),r&64&&et&&(e=e.updateQueue,e!==null&&(t=e.callbacks,t!==null&&(i=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=i===null?t:i.concat(t))));break;case 26:if(u=di,bt(t,e,i),Tt(e),r&512&&(Se||n===null||ft(n,n.return)),r&4)if(r=n!==null?n.memoizedState:null,i=e.memoizedState,n===null)if(i===null)if(e.stateNode===null)if(et)e.stateNode=M0(e.type,e.memoizedProps,t.containerInfo,e);else{e:{t=e.type,i=e.memoizedProps,r=u.ownerDocument||u;t:switch(t){case"title":n=r.getElementsByTagName("title")[0],(!n||n[Ps]||n[rt]||n.namespaceURI==="http://www.w3.org/2000/svg"||n.hasAttribute("itemprop"))&&(n=r.createElement(t),r.head.insertBefore(n,r.querySelector("head > title"))),ht(n,t,i),n[rt]=e,Je(n),t=n;break e;case"link":if(u=W0("link","href",r).get(t+(i.href||""))){for(b=0;b<u.length;b++)if(n=u[b],n.getAttribute("href")===(i.href==null||i.href===""?null:i.href)&&n.getAttribute("rel")===(i.rel==null?null:i.rel)&&n.getAttribute("title")===(i.title==null?null:i.title)&&n.getAttribute("crossorigin")===(i.crossOrigin==null?null:i.crossOrigin)){u.splice(b,1);break t}}n=r.createElement(t),ht(n,t,i),r.head.appendChild(n);break;case"meta":if(u=W0("meta","content",r).get(t+(i.content||""))){for(b=0;b<u.length;b++)if(n=u[b],n.getAttribute("content")===(i.content==null?null:""+i.content)&&n.getAttribute("name")===(i.name==null?null:i.name)&&n.getAttribute("property")===(i.property==null?null:i.property)&&n.getAttribute("http-equiv")===(i.httpEquiv==null?null:i.httpEquiv)&&n.getAttribute("charset")===(i.charSet==null?null:i.charSet)){u.splice(b,1);break t}}n=r.createElement(t),ht(n,t,i),r.head.appendChild(n);break;default:throw Error(l(468,t))}n[rt]=e,Je(n),t=n}e.stateNode=t}else et||Uf(u,e.type,e.stateNode);else e.stateNode=Q0(u,i,e.memoizedProps);else r!==i?(r===null?(t=n.stateNode,t===null||Se||t.parentNode.removeChild(t)):r.count--,i===null?et||Uf(u,e.type,e.stateNode):Q0(u,i,e.memoizedProps)):i===null&&e.stateNode!==null&&Gu(e,e.memoizedProps,n.memoizedProps);break;case 27:bt(t,e,i),Tt(e),r&512&&(Se||n===null||ft(n,n.return)),n!==null&&r&4&&Gu(e,e.memoizedProps,n.memoizedProps);break;case 5:if(u=Ci,Ci=!1,bt(t,e,i),Ci=u,Tt(e),r&512&&(Se||n===null||ft(n,n.return)),e.flags&32){t=e.stateNode;try{Oa(t,""),Te=!0}catch(F){we(e,e.return,F)}}r&4&&e.stateNode!=null&&(t=e.memoizedProps,Gu(e,t,n!==null?n.memoizedProps:t)),r&1024&&(Ku=!0);break;case 6:if(bt(t,e,i),Tt(e),r&4){if(e.stateNode===null)throw Error(l(162));t=e.memoizedProps,i=e.stateNode;try{i.nodeValue=t,Te=!0}catch(F){we(e,e.return,F)}}break;case 3:if(Te=!1,yo=null,u=di,di=Al(t.containerInfo),bt(t,e,i),di=u,Tt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ms(t.containerInfo)}catch(F){we(e,e.return,F)}Ku&&(Ku=!1,kp(e)),Te=!1;break;case 4:r=Ci,Ci=et,n=fd(),u=di,di=Al(e.stateNode.containerInfo),bt(t,e,i),Tt(e),di=u,Te&&gl&&(eo=!0),Te=n,Ci=r;break;case 12:bt(t,e,i),Tt(e);break;case 31:bt(t,e,i),Tt(e),r&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,io(e,t)));break;case 13:bt(t,e,i),Tt(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(so=Lt()),r&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,io(e,t)));break;case 22:u=e.memoizedState!==null,b=n!==null&&n.memoizedState!==null;var S=et,R=Se,B=Ci;et=S||u,Ci=B||u,Se=R||b,bt(t,e,i),Se=R,Ci=B,et=S,Tt(e),r&8192&&(t=e.stateNode,t._visibility=u?t._visibility&-2:t._visibility|1,!u||n===null||b||et||Se||(t=b||Se,i=et,n=Se,et=u||et,Se=t,An(e,2),et=i,Se=n),!u&&Ci||Qu(e,u)),r&4&&(t=e.updateQueue,t!==null&&(i=t.retryQueue,i!==null&&(t.retryQueue=null,io(e,i))));break;case 19:bt(t,e,i),Tt(e),r&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,io(e,t)));break;case 30:r&512&&(Se||n===null||ft(n,n.return)),r=fd(),u=gl,b=(i&335544064)===i,S=e.memoizedProps,gl=b&&qi(S.default,S.update)!=="none",bt(t,e,i),Tt(e),b&&n!==null&&Te&&(e.flags|=4),gl=u,Te=r;break;case 21:break;case 7:r&512&&(Se||n===null||ft(n,n.return)),n&&n.stateNode!==null&&(n.stateNode._fragmentFiber=e);default:bt(t,e,i),Tt(e)}}function Tt(e){var t=e.flags;if(t&2){try{for(var i,n=e.return;n!==null;){if(Cp(n)){i=n;break}n=n.return}n=null;for(var r=e.return;r!==null;){if(Iu(r)){var u=r.stateNode;n===null?n=[u]:n.push(u)}if(Hu(r))break;r=r.return}var b=n;if(i==null)throw Error(l(160));switch(i.tag){case 27:var S=i.stateNode,R=Vu(e);Qr(e,R,S,b);break;case 5:var B=i.stateNode;i.flags&32&&(Oa(B,""),i.flags&=-33);var F=Vu(e);Qr(e,F,B,b);break;case 3:case 4:var k=i.stateNode.containerInfo,z=Vu(e);Pu(e,z,k,b);break;default:throw Error(l(161))}}catch(I){we(e,e.return,I)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function kp(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;kp(t),t.tag===5&&t.flags&1024&&(t=t.stateNode,ds=!0,t.reset(),ds=!1),e=e.sibling}}function Qa(e,t){if(t.subtreeFlags&9270)for(t=t.child;t!==null;)Yp(t,e),t=t.sibling;else Up(t)}function Yp(e,t){var i=e.alternate;if(i===null)qu(e,!1);else switch(e.tag){case 3:if(Zu=Di=!1,Np(),Qa(t,e),!Di&&!eo){if(e=Mi,e!==null)for(var n=0;n<e.length;n+=3){i=e[n];var r=e[n+1];z0(i,e[n+2]),i=i.ownerDocument.documentElement,i!==null&&i.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+r+")"})}e=t.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===""&&(e.style.viewTransitionName="none",e.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),Zu=!0}Mi=null;break;case 5:Qa(t,e);break;case 4:n=Di,Di=!1,Qa(t,e),Di&&(eo=!0),Di=n;break;case 22:e.memoizedState===null&&(i.memoizedState!==null?qu(e,!1):Qa(t,e));break;case 30:n=Di,r=Np(),Di=!1,Qa(t,e),Di&&(e.flags|=4);var u=e.memoizedProps,b=e.stateNode;t=Pi(u,b),b=Pi(i.memoizedProps,b);var S=qi(u.default,u.update);S==="none"?t=!1:(u=i.memoizedState,i.memoizedState=null,i=e.child,At=0,t=Xu(e,i,t,b,S,u,!0),At!==(u===null?0:u.length)&&(e.flags|=32)),(e.flags&4)!==0&&t?(ns(e,e.memoizedProps.onUpdate),Mi=r):r!==null&&(r.push.apply(r,Mi),Mi=r),Di=(e.flags&32)!==0?!0:n;break;default:Qa(t,e)}}function Oi(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Ip(e,t.alternate,t),t=t.sibling}function An(e,t){for(e=e.child;e!==null;){var i=e,n=t;switch(i.tag){case 0:case 11:case 14:case 15:wn(4,i,i.return),An(i,n);break;case 1:ft(i,i.return);var r=i.stateNode;typeof r.componentWillUnmount=="function"&&Mp(i,i.return,r),An(i,n);break;case 27:(n&2)!==0&&k0(i.stateNode,i.type,i.memoizedProps);case 5:ft(i,i.return),i.tag!==5&&i.tag!==27||pl(i),An(i,n);break;case 6:pl(i);break;case 26:ft(i,i.return),r=i.stateNode,i.memoizedState!==null||r===null||Se||r.parentNode.removeChild(r),An(i,n);break;case 22:i.memoizedState===null&&An(i,n);break;case 30:ft(i,i.return),An(i,n);break;case 7:ft(i,i.return);default:An(i,n)}e=e.sibling}}function mi(e,t,i){for(i=(t.subtreeFlags&8772)!==0?i:i&-2,t=t.child;t!==null;){var n=t.alternate,r=e,u=t,b=u.flags,S=(i&1)!==0;switch(u.tag){case 0:case 11:case 15:mi(r,u,i),ml(4,u);break;case 1:if(mi(r,u,i),n=u,r=n.stateNode,typeof r.componentDidMount=="function")try{r.componentDidMount()}catch(F){we(n,n.return,F)}if(n=u,r=n.updateQueue,r!==null){var R=n.stateNode;try{var B=r.shared.hiddenCallbacks;if(B!==null)for(r.shared.hiddenCallbacks=null,r=0;r<B.length;r++)mm(B[r],R)}catch(F){we(n,n.return,F)}}S&&b&64&&Ep(u),Ei(u,u.return);break;case 27:(i&2)!==0&&Dp(u);case 5:u.tag!==5&&u.tag!==27||Rp(u),mi(r,u,i),S&&n===null&&b&4&&Fu(u),Ei(u,u.return);break;case 6:Rp(u);break;case 26:R=u.stateNode,u.memoizedState!==null||R===null||et||Uf(Al(R.ownerDocument),u.type,R),mi(r,u,i),S&&n===null&&b&4&&Fu(u),Ei(u,u.return);break;case 12:mi(r,u,i);break;case 31:mi(r,u,i),S&&b&4&&Pp(r,u);break;case 13:mi(r,u,i),S&&b&4&&qp(r,u);break;case 22:u.memoizedState===null&&mi(r,u,i),Ei(u,u.return);break;case 30:mi(r,u,i),Ei(u,u.return);break;case 7:Ei(u,u.return);default:mi(r,u,i)}t=t.sibling}}function Ju(e,t){var i=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(i=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==i&&(e!=null&&e.refCount++,i!=null&&tl(i))}function $u(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&tl(e))}function ti(e,t,i,n){var r=(i&335544064)===i;if(t.subtreeFlags&(r?10262:10256))for(t=t.child;t!==null;)Xp(e,t,i,n),t=t.sibling;else r&&Bp(t)}function Xp(e,t,i,n){var r=(i&335544064)===i;r&&t.alternate===null&&t.return!==null&&t.return.alternate!==null&&$r(t);var u=t.flags;switch(t.tag){case 0:case 11:case 15:ti(e,t,i,n),u&2048&&ml(9,t);break;case 1:ti(e,t,i,n);break;case 3:ti(e,t,i,n),r&&Zu&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,e.style.viewTransitionName==="root"&&(e.style.viewTransitionName=""),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName==="none"&&(e.style.viewTransitionName="")),u&2048&&(u=null,t.alternate!==null&&(u=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==u&&(t.refCount++,u!=null&&tl(u)));break;case 12:if(u&2048){ti(e,t,i,n),u=t.stateNode;try{var b=t.memoizedProps,S=b.id,R=b.onPostCommit;typeof R=="function"&&R(S,t.alternate===null?"mount":"update",u.passiveEffectDuration,-0)}catch(B){we(t,t.return,B)}}else ti(e,t,i,n);break;case 31:ti(e,t,i,n);break;case 13:ti(e,t,i,n);break;case 23:break;case 22:b=t.stateNode,S=t.alternate,t.memoizedState!==null?(r&&S!==null&&S.memoizedState===null&&$r(S),b._visibility&2?ti(e,t,i,n):vl(e,t)):(r&&S!==null&&S.memoizedState!==null&&$r(t),b._visibility&2?ti(e,t,i,n):(b._visibility|=2,Wa(e,t,i,n,(t.subtreeFlags&10256)!==0||!1))),u&2048&&Ju(S,t);break;case 24:ti(e,t,i,n),u&2048&&$u(t.alternate,t);break;case 30:r&&(u=t.alternate,u!==null&&(Ri(u.child,!0),Ri(t.child,!0))),ti(e,t,i,n);break;default:ti(e,t,i,n)}}function Wa(e,t,i,n,r){for(r=r&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var u=e,b=t,S=i,R=n,B=b.flags;switch(b.tag){case 0:case 11:case 15:Wa(u,b,S,R,r),ml(8,b);break;case 23:break;case 22:var F=b.stateNode;b.memoizedState!==null?F._visibility&2?Wa(u,b,S,R,r):vl(u,b):(F._visibility|=2,Wa(u,b,S,R,r)),r&&B&2048&&Ju(b.alternate,b);break;case 24:Wa(u,b,S,R,r),r&&B&2048&&$u(b.alternate,b);break;default:Wa(u,b,S,R,r)}t=t.sibling}}function vl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var i=e,n=t,r=n.flags;switch(n.tag){case 22:vl(i,n),r&2048&&Ju(n.alternate,n);break;case 24:vl(i,n),r&2048&&$u(n.alternate,n);break;default:vl(i,n)}t=t.sibling}}var ua=8192;function fa(e,t,i){if(e.subtreeFlags&ua)for(e=e.child;e!==null;)Kp(e,t,i),e=e.sibling}function Kp(e,t,i){switch(e.tag){case 26:fa(e,t,i),e.flags&ua&&(e.memoizedState!==null?Ib(i,di,e.memoizedState,e.memoizedProps):(e=e.stateNode,(t&335544128)===t&&tg(i,e)));break;case 5:fa(e,t,i),e.flags&ua&&(e=e.stateNode,(t&335544128)===t&&tg(i,e));break;case 3:case 4:var n=di;di=Al(e.stateNode.containerInfo),fa(e,t,i),di=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=ua,ua=16777216,fa(e,t,i),ua=n):fa(e,t,i));break;case 30:if((e.flags&ua)!==0&&(n=e.memoizedProps.name,n!=null&&n!=="auto")){var r=e.stateNode;r.paired=null,Gt===null&&(Gt=new Map),Gt.set(n,r)}fa(e,t,i);break;default:fa(e,t,i)}}function Zp(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function yl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var i=0;i<t.length;i++){var n=t[i];tt=n,Wp(n,e)}Zp(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Qp(e),e=e.sibling}function Qp(e){switch(e.tag){case 0:case 11:case 15:yl(e),e.flags&2048&&wn(9,e,e.return);break;case 3:yl(e);break;case 12:yl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,no(e)):yl(e);break;default:yl(e)}}function no(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var i=0;i<t.length;i++){var n=t[i];tt=n,Wp(n,e)}Zp(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:wn(8,t,t.return),no(t);break;case 22:i=t.stateNode,i._visibility&2&&(i._visibility&=-3,no(t));break;default:no(t)}e=e.sibling}}function Wp(e,t){for(;tt!==null;){var i=tt;switch(i.tag){case 0:case 11:case 15:wn(8,i,t);break;case 23:case 22:if(i.memoizedState!==null&&i.memoizedState.cachePool!==null){var n=i.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:tl(i.memoizedState.cache)}if(n=i.child,n!==null)n.return=i,tt=n;else e:for(i=e;tt!==null;){n=tt;var r=n.sibling,u=n.return;if(Gp(n),n===i){tt=null;break e}if(r!==null){r.return=u,tt=r;break e}tt=u}}}var z1={getCacheForType:function(e){var t=ot(je),i=t.data.get(e);return i===void 0&&(i=e(),t.data.set(e,i)),i},cacheSignal:function(){return ot(je).controller.signal}},L1=typeof WeakMap=="function"?WeakMap:Map,xe=0,De=null,me=null,ve=0,_e=0,Vt=null,En=!1,Ja=!1,ef=!1,Ji=0,Ge=0,Mn=0,ha=0,ao=0,Pt=0,$a=0,bl=null,Mt=null,tf=!1,so=0,Jp=0,lo=1/0,ro=null,Rn=null,Ie=0,pi=null,da=null,Ni=0,nf=0,af=null,$p=null,es=null,ts=null,is=null,Tl=0,oo=null;function qt(){return(xe&2)!==0&&ve!==0?ve&-ve:J.T!==null?mf():id()}function e0(){if(Pt===0)if((ve&536870912)===0||he){var e=ir;ir<<=1,(ir&3932160)===0&&(ir=262144),Pt=e}else Pt=536870912;return e=ct.current,e!==null&&(e.flags|=32),Pt}function ns(e,t){if(t!=null){var i=e.stateNode,n=i.ref;n===null&&(n=i.ref=L0(Pi(e.memoizedProps,i))),ts===null&&(ts=[]),ts.push(t.bind(null,n))}}function Rt(e,t,i){(e===De&&(_e===2||_e===9)||e.cancelPendingCommit!==null)&&(as(e,0),Cn(e,ve,Pt,!1)),Vs(e,i),((xe&2)===0||e!==De)&&(e===De&&((xe&2)===0&&(ha|=i),Ge===4&&Cn(e,ve,Pt,!1)),zi(e))}function t0(e,t,i){if((xe&6)!==0)throw Error(l(327));var n=!i&&(t&127)===0&&(t&e.expiredLanes)===0||Gs(e,t),r=n?H1(e,t):lf(e,t,!0),u=n;do{if(r===0){Ja&&!n&&Cn(e,t,0,!1);break}else{if(i=e.current.alternate,u&&!B1(i)){r=lf(e,t,!1),u=!1;continue}if(r===2){if(u=t,e.errorRecoveryDisabledLanes&u)var b=0;else b=e.pendingLanes&-536870913,b=b!==0?b:b&536870912?536870912:0;if(b!==0){t=b;e:{var S=e;r=bl;var R=S.current.memoizedState.isDehydrated;if(R&&(as(S,b).flags|=256),b=lf(S,b,!1),b!==2&&b!==6){if(ef&&!R){S.errorRecoveryDisabledLanes|=u,ha|=u,r=4;break e}u=Mt,Mt=r,u!==null&&(Mt===null?Mt=u:Mt.push.apply(Mt,u))}r=b}if(u=!1,r!==2)continue}}if(r===1){as(e,0),Cn(e,t,0,!0);break}e:{switch(n=e,u=r,u){case 0:case 1:throw Error(l(345));case 4:if((t&4194048)!==t&&(t&62914560)!==t)break;case 6:Cn(n,t,Pt,!En);break e;case 2:Mt=null;break;case 3:case 5:break;default:throw Error(l(329))}if((t&62914560)===t&&(r=so+300-Lt(),10<r)){if(Cn(n,t,Pt,!En),ar(n,0,!0)!==0)break e;Ni=t,n.timeoutHandle=Af(i0.bind(null,n,i,Mt,ro,tf,t,Pt,ha,$a,En,u,"Throttled",-0,0),r);break e}i0(n,i,Mt,ro,tf,t,Pt,ha,$a,En,u,null,-0,0)}}break}while(!0);zi(e)}function i0(e,t,i,n,r,u,b,S,R,B,F,k,z,I){e.timeoutHandle=-1;var $=t.subtreeFlags,te=(u&335544064)===u;if(k=null,(te||$&8192||($&16785408)===16785408)&&(k={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:_i},Gt=null,Kp(t,u,k),te&&($=k,te=e.containerInfo,te=(te.nodeType===9?te:te.ownerDocument).__reactViewTransition,te!=null&&($.count++,$.waitingForViewTransition=!0,$=Rl.bind($),te.finished.then($,$))),$=(u&62914560)===u?so-Lt():(u&4194048)===u?Jp-Lt():0,$=Fb(k,$),$!==null)){Ni=u,e.cancelPendingCommit=$(u0.bind(null,e,t,u,i,n,r,b,S,R,B,F,k,null,z,I)),Cn(e,u,b,!B);return}u0(e,t,u,i,n,r,b,S,R,B,F,k)}function B1(e){for(var t=e;;){var i=t.tag;if((i===0||i===11||i===15)&&t.flags&16384&&(i=t.updateQueue,i!==null&&(i=i.stores,i!==null)))for(var n=0;n<i.length;n++){var r=i[n],u=r.getSnapshot;r=r.value;try{if(!It(u(),r))return!1}catch{return!1}}if(i=t.child,t.subtreeFlags&16384&&i!==null)i.return=t,t=i;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Cn(e,t,i,n){t=Wh(e,t),t&=~ao,t&=~ha,e.suspendedLanes|=t,e.pingedLanes&=~t,n&&(e.warmLanes|=t),n=e.expirationTimes;for(var r=t;0<r;){var u=31-Ut(r),b=1<<u;n[u]=-1,r&=~b}i!==0&&$h(e,i,t)}function co(){return(xe&6)===0?(xl(0),!1):!0}function sf(){if(me!==null){if(_e===0)var e=me.return;else e=me,Yi=ea=null,hu(e),ja=null,al=0,e=me;for(;e!==null;)Ap(e.alternate,e),e=e.return;me=null}}function as(e,t){var i=e.timeoutHandle;return i!==-1&&(e.timeoutHandle=-1,sb(i)),i=e.cancelPendingCommit,i!==null&&(e.cancelPendingCommit=null,i()),Ni=0,sf(),De=e,me=i=ji(e.current,null),ve=t,_e=0,Vt=null,En=!1,Ja=Gs(e,t),ef=!1,$a=Pt=ao=ha=Mn=Ge=0,Mt=bl=null,tf=!1,Ji=Wh(e,t),vr(),i}function n0(e,t){ce=null,J.H=Pr,t===qa||t===Rr?(t=um(),_e=3):t===$c?(t=um(),_e=4):_e=t===Mu?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Vt=t,me===null&&(Ge=1,qr(e,Wt(t,e.current)))}function a0(){var e=ct.current;return e===null?!0:(ve&4194048)===ve?pt===null:(ve&62914560)===ve||(ve&536870912)!==0?e===pt:!1}function s0(){var e=J.H;return J.H=Pr,e===null?Pr:e}function l0(){var e=J.A;return J.A=z1,e}function uo(){Ge=4,En||(ve&4194048)!==ve&&ct.current!==null||(Ja=!0),(Mn&134217727)===0&&(ha&134217727)===0||De===null||Cn(De,ve,Pt,!1)}function lf(e,t,i){var n=xe;xe|=2;var r=s0(),u=l0();(De!==e||ve!==t)&&(ro=null,as(e,t)),t=!1;var b=Ge;e:do try{if(_e!==0&&me!==null){var S=me,R=Vt;switch(_e){case 8:sf(),b=6;break e;case 3:case 2:case 9:case 6:ct.current===null&&(t=!0);var B=_e;if(_e=0,Vt=null,ss(e,S,R,B),i&&Ja){b=0;break e}break;default:B=_e,_e=0,Vt=null,ss(e,S,R,B)}}U1(),b=Ge;break}catch(F){n0(e,F)}while(!0);return t&&e.shellSuspendCounter++,Yi=ea=null,xe=n,J.H=r,J.A=u,me===null&&(De=null,ve=0,vr()),b}function U1(){for(;me!==null;)r0(me)}function H1(e,t){var i=xe;xe|=2;var n=s0(),r=l0();De!==e||ve!==t?(ro=null,lo=Lt()+500,as(e,t)):Ja=Gs(e,t);e:do try{if(_e!==0&&me!==null){t=me;var u=Vt;t:switch(_e){case 1:_e=0,Vt=null,ss(e,t,u,1);break;case 2:case 9:if(om(u)){_e=0,Vt=null,o0(t);break}t=function(){_e!==2&&_e!==9||De!==e||(_e=7),zi(e)},u.then(t,t);break e;case 3:_e=7;break e;case 4:_e=5;break e;case 7:om(u)?(_e=0,Vt=null,o0(t)):(_e=0,Vt=null,ss(e,t,u,7));break;case 5:var b=null;switch(me.tag){case 26:b=me.memoizedState;case 5:case 27:var S=me;if(b?$0(b):S.stateNode.complete){_e=0,Vt=null;var R=S.sibling;if(R!==null)me=R;else{var B=S.return;B!==null?(me=B,fo(B)):me=null}break t}}_e=0,Vt=null,ss(e,t,u,5);break;case 6:_e=0,Vt=null,ss(e,t,u,6);break;case 8:sf(),Ge=6;break e;default:throw Error(l(462))}}I1();break}catch(F){n0(e,F)}while(!0);return Yi=ea=null,J.H=n,J.A=r,xe=i,me!==null?0:(De=null,ve=0,vr(),Ge)}function I1(){for(;me!==null&&!ty();)r0(me)}function r0(e){var t=_p(e.alternate,e,Ji);e.memoizedProps=e.pendingProps,t===null?fo(e):me=t}function o0(e){var t=e,i=t.alternate;switch(t.tag){case 15:case 0:t=gp(i,t,t.pendingProps,t.type,void 0,ve);break;case 11:t=gp(i,t,t.pendingProps,t.type.render,t.ref,ve);break;case 5:hu(t);var n=t;n===$e&&(he?(_r(n),n.tag===5&&n.stateNode!=null&&(ze=n.stateNode)):(_r(n),he=!0));default:Ap(i,t),t=me=Wd(t,Ji),t=_p(i,t,Ji)}e.memoizedProps=e.pendingProps,t===null?fo(e):me=t}function ss(e,t,i,n){Yi=ea=null,hu(t),ja=null,al=0;var r=t.return;try{if(A1(e,r,t,i,ve)){Ge=1,qr(e,Wt(i,e.current)),me=null;return}}catch(u){if(r!==null)throw me=r,u;Ge=1,qr(e,Wt(i,e.current)),me=null;return}t.flags&32768?(he||n===1?e=!0:Ja||(ve&536870912)!==0?e=!1:(En=e=!0,(n===2||n===9||n===3||n===6)&&(n=ct.current,n!==null&&n.tag===13&&(n.flags|=16384))),c0(t,e)):fo(t)}function fo(e){var t=e;do{if((t.flags&32768)!==0){c0(t,En);return}e=t.return;var i=C1(t.alternate,t,Ji);if(i!==null){me=i;return}if(t=t.sibling,t!==null){me=t;return}me=t=e}while(t!==null);Ge===0&&(Ge=5)}function c0(e,t){do{var i=D1(e.alternate,e);if(i!==null){i.flags&=32767,me=i;return}if(i=e.return,i!==null&&(i.flags|=32768,i.subtreeFlags=0,i.deletions=null),!t&&(e=e.sibling,e!==null)){me=e;return}me=e=i}while(e!==null);Ge=6,me=null}function u0(e,t,i,n,r,u,b,S,R,B,F,k){e.cancelPendingCommit=null;do ho();while(Ie!==0);if((xe&6)!==0)throw Error(l(327));if(t!==null){if(t===e.current)throw Error(l(177));e===De&&(me=De=null,ve=0),da=t,pi=e,Ni=i,af=r,$p=n,F1(e,t,i,b,S,R,k)}}function F1(e,t,i,n,r,u,b){var S=t.lanes|t.childLanes;if(nf=S,S|=Gc,fy(e,i,S,n,r,u),ts=null,(i&335544064)===i?(is=d1(e),n=10262):(is=null,n=10256),(t.subtreeFlags&n)!==0||(t.flags&n)!==0?(e.callbackNode=null,e.callbackPriority=0,k1(er,function(){return uf(),null})):(e.callbackNode=null,e.callbackPriority=0),Wr=!1,n=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||n){n=J.T,J.T=null,r=fe.p,fe.p=2,u=xe,xe|=4;try{O1(e,t,i)}finally{xe=u,fe.p=r,J.T=n}}Ie=1,Wr?es=fb(b,e.containerInfo,is,rf,of,V1,cf,uf,G1):(rf(),of(),cf())}function G1(e){if(Ie!==0){var t=pi.onRecoverableError;t(e,{componentStack:null})}}function V1(){Ie===3&&(Ie=0,Yp(da,pi),Ie=4)}function rf(){if(Ie===1){Ie=0;var e=pi,t=da,i=Ni,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=J.T,J.T=null;var r=fe.p;fe.p=2;var u=xe;xe|=4;try{gl=eo=!1,jp(t,e,i),i=Sf;var b=Vd(e.containerInfo),S=i.focusedElem,R=i.selectionRange;if(b!==S&&S&&S.ownerDocument&&Gd(S.ownerDocument.documentElement,S)){if(R!==null&&Bc(S)){var B=R.start,F=R.end;if(F===void 0&&(F=B),"selectionStart"in S)S.selectionStart=B,S.selectionEnd=Math.min(F,S.value.length);else{var k=S.ownerDocument||document,z=k&&k.defaultView||window;if(z.getSelection){var I=z.getSelection(),$=S.textContent.length,te=Math.min(R.start,$),ue=R.end===void 0?te:Math.min(R.end,$);!I.extend&&te>ue&&(b=ue,ue=te,te=b);var L=Fd(S,te),O=Fd(S,ue);if(L&&O&&(I.rangeCount!==1||I.anchorNode!==L.node||I.anchorOffset!==L.offset||I.focusNode!==O.node||I.focusOffset!==O.offset)){var H=k.createRange();H.setStart(L.node,L.offset),I.removeAllRanges(),te>ue?(I.addRange(H),I.extend(O.node,O.offset)):(H.setEnd(O.node,O.offset),I.addRange(H))}}}}for(k=[],I=S;I=I.parentNode;)I.nodeType===1&&k.push({element:I,left:I.scrollLeft,top:I.scrollTop});for(typeof S.focus=="function"&&S.focus(),S=0;S<k.length;S++){var q=k[S];q.element.scrollLeft=q.left,q.element.scrollTop=q.top}}ds=!!xf,Sf=xf=null}finally{xe=u,fe.p=r,J.T=n}}e.current=t,Ie=2}}function of(){if(Ie===2){Ie=0;var e=pi,t=da,i=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||i){i=J.T,J.T=null;var n=fe.p;fe.p=2;var r=xe;xe|=4;try{Ip(e,t.alternate,t)}finally{xe=r,fe.p=n,J.T=i}}Ie=3}}function cf(){if(Ie===4||Ie===3){Ie=0;var e=es;es=null,iy();var t=pi,i=da,n=Ni,r=$p,u=(n&335544064)===n?10262:10256;if((i.subtreeFlags&u)!==0||(i.flags&u)!==0?Ie=5:(Ie=0,da=pi=null,f0(t,t.pendingLanes)),u=t.pendingLanes,u===0&&(Rn=null),vc(n),i=i.stateNode,Bt&&typeof Bt.onCommitFiberRoot=="function")try{Bt.onCommitFiberRoot(Fs,i,void 0,(i.current.flags&128)===128)}catch{}if(r!==null){i=J.T,u=fe.p,fe.p=2,J.T=null;try{for(var b=t.onRecoverableError,S=0;S<r.length;S++){var R=r[S];b(R.value,{componentStack:R.stack})}}finally{J.T=i,fe.p=u}}if(r=ts,b=is,is=null,r!==null&&(ts=null,b===null&&(b=[]),e!==null))for(R=0;R<r.length;R++)i=(0,r[R])(b),i!==void 0&&e.finished.finally(i);(Ni&3)!==0&&ho(),zi(t),u=t.pendingLanes,(n&261930)!==0&&(u&42)!==0?t===oo?Tl++:(Tl=0,oo=t):(Tl=0,oo=null),xl(0)}}function f0(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,tl(t)))}function ho(){return es!==null&&(es.skipTransition(),es=null),rf(),of(),cf(),uf()}function uf(){if(Ie!==5)return!1;var e=pi,t=nf;nf=0;var i=vc(Ni),n=J.T,r=fe.p;try{fe.p=32>i?32:i,J.T=null,i=af,af=null;var u=pi,b=Ni;if(Ie=0,da=pi=null,Ni=0,(xe&6)!==0)throw Error(l(331));var S=xe;if(xe|=4,Qp(u.current),Xp(u,u.current,b,i),xe=S,xl(0,!1),Bt&&typeof Bt.onPostCommitFiberRoot=="function")try{Bt.onPostCommitFiberRoot(Fs,u)}catch{}return!0}finally{fe.p=r,J.T=n,f0(e,t)}}function h0(e,t,i){t=Wt(i,t),t=Eu(e.stateNode,t,2),e=Tn(e,t,2),e!==null&&(Vs(e,2),zi(e))}function we(e,t,i){if(e.tag===3)h0(e,e,i);else for(;t!==null;){if(t.tag===3){h0(t,e,i);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Rn===null||!Rn.has(n))){e=Wt(i,e),i=op(2),n=Tn(t,i,2),n!==null&&(cp(i,n,t,e),Vs(n,2),zi(n));break}}t=t.return}}function ff(e,t,i){var n=e.pingCache;if(n===null){n=e.pingCache=new L1;var r=new Set;n.set(t,r)}else r=n.get(t),r===void 0&&(r=new Set,n.set(t,r));r.has(i)||(ef=!0,r.add(i),e=P1.bind(null,e,t,i),t.then(e,e))}function P1(e,t,i){var n=e.pingCache;n!==null&&n.delete(t),e.pingedLanes|=e.suspendedLanes&i,e.warmLanes&=~i,De===e&&(ve&i)===i&&((Ge===4||Ge===3&&(ve&62914560)===ve&&300>Lt()-so)&&(xe&2)===0?as(e,0):ao|=i,$a===ve&&($a=0)),zi(e)}function d0(e,t){t===0&&(t=Jh()),e=Wn(e,t),e!==null&&(Vs(e,t),zi(e))}function q1(e){var t=e.memoizedState,i=0;t!==null&&(i=t.retryLane),d0(e,i)}function j1(e,t){var i=0;switch(e.tag){case 31:case 13:var n=e.stateNode,r=e.memoizedState;r!==null&&(i=r.retryLane);break;case 19:n=e.stateNode;break;case 22:n=e.stateNode._retryCache;break;default:throw Error(l(314))}n!==null&&n.delete(t),d0(e,i)}function k1(e,t){return dc(e,t)}var ls=null,rs=null,hf=!1,mo=!1,df=!1,Dn=0;function zi(e){e!==rs&&e.next===null&&(rs===null?ls=rs=e:rs=rs.next=e),mo=!0,hf||(hf=!0,X1())}function xl(e,t){if(!df&&mo){df=!0;do for(var i=!1,n=ls;n!==null;){if(e!==0){var r=n.pendingLanes;if(r===0)var u=0;else{var b=n.suspendedLanes,S=n.pingedLanes;u=(1<<31-Ut(42|e)+1)-1,u&=r&~(b&~S),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(i=!0,v0(n,u))}else u=ve,u=ar(n,n===De?u:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),(u&3)===0||Gs(n,u)||(i=!0,v0(n,u));n=n.next}while(i);df=!1}}function Y1(){m0()}function m0(){mo=hf=!1;var e=0;Dn!==0&&ab()&&(e=Dn);for(var t=Lt(),i=null,n=ls;n!==null;){var r=n.next,u=p0(n,t);u===0?(n.next=null,i===null?ls=r:i.next=r,r===null&&(rs=i)):(i=n,(e!==0||(u&3)!==0)&&(mo=!0)),n=r}Ie!==0&&Ie!==5||xl(e),Dn!==0&&(Dn=0)}function p0(e,t){for(var i=e.suspendedLanes,n=e.pingedLanes,r=e.expirationTimes,u=e.pendingLanes&-62914561;0<u;){var b=31-Ut(u),S=1<<b,R=r[b];R===-1?((S&i)===0||(S&n)!==0)&&(r[b]=uy(S,t)):R<=t&&(e.expiredLanes|=S),u&=~S}if(t=De,i=ve,i=ar(e,e===t?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n=e.callbackNode,i===0||e===t&&(_e===2||_e===9)||e.cancelPendingCommit!==null)return n!==null&&n!==null&&mc(n),e.callbackNode=null,e.callbackPriority=0;if((i&3)===0||Gs(e,i)){if(t=i&-i,t===e.callbackPriority)return t;switch(n!==null&&mc(n),vc(i)){case 2:case 8:i=Zh;break;case 32:i=er;break;case 268435456:i=Qh;break;default:i=er}return n=g0.bind(null,e),i=dc(i,n),e.callbackPriority=t,e.callbackNode=i,t}return n!==null&&n!==null&&mc(n),e.callbackPriority=2,e.callbackNode=null,2}function g0(e,t){if(Ie!==0&&Ie!==5)return e.callbackNode=null,e.callbackPriority=0,null;var i=e.callbackNode;if(ho()&&e.callbackNode!==i)return null;var n=ve;return n=ar(e,e===De?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n===0?null:(t0(e,n,t),p0(e,Lt()),e.callbackNode!=null&&e.callbackNode===i?g0.bind(null,e):null)}function v0(e,t){if(ho())return null;t0(e,t,!0)}function X1(){lb(function(){(xe&6)!==0?dc(Kh,Y1):m0()})}function mf(){if(Dn===0){var e=na;e===0&&(e=tr,tr<<=1,(tr&261888)===0&&(tr=256)),Dn=e}return Dn}function y0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:cr(e)}function K1(e,t,i,n,r){if(t==="submit"&&i&&i.stateNode===r){var u=y0((r[_t]||null).action),b=n.submitter;b&&(t=(t=b[_t]||null)?y0(t.formAction):b.getAttribute("formAction"),t!==null&&(u=t,b=null));var S=new dr("action","action",null,n,r);e.push({event:S,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(Dn!==0){var R=new FormData(r,b);xu(i,{pending:!0,data:R,method:r.method,action:u},null,R)}}else typeof u=="function"&&(S.preventDefault(),R=new FormData(r,b),xu(i,{pending:!0,data:R,method:r.method,action:u},u,R))},currentTarget:r}]})}}for(var pf=0;pf<Fc.length;pf++){var gf=Fc[pf],Z1=gf.toLowerCase(),Q1=gf[0].toUpperCase()+gf.slice(1);fi(Z1,"on"+Q1)}fi(jd,"onAnimationEnd"),fi(kd,"onAnimationIteration"),fi(Yd,"onAnimationStart"),fi("dblclick","onDoubleClick"),fi("focusin","onFocus"),fi("focusout","onBlur"),fi(s1,"onTransitionRun"),fi(l1,"onTransitionStart"),fi(r1,"onTransitionCancel"),fi(Xd,"onTransitionEnd"),Ca("onMouseEnter",["mouseout","mouseover"]),Ca("onMouseLeave",["mouseout","mouseover"]),Ca("onPointerEnter",["pointerout","pointerover"]),Ca("onPointerLeave",["pointerout","pointerover"]),Kn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Kn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Kn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Kn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Kn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Kn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Sl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),W1=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Sl));function b0(e,t){t=(t&4)!==0;for(var i=0;i<e.length;i++){var n=e[i],r=n.event;n=n.listeners;e:{var u=void 0;if(t)for(var b=n.length-1;0<=b;b--){var S=n[b],R=S.instance,B=S.currentTarget;if(S=S.listener,R!==u&&r.isPropagationStopped())break e;u=S,r.currentTarget=B;try{u(r)}catch(F){gr(F)}r.currentTarget=null,u=R}else for(b=0;b<n.length;b++){if(S=n[b],R=S.instance,B=S.currentTarget,S=S.listener,R!==u&&r.isPropagationStopped())break e;u=S,r.currentTarget=B;try{u(r)}catch(F){gr(F)}r.currentTarget=null,u=R}}}}function pe(e,t){var i=t[ad];i===void 0&&(i=t[ad]=new Set);var n=e+"__bubble";i.has(n)||(T0(t,e,2,!1),i.add(n))}function vf(e,t,i){var n=0;t&&(n|=4),T0(i,e,n,t)}var po="_reactListening"+Math.random().toString(36).slice(2);function yf(e){if(!e[po]){e[po]=!0,rd.forEach(function(i){i!=="selectionchange"&&(W1.has(i)||vf(i,!1,e),vf(i,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[po]||(t[po]=!0,vf("selectionchange",!1,t))}}function T0(e,t,i,n){switch(cg(t)){case 2:var r=qb;break;case 8:r=jb;break;default:r=If}i=r.bind(null,t,i,e),r=void 0,!Ac||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(r=!0),n?r!==void 0?e.addEventListener(t,i,{capture:!0,passive:r}):e.addEventListener(t,i,!0):r!==void 0?e.addEventListener(t,i,{passive:r}):e.addEventListener(t,i,!1)}function bf(e,t,i,n,r){var u=n;if((t&1)===0&&(t&2)===0&&n!==null)e:for(;;){if(n===null)return;var b=n.tag;if(b===3||b===4){var S=n.stateNode.containerInfo;if(S===r)break;if(b===4)for(b=n.return;b!==null;){var R=b.tag;if((R===3||R===4)&&b.stateNode.containerInfo===r)return;b=b.return}for(;S!==null;){if(b=Xn(S),b===null)return;if(R=b.tag,R===5||R===6||R===26||R===27){n=u=b;continue e}S=S.parentNode}}n=n.return}Td(function(){var B=u,F=_c(i),k=[];e:{var z=Kd.get(e);if(z!==void 0){var I=dr,$=e;switch(e){case"keypress":if(fr(i)===0)break e;case"keydown":case"keyup":I=By;break;case"focusin":$="focus",I=Cc;break;case"focusout":$="blur",I=Cc;break;case"beforeblur":case"afterblur":I=Cc;break;case"click":if(i.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":I=_d;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":I=_y;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":I=Gy;break;case jd:case kd:case Yd:I=Ey;break;case Xd:I=Py;break;case"scroll":case"scrollend":I=xy;break;case"wheel":I=jy;break;case"copy":case"cut":case"paste":I=Ry;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":I=Ad;break;case"submit":I=Iy;break;case"toggle":case"beforetoggle":I=Yy}var te=(t&4)!==0,ue=!te&&(e==="scroll"||e==="scrollend"),L=te?z!==null?z+"Capture":null:z;te=[];for(var O=B,H;O!==null;){var q=O;if(H=q.stateNode,q=q.tag,q!==5&&q!==26&&q!==27||H===null||L===null||(q=js(O,L),q!=null&&te.push(_l(O,q,H))),ue)break;O=O.return}0<te.length&&(z=new I(z,$,null,i,F),k.push({event:z,listeners:te}))}}if((t&7)===0){e:{if(I=e==="mouseover"||e==="pointerover",z=e==="mouseout"||e==="pointerout",I&&i!==Sc&&($=i.relatedTarget||i.fromElement)&&(Xn($)||$[Ea]))break e;(z||I)&&($=F.window===F?F:(I=F.ownerDocument)?I.defaultView||I.parentWindow:window,z?(I=i.relatedTarget||i.toElement,z=B,I=I?Xn(I):null,I!==null&&(ue=f(I),te=I.tag,I!==ue||te!==5&&te!==27&&te!==6)&&(I=null)):(z=null,I=B),z!==I&&(te=_d,q="onMouseLeave",L="onMouseEnter",O="mouse",(e==="pointerout"||e==="pointerover")&&(te=Ad,q="onPointerLeave",L="onPointerEnter",O="pointer"),ue=z==null?$:qs(z),H=I==null?$:qs(I),$=new te(q,O+"leave",z,i,F),$.target=ue,$.relatedTarget=H,q=null,Xn(F)===B&&(te=new te(L,O+"enter",I,i,F),te.target=H,te.relatedTarget=ue,q=te),ue=q,te=z&&I?U(z,I,J1):null,z!==null&&x0(k,$,z,te,!1),I!==null&&ue!==null&&x0(k,ue,I,te,!0)))}e:{if(z=B?qs(B):window,I=z.nodeName&&z.nodeName.toLowerCase(),I==="select"||I==="input"&&z.type==="file")var ee=zd;else if(Od(z))if(Ld)ee=i1;else{ee=e1;var ye=$y}else I=z.nodeName,!I||I.toLowerCase()!=="input"||z.type!=="checkbox"&&z.type!=="radio"?B&&xc(B.elementType)&&(ee=zd):ee=t1;if(ee&&(ee=ee(e,B))){Nd(k,ee,i,F);break e}ye&&ye(e,z,B)}switch(ye=B?qs(B):window,e){case"focusin":(Od(ye)||ye.contentEditable==="true")&&(Ba=ye,Uc=B,Js=null);break;case"focusout":Js=Uc=Ba=null;break;case"mousedown":Hc=!0;break;case"contextmenu":case"mouseup":case"dragend":Hc=!1,Pd(k,i,F);break;case"selectionchange":if(a1)break;case"keydown":case"keyup":Pd(k,i,F)}var le;if(Oc)e:{switch(e){case"compositionstart":var re="onCompositionStart";break e;case"compositionend":re="onCompositionEnd";break e;case"compositionupdate":re="onCompositionUpdate";break e}re=void 0}else La?Cd(e,i)&&(re="onCompositionEnd"):e==="keydown"&&i.keyCode===229&&(re="onCompositionStart");re&&(Ed&&i.locale!=="ko"&&(La||re!=="onCompositionStart"?re==="onCompositionEnd"&&La&&(le=xd()):(fn=F,Ec="value"in fn?fn.value:fn.textContent,La=!0)),ye=go(B,re),0<ye.length&&(re=new wd(re,e,null,i,F),k.push({event:re,listeners:ye}),le?re.data=le:(le=Dd(i),le!==null&&(re.data=le)))),(le=Ky?Zy(e,i):Qy(e,i))&&(re=go(B,"onBeforeInput"),0<re.length&&(ye=new wd("onBeforeInput","beforeinput",null,i,F),k.push({event:ye,listeners:re}),ye.data=le)),K1(k,e,B,i,F)}b0(k,t)})}function _l(e,t,i){return{instance:e,listener:t,currentTarget:i}}function go(e,t){for(var i=t+"Capture",n=[];e!==null;){var r=e,u=r.stateNode;if(r=r.tag,r!==5&&r!==26&&r!==27||u===null||(r=js(e,i),r!=null&&n.unshift(_l(e,r,u)),r=js(e,t),r!=null&&n.push(_l(e,r,u))),e.tag===3)return n;e=e.return}return[]}function J1(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function x0(e,t,i,n,r){for(var u=t._reactName,b=[];i!==null&&i!==n;){var S=i,R=S.alternate,B=S.stateNode;if(S=S.tag,R!==null&&R===n)break;S!==5&&S!==26&&S!==27||B===null||(R=B,r?(B=js(i,u),B!=null&&b.unshift(_l(i,B,R))):r||(B=js(i,u),B!=null&&b.push(_l(i,B,R)))),i=i.return}b.length!==0&&e.push({event:t,listeners:b})}var $1=/\r\n?/g,eb=/\u0000|\uFFFD/g;function S0(e){return(typeof e=="string"?e:""+e).replace($1,`
`).replace(eb,"")}function _0(e,t){return t=S0(t),S0(e)===t}function Ae(e,t,i,n,r,u){switch(i){case"children":if(typeof n=="string")t==="body"||t==="textarea"&&n===""||Oa(e,n);else if(typeof n=="number"||typeof n=="bigint")t!=="body"&&Oa(e,""+n);else return;break;case"className":or(e,"class",n);break;case"tabIndex":or(e,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":or(e,i,n);break;case"style":yd(e,n,u);return;case"data":if(t!=="object"){or(e,"data",n);break}case"src":case"href":if(n===""&&(t!=="a"||i!=="href")){e.removeAttribute(i);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(i);break}n=cr(n),e.setAttribute(i,n);break;case"action":case"formAction":if(typeof n=="function"){e.setAttribute(i,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(i==="formAction"?(t!=="input"&&Ae(e,t,"name",r.name,r,null),Ae(e,t,"formEncType",r.formEncType,r,null),Ae(e,t,"formMethod",r.formMethod,r,null),Ae(e,t,"formTarget",r.formTarget,r,null)):(Ae(e,t,"encType",r.encType,r,null),Ae(e,t,"method",r.method,r,null),Ae(e,t,"target",r.target,r,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(i);break}n=cr(n),e.setAttribute(i,n);break;case"onClick":n!=null&&(e.onclick=_i);return;case"onScroll":n!=null&&pe("scroll",e);return;case"onScrollEnd":n!=null&&pe("scrollend",e);return;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(l(61));if(i=n.__html,i!=null){if(r.children!=null)throw Error(l(60));u?.__html!==i&&(e.innerHTML=i)}}break;case"multiple":e.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":e.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){e.removeAttribute("xlink:href");break}i=cr(n),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",i);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(i,n):e.removeAttribute(i);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(i,""):e.removeAttribute(i);break;case"capture":case"download":n===!0?e.setAttribute(i,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(i,n):e.removeAttribute(i);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?e.setAttribute(i,n):e.removeAttribute(i);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?e.removeAttribute(i):e.setAttribute(i,n);break;case"popover":pe("beforetoggle",e),pe("toggle",e),rr(e,"popover",n);break;case"xlinkActuate":Gi(e,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":Gi(e,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":Gi(e,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":Gi(e,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":Gi(e,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":Gi(e,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":Gi(e,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":Gi(e,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":Gi(e,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":rr(e,"is",n);break;case"innerText":case"textContent":return;default:if(!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")i=by.get(i)||i,rr(e,i,n);else return}Te=!0}function Tf(e,t,i,n,r,u){switch(i){case"style":yd(e,n,u);return;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(l(61));if(i=n.__html,i!=null){if(r.children!=null)throw Error(l(60));u?.__html!==i&&(e.innerHTML=i)}}break;case"children":if(typeof n=="string")Oa(e,n);else if(typeof n=="number"||typeof n=="bigint")Oa(e,""+n);else return;break;case"onScroll":n!=null&&pe("scroll",e);return;case"onScrollEnd":n!=null&&pe("scrollend",e);return;case"onClick":n!=null&&(e.onclick=_i);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!od.hasOwnProperty(i))e:{if(i[0]==="o"&&i[1]==="n"&&(r=i.endsWith("Capture"),u=i.slice(2,r?i.length-7:void 0),t=e[_t]||null,t=t!=null?t[i]:null,typeof t=="function"&&e.removeEventListener(u,t,r),typeof n=="function")){typeof t!="function"&&t!==null&&(i in e?e[i]=null:e.hasAttribute(i)&&e.removeAttribute(i)),e.addEventListener(u,n,r);break e}Te=!0,i in e?e[i]=n:n===!0?e.setAttribute(i,""):rr(e,i,n)}return}Te=!0}function ht(e,t,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":pe("error",e),pe("load",e);var n=!1,r=!1,u;for(u in i)if(i.hasOwnProperty(u)){var b=i[u];if(b!=null)switch(u){case"src":n=!0;break;case"srcSet":r=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(l(137,t));default:Ae(e,t,u,b,i,null)}}r&&Ae(e,t,"srcSet",i.srcSet,i,null),n&&Ae(e,t,"src",i.src,i,null);return;case"input":pe("invalid",e);var S=u=b=r=null,R=null,B=null;for(n in i)if(i.hasOwnProperty(n)){var F=i[n];if(F!=null)switch(n){case"name":r=F;break;case"type":b=F;break;case"checked":R=F;break;case"defaultChecked":B=F;break;case"value":u=F;break;case"defaultValue":S=F;break;case"children":case"dangerouslySetInnerHTML":if(F!=null)throw Error(l(137,t));break;default:Ae(e,t,n,F,i,null)}}md(e,u,S,R,B,b,r,!1);return;case"select":pe("invalid",e),n=b=u=null;for(r in i)if(i.hasOwnProperty(r)&&(S=i[r],S!=null))switch(r){case"value":u=S;break;case"defaultValue":b=S;break;case"multiple":n=S;default:Ae(e,t,r,S,i,null)}t=u,i=b,e.multiple=!!n,t!=null?Da(e,!!n,t,!1):i!=null&&Da(e,!!n,i,!0);return;case"textarea":pe("invalid",e),u=r=n=null;for(b in i)if(i.hasOwnProperty(b)&&(S=i[b],S!=null))switch(b){case"value":n=S;break;case"defaultValue":r=S;break;case"children":u=S;break;case"dangerouslySetInnerHTML":if(S!=null)throw Error(l(91));break;default:Ae(e,t,b,S,i,null)}gd(e,n,r,u);return;case"option":for(R in i)i.hasOwnProperty(R)&&(n=i[R],n!=null)&&(R==="selected"?e.selected=n&&typeof n!="function"&&typeof n!="symbol":Ae(e,t,R,n,i,null));return;case"dialog":pe("beforetoggle",e),pe("toggle",e),pe("cancel",e),pe("close",e);break;case"iframe":case"object":pe("load",e);break;case"video":case"audio":for(n=0;n<Sl.length;n++)pe(Sl[n],e);break;case"image":pe("error",e),pe("load",e);break;case"details":pe("toggle",e);break;case"embed":case"source":case"link":pe("error",e),pe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(B in i)if(i.hasOwnProperty(B)&&(n=i[B],n!=null))switch(B){case"children":case"dangerouslySetInnerHTML":throw Error(l(137,t));default:Ae(e,t,B,n,i,null)}return;default:if(xc(t)){for(F in i)i.hasOwnProperty(F)&&(n=i[F],n!==void 0&&Tf(e,t,F,n,i,void 0));return}}for(S in i)i.hasOwnProperty(S)&&(n=i[S],n!=null&&Ae(e,t,S,n,i,null))}var tb={};function ib(e,t,i,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var r=null,u=null,b=null,S=null,R=null,B=null,F=null;for(I in i){var k=i[I];if(i.hasOwnProperty(I)&&k!=null)switch(I){case"checked":break;case"value":break;case"defaultValue":R=k;default:n.hasOwnProperty(I)||Ae(e,t,I,null,n,k)}}for(var z in n){var I=n[z];if(k=i[z],n.hasOwnProperty(z)&&(I!=null||k!=null))switch(z){case"type":I!==k&&(Te=!0),u=I;break;case"name":I!==k&&(Te=!0),r=I;break;case"checked":I!==k&&(Te=!0),B=I;break;case"defaultChecked":I!==k&&(Te=!0),F=I;break;case"value":I!==k&&(Te=!0),b=I;break;case"defaultValue":I!==k&&(Te=!0),S=I;break;case"children":case"dangerouslySetInnerHTML":if(I!=null)throw Error(l(137,t));break;default:I!==k&&Ae(e,t,z,I,n,k)}}bc(e,b,S,R,B,F,u,r);return;case"select":I=b=S=z=null;for(u in i)if(R=i[u],i.hasOwnProperty(u)&&R!=null)switch(u){case"value":break;case"multiple":I=R;default:n.hasOwnProperty(u)||Ae(e,t,u,null,n,R)}for(r in n)if(u=n[r],R=i[r],n.hasOwnProperty(r)&&(u!=null||R!=null))switch(r){case"value":u!==R&&(Te=!0),z=u;break;case"defaultValue":u!==R&&(Te=!0),S=u;break;case"multiple":u!==R&&(Te=!0),b=u;default:u!==R&&Ae(e,t,r,u,n,R)}t=S,i=b,n=I,z!=null?Da(e,!!i,z,!1):!!n!=!!i&&(t!=null?Da(e,!!i,t,!0):Da(e,!!i,i?[]:"",!1));return;case"textarea":I=z=null;for(S in i)if(r=i[S],i.hasOwnProperty(S)&&r!=null&&!n.hasOwnProperty(S))switch(S){case"value":break;case"children":break;default:Ae(e,t,S,null,n,r)}for(b in n)if(r=n[b],u=i[b],n.hasOwnProperty(b)&&(r!=null||u!=null))switch(b){case"value":r!==u&&(Te=!0),z=r;break;case"defaultValue":r!==u&&(Te=!0),I=r;break;case"children":break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(l(91));break;default:r!==u&&Ae(e,t,b,r,n,u)}pd(e,z,I);return;case"option":for(var $ in i)z=i[$],i.hasOwnProperty($)&&z!=null&&!n.hasOwnProperty($)&&($==="selected"?e.selected=!1:Ae(e,t,$,null,n,z));for(R in n)z=n[R],I=i[R],n.hasOwnProperty(R)&&z!==I&&(z!=null||I!=null)&&(R==="selected"?(z!==I&&(Te=!0),e.selected=z&&typeof z!="function"&&typeof z!="symbol"):Ae(e,t,R,z,n,I));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var te in i)z=i[te],i.hasOwnProperty(te)&&z!=null&&!n.hasOwnProperty(te)&&Ae(e,t,te,null,n,z);for(B in n)if(z=n[B],I=i[B],n.hasOwnProperty(B)&&z!==I&&(z!=null||I!=null))switch(B){case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(l(137,t));break;default:Ae(e,t,B,z,n,I)}return;default:if(xc(t)){for(var ue in i)z=i[ue],i.hasOwnProperty(ue)&&z!==void 0&&!n.hasOwnProperty(ue)&&Tf(e,t,ue,void 0,n,z);for(F in n)z=n[F],I=i[F],!n.hasOwnProperty(F)||z===I||z===void 0&&I===void 0||Tf(e,t,F,z,n,I);return}}for(var L in i)z=i[L],i.hasOwnProperty(L)&&z!=null&&!n.hasOwnProperty(L)&&Ae(e,t,L,null,n,z);for(k in n)z=n[k],I=i[k],!n.hasOwnProperty(k)||z===I||z==null&&I==null||Ae(e,t,k,z,n,I)}function w0(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function nb(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,i=performance.getEntriesByType("resource"),n=0;n<i.length;n++){var r=i[n],u=r.transferSize,b=r.initiatorType,S=r.duration;if(u&&S&&w0(b)){for(b=0,S=r.responseEnd,n+=1;n<i.length;n++){var R=i[n],B=R.startTime;if(B>S)break;var F=R.transferSize,k=R.initiatorType;F&&w0(k)&&(R=R.responseEnd,b+=F*(R<S?1:(S-B)/(R-B)))}if(--n,t+=8*(u+b)/(r.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var xf=null,Sf=null;function wl(e){return e.nodeType===9?e:e.ownerDocument}function A0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function E0(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function M0(e,t,i,n){return i=wl(i).createElement(e),i[rt]=n,i[_t]=t,ht(i,e,t),Je(i),i}function _f(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var wf=null;function ab(){var e=window.event;return e&&e.type==="popstate"?e===wf?!1:(wf=e,!0):(wf=null,!1)}var Af=typeof setTimeout=="function"?setTimeout:void 0,sb=typeof clearTimeout=="function"?clearTimeout:void 0,R0=typeof Promise=="function"?Promise:void 0,C0=typeof requestAnimationFrame=="function"?requestAnimationFrame:Af,lb=typeof queueMicrotask=="function"?queueMicrotask:typeof R0<"u"?function(e){return R0.resolve(null).then(e).catch(rb)}:Af;function rb(e){setTimeout(function(){throw e})}function On(e){return e==="head"}function D0(e,t){var i=t,n=0;do{var r=i.nextSibling;if(e.removeChild(i),r&&r.nodeType===8)if(i=r.data,i==="/$"||i==="/&"){if(n===0){e.removeChild(r),ms(t);return}n--}else if(i==="$"||i==="$?"||i==="$~"||i==="$!"||i==="&")n++;else if(i==="html")zf(e.ownerDocument.documentElement);else if(i==="head"){i=e.ownerDocument.head,zf(i);for(var u=i.firstChild;u;){var b=u.nextSibling,S=u.nodeName;u[Ps]||S==="SCRIPT"||S==="STYLE"||S==="LINK"&&u.rel.toLowerCase()==="stylesheet"||i.removeChild(u),u=b}}else i==="body"&&zf(e.ownerDocument.body);i=r}while(i);ms(t)}function O0(e,t){var i=e;e=0;do{var n=i.nextSibling;if(i.nodeType===1?t?(i._stashedDisplay=i.style.display,i.style.display="none"):(i.style.display=i._stashedDisplay||"",i.getAttribute("style")===""&&i.removeAttribute("style")):i.nodeType===3&&(t?(i._stashedText=i.nodeValue,i.nodeValue=""):i.nodeValue=i._stashedText||""),n&&n.nodeType===8)if(i=n.data,i==="/$"){if(e===0)break;e--}else i!=="$"&&i!=="$?"&&i!=="$~"&&i!=="$!"||e++;i=n}while(i)}function N0(e,t,i){if(t=CSS.escape(t)!==t?"r-"+btoa(t).replace(/=/g,""):t,e.style.viewTransitionName=t,i!=null&&(e.style.viewTransitionClass=i),i=getComputedStyle(e),i.display==="inline"){if(t=e.getClientRects(),t.length===1)var n=1;else for(var r=n=0;r<t.length;r++){var u=t[r];0<u.width&&0<u.height&&n++}n===1&&(e=e.style,e.display=t.length===1?"inline-block":"block",e.marginTop="-"+i.paddingTop,e.marginBottom="-"+i.paddingBottom)}}function z0(e,t){e=e.style,t=t.style;var i=t!=null?t.hasOwnProperty("viewTransitionName")?t.viewTransitionName:t.hasOwnProperty("view-transition-name")?t["view-transition-name"]:null:null;e.viewTransitionName=i==null||typeof i=="boolean"?"":(""+i).trim(),i=t!=null?t.hasOwnProperty("viewTransitionClass")?t.viewTransitionClass:t.hasOwnProperty("view-transition-class")?t["view-transition-class"]:null:null,e.viewTransitionClass=i==null||typeof i=="boolean"?"":(""+i).trim(),e.display==="inline-block"&&(t==null?e.display=e.margin="":(i=t.display,e.display=i==null||typeof i=="boolean"?"":i,i=t.margin,i!=null?e.margin=i:(i=t.hasOwnProperty("marginTop")?t.marginTop:t["margin-top"],e.marginTop=i==null||typeof i=="boolean"?"":i,t=t.hasOwnProperty("marginBottom")?t.marginBottom:t["margin-bottom"],e.marginBottom=t==null||typeof t=="boolean"?"":t)))}function ob(e,t,i){return i=i.ownerDocument.defaultView,{rect:e,abs:t.position==="absolute"||t.position==="fixed",clip:t.clipPath!=="none"||t.overflow!=="visible"||t.filter!=="none"||t.mask!=="none"||t.mask!=="none"||t.borderRadius!=="0px",view:0<=e.bottom&&0<=e.right&&e.top<=i.innerHeight&&e.left<=i.innerWidth}}function Ef(e){var t=e.getBoundingClientRect(),i=getComputedStyle(e);return ob(t,i,e)}function cb(e){return e.documentElement.clientHeight}function ub(e){this.addEventListener("load",e),this.addEventListener("error",e)}function fb(e,t,i,n,r,u,b,S,R){var B=t.nodeType===9?t:t.ownerDocument;try{var F=B.startViewTransition({update:function(){var z=B.defaultView,I=z.navigation&&z.navigation.transition,$=B.fonts.status;n();var te=[];if($==="loaded"&&(cb(B),B.fonts.status==="loading"&&te.push(B.fonts.ready)),$=te.length,e!==null)for(var ue=e.suspenseyImages,L=0,O=0;O<ue.length;O++){var H=ue[O];if(!H.complete){var q=H.getBoundingClientRect();if(0<q.bottom&&0<q.right&&q.top<z.innerHeight&&q.left<z.innerWidth){if(L+=eg(H),L>bo){te.length=$;break}H=new Promise(ub.bind(H)),te.push(H)}}}if(0<te.length)return z=Promise.race([Promise.all(te),new Promise(function(ee){return setTimeout(ee,500)})]).then(r,r),(I?Promise.allSettled([I.finished,z]):z).then(u,u);if(r(),I)return I.finished.then(u,u);u()},types:i});B.__reactViewTransition=F;var k=[];return F.ready.then(function(){for(var z=B.documentElement.getAnimations({subtree:!0}),I=0;I<z.length;I++){var $=z[I],te=$.effect,ue=te.pseudoElement;if(ue!=null&&ue.startsWith("::view-transition")){k.push($),$=te.getKeyframes();for(var L=ue=void 0,O=!0,H=0;H<$.length;H++){var q=$[H],ee=q.width;if(ue===void 0)ue=ee;else if(ue!==ee){O=!1;break}if(ee=q.height,L===void 0)L=ee;else if(L!==ee){O=!1;break}delete q.width,delete q.height,q.transform==="none"&&delete q.transform}O&&ue!==void 0&&L!==void 0&&(te.setKeyframes($),O=getComputedStyle(te.target,te.pseudoElement),O.width!==ue||O.height!==L)&&(O=$[0],O.width=ue,O.height=L,O=$[$.length-1],O.width=ue,O.height=L,te.setKeyframes($))}}b()},function(z){B.__reactViewTransition===F&&(B.__reactViewTransition=null);try{typeof z=="object"&&z!==null&&z.name==="InvalidStateError"&&(z.message==="View transition was skipped because document visibility state is hidden."||z.message==="Skipping view transition because document visibility state has become hidden."||z.message==="Skipping view transition because viewport size changed."||z.message==="Transition was aborted because of invalid state")&&(z=null),z!==null&&R(z)}finally{n(),r(),b()}}),F.finished.finally(function(){for(var z=0;z<k.length;z++)k[z].cancel();B.__reactViewTransition===F&&(B.__reactViewTransition=null),S()}),F}catch{return n(),r(),b(),null}}function ma(e,t){this._scope=document.documentElement,this._selector="::view-transition-"+e+"("+t+")"}ma.prototype.animate=function(e,t){return t=typeof t=="number"?{duration:t}:N({},t),t.pseudoElement=this._selector,this._scope.animate(e,t)},ma.prototype.getAnimations=function(){for(var e=this._scope,t=this._selector,i=e.getAnimations({subtree:!0}),n=[],r=0;r<i.length;r++){var u=i[r].effect;u!==null&&u.target===e&&u.pseudoElement===t&&n.push(i[r])}return n},ma.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function L0(e){return{name:e,group:new ma("group",e),imagePair:new ma("image-pair",e),old:new ma("old",e),new:new ma("new",e)}}function jt(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}jt.prototype.addEventListener=function(e,t,i){var n=null,r=null;if(!(i!=null&&typeof i!="boolean"&&(n=i.signal||null,n!==null&&n.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var u=this._eventListeners;if(U0(u,e,t,i)===-1){var b=this,S=t;i!=null&&typeof i!="boolean"&&i.once===!0&&(S=function(R){b.removeEventListener(e,t,i),typeof t=="function"?t.call(this,R):t.handleEvent(R)}),n!==null&&(r=b.removeEventListener.bind(b,e,t,i),n.addEventListener("abort",r,{once:!0}),r=n.removeEventListener.bind(n,"abort",r)),n=os(i),u.push({type:e,listener:t,optionsOrUseCapture:i,attachedListener:S,cleanup:r}),v(this._fragmentFiber.child,!1,hb,e,S,n)}this._eventListeners=u}};function hb(e,t,i,n){return x(e).addEventListener(t,i,n),!1}jt.prototype.removeEventListener=function(e,t,i){var n=this._eventListeners;if(n!==null&&(t=U0(n,e,t,i),t!==-1)){var r=n[t];i=r.attachedListener;var u=r.cleanup;r=os(r.optionsOrUseCapture),v(this._fragmentFiber.child,!1,db,e,i,r),n.splice(t,1),u!==null&&u()}};function db(e,t,i,n){return x(e).removeEventListener(t,i,n),!1}function os(e){return e!=null&&typeof e!="boolean"&&(e.once===!0||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function B0(e){return e==null?"c=0":typeof e=="boolean"?"c="+(e?"1":"0"):"c="+(e.capture?"1":"0")}function U0(e,t,i,n){if(e.length===0)return-1;n=B0(n);for(var r=0;r<e.length;r++){var u=e[r];if(u.type===t&&u.listener===i&&B0(u.optionsOrUseCapture)===n)return r}return-1}jt.prototype.dispatchEvent=function(e){var t=g(this._fragmentFiber);if(t===null)return!0;t=x(t);var i=this._eventListeners;if(i!==null&&0<i.length||!e.bubbles){var n=t.nodeType===9?t.createComment(""):document.createTextNode("");if(i)for(var r=0;r<i.length;r++){var u=i[r];n.addEventListener(u.type,u.attachedListener,os(u.optionsOrUseCapture))}if(t.appendChild(n),e=n.dispatchEvent(e),i)for(r=0;r<i.length;r++)u=i[r],n.removeEventListener(u.type,u.attachedListener,os(u.optionsOrUseCapture));return t.removeChild(n),e}return t.dispatchEvent(e)},jt.prototype.focus=function(e){v(this._fragmentFiber.child,!0,H0,e,void 0,void 0)};function H0(e,t){return e.tag===6?!1:(e=x(e),Ab(e,t))}jt.prototype.focusLast=function(e){var t=[];v(this._fragmentFiber.child,!0,Mf,t,void 0,void 0);for(var i=t.length-1;0<=i&&!H0(t[i],e);i--);};function Mf(e,t){return t.push(e),!1}jt.prototype.blur=function(){var e=g(this._fragmentFiber);e!==null&&(e=x(e),e=wl(e).activeElement,e!==null&&v(this._fragmentFiber.child,!1,mb,e,void 0,void 0))};function mb(e,t){return e.tag===6?!1:(e=x(e),e===t||e.contains(t)?(t.blur(),!0):!1)}jt.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),v(this._fragmentFiber.child,!1,pb,e,void 0,void 0)};function pb(e,t){return e.tag===6||(e=x(e),t.observe(e)),!1}jt.prototype.unobserveUsing=function(e){var t=this._observers;if(t!==null&&t.has(e)){t.delete(e),v(this._fragmentFiber.child,!1,gb,e,void 0,void 0);for(var i=t=0;i<gi.length;i++){var n=gi[i];n.fragmentInstance===this&&n.observer===e?e.unobserve(n.instance):gi[t++]=n}gi.length=t}};function gb(e,t){return e.tag===6||(e=x(e),t.unobserve(e)),!1}var gi=[],Rf=!1;function vb(e,t,i){gi.push({fragmentInstance:e,observer:t,instance:i}),Rf||(Rf=!0,Eb(function(){Rf=!1;var n=gi;gi=[];for(var r=0;r<n.length;r++){var u=n[r];u.observer.unobserve(u.instance)}}))}jt.prototype.getClientRects=function(){var e=[];return v(this._fragmentFiber.child,!1,yb,e,void 0,void 0),e};function yb(e,t){if(e.tag===6){e=e.stateNode;var i=e.ownerDocument.createRange();i.selectNodeContents(e),t.push.apply(t,i.getClientRects())}else e=x(e),t.push.apply(t,e.getClientRects());return!1}jt.prototype.getRootNode=function(e){var t=g(this._fragmentFiber);return t===null?this:x(t).getRootNode(e)},jt.prototype.compareDocumentPosition=function(e){var t=g(this._fragmentFiber);if(t===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var i=[];v(this._fragmentFiber.child,!1,Mf,i,void 0,void 0);var n=x(t);if(i.length===0){if(i=n,T(this._fragmentFiber)){e:{for(t=this._fragmentFiber.return;t!==null;){if(t.tag===4){t=t.stateNode.containerInfo;break e}if(t.tag===3||t.tag===5||t.tag===27)break;t=t.return}t=null}t!=null&&(i=t)}t=this._fragmentFiber;var r=n=i.compareDocumentPosition(e);return i===e?r=Node.DOCUMENT_POSITION_CONTAINS:n&Node.DOCUMENT_POSITION_CONTAINED_BY&&(i=_(t)[1],i===null?r=Node.DOCUMENT_POSITION_PRECEDING:(e=x(i).compareDocumentPosition(e),r=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),r|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}t=x(i[0]),r=x(i[i.length-1]);var u=T(this._fragmentFiber)?t.parentElement:n;if(u==null)return Node.DOCUMENT_POSITION_DISCONNECTED;n=u.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY,u=u.compareDocumentPosition(r)&Node.DOCUMENT_POSITION_CONTAINED_BY;var b=t.compareDocumentPosition(e),S=r.compareDocumentPosition(e),R=b&Node.DOCUMENT_POSITION_CONTAINED_BY||S&Node.DOCUMENT_POSITION_CONTAINED_BY;return S=n&&u&&b&Node.DOCUMENT_POSITION_FOLLOWING&&S&Node.DOCUMENT_POSITION_PRECEDING,t=n&&t===e||u&&r===e||R||S?Node.DOCUMENT_POSITION_CONTAINED_BY:!n&&t===e||!u&&r===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:b,t&Node.DOCUMENT_POSITION_DISCONNECTED||t&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||bb(t,this._fragmentFiber,i[0],i[i.length-1],e)?t:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function bb(e,t,i,n,r){var u=Xn(r);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(i=!!u)e:{for(;u!==null;){if(u.tag===7&&(u===t||u.alternate===t)){i=!0;break e}u=u.return}i=!1}return i}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(u===null)return u=r.ownerDocument,r===u||r===u.documentElement||r===u.body;e:{for(u=t,t=g(t);u!==null;){if(!(u.tag!==5&&u.tag!==3&&u.tag!==27||u!==t&&u.alternate!==t)){u=!0;break e}u=u.return}u=!1}return u}return e&Node.DOCUMENT_POSITION_PRECEDING?((t=!!u)&&!(t=u===i)&&(t=U(i,u,D),t===null?t=!1:(v(t,!0,E,u,i),u=A,A=null,t=u!==null)),t):e&Node.DOCUMENT_POSITION_FOLLOWING?((t=!!u)&&!(t=u===n)&&(t=U(n,u,D),t===null?t=!1:(v(t,!0,C,u,n),u=A,M=A=null,t=u!==null)),t):!1}function I0(e,t){var i=e.ownerDocument.createRange();i.selectNodeContents(e),e=i.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,t?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}jt.prototype.scrollIntoView=function(e){if(typeof e=="object")throw Error(l(566));var t=[];v(this._fragmentFiber.child,!1,Mf,t,void 0,void 0);var i=e!==!1;if(t.length===0){var n=_(this._fragmentFiber);if(n=i?n[1]||n[0]||g(this._fragmentFiber):n[0]||n[1],n===null)return;if(n.tag===6){e=x(n),I0(e,i);return}if(n=x(n),n.nodeType!==9){if(n.nodeType===11){i="host"in n?n.host:null,i!==null&&i.scrollIntoView(e);return}n.scrollIntoView(e)}}for(n=i?t.length-1:0;n!==(i?-1:t.length);){var r=t[n];r.tag===6?(r=x(r),I0(r,i)):x(r).scrollIntoView(e),n+=i?-1:1}};function Tb(e,t){return e=x(e),F0(e,t),!1}function F0(e,t){e.reactFragments==null&&(e.reactFragments=new Set),e.reactFragments.add(t)}function G0(e,t){var i=t._eventListeners;if(i!==null)for(var n=0;n<i.length;n++){var r=i[n];e.addEventListener(r.type,r.attachedListener,os(r.optionsOrUseCapture))}e.nodeType!==3&&(i=t._observers,i!==null&&i.forEach(function(u){for(var b=0,S=0;S<gi.length;S++){var R=gi[S];(R.fragmentInstance!==t||R.observer!==u||R.instance!==e)&&(gi[b++]=R)}gi.length=b,u.observe(e)}),F0(e,t))}function xb(e,t){var i=t._eventListeners;if(i!==null)for(var n=0;n<i.length;n++){var r=i[n];e.removeEventListener(r.type,r.attachedListener,os(r.optionsOrUseCapture))}e.nodeType!==3&&(i=t._observers,i!==null&&i.forEach(function(u){typeof u.rootMargin=="string"?vb(t,u,e):u.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(t))}function Cf(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var i=t;switch(t=t.nextSibling,i.nodeName){case"HTML":case"HEAD":case"BODY":Cf(i),lr(i);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(i.rel.toLowerCase()==="stylesheet")continue}e.removeChild(i)}}function Sb(e,t,i,n){for(;e.nodeType===1;){var r=i;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!n&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(n){if(!e[Ps])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(u=e.getAttribute("rel"),u==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(u!==r.rel||e.getAttribute("href")!==(r.href==null||r.href===""?null:r.href)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin)||e.getAttribute("title")!==(r.title==null?null:r.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(u=e.getAttribute("src"),(u!==(r.src==null?null:r.src)||e.getAttribute("type")!==(r.type==null?null:r.type)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin))&&u&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var u=r.name==null?null:""+r.name;if(r.type==="hidden"&&e.getAttribute("name")===u)return e}else return e;if(e=ii(e.nextSibling),e===null)break}return null}function _b(e,t,i){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!i||(e=ii(e.nextSibling),e===null))return null;return e}function V0(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=ii(e.nextSibling),e===null))return null;return e}function Df(e){return e.data==="$?"||e.data==="$~"}function Of(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function wb(e,t){var i=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||i.readyState!=="loading")t();else{var n=function(){t(),i.removeEventListener("DOMContentLoaded",n)};i.addEventListener("DOMContentLoaded",n),e._reactRetry=n}}function ii(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Nf=null;function P0(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var i=e.data;if(i==="/$"||i==="/&"){if(t===0)return ii(e.nextSibling);t--}else i!=="$"&&i!=="$!"&&i!=="$?"&&i!=="$~"&&i!=="&"||t++}e=e.nextSibling}return null}function q0(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var i=e.data;if(i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"){if(t===0)return e;t--}else i!=="/$"&&i!=="/&"||t++}e=e.previousSibling}return null}function Ab(e,t){function i(){n=!0}if(e.ownerDocument.activeElement===e)return!0;var n=!1;try{e.ownerDocument.addEventListener("focus",i,!0),(e.focus||HTMLElement.prototype.focus).call(e,t)}finally{e.ownerDocument.removeEventListener("focus",i,!0)}return n}function Eb(e){C0(function(){C0(function(t){return e(t)})})}function j0(e,t,i){switch(t=wl(i),e){case"html":if(e=t.documentElement,!e)throw Error(l(452));return e;case"head":if(e=t.head,!e)throw Error(l(453));return e;case"body":if(e=t.body,!e)throw Error(l(454));return e;default:throw Error(l(451))}}function k0(e,t,i){for(var n in i){var r=i[n];i.hasOwnProperty(n)&&r!=null&&Ae(e,t,n,null,tb,r)}i.dangerouslySetInnerHTML!=null&&(e.textContent=""),e.onclick===_i&&(e.onclick=null),lr(e)}function zf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);lr(e)}var ni=new Map,Y0=new Set;function Al(e){if(typeof e.getRootNode=="function"){var t=e.getRootNode();if(t.nodeType===9||t.nodeType===11)return t}return e.nodeType===9?e:e.ownerDocument}var $i=fe.d;fe.d={f:Mb,r:Rb,D:Cb,C:Db,L:Ob,m:Nb,X:Lb,S:zb,M:Bb};function Mb(){var e=$i.f(),t=co();return e||t}function Rb(e){var t=Ma(e);t!==null&&t.tag===5&&t.type==="form"?Km(t):$i.r(e)}var cs=typeof document>"u"?null:document;function X0(e,t,i){var n=cs;if(n&&typeof t=="string"&&t){var r=Zt(t);r='link[rel="'+e+'"][href="'+r+'"]',typeof i=="string"&&(r+='[crossorigin="'+i+'"]'),Y0.has(r)||(Y0.add(r),e={rel:e,crossOrigin:i,href:t},n.querySelector(r)===null&&(t=n.createElement("link"),ht(t,"link",e),Je(t),n.head.appendChild(t)))}}function Cb(e){$i.D(e),X0("dns-prefetch",e,null)}function Db(e,t){$i.C(e,t),X0("preconnect",e,t)}function Ob(e,t,i){$i.L(e,t,i);var n=cs;if(n&&e&&t){var r='link[rel="preload"][as="'+Zt(t)+'"]';t==="image"&&i&&i.imageSrcSet?(r+='[imagesrcset="'+Zt(i.imageSrcSet)+'"]',typeof i.imageSizes=="string"&&(r+='[imagesizes="'+Zt(i.imageSizes)+'"]')):r+='[href="'+Zt(e)+'"]';var u=r;switch(t){case"style":u=us(e);break;case"script":u=fs(e)}if(!(ni.has(u)||(e=N({rel:"preload",href:t==="image"&&i&&i.imageSrcSet?void 0:e,as:t},i),ni.set(u,e),n.querySelector(r)!==null||t==="style"&&n.querySelector(El(u))||t==="script"&&n.querySelector(Ml(u))))){var b=n.createElement("link");ht(b,"link",e),t==="style"&&(b[sr]=!0,b.onload=b.onerror=function(){ld(b)}),Je(b),n.head.appendChild(b)}}}function Nb(e,t){$i.m(e,t);var i=cs;if(i&&e){var n=t&&typeof t.as=="string"?t.as:"script",r='link[rel="modulepreload"][as="'+Zt(n)+'"][href="'+Zt(e)+'"]',u=r;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=fs(e)}if(!ni.has(u)&&(e=N({rel:"modulepreload",href:e},t),ni.set(u,e),i.querySelector(r)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(i.querySelector(Ml(u)))return}n=i.createElement("link"),ht(n,"link",e),Je(n),i.head.appendChild(n)}}}function zb(e,t,i){$i.S(e,t,i);var n=cs;if(n&&e){var r=Ra(n).hoistableStyles,u=us(e);t=t||"default";var b=r.get(u);if(!b){var S={loading:0,preload:null};if(b=n.querySelector(El(u)))S.loading=5;else{e=N({rel:"stylesheet",href:e,"data-precedence":t},i),(i=ni.get(u))&&Lf(e,i);var R=b=n.createElement("link");Je(R),ht(R,"link",e),R._p=new Promise(function(B,F){R.onload=B,R.onerror=F}),R.addEventListener("load",function(){S.loading|=1}),R.addEventListener("error",function(){S.loading|=2}),S.loading|=4,vo(b,t,n)}b={type:"stylesheet",instance:b,count:1,state:S},r.set(u,b)}}}function Lb(e,t){$i.X(e,t);var i=cs;if(i&&e){var n=Ra(i).hoistableScripts,r=fs(e),u=n.get(r);u||(u=i.querySelector(Ml(r)),u||(e=N({src:e,async:!0},t),(t=ni.get(r))&&Bf(e,t),u=i.createElement("script"),Je(u),ht(u,"link",e),i.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},n.set(r,u))}}function Bb(e,t){$i.M(e,t);var i=cs;if(i&&e){var n=Ra(i).hoistableScripts,r=fs(e),u=n.get(r);u||(u=i.querySelector(Ml(r)),u||(e=N({src:e,async:!0,type:"module"},t),(t=ni.get(r))&&Bf(e,t),u=i.createElement("script"),Je(u),ht(u,"link",e),i.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},n.set(r,u))}}function K0(e,t,i,n){var r=(r=on.current)?Al(r):null;if(!r)throw Error(l(446));switch(e){case"meta":case"title":return null;case"style":return typeof i.precedence=="string"&&typeof i.href=="string"?(i=us(i.href),t=Ra(r).hoistableStyles,n=t.get(i),n||(n={type:"style",instance:null,count:0,state:null},t.set(i,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(i.rel==="stylesheet"&&typeof i.href=="string"&&typeof i.precedence=="string"){e=us(i.href);var u=Ra(r).hoistableStyles,b=u.get(e);if(b||(r=r.ownerDocument||r,b={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(e,b),(u=r.querySelector(El(e)))?u._p||(b.instance=u,b.state.loading=5):(u=ni.get(e),u||(u={rel:"preload",as:"style",href:i.href,crossOrigin:i.crossOrigin,integrity:i.integrity,media:i.media,hrefLang:i.hrefLang,referrerPolicy:i.referrerPolicy},ni.set(e,u)),Ub(r,e,u,b.state))),t&&n===null)throw Error(l(528,""));return b}if(t&&n!==null)throw Error(l(529,""));return null;case"script":return t=i.async,i=i.src,typeof i=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(i=fs(i),t=Ra(r).hoistableScripts,n=t.get(i),n||(n={type:"script",instance:null,count:0,state:null},t.set(i,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(l(444,e))}}function us(e){return'href="'+Zt(e)+'"'}function El(e){return'link[rel="stylesheet"]['+e+"]"}function Z0(e){return N({},e,{"data-precedence":e.precedence,precedence:null})}function Ub(e,t,i,n){if(t=e.querySelector('link[rel="preload"][as="style"]['+t+"]")){if(t[sr]!==!0){n.loading=1;return}}else t=e.createElement("link"),t[sr]=!0,t.onload=t.onerror=ld.bind(null,t),ht(t,"link",i),Je(t),e.head.appendChild(t);n.preload=t,t.addEventListener("load",function(){return n.loading|=1}),t.addEventListener("error",function(){return n.loading|=2})}function fs(e){return'[src="'+Zt(e)+'"]'}function Ml(e){return"script[async]"+e}function Q0(e,t,i){if(t.count++,t.instance===null)switch(t.type){case"style":var n=e.querySelector('style[data-href~="'+Zt(i.href)+'"]');if(n)return t.instance=n,Je(n),n;var r=N({},i,{"data-href":i.href,"data-precedence":i.precedence,href:null,precedence:null});return n=(e.ownerDocument||e).createElement("style"),Je(n),ht(n,"style",r),vo(n,i.precedence,e),t.instance=n;case"stylesheet":r=us(i.href);var u=e.querySelector(El(r));if(u)return t.state.loading|=4,t.instance=u,Je(u),u;n=Z0(i),(r=ni.get(r))&&Lf(n,r),u=(e.ownerDocument||e).createElement("link"),Je(u);var b=u;return b._p=new Promise(function(S,R){b.onload=S,b.onerror=R}),ht(u,"link",n),t.state.loading|=4,vo(u,i.precedence,e),t.instance=u;case"script":return u=fs(i.src),(r=e.querySelector(Ml(u)))?(t.instance=r,Je(r),r):(n=i,(r=ni.get(u))&&(n=N({},i),Bf(n,r)),e=e.ownerDocument||e,r=e.createElement("script"),Je(r),ht(r,"link",n),e.head.appendChild(r),t.instance=r);case"void":return null;default:throw Error(l(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(n=t.instance,t.state.loading|=4,vo(n,i.precedence,e));return t.instance}function vo(e,t,i){for(var n=i.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),r=n.length?n[n.length-1]:null,u=r,b=0;b<n.length;b++){var S=n[b];if(S.dataset.precedence===t)u=S;else if(u!==r)break}u?u.parentNode.insertBefore(e,u.nextSibling):(t=i.nodeType===9?i.head:i,t.insertBefore(e,t.firstChild))}function Lf(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Bf(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var yo=null;function W0(e,t,i){if(yo===null){var n=new Map,r=yo=new Map;r.set(i,n)}else r=yo,n=r.get(i),n||(n=new Map,r.set(i,n));if(n.has(e))return n;for(n.set(e,null),i=i.getElementsByTagName(e),r=0;r<i.length;r++){var u=i[r];if(!(u[Ps]||u[rt]||e==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var b=u.getAttribute(t)||"";b=e+b;var S=n.get(b);S?S.push(u):n.set(b,[u])}}return n}function Uf(e,t,i){e=e.ownerDocument||e,e.head.insertBefore(i,t==="title"?e.querySelector("head > title"):null)}function Hb(e,t,i){if(i===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function J0(e,t){return e==="img"&&t.src!=null&&t.src!==""&&t.onLoad==null&&t.loading!=="lazy"}function $0(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function eg(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function tg(e,t){typeof t.decode=="function"&&(e.imgCount++,t.complete||(e.imgBytes+=eg(t),e.suspenseyImages.push(t)),e=Gb.bind(e),t.decode().then(e,e))}function Ib(e,t,i,n){if(i.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var r=us(n.href),u=t.querySelector(El(r));if(u){t=u._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Rl.bind(e),t.then(e,e)),i.state.loading|=4,i.instance=u,Je(u);return}u=t.ownerDocument||t,n=Z0(n),(r=ni.get(r))&&Lf(n,r),u=u.createElement("link"),Je(u);var b=u;b._p=new Promise(function(S,R){b.onload=S,b.onerror=R}),ht(u,"link",n),i.instance=u}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(i,t),(t=i.state.preload)&&(i.state.loading&3)===0&&(e.count++,i=Rl.bind(e),t.addEventListener("load",i),t.addEventListener("error",i))}}var bo=0;function Fb(e,t){return e.stylesheets&&e.count===0&&xo(e,e.stylesheets),0<e.count||0<e.imgCount?function(i){var n=setTimeout(function(){if(e.stylesheets&&xo(e,e.stylesheets),e.unsuspend){var u=e.unsuspend;e.unsuspend=null,u()}},6e4+t);0<e.imgBytes&&bo===0&&(bo=62500*nb());var r=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&xo(e,e.stylesheets),e.unsuspend)){var u=e.unsuspend;e.unsuspend=null,u()}},(e.imgBytes>bo?50:800)+t);return e.unsuspend=i,function(){e.unsuspend=null,clearTimeout(n),clearTimeout(r)}}:null}function ig(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)xo(e,e.stylesheets);else if(e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}}}function Rl(){this.count--,ig(this)}function Gb(){this.imgCount--,ig(this)}var To=null;function xo(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,To=new Map,t.forEach(Vb,e),To=null,Rl.call(e))}function Vb(e,t){if(!(t.state.loading&4)){var i=To.get(e);if(i)var n=i.get(null);else{i=new Map,To.set(e,i);for(var r=e.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<r.length;u++){var b=r[u];(b.nodeName==="LINK"||b.getAttribute("media")!=="not all")&&(i.set(b.dataset.precedence,b),n=b)}n&&i.set(null,n)}r=t.instance,b=r.getAttribute("data-precedence"),u=i.get(b)||n,u===n&&i.set(null,r),i.set(b,r),this.count++,n=Rl.bind(this),r.addEventListener("load",n),r.addEventListener("error",n),u?u.parentNode.insertBefore(r,u.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(r,e.firstChild)),t.state.loading|=4}}var hs={$$typeof:ne,Provider:null,Consumer:null,_currentValue:kn,_currentValue2:kn,_threadCount:0};function Pb(e,t,i,n,r,u,b,S,R){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=pc(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=pc(0),this.hiddenUpdates=pc(null),this.identifierPrefix=n,this.onUncaughtError=r,this.onCaughtError=u,this.onRecoverableError=b,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=R,this.transitionTypes=null,this.incompleteTransitions=new Map}function ng(e,t,i,n,r,u,b,S,R,B,F,k){return e=new Pb(e,t,i,b,R,B,F,k,S),t=1,u===!0&&(t|=24),u=wt(3,null,null,t),e.current=u,u.stateNode=e,t=Qc(),t.refCount++,e.pooledCache=t,t.refCount++,u.memoizedState={element:n,isDehydrated:i,cache:t},eu(u),e}function ag(e){return e?(e=Ia,e):Ia}function sg(e,t,i,n,r,u){r=ag(r),n.context===null?n.context=r:n.pendingContext=r,n=bn(t),n.payload={element:i},u=u===void 0?null:u,u!==null&&(n.callback=u),i=Tn(e,n,t),i!==null&&(Rt(i,e,t),sl(i,e,t))}function lg(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var i=e.retryLane;e.retryLane=i!==0&&i<t?i:t}}function Hf(e,t){lg(e,t),(e=e.alternate)&&lg(e,t)}function rg(e){if(e.tag===13||e.tag===31){var t=Wn(e,67108864);t!==null&&Rt(t,e,67108864),Hf(e,67108864)}}function og(e){if(e.tag===13||e.tag===31){var t=qt();t=gc(t);var i=Wn(e,t);i!==null&&Rt(i,e,t),Hf(e,t)}}var ds=!0;function qb(e,t,i,n){var r=J.T;J.T=null;var u=fe.p;try{fe.p=2,If(e,t,i,n)}finally{fe.p=u,J.T=r}}function jb(e,t,i,n){var r=J.T;J.T=null;var u=fe.p;try{fe.p=8,If(e,t,i,n)}finally{fe.p=u,J.T=r}}function If(e,t,i,n){if(ds){var r=Ff(n);if(r===null)bf(e,t,n,So,i),ug(e,n);else if(Yb(r,e,t,i,n))n.stopPropagation();else if(ug(e,n),t&4&&-1<kb.indexOf(e)){for(;r!==null;){var u=Ma(r);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var b=Yn(u.pendingLanes);if(b!==0){var S=u;for(S.pendingLanes|=2,S.entangledLanes|=2;b;){var R=1<<31-Ut(b);S.entanglements[1]|=R,b&=~R}zi(u),(xe&6)===0&&(lo=Lt()+500,xl(0))}}break;case 31:case 13:S=Wn(u,2),S!==null&&Rt(S,u,2),co(),Hf(u,2)}if(u=Ff(n),u===null&&bf(e,t,n,So,i),u===r)break;r=u}r!==null&&n.stopPropagation()}else bf(e,t,n,null,i)}}function Ff(e){return e=_c(e),Gf(e)}var So=null;function Gf(e){if(So=null,e=Xn(e),e!==null){var t=f(e);if(t===null)e=null;else{var i=t.tag;if(i===13){if(e=c(t),e!==null)return e;e=null}else if(i===31){if(e=d(t),e!==null)return e;e=null}else if(i===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return So=e,null}function cg(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ny()){case Kh:return 2;case Zh:return 8;case er:case ay:return 32;case Qh:return 268435456;default:return 32}default:return 32}}var Vf=!1,Nn=null,zn=null,Ln=null,Cl=new Map,Dl=new Map,Bn=[],kb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function ug(e,t){switch(e){case"focusin":case"focusout":Nn=null;break;case"dragenter":case"dragleave":zn=null;break;case"mouseover":case"mouseout":Ln=null;break;case"pointerover":case"pointerout":Cl.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Dl.delete(t.pointerId)}}function Ol(e,t,i,n,r,u){return e===null||e.nativeEvent!==u?(e={blockedOn:t,domEventName:i,eventSystemFlags:n,nativeEvent:u,targetContainers:[r]},t!==null&&(t=Ma(t),t!==null&&rg(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,r!==null&&t.indexOf(r)===-1&&t.push(r),e)}function Yb(e,t,i,n,r){switch(t){case"focusin":return Nn=Ol(Nn,e,t,i,n,r),!0;case"dragenter":return zn=Ol(zn,e,t,i,n,r),!0;case"mouseover":return Ln=Ol(Ln,e,t,i,n,r),!0;case"pointerover":var u=r.pointerId;return Cl.set(u,Ol(Cl.get(u)||null,e,t,i,n,r)),!0;case"gotpointercapture":return u=r.pointerId,Dl.set(u,Ol(Dl.get(u)||null,e,t,i,n,r)),!0}return!1}function fg(e){var t=Xn(e.target);if(t!==null){var i=f(t);if(i!==null){if(t=i.tag,t===13){if(t=c(i),t!==null){e.blockedOn=t,nd(e.priority,function(){og(i)});return}}else if(t===31){if(t=d(i),t!==null){e.blockedOn=t,nd(e.priority,function(){og(i)});return}}else if(t===3&&i.stateNode.current.memoizedState.isDehydrated){e.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}e.blockedOn=null}function _o(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var i=Ff(e.nativeEvent);if(i===null){i=e.nativeEvent;var n=new i.constructor(i.type,i);Sc=n,i.target.dispatchEvent(n),Sc=null}else return t=Ma(i),t!==null&&rg(t),e.blockedOn=i,!1;t.shift()}return!0}function hg(e,t,i){_o(e)&&i.delete(t)}function Xb(){Vf=!1,Nn!==null&&_o(Nn)&&(Nn=null),zn!==null&&_o(zn)&&(zn=null),Ln!==null&&_o(Ln)&&(Ln=null),Cl.forEach(hg),Dl.forEach(hg)}function wo(e,t){e.blockedOn===t&&(e.blockedOn=null,Vf||(Vf=!0,h.unstable_scheduleCallback(h.unstable_NormalPriority,Xb)))}var Ao=null;function dg(e){Ao!==e&&(Ao=e,h.unstable_scheduleCallback(h.unstable_NormalPriority,function(){Ao===e&&(Ao=null);for(var t=0;t<e.length;t+=3){var i=e[t],n=e[t+1],r=e[t+2];if(typeof n!="function"){if(Gf(n||i)===null)continue;break}var u=Ma(i);u!==null&&(e.splice(t,3),t-=3,xu(u,{pending:!0,data:r,method:i.method,action:n},n,r))}}))}function ms(e){function t(R){return wo(R,e)}Nn!==null&&wo(Nn,e),zn!==null&&wo(zn,e),Ln!==null&&wo(Ln,e),Cl.forEach(t),Dl.forEach(t);for(var i=0;i<Bn.length;i++){var n=Bn[i];n.blockedOn===e&&(n.blockedOn=null)}for(;0<Bn.length&&(i=Bn[0],i.blockedOn===null);)fg(i),i.blockedOn===null&&Bn.shift();if(i=(e.ownerDocument||e).$$reactFormReplay,i!=null)for(n=0;n<i.length;n+=3){var r=i[n],u=i[n+1],b=r[_t]||null;if(typeof u=="function")b||dg(i);else if(b){var S=null;if(u&&u.hasAttribute("formAction")){if(r=u,b=u[_t]||null)S=b.formAction;else if(Gf(r)!==null)continue}else S=b.action;typeof S=="function"?i[n+1]=S:(i.splice(n,3),n-=3),dg(i)}}}function mg(){function e(u){u.canIntercept&&u.info==="react-transition"&&u.intercept({handler:function(){return new Promise(function(b){return r=b})},focusReset:"manual",scroll:"manual"})}function t(){r!==null&&(r(),r=null),n||setTimeout(i,20)}function i(){if(!n&&!navigation.transition){var u=navigation.currentEntry;u&&u.url!=null&&navigation.navigate(u.url,{state:u.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var n=!1,r=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(i,100),function(){n=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),r!==null&&(r(),r=null)}}}function Pf(e){this._internalRoot=e}Eo.prototype.render=Pf.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(l(409));var i=t.current,n=qt();sg(i,n,e,t,null,null)},Eo.prototype.unmount=Pf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;sg(e.current,2,null,e,null,null),co(),t[Ea]=null}};function Eo(e){this._internalRoot=e}Eo.prototype.unstable_scheduleHydration=function(e){if(e){var t=id();e={blockedOn:null,target:e,priority:t};for(var i=0;i<Bn.length&&t!==0&&t<Bn[i].priority;i++);Bn.splice(i,0,e),i===0&&fg(e)}};var pg=a.version;if(pg!=="19.3.0")throw Error(l(527,pg,"19.3.0"));fe.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(l(188)):(e=Object.keys(e).join(","),Error(l(268,e)));return e=p(t),e=e!==null?y(e):null,e=e===null?null:e.stateNode,e};var Kb={bundleType:0,version:"19.3.0",rendererPackageName:"react-dom",currentDispatcherRef:J,reconcilerVersion:"19.3.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Mo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Mo.isDisabled&&Mo.supportsFiber)try{Fs=Mo.inject(Kb),Bt=Mo}catch{}}return zl.createRoot=function(e,t){if(!o(e))throw Error(l(299));var i=!1,n="",r=ap,u=sp,b=lp;return t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onUncaughtError!==void 0&&(r=t.onUncaughtError),t.onCaughtError!==void 0&&(u=t.onCaughtError),t.onRecoverableError!==void 0&&(b=t.onRecoverableError)),t=ng(e,1,!1,null,null,i,n,null,r,u,b,mg),e[Ea]=t.current,yf(e),new Pf(t)},zl.hydrateRoot=function(e,t,i){if(!o(e))throw Error(l(299));var n=!1,r="",u=ap,b=sp,S=lp,R=null;return i!=null&&(i.unstable_strictMode===!0&&(n=!0),i.identifierPrefix!==void 0&&(r=i.identifierPrefix),i.onUncaughtError!==void 0&&(u=i.onUncaughtError),i.onCaughtError!==void 0&&(b=i.onCaughtError),i.onRecoverableError!==void 0&&(S=i.onRecoverableError),i.formState!==void 0&&(R=i.formState)),t=ng(e,1,!0,t,i??null,n,r,R,u,b,S,mg),t.context=ag(null),i=t.current,n=qt(),n=gc(n),r=bn(n),r.callback=null,Tn(i,r,n),i=n,t.current.lanes=i,Vs(t,i),zi(t),e[Ea]=t.current,yf(e),new Eo(t)},zl.version="19.3.0",zl}var Ag;function QT(){if(Ag)return kf.exports;Ag=1;function h(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(h)}catch(a){console.error(a)}}return h(),kf.exports=ZT(),kf.exports}var WT=QT();function zv(h,a=!1){const s=h[0].index!==null,l=new Set(Object.keys(h[0].attributes)),o=new Set(Object.keys(h[0].morphAttributes)),f={},c={},d=h[0].morphTargetsRelative,m=new ci;let p=0;for(let y=0;y<h.length;++y){const v=h[y];let g=0;if(s!==(v.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+y+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const T in v.attributes){if(!l.has(T))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+y+'. All geometries must have compatible attributes; make sure "'+T+'" attribute exists among all geometries, or in none of them.'),null;f[T]===void 0&&(f[T]=[]),f[T].push(v.attributes[T]),g++}if(g!==l.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+y+". Make sure all geometries have the same number of attributes."),null;if(d!==v.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+y+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const T in v.morphAttributes){if(!o.has(T))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+y+".  .morphAttributes must be consistent throughout all geometries."),null;c[T]===void 0&&(c[T]=[]),c[T].push(v.morphAttributes[T])}if(a){let T;if(s)T=v.index.count;else if(v.attributes.position!==void 0)T=v.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+y+". The geometry must have either an index or a position attribute"),null;m.addGroup(p,T,y),p+=T}}if(s){let y=0;const v=[];for(let g=0;g<h.length;++g){const T=h[g].index;for(let _=0;_<T.count;++_)v.push(T.getX(_)+y);y+=h[g].attributes.position.count}m.setIndex(v)}for(const y in f){const v=Eg(f[y]);if(!v)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+y+" attribute."),null;m.setAttribute(y,v)}for(const y in c){const v=c[y][0].length;if(v===0)break;m.morphAttributes=m.morphAttributes||{},m.morphAttributes[y]=[];for(let g=0;g<v;++g){const T=[];for(let w=0;w<c[y].length;++w)T.push(c[y][w][g]);const _=Eg(T);if(!_)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+y+" morphAttribute."),null;m.morphAttributes[y].push(_)}}return m}function Eg(h){let a,s,l,o=-1,f=0;for(let p=0;p<h.length;++p){const y=h[p];if(a===void 0&&(a=y.array.constructor),a!==y.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(s===void 0&&(s=y.itemSize),s!==y.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(l===void 0&&(l=y.normalized),l!==y.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(o===-1&&(o=y.gpuType),o!==y.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;f+=y.count*s}const c=new a(f),d=new dt(c,s,l);let m=0;for(let p=0;p<h.length;++p){const y=h[p];if(y.isInterleavedBufferAttribute){const v=m/s;for(let g=0,T=y.count;g<T;g++)for(let _=0;_<s;_++){const w=y.getComponent(g,_);d.setComponent(g+v,_,w)}}else c.set(y.array,m);m+=y.count*s}return o!==void 0&&(d.gpuType=o),d}function Mg(h,a){if(a===Jb)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),h;if(a===ph||a===xv){let s=h.getIndex();if(s===null){const c=[],d=h.getAttribute("position");if(d!==void 0){for(let m=0;m<d.count;m++)c.push(m);h.setIndex(c),s=h.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),h}const l=s.count-2,o=[];if(a===ph)for(let c=1;c<=l;c++)o.push(s.getX(0)),o.push(s.getX(c)),o.push(s.getX(c+1));else for(let c=0;c<l;c++)c%2===0?(o.push(s.getX(c)),o.push(s.getX(c+1)),o.push(s.getX(c+2))):(o.push(s.getX(c+2)),o.push(s.getX(c+1)),o.push(s.getX(c)));o.length/3!==l&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const f=h.clone();return f.setIndex(o),f.clearGroups(),f}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",a),h}class JT extends $b{constructor(a){super(a),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(s){return new nx(s)}),this.register(function(s){return new ax(s)}),this.register(function(s){return new dx(s)}),this.register(function(s){return new mx(s)}),this.register(function(s){return new px(s)}),this.register(function(s){return new lx(s)}),this.register(function(s){return new rx(s)}),this.register(function(s){return new ox(s)}),this.register(function(s){return new cx(s)}),this.register(function(s){return new ix(s)}),this.register(function(s){return new ux(s)}),this.register(function(s){return new sx(s)}),this.register(function(s){return new hx(s)}),this.register(function(s){return new fx(s)}),this.register(function(s){return new ex(s)}),this.register(function(s){return new gx(s)}),this.register(function(s){return new vx(s)})}load(a,s,l,o){const f=this;let c;if(this.resourcePath!=="")c=this.resourcePath;else if(this.path!==""){const p=jl.extractUrlBase(a);c=jl.resolveURL(p,this.path)}else c=jl.extractUrlBase(a);this.manager.itemStart(a);const d=function(p){o?o(p):console.error(p),f.manager.itemError(a),f.manager.itemEnd(a)},m=new Sv(this.manager);m.setPath(this.path),m.setResponseType("arraybuffer"),m.setRequestHeader(this.requestHeader),m.setWithCredentials(this.withCredentials),m.load(a,function(p){try{f.parse(p,c,function(y){s(y),f.manager.itemEnd(a)},d)}catch(y){d(y)}},l,d)}setDRACOLoader(a){return this.dracoLoader=a,this}setKTX2Loader(a){return this.ktx2Loader=a,this}setMeshoptDecoder(a){return this.meshoptDecoder=a,this}register(a){return this.pluginCallbacks.indexOf(a)===-1&&this.pluginCallbacks.push(a),this}unregister(a){return this.pluginCallbacks.indexOf(a)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(a),1),this}parse(a,s,l,o){let f;const c={},d={},m=new TextDecoder;if(typeof a=="string")f=JSON.parse(a);else if(a instanceof ArrayBuffer)if(m.decode(new Uint8Array(a,0,4))===Lv){try{c[ge.KHR_BINARY_GLTF]=new yx(a)}catch(v){o&&o(v);return}f=JSON.parse(c[ge.KHR_BINARY_GLTF].content)}else f=JSON.parse(m.decode(a));else f=a;if(f.asset===void 0||f.asset.version[0]<2){o&&o(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const p=new Ox(f,{path:s||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});p.fileLoader.setRequestHeader(this.requestHeader);for(let y=0;y<this.pluginCallbacks.length;y++){const v=this.pluginCallbacks[y](p);v.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),d[v.name]=v,c[v.name]=!0}if(f.extensionsUsed)for(let y=0;y<f.extensionsUsed.length;++y){const v=f.extensionsUsed[y],g=f.extensionsRequired||[];switch(v){case ge.KHR_MATERIALS_UNLIT:c[v]=new tx;break;case ge.KHR_DRACO_MESH_COMPRESSION:c[v]=new bx(f,this.dracoLoader);break;case ge.KHR_TEXTURE_TRANSFORM:c[v]=new Tx;break;case ge.KHR_MESH_QUANTIZATION:c[v]=new xx;break;default:g.indexOf(v)>=0&&d[v]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+v+'".')}}p.setExtensions(c),p.setPlugins(d),p.parse(l,o)}parseAsync(a,s){const l=this;return new Promise(function(o,f){l.parse(a,s,o,f)})}}function $T(){let h={};return{get:function(a){return h[a]},add:function(a,s){h[a]=s},remove:function(a){delete h[a]},removeAll:function(){h={}}}}const ge={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class ex{constructor(a){this.parser=a,this.name=ge.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const a=this.parser,s=this.parser.json.nodes||[];for(let l=0,o=s.length;l<o;l++){const f=s[l];f.extensions&&f.extensions[this.name]&&f.extensions[this.name].light!==void 0&&a._addNodeRef(this.cache,f.extensions[this.name].light)}}_loadLight(a){const s=this.parser,l="light:"+a;let o=s.cache.get(l);if(o)return o;const f=s.json,m=((f.extensions&&f.extensions[this.name]||{}).lights||[])[a];let p;const y=new Kt(16777215);m.color!==void 0&&y.setRGB(m.color[0],m.color[1],m.color[2],Ui);const v=m.range!==void 0?m.range:0;switch(m.type){case"directional":p=new gh(y),p.target.position.set(0,0,-1),p.add(p.target);break;case"point":p=new zh(y),p.distance=v;break;case"spot":p=new eT(y),p.distance=v,m.spot=m.spot||{},m.spot.innerConeAngle=m.spot.innerConeAngle!==void 0?m.spot.innerConeAngle:0,m.spot.outerConeAngle=m.spot.outerConeAngle!==void 0?m.spot.outerConeAngle:Math.PI/4,p.angle=m.spot.outerConeAngle,p.penumbra=1-m.spot.innerConeAngle/m.spot.outerConeAngle,p.target.position.set(0,0,-1),p.add(p.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+m.type)}return p.position.set(0,0,0),Li(p,m),m.intensity!==void 0&&(p.intensity=m.intensity),p.name=s.createUniqueName(m.name||"light_"+a),o=Promise.resolve(p),s.cache.add(l,o),o}getDependency(a,s){if(a==="light")return this._loadLight(s)}createNodeAttachment(a){const s=this,l=this.parser,f=l.json.nodes[a],d=(f.extensions&&f.extensions[this.name]||{}).light;return d===void 0?null:this._loadLight(d).then(function(m){return l._getNodeRef(s.cache,d,m)})}}class tx{constructor(){this.name=ge.KHR_MATERIALS_UNLIT}getMaterialType(){return Cs}extendParams(a,s,l){const o=[];a.color=new Kt(1,1,1),a.opacity=1;const f=s.pbrMetallicRoughness;if(f){if(Array.isArray(f.baseColorFactor)){const c=f.baseColorFactor;a.color.setRGB(c[0],c[1],c[2],Ui),a.opacity=c[3]}f.baseColorTexture!==void 0&&o.push(l.assignTexture(a,"map",f.baseColorTexture,Ls))}return Promise.all(o)}}class ix{constructor(a){this.parser=a,this.name=ge.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(a,s){const o=this.parser.json.materials[a];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();const f=o.extensions[this.name].emissiveStrength;return f!==void 0&&(s.emissiveIntensity=f),Promise.resolve()}}class nx{constructor(a){this.parser=a,this.name=ge.KHR_MATERIALS_CLEARCOAT}getMaterialType(a){const l=this.parser.json.materials[a];return!l.extensions||!l.extensions[this.name]?null:Hi}extendMaterialParams(a,s){const l=this.parser,o=l.json.materials[a];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();const f=[],c=o.extensions[this.name];if(c.clearcoatFactor!==void 0&&(s.clearcoat=c.clearcoatFactor),c.clearcoatTexture!==void 0&&f.push(l.assignTexture(s,"clearcoatMap",c.clearcoatTexture)),c.clearcoatRoughnessFactor!==void 0&&(s.clearcoatRoughness=c.clearcoatRoughnessFactor),c.clearcoatRoughnessTexture!==void 0&&f.push(l.assignTexture(s,"clearcoatRoughnessMap",c.clearcoatRoughnessTexture)),c.clearcoatNormalTexture!==void 0&&(f.push(l.assignTexture(s,"clearcoatNormalMap",c.clearcoatNormalTexture)),c.clearcoatNormalTexture.scale!==void 0)){const d=c.clearcoatNormalTexture.scale;s.clearcoatNormalScale=new Me(d,d)}return Promise.all(f)}}class ax{constructor(a){this.parser=a,this.name=ge.KHR_MATERIALS_DISPERSION}getMaterialType(a){const l=this.parser.json.materials[a];return!l.extensions||!l.extensions[this.name]?null:Hi}extendMaterialParams(a,s){const o=this.parser.json.materials[a];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();const f=o.extensions[this.name];return s.dispersion=f.dispersion!==void 0?f.dispersion:0,Promise.resolve()}}class sx{constructor(a){this.parser=a,this.name=ge.KHR_MATERIALS_IRIDESCENCE}getMaterialType(a){const l=this.parser.json.materials[a];return!l.extensions||!l.extensions[this.name]?null:Hi}extendMaterialParams(a,s){const l=this.parser,o=l.json.materials[a];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();const f=[],c=o.extensions[this.name];return c.iridescenceFactor!==void 0&&(s.iridescence=c.iridescenceFactor),c.iridescenceTexture!==void 0&&f.push(l.assignTexture(s,"iridescenceMap",c.iridescenceTexture)),c.iridescenceIor!==void 0&&(s.iridescenceIOR=c.iridescenceIor),s.iridescenceThicknessRange===void 0&&(s.iridescenceThicknessRange=[100,400]),c.iridescenceThicknessMinimum!==void 0&&(s.iridescenceThicknessRange[0]=c.iridescenceThicknessMinimum),c.iridescenceThicknessMaximum!==void 0&&(s.iridescenceThicknessRange[1]=c.iridescenceThicknessMaximum),c.iridescenceThicknessTexture!==void 0&&f.push(l.assignTexture(s,"iridescenceThicknessMap",c.iridescenceThicknessTexture)),Promise.all(f)}}class lx{constructor(a){this.parser=a,this.name=ge.KHR_MATERIALS_SHEEN}getMaterialType(a){const l=this.parser.json.materials[a];return!l.extensions||!l.extensions[this.name]?null:Hi}extendMaterialParams(a,s){const l=this.parser,o=l.json.materials[a];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();const f=[];s.sheenColor=new Kt(0,0,0),s.sheenRoughness=0,s.sheen=1;const c=o.extensions[this.name];if(c.sheenColorFactor!==void 0){const d=c.sheenColorFactor;s.sheenColor.setRGB(d[0],d[1],d[2],Ui)}return c.sheenRoughnessFactor!==void 0&&(s.sheenRoughness=c.sheenRoughnessFactor),c.sheenColorTexture!==void 0&&f.push(l.assignTexture(s,"sheenColorMap",c.sheenColorTexture,Ls)),c.sheenRoughnessTexture!==void 0&&f.push(l.assignTexture(s,"sheenRoughnessMap",c.sheenRoughnessTexture)),Promise.all(f)}}class rx{constructor(a){this.parser=a,this.name=ge.KHR_MATERIALS_TRANSMISSION}getMaterialType(a){const l=this.parser.json.materials[a];return!l.extensions||!l.extensions[this.name]?null:Hi}extendMaterialParams(a,s){const l=this.parser,o=l.json.materials[a];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();const f=[],c=o.extensions[this.name];return c.transmissionFactor!==void 0&&(s.transmission=c.transmissionFactor),c.transmissionTexture!==void 0&&f.push(l.assignTexture(s,"transmissionMap",c.transmissionTexture)),Promise.all(f)}}class ox{constructor(a){this.parser=a,this.name=ge.KHR_MATERIALS_VOLUME}getMaterialType(a){const l=this.parser.json.materials[a];return!l.extensions||!l.extensions[this.name]?null:Hi}extendMaterialParams(a,s){const l=this.parser,o=l.json.materials[a];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();const f=[],c=o.extensions[this.name];s.thickness=c.thicknessFactor!==void 0?c.thicknessFactor:0,c.thicknessTexture!==void 0&&f.push(l.assignTexture(s,"thicknessMap",c.thicknessTexture)),s.attenuationDistance=c.attenuationDistance||1/0;const d=c.attenuationColor||[1,1,1];return s.attenuationColor=new Kt().setRGB(d[0],d[1],d[2],Ui),Promise.all(f)}}class cx{constructor(a){this.parser=a,this.name=ge.KHR_MATERIALS_IOR}getMaterialType(a){const l=this.parser.json.materials[a];return!l.extensions||!l.extensions[this.name]?null:Hi}extendMaterialParams(a,s){const o=this.parser.json.materials[a];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();const f=o.extensions[this.name];return s.ior=f.ior!==void 0?f.ior:1.5,Promise.resolve()}}class ux{constructor(a){this.parser=a,this.name=ge.KHR_MATERIALS_SPECULAR}getMaterialType(a){const l=this.parser.json.materials[a];return!l.extensions||!l.extensions[this.name]?null:Hi}extendMaterialParams(a,s){const l=this.parser,o=l.json.materials[a];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();const f=[],c=o.extensions[this.name];s.specularIntensity=c.specularFactor!==void 0?c.specularFactor:1,c.specularTexture!==void 0&&f.push(l.assignTexture(s,"specularIntensityMap",c.specularTexture));const d=c.specularColorFactor||[1,1,1];return s.specularColor=new Kt().setRGB(d[0],d[1],d[2],Ui),c.specularColorTexture!==void 0&&f.push(l.assignTexture(s,"specularColorMap",c.specularColorTexture,Ls)),Promise.all(f)}}class fx{constructor(a){this.parser=a,this.name=ge.EXT_MATERIALS_BUMP}getMaterialType(a){const l=this.parser.json.materials[a];return!l.extensions||!l.extensions[this.name]?null:Hi}extendMaterialParams(a,s){const l=this.parser,o=l.json.materials[a];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();const f=[],c=o.extensions[this.name];return s.bumpScale=c.bumpFactor!==void 0?c.bumpFactor:1,c.bumpTexture!==void 0&&f.push(l.assignTexture(s,"bumpMap",c.bumpTexture)),Promise.all(f)}}class hx{constructor(a){this.parser=a,this.name=ge.KHR_MATERIALS_ANISOTROPY}getMaterialType(a){const l=this.parser.json.materials[a];return!l.extensions||!l.extensions[this.name]?null:Hi}extendMaterialParams(a,s){const l=this.parser,o=l.json.materials[a];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();const f=[],c=o.extensions[this.name];return c.anisotropyStrength!==void 0&&(s.anisotropy=c.anisotropyStrength),c.anisotropyRotation!==void 0&&(s.anisotropyRotation=c.anisotropyRotation),c.anisotropyTexture!==void 0&&f.push(l.assignTexture(s,"anisotropyMap",c.anisotropyTexture)),Promise.all(f)}}class dx{constructor(a){this.parser=a,this.name=ge.KHR_TEXTURE_BASISU}loadTexture(a){const s=this.parser,l=s.json,o=l.textures[a];if(!o.extensions||!o.extensions[this.name])return null;const f=o.extensions[this.name],c=s.options.ktx2Loader;if(!c){if(l.extensionsRequired&&l.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return s.loadTextureImage(a,f.source,c)}}class mx{constructor(a){this.parser=a,this.name=ge.EXT_TEXTURE_WEBP}loadTexture(a){const s=this.name,l=this.parser,o=l.json,f=o.textures[a];if(!f.extensions||!f.extensions[s])return null;const c=f.extensions[s],d=o.images[c.source];let m=l.textureLoader;if(d.uri){const p=l.options.manager.getHandler(d.uri);p!==null&&(m=p)}return l.loadTextureImage(a,c.source,m)}}class px{constructor(a){this.parser=a,this.name=ge.EXT_TEXTURE_AVIF}loadTexture(a){const s=this.name,l=this.parser,o=l.json,f=o.textures[a];if(!f.extensions||!f.extensions[s])return null;const c=f.extensions[s],d=o.images[c.source];let m=l.textureLoader;if(d.uri){const p=l.options.manager.getHandler(d.uri);p!==null&&(m=p)}return l.loadTextureImage(a,c.source,m)}}class gx{constructor(a){this.name=ge.EXT_MESHOPT_COMPRESSION,this.parser=a}loadBufferView(a){const s=this.parser.json,l=s.bufferViews[a];if(l.extensions&&l.extensions[this.name]){const o=l.extensions[this.name],f=this.parser.getDependency("buffer",o.buffer),c=this.parser.options.meshoptDecoder;if(!c||!c.supported){if(s.extensionsRequired&&s.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return f.then(function(d){const m=o.byteOffset||0,p=o.byteLength||0,y=o.count,v=o.byteStride,g=new Uint8Array(d,m,p);return c.decodeGltfBufferAsync?c.decodeGltfBufferAsync(y,v,g,o.mode,o.filter).then(function(T){return T.buffer}):c.ready.then(function(){const T=new ArrayBuffer(y*v);return c.decodeGltfBuffer(new Uint8Array(T),y,v,g,o.mode,o.filter),T})})}else return null}}class vx{constructor(a){this.name=ge.EXT_MESH_GPU_INSTANCING,this.parser=a}createNodeMesh(a){const s=this.parser.json,l=s.nodes[a];if(!l.extensions||!l.extensions[this.name]||l.mesh===void 0)return null;const o=s.meshes[l.mesh];for(const p of o.primitives)if(p.mode!==si.TRIANGLES&&p.mode!==si.TRIANGLE_STRIP&&p.mode!==si.TRIANGLE_FAN&&p.mode!==void 0)return null;const c=l.extensions[this.name].attributes,d=[],m={};for(const p in c)d.push(this.parser.getDependency("accessor",c[p]).then(y=>(m[p]=y,m[p])));return d.length<1?null:(d.push(this.parser.createNodeMesh(a)),Promise.all(d).then(p=>{const y=p.pop(),v=y.isGroup?y.children:[y],g=p[0].count,T=[];for(const _ of v){const w=new qe,x=new Q,A=new Kl,M=new Q(1,1,1),E=new _v(_.geometry,_.material,g);for(let C=0;C<g;C++)m.TRANSLATION&&x.fromBufferAttribute(m.TRANSLATION,C),m.ROTATION&&A.fromBufferAttribute(m.ROTATION,C),m.SCALE&&M.fromBufferAttribute(m.SCALE,C),E.setMatrixAt(C,w.compose(x,A,M));for(const C in m)if(C==="_COLOR_0"){const D=m[C];E.instanceColor=new tT(D.array,D.itemSize,D.normalized)}else C!=="TRANSLATION"&&C!=="ROTATION"&&C!=="SCALE"&&_.geometry.setAttribute(C,m[C]);tc.prototype.copy.call(E,_),this.parser.assignFinalMaterial(E),T.push(E)}return y.isGroup?(y.clear(),y.add(...T),y):T[0]}))}}const Lv="glTF",Ll=12,Rg={JSON:1313821514,BIN:5130562};class yx{constructor(a){this.name=ge.KHR_BINARY_GLTF,this.content=null,this.body=null;const s=new DataView(a,0,Ll),l=new TextDecoder;if(this.header={magic:l.decode(new Uint8Array(a.slice(0,4))),version:s.getUint32(4,!0),length:s.getUint32(8,!0)},this.header.magic!==Lv)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const o=this.header.length-Ll,f=new DataView(a,Ll);let c=0;for(;c<o;){const d=f.getUint32(c,!0);c+=4;const m=f.getUint32(c,!0);if(c+=4,m===Rg.JSON){const p=new Uint8Array(a,Ll+c,d);this.content=l.decode(p)}else if(m===Rg.BIN){const p=Ll+c;this.body=a.slice(p,p+d)}c+=d}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class bx{constructor(a,s){if(!s)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ge.KHR_DRACO_MESH_COMPRESSION,this.json=a,this.dracoLoader=s,this.dracoLoader.preload()}decodePrimitive(a,s){const l=this.json,o=this.dracoLoader,f=a.extensions[this.name].bufferView,c=a.extensions[this.name].attributes,d={},m={},p={};for(const y in c){const v=Th[y]||y.toLowerCase();d[v]=c[y]}for(const y in a.attributes){const v=Th[y]||y.toLowerCase();if(c[y]!==void 0){const g=l.accessors[a.attributes[y]],T=zs[g.componentType];p[v]=T.name,m[v]=g.normalized===!0}}return s.getDependency("bufferView",f).then(function(y){return new Promise(function(v,g){o.decodeDracoFile(y,function(T){for(const _ in T.attributes){const w=T.attributes[_],x=m[_];x!==void 0&&(w.normalized=x)}v(T)},d,p,Ui,g)})})}}class Tx{constructor(){this.name=ge.KHR_TEXTURE_TRANSFORM}extendTexture(a,s){return(s.texCoord===void 0||s.texCoord===a.channel)&&s.offset===void 0&&s.rotation===void 0&&s.scale===void 0||(a=a.clone(),s.texCoord!==void 0&&(a.channel=s.texCoord),s.offset!==void 0&&a.offset.fromArray(s.offset),s.rotation!==void 0&&(a.rotation=s.rotation),s.scale!==void 0&&a.repeat.fromArray(s.scale),a.needsUpdate=!0),a}}class xx{constructor(){this.name=ge.KHR_MESH_QUANTIZATION}}class Bv extends ST{constructor(a,s,l,o){super(a,s,l,o)}copySampleValue_(a){const s=this.resultBuffer,l=this.sampleValues,o=this.valueSize,f=a*o*3+o;for(let c=0;c!==o;c++)s[c]=l[f+c];return s}interpolate_(a,s,l,o){const f=this.resultBuffer,c=this.sampleValues,d=this.valueSize,m=d*2,p=d*3,y=o-s,v=(l-s)/y,g=v*v,T=g*v,_=a*p,w=_-p,x=-2*T+3*g,A=T-g,M=1-x,E=A-g+v;for(let C=0;C!==d;C++){const D=c[w+C+d],U=c[w+C+m]*y,N=c[_+C+d],Y=c[_+C]*y;f[C]=M*D+E*U+x*N+A*Y}return f}}const Sx=new Kl;class _x extends Bv{interpolate_(a,s,l,o){const f=super.interpolate_(a,s,l,o);return Sx.fromArray(f).normalize().toArray(f),f}}const si={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},zs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Cg={9728:He,9729:Ot,9984:rT,9985:lT,9986:sT,9987:wv},Dg={33071:sn,33648:oT,10497:bi},Kf={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Th={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Hn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},wx={CUBICSPLINE:void 0,LINEAR:Ev,STEP:TT},Zf={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Ax(h){return h.DefaultMaterial===void 0&&(h.DefaultMaterial=new Zl({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Wo})),h.DefaultMaterial}function pa(h,a,s){for(const l in s.extensions)h[l]===void 0&&(a.userData.gltfExtensions=a.userData.gltfExtensions||{},a.userData.gltfExtensions[l]=s.extensions[l])}function Li(h,a){a.extras!==void 0&&(typeof a.extras=="object"?Object.assign(h.userData,a.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+a.extras))}function Ex(h,a,s){let l=!1,o=!1,f=!1;for(let p=0,y=a.length;p<y;p++){const v=a[p];if(v.POSITION!==void 0&&(l=!0),v.NORMAL!==void 0&&(o=!0),v.COLOR_0!==void 0&&(f=!0),l&&o&&f)break}if(!l&&!o&&!f)return Promise.resolve(h);const c=[],d=[],m=[];for(let p=0,y=a.length;p<y;p++){const v=a[p];if(l){const g=v.POSITION!==void 0?s.getDependency("accessor",v.POSITION):h.attributes.position;c.push(g)}if(o){const g=v.NORMAL!==void 0?s.getDependency("accessor",v.NORMAL):h.attributes.normal;d.push(g)}if(f){const g=v.COLOR_0!==void 0?s.getDependency("accessor",v.COLOR_0):h.attributes.color;m.push(g)}}return Promise.all([Promise.all(c),Promise.all(d),Promise.all(m)]).then(function(p){const y=p[0],v=p[1],g=p[2];return l&&(h.morphAttributes.position=y),o&&(h.morphAttributes.normal=v),f&&(h.morphAttributes.color=g),h.morphTargetsRelative=!0,h})}function Mx(h,a){if(h.updateMorphTargets(),a.weights!==void 0)for(let s=0,l=a.weights.length;s<l;s++)h.morphTargetInfluences[s]=a.weights[s];if(a.extras&&Array.isArray(a.extras.targetNames)){const s=a.extras.targetNames;if(h.morphTargetInfluences.length===s.length){h.morphTargetDictionary={};for(let l=0,o=s.length;l<o;l++)h.morphTargetDictionary[s[l]]=l}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Rx(h){let a;const s=h.extensions&&h.extensions[ge.KHR_DRACO_MESH_COMPRESSION];if(s?a="draco:"+s.bufferView+":"+s.indices+":"+Qf(s.attributes):a=h.indices+":"+Qf(h.attributes)+":"+h.mode,h.targets!==void 0)for(let l=0,o=h.targets.length;l<o;l++)a+=":"+Qf(h.targets[l]);return a}function Qf(h){let a="";const s=Object.keys(h).sort();for(let l=0,o=s.length;l<o;l++)a+=s[l]+":"+h[s[l]]+";";return a}function xh(h){switch(h){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Cx(h){return h.search(/\.jpe?g($|\?)/i)>0||h.search(/^data\:image\/jpeg/)===0?"image/jpeg":h.search(/\.webp($|\?)/i)>0||h.search(/^data\:image\/webp/)===0?"image/webp":h.search(/\.ktx2($|\?)/i)>0||h.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const Dx=new qe;class Ox{constructor(a={},s={}){this.json=a,this.extensions={},this.plugins={},this.options=s,this.cache=new $T,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let l=!1,o=-1,f=!1,c=-1;if(typeof navigator<"u"){const d=navigator.userAgent;l=/^((?!chrome|android).)*safari/i.test(d)===!0;const m=d.match(/Version\/(\d+)/);o=l&&m?parseInt(m[1],10):-1,f=d.indexOf("Firefox")>-1,c=f?d.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||l&&o<17||f&&c<98?this.textureLoader=new iT(this.options.manager):this.textureLoader=new nT(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Sv(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(a){this.extensions=a}setPlugins(a){this.plugins=a}parse(a,s){const l=this,o=this.json,f=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(c){return c._markDefs&&c._markDefs()}),Promise.all(this._invokeAll(function(c){return c.beforeRoot&&c.beforeRoot()})).then(function(){return Promise.all([l.getDependencies("scene"),l.getDependencies("animation"),l.getDependencies("camera")])}).then(function(c){const d={scene:c[0][o.scene||0],scenes:c[0],animations:c[1],cameras:c[2],asset:o.asset,parser:l,userData:{}};return pa(f,d,o),Li(d,o),Promise.all(l._invokeAll(function(m){return m.afterRoot&&m.afterRoot(d)})).then(function(){for(const m of d.scenes)m.updateMatrixWorld();a(d)})}).catch(s)}_markDefs(){const a=this.json.nodes||[],s=this.json.skins||[],l=this.json.meshes||[];for(let o=0,f=s.length;o<f;o++){const c=s[o].joints;for(let d=0,m=c.length;d<m;d++)a[c[d]].isBone=!0}for(let o=0,f=a.length;o<f;o++){const c=a[o];c.mesh!==void 0&&(this._addNodeRef(this.meshCache,c.mesh),c.skin!==void 0&&(l[c.mesh].isSkinnedMesh=!0)),c.camera!==void 0&&this._addNodeRef(this.cameraCache,c.camera)}}_addNodeRef(a,s){s!==void 0&&(a.refs[s]===void 0&&(a.refs[s]=a.uses[s]=0),a.refs[s]++)}_getNodeRef(a,s,l){if(a.refs[s]<=1)return l;const o=l.clone(),f=(c,d)=>{const m=this.associations.get(c);m!=null&&this.associations.set(d,m);for(const[p,y]of c.children.entries())f(y,d.children[p])};return f(l,o),o.name+="_instance_"+a.uses[s]++,o}_invokeOne(a){const s=Object.values(this.plugins);s.push(this);for(let l=0;l<s.length;l++){const o=a(s[l]);if(o)return o}return null}_invokeAll(a){const s=Object.values(this.plugins);s.unshift(this);const l=[];for(let o=0;o<s.length;o++){const f=a(s[o]);f&&l.push(f)}return l}getDependency(a,s){const l=a+":"+s;let o=this.cache.get(l);if(!o){switch(a){case"scene":o=this.loadScene(s);break;case"node":o=this._invokeOne(function(f){return f.loadNode&&f.loadNode(s)});break;case"mesh":o=this._invokeOne(function(f){return f.loadMesh&&f.loadMesh(s)});break;case"accessor":o=this.loadAccessor(s);break;case"bufferView":o=this._invokeOne(function(f){return f.loadBufferView&&f.loadBufferView(s)});break;case"buffer":o=this.loadBuffer(s);break;case"material":o=this._invokeOne(function(f){return f.loadMaterial&&f.loadMaterial(s)});break;case"texture":o=this._invokeOne(function(f){return f.loadTexture&&f.loadTexture(s)});break;case"skin":o=this.loadSkin(s);break;case"animation":o=this._invokeOne(function(f){return f.loadAnimation&&f.loadAnimation(s)});break;case"camera":o=this.loadCamera(s);break;default:if(o=this._invokeOne(function(f){return f!=this&&f.getDependency&&f.getDependency(a,s)}),!o)throw new Error("Unknown type: "+a);break}this.cache.add(l,o)}return o}getDependencies(a){let s=this.cache.get(a);if(!s){const l=this,o=this.json[a+(a==="mesh"?"es":"s")]||[];s=Promise.all(o.map(function(f,c){return l.getDependency(a,c)})),this.cache.add(a,s)}return s}loadBuffer(a){const s=this.json.buffers[a],l=this.fileLoader;if(s.type&&s.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+s.type+" buffer type is not supported.");if(s.uri===void 0&&a===0)return Promise.resolve(this.extensions[ge.KHR_BINARY_GLTF].body);const o=this.options;return new Promise(function(f,c){l.load(jl.resolveURL(s.uri,o.path),f,void 0,function(){c(new Error('THREE.GLTFLoader: Failed to load buffer "'+s.uri+'".'))})})}loadBufferView(a){const s=this.json.bufferViews[a];return this.getDependency("buffer",s.buffer).then(function(l){const o=s.byteLength||0,f=s.byteOffset||0;return l.slice(f,f+o)})}loadAccessor(a){const s=this,l=this.json,o=this.json.accessors[a];if(o.bufferView===void 0&&o.sparse===void 0){const c=Kf[o.type],d=zs[o.componentType],m=o.normalized===!0,p=new d(o.count*c);return Promise.resolve(new dt(p,c,m))}const f=[];return o.bufferView!==void 0?f.push(this.getDependency("bufferView",o.bufferView)):f.push(null),o.sparse!==void 0&&(f.push(this.getDependency("bufferView",o.sparse.indices.bufferView)),f.push(this.getDependency("bufferView",o.sparse.values.bufferView))),Promise.all(f).then(function(c){const d=c[0],m=Kf[o.type],p=zs[o.componentType],y=p.BYTES_PER_ELEMENT,v=y*m,g=o.byteOffset||0,T=o.bufferView!==void 0?l.bufferViews[o.bufferView].byteStride:void 0,_=o.normalized===!0;let w,x;if(T&&T!==v){const A=Math.floor(g/T),M="InterleavedBuffer:"+o.bufferView+":"+o.componentType+":"+A+":"+o.count;let E=s.cache.get(M);E||(w=new p(d,A*T,o.count*T/y),E=new aT(w,T/y),s.cache.add(M,E)),x=new xT(E,m,g%T/y,_)}else d===null?w=new p(o.count*m):w=new p(d,g,o.count*m),x=new dt(w,m,_);if(o.sparse!==void 0){const A=Kf.SCALAR,M=zs[o.sparse.indices.componentType],E=o.sparse.indices.byteOffset||0,C=o.sparse.values.byteOffset||0,D=new M(c[1],E,o.sparse.count*A),U=new p(c[2],C,o.sparse.count*m);d!==null&&(x=new dt(x.array.slice(),x.itemSize,x.normalized)),x.normalized=!1;for(let N=0,Y=D.length;N<Y;N++){const P=D[N];if(x.setX(P,U[N*m]),m>=2&&x.setY(P,U[N*m+1]),m>=3&&x.setZ(P,U[N*m+2]),m>=4&&x.setW(P,U[N*m+3]),m>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}x.normalized=_}return x})}loadTexture(a){const s=this.json,l=this.options,f=s.textures[a].source,c=s.images[f];let d=this.textureLoader;if(c.uri){const m=l.manager.getHandler(c.uri);m!==null&&(d=m)}return this.loadTextureImage(a,f,d)}loadTextureImage(a,s,l){const o=this,f=this.json,c=f.textures[a],d=f.images[s],m=(d.uri||d.bufferView)+":"+c.sampler;if(this.textureCache[m])return this.textureCache[m];const p=this.loadImageSource(s,l).then(function(y){y.flipY=!1,y.name=c.name||d.name||"",y.name===""&&typeof d.uri=="string"&&d.uri.startsWith("data:image/")===!1&&(y.name=d.uri);const g=(f.samplers||{})[c.sampler]||{};return y.magFilter=Cg[g.magFilter]||Ot,y.minFilter=Cg[g.minFilter]||wv,y.wrapS=Dg[g.wrapS]||bi,y.wrapT=Dg[g.wrapT]||bi,y.generateMipmaps=!y.isCompressedTexture&&y.minFilter!==He&&y.minFilter!==Ot,o.associations.set(y,{textures:a}),y}).catch(function(){return null});return this.textureCache[m]=p,p}loadImageSource(a,s){const l=this,o=this.json,f=this.options;if(this.sourceCache[a]!==void 0)return this.sourceCache[a].then(v=>v.clone());const c=o.images[a],d=self.URL||self.webkitURL;let m=c.uri||"",p=!1;if(c.bufferView!==void 0)m=l.getDependency("bufferView",c.bufferView).then(function(v){p=!0;const g=new Blob([v],{type:c.mimeType});return m=d.createObjectURL(g),m});else if(c.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+a+" is missing URI and bufferView");const y=Promise.resolve(m).then(function(v){return new Promise(function(g,T){let _=g;s.isImageBitmapLoader===!0&&(_=function(w){const x=new gg(w);x.needsUpdate=!0,g(x)}),s.load(jl.resolveURL(v,f.path),_,void 0,T)})}).then(function(v){return p===!0&&d.revokeObjectURL(m),Li(v,c),v.userData.mimeType=c.mimeType||Cx(c.uri),v}).catch(function(v){throw console.error("THREE.GLTFLoader: Couldn't load texture",m),v});return this.sourceCache[a]=y,y}assignTexture(a,s,l,o){const f=this;return this.getDependency("texture",l.index).then(function(c){if(!c)return null;if(l.texCoord!==void 0&&l.texCoord>0&&(c=c.clone(),c.channel=l.texCoord),f.extensions[ge.KHR_TEXTURE_TRANSFORM]){const d=l.extensions!==void 0?l.extensions[ge.KHR_TEXTURE_TRANSFORM]:void 0;if(d){const m=f.associations.get(c);c=f.extensions[ge.KHR_TEXTURE_TRANSFORM].extendTexture(c,d),f.associations.set(c,m)}}return o!==void 0&&(c.colorSpace=o),a[s]=c,c})}assignFinalMaterial(a){const s=a.geometry;let l=a.material;const o=s.attributes.tangent===void 0,f=s.attributes.color!==void 0,c=s.attributes.normal===void 0;if(a.isPoints){const d="PointsMaterial:"+l.uuid;let m=this.cache.get(d);m||(m=new cT,qf.prototype.copy.call(m,l),m.color.copy(l.color),m.map=l.map,m.sizeAttenuation=!1,this.cache.add(d,m)),l=m}else if(a.isLine){const d="LineBasicMaterial:"+l.uuid;let m=this.cache.get(d);m||(m=new uT,qf.prototype.copy.call(m,l),m.color.copy(l.color),m.map=l.map,this.cache.add(d,m)),l=m}if(o||f||c){let d="ClonedMaterial:"+l.uuid+":";o&&(d+="derivative-tangents:"),f&&(d+="vertex-colors:"),c&&(d+="flat-shading:");let m=this.cache.get(d);m||(m=l.clone(),f&&(m.vertexColors=!0),c&&(m.flatShading=!0),o&&(m.normalScale&&(m.normalScale.y*=-1),m.clearcoatNormalScale&&(m.clearcoatNormalScale.y*=-1)),this.cache.add(d,m),this.associations.set(m,this.associations.get(l))),l=m}a.material=l}getMaterialType(){return Zl}loadMaterial(a){const s=this,l=this.json,o=this.extensions,f=l.materials[a];let c;const d={},m=f.extensions||{},p=[];if(m[ge.KHR_MATERIALS_UNLIT]){const v=o[ge.KHR_MATERIALS_UNLIT];c=v.getMaterialType(),p.push(v.extendParams(d,f,s))}else{const v=f.pbrMetallicRoughness||{};if(d.color=new Kt(1,1,1),d.opacity=1,Array.isArray(v.baseColorFactor)){const g=v.baseColorFactor;d.color.setRGB(g[0],g[1],g[2],Ui),d.opacity=g[3]}v.baseColorTexture!==void 0&&p.push(s.assignTexture(d,"map",v.baseColorTexture,Ls)),d.metalness=v.metallicFactor!==void 0?v.metallicFactor:1,d.roughness=v.roughnessFactor!==void 0?v.roughnessFactor:1,v.metallicRoughnessTexture!==void 0&&(p.push(s.assignTexture(d,"metalnessMap",v.metallicRoughnessTexture)),p.push(s.assignTexture(d,"roughnessMap",v.metallicRoughnessTexture))),c=this._invokeOne(function(g){return g.getMaterialType&&g.getMaterialType(a)}),p.push(Promise.all(this._invokeAll(function(g){return g.extendMaterialParams&&g.extendMaterialParams(a,d)})))}f.doubleSided===!0&&(d.side=ic);const y=f.alphaMode||Zf.OPAQUE;if(y===Zf.BLEND?(d.transparent=!0,d.depthWrite=!1):(d.transparent=!1,y===Zf.MASK&&(d.alphaTest=f.alphaCutoff!==void 0?f.alphaCutoff:.5)),f.normalTexture!==void 0&&c!==Cs&&(p.push(s.assignTexture(d,"normalMap",f.normalTexture)),d.normalScale=new Me(1,1),f.normalTexture.scale!==void 0)){const v=f.normalTexture.scale;d.normalScale.set(v,v)}if(f.occlusionTexture!==void 0&&c!==Cs&&(p.push(s.assignTexture(d,"aoMap",f.occlusionTexture)),f.occlusionTexture.strength!==void 0&&(d.aoMapIntensity=f.occlusionTexture.strength)),f.emissiveFactor!==void 0&&c!==Cs){const v=f.emissiveFactor;d.emissive=new Kt().setRGB(v[0],v[1],v[2],Ui)}return f.emissiveTexture!==void 0&&c!==Cs&&p.push(s.assignTexture(d,"emissiveMap",f.emissiveTexture,Ls)),Promise.all(p).then(function(){const v=new c(d);return f.name&&(v.name=f.name),Li(v,f),s.associations.set(v,{materials:a}),f.extensions&&pa(o,v,f),v})}createUniqueName(a){const s=fT.sanitizeNodeName(a||"");return s in this.nodeNamesUsed?s+"_"+ ++this.nodeNamesUsed[s]:(this.nodeNamesUsed[s]=0,s)}loadGeometries(a){const s=this,l=this.extensions,o=this.primitiveCache;function f(d){return l[ge.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(d,s).then(function(m){return Og(m,d,s)})}const c=[];for(let d=0,m=a.length;d<m;d++){const p=a[d],y=Rx(p),v=o[y];if(v)c.push(v.promise);else{let g;p.extensions&&p.extensions[ge.KHR_DRACO_MESH_COMPRESSION]?g=f(p):g=Og(new ci,p,s),o[y]={primitive:p,promise:g},c.push(g)}}return Promise.all(c)}loadMesh(a){const s=this,l=this.json,o=this.extensions,f=l.meshes[a],c=f.primitives,d=[];for(let m=0,p=c.length;m<p;m++){const y=c[m].material===void 0?Ax(this.cache):this.getDependency("material",c[m].material);d.push(y)}return d.push(s.loadGeometries(c)),Promise.all(d).then(function(m){const p=m.slice(0,m.length-1),y=m[m.length-1],v=[];for(let T=0,_=y.length;T<_;T++){const w=y[T],x=c[T];let A;const M=p[T];if(x.mode===si.TRIANGLES||x.mode===si.TRIANGLE_STRIP||x.mode===si.TRIANGLE_FAN||x.mode===void 0)A=f.isSkinnedMesh===!0?new hT(w,M):new kt(w,M),A.isSkinnedMesh===!0&&A.normalizeSkinWeights(),x.mode===si.TRIANGLE_STRIP?A.geometry=Mg(A.geometry,xv):x.mode===si.TRIANGLE_FAN&&(A.geometry=Mg(A.geometry,ph));else if(x.mode===si.LINES)A=new dT(w,M);else if(x.mode===si.LINE_STRIP)A=new mT(w,M);else if(x.mode===si.LINE_LOOP)A=new pT(w,M);else if(x.mode===si.POINTS)A=new gT(w,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+x.mode);Object.keys(A.geometry.morphAttributes).length>0&&Mx(A,f),A.name=s.createUniqueName(f.name||"mesh_"+a),Li(A,f),x.extensions&&pa(o,A,x),s.assignFinalMaterial(A),v.push(A)}for(let T=0,_=v.length;T<_;T++)s.associations.set(v[T],{meshes:a,primitives:T});if(v.length===1)return f.extensions&&pa(o,v[0],f),v[0];const g=new it;f.extensions&&pa(o,g,f),s.associations.set(g,{meshes:a});for(let T=0,_=v.length;T<_;T++)g.add(v[T]);return g})}loadCamera(a){let s;const l=this.json.cameras[a],o=l[l.type];if(!o){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return l.type==="perspective"?s=new nc(We.radToDeg(o.yfov),o.aspectRatio||1,o.znear||1,o.zfar||2e6):l.type==="orthographic"&&(s=new Av(-o.xmag,o.xmag,o.ymag,-o.ymag,o.znear,o.zfar)),l.name&&(s.name=this.createUniqueName(l.name)),Li(s,l),Promise.resolve(s)}loadSkin(a){const s=this.json.skins[a],l=[];for(let o=0,f=s.joints.length;o<f;o++)l.push(this._loadNodeShallow(s.joints[o]));return s.inverseBindMatrices!==void 0?l.push(this.getDependency("accessor",s.inverseBindMatrices)):l.push(null),Promise.all(l).then(function(o){const f=o.pop(),c=o,d=[],m=[];for(let p=0,y=c.length;p<y;p++){const v=c[p];if(v){d.push(v);const g=new qe;f!==null&&g.fromArray(f.array,p*16),m.push(g)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',s.joints[p])}return new vT(d,m)})}loadAnimation(a){const s=this.json,l=this,o=s.animations[a],f=o.name?o.name:"animation_"+a,c=[],d=[],m=[],p=[],y=[];for(let v=0,g=o.channels.length;v<g;v++){const T=o.channels[v],_=o.samplers[T.sampler],w=T.target,x=w.node,A=o.parameters!==void 0?o.parameters[_.input]:_.input,M=o.parameters!==void 0?o.parameters[_.output]:_.output;w.node!==void 0&&(c.push(this.getDependency("node",x)),d.push(this.getDependency("accessor",A)),m.push(this.getDependency("accessor",M)),p.push(_),y.push(w))}return Promise.all([Promise.all(c),Promise.all(d),Promise.all(m),Promise.all(p),Promise.all(y)]).then(function(v){const g=v[0],T=v[1],_=v[2],w=v[3],x=v[4],A=[];for(let E=0,C=g.length;E<C;E++){const D=g[E],U=T[E],N=_[E],Y=w[E],P=x[E];if(D===void 0)continue;D.updateMatrix&&D.updateMatrix();const j=l._createAnimationTracks(D,U,N,Y,P);if(j)for(let X=0;X<j.length;X++)A.push(j[X])}const M=new yT(f,void 0,A);return Li(M,o),M})}createNodeMesh(a){const s=this.json,l=this,o=s.nodes[a];return o.mesh===void 0?null:l.getDependency("mesh",o.mesh).then(function(f){const c=l._getNodeRef(l.meshCache,o.mesh,f);return o.weights!==void 0&&c.traverse(function(d){if(d.isMesh)for(let m=0,p=o.weights.length;m<p;m++)d.morphTargetInfluences[m]=o.weights[m]}),c})}loadNode(a){const s=this.json,l=this,o=s.nodes[a],f=l._loadNodeShallow(a),c=[],d=o.children||[];for(let p=0,y=d.length;p<y;p++)c.push(l.getDependency("node",d[p]));const m=o.skin===void 0?Promise.resolve(null):l.getDependency("skin",o.skin);return Promise.all([f,Promise.all(c),m]).then(function(p){const y=p[0],v=p[1],g=p[2];g!==null&&y.traverse(function(T){T.isSkinnedMesh&&T.bind(g,Dx)});for(let T=0,_=v.length;T<_;T++)y.add(v[T]);return y})}_loadNodeShallow(a){const s=this.json,l=this.extensions,o=this;if(this.nodeCache[a]!==void 0)return this.nodeCache[a];const f=s.nodes[a],c=f.name?o.createUniqueName(f.name):"",d=[],m=o._invokeOne(function(p){return p.createNodeMesh&&p.createNodeMesh(a)});return m&&d.push(m),f.camera!==void 0&&d.push(o.getDependency("camera",f.camera).then(function(p){return o._getNodeRef(o.cameraCache,f.camera,p)})),o._invokeAll(function(p){return p.createNodeAttachment&&p.createNodeAttachment(a)}).forEach(function(p){d.push(p)}),this.nodeCache[a]=Promise.all(d).then(function(p){let y;if(f.isBone===!0?y=new bT:p.length>1?y=new it:p.length===1?y=p[0]:y=new tc,y!==p[0])for(let v=0,g=p.length;v<g;v++)y.add(p[v]);if(f.name&&(y.userData.name=f.name,y.name=c),Li(y,f),f.extensions&&pa(l,y,f),f.matrix!==void 0){const v=new qe;v.fromArray(f.matrix),y.applyMatrix4(v)}else f.translation!==void 0&&y.position.fromArray(f.translation),f.rotation!==void 0&&y.quaternion.fromArray(f.rotation),f.scale!==void 0&&y.scale.fromArray(f.scale);if(!o.associations.has(y))o.associations.set(y,{});else if(f.mesh!==void 0&&o.meshCache.refs[f.mesh]>1){const v=o.associations.get(y);o.associations.set(y,{...v})}return o.associations.get(y).nodes=a,y}),this.nodeCache[a]}loadScene(a){const s=this.extensions,l=this.json.scenes[a],o=this,f=new it;l.name&&(f.name=o.createUniqueName(l.name)),Li(f,l),l.extensions&&pa(s,f,l);const c=l.nodes||[],d=[];for(let m=0,p=c.length;m<p;m++)d.push(o.getDependency("node",c[m]));return Promise.all(d).then(function(m){for(let y=0,v=m.length;y<v;y++)f.add(m[y]);const p=y=>{const v=new Map;for(const[g,T]of o.associations)(g instanceof qf||g instanceof gg)&&v.set(g,T);return y.traverse(g=>{const T=o.associations.get(g);T!=null&&v.set(g,T)}),v};return o.associations=p(f),f})}_createAnimationTracks(a,s,l,o,f){const c=[],d=a.name?a.name:a.uuid,m=[];Hn[f.path]===Hn.weights?a.traverse(function(g){g.morphTargetInfluences&&m.push(g.name?g.name:g.uuid)}):m.push(d);let p;switch(Hn[f.path]){case Hn.weights:p=yg;break;case Hn.rotation:p=bg;break;case Hn.translation:case Hn.scale:p=vg;break;default:l.itemSize===1?p=yg:p=vg;break}const y=o.interpolation!==void 0?wx[o.interpolation]:Ev,v=this._getArrayFromAccessor(l);for(let g=0,T=m.length;g<T;g++){const _=new p(m[g]+"."+Hn[f.path],s.array,v,y);o.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),c.push(_)}return c}_getArrayFromAccessor(a){let s=a.array;if(a.normalized){const l=xh(s.constructor),o=new Float32Array(s.length);for(let f=0,c=s.length;f<c;f++)o[f]=s[f]*l;s=o}return s}_createCubicSplineTrackInterpolant(a){a.createInterpolant=function(l){const o=this instanceof bg?_x:Bv;return new o(this.times,this.values,this.getValueSize()/3,l)},a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Nx(h,a,s){const l=a.attributes,o=new zt;if(l.POSITION!==void 0){const d=s.json.accessors[l.POSITION],m=d.min,p=d.max;if(m!==void 0&&p!==void 0){if(o.set(new Q(m[0],m[1],m[2]),new Q(p[0],p[1],p[2])),d.normalized){const y=xh(zs[d.componentType]);o.min.multiplyScalar(y),o.max.multiplyScalar(y)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const f=a.targets;if(f!==void 0){const d=new Q,m=new Q;for(let p=0,y=f.length;p<y;p++){const v=f[p];if(v.POSITION!==void 0){const g=s.json.accessors[v.POSITION],T=g.min,_=g.max;if(T!==void 0&&_!==void 0){if(m.setX(Math.max(Math.abs(T[0]),Math.abs(_[0]))),m.setY(Math.max(Math.abs(T[1]),Math.abs(_[1]))),m.setZ(Math.max(Math.abs(T[2]),Math.abs(_[2]))),g.normalized){const w=xh(zs[g.componentType]);m.multiplyScalar(w)}d.max(m)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}o.expandByVector(d)}h.boundingBox=o;const c=new _T;o.getCenter(c.center),c.radius=o.min.distanceTo(o.max)/2,h.boundingSphere=c}function Og(h,a,s){const l=a.attributes,o=[];function f(c,d){return s.getDependency("accessor",c).then(function(m){h.setAttribute(d,m)})}for(const c in l){const d=Th[c]||c.toLowerCase();d in h.attributes||o.push(f(l[c],d))}if(a.indices!==void 0&&!h.index){const c=s.getDependency("accessor",a.indices).then(function(d){h.setIndex(d)});o.push(c)}return Tg.workingColorSpace!==Ui&&"COLOR_0"in l&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Tg.workingColorSpace}" not supported.`),Li(h,a),Nx(h,a,s),Promise.all(o).then(function(){return a.targets!==void 0?Ex(h,a.targets,s):h})}const Ng={type:"change"},Hh={type:"start"},Uv={type:"end"},Ro=new AT,zg=new Lh,zx=Math.cos(70*We.DEG2RAD),Qe=new Q,Ct=2*Math.PI,Re={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Wf=1e-6;class Lx extends wT{constructor(a,s=null){super(a,s),this.state=Re.NONE,this.target=new Q,this.cursor=new Q,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ns.ROTATE,MIDDLE:Ns.DOLLY,RIGHT:Ns.PAN},this.touches={ONE:Ds.ROTATE,TWO:Ds.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new Q,this._lastQuaternion=new Kl,this._lastTargetPosition=new Q,this._quat=new Kl().setFromUnitVectors(a.up,new Q(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new vh,this._sphericalDelta=new vh,this._scale=1,this._panOffset=new Q,this._rotateStart=new Me,this._rotateEnd=new Me,this._rotateDelta=new Me,this._panStart=new Me,this._panEnd=new Me,this._panDelta=new Me,this._dollyStart=new Me,this._dollyEnd=new Me,this._dollyDelta=new Me,this._dollyDirection=new Q,this._mouse=new Me,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Ux.bind(this),this._onPointerDown=Bx.bind(this),this._onPointerUp=Hx.bind(this),this._onContextMenu=jx.bind(this),this._onMouseWheel=Gx.bind(this),this._onKeyDown=Vx.bind(this),this._onTouchStart=Px.bind(this),this._onTouchMove=qx.bind(this),this._onMouseDown=Ix.bind(this),this._onMouseMove=Fx.bind(this),this._interceptControlDown=kx.bind(this),this._interceptControlUp=Yx.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(a){super.connect(a),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(a){a.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=a}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Ng),this.update(),this.state=Re.NONE}update(a=null){const s=this.object.position;Qe.copy(s).sub(this.target),Qe.applyQuaternion(this._quat),this._spherical.setFromVector3(Qe),this.autoRotate&&this.state===Re.NONE&&this._rotateLeft(this._getAutoRotationAngle(a)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let l=this.minAzimuthAngle,o=this.maxAzimuthAngle;isFinite(l)&&isFinite(o)&&(l<-Math.PI?l+=Ct:l>Math.PI&&(l-=Ct),o<-Math.PI?o+=Ct:o>Math.PI&&(o-=Ct),l<=o?this._spherical.theta=Math.max(l,Math.min(o,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(l+o)/2?Math.max(l,this._spherical.theta):Math.min(o,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let f=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const c=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),f=c!=this._spherical.radius}if(Qe.setFromSpherical(this._spherical),Qe.applyQuaternion(this._quatInverse),s.copy(this.target).add(Qe),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let c=null;if(this.object.isPerspectiveCamera){const d=Qe.length();c=this._clampDistance(d*this._scale);const m=d-c;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),f=!!m}else if(this.object.isOrthographicCamera){const d=new Q(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),f=m!==this.object.zoom;const p=new Q(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(d),this.object.updateMatrixWorld(),c=Qe.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;c!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(c).add(this.object.position):(Ro.origin.copy(this.object.position),Ro.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ro.direction))<zx?this.object.lookAt(this.target):(zg.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ro.intersectPlane(zg,this.target))))}else if(this.object.isOrthographicCamera){const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),c!==this.object.zoom&&(this.object.updateProjectionMatrix(),f=!0)}return this._scale=1,this._performCursorZoom=!1,f||this._lastPosition.distanceToSquared(this.object.position)>Wf||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Wf||this._lastTargetPosition.distanceToSquared(this.target)>Wf?(this.dispatchEvent(Ng),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(a){return a!==null?Ct/60*this.autoRotateSpeed*a:Ct/60/60*this.autoRotateSpeed}_getZoomScale(a){const s=Math.abs(a*.01);return Math.pow(.95,this.zoomSpeed*s)}_rotateLeft(a){this._sphericalDelta.theta-=a}_rotateUp(a){this._sphericalDelta.phi-=a}_panLeft(a,s){Qe.setFromMatrixColumn(s,0),Qe.multiplyScalar(-a),this._panOffset.add(Qe)}_panUp(a,s){this.screenSpacePanning===!0?Qe.setFromMatrixColumn(s,1):(Qe.setFromMatrixColumn(s,0),Qe.crossVectors(this.object.up,Qe)),Qe.multiplyScalar(a),this._panOffset.add(Qe)}_pan(a,s){const l=this.domElement;if(this.object.isPerspectiveCamera){const o=this.object.position;Qe.copy(o).sub(this.target);let f=Qe.length();f*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*a*f/l.clientHeight,this.object.matrix),this._panUp(2*s*f/l.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(a*(this.object.right-this.object.left)/this.object.zoom/l.clientWidth,this.object.matrix),this._panUp(s*(this.object.top-this.object.bottom)/this.object.zoom/l.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(a){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=a:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(a){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=a:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(a,s){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const l=this.domElement.getBoundingClientRect(),o=a-l.left,f=s-l.top,c=l.width,d=l.height;this._mouse.x=o/c*2-1,this._mouse.y=-(f/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(a){return Math.max(this.minDistance,Math.min(this.maxDistance,a))}_handleMouseDownRotate(a){this._rotateStart.set(a.clientX,a.clientY)}_handleMouseDownDolly(a){this._updateZoomParameters(a.clientX,a.clientX),this._dollyStart.set(a.clientX,a.clientY)}_handleMouseDownPan(a){this._panStart.set(a.clientX,a.clientY)}_handleMouseMoveRotate(a){this._rotateEnd.set(a.clientX,a.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const s=this.domElement;this._rotateLeft(Ct*this._rotateDelta.x/s.clientHeight),this._rotateUp(Ct*this._rotateDelta.y/s.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(a){this._dollyEnd.set(a.clientX,a.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(a){this._panEnd.set(a.clientX,a.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(a){this._updateZoomParameters(a.clientX,a.clientY),a.deltaY<0?this._dollyIn(this._getZoomScale(a.deltaY)):a.deltaY>0&&this._dollyOut(this._getZoomScale(a.deltaY)),this.update()}_handleKeyDown(a){let s=!1;switch(a.code){case this.keys.UP:a.ctrlKey||a.metaKey||a.shiftKey?this.enableRotate&&this._rotateUp(Ct*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),s=!0;break;case this.keys.BOTTOM:a.ctrlKey||a.metaKey||a.shiftKey?this.enableRotate&&this._rotateUp(-Ct*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),s=!0;break;case this.keys.LEFT:a.ctrlKey||a.metaKey||a.shiftKey?this.enableRotate&&this._rotateLeft(Ct*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),s=!0;break;case this.keys.RIGHT:a.ctrlKey||a.metaKey||a.shiftKey?this.enableRotate&&this._rotateLeft(-Ct*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),s=!0;break}s&&(a.preventDefault(),this.update())}_handleTouchStartRotate(a){if(this._pointers.length===1)this._rotateStart.set(a.pageX,a.pageY);else{const s=this._getSecondPointerPosition(a),l=.5*(a.pageX+s.x),o=.5*(a.pageY+s.y);this._rotateStart.set(l,o)}}_handleTouchStartPan(a){if(this._pointers.length===1)this._panStart.set(a.pageX,a.pageY);else{const s=this._getSecondPointerPosition(a),l=.5*(a.pageX+s.x),o=.5*(a.pageY+s.y);this._panStart.set(l,o)}}_handleTouchStartDolly(a){const s=this._getSecondPointerPosition(a),l=a.pageX-s.x,o=a.pageY-s.y,f=Math.sqrt(l*l+o*o);this._dollyStart.set(0,f)}_handleTouchStartDollyPan(a){this.enableZoom&&this._handleTouchStartDolly(a),this.enablePan&&this._handleTouchStartPan(a)}_handleTouchStartDollyRotate(a){this.enableZoom&&this._handleTouchStartDolly(a),this.enableRotate&&this._handleTouchStartRotate(a)}_handleTouchMoveRotate(a){if(this._pointers.length==1)this._rotateEnd.set(a.pageX,a.pageY);else{const l=this._getSecondPointerPosition(a),o=.5*(a.pageX+l.x),f=.5*(a.pageY+l.y);this._rotateEnd.set(o,f)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const s=this.domElement;this._rotateLeft(Ct*this._rotateDelta.x/s.clientHeight),this._rotateUp(Ct*this._rotateDelta.y/s.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(a){if(this._pointers.length===1)this._panEnd.set(a.pageX,a.pageY);else{const s=this._getSecondPointerPosition(a),l=.5*(a.pageX+s.x),o=.5*(a.pageY+s.y);this._panEnd.set(l,o)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(a){const s=this._getSecondPointerPosition(a),l=a.pageX-s.x,o=a.pageY-s.y,f=Math.sqrt(l*l+o*o);this._dollyEnd.set(0,f),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const c=(a.pageX+s.x)*.5,d=(a.pageY+s.y)*.5;this._updateZoomParameters(c,d)}_handleTouchMoveDollyPan(a){this.enableZoom&&this._handleTouchMoveDolly(a),this.enablePan&&this._handleTouchMovePan(a)}_handleTouchMoveDollyRotate(a){this.enableZoom&&this._handleTouchMoveDolly(a),this.enableRotate&&this._handleTouchMoveRotate(a)}_addPointer(a){this._pointers.push(a.pointerId)}_removePointer(a){delete this._pointerPositions[a.pointerId];for(let s=0;s<this._pointers.length;s++)if(this._pointers[s]==a.pointerId){this._pointers.splice(s,1);return}}_isTrackingPointer(a){for(let s=0;s<this._pointers.length;s++)if(this._pointers[s]==a.pointerId)return!0;return!1}_trackPointer(a){let s=this._pointerPositions[a.pointerId];s===void 0&&(s=new Me,this._pointerPositions[a.pointerId]=s),s.set(a.pageX,a.pageY)}_getSecondPointerPosition(a){const s=a.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[s]}_customWheelEvent(a){const s=a.deltaMode,l={clientX:a.clientX,clientY:a.clientY,deltaY:a.deltaY};switch(s){case 1:l.deltaY*=16;break;case 2:l.deltaY*=100;break}return a.ctrlKey&&!this._controlActive&&(l.deltaY*=10),l}}function Bx(h){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(h.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(h)&&(this._addPointer(h),h.pointerType==="touch"?this._onTouchStart(h):this._onMouseDown(h)))}function Ux(h){this.enabled!==!1&&(h.pointerType==="touch"?this._onTouchMove(h):this._onMouseMove(h))}function Hx(h){switch(this._removePointer(h),this._pointers.length){case 0:this.domElement.releasePointerCapture(h.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Uv),this.state=Re.NONE;break;case 1:const a=this._pointers[0],s=this._pointerPositions[a];this._onTouchStart({pointerId:a,pageX:s.x,pageY:s.y});break}}function Ix(h){let a;switch(h.button){case 0:a=this.mouseButtons.LEFT;break;case 1:a=this.mouseButtons.MIDDLE;break;case 2:a=this.mouseButtons.RIGHT;break;default:a=-1}switch(a){case Ns.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(h),this.state=Re.DOLLY;break;case Ns.ROTATE:if(h.ctrlKey||h.metaKey||h.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(h),this.state=Re.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(h),this.state=Re.ROTATE}break;case Ns.PAN:if(h.ctrlKey||h.metaKey||h.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(h),this.state=Re.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(h),this.state=Re.PAN}break;default:this.state=Re.NONE}this.state!==Re.NONE&&this.dispatchEvent(Hh)}function Fx(h){switch(this.state){case Re.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(h);break;case Re.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(h);break;case Re.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(h);break}}function Gx(h){this.enabled===!1||this.enableZoom===!1||this.state!==Re.NONE||(h.preventDefault(),this.dispatchEvent(Hh),this._handleMouseWheel(this._customWheelEvent(h)),this.dispatchEvent(Uv))}function Vx(h){this.enabled!==!1&&this._handleKeyDown(h)}function Px(h){switch(this._trackPointer(h),this._pointers.length){case 1:switch(this.touches.ONE){case Ds.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(h),this.state=Re.TOUCH_ROTATE;break;case Ds.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(h),this.state=Re.TOUCH_PAN;break;default:this.state=Re.NONE}break;case 2:switch(this.touches.TWO){case Ds.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(h),this.state=Re.TOUCH_DOLLY_PAN;break;case Ds.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(h),this.state=Re.TOUCH_DOLLY_ROTATE;break;default:this.state=Re.NONE}break;default:this.state=Re.NONE}this.state!==Re.NONE&&this.dispatchEvent(Hh)}function qx(h){switch(this._trackPointer(h),this.state){case Re.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(h),this.update();break;case Re.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(h),this.update();break;case Re.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(h),this.update();break;case Re.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(h),this.update();break;default:this.state=Re.NONE}}function jx(h){this.enabled!==!1&&h.preventDefault()}function kx(h){h.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Yx(h){h.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class Xx extends Bh{constructor(){super();const a=new Mv;a.deleteAttribute("uv");const s=new Zl({side:Uh}),l=new Zl,o=new zh(16777215,900,28,2);o.position.set(.418,16.199,.3),this.add(o);const f=new kt(a,s);f.position.set(-.757,13.219,.717),f.scale.set(31.713,28.305,28.591),this.add(f);const c=new _v(a,l,6),d=new tc;d.position.set(-10.906,2.009,1.846),d.rotation.set(0,-.195,0),d.scale.set(2.328,7.905,4.651),d.updateMatrix(),c.setMatrixAt(0,d.matrix),d.position.set(-5.607,-.754,-.758),d.rotation.set(0,.994,0),d.scale.set(1.97,1.534,3.955),d.updateMatrix(),c.setMatrixAt(1,d.matrix),d.position.set(6.167,.857,7.803),d.rotation.set(0,.561,0),d.scale.set(3.927,6.285,3.687),d.updateMatrix(),c.setMatrixAt(2,d.matrix),d.position.set(-2.017,.018,6.124),d.rotation.set(0,.333,0),d.scale.set(2.002,4.566,2.064),d.updateMatrix(),c.setMatrixAt(3,d.matrix),d.position.set(2.291,-.756,-2.621),d.rotation.set(0,-.286,0),d.scale.set(1.546,1.552,1.496),d.updateMatrix(),c.setMatrixAt(4,d.matrix),d.position.set(-2.193,-.369,-5.547),d.rotation.set(0,.516,0),d.scale.set(3.875,3.487,2.986),d.updateMatrix(),c.setMatrixAt(5,d.matrix),this.add(c);const m=new kt(a,gs(50));m.position.set(-16.116,14.37,8.208),m.scale.set(.1,2.428,2.739),this.add(m);const p=new kt(a,gs(50));p.position.set(-16.109,18.021,-8.207),p.scale.set(.1,2.425,2.751),this.add(p);const y=new kt(a,gs(17));y.position.set(14.904,12.198,-1.832),y.scale.set(.15,4.265,6.331),this.add(y);const v=new kt(a,gs(43));v.position.set(-.462,8.89,14.52),v.scale.set(4.38,5.441,.088),this.add(v);const g=new kt(a,gs(20));g.position.set(3.235,11.486,-12.541),g.scale.set(2.5,2,.1),this.add(g);const T=new kt(a,gs(100));T.position.set(0,20,0),T.scale.set(1,.1,1),this.add(T)}dispose(){const a=new Set;this.traverse(s=>{s.isMesh&&(a.add(s.geometry),a.add(s.material))});for(const s of a)s.dispose()}}function gs(h){return new ET({color:0,emissive:16777215,emissiveIntensity:h})}const Kx=/^(FLOOR_|CEILING_)|(?:FloorLight|MuseumTitle|English|Rigging|Title|Year|FrontText|CoffeeText)/i,Lg=h=>h.code&&h.code!=="Unidentified"?h.code:{w:"KeyW",a:"KeyA",s:"KeyS",d:"KeyD"}[h.key?.toLowerCase()]||h.key,Zx=new Set(["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"]);function Bg(h,a,s){let l=!1;for(let o=0,f=h.length-1;o<h.length;f=o++){const[c,d]=h[o],[m,p]=h[f];d>s!=p>s&&a<(m-c)*(s-d)/(p-d)+c&&(l=!l)}return l}class Qx{constructor(a,s,l,o,f){this.camera=a,this.canvas=s,this.config=o,this.onState=f,this.keys=new Set,this.joystick={x:0,y:0},this.lookJoystick={x:0,y:0},this.floorY=o.floorY??0,this.eyeHeight=1.65,this.radius=.26,this.speed=We.clamp(Number(o.walkSpeed)||1.7,1.6,1.8),this.colliders=[],this.furnitureVolumes=[],l.updateMatrixWorld(!0),l.traverse(c=>{if(!c.isMesh||Kx.test(c.name))return;const d=new zt().setFromObject(c);if(d.max.y<this.floorY+.18||d.min.y>this.floorY+1.9)return;const m=d.getSize(new Q);m.y<.4&&m.x>.55&&m.z>.55&&this.furnitureVolumes.push({bounds:d,object:c}),!(m.y<.08)&&(c.userData.walkBounds=d,this.colliders.push(c))}),this.ray=new MT,this.ray.near=0,this.ray.far=1,this.rayDir=new Q,this.rayOrigin=new Q,this.euler=new RT(0,0,0,"YXZ"),this.blockedSteps=0,this.onKeyDown=c=>{if(!this.active)return;const d=Lg(c);if(this.lastKey={key:c.key,code:c.code,resolved:d},d==="Escape"){this.disable();return}if(/^Digit[1-9]$/.test(d)){c.preventDefault(),this.onState({jumpRoom:Number(d.slice(-1))-1});return}Zx.has(d)&&(c.preventDefault(),this.keys.add(d),c.repeat||this.update(1/60))},this.onKeyUp=c=>{this.keys.delete(Lg(c))},this.onBlur=()=>{this.keys.clear(),this.joystick={x:0,y:0},this.lookJoystick={x:0,y:0},this.lookPointer=null},this.onVisibility=()=>{document.hidden&&this.onBlur()},this.onMouse=c=>{this.active&&document.pointerLockElement===s&&this.look(c.movementX*.0022,c.movementY*.0022)},this.onLock=()=>{const c=document.pointerLockElement===s;this.onState({locked:c}),this.hadLock&&!c&&this.active&&this.disable(),this.hadLock=c},this.onPointerDown=c=>{!this.active||document.pointerLockElement===s||this.mobile&&c.clientX<s.getBoundingClientRect().left+s.clientWidth*.38||(this.lookPointer={id:c.pointerId,x:c.clientX,y:c.clientY},s.setPointerCapture(c.pointerId))},this.onPointerMove=c=>{!this.active||!this.lookPointer||c.pointerId!==this.lookPointer.id||(this.look((c.clientX-this.lookPointer.x)*.0045,(c.clientY-this.lookPointer.y)*.0045),this.lookPointer.x=c.clientX,this.lookPointer.y=c.clientY)},this.onPointerUp=c=>{this.lookPointer?.id===c.pointerId&&(this.lookPointer=null)},window.addEventListener("keydown",this.onKeyDown),window.addEventListener("keyup",this.onKeyUp),window.addEventListener("blur",this.onBlur),document.addEventListener("visibilitychange",this.onVisibility),document.addEventListener("mousemove",this.onMouse),document.addEventListener("pointerlockchange",this.onLock),s.addEventListener("pointerdown",this.onPointerDown),s.addEventListener("pointermove",this.onPointerMove),s.addEventListener("pointerup",this.onPointerUp),s.addEventListener("pointercancel",this.onPointerUp),s.addEventListener("lostpointercapture",this.onPointerUp)}enable(a){this.active=!0,this.mobile=window.matchMedia("(pointer: coarse)").matches||innerWidth<=700,this.setView(a),this.onState({firstPerson:!0,locked:!1})}requestLock(){try{this.canvas.requestPointerLock()?.catch?.(()=>this.onState({locked:!1}))}catch{this.onState({locked:!1})}}setView(a){if(!a?.position||!a?.target)return;this.camera.position.set(a.position[0],this.floorY+this.eyeHeight,a.position[2]);const s=new Q(...a.target).sub(this.camera.position).normalize();this.yaw=Math.atan2(-s.x,-s.z),this.pitch=Math.asin(s.y),this.camera.fov=a.fov||60,this.camera.updateProjectionMatrix(),this.look(0,0),this.onBlur()}look(a,s){this.yaw-=a,this.pitch=We.clamp(this.pitch-s,-1.32,1.32),this.euler.set(this.pitch,this.yaw,0),this.camera.quaternion.setFromEuler(this.euler)}visible(a){let s=a,l=!1,o=!1;for(;s;)s.name.startsWith("WALL_")&&(o=!0),s.visible||(l=!0),s=s.parent;return!l||o}inside(a,s){const l=this.config.walkablePolygon;return(l?.length?Bg(l,a,s):a>=this.config.defaultBounds.min[0]+this.radius&&a<=this.config.defaultBounds.max[0]-this.radius&&s>=this.config.defaultBounds.min[2]+this.radius&&s<=this.config.defaultBounds.max[2]-this.radius)&&!(this.config.walkableHoles||[]).some(f=>f?.length>=3&&Bg(f,a,s))}canMove(a,s){for(let d=0;d<8;d++){const m=d*Math.PI/4;if(!this.inside(s.x+Math.cos(m)*this.radius,s.z+Math.sin(m)*this.radius))return!1}for(const d of this.furnitureVolumes){if(!this.visible(d.object))continue;const m=d.bounds;if(s.x>m.min.x-this.radius&&s.x<m.max.x+this.radius&&s.z>m.min.z-this.radius&&s.z<m.max.z+this.radius)return!1}const l=s.x-a.x,o=s.z-a.z,f=Math.hypot(l,o);if(f<1e-5)return!0;this.rayDir.set(l/f,0,o/f),this.ray.far=f+this.radius;const c=this.colliders.filter(d=>{if(!this.visible(d))return!1;const m=d.userData.walkBounds,p=this.radius+f+.05;return a.x>=m.min.x-p&&a.x<=m.max.x+p&&a.z>=m.min.z-p&&a.z<=m.max.z+p});for(const d of[.25,.85,1.5])for(const m of[-this.radius*.8,0,this.radius*.8])if(this.rayOrigin.set(a.x-this.rayDir.z*m,this.floorY+d,a.z+this.rayDir.x*m),this.ray.set(this.rayOrigin,this.rayDir),this.ray.intersectObjects(c,!1).length)return!1;return!0}update(a){if(!this.active)return;const s=Math.min(a,.04);(this.lookJoystick.x||this.lookJoystick.y)&&this.look(this.lookJoystick.x*s*1.35,this.lookJoystick.y*s*1.1);let l=Number(this.keys.has("KeyD")||this.keys.has("ArrowRight"))-Number(this.keys.has("KeyA")||this.keys.has("ArrowLeft"))+this.joystick.x,o=Number(this.keys.has("KeyW")||this.keys.has("ArrowUp"))-Number(this.keys.has("KeyS")||this.keys.has("ArrowDown"))-this.joystick.y;const f=Math.hypot(l,o);f>1&&(l/=f,o/=f);const c=s*this.speed,d=(Math.cos(this.yaw)*l-Math.sin(this.yaw)*o)*c,m=(-Math.sin(this.yaw)*l-Math.cos(this.yaw)*o)*c,p=this.camera.position,y=p.clone().add(new Q(d,0,m));if(this.canMove(p,y))p.copy(y);else{this.blockedSteps+=1;const v=p.clone().add(new Q(d,0,0));Math.abs(d)>1e-5&&this.canMove(p,v)&&p.copy(v);const g=p.clone().add(new Q(0,0,m));Math.abs(m)>1e-5&&this.canMove(p,g)&&p.copy(g)}this.camera.position.y=this.floorY+this.eyeHeight}disable(){this.active&&(this.active=!1,this.onBlur(),this.onState({firstPerson:!1,locked:!1}),document.pointerLockElement===this.canvas&&document.exitPointerLock())}dispose(){this.disable(),window.removeEventListener("keydown",this.onKeyDown),window.removeEventListener("keyup",this.onKeyUp),window.removeEventListener("blur",this.onBlur),document.removeEventListener("visibilitychange",this.onVisibility),document.removeEventListener("mousemove",this.onMouse),document.removeEventListener("pointerlockchange",this.onLock),this.canvas.removeEventListener("pointerdown",this.onPointerDown),this.canvas.removeEventListener("pointermove",this.onPointerMove),this.canvas.removeEventListener("pointerup",this.onPointerUp),this.canvas.removeEventListener("pointercancel",this.onPointerUp),this.canvas.removeEventListener("lostpointercapture",this.onPointerUp)}}const Hv=0,Wx=1,Iv=2,Ug=2,Jf=1.25,Hg=1,Vn=32,sc=65535,Jx=Math.pow(2,-24),$f=Symbol("SKIP_GENERATION");function Fv(h){return h.index?h.index.count:h.attributes.position.count}function qn(h){return Fv(h)/3}function Gv(h,a=ArrayBuffer){return h>65535?new Uint32Array(new a(4*h)):new Uint16Array(new a(2*h))}function $x(h,a){if(!h.index){const s=h.attributes.position.count,l=a.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,o=Gv(s,l);h.setIndex(new dt(o,1));for(let f=0;f<s;f++)o[f]=f}}function Vv(h,a){const s=qn(h),l=a||h.drawRange,o=l.start/3,f=(l.start+l.count)/3,c=Math.max(0,o),d=Math.min(s,f)-c;return[{offset:Math.floor(c),count:Math.floor(d)}]}function Pv(h,a){if(!h.groups||!h.groups.length)return Vv(h,a);const s=[],l=new Set,o=a||h.drawRange,f=o.start/3,c=(o.start+o.count)/3;for(const m of h.groups){const p=m.start/3,y=(m.start+m.count)/3;l.add(Math.max(f,p)),l.add(Math.min(c,y))}const d=Array.from(l.values()).sort((m,p)=>m-p);for(let m=0;m<d.length-1;m++){const p=d[m],y=d[m+1];s.push({offset:Math.floor(p),count:Math.floor(y-p)})}return s}function eS(h,a){const s=qn(h),l=Pv(h,a).sort((c,d)=>c.offset-d.offset),o=l[l.length-1];o.count=Math.min(s-o.offset,o.count);let f=0;return l.forEach(({count:c})=>f+=c),s!==f}function eh(h,a,s,l,o){let f=1/0,c=1/0,d=1/0,m=-1/0,p=-1/0,y=-1/0,v=1/0,g=1/0,T=1/0,_=-1/0,w=-1/0,x=-1/0;for(let A=a*6,M=(a+s)*6;A<M;A+=6){const E=h[A+0],C=h[A+1],D=E-C,U=E+C;D<f&&(f=D),U>m&&(m=U),E<v&&(v=E),E>_&&(_=E);const N=h[A+2],Y=h[A+3],P=N-Y,j=N+Y;P<c&&(c=P),j>p&&(p=j),N<g&&(g=N),N>w&&(w=N);const X=h[A+4],G=h[A+5],Z=X-G,W=X+G;Z<d&&(d=Z),W>y&&(y=W),X<T&&(T=X),X>x&&(x=X)}l[0]=f,l[1]=c,l[2]=d,l[3]=m,l[4]=p,l[5]=y,o[0]=v,o[1]=g,o[2]=T,o[3]=_,o[4]=w,o[5]=x}function tS(h,a=null,s=null,l=null){const o=h.attributes.position,f=h.index?h.index.array:null,c=qn(h),d=o.normalized;let m;a===null?m=new Float32Array(c*6):m=a,s=s||0,l=l||c;const p=o.array,y=o.offset||0;let v=3;o.isInterleavedBufferAttribute&&(v=o.data.stride);const g=["getX","getY","getZ"];for(let T=s;T<s+l;T++){const _=T*3,w=T*6;let x=_+0,A=_+1,M=_+2;f&&(x=f[x],A=f[A],M=f[M]),d||(x=x*v+y,A=A*v+y,M=M*v+y);for(let E=0;E<3;E++){let C,D,U;d?(C=o[g[E]](x),D=o[g[E]](A),U=o[g[E]](M)):(C=p[x+E],D=p[A+E],U=p[M+E]);let N=C;D<N&&(N=D),U<N&&(N=U);let Y=C;D>Y&&(Y=D),U>Y&&(Y=U);const P=(Y-N)/2,j=E*2;m[w+j+0]=N+P,m[w+j+1]=P+(Math.abs(N)+P)*Jx}}return m}function Ve(h,a,s){return s.min.x=a[h],s.min.y=a[h+1],s.min.z=a[h+2],s.max.x=a[h+3],s.max.y=a[h+4],s.max.z=a[h+5],s}function Ig(h){let a=-1,s=-1/0;for(let l=0;l<3;l++){const o=h[l+3]-h[l];o>s&&(s=o,a=l)}return a}function Fg(h,a){a.set(h)}function Gg(h,a,s){let l,o;for(let f=0;f<3;f++){const c=f+3;l=h[f],o=a[f],s[f]=l<o?l:o,l=h[c],o=a[c],s[c]=l>o?l:o}}function Co(h,a,s){for(let l=0;l<3;l++){const o=a[h+2*l],f=a[h+2*l+1],c=o-f,d=o+f;c<s[l]&&(s[l]=c),d>s[l+3]&&(s[l+3]=d)}}function Bl(h){const a=h[3]-h[0],s=h[4]-h[1],l=h[5]-h[2];return 2*(a*s+s*l+l*a)}const en=32,iS=(h,a)=>h.candidate-a.candidate,In=new Array(en).fill().map(()=>({count:0,bounds:new Float32Array(6),rightCacheBounds:new Float32Array(6),leftCacheBounds:new Float32Array(6),candidate:0})),Do=new Float32Array(6);function nS(h,a,s,l,o,f){let c=-1,d=0;if(f===Hv)c=Ig(a),c!==-1&&(d=(a[c]+a[c+3])/2);else if(f===Wx)c=Ig(h),c!==-1&&(d=aS(s,l,o,c));else if(f===Iv){const m=Bl(h);let p=Jf*o;const y=l*6,v=(l+o)*6;for(let g=0;g<3;g++){const T=a[g],x=(a[g+3]-T)/en;if(o<en/4){const A=[...In];A.length=o;let M=0;for(let C=y;C<v;C+=6,M++){const D=A[M];D.candidate=s[C+2*g],D.count=0;const{bounds:U,leftCacheBounds:N,rightCacheBounds:Y}=D;for(let P=0;P<3;P++)Y[P]=1/0,Y[P+3]=-1/0,N[P]=1/0,N[P+3]=-1/0,U[P]=1/0,U[P+3]=-1/0;Co(C,s,U)}A.sort(iS);let E=o;for(let C=0;C<E;C++){const D=A[C];for(;C+1<E&&A[C+1].candidate===D.candidate;)A.splice(C+1,1),E--}for(let C=y;C<v;C+=6){const D=s[C+2*g];for(let U=0;U<E;U++){const N=A[U];D>=N.candidate?Co(C,s,N.rightCacheBounds):(Co(C,s,N.leftCacheBounds),N.count++)}}for(let C=0;C<E;C++){const D=A[C],U=D.count,N=o-D.count,Y=D.leftCacheBounds,P=D.rightCacheBounds;let j=0;U!==0&&(j=Bl(Y)/m);let X=0;N!==0&&(X=Bl(P)/m);const G=Hg+Jf*(j*U+X*N);G<p&&(c=g,p=G,d=D.candidate)}}else{for(let E=0;E<en;E++){const C=In[E];C.count=0,C.candidate=T+x+E*x;const D=C.bounds;for(let U=0;U<3;U++)D[U]=1/0,D[U+3]=-1/0}for(let E=y;E<v;E+=6){let U=~~((s[E+2*g]-T)/x);U>=en&&(U=en-1);const N=In[U];N.count++,Co(E,s,N.bounds)}const A=In[en-1];Fg(A.bounds,A.rightCacheBounds);for(let E=en-2;E>=0;E--){const C=In[E],D=In[E+1];Gg(C.bounds,D.rightCacheBounds,C.rightCacheBounds)}let M=0;for(let E=0;E<en-1;E++){const C=In[E],D=C.count,U=C.bounds,Y=In[E+1].rightCacheBounds;D!==0&&(M===0?Fg(U,Do):Gg(U,Do,Do)),M+=D;let P=0,j=0;M!==0&&(P=Bl(Do)/m);const X=o-M;X!==0&&(j=Bl(Y)/m);const G=Hg+Jf*(P*M+j*X);G<p&&(c=g,p=G,d=C.candidate)}}}}else console.warn(`MeshBVH: Invalid build strategy value ${f} used.`);return{axis:c,pos:d}}function aS(h,a,s,l){let o=0;for(let f=a,c=a+s;f<c;f++)o+=h[f*6+l*2];return o/s}class th{constructor(){this.boundingData=new Float32Array(6)}}function sS(h,a,s,l,o,f){let c=l,d=l+o-1;const m=f.pos,p=f.axis*2;for(;;){for(;c<=d&&s[c*6+p]<m;)c++;for(;c<=d&&s[d*6+p]>=m;)d--;if(c<d){for(let y=0;y<3;y++){let v=a[c*3+y];a[c*3+y]=a[d*3+y],a[d*3+y]=v}for(let y=0;y<6;y++){let v=s[c*6+y];s[c*6+y]=s[d*6+y],s[d*6+y]=v}c++,d--}else return c}}function lS(h,a,s,l,o,f){let c=l,d=l+o-1;const m=f.pos,p=f.axis*2;for(;;){for(;c<=d&&s[c*6+p]<m;)c++;for(;c<=d&&s[d*6+p]>=m;)d--;if(c<d){let y=h[c];h[c]=h[d],h[d]=y;for(let v=0;v<6;v++){let g=s[c*6+v];s[c*6+v]=s[d*6+v],s[d*6+v]=g}c++,d--}else return c}}function xt(h,a){return a[h+15]===65535}function Nt(h,a){return a[h+6]}function Yt(h,a){return a[h+14]}function li(h){return h+8}function Xt(h,a){return a[h+6]}function Ih(h,a){return a[h+7]}let qv,Pl,Qo,jv;const rS=Math.pow(2,32);function Sh(h){return"count"in h?1:1+Sh(h.left)+Sh(h.right)}function oS(h,a,s){return qv=new Float32Array(s),Pl=new Uint32Array(s),Qo=new Uint16Array(s),jv=new Uint8Array(s),_h(h,a)}function _h(h,a){const s=h/4,l=h/2,o="count"in a,f=a.boundingData;for(let c=0;c<6;c++)qv[s+c]=f[c];if(o)if(a.buffer){const c=a.buffer;jv.set(new Uint8Array(c),h);for(let d=h,m=h+c.byteLength;d<m;d+=Vn){const p=d/2;xt(p,Qo)||(Pl[d/4+6]+=s)}return h+c.byteLength}else{const c=a.offset,d=a.count;return Pl[s+6]=c,Qo[l+14]=d,Qo[l+15]=sc,h+Vn}else{const c=a.left,d=a.right,m=a.splitAxis;let p;if(p=_h(h+Vn,c),p/4>rS)throw new Error("MeshBVH: Cannot store child pointer greater than 32 bits.");return Pl[s+6]=p/4,p=_h(p,d),Pl[s+7]=m,p}}function cS(h,a){const s=(h.index?h.index.count:h.attributes.position.count)/3,l=s>2**16,o=l?4:2,f=a?new SharedArrayBuffer(s*o):new ArrayBuffer(s*o),c=l?new Uint32Array(f):new Uint16Array(f);for(let d=0,m=c.length;d<m;d++)c[d]=d;return c}function uS(h,a,s,l,o){const{maxDepth:f,verbose:c,maxLeafTris:d,strategy:m,onProgress:p,indirect:y}=o,v=h._indirectBuffer,g=h.geometry,T=g.index?g.index.array:null,_=y?lS:sS,w=qn(g),x=new Float32Array(6);let A=!1;const M=new th;return eh(a,s,l,M.boundingData,x),C(M,s,l,x),M;function E(D){p&&p(D/w)}function C(D,U,N,Y=null,P=0){if(!A&&P>=f&&(A=!0,c&&(console.warn(`MeshBVH: Max depth of ${f} reached when generating BVH. Consider increasing maxDepth.`),console.warn(g))),N<=d||P>=f)return E(U+N),D.offset=U,D.count=N,D;const j=nS(D.boundingData,Y,a,U,N,m);if(j.axis===-1)return E(U+N),D.offset=U,D.count=N,D;const X=_(v,T,a,U,N,j);if(X===U||X===U+N)E(U+N),D.offset=U,D.count=N;else{D.splitAxis=j.axis;const G=new th,Z=U,W=X-U;D.left=G,eh(a,Z,W,G.boundingData,x),C(G,Z,W,x,P+1);const ne=new th,K=X,ae=N-W;D.right=ne,eh(a,K,ae,ne.boundingData,x),C(ne,K,ae,x,P+1)}return D}}function fS(h,a){const s=h.geometry;a.indirect&&(h._indirectBuffer=cS(s,a.useSharedArrayBuffer),eS(s,a.range)&&!a.verbose&&console.warn('MeshBVH: Provided geometry contains groups or a range that do not fully span the vertex contents while using the "indirect" option. BVH may incorrectly report intersections on unrendered portions of the geometry.')),h._indirectBuffer||$x(s,a);const l=a.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,o=Vv(s,a.range),f=tS(s,null,o[0].offset,o[0].count),c=a.indirect?o:Pv(s,a.range);h._roots=c.map(d=>{const m=uS(h,f,d.offset,d.count,a),p=Sh(m),y=new l(Vn*p);return oS(0,m,y),y})}class rn{constructor(){this.min=1/0,this.max=-1/0}setFromPointsField(a,s){let l=1/0,o=-1/0;for(let f=0,c=a.length;f<c;f++){const m=a[f][s];l=m<l?m:l,o=m>o?m:o}this.min=l,this.max=o}setFromPoints(a,s){let l=1/0,o=-1/0;for(let f=0,c=s.length;f<c;f++){const d=s[f],m=a.dot(d);l=m<l?m:l,o=m>o?m:o}this.min=l,this.max=o}isSeparated(a){return this.min>a.max||a.min>this.max}}rn.prototype.setFromBox=(function(){const h=new Q;return function(s,l){const o=l.min,f=l.max;let c=1/0,d=-1/0;for(let m=0;m<=1;m++)for(let p=0;p<=1;p++)for(let y=0;y<=1;y++){h.x=o.x*m+f.x*(1-m),h.y=o.y*p+f.y*(1-p),h.z=o.z*y+f.z*(1-y);const v=s.dot(h);c=Math.min(v,c),d=Math.max(v,d)}this.min=c,this.max=d}})();const hS=(function(){const h=new Q,a=new Q,s=new Q;return function(o,f,c){const d=o.start,m=h,p=f.start,y=a;s.subVectors(d,p),h.subVectors(o.end,o.start),a.subVectors(f.end,f.start);const v=s.dot(y),g=y.dot(m),T=y.dot(y),_=s.dot(m),x=m.dot(m)*T-g*g;let A,M;x!==0?A=(v*g-_*T)/x:A=0,M=(v+A*g)/T,c.x=A,c.y=M}})(),Fh=(function(){const h=new Me,a=new Q,s=new Q;return function(o,f,c,d){hS(o,f,h);let m=h.x,p=h.y;if(m>=0&&m<=1&&p>=0&&p<=1){o.at(m,c),f.at(p,d);return}else if(m>=0&&m<=1){p<0?f.at(0,d):f.at(1,d),o.closestPointToPoint(d,!0,c);return}else if(p>=0&&p<=1){m<0?o.at(0,c):o.at(1,c),f.closestPointToPoint(c,!0,d);return}else{let y;m<0?y=o.start:y=o.end;let v;p<0?v=f.start:v=f.end;const g=a,T=s;if(o.closestPointToPoint(v,!0,a),f.closestPointToPoint(y,!0,s),g.distanceToSquared(v)<=T.distanceToSquared(y)){c.copy(g),d.copy(v);return}else{c.copy(y),d.copy(T);return}}}})(),dS=(function(){const h=new Q,a=new Q,s=new Lh,l=new ln;return function(f,c){const{radius:d,center:m}=f,{a:p,b:y,c:v}=c;if(l.start=p,l.end=y,l.closestPointToPoint(m,!0,h).distanceTo(m)<=d||(l.start=p,l.end=v,l.closestPointToPoint(m,!0,h).distanceTo(m)<=d)||(l.start=y,l.end=v,l.closestPointToPoint(m,!0,h).distanceTo(m)<=d))return!0;const w=c.getPlane(s);if(Math.abs(w.distanceToPoint(m))<=d){const A=w.projectPoint(m,a);if(c.containsPoint(A))return!0}return!1}})(),mS=["x","y","z"],nn=1e-15,Vg=nn*nn;function ai(h){return Math.abs(h)<nn}class Ti extends Ms{constructor(...a){super(...a),this.isExtendedTriangle=!0,this.satAxes=new Array(4).fill().map(()=>new Q),this.satBounds=new Array(4).fill().map(()=>new rn),this.points=[this.a,this.b,this.c],this.plane=new Lh,this.isDegenerateIntoSegment=!1,this.isDegenerateIntoPoint=!1,this.degenerateSegment=new ln,this.needsUpdate=!0}intersectsSphere(a){return dS(a,this)}update(){const a=this.a,s=this.b,l=this.c,o=this.points,f=this.satAxes,c=this.satBounds,d=f[0],m=c[0];this.getNormal(d),m.setFromPoints(d,o);const p=f[1],y=c[1];p.subVectors(a,s),y.setFromPoints(p,o);const v=f[2],g=c[2];v.subVectors(s,l),g.setFromPoints(v,o);const T=f[3],_=c[3];T.subVectors(l,a),_.setFromPoints(T,o);const w=p.length(),x=v.length(),A=T.length();this.isDegenerateIntoPoint=!1,this.isDegenerateIntoSegment=!1,w<nn?x<nn||A<nn?this.isDegenerateIntoPoint=!0:(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(a),this.degenerateSegment.end.copy(l)):x<nn?A<nn?this.isDegenerateIntoPoint=!0:(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(s),this.degenerateSegment.end.copy(a)):A<nn&&(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(l),this.degenerateSegment.end.copy(s)),this.plane.setFromNormalAndCoplanarPoint(d,a),this.needsUpdate=!1}}Ti.prototype.closestPointToSegment=(function(){const h=new Q,a=new Q,s=new ln;return function(o,f=null,c=null){const{start:d,end:m}=o,p=this.points;let y,v=1/0;for(let g=0;g<3;g++){const T=(g+1)%3;s.start.copy(p[g]),s.end.copy(p[T]),Fh(s,o,h,a),y=h.distanceToSquared(a),y<v&&(v=y,f&&f.copy(h),c&&c.copy(a))}return this.closestPointToPoint(d,h),y=d.distanceToSquared(h),y<v&&(v=y,f&&f.copy(h),c&&c.copy(d)),this.closestPointToPoint(m,h),y=m.distanceToSquared(h),y<v&&(v=y,f&&f.copy(h),c&&c.copy(m)),Math.sqrt(v)}})();Ti.prototype.intersectsTriangle=(function(){const h=new Ti,a=new rn,s=new rn,l=new Q,o=new Q,f=new Q,c=new Q,d=new ln,m=new ln,p=new Q,y=new Me,v=new Me;function g(E,C,D,U){const N=l;!E.isDegenerateIntoPoint&&!E.isDegenerateIntoSegment?N.copy(E.plane.normal):N.copy(C.plane.normal);const Y=E.satBounds,P=E.satAxes;for(let G=1;G<4;G++){const Z=Y[G],W=P[G];if(a.setFromPoints(W,C.points),Z.isSeparated(a)||(c.copy(N).cross(W),a.setFromPoints(c,E.points),s.setFromPoints(c,C.points),a.isSeparated(s)))return!1}const j=C.satBounds,X=C.satAxes;for(let G=1;G<4;G++){const Z=j[G],W=X[G];if(a.setFromPoints(W,E.points),Z.isSeparated(a)||(c.crossVectors(N,W),a.setFromPoints(c,E.points),s.setFromPoints(c,C.points),a.isSeparated(s)))return!1}return D&&(U||console.warn("ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0."),D.start.set(0,0,0),D.end.set(0,0,0)),!0}function T(E,C,D,U,N,Y,P,j,X,G,Z){let W=P/(P-j);G.x=U+(N-U)*W,Z.start.subVectors(C,E).multiplyScalar(W).add(E),W=P/(P-X),G.y=U+(Y-U)*W,Z.end.subVectors(D,E).multiplyScalar(W).add(E)}function _(E,C,D,U,N,Y,P,j,X,G,Z){if(N>0)T(E.c,E.a,E.b,U,C,D,X,P,j,G,Z);else if(Y>0)T(E.b,E.a,E.c,D,C,U,j,P,X,G,Z);else if(j*X>0||P!=0)T(E.a,E.b,E.c,C,D,U,P,j,X,G,Z);else if(j!=0)T(E.b,E.a,E.c,D,C,U,j,P,X,G,Z);else if(X!=0)T(E.c,E.a,E.b,U,C,D,X,P,j,G,Z);else return!0;return!1}function w(E,C,D,U){const N=C.degenerateSegment,Y=E.plane.distanceToPoint(N.start),P=E.plane.distanceToPoint(N.end);return ai(Y)?ai(P)?g(E,C,D,U):(D&&(D.start.copy(N.start),D.end.copy(N.start)),E.containsPoint(N.start)):ai(P)?(D&&(D.start.copy(N.end),D.end.copy(N.end)),E.containsPoint(N.end)):E.plane.intersectLine(N,l)!=null?(D&&(D.start.copy(l),D.end.copy(l)),E.containsPoint(l)):!1}function x(E,C,D){const U=C.a;return ai(E.plane.distanceToPoint(U))&&E.containsPoint(U)?(D&&(D.start.copy(U),D.end.copy(U)),!0):!1}function A(E,C,D){const U=E.degenerateSegment,N=C.a;return U.closestPointToPoint(N,!0,l),N.distanceToSquared(l)<Vg?(D&&(D.start.copy(N),D.end.copy(N)),!0):!1}function M(E,C,D,U){if(E.isDegenerateIntoSegment)if(C.isDegenerateIntoSegment){const N=E.degenerateSegment,Y=C.degenerateSegment,P=o,j=f;N.delta(P),Y.delta(j);const X=l.subVectors(Y.start,N.start),G=P.x*j.y-P.y*j.x;if(ai(G))return!1;const Z=(X.x*j.y-X.y*j.x)/G,W=-(P.x*X.y-P.y*X.x)/G;if(Z<0||Z>1||W<0||W>1)return!1;const ne=N.start.z+P.z*Z,K=Y.start.z+j.z*W;return ai(ne-K)?(D&&(D.start.copy(N.start).addScaledVector(P,Z),D.end.copy(N.start).addScaledVector(P,Z)),!0):!1}else return C.isDegenerateIntoPoint?A(E,C,D):w(C,E,D,U);else{if(E.isDegenerateIntoPoint)return C.isDegenerateIntoPoint?C.a.distanceToSquared(E.a)<Vg?(D&&(D.start.copy(E.a),D.end.copy(E.a)),!0):!1:C.isDegenerateIntoSegment?A(C,E,D):x(C,E,D);if(C.isDegenerateIntoPoint)return x(E,C,D);if(C.isDegenerateIntoSegment)return w(E,C,D,U)}}return function(C,D=null,U=!1){this.needsUpdate&&this.update(),C.isExtendedTriangle?C.needsUpdate&&C.update():(h.copy(C),h.update(),C=h);const N=M(this,C,D,U);if(N!==void 0)return N;const Y=this.plane,P=C.plane;let j=P.distanceToPoint(this.a),X=P.distanceToPoint(this.b),G=P.distanceToPoint(this.c);ai(j)&&(j=0),ai(X)&&(X=0),ai(G)&&(G=0);const Z=j*X,W=j*G;if(Z>0&&W>0)return!1;let ne=Y.distanceToPoint(C.a),K=Y.distanceToPoint(C.b),ae=Y.distanceToPoint(C.c);ai(ne)&&(ne=0),ai(K)&&(K=0),ai(ae)&&(ae=0);const ie=ne*K,oe=ne*ae;if(ie>0&&oe>0)return!1;o.copy(Y.normal),f.copy(P.normal);const de=o.cross(f);let Ce=0,at=Math.abs(de.x);const ui=Math.abs(de.y);ui>at&&(at=ui,Ce=1),Math.abs(de.z)>at&&(Ce=2);const st=mS[Ce],_a=this.a[st],Ii=this.b[st],Hs=this.c[st],jn=C.a[st],se=C.b[st],J=C.c[st];if(_(this,_a,Ii,Hs,Z,W,j,X,G,y,d))return g(this,C,D,U);if(_(C,jn,se,J,ie,oe,ne,K,ae,v,m))return g(this,C,D,U);if(y.y<y.x){const fe=y.y;y.y=y.x,y.x=fe,p.copy(d.start),d.start.copy(d.end),d.end.copy(p)}if(v.y<v.x){const fe=v.y;v.y=v.x,v.x=fe,p.copy(m.start),m.start.copy(m.end),m.end.copy(p)}return y.y<v.x||v.y<y.x?!1:(D&&(v.x>y.x?D.start.copy(m.start):D.start.copy(d.start),v.y<y.y?D.end.copy(m.end):D.end.copy(d.end)),!0)}})();Ti.prototype.distanceToPoint=(function(){const h=new Q;return function(s){return this.closestPointToPoint(s,h),s.distanceTo(h)}})();Ti.prototype.distanceToTriangle=(function(){const h=new Q,a=new Q,s=["a","b","c"],l=new ln,o=new ln;return function(c,d=null,m=null){const p=d||m?l:null;if(this.intersectsTriangle(c,p))return(d||m)&&(d&&p.getCenter(d),m&&p.getCenter(m)),0;let y=1/0;for(let v=0;v<3;v++){let g;const T=s[v],_=c[T];this.closestPointToPoint(_,h),g=_.distanceToSquared(h),g<y&&(y=g,d&&d.copy(h),m&&m.copy(_));const w=this[T];c.closestPointToPoint(w,h),g=w.distanceToSquared(h),g<y&&(y=g,d&&d.copy(w),m&&m.copy(h))}for(let v=0;v<3;v++){const g=s[v],T=s[(v+1)%3];l.set(this[g],this[T]);for(let _=0;_<3;_++){const w=s[_],x=s[(_+1)%3];o.set(c[w],c[x]),Fh(l,o,h,a);const A=h.distanceToSquared(a);A<y&&(y=A,d&&d.copy(h),m&&m.copy(a))}}return Math.sqrt(y)}})();class St{constructor(a,s,l){this.isOrientedBox=!0,this.min=new Q,this.max=new Q,this.matrix=new qe,this.invMatrix=new qe,this.points=new Array(8).fill().map(()=>new Q),this.satAxes=new Array(3).fill().map(()=>new Q),this.satBounds=new Array(3).fill().map(()=>new rn),this.alignedSatBounds=new Array(3).fill().map(()=>new rn),this.needsUpdate=!1,a&&this.min.copy(a),s&&this.max.copy(s),l&&this.matrix.copy(l)}set(a,s,l){this.min.copy(a),this.max.copy(s),this.matrix.copy(l),this.needsUpdate=!0}copy(a){this.min.copy(a.min),this.max.copy(a.max),this.matrix.copy(a.matrix),this.needsUpdate=!0}}St.prototype.update=(function(){return function(){const a=this.matrix,s=this.min,l=this.max,o=this.points;for(let p=0;p<=1;p++)for(let y=0;y<=1;y++)for(let v=0;v<=1;v++){const g=1*p|2*y|4*v,T=o[g];T.x=p?l.x:s.x,T.y=y?l.y:s.y,T.z=v?l.z:s.z,T.applyMatrix4(a)}const f=this.satBounds,c=this.satAxes,d=o[0];for(let p=0;p<3;p++){const y=c[p],v=f[p],g=1<<p,T=o[g];y.subVectors(d,T),v.setFromPoints(y,o)}const m=this.alignedSatBounds;m[0].setFromPointsField(o,"x"),m[1].setFromPointsField(o,"y"),m[2].setFromPointsField(o,"z"),this.invMatrix.copy(this.matrix).invert(),this.needsUpdate=!1}})();St.prototype.intersectsBox=(function(){const h=new rn;return function(s){this.needsUpdate&&this.update();const l=s.min,o=s.max,f=this.satBounds,c=this.satAxes,d=this.alignedSatBounds;if(h.min=l.x,h.max=o.x,d[0].isSeparated(h)||(h.min=l.y,h.max=o.y,d[1].isSeparated(h))||(h.min=l.z,h.max=o.z,d[2].isSeparated(h)))return!1;for(let m=0;m<3;m++){const p=c[m],y=f[m];if(h.setFromBox(p,s),y.isSeparated(h))return!1}return!0}})();St.prototype.intersectsTriangle=(function(){const h=new Ti,a=new Array(3),s=new rn,l=new rn,o=new Q;return function(c){this.needsUpdate&&this.update(),c.isExtendedTriangle?c.needsUpdate&&c.update():(h.copy(c),h.update(),c=h);const d=this.satBounds,m=this.satAxes;a[0]=c.a,a[1]=c.b,a[2]=c.c;for(let g=0;g<3;g++){const T=d[g],_=m[g];if(s.setFromPoints(_,a),T.isSeparated(s))return!1}const p=c.satBounds,y=c.satAxes,v=this.points;for(let g=0;g<3;g++){const T=p[g],_=y[g];if(s.setFromPoints(_,v),T.isSeparated(s))return!1}for(let g=0;g<3;g++){const T=m[g];for(let _=0;_<4;_++){const w=y[_];if(o.crossVectors(T,w),s.setFromPoints(o,a),l.setFromPoints(o,v),s.isSeparated(l))return!1}}return!0}})();St.prototype.closestPointToPoint=(function(){return function(a,s){return this.needsUpdate&&this.update(),s.copy(a).applyMatrix4(this.invMatrix).clamp(this.min,this.max).applyMatrix4(this.matrix),s}})();St.prototype.distanceToPoint=(function(){const h=new Q;return function(s){return this.closestPointToPoint(s,h),s.distanceTo(h)}})();St.prototype.distanceToBox=(function(){const h=["x","y","z"],a=new Array(12).fill().map(()=>new ln),s=new Array(12).fill().map(()=>new ln),l=new Q,o=new Q;return function(c,d=0,m=null,p=null){if(this.needsUpdate&&this.update(),this.intersectsBox(c))return(m||p)&&(c.getCenter(o),this.closestPointToPoint(o,l),c.closestPointToPoint(l,o),m&&m.copy(l),p&&p.copy(o)),0;const y=d*d,v=c.min,g=c.max,T=this.points;let _=1/0;for(let x=0;x<8;x++){const A=T[x];o.copy(A).clamp(v,g);const M=A.distanceToSquared(o);if(M<_&&(_=M,m&&m.copy(A),p&&p.copy(o),M<y))return Math.sqrt(M)}let w=0;for(let x=0;x<3;x++)for(let A=0;A<=1;A++)for(let M=0;M<=1;M++){const E=(x+1)%3,C=(x+2)%3,D=A<<E|M<<C,U=1<<x|A<<E|M<<C,N=T[D],Y=T[U];a[w].set(N,Y);const j=h[x],X=h[E],G=h[C],Z=s[w],W=Z.start,ne=Z.end;W[j]=v[j],W[X]=A?v[X]:g[X],W[G]=M?v[G]:g[X],ne[j]=g[j],ne[X]=A?v[X]:g[X],ne[G]=M?v[G]:g[X],w++}for(let x=0;x<=1;x++)for(let A=0;A<=1;A++)for(let M=0;M<=1;M++){o.x=x?g.x:v.x,o.y=A?g.y:v.y,o.z=M?g.z:v.z,this.closestPointToPoint(o,l);const E=o.distanceToSquared(l);if(E<_&&(_=E,m&&m.copy(l),p&&p.copy(o),E<y))return Math.sqrt(E)}for(let x=0;x<12;x++){const A=a[x];for(let M=0;M<12;M++){const E=s[M];Fh(A,E,l,o);const C=l.distanceToSquared(o);if(C<_&&(_=C,m&&m.copy(l),p&&p.copy(o),C<y))return Math.sqrt(C)}}return Math.sqrt(_)}})();class Gh{constructor(a){this._getNewPrimitive=a,this._primitives=[]}getPrimitive(){const a=this._primitives;return a.length===0?this._getNewPrimitive():a.pop()}releasePrimitive(a){this._primitives.push(a)}}class pS extends Gh{constructor(){super(()=>new Ti)}}const ri=new pS;class gS{constructor(){this.float32Array=null,this.uint16Array=null,this.uint32Array=null;const a=[];let s=null;this.setBuffer=l=>{s&&a.push(s),s=l,this.float32Array=new Float32Array(l),this.uint16Array=new Uint16Array(l),this.uint32Array=new Uint32Array(l)},this.clearBuffer=()=>{s=null,this.float32Array=null,this.uint16Array=null,this.uint32Array=null,a.length!==0&&this.setBuffer(a.pop())}}}const Be=new gS;let Gn,Os;const vs=[],Oo=new Gh(()=>new zt);function vS(h,a,s,l,o,f){Gn=Oo.getPrimitive(),Os=Oo.getPrimitive(),vs.push(Gn,Os),Be.setBuffer(h._roots[a]);const c=wh(0,h.geometry,s,l,o,f);Be.clearBuffer(),Oo.releasePrimitive(Gn),Oo.releasePrimitive(Os),vs.pop(),vs.pop();const d=vs.length;return d>0&&(Os=vs[d-1],Gn=vs[d-2]),c}function wh(h,a,s,l,o=null,f=0,c=0){const{float32Array:d,uint16Array:m,uint32Array:p}=Be;let y=h*2;if(xt(y,m)){const g=Nt(h,p),T=Yt(y,m);return Ve(h,d,Gn),l(g,T,!1,c,f+h,Gn)}else{let j=function(G){const{uint16Array:Z,uint32Array:W}=Be;let ne=G*2;for(;!xt(ne,Z);)G=li(G),ne=G*2;return Nt(G,W)},X=function(G){const{uint16Array:Z,uint32Array:W}=Be;let ne=G*2;for(;!xt(ne,Z);)G=Xt(G,W),ne=G*2;return Nt(G,W)+Yt(ne,Z)};const g=li(h),T=Xt(h,p);let _=g,w=T,x,A,M,E;if(o&&(M=Gn,E=Os,Ve(_,d,M),Ve(w,d,E),x=o(M),A=o(E),A<x)){_=T,w=g;const G=x;x=A,A=G,M=E}M||(M=Gn,Ve(_,d,M));const C=xt(_*2,m),D=s(M,C,x,c+1,f+_);let U;if(D===Ug){const G=j(_),W=X(_)-G;U=l(G,W,!0,c+1,f+_,M)}else U=D&&wh(_,a,s,l,o,f,c+1);if(U)return!0;E=Os,Ve(w,d,E);const N=xt(w*2,m),Y=s(E,N,A,c+1,f+w);let P;if(Y===Ug){const G=j(w),W=X(w)-G;P=l(G,W,!0,c+1,f+w,E)}else P=Y&&wh(w,a,s,l,o,f,c+1);return!!P}}const Ul=new Q,ih=new Q;function yS(h,a,s={},l=0,o=1/0){const f=l*l,c=o*o;let d=1/0,m=null;if(h.shapecast({boundsTraverseOrder:y=>(Ul.copy(a).clamp(y.min,y.max),Ul.distanceToSquared(a)),intersectsBounds:(y,v,g)=>g<d&&g<c,intersectsTriangle:(y,v)=>{y.closestPointToPoint(a,Ul);const g=a.distanceToSquared(Ul);return g<d&&(ih.copy(Ul),d=g,m=v),g<f}}),d===1/0)return null;const p=Math.sqrt(d);return s.point?s.point.copy(ih):s.point=ih.clone(),s.distance=p,s.faceIndex=m,s}const No=parseInt(Rv)>=169,bS=parseInt(Rv)<=161,ga=new Q,va=new Q,ya=new Q,zo=new Me,Lo=new Me,Bo=new Me,Pg=new Q,qg=new Q,jg=new Q,Hl=new Q;function TS(h,a,s,l,o,f,c,d){let m;if(f===Uh?m=h.intersectTriangle(l,s,a,!0,o):m=h.intersectTriangle(a,s,l,f!==ic,o),m===null)return null;const p=h.origin.distanceTo(o);return p<c||p>d?null:{distance:p,point:o.clone()}}function xS(h,a,s,l,o,f,c,d,m,p,y){ga.fromBufferAttribute(a,f),va.fromBufferAttribute(a,c),ya.fromBufferAttribute(a,d);const v=TS(h,ga,va,ya,Hl,m,p,y);if(v){if(l){zo.fromBufferAttribute(l,f),Lo.fromBufferAttribute(l,c),Bo.fromBufferAttribute(l,d),v.uv=new Me;const T=Ms.getInterpolation(Hl,ga,va,ya,zo,Lo,Bo,v.uv);No||(v.uv=T)}if(o){zo.fromBufferAttribute(o,f),Lo.fromBufferAttribute(o,c),Bo.fromBufferAttribute(o,d),v.uv1=new Me;const T=Ms.getInterpolation(Hl,ga,va,ya,zo,Lo,Bo,v.uv1);No||(v.uv1=T),bS&&(v.uv2=v.uv1)}if(s){Pg.fromBufferAttribute(s,f),qg.fromBufferAttribute(s,c),jg.fromBufferAttribute(s,d),v.normal=new Q;const T=Ms.getInterpolation(Hl,ga,va,ya,Pg,qg,jg,v.normal);v.normal.dot(h.direction)>0&&v.normal.multiplyScalar(-1),No||(v.normal=T)}const g={a:f,b:c,c:d,normal:new Q,materialIndex:0};if(Ms.getNormal(ga,va,ya,g.normal),v.face=g,v.faceIndex=f,No){const T=new Q;Ms.getBarycoord(Hl,ga,va,ya,T),v.barycoord=T}}return v}function lc(h,a,s,l,o,f,c){const d=l*3;let m=d+0,p=d+1,y=d+2;const v=h.index;h.index&&(m=v.getX(m),p=v.getX(p),y=v.getX(y));const{position:g,normal:T,uv:_,uv1:w}=h.attributes,x=xS(s,g,T,_,w,m,p,y,a,f,c);return x?(x.faceIndex=l,o&&o.push(x),x):null}function Ke(h,a,s,l){const o=h.a,f=h.b,c=h.c;let d=a,m=a+1,p=a+2;s&&(d=s.getX(d),m=s.getX(m),p=s.getX(p)),o.x=l.getX(d),o.y=l.getY(d),o.z=l.getZ(d),f.x=l.getX(m),f.y=l.getY(m),f.z=l.getZ(m),c.x=l.getX(p),c.y=l.getY(p),c.z=l.getZ(p)}function SS(h,a,s,l,o,f,c,d){const{geometry:m,_indirectBuffer:p}=h;for(let y=l,v=l+o;y<v;y++)lc(m,a,s,y,f,c,d)}function _S(h,a,s,l,o,f,c){const{geometry:d,_indirectBuffer:m}=h;let p=1/0,y=null;for(let v=l,g=l+o;v<g;v++){let T;T=lc(d,a,s,v,null,f,c),T&&T.distance<p&&(y=T,p=T.distance)}return y}function wS(h,a,s,l,o,f,c){const{geometry:d}=s,{index:m}=d,p=d.attributes.position;for(let y=h,v=a+h;y<v;y++){let g;if(g=y,Ke(c,g*3,m,p),c.needsUpdate=!0,l(c,g,o,f))return!0}return!1}function AS(h,a=null){a&&Array.isArray(a)&&(a=new Set(a));const s=h.geometry,l=s.index?s.index.array:null,o=s.attributes.position;let f,c,d,m,p=0;const y=h._roots;for(let g=0,T=y.length;g<T;g++)f=y[g],c=new Uint32Array(f),d=new Uint16Array(f),m=new Float32Array(f),v(0,p),p+=f.byteLength;function v(g,T,_=!1){const w=g*2;if(d[w+15]===sc){const A=c[g+6],M=d[w+14];let E=1/0,C=1/0,D=1/0,U=-1/0,N=-1/0,Y=-1/0;for(let P=3*A,j=3*(A+M);P<j;P++){let X=l[P];const G=o.getX(X),Z=o.getY(X),W=o.getZ(X);G<E&&(E=G),G>U&&(U=G),Z<C&&(C=Z),Z>N&&(N=Z),W<D&&(D=W),W>Y&&(Y=W)}return m[g+0]!==E||m[g+1]!==C||m[g+2]!==D||m[g+3]!==U||m[g+4]!==N||m[g+5]!==Y?(m[g+0]=E,m[g+1]=C,m[g+2]=D,m[g+3]=U,m[g+4]=N,m[g+5]=Y,!0):!1}else{const A=g+8,M=c[g+6],E=A+T,C=M+T;let D=_,U=!1,N=!1;a?D||(U=a.has(E),N=a.has(C),D=!U&&!N):(U=!0,N=!0);const Y=D||U,P=D||N;let j=!1;Y&&(j=v(A,T,D));let X=!1;P&&(X=v(M,T,D));const G=j||X;if(G)for(let Z=0;Z<3;Z++){const W=A+Z,ne=M+Z,K=m[W],ae=m[W+3],ie=m[ne],oe=m[ne+3];m[g+Z]=K<ie?K:ie,m[g+Z+3]=ae>oe?ae:oe}return G}}}function Pn(h,a,s,l,o){let f,c,d,m,p,y;const v=1/s.direction.x,g=1/s.direction.y,T=1/s.direction.z,_=s.origin.x,w=s.origin.y,x=s.origin.z;let A=a[h],M=a[h+3],E=a[h+1],C=a[h+3+1],D=a[h+2],U=a[h+3+2];return v>=0?(f=(A-_)*v,c=(M-_)*v):(f=(M-_)*v,c=(A-_)*v),g>=0?(d=(E-w)*g,m=(C-w)*g):(d=(C-w)*g,m=(E-w)*g),f>m||d>c||((d>f||isNaN(f))&&(f=d),(m<c||isNaN(c))&&(c=m),T>=0?(p=(D-x)*T,y=(U-x)*T):(p=(U-x)*T,y=(D-x)*T),f>y||p>c)?!1:((p>f||f!==f)&&(f=p),(y<c||c!==c)&&(c=y),f<=o&&c>=l)}function ES(h,a,s,l,o,f,c,d){const{geometry:m,_indirectBuffer:p}=h;for(let y=l,v=l+o;y<v;y++){let g=p?p[y]:y;lc(m,a,s,g,f,c,d)}}function MS(h,a,s,l,o,f,c){const{geometry:d,_indirectBuffer:m}=h;let p=1/0,y=null;for(let v=l,g=l+o;v<g;v++){let T;T=lc(d,a,s,m?m[v]:v,null,f,c),T&&T.distance<p&&(y=T,p=T.distance)}return y}function RS(h,a,s,l,o,f,c){const{geometry:d}=s,{index:m}=d,p=d.attributes.position;for(let y=h,v=a+h;y<v;y++){let g;if(g=s.resolveTriangleIndex(y),Ke(c,g*3,m,p),c.needsUpdate=!0,l(c,g,o,f))return!0}return!1}function CS(h,a,s,l,o,f,c){Be.setBuffer(h._roots[a]),Ah(0,h,s,l,o,f,c),Be.clearBuffer()}function Ah(h,a,s,l,o,f,c){const{float32Array:d,uint16Array:m,uint32Array:p}=Be,y=h*2;if(xt(y,m)){const g=Nt(h,p),T=Yt(y,m);SS(a,s,l,g,T,o,f,c)}else{const g=li(h);Pn(g,d,l,f,c)&&Ah(g,a,s,l,o,f,c);const T=Xt(h,p);Pn(T,d,l,f,c)&&Ah(T,a,s,l,o,f,c)}}const DS=["x","y","z"];function OS(h,a,s,l,o,f){Be.setBuffer(h._roots[a]);const c=Eh(0,h,s,l,o,f);return Be.clearBuffer(),c}function Eh(h,a,s,l,o,f){const{float32Array:c,uint16Array:d,uint32Array:m}=Be;let p=h*2;if(xt(p,d)){const v=Nt(h,m),g=Yt(p,d);return _S(a,s,l,v,g,o,f)}else{const v=Ih(h,m),g=DS[v],_=l.direction[g]>=0;let w,x;_?(w=li(h),x=Xt(h,m)):(w=Xt(h,m),x=li(h));const M=Pn(w,c,l,o,f)?Eh(w,a,s,l,o,f):null;if(M){const D=M.point[g];if(_?D<=c[x+v]:D>=c[x+v+3])return M}const C=Pn(x,c,l,o,f)?Eh(x,a,s,l,o,f):null;return M&&C?M.distance<=C.distance?M:C:M||C||null}}const Uo=new zt,ys=new Ti,bs=new Ti,Il=new qe,kg=new St,Ho=new St;function NS(h,a,s,l){Be.setBuffer(h._roots[a]);const o=Mh(0,h,s,l);return Be.clearBuffer(),o}function Mh(h,a,s,l,o=null){const{float32Array:f,uint16Array:c,uint32Array:d}=Be;let m=h*2;if(o===null&&(s.boundingBox||s.computeBoundingBox(),kg.set(s.boundingBox.min,s.boundingBox.max,l),o=kg),xt(m,c)){const y=a.geometry,v=y.index,g=y.attributes.position,T=s.index,_=s.attributes.position,w=Nt(h,d),x=Yt(m,c);if(Il.copy(l).invert(),s.boundsTree)return Ve(h,f,Ho),Ho.matrix.copy(Il),Ho.needsUpdate=!0,s.boundsTree.shapecast({intersectsBounds:M=>Ho.intersectsBox(M),intersectsTriangle:M=>{M.a.applyMatrix4(l),M.b.applyMatrix4(l),M.c.applyMatrix4(l),M.needsUpdate=!0;for(let E=w*3,C=(x+w)*3;E<C;E+=3)if(Ke(bs,E,v,g),bs.needsUpdate=!0,M.intersectsTriangle(bs))return!0;return!1}});{const A=qn(s);for(let M=w*3,E=(x+w)*3;M<E;M+=3){Ke(ys,M,v,g),ys.a.applyMatrix4(Il),ys.b.applyMatrix4(Il),ys.c.applyMatrix4(Il),ys.needsUpdate=!0;for(let C=0,D=A*3;C<D;C+=3)if(Ke(bs,C,T,_),bs.needsUpdate=!0,ys.intersectsTriangle(bs))return!0}}}else{const y=h+8,v=d[h+6];return Ve(y,f,Uo),!!(o.intersectsBox(Uo)&&Mh(y,a,s,l,o)||(Ve(v,f,Uo),o.intersectsBox(Uo)&&Mh(v,a,s,l,o)))}}const Io=new qe,nh=new St,Fl=new St,zS=new Q,LS=new Q,BS=new Q,US=new Q;function HS(h,a,s,l={},o={},f=0,c=1/0){a.boundingBox||a.computeBoundingBox(),nh.set(a.boundingBox.min,a.boundingBox.max,s),nh.needsUpdate=!0;const d=h.geometry,m=d.attributes.position,p=d.index,y=a.attributes.position,v=a.index,g=ri.getPrimitive(),T=ri.getPrimitive();let _=zS,w=LS,x=null,A=null;o&&(x=BS,A=US);let M=1/0,E=null,C=null;return Io.copy(s).invert(),Fl.matrix.copy(Io),h.shapecast({boundsTraverseOrder:D=>nh.distanceToBox(D),intersectsBounds:(D,U,N)=>N<M&&N<c?(U&&(Fl.min.copy(D.min),Fl.max.copy(D.max),Fl.needsUpdate=!0),!0):!1,intersectsRange:(D,U)=>{if(a.boundsTree)return a.boundsTree.shapecast({boundsTraverseOrder:Y=>Fl.distanceToBox(Y),intersectsBounds:(Y,P,j)=>j<M&&j<c,intersectsRange:(Y,P)=>{for(let j=Y,X=Y+P;j<X;j++){Ke(T,3*j,v,y),T.a.applyMatrix4(s),T.b.applyMatrix4(s),T.c.applyMatrix4(s),T.needsUpdate=!0;for(let G=D,Z=D+U;G<Z;G++){Ke(g,3*G,p,m),g.needsUpdate=!0;const W=g.distanceToTriangle(T,_,x);if(W<M&&(w.copy(_),A&&A.copy(x),M=W,E=G,C=j),W<f)return!0}}}});{const N=qn(a);for(let Y=0,P=N;Y<P;Y++){Ke(T,3*Y,v,y),T.a.applyMatrix4(s),T.b.applyMatrix4(s),T.c.applyMatrix4(s),T.needsUpdate=!0;for(let j=D,X=D+U;j<X;j++){Ke(g,3*j,p,m),g.needsUpdate=!0;const G=g.distanceToTriangle(T,_,x);if(G<M&&(w.copy(_),A&&A.copy(x),M=G,E=j,C=Y),G<f)return!0}}}}}),ri.releasePrimitive(g),ri.releasePrimitive(T),M===1/0?null:(l.point?l.point.copy(w):l.point=w.clone(),l.distance=M,l.faceIndex=E,o&&(o.point?o.point.copy(A):o.point=A.clone(),o.point.applyMatrix4(Io),w.applyMatrix4(Io),o.distance=w.sub(o.point).length(),o.faceIndex=C),l)}function IS(h,a=null){a&&Array.isArray(a)&&(a=new Set(a));const s=h.geometry,l=s.index?s.index.array:null,o=s.attributes.position;let f,c,d,m,p=0;const y=h._roots;for(let g=0,T=y.length;g<T;g++)f=y[g],c=new Uint32Array(f),d=new Uint16Array(f),m=new Float32Array(f),v(0,p),p+=f.byteLength;function v(g,T,_=!1){const w=g*2;if(d[w+15]===sc){const A=c[g+6],M=d[w+14];let E=1/0,C=1/0,D=1/0,U=-1/0,N=-1/0,Y=-1/0;for(let P=A,j=A+M;P<j;P++){const X=3*h.resolveTriangleIndex(P);for(let G=0;G<3;G++){let Z=X+G;Z=l?l[Z]:Z;const W=o.getX(Z),ne=o.getY(Z),K=o.getZ(Z);W<E&&(E=W),W>U&&(U=W),ne<C&&(C=ne),ne>N&&(N=ne),K<D&&(D=K),K>Y&&(Y=K)}}return m[g+0]!==E||m[g+1]!==C||m[g+2]!==D||m[g+3]!==U||m[g+4]!==N||m[g+5]!==Y?(m[g+0]=E,m[g+1]=C,m[g+2]=D,m[g+3]=U,m[g+4]=N,m[g+5]=Y,!0):!1}else{const A=g+8,M=c[g+6],E=A+T,C=M+T;let D=_,U=!1,N=!1;a?D||(U=a.has(E),N=a.has(C),D=!U&&!N):(U=!0,N=!0);const Y=D||U,P=D||N;let j=!1;Y&&(j=v(A,T,D));let X=!1;P&&(X=v(M,T,D));const G=j||X;if(G)for(let Z=0;Z<3;Z++){const W=A+Z,ne=M+Z,K=m[W],ae=m[W+3],ie=m[ne],oe=m[ne+3];m[g+Z]=K<ie?K:ie,m[g+Z+3]=ae>oe?ae:oe}return G}}}function FS(h,a,s,l,o,f,c){Be.setBuffer(h._roots[a]),Rh(0,h,s,l,o,f,c),Be.clearBuffer()}function Rh(h,a,s,l,o,f,c){const{float32Array:d,uint16Array:m,uint32Array:p}=Be,y=h*2;if(xt(y,m)){const g=Nt(h,p),T=Yt(y,m);ES(a,s,l,g,T,o,f,c)}else{const g=li(h);Pn(g,d,l,f,c)&&Rh(g,a,s,l,o,f,c);const T=Xt(h,p);Pn(T,d,l,f,c)&&Rh(T,a,s,l,o,f,c)}}const GS=["x","y","z"];function VS(h,a,s,l,o,f){Be.setBuffer(h._roots[a]);const c=Ch(0,h,s,l,o,f);return Be.clearBuffer(),c}function Ch(h,a,s,l,o,f){const{float32Array:c,uint16Array:d,uint32Array:m}=Be;let p=h*2;if(xt(p,d)){const v=Nt(h,m),g=Yt(p,d);return MS(a,s,l,v,g,o,f)}else{const v=Ih(h,m),g=GS[v],_=l.direction[g]>=0;let w,x;_?(w=li(h),x=Xt(h,m)):(w=Xt(h,m),x=li(h));const M=Pn(w,c,l,o,f)?Ch(w,a,s,l,o,f):null;if(M){const D=M.point[g];if(_?D<=c[x+v]:D>=c[x+v+3])return M}const C=Pn(x,c,l,o,f)?Ch(x,a,s,l,o,f):null;return M&&C?M.distance<=C.distance?M:C:M||C||null}}const Fo=new zt,Ts=new Ti,xs=new Ti,Gl=new qe,Yg=new St,Go=new St;function PS(h,a,s,l){Be.setBuffer(h._roots[a]);const o=Dh(0,h,s,l);return Be.clearBuffer(),o}function Dh(h,a,s,l,o=null){const{float32Array:f,uint16Array:c,uint32Array:d}=Be;let m=h*2;if(o===null&&(s.boundingBox||s.computeBoundingBox(),Yg.set(s.boundingBox.min,s.boundingBox.max,l),o=Yg),xt(m,c)){const y=a.geometry,v=y.index,g=y.attributes.position,T=s.index,_=s.attributes.position,w=Nt(h,d),x=Yt(m,c);if(Gl.copy(l).invert(),s.boundsTree)return Ve(h,f,Go),Go.matrix.copy(Gl),Go.needsUpdate=!0,s.boundsTree.shapecast({intersectsBounds:M=>Go.intersectsBox(M),intersectsTriangle:M=>{M.a.applyMatrix4(l),M.b.applyMatrix4(l),M.c.applyMatrix4(l),M.needsUpdate=!0;for(let E=w,C=x+w;E<C;E++)if(Ke(xs,3*a.resolveTriangleIndex(E),v,g),xs.needsUpdate=!0,M.intersectsTriangle(xs))return!0;return!1}});{const A=qn(s);for(let M=w,E=x+w;M<E;M++){const C=a.resolveTriangleIndex(M);Ke(Ts,3*C,v,g),Ts.a.applyMatrix4(Gl),Ts.b.applyMatrix4(Gl),Ts.c.applyMatrix4(Gl),Ts.needsUpdate=!0;for(let D=0,U=A*3;D<U;D+=3)if(Ke(xs,D,T,_),xs.needsUpdate=!0,Ts.intersectsTriangle(xs))return!0}}}else{const y=h+8,v=d[h+6];return Ve(y,f,Fo),!!(o.intersectsBox(Fo)&&Dh(y,a,s,l,o)||(Ve(v,f,Fo),o.intersectsBox(Fo)&&Dh(v,a,s,l,o)))}}const Vo=new qe,ah=new St,Vl=new St,qS=new Q,jS=new Q,kS=new Q,YS=new Q;function XS(h,a,s,l={},o={},f=0,c=1/0){a.boundingBox||a.computeBoundingBox(),ah.set(a.boundingBox.min,a.boundingBox.max,s),ah.needsUpdate=!0;const d=h.geometry,m=d.attributes.position,p=d.index,y=a.attributes.position,v=a.index,g=ri.getPrimitive(),T=ri.getPrimitive();let _=qS,w=jS,x=null,A=null;o&&(x=kS,A=YS);let M=1/0,E=null,C=null;return Vo.copy(s).invert(),Vl.matrix.copy(Vo),h.shapecast({boundsTraverseOrder:D=>ah.distanceToBox(D),intersectsBounds:(D,U,N)=>N<M&&N<c?(U&&(Vl.min.copy(D.min),Vl.max.copy(D.max),Vl.needsUpdate=!0),!0):!1,intersectsRange:(D,U)=>{if(a.boundsTree){const N=a.boundsTree;return N.shapecast({boundsTraverseOrder:Y=>Vl.distanceToBox(Y),intersectsBounds:(Y,P,j)=>j<M&&j<c,intersectsRange:(Y,P)=>{for(let j=Y,X=Y+P;j<X;j++){const G=N.resolveTriangleIndex(j);Ke(T,3*G,v,y),T.a.applyMatrix4(s),T.b.applyMatrix4(s),T.c.applyMatrix4(s),T.needsUpdate=!0;for(let Z=D,W=D+U;Z<W;Z++){const ne=h.resolveTriangleIndex(Z);Ke(g,3*ne,p,m),g.needsUpdate=!0;const K=g.distanceToTriangle(T,_,x);if(K<M&&(w.copy(_),A&&A.copy(x),M=K,E=Z,C=j),K<f)return!0}}}})}else{const N=qn(a);for(let Y=0,P=N;Y<P;Y++){Ke(T,3*Y,v,y),T.a.applyMatrix4(s),T.b.applyMatrix4(s),T.c.applyMatrix4(s),T.needsUpdate=!0;for(let j=D,X=D+U;j<X;j++){const G=h.resolveTriangleIndex(j);Ke(g,3*G,p,m),g.needsUpdate=!0;const Z=g.distanceToTriangle(T,_,x);if(Z<M&&(w.copy(_),A&&A.copy(x),M=Z,E=j,C=Y),Z<f)return!0}}}}}),ri.releasePrimitive(g),ri.releasePrimitive(T),M===1/0?null:(l.point?l.point.copy(w):l.point=w.clone(),l.distance=M,l.faceIndex=E,o&&(o.point?o.point.copy(A):o.point=A.clone(),o.point.applyMatrix4(Vo),w.applyMatrix4(Vo),o.distance=w.sub(o.point).length(),o.faceIndex=C),l)}function KS(){return typeof SharedArrayBuffer<"u"}const Xl=new Be.constructor,ec=new Be.constructor,Fn=new Gh(()=>new zt),Ss=new zt,_s=new zt,sh=new zt,lh=new zt;let rh=!1;function ZS(h,a,s,l){if(rh)throw new Error("MeshBVH: Recursive calls to bvhcast not supported.");rh=!0;const o=h._roots,f=a._roots;let c,d=0,m=0;const p=new qe().copy(s).invert();for(let y=0,v=o.length;y<v;y++){Xl.setBuffer(o[y]),m=0;const g=Fn.getPrimitive();Ve(0,Xl.float32Array,g),g.applyMatrix4(p);for(let T=0,_=f.length;T<_&&(ec.setBuffer(f[T]),c=yi(0,0,s,p,l,d,m,0,0,g),ec.clearBuffer(),m+=f[T].length,!c);T++);if(Fn.releasePrimitive(g),Xl.clearBuffer(),d+=o[y].length,c)break}return rh=!1,c}function yi(h,a,s,l,o,f=0,c=0,d=0,m=0,p=null,y=!1){let v,g;y?(v=ec,g=Xl):(v=Xl,g=ec);const T=v.float32Array,_=v.uint32Array,w=v.uint16Array,x=g.float32Array,A=g.uint32Array,M=g.uint16Array,E=h*2,C=a*2,D=xt(E,w),U=xt(C,M);let N=!1;if(U&&D)y?N=o(Nt(a,A),Yt(a*2,M),Nt(h,_),Yt(h*2,w),m,c+a,d,f+h):N=o(Nt(h,_),Yt(h*2,w),Nt(a,A),Yt(a*2,M),d,f+h,m,c+a);else if(U){const Y=Fn.getPrimitive();Ve(a,x,Y),Y.applyMatrix4(s);const P=li(h),j=Xt(h,_);Ve(P,T,Ss),Ve(j,T,_s);const X=Y.intersectsBox(Ss),G=Y.intersectsBox(_s);N=X&&yi(a,P,l,s,o,c,f,m,d+1,Y,!y)||G&&yi(a,j,l,s,o,c,f,m,d+1,Y,!y),Fn.releasePrimitive(Y)}else{const Y=li(a),P=Xt(a,A);Ve(Y,x,sh),Ve(P,x,lh);const j=p.intersectsBox(sh),X=p.intersectsBox(lh);if(j&&X)N=yi(h,Y,s,l,o,f,c,d,m+1,p,y)||yi(h,P,s,l,o,f,c,d,m+1,p,y);else if(j)if(D)N=yi(h,Y,s,l,o,f,c,d,m+1,p,y);else{const G=Fn.getPrimitive();G.copy(sh).applyMatrix4(s);const Z=li(h),W=Xt(h,_);Ve(Z,T,Ss),Ve(W,T,_s);const ne=G.intersectsBox(Ss),K=G.intersectsBox(_s);N=ne&&yi(Y,Z,l,s,o,c,f,m,d+1,G,!y)||K&&yi(Y,W,l,s,o,c,f,m,d+1,G,!y),Fn.releasePrimitive(G)}else if(X)if(D)N=yi(h,P,s,l,o,f,c,d,m+1,p,y);else{const G=Fn.getPrimitive();G.copy(lh).applyMatrix4(s);const Z=li(h),W=Xt(h,_);Ve(Z,T,Ss),Ve(W,T,_s);const ne=G.intersectsBox(Ss),K=G.intersectsBox(_s);N=ne&&yi(P,Z,l,s,o,c,f,m,d+1,G,!y)||K&&yi(P,W,l,s,o,c,f,m,d+1,G,!y),Fn.releasePrimitive(G)}}return N}const Po=new St,Xg=new zt,QS={strategy:Hv,maxDepth:40,maxLeafTris:10,useSharedArrayBuffer:!1,setBoundingBox:!0,onProgress:null,indirect:!1,verbose:!0,range:null};class Vh{static serialize(a,s={}){s={cloneBuffers:!0,...s};const l=a.geometry,o=a._roots,f=a._indirectBuffer,c=l.getIndex();let d;return s.cloneBuffers?d={roots:o.map(m=>m.slice()),index:c?c.array.slice():null,indirectBuffer:f?f.slice():null}:d={roots:o,index:c?c.array:null,indirectBuffer:f},d}static deserialize(a,s,l={}){l={setIndex:!0,indirect:!!a.indirectBuffer,...l};const{index:o,roots:f,indirectBuffer:c}=a,d=new Vh(s,{...l,[$f]:!0});if(d._roots=f,d._indirectBuffer=c||null,l.setIndex){const m=s.getIndex();if(m===null){const p=new dt(a.index,1,!1);s.setIndex(p)}else m.array!==o&&(m.array.set(o),m.needsUpdate=!0)}return d}get indirect(){return!!this._indirectBuffer}constructor(a,s={}){if(a.isBufferGeometry){if(a.index&&a.index.isInterleavedBufferAttribute)throw new Error("MeshBVH: InterleavedBufferAttribute is not supported for the index attribute.")}else throw new Error("MeshBVH: Only BufferGeometries are supported.");if(s=Object.assign({...QS,[$f]:!1},s),s.useSharedArrayBuffer&&!KS())throw new Error("MeshBVH: SharedArrayBuffer is not available.");this.geometry=a,this._roots=null,this._indirectBuffer=null,s[$f]||(fS(this,s),!a.boundingBox&&s.setBoundingBox&&(a.boundingBox=this.getBoundingBox(new zt))),this.resolveTriangleIndex=s.indirect?l=>this._indirectBuffer[l]:l=>l}refit(a=null){return(this.indirect?IS:AS)(this,a)}traverse(a,s=0){const l=this._roots[s],o=new Uint32Array(l),f=new Uint16Array(l);c(0);function c(d,m=0){const p=d*2,y=f[p+15]===sc;if(y){const v=o[d+6],g=f[p+14];a(m,y,new Float32Array(l,d*4,6),v,g)}else{const v=d+Vn/4,g=o[d+6],T=o[d+7];a(m,y,new Float32Array(l,d*4,6),T)||(c(v,m+1),c(g,m+1))}}}raycast(a,s=Wo,l=0,o=1/0){const f=this._roots,c=this.geometry,d=[],m=s.isMaterial,p=Array.isArray(s),y=c.groups,v=m?s.side:s,g=this.indirect?FS:CS;for(let T=0,_=f.length;T<_;T++){const w=p?s[y[T].materialIndex].side:v,x=d.length;if(g(this,T,w,a,d,l,o),p){const A=y[T].materialIndex;for(let M=x,E=d.length;M<E;M++)d[M].face.materialIndex=A}}return d}raycastFirst(a,s=Wo,l=0,o=1/0){const f=this._roots,c=this.geometry,d=s.isMaterial,m=Array.isArray(s);let p=null;const y=c.groups,v=d?s.side:s,g=this.indirect?VS:OS;for(let T=0,_=f.length;T<_;T++){const w=m?s[y[T].materialIndex].side:v,x=g(this,T,w,a,l,o);x!=null&&(p==null||x.distance<p.distance)&&(p=x,m&&(x.face.materialIndex=y[T].materialIndex))}return p}intersectsGeometry(a,s){let l=!1;const o=this._roots,f=this.indirect?PS:NS;for(let c=0,d=o.length;c<d&&(l=f(this,c,a,s),!l);c++);return l}shapecast(a){const s=ri.getPrimitive(),l=this.indirect?RS:wS;let{boundsTraverseOrder:o,intersectsBounds:f,intersectsRange:c,intersectsTriangle:d}=a;if(c&&d){const v=c;c=(g,T,_,w,x)=>v(g,T,_,w,x)?!0:l(g,T,this,d,_,w,s)}else c||(d?c=(v,g,T,_)=>l(v,g,this,d,T,_,s):c=(v,g,T)=>T);let m=!1,p=0;const y=this._roots;for(let v=0,g=y.length;v<g;v++){const T=y[v];if(m=vS(this,v,f,c,o,p),m)break;p+=T.byteLength}return ri.releasePrimitive(s),m}bvhcast(a,s,l){let{intersectsRanges:o,intersectsTriangles:f}=l;const c=ri.getPrimitive(),d=this.geometry.index,m=this.geometry.attributes.position,p=this.indirect?_=>{const w=this.resolveTriangleIndex(_);Ke(c,w*3,d,m)}:_=>{Ke(c,_*3,d,m)},y=ri.getPrimitive(),v=a.geometry.index,g=a.geometry.attributes.position,T=a.indirect?_=>{const w=a.resolveTriangleIndex(_);Ke(y,w*3,v,g)}:_=>{Ke(y,_*3,v,g)};if(f){const _=(w,x,A,M,E,C,D,U)=>{for(let N=A,Y=A+M;N<Y;N++){T(N),y.a.applyMatrix4(s),y.b.applyMatrix4(s),y.c.applyMatrix4(s),y.needsUpdate=!0;for(let P=w,j=w+x;P<j;P++)if(p(P),c.needsUpdate=!0,f(c,y,P,N,E,C,D,U))return!0}return!1};if(o){const w=o;o=function(x,A,M,E,C,D,U,N){return w(x,A,M,E,C,D,U,N)?!0:_(x,A,M,E,C,D,U,N)}}else o=_}return ZS(this,a,s,o)}intersectsBox(a,s){return Po.set(a.min,a.max,s),Po.needsUpdate=!0,this.shapecast({intersectsBounds:l=>Po.intersectsBox(l),intersectsTriangle:l=>Po.intersectsTriangle(l)})}intersectsSphere(a){return this.shapecast({intersectsBounds:s=>a.intersectsBox(s),intersectsTriangle:s=>s.intersectsSphere(a)})}closestPointToGeometry(a,s,l={},o={},f=0,c=1/0){return(this.indirect?XS:HS)(this,a,s,l,o,f,c)}closestPointToPoint(a,s={},l=0,o=1/0){return yS(this,a,s,l,o)}getBoundingBox(a){return a.makeEmpty(),this._roots.forEach(l=>{Ve(0,new Float32Array(l),Xg),a.union(Xg)}),a}}function WS(h){switch(h){case 1:return"R";case 2:return"RG";case 3:return"RGBA";case 4:return"RGBA"}throw new Error}function JS(h){switch(h){case 1:return Jo;case 2:return Dv;case 3:return nt;case 4:return nt}}function Kg(h){switch(h){case 1:return OT;case 2:return Cv;case 3:return bh;case 4:return bh}}class kv extends oi{constructor(){super(),this.minFilter=He,this.magFilter=He,this.generateMipmaps=!1,this.overrideItemSize=null,this._forcedType=null}updateFrom(a){const s=this.overrideItemSize,l=a.itemSize,o=a.count;if(s!==null){if(l*o%s!==0)throw new Error("VertexAttributeTexture: overrideItemSize must divide evenly into buffer length.");a.itemSize=s,a.count=o*l/s}const f=a.itemSize,c=a.count,d=a.normalized,m=a.array.constructor,p=m.BYTES_PER_ELEMENT;let y=this._forcedType,v=f;if(y===null)switch(m){case Float32Array:y=mt;break;case Uint8Array:case Uint16Array:case Uint32Array:y=kl;break;case Int8Array:case Int16Array:case Int32Array:y=jf;break}let g,T,_,w,x=WS(f);switch(y){case mt:_=1,T=JS(f),d&&p===1?(w=m,x+="8",m===Uint8Array?g=yh:(g=xg,x+="_SNORM")):(w=Float32Array,x+="32F",g=mt);break;case jf:x+=p*8+"I",_=d?Math.pow(2,m.BYTES_PER_ELEMENT*8-1):1,T=Kg(f),p===1?(w=Int8Array,g=xg):p===2?(w=Int16Array,g=DT):(w=Int32Array,g=jf);break;case kl:x+=p*8+"UI",_=d?Math.pow(2,m.BYTES_PER_ELEMENT*8-1):1,T=Kg(f),p===1?(w=Uint8Array,g=yh):p===2?(w=Uint16Array,g=CT):(w=Uint32Array,g=kl);break}v===3&&(T===nt||T===bh)&&(v=4);const A=Math.ceil(Math.sqrt(c))||1,M=v*A*A,E=new w(M),C=a.normalized;a.normalized=!1;for(let D=0;D<c;D++){const U=v*D;E[U]=a.getX(D)/_,f>=2&&(E[U+1]=a.getY(D)/_),f>=3&&(E[U+2]=a.getZ(D)/_,v===4&&(E[U+3]=1)),f>=4&&(E[U+3]=a.getW(D)/_)}a.normalized=C,this.internalFormat=x,this.format=T,this.type=g,this.image.width=A,this.image.height=A,this.image.data=E,this.needsUpdate=!0,this.dispose(),a.itemSize=l,a.count=o}}class Yv extends kv{constructor(){super(),this._forcedType=kl}}class Xv extends kv{constructor(){super(),this._forcedType=mt}}class $S{constructor(){this.index=new Yv,this.position=new Xv,this.bvhBounds=new oi,this.bvhContents=new oi,this._cachedIndexAttr=null,this.index.overrideItemSize=3}updateFrom(a){const{geometry:s}=a;if(t_(a,this.bvhBounds,this.bvhContents),this.position.updateFrom(s.attributes.position),a.indirect){const l=a._indirectBuffer;if(this._cachedIndexAttr===null||this._cachedIndexAttr.count!==l.length)if(s.index)this._cachedIndexAttr=s.index.clone();else{const o=Gv(Fv(s));this._cachedIndexAttr=new dt(o,1,!1)}e_(s,l,this._cachedIndexAttr),this.index.updateFrom(this._cachedIndexAttr)}else this.index.updateFrom(s.index)}dispose(){const{index:a,position:s,bvhBounds:l,bvhContents:o}=this;a&&a.dispose(),s&&s.dispose(),l&&l.dispose(),o&&o.dispose()}}function e_(h,a,s){const l=s.array,o=h.index?h.index.array:null;for(let f=0,c=a.length;f<c;f++){const d=3*f,m=3*a[f];for(let p=0;p<3;p++)l[d+p]=o?o[m+p]:m+p}}function t_(h,a,s){const l=h._roots;if(l.length!==1)throw new Error("MeshBVHUniformStruct: Multi-root BVHs not supported.");const o=l[0],f=new Uint16Array(o),c=new Uint32Array(o),d=new Float32Array(o),m=o.byteLength/Vn,p=2*Math.ceil(Math.sqrt(m/2)),y=new Float32Array(4*p*p),v=Math.ceil(Math.sqrt(m)),g=new Uint32Array(2*v*v);for(let T=0;T<m;T++){const _=T*Vn/4,w=_*2,x=_;for(let A=0;A<3;A++)y[8*T+0+A]=d[x+0+A],y[8*T+4+A]=d[x+3+A];if(xt(w,f)){const A=Yt(w,f),M=Nt(_,c),E=4294901760|A;g[T*2+0]=E,g[T*2+1]=M}else{const A=4*Xt(_,c)/Vn,M=Ih(_,c);g[T*2+0]=M,g[T*2+1]=A}}a.image.data=y,a.image.width=p,a.image.height=p,a.format=nt,a.type=mt,a.internalFormat="RGBA32F",a.minFilter=He,a.magFilter=He,a.generateMipmaps=!1,a.needsUpdate=!0,a.dispose(),s.image.data=g,s.image.width=v,s.image.height=v,s.format=Cv,s.type=kl,s.internalFormat="RG32UI",s.minFilter=He,s.magFilter=He,s.generateMipmaps=!1,s.needsUpdate=!0,s.dispose()}const i_=`

// A stack of uint32 indices can can store the indices for
// a perfectly balanced tree with a depth up to 31. Lower stack
// depth gets higher performance.
//
// However not all trees are balanced. Best value to set this to
// is the trees max depth.
#ifndef BVH_STACK_DEPTH
#define BVH_STACK_DEPTH 60
#endif

#ifndef INFINITY
#define INFINITY 1e20
#endif

// Utilities
uvec4 uTexelFetch1D( usampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

ivec4 iTexelFetch1D( isampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

vec4 texelFetch1D( sampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

vec4 textureSampleBarycoord( sampler2D tex, vec3 barycoord, uvec3 faceIndices ) {

	return
		barycoord.x * texelFetch1D( tex, faceIndices.x ) +
		barycoord.y * texelFetch1D( tex, faceIndices.y ) +
		barycoord.z * texelFetch1D( tex, faceIndices.z );

}

void ndcToCameraRay(
	vec2 coord, mat4 cameraWorld, mat4 invProjectionMatrix,
	out vec3 rayOrigin, out vec3 rayDirection
) {

	// get camera look direction and near plane for camera clipping
	vec4 lookDirection = cameraWorld * vec4( 0.0, 0.0, - 1.0, 0.0 );
	vec4 nearVector = invProjectionMatrix * vec4( 0.0, 0.0, - 1.0, 1.0 );
	float near = abs( nearVector.z / nearVector.w );

	// get the camera direction and position from camera matrices
	vec4 origin = cameraWorld * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec4 direction = invProjectionMatrix * vec4( coord, 0.5, 1.0 );
	direction /= direction.w;
	direction = cameraWorld * direction - origin;

	// slide the origin along the ray until it sits at the near clip plane position
	origin.xyz += direction.xyz * near / dot( direction, lookDirection );

	rayOrigin = origin.xyz;
	rayDirection = direction.xyz;

}
`,n_=`

#ifndef TRI_INTERSECT_EPSILON
#define TRI_INTERSECT_EPSILON 1e-5
#endif

// Raycasting
bool intersectsBounds( vec3 rayOrigin, vec3 rayDirection, vec3 boundsMin, vec3 boundsMax, out float dist ) {

	// https://www.reddit.com/r/opengl/comments/8ntzz5/fast_glsl_ray_box_intersection/
	// https://tavianator.com/2011/ray_box.html
	vec3 invDir = 1.0 / rayDirection;

	// find intersection distances for each plane
	vec3 tMinPlane = invDir * ( boundsMin - rayOrigin );
	vec3 tMaxPlane = invDir * ( boundsMax - rayOrigin );

	// get the min and max distances from each intersection
	vec3 tMinHit = min( tMaxPlane, tMinPlane );
	vec3 tMaxHit = max( tMaxPlane, tMinPlane );

	// get the furthest hit distance
	vec2 t = max( tMinHit.xx, tMinHit.yz );
	float t0 = max( t.x, t.y );

	// get the minimum hit distance
	t = min( tMaxHit.xx, tMaxHit.yz );
	float t1 = min( t.x, t.y );

	// set distance to 0.0 if the ray starts inside the box
	dist = max( t0, 0.0 );

	return t1 >= dist;

}

bool intersectsTriangle(
	vec3 rayOrigin, vec3 rayDirection, vec3 a, vec3 b, vec3 c,
	out vec3 barycoord, out vec3 norm, out float dist, out float side
) {

	// https://stackoverflow.com/questions/42740765/intersection-between-line-and-triangle-in-3d
	vec3 edge1 = b - a;
	vec3 edge2 = c - a;
	norm = cross( edge1, edge2 );

	float det = - dot( rayDirection, norm );
	float invdet = 1.0 / det;

	vec3 AO = rayOrigin - a;
	vec3 DAO = cross( AO, rayDirection );

	vec4 uvt;
	uvt.x = dot( edge2, DAO ) * invdet;
	uvt.y = - dot( edge1, DAO ) * invdet;
	uvt.z = dot( AO, norm ) * invdet;
	uvt.w = 1.0 - uvt.x - uvt.y;

	// set the hit information
	barycoord = uvt.wxy; // arranged in A, B, C order
	dist = uvt.z;
	side = sign( det );
	norm = side * normalize( norm );

	// add an epsilon to avoid misses between triangles
	uvt += vec4( TRI_INTERSECT_EPSILON );

	return all( greaterThanEqual( uvt, vec4( 0.0 ) ) );

}

bool intersectTriangles(
	// geometry info and triangle range
	sampler2D positionAttr, usampler2D indexAttr, uint offset, uint count,

	// ray
	vec3 rayOrigin, vec3 rayDirection,

	// outputs
	inout float minDistance, inout uvec4 faceIndices, inout vec3 faceNormal, inout vec3 barycoord,
	inout float side, inout float dist
) {

	bool found = false;
	vec3 localBarycoord, localNormal;
	float localDist, localSide;
	for ( uint i = offset, l = offset + count; i < l; i ++ ) {

		uvec3 indices = uTexelFetch1D( indexAttr, i ).xyz;
		vec3 a = texelFetch1D( positionAttr, indices.x ).rgb;
		vec3 b = texelFetch1D( positionAttr, indices.y ).rgb;
		vec3 c = texelFetch1D( positionAttr, indices.z ).rgb;

		if (
			intersectsTriangle( rayOrigin, rayDirection, a, b, c, localBarycoord, localNormal, localDist, localSide )
			&& localDist < minDistance
		) {

			found = true;
			minDistance = localDist;

			faceIndices = uvec4( indices.xyz, i );
			faceNormal = localNormal;

			side = localSide;
			barycoord = localBarycoord;
			dist = localDist;

		}

	}

	return found;

}

bool intersectsBVHNodeBounds( vec3 rayOrigin, vec3 rayDirection, sampler2D bvhBounds, uint currNodeIndex, out float dist ) {

	uint cni2 = currNodeIndex * 2u;
	vec3 boundsMin = texelFetch1D( bvhBounds, cni2 ).xyz;
	vec3 boundsMax = texelFetch1D( bvhBounds, cni2 + 1u ).xyz;
	return intersectsBounds( rayOrigin, rayDirection, boundsMin, boundsMax, dist );

}

// use a macro to hide the fact that we need to expand the struct into separate fields
#define	bvhIntersectFirstHit(		bvh,		rayOrigin, rayDirection, faceIndices, faceNormal, barycoord, side, dist	)	_bvhIntersectFirstHit(		bvh.position, bvh.index, bvh.bvhBounds, bvh.bvhContents,		rayOrigin, rayDirection, faceIndices, faceNormal, barycoord, side, dist	)

bool _bvhIntersectFirstHit(
	// bvh info
	sampler2D bvh_position, usampler2D bvh_index, sampler2D bvh_bvhBounds, usampler2D bvh_bvhContents,

	// ray
	vec3 rayOrigin, vec3 rayDirection,

	// output variables split into separate variables due to output precision
	inout uvec4 faceIndices, inout vec3 faceNormal, inout vec3 barycoord,
	inout float side, inout float dist
) {

	// stack needs to be twice as long as the deepest tree we expect because
	// we push both the left and right child onto the stack every traversal
	int ptr = 0;
	uint stack[ BVH_STACK_DEPTH ];
	stack[ 0 ] = 0u;

	float triangleDistance = INFINITY;
	bool found = false;
	while ( ptr > - 1 && ptr < BVH_STACK_DEPTH ) {

		uint currNodeIndex = stack[ ptr ];
		ptr --;

		// check if we intersect the current bounds
		float boundsHitDistance;
		if (
			! intersectsBVHNodeBounds( rayOrigin, rayDirection, bvh_bvhBounds, currNodeIndex, boundsHitDistance )
			|| boundsHitDistance > triangleDistance
		) {

			continue;

		}

		uvec2 boundsInfo = uTexelFetch1D( bvh_bvhContents, currNodeIndex ).xy;
		bool isLeaf = bool( boundsInfo.x & 0xffff0000u );

		if ( isLeaf ) {

			uint count = boundsInfo.x & 0x0000ffffu;
			uint offset = boundsInfo.y;

			found = intersectTriangles(
				bvh_position, bvh_index, offset, count,
				rayOrigin, rayDirection, triangleDistance,
				faceIndices, faceNormal, barycoord, side, dist
			) || found;

		} else {

			uint leftIndex = currNodeIndex + 1u;
			uint splitAxis = boundsInfo.x & 0x0000ffffu;
			uint rightIndex = boundsInfo.y;

			bool leftToRight = rayDirection[ splitAxis ] >= 0.0;
			uint c1 = leftToRight ? leftIndex : rightIndex;
			uint c2 = leftToRight ? rightIndex : leftIndex;

			// set c2 in the stack so we traverse it later. We need to keep track of a pointer in
			// the stack while we traverse. The second pointer added is the one that will be
			// traversed first
			ptr ++;
			stack[ ptr ] = c2;

			ptr ++;
			stack[ ptr ] = c1;

		}

	}

	return found;

}
`,a_=`
struct BVH {

	usampler2D index;
	sampler2D position;

	sampler2D bvhBounds;
	usampler2D bvhContents;

};
`;function Kv(h,a,s=0){if(h.isInterleavedBufferAttribute){const l=h.itemSize;for(let o=0,f=h.count;o<f;o++){const c=o+s;a.setX(c,h.getX(o)),l>=2&&a.setY(c,h.getY(o)),l>=3&&a.setZ(c,h.getZ(o)),l>=4&&a.setW(c,h.getW(o))}}else{const l=a.array,o=l.constructor,f=l.BYTES_PER_ELEMENT*h.itemSize*s;new o(l.buffer,f,h.array.length).set(h.array)}}function ql(h,a=null){const s=h.array.constructor,l=h.normalized,o=h.itemSize,f=a===null?h.count:a;return new dt(new s(o*f),o,l)}function Rs(h,a){if(!h&&!a)return!0;if(!!h!=!!a)return!1;const s=h.count===a.count,l=h.normalized===a.normalized,o=h.array.constructor===a.array.constructor,f=h.itemSize===a.itemSize;return!(!s||!l||!o||!f)}function s_(h){const a=h[0].index!==null,s=new Set(Object.keys(h[0].attributes));if(!h[0].getAttribute("position"))throw new Error("StaticGeometryGenerator: position attribute is required.");for(let l=0;l<h.length;++l){const o=h[l];let f=0;if(a!==(o.index!==null))throw new Error("StaticGeometryGenerator: All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.");for(const c in o.attributes){if(!s.has(c))throw new Error('StaticGeometryGenerator: All geometries must have compatible attributes; make sure "'+c+'" attribute exists among all geometries, or in none of them.');f++}if(f!==s.size)throw new Error("StaticGeometryGenerator: All geometries must have the same number of attributes.")}}function l_(h){let a=0;for(let s=0,l=h.length;s<l;s++)a+=h[s].getIndex().count;return a}function r_(h){let a=0;for(let s=0,l=h.length;s<l;s++)a+=h[s].getAttribute("position").count;return a}function o_(h,a,s){h.index&&h.index.count!==a&&h.setIndex(null);const l=h.attributes;for(const o in l)l[o].count!==s&&h.deleteAttribute(o)}function c_(h,a={},s=new ci){const{useGroups:l=!1,forceUpdate:o=!1,skipAssigningAttributes:f=[],overwriteIndex:c=!0}=a;s_(h);const d=h[0].index!==null,m=d?l_(h):-1,p=r_(h);if(o_(s,m,p),l){let v=0;for(let g=0,T=h.length;g<T;g++){const _=h[g];let w;d?w=_.getIndex().count:w=_.getAttribute("position").count,s.addGroup(v,w,g),v+=w}}if(d){let v=!1;if(s.index||(s.setIndex(new dt(new Uint32Array(m),1,!1)),v=!0),v||c){let g=0,T=0;const _=s.getIndex();for(let w=0,x=h.length;w<x;w++){const A=h[w],M=A.getIndex();if(!(!o&&!v&&f[w]))for(let C=0;C<M.count;++C)_.setX(g+C,M.getX(C)+T);g+=M.count,T+=A.getAttribute("position").count}}}const y=Object.keys(h[0].attributes);for(let v=0,g=y.length;v<g;v++){let T=!1;const _=y[v];if(!s.getAttribute(_)){const A=h[0].getAttribute(_);s.setAttribute(_,ql(A,p)),T=!0}let w=0;const x=s.getAttribute(_);for(let A=0,M=h.length;A<M;A++){const E=h[A],C=!o&&!T&&f[A],D=E.getAttribute(_);if(!C)if(_==="color"&&x.itemSize!==D.itemSize)for(let U=w,N=D.count;U<N;U++)D.setXYZW(U,x.getX(U),x.getY(U),x.getZ(U),1);else Kv(D,x,w);w+=D.count}}}function u_(h,a,s){const l=h.index,f=h.attributes.position.count,c=l?l.count:f;let d=h.groups;d.length===0&&(d=[{count:c,start:0,materialIndex:0}]);let m=h.getAttribute("materialIndex");if(!m||m.count!==f){let y;s.length<=255?y=new Uint8Array(f):y=new Uint16Array(f),m=new dt(y,1,!1),h.deleteAttribute("materialIndex"),h.setAttribute("materialIndex",m)}const p=m.array;for(let y=0;y<d.length;y++){const v=d[y],g=v.start,T=v.count,_=Math.min(T,c-g),w=Array.isArray(a)?a[v.materialIndex]:a,x=s.indexOf(w);for(let A=0;A<_;A++){let M=g+A;l&&(M=l.getX(M)),p[M]=x}}}function f_(h,a){if(!h.index){const s=h.attributes.position.count,l=new Array(s);for(let o=0;o<s;o++)l[o]=o;h.setIndex(l)}if(!h.attributes.normal&&a&&a.includes("normal")&&h.computeVertexNormals(),!h.attributes.uv&&a&&a.includes("uv")){const s=h.attributes.position.count;h.setAttribute("uv",new dt(new Float32Array(s*2),2,!1))}if(!h.attributes.uv2&&a&&a.includes("uv2")){const s=h.attributes.position.count;h.setAttribute("uv2",new dt(new Float32Array(s*2),2,!1))}if(!h.attributes.tangent&&a&&a.includes("tangent"))if(h.attributes.uv&&h.attributes.normal)h.computeTangents();else{const s=h.attributes.position.count;h.setAttribute("tangent",new dt(new Float32Array(s*4),4,!1))}if(!h.attributes.color&&a&&a.includes("color")){const s=h.attributes.position.count,l=new Float32Array(s*4);l.fill(1),h.setAttribute("color",new dt(l,4))}}function Ph(h){let a=0;if(h.byteLength!==0){const s=new Uint8Array(h);for(let l=0;l<h.byteLength;l++){const o=s[l];a=(a<<5)-a+o,a|=0}}return a}function Zg(h){let a=h.uuid;const s=Object.values(h.attributes);h.index&&(s.push(h.index),a+=`index|${h.index.version}`);const l=Object.keys(s).sort();for(const o of l){const f=s[o];a+=`${o}_${f.version}|`}return a}function Qg(h){const a=h.skeleton;return a?(a.boneTexture||a.computeBoneTexture(),`${Ph(a.boneTexture.image.data.buffer)}_${a.boneTexture.uuid}`):null}class h_{constructor(a=null){this.matrixWorld=new qe,this.geometryHash=null,this.skeletonHash=null,this.primitiveCount=-1,a!==null&&this.updateFrom(a)}updateFrom(a){const s=a.geometry,l=(s.index?s.index.count:s.attributes.position.count)/3;this.matrixWorld.copy(a.matrixWorld),this.geometryHash=Zg(s),this.primitiveCount=l,this.skeletonHash=Qg(a)}didChange(a){const s=a.geometry,l=(s.index?s.index.count:s.attributes.position.count)/3;return!(this.matrixWorld.equals(a.matrixWorld)&&this.geometryHash===Zg(s)&&this.skeletonHash===Qg(a)&&this.primitiveCount===l)}}const ba=new Q,Ta=new Q,xa=new Q,Wg=new Bs,qo=new Q,oh=new Q,Jg=new Bs,$g=new Bs,jo=new qe,ev=new qe;function tv(h,a,s){const l=h.skeleton,o=h.geometry,f=l.bones,c=l.boneInverses;Jg.fromBufferAttribute(o.attributes.skinIndex,a),$g.fromBufferAttribute(o.attributes.skinWeight,a),jo.elements.fill(0);for(let d=0;d<4;d++){const m=$g.getComponent(d);if(m!==0){const p=Jg.getComponent(d);ev.multiplyMatrices(f[p].matrixWorld,c[p]),d_(jo,ev,m)}}return jo.multiply(h.bindMatrix).premultiply(h.bindMatrixInverse),s.transformDirection(jo),s}function ch(h,a,s,l,o){qo.set(0,0,0);for(let f=0,c=h.length;f<c;f++){const d=a[f],m=h[f];d!==0&&(oh.fromBufferAttribute(m,l),s?qo.addScaledVector(oh,d):qo.addScaledVector(oh.sub(o),d))}o.add(qo)}function d_(h,a,s){const l=h.elements,o=a.elements;for(let f=0,c=o.length;f<c;f++)l[f]+=o[f]*s}function m_(h){const{index:a,attributes:s}=h;if(a)for(let l=0,o=a.count;l<o;l+=3){const f=a.getX(l),c=a.getX(l+2);a.setX(l,c),a.setX(l+2,f)}else for(const l in s){const o=s[l],f=o.itemSize;for(let c=0,d=o.count;c<d;c+=3)for(let m=0;m<f;m++){const p=o.getComponent(c,m),y=o.getComponent(c+2,m);o.setComponent(c,m,y),o.setComponent(c+2,m,p)}}return h}function p_(h,a={},s=new ci){a={applyWorldTransforms:!0,attributes:[],...a};const l=h.geometry,o=a.applyWorldTransforms,f=a.attributes.includes("normal"),c=a.attributes.includes("tangent"),d=l.attributes,m=s.attributes;for(const M in s.attributes)(!a.attributes.includes(M)||!(M in l.attributes))&&s.deleteAttribute(M);!s.index&&l.index&&(s.index=l.index.clone()),m.position||s.setAttribute("position",ql(d.position)),f&&!m.normal&&d.normal&&s.setAttribute("normal",ql(d.normal)),c&&!m.tangent&&d.tangent&&s.setAttribute("tangent",ql(d.tangent)),Rs(l.index,s.index),Rs(d.position,m.position),f&&Rs(d.normal,m.normal),c&&Rs(d.tangent,m.tangent);const p=d.position,y=f?d.normal:null,v=c?d.tangent:null,g=l.morphAttributes.position,T=l.morphAttributes.normal,_=l.morphAttributes.tangent,w=l.morphTargetsRelative,x=h.morphTargetInfluences,A=new NT;A.getNormalMatrix(h.matrixWorld),l.index&&s.index.array.set(l.index.array);for(let M=0,E=d.position.count;M<E;M++)ba.fromBufferAttribute(p,M),y&&Ta.fromBufferAttribute(y,M),v&&(Wg.fromBufferAttribute(v,M),xa.fromBufferAttribute(v,M)),x&&(g&&ch(g,x,w,M,ba),T&&ch(T,x,w,M,Ta),_&&ch(_,x,w,M,xa)),h.isSkinnedMesh&&(h.applyBoneTransform(M,ba),y&&tv(h,M,Ta),v&&tv(h,M,xa)),o&&ba.applyMatrix4(h.matrixWorld),m.position.setXYZ(M,ba.x,ba.y,ba.z),y&&(o&&Ta.applyNormalMatrix(A),m.normal.setXYZ(M,Ta.x,Ta.y,Ta.z)),v&&(o&&xa.transformDirection(h.matrixWorld),m.tangent.setXYZW(M,xa.x,xa.y,xa.z,Wg.w));for(const M in a.attributes){const E=a.attributes[M];E==="position"||E==="tangent"||E==="normal"||!(E in d)||(m[E]||s.setAttribute(E,ql(d[E])),Rs(d[E],m[E]),Kv(d[E],m[E]))}return h.matrixWorld.determinant()<0&&m_(s),s}class g_ extends ci{constructor(){super(),this.version=0,this.hash=null,this._diff=new h_}isCompatible(a,s){const l=a.geometry;for(let o=0;o<s.length;o++){const f=s[o],c=l.attributes[f],d=this.attributes[f];if(c&&!Rs(c,d))return!1}return!0}updateFrom(a,s){const l=this._diff;return l.didChange(a)?(p_(a,s,this),l.updateFrom(a),this.version++,this.hash=`${this.uuid}_${this.version}`,!0):!1}}const Oh=0,Zv=1,Qv=2;function v_(h,a){for(let s=0,l=h.length;s<l;s++)h[s].traverseVisible(f=>{f.isMesh&&a(f)})}function y_(h){const a=[];for(let s=0,l=h.length;s<l;s++){const o=h[s];Array.isArray(o.material)?a.push(...o.material):a.push(o.material)}return a}function b_(h,a,s){if(h.length===0){a.setIndex(null);const l=a.attributes;for(const o in l)a.deleteAttribute(o);for(const o in s.attributes)a.setAttribute(s.attributes[o],new dt(new Float32Array(0),4,!1))}else c_(h,s,a);for(const l in a.attributes)a.attributes[l].needsUpdate=!0}class T_{constructor(a){this.objects=null,this.useGroups=!0,this.applyWorldTransforms=!0,this.generateMissingAttributes=!0,this.overwriteIndex=!0,this.attributes=["position","normal","color","tangent","uv","uv2"],this._intermediateGeometry=new Map,this._geometryMergeSets=new WeakMap,this._mergeOrder=[],this._dummyMesh=null,this.setObjects(a||[])}_getDummyMesh(){if(!this._dummyMesh){const a=new Cs,s=new ci;s.setAttribute("position",new dt(new Float32Array(9),3)),this._dummyMesh=new kt(s,a)}return this._dummyMesh}_getMeshes(){const a=[];return v_(this.objects,s=>{a.push(s)}),a.sort((s,l)=>s.uuid>l.uuid?1:s.uuid<l.uuid?-1:0),a.length===0&&a.push(this._getDummyMesh()),a}_updateIntermediateGeometries(){const{_intermediateGeometry:a}=this,s=this._getMeshes(),l=new Set(a.keys()),o={attributes:this.attributes,applyWorldTransforms:this.applyWorldTransforms};for(let f=0,c=s.length;f<c;f++){const d=s[f],m=d.uuid;l.delete(m);let p=a.get(m);(!p||!p.isCompatible(d,this.attributes))&&(p&&p.dispose(),p=new g_,a.set(m,p)),p.updateFrom(d,o)&&this.generateMissingAttributes&&f_(p,this.attributes)}l.forEach(f=>{a.delete(f)})}setObjects(a){Array.isArray(a)?this.objects=[...a]:this.objects=[a]}generate(a=new ci){const{useGroups:s,overwriteIndex:l,_intermediateGeometry:o,_geometryMergeSets:f}=this,c=this._getMeshes(),d=[],m=[],p=f.get(a)||[];this._updateIntermediateGeometries();let y=!1;c.length!==p.length&&(y=!0);for(let g=0,T=c.length;g<T;g++){const _=c[g],w=o.get(_.uuid);m.push(w);const x=p[g];!x||x.uuid!==w.uuid?(d.push(!1),y=!0):x.version!==w.version?d.push(!1):d.push(!0)}b_(m,a,{useGroups:s,forceUpdate:y,skipAssigningAttributes:d,overwriteIndex:l}),y&&a.dispose(),f.set(a,m.map(g=>({version:g.version,uuid:g.uuid})));let v=Oh;return y?v=Qv:d.includes(!1)&&(v=Zv),{changeType:v,materials:y_(c),geometry:a}}}function x_(h){const a=new Set;for(let s=0,l=h.length;s<l;s++){const o=h[s];for(const f in o){const c=o[f];c&&c.isTexture&&a.add(c)}}return Array.from(a)}function S_(h){const a=[],s=new Set;for(let o=0,f=h.length;o<f;o++)h[o].traverse(c=>{c.visible&&(c.isRectAreaLight||c.isSpotLight||c.isPointLight||c.isDirectionalLight)&&(a.push(c),c.iesMap&&s.add(c.iesMap))});const l=Array.from(s).sort((o,f)=>o.uuid<f.uuid?1:o.uuid>f.uuid?-1:0);return{lights:a,iesTextures:l}}class __{get initialized(){return!!this.bvh}constructor(a){this.bvhOptions={},this.attributes=["position","normal","tangent","color","uv","uv2"],this.generateBVH=!0,this.bvh=null,this.geometry=new ci,this.staticGeometryGenerator=new T_(a),this._bvhWorker=null,this._pendingGenerate=null,this._buildAsync=!1,this._materialUuids=null}setObjects(a){this.staticGeometryGenerator.setObjects(a)}setBVHWorker(a){this._bvhWorker=a}async generateAsync(a=null){if(!this._bvhWorker)throw new Error('PathTracingSceneGenerator: "setBVHWorker" must be called before "generateAsync" can be called.');if(this.bvh instanceof Promise)return this._pendingGenerate||(this._pendingGenerate=new Promise(async()=>(await this.bvh,this._pendingGenerate=null,this.generateAsync(a)))),this._pendingGenerate;{this._buildAsync=!0;const s=this.generate(a);return this._buildAsync=!1,s.bvh=this.bvh=await s.bvh,s}}generate(a=null){const{staticGeometryGenerator:s,geometry:l,attributes:o}=this,f=s.objects;s.attributes=o,f.forEach(g=>{g.traverse(T=>{T.isSkinnedMesh&&T.skeleton&&T.skeleton.update()})});const c=s.generate(l),d=c.materials;let m=c.changeType!==Oh||this._materialUuids===null||this._materialUuids.length!==length;if(!m){for(let g=0,T=d.length;g<T;g++)if(d[g].uuid!==this._materialUuids[g]){m=!0;break}}const p=x_(d),{lights:y,iesTextures:v}=S_(f);if(m&&(u_(l,d,d),this._materialUuids=d.map(g=>g.uuid)),this.generateBVH){if(this.bvh instanceof Promise)throw new Error("PathTracingSceneGenerator: BVH is already building asynchronously.");if(c.changeType===Qv){const g={strategy:Iv,maxLeafTris:1,indirect:!0,onProgress:a,...this.bvhOptions};this._buildAsync?this.bvh=this._bvhWorker.generate(l,g):this.bvh=new Vh(l,g)}else c.changeType===Zv&&this.bvh.refit()}return{bvhChanged:c.changeType!==Oh,bvh:this.bvh,needsMaterialIndexUpdate:m,lights:y,iesTextures:v,geometry:l,materials:d,textures:p,objects:f}}}const w_=new Av(-1,1,1,-1,0,1);class A_ extends ci{constructor(){super(),this.setAttribute("position",new $o([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new $o([0,2,0,0,2,0],2))}}const E_=new A_;class Us{constructor(a){this._mesh=new kt(E_,a)}dispose(){this._mesh.geometry.dispose()}render(a){a.render(this._mesh,w_)}get material(){return this._mesh.material}set material(a){this._mesh.material=a}}class qh extends ac{set needsUpdate(a){super.needsUpdate=!0,this.dispatchEvent({type:"recompilation"})}constructor(a){super(a);for(const s in this.uniforms)Object.defineProperty(this,s,{get(){return this.uniforms[s].value},set(l){this.uniforms[s].value=l}})}setDefine(a,s=void 0){if(s==null){if(a in this.defines)return delete this.defines[a],this.needsUpdate=!0,!0}else if(this.defines[a]!==s)return this.defines[a]=s,this.needsUpdate=!0,!0;return!1}}class M_ extends qh{constructor(a){super({blending:Ql,uniforms:{target1:{value:null},target2:{value:null},opacity:{value:1}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				uniform float opacity;

				uniform sampler2D target1;
				uniform sampler2D target2;

				varying vec2 vUv;

				void main() {

					vec4 color1 = texture2D( target1, vUv );
					vec4 color2 = texture2D( target2, vUv );

					float invOpacity = 1.0 - opacity;
					float totalAlpha = color1.a * invOpacity + color2.a * opacity;

					if ( color1.a != 0.0 || color2.a != 0.0 ) {

						gl_FragColor.rgb = color1.rgb * ( invOpacity * color1.a / totalAlpha ) + color2.rgb * ( opacity * color2.a / totalAlpha );
						gl_FragColor.a = totalAlpha;

					} else {

						gl_FragColor = vec4( 0.0 );

					}

				}`}),this.setValues(a)}}function ko(h=1){let a="uint";return h>1&&(a="uvec"+h),`
		${a} sobolReverseBits( ${a} x ) {

			x = ( ( ( x & 0xaaaaaaaau ) >> 1 ) | ( ( x & 0x55555555u ) << 1 ) );
			x = ( ( ( x & 0xccccccccu ) >> 2 ) | ( ( x & 0x33333333u ) << 2 ) );
			x = ( ( ( x & 0xf0f0f0f0u ) >> 4 ) | ( ( x & 0x0f0f0f0fu ) << 4 ) );
			x = ( ( ( x & 0xff00ff00u ) >> 8 ) | ( ( x & 0x00ff00ffu ) << 8 ) );
			return ( ( x >> 16 ) | ( x << 16 ) );

		}

		${a} sobolHashCombine( uint seed, ${a} v ) {

			return seed ^ ( v + ${a}( ( seed << 6 ) + ( seed >> 2 ) ) );

		}

		${a} sobolLaineKarrasPermutation( ${a} x, ${a} seed ) {

			x += seed;
			x ^= x * 0x6c50b47cu;
			x ^= x * 0xb82f1e52u;
			x ^= x * 0xc7afe638u;
			x ^= x * 0x8d22f6e6u;
			return x;

		}

		${a} nestedUniformScrambleBase2( ${a} x, ${a} seed ) {

			x = sobolLaineKarrasPermutation( x, seed );
			x = sobolReverseBits( x );
			return x;

		}
	`}function Yo(h=1){let a="uint",s="float",l="",o=".r",f="1u";return h>1&&(a="uvec"+h,s="vec"+h,l=h+"",h===2?(o=".rg",f="uvec2( 1u, 2u )"):h===3?(o=".rgb",f="uvec3( 1u, 2u, 3u )"):(o="",f="uvec4( 1u, 2u, 3u, 4u )")),`

		${s} sobol${l}( int effect ) {

			uint seed = sobolGetSeed( sobolBounceIndex, uint( effect ) );
			uint index = sobolPathIndex;

			uint shuffle_seed = sobolHashCombine( seed, 0u );
			uint shuffled_index = nestedUniformScrambleBase2( sobolReverseBits( index ), shuffle_seed );
			${s} sobol_pt = sobolGetTexturePoint( shuffled_index )${o};
			${a} result = ${a}( sobol_pt * 16777216.0 );

			${a} seed2 = sobolHashCombine( seed, ${f} );
			result = nestedUniformScrambleBase2( result, seed2 );

			return SOBOL_FACTOR * ${s}( result >> 8 );

		}
	`}const Wv=`

	// Utils
	const float SOBOL_FACTOR = 1.0 / 16777216.0;
	const uint SOBOL_MAX_POINTS = 256u * 256u;

	${ko(1)}
	${ko(2)}
	${ko(3)}
	${ko(4)}

	uint sobolHash( uint x ) {

		// finalizer from murmurhash3
		x ^= x >> 16;
		x *= 0x85ebca6bu;
		x ^= x >> 13;
		x *= 0xc2b2ae35u;
		x ^= x >> 16;
		return x;

	}

`,R_=`

	const uint SOBOL_DIRECTIONS_1[ 32 ] = uint[ 32 ](
		0x80000000u, 0xc0000000u, 0xa0000000u, 0xf0000000u,
		0x88000000u, 0xcc000000u, 0xaa000000u, 0xff000000u,
		0x80800000u, 0xc0c00000u, 0xa0a00000u, 0xf0f00000u,
		0x88880000u, 0xcccc0000u, 0xaaaa0000u, 0xffff0000u,
		0x80008000u, 0xc000c000u, 0xa000a000u, 0xf000f000u,
		0x88008800u, 0xcc00cc00u, 0xaa00aa00u, 0xff00ff00u,
		0x80808080u, 0xc0c0c0c0u, 0xa0a0a0a0u, 0xf0f0f0f0u,
		0x88888888u, 0xccccccccu, 0xaaaaaaaau, 0xffffffffu
	);

	const uint SOBOL_DIRECTIONS_2[ 32 ] = uint[ 32 ](
		0x80000000u, 0xc0000000u, 0x60000000u, 0x90000000u,
		0xe8000000u, 0x5c000000u, 0x8e000000u, 0xc5000000u,
		0x68800000u, 0x9cc00000u, 0xee600000u, 0x55900000u,
		0x80680000u, 0xc09c0000u, 0x60ee0000u, 0x90550000u,
		0xe8808000u, 0x5cc0c000u, 0x8e606000u, 0xc5909000u,
		0x6868e800u, 0x9c9c5c00u, 0xeeee8e00u, 0x5555c500u,
		0x8000e880u, 0xc0005cc0u, 0x60008e60u, 0x9000c590u,
		0xe8006868u, 0x5c009c9cu, 0x8e00eeeeu, 0xc5005555u
	);

	const uint SOBOL_DIRECTIONS_3[ 32 ] = uint[ 32 ](
		0x80000000u, 0xc0000000u, 0x20000000u, 0x50000000u,
		0xf8000000u, 0x74000000u, 0xa2000000u, 0x93000000u,
		0xd8800000u, 0x25400000u, 0x59e00000u, 0xe6d00000u,
		0x78080000u, 0xb40c0000u, 0x82020000u, 0xc3050000u,
		0x208f8000u, 0x51474000u, 0xfbea2000u, 0x75d93000u,
		0xa0858800u, 0x914e5400u, 0xdbe79e00u, 0x25db6d00u,
		0x58800080u, 0xe54000c0u, 0x79e00020u, 0xb6d00050u,
		0x800800f8u, 0xc00c0074u, 0x200200a2u, 0x50050093u
	);

	const uint SOBOL_DIRECTIONS_4[ 32 ] = uint[ 32 ](
		0x80000000u, 0x40000000u, 0x20000000u, 0xb0000000u,
		0xf8000000u, 0xdc000000u, 0x7a000000u, 0x9d000000u,
		0x5a800000u, 0x2fc00000u, 0xa1600000u, 0xf0b00000u,
		0xda880000u, 0x6fc40000u, 0x81620000u, 0x40bb0000u,
		0x22878000u, 0xb3c9c000u, 0xfb65a000u, 0xddb2d000u,
		0x78022800u, 0x9c0b3c00u, 0x5a0fb600u, 0x2d0ddb00u,
		0xa2878080u, 0xf3c9c040u, 0xdb65a020u, 0x6db2d0b0u,
		0x800228f8u, 0x400b3cdcu, 0x200fb67au, 0xb00ddb9du
	);

	uint getMaskedSobol( uint index, uint directions[ 32 ] ) {

		uint X = 0u;
		for ( int bit = 0; bit < 32; bit ++ ) {

			uint mask = ( index >> bit ) & 1u;
			X ^= mask * directions[ bit ];

		}
		return X;

	}

	vec4 generateSobolPoint( uint index ) {

		if ( index >= SOBOL_MAX_POINTS ) {

			return vec4( 0.0 );

		}

		// NOTE: this sobol "direction" is also available but we can't write out 5 components
		// uint x = index & 0x00ffffffu;
		uint x = sobolReverseBits( getMaskedSobol( index, SOBOL_DIRECTIONS_1 ) ) & 0x00ffffffu;
		uint y = sobolReverseBits( getMaskedSobol( index, SOBOL_DIRECTIONS_2 ) ) & 0x00ffffffu;
		uint z = sobolReverseBits( getMaskedSobol( index, SOBOL_DIRECTIONS_3 ) ) & 0x00ffffffu;
		uint w = sobolReverseBits( getMaskedSobol( index, SOBOL_DIRECTIONS_4 ) ) & 0x00ffffffu;

		return vec4( x, y, z, w ) * SOBOL_FACTOR;

	}

`,C_=`

	// Seeds
	uniform sampler2D sobolTexture;
	uint sobolPixelIndex = 0u;
	uint sobolPathIndex = 0u;
	uint sobolBounceIndex = 0u;

	uint sobolGetSeed( uint bounce, uint effect ) {

		return sobolHash(
			sobolHashCombine(
				sobolHashCombine(
					sobolHash( bounce ),
					sobolPixelIndex
				),
				effect
			)
		);

	}

	vec4 sobolGetTexturePoint( uint index ) {

		if ( index >= SOBOL_MAX_POINTS ) {

			index = index % SOBOL_MAX_POINTS;

		}

		uvec2 dim = uvec2( textureSize( sobolTexture, 0 ).xy );
		uint y = index / dim.x;
		uint x = index - y * dim.x;
		vec2 uv = vec2( x, y ) / vec2( dim );
		return texture( sobolTexture, uv );

	}

	${Yo(1)}
	${Yo(2)}
	${Yo(3)}
	${Yo(4)}

`;class D_ extends qh{constructor(){super({blending:Ql,uniforms:{resolution:{value:new Me}},vertexShader:`

				varying vec2 vUv;
				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}
			`,fragmentShader:`

				${Wv}
				${R_}

				varying vec2 vUv;
				uniform vec2 resolution;
				void main() {

					uint index = uint( gl_FragCoord.y ) * uint( resolution.x ) + uint( gl_FragCoord.x );
					gl_FragColor = generateSobolPoint( index );

				}
			`})}}class O_{generate(a,s=256){const l=new Yl(s,s,{type:mt,format:nt,minFilter:He,magFilter:He,generateMipmaps:!1}),o=a.getRenderTarget();a.setRenderTarget(l);const f=new Us(new D_);return f.material.resolution.set(s,s),f.render(a),a.setRenderTarget(o),f.dispose(),l}}class N_ extends nc{set bokehSize(a){this.fStop=this.getFocalLength()/a}get bokehSize(){return this.getFocalLength()/this.fStop}constructor(...a){super(...a),this.fStop=1.4,this.apertureBlades=0,this.apertureRotation=0,this.focusDistance=25,this.anamorphicRatio=1}copy(a,s){return super.copy(a,s),this.fStop=a.fStop,this.apertureBlades=a.apertureBlades,this.apertureRotation=a.apertureRotation,this.focusDistance=a.focusDistance,this.anamorphicRatio=a.anamorphicRatio,this}}class z_{constructor(){this.bokehSize=0,this.apertureBlades=0,this.apertureRotation=0,this.focusDistance=10,this.anamorphicRatio=1}updateFrom(a){a instanceof N_?(this.bokehSize=a.bokehSize,this.apertureBlades=a.apertureBlades,this.apertureRotation=a.apertureRotation,this.focusDistance=a.focusDistance,this.anamorphicRatio=a.anamorphicRatio):(this.bokehSize=0,this.apertureRotation=0,this.apertureBlades=0,this.focusDistance=10,this.anamorphicRatio=1)}}function uh(h){const a=new Uint16Array(h.length);for(let s=0,l=h.length;s<l;++s)a[s]=an.toHalfFloat(h[s]);return a}function iv(h,a,s=0,l=h.length){let o=s,f=s+l-1;for(;o<f;){const c=o+f>>1;h[c]<a?o=c+1:f=c}return o-s}function L_(h,a,s){return .2126*h+.7152*a+.0722*s}function B_(h,a=Bi){const s=h.clone();s.source=new zT({...s.image});const{width:l,height:o,data:f}=s.image;let c=f;if(s.type!==a){a===Bi?c=new Uint16Array(f.length):c=new Float32Array(f.length);let d;f instanceof Int8Array||f instanceof Int16Array||f instanceof Int32Array?d=2**(8*f.BYTES_PER_ELEMENT-1)-1:d=2**(8*f.BYTES_PER_ELEMENT)-1;for(let m=0,p=f.length;m<p;m++){let y=f[m];s.type===Bi&&(y=an.fromHalfFloat(f[m])),s.type!==mt&&s.type!==Bi&&(y/=d),a===Bi&&(c[m]=an.toHalfFloat(y))}s.image.data=c,s.type=a}if(s.flipY){const d=c;c=c.slice();for(let m=0;m<o;m++)for(let p=0;p<l;p++){const y=o-m-1,v=4*(m*l+p),g=4*(y*l+p);c[g+0]=d[v+0],c[g+1]=d[v+1],c[g+2]=d[v+2],c[g+3]=d[v+3]}s.flipY=!1,s.image.data=c}return s}class U_{constructor(){const a=new oi(uh(new Float32Array([0,0,0,0])),1,1);a.type=Bi,a.format=nt,a.minFilter=Ot,a.magFilter=Ot,a.wrapS=bi,a.wrapT=bi,a.generateMipmaps=!1,a.needsUpdate=!0;const s=new oi(uh(new Float32Array([0,1])),1,2);s.type=Bi,s.format=Jo,s.minFilter=Ot,s.magFilter=Ot,s.generateMipmaps=!1,s.needsUpdate=!0;const l=new oi(uh(new Float32Array([0,0,1,1])),2,2);l.type=Bi,l.format=Jo,l.minFilter=Ot,l.magFilter=Ot,l.generateMipmaps=!1,l.needsUpdate=!0,this.map=a,this.marginalWeights=s,this.conditionalWeights=l,this.totalSum=0}dispose(){this.marginalWeights.dispose(),this.conditionalWeights.dispose(),this.map.dispose()}updateFrom(a){const s=B_(a);s.wrapS=bi,s.wrapT=sn;const{width:l,height:o,data:f}=s.image,c=new Float32Array(l*o),d=new Float32Array(l*o),m=new Float32Array(o),p=new Float32Array(o);let y=0,v=0;for(let x=0;x<o;x++){let A=0;for(let M=0;M<l;M++){const E=x*l+M,C=an.fromHalfFloat(f[4*E+0]),D=an.fromHalfFloat(f[4*E+1]),U=an.fromHalfFloat(f[4*E+2]),N=L_(C,D,U);A+=N,y+=N,c[E]=N,d[E]=A}if(A!==0)for(let M=x*l,E=x*l+l;M<E;M++)c[M]/=A,d[M]/=A;v+=A,m[x]=A,p[x]=v}if(v!==0)for(let x=0,A=m.length;x<A;x++)m[x]/=v,p[x]/=v;const g=new Uint16Array(o),T=new Uint16Array(l*o);for(let x=0;x<o;x++){const A=(x+1)/o,M=iv(p,A);g[x]=an.toHalfFloat((M+.5)/o)}for(let x=0;x<o;x++)for(let A=0;A<l;A++){const M=x*l+A,E=(A+1)/l,C=iv(d,E,x*l,l);T[M]=an.toHalfFloat((C+.5)/l)}this.dispose();const{marginalWeights:_,conditionalWeights:w}=this;_.image={width:o,height:1,data:g},_.needsUpdate=!0,w.image={width:l,height:o,data:T},w.needsUpdate=!0,this.totalSum=y,this.map=s}}const fh=6,H_=0,I_=1,F_=2,G_=3,V_=4,vi=new Q,Dt=new Q,nv=new qe,ws=new Kl,av=new Q,As=new Q,P_=new Q(0,1,0);class q_{constructor(){const a=new oi(new Float32Array(4),1,1);a.format=nt,a.type=mt,a.wrapS=sn,a.wrapT=sn,a.generateMipmaps=!1,a.minFilter=He,a.magFilter=He,this.tex=a,this.count=0}updateFrom(a,s=[]){const l=this.tex,o=Math.max(a.length*fh,1),f=Math.ceil(Math.sqrt(o));l.image.width!==f&&(l.dispose(),l.image.data=new Float32Array(f*f*4),l.image.width=f,l.image.height=f);const c=l.image.data;for(let m=0,p=a.length;m<p;m++){const y=a[m],v=m*fh*4;let g=0;for(let _=0;_<fh*4;_++)c[v+_]=0;y.getWorldPosition(Dt),c[v+g++]=Dt.x,c[v+g++]=Dt.y,c[v+g++]=Dt.z;let T=H_;if(y.isRectAreaLight&&y.isCircular?T=I_:y.isSpotLight?T=F_:y.isDirectionalLight?T=G_:y.isPointLight&&(T=V_),c[v+g++]=T,c[v+g++]=y.color.r,c[v+g++]=y.color.g,c[v+g++]=y.color.b,c[v+g++]=y.intensity,y.getWorldQuaternion(ws),y.isRectAreaLight)vi.set(y.width,0,0).applyQuaternion(ws),c[v+g++]=vi.x,c[v+g++]=vi.y,c[v+g++]=vi.z,g++,Dt.set(0,y.height,0).applyQuaternion(ws),c[v+g++]=Dt.x,c[v+g++]=Dt.y,c[v+g++]=Dt.z,c[v+g++]=vi.cross(Dt).length()*(y.isCircular?Math.PI/4:1);else if(y.isSpotLight){const _=y.radius||0;av.setFromMatrixPosition(y.matrixWorld),As.setFromMatrixPosition(y.target.matrixWorld),nv.lookAt(av,As,P_),ws.setFromRotationMatrix(nv),vi.set(1,0,0).applyQuaternion(ws),c[v+g++]=vi.x,c[v+g++]=vi.y,c[v+g++]=vi.z,g++,Dt.set(0,1,0).applyQuaternion(ws),c[v+g++]=Dt.x,c[v+g++]=Dt.y,c[v+g++]=Dt.z,c[v+g++]=Math.PI*_*_,c[v+g++]=_,c[v+g++]=y.decay,c[v+g++]=y.distance,c[v+g++]=Math.cos(y.angle),c[v+g++]=Math.cos(y.angle*(1-y.penumbra)),c[v+g++]=y.iesMap?s.indexOf(y.iesMap):-1}else if(y.isPointLight){const _=vi.setFromMatrixPosition(y.matrixWorld);c[v+g++]=_.x,c[v+g++]=_.y,c[v+g++]=_.z,g++,g+=4,g+=1,c[v+g++]=y.decay,c[v+g++]=y.distance}else if(y.isDirectionalLight){const _=vi.setFromMatrixPosition(y.matrixWorld),w=Dt.setFromMatrixPosition(y.target.matrixWorld);As.subVectors(_,w).normalize(),c[v+g++]=As.x,c[v+g++]=As.y,c[v+g++]=As.z}}this.count=a.length;const d=Ph(c.buffer);return this.hash!==d?(this.hash=d,l.needsUpdate=!0,!0):!1}}function sv(h,a,s,l,o){if(a>l)throw new Error;const f=h.length/a,c=h.constructor.BYTES_PER_ELEMENT*8;let d=1;switch(h.constructor){case Uint8Array:case Uint16Array:case Uint32Array:d=2**c-1;break;case Int8Array:case Int16Array:case Int32Array:d=2**(c-1)-1;break}for(let m=0;m<f;m++){const p=4*m,y=a*m;for(let v=0;v<l;v++)s[o+p+v]=a>=v+1?h[y+v]/d:0}}class j_ extends LT{constructor(){super(),this._textures=[],this.type=mt,this.format=nt,this.internalFormat="RGBA32F"}updateAttribute(a,s){const l=this._textures[a];l.updateFrom(s);const o=l.image,f=this.image;if(o.width!==f.width||o.height!==f.height)throw new Error("FloatAttributeTextureArray: Attribute must be the same dimensions when updating single layer.");const{width:c,height:d,data:m}=f,y=c*d*4*a;let v=s.itemSize;v===3&&(v=4),sv(l.image.data,v,m,4,y),this.dispose(),this.needsUpdate=!0}setAttributes(a){const s=a[0].count,l=a.length;for(let v=0,g=l;v<g;v++)if(a[v].count!==s)throw new Error("FloatAttributeTextureArray: All attributes must have the same item count.");const o=this._textures;for(;o.length<l;){const v=new Xv;o.push(v)}for(;o.length>l;)o.pop();for(let v=0,g=l;v<g;v++)o[v].updateFrom(a[v]);const c=o[0].image,d=this.image;(c.width!==d.width||c.height!==d.height||c.depth!==l)&&(d.width=c.width,d.height=c.height,d.depth=l,d.data=new Float32Array(d.width*d.height*d.depth*4));const{data:m,width:p,height:y}=d;for(let v=0,g=l;v<g;v++){const T=o[v],w=p*y*4*v;let x=a[v].itemSize;x===3&&(x=4),sv(T.image.data,x,m,4,w)}this.dispose(),this.needsUpdate=!0}}class k_ extends j_{updateNormalAttribute(a){this.updateAttribute(0,a)}updateTangentAttribute(a){this.updateAttribute(1,a)}updateUvAttribute(a){this.updateAttribute(2,a)}updateColorAttribute(a){this.updateAttribute(3,a)}updateFrom(a,s,l,o){this.setAttributes([a,s,l,o])}}function jh(h,a){return h.uuid<a.uuid?1:h.uuid>a.uuid?-1:0}function Nh(h){return`${h.source.uuid}:${h.colorSpace}`}function Y_(h){const a=new Set,s=[];for(let l=0,o=h.length;l<o;l++){const f=h[l],c=Nh(f);a.has(c)||(a.add(c),s.push(f))}return s}function X_(h){const a=h.map(l=>l.iesMap||null).filter(l=>l),s=new Set(a);return Array.from(s).sort(jh)}function K_(h){const a=new Set;for(let l=0,o=h.length;l<o;l++){const f=h[l];for(const c in f){const d=f[c];d&&d.isTexture&&a.add(d)}}const s=Array.from(a);return Y_(s).sort(jh)}function Z_(h){const a=[];return h.traverse(s=>{s.visible&&(s.isRectAreaLight||s.isSpotLight||s.isPointLight||s.isDirectionalLight)&&a.push(s)}),a.sort(jh)}const kh=47,lv=kh*4;class Q_{constructor(){this._features={}}isUsed(a){return a in this._features}setUsed(a,s=!0){s===!1?delete this._features[a]:this._features[a]=!0}reset(){this._features={}}}class W_ extends oi{constructor(){super(new Float32Array(4),1,1),this.format=nt,this.type=mt,this.wrapS=sn,this.wrapT=sn,this.minFilter=He,this.magFilter=He,this.generateMipmaps=!1,this.features=new Q_}updateFrom(a,s){function l(_,w,x=-1){if(w in _&&_[w]){const A=Nh(_[w]);return v[A]}else return x}function o(_,w,x){return w in _?_[w]:x}function f(_,w,x,A){const M=_[w]&&_[w].isTexture?_[w]:null;if(M){M.matrixAutoUpdate&&M.updateMatrix();const E=M.matrix.elements;let C=0;x[A+C++]=E[0],x[A+C++]=E[3],x[A+C++]=E[6],C++,x[A+C++]=E[1],x[A+C++]=E[4],x[A+C++]=E[7],C++}return 8}let c=0;const d=a.length*kh,m=Math.ceil(Math.sqrt(d))||1,{image:p,features:y}=this,v={};for(let _=0,w=s.length;_<w;_++)v[Nh(s[_])]=_;p.width!==m&&(this.dispose(),p.data=new Float32Array(m*m*4),p.width=m,p.height=m);const g=p.data;y.reset();for(let _=0,w=a.length;_<w;_++){const x=a[_];if(x.isFogVolumeMaterial){y.setUsed("FOG");for(let E=0;E<lv;E++)g[c+E]=0;g[c+0+0]=x.color.r,g[c+0+1]=x.color.g,g[c+0+2]=x.color.b,g[c+8+3]=o(x,"emissiveIntensity",0),g[c+12+0]=x.emissive.r,g[c+12+1]=x.emissive.g,g[c+12+2]=x.emissive.b,g[c+52+1]=x.density,g[c+52+3]=0,g[c+56+2]=4,c+=lv;continue}g[c++]=x.color.r,g[c++]=x.color.g,g[c++]=x.color.b,g[c++]=l(x,"map"),g[c++]=o(x,"metalness",0),g[c++]=l(x,"metalnessMap"),g[c++]=o(x,"roughness",0),g[c++]=l(x,"roughnessMap"),g[c++]=o(x,"ior",1.5),g[c++]=o(x,"transmission",0),g[c++]=l(x,"transmissionMap"),g[c++]=o(x,"emissiveIntensity",0),"emissive"in x?(g[c++]=x.emissive.r,g[c++]=x.emissive.g,g[c++]=x.emissive.b):(g[c++]=0,g[c++]=0,g[c++]=0),g[c++]=l(x,"emissiveMap"),g[c++]=l(x,"normalMap"),"normalScale"in x?(g[c++]=x.normalScale.x,g[c++]=x.normalScale.y):(g[c++]=1,g[c++]=1),g[c++]=o(x,"clearcoat",0),g[c++]=l(x,"clearcoatMap"),g[c++]=o(x,"clearcoatRoughness",0),g[c++]=l(x,"clearcoatRoughnessMap"),g[c++]=l(x,"clearcoatNormalMap"),"clearcoatNormalScale"in x?(g[c++]=x.clearcoatNormalScale.x,g[c++]=x.clearcoatNormalScale.y):(g[c++]=1,g[c++]=1),c++,g[c++]=o(x,"sheen",0),"sheenColor"in x?(g[c++]=x.sheenColor.r,g[c++]=x.sheenColor.g,g[c++]=x.sheenColor.b):(g[c++]=0,g[c++]=0,g[c++]=0),g[c++]=l(x,"sheenColorMap"),g[c++]=o(x,"sheenRoughness",0),g[c++]=l(x,"sheenRoughnessMap"),g[c++]=l(x,"iridescenceMap"),g[c++]=l(x,"iridescenceThicknessMap"),g[c++]=o(x,"iridescence",0),g[c++]=o(x,"iridescenceIOR",1.3);const A=o(x,"iridescenceThicknessRange",[100,400]);g[c++]=A[0],g[c++]=A[1],"specularColor"in x?(g[c++]=x.specularColor.r,g[c++]=x.specularColor.g,g[c++]=x.specularColor.b):(g[c++]=1,g[c++]=1,g[c++]=1),g[c++]=l(x,"specularColorMap"),g[c++]=o(x,"specularIntensity",1),g[c++]=l(x,"specularIntensityMap");const M=o(x,"thickness",0)===0&&o(x,"attenuationDistance",1/0)===1/0;if(g[c++]=Number(M),c++,"attenuationColor"in x?(g[c++]=x.attenuationColor.r,g[c++]=x.attenuationColor.g,g[c++]=x.attenuationColor.b):(g[c++]=1,g[c++]=1,g[c++]=1),g[c++]=o(x,"attenuationDistance",1/0),g[c++]=l(x,"alphaMap"),g[c++]=x.opacity,g[c++]=x.alphaTest,!M&&x.transmission>0)g[c++]=0;else switch(x.side){case Wo:g[c++]=1;break;case Uh:g[c++]=-1;break;case ic:g[c++]=0;break}g[c++]=Number(o(x,"matte",!1)),g[c++]=Number(o(x,"castShadow",!0)),g[c++]=Number(x.vertexColors)|Number(x.flatShading)<<1,g[c++]=Number(x.transparent),c+=f(x,"map",g,c),c+=f(x,"metalnessMap",g,c),c+=f(x,"roughnessMap",g,c),c+=f(x,"transmissionMap",g,c),c+=f(x,"emissiveMap",g,c),c+=f(x,"normalMap",g,c),c+=f(x,"clearcoatMap",g,c),c+=f(x,"clearcoatNormalMap",g,c),c+=f(x,"clearcoatRoughnessMap",g,c),c+=f(x,"sheenColorMap",g,c),c+=f(x,"sheenRoughnessMap",g,c),c+=f(x,"iridescenceMap",g,c),c+=f(x,"iridescenceThicknessMap",g,c),c+=f(x,"specularColorMap",g,c),c+=f(x,"specularIntensityMap",g,c),c+=f(x,"alphaMap",g,c)}const T=Ph(g.buffer);return this.hash!==T?(this.hash=T,this.needsUpdate=!0,!0):!1}}const rv=new Kt;function J_(h){return h?`${h.uuid}:${h.version}`:null}function $_(h,a){for(const s in a)s in h&&(h[s]=a[s])}class ov extends BT{constructor(a,s,l){const o={format:nt,type:yh,minFilter:Ot,magFilter:Ot,wrapS:bi,wrapT:bi,generateMipmaps:!1,...l};super(a,s,1,o),$_(this.texture,o),this.texture.setTextures=(...c)=>{this.setTextures(...c)},this.hashes=[null];const f=new Us(new e2);this.fsQuad=f}setTextures(a,s,l=this.width,o=this.height){const f=a.getRenderTarget(),c=a.toneMapping,d=a.getClearAlpha();a.getClearColor(rv);const m=s.length||1;(l!==this.width||o!==this.height||this.depth!==m)&&(this.setSize(l,o,m),this.hashes=new Array(m).fill(null)),a.setClearColor(0,0),a.toneMapping=UT;const p=this.fsQuad,y=this.hashes;let v=!1;for(let g=0,T=m;g<T;g++){const _=s[g],w=J_(_);_&&(y[g]!==w||_.isWebGLRenderTarget)&&(_.matrixAutoUpdate=!1,_.matrix.identity(),p.material.map=_,a.setRenderTarget(this,g),p.render(a),_.updateMatrix(),_.matrixAutoUpdate=!0,y[g]=w,v=!0)}return p.material.map=null,a.setClearColor(rv,d),a.setRenderTarget(f),a.toneMapping=c,v}dispose(){super.dispose(),this.fsQuad.dispose()}}class e2 extends ac{get map(){return this.uniforms.map.value}set map(a){this.uniforms.map.value=a}constructor(){super({uniforms:{map:{value:null}},vertexShader:`
				varying vec2 vUv;
				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}
			`,fragmentShader:`
				uniform sampler2D map;
				varying vec2 vUv;
				void main() {

					gl_FragColor = texture2D( map, vUv );

				}
			`})}}function t2(h,a=Math.random()){for(let s=h.length-1;s>0;s--){const l=Math.floor(a()*(s+1)),o=h[s];h[s]=h[l],h[l]=o}return h}class i2{constructor(a,s,l=Math.random){const o=a**s,f=new Uint16Array(o);let c=o;for(let d=0;d<o;d++)f[d]=d;this.samples=new Float32Array(s),this.strataCount=a,this.reset=function(){for(let d=0;d<o;d++)f[d]=d;c=0},this.reshuffle=function(){c=0},this.next=function(){const{samples:d}=this;c>=f.length&&(t2(f,l),this.reshuffle());let m=f[c++];for(let p=0;p<s;p++)d[p]=(m%a+l())/a,m=Math.floor(m/a);return d}}}class n2{constructor(a,s,l=Math.random){let o=0;for(const m of s)o+=m;const f=new Float32Array(o),c=[];let d=0;for(const m of s){const p=new i2(a,m,l);p.samples=new Float32Array(f.buffer,d,p.samples.length),d+=p.samples.length*4,c.push(p)}this.samples=f,this.strataCount=a,this.next=function(){for(const m of c)m.next();return f},this.reshuffle=function(){for(const m of c)m.reshuffle()},this.reset=function(){for(const m of c)m.reset()}}}class a2{constructor(a=0){this.m=2147483648,this.a=1103515245,this.c=12345,this.seed=a}nextInt(){return this.seed=(this.a*this.seed+this.c)%this.m,this.seed}nextFloat(){return this.nextInt()/(this.m-1)}}class s2 extends oi{constructor(a=1,s=1,l=8){super(new Float32Array(1),1,1,nt,mt),this.minFilter=He,this.magFilter=He,this.strata=l,this.sampler=null,this.generator=new a2,this.stableNoise=!1,this.random=()=>this.stableNoise?this.generator.nextFloat():Math.random(),this.init(a,s,l)}init(a=this.image.height,s=this.image.width,l=this.strata){const{image:o}=this;if(o.width===s&&o.height===a&&this.sampler!==null)return;const f=new Array(a*s).fill(4),c=new n2(l,f,this.random);o.width=s,o.height=a,o.data=c.samples,this.sampler=c,this.dispose(),this.next()}next(){this.sampler.next(),this.needsUpdate=!0}reset(){this.sampler.reset(),this.generator.seed=0}}function l2(h,a=Math.random){for(let s=h.length-1;s>0;s--){const l=~~((a()-1e-6)*s),o=h[s];h[s]=h[l],h[l]=o}}function r2(h,a){h.fill(0);for(let s=0;s<a;s++)h[s]=1}class cv{constructor(a){this.count=0,this.size=-1,this.sigma=-1,this.radius=-1,this.lookupTable=null,this.score=null,this.binaryPattern=null,this.resize(a),this.setSigma(1.5)}findVoid(){const{score:a,binaryPattern:s}=this;let l=1/0,o=-1;for(let f=0,c=s.length;f<c;f++){if(s[f]!==0)continue;const d=a[f];d<l&&(l=d,o=f)}return o}findCluster(){const{score:a,binaryPattern:s}=this;let l=-1/0,o=-1;for(let f=0,c=s.length;f<c;f++){if(s[f]!==1)continue;const d=a[f];d>l&&(l=d,o=f)}return o}setSigma(a){if(a===this.sigma)return;const s=~~(Math.sqrt(20*a**2)+1),l=2*s+1,o=new Float32Array(l*l),f=a*a;for(let c=-s;c<=s;c++)for(let d=-s;d<=s;d++){const m=(s+d)*l+c+s,p=c*c+d*d;o[m]=Math.E**(-p/(2*f))}this.lookupTable=o,this.sigma=a,this.radius=s}resize(a){this.size!==a&&(this.size=a,this.score=new Float32Array(a*a),this.binaryPattern=new Uint8Array(a*a))}invert(){const{binaryPattern:a,score:s,size:l}=this;s.fill(0);for(let o=0,f=a.length;o<f;o++)if(a[o]===0){const c=~~(o/l),d=o-c*l;this.updateScore(d,c,1),a[o]=1}else a[o]=0}updateScore(a,s,l){const{size:o,score:f,lookupTable:c}=this,d=this.radius,m=2*d+1;for(let p=-d;p<=d;p++)for(let y=-d;y<=d;y++){const v=(d+y)*m+p+d,g=c[v];let T=a+p;T=T<0?o+T:T%o;let _=s+y;_=_<0?o+_:_%o;const w=_*o+T;f[w]+=l*g}}addPointIndex(a){this.binaryPattern[a]=1;const s=this.size,l=~~(a/s),o=a-l*s;this.updateScore(o,l,1),this.count++}removePointIndex(a){this.binaryPattern[a]=0;const s=this.size,l=~~(a/s),o=a-l*s;this.updateScore(o,l,-1),this.count--}copy(a){this.resize(a.size),this.score.set(a.score),this.binaryPattern.set(a.binaryPattern),this.setSigma(a.sigma),this.count=a.count}}class o2{constructor(){this.random=Math.random,this.sigma=1.5,this.size=64,this.majorityPointsRatio=.1,this.samples=new cv(1),this.savedSamples=new cv(1)}generate(){const{samples:a,savedSamples:s,sigma:l,majorityPointsRatio:o,size:f}=this;a.resize(f),a.setSigma(l);const c=Math.floor(f*f*o),d=a.binaryPattern;r2(d,c),l2(d,this.random);for(let v=0,g=d.length;v<g;v++)d[v]===1&&a.addPointIndex(v);for(;;){const v=a.findCluster();a.removePointIndex(v);const g=a.findVoid();if(v===g){a.addPointIndex(v);break}a.addPointIndex(g)}const m=new Uint32Array(f*f);s.copy(a);let p;for(p=a.count-1;p>=0;){const v=a.findCluster();a.removePointIndex(v),m[v]=p,p--}const y=f*f;for(p=s.count;p<y/2;){const v=s.findVoid();s.addPointIndex(v),m[v]=p,p++}for(s.invert();p<y;){const v=s.findCluster();s.removePointIndex(v),m[v]=p,p++}return{data:m,maxValue:y}}}function c2(h){return h>=3?4:h}function u2(h){switch(h){case 1:return Jo;case 2:return Dv;default:return nt}}class f2 extends oi{constructor(a=64,s=1){super(new Float32Array(4),1,1,nt,mt),this.minFilter=He,this.magFilter=He,this.size=a,this.channels=s,this.update()}update(){const a=this.channels,s=this.size,l=new o2;l.channels=a,l.size=s;const o=c2(a),f=u2(o);(this.image.width!==s||f!==this.format)&&(this.image.width=s,this.image.height=s,this.image.data=new Float32Array(s**2*o),this.format=f,this.dispose());const c=this.image.data;for(let d=0,m=a;d<m;d++){const p=l.generate(),y=p.data,v=p.maxValue;for(let g=0,T=y.length;g<T;g++){const _=y[g]/v;c[g*o+d]=_}}this.needsUpdate=!0}}const h2=`

	struct PhysicalCamera {

		float focusDistance;
		float anamorphicRatio;
		float bokehSize;
		int apertureBlades;
		float apertureRotation;

	};

`,d2=`

	struct EquirectHdrInfo {

		sampler2D marginalWeights;
		sampler2D conditionalWeights;
		sampler2D map;

		float totalSum;

	};

`,m2=`

	#define RECT_AREA_LIGHT_TYPE 0
	#define CIRC_AREA_LIGHT_TYPE 1
	#define SPOT_LIGHT_TYPE 2
	#define DIR_LIGHT_TYPE 3
	#define POINT_LIGHT_TYPE 4

	struct LightsInfo {

		sampler2D tex;
		uint count;

	};

	struct Light {

		vec3 position;
		int type;

		vec3 color;
		float intensity;

		vec3 u;
		vec3 v;
		float area;

		// spot light fields
		float radius;
		float near;
		float decay;
		float distance;
		float coneCos;
		float penumbraCos;
		int iesProfile;

	};

	Light readLightInfo( sampler2D tex, uint index ) {

		uint i = index * 6u;

		vec4 s0 = texelFetch1D( tex, i + 0u );
		vec4 s1 = texelFetch1D( tex, i + 1u );
		vec4 s2 = texelFetch1D( tex, i + 2u );
		vec4 s3 = texelFetch1D( tex, i + 3u );

		Light l;
		l.position = s0.rgb;
		l.type = int( round( s0.a ) );

		l.color = s1.rgb;
		l.intensity = s1.a;

		l.u = s2.rgb;
		l.v = s3.rgb;
		l.area = s3.a;

		if ( l.type == SPOT_LIGHT_TYPE || l.type == POINT_LIGHT_TYPE ) {

			vec4 s4 = texelFetch1D( tex, i + 4u );
			vec4 s5 = texelFetch1D( tex, i + 5u );
			l.radius = s4.r;
			l.decay = s4.g;
			l.distance = s4.b;
			l.coneCos = s4.a;

			l.penumbraCos = s5.r;
			l.iesProfile = int( round( s5.g ) );

		} else {

			l.radius = 0.0;
			l.decay = 0.0;
			l.distance = 0.0;

			l.coneCos = 0.0;
			l.penumbraCos = 0.0;
			l.iesProfile = - 1;

		}

		return l;

	}

`,p2=`

	struct Material {

		vec3 color;
		int map;

		float metalness;
		int metalnessMap;

		float roughness;
		int roughnessMap;

		float ior;
		float transmission;
		int transmissionMap;

		float emissiveIntensity;
		vec3 emissive;
		int emissiveMap;

		int normalMap;
		vec2 normalScale;

		float clearcoat;
		int clearcoatMap;
		int clearcoatNormalMap;
		vec2 clearcoatNormalScale;
		float clearcoatRoughness;
		int clearcoatRoughnessMap;

		int iridescenceMap;
		int iridescenceThicknessMap;
		float iridescence;
		float iridescenceIor;
		float iridescenceThicknessMinimum;
		float iridescenceThicknessMaximum;

		vec3 specularColor;
		int specularColorMap;

		float specularIntensity;
		int specularIntensityMap;
		bool thinFilm;

		vec3 attenuationColor;
		float attenuationDistance;

		int alphaMap;

		bool castShadow;
		float opacity;
		float alphaTest;

		float side;
		bool matte;

		float sheen;
		vec3 sheenColor;
		int sheenColorMap;
		float sheenRoughness;
		int sheenRoughnessMap;

		bool vertexColors;
		bool flatShading;
		bool transparent;
		bool fogVolume;

		mat3 mapTransform;
		mat3 metalnessMapTransform;
		mat3 roughnessMapTransform;
		mat3 transmissionMapTransform;
		mat3 emissiveMapTransform;
		mat3 normalMapTransform;
		mat3 clearcoatMapTransform;
		mat3 clearcoatNormalMapTransform;
		mat3 clearcoatRoughnessMapTransform;
		mat3 sheenColorMapTransform;
		mat3 sheenRoughnessMapTransform;
		mat3 iridescenceMapTransform;
		mat3 iridescenceThicknessMapTransform;
		mat3 specularColorMapTransform;
		mat3 specularIntensityMapTransform;
		mat3 alphaMapTransform;

	};

	mat3 readTextureTransform( sampler2D tex, uint index ) {

		mat3 textureTransform;

		vec4 row1 = texelFetch1D( tex, index );
		vec4 row2 = texelFetch1D( tex, index + 1u );

		textureTransform[0] = vec3(row1.r, row2.r, 0.0);
		textureTransform[1] = vec3(row1.g, row2.g, 0.0);
		textureTransform[2] = vec3(row1.b, row2.b, 1.0);

		return textureTransform;

	}

	Material readMaterialInfo( sampler2D tex, uint index ) {

		uint i = index * uint( MATERIAL_PIXELS );

		vec4 s0 = texelFetch1D( tex, i + 0u );
		vec4 s1 = texelFetch1D( tex, i + 1u );
		vec4 s2 = texelFetch1D( tex, i + 2u );
		vec4 s3 = texelFetch1D( tex, i + 3u );
		vec4 s4 = texelFetch1D( tex, i + 4u );
		vec4 s5 = texelFetch1D( tex, i + 5u );
		vec4 s6 = texelFetch1D( tex, i + 6u );
		vec4 s7 = texelFetch1D( tex, i + 7u );
		vec4 s8 = texelFetch1D( tex, i + 8u );
		vec4 s9 = texelFetch1D( tex, i + 9u );
		vec4 s10 = texelFetch1D( tex, i + 10u );
		vec4 s11 = texelFetch1D( tex, i + 11u );
		vec4 s12 = texelFetch1D( tex, i + 12u );
		vec4 s13 = texelFetch1D( tex, i + 13u );
		vec4 s14 = texelFetch1D( tex, i + 14u );

		Material m;
		m.color = s0.rgb;
		m.map = int( round( s0.a ) );

		m.metalness = s1.r;
		m.metalnessMap = int( round( s1.g ) );
		m.roughness = s1.b;
		m.roughnessMap = int( round( s1.a ) );

		m.ior = s2.r;
		m.transmission = s2.g;
		m.transmissionMap = int( round( s2.b ) );
		m.emissiveIntensity = s2.a;

		m.emissive = s3.rgb;
		m.emissiveMap = int( round( s3.a ) );

		m.normalMap = int( round( s4.r ) );
		m.normalScale = s4.gb;

		m.clearcoat = s4.a;
		m.clearcoatMap = int( round( s5.r ) );
		m.clearcoatRoughness = s5.g;
		m.clearcoatRoughnessMap = int( round( s5.b ) );
		m.clearcoatNormalMap = int( round( s5.a ) );
		m.clearcoatNormalScale = s6.rg;

		m.sheen = s6.a;
		m.sheenColor = s7.rgb;
		m.sheenColorMap = int( round( s7.a ) );
		m.sheenRoughness = s8.r;
		m.sheenRoughnessMap = int( round( s8.g ) );

		m.iridescenceMap = int( round( s8.b ) );
		m.iridescenceThicknessMap = int( round( s8.a ) );
		m.iridescence = s9.r;
		m.iridescenceIor = s9.g;
		m.iridescenceThicknessMinimum = s9.b;
		m.iridescenceThicknessMaximum = s9.a;

		m.specularColor = s10.rgb;
		m.specularColorMap = int( round( s10.a ) );

		m.specularIntensity = s11.r;
		m.specularIntensityMap = int( round( s11.g ) );
		m.thinFilm = bool( s11.b );

		m.attenuationColor = s12.rgb;
		m.attenuationDistance = s12.a;

		m.alphaMap = int( round( s13.r ) );

		m.opacity = s13.g;
		m.alphaTest = s13.b;
		m.side = s13.a;

		m.matte = bool( s14.r );
		m.castShadow = bool( s14.g );
		m.vertexColors = bool( int( s14.b ) & 1 );
		m.flatShading = bool( int( s14.b ) & 2 );
		m.fogVolume = bool( int( s14.b ) & 4 );
		m.transparent = bool( s14.a );

		uint firstTextureTransformIdx = i + 15u;

		// mat3( 1.0 ) is an identity matrix
		m.mapTransform = m.map == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx );
		m.metalnessMapTransform = m.metalnessMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 2u );
		m.roughnessMapTransform = m.roughnessMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 4u );
		m.transmissionMapTransform = m.transmissionMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 6u );
		m.emissiveMapTransform = m.emissiveMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 8u );
		m.normalMapTransform = m.normalMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 10u );
		m.clearcoatMapTransform = m.clearcoatMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 12u );
		m.clearcoatNormalMapTransform = m.clearcoatNormalMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 14u );
		m.clearcoatRoughnessMapTransform = m.clearcoatRoughnessMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 16u );
		m.sheenColorMapTransform = m.sheenColorMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 18u );
		m.sheenRoughnessMapTransform = m.sheenRoughnessMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 20u );
		m.iridescenceMapTransform = m.iridescenceMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 22u );
		m.iridescenceThicknessMapTransform = m.iridescenceThicknessMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 24u );
		m.specularColorMapTransform = m.specularColorMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 26u );
		m.specularIntensityMapTransform = m.specularIntensityMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 28u );
		m.alphaMapTransform = m.alphaMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 30u );

		return m;

	}

`,g2=`

	struct SurfaceRecord {

		// surface type
		bool volumeParticle;

		// geometry
		vec3 faceNormal;
		bool frontFace;
		vec3 normal;
		mat3 normalBasis;
		mat3 normalInvBasis;

		// cached properties
		float eta;
		float f0;

		// material
		float roughness;
		float filteredRoughness;
		float metalness;
		vec3 color;
		vec3 emission;

		// transmission
		float ior;
		float transmission;
		bool thinFilm;
		vec3 attenuationColor;
		float attenuationDistance;

		// clearcoat
		vec3 clearcoatNormal;
		mat3 clearcoatBasis;
		mat3 clearcoatInvBasis;
		float clearcoat;
		float clearcoatRoughness;
		float filteredClearcoatRoughness;

		// sheen
		float sheen;
		vec3 sheenColor;
		float sheenRoughness;

		// iridescence
		float iridescence;
		float iridescenceIor;
		float iridescenceThickness;

		// specular
		vec3 specularColor;
		float specularIntensity;
	};

	struct ScatterRecord {
		float specularPdf;
		float pdf;
		vec3 direction;
		vec3 color;
	};

`,v2=`

	// samples the the given environment map in the given direction
	vec3 sampleEquirectColor( sampler2D envMap, vec3 direction ) {

		return texture2D( envMap, equirectDirectionToUv( direction ) ).rgb;

	}

	// gets the pdf of the given direction to sample
	float equirectDirectionPdf( vec3 direction ) {

		vec2 uv = equirectDirectionToUv( direction );
		float theta = uv.y * PI;
		float sinTheta = sin( theta );
		if ( sinTheta == 0.0 ) {

			return 0.0;

		}

		return 1.0 / ( 2.0 * PI * PI * sinTheta );

	}

	// samples the color given env map with CDF and returns the pdf of the direction
	float sampleEquirect( vec3 direction, inout vec3 color ) {

		float totalSum = envMapInfo.totalSum;
		if ( totalSum == 0.0 ) {

			color = vec3( 0.0 );
			return 1.0;

		}

		vec2 uv = equirectDirectionToUv( direction );
		color = texture2D( envMapInfo.map, uv ).rgb;

		float lum = luminance( color );
		ivec2 resolution = textureSize( envMapInfo.map, 0 );
		float pdf = lum / totalSum;

		return float( resolution.x * resolution.y ) * pdf * equirectDirectionPdf( direction );

	}

	// samples a direction of the envmap with color and retrieves pdf
	float sampleEquirectProbability( vec2 r, inout vec3 color, inout vec3 direction ) {

		// sample env map cdf
		float v = texture2D( envMapInfo.marginalWeights, vec2( r.x, 0.0 ) ).x;
		float u = texture2D( envMapInfo.conditionalWeights, vec2( r.y, v ) ).x;
		vec2 uv = vec2( u, v );

		vec3 derivedDirection = equirectUvToDirection( uv );
		direction = derivedDirection;
		color = texture2D( envMapInfo.map, uv ).rgb;

		float totalSum = envMapInfo.totalSum;
		float lum = luminance( color );
		ivec2 resolution = textureSize( envMapInfo.map, 0 );
		float pdf = lum / totalSum;

		return float( resolution.x * resolution.y ) * pdf * equirectDirectionPdf( direction );

	}
`,y2=`

	float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {

		return smoothstep( coneCosine, penumbraCosine, angleCosine );

	}

	float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {

		// based upon Frostbite 3 Moving to Physically-based Rendering
		// page 32, equation 26: E[window1]
		// https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), EPSILON );

		if ( cutoffDistance > 0.0 ) {

			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );

		}

		return distanceFalloff;

	}

	float getPhotometricAttenuation( sampler2DArray iesProfiles, int iesProfile, vec3 posToLight, vec3 lightDir, vec3 u, vec3 v ) {

		float cosTheta = dot( posToLight, lightDir );
		float angle = acos( cosTheta ) / PI;

		return texture2D( iesProfiles, vec3( angle, 0.0, iesProfile ) ).r;

	}

	struct LightRecord {

		float dist;
		vec3 direction;
		float pdf;
		vec3 emission;
		int type;

	};

	bool intersectLightAtIndex( sampler2D lights, vec3 rayOrigin, vec3 rayDirection, uint l, inout LightRecord lightRec ) {

		bool didHit = false;
		Light light = readLightInfo( lights, l );

		vec3 u = light.u;
		vec3 v = light.v;

		// check for backface
		vec3 normal = normalize( cross( u, v ) );
		if ( dot( normal, rayDirection ) > 0.0 ) {

			u *= 1.0 / dot( u, u );
			v *= 1.0 / dot( v, v );

			float dist;

			// MIS / light intersection is not supported for punctual lights.
			if(
				( light.type == RECT_AREA_LIGHT_TYPE && intersectsRectangle( light.position, normal, u, v, rayOrigin, rayDirection, dist ) ) ||
				( light.type == CIRC_AREA_LIGHT_TYPE && intersectsCircle( light.position, normal, u, v, rayOrigin, rayDirection, dist ) )
			) {

				float cosTheta = dot( rayDirection, normal );
				didHit = true;
				lightRec.dist = dist;
				lightRec.pdf = ( dist * dist ) / ( light.area * cosTheta );
				lightRec.emission = light.color * light.intensity;
				lightRec.direction = rayDirection;
				lightRec.type = light.type;

			}

		}

		return didHit;

	}

	LightRecord randomAreaLightSample( Light light, vec3 rayOrigin, vec2 ruv ) {

		vec3 randomPos;
		if( light.type == RECT_AREA_LIGHT_TYPE ) {

			// rectangular area light
			randomPos = light.position + light.u * ( ruv.x - 0.5 ) + light.v * ( ruv.y - 0.5 );

		} else if( light.type == CIRC_AREA_LIGHT_TYPE ) {

			// circular area light
			float r = 0.5 * sqrt( ruv.x );
			float theta = ruv.y * 2.0 * PI;
			float x = r * cos( theta );
			float y = r * sin( theta );

			randomPos = light.position + light.u * x + light.v * y;

		}

		vec3 toLight = randomPos - rayOrigin;
		float lightDistSq = dot( toLight, toLight );
		float dist = sqrt( lightDistSq );
		vec3 direction = toLight / dist;
		vec3 lightNormal = normalize( cross( light.u, light.v ) );

		LightRecord lightRec;
		lightRec.type = light.type;
		lightRec.emission = light.color * light.intensity;
		lightRec.dist = dist;
		lightRec.direction = direction;

		// TODO: the denominator is potentially zero
		lightRec.pdf = lightDistSq / ( light.area * dot( direction, lightNormal ) );

		return lightRec;

	}

	LightRecord randomSpotLightSample( Light light, sampler2DArray iesProfiles, vec3 rayOrigin, vec2 ruv ) {

		float radius = light.radius * sqrt( ruv.x );
		float theta = ruv.y * 2.0 * PI;
		float x = radius * cos( theta );
		float y = radius * sin( theta );

		vec3 u = light.u;
		vec3 v = light.v;
		vec3 normal = normalize( cross( u, v ) );

		float angle = acos( light.coneCos );
		float angleTan = tan( angle );
		float startDistance = light.radius / max( angleTan, EPSILON );

		vec3 randomPos = light.position - normal * startDistance + u * x + v * y;
		vec3 toLight = randomPos - rayOrigin;
		float lightDistSq = dot( toLight, toLight );
		float dist = sqrt( lightDistSq );

		vec3 direction = toLight / max( dist, EPSILON );
		float cosTheta = dot( direction, normal );

		float spotAttenuation = light.iesProfile != - 1 ?
			getPhotometricAttenuation( iesProfiles, light.iesProfile, direction, normal, u, v ) :
			getSpotAttenuation( light.coneCos, light.penumbraCos, cosTheta );

		float distanceAttenuation = getDistanceAttenuation( dist, light.distance, light.decay );
		LightRecord lightRec;
		lightRec.type = light.type;
		lightRec.dist = dist;
		lightRec.direction = direction;
		lightRec.emission = light.color * light.intensity * distanceAttenuation * spotAttenuation;
		lightRec.pdf = 1.0;

		return lightRec;

	}

	LightRecord randomLightSample( sampler2D lights, sampler2DArray iesProfiles, uint lightCount, vec3 rayOrigin, vec3 ruv ) {

		LightRecord result;

		// pick a random light
		uint l = uint( ruv.x * float( lightCount ) );
		Light light = readLightInfo( lights, l );

		if ( light.type == SPOT_LIGHT_TYPE ) {

			result = randomSpotLightSample( light, iesProfiles, rayOrigin, ruv.yz );

		} else if ( light.type == POINT_LIGHT_TYPE ) {

			vec3 lightRay = light.u - rayOrigin;
			float lightDist = length( lightRay );
			float cutoffDistance = light.distance;
			float distanceFalloff = 1.0 / max( pow( lightDist, light.decay ), 0.01 );
			if ( cutoffDistance > 0.0 ) {

				distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDist / cutoffDistance ) ) );

			}

			LightRecord rec;
			rec.direction = normalize( lightRay );
			rec.dist = length( lightRay );
			rec.pdf = 1.0;
			rec.emission = light.color * light.intensity * distanceFalloff;
			rec.type = light.type;
			result = rec;

		} else if ( light.type == DIR_LIGHT_TYPE ) {

			LightRecord rec;
			rec.dist = 1e10;
			rec.direction = light.u;
			rec.pdf = 1.0;
			rec.emission = light.color * light.intensity;
			rec.type = light.type;

			result = rec;

		} else {

			// sample the light
			result = randomAreaLightSample( light, rayOrigin, ruv.yz );

		}

		return result;

	}

`,b2=`

	vec3 sampleHemisphere( vec3 n, vec2 uv ) {

		// https://www.rorydriscoll.com/2009/01/07/better-sampling/
		// https://graphics.pixar.com/library/OrthonormalB/paper.pdf
		float sign = n.z == 0.0 ? 1.0 : sign( n.z );
		float a = - 1.0 / ( sign + n.z );
		float b = n.x * n.y * a;
		vec3 b1 = vec3( 1.0 + sign * n.x * n.x * a, sign * b, - sign * n.x );
		vec3 b2 = vec3( b, sign + n.y * n.y * a, - n.y );

		float r = sqrt( uv.x );
		float theta = 2.0 * PI * uv.y;
		float x = r * cos( theta );
		float y = r * sin( theta );
		return x * b1 + y * b2 + sqrt( 1.0 - uv.x ) * n;

	}

	vec2 sampleTriangle( vec2 a, vec2 b, vec2 c, vec2 r ) {

		// get the edges of the triangle and the diagonal across the
		// center of the parallelogram
		vec2 e1 = a - b;
		vec2 e2 = c - b;
		vec2 diag = normalize( e1 + e2 );

		// pick the point in the parallelogram
		if ( r.x + r.y > 1.0 ) {

			r = vec2( 1.0 ) - r;

		}

		return e1 * r.x + e2 * r.y;

	}

	vec2 sampleCircle( vec2 uv ) {

		float angle = 2.0 * PI * uv.x;
		float radius = sqrt( uv.y );
		return vec2( cos( angle ), sin( angle ) ) * radius;

	}

	vec3 sampleSphere( vec2 uv ) {

		float u = ( uv.x - 0.5 ) * 2.0;
		float t = uv.y * PI * 2.0;
		float f = sqrt( 1.0 - u * u );

		return vec3( f * cos( t ), f * sin( t ), u );

	}

	vec2 sampleRegularPolygon( int sides, vec3 uvw ) {

		sides = max( sides, 3 );

		vec3 r = uvw;
		float anglePerSegment = 2.0 * PI / float( sides );
		float segment = floor( float( sides ) * r.x );

		float angle1 = anglePerSegment * segment;
		float angle2 = angle1 + anglePerSegment;
		vec2 a = vec2( sin( angle1 ), cos( angle1 ) );
		vec2 b = vec2( 0.0, 0.0 );
		vec2 c = vec2( sin( angle2 ), cos( angle2 ) );

		return sampleTriangle( a, b, c, r.yz );

	}

	// samples an aperture shape with the given number of sides. 0 means circle
	vec2 sampleAperture( int blades, vec3 uvw ) {

		return blades == 0 ?
			sampleCircle( uvw.xy ) :
			sampleRegularPolygon( blades, uvw );

	}


`,T2=`

	bool totalInternalReflection( float cosTheta, float eta ) {

		float sinTheta = sqrt( 1.0 - cosTheta * cosTheta );
		return eta * sinTheta > 1.0;

	}

	// https://google.github.io/filament/Filament.md.html#materialsystem/diffusebrdf
	float schlickFresnel( float cosine, float f0 ) {

		return f0 + ( 1.0 - f0 ) * pow( 1.0 - cosine, 5.0 );

	}

	vec3 schlickFresnel( float cosine, vec3 f0 ) {

		return f0 + ( 1.0 - f0 ) * pow( 1.0 - cosine, 5.0 );

	}

	vec3 schlickFresnel( float cosine, vec3 f0, vec3 f90 ) {

		return f0 + ( f90 - f0 ) * pow( 1.0 - cosine, 5.0 );

	}

	float dielectricFresnel( float cosThetaI, float eta ) {

		// https://schuttejoe.github.io/post/disneybsdf/
		float ni = eta;
		float nt = 1.0;

		// Check for total internal reflection
		float sinThetaISq = 1.0f - cosThetaI * cosThetaI;
		float sinThetaTSq = eta * eta * sinThetaISq;
		if( sinThetaTSq >= 1.0 ) {

			return 1.0;

		}

		float sinThetaT = sqrt( sinThetaTSq );

		float cosThetaT = sqrt( max( 0.0, 1.0f - sinThetaT * sinThetaT ) );
		float rParallel = ( ( nt * cosThetaI ) - ( ni * cosThetaT ) ) / ( ( nt * cosThetaI ) + ( ni * cosThetaT ) );
		float rPerpendicular = ( ( ni * cosThetaI ) - ( nt * cosThetaT ) ) / ( ( ni * cosThetaI ) + ( nt * cosThetaT ) );
		return ( rParallel * rParallel + rPerpendicular * rPerpendicular ) / 2.0;

	}

	// https://raytracing.github.io/books/RayTracingInOneWeekend.html#dielectrics/schlickapproximation
	float iorRatioToF0( float eta ) {

		return pow( ( 1.0 - eta ) / ( 1.0 + eta ), 2.0 );

	}

	vec3 evaluateFresnel( float cosTheta, float eta, vec3 f0, vec3 f90 ) {

		if ( totalInternalReflection( cosTheta, eta ) ) {

			return f90;

		}

		return schlickFresnel( cosTheta, f0, f90 );

	}

	// TODO: disney fresnel was removed and replaced with this fresnel function to better align with
	// the glTF but is causing blown out pixels. Should be revisited
	// float evaluateFresnelWeight( float cosTheta, float eta, float f0 ) {

	// 	if ( totalInternalReflection( cosTheta, eta ) ) {

	// 		return 1.0;

	// 	}

	// 	return schlickFresnel( cosTheta, f0 );

	// }

	// https://schuttejoe.github.io/post/disneybsdf/
	float disneyFresnel( vec3 wo, vec3 wi, vec3 wh, float f0, float eta, float metalness ) {

		float dotHV = dot( wo, wh );
		if ( totalInternalReflection( dotHV, eta ) ) {

			return 1.0;

		}

		float dotHL = dot( wi, wh );
		float dielectricFresnel = dielectricFresnel( abs( dotHV ), eta );
		float metallicFresnel = schlickFresnel( dotHL, f0 );

		return mix( dielectricFresnel, metallicFresnel, metalness );

	}

`,x2=`

	// Fast arccos approximation used to remove banding artifacts caused by numerical errors in acos.
	// This is a cubic Lagrange interpolating polynomial for x = [-1, -1/2, 0, 1/2, 1].
	// For more information see: https://github.com/gkjohnson/three-gpu-pathtracer/pull/171#issuecomment-1152275248
	float acosApprox( float x ) {

		x = clamp( x, -1.0, 1.0 );
		return ( - 0.69813170079773212 * x * x - 0.87266462599716477 ) * x + 1.5707963267948966;

	}

	// An acos with input values bound to the range [-1, 1].
	float acosSafe( float x ) {

		return acos( clamp( x, -1.0, 1.0 ) );

	}

	float saturateCos( float val ) {

		return clamp( val, 0.001, 1.0 );

	}

	float square( float t ) {

		return t * t;

	}

	vec2 square( vec2 t ) {

		return t * t;

	}

	vec3 square( vec3 t ) {

		return t * t;

	}

	vec4 square( vec4 t ) {

		return t * t;

	}

	vec2 rotateVector( vec2 v, float t ) {

		float ac = cos( t );
		float as = sin( t );
		return vec2(
			v.x * ac - v.y * as,
			v.x * as + v.y * ac
		);

	}

	// forms a basis with the normal vector as Z
	mat3 getBasisFromNormal( vec3 normal ) {

		vec3 other;
		if ( abs( normal.x ) > 0.5 ) {

			other = vec3( 0.0, 1.0, 0.0 );

		} else {

			other = vec3( 1.0, 0.0, 0.0 );

		}

		vec3 ortho = normalize( cross( normal, other ) );
		vec3 ortho2 = normalize( cross( normal, ortho ) );
		return mat3( ortho2, ortho, normal );

	}

`,S2=`

	// Finds the point where the ray intersects the plane defined by u and v and checks if this point
	// falls in the bounds of the rectangle on that same plane.
	// Plane intersection: https://lousodrome.net/blog/light/2020/07/03/intersection-of-a-ray-and-a-plane/
	bool intersectsRectangle( vec3 center, vec3 normal, vec3 u, vec3 v, vec3 rayOrigin, vec3 rayDirection, inout float dist ) {

		float t = dot( center - rayOrigin, normal ) / dot( rayDirection, normal );

		if ( t > EPSILON ) {

			vec3 p = rayOrigin + rayDirection * t;
			vec3 vi = p - center;

			// check if p falls inside the rectangle
			float a1 = dot( u, vi );
			if ( abs( a1 ) <= 0.5 ) {

				float a2 = dot( v, vi );
				if ( abs( a2 ) <= 0.5 ) {

					dist = t;
					return true;

				}

			}

		}

		return false;

	}

	// Finds the point where the ray intersects the plane defined by u and v and checks if this point
	// falls in the bounds of the circle on that same plane. See above URL for a description of the plane intersection algorithm.
	bool intersectsCircle( vec3 position, vec3 normal, vec3 u, vec3 v, vec3 rayOrigin, vec3 rayDirection, inout float dist ) {

		float t = dot( position - rayOrigin, normal ) / dot( rayDirection, normal );

		if ( t > EPSILON ) {

			vec3 hit = rayOrigin + rayDirection * t;
			vec3 vi = hit - position;

			float a1 = dot( u, vi );
			float a2 = dot( v, vi );

			if( length( vec2( a1, a2 ) ) <= 0.5 ) {

				dist = t;
				return true;

			}

		}

		return false;

	}

`,_2=`

	// add texel fetch functions for texture arrays
	vec4 texelFetch1D( sampler2DArray tex, int layer, uint index ) {

		uint width = uint( textureSize( tex, 0 ).x );
		uvec2 uv;
		uv.x = index % width;
		uv.y = index / width;

		return texelFetch( tex, ivec3( uv, layer ), 0 );

	}

	vec4 textureSampleBarycoord( sampler2DArray tex, int layer, vec3 barycoord, uvec3 faceIndices ) {

		return
			barycoord.x * texelFetch1D( tex, layer, faceIndices.x ) +
			barycoord.y * texelFetch1D( tex, layer, faceIndices.y ) +
			barycoord.z * texelFetch1D( tex, layer, faceIndices.z );

	}

`,Jv=`

	// TODO: possibly this should be renamed something related to material or path tracing logic

	#ifndef RAY_OFFSET
	#define RAY_OFFSET 1e-4
	#endif

	// adjust the hit point by the surface normal by a factor of some offset and the
	// maximum component-wise value of the current point to accommodate floating point
	// error as values increase.
	vec3 stepRayOrigin( vec3 rayOrigin, vec3 rayDirection, vec3 offset, float dist ) {

		vec3 point = rayOrigin + rayDirection * dist;
		vec3 absPoint = abs( point );
		float maxPoint = max( absPoint.x, max( absPoint.y, absPoint.z ) );
		return point + offset * ( maxPoint + 1.0 ) * RAY_OFFSET;

	}

	// https://github.com/KhronosGroup/glTF/blob/main/extensions/2.0/Khronos/KHR_materials_volume/README.md#attenuation
	vec3 transmissionAttenuation( float dist, vec3 attColor, float attDist ) {

		vec3 ot = - log( attColor ) / attDist;
		return exp( - ot * dist );

	}

	vec3 getHalfVector( vec3 wi, vec3 wo, float eta ) {

		// get the half vector - assuming if the light incident vector is on the other side
		// of the that it's transmissive.
		vec3 h;
		if ( wi.z > 0.0 ) {

			h = normalize( wi + wo );

		} else {

			// Scale by the ior ratio to retrieve the appropriate half vector
			// From Section 2.2 on computing the transmission half vector:
			// https://blog.selfshadow.com/publications/s2015-shading-course/burley/s2015_pbs_disney_bsdf_notes.pdf
			h = normalize( wi + wo * eta );

		}

		h *= sign( h.z );
		return h;

	}

	vec3 getHalfVector( vec3 a, vec3 b ) {

		return normalize( a + b );

	}

	// The discrepancy between interpolated surface normal and geometry normal can cause issues when a ray
	// is cast that is on the top side of the geometry normal plane but below the surface normal plane. If
	// we find a ray like that we ignore it to avoid artifacts.
	// This function returns if the direction is on the same side of both planes.
	bool isDirectionValid( vec3 direction, vec3 surfaceNormal, vec3 geometryNormal ) {

		bool aboveSurfaceNormal = dot( direction, surfaceNormal ) > 0.0;
		bool aboveGeometryNormal = dot( direction, geometryNormal ) > 0.0;
		return aboveSurfaceNormal == aboveGeometryNormal;

	}

	// ray sampling x and z are swapped to align with expected background view
	vec2 equirectDirectionToUv( vec3 direction ) {

		// from Spherical.setFromCartesianCoords
		vec2 uv = vec2( atan( direction.z, direction.x ), acos( direction.y ) );
		uv /= vec2( 2.0 * PI, PI );

		// apply adjustments to get values in range [0, 1] and y right side up
		uv.x += 0.5;
		uv.y = 1.0 - uv.y;
		return uv;

	}

	vec3 equirectUvToDirection( vec2 uv ) {

		// undo above adjustments
		uv.x -= 0.5;
		uv.y = 1.0 - uv.y;

		// from Vector3.setFromSphericalCoords
		float theta = uv.x * 2.0 * PI;
		float phi = uv.y * PI;

		float sinPhi = sin( phi );

		return vec3( sinPhi * cos( theta ), cos( phi ), sinPhi * sin( theta ) );

	}

	// power heuristic for multiple importance sampling
	float misHeuristic( float a, float b ) {

		float aa = a * a;
		float bb = b * b;
		return aa / ( aa + bb );

	}

	// tentFilter from Peter Shirley's 'Realistic Ray Tracing (2nd Edition)' book, pg. 60
	// erichlof/THREE.js-PathTracing-Renderer/
	float tentFilter( float x ) {

		return x < 0.5 ? sqrt( 2.0 * x ) - 1.0 : 1.0 - sqrt( 2.0 - ( 2.0 * x ) );

	}
`,uv=`

	// https://www.shadertoy.com/view/wltcRS
	uvec4 WHITE_NOISE_SEED;

	void rng_initialize( vec2 p, int frame ) {

		// white noise seed
		WHITE_NOISE_SEED = uvec4( p, uint( frame ), uint( p.x ) + uint( p.y ) );

	}

	// https://www.pcg-random.org/
	void pcg4d( inout uvec4 v ) {

		v = v * 1664525u + 1013904223u;
		v.x += v.y * v.w;
		v.y += v.z * v.x;
		v.z += v.x * v.y;
		v.w += v.y * v.z;
		v = v ^ ( v >> 16u );
		v.x += v.y*v.w;
		v.y += v.z*v.x;
		v.z += v.x*v.y;
		v.w += v.y*v.z;

	}

	// returns [ 0, 1 ]
	float pcgRand() {

		pcg4d( WHITE_NOISE_SEED );
		return float( WHITE_NOISE_SEED.x ) / float( 0xffffffffu );

	}

	vec2 pcgRand2() {

		pcg4d( WHITE_NOISE_SEED );
		return vec2( WHITE_NOISE_SEED.xy ) / float(0xffffffffu);

	}

	vec3 pcgRand3() {

		pcg4d( WHITE_NOISE_SEED );
		return vec3( WHITE_NOISE_SEED.xyz ) / float( 0xffffffffu );

	}

	vec4 pcgRand4() {

		pcg4d( WHITE_NOISE_SEED );
		return vec4( WHITE_NOISE_SEED ) / float( 0xffffffffu );

	}
`,w2=`

	uniform sampler2D stratifiedTexture;
	uniform sampler2D stratifiedOffsetTexture;

	uint sobolPixelIndex = 0u;
	uint sobolPathIndex = 0u;
	uint sobolBounceIndex = 0u;
	vec4 pixelSeed = vec4( 0 );

	vec4 rand4( int v ) {

		ivec2 uv = ivec2( v, sobolBounceIndex );
		vec4 stratifiedSample = texelFetch( stratifiedTexture, uv, 0 );
		return fract( stratifiedSample + pixelSeed.r ); // blue noise + stratified samples

	}

	vec3 rand3( int v ) {

		return rand4( v ).xyz;

	}

	vec2 rand2( int v ) {

		return rand4( v ).xy;

	}

	float rand( int v ) {

		return rand4( v ).x;

	}

	void rng_initialize( vec2 screenCoord, int frame ) {

		// tile the small noise texture across the entire screen
		ivec2 noiseSize = ivec2( textureSize( stratifiedOffsetTexture, 0 ) );
		ivec2 pixel = ivec2( screenCoord.xy ) % noiseSize;
		vec2 pixelWidth = 1.0 / vec2( noiseSize );
		vec2 uv = vec2( pixel ) * pixelWidth + pixelWidth * 0.5;

		// note that using "texelFetch" here seems to break Android for some reason
		pixelSeed = texture( stratifiedOffsetTexture, uv );

	}

`,A2=`

	// diffuse
	float diffuseEval( vec3 wo, vec3 wi, vec3 wh, SurfaceRecord surf, inout vec3 color ) {

		// https://schuttejoe.github.io/post/disneybsdf/
		float fl = schlickFresnel( wi.z, 0.0 );
		float fv = schlickFresnel( wo.z, 0.0 );

		float metalFactor = ( 1.0 - surf.metalness );
		float transFactor = ( 1.0 - surf.transmission );
		float rr = 0.5 + 2.0 * surf.roughness * fl * fl;
		float retro = rr * ( fl + fv + fl * fv * ( rr - 1.0f ) );
		float lambert = ( 1.0f - 0.5f * fl ) * ( 1.0f - 0.5f * fv );

		// TODO: subsurface approx?

		// float F = evaluateFresnelWeight( dot( wo, wh ), surf.eta, surf.f0 );
		float F = disneyFresnel( wo, wi, wh, surf.f0, surf.eta, surf.metalness );
		color = ( 1.0 - F ) * transFactor * metalFactor * wi.z * surf.color * ( retro + lambert ) / PI;

		return wi.z / PI;

	}

	vec3 diffuseDirection( vec3 wo, SurfaceRecord surf ) {

		vec3 lightDirection = sampleSphere( rand2( 11 ) );
		lightDirection.z += 1.0;
		lightDirection = normalize( lightDirection );

		return lightDirection;

	}

	// specular
	float specularEval( vec3 wo, vec3 wi, vec3 wh, SurfaceRecord surf, inout vec3 color ) {

		// if roughness is set to 0 then D === NaN which results in black pixels
		float metalness = surf.metalness;
		float roughness = surf.filteredRoughness;

		float eta = surf.eta;
		float f0 = surf.f0;

		vec3 f0Color = mix( f0 * surf.specularColor * surf.specularIntensity, surf.color, surf.metalness );
		vec3 f90Color = vec3( mix( surf.specularIntensity, 1.0, surf.metalness ) );
		vec3 F = evaluateFresnel( dot( wo, wh ), eta, f0Color, f90Color );

		vec3 iridescenceF = evalIridescence( 1.0, surf.iridescenceIor, dot( wi, wh ), surf.iridescenceThickness, f0Color );
		F = mix( F, iridescenceF,  surf.iridescence );

		// PDF
		// See 14.1.1 Microfacet BxDFs in https://www.pbr-book.org/
		float incidentTheta = acos( wo.z );
		float G = ggxShadowMaskG2( wi, wo, roughness );
		float D = ggxDistribution( wh, roughness );
		float G1 = ggxShadowMaskG1( incidentTheta, roughness );
		float ggxPdf = D * G1 * max( 0.0, abs( dot( wo, wh ) ) ) / abs ( wo.z );

		color = wi.z * F * G * D / ( 4.0 * abs( wi.z * wo.z ) );
		return ggxPdf / ( 4.0 * dot( wo, wh ) );

	}

	vec3 specularDirection( vec3 wo, SurfaceRecord surf ) {

		// sample ggx vndf distribution which gives a new normal
		float roughness = surf.filteredRoughness;
		vec3 halfVector = ggxDirection(
			wo,
			vec2( roughness ),
			rand2( 12 )
		);

		// apply to new ray by reflecting off the new normal
		return - reflect( wo, halfVector );

	}


	// transmission
	/*
	float transmissionEval( vec3 wo, vec3 wi, vec3 wh, SurfaceRecord surf, inout vec3 color ) {

		// See section 4.2 in https://www.cs.cornell.edu/~srm/publications/EGSR07-btdf.pdf

		float filteredRoughness = surf.filteredRoughness;
		float eta = surf.eta;
		bool frontFace = surf.frontFace;
		bool thinFilm = surf.thinFilm;

		color = surf.transmission * surf.color;

		float denom = pow( eta * dot( wi, wh ) + dot( wo, wh ), 2.0 );
		return ggxPDF( wo, wh, filteredRoughness ) / denom;

	}

	vec3 transmissionDirection( vec3 wo, SurfaceRecord surf ) {

		float filteredRoughness = surf.filteredRoughness;
		float eta = surf.eta;
		bool frontFace = surf.frontFace;

		// sample ggx vndf distribution which gives a new normal
		vec3 halfVector = ggxDirection(
			wo,
			vec2( filteredRoughness ),
			rand2( 13 )
		);

		vec3 lightDirection = refract( normalize( - wo ), halfVector, eta );
		if ( surf.thinFilm ) {

			lightDirection = - refract( normalize( - lightDirection ), - vec3( 0.0, 0.0, 1.0 ), 1.0 / eta );

		}

		return normalize( lightDirection );

	}
	*/

	// TODO: This is just using a basic cosine-weighted specular distribution with an
	// incorrect PDF value at the moment. Update it to correctly use a GGX distribution
	float transmissionEval( vec3 wo, vec3 wi, vec3 wh, SurfaceRecord surf, inout vec3 color ) {

		color = surf.transmission * surf.color;

		// PDF
		// float F = evaluateFresnelWeight( dot( wo, wh ), surf.eta, surf.f0 );
		// float F = disneyFresnel( wo, wi, wh, surf.f0, surf.eta, surf.metalness );
		// if ( F >= 1.0 ) {

		// 	return 0.0;

		// }

		// return 1.0 / ( 1.0 - F );

		// reverted to previous to transmission. The above was causing black pixels
		float eta = surf.eta;
		float f0 = surf.f0;
		float cosTheta = min( wo.z, 1.0 );
		float sinTheta = sqrt( 1.0 - cosTheta * cosTheta );
		float reflectance = schlickFresnel( cosTheta, f0 );
		bool cannotRefract = eta * sinTheta > 1.0;
		if ( cannotRefract ) {

			return 0.0;

		}

		return 1.0 / ( 1.0 - reflectance );

	}

	vec3 transmissionDirection( vec3 wo, SurfaceRecord surf ) {

		float roughness = surf.filteredRoughness;
		float eta = surf.eta;
		vec3 halfVector = normalize( vec3( 0.0, 0.0, 1.0 ) + sampleSphere( rand2( 13 ) ) * roughness );
		vec3 lightDirection = refract( normalize( - wo ), halfVector, eta );

		if ( surf.thinFilm ) {

			lightDirection = - refract( normalize( - lightDirection ), - vec3( 0.0, 0.0, 1.0 ), 1.0 / eta );

		}
		return normalize( lightDirection );

	}

	// clearcoat
	float clearcoatEval( vec3 wo, vec3 wi, vec3 wh, SurfaceRecord surf, inout vec3 color ) {

		float ior = 1.5;
		float f0 = iorRatioToF0( ior );
		bool frontFace = surf.frontFace;
		float roughness = surf.filteredClearcoatRoughness;

		float eta = frontFace ? 1.0 / ior : ior;
		float G = ggxShadowMaskG2( wi, wo, roughness );
		float D = ggxDistribution( wh, roughness );
		float F = schlickFresnel( dot( wi, wh ), f0 );

		float fClearcoat = F * D * G / ( 4.0 * abs( wi.z * wo.z ) );
		color = color * ( 1.0 - surf.clearcoat * F ) + fClearcoat * surf.clearcoat * wi.z;

		// PDF
		// See equation (27) in http://jcgt.org/published/0003/02/03/
		return ggxPDF( wo, wh, roughness ) / ( 4.0 * dot( wi, wh ) );

	}

	vec3 clearcoatDirection( vec3 wo, SurfaceRecord surf ) {

		// sample ggx vndf distribution which gives a new normal
		float roughness = surf.filteredClearcoatRoughness;
		vec3 halfVector = ggxDirection(
			wo,
			vec2( roughness ),
			rand2( 14 )
		);

		// apply to new ray by reflecting off the new normal
		return - reflect( wo, halfVector );

	}

	// sheen
	vec3 sheenColor( vec3 wo, vec3 wi, vec3 wh, SurfaceRecord surf ) {

		float cosThetaO = saturateCos( wo.z );
		float cosThetaI = saturateCos( wi.z );
		float cosThetaH = wh.z;

		float D = velvetD( cosThetaH, surf.sheenRoughness );
		float G = velvetG( cosThetaO, cosThetaI, surf.sheenRoughness );

		// See equation (1) in http://www.aconty.com/pdf/s2017_pbs_imageworks_sheen.pdf
		vec3 color = surf.sheenColor;
		color *= D * G / ( 4.0 * abs( cosThetaO * cosThetaI ) );
		color *= wi.z;

		return color;

	}

	// bsdf
	void getLobeWeights(
		vec3 wo, vec3 wi, vec3 wh, vec3 clearcoatWo, SurfaceRecord surf,
		inout float diffuseWeight, inout float specularWeight, inout float transmissionWeight, inout float clearcoatWeight
	) {

		float metalness = surf.metalness;
		float transmission = surf.transmission;
		// float fEstimate = evaluateFresnelWeight( dot( wo, wh ), surf.eta, surf.f0 );
		float fEstimate = disneyFresnel( wo, wi, wh, surf.f0, surf.eta, surf.metalness );

		float transSpecularProb = mix( max( 0.25, fEstimate ), 1.0, metalness );
		float diffSpecularProb = 0.5 + 0.5 * metalness;

		diffuseWeight = ( 1.0 - transmission ) * ( 1.0 - diffSpecularProb );
		specularWeight = transmission * transSpecularProb + ( 1.0 - transmission ) * diffSpecularProb;
		transmissionWeight = transmission * ( 1.0 - transSpecularProb );
		clearcoatWeight = surf.clearcoat * schlickFresnel( clearcoatWo.z, 0.04 );

		float totalWeight = diffuseWeight + specularWeight + transmissionWeight + clearcoatWeight;
		diffuseWeight /= totalWeight;
		specularWeight /= totalWeight;
		transmissionWeight /= totalWeight;
		clearcoatWeight /= totalWeight;
	}

	float bsdfEval(
		vec3 wo, vec3 clearcoatWo, vec3 wi, vec3 clearcoatWi, SurfaceRecord surf,
		float diffuseWeight, float specularWeight, float transmissionWeight, float clearcoatWeight, inout float specularPdf, inout vec3 color
	) {

		float metalness = surf.metalness;
		float transmission = surf.transmission;

		float spdf = 0.0;
		float dpdf = 0.0;
		float tpdf = 0.0;
		float cpdf = 0.0;
		color = vec3( 0.0 );

		vec3 halfVector = getHalfVector( wi, wo, surf.eta );

		// diffuse
		if ( diffuseWeight > 0.0 && wi.z > 0.0 ) {

			dpdf = diffuseEval( wo, wi, halfVector, surf, color );
			color *= 1.0 - surf.transmission;

		}

		// ggx specular
		if ( specularWeight > 0.0 && wi.z > 0.0 ) {

			vec3 outColor;
			spdf = specularEval( wo, wi, getHalfVector( wi, wo ), surf, outColor );
			color += outColor;

		}

		// transmission
		if ( transmissionWeight > 0.0 && wi.z < 0.0 ) {

			tpdf = transmissionEval( wo, wi, halfVector, surf, color );

		}

		// sheen
		color *= mix( 1.0, sheenAlbedoScaling( wo, wi, surf ), surf.sheen );
		color += sheenColor( wo, wi, halfVector, surf ) * surf.sheen;

		// clearcoat
		if ( clearcoatWi.z >= 0.0 && clearcoatWeight > 0.0 ) {

			vec3 clearcoatHalfVector = getHalfVector( clearcoatWo, clearcoatWi );
			cpdf = clearcoatEval( clearcoatWo, clearcoatWi, clearcoatHalfVector, surf, color );

		}

		float pdf =
			dpdf * diffuseWeight
			+ spdf * specularWeight
			+ tpdf * transmissionWeight
			+ cpdf * clearcoatWeight;

		// retrieve specular rays for the shadows flag
		specularPdf = spdf * specularWeight + cpdf * clearcoatWeight;

		return pdf;

	}

	float bsdfResult( vec3 worldWo, vec3 worldWi, SurfaceRecord surf, inout vec3 color ) {

		if ( surf.volumeParticle ) {

			color = surf.color / ( 4.0 * PI );
			return 1.0 / ( 4.0 * PI );

		}

		vec3 wo = normalize( surf.normalInvBasis * worldWo );
		vec3 wi = normalize( surf.normalInvBasis * worldWi );

		vec3 clearcoatWo = normalize( surf.clearcoatInvBasis * worldWo );
		vec3 clearcoatWi = normalize( surf.clearcoatInvBasis * worldWi );

		vec3 wh = getHalfVector( wo, wi, surf.eta );
		float diffuseWeight;
		float specularWeight;
		float transmissionWeight;
		float clearcoatWeight;
		getLobeWeights( wo, wi, wh, clearcoatWo, surf, diffuseWeight, specularWeight, transmissionWeight, clearcoatWeight );

		float specularPdf;
		return bsdfEval( wo, clearcoatWo, wi, clearcoatWi, surf, diffuseWeight, specularWeight, transmissionWeight, clearcoatWeight, specularPdf, color );

	}

	ScatterRecord bsdfSample( vec3 worldWo, SurfaceRecord surf ) {

		if ( surf.volumeParticle ) {

			ScatterRecord sampleRec;
			sampleRec.specularPdf = 0.0;
			sampleRec.pdf = 1.0 / ( 4.0 * PI );
			sampleRec.direction = sampleSphere( rand2( 16 ) );
			sampleRec.color = surf.color / ( 4.0 * PI );
			return sampleRec;

		}

		vec3 wo = normalize( surf.normalInvBasis * worldWo );
		vec3 clearcoatWo = normalize( surf.clearcoatInvBasis * worldWo );
		mat3 normalBasis = surf.normalBasis;
		mat3 invBasis = surf.normalInvBasis;
		mat3 clearcoatNormalBasis = surf.clearcoatBasis;
		mat3 clearcoatInvBasis = surf.clearcoatInvBasis;

		float diffuseWeight;
		float specularWeight;
		float transmissionWeight;
		float clearcoatWeight;
		// using normal and basically-reflected ray since we don't have proper half vector here
		getLobeWeights( wo, wo, vec3( 0, 0, 1 ), clearcoatWo, surf, diffuseWeight, specularWeight, transmissionWeight, clearcoatWeight );

		float pdf[4];
		pdf[0] = diffuseWeight;
		pdf[1] = specularWeight;
		pdf[2] = transmissionWeight;
		pdf[3] = clearcoatWeight;

		float cdf[4];
		cdf[0] = pdf[0];
		cdf[1] = pdf[1] + cdf[0];
		cdf[2] = pdf[2] + cdf[1];
		cdf[3] = pdf[3] + cdf[2];

		if( cdf[3] != 0.0 ) {

			float invMaxCdf = 1.0 / cdf[3];
			cdf[0] *= invMaxCdf;
			cdf[1] *= invMaxCdf;
			cdf[2] *= invMaxCdf;
			cdf[3] *= invMaxCdf;

		} else {

			cdf[0] = 1.0;
			cdf[1] = 0.0;
			cdf[2] = 0.0;
			cdf[3] = 0.0;

		}

		vec3 wi;
		vec3 clearcoatWi;

		float r = rand( 15 );
		if ( r <= cdf[0] ) { // diffuse

			wi = diffuseDirection( wo, surf );
			clearcoatWi = normalize( clearcoatInvBasis * normalize( normalBasis * wi ) );

		} else if ( r <= cdf[1] ) { // specular

			wi = specularDirection( wo, surf );
			clearcoatWi = normalize( clearcoatInvBasis * normalize( normalBasis * wi ) );

		} else if ( r <= cdf[2] ) { // transmission / refraction

			wi = transmissionDirection( wo, surf );
			clearcoatWi = normalize( clearcoatInvBasis * normalize( normalBasis * wi ) );

		} else if ( r <= cdf[3] ) { // clearcoat

			clearcoatWi = clearcoatDirection( clearcoatWo, surf );
			wi = normalize( invBasis * normalize( clearcoatNormalBasis * clearcoatWi ) );

		}

		ScatterRecord result;
		result.pdf = bsdfEval( wo, clearcoatWo, wi, clearcoatWi, surf, diffuseWeight, specularWeight, transmissionWeight, clearcoatWeight, result.specularPdf, result.color );
		result.direction = normalize( surf.normalBasis * wi );

		return result;

	}

`,E2=`

	// returns the hit distance given the material density
	float intersectFogVolume( Material material, float u ) {

		// https://raytracing.github.io/books/RayTracingTheNextWeek.html#volumes/constantdensitymediums
		return material.opacity == 0.0 ? INFINITY : ( - 1.0 / material.opacity ) * log( u );

	}

	ScatterRecord sampleFogVolume( SurfaceRecord surf, vec2 uv ) {

		ScatterRecord sampleRec;
		sampleRec.specularPdf = 0.0;
		sampleRec.pdf = 1.0 / ( 2.0 * PI );
		sampleRec.direction = sampleSphere( uv );
		sampleRec.color = surf.color;
		return sampleRec;

	}

`,M2=`

	// The GGX functions provide sampling and distribution information for normals as output so
	// in order to get probability of scatter direction the half vector must be computed and provided.
	// [0] https://www.cs.cornell.edu/~srm/publications/EGSR07-btdf.pdf
	// [1] https://hal.archives-ouvertes.fr/hal-01509746/document
	// [2] http://jcgt.org/published/0007/04/01/
	// [4] http://jcgt.org/published/0003/02/03/

	// trowbridge-reitz === GGX === GTR

	vec3 ggxDirection( vec3 incidentDir, vec2 roughness, vec2 uv ) {

		// TODO: try GGXVNDF implementation from reference [2], here. Needs to update ggxDistribution
		// function below, as well

		// Implementation from reference [1]
		// stretch view
		vec3 V = normalize( vec3( roughness * incidentDir.xy, incidentDir.z ) );

		// orthonormal basis
		vec3 T1 = ( V.z < 0.9999 ) ? normalize( cross( V, vec3( 0.0, 0.0, 1.0 ) ) ) : vec3( 1.0, 0.0, 0.0 );
		vec3 T2 = cross( T1, V );

		// sample point with polar coordinates (r, phi)
		float a = 1.0 / ( 1.0 + V.z );
		float r = sqrt( uv.x );
		float phi = ( uv.y < a ) ? uv.y / a * PI : PI + ( uv.y - a ) / ( 1.0 - a ) * PI;
		float P1 = r * cos( phi );
		float P2 = r * sin( phi ) * ( ( uv.y < a ) ? 1.0 : V.z );

		// compute normal
		vec3 N = P1 * T1 + P2 * T2 + V * sqrt( max( 0.0, 1.0 - P1 * P1 - P2 * P2 ) );

		// unstretch
		N = normalize( vec3( roughness * N.xy, max( 0.0, N.z ) ) );

		return N;

	}

	// Below are PDF and related functions for use in a Monte Carlo path tracer
	// as specified in Appendix B of the following paper
	// See equation (34) from reference [0]
	float ggxLamda( float theta, float roughness ) {

		float tanTheta = tan( theta );
		float tanTheta2 = tanTheta * tanTheta;
		float alpha2 = roughness * roughness;

		float numerator = - 1.0 + sqrt( 1.0 + alpha2 * tanTheta2 );
		return numerator / 2.0;

	}

	// See equation (34) from reference [0]
	float ggxShadowMaskG1( float theta, float roughness ) {

		return 1.0 / ( 1.0 + ggxLamda( theta, roughness ) );

	}

	// See equation (125) from reference [4]
	float ggxShadowMaskG2( vec3 wi, vec3 wo, float roughness ) {

		float incidentTheta = acos( wi.z );
		float scatterTheta = acos( wo.z );
		return 1.0 / ( 1.0 + ggxLamda( incidentTheta, roughness ) + ggxLamda( scatterTheta, roughness ) );

	}

	// See equation (33) from reference [0]
	float ggxDistribution( vec3 halfVector, float roughness ) {

		float a2 = roughness * roughness;
		a2 = max( EPSILON, a2 );
		float cosTheta = halfVector.z;
		float cosTheta4 = pow( cosTheta, 4.0 );

		if ( cosTheta == 0.0 ) return 0.0;

		float theta = acosSafe( halfVector.z );
		float tanTheta = tan( theta );
		float tanTheta2 = pow( tanTheta, 2.0 );

		float denom = PI * cosTheta4 * pow( a2 + tanTheta2, 2.0 );
		return ( a2 / denom );

	}

	// See equation (3) from reference [2]
	float ggxPDF( vec3 wi, vec3 halfVector, float roughness ) {

		float incidentTheta = acos( wi.z );
		float D = ggxDistribution( halfVector, roughness );
		float G1 = ggxShadowMaskG1( incidentTheta, roughness );

		return D * G1 * max( 0.0, dot( wi, halfVector ) ) / wi.z;

	}

`,R2=`

	// XYZ to sRGB color space
	const mat3 XYZ_TO_REC709 = mat3(
		3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);

	vec3 fresnel0ToIor( vec3 fresnel0 ) {

		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );

	}

	// Conversion FO/IOR
	vec3 iorToFresnel0( vec3 transmittedIor, float incidentIor ) {

		return square( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );

	}

	// ior is a value between 1.0 and 3.0. 1.0 is air interface
	float iorToFresnel0( float transmittedIor, float incidentIor ) {

		return square( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ) );

	}

	// Fresnel equations for dielectric/dielectric interfaces. See https://belcour.github.io/blog/research/2017/05/01/brdf-thin-film.html
	vec3 evalSensitivity( float OPD, vec3 shift ) {

		float phase = 2.0 * PI * OPD * 1.0e-9;

		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );

		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - square( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * square( phase ) );
		xyz /= 1.0685e-7;

		vec3 srgb = XYZ_TO_REC709 * xyz;
		return srgb;

	}

	// See Section 4. Analytic Spectral Integration, A Practical Extension to Microfacet Theory for the Modeling of Varying Iridescence, https://hal.archives-ouvertes.fr/hal-01518344/document
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {

		vec3 I;

		// Force iridescenceIor -> outsideIOR when thinFilmThickness -> 0.0
		float iridescenceIor = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );

		// Evaluate the cosTheta on the base layer (Snell law)
		float sinTheta2Sq = square( outsideIOR / iridescenceIor ) * ( 1.0 - square( cosTheta1 ) );

		// Handle TIR:
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {

			return vec3( 1.0 );

		}

		float cosTheta2 = sqrt( cosTheta2Sq );

		// First interface
		float R0 = iorToFresnel0( iridescenceIor, outsideIOR );
		float R12 = schlickFresnel( cosTheta1, R0 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIor < outsideIOR ) {

			phi12 = PI;

		}

		float phi21 = PI - phi12;

		// Second interface
		vec3 baseIOR = fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) ); // guard against 1.0
		vec3 R1 = iorToFresnel0( baseIOR, iridescenceIor );
		vec3 R23 = schlickFresnel( cosTheta2, R1 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[0] < iridescenceIor ) {

			phi23[ 0 ] = PI;

		}

		if ( baseIOR[1] < iridescenceIor ) {

			phi23[ 1 ] = PI;

		}

		if ( baseIOR[2] < iridescenceIor ) {

			phi23[ 2 ] = PI;

		}

		// Phase shift
		float OPD = 2.0 * iridescenceIor * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;

		// Compound terms
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = square( T121 ) * R23 / ( vec3( 1.0 ) - R123 );

		// Reflectance term for m = 0 (DC term amplitude)
		vec3 C0 = R12 + Rs;
		I = C0;

		// Reflectance term for m > 0 (pairs of diracs)
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {

			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;

		}

		// Since out of gamut colors might be produced, negative color values are clamped to 0.
		return max( I, vec3( 0.0 ) );

	}

`,C2=`

	// See equation (2) in http://www.aconty.com/pdf/s2017_pbs_imageworks_sheen.pdf
	float velvetD( float cosThetaH, float roughness ) {

		float alpha = max( roughness, 0.07 );
		alpha = alpha * alpha;

		float invAlpha = 1.0 / alpha;

		float sqrCosThetaH = cosThetaH * cosThetaH;
		float sinThetaH = max( 1.0 - sqrCosThetaH, 0.001 );

		return ( 2.0 + invAlpha ) * pow( sinThetaH, 0.5 * invAlpha ) / ( 2.0 * PI );

	}

	float velvetParamsInterpolate( int i, float oneMinusAlphaSquared ) {

		const float p0[5] = float[5]( 25.3245, 3.32435, 0.16801, -1.27393, -4.85967 );
		const float p1[5] = float[5]( 21.5473, 3.82987, 0.19823, -1.97760, -4.32054 );

		return mix( p1[i], p0[i], oneMinusAlphaSquared );

	}

	float velvetL( float x, float alpha ) {

		float oneMinusAlpha = 1.0 - alpha;
		float oneMinusAlphaSquared = oneMinusAlpha * oneMinusAlpha;

		float a = velvetParamsInterpolate( 0, oneMinusAlphaSquared );
		float b = velvetParamsInterpolate( 1, oneMinusAlphaSquared );
		float c = velvetParamsInterpolate( 2, oneMinusAlphaSquared );
		float d = velvetParamsInterpolate( 3, oneMinusAlphaSquared );
		float e = velvetParamsInterpolate( 4, oneMinusAlphaSquared );

		return a / ( 1.0 + b * pow( abs( x ), c ) ) + d * x + e;

	}

	// See equation (3) in http://www.aconty.com/pdf/s2017_pbs_imageworks_sheen.pdf
	float velvetLambda( float cosTheta, float alpha ) {

		return abs( cosTheta ) < 0.5 ? exp( velvetL( cosTheta, alpha ) ) : exp( 2.0 * velvetL( 0.5, alpha ) - velvetL( 1.0 - cosTheta, alpha ) );

	}

	// See Section 3, Shadowing Term, in http://www.aconty.com/pdf/s2017_pbs_imageworks_sheen.pdf
	float velvetG( float cosThetaO, float cosThetaI, float roughness ) {

		float alpha = max( roughness, 0.07 );
		alpha = alpha * alpha;

		return 1.0 / ( 1.0 + velvetLambda( cosThetaO, alpha ) + velvetLambda( cosThetaI, alpha ) );

	}

	float directionalAlbedoSheen( float cosTheta, float alpha ) {

		cosTheta = saturate( cosTheta );

		float c = 1.0 - cosTheta;
		float c3 = c * c * c;

		return 0.65584461 * c3 + 1.0 / ( 4.16526551 + exp( -7.97291361 * sqrt( alpha ) + 6.33516894 ) );

	}

	float sheenAlbedoScaling( vec3 wo, vec3 wi, SurfaceRecord surf ) {

		float alpha = max( surf.sheenRoughness, 0.07 );
		alpha = alpha * alpha;

		float maxSheenColor = max( max( surf.sheenColor.r, surf.sheenColor.g ), surf.sheenColor.b );

		float eWo = directionalAlbedoSheen( saturateCos( wo.z ), alpha );
		float eWi = directionalAlbedoSheen( saturateCos( wi.z ), alpha );

		return min( 1.0 - maxSheenColor * eWo, 1.0 - maxSheenColor * eWi );

	}

	// See Section 5, Layering, in http://www.aconty.com/pdf/s2017_pbs_imageworks_sheen.pdf
	float sheenAlbedoScaling( vec3 wo, SurfaceRecord surf ) {

		float alpha = max( surf.sheenRoughness, 0.07 );
		alpha = alpha * alpha;

		float maxSheenColor = max( max( surf.sheenColor.r, surf.sheenColor.g ), surf.sheenColor.b );

		float eWo = directionalAlbedoSheen( saturateCos( wo.z ), alpha );

		return 1.0 - maxSheenColor * eWo;

	}

`,D2=`

#ifndef FOG_CHECK_ITERATIONS
#define FOG_CHECK_ITERATIONS 30
#endif

// returns whether the given material is a fog material or not
bool isMaterialFogVolume( sampler2D materials, uint materialIndex ) {

	uint i = materialIndex * uint( MATERIAL_PIXELS );
	vec4 s14 = texelFetch1D( materials, i + 14u );
	return bool( int( s14.b ) & 4 );

}

// returns true if we're within the first fog volume we hit
bool bvhIntersectFogVolumeHit(
	vec3 rayOrigin, vec3 rayDirection,
	usampler2D materialIndexAttribute, sampler2D materials,
	inout Material material
) {

	material.fogVolume = false;

	for ( int i = 0; i < FOG_CHECK_ITERATIONS; i ++ ) {

		// find nearest hit
		uvec4 faceIndices = uvec4( 0u );
		vec3 faceNormal = vec3( 0.0, 0.0, 1.0 );
		vec3 barycoord = vec3( 0.0 );
		float side = 1.0;
		float dist = 0.0;
		bool hit = bvhIntersectFirstHit( bvh, rayOrigin, rayDirection, faceIndices, faceNormal, barycoord, side, dist );
		if ( hit ) {

			// if it's a fog volume return whether we hit the front or back face
			uint materialIndex = uTexelFetch1D( materialIndexAttribute, faceIndices.x ).r;
			if ( isMaterialFogVolume( materials, materialIndex ) ) {

				material = readMaterialInfo( materials, materialIndex );
				return side == - 1.0;

			} else {

				// move the ray forward
				rayOrigin = stepRayOrigin( rayOrigin, rayDirection, - faceNormal, dist );

			}

		} else {

			return false;

		}

	}

	return false;

}

`,O2=`

	// step through multiple surface hits and accumulate color attenuation based on transmissive surfaces
	// returns true if a solid surface was hit
	bool attenuateHit(
		RenderState state,
		Ray ray, float rayDist,
		out vec3 color
	) {

		// store the original bounce index so we can reset it after
		uint originalBounceIndex = sobolBounceIndex;

		int traversals = state.traversals;
		int transmissiveTraversals = state.transmissiveTraversals;
		bool isShadowRay = state.isShadowRay;
		Material fogMaterial = state.fogMaterial;

		vec3 startPoint = ray.origin;

		// hit results
		SurfaceHit surfaceHit;

		color = vec3( 1.0 );

		bool result = true;
		for ( int i = 0; i < traversals; i ++ ) {

			sobolBounceIndex ++;

			int hitType = traceScene( ray, fogMaterial, surfaceHit );

			if ( hitType == FOG_HIT ) {

				result = true;
				break;

			} else if ( hitType == SURFACE_HIT ) {

				float totalDist = distance( startPoint, ray.origin + ray.direction * surfaceHit.dist );
				if ( totalDist > rayDist ) {

					result = false;
					break;

				}

				// TODO: attenuate the contribution based on the PDF of the resulting ray including refraction values
				// Should be able to work using the material BSDF functions which will take into account specularity, etc.
				// TODO: should we account for emissive surfaces here?

				uint materialIndex = uTexelFetch1D( materialIndexAttribute, surfaceHit.faceIndices.x ).r;
				Material material = readMaterialInfo( materials, materialIndex );

				// adjust the ray to the new surface
				bool isEntering = surfaceHit.side == 1.0;
				ray.origin = stepRayOrigin( ray.origin, ray.direction, - surfaceHit.faceNormal, surfaceHit.dist );

				#if FEATURE_FOG

				if ( material.fogVolume ) {

					fogMaterial = material;
					fogMaterial.fogVolume = surfaceHit.side == 1.0;
					i -= sign( transmissiveTraversals );
					transmissiveTraversals --;
					continue;

				}

				#endif

				if ( ! material.castShadow && isShadowRay ) {

					continue;

				}

				vec2 uv = textureSampleBarycoord( attributesArray, ATTR_UV, surfaceHit.barycoord, surfaceHit.faceIndices.xyz ).xy;
				vec4 vertexColor = textureSampleBarycoord( attributesArray, ATTR_COLOR, surfaceHit.barycoord, surfaceHit.faceIndices.xyz );

				// albedo
				vec4 albedo = vec4( material.color, material.opacity );
				if ( material.map != - 1 ) {

					vec3 uvPrime = material.mapTransform * vec3( uv, 1 );
					albedo *= texture2D( textures, vec3( uvPrime.xy, material.map ) );

				}

				if ( material.vertexColors ) {

					albedo *= vertexColor;

				}

				// alphaMap
				if ( material.alphaMap != - 1 ) {

					vec3 uvPrime = material.alphaMapTransform * vec3( uv, 1 );
					albedo.a *= texture2D( textures, vec3( uvPrime.xy, material.alphaMap ) ).x;

				}

				// transmission
				float transmission = material.transmission;
				if ( material.transmissionMap != - 1 ) {

					vec3 uvPrime = material.transmissionMapTransform * vec3( uv, 1 );
					transmission *= texture2D( textures, vec3( uvPrime.xy, material.transmissionMap ) ).r;

				}

				// metalness
				float metalness = material.metalness;
				if ( material.metalnessMap != - 1 ) {

					vec3 uvPrime = material.metalnessMapTransform * vec3( uv, 1 );
					metalness *= texture2D( textures, vec3( uvPrime.xy, material.metalnessMap ) ).b;

				}

				float alphaTest = material.alphaTest;
				bool useAlphaTest = alphaTest != 0.0;
				float transmissionFactor = ( 1.0 - metalness ) * transmission;
				if (
					transmissionFactor < rand( 9 ) && ! (
						// material sidedness
						material.side != 0.0 && surfaceHit.side == material.side

						// alpha test
						|| useAlphaTest && albedo.a < alphaTest

						// opacity
						|| material.transparent && ! useAlphaTest && albedo.a < rand( 10 )
					)
				) {

					result = true;
					break;

				}

				if ( surfaceHit.side == 1.0 && isEntering ) {

					// only attenuate by surface color on the way in
					color *= mix( vec3( 1.0 ), albedo.rgb, transmissionFactor );

				} else if ( surfaceHit.side == - 1.0 ) {

					// attenuate by medium once we hit the opposite side of the model
					color *= transmissionAttenuation( surfaceHit.dist, material.attenuationColor, material.attenuationDistance );

				}

				bool isTransmissiveRay = dot( ray.direction, surfaceHit.faceNormal * surfaceHit.side ) < 0.0;
				if ( ( isTransmissiveRay || isEntering ) && transmissiveTraversals > 0 ) {

					i -= sign( transmissiveTraversals );
					transmissiveTraversals --;

				}

			} else {

				result = false;
				break;

			}

		}

		// reset the bounce index
		sobolBounceIndex = originalBounceIndex;
		return result;

	}

`,N2=`

	vec3 ndcToRayOrigin( vec2 coord ) {

		vec4 rayOrigin4 = cameraWorldMatrix * invProjectionMatrix * vec4( coord, - 1.0, 1.0 );
		return rayOrigin4.xyz / rayOrigin4.w;
	}

	Ray getCameraRay() {

		vec2 ssd = vec2( 1.0 ) / resolution;

		// Jitter the camera ray by finding a uv coordinate at a random sample
		// around this pixel's UV coordinate for AA
		vec2 ruv = rand2( 0 );
		vec2 jitteredUv = vUv + vec2( tentFilter( ruv.x ) * ssd.x, tentFilter( ruv.y ) * ssd.y );
		Ray ray;

		#if CAMERA_TYPE == 2

			// Equirectangular projection
			vec4 rayDirection4 = vec4( equirectUvToDirection( jitteredUv ), 0.0 );
			vec4 rayOrigin4 = vec4( 0.0, 0.0, 0.0, 1.0 );

			rayDirection4 = cameraWorldMatrix * rayDirection4;
			rayOrigin4 = cameraWorldMatrix * rayOrigin4;

			ray.direction = normalize( rayDirection4.xyz );
			ray.origin = rayOrigin4.xyz / rayOrigin4.w;

		#else

			// get [- 1, 1] normalized device coordinates
			vec2 ndc = 2.0 * jitteredUv - vec2( 1.0 );
			ray.origin = ndcToRayOrigin( ndc );

			#if CAMERA_TYPE == 1

				// Orthographic projection
				ray.direction = ( cameraWorldMatrix * vec4( 0.0, 0.0, - 1.0, 0.0 ) ).xyz;
				ray.direction = normalize( ray.direction );

			#else

				// Perspective projection
				ray.direction = normalize( mat3( cameraWorldMatrix ) * ( invProjectionMatrix * vec4( ndc, 0.0, 1.0 ) ).xyz );

			#endif

		#endif

		#if FEATURE_DOF
		{

			// depth of field
			vec3 focalPoint = ray.origin + normalize( ray.direction ) * physicalCamera.focusDistance;

			// get the aperture sample
			// if blades === 0 then we assume a circle
			vec3 shapeUVW= rand3( 1 );
			int blades = physicalCamera.apertureBlades;
			float anamorphicRatio = physicalCamera.anamorphicRatio;
			vec2 apertureSample = sampleAperture( blades, shapeUVW );
			apertureSample *= physicalCamera.bokehSize * 0.5 * 1e-3;

			// rotate the aperture shape
			apertureSample =
				rotateVector( apertureSample, physicalCamera.apertureRotation ) *
				saturate( vec2( anamorphicRatio, 1.0 / anamorphicRatio ) );

			// create the new ray
			ray.origin += ( cameraWorldMatrix * vec4( apertureSample, 0.0, 0.0 ) ).xyz;
			ray.direction = focalPoint - ray.origin;

		}
		#endif

		ray.direction = normalize( ray.direction );

		return ray;

	}

`,z2=`

	vec3 directLightContribution( vec3 worldWo, SurfaceRecord surf, RenderState state, vec3 rayOrigin ) {

		vec3 result = vec3( 0.0 );

		// uniformly pick a light or environment map
		if( lightsDenom != 0.0 && rand( 5 ) < float( lights.count ) / lightsDenom ) {

			// sample a light or environment
			LightRecord lightRec = randomLightSample( lights.tex, iesProfiles, lights.count, rayOrigin, rand3( 6 ) );

			bool isSampleBelowSurface = ! surf.volumeParticle && dot( surf.faceNormal, lightRec.direction ) < 0.0;
			if ( isSampleBelowSurface ) {

				lightRec.pdf = 0.0;

			}

			// check if a ray could even reach the light area
			Ray lightRay;
			lightRay.origin = rayOrigin;
			lightRay.direction = lightRec.direction;
			vec3 attenuatedColor;
			if (
				lightRec.pdf > 0.0 &&
				isDirectionValid( lightRec.direction, surf.normal, surf.faceNormal ) &&
				! attenuateHit( state, lightRay, lightRec.dist, attenuatedColor )
			) {

				// get the material pdf
				vec3 sampleColor;
				float lightMaterialPdf = bsdfResult( worldWo, lightRec.direction, surf, sampleColor );
				bool isValidSampleColor = all( greaterThanEqual( sampleColor, vec3( 0.0 ) ) );
				if ( lightMaterialPdf > 0.0 && isValidSampleColor ) {

					// weight the direct light contribution
					float lightPdf = lightRec.pdf / lightsDenom;
					float misWeight = lightRec.type == SPOT_LIGHT_TYPE || lightRec.type == DIR_LIGHT_TYPE || lightRec.type == POINT_LIGHT_TYPE ? 1.0 : misHeuristic( lightPdf, lightMaterialPdf );
					result = attenuatedColor * lightRec.emission * state.throughputColor * sampleColor * misWeight / lightPdf;

				}

			}

		} else if ( envMapInfo.totalSum != 0.0 && environmentIntensity != 0.0 ) {

			// find a sample in the environment map to include in the contribution
			vec3 envColor, envDirection;
			float envPdf = sampleEquirectProbability( rand2( 7 ), envColor, envDirection );
			envDirection = invEnvRotation3x3 * envDirection;

			// this env sampling is not set up for transmissive sampling and yields overly bright
			// results so we ignore the sample in this case.
			// TODO: this should be improved but how? The env samples could traverse a few layers?
			bool isSampleBelowSurface = ! surf.volumeParticle && dot( surf.faceNormal, envDirection ) < 0.0;
			if ( isSampleBelowSurface ) {

				envPdf = 0.0;

			}

			// check if a ray could even reach the surface
			Ray envRay;
			envRay.origin = rayOrigin;
			envRay.direction = envDirection;
			vec3 attenuatedColor;
			if (
				envPdf > 0.0 &&
				isDirectionValid( envDirection, surf.normal, surf.faceNormal ) &&
				! attenuateHit( state, envRay, INFINITY, attenuatedColor )
			) {

				// get the material pdf
				vec3 sampleColor;
				float envMaterialPdf = bsdfResult( worldWo, envDirection, surf, sampleColor );
				bool isValidSampleColor = all( greaterThanEqual( sampleColor, vec3( 0.0 ) ) );
				if ( envMaterialPdf > 0.0 && isValidSampleColor ) {

					// weight the direct light contribution
					envPdf /= lightsDenom;
					float misWeight = misHeuristic( envPdf, envMaterialPdf );
					result = attenuatedColor * environmentIntensity * envColor * state.throughputColor * sampleColor * misWeight / envPdf;

				}

			}

		}

		// Function changed to have a single return statement to potentially help with crashes on Mac OS.
		// See issue #470
		return result;

	}

`,L2=`

	#define SKIP_SURFACE 0
	#define HIT_SURFACE 1
	int getSurfaceRecord(
		Material material, SurfaceHit surfaceHit, sampler2DArray attributesArray,
		float accumulatedRoughness,
		inout SurfaceRecord surf
	) {

		if ( material.fogVolume ) {

			vec3 normal = vec3( 0, 0, 1 );

			SurfaceRecord fogSurface;
			fogSurface.volumeParticle = true;
			fogSurface.color = material.color;
			fogSurface.emission = material.emissiveIntensity * material.emissive;
			fogSurface.normal = normal;
			fogSurface.faceNormal = normal;
			fogSurface.clearcoatNormal = normal;

			surf = fogSurface;
			return HIT_SURFACE;

		}

		// uv coord for textures
		vec2 uv = textureSampleBarycoord( attributesArray, ATTR_UV, surfaceHit.barycoord, surfaceHit.faceIndices.xyz ).xy;
		vec4 vertexColor = textureSampleBarycoord( attributesArray, ATTR_COLOR, surfaceHit.barycoord, surfaceHit.faceIndices.xyz );

		// albedo
		vec4 albedo = vec4( material.color, material.opacity );
		if ( material.map != - 1 ) {

			vec3 uvPrime = material.mapTransform * vec3( uv, 1 );
			albedo *= texture2D( textures, vec3( uvPrime.xy, material.map ) );

		}

		if ( material.vertexColors ) {

			albedo *= vertexColor;

		}

		// alphaMap
		if ( material.alphaMap != - 1 ) {

			vec3 uvPrime = material.alphaMapTransform * vec3( uv, 1 );
			albedo.a *= texture2D( textures, vec3( uvPrime.xy, material.alphaMap ) ).x;

		}

		// possibly skip this sample if it's transparent, alpha test is enabled, or we hit the wrong material side
		// and it's single sided.
		// - alpha test is disabled when it === 0
		// - the material sidedness test is complicated because we want light to pass through the back side but still
		// be able to see the front side. This boolean checks if the side we hit is the front side on the first ray
		// and we're rendering the other then we skip it. Do the opposite on subsequent bounces to get incoming light.
		float alphaTest = material.alphaTest;
		bool useAlphaTest = alphaTest != 0.0;
		if (
			// material sidedness
			material.side != 0.0 && surfaceHit.side != material.side

			// alpha test
			|| useAlphaTest && albedo.a < alphaTest

			// opacity
			|| material.transparent && ! useAlphaTest && albedo.a < rand( 3 )
		) {

			return SKIP_SURFACE;

		}

		// fetch the interpolated smooth normal
		vec3 normal = normalize( textureSampleBarycoord(
			attributesArray,
			ATTR_NORMAL,
			surfaceHit.barycoord,
			surfaceHit.faceIndices.xyz
		).xyz );

		// roughness
		float roughness = material.roughness;
		if ( material.roughnessMap != - 1 ) {

			vec3 uvPrime = material.roughnessMapTransform * vec3( uv, 1 );
			roughness *= texture2D( textures, vec3( uvPrime.xy, material.roughnessMap ) ).g;

		}

		// metalness
		float metalness = material.metalness;
		if ( material.metalnessMap != - 1 ) {

			vec3 uvPrime = material.metalnessMapTransform * vec3( uv, 1 );
			metalness *= texture2D( textures, vec3( uvPrime.xy, material.metalnessMap ) ).b;

		}

		// emission
		vec3 emission = material.emissiveIntensity * material.emissive;
		if ( material.emissiveMap != - 1 ) {

			vec3 uvPrime = material.emissiveMapTransform * vec3( uv, 1 );
			emission *= texture2D( textures, vec3( uvPrime.xy, material.emissiveMap ) ).xyz;

		}

		// transmission
		float transmission = material.transmission;
		if ( material.transmissionMap != - 1 ) {

			vec3 uvPrime = material.transmissionMapTransform * vec3( uv, 1 );
			transmission *= texture2D( textures, vec3( uvPrime.xy, material.transmissionMap ) ).r;

		}

		// normal
		if ( material.flatShading ) {

			// if we're rendering a flat shaded object then use the face normals - the face normal
			// is provided based on the side the ray hits the mesh so flip it to align with the
			// interpolated vertex normals.
			normal = surfaceHit.faceNormal * surfaceHit.side;

		}

		vec3 baseNormal = normal;
		if ( material.normalMap != - 1 ) {

			vec4 tangentSample = textureSampleBarycoord(
				attributesArray,
				ATTR_TANGENT,
				surfaceHit.barycoord,
				surfaceHit.faceIndices.xyz
			);

			// some provided tangents can be malformed (0, 0, 0) causing the normal to be degenerate
			// resulting in NaNs and slow path tracing.
			if ( length( tangentSample.xyz ) > 0.0 ) {

				vec3 tangent = normalize( tangentSample.xyz );
				vec3 bitangent = normalize( cross( normal, tangent ) * tangentSample.w );
				mat3 vTBN = mat3( tangent, bitangent, normal );

				vec3 uvPrime = material.normalMapTransform * vec3( uv, 1 );
				vec3 texNormal = texture2D( textures, vec3( uvPrime.xy, material.normalMap ) ).xyz * 2.0 - 1.0;
				texNormal.xy *= material.normalScale;
				normal = vTBN * texNormal;

			}

		}

		normal *= surfaceHit.side;

		// clearcoat
		float clearcoat = material.clearcoat;
		if ( material.clearcoatMap != - 1 ) {

			vec3 uvPrime = material.clearcoatMapTransform * vec3( uv, 1 );
			clearcoat *= texture2D( textures, vec3( uvPrime.xy, material.clearcoatMap ) ).r;

		}

		// clearcoatRoughness
		float clearcoatRoughness = material.clearcoatRoughness;
		if ( material.clearcoatRoughnessMap != - 1 ) {

			vec3 uvPrime = material.clearcoatRoughnessMapTransform * vec3( uv, 1 );
			clearcoatRoughness *= texture2D( textures, vec3( uvPrime.xy, material.clearcoatRoughnessMap ) ).g;

		}

		// clearcoatNormal
		vec3 clearcoatNormal = baseNormal;
		if ( material.clearcoatNormalMap != - 1 ) {

			vec4 tangentSample = textureSampleBarycoord(
				attributesArray,
				ATTR_TANGENT,
				surfaceHit.barycoord,
				surfaceHit.faceIndices.xyz
			);

			// some provided tangents can be malformed (0, 0, 0) causing the normal to be degenerate
			// resulting in NaNs and slow path tracing.
			if ( length( tangentSample.xyz ) > 0.0 ) {

				vec3 tangent = normalize( tangentSample.xyz );
				vec3 bitangent = normalize( cross( clearcoatNormal, tangent ) * tangentSample.w );
				mat3 vTBN = mat3( tangent, bitangent, clearcoatNormal );

				vec3 uvPrime = material.clearcoatNormalMapTransform * vec3( uv, 1 );
				vec3 texNormal = texture2D( textures, vec3( uvPrime.xy, material.clearcoatNormalMap ) ).xyz * 2.0 - 1.0;
				texNormal.xy *= material.clearcoatNormalScale;
				clearcoatNormal = vTBN * texNormal;

			}

		}

		clearcoatNormal *= surfaceHit.side;

		// sheenColor
		vec3 sheenColor = material.sheenColor;
		if ( material.sheenColorMap != - 1 ) {

			vec3 uvPrime = material.sheenColorMapTransform * vec3( uv, 1 );
			sheenColor *= texture2D( textures, vec3( uvPrime.xy, material.sheenColorMap ) ).rgb;

		}

		// sheenRoughness
		float sheenRoughness = material.sheenRoughness;
		if ( material.sheenRoughnessMap != - 1 ) {

			vec3 uvPrime = material.sheenRoughnessMapTransform * vec3( uv, 1 );
			sheenRoughness *= texture2D( textures, vec3( uvPrime.xy, material.sheenRoughnessMap ) ).a;

		}

		// iridescence
		float iridescence = material.iridescence;
		if ( material.iridescenceMap != - 1 ) {

			vec3 uvPrime = material.iridescenceMapTransform * vec3( uv, 1 );
			iridescence *= texture2D( textures, vec3( uvPrime.xy, material.iridescenceMap ) ).r;

		}

		// iridescence thickness
		float iridescenceThickness = material.iridescenceThicknessMaximum;
		if ( material.iridescenceThicknessMap != - 1 ) {

			vec3 uvPrime = material.iridescenceThicknessMapTransform * vec3( uv, 1 );
			float iridescenceThicknessSampled = texture2D( textures, vec3( uvPrime.xy, material.iridescenceThicknessMap ) ).g;
			iridescenceThickness = mix( material.iridescenceThicknessMinimum, material.iridescenceThicknessMaximum, iridescenceThicknessSampled );

		}

		iridescence = iridescenceThickness == 0.0 ? 0.0 : iridescence;

		// specular color
		vec3 specularColor = material.specularColor;
		if ( material.specularColorMap != - 1 ) {

			vec3 uvPrime = material.specularColorMapTransform * vec3( uv, 1 );
			specularColor *= texture2D( textures, vec3( uvPrime.xy, material.specularColorMap ) ).rgb;

		}

		// specular intensity
		float specularIntensity = material.specularIntensity;
		if ( material.specularIntensityMap != - 1 ) {

			vec3 uvPrime = material.specularIntensityMapTransform * vec3( uv, 1 );
			specularIntensity *= texture2D( textures, vec3( uvPrime.xy, material.specularIntensityMap ) ).a;

		}

		surf.volumeParticle = false;

		surf.faceNormal = surfaceHit.faceNormal;
		surf.normal = normal;

		surf.metalness = metalness;
		surf.color = albedo.rgb;
		surf.emission = emission;

		surf.ior = material.ior;
		surf.transmission = transmission;
		surf.thinFilm = material.thinFilm;
		surf.attenuationColor = material.attenuationColor;
		surf.attenuationDistance = material.attenuationDistance;

		surf.clearcoatNormal = clearcoatNormal;
		surf.clearcoat = clearcoat;

		surf.sheen = material.sheen;
		surf.sheenColor = sheenColor;

		surf.iridescence = iridescence;
		surf.iridescenceIor = material.iridescenceIor;
		surf.iridescenceThickness = iridescenceThickness;

		surf.specularColor = specularColor;
		surf.specularIntensity = specularIntensity;

		// apply perceptual roughness factor from gltf. sheen perceptual roughness is
		// applied by its brdf function
		// https://registry.khronos.org/glTF/specs/2.0/glTF-2.0.html#microfacet-surfaces
		surf.roughness = roughness * roughness;
		surf.clearcoatRoughness = clearcoatRoughness * clearcoatRoughness;
		surf.sheenRoughness = sheenRoughness;

		// frontFace is used to determine transmissive properties and PDF. If no transmission is used
		// then we can just always assume this is a front face.
		surf.frontFace = surfaceHit.side == 1.0 || transmission == 0.0;
		surf.eta = material.thinFilm || surf.frontFace ? 1.0 / material.ior : material.ior;
		surf.f0 = iorRatioToF0( surf.eta );

		// Compute the filtered roughness value to use during specular reflection computations.
		// The accumulated roughness value is scaled by a user setting and a "magic value" of 5.0.
		// If we're exiting something transmissive then scale the factor down significantly so we can retain
		// sharp internal reflections
		surf.filteredRoughness = applyFilteredGlossy( surf.roughness, accumulatedRoughness );
		surf.filteredClearcoatRoughness = applyFilteredGlossy( surf.clearcoatRoughness, accumulatedRoughness );

		// get the normal frames
		surf.normalBasis = getBasisFromNormal( surf.normal );
		surf.normalInvBasis = inverse( surf.normalBasis );

		surf.clearcoatBasis = getBasisFromNormal( surf.clearcoatNormal );
		surf.clearcoatInvBasis = inverse( surf.clearcoatBasis );

		return HIT_SURFACE;

	}
`,B2=`

	struct Ray {

		vec3 origin;
		vec3 direction;

	};

	struct SurfaceHit {

		uvec4 faceIndices;
		vec3 barycoord;
		vec3 faceNormal;
		float side;
		float dist;

	};

	struct RenderState {

		bool firstRay;
		bool transmissiveRay;
		bool isShadowRay;
		float accumulatedRoughness;
		int transmissiveTraversals;
		int traversals;
		uint depth;
		vec3 throughputColor;
		Material fogMaterial;

	};

	RenderState initRenderState() {

		RenderState result;
		result.firstRay = true;
		result.transmissiveRay = true;
		result.isShadowRay = false;
		result.accumulatedRoughness = 0.0;
		result.transmissiveTraversals = 0;
		result.traversals = 0;
		result.throughputColor = vec3( 1.0 );
		result.depth = 0u;
		result.fogMaterial.fogVolume = false;
		return result;

	}

`,U2=`

	#define NO_HIT 0
	#define SURFACE_HIT 1
	#define LIGHT_HIT 2
	#define FOG_HIT 3

	// Passing the global variable 'lights' into this function caused shader program errors.
	// So global variables like 'lights' and 'bvh' were moved out of the function parameters.
	// For more information, refer to: https://github.com/gkjohnson/three-gpu-pathtracer/pull/457
	int traceScene(
		Ray ray, Material fogMaterial, inout SurfaceHit surfaceHit
	) {

		int result = NO_HIT;
		bool hit = bvhIntersectFirstHit( bvh, ray.origin, ray.direction, surfaceHit.faceIndices, surfaceHit.faceNormal, surfaceHit.barycoord, surfaceHit.side, surfaceHit.dist );

		#if FEATURE_FOG

		if ( fogMaterial.fogVolume ) {

			// offset the distance so we don't run into issues with particles on the same surface
			// as other objects
			float particleDist = intersectFogVolume( fogMaterial, rand( 1 ) );
			if ( particleDist + RAY_OFFSET < surfaceHit.dist ) {

				surfaceHit.side = 1.0;
				surfaceHit.faceNormal = normalize( - ray.direction );
				surfaceHit.dist = particleDist;
				return FOG_HIT;

			}

		}

		#endif

		if ( hit ) {

			result = SURFACE_HIT;

		}

		return result;

	}

`;class H2 extends qh{onBeforeRender(){this.setDefine("FEATURE_DOF",this.physicalCamera.bokehSize===0?0:1),this.setDefine("FEATURE_BACKGROUND_MAP",this.backgroundMap?1:0),this.setDefine("FEATURE_FOG",this.materials.features.isUsed("FOG")?1:0)}constructor(a){super({transparent:!0,depthWrite:!1,defines:{FEATURE_MIS:1,FEATURE_RUSSIAN_ROULETTE:1,FEATURE_DOF:1,FEATURE_BACKGROUND_MAP:0,FEATURE_FOG:1,RANDOM_TYPE:2,CAMERA_TYPE:0,DEBUG_MODE:0,ATTR_NORMAL:0,ATTR_TANGENT:1,ATTR_UV:2,ATTR_COLOR:3,MATERIAL_PIXELS:kh},uniforms:{resolution:{value:new Me},opacity:{value:1},bounces:{value:10},transmissiveBounces:{value:10},filterGlossyFactor:{value:0},physicalCamera:{value:new z_},cameraWorldMatrix:{value:new qe},invProjectionMatrix:{value:new qe},bvh:{value:new $S},attributesArray:{value:new k_},materialIndexAttribute:{value:new Yv},materials:{value:new W_},textures:{value:new ov().texture},lights:{value:new q_},iesProfiles:{value:new ov(360,180,{type:Bi,wrapS:sn,wrapT:sn}).texture},environmentIntensity:{value:1},environmentRotation:{value:new qe},envMapInfo:{value:new U_},backgroundBlur:{value:0},backgroundMap:{value:null},backgroundAlpha:{value:1},backgroundIntensity:{value:1},backgroundRotation:{value:new qe},seed:{value:0},sobolTexture:{value:null},stratifiedTexture:{value:new s2},stratifiedOffsetTexture:{value:new f2(64,1)}},vertexShader:`

				varying vec2 vUv;
				void main() {

					vec4 mvPosition = vec4( position, 1.0 );
					mvPosition = modelViewMatrix * mvPosition;
					gl_Position = projectionMatrix * mvPosition;

					vUv = uv;

				}

			`,fragmentShader:`
				#define RAY_OFFSET 1e-4
				#define INFINITY 1e20

				precision highp isampler2D;
				precision highp usampler2D;
				precision highp sampler2DArray;
				vec4 envMapTexelToLinear( vec4 a ) { return a; }
				#include <common>

				// bvh intersection
				${i_}
				${a_}
				${n_}

				// uniform structs
				${h2}
				${m2}
				${d2}
				${p2}
				${g2}

				// random
				#if RANDOM_TYPE == 2 	// Stratified List

					${w2}

				#elif RANDOM_TYPE == 1 	// Sobol

					${uv}
					${Wv}
					${C_}

					#define rand(v) sobol(v)
					#define rand2(v) sobol2(v)
					#define rand3(v) sobol3(v)
					#define rand4(v) sobol4(v)

				#else 					// PCG

				${uv}

					// Using the sobol functions seems to break the the compiler on MacOS
					// - specifically the "sobolReverseBits" function.
					uint sobolPixelIndex = 0u;
					uint sobolPathIndex = 0u;
					uint sobolBounceIndex = 0u;

					#define rand(v) pcgRand()
					#define rand2(v) pcgRand2()
					#define rand3(v) pcgRand3()
					#define rand4(v) pcgRand4()

				#endif

				// common
				${_2}
				${T2}
				${Jv}
				${x2}
				${S2}

				// environment
				uniform EquirectHdrInfo envMapInfo;
				uniform mat4 environmentRotation;
				uniform float environmentIntensity;

				// lighting
				uniform sampler2DArray iesProfiles;
				uniform LightsInfo lights;

				// background
				uniform float backgroundBlur;
				uniform float backgroundAlpha;
				#if FEATURE_BACKGROUND_MAP

				uniform sampler2D backgroundMap;
				uniform mat4 backgroundRotation;
				uniform float backgroundIntensity;

				#endif

				// camera
				uniform mat4 cameraWorldMatrix;
				uniform mat4 invProjectionMatrix;
				#if FEATURE_DOF

				uniform PhysicalCamera physicalCamera;

				#endif

				// geometry
				uniform sampler2DArray attributesArray;
				uniform usampler2D materialIndexAttribute;
				uniform sampler2D materials;
				uniform sampler2DArray textures;
				uniform BVH bvh;

				// path tracer
				uniform int bounces;
				uniform int transmissiveBounces;
				uniform float filterGlossyFactor;
				uniform int seed;

				// image
				uniform vec2 resolution;
				uniform float opacity;

				varying vec2 vUv;

				// globals
				mat3 envRotation3x3;
				mat3 invEnvRotation3x3;
				float lightsDenom;

				// sampling
				${b2}
				${v2}
				${y2}

				${D2}
				${M2}
				${C2}
				${R2}
				${E2}
				${A2}

				float applyFilteredGlossy( float roughness, float accumulatedRoughness ) {

					return clamp(
						max(
							roughness,
							accumulatedRoughness * filterGlossyFactor * 5.0 ),
						0.0,
						1.0
					);

				}

				vec3 sampleBackground( vec3 direction, vec2 uv ) {

					vec3 sampleDir = sampleHemisphere( direction, uv ) * 0.5 * backgroundBlur;

					#if FEATURE_BACKGROUND_MAP

					sampleDir = normalize( mat3( backgroundRotation ) * direction + sampleDir );
					return backgroundIntensity * sampleEquirectColor( backgroundMap, sampleDir );

					#else

					sampleDir = normalize( envRotation3x3 * direction + sampleDir );
					return environmentIntensity * sampleEquirectColor( envMapInfo.map, sampleDir );

					#endif

				}

				${B2}
				${N2}
				${U2}
				${O2}
				${z2}
				${L2}

				void main() {

					// init
					rng_initialize( gl_FragCoord.xy, seed );
					sobolPixelIndex = ( uint( gl_FragCoord.x ) << 16 ) | uint( gl_FragCoord.y );
					sobolPathIndex = uint( seed );

					// get camera ray
					Ray ray = getCameraRay();

					// inverse environment rotation
					envRotation3x3 = mat3( environmentRotation );
					invEnvRotation3x3 = inverse( envRotation3x3 );
					lightsDenom =
						( environmentIntensity == 0.0 || envMapInfo.totalSum == 0.0 ) && lights.count != 0u ?
							float( lights.count ) :
							float( lights.count + 1u );

					// final color
					gl_FragColor = vec4( 0, 0, 0, 1 );

					// surface results
					SurfaceHit surfaceHit;
					ScatterRecord scatterRec;

					// path tracing state
					RenderState state = initRenderState();
					state.transmissiveTraversals = transmissiveBounces;
					#if FEATURE_FOG

					state.fogMaterial.fogVolume = bvhIntersectFogVolumeHit(
						ray.origin, - ray.direction,
						materialIndexAttribute, materials,
						state.fogMaterial
					);

					#endif

					for ( int i = 0; i < bounces; i ++ ) {

						sobolBounceIndex ++;

						state.depth ++;
						state.traversals = bounces - i;
						state.firstRay = i == 0 && state.transmissiveTraversals == transmissiveBounces;

						int hitType = traceScene( ray, state.fogMaterial, surfaceHit );

						// check if we intersect any lights and accumulate the light contribution
						// TODO: we can add support for light surface rendering in the else condition if we
						// add the ability to toggle visibility of the the light
						if ( ! state.firstRay && ! state.transmissiveRay ) {

							LightRecord lightRec;
							float lightDist = hitType == NO_HIT ? INFINITY : surfaceHit.dist;
							for ( uint i = 0u; i < lights.count; i ++ ) {

								if (
									intersectLightAtIndex( lights.tex, ray.origin, ray.direction, i, lightRec ) &&
									lightRec.dist < lightDist
								) {

									#if FEATURE_MIS

									// weight the contribution
									// NOTE: Only area lights are supported for forward sampling and can be hit
									float misWeight = misHeuristic( scatterRec.pdf, lightRec.pdf / lightsDenom );
									gl_FragColor.rgb += lightRec.emission * state.throughputColor * misWeight;

									#else

									gl_FragColor.rgb += lightRec.emission * state.throughputColor;

									#endif

								}

							}

						}

						if ( hitType == NO_HIT ) {

							if ( state.firstRay || state.transmissiveRay ) {

								gl_FragColor.rgb += sampleBackground( ray.direction, rand2( 2 ) ) * state.throughputColor;
								gl_FragColor.a = backgroundAlpha;

							} else {

								#if FEATURE_MIS

								// get the PDF of the hit envmap point
								vec3 envColor;
								float envPdf = sampleEquirect( envRotation3x3 * ray.direction, envColor );
								envPdf /= lightsDenom;

								// and weight the contribution
								float misWeight = misHeuristic( scatterRec.pdf, envPdf );
								gl_FragColor.rgb += environmentIntensity * envColor * state.throughputColor * misWeight;

								#else

								gl_FragColor.rgb +=
									environmentIntensity *
									sampleEquirectColor( envMapInfo.map, envRotation3x3 * ray.direction ) *
									state.throughputColor;

								#endif

							}
							break;

						}

						uint materialIndex = uTexelFetch1D( materialIndexAttribute, surfaceHit.faceIndices.x ).r;
						Material material = readMaterialInfo( materials, materialIndex );

						#if FEATURE_FOG

						if ( hitType == FOG_HIT ) {

							material = state.fogMaterial;
							state.accumulatedRoughness += 0.2;

						} else if ( material.fogVolume ) {

							state.fogMaterial = material;
							state.fogMaterial.fogVolume = surfaceHit.side == 1.0;

							ray.origin = stepRayOrigin( ray.origin, ray.direction, - surfaceHit.faceNormal, surfaceHit.dist );

							i -= sign( state.transmissiveTraversals );
							state.transmissiveTraversals -= sign( state.transmissiveTraversals );
							continue;

						}

						#endif

						// early out if this is a matte material
						if ( material.matte && state.firstRay ) {

							gl_FragColor = vec4( 0.0 );
							break;

						}

						// if we've determined that this is a shadow ray and we've hit an item with no shadow casting
						// then skip it
						if ( ! material.castShadow && state.isShadowRay ) {

							ray.origin = stepRayOrigin( ray.origin, ray.direction, - surfaceHit.faceNormal, surfaceHit.dist );
							continue;

						}

						SurfaceRecord surf;
						if (
							getSurfaceRecord(
								material, surfaceHit, attributesArray, state.accumulatedRoughness,
								surf
							) == SKIP_SURFACE
						) {

							// only allow a limited number of transparency discards otherwise we could
							// crash the context with too long a loop.
							i -= sign( state.transmissiveTraversals );
							state.transmissiveTraversals -= sign( state.transmissiveTraversals );

							ray.origin = stepRayOrigin( ray.origin, ray.direction, - surfaceHit.faceNormal, surfaceHit.dist );
							continue;

						}

						scatterRec = bsdfSample( - ray.direction, surf );
						state.isShadowRay = scatterRec.specularPdf < rand( 4 );

						bool isBelowSurface = ! surf.volumeParticle && dot( scatterRec.direction, surf.faceNormal ) < 0.0;
						vec3 hitPoint = stepRayOrigin( ray.origin, ray.direction, isBelowSurface ? - surf.faceNormal : surf.faceNormal, surfaceHit.dist );

						// next event estimation
						#if FEATURE_MIS

						gl_FragColor.rgb += directLightContribution( - ray.direction, surf, state, hitPoint );

						#endif

						// accumulate a roughness value to offset diffuse, specular, diffuse rays that have high contribution
						// to a single pixel resulting in fireflies
						// TODO: handle transmissive surfaces
						if ( ! surf.volumeParticle && ! isBelowSurface ) {

							// determine if this is a rough normal or not by checking how far off straight up it is
							vec3 halfVector = normalize( - ray.direction + scatterRec.direction );
							state.accumulatedRoughness += max(
								sin( acosApprox( dot( halfVector, surf.normal ) ) ),
								sin( acosApprox( dot( halfVector, surf.clearcoatNormal ) ) )
							);

							state.transmissiveRay = false;

						}

						// accumulate emissive color
						gl_FragColor.rgb += ( surf.emission * state.throughputColor );

						// skip the sample if our PDF or ray is impossible
						if ( scatterRec.pdf <= 0.0 || ! isDirectionValid( scatterRec.direction, surf.normal, surf.faceNormal ) ) {

							break;

						}

						// if we're bouncing around the inside a transmissive material then decrement
						// perform this separate from a bounce
						bool isTransmissiveRay = ! surf.volumeParticle && dot( scatterRec.direction, surf.faceNormal * surfaceHit.side ) < 0.0;
						if ( ( isTransmissiveRay || isBelowSurface ) && state.transmissiveTraversals > 0 ) {

							state.transmissiveTraversals --;
							i --;

						}

						//

						// handle throughput color transformation
						// attenuate the throughput color by the medium color
						if ( ! surf.frontFace ) {

							state.throughputColor *= transmissionAttenuation( surfaceHit.dist, surf.attenuationColor, surf.attenuationDistance );

						}

						#if FEATURE_RUSSIAN_ROULETTE

						// russian roulette path termination
						// https://www.arnoldrenderer.com/research/physically_based_shader_design_in_arnold.pdf
						uint minBounces = 3u;
						float depthProb = float( state.depth < minBounces );

						float rrProb = luminance( state.throughputColor * scatterRec.color / scatterRec.pdf );
						rrProb /= luminance( state.throughputColor );
						rrProb = sqrt( rrProb );
						rrProb = max( rrProb, depthProb );
						rrProb = min( rrProb, 1.0 );
						if ( rand( 8 ) > rrProb ) {

							break;

						}

						// perform sample clamping here to avoid bright pixels
						state.throughputColor *= min( 1.0 / rrProb, 20.0 );

						#endif

						// adjust the throughput and discard and exit if we find discard the sample if there are any NaNs
						state.throughputColor *= scatterRec.color / scatterRec.pdf;
						if ( any( isnan( state.throughputColor ) ) || any( isinf( state.throughputColor ) ) ) {

							break;

						}

						//

						// prepare for next ray
						ray.direction = scatterRec.direction;
						ray.origin = hitPoint;

					}

					gl_FragColor.a *= opacity;

					#if DEBUG_MODE == 1

					// output the number of rays checked in the path and number of
					// transmissive rays encountered.
					gl_FragColor.rgb = vec3(
						float( state.depth ),
						transmissiveBounces - state.transmissiveTraversals,
						0.0
					);
					gl_FragColor.a = 1.0;

					#endif

				}

			`}),this.setValues(a)}}function*I2(){const{_renderer:h,_fsQuad:a,_blendQuad:s,_primaryTarget:l,_blendTargets:o,_sobolTarget:f,_subframe:c,alpha:d,material:m}=this,p=new Bs,y=new Bs,v=s.material;let[g,T]=o;for(;;){d?(v.opacity=this._opacityFactor/(this.samples+1),m.blending=Ql,m.opacity=1):(m.opacity=this._opacityFactor/(this.samples+1),m.blending=Ov);const[_,w,x,A]=c,M=l.width,E=l.height;m.resolution.set(M*x,E*A),m.sobolTexture=f.texture,m.stratifiedTexture.init(20,m.bounces+m.transmissiveBounces+5),m.stratifiedTexture.next(),m.seed++;const C=this.tiles.x||1,D=this.tiles.y||1,U=C*D,N=Math.ceil(M*x),Y=Math.ceil(E*A),P=Math.floor(_*M),j=Math.floor(w*E),X=Math.ceil(N/C),G=Math.ceil(Y/D);for(let Z=0;Z<D;Z++)for(let W=0;W<C;W++){const ne=h.getRenderTarget(),K=h.autoClear,ae=h.getScissorTest();h.getScissor(p),h.getViewport(y);let ie=W,oe=Z;if(!this.stableTiles){const Ce=this._currentTile%(C*D);ie=Ce%C,oe=~~(Ce/C),this._currentTile=Ce+1}const de=D-oe-1;l.scissor.set(P+ie*X,j+de*G,Math.min(X,N-ie*X),Math.min(G,Y-de*G)),l.viewport.set(P,j,N,Y),h.setRenderTarget(l),h.setScissorTest(!0),h.autoClear=!1,a.render(h),h.setViewport(y),h.setScissor(p),h.setScissorTest(ae),h.setRenderTarget(ne),h.autoClear=K,d&&(v.target1=g.texture,v.target2=l.texture,h.setRenderTarget(T),s.render(h),h.setRenderTarget(ne)),this.samples+=1/U,W===C-1&&Z===D-1&&(this.samples=Math.round(this.samples)),yield}[g,T]=[T,g]}}const fv=new Kt;class hv{get material(){return this._fsQuad.material}set material(a){this._fsQuad.material.removeEventListener("recompilation",this._compileFunction),a.addEventListener("recompilation",this._compileFunction),this._fsQuad.material=a}get target(){return this._alpha?this._blendTargets[1]:this._primaryTarget}set alpha(a){this._alpha!==a&&(a||(this._blendTargets[0].dispose(),this._blendTargets[1].dispose()),this._alpha=a,this.reset())}get alpha(){return this._alpha}get isCompiling(){return!!this._compilePromise}constructor(a){this.camera=null,this.tiles=new Me(3,3),this.stableNoise=!1,this.stableTiles=!0,this.samples=0,this._subframe=new Bs(0,0,1,1),this._opacityFactor=1,this._renderer=a,this._alpha=!1,this._fsQuad=new Us(new H2),this._blendQuad=new Us(new M_),this._task=null,this._currentTile=0,this._compilePromise=null,this._sobolTarget=new O_().generate(a),this._primaryTarget=new Yl(1,1,{format:nt,type:mt,magFilter:He,minFilter:He}),this._blendTargets=[new Yl(1,1,{format:nt,type:mt,magFilter:He,minFilter:He}),new Yl(1,1,{format:nt,type:mt,magFilter:He,minFilter:He})],this._compileFunction=()=>{const s=this.compileMaterial(this._fsQuad._mesh);s.then(()=>{this._compilePromise===s&&(this._compilePromise=null)}),this._compilePromise=s},this.material.addEventListener("recompilation",this._compileFunction)}compileMaterial(){return this._renderer.compileAsync(this._fsQuad._mesh)}setCamera(a){const{material:s}=this;s.cameraWorldMatrix.copy(a.matrixWorld),s.invProjectionMatrix.copy(a.projectionMatrixInverse),s.physicalCamera.updateFrom(a);let l=0;a.projectionMatrix.elements[15]>0&&(l=1),a.isEquirectCamera&&(l=2),s.setDefine("CAMERA_TYPE",l),this.camera=a}setSize(a,s){a=Math.ceil(a),s=Math.ceil(s),!(this._primaryTarget.width===a&&this._primaryTarget.height===s)&&(this._primaryTarget.setSize(a,s),this._blendTargets[0].setSize(a,s),this._blendTargets[1].setSize(a,s),this.reset())}getSize(a){a.x=this._primaryTarget.width,a.y=this._primaryTarget.height}dispose(){this._primaryTarget.dispose(),this._blendTargets[0].dispose(),this._blendTargets[1].dispose(),this._sobolTarget.dispose(),this._fsQuad.dispose(),this._blendQuad.dispose(),this._task=null}reset(){const{_renderer:a,_primaryTarget:s,_blendTargets:l}=this,o=a.getRenderTarget(),f=a.getClearAlpha();a.getClearColor(fv),a.setRenderTarget(s),a.setClearColor(0,0),a.clearColor(),a.setRenderTarget(l[0]),a.setClearColor(0,0),a.clearColor(),a.setRenderTarget(l[1]),a.setClearColor(0,0),a.clearColor(),a.setClearColor(fv,f),a.setRenderTarget(o),this.samples=0,this._task=null,this.material.stratifiedTexture.stableNoise=this.stableNoise,this.stableNoise&&(this.material.seed=0,this.material.stratifiedTexture.reset())}update(){this.material.onBeforeRender(),!this.isCompiling&&(this._task||(this._task=I2.call(this)),this._task.next())}}const Sa=new Me,dv=new Me,Xo=new vh,Ko=new Kt;class F2 extends oi{constructor(a=512,s=512){super(new Float32Array(a*s*4),a,s,nt,mt,Nv,bi,sn,Ot,Ot),this.generationCallback=null}update(){this.dispose(),this.needsUpdate=!0;const{data:a,width:s,height:l}=this.image;for(let o=0;o<s;o++)for(let f=0;f<l;f++){dv.set(s,l),Sa.set(o/s,f/l),Sa.x-=.5,Sa.y=1-Sa.y,Xo.theta=Sa.x*2*Math.PI,Xo.phi=Sa.y*Math.PI,Xo.radius=1,this.generationCallback(Xo,Sa,dv,Ko);const d=4*(f*s+o);a[d+0]=Ko.r,a[d+1]=Ko.g,a[d+2]=Ko.b,a[d+3]=1}}copy(a){return super.copy(a),this.generationCallback=a.generationCallback,this}}const mv=new Q;class $v extends F2{constructor(a=512){super(a,a),this.topColor=new Kt().set(16777215),this.bottomColor=new Kt().set(0),this.exponent=2,this.generationCallback=(s,l,o,f)=>{mv.setFromSpherical(s);const c=mv.y*.5+.5;f.lerpColors(this.bottomColor,this.topColor,c**this.exponent)}}copy(a){return super.copy(a),this.topColor.copy(a.topColor),this.bottomColor.copy(a.bottomColor),this}}class G2 extends ac{get map(){return this.uniforms.map.value}set map(a){this.uniforms.map.value=a}get opacity(){return this.uniforms.opacity.value}set opacity(a){this.uniforms&&(this.uniforms.opacity.value=a)}constructor(a){super({uniforms:{map:{value:null},opacity:{value:1}},vertexShader:`
				varying vec2 vUv;
				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}
			`,fragmentShader:`
				uniform sampler2D map;
				uniform float opacity;
				varying vec2 vUv;

				vec4 clampedTexelFatch( sampler2D map, ivec2 px, int lod ) {

					vec4 res = texelFetch( map, ivec2( px.x, px.y ), 0 );

					#if defined( TONE_MAPPING )

					res.xyz = toneMapping( res.xyz );

					#endif

			  		return linearToOutputTexel( res );

				}

				void main() {

					vec2 size = vec2( textureSize( map, 0 ) );
					vec2 pxUv = vUv * size;
					vec2 pxCurr = floor( pxUv );
					vec2 pxFrac = fract( pxUv ) - 0.5;
					vec2 pxOffset;
					pxOffset.x = pxFrac.x > 0.0 ? 1.0 : - 1.0;
					pxOffset.y = pxFrac.y > 0.0 ? 1.0 : - 1.0;

					vec2 pxNext = clamp( pxOffset + pxCurr, vec2( 0.0 ), size - 1.0 );
					vec2 alpha = abs( pxFrac );

					vec4 p1 = mix(
						clampedTexelFatch( map, ivec2( pxCurr.x, pxCurr.y ), 0 ),
						clampedTexelFatch( map, ivec2( pxNext.x, pxCurr.y ), 0 ),
						alpha.x
					);

					vec4 p2 = mix(
						clampedTexelFatch( map, ivec2( pxCurr.x, pxNext.y ), 0 ),
						clampedTexelFatch( map, ivec2( pxNext.x, pxNext.y ), 0 ),
						alpha.x
					);

					gl_FragColor = mix( p1, p2, alpha.y );
					gl_FragColor.a *= opacity;
					#include <premultiplied_alpha_fragment>

				}
			`}),this.setValues(a)}}class V2 extends ac{constructor(){super({uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:`
				varying vec2 vUv;
				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`
				#define ENVMAP_TYPE_CUBE_UV

				uniform samplerCube envMap;
				uniform float flipEnvMap;
				varying vec2 vUv;

				#include <common>
				#include <cube_uv_reflection_fragment>

				${Jv}

				void main() {

					vec3 rayDirection = equirectUvToDirection( vUv );
					rayDirection.x *= flipEnvMap;
					gl_FragColor = textureCube( envMap, rayDirection );

				}`}),this.depthWrite=!1,this.depthTest=!1}}class pv{constructor(a){this._renderer=a,this._quad=new Us(new V2)}generate(a,s=null,l=null){if(!a.isCubeTexture)throw new Error("CubeToEquirectMaterial: Source can only be cube textures.");const o=a.images[0],f=this._renderer,c=this._quad;s===null&&(s=4*o.height),l===null&&(l=2*o.height);const d=new Yl(s,l,{type:mt,colorSpace:o.colorSpace}),m=o.height,p=Math.log2(m)-2,y=1/m,v=1/(3*Math.max(Math.pow(2,p),112));c.material.defines.CUBEUV_MAX_MIP=`${p}.0`,c.material.defines.CUBEUV_TEXEL_WIDTH=v,c.material.defines.CUBEUV_TEXEL_HEIGHT=y,c.material.uniforms.envMap.value=a,c.material.uniforms.flipEnvMap.value=a.isRenderTargetTexture?1:-1,c.material.needsUpdate=!0;const g=f.getRenderTarget(),T=f.autoClear;f.autoClear=!0,f.setRenderTarget(d),c.render(f),f.setRenderTarget(g),f.autoClear=T;const _=new Uint16Array(s*l*4),w=new Float32Array(s*l*4);f.readRenderTargetPixels(d,0,0,s,l,w),d.dispose();for(let A=0,M=w.length;A<M;A++)_[A]=an.toHalfFloat(w[A]);const x=new oi(_,s,l,nt,Bi);return x.minFilter=HT,x.magFilter=Ot,x.wrapS=bi,x.wrapT=bi,x.mapping=Nv,x.needsUpdate=!0,x}dispose(){this._quad.dispose()}}function P2(h){return h.extensions.get("EXT_float_blend")}const Es=new Me;class q2{get multipleImportanceSampling(){return!!this._pathTracer.material.defines.FEATURE_MIS}set multipleImportanceSampling(a){this._pathTracer.material.setDefine("FEATURE_MIS",a?1:0)}get transmissiveBounces(){return this._pathTracer.material.transmissiveBounces}set transmissiveBounces(a){this._pathTracer.material.transmissiveBounces=a}get bounces(){return this._pathTracer.material.bounces}set bounces(a){this._pathTracer.material.bounces=a}get filterGlossyFactor(){return this._pathTracer.material.filterGlossyFactor}set filterGlossyFactor(a){this._pathTracer.material.filterGlossyFactor=a}get samples(){return this._pathTracer.samples}get target(){return this._pathTracer.target}get tiles(){return this._pathTracer.tiles}get stableNoise(){return this._pathTracer.stableNoise}set stableNoise(a){this._pathTracer.stableNoise=a}get isCompiling(){return!!this._pathTracer.isCompiling}constructor(a){this._renderer=a,this._generator=new __,this._pathTracer=new hv(a),this._queueReset=!1,this._clock=new IT,this._compilePromise=null,this._lowResPathTracer=new hv(a),this._lowResPathTracer.tiles.set(1,1),this._quad=new Us(new G2({map:null,transparent:!0,blending:Ql,premultipliedAlpha:a.getContextAttributes().premultipliedAlpha})),this._materials=null,this._previousEnvironment=null,this._previousBackground=null,this._internalBackground=null,this.renderDelay=100,this.minSamples=5,this.fadeDuration=500,this.enablePathTracing=!0,this.pausePathTracing=!1,this.dynamicLowRes=!1,this.lowResScale=.25,this.renderScale=1,this.synchronizeRenderSize=!0,this.rasterizeScene=!0,this.renderToCanvas=!0,this.textureSize=new Me(1024,1024),this.rasterizeSceneCallback=(s,l)=>{this._renderer.render(s,l)},this.renderToCanvasCallback=(s,l,o)=>{const f=l.autoClear;l.autoClear=!1,o.render(l),l.autoClear=f},this.setScene(new Bh,new nc)}setBVHWorker(a){this._generator.setBVHWorker(a)}setScene(a,s,l={}){a.updateMatrixWorld(!0),s.updateMatrixWorld();const o=this._generator;if(o.setObjects(a),this._buildAsync)return o.generateAsync(l.onProgress).then(f=>this._updateFromResults(a,s,f));{const f=o.generate();return this._updateFromResults(a,s,f)}}setSceneAsync(...a){this._buildAsync=!0;const s=this.setScene(...a);return this._buildAsync=!1,s}setCamera(a){this.camera=a,this.updateCamera()}updateCamera(){const a=this.camera;a.updateMatrixWorld(),this._pathTracer.setCamera(a),this._lowResPathTracer.setCamera(a),this.reset()}updateMaterials(){const a=this._pathTracer.material,s=this._renderer,l=this._materials,o=this.textureSize,f=K_(l);a.textures.setTextures(s,f,o.x,o.y),a.materials.updateFrom(l,f),this.reset()}updateLights(){const a=this.scene,s=this._renderer,l=this._pathTracer.material,o=Z_(a),f=X_(o);l.lights.updateFrom(o,f),l.iesProfiles.setTextures(s,f),this.reset()}updateEnvironment(){const a=this.scene,s=this._pathTracer.material;if(this._internalBackground&&(this._internalBackground.dispose(),this._internalBackground=null),s.backgroundBlur=a.backgroundBlurriness,s.backgroundIntensity=a.backgroundIntensity??1,s.backgroundRotation.makeRotationFromEuler(a.backgroundRotation).invert(),a.background===null)s.backgroundMap=null,s.backgroundAlpha=0;else if(a.background.isColor){this._colorBackground=this._colorBackground||new $v(16);const l=this._colorBackground;l.topColor.equals(a.background)||(l.topColor.set(a.background),l.bottomColor.set(a.background),l.update()),s.backgroundMap=l,s.backgroundAlpha=1}else if(a.background.isCubeTexture){if(a.background!==this._previousBackground){const l=new pv(this._renderer).generate(a.background);this._internalBackground=l,s.backgroundMap=l,s.backgroundAlpha=1}}else s.backgroundMap=a.background,s.backgroundAlpha=1;if(s.environmentIntensity=a.environment!==null?a.environmentIntensity??1:0,s.environmentRotation.makeRotationFromEuler(a.environmentRotation).invert(),this._previousEnvironment!==a.environment&&a.environment!==null)if(a.environment.isCubeTexture){const l=new pv(this._renderer).generate(a.environment);s.envMapInfo.updateFrom(l)}else s.envMapInfo.updateFrom(a.environment);this._previousEnvironment=a.environment,this._previousBackground=a.background,this.reset()}_updateFromResults(a,s,l){const{materials:o,geometry:f,bvh:c,bvhChanged:d,needsMaterialIndexUpdate:m}=l;this._materials=o;const y=this._pathTracer.material;return d&&(y.bvh.updateFrom(c),y.attributesArray.updateFrom(f.attributes.normal,f.attributes.tangent,f.attributes.uv,f.attributes.color)),m&&y.materialIndexAttribute.updateFrom(f.attributes.materialIndex),this._previousScene=a,this.scene=a,this.camera=s,this.updateCamera(),this.updateMaterials(),this.updateEnvironment(),this.updateLights(),l}renderSample(){const a=this._lowResPathTracer,s=this._pathTracer,l=this._renderer,o=this._clock,f=this._quad;this._updateScale(),this._queueReset&&(s.reset(),a.reset(),this._queueReset=!1,f.material.opacity=0,o.start());const c=o.getDelta()*1e3,d=o.getElapsedTime()*1e3;if(!this.pausePathTracing&&this.enablePathTracing&&this.renderDelay<=d&&!this.isCompiling&&s.update(),s.alpha=s.material.backgroundAlpha!==1||!P2(l),a.alpha=s.alpha,this.renderToCanvas){const m=this._renderer,p=this.minSamples;if(d>=this.renderDelay&&this.samples>=this.minSamples&&(this.fadeDuration!==0?f.material.opacity=Math.min(f.material.opacity+c/this.fadeDuration,1):f.material.opacity=1),!this.enablePathTracing||this.samples<p||f.material.opacity<1){if(this.dynamicLowRes&&!this.isCompiling){a.samples<1&&(a.material=s.material,a.update());const y=f.material.opacity;f.material.opacity=1-f.material.opacity,f.material.map=a.target.texture,f.render(m),f.material.opacity=y}(!this.dynamicLowRes&&this.rasterizeScene||this.dynamicLowRes&&this.isCompiling)&&this.rasterizeSceneCallback(this.scene,this.camera)}this.enablePathTracing&&f.material.opacity>0&&(f.material.opacity<1&&(f.material.blending=this.dynamicLowRes?FT:Ov),f.material.map=s.target.texture,this.renderToCanvasCallback(s.target,m,f),f.material.blending=Ql)}}reset(){this._queueReset=!0,this._pathTracer.samples=0}dispose(){this._quad.dispose(),this._quad.material.dispose(),this._pathTracer.dispose()}_updateScale(){if(this.synchronizeRenderSize){this._renderer.getDrawingBufferSize(Es);const a=Math.floor(this.renderScale*Es.x),s=Math.floor(this.renderScale*Es.y);if(this._pathTracer.getSize(Es),Es.x!==a||Es.y!==s){const l=this.lowResScale;this._pathTracer.setSize(a,s),this._lowResPathTracer.setSize(Math.floor(a*l),Math.floor(s*l))}}}}class j2 extends GT{constructor(...a){super(...a),this.isCircular=!1}copy(a,s){return super.copy(a,s),this.isCircular=a.isCircular,this}}class k2{constructor(a,s,l,o=()=>{},f){this.renderer=a,this.scene=s,this.camera=l,this.onStatus=o,this.prepareCapture=f,this.enabled=!1,this.failed=!1,this.dirty=!0,this.lastMotion=performance.now(),this.lastMatrix=new qe,this.lastProjection=new qe,this.environment=new $v(256),this.environment.topColor.set("#c6d4df"),this.environment.bottomColor.set("#8f9292"),this.environment.exponent=1,this.environment.update(),this.lastReported=-1}setEnabled(a){return this.failed&&a?!1:(this.enabled=a,this.dirty=!0,this.lastMotion=performance.now(),a?this.onStatus({enabled:!0,state:"preparing",samples:0}):(this.pathTracer?.reset(),this.onStatus({enabled:!1,state:"realtime",samples:0})),this.enabled)}invalidate(){this.dirty=!0,this.lastMotion=performance.now()}render(){if(!this.enabled||this.failed||(this.camera.updateMatrixWorld(),(!this.lastMatrix.equals(this.camera.matrixWorld)||!this.lastProjection.equals(this.camera.projectionMatrix))&&(this.lastMatrix.copy(this.camera.matrixWorld),this.lastProjection.copy(this.camera.projectionMatrix),this.lastMotion=performance.now(),this.pathTracer?.updateCamera(),this.pathTracer?.reset()),performance.now()-this.lastMotion<600))return!1;try{if(!this.pathTracer){this.pathTracer=new q2(this.renderer),this.pathTracer.bounces=7,this.pathTracer.filterGlossyFactor=.4,this.pathTracer.tiles.set(2,2),this.pathTracer.textureSize.set(512,512),this.pathTracer.renderScale=Math.min(.85,1/Math.max(window.devicePixelRatio||1,1)),this.pathTracer.minSamples=32,this.pathTracer.fadeDuration=1200,this.pathTracer.dynamicLowRes=!1,this.pathTracer.lowResScale=.2;const l=this.pathTracer.renderToCanvasCallback;this.pathTracer.renderToCanvasCallback=(o,f,c)=>{const d=f.toneMappingExposure;try{f.toneMappingExposure=.003,l(o,f,c)}finally{f.toneMappingExposure=d}}}if(this.dirty){const l=this.scene.environment,o=this.prepareCapture?.();try{this.scene.environment=this.environment,this.pathTracer._generator.geometry.clearGroups(),this.pathTracer.setScene(this.scene,this.camera),this.sceneCaptureCount=(this.sceneCaptureCount||0)+1,this.capturedLightCount=this.pathTracer._pathTracer.material.lights.count}finally{this.scene.environment=l,o?.()}this.dirty=!1}this.pathTracer.renderSample();const s=Math.floor(this.pathTracer.samples);return s!==this.lastReported&&(this.lastReported=s,this.onStatus({enabled:!0,state:"tracing",samples:s})),!0}catch(s){return console.warn("Fine lighting could not start; realtime rendering remains available.",s.message),this.failed=!0,this.enabled=!1,this.onStatus({enabled:!1,state:"unavailable",samples:0}),!1}}inspect(){return{enabled:this.enabled,failed:this.failed,samples:this.pathTracer?.samples||0,dirty:this.dirty,capturedLightCount:this.capturedLightCount||0,sceneCaptureCount:this.sceneCaptureCount||0,capturedFloorClearcoat:this.pathTracer?._materials.find(a=>a.name==="Polished warm grey concrete")?.clearcoat??null}}dispose(){this.pathTracer?.dispose(),this.environment.dispose()}}const gv={walls:["WALL_","Walls","WALLS_","wall_"],ceilings:["CEILING_","Ceiling","ROOF_","ceiling_"],schemeA:["SCHEME_A_","SchemeA","scheme_a_"],schemeB:["SCHEME_B_","SchemeB","scheme_b_"]},Y2={walls:"WALL_",ceilings:"CEILING_",schemeA:"SCHEME_A_",schemeB:"SCHEME_B_"},X2=new Set(["position","normal","tangent","uv","uv1","uv2","uv3","color"]);function K2(h,a){return Object.keys(gv).filter(s=>{if(a.isCategory)return a.isCategory(h,s);const l=a.visibility?.[s],o=l?.length?l:gv[s];for(let f=h;f;f=f.parent)if(o.some(c=>f.name.startsWith(c))||f.userData?.category===s)return!0;return!1})}function vv(h){for(let a=h;a;a=a.parent)if(!a.visible)return!1;return!0}function Z2(h){return Object.keys(h.attributes).sort().map(a=>`${a}:${h.attributes[a].itemSize}`).join(",")}function Q2(h){let a=h.index?.array.byteLength||0;for(const s of Object.values(h.attributes))a+=s.array.byteLength;return a}function W2(h,a,s){const l=new ci,o=new Map,f=[],c=[];for(let d=a;d<a+s;d+=1){const m=h.index?h.index.getX(d):d;o.has(m)||(o.set(m,o.size),f.push(m)),c.push(o.get(m))}for(const[d,m]of Object.entries(h.attributes)){const p=new Float32Array(f.length*m.itemSize);for(let y=0;y<f.length;y+=1)for(let v=0;v<m.itemSize;v+=1)p[y*m.itemSize+v]=m.getComponent(f[y],v);l.setAttribute(d,new dt(p,m.itemSize))}return l.setIndex(c),l}function yv(h,a){const s=a.determinant();if(Math.abs(s)<1e-12)throw new Error("Static rendering does not support a singular mesh transform.");if(h.applyMatrix4(a),s<0){if(h.index)for(let o=0;o<h.index.count;o+=3){const f=h.index.getX(o+1);h.index.setX(o+1,h.index.getX(o+2)),h.index.setX(o+2,f)}else for(const o of Object.values(h.attributes))for(let f=0;f<o.count;f+=3)for(let c=0;c<o.itemSize;c+=1){const d=o.getComponent(f+1,c);o.setComponent(f+1,c,o.getComponent(f+2,c)),o.setComponent(f+2,c,d)}const l=h.getAttribute("tangent");if(l?.itemSize===4)for(let o=0;o<l.count;o+=1)l.setW(o,-l.getW(o))}return h.computeBoundingBox(),h.computeBoundingSphere(),h}function J2(h){const a=h.geometry,s=a.index?.count??a.attributes.position.count,l=Math.max(0,a.drawRange.start),o=Math.min(s,l+a.drawRange.count);return(Array.isArray(h.material)?a.groups:[{start:0,count:s,materialIndex:0}]).map(c=>{const d=Math.max(l,c.start),m=Math.min(o,c.start+c.count);return{start:d,count:Math.max(0,m-d),material:Array.isArray(h.material)?h.material[c.materialIndex]:h.material}}).filter(c=>c.material&&c.count>0)}function $2(h,a={}){h.updateMatrixWorld(!0);const s=new it;s.name="STATIC_RENDER_MODEL";const l=new Map,o=new Map,f=new Set,c={sourceMeshes:0,sourceDrawCalls:0,renderedMeshes:0,renderedDrawCalls:0,opaqueBatches:0,retainedGlassMeshes:0,lights:0,sourceTriangles:0,renderedTriangles:0,geometryBytes:0};function d(m){const p=m.join("|");if(!l.has(p)){let y=s;for(const v of m){const g=new it;g.name=`${Y2[v]}STATIC_GROUP`,g.userData.category=v,y.add(g),y=g}l.set(p,y)}return l.get(p)}try{h.traverse(p=>{if(p.isLight){const w=p.clone(!1);if(w.matrix.copy(p.matrixWorld),w.matrixAutoUpdate=!1,w.visible=vv(p),s.add(w),p.target){p.target.updateWorldMatrix(!0,!1);const x=new tc;x.name=`${p.name}_STATIC_TARGET`,x.matrix.copy(p.target.matrixWorld),x.matrixAutoUpdate=!1,w.target=x,s.add(x)}c.lights+=1;return}if(!p.isMesh)return;c.sourceMeshes+=1;const y=p.geometry;if(p.isSkinnedMesh||p.isInstancedMesh||Object.keys(y.morphAttributes).length||Object.keys(y.attributes).some(w=>!X2.has(w)))throw new Error(`Static rendering needs a separate implementation for ${p.name||"this mesh"}.`);const v=J2(p);if(v.some(w=>w.start%3||w.count%3))throw new Error(`Non-triangle draw range on ${p.name}.`);const g=K2(p,a),T=vv(p);if(c.sourceDrawCalls+=v.length,c.sourceTriangles+=v.reduce((w,x)=>w+x.count/3,0),(Array.isArray(p.material)?p.material:[p.material]).some(w=>w?.transparent||w?.transmission>0)){const w=yv(y.clone(),p.matrixWorld);f.add(w);const x=new kt(w,p.material);x.name=p.name,x.visible=T,x.castShadow=p.castShadow,x.receiveShadow=p.receiveShadow,x.renderOrder=p.renderOrder,x.layers.mask=p.layers.mask,d(g).add(x),c.retainedGlassMeshes+=1,c.renderedDrawCalls+=v.length,c.renderedTriangles+=v.reduce((A,M)=>A+M.count/3,0);return}for(const w of v){const x=yv(W2(y,w.start,w.count),p.matrixWorld),A=[g.join("|"),w.material.uuid,Z2(x),p.castShadow,p.receiveShadow,p.renderOrder,p.layers.mask,T].join(";");o.has(A)||o.set(A,{types:g,material:w.material,castShadow:p.castShadow,receiveShadow:p.receiveShadow,renderOrder:p.renderOrder,layerMask:p.layers.mask,visible:T,geometries:[],names:[]});const M=o.get(A);M.geometries.push(x),M.names.push(p.name),f.add(x)}});let m=0;for(const p of o.values()){const y=zv(p.geometries,!1);if(!y)throw new Error("Static geometry attributes could not be merged.");for(const g of p.geometries)g.dispose(),f.delete(g);y.computeBoundingBox(),y.computeBoundingSphere(),f.add(y);const v=new kt(y,p.material);v.name=`STATIC_BATCH_${m++}`,v.userData.sourceMeshNames=p.names,v.castShadow=p.castShadow,v.receiveShadow=p.receiveShadow,v.renderOrder=p.renderOrder,v.layers.mask=p.layerMask,v.visible=p.visible,d(p.types).add(v),c.opaqueBatches+=1,c.renderedDrawCalls+=1,c.renderedTriangles+=y.index.count/3}c.renderedMeshes=c.opaqueBatches+c.retainedGlassMeshes;for(const p of f)c.geometryBytes+=Q2(p);return s.updateMatrixWorld(!0),{model:s,stats:c,dispose(){for(const p of f)p.dispose();f.clear()}}}catch(m){for(const p of f)p.dispose();throw m}}class ew{constructor(a){this.spots=[],this.points=[],this.lastPosition=new Q(1/0,1/0,1/0),a.traverse(s=>{s.isSpotLight?this.spots.push(s):s.isPointLight&&this.points.push(s)}),this.positions=new Map([...this.spots,...this.points].map(s=>[s,s.getWorldPosition(new Q)]))}update(a,s=!1){if(!(!s&&a.distanceToSquared(this.lastPosition)<.16)){this.lastPosition.copy(a);for(const[l,o]of[[this.spots,8],[this.points,4]]){const f=[...l].sort((d,m)=>this.positions.get(d).distanceToSquared(a)-this.positions.get(m).distanceToSquared(a)),c=new Set(f.slice(0,o));for(const d of l)d.visible=c.has(d)}}}fullScene(){const a=[...this.spots,...this.points],s=a.map(l=>l.visible);return a.forEach(l=>{l.visible=!0}),()=>a.forEach((l,o)=>{l.visible=s[o]})}inspect(){const a=[...this.spots,...this.points];return{retainedPhysicalLights:a.length,realtimeLocalLights:a.filter(s=>s.visible).length,fullLightsForPathTracing:!0}}}function tw(h){if(h.schemaVersion!==1||!Array.isArray(h.lights))throw new Error("原生面光源资料读取失败");const a=new it;a.name="NativeAreaLightRig";for(const s of h.lights){if(![s.width,s.height,s.radiance].every(o=>Number.isFinite(o)&&o>0))throw new Error("面光源参数无效");const l=new j2;l.name=s.name,l.color.setRGB(...s.linearRGB,Ui),l.width=s.width,l.height=s.height,l.intensity=s.radiance,l.isCircular=s.isCircular,l.position.fromArray(s.position),l.quaternion.fromArray(s.quaternion),l.visible=!1,l.userData.nativeSource=s,a.add(l)}return a.userData.nativeSHA256=h.sourceNativeSHA256,a.userData.sourceDocument=h,a}function iw(h){const a=h?.children||[],s=a.map(l=>l.visible);return a.forEach(l=>{l.visible=!0}),()=>a.forEach((l,o)=>{l.visible=s[o]})}function nw(h){if(!h||!Array.isArray(h.points)||h.points.length<2)throw new Error("Visitor route requires at least two points");const a=h.points.map(f=>{if(!Array.isArray(f)||f.length!==3||!f.every(Number.isFinite))throw new Error("Visitor route has an invalid point");return[...f]}),s=[0];for(let f=1;f<a.length;f+=1){const c=a[f-1],d=a[f],m=Math.hypot(d[0]-c[0],d[1]-c[1],d[2]-c[2]);if(m<1e-8)throw new Error("Visitor route has consecutive duplicate points");s.push(s[f-1]+m)}const l=s.at(-1),o=(h.stops||[]).map(f=>{if(!Number.isInteger(f.pointIndex)||f.pointIndex<0||f.pointIndex>=a.length)throw new Error("Visitor route has an invalid stop");return{...f,distance:s[f.pointIndex],durationSec:Math.max(0,Number(f.durationSec)||0)}});return{...h,points:a,stops:o,cumulativeDistances:s,totalLength:l,loop:!1}}function hh(h,a){const s=Math.min(h.totalLength,Math.max(0,Number(a)||0));let l=0,o=h.points.length-2;for(;l<o;){const T=Math.ceil((l+o)/2);h.cumulativeDistances[T]<=s?l=T:o=T-1}const f=l,c=h.points[l],d=h.points[l+1],m=h.cumulativeDistances[l+1]-h.cumulativeDistances[l],p=(s-h.cumulativeDistances[l])/m,y=[(d[0]-c[0])/m,(d[1]-c[1])/m,(d[2]-c[2])/m],v=c.map((T,_)=>T+(d[_]-T)*p),g=h.stops.find(T=>Math.abs(T.distance-s)<1e-5)||null;return{position:v,direction:y,distance:s,segmentIndex:f,stop:g}}const dh=Math.PI*2,aw=new Set(["full","arrows","people"]),sw=["#647265","#707b87","#8a775f","#8a6860","#686469","#697c78"];class lw{constructor(a,s,l={}){if(this.route=nw(s),!(this.route.totalLength>0))throw new Error("参观动线需要有效长度");this.sameEntrance=new Q(...this.route.points[0]).distanceTo(new Q(...this.route.points.at(-1)))<.02,this.mode="full",this.geometries=new Set,this.materials=new Set,this.group=new it,this.group.name="GUIDED_VISITOR_OVERLAYS",this.group.userData={guidedOverlay:!0,excludeFromPathTracing:!0,virtual:!0,label:"动线箭头与虚拟参观者"},this.arrowGroup=new it,this.arrowGroup.name="GUIDED_ARROW_FLOW",this.peopleGroup=new it,this.peopleGroup.name="VIRTUAL_VISITORS",this.group.add(this.arrowGroup,this.peopleGroup),a.add(this.group),this.arrowHeight=We.clamp(l.arrowHeight??.085,.06,.12),this.arrowSpeed=We.clamp(l.arrowSpeed??1,.7,1.4),this.arrowDistance=0,this._makeArrows(We.clamp(l.arrowCount??10,4,14)),this._makePeople(We.clamp(l.peopleCount??5,4,6)),this.stops=(this.route.stops||[]).filter(o=>Number.isFinite(o.distance)).map((o,f)=>({...o,id:o.id||`stop-${f}`,distance:We.clamp(o.distance,0,this.route.totalLength),durationSec:We.clamp(o.durationSec??4,1,20)})).sort((o,f)=>o.distance-f.distance),this.setMode("full")}_geo(a){return this.geometries.add(a),a}_mat(a){const s=new Zl(a);return this.materials.add(s),s}_merge(a){const s=zv(a,!1);for(const l of a)l.dispose();return this._geo(s)}_mesh(a,s,l,o=[0,0,0],f=!0){const c=new kt(a,s);return c.position.set(...o),c.castShadow=f,c.receiveShadow=!0,l.add(c),c}_makeArrows(a){const s=this._geo(new ci);s.setAttribute("position",new $o([-.13,0,.43,.13,0,.43,-.13,0,-.08,-.13,0,-.08,.13,0,.43,.13,0,-.08,-.33,0,-.08,.33,0,-.08,0,0,-.5],3)),s.computeVertexNormals();const l=this._mat({color:"#6d3d30",emissive:"#6d3d30",emissiveIntensity:.2,roughness:.75}),o=this._mat({color:"#fff0b9",emissive:"#fff0b9",emissiveIntensity:.38,roughness:.7});this.arrows=[];for(let d=0;d<a;d++){const m=new it;m.name=`动线箭头 ${d+1}`,this._mesh(s,l,m,[0,0,0],!1),this._mesh(s,o,m,[0,.002,0],!1).scale.set(.74,1,.78),this.arrowGroup.add(m),this.arrows.push(m)}const f=[];for(let d=1;d<this.route.points.length;d++){const m=this.route.points[d-1],p=this.route.points[d],y=p[0]-m[0],v=p[2]-m[2],g=Math.hypot(y,v);if(g<.001)continue;const T=-v/g*.065,_=y/g*.065,w=[m[0]+T,m[1]+.064,m[2]+_],x=[m[0]-T,m[1]+.064,m[2]-_],A=[p[0]+T,p[1]+.064,p[2]+_],M=[p[0]-T,p[1]+.064,p[2]-_];f.push(...w,...x,...A,...A,...x,...M)}const c=new ci;c.setAttribute("position",new $o(f,3)),c.computeVertexNormals(),this._mesh(this._geo(c),this._mat({color:"#c6a064",emissive:"#8c692c",emissiveIntensity:.22,transparent:!0,opacity:.5,depthWrite:!1,roughness:.85,side:ic}),this.arrowGroup,[0,0,0],!1),this._updateArrows(0)}_makePeople(a){const s=this._geo(new Nl(.16,.36,4,10)),l=this._geo(new Nl(.043,.204,3,8)),o=this._merge([new Nl(.035,.19,3,8).translate(0,-.13,0),new ps(.041,8,5).scale(.85,1.18,.8).translate(0,-.275,0)]),f=this._geo(new Nl(.055,.32,3,8)),c=this._geo(new Nl(.048,.334,3,8)),d=this._geo(new Mv(.115,.075,.2)),m=this._merge([new ps(.12,12,8).scale(.84,1,.9),new ps(.019,6,4).scale(.75,.9,1.2).translate(0,-.012,-.11),new VT(.045,.05,.12,8).translate(0,-.11,0)]),p=this._merge([new ps(.122,12,5,0,dh,0,1.2).scale(.84,1,.9),new ps(.009,6,4).translate(-.035,.016,-.105),new ps(.009,6,4).translate(.035,.016,-.105)]),y=this._mat({color:"#c6a78b",roughness:.86}),v=this._mat({color:"#39352e",roughness:.9}),g=this._mat({color:"#343d46",roughness:.82}),T=this._mat({color:"#3b3731",roughness:.82}),_=[1.68,1.73,1.77,1.7,1.75,1.69];this.people=[];for(let w=0;w<a;w++){const x=new it;x.name=`虚拟参观者 ${String(w+1).padStart(2,"0")}`,x.userData={virtual:!0,label:x.name};const A=new it;x.add(A);const M=this._mat({color:sw[w],roughness:.78});this._mesh(s,M,A,[0,1.13,0]).scale.set(1.05,1,.67);const C=new it;C.position.y=1.59,A.add(C),this._mesh(m,y,C),this._mesh(p,v,C);const D=[],U=[];for(const P of[-1,1]){const j=new it;j.position.set(P*.085,.86,0),A.add(j),this._mesh(f,g,j,[0,-.215,0]);const X=new it;X.position.y=-.43,j.add(X),this._mesh(c,g,X,[0,-.215,0]);const G=new it;G.position.y=-.43,X.add(G),this._mesh(d,T,G,[0,.004,-.03]),D.push({hip:j,knee:X,foot:G,side:P});const Z=new it;Z.position.set(P*.18,1.4,0),A.add(Z),this._mesh(l,M,Z,[0,-.145,0]);const W=new it;W.position.y=-.29,Z.add(W),this._mesh(o,y,W),U.push({shoulder:Z,elbow:W,side:P})}const N=_[w];x.scale.setScalar(N/1.712),this.peopleGroup.add(x);const Y={avatar:x,body:A,head:C,legs:D,arms:U,height:N,speed:.85+w/Math.max(1,a-1)*.25,distance:this.route.totalLength*(.04+.84*w/a),sign:1,phase:w*1.7,walkWeight:1,stopTimer:0,lastStop:null,moving:!0,heading:null,lap:0};this.people.push(Y),this._posePerson(Y,0)}}setMode(a){if(!aw.has(a))throw new Error(`未知的展馆模式: ${a}`);this.mode=a,this.group.visible=a!=="full",this.arrowGroup.visible=a==="arrows",this.peopleGroup.visible=a==="people"}_updateArrows(a){this.arrowDistance=(this.arrowDistance+a*this.arrowSpeed)%this.route.totalLength;for(let s=0;s<this.arrows.length;s++){const l=(this.arrowDistance+s/this.arrows.length*this.route.totalLength)%this.route.totalLength,o=hh(this.route,l),f=this.arrows[s];f.position.set(o.position[0],o.position[1]+this.arrowHeight,o.position[2]),f.rotation.y=Math.atan2(-o.direction[0],-o.direction[2]),f.userData.routeDistance=l}}_advancePerson(a,s){if(a.stopTimer>0){a.stopTimer=Math.max(0,a.stopTimer-s),a.moving=!1;return}a.moving=!0,a.lastStop&&Math.abs(a.distance-a.lastStop.distance)>.45&&(a.lastStop=null);let l=a.distance+a.sign*a.speed*s;const f=(a.sign>0?this.stops:[...this.stops].reverse()).find(c=>c.id!==a.lastStop?.id&&(a.sign>0?c.distance>=a.distance&&c.distance<=l:c.distance<=a.distance&&c.distance>=l));if(f){a.distance=f.distance,a.stopTimer=f.durationSec+this.people.indexOf(a)*.12,a.lastStop=f,a.moving=!1;return}(l>this.route.totalLength||l<0)&&(this.sameEntrance&&a.sign>0?(l=0,a.lap+=1,a.stopTimer=.15,a.lastStop=null,a.moving=!1):this.route.loop?l=We.euclideanModulo(l,this.route.totalLength):(l=We.clamp(l,0,this.route.totalLength),a.sign*=-1,a.stopTimer=1.8,a.moving=!1)),a.distance=l}_posePerson(a,s){const l=hh(this.route,a.distance),o=this.sameEntrance&&a.distance>=this.route.totalLength-.001?.12:We.clamp(a.distance+a.sign*.12,0,this.route.totalLength),f=hh(this.route,o),c=Math.atan2(-f.direction[0]*a.sign,-f.direction[2]*a.sign);a.heading===null&&(a.heading=c);const d=We.euclideanModulo(c-a.heading+Math.PI,dh)-Math.PI;a.heading+=We.clamp(d,-s*3.5,s*3.5),a.avatar.position.set(...l.position),a.avatar.rotation.y=a.heading,a.walkWeight=We.damp(a.walkWeight,a.moving?1:0,12,s),a.moving&&(a.phase+=s*a.speed*dh/.95);const m=a.walkWeight;a.body.position.y=.009*Math.abs(Math.sin(a.phase*2))*m,a.head.rotation.y=a.moving?0:Math.sin(a.phase+a.stopTimer)*.12;for(const p of a.legs){const y=a.phase+(p.side>0?Math.PI:0),v=-.12*Math.sin(y)*m,T=.86-(.041+.045*Math.max(0,Math.sin(y))*m),_=Math.min(.858,Math.hypot(T,v)),w=Math.PI-Math.acos(We.clamp((.43**2*2-_**2)/(.43**2*2),-1,1)),x=Math.atan2(-v,T)+Math.acos(We.clamp(_/.86,-1,1));p.hip.rotation.x=x,p.knee.rotation.x=-w,p.foot.rotation.x=-x+w}for(const p of a.arms){const y=a.phase+(p.side>0?Math.PI:0);p.shoulder.rotation.x=-.18*Math.sin(y)*m,p.shoulder.rotation.z=p.side*.03,p.elbow.rotation.x=-.06-.04*Math.max(0,Math.sin(y))*m}}update(a){if(this.disposed||this.mode==="full")return;const s=Math.min(.1,Math.max(0,Number(a)||0));if(this.mode==="arrows"&&this._updateArrows(s),this.mode==="people")for(const l of this.people)this._advancePerson(l,s),this._posePerson(l,s)}inspect(){const a=s=>{let l=0;return s.traverse(o=>{if(o.isMesh){for(let f=o;f;f=f.parent)if(!f.visible)return;l+=1}}),l};return{mode:this.mode,count:this.people.length,arrowCount:this.arrows.length,length:this.route.totalLength,visiblePeopleMeshCount:a(this.peopleGroup),visibleArrowMeshCount:a(this.arrowGroup),visible:this.group.visible,virtual:!0,label:"虚拟参观者",sameEntrance:this.sameEntrance,arrowDistance:this.arrowDistance,arrows:this.arrows.map(s=>({position:s.position.toArray(),routeDistance:s.userData.routeDistance,moving:this.mode==="arrows"})),activeMeshCount:this.mode==="people"?this.people.length*13:this.mode==="arrows"?this.arrows.length*2+1:0,people:this.people.map(s=>({label:s.avatar.name,position:s.avatar.position.toArray(),routeDistance:s.distance,direction:s.sign,moving:this.mode==="people"&&s.moving,speed:s.speed,height:s.height,pausedFor:s.stopTimer,lap:s.lap}))}}dispose(){if(!this.disposed){this.disposed=!0,this.group.removeFromParent();for(const a of this.geometries)a.dispose();for(const a of this.materials)a.dispose();this.geometries.clear(),this.materials.clear(),this.arrowGroup.clear(),this.peopleGroup.clear(),this.group.clear(),this.people=[],this.arrows=[]}}}const mh={walls:["WALL_","Walls","WALLS_","wall_"],ceilings:["CEILING_","Ceiling","ROOF_","ceiling_"],schemeA:["SCHEME_A_","SchemeA","scheme_a_"],schemeB:["SCHEME_B_","SchemeB","scheme_b_"]};class rw{constructor(a,s,l){this.container=a,this.onStatus=s,this.onChange=l,this.config={},this.settings={walls:!0,ceilings:!1,scheme:"A"},this.scene=new Bh,this.scene.background=new Kt("#ffffff"),this.camera=new nc(40,1,.05,500),this.camera.position.set(32,34,42);try{this.renderer=new PT({antialias:!0,alpha:!1,powerPreference:"high-performance"})}catch{throw new Error("这个浏览器暂时无法开启 3D 显示。请使用支持 WebGL 的浏览器重新打开。")}this.renderer.setPixelRatio(this.displayPixelRatio()),this.renderer.outputColorSpace=Ls,this.renderer.toneMapping=qT,this.renderer.toneMappingExposure=.07,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=jT,this.renderer.shadowMap.autoUpdate=!1,this.renderer.shadowMap.needsUpdate=!0,this.renderer.domElement.setAttribute("aria-label","青海文学馆三维模型；拖拽旋转，滚轮或双指缩放"),this.renderer.domElement.setAttribute("role","img"),this.renderer.domElement.addEventListener("webglcontextlost",c=>{c.preventDefault(),s({state:"error",message:"3D 显示已暂停。请刷新页面重新加载。"})}),a.appendChild(this.renderer.domElement),this.controls=new Lx(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.08,this.controls.minDistance=.8,this.controls.maxDistance=130,this.controls.maxPolarAngle=Math.PI/2-.02,this.controls.screenSpacePanning=!0,this.controls.target.set(0,0,0),this.controls.addEventListener("start",()=>{this.flight=null}),this.scene.add(new kT(16777215,13158338,.9));const o=new gh(16777215,1.8);o.position.set(18,38,18),o.castShadow=!0,o.shadow.mapSize.set(2048,2048),o.shadow.camera.left=o.shadow.camera.bottom=-34,o.shadow.camera.right=o.shadow.camera.top=34,o.shadow.camera.near=.5,o.shadow.camera.far=100,o.shadow.bias=-15e-5,o.shadow.normalBias=.05,this.scene.add(o),this.keyLight=o;const f=new gh(16775404,.45);f.position.set(-20,15,-20),this.scene.add(f),this.pmrem=new YT(this.renderer),this.environment=this.pmrem.fromScene(new Xx,.04),this.scene.environment=this.environment.texture,this.scene.environmentIntensity=.35,this.progressive=new k2(this.renderer,this.scene,this.camera,c=>this.onChange({lighting:c}),()=>{const c=this.lightBudget?.fullScene(),d=iw(this.nativeAreaRig),m=this.visitorTour?.group.visible;return this.visitorTour&&(this.visitorTour.group.visible=!1),()=>{this.visitorTour&&(this.visitorTour.group.visible=m),d(),c?.()}}),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(a),this.resize(),this.lastFrameTime=performance.now(),this.frameMeasurements=[],this.animate=this.animate.bind(this),this.animate(),this.inspect=()=>({loaded:!!this.model,meshCount:this.meshCount||0,version:this.config.version||null,revision:this.config.revision||null,walkableHoleCount:this.config.walkableHoles?.length||0,renderStats:this.staticRender?.stats||null,drawCalls:this.renderer.info.render.calls,renderPixelRatio:this.renderer.getPixelRatio(),lightingBudget:this.lightBudget?.inspect()||null,nativeAreaLights:{count:this.nativeAreaRig?.children.length||0,realtimeVisible:this.nativeAreaRig?.children.filter(c=>c.visible).length||0,nativeSHA256:this.nativeAreaRig?.userData.nativeSHA256||null},frameTimings:this.frameMeasurements.length?Object.fromEntries(["delta","controls","draw"].map(c=>[c,this.frameMeasurements.reduce((d,m)=>d+m[c],0)/this.frameMeasurements.length])):null,joystick:{...this.walkControls?.joystick||{x:0,y:0}},lookJoystick:{...this.walkControls?.lookJoystick||{x:0,y:0}},camera:this.camera.position.toArray(),direction:this.camera.getWorldDirection(new Q).toArray(),fov:this.camera.fov,target:this.controls.target.toArray(),progressive:this.progressive?.inspect(),firstPerson:this.walkControls?.active||!1,locked:document.pointerLockElement===this.renderer.domElement,lastKey:this.walkControls?.lastKey,blockedSteps:this.walkControls?.blockedSteps||0,colliderCount:this.walkControls?.colliders.length||0,eyeHeight:this.walkControls?.eyeHeight||1.65,settings:{...this.settings},view:this.activeView||"overview",visitorTour:this.visitorTour?.inspect()||null,capabilities:this.capabilities||{},modelBounds:this.bounds?{min:this.bounds.min.toArray(),max:this.bounds.max.toArray()}:null,visibleByCategory:this.model?Object.fromEntries(Object.keys(mh).map(c=>[c,this.countCategory(c)])):{}})}async load(){this.onStatus({state:"loading",message:"正在读取展馆模型"});try{const a=new URL("./",window.location.href),s=await fetch(new URL("models/view-config.json",a),{cache:"no-cache"});if(s.ok&&s.headers.get("content-type")?.includes("application/json"))this.config=await s.json();else if(!s.ok&&s.status!==404)throw new Error("视图配置读取失败");const l=new JT,o=this.config.modelUrl||"models/museum.glb",f=new URL(o.replace(/^\/+/,""),a).href,c=await l.loadAsync(f,p=>{this.onStatus({state:"loading",message:"正在读取展馆模型",progress:p.total?Math.round(p.loaded/p.total*100):null})});if(this.disposed)return;this.model=c.scene,this.meshCount=0,this.model.traverse(p=>{if(!p.isMesh)return;this.meshCount+=1,p.castShadow=!0,p.receiveShadow=!0;const y=Array.isArray(p.material)?p.material:[p.material];for(const v of y)v.map&&(v.map.anisotropy=Math.min(8,this.renderer.capabilities.getMaxAnisotropy()))}),this.preparingShaders=!0;try{this.staticRender=$2(this.model,{isCategory:(p,y)=>this.isCategory(p,y)}),this.renderModel=this.staticRender.model}catch(p){console.warn("Static batching unavailable; source geometry retained",p.message),this.renderModel=this.model}if(this.scene.add(this.renderModel),this.config.areaLightsUrl){const p=await fetch(new URL(this.config.areaLightsUrl,a));if(!p.ok)throw new Error("面光源资料读取失败");this.nativeAreaRig=tw(await p.json()),this.scene.add(this.nativeAreaRig)}this.lightBudget=new ew(this.renderModel),this.bounds=new zt().setFromObject(this.model),this.center=this.bounds.getCenter(new Q);const d=this.bounds.getSize(new Q);this.modelSize=Math.max(d.x,d.z,d.y),this.controls.maxDistance=this.modelSize*3,this.camera.far=this.modelSize*10,this.camera.updateProjectionMatrix(),this.keyLight.target.position.copy(this.center),this.scene.add(this.keyLight.target),this.capabilities=Object.fromEntries(Object.keys(mh).map(p=>[p,this.hasCategory(p)])),this.walkControls=new Qx(this.camera,this.renderer.domElement,this.model,{...this.config,defaultBounds:{min:this.bounds.min.toArray(),max:this.bounds.max.toArray()}},p=>{if(p.jumpRoom!==void 0){const y=this.config.rooms?.[p.jumpRoom];y&&(this.room(y.id),this.onChange({selectedRoom:y.id}))}p.firstPerson===!1&&(this.controls.enabled=!0,this.controls.maxPolarAngle=Math.PI-.08,this.controls.target.copy(this.camera.position).addScaledVector(this.camera.getWorldDirection(new Q),4),this.controls.update()),this.onChange(p)});for(const p of this.config.lights||[]){const y=new zh(p.color||"#fff1d6",p.intensity||12,p.distance||9,2);y.position.set(...p.position),this.scene.add(y)}this.applyVisibility(),this.overview(!1);const m=await fetch(new URL(this.config.visitorRouteUrl||"models/visitor-route.json",a));if(!m.ok)throw new Error("参观动线读取失败");if(this.visitorRouteDocument=await m.json(),!o.includes(this.visitorRouteDocument.sourceModelSHA.slice(0,8)))throw new Error("参观动线与场馆版本不一致");if(this.visitorTour=new lw(this.scene,this.visitorRouteDocument,{peopleCount:5,arrowCount:10}),this.lightBudget.update(this.controls.target,!0),this.onStatus({state:"loading",message:"正在准备灯光与材质"}),this.renderer.compileAsync&&await this.renderer.compileAsync(this.scene,this.camera),this.preparingShaders=!1,this.disposed)return;this.onChange({config:this.config,capabilities:this.capabilities,visitorReady:!0,visitorMode:"full"}),this.onStatus({state:"ready",message:"模型已载入"})}catch(a){this.preparingShaders=!1,console.error("Museum model could not be loaded",a),this.onStatus({state:"error",message:"展馆模型暂时未能载入。请检查网络后重试，或稍后重新打开链接。"})}}isCategory(a,s){const l=this.config.visibility?.[s],o=Array.isArray(l)&&l.length?l:mh[s];let f=a;for(;f&&f!==this.scene;){if(o.some(c=>f.name.startsWith(c))||f.userData?.category===s)return!0;f=f.parent}return!1}hasCategory(a){let s=!1;return this.model.traverse(l=>{l.isMesh&&this.isCategory(l,a)&&(s=!0)}),s}countCategory(a){let s=0,l=0;return this.model.traverse(o=>{if(!o.isMesh||!this.isCategory(o,a))return;s+=1;let f=o,c=!0;for(;f&&f!==this.scene;)f.visible||(c=!1),f=f.parent;c&&(l+=1)}),{total:s,visible:l}}applyVisibility(a){if(Object.assign(this.settings,a||{}),this.progressive?.invalidate(),!this.model)return;const s=this.renderModel&&this.renderModel!==this.model?[this.model,this.renderModel]:[this.model];for(const l of s)l.traverse(o=>{if(!o.isMesh)return;let f=!0;this.isCategory(o,"walls")&&(f=f&&this.settings.walls),this.isCategory(o,"ceilings")&&(f=f&&this.settings.ceilings),this.isCategory(o,"schemeA")&&(f=f&&this.settings.scheme==="A"),this.isCategory(o,"schemeB")&&(f=f&&this.settings.scheme==="B"),o.visible=f});this.renderer.shadowMap.needsUpdate=!0}frameBounds(a,s=1.12){const l=a.getCenter(new Q),o=new Q(.63,.85,.9).normalize(),f=new Q(o.z,0,-o.x).normalize(),c=o.clone().cross(f).normalize(),d=Math.tan(We.degToRad(40)/2),m=d*this.camera.aspect;let p=0;for(const y of[a.min.x,a.max.x])for(const v of[a.min.y,a.max.y])for(const g of[a.min.z,a.max.z]){const T=new Q(y,v,g).sub(l),_=T.dot(o);p=Math.max(p,Math.abs(T.dot(f))/m+_,Math.abs(T.dot(c))/d+_)}return{position:l.clone().addScaledVector(o,p*s).toArray(),target:l.toArray()}}overview(a=!0){if(!this.model)return;this.walkControls?.disable(),this.activeView="overview";const s=this.config.overview||this.frameBounds(this.bounds,1.14),l=this.camera.aspect<1.5?this.frameBounds(this.bounds,1.1):s;this.goTo(l,a)}room(a,s=!1){const l=this.config.rooms?.find(f=>f.id===a);if(!l)return;if(this.walkControls?.active){this.flight=null,this.walkControls.setView(l.enter),this.activeView=`walk:${a}`;return}this.activeView=s?`interior:${a}`:a;let o=l;if(s)if(l.enter)o=l.enter;else{const f=l.target||[0,0,0],c=l.bounds,d=c?c.min[1]+1.65:1.65,m=c?Math.min((c.max[2]-c.min[2])*.32,4):3;o={position:[f[0],d,f[2]+m],target:[f[0],d,f[2]-2]}}else!o.position&&l.bounds&&(o=this.frameBounds(new zt(new Q(...l.bounds.min),new Q(...l.bounds.max)),1.1));o.position&&o.target&&this.goTo(o,!0,s)}startWalk(a){const s=this.config.rooms?.find(l=>l.id===a)||this.config.rooms?.[0];!s?.enter||!this.walkControls||(this.flight=null,this.controls.enabled=!1,this.applyVisibility({ceilings:!0}),this.activeView=`walk:${s.id}`,this.walkControls.enable(s.enter),!this.walkControls.mobile&&this.visitorTour?.mode==="full"&&this.progressive.setEnabled(!0))}fineLighting(a){return a&&this.visitorTour?.mode!=="full"?!1:this.progressive?.setEnabled(a)}setVisitorMode(a){return!this.visitorTour||!["full","arrows","people"].includes(a)?!1:(this.visitorTour.mode==="full"&&a!=="full"&&(this.tourPreviousLighting=this.progressive.enabled),a!=="full"&&this.progressive.setEnabled(!1),this.visitorTour.setMode(a),this.renderer.shadowMap.needsUpdate=!0,this.onChange({visitorMode:a}),a==="full"&&this.tourPreviousLighting&&(this.tourPreviousLighting=!1,this.progressive.setEnabled(!0)),!0)}endWalk(){this.walkControls?.disable()}joystick(a,s){this.walkControls&&(this.walkControls.joystick={x:a,y:s})}lookJoystick(a,s){this.walkControls&&(this.walkControls.lookJoystick={x:a,y:s})}goTo(a,s,l=!1){if(!a?.position||!a?.target)return;this.controls.maxPolarAngle=l?Math.PI-.08:Math.PI/2-.02,this.camera.fov=l?a.fov||60:40,this.camera.updateProjectionMatrix();const o=new Q(...a.position),f=new Q(...a.target);if(!s||window.matchMedia("(prefers-reduced-motion: reduce)").matches){this.flight=null,this.camera.position.copy(o),this.controls.target.copy(f),this.controls.update();return}this.flight={start:performance.now(),from:this.camera.position.clone(),targetFrom:this.controls.target.clone(),to:o,targetTo:f,duration:1e3}}resize(){const{width:a,height:s}=this.container.getBoundingClientRect();!a||!s||(this.camera.aspect=a/s,this.camera.updateProjectionMatrix(),this.renderer.setPixelRatio(this.displayPixelRatio()),this.renderer.setSize(a,s),this.progressive?.invalidate(),this.model&&this.activeView==="overview"&&this.overview(!1))}displayPixelRatio(){return window.matchMedia("(pointer: coarse)").matches||window.innerWidth<=900?1:Math.min(window.devicePixelRatio||1,1.8)}animate(){if(this.disposed)return;if(this.frame=requestAnimationFrame(this.animate),document.hidden||this.preparingShaders){this.lastFrameTime=performance.now();return}if(this.flight){const o=Math.min((performance.now()-this.flight.start)/this.flight.duration,1),f=o<.5?4*o**3:1-(-2*o+2)**3/2;this.camera.position.lerpVectors(this.flight.from,this.flight.to,f),this.controls.target.lerpVectors(this.flight.targetFrom,this.flight.targetTo,f),o>=1&&(this.flight=null)}const a=performance.now(),s=a-this.lastFrameTime;this.walkControls?.update((a-this.lastFrameTime)/1e3),this.visitorTour?.update(Math.min((a-this.lastFrameTime)/1e3,.04)),this.visitorTour?.mode==="people"&&a-(this.lastTourShadowUpdate||0)>=100&&(this.renderer.shadowMap.needsUpdate=!0,this.lastTourShadowUpdate=a),this.lastFrameTime=a,this.controls.enabled&&this.controls.update(),this.lightBudget?.update(this.walkControls?.active?this.camera.position:this.controls.target);const l=performance.now();this.progressive.render()||this.renderer.render(this.scene,this.camera),this.frameMeasurements.push({delta:s,controls:l-a,draw:performance.now()-l}),this.frameMeasurements.length>120&&this.frameMeasurements.shift()}dispose(){this.disposed=!0,cancelAnimationFrame(this.frame),this.resizeObserver.disconnect(),this.walkControls?.dispose(),this.visitorTour?.dispose(),this.controls.dispose(),this.progressive?.dispose(),this.environment.dispose(),this.pmrem.dispose(),this.staticRender?.dispose(),this.model?.traverse(a=>{if(!a.isMesh)return;a.geometry.dispose(),(Array.isArray(a.material)?a.material:[a.material]).forEach(l=>{for(const o of Object.values(l))o?.isTexture&&o.dispose();l.dispose()})}),this.renderer.dispose(),this.renderer.domElement.remove()}}function tn({name:h,size:a=18}){const s={expand:V.createElement(V.Fragment,null,V.createElement("path",{d:"M8 3H3v5M16 3h5v5M3 16v5h5M21 16v5h-5"})),reset:V.createElement(V.Fragment,null,V.createElement("path",{d:"M3 10a9 9 0 1 1 1.8 8.1M3 4v6h6"})),enter:V.createElement(V.Fragment,null,V.createElement("path",{d:"M14 3h6v18h-6M3 12h12m-4-4 4 4-4 4"})),wall:V.createElement(V.Fragment,null,V.createElement("path",{d:"M3 20V4h18v16M3 12h18M9 4v8m6 0v8"})),ceiling:V.createElement(V.Fragment,null,V.createElement("path",{d:"m3 9 9-6 9 6-9 6-9-6Zm0 6 9 6 9-6"})),chevron:V.createElement("path",{d:"m8 10 4 4 4-4"}),light:V.createElement(V.Fragment,null,V.createElement("circle",{cx:"12",cy:"12",r:"3.7"}),V.createElement("path",{d:"M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5"})),close:V.createElement("path",{d:"m6 6 12 12M6 18 18 6"}),overview:V.createElement(V.Fragment,null,V.createElement("path",{d:"m3 7 9-4 9 4v10l-9 4-9-4V7Zm0 0 9 4 9-4M12 11v10"})),route:V.createElement(V.Fragment,null,V.createElement("circle",{cx:"5",cy:"5",r:"2"}),V.createElement("circle",{cx:"19",cy:"19",r:"2"}),V.createElement("path",{d:"M7 5h9a4 4 0 0 1 0 8H8a4 4 0 0 0 0 6h9"}))};return V.createElement("svg",{width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true"},s[h])}function bv({onMove:h,label:a,kind:s}){const[l,o]=Oe.useState({x:0,y:0}),f=Oe.useRef(null),c=Oe.useRef(h);c.current=h;function d(p){if(f.current!==p.pointerId)return;const y=p.currentTarget.getBoundingClientRect(),v=y.width*.32;let g=(p.clientX-y.left-y.width/2)/v,T=(p.clientY-y.top-y.height/2)/v;const _=Math.hypot(g,T);_>1&&(g/=_,T/=_),_<.08&&(g=0,T=0),o({x:g*v,y:T*v}),c.current(g,T)}function m(p){p&&f.current!==p.pointerId||(f.current=null,o({x:0,y:0}),c.current(0,0))}return Oe.useEffect(()=>{const p=()=>m(),y=()=>{document.hidden&&m()};return window.addEventListener("blur",p),document.addEventListener("visibilitychange",y),()=>{window.removeEventListener("blur",p),document.removeEventListener("visibilitychange",y),c.current(0,0)}},[]),V.createElement("div",{className:`joystick joystick-${s}`,role:"application","aria-label":a,onPointerDown:p=>{f.current!==null||p.pointerType==="mouse"&&p.button!==0||(p.preventDefault(),p.stopPropagation(),f.current=p.pointerId,p.currentTarget.setPointerCapture(p.pointerId),d(p))},onPointerMove:d,onPointerUp:m,onPointerCancel:m,onLostPointerCapture:m,onContextMenu:p=>p.preventDefault()},V.createElement("span",{className:"joystick-knob",style:{transform:`translate(${l.x}px, ${l.y}px)`}}),V.createElement("span",{className:"joystick-caption"},a))}function Zo({icon:h,children:a,pressed:s,...l}){return V.createElement("button",{className:`tool-button ${s?"is-pressed":""}`,"aria-pressed":s,...l},V.createElement(tn,{name:h}),V.createElement("span",null,a))}function ow(){const h=Oe.useRef(null),a=Oe.useRef(null),s=Oe.useRef(null),l=Oe.useRef(null),[o,f]=Oe.useState({state:"loading",message:"正在准备展馆"}),[c,d]=Oe.useState({rooms:[]}),[m,p]=Oe.useState({}),[y,v]=Oe.useState("overview"),[g,T]=Oe.useState(!1),[_,w]=Oe.useState(!0),[x,A]=Oe.useState(!1),[M,E]=Oe.useState("A"),[C,D]=Oe.useState(!1),[U,N]=Oe.useState(!1),[Y,P]=Oe.useState(""),[j,X]=Oe.useState(!1),[G,Z]=Oe.useState({enabled:!1,state:"realtime"}),[W,ne]=Oe.useState("full"),[K,ae]=Oe.useState(!1),[ie,oe]=Oe.useState(!1),de=[{id:"full",label:"完整展馆",detail:"自由查看当前场馆"},{id:"arrows",label:"箭头导览",detail:"跟随空间中的移动箭头"},{id:"people",label:"人物导览",detail:"虚拟参观者沿动线行走"}],Ce=o.state==="ready",at=c.rooms||[],ui=at.find(se=>se.id===y);Oe.useEffect(()=>{try{a.current=new rw(h.current,f,J=>{J.config&&d(J.config),J.capabilities&&p(J.capabilities),J.firstPerson!==void 0&&(X(J.firstPerson),J.firstPerson||T(!0)),J.lighting&&Z(J.lighting),J.selectedRoom&&v(J.selectedRoom),J.visitorMode&&ne(J.visitorMode),J.visitorReady!==void 0&&ae(J.visitorReady)}),a.current.load(),window.__museumViewer={inspect:()=>a.current?.inspect()}}catch(J){f({state:"error",message:J.message})}const se=()=>N(!!document.fullscreenElement);return document.addEventListener("fullscreenchange",se),()=>{a.current?.dispose(),delete window.__museumViewer,document.removeEventListener("fullscreenchange",se)}},[]),Oe.useEffect(()=>{if(!ie)return;const se=fe=>{l.current?.contains(fe.target)||oe(!1)},J=fe=>{fe.key==="Escape"&&(fe.stopPropagation(),oe(!1))};return document.addEventListener("pointerdown",se),document.addEventListener("keydown",J,!0),()=>{document.removeEventListener("pointerdown",se),document.removeEventListener("keydown",J,!0)}},[ie]);function gt(se){a.current?.setVisitorMode(se),oe(!1)}function st(se){v(se),T(!1);const J=j&&se!=="overview";A(J),a.current?.applyVisibility({ceilings:J}),se==="overview"?a.current?.overview():a.current?.room(se)}function _a(){a.current?.endWalk();const se=y==="overview"?at[0]?.id:y;se&&(v(se),T(!0),A(!!m.ceilings),a.current?.applyVisibility({ceilings:!!m.ceilings}),a.current?.room(se,!0))}function Ii(){const se=y==="overview"?at[0]?.id:y;se&&(v(se),A(!0),a.current?.startWalk(se))}function Hs(){gt("full"),v("overview"),T(!1),w(!0),A(!1),E("A"),a.current?.applyVisibility({walls:!0,ceilings:!1,scheme:"A"}),a.current?.overview()}async function jn(){try{document.fullscreenElement?await document.exitFullscreen():s.current.requestFullscreen?await s.current.requestFullscreen():(P("这个浏览器不支持全屏；可横屏查看空间。"),window.setTimeout(()=>P(""),4e3))}catch{P("全屏暂时不可用；可横屏查看空间。"),window.setTimeout(()=>P(""),4e3)}}return V.createElement("main",{className:`museum-app ${j?"is-walking":""}`,ref:s},V.createElement("header",{className:"app-header"},V.createElement("div",{className:"identity"},V.createElement("h1",null,c.title||"青海文学馆"),V.createElement("p",null,c.subtitle||"空间复原 · 交互浏览")),V.createElement("div",{className:"header-actions"},V.createElement("nav",{className:"project-links","aria-label":"天佑德项目导航"},V.createElement("a",{href:"../projects/"},"天佑德项目"),V.createElement("a",{href:"../digital-campus/#building"},"数字酒厂")),V.createElement("button",{className:"fullscreen-button","aria-label":U?"退出全屏":"全屏",onClick:jn},V.createElement(tn,{name:"expand"}),V.createElement("span",null,U?"退出全屏":"全屏")))),V.createElement("div",{className:"workspace"},V.createElement("nav",{className:"space-nav","aria-label":"空间导航"},V.createElement("h2",null,"空间导航"),V.createElement("div",{className:"room-list"},V.createElement("button",{className:`room-button ${y==="overview"?"selected":""}`,"aria-current":y==="overview"?"true":void 0,onClick:()=>st("overview"),disabled:!Ce},V.createElement("span",{className:"room-number"},V.createElement(tn,{name:"overview",size:15})),V.createElement("span",null,"全馆总览")),at.map((se,J)=>V.createElement("button",{key:se.id,className:`room-button ${y===se.id?"selected":""}`,"aria-current":y===se.id?"true":void 0,onClick:()=>st(se.id),disabled:!Ce},V.createElement("span",{className:"room-number"},String(J+1).padStart(2,"0")),V.createElement("span",null,se.label)))),V.createElement("div",{className:"space-detail"},V.createElement("div",{className:"detail-rule"}),V.createElement("p",{className:"selected-space"},y==="overview"?"全馆总览":ui?.label),V.createElement("p",{className:"space-description"},y==="overview"?"从整体布局开始，选择展区近距离浏览。":ui?.description||"选择进入空间，以人视角查看展陈。"),V.createElement("button",{className:"enter-button",onClick:g?()=>st(y):_a,disabled:!Ce||!at.length||j},V.createElement("span",null,g?"返回俯览":"人视角查看"),V.createElement(tn,{name:"enter"})),V.createElement("button",{className:"walk-button",onClick:j?()=>a.current?.endWalk():Ii,disabled:!Ce||!at.length},V.createElement(tn,{name:"enter"}),V.createElement("span",null,j?"退出漫游":"第一人称漫游")))),V.createElement("section",{className:"viewport","aria-label":"三维展馆"},V.createElement("div",{className:"canvas-mount",ref:h}),V.createElement("div",{className:"tour-control",ref:l},V.createElement("button",{className:`tour-toggle ${W!=="full"?"is-active":""}`,"aria-label":"动线模式","aria-haspopup":"true","aria-expanded":ie,disabled:!Ce||!K,onClick:()=>oe(!ie)},V.createElement(tn,{name:"route",size:16}),V.createElement("span",null,W==="full"?"动线模式":de.find(se=>se.id===W)?.label),V.createElement(tn,{name:"chevron",size:13})),ie&&V.createElement("div",{className:"tour-menu",role:"radiogroup","aria-label":"动线模式选择"},de.map(se=>V.createElement("button",{key:se.id,role:"radio","aria-checked":W===se.id,onClick:()=>gt(se.id)},V.createElement("span",{className:"tour-radio"}),V.createElement("span",null,V.createElement("strong",null,se.label),V.createElement("small",null,se.detail)))),V.createElement("p",null,"门厅 → 序厅 → A/B → 会客厅 → C → D → E → 休憩 → 咖啡 → 出口"))),V.createElement("div",{className:"viewport-toolbar","aria-label":"模型显示控制"},V.createElement(Zo,{icon:"wall",pressed:_,disabled:!Ce||!m.walls,onClick:()=>{w(!_),a.current?.applyVisibility({walls:!_})}},"墙面"),V.createElement(Zo,{icon:"ceiling",pressed:x,disabled:!Ce||!m.ceilings,onClick:()=>{A(!x),a.current?.applyVisibility({ceilings:!x})}},"顶面"),V.createElement("span",{className:"toolbar-divider"}),V.createElement(Zo,{icon:"reset",disabled:!Ce,onClick:Hs},"重置"),V.createElement("span",{className:"toolbar-divider"}),V.createElement(Zo,{icon:"light",pressed:G.enabled,disabled:!Ce||G.state==="unavailable"||W!=="full",title:W!=="full"?"动线演示使用实时光照":void 0,onClick:()=>a.current?.fineLighting(!G.enabled)},"精细光照")),V.createElement("div",{className:"viewport-bottom"},V.createElement("div",{className:"scheme-controls","aria-label":"雕塑方案选择"},["A","B"].map(se=>V.createElement("button",{key:se,disabled:!Ce||!m[`scheme${se}`],className:M===se?"active":"","aria-pressed":M===se,onClick:()=>{E(se),a.current?.applyVisibility({scheme:se})}},"方案 ",se))),V.createElement("p",{className:"gesture-hint"},V.createElement("span",{className:"desktop-hint"},j?"左侧行走 · 右侧转头":"拖拽旋转 · 滚轮缩放"),V.createElement("span",{className:"mobile-hint"},j?"左侧行走 · 右侧转头":"单指旋转 · 双指缩放"))),(G.enabled||G.state==="unavailable")&&V.createElement("p",{className:"lighting-status"},G.state==="unavailable"?"精细光照暂不可用，已保留实时显示":G.state==="tracing"?"精细光照正在细化":"移动时实时显示，停下后细化"),j&&V.createElement(V.Fragment,null,V.createElement("div",{className:"walk-status"},V.createElement("span",null,"左侧行走 · 右侧转头"),V.createElement("button",{onClick:()=>a.current?.endWalk()},"退出漫游")),V.createElement("div",{className:"walk-controls"},V.createElement(bv,{kind:"move",label:"行走摇杆",onMove:(se,J)=>a.current?.joystick(se,J)}),V.createElement(bv,{kind:"look",label:"转头摇杆",onMove:(se,J)=>a.current?.lookJoystick(se,J)}))),o.state!=="ready"&&V.createElement("div",{className:`loading-overlay ${o.state==="error"?"has-error":""}`,role:"status","aria-live":"polite"},V.createElement("div",{className:"loading-inner"},o.state==="loading"&&V.createElement("div",{className:"loader"}),V.createElement("p",null,o.message),o.progress!=null&&V.createElement("span",{className:"loading-progress"},o.progress,"%"),o.state==="error"&&V.createElement("button",{onClick:()=>window.location.reload()},"重新加载"))),Y&&V.createElement("div",{className:"notice",role:"status"},Y))),V.createElement("footer",{className:"app-footer"},V.createElement("p",null,"模型依据 ",c.source?.date||"2026.06.25"," 汇报方案"),V.createElement("button",{className:"source-toggle","aria-expanded":C,onClick:()=>D(!C)},"来源与复原说明",V.createElement(tn,{name:"chevron",size:15}))),C&&V.createElement("section",{className:"source-panel","aria-label":"来源与复原说明"},V.createElement("div",null,V.createElement("h2",null,"来源与复原说明"),V.createElement("p",null,c.source?.title||"《【汇报】青海文学馆2026.6.25》"),c.source?.pages&&V.createElement("p",{className:"source-pages"},"参考页码：",Array.isArray(c.source.pages)?c.source.pages.join("、"):c.source.pages),V.createElement("ul",null,(c.source?.notes||["根据室内平面与效果图建立展陈空间；模型用于空间浏览与方案复核。","未提供的尺寸、细部构造与材质按视觉资料近似复原，施工精度尚未核实。","资料未提供建筑外观；查看页展示室内展陈模型。"]).map((se,J)=>V.createElement("li",{key:J},se)))),V.createElement("button",{className:"source-close","aria-label":"关闭来源说明",onClick:()=>D(!1)},V.createElement(tn,{name:"close"}))))}WT.createRoot(document.getElementById("root")).render(V.createElement(ow,null));
