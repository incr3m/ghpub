import{j as t}from"./TransitionGroupContext-9d36972e.js";import{R as g}from"./index-f1f749bf.js";import{J as j,u as O,l as B,at as U,o as F,b as N,B as $,z as R,G as J,H as G,ax as K,N as Q,Q as L,O as A,al as z,R as H,m as W,a1 as v,T}from"./papaparse.min-b66e70e7.js";import{g as x}from"./_baseForOwn-9b89c4b6.js";import{g as Y,h as X}from"./pick-dba65392.js";import{u as Z}from"./useFetchMore-be228481.js";import{s as tt,A as et,v as ot,b as nt}from"./Play-87fed129.js";import{i as at,f as it,w as rt}from"./index-bcfaa842.js";import"./assertThisInitialized-ad1db8e7.js";import"./_commonjsHelpers-042e6b4d.js";import"./_arrayIncludes-2cfb33ae.js";import"./index-96c5f47c.js";import"./Button-352c3435.js";import"./isPlainObject-07477f89.js";import"./debounce-213cd46f.js";import"./iframe-ed7f5a3f.js";import"../sb-preview/runtime.js";import"./index-4d501b15.js";import"./react-router-19e5b27c.js";import"./tiny-invariant-dd7d57d2.js";import"./filter-f99df4e5.js";import"./LocalizationProvider-a287304f.js";import"./index-61adb48a.js";import"./useGetProjectSummaryFields-0ab32aca.js";import"./SelectEsModelInput-d580a9f7.js";import"./Link-c687dc07.js";import"./react-router-dom-60ea8218.js";import"./useIncludeFieldNames-35a180a9.js";import"./Save-b67fa0ac.js";import"./index-147ad7aa.js";import"./Add-be7f5660.js";import"./uniq-0d482d7b.js";import"./cloneDeep-91467704.js";import"./isNativeReflectConstruct-05c29d01.js";const st=`
  query AuditLogByType(
    $type: String
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelAuditLogFilterInput
    $limit: Int
    $nextToken: String
  ) {
    auditLogByType(
      type: $type
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        type
        modelId
        action
        oldValue
        newValue
        message
        fieldUpdated
        webhookData
        archived
        createdAt
        createdBy
        updatedAt
        updatedBy
      }
      nextToken
    }
  }
`,dt=`
  query AuditLogByTypeAction(
    $type: String
    $action: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelAuditLogFilterInput
    $limit: Int
    $nextToken: String
  ) {
    auditLogByTypeAction(
      type: $type
      action: $action
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        type
        modelId
        action
        oldValue
        newValue
        message
        fieldUpdated
        webhookData
        archived
        createdAt
        createdBy
        updatedAt
        updatedBy
      }
      nextToken
    }
  }
`,ct=`
  query AuditLogByModelIdAction(
    $modelId: String
    $action: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelAuditLogFilterInput
    $limit: Int
    $nextToken: String
  ) {
    auditLogByModelIdAction(
      modelId: $modelId
      action: $action
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        type
        modelId
        action
        oldValue
        newValue
        message
        fieldUpdated
        webhookData
        archived
        createdAt
        createdBy
        updatedAt
        updatedBy
      }
      nextToken
    }
  }
`,lt=`
  query AuditLogByModelIdDate(
    $modelId: String
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelAuditLogFilterInput
    $limit: Int
    $nextToken: String
  ) {
    auditLogByModelIdDate(
      modelId: $modelId
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        type
        modelId
        action
        oldValue
        newValue
        message
        fieldUpdated
        webhookData
        archived
        createdAt
        createdBy
        updatedAt
        updatedBy
      }
      nextToken
    }
  }
`,pt=`
  query AuditLogByUserDate(
    $updatedBy: String
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelAuditLogFilterInput
    $limit: Int
    $nextToken: String
  ) {
    auditLogByUserDate(
      updatedBy: $updatedBy
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        type
        modelId
        action
        oldValue
        newValue
        message
        fieldUpdated
        webhookData
        archived
        createdAt
        createdBy
        updatedAt
        updatedBy
      }
      nextToken
    }
  }
`,ut=Object.freeze(Object.defineProperty({__proto__:null,auditLogByModelIdAction:ct,auditLogByModelIdDate:lt,auditLogByType:st,auditLogByTypeAction:dt,auditLogByUserDate:pt},Symbol.toStringTag,{value:"Module"})),M={company:["name"],contact:["firstName","lastName"],project:["name"],opportunity:["name"],user:["fullname"],team:["name"],activity:["subject"],task:["title"],sprint:["name"],location:["name"]},mt={contactCompanyId:"company",contactLocationId:"company",sourceClientId:"contact",companyId:"company",managerUserId:"user",projectMainContactId:"contact",sourceNameId:"contact",opportunityMainContactId:"contact",opportunityOppManagerId:"user",projectId:"project",userId:"user",sprintProjectId:"project",taskSprintId:"sprint",taskId:"task",parentId:"task",contactId:"contact",timesheetId:"timesheet",forProjectId:"project",previousIntervalId:"interval",intervalId:"interval",priorIntervalId:"interval",latestIntervalId:"interval",lastStoppedIntervalId:"interval",teamId:"team",locationCompanyId:"company",activityContactId:"contact",activityProjectId:"project",activityOpportunityId:"opportunity",activityTeamMemberId:"user",activityCompanyId:"company",milestoneProjectId:"project",issueProjectId:"project",memberId:"user",assignToId:"user",sprintId:"sprint",noteContactId:"contact",noteCompanyId:"company",noteProjectId:"project",noteLocationId:"location",noteSprintId:"sprint",noteTeamMemberId:"user",skillTeamMemberId:"user",previousDurationid:"duration"};function D({name:a,children:e}){const[u,l]=g.useState({parsedValue:null}),[c]=g.useState(mt[a]||"nothing"),[h]=g.useState((M==null?void 0:M[c])||[]),I=`
    query GetRecord ($id:ID!) {
      get${j(c).replace(/\s+/g,"")}(id: $id) {
        id
        ${h.join(`
`)}
      }
    }
  `,{data:r}=O(B(I),{skip:!(typeof e=="string"&&a.includes("Id")&&c),variables:{id:e}});g.useEffect(()=>{if(e)try{if(typeof e=="string"&&a.includes("Id")&&c&&r){l(m=>({...m,parsedValue:h.map(n=>{var d;return(d=r==null?void 0:r[`get${j(c).replace(/\s+/g,"")}`])==null?void 0:d[n]}).join(" ")||`a deleted ${c}`}));return}else if(isNaN(e)&&at(new Date(e))){l(m=>({...m,parsedValue:it(new Date(e),"dd/MM/yyyy")}));return}else if(!isNaN(e)){l(m=>({...m,parsedValue:rt.numberFormatter(e).toFormatted()}));return}}catch{}},[a,e,r,c,h]);let f=u.parsedValue||e;return[Array,Object].includes(f==null?void 0:f.constructor)&&(f=JSON.stringify(f)),f}const yt=W({root:{paddingBottom:20,"& code > span":{display:"block"},"& .cs":{fontSize:"small",marginBottom:5}}}),gt={insert:{color:"green"},modify:{color:"orange"},remove:{color:"darkred"},archived:{color:"red"}};function ft(a){if(a.length<1)return;console.log(">>record-audit-logs/index::","data",a);let e="";return a.forEach((u,l)=>{if(!u)return;const c=X(u.__typename);c.length<1||(e+=`
        a_${l}: get${u.__typename}(id:${JSON.stringify(u.id)}){
          ${c.join(",")}
        }
        `)}),e}const ht=["updatedAt","updatedBy","__typename"];function te({model:a,modelId:e,ignoreFields:u}){const l=!!a,{globalState:{sidebarMenuOpen:c}}=U(),[h,I]=g.useState({recordType:a||"User",modelId:e,details:{},waiting:!1}),r=g.useMemo(()=>e?"auditLogByModelIdDate":"auditLogByType",[e]),f=yt(),{models:m}=Y(),n=F(),d=g.useCallback(async o=>{if(e||o.length<1)return;const i=await n.query({query:B(`{${ft(o.map(p=>({__typename:p.type,id:p.modelId})))}}`)}),y={};Object.values(x(i,"data",{})).forEach(p=>{p&&(y[`${p.__typename}:::${p.id}`]=tt(p))}),I(p=>({...p,details:y}))},[n,e]),s=O(B(ut[r]),{variables:{limit:10,sortDirection:"DESC",...e?{modelId:e}:{type:h.recordType}},onCompleted:o=>{d(x(o,`${r}.items`,[]))},fetchPolicy:"network-only",nextFetchPolicy:"cache-first"}),S=x(s,`data.${r}.items`,[]),w=g.useCallback(async()=>{const{refetch:o}=s,i=x(s,`data.${r}.items.0.id`);let y=0,p=i;do{const k=await o();p=x(k,"data.auditLogByModelIdDate.items[0].id"),await N.delay(250),y++}while(i===p&&y<3)},[s,r]);g.useEffect(()=>{if(!e)return;let o;const i=et.graphql(ot(`
        subscription {
          onUpdate: onUpdate${a} {
            id
          }
        }
      `));if(i){const y=i.subscribe({next:async p=>{x(p,"value.data.onUpdate.id")===e&&(I(C=>({...C,waiting:!0})),await N.delay(3e3),w(),I(C=>({...C,waiting:!1})))}});o=()=>{y.unsubscribe()}}return o},[a,e,w]);const _=g.useCallback(o=>{const i=o.currentTarget.value;I(y=>({...y,recordType:i}))},[]),P=g.useMemo(()=>{const o=[];for(const i in m)o.push({value:i,text:i});return o},[m]),E=Z({...s,model:"AuditLog",listPath:r,maxLength:5,onData:d}),q={className:f.root};return t.jsx(t.Fragment,{children:t.jsxs($,{...q,sx:{px:{lg:"40px",xs:"10px"},pt:"30px",transform:c?"translateX(280px)":"none"},children:[t.jsx($,{display:"flex",flexDirection:"row-reverse",mb:1,children:!l&&t.jsx(R,{width:"200px",children:t.jsx(J,{fullWidth:!0,disabled:l,label:"Record Type",value:h.recordType,onChange:_,options:P,icon:G})})}),h.waiting&&t.jsx($,{height:"4px",mb:2,children:t.jsx(K,{color:"primary"})}),t.jsxs(Q,{data:S,loading:s.loading,rowProps:{style:{cursor:"pointer"}},onItem:o=>e&&o.action==="REMOVE"?!1:a&&(o==null?void 0:o.type)===a,onRowActionSelect:console.log,children:[!a&&t.jsx(L,{dataId:"type"}),t.jsx(L,{dataId:"action",render:(o,i)=>t.jsx(It,{action:o,record:i})}),!e&&t.jsx(A,{dataId:"modelId",label:"Record",render:(o,i)=>{const y=h.details[`${i.type}:::${o}`];return y?t.jsx("a",{href:y.link,target:"_blank",children:y.display}):null}}),t.jsx(z,{dataId:"createdAt",label:"Date",format:"dd/MM/yyyy"}),t.jsx(A,{dataId:"updatedBy",label:"Updated By",render:o=>t.jsx(nt,{id:o})}),t.jsx(A,{dataId:"newValue",width:"50%",label:"Change Set",render:(o,i)=>t.jsx(xt,{action:i==null?void 0:i.action,newValue:o,oldValue:i.oldValue,ignoreFields:u})})]}),!s.loading&&t.jsx(H,{onClick:E.more})]})})}function It({action:a}){var l;const e=a.toLowerCase(),u=((l=gt[e])==null?void 0:l.color)||"grey";return t.jsx($,{borderRadius:"5px",bgcolor:u,color:"white",textAlign:"center",maxWidth:"150px",children:a})}const b={true:"Yes",false:"No"},V={sendMarketingEmails:"Don't send me emails",mainContact:"Group Member is Main Contact",estateClaim:"Deceased Group Member",requireSomeoneForimportantDecisions:"Group Member requires someone to make important decisions",epoaGiven:"Enduring Power of Attorney given",epoaUsed:"Enduring Power of Attorney used",cato:"Civil and Administrative Tribunal Order",otherContactStreet1:"Claimant contact street",otherContactfirstName:"Claimant first name",otherContactlastName:"Claimant last name",otherContactCountry:"Claimant country",otherContactPostcode:"Claimant postal code",otherContactEmail:"Claimant email",otherContactPhone:"Claimant phone",otherContactMobile:"Claimant mobile",otherContactNameOfDeceased:"Claimant name of deceased",regNo:"Registration number"};function xt({action:a,oldValue:e,newValue:u,ignoreFields:l}){const[c,h]=g.useState({diff:null,oldValues:{},newValues:{},typename:null});g.useEffect(()=>{const n=JSON.parse(JSON.parse(e||"{}")),d=JSON.parse(JSON.parse(u||"{}")),s=[...ht];l&&s.push(l),h(S=>({...S,typename:d.__typename||n.__typename,oldValues:v(n,s),newValues:v(d,s)}))},[e,u]);const I=a.toLowerCase(),{newValues:r,oldValues:f}=c;let m=null;return c.typename==="ModelTag"?m=t.jsxs(T,{className:"cs",children:["Tag ",t.jsx("strong",{children:r.tag||f.tag})," ",r.archived||f.archived?"removed":"added"]}):I==="modify"?m=Object.keys(r).map(n=>{let d=f[n];d in b?d=b[d]:d||(d="<empty>");let s=r[n];return s in b?s=b[s]:s||(s="<empty>"),JSON.stringify(d)===JSON.stringify(s)?null:t.jsxs(T,{className:"cs",children:[t.jsx("strong",{children:j(V[n]||n)})," from"," ",t.jsx("strong",{children:t.jsx(D,{name:n,children:d})})," ","to"," ",t.jsx("strong",{children:t.jsx(D,{name:n,children:s})})]},n)}):I==="insert"&&(m=Object.keys(r).map(n=>t.jsxs(T,{className:"cs",children:[t.jsx("strong",{children:j(V[n]||n)})," :"," ",t.jsx(D,{name:n,children:b[r[n]]||r[n]})]},n))),t.jsx($,{pt:1,pb:1,children:t.jsx($,{mt:2,children:m})})}export{te as default};
