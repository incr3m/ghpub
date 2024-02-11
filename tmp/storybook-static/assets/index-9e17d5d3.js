import{g as Je}from"./_commonjsHelpers-042e6b4d.js";import{r as Q}from"./index-f1f749bf.js";import{p as Ke}from"./index-4d501b15.js";function Qe(r,n){for(var i=0;i<n.length;i++){const o=n[i];if(typeof o!="string"&&!Array.isArray(o)){for(const a in o)if(a!=="default"&&!(a in r)){const u=Object.getOwnPropertyDescriptor(o,a);u&&Object.defineProperty(r,a,u.get?u:{enumerable:!0,get:()=>o[a]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}var fe={};function Ze(r){if(r&&r.__esModule)return r;var n={};if(r!=null){for(var i in r)if(Object.prototype.hasOwnProperty.call(r,i)){var o=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(r,i):{};o.get||o.set?Object.defineProperty(n,i,o):n[i]=r[i]}}return n.default=r,n}var Ye=Ze,C={},te,_e;function k(){if(_e)return te;_e=1;function r(n){return n&&n.__esModule?n:{default:n}}return te=r,te}var B,Ce;function et(){if(Ce)return B;Ce=1;function r(){return B=r=Object.assign||function(n){for(var i=1;i<arguments.length;i++){var o=arguments[i];for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(n[a]=o[a])}return n},r.apply(this,arguments)}return B=r,B}var re,Oe;function tt(){if(Oe)return re;Oe=1;function r(n,i){if(n==null)return{};var o={},a=Object.keys(n),u,p;for(p=0;p<a.length;p++)u=a[p],!(i.indexOf(u)>=0)&&(o[u]=n[u]);return o}return re=r,re}var ne,Me;function rt(){if(Me)return ne;Me=1;var r=tt();function n(i,o){if(i==null)return{};var a=r(i,o),u,p;if(Object.getOwnPropertySymbols){var S=Object.getOwnPropertySymbols(i);for(p=0;p<S.length;p++)u=S[p],!(o.indexOf(u)>=0)&&Object.prototype.propertyIsEnumerable.call(i,u)&&(a[u]=i[u])}return a}return ne=n,ne}var ie,Te;function nt(){if(Te)return ie;Te=1;function r(n,i){if(!(n instanceof i))throw new TypeError("Cannot call a class as a function")}return ie=r,ie}var ae,Le;function it(){if(Le)return ae;Le=1;function r(i,o){for(var a=0;a<o.length;a++){var u=o[a];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(i,u.key,u)}}function n(i,o,a){return o&&r(i.prototype,o),a&&r(i,a),i}return ae=n,ae}var I,Pe;function at(){if(Pe)return I;Pe=1;function r(i){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?r=function(a){return typeof a}:r=function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},r(i)}function n(i){return typeof Symbol=="function"&&r(Symbol.iterator)==="symbol"?I=n=function(a){return r(a)}:I=n=function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":r(a)},n(i)}return I=n,I}var oe,Re;function ot(){if(Re)return oe;Re=1;function r(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}return oe=r,oe}var se,Ee;function st(){if(Ee)return se;Ee=1;var r=at(),n=ot();function i(o,a){return a&&(r(a)==="object"||typeof a=="function")?a:n(o)}return se=i,se}var G,Ne;function ut(){if(Ne)return G;Ne=1;function r(n){return G=r=Object.setPrototypeOf?Object.getPrototypeOf:function(o){return o.__proto__||Object.getPrototypeOf(o)},r(n)}return G=r,G}var J,qe;function lt(){if(qe)return J;qe=1;function r(n,i){return J=r=Object.setPrototypeOf||function(a,u){return a.__proto__=u,a},r(n,i)}return J=r,J}var ue,Ie;function dt(){if(Ie)return ue;Ie=1;var r=lt();function n(i,o){if(typeof o!="function"&&o!==null)throw new TypeError("Super expression must either be null or a function");i.prototype=Object.create(o&&o.prototype,{constructor:{value:i,writable:!0,configurable:!0}}),o&&r(i,o)}return ue=n,ue}var le,Xe;function Ue(){if(Xe)return le;Xe=1;var r=function(){};return le=r,le}var de={},X={},De;function ft(){if(De)return X;De=1;var r=k();Object.defineProperty(X,"__esModule",{value:!0}),X.default=void 0;var n=r(Q);r(Ue());var i=function(u){u.index;var p=u.children;n.default.Children.count(p)},o=i;return X.default=o,X}var K={},D={},We;function ze(){if(We)return D;We=1,Object.defineProperty(D,"__esModule",{value:!0}),D.default=void 0;var r={RESISTANCE_COEF:.6,UNCERTAINTY_THRESHOLD:3};return D.default=r,D}var He;function ct(){if(He)return K;He=1;var r=k();Object.defineProperty(K,"__esModule",{value:!0}),K.default=o;var n=r(Q),i=r(ze());function o(a){var u=a.children,p=a.startIndex,S=a.startX,O=a.pageX,g=a.viewLength,m=a.resistance,w=n.default.Children.count(u)-1,v=p+(S-O)/g,y;return m?v<0?v=Math.exp(v*i.default.RESISTANCE_COEF)-1:v>w&&(v=w+1-Math.exp((w-v)*i.default.RESISTANCE_COEF)):v<0?(v=0,y=(v-p)*g+O):v>w&&(v=w,y=(v-p)*g+O),{index:v,startX:y}}return K}var W={},ke;function pt(){if(ke)return W;ke=1;var r=k();Object.defineProperty(W,"__esModule",{value:!0}),W.default=void 0;var n=r(Q),i=function(u,p){var S=!1,O=function(P){return P?P.key:"empty"};if(u.children.length&&p.children.length){var g=n.default.Children.map(u.children,O),m=g[u.index];if(m!=null){var w=n.default.Children.map(p.children,O),v=w[p.index];m===v&&(S=!0)}}return S},o=i;return W.default=o,W}var H={},je;function ht(){if(je)return H;je=1,Object.defineProperty(H,"__esModule",{value:!0}),H.default=void 0;function r(i,o){var a=i%o;return a<0?a+o:a}var n=r;return H.default=n,H}var Ae;function vt(){return Ae||(Ae=1,function(r){var n=k();Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"checkIndexBounds",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(r,"computeIndex",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(r,"constant",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(r,"getDisplaySameSlide",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(r,"mod",{enumerable:!0,get:function(){return p.default}});var i=n(ft()),o=n(ct()),a=n(ze()),u=n(pt()),p=n(ht())}(de)),de}var Ve;function gt(){if(Ve)return C;Ve=1;var r=Ye,n=k();Object.defineProperty(C,"__esModule",{value:!0}),C.getDomTreeShapes=ce,C.findNativeHandler=pe,C.default=C.SwipeableViewsContext=void 0;var i=n(et()),o=n(rt()),a=n(nt()),u=n(it()),p=n(st()),S=n(ut()),O=n(dt()),g=r(Q);n(Ke),n(Ue());var m=vt();function w(s,f,d,e){return s.addEventListener(f,d,e),{remove:function(){s.removeEventListener(f,d,e)}}}var v={container:{direction:"ltr",display:"flex",willChange:"transform"},slide:{width:"100%",WebkitFlexShrink:0,flexShrink:0,overflow:"auto"}},y={root:{x:{overflowX:"hidden"},"x-reverse":{overflowX:"hidden"},y:{overflowY:"hidden"},"y-reverse":{overflowY:"hidden"}},flexDirection:{x:"row","x-reverse":"row-reverse",y:"column","y-reverse":"column-reverse"},transform:{x:function(f){return"translate(".concat(-f,"%, 0)")},"x-reverse":function(f){return"translate(".concat(f,"%, 0)")},y:function(f){return"translate(0, ".concat(-f,"%)")},"y-reverse":function(f){return"translate(0, ".concat(f,"%)")}},length:{x:"width","x-reverse":"width",y:"height","y-reverse":"height"},rotationMatrix:{x:{x:[1,0],y:[0,1]},"x-reverse":{x:[-1,0],y:[0,1]},y:{x:[0,1],y:[1,0]},"y-reverse":{x:[0,-1],y:[1,0]}},scrollPosition:{x:"scrollLeft","x-reverse":"scrollLeft",y:"scrollTop","y-reverse":"scrollTop"},scrollLength:{x:"scrollWidth","x-reverse":"scrollWidth",y:"scrollHeight","y-reverse":"scrollHeight"},clientLength:{x:"clientWidth","x-reverse":"clientWidth",y:"clientHeight","y-reverse":"clientHeight"}};function P(s,f){var d=f.duration,e=f.easeFunction,t=f.delay;return"".concat(s," ").concat(d," ").concat(e," ").concat(t)}function Z(s,f){var d=y.rotationMatrix[f];return{pageX:d.x[0]*s.pageX+d.x[1]*s.pageY,pageY:d.y[0]*s.pageX+d.y[1]*s.pageY}}function j(s){return s.touches=[{pageX:s.pageX,pageY:s.pageY}],s}function ce(s,f){for(var d=[];s&&s!==f&&s!==document.body&&!s.hasAttribute("data-swipeable");){var e=window.getComputedStyle(s);e.getPropertyValue("position")==="absolute"||e.getPropertyValue("overflow-x")==="hidden"?d=[]:(s.clientWidth>0&&s.scrollWidth>s.clientWidth||s.clientHeight>0&&s.scrollHeight>s.clientHeight)&&d.push({element:s,scrollWidth:s.scrollWidth,scrollHeight:s.scrollHeight,clientWidth:s.clientWidth,clientHeight:s.clientHeight,scrollLeft:s.scrollLeft,scrollTop:s.scrollTop}),s=s.parentNode}return d}var L=null;function pe(s){var f=s.domTreeShapes,d=s.pageX,e=s.startX,t=s.axis;return f.some(function(l){var h=d>=e;(t==="x"||t==="y")&&(h=!h);var c=Math.round(l[y.scrollPosition[t]]),b=c>0,_=c+l[y.clientLength[t]]<l[y.scrollLength[t]];return h&&_||!h&&b?(L=l.element,!0):!1})}var he=g.createContext();C.SwipeableViewsContext=he;var A=function(s){(0,O.default)(f,s);function f(d){var e;return(0,a.default)(this,f),e=(0,p.default)(this,(0,S.default)(f).call(this,d)),e.rootNode=null,e.containerNode=null,e.ignoreNextScrollEvents=!1,e.viewLength=0,e.startX=0,e.lastX=0,e.vx=0,e.startY=0,e.isSwiping=void 0,e.started=!1,e.startIndex=0,e.transitionListener=null,e.touchMoveListener=null,e.activeSlide=null,e.indexCurrent=null,e.firstRenderTimeout=null,e.setRootNode=function(t){e.rootNode=t},e.setContainerNode=function(t){e.containerNode=t},e.setActiveSlide=function(t){e.activeSlide=t,e.updateHeight()},e.handleSwipeStart=function(t){var l=e.props.axis,h=Z(t.touches[0],l);e.viewLength=e.rootNode.getBoundingClientRect()[y.length[l]],e.startX=h.pageX,e.lastX=h.pageX,e.vx=0,e.startY=h.pageY,e.isSwiping=void 0,e.started=!0;var c=window.getComputedStyle(e.containerNode),b=c.getPropertyValue("-webkit-transform")||c.getPropertyValue("transform");if(b&&b!=="none"){var _=b.split("(")[1].split(")")[0].split(","),M=window.getComputedStyle(e.rootNode),x=Z({pageX:parseInt(_[4],10),pageY:parseInt(_[5],10)},l);e.startIndex=-x.pageX/(e.viewLength-parseInt(M.paddingLeft,10)-parseInt(M.paddingRight,10))||0}},e.handleSwipeMove=function(t){if(!e.started){e.handleTouchStart(t);return}if(!(L!==null&&L!==e.rootNode)){var l=e.props,h=l.axis,c=l.children,b=l.ignoreNativeScroll,_=l.onSwitching,M=l.resistance,x=Z(t.touches[0],h);if(e.isSwiping===void 0){var E=Math.abs(x.pageX-e.startX),N=Math.abs(x.pageY-e.startY),R=E>N&&E>m.constant.UNCERTAINTY_THRESHOLD;if(!M&&(h==="y"||h==="y-reverse")&&(e.indexCurrent===0&&e.startX<x.pageX||e.indexCurrent===g.Children.count(e.props.children)-1&&e.startX>x.pageX)){e.isSwiping=!1;return}if(E>N&&t.preventDefault(),R===!0||N>m.constant.UNCERTAINTY_THRESHOLD){e.isSwiping=R,e.startX=x.pageX;return}}if(e.isSwiping===!0){t.preventDefault(),e.vx=e.vx*.5+(x.pageX-e.lastX)*.5,e.lastX=x.pageX;var V=(0,m.computeIndex)({children:c,resistance:M,pageX:x.pageX,startIndex:e.startIndex,startX:e.startX,viewLength:e.viewLength}),Y=V.index,T=V.startX;if(L===null&&!b){var ee=ce(t.target,e.rootNode),U=pe({domTreeShapes:ee,startX:e.startX,pageX:x.pageX,axis:h});if(U)return}T?e.startX=T:L===null&&(L=e.rootNode),e.setIndexCurrent(Y);var q=function(){_&&_(Y,"move")};(e.state.displaySameSlide||!e.state.isDragging)&&e.setState({displaySameSlide:!1,isDragging:!0},q),q()}}},e.handleSwipeEnd=function(){if(L=null,!!e.started&&(e.started=!1,e.isSwiping===!0)){var t=e.state.indexLatest,l=e.indexCurrent,h=t-l,c;Math.abs(e.vx)>e.props.threshold?e.vx>0?c=Math.floor(l):c=Math.ceil(l):Math.abs(h)>e.props.hysteresis?c=h>0?Math.floor(l):Math.ceil(l):c=t;var b=g.Children.count(e.props.children)-1;c<0?c=0:c>b&&(c=b),e.setIndexCurrent(c),e.setState({indexLatest:c,isDragging:!1},function(){e.props.onSwitching&&e.props.onSwitching(c,"end"),e.props.onChangeIndex&&c!==t&&e.props.onChangeIndex(c,t,{reason:"swipe"}),l===t&&e.handleTransitionEnd()})}},e.handleTouchStart=function(t){e.props.onTouchStart&&e.props.onTouchStart(t),e.handleSwipeStart(t)},e.handleTouchEnd=function(t){e.props.onTouchEnd&&e.props.onTouchEnd(t),e.handleSwipeEnd(t)},e.handleMouseDown=function(t){e.props.onMouseDown&&e.props.onMouseDown(t),t.persist(),e.handleSwipeStart(j(t))},e.handleMouseUp=function(t){e.props.onMouseUp&&e.props.onMouseUp(t),e.handleSwipeEnd(j(t))},e.handleMouseLeave=function(t){e.props.onMouseLeave&&e.props.onMouseLeave(t),e.started&&e.handleSwipeEnd(j(t))},e.handleMouseMove=function(t){e.props.onMouseMove&&e.props.onMouseMove(t),e.started&&e.handleSwipeMove(j(t))},e.handleScroll=function(t){if(e.props.onScroll&&e.props.onScroll(t),t.target===e.rootNode){if(e.ignoreNextScrollEvents){e.ignoreNextScrollEvents=!1;return}var l=e.state.indexLatest,h=Math.ceil(t.target.scrollLeft/t.target.clientWidth)+l;e.ignoreNextScrollEvents=!0,t.target.scrollLeft=0,e.props.onChangeIndex&&h!==l&&e.props.onChangeIndex(h,l,{reason:"focus"})}},e.updateHeight=function(){if(e.activeSlide!==null){var t=e.activeSlide.children[0];t!==void 0&&t.offsetHeight!==void 0&&e.state.heightLatest!==t.offsetHeight&&e.setState({heightLatest:t.offsetHeight})}},e.state={indexLatest:d.index,isDragging:!1,renderOnlyActive:!d.disableLazyLoading,heightLatest:0,displaySameSlide:!0},e.setIndexCurrent(d.index),e}return(0,u.default)(f,[{key:"componentDidMount",value:function(){var e=this;this.transitionListener=w(this.containerNode,"transitionend",function(t){t.target===e.containerNode&&e.handleTransitionEnd()}),this.touchMoveListener=w(this.rootNode,"touchmove",function(t){e.props.disabled||e.handleSwipeMove(t)},{passive:!1}),this.props.disableLazyLoading||(this.firstRenderTimeout=setTimeout(function(){e.setState({renderOnlyActive:!1})},0)),this.props.action&&this.props.action({updateHeight:this.updateHeight})}},{key:"UNSAFE_componentWillReceiveProps",value:function(e){var t=e.index;typeof t=="number"&&t!==this.props.index&&(this.setIndexCurrent(t),this.setState({displaySameSlide:(0,m.getDisplaySameSlide)(this.props,e),indexLatest:t}))}},{key:"componentWillUnmount",value:function(){this.transitionListener.remove(),this.touchMoveListener.remove(),clearTimeout(this.firstRenderTimeout)}},{key:"getSwipeableViewsContext",value:function(){var e=this;return{slideUpdateHeight:function(){e.updateHeight()}}}},{key:"setIndexCurrent",value:function(e){if(!this.props.animateTransitions&&this.indexCurrent!==e&&this.handleTransitionEnd(),this.indexCurrent=e,this.containerNode){var t=this.props.axis,l=y.transform[t](e*100);this.containerNode.style.WebkitTransform=l,this.containerNode.style.transform=l}}},{key:"handleTransitionEnd",value:function(){this.props.onTransitionEnd&&(this.state.displaySameSlide||this.state.isDragging||this.props.onTransitionEnd())}},{key:"render",value:function(){var e=this,t=this.props;t.action;var l=t.animateHeight,h=t.animateTransitions,c=t.axis,b=t.children,_=t.containerStyle,M=t.disabled;t.disableLazyLoading;var x=t.enableMouseEvents;t.hysteresis,t.ignoreNativeScroll,t.index,t.onChangeIndex,t.onSwitching,t.onTransitionEnd,t.resistance;var E=t.slideStyle,N=t.slideClassName,R=t.springConfig,V=t.style;t.threshold;var Y=(0,o.default)(t,["action","animateHeight","animateTransitions","axis","children","containerStyle","disabled","disableLazyLoading","enableMouseEvents","hysteresis","ignoreNativeScroll","index","onChangeIndex","onSwitching","onTransitionEnd","resistance","slideStyle","slideClassName","springConfig","style","threshold"]),T=this.state,ee=T.displaySameSlide,U=T.heightLatest,q=T.indexLatest,ve=T.isDragging,ge=T.renderOnlyActive,$e=M?{}:{onTouchStart:this.handleTouchStart,onTouchEnd:this.handleTouchEnd},Be=!M&&x?{onMouseDown:this.handleMouseDown,onMouseUp:this.handleMouseUp,onMouseLeave:this.handleMouseLeave,onMouseMove:this.handleMouseMove}:{},ye=(0,i.default)({},v.slide,E),z,F;if(ve||!h||ee)z="all 0s ease 0s",F="all 0s ease 0s";else if(z=P("transform",R),F=P("-webkit-transform",R),U!==0){var Se=", ".concat(P("height",R));z+=Se,F+=Se}var $={height:null,WebkitFlexDirection:y.flexDirection[c],flexDirection:y.flexDirection[c],WebkitTransition:F,transition:z};if(!ge){var xe=y.transform[c](this.indexCurrent*100);$.WebkitTransform=xe,$.transform=xe}return l&&($.height=U),g.createElement(he.Provider,{value:this.getSwipeableViewsContext()},g.createElement("div",(0,i.default)({ref:this.setRootNode,style:(0,i.default)({},y.root[c],V)},Y,$e,Be,{onScroll:this.handleScroll}),g.createElement("div",{ref:this.setContainerNode,style:(0,i.default)({},$,v.container,_),className:"react-swipeable-view-container"},g.Children.map(b,function(Ge,be){if(ge&&be!==q)return null;var me,we=!0;return be===q&&(we=!1,l&&(me=e.setActiveSlide,ye.overflowY="hidden")),g.createElement("div",{ref:me,style:ye,className:N,"aria-hidden":we,"data-swipeable":"true"},Ge)}))))}}]),f}(g.Component);A.displayName="ReactSwipableView",A.propTypes={},A.defaultProps={animateHeight:!1,animateTransitions:!0,axis:"x",disabled:!1,disableLazyLoading:!1,enableMouseEvents:!1,hysteresis:.6,ignoreNativeScroll:!1,index:0,threshold:5,springConfig:{duration:"0.35s",easeFunction:"cubic-bezier(0.15, 0.3, 0.25, 1)",delay:"0s"},resistance:!1};var Fe=A;return C.default=Fe,C}(function(r){var n=Ye;Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(r,"SwipeableViewsContext",{enumerable:!0,get:function(){return i.SwipeableViewsContext}});var i=n(gt())})(fe);const yt=Je(fe),mt=Qe({__proto__:null,default:yt},[fe]);export{mt as i};
