import{q as g,l as N,Y as y,a as e,_ as c,n as o,p as b,t as m,u as l,w as d,x as v,z as w,J as S,A as C,C as z,E as A}from"./entry.client-BP9oHj2V.js";import{f as p}from"./index-BvvmIczU-CL4w3iEP.js";import{R as $}from"./Toc-lL3fzNkl-D_OJYPo1.js";import{C as J,a as q,p as I}from"./SchemaView-CPZ6RgsF-D6uKkd9p.js";import"./circular-oB4auIIg-DVHJW4Mj.js";const L=A(`
  query GetSchemas($input: JSON!, $type: SchemaType!) {
    schema(input: $input, type: $type) {
      title
      description
      summary
      components {
        schemas {
          name
          schema
          extensions
        }
      }
    }
  }
`);function U(){const{input:h,type:x,versions:u,version:t,options:r}=g(),j=N(L,{input:h,type:x}),{data:a}=y(j),n=a.schema.components?.schemas??[],f=Object.entries(u).length>1,i=r?.showVersionSelect==="always"||f&&r?.showVersionSelect!=="hide";return n.length?e.jsxs("div",{className:"grid grid-cols-(--sidecar-grid-cols) gap-8 justify-between","data-pagefind-filter":"section:openapi","data-pagefind-meta":"section:openapi",children:[e.jsxs(c,{children:[e.jsxs("title",{children:["Schemas ",i?t:""]}),e.jsx("meta",{name:"description",content:"List of schemas used by the API."})]}),e.jsxs("div",{className:"pt-(--padding-content-top) pb-(--padding-content-bottom)",children:[e.jsxs(o,{className:"w-full",children:[e.jsxs("div",{className:"flex flex-col gap-y-4 sm:flex-row justify-around items-start sm:items-end",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx(b,{children:a.schema.title}),e.jsxs(m,{level:1,id:"schemas",registerSidebarAnchor:!0,className:"mb-0",children:["Schemas",i&&e.jsxs("span",{className:"text-xl text-muted-foreground ms-1.5",children:["(",t,")"]})]})]}),a.schema.description&&e.jsxs(l,{className:"flex items-center gap-1 text-sm font-medium text-muted-foreground group",children:[e.jsx("span",{children:"API information"}),e.jsx(J,{className:"group-data-[state=open]:hidden translate-y-px",size:14}),e.jsx(q,{className:"group-data-[state=closed]:hidden translate-y-px",size:13})]})]}),a.schema.description&&e.jsx(d,{className:"CollapsibleContent",children:e.jsx("div",{className:v(S,"pt-4 max-w-full prose-img:max-w-prose"),children:e.jsx(w,{className:"border rounded-sm bg-muted/25 border-border px-2.5 md:px-4",content:a.schema.description})})})]}),e.jsx("hr",{className:"my-8"}),e.jsx("div",{className:"flex flex-col gap-y-5",children:n.map(s=>e.jsxs(o,{className:"group",defaultOpen:!0,children:[e.jsxs(m,{registerSidebarAnchor:!0,level:2,className:"flex items-center gap-1 justify-between w-fit",id:p(s.name),children:[s.name," ",e.jsx(l,{asChild:!0,children:e.jsx(C,{variant:"ghost",size:"icon",className:"size-6",children:e.jsx(z,{size:16,className:"group-data-[state=open]:rotate-90 transition cursor-pointer"})})})]}),e.jsx(d,{className:"mt-4 CollapsibleContent",children:e.jsx(I,{schema:s.schema})})]},s.name))})]}),e.jsx($,{entries:n.map(s=>({id:p(s.name),value:s.name,depth:1}))})]}):e.jsxs("div",{children:[e.jsxs(c,{children:[e.jsxs("title",{children:["Schemas ",i?t:""]}),e.jsx("meta",{name:"description",content:"List of schemas used by the API."})]}),"No schemas found"]})}export{U as SchemaList};
//# sourceMappingURL=SchemaList-B4riYLoP-BZUpvyII.js.map
