import{a as n}from"./papaparse.min-b66e70e7.js";import{l as d}from"./index-bcfaa842.js";const g=async c=>{var l;const{searchText:i,ids:a=[],limit:m=999,roleName:r}=c,t=[...(l=a==null?void 0:a.filter(Boolean))==null?void 0:l.map(h=>({id:{eq:h}})).filter(Boolean),i&&{fullname:{matchPhrasePrefix:i}}].filter(Boolean),s=r&&await n({key:"searchRoles",variables:{limit:1,filter:{name:{eq:r}}},depthLimit:1}),[e]=typeof s!="string"?(s==null?void 0:s.items)||[]:[];console.log({role:e});const f={archived:{ne:!0},status:{ne:"In-Active"},userRoleId:{eq:e==null?void 0:e.id},or:t!=null&&t.length?t:void 0},o=await n({key:"searchUsers",variables:{limit:m,filter:d.merge(f,e?{userRoleId:{eq:e==null?void 0:e.id}}:{})},depthLimit:1});return console.log({query:o}),o};export{g as s};
