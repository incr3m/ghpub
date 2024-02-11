import{j as t}from"./TransitionGroupContext-9d36972e.js";import{R as d}from"./index-f1f749bf.js";import{u as c,ac as p,l as h,P as f,ak as u,B as g,N as x,al as b,O as n,Q as T,R as y,m as j}from"./papaparse.min-b66e70e7.js";import{g as k}from"./_baseForOwn-9b89c4b6.js";import{b as I,h as P}from"./Play-87fed129.js";import{u as w}from"./useFetchMore-be228481.js";import"./assertThisInitialized-ad1db8e7.js";import"./_commonjsHelpers-042e6b4d.js";import"./_arrayIncludes-2cfb33ae.js";import"./index-bcfaa842.js";import"./index-96c5f47c.js";import"./isNativeReflectConstruct-05c29d01.js";import"./Button-352c3435.js";import"./isPlainObject-07477f89.js";import"./debounce-213cd46f.js";import"./iframe-ed7f5a3f.js";import"../sb-preview/runtime.js";import"./index-4d501b15.js";import"./react-router-19e5b27c.js";import"./tiny-invariant-dd7d57d2.js";import"./filter-f99df4e5.js";import"./LocalizationProvider-a287304f.js";import"./react-router-dom-60ea8218.js";import"./uniq-0d482d7b.js";import"./cloneDeep-91467704.js";const S=j({root:{marginTop:20},filters:{marginTop:-60,float:"right",marginRight:120,paddingLeft:20}});function tt(){const[e,s]=d.useState({showPast:!1}),i=S(),o={};e.showPast||(o.date={gte:new Date().toLocaleDateString("en-se").substring(0,10)});const a=c(h`
      query QUERY_ALLOC_LIST(
        $filter: SearchableAllocationFilterInput
        $nextToken: String
      ) {
        searchAllocations(
          filter: $filter
          nextToken: $nextToken
          limit: 10
          sort: { field: date, direction: ${e.showPast?"desc":"asc"} }
        ) {
          nextToken
          items {
            id
            date
            duration
            memberId
            assignType
            assignToId
          }
        }
      }
    `,{fetchPolicy:"network-only",nextFetchPolicy:"cache-first",variables:{...!p(o)&&{filter:o}}}),l=k(a,"data.searchAllocations.items",[]),m=w({...a,model:"Allocation",op:"search",maxLength:10});return t.jsxs("div",{className:i.root,children:[t.jsx(f,{className:i.filters,children:t.jsx(u,{label:"Show Past Allocations",onChange:()=>{s(r=>({...r,showPast:!r.showPast}))},checked:e.showPast})}),t.jsxs(g,{mr:2,children:[t.jsxs(x,{loading:a.loading,data:l,children:[t.jsx(b,{dataId:"date",label:"date",format:"dd/MM/yyyy"}),t.jsx(n,{dataId:"memberId",label:"Member",render:C}),t.jsx(n,{dataId:"assignToId",label:"Assigned To",render:L}),t.jsx(T,{dataId:"duration",label:"duration (hrs)"})]}),!a.loading&&t.jsx(y,{onClick:m.more})]})]})}function C(e){return t.jsx(I,{id:e})}function L(e,s){return s!=null&&s.assignType?t.jsx(P,{modelName:s.assignType,modelId:e}):null}export{tt as default};
