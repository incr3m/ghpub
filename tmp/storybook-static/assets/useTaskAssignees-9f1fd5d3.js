import{R as u}from"./index-f1f749bf.js";import{c as d}from"./papaparse.min-b66e70e7.js";function l(){const[{assignments:t,saved:r},a]=u.useState({assignments:null,saved:!1});console.log({assignments:t});async function n(o){const i=[];t&&(Object.values(t).forEach(e=>{if(!e)return;const s={id:e.id,__typename:"TaskAssignment",__op:"create",__fields:`
            task {
                id
                userAssignments(sortDirection: ASC) {
                    items {
                        id
                        user {
                            id
                            firstName
                            fullname
                            profilePhoto
                        }
                    }
                }
            }
        `};if(e.archived&&e.id)s.__op="delete";else if(!e.id)s.taskId=o,s.startTime=new Date,s.userId=e.userId;else return;i.push(s)}),i.length>0&&await d(i),a(e=>({...e,saved:!0})))}return{setState:a,isSaved:r,assignments:t,save:n}}export{l as u};
