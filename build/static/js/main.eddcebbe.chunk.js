(this.webpackJsonpmycommerce=this.webpackJsonpmycommerce||[]).push([[0],{113:function(e,t,c){},114:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c.n(a),r=c(25),s=c.n(r),i=c(8),l=c.n(i),o=c(14),j=c(7),d=c(12),u=c(10),b=(c(70),c(58)),h=new(c.n(b).a)("pk_184625ed86f36703d7d233bcf6d519a4f9398f20048ec",!0),m=c(118),x=c(119),p=c(59),O=c(138),f=c(116),g=c(117),v=c(1),y=["light","dark"],N=function(e){var t=e.product,c=e.idx,a=e.onAddToCart;return Object(v.jsx)(v.Fragment,{children:Object(v.jsx)(p.a,{className:"p-3",children:Object(v.jsxs)(O.a,{bg:c%2?y[0]:y[1],children:[Object(v.jsx)(O.a.Img,{height:"200px",style:{objectFit:"cover"},variant:"top",src:t.image.url}),Object(v.jsxs)(O.a.Body,{className:c%2?"text-dark":"text-light",children:[Object(v.jsx)(O.a.Title,{children:t.name}),Object(v.jsx)(O.a.Subtitle,{className:"mb-2 text-muted",children:t.description.replace(/<\/?p>/g,"")}),Object(v.jsx)("hr",{}),Object(v.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(v.jsx)("h1",{children:t.price.formatted_with_symbol}),Object(v.jsxs)(f.a,{onClick:function(){return a(t.id,1)},variant:"outline-".concat(c%2?y[1]:y[0]),children:[Object(v.jsx)(g.a,{size:25})," Add to Cart"]})]})]})]})})})},C=function(e){var t=e.products,c=e.onAddToCart;return Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)(m.a,{fluid:"md",children:[Object(v.jsxs)("div",{className:"flex-column align-items-end d-none d-md-flex",children:[Object(v.jsx)("p",{className:"text-muted h5 mb-0",children:"Latest Collection"}),Object(v.jsx)("h1",{className:"display-5",children:"Highest quality"})]}),Object(v.jsx)(x.a,{xs:1,sm:2,lg:3,children:t.map((function(e,t){return Object(v.jsx)(N,{product:e,idx:t,onAddToCart:c},e.id)}))})]})})},w=c(120),k=function(){return Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)(m.a,{fluid:!0,className:"d-flex flex-column justify-content-center align-items-center vh-75",children:[Object(v.jsx)("h1",{className:"display-5 text-uppercase",children:"Loading..."}),Object(v.jsx)(w.a,{animation:"border",variant:"danger"})]})})},S=c(136),_=c(134),F=c(122),E=c(121),z=function(e){var t=e.totalItems,c=Object(u.g)();return Object(v.jsx)(v.Fragment,{children:Object(v.jsx)(S.a,{bg:"dark",className:"fixed-top py-3 px-3",expand:"md",style:{minHeight:"75px"},children:Object(v.jsxs)(m.a,{fluid:"md",children:[Object(v.jsx)(d.b,{to:"/",children:Object(v.jsxs)(S.a.Brand,{className:"text-light",children:[Object(v.jsx)(E.a,{className:"me-1 text-danger"}),Object(v.jsx)("span",{className:"h5",children:"JackieStore"}),Object(v.jsx)("small",{className:"text-uppercase text-danger",children:" Hand-made"})]})}),Object(v.jsx)(S.a.Toggle,{"aria-controls":"basic-navbar-nav",className:"bg-light"}),Object(v.jsx)(S.a.Collapse,{id:"basic-navbar-nav",children:Object(v.jsxs)(_.a,{className:"ms-auto d-flex align-items-center gap-4",children:[Object(v.jsx)(d.b,{to:"/shop",className:"text-light",children:"Shop"}),"/"===c.pathname||"/shop"===c.pathname?Object(v.jsx)(d.b,{to:"/cart",children:Object(v.jsxs)(f.a,{variant:"light",children:[Object(v.jsx)(E.a,{size:25,className:"me-3"}),Object(v.jsx)(F.a,{bg:"danger",children:t})]})}):""]})})]})})})},I=c(137),T=c(126),L=c(127),Y=c(128),q=c(123),A=c(124),P=c(125),Z=function(e){var t=e.item,c=e.onUpdateCartQty,a=e.onRemoveFromCart;return Object(v.jsx)(p.a,{children:Object(v.jsxs)(O.a,{bg:"dark",children:[Object(v.jsx)(O.a.Img,{src:t.media.source,style:{objectFit:"cover"},height:"200px"}),Object(v.jsxs)(O.a.Body,{children:[Object(v.jsx)(O.a.Title,{className:"text-light",children:t.name}),Object(v.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(v.jsxs)("div",{className:"d-flex align-items-center",children:[Object(v.jsx)(f.a,{variant:"danger",size:"sm",onClick:function(){return c(t.id,t.quantity-1)},children:Object(v.jsx)(q.a,{size:"25"})}),Object(v.jsx)("span",{className:"display-5 mx-3 text-light",children:t.quantity}),Object(v.jsx)(f.a,{variant:"success",size:"sm",onClick:function(){return c(t.id,t.quantity+1)},children:Object(v.jsx)(A.a,{size:"25"})})]}),Object(v.jsxs)(f.a,{variant:"danger",className:"px-3",onClick:function(){return a(t.id)},children:[Object(v.jsx)(P.a,{size:"25"})," Remove"]})]})]})]})},t.id)},B=function(e){var t=e.cart,c=e.onUpdateCartQty,a=e.onRemoveFromCart,n=e.onEmptyCart;return 0===t.line_items.length?Object(v.jsx)(v.Fragment,{children:Object(v.jsx)(m.a,{fluid:"md",children:Object(v.jsxs)(x.a,{children:[Object(v.jsxs)(p.a,{sm:8,children:[Object(v.jsx)("h1",{className:"display-3",children:"Your cart is empty"}),Object(v.jsxs)("p",{className:"h5 text-muted",children:[Object(v.jsxs)(d.b,{to:"/shop",className:"text-danger",children:[" ","Go back to the shop"," "]})," ","and start shopping!"," "]})]}),Object(v.jsx)(p.a,{sm:4,className:"d-flex justify-content-center mt-5",children:Object(v.jsx)(T.a,{size:255})})]})})}):Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)(m.a,{fluid:"md",className:"mb-5",children:[Object(v.jsxs)(m.a,{fluid:!0,className:"d-flex justify-content-between my-5",children:[Object(v.jsxs)(I.a,{children:[Object(v.jsx)("h1",{className:"mb-0",children:"Your shopping cart: "}),Object(v.jsxs)("p",{className:"display-5",children:[Object(v.jsx)("span",{className:"text-muted",children:"Subtotal:"})," ",t.subtotal.formatted_with_symbol]})]}),Object(v.jsxs)(I.a,{direction:"horizontal",gap:3,children:[Object(v.jsxs)(f.a,{size:"lg",variant:"outline-danger",onClick:function(){return n()},children:[Object(v.jsx)(L.a,{size:"25",className:"me-2"}),"Empty"]}),Object(v.jsx)(d.b,{to:"/checkout",children:Object(v.jsxs)(f.a,{size:"lg",variant:"outline-dark",children:[Object(v.jsx)(Y.a,{size:"25",className:"me-2"}),"Checkout"]})})]})]}),Object(v.jsx)(x.a,{md:2,lg:3,className:"g-4",children:t.line_items.map((function(e){return Object(v.jsx)(Z,{item:e,onUpdateCartQty:c,onRemoveFromCart:a},e.id)}))})]})})},G=c(9),J=c(129),H=function(e){var t=e.cart;return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("h1",{children:"Order summary"}),Object(v.jsxs)(J.a,{striped:!0,hover:!0,bordered:!0,className:"mb-5 mt-4",children:[Object(v.jsx)("thead",{children:Object(v.jsxs)("tr",{children:[Object(v.jsx)("th",{children:"#"}),Object(v.jsx)("th",{children:"Product"}),Object(v.jsx)("th",{children:"Quantity"}),Object(v.jsx)("th",{children:"Price"})]})}),Object(v.jsx)("tbody",{children:t.line_items.map((function(e,t){return Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{children:t+1}),Object(v.jsx)("td",{children:e.name}),Object(v.jsx)("td",{children:e.quantity}),Object(v.jsx)("td",{children:e.price.formatted_with_symbol})]},t)}))})]})]})},Q=c(139),R=c(133),U=function(e){var t=e.value,c=e.type,a=e.id,n=e.placeholder,r=e.onChange,s=e.label;return Object(v.jsx)(p.a,{children:Object(v.jsxs)(R.a.Group,{className:"mb-3",children:[Object(v.jsx)(R.a.Label,{htmlFor:a,children:s}),Object(v.jsx)(R.a.Control,{name:a,id:a,type:c,value:t,onChange:r,placeholder:n,required:!0})]})})},D=function(e){var t=e.cart,c=e.onCaptureCheckout,n=Object(a.useState)({}),r=Object(j.a)(n,2),s=r[0],i=r[1],d=Object(a.useState)(!0),b=Object(j.a)(d,2),O=b[0],g=b[1],y=Object(u.f)(),N=Object(a.useState)("Joe"),C=Object(j.a)(N,2),S=C[0],_=C[1],F=Object(a.useState)("Danny"),E=Object(j.a)(F,2),z=E[0],I=E[1],T=Object(a.useState)("joedanny@gmail.com"),L=Object(j.a)(T,2),Y=L[0],q=L[1],A=Object(a.useState)("Joe Danny"),P=Object(j.a)(A,2),Z=P[0],B=P[1],J=Object(a.useState)("123 Fake Str"),D=Object(j.a)(J,2),V=D[0],M=D[1],$=Object(a.useState)("San Francisco"),K=Object(j.a)($,2),W=K[0],X=K[1],ee=Object(a.useState)("93821"),te=Object(j.a)(ee,2),ce=te[0],ae=te[1],ne=Object(a.useState)("4242 4242 4242 4242"),re=Object(j.a)(ne,2),se=re[0],ie=re[1],le=Object(a.useState)("11"),oe=Object(j.a)(le,2),je=oe[0],de=oe[1],ue=Object(a.useState)("2023"),be=Object(j.a)(ue,2),he=be[0],me=be[1],xe=Object(a.useState)("123"),pe=Object(j.a)(xe,2),Oe=pe[0],fe=pe[1],ge=Object(a.useState)("93821"),ve=Object(j.a)(ge,2),ye=ve[0],Ne=ve[1],Ce=Object(a.useState)([]),we=Object(j.a)(Ce,2),ke=we[0],Se=we[1],_e=Object(a.useState)(""),Fe=Object(j.a)(_e,2),Ee=Fe[0],ze=Fe[1],Ie=Object(a.useState)([]),Te=Object(j.a)(Ie,2),Le=Te[0],Ye=Te[1],qe=Object(a.useState)(""),Ae=Object(j.a)(qe,2),Pe=Ae[0],Ze=Ae[1],Be=Object(a.useState)([]),Ge=Object(j.a)(Be,2),Je=Ge[0],He=Ge[1],Qe=Object(a.useState)(""),Re=Object(j.a)(Qe,2),Ue=Re[0],De=Re[1],Ve=Object(a.useState)(!1),Me=Object(j.a)(Ve,2),$e=Me[0],Ke=Me[1],We=function(){var e=Object(o.a)(l.a.mark((function e(){var c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.line_items.length){e.next=12;break}return e.prev=1,e.next=4,h.checkout.generateToken(t.id,{type:"cart"});case 4:c=e.sent,i(c),g(!1),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log("Error occured while generating checkout token",e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}(),Xe=function(){var e=Object(o.a)(l.a.mark((function e(t){var c,a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.services.localeListShippingCountries(t);case 3:c=e.sent,a=c.countries,n=[],Object.entries(a).map((function(e){return n.push({countryCode:e[0],country:e[1]})})),Se(n),ze(n[0].countryCode),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log("Error occured while fetching shipping countries",e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}(),et=function(){var e=Object(o.a)(l.a.mark((function e(t){var c,a,n,r,s,i,o,d;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.services.localeListSubdivisions(t);case 3:for(c=e.sent,a=c.subdivisions,n=[],r=0,s=Object.entries(a);r<s.length;r++)i=Object(j.a)(s[r],2),o=i[0],d=i[1],n.push({code:o,division:d});Ye(n),Ze(n[0].code),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log("Error occured while fetching subdivisions",e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}(),tt=function(){var e=Object(o.a)(l.a.mark((function e(t,c){var a,n,r,s=arguments;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=s.length>2&&void 0!==s[2]?s[2]:null,e.prev=1,e.next=4,h.checkout.getShippingOptions(t,{country:c,region:a});case 4:n=e.sent,r=n[0]||null,He(n),De(r),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.log("Error occured while fetching shipping options",e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t,c){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){We()}),[]),Object(a.useEffect)((function(){s.id&&Xe(s.id)}),[s]),Object(a.useEffect)((function(){Ee&&et(Ee)}),[Ee]),Object(a.useEffect)((function(){Ee&&tt(s.id,Ee,Pe)}),[Pe]);return O?Object(v.jsx)(k,{}):Object(v.jsxs)(m.a,{fluid:"md",children:[Object(v.jsx)(H,{cart:t}),Object(v.jsxs)(Q.a,{className:"mb-5",variant:"danger",children:[Object(v.jsx)(Q.a.Heading,{children:"Hi! This form is still under construction!"}),Object(v.jsx)("p",{children:"Type real e-mail if you want to receive a fake confirmation at your e-mail. Otherwise, submit you order and let's hope that Joe will enjoy the goods you've chosen."}),Object(v.jsx)("hr",{}),Object(v.jsx)("p",{className:"mb-0",children:"If you want an error component to be rendered, mess up with it (for instance, change country to US and remove last digit from ZIP Code)"})]}),Object(v.jsx)("h1",{className:"mb-5",children:"Shipping & Payment"}),Object(v.jsx)(R.a,{children:Object(v.jsxs)(x.a,{sm:1,md:2,children:[Object(v.jsx)(U,{value:S,id:"firstName",placeholder:"Your first name",onChange:function(e){return _(e.target.value)},label:"First name",type:"text"}),Object(v.jsx)(U,{value:z,id:"lastName",placeholder:"Your last name",onChange:function(e){return I(e.target.value)},label:"Last name",type:"text"}),Object(v.jsx)(U,{value:Y,id:"email",placeholder:"Your email",onChange:function(e){return q(e.target.value)},label:"Email",type:"email"}),Object(v.jsx)(U,{value:Z,id:"shippingName",placeholder:"Your shipping name",onChange:function(e){return B(e.target.value)},label:"Shipping name",type:"text"}),Object(v.jsx)(U,{value:V,id:"shippingStreet",placeholder:"Your shipping street",onChange:function(e){return M(e.target.value)},label:"Shipping street",type:"text"}),Object(v.jsx)(U,{value:W,id:"shippingCity",placeholder:"Your shipping city",onChange:function(e){return X(e.target.value)},label:"Shipping city",type:"text"}),Object(v.jsx)(U,{value:ce,id:"shippingZipCode",placeholder:"Your shipping ZIP code",onChange:function(e){return ae(e.target.value)},label:"Shipping ZIP code",type:"text"}),Object(v.jsx)(U,{value:ye,id:"billingZipCode",placeholder:"Billing ZIP code",onChange:function(e){return Ne(e.target.value)},label:"Billing ZIP code",type:"text"}),Object(v.jsx)(p.a,{children:Object(v.jsxs)(R.a.Group,{className:"mb-3",children:[Object(v.jsx)(R.a.Label,{htmlFor:"countries",children:"Country"}),Object(v.jsx)(R.a.Select,{id:"countries","aria-label":"Selection of shipping countries",onChange:function(e){return ze(e.target.value)},value:Ee,children:ke.map((function(e,t){return Object(v.jsx)("option",{value:e.countryCode,children:e.country},t)}))})]})}),Object(v.jsx)(p.a,{children:Object(v.jsxs)(R.a.Group,{className:"mb-3",children:[Object(v.jsx)(R.a.Label,{htmlFor:"subdivisions",children:"Subdivisions"}),Object(v.jsx)(R.a.Select,{id:"subdivisions","aria-label":"Selection of shipping subdivisions",onChange:function(e){return Ze(e.target.value)},value:Pe,children:Le.map((function(e,t){return Object(v.jsx)("option",{value:e.code,children:e.division},t)}))})]})}),Object(v.jsx)(p.a,{children:Object(v.jsxs)(R.a.Group,{className:"mb-3",children:[Object(v.jsx)(R.a.Label,{htmlFor:"options",children:"Options"}),Object(v.jsx)(R.a.Select,{id:"options","aria-label":"Selection of shipping options",value:Ue.id,children:Je.map((function(e,t){return Object(v.jsx)("option",{value:e.id,children:"".concat(e.description," - ").concat(e.price.formatted_with_symbol)},t)}))})]})}),Object(v.jsx)(p.a,{md:12,children:Object(v.jsx)("hr",{})}),Object(v.jsx)(U,{value:se,id:"cardNum",placeholder:"Your card number",onChange:function(e){return ie(e.target.value)},label:"Card Number",type:"text"}),Object(v.jsx)(U,{value:je,id:"expMonth",placeholder:"Expiration month",onChange:function(e){return de(e.target.value)},label:"Card's expiration month",type:"number"}),Object(v.jsx)(U,{value:he,id:"expYear",placeholder:"Expiration year",onChange:function(e){return me(e.target.value)},label:"Card's expiration year",type:"number"}),Object(v.jsx)(U,{value:Oe,id:"ccv",placeholder:"CCV",onChange:function(e){return fe(e.target.value)},label:"CCV",type:"number"}),Object(v.jsx)(p.a,{className:"d-flex justify-content-center align-items-center",children:Object(v.jsx)(f.a,{className:"w-100 mt-5",variant:"danger",type:"submit",size:"lg",onClick:function(e){return function(e){e.preventDefault(),Ke(!0);var a,n={line_items:(a=t.line_items,a.reduce((function(e,t){var c,a=e,n=null;return(null===(c=t.selected_options)||void 0===c?void 0:c.length)&&(n=Object(G.a)({},t.selected_options[0].group_id,t.selected_options[0].option_id)),a[t.id]={quantity:t.quantity,variants:n},a}),{})),customer:{firstname:S,lastname:z,email:Y},shipping:{name:Z,street:V,town_city:W,county_state:Pe,postal_zip_code:ce,country:Ee},fulfillment:{shipping_method:Ue.id},payment:{gateway:"test_gateway",card:{number:se,expiry_month:je,expiry_year:he,cvc:Oe,postal_zip_code:ye}}};c(s.id,n).then((function(){Ke(!1),y.push("/confirmation")})).catch((function(e){Ke(!1),y.push("/error")}))}(e)},children:$e?Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(w.a,{animation:"border",role:"status"})," ",Object(v.jsx)("span",{children:"Loading..."})]}):"Confirm your order"})})]})})]})},V=c(135),M=c(130),$=function(e){var t=e.slide;return Object(v.jsxs)(x.a,{className:"d-flex justify-content-center",children:[Object(v.jsxs)(p.a,{md:5,className:"d-flex py-5 justify-content-center align-items-center gap-5 flex-column",children:[Object(v.jsxs)("div",{children:[Object(v.jsxs)("h1",{className:"display-5 text-dark",children:[t.name,Object(v.jsx)(F.a,{bg:"danger",className:"ms-3",children:"New"})]}),Object(v.jsx)("p",{className:"text-muted h4 mt-3",children:t.description.replace(/<\/?p>/g,"")})]}),Object(v.jsxs)("div",{className:"d-flex  align-items-center gap-3",children:[Object(v.jsx)("h3",{children:Object(v.jsx)(F.a,{className:"bg-secondary font-weight-bold",children:Object(v.jsx)("s",{children:"$".concat(3*t.price.raw)})})}),Object(v.jsx)("h1",{className:"display-3",children:Object(v.jsx)(F.a,{className:"bg-danger",children:t.price.formatted_with_symbol})})]})]}),Object(v.jsxs)(p.a,{md:4,className:"d-flex align-items-center justify-content-center justify-content-md-start position-relative",children:[Object(v.jsxs)(F.a,{className:"bg-danger px-3 shadow position-absolute d-none d-md-block",style:{top:"15%",right:"20%",transform:"rotate(45deg)"},children:["SALE! ",Object(v.jsx)(M.a,{className:"ms-3",size:20})]}),Object(v.jsx)("img",{className:"img-fluid img-thumbnail shadow-lg h-75",src:t.media.source,alt:t.name})]})]})},K=function(e){var t=e.products,c=[t[0],t[3],t[9]];return Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)(m.a,{className:"mt-5",children:[Object(v.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(v.jsx)("h1",{className:"mx-auto mx-md-0",children:Object(v.jsxs)(F.a,{className:"bg-danger px-5 py-3 shadow",children:["SALE! ",Object(v.jsx)(M.a,{className:"ms-3",size:40})]})}),Object(v.jsxs)("div",{className:"flex-column align-items-end d-none d-md-flex",children:[Object(v.jsx)("p",{className:"text-muted h5 mb-0",children:"Check out"}),Object(v.jsx)("h1",{className:"display-5",children:"Our best products"})]})]}),Object(v.jsxs)(V.a,{variant:"dark",className:"w-100 py-3",children:[Object(v.jsx)(V.a.Item,{interval:3e3,children:Object(v.jsx)($,{slide:c[0]})}),Object(v.jsx)(V.a.Item,{interval:3e3,children:Object(v.jsx)($,{slide:c[1]})}),Object(v.jsx)(V.a.Item,{interval:3e3,children:Object(v.jsx)($,{slide:c[2]})})]})]})})},W=c(131),X=function(e){var t=e.order;return Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)(m.a,{fluid:"md",children:[Object(v.jsx)("h1",{className:"display-5 mb-5",children:"Thank you for your purchase,\n         ".concat(t.customer.firstname," ").concat(t.customer.lastname)}),Object(v.jsx)("h3",{children:"Order ref: ".concat(t.customer_reference)}),Object(v.jsx)("p",{className:"lead",children:"A confirmation email has been sent to ".concat(t.customer.email)}),Object(v.jsxs)(d.b,{to:"/",className:"text-danger",children:[Object(v.jsx)(W.a,{className:"me-2",size:25})," Go back to home"]})]})})},ee=c(132),te=function(e){var t=e.error;return console.log(t),Object(v.jsx)(v.Fragment,{children:Object(v.jsx)(m.a,{fluid:"md",children:Object(v.jsxs)(x.a,{children:[Object(v.jsx)(p.a,{md:4,children:Object(v.jsx)(ee.a,{className:"text-danger ms-5",size:150})}),Object(v.jsxs)(p.a,{children:[Object(v.jsx)("h1",{className:"display-5",children:"Oops, something went wrong!"}),Object(v.jsx)("p",{className:"lead text-danger",children:"Error: ".concat(t.data.error.message)}),Object(v.jsx)(d.b,{to:"/",className:"text-danger",children:"Try again later"})]})]})})})};var ce=function(){var e=Object(a.useState)([]),t=Object(j.a)(e,2),c=t[0],n=t[1],r=Object(a.useState)(0),s=Object(j.a)(r,2),i=s[0],b=s[1],m=Object(a.useState)([]),x=Object(j.a)(m,2),p=x[0],O=x[1],f=Object(a.useState)(!0),g=Object(j.a)(f,2),y=g[0],N=g[1],w=Object(a.useState)({merchant:{},products:[],cart:{},isCartVisible:!1,order:{}}),S=Object(j.a)(w,2),_=S[0],F=S[1],E=Object(a.useState)(""),I=Object(j.a)(E,2),T=I[0],L=I[1],Y=function(){var e=Object(o.a)(l.a.mark((function e(){var t,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.products.list();case 3:t=e.sent,c=t.data,n(c),N(!1),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log("Error occured while fetching products",e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),q=function(){var e=Object(o.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.cart.retrieve();case 3:t=e.sent,O(t),b(t.total_items),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("Error occured while fetching cart",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){Y(),q()}),[]);var A=function(){var e=Object(o.a)(l.a.mark((function e(t,c){var a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.cart.add(t,c);case 3:a=e.sent,n=a.cart,O(n),b(n.total_items),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log("Error occured while adding to cart",e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,c){return e.apply(this,arguments)}}(),P=function(){var e=Object(o.a)(l.a.mark((function e(t,c){var a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.cart.update(t,{quantity:c});case 2:a=e.sent,n=a.cart,O(n),b(n.total_items);case 6:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}(),Z=function(){var e=Object(o.a)(l.a.mark((function e(t){var c,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.cart.remove(t);case 2:c=e.sent,a=c.cart,O(a),b(a.total_items);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),G=function(){var e=Object(o.a)(l.a.mark((function e(){var t,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.cart.empty();case 2:t=e.sent,c=t.cart,O(c),b(c.total_items);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),J=function(){var e=Object(o.a)(l.a.mark((function e(t,c){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.checkout.capture(t,c);case 3:return a=e.sent,F(a),H(),e.abrupt("return",!0);case 9:throw e.prev=9,e.t0=e.catch(0),L(e.t0),e.t0;case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,c){return e.apply(this,arguments)}}(),H=function(){var e=Object(o.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.cart.refresh();case 3:t=e.sent,O(t),b(t.total_items),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("Error occured while refreshing cart",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)(d.a,{children:[Object(v.jsx)(z,{totalItems:i}),Object(v.jsx)("div",{style:{marginTop:"130px"}}),Object(v.jsxs)(u.c,{children:[Object(v.jsxs)(u.a,{exact:!0,path:"/",children:[y?Object(v.jsx)(k,{}):"",c.length&&Object(v.jsx)(K,{products:c})]}),Object(v.jsxs)(u.a,{exact:!0,path:"/shop",children:[y?Object(v.jsx)(k,{}):"",Object(v.jsx)(C,{products:c,onAddToCart:A})]}),Object(v.jsx)(u.a,{exact:!0,path:"/cart",children:p&&Object(v.jsx)(B,{cart:p,onUpdateCartQty:P,onRemoveFromCart:Z,onEmptyCart:G})}),Object(v.jsx)(u.a,{exact:!0,path:"/checkout",children:p&&Object(v.jsx)(D,{cart:p,onCaptureCheckout:J})}),Object(v.jsx)(u.a,{exact:!0,path:"/confirmation",children:Object(v.jsx)(X,{order:_})}),Object(v.jsx)(u.a,{exact:!0,path:"/error",children:Object(v.jsx)(te,{error:T})})]}),Object(v.jsx)("div",{style:{height:"100px"}})]})})};c(113);s.a.render(Object(v.jsx)(n.a.StrictMode,{children:Object(v.jsx)(ce,{})}),document.getElementById("root"))}},[[114,1,2]]]);
//# sourceMappingURL=main.eddcebbe.chunk.js.map