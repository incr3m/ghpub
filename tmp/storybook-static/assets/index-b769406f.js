import{j as e}from"./TransitionGroupContext-9d36972e.js";import{R as f}from"./index-f1f749bf.js";import{aP as P,b6 as M,u as F,ac as $,l as A,$ as B,f as G,B as S,W as z,aM as U,X as W,i as H,J as v,R as J}from"./papaparse.min-b66e70e7.js";import{q as K,r as X,h as Y}from"./Play-87fed129.js";import{d as Z,a as V}from"./DragIndicator-582939ba.js";import{u as ee}from"./useFetchMore-be228481.js";import{D as te,f as re,P as se,l as ae}from"./pick-dba65392.js";import{f as T}from"./index-bcfaa842.js";import{a as ne,i as oe}from"./_baseForOwn-9b89c4b6.js";import{a as le,b as O,c as a,d as ie}from"./TableRow-00aadd87.js";import{T as ce}from"./TableHead-dd1583ce.js";var de=ne,ue=oe,fe="[object Number]";function ge(n){return typeof n=="number"||ue(n)&&de(n)==fe}var pe=ge;async function he(n){let o=0;const l=P(n,"sortOrder").reduce((i,g)=>(pe(g.sortOrder)?o=g.sortOrder:(o++,i.push({id:g.id,__typename:g.__typename,sortOrder:o,__op:"update",__fields:"sortOrder"})),i),[]);await M(l)}function xe(n){const l=`[data-rbd-drag-handle-draggable-id='${n}']`;return document.querySelector(l)}function me({projectId:n,opportunityId:o}){const l=f.useRef(null),[i,g]=f.useState({search:"",after:null}),h={};n&&(h.sprintProjectId={eq:n}),o&&(h.opportunityId={eq:o}),i.search&&i.search.length>2&&(h.name={matchPhrasePrefix:i.search});const y=F(A`
      query MODEL_SPRINT_LIST($filter: SearchableSprintFilterInput, $nextToken: String) {
        searchSprints(filter: $filter, nextToken: $nextToken, limit: 99) {
          nextToken
          items {
            id
            code
            name
            description
            source
            sourceUrl
            sprintProjectId
            opportunityId
            startDate
            endDate
            sortOrder
            status
          }
        }
      }
    `,{fetchPolicy:"network-only",nextFetchPolicy:"cache-first",variables:{...!$(h)&&{filter:h}}}),{data:m,loading:R,refetch:w}=y,[c,_]=f.useState({data:null,status:"initial"}),E=ee({...y,model:"Sprint",op:"search",maxLength:5});B(async s=>{var t;const r=((t=m==null?void 0:m.searchSprints)==null?void 0:t.items)||[];await he(r),s()&&r&&_({data:P(r,"sortOrder","asc")})},[m]);const[,I]=f.useState({}),b=f.useCallback((s,r)=>{const t=xe(s);if(!t)return;const d=t.parentNode,p=Array.from(d.parentNode.parentNode.children).slice(0,r).reduce((x,j)=>x+j.clientWidth+8,0);I({height:d.clientHeight,width:d.clientWidth,left:p})},[]),L=f.useCallback(s=>{const{destination:r,draggableId:t}=s;r&&b(t,r.index)},[b]),C=f.useCallback(s=>{const{source:r,draggableId:t}=s;b(t,r.index)},[b]),N=async s=>{const{source:r,destination:t}=s,d=c.data||[],{sortedItems:u,newSourceItem:p}=ae(d,r.index,t.index,"sortOrder");_({data:u}),p&&M([{...p,__op:"update"}])},q=G({key:"ES_STAGE_TASK_Q",index:"task",body:{size:0,query:{bool:{must:[{term:{"projectId.keyword":{value:n}}}]}},aggs:{per_stage:{terms:{field:"taskSprintId.keyword",size:999}}}}});return console.log(">>sprint/ProjectSprints::","sprintQ",y),e.jsxs(S,{mb:2,children:[e.jsx(z,{variant:"dialog",ref:l,children:e.jsx(K,{projectId:n,opportunityId:o,onCancel:()=>{l.current.close()},onSubmit:()=>{l.current.close(),w(),X({ids:["SearchTasksStagesGrid"],delay:500})},sprintData:c==null?void 0:c.data})}),e.jsx(U,{clearable:!0,createLabel:"Stage",onNewClicked:()=>{l.current.toggle()},onSearch:s=>{console.log(">>sprint/ProjectSprints::","txt",s),g(r=>({...r,search:s}))}}),e.jsxs(S,{mt:2,children:[e.jsxs(le,{children:[e.jsx(ce,{children:e.jsxs(O,{children:[e.jsx(a,{align:"left"}),e.jsx(a,{align:"left",children:"Stage"}),e.jsx(a,{align:"left",children:"Description"}),e.jsx(a,{align:"left",children:"Start Date"}),e.jsx(a,{align:"left",children:"Finish Date"}),e.jsx(a,{align:"left",children:"Actions"}),e.jsx(a,{align:"left",children:"Status"})]})}),e.jsx(te,{onDragStart:C,onDragUpdate:L,onDragEnd:N,children:e.jsx(re,{droppableId:"droppable-1",direction:"vertical",children:s=>{var r;return e.jsxs(ie,{ref:s.innerRef,...s.droppableProps,children:[(r=c==null?void 0:c.data)==null?void 0:r.map((t,d)=>e.jsx(se,{draggableId:t.id,index:d,children:(u,p)=>{var D,k;const x=(k=(D=q.result)==null?void 0:D.aggregations)==null?void 0:k.per_stage.buckets.find(Q=>Q.key===t.id),j=(x==null?void 0:x.count)||0;return e.jsxs(O,{ref:u.innerRef,...u.draggableProps,style:{...u.draggableProps.style,background:p.isDragging?"rgba(245,245,245, 0.75)":"none"},...u.dragHandleProps,children:[console.log(1234,t),e.jsx(a,{align:"left",children:e.jsx(W,{title:"Move",children:e.jsx(Z,{})})}),e.jsxs(a,{align:"left",children:[e.jsx(Y,{modelName:"Sprint",modelId:t.id,modelData:t,hideLabel:!0}),j?e.jsx(S,{component:"span",bgcolor:"#E6E9ED",color:"#37516D",fontWeight:"normal",fontSize:"10px",pl:"5px",pr:"5px",ml:"5px",borderRadius:"5px",children:j}):""]}),e.jsx(a,{align:"left",children:t.description}),e.jsx(a,{align:"left",children:t.startDate?T(new Date(t.startDate),"dd/MM/yyyy"):""}),e.jsx(a,{align:"left",children:t.startDate?T(new Date(t.endDate),"dd/MM/yyyy"):""}),e.jsx(a,{align:"left",children:(t==null?void 0:t.sourceUrl)&&e.jsx("a",{href:t==null?void 0:t.sourceUrl,target:"_blank",children:e.jsx(H,{size:"small",children:e.jsx(V,{})})})}),e.jsx(a,{align:"left",children:v(t.status)})]})}},t.id)),s.placeholder]})}})})]}),!R&&e.jsx(J,{onClick:E.more})]})]})}const Re=Object.freeze(Object.defineProperty({__proto__:null,default:me},Symbol.toStringTag,{value:"Module"}));export{me as S,Re as a,pe as i};
