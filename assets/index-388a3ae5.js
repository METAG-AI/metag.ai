import{r as e,a,u as r,w as s,j as t,F as i,b as c}from"./index-ef096646.js";import{o,u as l}from"./index-42ee7e2b.js";import{I as n}from"./index-f69d4be0.js";import{S as m}from"./back-91525fdf.js";import{B as d}from"./BaseUrl-9fb7060e.js";import{f as _}from"./formatDate-e3431c7a.js";import"./index-f246fd73.js";const p="_header_jekzq_1",h="_backTitle_jekzq_1",k="_icon_jekzq_10",j="_content_jekzq_14",f="_view_jekzq_21",u="_info_jekzq_21",x="_head_jekzq_1",v="_name_jekzq_32",C="_modelName_jekzq_40",g="_date_jekzq_49";function w(a){return e.createElement("svg",{width:46,height:46,viewBox:"0 0 46 46",fill:"none",xmlns:"http://www.w3.org/2000/svg",...a},e.createElement("circle",{cx:23,cy:23,r:23,fill:"#DBFE01"}),e.createElement("path",{d:"M6.24151 15.7614C7.66459 14.3579 9.02989 24.8109 17.5181 29.5581L13.6603 34.1172C5.14738 30.397 4.84598 17.1377 6.24151 15.7614Z",fill:"#0036B8"}),e.createElement("mask",{id:"mask0_3241_560",style:{maskType:"alpha"},maskUnits:"userSpaceOnUse",x:0,y:0,width:46,height:46},e.createElement("circle",{cx:23,cy:23,r:23,fill:"#DBFE01"})),e.createElement("g",{mask:"url(#mask0_3241_560)"},e.createElement("path",{d:"M25.5546 8.98183C15.1994 6.9287 15.0276 18.1234 17.0596 19.9397C17.858 20.6533 18.4629 21.8385 17.0596 23.0321C15.1009 24.698 11.1295 22.1408 3.27665 42.7398C-3.63294 60.8645 1.5532 60.7882 8.06713 63.6734C8.06713 73.9816 19.6585 94.7685 26.9935 94.7685C29.6283 94.7685 17.2 71.4214 18.6372 64.84C23.1867 65.7609 29.6718 66.5099 34.4623 66.1292C39.2528 65.7486 41.2488 63.4333 41.648 62.3231C43.6132 53.6054 35.5002 39.378 34.4623 35.334L34.4882 35.3065C38.0712 31.5108 41.4065 27.9776 41.7098 23.0321C42.122 16.3097 36.0005 25.6108 32.067 27.9596L29.2619 26.1552C27.3657 24.2295 28.5429 22.8249 29.5012 22.1112C34.2915 20.2082 34.4623 10.748 25.5546 8.98183Z",fill:"#1B57E6"})))}const N=o((()=>{const o=a(),{userStore:N,languageStore:E}=r(),q=s(),z=new URLSearchParams(q.search).get("eid")||"",S=l((()=>({loading:!1,items:[],exported:{},actionItem:null,backModel(){o("/main/project")}}))),B=window.localStorage.getItem("curExported")||"";return z==JSON.parse(B).export_id&&(S.exported=JSON.parse(B)),e.useEffect((()=>{}),[]),t(i,{children:[c("div",{className:p,children:t("div",{className:h,children:[c(n,{onClick:S.backModel,className:k,icon:m}),"Preview"]})}),t("div",{className:j,children:[t("video",{controls:!0,children:[c("source",{src:d.metag+S.exported.resource,type:"video/mp4"}),"Your browser does not support the video tag."]}),t("div",{className:f,children:[t("div",{className:u,children:[c(n,{className:x,icon:w}),c("div",{className:v,children:N.info.name})]}),c("div",{className:C,children:S.exported.name}),c("div",{className:g,children:_(S.exported.created_at)})]})]})]})}));export{N as default};