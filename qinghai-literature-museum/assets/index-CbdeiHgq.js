import{r as uv,g as Ib,a as Fb}from"./react-D-vXKkXw.js";import{T as Gb,a as rh,b as fv,L as Vb,c as Il,F as hv,M as zn,V as Re,C as jt,d as Jn,S as Ds,e as qb,P as wh,D as ch,f as Pe,g as Q,I as dv,Q as ql,h as Pb,O as Mh,i as jb,j as Yb,B as vt,k as Xb,l as mv,N as kb,m as Kb,n as Zb,o as Mt,p as Le,R as pn,q as Qb,r as $n,s as Wb,t as Hf,u as Jb,v as Yr,w as Rh,x as As,y as $b,z as Li,A as eT,E as Nn,G as tT,H as nT,J as iT,K as aT,U as If,W as Zr,X as Qr,Y as pv,Z as sT,_ as lT,$ as oT,a0 as rT,a1 as gv,a2 as cT,a3 as fg,a4 as hg,a5 as dg,a6 as mg,a7 as pg,a8 as Xr,a9 as uT,aa as Dt,ab as fT,ac as hT,ad as Ms,ae as Es,af as uh,ag as dT,ah as Dh,ai as Ch,aj as mT,ak as Nh,al as pT,am as gT,an as vT,ao as ei,ap as Ss,aq as vv,ar as Fl,as as ln,at as Ff,au as ut,av as fh,aw as yT,ax as gg,ay as bT,az as nt,aA as hh,aB as yv,aC as TT,aD as bv,aE as kr,aF as xT,aG as Cs,aH as vg,aI as Wr,aJ as Pl,aK as Gl,aL as Wn,aM as On,aN as ST,aO as _T,aP as AT,aQ as ET,aR as Tv,aS as xv,aT as wT,aU as MT,aV as RT,aW as DT,aX as CT,aY as NT,aZ as OT,a_ as zT}from"./three-CaMm-OCr.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))o(u);new MutationObserver(u=>{for(const f of u)if(f.type==="childList")for(const c of f.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function s(u){const f={};return u.integrity&&(f.integrity=u.integrity),u.referrerPolicy&&(f.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?f.credentials="include":u.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function o(u){if(u.ep)return;u.ep=!0;const f=s(u);fetch(u.href,f)}})();var qe=uv();const k=Ib(qe);var Gf={exports:{}},Ml={},Vf={exports:{}},qf={};var yg;function UT(){return yg||(yg=1,(function(h){function a(X,ne){var ie=X.length;X.push(ne);e:for(;0<ie;){var ue=ie-1>>>1,ge=X[ue];if(0<u(ge,ne))X[ue]=ne,X[ie]=ge,ie=ue;else break e}}function s(X){return X.length===0?null:X[0]}function o(X){if(X.length===0)return null;var ne=X[0],ie=X.pop();if(ie!==ne){X[0]=ie;e:for(var ue=0,ge=X.length,We=ge>>>1;ue<We;){var Yt=2*(ue+1)-1,oe=X[Yt],he=Yt+1,Ct=X[he];if(0>u(oe,ie))he<ge&&0>u(Ct,oe)?(X[ue]=Ct,X[he]=ie,ue=he):(X[ue]=oe,X[Yt]=ie,ue=Yt);else if(he<ge&&0>u(Ct,ie))X[ue]=Ct,X[he]=ie,ue=he;else break e}}return ne}function u(X,ne){var ie=X.sortIndex-ne.sortIndex;return ie!==0?ie:X.id-ne.id}if(h.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;h.unstable_now=function(){return f.now()}}else{var c=Date,d=c.now();h.unstable_now=function(){return c.now()-d}}var m=[],y=[],b=1,v=null,p=3,S=!1,_=!1,C=!1,x=!1,w=typeof setTimeout=="function"?setTimeout:null,M=typeof clearTimeout=="function"?clearTimeout:null,A=typeof setImmediate<"u"?setImmediate:null;function R(X){for(var ne=s(y);ne!==null;){if(ne.callback===null)o(y);else if(ne.startTime<=X)o(y),ne.sortIndex=ne.expirationTime,a(m,ne);else break;ne=s(y)}}function D(X){if(C=!1,R(X),!_)if(s(m)!==null)_=!0,H||(H=!0,G());else{var ne=s(y);ne!==null&&ee(D,ne.startTime-X)}}var H=!1,O=-1,j=5,V=-1;function Y(){return x?!0:!(h.unstable_now()-V<j)}function Z(){if(x=!1,H){var X=h.unstable_now();V=X;var ne=!0;try{e:{_=!1,C&&(C=!1,M(O),O=-1),S=!0;var ie=p;try{t:{for(R(X),v=s(m);v!==null&&!(v.expirationTime>X&&Y());){var ue=v.callback;if(typeof ue=="function"){v.callback=null,p=v.priorityLevel;var ge=ue(v.expirationTime<=X);if(X=h.unstable_now(),typeof ge=="function"){v.callback=ge,R(X),ne=!0;break t}v===s(m)&&o(m),R(X)}else o(m);v=s(m)}if(v!==null)ne=!0;else{var We=s(y);We!==null&&ee(D,We.startTime-X),ne=!1}}break e}finally{v=null,p=ie,S=!1}ne=void 0}}finally{ne?G():H=!1}}}var G;if(typeof A=="function")G=function(){A(Z)};else if(typeof MessageChannel<"u"){var K=new MessageChannel,J=K.port2;K.port1.onmessage=Z,G=function(){J.postMessage(null)}}else G=function(){w(Z,0)};function ee(X,ne){O=w(function(){X(h.unstable_now())},ne)}h.unstable_IdlePriority=5,h.unstable_ImmediatePriority=1,h.unstable_LowPriority=4,h.unstable_NormalPriority=3,h.unstable_Profiling=null,h.unstable_UserBlockingPriority=2,h.unstable_cancelCallback=function(X){X.callback=null},h.unstable_forceFrameRate=function(X){0>X||125<X?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<X?Math.floor(1e3/X):5},h.unstable_getCurrentPriorityLevel=function(){return p},h.unstable_next=function(X){switch(p){case 1:case 2:case 3:var ne=3;break;default:ne=p}var ie=p;p=ne;try{return X()}finally{p=ie}},h.unstable_requestPaint=function(){x=!0},h.unstable_runWithPriority=function(X,ne){switch(X){case 1:case 2:case 3:case 4:case 5:break;default:X=3}var ie=p;p=X;try{return ne()}finally{p=ie}},h.unstable_scheduleCallback=function(X,ne,ie){var ue=h.unstable_now();switch(typeof ie=="object"&&ie!==null?(ie=ie.delay,ie=typeof ie=="number"&&0<ie?ue+ie:ue):ie=ue,X){case 1:var ge=-1;break;case 2:ge=250;break;case 5:ge=1073741823;break;case 4:ge=1e4;break;default:ge=5e3}return ge=ie+ge,X={id:b++,callback:ne,priorityLevel:X,startTime:ie,expirationTime:ge,sortIndex:-1},ie>ue?(X.sortIndex=ie,a(y,X),s(m)===null&&X===s(y)&&(C?(M(O),O=-1):C=!0,ee(D,ie-ue))):(X.sortIndex=ge,a(m,X),_||S||(_=!0,H||(H=!0,G()))),X},h.unstable_shouldYield=Y,h.unstable_wrapCallback=function(X){var ne=p;return function(){var ie=p;p=ne;try{return X.apply(this,arguments)}finally{p=ie}}}})(qf)),qf}var bg;function BT(){return bg||(bg=1,Vf.exports=UT()),Vf.exports}var Tg;function LT(){if(Tg)return Ml;Tg=1;var h=BT(),a=uv(),s=Fb();function o(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function f(e){for(var t=e,n=t;n&&!n.alternate;)t=n,(t.flags&4098)!==0&&(e=t.return),n=t.return;for(;t.return;)t=t.return;return t.tag===3?e:null}function c(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function d(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function m(e){if(f(e)!==e)throw Error(o(188))}function y(e){var t=e.alternate;if(!t){if(t=f(e),t===null)throw Error(o(188));return t!==e?null:e}for(var n=e,i=t;;){var l=n.return;if(l===null)break;var r=l.alternate;if(r===null){if(i=l.return,i!==null){n=i;continue}break}if(l.child===r.child){for(r=l.child;r;){if(r===n)return m(l),e;if(r===i)return m(l),t;r=r.sibling}throw Error(o(188))}if(n.return!==i.return)n=l,i=r;else{for(var g=!1,T=l.child;T;){if(T===n){g=!0,n=l,i=r;break}if(T===i){g=!0,i=l,n=r;break}T=T.sibling}if(!g){for(T=r.child;T;){if(T===n){g=!0,n=r,i=l;break}if(T===i){g=!0,i=r,n=l;break}T=T.sibling}if(!g)throw Error(o(189))}}if(n.alternate!==i)throw Error(o(190))}if(n.tag!==3)throw Error(o(188));return n.stateNode.current===n?e:t}function b(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=b(e),t!==null)return t;e=e.sibling}return null}function v(e,t,n,i,l,r){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&n(e,i,l,r)||(e.tag!==22||e.memoizedState===null)&&(t||e.tag!==5&&e.tag!==27)&&v(e.child,t,n,i,l,r))return!0;e=e.sibling}return!1}function p(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function S(e){var t=!1;for(e=e.return;e!==null&&(e.tag===4&&(t=!0),!(e.tag===3||e.tag===5||e.tag===27));)e=e.return;return t}function _(e){var t=[null,null],n=p(e);return n===null||C(t,e,n.child,{foundSelf:!1}),t}function C(e,t,n,i){for(;n!==null;){if(n===t)i.foundSelf=!0;else if(n.tag===5||n.tag===27||n.tag===6){if(i.foundSelf)return e[1]=n,!0;e[0]=n}else if((n.tag!==22||n.memoizedState===null)&&C(e,t,n.child,i))return!0;n=n.sibling}return!1}function x(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(o(559))}}var w=null,M=null;function A(e,t,n){return e===n?!0:e===t?(w=e,!0):!1}function R(e,t,n){return e===n?(M=e,!1):e===t?(M!==null&&(w=e),!0):!1}function D(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function H(e,t,n){for(var i=0,l=e;l;l=n(l))i++;l=0;for(var r=t;r;r=n(r))l++;for(;0<i-l;)e=n(e),i--;for(;0<l-i;)t=n(t),l--;for(;i--;){if(e===t||t!==null&&e===t.alternate)return e;e=n(e),t=n(t)}return null}var O=Object.assign,j=Symbol.for("react.element"),V=Symbol.for("react.transitional.element"),Y=Symbol.for("react.portal"),Z=Symbol.for("react.fragment"),G=Symbol.for("react.strict_mode"),K=Symbol.for("react.profiler"),J=Symbol.for("react.consumer"),ee=Symbol.for("react.context"),X=Symbol.for("react.forward_ref"),ne=Symbol.for("react.suspense"),ie=Symbol.for("react.suspense_list"),ue=Symbol.for("react.memo"),ge=Symbol.for("react.lazy"),We=Symbol.for("react.activity"),Yt=Symbol.for("react.legacy_hidden"),oe=Symbol.for("react.memo_cache_sentinel"),he=Symbol.for("react.view_transition"),Ct=Symbol.for("react.recoverable"),jl=Symbol.iterator;function Fi(e){return e===null||typeof e!="object"?null:(e=jl&&e[jl]||e["@@iterator"],typeof e=="function"?e:null)}var ec=Symbol.for("react.client.reference");function Os(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ec?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Z:return"Fragment";case K:return"Profiler";case G:return"StrictMode";case ne:return"Suspense";case ie:return"SuspenseList";case We:return"Activity";case he:return"ViewTransition"}if(typeof e=="object")switch(e.$$typeof){case Y:return"Portal";case ee:return e.displayName||"Context";case J:return(e._context.displayName||"Context")+".Consumer";case X:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ue:return t=e.displayName||null,t!==null?t:Os(e.type)||"Memo";case ge:t=e._payload,e=e._init;try{return Os(e(t))}catch{}}return null}var Gi=Array.isArray,se=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,be=s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Vi={pending:!1,data:null,method:null,action:null},tc=[],Ta=-1;function vn(e){return{current:e}}function it(e){0>Ta||(e.current=tc[Ta],tc[Ta]=null,Ta--)}function Ne(e,t){Ta++,tc[Ta]=e.current,e.current=t}var yn=vn(null),zs=vn(null),ni=vn(null),Yl=vn(null);function Xl(e,t){switch(Ne(ni,t),Ne(zs,e),Ne(yn,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?T0(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=T0(t),e=x0(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}it(yn),Ne(yn,e)}function xa(){it(yn),it(zs),it(ni)}function nc(e){var t=e.memoizedState;t!==null&&(rs._currentValue=t.memoizedState,Ne(Yl,e)),t=yn.current;var n=x0(t,e.type);t!==n&&(Ne(zs,e),Ne(yn,n))}function kl(e){zs.current===e&&(it(yn),it(zs)),Yl.current===e&&(it(Yl),rs._currentValue=Vi)}var ic,Vh;function ii(e){if(ic===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ic=t&&t[1]||"",Vh=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ic+e+Vh}var ac=!1;function sc(e,t){if(!e||ac)return"";ac=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var P=function(){throw Error()};if(Object.defineProperty(P.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(P,[])}catch(W){var z=W}Reflect.construct(e,[],P)}else{try{P.call()}catch(W){z=W}P=!1;try{var I=Object.getOwnPropertyDescriptor(e.prototype,"props");Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),P=!0,new e}finally{P&&(I!==void 0?Object.defineProperty(e.prototype,"props",I):delete e.prototype.props)}}}else{try{throw Error()}catch(W){z=W}(P=e())&&typeof P.catch=="function"&&P.catch(function(){})}}catch(W){if(W&&z&&typeof W.stack=="string")return[W.stack,z.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=i.DetermineComponentFrameRoot(),g=r[0],T=r[1];if(g&&T){var E=g.split(`
`),B=T.split(`
`);for(l=i=0;i<E.length&&!E[i].includes("DetermineComponentFrameRoot");)i++;for(;l<B.length&&!B[l].includes("DetermineComponentFrameRoot");)l++;if(i===E.length||l===B.length)for(i=E.length-1,l=B.length-1;1<=i&&0<=l&&E[i]!==B[l];)l--;for(;1<=i&&0<=l;i--,l--)if(E[i]!==B[l]){if(i!==1||l!==1)do if(i--,l--,0>l||E[i]!==B[l]){var F=`
`+E[i].replace(" at new "," at ");return e.displayName&&F.includes("<anonymous>")&&(F=F.replace("<anonymous>",e.displayName)),F}while(1<=i&&0<=l);break}}}finally{ac=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?ii(n):""}function qv(e,t){switch(e.tag){case 26:case 27:case 5:return ii(e.type);case 16:return ii("Lazy");case 13:return e.child!==t&&t!==null?ii("Suspense Fallback"):ii("Suspense");case 19:return ii("SuspenseList");case 0:case 15:return sc(e.type,!1);case 11:return sc(e.type.render,!1);case 1:return sc(e.type,!0);case 31:return ii("Activity");case 30:return ii("ViewTransition");default:return""}}function qh(e){try{var t="",n=null;do t+=qv(e,n),n=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var lc=Object.prototype.hasOwnProperty,oc=h.unstable_scheduleCallback,rc=h.unstable_cancelCallback,Pv=h.unstable_shouldYield,jv=h.unstable_requestPaint,Nt=h.unstable_now,Yv=h.unstable_getCurrentPriorityLevel,Ph=h.unstable_ImmediatePriority,jh=h.unstable_UserBlockingPriority,Kl=h.unstable_NormalPriority,Xv=h.unstable_LowPriority,Yh=h.unstable_IdlePriority,kv=h.log,Kv=h.unstable_setDisableYieldValue,Us=null,Ot=null;function ai(e){if(typeof kv=="function"&&Kv(e),Ot&&typeof Ot.setStrictMode=="function")try{Ot.setStrictMode(Us,e)}catch{}}var zt=Math.clz32?Math.clz32:Wv,Zv=Math.log,Qv=Math.LN2;function Wv(e){return e>>>=0,e===0?32:31-(Zv(e)/Qv|0)|0}var Zl=256,Ql=262144,Wl=4194304;function qi(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Jl(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var l=0,r=e.suspendedLanes,g=e.pingedLanes;e=e.warmLanes;var T=i&134217727;return T!==0?(i=T&~r,i!==0?l=qi(i):(g&=T,g!==0?l=qi(g):n||(n=T&~e,n!==0&&(l=qi(n))))):(T=i&~r,T!==0?l=qi(T):g!==0?l=qi(g):n||(n=i&~e,n!==0&&(l=qi(n)))),l===0?0:t!==0&&t!==l&&(t&r)===0&&(r=l&-l,n=t&-t,r>=n||r===32&&(n&4194048)!==0)?t:l}function Bs(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Xh(e,t){(t&8)!==0&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var i=31-zt(n),l=1<<i;t|=e[i],n&=~l}return t}function Jv(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function kh(){var e=Wl;return Wl<<=1,(Wl&62914560)===0&&(Wl=4194304),e}function cc(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ls(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function $v(e,t,n,i,l,r){var g=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var T=e.entanglements,E=e.expirationTimes,B=e.hiddenUpdates;for(n=g&~n;0<n;){var F=31-zt(n),P=1<<F;T[F]=0,E[F]=-1;var z=B[F];if(z!==null)for(B[F]=null,F=0;F<z.length;F++){var I=z[F];I!==null&&(I.lane&=-536870913)}n&=~P}i!==0&&Kh(e,i,0),r!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=r&~(g&~t))}function Kh(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-zt(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&261930}function Zh(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-zt(n),l=1<<i;l&t|e[i]&t&&(e[i]|=t),n&=~l}}function Qh(e,t){var n=t&-t;return n=(n&42)!==0?1:uc(n),(n&(e.suspendedLanes|t))!==0?0:n}function uc(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function fc(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Wh(){var e=be.p;return e!==0?e:(e=window.event,e===void 0?32:ag(e.type))}function Jh(e,t){var n=be.p;try{return be.p=e,t()}finally{be.p=n}}var Un=Math.random().toString(36).slice(2),at="__reactFiber$"+Un,bt="__reactProps$"+Un,Sa="__reactContainer$"+Un,$h="__reactEvents$"+Un,ey="__reactListeners$"+Un,ty="__reactHandles$"+Un,ed="__reactResources$"+Un,Hs="__reactMarker$"+Un,$l="__reactLoad$"+Un;function eo(e){delete e[at],delete e[bt],delete e[ey],delete e[ty]}function Pi(e){var t;if(t=e[at])return t;for(var n=e.parentNode;n;){if(t=n[Sa]||n[at]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=I0(e);e!==null;){if(n=e[at])return n;e=I0(e)}return t}e=n,n=e.parentNode}return null}function _a(e){if(e=e[at]||e[Sa]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Is(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(o(33))}function Aa(e){var t=e[ed];return t||(t=e[ed]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Je(e){e[Hs]=!0}function td(e){e[$l]=void 0}var nd=new Set,id={};function ji(e,t){Ea(e,t),Ea(e+"Capture",t)}function Ea(e,t){for(id[e]=t,e=0;e<t.length;e++)nd.add(t[e])}var ny=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ad={},sd={};function iy(e){return lc.call(sd,e)?!0:lc.call(ad,e)?!1:ny.test(e)?sd[e]=!0:(ad[e]=!0,!1)}var xe=!1;function ld(){var e=xe;return xe=!1,e}function to(e,t,n){if(iy(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,n)}}function no(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,n)}}function Bn(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,i)}}function Ut(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function od(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function ay(e,t,n){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var l=i.get,r=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(g){n=""+g,r.call(this,g)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(g){n=""+g},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function hc(e){if(!e._valueTracker){var t=od(e)?"checked":"value";e._valueTracker=ay(e,t,""+e[t])}}function rd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=od(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}var sy=/[\n"\\]/g;function Xt(e){return e.replace(sy,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function dc(e,t,n,i,l,r,g,T){e.name="",g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?e.type=g:e.removeAttribute("type"),t!=null?g==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Ut(t)):e.value!==""+Ut(t)&&(e.value=""+Ut(t)):g!=="submit"&&g!=="reset"||e.removeAttribute("value"),t!=null?g==="number"&&e.value==t?mc(e,Ut(e.value)):mc(e,Ut(t)):n!=null?mc(e,Ut(n)):i!=null&&e.removeAttribute("value"),l==null&&r!=null&&(e.defaultChecked=!!r),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?e.name=""+Ut(T):e.removeAttribute("name")}function cd(e,t,n,i,l,r,g,T){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.type=r),t!=null||n!=null){if(!(r!=="submit"&&r!=="reset"||t!=null)){hc(e);return}n=n!=null?""+Ut(n):"",t=t!=null?""+Ut(t):n,T||t===e.value||(e.value=t),e.defaultValue=t}i=i??l,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=T?e.checked:!!i,e.defaultChecked=!!i,g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(e.name=g),hc(e)}function mc(e,t){e.defaultValue!==""+t&&(e.defaultValue=""+t)}function wa(e,t,n,i){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&i&&(e[n].defaultSelected=!0)}else{for(n=""+Ut(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,i&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function ud(e,t,n){if(t!=null&&(t=""+Ut(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Ut(n):""}function fd(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(o(92));if(Gi(i)){if(1<i.length)throw Error(o(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=Ut(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i),hc(e)}function Ma(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ly=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function hd(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||ly.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function dd(e,t,n){if(t!=null&&typeof t!="object")throw Error(o(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="",xe=!0);for(var l in t)i=t[l],t.hasOwnProperty(l)&&n[l]!==i&&(hd(e,l,i),xe=!0)}else for(var r in t)t.hasOwnProperty(r)&&hd(e,r,t[r])}function pc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var oy=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),ry=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function io(e){return ry.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function bn(){}var gc=null;function vc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ra=null,Da=null;function md(e){var t=_a(e);if(t&&(e=t.stateNode)){var n=e[bt]||null;e:switch(e=t.stateNode,t.type){case"input":if(dc(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Xt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var l=i[bt]||null;if(!l)throw Error(o(90));dc(i,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&rd(i)}break e;case"textarea":ud(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&wa(e,!!n.multiple,t,!1)}}}var yc=!1;function pd(e,t,n){if(yc)return e(t,n);yc=!0;try{var i=e(t);return i}finally{if(yc=!1,(Ra!==null||Da!==null)&&(ar(),Ra&&(t=Ra,e=Da,Da=Ra=null,md(t),e)))for(t=0;t<e.length;t++)md(e[t])}}function Fs(e,t){var n=e.stateNode;if(n===null)return null;var i=n[bt]||null;if(i===null)return null;n=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(o(231,t,typeof n));return n}var Ln=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),bc=!1;if(Ln)try{var Gs={};Object.defineProperty(Gs,"passive",{get:function(){bc=!0}}),window.addEventListener("test",Gs,Gs),window.removeEventListener("test",Gs,Gs)}catch{bc=!1}var si=null,Tc=null,ao=null;function gd(){if(ao)return ao;var e,t=Tc,n=t.length,i,l="value"in si?si.value:si.textContent,r=l.length;for(e=0;e<n&&t[e]===l[e];e++);var g=n-e;for(i=1;i<=g&&t[n-i]===l[r-i];i++);return ao=l.slice(e,1<i?1-i:void 0)}function so(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function lo(){return!0}function vd(){return!1}function ht(e){function t(n,i,l,r,g){this._reactName=n,this._targetInst=l,this.type=i,this.nativeEvent=r,this.target=g,this.currentTarget=null;for(var T in e)e.hasOwnProperty(T)&&(n=e[T],this[T]=n?n(r):r[T]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?lo:vd,this.isPropagationStopped=vd,this}return O(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=lo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=lo)},persist:function(){},isPersistent:lo}),t}var li={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},oo=ht(li),Vs=O({},li,{view:0,detail:0}),cy=ht(Vs),xc,Sc,qs,ro=O({},Vs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ac,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==qs&&(qs&&e.type==="mousemove"?(xc=e.screenX-qs.screenX,Sc=e.screenY-qs.screenY):Sc=xc=0,qs=e),xc)},movementY:function(e){return"movementY"in e?e.movementY:Sc}}),yd=ht(ro),uy=O({},ro,{dataTransfer:0}),fy=ht(uy),hy=O({},Vs,{relatedTarget:0}),_c=ht(hy),dy=O({},li,{animationName:0,elapsedTime:0,pseudoElement:0}),my=ht(dy),py=O({},li,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),gy=ht(py),vy=O({},li,{data:0}),bd=ht(vy),yy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},by={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ty={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function xy(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Ty[e])?!!t[e]:!1}function Ac(){return xy}var Sy=O({},Vs,{key:function(e){if(e.key){var t=yy[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=so(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?by[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ac,charCode:function(e){return e.type==="keypress"?so(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?so(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),_y=ht(Sy),Ay=O({},ro,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Td=ht(Ay),Ey=O({},li,{submitter:0}),wy=ht(Ey),My=O({},Vs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ac}),Ry=ht(My),Dy=O({},li,{propertyName:0,elapsedTime:0,pseudoElement:0}),Cy=ht(Dy),Ny=O({},ro,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Oy=ht(Ny),zy=O({},li,{newState:0,oldState:0,source:0}),Uy=ht(zy),By=[9,13,27,32],Ec=Ln&&"CompositionEvent"in window,Ps=null;Ln&&"documentMode"in document&&(Ps=document.documentMode);var Ly=Ln&&"TextEvent"in window&&!Ps,xd=Ln&&(!Ec||Ps&&8<Ps&&11>=Ps),Sd=" ",_d=!1;function Ad(e,t){switch(e){case"keyup":return By.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ed(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ca=!1;function Hy(e,t){switch(e){case"compositionend":return Ed(t);case"keypress":return t.which!==32?null:(_d=!0,Sd);case"textInput":return e=t.data,e===Sd&&_d?null:e;default:return null}}function Iy(e,t){if(Ca)return e==="compositionend"||!Ec&&Ad(e,t)?(e=gd(),ao=Tc=si=null,Ca=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return xd&&t.locale!=="ko"?null:t.data;default:return null}}var Fy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function wd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Fy[e.type]:t==="textarea"}function Md(e,t,n,i){Ra?Da?Da.push(i):Da=[i]:Ra=i,t=ur(t,"onChange"),0<t.length&&(n=new oo("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var js=null,Ys=null;function Gy(e){m0(e,0)}function co(e){var t=Is(e);if(rd(t))return e}function Rd(e,t){if(e==="change")return t}var Dd=!1;if(Ln){var wc;if(Ln){var Mc="oninput"in document;if(!Mc){var Cd=document.createElement("div");Cd.setAttribute("oninput","return;"),Mc=typeof Cd.oninput=="function"}wc=Mc}else wc=!1;Dd=wc&&(!document.documentMode||9<document.documentMode)}function Nd(){js&&(js.detachEvent("onpropertychange",Od),Ys=js=null)}function Od(e){if(e.propertyName==="value"&&co(Ys)){var t=[];Md(t,Ys,e,vc(e)),pd(Gy,t)}}function Vy(e,t,n){e==="focusin"?(Nd(),js=t,Ys=n,js.attachEvent("onpropertychange",Od)):e==="focusout"&&Nd()}function qy(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return co(Ys)}function Py(e,t){if(e==="click")return co(t)}function jy(e,t){if(e==="input"||e==="change")return co(t)}function Yy(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Bt=typeof Object.is=="function"?Object.is:Yy;function Xs(e,t){if(Bt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var l=n[i];if(!lc.call(t,l)||!Bt(e[l],t[l]))return!1}return!0}function Rc(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function zd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ud(e,t){var n=zd(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=zd(n)}}function Bd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Bd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ld(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Rc(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Rc(e.document)}return t}function Dc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Xy=Ln&&"documentMode"in document&&11>=document.documentMode,Na=null,Cc=null,ks=null,Nc=!1;function Hd(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Nc||Na==null||Na!==Rc(i)||(i=Na,"selectionStart"in i&&Dc(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ks&&Xs(ks,i)||(ks=i,i=ur(Cc,"onSelect"),0<i.length&&(t=new oo("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=Na)))}function Yi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Oa={animationend:Yi("Animation","AnimationEnd"),animationiteration:Yi("Animation","AnimationIteration"),animationstart:Yi("Animation","AnimationStart"),transitionrun:Yi("Transition","TransitionRun"),transitionstart:Yi("Transition","TransitionStart"),transitioncancel:Yi("Transition","TransitionCancel"),transitionend:Yi("Transition","TransitionEnd")},Oc={},Id={};Ln&&(Id=document.createElement("div").style,"AnimationEvent"in window||(delete Oa.animationend.animation,delete Oa.animationiteration.animation,delete Oa.animationstart.animation),"TransitionEvent"in window||delete Oa.transitionend.transition);function Xi(e){if(Oc[e])return Oc[e];if(!Oa[e])return e;var t=Oa[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Id)return Oc[e]=t[n];return e}var Fd=Xi("animationend"),Gd=Xi("animationiteration"),Vd=Xi("animationstart"),ky=Xi("transitionrun"),Ky=Xi("transitionstart"),Zy=Xi("transitioncancel"),qd=Xi("transitionend"),Pd=new Map,zc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");zc.push("scrollEnd");function on(e,t){Pd.set(e,t),ji(t,[e])}var Qy=0;function Hn(e,t){if(e.name!=null&&e.name!=="auto")return e.name;if(t.autoName!==null)return t.autoName;e=fn.identifierPrefix;var n=Qy++;return e="_"+e+"t_"+n.toString(32)+"_",t.autoName=e}function jd(e){if(e==null||typeof e=="string")return e;var t=null,n=Ja;if(n!==null)for(var i=0;i<n.length;i++){var l=e[n[i]];if(l!=null){if(l==="none")return"none";t=t==null?l:t+(" "+l)}}return t??e.default}function In(e,t){return e=jd(e),t=jd(t),t==null?e==="auto"?null:e:t==="auto"?null:t}var uo=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},kt=[],za=0,Uc=0;function fo(){for(var e=za,t=Uc=za=0;t<e;){var n=kt[t];kt[t++]=null;var i=kt[t];kt[t++]=null;var l=kt[t];kt[t++]=null;var r=kt[t];if(kt[t++]=null,i!==null&&l!==null){var g=i.pending;g===null?l.next=l:(l.next=g.next,g.next=l),i.pending=l}r!==0&&Yd(n,l,r)}}function ho(e,t,n,i){kt[za++]=e,kt[za++]=t,kt[za++]=n,kt[za++]=i,Uc|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function Bc(e,t,n,i){return ho(e,t,n,i),mo(e)}function ki(e,t){return ho(e,null,null,t),mo(e)}function Yd(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var l=!1,r=e.return;r!==null;)r.childLanes|=n,i=r.alternate,i!==null&&(i.childLanes|=n),r.tag===22&&(e=r.stateNode,e===null||e._visibility&1||(l=!0)),e=r,r=r.return;return e.tag===3?(r=e.stateNode,l&&t!==null&&(l=31-zt(n),e=r.hiddenUpdates,i=e[l],i===null?e[l]=[t]:i.push(t),t.lane=n|536870912),r):null}function mo(e){if(50<pl)throw pl=0,ir=null,Error(o(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Ua={};function Wy(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Tt(e,t,n,i){return new Wy(e,t,n,i)}function Lc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Fn(e,t){var n=e.alternate;return n===null?(n=Tt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&1206910976,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Xd(e,t){e.flags&=1206910978;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function po(e,t,n,i,l,r){var g=0;if(i=e,typeof i=="function")Lc(i)&&(g=1);else if(typeof i=="string")g=Eb(e,n,yn.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(i){case We:return e=Tt(31,n,t,l),e.elementType=We,e.lanes=r,e;case Z:return Ki(n.children,l,r,t);case G:g=8,l|=24;break;case K:return e=Tt(12,n,t,l|2),e.elementType=K,e.lanes=r,e;case ne:return e=Tt(13,n,t,l),e.elementType=ne,e.lanes=r,e;case ie:return e=Tt(19,n,t,l),e.elementType=ie,e.lanes=r,e;case Yt:case he:return e=l|32,e=Tt(30,n,t,e),e.elementType=he,e.lanes=r,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case ee:g=10;break e;case J:g=9;break e;case X:g=11;break e;case ue:g=14;break e;case ge:g=16,i=null;break e}g=29,n=Error(o(130,e===null?"null":typeof e,"")),i=null}return t=Tt(g,n,t,l),t.elementType=e,t.type=i,t.lanes=r,t}function Ki(e,t,n,i){return e=Tt(7,e,i,t),e.lanes=n,e}function Hc(e,t,n){return e=Tt(6,e,null,t),e.lanes=n,e}function kd(e){var t=Tt(18,null,null,0);return t.stateNode=e,t}function Ic(e,t,n){return t=Tt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Kd=new WeakMap;function Kt(e,t){if(typeof e=="object"&&e!==null){var n=Kd.get(e);return n!==void 0?n:(t={value:e,source:t,stack:qh(t)},Kd.set(e,t),t)}return{value:e,source:t,stack:qh(t)}}var Ba=[],La=0,go=null,Ks=0,Zt=[],Qt=0,oi=null,Tn=1,xn="";function Gn(e,t){Ba[La++]=Ks,Ba[La++]=go,go=e,Ks=t}function Zd(e,t,n){Zt[Qt++]=Tn,Zt[Qt++]=xn,Zt[Qt++]=oi,oi=e;var i=Tn;e=xn;var l=32-zt(i)-1;i&=~(1<<l),n+=1;var r=32-zt(t)+l;if(30<r){var g=l-l%5;r=(i&(1<<g)-1).toString(32),i>>=g,l-=g,Tn=1<<32-zt(t)+l|n<<l|i,xn=r+e}else Tn=1<<r|n<<l|i,xn=e}function vo(e){e.return!==null&&(Gn(e,1),Zd(e,1,0))}function Fc(e){for(;e===go;)go=Ba[--La],Ba[La]=null,Ks=Ba[--La],Ba[La]=null;for(;e===oi;)oi=Zt[--Qt],Zt[Qt]=null,xn=Zt[--Qt],Zt[Qt]=null,Tn=Zt[--Qt],Zt[Qt]=null}function Qd(e,t){Zt[Qt++]=Tn,Zt[Qt++]=xn,Zt[Qt++]=oi,Tn=t.id,xn=t.overflow,oi=e}var $e=null,Oe=null,fe=!1,ri=null,Wt=!1,Gc=Error(o(519));function ci(e){var t=Error(o(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Zs(Kt(t,e)),Gc}function Wd(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[at]=e,t[bt]=i,n){case"dialog":me("cancel",t),me("close",t);break;case"iframe":case"object":case"embed":me("load",t);break;case"video":case"audio":for(n=0;n<vl.length;n++)me(vl[n],t);break;case"source":me("error",t);break;case"img":case"image":case"link":me("error",t),me("load",t);break;case"details":me("toggle",t);break;case"input":me("invalid",t),cd(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":me("invalid",t);break;case"textarea":me("invalid",t),fd(t,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||y0(t.textContent,n)?(i.popover!=null&&(me("beforetoggle",t),me("toggle",t)),i.onScroll!=null&&me("scroll",t),i.onScrollEnd!=null&&me("scrollend",t),i.onClick!=null&&(t.onclick=bn),t=!0):t=!1,t||ci(e,!0)}function yo(e){for($e=e.return;$e;)switch($e.tag){case 5:case 31:case 13:Wt=!1;return;case 27:case 3:Wt=!0;return;default:$e=$e.return}}function Ha(e){if(e!==$e)return!1;if(!fe)return yo(e),fe=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||vf(e.type,e.memoizedProps)),n=!n),n&&Oe&&ci(e),yo(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));Oe=H0(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));Oe=H0(e)}else t===27?(t=Oe,Ei(e.type)?(e=wf,wf=null,Oe=e):Oe=t):Oe=$e?$t(e.stateNode.nextSibling):null;return!0}function Zi(){Oe=$e=null,fe=!1}function Vc(){var e=ri;return e!==null&&(_t===null?_t=e:_t.push.apply(_t,e),ri=null),e}function Zs(e){ri===null?ri=[e]:ri.push(e)}var qc=vn(null),Qi=null,Vn=null;function ui(e,t,n){Ne(qc,t._currentValue),t._currentValue=n}function qn(e){e._currentValue=qc.current,it(qc)}function bo(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function Pc(e,t,n,i){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var r=l.dependencies;if(r!==null){var g=l.child;r=r.firstContext;e:for(;r!==null;){var T=r;r=l;for(var E=0;E<t.length;E++)if(T.context===t[E]){r.lanes|=n,T=r.alternate,T!==null&&(T.lanes|=n),bo(r.return,n,e),i||(g=null);break e}r=T.next}}else if(l.tag===18){if(g=l.return,g===null)throw Error(o(341));g.lanes|=n,r=g.alternate,r!==null&&(r.lanes|=n),bo(g,n,e),g=null}else l.tag===13&&l.memoizedState!==null&&l.memoizedState.dehydrated===null?(l.lanes|=n,g=l.alternate,g!==null&&(g.lanes|=n),bo(l.return,n,e),g=l.child,g=g!==null?g.sibling:null):g=l.child;if(g!==null)g.return=l;else for(g=l;g!==null;){if(g===e){g=null;break}if(l=g.sibling,l!==null){l.return=g.return,g=l;break}g=g.return}l=g}}function Wi(e,t,n,i){e=null;for(var l=t,r=!1;l!==null;){if(!r){if((l.flags&524288)!==0)r=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var g=l.alternate;if(g===null)throw Error(o(387));if(g=g.memoizedProps,g!==null){var T=l.type;Bt(l.pendingProps.value,g.value)||(e!==null?e.push(T):e=[T])}}else if(l===Yl.current){if(g=l.alternate,g===null)throw Error(o(387));g.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(rs):e=[rs])}l=l.return}return e!==null&&Pc(t,e,n,i),t.flags|=262144,e!==null}function To(e){for(e=e.firstContext;e!==null;){if(!Bt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ji(e){Qi=e,Vn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function st(e){return Jd(Qi,e)}function xo(e,t){return Qi===null&&Ji(e),Jd(e,t)}function Jd(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Vn===null){if(e===null)throw Error(o(308));Vn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Vn=Vn.next=t;return n}var Jy=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},$y=h.unstable_scheduleCallback,e1=h.unstable_NormalPriority,je={$$typeof:ee,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function jc(){return{controller:new Jy,data:new Map,refCount:0}}function Qs(e){e.refCount--,e.refCount===0&&$y(e1,function(){e.controller.abort()})}function $d(e,t){if((e.pendingLanes&4194048)!==0){var n=e.transitionTypes;for(n===null&&(n=e.transitionTypes=[]),e=0;e<t.length;e++){var i=t[e];n.indexOf(i)===-1&&n.push(i)}}}var Ws=null;function t1(e){var t=e.transitionTypes;return e.transitionTypes=null,t}var Js=null,Yc=0,$i=0,Ia=null;function n1(e,t){if(Js===null){var n=Js=[];Yc=0,$i=rf(),Ia={status:"pending",value:void 0,then:function(i){n.push(i)}}}return Yc++,t.then(em,em),t}function em(){if(--Yc===0&&(Ws=null,Js!==null)){Ia!==null&&(Ia.status="fulfilled");var e=Js;Js=null,$i=0,Ia=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function i1(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(l){n.push(l)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var l=0;l<n.length;l++)(0,n[l])(t)},function(l){for(i.status="rejected",i.reason=l,l=0;l<n.length;l++)(0,n[l])(void 0)}),i}var tm=se.S;se.S=function(e,t){if(kp=Nt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&n1(e,t),Ws!==null)for(var n=ns;n!==null;)$d(n,Ws),n=n.next;if(n=e.types,n!==null){for(var i=ns;i!==null;)$d(i,n),i=i.next;if($i!==0){i=Ws,i===null&&(i=Ws=[]);for(var l=0;l<n.length;l++){var r=n[l];i.indexOf(r)===-1&&i.push(r)}}}tm!==null&&tm(e,t)};var ea=vn(null);function Xc(){var e=ea.current;return e!==null?e:Ce.pooledCache}function So(e,t){t===null?Ne(ea,ea.current):Ne(ea,t.pool)}function nm(){var e=Xc();return e===null?null:{parent:je._currentValue,pool:e}}var Fa=Error(o(460)),kc=Error(o(474)),_o=Error(o(542)),Ao={then:function(){}};function im(e){return e=e.status,e==="fulfilled"||e==="rejected"}function am(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(bn,bn),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,lm(e),e===void 0&&!("reason"in t)?Error(o(600)):e;default:if(typeof t.status=="string")t.then(bn,bn);else{if(e=Ce,e!==null&&100<e.shellSuspendCounter)throw Error(o(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var l=t;l.status="fulfilled",l.value=i}},function(i){if(t.status==="pending"){var l=t;l.status="rejected",l.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,lm(e),e}throw na=t,Fa}}function ta(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(na=n,Fa):n}}var na=null;function sm(){if(na===null)throw Error(o(459));var e=na;return na=null,e}function lm(e){if(e===Fa||e===_o)throw Error(o(483))}var Ga=null,$s=0;function Eo(e){var t=$s;return $s+=1,Ga===null&&(Ga=[]),am(Ga,e,t)}function fi(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function wo(e,t){throw t.$$typeof===j?Error(o(525)):(e=Object.prototype.toString.call(t),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function om(e){function t(U,N){if(e){var L=U.deletions;L===null?(U.deletions=[N],U.flags|=16):L.push(N)}}function n(U,N){if(!e)return null;for(;N!==null;)t(U,N),N=N.sibling;return null}function i(U){for(var N=new Map;U!==null;)U.key===null?N.set(U.index,U):N.set(U.key,U),U=U.sibling;return N}function l(U,N){return U=Fn(U,N),U.index=0,U.sibling=null,U}function r(U,N,L){return U.index=L,e?(L=U.alternate,L!==null?(L=L.index,L<N?(U.flags|=2,N):L):(U.flags|=134217730,N)):(U.flags|=1048576,N)}function g(U){return e&&U.alternate===null&&(U.flags|=134217730),U}function T(U,N,L,q){return N===null||N.tag!==6?(N=Hc(L,U.mode,q),N.return=U,N):(N=l(N,L),N.return=U,N)}function E(U,N,L,q){var $=L.type;return $===Z?(U=F(U,N,L.props.children,q,L.key),fi(U,L),U):N!==null&&(N.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===ge&&ta($)===N.type)?(N=l(N,L.props),fi(N,L),N.return=U,N):(N=po(L.type,L.key,L.props,null,U.mode,q),fi(N,L),N.return=U,N)}function B(U,N,L,q){return N===null||N.tag!==4||N.stateNode.containerInfo!==L.containerInfo||N.stateNode.implementation!==L.implementation?(N=Ic(L,U.mode,q),N.return=U,N):(N=l(N,L.children||[]),N.return=U,N)}function F(U,N,L,q,$){return N===null||N.tag!==7?(N=Ki(L,U.mode,q,$),N.return=U,N):(N=l(N,L),N.return=U,N)}function P(U,N,L){if(typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint")return N=Hc(""+N,U.mode,L),N.return=U,N;if(typeof N=="object"&&N!==null){switch(N.$$typeof){case V:return L=po(N.type,N.key,N.props,null,U.mode,L),fi(L,N),L.return=U,L;case Y:return N=Ic(N,U.mode,L),N.return=U,N;case ge:return N=ta(N),P(U,N,L)}if(Gi(N)||Fi(N))return N=Ki(N,U.mode,L,null),N.return=U,N;if(typeof N.then=="function")return P(U,Eo(N),L);if(N.$$typeof===ee)return P(U,xo(U,N),L);wo(U,N)}return null}function z(U,N,L,q){var $=N!==null?N.key:null;if(typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint")return $!==null?null:T(U,N,""+L,q);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case V:return L.key===$?E(U,N,L,q):null;case Y:return L.key===$?B(U,N,L,q):null;case ge:return L=ta(L),z(U,N,L,q)}if(Gi(L)||Fi(L))return $!==null?null:F(U,N,L,q,null);if(typeof L.then=="function")return z(U,N,Eo(L),q);if(L.$$typeof===ee)return z(U,N,xo(U,L),q);wo(U,L)}return null}function I(U,N,L,q,$){if(typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint")return U=U.get(L)||null,T(N,U,""+q,$);if(typeof q=="object"&&q!==null){switch(q.$$typeof){case V:return U=U.get(q.key===null?L:q.key)||null,E(N,U,q,$);case Y:return U=U.get(q.key===null?L:q.key)||null,B(N,U,q,$);case ge:return q=ta(q),I(U,N,L,q,$)}if(Gi(q)||Fi(q))return U=U.get(L)||null,F(N,U,q,$,null);if(typeof q.then=="function")return I(U,N,L,Eo(q),$);if(q.$$typeof===ee)return I(U,N,L,xo(N,q),$);wo(N,q)}return null}function W(U,N,L,q){for(var $=null,ye=null,ae=N,le=N=0,ke=null;ae!==null&&le<L.length;le++){ae.index>le?(ke=ae,ae=null):ke=ae.sibling;var Te=z(U,ae,L[le],q);if(Te===null){ae===null&&(ae=ke);break}e&&ae&&Te.alternate===null&&t(U,ae),N=r(Te,N,le),ye===null?$=Te:ye.sibling=Te,ye=Te,ae=ke}if(le===L.length)return n(U,ae),fe&&Gn(U,le),$;if(ae===null){for(;le<L.length;le++)ae=P(U,L[le],q),ae!==null&&(N=r(ae,N,le),ye===null?$=ae:ye.sibling=ae,ye=ae);return fe&&Gn(U,le),$}for(ae=i(ae);le<L.length;le++)ke=I(ae,U,le,L[le],q),ke!==null&&(e&&(Te=ke.alternate,Te!==null&&ae.delete(Te.key===null?le:Te.key)),N=r(ke,N,le),ye===null?$=ke:ye.sibling=ke,ye=ke);return e&&ae.forEach(function(Ci){return t(U,Ci)}),fe&&Gn(U,le),$}function te(U,N,L,q){if(L==null)throw Error(o(151));for(var $=null,ye=null,ae=N,le=N=0,ke=null,Te=L.next();ae!==null&&!Te.done;le++,Te=L.next()){ae.index>le?(ke=ae,ae=null):ke=ae.sibling;var Ci=z(U,ae,Te.value,q);if(Ci===null){ae===null&&(ae=ke);break}e&&ae&&Ci.alternate===null&&t(U,ae),N=r(Ci,N,le),ye===null?$=Ci:ye.sibling=Ci,ye=Ci,ae=ke}if(Te.done)return n(U,ae),fe&&Gn(U,le),$;if(ae===null){for(;!Te.done;le++,Te=L.next())Te=P(U,Te.value,q),Te!==null&&(N=r(Te,N,le),ye===null?$=Te:ye.sibling=Te,ye=Te);return fe&&Gn(U,le),$}for(ae=i(ae);!Te.done;le++,Te=L.next())Te=I(ae,U,le,Te.value,q),Te!==null&&(e&&(ke=Te.alternate,ke!==null&&ae.delete(ke.key===null?le:ke.key)),N=r(Te,N,le),ye===null?$=Te:ye.sibling=Te,ye=Te);return e&&ae.forEach(function(Hb){return t(U,Hb)}),fe&&Gn(U,le),$}function ce(U,N,L,q){if(typeof L=="object"&&L!==null&&L.type===Z&&L.key===null&&L.props.ref===void 0&&(L=L.props.children),typeof L=="object"&&L!==null){switch(L.$$typeof){case V:e:{for(var $=L.key;N!==null;){if(N.key===$){if($=L.type,$===Z){if(N.tag===7){n(U,N.sibling),q=l(N,L.props.children),fi(q,L),q.return=U,U=q;break e}}else if(N.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===ge&&ta($)===N.type){n(U,N.sibling),q=l(N,L.props),fi(q,L),q.return=U,U=q;break e}n(U,N);break}else t(U,N);N=N.sibling}L.type===Z?(q=Ki(L.props.children,U.mode,q,L.key),fi(q,L),q.return=U,U=q):(q=po(L.type,L.key,L.props,null,U.mode,q),fi(q,L),q.return=U,U=q)}return g(U);case Y:e:{for($=L.key;N!==null;){if(N.key===$)if(N.tag===4&&N.stateNode.containerInfo===L.containerInfo&&N.stateNode.implementation===L.implementation){n(U,N.sibling),q=l(N,L.children||[]),q.return=U,U=q;break e}else{n(U,N);break}else t(U,N);N=N.sibling}q=Ic(L,U.mode,q),q.return=U,U=q}return g(U);case ge:return L=ta(L),ce(U,N,L,q)}if(Gi(L))return W(U,N,L,q);if(Fi(L)){if($=Fi(L),typeof $!="function")throw Error(o(150));return L=$.call(L),te(U,N,L,q)}if(typeof L.then=="function")return ce(U,N,Eo(L),q);if(L.$$typeof===ee)return ce(U,N,xo(U,L),q);wo(U,L)}return typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint"?(L=""+L,N!==null&&N.tag===6?(n(U,N.sibling),q=l(N,L),q.return=U,U=q):(n(U,N),q=Hc(L,U.mode,q),q.return=U,U=q),g(U)):n(U,N)}return function(U,N,L,q){try{$s=0;var $=ce(U,N,L,q);return Ga=null,$}catch(ae){if(ae===Fa||ae===_o)throw ae;var ye=Tt(29,ae,null,U.mode);return ye.lanes=q,ye.return=U,ye}}}var ia=om(!0),rm=om(!1),hi=!1;function Kc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Zc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function di(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function mi(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(Se&2)!==0){var l=i.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),i.pending=t,t=mo(e),Yd(e,null,n),t}return ho(e,i,t,n),mo(e)}function el(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,Zh(e,n)}}function Qc(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var l=null,r=null;if(n=n.firstBaseUpdate,n!==null){do{var g={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};r===null?l=r=g:r=r.next=g,n=n.next}while(n!==null);r===null?l=r=t:r=r.next=t}else l=r=t;n={baseState:i.baseState,firstBaseUpdate:l,lastBaseUpdate:r,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Wc=!1;function tl(){if(Wc){var e=Ia;if(e!==null)throw e}}function nl(e,t,n,i){Wc=!1;var l=e.updateQueue;hi=!1;var r=l.firstBaseUpdate,g=l.lastBaseUpdate,T=l.shared.pending;if(T!==null){l.shared.pending=null;var E=T,B=E.next;E.next=null,g===null?r=B:g.next=B,g=E;var F=e.alternate;F!==null&&(F=F.updateQueue,T=F.lastBaseUpdate,T!==g&&(T===null?F.firstBaseUpdate=B:T.next=B,F.lastBaseUpdate=E))}if(r!==null){var P=l.baseState;g=0,F=B=E=null,T=r;do{var z=T.lane&-536870913,I=z!==T.lane;if(I?(ve&z)===z:(i&z)===z){z!==0&&z===$i&&(Wc=!0),F!==null&&(F=F.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});e:{var W=e,te=T;z=t;var ce=n;switch(te.tag){case 1:if(W=te.payload,typeof W=="function"){P=W.call(ce,P,z);break e}P=W;break e;case 3:W.flags=W.flags&-65537|128;case 0:if(W=te.payload,z=typeof W=="function"?W.call(ce,P,z):W,z==null)break e;P=O({},P,z);break e;case 2:hi=!0}}z=T.callback,z!==null&&(e.flags|=64,I&&(e.flags|=8192),I=l.callbacks,I===null?l.callbacks=[z]:I.push(z))}else I={lane:z,tag:T.tag,payload:T.payload,callback:T.callback,next:null},F===null?(B=F=I,E=P):F=F.next=I,g|=z;if(T=T.next,T===null){if(T=l.shared.pending,T===null)break;I=T,T=I.next,I.next=null,l.lastBaseUpdate=I,l.shared.pending=null}}while(!0);F===null&&(E=P),l.baseState=E,l.firstBaseUpdate=B,l.lastBaseUpdate=F,r===null&&(l.shared.lanes=0),xi|=g,e.lanes=g,e.memoizedState=P}}function cm(e,t){if(typeof e!="function")throw Error(o(191,e));e.call(t)}function um(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)cm(n[e],t)}var pi=vn(null),Mo=vn(0);function fm(e,t){e=kn,Ne(Mo,e),Ne(pi,t),kn=e|t.baseLanes}function Jc(){Ne(Mo,kn),Ne(pi,pi.current)}function $c(){kn=Mo.current,it(pi),it(Mo)}var lt=vn(null),ft=null;function gi(e){var t=e.alternate;Ne(ot,ot.current&1),Ne(lt,e),ft===null&&(t===null||pi.current!==null||t.memoizedState!==null)&&(ft=e)}function eu(e){Ne(ot,ot.current),Ne(lt,e),ft===null&&(ft=e)}function hm(e){e.tag===22?(Ne(ot,ot.current),Ne(lt,e),ft===null&&(ft=e)):vi()}function vi(){Ne(ot,ot.current),Ne(lt,lt.current)}function Lt(e){it(lt),ft===e&&(ft=null),it(ot)}var ot=vn(0);function il(e,t){Ne(lt,lt.current),Ne(ot,t)}function tu(e){it(ot),it(lt),ft===e&&(ft=null)}function Ro(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Af(n)||Ef(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!=="independent"){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Pn=0,re=null,Me=null,Ye=null,Do=!1,Va=!1,aa=!1,Co=0,al=0,qa=null,a1=0;function Ie(){throw Error(o(321))}function nu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Bt(e[n],t[n]))return!1;return!0}function iu(e,t,n,i,l,r){return Pn=r,re=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,se.H=e===null||e.memoizedState===null?Zm:Qm,aa=!1,r=n(i,l),aa=!1,Va&&(r=mm(t,n,i,l)),dm(e),r}function dm(e){se.H=Ho;var t=Me!==null&&Me.next!==null;if(Pn=0,Ye=Me=re=null,Do=!1,al=0,qa=null,t)throw Error(o(300));e===null||Xe||(e=e.dependencies,e!==null&&To(e)&&(Xe=!0))}function mm(e,t,n,i){re=e;var l=0;do{if(Va&&(qa=null),al=0,Va=!1,25<=l)throw Error(o(301));if(l+=1,Ye=Me=null,e.updateQueue!=null){var r=e.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}se.H=h1,r=t(n,i)}while(Va);return r}function s1(){var e=se.H,t=e.useState()[0];return t=typeof t.then=="function"?sl(t):t,e=e.useState()[0],(Me!==null?Me.memoizedState:null)!==e&&(re.flags|=1024),t}function au(){var e=Co!==0;return Co=0,e}function su(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function lu(e){if(Do){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Do=!1}Pn=0,Ye=Me=re=null,Va=!1,al=Co=0,qa=null}function dt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ye===null?re.memoizedState=Ye=e:Ye=Ye.next=e,Ye}function Ve(){if(Me===null){var e=re.alternate;e=e!==null?e.memoizedState:null}else e=Me.next;var t=Ye===null?re.memoizedState:Ye.next;if(t!==null)Ye=t,Me=e;else{if(e===null)throw re.alternate===null?Error(o(467)):Error(o(310));Me=e,e={memoizedState:Me.memoizedState,baseState:Me.baseState,baseQueue:Me.baseQueue,queue:Me.queue,next:null},Ye===null?re.memoizedState=Ye=e:Ye=Ye.next=e}return Ye}function No(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function sl(e){var t=al;return al+=1,qa===null&&(qa=[]),e=am(qa,e,t),t=re,(Ye===null?t.memoizedState:Ye.next)===null&&(t=t.alternate,se.H=t===null||t.memoizedState===null?Zm:Qm),e}function Oo(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return sl(e);if(e.$$typeof===Ct)return;if(e.$$typeof===ee)return st(e)}throw Error(o(438,String(e)))}function ou(e){var t=null,n=re.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=re.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(l){return l.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=No(),re.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=oe;return t.index++,n}function jn(e,t){return typeof t=="function"?t(e):t}function zo(e){var t=Ve();return ru(t,Me,e)}function ru(e,t,n){var i=e.queue;if(i===null)throw Error(o(311));i.lastRenderedReducer=n;var l=e.baseQueue,r=i.pending;if(r!==null){if(l!==null){var g=l.next;l.next=r.next,r.next=g}t.baseQueue=l=r,i.pending=null}if(r=e.baseState,l===null)e.memoizedState=r;else{t=l.next;var T=g=null,E=null,B=t,F=!1;do{var P=B.lane&-536870913;if(P!==B.lane?(ve&P)===P:(Pn&P)===P){var z=B.revertLane;if(z===0)E!==null&&(E=E.next={lane:0,revertLane:0,gesture:null,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null}),P===$i&&(F=!0);else if((Pn&z)===z){B=B.next,z===$i&&(F=!0);continue}else P={lane:0,revertLane:B.revertLane,gesture:null,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null},E===null?(T=E=P,g=r):E=E.next=P,re.lanes|=z,xi|=z;P=B.action,aa&&n(r,P),r=B.hasEagerState?B.eagerState:n(r,P)}else z={lane:P,revertLane:B.revertLane,gesture:B.gesture,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null},E===null?(T=E=z,g=r):E=E.next=z,re.lanes|=P,xi|=P;B=B.next}while(B!==null&&B!==t);if(E===null?g=r:E.next=T,!Bt(r,e.memoizedState)&&(Xe=!0,F&&(n=Ia,n!==null)))throw n;e.memoizedState=r,e.baseState=g,e.baseQueue=E,i.lastRenderedState=r}return l===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function cu(e){var t=Ve(),n=t.queue;if(n===null)throw Error(o(311));n.lastRenderedReducer=e;var i=n.dispatch,l=n.pending,r=t.memoizedState;if(l!==null){n.pending=null;var g=l=l.next;do r=e(r,g.action),g=g.next;while(g!==l);Bt(r,t.memoizedState)||(Xe=!0),t.memoizedState=r,t.baseQueue===null&&(t.baseState=r),n.lastRenderedState=r}return[r,i]}function pm(e,t,n){var i=re,l=Ve(),r=fe;if(r){if(n===void 0)throw Error(o(407));n=n()}else n=t();var g=!Bt((Me||l).memoizedState,n);if(g&&(l.memoizedState=n,Xe=!0),l=l.queue,hu(ym.bind(null,i,l,e),[e]),e=l.getSnapshot!==t||g||Ye!==null&&(Ye.memoizedState.tag&1)!==0,Pa(e?9:8,{destroy:void 0},vm.bind(null,i,l,n,t),null),e){if(i.flags|=2048,Ce===null)throw Error(o(349));r||(Pn&127)!==0||gm(i,t,n)}return n}function gm(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=re.updateQueue,t===null?(t=No(),re.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function vm(e,t,n,i){t.value=n,t.getSnapshot=i,bm(t)&&Tm(e)}function ym(e,t,n){return n(function(){bm(t)&&Tm(e)})}function bm(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Bt(e,n)}catch{return!0}}function Tm(e){var t=ki(e,2);t!==null&&At(t,e,2)}function uu(e){var t=dt();if(typeof e=="function"){var n=e;if(e=n(),aa){ai(!0);try{n()}finally{ai(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:jn,lastRenderedState:e},t}function xm(e,t,n,i){return e.baseState=n,ru(e,Me,typeof i=="function"?i:jn)}function l1(e,t,n,i,l){if(Lo(e))throw Error(o(485));if(e=t.action,e!==null){var r={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(g){r.listeners.push(g)}};se.T!==null?n(!0):r.isTransition=!1,i(r),n=t.pending,n===null?(r.next=t.pending=r,Sm(t,r)):(r.next=n.next,t.pending=n.next=r)}}function Sm(e,t){var n=t.action,i=t.payload,l=e.state;if(t.isTransition){var r=se.T,g={};g.types=r!==null?r.types:null,se.T=g;try{var T=n(l,i),E=se.S;E!==null&&E(g,T),_m(e,t,T)}catch(B){fu(e,t,B)}finally{r!==null&&g.types!==null&&(r.types=g.types),se.T=r}}else try{r=n(l,i),_m(e,t,r)}catch(B){fu(e,t,B)}}function _m(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){Am(e,t,i)},function(i){return fu(e,t,i)}):Am(e,t,n)}function Am(e,t,n){t.status="fulfilled",t.value=n,Em(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Sm(e,n)))}function fu(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,Em(t),t=t.next;while(t!==i)}e.action=null}function Em(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function wm(e,t){return t}function Mm(e,t){if(fe){var n=Ce.formState;if(n!==null){e:{var i=re;if(fe){if(Oe){t:{for(var l=Oe,r=Wt;l.nodeType!==8;){if(!r){l=null;break t}if(l=$t(l.nextSibling),l===null){l=null;break t}}r=l.data,l=r==="F!"||r==="F"?l:null}if(l){Oe=$t(l.nextSibling),i=l.data==="F!";break e}}ci(i)}i=!1}i&&(t=n[0])}}return n=dt(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:wm,lastRenderedState:t},n.queue=i,n=Xm.bind(null,re,i),i.dispatch=n,i=uu(!1),r=vu.bind(null,re,!1,i.queue),i=dt(),l={state:t,dispatch:null,action:e,pending:null},i.queue=l,n=l1.bind(null,re,l,r,n),l.dispatch=n,i.memoizedState=e,[t,n,!1]}function Rm(e){var t=Ve();return Dm(t,Me,e)}function Dm(e,t,n){if(t=ru(e,t,wm)[0],e=zo(jn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=sl(t)}catch(g){throw g===Fa?_o:g}else i=t;t=Ve();var l=t.queue,r=l.dispatch;return n!==t.memoizedState&&(re.flags|=2048,Pa(9,{destroy:void 0},o1.bind(null,l,n),null)),[i,r,e]}function o1(e,t){e.action=t}function Cm(e){var t=Ve(),n=Me;if(n!==null)return Dm(t,n,e);Ve(),t=t.memoizedState,n=Ve();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function Pa(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=re.updateQueue,t===null&&(t=No(),re.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function Nm(){return Ve().memoizedState}function Uo(e,t,n,i){var l=dt();re.flags|=e,l.memoizedState=Pa(1|t,{destroy:void 0},n,i===void 0?null:i)}function Bo(e,t,n,i){var l=Ve();i=i===void 0?null:i;var r=l.memoizedState.inst;Me!==null&&i!==null&&nu(i,Me.memoizedState.deps)?l.memoizedState=Pa(t,r,n,i):(re.flags|=e,l.memoizedState=Pa(1|t,r,n,i))}function Om(e,t){Uo(8390656,8,e,t)}function hu(e,t){Bo(2048,8,e,t)}function r1(e){re.flags|=4;var t=re.updateQueue;if(t===null)t=No(),re.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function zm(e){var t=Ve().memoizedState;return r1({ref:t,nextImpl:e}),function(){if((Se&2)!==0)throw Error(o(440));return t.impl.apply(void 0,arguments)}}function Um(e,t){return Bo(4,2,e,t)}function Bm(e,t){return Bo(4,4,e,t)}function Lm(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Hm(e,t,n){n=n!=null?n.concat([e]):null,Bo(4,4,Lm.bind(null,t,e),n)}function du(){}function Im(e,t){var n=Ve();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&nu(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function Fm(e,t){var n=Ve();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&nu(t,i[1]))return i[0];if(i=e(),aa){ai(!0);try{e()}finally{ai(!1)}}return n.memoizedState=[i,t],i}function mu(e,t,n){return n===void 0||(Pn&1073741824)!==0&&(ve&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=Zp(),re.lanes|=e,xi|=e,n)}function Gm(e,t,n,i){return Bt(n,t)?n:pi.current!==null?(e=mu(e,n,i),Bt(e,t)||(Xe=!0),e):(Pn&106)===0||(Pn&1073741824)!==0&&(ve&261930)===0?(Xe=!0,e.memoizedState=n):(e=Zp(),re.lanes|=e,xi|=e,t)}function Vm(e,t,n,i,l){var r=be.p;be.p=r!==0&&8>r?r:8;var g=se.T,T={};T.types=g!==null?g.types:null,se.T=T,vu(e,!1,t,n);try{var E=l(),B=se.S;if(B!==null&&B(T,E),E!==null&&typeof E=="object"&&typeof E.then=="function"){var F=i1(E,i);ll(e,t,F,Gt(e))}else ll(e,t,i,Gt(e))}catch(P){ll(e,t,{then:function(){},status:"rejected",reason:P},Gt())}finally{be.p=r,g!==null&&T.types!==null&&(g.types=T.types),se.T=g}}function c1(){}function pu(e,t,n,i){if(e.tag!==5)throw Error(o(476));var l=qm(e).queue;Vm(e,l,t,Vi,n===null?c1:function(){return Pm(e),n(i)})}function qm(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:Vi,baseState:Vi,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:jn,lastRenderedState:Vi},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:jn,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Pm(e){var t=qm(e);t.next===null&&(t=e.alternate.memoizedState),ll(e,t.next.queue,{},Gt())}function gu(){return st(rs)}function jm(){return Ve().memoizedState}function Ym(){return Ve().memoizedState}function u1(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Gt();e=di(n);var i=mi(t,e,n);i!==null&&(At(i,t,n),el(i,t,n)),t={cache:jc()},e.payload=t;return}t=t.return}}function f1(e,t,n){var i=Gt();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Lo(e)?km(t,n):(n=Bc(e,t,n,i),n!==null&&(At(n,e,i),Km(n,t,i)))}function Xm(e,t,n){var i=Gt();ll(e,t,n,i)}function ll(e,t,n,i){var l={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Lo(e))km(t,l);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=t.lastRenderedReducer,r!==null))try{var g=t.lastRenderedState,T=r(g,n);if(l.hasEagerState=!0,l.eagerState=T,Bt(T,g))return ho(e,t,l,0),Ce===null&&fo(),!1}catch{}if(n=Bc(e,t,l,i),n!==null)return At(n,e,i),Km(n,t,i),!0}return!1}function vu(e,t,n,i){if(i={lane:2,revertLane:rf(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},Lo(e)){if(t)throw Error(o(479))}else t=Bc(e,n,i,2),t!==null&&At(t,e,2)}function Lo(e){var t=e.alternate;return e===re||t!==null&&t===re}function km(e,t){Va=Do=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Km(e,t,n){if((n&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,Zh(e,n)}}var Ho={readContext:st,use:Oo,useCallback:Ie,useContext:Ie,useEffect:Ie,useImperativeHandle:Ie,useLayoutEffect:Ie,useInsertionEffect:Ie,useMemo:Ie,useReducer:Ie,useRef:Ie,useState:Ie,useDebugValue:Ie,useDeferredValue:Ie,useTransition:Ie,useSyncExternalStore:Ie,useId:Ie,useHostTransitionStatus:Ie,useFormState:Ie,useActionState:Ie,useOptimistic:Ie,useMemoCache:Ie,useCacheRefresh:Ie,useEffectEvent:Ie},Zm={readContext:st,use:Oo,useCallback:function(e,t){return dt().memoizedState=[e,t===void 0?null:t],e},useContext:st,useEffect:Om,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Uo(4194308,4,Lm.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Uo(4194308,4,e,t)},useInsertionEffect:function(e,t){Uo(4,2,e,t)},useMemo:function(e,t){var n=dt();t=t===void 0?null:t;var i=e();if(aa){ai(!0);try{e()}finally{ai(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=dt();if(n!==void 0){var l=n(t);if(aa){ai(!0);try{n(t)}finally{ai(!1)}}}else l=t;return i.memoizedState=i.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},i.queue=e,e=e.dispatch=f1.bind(null,re,e),[i.memoizedState,e]},useRef:function(e){var t=dt();return e={current:e},t.memoizedState=e},useState:function(e){e=uu(e);var t=e.queue,n=Xm.bind(null,re,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:du,useDeferredValue:function(e,t){var n=dt();return mu(n,e,t)},useTransition:function(){var e=uu(!1);return e=Vm.bind(null,re,e.queue,!0,!1),dt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=re,l=dt();if(fe){if(n===void 0)throw Error(o(407));n=n()}else{if(n=t(),Ce===null)throw Error(o(349));(ve&127)!==0||gm(i,t,n)}l.memoizedState=n;var r={value:n,getSnapshot:t};return l.queue=r,Om(ym.bind(null,i,r,e),[e]),i.flags|=2048,Pa(9,{destroy:void 0},vm.bind(null,i,r,n,t),null),n},useId:function(){var e=dt(),t=Ce.identifierPrefix;if(fe){var n=xn,i=Tn;n=(i&~(1<<32-zt(i)-1)).toString(32)+n,t="_"+t+"R_"+n,n=Co++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=a1++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:gu,useFormState:Mm,useActionState:Mm,useOptimistic:function(e){var t=dt();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=vu.bind(null,re,!0,n),n.dispatch=t,[e,t]},useMemoCache:ou,useCacheRefresh:function(){return dt().memoizedState=u1.bind(null,re)},useEffectEvent:function(e){var t=dt(),n={impl:e};return t.memoizedState=n,function(){if((Se&2)!==0)throw Error(o(440));return n.impl.apply(void 0,arguments)}}},Qm={readContext:st,use:Oo,useCallback:Im,useContext:st,useEffect:hu,useImperativeHandle:Hm,useInsertionEffect:Um,useLayoutEffect:Bm,useMemo:Fm,useReducer:zo,useRef:Nm,useState:function(){return zo(jn)},useDebugValue:du,useDeferredValue:function(e,t){var n=Ve();return Gm(n,Me.memoizedState,e,t)},useTransition:function(){var e=zo(jn)[0],t=Ve().memoizedState;return[typeof e=="boolean"?e:sl(e),t]},useSyncExternalStore:pm,useId:jm,useHostTransitionStatus:gu,useFormState:Rm,useActionState:Rm,useOptimistic:function(e,t){var n=Ve();return xm(n,Me,e,t)},useMemoCache:ou,useCacheRefresh:Ym,useEffectEvent:zm},h1={readContext:st,use:Oo,useCallback:Im,useContext:st,useEffect:hu,useImperativeHandle:Hm,useInsertionEffect:Um,useLayoutEffect:Bm,useMemo:Fm,useReducer:cu,useRef:Nm,useState:function(){return cu(jn)},useDebugValue:du,useDeferredValue:function(e,t){var n=Ve();return Me===null?mu(n,e,t):Gm(n,Me.memoizedState,e,t)},useTransition:function(){var e=cu(jn)[0],t=Ve().memoizedState;return[typeof e=="boolean"?e:sl(e),t]},useSyncExternalStore:pm,useId:jm,useHostTransitionStatus:gu,useFormState:Cm,useActionState:Cm,useOptimistic:function(e,t){var n=Ve();return Me!==null?xm(n,Me,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:ou,useCacheRefresh:Ym,useEffectEvent:zm};function yu(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:O({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var bu={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=Gt(),l=di(i);l.payload=t,n!=null&&(l.callback=n),t=mi(e,l,i),t!==null&&(At(t,e,i),el(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=Gt(),l=di(i);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=mi(e,l,i),t!==null&&(At(t,e,i),el(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Gt(),i=di(n);i.tag=2,t!=null&&(i.callback=t),t=mi(e,i,n),t!==null&&(At(t,e,n),el(t,e,n))}};function Wm(e,t,n,i,l,r,g){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,r,g):t.prototype&&t.prototype.isPureReactComponent?!Xs(n,i)||!Xs(l,r):!0}function Jm(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&bu.enqueueReplaceState(t,t.state,null)}function sa(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=O({},n));for(var l in e)n[l]===void 0&&(n[l]=e[l])}return n}function $m(e){uo(e)}function ep(e){console.error(e)}function tp(e){uo(e)}function Io(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function np(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function Tu(e,t,n){return n=di(n),n.tag=3,n.payload={element:null},n.callback=function(){Io(e,t)},n}function ip(e){return e=di(e),e.tag=3,e}function ap(e,t,n,i){var l=n.type.getDerivedStateFromError;if(typeof l=="function"){var r=i.value;e.payload=function(){return l(r)},e.callback=function(){np(t,n,i)}}var g=n.stateNode;g!==null&&typeof g.componentDidCatch=="function"&&(e.callback=function(){np(t,n,i),typeof l!="function"&&(Si===null?Si=new Set([this]):Si.add(this));var T=i.stack;this.componentDidCatch(i.value,{componentStack:T!==null?T:""})})}function d1(e,t,n,i,l){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&Wi(t,n,l,!0),n=lt.current,n!==null){switch(n.tag){case 31:case 13:case 19:return ft===null?sr():n.alternate===null&&Fe===0&&(Fe=3),n.flags&=-257,n.flags|=65536,n.lanes=l,i===Ao?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),sf(e,i,l)),!1;case 22:return n.flags|=65536,i===Ao?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),sf(e,i,l)),!1}throw Error(o(435,n.tag))}return sf(e,i,l),sr(),!1}if(fe)return t=lt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=l,i!==Gc&&(e=Error(o(422),{cause:i}),Zs(Kt(e,n)))):(i!==Gc&&(t=Error(o(423),{cause:i}),Zs(Kt(t,n))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,i=Kt(i,n),l=Tu(e.stateNode,i,l),Qc(e,l),Fe!==4&&(Fe=2)),!1;var r=Error(o(520),{cause:i});if(r=Kt(r,n),ml===null?ml=[r]:ml.push(r),Fe!==4&&(Fe=2),t===null)return!0;i=Kt(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=l&-l,n.lanes|=e,e=Tu(n.stateNode,i,e),Qc(n,e),!1;case 1:if(t=n.type,r=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(Si===null||!Si.has(r))))return n.flags|=65536,l&=-l,n.lanes|=l,l=ip(l),ap(l,e,n,i),Qc(n,l),!1;break;case 22:if(n.memoizedState!==null)return n.flags|=65536,!1}n=n.return}while(n!==null);return!1}var xu=Error(o(461)),Xe=!1;function Ze(e,t,n,i){t.child=e===null?rm(t,null,n,i):ia(t,e.child,n,i)}function sp(e,t,n,i,l){n=n.render;var r=t.ref;if("ref"in i){var g={};for(var T in i)T!=="ref"&&(g[T]=i[T])}else g=i;return Ji(t),i=iu(e,t,n,g,r,l),T=au(),e!==null&&!Xe?(su(e,t,l),Yn(e,t,l)):(fe&&T&&vo(t),t.flags|=1,Ze(e,t,i,l),t.child)}function lp(e,t,n,i,l){if(e===null){var r=n.type;return typeof r=="function"&&!Lc(r)&&r.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=r,op(e,t,r,i,l)):(e=po(n.type,null,i,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(r=e.child,!Du(e,l)){var g=r.memoizedProps;if(n=n.compare,n=n!==null?n:Xs,n(g,i)&&e.ref===t.ref)return Yn(e,t,l)}return t.flags|=1,e=Fn(r,i),e.ref=t.ref,e.return=t,t.child=e}function op(e,t,n,i,l){if(e!==null){var r=e.memoizedProps;if(Xs(r,i)&&e.ref===t.ref)if(Xe=!1,t.pendingProps=i=r,Du(e,l))(e.flags&131072)!==0&&(Xe=!0);else return t.lanes=e.lanes,Yn(e,t,l)}return Su(e,t,n,i,l)}function rp(e,t,n,i){var l=i.children,r=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((t.flags&128)!==0){if(r=r!==null?r.baseLanes|n:n,e!==null){for(i=t.child=e.child,l=0;i!==null;)l=l|i.lanes|i.childLanes,i=i.sibling;i=l&~r}else i=0,t.child=null;return cp(e,t,r,n,i)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&So(t,r!==null?r.cachePool:null),r!==null?fm(t,r):Jc(),hm(t);else return i=t.lanes=536870912,cp(e,t,r!==null?r.baseLanes|n:n,n,i)}else r!==null?(So(t,r.cachePool),fm(t,r),vi(),t.memoizedState=null):(e!==null&&So(t,null),Jc(),vi());return Ze(e,t,l,n),t.child}function ol(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function cp(e,t,n,i,l){var r=Xc();return r=r===null?null:{parent:je._currentValue,pool:r},t.memoizedState={baseLanes:n,cachePool:r},e!==null&&So(t,null),Jc(),hm(t),e!==null&&Wi(e,t,i,!0),t.childLanes=l,null}function Fo(e,t){return t=Go({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function up(e,t,n){return ia(t,e.child,null,n),e=Fo(t,t.pendingProps),e.flags|=2,Lt(t),t.memoizedState=null,e}function m1(e,t,n){var i=t.pendingProps,l=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(fe){if(i.mode==="hidden")return e=Fo(t,i),t.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},ol(null,e);if(eu(t),(e=Oe)?(e=L0(e,Wt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:oi!==null?{id:Tn,overflow:xn}:null,retryLane:536870912,hydrationErrors:null},n=kd(e),n.return=t,t.child=n,$e=t,Oe=null)):e=null,e===null)throw ci(t);return t.lanes=536870912,null}return Fo(t,i)}var r=e.memoizedState;if(r!==null){var g=r.dehydrated;if(eu(t),l)if(t.flags&256)t.flags&=-257,t=up(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(o(558));else if(Xe||Wi(e,t,n,!1),l=(n&e.childLanes)!==0,Xe||l){if(pi.current===null){if(i=Ce,i!==null&&(g=Qh(i,n),g!==0&&g!==r.retryLane))throw r.retryLane=g,ki(e,g),At(i,e,g),xu;sr()}t=up(e,t,n)}else e=r.treeContext,Oe=$t(g.nextSibling),$e=t,fe=!0,ri=null,Wt=!1,e!==null&&Qd(t,e),t=Fo(t,i),t.flags|=134221824;return t}return e=Fn(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function ja(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(o(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Su(e,t,n,i,l){return Ji(t),n=iu(e,t,n,i,void 0,l),i=au(),e!==null&&!Xe?(su(e,t,l),Yn(e,t,l)):(fe&&i&&vo(t),t.flags|=1,Ze(e,t,n,l),t.child)}function fp(e,t,n,i,l,r){return Ji(t),t.updateQueue=null,n=mm(t,i,n,l),dm(e),i=au(),e!==null&&!Xe?(su(e,t,r),Yn(e,t,r)):(fe&&i&&vo(t),t.flags|=1,Ze(e,t,n,r),t.child)}function hp(e,t,n,i,l){if(Ji(t),t.stateNode===null){var r=Ua,g=n.contextType;typeof g=="object"&&g!==null&&(r=st(g)),r=new n(i,r),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=bu,t.stateNode=r,r._reactInternals=t,r=t.stateNode,r.props=i,r.state=t.memoizedState,r.refs={},Kc(t),g=n.contextType,r.context=typeof g=="object"&&g!==null?st(g):Ua,r.state=t.memoizedState,g=n.getDerivedStateFromProps,typeof g=="function"&&(yu(t,n,g,i),r.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(g=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),g!==r.state&&bu.enqueueReplaceState(r,r.state,null),nl(t,i,r,l),tl(),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){r=t.stateNode;var T=t.memoizedProps,E=sa(n,T);r.props=E;var B=r.context,F=n.contextType;g=Ua,typeof F=="object"&&F!==null&&(g=st(F));var P=n.getDerivedStateFromProps;F=typeof P=="function"||typeof r.getSnapshotBeforeUpdate=="function",T=t.pendingProps!==T,F||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(T||B!==g)&&Jm(t,r,i,g),hi=!1;var z=t.memoizedState;r.state=z,nl(t,i,r,l),tl(),B=t.memoizedState,T||z!==B||hi?(typeof P=="function"&&(yu(t,n,P,i),B=t.memoizedState),(E=hi||Wm(t,n,E,i,z,B,g))?(F||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(t.flags|=4194308)):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=B),r.props=i,r.state=B,r.context=g,i=E):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{r=t.stateNode,Zc(e,t),g=t.memoizedProps,F=sa(n,g),r.props=F,P=t.pendingProps,z=r.context,B=n.contextType,E=Ua,typeof B=="object"&&B!==null&&(E=st(B)),T=n.getDerivedStateFromProps,(B=typeof T=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(g!==P||z!==E)&&Jm(t,r,i,E),hi=!1,z=t.memoizedState,r.state=z,nl(t,i,r,l),tl();var I=t.memoizedState;g!==P||z!==I||hi||e!==null&&e.dependencies!==null&&To(e.dependencies)?(typeof T=="function"&&(yu(t,n,T,i),I=t.memoizedState),(F=hi||Wm(t,n,F,i,z,I,E)||e!==null&&e.dependencies!==null&&To(e.dependencies))?(B||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(i,I,E),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(i,I,E)),typeof r.componentDidUpdate=="function"&&(t.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof r.componentDidUpdate!="function"||g===e.memoizedProps&&z===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||g===e.memoizedProps&&z===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=I),r.props=i,r.state=I,r.context=E,i=F):(typeof r.componentDidUpdate!="function"||g===e.memoizedProps&&z===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||g===e.memoizedProps&&z===e.memoizedState||(t.flags|=1024),i=!1)}return r=i,ja(e,t),i=(t.flags&128)!==0,r||i?(r=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:r.render(),t.flags|=1,e!==null&&i?(t.child=ia(t,e.child,null,l),t.child=ia(t,null,n,l)):Ze(e,t,n,l),t.memoizedState=r.state,e=t.child):e=Yn(e,t,l),e}function dp(e,t,n,i){return Zi(),t.flags|=256,Ze(e,t,n,i),t.child}var _u={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Au(e){return{baseLanes:e,cachePool:nm()}}function Eu(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Ft),e}function mp(e,t,n){var i=t.pendingProps,l=!1,r=(t.flags&128)!==0,g;if((g=r)||(g=e!==null&&e.memoizedState===null?!1:(ot.current&2)!==0),g&&(l=!0,t.flags&=-129),g=(t.flags&32)!==0,t.flags&=-33,e===null){if(fe){if(l?gi(t):vi(),(e=Oe)?(e=L0(e,Wt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:oi!==null?{id:Tn,overflow:xn}:null,retryLane:536870912,hydrationErrors:null},n=kd(e),n.return=t,t.child=n,$e=t,Oe=null)):e=null,e===null)throw ci(t);return Ef(e)?t.lanes=32:t.lanes=536870912,null}return r=i.children,i=i.fallback,l?(vi(),l=t.mode,r=Go({mode:"hidden",children:r},l),i=Ki(i,l,n,null),r.return=t,i.return=t,r.sibling=i,t.child=r,i=t.child,i.memoizedState=Au(n),i.childLanes=Eu(e,g,n),t.memoizedState=_u,ol(null,i)):(gi(t),wu(t,r))}var T=e.memoizedState;if(T!==null){var E=T.dehydrated;if(E!==null)return p1(e,t,r,g,i,E,T,n)}return l?(vi(),l=i.fallback,r=t.mode,T=e.child,E=T.sibling,i=Fn(T,{mode:"hidden",children:i.children}),i.subtreeFlags=T.subtreeFlags&1206910976,E!==null?l=Fn(E,l):(l=Ki(l,r,n,null),l.flags|=2),l.return=t,i.return=t,i.sibling=l,t.child=i,ol(null,i),i=t.child,l=e.child.memoizedState,l===null?l=Au(n):(r=l.cachePool,r!==null?(T=je._currentValue,r=r.parent!==T?{parent:T,pool:T}:r):r=nm(),l={baseLanes:l.baseLanes|n,cachePool:r}),i.memoizedState=l,i.childLanes=Eu(e,g,n),t.memoizedState=_u,ol(e.child,i)):(gi(t),n=e.child,e=n.sibling,n=Fn(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(g=t.deletions,g===null?(t.deletions=[e],t.flags|=16):g.push(e)),t.child=n,t.memoizedState=null,n)}function wu(e,t){return t=Go({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Go(e,t){return e=Tt(22,e,null,t),e.lanes=0,e}function Vo(e,t,n){return ia(t,e.child,null,n),e=wu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function p1(e,t,n,i,l,r,g,T){if(n)return t.flags&256?(gi(t),t.flags&=-257,Vo(e,t,T)):t.memoizedState!==null?(vi(),t.child=e.child,t.flags|=128,null):(vi(),r=l.fallback,g=t.mode,l=Go({mode:"visible",children:l.children},g),r=Ki(r,g,T,null),r.flags|=2,l.return=t,r.return=t,l.sibling=r,t.child=l,ia(t,e.child,null,T),l=t.child,l.memoizedState=Au(T),l.childLanes=Eu(e,i,T),t.memoizedState=_u,ol(null,l));if(gi(t),Ef(r)){if(i=r.nextSibling&&r.nextSibling.dataset,i)var E=i.dgst;return i=E,i!==""&&(l=Error(o(419)),l.stack="",l.digest=i,Zs({value:l,source:null,stack:null})),Vo(e,t,T)}if(Xe||Wi(e,t,T,!1),i=(T&e.childLanes)!==0,Xe||i){if(pi.current!==null)return Vo(e,t,T);if(i=Ce,i!==null&&(l=Qh(i,T),l!==0&&l!==g.retryLane))throw g.retryLane=l,ki(e,l),At(i,e,l),xu;return Af(r)||sr(),Vo(e,t,T)}return Af(r)?(t.flags|=192,t.child=e.child,null):(e=g.treeContext,Oe=$t(r.nextSibling),$e=t,fe=!0,ri=null,Wt=!1,e!==null&&Qd(t,e),t=wu(t,l.children),t.flags|=134221824,t)}function pp(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),bo(e.return,t,n)}function gp(e){for(var t=null;e!==null;){var n=e.alternate;n!==null&&Ro(n)===null&&(t=e),e=e.sibling}return t}function qo(e,t,n,i,l,r){var g=e.memoizedState;g===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:l,treeForkCount:r}:(g.isBackwards=t,g.rendering=null,g.renderingStartTime=0,g.last=i,g.tail=n,g.tailMode=l,g.treeForkCount=r)}function Mu(e){var t=e.child;for(e.child=null;t!==null;){var n=t.sibling;t.sibling=e.child,e.child=t,t=n}}function Ru(e,t,n){var i=t.pendingProps,l=i.revealOrder,r=i.tail;i=i.children;var g=ot.current;if(t.flags&128)return il(t,g),null;var T=(g&2)!==0;if(T?(g=g&1|2,t.flags|=128):g&=1,il(t,g),l==="backwards"&&e!==null?(Mu(e),Ze(e,t,i,n),Mu(e)):Ze(e,t,i,n),i=fe?Ks:0,!T&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&pp(e,n,t);else if(e.tag===19)pp(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(l){case"backwards":n=gp(t.child),n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null,Mu(t)),qo(t,!0,l,null,r,i);break;case"unstable_legacy-backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Ro(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}qo(t,!0,n,null,r,i);break;case"together":qo(t,!1,null,null,void 0,i);break;case"independent":t.memoizedState=null;break;default:n=gp(t.child),n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),qo(t,!1,l,n,r,i)}return t.child}function vp(e,t,n){var i=t.pendingProps;return ui(t,t.type,i.value),Ze(e,t,i.children,n),t.child}function Yn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),xi|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Wi(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(o(153));if(t.child!==null){for(e=t.child,n=Fn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Fn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Du(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&To(e)))}function g1(e,t,n){switch(t.tag){case 3:Xl(t,t.stateNode.containerInfo),ui(t,je,e.memoizedState.cache),Zi();break;case 27:case 5:nc(t);break;case 4:Xl(t,t.stateNode.containerInfo);break;case 10:ui(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,eu(t),null;break;case 13:var i=t.memoizedState;if(i!==null){if(i.dehydrated!==null)return gi(t),t.flags|=128,null;i=Wi(e,t,n,!1);var l=t.child.childLanes;return i||(n&l)!==0?mp(e,t,n):(gi(t),e=Yn(e,t,n),e!==null?e.sibling:null)}gi(t);break;case 19:if(t.flags&128)return Ru(e,t,n);if(l=(e.flags&128)!==0,i=(n&t.childLanes)!==0,i||(Wi(e,t,n,!1),i=(n&t.childLanes)!==0),l){if(i)return Ru(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),il(t,ot.current),i)break;return null;case 22:return t.lanes=0,rp(e,t,n,t.pendingProps);case 24:ui(t,je,e.memoizedState.cache)}return Yn(e,t,n)}function yp(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Xe=!0;else{if(!Du(e,n)&&(t.flags&128)===0)return Xe=!1,g1(e,t,n);Xe=(e.flags&131072)!==0}else Xe=!1,fe&&(t.flags&1048576)!==0&&Zd(t,Ks,t.index);switch(t.lanes=0,t.tag){case 16:e:{var i=t.pendingProps;if(e=ta(t.elementType),t.type=e,typeof e=="function")Lc(e)?(i=sa(e,i),t.tag=1,t=hp(null,t,e,i,n)):(t.tag=0,t=Su(null,t,e,i,n));else{if(e!=null){var l=e.$$typeof;if(l===X){t.tag=11,t=sp(null,t,e,i,n);break e}else if(l===ue){t.tag=14,t=lp(null,t,e,i,n);break e}else if(l===ee){t.tag=10,t.type=e,t=vp(null,t,n);break e}}throw t=Os(e)||e,Error(o(306,t,""))}}return t;case 0:return Su(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,l=sa(i,t.pendingProps),hp(e,t,i,l,n);case 3:e:{if(Xl(t,t.stateNode.containerInfo),e===null)throw Error(o(387));i=t.pendingProps;var r=t.memoizedState;l=r.element,Zc(e,t),nl(t,i,null,n);var g=t.memoizedState;if(i=g.cache,ui(t,je,i),i!==r.cache&&Pc(t,[je],n,!0),tl(),i=g.element,r.isDehydrated)if(r={element:i,isDehydrated:!1,cache:g.cache},t.updateQueue.baseState=r,t.memoizedState=r,t.flags&256){t=dp(e,t,i,n);break e}else if(i!==l){l=Kt(Error(o(424)),t),Zs(l),t=dp(e,t,i,n);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Oe=$t(e.firstChild),$e=t,fe=!0,ri=null,Wt=!0,n=rm(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|134221824,n=n.sibling;else{if(Zi(),i===l){t=Yn(e,t,n);break e}Ze(e,t,i,n)}t=t.child}return t;case 26:return ja(e,t),e===null?(n=P0(t.type,null,t.pendingProps,null))?t.memoizedState=n:fe||(t.stateNode=S0(t.type,t.pendingProps,ni.current,t)):t.memoizedState=P0(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return nc(t),e===null&&fe&&(i=t.stateNode=F0(t.type,t.pendingProps,ni.current),$e=t,Wt=!0,l=Oe,Ei(t.type)?(wf=l,Oe=$t(i.firstChild)):Oe=l),Ze(e,t,t.pendingProps.children,n),ja(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&fe&&((l=i=Oe)&&(i=ub(i,t.type,t.pendingProps,Wt),i!==null?(t.stateNode=i,$e=t,Oe=$t(i.firstChild),Wt=!1,l=!0):l=!1),l||ci(t)),nc(t),l=t.type,r=t.pendingProps,g=e!==null?e.memoizedProps:null,i=r.children,vf(l,r)?i=null:g!==null&&vf(l,g)&&(t.flags|=32),t.memoizedState!==null&&(l=iu(e,t,s1,null,null,n),rs._currentValue=l),ja(e,t),Ze(e,t,i,n),t.child;case 6:return e===null&&fe&&((e=n=Oe)&&(n=fb(n,t.pendingProps,Wt),n!==null?(t.stateNode=n,$e=t,Oe=null,e=!0):e=!1),e||ci(t)),null;case 13:return mp(e,t,n);case 4:return Xl(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=ia(t,null,i,n):Ze(e,t,i,n),t.child;case 11:return sp(e,t,t.type,t.pendingProps,n);case 7:return i=t.pendingProps,ja(e,t),Ze(e,t,i,n),t.child;case 8:return Ze(e,t,t.pendingProps.children,n),t.child;case 12:return Ze(e,t,t.pendingProps.children,n),t.child;case 10:return vp(e,t,n);case 9:return l=t.type._context,i=t.pendingProps.children,Ji(t),l=st(l),i=i(l),t.flags|=1,Ze(e,t,i,n),t.child;case 14:return lp(e,t,t.type,t.pendingProps,n);case 15:return op(e,t,t.type,t.pendingProps,n);case 19:return Ru(e,t,n);case 31:return m1(e,t,n);case 22:return rp(e,t,n,t.pendingProps);case 24:return Ji(t),i=st(je),e===null?(l=Xc(),l===null&&(l=Ce,r=jc(),l.pooledCache=r,r.refCount++,r!==null&&(l.pooledCacheLanes|=n),l=r),t.memoizedState={parent:i,cache:l},Kc(t),ui(t,je,l)):((e.lanes&n)!==0&&(Zc(e,t),nl(t,null,null,n),tl()),l=e.memoizedState,r=t.memoizedState,l.parent!==i?(l={parent:i,cache:i},t.memoizedState=l,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=l),ui(t,je,i)):(i=r.cache,ui(t,je,i),i!==l.cache&&Pc(t,[je],n,!0))),Ze(e,t,t.pendingProps.children,n),t.child;case 30:return t.stateNode===null&&(t.stateNode={autoName:null,paired:null,clones:null,ref:null}),i=t.pendingProps,i.name!=null&&i.name!=="auto"?t.flags|=e===null?18882560:18874368:fe&&vo(t),e!==null&&e.memoizedProps.name!==i.name?t.flags|=4194816:ja(e,t),Ze(e,t,i.children,n),t.child;case 29:throw t.pendingProps}throw Error(o(156,t.tag))}function Xn(e){e.flags|=4}function Cu(e,t,n,i,l){var r;if((r=(e.mode&32)!==0)&&(r=n===null?k0(t,i):k0(t,i)&&(i.src!==n.src||i.srcSet!==n.srcSet)),r){if(e.flags|=16777216,(l&335544128)===l)if(e.stateNode.complete)e.flags|=8192;else if($p())e.flags|=8192;else throw na=Ao,kc}else e.flags&=-16777217}function bp(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!K0(t))if($p())e.flags|=8192;else throw na=Ao,kc}function Po(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?kh():536870912,e.lanes|=t,Za|=t)}function rl(e,t){if(!fe)switch(e.tailMode){case"visible":break;case"collapsed":for(var n=e.tail,i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null;break;default:for(t=e.tail,n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null}}function ze(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,i|=l.subtreeFlags&1206910976,i|=l.flags&1206910976,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,i|=l.subtreeFlags,i|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function v1(e,t,n){var i=t.pendingProps;switch(Fc(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ze(t),null;case 1:return ze(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),qn(je),xa(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Ha(t)?Xn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Vc())),ze(t),null;case 26:var l=t.type,r=t.memoizedState;return e===null?(Xn(t),r!==null?(ze(t),bp(t,r)):(ze(t),Cu(t,l,null,i,n))):r?r!==e.memoizedState?(Xn(t),ze(t),bp(t,r)):(ze(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&Xn(t),ze(t),Cu(t,l,e,i,n)),null;case 27:if(kl(t),n=ni.current,l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Xn(t);else{if(!i){if(t.stateNode===null)throw Error(o(166));return ze(t),t.subtreeFlags&=-33554433,null}e=yn.current,Ha(t)?Wd(t):(e=F0(l,i,n),t.stateNode=e,Xn(t))}return ze(t),t.subtreeFlags&=-33554433,null;case 5:if(kl(t),l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Xn(t);else{if(!i){if(t.stateNode===null)throw Error(o(166));return ze(t),t.subtreeFlags&=-33554433,null}if(r=yn.current,Ha(t))Wd(t);else{var g=bl(ni.current);switch(r){case 1:r=g.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:r=g.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":r=g.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":r=g.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":r=g.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild);break;case"select":r=typeof i.is=="string"?g.createElement("select",{is:i.is}):g.createElement("select"),i.multiple?r.multiple=!0:i.size&&(r.size=i.size);break;default:r=typeof i.is=="string"?g.createElement(l,{is:i.is}):g.createElement(l)}}r[at]=t,r[bt]=i;e:for(g=t.child;g!==null;){if(g.tag===5||g.tag===6)r.appendChild(g.stateNode);else if(g.tag!==4&&g.tag!==27&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===t)break e;for(;g.sibling===null;){if(g.return===null||g.return===t)break e;g=g.return}g.sibling.return=g.return,g=g.sibling}t.stateNode=r;e:switch(ct(r,l,i),l){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&Xn(t)}}return ze(t),t.subtreeFlags&=-33554433,Cu(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&Xn(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(o(166));if(e=ni.current,Ha(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,l=$e,l!==null)switch(l.tag){case 27:case 5:i=l.memoizedProps}e[at]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||y0(e.nodeValue,n)),e||ci(t,!0)}else e=bl(e).createTextNode(i),e[at]=t,t.stateNode=e}return ze(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(i=Ha(t),n!==null){if(e===null){if(!i)throw Error(o(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(557));e[at]=t}else Zi(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ze(t),e=!1}else n=Vc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Lt(t),t):(Lt(t),null);if((t.flags&128)!==0)throw Error(o(558))}return ze(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=Ha(t),i!==null&&i.dehydrated!==null){if(e===null){if(!l)throw Error(o(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(o(317));l[at]=t}else Zi(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ze(t),l=!1}else l=Vc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return t.flags&256?(Lt(t),t):(Lt(t),null)}return Lt(t),(t.flags&128)!==0?(t.lanes=n,t):(n=i!==null,e=e!==null&&e.memoizedState!==null,n&&(i=t.child,l=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(l=i.alternate.memoizedState.cachePool.pool),r=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(r=i.memoizedState.cachePool.pool),r!==l&&(i.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Po(t,t.updateQueue),ze(t),null);case 4:return xa(),e===null&&hf(t.stateNode.containerInfo),t.flags|=67108864,ze(t),null;case 10:return qn(t.type),ze(t),null;case 19:if(tu(t),i=t.memoizedState,i===null)return ze(t),null;if(l=(t.flags&128)!==0,r=i.rendering,r===null)if(l)rl(i,!1);else{if(Fe!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(r=Ro(e),r!==null){for(t.flags|=128,rl(i,!1),e=r.updateQueue,t.updateQueue=e,Po(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Xd(n,e),n=n.sibling;return il(t,ot.current&1|2),fe&&Gn(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&Nt()>tr&&(t.flags|=128,l=!0,rl(i,!1),t.lanes=4194304)}else{if(!l)if(e=Ro(r),e!==null){if(t.flags|=128,l=!0,e=e.updateQueue,t.updateQueue=e,Po(t,e),rl(i,!0),i.tail===null&&i.tailMode!=="collapsed"&&i.tailMode!=="visible"&&!r.alternate&&!fe)return ze(t),null}else 2*Nt()-i.renderingStartTime>tr&&n!==536870912&&(t.flags|=128,l=!0,rl(i,!1),t.lanes=4194304);i.isBackwards?(r.sibling=t.child,t.child=r):(e=i.last,e!==null?e.sibling=r:t.child=r,i.last=r)}if(i.tail!==null){e=i.tail;e:{for(n=e;n!==null;){if(n.alternate!==null){n=!1;break e}n=n.sibling}n=!0}return i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Nt(),e.sibling=null,r=ot.current,r=l?r&1|2:r&1,i.tailMode==="visible"||i.tailMode==="collapsed"||!n||fe?il(t,r):(n=r,Ne(lt,t),Ne(ot,n),ft===null&&(ft=t)),fe&&Gn(t,i.treeForkCount),e}return ze(t),null;case 22:case 23:return Lt(t),$c(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(n&536870912)!==0&&(t.flags&128)===0&&(ze(t),t.subtreeFlags&6&&(t.flags|=8192)):ze(t),n=t.updateQueue,n!==null&&Po(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&it(ea),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),qn(je),ze(t),null;case 25:return null;case 30:return t.flags|=33554432,ze(t),null}throw Error(o(156,t.tag))}function y1(e,t){switch(Fc(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return qn(je),xa(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return kl(t),null;case 31:if(t.memoizedState!==null){if(Lt(t),t.alternate===null)throw Error(o(340));Zi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Lt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(o(340));Zi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return tu(t),e=t.flags,e&65536?(t.flags=e&-65537|128,e=t.memoizedState,e!==null&&(e.rendering=null,e.tail=null),t.flags|=4,t):null;case 4:return xa(),null;case 10:return qn(t.type),null;case 22:case 23:return Lt(t),$c(),e!==null&&it(ea),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return qn(je),null;case 25:return null;default:return null}}function Tp(e,t){switch(Fc(t),t.tag){case 3:qn(je),xa();break;case 26:case 27:case 5:kl(t);break;case 4:xa();break;case 31:t.memoizedState!==null&&Lt(t);break;case 13:Lt(t);break;case 19:tu(t);break;case 10:qn(t.type);break;case 22:case 23:Lt(t),$c(),e!==null&&it(ea);break;case 24:qn(je)}}function cl(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var l=i.next;n=l;do{if((n.tag&e)===e){i=void 0;var r=n.create,g=n.inst;i=r(),g.destroy=i}n=n.next}while(n!==l)}}catch(T){Ee(t,t.return,T)}}function yi(e,t,n){try{var i=t.updateQueue,l=i!==null?i.lastEffect:null;if(l!==null){var r=l.next;i=r;do{if((i.tag&e)===e){var g=i.inst,T=g.destroy;if(T!==void 0){g.destroy=void 0,l=t;var E=n,B=T;try{B()}catch(F){Ee(l,E,F)}}}i=i.next}while(i!==r)}}catch(F){Ee(t,t.return,F)}}function xp(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{um(t,n)}catch(i){Ee(e,e.return,i)}}}function Sp(e,t,n){n.props=sa(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){Ee(e,t,i)}}function Sn(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:var l=e.stateNode,r=Hn(e.memoizedProps,l);(l.ref===null||l.ref.name!==r)&&(l.ref=D0(r)),i=l.ref;break;case 7:if(e.stateNode===null){var g=new Vt(e);v(e.child,!1,rb,g,void 0,void 0),e.stateNode=g}i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(T){Ee(e,t,T)}}function rt(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(l){Ee(e,t,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(l){Ee(e,t,l)}else n.current=null}function jo(e,t){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&t!==null)for(var n=0;n<t.length;n++)B0(e.stateNode,t[n])}function _p(e){for(var t=e.return;t!==null&&(Ou(t)&&B0(e.stateNode,t.stateNode),!Nu(t));)t=t.return}function ul(e){for(var t=e.return;t!==null&&(Ou(t)&&cb(e.stateNode,t.stateNode),!Nu(t));)t=t.return}function Nu(e){return e.tag===5||e.tag===3||e.tag===27}function Ou(e){return e&&e.tag===7&&e.stateNode!==null}function zu(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break e;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(l){Ee(e,e.return,l)}}function Uu(e,t,n){try{var i=e.stateNode;j1(i,e.type,n,t),i[bt]=t}catch(l){Ee(e,e.return,l)}}function Ap(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ei(e.type)||e.tag===4}function Bu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ap(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ei(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Lu(e,t,n,i){var l=e.tag;if(l===5||l===6)l=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(l,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(l),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=bn)),jo(e,i),xe=!0;else if(l!==4&&(l===27&&(jo(e,i),i=null,Ei(e.type)&&(n=e.stateNode,t=null)),e=e.child,e!==null))for(Lu(e,t,n,i),e=e.sibling;e!==null;)Lu(e,t,n,i),e=e.sibling}function Yo(e,t,n,i){var l=e.tag;if(l===5||l===6)l=e.stateNode,t?n.insertBefore(l,t):n.appendChild(l),jo(e,i),xe=!0;else if(l!==4&&(l===27&&(jo(e,i),i=null,Ei(e.type)&&(n=e.stateNode)),e=e.child,e!==null))for(Yo(e,t,n,i),e=e.sibling;e!==null;)Yo(e,t,n,i),e=e.sibling}function Ep(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,l=t.attributes;l.length;)t.removeAttributeNode(l[0]);ct(t,i,n),t[at]=e,t[bt]=n}catch(r){Ee(e,e.return,r)}}var Xo=!1,Ht=null;function wp(e){(e.tag===30||(e.subtreeFlags&33554432)!==0)&&(Xo=!0)}var _n=null;function Mp(){var e=_n;return _n=null,e}var xt=0;function Ya(e,t,n,i,l){return xt=0,Rp(e.child,t,n,i,l)}function Rp(e,t,n,i,l){for(var r=!1;e!==null;){if(e.tag===5){var g=e.stateNode;if(i!==null){var T=Tf(g);i.push(T),T.view&&(r=!0)}else r||Tf(g).view&&(r=!0);Xo=!0,M0(g,xt===0?t:t+"_"+xt,n),xt++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&l||Rp(e.child,t,n,i,l)&&(r=!0));e=e.sibling}return r}function An(e,t){for(;e!==null;)e.tag===5?R0(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&t||An(e.child,t)),e=e.sibling}function ko(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(ko(e),e.tag===30&&(e.flags&18874368)!==0&&e.stateNode.paired)){var t=e.memoizedProps;if(t.name==null||t.name==="auto")throw Error(o(544));var n=t.name;t=In(t.default,t.share),t!=="none"&&(Ya(e,n,t,null,!1)||An(e.child,!1))}e=e.sibling}}function Hu(e,t){if(e.tag===30){var n=e.stateNode,i=e.memoizedProps,l=Hn(i,n),r=In(i.default,n.paired?i.share:i.enter);r!=="none"?Ya(e,l,r,null,!1)?(ko(e),n.paired||t||$a(e,i.onEnter)):An(e.child,!1):ko(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Hu(e,t),e=e.sibling;else ko(e)}function Iu(e){if(Ht!==null&&Ht.size!==0){var t=Ht;if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var n=e.memoizedProps,i=n.name;if(i!=null&&i!=="auto"){var l=t.get(i);if(l!==void 0){var r=In(n.default,n.share);if(r!=="none"&&(Ya(e,i,r,null,!1)?(r=e.stateNode,l.paired=r,r.paired=l,$a(e,n.onShare)):An(e.child,!1)),t.delete(i),t.size===0)break}}}Iu(e)}e=e.sibling}}}function Fu(e){if(e.tag===30){var t=e.memoizedProps,n=Hn(t,e.stateNode),i=Ht!==null?Ht.get(n):void 0,l=In(t.default,i!==void 0?t.share:t.exit);l!=="none"&&(Ya(e,n,l,null,!1)?i!==void 0?(l=e.stateNode,i.paired=l,l.paired=i,Ht.delete(n),$a(e,t.onShare)):$a(e,t.onExit):An(e.child,!1)),Ht!==null&&Iu(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Fu(e),e=e.sibling;else Ht!==null&&Iu(e)}function Dp(e){for(e=e.child;e!==null;){if(e.tag===30){var t=e.memoizedProps,n=Hn(t,e.stateNode);t=In(t.default,t.update),e.flags&=-5,t!=="none"&&Ya(e,n,t,e.memoizedState=[],!1)}else(e.subtreeFlags&33554432)!==0&&Dp(e);e=e.sibling}}function Gu(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var t=e.stateNode;t.paired!==null&&(t.paired=null,An(e.child,!1))}Gu(e)}e=e.sibling}}function Ko(e){if(e.tag===30)e.stateNode.paired=null,An(e.child,!1),Gu(e);else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Ko(e),e=e.sibling;else Gu(e)}function Cp(e){for(e=e.child;e!==null;)e.tag===30?An(e.child,!1):(e.subtreeFlags&33554432)!==0&&Cp(e),e=e.sibling}function Vu(e,t,n,i,l,r,g){for(var T=!1;t!==null;){if(t.tag===5){var E=t.stateNode;if(r!==null&&xt<r.length){var B=r[xt],F=Tf(E);(B.view||F.view)&&(T=!0);var P;if(P=(e.flags&4)===0)if(F.clip)P=!0;else{P=B.rect;var z=F.rect;P=P.y!==z.y||P.x!==z.x||P.height!==z.height||P.width!==z.width}P&&(e.flags|=4),F.abs?F=!B.abs:(B=B.rect,F=F.rect,F=B.height!==F.height||B.width!==F.width),F&&(e.flags|=32)}else e.flags|=32;(e.flags&4)!==0&&M0(E,xt===0?n:n+"_"+xt,l),T&&(e.flags&4)!==0||(_n===null&&(_n=[]),_n.push(E,xt===0?i:i+"_"+xt,t.memoizedProps)),xt++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&g?e.flags|=t.flags&32:Vu(e,t.child,n,i,l,r,g)&&(T=!0));t=t.sibling}return T}function Np(e,t){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,i=e.stateNode,l=Hn(n,i),r=In(n.default,n.update),g;g=e.memoizedState,e.memoizedState=null,i=e;var T=e.child;xt=0,l=Vu(i,T,l,l,r,g,!1),(e.flags&4)!==0&&l&&$a(e,n.onUpdate)}else(e.subtreeFlags&33554432)!==0&&Np(e);e=e.sibling}}var et=!1,_e=!1,En=!1,qu=!1,Op=typeof WeakSet=="function"?WeakSet:Set,tt=null,wn=!1,fl=!1,Zo=!1,Pu=!1;function b1(e,t,n){if(e=e.containerInfo,pf=cs,e=Ld(e),Dc(e)){if("selectionStart"in e)var i={start:e.selectionStart,end:e.selectionEnd};else e:{i=(i=e.ownerDocument)&&i.defaultView||window;var l=i.getSelection&&i.getSelection();if(l&&l.rangeCount!==0){i=l.anchorNode;var r=l.anchorOffset,g=l.focusNode;l=l.focusOffset;try{i.nodeType,g.nodeType}catch{i=null;break e}var T=0,E=-1,B=-1,F=0,P=0,z=e,I=null;t:for(;;){for(var W;z!==i||r!==0&&z.nodeType!==3||(E=T+r),z!==g||l!==0&&z.nodeType!==3||(B=T+l),z.nodeType===3&&(T+=z.nodeValue.length),(W=z.firstChild)!==null;)I=z,z=W;for(;;){if(z===e)break t;if(I===i&&++F===r&&(E=T),I===g&&++P===l&&(B=T),(W=z.nextSibling)!==null)break;z=I,I=z.parentNode}z=W}i=E===-1||B===-1?null:{start:E,end:B}}else i=null}i=i||{start:0,end:0}}else i=null;for(gf={focusedElem:e,selectionRange:i},cs=!1,n=(n&335544064)===n,tt=t,t=n?9270:1024;tt!==null;){if(e=tt,n&&(i=e.deletions,i!==null))for(r=0;r<i.length;r++)n&&Fu(i[r]);if(e.alternate===null&&(e.flags&2)!==0)n&&wp(e),Qo(n);else{if(e.tag===22){if(i=e.alternate,e.memoizedState!==null){i!==null&&i.memoizedState===null&&n&&Fu(i),Qo(n);continue}else if(i!==null&&i.memoizedState!==null){n&&wp(e),Qo(n);continue}}i=e.child,(e.subtreeFlags&t)!==0&&i!==null?(i.return=e,tt=i):(n&&Dp(e),Qo(n))}}Ht=null}function Qo(e){for(;tt!==null;){var t=tt,n=e,i=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 15:break;case 1:if((l&1024)!==0&&i!==null){n=void 0,l=i.memoizedProps,i=i.memoizedState;var r=t.stateNode;try{var g=sa(t.type,l);n=r.getSnapshotBeforeUpdate(g,i),r.__reactInternalSnapshotBeforeUpdate=n}catch(T){Ee(t,t.return,T)}}break;case 3:if((l&1024)!==0){if(i=t.stateNode.containerInfo,n=i.nodeType,n===9)_f(i);else if(n===1)switch(i.nodeName){case"HEAD":case"HTML":case"BODY":_f(i);break;default:i.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:n&&i!==null&&(n=Hn(i.memoizedProps,i.stateNode),l=t.memoizedProps,l=In(l.default,l.update),l!=="none"&&Ya(i,n,l,i.memoizedState=[],!0));break;default:if((l&1024)!==0)throw Error(o(163))}if(i=t.sibling,i!==null){i.return=t.return,tt=i;break}tt=t.return}}function zp(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:Mn(e,n),i&4&&cl(5,n);break;case 1:if(Mn(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(g){Ee(n,n.return,g)}else{var l=sa(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(l,t,e.__reactInternalSnapshotBeforeUpdate)}catch(g){Ee(n,n.return,g)}}i&64&&xp(n),i&512&&Sn(n,n.return);break;case 3:if(Mn(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{um(e,t)}catch(g){Ee(n,n.return,g)}}break;case 27:t===null&&i&4&&Ep(n);case 26:case 5:Mn(e,n),t===null&&i&4&&zu(n),i&512&&Sn(n,n.return);break;case 12:Mn(e,n);break;case 31:Mn(e,n),i&4&&Hp(e,n);break;case 13:Mn(e,n),i&4&&Ip(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=N1.bind(null,n),hb(e,n))));break;case 22:if(i=n.memoizedState!==null||et,!i){var r=t!==null&&t.memoizedState!==null||_e;t=et,l=_e,et=i,(_e=r)&&!l?(i=2,(n.subtreeFlags&8772)!==0&&(i|=1),un(e,n,i)):Mn(e,n),et=t,_e=l}break;case 30:Mn(e,n),i&512&&Sn(n,n.return);break;case 7:i&512&&Sn(n,n.return);default:Mn(e,n)}}function ju(e,t){for(e=e.child;e!==null;)Up(e,t),e=e.sibling}function Up(e,t){switch(e.tag){case 5:case 26:try{var n=e.stateNode;if(t){var i=n.style;typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"}else{var l=e.stateNode,r=e.memoizedProps.style,g=r!=null&&r.hasOwnProperty("display")?r.display:null;l.style.display=g==null||typeof g=="boolean"?"":(""+g).trim()}}catch(E){Ee(e,e.return,E)}Yu(e,t);break;case 6:try{e.stateNode.nodeValue=t?"":e.memoizedProps,xe=!0}catch(E){Ee(e,e.return,E)}break;case 18:try{var T=e.stateNode;t?w0(T,!0):w0(e.stateNode,!1)}catch(E){Ee(e,e.return,E)}break;case 22:case 23:e.memoizedState===null&&ju(e,t);break;default:ju(e,t)}}function Yu(e,t){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){e:{var n=e,i=t;switch(n.tag){case 4:Up(n,i);break e;case 22:n.memoizedState===null&&Yu(n,i);break e;default:Yu(n,i)}}e=e.sibling}}function Bp(e){var t=e.alternate;t!==null&&(e.alternate=null,Bp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&eo(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Be=null,St=!1;function rn(e,t,n){for(n=n.child;n!==null;)Lp(e,t,n),n=n.sibling}function Lp(e,t,n){if(Ot&&typeof Ot.onCommitFiberUnmount=="function")try{Ot.onCommitFiberUnmount(Us,n)}catch{}switch(n.tag){case 26:_e||rt(n,t),rn(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&!_e&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:_e||rt(n,t),ul(n);var i=Be,l=St;Ei(n.type)&&(Be=n.stateNode,St=!1),rn(e,t,n),G0(n.stateNode,n.type,n.memoizedProps),Be=i,St=l;break;case 5:_e||rt(n,t),ul(n);case 6:if(n.tag===6&&ul(n),i=Be,l=St,Be=null,rn(e,t,n),Be=i,St=l,Be!==null)if(St)try{(Be.nodeType===9?Be.body:Be.nodeName==="HTML"?Be.ownerDocument.body:Be).removeChild(n.stateNode),xe=!0}catch(r){Ee(n,t,r)}else try{Be.removeChild(n.stateNode),xe=!0}catch(r){Ee(n,t,r)}break;case 18:Be!==null&&(St?(e=Be,E0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),us(e)):E0(Be,n.stateNode));break;case 4:i=Be,l=St,Be=n.stateNode.containerInfo,St=!0,rn(e,t,n),Be=i,St=l;break;case 0:case 11:case 14:case 15:yi(2,n,t),_e||yi(4,n,t),rn(e,t,n);break;case 1:_e||(rt(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&Sp(n,t,i)),rn(e,t,n);break;case 21:rn(e,t,n);break;case 22:_e=(i=_e)||n.memoizedState!==null,rn(e,t,n),_e=i;break;case 30:rt(n,t),rn(e,t,n);break;case 7:_e||rt(n,t),rn(e,t,n);break;default:rn(e,t,n)}}function Hp(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{us(e)}catch(n){Ee(t,t.return,n)}}}function Ip(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{us(e)}catch(n){Ee(t,t.return,n)}}function T1(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Op),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Op),t;default:throw Error(o(435,e.tag))}}function Wo(e,t){var n=T1(e);t.forEach(function(i){if(!n.has(i)){n.add(i);var l=O1.bind(null,e,i);i.then(l,l)}})}function mt(e,t,n){var i=t.deletions;if(i!==null)for(var l=0;l<i.length;l++){var r=i[l],g=e,T=t,E=T;e:for(;E!==null;){switch(E.tag){case 27:if(Ei(E.type)){Be=E.stateNode,St=!1;break e}break;case 5:Be=E.stateNode,St=!1;break e;case 3:case 4:Be=E.stateNode.containerInfo,St=!0;break e}E=E.return}if(Be===null)throw Error(o(160));Lp(g,T,r),Be=null,St=!1,g=r.alternate,g!==null&&(g.return=null),r.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Fp(t,e,n),t=t.sibling}var cn=null;function Fp(e,t,n){var i=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(l&4&&(i=e.updateQueue,i=i!==null?i.events:null,i!==null))for(var r=0;r<i.length;r++){var g=i[r];g.ref.impl=g.nextImpl}mt(t,e,n),pt(e),l&4&&(yi(3,e,e.return),cl(3,e),yi(5,e,e.return));break;case 1:mt(t,e,n),pt(e),l&512&&(_e||i===null||rt(i,i.return)),l&64&&et&&(e=e.updateQueue,e!==null&&(t=e.callbacks,t!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?t:n.concat(t))));break;case 26:if(r=cn,mt(t,e,n),pt(e),l&512&&(_e||i===null||rt(i,i.return)),l&4)if(l=i!==null?i.memoizedState:null,n=e.memoizedState,i===null)if(n===null)if(e.stateNode===null)if(et)e.stateNode=S0(e.type,e.memoizedProps,t.containerInfo,e);else{e:{t=e.type,n=e.memoizedProps,l=r.ownerDocument||r;t:switch(t){case"title":i=l.getElementsByTagName("title")[0],(!i||i[Hs]||i[at]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=l.createElement(t),l.head.insertBefore(i,l.querySelector("head > title"))),ct(i,t,n),i[at]=e,Je(i),t=i;break e;case"link":if(r=X0("link","href",l).get(t+(n.href||""))){for(g=0;g<r.length;g++)if(i=r[g],i.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&i.getAttribute("rel")===(n.rel==null?null:n.rel)&&i.getAttribute("title")===(n.title==null?null:n.title)&&i.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){r.splice(g,1);break t}}i=l.createElement(t),ct(i,t,n),l.head.appendChild(i);break;case"meta":if(r=X0("meta","content",l).get(t+(n.content||""))){for(g=0;g<r.length;g++)if(i=r[g],i.getAttribute("content")===(n.content==null?null:""+n.content)&&i.getAttribute("name")===(n.name==null?null:n.name)&&i.getAttribute("property")===(n.property==null?null:n.property)&&i.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&i.getAttribute("charset")===(n.charSet==null?null:n.charSet)){r.splice(g,1);break t}}i=l.createElement(t),ct(i,t,n),l.head.appendChild(i);break;default:throw Error(o(468,t))}i[at]=e,Je(i),t=i}e.stateNode=t}else et||Cf(r,e.type,e.stateNode);else e.stateNode=Y0(r,n,e.memoizedProps);else l!==n?(l===null?(t=i.stateNode,t===null||_e||t.parentNode.removeChild(t)):l.count--,n===null?et||Cf(r,e.type,e.stateNode):Y0(r,n,e.memoizedProps)):n===null&&e.stateNode!==null&&Uu(e,e.memoizedProps,i.memoizedProps);break;case 27:mt(t,e,n),pt(e),l&512&&(_e||i===null||rt(i,i.return)),i!==null&&l&4&&Uu(e,e.memoizedProps,i.memoizedProps);break;case 5:if(r=En,En=!1,mt(t,e,n),En=r,pt(e),l&512&&(_e||i===null||rt(i,i.return)),e.flags&32){t=e.stateNode;try{Ma(t,""),xe=!0}catch(F){Ee(e,e.return,F)}}l&4&&e.stateNode!=null&&(t=e.memoizedProps,Uu(e,t,i!==null?i.memoizedProps:t)),l&1024&&(qu=!0);break;case 6:if(mt(t,e,n),pt(e),l&4){if(e.stateNode===null)throw Error(o(162));t=e.memoizedProps,n=e.stateNode;try{n.nodeValue=t,xe=!0}catch(F){Ee(e,e.return,F)}}break;case 3:if(xe=!1,hr=null,r=cn,cn=Tl(t.containerInfo),mt(t,e,n),cn=r,pt(e),l&4&&i!==null&&i.memoizedState.isDehydrated)try{us(t.containerInfo)}catch(F){Ee(e,e.return,F)}qu&&(qu=!1,Gp(e)),xe=!1;break;case 4:l=En,En=et,i=ld(),r=cn,cn=Tl(e.stateNode.containerInfo),mt(t,e,n),pt(e),cn=r,xe&&fl&&(Zo=!0),xe=i,En=l;break;case 12:mt(t,e,n),pt(e);break;case 31:mt(t,e,n),pt(e),l&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Wo(e,t)));break;case 13:mt(t,e,n),pt(e),e.child.flags&8192&&e.memoizedState!==null!=(i!==null&&i.memoizedState!==null)&&(er=Nt()),l&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Wo(e,t)));break;case 22:r=e.memoizedState!==null,g=i!==null&&i.memoizedState!==null;var T=et,E=_e,B=En;et=T||r,En=B||r,_e=E||g,mt(t,e,n),_e=E,En=B,et=T,pt(e),l&8192&&(t=e.stateNode,t._visibility=r?t._visibility&-2:t._visibility|1,!r||i===null||g||et||_e||(t=g||_e,n=et,i=_e,et=r||et,_e=t,bi(e,2),et=n,_e=i),!r&&En||ju(e,r)),l&4&&(t=e.updateQueue,t!==null&&(n=t.retryQueue,n!==null&&(t.retryQueue=null,Wo(e,n))));break;case 19:mt(t,e,n),pt(e),l&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Wo(e,t)));break;case 30:l&512&&(_e||i===null||rt(i,i.return)),l=ld(),r=fl,g=(n&335544064)===n,T=e.memoizedProps,fl=g&&In(T.default,T.update)!=="none",mt(t,e,n),pt(e),g&&i!==null&&xe&&(e.flags|=4),fl=r,xe=l;break;case 21:break;case 7:l&512&&(_e||i===null||rt(i,i.return)),i&&i.stateNode!==null&&(i.stateNode._fragmentFiber=e);default:mt(t,e,n),pt(e)}}function pt(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(Ap(i)){n=i;break}i=i.return}i=null;for(var l=e.return;l!==null;){if(Ou(l)){var r=l.stateNode;i===null?i=[r]:i.push(r)}if(Nu(l))break;l=l.return}var g=i;if(n==null)throw Error(o(160));switch(n.tag){case 27:var T=n.stateNode,E=Bu(e);Yo(e,E,T,g);break;case 5:var B=n.stateNode;n.flags&32&&(Ma(B,""),n.flags&=-33);var F=Bu(e);Yo(e,F,B,g);break;case 3:case 4:var P=n.stateNode.containerInfo,z=Bu(e);Lu(e,z,P,g);break;default:throw Error(o(161))}}catch(I){Ee(e,e.return,I)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Gp(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Gp(t),t.tag===5&&t.flags&1024&&(t=t.stateNode,cs=!0,t.reset(),cs=!1),e=e.sibling}}function Xa(e,t){if(t.subtreeFlags&9270)for(t=t.child;t!==null;)Vp(t,e),t=t.sibling;else Np(t)}function Vp(e,t){var n=e.alternate;if(n===null)Hu(e,!1);else switch(e.tag){case 3:if(Pu=wn=!1,Mp(),Xa(t,e),!wn&&!Zo){if(e=_n,e!==null)for(var i=0;i<e.length;i+=3){n=e[i];var l=e[i+1];R0(n,e[i+2]),n=n.ownerDocument.documentElement,n!==null&&n.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+l+")"})}e=t.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===""&&(e.style.viewTransitionName="none",e.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),Pu=!0}_n=null;break;case 5:Xa(t,e);break;case 4:i=wn,wn=!1,Xa(t,e),wn&&(Zo=!0),wn=i;break;case 22:e.memoizedState===null&&(n.memoizedState!==null?Hu(e,!1):Xa(t,e));break;case 30:i=wn,l=Mp(),wn=!1,Xa(t,e),wn&&(e.flags|=4);var r=e.memoizedProps,g=e.stateNode;t=Hn(r,g),g=Hn(n.memoizedProps,g);var T=In(r.default,r.update);T==="none"?t=!1:(r=n.memoizedState,n.memoizedState=null,n=e.child,xt=0,t=Vu(e,n,t,g,T,r,!0),xt!==(r===null?0:r.length)&&(e.flags|=32)),(e.flags&4)!==0&&t?($a(e,e.memoizedProps.onUpdate),_n=l):l!==null&&(l.push.apply(l,_n),_n=l),wn=(e.flags&32)!==0?!0:i;break;default:Xa(t,e)}}function Mn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)zp(e,t.alternate,t),t=t.sibling}function bi(e,t){for(e=e.child;e!==null;){var n=e,i=t;switch(n.tag){case 0:case 11:case 14:case 15:yi(4,n,n.return),bi(n,i);break;case 1:rt(n,n.return);var l=n.stateNode;typeof l.componentWillUnmount=="function"&&Sp(n,n.return,l),bi(n,i);break;case 27:(i&2)!==0&&G0(n.stateNode,n.type,n.memoizedProps);case 5:rt(n,n.return),n.tag!==5&&n.tag!==27||ul(n),bi(n,i);break;case 6:ul(n);break;case 26:rt(n,n.return),l=n.stateNode,n.memoizedState!==null||l===null||_e||l.parentNode.removeChild(l),bi(n,i);break;case 22:n.memoizedState===null&&bi(n,i);break;case 30:rt(n,n.return),bi(n,i);break;case 7:rt(n,n.return);default:bi(n,i)}e=e.sibling}}function un(e,t,n){for(n=(t.subtreeFlags&8772)!==0?n:n&-2,t=t.child;t!==null;){var i=t.alternate,l=e,r=t,g=r.flags,T=(n&1)!==0;switch(r.tag){case 0:case 11:case 15:un(l,r,n),cl(4,r);break;case 1:if(un(l,r,n),i=r,l=i.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(F){Ee(i,i.return,F)}if(i=r,l=i.updateQueue,l!==null){var E=i.stateNode;try{var B=l.shared.hiddenCallbacks;if(B!==null)for(l.shared.hiddenCallbacks=null,l=0;l<B.length;l++)cm(B[l],E)}catch(F){Ee(i,i.return,F)}}T&&g&64&&xp(r),Sn(r,r.return);break;case 27:(n&2)!==0&&Ep(r);case 5:r.tag!==5&&r.tag!==27||_p(r),un(l,r,n),T&&i===null&&g&4&&zu(r),Sn(r,r.return);break;case 6:_p(r);break;case 26:E=r.stateNode,r.memoizedState!==null||E===null||et||Cf(Tl(E.ownerDocument),r.type,E),un(l,r,n),T&&i===null&&g&4&&zu(r),Sn(r,r.return);break;case 12:un(l,r,n);break;case 31:un(l,r,n),T&&g&4&&Hp(l,r);break;case 13:un(l,r,n),T&&g&4&&Ip(l,r);break;case 22:r.memoizedState===null&&un(l,r,n),Sn(r,r.return);break;case 30:un(l,r,n),Sn(r,r.return);break;case 7:Sn(r,r.return);default:un(l,r,n)}t=t.sibling}}function Xu(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Qs(n))}function ku(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Qs(e))}function Jt(e,t,n,i){var l=(n&335544064)===n;if(t.subtreeFlags&(l?10262:10256))for(t=t.child;t!==null;)qp(e,t,n,i),t=t.sibling;else l&&Cp(t)}function qp(e,t,n,i){var l=(n&335544064)===n;l&&t.alternate===null&&t.return!==null&&t.return.alternate!==null&&Ko(t);var r=t.flags;switch(t.tag){case 0:case 11:case 15:Jt(e,t,n,i),r&2048&&cl(9,t);break;case 1:Jt(e,t,n,i);break;case 3:Jt(e,t,n,i),l&&Pu&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,e.style.viewTransitionName==="root"&&(e.style.viewTransitionName=""),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName==="none"&&(e.style.viewTransitionName="")),r&2048&&(r=null,t.alternate!==null&&(r=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==r&&(t.refCount++,r!=null&&Qs(r)));break;case 12:if(r&2048){Jt(e,t,n,i),r=t.stateNode;try{var g=t.memoizedProps,T=g.id,E=g.onPostCommit;typeof E=="function"&&E(T,t.alternate===null?"mount":"update",r.passiveEffectDuration,-0)}catch(B){Ee(t,t.return,B)}}else Jt(e,t,n,i);break;case 31:Jt(e,t,n,i);break;case 13:Jt(e,t,n,i);break;case 23:break;case 22:g=t.stateNode,T=t.alternate,t.memoizedState!==null?(l&&T!==null&&T.memoizedState===null&&Ko(T),g._visibility&2?Jt(e,t,n,i):hl(e,t)):(l&&T!==null&&T.memoizedState!==null&&Ko(t),g._visibility&2?Jt(e,t,n,i):(g._visibility|=2,ka(e,t,n,i,(t.subtreeFlags&10256)!==0||!1))),r&2048&&Xu(T,t);break;case 24:Jt(e,t,n,i),r&2048&&ku(t.alternate,t);break;case 30:l&&(r=t.alternate,r!==null&&(An(r.child,!0),An(t.child,!0))),Jt(e,t,n,i);break;default:Jt(e,t,n,i)}}function ka(e,t,n,i,l){for(l=l&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var r=e,g=t,T=n,E=i,B=g.flags;switch(g.tag){case 0:case 11:case 15:ka(r,g,T,E,l),cl(8,g);break;case 23:break;case 22:var F=g.stateNode;g.memoizedState!==null?F._visibility&2?ka(r,g,T,E,l):hl(r,g):(F._visibility|=2,ka(r,g,T,E,l)),l&&B&2048&&Xu(g.alternate,g);break;case 24:ka(r,g,T,E,l),l&&B&2048&&ku(g.alternate,g);break;default:ka(r,g,T,E,l)}t=t.sibling}}function hl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,l=i.flags;switch(i.tag){case 22:hl(n,i),l&2048&&Xu(i.alternate,i);break;case 24:hl(n,i),l&2048&&ku(i.alternate,i);break;default:hl(n,i)}t=t.sibling}}var la=8192;function oa(e,t,n){if(e.subtreeFlags&la)for(e=e.child;e!==null;)Pp(e,t,n),e=e.sibling}function Pp(e,t,n){switch(e.tag){case 26:oa(e,t,n),e.flags&la&&(e.memoizedState!==null?wb(n,cn,e.memoizedState,e.memoizedProps):(e=e.stateNode,(t&335544128)===t&&Q0(n,e)));break;case 5:oa(e,t,n),e.flags&la&&(e=e.stateNode,(t&335544128)===t&&Q0(n,e));break;case 3:case 4:var i=cn;cn=Tl(e.stateNode.containerInfo),oa(e,t,n),cn=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=la,la=16777216,oa(e,t,n),la=i):oa(e,t,n));break;case 30:if((e.flags&la)!==0&&(i=e.memoizedProps.name,i!=null&&i!=="auto")){var l=e.stateNode;l.paired=null,Ht===null&&(Ht=new Map),Ht.set(i,l)}oa(e,t,n);break;default:oa(e,t,n)}}function jp(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function dl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];tt=i,Xp(i,e)}jp(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Yp(e),e=e.sibling}function Yp(e){switch(e.tag){case 0:case 11:case 15:dl(e),e.flags&2048&&yi(9,e,e.return);break;case 3:dl(e);break;case 12:dl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Jo(e)):dl(e);break;default:dl(e)}}function Jo(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];tt=i,Xp(i,e)}jp(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:yi(8,t,t.return),Jo(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Jo(t));break;default:Jo(t)}e=e.sibling}}function Xp(e,t){for(;tt!==null;){var n=tt;switch(n.tag){case 0:case 11:case 15:yi(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:Qs(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,tt=i;else e:for(n=e;tt!==null;){i=tt;var l=i.sibling,r=i.return;if(Bp(i),i===n){tt=null;break e}if(l!==null){l.return=r,tt=l;break e}tt=r}}}var x1={getCacheForType:function(e){var t=st(je),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return st(je).controller.signal}},S1=typeof WeakMap=="function"?WeakMap:Map,Se=0,Ce=null,de=null,ve=0,Ae=0,It=null,Ti=!1,Ka=!1,Ku=!1,kn=0,Fe=0,xi=0,ra=0,$o=0,Ft=0,Za=0,ml=null,_t=null,Zu=!1,er=0,kp=0,tr=1/0,nr=null,Si=null,He=0,fn=null,ca=null,Rn=0,Qu=0,Wu=null,Kp=null,Qa=null,Wa=null,Ja=null,pl=0,ir=null;function Gt(){return(Se&2)!==0&&ve!==0?ve&-ve:se.T!==null?rf():Wh()}function Zp(){if(Ft===0)if((ve&536870912)===0||fe){var e=Ql;Ql<<=1,(Ql&3932160)===0&&(Ql=262144),Ft=e}else Ft=536870912;return e=lt.current,e!==null&&(e.flags|=32),Ft}function $a(e,t){if(t!=null){var n=e.stateNode,i=n.ref;i===null&&(i=n.ref=D0(Hn(e.memoizedProps,n))),Wa===null&&(Wa=[]),Wa.push(t.bind(null,i))}}function At(e,t,n){(e===Ce&&(Ae===2||Ae===9)||e.cancelPendingCommit!==null)&&(es(e,0),_i(e,ve,Ft,!1)),Ls(e,n),((Se&2)===0||e!==Ce)&&(e===Ce&&((Se&2)===0&&(ra|=n),Fe===4&&_i(e,ve,Ft,!1)),Dn(e))}function Qp(e,t,n){if((Se&6)!==0)throw Error(o(327));var i=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Bs(e,t),l=i?E1(e,t):$u(e,t,!0),r=i;do{if(l===0){Ka&&!i&&_i(e,t,0,!1);break}else{if(n=e.current.alternate,r&&!_1(n)){l=$u(e,t,!1),r=!1;continue}if(l===2){if(r=t,e.errorRecoveryDisabledLanes&r)var g=0;else g=e.pendingLanes&-536870913,g=g!==0?g:g&536870912?536870912:0;if(g!==0){t=g;e:{var T=e;l=ml;var E=T.current.memoizedState.isDehydrated;if(E&&(es(T,g).flags|=256),g=$u(T,g,!1),g!==2&&g!==6){if(Ku&&!E){T.errorRecoveryDisabledLanes|=r,ra|=r,l=4;break e}r=_t,_t=l,r!==null&&(_t===null?_t=r:_t.push.apply(_t,r))}l=g}if(r=!1,l!==2)continue}}if(l===1){es(e,0),_i(e,t,0,!0);break}e:{switch(i=e,r=l,r){case 0:case 1:throw Error(o(345));case 4:if((t&4194048)!==t&&(t&62914560)!==t)break;case 6:_i(i,t,Ft,!Ti);break e;case 2:_t=null;break;case 3:case 5:break;default:throw Error(o(329))}if((t&62914560)===t&&(l=er+300-Nt(),10<l)){if(_i(i,t,Ft,!Ti),Jl(i,0,!0)!==0)break e;Rn=t,i.timeoutHandle=bf(Wp.bind(null,i,n,_t,nr,Zu,t,Ft,ra,Za,Ti,r,"Throttled",-0,0),l);break e}Wp(i,n,_t,nr,Zu,t,Ft,ra,Za,Ti,r,null,-0,0)}}break}while(!0);Dn(e)}function Wp(e,t,n,i,l,r,g,T,E,B,F,P,z,I){e.timeoutHandle=-1;var W=t.subtreeFlags,te=(r&335544064)===r;if(P=null,(te||W&8192||(W&16785408)===16785408)&&(P={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:bn},Ht=null,Pp(t,r,P),te&&(W=P,te=e.containerInfo,te=(te.nodeType===9?te:te.ownerDocument).__reactViewTransition,te!=null&&(W.count++,W.waitingForViewTransition=!0,W=_l.bind(W),te.finished.then(W,W))),W=(r&62914560)===r?er-Nt():(r&4194048)===r?kp-Nt():0,W=Mb(P,W),W!==null)){Rn=r,e.cancelPendingCommit=W(s0.bind(null,e,t,r,n,i,l,g,T,E,B,F,P,null,z,I)),_i(e,r,g,!B);return}s0(e,t,r,n,i,l,g,T,E,B,F,P)}function _1(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var l=n[i],r=l.getSnapshot;l=l.value;try{if(!Bt(r(),l))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function _i(e,t,n,i){t=Xh(e,t),t&=~$o,t&=~ra,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var l=t;0<l;){var r=31-zt(l),g=1<<r;i[r]=-1,l&=~g}n!==0&&Kh(e,n,t)}function ar(){return(Se&6)===0?(gl(0),!1):!0}function Ju(){if(de!==null){if(Ae===0)var e=de.return;else e=de,Vn=Qi=null,lu(e),Ga=null,$s=0,e=de;for(;e!==null;)Tp(e.alternate,e),e=e.return;de=null}}function es(e,t){var n=e.timeoutHandle;return n!==-1&&(e.timeoutHandle=-1,k1(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Rn=0,Ju(),Ce=e,de=n=Fn(e.current,null),ve=t,Ae=0,It=null,Ti=!1,Ka=Bs(e,t),Ku=!1,Za=Ft=$o=ra=xi=Fe=0,_t=ml=null,Zu=!1,kn=Xh(e,t),fo(),n}function Jp(e,t){re=null,se.H=Ho,t===Fa||t===_o?(t=sm(),Ae=3):t===kc?(t=sm(),Ae=4):Ae=t===xu?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,It=t,de===null&&(Fe=1,Io(e,Kt(t,e.current)))}function $p(){var e=lt.current;return e===null?!0:(ve&4194048)===ve?ft===null:(ve&62914560)===ve||(ve&536870912)!==0?e===ft:!1}function e0(){var e=se.H;return se.H=Ho,e===null?Ho:e}function t0(){var e=se.A;return se.A=x1,e}function sr(){Fe=4,Ti||(ve&4194048)!==ve&&lt.current!==null||(Ka=!0),(xi&134217727)===0&&(ra&134217727)===0||Ce===null||_i(Ce,ve,Ft,!1)}function $u(e,t,n){var i=Se;Se|=2;var l=e0(),r=t0();(Ce!==e||ve!==t)&&(nr=null,es(e,t)),t=!1;var g=Fe;e:do try{if(Ae!==0&&de!==null){var T=de,E=It;switch(Ae){case 8:Ju(),g=6;break e;case 3:case 2:case 9:case 6:lt.current===null&&(t=!0);var B=Ae;if(Ae=0,It=null,ts(e,T,E,B),n&&Ka){g=0;break e}break;default:B=Ae,Ae=0,It=null,ts(e,T,E,B)}}A1(),g=Fe;break}catch(F){Jp(e,F)}while(!0);return t&&e.shellSuspendCounter++,Vn=Qi=null,Se=i,se.H=l,se.A=r,de===null&&(Ce=null,ve=0,fo()),g}function A1(){for(;de!==null;)n0(de)}function E1(e,t){var n=Se;Se|=2;var i=e0(),l=t0();Ce!==e||ve!==t?(nr=null,tr=Nt()+500,es(e,t)):Ka=Bs(e,t);e:do try{if(Ae!==0&&de!==null){t=de;var r=It;t:switch(Ae){case 1:Ae=0,It=null,ts(e,t,r,1);break;case 2:case 9:if(im(r)){Ae=0,It=null,i0(t);break}t=function(){Ae!==2&&Ae!==9||Ce!==e||(Ae=7),Dn(e)},r.then(t,t);break e;case 3:Ae=7;break e;case 4:Ae=5;break e;case 7:im(r)?(Ae=0,It=null,i0(t)):(Ae=0,It=null,ts(e,t,r,7));break;case 5:var g=null;switch(de.tag){case 26:g=de.memoizedState;case 5:case 27:var T=de;if(g?K0(g):T.stateNode.complete){Ae=0,It=null;var E=T.sibling;if(E!==null)de=E;else{var B=T.return;B!==null?(de=B,lr(B)):de=null}break t}}Ae=0,It=null,ts(e,t,r,5);break;case 6:Ae=0,It=null,ts(e,t,r,6);break;case 8:Ju(),Fe=6;break e;default:throw Error(o(462))}}w1();break}catch(F){Jp(e,F)}while(!0);return Vn=Qi=null,se.H=i,se.A=l,Se=n,de!==null?0:(Ce=null,ve=0,fo(),Fe)}function w1(){for(;de!==null&&!Pv();)n0(de)}function n0(e){var t=yp(e.alternate,e,kn);e.memoizedProps=e.pendingProps,t===null?lr(e):de=t}function i0(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=fp(n,t,t.pendingProps,t.type,void 0,ve);break;case 11:t=fp(n,t,t.pendingProps,t.type.render,t.ref,ve);break;case 5:lu(t);var i=t;i===$e&&(fe?(yo(i),i.tag===5&&i.stateNode!=null&&(Oe=i.stateNode)):(yo(i),fe=!0));default:Tp(n,t),t=de=Xd(t,kn),t=yp(n,t,kn)}e.memoizedProps=e.pendingProps,t===null?lr(e):de=t}function ts(e,t,n,i){Vn=Qi=null,lu(t),Ga=null,$s=0;var l=t.return;try{if(d1(e,l,t,n,ve)){Fe=1,Io(e,Kt(n,e.current)),de=null;return}}catch(r){if(l!==null)throw de=l,r;Fe=1,Io(e,Kt(n,e.current)),de=null;return}t.flags&32768?(fe||i===1?e=!0:Ka||(ve&536870912)!==0?e=!1:(Ti=e=!0,(i===2||i===9||i===3||i===6)&&(i=lt.current,i!==null&&i.tag===13&&(i.flags|=16384))),a0(t,e)):lr(t)}function lr(e){var t=e;do{if((t.flags&32768)!==0){a0(t,Ti);return}e=t.return;var n=v1(t.alternate,t,kn);if(n!==null){de=n;return}if(t=t.sibling,t!==null){de=t;return}de=t=e}while(t!==null);Fe===0&&(Fe=5)}function a0(e,t){do{var n=y1(e.alternate,e);if(n!==null){n.flags&=32767,de=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){de=e;return}de=e=n}while(e!==null);Fe=6,de=null}function s0(e,t,n,i,l,r,g,T,E,B,F,P){e.cancelPendingCommit=null;do or();while(He!==0);if((Se&6)!==0)throw Error(o(327));if(t!==null){if(t===e.current)throw Error(o(177));e===Ce&&(de=Ce=null,ve=0),ca=t,fn=e,Rn=n,Wu=l,Kp=i,M1(e,t,n,g,T,E,P)}}function M1(e,t,n,i,l,r,g){var T=t.lanes|t.childLanes;if(Qu=T,T|=Uc,$v(e,n,T,i,l,r),Wa=null,(n&335544064)===n?(Ja=t1(e),i=10262):(Ja=null,i=10256),(t.subtreeFlags&i)!==0||(t.flags&i)!==0?(e.callbackNode=null,e.callbackPriority=0,z1(Kl,function(){return af(),null})):(e.callbackNode=null,e.callbackPriority=0),Xo=!1,i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=se.T,se.T=null,l=be.p,be.p=2,r=Se,Se|=4;try{b1(e,t,n)}finally{Se=r,be.p=l,se.T=i}}He=1,Xo?Qa=$1(g,e.containerInfo,Ja,ef,tf,D1,nf,af,R1):(ef(),tf(),nf())}function R1(e){if(He!==0){var t=fn.onRecoverableError;t(e,{componentStack:null})}}function D1(){He===3&&(He=0,Vp(ca,fn),He=4)}function ef(){if(He===1){He=0;var e=fn,t=ca,n=Rn,i=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||i){i=se.T,se.T=null;var l=be.p;be.p=2;var r=Se;Se|=4;try{fl=Zo=!1,Fp(t,e,n),n=gf;var g=Ld(e.containerInfo),T=n.focusedElem,E=n.selectionRange;if(g!==T&&T&&T.ownerDocument&&Bd(T.ownerDocument.documentElement,T)){if(E!==null&&Dc(T)){var B=E.start,F=E.end;if(F===void 0&&(F=B),"selectionStart"in T)T.selectionStart=B,T.selectionEnd=Math.min(F,T.value.length);else{var P=T.ownerDocument||document,z=P&&P.defaultView||window;if(z.getSelection){var I=z.getSelection(),W=T.textContent.length,te=Math.min(E.start,W),ce=E.end===void 0?te:Math.min(E.end,W);!I.extend&&te>ce&&(g=ce,ce=te,te=g);var U=Ud(T,te),N=Ud(T,ce);if(U&&N&&(I.rangeCount!==1||I.anchorNode!==U.node||I.anchorOffset!==U.offset||I.focusNode!==N.node||I.focusOffset!==N.offset)){var L=P.createRange();L.setStart(U.node,U.offset),I.removeAllRanges(),te>ce?(I.addRange(L),I.extend(N.node,N.offset)):(L.setEnd(N.node,N.offset),I.addRange(L))}}}}for(P=[],I=T;I=I.parentNode;)I.nodeType===1&&P.push({element:I,left:I.scrollLeft,top:I.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<P.length;T++){var q=P[T];q.element.scrollLeft=q.left,q.element.scrollTop=q.top}}cs=!!pf,gf=pf=null}finally{Se=r,be.p=l,se.T=i}}e.current=t,He=2}}function tf(){if(He===2){He=0;var e=fn,t=ca,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=se.T,se.T=null;var i=be.p;be.p=2;var l=Se;Se|=4;try{zp(e,t.alternate,t)}finally{Se=l,be.p=i,se.T=n}}He=3}}function nf(){if(He===4||He===3){He=0;var e=Qa;Qa=null,jv();var t=fn,n=ca,i=Rn,l=Kp,r=(i&335544064)===i?10262:10256;if((n.subtreeFlags&r)!==0||(n.flags&r)!==0?He=5:(He=0,ca=fn=null,l0(t,t.pendingLanes)),r=t.pendingLanes,r===0&&(Si=null),fc(i),n=n.stateNode,Ot&&typeof Ot.onCommitFiberRoot=="function")try{Ot.onCommitFiberRoot(Us,n,void 0,(n.current.flags&128)===128)}catch{}if(l!==null){n=se.T,r=be.p,be.p=2,se.T=null;try{for(var g=t.onRecoverableError,T=0;T<l.length;T++){var E=l[T];g(E.value,{componentStack:E.stack})}}finally{se.T=n,be.p=r}}if(l=Wa,g=Ja,Ja=null,l!==null&&(Wa=null,g===null&&(g=[]),e!==null))for(E=0;E<l.length;E++)n=(0,l[E])(g),n!==void 0&&e.finished.finally(n);(Rn&3)!==0&&or(),Dn(t),r=t.pendingLanes,(i&261930)!==0&&(r&42)!==0?t===ir?pl++:(pl=0,ir=t):(pl=0,ir=null),gl(0)}}function l0(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Qs(t)))}function or(){return Qa!==null&&(Qa.skipTransition(),Qa=null),ef(),tf(),nf(),af()}function af(){if(He!==5)return!1;var e=fn,t=Qu;Qu=0;var n=fc(Rn),i=se.T,l=be.p;try{be.p=32>n?32:n,se.T=null,n=Wu,Wu=null;var r=fn,g=Rn;if(He=0,ca=fn=null,Rn=0,(Se&6)!==0)throw Error(o(331));var T=Se;if(Se|=4,Yp(r.current),qp(r,r.current,g,n),Se=T,gl(0,!1),Ot&&typeof Ot.onPostCommitFiberRoot=="function")try{Ot.onPostCommitFiberRoot(Us,r)}catch{}return!0}finally{be.p=l,se.T=i,l0(e,t)}}function o0(e,t,n){t=Kt(n,t),t=Tu(e.stateNode,t,2),e=mi(e,t,2),e!==null&&(Ls(e,2),Dn(e))}function Ee(e,t,n){if(e.tag===3)o0(e,e,n);else for(;t!==null;){if(t.tag===3){o0(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Si===null||!Si.has(i))){e=Kt(n,e),n=ip(2),i=mi(t,n,2),i!==null&&(ap(n,i,t,e),Ls(i,2),Dn(i));break}}t=t.return}}function sf(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new S1;var l=new Set;i.set(t,l)}else l=i.get(t),l===void 0&&(l=new Set,i.set(t,l));l.has(n)||(Ku=!0,l.add(n),e=C1.bind(null,e,t,n),t.then(e,e))}function C1(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Ce===e&&(ve&n)===n&&((Fe===4||Fe===3&&(ve&62914560)===ve&&300>Nt()-er)&&(Se&2)===0?es(e,0):$o|=n,Za===ve&&(Za=0)),Dn(e)}function r0(e,t){t===0&&(t=kh()),e=ki(e,t),e!==null&&(Ls(e,t),Dn(e))}function N1(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),r0(e,n)}function O1(e,t){var n=0;switch(e.tag){case 31:case 13:var i=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(o(314))}i!==null&&i.delete(t),r0(e,n)}function z1(e,t){return oc(e,t)}var ns=null,is=null,lf=!1,rr=!1,of=!1,Ai=0;function Dn(e){e!==is&&e.next===null&&(is===null?ns=is=e:is=is.next=e),rr=!0,lf||(lf=!0,B1())}function gl(e,t){if(!of&&rr){of=!0;do for(var n=!1,i=ns;i!==null;){if(e!==0){var l=i.pendingLanes;if(l===0)var r=0;else{var g=i.suspendedLanes,T=i.pingedLanes;r=(1<<31-zt(42|e)+1)-1,r&=l&~(g&~T),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(n=!0,h0(i,r))}else r=ve,r=Jl(i,i===Ce?r:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(r&3)===0||Bs(i,r)||(n=!0,h0(i,r));i=i.next}while(n);of=!1}}function U1(){c0()}function c0(){rr=lf=!1;var e=0;Ai!==0&&X1()&&(e=Ai);for(var t=Nt(),n=null,i=ns;i!==null;){var l=i.next,r=u0(i,t);r===0?(i.next=null,n===null?ns=l:n.next=l,l===null&&(is=n)):(n=i,(e!==0||(r&3)!==0)&&(rr=!0)),i=l}He!==0&&He!==5||gl(e),Ai!==0&&(Ai=0)}function u0(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,l=e.expirationTimes,r=e.pendingLanes&-62914561;0<r;){var g=31-zt(r),T=1<<g,E=l[g];E===-1?((T&n)===0||(T&i)!==0)&&(l[g]=Jv(T,t)):E<=t&&(e.expiredLanes|=T),r&=~T}if(t=Ce,n=ve,n=Jl(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(Ae===2||Ae===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&rc(i),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Bs(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&rc(i),fc(n)){case 2:case 8:n=jh;break;case 32:n=Kl;break;case 268435456:n=Yh;break;default:n=Kl}return i=f0.bind(null,e),n=oc(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&rc(i),e.callbackPriority=2,e.callbackNode=null,2}function f0(e,t){if(He!==0&&He!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(or()&&e.callbackNode!==n)return null;var i=ve;return i=Jl(e,e===Ce?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(Qp(e,i,t),u0(e,Nt()),e.callbackNode!=null&&e.callbackNode===n?f0.bind(null,e):null)}function h0(e,t){if(or())return null;Qp(e,t,!0)}function B1(){K1(function(){(Se&6)!==0?oc(Ph,U1):c0()})}function rf(){if(Ai===0){var e=$i;e===0&&(e=Zl,Zl<<=1,(Zl&261888)===0&&(Zl=256)),Ai=e}return Ai}function d0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:io(e)}function L1(e,t,n,i,l){if(t==="submit"&&n&&n.stateNode===l){var r=d0((l[bt]||null).action),g=i.submitter;g&&(t=(t=g[bt]||null)?d0(t.formAction):g.getAttribute("formAction"),t!==null&&(r=t,g=null));var T=new oo("action","action",null,i,l);e.push({event:T,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(Ai!==0){var E=new FormData(l,g);pu(n,{pending:!0,data:E,method:l.method,action:r},null,E)}}else typeof r=="function"&&(T.preventDefault(),E=new FormData(l,g),pu(n,{pending:!0,data:E,method:l.method,action:r},r,E))},currentTarget:l}]})}}for(var cf=0;cf<zc.length;cf++){var uf=zc[cf],H1=uf.toLowerCase(),I1=uf[0].toUpperCase()+uf.slice(1);on(H1,"on"+I1)}on(Fd,"onAnimationEnd"),on(Gd,"onAnimationIteration"),on(Vd,"onAnimationStart"),on("dblclick","onDoubleClick"),on("focusin","onFocus"),on("focusout","onBlur"),on(ky,"onTransitionRun"),on(Ky,"onTransitionStart"),on(Zy,"onTransitionCancel"),on(qd,"onTransitionEnd"),Ea("onMouseEnter",["mouseout","mouseover"]),Ea("onMouseLeave",["mouseout","mouseover"]),Ea("onPointerEnter",["pointerout","pointerover"]),Ea("onPointerLeave",["pointerout","pointerover"]),ji("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ji("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ji("onBeforeInput",["compositionend","keypress","textInput","paste"]),ji("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ji("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ji("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var vl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),F1=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(vl));function m0(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],l=i.event;i=i.listeners;e:{var r=void 0;if(t)for(var g=i.length-1;0<=g;g--){var T=i[g],E=T.instance,B=T.currentTarget;if(T=T.listener,E!==r&&l.isPropagationStopped())break e;r=T,l.currentTarget=B;try{r(l)}catch(F){uo(F)}l.currentTarget=null,r=E}else for(g=0;g<i.length;g++){if(T=i[g],E=T.instance,B=T.currentTarget,T=T.listener,E!==r&&l.isPropagationStopped())break e;r=T,l.currentTarget=B;try{r(l)}catch(F){uo(F)}l.currentTarget=null,r=E}}}}function me(e,t){var n=t[$h];n===void 0&&(n=t[$h]=new Set);var i=e+"__bubble";n.has(i)||(p0(t,e,2,!1),n.add(i))}function ff(e,t,n){var i=0;t&&(i|=4),p0(n,e,i,t)}var cr="_reactListening"+Math.random().toString(36).slice(2);function hf(e){if(!e[cr]){e[cr]=!0,nd.forEach(function(n){n!=="selectionchange"&&(F1.has(n)||ff(n,!1,e),ff(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[cr]||(t[cr]=!0,ff("selectionchange",!1,t))}}function p0(e,t,n,i){switch(ag(t)){case 2:var l=Nb;break;case 8:l=Ob;break;default:l=Of}n=l.bind(null,t,n,e),l=void 0,!bc||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),i?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function df(e,t,n,i,l){var r=i;if((t&1)===0&&(t&2)===0&&i!==null)e:for(;;){if(i===null)return;var g=i.tag;if(g===3||g===4){var T=i.stateNode.containerInfo;if(T===l)break;if(g===4)for(g=i.return;g!==null;){var E=g.tag;if((E===3||E===4)&&g.stateNode.containerInfo===l)return;g=g.return}for(;T!==null;){if(g=Pi(T),g===null)return;if(E=g.tag,E===5||E===6||E===26||E===27){i=r=g;continue e}T=T.parentNode}}i=i.return}pd(function(){var B=r,F=vc(n),P=[];e:{var z=Pd.get(e);if(z!==void 0){var I=oo,W=e;switch(e){case"keypress":if(so(n)===0)break e;case"keydown":case"keyup":I=_y;break;case"focusin":W="focus",I=_c;break;case"focusout":W="blur",I=_c;break;case"beforeblur":case"afterblur":I=_c;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":I=yd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":I=fy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":I=Ry;break;case Fd:case Gd:case Vd:I=my;break;case qd:I=Cy;break;case"scroll":case"scrollend":I=cy;break;case"wheel":I=Oy;break;case"copy":case"cut":case"paste":I=gy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":I=Td;break;case"submit":I=wy;break;case"toggle":case"beforetoggle":I=Uy}var te=(t&4)!==0,ce=!te&&(e==="scroll"||e==="scrollend"),U=te?z!==null?z+"Capture":null:z;te=[];for(var N=B,L;N!==null;){var q=N;if(L=q.stateNode,q=q.tag,q!==5&&q!==26&&q!==27||L===null||U===null||(q=Fs(N,U),q!=null&&te.push(yl(N,q,L))),ce)break;N=N.return}0<te.length&&(z=new I(z,W,null,n,F),P.push({event:z,listeners:te}))}}if((t&7)===0){e:{if(I=e==="mouseover"||e==="pointerover",z=e==="mouseout"||e==="pointerout",I&&n!==gc&&(W=n.relatedTarget||n.fromElement)&&(Pi(W)||W[Sa]))break e;(z||I)&&(W=F.window===F?F:(I=F.ownerDocument)?I.defaultView||I.parentWindow:window,z?(I=n.relatedTarget||n.toElement,z=B,I=I?Pi(I):null,I!==null&&(ce=f(I),te=I.tag,I!==ce||te!==5&&te!==27&&te!==6)&&(I=null)):(z=null,I=B),z!==I&&(te=yd,q="onMouseLeave",U="onMouseEnter",N="mouse",(e==="pointerout"||e==="pointerover")&&(te=Td,q="onPointerLeave",U="onPointerEnter",N="pointer"),ce=z==null?W:Is(z),L=I==null?W:Is(I),W=new te(q,N+"leave",z,n,F),W.target=ce,W.relatedTarget=L,q=null,Pi(F)===B&&(te=new te(U,N+"enter",I,n,F),te.target=L,te.relatedTarget=ce,q=te),ce=q,te=z&&I?H(z,I,G1):null,z!==null&&g0(P,W,z,te,!1),I!==null&&ce!==null&&g0(P,ce,I,te,!0)))}e:{if(z=B?Is(B):window,I=z.nodeName&&z.nodeName.toLowerCase(),I==="select"||I==="input"&&z.type==="file")var $=Rd;else if(wd(z))if(Dd)$=jy;else{$=qy;var ye=Vy}else I=z.nodeName,!I||I.toLowerCase()!=="input"||z.type!=="checkbox"&&z.type!=="radio"?B&&pc(B.elementType)&&($=Rd):$=Py;if($&&($=$(e,B))){Md(P,$,n,F);break e}ye&&ye(e,z,B)}switch(ye=B?Is(B):window,e){case"focusin":(wd(ye)||ye.contentEditable==="true")&&(Na=ye,Cc=B,ks=null);break;case"focusout":ks=Cc=Na=null;break;case"mousedown":Nc=!0;break;case"contextmenu":case"mouseup":case"dragend":Nc=!1,Hd(P,n,F);break;case"selectionchange":if(Xy)break;case"keydown":case"keyup":Hd(P,n,F)}var ae;if(Ec)e:{switch(e){case"compositionstart":var le="onCompositionStart";break e;case"compositionend":le="onCompositionEnd";break e;case"compositionupdate":le="onCompositionUpdate";break e}le=void 0}else Ca?Ad(e,n)&&(le="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(le="onCompositionStart");le&&(xd&&n.locale!=="ko"&&(Ca||le!=="onCompositionStart"?le==="onCompositionEnd"&&Ca&&(ae=gd()):(si=F,Tc="value"in si?si.value:si.textContent,Ca=!0)),ye=ur(B,le),0<ye.length&&(le=new bd(le,e,null,n,F),P.push({event:le,listeners:ye}),ae?le.data=ae:(ae=Ed(n),ae!==null&&(le.data=ae)))),(ae=Ly?Hy(e,n):Iy(e,n))&&(le=ur(B,"onBeforeInput"),0<le.length&&(ye=new bd("onBeforeInput","beforeinput",null,n,F),P.push({event:ye,listeners:le}),ye.data=ae)),L1(P,e,B,n,F)}m0(P,t)})}function yl(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ur(e,t){for(var n=t+"Capture",i=[];e!==null;){var l=e,r=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||r===null||(l=Fs(e,n),l!=null&&i.unshift(yl(e,l,r)),l=Fs(e,t),l!=null&&i.push(yl(e,l,r))),e.tag===3)return i;e=e.return}return[]}function G1(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function g0(e,t,n,i,l){for(var r=t._reactName,g=[];n!==null&&n!==i;){var T=n,E=T.alternate,B=T.stateNode;if(T=T.tag,E!==null&&E===i)break;T!==5&&T!==26&&T!==27||B===null||(E=B,l?(B=Fs(n,r),B!=null&&g.unshift(yl(n,B,E))):l||(B=Fs(n,r),B!=null&&g.push(yl(n,B,E)))),n=n.return}g.length!==0&&e.push({event:t,listeners:g})}var V1=/\r\n?/g,q1=/\u0000|\uFFFD/g;function v0(e){return(typeof e=="string"?e:""+e).replace(V1,`
`).replace(q1,"")}function y0(e,t){return t=v0(t),v0(e)===t}function we(e,t,n,i,l,r){switch(n){case"children":if(typeof i=="string")t==="body"||t==="textarea"&&i===""||Ma(e,i);else if(typeof i=="number"||typeof i=="bigint")t!=="body"&&Ma(e,""+i);else return;break;case"className":no(e,"class",i);break;case"tabIndex":no(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":no(e,n,i);break;case"style":dd(e,i,r);return;case"data":if(t!=="object"){no(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=io(i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(n==="formAction"?(t!=="input"&&we(e,t,"name",l.name,l,null),we(e,t,"formEncType",l.formEncType,l,null),we(e,t,"formMethod",l.formMethod,l,null),we(e,t,"formTarget",l.formTarget,l,null)):(we(e,t,"encType",l.encType,l,null),we(e,t,"method",l.method,l,null),we(e,t,"target",l.target,l,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=io(i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=bn);return;case"onScroll":i!=null&&me("scroll",e);return;case"onScrollEnd":i!=null&&me("scrollend",e);return;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(o(61));if(n=i.__html,n!=null){if(l.children!=null)throw Error(o(60));r?.__html!==n&&(e.innerHTML=n)}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=io(i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":me("beforetoggle",e),me("toggle",e),to(e,"popover",i);break;case"xlinkActuate":Bn(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":Bn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":Bn(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":Bn(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":Bn(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":Bn(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":Bn(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":Bn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":Bn(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":to(e,"is",i);break;case"innerText":case"textContent":return;default:if(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")n=oy.get(n)||n,to(e,n,i);else return}xe=!0}function mf(e,t,n,i,l,r){switch(n){case"style":dd(e,i,r);return;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(o(61));if(n=i.__html,n!=null){if(l.children!=null)throw Error(o(60));r?.__html!==n&&(e.innerHTML=n)}}break;case"children":if(typeof i=="string")Ma(e,i);else if(typeof i=="number"||typeof i=="bigint")Ma(e,""+i);else return;break;case"onScroll":i!=null&&me("scroll",e);return;case"onScrollEnd":i!=null&&me("scrollend",e);return;case"onClick":i!=null&&(e.onclick=bn);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!id.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(l=n.endsWith("Capture"),r=n.slice(2,l?n.length-7:void 0),t=e[bt]||null,t=t!=null?t[n]:null,typeof t=="function"&&e.removeEventListener(r,t,l),typeof i=="function")){typeof t!="function"&&t!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(r,i,l);break e}xe=!0,n in e?e[n]=i:i===!0?e.setAttribute(n,""):to(e,n,i)}return}xe=!0}function ct(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":me("error",e),me("load",e);var i=!1,l=!1,r;for(r in n)if(n.hasOwnProperty(r)){var g=n[r];if(g!=null)switch(r){case"src":i=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:we(e,t,r,g,n,null)}}l&&we(e,t,"srcSet",n.srcSet,n,null),i&&we(e,t,"src",n.src,n,null);return;case"input":me("invalid",e);var T=r=g=l=null,E=null,B=null;for(i in n)if(n.hasOwnProperty(i)){var F=n[i];if(F!=null)switch(i){case"name":l=F;break;case"type":g=F;break;case"checked":E=F;break;case"defaultChecked":B=F;break;case"value":r=F;break;case"defaultValue":T=F;break;case"children":case"dangerouslySetInnerHTML":if(F!=null)throw Error(o(137,t));break;default:we(e,t,i,F,n,null)}}cd(e,r,T,E,B,g,l,!1);return;case"select":me("invalid",e),i=g=r=null;for(l in n)if(n.hasOwnProperty(l)&&(T=n[l],T!=null))switch(l){case"value":r=T;break;case"defaultValue":g=T;break;case"multiple":i=T;default:we(e,t,l,T,n,null)}t=r,n=g,e.multiple=!!i,t!=null?wa(e,!!i,t,!1):n!=null&&wa(e,!!i,n,!0);return;case"textarea":me("invalid",e),r=l=i=null;for(g in n)if(n.hasOwnProperty(g)&&(T=n[g],T!=null))switch(g){case"value":i=T;break;case"defaultValue":l=T;break;case"children":r=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(o(91));break;default:we(e,t,g,T,n,null)}fd(e,i,l,r);return;case"option":for(E in n)n.hasOwnProperty(E)&&(i=n[E],i!=null)&&(E==="selected"?e.selected=i&&typeof i!="function"&&typeof i!="symbol":we(e,t,E,i,n,null));return;case"dialog":me("beforetoggle",e),me("toggle",e),me("cancel",e),me("close",e);break;case"iframe":case"object":me("load",e);break;case"video":case"audio":for(i=0;i<vl.length;i++)me(vl[i],e);break;case"image":me("error",e),me("load",e);break;case"details":me("toggle",e);break;case"embed":case"source":case"link":me("error",e),me("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(B in n)if(n.hasOwnProperty(B)&&(i=n[B],i!=null))switch(B){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:we(e,t,B,i,n,null)}return;default:if(pc(t)){for(F in n)n.hasOwnProperty(F)&&(i=n[F],i!==void 0&&mf(e,t,F,i,n,void 0));return}}for(T in n)n.hasOwnProperty(T)&&(i=n[T],i!=null&&we(e,t,T,i,n,null))}var P1={};function j1(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,r=null,g=null,T=null,E=null,B=null,F=null;for(I in n){var P=n[I];if(n.hasOwnProperty(I)&&P!=null)switch(I){case"checked":break;case"value":break;case"defaultValue":E=P;default:i.hasOwnProperty(I)||we(e,t,I,null,i,P)}}for(var z in i){var I=i[z];if(P=n[z],i.hasOwnProperty(z)&&(I!=null||P!=null))switch(z){case"type":I!==P&&(xe=!0),r=I;break;case"name":I!==P&&(xe=!0),l=I;break;case"checked":I!==P&&(xe=!0),B=I;break;case"defaultChecked":I!==P&&(xe=!0),F=I;break;case"value":I!==P&&(xe=!0),g=I;break;case"defaultValue":I!==P&&(xe=!0),T=I;break;case"children":case"dangerouslySetInnerHTML":if(I!=null)throw Error(o(137,t));break;default:I!==P&&we(e,t,z,I,i,P)}}dc(e,g,T,E,B,F,r,l);return;case"select":I=g=T=z=null;for(r in n)if(E=n[r],n.hasOwnProperty(r)&&E!=null)switch(r){case"value":break;case"multiple":I=E;default:i.hasOwnProperty(r)||we(e,t,r,null,i,E)}for(l in i)if(r=i[l],E=n[l],i.hasOwnProperty(l)&&(r!=null||E!=null))switch(l){case"value":r!==E&&(xe=!0),z=r;break;case"defaultValue":r!==E&&(xe=!0),T=r;break;case"multiple":r!==E&&(xe=!0),g=r;default:r!==E&&we(e,t,l,r,i,E)}t=T,n=g,i=I,z!=null?wa(e,!!n,z,!1):!!i!=!!n&&(t!=null?wa(e,!!n,t,!0):wa(e,!!n,n?[]:"",!1));return;case"textarea":I=z=null;for(T in n)if(l=n[T],n.hasOwnProperty(T)&&l!=null&&!i.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:we(e,t,T,null,i,l)}for(g in i)if(l=i[g],r=n[g],i.hasOwnProperty(g)&&(l!=null||r!=null))switch(g){case"value":l!==r&&(xe=!0),z=l;break;case"defaultValue":l!==r&&(xe=!0),I=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(o(91));break;default:l!==r&&we(e,t,g,l,i,r)}ud(e,z,I);return;case"option":for(var W in n)z=n[W],n.hasOwnProperty(W)&&z!=null&&!i.hasOwnProperty(W)&&(W==="selected"?e.selected=!1:we(e,t,W,null,i,z));for(E in i)z=i[E],I=n[E],i.hasOwnProperty(E)&&z!==I&&(z!=null||I!=null)&&(E==="selected"?(z!==I&&(xe=!0),e.selected=z&&typeof z!="function"&&typeof z!="symbol"):we(e,t,E,z,i,I));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var te in n)z=n[te],n.hasOwnProperty(te)&&z!=null&&!i.hasOwnProperty(te)&&we(e,t,te,null,i,z);for(B in i)if(z=i[B],I=n[B],i.hasOwnProperty(B)&&z!==I&&(z!=null||I!=null))switch(B){case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(o(137,t));break;default:we(e,t,B,z,i,I)}return;default:if(pc(t)){for(var ce in n)z=n[ce],n.hasOwnProperty(ce)&&z!==void 0&&!i.hasOwnProperty(ce)&&mf(e,t,ce,void 0,i,z);for(F in i)z=i[F],I=n[F],!i.hasOwnProperty(F)||z===I||z===void 0&&I===void 0||mf(e,t,F,z,i,I);return}}for(var U in n)z=n[U],n.hasOwnProperty(U)&&z!=null&&!i.hasOwnProperty(U)&&we(e,t,U,null,i,z);for(P in i)z=i[P],I=n[P],!i.hasOwnProperty(P)||z===I||z==null&&I==null||we(e,t,P,z,i,I)}function b0(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Y1(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var l=n[i],r=l.transferSize,g=l.initiatorType,T=l.duration;if(r&&T&&b0(g)){for(g=0,T=l.responseEnd,i+=1;i<n.length;i++){var E=n[i],B=E.startTime;if(B>T)break;var F=E.transferSize,P=E.initiatorType;F&&b0(P)&&(E=E.responseEnd,g+=F*(E<T?1:(T-B)/(E-B)))}if(--i,t+=8*(r+g)/(l.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var pf=null,gf=null;function bl(e){return e.nodeType===9?e:e.ownerDocument}function T0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function x0(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function S0(e,t,n,i){return n=bl(n).createElement(e),n[at]=i,n[bt]=t,ct(n,e,t),Je(n),n}function vf(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var yf=null;function X1(){var e=window.event;return e&&e.type==="popstate"?e===yf?!1:(yf=e,!0):(yf=null,!1)}var bf=typeof setTimeout=="function"?setTimeout:void 0,k1=typeof clearTimeout=="function"?clearTimeout:void 0,_0=typeof Promise=="function"?Promise:void 0,A0=typeof requestAnimationFrame=="function"?requestAnimationFrame:bf,K1=typeof queueMicrotask=="function"?queueMicrotask:typeof _0<"u"?function(e){return _0.resolve(null).then(e).catch(Z1)}:bf;function Z1(e){setTimeout(function(){throw e})}function Ei(e){return e==="head"}function E0(e,t){var n=t,i=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"||n==="/&"){if(i===0){e.removeChild(l),us(t);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")Mf(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,Mf(n);for(var r=n.firstChild;r;){var g=r.nextSibling,T=r.nodeName;r[Hs]||T==="SCRIPT"||T==="STYLE"||T==="LINK"&&r.rel.toLowerCase()==="stylesheet"||n.removeChild(r),r=g}}else n==="body"&&Mf(e.ownerDocument.body);n=l}while(n);us(t)}function w0(e,t){var n=e;e=0;do{var i=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=i}while(n)}function M0(e,t,n){if(t=CSS.escape(t)!==t?"r-"+btoa(t).replace(/=/g,""):t,e.style.viewTransitionName=t,n!=null&&(e.style.viewTransitionClass=n),n=getComputedStyle(e),n.display==="inline"){if(t=e.getClientRects(),t.length===1)var i=1;else for(var l=i=0;l<t.length;l++){var r=t[l];0<r.width&&0<r.height&&i++}i===1&&(e=e.style,e.display=t.length===1?"inline-block":"block",e.marginTop="-"+n.paddingTop,e.marginBottom="-"+n.paddingBottom)}}function R0(e,t){e=e.style,t=t.style;var n=t!=null?t.hasOwnProperty("viewTransitionName")?t.viewTransitionName:t.hasOwnProperty("view-transition-name")?t["view-transition-name"]:null:null;e.viewTransitionName=n==null||typeof n=="boolean"?"":(""+n).trim(),n=t!=null?t.hasOwnProperty("viewTransitionClass")?t.viewTransitionClass:t.hasOwnProperty("view-transition-class")?t["view-transition-class"]:null:null,e.viewTransitionClass=n==null||typeof n=="boolean"?"":(""+n).trim(),e.display==="inline-block"&&(t==null?e.display=e.margin="":(n=t.display,e.display=n==null||typeof n=="boolean"?"":n,n=t.margin,n!=null?e.margin=n:(n=t.hasOwnProperty("marginTop")?t.marginTop:t["margin-top"],e.marginTop=n==null||typeof n=="boolean"?"":n,t=t.hasOwnProperty("marginBottom")?t.marginBottom:t["margin-bottom"],e.marginBottom=t==null||typeof t=="boolean"?"":t)))}function Q1(e,t,n){return n=n.ownerDocument.defaultView,{rect:e,abs:t.position==="absolute"||t.position==="fixed",clip:t.clipPath!=="none"||t.overflow!=="visible"||t.filter!=="none"||t.mask!=="none"||t.mask!=="none"||t.borderRadius!=="0px",view:0<=e.bottom&&0<=e.right&&e.top<=n.innerHeight&&e.left<=n.innerWidth}}function Tf(e){var t=e.getBoundingClientRect(),n=getComputedStyle(e);return Q1(t,n,e)}function W1(e){return e.documentElement.clientHeight}function J1(e){this.addEventListener("load",e),this.addEventListener("error",e)}function $1(e,t,n,i,l,r,g,T,E){var B=t.nodeType===9?t:t.ownerDocument;try{var F=B.startViewTransition({update:function(){var z=B.defaultView,I=z.navigation&&z.navigation.transition,W=B.fonts.status;i();var te=[];if(W==="loaded"&&(W1(B),B.fonts.status==="loading"&&te.push(B.fonts.ready)),W=te.length,e!==null)for(var ce=e.suspenseyImages,U=0,N=0;N<ce.length;N++){var L=ce[N];if(!L.complete){var q=L.getBoundingClientRect();if(0<q.bottom&&0<q.right&&q.top<z.innerHeight&&q.left<z.innerWidth){if(U+=Z0(L),U>dr){te.length=W;break}L=new Promise(J1.bind(L)),te.push(L)}}}if(0<te.length)return z=Promise.race([Promise.all(te),new Promise(function($){return setTimeout($,500)})]).then(l,l),(I?Promise.allSettled([I.finished,z]):z).then(r,r);if(l(),I)return I.finished.then(r,r);r()},types:n});B.__reactViewTransition=F;var P=[];return F.ready.then(function(){for(var z=B.documentElement.getAnimations({subtree:!0}),I=0;I<z.length;I++){var W=z[I],te=W.effect,ce=te.pseudoElement;if(ce!=null&&ce.startsWith("::view-transition")){P.push(W),W=te.getKeyframes();for(var U=ce=void 0,N=!0,L=0;L<W.length;L++){var q=W[L],$=q.width;if(ce===void 0)ce=$;else if(ce!==$){N=!1;break}if($=q.height,U===void 0)U=$;else if(U!==$){N=!1;break}delete q.width,delete q.height,q.transform==="none"&&delete q.transform}N&&ce!==void 0&&U!==void 0&&(te.setKeyframes(W),N=getComputedStyle(te.target,te.pseudoElement),N.width!==ce||N.height!==U)&&(N=W[0],N.width=ce,N.height=U,N=W[W.length-1],N.width=ce,N.height=U,te.setKeyframes(W))}}g()},function(z){B.__reactViewTransition===F&&(B.__reactViewTransition=null);try{typeof z=="object"&&z!==null&&z.name==="InvalidStateError"&&(z.message==="View transition was skipped because document visibility state is hidden."||z.message==="Skipping view transition because document visibility state has become hidden."||z.message==="Skipping view transition because viewport size changed."||z.message==="Transition was aborted because of invalid state")&&(z=null),z!==null&&E(z)}finally{i(),l(),g()}}),F.finished.finally(function(){for(var z=0;z<P.length;z++)P[z].cancel();B.__reactViewTransition===F&&(B.__reactViewTransition=null),T()}),F}catch{return i(),l(),g(),null}}function ua(e,t){this._scope=document.documentElement,this._selector="::view-transition-"+e+"("+t+")"}ua.prototype.animate=function(e,t){return t=typeof t=="number"?{duration:t}:O({},t),t.pseudoElement=this._selector,this._scope.animate(e,t)},ua.prototype.getAnimations=function(){for(var e=this._scope,t=this._selector,n=e.getAnimations({subtree:!0}),i=[],l=0;l<n.length;l++){var r=n[l].effect;r!==null&&r.target===e&&r.pseudoElement===t&&i.push(n[l])}return i},ua.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function D0(e){return{name:e,group:new ua("group",e),imagePair:new ua("image-pair",e),old:new ua("old",e),new:new ua("new",e)}}function Vt(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}Vt.prototype.addEventListener=function(e,t,n){var i=null,l=null;if(!(n!=null&&typeof n!="boolean"&&(i=n.signal||null,i!==null&&i.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var r=this._eventListeners;if(N0(r,e,t,n)===-1){var g=this,T=t;n!=null&&typeof n!="boolean"&&n.once===!0&&(T=function(E){g.removeEventListener(e,t,n),typeof t=="function"?t.call(this,E):t.handleEvent(E)}),i!==null&&(l=g.removeEventListener.bind(g,e,t,n),i.addEventListener("abort",l,{once:!0}),l=i.removeEventListener.bind(i,"abort",l)),i=as(n),r.push({type:e,listener:t,optionsOrUseCapture:n,attachedListener:T,cleanup:l}),v(this._fragmentFiber.child,!1,eb,e,T,i)}this._eventListeners=r}};function eb(e,t,n,i){return x(e).addEventListener(t,n,i),!1}Vt.prototype.removeEventListener=function(e,t,n){var i=this._eventListeners;if(i!==null&&(t=N0(i,e,t,n),t!==-1)){var l=i[t];n=l.attachedListener;var r=l.cleanup;l=as(l.optionsOrUseCapture),v(this._fragmentFiber.child,!1,tb,e,n,l),i.splice(t,1),r!==null&&r()}};function tb(e,t,n,i){return x(e).removeEventListener(t,n,i),!1}function as(e){return e!=null&&typeof e!="boolean"&&(e.once===!0||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function C0(e){return e==null?"c=0":typeof e=="boolean"?"c="+(e?"1":"0"):"c="+(e.capture?"1":"0")}function N0(e,t,n,i){if(e.length===0)return-1;i=C0(i);for(var l=0;l<e.length;l++){var r=e[l];if(r.type===t&&r.listener===n&&C0(r.optionsOrUseCapture)===i)return l}return-1}Vt.prototype.dispatchEvent=function(e){var t=p(this._fragmentFiber);if(t===null)return!0;t=x(t);var n=this._eventListeners;if(n!==null&&0<n.length||!e.bubbles){var i=t.nodeType===9?t.createComment(""):document.createTextNode("");if(n)for(var l=0;l<n.length;l++){var r=n[l];i.addEventListener(r.type,r.attachedListener,as(r.optionsOrUseCapture))}if(t.appendChild(i),e=i.dispatchEvent(e),n)for(l=0;l<n.length;l++)r=n[l],i.removeEventListener(r.type,r.attachedListener,as(r.optionsOrUseCapture));return t.removeChild(i),e}return t.dispatchEvent(e)},Vt.prototype.focus=function(e){v(this._fragmentFiber.child,!0,O0,e,void 0,void 0)};function O0(e,t){return e.tag===6?!1:(e=x(e),db(e,t))}Vt.prototype.focusLast=function(e){var t=[];v(this._fragmentFiber.child,!0,xf,t,void 0,void 0);for(var n=t.length-1;0<=n&&!O0(t[n],e);n--);};function xf(e,t){return t.push(e),!1}Vt.prototype.blur=function(){var e=p(this._fragmentFiber);e!==null&&(e=x(e),e=bl(e).activeElement,e!==null&&v(this._fragmentFiber.child,!1,nb,e,void 0,void 0))};function nb(e,t){return e.tag===6?!1:(e=x(e),e===t||e.contains(t)?(t.blur(),!0):!1)}Vt.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),v(this._fragmentFiber.child,!1,ib,e,void 0,void 0)};function ib(e,t){return e.tag===6||(e=x(e),t.observe(e)),!1}Vt.prototype.unobserveUsing=function(e){var t=this._observers;if(t!==null&&t.has(e)){t.delete(e),v(this._fragmentFiber.child,!1,ab,e,void 0,void 0);for(var n=t=0;n<hn.length;n++){var i=hn[n];i.fragmentInstance===this&&i.observer===e?e.unobserve(i.instance):hn[t++]=i}hn.length=t}};function ab(e,t){return e.tag===6||(e=x(e),t.unobserve(e)),!1}var hn=[],Sf=!1;function sb(e,t,n){hn.push({fragmentInstance:e,observer:t,instance:n}),Sf||(Sf=!0,mb(function(){Sf=!1;var i=hn;hn=[];for(var l=0;l<i.length;l++){var r=i[l];r.observer.unobserve(r.instance)}}))}Vt.prototype.getClientRects=function(){var e=[];return v(this._fragmentFiber.child,!1,lb,e,void 0,void 0),e};function lb(e,t){if(e.tag===6){e=e.stateNode;var n=e.ownerDocument.createRange();n.selectNodeContents(e),t.push.apply(t,n.getClientRects())}else e=x(e),t.push.apply(t,e.getClientRects());return!1}Vt.prototype.getRootNode=function(e){var t=p(this._fragmentFiber);return t===null?this:x(t).getRootNode(e)},Vt.prototype.compareDocumentPosition=function(e){var t=p(this._fragmentFiber);if(t===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var n=[];v(this._fragmentFiber.child,!1,xf,n,void 0,void 0);var i=x(t);if(n.length===0){if(n=i,S(this._fragmentFiber)){e:{for(t=this._fragmentFiber.return;t!==null;){if(t.tag===4){t=t.stateNode.containerInfo;break e}if(t.tag===3||t.tag===5||t.tag===27)break;t=t.return}t=null}t!=null&&(n=t)}t=this._fragmentFiber;var l=i=n.compareDocumentPosition(e);return n===e?l=Node.DOCUMENT_POSITION_CONTAINS:i&Node.DOCUMENT_POSITION_CONTAINED_BY&&(n=_(t)[1],n===null?l=Node.DOCUMENT_POSITION_PRECEDING:(e=x(n).compareDocumentPosition(e),l=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),l|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}t=x(n[0]),l=x(n[n.length-1]);var r=S(this._fragmentFiber)?t.parentElement:i;if(r==null)return Node.DOCUMENT_POSITION_DISCONNECTED;i=r.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY,r=r.compareDocumentPosition(l)&Node.DOCUMENT_POSITION_CONTAINED_BY;var g=t.compareDocumentPosition(e),T=l.compareDocumentPosition(e),E=g&Node.DOCUMENT_POSITION_CONTAINED_BY||T&Node.DOCUMENT_POSITION_CONTAINED_BY;return T=i&&r&&g&Node.DOCUMENT_POSITION_FOLLOWING&&T&Node.DOCUMENT_POSITION_PRECEDING,t=i&&t===e||r&&l===e||E||T?Node.DOCUMENT_POSITION_CONTAINED_BY:!i&&t===e||!r&&l===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:g,t&Node.DOCUMENT_POSITION_DISCONNECTED||t&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||ob(t,this._fragmentFiber,n[0],n[n.length-1],e)?t:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function ob(e,t,n,i,l){var r=Pi(l);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(n=!!r)e:{for(;r!==null;){if(r.tag===7&&(r===t||r.alternate===t)){n=!0;break e}r=r.return}n=!1}return n}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(r===null)return r=l.ownerDocument,l===r||l===r.documentElement||l===r.body;e:{for(r=t,t=p(t);r!==null;){if(!(r.tag!==5&&r.tag!==3&&r.tag!==27||r!==t&&r.alternate!==t)){r=!0;break e}r=r.return}r=!1}return r}return e&Node.DOCUMENT_POSITION_PRECEDING?((t=!!r)&&!(t=r===n)&&(t=H(n,r,D),t===null?t=!1:(v(t,!0,A,r,n),r=w,w=null,t=r!==null)),t):e&Node.DOCUMENT_POSITION_FOLLOWING?((t=!!r)&&!(t=r===i)&&(t=H(i,r,D),t===null?t=!1:(v(t,!0,R,r,i),r=w,M=w=null,t=r!==null)),t):!1}function z0(e,t){var n=e.ownerDocument.createRange();n.selectNodeContents(e),e=n.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,t?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}Vt.prototype.scrollIntoView=function(e){if(typeof e=="object")throw Error(o(566));var t=[];v(this._fragmentFiber.child,!1,xf,t,void 0,void 0);var n=e!==!1;if(t.length===0){var i=_(this._fragmentFiber);if(i=n?i[1]||i[0]||p(this._fragmentFiber):i[0]||i[1],i===null)return;if(i.tag===6){e=x(i),z0(e,n);return}if(i=x(i),i.nodeType!==9){if(i.nodeType===11){n="host"in i?i.host:null,n!==null&&n.scrollIntoView(e);return}i.scrollIntoView(e)}}for(i=n?t.length-1:0;i!==(n?-1:t.length);){var l=t[i];l.tag===6?(l=x(l),z0(l,n)):x(l).scrollIntoView(e),i+=n?-1:1}};function rb(e,t){return e=x(e),U0(e,t),!1}function U0(e,t){e.reactFragments==null&&(e.reactFragments=new Set),e.reactFragments.add(t)}function B0(e,t){var n=t._eventListeners;if(n!==null)for(var i=0;i<n.length;i++){var l=n[i];e.addEventListener(l.type,l.attachedListener,as(l.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(r){for(var g=0,T=0;T<hn.length;T++){var E=hn[T];(E.fragmentInstance!==t||E.observer!==r||E.instance!==e)&&(hn[g++]=E)}hn.length=g,r.observe(e)}),U0(e,t))}function cb(e,t){var n=t._eventListeners;if(n!==null)for(var i=0;i<n.length;i++){var l=n[i];e.removeEventListener(l.type,l.attachedListener,as(l.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(r){typeof r.rootMargin=="string"?sb(t,r,e):r.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(t))}function _f(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":_f(n),eo(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function ub(e,t,n,i){for(;e.nodeType===1;){var l=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[Hs])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(r=e.getAttribute("rel"),r==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(r!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(r=e.getAttribute("src"),(r!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&r&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var r=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===r)return e}else return e;if(e=$t(e.nextSibling),e===null)break}return null}function fb(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=$t(e.nextSibling),e===null))return null;return e}function L0(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=$t(e.nextSibling),e===null))return null;return e}function Af(e){return e.data==="$?"||e.data==="$~"}function Ef(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function hb(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function $t(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var wf=null;function H0(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return $t(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function I0(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function db(e,t){function n(){i=!0}if(e.ownerDocument.activeElement===e)return!0;var i=!1;try{e.ownerDocument.addEventListener("focus",n,!0),(e.focus||HTMLElement.prototype.focus).call(e,t)}finally{e.ownerDocument.removeEventListener("focus",n,!0)}return i}function mb(e){A0(function(){A0(function(t){return e(t)})})}function F0(e,t,n){switch(t=bl(n),e){case"html":if(e=t.documentElement,!e)throw Error(o(452));return e;case"head":if(e=t.head,!e)throw Error(o(453));return e;case"body":if(e=t.body,!e)throw Error(o(454));return e;default:throw Error(o(451))}}function G0(e,t,n){for(var i in n){var l=n[i];n.hasOwnProperty(i)&&l!=null&&we(e,t,i,null,P1,l)}n.dangerouslySetInnerHTML!=null&&(e.textContent=""),e.onclick===bn&&(e.onclick=null),eo(e)}function Mf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);eo(e)}var en=new Map,V0=new Set;function Tl(e){if(typeof e.getRootNode=="function"){var t=e.getRootNode();if(t.nodeType===9||t.nodeType===11)return t}return e.nodeType===9?e:e.ownerDocument}var Kn=be.d;be.d={f:pb,r:gb,D:vb,C:yb,L:bb,m:Tb,X:Sb,S:xb,M:_b};function pb(){var e=Kn.f(),t=ar();return e||t}function gb(e){var t=_a(e);t!==null&&t.tag===5&&t.type==="form"?Pm(t):Kn.r(e)}var ss=typeof document>"u"?null:document;function q0(e,t,n){var i=ss;if(i&&typeof t=="string"&&t){var l=Xt(t);l='link[rel="'+e+'"][href="'+l+'"]',typeof n=="string"&&(l+='[crossorigin="'+n+'"]'),V0.has(l)||(V0.add(l),e={rel:e,crossOrigin:n,href:t},i.querySelector(l)===null&&(t=i.createElement("link"),ct(t,"link",e),Je(t),i.head.appendChild(t)))}}function vb(e){Kn.D(e),q0("dns-prefetch",e,null)}function yb(e,t){Kn.C(e,t),q0("preconnect",e,t)}function bb(e,t,n){Kn.L(e,t,n);var i=ss;if(i&&e&&t){var l='link[rel="preload"][as="'+Xt(t)+'"]';t==="image"&&n&&n.imageSrcSet?(l+='[imagesrcset="'+Xt(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(l+='[imagesizes="'+Xt(n.imageSizes)+'"]')):l+='[href="'+Xt(e)+'"]';var r=l;switch(t){case"style":r=ls(e);break;case"script":r=os(e)}if(!(en.has(r)||(e=O({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),en.set(r,e),i.querySelector(l)!==null||t==="style"&&i.querySelector(xl(r))||t==="script"&&i.querySelector(Sl(r))))){var g=i.createElement("link");ct(g,"link",e),t==="style"&&(g[$l]=!0,g.onload=g.onerror=function(){td(g)}),Je(g),i.head.appendChild(g)}}}function Tb(e,t){Kn.m(e,t);var n=ss;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",l='link[rel="modulepreload"][as="'+Xt(i)+'"][href="'+Xt(e)+'"]',r=l;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=os(e)}if(!en.has(r)&&(e=O({rel:"modulepreload",href:e},t),en.set(r,e),n.querySelector(l)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Sl(r)))return}i=n.createElement("link"),ct(i,"link",e),Je(i),n.head.appendChild(i)}}}function xb(e,t,n){Kn.S(e,t,n);var i=ss;if(i&&e){var l=Aa(i).hoistableStyles,r=ls(e);t=t||"default";var g=l.get(r);if(!g){var T={loading:0,preload:null};if(g=i.querySelector(xl(r)))T.loading=5;else{e=O({rel:"stylesheet",href:e,"data-precedence":t},n),(n=en.get(r))&&Rf(e,n);var E=g=i.createElement("link");Je(E),ct(E,"link",e),E._p=new Promise(function(B,F){E.onload=B,E.onerror=F}),E.addEventListener("load",function(){T.loading|=1}),E.addEventListener("error",function(){T.loading|=2}),T.loading|=4,fr(g,t,i)}g={type:"stylesheet",instance:g,count:1,state:T},l.set(r,g)}}}function Sb(e,t){Kn.X(e,t);var n=ss;if(n&&e){var i=Aa(n).hoistableScripts,l=os(e),r=i.get(l);r||(r=n.querySelector(Sl(l)),r||(e=O({src:e,async:!0},t),(t=en.get(l))&&Df(e,t),r=n.createElement("script"),Je(r),ct(r,"link",e),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},i.set(l,r))}}function _b(e,t){Kn.M(e,t);var n=ss;if(n&&e){var i=Aa(n).hoistableScripts,l=os(e),r=i.get(l);r||(r=n.querySelector(Sl(l)),r||(e=O({src:e,async:!0,type:"module"},t),(t=en.get(l))&&Df(e,t),r=n.createElement("script"),Je(r),ct(r,"link",e),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},i.set(l,r))}}function P0(e,t,n,i){var l=(l=ni.current)?Tl(l):null;if(!l)throw Error(o(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(n=ls(n.href),t=Aa(l).hoistableStyles,i=t.get(n),i||(i={type:"style",instance:null,count:0,state:null},t.set(n,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=ls(n.href);var r=Aa(l).hoistableStyles,g=r.get(e);if(g||(l=l.ownerDocument||l,g={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(e,g),(r=l.querySelector(xl(e)))?r._p||(g.instance=r,g.state.loading=5):(r=en.get(e),r||(r={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},en.set(e,r)),Ab(l,e,r,g.state))),t&&i===null)throw Error(o(528,""));return g}if(t&&i!==null)throw Error(o(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(n=os(n),t=Aa(l).hoistableScripts,i=t.get(n),i||(i={type:"script",instance:null,count:0,state:null},t.set(n,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,e))}}function ls(e){return'href="'+Xt(e)+'"'}function xl(e){return'link[rel="stylesheet"]['+e+"]"}function j0(e){return O({},e,{"data-precedence":e.precedence,precedence:null})}function Ab(e,t,n,i){if(t=e.querySelector('link[rel="preload"][as="style"]['+t+"]")){if(t[$l]!==!0){i.loading=1;return}}else t=e.createElement("link"),t[$l]=!0,t.onload=t.onerror=td.bind(null,t),ct(t,"link",n),Je(t),e.head.appendChild(t);i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2})}function os(e){return'[src="'+Xt(e)+'"]'}function Sl(e){return"script[async]"+e}function Y0(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+Xt(n.href)+'"]');if(i)return t.instance=i,Je(i),i;var l=O({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),Je(i),ct(i,"style",l),fr(i,n.precedence,e),t.instance=i;case"stylesheet":l=ls(n.href);var r=e.querySelector(xl(l));if(r)return t.state.loading|=4,t.instance=r,Je(r),r;i=j0(n),(l=en.get(l))&&Rf(i,l),r=(e.ownerDocument||e).createElement("link"),Je(r);var g=r;return g._p=new Promise(function(T,E){g.onload=T,g.onerror=E}),ct(r,"link",i),t.state.loading|=4,fr(r,n.precedence,e),t.instance=r;case"script":return r=os(n.src),(l=e.querySelector(Sl(r)))?(t.instance=l,Je(l),l):(i=n,(l=en.get(r))&&(i=O({},n),Df(i,l)),e=e.ownerDocument||e,l=e.createElement("script"),Je(l),ct(l,"link",i),e.head.appendChild(l),t.instance=l);case"void":return null;default:throw Error(o(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,fr(i,n.precedence,e));return t.instance}function fr(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=i.length?i[i.length-1]:null,r=l,g=0;g<i.length;g++){var T=i[g];if(T.dataset.precedence===t)r=T;else if(r!==l)break}r?r.parentNode.insertBefore(e,r.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Rf(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Df(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var hr=null;function X0(e,t,n){if(hr===null){var i=new Map,l=hr=new Map;l.set(n,i)}else l=hr,i=l.get(n),i||(i=new Map,l.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),l=0;l<n.length;l++){var r=n[l];if(!(r[Hs]||r[at]||e==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var g=r.getAttribute(t)||"";g=e+g;var T=i.get(g);T?T.push(r):i.set(g,[r])}}return i}function Cf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function Eb(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function k0(e,t){return e==="img"&&t.src!=null&&t.src!==""&&t.onLoad==null&&t.loading!=="lazy"}function K0(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Z0(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function Q0(e,t){typeof t.decode=="function"&&(e.imgCount++,t.complete||(e.imgBytes+=Z0(t),e.suspenseyImages.push(t)),e=Rb.bind(e),t.decode().then(e,e))}function wb(e,t,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var l=ls(i.href),r=t.querySelector(xl(l));if(r){t=r._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=_l.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=r,Je(r);return}r=t.ownerDocument||t,i=j0(i),(l=en.get(l))&&Rf(i,l),r=r.createElement("link"),Je(r);var g=r;g._p=new Promise(function(T,E){g.onload=T,g.onerror=E}),ct(r,"link",i),n.instance=r}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=_l.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var dr=0;function Mb(e,t){return e.stylesheets&&e.count===0&&pr(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var i=setTimeout(function(){if(e.stylesheets&&pr(e,e.stylesheets),e.unsuspend){var r=e.unsuspend;e.unsuspend=null,r()}},6e4+t);0<e.imgBytes&&dr===0&&(dr=62500*Y1());var l=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&pr(e,e.stylesheets),e.unsuspend)){var r=e.unsuspend;e.unsuspend=null,r()}},(e.imgBytes>dr?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(l)}}:null}function W0(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)pr(e,e.stylesheets);else if(e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}}}function _l(){this.count--,W0(this)}function Rb(){this.imgCount--,W0(this)}var mr=null;function pr(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,mr=new Map,t.forEach(Db,e),mr=null,_l.call(e))}function Db(e,t){if(!(t.state.loading&4)){var n=mr.get(e);if(n)var i=n.get(null);else{n=new Map,mr.set(e,n);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<l.length;r++){var g=l[r];(g.nodeName==="LINK"||g.getAttribute("media")!=="not all")&&(n.set(g.dataset.precedence,g),i=g)}i&&n.set(null,i)}l=t.instance,g=l.getAttribute("data-precedence"),r=n.get(g)||i,r===i&&n.set(null,l),n.set(g,l),this.count++,i=_l.bind(this),l.addEventListener("load",i),l.addEventListener("error",i),r?r.parentNode.insertBefore(l,r.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),t.state.loading|=4}}var rs={$$typeof:ee,Provider:null,Consumer:null,_currentValue:Vi,_currentValue2:Vi,_threadCount:0};function Cb(e,t,n,i,l,r,g,T,E){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=cc(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=cc(0),this.hiddenUpdates=cc(null),this.identifierPrefix=i,this.onUncaughtError=l,this.onCaughtError=r,this.onRecoverableError=g,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=E,this.transitionTypes=null,this.incompleteTransitions=new Map}function J0(e,t,n,i,l,r,g,T,E,B,F,P){return e=new Cb(e,t,n,g,E,B,F,P,T),t=1,r===!0&&(t|=24),r=Tt(3,null,null,t),e.current=r,r.stateNode=e,t=jc(),t.refCount++,e.pooledCache=t,t.refCount++,r.memoizedState={element:i,isDehydrated:n,cache:t},Kc(r),e}function $0(e){return e?(e=Ua,e):Ua}function eg(e,t,n,i,l,r){l=$0(l),i.context===null?i.context=l:i.pendingContext=l,i=di(t),i.payload={element:n},r=r===void 0?null:r,r!==null&&(i.callback=r),n=mi(e,i,t),n!==null&&(At(n,e,t),el(n,e,t))}function tg(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Nf(e,t){tg(e,t),(e=e.alternate)&&tg(e,t)}function ng(e){if(e.tag===13||e.tag===31){var t=ki(e,67108864);t!==null&&At(t,e,67108864),Nf(e,67108864)}}function ig(e){if(e.tag===13||e.tag===31){var t=Gt();t=uc(t);var n=ki(e,t);n!==null&&At(n,e,t),Nf(e,t)}}var cs=!0;function Nb(e,t,n,i){var l=se.T;se.T=null;var r=be.p;try{be.p=2,Of(e,t,n,i)}finally{be.p=r,se.T=l}}function Ob(e,t,n,i){var l=se.T;se.T=null;var r=be.p;try{be.p=8,Of(e,t,n,i)}finally{be.p=r,se.T=l}}function Of(e,t,n,i){if(cs){var l=zf(i);if(l===null)df(e,t,i,gr,n),sg(e,i);else if(Ub(l,e,t,n,i))i.stopPropagation();else if(sg(e,i),t&4&&-1<zb.indexOf(e)){for(;l!==null;){var r=_a(l);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var g=qi(r.pendingLanes);if(g!==0){var T=r;for(T.pendingLanes|=2,T.entangledLanes|=2;g;){var E=1<<31-zt(g);T.entanglements[1]|=E,g&=~E}Dn(r),(Se&6)===0&&(tr=Nt()+500,gl(0))}}break;case 31:case 13:T=ki(r,2),T!==null&&At(T,r,2),ar(),Nf(r,2)}if(r=zf(i),r===null&&df(e,t,i,gr,n),r===l)break;l=r}l!==null&&i.stopPropagation()}else df(e,t,i,null,n)}}function zf(e){return e=vc(e),Uf(e)}var gr=null;function Uf(e){if(gr=null,e=Pi(e),e!==null){var t=f(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=c(t),e!==null)return e;e=null}else if(n===31){if(e=d(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return gr=e,null}function ag(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Yv()){case Ph:return 2;case jh:return 8;case Kl:case Xv:return 32;case Yh:return 268435456;default:return 32}default:return 32}}var Bf=!1,wi=null,Mi=null,Ri=null,Al=new Map,El=new Map,Di=[],zb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function sg(e,t){switch(e){case"focusin":case"focusout":wi=null;break;case"dragenter":case"dragleave":Mi=null;break;case"mouseover":case"mouseout":Ri=null;break;case"pointerover":case"pointerout":Al.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":El.delete(t.pointerId)}}function wl(e,t,n,i,l,r){return e===null||e.nativeEvent!==r?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:r,targetContainers:[l]},t!==null&&(t=_a(t),t!==null&&ng(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function Ub(e,t,n,i,l){switch(t){case"focusin":return wi=wl(wi,e,t,n,i,l),!0;case"dragenter":return Mi=wl(Mi,e,t,n,i,l),!0;case"mouseover":return Ri=wl(Ri,e,t,n,i,l),!0;case"pointerover":var r=l.pointerId;return Al.set(r,wl(Al.get(r)||null,e,t,n,i,l)),!0;case"gotpointercapture":return r=l.pointerId,El.set(r,wl(El.get(r)||null,e,t,n,i,l)),!0}return!1}function lg(e){var t=Pi(e.target);if(t!==null){var n=f(t);if(n!==null){if(t=n.tag,t===13){if(t=c(n),t!==null){e.blockedOn=t,Jh(e.priority,function(){ig(n)});return}}else if(t===31){if(t=d(n),t!==null){e.blockedOn=t,Jh(e.priority,function(){ig(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function vr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=zf(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);gc=i,n.target.dispatchEvent(i),gc=null}else return t=_a(n),t!==null&&ng(t),e.blockedOn=n,!1;t.shift()}return!0}function og(e,t,n){vr(e)&&n.delete(t)}function Bb(){Bf=!1,wi!==null&&vr(wi)&&(wi=null),Mi!==null&&vr(Mi)&&(Mi=null),Ri!==null&&vr(Ri)&&(Ri=null),Al.forEach(og),El.forEach(og)}function yr(e,t){e.blockedOn===t&&(e.blockedOn=null,Bf||(Bf=!0,h.unstable_scheduleCallback(h.unstable_NormalPriority,Bb)))}var br=null;function rg(e){br!==e&&(br=e,h.unstable_scheduleCallback(h.unstable_NormalPriority,function(){br===e&&(br=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],l=e[t+2];if(typeof i!="function"){if(Uf(i||n)===null)continue;break}var r=_a(n);r!==null&&(e.splice(t,3),t-=3,pu(r,{pending:!0,data:l,method:n.method,action:i},i,l))}}))}function us(e){function t(E){return yr(E,e)}wi!==null&&yr(wi,e),Mi!==null&&yr(Mi,e),Ri!==null&&yr(Ri,e),Al.forEach(t),El.forEach(t);for(var n=0;n<Di.length;n++){var i=Di[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<Di.length&&(n=Di[0],n.blockedOn===null);)lg(n),n.blockedOn===null&&Di.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var l=n[i],r=n[i+1],g=l[bt]||null;if(typeof r=="function")g||rg(n);else if(g){var T=null;if(r&&r.hasAttribute("formAction")){if(l=r,g=r[bt]||null)T=g.formAction;else if(Uf(l)!==null)continue}else T=g.action;typeof T=="function"?n[i+1]=T:(n.splice(i,3),i-=3),rg(n)}}}function cg(){function e(r){r.canIntercept&&r.info==="react-transition"&&r.intercept({handler:function(){return new Promise(function(g){return l=g})},focusReset:"manual",scroll:"manual"})}function t(){l!==null&&(l(),l=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var r=navigation.currentEntry;r&&r.url!=null&&navigation.navigate(r.url,{state:r.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,l=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),l!==null&&(l(),l=null)}}}function Lf(e){this._internalRoot=e}Tr.prototype.render=Lf.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(o(409));var n=t.current,i=Gt();eg(n,i,e,t,null,null)},Tr.prototype.unmount=Lf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;eg(e.current,2,null,e,null,null),ar(),t[Sa]=null}};function Tr(e){this._internalRoot=e}Tr.prototype.unstable_scheduleHydration=function(e){if(e){var t=Wh();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Di.length&&t!==0&&t<Di[n].priority;n++);Di.splice(n,0,e),n===0&&lg(e)}};var ug=a.version;if(ug!=="19.3.0")throw Error(o(527,ug,"19.3.0"));be.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=y(t),e=e!==null?b(e):null,e=e===null?null:e.stateNode,e};var Lb={bundleType:0,version:"19.3.0",rendererPackageName:"react-dom",currentDispatcherRef:se,reconcilerVersion:"19.3.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var xr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xr.isDisabled&&xr.supportsFiber)try{Us=xr.inject(Lb),Ot=xr}catch{}}return Ml.createRoot=function(e,t){if(!u(e))throw Error(o(299));var n=!1,i="",l=$m,r=ep,g=tp;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(r=t.onCaughtError),t.onRecoverableError!==void 0&&(g=t.onRecoverableError)),t=J0(e,1,!1,null,null,n,i,null,l,r,g,cg),e[Sa]=t.current,hf(e),new Lf(t)},Ml.hydrateRoot=function(e,t,n){if(!u(e))throw Error(o(299));var i=!1,l="",r=$m,g=ep,T=tp,E=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(r=n.onUncaughtError),n.onCaughtError!==void 0&&(g=n.onCaughtError),n.onRecoverableError!==void 0&&(T=n.onRecoverableError),n.formState!==void 0&&(E=n.formState)),t=J0(e,1,!0,t,n??null,i,l,E,r,g,T,cg),t.context=$0(null),n=t.current,i=Gt(),i=uc(i),l=di(i),l.callback=null,mi(n,l,i),n=i,t.current.lanes=n,Ls(t,n),Dn(t),e[Sa]=t.current,hf(e),new Tr(t)},Ml.version="19.3.0",Ml}var xg;function HT(){if(xg)return Gf.exports;xg=1;function h(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(h)}catch(a){console.error(a)}}return h(),Gf.exports=LT(),Gf.exports}var IT=HT();function Sg(h,a){if(a===Gb)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),h;if(a===rh||a===fv){let s=h.getIndex();if(s===null){const c=[],d=h.getAttribute("position");if(d!==void 0){for(let m=0;m<d.count;m++)c.push(m);h.setIndex(c),s=h.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),h}const o=s.count-2,u=[];if(a===rh)for(let c=1;c<=o;c++)u.push(s.getX(0)),u.push(s.getX(c)),u.push(s.getX(c+1));else for(let c=0;c<o;c++)c%2===0?(u.push(s.getX(c)),u.push(s.getX(c+1)),u.push(s.getX(c+2))):(u.push(s.getX(c+2)),u.push(s.getX(c+1)),u.push(s.getX(c)));u.length/3!==o&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const f=h.clone();return f.setIndex(u),f.clearGroups(),f}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",a),h}class FT extends Vb{constructor(a){super(a),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(s){return new jT(s)}),this.register(function(s){return new YT(s)}),this.register(function(s){return new ex(s)}),this.register(function(s){return new tx(s)}),this.register(function(s){return new nx(s)}),this.register(function(s){return new kT(s)}),this.register(function(s){return new KT(s)}),this.register(function(s){return new ZT(s)}),this.register(function(s){return new QT(s)}),this.register(function(s){return new PT(s)}),this.register(function(s){return new WT(s)}),this.register(function(s){return new XT(s)}),this.register(function(s){return new $T(s)}),this.register(function(s){return new JT(s)}),this.register(function(s){return new VT(s)}),this.register(function(s){return new ix(s)}),this.register(function(s){return new ax(s)})}load(a,s,o,u){const f=this;let c;if(this.resourcePath!=="")c=this.resourcePath;else if(this.path!==""){const y=Il.extractUrlBase(a);c=Il.resolveURL(y,this.path)}else c=Il.extractUrlBase(a);this.manager.itemStart(a);const d=function(y){u?u(y):console.error(y),f.manager.itemError(a),f.manager.itemEnd(a)},m=new hv(this.manager);m.setPath(this.path),m.setResponseType("arraybuffer"),m.setRequestHeader(this.requestHeader),m.setWithCredentials(this.withCredentials),m.load(a,function(y){try{f.parse(y,c,function(b){s(b),f.manager.itemEnd(a)},d)}catch(b){d(b)}},o,d)}setDRACOLoader(a){return this.dracoLoader=a,this}setKTX2Loader(a){return this.ktx2Loader=a,this}setMeshoptDecoder(a){return this.meshoptDecoder=a,this}register(a){return this.pluginCallbacks.indexOf(a)===-1&&this.pluginCallbacks.push(a),this}unregister(a){return this.pluginCallbacks.indexOf(a)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(a),1),this}parse(a,s,o,u){let f;const c={},d={},m=new TextDecoder;if(typeof a=="string")f=JSON.parse(a);else if(a instanceof ArrayBuffer)if(m.decode(new Uint8Array(a,0,4))===Sv){try{c[pe.KHR_BINARY_GLTF]=new sx(a)}catch(v){u&&u(v);return}f=JSON.parse(c[pe.KHR_BINARY_GLTF].content)}else f=JSON.parse(m.decode(a));else f=a;if(f.asset===void 0||f.asset.version[0]<2){u&&u(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const y=new yx(f,{path:s||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});y.fileLoader.setRequestHeader(this.requestHeader);for(let b=0;b<this.pluginCallbacks.length;b++){const v=this.pluginCallbacks[b](y);v.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),d[v.name]=v,c[v.name]=!0}if(f.extensionsUsed)for(let b=0;b<f.extensionsUsed.length;++b){const v=f.extensionsUsed[b],p=f.extensionsRequired||[];switch(v){case pe.KHR_MATERIALS_UNLIT:c[v]=new qT;break;case pe.KHR_DRACO_MESH_COMPRESSION:c[v]=new lx(f,this.dracoLoader);break;case pe.KHR_TEXTURE_TRANSFORM:c[v]=new ox;break;case pe.KHR_MESH_QUANTIZATION:c[v]=new rx;break;default:p.indexOf(v)>=0&&d[v]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+v+'".')}}y.setExtensions(c),y.setPlugins(d),y.parse(o,u)}parseAsync(a,s){const o=this;return new Promise(function(u,f){o.parse(a,s,u,f)})}}function GT(){let h={};return{get:function(a){return h[a]},add:function(a,s){h[a]=s},remove:function(a){delete h[a]},removeAll:function(){h={}}}}const pe={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class VT{constructor(a){this.parser=a,this.name=pe.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const a=this.parser,s=this.parser.json.nodes||[];for(let o=0,u=s.length;o<u;o++){const f=s[o];f.extensions&&f.extensions[this.name]&&f.extensions[this.name].light!==void 0&&a._addNodeRef(this.cache,f.extensions[this.name].light)}}_loadLight(a){const s=this.parser,o="light:"+a;let u=s.cache.get(o);if(u)return u;const f=s.json,m=((f.extensions&&f.extensions[this.name]||{}).lights||[])[a];let y;const b=new jt(16777215);m.color!==void 0&&b.setRGB(m.color[0],m.color[1],m.color[2],Jn);const v=m.range!==void 0?m.range:0;switch(m.type){case"directional":y=new ch(b),y.target.position.set(0,0,-1),y.add(y.target);break;case"point":y=new wh(b),y.distance=v;break;case"spot":y=new qb(b),y.distance=v,m.spot=m.spot||{},m.spot.innerConeAngle=m.spot.innerConeAngle!==void 0?m.spot.innerConeAngle:0,m.spot.outerConeAngle=m.spot.outerConeAngle!==void 0?m.spot.outerConeAngle:Math.PI/4,y.angle=m.spot.outerConeAngle,y.penumbra=1-m.spot.innerConeAngle/m.spot.outerConeAngle,y.target.position.set(0,0,-1),y.add(y.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+m.type)}return y.position.set(0,0,0),Cn(y,m),m.intensity!==void 0&&(y.intensity=m.intensity),y.name=s.createUniqueName(m.name||"light_"+a),u=Promise.resolve(y),s.cache.add(o,u),u}getDependency(a,s){if(a==="light")return this._loadLight(s)}createNodeAttachment(a){const s=this,o=this.parser,f=o.json.nodes[a],d=(f.extensions&&f.extensions[this.name]||{}).light;return d===void 0?null:this._loadLight(d).then(function(m){return o._getNodeRef(s.cache,d,m)})}}class qT{constructor(){this.name=pe.KHR_MATERIALS_UNLIT}getMaterialType(){return As}extendParams(a,s,o){const u=[];a.color=new jt(1,1,1),a.opacity=1;const f=s.pbrMetallicRoughness;if(f){if(Array.isArray(f.baseColorFactor)){const c=f.baseColorFactor;a.color.setRGB(c[0],c[1],c[2],Jn),a.opacity=c[3]}f.baseColorTexture!==void 0&&u.push(o.assignTexture(a,"map",f.baseColorTexture,Ds))}return Promise.all(u)}}class PT{constructor(a){this.parser=a,this.name=pe.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(a,s){const u=this.parser.json.materials[a];if(!u.extensions||!u.extensions[this.name])return Promise.resolve();const f=u.extensions[this.name].emissiveStrength;return f!==void 0&&(s.emissiveIntensity=f),Promise.resolve()}}class jT{constructor(a){this.parser=a,this.name=pe.KHR_MATERIALS_CLEARCOAT}getMaterialType(a){const o=this.parser.json.materials[a];return!o.extensions||!o.extensions[this.name]?null:zn}extendMaterialParams(a,s){const o=this.parser,u=o.json.materials[a];if(!u.extensions||!u.extensions[this.name])return Promise.resolve();const f=[],c=u.extensions[this.name];if(c.clearcoatFactor!==void 0&&(s.clearcoat=c.clearcoatFactor),c.clearcoatTexture!==void 0&&f.push(o.assignTexture(s,"clearcoatMap",c.clearcoatTexture)),c.clearcoatRoughnessFactor!==void 0&&(s.clearcoatRoughness=c.clearcoatRoughnessFactor),c.clearcoatRoughnessTexture!==void 0&&f.push(o.assignTexture(s,"clearcoatRoughnessMap",c.clearcoatRoughnessTexture)),c.clearcoatNormalTexture!==void 0&&(f.push(o.assignTexture(s,"clearcoatNormalMap",c.clearcoatNormalTexture)),c.clearcoatNormalTexture.scale!==void 0)){const d=c.clearcoatNormalTexture.scale;s.clearcoatNormalScale=new Re(d,d)}return Promise.all(f)}}class YT{constructor(a){this.parser=a,this.name=pe.KHR_MATERIALS_DISPERSION}getMaterialType(a){const o=this.parser.json.materials[a];return!o.extensions||!o.extensions[this.name]?null:zn}extendMaterialParams(a,s){const u=this.parser.json.materials[a];if(!u.extensions||!u.extensions[this.name])return Promise.resolve();const f=u.extensions[this.name];return s.dispersion=f.dispersion!==void 0?f.dispersion:0,Promise.resolve()}}class XT{constructor(a){this.parser=a,this.name=pe.KHR_MATERIALS_IRIDESCENCE}getMaterialType(a){const o=this.parser.json.materials[a];return!o.extensions||!o.extensions[this.name]?null:zn}extendMaterialParams(a,s){const o=this.parser,u=o.json.materials[a];if(!u.extensions||!u.extensions[this.name])return Promise.resolve();const f=[],c=u.extensions[this.name];return c.iridescenceFactor!==void 0&&(s.iridescence=c.iridescenceFactor),c.iridescenceTexture!==void 0&&f.push(o.assignTexture(s,"iridescenceMap",c.iridescenceTexture)),c.iridescenceIor!==void 0&&(s.iridescenceIOR=c.iridescenceIor),s.iridescenceThicknessRange===void 0&&(s.iridescenceThicknessRange=[100,400]),c.iridescenceThicknessMinimum!==void 0&&(s.iridescenceThicknessRange[0]=c.iridescenceThicknessMinimum),c.iridescenceThicknessMaximum!==void 0&&(s.iridescenceThicknessRange[1]=c.iridescenceThicknessMaximum),c.iridescenceThicknessTexture!==void 0&&f.push(o.assignTexture(s,"iridescenceThicknessMap",c.iridescenceThicknessTexture)),Promise.all(f)}}class kT{constructor(a){this.parser=a,this.name=pe.KHR_MATERIALS_SHEEN}getMaterialType(a){const o=this.parser.json.materials[a];return!o.extensions||!o.extensions[this.name]?null:zn}extendMaterialParams(a,s){const o=this.parser,u=o.json.materials[a];if(!u.extensions||!u.extensions[this.name])return Promise.resolve();const f=[];s.sheenColor=new jt(0,0,0),s.sheenRoughness=0,s.sheen=1;const c=u.extensions[this.name];if(c.sheenColorFactor!==void 0){const d=c.sheenColorFactor;s.sheenColor.setRGB(d[0],d[1],d[2],Jn)}return c.sheenRoughnessFactor!==void 0&&(s.sheenRoughness=c.sheenRoughnessFactor),c.sheenColorTexture!==void 0&&f.push(o.assignTexture(s,"sheenColorMap",c.sheenColorTexture,Ds)),c.sheenRoughnessTexture!==void 0&&f.push(o.assignTexture(s,"sheenRoughnessMap",c.sheenRoughnessTexture)),Promise.all(f)}}class KT{constructor(a){this.parser=a,this.name=pe.KHR_MATERIALS_TRANSMISSION}getMaterialType(a){const o=this.parser.json.materials[a];return!o.extensions||!o.extensions[this.name]?null:zn}extendMaterialParams(a,s){const o=this.parser,u=o.json.materials[a];if(!u.extensions||!u.extensions[this.name])return Promise.resolve();const f=[],c=u.extensions[this.name];return c.transmissionFactor!==void 0&&(s.transmission=c.transmissionFactor),c.transmissionTexture!==void 0&&f.push(o.assignTexture(s,"transmissionMap",c.transmissionTexture)),Promise.all(f)}}class ZT{constructor(a){this.parser=a,this.name=pe.KHR_MATERIALS_VOLUME}getMaterialType(a){const o=this.parser.json.materials[a];return!o.extensions||!o.extensions[this.name]?null:zn}extendMaterialParams(a,s){const o=this.parser,u=o.json.materials[a];if(!u.extensions||!u.extensions[this.name])return Promise.resolve();const f=[],c=u.extensions[this.name];s.thickness=c.thicknessFactor!==void 0?c.thicknessFactor:0,c.thicknessTexture!==void 0&&f.push(o.assignTexture(s,"thicknessMap",c.thicknessTexture)),s.attenuationDistance=c.attenuationDistance||1/0;const d=c.attenuationColor||[1,1,1];return s.attenuationColor=new jt().setRGB(d[0],d[1],d[2],Jn),Promise.all(f)}}class QT{constructor(a){this.parser=a,this.name=pe.KHR_MATERIALS_IOR}getMaterialType(a){const o=this.parser.json.materials[a];return!o.extensions||!o.extensions[this.name]?null:zn}extendMaterialParams(a,s){const u=this.parser.json.materials[a];if(!u.extensions||!u.extensions[this.name])return Promise.resolve();const f=u.extensions[this.name];return s.ior=f.ior!==void 0?f.ior:1.5,Promise.resolve()}}class WT{constructor(a){this.parser=a,this.name=pe.KHR_MATERIALS_SPECULAR}getMaterialType(a){const o=this.parser.json.materials[a];return!o.extensions||!o.extensions[this.name]?null:zn}extendMaterialParams(a,s){const o=this.parser,u=o.json.materials[a];if(!u.extensions||!u.extensions[this.name])return Promise.resolve();const f=[],c=u.extensions[this.name];s.specularIntensity=c.specularFactor!==void 0?c.specularFactor:1,c.specularTexture!==void 0&&f.push(o.assignTexture(s,"specularIntensityMap",c.specularTexture));const d=c.specularColorFactor||[1,1,1];return s.specularColor=new jt().setRGB(d[0],d[1],d[2],Jn),c.specularColorTexture!==void 0&&f.push(o.assignTexture(s,"specularColorMap",c.specularColorTexture,Ds)),Promise.all(f)}}class JT{constructor(a){this.parser=a,this.name=pe.EXT_MATERIALS_BUMP}getMaterialType(a){const o=this.parser.json.materials[a];return!o.extensions||!o.extensions[this.name]?null:zn}extendMaterialParams(a,s){const o=this.parser,u=o.json.materials[a];if(!u.extensions||!u.extensions[this.name])return Promise.resolve();const f=[],c=u.extensions[this.name];return s.bumpScale=c.bumpFactor!==void 0?c.bumpFactor:1,c.bumpTexture!==void 0&&f.push(o.assignTexture(s,"bumpMap",c.bumpTexture)),Promise.all(f)}}class $T{constructor(a){this.parser=a,this.name=pe.KHR_MATERIALS_ANISOTROPY}getMaterialType(a){const o=this.parser.json.materials[a];return!o.extensions||!o.extensions[this.name]?null:zn}extendMaterialParams(a,s){const o=this.parser,u=o.json.materials[a];if(!u.extensions||!u.extensions[this.name])return Promise.resolve();const f=[],c=u.extensions[this.name];return c.anisotropyStrength!==void 0&&(s.anisotropy=c.anisotropyStrength),c.anisotropyRotation!==void 0&&(s.anisotropyRotation=c.anisotropyRotation),c.anisotropyTexture!==void 0&&f.push(o.assignTexture(s,"anisotropyMap",c.anisotropyTexture)),Promise.all(f)}}class ex{constructor(a){this.parser=a,this.name=pe.KHR_TEXTURE_BASISU}loadTexture(a){const s=this.parser,o=s.json,u=o.textures[a];if(!u.extensions||!u.extensions[this.name])return null;const f=u.extensions[this.name],c=s.options.ktx2Loader;if(!c){if(o.extensionsRequired&&o.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return s.loadTextureImage(a,f.source,c)}}class tx{constructor(a){this.parser=a,this.name=pe.EXT_TEXTURE_WEBP}loadTexture(a){const s=this.name,o=this.parser,u=o.json,f=u.textures[a];if(!f.extensions||!f.extensions[s])return null;const c=f.extensions[s],d=u.images[c.source];let m=o.textureLoader;if(d.uri){const y=o.options.manager.getHandler(d.uri);y!==null&&(m=y)}return o.loadTextureImage(a,c.source,m)}}class nx{constructor(a){this.parser=a,this.name=pe.EXT_TEXTURE_AVIF}loadTexture(a){const s=this.name,o=this.parser,u=o.json,f=u.textures[a];if(!f.extensions||!f.extensions[s])return null;const c=f.extensions[s],d=u.images[c.source];let m=o.textureLoader;if(d.uri){const y=o.options.manager.getHandler(d.uri);y!==null&&(m=y)}return o.loadTextureImage(a,c.source,m)}}class ix{constructor(a){this.name=pe.EXT_MESHOPT_COMPRESSION,this.parser=a}loadBufferView(a){const s=this.parser.json,o=s.bufferViews[a];if(o.extensions&&o.extensions[this.name]){const u=o.extensions[this.name],f=this.parser.getDependency("buffer",u.buffer),c=this.parser.options.meshoptDecoder;if(!c||!c.supported){if(s.extensionsRequired&&s.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return f.then(function(d){const m=u.byteOffset||0,y=u.byteLength||0,b=u.count,v=u.byteStride,p=new Uint8Array(d,m,y);return c.decodeGltfBufferAsync?c.decodeGltfBufferAsync(b,v,p,u.mode,u.filter).then(function(S){return S.buffer}):c.ready.then(function(){const S=new ArrayBuffer(b*v);return c.decodeGltfBuffer(new Uint8Array(S),b,v,p,u.mode,u.filter),S})})}else return null}}class ax{constructor(a){this.name=pe.EXT_MESH_GPU_INSTANCING,this.parser=a}createNodeMesh(a){const s=this.parser.json,o=s.nodes[a];if(!o.extensions||!o.extensions[this.name]||o.mesh===void 0)return null;const u=s.meshes[o.mesh];for(const y of u.primitives)if(y.mode!==nn.TRIANGLES&&y.mode!==nn.TRIANGLE_STRIP&&y.mode!==nn.TRIANGLE_FAN&&y.mode!==void 0)return null;const c=o.extensions[this.name].attributes,d=[],m={};for(const y in c)d.push(this.parser.getDependency("accessor",c[y]).then(b=>(m[y]=b,m[y])));return d.length<1?null:(d.push(this.parser.createNodeMesh(a)),Promise.all(d).then(y=>{const b=y.pop(),v=b.isGroup?b.children:[b],p=y[0].count,S=[];for(const _ of v){const C=new Pe,x=new Q,w=new ql,M=new Q(1,1,1),A=new dv(_.geometry,_.material,p);for(let R=0;R<p;R++)m.TRANSLATION&&x.fromBufferAttribute(m.TRANSLATION,R),m.ROTATION&&w.fromBufferAttribute(m.ROTATION,R),m.SCALE&&M.fromBufferAttribute(m.SCALE,R),A.setMatrixAt(R,C.compose(x,w,M));for(const R in m)if(R==="_COLOR_0"){const D=m[R];A.instanceColor=new Pb(D.array,D.itemSize,D.normalized)}else R!=="TRANSLATION"&&R!=="ROTATION"&&R!=="SCALE"&&_.geometry.setAttribute(R,m[R]);Mh.prototype.copy.call(A,_),this.parser.assignFinalMaterial(A),S.push(A)}return b.isGroup?(b.clear(),b.add(...S),b):S[0]}))}}const Sv="glTF",Rl=12,_g={JSON:1313821514,BIN:5130562};class sx{constructor(a){this.name=pe.KHR_BINARY_GLTF,this.content=null,this.body=null;const s=new DataView(a,0,Rl),o=new TextDecoder;if(this.header={magic:o.decode(new Uint8Array(a.slice(0,4))),version:s.getUint32(4,!0),length:s.getUint32(8,!0)},this.header.magic!==Sv)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const u=this.header.length-Rl,f=new DataView(a,Rl);let c=0;for(;c<u;){const d=f.getUint32(c,!0);c+=4;const m=f.getUint32(c,!0);if(c+=4,m===_g.JSON){const y=new Uint8Array(a,Rl+c,d);this.content=o.decode(y)}else if(m===_g.BIN){const y=Rl+c;this.body=a.slice(y,y+d)}c+=d}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class lx{constructor(a,s){if(!s)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=pe.KHR_DRACO_MESH_COMPRESSION,this.json=a,this.dracoLoader=s,this.dracoLoader.preload()}decodePrimitive(a,s){const o=this.json,u=this.dracoLoader,f=a.extensions[this.name].bufferView,c=a.extensions[this.name].attributes,d={},m={},y={};for(const b in c){const v=dh[b]||b.toLowerCase();d[v]=c[b]}for(const b in a.attributes){const v=dh[b]||b.toLowerCase();if(c[b]!==void 0){const p=o.accessors[a.attributes[b]],S=Rs[p.componentType];y[v]=S.name,m[v]=p.normalized===!0}}return s.getDependency("bufferView",f).then(function(b){return new Promise(function(v,p){u.decodeDracoFile(b,function(S){for(const _ in S.attributes){const C=S.attributes[_],x=m[_];x!==void 0&&(C.normalized=x)}v(S)},d,y,Jn,p)})})}}class ox{constructor(){this.name=pe.KHR_TEXTURE_TRANSFORM}extendTexture(a,s){return(s.texCoord===void 0||s.texCoord===a.channel)&&s.offset===void 0&&s.rotation===void 0&&s.scale===void 0||(a=a.clone(),s.texCoord!==void 0&&(a.channel=s.texCoord),s.offset!==void 0&&a.offset.fromArray(s.offset),s.rotation!==void 0&&(a.rotation=s.rotation),s.scale!==void 0&&a.repeat.fromArray(s.scale),a.needsUpdate=!0),a}}class rx{constructor(){this.name=pe.KHR_MESH_QUANTIZATION}}class _v extends uT{constructor(a,s,o,u){super(a,s,o,u)}copySampleValue_(a){const s=this.resultBuffer,o=this.sampleValues,u=this.valueSize,f=a*u*3+u;for(let c=0;c!==u;c++)s[c]=o[f+c];return s}interpolate_(a,s,o,u){const f=this.resultBuffer,c=this.sampleValues,d=this.valueSize,m=d*2,y=d*3,b=u-s,v=(o-s)/b,p=v*v,S=p*v,_=a*y,C=_-y,x=-2*S+3*p,w=S-p,M=1-x,A=w-p+v;for(let R=0;R!==d;R++){const D=c[C+R+d],H=c[C+R+m]*b,O=c[_+R+d],j=c[_+R]*b;f[R]=M*D+A*H+x*O+w*j}return f}}const cx=new ql;class ux extends _v{interpolate_(a,s,o,u){const f=super.interpolate_(a,s,o,u);return cx.fromArray(f).normalize().toArray(f),f}}const nn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Rs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Ag={9728:Le,9729:Mt,9984:Zb,9985:Kb,9986:kb,9987:mv},Eg={33071:$n,33648:Qb,10497:pn},Pf={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},dh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ni={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},fx={CUBICSPLINE:void 0,LINEAR:gv,STEP:rT},jf={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function hx(h){return h.DefaultMaterial===void 0&&(h.DefaultMaterial=new Yr({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Xr})),h.DefaultMaterial}function fa(h,a,s){for(const o in s.extensions)h[o]===void 0&&(a.userData.gltfExtensions=a.userData.gltfExtensions||{},a.userData.gltfExtensions[o]=s.extensions[o])}function Cn(h,a){a.extras!==void 0&&(typeof a.extras=="object"?Object.assign(h.userData,a.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+a.extras))}function dx(h,a,s){let o=!1,u=!1,f=!1;for(let y=0,b=a.length;y<b;y++){const v=a[y];if(v.POSITION!==void 0&&(o=!0),v.NORMAL!==void 0&&(u=!0),v.COLOR_0!==void 0&&(f=!0),o&&u&&f)break}if(!o&&!u&&!f)return Promise.resolve(h);const c=[],d=[],m=[];for(let y=0,b=a.length;y<b;y++){const v=a[y];if(o){const p=v.POSITION!==void 0?s.getDependency("accessor",v.POSITION):h.attributes.position;c.push(p)}if(u){const p=v.NORMAL!==void 0?s.getDependency("accessor",v.NORMAL):h.attributes.normal;d.push(p)}if(f){const p=v.COLOR_0!==void 0?s.getDependency("accessor",v.COLOR_0):h.attributes.color;m.push(p)}}return Promise.all([Promise.all(c),Promise.all(d),Promise.all(m)]).then(function(y){const b=y[0],v=y[1],p=y[2];return o&&(h.morphAttributes.position=b),u&&(h.morphAttributes.normal=v),f&&(h.morphAttributes.color=p),h.morphTargetsRelative=!0,h})}function mx(h,a){if(h.updateMorphTargets(),a.weights!==void 0)for(let s=0,o=a.weights.length;s<o;s++)h.morphTargetInfluences[s]=a.weights[s];if(a.extras&&Array.isArray(a.extras.targetNames)){const s=a.extras.targetNames;if(h.morphTargetInfluences.length===s.length){h.morphTargetDictionary={};for(let o=0,u=s.length;o<u;o++)h.morphTargetDictionary[s[o]]=o}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function px(h){let a;const s=h.extensions&&h.extensions[pe.KHR_DRACO_MESH_COMPRESSION];if(s?a="draco:"+s.bufferView+":"+s.indices+":"+Yf(s.attributes):a=h.indices+":"+Yf(h.attributes)+":"+h.mode,h.targets!==void 0)for(let o=0,u=h.targets.length;o<u;o++)a+=":"+Yf(h.targets[o]);return a}function Yf(h){let a="";const s=Object.keys(h).sort();for(let o=0,u=s.length;o<u;o++)a+=s[o]+":"+h[s[o]]+";";return a}function mh(h){switch(h){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function gx(h){return h.search(/\.jpe?g($|\?)/i)>0||h.search(/^data\:image\/jpeg/)===0?"image/jpeg":h.search(/\.webp($|\?)/i)>0||h.search(/^data\:image\/webp/)===0?"image/webp":h.search(/\.ktx2($|\?)/i)>0||h.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const vx=new Pe;class yx{constructor(a={},s={}){this.json=a,this.extensions={},this.plugins={},this.options=s,this.cache=new GT,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let o=!1,u=-1,f=!1,c=-1;if(typeof navigator<"u"){const d=navigator.userAgent;o=/^((?!chrome|android).)*safari/i.test(d)===!0;const m=d.match(/Version\/(\d+)/);u=o&&m?parseInt(m[1],10):-1,f=d.indexOf("Firefox")>-1,c=f?d.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||o&&u<17||f&&c<98?this.textureLoader=new jb(this.options.manager):this.textureLoader=new Yb(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new hv(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(a){this.extensions=a}setPlugins(a){this.plugins=a}parse(a,s){const o=this,u=this.json,f=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(c){return c._markDefs&&c._markDefs()}),Promise.all(this._invokeAll(function(c){return c.beforeRoot&&c.beforeRoot()})).then(function(){return Promise.all([o.getDependencies("scene"),o.getDependencies("animation"),o.getDependencies("camera")])}).then(function(c){const d={scene:c[0][u.scene||0],scenes:c[0],animations:c[1],cameras:c[2],asset:u.asset,parser:o,userData:{}};return fa(f,d,u),Cn(d,u),Promise.all(o._invokeAll(function(m){return m.afterRoot&&m.afterRoot(d)})).then(function(){for(const m of d.scenes)m.updateMatrixWorld();a(d)})}).catch(s)}_markDefs(){const a=this.json.nodes||[],s=this.json.skins||[],o=this.json.meshes||[];for(let u=0,f=s.length;u<f;u++){const c=s[u].joints;for(let d=0,m=c.length;d<m;d++)a[c[d]].isBone=!0}for(let u=0,f=a.length;u<f;u++){const c=a[u];c.mesh!==void 0&&(this._addNodeRef(this.meshCache,c.mesh),c.skin!==void 0&&(o[c.mesh].isSkinnedMesh=!0)),c.camera!==void 0&&this._addNodeRef(this.cameraCache,c.camera)}}_addNodeRef(a,s){s!==void 0&&(a.refs[s]===void 0&&(a.refs[s]=a.uses[s]=0),a.refs[s]++)}_getNodeRef(a,s,o){if(a.refs[s]<=1)return o;const u=o.clone(),f=(c,d)=>{const m=this.associations.get(c);m!=null&&this.associations.set(d,m);for(const[y,b]of c.children.entries())f(b,d.children[y])};return f(o,u),u.name+="_instance_"+a.uses[s]++,u}_invokeOne(a){const s=Object.values(this.plugins);s.push(this);for(let o=0;o<s.length;o++){const u=a(s[o]);if(u)return u}return null}_invokeAll(a){const s=Object.values(this.plugins);s.unshift(this);const o=[];for(let u=0;u<s.length;u++){const f=a(s[u]);f&&o.push(f)}return o}getDependency(a,s){const o=a+":"+s;let u=this.cache.get(o);if(!u){switch(a){case"scene":u=this.loadScene(s);break;case"node":u=this._invokeOne(function(f){return f.loadNode&&f.loadNode(s)});break;case"mesh":u=this._invokeOne(function(f){return f.loadMesh&&f.loadMesh(s)});break;case"accessor":u=this.loadAccessor(s);break;case"bufferView":u=this._invokeOne(function(f){return f.loadBufferView&&f.loadBufferView(s)});break;case"buffer":u=this.loadBuffer(s);break;case"material":u=this._invokeOne(function(f){return f.loadMaterial&&f.loadMaterial(s)});break;case"texture":u=this._invokeOne(function(f){return f.loadTexture&&f.loadTexture(s)});break;case"skin":u=this.loadSkin(s);break;case"animation":u=this._invokeOne(function(f){return f.loadAnimation&&f.loadAnimation(s)});break;case"camera":u=this.loadCamera(s);break;default:if(u=this._invokeOne(function(f){return f!=this&&f.getDependency&&f.getDependency(a,s)}),!u)throw new Error("Unknown type: "+a);break}this.cache.add(o,u)}return u}getDependencies(a){let s=this.cache.get(a);if(!s){const o=this,u=this.json[a+(a==="mesh"?"es":"s")]||[];s=Promise.all(u.map(function(f,c){return o.getDependency(a,c)})),this.cache.add(a,s)}return s}loadBuffer(a){const s=this.json.buffers[a],o=this.fileLoader;if(s.type&&s.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+s.type+" buffer type is not supported.");if(s.uri===void 0&&a===0)return Promise.resolve(this.extensions[pe.KHR_BINARY_GLTF].body);const u=this.options;return new Promise(function(f,c){o.load(Il.resolveURL(s.uri,u.path),f,void 0,function(){c(new Error('THREE.GLTFLoader: Failed to load buffer "'+s.uri+'".'))})})}loadBufferView(a){const s=this.json.bufferViews[a];return this.getDependency("buffer",s.buffer).then(function(o){const u=s.byteLength||0,f=s.byteOffset||0;return o.slice(f,f+u)})}loadAccessor(a){const s=this,o=this.json,u=this.json.accessors[a];if(u.bufferView===void 0&&u.sparse===void 0){const c=Pf[u.type],d=Rs[u.componentType],m=u.normalized===!0,y=new d(u.count*c);return Promise.resolve(new vt(y,c,m))}const f=[];return u.bufferView!==void 0?f.push(this.getDependency("bufferView",u.bufferView)):f.push(null),u.sparse!==void 0&&(f.push(this.getDependency("bufferView",u.sparse.indices.bufferView)),f.push(this.getDependency("bufferView",u.sparse.values.bufferView))),Promise.all(f).then(function(c){const d=c[0],m=Pf[u.type],y=Rs[u.componentType],b=y.BYTES_PER_ELEMENT,v=b*m,p=u.byteOffset||0,S=u.bufferView!==void 0?o.bufferViews[u.bufferView].byteStride:void 0,_=u.normalized===!0;let C,x;if(S&&S!==v){const w=Math.floor(p/S),M="InterleavedBuffer:"+u.bufferView+":"+u.componentType+":"+w+":"+u.count;let A=s.cache.get(M);A||(C=new y(d,w*S,u.count*S/b),A=new Xb(C,S/b),s.cache.add(M,A)),x=new cT(A,m,p%S/b,_)}else d===null?C=new y(u.count*m):C=new y(d,p,u.count*m),x=new vt(C,m,_);if(u.sparse!==void 0){const w=Pf.SCALAR,M=Rs[u.sparse.indices.componentType],A=u.sparse.indices.byteOffset||0,R=u.sparse.values.byteOffset||0,D=new M(c[1],A,u.sparse.count*w),H=new y(c[2],R,u.sparse.count*m);d!==null&&(x=new vt(x.array.slice(),x.itemSize,x.normalized)),x.normalized=!1;for(let O=0,j=D.length;O<j;O++){const V=D[O];if(x.setX(V,H[O*m]),m>=2&&x.setY(V,H[O*m+1]),m>=3&&x.setZ(V,H[O*m+2]),m>=4&&x.setW(V,H[O*m+3]),m>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}x.normalized=_}return x})}loadTexture(a){const s=this.json,o=this.options,f=s.textures[a].source,c=s.images[f];let d=this.textureLoader;if(c.uri){const m=o.manager.getHandler(c.uri);m!==null&&(d=m)}return this.loadTextureImage(a,f,d)}loadTextureImage(a,s,o){const u=this,f=this.json,c=f.textures[a],d=f.images[s],m=(d.uri||d.bufferView)+":"+c.sampler;if(this.textureCache[m])return this.textureCache[m];const y=this.loadImageSource(s,o).then(function(b){b.flipY=!1,b.name=c.name||d.name||"",b.name===""&&typeof d.uri=="string"&&d.uri.startsWith("data:image/")===!1&&(b.name=d.uri);const p=(f.samplers||{})[c.sampler]||{};return b.magFilter=Ag[p.magFilter]||Mt,b.minFilter=Ag[p.minFilter]||mv,b.wrapS=Eg[p.wrapS]||pn,b.wrapT=Eg[p.wrapT]||pn,b.generateMipmaps=!b.isCompressedTexture&&b.minFilter!==Le&&b.minFilter!==Mt,u.associations.set(b,{textures:a}),b}).catch(function(){return null});return this.textureCache[m]=y,y}loadImageSource(a,s){const o=this,u=this.json,f=this.options;if(this.sourceCache[a]!==void 0)return this.sourceCache[a].then(v=>v.clone());const c=u.images[a],d=self.URL||self.webkitURL;let m=c.uri||"",y=!1;if(c.bufferView!==void 0)m=o.getDependency("bufferView",c.bufferView).then(function(v){y=!0;const p=new Blob([v],{type:c.mimeType});return m=d.createObjectURL(p),m});else if(c.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+a+" is missing URI and bufferView");const b=Promise.resolve(m).then(function(v){return new Promise(function(p,S){let _=p;s.isImageBitmapLoader===!0&&(_=function(C){const x=new fg(C);x.needsUpdate=!0,p(x)}),s.load(Il.resolveURL(v,f.path),_,void 0,S)})}).then(function(v){return y===!0&&d.revokeObjectURL(m),Cn(v,c),v.userData.mimeType=c.mimeType||gx(c.uri),v}).catch(function(v){throw console.error("THREE.GLTFLoader: Couldn't load texture",m),v});return this.sourceCache[a]=b,b}assignTexture(a,s,o,u){const f=this;return this.getDependency("texture",o.index).then(function(c){if(!c)return null;if(o.texCoord!==void 0&&o.texCoord>0&&(c=c.clone(),c.channel=o.texCoord),f.extensions[pe.KHR_TEXTURE_TRANSFORM]){const d=o.extensions!==void 0?o.extensions[pe.KHR_TEXTURE_TRANSFORM]:void 0;if(d){const m=f.associations.get(c);c=f.extensions[pe.KHR_TEXTURE_TRANSFORM].extendTexture(c,d),f.associations.set(c,m)}}return u!==void 0&&(c.colorSpace=u),a[s]=c,c})}assignFinalMaterial(a){const s=a.geometry;let o=a.material;const u=s.attributes.tangent===void 0,f=s.attributes.color!==void 0,c=s.attributes.normal===void 0;if(a.isPoints){const d="PointsMaterial:"+o.uuid;let m=this.cache.get(d);m||(m=new Wb,Hf.prototype.copy.call(m,o),m.color.copy(o.color),m.map=o.map,m.sizeAttenuation=!1,this.cache.add(d,m)),o=m}else if(a.isLine){const d="LineBasicMaterial:"+o.uuid;let m=this.cache.get(d);m||(m=new Jb,Hf.prototype.copy.call(m,o),m.color.copy(o.color),m.map=o.map,this.cache.add(d,m)),o=m}if(u||f||c){let d="ClonedMaterial:"+o.uuid+":";u&&(d+="derivative-tangents:"),f&&(d+="vertex-colors:"),c&&(d+="flat-shading:");let m=this.cache.get(d);m||(m=o.clone(),f&&(m.vertexColors=!0),c&&(m.flatShading=!0),u&&(m.normalScale&&(m.normalScale.y*=-1),m.clearcoatNormalScale&&(m.clearcoatNormalScale.y*=-1)),this.cache.add(d,m),this.associations.set(m,this.associations.get(o))),o=m}a.material=o}getMaterialType(){return Yr}loadMaterial(a){const s=this,o=this.json,u=this.extensions,f=o.materials[a];let c;const d={},m=f.extensions||{},y=[];if(m[pe.KHR_MATERIALS_UNLIT]){const v=u[pe.KHR_MATERIALS_UNLIT];c=v.getMaterialType(),y.push(v.extendParams(d,f,s))}else{const v=f.pbrMetallicRoughness||{};if(d.color=new jt(1,1,1),d.opacity=1,Array.isArray(v.baseColorFactor)){const p=v.baseColorFactor;d.color.setRGB(p[0],p[1],p[2],Jn),d.opacity=p[3]}v.baseColorTexture!==void 0&&y.push(s.assignTexture(d,"map",v.baseColorTexture,Ds)),d.metalness=v.metallicFactor!==void 0?v.metallicFactor:1,d.roughness=v.roughnessFactor!==void 0?v.roughnessFactor:1,v.metallicRoughnessTexture!==void 0&&(y.push(s.assignTexture(d,"metalnessMap",v.metallicRoughnessTexture)),y.push(s.assignTexture(d,"roughnessMap",v.metallicRoughnessTexture))),c=this._invokeOne(function(p){return p.getMaterialType&&p.getMaterialType(a)}),y.push(Promise.all(this._invokeAll(function(p){return p.extendMaterialParams&&p.extendMaterialParams(a,d)})))}f.doubleSided===!0&&(d.side=Rh);const b=f.alphaMode||jf.OPAQUE;if(b===jf.BLEND?(d.transparent=!0,d.depthWrite=!1):(d.transparent=!1,b===jf.MASK&&(d.alphaTest=f.alphaCutoff!==void 0?f.alphaCutoff:.5)),f.normalTexture!==void 0&&c!==As&&(y.push(s.assignTexture(d,"normalMap",f.normalTexture)),d.normalScale=new Re(1,1),f.normalTexture.scale!==void 0)){const v=f.normalTexture.scale;d.normalScale.set(v,v)}if(f.occlusionTexture!==void 0&&c!==As&&(y.push(s.assignTexture(d,"aoMap",f.occlusionTexture)),f.occlusionTexture.strength!==void 0&&(d.aoMapIntensity=f.occlusionTexture.strength)),f.emissiveFactor!==void 0&&c!==As){const v=f.emissiveFactor;d.emissive=new jt().setRGB(v[0],v[1],v[2],Jn)}return f.emissiveTexture!==void 0&&c!==As&&y.push(s.assignTexture(d,"emissiveMap",f.emissiveTexture,Ds)),Promise.all(y).then(function(){const v=new c(d);return f.name&&(v.name=f.name),Cn(v,f),s.associations.set(v,{materials:a}),f.extensions&&fa(u,v,f),v})}createUniqueName(a){const s=$b.sanitizeNodeName(a||"");return s in this.nodeNamesUsed?s+"_"+ ++this.nodeNamesUsed[s]:(this.nodeNamesUsed[s]=0,s)}loadGeometries(a){const s=this,o=this.extensions,u=this.primitiveCache;function f(d){return o[pe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(d,s).then(function(m){return wg(m,d,s)})}const c=[];for(let d=0,m=a.length;d<m;d++){const y=a[d],b=px(y),v=u[b];if(v)c.push(v.promise);else{let p;y.extensions&&y.extensions[pe.KHR_DRACO_MESH_COMPRESSION]?p=f(y):p=wg(new Li,y,s),u[b]={primitive:y,promise:p},c.push(p)}}return Promise.all(c)}loadMesh(a){const s=this,o=this.json,u=this.extensions,f=o.meshes[a],c=f.primitives,d=[];for(let m=0,y=c.length;m<y;m++){const b=c[m].material===void 0?hx(this.cache):this.getDependency("material",c[m].material);d.push(b)}return d.push(s.loadGeometries(c)),Promise.all(d).then(function(m){const y=m.slice(0,m.length-1),b=m[m.length-1],v=[];for(let S=0,_=b.length;S<_;S++){const C=b[S],x=c[S];let w;const M=y[S];if(x.mode===nn.TRIANGLES||x.mode===nn.TRIANGLE_STRIP||x.mode===nn.TRIANGLE_FAN||x.mode===void 0)w=f.isSkinnedMesh===!0?new eT(C,M):new Nn(C,M),w.isSkinnedMesh===!0&&w.normalizeSkinWeights(),x.mode===nn.TRIANGLE_STRIP?w.geometry=Sg(w.geometry,fv):x.mode===nn.TRIANGLE_FAN&&(w.geometry=Sg(w.geometry,rh));else if(x.mode===nn.LINES)w=new tT(C,M);else if(x.mode===nn.LINE_STRIP)w=new nT(C,M);else if(x.mode===nn.LINE_LOOP)w=new iT(C,M);else if(x.mode===nn.POINTS)w=new aT(C,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+x.mode);Object.keys(w.geometry.morphAttributes).length>0&&mx(w,f),w.name=s.createUniqueName(f.name||"mesh_"+a),Cn(w,f),x.extensions&&fa(u,w,x),s.assignFinalMaterial(w),v.push(w)}for(let S=0,_=v.length;S<_;S++)s.associations.set(v[S],{meshes:a,primitives:S});if(v.length===1)return f.extensions&&fa(u,v[0],f),v[0];const p=new If;f.extensions&&fa(u,p,f),s.associations.set(p,{meshes:a});for(let S=0,_=v.length;S<_;S++)p.add(v[S]);return p})}loadCamera(a){let s;const o=this.json.cameras[a],u=o[o.type];if(!u){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return o.type==="perspective"?s=new Zr(Qr.radToDeg(u.yfov),u.aspectRatio||1,u.znear||1,u.zfar||2e6):o.type==="orthographic"&&(s=new pv(-u.xmag,u.xmag,u.ymag,-u.ymag,u.znear,u.zfar)),o.name&&(s.name=this.createUniqueName(o.name)),Cn(s,o),Promise.resolve(s)}loadSkin(a){const s=this.json.skins[a],o=[];for(let u=0,f=s.joints.length;u<f;u++)o.push(this._loadNodeShallow(s.joints[u]));return s.inverseBindMatrices!==void 0?o.push(this.getDependency("accessor",s.inverseBindMatrices)):o.push(null),Promise.all(o).then(function(u){const f=u.pop(),c=u,d=[],m=[];for(let y=0,b=c.length;y<b;y++){const v=c[y];if(v){d.push(v);const p=new Pe;f!==null&&p.fromArray(f.array,y*16),m.push(p)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',s.joints[y])}return new sT(d,m)})}loadAnimation(a){const s=this.json,o=this,u=s.animations[a],f=u.name?u.name:"animation_"+a,c=[],d=[],m=[],y=[],b=[];for(let v=0,p=u.channels.length;v<p;v++){const S=u.channels[v],_=u.samplers[S.sampler],C=S.target,x=C.node,w=u.parameters!==void 0?u.parameters[_.input]:_.input,M=u.parameters!==void 0?u.parameters[_.output]:_.output;C.node!==void 0&&(c.push(this.getDependency("node",x)),d.push(this.getDependency("accessor",w)),m.push(this.getDependency("accessor",M)),y.push(_),b.push(C))}return Promise.all([Promise.all(c),Promise.all(d),Promise.all(m),Promise.all(y),Promise.all(b)]).then(function(v){const p=v[0],S=v[1],_=v[2],C=v[3],x=v[4],w=[];for(let A=0,R=p.length;A<R;A++){const D=p[A],H=S[A],O=_[A],j=C[A],V=x[A];if(D===void 0)continue;D.updateMatrix&&D.updateMatrix();const Y=o._createAnimationTracks(D,H,O,j,V);if(Y)for(let Z=0;Z<Y.length;Z++)w.push(Y[Z])}const M=new lT(f,void 0,w);return Cn(M,u),M})}createNodeMesh(a){const s=this.json,o=this,u=s.nodes[a];return u.mesh===void 0?null:o.getDependency("mesh",u.mesh).then(function(f){const c=o._getNodeRef(o.meshCache,u.mesh,f);return u.weights!==void 0&&c.traverse(function(d){if(d.isMesh)for(let m=0,y=u.weights.length;m<y;m++)d.morphTargetInfluences[m]=u.weights[m]}),c})}loadNode(a){const s=this.json,o=this,u=s.nodes[a],f=o._loadNodeShallow(a),c=[],d=u.children||[];for(let y=0,b=d.length;y<b;y++)c.push(o.getDependency("node",d[y]));const m=u.skin===void 0?Promise.resolve(null):o.getDependency("skin",u.skin);return Promise.all([f,Promise.all(c),m]).then(function(y){const b=y[0],v=y[1],p=y[2];p!==null&&b.traverse(function(S){S.isSkinnedMesh&&S.bind(p,vx)});for(let S=0,_=v.length;S<_;S++)b.add(v[S]);return b})}_loadNodeShallow(a){const s=this.json,o=this.extensions,u=this;if(this.nodeCache[a]!==void 0)return this.nodeCache[a];const f=s.nodes[a],c=f.name?u.createUniqueName(f.name):"",d=[],m=u._invokeOne(function(y){return y.createNodeMesh&&y.createNodeMesh(a)});return m&&d.push(m),f.camera!==void 0&&d.push(u.getDependency("camera",f.camera).then(function(y){return u._getNodeRef(u.cameraCache,f.camera,y)})),u._invokeAll(function(y){return y.createNodeAttachment&&y.createNodeAttachment(a)}).forEach(function(y){d.push(y)}),this.nodeCache[a]=Promise.all(d).then(function(y){let b;if(f.isBone===!0?b=new oT:y.length>1?b=new If:y.length===1?b=y[0]:b=new Mh,b!==y[0])for(let v=0,p=y.length;v<p;v++)b.add(y[v]);if(f.name&&(b.userData.name=f.name,b.name=c),Cn(b,f),f.extensions&&fa(o,b,f),f.matrix!==void 0){const v=new Pe;v.fromArray(f.matrix),b.applyMatrix4(v)}else f.translation!==void 0&&b.position.fromArray(f.translation),f.rotation!==void 0&&b.quaternion.fromArray(f.rotation),f.scale!==void 0&&b.scale.fromArray(f.scale);if(!u.associations.has(b))u.associations.set(b,{});else if(f.mesh!==void 0&&u.meshCache.refs[f.mesh]>1){const v=u.associations.get(b);u.associations.set(b,{...v})}return u.associations.get(b).nodes=a,b}),this.nodeCache[a]}loadScene(a){const s=this.extensions,o=this.json.scenes[a],u=this,f=new If;o.name&&(f.name=u.createUniqueName(o.name)),Cn(f,o),o.extensions&&fa(s,f,o);const c=o.nodes||[],d=[];for(let m=0,y=c.length;m<y;m++)d.push(u.getDependency("node",c[m]));return Promise.all(d).then(function(m){for(let b=0,v=m.length;b<v;b++)f.add(m[b]);const y=b=>{const v=new Map;for(const[p,S]of u.associations)(p instanceof Hf||p instanceof fg)&&v.set(p,S);return b.traverse(p=>{const S=u.associations.get(p);S!=null&&v.set(p,S)}),v};return u.associations=y(f),f})}_createAnimationTracks(a,s,o,u,f){const c=[],d=a.name?a.name:a.uuid,m=[];Ni[f.path]===Ni.weights?a.traverse(function(p){p.morphTargetInfluences&&m.push(p.name?p.name:p.uuid)}):m.push(d);let y;switch(Ni[f.path]){case Ni.weights:y=dg;break;case Ni.rotation:y=mg;break;case Ni.translation:case Ni.scale:y=hg;break;default:o.itemSize===1?y=dg:y=hg;break}const b=u.interpolation!==void 0?fx[u.interpolation]:gv,v=this._getArrayFromAccessor(o);for(let p=0,S=m.length;p<S;p++){const _=new y(m[p]+"."+Ni[f.path],s.array,v,b);u.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),c.push(_)}return c}_getArrayFromAccessor(a){let s=a.array;if(a.normalized){const o=mh(s.constructor),u=new Float32Array(s.length);for(let f=0,c=s.length;f<c;f++)u[f]=s[f]*o;s=u}return s}_createCubicSplineTrackInterpolant(a){a.createInterpolant=function(o){const u=this instanceof mg?ux:_v;return new u(this.times,this.values,this.getValueSize()/3,o)},a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function bx(h,a,s){const o=a.attributes,u=new Dt;if(o.POSITION!==void 0){const d=s.json.accessors[o.POSITION],m=d.min,y=d.max;if(m!==void 0&&y!==void 0){if(u.set(new Q(m[0],m[1],m[2]),new Q(y[0],y[1],y[2])),d.normalized){const b=mh(Rs[d.componentType]);u.min.multiplyScalar(b),u.max.multiplyScalar(b)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const f=a.targets;if(f!==void 0){const d=new Q,m=new Q;for(let y=0,b=f.length;y<b;y++){const v=f[y];if(v.POSITION!==void 0){const p=s.json.accessors[v.POSITION],S=p.min,_=p.max;if(S!==void 0&&_!==void 0){if(m.setX(Math.max(Math.abs(S[0]),Math.abs(_[0]))),m.setY(Math.max(Math.abs(S[1]),Math.abs(_[1]))),m.setZ(Math.max(Math.abs(S[2]),Math.abs(_[2]))),p.normalized){const C=mh(Rs[p.componentType]);m.multiplyScalar(C)}d.max(m)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}u.expandByVector(d)}h.boundingBox=u;const c=new fT;u.getCenter(c.center),c.radius=u.min.distanceTo(u.max)/2,h.boundingSphere=c}function wg(h,a,s){const o=a.attributes,u=[];function f(c,d){return s.getDependency("accessor",c).then(function(m){h.setAttribute(d,m)})}for(const c in o){const d=dh[c]||c.toLowerCase();d in h.attributes||u.push(f(o[c],d))}if(a.indices!==void 0&&!h.index){const c=s.getDependency("accessor",a.indices).then(function(d){h.setIndex(d)});u.push(c)}return pg.workingColorSpace!==Jn&&"COLOR_0"in o&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${pg.workingColorSpace}" not supported.`),Cn(h,a),bx(h,a,s),Promise.all(u).then(function(){return a.targets!==void 0?dx(h,a.targets,s):h})}const Mg={type:"change"},Oh={type:"start"},Av={type:"end"},Sr=new dT,Rg=new Dh,Tx=Math.cos(70*Qr.DEG2RAD),Qe=new Q,Et=2*Math.PI,De={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Xf=1e-6;class xx extends hT{constructor(a,s=null){super(a,s),this.state=De.NONE,this.target=new Q,this.cursor=new Q,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ms.ROTATE,MIDDLE:Ms.DOLLY,RIGHT:Ms.PAN},this.touches={ONE:Es.ROTATE,TWO:Es.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new Q,this._lastQuaternion=new ql,this._lastTargetPosition=new Q,this._quat=new ql().setFromUnitVectors(a.up,new Q(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new uh,this._sphericalDelta=new uh,this._scale=1,this._panOffset=new Q,this._rotateStart=new Re,this._rotateEnd=new Re,this._rotateDelta=new Re,this._panStart=new Re,this._panEnd=new Re,this._panDelta=new Re,this._dollyStart=new Re,this._dollyEnd=new Re,this._dollyDelta=new Re,this._dollyDirection=new Q,this._mouse=new Re,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=_x.bind(this),this._onPointerDown=Sx.bind(this),this._onPointerUp=Ax.bind(this),this._onContextMenu=Nx.bind(this),this._onMouseWheel=Mx.bind(this),this._onKeyDown=Rx.bind(this),this._onTouchStart=Dx.bind(this),this._onTouchMove=Cx.bind(this),this._onMouseDown=Ex.bind(this),this._onMouseMove=wx.bind(this),this._interceptControlDown=Ox.bind(this),this._interceptControlUp=zx.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(a){super.connect(a),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(a){a.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=a}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Mg),this.update(),this.state=De.NONE}update(a=null){const s=this.object.position;Qe.copy(s).sub(this.target),Qe.applyQuaternion(this._quat),this._spherical.setFromVector3(Qe),this.autoRotate&&this.state===De.NONE&&this._rotateLeft(this._getAutoRotationAngle(a)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let o=this.minAzimuthAngle,u=this.maxAzimuthAngle;isFinite(o)&&isFinite(u)&&(o<-Math.PI?o+=Et:o>Math.PI&&(o-=Et),u<-Math.PI?u+=Et:u>Math.PI&&(u-=Et),o<=u?this._spherical.theta=Math.max(o,Math.min(u,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(o+u)/2?Math.max(o,this._spherical.theta):Math.min(u,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let f=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const c=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),f=c!=this._spherical.radius}if(Qe.setFromSpherical(this._spherical),Qe.applyQuaternion(this._quatInverse),s.copy(this.target).add(Qe),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let c=null;if(this.object.isPerspectiveCamera){const d=Qe.length();c=this._clampDistance(d*this._scale);const m=d-c;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),f=!!m}else if(this.object.isOrthographicCamera){const d=new Q(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),f=m!==this.object.zoom;const y=new Q(this._mouse.x,this._mouse.y,0);y.unproject(this.object),this.object.position.sub(y).add(d),this.object.updateMatrixWorld(),c=Qe.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;c!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(c).add(this.object.position):(Sr.origin.copy(this.object.position),Sr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Sr.direction))<Tx?this.object.lookAt(this.target):(Rg.setFromNormalAndCoplanarPoint(this.object.up,this.target),Sr.intersectPlane(Rg,this.target))))}else if(this.object.isOrthographicCamera){const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),c!==this.object.zoom&&(this.object.updateProjectionMatrix(),f=!0)}return this._scale=1,this._performCursorZoom=!1,f||this._lastPosition.distanceToSquared(this.object.position)>Xf||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Xf||this._lastTargetPosition.distanceToSquared(this.target)>Xf?(this.dispatchEvent(Mg),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(a){return a!==null?Et/60*this.autoRotateSpeed*a:Et/60/60*this.autoRotateSpeed}_getZoomScale(a){const s=Math.abs(a*.01);return Math.pow(.95,this.zoomSpeed*s)}_rotateLeft(a){this._sphericalDelta.theta-=a}_rotateUp(a){this._sphericalDelta.phi-=a}_panLeft(a,s){Qe.setFromMatrixColumn(s,0),Qe.multiplyScalar(-a),this._panOffset.add(Qe)}_panUp(a,s){this.screenSpacePanning===!0?Qe.setFromMatrixColumn(s,1):(Qe.setFromMatrixColumn(s,0),Qe.crossVectors(this.object.up,Qe)),Qe.multiplyScalar(a),this._panOffset.add(Qe)}_pan(a,s){const o=this.domElement;if(this.object.isPerspectiveCamera){const u=this.object.position;Qe.copy(u).sub(this.target);let f=Qe.length();f*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*a*f/o.clientHeight,this.object.matrix),this._panUp(2*s*f/o.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(a*(this.object.right-this.object.left)/this.object.zoom/o.clientWidth,this.object.matrix),this._panUp(s*(this.object.top-this.object.bottom)/this.object.zoom/o.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(a){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=a:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(a){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=a:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(a,s){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const o=this.domElement.getBoundingClientRect(),u=a-o.left,f=s-o.top,c=o.width,d=o.height;this._mouse.x=u/c*2-1,this._mouse.y=-(f/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(a){return Math.max(this.minDistance,Math.min(this.maxDistance,a))}_handleMouseDownRotate(a){this._rotateStart.set(a.clientX,a.clientY)}_handleMouseDownDolly(a){this._updateZoomParameters(a.clientX,a.clientX),this._dollyStart.set(a.clientX,a.clientY)}_handleMouseDownPan(a){this._panStart.set(a.clientX,a.clientY)}_handleMouseMoveRotate(a){this._rotateEnd.set(a.clientX,a.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const s=this.domElement;this._rotateLeft(Et*this._rotateDelta.x/s.clientHeight),this._rotateUp(Et*this._rotateDelta.y/s.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(a){this._dollyEnd.set(a.clientX,a.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(a){this._panEnd.set(a.clientX,a.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(a){this._updateZoomParameters(a.clientX,a.clientY),a.deltaY<0?this._dollyIn(this._getZoomScale(a.deltaY)):a.deltaY>0&&this._dollyOut(this._getZoomScale(a.deltaY)),this.update()}_handleKeyDown(a){let s=!1;switch(a.code){case this.keys.UP:a.ctrlKey||a.metaKey||a.shiftKey?this.enableRotate&&this._rotateUp(Et*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),s=!0;break;case this.keys.BOTTOM:a.ctrlKey||a.metaKey||a.shiftKey?this.enableRotate&&this._rotateUp(-Et*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),s=!0;break;case this.keys.LEFT:a.ctrlKey||a.metaKey||a.shiftKey?this.enableRotate&&this._rotateLeft(Et*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),s=!0;break;case this.keys.RIGHT:a.ctrlKey||a.metaKey||a.shiftKey?this.enableRotate&&this._rotateLeft(-Et*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),s=!0;break}s&&(a.preventDefault(),this.update())}_handleTouchStartRotate(a){if(this._pointers.length===1)this._rotateStart.set(a.pageX,a.pageY);else{const s=this._getSecondPointerPosition(a),o=.5*(a.pageX+s.x),u=.5*(a.pageY+s.y);this._rotateStart.set(o,u)}}_handleTouchStartPan(a){if(this._pointers.length===1)this._panStart.set(a.pageX,a.pageY);else{const s=this._getSecondPointerPosition(a),o=.5*(a.pageX+s.x),u=.5*(a.pageY+s.y);this._panStart.set(o,u)}}_handleTouchStartDolly(a){const s=this._getSecondPointerPosition(a),o=a.pageX-s.x,u=a.pageY-s.y,f=Math.sqrt(o*o+u*u);this._dollyStart.set(0,f)}_handleTouchStartDollyPan(a){this.enableZoom&&this._handleTouchStartDolly(a),this.enablePan&&this._handleTouchStartPan(a)}_handleTouchStartDollyRotate(a){this.enableZoom&&this._handleTouchStartDolly(a),this.enableRotate&&this._handleTouchStartRotate(a)}_handleTouchMoveRotate(a){if(this._pointers.length==1)this._rotateEnd.set(a.pageX,a.pageY);else{const o=this._getSecondPointerPosition(a),u=.5*(a.pageX+o.x),f=.5*(a.pageY+o.y);this._rotateEnd.set(u,f)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const s=this.domElement;this._rotateLeft(Et*this._rotateDelta.x/s.clientHeight),this._rotateUp(Et*this._rotateDelta.y/s.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(a){if(this._pointers.length===1)this._panEnd.set(a.pageX,a.pageY);else{const s=this._getSecondPointerPosition(a),o=.5*(a.pageX+s.x),u=.5*(a.pageY+s.y);this._panEnd.set(o,u)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(a){const s=this._getSecondPointerPosition(a),o=a.pageX-s.x,u=a.pageY-s.y,f=Math.sqrt(o*o+u*u);this._dollyEnd.set(0,f),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const c=(a.pageX+s.x)*.5,d=(a.pageY+s.y)*.5;this._updateZoomParameters(c,d)}_handleTouchMoveDollyPan(a){this.enableZoom&&this._handleTouchMoveDolly(a),this.enablePan&&this._handleTouchMovePan(a)}_handleTouchMoveDollyRotate(a){this.enableZoom&&this._handleTouchMoveDolly(a),this.enableRotate&&this._handleTouchMoveRotate(a)}_addPointer(a){this._pointers.push(a.pointerId)}_removePointer(a){delete this._pointerPositions[a.pointerId];for(let s=0;s<this._pointers.length;s++)if(this._pointers[s]==a.pointerId){this._pointers.splice(s,1);return}}_isTrackingPointer(a){for(let s=0;s<this._pointers.length;s++)if(this._pointers[s]==a.pointerId)return!0;return!1}_trackPointer(a){let s=this._pointerPositions[a.pointerId];s===void 0&&(s=new Re,this._pointerPositions[a.pointerId]=s),s.set(a.pageX,a.pageY)}_getSecondPointerPosition(a){const s=a.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[s]}_customWheelEvent(a){const s=a.deltaMode,o={clientX:a.clientX,clientY:a.clientY,deltaY:a.deltaY};switch(s){case 1:o.deltaY*=16;break;case 2:o.deltaY*=100;break}return a.ctrlKey&&!this._controlActive&&(o.deltaY*=10),o}}function Sx(h){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(h.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(h)&&(this._addPointer(h),h.pointerType==="touch"?this._onTouchStart(h):this._onMouseDown(h)))}function _x(h){this.enabled!==!1&&(h.pointerType==="touch"?this._onTouchMove(h):this._onMouseMove(h))}function Ax(h){switch(this._removePointer(h),this._pointers.length){case 0:this.domElement.releasePointerCapture(h.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Av),this.state=De.NONE;break;case 1:const a=this._pointers[0],s=this._pointerPositions[a];this._onTouchStart({pointerId:a,pageX:s.x,pageY:s.y});break}}function Ex(h){let a;switch(h.button){case 0:a=this.mouseButtons.LEFT;break;case 1:a=this.mouseButtons.MIDDLE;break;case 2:a=this.mouseButtons.RIGHT;break;default:a=-1}switch(a){case Ms.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(h),this.state=De.DOLLY;break;case Ms.ROTATE:if(h.ctrlKey||h.metaKey||h.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(h),this.state=De.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(h),this.state=De.ROTATE}break;case Ms.PAN:if(h.ctrlKey||h.metaKey||h.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(h),this.state=De.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(h),this.state=De.PAN}break;default:this.state=De.NONE}this.state!==De.NONE&&this.dispatchEvent(Oh)}function wx(h){switch(this.state){case De.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(h);break;case De.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(h);break;case De.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(h);break}}function Mx(h){this.enabled===!1||this.enableZoom===!1||this.state!==De.NONE||(h.preventDefault(),this.dispatchEvent(Oh),this._handleMouseWheel(this._customWheelEvent(h)),this.dispatchEvent(Av))}function Rx(h){this.enabled!==!1&&this._handleKeyDown(h)}function Dx(h){switch(this._trackPointer(h),this._pointers.length){case 1:switch(this.touches.ONE){case Es.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(h),this.state=De.TOUCH_ROTATE;break;case Es.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(h),this.state=De.TOUCH_PAN;break;default:this.state=De.NONE}break;case 2:switch(this.touches.TWO){case Es.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(h),this.state=De.TOUCH_DOLLY_PAN;break;case Es.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(h),this.state=De.TOUCH_DOLLY_ROTATE;break;default:this.state=De.NONE}break;default:this.state=De.NONE}this.state!==De.NONE&&this.dispatchEvent(Oh)}function Cx(h){switch(this._trackPointer(h),this.state){case De.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(h),this.update();break;case De.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(h),this.update();break;case De.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(h),this.update();break;case De.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(h),this.update();break;default:this.state=De.NONE}}function Nx(h){this.enabled!==!1&&h.preventDefault()}function Ox(h){h.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function zx(h){h.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class Ux extends Ch{constructor(){super();const a=new mT;a.deleteAttribute("uv");const s=new Yr({side:Nh}),o=new Yr,u=new wh(16777215,900,28,2);u.position.set(.418,16.199,.3),this.add(u);const f=new Nn(a,s);f.position.set(-.757,13.219,.717),f.scale.set(31.713,28.305,28.591),this.add(f);const c=new dv(a,o,6),d=new Mh;d.position.set(-10.906,2.009,1.846),d.rotation.set(0,-.195,0),d.scale.set(2.328,7.905,4.651),d.updateMatrix(),c.setMatrixAt(0,d.matrix),d.position.set(-5.607,-.754,-.758),d.rotation.set(0,.994,0),d.scale.set(1.97,1.534,3.955),d.updateMatrix(),c.setMatrixAt(1,d.matrix),d.position.set(6.167,.857,7.803),d.rotation.set(0,.561,0),d.scale.set(3.927,6.285,3.687),d.updateMatrix(),c.setMatrixAt(2,d.matrix),d.position.set(-2.017,.018,6.124),d.rotation.set(0,.333,0),d.scale.set(2.002,4.566,2.064),d.updateMatrix(),c.setMatrixAt(3,d.matrix),d.position.set(2.291,-.756,-2.621),d.rotation.set(0,-.286,0),d.scale.set(1.546,1.552,1.496),d.updateMatrix(),c.setMatrixAt(4,d.matrix),d.position.set(-2.193,-.369,-5.547),d.rotation.set(0,.516,0),d.scale.set(3.875,3.487,2.986),d.updateMatrix(),c.setMatrixAt(5,d.matrix),this.add(c);const m=new Nn(a,fs(50));m.position.set(-16.116,14.37,8.208),m.scale.set(.1,2.428,2.739),this.add(m);const y=new Nn(a,fs(50));y.position.set(-16.109,18.021,-8.207),y.scale.set(.1,2.425,2.751),this.add(y);const b=new Nn(a,fs(17));b.position.set(14.904,12.198,-1.832),b.scale.set(.15,4.265,6.331),this.add(b);const v=new Nn(a,fs(43));v.position.set(-.462,8.89,14.52),v.scale.set(4.38,5.441,.088),this.add(v);const p=new Nn(a,fs(20));p.position.set(3.235,11.486,-12.541),p.scale.set(2.5,2,.1),this.add(p);const S=new Nn(a,fs(100));S.position.set(0,20,0),S.scale.set(1,.1,1),this.add(S)}dispose(){const a=new Set;this.traverse(s=>{s.isMesh&&(a.add(s.geometry),a.add(s.material))});for(const s of a)s.dispose()}}function fs(h){return new pT({color:0,emissive:16777215,emissiveIntensity:h})}const Bx=/^(FLOOR_|CEILING_)|(?:FloorLight|MuseumTitle|English|Rigging|Title|Year|FrontText|CoffeeText)/i,Dg=h=>h.code&&h.code!=="Unidentified"?h.code:{w:"KeyW",a:"KeyA",s:"KeyS",d:"KeyD"}[h.key?.toLowerCase()]||h.key,Lx=new Set(["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"]);class Hx{constructor(a,s,o,u,f){this.camera=a,this.canvas=s,this.config=u,this.onState=f,this.keys=new Set,this.joystick={x:0,y:0},this.floorY=u.floorY??0,this.eyeHeight=1.65,this.radius=.26,this.speed=u.walkSpeed||1.8,this.colliders=[],this.furnitureVolumes=[],o.updateMatrixWorld(!0),o.traverse(c=>{if(!c.isMesh||Bx.test(c.name))return;const d=new Dt().setFromObject(c);if(d.max.y<this.floorY+.18||d.min.y>this.floorY+1.9)return;const m=d.getSize(new Q);m.y<.4&&m.x>.55&&m.z>.55&&this.furnitureVolumes.push({bounds:d,object:c}),!(m.y<.08)&&(c.userData.walkBounds=d,this.colliders.push(c))}),this.ray=new gT,this.ray.near=0,this.ray.far=1,this.rayDir=new Q,this.rayOrigin=new Q,this.euler=new vT(0,0,0,"YXZ"),this.blockedSteps=0,this.onKeyDown=c=>{if(!this.active)return;const d=Dg(c);if(this.lastKey={key:c.key,code:c.code,resolved:d},d==="Escape"){this.disable();return}if(/^Digit[1-9]$/.test(d)){c.preventDefault(),this.onState({jumpRoom:Number(d.slice(-1))-1});return}Lx.has(d)&&(c.preventDefault(),this.keys.add(d),c.repeat||this.update(1/60))},this.onKeyUp=c=>{this.keys.delete(Dg(c))},this.onBlur=()=>{this.keys.clear(),this.joystick={x:0,y:0}},this.onMouse=c=>{this.active&&document.pointerLockElement===s&&this.look(c.movementX*.0022,c.movementY*.0022)},this.onLock=()=>{const c=document.pointerLockElement===s;this.onState({locked:c}),this.hadLock&&!c&&this.active&&this.disable(),this.hadLock=c},this.onPointerDown=c=>{!this.active||document.pointerLockElement===s||this.mobile&&c.clientX<s.getBoundingClientRect().left+s.clientWidth*.38||(this.lookPointer={id:c.pointerId,x:c.clientX,y:c.clientY},s.setPointerCapture(c.pointerId))},this.onPointerMove=c=>{!this.active||!this.lookPointer||c.pointerId!==this.lookPointer.id||(this.look((c.clientX-this.lookPointer.x)*.0045,(c.clientY-this.lookPointer.y)*.0045),this.lookPointer.x=c.clientX,this.lookPointer.y=c.clientY)},this.onPointerUp=c=>{this.lookPointer?.id===c.pointerId&&(this.lookPointer=null)},this.onCanvasClick=()=>{this.active&&!this.mobile&&document.pointerLockElement!==s&&this.requestLock()},window.addEventListener("keydown",this.onKeyDown),window.addEventListener("keyup",this.onKeyUp),window.addEventListener("blur",this.onBlur),document.addEventListener("mousemove",this.onMouse),document.addEventListener("pointerlockchange",this.onLock),s.addEventListener("pointerdown",this.onPointerDown),s.addEventListener("pointermove",this.onPointerMove),s.addEventListener("pointerup",this.onPointerUp),s.addEventListener("pointercancel",this.onPointerUp),s.addEventListener("click",this.onCanvasClick)}enable(a){this.active=!0,this.mobile=window.matchMedia("(pointer: coarse)").matches||innerWidth<=700,this.setView(a),this.onState({firstPerson:!0,locked:!1}),this.mobile||this.requestLock()}requestLock(){try{this.canvas.requestPointerLock()?.catch?.(()=>this.onState({locked:!1}))}catch{this.onState({locked:!1})}}setView(a){if(!a?.position||!a?.target)return;this.camera.position.set(a.position[0],this.floorY+this.eyeHeight,a.position[2]);const s=new Q(...a.target).sub(this.camera.position).normalize();this.yaw=Math.atan2(-s.x,-s.z),this.pitch=Math.asin(s.y),this.camera.fov=a.fov||60,this.camera.updateProjectionMatrix(),this.look(0,0),this.keys.clear(),this.joystick={x:0,y:0}}look(a,s){this.yaw-=a,this.pitch=Qr.clamp(this.pitch-s,-1.32,1.32),this.euler.set(this.pitch,this.yaw,0),this.camera.quaternion.setFromEuler(this.euler)}visible(a){let s=a,o=!1,u=!1;for(;s;)s.name.startsWith("WALL_")&&(u=!0),s.visible||(o=!0),s=s.parent;return!o||u}inside(a,s){const o=this.config.walkablePolygon;if(!o?.length)return a>=this.config.defaultBounds.min[0]+this.radius&&a<=this.config.defaultBounds.max[0]-this.radius&&s>=this.config.defaultBounds.min[2]+this.radius&&s<=this.config.defaultBounds.max[2]-this.radius;let u=!1;for(let f=0,c=o.length-1;f<o.length;c=f++){const[d,m]=o[f],[y,b]=o[c];m>s!=b>s&&a<(y-d)*(s-m)/(b-m)+d&&(u=!u)}return u}canMove(a,s){for(let d=0;d<8;d++){const m=d*Math.PI/4;if(!this.inside(s.x+Math.cos(m)*this.radius,s.z+Math.sin(m)*this.radius))return!1}for(const d of this.furnitureVolumes){if(!this.visible(d.object))continue;const m=d.bounds;if(s.x>m.min.x-this.radius&&s.x<m.max.x+this.radius&&s.z>m.min.z-this.radius&&s.z<m.max.z+this.radius)return!1}const o=s.x-a.x,u=s.z-a.z,f=Math.hypot(o,u);if(f<1e-5)return!0;this.rayDir.set(o/f,0,u/f),this.ray.far=f+this.radius;const c=this.colliders.filter(d=>{if(!this.visible(d))return!1;const m=d.userData.walkBounds,y=this.radius+f+.05;return a.x>=m.min.x-y&&a.x<=m.max.x+y&&a.z>=m.min.z-y&&a.z<=m.max.z+y});for(const d of[.25,.85,1.5])for(const m of[-this.radius*.8,0,this.radius*.8])if(this.rayOrigin.set(a.x-this.rayDir.z*m,this.floorY+d,a.z+this.rayDir.x*m),this.ray.set(this.rayOrigin,this.rayDir),this.ray.intersectObjects(c,!1).length)return!1;return!0}update(a){if(!this.active)return;let s=Number(this.keys.has("KeyD")||this.keys.has("ArrowRight"))-Number(this.keys.has("KeyA")||this.keys.has("ArrowLeft"))+this.joystick.x,o=Number(this.keys.has("KeyW")||this.keys.has("ArrowUp"))-Number(this.keys.has("KeyS")||this.keys.has("ArrowDown"))-this.joystick.y;const u=Math.hypot(s,o);u>1&&(s/=u,o/=u);const f=Math.min(a,.04)*this.speed,c=(Math.cos(this.yaw)*s-Math.sin(this.yaw)*o)*f,d=(-Math.sin(this.yaw)*s-Math.cos(this.yaw)*o)*f,m=this.camera.position,y=m.clone().add(new Q(c,0,d));if(this.canMove(m,y))m.copy(y);else{this.blockedSteps+=1;const b=m.clone().add(new Q(c,0,0));Math.abs(c)>1e-5&&this.canMove(m,b)&&m.copy(b);const v=m.clone().add(new Q(0,0,d));Math.abs(d)>1e-5&&this.canMove(m,v)&&m.copy(v)}this.camera.position.y=this.floorY+this.eyeHeight}disable(){this.active&&(this.active=!1,this.keys.clear(),this.joystick={x:0,y:0},this.lookPointer=null,this.onState({firstPerson:!1,locked:!1}),document.pointerLockElement===this.canvas&&document.exitPointerLock())}dispose(){this.disable(),window.removeEventListener("keydown",this.onKeyDown),window.removeEventListener("keyup",this.onKeyUp),window.removeEventListener("blur",this.onBlur),document.removeEventListener("mousemove",this.onMouse),document.removeEventListener("pointerlockchange",this.onLock),this.canvas.removeEventListener("pointerdown",this.onPointerDown),this.canvas.removeEventListener("pointermove",this.onPointerMove),this.canvas.removeEventListener("pointerup",this.onPointerUp),this.canvas.removeEventListener("pointercancel",this.onPointerUp),this.canvas.removeEventListener("click",this.onCanvasClick)}}const Ev=0,Ix=1,wv=2,Cg=2,kf=1.25,Ng=1,Bi=32,Jr=65535,Fx=Math.pow(2,-24),Kf=Symbol("SKIP_GENERATION");function Mv(h){return h.index?h.index.count:h.attributes.position.count}function Ii(h){return Mv(h)/3}function Rv(h,a=ArrayBuffer){return h>65535?new Uint32Array(new a(4*h)):new Uint16Array(new a(2*h))}function Gx(h,a){if(!h.index){const s=h.attributes.position.count,o=a.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,u=Rv(s,o);h.setIndex(new vt(u,1));for(let f=0;f<s;f++)u[f]=f}}function Dv(h,a){const s=Ii(h),o=a||h.drawRange,u=o.start/3,f=(o.start+o.count)/3,c=Math.max(0,u),d=Math.min(s,f)-c;return[{offset:Math.floor(c),count:Math.floor(d)}]}function Cv(h,a){if(!h.groups||!h.groups.length)return Dv(h,a);const s=[],o=new Set,u=a||h.drawRange,f=u.start/3,c=(u.start+u.count)/3;for(const m of h.groups){const y=m.start/3,b=(m.start+m.count)/3;o.add(Math.max(f,y)),o.add(Math.min(c,b))}const d=Array.from(o.values()).sort((m,y)=>m-y);for(let m=0;m<d.length-1;m++){const y=d[m],b=d[m+1];s.push({offset:Math.floor(y),count:Math.floor(b-y)})}return s}function Vx(h,a){const s=Ii(h),o=Cv(h,a).sort((c,d)=>c.offset-d.offset),u=o[o.length-1];u.count=Math.min(s-u.offset,u.count);let f=0;return o.forEach(({count:c})=>f+=c),s!==f}function Zf(h,a,s,o,u){let f=1/0,c=1/0,d=1/0,m=-1/0,y=-1/0,b=-1/0,v=1/0,p=1/0,S=1/0,_=-1/0,C=-1/0,x=-1/0;for(let w=a*6,M=(a+s)*6;w<M;w+=6){const A=h[w+0],R=h[w+1],D=A-R,H=A+R;D<f&&(f=D),H>m&&(m=H),A<v&&(v=A),A>_&&(_=A);const O=h[w+2],j=h[w+3],V=O-j,Y=O+j;V<c&&(c=V),Y>y&&(y=Y),O<p&&(p=O),O>C&&(C=O);const Z=h[w+4],G=h[w+5],K=Z-G,J=Z+G;K<d&&(d=K),J>b&&(b=J),Z<S&&(S=Z),Z>x&&(x=Z)}o[0]=f,o[1]=c,o[2]=d,o[3]=m,o[4]=y,o[5]=b,u[0]=v,u[1]=p,u[2]=S,u[3]=_,u[4]=C,u[5]=x}function qx(h,a=null,s=null,o=null){const u=h.attributes.position,f=h.index?h.index.array:null,c=Ii(h),d=u.normalized;let m;a===null?m=new Float32Array(c*6):m=a,s=s||0,o=o||c;const y=u.array,b=u.offset||0;let v=3;u.isInterleavedBufferAttribute&&(v=u.data.stride);const p=["getX","getY","getZ"];for(let S=s;S<s+o;S++){const _=S*3,C=S*6;let x=_+0,w=_+1,M=_+2;f&&(x=f[x],w=f[w],M=f[M]),d||(x=x*v+b,w=w*v+b,M=M*v+b);for(let A=0;A<3;A++){let R,D,H;d?(R=u[p[A]](x),D=u[p[A]](w),H=u[p[A]](M)):(R=y[x+A],D=y[w+A],H=y[M+A]);let O=R;D<O&&(O=D),H<O&&(O=H);let j=R;D>j&&(j=D),H>j&&(j=H);const V=(j-O)/2,Y=A*2;m[C+Y+0]=O+V,m[C+Y+1]=V+(Math.abs(O)+V)*Fx}}return m}function Ge(h,a,s){return s.min.x=a[h],s.min.y=a[h+1],s.min.z=a[h+2],s.max.x=a[h+3],s.max.y=a[h+4],s.max.z=a[h+5],s}function Og(h){let a=-1,s=-1/0;for(let o=0;o<3;o++){const u=h[o+3]-h[o];u>s&&(s=u,a=o)}return a}function zg(h,a){a.set(h)}function Ug(h,a,s){let o,u;for(let f=0;f<3;f++){const c=f+3;o=h[f],u=a[f],s[f]=o<u?o:u,o=h[c],u=a[c],s[c]=o>u?o:u}}function _r(h,a,s){for(let o=0;o<3;o++){const u=a[h+2*o],f=a[h+2*o+1],c=u-f,d=u+f;c<s[o]&&(s[o]=c),d>s[o+3]&&(s[o+3]=d)}}function Dl(h){const a=h[3]-h[0],s=h[4]-h[1],o=h[5]-h[2];return 2*(a*s+s*o+o*a)}const Zn=32,Px=(h,a)=>h.candidate-a.candidate,Oi=new Array(Zn).fill().map(()=>({count:0,bounds:new Float32Array(6),rightCacheBounds:new Float32Array(6),leftCacheBounds:new Float32Array(6),candidate:0})),Ar=new Float32Array(6);function jx(h,a,s,o,u,f){let c=-1,d=0;if(f===Ev)c=Og(a),c!==-1&&(d=(a[c]+a[c+3])/2);else if(f===Ix)c=Og(h),c!==-1&&(d=Yx(s,o,u,c));else if(f===wv){const m=Dl(h);let y=kf*u;const b=o*6,v=(o+u)*6;for(let p=0;p<3;p++){const S=a[p],x=(a[p+3]-S)/Zn;if(u<Zn/4){const w=[...Oi];w.length=u;let M=0;for(let R=b;R<v;R+=6,M++){const D=w[M];D.candidate=s[R+2*p],D.count=0;const{bounds:H,leftCacheBounds:O,rightCacheBounds:j}=D;for(let V=0;V<3;V++)j[V]=1/0,j[V+3]=-1/0,O[V]=1/0,O[V+3]=-1/0,H[V]=1/0,H[V+3]=-1/0;_r(R,s,H)}w.sort(Px);let A=u;for(let R=0;R<A;R++){const D=w[R];for(;R+1<A&&w[R+1].candidate===D.candidate;)w.splice(R+1,1),A--}for(let R=b;R<v;R+=6){const D=s[R+2*p];for(let H=0;H<A;H++){const O=w[H];D>=O.candidate?_r(R,s,O.rightCacheBounds):(_r(R,s,O.leftCacheBounds),O.count++)}}for(let R=0;R<A;R++){const D=w[R],H=D.count,O=u-D.count,j=D.leftCacheBounds,V=D.rightCacheBounds;let Y=0;H!==0&&(Y=Dl(j)/m);let Z=0;O!==0&&(Z=Dl(V)/m);const G=Ng+kf*(Y*H+Z*O);G<y&&(c=p,y=G,d=D.candidate)}}else{for(let A=0;A<Zn;A++){const R=Oi[A];R.count=0,R.candidate=S+x+A*x;const D=R.bounds;for(let H=0;H<3;H++)D[H]=1/0,D[H+3]=-1/0}for(let A=b;A<v;A+=6){let H=~~((s[A+2*p]-S)/x);H>=Zn&&(H=Zn-1);const O=Oi[H];O.count++,_r(A,s,O.bounds)}const w=Oi[Zn-1];zg(w.bounds,w.rightCacheBounds);for(let A=Zn-2;A>=0;A--){const R=Oi[A],D=Oi[A+1];Ug(R.bounds,D.rightCacheBounds,R.rightCacheBounds)}let M=0;for(let A=0;A<Zn-1;A++){const R=Oi[A],D=R.count,H=R.bounds,j=Oi[A+1].rightCacheBounds;D!==0&&(M===0?zg(H,Ar):Ug(H,Ar,Ar)),M+=D;let V=0,Y=0;M!==0&&(V=Dl(Ar)/m);const Z=u-M;Z!==0&&(Y=Dl(j)/m);const G=Ng+kf*(V*M+Y*Z);G<y&&(c=p,y=G,d=R.candidate)}}}}else console.warn(`MeshBVH: Invalid build strategy value ${f} used.`);return{axis:c,pos:d}}function Yx(h,a,s,o){let u=0;for(let f=a,c=a+s;f<c;f++)u+=h[f*6+o*2];return u/s}class Qf{constructor(){this.boundingData=new Float32Array(6)}}function Xx(h,a,s,o,u,f){let c=o,d=o+u-1;const m=f.pos,y=f.axis*2;for(;;){for(;c<=d&&s[c*6+y]<m;)c++;for(;c<=d&&s[d*6+y]>=m;)d--;if(c<d){for(let b=0;b<3;b++){let v=a[c*3+b];a[c*3+b]=a[d*3+b],a[d*3+b]=v}for(let b=0;b<6;b++){let v=s[c*6+b];s[c*6+b]=s[d*6+b],s[d*6+b]=v}c++,d--}else return c}}function kx(h,a,s,o,u,f){let c=o,d=o+u-1;const m=f.pos,y=f.axis*2;for(;;){for(;c<=d&&s[c*6+y]<m;)c++;for(;c<=d&&s[d*6+y]>=m;)d--;if(c<d){let b=h[c];h[c]=h[d],h[d]=b;for(let v=0;v<6;v++){let p=s[c*6+v];s[c*6+v]=s[d*6+v],s[d*6+v]=p}c++,d--}else return c}}function gt(h,a){return a[h+15]===65535}function Rt(h,a){return a[h+6]}function qt(h,a){return a[h+14]}function an(h){return h+8}function Pt(h,a){return a[h+6]}function zh(h,a){return a[h+7]}let Nv,Ll,jr,Ov;const Kx=Math.pow(2,32);function ph(h){return"count"in h?1:1+ph(h.left)+ph(h.right)}function Zx(h,a,s){return Nv=new Float32Array(s),Ll=new Uint32Array(s),jr=new Uint16Array(s),Ov=new Uint8Array(s),gh(h,a)}function gh(h,a){const s=h/4,o=h/2,u="count"in a,f=a.boundingData;for(let c=0;c<6;c++)Nv[s+c]=f[c];if(u)if(a.buffer){const c=a.buffer;Ov.set(new Uint8Array(c),h);for(let d=h,m=h+c.byteLength;d<m;d+=Bi){const y=d/2;gt(y,jr)||(Ll[d/4+6]+=s)}return h+c.byteLength}else{const c=a.offset,d=a.count;return Ll[s+6]=c,jr[o+14]=d,jr[o+15]=Jr,h+Bi}else{const c=a.left,d=a.right,m=a.splitAxis;let y;if(y=gh(h+Bi,c),y/4>Kx)throw new Error("MeshBVH: Cannot store child pointer greater than 32 bits.");return Ll[s+6]=y/4,y=gh(y,d),Ll[s+7]=m,y}}function Qx(h,a){const s=(h.index?h.index.count:h.attributes.position.count)/3,o=s>2**16,u=o?4:2,f=a?new SharedArrayBuffer(s*u):new ArrayBuffer(s*u),c=o?new Uint32Array(f):new Uint16Array(f);for(let d=0,m=c.length;d<m;d++)c[d]=d;return c}function Wx(h,a,s,o,u){const{maxDepth:f,verbose:c,maxLeafTris:d,strategy:m,onProgress:y,indirect:b}=u,v=h._indirectBuffer,p=h.geometry,S=p.index?p.index.array:null,_=b?kx:Xx,C=Ii(p),x=new Float32Array(6);let w=!1;const M=new Qf;return Zf(a,s,o,M.boundingData,x),R(M,s,o,x),M;function A(D){y&&y(D/C)}function R(D,H,O,j=null,V=0){if(!w&&V>=f&&(w=!0,c&&(console.warn(`MeshBVH: Max depth of ${f} reached when generating BVH. Consider increasing maxDepth.`),console.warn(p))),O<=d||V>=f)return A(H+O),D.offset=H,D.count=O,D;const Y=jx(D.boundingData,j,a,H,O,m);if(Y.axis===-1)return A(H+O),D.offset=H,D.count=O,D;const Z=_(v,S,a,H,O,Y);if(Z===H||Z===H+O)A(H+O),D.offset=H,D.count=O;else{D.splitAxis=Y.axis;const G=new Qf,K=H,J=Z-H;D.left=G,Zf(a,K,J,G.boundingData,x),R(G,K,J,x,V+1);const ee=new Qf,X=Z,ne=O-J;D.right=ee,Zf(a,X,ne,ee.boundingData,x),R(ee,X,ne,x,V+1)}return D}}function Jx(h,a){const s=h.geometry;a.indirect&&(h._indirectBuffer=Qx(s,a.useSharedArrayBuffer),Vx(s,a.range)&&!a.verbose&&console.warn('MeshBVH: Provided geometry contains groups or a range that do not fully span the vertex contents while using the "indirect" option. BVH may incorrectly report intersections on unrendered portions of the geometry.')),h._indirectBuffer||Gx(s,a);const o=a.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,u=Dv(s,a.range),f=qx(s,null,u[0].offset,u[0].count),c=a.indirect?u:Cv(s,a.range);h._roots=c.map(d=>{const m=Wx(h,f,d.offset,d.count,a),y=ph(m),b=new o(Bi*y);return Zx(0,m,b),b})}class ti{constructor(){this.min=1/0,this.max=-1/0}setFromPointsField(a,s){let o=1/0,u=-1/0;for(let f=0,c=a.length;f<c;f++){const m=a[f][s];o=m<o?m:o,u=m>u?m:u}this.min=o,this.max=u}setFromPoints(a,s){let o=1/0,u=-1/0;for(let f=0,c=s.length;f<c;f++){const d=s[f],m=a.dot(d);o=m<o?m:o,u=m>u?m:u}this.min=o,this.max=u}isSeparated(a){return this.min>a.max||a.min>this.max}}ti.prototype.setFromBox=(function(){const h=new Q;return function(s,o){const u=o.min,f=o.max;let c=1/0,d=-1/0;for(let m=0;m<=1;m++)for(let y=0;y<=1;y++)for(let b=0;b<=1;b++){h.x=u.x*m+f.x*(1-m),h.y=u.y*y+f.y*(1-y),h.z=u.z*b+f.z*(1-b);const v=s.dot(h);c=Math.min(v,c),d=Math.max(v,d)}this.min=c,this.max=d}})();const $x=(function(){const h=new Q,a=new Q,s=new Q;return function(u,f,c){const d=u.start,m=h,y=f.start,b=a;s.subVectors(d,y),h.subVectors(u.end,u.start),a.subVectors(f.end,f.start);const v=s.dot(b),p=b.dot(m),S=b.dot(b),_=s.dot(m),x=m.dot(m)*S-p*p;let w,M;x!==0?w=(v*p-_*S)/x:w=0,M=(v+w*p)/S,c.x=w,c.y=M}})(),Uh=(function(){const h=new Re,a=new Q,s=new Q;return function(u,f,c,d){$x(u,f,h);let m=h.x,y=h.y;if(m>=0&&m<=1&&y>=0&&y<=1){u.at(m,c),f.at(y,d);return}else if(m>=0&&m<=1){y<0?f.at(0,d):f.at(1,d),u.closestPointToPoint(d,!0,c);return}else if(y>=0&&y<=1){m<0?u.at(0,c):u.at(1,c),f.closestPointToPoint(c,!0,d);return}else{let b;m<0?b=u.start:b=u.end;let v;y<0?v=f.start:v=f.end;const p=a,S=s;if(u.closestPointToPoint(v,!0,a),f.closestPointToPoint(b,!0,s),p.distanceToSquared(v)<=S.distanceToSquared(b)){c.copy(p),d.copy(v);return}else{c.copy(b),d.copy(S);return}}}})(),eS=(function(){const h=new Q,a=new Q,s=new Dh,o=new ei;return function(f,c){const{radius:d,center:m}=f,{a:y,b,c:v}=c;if(o.start=y,o.end=b,o.closestPointToPoint(m,!0,h).distanceTo(m)<=d||(o.start=y,o.end=v,o.closestPointToPoint(m,!0,h).distanceTo(m)<=d)||(o.start=b,o.end=v,o.closestPointToPoint(m,!0,h).distanceTo(m)<=d))return!0;const C=c.getPlane(s);if(Math.abs(C.distanceToPoint(m))<=d){const w=C.projectPoint(m,a);if(c.containsPoint(w))return!0}return!1}})(),tS=["x","y","z"],Qn=1e-15,Bg=Qn*Qn;function tn(h){return Math.abs(h)<Qn}class gn extends Ss{constructor(...a){super(...a),this.isExtendedTriangle=!0,this.satAxes=new Array(4).fill().map(()=>new Q),this.satBounds=new Array(4).fill().map(()=>new ti),this.points=[this.a,this.b,this.c],this.plane=new Dh,this.isDegenerateIntoSegment=!1,this.isDegenerateIntoPoint=!1,this.degenerateSegment=new ei,this.needsUpdate=!0}intersectsSphere(a){return eS(a,this)}update(){const a=this.a,s=this.b,o=this.c,u=this.points,f=this.satAxes,c=this.satBounds,d=f[0],m=c[0];this.getNormal(d),m.setFromPoints(d,u);const y=f[1],b=c[1];y.subVectors(a,s),b.setFromPoints(y,u);const v=f[2],p=c[2];v.subVectors(s,o),p.setFromPoints(v,u);const S=f[3],_=c[3];S.subVectors(o,a),_.setFromPoints(S,u);const C=y.length(),x=v.length(),w=S.length();this.isDegenerateIntoPoint=!1,this.isDegenerateIntoSegment=!1,C<Qn?x<Qn||w<Qn?this.isDegenerateIntoPoint=!0:(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(a),this.degenerateSegment.end.copy(o)):x<Qn?w<Qn?this.isDegenerateIntoPoint=!0:(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(s),this.degenerateSegment.end.copy(a)):w<Qn&&(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(o),this.degenerateSegment.end.copy(s)),this.plane.setFromNormalAndCoplanarPoint(d,a),this.needsUpdate=!1}}gn.prototype.closestPointToSegment=(function(){const h=new Q,a=new Q,s=new ei;return function(u,f=null,c=null){const{start:d,end:m}=u,y=this.points;let b,v=1/0;for(let p=0;p<3;p++){const S=(p+1)%3;s.start.copy(y[p]),s.end.copy(y[S]),Uh(s,u,h,a),b=h.distanceToSquared(a),b<v&&(v=b,f&&f.copy(h),c&&c.copy(a))}return this.closestPointToPoint(d,h),b=d.distanceToSquared(h),b<v&&(v=b,f&&f.copy(h),c&&c.copy(d)),this.closestPointToPoint(m,h),b=m.distanceToSquared(h),b<v&&(v=b,f&&f.copy(h),c&&c.copy(m)),Math.sqrt(v)}})();gn.prototype.intersectsTriangle=(function(){const h=new gn,a=new ti,s=new ti,o=new Q,u=new Q,f=new Q,c=new Q,d=new ei,m=new ei,y=new Q,b=new Re,v=new Re;function p(A,R,D,H){const O=o;!A.isDegenerateIntoPoint&&!A.isDegenerateIntoSegment?O.copy(A.plane.normal):O.copy(R.plane.normal);const j=A.satBounds,V=A.satAxes;for(let G=1;G<4;G++){const K=j[G],J=V[G];if(a.setFromPoints(J,R.points),K.isSeparated(a)||(c.copy(O).cross(J),a.setFromPoints(c,A.points),s.setFromPoints(c,R.points),a.isSeparated(s)))return!1}const Y=R.satBounds,Z=R.satAxes;for(let G=1;G<4;G++){const K=Y[G],J=Z[G];if(a.setFromPoints(J,A.points),K.isSeparated(a)||(c.crossVectors(O,J),a.setFromPoints(c,A.points),s.setFromPoints(c,R.points),a.isSeparated(s)))return!1}return D&&(H||console.warn("ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0."),D.start.set(0,0,0),D.end.set(0,0,0)),!0}function S(A,R,D,H,O,j,V,Y,Z,G,K){let J=V/(V-Y);G.x=H+(O-H)*J,K.start.subVectors(R,A).multiplyScalar(J).add(A),J=V/(V-Z),G.y=H+(j-H)*J,K.end.subVectors(D,A).multiplyScalar(J).add(A)}function _(A,R,D,H,O,j,V,Y,Z,G,K){if(O>0)S(A.c,A.a,A.b,H,R,D,Z,V,Y,G,K);else if(j>0)S(A.b,A.a,A.c,D,R,H,Y,V,Z,G,K);else if(Y*Z>0||V!=0)S(A.a,A.b,A.c,R,D,H,V,Y,Z,G,K);else if(Y!=0)S(A.b,A.a,A.c,D,R,H,Y,V,Z,G,K);else if(Z!=0)S(A.c,A.a,A.b,H,R,D,Z,V,Y,G,K);else return!0;return!1}function C(A,R,D,H){const O=R.degenerateSegment,j=A.plane.distanceToPoint(O.start),V=A.plane.distanceToPoint(O.end);return tn(j)?tn(V)?p(A,R,D,H):(D&&(D.start.copy(O.start),D.end.copy(O.start)),A.containsPoint(O.start)):tn(V)?(D&&(D.start.copy(O.end),D.end.copy(O.end)),A.containsPoint(O.end)):A.plane.intersectLine(O,o)!=null?(D&&(D.start.copy(o),D.end.copy(o)),A.containsPoint(o)):!1}function x(A,R,D){const H=R.a;return tn(A.plane.distanceToPoint(H))&&A.containsPoint(H)?(D&&(D.start.copy(H),D.end.copy(H)),!0):!1}function w(A,R,D){const H=A.degenerateSegment,O=R.a;return H.closestPointToPoint(O,!0,o),O.distanceToSquared(o)<Bg?(D&&(D.start.copy(O),D.end.copy(O)),!0):!1}function M(A,R,D,H){if(A.isDegenerateIntoSegment)if(R.isDegenerateIntoSegment){const O=A.degenerateSegment,j=R.degenerateSegment,V=u,Y=f;O.delta(V),j.delta(Y);const Z=o.subVectors(j.start,O.start),G=V.x*Y.y-V.y*Y.x;if(tn(G))return!1;const K=(Z.x*Y.y-Z.y*Y.x)/G,J=-(V.x*Z.y-V.y*Z.x)/G;if(K<0||K>1||J<0||J>1)return!1;const ee=O.start.z+V.z*K,X=j.start.z+Y.z*J;return tn(ee-X)?(D&&(D.start.copy(O.start).addScaledVector(V,K),D.end.copy(O.start).addScaledVector(V,K)),!0):!1}else return R.isDegenerateIntoPoint?w(A,R,D):C(R,A,D,H);else{if(A.isDegenerateIntoPoint)return R.isDegenerateIntoPoint?R.a.distanceToSquared(A.a)<Bg?(D&&(D.start.copy(A.a),D.end.copy(A.a)),!0):!1:R.isDegenerateIntoSegment?w(R,A,D):x(R,A,D);if(R.isDegenerateIntoPoint)return x(A,R,D);if(R.isDegenerateIntoSegment)return C(A,R,D,H)}}return function(R,D=null,H=!1){this.needsUpdate&&this.update(),R.isExtendedTriangle?R.needsUpdate&&R.update():(h.copy(R),h.update(),R=h);const O=M(this,R,D,H);if(O!==void 0)return O;const j=this.plane,V=R.plane;let Y=V.distanceToPoint(this.a),Z=V.distanceToPoint(this.b),G=V.distanceToPoint(this.c);tn(Y)&&(Y=0),tn(Z)&&(Z=0),tn(G)&&(G=0);const K=Y*Z,J=Y*G;if(K>0&&J>0)return!1;let ee=j.distanceToPoint(R.a),X=j.distanceToPoint(R.b),ne=j.distanceToPoint(R.c);tn(ee)&&(ee=0),tn(X)&&(X=0),tn(ne)&&(ne=0);const ie=ee*X,ue=ee*ne;if(ie>0&&ue>0)return!1;u.copy(j.normal),f.copy(V.normal);const ge=u.cross(f);let We=0,Yt=Math.abs(ge.x);const oe=Math.abs(ge.y);oe>Yt&&(Yt=oe,We=1),Math.abs(ge.z)>Yt&&(We=2);const Ct=tS[We],jl=this.a[Ct],Fi=this.b[Ct],ec=this.c[Ct],Os=R.a[Ct],Gi=R.b[Ct],se=R.c[Ct];if(_(this,jl,Fi,ec,K,J,Y,Z,G,b,d))return p(this,R,D,H);if(_(R,Os,Gi,se,ie,ue,ee,X,ne,v,m))return p(this,R,D,H);if(b.y<b.x){const be=b.y;b.y=b.x,b.x=be,y.copy(d.start),d.start.copy(d.end),d.end.copy(y)}if(v.y<v.x){const be=v.y;v.y=v.x,v.x=be,y.copy(m.start),m.start.copy(m.end),m.end.copy(y)}return b.y<v.x||v.y<b.x?!1:(D&&(v.x>b.x?D.start.copy(m.start):D.start.copy(d.start),v.y<b.y?D.end.copy(m.end):D.end.copy(d.end)),!0)}})();gn.prototype.distanceToPoint=(function(){const h=new Q;return function(s){return this.closestPointToPoint(s,h),s.distanceTo(h)}})();gn.prototype.distanceToTriangle=(function(){const h=new Q,a=new Q,s=["a","b","c"],o=new ei,u=new ei;return function(c,d=null,m=null){const y=d||m?o:null;if(this.intersectsTriangle(c,y))return(d||m)&&(d&&y.getCenter(d),m&&y.getCenter(m)),0;let b=1/0;for(let v=0;v<3;v++){let p;const S=s[v],_=c[S];this.closestPointToPoint(_,h),p=_.distanceToSquared(h),p<b&&(b=p,d&&d.copy(h),m&&m.copy(_));const C=this[S];c.closestPointToPoint(C,h),p=C.distanceToSquared(h),p<b&&(b=p,d&&d.copy(C),m&&m.copy(h))}for(let v=0;v<3;v++){const p=s[v],S=s[(v+1)%3];o.set(this[p],this[S]);for(let _=0;_<3;_++){const C=s[_],x=s[(_+1)%3];u.set(c[C],c[x]),Uh(o,u,h,a);const w=h.distanceToSquared(a);w<b&&(b=w,d&&d.copy(h),m&&m.copy(a))}}return Math.sqrt(b)}})();class yt{constructor(a,s,o){this.isOrientedBox=!0,this.min=new Q,this.max=new Q,this.matrix=new Pe,this.invMatrix=new Pe,this.points=new Array(8).fill().map(()=>new Q),this.satAxes=new Array(3).fill().map(()=>new Q),this.satBounds=new Array(3).fill().map(()=>new ti),this.alignedSatBounds=new Array(3).fill().map(()=>new ti),this.needsUpdate=!1,a&&this.min.copy(a),s&&this.max.copy(s),o&&this.matrix.copy(o)}set(a,s,o){this.min.copy(a),this.max.copy(s),this.matrix.copy(o),this.needsUpdate=!0}copy(a){this.min.copy(a.min),this.max.copy(a.max),this.matrix.copy(a.matrix),this.needsUpdate=!0}}yt.prototype.update=(function(){return function(){const a=this.matrix,s=this.min,o=this.max,u=this.points;for(let y=0;y<=1;y++)for(let b=0;b<=1;b++)for(let v=0;v<=1;v++){const p=1*y|2*b|4*v,S=u[p];S.x=y?o.x:s.x,S.y=b?o.y:s.y,S.z=v?o.z:s.z,S.applyMatrix4(a)}const f=this.satBounds,c=this.satAxes,d=u[0];for(let y=0;y<3;y++){const b=c[y],v=f[y],p=1<<y,S=u[p];b.subVectors(d,S),v.setFromPoints(b,u)}const m=this.alignedSatBounds;m[0].setFromPointsField(u,"x"),m[1].setFromPointsField(u,"y"),m[2].setFromPointsField(u,"z"),this.invMatrix.copy(this.matrix).invert(),this.needsUpdate=!1}})();yt.prototype.intersectsBox=(function(){const h=new ti;return function(s){this.needsUpdate&&this.update();const o=s.min,u=s.max,f=this.satBounds,c=this.satAxes,d=this.alignedSatBounds;if(h.min=o.x,h.max=u.x,d[0].isSeparated(h)||(h.min=o.y,h.max=u.y,d[1].isSeparated(h))||(h.min=o.z,h.max=u.z,d[2].isSeparated(h)))return!1;for(let m=0;m<3;m++){const y=c[m],b=f[m];if(h.setFromBox(y,s),b.isSeparated(h))return!1}return!0}})();yt.prototype.intersectsTriangle=(function(){const h=new gn,a=new Array(3),s=new ti,o=new ti,u=new Q;return function(c){this.needsUpdate&&this.update(),c.isExtendedTriangle?c.needsUpdate&&c.update():(h.copy(c),h.update(),c=h);const d=this.satBounds,m=this.satAxes;a[0]=c.a,a[1]=c.b,a[2]=c.c;for(let p=0;p<3;p++){const S=d[p],_=m[p];if(s.setFromPoints(_,a),S.isSeparated(s))return!1}const y=c.satBounds,b=c.satAxes,v=this.points;for(let p=0;p<3;p++){const S=y[p],_=b[p];if(s.setFromPoints(_,v),S.isSeparated(s))return!1}for(let p=0;p<3;p++){const S=m[p];for(let _=0;_<4;_++){const C=b[_];if(u.crossVectors(S,C),s.setFromPoints(u,a),o.setFromPoints(u,v),s.isSeparated(o))return!1}}return!0}})();yt.prototype.closestPointToPoint=(function(){return function(a,s){return this.needsUpdate&&this.update(),s.copy(a).applyMatrix4(this.invMatrix).clamp(this.min,this.max).applyMatrix4(this.matrix),s}})();yt.prototype.distanceToPoint=(function(){const h=new Q;return function(s){return this.closestPointToPoint(s,h),s.distanceTo(h)}})();yt.prototype.distanceToBox=(function(){const h=["x","y","z"],a=new Array(12).fill().map(()=>new ei),s=new Array(12).fill().map(()=>new ei),o=new Q,u=new Q;return function(c,d=0,m=null,y=null){if(this.needsUpdate&&this.update(),this.intersectsBox(c))return(m||y)&&(c.getCenter(u),this.closestPointToPoint(u,o),c.closestPointToPoint(o,u),m&&m.copy(o),y&&y.copy(u)),0;const b=d*d,v=c.min,p=c.max,S=this.points;let _=1/0;for(let x=0;x<8;x++){const w=S[x];u.copy(w).clamp(v,p);const M=w.distanceToSquared(u);if(M<_&&(_=M,m&&m.copy(w),y&&y.copy(u),M<b))return Math.sqrt(M)}let C=0;for(let x=0;x<3;x++)for(let w=0;w<=1;w++)for(let M=0;M<=1;M++){const A=(x+1)%3,R=(x+2)%3,D=w<<A|M<<R,H=1<<x|w<<A|M<<R,O=S[D],j=S[H];a[C].set(O,j);const Y=h[x],Z=h[A],G=h[R],K=s[C],J=K.start,ee=K.end;J[Y]=v[Y],J[Z]=w?v[Z]:p[Z],J[G]=M?v[G]:p[Z],ee[Y]=p[Y],ee[Z]=w?v[Z]:p[Z],ee[G]=M?v[G]:p[Z],C++}for(let x=0;x<=1;x++)for(let w=0;w<=1;w++)for(let M=0;M<=1;M++){u.x=x?p.x:v.x,u.y=w?p.y:v.y,u.z=M?p.z:v.z,this.closestPointToPoint(u,o);const A=u.distanceToSquared(o);if(A<_&&(_=A,m&&m.copy(o),y&&y.copy(u),A<b))return Math.sqrt(A)}for(let x=0;x<12;x++){const w=a[x];for(let M=0;M<12;M++){const A=s[M];Uh(w,A,o,u);const R=o.distanceToSquared(u);if(R<_&&(_=R,m&&m.copy(o),y&&y.copy(u),R<b))return Math.sqrt(R)}}return Math.sqrt(_)}})();class Bh{constructor(a){this._getNewPrimitive=a,this._primitives=[]}getPrimitive(){const a=this._primitives;return a.length===0?this._getNewPrimitive():a.pop()}releasePrimitive(a){this._primitives.push(a)}}class nS extends Bh{constructor(){super(()=>new gn)}}const sn=new nS;class iS{constructor(){this.float32Array=null,this.uint16Array=null,this.uint32Array=null;const a=[];let s=null;this.setBuffer=o=>{s&&a.push(s),s=o,this.float32Array=new Float32Array(o),this.uint16Array=new Uint16Array(o),this.uint32Array=new Uint32Array(o)},this.clearBuffer=()=>{s=null,this.float32Array=null,this.uint16Array=null,this.uint32Array=null,a.length!==0&&this.setBuffer(a.pop())}}}const Ue=new iS;let Ui,ws;const hs=[],Er=new Bh(()=>new Dt);function aS(h,a,s,o,u,f){Ui=Er.getPrimitive(),ws=Er.getPrimitive(),hs.push(Ui,ws),Ue.setBuffer(h._roots[a]);const c=vh(0,h.geometry,s,o,u,f);Ue.clearBuffer(),Er.releasePrimitive(Ui),Er.releasePrimitive(ws),hs.pop(),hs.pop();const d=hs.length;return d>0&&(ws=hs[d-1],Ui=hs[d-2]),c}function vh(h,a,s,o,u=null,f=0,c=0){const{float32Array:d,uint16Array:m,uint32Array:y}=Ue;let b=h*2;if(gt(b,m)){const p=Rt(h,y),S=qt(b,m);return Ge(h,d,Ui),o(p,S,!1,c,f+h,Ui)}else{let Y=function(G){const{uint16Array:K,uint32Array:J}=Ue;let ee=G*2;for(;!gt(ee,K);)G=an(G),ee=G*2;return Rt(G,J)},Z=function(G){const{uint16Array:K,uint32Array:J}=Ue;let ee=G*2;for(;!gt(ee,K);)G=Pt(G,J),ee=G*2;return Rt(G,J)+qt(ee,K)};const p=an(h),S=Pt(h,y);let _=p,C=S,x,w,M,A;if(u&&(M=Ui,A=ws,Ge(_,d,M),Ge(C,d,A),x=u(M),w=u(A),w<x)){_=S,C=p;const G=x;x=w,w=G,M=A}M||(M=Ui,Ge(_,d,M));const R=gt(_*2,m),D=s(M,R,x,c+1,f+_);let H;if(D===Cg){const G=Y(_),J=Z(_)-G;H=o(G,J,!0,c+1,f+_,M)}else H=D&&vh(_,a,s,o,u,f,c+1);if(H)return!0;A=ws,Ge(C,d,A);const O=gt(C*2,m),j=s(A,O,w,c+1,f+C);let V;if(j===Cg){const G=Y(C),J=Z(C)-G;V=o(G,J,!0,c+1,f+C,A)}else V=j&&vh(C,a,s,o,u,f,c+1);return!!V}}const Cl=new Q,Wf=new Q;function sS(h,a,s={},o=0,u=1/0){const f=o*o,c=u*u;let d=1/0,m=null;if(h.shapecast({boundsTraverseOrder:b=>(Cl.copy(a).clamp(b.min,b.max),Cl.distanceToSquared(a)),intersectsBounds:(b,v,p)=>p<d&&p<c,intersectsTriangle:(b,v)=>{b.closestPointToPoint(a,Cl);const p=a.distanceToSquared(Cl);return p<d&&(Wf.copy(Cl),d=p,m=v),p<f}}),d===1/0)return null;const y=Math.sqrt(d);return s.point?s.point.copy(Wf):s.point=Wf.clone(),s.distance=y,s.faceIndex=m,s}const wr=parseInt(vv)>=169,lS=parseInt(vv)<=161,ha=new Q,da=new Q,ma=new Q,Mr=new Re,Rr=new Re,Dr=new Re,Lg=new Q,Hg=new Q,Ig=new Q,Nl=new Q;function oS(h,a,s,o,u,f,c,d){let m;if(f===Nh?m=h.intersectTriangle(o,s,a,!0,u):m=h.intersectTriangle(a,s,o,f!==Rh,u),m===null)return null;const y=h.origin.distanceTo(u);return y<c||y>d?null:{distance:y,point:u.clone()}}function rS(h,a,s,o,u,f,c,d,m,y,b){ha.fromBufferAttribute(a,f),da.fromBufferAttribute(a,c),ma.fromBufferAttribute(a,d);const v=oS(h,ha,da,ma,Nl,m,y,b);if(v){if(o){Mr.fromBufferAttribute(o,f),Rr.fromBufferAttribute(o,c),Dr.fromBufferAttribute(o,d),v.uv=new Re;const S=Ss.getInterpolation(Nl,ha,da,ma,Mr,Rr,Dr,v.uv);wr||(v.uv=S)}if(u){Mr.fromBufferAttribute(u,f),Rr.fromBufferAttribute(u,c),Dr.fromBufferAttribute(u,d),v.uv1=new Re;const S=Ss.getInterpolation(Nl,ha,da,ma,Mr,Rr,Dr,v.uv1);wr||(v.uv1=S),lS&&(v.uv2=v.uv1)}if(s){Lg.fromBufferAttribute(s,f),Hg.fromBufferAttribute(s,c),Ig.fromBufferAttribute(s,d),v.normal=new Q;const S=Ss.getInterpolation(Nl,ha,da,ma,Lg,Hg,Ig,v.normal);v.normal.dot(h.direction)>0&&v.normal.multiplyScalar(-1),wr||(v.normal=S)}const p={a:f,b:c,c:d,normal:new Q,materialIndex:0};if(Ss.getNormal(ha,da,ma,p.normal),v.face=p,v.faceIndex=f,wr){const S=new Q;Ss.getBarycoord(Nl,ha,da,ma,S),v.barycoord=S}}return v}function $r(h,a,s,o,u,f,c){const d=o*3;let m=d+0,y=d+1,b=d+2;const v=h.index;h.index&&(m=v.getX(m),y=v.getX(y),b=v.getX(b));const{position:p,normal:S,uv:_,uv1:C}=h.attributes,x=rS(s,p,S,_,C,m,y,b,a,f,c);return x?(x.faceIndex=o,u&&u.push(x),x):null}function Ke(h,a,s,o){const u=h.a,f=h.b,c=h.c;let d=a,m=a+1,y=a+2;s&&(d=s.getX(d),m=s.getX(m),y=s.getX(y)),u.x=o.getX(d),u.y=o.getY(d),u.z=o.getZ(d),f.x=o.getX(m),f.y=o.getY(m),f.z=o.getZ(m),c.x=o.getX(y),c.y=o.getY(y),c.z=o.getZ(y)}function cS(h,a,s,o,u,f,c,d){const{geometry:m,_indirectBuffer:y}=h;for(let b=o,v=o+u;b<v;b++)$r(m,a,s,b,f,c,d)}function uS(h,a,s,o,u,f,c){const{geometry:d,_indirectBuffer:m}=h;let y=1/0,b=null;for(let v=o,p=o+u;v<p;v++){let S;S=$r(d,a,s,v,null,f,c),S&&S.distance<y&&(b=S,y=S.distance)}return b}function fS(h,a,s,o,u,f,c){const{geometry:d}=s,{index:m}=d,y=d.attributes.position;for(let b=h,v=a+h;b<v;b++){let p;if(p=b,Ke(c,p*3,m,y),c.needsUpdate=!0,o(c,p,u,f))return!0}return!1}function hS(h,a=null){a&&Array.isArray(a)&&(a=new Set(a));const s=h.geometry,o=s.index?s.index.array:null,u=s.attributes.position;let f,c,d,m,y=0;const b=h._roots;for(let p=0,S=b.length;p<S;p++)f=b[p],c=new Uint32Array(f),d=new Uint16Array(f),m=new Float32Array(f),v(0,y),y+=f.byteLength;function v(p,S,_=!1){const C=p*2;if(d[C+15]===Jr){const w=c[p+6],M=d[C+14];let A=1/0,R=1/0,D=1/0,H=-1/0,O=-1/0,j=-1/0;for(let V=3*w,Y=3*(w+M);V<Y;V++){let Z=o[V];const G=u.getX(Z),K=u.getY(Z),J=u.getZ(Z);G<A&&(A=G),G>H&&(H=G),K<R&&(R=K),K>O&&(O=K),J<D&&(D=J),J>j&&(j=J)}return m[p+0]!==A||m[p+1]!==R||m[p+2]!==D||m[p+3]!==H||m[p+4]!==O||m[p+5]!==j?(m[p+0]=A,m[p+1]=R,m[p+2]=D,m[p+3]=H,m[p+4]=O,m[p+5]=j,!0):!1}else{const w=p+8,M=c[p+6],A=w+S,R=M+S;let D=_,H=!1,O=!1;a?D||(H=a.has(A),O=a.has(R),D=!H&&!O):(H=!0,O=!0);const j=D||H,V=D||O;let Y=!1;j&&(Y=v(w,S,D));let Z=!1;V&&(Z=v(M,S,D));const G=Y||Z;if(G)for(let K=0;K<3;K++){const J=w+K,ee=M+K,X=m[J],ne=m[J+3],ie=m[ee],ue=m[ee+3];m[p+K]=X<ie?X:ie,m[p+K+3]=ne>ue?ne:ue}return G}}}function Hi(h,a,s,o,u){let f,c,d,m,y,b;const v=1/s.direction.x,p=1/s.direction.y,S=1/s.direction.z,_=s.origin.x,C=s.origin.y,x=s.origin.z;let w=a[h],M=a[h+3],A=a[h+1],R=a[h+3+1],D=a[h+2],H=a[h+3+2];return v>=0?(f=(w-_)*v,c=(M-_)*v):(f=(M-_)*v,c=(w-_)*v),p>=0?(d=(A-C)*p,m=(R-C)*p):(d=(R-C)*p,m=(A-C)*p),f>m||d>c||((d>f||isNaN(f))&&(f=d),(m<c||isNaN(c))&&(c=m),S>=0?(y=(D-x)*S,b=(H-x)*S):(y=(H-x)*S,b=(D-x)*S),f>b||y>c)?!1:((y>f||f!==f)&&(f=y),(b<c||c!==c)&&(c=b),f<=u&&c>=o)}function dS(h,a,s,o,u,f,c,d){const{geometry:m,_indirectBuffer:y}=h;for(let b=o,v=o+u;b<v;b++){let p=y?y[b]:b;$r(m,a,s,p,f,c,d)}}function mS(h,a,s,o,u,f,c){const{geometry:d,_indirectBuffer:m}=h;let y=1/0,b=null;for(let v=o,p=o+u;v<p;v++){let S;S=$r(d,a,s,m?m[v]:v,null,f,c),S&&S.distance<y&&(b=S,y=S.distance)}return b}function pS(h,a,s,o,u,f,c){const{geometry:d}=s,{index:m}=d,y=d.attributes.position;for(let b=h,v=a+h;b<v;b++){let p;if(p=s.resolveTriangleIndex(b),Ke(c,p*3,m,y),c.needsUpdate=!0,o(c,p,u,f))return!0}return!1}function gS(h,a,s,o,u,f,c){Ue.setBuffer(h._roots[a]),yh(0,h,s,o,u,f,c),Ue.clearBuffer()}function yh(h,a,s,o,u,f,c){const{float32Array:d,uint16Array:m,uint32Array:y}=Ue,b=h*2;if(gt(b,m)){const p=Rt(h,y),S=qt(b,m);cS(a,s,o,p,S,u,f,c)}else{const p=an(h);Hi(p,d,o,f,c)&&yh(p,a,s,o,u,f,c);const S=Pt(h,y);Hi(S,d,o,f,c)&&yh(S,a,s,o,u,f,c)}}const vS=["x","y","z"];function yS(h,a,s,o,u,f){Ue.setBuffer(h._roots[a]);const c=bh(0,h,s,o,u,f);return Ue.clearBuffer(),c}function bh(h,a,s,o,u,f){const{float32Array:c,uint16Array:d,uint32Array:m}=Ue;let y=h*2;if(gt(y,d)){const v=Rt(h,m),p=qt(y,d);return uS(a,s,o,v,p,u,f)}else{const v=zh(h,m),p=vS[v],_=o.direction[p]>=0;let C,x;_?(C=an(h),x=Pt(h,m)):(C=Pt(h,m),x=an(h));const M=Hi(C,c,o,u,f)?bh(C,a,s,o,u,f):null;if(M){const D=M.point[p];if(_?D<=c[x+v]:D>=c[x+v+3])return M}const R=Hi(x,c,o,u,f)?bh(x,a,s,o,u,f):null;return M&&R?M.distance<=R.distance?M:R:M||R||null}}const Cr=new Dt,ds=new gn,ms=new gn,Ol=new Pe,Fg=new yt,Nr=new yt;function bS(h,a,s,o){Ue.setBuffer(h._roots[a]);const u=Th(0,h,s,o);return Ue.clearBuffer(),u}function Th(h,a,s,o,u=null){const{float32Array:f,uint16Array:c,uint32Array:d}=Ue;let m=h*2;if(u===null&&(s.boundingBox||s.computeBoundingBox(),Fg.set(s.boundingBox.min,s.boundingBox.max,o),u=Fg),gt(m,c)){const b=a.geometry,v=b.index,p=b.attributes.position,S=s.index,_=s.attributes.position,C=Rt(h,d),x=qt(m,c);if(Ol.copy(o).invert(),s.boundsTree)return Ge(h,f,Nr),Nr.matrix.copy(Ol),Nr.needsUpdate=!0,s.boundsTree.shapecast({intersectsBounds:M=>Nr.intersectsBox(M),intersectsTriangle:M=>{M.a.applyMatrix4(o),M.b.applyMatrix4(o),M.c.applyMatrix4(o),M.needsUpdate=!0;for(let A=C*3,R=(x+C)*3;A<R;A+=3)if(Ke(ms,A,v,p),ms.needsUpdate=!0,M.intersectsTriangle(ms))return!0;return!1}});{const w=Ii(s);for(let M=C*3,A=(x+C)*3;M<A;M+=3){Ke(ds,M,v,p),ds.a.applyMatrix4(Ol),ds.b.applyMatrix4(Ol),ds.c.applyMatrix4(Ol),ds.needsUpdate=!0;for(let R=0,D=w*3;R<D;R+=3)if(Ke(ms,R,S,_),ms.needsUpdate=!0,ds.intersectsTriangle(ms))return!0}}}else{const b=h+8,v=d[h+6];return Ge(b,f,Cr),!!(u.intersectsBox(Cr)&&Th(b,a,s,o,u)||(Ge(v,f,Cr),u.intersectsBox(Cr)&&Th(v,a,s,o,u)))}}const Or=new Pe,Jf=new yt,zl=new yt,TS=new Q,xS=new Q,SS=new Q,_S=new Q;function AS(h,a,s,o={},u={},f=0,c=1/0){a.boundingBox||a.computeBoundingBox(),Jf.set(a.boundingBox.min,a.boundingBox.max,s),Jf.needsUpdate=!0;const d=h.geometry,m=d.attributes.position,y=d.index,b=a.attributes.position,v=a.index,p=sn.getPrimitive(),S=sn.getPrimitive();let _=TS,C=xS,x=null,w=null;u&&(x=SS,w=_S);let M=1/0,A=null,R=null;return Or.copy(s).invert(),zl.matrix.copy(Or),h.shapecast({boundsTraverseOrder:D=>Jf.distanceToBox(D),intersectsBounds:(D,H,O)=>O<M&&O<c?(H&&(zl.min.copy(D.min),zl.max.copy(D.max),zl.needsUpdate=!0),!0):!1,intersectsRange:(D,H)=>{if(a.boundsTree)return a.boundsTree.shapecast({boundsTraverseOrder:j=>zl.distanceToBox(j),intersectsBounds:(j,V,Y)=>Y<M&&Y<c,intersectsRange:(j,V)=>{for(let Y=j,Z=j+V;Y<Z;Y++){Ke(S,3*Y,v,b),S.a.applyMatrix4(s),S.b.applyMatrix4(s),S.c.applyMatrix4(s),S.needsUpdate=!0;for(let G=D,K=D+H;G<K;G++){Ke(p,3*G,y,m),p.needsUpdate=!0;const J=p.distanceToTriangle(S,_,x);if(J<M&&(C.copy(_),w&&w.copy(x),M=J,A=G,R=Y),J<f)return!0}}}});{const O=Ii(a);for(let j=0,V=O;j<V;j++){Ke(S,3*j,v,b),S.a.applyMatrix4(s),S.b.applyMatrix4(s),S.c.applyMatrix4(s),S.needsUpdate=!0;for(let Y=D,Z=D+H;Y<Z;Y++){Ke(p,3*Y,y,m),p.needsUpdate=!0;const G=p.distanceToTriangle(S,_,x);if(G<M&&(C.copy(_),w&&w.copy(x),M=G,A=Y,R=j),G<f)return!0}}}}}),sn.releasePrimitive(p),sn.releasePrimitive(S),M===1/0?null:(o.point?o.point.copy(C):o.point=C.clone(),o.distance=M,o.faceIndex=A,u&&(u.point?u.point.copy(w):u.point=w.clone(),u.point.applyMatrix4(Or),C.applyMatrix4(Or),u.distance=C.sub(u.point).length(),u.faceIndex=R),o)}function ES(h,a=null){a&&Array.isArray(a)&&(a=new Set(a));const s=h.geometry,o=s.index?s.index.array:null,u=s.attributes.position;let f,c,d,m,y=0;const b=h._roots;for(let p=0,S=b.length;p<S;p++)f=b[p],c=new Uint32Array(f),d=new Uint16Array(f),m=new Float32Array(f),v(0,y),y+=f.byteLength;function v(p,S,_=!1){const C=p*2;if(d[C+15]===Jr){const w=c[p+6],M=d[C+14];let A=1/0,R=1/0,D=1/0,H=-1/0,O=-1/0,j=-1/0;for(let V=w,Y=w+M;V<Y;V++){const Z=3*h.resolveTriangleIndex(V);for(let G=0;G<3;G++){let K=Z+G;K=o?o[K]:K;const J=u.getX(K),ee=u.getY(K),X=u.getZ(K);J<A&&(A=J),J>H&&(H=J),ee<R&&(R=ee),ee>O&&(O=ee),X<D&&(D=X),X>j&&(j=X)}}return m[p+0]!==A||m[p+1]!==R||m[p+2]!==D||m[p+3]!==H||m[p+4]!==O||m[p+5]!==j?(m[p+0]=A,m[p+1]=R,m[p+2]=D,m[p+3]=H,m[p+4]=O,m[p+5]=j,!0):!1}else{const w=p+8,M=c[p+6],A=w+S,R=M+S;let D=_,H=!1,O=!1;a?D||(H=a.has(A),O=a.has(R),D=!H&&!O):(H=!0,O=!0);const j=D||H,V=D||O;let Y=!1;j&&(Y=v(w,S,D));let Z=!1;V&&(Z=v(M,S,D));const G=Y||Z;if(G)for(let K=0;K<3;K++){const J=w+K,ee=M+K,X=m[J],ne=m[J+3],ie=m[ee],ue=m[ee+3];m[p+K]=X<ie?X:ie,m[p+K+3]=ne>ue?ne:ue}return G}}}function wS(h,a,s,o,u,f,c){Ue.setBuffer(h._roots[a]),xh(0,h,s,o,u,f,c),Ue.clearBuffer()}function xh(h,a,s,o,u,f,c){const{float32Array:d,uint16Array:m,uint32Array:y}=Ue,b=h*2;if(gt(b,m)){const p=Rt(h,y),S=qt(b,m);dS(a,s,o,p,S,u,f,c)}else{const p=an(h);Hi(p,d,o,f,c)&&xh(p,a,s,o,u,f,c);const S=Pt(h,y);Hi(S,d,o,f,c)&&xh(S,a,s,o,u,f,c)}}const MS=["x","y","z"];function RS(h,a,s,o,u,f){Ue.setBuffer(h._roots[a]);const c=Sh(0,h,s,o,u,f);return Ue.clearBuffer(),c}function Sh(h,a,s,o,u,f){const{float32Array:c,uint16Array:d,uint32Array:m}=Ue;let y=h*2;if(gt(y,d)){const v=Rt(h,m),p=qt(y,d);return mS(a,s,o,v,p,u,f)}else{const v=zh(h,m),p=MS[v],_=o.direction[p]>=0;let C,x;_?(C=an(h),x=Pt(h,m)):(C=Pt(h,m),x=an(h));const M=Hi(C,c,o,u,f)?Sh(C,a,s,o,u,f):null;if(M){const D=M.point[p];if(_?D<=c[x+v]:D>=c[x+v+3])return M}const R=Hi(x,c,o,u,f)?Sh(x,a,s,o,u,f):null;return M&&R?M.distance<=R.distance?M:R:M||R||null}}const zr=new Dt,ps=new gn,gs=new gn,Ul=new Pe,Gg=new yt,Ur=new yt;function DS(h,a,s,o){Ue.setBuffer(h._roots[a]);const u=_h(0,h,s,o);return Ue.clearBuffer(),u}function _h(h,a,s,o,u=null){const{float32Array:f,uint16Array:c,uint32Array:d}=Ue;let m=h*2;if(u===null&&(s.boundingBox||s.computeBoundingBox(),Gg.set(s.boundingBox.min,s.boundingBox.max,o),u=Gg),gt(m,c)){const b=a.geometry,v=b.index,p=b.attributes.position,S=s.index,_=s.attributes.position,C=Rt(h,d),x=qt(m,c);if(Ul.copy(o).invert(),s.boundsTree)return Ge(h,f,Ur),Ur.matrix.copy(Ul),Ur.needsUpdate=!0,s.boundsTree.shapecast({intersectsBounds:M=>Ur.intersectsBox(M),intersectsTriangle:M=>{M.a.applyMatrix4(o),M.b.applyMatrix4(o),M.c.applyMatrix4(o),M.needsUpdate=!0;for(let A=C,R=x+C;A<R;A++)if(Ke(gs,3*a.resolveTriangleIndex(A),v,p),gs.needsUpdate=!0,M.intersectsTriangle(gs))return!0;return!1}});{const w=Ii(s);for(let M=C,A=x+C;M<A;M++){const R=a.resolveTriangleIndex(M);Ke(ps,3*R,v,p),ps.a.applyMatrix4(Ul),ps.b.applyMatrix4(Ul),ps.c.applyMatrix4(Ul),ps.needsUpdate=!0;for(let D=0,H=w*3;D<H;D+=3)if(Ke(gs,D,S,_),gs.needsUpdate=!0,ps.intersectsTriangle(gs))return!0}}}else{const b=h+8,v=d[h+6];return Ge(b,f,zr),!!(u.intersectsBox(zr)&&_h(b,a,s,o,u)||(Ge(v,f,zr),u.intersectsBox(zr)&&_h(v,a,s,o,u)))}}const Br=new Pe,$f=new yt,Bl=new yt,CS=new Q,NS=new Q,OS=new Q,zS=new Q;function US(h,a,s,o={},u={},f=0,c=1/0){a.boundingBox||a.computeBoundingBox(),$f.set(a.boundingBox.min,a.boundingBox.max,s),$f.needsUpdate=!0;const d=h.geometry,m=d.attributes.position,y=d.index,b=a.attributes.position,v=a.index,p=sn.getPrimitive(),S=sn.getPrimitive();let _=CS,C=NS,x=null,w=null;u&&(x=OS,w=zS);let M=1/0,A=null,R=null;return Br.copy(s).invert(),Bl.matrix.copy(Br),h.shapecast({boundsTraverseOrder:D=>$f.distanceToBox(D),intersectsBounds:(D,H,O)=>O<M&&O<c?(H&&(Bl.min.copy(D.min),Bl.max.copy(D.max),Bl.needsUpdate=!0),!0):!1,intersectsRange:(D,H)=>{if(a.boundsTree){const O=a.boundsTree;return O.shapecast({boundsTraverseOrder:j=>Bl.distanceToBox(j),intersectsBounds:(j,V,Y)=>Y<M&&Y<c,intersectsRange:(j,V)=>{for(let Y=j,Z=j+V;Y<Z;Y++){const G=O.resolveTriangleIndex(Y);Ke(S,3*G,v,b),S.a.applyMatrix4(s),S.b.applyMatrix4(s),S.c.applyMatrix4(s),S.needsUpdate=!0;for(let K=D,J=D+H;K<J;K++){const ee=h.resolveTriangleIndex(K);Ke(p,3*ee,y,m),p.needsUpdate=!0;const X=p.distanceToTriangle(S,_,x);if(X<M&&(C.copy(_),w&&w.copy(x),M=X,A=K,R=Y),X<f)return!0}}}})}else{const O=Ii(a);for(let j=0,V=O;j<V;j++){Ke(S,3*j,v,b),S.a.applyMatrix4(s),S.b.applyMatrix4(s),S.c.applyMatrix4(s),S.needsUpdate=!0;for(let Y=D,Z=D+H;Y<Z;Y++){const G=h.resolveTriangleIndex(Y);Ke(p,3*G,y,m),p.needsUpdate=!0;const K=p.distanceToTriangle(S,_,x);if(K<M&&(C.copy(_),w&&w.copy(x),M=K,A=Y,R=j),K<f)return!0}}}}}),sn.releasePrimitive(p),sn.releasePrimitive(S),M===1/0?null:(o.point?o.point.copy(C):o.point=C.clone(),o.distance=M,o.faceIndex=A,u&&(u.point?u.point.copy(w):u.point=w.clone(),u.point.applyMatrix4(Br),C.applyMatrix4(Br),u.distance=C.sub(u.point).length(),u.faceIndex=R),o)}function BS(){return typeof SharedArrayBuffer<"u"}const Vl=new Ue.constructor,Kr=new Ue.constructor,zi=new Bh(()=>new Dt),vs=new Dt,ys=new Dt,eh=new Dt,th=new Dt;let nh=!1;function LS(h,a,s,o){if(nh)throw new Error("MeshBVH: Recursive calls to bvhcast not supported.");nh=!0;const u=h._roots,f=a._roots;let c,d=0,m=0;const y=new Pe().copy(s).invert();for(let b=0,v=u.length;b<v;b++){Vl.setBuffer(u[b]),m=0;const p=zi.getPrimitive();Ge(0,Vl.float32Array,p),p.applyMatrix4(y);for(let S=0,_=f.length;S<_&&(Kr.setBuffer(f[S]),c=mn(0,0,s,y,o,d,m,0,0,p),Kr.clearBuffer(),m+=f[S].length,!c);S++);if(zi.releasePrimitive(p),Vl.clearBuffer(),d+=u[b].length,c)break}return nh=!1,c}function mn(h,a,s,o,u,f=0,c=0,d=0,m=0,y=null,b=!1){let v,p;b?(v=Kr,p=Vl):(v=Vl,p=Kr);const S=v.float32Array,_=v.uint32Array,C=v.uint16Array,x=p.float32Array,w=p.uint32Array,M=p.uint16Array,A=h*2,R=a*2,D=gt(A,C),H=gt(R,M);let O=!1;if(H&&D)b?O=u(Rt(a,w),qt(a*2,M),Rt(h,_),qt(h*2,C),m,c+a,d,f+h):O=u(Rt(h,_),qt(h*2,C),Rt(a,w),qt(a*2,M),d,f+h,m,c+a);else if(H){const j=zi.getPrimitive();Ge(a,x,j),j.applyMatrix4(s);const V=an(h),Y=Pt(h,_);Ge(V,S,vs),Ge(Y,S,ys);const Z=j.intersectsBox(vs),G=j.intersectsBox(ys);O=Z&&mn(a,V,o,s,u,c,f,m,d+1,j,!b)||G&&mn(a,Y,o,s,u,c,f,m,d+1,j,!b),zi.releasePrimitive(j)}else{const j=an(a),V=Pt(a,w);Ge(j,x,eh),Ge(V,x,th);const Y=y.intersectsBox(eh),Z=y.intersectsBox(th);if(Y&&Z)O=mn(h,j,s,o,u,f,c,d,m+1,y,b)||mn(h,V,s,o,u,f,c,d,m+1,y,b);else if(Y)if(D)O=mn(h,j,s,o,u,f,c,d,m+1,y,b);else{const G=zi.getPrimitive();G.copy(eh).applyMatrix4(s);const K=an(h),J=Pt(h,_);Ge(K,S,vs),Ge(J,S,ys);const ee=G.intersectsBox(vs),X=G.intersectsBox(ys);O=ee&&mn(j,K,o,s,u,c,f,m,d+1,G,!b)||X&&mn(j,J,o,s,u,c,f,m,d+1,G,!b),zi.releasePrimitive(G)}else if(Z)if(D)O=mn(h,V,s,o,u,f,c,d,m+1,y,b);else{const G=zi.getPrimitive();G.copy(th).applyMatrix4(s);const K=an(h),J=Pt(h,_);Ge(K,S,vs),Ge(J,S,ys);const ee=G.intersectsBox(vs),X=G.intersectsBox(ys);O=ee&&mn(V,K,o,s,u,c,f,m,d+1,G,!b)||X&&mn(V,J,o,s,u,c,f,m,d+1,G,!b),zi.releasePrimitive(G)}}return O}const Lr=new yt,Vg=new Dt,HS={strategy:Ev,maxDepth:40,maxLeafTris:10,useSharedArrayBuffer:!1,setBoundingBox:!0,onProgress:null,indirect:!1,verbose:!0,range:null};class Lh{static serialize(a,s={}){s={cloneBuffers:!0,...s};const o=a.geometry,u=a._roots,f=a._indirectBuffer,c=o.getIndex();let d;return s.cloneBuffers?d={roots:u.map(m=>m.slice()),index:c?c.array.slice():null,indirectBuffer:f?f.slice():null}:d={roots:u,index:c?c.array:null,indirectBuffer:f},d}static deserialize(a,s,o={}){o={setIndex:!0,indirect:!!a.indirectBuffer,...o};const{index:u,roots:f,indirectBuffer:c}=a,d=new Lh(s,{...o,[Kf]:!0});if(d._roots=f,d._indirectBuffer=c||null,o.setIndex){const m=s.getIndex();if(m===null){const y=new vt(a.index,1,!1);s.setIndex(y)}else m.array!==u&&(m.array.set(u),m.needsUpdate=!0)}return d}get indirect(){return!!this._indirectBuffer}constructor(a,s={}){if(a.isBufferGeometry){if(a.index&&a.index.isInterleavedBufferAttribute)throw new Error("MeshBVH: InterleavedBufferAttribute is not supported for the index attribute.")}else throw new Error("MeshBVH: Only BufferGeometries are supported.");if(s=Object.assign({...HS,[Kf]:!1},s),s.useSharedArrayBuffer&&!BS())throw new Error("MeshBVH: SharedArrayBuffer is not available.");this.geometry=a,this._roots=null,this._indirectBuffer=null,s[Kf]||(Jx(this,s),!a.boundingBox&&s.setBoundingBox&&(a.boundingBox=this.getBoundingBox(new Dt))),this.resolveTriangleIndex=s.indirect?o=>this._indirectBuffer[o]:o=>o}refit(a=null){return(this.indirect?ES:hS)(this,a)}traverse(a,s=0){const o=this._roots[s],u=new Uint32Array(o),f=new Uint16Array(o);c(0);function c(d,m=0){const y=d*2,b=f[y+15]===Jr;if(b){const v=u[d+6],p=f[y+14];a(m,b,new Float32Array(o,d*4,6),v,p)}else{const v=d+Bi/4,p=u[d+6],S=u[d+7];a(m,b,new Float32Array(o,d*4,6),S)||(c(v,m+1),c(p,m+1))}}}raycast(a,s=Xr,o=0,u=1/0){const f=this._roots,c=this.geometry,d=[],m=s.isMaterial,y=Array.isArray(s),b=c.groups,v=m?s.side:s,p=this.indirect?wS:gS;for(let S=0,_=f.length;S<_;S++){const C=y?s[b[S].materialIndex].side:v,x=d.length;if(p(this,S,C,a,d,o,u),y){const w=b[S].materialIndex;for(let M=x,A=d.length;M<A;M++)d[M].face.materialIndex=w}}return d}raycastFirst(a,s=Xr,o=0,u=1/0){const f=this._roots,c=this.geometry,d=s.isMaterial,m=Array.isArray(s);let y=null;const b=c.groups,v=d?s.side:s,p=this.indirect?RS:yS;for(let S=0,_=f.length;S<_;S++){const C=m?s[b[S].materialIndex].side:v,x=p(this,S,C,a,o,u);x!=null&&(y==null||x.distance<y.distance)&&(y=x,m&&(x.face.materialIndex=b[S].materialIndex))}return y}intersectsGeometry(a,s){let o=!1;const u=this._roots,f=this.indirect?DS:bS;for(let c=0,d=u.length;c<d&&(o=f(this,c,a,s),!o);c++);return o}shapecast(a){const s=sn.getPrimitive(),o=this.indirect?pS:fS;let{boundsTraverseOrder:u,intersectsBounds:f,intersectsRange:c,intersectsTriangle:d}=a;if(c&&d){const v=c;c=(p,S,_,C,x)=>v(p,S,_,C,x)?!0:o(p,S,this,d,_,C,s)}else c||(d?c=(v,p,S,_)=>o(v,p,this,d,S,_,s):c=(v,p,S)=>S);let m=!1,y=0;const b=this._roots;for(let v=0,p=b.length;v<p;v++){const S=b[v];if(m=aS(this,v,f,c,u,y),m)break;y+=S.byteLength}return sn.releasePrimitive(s),m}bvhcast(a,s,o){let{intersectsRanges:u,intersectsTriangles:f}=o;const c=sn.getPrimitive(),d=this.geometry.index,m=this.geometry.attributes.position,y=this.indirect?_=>{const C=this.resolveTriangleIndex(_);Ke(c,C*3,d,m)}:_=>{Ke(c,_*3,d,m)},b=sn.getPrimitive(),v=a.geometry.index,p=a.geometry.attributes.position,S=a.indirect?_=>{const C=a.resolveTriangleIndex(_);Ke(b,C*3,v,p)}:_=>{Ke(b,_*3,v,p)};if(f){const _=(C,x,w,M,A,R,D,H)=>{for(let O=w,j=w+M;O<j;O++){S(O),b.a.applyMatrix4(s),b.b.applyMatrix4(s),b.c.applyMatrix4(s),b.needsUpdate=!0;for(let V=C,Y=C+x;V<Y;V++)if(y(V),c.needsUpdate=!0,f(c,b,V,O,A,R,D,H))return!0}return!1};if(u){const C=u;u=function(x,w,M,A,R,D,H,O){return C(x,w,M,A,R,D,H,O)?!0:_(x,w,M,A,R,D,H,O)}}else u=_}return LS(this,a,s,u)}intersectsBox(a,s){return Lr.set(a.min,a.max,s),Lr.needsUpdate=!0,this.shapecast({intersectsBounds:o=>Lr.intersectsBox(o),intersectsTriangle:o=>Lr.intersectsTriangle(o)})}intersectsSphere(a){return this.shapecast({intersectsBounds:s=>a.intersectsBox(s),intersectsTriangle:s=>s.intersectsSphere(a)})}closestPointToGeometry(a,s,o={},u={},f=0,c=1/0){return(this.indirect?US:AS)(this,a,s,o,u,f,c)}closestPointToPoint(a,s={},o=0,u=1/0){return sS(this,a,s,o,u)}getBoundingBox(a){return a.makeEmpty(),this._roots.forEach(o=>{Ge(0,new Float32Array(o),Vg),a.union(Vg)}),a}}function IS(h){switch(h){case 1:return"R";case 2:return"RG";case 3:return"RGBA";case 4:return"RGBA"}throw new Error}function FS(h){switch(h){case 1:return kr;case 2:return bv;case 3:return nt;case 4:return nt}}function qg(h){switch(h){case 1:return TT;case 2:return yv;case 3:return hh;case 4:return hh}}class zv extends ln{constructor(){super(),this.minFilter=Le,this.magFilter=Le,this.generateMipmaps=!1,this.overrideItemSize=null,this._forcedType=null}updateFrom(a){const s=this.overrideItemSize,o=a.itemSize,u=a.count;if(s!==null){if(o*u%s!==0)throw new Error("VertexAttributeTexture: overrideItemSize must divide evenly into buffer length.");a.itemSize=s,a.count=u*o/s}const f=a.itemSize,c=a.count,d=a.normalized,m=a.array.constructor,y=m.BYTES_PER_ELEMENT;let b=this._forcedType,v=f;if(b===null)switch(m){case Float32Array:b=ut;break;case Uint8Array:case Uint16Array:case Uint32Array:b=Fl;break;case Int8Array:case Int16Array:case Int32Array:b=Ff;break}let p,S,_,C,x=IS(f);switch(b){case ut:_=1,S=FS(f),d&&y===1?(C=m,x+="8",m===Uint8Array?p=fh:(p=gg,x+="_SNORM")):(C=Float32Array,x+="32F",p=ut);break;case Ff:x+=y*8+"I",_=d?Math.pow(2,m.BYTES_PER_ELEMENT*8-1):1,S=qg(f),y===1?(C=Int8Array,p=gg):y===2?(C=Int16Array,p=bT):(C=Int32Array,p=Ff);break;case Fl:x+=y*8+"UI",_=d?Math.pow(2,m.BYTES_PER_ELEMENT*8-1):1,S=qg(f),y===1?(C=Uint8Array,p=fh):y===2?(C=Uint16Array,p=yT):(C=Uint32Array,p=Fl);break}v===3&&(S===nt||S===hh)&&(v=4);const w=Math.ceil(Math.sqrt(c))||1,M=v*w*w,A=new C(M),R=a.normalized;a.normalized=!1;for(let D=0;D<c;D++){const H=v*D;A[H]=a.getX(D)/_,f>=2&&(A[H+1]=a.getY(D)/_),f>=3&&(A[H+2]=a.getZ(D)/_,v===4&&(A[H+3]=1)),f>=4&&(A[H+3]=a.getW(D)/_)}a.normalized=R,this.internalFormat=x,this.format=S,this.type=p,this.image.width=w,this.image.height=w,this.image.data=A,this.needsUpdate=!0,this.dispose(),a.itemSize=o,a.count=u}}class Uv extends zv{constructor(){super(),this._forcedType=Fl}}class Bv extends zv{constructor(){super(),this._forcedType=ut}}class GS{constructor(){this.index=new Uv,this.position=new Bv,this.bvhBounds=new ln,this.bvhContents=new ln,this._cachedIndexAttr=null,this.index.overrideItemSize=3}updateFrom(a){const{geometry:s}=a;if(qS(a,this.bvhBounds,this.bvhContents),this.position.updateFrom(s.attributes.position),a.indirect){const o=a._indirectBuffer;if(this._cachedIndexAttr===null||this._cachedIndexAttr.count!==o.length)if(s.index)this._cachedIndexAttr=s.index.clone();else{const u=Rv(Mv(s));this._cachedIndexAttr=new vt(u,1,!1)}VS(s,o,this._cachedIndexAttr),this.index.updateFrom(this._cachedIndexAttr)}else this.index.updateFrom(s.index)}dispose(){const{index:a,position:s,bvhBounds:o,bvhContents:u}=this;a&&a.dispose(),s&&s.dispose(),o&&o.dispose(),u&&u.dispose()}}function VS(h,a,s){const o=s.array,u=h.index?h.index.array:null;for(let f=0,c=a.length;f<c;f++){const d=3*f,m=3*a[f];for(let y=0;y<3;y++)o[d+y]=u?u[m+y]:m+y}}function qS(h,a,s){const o=h._roots;if(o.length!==1)throw new Error("MeshBVHUniformStruct: Multi-root BVHs not supported.");const u=o[0],f=new Uint16Array(u),c=new Uint32Array(u),d=new Float32Array(u),m=u.byteLength/Bi,y=2*Math.ceil(Math.sqrt(m/2)),b=new Float32Array(4*y*y),v=Math.ceil(Math.sqrt(m)),p=new Uint32Array(2*v*v);for(let S=0;S<m;S++){const _=S*Bi/4,C=_*2,x=_;for(let w=0;w<3;w++)b[8*S+0+w]=d[x+0+w],b[8*S+4+w]=d[x+3+w];if(gt(C,f)){const w=qt(C,f),M=Rt(_,c),A=4294901760|w;p[S*2+0]=A,p[S*2+1]=M}else{const w=4*Pt(_,c)/Bi,M=zh(_,c);p[S*2+0]=M,p[S*2+1]=w}}a.image.data=b,a.image.width=y,a.image.height=y,a.format=nt,a.type=ut,a.internalFormat="RGBA32F",a.minFilter=Le,a.magFilter=Le,a.generateMipmaps=!1,a.needsUpdate=!0,a.dispose(),s.image.data=p,s.image.width=v,s.image.height=v,s.format=yv,s.type=Fl,s.internalFormat="RG32UI",s.minFilter=Le,s.magFilter=Le,s.generateMipmaps=!1,s.needsUpdate=!0,s.dispose()}const PS=`

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
`,jS=`

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
`,YS=`
struct BVH {

	usampler2D index;
	sampler2D position;

	sampler2D bvhBounds;
	usampler2D bvhContents;

};
`;function Lv(h,a,s=0){if(h.isInterleavedBufferAttribute){const o=h.itemSize;for(let u=0,f=h.count;u<f;u++){const c=u+s;a.setX(c,h.getX(u)),o>=2&&a.setY(c,h.getY(u)),o>=3&&a.setZ(c,h.getZ(u)),o>=4&&a.setW(c,h.getW(u))}}else{const o=a.array,u=o.constructor,f=o.BYTES_PER_ELEMENT*h.itemSize*s;new u(o.buffer,f,h.array.length).set(h.array)}}function Hl(h,a=null){const s=h.array.constructor,o=h.normalized,u=h.itemSize,f=a===null?h.count:a;return new vt(new s(u*f),u,o)}function _s(h,a){if(!h&&!a)return!0;if(!!h!=!!a)return!1;const s=h.count===a.count,o=h.normalized===a.normalized,u=h.array.constructor===a.array.constructor,f=h.itemSize===a.itemSize;return!(!s||!o||!u||!f)}function XS(h){const a=h[0].index!==null,s=new Set(Object.keys(h[0].attributes));if(!h[0].getAttribute("position"))throw new Error("StaticGeometryGenerator: position attribute is required.");for(let o=0;o<h.length;++o){const u=h[o];let f=0;if(a!==(u.index!==null))throw new Error("StaticGeometryGenerator: All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.");for(const c in u.attributes){if(!s.has(c))throw new Error('StaticGeometryGenerator: All geometries must have compatible attributes; make sure "'+c+'" attribute exists among all geometries, or in none of them.');f++}if(f!==s.size)throw new Error("StaticGeometryGenerator: All geometries must have the same number of attributes.")}}function kS(h){let a=0;for(let s=0,o=h.length;s<o;s++)a+=h[s].getIndex().count;return a}function KS(h){let a=0;for(let s=0,o=h.length;s<o;s++)a+=h[s].getAttribute("position").count;return a}function ZS(h,a,s){h.index&&h.index.count!==a&&h.setIndex(null);const o=h.attributes;for(const u in o)o[u].count!==s&&h.deleteAttribute(u)}function QS(h,a={},s=new Li){const{useGroups:o=!1,forceUpdate:u=!1,skipAssigningAttributes:f=[],overwriteIndex:c=!0}=a;XS(h);const d=h[0].index!==null,m=d?kS(h):-1,y=KS(h);if(ZS(s,m,y),o){let v=0;for(let p=0,S=h.length;p<S;p++){const _=h[p];let C;d?C=_.getIndex().count:C=_.getAttribute("position").count,s.addGroup(v,C,p),v+=C}}if(d){let v=!1;if(s.index||(s.setIndex(new vt(new Uint32Array(m),1,!1)),v=!0),v||c){let p=0,S=0;const _=s.getIndex();for(let C=0,x=h.length;C<x;C++){const w=h[C],M=w.getIndex();if(!(!u&&!v&&f[C]))for(let R=0;R<M.count;++R)_.setX(p+R,M.getX(R)+S);p+=M.count,S+=w.getAttribute("position").count}}}const b=Object.keys(h[0].attributes);for(let v=0,p=b.length;v<p;v++){let S=!1;const _=b[v];if(!s.getAttribute(_)){const w=h[0].getAttribute(_);s.setAttribute(_,Hl(w,y)),S=!0}let C=0;const x=s.getAttribute(_);for(let w=0,M=h.length;w<M;w++){const A=h[w],R=!u&&!S&&f[w],D=A.getAttribute(_);if(!R)if(_==="color"&&x.itemSize!==D.itemSize)for(let H=C,O=D.count;H<O;H++)D.setXYZW(H,x.getX(H),x.getY(H),x.getZ(H),1);else Lv(D,x,C);C+=D.count}}}function WS(h,a,s){const o=h.index,f=h.attributes.position.count,c=o?o.count:f;let d=h.groups;d.length===0&&(d=[{count:c,start:0,materialIndex:0}]);let m=h.getAttribute("materialIndex");if(!m||m.count!==f){let b;s.length<=255?b=new Uint8Array(f):b=new Uint16Array(f),m=new vt(b,1,!1),h.deleteAttribute("materialIndex"),h.setAttribute("materialIndex",m)}const y=m.array;for(let b=0;b<d.length;b++){const v=d[b],p=v.start,S=v.count,_=Math.min(S,c-p),C=Array.isArray(a)?a[v.materialIndex]:a,x=s.indexOf(C);for(let w=0;w<_;w++){let M=p+w;o&&(M=o.getX(M)),y[M]=x}}}function JS(h,a){if(!h.index){const s=h.attributes.position.count,o=new Array(s);for(let u=0;u<s;u++)o[u]=u;h.setIndex(o)}if(!h.attributes.normal&&a&&a.includes("normal")&&h.computeVertexNormals(),!h.attributes.uv&&a&&a.includes("uv")){const s=h.attributes.position.count;h.setAttribute("uv",new vt(new Float32Array(s*2),2,!1))}if(!h.attributes.uv2&&a&&a.includes("uv2")){const s=h.attributes.position.count;h.setAttribute("uv2",new vt(new Float32Array(s*2),2,!1))}if(!h.attributes.tangent&&a&&a.includes("tangent"))if(h.attributes.uv&&h.attributes.normal)h.computeTangents();else{const s=h.attributes.position.count;h.setAttribute("tangent",new vt(new Float32Array(s*4),4,!1))}if(!h.attributes.color&&a&&a.includes("color")){const s=h.attributes.position.count,o=new Float32Array(s*4);o.fill(1),h.setAttribute("color",new vt(o,4))}}function Hh(h){let a=0;if(h.byteLength!==0){const s=new Uint8Array(h);for(let o=0;o<h.byteLength;o++){const u=s[o];a=(a<<5)-a+u,a|=0}}return a}function Pg(h){let a=h.uuid;const s=Object.values(h.attributes);h.index&&(s.push(h.index),a+=`index|${h.index.version}`);const o=Object.keys(s).sort();for(const u of o){const f=s[u];a+=`${u}_${f.version}|`}return a}function jg(h){const a=h.skeleton;return a?(a.boneTexture||a.computeBoneTexture(),`${Hh(a.boneTexture.image.data.buffer)}_${a.boneTexture.uuid}`):null}class $S{constructor(a=null){this.matrixWorld=new Pe,this.geometryHash=null,this.skeletonHash=null,this.primitiveCount=-1,a!==null&&this.updateFrom(a)}updateFrom(a){const s=a.geometry,o=(s.index?s.index.count:s.attributes.position.count)/3;this.matrixWorld.copy(a.matrixWorld),this.geometryHash=Pg(s),this.primitiveCount=o,this.skeletonHash=jg(a)}didChange(a){const s=a.geometry,o=(s.index?s.index.count:s.attributes.position.count)/3;return!(this.matrixWorld.equals(a.matrixWorld)&&this.geometryHash===Pg(s)&&this.skeletonHash===jg(a)&&this.primitiveCount===o)}}const pa=new Q,ga=new Q,va=new Q,Yg=new Cs,Hr=new Q,ih=new Q,Xg=new Cs,kg=new Cs,Ir=new Pe,Kg=new Pe;function Zg(h,a,s){const o=h.skeleton,u=h.geometry,f=o.bones,c=o.boneInverses;Xg.fromBufferAttribute(u.attributes.skinIndex,a),kg.fromBufferAttribute(u.attributes.skinWeight,a),Ir.elements.fill(0);for(let d=0;d<4;d++){const m=kg.getComponent(d);if(m!==0){const y=Xg.getComponent(d);Kg.multiplyMatrices(f[y].matrixWorld,c[y]),e_(Ir,Kg,m)}}return Ir.multiply(h.bindMatrix).premultiply(h.bindMatrixInverse),s.transformDirection(Ir),s}function ah(h,a,s,o,u){Hr.set(0,0,0);for(let f=0,c=h.length;f<c;f++){const d=a[f],m=h[f];d!==0&&(ih.fromBufferAttribute(m,o),s?Hr.addScaledVector(ih,d):Hr.addScaledVector(ih.sub(u),d))}u.add(Hr)}function e_(h,a,s){const o=h.elements,u=a.elements;for(let f=0,c=u.length;f<c;f++)o[f]+=u[f]*s}function t_(h){const{index:a,attributes:s}=h;if(a)for(let o=0,u=a.count;o<u;o+=3){const f=a.getX(o),c=a.getX(o+2);a.setX(o,c),a.setX(o+2,f)}else for(const o in s){const u=s[o],f=u.itemSize;for(let c=0,d=u.count;c<d;c+=3)for(let m=0;m<f;m++){const y=u.getComponent(c,m),b=u.getComponent(c+2,m);u.setComponent(c,m,b),u.setComponent(c+2,m,y)}}return h}function n_(h,a={},s=new Li){a={applyWorldTransforms:!0,attributes:[],...a};const o=h.geometry,u=a.applyWorldTransforms,f=a.attributes.includes("normal"),c=a.attributes.includes("tangent"),d=o.attributes,m=s.attributes;for(const M in s.attributes)(!a.attributes.includes(M)||!(M in o.attributes))&&s.deleteAttribute(M);!s.index&&o.index&&(s.index=o.index.clone()),m.position||s.setAttribute("position",Hl(d.position)),f&&!m.normal&&d.normal&&s.setAttribute("normal",Hl(d.normal)),c&&!m.tangent&&d.tangent&&s.setAttribute("tangent",Hl(d.tangent)),_s(o.index,s.index),_s(d.position,m.position),f&&_s(d.normal,m.normal),c&&_s(d.tangent,m.tangent);const y=d.position,b=f?d.normal:null,v=c?d.tangent:null,p=o.morphAttributes.position,S=o.morphAttributes.normal,_=o.morphAttributes.tangent,C=o.morphTargetsRelative,x=h.morphTargetInfluences,w=new xT;w.getNormalMatrix(h.matrixWorld),o.index&&s.index.array.set(o.index.array);for(let M=0,A=d.position.count;M<A;M++)pa.fromBufferAttribute(y,M),b&&ga.fromBufferAttribute(b,M),v&&(Yg.fromBufferAttribute(v,M),va.fromBufferAttribute(v,M)),x&&(p&&ah(p,x,C,M,pa),S&&ah(S,x,C,M,ga),_&&ah(_,x,C,M,va)),h.isSkinnedMesh&&(h.applyBoneTransform(M,pa),b&&Zg(h,M,ga),v&&Zg(h,M,va)),u&&pa.applyMatrix4(h.matrixWorld),m.position.setXYZ(M,pa.x,pa.y,pa.z),b&&(u&&ga.applyNormalMatrix(w),m.normal.setXYZ(M,ga.x,ga.y,ga.z)),v&&(u&&va.transformDirection(h.matrixWorld),m.tangent.setXYZW(M,va.x,va.y,va.z,Yg.w));for(const M in a.attributes){const A=a.attributes[M];A==="position"||A==="tangent"||A==="normal"||!(A in d)||(m[A]||s.setAttribute(A,Hl(d[A])),_s(d[A],m[A]),Lv(d[A],m[A]))}return h.matrixWorld.determinant()<0&&t_(s),s}class i_ extends Li{constructor(){super(),this.version=0,this.hash=null,this._diff=new $S}isCompatible(a,s){const o=a.geometry;for(let u=0;u<s.length;u++){const f=s[u],c=o.attributes[f],d=this.attributes[f];if(c&&!_s(c,d))return!1}return!0}updateFrom(a,s){const o=this._diff;return o.didChange(a)?(n_(a,s,this),o.updateFrom(a),this.version++,this.hash=`${this.uuid}_${this.version}`,!0):!1}}const Ah=0,Hv=1,Iv=2;function a_(h,a){for(let s=0,o=h.length;s<o;s++)h[s].traverseVisible(f=>{f.isMesh&&a(f)})}function s_(h){const a=[];for(let s=0,o=h.length;s<o;s++){const u=h[s];Array.isArray(u.material)?a.push(...u.material):a.push(u.material)}return a}function l_(h,a,s){if(h.length===0){a.setIndex(null);const o=a.attributes;for(const u in o)a.deleteAttribute(u);for(const u in s.attributes)a.setAttribute(s.attributes[u],new vt(new Float32Array(0),4,!1))}else QS(h,s,a);for(const o in a.attributes)a.attributes[o].needsUpdate=!0}class o_{constructor(a){this.objects=null,this.useGroups=!0,this.applyWorldTransforms=!0,this.generateMissingAttributes=!0,this.overwriteIndex=!0,this.attributes=["position","normal","color","tangent","uv","uv2"],this._intermediateGeometry=new Map,this._geometryMergeSets=new WeakMap,this._mergeOrder=[],this._dummyMesh=null,this.setObjects(a||[])}_getDummyMesh(){if(!this._dummyMesh){const a=new As,s=new Li;s.setAttribute("position",new vt(new Float32Array(9),3)),this._dummyMesh=new Nn(s,a)}return this._dummyMesh}_getMeshes(){const a=[];return a_(this.objects,s=>{a.push(s)}),a.sort((s,o)=>s.uuid>o.uuid?1:s.uuid<o.uuid?-1:0),a.length===0&&a.push(this._getDummyMesh()),a}_updateIntermediateGeometries(){const{_intermediateGeometry:a}=this,s=this._getMeshes(),o=new Set(a.keys()),u={attributes:this.attributes,applyWorldTransforms:this.applyWorldTransforms};for(let f=0,c=s.length;f<c;f++){const d=s[f],m=d.uuid;o.delete(m);let y=a.get(m);(!y||!y.isCompatible(d,this.attributes))&&(y&&y.dispose(),y=new i_,a.set(m,y)),y.updateFrom(d,u)&&this.generateMissingAttributes&&JS(y,this.attributes)}o.forEach(f=>{a.delete(f)})}setObjects(a){Array.isArray(a)?this.objects=[...a]:this.objects=[a]}generate(a=new Li){const{useGroups:s,overwriteIndex:o,_intermediateGeometry:u,_geometryMergeSets:f}=this,c=this._getMeshes(),d=[],m=[],y=f.get(a)||[];this._updateIntermediateGeometries();let b=!1;c.length!==y.length&&(b=!0);for(let p=0,S=c.length;p<S;p++){const _=c[p],C=u.get(_.uuid);m.push(C);const x=y[p];!x||x.uuid!==C.uuid?(d.push(!1),b=!0):x.version!==C.version?d.push(!1):d.push(!0)}l_(m,a,{useGroups:s,forceUpdate:b,skipAssigningAttributes:d,overwriteIndex:o}),b&&a.dispose(),f.set(a,m.map(p=>({version:p.version,uuid:p.uuid})));let v=Ah;return b?v=Iv:d.includes(!1)&&(v=Hv),{changeType:v,materials:s_(c),geometry:a}}}function r_(h){const a=new Set;for(let s=0,o=h.length;s<o;s++){const u=h[s];for(const f in u){const c=u[f];c&&c.isTexture&&a.add(c)}}return Array.from(a)}function c_(h){const a=[],s=new Set;for(let u=0,f=h.length;u<f;u++)h[u].traverse(c=>{c.visible&&(c.isRectAreaLight||c.isSpotLight||c.isPointLight||c.isDirectionalLight)&&(a.push(c),c.iesMap&&s.add(c.iesMap))});const o=Array.from(s).sort((u,f)=>u.uuid<f.uuid?1:u.uuid>f.uuid?-1:0);return{lights:a,iesTextures:o}}class u_{get initialized(){return!!this.bvh}constructor(a){this.bvhOptions={},this.attributes=["position","normal","tangent","color","uv","uv2"],this.generateBVH=!0,this.bvh=null,this.geometry=new Li,this.staticGeometryGenerator=new o_(a),this._bvhWorker=null,this._pendingGenerate=null,this._buildAsync=!1,this._materialUuids=null}setObjects(a){this.staticGeometryGenerator.setObjects(a)}setBVHWorker(a){this._bvhWorker=a}async generateAsync(a=null){if(!this._bvhWorker)throw new Error('PathTracingSceneGenerator: "setBVHWorker" must be called before "generateAsync" can be called.');if(this.bvh instanceof Promise)return this._pendingGenerate||(this._pendingGenerate=new Promise(async()=>(await this.bvh,this._pendingGenerate=null,this.generateAsync(a)))),this._pendingGenerate;{this._buildAsync=!0;const s=this.generate(a);return this._buildAsync=!1,s.bvh=this.bvh=await s.bvh,s}}generate(a=null){const{staticGeometryGenerator:s,geometry:o,attributes:u}=this,f=s.objects;s.attributes=u,f.forEach(p=>{p.traverse(S=>{S.isSkinnedMesh&&S.skeleton&&S.skeleton.update()})});const c=s.generate(o),d=c.materials;let m=c.changeType!==Ah||this._materialUuids===null||this._materialUuids.length!==length;if(!m){for(let p=0,S=d.length;p<S;p++)if(d[p].uuid!==this._materialUuids[p]){m=!0;break}}const y=r_(d),{lights:b,iesTextures:v}=c_(f);if(m&&(WS(o,d,d),this._materialUuids=d.map(p=>p.uuid)),this.generateBVH){if(this.bvh instanceof Promise)throw new Error("PathTracingSceneGenerator: BVH is already building asynchronously.");if(c.changeType===Iv){const p={strategy:wv,maxLeafTris:1,indirect:!0,onProgress:a,...this.bvhOptions};this._buildAsync?this.bvh=this._bvhWorker.generate(o,p):this.bvh=new Lh(o,p)}else c.changeType===Hv&&this.bvh.refit()}return{bvhChanged:c.changeType!==Ah,bvh:this.bvh,needsMaterialIndexUpdate:m,lights:b,iesTextures:v,geometry:o,materials:d,textures:y,objects:f}}}const f_=new pv(-1,1,1,-1,0,1);class h_ extends Li{constructor(){super(),this.setAttribute("position",new vg([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new vg([0,2,0,0,2,0],2))}}const d_=new h_;class Ns{constructor(a){this._mesh=new Nn(d_,a)}dispose(){this._mesh.geometry.dispose()}render(a){a.render(this._mesh,f_)}get material(){return this._mesh.material}set material(a){this._mesh.material=a}}class Ih extends Wr{set needsUpdate(a){super.needsUpdate=!0,this.dispatchEvent({type:"recompilation"})}constructor(a){super(a);for(const s in this.uniforms)Object.defineProperty(this,s,{get(){return this.uniforms[s].value},set(o){this.uniforms[s].value=o}})}setDefine(a,s=void 0){if(s==null){if(a in this.defines)return delete this.defines[a],this.needsUpdate=!0,!0}else if(this.defines[a]!==s)return this.defines[a]=s,this.needsUpdate=!0,!0;return!1}}class m_ extends Ih{constructor(a){super({blending:Pl,uniforms:{target1:{value:null},target2:{value:null},opacity:{value:1}},vertexShader:`

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

				}`}),this.setValues(a)}}function Fr(h=1){let a="uint";return h>1&&(a="uvec"+h),`
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
	`}function Gr(h=1){let a="uint",s="float",o="",u=".r",f="1u";return h>1&&(a="uvec"+h,s="vec"+h,o=h+"",h===2?(u=".rg",f="uvec2( 1u, 2u )"):h===3?(u=".rgb",f="uvec3( 1u, 2u, 3u )"):(u="",f="uvec4( 1u, 2u, 3u, 4u )")),`

		${s} sobol${o}( int effect ) {

			uint seed = sobolGetSeed( sobolBounceIndex, uint( effect ) );
			uint index = sobolPathIndex;

			uint shuffle_seed = sobolHashCombine( seed, 0u );
			uint shuffled_index = nestedUniformScrambleBase2( sobolReverseBits( index ), shuffle_seed );
			${s} sobol_pt = sobolGetTexturePoint( shuffled_index )${u};
			${a} result = ${a}( sobol_pt * 16777216.0 );

			${a} seed2 = sobolHashCombine( seed, ${f} );
			result = nestedUniformScrambleBase2( result, seed2 );

			return SOBOL_FACTOR * ${s}( result >> 8 );

		}
	`}const Fv=`

	// Utils
	const float SOBOL_FACTOR = 1.0 / 16777216.0;
	const uint SOBOL_MAX_POINTS = 256u * 256u;

	${Fr(1)}
	${Fr(2)}
	${Fr(3)}
	${Fr(4)}

	uint sobolHash( uint x ) {

		// finalizer from murmurhash3
		x ^= x >> 16;
		x *= 0x85ebca6bu;
		x ^= x >> 13;
		x *= 0xc2b2ae35u;
		x ^= x >> 16;
		return x;

	}

`,p_=`

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

`,g_=`

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

	${Gr(1)}
	${Gr(2)}
	${Gr(3)}
	${Gr(4)}

`;class v_ extends Ih{constructor(){super({blending:Pl,uniforms:{resolution:{value:new Re}},vertexShader:`

				varying vec2 vUv;
				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}
			`,fragmentShader:`

				${Fv}
				${p_}

				varying vec2 vUv;
				uniform vec2 resolution;
				void main() {

					uint index = uint( gl_FragCoord.y ) * uint( resolution.x ) + uint( gl_FragCoord.x );
					gl_FragColor = generateSobolPoint( index );

				}
			`})}}class y_{generate(a,s=256){const o=new Gl(s,s,{type:ut,format:nt,minFilter:Le,magFilter:Le,generateMipmaps:!1}),u=a.getRenderTarget();a.setRenderTarget(o);const f=new Ns(new v_);return f.material.resolution.set(s,s),f.render(a),a.setRenderTarget(u),f.dispose(),o}}class b_ extends Zr{set bokehSize(a){this.fStop=this.getFocalLength()/a}get bokehSize(){return this.getFocalLength()/this.fStop}constructor(...a){super(...a),this.fStop=1.4,this.apertureBlades=0,this.apertureRotation=0,this.focusDistance=25,this.anamorphicRatio=1}copy(a,s){return super.copy(a,s),this.fStop=a.fStop,this.apertureBlades=a.apertureBlades,this.apertureRotation=a.apertureRotation,this.focusDistance=a.focusDistance,this.anamorphicRatio=a.anamorphicRatio,this}}class T_{constructor(){this.bokehSize=0,this.apertureBlades=0,this.apertureRotation=0,this.focusDistance=10,this.anamorphicRatio=1}updateFrom(a){a instanceof b_?(this.bokehSize=a.bokehSize,this.apertureBlades=a.apertureBlades,this.apertureRotation=a.apertureRotation,this.focusDistance=a.focusDistance,this.anamorphicRatio=a.anamorphicRatio):(this.bokehSize=0,this.apertureRotation=0,this.apertureBlades=0,this.focusDistance=10,this.anamorphicRatio=1)}}function sh(h){const a=new Uint16Array(h.length);for(let s=0,o=h.length;s<o;++s)a[s]=Wn.toHalfFloat(h[s]);return a}function Qg(h,a,s=0,o=h.length){let u=s,f=s+o-1;for(;u<f;){const c=u+f>>1;h[c]<a?u=c+1:f=c}return u-s}function x_(h,a,s){return .2126*h+.7152*a+.0722*s}function S_(h,a=On){const s=h.clone();s.source=new ST({...s.image});const{width:o,height:u,data:f}=s.image;let c=f;if(s.type!==a){a===On?c=new Uint16Array(f.length):c=new Float32Array(f.length);let d;f instanceof Int8Array||f instanceof Int16Array||f instanceof Int32Array?d=2**(8*f.BYTES_PER_ELEMENT-1)-1:d=2**(8*f.BYTES_PER_ELEMENT)-1;for(let m=0,y=f.length;m<y;m++){let b=f[m];s.type===On&&(b=Wn.fromHalfFloat(f[m])),s.type!==ut&&s.type!==On&&(b/=d),a===On&&(c[m]=Wn.toHalfFloat(b))}s.image.data=c,s.type=a}if(s.flipY){const d=c;c=c.slice();for(let m=0;m<u;m++)for(let y=0;y<o;y++){const b=u-m-1,v=4*(m*o+y),p=4*(b*o+y);c[p+0]=d[v+0],c[p+1]=d[v+1],c[p+2]=d[v+2],c[p+3]=d[v+3]}s.flipY=!1,s.image.data=c}return s}class __{constructor(){const a=new ln(sh(new Float32Array([0,0,0,0])),1,1);a.type=On,a.format=nt,a.minFilter=Mt,a.magFilter=Mt,a.wrapS=pn,a.wrapT=pn,a.generateMipmaps=!1,a.needsUpdate=!0;const s=new ln(sh(new Float32Array([0,1])),1,2);s.type=On,s.format=kr,s.minFilter=Mt,s.magFilter=Mt,s.generateMipmaps=!1,s.needsUpdate=!0;const o=new ln(sh(new Float32Array([0,0,1,1])),2,2);o.type=On,o.format=kr,o.minFilter=Mt,o.magFilter=Mt,o.generateMipmaps=!1,o.needsUpdate=!0,this.map=a,this.marginalWeights=s,this.conditionalWeights=o,this.totalSum=0}dispose(){this.marginalWeights.dispose(),this.conditionalWeights.dispose(),this.map.dispose()}updateFrom(a){const s=S_(a);s.wrapS=pn,s.wrapT=$n;const{width:o,height:u,data:f}=s.image,c=new Float32Array(o*u),d=new Float32Array(o*u),m=new Float32Array(u),y=new Float32Array(u);let b=0,v=0;for(let x=0;x<u;x++){let w=0;for(let M=0;M<o;M++){const A=x*o+M,R=Wn.fromHalfFloat(f[4*A+0]),D=Wn.fromHalfFloat(f[4*A+1]),H=Wn.fromHalfFloat(f[4*A+2]),O=x_(R,D,H);w+=O,b+=O,c[A]=O,d[A]=w}if(w!==0)for(let M=x*o,A=x*o+o;M<A;M++)c[M]/=w,d[M]/=w;v+=w,m[x]=w,y[x]=v}if(v!==0)for(let x=0,w=m.length;x<w;x++)m[x]/=v,y[x]/=v;const p=new Uint16Array(u),S=new Uint16Array(o*u);for(let x=0;x<u;x++){const w=(x+1)/u,M=Qg(y,w);p[x]=Wn.toHalfFloat((M+.5)/u)}for(let x=0;x<u;x++)for(let w=0;w<o;w++){const M=x*o+w,A=(w+1)/o,R=Qg(d,A,x*o,o);S[M]=Wn.toHalfFloat((R+.5)/o)}this.dispose();const{marginalWeights:_,conditionalWeights:C}=this;_.image={width:u,height:1,data:p},_.needsUpdate=!0,C.image={width:o,height:u,data:S},C.needsUpdate=!0,this.totalSum=b,this.map=s}}const lh=6,A_=0,E_=1,w_=2,M_=3,R_=4,dn=new Q,wt=new Q,Wg=new Pe,bs=new ql,Jg=new Q,Ts=new Q,D_=new Q(0,1,0);class C_{constructor(){const a=new ln(new Float32Array(4),1,1);a.format=nt,a.type=ut,a.wrapS=$n,a.wrapT=$n,a.generateMipmaps=!1,a.minFilter=Le,a.magFilter=Le,this.tex=a,this.count=0}updateFrom(a,s=[]){const o=this.tex,u=Math.max(a.length*lh,1),f=Math.ceil(Math.sqrt(u));o.image.width!==f&&(o.dispose(),o.image.data=new Float32Array(f*f*4),o.image.width=f,o.image.height=f);const c=o.image.data;for(let m=0,y=a.length;m<y;m++){const b=a[m],v=m*lh*4;let p=0;for(let _=0;_<lh*4;_++)c[v+_]=0;b.getWorldPosition(wt),c[v+p++]=wt.x,c[v+p++]=wt.y,c[v+p++]=wt.z;let S=A_;if(b.isRectAreaLight&&b.isCircular?S=E_:b.isSpotLight?S=w_:b.isDirectionalLight?S=M_:b.isPointLight&&(S=R_),c[v+p++]=S,c[v+p++]=b.color.r,c[v+p++]=b.color.g,c[v+p++]=b.color.b,c[v+p++]=b.intensity,b.getWorldQuaternion(bs),b.isRectAreaLight)dn.set(b.width,0,0).applyQuaternion(bs),c[v+p++]=dn.x,c[v+p++]=dn.y,c[v+p++]=dn.z,p++,wt.set(0,b.height,0).applyQuaternion(bs),c[v+p++]=wt.x,c[v+p++]=wt.y,c[v+p++]=wt.z,c[v+p++]=dn.cross(wt).length()*(b.isCircular?Math.PI/4:1);else if(b.isSpotLight){const _=b.radius||0;Jg.setFromMatrixPosition(b.matrixWorld),Ts.setFromMatrixPosition(b.target.matrixWorld),Wg.lookAt(Jg,Ts,D_),bs.setFromRotationMatrix(Wg),dn.set(1,0,0).applyQuaternion(bs),c[v+p++]=dn.x,c[v+p++]=dn.y,c[v+p++]=dn.z,p++,wt.set(0,1,0).applyQuaternion(bs),c[v+p++]=wt.x,c[v+p++]=wt.y,c[v+p++]=wt.z,c[v+p++]=Math.PI*_*_,c[v+p++]=_,c[v+p++]=b.decay,c[v+p++]=b.distance,c[v+p++]=Math.cos(b.angle),c[v+p++]=Math.cos(b.angle*(1-b.penumbra)),c[v+p++]=b.iesMap?s.indexOf(b.iesMap):-1}else if(b.isPointLight){const _=dn.setFromMatrixPosition(b.matrixWorld);c[v+p++]=_.x,c[v+p++]=_.y,c[v+p++]=_.z,p++,p+=4,p+=1,c[v+p++]=b.decay,c[v+p++]=b.distance}else if(b.isDirectionalLight){const _=dn.setFromMatrixPosition(b.matrixWorld),C=wt.setFromMatrixPosition(b.target.matrixWorld);Ts.subVectors(_,C).normalize(),c[v+p++]=Ts.x,c[v+p++]=Ts.y,c[v+p++]=Ts.z}}this.count=a.length;const d=Hh(c.buffer);return this.hash!==d?(this.hash=d,o.needsUpdate=!0,!0):!1}}function $g(h,a,s,o,u){if(a>o)throw new Error;const f=h.length/a,c=h.constructor.BYTES_PER_ELEMENT*8;let d=1;switch(h.constructor){case Uint8Array:case Uint16Array:case Uint32Array:d=2**c-1;break;case Int8Array:case Int16Array:case Int32Array:d=2**(c-1)-1;break}for(let m=0;m<f;m++){const y=4*m,b=a*m;for(let v=0;v<o;v++)s[u+y+v]=a>=v+1?h[b+v]/d:0}}class N_ extends _T{constructor(){super(),this._textures=[],this.type=ut,this.format=nt,this.internalFormat="RGBA32F"}updateAttribute(a,s){const o=this._textures[a];o.updateFrom(s);const u=o.image,f=this.image;if(u.width!==f.width||u.height!==f.height)throw new Error("FloatAttributeTextureArray: Attribute must be the same dimensions when updating single layer.");const{width:c,height:d,data:m}=f,b=c*d*4*a;let v=s.itemSize;v===3&&(v=4),$g(o.image.data,v,m,4,b),this.dispose(),this.needsUpdate=!0}setAttributes(a){const s=a[0].count,o=a.length;for(let v=0,p=o;v<p;v++)if(a[v].count!==s)throw new Error("FloatAttributeTextureArray: All attributes must have the same item count.");const u=this._textures;for(;u.length<o;){const v=new Bv;u.push(v)}for(;u.length>o;)u.pop();for(let v=0,p=o;v<p;v++)u[v].updateFrom(a[v]);const c=u[0].image,d=this.image;(c.width!==d.width||c.height!==d.height||c.depth!==o)&&(d.width=c.width,d.height=c.height,d.depth=o,d.data=new Float32Array(d.width*d.height*d.depth*4));const{data:m,width:y,height:b}=d;for(let v=0,p=o;v<p;v++){const S=u[v],C=y*b*4*v;let x=a[v].itemSize;x===3&&(x=4),$g(S.image.data,x,m,4,C)}this.dispose(),this.needsUpdate=!0}}class O_ extends N_{updateNormalAttribute(a){this.updateAttribute(0,a)}updateTangentAttribute(a){this.updateAttribute(1,a)}updateUvAttribute(a){this.updateAttribute(2,a)}updateColorAttribute(a){this.updateAttribute(3,a)}updateFrom(a,s,o,u){this.setAttributes([a,s,o,u])}}function Fh(h,a){return h.uuid<a.uuid?1:h.uuid>a.uuid?-1:0}function Eh(h){return`${h.source.uuid}:${h.colorSpace}`}function z_(h){const a=new Set,s=[];for(let o=0,u=h.length;o<u;o++){const f=h[o],c=Eh(f);a.has(c)||(a.add(c),s.push(f))}return s}function U_(h){const a=h.map(o=>o.iesMap||null).filter(o=>o),s=new Set(a);return Array.from(s).sort(Fh)}function B_(h){const a=new Set;for(let o=0,u=h.length;o<u;o++){const f=h[o];for(const c in f){const d=f[c];d&&d.isTexture&&a.add(d)}}const s=Array.from(a);return z_(s).sort(Fh)}function L_(h){const a=[];return h.traverse(s=>{s.visible&&(s.isRectAreaLight||s.isSpotLight||s.isPointLight||s.isDirectionalLight)&&a.push(s)}),a.sort(Fh)}const Gh=47,ev=Gh*4;class H_{constructor(){this._features={}}isUsed(a){return a in this._features}setUsed(a,s=!0){s===!1?delete this._features[a]:this._features[a]=!0}reset(){this._features={}}}class I_ extends ln{constructor(){super(new Float32Array(4),1,1),this.format=nt,this.type=ut,this.wrapS=$n,this.wrapT=$n,this.minFilter=Le,this.magFilter=Le,this.generateMipmaps=!1,this.features=new H_}updateFrom(a,s){function o(_,C,x=-1){if(C in _&&_[C]){const w=Eh(_[C]);return v[w]}else return x}function u(_,C,x){return C in _?_[C]:x}function f(_,C,x,w){const M=_[C]&&_[C].isTexture?_[C]:null;if(M){M.matrixAutoUpdate&&M.updateMatrix();const A=M.matrix.elements;let R=0;x[w+R++]=A[0],x[w+R++]=A[3],x[w+R++]=A[6],R++,x[w+R++]=A[1],x[w+R++]=A[4],x[w+R++]=A[7],R++}return 8}let c=0;const d=a.length*Gh,m=Math.ceil(Math.sqrt(d))||1,{image:y,features:b}=this,v={};for(let _=0,C=s.length;_<C;_++)v[Eh(s[_])]=_;y.width!==m&&(this.dispose(),y.data=new Float32Array(m*m*4),y.width=m,y.height=m);const p=y.data;b.reset();for(let _=0,C=a.length;_<C;_++){const x=a[_];if(x.isFogVolumeMaterial){b.setUsed("FOG");for(let A=0;A<ev;A++)p[c+A]=0;p[c+0+0]=x.color.r,p[c+0+1]=x.color.g,p[c+0+2]=x.color.b,p[c+8+3]=u(x,"emissiveIntensity",0),p[c+12+0]=x.emissive.r,p[c+12+1]=x.emissive.g,p[c+12+2]=x.emissive.b,p[c+52+1]=x.density,p[c+52+3]=0,p[c+56+2]=4,c+=ev;continue}p[c++]=x.color.r,p[c++]=x.color.g,p[c++]=x.color.b,p[c++]=o(x,"map"),p[c++]=u(x,"metalness",0),p[c++]=o(x,"metalnessMap"),p[c++]=u(x,"roughness",0),p[c++]=o(x,"roughnessMap"),p[c++]=u(x,"ior",1.5),p[c++]=u(x,"transmission",0),p[c++]=o(x,"transmissionMap"),p[c++]=u(x,"emissiveIntensity",0),"emissive"in x?(p[c++]=x.emissive.r,p[c++]=x.emissive.g,p[c++]=x.emissive.b):(p[c++]=0,p[c++]=0,p[c++]=0),p[c++]=o(x,"emissiveMap"),p[c++]=o(x,"normalMap"),"normalScale"in x?(p[c++]=x.normalScale.x,p[c++]=x.normalScale.y):(p[c++]=1,p[c++]=1),p[c++]=u(x,"clearcoat",0),p[c++]=o(x,"clearcoatMap"),p[c++]=u(x,"clearcoatRoughness",0),p[c++]=o(x,"clearcoatRoughnessMap"),p[c++]=o(x,"clearcoatNormalMap"),"clearcoatNormalScale"in x?(p[c++]=x.clearcoatNormalScale.x,p[c++]=x.clearcoatNormalScale.y):(p[c++]=1,p[c++]=1),c++,p[c++]=u(x,"sheen",0),"sheenColor"in x?(p[c++]=x.sheenColor.r,p[c++]=x.sheenColor.g,p[c++]=x.sheenColor.b):(p[c++]=0,p[c++]=0,p[c++]=0),p[c++]=o(x,"sheenColorMap"),p[c++]=u(x,"sheenRoughness",0),p[c++]=o(x,"sheenRoughnessMap"),p[c++]=o(x,"iridescenceMap"),p[c++]=o(x,"iridescenceThicknessMap"),p[c++]=u(x,"iridescence",0),p[c++]=u(x,"iridescenceIOR",1.3);const w=u(x,"iridescenceThicknessRange",[100,400]);p[c++]=w[0],p[c++]=w[1],"specularColor"in x?(p[c++]=x.specularColor.r,p[c++]=x.specularColor.g,p[c++]=x.specularColor.b):(p[c++]=1,p[c++]=1,p[c++]=1),p[c++]=o(x,"specularColorMap"),p[c++]=u(x,"specularIntensity",1),p[c++]=o(x,"specularIntensityMap");const M=u(x,"thickness",0)===0&&u(x,"attenuationDistance",1/0)===1/0;if(p[c++]=Number(M),c++,"attenuationColor"in x?(p[c++]=x.attenuationColor.r,p[c++]=x.attenuationColor.g,p[c++]=x.attenuationColor.b):(p[c++]=1,p[c++]=1,p[c++]=1),p[c++]=u(x,"attenuationDistance",1/0),p[c++]=o(x,"alphaMap"),p[c++]=x.opacity,p[c++]=x.alphaTest,!M&&x.transmission>0)p[c++]=0;else switch(x.side){case Xr:p[c++]=1;break;case Nh:p[c++]=-1;break;case Rh:p[c++]=0;break}p[c++]=Number(u(x,"matte",!1)),p[c++]=Number(u(x,"castShadow",!0)),p[c++]=Number(x.vertexColors)|Number(x.flatShading)<<1,p[c++]=Number(x.transparent),c+=f(x,"map",p,c),c+=f(x,"metalnessMap",p,c),c+=f(x,"roughnessMap",p,c),c+=f(x,"transmissionMap",p,c),c+=f(x,"emissiveMap",p,c),c+=f(x,"normalMap",p,c),c+=f(x,"clearcoatMap",p,c),c+=f(x,"clearcoatNormalMap",p,c),c+=f(x,"clearcoatRoughnessMap",p,c),c+=f(x,"sheenColorMap",p,c),c+=f(x,"sheenRoughnessMap",p,c),c+=f(x,"iridescenceMap",p,c),c+=f(x,"iridescenceThicknessMap",p,c),c+=f(x,"specularColorMap",p,c),c+=f(x,"specularIntensityMap",p,c),c+=f(x,"alphaMap",p,c)}const S=Hh(p.buffer);return this.hash!==S?(this.hash=S,this.needsUpdate=!0,!0):!1}}const tv=new jt;function F_(h){return h?`${h.uuid}:${h.version}`:null}function G_(h,a){for(const s in a)s in h&&(h[s]=a[s])}class nv extends AT{constructor(a,s,o){const u={format:nt,type:fh,minFilter:Mt,magFilter:Mt,wrapS:pn,wrapT:pn,generateMipmaps:!1,...o};super(a,s,1,u),G_(this.texture,u),this.texture.setTextures=(...c)=>{this.setTextures(...c)},this.hashes=[null];const f=new Ns(new V_);this.fsQuad=f}setTextures(a,s,o=this.width,u=this.height){const f=a.getRenderTarget(),c=a.toneMapping,d=a.getClearAlpha();a.getClearColor(tv);const m=s.length||1;(o!==this.width||u!==this.height||this.depth!==m)&&(this.setSize(o,u,m),this.hashes=new Array(m).fill(null)),a.setClearColor(0,0),a.toneMapping=ET;const y=this.fsQuad,b=this.hashes;let v=!1;for(let p=0,S=m;p<S;p++){const _=s[p],C=F_(_);_&&(b[p]!==C||_.isWebGLRenderTarget)&&(_.matrixAutoUpdate=!1,_.matrix.identity(),y.material.map=_,a.setRenderTarget(this,p),y.render(a),_.updateMatrix(),_.matrixAutoUpdate=!0,b[p]=C,v=!0)}return y.material.map=null,a.setClearColor(tv,d),a.setRenderTarget(f),a.toneMapping=c,v}dispose(){super.dispose(),this.fsQuad.dispose()}}class V_ extends Wr{get map(){return this.uniforms.map.value}set map(a){this.uniforms.map.value=a}constructor(){super({uniforms:{map:{value:null}},vertexShader:`
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
			`})}}function q_(h,a=Math.random()){for(let s=h.length-1;s>0;s--){const o=Math.floor(a()*(s+1)),u=h[s];h[s]=h[o],h[o]=u}return h}class P_{constructor(a,s,o=Math.random){const u=a**s,f=new Uint16Array(u);let c=u;for(let d=0;d<u;d++)f[d]=d;this.samples=new Float32Array(s),this.strataCount=a,this.reset=function(){for(let d=0;d<u;d++)f[d]=d;c=0},this.reshuffle=function(){c=0},this.next=function(){const{samples:d}=this;c>=f.length&&(q_(f,o),this.reshuffle());let m=f[c++];for(let y=0;y<s;y++)d[y]=(m%a+o())/a,m=Math.floor(m/a);return d}}}class j_{constructor(a,s,o=Math.random){let u=0;for(const m of s)u+=m;const f=new Float32Array(u),c=[];let d=0;for(const m of s){const y=new P_(a,m,o);y.samples=new Float32Array(f.buffer,d,y.samples.length),d+=y.samples.length*4,c.push(y)}this.samples=f,this.strataCount=a,this.next=function(){for(const m of c)m.next();return f},this.reshuffle=function(){for(const m of c)m.reshuffle()},this.reset=function(){for(const m of c)m.reset()}}}class Y_{constructor(a=0){this.m=2147483648,this.a=1103515245,this.c=12345,this.seed=a}nextInt(){return this.seed=(this.a*this.seed+this.c)%this.m,this.seed}nextFloat(){return this.nextInt()/(this.m-1)}}class X_ extends ln{constructor(a=1,s=1,o=8){super(new Float32Array(1),1,1,nt,ut),this.minFilter=Le,this.magFilter=Le,this.strata=o,this.sampler=null,this.generator=new Y_,this.stableNoise=!1,this.random=()=>this.stableNoise?this.generator.nextFloat():Math.random(),this.init(a,s,o)}init(a=this.image.height,s=this.image.width,o=this.strata){const{image:u}=this;if(u.width===s&&u.height===a&&this.sampler!==null)return;const f=new Array(a*s).fill(4),c=new j_(o,f,this.random);u.width=s,u.height=a,u.data=c.samples,this.sampler=c,this.dispose(),this.next()}next(){this.sampler.next(),this.needsUpdate=!0}reset(){this.sampler.reset(),this.generator.seed=0}}function k_(h,a=Math.random){for(let s=h.length-1;s>0;s--){const o=~~((a()-1e-6)*s),u=h[s];h[s]=h[o],h[o]=u}}function K_(h,a){h.fill(0);for(let s=0;s<a;s++)h[s]=1}class iv{constructor(a){this.count=0,this.size=-1,this.sigma=-1,this.radius=-1,this.lookupTable=null,this.score=null,this.binaryPattern=null,this.resize(a),this.setSigma(1.5)}findVoid(){const{score:a,binaryPattern:s}=this;let o=1/0,u=-1;for(let f=0,c=s.length;f<c;f++){if(s[f]!==0)continue;const d=a[f];d<o&&(o=d,u=f)}return u}findCluster(){const{score:a,binaryPattern:s}=this;let o=-1/0,u=-1;for(let f=0,c=s.length;f<c;f++){if(s[f]!==1)continue;const d=a[f];d>o&&(o=d,u=f)}return u}setSigma(a){if(a===this.sigma)return;const s=~~(Math.sqrt(20*a**2)+1),o=2*s+1,u=new Float32Array(o*o),f=a*a;for(let c=-s;c<=s;c++)for(let d=-s;d<=s;d++){const m=(s+d)*o+c+s,y=c*c+d*d;u[m]=Math.E**(-y/(2*f))}this.lookupTable=u,this.sigma=a,this.radius=s}resize(a){this.size!==a&&(this.size=a,this.score=new Float32Array(a*a),this.binaryPattern=new Uint8Array(a*a))}invert(){const{binaryPattern:a,score:s,size:o}=this;s.fill(0);for(let u=0,f=a.length;u<f;u++)if(a[u]===0){const c=~~(u/o),d=u-c*o;this.updateScore(d,c,1),a[u]=1}else a[u]=0}updateScore(a,s,o){const{size:u,score:f,lookupTable:c}=this,d=this.radius,m=2*d+1;for(let y=-d;y<=d;y++)for(let b=-d;b<=d;b++){const v=(d+b)*m+y+d,p=c[v];let S=a+y;S=S<0?u+S:S%u;let _=s+b;_=_<0?u+_:_%u;const C=_*u+S;f[C]+=o*p}}addPointIndex(a){this.binaryPattern[a]=1;const s=this.size,o=~~(a/s),u=a-o*s;this.updateScore(u,o,1),this.count++}removePointIndex(a){this.binaryPattern[a]=0;const s=this.size,o=~~(a/s),u=a-o*s;this.updateScore(u,o,-1),this.count--}copy(a){this.resize(a.size),this.score.set(a.score),this.binaryPattern.set(a.binaryPattern),this.setSigma(a.sigma),this.count=a.count}}class Z_{constructor(){this.random=Math.random,this.sigma=1.5,this.size=64,this.majorityPointsRatio=.1,this.samples=new iv(1),this.savedSamples=new iv(1)}generate(){const{samples:a,savedSamples:s,sigma:o,majorityPointsRatio:u,size:f}=this;a.resize(f),a.setSigma(o);const c=Math.floor(f*f*u),d=a.binaryPattern;K_(d,c),k_(d,this.random);for(let v=0,p=d.length;v<p;v++)d[v]===1&&a.addPointIndex(v);for(;;){const v=a.findCluster();a.removePointIndex(v);const p=a.findVoid();if(v===p){a.addPointIndex(v);break}a.addPointIndex(p)}const m=new Uint32Array(f*f);s.copy(a);let y;for(y=a.count-1;y>=0;){const v=a.findCluster();a.removePointIndex(v),m[v]=y,y--}const b=f*f;for(y=s.count;y<b/2;){const v=s.findVoid();s.addPointIndex(v),m[v]=y,y++}for(s.invert();y<b;){const v=s.findCluster();s.removePointIndex(v),m[v]=y,y++}return{data:m,maxValue:b}}}function Q_(h){return h>=3?4:h}function W_(h){switch(h){case 1:return kr;case 2:return bv;default:return nt}}class J_ extends ln{constructor(a=64,s=1){super(new Float32Array(4),1,1,nt,ut),this.minFilter=Le,this.magFilter=Le,this.size=a,this.channels=s,this.update()}update(){const a=this.channels,s=this.size,o=new Z_;o.channels=a,o.size=s;const u=Q_(a),f=W_(u);(this.image.width!==s||f!==this.format)&&(this.image.width=s,this.image.height=s,this.image.data=new Float32Array(s**2*u),this.format=f,this.dispose());const c=this.image.data;for(let d=0,m=a;d<m;d++){const y=o.generate(),b=y.data,v=y.maxValue;for(let p=0,S=b.length;p<S;p++){const _=b[p]/v;c[p*u+d]=_}}this.needsUpdate=!0}}const $_=`

	struct PhysicalCamera {

		float focusDistance;
		float anamorphicRatio;
		float bokehSize;
		int apertureBlades;
		float apertureRotation;

	};

`,e2=`

	struct EquirectHdrInfo {

		sampler2D marginalWeights;
		sampler2D conditionalWeights;
		sampler2D map;

		float totalSum;

	};

`,t2=`

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

`,n2=`

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

`,i2=`

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

`,a2=`

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
`,s2=`

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

`,l2=`

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


`,o2=`

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

`,r2=`

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

`,c2=`

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

`,u2=`

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

`,Gv=`

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
`,av=`

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
`,f2=`

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

`,h2=`

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

`,d2=`

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

`,m2=`

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

`,p2=`

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

`,g2=`

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

`,v2=`

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

`,y2=`

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

`,b2=`

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

`,T2=`

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

`,x2=`

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
`,S2=`

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

`,_2=`

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

`;class A2 extends Ih{onBeforeRender(){this.setDefine("FEATURE_DOF",this.physicalCamera.bokehSize===0?0:1),this.setDefine("FEATURE_BACKGROUND_MAP",this.backgroundMap?1:0),this.setDefine("FEATURE_FOG",this.materials.features.isUsed("FOG")?1:0)}constructor(a){super({transparent:!0,depthWrite:!1,defines:{FEATURE_MIS:1,FEATURE_RUSSIAN_ROULETTE:1,FEATURE_DOF:1,FEATURE_BACKGROUND_MAP:0,FEATURE_FOG:1,RANDOM_TYPE:2,CAMERA_TYPE:0,DEBUG_MODE:0,ATTR_NORMAL:0,ATTR_TANGENT:1,ATTR_UV:2,ATTR_COLOR:3,MATERIAL_PIXELS:Gh},uniforms:{resolution:{value:new Re},opacity:{value:1},bounces:{value:10},transmissiveBounces:{value:10},filterGlossyFactor:{value:0},physicalCamera:{value:new T_},cameraWorldMatrix:{value:new Pe},invProjectionMatrix:{value:new Pe},bvh:{value:new GS},attributesArray:{value:new O_},materialIndexAttribute:{value:new Uv},materials:{value:new I_},textures:{value:new nv().texture},lights:{value:new C_},iesProfiles:{value:new nv(360,180,{type:On,wrapS:$n,wrapT:$n}).texture},environmentIntensity:{value:1},environmentRotation:{value:new Pe},envMapInfo:{value:new __},backgroundBlur:{value:0},backgroundMap:{value:null},backgroundAlpha:{value:1},backgroundIntensity:{value:1},backgroundRotation:{value:new Pe},seed:{value:0},sobolTexture:{value:null},stratifiedTexture:{value:new X_},stratifiedOffsetTexture:{value:new J_(64,1)}},vertexShader:`

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
				${PS}
				${YS}
				${jS}

				// uniform structs
				${$_}
				${t2}
				${e2}
				${n2}
				${i2}

				// random
				#if RANDOM_TYPE == 2 	// Stratified List

					${f2}

				#elif RANDOM_TYPE == 1 	// Sobol

					${av}
					${Fv}
					${g_}

					#define rand(v) sobol(v)
					#define rand2(v) sobol2(v)
					#define rand3(v) sobol3(v)
					#define rand4(v) sobol4(v)

				#else 					// PCG

				${av}

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
				${u2}
				${o2}
				${Gv}
				${r2}
				${c2}

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
				${l2}
				${a2}
				${s2}

				${v2}
				${m2}
				${g2}
				${p2}
				${d2}
				${h2}

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

				${S2}
				${b2}
				${_2}
				${y2}
				${T2}
				${x2}

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

			`}),this.setValues(a)}}function*E2(){const{_renderer:h,_fsQuad:a,_blendQuad:s,_primaryTarget:o,_blendTargets:u,_sobolTarget:f,_subframe:c,alpha:d,material:m}=this,y=new Cs,b=new Cs,v=s.material;let[p,S]=u;for(;;){d?(v.opacity=this._opacityFactor/(this.samples+1),m.blending=Pl,m.opacity=1):(m.opacity=this._opacityFactor/(this.samples+1),m.blending=Tv);const[_,C,x,w]=c,M=o.width,A=o.height;m.resolution.set(M*x,A*w),m.sobolTexture=f.texture,m.stratifiedTexture.init(20,m.bounces+m.transmissiveBounces+5),m.stratifiedTexture.next(),m.seed++;const R=this.tiles.x||1,D=this.tiles.y||1,H=R*D,O=Math.ceil(M*x),j=Math.ceil(A*w),V=Math.floor(_*M),Y=Math.floor(C*A),Z=Math.ceil(O/R),G=Math.ceil(j/D);for(let K=0;K<D;K++)for(let J=0;J<R;J++){const ee=h.getRenderTarget(),X=h.autoClear,ne=h.getScissorTest();h.getScissor(y),h.getViewport(b);let ie=J,ue=K;if(!this.stableTiles){const We=this._currentTile%(R*D);ie=We%R,ue=~~(We/R),this._currentTile=We+1}const ge=D-ue-1;o.scissor.set(V+ie*Z,Y+ge*G,Math.min(Z,O-ie*Z),Math.min(G,j-ge*G)),o.viewport.set(V,Y,O,j),h.setRenderTarget(o),h.setScissorTest(!0),h.autoClear=!1,a.render(h),h.setViewport(b),h.setScissor(y),h.setScissorTest(ne),h.setRenderTarget(ee),h.autoClear=X,d&&(v.target1=p.texture,v.target2=o.texture,h.setRenderTarget(S),s.render(h),h.setRenderTarget(ee)),this.samples+=1/H,J===R-1&&K===D-1&&(this.samples=Math.round(this.samples)),yield}[p,S]=[S,p]}}const sv=new jt;class lv{get material(){return this._fsQuad.material}set material(a){this._fsQuad.material.removeEventListener("recompilation",this._compileFunction),a.addEventListener("recompilation",this._compileFunction),this._fsQuad.material=a}get target(){return this._alpha?this._blendTargets[1]:this._primaryTarget}set alpha(a){this._alpha!==a&&(a||(this._blendTargets[0].dispose(),this._blendTargets[1].dispose()),this._alpha=a,this.reset())}get alpha(){return this._alpha}get isCompiling(){return!!this._compilePromise}constructor(a){this.camera=null,this.tiles=new Re(3,3),this.stableNoise=!1,this.stableTiles=!0,this.samples=0,this._subframe=new Cs(0,0,1,1),this._opacityFactor=1,this._renderer=a,this._alpha=!1,this._fsQuad=new Ns(new A2),this._blendQuad=new Ns(new m_),this._task=null,this._currentTile=0,this._compilePromise=null,this._sobolTarget=new y_().generate(a),this._primaryTarget=new Gl(1,1,{format:nt,type:ut,magFilter:Le,minFilter:Le}),this._blendTargets=[new Gl(1,1,{format:nt,type:ut,magFilter:Le,minFilter:Le}),new Gl(1,1,{format:nt,type:ut,magFilter:Le,minFilter:Le})],this._compileFunction=()=>{const s=this.compileMaterial(this._fsQuad._mesh);s.then(()=>{this._compilePromise===s&&(this._compilePromise=null)}),this._compilePromise=s},this.material.addEventListener("recompilation",this._compileFunction)}compileMaterial(){return this._renderer.compileAsync(this._fsQuad._mesh)}setCamera(a){const{material:s}=this;s.cameraWorldMatrix.copy(a.matrixWorld),s.invProjectionMatrix.copy(a.projectionMatrixInverse),s.physicalCamera.updateFrom(a);let o=0;a.projectionMatrix.elements[15]>0&&(o=1),a.isEquirectCamera&&(o=2),s.setDefine("CAMERA_TYPE",o),this.camera=a}setSize(a,s){a=Math.ceil(a),s=Math.ceil(s),!(this._primaryTarget.width===a&&this._primaryTarget.height===s)&&(this._primaryTarget.setSize(a,s),this._blendTargets[0].setSize(a,s),this._blendTargets[1].setSize(a,s),this.reset())}getSize(a){a.x=this._primaryTarget.width,a.y=this._primaryTarget.height}dispose(){this._primaryTarget.dispose(),this._blendTargets[0].dispose(),this._blendTargets[1].dispose(),this._sobolTarget.dispose(),this._fsQuad.dispose(),this._blendQuad.dispose(),this._task=null}reset(){const{_renderer:a,_primaryTarget:s,_blendTargets:o}=this,u=a.getRenderTarget(),f=a.getClearAlpha();a.getClearColor(sv),a.setRenderTarget(s),a.setClearColor(0,0),a.clearColor(),a.setRenderTarget(o[0]),a.setClearColor(0,0),a.clearColor(),a.setRenderTarget(o[1]),a.setClearColor(0,0),a.clearColor(),a.setClearColor(sv,f),a.setRenderTarget(u),this.samples=0,this._task=null,this.material.stratifiedTexture.stableNoise=this.stableNoise,this.stableNoise&&(this.material.seed=0,this.material.stratifiedTexture.reset())}update(){this.material.onBeforeRender(),!this.isCompiling&&(this._task||(this._task=E2.call(this)),this._task.next())}}const ya=new Re,ov=new Re,Vr=new uh,qr=new jt;class w2 extends ln{constructor(a=512,s=512){super(new Float32Array(a*s*4),a,s,nt,ut,xv,pn,$n,Mt,Mt),this.generationCallback=null}update(){this.dispose(),this.needsUpdate=!0;const{data:a,width:s,height:o}=this.image;for(let u=0;u<s;u++)for(let f=0;f<o;f++){ov.set(s,o),ya.set(u/s,f/o),ya.x-=.5,ya.y=1-ya.y,Vr.theta=ya.x*2*Math.PI,Vr.phi=ya.y*Math.PI,Vr.radius=1,this.generationCallback(Vr,ya,ov,qr);const d=4*(f*s+u);a[d+0]=qr.r,a[d+1]=qr.g,a[d+2]=qr.b,a[d+3]=1}}copy(a){return super.copy(a),this.generationCallback=a.generationCallback,this}}const rv=new Q;class Vv extends w2{constructor(a=512){super(a,a),this.topColor=new jt().set(16777215),this.bottomColor=new jt().set(0),this.exponent=2,this.generationCallback=(s,o,u,f)=>{rv.setFromSpherical(s);const c=rv.y*.5+.5;f.lerpColors(this.bottomColor,this.topColor,c**this.exponent)}}copy(a){return super.copy(a),this.topColor.copy(a.topColor),this.bottomColor.copy(a.bottomColor),this}}class M2 extends Wr{get map(){return this.uniforms.map.value}set map(a){this.uniforms.map.value=a}get opacity(){return this.uniforms.opacity.value}set opacity(a){this.uniforms&&(this.uniforms.opacity.value=a)}constructor(a){super({uniforms:{map:{value:null},opacity:{value:1}},vertexShader:`
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
			`}),this.setValues(a)}}class R2 extends Wr{constructor(){super({uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:`
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

				${Gv}

				void main() {

					vec3 rayDirection = equirectUvToDirection( vUv );
					rayDirection.x *= flipEnvMap;
					gl_FragColor = textureCube( envMap, rayDirection );

				}`}),this.depthWrite=!1,this.depthTest=!1}}class cv{constructor(a){this._renderer=a,this._quad=new Ns(new R2)}generate(a,s=null,o=null){if(!a.isCubeTexture)throw new Error("CubeToEquirectMaterial: Source can only be cube textures.");const u=a.images[0],f=this._renderer,c=this._quad;s===null&&(s=4*u.height),o===null&&(o=2*u.height);const d=new Gl(s,o,{type:ut,colorSpace:u.colorSpace}),m=u.height,y=Math.log2(m)-2,b=1/m,v=1/(3*Math.max(Math.pow(2,y),112));c.material.defines.CUBEUV_MAX_MIP=`${y}.0`,c.material.defines.CUBEUV_TEXEL_WIDTH=v,c.material.defines.CUBEUV_TEXEL_HEIGHT=b,c.material.uniforms.envMap.value=a,c.material.uniforms.flipEnvMap.value=a.isRenderTargetTexture?1:-1,c.material.needsUpdate=!0;const p=f.getRenderTarget(),S=f.autoClear;f.autoClear=!0,f.setRenderTarget(d),c.render(f),f.setRenderTarget(p),f.autoClear=S;const _=new Uint16Array(s*o*4),C=new Float32Array(s*o*4);f.readRenderTargetPixels(d,0,0,s,o,C),d.dispose();for(let w=0,M=C.length;w<M;w++)_[w]=Wn.toHalfFloat(C[w]);const x=new ln(_,s,o,nt,On);return x.minFilter=wT,x.magFilter=Mt,x.wrapS=pn,x.wrapT=pn,x.mapping=xv,x.needsUpdate=!0,x}dispose(){this._quad.dispose()}}function D2(h){return h.extensions.get("EXT_float_blend")}const xs=new Re;class C2{get multipleImportanceSampling(){return!!this._pathTracer.material.defines.FEATURE_MIS}set multipleImportanceSampling(a){this._pathTracer.material.setDefine("FEATURE_MIS",a?1:0)}get transmissiveBounces(){return this._pathTracer.material.transmissiveBounces}set transmissiveBounces(a){this._pathTracer.material.transmissiveBounces=a}get bounces(){return this._pathTracer.material.bounces}set bounces(a){this._pathTracer.material.bounces=a}get filterGlossyFactor(){return this._pathTracer.material.filterGlossyFactor}set filterGlossyFactor(a){this._pathTracer.material.filterGlossyFactor=a}get samples(){return this._pathTracer.samples}get target(){return this._pathTracer.target}get tiles(){return this._pathTracer.tiles}get stableNoise(){return this._pathTracer.stableNoise}set stableNoise(a){this._pathTracer.stableNoise=a}get isCompiling(){return!!this._pathTracer.isCompiling}constructor(a){this._renderer=a,this._generator=new u_,this._pathTracer=new lv(a),this._queueReset=!1,this._clock=new MT,this._compilePromise=null,this._lowResPathTracer=new lv(a),this._lowResPathTracer.tiles.set(1,1),this._quad=new Ns(new M2({map:null,transparent:!0,blending:Pl,premultipliedAlpha:a.getContextAttributes().premultipliedAlpha})),this._materials=null,this._previousEnvironment=null,this._previousBackground=null,this._internalBackground=null,this.renderDelay=100,this.minSamples=5,this.fadeDuration=500,this.enablePathTracing=!0,this.pausePathTracing=!1,this.dynamicLowRes=!1,this.lowResScale=.25,this.renderScale=1,this.synchronizeRenderSize=!0,this.rasterizeScene=!0,this.renderToCanvas=!0,this.textureSize=new Re(1024,1024),this.rasterizeSceneCallback=(s,o)=>{this._renderer.render(s,o)},this.renderToCanvasCallback=(s,o,u)=>{const f=o.autoClear;o.autoClear=!1,u.render(o),o.autoClear=f},this.setScene(new Ch,new Zr)}setBVHWorker(a){this._generator.setBVHWorker(a)}setScene(a,s,o={}){a.updateMatrixWorld(!0),s.updateMatrixWorld();const u=this._generator;if(u.setObjects(a),this._buildAsync)return u.generateAsync(o.onProgress).then(f=>this._updateFromResults(a,s,f));{const f=u.generate();return this._updateFromResults(a,s,f)}}setSceneAsync(...a){this._buildAsync=!0;const s=this.setScene(...a);return this._buildAsync=!1,s}setCamera(a){this.camera=a,this.updateCamera()}updateCamera(){const a=this.camera;a.updateMatrixWorld(),this._pathTracer.setCamera(a),this._lowResPathTracer.setCamera(a),this.reset()}updateMaterials(){const a=this._pathTracer.material,s=this._renderer,o=this._materials,u=this.textureSize,f=B_(o);a.textures.setTextures(s,f,u.x,u.y),a.materials.updateFrom(o,f),this.reset()}updateLights(){const a=this.scene,s=this._renderer,o=this._pathTracer.material,u=L_(a),f=U_(u);o.lights.updateFrom(u,f),o.iesProfiles.setTextures(s,f),this.reset()}updateEnvironment(){const a=this.scene,s=this._pathTracer.material;if(this._internalBackground&&(this._internalBackground.dispose(),this._internalBackground=null),s.backgroundBlur=a.backgroundBlurriness,s.backgroundIntensity=a.backgroundIntensity??1,s.backgroundRotation.makeRotationFromEuler(a.backgroundRotation).invert(),a.background===null)s.backgroundMap=null,s.backgroundAlpha=0;else if(a.background.isColor){this._colorBackground=this._colorBackground||new Vv(16);const o=this._colorBackground;o.topColor.equals(a.background)||(o.topColor.set(a.background),o.bottomColor.set(a.background),o.update()),s.backgroundMap=o,s.backgroundAlpha=1}else if(a.background.isCubeTexture){if(a.background!==this._previousBackground){const o=new cv(this._renderer).generate(a.background);this._internalBackground=o,s.backgroundMap=o,s.backgroundAlpha=1}}else s.backgroundMap=a.background,s.backgroundAlpha=1;if(s.environmentIntensity=a.environment!==null?a.environmentIntensity??1:0,s.environmentRotation.makeRotationFromEuler(a.environmentRotation).invert(),this._previousEnvironment!==a.environment&&a.environment!==null)if(a.environment.isCubeTexture){const o=new cv(this._renderer).generate(a.environment);s.envMapInfo.updateFrom(o)}else s.envMapInfo.updateFrom(a.environment);this._previousEnvironment=a.environment,this._previousBackground=a.background,this.reset()}_updateFromResults(a,s,o){const{materials:u,geometry:f,bvh:c,bvhChanged:d,needsMaterialIndexUpdate:m}=o;this._materials=u;const b=this._pathTracer.material;return d&&(b.bvh.updateFrom(c),b.attributesArray.updateFrom(f.attributes.normal,f.attributes.tangent,f.attributes.uv,f.attributes.color)),m&&b.materialIndexAttribute.updateFrom(f.attributes.materialIndex),this._previousScene=a,this.scene=a,this.camera=s,this.updateCamera(),this.updateMaterials(),this.updateEnvironment(),this.updateLights(),o}renderSample(){const a=this._lowResPathTracer,s=this._pathTracer,o=this._renderer,u=this._clock,f=this._quad;this._updateScale(),this._queueReset&&(s.reset(),a.reset(),this._queueReset=!1,f.material.opacity=0,u.start());const c=u.getDelta()*1e3,d=u.getElapsedTime()*1e3;if(!this.pausePathTracing&&this.enablePathTracing&&this.renderDelay<=d&&!this.isCompiling&&s.update(),s.alpha=s.material.backgroundAlpha!==1||!D2(o),a.alpha=s.alpha,this.renderToCanvas){const m=this._renderer,y=this.minSamples;if(d>=this.renderDelay&&this.samples>=this.minSamples&&(this.fadeDuration!==0?f.material.opacity=Math.min(f.material.opacity+c/this.fadeDuration,1):f.material.opacity=1),!this.enablePathTracing||this.samples<y||f.material.opacity<1){if(this.dynamicLowRes&&!this.isCompiling){a.samples<1&&(a.material=s.material,a.update());const b=f.material.opacity;f.material.opacity=1-f.material.opacity,f.material.map=a.target.texture,f.render(m),f.material.opacity=b}(!this.dynamicLowRes&&this.rasterizeScene||this.dynamicLowRes&&this.isCompiling)&&this.rasterizeSceneCallback(this.scene,this.camera)}this.enablePathTracing&&f.material.opacity>0&&(f.material.opacity<1&&(f.material.blending=this.dynamicLowRes?RT:Tv),f.material.map=s.target.texture,this.renderToCanvasCallback(s.target,m,f),f.material.blending=Pl)}}reset(){this._queueReset=!0,this._pathTracer.samples=0}dispose(){this._quad.dispose(),this._quad.material.dispose(),this._pathTracer.dispose()}_updateScale(){if(this.synchronizeRenderSize){this._renderer.getDrawingBufferSize(xs);const a=Math.floor(this.renderScale*xs.x),s=Math.floor(this.renderScale*xs.y);if(this._pathTracer.getSize(xs),xs.x!==a||xs.y!==s){const o=this.lowResScale;this._pathTracer.setSize(a,s),this._lowResPathTracer.setSize(Math.floor(a*o),Math.floor(s*o))}}}}class N2{constructor(a,s,o,u=()=>{}){this.renderer=a,this.scene=s,this.camera=o,this.onStatus=u,this.enabled=!1,this.failed=!1,this.dirty=!0,this.lastMotion=performance.now(),this.lastMatrix=new Pe,this.lastProjection=new Pe,this.environment=new Vv(256),this.environment.topColor.set("#c6d4df"),this.environment.bottomColor.set("#8f9292"),this.environment.exponent=1,this.environment.update(),this.lastReported=-1}setEnabled(a){return this.failed&&a?!1:(this.enabled=a,this.dirty=!0,this.lastMotion=performance.now(),a?this.onStatus({enabled:!0,state:"preparing",samples:0}):(this.pathTracer?.reset(),this.onStatus({enabled:!1,state:"realtime",samples:0})),this.enabled)}invalidate(){this.dirty=!0,this.lastMotion=performance.now()}render(){if(!this.enabled||this.failed||(this.camera.updateMatrixWorld(),(!this.lastMatrix.equals(this.camera.matrixWorld)||!this.lastProjection.equals(this.camera.projectionMatrix))&&(this.lastMatrix.copy(this.camera.matrixWorld),this.lastProjection.copy(this.camera.projectionMatrix),this.lastMotion=performance.now(),this.pathTracer?.updateCamera(),this.pathTracer?.reset()),performance.now()-this.lastMotion<600))return!1;try{if(this.pathTracer||(this.pathTracer=new C2(this.renderer),this.pathTracer.bounces=7,this.pathTracer.filterGlossyFactor=.4,this.pathTracer.tiles.set(2,2),this.pathTracer.textureSize.set(512,512),this.pathTracer.renderScale=Math.min(.85,1/Math.max(window.devicePixelRatio||1,1)),this.pathTracer.minSamples=32,this.pathTracer.fadeDuration=1200,this.pathTracer.dynamicLowRes=!1,this.pathTracer.lowResScale=.2),this.dirty){const o=this.scene.environment;this.scene.environment=this.environment,this.pathTracer.setScene(this.scene,this.camera),this.scene.environment=o,this.dirty=!1}this.pathTracer.renderSample();const s=Math.floor(this.pathTracer.samples);return s!==this.lastReported&&(this.lastReported=s,this.onStatus({enabled:!0,state:"tracing",samples:s})),!0}catch(s){return console.warn("Fine lighting could not start; realtime rendering remains available.",s.message),this.failed=!0,this.enabled=!1,this.onStatus({enabled:!1,state:"unavailable",samples:0}),!1}}inspect(){return{enabled:this.enabled,failed:this.failed,samples:this.pathTracer?.samples||0,dirty:this.dirty}}dispose(){this.pathTracer?.dispose(),this.environment.dispose()}}const oh={walls:["WALL_","Walls","WALLS_","wall_"],ceilings:["CEILING_","Ceiling","ROOF_","ceiling_"],schemeA:["SCHEME_A_","SchemeA","scheme_a_"],schemeB:["SCHEME_B_","SchemeB","scheme_b_"]};class O2{constructor(a,s,o){this.container=a,this.onStatus=s,this.onChange=o,this.config={},this.settings={walls:!0,ceilings:!1,scheme:"A"},this.scene=new Ch,this.scene.background=new jt("#ffffff"),this.camera=new Zr(40,1,.05,500),this.camera.position.set(32,34,42);try{this.renderer=new DT({antialias:!0,alpha:!1,powerPreference:"high-performance"})}catch{throw new Error("这个浏览器暂时无法开启 3D 显示。请使用支持 WebGL 的浏览器重新打开。")}this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.8)),this.renderer.outputColorSpace=Ds,this.renderer.toneMapping=CT,this.renderer.toneMappingExposure=.07,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=NT,this.renderer.domElement.setAttribute("aria-label","青海文学馆三维模型；拖拽旋转，滚轮或双指缩放"),this.renderer.domElement.setAttribute("role","img"),this.renderer.domElement.addEventListener("webglcontextlost",c=>{c.preventDefault(),s({state:"error",message:"3D 显示已暂停。请刷新页面重新加载。"})}),a.appendChild(this.renderer.domElement),this.controls=new xx(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.08,this.controls.minDistance=.8,this.controls.maxDistance=130,this.controls.maxPolarAngle=Math.PI/2-.02,this.controls.screenSpacePanning=!0,this.controls.target.set(0,0,0),this.controls.addEventListener("start",()=>{this.flight=null}),this.scene.add(new OT(16777215,13158338,.9));const u=new ch(16777215,1.8);u.position.set(18,38,18),u.castShadow=!0,u.shadow.mapSize.set(2048,2048),u.shadow.camera.left=u.shadow.camera.bottom=-34,u.shadow.camera.right=u.shadow.camera.top=34,u.shadow.camera.near=.5,u.shadow.camera.far=100,u.shadow.bias=-15e-5,u.shadow.normalBias=.05,this.scene.add(u),this.keyLight=u;const f=new ch(16775404,.45);f.position.set(-20,15,-20),this.scene.add(f),this.pmrem=new zT(this.renderer),this.environment=this.pmrem.fromScene(new Ux,.04),this.scene.environment=this.environment.texture,this.scene.environmentIntensity=.35,this.progressive=new N2(this.renderer,this.scene,this.camera,c=>this.onChange({lighting:c})),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(a),this.resize(),this.animate=this.animate.bind(this),this.animate(),this.lastFrameTime=performance.now(),this.inspect=()=>({loaded:!!this.model,meshCount:this.meshCount||0,camera:this.camera.position.toArray(),direction:this.camera.getWorldDirection(new Q).toArray(),fov:this.camera.fov,target:this.controls.target.toArray(),progressive:this.progressive?.inspect(),firstPerson:this.walkControls?.active||!1,locked:document.pointerLockElement===this.renderer.domElement,lastKey:this.walkControls?.lastKey,blockedSteps:this.walkControls?.blockedSteps||0,colliderCount:this.walkControls?.colliders.length||0,eyeHeight:this.walkControls?.eyeHeight||1.65,settings:{...this.settings},view:this.activeView||"overview",capabilities:this.capabilities||{},modelBounds:this.bounds?{min:this.bounds.min.toArray(),max:this.bounds.max.toArray()}:null,visibleByCategory:this.model?Object.fromEntries(Object.keys(oh).map(c=>[c,this.countCategory(c)])):{}})}async load(){this.onStatus({state:"loading",message:"正在读取展馆模型"});try{const a=new URL("./",window.location.href),s=await fetch(new URL("models/view-config.json",a));if(s.ok&&s.headers.get("content-type")?.includes("application/json"))this.config=await s.json();else if(!s.ok&&s.status!==404)throw new Error("视图配置读取失败");const o=new FT,u=this.config.modelUrl||"models/museum.glb",f=new URL(u.replace(/^\/+/,""),a).href,c=await o.loadAsync(f,m=>{this.onStatus({state:"loading",message:"正在读取展馆模型",progress:m.total?Math.round(m.loaded/m.total*100):null})});if(this.disposed)return;this.model=c.scene,this.meshCount=0,this.model.traverse(m=>{if(!m.isMesh)return;this.meshCount+=1,m.castShadow=!0,m.receiveShadow=!0;const y=Array.isArray(m.material)?m.material:[m.material];for(const b of y)b.map&&(b.map.anisotropy=Math.min(8,this.renderer.capabilities.getMaxAnisotropy()))}),this.preparingShaders=!0,this.scene.add(this.model),this.bounds=new Dt().setFromObject(this.model),this.center=this.bounds.getCenter(new Q);const d=this.bounds.getSize(new Q);this.modelSize=Math.max(d.x,d.z,d.y),this.controls.maxDistance=this.modelSize*3,this.camera.far=this.modelSize*10,this.camera.updateProjectionMatrix(),this.keyLight.target.position.copy(this.center),this.scene.add(this.keyLight.target),this.capabilities=Object.fromEntries(Object.keys(oh).map(m=>[m,this.hasCategory(m)])),this.walkControls=new Hx(this.camera,this.renderer.domElement,this.model,{...this.config,defaultBounds:{min:this.bounds.min.toArray(),max:this.bounds.max.toArray()}},m=>{if(m.jumpRoom!==void 0){const y=this.config.rooms?.[m.jumpRoom];y&&(this.room(y.id),this.onChange({selectedRoom:y.id}))}m.firstPerson===!1&&(this.controls.enabled=!0,this.controls.maxPolarAngle=Math.PI-.08,this.controls.target.copy(this.camera.position).addScaledVector(this.camera.getWorldDirection(new Q),4),this.controls.update()),this.onChange(m)});for(const m of this.config.lights||[]){const y=new wh(m.color||"#fff1d6",m.intensity||12,m.distance||9,2);y.position.set(...m.position),this.scene.add(y)}if(this.applyVisibility(),this.overview(!1),this.onStatus({state:"loading",message:"正在准备灯光与材质"}),this.renderer.compileAsync&&await this.renderer.compileAsync(this.scene,this.camera),this.preparingShaders=!1,this.disposed)return;this.onChange({config:this.config,capabilities:this.capabilities}),this.onStatus({state:"ready",message:"模型已载入"})}catch(a){this.preparingShaders=!1,console.error("Museum model could not be loaded",a),this.onStatus({state:"error",message:"展馆模型暂时未能载入。请检查网络后重试，或稍后重新打开链接。"})}}isCategory(a,s){const o=this.config.visibility?.[s],u=Array.isArray(o)&&o.length?o:oh[s];let f=a;for(;f&&f!==this.scene;){if(u.some(c=>f.name.startsWith(c))||f.userData?.category===s)return!0;f=f.parent}return!1}hasCategory(a){let s=!1;return this.model.traverse(o=>{o.isMesh&&this.isCategory(o,a)&&(s=!0)}),s}countCategory(a){let s=0,o=0;return this.model.traverse(u=>{if(!u.isMesh||!this.isCategory(u,a))return;s+=1;let f=u,c=!0;for(;f&&f!==this.scene;)f.visible||(c=!1),f=f.parent;c&&(o+=1)}),{total:s,visible:o}}applyVisibility(a){Object.assign(this.settings,a||{}),this.progressive?.invalidate(),this.model&&this.model.traverse(s=>{if(!s.isMesh)return;let o=!0;this.isCategory(s,"walls")&&(o=o&&this.settings.walls),this.isCategory(s,"ceilings")&&(o=o&&this.settings.ceilings),this.isCategory(s,"schemeA")&&(o=o&&this.settings.scheme==="A"),this.isCategory(s,"schemeB")&&(o=o&&this.settings.scheme==="B"),s.visible=o})}frameBounds(a,s=1.12){const o=a.getCenter(new Q),u=new Q(.63,.85,.9).normalize(),f=new Q(u.z,0,-u.x).normalize(),c=u.clone().cross(f).normalize(),d=Math.tan(Qr.degToRad(40)/2),m=d*this.camera.aspect;let y=0;for(const b of[a.min.x,a.max.x])for(const v of[a.min.y,a.max.y])for(const p of[a.min.z,a.max.z]){const S=new Q(b,v,p).sub(o),_=S.dot(u);y=Math.max(y,Math.abs(S.dot(f))/m+_,Math.abs(S.dot(c))/d+_)}return{position:o.clone().addScaledVector(u,y*s).toArray(),target:o.toArray()}}overview(a=!0){if(!this.model)return;this.walkControls?.disable(),this.activeView="overview";const s=this.config.overview||this.frameBounds(this.bounds,1.14),o=this.camera.aspect<1.5?this.frameBounds(this.bounds,1.1):s;this.goTo(o,a)}room(a,s=!1){const o=this.config.rooms?.find(f=>f.id===a);if(!o)return;if(this.walkControls?.active){this.flight=null,this.walkControls.setView(o.enter),this.activeView=`walk:${a}`;return}this.activeView=s?`interior:${a}`:a;let u=o;if(s)if(o.enter)u=o.enter;else{const f=o.target||[0,0,0],c=o.bounds,d=c?c.min[1]+1.65:1.65,m=c?Math.min((c.max[2]-c.min[2])*.32,4):3;u={position:[f[0],d,f[2]+m],target:[f[0],d,f[2]-2]}}else!u.position&&o.bounds&&(u=this.frameBounds(new Dt(new Q(...o.bounds.min),new Q(...o.bounds.max)),1.1));u.position&&u.target&&this.goTo(u,!0,s)}startWalk(a){const s=this.config.rooms?.find(o=>o.id===a)||this.config.rooms?.[0];!s?.enter||!this.walkControls||(this.flight=null,this.controls.enabled=!1,this.applyVisibility({ceilings:!0}),this.activeView=`walk:${s.id}`,this.walkControls.enable(s.enter),this.walkControls.mobile||this.progressive.setEnabled(!0))}fineLighting(a){return this.progressive?.setEnabled(a)}endWalk(){this.walkControls?.disable()}joystick(a,s){this.walkControls&&(this.walkControls.joystick={x:a,y:s})}goTo(a,s,o=!1){if(!a?.position||!a?.target)return;this.controls.maxPolarAngle=o?Math.PI-.08:Math.PI/2-.02,this.camera.fov=o?a.fov||60:40,this.camera.updateProjectionMatrix();const u=new Q(...a.position),f=new Q(...a.target);if(!s||window.matchMedia("(prefers-reduced-motion: reduce)").matches){this.flight=null,this.camera.position.copy(u),this.controls.target.copy(f),this.controls.update();return}this.flight={start:performance.now(),from:this.camera.position.clone(),targetFrom:this.controls.target.clone(),to:u,targetTo:f,duration:1e3}}resize(){const{width:a,height:s}=this.container.getBoundingClientRect();!a||!s||(this.camera.aspect=a/s,this.camera.updateProjectionMatrix(),this.renderer.setSize(a,s),this.progressive?.invalidate(),this.model&&this.activeView==="overview"&&this.overview(!1))}animate(){if(this.disposed)return;if(this.frame=requestAnimationFrame(this.animate),document.hidden||this.preparingShaders){this.lastFrameTime=performance.now();return}if(this.flight){const s=Math.min((performance.now()-this.flight.start)/this.flight.duration,1),o=s<.5?4*s**3:1-(-2*s+2)**3/2;this.camera.position.lerpVectors(this.flight.from,this.flight.to,o),this.controls.target.lerpVectors(this.flight.targetFrom,this.flight.targetTo,o),s>=1&&(this.flight=null)}const a=performance.now();this.walkControls?.update((a-this.lastFrameTime)/1e3),this.lastFrameTime=a,this.controls.enabled&&this.controls.update(),this.progressive.render()||this.renderer.render(this.scene,this.camera)}dispose(){this.disposed=!0,cancelAnimationFrame(this.frame),this.resizeObserver.disconnect(),this.walkControls?.dispose(),this.controls.dispose(),this.progressive?.dispose(),this.environment.dispose(),this.pmrem.dispose(),this.model?.traverse(a=>{if(!a.isMesh)return;a.geometry.dispose(),(Array.isArray(a.material)?a.material:[a.material]).forEach(o=>{for(const u of Object.values(o))u?.isTexture&&u.dispose();o.dispose()})}),this.renderer.dispose(),this.renderer.domElement.remove()}}function ba({name:h,size:a=18}){const s={expand:k.createElement(k.Fragment,null,k.createElement("path",{d:"M8 3H3v5M16 3h5v5M3 16v5h5M21 16v5h-5"})),reset:k.createElement(k.Fragment,null,k.createElement("path",{d:"M3 10a9 9 0 1 1 1.8 8.1M3 4v6h6"})),enter:k.createElement(k.Fragment,null,k.createElement("path",{d:"M14 3h6v18h-6M3 12h12m-4-4 4 4-4 4"})),wall:k.createElement(k.Fragment,null,k.createElement("path",{d:"M3 20V4h18v16M3 12h18M9 4v8m6 0v8"})),ceiling:k.createElement(k.Fragment,null,k.createElement("path",{d:"m3 9 9-6 9 6-9 6-9-6Zm0 6 9 6 9-6"})),chevron:k.createElement("path",{d:"m8 10 4 4 4-4"}),light:k.createElement(k.Fragment,null,k.createElement("circle",{cx:"12",cy:"12",r:"3.7"}),k.createElement("path",{d:"M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5"})),close:k.createElement("path",{d:"m6 6 12 12M6 18 18 6"}),overview:k.createElement(k.Fragment,null,k.createElement("path",{d:"m3 7 9-4 9 4v10l-9 4-9-4V7Zm0 0 9 4 9-4M12 11v10"}))};return k.createElement("svg",{width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true"},s[h])}function z2({onMove:h}){const[a,s]=qe.useState({x:0,y:0}),o=qe.useRef(null);function u(c){if(o.current!==c.pointerId)return;const d=c.currentTarget.getBoundingClientRect();let m=(c.clientX-d.left-d.width/2)/30,y=(c.clientY-d.top-d.height/2)/30;const b=Math.hypot(m,y);b>1&&(m/=b,y/=b),s({x:m*26,y:y*26}),h(m,y)}function f(){o.current=null,s({x:0,y:0}),h(0,0)}return k.createElement("div",{className:"joystick",role:"application","aria-label":"行走摇杆",onPointerDown:c=>{c.preventDefault(),o.current=c.pointerId,c.currentTarget.setPointerCapture(c.pointerId),u(c)},onPointerMove:u,onPointerUp:f,onPointerCancel:f},k.createElement("span",{className:"joystick-knob",style:{transform:`translate(${a.x}px, ${a.y}px)`}}),k.createElement("span",{className:"joystick-caption"},"行走"))}function Pr({icon:h,children:a,pressed:s,...o}){return k.createElement("button",{className:`tool-button ${s?"is-pressed":""}`,"aria-pressed":s,...o},k.createElement(ba,{name:h}),k.createElement("span",null,a))}function U2(){const h=qe.useRef(null),a=qe.useRef(null),s=qe.useRef(null),[o,u]=qe.useState({state:"loading",message:"正在准备展馆"}),[f,c]=qe.useState({rooms:[]}),[d,m]=qe.useState({}),[y,b]=qe.useState("overview"),[v,p]=qe.useState(!1),[S,_]=qe.useState(!0),[C,x]=qe.useState(!1),[w,M]=qe.useState("A"),[A,R]=qe.useState(!1),[D,H]=qe.useState(!1),[O,j]=qe.useState(""),[V,Y]=qe.useState(!1),[Z,G]=qe.useState(!1),[K,J]=qe.useState({enabled:!1,state:"realtime"}),ee=o.state==="ready",X=f.rooms||[],ne=X.find(oe=>oe.id===y);qe.useEffect(()=>{try{a.current=new O2(h.current,u,he=>{he.config&&c(he.config),he.capabilities&&m(he.capabilities),he.firstPerson!==void 0&&(Y(he.firstPerson),he.firstPerson||p(!0)),he.locked!==void 0&&G(he.locked),he.lighting&&J(he.lighting),he.selectedRoom&&b(he.selectedRoom)}),a.current.load(),window.__museumViewer={inspect:()=>a.current?.inspect()}}catch(he){u({state:"error",message:he.message})}const oe=()=>H(!!document.fullscreenElement);return document.addEventListener("fullscreenchange",oe),()=>{a.current?.dispose(),delete window.__museumViewer,document.removeEventListener("fullscreenchange",oe)}},[]);function ie(oe){b(oe),p(!1);const he=V&&oe!=="overview";x(he),a.current?.applyVisibility({ceilings:he}),oe==="overview"?a.current?.overview():a.current?.room(oe)}function ue(){a.current?.endWalk();const oe=y==="overview"?X[0]?.id:y;oe&&(b(oe),p(!0),x(!!d.ceilings),a.current?.applyVisibility({ceilings:!!d.ceilings}),a.current?.room(oe,!0))}function ge(){const oe=y==="overview"?X[0]?.id:y;oe&&(b(oe),x(!0),a.current?.startWalk(oe))}function We(){b("overview"),p(!1),_(!0),x(!1),M("A"),a.current?.applyVisibility({walls:!0,ceilings:!1,scheme:"A"}),a.current?.overview()}async function Yt(){try{document.fullscreenElement?await document.exitFullscreen():s.current.requestFullscreen?await s.current.requestFullscreen():(j("这个浏览器不支持全屏；可横屏查看空间。"),window.setTimeout(()=>j(""),4e3))}catch{j("全屏暂时不可用；可横屏查看空间。"),window.setTimeout(()=>j(""),4e3)}}return k.createElement("main",{className:`museum-app ${V?"is-walking":""}`,ref:s},k.createElement("header",{className:"app-header"},k.createElement("div",{className:"identity"},k.createElement("h1",null,f.title||"青海文学馆"),k.createElement("p",null,f.subtitle||"空间复原 · 交互浏览")),k.createElement("div",{className:"header-actions"},k.createElement("nav",{className:"project-links","aria-label":"天佑德项目导航"},k.createElement("a",{href:"../projects/"},"天佑德项目"),k.createElement("a",{href:"../digital-campus/#building"},"数字酒厂")),k.createElement("button",{className:"fullscreen-button","aria-label":D?"退出全屏":"全屏",onClick:Yt},k.createElement(ba,{name:"expand"}),k.createElement("span",null,D?"退出全屏":"全屏")))),k.createElement("div",{className:"workspace"},k.createElement("nav",{className:"space-nav","aria-label":"空间导航"},k.createElement("h2",null,"空间导航"),k.createElement("div",{className:"room-list"},k.createElement("button",{className:`room-button ${y==="overview"?"selected":""}`,"aria-current":y==="overview"?"true":void 0,onClick:()=>ie("overview"),disabled:!ee},k.createElement("span",{className:"room-number"},k.createElement(ba,{name:"overview",size:15})),k.createElement("span",null,"全馆总览")),X.map((oe,he)=>k.createElement("button",{key:oe.id,className:`room-button ${y===oe.id?"selected":""}`,"aria-current":y===oe.id?"true":void 0,onClick:()=>ie(oe.id),disabled:!ee},k.createElement("span",{className:"room-number"},String(he+1).padStart(2,"0")),k.createElement("span",null,oe.label)))),k.createElement("div",{className:"space-detail"},k.createElement("div",{className:"detail-rule"}),k.createElement("p",{className:"selected-space"},y==="overview"?"全馆总览":ne?.label),k.createElement("p",{className:"space-description"},y==="overview"?"从整体布局开始，选择展区近距离浏览。":ne?.description||"选择进入空间，以人视角查看展陈。"),k.createElement("button",{className:"enter-button",onClick:v?()=>ie(y):ue,disabled:!ee||!X.length||V},k.createElement("span",null,v?"返回俯览":"人视角查看"),k.createElement(ba,{name:"enter"})),k.createElement("button",{className:"walk-button",onClick:V?()=>a.current?.endWalk():ge,disabled:!ee||!X.length},k.createElement(ba,{name:"enter"}),k.createElement("span",null,V?"退出漫游":"第一人称漫游")))),k.createElement("section",{className:"viewport","aria-label":"三维展馆"},k.createElement("div",{className:"canvas-mount",ref:h}),k.createElement("div",{className:"viewport-toolbar","aria-label":"模型显示控制"},k.createElement(Pr,{icon:"wall",pressed:S,disabled:!ee||!d.walls,onClick:()=>{_(!S),a.current?.applyVisibility({walls:!S})}},"墙面"),k.createElement(Pr,{icon:"ceiling",pressed:C,disabled:!ee||!d.ceilings,onClick:()=>{x(!C),a.current?.applyVisibility({ceilings:!C})}},"顶面"),k.createElement("span",{className:"toolbar-divider"}),k.createElement(Pr,{icon:"reset",disabled:!ee,onClick:We},"重置"),k.createElement("span",{className:"toolbar-divider"}),k.createElement(Pr,{icon:"light",pressed:K.enabled,disabled:!ee||K.state==="unavailable",onClick:()=>a.current?.fineLighting(!K.enabled)},"精细光照")),k.createElement("div",{className:"viewport-bottom"},k.createElement("div",{className:"scheme-controls","aria-label":"雕塑方案选择"},["A","B"].map(oe=>k.createElement("button",{key:oe,disabled:!ee||!d[`scheme${oe}`],className:w===oe?"active":"","aria-pressed":w===oe,onClick:()=>{M(oe),a.current?.applyVisibility({scheme:oe})}},"方案 ",oe))),k.createElement("p",{className:"gesture-hint"},k.createElement("span",{className:"desktop-hint"},V?"WASD / 方向键行走 · 鼠标转头":"拖拽旋转 · 滚轮缩放"),k.createElement("span",{className:"mobile-hint"},V?"右侧滑动转头":"单指旋转 · 双指缩放"))),(K.enabled||K.state==="unavailable")&&k.createElement("p",{className:"lighting-status"},K.state==="unavailable"?"精细光照暂不可用，已保留实时显示":K.state==="tracing"?"精细光照正在细化":"移动时实时显示，停下后细化"),V&&k.createElement(k.Fragment,null,k.createElement("div",{className:"walk-status"},k.createElement("span",null,"第一人称 · 人高 1.65m"),k.createElement("span",{className:"desktop-hint"},Z?"1–9 切换空间 · Esc 退出":"拖动转头，WASD 行走 · Esc 退出"),k.createElement("button",{onClick:()=>a.current?.endWalk()},"退出")),k.createElement(z2,{onMove:(oe,he)=>a.current?.joystick(oe,he)})),o.state!=="ready"&&k.createElement("div",{className:`loading-overlay ${o.state==="error"?"has-error":""}`,role:"status","aria-live":"polite"},k.createElement("div",{className:"loading-inner"},o.state==="loading"&&k.createElement("div",{className:"loader"}),k.createElement("p",null,o.message),o.progress!=null&&k.createElement("span",{className:"loading-progress"},o.progress,"%"),o.state==="error"&&k.createElement("button",{onClick:()=>window.location.reload()},"重新加载"))),O&&k.createElement("div",{className:"notice",role:"status"},O))),k.createElement("footer",{className:"app-footer"},k.createElement("p",null,"模型依据 ",f.source?.date||"2026.06.25"," 汇报方案"),k.createElement("button",{className:"source-toggle","aria-expanded":A,onClick:()=>R(!A)},"来源与复原说明",k.createElement(ba,{name:"chevron",size:15}))),A&&k.createElement("section",{className:"source-panel","aria-label":"来源与复原说明"},k.createElement("div",null,k.createElement("h2",null,"来源与复原说明"),k.createElement("p",null,f.source?.title||"《【汇报】青海文学馆2026.6.25》"),f.source?.pages&&k.createElement("p",{className:"source-pages"},"参考页码：",Array.isArray(f.source.pages)?f.source.pages.join("、"):f.source.pages),k.createElement("ul",null,(f.source?.notes||["根据室内平面与效果图建立展陈空间；模型用于空间浏览与方案复核。","未提供的尺寸、细部构造与材质按视觉资料近似复原，施工精度尚未核实。","资料未提供建筑外观；查看页展示室内展陈模型。"]).map((oe,he)=>k.createElement("li",{key:he},oe)))),k.createElement("button",{className:"source-close","aria-label":"关闭来源说明",onClick:()=>R(!1)},k.createElement(ba,{name:"close"}))))}IT.createRoot(document.getElementById("root")).render(k.createElement(U2,null));
