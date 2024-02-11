import{j as e}from"./TransitionGroupContext-9d36972e.js";import{R as p}from"./index-f1f749bf.js";import{au as _,av as $,u as w,ac as T,aP as b,g as S,b as q,B as n,W as A,aM as F,N as k,O as d,Q as D,al as L}from"./papaparse.min-b66e70e7.js";import Q from"./MilestoneForm-9825d61c.js";import{d as f}from"./Play-87fed129.js";import{g as x}from"./_baseForOwn-9b89c4b6.js";import{u as B,g as v,f as N}from"./react-router-19e5b27c.js";import{q as O,w as W}from"./index-bcfaa842.js";import"./assertThisInitialized-ad1db8e7.js";import"./_commonjsHelpers-042e6b4d.js";import"./_arrayIncludes-2cfb33ae.js";import"./index-96c5f47c.js";import"./Button-352c3435.js";import"./isPlainObject-07477f89.js";import"./debounce-213cd46f.js";import"./iframe-ed7f5a3f.js";import"../sb-preview/runtime.js";import"./index-4d501b15.js";import"./camelCase-4e7e8b23.js";import"./capitalize-c31f38e2.js";import"./useIncludeFieldNames-35a180a9.js";import"./pick-dba65392.js";import"./filter-f99df4e5.js";import"./LocalizationProvider-a287304f.js";import"./index-61adb48a.js";import"./useGetProjectSummaryFields-0ab32aca.js";import"./SelectEsModelInput-d580a9f7.js";import"./Link-c687dc07.js";import"./react-router-dom-60ea8218.js";import"./tiny-invariant-dd7d57d2.js";import"./Save-b67fa0ac.js";import"./index-147ad7aa.js";import"./Add-be7f5660.js";import"./uniq-0d482d7b.js";import"./Skeleton-cd6f071e.js";import"./Alert-fd9a067a.js";import"./cloneDeep-91467704.js";import"./isNativeReflectConstruct-05c29d01.js";var j={},H=$;Object.defineProperty(j,"__esModule",{value:!0});var u=j.default=void 0,K=H(_()),Y=e;u=j.default=(0,K.default)((0,Y.jsx)("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8"}),"PanoramaFishEye");const h="_new",z=S`
  query($filter: SearchableMilestoneFilterInput) {
    l: searchMilestones(limit: 99, filter: $filter) {
      items {
        id
        name
        description
        isInvoice
        hasPaid
        completed
        cost
        estimate
        start
        due
        precedence
        invRefId
        invRefNum
        invDate
        invDue
        invAmount
        invTax
        invQty
        invAcct
      }
    }
  }
`;function G(o){const s={};o.projectId?s.milestoneProjectId={eq:o.projectId}:o.opportunityId&&(s.milestoneOppId={eq:o.opportunityId}),o.searchText&&(s.name={matchPhrasePrefix:o.searchText});const{data:a,...r}=w(z,{variables:{...!T(s)&&{filter:s}},fetchPolicy:"network-only",nextFetchPolicy:"cache-first"});return{milestones:b(x(a,"l.items",[]),"due","desc"),query:r}}function J(o="milestones"){const{projectId:s,opportunityId:a}=B(),r=v(`/project/:projectId/${o}/:milestoneId`),c=v(`/sales/opportunity/:opportunityId/${o}/:milestoneId`),l=x(r,"params.milestoneId")||x(c,"params.milestoneId");let i;return s&&(i=`/project/${s}/${o}/`),a&&(i=`/sales/opportunity/${a}/${o}/`),{milestoneId:l,listRoute:i,opportunityId:a,projectId:s}}function Ae({totalComponent:o}){const[s,a]=p.useState({searchTxt:null}),r=p.useRef(null),c=O(),l=N(),{milestoneId:i,listRoute:m,projectId:R,opportunityId:C}=J(),{milestones:I,query:{refetch:y,loading:P}}=G({searchText:s.searchTxt,projectId:R,opportunityId:C});p.useEffect(()=>{i?r.current.open():r.current.close()},[i]);const E=p.useCallback(()=>{r.current&&l.push(m)},[l,m]),g=p.useCallback(()=>{q.delay(2e3).then(()=>y())},[y]);return e.jsxs(n,{mb:2,children:[e.jsx(A,{variant:"dialog",ref:r,onClose:E,dialogProps:{maxWidth:"sm",fullWidth:!0},children:e.jsx(Q,{id:i!==h&&i,onCancel:()=>{l.push(m)},onSubmit:g,onDelete:g})}),e.jsx(F,{createLabel:"Milestone",onSearch:t=>{a(M=>({...M,searchTxt:t}))},onNewClicked:()=>{console.log(">>MilestoneList/index::","listRoute, CREATE_KEY",m,h),l.push(`${m}${h}`)}}),e.jsx(n,{mt:2}),o&&e.jsx(o,{items:I}),e.jsx(n,{mt:2}),e.jsxs(k,{loading:P,data:I,onRowClick:t=>l.push(`${m}${t.id}`),rowProps:{style:{cursor:"pointer"}},onRowActionSelect:console.log,children:[e.jsx(d,{dataId:"completed",width:"100px",render:t=>e.jsx(n,{display:"flex",justifyContent:"center",children:e.jsx(n,{mr:1,component:"span",color:t?c.palette.success.light:"lightgrey",children:t?e.jsx(f,{}):e.jsx(u,{})})})}),e.jsx(d,{dataId:"name",render:t=>e.jsx(n,{fontSize:"large",children:t})}),e.jsx(d,{dataId:"isInvoice",label:"Has Invoice",width:"100px",render:t=>e.jsx(n,{component:"center",color:t?c.palette.success.light:"lightgrey",children:t?e.jsx(f,{}):e.jsx(u,{})})}),e.jsx(d,{dataId:"hasPaid",label:"Paid",width:"57px",render:t=>e.jsx(n,{component:"center",color:t?c.palette.success.light:"lightgrey",children:t?e.jsx(f,{}):e.jsx(u,{})})}),e.jsx(D,{dataId:"cost",label:"Amount",width:"215px",render:t=>t?W.numberFormatter(t).toCurrency():"-"}),e.jsx(L,{dataId:"due",format:"PP",width:"135px"})]})]})}export{Ae as default};
