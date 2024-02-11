import{j as s}from"./TransitionGroupContext-9d36972e.js";import"./index-f1f749bf.js";import{U as g}from"./filter-f99df4e5.js";import{u as c,l as f,B as d,T as u,m as h}from"./papaparse.min-b66e70e7.js";import{g as x}from"./_baseForOwn-9b89c4b6.js";const B=h({root:{alignItems:"center",display:"flex"},name:{marginLeft:5,"& > h6":{lineHeight:1},"& > span":{lineHeight:0,opacity:.7}}});function S({id:t,email:r,data:e,withSecondaryText:y=!0,...i}){var p;const l=B(),o=c(f`
  {
    getUser(id:${JSON.stringify(t)}){
      id
      fullname
      profilePhoto
      position
    }
  }
  `,{skip:!!e||!t}),n=c(f`
  {
    userByEmail(email:${JSON.stringify(r)}){
      items{
        id
        fullname
        profilePhoto
        position
      }
    }
  }
  `,{skip:!!e||!r});console.log(">>UserCard/index::","userByEmailQ",n);const a=e||x(n,"data.userByEmail.items[0]")||((p=o==null?void 0:o.data)==null?void 0:p.getUser)||{};let m=l.root;return i.className&&(m+=` ${i.className}`),s.jsxs(d,{...i,className:m,children:[s.jsx(g,{s3Key:a.profilePhoto,size:"small"}),s.jsxs("div",{className:l.name,children:[s.jsx(u,{variant:"subtitle1",children:a.fullname}),y&&s.jsx(u,{variant:"overline",children:a.position||"-"})]})]})}export{S as U};
