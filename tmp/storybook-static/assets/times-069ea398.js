import{_ as m}from"./_baseForOwn-9b89c4b6.js";import{_}from"./_castFunction-353dfc26.js";import{t as e}from"./papaparse.min-b66e70e7.js";var n=m,v=_,u=e,c=9007199254740991,a=4294967295,f=Math.min;function A(r,t){if(r=u(r),r<1||r>c)return[];var i=a,s=f(r,a);t=v(t),r-=a;for(var o=n(s,t);++i<r;)t(i);return o}var T=A;export{T as t};
