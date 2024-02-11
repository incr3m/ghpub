import{j as i,C as y,i as S,m as j,T as A,_ as E,n as p,u as M,o as h,p as f}from"./TransitionGroupContext-9d36972e.js";import{B as k}from"./react-router-dom-60ea8218.js";import{d as C}from"./index-72884e22.js";import{A as F}from"./index-18188c67.js";import{v,x as P,T as B,y as U,A as _,z as b,L as z,u as D,w as $,B as L}from"./index-bcfaa842.js";import{r as u}from"./index-f1f749bf.js";import{a as c}from"./assertThisInitialized-ad1db8e7.js";import{L as W}from"./LocalizationProvider-a287304f.js";import"./react-router-19e5b27c.js";import"./index-4d501b15.js";import"./tiny-invariant-dd7d57d2.js";import"./index-147ad7aa.js";import"./index-356e4a49.js";import"./index-61adb48a.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-96c5f47c.js";import"./isNativeReflectConstruct-05c29d01.js";let m;typeof document=="object"&&(m=S({key:"css",prepend:!0}));function O(e){const{injectFirst:r,children:o}=e;return r&&m?i.jsx(y,{value:m,children:o}):o}function N(e,r){return typeof r=="function"?r(e):c({},e,r)}function w(e){const{children:r,theme:o}=e,t=v(),s=u.useMemo(()=>{const n=t===null?o:N(t,o);return n!=null&&(n[P]=t!==null),n},[o,t]);return i.jsx(B.Provider,{value:s,children:r})}const g={};function x(e,r,o,t=!1){return u.useMemo(()=>{const s=e&&r[e]||r;if(typeof o=="function"){const n=o(s),a=e?c({},r,{[e]:n}):n;return t?()=>a:a}return e?c({},r,{[e]:o}):c({},r,o)},[e,r,o,t])}function H(e){const{children:r,theme:o,themeId:t}=e,s=j(g),n=v()||g,a=x(t,s,o),l=x(t,n,o,!0);return i.jsx(w,{theme:l,children:i.jsx(A.Provider,{value:a,children:r})})}const R=["theme"];function G(e){let{theme:r}=e,o=E(e,R);const t=r[p];return i.jsx(H,c({},o,{themeId:t?p:void 0,theme:t||r}))}const Y=(e,r)=>c({WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box",WebkitTextSizeAdjust:"100%"},r&&!e.vars&&{colorScheme:e.palette.mode}),Z=e=>c({color:(e.vars||e).palette.text.primary},e.typography.body1,{backgroundColor:(e.vars||e).palette.background.default,"@media print":{backgroundColor:(e.vars||e).palette.common.white}}),q=(e,r=!1)=>{var o;const t={};r&&e.colorSchemes&&Object.entries(e.colorSchemes).forEach(([a,l])=>{var d;t[e.getColorSchemeSelector(a).replace(/\s*&/,"")]={colorScheme:(d=l.palette)==null?void 0:d.mode}});let s=c({html:Y(e,r),"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:e.typography.fontWeightBold},body:c({margin:0},Z(e),{"&::backdrop":{backgroundColor:(e.vars||e).palette.background.default}})},t);const n=(o=e.components)==null||(o=o.MuiCssBaseline)==null?void 0:o.styleOverrides;return n&&(s=[s,n]),s};function J(e){const r=M({props:e,name:"MuiCssBaseline"}),{children:o,enableColorScheme:t=!1}=r;return i.jsxs(u.Fragment,{children:[i.jsx(U,{styles:s=>q(s,t)}),o]})}const T={AFS:_,UBANTU:b,LAWD:z};function K(e){const{theme:r,children:o}=e,t=T.UBANTU,s=D("MUI_THEME").value;let n=t;return r?n=h(f(t,r)):n=s==="UBANTU"?t:h(f(t,T[s])),console.log(">>src/ThemeManager::","currentTheme",{currentTheme:n}),i.jsx(O,{injectFirst:!0,children:i.jsxs(G,{theme:n,children:[i.jsx(J,{}),o]})})}C({asyncUtilTimeout:5e3});const Q={currency:"USD",minimumFractionDigits:0,maximumFractionDigits:21,roundingMode:"round"};$.initializeNumberFormatter(void 0,Q);const he=[e=>i.jsx(W,{dateAdapter:F,children:i.jsx(K,{theme:b,children:i.jsx(L,{maxSnack:1,anchorOrigin:{vertical:"bottom",horizontal:"right"},children:i.jsx(k,{children:e()})})})})],fe={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}};export{he as decorators,fe as parameters};
