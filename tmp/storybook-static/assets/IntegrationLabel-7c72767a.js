import{j as i}from"./TransitionGroupContext-9d36972e.js";import{u as p,g as l,X as d,J as g,i as u,L as f}from"./papaparse.min-b66e70e7.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./assertThisInitialized-ad1db8e7.js";import"./_arrayIncludes-2cfb33ae.js";import"./_baseForOwn-9b89c4b6.js";import"./index-bcfaa842.js";import"./index-96c5f47c.js";import"./isNativeReflectConstruct-05c29d01.js";import"./Button-352c3435.js";import"./isPlainObject-07477f89.js";import"./debounce-213cd46f.js";import"./iframe-ed7f5a3f.js";import"../sb-preview/runtime.js";import"./index-4d501b15.js";function b(n){var s,a;const c=(((a=(s=p(l`
    query BEFORM_INTEGRATIONS_Q{
      record: get${n.model}(id:${JSON.stringify(n.modelId)}){
        id
        integrations
      }
    }
  `).data)==null?void 0:s.record)==null?void 0:a.integrations)||[]).map(o=>JSON.parse(o||"{}")),e=[];for(const o of c){if(!o)continue;const{code:r}=o,t=n.integrations[r],m=t==null?void 0:t.icon;!t||!m||e.push(i.jsx(d,{title:g(r||""),children:i.jsx(u,{size:"small",onClick:t.onClick,children:i.jsx(m,{fontSize:"inherit"})})},r))}return i.jsx(f,{text:"Integration",children:e})}export{b as default};
