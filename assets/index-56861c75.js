import{u as e,a as i,j as s,b as C,F as r,r as a,w as n}from"./index-ef096646.js";import{u as t,T as o}from"./index-0557a86e.js";import{L as c}from"./logo-4f81033e.js";import{A as m}from"./index-8adcf985.js";import{o as l}from"./index-42ee7e2b.js";import{e as _,L as d}from"./events-2879aec9.js";import{u as L,S as V}from"./start-b9bc0325.js";import{B as p}from"./button-bf3a9443.js";import{I as g}from"./index-f69d4be0.js";import"./index-f246fd73.js";import"./Compact-4420e2ad.js";import"./index-d394c8d7.js";import"./render-61142ebe.js";const H="_price_iny1x_1",h="_price-section_iny1x_7",j="_price_plan_iny1x_21",x="_access_iny1x_26",u="_access-line_iny1x_31",N="_access-words_iny1x_36",M="_start_iny1x_45",Z="_bg-section_iny1x_50",v="_bg-dream_iny1x_65",f={header:"_header_j1287_1",logo:"_logo_j1287_12",right:"_right_j1287_16",menus:"_menus_j1287_20",menuItem:"_menuItem_j1287_26",login:"_login_j1287_32",register:"_register_j1287_39",bg:"_bg_j1287_43"},y=l((a=>{const{position:n,backgroud:t}=a,{userStore:o}=e(),l=i();L();return s("header",{className:`${f.header} ${f.area} ${n>930&&t?f.bg:""}`,children:[C("div",{onClick:()=>{l("/index")},children:C("img",{className:f.logo,src:c,alt:""})}),n>930?C("div",{className:f.menus,children:C("p",{children:C(p,{className:f.menuItem,type:"text",onClick:()=>{l("/price")},children:"Price"})})}):C(r,{}),s("div",{className:f.right,children:[o.isLogin?C(m,{}):C(p,{className:f.login,type:"text",onClick:()=>{_.emit(d.SHOW_LOGIN)},children:"Login"}),C(p,{className:f.register,type:"primary",onClick:()=>{_.emit(d.SHOW_LOGIN)},children:"Sign up"})]})]})}));function w(e){return a.createElement("svg",{width:272,height:34,viewBox:"0 0 272 34",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},a.createElement("path",{d:"M5.24 32H0.296V31.376C1.64 31.28 2.696 29.84 2.696 28.64V5.408C2.696 4.064 1.736 2.672 0.344 2.576V2H13.352C18.92 2 22.808 5.84 22.808 11.408C22.808 17.552 18.152 21.68 12.152 21.68H7.736V29.264L5.24 32ZM7.736 2.912V20.624H11.288C15.944 20.624 17.96 14.576 17.96 10.688C17.96 7.136 16.424 2.912 12.2 2.912H7.736ZM23.9611 11.312V10.736H28.9531L30.9211 13.136L31.1131 16.112C31.3531 15.872 31.6411 15.584 31.8331 15.392C34.2331 12.32 37.6411 10.208 41.5291 10.832L40.4251 17.216L37.5451 12.704C37.5451 12.704 34.7611 12.224 32.2171 16.592C31.9291 16.928 31.5931 17.36 31.3531 17.888V32H23.9611V31.28C23.9611 31.28 26.3131 31.28 26.3131 28.592V14.144C26.3131 12.368 25.5451 11.408 23.9611 11.312ZM43.1341 11.312V10.736H50.5741V28.592C50.5741 30.272 51.3901 31.232 52.9741 31.376V32H45.5341V14.096C45.5341 12.416 44.7181 11.504 43.1341 11.312ZM44.1421 3.728L47.6461 0.271999L51.1021 3.728L47.6461 7.232L44.1421 3.728ZM54.6676 21.776C54.6676 14.624 60.8596 10.448 67.0516 10.448C68.8276 10.448 71.1796 10.928 72.8116 11.264L74.8276 10.352V17.792L70.4596 11.744C69.5956 11.36 67.9636 11.168 67.1476 11.168C56.9236 11.168 56.5396 28.784 68.6356 28.784C71.2756 28.784 74.0116 27.632 75.2596 25.664L75.7396 26.24C73.6756 30.416 69.4036 32.288 65.8516 32.288C61.0516 32.24 54.6676 29.216 54.6676 21.776ZM77.8719 21.584C77.7279 14.96 83.3919 10.352 90.2559 10.352C97.5999 10.352 100.192 15.2 100.192 17.648H83.1039C82.9119 18.56 82.8639 19.568 82.9119 20.672C83.2479 25.232 86.9919 28.736 92.0799 28.928C94.8159 29.072 97.6479 28.016 99.4239 25.664L99.9039 26.24C97.6959 30.32 93.3279 32.288 88.8639 32.288C83.1039 32.288 77.9679 28.064 77.8719 21.584ZM90.3039 11.072C86.8479 11.072 84.3039 13.184 83.3439 16.448H95.3439C95.3439 16.448 94.9119 11.12 90.3039 11.072ZM114.998 24.272C114.998 20.048 118.502 16.832 123.494 16.064C121.862 13.328 120.758 10.688 120.758 8.624C120.758 3.776 124.742 1.088 129.014 1.088C133.574 1.088 136.262 3.968 136.262 7.472C136.262 11.648 131.99 14.384 128.39 15.344C131.126 19.52 134.918 24.032 138.134 27.632C140.294 25.808 141.494 22.112 140.774 19.424L134.342 15.824H143.99L143.174 18.128C143.558 21.248 142.454 26 139.094 28.736C140.726 30.512 142.262 32.192 143.27 33.248H137.078C136.598 32.72 136.022 32.096 135.398 31.328C133.238 32.288 130.406 32.816 127.19 32.816C121.766 32.816 114.998 30.08 114.998 24.272ZM124.022 16.928C121.622 17.552 119.366 19.28 119.366 22.928C119.366 28.88 125.414 31.376 130.886 31.52C132.134 31.424 133.43 31.04 134.534 30.368C131.366 26.768 126.998 21.68 124.022 16.928ZM126.806 2.384C126.422 2.576 124.022 3.776 124.694 7.424C124.886 9.392 126.182 11.792 127.814 14.432C130.406 13.568 133.046 11.312 133.046 8C133.046 3.968 129.878 1.904 126.806 2.384ZM163.724 32H158.78V31.376C160.124 31.28 161.18 29.84 161.18 28.64V5.408C161.18 4.064 160.22 2.672 158.828 2.576V2H171.836C177.404 2 181.292 5.84 181.292 11.408C181.292 17.552 176.636 21.68 170.636 21.68H166.22V29.264L163.724 32ZM166.22 2.912V20.624H169.772C174.428 20.624 176.444 14.576 176.444 10.688C176.444 7.136 174.908 2.912 170.684 2.912H166.22ZM203.952 32H182.64V31.376C182.64 31.376 184.992 31.136 184.992 28.64V5.408C184.992 2.72 182.688 2.576 182.688 2.576V2H187.536L190.032 4.688V30.8H199.536L203.952 24.56V32ZM211.946 32.336C208.826 32.336 205.658 30.416 205.85 26.96C206.234 20.48 215.786 21.728 219.914 17.456V15.728C219.914 12.656 217.946 11.6 215.738 11.6C214.97 11.6 214.202 11.744 213.434 11.936L207.53 18.176L207.482 10.304L209.69 11.696C211.946 10.976 214.202 10.496 216.074 10.4C220.49 10.208 224.906 11.984 225.002 17.072V28.928C225.002 31.28 226.874 31.376 226.922 31.376V32H222.362L220.01 29.408L219.914 27.92C218.33 29.792 215.402 32.336 211.946 32.336ZM211.994 26.096C211.898 28.16 213.242 29.36 215.066 29.36C216.554 29.36 218.33 28.544 219.914 26.816V19.088C216.506 21.152 212.186 22.304 211.994 26.096ZM228.941 32V31.376C228.941 31.376 231.293 31.28 231.293 28.64V14.144C231.293 12.368 230.525 11.408 228.941 11.312V10.736H233.885L235.853 13.088L236.045 16.688C236.957 14.816 239.021 10.496 243.389 10.496C246.989 10.496 250.157 12.992 250.157 18.368V28.592V28.688C250.157 30.416 250.925 31.328 252.509 31.376V32H245.117V18.464C245.117 14.384 244.109 12.656 241.901 12.656C238.829 12.656 237.005 16.64 236.333 18.416V28.88L239.021 32H228.941ZM268.244 27.92C268.244 23.264 254.612 24.416 254.612 16.544C254.612 12.512 259.124 10.4 262.724 10.4C264.884 10.4 266.756 10.736 268.724 11.36L271.028 10.304V18.128L265.076 11.6C264.308 11.36 263.54 11.264 262.772 11.264C260.228 11.264 258.116 12.608 258.116 14.48C258.116 19.76 271.988 19.136 271.988 26.144C271.988 29.552 268.868 32.384 263.924 32.384C261.428 32.384 258.836 31.616 257.012 31.04L254.756 31.904L254.804 24.176L260.612 30.56C261.86 31.04 263.012 31.28 264.02 31.28C266.66 31.28 268.244 29.744 268.244 27.92Z",fill:"white"}))}const b=()=>{t(),n();const e=L();return s("div",{className:H,children:[C(y,{position:1e3,backgroud:!1}),s("div",{className:h,children:[C(g,{className:j,icon:w}),s("div",{className:x,children:[C("div",{className:u}),C("div",{className:N,children:"You can get access for free now"}),C("div",{className:u})]}),C(g,{className:M,icon:V,onClick:()=>{e.entry("/main/project")}})]}),s("div",{className:Z,children:[C("div",{className:v}),C(o,{})]})]})};export{b as default};
