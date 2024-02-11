import{j as e}from"./TransitionGroupContext-9d36972e.js";import{R as b}from"./index-f1f749bf.js";import{au as K,av as G,bZ as Z,b_ as k,N as ee,O as te,Q as u,B as p,J as re,at as se,X as x,i as h,b$ as Q,v as oe,z as I,aQ as ae,K as U,ak as ie,aR as L,w as W,c0 as le,u as ne,l as de,R as ce}from"./papaparse.min-b66e70e7.js";import{u as me}from"./useFetchMore-be228481.js";import{f as y,b as pe,d as ue,e as xe}from"./index-bcfaa842.js";import{R as J,H as he,P as fe,p as je}from"./Play-87fed129.js";import{U as Ie}from"./filter-f99df4e5.js";import{E as be}from"./SortUpIcon-3aecf5f0.js";import{a as q,S as ge}from"./Stop-d43309a7.js";import{H as N,T as ke}from"./index-66552ec6.js";import{P as ye}from"./ProjectLink-987015ba.js";import{M as Te}from"./index-864004f3.js";import{u as ve}from"./react-router-19e5b27c.js";import"./assertThisInitialized-ad1db8e7.js";import"./_commonjsHelpers-042e6b4d.js";import"./_arrayIncludes-2cfb33ae.js";import"./_baseForOwn-9b89c4b6.js";import"./index-96c5f47c.js";import"./Button-352c3435.js";import"./isPlainObject-07477f89.js";import"./debounce-213cd46f.js";import"./iframe-ed7f5a3f.js";import"../sb-preview/runtime.js";import"./index-4d501b15.js";import"./isNativeReflectConstruct-05c29d01.js";import"./react-router-dom-60ea8218.js";import"./tiny-invariant-dd7d57d2.js";import"./uniq-0d482d7b.js";import"./cloneDeep-91467704.js";import"./LocalizationProvider-a287304f.js";import"./pick-dba65392.js";import"./index-61adb48a.js";import"./useGetProjectSummaryFields-0ab32aca.js";import"./SelectEsModelInput-d580a9f7.js";import"./Link-c687dc07.js";import"./useIncludeFieldNames-35a180a9.js";import"./Save-b67fa0ac.js";import"./index-147ad7aa.js";import"./Add-be7f5660.js";var T={},De=G;Object.defineProperty(T,"__esModule",{value:!0});var X=T.default=void 0,Se=De(K()),we=e;X=T.default=(0,Se.default)((0,we.jsx)("path",{d:"M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m-9-2V7H4v3H1v2h3v3h2v-3h3v-2zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4"}),"PersonAdd");var v={},_e=G;Object.defineProperty(v,"__esModule",{value:!0});var Y=v.default=void 0,Ce=_e(K()),V=e;Y=v.default=(0,Ce.default)([(0,V.jsx)("circle",{cx:"15",cy:"8",r:"4"},"0"),(0,V.jsx)("path",{d:"M23 20v-2c0-2.3-4.1-3.7-6.9-3.9l6 5.9zm-11.6-5.5C9.2 15.1 7 16.3 7 18v2h9.9l4 4 1.3-1.3-21-20.9L0 3.1l4 4V10H1v2h3v3h2v-3h2.9zM6 10v-.9l.9.9z"},"1")],"PersonAddDisabled");function Me({loading:o,timesheets:r,hideDate:s,hideActions:d,hideTasks:c,beTableProps:m={}}){const i=b.useContext(Z),{currentInterval:a}=i,l=b.useCallback(t=>{var _,C,M,P,A,$,E,R,z,H,B,F,O;let n,f,D=null,j,g=null,S;t.targetType===k.Project.resultType?(f=(_=t.project)==null?void 0:_.name,n=(C=t.project)==null?void 0:C.id,j=`/project/${(M=t.project)==null?void 0:M.id}`,g=(P=t.project)==null?void 0:P.color):t.targetType===k.Opportunity.resultType?(f=(A=t.opportunity)==null?void 0:A.name,n=($=t.opportunity)==null?void 0:$.id,j=`/sales/opportunity/${n}/activities`):t.targetType===k.Task.resultType?(f=(E=t.task)==null?void 0:E.title,n=(R=t.task)==null?void 0:R.id,D=(z=t.task)==null?void 0:z.code,j=`/project/${t.forProjectId}/sprint/${(H=t.task)==null?void 0:H.taskSprintId}/tasks/${(B=t.task)==null?void 0:B.id}`,g=(O=(F=t.task)==null?void 0:F.project)==null?void 0:O.color):S=!0;const w={...t};return S||(w._meta={title:f,code:D,routeTo:j,color:g,targetId:n}),w},[]);return e.jsxs(ee,{...m,loading:o||m.loading,onItem:l,data:r,children:[!d&&e.jsx(te,{dataId:"id",label:"Actions",width:"140px",render:(t,n)=>e.jsx($e,{interval:n,context:i})}),e.jsx(u,{dataId:"user",width:"170px",label:"Team Member",render:t=>t&&e.jsx(J,{to:`/member/${t==null?void 0:t.id}/intervals`,children:e.jsxs(p,{display:"flex",alignItems:"center",children:[e.jsx(Ie,{variant:"rounded",s3Key:t.profilePhoto}),e.jsx(p,{ml:1,children:t.firstName})]})})}),!s&&e.jsx(u,{dataId:"startedAt",label:"Date",width:"130px",render:t=>e.jsx(p,{color:"text.secondary",fontSize:"small",children:y(new Date(t),"PP")})}),e.jsx(u,{width:"100px",dataId:"startedAtTime",label:"Time",render:(t,n)=>y(new Date(n.startedAt),"hh:mm")}),e.jsx(u,{width:"100px",dataId:"stoppedAt",label:"Stopped",render:t=>t?y(new Date(t),"hh:mm"):"Running"}),e.jsx(u,{width:"100px",dataId:"totalHours",label:"Hours",render:(t,n)=>e.jsx(p,{fontWeight:"bold",children:(a==null?void 0:a.id)===n.id?a.totalHours?e.jsx(N,{ms:q(a.totalHours)}):"":n.totalHours?e.jsx(N,{ms:q(n.totalHours)}):""})}),e.jsx(u,{width:"250px",dataId:"project",label:"Project",render:Pe}),!c&&e.jsx(u,{width:"250px",dataId:"taskId",label:"Task",render:(t,n)=>e.jsx(Ae,{interval:n})}),e.jsx(u,{dataId:"comment",render:t=>e.jsx(p,{color:"text.secondary",fontSize:"small",children:t})})]})}function Pe(o,r){const{forProjectId:s}=r;return s?e.jsx(ye,{id:s}):null}function Ae({interval:o}){var m,i,a,l,t;const{metadata:r,record:s}=he({model:re(o.targetType).replace(/ /g,"").replace(/Model/g,""),id:o.targetId,skip:!!((m=o._meta)!=null&&m.title)}),d=(s==null?void 0:s.code)||((i=o._meta)==null?void 0:i.code),c=((a=o._meta)==null?void 0:a.title)||(s==null?void 0:s.title)||(r==null?void 0:r.display);return e.jsx(J,{to:((l=o._meta)==null?void 0:l.routeTo)||(r==null?void 0:r.link),children:e.jsx(ke,{code:d,type:!d&&(s==null?void 0:s.__typename),title:c,color:(t=o._meta)==null?void 0:t.color,noWrap:!0})})}function $e({interval:o,context:r}){var l;const{globalState:{authUser:s}}=se(),{startCurrentInterval:d,stopInterval:c,stopCurrentInterval:m,untagFromInterval:i}=r,{enqueueSnackbar:a}=pe();return e.jsxs(p,{display:"flex",alignItems:"center",children:[e.jsx(p,{mr:1,children:o.stoppedAt?e.jsx(x,{title:"Start your interval for this task",children:e.jsx(h,{size:"small",onClick:()=>{var t;(t=o==null?void 0:o.task)!=null&&t.estimatedEffort||a("Please set an Estimated Effort on your current interval.",{variant:"warning"}),d({targetId:o.targetId,targetType:o.targetType})},children:e.jsx(fe,{})})}):e.jsx(x,{title:"Stop your interval",children:e.jsx(h,{size:"small",color:"primary",onClick:()=>{o.user.id===s.id?m():c(o)},children:e.jsx(ge,{})})})}),e.jsx(p,{mr:1,children:e.jsx(x,{title:"Edit interval",children:e.jsx(h,{size:"small",onClick:()=>{Q.publish("intervalFormDialogOpen",{intervalId:o.id})},children:e.jsx(be,{})})})}),!o.stoppedAt&&((l=o.user)==null?void 0:l.id)===s.id?o.isTagged?e.jsx(x,{title:"Untag myelf",children:e.jsx(h,{size:"small",onClick:()=>{i(o)},children:e.jsx(Y,{})})}):e.jsx(x,{title:"Tag others",children:e.jsx(h,{size:"small",onClick:()=>{Q.publish("intervalTagUserFormDialogOpen",{intervalId:o.id})},children:e.jsx(X,{})})}):null]})}function Ee({withUser:o}={}){const[r,s]=oe({intStartDate:L,intEndDate:L,taskId:W,billable:le,userId:W}),d=b.useCallback(i=>{s({intStartDate:i==null?void 0:i.startDate,intEndDate:i==null?void 0:i.endDate})},[s]),c=b.useMemo(()=>({startDate:(r==null?void 0:r.intStartDate)||ue(new Date),endDate:(r==null?void 0:r.intEndDate)||xe(new Date)}),[r]);return{filter:e.jsxs(p,{flex:"1",display:"flex",flexWrap:"wrap",children:[e.jsx(I,{mr:2,width:"400px",children:e.jsx(ae,{value:c,label:"Period",onChange:d})}),e.jsx(I,{mr:2,width:"250px",mb:2,children:e.jsx(U,{model:"Task",label:"Task",icon:je,value:r.taskId,sort:[{"title.keyword":{order:"asc"}}],onChange:(i,a)=>{var l;s({taskId:(l=a==null?void 0:a._source)==null?void 0:l.id})},fullWidth:!0})}),o&&e.jsx(I,{mr:2,width:"250px",mb:2,children:e.jsx(U,{model:"User",label:"Team Member",icon:Te,value:r.userId,sort:[{"fullname.keyword":{order:"asc"}}],onChange:(i,a)=>{var l;s({userId:(l=a==null?void 0:a._source)==null?void 0:l.id})},fullWidth:!0})}),e.jsx(I,{mr:2,width:"130px",children:e.jsx(ie,{checked:r==null?void 0:r.billable,label:"Billable",onChange:()=>{s({billable:!(r!=null&&r.billable)})}})})]}),params:{...r,period:c}}}const Re=`
  query SearchIntervals(
    $filter: SearchableIntervalFilterInput
    $sort: SearchableIntervalSortInput
    $limit: Int
    $nextToken: String
    $from: Int
  ) {
    searchIntervals(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
    ) {
      items {
        id
        userId
        task {
          estimatedEffort
        }
        taskId
        projectId
        opportunityId
        forProjectId
        targetType
        targetId
        comment
        startedAt
        stoppedAt
        startedAtMs
        stoppedAtMs
        isDone
        isTagged
        durationMs
        totalHours
        timezone
        week
        day
        timesheetId
        billable
        previousIntervalId
        archived
        createdAt
        updatedAt
        updatedBy
        createdBy
      }
      nextToken
      total
    }
  }
`;function kt(){var a,l;const{userId:o}=ve(),{filter:r,params:s}=Ee();console.log(">>member/MemberIntervals::","params",s);const d={userId:{eq:o}};(a=s.period)!=null&&a.startDate&&(d.startedAt={range:[s.period.startDate,s.period.endDate]}),s.taskId&&(d.taskId={eq:s.taskId}),s.billable&&(d.billable={eq:!0});const c=ne(de(Re),{variables:{filter:d,sort:{field:"updatedAt",direction:"desc"},limit:5},fetchPolicy:"network-only",nextFetchPolicy:"cache-first"}),m=((l=c.data)==null?void 0:l.searchIntervals.items)||[];console.log(">>member/MemberIntervals::","intervals",m);const i=me({...c,model:"Interval",maxLength:5,op:"search"});return e.jsxs(p,{mb:2,children:[r,e.jsx(Me,{loading:c.loading,timesheets:m}),!c.loading&&e.jsx(ce,{onClick:i.more})]})}export{kt as default};
