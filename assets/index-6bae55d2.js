import{r as o}from"./index-3b84276c.js";import{c as e}from"./useZIndex-ceae2af0.js";import{c as r}from"./index-f246fd73.js";import{b as t,i as n,h as l}from"./index-b90e8198.js";import{u as a}from"./useClosable-c8b85165.js";import{W as s}from"./button-fe27255e.js";import{g as c,v as i,m as d,U as g,a as p,d as b}from"./index-6b74f525.js";const u=o=>{const{lineWidth:e,fontSizeIcon:r}=o,t=o.fontSizeSM,n=o.lineHeightSM*t+"px";return d(o,{tagFontSize:t,tagLineHeight:n,tagIconSize:r-2*e,tagPaddingHorizontal:8,tagBorderlessBg:o.colorFillTertiary})},m=o=>({defaultBg:new g(o.colorFillQuaternary).onBackground(o.colorBgContainer).toHexString(),defaultColor:o.colorText}),C=c("Tag",(o=>(o=>{const{paddingXXS:e,lineWidth:r,tagPaddingHorizontal:t,componentCls:n}=o,l=t-r,a=e-r;return{[n]:Object.assign(Object.assign({},i(o)),{display:"inline-block",height:"auto",marginInlineEnd:o.marginXS,paddingInline:l,fontSize:o.tagFontSize,lineHeight:o.tagLineHeight,whiteSpace:"nowrap",background:o.defaultBg,border:`${o.lineWidth}px ${o.lineType} ${o.colorBorder}`,borderRadius:o.borderRadiusSM,opacity:1,transition:`all ${o.motionDurationMid}`,textAlign:"start",position:"relative",[`&${n}-rtl`]:{direction:"rtl"},"&, a, a:hover":{color:o.defaultColor},[`${n}-close-icon`]:{marginInlineStart:a,color:o.colorTextDescription,fontSize:o.tagIconSize,cursor:"pointer",transition:`all ${o.motionDurationMid}`,"&:hover":{color:o.colorTextHeading}},[`&${n}-has-color`]:{borderColor:"transparent",[`&, a, a:hover, ${o.iconCls}-close, ${o.iconCls}-close:hover`]:{color:o.colorTextLightSolid}},"&-checkable":{backgroundColor:"transparent",borderColor:"transparent",cursor:"pointer",[`&:not(${n}-checkable-checked):hover`]:{color:o.colorPrimary,backgroundColor:o.colorFillSecondary},"&:active, &-checked":{color:o.colorTextLightSolid},"&-checked":{backgroundColor:o.colorPrimary,"&:hover":{backgroundColor:o.colorPrimaryHover}},"&:active":{backgroundColor:o.colorPrimaryActive}},"&-hidden":{display:"none"},[`> ${o.iconCls} + span, > span + ${o.iconCls}`]:{marginInlineStart:l}}),[`${n}-borderless`]:{borderColor:"transparent",background:o.tagBorderlessBg}}})(u(o))),m);var f=globalThis&&globalThis.__rest||function(o,e){var r={};for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&e.indexOf(t)<0&&(r[t]=o[t]);if(null!=o&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(t=Object.getOwnPropertySymbols(o);n<t.length;n++)e.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(o,t[n])&&(r[t[n]]=o[t[n]])}return r};const h=o.forwardRef(((e,t)=>{const{prefixCls:n,style:l,className:a,checked:s,onChange:c,onClick:i}=e,d=f(e,["prefixCls","style","className","checked","onChange","onClick"]),{getPrefixCls:g,tag:b}=o.useContext(p),u=g("tag",n),[m,h]=C(u),y=r(u,`${u}-checkable`,{[`${u}-checkable-checked`]:s},null==b?void 0:b.className,a,h);return m(o.createElement("span",Object.assign({},d,{ref:t,style:Object.assign(Object.assign({},l),null==b?void 0:b.style),className:y,onClick:o=>{null==c||c(!s),null==i||i(o)}})))})),y=b(["Tag","preset"],(o=>(o=>t(o,((e,r)=>{let{textColor:t,lightBorderColor:n,lightColor:l,darkColor:a}=r;return{[`${o.componentCls}-${e}`]:{color:t,background:l,borderColor:n,"&-inverse":{color:o.colorTextLightSolid,background:a,borderColor:a},[`&${o.componentCls}-borderless`]:{borderColor:"transparent"}}}})))(u(o))),m);const k=(o,e,r)=>{const t="string"!=typeof(n=r)?n:n.charAt(0).toUpperCase()+n.slice(1);var n;return{[`${o.componentCls}-${e}`]:{color:o[`color${r}`],background:o[`color${t}Bg`],borderColor:o[`color${t}Border`],[`&${o.componentCls}-borderless`]:{borderColor:"transparent"}}}},$=b(["Tag","status"],(o=>{const e=u(o);return[k(e,"success","Success"),k(e,"processing","Info"),k(e,"error","Error"),k(e,"warning","Warning")]}),m);var v=globalThis&&globalThis.__rest||function(o,e){var r={};for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&e.indexOf(t)<0&&(r[t]=o[t]);if(null!=o&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(t=Object.getOwnPropertySymbols(o);n<t.length;n++)e.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(o,t[n])&&(r[t[n]]=o[t[n]])}return r};const x=(t,c)=>{const{prefixCls:i,className:d,rootClassName:g,style:b,children:u,icon:m,color:f,onClose:h,closeIcon:k,closable:x,bordered:S=!0}=t,O=v(t,["prefixCls","className","rootClassName","style","children","icon","color","onClose","closeIcon","closable","bordered"]),{getPrefixCls:j,direction:T,tag:P}=o.useContext(p),[E,I]=o.useState(!0);o.useEffect((()=>{"visible"in O&&I(O.visible)}),[O.visible]);const w=n(f),B=l(f),N=w||B,z=Object.assign(Object.assign({backgroundColor:f&&!N?f:void 0},null==P?void 0:P.style),b),H=j("tag",i),[F,L]=C(H),M=r(H,null==P?void 0:P.className,{[`${H}-${f}`]:N,[`${H}-has-color`]:f&&!N,[`${H}-hidden`]:!E,[`${H}-rtl`]:"rtl"===T,[`${H}-borderless`]:!S},d,g,L),W=o=>{o.stopPropagation(),null==h||h(o),o.defaultPrevented||I(!1)},[,D]=a(x,k,(r=>null===r?o.createElement(e,{className:`${H}-close-icon`,onClick:W}):o.createElement("span",{className:`${H}-close-icon`,onClick:W},r)),null,!1),R="function"==typeof O.onClick||u&&"a"===u.type,_=m||null,A=_?o.createElement(o.Fragment,null,_,u&&o.createElement("span",null,u)):u,X=o.createElement("span",Object.assign({},O,{ref:c,className:M,style:z}),A,D,w&&o.createElement(y,{key:"preset",prefixCls:H}),B&&o.createElement($,{key:"status",prefixCls:H}));return F(R?o.createElement(s,{component:"Tag"},X):X)},S=o.forwardRef(x);S.CheckableTag=h;const O=S;export{O as T};
