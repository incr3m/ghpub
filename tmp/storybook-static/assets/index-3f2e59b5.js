import{j as t}from"./TransitionGroupContext-9d36972e.js";import{R as x}from"./index-f1f749bf.js";import{F as v,u as b,l as B,B as p,K as E,v as w,o as I,g as h,N as P,Q as y,al as $,O as M,R,a8 as N,m as T,$ as L,ag as Q,L as F,V as O,a9 as q,a3 as D,aV as J,bo as W,w as S}from"./papaparse.min-b66e70e7.js";import{P as Z}from"./index-79afbab1.js";import{u as _}from"./ProjectLink-987015ba.js";import{u as z}from"./useFetchMore-be228481.js";import{g as u}from"./_baseForOwn-9b89c4b6.js";import{u as K,M as U,R as V}from"./Play-87fed129.js";import{A}from"./index-9d3afdfc.js";import{b as Y}from"./index-bcfaa842.js";import{B as j}from"./Button-352c3435.js";import"./assertThisInitialized-ad1db8e7.js";import"./_commonjsHelpers-042e6b4d.js";import"./_arrayIncludes-2cfb33ae.js";import"./index-96c5f47c.js";import"./isPlainObject-07477f89.js";import"./debounce-213cd46f.js";import"./iframe-ed7f5a3f.js";import"../sb-preview/runtime.js";import"./index-4d501b15.js";import"./pick-dba65392.js";import"./react-router-19e5b27c.js";import"./tiny-invariant-dd7d57d2.js";import"./filter-f99df4e5.js";import"./LocalizationProvider-a287304f.js";import"./index-61adb48a.js";import"./useGetProjectSummaryFields-0ab32aca.js";import"./SelectEsModelInput-d580a9f7.js";import"./Link-c687dc07.js";import"./react-router-dom-60ea8218.js";import"./useIncludeFieldNames-35a180a9.js";import"./Save-b67fa0ac.js";import"./index-147ad7aa.js";import"./Add-be7f5660.js";import"./uniq-0d482d7b.js";import"./cloneDeep-91467704.js";import"./TaskAssignees-858ea3c9.js";import"./Check-78df5e8e.js";import"./Skeleton-cd6f071e.js";import"./bundle-053bdffd.js";import"./MilestoneIcon-61fb6e69.js";import"./SortUpIcon-3aecf5f0.js";import"./DragIndicator-582939ba.js";import"./capitalize-c31f38e2.js";import"./Trash-822e65ce.js";import"./index.esm-bf21a293.js";import"./index-f70ce446.js";import"./index-5d349c56.js";import"./TaskForm-863cdb73.js";import"./RepeatFields-8275ed19.js";import"./useBeforeSave-e049f6dd.js";import"./Alert-fd9a067a.js";import"./useTaskAssignees-9f1fd5d3.js";import"./EstimateEditorPopover-b8debf9a.js";import"./AssigneeEditorPopover-2b4e6473.js";import"./isNativeReflectConstruct-05c29d01.js";import"./searchUsers-04324aeb.js";import"./ToggleButtonGroup-93d9af56.js";function G(o){return t.jsx(v,{...o,width:"22px",height:"22px",viewBox:"0 0 22 22",paths:["M5.03532 17.7398C6.6233 19.1462 8.71194 20 11 20C13.2881 20 15.3767 19.1462 16.9647 17.7398C16.672 16.6873 14.5694 16 11 16C7.43062 16 5.328 16.6873 5.03532 17.7398ZM3.6005 16.1246C4.72595 14.6381 7.3706 14 11 14C14.6294 14 17.274 14.6381 18.3995 16.1246C19.4086 14.6703 20 12.9042 20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 12.9042 2.59138 14.6703 3.6005 16.1246ZM11 22C4.92487 22 0 17.0751 0 11C0 4.92487 4.92487 0 11 0C17.0751 0 22 4.92487 22 11C22 17.0751 17.0751 22 11 22ZM7 9C7 6.75576 8.5791 5 11 5C13.4142 5 15 6.92158 15 9.2C15 12.4796 13.2181 14 11 14C8.76086 14 7 12.4274 7 9ZM9 9C9 11.2693 9.81821 12 11 12C12.1777 12 13 11.2984 13 9.2C13 7.95042 12.2157 7 11 7C9.73374 7 9 7.81582 9 9Z"]})}function H({id:o,activity:c,data:l,withIcon:i=!0}){var a;const r=l||c,e=((a=b(B`
      query ACT_LINK{
        model: getActivity(id:${JSON.stringify(o)}){
          id
          subject
          updatedAt
        }
      }
    `,{skip:!o}).data)==null?void 0:a.model)||r,n=K({model:"Activity",data:e});return t.jsx(U,{title:e==null?void 0:e.subject,actions:[{icon:t.jsx(A,{}),label:"Add Activity",component:"Activity"},{icon:t.jsx(G,{}),label:"Add Contact",component:"Contact"}],children:t.jsx(V,{to:n==null?void 0:n.link,children:t.jsxs(p,{component:"span",display:"flex",alignItems:"center",children:[i&&t.jsx(A,{gradient:!0}),e==null?void 0:e.subject]})})})}function X({promptContext:o}){const[c,l]=x.useState({contactId:null}),i=x.useCallback((r,s)=>{var n;const e=(n=s==null?void 0:s._source)==null?void 0:n.id;e&&l(a=>({...a,contactId:e}))},[]);return t.jsxs(p,{sx:{minWidth:"200px",pt:3},children:[t.jsx(E,{model:"Contact",label:"Contact",fullWidth:!0,onChange:i}),t.jsxs("div",{style:{display:"flex",flexFlow:"row-reverse",padding:10,paddingRight:0},children:[t.jsx(j,{disabled:!c.contactId,variant:"contained",color:"primary",onClick:()=>o.submit(c),children:"Submit"}),t.jsx(j,{onClick:o.close,children:"Close"})]})]})}const tt=T({fromChip:{label:{textTransform:"none"}},dialogContent:{backgroundColor:"whitesmoke"},dialogActions:{padding:"20px"}});function ni(){_({paths:[{label:"CRM",link:"/crm"},{label:"CRM",link:"/crm"},{label:"BCC Emails",link:"/crm/bcc-emails"}]},[]);const[o,c]=w({emailId:S,filter:S}),l=I(),{enqueueSnackbar:i}=Y(),r={type:{eq:"Activity"}};o.filter&&(r.not={dateProcessed:{exists:!0}});const s=b(h`
      query QUERY_BCC_EMAILS($filter: SearchableBccEmailFilterInput, $nextToken: String) {
        searchBccEmails(
          filter: $filter
          nextToken: $nextToken
          sort: { field: createdAt, direction: desc }
          limit: 5
        ) {
          nextToken
          items {
            id
            subject
            type
            status
            from
            contentText
            content
            activity {
              id
              type
              subject
              details
              status
              when
            }
            bccEmailActivityId
            dateProcessed
            createdAt
          }
        }
      }
    `,{variables:{filter:r},fetchPolicy:"network-only",nextFetchPolicy:"cache-first"});console.log(">>BccEmails/index::","bccQ",s);const e=z({...s,model:"BccEmail",op:"search",maxLength:5}),n=x.useCallback(async(a,m)=>{try{await l.mutate({mutation:h`
            mutation ($action: String!, $options: AWSJSON) {
              processEmail(action: $action, options: $options) {
                items {
                  ... on BccEmail {
                    id
                    dateProcessed
                    bccEmailActivityId
                    activity {
                      id
                      type
                      subject
                      details
                      status
                      when
                    }
                  }
                }
              }
            }
          `,variables:{action:"bcc-email-retry",options:JSON.stringify({id:a,contactId:m})}})}catch(C){i(C.message,{variant:"error"})}},[l,i]);return t.jsxs(p,{mr:5,children:[t.jsx(p,{display:"flex",justifyContent:"space-between",alignItems:"center",mb:1,children:t.jsx(Z,{mt:2,mb:2,children:"BCC EMAILS"})}),t.jsxs(p,{children:[t.jsxs(P,{loading:s.loading,data:u(s,"data.searchBccEmails.items",[]),onRowClick:a=>{c({emailId:a.id})},children:[t.jsx(y,{dataId:"subject",label:"Subject"}),t.jsx(y,{dataId:"from",label:"From",render:a=>a||"unknown"}),t.jsx($,{dataId:"createdAt",label:"Date",format:"PPpp"}),t.jsx(M,{dataId:"activity",label:"Activity",width:"200px",render:(a,m)=>a?t.jsx(H,{activity:a}):t.jsxs(p,{display:"flex",children:[t.jsx(f,{data:m,onRetry:n}),t.jsx(p,{mr:1}),t.jsx(f,{data:m,onRetry:n,withContact:!0,label:"Assign"})]})})]}),!s.loading&&t.jsx(R,{onClick:e.more})]}),t.jsx(N,{open:!!o.emailId,maxWidth:"lg",onClose:()=>{c({emailId:void 0})},children:t.jsx(it,{id:o.emailId,onRetry:n,onClose:()=>{c({emailId:void 0})}})})]})}function it({id:o,onRetry:c,onClose:l}){const[i,r]=x.useState({id:o,detail:null}),s=tt(),e=b(h`
    {
      getBccEmail(id:${JSON.stringify(i.id)}){
        id
        dateProcessed
        bccEmailActivityId
        from
        activity {
          id
          type
          subject
          details
          status
          when
        }
      }
    }
  `);console.log(">>BccEmails/index::","emailQ",e);const n=I();return L(async()=>{const a=await n.mutate({mutation:h`
        mutation ($action: String!, $options: AWSJSON) {
          processEmail(action: $action, options: $options) {
            metadata
          }
        }
      `,variables:{action:"bcc-email-view",options:JSON.stringify({id:i.id})}}),m=JSON.parse(u(a,"data.processEmail.metadata","{}"));r(C=>({...C,detail:m}))},[i.id,n]),console.log(">>BccEmails/index::","state.detail",i.detail),t.jsxs(t.Fragment,{children:[t.jsxs(Q,{children:[t.jsx("div",{children:u(i,"detail.email.subject","--")}),t.jsx(p,{p:2,pl:0,children:t.jsx(F,{text:"From",children:t.jsx(O,{className:s.fromChip,label:u(e,"data.getBccEmail.from","unknown")})})})]}),t.jsx(q,{className:s.dialogContent,children:i.detail?t.jsx("p",{style:{whiteSpace:"pre-wrap"},children:u(i,"detail.email.text")}):t.jsx(D,{})}),t.jsxs(J,{className:s.dialogActions,children:[!u(e,"data.getBccEmail.dateProcessed")&&t.jsxs(t.Fragment,{children:[t.jsx(f,{emailId:i.id,onRetry:c}),t.jsx(f,{emailId:i.id,onRetry:c,withContact:!0,label:"Assign to Contact"})]}),t.jsx(j,{size:"small",variant:"contained",color:"secondary",onClick:l,children:"Close"})]})]})}function f({data:o,emailId:c,onRetry:l,withContact:i=!1,label:r}){const[s,e]=x.useState({loading:!1}),n=W(),a=c||(o==null?void 0:o.id),m=x.useCallback(async C=>{C.stopPropagation();let g;if(i){const d=await n({title:"Assign To Contact",content:k=>t.jsx(X,{promptContext:k})});if(g=d==null?void 0:d.contactId,console.log(">>BccEmails/index::","res",d),!g)return}console.log(">>BccEmails/index::","contactId",g),e(d=>({...d,loading:!0})),await l(a,g),e(d=>({...d,loading:!1}))},[a,l,n,i]);return t.jsx(j,{size:"small",variant:"outlined",disabled:s.loading,onClick:m,children:r||"Re-Parse"})}export{ni as default};
