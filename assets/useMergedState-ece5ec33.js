import{P as n,l as t,Q as o}from"./index-6b74f525.js";import{u}from"./Compact-9381d23d.js";function a(n){return void 0!==n}function f(f,i){var r=i||{},e=r.defaultValue,c=r.value,s=r.onChange,p=r.postState,v=n((function(){return a(c)?c:a(e)?"function"==typeof e?e():e:"function"==typeof f?f():f})),m=t(v,2),d=m[0],l=m[1],j=void 0!==c?c:d,x=p?p(j):j,y=u(s),C=n([j]),g=t(C,2),h=g[0],P=g[1];return o((function(){var n=h[0];d!==n&&y(d,n)}),[h]),o((function(){a(c)||l(c)}),[c]),[x,u((function(n,t){l(n,t),P([j],t)}))]}export{f as u};
