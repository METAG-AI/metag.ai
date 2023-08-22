import{n as e}from"./index-0eb3c0bb.js";import{r as E}from"./index-ec06099d.js";import{A as a}from"./render-187aeed7.js";const c={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"}}]},name:"exclamation-circle",theme:"filled"};var N=function(N,s){return E.createElement(a,e({},N,{ref:s,icon:c}))};const s=E.forwardRef(N);const r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"}}]},name:"info-circle",theme:"filled"};var t=function(c,N){return E.createElement(a,e({},c,{ref:N,icon:r}))};const _=E.forwardRef(t);var S={MAC_ENTER:3,BACKSPACE:8,TAB:9,NUM_CENTER:12,ENTER:13,SHIFT:16,CTRL:17,ALT:18,PAUSE:19,CAPS_LOCK:20,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,PRINT_SCREEN:44,INSERT:45,DELETE:46,ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,QUESTION_MARK:63,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,META:91,WIN_KEY_RIGHT:92,CONTEXT_MENU:93,NUM_ZERO:96,NUM_ONE:97,NUM_TWO:98,NUM_THREE:99,NUM_FOUR:100,NUM_FIVE:101,NUM_SIX:102,NUM_SEVEN:103,NUM_EIGHT:104,NUM_NINE:105,NUM_MULTIPLY:106,NUM_PLUS:107,NUM_MINUS:109,NUM_PERIOD:110,NUM_DIVISION:111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,NUMLOCK:144,SEMICOLON:186,DASH:189,EQUALS:187,COMMA:188,PERIOD:190,SLASH:191,APOSTROPHE:192,SINGLE_QUOTE:222,OPEN_SQUARE_BRACKET:219,BACKSLASH:220,CLOSE_SQUARE_BRACKET:221,WIN_KEY:224,MAC_FF_META:224,WIN_IME:229,isTextModifyingKeyEvent:function(e){var E=e.keyCode;if(e.altKey&&!e.ctrlKey||e.metaKey||E>=S.F1&&E<=S.F12)return!1;switch(E){case S.ALT:case S.CAPS_LOCK:case S.CONTEXT_MENU:case S.CTRL:case S.DOWN:case S.END:case S.ESC:case S.HOME:case S.INSERT:case S.LEFT:case S.MAC_FF_META:case S.META:case S.NUMLOCK:case S.NUM_CENTER:case S.PAGE_DOWN:case S.PAGE_UP:case S.PAUSE:case S.PRINT_SCREEN:case S.RIGHT:case S.SHIFT:case S.UP:case S.WIN_KEY:case S.WIN_KEY_RIGHT:return!1;default:return!0}},isCharacterKey:function(e){if(e>=S.ZERO&&e<=S.NINE)return!0;if(e>=S.NUM_ZERO&&e<=S.NUM_MULTIPLY)return!0;if(e>=S.A&&e<=S.Z)return!0;if(-1!==window.navigator.userAgent.indexOf("WebKit")&&0===e)return!0;switch(e){case S.SPACE:case S.QUESTION_MARK:case S.NUM_PLUS:case S.NUM_MINUS:case S.NUM_PERIOD:case S.NUM_DIVISION:case S.SEMICOLON:case S.DASH:case S.EQUALS:case S.COMMA:case S.PERIOD:case S.SLASH:case S.APOSTROPHE:case S.SINGLE_QUOTE:case S.OPEN_SQUARE_BRACKET:case S.BACKSLASH:case S.CLOSE_SQUARE_BRACKET:return!0;default:return!1}}};export{s as E,_ as I,S as K};