import{_ as g,L as l,M as i,g as p,h as c,i as b,G as f,ab as y,I as m,o as s,s as k,w as v,c as t,n as r,r as o,k as u,a as h,m as $,ae as w}from"./entry.961d0361.js";const C={base:"overflow-hidden",background:"bg-white dark:bg-gray-900",divide:"divide-y divide-gray-200 dark:divide-gray-800",ring:"ring-1 ring-gray-200 dark:ring-gray-800",rounded:"rounded-lg",shadow:"shadow",body:{base:"",background:"",padding:"px-4 py-5 sm:p-6"},header:{base:"",background:"",padding:"px-4 py-5 sm:px-6"},footer:{base:"",background:"",padding:"px-4 py-4 sm:px-6"}},B=l(i.ui.strategy,i.ui.card,C),S=p({inheritAttrs:!1,props:{as:{type:String,default:"div"},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(a){const{ui:e,attrs:d}=c("card",b(a,"ui"),B),n=f(()=>y(m(e.value.base,e.value.rounded,e.value.divide,e.value.ring,e.value.shadow,e.value.background),a.class));return{ui:e,attrs:d,cardClass:n}}});function j(a,e,d,n,A,I){return s(),k(w(a.$attrs.onSubmit?"form":a.as),$({class:a.cardClass},a.attrs),{default:v(()=>[a.$slots.header?(s(),t("div",{key:0,class:r([a.ui.header.base,a.ui.header.padding,a.ui.header.background])},[o(a.$slots,"header")],2)):u("",!0),h("div",{class:r([a.ui.body.base,a.ui.body.padding,a.ui.body.background])},[o(a.$slots,"default")],2),a.$slots.footer?(s(),t("div",{key:1,class:r([a.ui.footer.base,a.ui.footer.padding,a.ui.footer.background])},[o(a.$slots,"footer")],2)):u("",!0)]),_:3},16,["class"])}const N=g(S,[["render",j]]);export{N as _};
