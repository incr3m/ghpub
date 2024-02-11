import{R as o}from"./index-f1f749bf.js";import{g as c}from"./_baseForOwn-9b89c4b6.js";import{u as i,g as a}from"./papaparse.min-b66e70e7.js";function l({projectId:e,fetchPolicy:r}){const t=i(a`
      query($projectId: ID!) {
        getProject(id: $projectId) {
          id
          name
          color
          trafficLight
          status
          billable
          description
          overallEstimate
          integrations
          type
        }
      }
    `,{variables:{projectId:e},fetchPolicy:r||"cache-first",nextFetchPolicy:"cache-first"});return o.useMemo(()=>t?c(t,"data.getProject")||{}:{},[t])}export{l as u};
