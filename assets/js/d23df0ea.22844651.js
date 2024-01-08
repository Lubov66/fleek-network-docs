"use strict";(self.webpackChunkdocta=self.webpackChunkdocta||[]).push([[5548],{3183:(e,n,r)=>{r.d(n,{ZP:()=>o});var i=r(5893),t=r(1151);function l(e){const n={a:"a",admonition:"admonition",code:"code",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(n.admonition,{type:"tip",children:[(0,i.jsx)(n.p,{children:"You have several ways of doing this:"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Clone via HTTPS"}),"\n",(0,i.jsx)(n.li,{children:"Clone via SSH"}),"\n",(0,i.jsx)(n.li,{children:"Download via Github CLI"}),"\n",(0,i.jsxs)(n.li,{children:["Download the ",(0,i.jsx)(n.a,{href:"https://github.com/fleek-network/lightning/archive/refs/heads/main.zip",children:"zip package"})," from the repository"]}),"\n"]}),(0,i.jsxs)(n.p,{children:["We recommend HTTPS because it is the easiest to set up in the wild, and by users who are new to all this.\nAlthough, we strongly recommend using an SSH connection when interacting with GitHub. If you are to this and are interested read more about it ",(0,i.jsx)(n.a,{href:"https://docs.github.com/en/authentication/connecting-to-github-with-ssh",children:"here"}),"."]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"git clone -b testnet-alpha-1 https://github.com/fleek-network/lightning.git <DIRECTORY-NAME>\n"})}),(0,i.jsxs)(n.p,{children:["At time of writing, we are checking the branch name ",(0,i.jsx)(n.code,{children:"testnet-alpha-1"})," that corresponds to the testnet phase.\nHere's an example of what it'd look like when sticking to the recommended path location:"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"git clone -b testnet-alpha-1 https://github.com/fleek-network/lightning.git ~/fleek-network/lightning\n"})})]})}function o(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},5081:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>g,frontMatter:()=>s,metadata:()=>a,toc:()=>h});var i=r(5893),t=r(1151),l=r(3872),o=r(3183);const s={title:"Build and run in Docker",slug:"build-and-run-in-docker",hide_title:!0,tags:["references","help","docker","build","image","container"]},c=void 0,a={id:"Docker/build-and-run-in-docker",title:"Build and run in Docker",description:"Clone the source code locally",source:"@site/references/Docker/build-and-run-in-docker.md",sourceDirName:"Docker",slug:"/Docker/build-and-run-in-docker",permalink:"/references/Docker/build-and-run-in-docker",draft:!1,unlisted:!1,editUrl:"https://github.com/fleek-network/fleek-network-docs/edit/main/references/Docker/build-and-run-in-docker.md",tags:[{label:"references",permalink:"/references/tags/references"},{label:"help",permalink:"/references/tags/help"},{label:"docker",permalink:"/references/tags/docker"},{label:"build",permalink:"/references/tags/build"},{label:"image",permalink:"/references/tags/image"},{label:"container",permalink:"/references/tags/container"}],version:"current",lastUpdatedAt:1704722255,formattedLastUpdatedAt:"Jan 8, 2024",frontMatter:{title:"Build and run in Docker",slug:"build-and-run-in-docker",hide_title:!0,tags:["references","help","docker","build","image","container"]},sidebar:"defaultSidebar",previous:{title:"About references",permalink:"/references/"},next:{title:"Frequently used commands for Docker setup",permalink:"/references/Docker/frequently-used-commands-for-docker-setup"}},d={},h=[{value:"Clone the source code locally",id:"clone-the-source-code-locally",level:2},{value:"Change directory to Lightning source code",id:"change-directory-to-lightning-source-code",level:2},{value:"Install Docker",id:"install-docker",level:2},{value:"Docker setup verification",id:"docker-setup-verification",level:2},{value:"Check the Dockerfile",id:"check-the-dockerfile",level:2},{value:"Build the Docker image",id:"build-the-docker-image",level:2},{value:"Docker Container",id:"docker-container",level:2},{value:"Generate keys",id:"generate-keys",level:2},{value:"View logs",id:"view-logs",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"clone-the-source-code-locally",children:"Clone the source code locally"}),"\n",(0,i.jsx)(o.ZP,{}),"\n",(0,i.jsx)(n.h2,{id:"change-directory-to-lightning-source-code",children:"Change directory to Lightning source code"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"cd ~/fleek-network/lightning\n"})}),"\n",(0,i.jsx)(n.h2,{id:"install-docker",children:"Install Docker"}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["We're using Ubuntu Linux. You'll have to make the required tweaks for your preferred Linux Distro. Find the list of support operating systems ",(0,i.jsx)(n.a,{href:"/docs/node/requirements#server",children:"here"}),"."]})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"sudo apt update\n"})}),"\n",(0,i.jsx)(n.p,{children:"Next, install the required packages to let apt use packages over HTTPS:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"sudo apt install \\\n  apt-transport-https \\\n  ca-certificates \\\n  software-properties-common\n"})}),"\n",(0,i.jsx)(n.p,{children:"Add the GPG key for the official Docker repository to your system:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -\n"})}),"\n",(0,i.jsx)(n.p,{children:"Add the Docker repository to apt sources and update the package database with the Docker packages from the new added repository:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:'sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu jammy stable"\n'})}),"\n",(0,i.jsx)(n.p,{children:"Set to install from the Docker repo instead of the default Ubuntu repo:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"apt-cache policy docker-ce\n"})}),"\n",(0,i.jsx)(n.p,{children:"Finally, install Docker:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"sudo apt install docker-ce\n"})}),"\n",(0,i.jsx)(n.p,{children:"Once complete you should be able to run it via the CLI, as such:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"docker -v\n"})}),"\n",(0,i.jsx)(n.p,{children:"Here's the output (versions might differ a bit from the time of writing):"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"Docker version 24.0.6, build ed223bc\n"})}),"\n",(0,i.jsx)(n.h2,{id:"docker-setup-verification",children:"Docker setup verification"}),"\n",(0,i.jsx)(n.p,{children:"The following command's output will indicate if Docker's working correctly:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"sudo docker run hello-world\n"})}),"\n",(0,i.jsx)(n.p,{children:'You should get a "Hello from Docker!".'}),"\n",(0,i.jsx)(n.h2,{id:"check-the-dockerfile",children:"Check the Dockerfile"}),"\n",(0,i.jsxs)(n.p,{children:["You should have ",(0,i.jsx)(n.a,{href:"#change-directory-to-lightning-source-code",children:"changed directory"})," to the projecto directory."]}),"\n",(0,i.jsxs)(n.p,{children:["If you run a ",(0,i.jsx)(n.code,{children:"cat Dockerfile"}),", you should have content similar to:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"FROM rust:latest as builder\nARG PROFILE=release\nWORKDIR /lightning\n\nRUN apt-get update\nRUN apt-get install -y \\\n    build-essential \\\n    cmake \\\n    clang \\\n    pkg-config \\\n    libssl-dev \\\n    gcc \\\n    protobuf-compiler\n\n...\n"})}),"\n",(0,i.jsx)(n.h2,{id:"build-the-docker-image",children:"Build the Docker image"}),"\n",(0,i.jsxs)(n.p,{children:["Build the image named as ",(0,i.jsx)(n.code,{children:"lightning"})," from our Dockerfile:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"sudo docker build -t lightning -f ./Dockerfile .\n"})}),"\n",(0,i.jsx)(n.h2,{id:"docker-container",children:"Docker Container"}),"\n",(0,i.jsxs)(n.p,{children:["Create ",(0,i.jsx)(n.code,{children:"~/.lightning"})," configuration directory:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"mkdir $HOME/.lightning\n"})}),"\n",(0,i.jsx)(n.p,{children:"Run the lightning-node container:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"sudo docker run \\\n  -p 4200-4299:4200-4299 \\\n  -p 4300-4399:4300-4399 \\\n  --mount type=bind,source=$HOME/.lightning,target=/home/lgtn/.lightning \\\n  --mount type=bind,source=/var/tmp,target=/var/tmp \\\n  --name lightning-node \\\n  -it lightning\n"})}),"\n",(0,i.jsx)(n.h2,{id:"generate-keys",children:"Generate keys"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"sudo docker exec -it lightning-node lgtn keys generate\n"})}),"\n",(0,i.jsx)(n.h2,{id:"view-logs",children:"View logs"}),"\n",(0,i.jsx)(n.p,{children:"To view the logs of a Docker container in real time, use the following command:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"sudo docker logs -f lightning-node\n"})}),"\n",(0,i.jsx)(l.Z,{name:"Helder Oliveira",image:"https://github.com/heldrida.png",title:"Software Developer + DX",url:"https://github.com/heldrida"})]})}function g(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},3872:(e,n,r)=>{r.d(n,{Z:()=>t});r(7294);var i=r(5893);const t=e=>{let{image:n,name:r,title:t,url:l,communityMember:o=!1}=e;return(0,i.jsx)("section",{className:"author_card",children:(0,i.jsxs)("div",{children:[(0,i.jsx)("span",{className:"avatar",children:(0,i.jsx)("a",{href:l,target:"_blank",alt:r,children:(0,i.jsx)("img",{src:n,alt:r})})}),(0,i.jsxs)("div",{children:[(0,i.jsx)("span",{className:"name",children:(0,i.jsx)("a",{href:l,target:"_blank",alt:r,children:r})}),(0,i.jsx)("span",{className:"title",children:t}),(0,i.jsxs)("span",{className:"discord",children:[o?"Join our community on":"Got questions? Find us on"," ",(0,i.jsx)("a",{href:"https://discord.gg/fleek",target:"_blank",children:"discord!"})]})]})]})})}},1151:(e,n,r)=>{r.d(n,{Z:()=>s,a:()=>o});var i=r(7294);const t={},l=i.createContext(t);function o(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);