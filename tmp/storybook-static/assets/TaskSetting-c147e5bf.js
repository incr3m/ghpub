import{j as t}from"./TransitionGroupContext-9d36972e.js";import{R as i}from"./index-f1f749bf.js";import{S as j,e as S}from"./Play-87fed129.js";import{S as g}from"./index-611aed03.js";import{B as m,W as b,h as F,Y as v,aW as C,p as I}from"./papaparse.min-b66e70e7.js";import{d as T}from"./debounce-213cd46f.js";import{B as x}from"./Button-352c3435.js";import{u as W}from"./ProjectLink-987015ba.js";import{A as B}from"./AttributeDefinitionField-dae4d5e0.js";import"./assertThisInitialized-ad1db8e7.js";import"./_commonjsHelpers-042e6b4d.js";import"./react-router-19e5b27c.js";import"./index-4d501b15.js";import"./tiny-invariant-dd7d57d2.js";import"./index-bcfaa842.js";import"./index-96c5f47c.js";import"./isNativeReflectConstruct-05c29d01.js";import"./iframe-ed7f5a3f.js";import"../sb-preview/runtime.js";import"./filter-f99df4e5.js";import"./LocalizationProvider-a287304f.js";import"./_baseForOwn-9b89c4b6.js";import"./react-router-dom-60ea8218.js";import"./uniq-0d482d7b.js";import"./_arrayIncludes-2cfb33ae.js";import"./cloneDeep-91467704.js";import"./isPlainObject-07477f89.js";import"./pick-dba65392.js";import"./index-61adb48a.js";import"./useGetProjectSummaryFields-0ab32aca.js";import"./SelectEsModelInput-d580a9f7.js";import"./Link-c687dc07.js";import"./useIncludeFieldNames-35a180a9.js";import"./Save-b67fa0ac.js";import"./index-147ad7aa.js";import"./Add-be7f5660.js";import"./camelCase-4e7e8b23.js";import"./capitalize-c31f38e2.js";import"./Trash-822e65ce.js";import"./AttributeFieldTypes-f31007ac.js";import"./MultipleSelectFieldInput-d0cee4a2.js";function D({value:e,label:p,onChange:s,onSubmit:a}){const[r,u]=i.useState({inputValue:null,error:null,fsm:null}),c=i.useRef(null);i.useEffect(()=>{u(l=>({...l,inputValue:JSON.stringify(JSON.parse(e||"{}"),null,2)}))},[e]);const d=i.useCallback(T(l=>{let o=null,n=null;try{o=JSON.parse(l),s&&s(o)}catch{n="Invalid JSON"}u(f=>({...f,error:n,fsm:n?f.fsm:o}))},500),[s]),h=i.useCallback(l=>{const o=l.target.value;u(n=>({...n,inputValue:o,error:"."})),d(o)},[d]),k=i.useCallback(()=>{a&&a(r.fsm),c.current.close()},[a,r.fsm]);return t.jsxs(m,{children:[t.jsx(x,{variant:"outlined",onClick:()=>{c.current.toggle()},children:p}),t.jsxs(b,{variant:"dialog",ref:c,dialogProps:{maxWidth:"sm",fullWidth:!0},children:[t.jsx(m,{p:2,children:t.jsx(F,{fullWidth:!0,variant:"outlined",maxRows:30,multiline:!0,value:r.inputValue||"",onChange:h})}),t.jsxs(m,{display:"flex",m:2,mt:0,flexDirection:"row-reverse",alignItems:"center",children:[t.jsx(x,{disabled:!!r.error,variant:"contained",onClick:k,children:"Update"}),r.error&&t.jsx(m,{color:"red",mr:1,children:r.error})]})]})]})}function R(){const{values:e,setFieldValue:p}=I(),s=i.useMemo(()=>"defaultFSM",[]);W({paths:[{label:"",link:"/"},{label:"Settings",link:"/settings"},{label:"Task",link:"/settings?navtab=task"}]});const a=i.useCallback(r=>{p(s,JSON.stringify(r))},[p,s]);return t.jsx(D,{value:e==null?void 0:e[s],label:"Default Task FSM",onSubmit:a})}function jt(){const[e]=v(["kwTaskStatusList"]);return t.jsx(m,{maxWidth:"500px",children:t.jsxs(g,{code:"task-setting",module:"project",children:[t.jsx(j,{name:"completeTaskStatus",options:(e==null?void 0:e.kwTaskStatusList)||[]}),t.jsx(S,{fullWidth:!0,name:"machineId",label:"Machine ID"}),t.jsx(R,{}),t.jsx(C,{mt:1}),t.jsx(B,{field:"attributes"})]})})}export{jt as default};
