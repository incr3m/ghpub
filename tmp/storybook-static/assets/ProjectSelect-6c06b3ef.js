import{j as l}from"./TransitionGroupContext-9d36972e.js";import{R as n,r as q}from"./index-f1f749bf.js";import{A as U,v as A}from"./Play-87fed129.js";import{A as E,h as _,au as R,av as b,B as C,T as M}from"./papaparse.min-b66e70e7.js";import{f as T}from"./filter-f99df4e5.js";function J({onChange:g,disabled:m,value:u,label:p,InputProps:v,disableUnderline:y,classes:I,disableClearable:j,enableAllOptions:r,name:h,variant:d}){const[c,f]=n.useState(()=>r?{id:"",fullname:"All team members"}:""),[a,s]=n.useState(()=>r?[{id:"",fullname:"All team members"}]:[]);return n.useEffect(()=>{async function e(){const i=await U.graphql(A(`
        query SearchUsers($limit:Int, $filter: SearchableUserFilterInput, $sort:SearchableUserSortInput) {
          searchUsers(limit:$limit, filter: $filter, sort:$sort) {
            items {
              id
              fullname
              status
            }
          }
        }
      `,{filter:{status:{ne:"In-active"}},limit:999,sort:{field:"fullname",direction:"asc"}}));console.log(">>components/UserSelect::","response",i),s(r?[{id:"",fullname:"All team members"}].concat(i.data.searchUsers.items):i.data.searchUsers.items)}e()},[r]),n.useEffect(()=>{(u&&(c!=null&&c.id)||u!==""&&a)&&f(a.find(e=>e.id===u)||"")},[u,a,c]),l.jsx(E,{disableClearable:j,classes:I,autoComplete:!0,autoHighlight:!0,disabled:m||!a,options:a,getOptionLabel:e=>(e==null?void 0:e.fullname)||"",value:c,onChange:(e,i)=>{g({target:{value:(i==null?void 0:i.id)||"",name:h}}),f(i)},renderInput:e=>l.jsx(_,{...e,disabled:m||!a,label:p,style:{minWidth:"245px"},fullWidth:!0,variant:d||"standard",InputProps:{...e.InputProps,...v,disableUnderline:y}})})}var x={},W=b;Object.defineProperty(x,"__esModule",{value:!0});var k=x.default=void 0,z=W(R()),B=l;k=x.default=(0,z.default)((0,B.jsx)("path",{d:"M7.88 3.39 6.6 1.86 2 5.71l1.29 1.53zM22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9m0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7m1-11h-2v3H8v2h3v3h2v-3h3v-2h-3z"}),"AddAlarm");function K({onChange:g,value:m,name:u,disabled:p,InputProps:v,disableUnderline:y,disableClearable:I,classes:j,enableAllOptions:r,targetOpportunity:h=!1,clientFilter:d=void 0,variant:c}){const[f,a]=n.useState(()=>r?{id:"",name:"All projects"}:""),[s,e]=n.useState(()=>r?[{id:"",name:"All projects"}]:"");n.useEffect(()=>{async function t(){let o=`query ($limit: Int, $sort: SearchableProjectSortInput) {
        searchProjects (limit: $limit, sort: $sort) {
          items {
            id
            name
            companyId
          }
        }
      }`,S="searchProjects";h&&(o=`query ($limit: Int, $sort: SearchableOpportunitySortInput) {
          searchOpportunitys (limit: $limit, sort: $sort) {
            items {
              id
              name
              companyId
            }
          }
        }`,S="searchOpportunitys");const $=await U.graphql(A(o,{limit:999,sort:{field:"name",direction:"asc"}})),P=d?T($.data[S].items,["companyId",d]):$.data[S].items;e(r?[{id:"",name:"All projects"}].concat(P):P)}t()},[r,h,d]),n.useEffect(()=>{m&&!f&&s&&a(s.find(t=>t.id===m)||"")},[m,s,f,d]),n.useEffect(()=>{a(r?{id:"",name:"All projects"}:"")},[d,r]);const i=q.useMemo(()=>s instanceof Array?s:[],[s]);return l.jsx(E,{disableClearable:I,classes:j,autoComplete:!0,autoHighlight:!0,options:i,getOptionLabel:t=>(t==null?void 0:t.name)||"",value:f,disabled:p||!s,onChange:(t,o)=>{g({target:{value:(o==null?void 0:o.id)||"",name:u}}),a(o)},renderOption:(t,o)=>q.createElement(C,{...t,key:o.id,sx:{paddingLeft:2,paddingRight:2,paddingTop:1,paddingBottom:1,cursor:"pointer","&:hover":{backgroundColor:"#dadada"}}},l.jsx(M,{color:"textPrimary",children:(t==null?void 0:t.key)||""})),renderInput:t=>l.jsx(_,{...t,variant:c||t.variant||"standard",disabled:p||!s,style:{minWidth:"200px"},label:h?"Opportunity":"Project",fullWidth:!0,InputProps:{...t.InputProps,...v,disableUnderline:y}})})}export{K as P,J as U,k as d};
