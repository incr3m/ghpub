import{_ as p}from"./iframe-ed7f5a3f.js";import{j as e}from"./TransitionGroupContext-9d36972e.js";import{R as a}from"./index-f1f749bf.js";import{u as c}from"./useTaskAssignees-9f1fd5d3.js";import{r as f,B as n}from"./papaparse.min-b66e70e7.js";import{B as u}from"./Button-352c3435.js";import"../sb-preview/runtime.js";import"./assertThisInitialized-ad1db8e7.js";import"./_commonjsHelpers-042e6b4d.js";import"./_arrayIncludes-2cfb33ae.js";import"./_baseForOwn-9b89c4b6.js";import"./index-bcfaa842.js";import"./index-96c5f47c.js";import"./isNativeReflectConstruct-05c29d01.js";import"./isPlainObject-07477f89.js";import"./debounce-213cd46f.js";import"./index-4d501b15.js";const v=a.lazy(()=>p(()=>import("./TaskAssignees-858ea3c9.js").then(t=>t.a),["./TaskAssignees-858ea3c9.js","./TransitionGroupContext-9d36972e.js","./index-f1f749bf.js","./_commonjsHelpers-042e6b4d.js","./assertThisInitialized-ad1db8e7.js","./papaparse.min-b66e70e7.js","./_arrayIncludes-2cfb33ae.js","./_baseForOwn-9b89c4b6.js","./index-bcfaa842.js","./index-96c5f47c.js","./isNativeReflectConstruct-05c29d01.js","./Button-352c3435.js","./isPlainObject-07477f89.js","./debounce-213cd46f.js","./iframe-ed7f5a3f.js","./index-4d501b15.js","./papaparse-cdbe7e6d.css","./Play-87fed129.js","./react-router-19e5b27c.js","./tiny-invariant-dd7d57d2.js","./filter-f99df4e5.js","./LocalizationProvider-a287304f.js","./react-router-dom-60ea8218.js","./uniq-0d482d7b.js","./cloneDeep-91467704.js"],import.meta.url));function T(t){const{taskId:o,...m}=t,[l,r]=a.useState(!1);console.log(">>task-field-editors/AssigneeEditorPopover::","taskId",o);const i=c();return a.useEffect(()=>{i.setState({assignments:null,saved:!1})},[t.open]),e.jsx(f,{...m,children:e.jsxs("div",{onClick:s=>{s.stopPropagation()},children:[e.jsx(n,{children:e.jsx(v,{id:o,saved:i.isSaved,readOnly:!1,onAssignementsChanged:s=>{i.setState(d=>({...d,assignments:s}))}})}),e.jsx(n,{sx:{p:1,textAlign:"right"},children:e.jsx(u,{size:"small",variant:"contained",disabled:l,onClick:async()=>{var s;r(!0),await i.save(o),r(!1),(s=t.onClose)==null||s.call(t,{},"backdropClick")},children:"Submit"})})]})})}export{T as default};
