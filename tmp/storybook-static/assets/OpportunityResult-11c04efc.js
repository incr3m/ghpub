import{j as t}from"./TransitionGroupContext-9d36972e.js";import{R as s}from"./index-f1f749bf.js";import{S as c,T as d}from"./index-a5d2bff6.js";import{P as l,g as x}from"./Play-87fed129.js";import{O as j}from"./OpportunityLink-b32d0c35.js";import{b as y}from"./index-bcfaa842.js";import{B as i,X as f,i as h,T as m}from"./papaparse.min-b66e70e7.js";import"./assertThisInitialized-ad1db8e7.js";import"./_commonjsHelpers-042e6b4d.js";import"./hotkeys-a6c2398e.js";import"./filter-f99df4e5.js";import"./Button-352c3435.js";import"./LocalizationProvider-a287304f.js";import"./_baseForOwn-9b89c4b6.js";import"./Stop-d43309a7.js";import"./react-router-dom-60ea8218.js";import"./react-router-19e5b27c.js";import"./index-4d501b15.js";import"./tiny-invariant-dd7d57d2.js";import"./Error-a5d563f0.js";import"./ProjectSelect-6c06b3ef.js";import"./iframe-ed7f5a3f.js";import"../sb-preview/runtime.js";import"./Save-1bca3c1a.js";import"./_arrayIncludes-2cfb33ae.js";import"./index-96c5f47c.js";import"./index-5757e0d6.js";import"./TaskStatusPrompt-5fa87980.js";import"./debounce-213cd46f.js";import"./SearchIcon-482ff285.js";import"./Cup-50456763.js";import"./auth-5b6b0f80.js";import"./uniq-0d482d7b.js";import"./cloneDeep-91467704.js";import"./isNativeReflectConstruct-05c29d01.js";import"./isPlainObject-07477f89.js";function tt({result:r}){var a;const{classes:o,startCurrentInterval:p,afterSubmit:e}=s.useContext(c),{enqueueSnackbar:n}=y();return t.jsx(i,{className:o.resultContainer,children:t.jsxs("div",{className:o.oppItem,children:[t.jsxs(i,{display:"flex",alignItems:"center",children:[t.jsx(f,{title:"Start task",children:t.jsx(h,{edge:"start",size:"small",onClick:()=>{r!=null&&r.estimatedEffort||n("Please set an Estimated Effort on your current interval.",{variant:"warning"}),p({targetId:r.id,targetType:r.resultType}),e()},children:t.jsx(l,{size:"small"})})}),t.jsxs(i,{ml:1,display:"flex",alignItems:"center",children:[t.jsx("div",{className:"opp-chip",children:"Opportunity"}),t.jsx(j,{data:r})]})]}),r.company&&t.jsx("div",{children:t.jsxs(m,{color:"textSecondary",variant:"caption",children:["In company"," ",t.jsx(x,{model:"Company",data:r.company,children:t.jsx("strong",{children:((a=r.company)==null?void 0:a.name)||""})})]})}),t.jsx(i,{children:t.jsx(m,{color:"textSecondary",variant:"caption",children:t.jsx(d,{date:r.createdAt})})})]})},r.id)}export{tt as default};
