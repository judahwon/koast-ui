import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{c as b}from"./createLucideIcon-DamU_L0P.js";import"./index-BYq_8MfK.js";import"./_commonjsHelpers-Cpj98o6Y.js";const E=(n,r,a,f,x,D,j,o)=>{const N="font-semibold transition-all duration-200 rounded focus:outline-none inline-flex items-center justify-center",S={xs:"text-xs px-2 py-1 gap-1",sm:"text-sm px-3 py-1.5 gap-1.5",md:"text-base px-4 py-2 gap-2",lg:"text-lg px-5 py-2.5 gap-2",xl:"text-xl px-6 py-3 gap-2.5"},h=I(n,r),y=f||x?"opacity-50 cursor-not-allowed pointer-events-none":"",u=x?"relative":"",w=n==="contained"&&j?"shadow-lg":"",_=D?"w-full":"";return`${N} ${S[a]} ${h} ${y} ${u} ${w} ${_} ${o}`},I=(n,r)=>{const a={primary:{text:"text-blue-600 hover:bg-blue-50 active:bg-blue-100",contained:"bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800",outlined:"text-blue-600 border border-blue-600 hover:bg-blue-50 active:bg-blue-100"},secondary:{text:"text-purple-600 hover:bg-purple-50 active:bg-purple-100",contained:"bg-purple-600 text-white hover:bg-purple-700 active:bg-purple-800",outlined:"text-purple-600 border border-purple-600 hover:bg-purple-50 active:bg-purple-100"},success:{text:"text-green-600 hover:bg-green-50 active:bg-green-100",contained:"bg-green-600 text-white hover:bg-green-700 active:bg-green-800",outlined:"text-green-600 border border-green-600 hover:bg-green-50 active:bg-green-100"},error:{text:"text-red-600 hover:bg-red-50 active:bg-red-100",contained:"bg-red-600 text-white hover:bg-red-700 active:bg-red-800",outlined:"text-red-600 border border-red-600 hover:bg-red-50 active:bg-red-100"},warning:{text:"text-amber-600 hover:bg-amber-50 active:bg-amber-100",contained:"bg-amber-600 text-white hover:bg-amber-700 active:bg-amber-800",outlined:"text-amber-600 border border-amber-600 hover:bg-amber-50 active:bg-amber-100"},info:{text:"text-sky-600 hover:bg-sky-50 active:bg-sky-100",contained:"bg-sky-600 text-white hover:bg-sky-700 active:bg-sky-800",outlined:"text-sky-600 border border-sky-600 hover:bg-sky-50 active:bg-sky-100"},gray:{text:"text-gray-600 hover:bg-gray-50 active:bg-gray-100",contained:"bg-gray-600 text-white hover:bg-gray-700 active:bg-gray-800",outlined:"text-gray-600 border border-gray-600 hover:bg-gray-50 active:bg-gray-100"}};return a[r]?a[r][n]:(console.warn(`color={'${r}'} 는 지원하지 않는 색상입니다. primary, secondary, success, error, warning, info, gray 중에 하나를 사용해주세요. (혹은 커스텀 className을 사용해주세요.)`),a.primary[n])},k=n=>n?e.jsx("span",{className:"absolute inset-0 flex items-center justify-center",children:e.jsxs("svg",{className:"size-5 animate-spin",viewBox:"0 0 24 24",children:[e.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4",fill:"transparent"}),e.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]})}):null;try{E.displayName="getButtonStyles",E.__docgenInfo={description:"기본 버튼 스타일을 정의합니다.",displayName:"getButtonStyles",props:{}}}catch{}try{I.displayName="getColorStyles",I.__docgenInfo={description:"버튼 색상 스타일을 가져옵니다.",displayName:"getColorStyles",props:{}}}catch{}try{k.displayName="getLoadingIndicator",k.__docgenInfo={description:"로딩 인디케이터 컴포넌트를 반환합니다.",displayName:"getLoadingIndicator",props:{valueOf:{defaultValue:null,description:"Returns the primitive value of the specified object.",name:"valueOf",required:!1,type:{name:"() => boolean"}}}}}catch{}const t=n=>{const{variant:r="outlined",color:a="primary",size:f="md",type:x="button",className:D="",onClick:j,disabled:o=!1,children:N,customStyle:S,startIcon:h,endIcon:y,loading:u=!1,fullWidth:w=!1,shadow:_=!1,href:A}=n,We=E(r,a,f,o,u,w,_,D),Me=k(u),V={className:We,style:S,onClick:j,disabled:o||u},q=e.jsxs(e.Fragment,{children:[h&&e.jsx("span",{className:"inline-flex",children:h}),e.jsx("span",{children:N}),y&&e.jsx("span",{className:"inline-flex",children:y}),Me]});return A&&!o?e.jsx("a",{href:A,...V,children:q}):e.jsx("button",{...V,type:x,children:q})};try{t.displayName="Button",t.__docgenInfo={description:"koast/ui 버튼 컴포넌트입니다.",displayName:"Button",props:{variant:{defaultValue:{value:"'text'"},description:"버튼의 변형을 지정합니다.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"contained"'},{value:'"outlined"'}]}},color:{defaultValue:{value:"'primary'"},description:"버튼의 색상을 지정합니다.",name:"color",required:!1,type:{name:"string"}},size:{defaultValue:{value:"'md'"},description:"버튼의 크기를 지정합니다.",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'}]}},type:{defaultValue:{value:"'button'"},description:"버튼의 HTML type 속성을 지정합니다.",name:"type",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"submit"'},{value:'"reset"'}]}},className:{defaultValue:null,description:"버튼에 추가할 CSS 클래스명입니다.",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"버튼의 비활성화 상태를 지정합니다.",name:"disabled",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"버튼 내부에 표시될 콘텐츠입니다.",name:"children",required:!1,type:{name:"React.ReactNode"}},onClick:{defaultValue:null,description:"버튼 클릭 시 실행될 함수입니다.",name:"onClick",required:!1,type:{name:"(event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void"}},customStyle:{defaultValue:null,description:"인라인 스타일을 직접 적용할 수 있는 객체입니다.",name:"customStyle",required:!1,type:{name:"React.CSSProperties"}},startIcon:{defaultValue:null,description:"버튼 왼쪽에 표시될 아이콘입니다.",name:"startIcon",required:!1,type:{name:"React.ReactNode"}},endIcon:{defaultValue:null,description:"버튼 오른쪽에 표시될 아이콘입니다.",name:"endIcon",required:!1,type:{name:"React.ReactNode"}},loading:{defaultValue:{value:"false"},description:"로딩 상태를 표시합니다.",name:"loading",required:!1,type:{name:"boolean"}},fullWidth:{defaultValue:{value:"false"},description:"버튼의 너비를 부모 요소의 100%로 설정합니다.",name:"fullWidth",required:!1,type:{name:"boolean"}},shadow:{defaultValue:{value:"false"},description:"버튼에 그림자 효과를 추가합니다. (contained 변형에만 적용)",name:"shadow",required:!1,type:{name:"boolean"}},href:{defaultValue:null,description:"링크 URL을 지정합니다. 이 속성이 있으면 버튼은 <a> 태그로 렌더링됩니다.",name:"href",required:!1,type:{name:"string"}}}}}catch{}/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fe=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],z=b("ChevronRight",Fe);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $e=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]],Pe=b("Download",$e);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Te=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],Ge=b("Plus",Te);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const He=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],Le=b("Send",He),Xe={title:"Components/Button",component:t,parameters:{layout:"centered",docs:{description:{component:`Button 컴포넌트는 사용자 상호작용을 위한 기본적인 UI 요소입니다.
다양한 크기, 색상, 변형을 지원하며 아이콘도 함께 사용할 수 있습니다.`}}},tags:["autodocs"],argTypes:{variant:{control:"select",options:["text","contained","outlined"],description:"버튼의 변형을 지정합니다.",defaultValue:"outlined"},color:{control:"select",options:["primary","secondary","success","error","warning","info"],description:"버튼의 색상을 지정합니다.",defaultValue:"primary"},size:{control:"radio",options:["xs","sm","md","lg","xl"],description:"버튼의 크기를 지정합니다.",defaultValue:"md"},type:{control:"radio",options:["button","submit","reset"],description:"버튼의 HTML type 속성을 지정합니다.",defaultValue:"button"},disabled:{control:"boolean",description:"버튼의 비활성화 상태를 지정합니다.",defaultValue:!1},loading:{control:"boolean",description:"로딩 상태를 표시합니다.",defaultValue:!1},fullWidth:{control:"boolean",description:"버튼의 너비를 부모 요소의 100%로 설정합니다.",defaultValue:!1},shadow:{control:"boolean",description:"버튼에 그림자 효과를 추가합니다. (contained 변형에만 적용)",defaultValue:!1}}};var Qe=Xe;const i={args:{children:"버튼",variant:"outlined",color:"primary",size:"md",type:"button"}},s={render:()=>e.jsxs("div",{className:"flex gap-4",children:[e.jsx(t,{variant:"outlined",children:"outlined"}),e.jsx(t,{variant:"contained",children:"contained"}),e.jsx(t,{variant:"text",children:"text"})]})},d={render:()=>e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsx(t,{variant:"contained",color:"primary",children:"Primary"}),e.jsx(t,{variant:"contained",color:"secondary",children:"Secondary"}),e.jsx(t,{variant:"contained",color:"success",children:"Success"}),e.jsx(t,{variant:"contained",color:"error",children:"Error"}),e.jsx(t,{variant:"contained",color:"warning",children:"Warning"}),e.jsx(t,{variant:"contained",color:"info",children:"Info"}),e.jsx(t,{variant:"contained",color:"gray",children:"Gray"})]})},l={render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(t,{size:"xs",children:"XS"}),e.jsx(t,{size:"sm",children:"SM"}),e.jsx(t,{size:"md",children:"MD"}),e.jsx(t,{size:"lg",children:"LG"}),e.jsx(t,{size:"xl",children:"XL"})]})},c={render:()=>e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsx(t,{variant:"contained",startIcon:e.jsx(Ge,{}),children:"추가하기"}),e.jsx(t,{variant:"outlined",endIcon:e.jsx(z,{}),children:"다음"}),e.jsx(t,{variant:"contained",startIcon:e.jsx(Le,{}),endIcon:e.jsx(z,{}),children:"전송하기"}),e.jsx(t,{variant:"contained",color:"gray",startIcon:e.jsx(Pe,{}),children:"다운로드"})]})},p={render:()=>e.jsxs("div",{className:"flex gap-4",children:[e.jsx(t,{variant:"outlined",disabled:!0,children:"outlined"}),e.jsx(t,{variant:"contained",disabled:!0,children:"contained"}),e.jsx(t,{variant:"text",disabled:!0,children:"text"})]})},C={render:()=>e.jsxs("div",{className:"flex gap-4",children:[e.jsx(t,{variant:"text",loading:!0,children:"로딩 중"}),e.jsx(t,{variant:"contained",loading:!0,children:"로딩 중"}),e.jsx(t,{variant:"outlined",loading:!0,children:"전송 중"}),e.jsx(t,{variant:"contained",loading:!0,startIcon:e.jsx(Le,{size:16}),children:"아이콘 포함"})]})},m={render:()=>e.jsxs("div",{className:"w-80",children:[e.jsx(t,{variant:"contained",fullWidth:!0,children:"전체 너비 버튼"}),e.jsx("div",{className:"h-4"}),e.jsx(t,{variant:"outlined",fullWidth:!0,children:"전체 너비 버튼"})]})},B={render:()=>e.jsxs("div",{className:"flex gap-4",children:[e.jsx(t,{variant:"contained",children:"그림자 없음"}),e.jsx(t,{variant:"contained",shadow:!0,children:"그림자 있음"})]})},g={render:()=>e.jsxs("div",{className:"flex gap-4",children:[e.jsx(t,{variant:"contained",customStyle:{color:"white",borderRadius:"4px",padding:"10px 20px"},className:"bg-green-500 hover:bg-green-700",children:"커스텀 스타일"}),e.jsx(t,{className:"border-none bg-gradient-to-r from-purple-500 to-pink-500 text-white transition-all duration-300 hover:from-purple-600 hover:to-pink-600",children:"Tailwind 클래스"})]})},v={render:()=>e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsx(t,{href:"https://github.com",children:"github"}),e.jsx(t,{href:"https://naver.com",variant:"contained",color:"primary",endIcon:e.jsx(z,{size:16}),children:"Naver로 이동"}),e.jsx(t,{href:"https://google.com",variant:"text",color:"info",children:"Google로 이동"})]})};var R,L,W,M,F;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    children: '버튼',
    variant: 'outlined',
    color: 'primary',
    size: 'md',
    type: 'button'
  }
}`,...(W=(L=i.parameters)==null?void 0:L.docs)==null?void 0:W.source},description:{story:"기본 버튼 예시입니다.",...(F=(M=i.parameters)==null?void 0:M.docs)==null?void 0:F.description}}};var $,P,T,G,H;s.parameters={...s.parameters,docs:{...($=s.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => <div className={'flex gap-4'}>
      <Button variant={'outlined'}>{'outlined'}</Button>
      <Button variant={'contained'}>{'contained'}</Button>
      <Button variant={'text'}>{'text'}</Button>
    </div>
}`,...(T=(P=s.parameters)==null?void 0:P.docs)==null?void 0:T.source},description:{story:"버튼 변형(variant) 예시입니다.",...(H=(G=s.parameters)==null?void 0:G.docs)==null?void 0:H.description}}};var X,O,U,J,K;d.parameters={...d.parameters,docs:{...(X=d.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => <div className={'flex flex-wrap gap-4'}>
      <Button variant={'contained'} color={'primary'}>{'Primary'}</Button>
      <Button variant={'contained'} color={'secondary'}>{'Secondary'}</Button>
      <Button variant={'contained'} color={'success'}>{'Success'}</Button>
      <Button variant={'contained'} color={'error'}>{'Error'}</Button>
      <Button variant={'contained'} color={'warning'}>{'Warning'}</Button>
      <Button variant={'contained'} color={'info'}>{'Info'}</Button>
      <Button variant={'contained'} color={'gray'}>{'Gray'}</Button>
    </div>
}`,...(U=(O=d.parameters)==null?void 0:O.docs)==null?void 0:U.source},description:{story:"버튼 색상(color) 예시입니다.",...(K=(J=d.parameters)==null?void 0:J.docs)==null?void 0:K.description}}};var Q,Y,Z,ee,te;l.parameters={...l.parameters,docs:{...(Q=l.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => <div className={'flex items-center gap-4'}>
      <Button size={'xs'}>{'XS'}</Button>
      <Button size={'sm'}>{'SM'}</Button>
      <Button size={'md'}>{'MD'}</Button>
      <Button size={'lg'}>{'LG'}</Button>
      <Button size={'xl'}>{'XL'}</Button>
    </div>
}`,...(Z=(Y=l.parameters)==null?void 0:Y.docs)==null?void 0:Z.source},description:{story:"버튼 크기(size) 예시입니다.",...(te=(ee=l.parameters)==null?void 0:ee.docs)==null?void 0:te.description}}};var ne,re,ae,oe,ue;c.parameters={...c.parameters,docs:{...(ne=c.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: () => <div className={'flex flex-wrap gap-4'}>
      <Button variant={'contained'} startIcon={<Plus />}>{'추가하기'}</Button>
      <Button variant={'outlined'} endIcon={<ChevronRight />}>{'다음'}</Button>
      <Button variant={'contained'} startIcon={<Send />} endIcon={<ChevronRight />}>{'전송하기'}</Button>
      <Button variant={'contained'} color={'gray'} startIcon={<Download />}>{'다운로드'}</Button>
    </div>
}`,...(ae=(re=c.parameters)==null?void 0:re.docs)==null?void 0:ae.source},description:{story:"아이콘이 있는 버튼 예시입니다.",...(ue=(oe=c.parameters)==null?void 0:oe.docs)==null?void 0:ue.description}}};var ie,se,de,le,ce;p.parameters={...p.parameters,docs:{...(ie=p.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  render: () => <div className={'flex gap-4'}>
      <Button variant={'outlined'} disabled>{'outlined'}</Button>
      <Button variant={'contained'} disabled>{'contained'}</Button>
      <Button variant={'text'} disabled>{'text'}</Button>
    </div>
}`,...(de=(se=p.parameters)==null?void 0:se.docs)==null?void 0:de.source},description:{story:"비활성화된 버튼 예시입니다.",...(ce=(le=p.parameters)==null?void 0:le.docs)==null?void 0:ce.description}}};var pe,Ce,me,Be,ge;C.parameters={...C.parameters,docs:{...(pe=C.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  render: () => <div className={'flex gap-4'}>
      <Button variant={'text'} loading>{'로딩 중'}</Button>
      <Button variant={'contained'} loading>{'로딩 중'}</Button>
      <Button variant={'outlined'} loading>{'전송 중'}</Button>
      <Button variant={'contained'} loading startIcon={<Send size={16} />}>{'아이콘 포함'}</Button>
    </div>
}`,...(me=(Ce=C.parameters)==null?void 0:Ce.docs)==null?void 0:me.source},description:{story:"로딩 상태의 버튼 예시입니다.",...(ge=(Be=C.parameters)==null?void 0:Be.docs)==null?void 0:ge.description}}};var ve,xe,he,ye,be;m.parameters={...m.parameters,docs:{...(ve=m.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  render: () => <div className={'w-80'}>
      <Button variant={'contained'} fullWidth>{'전체 너비 버튼'}</Button>
      <div className={'h-4'} />
      <Button variant={'outlined'} fullWidth>{'전체 너비 버튼'}</Button>
    </div>
}`,...(he=(xe=m.parameters)==null?void 0:xe.docs)==null?void 0:he.source},description:{story:"전체 너비(fullWidth) 버튼 예시입니다.",...(be=(ye=m.parameters)==null?void 0:ye.docs)==null?void 0:be.description}}};var fe,De,je,Ne,Se;B.parameters={...B.parameters,docs:{...(fe=B.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  render: () => <div className={'flex gap-4'}>
      <Button variant={'contained'}>{'그림자 없음'}</Button>
      <Button variant={'contained'} shadow>{'그림자 있음'}</Button>
    </div>
}`,...(je=(De=B.parameters)==null?void 0:De.docs)==null?void 0:je.source},description:{story:"그림자 효과가 있는 버튼 예시입니다.",...(Se=(Ne=B.parameters)==null?void 0:Ne.docs)==null?void 0:Se.description}}};var we,_e,Ee,Ie,ke;g.parameters={...g.parameters,docs:{...(we=g.parameters)==null?void 0:we.docs,source:{originalSource:`{
  render: () => <div className={'flex gap-4'}>
      <Button variant={'contained'} customStyle={{
      color: 'white',
      borderRadius: '4px',
      padding: '10px 20px'
    }} className={'bg-green-500 hover:bg-green-700'}>
        {'커스텀 스타일'}
      </Button>
      <Button className={'border-none bg-gradient-to-r from-purple-500 to-pink-500 text-white transition-all duration-300 hover:from-purple-600 hover:to-pink-600'}>
        {'Tailwind 클래스'}
      </Button>
    </div>
}`,...(Ee=(_e=g.parameters)==null?void 0:_e.docs)==null?void 0:Ee.source},description:{story:"커스텀 스타일이 적용된 버튼 예시입니다.",...(ke=(Ie=g.parameters)==null?void 0:Ie.docs)==null?void 0:ke.description}}};var ze,Ae,Ve,qe,Re;v.parameters={...v.parameters,docs:{...(ze=v.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  render: () => <div className={'flex flex-wrap gap-4'}>
      <Button href={'https://github.com'}>
        {'github'}
      </Button>
      <Button href={'https://naver.com'} variant={'contained'} color={'primary'} endIcon={<ChevronRight size={16} />}>
        {'Naver로 이동'}
      </Button>
      <Button href={'https://google.com'} variant={'text'} color={'info'}>
        {'Google로 이동'}
      </Button>
    </div>
}`,...(Ve=(Ae=v.parameters)==null?void 0:Ae.docs)==null?void 0:Ve.source},description:{story:"링크 버튼 예시입니다.",...(Re=(qe=v.parameters)==null?void 0:qe.docs)==null?void 0:Re.description}}};const Ye=["AsLink","Colors","CustomStyled","Default","Disabled","FullWidth","Loading","Shadow","Sizes","Variants","WithIcons"];export{v as AsLink,d as Colors,g as CustomStyled,i as Default,p as Disabled,m as FullWidth,C as Loading,B as Shadow,l as Sizes,s as Variants,c as WithIcons,Ye as __namedExportsOrder,Qe as default};
