import{c as q,r as i,a as L,j as t,C as c,I as p,f as _,n as f}from"./index-DXygbHet.js";import{b as B}from"./index-CAEwv3fr.js";import{u as F}from"./SellerAuthContext-BfVxSjJZ.js";function G(){const u=q().state||null,[r,g]=i.useState({name:"",description:"",stock:"",price:"",materialType:"",styleType:"",color:"",categoryId:"",category:""}),[I,h]=i.useState([]),[m,v]=i.useState([]),[j,b]=i.useState([]),[y,x]=i.useState([]),[N,k]=i.useState(!1),S=L(),{sellerToken:T}=F(),$=["S","M","L","XL","XXL"],C=5,d=a=>{if(a.target.name==="category")if(a.target.value){const e=m.find(s=>a.target.value===s.category);g(s=>({...s,categoryId:e._id,[a.target.name]:a.target.value}))}else return;else g(e=>({...e,[a.target.name]:a.target.value.toLowerCase()}))},w=a=>{a.target.checked?h(e=>[...e,a.target.name]):h(e=>e.filter((s,n)=>s!==a.target.name))},E=async a=>{a.preventDefault();try{if(N){const e=new FormData;e.append("name",r.name),e.append("description",r.description),e.append("stock",r.stock),e.append("price",r.price),e.append("categoryId",r.categoryId),e.append("materialType",r.materialType),e.append("styleType",r.styleType),e.append("color",r.color),I.forEach((o,l)=>{e.append(`sizes[${l}]`,o)}),j&&(r.productImgUrls.filter(l=>y.includes(l)).forEach((l,U)=>{e.append(`productImgUrls[${U}]`,l)}),j.forEach(l=>{e.append("productImages",l)}));const s=await fetch(`/api/product/${r._id}`,{method:"PUT",headers:{Authorization:`Bearer ${T}`},body:e}),n=await s.json();s.status===200&&(g({name:"",description:"",stock:"",price:"",materialType:"",styleType:"",color:"",categoryId:"",category:""}),x([]),b([]),h([]),k(!1),f.success(`${n.message}`))}else{const e=new FormData;e.append("name",r.name),e.append("description",r.description),e.append("stock",r.stock),e.append("price",r.price),e.append("categoryId",r.categoryId),e.append("materialType",r.materialType),e.append("styleType",r.styleType),e.append("color",r.color),I.forEach((o,l)=>{e.append(`sizes[${l}]`,o)}),j.forEach(o=>{e.append("productImages",o)});const s=await fetch("/api/product",{method:"POST",headers:{Authorization:`Bearer ${T}`},body:e}),n=await s.json();s.status===201&&(g({name:"",description:"",stock:"",price:"",materialType:"",styleType:"",color:"",categoryId:"",category:""}),x([]),b([]),h([]),f.success(`${n.message}`))}}catch(e){f.error(`${e}`)}},z=a=>{const e=a.target.files,s=Array.from(e);if(j.length+e.length>C){alert("can only add 5 images");return}y.length+e.length<C&&alert("add five images for product "),b(o=>[...o,...e]);const n=s.map(o=>URL.createObjectURL(o));x(o=>[...o,...n])},D=a=>{b(e=>e.filter((s,n)=>n!==a)),x(e=>e.filter((s,n)=>n!==a))};i.useEffect(()=>{(async()=>{try{const e=await fetch("/api/category"),{categoryValue:s}=await e.json();s&&v(s)}catch(e){console.log("error : ",e)}})()},[]),i.useEffect(()=>{const a=()=>{const e=m.find(s=>s._id===u.categoryId);g({...u,category:e.category}),h(u.sizes),x(u.productImgUrls),k(!0)};if(u&&m.length>0)a();else return},[m,u]);const P=async a=>{try{const s=(await fetch(`/api/product/${a}`,{method:"DELETE",headers:{Authorization:`Bearer ${T}`}})).json();f.success(`${s.message}`)}catch(e){f.error(`${e.message}`)}},A=()=>{S("/seller-dashboard/products")};return i.useEffect(()=>{window.scrollTo(0,0)},[]),t.jsx(c,{className:"admin-panel",children:t.jsxs(c,{className:"create-category create-product",children:[N?t.jsx("h1",{children:"Update Product"}):t.jsx("h1",{children:"Create Product"}),t.jsxs("form",{onSubmit:E,className:"product-form",children:[t.jsx(c,{className:"box",children:t.jsx(p,{type:"text",placeholder:"Enter product name",name:"name",value:r.name,onChange:d,required:!0})}),t.jsx(c,{className:"box",id:"textarea1",children:t.jsx("textarea",{placeholder:"Enter product description",name:"description",value:r.description,onChange:d,required:!0})}),t.jsx(c,{className:"box",children:t.jsx(p,{type:"number",placeholder:"Enter product quantity",min:10,name:"stock",value:r.stock===""?"":Number(r.stock),onChange:d,required:!0})}),t.jsx(c,{className:"box",children:t.jsx(p,{type:"number",placeholder:"Enter product price",min:0,name:"price",value:r.price===""?"":Number(r.price),onChange:d,required:!0})}),t.jsx(c,{className:"box",children:t.jsx(p,{type:"text",placeholder:"Enter product material",name:"materialType",value:r.materialType,onChange:d,required:!0})}),t.jsx(c,{className:"box",children:t.jsx(p,{type:"text",placeholder:"Enter product style",name:"styleType",value:r.styleType,onChange:d,required:!0})}),t.jsx(c,{className:"box",children:t.jsx(p,{type:"text",placeholder:"Enter product color",name:"color",value:r.color,onChange:d,required:!0})}),t.jsx(c,{className:"box",children:t.jsxs("select",{name:"category",onChange:d,value:r.category,children:[t.jsx("option",{value:"",disabled:!0,children:"Select an option"}),m&&m.map((a,e)=>a.category==="banner"||a.category==="banner2"?null:t.jsx("option",{value:`${a.category}`,children:a.category},e))]})}),t.jsxs(c,{className:"sizes-con",children:[t.jsx("label",{children:"sizes"}),$.map((a,e)=>t.jsxs(c,{className:"size1",children:[t.jsx(p,{type:"checkbox",id:a,name:a,checked:I.includes(a),onChange:w,className:"checkbox"}),t.jsx("label",{htmlFor:a,className:"label",children:a})]},e))]}),t.jsx(c,{className:"upload",style:{alignSelf:"center"},children:t.jsxs("label",{children:["upload product image",t.jsx(p,{type:"file",name:"images",multiple:!0,accept:"image/*",onChange:z,disabled:y.length>=C,className:"uploadbox"})]})}),t.jsx(c,{className:"product-box",children:y&&y.map((a,e)=>t.jsxs(c,{className:"product-img",children:[t.jsx("img",{src:`${a}`},e),t.jsx(B,{onClick:()=>D(e),className:"icon"})]},e))}),N?t.jsxs(c,{className:"productBtn",children:[t.jsx("button",{type:"button",className:"delete",onClick:()=>{P(u._id)},children:"delete"}),t.jsx("button",{type:"button",className:"update",onClick:E,children:"update"}),t.jsx("button",{type:"button",className:"delete",style:{backgroundColor:"black"},onClick:A,children:"cancle"})]}):t.jsx("button",{type:"submit",children:"submit"})]}),t.jsx(_,{})]})})}export{G as default};
