import{a as f}from"./index-1ef6de65.js";var l={},u={get exports(){return l},set exports(o){l=o}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(o){(function(){var a={}.hasOwnProperty;function t(){for(var e=[],r=0;r<arguments.length;r++){var s=arguments[r];if(s){var n=typeof s;if(n==="string"||n==="number")e.push(s);else if(Array.isArray(s)){if(s.length){var c=t.apply(null,s);c&&e.push(c)}}else if(n==="object"){if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]")){e.push(s.toString());continue}for(var i in s)a.call(s,i)&&s[i]&&e.push(i)}}}return e.join(" ")}o.exports?(t.default=t,o.exports=t):window.classNames=t})()})(u);const m=l;const d=o=>{const{prefixCls:a,className:t,icon:e,disabled:r,fillByCurrentColor:s,onClick:n,...c}=o,i=p=>{r||n==null||n(p)};return f("span",{className:m(a,{[`${a}--disabled`]:r,[`${a}--fill-current-color`]:s,[`${t}`]:t}),onClick:i,...c,children:f(e,{})})};d.defaultProps={prefixCls:"c-icon"};const v={dev:{metag:"/api"},test:{metag:""},prod:{metag:"/api"}},x=v.test;export{x as B,d as I,m as c};