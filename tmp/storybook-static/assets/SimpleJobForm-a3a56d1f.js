import{j as t}from"./TransitionGroupContext-9d36972e.js";import{R as c}from"./index-f1f749bf.js";import{l as v,o as P,d as B,p as N,u as L,ac as Q,ad as G,B as u,a4 as H,T as E,ar as K,as as V,K as Z,U as z,b as X,Z as Y,at as tt}from"./papaparse.min-b66e70e7.js";import{T}from"./TextField-66711980.js";import{g as k}from"./_baseForOwn-9b89c4b6.js";import{u as _,a as et,p as ot,b as st}from"./pick-dba65392.js";import{u as O}from"./react-router-19e5b27c.js";import{j as at,w as rt,t as D}from"./Play-87fed129.js";import{C as w}from"./SelectEsModelInput-d580a9f7.js";import{u as nt}from"./useIncludeFieldNames-35a180a9.js";import"./assertThisInitialized-ad1db8e7.js";import"./_commonjsHelpers-042e6b4d.js";import"./_arrayIncludes-2cfb33ae.js";import"./index-bcfaa842.js";import"./index-96c5f47c.js";import"./isNativeReflectConstruct-05c29d01.js";import"./Button-352c3435.js";import"./isPlainObject-07477f89.js";import"./debounce-213cd46f.js";import"./iframe-ed7f5a3f.js";import"../sb-preview/runtime.js";import"./index-4d501b15.js";import"./filter-f99df4e5.js";import"./LocalizationProvider-a287304f.js";import"./index-61adb48a.js";import"./useGetProjectSummaryFields-0ab32aca.js";import"./Link-c687dc07.js";import"./react-router-dom-60ea8218.js";import"./tiny-invariant-dd7d57d2.js";import"./Save-b67fa0ac.js";import"./index-147ad7aa.js";import"./Add-be7f5660.js";import"./uniq-0d482d7b.js";import"./cloneDeep-91467704.js";const it=({update:s=!1})=>v`
  mutation SET_TASK_ASSIGNMENT(
    $contactInput: CreateContactInput!
    $taInput: ${s?"Update":"Create"}TaskAssignmentInput!
    $shouldCreateContact: Boolean!
  ) {
    createContact(input: $contactInput) @include(if: $shouldCreateContact) {
      id
      firstName
      lastName
      mobileNumber
    }
    ${s?"update":"create"}TaskAssignment(input: $taInput) {
      id
      taskId
      contactId
      startTime
    }
  }
`,lt=v`
  query SearchTaskAssignments(
    $filter: SearchableTaskAssignmentFilterInput
    $sort: SearchableTaskAssignmentSortInput
    $limit: Int
    $nextToken: String
    $from: Int
  ) {
    searchTaskAssignments(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
    ) {
      items {
        id
        taskId
        details
        userId
        contactId
        contact {
          id
          firstName
          lastName
          telephoneNumber
          mobileNumber
          email
          jobTitle
          website
          interests
        }
        startTime
        endTime
        archived
        createdAt
        updatedAt
        createdBy
        updatedBy
      }
      nextToken
      total
    }
  }
`;function ct({readOnly:s}){const[{values:o,existing:i},e]=c.useState({values:{},existing:!0}),j=P(),{id:b}=c.useContext(B),m={...N().values||{},id:b},{companyId:r}=O();console.log(">>types/SimpleJobContact::","data",m);const l=m.id,C=L(lt,{variables:{filter:{taskId:{eq:l},contactId:{exists:!0}},sort:{field:"createdAt",direction:"desc"}},skip:!l,fetchPolicy:"network-only",nextFetchPolicy:"cache-first"});console.log(">>types/SimpleJobContact::","taQ",C);const d=k(C,"data.searchTaskAssignments.items.0.contact"),I=k(C,"data.searchTaskAssignments.items.0");console.log(">>types/SimpleJobContact::","contact",d),c.useEffect(()=>{d&&e(n=>({...n,values:d}))},[d]),_(async n=>{if(Q(o))return n;const a=n.id,x=o==null?void 0:o.id,h=I==null?void 0:I.id,J=Date.now(),U=h||`TA:${a}::${J}`,A=x||`TAC:${a}::${J}`,{firstName:q,lastName:M,mobileNumber:R}=o,W=await j.mutate({mutation:it({update:!!h}),variables:{shouldCreateContact:!x,contactInput:{id:A,firstName:q,lastName:M,mobileNumber:R},taInput:{id:U,taskId:a,contactId:A,startTime:new Date}}});return console.log(">>types/SimpleJobContact::","res",W),n}),console.log(">>types/SimpleJobContact::","values",o);const S=c.useCallback((n,a)=>{console.log(">>types/SimpleJobContact::","data",a),e(x=>({...x,values:k(a,"_source")}))},[]),{TextFieldClear:$,ClearVisibilityRuleSx:g}=z(),p=c.useCallback(n=>({sx:g,fullWidth:!0,value:o[n]||"",onChange(a){const x=a.target.value;e(h=>({...h,values:{...h.values,[n]:x}}))},endAdornment:t.jsx($,{clearFn:()=>{e(a=>({...a,values:{...a.values,[n]:""}}))}})}),[o]);let y;return r&&(y=G({},"bool.must.term",{"contactCompanyId.keyword":r})),t.jsxs(u,{mt:1,pt:1,children:[t.jsx(H,{}),t.jsx(E,{variant:"overline",children:t.jsx("strong",{children:"Contact"})}),!s&&t.jsx(u,{children:t.jsx(K,{control:t.jsx(V,{color:"secondary",checked:i,onChange:()=>{e(n=>{const a={...n,existing:!n.existing};return delete a.values.id,a})},value:i}),label:"Use Existing"})}),i&&t.jsx(u,{children:t.jsx(Z,{variant:"slim",value:o==null?void 0:o.id,onChange:S,readOnly:s,renderReadOnly:()=>t.jsxs("span",{children:[o==null?void 0:o.firstName," ",o==null?void 0:o.lastName]}),model:"Contact",label:"Select Contact",fullWidth:!0,multiple:!0,query:y})}),!i&&t.jsxs(u,{mt:1,children:[t.jsx(T,{label:"First Name",...p("firstName")}),t.jsx(T,{label:"Last Name",...p("lastName")}),t.jsx(T,{label:"Phone Number",...p("mobileNumber")})]})]})}const mt=rt(Y),F="SIMPLE_JOB::";function pt(){const{values:s={}}=N(),{id:o,state:i}=c.useContext(B),e={...s,id:o},{companyId:j}=O(),[b,f]=c.useState({fullDetails:!1,showContact:!0}),m=e==null?void 0:e.projectId,r=et(m);c.useEffect(()=>{r&&f(d=>({...d,showContact:[D.simple.key].includes(r)}))},[r]);const{globalState:{authUser:l}}=tt(),C=P();return console.log(">>types/SimpleJobForm::","values",s),_(async d=>{const{title:I,jobDetails:S,id:$,project:g}=e||{};console.log(">>types/SimpleJobForm::","data",e);let p=$,y=!0;p||(y=!1,p=d.id),console.log(">>types/SimpleJobForm::","project,data",g,e);const n=l.id,a=`${F}${p}`;return await C.mutate({mutation:ut({update:y}),variables:{taskId:p,projectId:a,input:{name:I,description:S,type:D.simple.key,companyId:j,...ot(g,["color","source","sourceClientId","managerUserId","startDateEst"]),id:a,updatedBy:n}}}),console.log(">>types/SimpleJobForm::","context.data",e,e),{...d,...{id:p,projectId:p,updatedBy:n}}}),t.jsxs(u,{m:1,mb:0,width:e!=null&&e.id||i.readOnly?"300px":void 0,p:2,children:[t.jsx(E,{variant:"overline",children:t.jsx("strong",{children:"Details"})}),t.jsx(u,{mt:1}),t.jsx(dt,{readOnly:i.readOnly}),t.jsx(u,{mt:1}),t.jsx(w,{fieldName:"title",label:"Name",fullWidth:!0}),t.jsx(u,{mt:1}),t.jsx(w,{fieldName:"jobDetails",label:"Description",fullWidth:!0,multiline:!0}),b.showContact&&t.jsx(ct,{readOnly:i.readOnly})]})}function dt({readOnly:s}){var f,m;const[o,i]=c.useState(null),{values:e={},setFieldValue:j}=N();nt(["project"]);const b=r=>{j("project",{...e.project,color:r}),i(r)};return console.log(">>types/SimpleJobForm::","values.project",(f=e.project)==null?void 0:f.color),t.jsx(st,{readOnly:s,value:o||((m=e==null?void 0:e.project)==null?void 0:m.color),onChange:b})}function Kt({id:s,initialValues:o,...i}={}){console.log(">>types/SimpleJobForm::","rest",i);const e=s?"Update":"Create",j=c.useCallback(r=>{const l={...r};return l.managerUserId=void 0,l.project=void 0,l.color=void 0,console.log(">>types/SimpleJobForm::ss","taskValues",l),l},[]),[b]=at({opts:{forceDelete:!0}}),f=c.useCallback(async r=>{const l=k(r,"data.d.id"),C=`${F}${l}`;await b({id:C,__typename:"Project"}),await X.delay(2e3),i.onDelete&&i.onDelete(r)},[]);console.log(">>types/SimpleJobForm::","id",s);let m;return s&&(m=s.replace(F,"")),t.jsx("div",{children:t.jsx(mt,{name:"task",title:s?"Simple Job Details":"Create Simple Job",initialValues:o,id:m,submitButtonLabel:`${e} Simple Job`,beforeSave:j,queryFields:r=>`${r}, project { id,name,color }`,...i,onDelete:f,children:t.jsx(pt,{})})})}function ut({update:s=!1}){return v`
  mutation ($input: ${s?"Update":"Create"}ProjectInput!, $taskId: ID!, $projectId: String) {
    ${s?"update":"create"}Project(input: $input){
      id
      name
      color
      type
      companyId
      description
    }
    updateTask(input:{ id: $taskId, projectId: $projectId }){
      id
      projectId
      project {
        id
        name
        color
        type
        companyId
        description
      }
    }
  }
  `}export{Kt as default};
