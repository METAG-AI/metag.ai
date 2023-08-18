import{c as e}from"./index-f246fd73.js";import{r as t,j as l,F as r,b as a}from"./index-d981ad22.js";import{ab as o,a0 as n,u as i,$ as s,g as c,m,a as g}from"./index-9f063626.js";const h=(e,l)=>{const r=t.useContext(o);return[t.useMemo((()=>{var t;const a=l||n[e],o=null!==(t=null==r?void 0:r[e])&&void 0!==t?t:{};return Object.assign(Object.assign({},"function"==typeof a?a():a),o||{})}),[e,l,r]),t.useMemo((()=>{const e=null==r?void 0:r.locale;return(null==r?void 0:r.exist)&&!e?n.locale:e}),[r])]},p=()=>{const[,e]=i(),l=new s(e.colorBgBase).toHsl().l<.5?{opacity:.65}:{};return t.createElement("svg",{style:l,width:"184",height:"152",viewBox:"0 0 184 152",xmlns:"http://www.w3.org/2000/svg"},t.createElement("g",{fill:"none",fillRule:"evenodd"},t.createElement("g",{transform:"translate(24 31.67)"},t.createElement("ellipse",{fillOpacity:".8",fill:"#F5F5F7",cx:"67.797",cy:"106.89",rx:"67.797",ry:"12.668"}),t.createElement("path",{d:"M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z",fill:"#AEB8C2"}),t.createElement("path",{d:"M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z",fill:"url(#linearGradient-1)",transform:"translate(13.56)"}),t.createElement("path",{d:"M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z",fill:"#F5F5F7"}),t.createElement("path",{d:"M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z",fill:"#DCE0E6"})),t.createElement("path",{d:"M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z",fill:"#DCE0E6"}),t.createElement("g",{transform:"translate(149.65 15.383)",fill:"#FFF"},t.createElement("ellipse",{cx:"20.654",cy:"3.167",rx:"2.849",ry:"2.815"}),t.createElement("path",{d:"M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z"}))))},d=()=>{const[,e]=i(),{colorFill:l,colorFillTertiary:r,colorFillQuaternary:a,colorBgContainer:o}=e,{borderColor:n,shadowColor:c,contentColor:m}=t.useMemo((()=>({borderColor:new s(l).onBackground(o).toHexShortString(),shadowColor:new s(r).onBackground(o).toHexShortString(),contentColor:new s(a).onBackground(o).toHexShortString()})),[l,r,a,o]);return t.createElement("svg",{width:"64",height:"41",viewBox:"0 0 64 41",xmlns:"http://www.w3.org/2000/svg"},t.createElement("g",{transform:"translate(0 1)",fill:"none",fillRule:"evenodd"},t.createElement("ellipse",{fill:c,cx:"32",cy:"33",rx:"32",ry:"7"}),t.createElement("g",{fillRule:"nonzero",stroke:n},t.createElement("path",{d:"M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"}),t.createElement("path",{d:"M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z",fill:m}))))},y=e=>{const{componentCls:t,margin:l,marginXS:r,marginXL:a,fontSize:o,lineHeight:n}=e;return{[t]:{marginInline:r,fontSize:o,lineHeight:n,textAlign:"center",[`${t}-image`]:{height:e.emptyImgHeight,marginBottom:r,opacity:e.opacityImage,img:{height:"100%"},svg:{maxWidth:"100%",height:"100%",margin:"auto"}},[`${t}-description`]:{color:e.colorText},[`${t}-footer`]:{marginTop:l},"&-normal":{marginBlock:a,color:e.colorTextDisabled,[`${t}-description`]:{color:e.colorTextDisabled},[`${t}-image`]:{height:e.emptyImgHeightMD}},"&-small":{marginBlock:r,color:e.colorTextDisabled,[`${t}-image`]:{height:e.emptyImgHeightSM}}}}},f=c("Empty",(e=>{const{componentCls:t,controlHeightLG:l}=e,r=m(e,{emptyImgCls:`${t}-img`,emptyImgHeight:2.5*l,emptyImgHeightMD:l,emptyImgHeightSM:.875*l});return[y(r)]}));var E=globalThis&&globalThis.__rest||function(e,t){var l={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(l[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(l[r[a]]=e[r[a]])}return l};const u=t.createElement(p,null),v=t.createElement(d,null),x=l=>{var{className:r,rootClassName:a,prefixCls:o,image:n=u,description:i,children:s,imageStyle:c,style:m}=l,p=E(l,["className","rootClassName","prefixCls","image","description","children","imageStyle","style"]);const{getPrefixCls:d,direction:y,empty:x}=t.useContext(g),C=d("empty",o),[w,H]=f(C),[M]=h("Empty"),b=void 0!==i?i:null==M?void 0:M.description,S="string"==typeof b?b:"empty";let $=null;return $="string"==typeof n?t.createElement("img",{alt:S,src:n}):n,w(t.createElement("div",Object.assign({className:e(H,C,null==x?void 0:x.className,{[`${C}-normal`]:n===v,[`${C}-rtl`]:"rtl"===y},r,a),style:Object.assign(Object.assign({},null==x?void 0:x.style),m)},p),t.createElement("div",{className:`${C}-image`,style:c},$),b&&t.createElement("div",{className:`${C}-description`},b),s&&t.createElement("div",{className:`${C}-footer`},s)))};x.PRESENTED_IMAGE_DEFAULT=u,x.PRESENTED_IMAGE_SIMPLE=v;const C=x,w=({children:t,className:o,prefixCls:n,shape:i,show:s,showText:c,text:m,onClick:g,loadingSize:h,style:p,showMask:d=!0})=>l("div",{className:e(n,{[`${o}`]:o}),onClick:g,style:{pointerEvents:s?"none":"auto",...p},children:[t,s&&l(r,{children:[d&&a("div",{className:`${n}__mask`}),a("div",{className:e(`${n}__shape`,{[`${n}__shape-${i}`]:i}),style:h?{fontSize:h}:{},children:c&&a("p",{children:m})})]})]});w.defaultProps={prefixCls:"c-loading",shape:"round",text:"Loading..."};export{C as E,w as L,h as u};
