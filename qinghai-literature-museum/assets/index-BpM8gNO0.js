import{r as gv,g as j1,a as Y1}from"./react-D-vXKkXw.js";import{B as zn,a as ct,T as k1,b as ch,c as vv,L as X1,d as Il,F as yv,M as Nn,V as Re,C as Pt,e as Jn,S as Cs,f as K1,P as Mh,D as uh,g as Pe,h as Q,I as bv,Q as Pl,i as Z1,O as Wo,j as Q1,k as W1,l as J1,m as Tv,N as $1,n as eT,o as tT,p as Et,q as Le,R as pn,r as nT,s as $n,t as iT,u as Ff,v as aT,w as Xo,x as Rh,y as As,z as sT,A as lT,E as nn,G as rT,H as oT,J as cT,K as uT,U as Fl,W as Jo,X as jl,Y as xv,Z as fT,_ as hT,$ as dT,a0 as mT,a1 as Sv,a2 as pT,a3 as fg,a4 as hg,a5 as dg,a6 as mg,a7 as pg,a8 as Ko,a9 as gT,aa as Rt,ab as vT,ac as yT,ad as Ms,ae as ws,af as fh,ag as bT,ah as Ch,ai as Dh,aj as TT,ak as Oh,al as xT,am as ST,an as _T,ao as ei,ap as Ss,aq as _v,ar as Gl,as as ln,at as Gf,au as ut,av as hh,aw as AT,ax as gg,ay as wT,az as tt,aA as dh,aB as Av,aC as ET,aD as wv,aE as Zo,aF as MT,aG as Ds,aH as vg,aI as $o,aJ as Yl,aK as Vl,aL as Wn,aM as On,aN as RT,aO as CT,aP as DT,aQ as OT,aR as Ev,aS as Mv,aT as zT,aU as NT,aV as BT,aW as UT,aX as LT,aY as HT,aZ as IT,a_ as FT}from"./three-jryb65go.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))r(c);new MutationObserver(c=>{for(const f of c)if(f.type==="childList")for(const u of f.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function s(c){const f={};return c.integrity&&(f.integrity=c.integrity),c.referrerPolicy&&(f.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?f.credentials="include":c.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function r(c){if(c.ep)return;c.ep=!0;const f=s(c);fetch(c.href,f)}})();var Ge=gv();const k=j1(Ge);var Vf={exports:{}},Ml={},qf={exports:{}},Pf={};var yg;function GT(){return yg||(yg=1,(function(h){function a(X,ne){var ie=X.length;X.push(ne);e:for(;0<ie;){var ue=ie-1>>>1,pe=X[ue];if(0<c(pe,ne))X[ue]=ne,X[ie]=pe,ie=ue;else break e}}function s(X){return X.length===0?null:X[0]}function r(X){if(X.length===0)return null;var ne=X[0],ie=X.pop();if(ie!==ne){X[0]=ie;e:for(var ue=0,pe=X.length,se=pe>>>1;ue<se;){var ye=2*(ue+1)-1,ni=X[ye],jt=ye+1,Ct=X[jt];if(0>c(ni,ie))jt<pe&&0>c(Ct,ni)?(X[ue]=Ct,X[jt]=ie,ue=jt):(X[ue]=ni,X[ye]=ie,ue=ye);else if(jt<pe&&0>c(Ct,ie))X[ue]=Ct,X[jt]=ie,ue=jt;else break e}}return ne}function c(X,ne){var ie=X.sortIndex-ne.sortIndex;return ie!==0?ie:X.id-ne.id}if(h.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;h.unstable_now=function(){return f.now()}}else{var u=Date,m=u.now();h.unstable_now=function(){return u.now()-m}}var d=[],g=[],b=1,v=null,p=3,x=!1,_=!1,w=!1,T=!1,M=typeof setTimeout=="function"?setTimeout:null,R=typeof clearTimeout=="function"?clearTimeout:null,A=typeof setImmediate<"u"?setImmediate:null;function C(X){for(var ne=s(g);ne!==null;){if(ne.callback===null)r(g);else if(ne.startTime<=X)r(g),ne.sortIndex=ne.expirationTime,a(d,ne);else break;ne=s(g)}}function D(X){if(w=!1,C(X),!_)if(s(d)!==null)_=!0,H||(H=!0,G());else{var ne=s(g);ne!==null&&te(D,ne.startTime-X)}}var H=!1,z=-1,j=5,V=-1;function Y(){return T?!0:!(h.unstable_now()-V<j)}function K(){if(T=!1,H){var X=h.unstable_now();V=X;var ne=!0;try{e:{_=!1,w&&(w=!1,R(z),z=-1),x=!0;var ie=p;try{t:{for(C(X),v=s(d);v!==null&&!(v.expirationTime>X&&Y());){var ue=v.callback;if(typeof ue=="function"){v.callback=null,p=v.priorityLevel;var pe=ue(v.expirationTime<=X);if(X=h.unstable_now(),typeof pe=="function"){v.callback=pe,C(X),ne=!0;break t}v===s(d)&&r(d),C(X)}else r(d);v=s(d)}if(v!==null)ne=!0;else{var se=s(g);se!==null&&te(D,se.startTime-X),ne=!1}}break e}finally{v=null,p=ie,x=!1}ne=void 0}}finally{ne?G():H=!1}}}var G;if(typeof A=="function")G=function(){A(K)};else if(typeof MessageChannel<"u"){var Z=new MessageChannel,W=Z.port2;Z.port1.onmessage=K,G=function(){W.postMessage(null)}}else G=function(){M(K,0)};function te(X,ne){z=M(function(){X(h.unstable_now())},ne)}h.unstable_IdlePriority=5,h.unstable_ImmediatePriority=1,h.unstable_LowPriority=4,h.unstable_NormalPriority=3,h.unstable_Profiling=null,h.unstable_UserBlockingPriority=2,h.unstable_cancelCallback=function(X){X.callback=null},h.unstable_forceFrameRate=function(X){0>X||125<X?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<X?Math.floor(1e3/X):5},h.unstable_getCurrentPriorityLevel=function(){return p},h.unstable_next=function(X){switch(p){case 1:case 2:case 3:var ne=3;break;default:ne=p}var ie=p;p=ne;try{return X()}finally{p=ie}},h.unstable_requestPaint=function(){T=!0},h.unstable_runWithPriority=function(X,ne){switch(X){case 1:case 2:case 3:case 4:case 5:break;default:X=3}var ie=p;p=X;try{return ne()}finally{p=ie}},h.unstable_scheduleCallback=function(X,ne,ie){var ue=h.unstable_now();switch(typeof ie=="object"&&ie!==null?(ie=ie.delay,ie=typeof ie=="number"&&0<ie?ue+ie:ue):ie=ue,X){case 1:var pe=-1;break;case 2:pe=250;break;case 5:pe=1073741823;break;case 4:pe=1e4;break;default:pe=5e3}return pe=ie+pe,X={id:b++,callback:ne,priorityLevel:X,startTime:ie,expirationTime:pe,sortIndex:-1},ie>ue?(X.sortIndex=ie,a(g,X),s(d)===null&&X===s(g)&&(w?(R(z),z=-1):w=!0,te(D,ie-ue))):(X.sortIndex=pe,a(d,X),_||x||(_=!0,H||(H=!0,G()))),X},h.unstable_shouldYield=Y,h.unstable_wrapCallback=function(X){var ne=p;return function(){var ie=p;p=ne;try{return X.apply(this,arguments)}finally{p=ie}}}})(Pf)),Pf}var bg;function VT(){return bg||(bg=1,qf.exports=GT()),qf.exports}var Tg;function qT(){if(Tg)return Ml;Tg=1;var h=VT(),a=gv(),s=Y1();function r(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function f(e){for(var t=e,n=t;n&&!n.alternate;)t=n,(t.flags&4098)!==0&&(e=t.return),n=t.return;for(;t.return;)t=t.return;return t.tag===3?e:null}function u(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function m(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function d(e){if(f(e)!==e)throw Error(r(188))}function g(e){var t=e.alternate;if(!t){if(t=f(e),t===null)throw Error(r(188));return t!==e?null:e}for(var n=e,i=t;;){var l=n.return;if(l===null)break;var o=l.alternate;if(o===null){if(i=l.return,i!==null){n=i;continue}break}if(l.child===o.child){for(o=l.child;o;){if(o===n)return d(l),e;if(o===i)return d(l),t;o=o.sibling}throw Error(r(188))}if(n.return!==i.return)n=l,i=o;else{for(var y=!1,S=l.child;S;){if(S===n){y=!0,n=l,i=o;break}if(S===i){y=!0,i=l,n=o;break}S=S.sibling}if(!y){for(S=o.child;S;){if(S===n){y=!0,n=o,i=l;break}if(S===i){y=!0,i=o,n=l;break}S=S.sibling}if(!y)throw Error(r(189))}}if(n.alternate!==i)throw Error(r(190))}if(n.tag!==3)throw Error(r(188));return n.stateNode.current===n?e:t}function b(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=b(e),t!==null)return t;e=e.sibling}return null}function v(e,t,n,i,l,o){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&n(e,i,l,o)||(e.tag!==22||e.memoizedState===null)&&(t||e.tag!==5&&e.tag!==27)&&v(e.child,t,n,i,l,o))return!0;e=e.sibling}return!1}function p(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function x(e){var t=!1;for(e=e.return;e!==null&&(e.tag===4&&(t=!0),!(e.tag===3||e.tag===5||e.tag===27));)e=e.return;return t}function _(e){var t=[null,null],n=p(e);return n===null||w(t,e,n.child,{foundSelf:!1}),t}function w(e,t,n,i){for(;n!==null;){if(n===t)i.foundSelf=!0;else if(n.tag===5||n.tag===27||n.tag===6){if(i.foundSelf)return e[1]=n,!0;e[0]=n}else if((n.tag!==22||n.memoizedState===null)&&w(e,t,n.child,i))return!0;n=n.sibling}return!1}function T(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(r(559))}}var M=null,R=null;function A(e,t,n){return e===n?!0:e===t?(M=e,!0):!1}function C(e,t,n){return e===n?(R=e,!1):e===t?(R!==null&&(M=e),!0):!1}function D(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function H(e,t,n){for(var i=0,l=e;l;l=n(l))i++;l=0;for(var o=t;o;o=n(o))l++;for(;0<i-l;)e=n(e),i--;for(;0<l-i;)t=n(t),l--;for(;i--;){if(e===t||t!==null&&e===t.alternate)return e;e=n(e),t=n(t)}return null}var z=Object.assign,j=Symbol.for("react.element"),V=Symbol.for("react.transitional.element"),Y=Symbol.for("react.portal"),K=Symbol.for("react.fragment"),G=Symbol.for("react.strict_mode"),Z=Symbol.for("react.profiler"),W=Symbol.for("react.consumer"),te=Symbol.for("react.context"),X=Symbol.for("react.forward_ref"),ne=Symbol.for("react.suspense"),ie=Symbol.for("react.suspense_list"),ue=Symbol.for("react.memo"),pe=Symbol.for("react.lazy"),se=Symbol.for("react.activity"),ye=Symbol.for("react.legacy_hidden"),ni=Symbol.for("react.memo_cache_sentinel"),jt=Symbol.for("react.view_transition"),Ct=Symbol.for("react.recoverable"),kl=Symbol.iterator;function Fi(e){return e===null||typeof e!="object"?null:(e=kl&&e[kl]||e["@@iterator"],typeof e=="function"?e:null)}var nc=Symbol.for("react.client.reference");function zs(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===nc?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case K:return"Fragment";case Z:return"Profiler";case G:return"StrictMode";case ne:return"Suspense";case ie:return"SuspenseList";case se:return"Activity";case jt:return"ViewTransition"}if(typeof e=="object")switch(e.$$typeof){case Y:return"Portal";case te:return e.displayName||"Context";case W:return(e._context.displayName||"Context")+".Consumer";case X:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ue:return t=e.displayName||null,t!==null?t:zs(e.type)||"Memo";case pe:t=e._payload,e=e._init;try{return zs(e(t))}catch{}}return null}var Gi=Array.isArray,le=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,be=s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Vi={pending:!1,data:null,method:null,action:null},ic=[],Ta=-1;function vn(e){return{current:e}}function nt(e){0>Ta||(e.current=ic[Ta],ic[Ta]=null,Ta--)}function Oe(e,t){Ta++,ic[Ta]=e.current,e.current=t}var yn=vn(null),Ns=vn(null),ii=vn(null),Xl=vn(null);function Kl(e,t){switch(Oe(ii,t),Oe(Ns,e),Oe(yn,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?T0(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=T0(t),e=x0(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}nt(yn),Oe(yn,e)}function xa(){nt(yn),nt(Ns),nt(ii)}function ac(e){var t=e.memoizedState;t!==null&&(os._currentValue=t.memoizedState,Oe(Xl,e)),t=yn.current;var n=x0(t,e.type);t!==n&&(Oe(Ns,e),Oe(yn,n))}function Zl(e){Ns.current===e&&(nt(yn),nt(Ns)),Xl.current===e&&(nt(Xl),os._currentValue=Vi)}var sc,Vh;function ai(e){if(sc===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);sc=t&&t[1]||"",Vh=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+sc+e+Vh}var lc=!1;function rc(e,t){if(!e||lc)return"";lc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var P=function(){throw Error()};if(Object.defineProperty(P.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(P,[])}catch(J){var N=J}Reflect.construct(e,[],P)}else{try{P.call()}catch(J){N=J}P=!1;try{var I=Object.getOwnPropertyDescriptor(e.prototype,"props");Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),P=!0,new e}finally{P&&(I!==void 0?Object.defineProperty(e.prototype,"props",I):delete e.prototype.props)}}}else{try{throw Error()}catch(J){N=J}(P=e())&&typeof P.catch=="function"&&P.catch(function(){})}}catch(J){if(J&&N&&typeof J.stack=="string")return[J.stack,N.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var o=i.DetermineComponentFrameRoot(),y=o[0],S=o[1];if(y&&S){var E=y.split(`
`),U=S.split(`
`);for(l=i=0;i<E.length&&!E[i].includes("DetermineComponentFrameRoot");)i++;for(;l<U.length&&!U[l].includes("DetermineComponentFrameRoot");)l++;if(i===E.length||l===U.length)for(i=E.length-1,l=U.length-1;1<=i&&0<=l&&E[i]!==U[l];)l--;for(;1<=i&&0<=l;i--,l--)if(E[i]!==U[l]){if(i!==1||l!==1)do if(i--,l--,0>l||E[i]!==U[l]){var F=`
`+E[i].replace(" at new "," at ");return e.displayName&&F.includes("<anonymous>")&&(F=F.replace("<anonymous>",e.displayName)),F}while(1<=i&&0<=l);break}}}finally{lc=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?ai(n):""}function Kv(e,t){switch(e.tag){case 26:case 27:case 5:return ai(e.type);case 16:return ai("Lazy");case 13:return e.child!==t&&t!==null?ai("Suspense Fallback"):ai("Suspense");case 19:return ai("SuspenseList");case 0:case 15:return rc(e.type,!1);case 11:return rc(e.type.render,!1);case 1:return rc(e.type,!0);case 31:return ai("Activity");case 30:return ai("ViewTransition");default:return""}}function qh(e){try{var t="",n=null;do t+=Kv(e,n),n=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var oc=Object.prototype.hasOwnProperty,cc=h.unstable_scheduleCallback,uc=h.unstable_cancelCallback,Zv=h.unstable_shouldYield,Qv=h.unstable_requestPaint,Dt=h.unstable_now,Wv=h.unstable_getCurrentPriorityLevel,Ph=h.unstable_ImmediatePriority,jh=h.unstable_UserBlockingPriority,Ql=h.unstable_NormalPriority,Jv=h.unstable_LowPriority,Yh=h.unstable_IdlePriority,$v=h.log,ey=h.unstable_setDisableYieldValue,Bs=null,Ot=null;function si(e){if(typeof $v=="function"&&ey(e),Ot&&typeof Ot.setStrictMode=="function")try{Ot.setStrictMode(Bs,e)}catch{}}var zt=Math.clz32?Math.clz32:iy,ty=Math.log,ny=Math.LN2;function iy(e){return e>>>=0,e===0?32:31-(ty(e)/ny|0)|0}var Wl=256,Jl=262144,$l=4194304;function qi(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function er(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var l=0,o=e.suspendedLanes,y=e.pingedLanes;e=e.warmLanes;var S=i&134217727;return S!==0?(i=S&~o,i!==0?l=qi(i):(y&=S,y!==0?l=qi(y):n||(n=S&~e,n!==0&&(l=qi(n))))):(S=i&~o,S!==0?l=qi(S):y!==0?l=qi(y):n||(n=i&~e,n!==0&&(l=qi(n)))),l===0?0:t!==0&&t!==l&&(t&o)===0&&(o=l&-l,n=t&-t,o>=n||o===32&&(n&4194048)!==0)?t:l}function Us(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function kh(e,t){(t&8)!==0&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var i=31-zt(n),l=1<<i;t|=e[i],n&=~l}return t}function ay(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Xh(){var e=$l;return $l<<=1,($l&62914560)===0&&($l=4194304),e}function fc(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ls(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function sy(e,t,n,i,l,o){var y=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var S=e.entanglements,E=e.expirationTimes,U=e.hiddenUpdates;for(n=y&~n;0<n;){var F=31-zt(n),P=1<<F;S[F]=0,E[F]=-1;var N=U[F];if(N!==null)for(U[F]=null,F=0;F<N.length;F++){var I=N[F];I!==null&&(I.lane&=-536870913)}n&=~P}i!==0&&Kh(e,i,0),o!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=o&~(y&~t))}function Kh(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-zt(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&261930}function Zh(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-zt(n),l=1<<i;l&t|e[i]&t&&(e[i]|=t),n&=~l}}function Qh(e,t){var n=t&-t;return n=(n&42)!==0?1:hc(n),(n&(e.suspendedLanes|t))!==0?0:n}function hc(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function dc(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Wh(){var e=be.p;return e!==0?e:(e=window.event,e===void 0?32:ag(e.type))}function Jh(e,t){var n=be.p;try{return be.p=e,t()}finally{be.p=n}}var Bn=Math.random().toString(36).slice(2),it="__reactFiber$"+Bn,yt="__reactProps$"+Bn,Sa="__reactContainer$"+Bn,$h="__reactEvents$"+Bn,ly="__reactListeners$"+Bn,ry="__reactHandles$"+Bn,ed="__reactResources$"+Bn,Hs="__reactMarker$"+Bn,tr="__reactLoad$"+Bn;function nr(e){delete e[it],delete e[yt],delete e[ly],delete e[ry]}function Pi(e){var t;if(t=e[it])return t;for(var n=e.parentNode;n;){if(t=n[Sa]||n[it]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=I0(e);e!==null;){if(n=e[it])return n;e=I0(e)}return t}e=n,n=e.parentNode}return null}function _a(e){if(e=e[it]||e[Sa]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Is(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(r(33))}function Aa(e){var t=e[ed];return t||(t=e[ed]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function We(e){e[Hs]=!0}function td(e){e[tr]=void 0}var nd=new Set,id={};function ji(e,t){wa(e,t),wa(e+"Capture",t)}function wa(e,t){for(id[e]=t,e=0;e<t.length;e++)nd.add(t[e])}var oy=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ad={},sd={};function cy(e){return oc.call(sd,e)?!0:oc.call(ad,e)?!1:oy.test(e)?sd[e]=!0:(ad[e]=!0,!1)}var xe=!1;function ld(){var e=xe;return xe=!1,e}function ir(e,t,n){if(cy(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,n)}}function ar(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,n)}}function Un(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,i)}}function Nt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function rd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function uy(e,t,n){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var l=i.get,o=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(y){n=""+y,o.call(this,y)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(y){n=""+y},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function mc(e){if(!e._valueTracker){var t=rd(e)?"checked":"value";e._valueTracker=uy(e,t,""+e[t])}}function od(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=rd(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}var fy=/[\n"\\]/g;function Yt(e){return e.replace(fy,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function pc(e,t,n,i,l,o,y,S){e.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?e.type=y:e.removeAttribute("type"),t!=null?y==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Nt(t)):e.value!==""+Nt(t)&&(e.value=""+Nt(t)):y!=="submit"&&y!=="reset"||e.removeAttribute("value"),t!=null?y==="number"&&e.value==t?gc(e,Nt(e.value)):gc(e,Nt(t)):n!=null?gc(e,Nt(n)):i!=null&&e.removeAttribute("value"),l==null&&o!=null&&(e.defaultChecked=!!o),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?e.name=""+Nt(S):e.removeAttribute("name")}function cd(e,t,n,i,l,o,y,S){if(o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.type=o),t!=null||n!=null){if(!(o!=="submit"&&o!=="reset"||t!=null)){mc(e);return}n=n!=null?""+Nt(n):"",t=t!=null?""+Nt(t):n,S||t===e.value||(e.value=t),e.defaultValue=t}i=i??l,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=S?e.checked:!!i,e.defaultChecked=!!i,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(e.name=y),mc(e)}function gc(e,t){e.defaultValue!==""+t&&(e.defaultValue=""+t)}function Ea(e,t,n,i){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&i&&(e[n].defaultSelected=!0)}else{for(n=""+Nt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,i&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function ud(e,t,n){if(t!=null&&(t=""+Nt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Nt(n):""}function fd(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(r(92));if(Gi(i)){if(1<i.length)throw Error(r(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=Nt(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i),mc(e)}function Ma(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var hy=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function hd(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||hy.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function dd(e,t,n){if(t!=null&&typeof t!="object")throw Error(r(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="",xe=!0);for(var l in t)i=t[l],t.hasOwnProperty(l)&&n[l]!==i&&(hd(e,l,i),xe=!0)}else for(var o in t)t.hasOwnProperty(o)&&hd(e,o,t[o])}function vc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var dy=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),my=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function sr(e){return my.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function bn(){}var yc=null;function bc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ra=null,Ca=null;function md(e){var t=_a(e);if(t&&(e=t.stateNode)){var n=e[yt]||null;e:switch(e=t.stateNode,t.type){case"input":if(pc(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Yt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var l=i[yt]||null;if(!l)throw Error(r(90));pc(i,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&od(i)}break e;case"textarea":ud(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&Ea(e,!!n.multiple,t,!1)}}}var Tc=!1;function pd(e,t,n){if(Tc)return e(t,n);Tc=!0;try{var i=e(t);return i}finally{if(Tc=!1,(Ra!==null||Ca!==null)&&(so(),Ra&&(t=Ra,e=Ca,Ca=Ra=null,md(t),e)))for(t=0;t<e.length;t++)md(e[t])}}function Fs(e,t){var n=e.stateNode;if(n===null)return null;var i=n[yt]||null;if(i===null)return null;n=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(r(231,t,typeof n));return n}var Ln=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),xc=!1;if(Ln)try{var Gs={};Object.defineProperty(Gs,"passive",{get:function(){xc=!0}}),window.addEventListener("test",Gs,Gs),window.removeEventListener("test",Gs,Gs)}catch{xc=!1}var li=null,Sc=null,lr=null;function gd(){if(lr)return lr;var e,t=Sc,n=t.length,i,l="value"in li?li.value:li.textContent,o=l.length;for(e=0;e<n&&t[e]===l[e];e++);var y=n-e;for(i=1;i<=y&&t[n-i]===l[o-i];i++);return lr=l.slice(e,1<i?1-i:void 0)}function rr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function or(){return!0}function vd(){return!1}function ht(e){function t(n,i,l,o,y){this._reactName=n,this._targetInst=l,this.type=i,this.nativeEvent=o,this.target=y,this.currentTarget=null;for(var S in e)e.hasOwnProperty(S)&&(n=e[S],this[S]=n?n(o):o[S]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?or:vd,this.isPropagationStopped=vd,this}return z(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=or)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=or)},persist:function(){},isPersistent:or}),t}var ri={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cr=ht(ri),Vs=z({},ri,{view:0,detail:0}),py=ht(Vs),_c,Ac,qs,ur=z({},Vs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ec,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==qs&&(qs&&e.type==="mousemove"?(_c=e.screenX-qs.screenX,Ac=e.screenY-qs.screenY):Ac=_c=0,qs=e),_c)},movementY:function(e){return"movementY"in e?e.movementY:Ac}}),yd=ht(ur),gy=z({},ur,{dataTransfer:0}),vy=ht(gy),yy=z({},Vs,{relatedTarget:0}),wc=ht(yy),by=z({},ri,{animationName:0,elapsedTime:0,pseudoElement:0}),Ty=ht(by),xy=z({},ri,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Sy=ht(xy),_y=z({},ri,{data:0}),bd=ht(_y),Ay={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},wy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ey={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function My(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Ey[e])?!!t[e]:!1}function Ec(){return My}var Ry=z({},Vs,{key:function(e){if(e.key){var t=Ay[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=rr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?wy[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ec,charCode:function(e){return e.type==="keypress"?rr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?rr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Cy=ht(Ry),Dy=z({},ur,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Td=ht(Dy),Oy=z({},ri,{submitter:0}),zy=ht(Oy),Ny=z({},Vs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ec}),By=ht(Ny),Uy=z({},ri,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ly=ht(Uy),Hy=z({},ur,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Iy=ht(Hy),Fy=z({},ri,{newState:0,oldState:0,source:0}),Gy=ht(Fy),Vy=[9,13,27,32],Mc=Ln&&"CompositionEvent"in window,Ps=null;Ln&&"documentMode"in document&&(Ps=document.documentMode);var qy=Ln&&"TextEvent"in window&&!Ps,xd=Ln&&(!Mc||Ps&&8<Ps&&11>=Ps),Sd=" ",_d=!1;function Ad(e,t){switch(e){case"keyup":return Vy.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function wd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Da=!1;function Py(e,t){switch(e){case"compositionend":return wd(t);case"keypress":return t.which!==32?null:(_d=!0,Sd);case"textInput":return e=t.data,e===Sd&&_d?null:e;default:return null}}function jy(e,t){if(Da)return e==="compositionend"||!Mc&&Ad(e,t)?(e=gd(),lr=Sc=li=null,Da=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return xd&&t.locale!=="ko"?null:t.data;default:return null}}var Yy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ed(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Yy[e.type]:t==="textarea"}function Md(e,t,n,i){Ra?Ca?Ca.push(i):Ca=[i]:Ra=i,t=fo(t,"onChange"),0<t.length&&(n=new cr("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var js=null,Ys=null;function ky(e){m0(e,0)}function fr(e){var t=Is(e);if(od(t))return e}function Rd(e,t){if(e==="change")return t}var Cd=!1;if(Ln){var Rc;if(Ln){var Cc="oninput"in document;if(!Cc){var Dd=document.createElement("div");Dd.setAttribute("oninput","return;"),Cc=typeof Dd.oninput=="function"}Rc=Cc}else Rc=!1;Cd=Rc&&(!document.documentMode||9<document.documentMode)}function Od(){js&&(js.detachEvent("onpropertychange",zd),Ys=js=null)}function zd(e){if(e.propertyName==="value"&&fr(Ys)){var t=[];Md(t,Ys,e,bc(e)),pd(ky,t)}}function Xy(e,t,n){e==="focusin"?(Od(),js=t,Ys=n,js.attachEvent("onpropertychange",zd)):e==="focusout"&&Od()}function Ky(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return fr(Ys)}function Zy(e,t){if(e==="click")return fr(t)}function Qy(e,t){if(e==="input"||e==="change")return fr(t)}function Wy(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Bt=typeof Object.is=="function"?Object.is:Wy;function ks(e,t){if(Bt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var l=n[i];if(!oc.call(t,l)||!Bt(e[l],t[l]))return!1}return!0}function Dc(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Nd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Bd(e,t){var n=Nd(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Nd(n)}}function Ud(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ud(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ld(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Dc(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Dc(e.document)}return t}function Oc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Jy=Ln&&"documentMode"in document&&11>=document.documentMode,Oa=null,zc=null,Xs=null,Nc=!1;function Hd(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Nc||Oa==null||Oa!==Dc(i)||(i=Oa,"selectionStart"in i&&Oc(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Xs&&ks(Xs,i)||(Xs=i,i=fo(zc,"onSelect"),0<i.length&&(t=new cr("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=Oa)))}function Yi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var za={animationend:Yi("Animation","AnimationEnd"),animationiteration:Yi("Animation","AnimationIteration"),animationstart:Yi("Animation","AnimationStart"),transitionrun:Yi("Transition","TransitionRun"),transitionstart:Yi("Transition","TransitionStart"),transitioncancel:Yi("Transition","TransitionCancel"),transitionend:Yi("Transition","TransitionEnd")},Bc={},Id={};Ln&&(Id=document.createElement("div").style,"AnimationEvent"in window||(delete za.animationend.animation,delete za.animationiteration.animation,delete za.animationstart.animation),"TransitionEvent"in window||delete za.transitionend.transition);function ki(e){if(Bc[e])return Bc[e];if(!za[e])return e;var t=za[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Id)return Bc[e]=t[n];return e}var Fd=ki("animationend"),Gd=ki("animationiteration"),Vd=ki("animationstart"),$y=ki("transitionrun"),eb=ki("transitionstart"),tb=ki("transitioncancel"),qd=ki("transitionend"),Pd=new Map,Uc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Uc.push("scrollEnd");function rn(e,t){Pd.set(e,t),ji(t,[e])}var nb=0;function Hn(e,t){if(e.name!=null&&e.name!=="auto")return e.name;if(t.autoName!==null)return t.autoName;e=fn.identifierPrefix;var n=nb++;return e="_"+e+"t_"+n.toString(32)+"_",t.autoName=e}function jd(e){if(e==null||typeof e=="string")return e;var t=null,n=Ja;if(n!==null)for(var i=0;i<n.length;i++){var l=e[n[i]];if(l!=null){if(l==="none")return"none";t=t==null?l:t+(" "+l)}}return t??e.default}function In(e,t){return e=jd(e),t=jd(t),t==null?e==="auto"?null:e:t==="auto"?null:t}var hr=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},kt=[],Na=0,Lc=0;function dr(){for(var e=Na,t=Lc=Na=0;t<e;){var n=kt[t];kt[t++]=null;var i=kt[t];kt[t++]=null;var l=kt[t];kt[t++]=null;var o=kt[t];if(kt[t++]=null,i!==null&&l!==null){var y=i.pending;y===null?l.next=l:(l.next=y.next,y.next=l),i.pending=l}o!==0&&Yd(n,l,o)}}function mr(e,t,n,i){kt[Na++]=e,kt[Na++]=t,kt[Na++]=n,kt[Na++]=i,Lc|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function Hc(e,t,n,i){return mr(e,t,n,i),pr(e)}function Xi(e,t){return mr(e,null,null,t),pr(e)}function Yd(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var l=!1,o=e.return;o!==null;)o.childLanes|=n,i=o.alternate,i!==null&&(i.childLanes|=n),o.tag===22&&(e=o.stateNode,e===null||e._visibility&1||(l=!0)),e=o,o=o.return;return e.tag===3?(o=e.stateNode,l&&t!==null&&(l=31-zt(n),e=o.hiddenUpdates,i=e[l],i===null?e[l]=[t]:i.push(t),t.lane=n|536870912),o):null}function pr(e){if(50<pl)throw pl=0,ao=null,Error(r(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Ba={};function ib(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function bt(e,t,n,i){return new ib(e,t,n,i)}function Ic(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Fn(e,t){var n=e.alternate;return n===null?(n=bt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&1206910976,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function kd(e,t){e.flags&=1206910978;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function gr(e,t,n,i,l,o){var y=0;if(i=e,typeof i=="function")Ic(i)&&(y=1);else if(typeof i=="string")y=O1(e,n,yn.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(i){case se:return e=bt(31,n,t,l),e.elementType=se,e.lanes=o,e;case K:return Ki(n.children,l,o,t);case G:y=8,l|=24;break;case Z:return e=bt(12,n,t,l|2),e.elementType=Z,e.lanes=o,e;case ne:return e=bt(13,n,t,l),e.elementType=ne,e.lanes=o,e;case ie:return e=bt(19,n,t,l),e.elementType=ie,e.lanes=o,e;case ye:case jt:return e=l|32,e=bt(30,n,t,e),e.elementType=jt,e.lanes=o,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case te:y=10;break e;case W:y=9;break e;case X:y=11;break e;case ue:y=14;break e;case pe:y=16,i=null;break e}y=29,n=Error(r(130,e===null?"null":typeof e,"")),i=null}return t=bt(y,n,t,l),t.elementType=e,t.type=i,t.lanes=o,t}function Ki(e,t,n,i){return e=bt(7,e,i,t),e.lanes=n,e}function Fc(e,t,n){return e=bt(6,e,null,t),e.lanes=n,e}function Xd(e){var t=bt(18,null,null,0);return t.stateNode=e,t}function Gc(e,t,n){return t=bt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Kd=new WeakMap;function Xt(e,t){if(typeof e=="object"&&e!==null){var n=Kd.get(e);return n!==void 0?n:(t={value:e,source:t,stack:qh(t)},Kd.set(e,t),t)}return{value:e,source:t,stack:qh(t)}}var Ua=[],La=0,vr=null,Ks=0,Kt=[],Zt=0,oi=null,Tn=1,xn="";function Gn(e,t){Ua[La++]=Ks,Ua[La++]=vr,vr=e,Ks=t}function Zd(e,t,n){Kt[Zt++]=Tn,Kt[Zt++]=xn,Kt[Zt++]=oi,oi=e;var i=Tn;e=xn;var l=32-zt(i)-1;i&=~(1<<l),n+=1;var o=32-zt(t)+l;if(30<o){var y=l-l%5;o=(i&(1<<y)-1).toString(32),i>>=y,l-=y,Tn=1<<32-zt(t)+l|n<<l|i,xn=o+e}else Tn=1<<o|n<<l|i,xn=e}function yr(e){e.return!==null&&(Gn(e,1),Zd(e,1,0))}function Vc(e){for(;e===vr;)vr=Ua[--La],Ua[La]=null,Ks=Ua[--La],Ua[La]=null;for(;e===oi;)oi=Kt[--Zt],Kt[Zt]=null,xn=Kt[--Zt],Kt[Zt]=null,Tn=Kt[--Zt],Kt[Zt]=null}function Qd(e,t){Kt[Zt++]=Tn,Kt[Zt++]=xn,Kt[Zt++]=oi,Tn=t.id,xn=t.overflow,oi=e}var Je=null,ze=null,fe=!1,ci=null,Qt=!1,qc=Error(r(519));function ui(e){var t=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Zs(Xt(t,e)),qc}function Wd(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[it]=e,t[yt]=i,n){case"dialog":de("cancel",t),de("close",t);break;case"iframe":case"object":case"embed":de("load",t);break;case"video":case"audio":for(n=0;n<vl.length;n++)de(vl[n],t);break;case"source":de("error",t);break;case"img":case"image":case"link":de("error",t),de("load",t);break;case"details":de("toggle",t);break;case"input":de("invalid",t),cd(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":de("invalid",t);break;case"textarea":de("invalid",t),fd(t,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||y0(t.textContent,n)?(i.popover!=null&&(de("beforetoggle",t),de("toggle",t)),i.onScroll!=null&&de("scroll",t),i.onScrollEnd!=null&&de("scrollend",t),i.onClick!=null&&(t.onclick=bn),t=!0):t=!1,t||ui(e,!0)}function br(e){for(Je=e.return;Je;)switch(Je.tag){case 5:case 31:case 13:Qt=!1;return;case 27:case 3:Qt=!0;return;default:Je=Je.return}}function Ha(e){if(e!==Je)return!1;if(!fe)return br(e),fe=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||bf(e.type,e.memoizedProps)),n=!n),n&&ze&&ui(e),br(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));ze=H0(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));ze=H0(e)}else t===27?(t=ze,Ei(e.type)?(e=Rf,Rf=null,ze=e):ze=t):ze=Je?Jt(e.stateNode.nextSibling):null;return!0}function Zi(){ze=Je=null,fe=!1}function Pc(){var e=ci;return e!==null&&(St===null?St=e:St.push.apply(St,e),ci=null),e}function Zs(e){ci===null?ci=[e]:ci.push(e)}var jc=vn(null),Qi=null,Vn=null;function fi(e,t,n){Oe(jc,t._currentValue),t._currentValue=n}function qn(e){e._currentValue=jc.current,nt(jc)}function Tr(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function Yc(e,t,n,i){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var o=l.dependencies;if(o!==null){var y=l.child;o=o.firstContext;e:for(;o!==null;){var S=o;o=l;for(var E=0;E<t.length;E++)if(S.context===t[E]){o.lanes|=n,S=o.alternate,S!==null&&(S.lanes|=n),Tr(o.return,n,e),i||(y=null);break e}o=S.next}}else if(l.tag===18){if(y=l.return,y===null)throw Error(r(341));y.lanes|=n,o=y.alternate,o!==null&&(o.lanes|=n),Tr(y,n,e),y=null}else l.tag===13&&l.memoizedState!==null&&l.memoizedState.dehydrated===null?(l.lanes|=n,y=l.alternate,y!==null&&(y.lanes|=n),Tr(l.return,n,e),y=l.child,y=y!==null?y.sibling:null):y=l.child;if(y!==null)y.return=l;else for(y=l;y!==null;){if(y===e){y=null;break}if(l=y.sibling,l!==null){l.return=y.return,y=l;break}y=y.return}l=y}}function Wi(e,t,n,i){e=null;for(var l=t,o=!1;l!==null;){if(!o){if((l.flags&524288)!==0)o=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var y=l.alternate;if(y===null)throw Error(r(387));if(y=y.memoizedProps,y!==null){var S=l.type;Bt(l.pendingProps.value,y.value)||(e!==null?e.push(S):e=[S])}}else if(l===Xl.current){if(y=l.alternate,y===null)throw Error(r(387));y.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(os):e=[os])}l=l.return}return e!==null&&Yc(t,e,n,i),t.flags|=262144,e!==null}function xr(e){for(e=e.firstContext;e!==null;){if(!Bt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ji(e){Qi=e,Vn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function at(e){return Jd(Qi,e)}function Sr(e,t){return Qi===null&&Ji(e),Jd(e,t)}function Jd(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Vn===null){if(e===null)throw Error(r(308));Vn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Vn=Vn.next=t;return n}var ab=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},sb=h.unstable_scheduleCallback,lb=h.unstable_NormalPriority,je={$$typeof:te,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function kc(){return{controller:new ab,data:new Map,refCount:0}}function Qs(e){e.refCount--,e.refCount===0&&sb(lb,function(){e.controller.abort()})}function $d(e,t){if((e.pendingLanes&4194048)!==0){var n=e.transitionTypes;for(n===null&&(n=e.transitionTypes=[]),e=0;e<t.length;e++){var i=t[e];n.indexOf(i)===-1&&n.push(i)}}}var Ws=null;function rb(e){var t=e.transitionTypes;return e.transitionTypes=null,t}var Js=null,Xc=0,$i=0,Ia=null;function ob(e,t){if(Js===null){var n=Js=[];Xc=0,$i=uf(),Ia={status:"pending",value:void 0,then:function(i){n.push(i)}}}return Xc++,t.then(em,em),t}function em(){if(--Xc===0&&(Ws=null,Js!==null)){Ia!==null&&(Ia.status="fulfilled");var e=Js;Js=null,$i=0,Ia=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function cb(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(l){n.push(l)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var l=0;l<n.length;l++)(0,n[l])(t)},function(l){for(i.status="rejected",i.reason=l,l=0;l<n.length;l++)(0,n[l])(void 0)}),i}var tm=le.S;le.S=function(e,t){if(Xp=Dt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&ob(e,t),Ws!==null)for(var n=ns;n!==null;)$d(n,Ws),n=n.next;if(n=e.types,n!==null){for(var i=ns;i!==null;)$d(i,n),i=i.next;if($i!==0){i=Ws,i===null&&(i=Ws=[]);for(var l=0;l<n.length;l++){var o=n[l];i.indexOf(o)===-1&&i.push(o)}}}tm!==null&&tm(e,t)};var ea=vn(null);function Kc(){var e=ea.current;return e!==null?e:De.pooledCache}function _r(e,t){t===null?Oe(ea,ea.current):Oe(ea,t.pool)}function nm(){var e=Kc();return e===null?null:{parent:je._currentValue,pool:e}}var Fa=Error(r(460)),Zc=Error(r(474)),Ar=Error(r(542)),wr={then:function(){}};function im(e){return e=e.status,e==="fulfilled"||e==="rejected"}function am(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(bn,bn),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,lm(e),e===void 0&&!("reason"in t)?Error(r(600)):e;default:if(typeof t.status=="string")t.then(bn,bn);else{if(e=De,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var l=t;l.status="fulfilled",l.value=i}},function(i){if(t.status==="pending"){var l=t;l.status="rejected",l.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,lm(e),e}throw na=t,Fa}}function ta(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(na=n,Fa):n}}var na=null;function sm(){if(na===null)throw Error(r(459));var e=na;return na=null,e}function lm(e){if(e===Fa||e===Ar)throw Error(r(483))}var Ga=null,$s=0;function Er(e){var t=$s;return $s+=1,Ga===null&&(Ga=[]),am(Ga,e,t)}function hi(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Mr(e,t){throw t.$$typeof===j?Error(r(525)):(e=Object.prototype.toString.call(t),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function rm(e){function t(B,O){if(e){var L=B.deletions;L===null?(B.deletions=[O],B.flags|=16):L.push(O)}}function n(B,O){if(!e)return null;for(;O!==null;)t(B,O),O=O.sibling;return null}function i(B){for(var O=new Map;B!==null;)B.key===null?O.set(B.index,B):O.set(B.key,B),B=B.sibling;return O}function l(B,O){return B=Fn(B,O),B.index=0,B.sibling=null,B}function o(B,O,L){return B.index=L,e?(L=B.alternate,L!==null?(L=L.index,L<O?(B.flags|=2,O):L):(B.flags|=134217730,O)):(B.flags|=1048576,O)}function y(B){return e&&B.alternate===null&&(B.flags|=134217730),B}function S(B,O,L,q){return O===null||O.tag!==6?(O=Fc(L,B.mode,q),O.return=B,O):(O=l(O,L),O.return=B,O)}function E(B,O,L,q){var $=L.type;return $===K?(B=F(B,O,L.props.children,q,L.key),hi(B,L),B):O!==null&&(O.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===pe&&ta($)===O.type)?(O=l(O,L.props),hi(O,L),O.return=B,O):(O=gr(L.type,L.key,L.props,null,B.mode,q),hi(O,L),O.return=B,O)}function U(B,O,L,q){return O===null||O.tag!==4||O.stateNode.containerInfo!==L.containerInfo||O.stateNode.implementation!==L.implementation?(O=Gc(L,B.mode,q),O.return=B,O):(O=l(O,L.children||[]),O.return=B,O)}function F(B,O,L,q,$){return O===null||O.tag!==7?(O=Ki(L,B.mode,q,$),O.return=B,O):(O=l(O,L),O.return=B,O)}function P(B,O,L){if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return O=Fc(""+O,B.mode,L),O.return=B,O;if(typeof O=="object"&&O!==null){switch(O.$$typeof){case V:return L=gr(O.type,O.key,O.props,null,B.mode,L),hi(L,O),L.return=B,L;case Y:return O=Gc(O,B.mode,L),O.return=B,O;case pe:return O=ta(O),P(B,O,L)}if(Gi(O)||Fi(O))return O=Ki(O,B.mode,L,null),O.return=B,O;if(typeof O.then=="function")return P(B,Er(O),L);if(O.$$typeof===te)return P(B,Sr(B,O),L);Mr(B,O)}return null}function N(B,O,L,q){var $=O!==null?O.key:null;if(typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint")return $!==null?null:S(B,O,""+L,q);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case V:return L.key===$?E(B,O,L,q):null;case Y:return L.key===$?U(B,O,L,q):null;case pe:return L=ta(L),N(B,O,L,q)}if(Gi(L)||Fi(L))return $!==null?null:F(B,O,L,q,null);if(typeof L.then=="function")return N(B,O,Er(L),q);if(L.$$typeof===te)return N(B,O,Sr(B,L),q);Mr(B,L)}return null}function I(B,O,L,q,$){if(typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint")return B=B.get(L)||null,S(O,B,""+q,$);if(typeof q=="object"&&q!==null){switch(q.$$typeof){case V:return B=B.get(q.key===null?L:q.key)||null,E(O,B,q,$);case Y:return B=B.get(q.key===null?L:q.key)||null,U(O,B,q,$);case pe:return q=ta(q),I(B,O,L,q,$)}if(Gi(q)||Fi(q))return B=B.get(L)||null,F(O,B,q,$,null);if(typeof q.then=="function")return I(B,O,L,Er(q),$);if(q.$$typeof===te)return I(B,O,L,Sr(O,q),$);Mr(O,q)}return null}function J(B,O,L,q){for(var $=null,ve=null,ae=O,re=O=0,Xe=null;ae!==null&&re<L.length;re++){ae.index>re?(Xe=ae,ae=null):Xe=ae.sibling;var Te=N(B,ae,L[re],q);if(Te===null){ae===null&&(ae=Xe);break}e&&ae&&Te.alternate===null&&t(B,ae),O=o(Te,O,re),ve===null?$=Te:ve.sibling=Te,ve=Te,ae=Xe}if(re===L.length)return n(B,ae),fe&&Gn(B,re),$;if(ae===null){for(;re<L.length;re++)ae=P(B,L[re],q),ae!==null&&(O=o(ae,O,re),ve===null?$=ae:ve.sibling=ae,ve=ae);return fe&&Gn(B,re),$}for(ae=i(ae);re<L.length;re++)Xe=I(ae,B,re,L[re],q),Xe!==null&&(e&&(Te=Xe.alternate,Te!==null&&ae.delete(Te.key===null?re:Te.key)),O=o(Xe,O,re),ve===null?$=Xe:ve.sibling=Xe,ve=Xe);return e&&ae.forEach(function(Oi){return t(B,Oi)}),fe&&Gn(B,re),$}function ee(B,O,L,q){if(L==null)throw Error(r(151));for(var $=null,ve=null,ae=O,re=O=0,Xe=null,Te=L.next();ae!==null&&!Te.done;re++,Te=L.next()){ae.index>re?(Xe=ae,ae=null):Xe=ae.sibling;var Oi=N(B,ae,Te.value,q);if(Oi===null){ae===null&&(ae=Xe);break}e&&ae&&Oi.alternate===null&&t(B,ae),O=o(Oi,O,re),ve===null?$=Oi:ve.sibling=Oi,ve=Oi,ae=Xe}if(Te.done)return n(B,ae),fe&&Gn(B,re),$;if(ae===null){for(;!Te.done;re++,Te=L.next())Te=P(B,Te.value,q),Te!==null&&(O=o(Te,O,re),ve===null?$=Te:ve.sibling=Te,ve=Te);return fe&&Gn(B,re),$}for(ae=i(ae);!Te.done;re++,Te=L.next())Te=I(ae,B,re,Te.value,q),Te!==null&&(e&&(Xe=Te.alternate,Xe!==null&&ae.delete(Xe.key===null?re:Xe.key)),O=o(Te,O,re),ve===null?$=Te:ve.sibling=Te,ve=Te);return e&&ae.forEach(function(P1){return t(B,P1)}),fe&&Gn(B,re),$}function ce(B,O,L,q){if(typeof L=="object"&&L!==null&&L.type===K&&L.key===null&&L.props.ref===void 0&&(L=L.props.children),typeof L=="object"&&L!==null){switch(L.$$typeof){case V:e:{for(var $=L.key;O!==null;){if(O.key===$){if($=L.type,$===K){if(O.tag===7){n(B,O.sibling),q=l(O,L.props.children),hi(q,L),q.return=B,B=q;break e}}else if(O.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===pe&&ta($)===O.type){n(B,O.sibling),q=l(O,L.props),hi(q,L),q.return=B,B=q;break e}n(B,O);break}else t(B,O);O=O.sibling}L.type===K?(q=Ki(L.props.children,B.mode,q,L.key),hi(q,L),q.return=B,B=q):(q=gr(L.type,L.key,L.props,null,B.mode,q),hi(q,L),q.return=B,B=q)}return y(B);case Y:e:{for($=L.key;O!==null;){if(O.key===$)if(O.tag===4&&O.stateNode.containerInfo===L.containerInfo&&O.stateNode.implementation===L.implementation){n(B,O.sibling),q=l(O,L.children||[]),q.return=B,B=q;break e}else{n(B,O);break}else t(B,O);O=O.sibling}q=Gc(L,B.mode,q),q.return=B,B=q}return y(B);case pe:return L=ta(L),ce(B,O,L,q)}if(Gi(L))return J(B,O,L,q);if(Fi(L)){if($=Fi(L),typeof $!="function")throw Error(r(150));return L=$.call(L),ee(B,O,L,q)}if(typeof L.then=="function")return ce(B,O,Er(L),q);if(L.$$typeof===te)return ce(B,O,Sr(B,L),q);Mr(B,L)}return typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint"?(L=""+L,O!==null&&O.tag===6?(n(B,O.sibling),q=l(O,L),q.return=B,B=q):(n(B,O),q=Fc(L,B.mode,q),q.return=B,B=q),y(B)):n(B,O)}return function(B,O,L,q){try{$s=0;var $=ce(B,O,L,q);return Ga=null,$}catch(ae){if(ae===Fa||ae===Ar)throw ae;var ve=bt(29,ae,null,B.mode);return ve.lanes=q,ve.return=B,ve}}}var ia=rm(!0),om=rm(!1),di=!1;function Qc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Wc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function mi(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function pi(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(Se&2)!==0){var l=i.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),i.pending=t,t=pr(e),Yd(e,null,n),t}return mr(e,i,t,n),pr(e)}function el(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,Zh(e,n)}}function Jc(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var l=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var y={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};o===null?l=o=y:o=o.next=y,n=n.next}while(n!==null);o===null?l=o=t:o=o.next=t}else l=o=t;n={baseState:i.baseState,firstBaseUpdate:l,lastBaseUpdate:o,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var $c=!1;function tl(){if($c){var e=Ia;if(e!==null)throw e}}function nl(e,t,n,i){$c=!1;var l=e.updateQueue;di=!1;var o=l.firstBaseUpdate,y=l.lastBaseUpdate,S=l.shared.pending;if(S!==null){l.shared.pending=null;var E=S,U=E.next;E.next=null,y===null?o=U:y.next=U,y=E;var F=e.alternate;F!==null&&(F=F.updateQueue,S=F.lastBaseUpdate,S!==y&&(S===null?F.firstBaseUpdate=U:S.next=U,F.lastBaseUpdate=E))}if(o!==null){var P=l.baseState;y=0,F=U=E=null,S=o;do{var N=S.lane&-536870913,I=N!==S.lane;if(I?(ge&N)===N:(i&N)===N){N!==0&&N===$i&&($c=!0),F!==null&&(F=F.next={lane:0,tag:S.tag,payload:S.payload,callback:null,next:null});e:{var J=e,ee=S;N=t;var ce=n;switch(ee.tag){case 1:if(J=ee.payload,typeof J=="function"){P=J.call(ce,P,N);break e}P=J;break e;case 3:J.flags=J.flags&-65537|128;case 0:if(J=ee.payload,N=typeof J=="function"?J.call(ce,P,N):J,N==null)break e;P=z({},P,N);break e;case 2:di=!0}}N=S.callback,N!==null&&(e.flags|=64,I&&(e.flags|=8192),I=l.callbacks,I===null?l.callbacks=[N]:I.push(N))}else I={lane:N,tag:S.tag,payload:S.payload,callback:S.callback,next:null},F===null?(U=F=I,E=P):F=F.next=I,y|=N;if(S=S.next,S===null){if(S=l.shared.pending,S===null)break;I=S,S=I.next,I.next=null,l.lastBaseUpdate=I,l.shared.pending=null}}while(!0);F===null&&(E=P),l.baseState=E,l.firstBaseUpdate=U,l.lastBaseUpdate=F,o===null&&(l.shared.lanes=0),Si|=y,e.lanes=y,e.memoizedState=P}}function cm(e,t){if(typeof e!="function")throw Error(r(191,e));e.call(t)}function um(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)cm(n[e],t)}var gi=vn(null),Rr=vn(0);function fm(e,t){e=Xn,Oe(Rr,e),Oe(gi,t),Xn=e|t.baseLanes}function eu(){Oe(Rr,Xn),Oe(gi,gi.current)}function tu(){Xn=Rr.current,nt(gi),nt(Rr)}var st=vn(null),ft=null;function vi(e){var t=e.alternate;Oe(lt,lt.current&1),Oe(st,e),ft===null&&(t===null||gi.current!==null||t.memoizedState!==null)&&(ft=e)}function nu(e){Oe(lt,lt.current),Oe(st,e),ft===null&&(ft=e)}function hm(e){e.tag===22?(Oe(lt,lt.current),Oe(st,e),ft===null&&(ft=e)):yi()}function yi(){Oe(lt,lt.current),Oe(st,st.current)}function Ut(e){nt(st),ft===e&&(ft=null),nt(lt)}var lt=vn(0);function il(e,t){Oe(st,st.current),Oe(lt,t)}function iu(e){nt(lt),nt(st),ft===e&&(ft=null)}function Cr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Ef(n)||Mf(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!=="independent"){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Pn=0,oe=null,Me=null,Ye=null,Dr=!1,Va=!1,aa=!1,Or=0,al=0,qa=null,ub=0;function Ie(){throw Error(r(321))}function au(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Bt(e[n],t[n]))return!1;return!0}function su(e,t,n,i,l,o){return Pn=o,oe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,le.H=e===null||e.memoizedState===null?Zm:Qm,aa=!1,o=n(i,l),aa=!1,Va&&(o=mm(t,n,i,l)),dm(e),o}function dm(e){le.H=Ir;var t=Me!==null&&Me.next!==null;if(Pn=0,Ye=Me=oe=null,Dr=!1,al=0,qa=null,t)throw Error(r(300));e===null||ke||(e=e.dependencies,e!==null&&xr(e)&&(ke=!0))}function mm(e,t,n,i){oe=e;var l=0;do{if(Va&&(qa=null),al=0,Va=!1,25<=l)throw Error(r(301));if(l+=1,Ye=Me=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}le.H=yb,o=t(n,i)}while(Va);return o}function fb(){var e=le.H,t=e.useState()[0];return t=typeof t.then=="function"?sl(t):t,e=e.useState()[0],(Me!==null?Me.memoizedState:null)!==e&&(oe.flags|=1024),t}function lu(){var e=Or!==0;return Or=0,e}function ru(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function ou(e){if(Dr){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Dr=!1}Pn=0,Ye=Me=oe=null,Va=!1,al=Or=0,qa=null}function dt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ye===null?oe.memoizedState=Ye=e:Ye=Ye.next=e,Ye}function qe(){if(Me===null){var e=oe.alternate;e=e!==null?e.memoizedState:null}else e=Me.next;var t=Ye===null?oe.memoizedState:Ye.next;if(t!==null)Ye=t,Me=e;else{if(e===null)throw oe.alternate===null?Error(r(467)):Error(r(310));Me=e,e={memoizedState:Me.memoizedState,baseState:Me.baseState,baseQueue:Me.baseQueue,queue:Me.queue,next:null},Ye===null?oe.memoizedState=Ye=e:Ye=Ye.next=e}return Ye}function zr(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function sl(e){var t=al;return al+=1,qa===null&&(qa=[]),e=am(qa,e,t),t=oe,(Ye===null?t.memoizedState:Ye.next)===null&&(t=t.alternate,le.H=t===null||t.memoizedState===null?Zm:Qm),e}function Nr(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return sl(e);if(e.$$typeof===Ct)return;if(e.$$typeof===te)return at(e)}throw Error(r(438,String(e)))}function cu(e){var t=null,n=oe.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=oe.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(l){return l.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=zr(),oe.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=ni;return t.index++,n}function jn(e,t){return typeof t=="function"?t(e):t}function Br(e){var t=qe();return uu(t,Me,e)}function uu(e,t,n){var i=e.queue;if(i===null)throw Error(r(311));i.lastRenderedReducer=n;var l=e.baseQueue,o=i.pending;if(o!==null){if(l!==null){var y=l.next;l.next=o.next,o.next=y}t.baseQueue=l=o,i.pending=null}if(o=e.baseState,l===null)e.memoizedState=o;else{t=l.next;var S=y=null,E=null,U=t,F=!1;do{var P=U.lane&-536870913;if(P!==U.lane?(ge&P)===P:(Pn&P)===P){var N=U.revertLane;if(N===0)E!==null&&(E=E.next={lane:0,revertLane:0,gesture:null,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null}),P===$i&&(F=!0);else if((Pn&N)===N){U=U.next,N===$i&&(F=!0);continue}else P={lane:0,revertLane:U.revertLane,gesture:null,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null},E===null?(S=E=P,y=o):E=E.next=P,oe.lanes|=N,Si|=N;P=U.action,aa&&n(o,P),o=U.hasEagerState?U.eagerState:n(o,P)}else N={lane:P,revertLane:U.revertLane,gesture:U.gesture,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null},E===null?(S=E=N,y=o):E=E.next=N,oe.lanes|=P,Si|=P;U=U.next}while(U!==null&&U!==t);if(E===null?y=o:E.next=S,!Bt(o,e.memoizedState)&&(ke=!0,F&&(n=Ia,n!==null)))throw n;e.memoizedState=o,e.baseState=y,e.baseQueue=E,i.lastRenderedState=o}return l===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function fu(e){var t=qe(),n=t.queue;if(n===null)throw Error(r(311));n.lastRenderedReducer=e;var i=n.dispatch,l=n.pending,o=t.memoizedState;if(l!==null){n.pending=null;var y=l=l.next;do o=e(o,y.action),y=y.next;while(y!==l);Bt(o,t.memoizedState)||(ke=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,i]}function pm(e,t,n){var i=oe,l=qe(),o=fe;if(o){if(n===void 0)throw Error(r(407));n=n()}else n=t();var y=!Bt((Me||l).memoizedState,n);if(y&&(l.memoizedState=n,ke=!0),l=l.queue,mu(ym.bind(null,i,l,e),[e]),e=l.getSnapshot!==t||y||Ye!==null&&(Ye.memoizedState.tag&1)!==0,Pa(e?9:8,{destroy:void 0},vm.bind(null,i,l,n,t),null),e){if(i.flags|=2048,De===null)throw Error(r(349));o||(Pn&127)!==0||gm(i,t,n)}return n}function gm(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=oe.updateQueue,t===null?(t=zr(),oe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function vm(e,t,n,i){t.value=n,t.getSnapshot=i,bm(t)&&Tm(e)}function ym(e,t,n){return n(function(){bm(t)&&Tm(e)})}function bm(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Bt(e,n)}catch{return!0}}function Tm(e){var t=Xi(e,2);t!==null&&_t(t,e,2)}function hu(e){var t=dt();if(typeof e=="function"){var n=e;if(e=n(),aa){si(!0);try{n()}finally{si(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:jn,lastRenderedState:e},t}function xm(e,t,n,i){return e.baseState=n,uu(e,Me,typeof i=="function"?i:jn)}function hb(e,t,n,i,l){if(Hr(e))throw Error(r(485));if(e=t.action,e!==null){var o={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){o.listeners.push(y)}};le.T!==null?n(!0):o.isTransition=!1,i(o),n=t.pending,n===null?(o.next=t.pending=o,Sm(t,o)):(o.next=n.next,t.pending=n.next=o)}}function Sm(e,t){var n=t.action,i=t.payload,l=e.state;if(t.isTransition){var o=le.T,y={};y.types=o!==null?o.types:null,le.T=y;try{var S=n(l,i),E=le.S;E!==null&&E(y,S),_m(e,t,S)}catch(U){du(e,t,U)}finally{o!==null&&y.types!==null&&(o.types=y.types),le.T=o}}else try{o=n(l,i),_m(e,t,o)}catch(U){du(e,t,U)}}function _m(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){Am(e,t,i)},function(i){return du(e,t,i)}):Am(e,t,n)}function Am(e,t,n){t.status="fulfilled",t.value=n,wm(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Sm(e,n)))}function du(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,wm(t),t=t.next;while(t!==i)}e.action=null}function wm(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Em(e,t){return t}function Mm(e,t){if(fe){var n=De.formState;if(n!==null){e:{var i=oe;if(fe){if(ze){t:{for(var l=ze,o=Qt;l.nodeType!==8;){if(!o){l=null;break t}if(l=Jt(l.nextSibling),l===null){l=null;break t}}o=l.data,l=o==="F!"||o==="F"?l:null}if(l){ze=Jt(l.nextSibling),i=l.data==="F!";break e}}ui(i)}i=!1}i&&(t=n[0])}}return n=dt(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Em,lastRenderedState:t},n.queue=i,n=km.bind(null,oe,i),i.dispatch=n,i=hu(!1),o=bu.bind(null,oe,!1,i.queue),i=dt(),l={state:t,dispatch:null,action:e,pending:null},i.queue=l,n=hb.bind(null,oe,l,o,n),l.dispatch=n,i.memoizedState=e,[t,n,!1]}function Rm(e){var t=qe();return Cm(t,Me,e)}function Cm(e,t,n){if(t=uu(e,t,Em)[0],e=Br(jn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=sl(t)}catch(y){throw y===Fa?Ar:y}else i=t;t=qe();var l=t.queue,o=l.dispatch;return n!==t.memoizedState&&(oe.flags|=2048,Pa(9,{destroy:void 0},db.bind(null,l,n),null)),[i,o,e]}function db(e,t){e.action=t}function Dm(e){var t=qe(),n=Me;if(n!==null)return Cm(t,n,e);qe(),t=t.memoizedState,n=qe();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function Pa(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=oe.updateQueue,t===null&&(t=zr(),oe.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function Om(){return qe().memoizedState}function Ur(e,t,n,i){var l=dt();oe.flags|=e,l.memoizedState=Pa(1|t,{destroy:void 0},n,i===void 0?null:i)}function Lr(e,t,n,i){var l=qe();i=i===void 0?null:i;var o=l.memoizedState.inst;Me!==null&&i!==null&&au(i,Me.memoizedState.deps)?l.memoizedState=Pa(t,o,n,i):(oe.flags|=e,l.memoizedState=Pa(1|t,o,n,i))}function zm(e,t){Ur(8390656,8,e,t)}function mu(e,t){Lr(2048,8,e,t)}function mb(e){oe.flags|=4;var t=oe.updateQueue;if(t===null)t=zr(),oe.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function Nm(e){var t=qe().memoizedState;return mb({ref:t,nextImpl:e}),function(){if((Se&2)!==0)throw Error(r(440));return t.impl.apply(void 0,arguments)}}function Bm(e,t){return Lr(4,2,e,t)}function Um(e,t){return Lr(4,4,e,t)}function Lm(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Hm(e,t,n){n=n!=null?n.concat([e]):null,Lr(4,4,Lm.bind(null,t,e),n)}function pu(){}function Im(e,t){var n=qe();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&au(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function Fm(e,t){var n=qe();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&au(t,i[1]))return i[0];if(i=e(),aa){si(!0);try{e()}finally{si(!1)}}return n.memoizedState=[i,t],i}function gu(e,t,n){return n===void 0||(Pn&1073741824)!==0&&(ge&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=Zp(),oe.lanes|=e,Si|=e,n)}function Gm(e,t,n,i){return Bt(n,t)?n:gi.current!==null?(e=gu(e,n,i),Bt(e,t)||(ke=!0),e):(Pn&106)===0||(Pn&1073741824)!==0&&(ge&261930)===0?(ke=!0,e.memoizedState=n):(e=Zp(),oe.lanes|=e,Si|=e,t)}function Vm(e,t,n,i,l){var o=be.p;be.p=o!==0&&8>o?o:8;var y=le.T,S={};S.types=y!==null?y.types:null,le.T=S,bu(e,!1,t,n);try{var E=l(),U=le.S;if(U!==null&&U(S,E),E!==null&&typeof E=="object"&&typeof E.then=="function"){var F=cb(E,i);ll(e,t,F,Ft(e))}else ll(e,t,i,Ft(e))}catch(P){ll(e,t,{then:function(){},status:"rejected",reason:P},Ft())}finally{be.p=o,y!==null&&S.types!==null&&(y.types=S.types),le.T=y}}function pb(){}function vu(e,t,n,i){if(e.tag!==5)throw Error(r(476));var l=qm(e).queue;Vm(e,l,t,Vi,n===null?pb:function(){return Pm(e),n(i)})}function qm(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:Vi,baseState:Vi,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:jn,lastRenderedState:Vi},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:jn,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Pm(e){var t=qm(e);t.next===null&&(t=e.alternate.memoizedState),ll(e,t.next.queue,{},Ft())}function yu(){return at(os)}function jm(){return qe().memoizedState}function Ym(){return qe().memoizedState}function gb(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Ft();e=mi(n);var i=pi(t,e,n);i!==null&&(_t(i,t,n),el(i,t,n)),t={cache:kc()},e.payload=t;return}t=t.return}}function vb(e,t,n){var i=Ft();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Hr(e)?Xm(t,n):(n=Hc(e,t,n,i),n!==null&&(_t(n,e,i),Km(n,t,i)))}function km(e,t,n){var i=Ft();ll(e,t,n,i)}function ll(e,t,n,i){var l={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Hr(e))Xm(t,l);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var y=t.lastRenderedState,S=o(y,n);if(l.hasEagerState=!0,l.eagerState=S,Bt(S,y))return mr(e,t,l,0),De===null&&dr(),!1}catch{}if(n=Hc(e,t,l,i),n!==null)return _t(n,e,i),Km(n,t,i),!0}return!1}function bu(e,t,n,i){if(i={lane:2,revertLane:uf(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},Hr(e)){if(t)throw Error(r(479))}else t=Hc(e,n,i,2),t!==null&&_t(t,e,2)}function Hr(e){var t=e.alternate;return e===oe||t!==null&&t===oe}function Xm(e,t){Va=Dr=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Km(e,t,n){if((n&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,Zh(e,n)}}var Ir={readContext:at,use:Nr,useCallback:Ie,useContext:Ie,useEffect:Ie,useImperativeHandle:Ie,useLayoutEffect:Ie,useInsertionEffect:Ie,useMemo:Ie,useReducer:Ie,useRef:Ie,useState:Ie,useDebugValue:Ie,useDeferredValue:Ie,useTransition:Ie,useSyncExternalStore:Ie,useId:Ie,useHostTransitionStatus:Ie,useFormState:Ie,useActionState:Ie,useOptimistic:Ie,useMemoCache:Ie,useCacheRefresh:Ie,useEffectEvent:Ie},Zm={readContext:at,use:Nr,useCallback:function(e,t){return dt().memoizedState=[e,t===void 0?null:t],e},useContext:at,useEffect:zm,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Ur(4194308,4,Lm.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ur(4194308,4,e,t)},useInsertionEffect:function(e,t){Ur(4,2,e,t)},useMemo:function(e,t){var n=dt();t=t===void 0?null:t;var i=e();if(aa){si(!0);try{e()}finally{si(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=dt();if(n!==void 0){var l=n(t);if(aa){si(!0);try{n(t)}finally{si(!1)}}}else l=t;return i.memoizedState=i.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},i.queue=e,e=e.dispatch=vb.bind(null,oe,e),[i.memoizedState,e]},useRef:function(e){var t=dt();return e={current:e},t.memoizedState=e},useState:function(e){e=hu(e);var t=e.queue,n=km.bind(null,oe,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:pu,useDeferredValue:function(e,t){var n=dt();return gu(n,e,t)},useTransition:function(){var e=hu(!1);return e=Vm.bind(null,oe,e.queue,!0,!1),dt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=oe,l=dt();if(fe){if(n===void 0)throw Error(r(407));n=n()}else{if(n=t(),De===null)throw Error(r(349));(ge&127)!==0||gm(i,t,n)}l.memoizedState=n;var o={value:n,getSnapshot:t};return l.queue=o,zm(ym.bind(null,i,o,e),[e]),i.flags|=2048,Pa(9,{destroy:void 0},vm.bind(null,i,o,n,t),null),n},useId:function(){var e=dt(),t=De.identifierPrefix;if(fe){var n=xn,i=Tn;n=(i&~(1<<32-zt(i)-1)).toString(32)+n,t="_"+t+"R_"+n,n=Or++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=ub++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:yu,useFormState:Mm,useActionState:Mm,useOptimistic:function(e){var t=dt();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=bu.bind(null,oe,!0,n),n.dispatch=t,[e,t]},useMemoCache:cu,useCacheRefresh:function(){return dt().memoizedState=gb.bind(null,oe)},useEffectEvent:function(e){var t=dt(),n={impl:e};return t.memoizedState=n,function(){if((Se&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}},Qm={readContext:at,use:Nr,useCallback:Im,useContext:at,useEffect:mu,useImperativeHandle:Hm,useInsertionEffect:Bm,useLayoutEffect:Um,useMemo:Fm,useReducer:Br,useRef:Om,useState:function(){return Br(jn)},useDebugValue:pu,useDeferredValue:function(e,t){var n=qe();return Gm(n,Me.memoizedState,e,t)},useTransition:function(){var e=Br(jn)[0],t=qe().memoizedState;return[typeof e=="boolean"?e:sl(e),t]},useSyncExternalStore:pm,useId:jm,useHostTransitionStatus:yu,useFormState:Rm,useActionState:Rm,useOptimistic:function(e,t){var n=qe();return xm(n,Me,e,t)},useMemoCache:cu,useCacheRefresh:Ym,useEffectEvent:Nm},yb={readContext:at,use:Nr,useCallback:Im,useContext:at,useEffect:mu,useImperativeHandle:Hm,useInsertionEffect:Bm,useLayoutEffect:Um,useMemo:Fm,useReducer:fu,useRef:Om,useState:function(){return fu(jn)},useDebugValue:pu,useDeferredValue:function(e,t){var n=qe();return Me===null?gu(n,e,t):Gm(n,Me.memoizedState,e,t)},useTransition:function(){var e=fu(jn)[0],t=qe().memoizedState;return[typeof e=="boolean"?e:sl(e),t]},useSyncExternalStore:pm,useId:jm,useHostTransitionStatus:yu,useFormState:Dm,useActionState:Dm,useOptimistic:function(e,t){var n=qe();return Me!==null?xm(n,Me,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:cu,useCacheRefresh:Ym,useEffectEvent:Nm};function Tu(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:z({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var xu={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=Ft(),l=mi(i);l.payload=t,n!=null&&(l.callback=n),t=pi(e,l,i),t!==null&&(_t(t,e,i),el(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=Ft(),l=mi(i);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=pi(e,l,i),t!==null&&(_t(t,e,i),el(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ft(),i=mi(n);i.tag=2,t!=null&&(i.callback=t),t=pi(e,i,n),t!==null&&(_t(t,e,n),el(t,e,n))}};function Wm(e,t,n,i,l,o,y){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,o,y):t.prototype&&t.prototype.isPureReactComponent?!ks(n,i)||!ks(l,o):!0}function Jm(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&xu.enqueueReplaceState(t,t.state,null)}function sa(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=z({},n));for(var l in e)n[l]===void 0&&(n[l]=e[l])}return n}function $m(e){hr(e)}function ep(e){console.error(e)}function tp(e){hr(e)}function Fr(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function np(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function Su(e,t,n){return n=mi(n),n.tag=3,n.payload={element:null},n.callback=function(){Fr(e,t)},n}function ip(e){return e=mi(e),e.tag=3,e}function ap(e,t,n,i){var l=n.type.getDerivedStateFromError;if(typeof l=="function"){var o=i.value;e.payload=function(){return l(o)},e.callback=function(){np(t,n,i)}}var y=n.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(e.callback=function(){np(t,n,i),typeof l!="function"&&(_i===null?_i=new Set([this]):_i.add(this));var S=i.stack;this.componentDidCatch(i.value,{componentStack:S!==null?S:""})})}function bb(e,t,n,i,l){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&Wi(t,n,l,!0),n=st.current,n!==null){switch(n.tag){case 31:case 13:case 19:return ft===null?lo():n.alternate===null&&Fe===0&&(Fe=3),n.flags&=-257,n.flags|=65536,n.lanes=l,i===wr?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),rf(e,i,l)),!1;case 22:return n.flags|=65536,i===wr?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),rf(e,i,l)),!1}throw Error(r(435,n.tag))}return rf(e,i,l),lo(),!1}if(fe)return t=st.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=l,i!==qc&&(e=Error(r(422),{cause:i}),Zs(Xt(e,n)))):(i!==qc&&(t=Error(r(423),{cause:i}),Zs(Xt(t,n))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,i=Xt(i,n),l=Su(e.stateNode,i,l),Jc(e,l),Fe!==4&&(Fe=2)),!1;var o=Error(r(520),{cause:i});if(o=Xt(o,n),ml===null?ml=[o]:ml.push(o),Fe!==4&&(Fe=2),t===null)return!0;i=Xt(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=l&-l,n.lanes|=e,e=Su(n.stateNode,i,e),Jc(n,e),!1;case 1:if(t=n.type,o=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||o!==null&&typeof o.componentDidCatch=="function"&&(_i===null||!_i.has(o))))return n.flags|=65536,l&=-l,n.lanes|=l,l=ip(l),ap(l,e,n,i),Jc(n,l),!1;break;case 22:if(n.memoizedState!==null)return n.flags|=65536,!1}n=n.return}while(n!==null);return!1}var _u=Error(r(461)),ke=!1;function Ze(e,t,n,i){t.child=e===null?om(t,null,n,i):ia(t,e.child,n,i)}function sp(e,t,n,i,l){n=n.render;var o=t.ref;if("ref"in i){var y={};for(var S in i)S!=="ref"&&(y[S]=i[S])}else y=i;return Ji(t),i=su(e,t,n,y,o,l),S=lu(),e!==null&&!ke?(ru(e,t,l),Yn(e,t,l)):(fe&&S&&yr(t),t.flags|=1,Ze(e,t,i,l),t.child)}function lp(e,t,n,i,l){if(e===null){var o=n.type;return typeof o=="function"&&!Ic(o)&&o.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=o,rp(e,t,o,i,l)):(e=gr(n.type,null,i,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!Ou(e,l)){var y=o.memoizedProps;if(n=n.compare,n=n!==null?n:ks,n(y,i)&&e.ref===t.ref)return Yn(e,t,l)}return t.flags|=1,e=Fn(o,i),e.ref=t.ref,e.return=t,t.child=e}function rp(e,t,n,i,l){if(e!==null){var o=e.memoizedProps;if(ks(o,i)&&e.ref===t.ref)if(ke=!1,t.pendingProps=i=o,Ou(e,l))(e.flags&131072)!==0&&(ke=!0);else return t.lanes=e.lanes,Yn(e,t,l)}return Au(e,t,n,i,l)}function op(e,t,n,i){var l=i.children,o=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((t.flags&128)!==0){if(o=o!==null?o.baseLanes|n:n,e!==null){for(i=t.child=e.child,l=0;i!==null;)l=l|i.lanes|i.childLanes,i=i.sibling;i=l&~o}else i=0,t.child=null;return cp(e,t,o,n,i)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&_r(t,o!==null?o.cachePool:null),o!==null?fm(t,o):eu(),hm(t);else return i=t.lanes=536870912,cp(e,t,o!==null?o.baseLanes|n:n,n,i)}else o!==null?(_r(t,o.cachePool),fm(t,o),yi(),t.memoizedState=null):(e!==null&&_r(t,null),eu(),yi());return Ze(e,t,l,n),t.child}function rl(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function cp(e,t,n,i,l){var o=Kc();return o=o===null?null:{parent:je._currentValue,pool:o},t.memoizedState={baseLanes:n,cachePool:o},e!==null&&_r(t,null),eu(),hm(t),e!==null&&Wi(e,t,i,!0),t.childLanes=l,null}function Gr(e,t){return t=Vr({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function up(e,t,n){return ia(t,e.child,null,n),e=Gr(t,t.pendingProps),e.flags|=2,Ut(t),t.memoizedState=null,e}function Tb(e,t,n){var i=t.pendingProps,l=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(fe){if(i.mode==="hidden")return e=Gr(t,i),t.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},rl(null,e);if(nu(t),(e=ze)?(e=L0(e,Qt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:oi!==null?{id:Tn,overflow:xn}:null,retryLane:536870912,hydrationErrors:null},n=Xd(e),n.return=t,t.child=n,Je=t,ze=null)):e=null,e===null)throw ui(t);return t.lanes=536870912,null}return Gr(t,i)}var o=e.memoizedState;if(o!==null){var y=o.dehydrated;if(nu(t),l)if(t.flags&256)t.flags&=-257,t=up(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(r(558));else if(ke||Wi(e,t,n,!1),l=(n&e.childLanes)!==0,ke||l){if(gi.current===null){if(i=De,i!==null&&(y=Qh(i,n),y!==0&&y!==o.retryLane))throw o.retryLane=y,Xi(e,y),_t(i,e,y),_u;lo()}t=up(e,t,n)}else e=o.treeContext,ze=Jt(y.nextSibling),Je=t,fe=!0,ci=null,Qt=!1,e!==null&&Qd(t,e),t=Gr(t,i),t.flags|=134221824;return t}return e=Fn(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function ja(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(r(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Au(e,t,n,i,l){return Ji(t),n=su(e,t,n,i,void 0,l),i=lu(),e!==null&&!ke?(ru(e,t,l),Yn(e,t,l)):(fe&&i&&yr(t),t.flags|=1,Ze(e,t,n,l),t.child)}function fp(e,t,n,i,l,o){return Ji(t),t.updateQueue=null,n=mm(t,i,n,l),dm(e),i=lu(),e!==null&&!ke?(ru(e,t,o),Yn(e,t,o)):(fe&&i&&yr(t),t.flags|=1,Ze(e,t,n,o),t.child)}function hp(e,t,n,i,l){if(Ji(t),t.stateNode===null){var o=Ba,y=n.contextType;typeof y=="object"&&y!==null&&(o=at(y)),o=new n(i,o),t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=xu,t.stateNode=o,o._reactInternals=t,o=t.stateNode,o.props=i,o.state=t.memoizedState,o.refs={},Qc(t),y=n.contextType,o.context=typeof y=="object"&&y!==null?at(y):Ba,o.state=t.memoizedState,y=n.getDerivedStateFromProps,typeof y=="function"&&(Tu(t,n,y,i),o.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(y=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),y!==o.state&&xu.enqueueReplaceState(o,o.state,null),nl(t,i,o,l),tl(),o.state=t.memoizedState),typeof o.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){o=t.stateNode;var S=t.memoizedProps,E=sa(n,S);o.props=E;var U=o.context,F=n.contextType;y=Ba,typeof F=="object"&&F!==null&&(y=at(F));var P=n.getDerivedStateFromProps;F=typeof P=="function"||typeof o.getSnapshotBeforeUpdate=="function",S=t.pendingProps!==S,F||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(S||U!==y)&&Jm(t,o,i,y),di=!1;var N=t.memoizedState;o.state=N,nl(t,i,o,l),tl(),U=t.memoizedState,S||N!==U||di?(typeof P=="function"&&(Tu(t,n,P,i),U=t.memoizedState),(E=di||Wm(t,n,E,i,N,U,y))?(F||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=U),o.props=i,o.state=U,o.context=y,i=E):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{o=t.stateNode,Wc(e,t),y=t.memoizedProps,F=sa(n,y),o.props=F,P=t.pendingProps,N=o.context,U=n.contextType,E=Ba,typeof U=="object"&&U!==null&&(E=at(U)),S=n.getDerivedStateFromProps,(U=typeof S=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(y!==P||N!==E)&&Jm(t,o,i,E),di=!1,N=t.memoizedState,o.state=N,nl(t,i,o,l),tl();var I=t.memoizedState;y!==P||N!==I||di||e!==null&&e.dependencies!==null&&xr(e.dependencies)?(typeof S=="function"&&(Tu(t,n,S,i),I=t.memoizedState),(F=di||Wm(t,n,F,i,N,I,E)||e!==null&&e.dependencies!==null&&xr(e.dependencies))?(U||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,I,E),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,I,E)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||y===e.memoizedProps&&N===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&N===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=I),o.props=i,o.state=I,o.context=E,i=F):(typeof o.componentDidUpdate!="function"||y===e.memoizedProps&&N===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&N===e.memoizedState||(t.flags|=1024),i=!1)}return o=i,ja(e,t),i=(t.flags&128)!==0,o||i?(o=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:o.render(),t.flags|=1,e!==null&&i?(t.child=ia(t,e.child,null,l),t.child=ia(t,null,n,l)):Ze(e,t,n,l),t.memoizedState=o.state,e=t.child):e=Yn(e,t,l),e}function dp(e,t,n,i){return Zi(),t.flags|=256,Ze(e,t,n,i),t.child}var wu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Eu(e){return{baseLanes:e,cachePool:nm()}}function Mu(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=It),e}function mp(e,t,n){var i=t.pendingProps,l=!1,o=(t.flags&128)!==0,y;if((y=o)||(y=e!==null&&e.memoizedState===null?!1:(lt.current&2)!==0),y&&(l=!0,t.flags&=-129),y=(t.flags&32)!==0,t.flags&=-33,e===null){if(fe){if(l?vi(t):yi(),(e=ze)?(e=L0(e,Qt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:oi!==null?{id:Tn,overflow:xn}:null,retryLane:536870912,hydrationErrors:null},n=Xd(e),n.return=t,t.child=n,Je=t,ze=null)):e=null,e===null)throw ui(t);return Mf(e)?t.lanes=32:t.lanes=536870912,null}return o=i.children,i=i.fallback,l?(yi(),l=t.mode,o=Vr({mode:"hidden",children:o},l),i=Ki(i,l,n,null),o.return=t,i.return=t,o.sibling=i,t.child=o,i=t.child,i.memoizedState=Eu(n),i.childLanes=Mu(e,y,n),t.memoizedState=wu,rl(null,i)):(vi(t),Ru(t,o))}var S=e.memoizedState;if(S!==null){var E=S.dehydrated;if(E!==null)return xb(e,t,o,y,i,E,S,n)}return l?(yi(),l=i.fallback,o=t.mode,S=e.child,E=S.sibling,i=Fn(S,{mode:"hidden",children:i.children}),i.subtreeFlags=S.subtreeFlags&1206910976,E!==null?l=Fn(E,l):(l=Ki(l,o,n,null),l.flags|=2),l.return=t,i.return=t,i.sibling=l,t.child=i,rl(null,i),i=t.child,l=e.child.memoizedState,l===null?l=Eu(n):(o=l.cachePool,o!==null?(S=je._currentValue,o=o.parent!==S?{parent:S,pool:S}:o):o=nm(),l={baseLanes:l.baseLanes|n,cachePool:o}),i.memoizedState=l,i.childLanes=Mu(e,y,n),t.memoizedState=wu,rl(e.child,i)):(vi(t),n=e.child,e=n.sibling,n=Fn(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(y=t.deletions,y===null?(t.deletions=[e],t.flags|=16):y.push(e)),t.child=n,t.memoizedState=null,n)}function Ru(e,t){return t=Vr({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Vr(e,t){return e=bt(22,e,null,t),e.lanes=0,e}function qr(e,t,n){return ia(t,e.child,null,n),e=Ru(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function xb(e,t,n,i,l,o,y,S){if(n)return t.flags&256?(vi(t),t.flags&=-257,qr(e,t,S)):t.memoizedState!==null?(yi(),t.child=e.child,t.flags|=128,null):(yi(),o=l.fallback,y=t.mode,l=Vr({mode:"visible",children:l.children},y),o=Ki(o,y,S,null),o.flags|=2,l.return=t,o.return=t,l.sibling=o,t.child=l,ia(t,e.child,null,S),l=t.child,l.memoizedState=Eu(S),l.childLanes=Mu(e,i,S),t.memoizedState=wu,rl(null,l));if(vi(t),Mf(o)){if(i=o.nextSibling&&o.nextSibling.dataset,i)var E=i.dgst;return i=E,i!==""&&(l=Error(r(419)),l.stack="",l.digest=i,Zs({value:l,source:null,stack:null})),qr(e,t,S)}if(ke||Wi(e,t,S,!1),i=(S&e.childLanes)!==0,ke||i){if(gi.current!==null)return qr(e,t,S);if(i=De,i!==null&&(l=Qh(i,S),l!==0&&l!==y.retryLane))throw y.retryLane=l,Xi(e,l),_t(i,e,l),_u;return Ef(o)||lo(),qr(e,t,S)}return Ef(o)?(t.flags|=192,t.child=e.child,null):(e=y.treeContext,ze=Jt(o.nextSibling),Je=t,fe=!0,ci=null,Qt=!1,e!==null&&Qd(t,e),t=Ru(t,l.children),t.flags|=134221824,t)}function pp(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),Tr(e.return,t,n)}function gp(e){for(var t=null;e!==null;){var n=e.alternate;n!==null&&Cr(n)===null&&(t=e),e=e.sibling}return t}function Pr(e,t,n,i,l,o){var y=e.memoizedState;y===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:l,treeForkCount:o}:(y.isBackwards=t,y.rendering=null,y.renderingStartTime=0,y.last=i,y.tail=n,y.tailMode=l,y.treeForkCount=o)}function Cu(e){var t=e.child;for(e.child=null;t!==null;){var n=t.sibling;t.sibling=e.child,e.child=t,t=n}}function Du(e,t,n){var i=t.pendingProps,l=i.revealOrder,o=i.tail;i=i.children;var y=lt.current;if(t.flags&128)return il(t,y),null;var S=(y&2)!==0;if(S?(y=y&1|2,t.flags|=128):y&=1,il(t,y),l==="backwards"&&e!==null?(Cu(e),Ze(e,t,i,n),Cu(e)):Ze(e,t,i,n),i=fe?Ks:0,!S&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&pp(e,n,t);else if(e.tag===19)pp(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(l){case"backwards":n=gp(t.child),n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null,Cu(t)),Pr(t,!0,l,null,o,i);break;case"unstable_legacy-backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Cr(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}Pr(t,!0,n,null,o,i);break;case"together":Pr(t,!1,null,null,void 0,i);break;case"independent":t.memoizedState=null;break;default:n=gp(t.child),n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),Pr(t,!1,l,n,o,i)}return t.child}function vp(e,t,n){var i=t.pendingProps;return fi(t,t.type,i.value),Ze(e,t,i.children,n),t.child}function Yn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Si|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Wi(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(r(153));if(t.child!==null){for(e=t.child,n=Fn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Fn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Ou(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&xr(e)))}function Sb(e,t,n){switch(t.tag){case 3:Kl(t,t.stateNode.containerInfo),fi(t,je,e.memoizedState.cache),Zi();break;case 27:case 5:ac(t);break;case 4:Kl(t,t.stateNode.containerInfo);break;case 10:fi(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,nu(t),null;break;case 13:var i=t.memoizedState;if(i!==null){if(i.dehydrated!==null)return vi(t),t.flags|=128,null;i=Wi(e,t,n,!1);var l=t.child.childLanes;return i||(n&l)!==0?mp(e,t,n):(vi(t),e=Yn(e,t,n),e!==null?e.sibling:null)}vi(t);break;case 19:if(t.flags&128)return Du(e,t,n);if(l=(e.flags&128)!==0,i=(n&t.childLanes)!==0,i||(Wi(e,t,n,!1),i=(n&t.childLanes)!==0),l){if(i)return Du(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),il(t,lt.current),i)break;return null;case 22:return t.lanes=0,op(e,t,n,t.pendingProps);case 24:fi(t,je,e.memoizedState.cache)}return Yn(e,t,n)}function yp(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)ke=!0;else{if(!Ou(e,n)&&(t.flags&128)===0)return ke=!1,Sb(e,t,n);ke=(e.flags&131072)!==0}else ke=!1,fe&&(t.flags&1048576)!==0&&Zd(t,Ks,t.index);switch(t.lanes=0,t.tag){case 16:e:{var i=t.pendingProps;if(e=ta(t.elementType),t.type=e,typeof e=="function")Ic(e)?(i=sa(e,i),t.tag=1,t=hp(null,t,e,i,n)):(t.tag=0,t=Au(null,t,e,i,n));else{if(e!=null){var l=e.$$typeof;if(l===X){t.tag=11,t=sp(null,t,e,i,n);break e}else if(l===ue){t.tag=14,t=lp(null,t,e,i,n);break e}else if(l===te){t.tag=10,t.type=e,t=vp(null,t,n);break e}}throw t=zs(e)||e,Error(r(306,t,""))}}return t;case 0:return Au(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,l=sa(i,t.pendingProps),hp(e,t,i,l,n);case 3:e:{if(Kl(t,t.stateNode.containerInfo),e===null)throw Error(r(387));i=t.pendingProps;var o=t.memoizedState;l=o.element,Wc(e,t),nl(t,i,null,n);var y=t.memoizedState;if(i=y.cache,fi(t,je,i),i!==o.cache&&Yc(t,[je],n,!0),tl(),i=y.element,o.isDehydrated)if(o={element:i,isDehydrated:!1,cache:y.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=dp(e,t,i,n);break e}else if(i!==l){l=Xt(Error(r(424)),t),Zs(l),t=dp(e,t,i,n);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,ze=Jt(e.firstChild),Je=t,fe=!0,ci=null,Qt=!0,n=om(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|134221824,n=n.sibling;else{if(Zi(),i===l){t=Yn(e,t,n);break e}Ze(e,t,i,n)}t=t.child}return t;case 26:return ja(e,t),e===null?(n=P0(t.type,null,t.pendingProps,null))?t.memoizedState=n:fe||(t.stateNode=S0(t.type,t.pendingProps,ii.current,t)):t.memoizedState=P0(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return ac(t),e===null&&fe&&(i=t.stateNode=F0(t.type,t.pendingProps,ii.current),Je=t,Qt=!0,l=ze,Ei(t.type)?(Rf=l,ze=Jt(i.firstChild)):ze=l),Ze(e,t,t.pendingProps.children,n),ja(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&fe&&((l=i=ze)&&(i=g1(i,t.type,t.pendingProps,Qt),i!==null?(t.stateNode=i,Je=t,ze=Jt(i.firstChild),Qt=!1,l=!0):l=!1),l||ui(t)),ac(t),l=t.type,o=t.pendingProps,y=e!==null?e.memoizedProps:null,i=o.children,bf(l,o)?i=null:y!==null&&bf(l,y)&&(t.flags|=32),t.memoizedState!==null&&(l=su(e,t,fb,null,null,n),os._currentValue=l),ja(e,t),Ze(e,t,i,n),t.child;case 6:return e===null&&fe&&((e=n=ze)&&(n=v1(n,t.pendingProps,Qt),n!==null?(t.stateNode=n,Je=t,ze=null,e=!0):e=!1),e||ui(t)),null;case 13:return mp(e,t,n);case 4:return Kl(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=ia(t,null,i,n):Ze(e,t,i,n),t.child;case 11:return sp(e,t,t.type,t.pendingProps,n);case 7:return i=t.pendingProps,ja(e,t),Ze(e,t,i,n),t.child;case 8:return Ze(e,t,t.pendingProps.children,n),t.child;case 12:return Ze(e,t,t.pendingProps.children,n),t.child;case 10:return vp(e,t,n);case 9:return l=t.type._context,i=t.pendingProps.children,Ji(t),l=at(l),i=i(l),t.flags|=1,Ze(e,t,i,n),t.child;case 14:return lp(e,t,t.type,t.pendingProps,n);case 15:return rp(e,t,t.type,t.pendingProps,n);case 19:return Du(e,t,n);case 31:return Tb(e,t,n);case 22:return op(e,t,n,t.pendingProps);case 24:return Ji(t),i=at(je),e===null?(l=Kc(),l===null&&(l=De,o=kc(),l.pooledCache=o,o.refCount++,o!==null&&(l.pooledCacheLanes|=n),l=o),t.memoizedState={parent:i,cache:l},Qc(t),fi(t,je,l)):((e.lanes&n)!==0&&(Wc(e,t),nl(t,null,null,n),tl()),l=e.memoizedState,o=t.memoizedState,l.parent!==i?(l={parent:i,cache:i},t.memoizedState=l,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=l),fi(t,je,i)):(i=o.cache,fi(t,je,i),i!==l.cache&&Yc(t,[je],n,!0))),Ze(e,t,t.pendingProps.children,n),t.child;case 30:return t.stateNode===null&&(t.stateNode={autoName:null,paired:null,clones:null,ref:null}),i=t.pendingProps,i.name!=null&&i.name!=="auto"?t.flags|=e===null?18882560:18874368:fe&&yr(t),e!==null&&e.memoizedProps.name!==i.name?t.flags|=4194816:ja(e,t),Ze(e,t,i.children,n),t.child;case 29:throw t.pendingProps}throw Error(r(156,t.tag))}function kn(e){e.flags|=4}function zu(e,t,n,i,l){var o;if((o=(e.mode&32)!==0)&&(o=n===null?X0(t,i):X0(t,i)&&(i.src!==n.src||i.srcSet!==n.srcSet)),o){if(e.flags|=16777216,(l&335544128)===l)if(e.stateNode.complete)e.flags|=8192;else if($p())e.flags|=8192;else throw na=wr,Zc}else e.flags&=-16777217}function bp(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!K0(t))if($p())e.flags|=8192;else throw na=wr,Zc}function jr(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Xh():536870912,e.lanes|=t,Za|=t)}function ol(e,t){if(!fe)switch(e.tailMode){case"visible":break;case"collapsed":for(var n=e.tail,i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null;break;default:for(t=e.tail,n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null}}function Ne(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,i|=l.subtreeFlags&1206910976,i|=l.flags&1206910976,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,i|=l.subtreeFlags,i|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function _b(e,t,n){var i=t.pendingProps;switch(Vc(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ne(t),null;case 1:return Ne(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),qn(je),xa(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Ha(t)?kn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Pc())),Ne(t),null;case 26:var l=t.type,o=t.memoizedState;return e===null?(kn(t),o!==null?(Ne(t),bp(t,o)):(Ne(t),zu(t,l,null,i,n))):o?o!==e.memoizedState?(kn(t),Ne(t),bp(t,o)):(Ne(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&kn(t),Ne(t),zu(t,l,e,i,n)),null;case 27:if(Zl(t),n=ii.current,l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&kn(t);else{if(!i){if(t.stateNode===null)throw Error(r(166));return Ne(t),t.subtreeFlags&=-33554433,null}e=yn.current,Ha(t)?Wd(t):(e=F0(l,i,n),t.stateNode=e,kn(t))}return Ne(t),t.subtreeFlags&=-33554433,null;case 5:if(Zl(t),l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&kn(t);else{if(!i){if(t.stateNode===null)throw Error(r(166));return Ne(t),t.subtreeFlags&=-33554433,null}if(o=yn.current,Ha(t))Wd(t);else{var y=bl(ii.current);switch(o){case 1:o=y.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:o=y.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":o=y.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":o=y.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":o=y.createElement("div"),o.innerHTML="<script><\/script>",o=o.removeChild(o.firstChild);break;case"select":o=typeof i.is=="string"?y.createElement("select",{is:i.is}):y.createElement("select"),i.multiple?o.multiple=!0:i.size&&(o.size=i.size);break;default:o=typeof i.is=="string"?y.createElement(l,{is:i.is}):y.createElement(l)}}o[it]=t,o[yt]=i;e:for(y=t.child;y!==null;){if(y.tag===5||y.tag===6)o.appendChild(y.stateNode);else if(y.tag!==4&&y.tag!==27&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===t)break e;for(;y.sibling===null;){if(y.return===null||y.return===t)break e;y=y.return}y.sibling.return=y.return,y=y.sibling}t.stateNode=o;e:switch(ot(o,l,i),l){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&kn(t)}}return Ne(t),t.subtreeFlags&=-33554433,zu(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&kn(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(r(166));if(e=ii.current,Ha(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,l=Je,l!==null)switch(l.tag){case 27:case 5:i=l.memoizedProps}e[it]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||y0(e.nodeValue,n)),e||ui(t,!0)}else e=bl(e).createTextNode(i),e[it]=t,t.stateNode=e}return Ne(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(i=Ha(t),n!==null){if(e===null){if(!i)throw Error(r(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(557));e[it]=t}else Zi(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ne(t),e=!1}else n=Pc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Ut(t),t):(Ut(t),null);if((t.flags&128)!==0)throw Error(r(558))}return Ne(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=Ha(t),i!==null&&i.dehydrated!==null){if(e===null){if(!l)throw Error(r(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(r(317));l[it]=t}else Zi(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ne(t),l=!1}else l=Pc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return t.flags&256?(Ut(t),t):(Ut(t),null)}return Ut(t),(t.flags&128)!==0?(t.lanes=n,t):(n=i!==null,e=e!==null&&e.memoizedState!==null,n&&(i=t.child,l=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(l=i.alternate.memoizedState.cachePool.pool),o=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(o=i.memoizedState.cachePool.pool),o!==l&&(i.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),jr(t,t.updateQueue),Ne(t),null);case 4:return xa(),e===null&&mf(t.stateNode.containerInfo),t.flags|=67108864,Ne(t),null;case 10:return qn(t.type),Ne(t),null;case 19:if(iu(t),i=t.memoizedState,i===null)return Ne(t),null;if(l=(t.flags&128)!==0,o=i.rendering,o===null)if(l)ol(i,!1);else{if(Fe!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(o=Cr(e),o!==null){for(t.flags|=128,ol(i,!1),e=o.updateQueue,t.updateQueue=e,jr(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)kd(n,e),n=n.sibling;return il(t,lt.current&1|2),fe&&Gn(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&Dt()>no&&(t.flags|=128,l=!0,ol(i,!1),t.lanes=4194304)}else{if(!l)if(e=Cr(o),e!==null){if(t.flags|=128,l=!0,e=e.updateQueue,t.updateQueue=e,jr(t,e),ol(i,!0),i.tail===null&&i.tailMode!=="collapsed"&&i.tailMode!=="visible"&&!o.alternate&&!fe)return Ne(t),null}else 2*Dt()-i.renderingStartTime>no&&n!==536870912&&(t.flags|=128,l=!0,ol(i,!1),t.lanes=4194304);i.isBackwards?(o.sibling=t.child,t.child=o):(e=i.last,e!==null?e.sibling=o:t.child=o,i.last=o)}if(i.tail!==null){e=i.tail;e:{for(n=e;n!==null;){if(n.alternate!==null){n=!1;break e}n=n.sibling}n=!0}return i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Dt(),e.sibling=null,o=lt.current,o=l?o&1|2:o&1,i.tailMode==="visible"||i.tailMode==="collapsed"||!n||fe?il(t,o):(n=o,Oe(st,t),Oe(lt,n),ft===null&&(ft=t)),fe&&Gn(t,i.treeForkCount),e}return Ne(t),null;case 22:case 23:return Ut(t),tu(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(n&536870912)!==0&&(t.flags&128)===0&&(Ne(t),t.subtreeFlags&6&&(t.flags|=8192)):Ne(t),n=t.updateQueue,n!==null&&jr(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&nt(ea),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),qn(je),Ne(t),null;case 25:return null;case 30:return t.flags|=33554432,Ne(t),null}throw Error(r(156,t.tag))}function Ab(e,t){switch(Vc(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return qn(je),xa(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Zl(t),null;case 31:if(t.memoizedState!==null){if(Ut(t),t.alternate===null)throw Error(r(340));Zi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Ut(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(r(340));Zi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return iu(t),e=t.flags,e&65536?(t.flags=e&-65537|128,e=t.memoizedState,e!==null&&(e.rendering=null,e.tail=null),t.flags|=4,t):null;case 4:return xa(),null;case 10:return qn(t.type),null;case 22:case 23:return Ut(t),tu(),e!==null&&nt(ea),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return qn(je),null;case 25:return null;default:return null}}function Tp(e,t){switch(Vc(t),t.tag){case 3:qn(je),xa();break;case 26:case 27:case 5:Zl(t);break;case 4:xa();break;case 31:t.memoizedState!==null&&Ut(t);break;case 13:Ut(t);break;case 19:iu(t);break;case 10:qn(t.type);break;case 22:case 23:Ut(t),tu(),e!==null&&nt(ea);break;case 24:qn(je)}}function cl(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var l=i.next;n=l;do{if((n.tag&e)===e){i=void 0;var o=n.create,y=n.inst;i=o(),y.destroy=i}n=n.next}while(n!==l)}}catch(S){we(t,t.return,S)}}function bi(e,t,n){try{var i=t.updateQueue,l=i!==null?i.lastEffect:null;if(l!==null){var o=l.next;i=o;do{if((i.tag&e)===e){var y=i.inst,S=y.destroy;if(S!==void 0){y.destroy=void 0,l=t;var E=n,U=S;try{U()}catch(F){we(l,E,F)}}}i=i.next}while(i!==o)}}catch(F){we(t,t.return,F)}}function xp(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{um(t,n)}catch(i){we(e,e.return,i)}}}function Sp(e,t,n){n.props=sa(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){we(e,t,i)}}function Sn(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:var l=e.stateNode,o=Hn(e.memoizedProps,l);(l.ref===null||l.ref.name!==o)&&(l.ref=C0(o)),i=l.ref;break;case 7:if(e.stateNode===null){var y=new Gt(e);v(e.child,!1,m1,y,void 0,void 0),e.stateNode=y}i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(S){we(e,t,S)}}function rt(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(l){we(e,t,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(l){we(e,t,l)}else n.current=null}function Yr(e,t){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&t!==null)for(var n=0;n<t.length;n++)U0(e.stateNode,t[n])}function _p(e){for(var t=e.return;t!==null&&(Bu(t)&&U0(e.stateNode,t.stateNode),!Nu(t));)t=t.return}function ul(e){for(var t=e.return;t!==null&&(Bu(t)&&p1(e.stateNode,t.stateNode),!Nu(t));)t=t.return}function Nu(e){return e.tag===5||e.tag===3||e.tag===27}function Bu(e){return e&&e.tag===7&&e.stateNode!==null}function Uu(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break e;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(l){we(e,e.return,l)}}function Lu(e,t,n){try{var i=e.stateNode;Qb(i,e.type,n,t),i[yt]=t}catch(l){we(e,e.return,l)}}function Ap(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ei(e.type)||e.tag===4}function Hu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ap(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ei(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Iu(e,t,n,i){var l=e.tag;if(l===5||l===6)l=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(l,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(l),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=bn)),Yr(e,i),xe=!0;else if(l!==4&&(l===27&&(Yr(e,i),i=null,Ei(e.type)&&(n=e.stateNode,t=null)),e=e.child,e!==null))for(Iu(e,t,n,i),e=e.sibling;e!==null;)Iu(e,t,n,i),e=e.sibling}function kr(e,t,n,i){var l=e.tag;if(l===5||l===6)l=e.stateNode,t?n.insertBefore(l,t):n.appendChild(l),Yr(e,i),xe=!0;else if(l!==4&&(l===27&&(Yr(e,i),i=null,Ei(e.type)&&(n=e.stateNode)),e=e.child,e!==null))for(kr(e,t,n,i),e=e.sibling;e!==null;)kr(e,t,n,i),e=e.sibling}function wp(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,l=t.attributes;l.length;)t.removeAttributeNode(l[0]);ot(t,i,n),t[it]=e,t[yt]=n}catch(o){we(e,e.return,o)}}var Xr=!1,Lt=null;function Ep(e){(e.tag===30||(e.subtreeFlags&33554432)!==0)&&(Xr=!0)}var _n=null;function Mp(){var e=_n;return _n=null,e}var Tt=0;function Ya(e,t,n,i,l){return Tt=0,Rp(e.child,t,n,i,l)}function Rp(e,t,n,i,l){for(var o=!1;e!==null;){if(e.tag===5){var y=e.stateNode;if(i!==null){var S=Sf(y);i.push(S),S.view&&(o=!0)}else o||Sf(y).view&&(o=!0);Xr=!0,M0(y,Tt===0?t:t+"_"+Tt,n),Tt++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&l||Rp(e.child,t,n,i,l)&&(o=!0));e=e.sibling}return o}function An(e,t){for(;e!==null;)e.tag===5?R0(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&t||An(e.child,t)),e=e.sibling}function Kr(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(Kr(e),e.tag===30&&(e.flags&18874368)!==0&&e.stateNode.paired)){var t=e.memoizedProps;if(t.name==null||t.name==="auto")throw Error(r(544));var n=t.name;t=In(t.default,t.share),t!=="none"&&(Ya(e,n,t,null,!1)||An(e.child,!1))}e=e.sibling}}function Fu(e,t){if(e.tag===30){var n=e.stateNode,i=e.memoizedProps,l=Hn(i,n),o=In(i.default,n.paired?i.share:i.enter);o!=="none"?Ya(e,l,o,null,!1)?(Kr(e),n.paired||t||$a(e,i.onEnter)):An(e.child,!1):Kr(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Fu(e,t),e=e.sibling;else Kr(e)}function Gu(e){if(Lt!==null&&Lt.size!==0){var t=Lt;if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var n=e.memoizedProps,i=n.name;if(i!=null&&i!=="auto"){var l=t.get(i);if(l!==void 0){var o=In(n.default,n.share);if(o!=="none"&&(Ya(e,i,o,null,!1)?(o=e.stateNode,l.paired=o,o.paired=l,$a(e,n.onShare)):An(e.child,!1)),t.delete(i),t.size===0)break}}}Gu(e)}e=e.sibling}}}function Vu(e){if(e.tag===30){var t=e.memoizedProps,n=Hn(t,e.stateNode),i=Lt!==null?Lt.get(n):void 0,l=In(t.default,i!==void 0?t.share:t.exit);l!=="none"&&(Ya(e,n,l,null,!1)?i!==void 0?(l=e.stateNode,i.paired=l,l.paired=i,Lt.delete(n),$a(e,t.onShare)):$a(e,t.onExit):An(e.child,!1)),Lt!==null&&Gu(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Vu(e),e=e.sibling;else Lt!==null&&Gu(e)}function Cp(e){for(e=e.child;e!==null;){if(e.tag===30){var t=e.memoizedProps,n=Hn(t,e.stateNode);t=In(t.default,t.update),e.flags&=-5,t!=="none"&&Ya(e,n,t,e.memoizedState=[],!1)}else(e.subtreeFlags&33554432)!==0&&Cp(e);e=e.sibling}}function qu(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var t=e.stateNode;t.paired!==null&&(t.paired=null,An(e.child,!1))}qu(e)}e=e.sibling}}function Zr(e){if(e.tag===30)e.stateNode.paired=null,An(e.child,!1),qu(e);else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Zr(e),e=e.sibling;else qu(e)}function Dp(e){for(e=e.child;e!==null;)e.tag===30?An(e.child,!1):(e.subtreeFlags&33554432)!==0&&Dp(e),e=e.sibling}function Pu(e,t,n,i,l,o,y){for(var S=!1;t!==null;){if(t.tag===5){var E=t.stateNode;if(o!==null&&Tt<o.length){var U=o[Tt],F=Sf(E);(U.view||F.view)&&(S=!0);var P;if(P=(e.flags&4)===0)if(F.clip)P=!0;else{P=U.rect;var N=F.rect;P=P.y!==N.y||P.x!==N.x||P.height!==N.height||P.width!==N.width}P&&(e.flags|=4),F.abs?F=!U.abs:(U=U.rect,F=F.rect,F=U.height!==F.height||U.width!==F.width),F&&(e.flags|=32)}else e.flags|=32;(e.flags&4)!==0&&M0(E,Tt===0?n:n+"_"+Tt,l),S&&(e.flags&4)!==0||(_n===null&&(_n=[]),_n.push(E,Tt===0?i:i+"_"+Tt,t.memoizedProps)),Tt++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&y?e.flags|=t.flags&32:Pu(e,t.child,n,i,l,o,y)&&(S=!0));t=t.sibling}return S}function Op(e,t){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,i=e.stateNode,l=Hn(n,i),o=In(n.default,n.update),y;y=e.memoizedState,e.memoizedState=null,i=e;var S=e.child;Tt=0,l=Pu(i,S,l,l,o,y,!1),(e.flags&4)!==0&&l&&$a(e,n.onUpdate)}else(e.subtreeFlags&33554432)!==0&&Op(e);e=e.sibling}}var $e=!1,_e=!1,wn=!1,ju=!1,zp=typeof WeakSet=="function"?WeakSet:Set,et=null,En=!1,fl=!1,Qr=!1,Yu=!1;function wb(e,t,n){if(e=e.containerInfo,vf=cs,e=Ld(e),Oc(e)){if("selectionStart"in e)var i={start:e.selectionStart,end:e.selectionEnd};else e:{i=(i=e.ownerDocument)&&i.defaultView||window;var l=i.getSelection&&i.getSelection();if(l&&l.rangeCount!==0){i=l.anchorNode;var o=l.anchorOffset,y=l.focusNode;l=l.focusOffset;try{i.nodeType,y.nodeType}catch{i=null;break e}var S=0,E=-1,U=-1,F=0,P=0,N=e,I=null;t:for(;;){for(var J;N!==i||o!==0&&N.nodeType!==3||(E=S+o),N!==y||l!==0&&N.nodeType!==3||(U=S+l),N.nodeType===3&&(S+=N.nodeValue.length),(J=N.firstChild)!==null;)I=N,N=J;for(;;){if(N===e)break t;if(I===i&&++F===o&&(E=S),I===y&&++P===l&&(U=S),(J=N.nextSibling)!==null)break;N=I,I=N.parentNode}N=J}i=E===-1||U===-1?null:{start:E,end:U}}else i=null}i=i||{start:0,end:0}}else i=null;for(yf={focusedElem:e,selectionRange:i},cs=!1,n=(n&335544064)===n,et=t,t=n?9270:1024;et!==null;){if(e=et,n&&(i=e.deletions,i!==null))for(o=0;o<i.length;o++)n&&Vu(i[o]);if(e.alternate===null&&(e.flags&2)!==0)n&&Ep(e),Wr(n);else{if(e.tag===22){if(i=e.alternate,e.memoizedState!==null){i!==null&&i.memoizedState===null&&n&&Vu(i),Wr(n);continue}else if(i!==null&&i.memoizedState!==null){n&&Ep(e),Wr(n);continue}}i=e.child,(e.subtreeFlags&t)!==0&&i!==null?(i.return=e,et=i):(n&&Cp(e),Wr(n))}}Lt=null}function Wr(e){for(;et!==null;){var t=et,n=e,i=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 15:break;case 1:if((l&1024)!==0&&i!==null){n=void 0,l=i.memoizedProps,i=i.memoizedState;var o=t.stateNode;try{var y=sa(t.type,l);n=o.getSnapshotBeforeUpdate(y,i),o.__reactInternalSnapshotBeforeUpdate=n}catch(S){we(t,t.return,S)}}break;case 3:if((l&1024)!==0){if(i=t.stateNode.containerInfo,n=i.nodeType,n===9)wf(i);else if(n===1)switch(i.nodeName){case"HEAD":case"HTML":case"BODY":wf(i);break;default:i.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:n&&i!==null&&(n=Hn(i.memoizedProps,i.stateNode),l=t.memoizedProps,l=In(l.default,l.update),l!=="none"&&Ya(i,n,l,i.memoizedState=[],!0));break;default:if((l&1024)!==0)throw Error(r(163))}if(i=t.sibling,i!==null){i.return=t.return,et=i;break}et=t.return}}function Np(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:Mn(e,n),i&4&&cl(5,n);break;case 1:if(Mn(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(y){we(n,n.return,y)}else{var l=sa(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(l,t,e.__reactInternalSnapshotBeforeUpdate)}catch(y){we(n,n.return,y)}}i&64&&xp(n),i&512&&Sn(n,n.return);break;case 3:if(Mn(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{um(e,t)}catch(y){we(n,n.return,y)}}break;case 27:t===null&&i&4&&wp(n);case 26:case 5:Mn(e,n),t===null&&i&4&&Uu(n),i&512&&Sn(n,n.return);break;case 12:Mn(e,n);break;case 31:Mn(e,n),i&4&&Hp(e,n);break;case 13:Mn(e,n),i&4&&Ip(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Hb.bind(null,n),y1(e,n))));break;case 22:if(i=n.memoizedState!==null||$e,!i){var o=t!==null&&t.memoizedState!==null||_e;t=$e,l=_e,$e=i,(_e=o)&&!l?(i=2,(n.subtreeFlags&8772)!==0&&(i|=1),un(e,n,i)):Mn(e,n),$e=t,_e=l}break;case 30:Mn(e,n),i&512&&Sn(n,n.return);break;case 7:i&512&&Sn(n,n.return);default:Mn(e,n)}}function ku(e,t){for(e=e.child;e!==null;)Bp(e,t),e=e.sibling}function Bp(e,t){switch(e.tag){case 5:case 26:try{var n=e.stateNode;if(t){var i=n.style;typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"}else{var l=e.stateNode,o=e.memoizedProps.style,y=o!=null&&o.hasOwnProperty("display")?o.display:null;l.style.display=y==null||typeof y=="boolean"?"":(""+y).trim()}}catch(E){we(e,e.return,E)}Xu(e,t);break;case 6:try{e.stateNode.nodeValue=t?"":e.memoizedProps,xe=!0}catch(E){we(e,e.return,E)}break;case 18:try{var S=e.stateNode;t?E0(S,!0):E0(e.stateNode,!1)}catch(E){we(e,e.return,E)}break;case 22:case 23:e.memoizedState===null&&ku(e,t);break;default:ku(e,t)}}function Xu(e,t){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){e:{var n=e,i=t;switch(n.tag){case 4:Bp(n,i);break e;case 22:n.memoizedState===null&&Xu(n,i);break e;default:Xu(n,i)}}e=e.sibling}}function Up(e){var t=e.alternate;t!==null&&(e.alternate=null,Up(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&nr(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ue=null,xt=!1;function on(e,t,n){for(n=n.child;n!==null;)Lp(e,t,n),n=n.sibling}function Lp(e,t,n){if(Ot&&typeof Ot.onCommitFiberUnmount=="function")try{Ot.onCommitFiberUnmount(Bs,n)}catch{}switch(n.tag){case 26:_e||rt(n,t),on(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&!_e&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:_e||rt(n,t),ul(n);var i=Ue,l=xt;Ei(n.type)&&(Ue=n.stateNode,xt=!1),on(e,t,n),G0(n.stateNode,n.type,n.memoizedProps),Ue=i,xt=l;break;case 5:_e||rt(n,t),ul(n);case 6:if(n.tag===6&&ul(n),i=Ue,l=xt,Ue=null,on(e,t,n),Ue=i,xt=l,Ue!==null)if(xt)try{(Ue.nodeType===9?Ue.body:Ue.nodeName==="HTML"?Ue.ownerDocument.body:Ue).removeChild(n.stateNode),xe=!0}catch(o){we(n,t,o)}else try{Ue.removeChild(n.stateNode),xe=!0}catch(o){we(n,t,o)}break;case 18:Ue!==null&&(xt?(e=Ue,w0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),us(e)):w0(Ue,n.stateNode));break;case 4:i=Ue,l=xt,Ue=n.stateNode.containerInfo,xt=!0,on(e,t,n),Ue=i,xt=l;break;case 0:case 11:case 14:case 15:bi(2,n,t),_e||bi(4,n,t),on(e,t,n);break;case 1:_e||(rt(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&Sp(n,t,i)),on(e,t,n);break;case 21:on(e,t,n);break;case 22:_e=(i=_e)||n.memoizedState!==null,on(e,t,n),_e=i;break;case 30:rt(n,t),on(e,t,n);break;case 7:_e||rt(n,t),on(e,t,n);break;default:on(e,t,n)}}function Hp(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{us(e)}catch(n){we(t,t.return,n)}}}function Ip(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{us(e)}catch(n){we(t,t.return,n)}}function Eb(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new zp),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new zp),t;default:throw Error(r(435,e.tag))}}function Jr(e,t){var n=Eb(e);t.forEach(function(i){if(!n.has(i)){n.add(i);var l=Ib.bind(null,e,i);i.then(l,l)}})}function mt(e,t,n){var i=t.deletions;if(i!==null)for(var l=0;l<i.length;l++){var o=i[l],y=e,S=t,E=S;e:for(;E!==null;){switch(E.tag){case 27:if(Ei(E.type)){Ue=E.stateNode,xt=!1;break e}break;case 5:Ue=E.stateNode,xt=!1;break e;case 3:case 4:Ue=E.stateNode.containerInfo,xt=!0;break e}E=E.return}if(Ue===null)throw Error(r(160));Lp(y,S,o),Ue=null,xt=!1,y=o.alternate,y!==null&&(y.return=null),o.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Fp(t,e,n),t=t.sibling}var cn=null;function Fp(e,t,n){var i=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(l&4&&(i=e.updateQueue,i=i!==null?i.events:null,i!==null))for(var o=0;o<i.length;o++){var y=i[o];y.ref.impl=y.nextImpl}mt(t,e,n),pt(e),l&4&&(bi(3,e,e.return),cl(3,e),bi(5,e,e.return));break;case 1:mt(t,e,n),pt(e),l&512&&(_e||i===null||rt(i,i.return)),l&64&&$e&&(e=e.updateQueue,e!==null&&(t=e.callbacks,t!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?t:n.concat(t))));break;case 26:if(o=cn,mt(t,e,n),pt(e),l&512&&(_e||i===null||rt(i,i.return)),l&4)if(l=i!==null?i.memoizedState:null,n=e.memoizedState,i===null)if(n===null)if(e.stateNode===null)if($e)e.stateNode=S0(e.type,e.memoizedProps,t.containerInfo,e);else{e:{t=e.type,n=e.memoizedProps,l=o.ownerDocument||o;t:switch(t){case"title":i=l.getElementsByTagName("title")[0],(!i||i[Hs]||i[it]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=l.createElement(t),l.head.insertBefore(i,l.querySelector("head > title"))),ot(i,t,n),i[it]=e,We(i),t=i;break e;case"link":if(o=k0("link","href",l).get(t+(n.href||""))){for(y=0;y<o.length;y++)if(i=o[y],i.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&i.getAttribute("rel")===(n.rel==null?null:n.rel)&&i.getAttribute("title")===(n.title==null?null:n.title)&&i.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){o.splice(y,1);break t}}i=l.createElement(t),ot(i,t,n),l.head.appendChild(i);break;case"meta":if(o=k0("meta","content",l).get(t+(n.content||""))){for(y=0;y<o.length;y++)if(i=o[y],i.getAttribute("content")===(n.content==null?null:""+n.content)&&i.getAttribute("name")===(n.name==null?null:n.name)&&i.getAttribute("property")===(n.property==null?null:n.property)&&i.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&i.getAttribute("charset")===(n.charSet==null?null:n.charSet)){o.splice(y,1);break t}}i=l.createElement(t),ot(i,t,n),l.head.appendChild(i);break;default:throw Error(r(468,t))}i[it]=e,We(i),t=i}e.stateNode=t}else $e||zf(o,e.type,e.stateNode);else e.stateNode=Y0(o,n,e.memoizedProps);else l!==n?(l===null?(t=i.stateNode,t===null||_e||t.parentNode.removeChild(t)):l.count--,n===null?$e||zf(o,e.type,e.stateNode):Y0(o,n,e.memoizedProps)):n===null&&e.stateNode!==null&&Lu(e,e.memoizedProps,i.memoizedProps);break;case 27:mt(t,e,n),pt(e),l&512&&(_e||i===null||rt(i,i.return)),i!==null&&l&4&&Lu(e,e.memoizedProps,i.memoizedProps);break;case 5:if(o=wn,wn=!1,mt(t,e,n),wn=o,pt(e),l&512&&(_e||i===null||rt(i,i.return)),e.flags&32){t=e.stateNode;try{Ma(t,""),xe=!0}catch(F){we(e,e.return,F)}}l&4&&e.stateNode!=null&&(t=e.memoizedProps,Lu(e,t,i!==null?i.memoizedProps:t)),l&1024&&(ju=!0);break;case 6:if(mt(t,e,n),pt(e),l&4){if(e.stateNode===null)throw Error(r(162));t=e.memoizedProps,n=e.stateNode;try{n.nodeValue=t,xe=!0}catch(F){we(e,e.return,F)}}break;case 3:if(xe=!1,mo=null,o=cn,cn=Tl(t.containerInfo),mt(t,e,n),cn=o,pt(e),l&4&&i!==null&&i.memoizedState.isDehydrated)try{us(t.containerInfo)}catch(F){we(e,e.return,F)}ju&&(ju=!1,Gp(e)),xe=!1;break;case 4:l=wn,wn=$e,i=ld(),o=cn,cn=Tl(e.stateNode.containerInfo),mt(t,e,n),pt(e),cn=o,xe&&fl&&(Qr=!0),xe=i,wn=l;break;case 12:mt(t,e,n),pt(e);break;case 31:mt(t,e,n),pt(e),l&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Jr(e,t)));break;case 13:mt(t,e,n),pt(e),e.child.flags&8192&&e.memoizedState!==null!=(i!==null&&i.memoizedState!==null)&&(to=Dt()),l&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Jr(e,t)));break;case 22:o=e.memoizedState!==null,y=i!==null&&i.memoizedState!==null;var S=$e,E=_e,U=wn;$e=S||o,wn=U||o,_e=E||y,mt(t,e,n),_e=E,wn=U,$e=S,pt(e),l&8192&&(t=e.stateNode,t._visibility=o?t._visibility&-2:t._visibility|1,!o||i===null||y||$e||_e||(t=y||_e,n=$e,i=_e,$e=o||$e,_e=t,Ti(e,2),$e=n,_e=i),!o&&wn||ku(e,o)),l&4&&(t=e.updateQueue,t!==null&&(n=t.retryQueue,n!==null&&(t.retryQueue=null,Jr(e,n))));break;case 19:mt(t,e,n),pt(e),l&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Jr(e,t)));break;case 30:l&512&&(_e||i===null||rt(i,i.return)),l=ld(),o=fl,y=(n&335544064)===n,S=e.memoizedProps,fl=y&&In(S.default,S.update)!=="none",mt(t,e,n),pt(e),y&&i!==null&&xe&&(e.flags|=4),fl=o,xe=l;break;case 21:break;case 7:l&512&&(_e||i===null||rt(i,i.return)),i&&i.stateNode!==null&&(i.stateNode._fragmentFiber=e);default:mt(t,e,n),pt(e)}}function pt(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(Ap(i)){n=i;break}i=i.return}i=null;for(var l=e.return;l!==null;){if(Bu(l)){var o=l.stateNode;i===null?i=[o]:i.push(o)}if(Nu(l))break;l=l.return}var y=i;if(n==null)throw Error(r(160));switch(n.tag){case 27:var S=n.stateNode,E=Hu(e);kr(e,E,S,y);break;case 5:var U=n.stateNode;n.flags&32&&(Ma(U,""),n.flags&=-33);var F=Hu(e);kr(e,F,U,y);break;case 3:case 4:var P=n.stateNode.containerInfo,N=Hu(e);Iu(e,N,P,y);break;default:throw Error(r(161))}}catch(I){we(e,e.return,I)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Gp(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Gp(t),t.tag===5&&t.flags&1024&&(t=t.stateNode,cs=!0,t.reset(),cs=!1),e=e.sibling}}function ka(e,t){if(t.subtreeFlags&9270)for(t=t.child;t!==null;)Vp(t,e),t=t.sibling;else Op(t)}function Vp(e,t){var n=e.alternate;if(n===null)Fu(e,!1);else switch(e.tag){case 3:if(Yu=En=!1,Mp(),ka(t,e),!En&&!Qr){if(e=_n,e!==null)for(var i=0;i<e.length;i+=3){n=e[i];var l=e[i+1];R0(n,e[i+2]),n=n.ownerDocument.documentElement,n!==null&&n.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+l+")"})}e=t.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===""&&(e.style.viewTransitionName="none",e.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),Yu=!0}_n=null;break;case 5:ka(t,e);break;case 4:i=En,En=!1,ka(t,e),En&&(Qr=!0),En=i;break;case 22:e.memoizedState===null&&(n.memoizedState!==null?Fu(e,!1):ka(t,e));break;case 30:i=En,l=Mp(),En=!1,ka(t,e),En&&(e.flags|=4);var o=e.memoizedProps,y=e.stateNode;t=Hn(o,y),y=Hn(n.memoizedProps,y);var S=In(o.default,o.update);S==="none"?t=!1:(o=n.memoizedState,n.memoizedState=null,n=e.child,Tt=0,t=Pu(e,n,t,y,S,o,!0),Tt!==(o===null?0:o.length)&&(e.flags|=32)),(e.flags&4)!==0&&t?($a(e,e.memoizedProps.onUpdate),_n=l):l!==null&&(l.push.apply(l,_n),_n=l),En=(e.flags&32)!==0?!0:i;break;default:ka(t,e)}}function Mn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Np(e,t.alternate,t),t=t.sibling}function Ti(e,t){for(e=e.child;e!==null;){var n=e,i=t;switch(n.tag){case 0:case 11:case 14:case 15:bi(4,n,n.return),Ti(n,i);break;case 1:rt(n,n.return);var l=n.stateNode;typeof l.componentWillUnmount=="function"&&Sp(n,n.return,l),Ti(n,i);break;case 27:(i&2)!==0&&G0(n.stateNode,n.type,n.memoizedProps);case 5:rt(n,n.return),n.tag!==5&&n.tag!==27||ul(n),Ti(n,i);break;case 6:ul(n);break;case 26:rt(n,n.return),l=n.stateNode,n.memoizedState!==null||l===null||_e||l.parentNode.removeChild(l),Ti(n,i);break;case 22:n.memoizedState===null&&Ti(n,i);break;case 30:rt(n,n.return),Ti(n,i);break;case 7:rt(n,n.return);default:Ti(n,i)}e=e.sibling}}function un(e,t,n){for(n=(t.subtreeFlags&8772)!==0?n:n&-2,t=t.child;t!==null;){var i=t.alternate,l=e,o=t,y=o.flags,S=(n&1)!==0;switch(o.tag){case 0:case 11:case 15:un(l,o,n),cl(4,o);break;case 1:if(un(l,o,n),i=o,l=i.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(F){we(i,i.return,F)}if(i=o,l=i.updateQueue,l!==null){var E=i.stateNode;try{var U=l.shared.hiddenCallbacks;if(U!==null)for(l.shared.hiddenCallbacks=null,l=0;l<U.length;l++)cm(U[l],E)}catch(F){we(i,i.return,F)}}S&&y&64&&xp(o),Sn(o,o.return);break;case 27:(n&2)!==0&&wp(o);case 5:o.tag!==5&&o.tag!==27||_p(o),un(l,o,n),S&&i===null&&y&4&&Uu(o),Sn(o,o.return);break;case 6:_p(o);break;case 26:E=o.stateNode,o.memoizedState!==null||E===null||$e||zf(Tl(E.ownerDocument),o.type,E),un(l,o,n),S&&i===null&&y&4&&Uu(o),Sn(o,o.return);break;case 12:un(l,o,n);break;case 31:un(l,o,n),S&&y&4&&Hp(l,o);break;case 13:un(l,o,n),S&&y&4&&Ip(l,o);break;case 22:o.memoizedState===null&&un(l,o,n),Sn(o,o.return);break;case 30:un(l,o,n),Sn(o,o.return);break;case 7:Sn(o,o.return);default:un(l,o,n)}t=t.sibling}}function Ku(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Qs(n))}function Zu(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Qs(e))}function Wt(e,t,n,i){var l=(n&335544064)===n;if(t.subtreeFlags&(l?10262:10256))for(t=t.child;t!==null;)qp(e,t,n,i),t=t.sibling;else l&&Dp(t)}function qp(e,t,n,i){var l=(n&335544064)===n;l&&t.alternate===null&&t.return!==null&&t.return.alternate!==null&&Zr(t);var o=t.flags;switch(t.tag){case 0:case 11:case 15:Wt(e,t,n,i),o&2048&&cl(9,t);break;case 1:Wt(e,t,n,i);break;case 3:Wt(e,t,n,i),l&&Yu&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,e.style.viewTransitionName==="root"&&(e.style.viewTransitionName=""),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName==="none"&&(e.style.viewTransitionName="")),o&2048&&(o=null,t.alternate!==null&&(o=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==o&&(t.refCount++,o!=null&&Qs(o)));break;case 12:if(o&2048){Wt(e,t,n,i),o=t.stateNode;try{var y=t.memoizedProps,S=y.id,E=y.onPostCommit;typeof E=="function"&&E(S,t.alternate===null?"mount":"update",o.passiveEffectDuration,-0)}catch(U){we(t,t.return,U)}}else Wt(e,t,n,i);break;case 31:Wt(e,t,n,i);break;case 13:Wt(e,t,n,i);break;case 23:break;case 22:y=t.stateNode,S=t.alternate,t.memoizedState!==null?(l&&S!==null&&S.memoizedState===null&&Zr(S),y._visibility&2?Wt(e,t,n,i):hl(e,t)):(l&&S!==null&&S.memoizedState!==null&&Zr(t),y._visibility&2?Wt(e,t,n,i):(y._visibility|=2,Xa(e,t,n,i,(t.subtreeFlags&10256)!==0||!1))),o&2048&&Ku(S,t);break;case 24:Wt(e,t,n,i),o&2048&&Zu(t.alternate,t);break;case 30:l&&(o=t.alternate,o!==null&&(An(o.child,!0),An(t.child,!0))),Wt(e,t,n,i);break;default:Wt(e,t,n,i)}}function Xa(e,t,n,i,l){for(l=l&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var o=e,y=t,S=n,E=i,U=y.flags;switch(y.tag){case 0:case 11:case 15:Xa(o,y,S,E,l),cl(8,y);break;case 23:break;case 22:var F=y.stateNode;y.memoizedState!==null?F._visibility&2?Xa(o,y,S,E,l):hl(o,y):(F._visibility|=2,Xa(o,y,S,E,l)),l&&U&2048&&Ku(y.alternate,y);break;case 24:Xa(o,y,S,E,l),l&&U&2048&&Zu(y.alternate,y);break;default:Xa(o,y,S,E,l)}t=t.sibling}}function hl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,l=i.flags;switch(i.tag){case 22:hl(n,i),l&2048&&Ku(i.alternate,i);break;case 24:hl(n,i),l&2048&&Zu(i.alternate,i);break;default:hl(n,i)}t=t.sibling}}var la=8192;function ra(e,t,n){if(e.subtreeFlags&la)for(e=e.child;e!==null;)Pp(e,t,n),e=e.sibling}function Pp(e,t,n){switch(e.tag){case 26:ra(e,t,n),e.flags&la&&(e.memoizedState!==null?z1(n,cn,e.memoizedState,e.memoizedProps):(e=e.stateNode,(t&335544128)===t&&Q0(n,e)));break;case 5:ra(e,t,n),e.flags&la&&(e=e.stateNode,(t&335544128)===t&&Q0(n,e));break;case 3:case 4:var i=cn;cn=Tl(e.stateNode.containerInfo),ra(e,t,n),cn=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=la,la=16777216,ra(e,t,n),la=i):ra(e,t,n));break;case 30:if((e.flags&la)!==0&&(i=e.memoizedProps.name,i!=null&&i!=="auto")){var l=e.stateNode;l.paired=null,Lt===null&&(Lt=new Map),Lt.set(i,l)}ra(e,t,n);break;default:ra(e,t,n)}}function jp(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function dl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];et=i,kp(i,e)}jp(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Yp(e),e=e.sibling}function Yp(e){switch(e.tag){case 0:case 11:case 15:dl(e),e.flags&2048&&bi(9,e,e.return);break;case 3:dl(e);break;case 12:dl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,$r(e)):dl(e);break;default:dl(e)}}function $r(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];et=i,kp(i,e)}jp(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:bi(8,t,t.return),$r(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,$r(t));break;default:$r(t)}e=e.sibling}}function kp(e,t){for(;et!==null;){var n=et;switch(n.tag){case 0:case 11:case 15:bi(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:Qs(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,et=i;else e:for(n=e;et!==null;){i=et;var l=i.sibling,o=i.return;if(Up(i),i===n){et=null;break e}if(l!==null){l.return=o,et=l;break e}et=o}}}var Mb={getCacheForType:function(e){var t=at(je),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return at(je).controller.signal}},Rb=typeof WeakMap=="function"?WeakMap:Map,Se=0,De=null,he=null,ge=0,Ae=0,Ht=null,xi=!1,Ka=!1,Qu=!1,Xn=0,Fe=0,Si=0,oa=0,eo=0,It=0,Za=0,ml=null,St=null,Wu=!1,to=0,Xp=0,no=1/0,io=null,_i=null,He=0,fn=null,ca=null,Rn=0,Ju=0,$u=null,Kp=null,Qa=null,Wa=null,Ja=null,pl=0,ao=null;function Ft(){return(Se&2)!==0&&ge!==0?ge&-ge:le.T!==null?uf():Wh()}function Zp(){if(It===0)if((ge&536870912)===0||fe){var e=Jl;Jl<<=1,(Jl&3932160)===0&&(Jl=262144),It=e}else It=536870912;return e=st.current,e!==null&&(e.flags|=32),It}function $a(e,t){if(t!=null){var n=e.stateNode,i=n.ref;i===null&&(i=n.ref=C0(Hn(e.memoizedProps,n))),Wa===null&&(Wa=[]),Wa.push(t.bind(null,i))}}function _t(e,t,n){(e===De&&(Ae===2||Ae===9)||e.cancelPendingCommit!==null)&&(es(e,0),Ai(e,ge,It,!1)),Ls(e,n),((Se&2)===0||e!==De)&&(e===De&&((Se&2)===0&&(oa|=n),Fe===4&&Ai(e,ge,It,!1)),Cn(e))}function Qp(e,t,n){if((Se&6)!==0)throw Error(r(327));var i=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Us(e,t),l=i?Ob(e,t):tf(e,t,!0),o=i;do{if(l===0){Ka&&!i&&Ai(e,t,0,!1);break}else{if(n=e.current.alternate,o&&!Cb(n)){l=tf(e,t,!1),o=!1;continue}if(l===2){if(o=t,e.errorRecoveryDisabledLanes&o)var y=0;else y=e.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){t=y;e:{var S=e;l=ml;var E=S.current.memoizedState.isDehydrated;if(E&&(es(S,y).flags|=256),y=tf(S,y,!1),y!==2&&y!==6){if(Qu&&!E){S.errorRecoveryDisabledLanes|=o,oa|=o,l=4;break e}o=St,St=l,o!==null&&(St===null?St=o:St.push.apply(St,o))}l=y}if(o=!1,l!==2)continue}}if(l===1){es(e,0),Ai(e,t,0,!0);break}e:{switch(i=e,o=l,o){case 0:case 1:throw Error(r(345));case 4:if((t&4194048)!==t&&(t&62914560)!==t)break;case 6:Ai(i,t,It,!xi);break e;case 2:St=null;break;case 3:case 5:break;default:throw Error(r(329))}if((t&62914560)===t&&(l=to+300-Dt(),10<l)){if(Ai(i,t,It,!xi),er(i,0,!0)!==0)break e;Rn=t,i.timeoutHandle=xf(Wp.bind(null,i,n,St,io,Wu,t,It,oa,Za,xi,o,"Throttled",-0,0),l);break e}Wp(i,n,St,io,Wu,t,It,oa,Za,xi,o,null,-0,0)}}break}while(!0);Cn(e)}function Wp(e,t,n,i,l,o,y,S,E,U,F,P,N,I){e.timeoutHandle=-1;var J=t.subtreeFlags,ee=(o&335544064)===o;if(P=null,(ee||J&8192||(J&16785408)===16785408)&&(P={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:bn},Lt=null,Pp(t,o,P),ee&&(J=P,ee=e.containerInfo,ee=(ee.nodeType===9?ee:ee.ownerDocument).__reactViewTransition,ee!=null&&(J.count++,J.waitingForViewTransition=!0,J=_l.bind(J),ee.finished.then(J,J))),J=(o&62914560)===o?to-Dt():(o&4194048)===o?Xp-Dt():0,J=N1(P,J),J!==null)){Rn=o,e.cancelPendingCommit=J(s0.bind(null,e,t,o,n,i,l,y,S,E,U,F,P,null,N,I)),Ai(e,o,y,!U);return}s0(e,t,o,n,i,l,y,S,E,U,F,P)}function Cb(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var l=n[i],o=l.getSnapshot;l=l.value;try{if(!Bt(o(),l))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ai(e,t,n,i){t=kh(e,t),t&=~eo,t&=~oa,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var l=t;0<l;){var o=31-zt(l),y=1<<o;i[o]=-1,l&=~y}n!==0&&Kh(e,n,t)}function so(){return(Se&6)===0?(gl(0),!1):!0}function ef(){if(he!==null){if(Ae===0)var e=he.return;else e=he,Vn=Qi=null,ou(e),Ga=null,$s=0,e=he;for(;e!==null;)Tp(e.alternate,e),e=e.return;he=null}}function es(e,t){var n=e.timeoutHandle;return n!==-1&&(e.timeoutHandle=-1,$b(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Rn=0,ef(),De=e,he=n=Fn(e.current,null),ge=t,Ae=0,Ht=null,xi=!1,Ka=Us(e,t),Qu=!1,Za=It=eo=oa=Si=Fe=0,St=ml=null,Wu=!1,Xn=kh(e,t),dr(),n}function Jp(e,t){oe=null,le.H=Ir,t===Fa||t===Ar?(t=sm(),Ae=3):t===Zc?(t=sm(),Ae=4):Ae=t===_u?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Ht=t,he===null&&(Fe=1,Fr(e,Xt(t,e.current)))}function $p(){var e=st.current;return e===null?!0:(ge&4194048)===ge?ft===null:(ge&62914560)===ge||(ge&536870912)!==0?e===ft:!1}function e0(){var e=le.H;return le.H=Ir,e===null?Ir:e}function t0(){var e=le.A;return le.A=Mb,e}function lo(){Fe=4,xi||(ge&4194048)!==ge&&st.current!==null||(Ka=!0),(Si&134217727)===0&&(oa&134217727)===0||De===null||Ai(De,ge,It,!1)}function tf(e,t,n){var i=Se;Se|=2;var l=e0(),o=t0();(De!==e||ge!==t)&&(io=null,es(e,t)),t=!1;var y=Fe;e:do try{if(Ae!==0&&he!==null){var S=he,E=Ht;switch(Ae){case 8:ef(),y=6;break e;case 3:case 2:case 9:case 6:st.current===null&&(t=!0);var U=Ae;if(Ae=0,Ht=null,ts(e,S,E,U),n&&Ka){y=0;break e}break;default:U=Ae,Ae=0,Ht=null,ts(e,S,E,U)}}Db(),y=Fe;break}catch(F){Jp(e,F)}while(!0);return t&&e.shellSuspendCounter++,Vn=Qi=null,Se=i,le.H=l,le.A=o,he===null&&(De=null,ge=0,dr()),y}function Db(){for(;he!==null;)n0(he)}function Ob(e,t){var n=Se;Se|=2;var i=e0(),l=t0();De!==e||ge!==t?(io=null,no=Dt()+500,es(e,t)):Ka=Us(e,t);e:do try{if(Ae!==0&&he!==null){t=he;var o=Ht;t:switch(Ae){case 1:Ae=0,Ht=null,ts(e,t,o,1);break;case 2:case 9:if(im(o)){Ae=0,Ht=null,i0(t);break}t=function(){Ae!==2&&Ae!==9||De!==e||(Ae=7),Cn(e)},o.then(t,t);break e;case 3:Ae=7;break e;case 4:Ae=5;break e;case 7:im(o)?(Ae=0,Ht=null,i0(t)):(Ae=0,Ht=null,ts(e,t,o,7));break;case 5:var y=null;switch(he.tag){case 26:y=he.memoizedState;case 5:case 27:var S=he;if(y?K0(y):S.stateNode.complete){Ae=0,Ht=null;var E=S.sibling;if(E!==null)he=E;else{var U=S.return;U!==null?(he=U,ro(U)):he=null}break t}}Ae=0,Ht=null,ts(e,t,o,5);break;case 6:Ae=0,Ht=null,ts(e,t,o,6);break;case 8:ef(),Fe=6;break e;default:throw Error(r(462))}}zb();break}catch(F){Jp(e,F)}while(!0);return Vn=Qi=null,le.H=i,le.A=l,Se=n,he!==null?0:(De=null,ge=0,dr(),Fe)}function zb(){for(;he!==null&&!Zv();)n0(he)}function n0(e){var t=yp(e.alternate,e,Xn);e.memoizedProps=e.pendingProps,t===null?ro(e):he=t}function i0(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=fp(n,t,t.pendingProps,t.type,void 0,ge);break;case 11:t=fp(n,t,t.pendingProps,t.type.render,t.ref,ge);break;case 5:ou(t);var i=t;i===Je&&(fe?(br(i),i.tag===5&&i.stateNode!=null&&(ze=i.stateNode)):(br(i),fe=!0));default:Tp(n,t),t=he=kd(t,Xn),t=yp(n,t,Xn)}e.memoizedProps=e.pendingProps,t===null?ro(e):he=t}function ts(e,t,n,i){Vn=Qi=null,ou(t),Ga=null,$s=0;var l=t.return;try{if(bb(e,l,t,n,ge)){Fe=1,Fr(e,Xt(n,e.current)),he=null;return}}catch(o){if(l!==null)throw he=l,o;Fe=1,Fr(e,Xt(n,e.current)),he=null;return}t.flags&32768?(fe||i===1?e=!0:Ka||(ge&536870912)!==0?e=!1:(xi=e=!0,(i===2||i===9||i===3||i===6)&&(i=st.current,i!==null&&i.tag===13&&(i.flags|=16384))),a0(t,e)):ro(t)}function ro(e){var t=e;do{if((t.flags&32768)!==0){a0(t,xi);return}e=t.return;var n=_b(t.alternate,t,Xn);if(n!==null){he=n;return}if(t=t.sibling,t!==null){he=t;return}he=t=e}while(t!==null);Fe===0&&(Fe=5)}function a0(e,t){do{var n=Ab(e.alternate,e);if(n!==null){n.flags&=32767,he=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){he=e;return}he=e=n}while(e!==null);Fe=6,he=null}function s0(e,t,n,i,l,o,y,S,E,U,F,P){e.cancelPendingCommit=null;do oo();while(He!==0);if((Se&6)!==0)throw Error(r(327));if(t!==null){if(t===e.current)throw Error(r(177));e===De&&(he=De=null,ge=0),ca=t,fn=e,Rn=n,$u=l,Kp=i,Nb(e,t,n,y,S,E,P)}}function Nb(e,t,n,i,l,o,y){var S=t.lanes|t.childLanes;if(Ju=S,S|=Lc,sy(e,n,S,i,l,o),Wa=null,(n&335544064)===n?(Ja=rb(e),i=10262):(Ja=null,i=10256),(t.subtreeFlags&i)!==0||(t.flags&i)!==0?(e.callbackNode=null,e.callbackPriority=0,Fb(Ql,function(){return lf(),null})):(e.callbackNode=null,e.callbackPriority=0),Xr=!1,i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=le.T,le.T=null,l=be.p,be.p=2,o=Se,Se|=4;try{wb(e,t,n)}finally{Se=o,be.p=l,le.T=i}}He=1,Xr?Qa=s1(y,e.containerInfo,Ja,nf,af,Ub,sf,lf,Bb):(nf(),af(),sf())}function Bb(e){if(He!==0){var t=fn.onRecoverableError;t(e,{componentStack:null})}}function Ub(){He===3&&(He=0,Vp(ca,fn),He=4)}function nf(){if(He===1){He=0;var e=fn,t=ca,n=Rn,i=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||i){i=le.T,le.T=null;var l=be.p;be.p=2;var o=Se;Se|=4;try{fl=Qr=!1,Fp(t,e,n),n=yf;var y=Ld(e.containerInfo),S=n.focusedElem,E=n.selectionRange;if(y!==S&&S&&S.ownerDocument&&Ud(S.ownerDocument.documentElement,S)){if(E!==null&&Oc(S)){var U=E.start,F=E.end;if(F===void 0&&(F=U),"selectionStart"in S)S.selectionStart=U,S.selectionEnd=Math.min(F,S.value.length);else{var P=S.ownerDocument||document,N=P&&P.defaultView||window;if(N.getSelection){var I=N.getSelection(),J=S.textContent.length,ee=Math.min(E.start,J),ce=E.end===void 0?ee:Math.min(E.end,J);!I.extend&&ee>ce&&(y=ce,ce=ee,ee=y);var B=Bd(S,ee),O=Bd(S,ce);if(B&&O&&(I.rangeCount!==1||I.anchorNode!==B.node||I.anchorOffset!==B.offset||I.focusNode!==O.node||I.focusOffset!==O.offset)){var L=P.createRange();L.setStart(B.node,B.offset),I.removeAllRanges(),ee>ce?(I.addRange(L),I.extend(O.node,O.offset)):(L.setEnd(O.node,O.offset),I.addRange(L))}}}}for(P=[],I=S;I=I.parentNode;)I.nodeType===1&&P.push({element:I,left:I.scrollLeft,top:I.scrollTop});for(typeof S.focus=="function"&&S.focus(),S=0;S<P.length;S++){var q=P[S];q.element.scrollLeft=q.left,q.element.scrollTop=q.top}}cs=!!vf,yf=vf=null}finally{Se=o,be.p=l,le.T=i}}e.current=t,He=2}}function af(){if(He===2){He=0;var e=fn,t=ca,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=le.T,le.T=null;var i=be.p;be.p=2;var l=Se;Se|=4;try{Np(e,t.alternate,t)}finally{Se=l,be.p=i,le.T=n}}He=3}}function sf(){if(He===4||He===3){He=0;var e=Qa;Qa=null,Qv();var t=fn,n=ca,i=Rn,l=Kp,o=(i&335544064)===i?10262:10256;if((n.subtreeFlags&o)!==0||(n.flags&o)!==0?He=5:(He=0,ca=fn=null,l0(t,t.pendingLanes)),o=t.pendingLanes,o===0&&(_i=null),dc(i),n=n.stateNode,Ot&&typeof Ot.onCommitFiberRoot=="function")try{Ot.onCommitFiberRoot(Bs,n,void 0,(n.current.flags&128)===128)}catch{}if(l!==null){n=le.T,o=be.p,be.p=2,le.T=null;try{for(var y=t.onRecoverableError,S=0;S<l.length;S++){var E=l[S];y(E.value,{componentStack:E.stack})}}finally{le.T=n,be.p=o}}if(l=Wa,y=Ja,Ja=null,l!==null&&(Wa=null,y===null&&(y=[]),e!==null))for(E=0;E<l.length;E++)n=(0,l[E])(y),n!==void 0&&e.finished.finally(n);(Rn&3)!==0&&oo(),Cn(t),o=t.pendingLanes,(i&261930)!==0&&(o&42)!==0?t===ao?pl++:(pl=0,ao=t):(pl=0,ao=null),gl(0)}}function l0(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Qs(t)))}function oo(){return Qa!==null&&(Qa.skipTransition(),Qa=null),nf(),af(),sf(),lf()}function lf(){if(He!==5)return!1;var e=fn,t=Ju;Ju=0;var n=dc(Rn),i=le.T,l=be.p;try{be.p=32>n?32:n,le.T=null,n=$u,$u=null;var o=fn,y=Rn;if(He=0,ca=fn=null,Rn=0,(Se&6)!==0)throw Error(r(331));var S=Se;if(Se|=4,Yp(o.current),qp(o,o.current,y,n),Se=S,gl(0,!1),Ot&&typeof Ot.onPostCommitFiberRoot=="function")try{Ot.onPostCommitFiberRoot(Bs,o)}catch{}return!0}finally{be.p=l,le.T=i,l0(e,t)}}function r0(e,t,n){t=Xt(n,t),t=Su(e.stateNode,t,2),e=pi(e,t,2),e!==null&&(Ls(e,2),Cn(e))}function we(e,t,n){if(e.tag===3)r0(e,e,n);else for(;t!==null;){if(t.tag===3){r0(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(_i===null||!_i.has(i))){e=Xt(n,e),n=ip(2),i=pi(t,n,2),i!==null&&(ap(n,i,t,e),Ls(i,2),Cn(i));break}}t=t.return}}function rf(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new Rb;var l=new Set;i.set(t,l)}else l=i.get(t),l===void 0&&(l=new Set,i.set(t,l));l.has(n)||(Qu=!0,l.add(n),e=Lb.bind(null,e,t,n),t.then(e,e))}function Lb(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,De===e&&(ge&n)===n&&((Fe===4||Fe===3&&(ge&62914560)===ge&&300>Dt()-to)&&(Se&2)===0?es(e,0):eo|=n,Za===ge&&(Za=0)),Cn(e)}function o0(e,t){t===0&&(t=Xh()),e=Xi(e,t),e!==null&&(Ls(e,t),Cn(e))}function Hb(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),o0(e,n)}function Ib(e,t){var n=0;switch(e.tag){case 31:case 13:var i=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(r(314))}i!==null&&i.delete(t),o0(e,n)}function Fb(e,t){return cc(e,t)}var ns=null,is=null,of=!1,co=!1,cf=!1,wi=0;function Cn(e){e!==is&&e.next===null&&(is===null?ns=is=e:is=is.next=e),co=!0,of||(of=!0,Vb())}function gl(e,t){if(!cf&&co){cf=!0;do for(var n=!1,i=ns;i!==null;){if(e!==0){var l=i.pendingLanes;if(l===0)var o=0;else{var y=i.suspendedLanes,S=i.pingedLanes;o=(1<<31-zt(42|e)+1)-1,o&=l&~(y&~S),o=o&201326741?o&201326741|1:o?o|2:0}o!==0&&(n=!0,h0(i,o))}else o=ge,o=er(i,i===De?o:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(o&3)===0||Us(i,o)||(n=!0,h0(i,o));i=i.next}while(n);cf=!1}}function Gb(){c0()}function c0(){co=of=!1;var e=0;wi!==0&&Jb()&&(e=wi);for(var t=Dt(),n=null,i=ns;i!==null;){var l=i.next,o=u0(i,t);o===0?(i.next=null,n===null?ns=l:n.next=l,l===null&&(is=n)):(n=i,(e!==0||(o&3)!==0)&&(co=!0)),i=l}He!==0&&He!==5||gl(e),wi!==0&&(wi=0)}function u0(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,l=e.expirationTimes,o=e.pendingLanes&-62914561;0<o;){var y=31-zt(o),S=1<<y,E=l[y];E===-1?((S&n)===0||(S&i)!==0)&&(l[y]=ay(S,t)):E<=t&&(e.expiredLanes|=S),o&=~S}if(t=De,n=ge,n=er(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(Ae===2||Ae===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&uc(i),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Us(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&uc(i),dc(n)){case 2:case 8:n=jh;break;case 32:n=Ql;break;case 268435456:n=Yh;break;default:n=Ql}return i=f0.bind(null,e),n=cc(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&uc(i),e.callbackPriority=2,e.callbackNode=null,2}function f0(e,t){if(He!==0&&He!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(oo()&&e.callbackNode!==n)return null;var i=ge;return i=er(e,e===De?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(Qp(e,i,t),u0(e,Dt()),e.callbackNode!=null&&e.callbackNode===n?f0.bind(null,e):null)}function h0(e,t){if(oo())return null;Qp(e,t,!0)}function Vb(){e1(function(){(Se&6)!==0?cc(Ph,Gb):c0()})}function uf(){if(wi===0){var e=$i;e===0&&(e=Wl,Wl<<=1,(Wl&261888)===0&&(Wl=256)),wi=e}return wi}function d0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:sr(e)}function qb(e,t,n,i,l){if(t==="submit"&&n&&n.stateNode===l){var o=d0((l[yt]||null).action),y=i.submitter;y&&(t=(t=y[yt]||null)?d0(t.formAction):y.getAttribute("formAction"),t!==null&&(o=t,y=null));var S=new cr("action","action",null,i,l);e.push({event:S,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(wi!==0){var E=new FormData(l,y);vu(n,{pending:!0,data:E,method:l.method,action:o},null,E)}}else typeof o=="function"&&(S.preventDefault(),E=new FormData(l,y),vu(n,{pending:!0,data:E,method:l.method,action:o},o,E))},currentTarget:l}]})}}for(var ff=0;ff<Uc.length;ff++){var hf=Uc[ff],Pb=hf.toLowerCase(),jb=hf[0].toUpperCase()+hf.slice(1);rn(Pb,"on"+jb)}rn(Fd,"onAnimationEnd"),rn(Gd,"onAnimationIteration"),rn(Vd,"onAnimationStart"),rn("dblclick","onDoubleClick"),rn("focusin","onFocus"),rn("focusout","onBlur"),rn($y,"onTransitionRun"),rn(eb,"onTransitionStart"),rn(tb,"onTransitionCancel"),rn(qd,"onTransitionEnd"),wa("onMouseEnter",["mouseout","mouseover"]),wa("onMouseLeave",["mouseout","mouseover"]),wa("onPointerEnter",["pointerout","pointerover"]),wa("onPointerLeave",["pointerout","pointerover"]),ji("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ji("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ji("onBeforeInput",["compositionend","keypress","textInput","paste"]),ji("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ji("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ji("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var vl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Yb=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(vl));function m0(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],l=i.event;i=i.listeners;e:{var o=void 0;if(t)for(var y=i.length-1;0<=y;y--){var S=i[y],E=S.instance,U=S.currentTarget;if(S=S.listener,E!==o&&l.isPropagationStopped())break e;o=S,l.currentTarget=U;try{o(l)}catch(F){hr(F)}l.currentTarget=null,o=E}else for(y=0;y<i.length;y++){if(S=i[y],E=S.instance,U=S.currentTarget,S=S.listener,E!==o&&l.isPropagationStopped())break e;o=S,l.currentTarget=U;try{o(l)}catch(F){hr(F)}l.currentTarget=null,o=E}}}}function de(e,t){var n=t[$h];n===void 0&&(n=t[$h]=new Set);var i=e+"__bubble";n.has(i)||(p0(t,e,2,!1),n.add(i))}function df(e,t,n){var i=0;t&&(i|=4),p0(n,e,i,t)}var uo="_reactListening"+Math.random().toString(36).slice(2);function mf(e){if(!e[uo]){e[uo]=!0,nd.forEach(function(n){n!=="selectionchange"&&(Yb.has(n)||df(n,!1,e),df(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[uo]||(t[uo]=!0,df("selectionchange",!1,t))}}function p0(e,t,n,i){switch(ag(t)){case 2:var l=H1;break;case 8:l=I1;break;default:l=Bf}n=l.bind(null,t,n,e),l=void 0,!xc||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),i?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function pf(e,t,n,i,l){var o=i;if((t&1)===0&&(t&2)===0&&i!==null)e:for(;;){if(i===null)return;var y=i.tag;if(y===3||y===4){var S=i.stateNode.containerInfo;if(S===l)break;if(y===4)for(y=i.return;y!==null;){var E=y.tag;if((E===3||E===4)&&y.stateNode.containerInfo===l)return;y=y.return}for(;S!==null;){if(y=Pi(S),y===null)return;if(E=y.tag,E===5||E===6||E===26||E===27){i=o=y;continue e}S=S.parentNode}}i=i.return}pd(function(){var U=o,F=bc(n),P=[];e:{var N=Pd.get(e);if(N!==void 0){var I=cr,J=e;switch(e){case"keypress":if(rr(n)===0)break e;case"keydown":case"keyup":I=Cy;break;case"focusin":J="focus",I=wc;break;case"focusout":J="blur",I=wc;break;case"beforeblur":case"afterblur":I=wc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":I=yd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":I=vy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":I=By;break;case Fd:case Gd:case Vd:I=Ty;break;case qd:I=Ly;break;case"scroll":case"scrollend":I=py;break;case"wheel":I=Iy;break;case"copy":case"cut":case"paste":I=Sy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":I=Td;break;case"submit":I=zy;break;case"toggle":case"beforetoggle":I=Gy}var ee=(t&4)!==0,ce=!ee&&(e==="scroll"||e==="scrollend"),B=ee?N!==null?N+"Capture":null:N;ee=[];for(var O=U,L;O!==null;){var q=O;if(L=q.stateNode,q=q.tag,q!==5&&q!==26&&q!==27||L===null||B===null||(q=Fs(O,B),q!=null&&ee.push(yl(O,q,L))),ce)break;O=O.return}0<ee.length&&(N=new I(N,J,null,n,F),P.push({event:N,listeners:ee}))}}if((t&7)===0){e:{if(I=e==="mouseover"||e==="pointerover",N=e==="mouseout"||e==="pointerout",I&&n!==yc&&(J=n.relatedTarget||n.fromElement)&&(Pi(J)||J[Sa]))break e;(N||I)&&(J=F.window===F?F:(I=F.ownerDocument)?I.defaultView||I.parentWindow:window,N?(I=n.relatedTarget||n.toElement,N=U,I=I?Pi(I):null,I!==null&&(ce=f(I),ee=I.tag,I!==ce||ee!==5&&ee!==27&&ee!==6)&&(I=null)):(N=null,I=U),N!==I&&(ee=yd,q="onMouseLeave",B="onMouseEnter",O="mouse",(e==="pointerout"||e==="pointerover")&&(ee=Td,q="onPointerLeave",B="onPointerEnter",O="pointer"),ce=N==null?J:Is(N),L=I==null?J:Is(I),J=new ee(q,O+"leave",N,n,F),J.target=ce,J.relatedTarget=L,q=null,Pi(F)===U&&(ee=new ee(B,O+"enter",I,n,F),ee.target=L,ee.relatedTarget=ce,q=ee),ce=q,ee=N&&I?H(N,I,kb):null,N!==null&&g0(P,J,N,ee,!1),I!==null&&ce!==null&&g0(P,ce,I,ee,!0)))}e:{if(N=U?Is(U):window,I=N.nodeName&&N.nodeName.toLowerCase(),I==="select"||I==="input"&&N.type==="file")var $=Rd;else if(Ed(N))if(Cd)$=Qy;else{$=Ky;var ve=Xy}else I=N.nodeName,!I||I.toLowerCase()!=="input"||N.type!=="checkbox"&&N.type!=="radio"?U&&vc(U.elementType)&&($=Rd):$=Zy;if($&&($=$(e,U))){Md(P,$,n,F);break e}ve&&ve(e,N,U)}switch(ve=U?Is(U):window,e){case"focusin":(Ed(ve)||ve.contentEditable==="true")&&(Oa=ve,zc=U,Xs=null);break;case"focusout":Xs=zc=Oa=null;break;case"mousedown":Nc=!0;break;case"contextmenu":case"mouseup":case"dragend":Nc=!1,Hd(P,n,F);break;case"selectionchange":if(Jy)break;case"keydown":case"keyup":Hd(P,n,F)}var ae;if(Mc)e:{switch(e){case"compositionstart":var re="onCompositionStart";break e;case"compositionend":re="onCompositionEnd";break e;case"compositionupdate":re="onCompositionUpdate";break e}re=void 0}else Da?Ad(e,n)&&(re="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(re="onCompositionStart");re&&(xd&&n.locale!=="ko"&&(Da||re!=="onCompositionStart"?re==="onCompositionEnd"&&Da&&(ae=gd()):(li=F,Sc="value"in li?li.value:li.textContent,Da=!0)),ve=fo(U,re),0<ve.length&&(re=new bd(re,e,null,n,F),P.push({event:re,listeners:ve}),ae?re.data=ae:(ae=wd(n),ae!==null&&(re.data=ae)))),(ae=qy?Py(e,n):jy(e,n))&&(re=fo(U,"onBeforeInput"),0<re.length&&(ve=new bd("onBeforeInput","beforeinput",null,n,F),P.push({event:ve,listeners:re}),ve.data=ae)),qb(P,e,U,n,F)}m0(P,t)})}function yl(e,t,n){return{instance:e,listener:t,currentTarget:n}}function fo(e,t){for(var n=t+"Capture",i=[];e!==null;){var l=e,o=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||o===null||(l=Fs(e,n),l!=null&&i.unshift(yl(e,l,o)),l=Fs(e,t),l!=null&&i.push(yl(e,l,o))),e.tag===3)return i;e=e.return}return[]}function kb(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function g0(e,t,n,i,l){for(var o=t._reactName,y=[];n!==null&&n!==i;){var S=n,E=S.alternate,U=S.stateNode;if(S=S.tag,E!==null&&E===i)break;S!==5&&S!==26&&S!==27||U===null||(E=U,l?(U=Fs(n,o),U!=null&&y.unshift(yl(n,U,E))):l||(U=Fs(n,o),U!=null&&y.push(yl(n,U,E)))),n=n.return}y.length!==0&&e.push({event:t,listeners:y})}var Xb=/\r\n?/g,Kb=/\u0000|\uFFFD/g;function v0(e){return(typeof e=="string"?e:""+e).replace(Xb,`
`).replace(Kb,"")}function y0(e,t){return t=v0(t),v0(e)===t}function Ee(e,t,n,i,l,o){switch(n){case"children":if(typeof i=="string")t==="body"||t==="textarea"&&i===""||Ma(e,i);else if(typeof i=="number"||typeof i=="bigint")t!=="body"&&Ma(e,""+i);else return;break;case"className":ar(e,"class",i);break;case"tabIndex":ar(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":ar(e,n,i);break;case"style":dd(e,i,o);return;case"data":if(t!=="object"){ar(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=sr(i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof o=="function"&&(n==="formAction"?(t!=="input"&&Ee(e,t,"name",l.name,l,null),Ee(e,t,"formEncType",l.formEncType,l,null),Ee(e,t,"formMethod",l.formMethod,l,null),Ee(e,t,"formTarget",l.formTarget,l,null)):(Ee(e,t,"encType",l.encType,l,null),Ee(e,t,"method",l.method,l,null),Ee(e,t,"target",l.target,l,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=sr(i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=bn);return;case"onScroll":i!=null&&de("scroll",e);return;case"onScrollEnd":i!=null&&de("scrollend",e);return;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(r(61));if(n=i.__html,n!=null){if(l.children!=null)throw Error(r(60));o?.__html!==n&&(e.innerHTML=n)}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=sr(i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":de("beforetoggle",e),de("toggle",e),ir(e,"popover",i);break;case"xlinkActuate":Un(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":Un(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":Un(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":Un(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":Un(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":Un(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":Un(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":Un(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":Un(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":ir(e,"is",i);break;case"innerText":case"textContent":return;default:if(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")n=dy.get(n)||n,ir(e,n,i);else return}xe=!0}function gf(e,t,n,i,l,o){switch(n){case"style":dd(e,i,o);return;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(r(61));if(n=i.__html,n!=null){if(l.children!=null)throw Error(r(60));o?.__html!==n&&(e.innerHTML=n)}}break;case"children":if(typeof i=="string")Ma(e,i);else if(typeof i=="number"||typeof i=="bigint")Ma(e,""+i);else return;break;case"onScroll":i!=null&&de("scroll",e);return;case"onScrollEnd":i!=null&&de("scrollend",e);return;case"onClick":i!=null&&(e.onclick=bn);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!id.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(l=n.endsWith("Capture"),o=n.slice(2,l?n.length-7:void 0),t=e[yt]||null,t=t!=null?t[n]:null,typeof t=="function"&&e.removeEventListener(o,t,l),typeof i=="function")){typeof t!="function"&&t!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(o,i,l);break e}xe=!0,n in e?e[n]=i:i===!0?e.setAttribute(n,""):ir(e,n,i)}return}xe=!0}function ot(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":de("error",e),de("load",e);var i=!1,l=!1,o;for(o in n)if(n.hasOwnProperty(o)){var y=n[o];if(y!=null)switch(o){case"src":i=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,t));default:Ee(e,t,o,y,n,null)}}l&&Ee(e,t,"srcSet",n.srcSet,n,null),i&&Ee(e,t,"src",n.src,n,null);return;case"input":de("invalid",e);var S=o=y=l=null,E=null,U=null;for(i in n)if(n.hasOwnProperty(i)){var F=n[i];if(F!=null)switch(i){case"name":l=F;break;case"type":y=F;break;case"checked":E=F;break;case"defaultChecked":U=F;break;case"value":o=F;break;case"defaultValue":S=F;break;case"children":case"dangerouslySetInnerHTML":if(F!=null)throw Error(r(137,t));break;default:Ee(e,t,i,F,n,null)}}cd(e,o,S,E,U,y,l,!1);return;case"select":de("invalid",e),i=y=o=null;for(l in n)if(n.hasOwnProperty(l)&&(S=n[l],S!=null))switch(l){case"value":o=S;break;case"defaultValue":y=S;break;case"multiple":i=S;default:Ee(e,t,l,S,n,null)}t=o,n=y,e.multiple=!!i,t!=null?Ea(e,!!i,t,!1):n!=null&&Ea(e,!!i,n,!0);return;case"textarea":de("invalid",e),o=l=i=null;for(y in n)if(n.hasOwnProperty(y)&&(S=n[y],S!=null))switch(y){case"value":i=S;break;case"defaultValue":l=S;break;case"children":o=S;break;case"dangerouslySetInnerHTML":if(S!=null)throw Error(r(91));break;default:Ee(e,t,y,S,n,null)}fd(e,i,l,o);return;case"option":for(E in n)n.hasOwnProperty(E)&&(i=n[E],i!=null)&&(E==="selected"?e.selected=i&&typeof i!="function"&&typeof i!="symbol":Ee(e,t,E,i,n,null));return;case"dialog":de("beforetoggle",e),de("toggle",e),de("cancel",e),de("close",e);break;case"iframe":case"object":de("load",e);break;case"video":case"audio":for(i=0;i<vl.length;i++)de(vl[i],e);break;case"image":de("error",e),de("load",e);break;case"details":de("toggle",e);break;case"embed":case"source":case"link":de("error",e),de("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(U in n)if(n.hasOwnProperty(U)&&(i=n[U],i!=null))switch(U){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,t));default:Ee(e,t,U,i,n,null)}return;default:if(vc(t)){for(F in n)n.hasOwnProperty(F)&&(i=n[F],i!==void 0&&gf(e,t,F,i,n,void 0));return}}for(S in n)n.hasOwnProperty(S)&&(i=n[S],i!=null&&Ee(e,t,S,i,n,null))}var Zb={};function Qb(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,o=null,y=null,S=null,E=null,U=null,F=null;for(I in n){var P=n[I];if(n.hasOwnProperty(I)&&P!=null)switch(I){case"checked":break;case"value":break;case"defaultValue":E=P;default:i.hasOwnProperty(I)||Ee(e,t,I,null,i,P)}}for(var N in i){var I=i[N];if(P=n[N],i.hasOwnProperty(N)&&(I!=null||P!=null))switch(N){case"type":I!==P&&(xe=!0),o=I;break;case"name":I!==P&&(xe=!0),l=I;break;case"checked":I!==P&&(xe=!0),U=I;break;case"defaultChecked":I!==P&&(xe=!0),F=I;break;case"value":I!==P&&(xe=!0),y=I;break;case"defaultValue":I!==P&&(xe=!0),S=I;break;case"children":case"dangerouslySetInnerHTML":if(I!=null)throw Error(r(137,t));break;default:I!==P&&Ee(e,t,N,I,i,P)}}pc(e,y,S,E,U,F,o,l);return;case"select":I=y=S=N=null;for(o in n)if(E=n[o],n.hasOwnProperty(o)&&E!=null)switch(o){case"value":break;case"multiple":I=E;default:i.hasOwnProperty(o)||Ee(e,t,o,null,i,E)}for(l in i)if(o=i[l],E=n[l],i.hasOwnProperty(l)&&(o!=null||E!=null))switch(l){case"value":o!==E&&(xe=!0),N=o;break;case"defaultValue":o!==E&&(xe=!0),S=o;break;case"multiple":o!==E&&(xe=!0),y=o;default:o!==E&&Ee(e,t,l,o,i,E)}t=S,n=y,i=I,N!=null?Ea(e,!!n,N,!1):!!i!=!!n&&(t!=null?Ea(e,!!n,t,!0):Ea(e,!!n,n?[]:"",!1));return;case"textarea":I=N=null;for(S in n)if(l=n[S],n.hasOwnProperty(S)&&l!=null&&!i.hasOwnProperty(S))switch(S){case"value":break;case"children":break;default:Ee(e,t,S,null,i,l)}for(y in i)if(l=i[y],o=n[y],i.hasOwnProperty(y)&&(l!=null||o!=null))switch(y){case"value":l!==o&&(xe=!0),N=l;break;case"defaultValue":l!==o&&(xe=!0),I=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(r(91));break;default:l!==o&&Ee(e,t,y,l,i,o)}ud(e,N,I);return;case"option":for(var J in n)N=n[J],n.hasOwnProperty(J)&&N!=null&&!i.hasOwnProperty(J)&&(J==="selected"?e.selected=!1:Ee(e,t,J,null,i,N));for(E in i)N=i[E],I=n[E],i.hasOwnProperty(E)&&N!==I&&(N!=null||I!=null)&&(E==="selected"?(N!==I&&(xe=!0),e.selected=N&&typeof N!="function"&&typeof N!="symbol"):Ee(e,t,E,N,i,I));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ee in n)N=n[ee],n.hasOwnProperty(ee)&&N!=null&&!i.hasOwnProperty(ee)&&Ee(e,t,ee,null,i,N);for(U in i)if(N=i[U],I=n[U],i.hasOwnProperty(U)&&N!==I&&(N!=null||I!=null))switch(U){case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(r(137,t));break;default:Ee(e,t,U,N,i,I)}return;default:if(vc(t)){for(var ce in n)N=n[ce],n.hasOwnProperty(ce)&&N!==void 0&&!i.hasOwnProperty(ce)&&gf(e,t,ce,void 0,i,N);for(F in i)N=i[F],I=n[F],!i.hasOwnProperty(F)||N===I||N===void 0&&I===void 0||gf(e,t,F,N,i,I);return}}for(var B in n)N=n[B],n.hasOwnProperty(B)&&N!=null&&!i.hasOwnProperty(B)&&Ee(e,t,B,null,i,N);for(P in i)N=i[P],I=n[P],!i.hasOwnProperty(P)||N===I||N==null&&I==null||Ee(e,t,P,N,i,I)}function b0(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Wb(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var l=n[i],o=l.transferSize,y=l.initiatorType,S=l.duration;if(o&&S&&b0(y)){for(y=0,S=l.responseEnd,i+=1;i<n.length;i++){var E=n[i],U=E.startTime;if(U>S)break;var F=E.transferSize,P=E.initiatorType;F&&b0(P)&&(E=E.responseEnd,y+=F*(E<S?1:(S-U)/(E-U)))}if(--i,t+=8*(o+y)/(l.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var vf=null,yf=null;function bl(e){return e.nodeType===9?e:e.ownerDocument}function T0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function x0(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function S0(e,t,n,i){return n=bl(n).createElement(e),n[it]=i,n[yt]=t,ot(n,e,t),We(n),n}function bf(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Tf=null;function Jb(){var e=window.event;return e&&e.type==="popstate"?e===Tf?!1:(Tf=e,!0):(Tf=null,!1)}var xf=typeof setTimeout=="function"?setTimeout:void 0,$b=typeof clearTimeout=="function"?clearTimeout:void 0,_0=typeof Promise=="function"?Promise:void 0,A0=typeof requestAnimationFrame=="function"?requestAnimationFrame:xf,e1=typeof queueMicrotask=="function"?queueMicrotask:typeof _0<"u"?function(e){return _0.resolve(null).then(e).catch(t1)}:xf;function t1(e){setTimeout(function(){throw e})}function Ei(e){return e==="head"}function w0(e,t){var n=t,i=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"||n==="/&"){if(i===0){e.removeChild(l),us(t);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")Cf(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,Cf(n);for(var o=n.firstChild;o;){var y=o.nextSibling,S=o.nodeName;o[Hs]||S==="SCRIPT"||S==="STYLE"||S==="LINK"&&o.rel.toLowerCase()==="stylesheet"||n.removeChild(o),o=y}}else n==="body"&&Cf(e.ownerDocument.body);n=l}while(n);us(t)}function E0(e,t){var n=e;e=0;do{var i=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=i}while(n)}function M0(e,t,n){if(t=CSS.escape(t)!==t?"r-"+btoa(t).replace(/=/g,""):t,e.style.viewTransitionName=t,n!=null&&(e.style.viewTransitionClass=n),n=getComputedStyle(e),n.display==="inline"){if(t=e.getClientRects(),t.length===1)var i=1;else for(var l=i=0;l<t.length;l++){var o=t[l];0<o.width&&0<o.height&&i++}i===1&&(e=e.style,e.display=t.length===1?"inline-block":"block",e.marginTop="-"+n.paddingTop,e.marginBottom="-"+n.paddingBottom)}}function R0(e,t){e=e.style,t=t.style;var n=t!=null?t.hasOwnProperty("viewTransitionName")?t.viewTransitionName:t.hasOwnProperty("view-transition-name")?t["view-transition-name"]:null:null;e.viewTransitionName=n==null||typeof n=="boolean"?"":(""+n).trim(),n=t!=null?t.hasOwnProperty("viewTransitionClass")?t.viewTransitionClass:t.hasOwnProperty("view-transition-class")?t["view-transition-class"]:null:null,e.viewTransitionClass=n==null||typeof n=="boolean"?"":(""+n).trim(),e.display==="inline-block"&&(t==null?e.display=e.margin="":(n=t.display,e.display=n==null||typeof n=="boolean"?"":n,n=t.margin,n!=null?e.margin=n:(n=t.hasOwnProperty("marginTop")?t.marginTop:t["margin-top"],e.marginTop=n==null||typeof n=="boolean"?"":n,t=t.hasOwnProperty("marginBottom")?t.marginBottom:t["margin-bottom"],e.marginBottom=t==null||typeof t=="boolean"?"":t)))}function n1(e,t,n){return n=n.ownerDocument.defaultView,{rect:e,abs:t.position==="absolute"||t.position==="fixed",clip:t.clipPath!=="none"||t.overflow!=="visible"||t.filter!=="none"||t.mask!=="none"||t.mask!=="none"||t.borderRadius!=="0px",view:0<=e.bottom&&0<=e.right&&e.top<=n.innerHeight&&e.left<=n.innerWidth}}function Sf(e){var t=e.getBoundingClientRect(),n=getComputedStyle(e);return n1(t,n,e)}function i1(e){return e.documentElement.clientHeight}function a1(e){this.addEventListener("load",e),this.addEventListener("error",e)}function s1(e,t,n,i,l,o,y,S,E){var U=t.nodeType===9?t:t.ownerDocument;try{var F=U.startViewTransition({update:function(){var N=U.defaultView,I=N.navigation&&N.navigation.transition,J=U.fonts.status;i();var ee=[];if(J==="loaded"&&(i1(U),U.fonts.status==="loading"&&ee.push(U.fonts.ready)),J=ee.length,e!==null)for(var ce=e.suspenseyImages,B=0,O=0;O<ce.length;O++){var L=ce[O];if(!L.complete){var q=L.getBoundingClientRect();if(0<q.bottom&&0<q.right&&q.top<N.innerHeight&&q.left<N.innerWidth){if(B+=Z0(L),B>po){ee.length=J;break}L=new Promise(a1.bind(L)),ee.push(L)}}}if(0<ee.length)return N=Promise.race([Promise.all(ee),new Promise(function($){return setTimeout($,500)})]).then(l,l),(I?Promise.allSettled([I.finished,N]):N).then(o,o);if(l(),I)return I.finished.then(o,o);o()},types:n});U.__reactViewTransition=F;var P=[];return F.ready.then(function(){for(var N=U.documentElement.getAnimations({subtree:!0}),I=0;I<N.length;I++){var J=N[I],ee=J.effect,ce=ee.pseudoElement;if(ce!=null&&ce.startsWith("::view-transition")){P.push(J),J=ee.getKeyframes();for(var B=ce=void 0,O=!0,L=0;L<J.length;L++){var q=J[L],$=q.width;if(ce===void 0)ce=$;else if(ce!==$){O=!1;break}if($=q.height,B===void 0)B=$;else if(B!==$){O=!1;break}delete q.width,delete q.height,q.transform==="none"&&delete q.transform}O&&ce!==void 0&&B!==void 0&&(ee.setKeyframes(J),O=getComputedStyle(ee.target,ee.pseudoElement),O.width!==ce||O.height!==B)&&(O=J[0],O.width=ce,O.height=B,O=J[J.length-1],O.width=ce,O.height=B,ee.setKeyframes(J))}}y()},function(N){U.__reactViewTransition===F&&(U.__reactViewTransition=null);try{typeof N=="object"&&N!==null&&N.name==="InvalidStateError"&&(N.message==="View transition was skipped because document visibility state is hidden."||N.message==="Skipping view transition because document visibility state has become hidden."||N.message==="Skipping view transition because viewport size changed."||N.message==="Transition was aborted because of invalid state")&&(N=null),N!==null&&E(N)}finally{i(),l(),y()}}),F.finished.finally(function(){for(var N=0;N<P.length;N++)P[N].cancel();U.__reactViewTransition===F&&(U.__reactViewTransition=null),S()}),F}catch{return i(),l(),y(),null}}function ua(e,t){this._scope=document.documentElement,this._selector="::view-transition-"+e+"("+t+")"}ua.prototype.animate=function(e,t){return t=typeof t=="number"?{duration:t}:z({},t),t.pseudoElement=this._selector,this._scope.animate(e,t)},ua.prototype.getAnimations=function(){for(var e=this._scope,t=this._selector,n=e.getAnimations({subtree:!0}),i=[],l=0;l<n.length;l++){var o=n[l].effect;o!==null&&o.target===e&&o.pseudoElement===t&&i.push(n[l])}return i},ua.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function C0(e){return{name:e,group:new ua("group",e),imagePair:new ua("image-pair",e),old:new ua("old",e),new:new ua("new",e)}}function Gt(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}Gt.prototype.addEventListener=function(e,t,n){var i=null,l=null;if(!(n!=null&&typeof n!="boolean"&&(i=n.signal||null,i!==null&&i.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var o=this._eventListeners;if(O0(o,e,t,n)===-1){var y=this,S=t;n!=null&&typeof n!="boolean"&&n.once===!0&&(S=function(E){y.removeEventListener(e,t,n),typeof t=="function"?t.call(this,E):t.handleEvent(E)}),i!==null&&(l=y.removeEventListener.bind(y,e,t,n),i.addEventListener("abort",l,{once:!0}),l=i.removeEventListener.bind(i,"abort",l)),i=as(n),o.push({type:e,listener:t,optionsOrUseCapture:n,attachedListener:S,cleanup:l}),v(this._fragmentFiber.child,!1,l1,e,S,i)}this._eventListeners=o}};function l1(e,t,n,i){return T(e).addEventListener(t,n,i),!1}Gt.prototype.removeEventListener=function(e,t,n){var i=this._eventListeners;if(i!==null&&(t=O0(i,e,t,n),t!==-1)){var l=i[t];n=l.attachedListener;var o=l.cleanup;l=as(l.optionsOrUseCapture),v(this._fragmentFiber.child,!1,r1,e,n,l),i.splice(t,1),o!==null&&o()}};function r1(e,t,n,i){return T(e).removeEventListener(t,n,i),!1}function as(e){return e!=null&&typeof e!="boolean"&&(e.once===!0||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function D0(e){return e==null?"c=0":typeof e=="boolean"?"c="+(e?"1":"0"):"c="+(e.capture?"1":"0")}function O0(e,t,n,i){if(e.length===0)return-1;i=D0(i);for(var l=0;l<e.length;l++){var o=e[l];if(o.type===t&&o.listener===n&&D0(o.optionsOrUseCapture)===i)return l}return-1}Gt.prototype.dispatchEvent=function(e){var t=p(this._fragmentFiber);if(t===null)return!0;t=T(t);var n=this._eventListeners;if(n!==null&&0<n.length||!e.bubbles){var i=t.nodeType===9?t.createComment(""):document.createTextNode("");if(n)for(var l=0;l<n.length;l++){var o=n[l];i.addEventListener(o.type,o.attachedListener,as(o.optionsOrUseCapture))}if(t.appendChild(i),e=i.dispatchEvent(e),n)for(l=0;l<n.length;l++)o=n[l],i.removeEventListener(o.type,o.attachedListener,as(o.optionsOrUseCapture));return t.removeChild(i),e}return t.dispatchEvent(e)},Gt.prototype.focus=function(e){v(this._fragmentFiber.child,!0,z0,e,void 0,void 0)};function z0(e,t){return e.tag===6?!1:(e=T(e),b1(e,t))}Gt.prototype.focusLast=function(e){var t=[];v(this._fragmentFiber.child,!0,_f,t,void 0,void 0);for(var n=t.length-1;0<=n&&!z0(t[n],e);n--);};function _f(e,t){return t.push(e),!1}Gt.prototype.blur=function(){var e=p(this._fragmentFiber);e!==null&&(e=T(e),e=bl(e).activeElement,e!==null&&v(this._fragmentFiber.child,!1,o1,e,void 0,void 0))};function o1(e,t){return e.tag===6?!1:(e=T(e),e===t||e.contains(t)?(t.blur(),!0):!1)}Gt.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),v(this._fragmentFiber.child,!1,c1,e,void 0,void 0)};function c1(e,t){return e.tag===6||(e=T(e),t.observe(e)),!1}Gt.prototype.unobserveUsing=function(e){var t=this._observers;if(t!==null&&t.has(e)){t.delete(e),v(this._fragmentFiber.child,!1,u1,e,void 0,void 0);for(var n=t=0;n<hn.length;n++){var i=hn[n];i.fragmentInstance===this&&i.observer===e?e.unobserve(i.instance):hn[t++]=i}hn.length=t}};function u1(e,t){return e.tag===6||(e=T(e),t.unobserve(e)),!1}var hn=[],Af=!1;function f1(e,t,n){hn.push({fragmentInstance:e,observer:t,instance:n}),Af||(Af=!0,T1(function(){Af=!1;var i=hn;hn=[];for(var l=0;l<i.length;l++){var o=i[l];o.observer.unobserve(o.instance)}}))}Gt.prototype.getClientRects=function(){var e=[];return v(this._fragmentFiber.child,!1,h1,e,void 0,void 0),e};function h1(e,t){if(e.tag===6){e=e.stateNode;var n=e.ownerDocument.createRange();n.selectNodeContents(e),t.push.apply(t,n.getClientRects())}else e=T(e),t.push.apply(t,e.getClientRects());return!1}Gt.prototype.getRootNode=function(e){var t=p(this._fragmentFiber);return t===null?this:T(t).getRootNode(e)},Gt.prototype.compareDocumentPosition=function(e){var t=p(this._fragmentFiber);if(t===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var n=[];v(this._fragmentFiber.child,!1,_f,n,void 0,void 0);var i=T(t);if(n.length===0){if(n=i,x(this._fragmentFiber)){e:{for(t=this._fragmentFiber.return;t!==null;){if(t.tag===4){t=t.stateNode.containerInfo;break e}if(t.tag===3||t.tag===5||t.tag===27)break;t=t.return}t=null}t!=null&&(n=t)}t=this._fragmentFiber;var l=i=n.compareDocumentPosition(e);return n===e?l=Node.DOCUMENT_POSITION_CONTAINS:i&Node.DOCUMENT_POSITION_CONTAINED_BY&&(n=_(t)[1],n===null?l=Node.DOCUMENT_POSITION_PRECEDING:(e=T(n).compareDocumentPosition(e),l=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),l|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}t=T(n[0]),l=T(n[n.length-1]);var o=x(this._fragmentFiber)?t.parentElement:i;if(o==null)return Node.DOCUMENT_POSITION_DISCONNECTED;i=o.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY,o=o.compareDocumentPosition(l)&Node.DOCUMENT_POSITION_CONTAINED_BY;var y=t.compareDocumentPosition(e),S=l.compareDocumentPosition(e),E=y&Node.DOCUMENT_POSITION_CONTAINED_BY||S&Node.DOCUMENT_POSITION_CONTAINED_BY;return S=i&&o&&y&Node.DOCUMENT_POSITION_FOLLOWING&&S&Node.DOCUMENT_POSITION_PRECEDING,t=i&&t===e||o&&l===e||E||S?Node.DOCUMENT_POSITION_CONTAINED_BY:!i&&t===e||!o&&l===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:y,t&Node.DOCUMENT_POSITION_DISCONNECTED||t&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||d1(t,this._fragmentFiber,n[0],n[n.length-1],e)?t:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function d1(e,t,n,i,l){var o=Pi(l);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(n=!!o)e:{for(;o!==null;){if(o.tag===7&&(o===t||o.alternate===t)){n=!0;break e}o=o.return}n=!1}return n}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(o===null)return o=l.ownerDocument,l===o||l===o.documentElement||l===o.body;e:{for(o=t,t=p(t);o!==null;){if(!(o.tag!==5&&o.tag!==3&&o.tag!==27||o!==t&&o.alternate!==t)){o=!0;break e}o=o.return}o=!1}return o}return e&Node.DOCUMENT_POSITION_PRECEDING?((t=!!o)&&!(t=o===n)&&(t=H(n,o,D),t===null?t=!1:(v(t,!0,A,o,n),o=M,M=null,t=o!==null)),t):e&Node.DOCUMENT_POSITION_FOLLOWING?((t=!!o)&&!(t=o===i)&&(t=H(i,o,D),t===null?t=!1:(v(t,!0,C,o,i),o=M,R=M=null,t=o!==null)),t):!1}function N0(e,t){var n=e.ownerDocument.createRange();n.selectNodeContents(e),e=n.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,t?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}Gt.prototype.scrollIntoView=function(e){if(typeof e=="object")throw Error(r(566));var t=[];v(this._fragmentFiber.child,!1,_f,t,void 0,void 0);var n=e!==!1;if(t.length===0){var i=_(this._fragmentFiber);if(i=n?i[1]||i[0]||p(this._fragmentFiber):i[0]||i[1],i===null)return;if(i.tag===6){e=T(i),N0(e,n);return}if(i=T(i),i.nodeType!==9){if(i.nodeType===11){n="host"in i?i.host:null,n!==null&&n.scrollIntoView(e);return}i.scrollIntoView(e)}}for(i=n?t.length-1:0;i!==(n?-1:t.length);){var l=t[i];l.tag===6?(l=T(l),N0(l,n)):T(l).scrollIntoView(e),i+=n?-1:1}};function m1(e,t){return e=T(e),B0(e,t),!1}function B0(e,t){e.reactFragments==null&&(e.reactFragments=new Set),e.reactFragments.add(t)}function U0(e,t){var n=t._eventListeners;if(n!==null)for(var i=0;i<n.length;i++){var l=n[i];e.addEventListener(l.type,l.attachedListener,as(l.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(o){for(var y=0,S=0;S<hn.length;S++){var E=hn[S];(E.fragmentInstance!==t||E.observer!==o||E.instance!==e)&&(hn[y++]=E)}hn.length=y,o.observe(e)}),B0(e,t))}function p1(e,t){var n=t._eventListeners;if(n!==null)for(var i=0;i<n.length;i++){var l=n[i];e.removeEventListener(l.type,l.attachedListener,as(l.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(o){typeof o.rootMargin=="string"?f1(t,o,e):o.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(t))}function wf(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":wf(n),nr(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function g1(e,t,n,i){for(;e.nodeType===1;){var l=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[Hs])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(o=e.getAttribute("rel"),o==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(o!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(o=e.getAttribute("src"),(o!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&o&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var o=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===o)return e}else return e;if(e=Jt(e.nextSibling),e===null)break}return null}function v1(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Jt(e.nextSibling),e===null))return null;return e}function L0(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Jt(e.nextSibling),e===null))return null;return e}function Ef(e){return e.data==="$?"||e.data==="$~"}function Mf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function y1(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function Jt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Rf=null;function H0(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return Jt(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function I0(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function b1(e,t){function n(){i=!0}if(e.ownerDocument.activeElement===e)return!0;var i=!1;try{e.ownerDocument.addEventListener("focus",n,!0),(e.focus||HTMLElement.prototype.focus).call(e,t)}finally{e.ownerDocument.removeEventListener("focus",n,!0)}return i}function T1(e){A0(function(){A0(function(t){return e(t)})})}function F0(e,t,n){switch(t=bl(n),e){case"html":if(e=t.documentElement,!e)throw Error(r(452));return e;case"head":if(e=t.head,!e)throw Error(r(453));return e;case"body":if(e=t.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function G0(e,t,n){for(var i in n){var l=n[i];n.hasOwnProperty(i)&&l!=null&&Ee(e,t,i,null,Zb,l)}n.dangerouslySetInnerHTML!=null&&(e.textContent=""),e.onclick===bn&&(e.onclick=null),nr(e)}function Cf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);nr(e)}var $t=new Map,V0=new Set;function Tl(e){if(typeof e.getRootNode=="function"){var t=e.getRootNode();if(t.nodeType===9||t.nodeType===11)return t}return e.nodeType===9?e:e.ownerDocument}var Kn=be.d;be.d={f:x1,r:S1,D:_1,C:A1,L:w1,m:E1,X:R1,S:M1,M:C1};function x1(){var e=Kn.f(),t=so();return e||t}function S1(e){var t=_a(e);t!==null&&t.tag===5&&t.type==="form"?Pm(t):Kn.r(e)}var ss=typeof document>"u"?null:document;function q0(e,t,n){var i=ss;if(i&&typeof t=="string"&&t){var l=Yt(t);l='link[rel="'+e+'"][href="'+l+'"]',typeof n=="string"&&(l+='[crossorigin="'+n+'"]'),V0.has(l)||(V0.add(l),e={rel:e,crossOrigin:n,href:t},i.querySelector(l)===null&&(t=i.createElement("link"),ot(t,"link",e),We(t),i.head.appendChild(t)))}}function _1(e){Kn.D(e),q0("dns-prefetch",e,null)}function A1(e,t){Kn.C(e,t),q0("preconnect",e,t)}function w1(e,t,n){Kn.L(e,t,n);var i=ss;if(i&&e&&t){var l='link[rel="preload"][as="'+Yt(t)+'"]';t==="image"&&n&&n.imageSrcSet?(l+='[imagesrcset="'+Yt(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(l+='[imagesizes="'+Yt(n.imageSizes)+'"]')):l+='[href="'+Yt(e)+'"]';var o=l;switch(t){case"style":o=ls(e);break;case"script":o=rs(e)}if(!($t.has(o)||(e=z({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),$t.set(o,e),i.querySelector(l)!==null||t==="style"&&i.querySelector(xl(o))||t==="script"&&i.querySelector(Sl(o))))){var y=i.createElement("link");ot(y,"link",e),t==="style"&&(y[tr]=!0,y.onload=y.onerror=function(){td(y)}),We(y),i.head.appendChild(y)}}}function E1(e,t){Kn.m(e,t);var n=ss;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",l='link[rel="modulepreload"][as="'+Yt(i)+'"][href="'+Yt(e)+'"]',o=l;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":o=rs(e)}if(!$t.has(o)&&(e=z({rel:"modulepreload",href:e},t),$t.set(o,e),n.querySelector(l)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Sl(o)))return}i=n.createElement("link"),ot(i,"link",e),We(i),n.head.appendChild(i)}}}function M1(e,t,n){Kn.S(e,t,n);var i=ss;if(i&&e){var l=Aa(i).hoistableStyles,o=ls(e);t=t||"default";var y=l.get(o);if(!y){var S={loading:0,preload:null};if(y=i.querySelector(xl(o)))S.loading=5;else{e=z({rel:"stylesheet",href:e,"data-precedence":t},n),(n=$t.get(o))&&Df(e,n);var E=y=i.createElement("link");We(E),ot(E,"link",e),E._p=new Promise(function(U,F){E.onload=U,E.onerror=F}),E.addEventListener("load",function(){S.loading|=1}),E.addEventListener("error",function(){S.loading|=2}),S.loading|=4,ho(y,t,i)}y={type:"stylesheet",instance:y,count:1,state:S},l.set(o,y)}}}function R1(e,t){Kn.X(e,t);var n=ss;if(n&&e){var i=Aa(n).hoistableScripts,l=rs(e),o=i.get(l);o||(o=n.querySelector(Sl(l)),o||(e=z({src:e,async:!0},t),(t=$t.get(l))&&Of(e,t),o=n.createElement("script"),We(o),ot(o,"link",e),n.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},i.set(l,o))}}function C1(e,t){Kn.M(e,t);var n=ss;if(n&&e){var i=Aa(n).hoistableScripts,l=rs(e),o=i.get(l);o||(o=n.querySelector(Sl(l)),o||(e=z({src:e,async:!0,type:"module"},t),(t=$t.get(l))&&Of(e,t),o=n.createElement("script"),We(o),ot(o,"link",e),n.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},i.set(l,o))}}function P0(e,t,n,i){var l=(l=ii.current)?Tl(l):null;if(!l)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(n=ls(n.href),t=Aa(l).hoistableStyles,i=t.get(n),i||(i={type:"style",instance:null,count:0,state:null},t.set(n,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=ls(n.href);var o=Aa(l).hoistableStyles,y=o.get(e);if(y||(l=l.ownerDocument||l,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},o.set(e,y),(o=l.querySelector(xl(e)))?o._p||(y.instance=o,y.state.loading=5):(o=$t.get(e),o||(o={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},$t.set(e,o)),D1(l,e,o,y.state))),t&&i===null)throw Error(r(528,""));return y}if(t&&i!==null)throw Error(r(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(n=rs(n),t=Aa(l).hoistableScripts,i=t.get(n),i||(i={type:"script",instance:null,count:0,state:null},t.set(n,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function ls(e){return'href="'+Yt(e)+'"'}function xl(e){return'link[rel="stylesheet"]['+e+"]"}function j0(e){return z({},e,{"data-precedence":e.precedence,precedence:null})}function D1(e,t,n,i){if(t=e.querySelector('link[rel="preload"][as="style"]['+t+"]")){if(t[tr]!==!0){i.loading=1;return}}else t=e.createElement("link"),t[tr]=!0,t.onload=t.onerror=td.bind(null,t),ot(t,"link",n),We(t),e.head.appendChild(t);i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2})}function rs(e){return'[src="'+Yt(e)+'"]'}function Sl(e){return"script[async]"+e}function Y0(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+Yt(n.href)+'"]');if(i)return t.instance=i,We(i),i;var l=z({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),We(i),ot(i,"style",l),ho(i,n.precedence,e),t.instance=i;case"stylesheet":l=ls(n.href);var o=e.querySelector(xl(l));if(o)return t.state.loading|=4,t.instance=o,We(o),o;i=j0(n),(l=$t.get(l))&&Df(i,l),o=(e.ownerDocument||e).createElement("link"),We(o);var y=o;return y._p=new Promise(function(S,E){y.onload=S,y.onerror=E}),ot(o,"link",i),t.state.loading|=4,ho(o,n.precedence,e),t.instance=o;case"script":return o=rs(n.src),(l=e.querySelector(Sl(o)))?(t.instance=l,We(l),l):(i=n,(l=$t.get(o))&&(i=z({},n),Of(i,l)),e=e.ownerDocument||e,l=e.createElement("script"),We(l),ot(l,"link",i),e.head.appendChild(l),t.instance=l);case"void":return null;default:throw Error(r(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,ho(i,n.precedence,e));return t.instance}function ho(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=i.length?i[i.length-1]:null,o=l,y=0;y<i.length;y++){var S=i[y];if(S.dataset.precedence===t)o=S;else if(o!==l)break}o?o.parentNode.insertBefore(e,o.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Df(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Of(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var mo=null;function k0(e,t,n){if(mo===null){var i=new Map,l=mo=new Map;l.set(n,i)}else l=mo,i=l.get(n),i||(i=new Map,l.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),l=0;l<n.length;l++){var o=n[l];if(!(o[Hs]||o[it]||e==="link"&&o.getAttribute("rel")==="stylesheet")&&o.namespaceURI!=="http://www.w3.org/2000/svg"){var y=o.getAttribute(t)||"";y=e+y;var S=i.get(y);S?S.push(o):i.set(y,[o])}}return i}function zf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function O1(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function X0(e,t){return e==="img"&&t.src!=null&&t.src!==""&&t.onLoad==null&&t.loading!=="lazy"}function K0(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Z0(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function Q0(e,t){typeof t.decode=="function"&&(e.imgCount++,t.complete||(e.imgBytes+=Z0(t),e.suspenseyImages.push(t)),e=B1.bind(e),t.decode().then(e,e))}function z1(e,t,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var l=ls(i.href),o=t.querySelector(xl(l));if(o){t=o._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=_l.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=o,We(o);return}o=t.ownerDocument||t,i=j0(i),(l=$t.get(l))&&Df(i,l),o=o.createElement("link"),We(o);var y=o;y._p=new Promise(function(S,E){y.onload=S,y.onerror=E}),ot(o,"link",i),n.instance=o}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=_l.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var po=0;function N1(e,t){return e.stylesheets&&e.count===0&&vo(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var i=setTimeout(function(){if(e.stylesheets&&vo(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4+t);0<e.imgBytes&&po===0&&(po=62500*Wb());var l=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&vo(e,e.stylesheets),e.unsuspend)){var o=e.unsuspend;e.unsuspend=null,o()}},(e.imgBytes>po?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(l)}}:null}function W0(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)vo(e,e.stylesheets);else if(e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}}}function _l(){this.count--,W0(this)}function B1(){this.imgCount--,W0(this)}var go=null;function vo(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,go=new Map,t.forEach(U1,e),go=null,_l.call(e))}function U1(e,t){if(!(t.state.loading&4)){var n=go.get(e);if(n)var i=n.get(null);else{n=new Map,go.set(e,n);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),o=0;o<l.length;o++){var y=l[o];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(n.set(y.dataset.precedence,y),i=y)}i&&n.set(null,i)}l=t.instance,y=l.getAttribute("data-precedence"),o=n.get(y)||i,o===i&&n.set(null,l),n.set(y,l),this.count++,i=_l.bind(this),l.addEventListener("load",i),l.addEventListener("error",i),o?o.parentNode.insertBefore(l,o.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),t.state.loading|=4}}var os={$$typeof:te,Provider:null,Consumer:null,_currentValue:Vi,_currentValue2:Vi,_threadCount:0};function L1(e,t,n,i,l,o,y,S,E){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=fc(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=fc(0),this.hiddenUpdates=fc(null),this.identifierPrefix=i,this.onUncaughtError=l,this.onCaughtError=o,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=E,this.transitionTypes=null,this.incompleteTransitions=new Map}function J0(e,t,n,i,l,o,y,S,E,U,F,P){return e=new L1(e,t,n,y,E,U,F,P,S),t=1,o===!0&&(t|=24),o=bt(3,null,null,t),e.current=o,o.stateNode=e,t=kc(),t.refCount++,e.pooledCache=t,t.refCount++,o.memoizedState={element:i,isDehydrated:n,cache:t},Qc(o),e}function $0(e){return e?(e=Ba,e):Ba}function eg(e,t,n,i,l,o){l=$0(l),i.context===null?i.context=l:i.pendingContext=l,i=mi(t),i.payload={element:n},o=o===void 0?null:o,o!==null&&(i.callback=o),n=pi(e,i,t),n!==null&&(_t(n,e,t),el(n,e,t))}function tg(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Nf(e,t){tg(e,t),(e=e.alternate)&&tg(e,t)}function ng(e){if(e.tag===13||e.tag===31){var t=Xi(e,67108864);t!==null&&_t(t,e,67108864),Nf(e,67108864)}}function ig(e){if(e.tag===13||e.tag===31){var t=Ft();t=hc(t);var n=Xi(e,t);n!==null&&_t(n,e,t),Nf(e,t)}}var cs=!0;function H1(e,t,n,i){var l=le.T;le.T=null;var o=be.p;try{be.p=2,Bf(e,t,n,i)}finally{be.p=o,le.T=l}}function I1(e,t,n,i){var l=le.T;le.T=null;var o=be.p;try{be.p=8,Bf(e,t,n,i)}finally{be.p=o,le.T=l}}function Bf(e,t,n,i){if(cs){var l=Uf(i);if(l===null)pf(e,t,i,yo,n),sg(e,i);else if(G1(l,e,t,n,i))i.stopPropagation();else if(sg(e,i),t&4&&-1<F1.indexOf(e)){for(;l!==null;){var o=_a(l);if(o!==null)switch(o.tag){case 3:if(o=o.stateNode,o.current.memoizedState.isDehydrated){var y=qi(o.pendingLanes);if(y!==0){var S=o;for(S.pendingLanes|=2,S.entangledLanes|=2;y;){var E=1<<31-zt(y);S.entanglements[1]|=E,y&=~E}Cn(o),(Se&6)===0&&(no=Dt()+500,gl(0))}}break;case 31:case 13:S=Xi(o,2),S!==null&&_t(S,o,2),so(),Nf(o,2)}if(o=Uf(i),o===null&&pf(e,t,i,yo,n),o===l)break;l=o}l!==null&&i.stopPropagation()}else pf(e,t,i,null,n)}}function Uf(e){return e=bc(e),Lf(e)}var yo=null;function Lf(e){if(yo=null,e=Pi(e),e!==null){var t=f(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=u(t),e!==null)return e;e=null}else if(n===31){if(e=m(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return yo=e,null}function ag(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Wv()){case Ph:return 2;case jh:return 8;case Ql:case Jv:return 32;case Yh:return 268435456;default:return 32}default:return 32}}var Hf=!1,Mi=null,Ri=null,Ci=null,Al=new Map,wl=new Map,Di=[],F1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function sg(e,t){switch(e){case"focusin":case"focusout":Mi=null;break;case"dragenter":case"dragleave":Ri=null;break;case"mouseover":case"mouseout":Ci=null;break;case"pointerover":case"pointerout":Al.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":wl.delete(t.pointerId)}}function El(e,t,n,i,l,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:o,targetContainers:[l]},t!==null&&(t=_a(t),t!==null&&ng(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function G1(e,t,n,i,l){switch(t){case"focusin":return Mi=El(Mi,e,t,n,i,l),!0;case"dragenter":return Ri=El(Ri,e,t,n,i,l),!0;case"mouseover":return Ci=El(Ci,e,t,n,i,l),!0;case"pointerover":var o=l.pointerId;return Al.set(o,El(Al.get(o)||null,e,t,n,i,l)),!0;case"gotpointercapture":return o=l.pointerId,wl.set(o,El(wl.get(o)||null,e,t,n,i,l)),!0}return!1}function lg(e){var t=Pi(e.target);if(t!==null){var n=f(t);if(n!==null){if(t=n.tag,t===13){if(t=u(n),t!==null){e.blockedOn=t,Jh(e.priority,function(){ig(n)});return}}else if(t===31){if(t=m(n),t!==null){e.blockedOn=t,Jh(e.priority,function(){ig(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function bo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Uf(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);yc=i,n.target.dispatchEvent(i),yc=null}else return t=_a(n),t!==null&&ng(t),e.blockedOn=n,!1;t.shift()}return!0}function rg(e,t,n){bo(e)&&n.delete(t)}function V1(){Hf=!1,Mi!==null&&bo(Mi)&&(Mi=null),Ri!==null&&bo(Ri)&&(Ri=null),Ci!==null&&bo(Ci)&&(Ci=null),Al.forEach(rg),wl.forEach(rg)}function To(e,t){e.blockedOn===t&&(e.blockedOn=null,Hf||(Hf=!0,h.unstable_scheduleCallback(h.unstable_NormalPriority,V1)))}var xo=null;function og(e){xo!==e&&(xo=e,h.unstable_scheduleCallback(h.unstable_NormalPriority,function(){xo===e&&(xo=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],l=e[t+2];if(typeof i!="function"){if(Lf(i||n)===null)continue;break}var o=_a(n);o!==null&&(e.splice(t,3),t-=3,vu(o,{pending:!0,data:l,method:n.method,action:i},i,l))}}))}function us(e){function t(E){return To(E,e)}Mi!==null&&To(Mi,e),Ri!==null&&To(Ri,e),Ci!==null&&To(Ci,e),Al.forEach(t),wl.forEach(t);for(var n=0;n<Di.length;n++){var i=Di[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<Di.length&&(n=Di[0],n.blockedOn===null);)lg(n),n.blockedOn===null&&Di.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var l=n[i],o=n[i+1],y=l[yt]||null;if(typeof o=="function")y||og(n);else if(y){var S=null;if(o&&o.hasAttribute("formAction")){if(l=o,y=o[yt]||null)S=y.formAction;else if(Lf(l)!==null)continue}else S=y.action;typeof S=="function"?n[i+1]=S:(n.splice(i,3),i-=3),og(n)}}}function cg(){function e(o){o.canIntercept&&o.info==="react-transition"&&o.intercept({handler:function(){return new Promise(function(y){return l=y})},focusReset:"manual",scroll:"manual"})}function t(){l!==null&&(l(),l=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var o=navigation.currentEntry;o&&o.url!=null&&navigation.navigate(o.url,{state:o.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,l=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),l!==null&&(l(),l=null)}}}function If(e){this._internalRoot=e}So.prototype.render=If.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(r(409));var n=t.current,i=Ft();eg(n,i,e,t,null,null)},So.prototype.unmount=If.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;eg(e.current,2,null,e,null,null),so(),t[Sa]=null}};function So(e){this._internalRoot=e}So.prototype.unstable_scheduleHydration=function(e){if(e){var t=Wh();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Di.length&&t!==0&&t<Di[n].priority;n++);Di.splice(n,0,e),n===0&&lg(e)}};var ug=a.version;if(ug!=="19.3.0")throw Error(r(527,ug,"19.3.0"));be.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=g(t),e=e!==null?b(e):null,e=e===null?null:e.stateNode,e};var q1={bundleType:0,version:"19.3.0",rendererPackageName:"react-dom",currentDispatcherRef:le,reconcilerVersion:"19.3.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _o=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_o.isDisabled&&_o.supportsFiber)try{Bs=_o.inject(q1),Ot=_o}catch{}}return Ml.createRoot=function(e,t){if(!c(e))throw Error(r(299));var n=!1,i="",l=$m,o=ep,y=tp;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(o=t.onCaughtError),t.onRecoverableError!==void 0&&(y=t.onRecoverableError)),t=J0(e,1,!1,null,null,n,i,null,l,o,y,cg),e[Sa]=t.current,mf(e),new If(t)},Ml.hydrateRoot=function(e,t,n){if(!c(e))throw Error(r(299));var i=!1,l="",o=$m,y=ep,S=tp,E=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(o=n.onUncaughtError),n.onCaughtError!==void 0&&(y=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError),n.formState!==void 0&&(E=n.formState)),t=J0(e,1,!0,t,n??null,i,l,E,o,y,S,cg),t.context=$0(null),n=t.current,i=Ft(),i=hc(i),l=mi(i),l.callback=null,pi(n,l,i),n=i,t.current.lanes=n,Ls(t,n),Cn(t),e[Sa]=t.current,mf(e),new So(t)},Ml.version="19.3.0",Ml}var xg;function PT(){if(xg)return Vf.exports;xg=1;function h(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(h)}catch(a){console.error(a)}}return h(),Vf.exports=qT(),Vf.exports}var jT=PT();function YT(h,a=!1){const s=h[0].index!==null,r=new Set(Object.keys(h[0].attributes)),c=new Set(Object.keys(h[0].morphAttributes)),f={},u={},m=h[0].morphTargetsRelative,d=new zn;let g=0;for(let b=0;b<h.length;++b){const v=h[b];let p=0;if(s!==(v.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+b+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const x in v.attributes){if(!r.has(x))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+b+'. All geometries must have compatible attributes; make sure "'+x+'" attribute exists among all geometries, or in none of them.'),null;f[x]===void 0&&(f[x]=[]),f[x].push(v.attributes[x]),p++}if(p!==r.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+b+". Make sure all geometries have the same number of attributes."),null;if(m!==v.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+b+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const x in v.morphAttributes){if(!c.has(x))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+b+".  .morphAttributes must be consistent throughout all geometries."),null;u[x]===void 0&&(u[x]=[]),u[x].push(v.morphAttributes[x])}if(a){let x;if(s)x=v.index.count;else if(v.attributes.position!==void 0)x=v.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+b+". The geometry must have either an index or a position attribute"),null;d.addGroup(g,x,b),g+=x}}if(s){let b=0;const v=[];for(let p=0;p<h.length;++p){const x=h[p].index;for(let _=0;_<x.count;++_)v.push(x.getX(_)+b);b+=h[p].attributes.position.count}d.setIndex(v)}for(const b in f){const v=Sg(f[b]);if(!v)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+b+" attribute."),null;d.setAttribute(b,v)}for(const b in u){const v=u[b][0].length;if(v===0)break;d.morphAttributes=d.morphAttributes||{},d.morphAttributes[b]=[];for(let p=0;p<v;++p){const x=[];for(let w=0;w<u[b].length;++w)x.push(u[b][w][p]);const _=Sg(x);if(!_)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+b+" morphAttribute."),null;d.morphAttributes[b].push(_)}}return d}function Sg(h){let a,s,r,c=-1,f=0;for(let g=0;g<h.length;++g){const b=h[g];if(a===void 0&&(a=b.array.constructor),a!==b.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(s===void 0&&(s=b.itemSize),s!==b.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(r===void 0&&(r=b.normalized),r!==b.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(c===-1&&(c=b.gpuType),c!==b.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;f+=b.count*s}const u=new a(f),m=new ct(u,s,r);let d=0;for(let g=0;g<h.length;++g){const b=h[g];if(b.isInterleavedBufferAttribute){const v=d/s;for(let p=0,x=b.count;p<x;p++)for(let _=0;_<s;_++){const w=b.getComponent(p,_);m.setComponent(p+v,_,w)}}else u.set(b.array,d);d+=b.count*s}return c!==void 0&&(m.gpuType=c),m}function _g(h,a){if(a===k1)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),h;if(a===ch||a===vv){let s=h.getIndex();if(s===null){const u=[],m=h.getAttribute("position");if(m!==void 0){for(let d=0;d<m.count;d++)u.push(d);h.setIndex(u),s=h.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),h}const r=s.count-2,c=[];if(a===ch)for(let u=1;u<=r;u++)c.push(s.getX(0)),c.push(s.getX(u)),c.push(s.getX(u+1));else for(let u=0;u<r;u++)u%2===0?(c.push(s.getX(u)),c.push(s.getX(u+1)),c.push(s.getX(u+2))):(c.push(s.getX(u+2)),c.push(s.getX(u+1)),c.push(s.getX(u)));c.length/3!==r&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const f=h.clone();return f.setIndex(c),f.clearGroups(),f}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",a),h}class kT extends X1{constructor(a){super(a),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(s){return new WT(s)}),this.register(function(s){return new JT(s)}),this.register(function(s){return new rx(s)}),this.register(function(s){return new ox(s)}),this.register(function(s){return new cx(s)}),this.register(function(s){return new ex(s)}),this.register(function(s){return new tx(s)}),this.register(function(s){return new nx(s)}),this.register(function(s){return new ix(s)}),this.register(function(s){return new QT(s)}),this.register(function(s){return new ax(s)}),this.register(function(s){return new $T(s)}),this.register(function(s){return new lx(s)}),this.register(function(s){return new sx(s)}),this.register(function(s){return new KT(s)}),this.register(function(s){return new ux(s)}),this.register(function(s){return new fx(s)})}load(a,s,r,c){const f=this;let u;if(this.resourcePath!=="")u=this.resourcePath;else if(this.path!==""){const g=Il.extractUrlBase(a);u=Il.resolveURL(g,this.path)}else u=Il.extractUrlBase(a);this.manager.itemStart(a);const m=function(g){c?c(g):console.error(g),f.manager.itemError(a),f.manager.itemEnd(a)},d=new yv(this.manager);d.setPath(this.path),d.setResponseType("arraybuffer"),d.setRequestHeader(this.requestHeader),d.setWithCredentials(this.withCredentials),d.load(a,function(g){try{f.parse(g,u,function(b){s(b),f.manager.itemEnd(a)},m)}catch(b){m(b)}},r,m)}setDRACOLoader(a){return this.dracoLoader=a,this}setKTX2Loader(a){return this.ktx2Loader=a,this}setMeshoptDecoder(a){return this.meshoptDecoder=a,this}register(a){return this.pluginCallbacks.indexOf(a)===-1&&this.pluginCallbacks.push(a),this}unregister(a){return this.pluginCallbacks.indexOf(a)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(a),1),this}parse(a,s,r,c){let f;const u={},m={},d=new TextDecoder;if(typeof a=="string")f=JSON.parse(a);else if(a instanceof ArrayBuffer)if(d.decode(new Uint8Array(a,0,4))===Rv){try{u[me.KHR_BINARY_GLTF]=new hx(a)}catch(v){c&&c(v);return}f=JSON.parse(u[me.KHR_BINARY_GLTF].content)}else f=JSON.parse(d.decode(a));else f=a;if(f.asset===void 0||f.asset.version[0]<2){c&&c(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const g=new wx(f,{path:s||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});g.fileLoader.setRequestHeader(this.requestHeader);for(let b=0;b<this.pluginCallbacks.length;b++){const v=this.pluginCallbacks[b](g);v.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),m[v.name]=v,u[v.name]=!0}if(f.extensionsUsed)for(let b=0;b<f.extensionsUsed.length;++b){const v=f.extensionsUsed[b],p=f.extensionsRequired||[];switch(v){case me.KHR_MATERIALS_UNLIT:u[v]=new ZT;break;case me.KHR_DRACO_MESH_COMPRESSION:u[v]=new dx(f,this.dracoLoader);break;case me.KHR_TEXTURE_TRANSFORM:u[v]=new mx;break;case me.KHR_MESH_QUANTIZATION:u[v]=new px;break;default:p.indexOf(v)>=0&&m[v]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+v+'".')}}g.setExtensions(u),g.setPlugins(m),g.parse(r,c)}parseAsync(a,s){const r=this;return new Promise(function(c,f){r.parse(a,s,c,f)})}}function XT(){let h={};return{get:function(a){return h[a]},add:function(a,s){h[a]=s},remove:function(a){delete h[a]},removeAll:function(){h={}}}}const me={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class KT{constructor(a){this.parser=a,this.name=me.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const a=this.parser,s=this.parser.json.nodes||[];for(let r=0,c=s.length;r<c;r++){const f=s[r];f.extensions&&f.extensions[this.name]&&f.extensions[this.name].light!==void 0&&a._addNodeRef(this.cache,f.extensions[this.name].light)}}_loadLight(a){const s=this.parser,r="light:"+a;let c=s.cache.get(r);if(c)return c;const f=s.json,d=((f.extensions&&f.extensions[this.name]||{}).lights||[])[a];let g;const b=new Pt(16777215);d.color!==void 0&&b.setRGB(d.color[0],d.color[1],d.color[2],Jn);const v=d.range!==void 0?d.range:0;switch(d.type){case"directional":g=new uh(b),g.target.position.set(0,0,-1),g.add(g.target);break;case"point":g=new Mh(b),g.distance=v;break;case"spot":g=new K1(b),g.distance=v,d.spot=d.spot||{},d.spot.innerConeAngle=d.spot.innerConeAngle!==void 0?d.spot.innerConeAngle:0,d.spot.outerConeAngle=d.spot.outerConeAngle!==void 0?d.spot.outerConeAngle:Math.PI/4,g.angle=d.spot.outerConeAngle,g.penumbra=1-d.spot.innerConeAngle/d.spot.outerConeAngle,g.target.position.set(0,0,-1),g.add(g.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+d.type)}return g.position.set(0,0,0),Dn(g,d),d.intensity!==void 0&&(g.intensity=d.intensity),g.name=s.createUniqueName(d.name||"light_"+a),c=Promise.resolve(g),s.cache.add(r,c),c}getDependency(a,s){if(a==="light")return this._loadLight(s)}createNodeAttachment(a){const s=this,r=this.parser,f=r.json.nodes[a],m=(f.extensions&&f.extensions[this.name]||{}).light;return m===void 0?null:this._loadLight(m).then(function(d){return r._getNodeRef(s.cache,m,d)})}}class ZT{constructor(){this.name=me.KHR_MATERIALS_UNLIT}getMaterialType(){return As}extendParams(a,s,r){const c=[];a.color=new Pt(1,1,1),a.opacity=1;const f=s.pbrMetallicRoughness;if(f){if(Array.isArray(f.baseColorFactor)){const u=f.baseColorFactor;a.color.setRGB(u[0],u[1],u[2],Jn),a.opacity=u[3]}f.baseColorTexture!==void 0&&c.push(r.assignTexture(a,"map",f.baseColorTexture,Cs))}return Promise.all(c)}}class QT{constructor(a){this.parser=a,this.name=me.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(a,s){const c=this.parser.json.materials[a];if(!c.extensions||!c.extensions[this.name])return Promise.resolve();const f=c.extensions[this.name].emissiveStrength;return f!==void 0&&(s.emissiveIntensity=f),Promise.resolve()}}class WT{constructor(a){this.parser=a,this.name=me.KHR_MATERIALS_CLEARCOAT}getMaterialType(a){const r=this.parser.json.materials[a];return!r.extensions||!r.extensions[this.name]?null:Nn}extendMaterialParams(a,s){const r=this.parser,c=r.json.materials[a];if(!c.extensions||!c.extensions[this.name])return Promise.resolve();const f=[],u=c.extensions[this.name];if(u.clearcoatFactor!==void 0&&(s.clearcoat=u.clearcoatFactor),u.clearcoatTexture!==void 0&&f.push(r.assignTexture(s,"clearcoatMap",u.clearcoatTexture)),u.clearcoatRoughnessFactor!==void 0&&(s.clearcoatRoughness=u.clearcoatRoughnessFactor),u.clearcoatRoughnessTexture!==void 0&&f.push(r.assignTexture(s,"clearcoatRoughnessMap",u.clearcoatRoughnessTexture)),u.clearcoatNormalTexture!==void 0&&(f.push(r.assignTexture(s,"clearcoatNormalMap",u.clearcoatNormalTexture)),u.clearcoatNormalTexture.scale!==void 0)){const m=u.clearcoatNormalTexture.scale;s.clearcoatNormalScale=new Re(m,m)}return Promise.all(f)}}class JT{constructor(a){this.parser=a,this.name=me.KHR_MATERIALS_DISPERSION}getMaterialType(a){const r=this.parser.json.materials[a];return!r.extensions||!r.extensions[this.name]?null:Nn}extendMaterialParams(a,s){const c=this.parser.json.materials[a];if(!c.extensions||!c.extensions[this.name])return Promise.resolve();const f=c.extensions[this.name];return s.dispersion=f.dispersion!==void 0?f.dispersion:0,Promise.resolve()}}class $T{constructor(a){this.parser=a,this.name=me.KHR_MATERIALS_IRIDESCENCE}getMaterialType(a){const r=this.parser.json.materials[a];return!r.extensions||!r.extensions[this.name]?null:Nn}extendMaterialParams(a,s){const r=this.parser,c=r.json.materials[a];if(!c.extensions||!c.extensions[this.name])return Promise.resolve();const f=[],u=c.extensions[this.name];return u.iridescenceFactor!==void 0&&(s.iridescence=u.iridescenceFactor),u.iridescenceTexture!==void 0&&f.push(r.assignTexture(s,"iridescenceMap",u.iridescenceTexture)),u.iridescenceIor!==void 0&&(s.iridescenceIOR=u.iridescenceIor),s.iridescenceThicknessRange===void 0&&(s.iridescenceThicknessRange=[100,400]),u.iridescenceThicknessMinimum!==void 0&&(s.iridescenceThicknessRange[0]=u.iridescenceThicknessMinimum),u.iridescenceThicknessMaximum!==void 0&&(s.iridescenceThicknessRange[1]=u.iridescenceThicknessMaximum),u.iridescenceThicknessTexture!==void 0&&f.push(r.assignTexture(s,"iridescenceThicknessMap",u.iridescenceThicknessTexture)),Promise.all(f)}}class ex{constructor(a){this.parser=a,this.name=me.KHR_MATERIALS_SHEEN}getMaterialType(a){const r=this.parser.json.materials[a];return!r.extensions||!r.extensions[this.name]?null:Nn}extendMaterialParams(a,s){const r=this.parser,c=r.json.materials[a];if(!c.extensions||!c.extensions[this.name])return Promise.resolve();const f=[];s.sheenColor=new Pt(0,0,0),s.sheenRoughness=0,s.sheen=1;const u=c.extensions[this.name];if(u.sheenColorFactor!==void 0){const m=u.sheenColorFactor;s.sheenColor.setRGB(m[0],m[1],m[2],Jn)}return u.sheenRoughnessFactor!==void 0&&(s.sheenRoughness=u.sheenRoughnessFactor),u.sheenColorTexture!==void 0&&f.push(r.assignTexture(s,"sheenColorMap",u.sheenColorTexture,Cs)),u.sheenRoughnessTexture!==void 0&&f.push(r.assignTexture(s,"sheenRoughnessMap",u.sheenRoughnessTexture)),Promise.all(f)}}class tx{constructor(a){this.parser=a,this.name=me.KHR_MATERIALS_TRANSMISSION}getMaterialType(a){const r=this.parser.json.materials[a];return!r.extensions||!r.extensions[this.name]?null:Nn}extendMaterialParams(a,s){const r=this.parser,c=r.json.materials[a];if(!c.extensions||!c.extensions[this.name])return Promise.resolve();const f=[],u=c.extensions[this.name];return u.transmissionFactor!==void 0&&(s.transmission=u.transmissionFactor),u.transmissionTexture!==void 0&&f.push(r.assignTexture(s,"transmissionMap",u.transmissionTexture)),Promise.all(f)}}class nx{constructor(a){this.parser=a,this.name=me.KHR_MATERIALS_VOLUME}getMaterialType(a){const r=this.parser.json.materials[a];return!r.extensions||!r.extensions[this.name]?null:Nn}extendMaterialParams(a,s){const r=this.parser,c=r.json.materials[a];if(!c.extensions||!c.extensions[this.name])return Promise.resolve();const f=[],u=c.extensions[this.name];s.thickness=u.thicknessFactor!==void 0?u.thicknessFactor:0,u.thicknessTexture!==void 0&&f.push(r.assignTexture(s,"thicknessMap",u.thicknessTexture)),s.attenuationDistance=u.attenuationDistance||1/0;const m=u.attenuationColor||[1,1,1];return s.attenuationColor=new Pt().setRGB(m[0],m[1],m[2],Jn),Promise.all(f)}}class ix{constructor(a){this.parser=a,this.name=me.KHR_MATERIALS_IOR}getMaterialType(a){const r=this.parser.json.materials[a];return!r.extensions||!r.extensions[this.name]?null:Nn}extendMaterialParams(a,s){const c=this.parser.json.materials[a];if(!c.extensions||!c.extensions[this.name])return Promise.resolve();const f=c.extensions[this.name];return s.ior=f.ior!==void 0?f.ior:1.5,Promise.resolve()}}class ax{constructor(a){this.parser=a,this.name=me.KHR_MATERIALS_SPECULAR}getMaterialType(a){const r=this.parser.json.materials[a];return!r.extensions||!r.extensions[this.name]?null:Nn}extendMaterialParams(a,s){const r=this.parser,c=r.json.materials[a];if(!c.extensions||!c.extensions[this.name])return Promise.resolve();const f=[],u=c.extensions[this.name];s.specularIntensity=u.specularFactor!==void 0?u.specularFactor:1,u.specularTexture!==void 0&&f.push(r.assignTexture(s,"specularIntensityMap",u.specularTexture));const m=u.specularColorFactor||[1,1,1];return s.specularColor=new Pt().setRGB(m[0],m[1],m[2],Jn),u.specularColorTexture!==void 0&&f.push(r.assignTexture(s,"specularColorMap",u.specularColorTexture,Cs)),Promise.all(f)}}class sx{constructor(a){this.parser=a,this.name=me.EXT_MATERIALS_BUMP}getMaterialType(a){const r=this.parser.json.materials[a];return!r.extensions||!r.extensions[this.name]?null:Nn}extendMaterialParams(a,s){const r=this.parser,c=r.json.materials[a];if(!c.extensions||!c.extensions[this.name])return Promise.resolve();const f=[],u=c.extensions[this.name];return s.bumpScale=u.bumpFactor!==void 0?u.bumpFactor:1,u.bumpTexture!==void 0&&f.push(r.assignTexture(s,"bumpMap",u.bumpTexture)),Promise.all(f)}}class lx{constructor(a){this.parser=a,this.name=me.KHR_MATERIALS_ANISOTROPY}getMaterialType(a){const r=this.parser.json.materials[a];return!r.extensions||!r.extensions[this.name]?null:Nn}extendMaterialParams(a,s){const r=this.parser,c=r.json.materials[a];if(!c.extensions||!c.extensions[this.name])return Promise.resolve();const f=[],u=c.extensions[this.name];return u.anisotropyStrength!==void 0&&(s.anisotropy=u.anisotropyStrength),u.anisotropyRotation!==void 0&&(s.anisotropyRotation=u.anisotropyRotation),u.anisotropyTexture!==void 0&&f.push(r.assignTexture(s,"anisotropyMap",u.anisotropyTexture)),Promise.all(f)}}class rx{constructor(a){this.parser=a,this.name=me.KHR_TEXTURE_BASISU}loadTexture(a){const s=this.parser,r=s.json,c=r.textures[a];if(!c.extensions||!c.extensions[this.name])return null;const f=c.extensions[this.name],u=s.options.ktx2Loader;if(!u){if(r.extensionsRequired&&r.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return s.loadTextureImage(a,f.source,u)}}class ox{constructor(a){this.parser=a,this.name=me.EXT_TEXTURE_WEBP}loadTexture(a){const s=this.name,r=this.parser,c=r.json,f=c.textures[a];if(!f.extensions||!f.extensions[s])return null;const u=f.extensions[s],m=c.images[u.source];let d=r.textureLoader;if(m.uri){const g=r.options.manager.getHandler(m.uri);g!==null&&(d=g)}return r.loadTextureImage(a,u.source,d)}}class cx{constructor(a){this.parser=a,this.name=me.EXT_TEXTURE_AVIF}loadTexture(a){const s=this.name,r=this.parser,c=r.json,f=c.textures[a];if(!f.extensions||!f.extensions[s])return null;const u=f.extensions[s],m=c.images[u.source];let d=r.textureLoader;if(m.uri){const g=r.options.manager.getHandler(m.uri);g!==null&&(d=g)}return r.loadTextureImage(a,u.source,d)}}class ux{constructor(a){this.name=me.EXT_MESHOPT_COMPRESSION,this.parser=a}loadBufferView(a){const s=this.parser.json,r=s.bufferViews[a];if(r.extensions&&r.extensions[this.name]){const c=r.extensions[this.name],f=this.parser.getDependency("buffer",c.buffer),u=this.parser.options.meshoptDecoder;if(!u||!u.supported){if(s.extensionsRequired&&s.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return f.then(function(m){const d=c.byteOffset||0,g=c.byteLength||0,b=c.count,v=c.byteStride,p=new Uint8Array(m,d,g);return u.decodeGltfBufferAsync?u.decodeGltfBufferAsync(b,v,p,c.mode,c.filter).then(function(x){return x.buffer}):u.ready.then(function(){const x=new ArrayBuffer(b*v);return u.decodeGltfBuffer(new Uint8Array(x),b,v,p,c.mode,c.filter),x})})}else return null}}class fx{constructor(a){this.name=me.EXT_MESH_GPU_INSTANCING,this.parser=a}createNodeMesh(a){const s=this.parser.json,r=s.nodes[a];if(!r.extensions||!r.extensions[this.name]||r.mesh===void 0)return null;const c=s.meshes[r.mesh];for(const g of c.primitives)if(g.mode!==tn.TRIANGLES&&g.mode!==tn.TRIANGLE_STRIP&&g.mode!==tn.TRIANGLE_FAN&&g.mode!==void 0)return null;const u=r.extensions[this.name].attributes,m=[],d={};for(const g in u)m.push(this.parser.getDependency("accessor",u[g]).then(b=>(d[g]=b,d[g])));return m.length<1?null:(m.push(this.parser.createNodeMesh(a)),Promise.all(m).then(g=>{const b=g.pop(),v=b.isGroup?b.children:[b],p=g[0].count,x=[];for(const _ of v){const w=new Pe,T=new Q,M=new Pl,R=new Q(1,1,1),A=new bv(_.geometry,_.material,p);for(let C=0;C<p;C++)d.TRANSLATION&&T.fromBufferAttribute(d.TRANSLATION,C),d.ROTATION&&M.fromBufferAttribute(d.ROTATION,C),d.SCALE&&R.fromBufferAttribute(d.SCALE,C),A.setMatrixAt(C,w.compose(T,M,R));for(const C in d)if(C==="_COLOR_0"){const D=d[C];A.instanceColor=new Z1(D.array,D.itemSize,D.normalized)}else C!=="TRANSLATION"&&C!=="ROTATION"&&C!=="SCALE"&&_.geometry.setAttribute(C,d[C]);Wo.prototype.copy.call(A,_),this.parser.assignFinalMaterial(A),x.push(A)}return b.isGroup?(b.clear(),b.add(...x),b):x[0]}))}}const Rv="glTF",Rl=12,Ag={JSON:1313821514,BIN:5130562};class hx{constructor(a){this.name=me.KHR_BINARY_GLTF,this.content=null,this.body=null;const s=new DataView(a,0,Rl),r=new TextDecoder;if(this.header={magic:r.decode(new Uint8Array(a.slice(0,4))),version:s.getUint32(4,!0),length:s.getUint32(8,!0)},this.header.magic!==Rv)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const c=this.header.length-Rl,f=new DataView(a,Rl);let u=0;for(;u<c;){const m=f.getUint32(u,!0);u+=4;const d=f.getUint32(u,!0);if(u+=4,d===Ag.JSON){const g=new Uint8Array(a,Rl+u,m);this.content=r.decode(g)}else if(d===Ag.BIN){const g=Rl+u;this.body=a.slice(g,g+m)}u+=m}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class dx{constructor(a,s){if(!s)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=me.KHR_DRACO_MESH_COMPRESSION,this.json=a,this.dracoLoader=s,this.dracoLoader.preload()}decodePrimitive(a,s){const r=this.json,c=this.dracoLoader,f=a.extensions[this.name].bufferView,u=a.extensions[this.name].attributes,m={},d={},g={};for(const b in u){const v=mh[b]||b.toLowerCase();m[v]=u[b]}for(const b in a.attributes){const v=mh[b]||b.toLowerCase();if(u[b]!==void 0){const p=r.accessors[a.attributes[b]],x=Rs[p.componentType];g[v]=x.name,d[v]=p.normalized===!0}}return s.getDependency("bufferView",f).then(function(b){return new Promise(function(v,p){c.decodeDracoFile(b,function(x){for(const _ in x.attributes){const w=x.attributes[_],T=d[_];T!==void 0&&(w.normalized=T)}v(x)},m,g,Jn,p)})})}}class mx{constructor(){this.name=me.KHR_TEXTURE_TRANSFORM}extendTexture(a,s){return(s.texCoord===void 0||s.texCoord===a.channel)&&s.offset===void 0&&s.rotation===void 0&&s.scale===void 0||(a=a.clone(),s.texCoord!==void 0&&(a.channel=s.texCoord),s.offset!==void 0&&a.offset.fromArray(s.offset),s.rotation!==void 0&&(a.rotation=s.rotation),s.scale!==void 0&&a.repeat.fromArray(s.scale),a.needsUpdate=!0),a}}class px{constructor(){this.name=me.KHR_MESH_QUANTIZATION}}class Cv extends gT{constructor(a,s,r,c){super(a,s,r,c)}copySampleValue_(a){const s=this.resultBuffer,r=this.sampleValues,c=this.valueSize,f=a*c*3+c;for(let u=0;u!==c;u++)s[u]=r[f+u];return s}interpolate_(a,s,r,c){const f=this.resultBuffer,u=this.sampleValues,m=this.valueSize,d=m*2,g=m*3,b=c-s,v=(r-s)/b,p=v*v,x=p*v,_=a*g,w=_-g,T=-2*x+3*p,M=x-p,R=1-T,A=M-p+v;for(let C=0;C!==m;C++){const D=u[w+C+m],H=u[w+C+d]*b,z=u[_+C+m],j=u[_+C]*b;f[C]=R*D+A*H+T*z+M*j}return f}}const gx=new Pl;class vx extends Cv{interpolate_(a,s,r,c){const f=super.interpolate_(a,s,r,c);return gx.fromArray(f).normalize().toArray(f),f}}const tn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Rs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},wg={9728:Le,9729:Et,9984:tT,9985:eT,9986:$1,9987:Tv},Eg={33071:$n,33648:nT,10497:pn},jf={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},mh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},zi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},yx={CUBICSPLINE:void 0,LINEAR:Sv,STEP:mT},Yf={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function bx(h){return h.DefaultMaterial===void 0&&(h.DefaultMaterial=new Xo({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ko})),h.DefaultMaterial}function fa(h,a,s){for(const r in s.extensions)h[r]===void 0&&(a.userData.gltfExtensions=a.userData.gltfExtensions||{},a.userData.gltfExtensions[r]=s.extensions[r])}function Dn(h,a){a.extras!==void 0&&(typeof a.extras=="object"?Object.assign(h.userData,a.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+a.extras))}function Tx(h,a,s){let r=!1,c=!1,f=!1;for(let g=0,b=a.length;g<b;g++){const v=a[g];if(v.POSITION!==void 0&&(r=!0),v.NORMAL!==void 0&&(c=!0),v.COLOR_0!==void 0&&(f=!0),r&&c&&f)break}if(!r&&!c&&!f)return Promise.resolve(h);const u=[],m=[],d=[];for(let g=0,b=a.length;g<b;g++){const v=a[g];if(r){const p=v.POSITION!==void 0?s.getDependency("accessor",v.POSITION):h.attributes.position;u.push(p)}if(c){const p=v.NORMAL!==void 0?s.getDependency("accessor",v.NORMAL):h.attributes.normal;m.push(p)}if(f){const p=v.COLOR_0!==void 0?s.getDependency("accessor",v.COLOR_0):h.attributes.color;d.push(p)}}return Promise.all([Promise.all(u),Promise.all(m),Promise.all(d)]).then(function(g){const b=g[0],v=g[1],p=g[2];return r&&(h.morphAttributes.position=b),c&&(h.morphAttributes.normal=v),f&&(h.morphAttributes.color=p),h.morphTargetsRelative=!0,h})}function xx(h,a){if(h.updateMorphTargets(),a.weights!==void 0)for(let s=0,r=a.weights.length;s<r;s++)h.morphTargetInfluences[s]=a.weights[s];if(a.extras&&Array.isArray(a.extras.targetNames)){const s=a.extras.targetNames;if(h.morphTargetInfluences.length===s.length){h.morphTargetDictionary={};for(let r=0,c=s.length;r<c;r++)h.morphTargetDictionary[s[r]]=r}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Sx(h){let a;const s=h.extensions&&h.extensions[me.KHR_DRACO_MESH_COMPRESSION];if(s?a="draco:"+s.bufferView+":"+s.indices+":"+kf(s.attributes):a=h.indices+":"+kf(h.attributes)+":"+h.mode,h.targets!==void 0)for(let r=0,c=h.targets.length;r<c;r++)a+=":"+kf(h.targets[r]);return a}function kf(h){let a="";const s=Object.keys(h).sort();for(let r=0,c=s.length;r<c;r++)a+=s[r]+":"+h[s[r]]+";";return a}function ph(h){switch(h){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function _x(h){return h.search(/\.jpe?g($|\?)/i)>0||h.search(/^data\:image\/jpeg/)===0?"image/jpeg":h.search(/\.webp($|\?)/i)>0||h.search(/^data\:image\/webp/)===0?"image/webp":h.search(/\.ktx2($|\?)/i)>0||h.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const Ax=new Pe;class wx{constructor(a={},s={}){this.json=a,this.extensions={},this.plugins={},this.options=s,this.cache=new XT,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let r=!1,c=-1,f=!1,u=-1;if(typeof navigator<"u"){const m=navigator.userAgent;r=/^((?!chrome|android).)*safari/i.test(m)===!0;const d=m.match(/Version\/(\d+)/);c=r&&d?parseInt(d[1],10):-1,f=m.indexOf("Firefox")>-1,u=f?m.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||r&&c<17||f&&u<98?this.textureLoader=new Q1(this.options.manager):this.textureLoader=new W1(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new yv(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(a){this.extensions=a}setPlugins(a){this.plugins=a}parse(a,s){const r=this,c=this.json,f=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(u){return u._markDefs&&u._markDefs()}),Promise.all(this._invokeAll(function(u){return u.beforeRoot&&u.beforeRoot()})).then(function(){return Promise.all([r.getDependencies("scene"),r.getDependencies("animation"),r.getDependencies("camera")])}).then(function(u){const m={scene:u[0][c.scene||0],scenes:u[0],animations:u[1],cameras:u[2],asset:c.asset,parser:r,userData:{}};return fa(f,m,c),Dn(m,c),Promise.all(r._invokeAll(function(d){return d.afterRoot&&d.afterRoot(m)})).then(function(){for(const d of m.scenes)d.updateMatrixWorld();a(m)})}).catch(s)}_markDefs(){const a=this.json.nodes||[],s=this.json.skins||[],r=this.json.meshes||[];for(let c=0,f=s.length;c<f;c++){const u=s[c].joints;for(let m=0,d=u.length;m<d;m++)a[u[m]].isBone=!0}for(let c=0,f=a.length;c<f;c++){const u=a[c];u.mesh!==void 0&&(this._addNodeRef(this.meshCache,u.mesh),u.skin!==void 0&&(r[u.mesh].isSkinnedMesh=!0)),u.camera!==void 0&&this._addNodeRef(this.cameraCache,u.camera)}}_addNodeRef(a,s){s!==void 0&&(a.refs[s]===void 0&&(a.refs[s]=a.uses[s]=0),a.refs[s]++)}_getNodeRef(a,s,r){if(a.refs[s]<=1)return r;const c=r.clone(),f=(u,m)=>{const d=this.associations.get(u);d!=null&&this.associations.set(m,d);for(const[g,b]of u.children.entries())f(b,m.children[g])};return f(r,c),c.name+="_instance_"+a.uses[s]++,c}_invokeOne(a){const s=Object.values(this.plugins);s.push(this);for(let r=0;r<s.length;r++){const c=a(s[r]);if(c)return c}return null}_invokeAll(a){const s=Object.values(this.plugins);s.unshift(this);const r=[];for(let c=0;c<s.length;c++){const f=a(s[c]);f&&r.push(f)}return r}getDependency(a,s){const r=a+":"+s;let c=this.cache.get(r);if(!c){switch(a){case"scene":c=this.loadScene(s);break;case"node":c=this._invokeOne(function(f){return f.loadNode&&f.loadNode(s)});break;case"mesh":c=this._invokeOne(function(f){return f.loadMesh&&f.loadMesh(s)});break;case"accessor":c=this.loadAccessor(s);break;case"bufferView":c=this._invokeOne(function(f){return f.loadBufferView&&f.loadBufferView(s)});break;case"buffer":c=this.loadBuffer(s);break;case"material":c=this._invokeOne(function(f){return f.loadMaterial&&f.loadMaterial(s)});break;case"texture":c=this._invokeOne(function(f){return f.loadTexture&&f.loadTexture(s)});break;case"skin":c=this.loadSkin(s);break;case"animation":c=this._invokeOne(function(f){return f.loadAnimation&&f.loadAnimation(s)});break;case"camera":c=this.loadCamera(s);break;default:if(c=this._invokeOne(function(f){return f!=this&&f.getDependency&&f.getDependency(a,s)}),!c)throw new Error("Unknown type: "+a);break}this.cache.add(r,c)}return c}getDependencies(a){let s=this.cache.get(a);if(!s){const r=this,c=this.json[a+(a==="mesh"?"es":"s")]||[];s=Promise.all(c.map(function(f,u){return r.getDependency(a,u)})),this.cache.add(a,s)}return s}loadBuffer(a){const s=this.json.buffers[a],r=this.fileLoader;if(s.type&&s.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+s.type+" buffer type is not supported.");if(s.uri===void 0&&a===0)return Promise.resolve(this.extensions[me.KHR_BINARY_GLTF].body);const c=this.options;return new Promise(function(f,u){r.load(Il.resolveURL(s.uri,c.path),f,void 0,function(){u(new Error('THREE.GLTFLoader: Failed to load buffer "'+s.uri+'".'))})})}loadBufferView(a){const s=this.json.bufferViews[a];return this.getDependency("buffer",s.buffer).then(function(r){const c=s.byteLength||0,f=s.byteOffset||0;return r.slice(f,f+c)})}loadAccessor(a){const s=this,r=this.json,c=this.json.accessors[a];if(c.bufferView===void 0&&c.sparse===void 0){const u=jf[c.type],m=Rs[c.componentType],d=c.normalized===!0,g=new m(c.count*u);return Promise.resolve(new ct(g,u,d))}const f=[];return c.bufferView!==void 0?f.push(this.getDependency("bufferView",c.bufferView)):f.push(null),c.sparse!==void 0&&(f.push(this.getDependency("bufferView",c.sparse.indices.bufferView)),f.push(this.getDependency("bufferView",c.sparse.values.bufferView))),Promise.all(f).then(function(u){const m=u[0],d=jf[c.type],g=Rs[c.componentType],b=g.BYTES_PER_ELEMENT,v=b*d,p=c.byteOffset||0,x=c.bufferView!==void 0?r.bufferViews[c.bufferView].byteStride:void 0,_=c.normalized===!0;let w,T;if(x&&x!==v){const M=Math.floor(p/x),R="InterleavedBuffer:"+c.bufferView+":"+c.componentType+":"+M+":"+c.count;let A=s.cache.get(R);A||(w=new g(m,M*x,c.count*x/b),A=new J1(w,x/b),s.cache.add(R,A)),T=new pT(A,d,p%x/b,_)}else m===null?w=new g(c.count*d):w=new g(m,p,c.count*d),T=new ct(w,d,_);if(c.sparse!==void 0){const M=jf.SCALAR,R=Rs[c.sparse.indices.componentType],A=c.sparse.indices.byteOffset||0,C=c.sparse.values.byteOffset||0,D=new R(u[1],A,c.sparse.count*M),H=new g(u[2],C,c.sparse.count*d);m!==null&&(T=new ct(T.array.slice(),T.itemSize,T.normalized)),T.normalized=!1;for(let z=0,j=D.length;z<j;z++){const V=D[z];if(T.setX(V,H[z*d]),d>=2&&T.setY(V,H[z*d+1]),d>=3&&T.setZ(V,H[z*d+2]),d>=4&&T.setW(V,H[z*d+3]),d>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}T.normalized=_}return T})}loadTexture(a){const s=this.json,r=this.options,f=s.textures[a].source,u=s.images[f];let m=this.textureLoader;if(u.uri){const d=r.manager.getHandler(u.uri);d!==null&&(m=d)}return this.loadTextureImage(a,f,m)}loadTextureImage(a,s,r){const c=this,f=this.json,u=f.textures[a],m=f.images[s],d=(m.uri||m.bufferView)+":"+u.sampler;if(this.textureCache[d])return this.textureCache[d];const g=this.loadImageSource(s,r).then(function(b){b.flipY=!1,b.name=u.name||m.name||"",b.name===""&&typeof m.uri=="string"&&m.uri.startsWith("data:image/")===!1&&(b.name=m.uri);const p=(f.samplers||{})[u.sampler]||{};return b.magFilter=wg[p.magFilter]||Et,b.minFilter=wg[p.minFilter]||Tv,b.wrapS=Eg[p.wrapS]||pn,b.wrapT=Eg[p.wrapT]||pn,b.generateMipmaps=!b.isCompressedTexture&&b.minFilter!==Le&&b.minFilter!==Et,c.associations.set(b,{textures:a}),b}).catch(function(){return null});return this.textureCache[d]=g,g}loadImageSource(a,s){const r=this,c=this.json,f=this.options;if(this.sourceCache[a]!==void 0)return this.sourceCache[a].then(v=>v.clone());const u=c.images[a],m=self.URL||self.webkitURL;let d=u.uri||"",g=!1;if(u.bufferView!==void 0)d=r.getDependency("bufferView",u.bufferView).then(function(v){g=!0;const p=new Blob([v],{type:u.mimeType});return d=m.createObjectURL(p),d});else if(u.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+a+" is missing URI and bufferView");const b=Promise.resolve(d).then(function(v){return new Promise(function(p,x){let _=p;s.isImageBitmapLoader===!0&&(_=function(w){const T=new fg(w);T.needsUpdate=!0,p(T)}),s.load(Il.resolveURL(v,f.path),_,void 0,x)})}).then(function(v){return g===!0&&m.revokeObjectURL(d),Dn(v,u),v.userData.mimeType=u.mimeType||_x(u.uri),v}).catch(function(v){throw console.error("THREE.GLTFLoader: Couldn't load texture",d),v});return this.sourceCache[a]=b,b}assignTexture(a,s,r,c){const f=this;return this.getDependency("texture",r.index).then(function(u){if(!u)return null;if(r.texCoord!==void 0&&r.texCoord>0&&(u=u.clone(),u.channel=r.texCoord),f.extensions[me.KHR_TEXTURE_TRANSFORM]){const m=r.extensions!==void 0?r.extensions[me.KHR_TEXTURE_TRANSFORM]:void 0;if(m){const d=f.associations.get(u);u=f.extensions[me.KHR_TEXTURE_TRANSFORM].extendTexture(u,m),f.associations.set(u,d)}}return c!==void 0&&(u.colorSpace=c),a[s]=u,u})}assignFinalMaterial(a){const s=a.geometry;let r=a.material;const c=s.attributes.tangent===void 0,f=s.attributes.color!==void 0,u=s.attributes.normal===void 0;if(a.isPoints){const m="PointsMaterial:"+r.uuid;let d=this.cache.get(m);d||(d=new iT,Ff.prototype.copy.call(d,r),d.color.copy(r.color),d.map=r.map,d.sizeAttenuation=!1,this.cache.add(m,d)),r=d}else if(a.isLine){const m="LineBasicMaterial:"+r.uuid;let d=this.cache.get(m);d||(d=new aT,Ff.prototype.copy.call(d,r),d.color.copy(r.color),d.map=r.map,this.cache.add(m,d)),r=d}if(c||f||u){let m="ClonedMaterial:"+r.uuid+":";c&&(m+="derivative-tangents:"),f&&(m+="vertex-colors:"),u&&(m+="flat-shading:");let d=this.cache.get(m);d||(d=r.clone(),f&&(d.vertexColors=!0),u&&(d.flatShading=!0),c&&(d.normalScale&&(d.normalScale.y*=-1),d.clearcoatNormalScale&&(d.clearcoatNormalScale.y*=-1)),this.cache.add(m,d),this.associations.set(d,this.associations.get(r))),r=d}a.material=r}getMaterialType(){return Xo}loadMaterial(a){const s=this,r=this.json,c=this.extensions,f=r.materials[a];let u;const m={},d=f.extensions||{},g=[];if(d[me.KHR_MATERIALS_UNLIT]){const v=c[me.KHR_MATERIALS_UNLIT];u=v.getMaterialType(),g.push(v.extendParams(m,f,s))}else{const v=f.pbrMetallicRoughness||{};if(m.color=new Pt(1,1,1),m.opacity=1,Array.isArray(v.baseColorFactor)){const p=v.baseColorFactor;m.color.setRGB(p[0],p[1],p[2],Jn),m.opacity=p[3]}v.baseColorTexture!==void 0&&g.push(s.assignTexture(m,"map",v.baseColorTexture,Cs)),m.metalness=v.metallicFactor!==void 0?v.metallicFactor:1,m.roughness=v.roughnessFactor!==void 0?v.roughnessFactor:1,v.metallicRoughnessTexture!==void 0&&(g.push(s.assignTexture(m,"metalnessMap",v.metallicRoughnessTexture)),g.push(s.assignTexture(m,"roughnessMap",v.metallicRoughnessTexture))),u=this._invokeOne(function(p){return p.getMaterialType&&p.getMaterialType(a)}),g.push(Promise.all(this._invokeAll(function(p){return p.extendMaterialParams&&p.extendMaterialParams(a,m)})))}f.doubleSided===!0&&(m.side=Rh);const b=f.alphaMode||Yf.OPAQUE;if(b===Yf.BLEND?(m.transparent=!0,m.depthWrite=!1):(m.transparent=!1,b===Yf.MASK&&(m.alphaTest=f.alphaCutoff!==void 0?f.alphaCutoff:.5)),f.normalTexture!==void 0&&u!==As&&(g.push(s.assignTexture(m,"normalMap",f.normalTexture)),m.normalScale=new Re(1,1),f.normalTexture.scale!==void 0)){const v=f.normalTexture.scale;m.normalScale.set(v,v)}if(f.occlusionTexture!==void 0&&u!==As&&(g.push(s.assignTexture(m,"aoMap",f.occlusionTexture)),f.occlusionTexture.strength!==void 0&&(m.aoMapIntensity=f.occlusionTexture.strength)),f.emissiveFactor!==void 0&&u!==As){const v=f.emissiveFactor;m.emissive=new Pt().setRGB(v[0],v[1],v[2],Jn)}return f.emissiveTexture!==void 0&&u!==As&&g.push(s.assignTexture(m,"emissiveMap",f.emissiveTexture,Cs)),Promise.all(g).then(function(){const v=new u(m);return f.name&&(v.name=f.name),Dn(v,f),s.associations.set(v,{materials:a}),f.extensions&&fa(c,v,f),v})}createUniqueName(a){const s=sT.sanitizeNodeName(a||"");return s in this.nodeNamesUsed?s+"_"+ ++this.nodeNamesUsed[s]:(this.nodeNamesUsed[s]=0,s)}loadGeometries(a){const s=this,r=this.extensions,c=this.primitiveCache;function f(m){return r[me.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(m,s).then(function(d){return Mg(d,m,s)})}const u=[];for(let m=0,d=a.length;m<d;m++){const g=a[m],b=Sx(g),v=c[b];if(v)u.push(v.promise);else{let p;g.extensions&&g.extensions[me.KHR_DRACO_MESH_COMPRESSION]?p=f(g):p=Mg(new zn,g,s),c[b]={primitive:g,promise:p},u.push(p)}}return Promise.all(u)}loadMesh(a){const s=this,r=this.json,c=this.extensions,f=r.meshes[a],u=f.primitives,m=[];for(let d=0,g=u.length;d<g;d++){const b=u[d].material===void 0?bx(this.cache):this.getDependency("material",u[d].material);m.push(b)}return m.push(s.loadGeometries(u)),Promise.all(m).then(function(d){const g=d.slice(0,d.length-1),b=d[d.length-1],v=[];for(let x=0,_=b.length;x<_;x++){const w=b[x],T=u[x];let M;const R=g[x];if(T.mode===tn.TRIANGLES||T.mode===tn.TRIANGLE_STRIP||T.mode===tn.TRIANGLE_FAN||T.mode===void 0)M=f.isSkinnedMesh===!0?new lT(w,R):new nn(w,R),M.isSkinnedMesh===!0&&M.normalizeSkinWeights(),T.mode===tn.TRIANGLE_STRIP?M.geometry=_g(M.geometry,vv):T.mode===tn.TRIANGLE_FAN&&(M.geometry=_g(M.geometry,ch));else if(T.mode===tn.LINES)M=new rT(w,R);else if(T.mode===tn.LINE_STRIP)M=new oT(w,R);else if(T.mode===tn.LINE_LOOP)M=new cT(w,R);else if(T.mode===tn.POINTS)M=new uT(w,R);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+T.mode);Object.keys(M.geometry.morphAttributes).length>0&&xx(M,f),M.name=s.createUniqueName(f.name||"mesh_"+a),Dn(M,f),T.extensions&&fa(c,M,T),s.assignFinalMaterial(M),v.push(M)}for(let x=0,_=v.length;x<_;x++)s.associations.set(v[x],{meshes:a,primitives:x});if(v.length===1)return f.extensions&&fa(c,v[0],f),v[0];const p=new Fl;f.extensions&&fa(c,p,f),s.associations.set(p,{meshes:a});for(let x=0,_=v.length;x<_;x++)p.add(v[x]);return p})}loadCamera(a){let s;const r=this.json.cameras[a],c=r[r.type];if(!c){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return r.type==="perspective"?s=new Jo(jl.radToDeg(c.yfov),c.aspectRatio||1,c.znear||1,c.zfar||2e6):r.type==="orthographic"&&(s=new xv(-c.xmag,c.xmag,c.ymag,-c.ymag,c.znear,c.zfar)),r.name&&(s.name=this.createUniqueName(r.name)),Dn(s,r),Promise.resolve(s)}loadSkin(a){const s=this.json.skins[a],r=[];for(let c=0,f=s.joints.length;c<f;c++)r.push(this._loadNodeShallow(s.joints[c]));return s.inverseBindMatrices!==void 0?r.push(this.getDependency("accessor",s.inverseBindMatrices)):r.push(null),Promise.all(r).then(function(c){const f=c.pop(),u=c,m=[],d=[];for(let g=0,b=u.length;g<b;g++){const v=u[g];if(v){m.push(v);const p=new Pe;f!==null&&p.fromArray(f.array,g*16),d.push(p)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',s.joints[g])}return new fT(m,d)})}loadAnimation(a){const s=this.json,r=this,c=s.animations[a],f=c.name?c.name:"animation_"+a,u=[],m=[],d=[],g=[],b=[];for(let v=0,p=c.channels.length;v<p;v++){const x=c.channels[v],_=c.samplers[x.sampler],w=x.target,T=w.node,M=c.parameters!==void 0?c.parameters[_.input]:_.input,R=c.parameters!==void 0?c.parameters[_.output]:_.output;w.node!==void 0&&(u.push(this.getDependency("node",T)),m.push(this.getDependency("accessor",M)),d.push(this.getDependency("accessor",R)),g.push(_),b.push(w))}return Promise.all([Promise.all(u),Promise.all(m),Promise.all(d),Promise.all(g),Promise.all(b)]).then(function(v){const p=v[0],x=v[1],_=v[2],w=v[3],T=v[4],M=[];for(let A=0,C=p.length;A<C;A++){const D=p[A],H=x[A],z=_[A],j=w[A],V=T[A];if(D===void 0)continue;D.updateMatrix&&D.updateMatrix();const Y=r._createAnimationTracks(D,H,z,j,V);if(Y)for(let K=0;K<Y.length;K++)M.push(Y[K])}const R=new hT(f,void 0,M);return Dn(R,c),R})}createNodeMesh(a){const s=this.json,r=this,c=s.nodes[a];return c.mesh===void 0?null:r.getDependency("mesh",c.mesh).then(function(f){const u=r._getNodeRef(r.meshCache,c.mesh,f);return c.weights!==void 0&&u.traverse(function(m){if(m.isMesh)for(let d=0,g=c.weights.length;d<g;d++)m.morphTargetInfluences[d]=c.weights[d]}),u})}loadNode(a){const s=this.json,r=this,c=s.nodes[a],f=r._loadNodeShallow(a),u=[],m=c.children||[];for(let g=0,b=m.length;g<b;g++)u.push(r.getDependency("node",m[g]));const d=c.skin===void 0?Promise.resolve(null):r.getDependency("skin",c.skin);return Promise.all([f,Promise.all(u),d]).then(function(g){const b=g[0],v=g[1],p=g[2];p!==null&&b.traverse(function(x){x.isSkinnedMesh&&x.bind(p,Ax)});for(let x=0,_=v.length;x<_;x++)b.add(v[x]);return b})}_loadNodeShallow(a){const s=this.json,r=this.extensions,c=this;if(this.nodeCache[a]!==void 0)return this.nodeCache[a];const f=s.nodes[a],u=f.name?c.createUniqueName(f.name):"",m=[],d=c._invokeOne(function(g){return g.createNodeMesh&&g.createNodeMesh(a)});return d&&m.push(d),f.camera!==void 0&&m.push(c.getDependency("camera",f.camera).then(function(g){return c._getNodeRef(c.cameraCache,f.camera,g)})),c._invokeAll(function(g){return g.createNodeAttachment&&g.createNodeAttachment(a)}).forEach(function(g){m.push(g)}),this.nodeCache[a]=Promise.all(m).then(function(g){let b;if(f.isBone===!0?b=new dT:g.length>1?b=new Fl:g.length===1?b=g[0]:b=new Wo,b!==g[0])for(let v=0,p=g.length;v<p;v++)b.add(g[v]);if(f.name&&(b.userData.name=f.name,b.name=u),Dn(b,f),f.extensions&&fa(r,b,f),f.matrix!==void 0){const v=new Pe;v.fromArray(f.matrix),b.applyMatrix4(v)}else f.translation!==void 0&&b.position.fromArray(f.translation),f.rotation!==void 0&&b.quaternion.fromArray(f.rotation),f.scale!==void 0&&b.scale.fromArray(f.scale);if(!c.associations.has(b))c.associations.set(b,{});else if(f.mesh!==void 0&&c.meshCache.refs[f.mesh]>1){const v=c.associations.get(b);c.associations.set(b,{...v})}return c.associations.get(b).nodes=a,b}),this.nodeCache[a]}loadScene(a){const s=this.extensions,r=this.json.scenes[a],c=this,f=new Fl;r.name&&(f.name=c.createUniqueName(r.name)),Dn(f,r),r.extensions&&fa(s,f,r);const u=r.nodes||[],m=[];for(let d=0,g=u.length;d<g;d++)m.push(c.getDependency("node",u[d]));return Promise.all(m).then(function(d){for(let b=0,v=d.length;b<v;b++)f.add(d[b]);const g=b=>{const v=new Map;for(const[p,x]of c.associations)(p instanceof Ff||p instanceof fg)&&v.set(p,x);return b.traverse(p=>{const x=c.associations.get(p);x!=null&&v.set(p,x)}),v};return c.associations=g(f),f})}_createAnimationTracks(a,s,r,c,f){const u=[],m=a.name?a.name:a.uuid,d=[];zi[f.path]===zi.weights?a.traverse(function(p){p.morphTargetInfluences&&d.push(p.name?p.name:p.uuid)}):d.push(m);let g;switch(zi[f.path]){case zi.weights:g=dg;break;case zi.rotation:g=mg;break;case zi.translation:case zi.scale:g=hg;break;default:r.itemSize===1?g=dg:g=hg;break}const b=c.interpolation!==void 0?yx[c.interpolation]:Sv,v=this._getArrayFromAccessor(r);for(let p=0,x=d.length;p<x;p++){const _=new g(d[p]+"."+zi[f.path],s.array,v,b);c.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),u.push(_)}return u}_getArrayFromAccessor(a){let s=a.array;if(a.normalized){const r=ph(s.constructor),c=new Float32Array(s.length);for(let f=0,u=s.length;f<u;f++)c[f]=s[f]*r;s=c}return s}_createCubicSplineTrackInterpolant(a){a.createInterpolant=function(r){const c=this instanceof mg?vx:Cv;return new c(this.times,this.values,this.getValueSize()/3,r)},a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Ex(h,a,s){const r=a.attributes,c=new Rt;if(r.POSITION!==void 0){const m=s.json.accessors[r.POSITION],d=m.min,g=m.max;if(d!==void 0&&g!==void 0){if(c.set(new Q(d[0],d[1],d[2]),new Q(g[0],g[1],g[2])),m.normalized){const b=ph(Rs[m.componentType]);c.min.multiplyScalar(b),c.max.multiplyScalar(b)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const f=a.targets;if(f!==void 0){const m=new Q,d=new Q;for(let g=0,b=f.length;g<b;g++){const v=f[g];if(v.POSITION!==void 0){const p=s.json.accessors[v.POSITION],x=p.min,_=p.max;if(x!==void 0&&_!==void 0){if(d.setX(Math.max(Math.abs(x[0]),Math.abs(_[0]))),d.setY(Math.max(Math.abs(x[1]),Math.abs(_[1]))),d.setZ(Math.max(Math.abs(x[2]),Math.abs(_[2]))),p.normalized){const w=ph(Rs[p.componentType]);d.multiplyScalar(w)}m.max(d)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}c.expandByVector(m)}h.boundingBox=c;const u=new vT;c.getCenter(u.center),u.radius=c.min.distanceTo(c.max)/2,h.boundingSphere=u}function Mg(h,a,s){const r=a.attributes,c=[];function f(u,m){return s.getDependency("accessor",u).then(function(d){h.setAttribute(m,d)})}for(const u in r){const m=mh[u]||u.toLowerCase();m in h.attributes||c.push(f(r[u],m))}if(a.indices!==void 0&&!h.index){const u=s.getDependency("accessor",a.indices).then(function(m){h.setIndex(m)});c.push(u)}return pg.workingColorSpace!==Jn&&"COLOR_0"in r&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${pg.workingColorSpace}" not supported.`),Dn(h,a),Ex(h,a,s),Promise.all(c).then(function(){return a.targets!==void 0?Tx(h,a.targets,s):h})}const Rg={type:"change"},zh={type:"start"},Dv={type:"end"},Ao=new bT,Cg=new Ch,Mx=Math.cos(70*jl.DEG2RAD),Qe=new Q,At=2*Math.PI,Ce={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Xf=1e-6;class Rx extends yT{constructor(a,s=null){super(a,s),this.state=Ce.NONE,this.target=new Q,this.cursor=new Q,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ms.ROTATE,MIDDLE:Ms.DOLLY,RIGHT:Ms.PAN},this.touches={ONE:ws.ROTATE,TWO:ws.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new Q,this._lastQuaternion=new Pl,this._lastTargetPosition=new Q,this._quat=new Pl().setFromUnitVectors(a.up,new Q(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new fh,this._sphericalDelta=new fh,this._scale=1,this._panOffset=new Q,this._rotateStart=new Re,this._rotateEnd=new Re,this._rotateDelta=new Re,this._panStart=new Re,this._panEnd=new Re,this._panDelta=new Re,this._dollyStart=new Re,this._dollyEnd=new Re,this._dollyDelta=new Re,this._dollyDirection=new Q,this._mouse=new Re,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Dx.bind(this),this._onPointerDown=Cx.bind(this),this._onPointerUp=Ox.bind(this),this._onContextMenu=Ix.bind(this),this._onMouseWheel=Bx.bind(this),this._onKeyDown=Ux.bind(this),this._onTouchStart=Lx.bind(this),this._onTouchMove=Hx.bind(this),this._onMouseDown=zx.bind(this),this._onMouseMove=Nx.bind(this),this._interceptControlDown=Fx.bind(this),this._interceptControlUp=Gx.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(a){super.connect(a),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(a){a.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=a}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Rg),this.update(),this.state=Ce.NONE}update(a=null){const s=this.object.position;Qe.copy(s).sub(this.target),Qe.applyQuaternion(this._quat),this._spherical.setFromVector3(Qe),this.autoRotate&&this.state===Ce.NONE&&this._rotateLeft(this._getAutoRotationAngle(a)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let r=this.minAzimuthAngle,c=this.maxAzimuthAngle;isFinite(r)&&isFinite(c)&&(r<-Math.PI?r+=At:r>Math.PI&&(r-=At),c<-Math.PI?c+=At:c>Math.PI&&(c-=At),r<=c?this._spherical.theta=Math.max(r,Math.min(c,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(r+c)/2?Math.max(r,this._spherical.theta):Math.min(c,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let f=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const u=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),f=u!=this._spherical.radius}if(Qe.setFromSpherical(this._spherical),Qe.applyQuaternion(this._quatInverse),s.copy(this.target).add(Qe),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let u=null;if(this.object.isPerspectiveCamera){const m=Qe.length();u=this._clampDistance(m*this._scale);const d=m-u;this.object.position.addScaledVector(this._dollyDirection,d),this.object.updateMatrixWorld(),f=!!d}else if(this.object.isOrthographicCamera){const m=new Q(this._mouse.x,this._mouse.y,0);m.unproject(this.object);const d=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),f=d!==this.object.zoom;const g=new Q(this._mouse.x,this._mouse.y,0);g.unproject(this.object),this.object.position.sub(g).add(m),this.object.updateMatrixWorld(),u=Qe.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;u!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(u).add(this.object.position):(Ao.origin.copy(this.object.position),Ao.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ao.direction))<Mx?this.object.lookAt(this.target):(Cg.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ao.intersectPlane(Cg,this.target))))}else if(this.object.isOrthographicCamera){const u=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),u!==this.object.zoom&&(this.object.updateProjectionMatrix(),f=!0)}return this._scale=1,this._performCursorZoom=!1,f||this._lastPosition.distanceToSquared(this.object.position)>Xf||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Xf||this._lastTargetPosition.distanceToSquared(this.target)>Xf?(this.dispatchEvent(Rg),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(a){return a!==null?At/60*this.autoRotateSpeed*a:At/60/60*this.autoRotateSpeed}_getZoomScale(a){const s=Math.abs(a*.01);return Math.pow(.95,this.zoomSpeed*s)}_rotateLeft(a){this._sphericalDelta.theta-=a}_rotateUp(a){this._sphericalDelta.phi-=a}_panLeft(a,s){Qe.setFromMatrixColumn(s,0),Qe.multiplyScalar(-a),this._panOffset.add(Qe)}_panUp(a,s){this.screenSpacePanning===!0?Qe.setFromMatrixColumn(s,1):(Qe.setFromMatrixColumn(s,0),Qe.crossVectors(this.object.up,Qe)),Qe.multiplyScalar(a),this._panOffset.add(Qe)}_pan(a,s){const r=this.domElement;if(this.object.isPerspectiveCamera){const c=this.object.position;Qe.copy(c).sub(this.target);let f=Qe.length();f*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*a*f/r.clientHeight,this.object.matrix),this._panUp(2*s*f/r.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(a*(this.object.right-this.object.left)/this.object.zoom/r.clientWidth,this.object.matrix),this._panUp(s*(this.object.top-this.object.bottom)/this.object.zoom/r.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(a){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=a:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(a){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=a:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(a,s){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const r=this.domElement.getBoundingClientRect(),c=a-r.left,f=s-r.top,u=r.width,m=r.height;this._mouse.x=c/u*2-1,this._mouse.y=-(f/m)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(a){return Math.max(this.minDistance,Math.min(this.maxDistance,a))}_handleMouseDownRotate(a){this._rotateStart.set(a.clientX,a.clientY)}_handleMouseDownDolly(a){this._updateZoomParameters(a.clientX,a.clientX),this._dollyStart.set(a.clientX,a.clientY)}_handleMouseDownPan(a){this._panStart.set(a.clientX,a.clientY)}_handleMouseMoveRotate(a){this._rotateEnd.set(a.clientX,a.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const s=this.domElement;this._rotateLeft(At*this._rotateDelta.x/s.clientHeight),this._rotateUp(At*this._rotateDelta.y/s.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(a){this._dollyEnd.set(a.clientX,a.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(a){this._panEnd.set(a.clientX,a.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(a){this._updateZoomParameters(a.clientX,a.clientY),a.deltaY<0?this._dollyIn(this._getZoomScale(a.deltaY)):a.deltaY>0&&this._dollyOut(this._getZoomScale(a.deltaY)),this.update()}_handleKeyDown(a){let s=!1;switch(a.code){case this.keys.UP:a.ctrlKey||a.metaKey||a.shiftKey?this.enableRotate&&this._rotateUp(At*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),s=!0;break;case this.keys.BOTTOM:a.ctrlKey||a.metaKey||a.shiftKey?this.enableRotate&&this._rotateUp(-At*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),s=!0;break;case this.keys.LEFT:a.ctrlKey||a.metaKey||a.shiftKey?this.enableRotate&&this._rotateLeft(At*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),s=!0;break;case this.keys.RIGHT:a.ctrlKey||a.metaKey||a.shiftKey?this.enableRotate&&this._rotateLeft(-At*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),s=!0;break}s&&(a.preventDefault(),this.update())}_handleTouchStartRotate(a){if(this._pointers.length===1)this._rotateStart.set(a.pageX,a.pageY);else{const s=this._getSecondPointerPosition(a),r=.5*(a.pageX+s.x),c=.5*(a.pageY+s.y);this._rotateStart.set(r,c)}}_handleTouchStartPan(a){if(this._pointers.length===1)this._panStart.set(a.pageX,a.pageY);else{const s=this._getSecondPointerPosition(a),r=.5*(a.pageX+s.x),c=.5*(a.pageY+s.y);this._panStart.set(r,c)}}_handleTouchStartDolly(a){const s=this._getSecondPointerPosition(a),r=a.pageX-s.x,c=a.pageY-s.y,f=Math.sqrt(r*r+c*c);this._dollyStart.set(0,f)}_handleTouchStartDollyPan(a){this.enableZoom&&this._handleTouchStartDolly(a),this.enablePan&&this._handleTouchStartPan(a)}_handleTouchStartDollyRotate(a){this.enableZoom&&this._handleTouchStartDolly(a),this.enableRotate&&this._handleTouchStartRotate(a)}_handleTouchMoveRotate(a){if(this._pointers.length==1)this._rotateEnd.set(a.pageX,a.pageY);else{const r=this._getSecondPointerPosition(a),c=.5*(a.pageX+r.x),f=.5*(a.pageY+r.y);this._rotateEnd.set(c,f)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const s=this.domElement;this._rotateLeft(At*this._rotateDelta.x/s.clientHeight),this._rotateUp(At*this._rotateDelta.y/s.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(a){if(this._pointers.length===1)this._panEnd.set(a.pageX,a.pageY);else{const s=this._getSecondPointerPosition(a),r=.5*(a.pageX+s.x),c=.5*(a.pageY+s.y);this._panEnd.set(r,c)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(a){const s=this._getSecondPointerPosition(a),r=a.pageX-s.x,c=a.pageY-s.y,f=Math.sqrt(r*r+c*c);this._dollyEnd.set(0,f),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const u=(a.pageX+s.x)*.5,m=(a.pageY+s.y)*.5;this._updateZoomParameters(u,m)}_handleTouchMoveDollyPan(a){this.enableZoom&&this._handleTouchMoveDolly(a),this.enablePan&&this._handleTouchMovePan(a)}_handleTouchMoveDollyRotate(a){this.enableZoom&&this._handleTouchMoveDolly(a),this.enableRotate&&this._handleTouchMoveRotate(a)}_addPointer(a){this._pointers.push(a.pointerId)}_removePointer(a){delete this._pointerPositions[a.pointerId];for(let s=0;s<this._pointers.length;s++)if(this._pointers[s]==a.pointerId){this._pointers.splice(s,1);return}}_isTrackingPointer(a){for(let s=0;s<this._pointers.length;s++)if(this._pointers[s]==a.pointerId)return!0;return!1}_trackPointer(a){let s=this._pointerPositions[a.pointerId];s===void 0&&(s=new Re,this._pointerPositions[a.pointerId]=s),s.set(a.pageX,a.pageY)}_getSecondPointerPosition(a){const s=a.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[s]}_customWheelEvent(a){const s=a.deltaMode,r={clientX:a.clientX,clientY:a.clientY,deltaY:a.deltaY};switch(s){case 1:r.deltaY*=16;break;case 2:r.deltaY*=100;break}return a.ctrlKey&&!this._controlActive&&(r.deltaY*=10),r}}function Cx(h){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(h.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(h)&&(this._addPointer(h),h.pointerType==="touch"?this._onTouchStart(h):this._onMouseDown(h)))}function Dx(h){this.enabled!==!1&&(h.pointerType==="touch"?this._onTouchMove(h):this._onMouseMove(h))}function Ox(h){switch(this._removePointer(h),this._pointers.length){case 0:this.domElement.releasePointerCapture(h.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Dv),this.state=Ce.NONE;break;case 1:const a=this._pointers[0],s=this._pointerPositions[a];this._onTouchStart({pointerId:a,pageX:s.x,pageY:s.y});break}}function zx(h){let a;switch(h.button){case 0:a=this.mouseButtons.LEFT;break;case 1:a=this.mouseButtons.MIDDLE;break;case 2:a=this.mouseButtons.RIGHT;break;default:a=-1}switch(a){case Ms.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(h),this.state=Ce.DOLLY;break;case Ms.ROTATE:if(h.ctrlKey||h.metaKey||h.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(h),this.state=Ce.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(h),this.state=Ce.ROTATE}break;case Ms.PAN:if(h.ctrlKey||h.metaKey||h.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(h),this.state=Ce.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(h),this.state=Ce.PAN}break;default:this.state=Ce.NONE}this.state!==Ce.NONE&&this.dispatchEvent(zh)}function Nx(h){switch(this.state){case Ce.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(h);break;case Ce.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(h);break;case Ce.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(h);break}}function Bx(h){this.enabled===!1||this.enableZoom===!1||this.state!==Ce.NONE||(h.preventDefault(),this.dispatchEvent(zh),this._handleMouseWheel(this._customWheelEvent(h)),this.dispatchEvent(Dv))}function Ux(h){this.enabled!==!1&&this._handleKeyDown(h)}function Lx(h){switch(this._trackPointer(h),this._pointers.length){case 1:switch(this.touches.ONE){case ws.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(h),this.state=Ce.TOUCH_ROTATE;break;case ws.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(h),this.state=Ce.TOUCH_PAN;break;default:this.state=Ce.NONE}break;case 2:switch(this.touches.TWO){case ws.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(h),this.state=Ce.TOUCH_DOLLY_PAN;break;case ws.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(h),this.state=Ce.TOUCH_DOLLY_ROTATE;break;default:this.state=Ce.NONE}break;default:this.state=Ce.NONE}this.state!==Ce.NONE&&this.dispatchEvent(zh)}function Hx(h){switch(this._trackPointer(h),this.state){case Ce.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(h),this.update();break;case Ce.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(h),this.update();break;case Ce.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(h),this.update();break;case Ce.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(h),this.update();break;default:this.state=Ce.NONE}}function Ix(h){this.enabled!==!1&&h.preventDefault()}function Fx(h){h.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Gx(h){h.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class Vx extends Dh{constructor(){super();const a=new TT;a.deleteAttribute("uv");const s=new Xo({side:Oh}),r=new Xo,c=new Mh(16777215,900,28,2);c.position.set(.418,16.199,.3),this.add(c);const f=new nn(a,s);f.position.set(-.757,13.219,.717),f.scale.set(31.713,28.305,28.591),this.add(f);const u=new bv(a,r,6),m=new Wo;m.position.set(-10.906,2.009,1.846),m.rotation.set(0,-.195,0),m.scale.set(2.328,7.905,4.651),m.updateMatrix(),u.setMatrixAt(0,m.matrix),m.position.set(-5.607,-.754,-.758),m.rotation.set(0,.994,0),m.scale.set(1.97,1.534,3.955),m.updateMatrix(),u.setMatrixAt(1,m.matrix),m.position.set(6.167,.857,7.803),m.rotation.set(0,.561,0),m.scale.set(3.927,6.285,3.687),m.updateMatrix(),u.setMatrixAt(2,m.matrix),m.position.set(-2.017,.018,6.124),m.rotation.set(0,.333,0),m.scale.set(2.002,4.566,2.064),m.updateMatrix(),u.setMatrixAt(3,m.matrix),m.position.set(2.291,-.756,-2.621),m.rotation.set(0,-.286,0),m.scale.set(1.546,1.552,1.496),m.updateMatrix(),u.setMatrixAt(4,m.matrix),m.position.set(-2.193,-.369,-5.547),m.rotation.set(0,.516,0),m.scale.set(3.875,3.487,2.986),m.updateMatrix(),u.setMatrixAt(5,m.matrix),this.add(u);const d=new nn(a,fs(50));d.position.set(-16.116,14.37,8.208),d.scale.set(.1,2.428,2.739),this.add(d);const g=new nn(a,fs(50));g.position.set(-16.109,18.021,-8.207),g.scale.set(.1,2.425,2.751),this.add(g);const b=new nn(a,fs(17));b.position.set(14.904,12.198,-1.832),b.scale.set(.15,4.265,6.331),this.add(b);const v=new nn(a,fs(43));v.position.set(-.462,8.89,14.52),v.scale.set(4.38,5.441,.088),this.add(v);const p=new nn(a,fs(20));p.position.set(3.235,11.486,-12.541),p.scale.set(2.5,2,.1),this.add(p);const x=new nn(a,fs(100));x.position.set(0,20,0),x.scale.set(1,.1,1),this.add(x)}dispose(){const a=new Set;this.traverse(s=>{s.isMesh&&(a.add(s.geometry),a.add(s.material))});for(const s of a)s.dispose()}}function fs(h){return new xT({color:0,emissive:16777215,emissiveIntensity:h})}const qx=/^(FLOOR_|CEILING_)|(?:FloorLight|MuseumTitle|English|Rigging|Title|Year|FrontText|CoffeeText)/i,Dg=h=>h.code&&h.code!=="Unidentified"?h.code:{w:"KeyW",a:"KeyA",s:"KeyS",d:"KeyD"}[h.key?.toLowerCase()]||h.key,Px=new Set(["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"]);function Og(h,a,s){let r=!1;for(let c=0,f=h.length-1;c<h.length;f=c++){const[u,m]=h[c],[d,g]=h[f];m>s!=g>s&&a<(d-u)*(s-m)/(g-m)+u&&(r=!r)}return r}class jx{constructor(a,s,r,c,f){this.camera=a,this.canvas=s,this.config=c,this.onState=f,this.keys=new Set,this.joystick={x:0,y:0},this.lookJoystick={x:0,y:0},this.floorY=c.floorY??0,this.eyeHeight=1.65,this.radius=.26,this.speed=jl.clamp(Number(c.walkSpeed)||1.7,1.6,1.8),this.colliders=[],this.furnitureVolumes=[],r.updateMatrixWorld(!0),r.traverse(u=>{if(!u.isMesh||qx.test(u.name))return;const m=new Rt().setFromObject(u);if(m.max.y<this.floorY+.18||m.min.y>this.floorY+1.9)return;const d=m.getSize(new Q);d.y<.4&&d.x>.55&&d.z>.55&&this.furnitureVolumes.push({bounds:m,object:u}),!(d.y<.08)&&(u.userData.walkBounds=m,this.colliders.push(u))}),this.ray=new ST,this.ray.near=0,this.ray.far=1,this.rayDir=new Q,this.rayOrigin=new Q,this.euler=new _T(0,0,0,"YXZ"),this.blockedSteps=0,this.onKeyDown=u=>{if(!this.active)return;const m=Dg(u);if(this.lastKey={key:u.key,code:u.code,resolved:m},m==="Escape"){this.disable();return}if(/^Digit[1-9]$/.test(m)){u.preventDefault(),this.onState({jumpRoom:Number(m.slice(-1))-1});return}Px.has(m)&&(u.preventDefault(),this.keys.add(m),u.repeat||this.update(1/60))},this.onKeyUp=u=>{this.keys.delete(Dg(u))},this.onBlur=()=>{this.keys.clear(),this.joystick={x:0,y:0},this.lookJoystick={x:0,y:0},this.lookPointer=null},this.onVisibility=()=>{document.hidden&&this.onBlur()},this.onMouse=u=>{this.active&&document.pointerLockElement===s&&this.look(u.movementX*.0022,u.movementY*.0022)},this.onLock=()=>{const u=document.pointerLockElement===s;this.onState({locked:u}),this.hadLock&&!u&&this.active&&this.disable(),this.hadLock=u},this.onPointerDown=u=>{!this.active||document.pointerLockElement===s||this.mobile&&u.clientX<s.getBoundingClientRect().left+s.clientWidth*.38||(this.lookPointer={id:u.pointerId,x:u.clientX,y:u.clientY},s.setPointerCapture(u.pointerId))},this.onPointerMove=u=>{!this.active||!this.lookPointer||u.pointerId!==this.lookPointer.id||(this.look((u.clientX-this.lookPointer.x)*.0045,(u.clientY-this.lookPointer.y)*.0045),this.lookPointer.x=u.clientX,this.lookPointer.y=u.clientY)},this.onPointerUp=u=>{this.lookPointer?.id===u.pointerId&&(this.lookPointer=null)},window.addEventListener("keydown",this.onKeyDown),window.addEventListener("keyup",this.onKeyUp),window.addEventListener("blur",this.onBlur),document.addEventListener("visibilitychange",this.onVisibility),document.addEventListener("mousemove",this.onMouse),document.addEventListener("pointerlockchange",this.onLock),s.addEventListener("pointerdown",this.onPointerDown),s.addEventListener("pointermove",this.onPointerMove),s.addEventListener("pointerup",this.onPointerUp),s.addEventListener("pointercancel",this.onPointerUp),s.addEventListener("lostpointercapture",this.onPointerUp)}enable(a){this.active=!0,this.mobile=window.matchMedia("(pointer: coarse)").matches||innerWidth<=700,this.setView(a),this.onState({firstPerson:!0,locked:!1})}requestLock(){try{this.canvas.requestPointerLock()?.catch?.(()=>this.onState({locked:!1}))}catch{this.onState({locked:!1})}}setView(a){if(!a?.position||!a?.target)return;this.camera.position.set(a.position[0],this.floorY+this.eyeHeight,a.position[2]);const s=new Q(...a.target).sub(this.camera.position).normalize();this.yaw=Math.atan2(-s.x,-s.z),this.pitch=Math.asin(s.y),this.camera.fov=a.fov||60,this.camera.updateProjectionMatrix(),this.look(0,0),this.onBlur()}look(a,s){this.yaw-=a,this.pitch=jl.clamp(this.pitch-s,-1.32,1.32),this.euler.set(this.pitch,this.yaw,0),this.camera.quaternion.setFromEuler(this.euler)}visible(a){let s=a,r=!1,c=!1;for(;s;)s.name.startsWith("WALL_")&&(c=!0),s.visible||(r=!0),s=s.parent;return!r||c}inside(a,s){const r=this.config.walkablePolygon;return(r?.length?Og(r,a,s):a>=this.config.defaultBounds.min[0]+this.radius&&a<=this.config.defaultBounds.max[0]-this.radius&&s>=this.config.defaultBounds.min[2]+this.radius&&s<=this.config.defaultBounds.max[2]-this.radius)&&!(this.config.walkableHoles||[]).some(f=>f?.length>=3&&Og(f,a,s))}canMove(a,s){for(let m=0;m<8;m++){const d=m*Math.PI/4;if(!this.inside(s.x+Math.cos(d)*this.radius,s.z+Math.sin(d)*this.radius))return!1}for(const m of this.furnitureVolumes){if(!this.visible(m.object))continue;const d=m.bounds;if(s.x>d.min.x-this.radius&&s.x<d.max.x+this.radius&&s.z>d.min.z-this.radius&&s.z<d.max.z+this.radius)return!1}const r=s.x-a.x,c=s.z-a.z,f=Math.hypot(r,c);if(f<1e-5)return!0;this.rayDir.set(r/f,0,c/f),this.ray.far=f+this.radius;const u=this.colliders.filter(m=>{if(!this.visible(m))return!1;const d=m.userData.walkBounds,g=this.radius+f+.05;return a.x>=d.min.x-g&&a.x<=d.max.x+g&&a.z>=d.min.z-g&&a.z<=d.max.z+g});for(const m of[.25,.85,1.5])for(const d of[-this.radius*.8,0,this.radius*.8])if(this.rayOrigin.set(a.x-this.rayDir.z*d,this.floorY+m,a.z+this.rayDir.x*d),this.ray.set(this.rayOrigin,this.rayDir),this.ray.intersectObjects(u,!1).length)return!1;return!0}update(a){if(!this.active)return;const s=Math.min(a,.04);(this.lookJoystick.x||this.lookJoystick.y)&&this.look(this.lookJoystick.x*s*1.35,this.lookJoystick.y*s*1.1);let r=Number(this.keys.has("KeyD")||this.keys.has("ArrowRight"))-Number(this.keys.has("KeyA")||this.keys.has("ArrowLeft"))+this.joystick.x,c=Number(this.keys.has("KeyW")||this.keys.has("ArrowUp"))-Number(this.keys.has("KeyS")||this.keys.has("ArrowDown"))-this.joystick.y;const f=Math.hypot(r,c);f>1&&(r/=f,c/=f);const u=s*this.speed,m=(Math.cos(this.yaw)*r-Math.sin(this.yaw)*c)*u,d=(-Math.sin(this.yaw)*r-Math.cos(this.yaw)*c)*u,g=this.camera.position,b=g.clone().add(new Q(m,0,d));if(this.canMove(g,b))g.copy(b);else{this.blockedSteps+=1;const v=g.clone().add(new Q(m,0,0));Math.abs(m)>1e-5&&this.canMove(g,v)&&g.copy(v);const p=g.clone().add(new Q(0,0,d));Math.abs(d)>1e-5&&this.canMove(g,p)&&g.copy(p)}this.camera.position.y=this.floorY+this.eyeHeight}disable(){this.active&&(this.active=!1,this.onBlur(),this.onState({firstPerson:!1,locked:!1}),document.pointerLockElement===this.canvas&&document.exitPointerLock())}dispose(){this.disable(),window.removeEventListener("keydown",this.onKeyDown),window.removeEventListener("keyup",this.onKeyUp),window.removeEventListener("blur",this.onBlur),document.removeEventListener("visibilitychange",this.onVisibility),document.removeEventListener("mousemove",this.onMouse),document.removeEventListener("pointerlockchange",this.onLock),this.canvas.removeEventListener("pointerdown",this.onPointerDown),this.canvas.removeEventListener("pointermove",this.onPointerMove),this.canvas.removeEventListener("pointerup",this.onPointerUp),this.canvas.removeEventListener("pointercancel",this.onPointerUp),this.canvas.removeEventListener("lostpointercapture",this.onPointerUp)}}const Ov=0,Yx=1,zv=2,zg=2,Kf=1.25,Ng=1,Li=32,ec=65535,kx=Math.pow(2,-24),Zf=Symbol("SKIP_GENERATION");function Nv(h){return h.index?h.index.count:h.attributes.position.count}function Ii(h){return Nv(h)/3}function Bv(h,a=ArrayBuffer){return h>65535?new Uint32Array(new a(4*h)):new Uint16Array(new a(2*h))}function Xx(h,a){if(!h.index){const s=h.attributes.position.count,r=a.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,c=Bv(s,r);h.setIndex(new ct(c,1));for(let f=0;f<s;f++)c[f]=f}}function Uv(h,a){const s=Ii(h),r=a||h.drawRange,c=r.start/3,f=(r.start+r.count)/3,u=Math.max(0,c),m=Math.min(s,f)-u;return[{offset:Math.floor(u),count:Math.floor(m)}]}function Lv(h,a){if(!h.groups||!h.groups.length)return Uv(h,a);const s=[],r=new Set,c=a||h.drawRange,f=c.start/3,u=(c.start+c.count)/3;for(const d of h.groups){const g=d.start/3,b=(d.start+d.count)/3;r.add(Math.max(f,g)),r.add(Math.min(u,b))}const m=Array.from(r.values()).sort((d,g)=>d-g);for(let d=0;d<m.length-1;d++){const g=m[d],b=m[d+1];s.push({offset:Math.floor(g),count:Math.floor(b-g)})}return s}function Kx(h,a){const s=Ii(h),r=Lv(h,a).sort((u,m)=>u.offset-m.offset),c=r[r.length-1];c.count=Math.min(s-c.offset,c.count);let f=0;return r.forEach(({count:u})=>f+=u),s!==f}function Qf(h,a,s,r,c){let f=1/0,u=1/0,m=1/0,d=-1/0,g=-1/0,b=-1/0,v=1/0,p=1/0,x=1/0,_=-1/0,w=-1/0,T=-1/0;for(let M=a*6,R=(a+s)*6;M<R;M+=6){const A=h[M+0],C=h[M+1],D=A-C,H=A+C;D<f&&(f=D),H>d&&(d=H),A<v&&(v=A),A>_&&(_=A);const z=h[M+2],j=h[M+3],V=z-j,Y=z+j;V<u&&(u=V),Y>g&&(g=Y),z<p&&(p=z),z>w&&(w=z);const K=h[M+4],G=h[M+5],Z=K-G,W=K+G;Z<m&&(m=Z),W>b&&(b=W),K<x&&(x=K),K>T&&(T=K)}r[0]=f,r[1]=u,r[2]=m,r[3]=d,r[4]=g,r[5]=b,c[0]=v,c[1]=p,c[2]=x,c[3]=_,c[4]=w,c[5]=T}function Zx(h,a=null,s=null,r=null){const c=h.attributes.position,f=h.index?h.index.array:null,u=Ii(h),m=c.normalized;let d;a===null?d=new Float32Array(u*6):d=a,s=s||0,r=r||u;const g=c.array,b=c.offset||0;let v=3;c.isInterleavedBufferAttribute&&(v=c.data.stride);const p=["getX","getY","getZ"];for(let x=s;x<s+r;x++){const _=x*3,w=x*6;let T=_+0,M=_+1,R=_+2;f&&(T=f[T],M=f[M],R=f[R]),m||(T=T*v+b,M=M*v+b,R=R*v+b);for(let A=0;A<3;A++){let C,D,H;m?(C=c[p[A]](T),D=c[p[A]](M),H=c[p[A]](R)):(C=g[T+A],D=g[M+A],H=g[R+A]);let z=C;D<z&&(z=D),H<z&&(z=H);let j=C;D>j&&(j=D),H>j&&(j=H);const V=(j-z)/2,Y=A*2;d[w+Y+0]=z+V,d[w+Y+1]=V+(Math.abs(z)+V)*kx}}return d}function Ve(h,a,s){return s.min.x=a[h],s.min.y=a[h+1],s.min.z=a[h+2],s.max.x=a[h+3],s.max.y=a[h+4],s.max.z=a[h+5],s}function Bg(h){let a=-1,s=-1/0;for(let r=0;r<3;r++){const c=h[r+3]-h[r];c>s&&(s=c,a=r)}return a}function Ug(h,a){a.set(h)}function Lg(h,a,s){let r,c;for(let f=0;f<3;f++){const u=f+3;r=h[f],c=a[f],s[f]=r<c?r:c,r=h[u],c=a[u],s[u]=r>c?r:c}}function wo(h,a,s){for(let r=0;r<3;r++){const c=a[h+2*r],f=a[h+2*r+1],u=c-f,m=c+f;u<s[r]&&(s[r]=u),m>s[r+3]&&(s[r+3]=m)}}function Cl(h){const a=h[3]-h[0],s=h[4]-h[1],r=h[5]-h[2];return 2*(a*s+s*r+r*a)}const Zn=32,Qx=(h,a)=>h.candidate-a.candidate,Ni=new Array(Zn).fill().map(()=>({count:0,bounds:new Float32Array(6),rightCacheBounds:new Float32Array(6),leftCacheBounds:new Float32Array(6),candidate:0})),Eo=new Float32Array(6);function Wx(h,a,s,r,c,f){let u=-1,m=0;if(f===Ov)u=Bg(a),u!==-1&&(m=(a[u]+a[u+3])/2);else if(f===Yx)u=Bg(h),u!==-1&&(m=Jx(s,r,c,u));else if(f===zv){const d=Cl(h);let g=Kf*c;const b=r*6,v=(r+c)*6;for(let p=0;p<3;p++){const x=a[p],T=(a[p+3]-x)/Zn;if(c<Zn/4){const M=[...Ni];M.length=c;let R=0;for(let C=b;C<v;C+=6,R++){const D=M[R];D.candidate=s[C+2*p],D.count=0;const{bounds:H,leftCacheBounds:z,rightCacheBounds:j}=D;for(let V=0;V<3;V++)j[V]=1/0,j[V+3]=-1/0,z[V]=1/0,z[V+3]=-1/0,H[V]=1/0,H[V+3]=-1/0;wo(C,s,H)}M.sort(Qx);let A=c;for(let C=0;C<A;C++){const D=M[C];for(;C+1<A&&M[C+1].candidate===D.candidate;)M.splice(C+1,1),A--}for(let C=b;C<v;C+=6){const D=s[C+2*p];for(let H=0;H<A;H++){const z=M[H];D>=z.candidate?wo(C,s,z.rightCacheBounds):(wo(C,s,z.leftCacheBounds),z.count++)}}for(let C=0;C<A;C++){const D=M[C],H=D.count,z=c-D.count,j=D.leftCacheBounds,V=D.rightCacheBounds;let Y=0;H!==0&&(Y=Cl(j)/d);let K=0;z!==0&&(K=Cl(V)/d);const G=Ng+Kf*(Y*H+K*z);G<g&&(u=p,g=G,m=D.candidate)}}else{for(let A=0;A<Zn;A++){const C=Ni[A];C.count=0,C.candidate=x+T+A*T;const D=C.bounds;for(let H=0;H<3;H++)D[H]=1/0,D[H+3]=-1/0}for(let A=b;A<v;A+=6){let H=~~((s[A+2*p]-x)/T);H>=Zn&&(H=Zn-1);const z=Ni[H];z.count++,wo(A,s,z.bounds)}const M=Ni[Zn-1];Ug(M.bounds,M.rightCacheBounds);for(let A=Zn-2;A>=0;A--){const C=Ni[A],D=Ni[A+1];Lg(C.bounds,D.rightCacheBounds,C.rightCacheBounds)}let R=0;for(let A=0;A<Zn-1;A++){const C=Ni[A],D=C.count,H=C.bounds,j=Ni[A+1].rightCacheBounds;D!==0&&(R===0?Ug(H,Eo):Lg(H,Eo,Eo)),R+=D;let V=0,Y=0;R!==0&&(V=Cl(Eo)/d);const K=c-R;K!==0&&(Y=Cl(j)/d);const G=Ng+Kf*(V*R+Y*K);G<g&&(u=p,g=G,m=C.candidate)}}}}else console.warn(`MeshBVH: Invalid build strategy value ${f} used.`);return{axis:u,pos:m}}function Jx(h,a,s,r){let c=0;for(let f=a,u=a+s;f<u;f++)c+=h[f*6+r*2];return c/s}class Wf{constructor(){this.boundingData=new Float32Array(6)}}function $x(h,a,s,r,c,f){let u=r,m=r+c-1;const d=f.pos,g=f.axis*2;for(;;){for(;u<=m&&s[u*6+g]<d;)u++;for(;u<=m&&s[m*6+g]>=d;)m--;if(u<m){for(let b=0;b<3;b++){let v=a[u*3+b];a[u*3+b]=a[m*3+b],a[m*3+b]=v}for(let b=0;b<6;b++){let v=s[u*6+b];s[u*6+b]=s[m*6+b],s[m*6+b]=v}u++,m--}else return u}}function eS(h,a,s,r,c,f){let u=r,m=r+c-1;const d=f.pos,g=f.axis*2;for(;;){for(;u<=m&&s[u*6+g]<d;)u++;for(;u<=m&&s[m*6+g]>=d;)m--;if(u<m){let b=h[u];h[u]=h[m],h[m]=b;for(let v=0;v<6;v++){let p=s[u*6+v];s[u*6+v]=s[m*6+v],s[m*6+v]=p}u++,m--}else return u}}function gt(h,a){return a[h+15]===65535}function Mt(h,a){return a[h+6]}function Vt(h,a){return a[h+14]}function an(h){return h+8}function qt(h,a){return a[h+6]}function Nh(h,a){return a[h+7]}let Hv,Ll,ko,Iv;const tS=Math.pow(2,32);function gh(h){return"count"in h?1:1+gh(h.left)+gh(h.right)}function nS(h,a,s){return Hv=new Float32Array(s),Ll=new Uint32Array(s),ko=new Uint16Array(s),Iv=new Uint8Array(s),vh(h,a)}function vh(h,a){const s=h/4,r=h/2,c="count"in a,f=a.boundingData;for(let u=0;u<6;u++)Hv[s+u]=f[u];if(c)if(a.buffer){const u=a.buffer;Iv.set(new Uint8Array(u),h);for(let m=h,d=h+u.byteLength;m<d;m+=Li){const g=m/2;gt(g,ko)||(Ll[m/4+6]+=s)}return h+u.byteLength}else{const u=a.offset,m=a.count;return Ll[s+6]=u,ko[r+14]=m,ko[r+15]=ec,h+Li}else{const u=a.left,m=a.right,d=a.splitAxis;let g;if(g=vh(h+Li,u),g/4>tS)throw new Error("MeshBVH: Cannot store child pointer greater than 32 bits.");return Ll[s+6]=g/4,g=vh(g,m),Ll[s+7]=d,g}}function iS(h,a){const s=(h.index?h.index.count:h.attributes.position.count)/3,r=s>2**16,c=r?4:2,f=a?new SharedArrayBuffer(s*c):new ArrayBuffer(s*c),u=r?new Uint32Array(f):new Uint16Array(f);for(let m=0,d=u.length;m<d;m++)u[m]=m;return u}function aS(h,a,s,r,c){const{maxDepth:f,verbose:u,maxLeafTris:m,strategy:d,onProgress:g,indirect:b}=c,v=h._indirectBuffer,p=h.geometry,x=p.index?p.index.array:null,_=b?eS:$x,w=Ii(p),T=new Float32Array(6);let M=!1;const R=new Wf;return Qf(a,s,r,R.boundingData,T),C(R,s,r,T),R;function A(D){g&&g(D/w)}function C(D,H,z,j=null,V=0){if(!M&&V>=f&&(M=!0,u&&(console.warn(`MeshBVH: Max depth of ${f} reached when generating BVH. Consider increasing maxDepth.`),console.warn(p))),z<=m||V>=f)return A(H+z),D.offset=H,D.count=z,D;const Y=Wx(D.boundingData,j,a,H,z,d);if(Y.axis===-1)return A(H+z),D.offset=H,D.count=z,D;const K=_(v,x,a,H,z,Y);if(K===H||K===H+z)A(H+z),D.offset=H,D.count=z;else{D.splitAxis=Y.axis;const G=new Wf,Z=H,W=K-H;D.left=G,Qf(a,Z,W,G.boundingData,T),C(G,Z,W,T,V+1);const te=new Wf,X=K,ne=z-W;D.right=te,Qf(a,X,ne,te.boundingData,T),C(te,X,ne,T,V+1)}return D}}function sS(h,a){const s=h.geometry;a.indirect&&(h._indirectBuffer=iS(s,a.useSharedArrayBuffer),Kx(s,a.range)&&!a.verbose&&console.warn('MeshBVH: Provided geometry contains groups or a range that do not fully span the vertex contents while using the "indirect" option. BVH may incorrectly report intersections on unrendered portions of the geometry.')),h._indirectBuffer||Xx(s,a);const r=a.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,c=Uv(s,a.range),f=Zx(s,null,c[0].offset,c[0].count),u=a.indirect?c:Lv(s,a.range);h._roots=u.map(m=>{const d=aS(h,f,m.offset,m.count,a),g=gh(d),b=new r(Li*g);return nS(0,d,b),b})}class ti{constructor(){this.min=1/0,this.max=-1/0}setFromPointsField(a,s){let r=1/0,c=-1/0;for(let f=0,u=a.length;f<u;f++){const d=a[f][s];r=d<r?d:r,c=d>c?d:c}this.min=r,this.max=c}setFromPoints(a,s){let r=1/0,c=-1/0;for(let f=0,u=s.length;f<u;f++){const m=s[f],d=a.dot(m);r=d<r?d:r,c=d>c?d:c}this.min=r,this.max=c}isSeparated(a){return this.min>a.max||a.min>this.max}}ti.prototype.setFromBox=(function(){const h=new Q;return function(s,r){const c=r.min,f=r.max;let u=1/0,m=-1/0;for(let d=0;d<=1;d++)for(let g=0;g<=1;g++)for(let b=0;b<=1;b++){h.x=c.x*d+f.x*(1-d),h.y=c.y*g+f.y*(1-g),h.z=c.z*b+f.z*(1-b);const v=s.dot(h);u=Math.min(v,u),m=Math.max(v,m)}this.min=u,this.max=m}})();const lS=(function(){const h=new Q,a=new Q,s=new Q;return function(c,f,u){const m=c.start,d=h,g=f.start,b=a;s.subVectors(m,g),h.subVectors(c.end,c.start),a.subVectors(f.end,f.start);const v=s.dot(b),p=b.dot(d),x=b.dot(b),_=s.dot(d),T=d.dot(d)*x-p*p;let M,R;T!==0?M=(v*p-_*x)/T:M=0,R=(v+M*p)/x,u.x=M,u.y=R}})(),Bh=(function(){const h=new Re,a=new Q,s=new Q;return function(c,f,u,m){lS(c,f,h);let d=h.x,g=h.y;if(d>=0&&d<=1&&g>=0&&g<=1){c.at(d,u),f.at(g,m);return}else if(d>=0&&d<=1){g<0?f.at(0,m):f.at(1,m),c.closestPointToPoint(m,!0,u);return}else if(g>=0&&g<=1){d<0?c.at(0,u):c.at(1,u),f.closestPointToPoint(u,!0,m);return}else{let b;d<0?b=c.start:b=c.end;let v;g<0?v=f.start:v=f.end;const p=a,x=s;if(c.closestPointToPoint(v,!0,a),f.closestPointToPoint(b,!0,s),p.distanceToSquared(v)<=x.distanceToSquared(b)){u.copy(p),m.copy(v);return}else{u.copy(b),m.copy(x);return}}}})(),rS=(function(){const h=new Q,a=new Q,s=new Ch,r=new ei;return function(f,u){const{radius:m,center:d}=f,{a:g,b,c:v}=u;if(r.start=g,r.end=b,r.closestPointToPoint(d,!0,h).distanceTo(d)<=m||(r.start=g,r.end=v,r.closestPointToPoint(d,!0,h).distanceTo(d)<=m)||(r.start=b,r.end=v,r.closestPointToPoint(d,!0,h).distanceTo(d)<=m))return!0;const w=u.getPlane(s);if(Math.abs(w.distanceToPoint(d))<=m){const M=w.projectPoint(d,a);if(u.containsPoint(M))return!0}return!1}})(),oS=["x","y","z"],Qn=1e-15,Hg=Qn*Qn;function en(h){return Math.abs(h)<Qn}class gn extends Ss{constructor(...a){super(...a),this.isExtendedTriangle=!0,this.satAxes=new Array(4).fill().map(()=>new Q),this.satBounds=new Array(4).fill().map(()=>new ti),this.points=[this.a,this.b,this.c],this.plane=new Ch,this.isDegenerateIntoSegment=!1,this.isDegenerateIntoPoint=!1,this.degenerateSegment=new ei,this.needsUpdate=!0}intersectsSphere(a){return rS(a,this)}update(){const a=this.a,s=this.b,r=this.c,c=this.points,f=this.satAxes,u=this.satBounds,m=f[0],d=u[0];this.getNormal(m),d.setFromPoints(m,c);const g=f[1],b=u[1];g.subVectors(a,s),b.setFromPoints(g,c);const v=f[2],p=u[2];v.subVectors(s,r),p.setFromPoints(v,c);const x=f[3],_=u[3];x.subVectors(r,a),_.setFromPoints(x,c);const w=g.length(),T=v.length(),M=x.length();this.isDegenerateIntoPoint=!1,this.isDegenerateIntoSegment=!1,w<Qn?T<Qn||M<Qn?this.isDegenerateIntoPoint=!0:(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(a),this.degenerateSegment.end.copy(r)):T<Qn?M<Qn?this.isDegenerateIntoPoint=!0:(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(s),this.degenerateSegment.end.copy(a)):M<Qn&&(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(r),this.degenerateSegment.end.copy(s)),this.plane.setFromNormalAndCoplanarPoint(m,a),this.needsUpdate=!1}}gn.prototype.closestPointToSegment=(function(){const h=new Q,a=new Q,s=new ei;return function(c,f=null,u=null){const{start:m,end:d}=c,g=this.points;let b,v=1/0;for(let p=0;p<3;p++){const x=(p+1)%3;s.start.copy(g[p]),s.end.copy(g[x]),Bh(s,c,h,a),b=h.distanceToSquared(a),b<v&&(v=b,f&&f.copy(h),u&&u.copy(a))}return this.closestPointToPoint(m,h),b=m.distanceToSquared(h),b<v&&(v=b,f&&f.copy(h),u&&u.copy(m)),this.closestPointToPoint(d,h),b=d.distanceToSquared(h),b<v&&(v=b,f&&f.copy(h),u&&u.copy(d)),Math.sqrt(v)}})();gn.prototype.intersectsTriangle=(function(){const h=new gn,a=new ti,s=new ti,r=new Q,c=new Q,f=new Q,u=new Q,m=new ei,d=new ei,g=new Q,b=new Re,v=new Re;function p(A,C,D,H){const z=r;!A.isDegenerateIntoPoint&&!A.isDegenerateIntoSegment?z.copy(A.plane.normal):z.copy(C.plane.normal);const j=A.satBounds,V=A.satAxes;for(let G=1;G<4;G++){const Z=j[G],W=V[G];if(a.setFromPoints(W,C.points),Z.isSeparated(a)||(u.copy(z).cross(W),a.setFromPoints(u,A.points),s.setFromPoints(u,C.points),a.isSeparated(s)))return!1}const Y=C.satBounds,K=C.satAxes;for(let G=1;G<4;G++){const Z=Y[G],W=K[G];if(a.setFromPoints(W,A.points),Z.isSeparated(a)||(u.crossVectors(z,W),a.setFromPoints(u,A.points),s.setFromPoints(u,C.points),a.isSeparated(s)))return!1}return D&&(H||console.warn("ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0."),D.start.set(0,0,0),D.end.set(0,0,0)),!0}function x(A,C,D,H,z,j,V,Y,K,G,Z){let W=V/(V-Y);G.x=H+(z-H)*W,Z.start.subVectors(C,A).multiplyScalar(W).add(A),W=V/(V-K),G.y=H+(j-H)*W,Z.end.subVectors(D,A).multiplyScalar(W).add(A)}function _(A,C,D,H,z,j,V,Y,K,G,Z){if(z>0)x(A.c,A.a,A.b,H,C,D,K,V,Y,G,Z);else if(j>0)x(A.b,A.a,A.c,D,C,H,Y,V,K,G,Z);else if(Y*K>0||V!=0)x(A.a,A.b,A.c,C,D,H,V,Y,K,G,Z);else if(Y!=0)x(A.b,A.a,A.c,D,C,H,Y,V,K,G,Z);else if(K!=0)x(A.c,A.a,A.b,H,C,D,K,V,Y,G,Z);else return!0;return!1}function w(A,C,D,H){const z=C.degenerateSegment,j=A.plane.distanceToPoint(z.start),V=A.plane.distanceToPoint(z.end);return en(j)?en(V)?p(A,C,D,H):(D&&(D.start.copy(z.start),D.end.copy(z.start)),A.containsPoint(z.start)):en(V)?(D&&(D.start.copy(z.end),D.end.copy(z.end)),A.containsPoint(z.end)):A.plane.intersectLine(z,r)!=null?(D&&(D.start.copy(r),D.end.copy(r)),A.containsPoint(r)):!1}function T(A,C,D){const H=C.a;return en(A.plane.distanceToPoint(H))&&A.containsPoint(H)?(D&&(D.start.copy(H),D.end.copy(H)),!0):!1}function M(A,C,D){const H=A.degenerateSegment,z=C.a;return H.closestPointToPoint(z,!0,r),z.distanceToSquared(r)<Hg?(D&&(D.start.copy(z),D.end.copy(z)),!0):!1}function R(A,C,D,H){if(A.isDegenerateIntoSegment)if(C.isDegenerateIntoSegment){const z=A.degenerateSegment,j=C.degenerateSegment,V=c,Y=f;z.delta(V),j.delta(Y);const K=r.subVectors(j.start,z.start),G=V.x*Y.y-V.y*Y.x;if(en(G))return!1;const Z=(K.x*Y.y-K.y*Y.x)/G,W=-(V.x*K.y-V.y*K.x)/G;if(Z<0||Z>1||W<0||W>1)return!1;const te=z.start.z+V.z*Z,X=j.start.z+Y.z*W;return en(te-X)?(D&&(D.start.copy(z.start).addScaledVector(V,Z),D.end.copy(z.start).addScaledVector(V,Z)),!0):!1}else return C.isDegenerateIntoPoint?M(A,C,D):w(C,A,D,H);else{if(A.isDegenerateIntoPoint)return C.isDegenerateIntoPoint?C.a.distanceToSquared(A.a)<Hg?(D&&(D.start.copy(A.a),D.end.copy(A.a)),!0):!1:C.isDegenerateIntoSegment?M(C,A,D):T(C,A,D);if(C.isDegenerateIntoPoint)return T(A,C,D);if(C.isDegenerateIntoSegment)return w(A,C,D,H)}}return function(C,D=null,H=!1){this.needsUpdate&&this.update(),C.isExtendedTriangle?C.needsUpdate&&C.update():(h.copy(C),h.update(),C=h);const z=R(this,C,D,H);if(z!==void 0)return z;const j=this.plane,V=C.plane;let Y=V.distanceToPoint(this.a),K=V.distanceToPoint(this.b),G=V.distanceToPoint(this.c);en(Y)&&(Y=0),en(K)&&(K=0),en(G)&&(G=0);const Z=Y*K,W=Y*G;if(Z>0&&W>0)return!1;let te=j.distanceToPoint(C.a),X=j.distanceToPoint(C.b),ne=j.distanceToPoint(C.c);en(te)&&(te=0),en(X)&&(X=0),en(ne)&&(ne=0);const ie=te*X,ue=te*ne;if(ie>0&&ue>0)return!1;c.copy(j.normal),f.copy(V.normal);const pe=c.cross(f);let se=0,ye=Math.abs(pe.x);const ni=Math.abs(pe.y);ni>ye&&(ye=ni,se=1),Math.abs(pe.z)>ye&&(se=2);const Ct=oS[se],kl=this.a[Ct],Fi=this.b[Ct],nc=this.c[Ct],zs=C.a[Ct],Gi=C.b[Ct],le=C.c[Ct];if(_(this,kl,Fi,nc,Z,W,Y,K,G,b,m))return p(this,C,D,H);if(_(C,zs,Gi,le,ie,ue,te,X,ne,v,d))return p(this,C,D,H);if(b.y<b.x){const be=b.y;b.y=b.x,b.x=be,g.copy(m.start),m.start.copy(m.end),m.end.copy(g)}if(v.y<v.x){const be=v.y;v.y=v.x,v.x=be,g.copy(d.start),d.start.copy(d.end),d.end.copy(g)}return b.y<v.x||v.y<b.x?!1:(D&&(v.x>b.x?D.start.copy(d.start):D.start.copy(m.start),v.y<b.y?D.end.copy(d.end):D.end.copy(m.end)),!0)}})();gn.prototype.distanceToPoint=(function(){const h=new Q;return function(s){return this.closestPointToPoint(s,h),s.distanceTo(h)}})();gn.prototype.distanceToTriangle=(function(){const h=new Q,a=new Q,s=["a","b","c"],r=new ei,c=new ei;return function(u,m=null,d=null){const g=m||d?r:null;if(this.intersectsTriangle(u,g))return(m||d)&&(m&&g.getCenter(m),d&&g.getCenter(d)),0;let b=1/0;for(let v=0;v<3;v++){let p;const x=s[v],_=u[x];this.closestPointToPoint(_,h),p=_.distanceToSquared(h),p<b&&(b=p,m&&m.copy(h),d&&d.copy(_));const w=this[x];u.closestPointToPoint(w,h),p=w.distanceToSquared(h),p<b&&(b=p,m&&m.copy(w),d&&d.copy(h))}for(let v=0;v<3;v++){const p=s[v],x=s[(v+1)%3];r.set(this[p],this[x]);for(let _=0;_<3;_++){const w=s[_],T=s[(_+1)%3];c.set(u[w],u[T]),Bh(r,c,h,a);const M=h.distanceToSquared(a);M<b&&(b=M,m&&m.copy(h),d&&d.copy(a))}}return Math.sqrt(b)}})();class vt{constructor(a,s,r){this.isOrientedBox=!0,this.min=new Q,this.max=new Q,this.matrix=new Pe,this.invMatrix=new Pe,this.points=new Array(8).fill().map(()=>new Q),this.satAxes=new Array(3).fill().map(()=>new Q),this.satBounds=new Array(3).fill().map(()=>new ti),this.alignedSatBounds=new Array(3).fill().map(()=>new ti),this.needsUpdate=!1,a&&this.min.copy(a),s&&this.max.copy(s),r&&this.matrix.copy(r)}set(a,s,r){this.min.copy(a),this.max.copy(s),this.matrix.copy(r),this.needsUpdate=!0}copy(a){this.min.copy(a.min),this.max.copy(a.max),this.matrix.copy(a.matrix),this.needsUpdate=!0}}vt.prototype.update=(function(){return function(){const a=this.matrix,s=this.min,r=this.max,c=this.points;for(let g=0;g<=1;g++)for(let b=0;b<=1;b++)for(let v=0;v<=1;v++){const p=1*g|2*b|4*v,x=c[p];x.x=g?r.x:s.x,x.y=b?r.y:s.y,x.z=v?r.z:s.z,x.applyMatrix4(a)}const f=this.satBounds,u=this.satAxes,m=c[0];for(let g=0;g<3;g++){const b=u[g],v=f[g],p=1<<g,x=c[p];b.subVectors(m,x),v.setFromPoints(b,c)}const d=this.alignedSatBounds;d[0].setFromPointsField(c,"x"),d[1].setFromPointsField(c,"y"),d[2].setFromPointsField(c,"z"),this.invMatrix.copy(this.matrix).invert(),this.needsUpdate=!1}})();vt.prototype.intersectsBox=(function(){const h=new ti;return function(s){this.needsUpdate&&this.update();const r=s.min,c=s.max,f=this.satBounds,u=this.satAxes,m=this.alignedSatBounds;if(h.min=r.x,h.max=c.x,m[0].isSeparated(h)||(h.min=r.y,h.max=c.y,m[1].isSeparated(h))||(h.min=r.z,h.max=c.z,m[2].isSeparated(h)))return!1;for(let d=0;d<3;d++){const g=u[d],b=f[d];if(h.setFromBox(g,s),b.isSeparated(h))return!1}return!0}})();vt.prototype.intersectsTriangle=(function(){const h=new gn,a=new Array(3),s=new ti,r=new ti,c=new Q;return function(u){this.needsUpdate&&this.update(),u.isExtendedTriangle?u.needsUpdate&&u.update():(h.copy(u),h.update(),u=h);const m=this.satBounds,d=this.satAxes;a[0]=u.a,a[1]=u.b,a[2]=u.c;for(let p=0;p<3;p++){const x=m[p],_=d[p];if(s.setFromPoints(_,a),x.isSeparated(s))return!1}const g=u.satBounds,b=u.satAxes,v=this.points;for(let p=0;p<3;p++){const x=g[p],_=b[p];if(s.setFromPoints(_,v),x.isSeparated(s))return!1}for(let p=0;p<3;p++){const x=d[p];for(let _=0;_<4;_++){const w=b[_];if(c.crossVectors(x,w),s.setFromPoints(c,a),r.setFromPoints(c,v),s.isSeparated(r))return!1}}return!0}})();vt.prototype.closestPointToPoint=(function(){return function(a,s){return this.needsUpdate&&this.update(),s.copy(a).applyMatrix4(this.invMatrix).clamp(this.min,this.max).applyMatrix4(this.matrix),s}})();vt.prototype.distanceToPoint=(function(){const h=new Q;return function(s){return this.closestPointToPoint(s,h),s.distanceTo(h)}})();vt.prototype.distanceToBox=(function(){const h=["x","y","z"],a=new Array(12).fill().map(()=>new ei),s=new Array(12).fill().map(()=>new ei),r=new Q,c=new Q;return function(u,m=0,d=null,g=null){if(this.needsUpdate&&this.update(),this.intersectsBox(u))return(d||g)&&(u.getCenter(c),this.closestPointToPoint(c,r),u.closestPointToPoint(r,c),d&&d.copy(r),g&&g.copy(c)),0;const b=m*m,v=u.min,p=u.max,x=this.points;let _=1/0;for(let T=0;T<8;T++){const M=x[T];c.copy(M).clamp(v,p);const R=M.distanceToSquared(c);if(R<_&&(_=R,d&&d.copy(M),g&&g.copy(c),R<b))return Math.sqrt(R)}let w=0;for(let T=0;T<3;T++)for(let M=0;M<=1;M++)for(let R=0;R<=1;R++){const A=(T+1)%3,C=(T+2)%3,D=M<<A|R<<C,H=1<<T|M<<A|R<<C,z=x[D],j=x[H];a[w].set(z,j);const Y=h[T],K=h[A],G=h[C],Z=s[w],W=Z.start,te=Z.end;W[Y]=v[Y],W[K]=M?v[K]:p[K],W[G]=R?v[G]:p[K],te[Y]=p[Y],te[K]=M?v[K]:p[K],te[G]=R?v[G]:p[K],w++}for(let T=0;T<=1;T++)for(let M=0;M<=1;M++)for(let R=0;R<=1;R++){c.x=T?p.x:v.x,c.y=M?p.y:v.y,c.z=R?p.z:v.z,this.closestPointToPoint(c,r);const A=c.distanceToSquared(r);if(A<_&&(_=A,d&&d.copy(r),g&&g.copy(c),A<b))return Math.sqrt(A)}for(let T=0;T<12;T++){const M=a[T];for(let R=0;R<12;R++){const A=s[R];Bh(M,A,r,c);const C=r.distanceToSquared(c);if(C<_&&(_=C,d&&d.copy(r),g&&g.copy(c),C<b))return Math.sqrt(C)}}return Math.sqrt(_)}})();class Uh{constructor(a){this._getNewPrimitive=a,this._primitives=[]}getPrimitive(){const a=this._primitives;return a.length===0?this._getNewPrimitive():a.pop()}releasePrimitive(a){this._primitives.push(a)}}class cS extends Uh{constructor(){super(()=>new gn)}}const sn=new cS;class uS{constructor(){this.float32Array=null,this.uint16Array=null,this.uint32Array=null;const a=[];let s=null;this.setBuffer=r=>{s&&a.push(s),s=r,this.float32Array=new Float32Array(r),this.uint16Array=new Uint16Array(r),this.uint32Array=new Uint32Array(r)},this.clearBuffer=()=>{s=null,this.float32Array=null,this.uint16Array=null,this.uint32Array=null,a.length!==0&&this.setBuffer(a.pop())}}}const Be=new uS;let Ui,Es;const hs=[],Mo=new Uh(()=>new Rt);function fS(h,a,s,r,c,f){Ui=Mo.getPrimitive(),Es=Mo.getPrimitive(),hs.push(Ui,Es),Be.setBuffer(h._roots[a]);const u=yh(0,h.geometry,s,r,c,f);Be.clearBuffer(),Mo.releasePrimitive(Ui),Mo.releasePrimitive(Es),hs.pop(),hs.pop();const m=hs.length;return m>0&&(Es=hs[m-1],Ui=hs[m-2]),u}function yh(h,a,s,r,c=null,f=0,u=0){const{float32Array:m,uint16Array:d,uint32Array:g}=Be;let b=h*2;if(gt(b,d)){const p=Mt(h,g),x=Vt(b,d);return Ve(h,m,Ui),r(p,x,!1,u,f+h,Ui)}else{let Y=function(G){const{uint16Array:Z,uint32Array:W}=Be;let te=G*2;for(;!gt(te,Z);)G=an(G),te=G*2;return Mt(G,W)},K=function(G){const{uint16Array:Z,uint32Array:W}=Be;let te=G*2;for(;!gt(te,Z);)G=qt(G,W),te=G*2;return Mt(G,W)+Vt(te,Z)};const p=an(h),x=qt(h,g);let _=p,w=x,T,M,R,A;if(c&&(R=Ui,A=Es,Ve(_,m,R),Ve(w,m,A),T=c(R),M=c(A),M<T)){_=x,w=p;const G=T;T=M,M=G,R=A}R||(R=Ui,Ve(_,m,R));const C=gt(_*2,d),D=s(R,C,T,u+1,f+_);let H;if(D===zg){const G=Y(_),W=K(_)-G;H=r(G,W,!0,u+1,f+_,R)}else H=D&&yh(_,a,s,r,c,f,u+1);if(H)return!0;A=Es,Ve(w,m,A);const z=gt(w*2,d),j=s(A,z,M,u+1,f+w);let V;if(j===zg){const G=Y(w),W=K(w)-G;V=r(G,W,!0,u+1,f+w,A)}else V=j&&yh(w,a,s,r,c,f,u+1);return!!V}}const Dl=new Q,Jf=new Q;function hS(h,a,s={},r=0,c=1/0){const f=r*r,u=c*c;let m=1/0,d=null;if(h.shapecast({boundsTraverseOrder:b=>(Dl.copy(a).clamp(b.min,b.max),Dl.distanceToSquared(a)),intersectsBounds:(b,v,p)=>p<m&&p<u,intersectsTriangle:(b,v)=>{b.closestPointToPoint(a,Dl);const p=a.distanceToSquared(Dl);return p<m&&(Jf.copy(Dl),m=p,d=v),p<f}}),m===1/0)return null;const g=Math.sqrt(m);return s.point?s.point.copy(Jf):s.point=Jf.clone(),s.distance=g,s.faceIndex=d,s}const Ro=parseInt(_v)>=169,dS=parseInt(_v)<=161,ha=new Q,da=new Q,ma=new Q,Co=new Re,Do=new Re,Oo=new Re,Ig=new Q,Fg=new Q,Gg=new Q,Ol=new Q;function mS(h,a,s,r,c,f,u,m){let d;if(f===Oh?d=h.intersectTriangle(r,s,a,!0,c):d=h.intersectTriangle(a,s,r,f!==Rh,c),d===null)return null;const g=h.origin.distanceTo(c);return g<u||g>m?null:{distance:g,point:c.clone()}}function pS(h,a,s,r,c,f,u,m,d,g,b){ha.fromBufferAttribute(a,f),da.fromBufferAttribute(a,u),ma.fromBufferAttribute(a,m);const v=mS(h,ha,da,ma,Ol,d,g,b);if(v){if(r){Co.fromBufferAttribute(r,f),Do.fromBufferAttribute(r,u),Oo.fromBufferAttribute(r,m),v.uv=new Re;const x=Ss.getInterpolation(Ol,ha,da,ma,Co,Do,Oo,v.uv);Ro||(v.uv=x)}if(c){Co.fromBufferAttribute(c,f),Do.fromBufferAttribute(c,u),Oo.fromBufferAttribute(c,m),v.uv1=new Re;const x=Ss.getInterpolation(Ol,ha,da,ma,Co,Do,Oo,v.uv1);Ro||(v.uv1=x),dS&&(v.uv2=v.uv1)}if(s){Ig.fromBufferAttribute(s,f),Fg.fromBufferAttribute(s,u),Gg.fromBufferAttribute(s,m),v.normal=new Q;const x=Ss.getInterpolation(Ol,ha,da,ma,Ig,Fg,Gg,v.normal);v.normal.dot(h.direction)>0&&v.normal.multiplyScalar(-1),Ro||(v.normal=x)}const p={a:f,b:u,c:m,normal:new Q,materialIndex:0};if(Ss.getNormal(ha,da,ma,p.normal),v.face=p,v.faceIndex=f,Ro){const x=new Q;Ss.getBarycoord(Ol,ha,da,ma,x),v.barycoord=x}}return v}function tc(h,a,s,r,c,f,u){const m=r*3;let d=m+0,g=m+1,b=m+2;const v=h.index;h.index&&(d=v.getX(d),g=v.getX(g),b=v.getX(b));const{position:p,normal:x,uv:_,uv1:w}=h.attributes,T=pS(s,p,x,_,w,d,g,b,a,f,u);return T?(T.faceIndex=r,c&&c.push(T),T):null}function Ke(h,a,s,r){const c=h.a,f=h.b,u=h.c;let m=a,d=a+1,g=a+2;s&&(m=s.getX(m),d=s.getX(d),g=s.getX(g)),c.x=r.getX(m),c.y=r.getY(m),c.z=r.getZ(m),f.x=r.getX(d),f.y=r.getY(d),f.z=r.getZ(d),u.x=r.getX(g),u.y=r.getY(g),u.z=r.getZ(g)}function gS(h,a,s,r,c,f,u,m){const{geometry:d,_indirectBuffer:g}=h;for(let b=r,v=r+c;b<v;b++)tc(d,a,s,b,f,u,m)}function vS(h,a,s,r,c,f,u){const{geometry:m,_indirectBuffer:d}=h;let g=1/0,b=null;for(let v=r,p=r+c;v<p;v++){let x;x=tc(m,a,s,v,null,f,u),x&&x.distance<g&&(b=x,g=x.distance)}return b}function yS(h,a,s,r,c,f,u){const{geometry:m}=s,{index:d}=m,g=m.attributes.position;for(let b=h,v=a+h;b<v;b++){let p;if(p=b,Ke(u,p*3,d,g),u.needsUpdate=!0,r(u,p,c,f))return!0}return!1}function bS(h,a=null){a&&Array.isArray(a)&&(a=new Set(a));const s=h.geometry,r=s.index?s.index.array:null,c=s.attributes.position;let f,u,m,d,g=0;const b=h._roots;for(let p=0,x=b.length;p<x;p++)f=b[p],u=new Uint32Array(f),m=new Uint16Array(f),d=new Float32Array(f),v(0,g),g+=f.byteLength;function v(p,x,_=!1){const w=p*2;if(m[w+15]===ec){const M=u[p+6],R=m[w+14];let A=1/0,C=1/0,D=1/0,H=-1/0,z=-1/0,j=-1/0;for(let V=3*M,Y=3*(M+R);V<Y;V++){let K=r[V];const G=c.getX(K),Z=c.getY(K),W=c.getZ(K);G<A&&(A=G),G>H&&(H=G),Z<C&&(C=Z),Z>z&&(z=Z),W<D&&(D=W),W>j&&(j=W)}return d[p+0]!==A||d[p+1]!==C||d[p+2]!==D||d[p+3]!==H||d[p+4]!==z||d[p+5]!==j?(d[p+0]=A,d[p+1]=C,d[p+2]=D,d[p+3]=H,d[p+4]=z,d[p+5]=j,!0):!1}else{const M=p+8,R=u[p+6],A=M+x,C=R+x;let D=_,H=!1,z=!1;a?D||(H=a.has(A),z=a.has(C),D=!H&&!z):(H=!0,z=!0);const j=D||H,V=D||z;let Y=!1;j&&(Y=v(M,x,D));let K=!1;V&&(K=v(R,x,D));const G=Y||K;if(G)for(let Z=0;Z<3;Z++){const W=M+Z,te=R+Z,X=d[W],ne=d[W+3],ie=d[te],ue=d[te+3];d[p+Z]=X<ie?X:ie,d[p+Z+3]=ne>ue?ne:ue}return G}}}function Hi(h,a,s,r,c){let f,u,m,d,g,b;const v=1/s.direction.x,p=1/s.direction.y,x=1/s.direction.z,_=s.origin.x,w=s.origin.y,T=s.origin.z;let M=a[h],R=a[h+3],A=a[h+1],C=a[h+3+1],D=a[h+2],H=a[h+3+2];return v>=0?(f=(M-_)*v,u=(R-_)*v):(f=(R-_)*v,u=(M-_)*v),p>=0?(m=(A-w)*p,d=(C-w)*p):(m=(C-w)*p,d=(A-w)*p),f>d||m>u||((m>f||isNaN(f))&&(f=m),(d<u||isNaN(u))&&(u=d),x>=0?(g=(D-T)*x,b=(H-T)*x):(g=(H-T)*x,b=(D-T)*x),f>b||g>u)?!1:((g>f||f!==f)&&(f=g),(b<u||u!==u)&&(u=b),f<=c&&u>=r)}function TS(h,a,s,r,c,f,u,m){const{geometry:d,_indirectBuffer:g}=h;for(let b=r,v=r+c;b<v;b++){let p=g?g[b]:b;tc(d,a,s,p,f,u,m)}}function xS(h,a,s,r,c,f,u){const{geometry:m,_indirectBuffer:d}=h;let g=1/0,b=null;for(let v=r,p=r+c;v<p;v++){let x;x=tc(m,a,s,d?d[v]:v,null,f,u),x&&x.distance<g&&(b=x,g=x.distance)}return b}function SS(h,a,s,r,c,f,u){const{geometry:m}=s,{index:d}=m,g=m.attributes.position;for(let b=h,v=a+h;b<v;b++){let p;if(p=s.resolveTriangleIndex(b),Ke(u,p*3,d,g),u.needsUpdate=!0,r(u,p,c,f))return!0}return!1}function _S(h,a,s,r,c,f,u){Be.setBuffer(h._roots[a]),bh(0,h,s,r,c,f,u),Be.clearBuffer()}function bh(h,a,s,r,c,f,u){const{float32Array:m,uint16Array:d,uint32Array:g}=Be,b=h*2;if(gt(b,d)){const p=Mt(h,g),x=Vt(b,d);gS(a,s,r,p,x,c,f,u)}else{const p=an(h);Hi(p,m,r,f,u)&&bh(p,a,s,r,c,f,u);const x=qt(h,g);Hi(x,m,r,f,u)&&bh(x,a,s,r,c,f,u)}}const AS=["x","y","z"];function wS(h,a,s,r,c,f){Be.setBuffer(h._roots[a]);const u=Th(0,h,s,r,c,f);return Be.clearBuffer(),u}function Th(h,a,s,r,c,f){const{float32Array:u,uint16Array:m,uint32Array:d}=Be;let g=h*2;if(gt(g,m)){const v=Mt(h,d),p=Vt(g,m);return vS(a,s,r,v,p,c,f)}else{const v=Nh(h,d),p=AS[v],_=r.direction[p]>=0;let w,T;_?(w=an(h),T=qt(h,d)):(w=qt(h,d),T=an(h));const R=Hi(w,u,r,c,f)?Th(w,a,s,r,c,f):null;if(R){const D=R.point[p];if(_?D<=u[T+v]:D>=u[T+v+3])return R}const C=Hi(T,u,r,c,f)?Th(T,a,s,r,c,f):null;return R&&C?R.distance<=C.distance?R:C:R||C||null}}const zo=new Rt,ds=new gn,ms=new gn,zl=new Pe,Vg=new vt,No=new vt;function ES(h,a,s,r){Be.setBuffer(h._roots[a]);const c=xh(0,h,s,r);return Be.clearBuffer(),c}function xh(h,a,s,r,c=null){const{float32Array:f,uint16Array:u,uint32Array:m}=Be;let d=h*2;if(c===null&&(s.boundingBox||s.computeBoundingBox(),Vg.set(s.boundingBox.min,s.boundingBox.max,r),c=Vg),gt(d,u)){const b=a.geometry,v=b.index,p=b.attributes.position,x=s.index,_=s.attributes.position,w=Mt(h,m),T=Vt(d,u);if(zl.copy(r).invert(),s.boundsTree)return Ve(h,f,No),No.matrix.copy(zl),No.needsUpdate=!0,s.boundsTree.shapecast({intersectsBounds:R=>No.intersectsBox(R),intersectsTriangle:R=>{R.a.applyMatrix4(r),R.b.applyMatrix4(r),R.c.applyMatrix4(r),R.needsUpdate=!0;for(let A=w*3,C=(T+w)*3;A<C;A+=3)if(Ke(ms,A,v,p),ms.needsUpdate=!0,R.intersectsTriangle(ms))return!0;return!1}});{const M=Ii(s);for(let R=w*3,A=(T+w)*3;R<A;R+=3){Ke(ds,R,v,p),ds.a.applyMatrix4(zl),ds.b.applyMatrix4(zl),ds.c.applyMatrix4(zl),ds.needsUpdate=!0;for(let C=0,D=M*3;C<D;C+=3)if(Ke(ms,C,x,_),ms.needsUpdate=!0,ds.intersectsTriangle(ms))return!0}}}else{const b=h+8,v=m[h+6];return Ve(b,f,zo),!!(c.intersectsBox(zo)&&xh(b,a,s,r,c)||(Ve(v,f,zo),c.intersectsBox(zo)&&xh(v,a,s,r,c)))}}const Bo=new Pe,$f=new vt,Nl=new vt,MS=new Q,RS=new Q,CS=new Q,DS=new Q;function OS(h,a,s,r={},c={},f=0,u=1/0){a.boundingBox||a.computeBoundingBox(),$f.set(a.boundingBox.min,a.boundingBox.max,s),$f.needsUpdate=!0;const m=h.geometry,d=m.attributes.position,g=m.index,b=a.attributes.position,v=a.index,p=sn.getPrimitive(),x=sn.getPrimitive();let _=MS,w=RS,T=null,M=null;c&&(T=CS,M=DS);let R=1/0,A=null,C=null;return Bo.copy(s).invert(),Nl.matrix.copy(Bo),h.shapecast({boundsTraverseOrder:D=>$f.distanceToBox(D),intersectsBounds:(D,H,z)=>z<R&&z<u?(H&&(Nl.min.copy(D.min),Nl.max.copy(D.max),Nl.needsUpdate=!0),!0):!1,intersectsRange:(D,H)=>{if(a.boundsTree)return a.boundsTree.shapecast({boundsTraverseOrder:j=>Nl.distanceToBox(j),intersectsBounds:(j,V,Y)=>Y<R&&Y<u,intersectsRange:(j,V)=>{for(let Y=j,K=j+V;Y<K;Y++){Ke(x,3*Y,v,b),x.a.applyMatrix4(s),x.b.applyMatrix4(s),x.c.applyMatrix4(s),x.needsUpdate=!0;for(let G=D,Z=D+H;G<Z;G++){Ke(p,3*G,g,d),p.needsUpdate=!0;const W=p.distanceToTriangle(x,_,T);if(W<R&&(w.copy(_),M&&M.copy(T),R=W,A=G,C=Y),W<f)return!0}}}});{const z=Ii(a);for(let j=0,V=z;j<V;j++){Ke(x,3*j,v,b),x.a.applyMatrix4(s),x.b.applyMatrix4(s),x.c.applyMatrix4(s),x.needsUpdate=!0;for(let Y=D,K=D+H;Y<K;Y++){Ke(p,3*Y,g,d),p.needsUpdate=!0;const G=p.distanceToTriangle(x,_,T);if(G<R&&(w.copy(_),M&&M.copy(T),R=G,A=Y,C=j),G<f)return!0}}}}}),sn.releasePrimitive(p),sn.releasePrimitive(x),R===1/0?null:(r.point?r.point.copy(w):r.point=w.clone(),r.distance=R,r.faceIndex=A,c&&(c.point?c.point.copy(M):c.point=M.clone(),c.point.applyMatrix4(Bo),w.applyMatrix4(Bo),c.distance=w.sub(c.point).length(),c.faceIndex=C),r)}function zS(h,a=null){a&&Array.isArray(a)&&(a=new Set(a));const s=h.geometry,r=s.index?s.index.array:null,c=s.attributes.position;let f,u,m,d,g=0;const b=h._roots;for(let p=0,x=b.length;p<x;p++)f=b[p],u=new Uint32Array(f),m=new Uint16Array(f),d=new Float32Array(f),v(0,g),g+=f.byteLength;function v(p,x,_=!1){const w=p*2;if(m[w+15]===ec){const M=u[p+6],R=m[w+14];let A=1/0,C=1/0,D=1/0,H=-1/0,z=-1/0,j=-1/0;for(let V=M,Y=M+R;V<Y;V++){const K=3*h.resolveTriangleIndex(V);for(let G=0;G<3;G++){let Z=K+G;Z=r?r[Z]:Z;const W=c.getX(Z),te=c.getY(Z),X=c.getZ(Z);W<A&&(A=W),W>H&&(H=W),te<C&&(C=te),te>z&&(z=te),X<D&&(D=X),X>j&&(j=X)}}return d[p+0]!==A||d[p+1]!==C||d[p+2]!==D||d[p+3]!==H||d[p+4]!==z||d[p+5]!==j?(d[p+0]=A,d[p+1]=C,d[p+2]=D,d[p+3]=H,d[p+4]=z,d[p+5]=j,!0):!1}else{const M=p+8,R=u[p+6],A=M+x,C=R+x;let D=_,H=!1,z=!1;a?D||(H=a.has(A),z=a.has(C),D=!H&&!z):(H=!0,z=!0);const j=D||H,V=D||z;let Y=!1;j&&(Y=v(M,x,D));let K=!1;V&&(K=v(R,x,D));const G=Y||K;if(G)for(let Z=0;Z<3;Z++){const W=M+Z,te=R+Z,X=d[W],ne=d[W+3],ie=d[te],ue=d[te+3];d[p+Z]=X<ie?X:ie,d[p+Z+3]=ne>ue?ne:ue}return G}}}function NS(h,a,s,r,c,f,u){Be.setBuffer(h._roots[a]),Sh(0,h,s,r,c,f,u),Be.clearBuffer()}function Sh(h,a,s,r,c,f,u){const{float32Array:m,uint16Array:d,uint32Array:g}=Be,b=h*2;if(gt(b,d)){const p=Mt(h,g),x=Vt(b,d);TS(a,s,r,p,x,c,f,u)}else{const p=an(h);Hi(p,m,r,f,u)&&Sh(p,a,s,r,c,f,u);const x=qt(h,g);Hi(x,m,r,f,u)&&Sh(x,a,s,r,c,f,u)}}const BS=["x","y","z"];function US(h,a,s,r,c,f){Be.setBuffer(h._roots[a]);const u=_h(0,h,s,r,c,f);return Be.clearBuffer(),u}function _h(h,a,s,r,c,f){const{float32Array:u,uint16Array:m,uint32Array:d}=Be;let g=h*2;if(gt(g,m)){const v=Mt(h,d),p=Vt(g,m);return xS(a,s,r,v,p,c,f)}else{const v=Nh(h,d),p=BS[v],_=r.direction[p]>=0;let w,T;_?(w=an(h),T=qt(h,d)):(w=qt(h,d),T=an(h));const R=Hi(w,u,r,c,f)?_h(w,a,s,r,c,f):null;if(R){const D=R.point[p];if(_?D<=u[T+v]:D>=u[T+v+3])return R}const C=Hi(T,u,r,c,f)?_h(T,a,s,r,c,f):null;return R&&C?R.distance<=C.distance?R:C:R||C||null}}const Uo=new Rt,ps=new gn,gs=new gn,Bl=new Pe,qg=new vt,Lo=new vt;function LS(h,a,s,r){Be.setBuffer(h._roots[a]);const c=Ah(0,h,s,r);return Be.clearBuffer(),c}function Ah(h,a,s,r,c=null){const{float32Array:f,uint16Array:u,uint32Array:m}=Be;let d=h*2;if(c===null&&(s.boundingBox||s.computeBoundingBox(),qg.set(s.boundingBox.min,s.boundingBox.max,r),c=qg),gt(d,u)){const b=a.geometry,v=b.index,p=b.attributes.position,x=s.index,_=s.attributes.position,w=Mt(h,m),T=Vt(d,u);if(Bl.copy(r).invert(),s.boundsTree)return Ve(h,f,Lo),Lo.matrix.copy(Bl),Lo.needsUpdate=!0,s.boundsTree.shapecast({intersectsBounds:R=>Lo.intersectsBox(R),intersectsTriangle:R=>{R.a.applyMatrix4(r),R.b.applyMatrix4(r),R.c.applyMatrix4(r),R.needsUpdate=!0;for(let A=w,C=T+w;A<C;A++)if(Ke(gs,3*a.resolveTriangleIndex(A),v,p),gs.needsUpdate=!0,R.intersectsTriangle(gs))return!0;return!1}});{const M=Ii(s);for(let R=w,A=T+w;R<A;R++){const C=a.resolveTriangleIndex(R);Ke(ps,3*C,v,p),ps.a.applyMatrix4(Bl),ps.b.applyMatrix4(Bl),ps.c.applyMatrix4(Bl),ps.needsUpdate=!0;for(let D=0,H=M*3;D<H;D+=3)if(Ke(gs,D,x,_),gs.needsUpdate=!0,ps.intersectsTriangle(gs))return!0}}}else{const b=h+8,v=m[h+6];return Ve(b,f,Uo),!!(c.intersectsBox(Uo)&&Ah(b,a,s,r,c)||(Ve(v,f,Uo),c.intersectsBox(Uo)&&Ah(v,a,s,r,c)))}}const Ho=new Pe,eh=new vt,Ul=new vt,HS=new Q,IS=new Q,FS=new Q,GS=new Q;function VS(h,a,s,r={},c={},f=0,u=1/0){a.boundingBox||a.computeBoundingBox(),eh.set(a.boundingBox.min,a.boundingBox.max,s),eh.needsUpdate=!0;const m=h.geometry,d=m.attributes.position,g=m.index,b=a.attributes.position,v=a.index,p=sn.getPrimitive(),x=sn.getPrimitive();let _=HS,w=IS,T=null,M=null;c&&(T=FS,M=GS);let R=1/0,A=null,C=null;return Ho.copy(s).invert(),Ul.matrix.copy(Ho),h.shapecast({boundsTraverseOrder:D=>eh.distanceToBox(D),intersectsBounds:(D,H,z)=>z<R&&z<u?(H&&(Ul.min.copy(D.min),Ul.max.copy(D.max),Ul.needsUpdate=!0),!0):!1,intersectsRange:(D,H)=>{if(a.boundsTree){const z=a.boundsTree;return z.shapecast({boundsTraverseOrder:j=>Ul.distanceToBox(j),intersectsBounds:(j,V,Y)=>Y<R&&Y<u,intersectsRange:(j,V)=>{for(let Y=j,K=j+V;Y<K;Y++){const G=z.resolveTriangleIndex(Y);Ke(x,3*G,v,b),x.a.applyMatrix4(s),x.b.applyMatrix4(s),x.c.applyMatrix4(s),x.needsUpdate=!0;for(let Z=D,W=D+H;Z<W;Z++){const te=h.resolveTriangleIndex(Z);Ke(p,3*te,g,d),p.needsUpdate=!0;const X=p.distanceToTriangle(x,_,T);if(X<R&&(w.copy(_),M&&M.copy(T),R=X,A=Z,C=Y),X<f)return!0}}}})}else{const z=Ii(a);for(let j=0,V=z;j<V;j++){Ke(x,3*j,v,b),x.a.applyMatrix4(s),x.b.applyMatrix4(s),x.c.applyMatrix4(s),x.needsUpdate=!0;for(let Y=D,K=D+H;Y<K;Y++){const G=h.resolveTriangleIndex(Y);Ke(p,3*G,g,d),p.needsUpdate=!0;const Z=p.distanceToTriangle(x,_,T);if(Z<R&&(w.copy(_),M&&M.copy(T),R=Z,A=Y,C=j),Z<f)return!0}}}}}),sn.releasePrimitive(p),sn.releasePrimitive(x),R===1/0?null:(r.point?r.point.copy(w):r.point=w.clone(),r.distance=R,r.faceIndex=A,c&&(c.point?c.point.copy(M):c.point=M.clone(),c.point.applyMatrix4(Ho),w.applyMatrix4(Ho),c.distance=w.sub(c.point).length(),c.faceIndex=C),r)}function qS(){return typeof SharedArrayBuffer<"u"}const ql=new Be.constructor,Qo=new Be.constructor,Bi=new Uh(()=>new Rt),vs=new Rt,ys=new Rt,th=new Rt,nh=new Rt;let ih=!1;function PS(h,a,s,r){if(ih)throw new Error("MeshBVH: Recursive calls to bvhcast not supported.");ih=!0;const c=h._roots,f=a._roots;let u,m=0,d=0;const g=new Pe().copy(s).invert();for(let b=0,v=c.length;b<v;b++){ql.setBuffer(c[b]),d=0;const p=Bi.getPrimitive();Ve(0,ql.float32Array,p),p.applyMatrix4(g);for(let x=0,_=f.length;x<_&&(Qo.setBuffer(f[x]),u=mn(0,0,s,g,r,m,d,0,0,p),Qo.clearBuffer(),d+=f[x].length,!u);x++);if(Bi.releasePrimitive(p),ql.clearBuffer(),m+=c[b].length,u)break}return ih=!1,u}function mn(h,a,s,r,c,f=0,u=0,m=0,d=0,g=null,b=!1){let v,p;b?(v=Qo,p=ql):(v=ql,p=Qo);const x=v.float32Array,_=v.uint32Array,w=v.uint16Array,T=p.float32Array,M=p.uint32Array,R=p.uint16Array,A=h*2,C=a*2,D=gt(A,w),H=gt(C,R);let z=!1;if(H&&D)b?z=c(Mt(a,M),Vt(a*2,R),Mt(h,_),Vt(h*2,w),d,u+a,m,f+h):z=c(Mt(h,_),Vt(h*2,w),Mt(a,M),Vt(a*2,R),m,f+h,d,u+a);else if(H){const j=Bi.getPrimitive();Ve(a,T,j),j.applyMatrix4(s);const V=an(h),Y=qt(h,_);Ve(V,x,vs),Ve(Y,x,ys);const K=j.intersectsBox(vs),G=j.intersectsBox(ys);z=K&&mn(a,V,r,s,c,u,f,d,m+1,j,!b)||G&&mn(a,Y,r,s,c,u,f,d,m+1,j,!b),Bi.releasePrimitive(j)}else{const j=an(a),V=qt(a,M);Ve(j,T,th),Ve(V,T,nh);const Y=g.intersectsBox(th),K=g.intersectsBox(nh);if(Y&&K)z=mn(h,j,s,r,c,f,u,m,d+1,g,b)||mn(h,V,s,r,c,f,u,m,d+1,g,b);else if(Y)if(D)z=mn(h,j,s,r,c,f,u,m,d+1,g,b);else{const G=Bi.getPrimitive();G.copy(th).applyMatrix4(s);const Z=an(h),W=qt(h,_);Ve(Z,x,vs),Ve(W,x,ys);const te=G.intersectsBox(vs),X=G.intersectsBox(ys);z=te&&mn(j,Z,r,s,c,u,f,d,m+1,G,!b)||X&&mn(j,W,r,s,c,u,f,d,m+1,G,!b),Bi.releasePrimitive(G)}else if(K)if(D)z=mn(h,V,s,r,c,f,u,m,d+1,g,b);else{const G=Bi.getPrimitive();G.copy(nh).applyMatrix4(s);const Z=an(h),W=qt(h,_);Ve(Z,x,vs),Ve(W,x,ys);const te=G.intersectsBox(vs),X=G.intersectsBox(ys);z=te&&mn(V,Z,r,s,c,u,f,d,m+1,G,!b)||X&&mn(V,W,r,s,c,u,f,d,m+1,G,!b),Bi.releasePrimitive(G)}}return z}const Io=new vt,Pg=new Rt,jS={strategy:Ov,maxDepth:40,maxLeafTris:10,useSharedArrayBuffer:!1,setBoundingBox:!0,onProgress:null,indirect:!1,verbose:!0,range:null};class Lh{static serialize(a,s={}){s={cloneBuffers:!0,...s};const r=a.geometry,c=a._roots,f=a._indirectBuffer,u=r.getIndex();let m;return s.cloneBuffers?m={roots:c.map(d=>d.slice()),index:u?u.array.slice():null,indirectBuffer:f?f.slice():null}:m={roots:c,index:u?u.array:null,indirectBuffer:f},m}static deserialize(a,s,r={}){r={setIndex:!0,indirect:!!a.indirectBuffer,...r};const{index:c,roots:f,indirectBuffer:u}=a,m=new Lh(s,{...r,[Zf]:!0});if(m._roots=f,m._indirectBuffer=u||null,r.setIndex){const d=s.getIndex();if(d===null){const g=new ct(a.index,1,!1);s.setIndex(g)}else d.array!==c&&(d.array.set(c),d.needsUpdate=!0)}return m}get indirect(){return!!this._indirectBuffer}constructor(a,s={}){if(a.isBufferGeometry){if(a.index&&a.index.isInterleavedBufferAttribute)throw new Error("MeshBVH: InterleavedBufferAttribute is not supported for the index attribute.")}else throw new Error("MeshBVH: Only BufferGeometries are supported.");if(s=Object.assign({...jS,[Zf]:!1},s),s.useSharedArrayBuffer&&!qS())throw new Error("MeshBVH: SharedArrayBuffer is not available.");this.geometry=a,this._roots=null,this._indirectBuffer=null,s[Zf]||(sS(this,s),!a.boundingBox&&s.setBoundingBox&&(a.boundingBox=this.getBoundingBox(new Rt))),this.resolveTriangleIndex=s.indirect?r=>this._indirectBuffer[r]:r=>r}refit(a=null){return(this.indirect?zS:bS)(this,a)}traverse(a,s=0){const r=this._roots[s],c=new Uint32Array(r),f=new Uint16Array(r);u(0);function u(m,d=0){const g=m*2,b=f[g+15]===ec;if(b){const v=c[m+6],p=f[g+14];a(d,b,new Float32Array(r,m*4,6),v,p)}else{const v=m+Li/4,p=c[m+6],x=c[m+7];a(d,b,new Float32Array(r,m*4,6),x)||(u(v,d+1),u(p,d+1))}}}raycast(a,s=Ko,r=0,c=1/0){const f=this._roots,u=this.geometry,m=[],d=s.isMaterial,g=Array.isArray(s),b=u.groups,v=d?s.side:s,p=this.indirect?NS:_S;for(let x=0,_=f.length;x<_;x++){const w=g?s[b[x].materialIndex].side:v,T=m.length;if(p(this,x,w,a,m,r,c),g){const M=b[x].materialIndex;for(let R=T,A=m.length;R<A;R++)m[R].face.materialIndex=M}}return m}raycastFirst(a,s=Ko,r=0,c=1/0){const f=this._roots,u=this.geometry,m=s.isMaterial,d=Array.isArray(s);let g=null;const b=u.groups,v=m?s.side:s,p=this.indirect?US:wS;for(let x=0,_=f.length;x<_;x++){const w=d?s[b[x].materialIndex].side:v,T=p(this,x,w,a,r,c);T!=null&&(g==null||T.distance<g.distance)&&(g=T,d&&(T.face.materialIndex=b[x].materialIndex))}return g}intersectsGeometry(a,s){let r=!1;const c=this._roots,f=this.indirect?LS:ES;for(let u=0,m=c.length;u<m&&(r=f(this,u,a,s),!r);u++);return r}shapecast(a){const s=sn.getPrimitive(),r=this.indirect?SS:yS;let{boundsTraverseOrder:c,intersectsBounds:f,intersectsRange:u,intersectsTriangle:m}=a;if(u&&m){const v=u;u=(p,x,_,w,T)=>v(p,x,_,w,T)?!0:r(p,x,this,m,_,w,s)}else u||(m?u=(v,p,x,_)=>r(v,p,this,m,x,_,s):u=(v,p,x)=>x);let d=!1,g=0;const b=this._roots;for(let v=0,p=b.length;v<p;v++){const x=b[v];if(d=fS(this,v,f,u,c,g),d)break;g+=x.byteLength}return sn.releasePrimitive(s),d}bvhcast(a,s,r){let{intersectsRanges:c,intersectsTriangles:f}=r;const u=sn.getPrimitive(),m=this.geometry.index,d=this.geometry.attributes.position,g=this.indirect?_=>{const w=this.resolveTriangleIndex(_);Ke(u,w*3,m,d)}:_=>{Ke(u,_*3,m,d)},b=sn.getPrimitive(),v=a.geometry.index,p=a.geometry.attributes.position,x=a.indirect?_=>{const w=a.resolveTriangleIndex(_);Ke(b,w*3,v,p)}:_=>{Ke(b,_*3,v,p)};if(f){const _=(w,T,M,R,A,C,D,H)=>{for(let z=M,j=M+R;z<j;z++){x(z),b.a.applyMatrix4(s),b.b.applyMatrix4(s),b.c.applyMatrix4(s),b.needsUpdate=!0;for(let V=w,Y=w+T;V<Y;V++)if(g(V),u.needsUpdate=!0,f(u,b,V,z,A,C,D,H))return!0}return!1};if(c){const w=c;c=function(T,M,R,A,C,D,H,z){return w(T,M,R,A,C,D,H,z)?!0:_(T,M,R,A,C,D,H,z)}}else c=_}return PS(this,a,s,c)}intersectsBox(a,s){return Io.set(a.min,a.max,s),Io.needsUpdate=!0,this.shapecast({intersectsBounds:r=>Io.intersectsBox(r),intersectsTriangle:r=>Io.intersectsTriangle(r)})}intersectsSphere(a){return this.shapecast({intersectsBounds:s=>a.intersectsBox(s),intersectsTriangle:s=>s.intersectsSphere(a)})}closestPointToGeometry(a,s,r={},c={},f=0,u=1/0){return(this.indirect?VS:OS)(this,a,s,r,c,f,u)}closestPointToPoint(a,s={},r=0,c=1/0){return hS(this,a,s,r,c)}getBoundingBox(a){return a.makeEmpty(),this._roots.forEach(r=>{Ve(0,new Float32Array(r),Pg),a.union(Pg)}),a}}function YS(h){switch(h){case 1:return"R";case 2:return"RG";case 3:return"RGBA";case 4:return"RGBA"}throw new Error}function kS(h){switch(h){case 1:return Zo;case 2:return wv;case 3:return tt;case 4:return tt}}function jg(h){switch(h){case 1:return ET;case 2:return Av;case 3:return dh;case 4:return dh}}class Fv extends ln{constructor(){super(),this.minFilter=Le,this.magFilter=Le,this.generateMipmaps=!1,this.overrideItemSize=null,this._forcedType=null}updateFrom(a){const s=this.overrideItemSize,r=a.itemSize,c=a.count;if(s!==null){if(r*c%s!==0)throw new Error("VertexAttributeTexture: overrideItemSize must divide evenly into buffer length.");a.itemSize=s,a.count=c*r/s}const f=a.itemSize,u=a.count,m=a.normalized,d=a.array.constructor,g=d.BYTES_PER_ELEMENT;let b=this._forcedType,v=f;if(b===null)switch(d){case Float32Array:b=ut;break;case Uint8Array:case Uint16Array:case Uint32Array:b=Gl;break;case Int8Array:case Int16Array:case Int32Array:b=Gf;break}let p,x,_,w,T=YS(f);switch(b){case ut:_=1,x=kS(f),m&&g===1?(w=d,T+="8",d===Uint8Array?p=hh:(p=gg,T+="_SNORM")):(w=Float32Array,T+="32F",p=ut);break;case Gf:T+=g*8+"I",_=m?Math.pow(2,d.BYTES_PER_ELEMENT*8-1):1,x=jg(f),g===1?(w=Int8Array,p=gg):g===2?(w=Int16Array,p=wT):(w=Int32Array,p=Gf);break;case Gl:T+=g*8+"UI",_=m?Math.pow(2,d.BYTES_PER_ELEMENT*8-1):1,x=jg(f),g===1?(w=Uint8Array,p=hh):g===2?(w=Uint16Array,p=AT):(w=Uint32Array,p=Gl);break}v===3&&(x===tt||x===dh)&&(v=4);const M=Math.ceil(Math.sqrt(u))||1,R=v*M*M,A=new w(R),C=a.normalized;a.normalized=!1;for(let D=0;D<u;D++){const H=v*D;A[H]=a.getX(D)/_,f>=2&&(A[H+1]=a.getY(D)/_),f>=3&&(A[H+2]=a.getZ(D)/_,v===4&&(A[H+3]=1)),f>=4&&(A[H+3]=a.getW(D)/_)}a.normalized=C,this.internalFormat=T,this.format=x,this.type=p,this.image.width=M,this.image.height=M,this.image.data=A,this.needsUpdate=!0,this.dispose(),a.itemSize=r,a.count=c}}class Gv extends Fv{constructor(){super(),this._forcedType=Gl}}class Vv extends Fv{constructor(){super(),this._forcedType=ut}}class XS{constructor(){this.index=new Gv,this.position=new Vv,this.bvhBounds=new ln,this.bvhContents=new ln,this._cachedIndexAttr=null,this.index.overrideItemSize=3}updateFrom(a){const{geometry:s}=a;if(ZS(a,this.bvhBounds,this.bvhContents),this.position.updateFrom(s.attributes.position),a.indirect){const r=a._indirectBuffer;if(this._cachedIndexAttr===null||this._cachedIndexAttr.count!==r.length)if(s.index)this._cachedIndexAttr=s.index.clone();else{const c=Bv(Nv(s));this._cachedIndexAttr=new ct(c,1,!1)}KS(s,r,this._cachedIndexAttr),this.index.updateFrom(this._cachedIndexAttr)}else this.index.updateFrom(s.index)}dispose(){const{index:a,position:s,bvhBounds:r,bvhContents:c}=this;a&&a.dispose(),s&&s.dispose(),r&&r.dispose(),c&&c.dispose()}}function KS(h,a,s){const r=s.array,c=h.index?h.index.array:null;for(let f=0,u=a.length;f<u;f++){const m=3*f,d=3*a[f];for(let g=0;g<3;g++)r[m+g]=c?c[d+g]:d+g}}function ZS(h,a,s){const r=h._roots;if(r.length!==1)throw new Error("MeshBVHUniformStruct: Multi-root BVHs not supported.");const c=r[0],f=new Uint16Array(c),u=new Uint32Array(c),m=new Float32Array(c),d=c.byteLength/Li,g=2*Math.ceil(Math.sqrt(d/2)),b=new Float32Array(4*g*g),v=Math.ceil(Math.sqrt(d)),p=new Uint32Array(2*v*v);for(let x=0;x<d;x++){const _=x*Li/4,w=_*2,T=_;for(let M=0;M<3;M++)b[8*x+0+M]=m[T+0+M],b[8*x+4+M]=m[T+3+M];if(gt(w,f)){const M=Vt(w,f),R=Mt(_,u),A=4294901760|M;p[x*2+0]=A,p[x*2+1]=R}else{const M=4*qt(_,u)/Li,R=Nh(_,u);p[x*2+0]=R,p[x*2+1]=M}}a.image.data=b,a.image.width=g,a.image.height=g,a.format=tt,a.type=ut,a.internalFormat="RGBA32F",a.minFilter=Le,a.magFilter=Le,a.generateMipmaps=!1,a.needsUpdate=!0,a.dispose(),s.image.data=p,s.image.width=v,s.image.height=v,s.format=Av,s.type=Gl,s.internalFormat="RG32UI",s.minFilter=Le,s.magFilter=Le,s.generateMipmaps=!1,s.needsUpdate=!0,s.dispose()}const QS=`

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
`,WS=`

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
`,JS=`
struct BVH {

	usampler2D index;
	sampler2D position;

	sampler2D bvhBounds;
	usampler2D bvhContents;

};
`;function qv(h,a,s=0){if(h.isInterleavedBufferAttribute){const r=h.itemSize;for(let c=0,f=h.count;c<f;c++){const u=c+s;a.setX(u,h.getX(c)),r>=2&&a.setY(u,h.getY(c)),r>=3&&a.setZ(u,h.getZ(c)),r>=4&&a.setW(u,h.getW(c))}}else{const r=a.array,c=r.constructor,f=r.BYTES_PER_ELEMENT*h.itemSize*s;new c(r.buffer,f,h.array.length).set(h.array)}}function Hl(h,a=null){const s=h.array.constructor,r=h.normalized,c=h.itemSize,f=a===null?h.count:a;return new ct(new s(c*f),c,r)}function _s(h,a){if(!h&&!a)return!0;if(!!h!=!!a)return!1;const s=h.count===a.count,r=h.normalized===a.normalized,c=h.array.constructor===a.array.constructor,f=h.itemSize===a.itemSize;return!(!s||!r||!c||!f)}function $S(h){const a=h[0].index!==null,s=new Set(Object.keys(h[0].attributes));if(!h[0].getAttribute("position"))throw new Error("StaticGeometryGenerator: position attribute is required.");for(let r=0;r<h.length;++r){const c=h[r];let f=0;if(a!==(c.index!==null))throw new Error("StaticGeometryGenerator: All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.");for(const u in c.attributes){if(!s.has(u))throw new Error('StaticGeometryGenerator: All geometries must have compatible attributes; make sure "'+u+'" attribute exists among all geometries, or in none of them.');f++}if(f!==s.size)throw new Error("StaticGeometryGenerator: All geometries must have the same number of attributes.")}}function e_(h){let a=0;for(let s=0,r=h.length;s<r;s++)a+=h[s].getIndex().count;return a}function t_(h){let a=0;for(let s=0,r=h.length;s<r;s++)a+=h[s].getAttribute("position").count;return a}function n_(h,a,s){h.index&&h.index.count!==a&&h.setIndex(null);const r=h.attributes;for(const c in r)r[c].count!==s&&h.deleteAttribute(c)}function i_(h,a={},s=new zn){const{useGroups:r=!1,forceUpdate:c=!1,skipAssigningAttributes:f=[],overwriteIndex:u=!0}=a;$S(h);const m=h[0].index!==null,d=m?e_(h):-1,g=t_(h);if(n_(s,d,g),r){let v=0;for(let p=0,x=h.length;p<x;p++){const _=h[p];let w;m?w=_.getIndex().count:w=_.getAttribute("position").count,s.addGroup(v,w,p),v+=w}}if(m){let v=!1;if(s.index||(s.setIndex(new ct(new Uint32Array(d),1,!1)),v=!0),v||u){let p=0,x=0;const _=s.getIndex();for(let w=0,T=h.length;w<T;w++){const M=h[w],R=M.getIndex();if(!(!c&&!v&&f[w]))for(let C=0;C<R.count;++C)_.setX(p+C,R.getX(C)+x);p+=R.count,x+=M.getAttribute("position").count}}}const b=Object.keys(h[0].attributes);for(let v=0,p=b.length;v<p;v++){let x=!1;const _=b[v];if(!s.getAttribute(_)){const M=h[0].getAttribute(_);s.setAttribute(_,Hl(M,g)),x=!0}let w=0;const T=s.getAttribute(_);for(let M=0,R=h.length;M<R;M++){const A=h[M],C=!c&&!x&&f[M],D=A.getAttribute(_);if(!C)if(_==="color"&&T.itemSize!==D.itemSize)for(let H=w,z=D.count;H<z;H++)D.setXYZW(H,T.getX(H),T.getY(H),T.getZ(H),1);else qv(D,T,w);w+=D.count}}}function a_(h,a,s){const r=h.index,f=h.attributes.position.count,u=r?r.count:f;let m=h.groups;m.length===0&&(m=[{count:u,start:0,materialIndex:0}]);let d=h.getAttribute("materialIndex");if(!d||d.count!==f){let b;s.length<=255?b=new Uint8Array(f):b=new Uint16Array(f),d=new ct(b,1,!1),h.deleteAttribute("materialIndex"),h.setAttribute("materialIndex",d)}const g=d.array;for(let b=0;b<m.length;b++){const v=m[b],p=v.start,x=v.count,_=Math.min(x,u-p),w=Array.isArray(a)?a[v.materialIndex]:a,T=s.indexOf(w);for(let M=0;M<_;M++){let R=p+M;r&&(R=r.getX(R)),g[R]=T}}}function s_(h,a){if(!h.index){const s=h.attributes.position.count,r=new Array(s);for(let c=0;c<s;c++)r[c]=c;h.setIndex(r)}if(!h.attributes.normal&&a&&a.includes("normal")&&h.computeVertexNormals(),!h.attributes.uv&&a&&a.includes("uv")){const s=h.attributes.position.count;h.setAttribute("uv",new ct(new Float32Array(s*2),2,!1))}if(!h.attributes.uv2&&a&&a.includes("uv2")){const s=h.attributes.position.count;h.setAttribute("uv2",new ct(new Float32Array(s*2),2,!1))}if(!h.attributes.tangent&&a&&a.includes("tangent"))if(h.attributes.uv&&h.attributes.normal)h.computeTangents();else{const s=h.attributes.position.count;h.setAttribute("tangent",new ct(new Float32Array(s*4),4,!1))}if(!h.attributes.color&&a&&a.includes("color")){const s=h.attributes.position.count,r=new Float32Array(s*4);r.fill(1),h.setAttribute("color",new ct(r,4))}}function Hh(h){let a=0;if(h.byteLength!==0){const s=new Uint8Array(h);for(let r=0;r<h.byteLength;r++){const c=s[r];a=(a<<5)-a+c,a|=0}}return a}function Yg(h){let a=h.uuid;const s=Object.values(h.attributes);h.index&&(s.push(h.index),a+=`index|${h.index.version}`);const r=Object.keys(s).sort();for(const c of r){const f=s[c];a+=`${c}_${f.version}|`}return a}function kg(h){const a=h.skeleton;return a?(a.boneTexture||a.computeBoneTexture(),`${Hh(a.boneTexture.image.data.buffer)}_${a.boneTexture.uuid}`):null}class l_{constructor(a=null){this.matrixWorld=new Pe,this.geometryHash=null,this.skeletonHash=null,this.primitiveCount=-1,a!==null&&this.updateFrom(a)}updateFrom(a){const s=a.geometry,r=(s.index?s.index.count:s.attributes.position.count)/3;this.matrixWorld.copy(a.matrixWorld),this.geometryHash=Yg(s),this.primitiveCount=r,this.skeletonHash=kg(a)}didChange(a){const s=a.geometry,r=(s.index?s.index.count:s.attributes.position.count)/3;return!(this.matrixWorld.equals(a.matrixWorld)&&this.geometryHash===Yg(s)&&this.skeletonHash===kg(a)&&this.primitiveCount===r)}}const pa=new Q,ga=new Q,va=new Q,Xg=new Ds,Fo=new Q,ah=new Q,Kg=new Ds,Zg=new Ds,Go=new Pe,Qg=new Pe;function Wg(h,a,s){const r=h.skeleton,c=h.geometry,f=r.bones,u=r.boneInverses;Kg.fromBufferAttribute(c.attributes.skinIndex,a),Zg.fromBufferAttribute(c.attributes.skinWeight,a),Go.elements.fill(0);for(let m=0;m<4;m++){const d=Zg.getComponent(m);if(d!==0){const g=Kg.getComponent(m);Qg.multiplyMatrices(f[g].matrixWorld,u[g]),r_(Go,Qg,d)}}return Go.multiply(h.bindMatrix).premultiply(h.bindMatrixInverse),s.transformDirection(Go),s}function sh(h,a,s,r,c){Fo.set(0,0,0);for(let f=0,u=h.length;f<u;f++){const m=a[f],d=h[f];m!==0&&(ah.fromBufferAttribute(d,r),s?Fo.addScaledVector(ah,m):Fo.addScaledVector(ah.sub(c),m))}c.add(Fo)}function r_(h,a,s){const r=h.elements,c=a.elements;for(let f=0,u=c.length;f<u;f++)r[f]+=c[f]*s}function o_(h){const{index:a,attributes:s}=h;if(a)for(let r=0,c=a.count;r<c;r+=3){const f=a.getX(r),u=a.getX(r+2);a.setX(r,u),a.setX(r+2,f)}else for(const r in s){const c=s[r],f=c.itemSize;for(let u=0,m=c.count;u<m;u+=3)for(let d=0;d<f;d++){const g=c.getComponent(u,d),b=c.getComponent(u+2,d);c.setComponent(u,d,b),c.setComponent(u+2,d,g)}}return h}function c_(h,a={},s=new zn){a={applyWorldTransforms:!0,attributes:[],...a};const r=h.geometry,c=a.applyWorldTransforms,f=a.attributes.includes("normal"),u=a.attributes.includes("tangent"),m=r.attributes,d=s.attributes;for(const R in s.attributes)(!a.attributes.includes(R)||!(R in r.attributes))&&s.deleteAttribute(R);!s.index&&r.index&&(s.index=r.index.clone()),d.position||s.setAttribute("position",Hl(m.position)),f&&!d.normal&&m.normal&&s.setAttribute("normal",Hl(m.normal)),u&&!d.tangent&&m.tangent&&s.setAttribute("tangent",Hl(m.tangent)),_s(r.index,s.index),_s(m.position,d.position),f&&_s(m.normal,d.normal),u&&_s(m.tangent,d.tangent);const g=m.position,b=f?m.normal:null,v=u?m.tangent:null,p=r.morphAttributes.position,x=r.morphAttributes.normal,_=r.morphAttributes.tangent,w=r.morphTargetsRelative,T=h.morphTargetInfluences,M=new MT;M.getNormalMatrix(h.matrixWorld),r.index&&s.index.array.set(r.index.array);for(let R=0,A=m.position.count;R<A;R++)pa.fromBufferAttribute(g,R),b&&ga.fromBufferAttribute(b,R),v&&(Xg.fromBufferAttribute(v,R),va.fromBufferAttribute(v,R)),T&&(p&&sh(p,T,w,R,pa),x&&sh(x,T,w,R,ga),_&&sh(_,T,w,R,va)),h.isSkinnedMesh&&(h.applyBoneTransform(R,pa),b&&Wg(h,R,ga),v&&Wg(h,R,va)),c&&pa.applyMatrix4(h.matrixWorld),d.position.setXYZ(R,pa.x,pa.y,pa.z),b&&(c&&ga.applyNormalMatrix(M),d.normal.setXYZ(R,ga.x,ga.y,ga.z)),v&&(c&&va.transformDirection(h.matrixWorld),d.tangent.setXYZW(R,va.x,va.y,va.z,Xg.w));for(const R in a.attributes){const A=a.attributes[R];A==="position"||A==="tangent"||A==="normal"||!(A in m)||(d[A]||s.setAttribute(A,Hl(m[A])),_s(m[A],d[A]),qv(m[A],d[A]))}return h.matrixWorld.determinant()<0&&o_(s),s}class u_ extends zn{constructor(){super(),this.version=0,this.hash=null,this._diff=new l_}isCompatible(a,s){const r=a.geometry;for(let c=0;c<s.length;c++){const f=s[c],u=r.attributes[f],m=this.attributes[f];if(u&&!_s(u,m))return!1}return!0}updateFrom(a,s){const r=this._diff;return r.didChange(a)?(c_(a,s,this),r.updateFrom(a),this.version++,this.hash=`${this.uuid}_${this.version}`,!0):!1}}const wh=0,Pv=1,jv=2;function f_(h,a){for(let s=0,r=h.length;s<r;s++)h[s].traverseVisible(f=>{f.isMesh&&a(f)})}function h_(h){const a=[];for(let s=0,r=h.length;s<r;s++){const c=h[s];Array.isArray(c.material)?a.push(...c.material):a.push(c.material)}return a}function d_(h,a,s){if(h.length===0){a.setIndex(null);const r=a.attributes;for(const c in r)a.deleteAttribute(c);for(const c in s.attributes)a.setAttribute(s.attributes[c],new ct(new Float32Array(0),4,!1))}else i_(h,s,a);for(const r in a.attributes)a.attributes[r].needsUpdate=!0}class m_{constructor(a){this.objects=null,this.useGroups=!0,this.applyWorldTransforms=!0,this.generateMissingAttributes=!0,this.overwriteIndex=!0,this.attributes=["position","normal","color","tangent","uv","uv2"],this._intermediateGeometry=new Map,this._geometryMergeSets=new WeakMap,this._mergeOrder=[],this._dummyMesh=null,this.setObjects(a||[])}_getDummyMesh(){if(!this._dummyMesh){const a=new As,s=new zn;s.setAttribute("position",new ct(new Float32Array(9),3)),this._dummyMesh=new nn(s,a)}return this._dummyMesh}_getMeshes(){const a=[];return f_(this.objects,s=>{a.push(s)}),a.sort((s,r)=>s.uuid>r.uuid?1:s.uuid<r.uuid?-1:0),a.length===0&&a.push(this._getDummyMesh()),a}_updateIntermediateGeometries(){const{_intermediateGeometry:a}=this,s=this._getMeshes(),r=new Set(a.keys()),c={attributes:this.attributes,applyWorldTransforms:this.applyWorldTransforms};for(let f=0,u=s.length;f<u;f++){const m=s[f],d=m.uuid;r.delete(d);let g=a.get(d);(!g||!g.isCompatible(m,this.attributes))&&(g&&g.dispose(),g=new u_,a.set(d,g)),g.updateFrom(m,c)&&this.generateMissingAttributes&&s_(g,this.attributes)}r.forEach(f=>{a.delete(f)})}setObjects(a){Array.isArray(a)?this.objects=[...a]:this.objects=[a]}generate(a=new zn){const{useGroups:s,overwriteIndex:r,_intermediateGeometry:c,_geometryMergeSets:f}=this,u=this._getMeshes(),m=[],d=[],g=f.get(a)||[];this._updateIntermediateGeometries();let b=!1;u.length!==g.length&&(b=!0);for(let p=0,x=u.length;p<x;p++){const _=u[p],w=c.get(_.uuid);d.push(w);const T=g[p];!T||T.uuid!==w.uuid?(m.push(!1),b=!0):T.version!==w.version?m.push(!1):m.push(!0)}d_(d,a,{useGroups:s,forceUpdate:b,skipAssigningAttributes:m,overwriteIndex:r}),b&&a.dispose(),f.set(a,d.map(p=>({version:p.version,uuid:p.uuid})));let v=wh;return b?v=jv:m.includes(!1)&&(v=Pv),{changeType:v,materials:h_(u),geometry:a}}}function p_(h){const a=new Set;for(let s=0,r=h.length;s<r;s++){const c=h[s];for(const f in c){const u=c[f];u&&u.isTexture&&a.add(u)}}return Array.from(a)}function g_(h){const a=[],s=new Set;for(let c=0,f=h.length;c<f;c++)h[c].traverse(u=>{u.visible&&(u.isRectAreaLight||u.isSpotLight||u.isPointLight||u.isDirectionalLight)&&(a.push(u),u.iesMap&&s.add(u.iesMap))});const r=Array.from(s).sort((c,f)=>c.uuid<f.uuid?1:c.uuid>f.uuid?-1:0);return{lights:a,iesTextures:r}}class v_{get initialized(){return!!this.bvh}constructor(a){this.bvhOptions={},this.attributes=["position","normal","tangent","color","uv","uv2"],this.generateBVH=!0,this.bvh=null,this.geometry=new zn,this.staticGeometryGenerator=new m_(a),this._bvhWorker=null,this._pendingGenerate=null,this._buildAsync=!1,this._materialUuids=null}setObjects(a){this.staticGeometryGenerator.setObjects(a)}setBVHWorker(a){this._bvhWorker=a}async generateAsync(a=null){if(!this._bvhWorker)throw new Error('PathTracingSceneGenerator: "setBVHWorker" must be called before "generateAsync" can be called.');if(this.bvh instanceof Promise)return this._pendingGenerate||(this._pendingGenerate=new Promise(async()=>(await this.bvh,this._pendingGenerate=null,this.generateAsync(a)))),this._pendingGenerate;{this._buildAsync=!0;const s=this.generate(a);return this._buildAsync=!1,s.bvh=this.bvh=await s.bvh,s}}generate(a=null){const{staticGeometryGenerator:s,geometry:r,attributes:c}=this,f=s.objects;s.attributes=c,f.forEach(p=>{p.traverse(x=>{x.isSkinnedMesh&&x.skeleton&&x.skeleton.update()})});const u=s.generate(r),m=u.materials;let d=u.changeType!==wh||this._materialUuids===null||this._materialUuids.length!==length;if(!d){for(let p=0,x=m.length;p<x;p++)if(m[p].uuid!==this._materialUuids[p]){d=!0;break}}const g=p_(m),{lights:b,iesTextures:v}=g_(f);if(d&&(a_(r,m,m),this._materialUuids=m.map(p=>p.uuid)),this.generateBVH){if(this.bvh instanceof Promise)throw new Error("PathTracingSceneGenerator: BVH is already building asynchronously.");if(u.changeType===jv){const p={strategy:zv,maxLeafTris:1,indirect:!0,onProgress:a,...this.bvhOptions};this._buildAsync?this.bvh=this._bvhWorker.generate(r,p):this.bvh=new Lh(r,p)}else u.changeType===Pv&&this.bvh.refit()}return{bvhChanged:u.changeType!==wh,bvh:this.bvh,needsMaterialIndexUpdate:d,lights:b,iesTextures:v,geometry:r,materials:m,textures:g,objects:f}}}const y_=new xv(-1,1,1,-1,0,1);class b_ extends zn{constructor(){super(),this.setAttribute("position",new vg([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new vg([0,2,0,0,2,0],2))}}const T_=new b_;class Os{constructor(a){this._mesh=new nn(T_,a)}dispose(){this._mesh.geometry.dispose()}render(a){a.render(this._mesh,y_)}get material(){return this._mesh.material}set material(a){this._mesh.material=a}}class Ih extends $o{set needsUpdate(a){super.needsUpdate=!0,this.dispatchEvent({type:"recompilation"})}constructor(a){super(a);for(const s in this.uniforms)Object.defineProperty(this,s,{get(){return this.uniforms[s].value},set(r){this.uniforms[s].value=r}})}setDefine(a,s=void 0){if(s==null){if(a in this.defines)return delete this.defines[a],this.needsUpdate=!0,!0}else if(this.defines[a]!==s)return this.defines[a]=s,this.needsUpdate=!0,!0;return!1}}class x_ extends Ih{constructor(a){super({blending:Yl,uniforms:{target1:{value:null},target2:{value:null},opacity:{value:1}},vertexShader:`

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

				}`}),this.setValues(a)}}function Vo(h=1){let a="uint";return h>1&&(a="uvec"+h),`
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
	`}function qo(h=1){let a="uint",s="float",r="",c=".r",f="1u";return h>1&&(a="uvec"+h,s="vec"+h,r=h+"",h===2?(c=".rg",f="uvec2( 1u, 2u )"):h===3?(c=".rgb",f="uvec3( 1u, 2u, 3u )"):(c="",f="uvec4( 1u, 2u, 3u, 4u )")),`

		${s} sobol${r}( int effect ) {

			uint seed = sobolGetSeed( sobolBounceIndex, uint( effect ) );
			uint index = sobolPathIndex;

			uint shuffle_seed = sobolHashCombine( seed, 0u );
			uint shuffled_index = nestedUniformScrambleBase2( sobolReverseBits( index ), shuffle_seed );
			${s} sobol_pt = sobolGetTexturePoint( shuffled_index )${c};
			${a} result = ${a}( sobol_pt * 16777216.0 );

			${a} seed2 = sobolHashCombine( seed, ${f} );
			result = nestedUniformScrambleBase2( result, seed2 );

			return SOBOL_FACTOR * ${s}( result >> 8 );

		}
	`}const Yv=`

	// Utils
	const float SOBOL_FACTOR = 1.0 / 16777216.0;
	const uint SOBOL_MAX_POINTS = 256u * 256u;

	${Vo(1)}
	${Vo(2)}
	${Vo(3)}
	${Vo(4)}

	uint sobolHash( uint x ) {

		// finalizer from murmurhash3
		x ^= x >> 16;
		x *= 0x85ebca6bu;
		x ^= x >> 13;
		x *= 0xc2b2ae35u;
		x ^= x >> 16;
		return x;

	}

`,S_=`

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

`,__=`

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

	${qo(1)}
	${qo(2)}
	${qo(3)}
	${qo(4)}

`;class A_ extends Ih{constructor(){super({blending:Yl,uniforms:{resolution:{value:new Re}},vertexShader:`

				varying vec2 vUv;
				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}
			`,fragmentShader:`

				${Yv}
				${S_}

				varying vec2 vUv;
				uniform vec2 resolution;
				void main() {

					uint index = uint( gl_FragCoord.y ) * uint( resolution.x ) + uint( gl_FragCoord.x );
					gl_FragColor = generateSobolPoint( index );

				}
			`})}}class w_{generate(a,s=256){const r=new Vl(s,s,{type:ut,format:tt,minFilter:Le,magFilter:Le,generateMipmaps:!1}),c=a.getRenderTarget();a.setRenderTarget(r);const f=new Os(new A_);return f.material.resolution.set(s,s),f.render(a),a.setRenderTarget(c),f.dispose(),r}}class E_ extends Jo{set bokehSize(a){this.fStop=this.getFocalLength()/a}get bokehSize(){return this.getFocalLength()/this.fStop}constructor(...a){super(...a),this.fStop=1.4,this.apertureBlades=0,this.apertureRotation=0,this.focusDistance=25,this.anamorphicRatio=1}copy(a,s){return super.copy(a,s),this.fStop=a.fStop,this.apertureBlades=a.apertureBlades,this.apertureRotation=a.apertureRotation,this.focusDistance=a.focusDistance,this.anamorphicRatio=a.anamorphicRatio,this}}class M_{constructor(){this.bokehSize=0,this.apertureBlades=0,this.apertureRotation=0,this.focusDistance=10,this.anamorphicRatio=1}updateFrom(a){a instanceof E_?(this.bokehSize=a.bokehSize,this.apertureBlades=a.apertureBlades,this.apertureRotation=a.apertureRotation,this.focusDistance=a.focusDistance,this.anamorphicRatio=a.anamorphicRatio):(this.bokehSize=0,this.apertureRotation=0,this.apertureBlades=0,this.focusDistance=10,this.anamorphicRatio=1)}}function lh(h){const a=new Uint16Array(h.length);for(let s=0,r=h.length;s<r;++s)a[s]=Wn.toHalfFloat(h[s]);return a}function Jg(h,a,s=0,r=h.length){let c=s,f=s+r-1;for(;c<f;){const u=c+f>>1;h[u]<a?c=u+1:f=u}return c-s}function R_(h,a,s){return .2126*h+.7152*a+.0722*s}function C_(h,a=On){const s=h.clone();s.source=new RT({...s.image});const{width:r,height:c,data:f}=s.image;let u=f;if(s.type!==a){a===On?u=new Uint16Array(f.length):u=new Float32Array(f.length);let m;f instanceof Int8Array||f instanceof Int16Array||f instanceof Int32Array?m=2**(8*f.BYTES_PER_ELEMENT-1)-1:m=2**(8*f.BYTES_PER_ELEMENT)-1;for(let d=0,g=f.length;d<g;d++){let b=f[d];s.type===On&&(b=Wn.fromHalfFloat(f[d])),s.type!==ut&&s.type!==On&&(b/=m),a===On&&(u[d]=Wn.toHalfFloat(b))}s.image.data=u,s.type=a}if(s.flipY){const m=u;u=u.slice();for(let d=0;d<c;d++)for(let g=0;g<r;g++){const b=c-d-1,v=4*(d*r+g),p=4*(b*r+g);u[p+0]=m[v+0],u[p+1]=m[v+1],u[p+2]=m[v+2],u[p+3]=m[v+3]}s.flipY=!1,s.image.data=u}return s}class D_{constructor(){const a=new ln(lh(new Float32Array([0,0,0,0])),1,1);a.type=On,a.format=tt,a.minFilter=Et,a.magFilter=Et,a.wrapS=pn,a.wrapT=pn,a.generateMipmaps=!1,a.needsUpdate=!0;const s=new ln(lh(new Float32Array([0,1])),1,2);s.type=On,s.format=Zo,s.minFilter=Et,s.magFilter=Et,s.generateMipmaps=!1,s.needsUpdate=!0;const r=new ln(lh(new Float32Array([0,0,1,1])),2,2);r.type=On,r.format=Zo,r.minFilter=Et,r.magFilter=Et,r.generateMipmaps=!1,r.needsUpdate=!0,this.map=a,this.marginalWeights=s,this.conditionalWeights=r,this.totalSum=0}dispose(){this.marginalWeights.dispose(),this.conditionalWeights.dispose(),this.map.dispose()}updateFrom(a){const s=C_(a);s.wrapS=pn,s.wrapT=$n;const{width:r,height:c,data:f}=s.image,u=new Float32Array(r*c),m=new Float32Array(r*c),d=new Float32Array(c),g=new Float32Array(c);let b=0,v=0;for(let T=0;T<c;T++){let M=0;for(let R=0;R<r;R++){const A=T*r+R,C=Wn.fromHalfFloat(f[4*A+0]),D=Wn.fromHalfFloat(f[4*A+1]),H=Wn.fromHalfFloat(f[4*A+2]),z=R_(C,D,H);M+=z,b+=z,u[A]=z,m[A]=M}if(M!==0)for(let R=T*r,A=T*r+r;R<A;R++)u[R]/=M,m[R]/=M;v+=M,d[T]=M,g[T]=v}if(v!==0)for(let T=0,M=d.length;T<M;T++)d[T]/=v,g[T]/=v;const p=new Uint16Array(c),x=new Uint16Array(r*c);for(let T=0;T<c;T++){const M=(T+1)/c,R=Jg(g,M);p[T]=Wn.toHalfFloat((R+.5)/c)}for(let T=0;T<c;T++)for(let M=0;M<r;M++){const R=T*r+M,A=(M+1)/r,C=Jg(m,A,T*r,r);x[R]=Wn.toHalfFloat((C+.5)/r)}this.dispose();const{marginalWeights:_,conditionalWeights:w}=this;_.image={width:c,height:1,data:p},_.needsUpdate=!0,w.image={width:r,height:c,data:x},w.needsUpdate=!0,this.totalSum=b,this.map=s}}const rh=6,O_=0,z_=1,N_=2,B_=3,U_=4,dn=new Q,wt=new Q,$g=new Pe,bs=new Pl,ev=new Q,Ts=new Q,L_=new Q(0,1,0);class H_{constructor(){const a=new ln(new Float32Array(4),1,1);a.format=tt,a.type=ut,a.wrapS=$n,a.wrapT=$n,a.generateMipmaps=!1,a.minFilter=Le,a.magFilter=Le,this.tex=a,this.count=0}updateFrom(a,s=[]){const r=this.tex,c=Math.max(a.length*rh,1),f=Math.ceil(Math.sqrt(c));r.image.width!==f&&(r.dispose(),r.image.data=new Float32Array(f*f*4),r.image.width=f,r.image.height=f);const u=r.image.data;for(let d=0,g=a.length;d<g;d++){const b=a[d],v=d*rh*4;let p=0;for(let _=0;_<rh*4;_++)u[v+_]=0;b.getWorldPosition(wt),u[v+p++]=wt.x,u[v+p++]=wt.y,u[v+p++]=wt.z;let x=O_;if(b.isRectAreaLight&&b.isCircular?x=z_:b.isSpotLight?x=N_:b.isDirectionalLight?x=B_:b.isPointLight&&(x=U_),u[v+p++]=x,u[v+p++]=b.color.r,u[v+p++]=b.color.g,u[v+p++]=b.color.b,u[v+p++]=b.intensity,b.getWorldQuaternion(bs),b.isRectAreaLight)dn.set(b.width,0,0).applyQuaternion(bs),u[v+p++]=dn.x,u[v+p++]=dn.y,u[v+p++]=dn.z,p++,wt.set(0,b.height,0).applyQuaternion(bs),u[v+p++]=wt.x,u[v+p++]=wt.y,u[v+p++]=wt.z,u[v+p++]=dn.cross(wt).length()*(b.isCircular?Math.PI/4:1);else if(b.isSpotLight){const _=b.radius||0;ev.setFromMatrixPosition(b.matrixWorld),Ts.setFromMatrixPosition(b.target.matrixWorld),$g.lookAt(ev,Ts,L_),bs.setFromRotationMatrix($g),dn.set(1,0,0).applyQuaternion(bs),u[v+p++]=dn.x,u[v+p++]=dn.y,u[v+p++]=dn.z,p++,wt.set(0,1,0).applyQuaternion(bs),u[v+p++]=wt.x,u[v+p++]=wt.y,u[v+p++]=wt.z,u[v+p++]=Math.PI*_*_,u[v+p++]=_,u[v+p++]=b.decay,u[v+p++]=b.distance,u[v+p++]=Math.cos(b.angle),u[v+p++]=Math.cos(b.angle*(1-b.penumbra)),u[v+p++]=b.iesMap?s.indexOf(b.iesMap):-1}else if(b.isPointLight){const _=dn.setFromMatrixPosition(b.matrixWorld);u[v+p++]=_.x,u[v+p++]=_.y,u[v+p++]=_.z,p++,p+=4,p+=1,u[v+p++]=b.decay,u[v+p++]=b.distance}else if(b.isDirectionalLight){const _=dn.setFromMatrixPosition(b.matrixWorld),w=wt.setFromMatrixPosition(b.target.matrixWorld);Ts.subVectors(_,w).normalize(),u[v+p++]=Ts.x,u[v+p++]=Ts.y,u[v+p++]=Ts.z}}this.count=a.length;const m=Hh(u.buffer);return this.hash!==m?(this.hash=m,r.needsUpdate=!0,!0):!1}}function tv(h,a,s,r,c){if(a>r)throw new Error;const f=h.length/a,u=h.constructor.BYTES_PER_ELEMENT*8;let m=1;switch(h.constructor){case Uint8Array:case Uint16Array:case Uint32Array:m=2**u-1;break;case Int8Array:case Int16Array:case Int32Array:m=2**(u-1)-1;break}for(let d=0;d<f;d++){const g=4*d,b=a*d;for(let v=0;v<r;v++)s[c+g+v]=a>=v+1?h[b+v]/m:0}}class I_ extends CT{constructor(){super(),this._textures=[],this.type=ut,this.format=tt,this.internalFormat="RGBA32F"}updateAttribute(a,s){const r=this._textures[a];r.updateFrom(s);const c=r.image,f=this.image;if(c.width!==f.width||c.height!==f.height)throw new Error("FloatAttributeTextureArray: Attribute must be the same dimensions when updating single layer.");const{width:u,height:m,data:d}=f,b=u*m*4*a;let v=s.itemSize;v===3&&(v=4),tv(r.image.data,v,d,4,b),this.dispose(),this.needsUpdate=!0}setAttributes(a){const s=a[0].count,r=a.length;for(let v=0,p=r;v<p;v++)if(a[v].count!==s)throw new Error("FloatAttributeTextureArray: All attributes must have the same item count.");const c=this._textures;for(;c.length<r;){const v=new Vv;c.push(v)}for(;c.length>r;)c.pop();for(let v=0,p=r;v<p;v++)c[v].updateFrom(a[v]);const u=c[0].image,m=this.image;(u.width!==m.width||u.height!==m.height||u.depth!==r)&&(m.width=u.width,m.height=u.height,m.depth=r,m.data=new Float32Array(m.width*m.height*m.depth*4));const{data:d,width:g,height:b}=m;for(let v=0,p=r;v<p;v++){const x=c[v],w=g*b*4*v;let T=a[v].itemSize;T===3&&(T=4),tv(x.image.data,T,d,4,w)}this.dispose(),this.needsUpdate=!0}}class F_ extends I_{updateNormalAttribute(a){this.updateAttribute(0,a)}updateTangentAttribute(a){this.updateAttribute(1,a)}updateUvAttribute(a){this.updateAttribute(2,a)}updateColorAttribute(a){this.updateAttribute(3,a)}updateFrom(a,s,r,c){this.setAttributes([a,s,r,c])}}function Fh(h,a){return h.uuid<a.uuid?1:h.uuid>a.uuid?-1:0}function Eh(h){return`${h.source.uuid}:${h.colorSpace}`}function G_(h){const a=new Set,s=[];for(let r=0,c=h.length;r<c;r++){const f=h[r],u=Eh(f);a.has(u)||(a.add(u),s.push(f))}return s}function V_(h){const a=h.map(r=>r.iesMap||null).filter(r=>r),s=new Set(a);return Array.from(s).sort(Fh)}function q_(h){const a=new Set;for(let r=0,c=h.length;r<c;r++){const f=h[r];for(const u in f){const m=f[u];m&&m.isTexture&&a.add(m)}}const s=Array.from(a);return G_(s).sort(Fh)}function P_(h){const a=[];return h.traverse(s=>{s.visible&&(s.isRectAreaLight||s.isSpotLight||s.isPointLight||s.isDirectionalLight)&&a.push(s)}),a.sort(Fh)}const Gh=47,nv=Gh*4;class j_{constructor(){this._features={}}isUsed(a){return a in this._features}setUsed(a,s=!0){s===!1?delete this._features[a]:this._features[a]=!0}reset(){this._features={}}}class Y_ extends ln{constructor(){super(new Float32Array(4),1,1),this.format=tt,this.type=ut,this.wrapS=$n,this.wrapT=$n,this.minFilter=Le,this.magFilter=Le,this.generateMipmaps=!1,this.features=new j_}updateFrom(a,s){function r(_,w,T=-1){if(w in _&&_[w]){const M=Eh(_[w]);return v[M]}else return T}function c(_,w,T){return w in _?_[w]:T}function f(_,w,T,M){const R=_[w]&&_[w].isTexture?_[w]:null;if(R){R.matrixAutoUpdate&&R.updateMatrix();const A=R.matrix.elements;let C=0;T[M+C++]=A[0],T[M+C++]=A[3],T[M+C++]=A[6],C++,T[M+C++]=A[1],T[M+C++]=A[4],T[M+C++]=A[7],C++}return 8}let u=0;const m=a.length*Gh,d=Math.ceil(Math.sqrt(m))||1,{image:g,features:b}=this,v={};for(let _=0,w=s.length;_<w;_++)v[Eh(s[_])]=_;g.width!==d&&(this.dispose(),g.data=new Float32Array(d*d*4),g.width=d,g.height=d);const p=g.data;b.reset();for(let _=0,w=a.length;_<w;_++){const T=a[_];if(T.isFogVolumeMaterial){b.setUsed("FOG");for(let A=0;A<nv;A++)p[u+A]=0;p[u+0+0]=T.color.r,p[u+0+1]=T.color.g,p[u+0+2]=T.color.b,p[u+8+3]=c(T,"emissiveIntensity",0),p[u+12+0]=T.emissive.r,p[u+12+1]=T.emissive.g,p[u+12+2]=T.emissive.b,p[u+52+1]=T.density,p[u+52+3]=0,p[u+56+2]=4,u+=nv;continue}p[u++]=T.color.r,p[u++]=T.color.g,p[u++]=T.color.b,p[u++]=r(T,"map"),p[u++]=c(T,"metalness",0),p[u++]=r(T,"metalnessMap"),p[u++]=c(T,"roughness",0),p[u++]=r(T,"roughnessMap"),p[u++]=c(T,"ior",1.5),p[u++]=c(T,"transmission",0),p[u++]=r(T,"transmissionMap"),p[u++]=c(T,"emissiveIntensity",0),"emissive"in T?(p[u++]=T.emissive.r,p[u++]=T.emissive.g,p[u++]=T.emissive.b):(p[u++]=0,p[u++]=0,p[u++]=0),p[u++]=r(T,"emissiveMap"),p[u++]=r(T,"normalMap"),"normalScale"in T?(p[u++]=T.normalScale.x,p[u++]=T.normalScale.y):(p[u++]=1,p[u++]=1),p[u++]=c(T,"clearcoat",0),p[u++]=r(T,"clearcoatMap"),p[u++]=c(T,"clearcoatRoughness",0),p[u++]=r(T,"clearcoatRoughnessMap"),p[u++]=r(T,"clearcoatNormalMap"),"clearcoatNormalScale"in T?(p[u++]=T.clearcoatNormalScale.x,p[u++]=T.clearcoatNormalScale.y):(p[u++]=1,p[u++]=1),u++,p[u++]=c(T,"sheen",0),"sheenColor"in T?(p[u++]=T.sheenColor.r,p[u++]=T.sheenColor.g,p[u++]=T.sheenColor.b):(p[u++]=0,p[u++]=0,p[u++]=0),p[u++]=r(T,"sheenColorMap"),p[u++]=c(T,"sheenRoughness",0),p[u++]=r(T,"sheenRoughnessMap"),p[u++]=r(T,"iridescenceMap"),p[u++]=r(T,"iridescenceThicknessMap"),p[u++]=c(T,"iridescence",0),p[u++]=c(T,"iridescenceIOR",1.3);const M=c(T,"iridescenceThicknessRange",[100,400]);p[u++]=M[0],p[u++]=M[1],"specularColor"in T?(p[u++]=T.specularColor.r,p[u++]=T.specularColor.g,p[u++]=T.specularColor.b):(p[u++]=1,p[u++]=1,p[u++]=1),p[u++]=r(T,"specularColorMap"),p[u++]=c(T,"specularIntensity",1),p[u++]=r(T,"specularIntensityMap");const R=c(T,"thickness",0)===0&&c(T,"attenuationDistance",1/0)===1/0;if(p[u++]=Number(R),u++,"attenuationColor"in T?(p[u++]=T.attenuationColor.r,p[u++]=T.attenuationColor.g,p[u++]=T.attenuationColor.b):(p[u++]=1,p[u++]=1,p[u++]=1),p[u++]=c(T,"attenuationDistance",1/0),p[u++]=r(T,"alphaMap"),p[u++]=T.opacity,p[u++]=T.alphaTest,!R&&T.transmission>0)p[u++]=0;else switch(T.side){case Ko:p[u++]=1;break;case Oh:p[u++]=-1;break;case Rh:p[u++]=0;break}p[u++]=Number(c(T,"matte",!1)),p[u++]=Number(c(T,"castShadow",!0)),p[u++]=Number(T.vertexColors)|Number(T.flatShading)<<1,p[u++]=Number(T.transparent),u+=f(T,"map",p,u),u+=f(T,"metalnessMap",p,u),u+=f(T,"roughnessMap",p,u),u+=f(T,"transmissionMap",p,u),u+=f(T,"emissiveMap",p,u),u+=f(T,"normalMap",p,u),u+=f(T,"clearcoatMap",p,u),u+=f(T,"clearcoatNormalMap",p,u),u+=f(T,"clearcoatRoughnessMap",p,u),u+=f(T,"sheenColorMap",p,u),u+=f(T,"sheenRoughnessMap",p,u),u+=f(T,"iridescenceMap",p,u),u+=f(T,"iridescenceThicknessMap",p,u),u+=f(T,"specularColorMap",p,u),u+=f(T,"specularIntensityMap",p,u),u+=f(T,"alphaMap",p,u)}const x=Hh(p.buffer);return this.hash!==x?(this.hash=x,this.needsUpdate=!0,!0):!1}}const iv=new Pt;function k_(h){return h?`${h.uuid}:${h.version}`:null}function X_(h,a){for(const s in a)s in h&&(h[s]=a[s])}class av extends DT{constructor(a,s,r){const c={format:tt,type:hh,minFilter:Et,magFilter:Et,wrapS:pn,wrapT:pn,generateMipmaps:!1,...r};super(a,s,1,c),X_(this.texture,c),this.texture.setTextures=(...u)=>{this.setTextures(...u)},this.hashes=[null];const f=new Os(new K_);this.fsQuad=f}setTextures(a,s,r=this.width,c=this.height){const f=a.getRenderTarget(),u=a.toneMapping,m=a.getClearAlpha();a.getClearColor(iv);const d=s.length||1;(r!==this.width||c!==this.height||this.depth!==d)&&(this.setSize(r,c,d),this.hashes=new Array(d).fill(null)),a.setClearColor(0,0),a.toneMapping=OT;const g=this.fsQuad,b=this.hashes;let v=!1;for(let p=0,x=d;p<x;p++){const _=s[p],w=k_(_);_&&(b[p]!==w||_.isWebGLRenderTarget)&&(_.matrixAutoUpdate=!1,_.matrix.identity(),g.material.map=_,a.setRenderTarget(this,p),g.render(a),_.updateMatrix(),_.matrixAutoUpdate=!0,b[p]=w,v=!0)}return g.material.map=null,a.setClearColor(iv,m),a.setRenderTarget(f),a.toneMapping=u,v}dispose(){super.dispose(),this.fsQuad.dispose()}}class K_ extends $o{get map(){return this.uniforms.map.value}set map(a){this.uniforms.map.value=a}constructor(){super({uniforms:{map:{value:null}},vertexShader:`
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
			`})}}function Z_(h,a=Math.random()){for(let s=h.length-1;s>0;s--){const r=Math.floor(a()*(s+1)),c=h[s];h[s]=h[r],h[r]=c}return h}class Q_{constructor(a,s,r=Math.random){const c=a**s,f=new Uint16Array(c);let u=c;for(let m=0;m<c;m++)f[m]=m;this.samples=new Float32Array(s),this.strataCount=a,this.reset=function(){for(let m=0;m<c;m++)f[m]=m;u=0},this.reshuffle=function(){u=0},this.next=function(){const{samples:m}=this;u>=f.length&&(Z_(f,r),this.reshuffle());let d=f[u++];for(let g=0;g<s;g++)m[g]=(d%a+r())/a,d=Math.floor(d/a);return m}}}class W_{constructor(a,s,r=Math.random){let c=0;for(const d of s)c+=d;const f=new Float32Array(c),u=[];let m=0;for(const d of s){const g=new Q_(a,d,r);g.samples=new Float32Array(f.buffer,m,g.samples.length),m+=g.samples.length*4,u.push(g)}this.samples=f,this.strataCount=a,this.next=function(){for(const d of u)d.next();return f},this.reshuffle=function(){for(const d of u)d.reshuffle()},this.reset=function(){for(const d of u)d.reset()}}}class J_{constructor(a=0){this.m=2147483648,this.a=1103515245,this.c=12345,this.seed=a}nextInt(){return this.seed=(this.a*this.seed+this.c)%this.m,this.seed}nextFloat(){return this.nextInt()/(this.m-1)}}class $_ extends ln{constructor(a=1,s=1,r=8){super(new Float32Array(1),1,1,tt,ut),this.minFilter=Le,this.magFilter=Le,this.strata=r,this.sampler=null,this.generator=new J_,this.stableNoise=!1,this.random=()=>this.stableNoise?this.generator.nextFloat():Math.random(),this.init(a,s,r)}init(a=this.image.height,s=this.image.width,r=this.strata){const{image:c}=this;if(c.width===s&&c.height===a&&this.sampler!==null)return;const f=new Array(a*s).fill(4),u=new W_(r,f,this.random);c.width=s,c.height=a,c.data=u.samples,this.sampler=u,this.dispose(),this.next()}next(){this.sampler.next(),this.needsUpdate=!0}reset(){this.sampler.reset(),this.generator.seed=0}}function e2(h,a=Math.random){for(let s=h.length-1;s>0;s--){const r=~~((a()-1e-6)*s),c=h[s];h[s]=h[r],h[r]=c}}function t2(h,a){h.fill(0);for(let s=0;s<a;s++)h[s]=1}class sv{constructor(a){this.count=0,this.size=-1,this.sigma=-1,this.radius=-1,this.lookupTable=null,this.score=null,this.binaryPattern=null,this.resize(a),this.setSigma(1.5)}findVoid(){const{score:a,binaryPattern:s}=this;let r=1/0,c=-1;for(let f=0,u=s.length;f<u;f++){if(s[f]!==0)continue;const m=a[f];m<r&&(r=m,c=f)}return c}findCluster(){const{score:a,binaryPattern:s}=this;let r=-1/0,c=-1;for(let f=0,u=s.length;f<u;f++){if(s[f]!==1)continue;const m=a[f];m>r&&(r=m,c=f)}return c}setSigma(a){if(a===this.sigma)return;const s=~~(Math.sqrt(20*a**2)+1),r=2*s+1,c=new Float32Array(r*r),f=a*a;for(let u=-s;u<=s;u++)for(let m=-s;m<=s;m++){const d=(s+m)*r+u+s,g=u*u+m*m;c[d]=Math.E**(-g/(2*f))}this.lookupTable=c,this.sigma=a,this.radius=s}resize(a){this.size!==a&&(this.size=a,this.score=new Float32Array(a*a),this.binaryPattern=new Uint8Array(a*a))}invert(){const{binaryPattern:a,score:s,size:r}=this;s.fill(0);for(let c=0,f=a.length;c<f;c++)if(a[c]===0){const u=~~(c/r),m=c-u*r;this.updateScore(m,u,1),a[c]=1}else a[c]=0}updateScore(a,s,r){const{size:c,score:f,lookupTable:u}=this,m=this.radius,d=2*m+1;for(let g=-m;g<=m;g++)for(let b=-m;b<=m;b++){const v=(m+b)*d+g+m,p=u[v];let x=a+g;x=x<0?c+x:x%c;let _=s+b;_=_<0?c+_:_%c;const w=_*c+x;f[w]+=r*p}}addPointIndex(a){this.binaryPattern[a]=1;const s=this.size,r=~~(a/s),c=a-r*s;this.updateScore(c,r,1),this.count++}removePointIndex(a){this.binaryPattern[a]=0;const s=this.size,r=~~(a/s),c=a-r*s;this.updateScore(c,r,-1),this.count--}copy(a){this.resize(a.size),this.score.set(a.score),this.binaryPattern.set(a.binaryPattern),this.setSigma(a.sigma),this.count=a.count}}class n2{constructor(){this.random=Math.random,this.sigma=1.5,this.size=64,this.majorityPointsRatio=.1,this.samples=new sv(1),this.savedSamples=new sv(1)}generate(){const{samples:a,savedSamples:s,sigma:r,majorityPointsRatio:c,size:f}=this;a.resize(f),a.setSigma(r);const u=Math.floor(f*f*c),m=a.binaryPattern;t2(m,u),e2(m,this.random);for(let v=0,p=m.length;v<p;v++)m[v]===1&&a.addPointIndex(v);for(;;){const v=a.findCluster();a.removePointIndex(v);const p=a.findVoid();if(v===p){a.addPointIndex(v);break}a.addPointIndex(p)}const d=new Uint32Array(f*f);s.copy(a);let g;for(g=a.count-1;g>=0;){const v=a.findCluster();a.removePointIndex(v),d[v]=g,g--}const b=f*f;for(g=s.count;g<b/2;){const v=s.findVoid();s.addPointIndex(v),d[v]=g,g++}for(s.invert();g<b;){const v=s.findCluster();s.removePointIndex(v),d[v]=g,g++}return{data:d,maxValue:b}}}function i2(h){return h>=3?4:h}function a2(h){switch(h){case 1:return Zo;case 2:return wv;default:return tt}}class s2 extends ln{constructor(a=64,s=1){super(new Float32Array(4),1,1,tt,ut),this.minFilter=Le,this.magFilter=Le,this.size=a,this.channels=s,this.update()}update(){const a=this.channels,s=this.size,r=new n2;r.channels=a,r.size=s;const c=i2(a),f=a2(c);(this.image.width!==s||f!==this.format)&&(this.image.width=s,this.image.height=s,this.image.data=new Float32Array(s**2*c),this.format=f,this.dispose());const u=this.image.data;for(let m=0,d=a;m<d;m++){const g=r.generate(),b=g.data,v=g.maxValue;for(let p=0,x=b.length;p<x;p++){const _=b[p]/v;u[p*c+m]=_}}this.needsUpdate=!0}}const l2=`

	struct PhysicalCamera {

		float focusDistance;
		float anamorphicRatio;
		float bokehSize;
		int apertureBlades;
		float apertureRotation;

	};

`,r2=`

	struct EquirectHdrInfo {

		sampler2D marginalWeights;
		sampler2D conditionalWeights;
		sampler2D map;

		float totalSum;

	};

`,o2=`

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

`,c2=`

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

`,u2=`

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

`,f2=`

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
`,h2=`

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

`,d2=`

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


`,m2=`

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

`,p2=`

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

`,g2=`

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

`,v2=`

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

`,kv=`

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
`,lv=`

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
`,y2=`

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

`,b2=`

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

`,T2=`

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

`,x2=`

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

`,S2=`

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

`,_2=`

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

`,A2=`

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

`,w2=`

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

`,E2=`

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

`,M2=`

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

`,R2=`

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
`,C2=`

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

`,D2=`

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

`;class O2 extends Ih{onBeforeRender(){this.setDefine("FEATURE_DOF",this.physicalCamera.bokehSize===0?0:1),this.setDefine("FEATURE_BACKGROUND_MAP",this.backgroundMap?1:0),this.setDefine("FEATURE_FOG",this.materials.features.isUsed("FOG")?1:0)}constructor(a){super({transparent:!0,depthWrite:!1,defines:{FEATURE_MIS:1,FEATURE_RUSSIAN_ROULETTE:1,FEATURE_DOF:1,FEATURE_BACKGROUND_MAP:0,FEATURE_FOG:1,RANDOM_TYPE:2,CAMERA_TYPE:0,DEBUG_MODE:0,ATTR_NORMAL:0,ATTR_TANGENT:1,ATTR_UV:2,ATTR_COLOR:3,MATERIAL_PIXELS:Gh},uniforms:{resolution:{value:new Re},opacity:{value:1},bounces:{value:10},transmissiveBounces:{value:10},filterGlossyFactor:{value:0},physicalCamera:{value:new M_},cameraWorldMatrix:{value:new Pe},invProjectionMatrix:{value:new Pe},bvh:{value:new XS},attributesArray:{value:new F_},materialIndexAttribute:{value:new Gv},materials:{value:new Y_},textures:{value:new av().texture},lights:{value:new H_},iesProfiles:{value:new av(360,180,{type:On,wrapS:$n,wrapT:$n}).texture},environmentIntensity:{value:1},environmentRotation:{value:new Pe},envMapInfo:{value:new D_},backgroundBlur:{value:0},backgroundMap:{value:null},backgroundAlpha:{value:1},backgroundIntensity:{value:1},backgroundRotation:{value:new Pe},seed:{value:0},sobolTexture:{value:null},stratifiedTexture:{value:new $_},stratifiedOffsetTexture:{value:new s2(64,1)}},vertexShader:`

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
				${QS}
				${JS}
				${WS}

				// uniform structs
				${l2}
				${o2}
				${r2}
				${c2}
				${u2}

				// random
				#if RANDOM_TYPE == 2 	// Stratified List

					${y2}

				#elif RANDOM_TYPE == 1 	// Sobol

					${lv}
					${Yv}
					${__}

					#define rand(v) sobol(v)
					#define rand2(v) sobol2(v)
					#define rand3(v) sobol3(v)
					#define rand4(v) sobol4(v)

				#else 					// PCG

				${lv}

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
				${v2}
				${m2}
				${kv}
				${p2}
				${g2}

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
				${d2}
				${f2}
				${h2}

				${A2}
				${x2}
				${_2}
				${S2}
				${T2}
				${b2}

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

				${C2}
				${E2}
				${D2}
				${w2}
				${M2}
				${R2}

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

			`}),this.setValues(a)}}function*z2(){const{_renderer:h,_fsQuad:a,_blendQuad:s,_primaryTarget:r,_blendTargets:c,_sobolTarget:f,_subframe:u,alpha:m,material:d}=this,g=new Ds,b=new Ds,v=s.material;let[p,x]=c;for(;;){m?(v.opacity=this._opacityFactor/(this.samples+1),d.blending=Yl,d.opacity=1):(d.opacity=this._opacityFactor/(this.samples+1),d.blending=Ev);const[_,w,T,M]=u,R=r.width,A=r.height;d.resolution.set(R*T,A*M),d.sobolTexture=f.texture,d.stratifiedTexture.init(20,d.bounces+d.transmissiveBounces+5),d.stratifiedTexture.next(),d.seed++;const C=this.tiles.x||1,D=this.tiles.y||1,H=C*D,z=Math.ceil(R*T),j=Math.ceil(A*M),V=Math.floor(_*R),Y=Math.floor(w*A),K=Math.ceil(z/C),G=Math.ceil(j/D);for(let Z=0;Z<D;Z++)for(let W=0;W<C;W++){const te=h.getRenderTarget(),X=h.autoClear,ne=h.getScissorTest();h.getScissor(g),h.getViewport(b);let ie=W,ue=Z;if(!this.stableTiles){const se=this._currentTile%(C*D);ie=se%C,ue=~~(se/C),this._currentTile=se+1}const pe=D-ue-1;r.scissor.set(V+ie*K,Y+pe*G,Math.min(K,z-ie*K),Math.min(G,j-pe*G)),r.viewport.set(V,Y,z,j),h.setRenderTarget(r),h.setScissorTest(!0),h.autoClear=!1,a.render(h),h.setViewport(b),h.setScissor(g),h.setScissorTest(ne),h.setRenderTarget(te),h.autoClear=X,m&&(v.target1=p.texture,v.target2=r.texture,h.setRenderTarget(x),s.render(h),h.setRenderTarget(te)),this.samples+=1/H,W===C-1&&Z===D-1&&(this.samples=Math.round(this.samples)),yield}[p,x]=[x,p]}}const rv=new Pt;class ov{get material(){return this._fsQuad.material}set material(a){this._fsQuad.material.removeEventListener("recompilation",this._compileFunction),a.addEventListener("recompilation",this._compileFunction),this._fsQuad.material=a}get target(){return this._alpha?this._blendTargets[1]:this._primaryTarget}set alpha(a){this._alpha!==a&&(a||(this._blendTargets[0].dispose(),this._blendTargets[1].dispose()),this._alpha=a,this.reset())}get alpha(){return this._alpha}get isCompiling(){return!!this._compilePromise}constructor(a){this.camera=null,this.tiles=new Re(3,3),this.stableNoise=!1,this.stableTiles=!0,this.samples=0,this._subframe=new Ds(0,0,1,1),this._opacityFactor=1,this._renderer=a,this._alpha=!1,this._fsQuad=new Os(new O2),this._blendQuad=new Os(new x_),this._task=null,this._currentTile=0,this._compilePromise=null,this._sobolTarget=new w_().generate(a),this._primaryTarget=new Vl(1,1,{format:tt,type:ut,magFilter:Le,minFilter:Le}),this._blendTargets=[new Vl(1,1,{format:tt,type:ut,magFilter:Le,minFilter:Le}),new Vl(1,1,{format:tt,type:ut,magFilter:Le,minFilter:Le})],this._compileFunction=()=>{const s=this.compileMaterial(this._fsQuad._mesh);s.then(()=>{this._compilePromise===s&&(this._compilePromise=null)}),this._compilePromise=s},this.material.addEventListener("recompilation",this._compileFunction)}compileMaterial(){return this._renderer.compileAsync(this._fsQuad._mesh)}setCamera(a){const{material:s}=this;s.cameraWorldMatrix.copy(a.matrixWorld),s.invProjectionMatrix.copy(a.projectionMatrixInverse),s.physicalCamera.updateFrom(a);let r=0;a.projectionMatrix.elements[15]>0&&(r=1),a.isEquirectCamera&&(r=2),s.setDefine("CAMERA_TYPE",r),this.camera=a}setSize(a,s){a=Math.ceil(a),s=Math.ceil(s),!(this._primaryTarget.width===a&&this._primaryTarget.height===s)&&(this._primaryTarget.setSize(a,s),this._blendTargets[0].setSize(a,s),this._blendTargets[1].setSize(a,s),this.reset())}getSize(a){a.x=this._primaryTarget.width,a.y=this._primaryTarget.height}dispose(){this._primaryTarget.dispose(),this._blendTargets[0].dispose(),this._blendTargets[1].dispose(),this._sobolTarget.dispose(),this._fsQuad.dispose(),this._blendQuad.dispose(),this._task=null}reset(){const{_renderer:a,_primaryTarget:s,_blendTargets:r}=this,c=a.getRenderTarget(),f=a.getClearAlpha();a.getClearColor(rv),a.setRenderTarget(s),a.setClearColor(0,0),a.clearColor(),a.setRenderTarget(r[0]),a.setClearColor(0,0),a.clearColor(),a.setRenderTarget(r[1]),a.setClearColor(0,0),a.clearColor(),a.setClearColor(rv,f),a.setRenderTarget(c),this.samples=0,this._task=null,this.material.stratifiedTexture.stableNoise=this.stableNoise,this.stableNoise&&(this.material.seed=0,this.material.stratifiedTexture.reset())}update(){this.material.onBeforeRender(),!this.isCompiling&&(this._task||(this._task=z2.call(this)),this._task.next())}}const ya=new Re,cv=new Re,Po=new fh,jo=new Pt;class N2 extends ln{constructor(a=512,s=512){super(new Float32Array(a*s*4),a,s,tt,ut,Mv,pn,$n,Et,Et),this.generationCallback=null}update(){this.dispose(),this.needsUpdate=!0;const{data:a,width:s,height:r}=this.image;for(let c=0;c<s;c++)for(let f=0;f<r;f++){cv.set(s,r),ya.set(c/s,f/r),ya.x-=.5,ya.y=1-ya.y,Po.theta=ya.x*2*Math.PI,Po.phi=ya.y*Math.PI,Po.radius=1,this.generationCallback(Po,ya,cv,jo);const m=4*(f*s+c);a[m+0]=jo.r,a[m+1]=jo.g,a[m+2]=jo.b,a[m+3]=1}}copy(a){return super.copy(a),this.generationCallback=a.generationCallback,this}}const uv=new Q;class Xv extends N2{constructor(a=512){super(a,a),this.topColor=new Pt().set(16777215),this.bottomColor=new Pt().set(0),this.exponent=2,this.generationCallback=(s,r,c,f)=>{uv.setFromSpherical(s);const u=uv.y*.5+.5;f.lerpColors(this.bottomColor,this.topColor,u**this.exponent)}}copy(a){return super.copy(a),this.topColor.copy(a.topColor),this.bottomColor.copy(a.bottomColor),this}}class B2 extends $o{get map(){return this.uniforms.map.value}set map(a){this.uniforms.map.value=a}get opacity(){return this.uniforms.opacity.value}set opacity(a){this.uniforms&&(this.uniforms.opacity.value=a)}constructor(a){super({uniforms:{map:{value:null},opacity:{value:1}},vertexShader:`
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
			`}),this.setValues(a)}}class U2 extends $o{constructor(){super({uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:`
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

				${kv}

				void main() {

					vec3 rayDirection = equirectUvToDirection( vUv );
					rayDirection.x *= flipEnvMap;
					gl_FragColor = textureCube( envMap, rayDirection );

				}`}),this.depthWrite=!1,this.depthTest=!1}}class fv{constructor(a){this._renderer=a,this._quad=new Os(new U2)}generate(a,s=null,r=null){if(!a.isCubeTexture)throw new Error("CubeToEquirectMaterial: Source can only be cube textures.");const c=a.images[0],f=this._renderer,u=this._quad;s===null&&(s=4*c.height),r===null&&(r=2*c.height);const m=new Vl(s,r,{type:ut,colorSpace:c.colorSpace}),d=c.height,g=Math.log2(d)-2,b=1/d,v=1/(3*Math.max(Math.pow(2,g),112));u.material.defines.CUBEUV_MAX_MIP=`${g}.0`,u.material.defines.CUBEUV_TEXEL_WIDTH=v,u.material.defines.CUBEUV_TEXEL_HEIGHT=b,u.material.uniforms.envMap.value=a,u.material.uniforms.flipEnvMap.value=a.isRenderTargetTexture?1:-1,u.material.needsUpdate=!0;const p=f.getRenderTarget(),x=f.autoClear;f.autoClear=!0,f.setRenderTarget(m),u.render(f),f.setRenderTarget(p),f.autoClear=x;const _=new Uint16Array(s*r*4),w=new Float32Array(s*r*4);f.readRenderTargetPixels(m,0,0,s,r,w),m.dispose();for(let M=0,R=w.length;M<R;M++)_[M]=Wn.toHalfFloat(w[M]);const T=new ln(_,s,r,tt,On);return T.minFilter=zT,T.magFilter=Et,T.wrapS=pn,T.wrapT=pn,T.mapping=Mv,T.needsUpdate=!0,T}dispose(){this._quad.dispose()}}function L2(h){return h.extensions.get("EXT_float_blend")}const xs=new Re;class H2{get multipleImportanceSampling(){return!!this._pathTracer.material.defines.FEATURE_MIS}set multipleImportanceSampling(a){this._pathTracer.material.setDefine("FEATURE_MIS",a?1:0)}get transmissiveBounces(){return this._pathTracer.material.transmissiveBounces}set transmissiveBounces(a){this._pathTracer.material.transmissiveBounces=a}get bounces(){return this._pathTracer.material.bounces}set bounces(a){this._pathTracer.material.bounces=a}get filterGlossyFactor(){return this._pathTracer.material.filterGlossyFactor}set filterGlossyFactor(a){this._pathTracer.material.filterGlossyFactor=a}get samples(){return this._pathTracer.samples}get target(){return this._pathTracer.target}get tiles(){return this._pathTracer.tiles}get stableNoise(){return this._pathTracer.stableNoise}set stableNoise(a){this._pathTracer.stableNoise=a}get isCompiling(){return!!this._pathTracer.isCompiling}constructor(a){this._renderer=a,this._generator=new v_,this._pathTracer=new ov(a),this._queueReset=!1,this._clock=new NT,this._compilePromise=null,this._lowResPathTracer=new ov(a),this._lowResPathTracer.tiles.set(1,1),this._quad=new Os(new B2({map:null,transparent:!0,blending:Yl,premultipliedAlpha:a.getContextAttributes().premultipliedAlpha})),this._materials=null,this._previousEnvironment=null,this._previousBackground=null,this._internalBackground=null,this.renderDelay=100,this.minSamples=5,this.fadeDuration=500,this.enablePathTracing=!0,this.pausePathTracing=!1,this.dynamicLowRes=!1,this.lowResScale=.25,this.renderScale=1,this.synchronizeRenderSize=!0,this.rasterizeScene=!0,this.renderToCanvas=!0,this.textureSize=new Re(1024,1024),this.rasterizeSceneCallback=(s,r)=>{this._renderer.render(s,r)},this.renderToCanvasCallback=(s,r,c)=>{const f=r.autoClear;r.autoClear=!1,c.render(r),r.autoClear=f},this.setScene(new Dh,new Jo)}setBVHWorker(a){this._generator.setBVHWorker(a)}setScene(a,s,r={}){a.updateMatrixWorld(!0),s.updateMatrixWorld();const c=this._generator;if(c.setObjects(a),this._buildAsync)return c.generateAsync(r.onProgress).then(f=>this._updateFromResults(a,s,f));{const f=c.generate();return this._updateFromResults(a,s,f)}}setSceneAsync(...a){this._buildAsync=!0;const s=this.setScene(...a);return this._buildAsync=!1,s}setCamera(a){this.camera=a,this.updateCamera()}updateCamera(){const a=this.camera;a.updateMatrixWorld(),this._pathTracer.setCamera(a),this._lowResPathTracer.setCamera(a),this.reset()}updateMaterials(){const a=this._pathTracer.material,s=this._renderer,r=this._materials,c=this.textureSize,f=q_(r);a.textures.setTextures(s,f,c.x,c.y),a.materials.updateFrom(r,f),this.reset()}updateLights(){const a=this.scene,s=this._renderer,r=this._pathTracer.material,c=P_(a),f=V_(c);r.lights.updateFrom(c,f),r.iesProfiles.setTextures(s,f),this.reset()}updateEnvironment(){const a=this.scene,s=this._pathTracer.material;if(this._internalBackground&&(this._internalBackground.dispose(),this._internalBackground=null),s.backgroundBlur=a.backgroundBlurriness,s.backgroundIntensity=a.backgroundIntensity??1,s.backgroundRotation.makeRotationFromEuler(a.backgroundRotation).invert(),a.background===null)s.backgroundMap=null,s.backgroundAlpha=0;else if(a.background.isColor){this._colorBackground=this._colorBackground||new Xv(16);const r=this._colorBackground;r.topColor.equals(a.background)||(r.topColor.set(a.background),r.bottomColor.set(a.background),r.update()),s.backgroundMap=r,s.backgroundAlpha=1}else if(a.background.isCubeTexture){if(a.background!==this._previousBackground){const r=new fv(this._renderer).generate(a.background);this._internalBackground=r,s.backgroundMap=r,s.backgroundAlpha=1}}else s.backgroundMap=a.background,s.backgroundAlpha=1;if(s.environmentIntensity=a.environment!==null?a.environmentIntensity??1:0,s.environmentRotation.makeRotationFromEuler(a.environmentRotation).invert(),this._previousEnvironment!==a.environment&&a.environment!==null)if(a.environment.isCubeTexture){const r=new fv(this._renderer).generate(a.environment);s.envMapInfo.updateFrom(r)}else s.envMapInfo.updateFrom(a.environment);this._previousEnvironment=a.environment,this._previousBackground=a.background,this.reset()}_updateFromResults(a,s,r){const{materials:c,geometry:f,bvh:u,bvhChanged:m,needsMaterialIndexUpdate:d}=r;this._materials=c;const b=this._pathTracer.material;return m&&(b.bvh.updateFrom(u),b.attributesArray.updateFrom(f.attributes.normal,f.attributes.tangent,f.attributes.uv,f.attributes.color)),d&&b.materialIndexAttribute.updateFrom(f.attributes.materialIndex),this._previousScene=a,this.scene=a,this.camera=s,this.updateCamera(),this.updateMaterials(),this.updateEnvironment(),this.updateLights(),r}renderSample(){const a=this._lowResPathTracer,s=this._pathTracer,r=this._renderer,c=this._clock,f=this._quad;this._updateScale(),this._queueReset&&(s.reset(),a.reset(),this._queueReset=!1,f.material.opacity=0,c.start());const u=c.getDelta()*1e3,m=c.getElapsedTime()*1e3;if(!this.pausePathTracing&&this.enablePathTracing&&this.renderDelay<=m&&!this.isCompiling&&s.update(),s.alpha=s.material.backgroundAlpha!==1||!L2(r),a.alpha=s.alpha,this.renderToCanvas){const d=this._renderer,g=this.minSamples;if(m>=this.renderDelay&&this.samples>=this.minSamples&&(this.fadeDuration!==0?f.material.opacity=Math.min(f.material.opacity+u/this.fadeDuration,1):f.material.opacity=1),!this.enablePathTracing||this.samples<g||f.material.opacity<1){if(this.dynamicLowRes&&!this.isCompiling){a.samples<1&&(a.material=s.material,a.update());const b=f.material.opacity;f.material.opacity=1-f.material.opacity,f.material.map=a.target.texture,f.render(d),f.material.opacity=b}(!this.dynamicLowRes&&this.rasterizeScene||this.dynamicLowRes&&this.isCompiling)&&this.rasterizeSceneCallback(this.scene,this.camera)}this.enablePathTracing&&f.material.opacity>0&&(f.material.opacity<1&&(f.material.blending=this.dynamicLowRes?BT:Ev),f.material.map=s.target.texture,this.renderToCanvasCallback(s.target,d,f),f.material.blending=Yl)}}reset(){this._queueReset=!0,this._pathTracer.samples=0}dispose(){this._quad.dispose(),this._quad.material.dispose(),this._pathTracer.dispose()}_updateScale(){if(this.synchronizeRenderSize){this._renderer.getDrawingBufferSize(xs);const a=Math.floor(this.renderScale*xs.x),s=Math.floor(this.renderScale*xs.y);if(this._pathTracer.getSize(xs),xs.x!==a||xs.y!==s){const r=this.lowResScale;this._pathTracer.setSize(a,s),this._lowResPathTracer.setSize(Math.floor(a*r),Math.floor(s*r))}}}}class I2{constructor(a,s,r,c=()=>{},f){this.renderer=a,this.scene=s,this.camera=r,this.onStatus=c,this.prepareCapture=f,this.enabled=!1,this.failed=!1,this.dirty=!0,this.lastMotion=performance.now(),this.lastMatrix=new Pe,this.lastProjection=new Pe,this.environment=new Xv(256),this.environment.topColor.set("#c6d4df"),this.environment.bottomColor.set("#8f9292"),this.environment.exponent=1,this.environment.update(),this.lastReported=-1}setEnabled(a){return this.failed&&a?!1:(this.enabled=a,this.dirty=!0,this.lastMotion=performance.now(),a?this.onStatus({enabled:!0,state:"preparing",samples:0}):(this.pathTracer?.reset(),this.onStatus({enabled:!1,state:"realtime",samples:0})),this.enabled)}invalidate(){this.dirty=!0,this.lastMotion=performance.now()}render(){if(!this.enabled||this.failed||(this.camera.updateMatrixWorld(),(!this.lastMatrix.equals(this.camera.matrixWorld)||!this.lastProjection.equals(this.camera.projectionMatrix))&&(this.lastMatrix.copy(this.camera.matrixWorld),this.lastProjection.copy(this.camera.projectionMatrix),this.lastMotion=performance.now(),this.pathTracer?.updateCamera(),this.pathTracer?.reset()),performance.now()-this.lastMotion<600))return!1;try{if(this.pathTracer||(this.pathTracer=new H2(this.renderer),this.pathTracer.bounces=7,this.pathTracer.filterGlossyFactor=.4,this.pathTracer.tiles.set(2,2),this.pathTracer.textureSize.set(512,512),this.pathTracer.renderScale=Math.min(.85,1/Math.max(window.devicePixelRatio||1,1)),this.pathTracer.minSamples=32,this.pathTracer.fadeDuration=1200,this.pathTracer.dynamicLowRes=!1,this.pathTracer.lowResScale=.2),this.dirty){const r=this.scene.environment,c=this.prepareCapture?.();try{this.scene.environment=this.environment,this.pathTracer.setScene(this.scene,this.camera)}finally{this.scene.environment=r,c?.()}this.dirty=!1}this.pathTracer.renderSample();const s=Math.floor(this.pathTracer.samples);return s!==this.lastReported&&(this.lastReported=s,this.onStatus({enabled:!0,state:"tracing",samples:s})),!0}catch(s){return console.warn("Fine lighting could not start; realtime rendering remains available.",s.message),this.failed=!0,this.enabled=!1,this.onStatus({enabled:!1,state:"unavailable",samples:0}),!1}}inspect(){return{enabled:this.enabled,failed:this.failed,samples:this.pathTracer?.samples||0,dirty:this.dirty}}dispose(){this.pathTracer?.dispose(),this.environment.dispose()}}const hv={walls:["WALL_","Walls","WALLS_","wall_"],ceilings:["CEILING_","Ceiling","ROOF_","ceiling_"],schemeA:["SCHEME_A_","SchemeA","scheme_a_"],schemeB:["SCHEME_B_","SchemeB","scheme_b_"]},F2={walls:"WALL_",ceilings:"CEILING_",schemeA:"SCHEME_A_",schemeB:"SCHEME_B_"},G2=new Set(["position","normal","tangent","uv","uv1","uv2","uv3","color"]);function V2(h,a){return Object.keys(hv).filter(s=>{if(a.isCategory)return a.isCategory(h,s);const r=a.visibility?.[s],c=r?.length?r:hv[s];for(let f=h;f;f=f.parent)if(c.some(u=>f.name.startsWith(u))||f.userData?.category===s)return!0;return!1})}function dv(h){for(let a=h;a;a=a.parent)if(!a.visible)return!1;return!0}function q2(h){return Object.keys(h.attributes).sort().map(a=>`${a}:${h.attributes[a].itemSize}`).join(",")}function P2(h){let a=h.index?.array.byteLength||0;for(const s of Object.values(h.attributes))a+=s.array.byteLength;return a}function j2(h,a,s){const r=new zn,c=new Map,f=[],u=[];for(let m=a;m<a+s;m+=1){const d=h.index?h.index.getX(m):m;c.has(d)||(c.set(d,c.size),f.push(d)),u.push(c.get(d))}for(const[m,d]of Object.entries(h.attributes)){const g=new Float32Array(f.length*d.itemSize);for(let b=0;b<f.length;b+=1)for(let v=0;v<d.itemSize;v+=1)g[b*d.itemSize+v]=d.getComponent(f[b],v);r.setAttribute(m,new ct(g,d.itemSize))}return r.setIndex(u),r}function mv(h,a){const s=a.determinant();if(Math.abs(s)<1e-12)throw new Error("Static rendering does not support a singular mesh transform.");if(h.applyMatrix4(a),s<0){if(h.index)for(let c=0;c<h.index.count;c+=3){const f=h.index.getX(c+1);h.index.setX(c+1,h.index.getX(c+2)),h.index.setX(c+2,f)}else for(const c of Object.values(h.attributes))for(let f=0;f<c.count;f+=3)for(let u=0;u<c.itemSize;u+=1){const m=c.getComponent(f+1,u);c.setComponent(f+1,u,c.getComponent(f+2,u)),c.setComponent(f+2,u,m)}const r=h.getAttribute("tangent");if(r?.itemSize===4)for(let c=0;c<r.count;c+=1)r.setW(c,-r.getW(c))}return h.computeBoundingBox(),h.computeBoundingSphere(),h}function Y2(h){const a=h.geometry,s=a.index?.count??a.attributes.position.count,r=Math.max(0,a.drawRange.start),c=Math.min(s,r+a.drawRange.count);return(Array.isArray(h.material)?a.groups:[{start:0,count:s,materialIndex:0}]).map(u=>{const m=Math.max(r,u.start),d=Math.min(c,u.start+u.count);return{start:m,count:Math.max(0,d-m),material:Array.isArray(h.material)?h.material[u.materialIndex]:h.material}}).filter(u=>u.material&&u.count>0)}function k2(h,a={}){h.updateMatrixWorld(!0);const s=new Fl;s.name="STATIC_RENDER_MODEL";const r=new Map,c=new Map,f=new Set,u={sourceMeshes:0,sourceDrawCalls:0,renderedMeshes:0,renderedDrawCalls:0,opaqueBatches:0,retainedGlassMeshes:0,lights:0,sourceTriangles:0,renderedTriangles:0,geometryBytes:0};function m(d){const g=d.join("|");if(!r.has(g)){let b=s;for(const v of d){const p=new Fl;p.name=`${F2[v]}STATIC_GROUP`,p.userData.category=v,b.add(p),b=p}r.set(g,b)}return r.get(g)}try{h.traverse(g=>{if(g.isLight){const w=g.clone(!1);if(w.matrix.copy(g.matrixWorld),w.matrixAutoUpdate=!1,w.visible=dv(g),s.add(w),g.target){g.target.updateWorldMatrix(!0,!1);const T=new Wo;T.name=`${g.name}_STATIC_TARGET`,T.matrix.copy(g.target.matrixWorld),T.matrixAutoUpdate=!1,w.target=T,s.add(T)}u.lights+=1;return}if(!g.isMesh)return;u.sourceMeshes+=1;const b=g.geometry;if(g.isSkinnedMesh||g.isInstancedMesh||Object.keys(b.morphAttributes).length||Object.keys(b.attributes).some(w=>!G2.has(w)))throw new Error(`Static rendering needs a separate implementation for ${g.name||"this mesh"}.`);const v=Y2(g);if(v.some(w=>w.start%3||w.count%3))throw new Error(`Non-triangle draw range on ${g.name}.`);const p=V2(g,a),x=dv(g);if(u.sourceDrawCalls+=v.length,u.sourceTriangles+=v.reduce((w,T)=>w+T.count/3,0),(Array.isArray(g.material)?g.material:[g.material]).some(w=>w?.transparent||w?.transmission>0)){const w=mv(b.clone(),g.matrixWorld);f.add(w);const T=new nn(w,g.material);T.name=g.name,T.visible=x,T.castShadow=g.castShadow,T.receiveShadow=g.receiveShadow,T.renderOrder=g.renderOrder,T.layers.mask=g.layers.mask,m(p).add(T),u.retainedGlassMeshes+=1,u.renderedDrawCalls+=v.length,u.renderedTriangles+=v.reduce((M,R)=>M+R.count/3,0);return}for(const w of v){const T=mv(j2(b,w.start,w.count),g.matrixWorld),M=[p.join("|"),w.material.uuid,q2(T),g.castShadow,g.receiveShadow,g.renderOrder,g.layers.mask,x].join(";");c.has(M)||c.set(M,{types:p,material:w.material,castShadow:g.castShadow,receiveShadow:g.receiveShadow,renderOrder:g.renderOrder,layerMask:g.layers.mask,visible:x,geometries:[],names:[]});const R=c.get(M);R.geometries.push(T),R.names.push(g.name),f.add(T)}});let d=0;for(const g of c.values()){const b=YT(g.geometries,!1);if(!b)throw new Error("Static geometry attributes could not be merged.");for(const p of g.geometries)p.dispose(),f.delete(p);b.computeBoundingBox(),b.computeBoundingSphere(),f.add(b);const v=new nn(b,g.material);v.name=`STATIC_BATCH_${d++}`,v.userData.sourceMeshNames=g.names,v.castShadow=g.castShadow,v.receiveShadow=g.receiveShadow,v.renderOrder=g.renderOrder,v.layers.mask=g.layerMask,v.visible=g.visible,m(g.types).add(v),u.opaqueBatches+=1,u.renderedDrawCalls+=1,u.renderedTriangles+=b.index.count/3}u.renderedMeshes=u.opaqueBatches+u.retainedGlassMeshes;for(const g of f)u.geometryBytes+=P2(g);return s.updateMatrixWorld(!0),{model:s,stats:u,dispose(){for(const g of f)g.dispose();f.clear()}}}catch(d){for(const g of f)g.dispose();throw d}}class X2{constructor(a){this.spots=[],this.points=[],this.lastPosition=new Q(1/0,1/0,1/0),a.traverse(s=>{s.isSpotLight?this.spots.push(s):s.isPointLight&&this.points.push(s)}),this.positions=new Map([...this.spots,...this.points].map(s=>[s,s.getWorldPosition(new Q)]))}update(a,s=!1){if(!(!s&&a.distanceToSquared(this.lastPosition)<.16)){this.lastPosition.copy(a);for(const[r,c]of[[this.spots,8],[this.points,4]]){const f=[...r].sort((m,d)=>this.positions.get(m).distanceToSquared(a)-this.positions.get(d).distanceToSquared(a)),u=new Set(f.slice(0,c));for(const m of r)m.visible=u.has(m)}}}fullScene(){const a=[...this.spots,...this.points],s=a.map(r=>r.visible);return a.forEach(r=>{r.visible=!0}),()=>a.forEach((r,c)=>{r.visible=s[c]})}inspect(){const a=[...this.spots,...this.points];return{retainedPhysicalLights:a.length,realtimeLocalLights:a.filter(s=>s.visible).length,fullLightsForPathTracing:!0}}}const oh={walls:["WALL_","Walls","WALLS_","wall_"],ceilings:["CEILING_","Ceiling","ROOF_","ceiling_"],schemeA:["SCHEME_A_","SchemeA","scheme_a_"],schemeB:["SCHEME_B_","SchemeB","scheme_b_"]};class K2{constructor(a,s,r){this.container=a,this.onStatus=s,this.onChange=r,this.config={},this.settings={walls:!0,ceilings:!1,scheme:"A"},this.scene=new Dh,this.scene.background=new Pt("#ffffff"),this.camera=new Jo(40,1,.05,500),this.camera.position.set(32,34,42);try{this.renderer=new UT({antialias:!0,alpha:!1,powerPreference:"high-performance"})}catch{throw new Error("这个浏览器暂时无法开启 3D 显示。请使用支持 WebGL 的浏览器重新打开。")}this.renderer.setPixelRatio(this.displayPixelRatio()),this.renderer.outputColorSpace=Cs,this.renderer.toneMapping=LT,this.renderer.toneMappingExposure=.07,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=HT,this.renderer.shadowMap.autoUpdate=!1,this.renderer.shadowMap.needsUpdate=!0,this.renderer.domElement.setAttribute("aria-label","青海文学馆三维模型；拖拽旋转，滚轮或双指缩放"),this.renderer.domElement.setAttribute("role","img"),this.renderer.domElement.addEventListener("webglcontextlost",u=>{u.preventDefault(),s({state:"error",message:"3D 显示已暂停。请刷新页面重新加载。"})}),a.appendChild(this.renderer.domElement),this.controls=new Rx(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.08,this.controls.minDistance=.8,this.controls.maxDistance=130,this.controls.maxPolarAngle=Math.PI/2-.02,this.controls.screenSpacePanning=!0,this.controls.target.set(0,0,0),this.controls.addEventListener("start",()=>{this.flight=null}),this.scene.add(new IT(16777215,13158338,.9));const c=new uh(16777215,1.8);c.position.set(18,38,18),c.castShadow=!0,c.shadow.mapSize.set(2048,2048),c.shadow.camera.left=c.shadow.camera.bottom=-34,c.shadow.camera.right=c.shadow.camera.top=34,c.shadow.camera.near=.5,c.shadow.camera.far=100,c.shadow.bias=-15e-5,c.shadow.normalBias=.05,this.scene.add(c),this.keyLight=c;const f=new uh(16775404,.45);f.position.set(-20,15,-20),this.scene.add(f),this.pmrem=new FT(this.renderer),this.environment=this.pmrem.fromScene(new Vx,.04),this.scene.environment=this.environment.texture,this.scene.environmentIntensity=.35,this.progressive=new I2(this.renderer,this.scene,this.camera,u=>this.onChange({lighting:u}),()=>this.lightBudget?.fullScene()),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(a),this.resize(),this.lastFrameTime=performance.now(),this.frameMeasurements=[],this.animate=this.animate.bind(this),this.animate(),this.inspect=()=>({loaded:!!this.model,meshCount:this.meshCount||0,version:this.config.version||null,walkableHoleCount:this.config.walkableHoles?.length||0,renderStats:this.staticRender?.stats||null,drawCalls:this.renderer.info.render.calls,renderPixelRatio:this.renderer.getPixelRatio(),lightingBudget:this.lightBudget?.inspect()||null,frameTimings:this.frameMeasurements.length?Object.fromEntries(["delta","controls","draw"].map(u=>[u,this.frameMeasurements.reduce((m,d)=>m+d[u],0)/this.frameMeasurements.length])):null,joystick:{...this.walkControls?.joystick||{x:0,y:0}},lookJoystick:{...this.walkControls?.lookJoystick||{x:0,y:0}},camera:this.camera.position.toArray(),direction:this.camera.getWorldDirection(new Q).toArray(),fov:this.camera.fov,target:this.controls.target.toArray(),progressive:this.progressive?.inspect(),firstPerson:this.walkControls?.active||!1,locked:document.pointerLockElement===this.renderer.domElement,lastKey:this.walkControls?.lastKey,blockedSteps:this.walkControls?.blockedSteps||0,colliderCount:this.walkControls?.colliders.length||0,eyeHeight:this.walkControls?.eyeHeight||1.65,settings:{...this.settings},view:this.activeView||"overview",capabilities:this.capabilities||{},modelBounds:this.bounds?{min:this.bounds.min.toArray(),max:this.bounds.max.toArray()}:null,visibleByCategory:this.model?Object.fromEntries(Object.keys(oh).map(u=>[u,this.countCategory(u)])):{}})}async load(){this.onStatus({state:"loading",message:"正在读取展馆模型"});try{const a=new URL("./",window.location.href),s=await fetch(new URL("models/view-config.json",a));if(s.ok&&s.headers.get("content-type")?.includes("application/json"))this.config=await s.json();else if(!s.ok&&s.status!==404)throw new Error("视图配置读取失败");const r=new kT,c=this.config.modelUrl||"models/museum.glb",f=new URL(c.replace(/^\/+/,""),a).href,u=await r.loadAsync(f,d=>{this.onStatus({state:"loading",message:"正在读取展馆模型",progress:d.total?Math.round(d.loaded/d.total*100):null})});if(this.disposed)return;this.model=u.scene,this.meshCount=0,this.model.traverse(d=>{if(!d.isMesh)return;this.meshCount+=1,d.castShadow=!0,d.receiveShadow=!0;const g=Array.isArray(d.material)?d.material:[d.material];for(const b of g)b.map&&(b.map.anisotropy=Math.min(8,this.renderer.capabilities.getMaxAnisotropy()))}),this.preparingShaders=!0;try{this.staticRender=k2(this.model,{isCategory:(d,g)=>this.isCategory(d,g)}),this.renderModel=this.staticRender.model}catch(d){console.warn("Static batching unavailable; source geometry retained",d.message),this.renderModel=this.model}this.scene.add(this.renderModel),this.lightBudget=new X2(this.renderModel),this.bounds=new Rt().setFromObject(this.model),this.center=this.bounds.getCenter(new Q);const m=this.bounds.getSize(new Q);this.modelSize=Math.max(m.x,m.z,m.y),this.controls.maxDistance=this.modelSize*3,this.camera.far=this.modelSize*10,this.camera.updateProjectionMatrix(),this.keyLight.target.position.copy(this.center),this.scene.add(this.keyLight.target),this.capabilities=Object.fromEntries(Object.keys(oh).map(d=>[d,this.hasCategory(d)])),this.walkControls=new jx(this.camera,this.renderer.domElement,this.model,{...this.config,defaultBounds:{min:this.bounds.min.toArray(),max:this.bounds.max.toArray()}},d=>{if(d.jumpRoom!==void 0){const g=this.config.rooms?.[d.jumpRoom];g&&(this.room(g.id),this.onChange({selectedRoom:g.id}))}d.firstPerson===!1&&(this.controls.enabled=!0,this.controls.maxPolarAngle=Math.PI-.08,this.controls.target.copy(this.camera.position).addScaledVector(this.camera.getWorldDirection(new Q),4),this.controls.update()),this.onChange(d)});for(const d of this.config.lights||[]){const g=new Mh(d.color||"#fff1d6",d.intensity||12,d.distance||9,2);g.position.set(...d.position),this.scene.add(g)}if(this.applyVisibility(),this.overview(!1),this.lightBudget.update(this.controls.target,!0),this.onStatus({state:"loading",message:"正在准备灯光与材质"}),this.renderer.compileAsync&&await this.renderer.compileAsync(this.scene,this.camera),this.preparingShaders=!1,this.disposed)return;this.onChange({config:this.config,capabilities:this.capabilities}),this.onStatus({state:"ready",message:"模型已载入"})}catch(a){this.preparingShaders=!1,console.error("Museum model could not be loaded",a),this.onStatus({state:"error",message:"展馆模型暂时未能载入。请检查网络后重试，或稍后重新打开链接。"})}}isCategory(a,s){const r=this.config.visibility?.[s],c=Array.isArray(r)&&r.length?r:oh[s];let f=a;for(;f&&f!==this.scene;){if(c.some(u=>f.name.startsWith(u))||f.userData?.category===s)return!0;f=f.parent}return!1}hasCategory(a){let s=!1;return this.model.traverse(r=>{r.isMesh&&this.isCategory(r,a)&&(s=!0)}),s}countCategory(a){let s=0,r=0;return this.model.traverse(c=>{if(!c.isMesh||!this.isCategory(c,a))return;s+=1;let f=c,u=!0;for(;f&&f!==this.scene;)f.visible||(u=!1),f=f.parent;u&&(r+=1)}),{total:s,visible:r}}applyVisibility(a){if(Object.assign(this.settings,a||{}),this.progressive?.invalidate(),!this.model)return;const s=this.renderModel&&this.renderModel!==this.model?[this.model,this.renderModel]:[this.model];for(const r of s)r.traverse(c=>{if(!c.isMesh)return;let f=!0;this.isCategory(c,"walls")&&(f=f&&this.settings.walls),this.isCategory(c,"ceilings")&&(f=f&&this.settings.ceilings),this.isCategory(c,"schemeA")&&(f=f&&this.settings.scheme==="A"),this.isCategory(c,"schemeB")&&(f=f&&this.settings.scheme==="B"),c.visible=f});this.renderer.shadowMap.needsUpdate=!0}frameBounds(a,s=1.12){const r=a.getCenter(new Q),c=new Q(.63,.85,.9).normalize(),f=new Q(c.z,0,-c.x).normalize(),u=c.clone().cross(f).normalize(),m=Math.tan(jl.degToRad(40)/2),d=m*this.camera.aspect;let g=0;for(const b of[a.min.x,a.max.x])for(const v of[a.min.y,a.max.y])for(const p of[a.min.z,a.max.z]){const x=new Q(b,v,p).sub(r),_=x.dot(c);g=Math.max(g,Math.abs(x.dot(f))/d+_,Math.abs(x.dot(u))/m+_)}return{position:r.clone().addScaledVector(c,g*s).toArray(),target:r.toArray()}}overview(a=!0){if(!this.model)return;this.walkControls?.disable(),this.activeView="overview";const s=this.config.overview||this.frameBounds(this.bounds,1.14),r=this.camera.aspect<1.5?this.frameBounds(this.bounds,1.1):s;this.goTo(r,a)}room(a,s=!1){const r=this.config.rooms?.find(f=>f.id===a);if(!r)return;if(this.walkControls?.active){this.flight=null,this.walkControls.setView(r.enter),this.activeView=`walk:${a}`;return}this.activeView=s?`interior:${a}`:a;let c=r;if(s)if(r.enter)c=r.enter;else{const f=r.target||[0,0,0],u=r.bounds,m=u?u.min[1]+1.65:1.65,d=u?Math.min((u.max[2]-u.min[2])*.32,4):3;c={position:[f[0],m,f[2]+d],target:[f[0],m,f[2]-2]}}else!c.position&&r.bounds&&(c=this.frameBounds(new Rt(new Q(...r.bounds.min),new Q(...r.bounds.max)),1.1));c.position&&c.target&&this.goTo(c,!0,s)}startWalk(a){const s=this.config.rooms?.find(r=>r.id===a)||this.config.rooms?.[0];!s?.enter||!this.walkControls||(this.flight=null,this.controls.enabled=!1,this.applyVisibility({ceilings:!0}),this.activeView=`walk:${s.id}`,this.walkControls.enable(s.enter),this.walkControls.mobile||this.progressive.setEnabled(!0))}fineLighting(a){return this.progressive?.setEnabled(a)}endWalk(){this.walkControls?.disable()}joystick(a,s){this.walkControls&&(this.walkControls.joystick={x:a,y:s})}lookJoystick(a,s){this.walkControls&&(this.walkControls.lookJoystick={x:a,y:s})}goTo(a,s,r=!1){if(!a?.position||!a?.target)return;this.controls.maxPolarAngle=r?Math.PI-.08:Math.PI/2-.02,this.camera.fov=r?a.fov||60:40,this.camera.updateProjectionMatrix();const c=new Q(...a.position),f=new Q(...a.target);if(!s||window.matchMedia("(prefers-reduced-motion: reduce)").matches){this.flight=null,this.camera.position.copy(c),this.controls.target.copy(f),this.controls.update();return}this.flight={start:performance.now(),from:this.camera.position.clone(),targetFrom:this.controls.target.clone(),to:c,targetTo:f,duration:1e3}}resize(){const{width:a,height:s}=this.container.getBoundingClientRect();!a||!s||(this.camera.aspect=a/s,this.camera.updateProjectionMatrix(),this.renderer.setPixelRatio(this.displayPixelRatio()),this.renderer.setSize(a,s),this.progressive?.invalidate(),this.model&&this.activeView==="overview"&&this.overview(!1))}displayPixelRatio(){return window.matchMedia("(pointer: coarse)").matches||window.innerWidth<=900?1:Math.min(window.devicePixelRatio||1,1.8)}animate(){if(this.disposed)return;if(this.frame=requestAnimationFrame(this.animate),document.hidden||this.preparingShaders){this.lastFrameTime=performance.now();return}if(this.flight){const c=Math.min((performance.now()-this.flight.start)/this.flight.duration,1),f=c<.5?4*c**3:1-(-2*c+2)**3/2;this.camera.position.lerpVectors(this.flight.from,this.flight.to,f),this.controls.target.lerpVectors(this.flight.targetFrom,this.flight.targetTo,f),c>=1&&(this.flight=null)}const a=performance.now(),s=a-this.lastFrameTime;this.walkControls?.update((a-this.lastFrameTime)/1e3),this.lastFrameTime=a,this.controls.enabled&&this.controls.update(),this.lightBudget?.update(this.walkControls?.active?this.camera.position:this.controls.target);const r=performance.now();this.progressive.render()||this.renderer.render(this.scene,this.camera),this.frameMeasurements.push({delta:s,controls:r-a,draw:performance.now()-r}),this.frameMeasurements.length>120&&this.frameMeasurements.shift()}dispose(){this.disposed=!0,cancelAnimationFrame(this.frame),this.resizeObserver.disconnect(),this.walkControls?.dispose(),this.controls.dispose(),this.progressive?.dispose(),this.environment.dispose(),this.pmrem.dispose(),this.staticRender?.dispose(),this.model?.traverse(a=>{if(!a.isMesh)return;a.geometry.dispose(),(Array.isArray(a.material)?a.material:[a.material]).forEach(r=>{for(const c of Object.values(r))c?.isTexture&&c.dispose();r.dispose()})}),this.renderer.dispose(),this.renderer.domElement.remove()}}function ba({name:h,size:a=18}){const s={expand:k.createElement(k.Fragment,null,k.createElement("path",{d:"M8 3H3v5M16 3h5v5M3 16v5h5M21 16v5h-5"})),reset:k.createElement(k.Fragment,null,k.createElement("path",{d:"M3 10a9 9 0 1 1 1.8 8.1M3 4v6h6"})),enter:k.createElement(k.Fragment,null,k.createElement("path",{d:"M14 3h6v18h-6M3 12h12m-4-4 4 4-4 4"})),wall:k.createElement(k.Fragment,null,k.createElement("path",{d:"M3 20V4h18v16M3 12h18M9 4v8m6 0v8"})),ceiling:k.createElement(k.Fragment,null,k.createElement("path",{d:"m3 9 9-6 9 6-9 6-9-6Zm0 6 9 6 9-6"})),chevron:k.createElement("path",{d:"m8 10 4 4 4-4"}),light:k.createElement(k.Fragment,null,k.createElement("circle",{cx:"12",cy:"12",r:"3.7"}),k.createElement("path",{d:"M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5"})),close:k.createElement("path",{d:"m6 6 12 12M6 18 18 6"}),overview:k.createElement(k.Fragment,null,k.createElement("path",{d:"m3 7 9-4 9 4v10l-9 4-9-4V7Zm0 0 9 4 9-4M12 11v10"}))};return k.createElement("svg",{width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true"},s[h])}function pv({onMove:h,label:a,kind:s}){const[r,c]=Ge.useState({x:0,y:0}),f=Ge.useRef(null),u=Ge.useRef(h);u.current=h;function m(g){if(f.current!==g.pointerId)return;const b=g.currentTarget.getBoundingClientRect(),v=b.width*.32;let p=(g.clientX-b.left-b.width/2)/v,x=(g.clientY-b.top-b.height/2)/v;const _=Math.hypot(p,x);_>1&&(p/=_,x/=_),_<.08&&(p=0,x=0),c({x:p*v,y:x*v}),u.current(p,x)}function d(g){g&&f.current!==g.pointerId||(f.current=null,c({x:0,y:0}),u.current(0,0))}return Ge.useEffect(()=>{const g=()=>d(),b=()=>{document.hidden&&d()};return window.addEventListener("blur",g),document.addEventListener("visibilitychange",b),()=>{window.removeEventListener("blur",g),document.removeEventListener("visibilitychange",b),u.current(0,0)}},[]),k.createElement("div",{className:`joystick joystick-${s}`,role:"application","aria-label":a,onPointerDown:g=>{f.current!==null||g.pointerType==="mouse"&&g.button!==0||(g.preventDefault(),g.stopPropagation(),f.current=g.pointerId,g.currentTarget.setPointerCapture(g.pointerId),m(g))},onPointerMove:m,onPointerUp:d,onPointerCancel:d,onLostPointerCapture:d,onContextMenu:g=>g.preventDefault()},k.createElement("span",{className:"joystick-knob",style:{transform:`translate(${r.x}px, ${r.y}px)`}}),k.createElement("span",{className:"joystick-caption"},a))}function Yo({icon:h,children:a,pressed:s,...r}){return k.createElement("button",{className:`tool-button ${s?"is-pressed":""}`,"aria-pressed":s,...r},k.createElement(ba,{name:h}),k.createElement("span",null,a))}function Z2(){const h=Ge.useRef(null),a=Ge.useRef(null),s=Ge.useRef(null),[r,c]=Ge.useState({state:"loading",message:"正在准备展馆"}),[f,u]=Ge.useState({rooms:[]}),[m,d]=Ge.useState({}),[g,b]=Ge.useState("overview"),[v,p]=Ge.useState(!1),[x,_]=Ge.useState(!0),[w,T]=Ge.useState(!1),[M,R]=Ge.useState("A"),[A,C]=Ge.useState(!1),[D,H]=Ge.useState(!1),[z,j]=Ge.useState(""),[V,Y]=Ge.useState(!1),[K,G]=Ge.useState({enabled:!1,state:"realtime"}),Z=r.state==="ready",W=f.rooms||[],te=W.find(se=>se.id===g);Ge.useEffect(()=>{try{a.current=new K2(h.current,c,ye=>{ye.config&&u(ye.config),ye.capabilities&&d(ye.capabilities),ye.firstPerson!==void 0&&(Y(ye.firstPerson),ye.firstPerson||p(!0)),ye.lighting&&G(ye.lighting),ye.selectedRoom&&b(ye.selectedRoom)}),a.current.load(),window.__museumViewer={inspect:()=>a.current?.inspect()}}catch(ye){c({state:"error",message:ye.message})}const se=()=>H(!!document.fullscreenElement);return document.addEventListener("fullscreenchange",se),()=>{a.current?.dispose(),delete window.__museumViewer,document.removeEventListener("fullscreenchange",se)}},[]);function X(se){b(se),p(!1);const ye=V&&se!=="overview";T(ye),a.current?.applyVisibility({ceilings:ye}),se==="overview"?a.current?.overview():a.current?.room(se)}function ne(){a.current?.endWalk();const se=g==="overview"?W[0]?.id:g;se&&(b(se),p(!0),T(!!m.ceilings),a.current?.applyVisibility({ceilings:!!m.ceilings}),a.current?.room(se,!0))}function ie(){const se=g==="overview"?W[0]?.id:g;se&&(b(se),T(!0),a.current?.startWalk(se))}function ue(){b("overview"),p(!1),_(!0),T(!1),R("A"),a.current?.applyVisibility({walls:!0,ceilings:!1,scheme:"A"}),a.current?.overview()}async function pe(){try{document.fullscreenElement?await document.exitFullscreen():s.current.requestFullscreen?await s.current.requestFullscreen():(j("这个浏览器不支持全屏；可横屏查看空间。"),window.setTimeout(()=>j(""),4e3))}catch{j("全屏暂时不可用；可横屏查看空间。"),window.setTimeout(()=>j(""),4e3)}}return k.createElement("main",{className:`museum-app ${V?"is-walking":""}`,ref:s},k.createElement("header",{className:"app-header"},k.createElement("div",{className:"identity"},k.createElement("h1",null,f.title||"青海文学馆"),k.createElement("p",null,f.subtitle||"空间复原 · 交互浏览")),k.createElement("div",{className:"header-actions"},k.createElement("nav",{className:"project-links","aria-label":"天佑德项目导航"},k.createElement("a",{href:"../projects/"},"天佑德项目"),k.createElement("a",{href:"../digital-campus/#building"},"数字酒厂")),k.createElement("button",{className:"fullscreen-button","aria-label":D?"退出全屏":"全屏",onClick:pe},k.createElement(ba,{name:"expand"}),k.createElement("span",null,D?"退出全屏":"全屏")))),k.createElement("div",{className:"workspace"},k.createElement("nav",{className:"space-nav","aria-label":"空间导航"},k.createElement("h2",null,"空间导航"),k.createElement("div",{className:"room-list"},k.createElement("button",{className:`room-button ${g==="overview"?"selected":""}`,"aria-current":g==="overview"?"true":void 0,onClick:()=>X("overview"),disabled:!Z},k.createElement("span",{className:"room-number"},k.createElement(ba,{name:"overview",size:15})),k.createElement("span",null,"全馆总览")),W.map((se,ye)=>k.createElement("button",{key:se.id,className:`room-button ${g===se.id?"selected":""}`,"aria-current":g===se.id?"true":void 0,onClick:()=>X(se.id),disabled:!Z},k.createElement("span",{className:"room-number"},String(ye+1).padStart(2,"0")),k.createElement("span",null,se.label)))),k.createElement("div",{className:"space-detail"},k.createElement("div",{className:"detail-rule"}),k.createElement("p",{className:"selected-space"},g==="overview"?"全馆总览":te?.label),k.createElement("p",{className:"space-description"},g==="overview"?"从整体布局开始，选择展区近距离浏览。":te?.description||"选择进入空间，以人视角查看展陈。"),k.createElement("button",{className:"enter-button",onClick:v?()=>X(g):ne,disabled:!Z||!W.length||V},k.createElement("span",null,v?"返回俯览":"人视角查看"),k.createElement(ba,{name:"enter"})),k.createElement("button",{className:"walk-button",onClick:V?()=>a.current?.endWalk():ie,disabled:!Z||!W.length},k.createElement(ba,{name:"enter"}),k.createElement("span",null,V?"退出漫游":"第一人称漫游")))),k.createElement("section",{className:"viewport","aria-label":"三维展馆"},k.createElement("div",{className:"canvas-mount",ref:h}),k.createElement("div",{className:"viewport-toolbar","aria-label":"模型显示控制"},k.createElement(Yo,{icon:"wall",pressed:x,disabled:!Z||!m.walls,onClick:()=>{_(!x),a.current?.applyVisibility({walls:!x})}},"墙面"),k.createElement(Yo,{icon:"ceiling",pressed:w,disabled:!Z||!m.ceilings,onClick:()=>{T(!w),a.current?.applyVisibility({ceilings:!w})}},"顶面"),k.createElement("span",{className:"toolbar-divider"}),k.createElement(Yo,{icon:"reset",disabled:!Z,onClick:ue},"重置"),k.createElement("span",{className:"toolbar-divider"}),k.createElement(Yo,{icon:"light",pressed:K.enabled,disabled:!Z||K.state==="unavailable",onClick:()=>a.current?.fineLighting(!K.enabled)},"精细光照")),k.createElement("div",{className:"viewport-bottom"},k.createElement("div",{className:"scheme-controls","aria-label":"雕塑方案选择"},["A","B"].map(se=>k.createElement("button",{key:se,disabled:!Z||!m[`scheme${se}`],className:M===se?"active":"","aria-pressed":M===se,onClick:()=>{R(se),a.current?.applyVisibility({scheme:se})}},"方案 ",se))),k.createElement("p",{className:"gesture-hint"},k.createElement("span",{className:"desktop-hint"},V?"左侧行走 · 右侧转头":"拖拽旋转 · 滚轮缩放"),k.createElement("span",{className:"mobile-hint"},V?"左侧行走 · 右侧转头":"单指旋转 · 双指缩放"))),(K.enabled||K.state==="unavailable")&&k.createElement("p",{className:"lighting-status"},K.state==="unavailable"?"精细光照暂不可用，已保留实时显示":K.state==="tracing"?"精细光照正在细化":"移动时实时显示，停下后细化"),V&&k.createElement(k.Fragment,null,k.createElement("div",{className:"walk-status"},k.createElement("span",null,"左侧行走 · 右侧转头"),k.createElement("button",{onClick:()=>a.current?.endWalk()},"退出漫游")),k.createElement("div",{className:"walk-controls"},k.createElement(pv,{kind:"move",label:"行走摇杆",onMove:(se,ye)=>a.current?.joystick(se,ye)}),k.createElement(pv,{kind:"look",label:"转头摇杆",onMove:(se,ye)=>a.current?.lookJoystick(se,ye)}))),r.state!=="ready"&&k.createElement("div",{className:`loading-overlay ${r.state==="error"?"has-error":""}`,role:"status","aria-live":"polite"},k.createElement("div",{className:"loading-inner"},r.state==="loading"&&k.createElement("div",{className:"loader"}),k.createElement("p",null,r.message),r.progress!=null&&k.createElement("span",{className:"loading-progress"},r.progress,"%"),r.state==="error"&&k.createElement("button",{onClick:()=>window.location.reload()},"重新加载"))),z&&k.createElement("div",{className:"notice",role:"status"},z))),k.createElement("footer",{className:"app-footer"},k.createElement("p",null,"模型依据 ",f.source?.date||"2026.06.25"," 汇报方案"),k.createElement("button",{className:"source-toggle","aria-expanded":A,onClick:()=>C(!A)},"来源与复原说明",k.createElement(ba,{name:"chevron",size:15}))),A&&k.createElement("section",{className:"source-panel","aria-label":"来源与复原说明"},k.createElement("div",null,k.createElement("h2",null,"来源与复原说明"),k.createElement("p",null,f.source?.title||"《【汇报】青海文学馆2026.6.25》"),f.source?.pages&&k.createElement("p",{className:"source-pages"},"参考页码：",Array.isArray(f.source.pages)?f.source.pages.join("、"):f.source.pages),k.createElement("ul",null,(f.source?.notes||["根据室内平面与效果图建立展陈空间；模型用于空间浏览与方案复核。","未提供的尺寸、细部构造与材质按视觉资料近似复原，施工精度尚未核实。","资料未提供建筑外观；查看页展示室内展陈模型。"]).map((se,ye)=>k.createElement("li",{key:ye},se)))),k.createElement("button",{className:"source-close","aria-label":"关闭来源说明",onClick:()=>C(!1)},k.createElement(ba,{name:"close"}))))}jT.createRoot(document.getElementById("root")).render(k.createElement(Z2,null));
