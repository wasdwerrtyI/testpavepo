import{u as f,e as k,j as s,c as v,r as y,L as m,H as C,f as o,T as c,B as x,t as e,d as n,b as L,C as w,F as B}from"./index-Bx-CoWoF.js";import{c as I,E as h}from"./ErrorMessage-IYNngLp9.js";const M=()=>{const{id:l}=f(),p=k(),j=l?parseInt(l,10):0,{data:r,isLoading:u,isError:$,error:g}=I(j),b=()=>{p(-1)};return s.jsx(z,{children:s.jsxs(v,{children:[s.jsxs(E,{onClick:b,children:[s.jsx(U,{children:s.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("line",{x1:"19",y1:"12",x2:"5",y2:"12"}),s.jsx("polyline",{points:"12 19 5 12 12 5"})]})}),"Back to Users"]}),s.jsx(y.Suspense,{fallback:s.jsx(m,{}),children:u?s.jsx(m,{}):$?s.jsx(h,{message:`Error loading user details: ${g instanceof Error?g.message:"Unknown error"}`}):r?s.jsxs(S,{children:[s.jsxs(P,{children:[s.jsx(C,{children:r.name}),s.jsxs(H,{children:["@",r.username]})]}),s.jsxs(i,{children:[s.jsx(o,{children:"Contact Information"}),s.jsxs(R,{children:[s.jsxs(a,{children:[s.jsx(t,{children:"Email"}),s.jsx(d,{children:s.jsx("a",{href:`mailto:${r.email}`,children:r.email})})]}),s.jsxs(a,{children:[s.jsx(t,{children:"Phone"}),s.jsx(d,{children:s.jsx("a",{href:`tel:${r.phone}`,children:r.phone})})]}),s.jsxs(a,{children:[s.jsx(t,{children:"Website"}),s.jsx(d,{children:s.jsx("a",{href:`https://${r.website}`,target:"_blank",rel:"noopener noreferrer",children:r.website})})]})]})]}),s.jsxs(i,{children:[s.jsx(o,{children:"Address"}),s.jsxs(A,{children:[s.jsxs(c,{children:[r.address.street,", ",r.address.suite,s.jsx("br",{}),r.address.city,", ",r.address.zipcode]}),s.jsxs(D,{children:[s.jsxs(x,{variant:"outline",children:["Lat: ",r.address.geo.lat]}),s.jsxs(x,{variant:"outline",children:["Lng: ",r.address.geo.lng]})]})]})]}),s.jsxs(i,{children:[s.jsx(o,{children:"Company"}),s.jsxs(F,{children:[s.jsx(G,{children:r.company.name}),s.jsxs(c,{children:['"',r.company.catchPhrase,'"']}),s.jsx(N,{children:r.company.bs})]})]})]}):s.jsx(h,{message:"User not found"})})]})})},z=n.div`
  min-height: 100vh;
  padding: ${e.spacing.lg} 0;
`,E=n(L)`
  display: inline-flex;
  align-items: center;
  background: none;
  color: ${e.colors.primary};
  padding: ${e.spacing.sm} 0;
  margin-bottom: ${e.spacing.lg};

  &:hover {
    background: none;
    color: ${e.colors.primaryHover};
  }
`,U=n.span`
  margin-right: ${e.spacing.xs};
  display: inline-flex;
`,S=n(w)`
  margin-bottom: ${e.spacing.xl};
`,P=n.div`
  margin-bottom: ${e.spacing.xl};
  padding-bottom: ${e.spacing.lg};
  border-bottom: 1px solid ${e.colors.border};
`,H=n(c)`
  color: ${e.colors.textLight};
  font-size: ${e.fontSizes.large};
  margin-top: -${e.spacing.md};
`,i=n.section`
  margin-bottom: ${e.spacing.xl};
`,R=n.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: ${e.spacing.lg};

  @media (max-width: ${e.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`,a=n.div`
  margin-bottom: ${e.spacing.md};
`,t=n.h4`
  font-size: ${e.fontSizes.medium};
  color: ${e.colors.textLight};
  margin-bottom: ${e.spacing.xs};
`,d=n.div`
  font-size: ${e.fontSizes.medium};
`,A=n.div`
  background-color: ${e.colors.background};
  padding: ${e.spacing.md};
  border-radius: ${e.borderRadius.medium};
  border: 1px solid ${e.colors.border};
`,D=n(B)`
  gap: ${e.spacing.md};
  margin-top: ${e.spacing.sm};
`,F=n.div`
  background-color: ${e.colors.background};
  padding: ${e.spacing.md};
  border-radius: ${e.borderRadius.medium};
  border: 1px solid ${e.colors.border};
`,G=n.h3`
  font-size: ${e.fontSizes.large};
  color: ${e.colors.primary};
  margin-bottom: ${e.spacing.sm};
`,N=n.div`
  font-style: italic;
  color: ${e.colors.textLight};
  margin-top: ${e.spacing.sm};
`;export{M as default};
