import{Z as n,l as t,t as e,B as o,j as a,a5 as r,s as i,N as s,_ as c}from"./index-6b74f525.js";import{r as m,e as u,q as f}from"./index-3b84276c.js";import{K as l}from"./useZIndex-ceae2af0.js";const d=()=>({height:0,opacity:0}),p=n=>{const{scrollHeight:t}=n;return{height:t,opacity:1}},v=n=>({height:n?n.offsetHeight:0}),y=(n,t)=>!0===(null==t?void 0:t.deadline)||"height"===t.propertyName,h=function(){return{motionName:`${arguments.length>0&&void 0!==arguments[0]?arguments[0]:"ant"}-motion-collapse`,onAppearStart:d,onEnterStart:d,onAppearActive:p,onEnterActive:p,onLeaveStart:v,onLeaveActive:d,onAppearEnd:y,onEnterEnd:y,onLeaveEnd:y,motionDeadline:500}},g=(n,t,e)=>void 0!==e?e:`${n}-${t}`;var w,O=m.createContext(null),b=[];function $(n){var t=n.match(/^(.*)px$/),e=Number(null==t?void 0:t[1]);return Number.isNaN(e)?function(n){if("undefined"==typeof document)return 0;if(n||void 0===w){var t=document.createElement("div");t.style.width="100%",t.style.height="200px";var e=document.createElement("div"),o=e.style;o.position="absolute",o.top="0",o.left="0",o.pointerEvents="none",o.visibility="hidden",o.width="200px",o.height="150px",o.overflow="hidden",e.appendChild(t),document.body.appendChild(e);var a=t.offsetWidth;e.style.overflow="scroll";var r=t.offsetWidth;a===r&&(r=e.clientWidth),document.body.removeChild(e),w=a-r}return w}():e}var E="rc-util-locker-".concat(Date.now()),K=0;function S(n){var e=!!n,i=m.useState((function(){return K+=1,"".concat(E,"_").concat(K)})),s=t(i,1)[0];o((function(){if(e){var n=function(n){if(!("undefined"!=typeof document&&n&&n instanceof Element))return{width:0,height:0};var t=getComputedStyle(n,"::-webkit-scrollbar"),e=t.width,o=t.height;return{width:$(e),height:$(o)}}(document.body).width,t=document.body.scrollHeight>(window.innerHeight||document.documentElement.clientHeight)&&window.innerWidth>document.body.offsetWidth;a("\nhtml body {\n  overflow-y: hidden;\n  ".concat(t?"width: calc(100% - ".concat(n,"px);"):"","\n}"),s)}else r(s);return function(){r(s)}}),[e,s])}var Z=!1;var C=function(t){return!1!==t&&(n()&&t?"string"==typeof t?document.querySelector(t):"function"==typeof t?t():t:null)},x=m.forwardRef((function(a,r){var c=a.open,f=a.autoLock,l=a.getContainer;a.debug;var d=a.autoDestroy,p=void 0===d||d,v=a.children,y=m.useState(c),h=t(y,2),g=h[0],w=h[1],$=g||c;m.useEffect((function(){(p||c)&&w(c)}),[c,p]);var E=m.useState((function(){return C(l)})),K=t(E,2),x=K[0],D=K[1];m.useEffect((function(){var n=C(l);D(null!=n?n:null)}));var I=function(a,r){var i=m.useState((function(){return n()?document.createElement("div"):null})),s=t(i,1)[0],c=m.useRef(!1),u=m.useContext(O),f=m.useState(b),l=t(f,2),d=l[0],p=l[1],v=u||(c.current?void 0:function(n){p((function(t){return[n].concat(e(t))}))});function y(){s.parentElement||document.body.appendChild(s),c.current=!0}function h(){var n;null===(n=s.parentElement)||void 0===n||n.removeChild(s),c.current=!1}return o((function(){return a?u?u(y):y():h(),h}),[a]),o((function(){d.length&&(d.forEach((function(n){return n()})),p(b))}),[d]),[s,v]}($&&!x),N=t(I,2),j=N[0],z=N[1],P=null!=x?x:j;S(f&&c&&n()&&(P===j||P===document.body));var A=null;v&&i(v)&&r&&(A=v.ref);var L=s(A,r);if(!$||!n()||void 0===x)return null;var F,H=!1===P||("boolean"==typeof F&&(Z=F),Z),W=v;return r&&(W=m.cloneElement(v,{ref:L})),m.createElement(O.Provider,{value:z},H?W:u.createPortal(W,P))}));var D=0,I=c({},f).useId;const N=I?function(n){var t=I();return n||t}:function(n){var e=m.useState("ssr-id"),o=t(e,2),a=o[0],r=o[1];return m.useEffect((function(){var n=D;D+=1,r("rc_unique_".concat(n))}),[]),n||a},j=n=>({animationDuration:n,animationFillMode:"both"}),z=n=>({animationDuration:n,animationFillMode:"both"}),P=function(n,t,e,o){const a=arguments.length>4&&void 0!==arguments[4]&&arguments[4]?"&":"";return{[`\n      ${a}${n}-enter,\n      ${a}${n}-appear\n    `]:Object.assign(Object.assign({},j(o)),{animationPlayState:"paused"}),[`${a}${n}-leave`]:Object.assign(Object.assign({},z(o)),{animationPlayState:"paused"}),[`\n      ${a}${n}-enter${n}-enter-active,\n      ${a}${n}-appear${n}-appear-active\n    `]:{animationName:t,animationPlayState:"running"},[`${a}${n}-leave${n}-leave-active`]:{animationName:e,animationPlayState:"running",pointerEvents:"none"}}},A=new l("antZoomIn",{"0%":{transform:"scale(0.2)",opacity:0},"100%":{transform:"scale(1)",opacity:1}}),L=new l("antZoomOut",{"0%":{transform:"scale(1)"},"100%":{transform:"scale(0.2)",opacity:0}}),F=new l("antZoomBigIn",{"0%":{transform:"scale(0.8)",opacity:0},"100%":{transform:"scale(1)",opacity:1}}),H=new l("antZoomBigOut",{"0%":{transform:"scale(1)"},"100%":{transform:"scale(0.8)",opacity:0}}),W=new l("antZoomUpIn",{"0%":{transform:"scale(0.8)",transformOrigin:"50% 0%",opacity:0},"100%":{transform:"scale(1)",transformOrigin:"50% 0%"}}),R=new l("antZoomUpOut",{"0%":{transform:"scale(1)",transformOrigin:"50% 0%"},"100%":{transform:"scale(0.8)",transformOrigin:"50% 0%",opacity:0}}),_={zoom:{inKeyframes:A,outKeyframes:L},"zoom-big":{inKeyframes:F,outKeyframes:H},"zoom-big-fast":{inKeyframes:F,outKeyframes:H},"zoom-left":{inKeyframes:new l("antZoomLeftIn",{"0%":{transform:"scale(0.8)",transformOrigin:"0% 50%",opacity:0},"100%":{transform:"scale(1)",transformOrigin:"0% 50%"}}),outKeyframes:new l("antZoomLeftOut",{"0%":{transform:"scale(1)",transformOrigin:"0% 50%"},"100%":{transform:"scale(0.8)",transformOrigin:"0% 50%",opacity:0}})},"zoom-right":{inKeyframes:new l("antZoomRightIn",{"0%":{transform:"scale(0.8)",transformOrigin:"100% 50%",opacity:0},"100%":{transform:"scale(1)",transformOrigin:"100% 50%"}}),outKeyframes:new l("antZoomRightOut",{"0%":{transform:"scale(1)",transformOrigin:"100% 50%"},"100%":{transform:"scale(0.8)",transformOrigin:"100% 50%",opacity:0}})},"zoom-up":{inKeyframes:W,outKeyframes:R},"zoom-down":{inKeyframes:new l("antZoomDownIn",{"0%":{transform:"scale(0.8)",transformOrigin:"50% 100%",opacity:0},"100%":{transform:"scale(1)",transformOrigin:"50% 100%"}}),outKeyframes:new l("antZoomDownOut",{"0%":{transform:"scale(1)",transformOrigin:"50% 100%"},"100%":{transform:"scale(0.8)",transformOrigin:"50% 100%",opacity:0}})}},k=(n,t)=>{const{antCls:e}=n,o=`${e}-${t}`,{inKeyframes:a,outKeyframes:r}=_[t];return[P(o,a,r,"zoom-big-fast"===t?n.motionDurationFast:n.motionDurationMid),{[`\n        ${o}-enter,\n        ${o}-appear\n      `]:{transform:"scale(0)",opacity:0,animationTimingFunction:n.motionEaseOutCirc,"&-prepare":{transform:"none"}},[`${o}-leave`]:{animationTimingFunction:n.motionEaseInOutCirc}}]};export{x as P,h as a,P as b,g,k as i,N as u};
