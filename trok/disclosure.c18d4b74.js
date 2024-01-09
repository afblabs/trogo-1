import{g,z as c,af as O,ag as P,ah as d,ai as I,aj as K,G as D,ak as y,al as m,$ as C,am as w,an as M,ao as H,ap as L,aq as h,a6 as E,ar as v}from"./entry.961d0361.js";var U=(l=>(l[l.Open=0]="Open",l[l.Closed=1]="Closed",l))(U||{});let B=Symbol("DisclosureContext");function k(l){let o=E(B,null);if(o===null){let r=new Error(`<${l} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,k),r}return o}let $=Symbol("DisclosurePanelContext");function q(){return E($,null)}let G=g({name:"Disclosure",props:{as:{type:[Object,String],default:"template"},defaultOpen:{type:[Boolean],default:!1}},setup(l,{slots:o,attrs:r}){let n=c(l.defaultOpen?0:1),e=c(null),i=c(null),s={buttonId:c(`headlessui-disclosure-button-${O()}`),panelId:c(`headlessui-disclosure-panel-${O()}`),disclosureState:n,panel:e,button:i,toggleDisclosure(){n.value=P(n.value,{0:1,1:0})},closeDisclosure(){n.value!==1&&(n.value=1)},close(t){s.closeDisclosure();let u=(()=>t?t instanceof HTMLElement?t:t.value instanceof HTMLElement?d(t):d(s.button):d(s.button))();u==null||u.focus()}};return I(B,s),K(D(()=>P(n.value,{0:y.Open,1:y.Closed}))),()=>{let{defaultOpen:t,...u}=l,p={open:n.value===0,close:s.close};return m({theirProps:u,ourProps:{},slot:p,slots:o,attrs:r,name:"Disclosure"})}}}),N=g({name:"DisclosureButton",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1},id:{type:String,default:null}},setup(l,{attrs:o,slots:r,expose:n}){let e=k("DisclosureButton"),i=q(),s=D(()=>i===null?!1:i.value===e.panelId.value);C(()=>{s.value||l.id!==null&&(e.buttonId.value=l.id)}),w(()=>{s.value||(e.buttonId.value=null)});let t=c(null);n({el:t,$el:t}),s.value||M(()=>{e.button.value=t.value});let u=H(D(()=>({as:l.as,type:o.type})),t);function p(){var a;l.disabled||(s.value?(e.toggleDisclosure(),(a=d(e.button))==null||a.focus()):e.toggleDisclosure())}function f(a){var b;if(!l.disabled)if(s.value)switch(a.key){case v.Space:case v.Enter:a.preventDefault(),a.stopPropagation(),e.toggleDisclosure(),(b=d(e.button))==null||b.focus();break}else switch(a.key){case v.Space:case v.Enter:a.preventDefault(),a.stopPropagation(),e.toggleDisclosure();break}}function S(a){switch(a.key){case v.Space:a.preventDefault();break}}return()=>{var a;let b={open:e.disclosureState.value===0},{id:x,...j}=l,T=s.value?{ref:t,type:u.value,onClick:p,onKeydown:f}:{id:(a=e.buttonId.value)!=null?a:x,ref:t,type:u.value,"aria-expanded":e.disclosureState.value===0,"aria-controls":e.disclosureState.value===0||d(e.panel)?e.panelId.value:void 0,disabled:l.disabled?!0:void 0,onClick:p,onKeydown:f,onKeyup:S};return m({ourProps:T,theirProps:j,slot:b,attrs:o,slots:r,name:"DisclosureButton"})}}}),R=g({name:"DisclosurePanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:null}},setup(l,{attrs:o,slots:r,expose:n}){let e=k("DisclosurePanel");C(()=>{l.id!==null&&(e.panelId.value=l.id)}),w(()=>{e.panelId.value=null}),n({el:e.panel,$el:e.panel}),I($,e.panelId);let i=L(),s=D(()=>i!==null?(i.value&y.Open)===y.Open:e.disclosureState.value===0);return()=>{var t;let u={open:e.disclosureState.value===0,close:e.close},{id:p,...f}=l,S={id:(t=e.panelId.value)!=null?t:p,ref:e.panel};return m({ourProps:S,theirProps:f,slot:u,attrs:o,slots:r,features:h.RenderStrategy|h.Static,visible:s.value,name:"DisclosurePanel"})}}});export{G as V,N as X,R as Y};
