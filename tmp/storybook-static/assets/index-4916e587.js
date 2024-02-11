import{j as e}from"./TransitionGroupContext-9d36972e.js";import{R as p}from"./index-f1f749bf.js";import{P as x}from"./index-79afbab1.js";import{u as k}from"./ProjectLink-987015ba.js";import{g}from"./_baseForOwn-9b89c4b6.js";import{u as h,g as c,ab as y,o as j,ac as K,B as u,N as I,Q as S,J as C,O as f,V as P,X as v}from"./papaparse.min-b66e70e7.js";import{b as T}from"./index-bcfaa842.js";import{B as Q}from"./Button-352c3435.js";import"./assertThisInitialized-ad1db8e7.js";import"./_commonjsHelpers-042e6b4d.js";import"./Play-87fed129.js";import"./react-router-19e5b27c.js";import"./index-4d501b15.js";import"./tiny-invariant-dd7d57d2.js";import"./iframe-ed7f5a3f.js";import"../sb-preview/runtime.js";import"./filter-f99df4e5.js";import"./LocalizationProvider-a287304f.js";import"./react-router-dom-60ea8218.js";import"./index-96c5f47c.js";import"./debounce-213cd46f.js";import"./uniq-0d482d7b.js";import"./_arrayIncludes-2cfb33ae.js";import"./cloneDeep-91467704.js";import"./pick-dba65392.js";import"./index-61adb48a.js";import"./useGetProjectSummaryFields-0ab32aca.js";import"./SelectEsModelInput-d580a9f7.js";import"./Link-c687dc07.js";import"./useIncludeFieldNames-35a180a9.js";import"./Save-b67fa0ac.js";import"./index-147ad7aa.js";import"./Add-be7f5660.js";import"./isPlainObject-07477f89.js";import"./isNativeReflectConstruct-05c29d01.js";function dt(){const[n,r]=p.useState({items:[],saving:!1}),{enqueueSnackbar:m}=T();k({paths:[{label:"",link:"/"},{label:"Setting",link:"/setting"},{label:"KPI Setting"}]});const o=h(c`
      query ($filter: AWSJSON) {
        kpi: nestedSearch(type: "KpiList", filter: $filter) {
          metadata
        }
      }
    `,{variables:{filter:JSON.stringify({showAssigneeCount:!0})},fetchPolicy:"network-only",nextFetchPolicy:"cache-first"}),i=y("kpi-setting"),d=j();console.log(">>KpiSetting/index::","setting",i),console.log(">>KpiSetting/index::","kpiQ",o),p.useEffect(()=>{const{items:t={}}=JSON.parse(g(o,"data.kpi.metadata","{}"));r(a=>({...a,items:Object.keys(t).sort().map(s=>({key:s,...t[s]}))}))},[o]),console.log(">>KpiSetting/index::","state",n);const b=p.useCallback((t,a)=>async()=>{console.log(">>KpiSetting/index::","kpiKey",t,a),console.log(">>KpiSetting/index::","setting",i),r(l=>({...l,saving:!0}));let s="";K(i)&&(s=`
        createSetting(input:{
          id: "kpi-setting"
          code: "kpi-setting"
          name: "KPI Setting"
        }){id}
        `),await d.mutate({mutation:c`
        mutation ($input: UpdateSettingInput!){
          ${s}
          updateSetting(input:$input){
            id
            value
          }
        }
        `,variables:{input:{id:"kpi-setting",value:JSON.stringify({items:{...(i==null?void 0:i.items)||{},[t]:{disabled:a}}})}},refetchQueries:()=>["GET_SETTING_Q"]}),m("KPI Settings has been updated",{variant:"success"}),r(l=>({...l,saving:!1}))},[d,m,i]);return e.jsxs(u,{children:[e.jsx(x,{mb:2,children:"KPI Setting"}),e.jsx(u,{children:e.jsxs(I,{loading:o.loading,data:n.items,children:[e.jsx(S,{dataId:"key",label:"KPI",render:t=>C(t)}),e.jsx(f,{dataId:"category",render:t=>e.jsx(P,{size:"small",label:t})}),e.jsx(S,{dataId:"assigned",label:"# Assigned",render:t=>t||""}),e.jsx(f,{dataId:"enabled",render:(t,a)=>{const s=g(i,`items.${a.key}.disabled`,!1);return e.jsx(v,{title:"Click to toggle",children:e.jsx(Q,{disabled:n.saving,size:"small",onClick:b(a.key,!s),children:s?"🔳":"✅"})})}})]})})]})}export{dt as default};
