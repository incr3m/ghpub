import{j as e}from"./TransitionGroupContext-9d36972e.js";import{R as d}from"./index-f1f749bf.js";import{S as G,e as B,t as w}from"./Play-87fed129.js";import{S as H}from"./index-611aed03.js";import{u as J}from"./ProjectLink-987015ba.js";import{$ as K,B as i,a6 as _,p as W,o as M,bb as X,b as q,T as y,P as S,h as m,G as E,aD as N,g as Q,L as P,aW as O,m as Y,e as L,bc as Z,aC as V,V as D,i as U,W as ee,as as te}from"./papaparse.min-b66e70e7.js";import{A as ne}from"./AttributeDefinitionField-dae4d5e0.js";import{F as a}from"./pick-dba65392.js";import{M as ie}from"./MultipleSelectFieldInput-d0cee4a2.js";import{E as se}from"./SortUpIcon-3aecf5f0.js";import{K as re}from"./Key-1051e01b.js";import{d as le}from"./DeleteForeverOutlined-2dc96511.js";import{g as oe}from"./_baseForOwn-9b89c4b6.js";import{d as ae}from"./CloudUpload-462faa0c.js";import{d as de}from"./Save-b67fa0ac.js";import{d as ce}from"./ExpandMore-79a3c159.js";import{A as pe,h as me,i as ue}from"./VewJobDetails.story-c6ae2e88.js";import{B as T}from"./Button-352c3435.js";import{d as ge}from"./debounce-213cd46f.js";import{C as z}from"./index-bcfaa842.js";import"./assertThisInitialized-ad1db8e7.js";import"./_commonjsHelpers-042e6b4d.js";import"./react-router-19e5b27c.js";import"./index-4d501b15.js";import"./tiny-invariant-dd7d57d2.js";import"./iframe-ed7f5a3f.js";import"../sb-preview/runtime.js";import"./filter-f99df4e5.js";import"./LocalizationProvider-a287304f.js";import"./react-router-dom-60ea8218.js";import"./index-96c5f47c.js";import"./uniq-0d482d7b.js";import"./_arrayIncludes-2cfb33ae.js";import"./cloneDeep-91467704.js";import"./isPlainObject-07477f89.js";import"./useIncludeFieldNames-35a180a9.js";import"./camelCase-4e7e8b23.js";import"./capitalize-c31f38e2.js";import"./Trash-822e65ce.js";import"./AttributeFieldTypes-f31007ac.js";import"./SelectEsModelInput-d580a9f7.js";import"./index-61adb48a.js";import"./useGetProjectSummaryFields-0ab32aca.js";import"./Link-c687dc07.js";import"./index-147ad7aa.js";import"./Add-be7f5660.js";import"./index-72884e22.js";import"./index-356e4a49.js";import"./stories-1f769a10.js";import"./index-63a3e378.js";import"./index.esm-bf21a293.js";import"./index-ce960f89.js";import"./index-f70ce446.js";import"./zod-575fe4a8.js";import"./userGroups-edff3f7b.js";import"./SyncEagleDevTool-4c34bdb8.js";import"./searchUsers-04324aeb.js";import"./find-8750f979.js";import"./index-18188c67.js";import"./useFetchMore-be228481.js";import"./useTagSearch-f4fcfbe9.js";import"./Skeleton-cd6f071e.js";import"./uniqBy-baac1626.js";import"./RemoveCircle-617bdac2.js";import"./index-b769406f.js";import"./DragIndicator-582939ba.js";import"./TableRow-00aadd87.js";import"./TableHead-dd1583ce.js";import"./isString-2f2f79c0.js";import"./Person-5be09a1e.js";import"./times-069ea398.js";import"./_castFunction-353dfc26.js";import"./TaskForm-863cdb73.js";import"./RepeatFields-8275ed19.js";import"./useBeforeSave-e049f6dd.js";import"./Alert-fd9a067a.js";import"./TaskAssignees-858ea3c9.js";import"./useTaskAssignees-9f1fd5d3.js";import"./github-91d085b0.js";import"./OpportunityLink-b32d0c35.js";import"./index-9d3afdfc.js";import"./index-79afbab1.js";import"./Check-78df5e8e.js";import"./bundle-053bdffd.js";import"./MilestoneIcon-61fb6e69.js";import"./index-5d349c56.js";import"./EstimateEditorPopover-b8debf9a.js";import"./AssigneeEditorPopover-2b4e6473.js";import"./isNativeReflectConstruct-05c29d01.js";import"./ToggleButtonGroup-93d9af56.js";import"./index-71ed01a9.js";import"./index-4d31058a.js";import"./Undo-33c7aa7a.js";import"./AuditLogsNoBreadCrumbs-8da9c0ce.js";import"./ExpenseView-2f5d1473.js";import"./MenuOptions-0bc3bb51.js";import"./LocationBeFormBody-c033b2b3.js";import"./reduce-4f6f1985.js";function xe(t){const[s,g]=d.useState({url:null}),{imgKey:r,level:c="public"}=t;return K(async l=>{async function f(n){const u=await _.get(n,{level:c,download:t.base64});let h;(u==null?void 0:u.Body)instanceof Blob?h=await he(u.Body):h=u,l()&&g(v=>({...v,url:h}))}if(!r){g(n=>({...n,url:null}));return}f(r)},[r,t.base64,c]),s.url?e.jsx(i,{component:"img",...t.sx,src:s.url,style:t.style}):e.jsx("div",{})}const he=t=>new Promise((s,g)=>{const r=new FileReader;r.readAsDataURL(t),r.onload=()=>{var c;return s(((c=r.result)==null?void 0:c.toString())||"")},r.onerror=c=>g(c)});function je(t){return JSON.parse(t==null?void 0:t.value)}function be(){const{values:t}=W(),s=d.useRef(),g=M(),[r,c]=d.useState(!1),{onInputEvent:l,save:f,formValues:n,setField:u,fetch:h}=X({model:"Setting",id:"appointedCompetentPerson",onBeforeSave:d.useCallback(x=>({id:"appointedCompetentPerson",code:"project-setting",value:JSON.stringify(x)}),[]),parseData:je}),v=async()=>{try{await g.mutate({mutation:Q`
          mutation($input: CreateSettingInput!) {
            createSetting(input: $input) {
              id
              value
            }
          }
        `,variables:{input:{id:"appointedCompetentPerson",code:"project-setting",value:JSON.stringify({})}}}),h({fetchPolicy:"network-only"})}catch(x){console.log("Error creating new Appointed Competent Person Setting >>",x)}};d.useEffect(()=>{n!=null&&n.id||v()},[n]);const k=d.useCallback(()=>{f()},[f]),A=d.useCallback(()=>{s.current.click()},[]),I=d.useCallback(async x=>{c(!0);const j=x.target.files[0],R=j.type==="image/jpeg"?".jpg":".png",o=await _.put(`settings/project/appointedCompetentPerson_signature${Date.now()}${R}`,j,{contentType:j.type});u("signature",null),await q.delay(500),u("signature",o.key),s.current.value="",c(!1)},[u]);return t!=null&&t.incAppointedCompetentPerson?e.jsxs(pe,{children:[e.jsx(me,{expandIcon:e.jsx(ce,{}),"aria-controls":"panel1bh-content",id:"panel1bh-header",children:e.jsx(y,{children:"Appointed Competent Person Details"})}),e.jsx(ue,{children:e.jsxs(i,{children:[e.jsx(S,{children:e.jsxs(i,{style:{padding:"20px"},children:[e.jsx(y,{variant:"h6",children:"Contact Details"}),e.jsx(i,{children:e.jsx(m,{variant:"outlined",label:"Full name",name:"fullName",margin:"dense",onChange:l,fullWidth:!0,value:(n==null?void 0:n.fullName)||""})}),e.jsx(i,{children:e.jsx(m,{variant:"outlined",label:"Company name",name:"companyName",margin:"dense",onChange:l,fullWidth:!0,value:(n==null?void 0:n.companyName)||""})}),e.jsx(i,{children:e.jsx(m,{variant:"outlined",label:"Contact person",name:"contactPerson",margin:"dense",onChange:l,fullWidth:!0,value:(n==null?void 0:n.contactPerson)||""})})]})}),e.jsx(S,{style:{marginTop:"10px"},children:e.jsxs(i,{style:{padding:"20px"},children:[e.jsx(y,{variant:"h6",children:"Contact Details"}),e.jsxs(i,{style:{display:"flex"},children:[e.jsx(m,{variant:"outlined",label:"Email",name:"email",margin:"dense",onChange:l,fullWidth:!0,value:(n==null?void 0:n.email)||""}),e.jsx(m,{variant:"outlined",label:"Phone number",name:"phoneNumber",margin:"dense",onChange:l,fullWidth:!0,style:{marginLeft:"10px",marginRight:"10px"},value:(n==null?void 0:n.phoneNumber)||""}),e.jsx(m,{variant:"outlined",label:"Mobile number",name:"mobileNumber",margin:"dense",onChange:l,fullWidth:!0,value:(n==null?void 0:n.mobileNumber)||""})]})]})}),e.jsx(S,{style:{marginTop:"10px"},children:e.jsxs(i,{style:{padding:"20px"},children:[e.jsx(y,{variant:"h6",children:"Address"}),e.jsxs(i,{style:{display:"flex"},children:[e.jsx(m,{variant:"outlined",label:"Address",name:"address",margin:"dense",onChange:l,fullWidth:!0,value:(n==null?void 0:n.address)||""}),e.jsx(m,{variant:"outlined",label:"Suburb",name:"addressSuburb",margin:"dense",onChange:l,fullWidth:!0,style:{marginLeft:"10px",marginRight:"10px"},value:(n==null?void 0:n.addressSuburb)||""}),e.jsx(E,{fullWidth:!0,label:"State",variant:"slim-input",value:(n==null?void 0:n.addressState)||"",style:{marginTop:"7px"},onChange:x=>{const j=x.currentTarget.value;l({target:{name:"addressState",value:j}})},options:N}),e.jsx(m,{variant:"outlined",label:"Post Code",name:"addressPostCode",margin:"dense",onChange:l,fullWidth:!0,style:{marginLeft:"10px",marginRight:"10px"},value:(n==null?void 0:n.addressPostCode)||""})]})]})}),e.jsx(S,{style:{marginTop:"10px"},children:e.jsxs(i,{style:{padding:"20px"},children:[e.jsx(y,{variant:"h6",children:"Postal Address"}),e.jsxs(i,{style:{display:"flex"},children:[e.jsx(m,{variant:"outlined",label:"Postal Address",name:"postalAddress",margin:"dense",onChange:l,fullWidth:!0,value:(n==null?void 0:n.postalAddress)||""}),e.jsx(m,{variant:"outlined",label:"Suburb",name:"postalSuburb",margin:"dense",onChange:l,fullWidth:!0,style:{marginLeft:"10px",marginRight:"10px"},value:(n==null?void 0:n.postalSuburb)||""}),e.jsx(E,{fullWidth:!0,label:"State",variant:"slim-input",value:(n==null?void 0:n.postalState)||"",style:{marginTop:"7px"},onChange:x=>{const j=x.currentTarget.value;l({target:{name:"postalState",value:j}})},options:N}),e.jsx(m,{variant:"outlined",label:"Post Code",name:"postalPostCode",margin:"dense",onChange:l,fullWidth:!0,style:{marginLeft:"10px",marginRight:"10px"},value:(n==null?void 0:n.postalPostCode)||""})]})]})}),e.jsx(S,{style:{marginTop:"10px"},children:e.jsxs(i,{style:{padding:"20px"},children:[e.jsx(y,{variant:"h6",children:"License Registration"}),e.jsxs(i,{style:{display:"flex"},children:[e.jsx(m,{variant:"outlined",label:"Registration type",name:"licenseRegistrationType",margin:"dense",onChange:l,fullWidth:!0,style:{marginRight:"5px"},value:(n==null?void 0:n.licenseRegistrationType)||""}),e.jsx(m,{variant:"outlined",label:"Registration number",name:"licenseRegistrationNumber",margin:"dense",onChange:l,fullWidth:!0,style:{marginLeft:"5px"},value:(n==null?void 0:n.licenseRegistrationNumber)||""})]})]})}),e.jsx(S,{style:{marginTop:"10px",marginBottom:"10px"},children:e.jsxs(i,{style:{padding:"20px"},children:[e.jsx(y,{variant:"h6",children:"Signature"}),e.jsx(y,{variant:"caption",children:"Upload a picture of the signature of this person."}),e.jsx(i,{children:(n==null?void 0:n.signature)&&e.jsx(xe,{imgKey:n.signature,style:{width:"300px",height:"auto"}})}),e.jsx(T,{style:{marginTop:"10px"},variant:"outlined",fullWidth:!0,startIcon:e.jsx(ae,{}),onClick:A,disabled:r,children:"Choose file"})]})}),e.jsx(T,{style:{marginBottom:"10px"},variant:"outlined",fullWidth:!0,startIcon:e.jsx(de,{}),onClick:k,disabled:r,children:"Save"}),e.jsx("input",{type:"file",ref:s,accept:"image/png",style:{display:"none"},onChange:I})]})})]}):null}const ye=d.memo(be),fe=Y({chipActive:{maxWidth:"150px",backgroundColor:"#1AE970",color:"#fff"}});function hn(){return J({paths:[{label:"",link:"/"},{label:"Settings",link:"/settings"},{label:"Project",link:"/settings"}]}),e.jsx(i,{children:e.jsxs(H,{code:"project-setting",module:"project",children:[e.jsx(Pe,{}),e.jsx(G,{name:"allowGithubIntegration",label:"Github Integration",options:[{label:"Yes",value:"yes"},{label:"No",value:null}]}),e.jsx(B,{fullWidth:!0,name:"githubWebhookSecret",label:"Github Webhook Secret"}),e.jsx(B,{fullWidth:!0,name:"defaultXeroContactId",label:"Default Xero Contact ID"}),e.jsxs(P,{text:"Basic Fields",children:[e.jsx(a,{name:"overallEstimate",label:"Overall Estimate (Hours)"}),e.jsx(a,{name:"color",label:"Color"})]}),e.jsxs(P,{text:"Information",children:[e.jsx(a,{name:"estimatedValue",label:"Estimated Value"}),e.jsx(a,{name:"projectHourlyRate",label:"Project Hourly"}),e.jsx(a,{name:"projectNumber",label:"Project Number"})]}),e.jsxs(P,{text:"Contact Info",children:[e.jsx(a,{name:"source",label:"Source"}),e.jsx(a,{name:"otherRoles",label:"Other Roles"})]}),e.jsxs(P,{text:"Location",children:[e.jsx(a,{name:"incProjectLocation",label:"Include Project Location"}),e.jsx(a,{name:"incLotAndPlanDetails",label:"Include Lot and Plan Details"}),e.jsx(a,{name:"incLGA",label:"Include LGA"})]}),e.jsx(Se,{}),e.jsx(O,{mt:1}),e.jsx(ve,{}),e.jsx(O,{mt:1}),e.jsx(ne,{field:"attributes"})]})})}function Ce(t){console.log("Options Item");const s=d.useRef({changed:!1,index:t.index}),[g,r]=d.useState({text:t.text}),c=`${t.index}`;d.useEffect(()=>{s.current.changed&&t.onChange&&t.onChange(s.current.index,g.text)},[t.onChange,g.text]),d.useEffect(()=>{r({text:t.text})},[t.index,t.text]);const l=d.useCallback(n=>{const u=n.target.value;r(h=>({...h,text:u})),s.current.changed=!0},[]),f=!t.archived;return e.jsxs(i,{style:{display:"grid",gridTemplateColumns:"repeat(3, auto)",justifyContent:"stretch"},children:[e.jsx(te,{name:c,checked:f,tabIndex:-1,disableRipple:!0,onChange:t.onChecked}),e.jsx(m,{value:g.text,disabled:!f,variant:"outlined",name:c,onChange:l}),e.jsx(U,{onClick:()=>t.onRemove(t.id),size:"large",children:e.jsx(le,{})})]})}function $(t){var h,v,k,A,I,x,j,R;console.log("Project Options");const s=d.useRef({}),g=fe(),[r,c]=d.useState({items:((h=t==null?void 0:t.options)==null?void 0:h.map(o=>({...o,id:L.v4()})))||[]}),l=d.useCallback(()=>{c(o=>{const p=o.items,b=Z(p);return b&&b.text===""?b.archived=!1:p.push({id:L.v4(),text:"",archived:!1}),{...o,items:p}})},[]),f=d.useCallback(ge((o,p)=>{c(b=>{const{items:C}=b;return C[o].text=p,{...b,items:C}})},500),[]),n=o=>{c(p=>{const b=p.items;return{...p,items:b.filter(C=>C.id!==o)}})},u=d.useCallback((o,p)=>{const b=o.currentTarget.getAttribute("name");c(C=>{const{items:F}=C;return F[b].archived=!p,{...C,items:F}})},[]);return e.jsxs(e.Fragment,{children:[e.jsxs(V,{style:{height:73,padding:"15px 30px",display:"grid",gridTemplateColumns:"repeat(2, auto) 50px"},children:[e.jsx(i,{children:e.jsx(y,{style:{fontSize:13,fontWeight:"bold",paddingTop:10},children:t.title})}),e.jsxs(i,{style:{display:"grid",gridTemplateColumns:`repeat(${(v=t==null?void 0:t.options)==null?void 0:v.length}, auto)`,justifyContent:"start",gridColumnGap:10},children:[(k=t==null?void 0:t.options)==null?void 0:k.slice(0,6).map((o,p)=>e.jsx(D,{label:o==null?void 0:o.text,className:g.chipActive},`${o==null?void 0:o.text}-${p}`)),((A=t==null?void 0:t.options)==null?void 0:A.length)>6&&e.jsx(D,{style:{backgroundColor:"#F3F7FB",color:"#052649"},label:`+${t.options.slice(6).length} more`,onClick:()=>s.current.open()})]}),e.jsx(U,{name:"editIcon",onClick:()=>s.current.open(),size:"large",children:e.jsx(se,{})})]}),e.jsx(ee,{variant:"dialog",ref:s,dialogProps:{maxWidth:"xs"},children:e.jsxs(i,{style:{display:"grid",padding:40,width:430,gridRowGap:35},children:[e.jsx(i,{style:{display:"grid",gridTemplateColumns:"10fr 2fr",alignItems:"center"},children:e.jsx(y,{style:{color:"#052649",fontWeight:"bold",fontSize:20},children:(I=t==null?void 0:t.title)==null?void 0:I.toUpperCase()})}),e.jsx(i,{style:{display:"grid",gridRowGap:15},children:e.jsxs(P,{text:"Items",mt:1,style:{display:"grid",gridRowGap:15},children:[((x=r==null?void 0:r.items)==null?void 0:x.length)<1&&e.jsx("div",{children:"empty"}),((j=r==null?void 0:r.items)==null?void 0:j.length)>0&&((R=r==null?void 0:r.items)==null?void 0:R.map((o,p)=>e.jsx(Ce,{...o,index:p,onChange:f,onRemove:n,onChecked:u},p)))]})}),e.jsxs(i,{style:{display:"grid",gridTemplateColumns:"repeat(2, auto)",justifyContent:"end",gridColumnGap:15},children:[e.jsx(T,{size:"large",variant:"outlined",color:"primary",onClick:l,children:"Add Item"}),e.jsx(T,{size:"large",startIcon:e.jsx(re,{}),variant:"contained",disabled:!1,color:"primary",onClick:()=>{t.setFieldValue(t.name,r.items),setTimeout(()=>{console.log(t.values)},1e3),s.current.close()},children:"Save keywords"})]})]})})]})}function ve(){const{values:t}=W();return e.jsxs(i,{children:[e.jsx(i,{children:e.jsx(a,{name:"psr",label:"Project Status Report"})}),e.jsx(i,{children:e.jsx(z,{in:t==null?void 0:t.psr,children:e.jsxs(i,{children:[e.jsx(a,{name:"activities",label:"Activities"}),e.jsx(a,{name:"notes",label:"Notes"}),e.jsx(a,{name:"risks",label:"Risks"}),e.jsx(a,{name:"issues",label:"Issues"}),e.jsx(a,{name:"decisions",label:"Decisions"})]})})})]})}function Se(){const{values:t,setFieldValue:s}=W();return console.log(">>settings/ProjectSetting::engineering","values",t),e.jsx(e.Fragment,{children:e.jsxs(i,{children:[e.jsx(i,{children:e.jsx(a,{name:"engineering",label:"Engineering"})}),e.jsx(z,{in:t==null?void 0:t.engineering,children:e.jsxs(e.Fragment,{children:[e.jsxs(i,{children:[e.jsx(a,{name:"incEngineeringFields",label:"Include Engineering Fields"}),e.jsx(a,{name:"incAppointedCompetentPerson",label:"Include Appointed Competent Person"})]}),e.jsx(ye,{}),e.jsx(i,{mt:2}),e.jsx($,{setFieldValue:s,values:t,name:"buildingStructureOptions",options:t==null?void 0:t.buildingStructureOptions,title:"Building Structure"}),e.jsx(i,{mt:2}),e.jsx($,{setFieldValue:s,values:t,name:"classBuildingStructure",options:t==null?void 0:t.classBuildingStructure,title:"Class of Building/Structure"})]})})]})})}function Pe(){const{values:t}=W();return console.log(">>settings/ProjectSetting::","values",t),e.jsxs(e.Fragment,{children:[e.jsx(ie,{fullWidth:!0,name:"allowedTypes",placeholder:"Project Types",options:Object.entries(w).map(s=>({value:s[0],label:s[1].label}))}),e.jsx(G,{name:"defaultType",label:"Default Type",options:((t==null?void 0:t.allowedTypes)||"").split(",").map(s=>({value:s,label:oe(w,[s,"label"])}))})]})}export{hn as default};
