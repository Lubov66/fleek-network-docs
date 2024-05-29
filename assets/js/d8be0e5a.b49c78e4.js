"use strict";(self.webpackChunkdocta=self.webpackChunkdocta||[]).push([[1706],{4751:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>u,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var t=i(5893),r=i(1151),s=i(3872);const l={title:"Error linking with cc",slug:"error-linking-with-cc-failed-exist-status-1",hide_title:!0,tags:["references","help","update","upgrade","fix"]},a=void 0,c={id:"Lightning CLI/error-linking-with-cc-failed",title:"Error linking with cc",description:"Check if CPU is supported",source:"@site/references/Lightning CLI/error-linking-with-cc-failed.md",sourceDirName:"Lightning CLI",slug:"/Lightning CLI/error-linking-with-cc-failed-exist-status-1",permalink:"/references/Lightning CLI/error-linking-with-cc-failed-exist-status-1",draft:!1,unlisted:!1,editUrl:"https://github.com/fleek-network/fleek-network-docs/edit/main/references/Lightning CLI/error-linking-with-cc-failed.md",tags:[{label:"references",permalink:"/references/tags/references"},{label:"help",permalink:"/references/tags/help"},{label:"update",permalink:"/references/tags/update"},{label:"upgrade",permalink:"/references/tags/upgrade"},{label:"fix",permalink:"/references/tags/fix"}],version:"current",lastUpdatedAt:1716972050,formattedLastUpdatedAt:"May 29, 2024",frontMatter:{title:"Error linking with cc",slug:"error-linking-with-cc-failed-exist-status-1",hide_title:!0,tags:["references","help","update","upgrade","fix"]},sidebar:"defaultSidebar",previous:{title:"Uninstall Docker Setup",permalink:"/references/Docker/uninstall-docker-setup"},next:{title:"File permissions and Ownership",permalink:"/references/Lightning CLI/file-permissions-and-ownership"}},o={},d=[{value:"Check if CPU is supported",id:"check-if-cpu-is-supported",level:2},{value:"Linking with cc error",id:"linking-with-cc-error",level:2},{value:"Update",id:"update",level:2},{value:"Install <code>gcc</code>:",id:"install-gcc",level:2},{value:"Remove previous installation files",id:"remove-previous-installation-files",level:2},{value:"Run the installation script",id:"run-the-installation-script",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"check-if-cpu-is-supported",children:"Check if CPU is supported"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"uname -i\n"})}),"\n",(0,t.jsx)(n.admonition,{title:"WARNING",type:"caution",children:(0,t.jsxs)(n.p,{children:["Given the ",(0,t.jsx)(n.a,{href:"/docs/node/requirements/#specs",children:"CPU requirements"}),", currently we are only supporting ",(0,t.jsx)(n.code,{children:"GenuineIntel"}),", featuring Intel Software Guard Extensions (SGX)."]})}),"\n",(0,t.jsx)(n.h2,{id:"linking-with-cc-error",children:"Linking with cc error"}),"\n",(0,t.jsxs)(n.p,{children:["A user who finds the error ",(0,t.jsx)(n.code,{children:"linking with cc failed"}),", will have to install the required dependencies."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"error: linking with `cc` failed: exit status: 1\nerror: could not compile `fleek-service-ping-example` (lib) due to previous error\n"})}),"\n",(0,t.jsx)(n.h2,{id:"update",children:"Update"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"sudo apt-get update\n"})}),"\n",(0,t.jsxs)(n.h2,{id:"install-gcc",children:["Install ",(0,t.jsx)(n.code,{children:"gcc"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"sudo apt-get install gcc\n"})}),"\n",(0,t.jsx)(n.h2,{id:"remove-previous-installation-files",children:"Remove previous installation files"}),"\n",(0,t.jsxs)(n.p,{children:["You can re-run the installation process. If you are using the assisted installer, it'll complain that the source code directory already exists. Since you've probably cloned the source code repository locally, you'll have to remove it manually. If you need help, find the instructions in the ",(0,t.jsx)(n.a,{href:"/references/Lightning%20CLI/uninstall-lightning-node",children:"reference"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"run-the-installation-script",children:"Run the installation script"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"curl https://get.fleek.network | bash\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Alternatively, read the ",(0,t.jsx)(n.a,{href:"/docs/node/install#manual-installation",children:"manual installation instructions"})," for more information."]}),"\n",(0,t.jsx)(s.Z,{name:"Helder Oliveira",image:"https://github.com/heldrida.png",title:"Software Developer + DX",url:"https://github.com/heldrida"})]})}function u(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},3872:(e,n,i)=>{i.d(n,{Z:()=>r});i(7294);var t=i(5893);const r=e=>{let{image:n,name:i,title:r,url:s,communityMember:l=!1}=e;return(0,t.jsx)("section",{className:"author_card",children:(0,t.jsxs)("div",{children:[(0,t.jsx)("span",{className:"avatar",children:(0,t.jsx)("a",{href:s,target:"_blank",alt:i,children:(0,t.jsx)("img",{src:n,alt:i})})}),(0,t.jsxs)("div",{children:[(0,t.jsx)("span",{className:"name",children:(0,t.jsx)("a",{href:s,target:"_blank",alt:i,children:i})}),(0,t.jsx)("span",{className:"title",children:r}),(0,t.jsxs)("span",{className:"discord",children:[l?"Join our community on":"Got questions? Find us on"," ",(0,t.jsx)("a",{href:"https://discord.gg/fleek",target:"_blank",children:"discord!"})]})]})]})})}},1151:(e,n,i)=>{i.d(n,{Z:()=>a,a:()=>l});var t=i(7294);const r={},s=t.createContext(r);function l(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);