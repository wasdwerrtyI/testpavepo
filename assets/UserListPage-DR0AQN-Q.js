import{j as e,S as v,T as u,B as j,t as s,d as n,C as k,I as L,F as w,a as R,b as F,r as g,c as z,H as B,L as $,G as E}from"./index-BB_JU3zZ.js";import{u as I,a as U,b as H,E as T}from"./ErrorMessage-D3dBQMtt.js";const N=({user:t})=>e.jsxs(G,{children:[e.jsx(v,{to:`/user/${t.id}`,children:e.jsx(P,{children:t.name})}),e.jsxs(A,{children:[e.jsxs(c,{children:[e.jsx(d,{children:"Username:"}),e.jsx(u,{children:t.username})]}),e.jsxs(c,{children:[e.jsx(d,{children:"Email:"}),e.jsx(u,{children:t.email})]}),e.jsxs(c,{children:[e.jsx(d,{children:"City:"}),e.jsx(j,{variant:"primary",children:t.address.city})]}),e.jsxs(c,{children:[e.jsx(d,{children:"Company:"}),e.jsx(j,{variant:"outline",children:t.company.name})]})]}),e.jsx(D,{to:`/user/${t.id}`,children:"View Details"})]}),G=n(k)`
  display: flex;
  flex-direction: column;
  height: 100%;
  transition: transform ${s.transitions.default};
  
  &:hover {
    transform: translateY(-5px);
  }
`,P=n.h3`
  font-size: ${s.fontSizes.large};
  color: ${s.colors.primary};
  margin-bottom: ${s.spacing.sm};
`,A=n.div`
  flex: 1;
  margin-bottom: ${s.spacing.md};
`,c=n.div`
  margin-bottom: ${s.spacing.sm};
`,d=n.span`
  font-weight: 500;
  margin-right: ${s.spacing.xs};
  color: ${s.colors.text};
`,D=n(v)`
  align-self: flex-end;
  font-weight: 500;
  padding: ${s.spacing.xs} ${s.spacing.sm};
  border-radius: ${s.borderRadius.small};
  background-color: ${s.colors.primaryLight};
  transition: background-color ${s.transitions.fast};
  
  &:hover {
    background-color: ${s.colors.primaryHover};
    text-decoration: none;
  }
`,M=({searchTerm:t,onSearchChange:i})=>e.jsxs(V,{children:[e.jsx(W,{children:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("circle",{cx:"11",cy:"11",r:"8"}),e.jsx("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})]})}),e.jsx(Y,{type:"text",placeholder:"Search by name or email...",value:t,onChange:a=>i(a.target.value)})]}),V=n.div`
  position: relative;
  width: 100%;
  max-width: 500px;
`,W=n.div`
  position: absolute;
  left: ${s.spacing.sm};
  top: 50%;
  transform: translateY(-50%);
  color: ${s.colors.textLight};
`,Y=n(L)`
  padding-left: ${s.spacing.xl};
`,q=({filters:t,onFilterChange:i,cities:a,companies:l,onReset:o})=>{const h=r=>{i({...t,city:r.target.value||void 0})},x=r=>{i({...t,company:r.target.value||void 0})};return e.jsx(J,{children:e.jsxs(K,{children:[e.jsx(O,{children:"Filter by:"}),e.jsx(f,{children:e.jsxs(b,{value:t.city||"",onChange:h,children:[e.jsx("option",{value:"",children:"All Cities"}),a.map(r=>e.jsx("option",{value:r,children:r},r))]})}),e.jsx(f,{children:e.jsxs(b,{value:t.company||"",onChange:x,children:[e.jsx("option",{value:"",children:"All Companies"}),l.map(r=>e.jsx("option",{value:r,children:r},r))]})}),e.jsx(Q,{variant:"outline",onClick:o,children:"Reset Filters"})]})})},J=n.div`
  margin-bottom: ${s.spacing.lg};
`,K=n(w)`
  flex-wrap: wrap;
  gap: ${s.spacing.md};
  
  @media (max-width: ${s.breakpoints.tablet}) {
    flex-direction: column;
    align-items: flex-start;
  }
`,O=n.span`
  font-weight: 500;
  color: ${s.colors.text};
`,f=n.div`
  min-width: 200px;
  
  @media (max-width: ${s.breakpoints.tablet}) {
    width: 100%;
  }
`,b=n(R)`
  width: 100%;
`,Q=n(F)`
  @media (max-width: ${s.breakpoints.tablet}) {
    align-self: flex-start;
  }
`,oe=()=>{const[t,i]=g.useState(""),[a,l]=g.useState({}),{data:o,isLoading:h,isError:x,error:r,refetch:y}=I(t,a),C=U(),S=H(),m=()=>{i(""),l({})};return e.jsx(X,{children:e.jsxs(z,{children:[e.jsxs(Z,{children:[e.jsx(B,{children:"User Management"}),e.jsxs(_,{children:[e.jsx(M,{searchTerm:t,onSearchChange:i}),e.jsx(q,{filters:a,onFilterChange:l,cities:C,companies:S,onReset:m})]})]}),e.jsx(g.Suspense,{fallback:e.jsx($,{}),children:h?e.jsx($,{}):x?e.jsx(T,{message:`Error loading users: ${r instanceof Error?r.message:"Unknown error"}`,onRetry:y}):o&&o.length>0?e.jsxs(e.Fragment,{children:[e.jsxs(ee,{children:["Showing ",o.length," ",o.length===1?"user":"users"]}),e.jsx(E,{children:o.map(p=>e.jsx(N,{user:p},p.id))})]}):e.jsxs(se,{children:[e.jsx(ne,{children:"No users found matching your criteria"}),e.jsx(te,{onClick:m,children:"Reset Filters"})]})})]})})},X=n.div`
  min-height: 100vh;
  padding: ${s.spacing.lg} 0;
`,Z=n.div`
  margin-bottom: ${s.spacing.xl};
`,_=n.div`
  display: flex;
  flex-direction: column;
  gap: ${s.spacing.lg};
  margin-top: ${s.spacing.lg};
`,ee=n.div`
  font-size: ${s.fontSizes.medium};
  color: ${s.colors.textLight};
  margin-bottom: ${s.spacing.md};
`,se=n(w)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 200px;
  padding: ${s.spacing.xl};
  background-color: ${s.colors.white};
  border-radius: ${s.borderRadius.medium};
  box-shadow: ${s.shadows.default};
`,ne=n.p`
  font-size: ${s.fontSizes.large};
  color: ${s.colors.textLight};
  margin-bottom: ${s.spacing.lg};
`,te=n.button`
  background-color: ${s.colors.primary};
  color: ${s.colors.white};
  border: none;
  border-radius: ${s.borderRadius.small};
  padding: ${s.spacing.sm} ${s.spacing.lg};
  font-size: ${s.fontSizes.medium};
  cursor: pointer;
  transition: background-color ${s.transitions.fast};

  &:hover {
    background-color: ${s.colors.primaryHover};
  }
`;export{oe as default};
