import{r,a as T}from"./react-eFnZCgGh.js";import"./react-dom-kVnsOIvz.js";import{R as w}from"./react-router-qLT2w2Dc.js";import{c as p}from"./@remix-run-XGnKtW4w.js";/**
 * React Router DOM v6.22.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const F="6";try{window.__reactRouterVersion=F}catch{}const U="startTransition",u=T[U];function _(t){let{basename:R,children:f,future:o,window:h}=t,s=r.useRef();s.current==null&&(s.current=p({window:h,v5Compat:!0}));let e=s.current,[n,i]=r.useState({action:e.action,location:e.location}),{v7_startTransition:a}=o||{},c=r.useCallback(l=>{a&&u?u(()=>i(l)):i(l)},[i,a]);return r.useLayoutEffect(()=>e.listen(c),[e,c]),r.createElement(w,{basename:R,children:f,location:n.location,navigationType:n.action,navigator:e,future:o})}var m;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(m||(m={}));var S;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(S||(S={}));export{_ as B};
