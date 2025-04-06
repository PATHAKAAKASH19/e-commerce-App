import{r as o,j as e,C as r,I as w,f as U,_ as u}from"./index-qZzDzbZj.js";import{T as m}from"./Title-CTVzQ9qW.js";import{b as T}from"./index-DqceHrrr.js";import{u as z}from"./SellerAuthContext-C33gG-ns.js";function L(){const[n,c]=o.useState({category:"",trending:!1,subCategory:"topwear"}),[i,g]=o.useState(null),[j,l]=o.useState(""),[f,N]=o.useState(null),[k,h]=o.useState(null),[b,p]=o.useState(!1),{sellerToken:y}=z(),x=a=>{c(t=>({...t,[a.target.name]:a.target.value.toLowerCase()}))},v=a=>{const t=a.target.files[0];g(t);const s=URL.createObjectURL(t);l(s)},C=async a=>{a.preventDefault();try{if(b){const t=new FormData;t.append("category",n.category),t.append("trending",n.trending),t.append("subCategory",n.subCategory),i&&(t.append("imgUrl",n.imgUrl),t.append("categoryImg",i));const s=await fetch(`https://looks.akash-pathak.xyz/api/category/${n._id}`,{method:"PUT",headers:{Authorization:`Bearer ${y}`},body:t}),d=await s.json();s.status===200&&(h(d),c({category:"",trending:!1,subCategory:"topwear"}),l(""),g(null),p(!1),u.success(`${d.message}`))}else{const t=new FormData;t.append("category",n.category),t.append("trending",n.trending),t.append("subCategory",n.subCategory),t.append("categoryImg",i);const s=await fetch("https://looks.akash-pathak.xyz/api/category",{method:"POST",headers:{Authorization:`Bearer ${y}`},body:t}),d=await s.json();s.status===201&&(h(d),c({category:"",trending:!1,subCategory:"topwear"}),l(""),g(null),u.success(`${d.message}`))}}catch(t){u.error(`${t.message}`)}},S=()=>{g(null),l("")},$=async a=>{try{const t=await fetch("https://looks.akash-pathak.xyz/api/category",{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:`Bearer ${y}`},body:JSON.stringify(a)}),s=await t.json();t.status===200&&(h(s),u.success(`${s.message}`))}catch(t){u.error(`${t.message}`)}};o.useEffect(()=>{(async()=>{try{const t=await fetch("https://looks.akash-pathak.xyz/api/category"),{categoryValue:s}=await t.json();s&&N(s)}catch(t){console.log("error",t)}})()},[k]);const I=a=>{p(!0),l(a.imgUrl),c(a)},D=()=>{c({category:"",trending:!1,subCategory:"topwear"}),g(null),l(null),p(!1)};return o.useEffect(()=>{window.scrollTo(0,0)},[]),e.jsxs(r,{className:"admin-panel",children:[e.jsxs(r,{className:"create-category",children:[e.jsx("h1",{children:"Create Category"}),e.jsxs("form",{onSubmit:C,children:[e.jsxs(r,{className:"input",children:[e.jsx("label",{htmlFor:"category",style:{alignSelf:"center"},children:"category"}),e.jsx(w,{id:"category",type:"text",name:"category",value:n.category,onChange:x,placeholder:"enter category name"})]}),e.jsxs(r,{className:"input",children:[e.jsx("label",{htmlFor:"trending",style:{alignSelf:"center"},children:"trending"}),e.jsxs("select",{id:"trending",name:"trending",onChange:x,value:n.trending,children:[e.jsx("option",{value:!1,children:"false"}),e.jsx("option",{value:!0,children:"true"})]})]}),e.jsxs(r,{className:"input",children:[e.jsx("label",{htmlFor:"sub-category",style:{alignSelf:"center"},children:"subCategory"}),e.jsxs("select",{id:"sub-category",name:"subCategory",value:n.subCategory,onChange:x,children:[e.jsx("option",{value:"topwear",children:"topwear"}),e.jsx("option",{value:"bottomwear",children:"bottomwear"}),e.jsx("option",{value:"accessories",children:"accessories"}),e.jsx("option",{value:"footwear",children:"footwear"}),e.jsx("option",{value:"watches",children:"watches"})]})]}),e.jsx(r,{className:"upload upload1",style:{alignSelf:"center"},children:e.jsxs("label",{className:"label",children:["upload image",e.jsx(w,{type:"file",name:"image",accept:"image/*",onChange:v,className:"uploadbox"},i?i.name:"file-input")]})}),j?e.jsxs(r,{className:"prevImg",children:[e.jsx("img",{src:j}),e.jsx(T,{onClick:S,className:"icon"})]}):null,b?e.jsxs(r,{className:"btn",children:[e.jsx("button",{type:"submit",className:"update",onClick:C,children:"update"}),e.jsx("button",{type:"button",className:"delete",onClick:()=>D(),children:"cancle"})]}):e.jsx("button",{type:"submit",children:"submit"})]})]}),e.jsxs(r,{className:"show-category",children:[e.jsxs(r,{className:"heading",children:[e.jsx(m,{title:"category"}),e.jsx(m,{title:"subCategory"}),e.jsx(m,{title:"trending"}),e.jsx(m,{title:"categoryImg"}),e.jsx(m,{title:"Action"})]}),f&&f.map((a,t)=>e.jsxs(r,{className:"row",children:[e.jsx("h3",{children:a.category}),e.jsx("h3",{children:a.subCategory}),e.jsx("h3",{children:`${a.trending}`}),e.jsx(r,{className:"category-img",children:e.jsx("img",{src:`${a.imgUrl}`})}),e.jsxs(r,{className:"btn",children:[e.jsx("button",{type:"submit",className:"update",onClick:()=>I(a),children:"update"}),e.jsx("button",{type:"submit",onClick:()=>$(a),children:"delete"})]})]},t)),e.jsx(U,{})]})]})}export{L as default};
