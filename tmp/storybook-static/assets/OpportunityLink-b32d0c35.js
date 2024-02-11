import{j as i}from"./TransitionGroupContext-9d36972e.js";import"./index-f1f749bf.js";import{u as r,M as a,R as l,C as m}from"./Play-87fed129.js";import{u,l as c,B as d}from"./papaparse.min-b66e70e7.js";function f({id:s,opportunity:n,data:p}){var e;const t=((e=u(c`
      query OPP_LINK($id: ID!) {
        model: getOpportunity(id: $id) {
          id
          name
          type
          stage
        }
      }
    `,{skip:!s,variables:{id:s}}).data)==null?void 0:e.model)||p||n,o=r({model:"Opportunity",data:t});return i.jsx(a,{title:t==null?void 0:t.name,actions:[],children:i.jsx(l,{to:o==null?void 0:o.link,children:i.jsxs(d,{sx:{display:"flex","& > svg":{opacity:.5,mr:1,height:25}},children:[i.jsx(m,{title:"Opportunity"}),t==null?void 0:t.name]})})})}export{f as O};
