import{j as e}from"./TransitionGroupContext-9d36972e.js";import"./index-f1f749bf.js";import{Y as l,Z as c}from"./papaparse.min-b66e70e7.js";import{S as o,e as r,w as u}from"./Play-87fed129.js";import"./assertThisInitialized-ad1db8e7.js";import"./_commonjsHelpers-042e6b4d.js";import"./_arrayIncludes-2cfb33ae.js";import"./_baseForOwn-9b89c4b6.js";import"./index-bcfaa842.js";import"./index-96c5f47c.js";import"./isNativeReflectConstruct-05c29d01.js";import"./Button-352c3435.js";import"./isPlainObject-07477f89.js";import"./debounce-213cd46f.js";import"./iframe-ed7f5a3f.js";import"../sb-preview/runtime.js";import"./index-4d501b15.js";import"./react-router-19e5b27c.js";import"./tiny-invariant-dd7d57d2.js";import"./filter-f99df4e5.js";import"./LocalizationProvider-a287304f.js";import"./react-router-dom-60ea8218.js";import"./uniq-0d482d7b.js";import"./cloneDeep-91467704.js";const y=u(c),q=({userId:m,...a})=>{const i=new Date,n=String(i.getDate()).padStart(2,"0"),s=String(i.getMonth()+1).padStart(2,"0"),p={dateAttained:`${i.getFullYear()}-${s}-${n}`},[d]=l(["kwTeamMemberSkillsList"]);return e.jsxs(y,{id:m,name:"user",title:"Skill",initialValues:p,beforeSave:t=>(t.dateAttained&&(t.dateAttained=new Date(t.dateAttained)),console.log("values",t),t),...a,children:[e.jsx(o,{name:"skill",options:d.kwTeamMemberSkillsList}),e.jsx(o,{name:"level",options:["1","2","3","4","5"]}),e.jsx(r,{type:"date",fullWidth:!0,name:"dateAttained"}),e.jsx(r,{name:"comments",multiline:!0})]})};export{q as default};
