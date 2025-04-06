import{G as T,r as a,u as $,j as r,C as f,f as b,_ as d}from"./index-DXygbHet.js";import{u as I}from"./UserInfoContext-uXsENF6b.js";import{A as U}from"./AddressForm-DLjM_M6D.js";import{A as z}from"./index-B6xEgzxw.js";import{C as D}from"./index-CU6HXnsv.js";function E(n){return T({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"},child:[]},{tag:"circle",attr:{cx:"12",cy:"10",r:"3"},child:[]}]})(n)}function O(){const[n,i]=a.useState({addressLine:"",locality:"",city:"New York",state:"",country:"USA",zipCode:""}),[h,m]=a.useState(null),[p,j]=a.useState(!1),[A,y]=a.useState(!1),[x,C]=a.useState(""),{userInfo:c,setUserInfo:l}=I(),{accessToken:u}=$();a.useEffect(()=>{c&&Object.keys(c).length!==0&&m(c.address)},[c]);const o=()=>{j(t=>!t),i({addressLine:"",locality:"",city:"",state:"",country:"",zipCode:""}),y(!1)},g=async t=>{try{t.preventDefault();const e=await fetch("/api/user/",{method:"PUT",headers:{"Content-Type":"application/json",Authorization:`Bearer ${u}`},body:JSON.stringify({address:n,addressAction:"save"})}),s=await e.json();e.status===200&&(l(s.userData),o(),d.success("address created successfully"))}catch(e){console.log("error",e),d.error(`${e}`)}},S=async t=>{try{t.preventDefault();const e=await fetch("/api/user/",{method:"PUT",headers:{"Content-Type":"application/json",Authorization:`Bearer ${u}`},body:JSON.stringify({prevAddressId:x,address:n})}),s=await e.json();e.status===200&&(l(s.userData),o(),d.success("address created successfully"))}catch(e){d.error("error : ",e)}},w=t=>Object.entries(t).filter(([s])=>s!=="default"&&s!=="_id").map(([,s])=>s).join(", "),k=async(t,e)=>{try{const s=await fetch("/api/user/",{method:"PUT",headers:{"Content-Type":"application/json",Authorization:`Bearer ${u}`},body:JSON.stringify({address:e,addressAction:"delete"})}),v=await s.json();s.status===200&&(d.success("address deleted successfully"),l(v.userData))}catch(s){console.log("error",s),d.error("unable to delete!! Please try again")}},N=(t,e)=>{o(),i(s=>({...s,...e})),y(!0),C(e._id)};return a.useEffect(()=>{window.scrollTo(0,0)},[]),r.jsxs(f,{className:"user-address-box",children:[r.jsx(b,{}),!p&&r.jsxs(r.Fragment,{children:[r.jsxs(f,{className:"address-icon-box",children:[r.jsx(E,{onClick:o,className:"address-icon"}),r.jsx("h1",{onClick:o,children:"Add new address"})]}),h&&h.map((t,e)=>r.jsxs(f,{className:"address-icon-box",children:[r.jsx(z,{onClick:s=>k(s,t),className:"address-icon2"}),r.jsx("h4",{className:"address-info",children:w(t)}),r.jsx(D,{className:"edit-button",onClick:s=>N(s,t)})]},`${t.zipCode}_${e}`))]}),p&&r.jsx(U,{handleHideAndShow:o,setAddress:i,saveAddress:A?S:g,addressObj:n,editAddress:A})]})}export{O as default};
