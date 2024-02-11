import{j as e}from"./TransitionGroupContext-9d36972e.js";import{r as x}from"./index-f1f749bf.js";import{a6 as z,aZ as M,B as p,cC as q,cD as O,cE as L,cF as U,cG as S,g as N,u as $,C as k,m as H,ax as K,b6 as G,ad as Q,l as Y,bo as V,aw as Z,T as J}from"./papaparse.min-b66e70e7.js";import{d as W,S as A,u as X}from"./Person-5be09a1e.js";import"./_baseForOwn-9b89c4b6.js";import"./index-96c5f47c.js";import{t as ee}from"./filter-f99df4e5.js";import{M as te}from"./MenuOptions-0bc3bb51.js";import{f as _,u as oe}from"./react-router-19e5b27c.js";import{W as se,O as ie,Y as re,Z as T,_ as R,$ as ne,a0 as ae,a1 as ce,a2 as le,a3 as w,a4 as C,a5 as de,Q as pe}from"./Play-87fed129.js";import{G as ue}from"./pick-dba65392.js";import{S as me}from"./SearchIcon-482ff285.js";import{b as xe}from"./index-bcfaa842.js";import{B as F}from"./Button-352c3435.js";import"./assertThisInitialized-ad1db8e7.js";import"./_commonjsHelpers-042e6b4d.js";import"./_arrayIncludes-2cfb33ae.js";import"./isPlainObject-07477f89.js";import"./debounce-213cd46f.js";import"./iframe-ed7f5a3f.js";import"../sb-preview/runtime.js";import"./index-4d501b15.js";import"./LocalizationProvider-a287304f.js";import"./tiny-invariant-dd7d57d2.js";import"./react-router-dom-60ea8218.js";import"./uniq-0d482d7b.js";import"./cloneDeep-91467704.js";import"./index-61adb48a.js";import"./useGetProjectSummaryFields-0ab32aca.js";import"./SelectEsModelInput-d580a9f7.js";import"./Link-c687dc07.js";import"./useIncludeFieldNames-35a180a9.js";import"./Save-b67fa0ac.js";import"./index-147ad7aa.js";import"./Add-be7f5660.js";import"./isNativeReflectConstruct-05c29d01.js";const E=({url:t})=>{const[i,a]=x.useState(!1),[n,l]=x.useState(null),s=x.useCallback(async r=>{const m=await z.get(r,{level:"public"});l(m)},[]);return x.useEffect(()=>{!i&&t&&(console.log("Project",t),s(t),a(!1))},[t,s,i]),{fetchUrl:s,url:n||""}},B=({img:t="",alt:i="",small:a=!1,borderRadius:n="10px"})=>e.jsx(M,{variant:"rounded",alt:i,src:t,sx:{bgcolor:"#ffffff",width:a?30:40,height:a?30:40,border:"2px solid #F4F5F7",color:"#CDD3DB",borderRadius:n},children:t?null:e.jsx(W,{sx:{width:a?20:30,height:a?20:30}})}),he=({value:t,keyName:i,hasSort:a,sort:n,onSort:l})=>e.jsx(p,{onClick:()=>{l(i)},className:"pointer",sx:{marginLeft:"5px"},children:a&&n?t===i?e.jsx(q,{sx:{width:"15px",height:"15px",transition:"0.5s transform, 1s color",transform:n===A.ASC?"rotate(180deg)":"","&:hover":{color:"#FF9F4B"}}}):e.jsx(O,{sx:{width:"15px",height:"15px",transition:"1s color",transform:"rotate(90deg)","&:hover":{color:"#FF9F4B"}}}):null}),fe=({onChange:t,className:i})=>{const[a,n]=x.useState(""),l=L();return x.useEffect(U(async()=>{t(a)},1e3),[a]),e.jsxs(p,{className:S(i,l.container),children:[e.jsx(me,{className:l.icon,onClick:()=>{t(a)}}),e.jsx("input",{className:S(l.input),placeholder:"Search ...",value:a,onChange:s=>{const{value:r}=s.currentTarget||{};n(r)}}),a&&e.jsx(se,{className:l.icon,onClick:()=>{n(""),t("")}})]})},ye=t=>N`
{
  getUser(id:${JSON.stringify(t)}){
    id
    firstName
    fullname
    profilePhoto
    role {
      id
      name
    }
  }
}
`,ge=({userId:t,user:i={entity2:""},component:a})=>{const n=_(),{loading:l,data:s}=$(ye(t||i.entity2),{}),{fullname:r,profilePhoto:m,role:f}=(s==null?void 0:s.getUser)||{},d=E({url:m});return l?e.jsx(k,{size:12}):e.jsx(a,{data:{fullname:r,profilePhoto:d.url,role:f,display:e.jsx(p,{sx:{"&:hover":{textDecoration:"underline",cursor:"pointer"}},onClick:()=>{n.push(`/member/${t||i.entity2}`)},children:r})}})},be=H(t=>({rowContainer:{"&:hover .first-column":{borderTop:"1px solid #052649",borderBottom:"1px solid #052649",borderLeft:"1px solid #052649"},"&:hover .last-column":{borderTop:"1px solid #052649",borderBottom:"1px solid #052649",borderRight:"1px solid #052649"},"&:hover .column":{borderTop:"1px solid #052649",borderBottom:"1px solid #052649"}},row:{backgroundColor:t.palette.background.paper,width:"100%",minHeight:"50px",paddingTop:"10px",transition:"1s background, 1s opacity"},firstColumn:{borderRadius:"8px 0px 0px 8px",paddingLeft:"20px",paddingRight:"20px"},lastColumn:{borderRadius:"0px 8px 8px 0px",paddingRight:"20px"},columns:{paddingRight:"20px"},td:{padding:"0px"},tr:{transition:"1s background, 1s opacity",borderRadius:"8px",boxShadow:"0px -1px 2px rgba(0, 0, 0, 0.05), 0px 1px 4px rgba(0, 0, 0, 0.03), 0px 1px 2px rgba(0, 0, 0, 0.04), 0px 2px 2px rgba(0, 0, 0, 0.05)"},firstTh:{paddingLeft:"20px"},header:{paddingBottom:"10px",textAlign:"left",color:"#697D92",fontSize:"12px",textTransform:"uppercase",position:"sticky",top:"0",paddingRight:"20px",zIndex:"111"},newData:{background:"#F3F7FB"},removing:{opacity:.3},tbody:{"&:before":{content:"",display:"block",height:"20px"}},container:{padding:"0px 3px"}})),je=({columns:t,data:i,className:a,tableClassName:n,sort:l,loading:s})=>{const r=be(),m=x.useMemo(()=>t.map((d,c)=>e.jsx("th",{className:S(d.className,r.header,{[`${r.firstTh}`]:c===0}),style:{textAlign:d.align||"left",width:d.width},children:e.jsxs("div",{className:"flex",style:{textAlign:d.align||"left",justifyContent:d.align==="right"?"flex-end":"flex-start"},children:[d.text,l&&e.jsx(he,{...l,keyName:d.key,hasSort:d.hasSort})]})},c)),[t,r,l]),f=x.useMemo(()=>{const d=[];return i.forEach((c,g)=>{d.push(e.jsx("tr",{className:S(r.tr,{[`${r.removing}`]:c._removing}),children:t.map((o,u)=>{const h=c[o.key];return e.jsx("td",{className:r.td,style:{textAlign:o.align||"left"},children:e.jsx(p,{className:S(r.row,{[`${r.newData}`]:c._new,[`${r.firstColumn} first-column`]:u===0,[`${r.lastColumn} last-column`]:u===t.length-1,[`${r.columns} column`]:u!==0&&u!==t.length-1}),style:{textAlign:o.align},children:c._new&&o.load||o.loadOnRemove&&c._removing?e.jsx(k,{size:14}):h})},u)})},g))}),d},[t,i,r]);return e.jsx(p,{className:S(a,r.container),sx:{width:"100%"},children:e.jsxs("table",{className:S(n),style:{width:"100%",borderCollapse:"separate",borderSpacing:"0px 5px",position:"relative"},children:[e.jsx("thead",{children:e.jsx("tr",{children:m})}),e.jsx(p,{minHeight:"4px",position:"absolute",width:"100%",children:s&&e.jsx(K,{variant:"indeterminate"})}),e.jsx("tbody",{className:r.tbody,children:f})]})})},De=({maxHeight:t="500px",loading:i,canLoadMore:a,onLoadMore:n,onScroll:l,...s})=>e.jsxs(p,{sx:{width:"100%",maxHeight:t,overflowY:"auto"},onScroll:async r=>{a&&!i&&r.target.scrollTop===r.target.scrollHeight-r.target.offsetHeight&&n&&l&&n()},children:[e.jsx(p,{children:s.data.length?e.jsx(je,{...s,loading:i}):e.jsx(p,{className:"flex items-center text-center",children:"No items have been added yet."})}),e.jsx(p,{sx:{height:"50px",display:"flex",alignItems:"center"},children:e.jsx(p,{sx:{width:"100%",textAlign:"center",fontSize:"12px",fontStyle:"italic",color:"#bbb"},children:i?e.jsx(k,{size:"20px",sx:{height:"20px",width:"20px"}}):a?"Fetching data...":"End of list"})})]}),Se=()=>N`
  query CONTACT_INFO($id: ID!) {
    getContact(id: $id) {
      id
      firstName
      lastName
      profilePhoto
    }
  }
`,we=({contactId:t,user:i={entity2:""},component:a})=>{const n=_(),{loading:l,data:s}=$(Se(t||i.entity2),{variables:{id:t||i.entity2}}),{firstName:r,lastName:m,profilePhoto:f}=(s==null?void 0:s.getContact)||{},d=E({url:f}),c=`${r||""} ${m||""}`.trim();return l?e.jsx(k,{size:12}):e.jsx(a,{data:{fullname:c,profilePhoto:d.url,display:e.jsx(p,{sx:{"&:hover":{textDecoration:"underline",cursor:"pointer"}},onClick:()=>{n.push(`/crm/contact/${t||i.entity2}`)},children:c})}})},Ce=({initializeForm:t,data:i,loading:a,onDelete:n,...l})=>e.jsx(p,{children:e.jsx(De,{...l,loading:a,columns:[{text:"Description",key:"description",hasSort:!0},{text:"Decision Owner",key:"owner",load:!0},{text:"Summary",key:"summary"},{text:"Decision Date",key:"decisionDate",hasSort:!0},{text:"Logged By",key:"loggedBy"},{text:"Actions",key:"action",align:"right",load:!0,loadOnRemove:!0}],data:i.map((s,r)=>{const m=s.owner?e.jsx(we,{contactId:s.ownerId,component:({data:c})=>e.jsxs(p,{className:"flex items-center",sx:{background:"#F4F5F7",width:"max-content",borderRadius:"20px",paddingRight:"10px"},children:[e.jsx(B,{small:!0,img:c.profilePhoto,alt:c.fullname,borderRadius:"100%"}),e.jsx(p,{ml:.5,children:c.display})]})}):null,f=s.loggedById?e.jsx(ge,{userId:s.loggedById,component:({data:c})=>e.jsxs(p,{className:"flex items-center",sx:{background:"#F4F5F7",width:"max-content",borderRadius:"20px",paddingRight:"10px"},children:[e.jsx(B,{small:!0,img:c.profilePhoto,alt:c.fullname,borderRadius:"100%"}),e.jsx(p,{ml:.5,children:c.display})]})}):null,d={...s,owner:m,decisionDate:ee(s.decisionDate),loggedBy:f};return{...d,action:e.jsx("div",{children:e.jsx(te,{id:`${s.id.toString()}_decision_list`,vertical:!0,options:[{content:"Edit",onClick:()=>{var c,g;t({description:{value:s.description},ownerId:{value:s.ownerId,data:{text:`${((c=s.owner)==null?void 0:c.firtName)||""} ${((g=s.owner)==null?void 0:g.lastName)||""}`.trim()||"--"}},summary:{value:s.summary},decisionDate:{value:s.decisionDate}},!0,{id:s.id,title:"Edit Decision",submitButtonText:"Save",action:"UPDATE"})}},{content:"Delete",onClick:()=>{n==null||n(d,r)}}]})})}})})}),ve=Ce;async function ke({description:t,ownerId:i,summary:a,decisionDate:n,loggedById:l,decisionId:s,projectId:r,companyId:m}){const[f]=await G([{__typename:"ProjectDecision",__op:s?"update":"create",id:s,description:t,ownerId:i,summary:a,decisionDate:n,loggedById:l,projectId:r,companyId:m}]);return{...f,description:t,ownerId:i,summary:a,decisionDate:n,loggedById:l,projectId:r,companyId:m}}function Ie(t){const{form:i,callback:a,company:n,projectId:l,companyId:s}=t,{description:r,ownerId:m,summary:f,decisionDate:d}=i.fields,c=ie({api:ke}),g=x.useCallback(async o=>{const u=await c.request({projectId:l,companyId:s,description:o.description,ownerId:o.ownerId,summary:o.summary,decisionDate:o.decisionDate,loggedById:o.createdBy,decisionId:i.options.id});console.log("RESPONSE",u),a(u)},[a,c,i.options.id,l,s]);return e.jsxs(re,{form:i,loading:c.loading,onClose:(o=!1)=>{i.leaveForm(()=>{},o)},onSubmit:g,children:[e.jsx(T,{...R(r)}),e.jsx(T,{...R(f)}),e.jsx(ne,{...ae(d)}),x.createElement(ce,{...le(m,[]),mapper:o=>{const{id:u,firstName:h="",lastName:j=""}=o==null?void 0:o._source;return{label:`${h} ${j}`,value:u,id:n}},query:o=>(Q(o,"bool.must.term",{"contactCompanyId.keyword":n}),o),model:"Contact",key:n})]})}const Fe={description:w("",{validations:{isRequired:!0},label:"Decision",data:{placeholder:"Decision Description",type:C.TextField}}),ownerId:w("",{validations:{isRequired:!0},label:"Decision Owner",data:{placeholder:"Select Contact",type:C.Dropdown,label:"Owner"}}),summary:w("",{label:"Summary",data:{placeholder:"",type:C.TextField}}),decisionDate:w("",{validations:{isRequired:!0},label:"Date",data:{placeholder:"",type:C.Datepicker}}),projectId:w("",{label:"Project",data:{placeholder:"",type:C.TextField}}),companyId:w("",{label:"Company",data:{placeholder:"",type:C.TextField}})},Ne=N`
  query SearchProjectDecisions(
    $filter: SearchableProjectDecisionFilterInput
    $sort: SearchableProjectDecisionSortInput
    $limit: Int
    $from: Int
  ) {
    decisions: searchProjectDecisions(
      filter: $filter
      sort: $sort
      limit: $limit
      from: $from
    ) {
      items {
        companyId
        createdAt
        createdBy
        decisionDate
        description
        id
        loggedById
        loggedBy {
          fullname
        }
        ownerId
        owner {
          firstName
          lastName
        }
        projectId
        summary
        updatedAt
        updatedBy
        archived
        attributes
        company {
          accountManagerId
          archived
          attributes
          createdAt
          createdBy
          description
          employeeCount
          id
          image
          integrations
          linkedin
          name
          office
        }
      }
      total
    }
  }
`,$e=({api:t,defaultSortKey:i,defaultSort:a})=>{const[n,l]=x.useState([]),[s,r]=x.useState(0),[m,f]=x.useState(!0),[d,c]=x.useState([]),[g,o]=x.useState({sort:a,key:i}),u=x.useCallback(async(y={})=>{const b=await t({...y,...g,page:s}),{data:D,total:I}=b,v=[...n,...D];l(v);const P=I>=10;f(P),P&&r(s+1)},[n,s,t,g]),h=x.useCallback(async(y={})=>{const b=await t({...g,...y}),{data:D,total:I}=b;l(D);const v=I>=10;f(v),c([]),v&&r(1)},[t,g]);return{sort:X({callback:async({sort:y,key:b})=>{const D={sort:y,key:b};h(D),o(D)},defaultSortKey:i,defaultSort:a}),canLoadMore:m,onLoadMore:u,initialize:h,page:s*10,pageNumber:s,add:y=>{c([{...y,_new:!0},...d]),setTimeout(()=>{h()},2e3)},data:[...d.filter(y=>!n.map(D=>D.id).includes(y.id)),...n],removeItem:y=>{l(n.map((b,D)=>y===D?{...b,_removing:!0}:b)),setTimeout(()=>{h()},2e3)}}},Pe=$e,Te=({onSubmit:t})=>e.jsx(p,{sx:{margin:"20px 0px"},children:e.jsx(p,{sx:{width:"300px"},children:e.jsx(fe,{onChange:i=>{t(i)}})})}),Re=Te,Be=Y`
  mutation($input: DeleteProjectDecisionInput!) {
    decision: deleteProjectDecision(input: $input) {
      id
    }
  }
`;function yt(){const{data:t={}}=x.useContext(ue),{projectId:i}=oe(),[a,n]=x.useState(""),{enqueueSnackbar:l}=xe(),{loading:s,fetchMore:r}=$(Ne,{variables:{filter:{projectId:{eq:i}},limit:0},fetchPolicy:"network-only",nextFetchPolicy:"cache-first",skip:!0}),m=de({form:Fe}),f=V(),d=x.useCallback(async(o={})=>{var y,b;const{searchKey:u=""}=o,h={projectId:{eq:i}};u&&(h.or={description:{matchPhrasePrefix:u}});const{data:j}=await r({variables:{filter:h,sort:{field:o.key,direction:o.sort},limit:10,from:(o.page-1)*10}});return console.log({data:j}),n(u),{data:((y=j==null?void 0:j.decisions)==null?void 0:y.items)||[],total:((b=j==null?void 0:j.decisions)==null?void 0:b.total)||0}},[r,i]),c=Pe({api:d,defaultSortKey:"decisionDate",defaultSort:A.DESC}),[g]=Z(Be,{onCompleted:()=>{l("Decision deleted",{variant:"success"})},onError:o=>{console.log({error:o}),l("Failed to delete decision",{variant:"success"})},update:(o,u)=>{const h=o.identify(u.data.decision);console.log({cache:o,result:u,id:h}),o.evict({id:h})}});return pe(async()=>{c.initialize()}),e.jsxs("div",{children:[e.jsxs(p,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e.jsx(Re,{onSubmit:async o=>{c.initialize({searchKey:o})}}),e.jsx(p,{children:e.jsx(F,{variant:"contained",onClick:()=>{var o;m.initializeForm({projectId:{value:i},companyId:{value:t.companyId,data:{text:(o=t.company)==null?void 0:o.name}}},!0,{title:"New Decision",submitButtonText:"Add Decision",action:"CREATE"})},children:"Create New Decision"})})]}),e.jsx(ve,{initializeForm:m.initializeForm,loading:s,...c,onScroll:async({page:o})=>await d({searchKey:a,page:o}),onDelete:(o,u)=>{console.log({item:o}),f({title:"Delete Decision",content:h=>e.jsxs("div",{children:[e.jsx(J,{children:"Are you sure you want to delete this project decision?"}),e.jsxs(p,{textAlign:"right",m:2,mr:0,children:[e.jsx(F,{onClick:()=>{h.close()},children:"No"}),e.jsx(p,{component:"span",mr:2}),e.jsx(F,{variant:"contained",color:"primary",size:"small",onClick:async()=>{await g({variables:{input:{id:o==null?void 0:o.id}}}),h.submit(o),c.removeItem(u)},children:"Yes"})]})]})})}}),e.jsx(Ie,{form:m,projectId:i,companyId:t.companyId,callback:async o=>{c.add(o)},company:t.companyId})]})}export{yt as default};
