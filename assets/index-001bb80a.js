import{l as e,p as n,o as t,f as o,q as r,k as s,_ as a,t as c,g as i,m as l,v as u,a as f,x as p,y as m,z as d}from"./index-6b74f525.js";import{r as v,R as g,e as y}from"./index-3b84276c.js";import{L as h,r as x}from"./render-098ef8ff.js";import{C,K as b,a as E,b as k,c as N}from"./useZIndex-ceae2af0.js";import{K as O,I as j,E as $}from"./KeyCode-452aa3ca.js";import{c as w}from"./index-f246fd73.js";var P=v.forwardRef((function(o,r){var s=o.prefixCls,a=o.style,c=o.className,i=o.duration,l=void 0===i?4.5:i,u=o.eventKey,f=o.content,p=o.closable,m=o.closeIcon,d=void 0===m?"x":m,g=o.props,y=o.onClick,h=o.onNoticeClose,x=o.times,C=o.hovering,b=v.useState(!1),E=e(b,2),k=E[0],N=E[1],j=C||k,$=function(){h(u)};v.useEffect((function(){if(!j&&l>0){var e=setTimeout((function(){$()}),1e3*l);return function(){clearTimeout(e)}}}),[l,j,x]);var P="".concat(s,"-notice");return v.createElement("div",n({},g,{ref:r,className:w(P,c,t({},"".concat(P,"-closable"),p)),style:a,onMouseEnter:function(e){var n;N(!0),null==g||null===(n=g.onMouseEnter)||void 0===n||n.call(g,e)},onMouseLeave:function(e){var n;N(!1),null==g||null===(n=g.onMouseLeave)||void 0===n||n.call(g,e)},onClick:y}),v.createElement("div",{className:"".concat(P,"-content")},f),p&&v.createElement("a",{tabIndex:0,className:"".concat(P,"-close"),onKeyDown:function(e){"Enter"!==e.key&&"Enter"!==e.code&&e.keyCode!==O.ENTER||$()},onClick:function(e){e.preventDefault(),e.stopPropagation(),$()}},d))})),S=g.createContext({}),R=function(e){var n=e.children,t=e.classNames;return g.createElement(S.Provider,{value:{classNames:t}},n)},I=["className","style","classNames","styles"],M=function(i){var l,u,f,p,m,d,y=i.configList,h=i.placement,x=i.prefixCls,C=i.className,b=i.style,E=i.motion,k=i.onAllNoticeRemoved,N=i.onNoticeClose,O=i.stack,j=v.useContext(S).classNames,$=v.useRef({}),R=v.useState(null),M=e(R,2),A=M[0],T=M[1],F=v.useState([]),H=e(F,2),L=H[0],z=H[1],D=y.map((function(e){return{config:e,key:String(e.key)}})),K=(d={offset:8,threshold:3,gap:16},(u=O)&&"object"===o(u)&&(d.offset=null!==(f=u.offset)&&void 0!==f?f:8,d.threshold=null!==(p=u.threshold)&&void 0!==p?p:3,d.gap=null!==(m=u.gap)&&void 0!==m?m:16),[!!u,d]),W=e(K,2),_=W[0],B=W[1],G=B.offset,X=B.threshold,Y=B.gap,q=_&&(L.length>0||D.length<=X),U="function"==typeof E?E(h):E;return v.useEffect((function(){_&&L.length>1&&z((function(e){return e.filter((function(e){return D.some((function(n){var t=n.key;return e===t}))}))}))}),[L,D,_]),v.useEffect((function(){var e,n;_&&$.current[null===(e=D[D.length-1])||void 0===e?void 0:e.key]&&T($.current[null===(n=D[D.length-1])||void 0===n?void 0:n.key])}),[D,_]),g.createElement(r,n({key:h,className:w(x,"".concat(x,"-").concat(h),null==j?void 0:j.list,C,(l={},t(l,"".concat(x,"-stack"),!!_),t(l,"".concat(x,"-stack-expanded"),q),l)),style:b,keys:D,motionAppear:!0},U,{onAllRemoved:function(){k(h)}}),(function(e,t){var o=e.config,r=e.className,i=e.style,l=e.index,u=o,f=u.key,p=u.times,m=String(f),d=o,v=d.className,y=d.style,C=d.classNames,b=d.styles,E=s(d,I),k=D.findIndex((function(e){return e.key===m})),O={};if(_){var S=D.length-1-(k>-1?k:l-1),R="top"===h||"bottom"===h?"-50%":"0";if(S>0){var M,T,F;O.height=q?null===(M=$.current[m])||void 0===M?void 0:M.offsetHeight:null==A?void 0:A.offsetHeight;for(var H=0,K=0;K<S;K++){var W;H+=(null===(W=$.current[D[D.length-1-K].key])||void 0===W?void 0:W.offsetHeight)+Y}var B=(q?H:S*G)*(h.startsWith("top")?1:-1),X=!q&&null!=A&&A.offsetWidth&&null!==(T=$.current[m])&&void 0!==T&&T.offsetWidth?((null==A?void 0:A.offsetWidth)-2*G*(S<3?S:3))/(null===(F=$.current[m])||void 0===F?void 0:F.offsetWidth):1;O.transform="translate3d(".concat(R,", ").concat(B,"px, 0) scaleX(").concat(X,")")}else O.transform="translate3d(".concat(R,", 0, 0)")}return g.createElement("div",{ref:t,className:w("".concat(x,"-notice-wrapper"),r,null==C?void 0:C.wrapper),style:a(a(a({},i),O),null==b?void 0:b.wrapper),onMouseEnter:function(){return z((function(e){return e.includes(m)?e:[].concat(c(e),[m])}))},onMouseLeave:function(){return z((function(e){return e.filter((function(e){return e!==m}))}))}},g.createElement(P,n({},E,{ref:function(e){k>-1?$.current[m]=e:delete $.current[m]},prefixCls:x,classNames:C,styles:b,className:w(v,null==j?void 0:j.notice),style:y,times:p,key:f,eventKey:f,onNoticeClose:N,hovering:_&&L.length>0})))}))},A=v.forwardRef((function(n,t){var o=n.prefixCls,r=void 0===o?"rc-notification":o,s=n.container,i=n.motion,l=n.maxCount,u=n.className,f=n.style,p=n.onAllRemoved,m=n.stack,d=n.renderNotifications,g=v.useState([]),h=e(g,2),x=h[0],C=h[1],b=function(e){var n,t=x.find((function(n){return n.key===e}));null==t||null===(n=t.onClose)||void 0===n||n.call(t),C((function(n){return n.filter((function(n){return n.key!==e}))}))};v.useImperativeHandle(t,(function(){return{open:function(e){C((function(n){var t,o=c(n),r=o.findIndex((function(n){return n.key===e.key})),s=a({},e);r>=0?(s.times=((null===(t=n[r])||void 0===t?void 0:t.times)||0)+1,o[r]=s):(s.times=0,o.push(s));return l>0&&o.length>l&&(o=o.slice(-l)),o}))},close:function(e){b(e)},destroy:function(){C([])}}}));var E=v.useState({}),k=e(E,2),N=k[0],O=k[1];v.useEffect((function(){var e={};x.forEach((function(n){var t=n.placement,o=void 0===t?"topRight":t;o&&(e[o]=e[o]||[],e[o].push(n))})),Object.keys(N).forEach((function(n){e[n]=e[n]||[]})),O(e)}),[x]);var j=function(e){O((function(n){var t=a({},n);return(t[e]||[]).length||delete t[e],t}))},$=v.useRef(!1);if(v.useEffect((function(){Object.keys(N).length>0?$.current=!0:$.current&&(null==p||p(),$.current=!1)}),[N]),!s)return null;var w=Object.keys(N);return y.createPortal(v.createElement(v.Fragment,null,w.map((function(e){var n=N[e],t=v.createElement(M,{key:e,configList:n,placement:e,prefixCls:r,className:null==u?void 0:u(e),style:null==f?void 0:f(e),motion:i,onNoticeClose:b,onAllNoticeRemoved:j,stack:m});return d?d(t,{prefixCls:r,key:e}):t}))),s)})),T=["getContainer","motion","prefixCls","maxCount","className","style","onAllRemoved","stack","renderNotifications"],F=function(){return document.body},H=0;function L(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=n.getContainer,o=void 0===t?F:t,r=n.motion,a=n.prefixCls,i=n.maxCount,l=n.className,u=n.style,f=n.onAllRemoved,p=n.stack,m=n.renderNotifications,d=s(n,T),g=v.useState(),y=e(g,2),h=y[0],x=y[1],C=v.useRef(),b=v.createElement(A,{container:h,ref:C,prefixCls:a,motion:r,maxCount:i,className:l,style:u,onAllRemoved:f,stack:p,renderNotifications:m}),E=v.useState([]),k=e(E,2),N=k[0],O=k[1],j=v.useMemo((function(){return{open:function(e){var n=function(){for(var e={},n=arguments.length,t=new Array(n),o=0;o<n;o++)t[o]=arguments[o];return t.forEach((function(n){n&&Object.keys(n).forEach((function(t){var o=n[t];void 0!==o&&(e[t]=o)}))})),e}(d,e);null!==n.key&&void 0!==n.key||(n.key="rc-notification-".concat(H),H+=1),O((function(e){return[].concat(c(e),[{type:"open",config:n}])}))},close:function(e){O((function(n){return[].concat(c(n),[{type:"close",key:e}])}))},destroy:function(){O((function(e){return[].concat(c(e),[{type:"destroy"}])}))}}}),[]);return v.useEffect((function(){x(o())})),v.useEffect((function(){C.current&&N.length&&(N.forEach((function(e){switch(e.type){case"open":C.current.open(e.config);break;case"close":C.current.close(e.key);break;case"destroy":C.current.destroy()}})),O((function(e){return e.filter((function(e){return!N.includes(e)}))})))}),[N]),[j,b]}const z=e=>{const{componentCls:n,iconCls:t,boxShadow:o,colorText:r,colorSuccess:s,colorError:a,colorWarning:c,colorInfo:i,fontSizeLG:l,motionEaseInOutCirc:f,motionDurationSlow:p,marginXS:m,paddingXS:d,borderRadiusLG:v,zIndexPopup:g,contentPadding:y,contentBg:h}=e,x=`${n}-notice`,C=new b("MessageMoveIn",{"0%":{padding:0,transform:"translateY(-100%)",opacity:0},"100%":{padding:d,transform:"translateY(0)",opacity:1}}),E=new b("MessageMoveOut",{"0%":{maxHeight:e.height,padding:d,opacity:1},"100%":{maxHeight:0,padding:0,opacity:0}}),k={padding:d,textAlign:"center",[`${n}-custom-content > ${t}`]:{verticalAlign:"text-bottom",marginInlineEnd:m,fontSize:l},[`${x}-content`]:{display:"inline-block",padding:y,background:h,borderRadius:v,boxShadow:o,pointerEvents:"all"},[`${n}-success > ${t}`]:{color:s},[`${n}-error > ${t}`]:{color:a},[`${n}-warning > ${t}`]:{color:c},[`${n}-info > ${t},\n      ${n}-loading > ${t}`]:{color:i}};return[{[n]:Object.assign(Object.assign({},u(e)),{color:r,position:"fixed",top:m,width:"100%",pointerEvents:"none",zIndex:g,[`${n}-move-up`]:{animationFillMode:"forwards"},[`\n        ${n}-move-up-appear,\n        ${n}-move-up-enter\n      `]:{animationName:C,animationDuration:p,animationPlayState:"paused",animationTimingFunction:f},[`\n        ${n}-move-up-appear${n}-move-up-appear-active,\n        ${n}-move-up-enter${n}-move-up-enter-active\n      `]:{animationPlayState:"running"},[`${n}-move-up-leave`]:{animationName:E,animationDuration:p,animationPlayState:"paused",animationTimingFunction:f},[`${n}-move-up-leave${n}-move-up-leave-active`]:{animationPlayState:"running"},"&-rtl":{direction:"rtl",span:{direction:"rtl"}}})},{[n]:{[`${x}-wrapper`]:Object.assign({},k)}},{[`${n}-notice-pure-panel`]:Object.assign(Object.assign({},k),{padding:0,textAlign:"start"})}]},D=i("Message",(e=>{const n=l(e,{height:150});return[z(n)]}),(e=>({zIndexPopup:e.zIndexPopupBase+C+10,contentBg:e.colorBgElevated,contentPadding:`${(e.controlHeightLG-e.fontSize*e.lineHeight)/2}px ${e.paddingSM}px`})));var K=globalThis&&globalThis.__rest||function(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)n.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(t[o[r]]=e[o[r]])}return t};const W={info:v.createElement(j,null),success:v.createElement(E,null),error:v.createElement(k,null),warning:v.createElement($,null),loading:v.createElement(h,null)},_=e=>{let{prefixCls:n,type:t,icon:o,children:r}=e;return v.createElement("div",{className:w(`${n}-custom-content`,`${n}-${t}`)},o||W[t],v.createElement("span",null,r))},B=e=>{const{prefixCls:n,className:t,type:o,icon:r,content:s}=e,a=K(e,["prefixCls","className","type","icon","content"]),{getPrefixCls:c}=v.useContext(f),i=n||c("message"),[,l]=D(i);return v.createElement(P,Object.assign({},a,{prefixCls:i,className:w(t,l,`${i}-notice-pure-panel`),eventKey:"pure",duration:null,content:v.createElement(_,{prefixCls:i,type:o,icon:r},s)}))};function G(e){let n;const t=new Promise((t=>{n=e((()=>{t(!0)}))})),o=()=>{null==n||n()};return o.then=(e,n)=>t.then(e,n),o.promise=t,o}var X=globalThis&&globalThis.__rest||function(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)n.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(t[o[r]]=e[o[r]])}return t};const Y=3,q=e=>{let{children:n,prefixCls:t}=e;const[,o]=D(t);return v.createElement(R,{classNames:{list:o,notice:o}},n)},U=(e,n)=>{let{prefixCls:t,key:o}=n;return v.createElement(q,{prefixCls:t,key:o},e)},Z=v.forwardRef(((e,n)=>{const{top:t,prefixCls:o,getContainer:r,maxCount:s,duration:a=Y,rtl:c,transitionName:i,onAllRemoved:l}=e,{getPrefixCls:u,getPopupContainer:p,message:m}=v.useContext(f),d=o||u("message"),g=v.createElement("span",{className:`${d}-close-x`},v.createElement(N,{className:`${d}-close-icon`})),[y,h]=L({prefixCls:d,style:()=>({left:"50%",transform:"translateX(-50%)",top:null!=t?t:8}),className:()=>w({[`${d}-rtl`]:c}),motion:()=>function(e,n){return{motionName:null!=n?n:`${e}-move-up`}}(d,i),closable:!1,closeIcon:g,duration:a,getContainer:()=>(null==r?void 0:r())||(null==p?void 0:p())||document.body,maxCount:s,onAllRemoved:l,renderNotifications:U});return v.useImperativeHandle(n,(()=>Object.assign(Object.assign({},y),{prefixCls:d,message:m}))),h}));let J=0;function Q(e){const n=v.useRef(null);p();return[v.useMemo((()=>{const e=e=>{var t;null===(t=n.current)||void 0===t||t.close(e)},t=t=>{if(!n.current){const e=()=>{};return e.then=()=>{},e}const{open:o,prefixCls:r,message:s}=n.current,a=`${r}-notice`,{content:c,icon:i,type:l,key:u,className:f,style:p,onClose:m}=t,d=X(t,["content","icon","type","key","className","style","onClose"]);let g=u;return null==g&&(J+=1,g=`antd-message-${J}`),G((n=>(o(Object.assign(Object.assign({},d),{key:g,content:v.createElement(_,{prefixCls:r,type:l,icon:i},c),placement:"top",className:w(l&&`${a}-${l}`,f,null==s?void 0:s.className),style:Object.assign(Object.assign({},null==s?void 0:s.style),p),onClose:()=>{null==m||m(),n()}})),()=>{e(g)})))},o={open:t,destroy:t=>{var o;void 0!==t?e(t):null===(o=n.current)||void 0===o||o.destroy()}};return["info","success","warning","error","loading"].forEach((e=>{o[e]=(n,o,r)=>{let s,a,c;s=n&&"object"==typeof n&&"content"in n?n:{content:n},"function"==typeof o?c=o:(a=o,c=r);const i=Object.assign(Object.assign({onClose:c,duration:a},s),{type:e});return t(i)}})),o}),[]),v.createElement(Z,Object.assign({key:"message-holder"},e,{ref:n}))]}let V=null,ee=e=>e(),ne=[],te={};function oe(){const{prefixCls:e,getContainer:n,duration:t,rtl:o,maxCount:r,top:s}=te,a=null!=e?e:d().getPrefixCls("message"),c=(null==n?void 0:n())||document.body;return{prefixCls:a,getContainer:()=>c,duration:t,rtl:o,maxCount:r,top:s}}const re=v.forwardRef(((e,n)=>{const[t,o]=v.useState(oe),[r,s]=Q(t),a=d(),c=a.getRootPrefixCls(),i=a.getIconPrefixCls(),l=a.getTheme(),u=()=>{o(oe)};return v.useEffect(u,[]),v.useImperativeHandle(n,(()=>{const e=Object.assign({},r);return Object.keys(e).forEach((n=>{e[n]=function(){return u(),r[n].apply(r,arguments)}})),{instance:e,sync:u}})),v.createElement(m,{prefixCls:c,iconPrefixCls:i,theme:l},s)}));function se(){if(!V){const e=document.createDocumentFragment(),n={fragment:e};return V=n,void ee((()=>{x(v.createElement(re,{ref:e=>{const{instance:t,sync:o}=e||{};Promise.resolve().then((()=>{!n.instance&&t&&(n.instance=t,n.sync=o,se())}))}}),e)}))}V.instance&&(ne.forEach((e=>{const{type:n,skipped:t}=e;if(!t)switch(n){case"open":ee((()=>{const n=V.instance.open(Object.assign(Object.assign({},te),e.config));null==n||n.then(e.resolve),e.setCloseFn(n)}));break;case"destroy":ee((()=>{null==V||V.instance.destroy(e.key)}));break;default:ee((()=>{var t;const o=(t=V.instance)[n].apply(t,c(e.args));null==o||o.then(e.resolve),e.setCloseFn(o)}))}})),ne=[])}const ae={open:function(e){const n=G((n=>{let t;const o={type:"open",config:e,resolve:n,setCloseFn:e=>{t=e}};return ne.push(o),()=>{t?ee((()=>{t()})):o.skipped=!0}}));return se(),n},destroy:function(e){ne.push({type:"destroy",key:e}),se()},config:function(e){te=Object.assign(Object.assign({},te),e),ee((()=>{var e;null===(e=null==V?void 0:V.sync)||void 0===e||e.call(V)}))},useMessage:function(e){return Q(e)},_InternalPanelDoNotUseOrYouWillBeFired:B};["success","info","warning","error","loading"].forEach((e=>{ae[e]=function(){for(var n=arguments.length,t=new Array(n),o=0;o<n;o++)t[o]=arguments[o];return function(e,n){const t=G((t=>{let o;const r={type:e,args:n,resolve:t,setCloseFn:e=>{o=e}};return ne.push(r),()=>{o?ee((()=>{o()})):r.skipped=!0}}));return se(),t}(e,t)}}));const ce=ae;export{P as N,R as a,ce as m,L as u};
