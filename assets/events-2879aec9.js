var e=Object.defineProperty,t=(t,n,s)=>(((t,n,s)=>{n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[n]=s})(t,"symbol"!=typeof n?n+"":n,s),s);function n(e,t){t=t||0;let n=e.length-t;const s=new Array(n);for(;n--;)s[n]=e[n+t];return s}var s=(e=>(e.SEEK="seek",e))(s||{}),l=(e=>(e.LOADING="loading",e.REFRESH="refresh",e))(l||{}),i=(e=>(e.LOGIN="login",e.LOGOUT="logout",e.SHOW_LOGIN="show_login",e))(i||{}),r=(e=>(e.COLLECT_SUCCESS="collect_success",e))(r||{});const o=class{constructor(){t(this,"_events"),this._events={}}static getInstance(){return o.instance||(o.instance=new o),o.instance}on(e,t){if(Array.isArray(e))for(let n=0,s=e.length;n<s;n++)this.on(e[n],t);else(this._events[e]||(this._events[e]=[])).push(t)}once(e,t){const n=this;function s(){n.off(e,s),t.apply(n,arguments)}s.fn=t,this.on(e,s)}emit(e,t){let s=this._events[e];if(s){s=s.length>1?n(s):s;let e=n(arguments,1);for(let t=0,n=s.length;t<n;t++)s[t].apply(this,e)}}off(e,t){if(Array.isArray(e))for(let n=0,s=e.length;n<s;n++)this.off(e[n],t);else{let n=this._events[e];if(!n)return;if(t){let e,s=n.length;for(;s--;)if(e=n[s],e===t||e.fn===t){n.splice(s,1);break}}else this._events[e]=null}}offAll(){for(let e in this._events)this._events[e]=null}};let a=o;t(a,"instance");const f=a.getInstance();export{l as A,r as C,i as L,s as M,f as e};
