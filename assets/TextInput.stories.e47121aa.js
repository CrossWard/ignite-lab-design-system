var u=Object.defineProperty;var s=(e,i)=>u(e,"name",{value:i,configurable:!0});import{a as r,F as t,j as n}from"./jsx-runtime.f91e4a78.js";import{r as k}from"./index.f7e79a81.js";import{I as p,r as h}from"./IconBase.esm.1c3051eb.js";import"./iframe.0bb7d972.js";var o=new Map;o.set("bold",function(e){return r(t,{children:[n("polyline",{points:"224 56 128 144 32 56",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),n("path",{d:"M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56a0,0,0,0,1,0,0Z",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),n("line",{x1:"110.5",y1:"128",x2:"34.5",y2:"197.7",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),n("line",{x1:"221.5",y1:"197.7",x2:"145.5",y2:"128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"})]})});o.set("duotone",function(e){return r(t,{children:[n("polygon",{points:"224 56 128 144 32 56 224 56",opacity:"0.2"}),n("polyline",{points:"224 56 128 144 32 56",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),n("path",{d:"M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),n("line",{x1:"110.5",y1:"128",x2:"34.5",y2:"197.7",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),n("line",{x1:"221.5",y1:"197.7",x2:"145.5",y2:"128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"})]})});o.set("fill",function(){return n(t,{children:n("path",{d:"M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM98.7,128,40,181.8V74.2Zm11.8,10.9,12.1,11a8,8,0,0,0,10.8,0l12.1-11L203.4,192H52.6ZM157.3,128,216,74.2V181.8Z"})})});o.set("light",function(e){return r(t,{children:[n("polyline",{points:"224 56 128 144 32 56",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),n("path",{d:"M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),n("line",{x1:"110.5",y1:"128",x2:"34.5",y2:"197.7",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),n("line",{x1:"221.5",y1:"197.7",x2:"145.5",y2:"128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"})]})});o.set("thin",function(e){return r(t,{children:[n("polyline",{points:"224 56 128 144 32 56",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),n("path",{d:"M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),n("line",{x1:"110.5",y1:"128",x2:"34.5",y2:"197.7",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),n("line",{x1:"221.5",y1:"197.7",x2:"145.5",y2:"128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"})]})});o.set("regular",function(e){return r(t,{children:[n("polyline",{points:"224 56 128 144 32 56",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),n("path",{d:"M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),n("line",{x1:"110.5",y1:"128",x2:"34.5",y2:"197.7",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),n("line",{x1:"221.5",y1:"197.7",x2:"145.5",y2:"128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"})]})});var c=s(function(i,l){return h(i,l,o)},"renderPath"),a=k.exports.forwardRef(function(e,i){return n(p,{...Object.assign({ref:i},e,{renderPath:c})})});a.displayName="Envelope";const f=a;function L(e){return n("div",{className:"flex items-center gap-3 h-12 py-4 px-3 rounded bg-gray-800 focus-within:ring-2 ring-cyan-300",children:e.children})}s(L,"TextInputRoot");function y(e){return n("slot",{className:"w-6 h-6 text-gray-400",children:e.children})}s(y,"TextInputIcon");function x(e){return n("input",{className:"bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400 w-full  outline-none",...e})}s(x,"TextInputInput");const d={Root:L,Input:x,Icon:y},V={title:"Components/TextInput",component:d.Root,args:{children:r(t,{children:[n(d.Icon,{children:n(f,{})}),n(d.Input,{placeholder:"Type your e-mail address"})]})},argTypes:{children:{table:{disable:!0}}}},H={},M={args:{children:n(d.Input,{placeholder:"Type your e-mail address"})}},T=["Default","WithoutIcon"];export{H as Default,M as WithoutIcon,T as __namedExportsOrder,V as default};
//# sourceMappingURL=TextInput.stories.e47121aa.js.map
