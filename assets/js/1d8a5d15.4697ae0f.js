"use strict";(self.webpackChunkdocta=self.webpackChunkdocta||[]).push([[9854],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>c});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},h=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,c=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return n?o.createElement(c,i(i({ref:t},h),{},{components:n})):o.createElement(c,i({ref:t},h))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},469:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>g,frontMatter:()=>l,metadata:()=>h,toc:()=>u});var o=n(7462),r=(n(7294),n(3905)),a=n(3872),i=n(6733),s=n(3242);const l={template:"post",draft:!1,hide_title:!0,title:"Transfering setup ownership",slug:"transfering-setup-ownership",image:"./assets/transfering-setup-ownership.png?202311181223",date:new Date("2023-09-12T23:00:00.000Z"),description:"A step-by-step guide to transfer the ownership of the Fleek Network Lightning CLI and service setup",category:"Tutorial",tags:["transfer","ownership","guide","setup","configuration"]},p=void 0,h={unversionedId:"Node Operators/transfering-setup-ownership",id:"Node Operators/transfering-setup-ownership",title:"Transfering setup ownership",description:"A step-by-step guide to transfer the ownership of the Fleek Network Lightning CLI and service setup",source:"@site/guides/Node Operators/transfering-setup-ownership.md",sourceDirName:"Node Operators",slug:"/Node Operators/transfering-setup-ownership",permalink:"/guides/Node Operators/transfering-setup-ownership",draft:!1,editUrl:"https://github.com/fleek-network/fleek-network-docs/edit/main/guides/Node Operators/transfering-setup-ownership.md",tags:[{label:"transfer",permalink:"/guides/tags/transfer"},{label:"ownership",permalink:"/guides/tags/ownership"},{label:"guide",permalink:"/guides/tags/guide"},{label:"setup",permalink:"/guides/tags/setup"},{label:"configuration",permalink:"/guides/tags/configuration"}],version:"current",lastUpdatedAt:1696865716,formattedLastUpdatedAt:"Oct 9, 2023",frontMatter:{template:"post",draft:!1,hide_title:!0,title:"Transfering setup ownership",slug:"transfering-setup-ownership",image:"./assets/transfering-setup-ownership.png?202311181223",date:"2023-09-12T23:00:00.000Z",description:"A step-by-step guide to transfer the ownership of the Fleek Network Lightning CLI and service setup",category:"Tutorial",tags:["transfer","ownership","guide","setup","configuration"]},sidebar:"defaultSidebar",previous:{title:"Running a node in Docker",permalink:"/guides/Node Operators/running-a-node-in-docker"},next:{title:"Updating Lightning",permalink:"/guides/Node Operators/updating-lightning"}},d={image:n(1e3).Z},u=[{value:"TL;DR",id:"tldr",level:2},{value:"Introduction",id:"introduction",level:2},{value:"Pre-requisites",id:"pre-requisites",level:2},{value:"Ownership of Lightning CLI files",id:"ownership-of-lightning-cli-files",level:2},{value:"Systemd Service",id:"systemd-service",level:2},{value:"Stop the service",id:"stop-the-service",level:2},{value:"Clear the .lightning data",id:"clear-the-lightning-data",level:2},{value:"Create a user",id:"create-a-user",level:2},{value:"Move lightning system and source code directory to user&#39;s home",id:"move-lightning-system-and-source-code-directory-to-users-home",level:2},{value:"1) Move the <code>/root/.lightning</code> directory from one user to the other",id:"1-move-the-rootlightning-directory-from-one-user-to-the-other",level:3},{value:"2) Move the <code>/root/fleek-network</code> directory from one user to the other",id:"2-move-the-rootfleek-network-directory-from-one-user-to-the-other",level:3},{value:"3) Confirm move by finding both directories",id:"3-confirm-move-by-finding-both-directories",level:3},{value:"Change ownership of files",id:"change-ownership-of-files",level:2},{value:"The lgtn symbolic link (symlink)",id:"the-lgtn-symbolic-link-symlink",level:2},{value:"Update the Systemd service unit",id:"update-the-systemd-service-unit",level:2},{value:"Update the config.toml with user-preferred file locations",id:"update-the-configtoml-with-user-preferred-file-locations",level:2},{value:"Start the service",id:"start-the-service",level:2},{value:"Conclusion",id:"conclusion",level:2}],m={toc:u},c="wrapper";function g(e){let{components:t,...l}=e;return(0,r.kt)(c,(0,o.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Transfering setup ownership",src:n(2867).Z,width:"1450",height:"816"})),(0,r.kt)("h2",{id:"tldr"},"TL;DR"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The step-by-step instructions provided in the guide should be simple to follow, but the process is also available as an automated script from our familiar ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/fleek-network/get.fleek.network"},"get.fleek.network")," tool."),(0,r.kt)("p",{parentName:"admonition"},"To use the automated script execute the following command in your server terminal and follow the instructions:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"curl -sS https://get.fleek.network/transfer_system_user_setup_ownership | bash\n")),(0,r.kt)("p",{parentName:"admonition"},"We try to make the auomated scripts as useful as possible, but it's impossible to fit every single use-case. So, if you find any isses or have feedback to help us improve ",(0,r.kt)("a",{parentName:"p",href:"https://discord.gg/fleekxyz"},"message us through our Discord"),".")),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"Our Lightning CLI and Node process is run by a user, that has some sort of permissions\u2013some users run it as a super user (root) which is questionable as root privileges are not a necessary good. We'll look into how to create a user to manage and control the Fleek Network Lightning CLI and Systemd unit service. Also, presents the concept of file permissions and ownership which is crucial in preventing private or sensitive data from being exposed to dodgy actors."),(0,r.kt)("p",null,"Let's discuss the topic and open up a few ideas to help us improve the security of our server."),(0,r.kt)("h2",{id:"pre-requisites"},"Pre-requisites"),(0,r.kt)("p",null,"To follow the guide, you will need the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Familiarity with the command-line interface"),(0,r.kt)("li",{parentName:"ul"},"Have installed and set up the Lightning CLI and service")),(0,r.kt)("h2",{id:"ownership-of-lightning-cli-files"},"Ownership of Lightning CLI files"),(0,r.kt)("p",null,"The user who installs the Lightning CLI and sets the Service takes an important role that determines the location of the configuration files, the setup, and how the Systemd service is managed or controlled."),(0,r.kt)("p",null,"Our ",(0,r.kt)("a",{parentName:"p",href:"/docs/node/install"},"install")," document recommends creating a user and switching to the user to set up the service. You shouldn't want installed applications to run with elevated privileges. Applications are meant to be run with non-administrative privileges. If an application requires higher privileges, the administrator, such as a ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Sudo"},"sudoer")," should be able to elevate it. An application that has full access and control of a system can modify it in harmful ways, e.g. compromise the private keys."),(0,r.kt)("p",null,"For our guide, we'll illustrate the process of migration from a super user (root) to another user (sudo). The knowledge should be easily appliable for any other user-to-user migration. We stick with root user for simplicity and because that's the most common use case."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"A reference document about ",(0,r.kt)("a",{parentName:"p",href:"/references/Lightning%20CLI/file-permissions-and-ownership"},"File permissions and ownership")," is available that explains how it works practically, by showcasing how the process can be started, how the node process locates the Keystore, etc.")),(0,r.kt)("h2",{id:"systemd-service"},"Systemd Service"),(0,r.kt)("p",null,"In systemd, a unit refers to any resource that the system knows how to operate on and manage. This is the primary object that the systemd tools know how to deal with. These resources are defined using configuration files called unit files."),(0,r.kt)("p",null,"The recommended installation process features a ",(0,r.kt)("a",{parentName:"p",href:"https://www.freedesktop.org/software/systemd/man/systemd.service.html"},"systemd.service")," which is a resource that the system knows how to operate and manage by an administrator user."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"When using a Systemd service to run a process, it operates comparably to running it directly. The key difference is that Systemd keeps track of all the processes and threads that are spawned. This means that when a service is stopped using systemctl, such as the Fleek Network Lightning Node service, all the child processes that were started by the service are also terminated. Additionally, by utilizing Systemd, a user can run the process in the background and configure it to start automatically on system startup.")),(0,r.kt)("p",null,"If you have followed the installation recommendations, find the systemd service unit in the location ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/systemd/system/lightning.service")," (we are using Ubuntu Linux as an example to keep it short)."),(0,r.kt)("p",null,"Make sure that you have set up a ",(0,r.kt)("a",{parentName:"p",href:"/docs/node/install#systemd-service-setup"},"Systemd unit service"),", as recommended during the installation as this guide assumes you have one setup."),(0,r.kt)("h2",{id:"stop-the-service"},"Stop the service"),(0,r.kt)("p",null,"Before we proceed with any changes required for the migration, you'll have to stop the ",(0,r.kt)("inlineCode",{parentName:"p"},"lightning.service"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"systemctl stop lightning\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"For this guide, we are assuming that you are migrating ownership from ",(0,r.kt)("strong",{parentName:"p"},"root")," to a ",(0,r.kt)("strong",{parentName:"p"},"sudoer")," user. If not, you might be required to elevate privileges as ",(0,r.kt)("strong",{parentName:"p"},"sudo**")," where required. For example, ",(0,r.kt)("inlineCode",{parentName:"p"},"sudo systemctl stop lightning"),".")),(0,r.kt)("h2",{id:"clear-the-lightning-data"},"Clear the .lightning data"),(0,r.kt)("p",null,"Run the following command to clear the ",(0,r.kt)("inlineCode",{parentName:"p"},"/root/.lightning/data"),", as it can be quite large and we don't need to move it."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo rm -rf /root/.lightning/data\n")),(0,r.kt)("h2",{id:"create-a-user"},"Create a user"),(0,r.kt)(i.ZP,{mdxType:"CreateAUser"}),(0,r.kt)("h2",{id:"move-lightning-system-and-source-code-directory-to-users-home"},"Move lightning system and source code directory to user's home"),(0,r.kt)("p",null,"A user should've been created, added the user to the sudo group, switched to the user, and changed the directory to the user's home."),(0,r.kt)("p",null,"Run the command ",(0,r.kt)("inlineCode",{parentName:"p"},"pwd"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"pwd\n")),(0,r.kt)("p",null,"The output would look like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"/home/<USERNAME>\n")),(0,r.kt)("p",null,"Given the username ",(0,r.kt)("strong",{parentName:"p"},"lgtn"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"/home/lgtn\n")),(0,r.kt)("p",null,"You'll then move two directories:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"/root/.lightning")),(0,r.kt)("li",{parentName:"ul"},"The source code under the parent ",(0,r.kt)("inlineCode",{parentName:"li"},"/root/fleek-network"))),(0,r.kt)("h3",{id:"1-move-the-rootlightning-directory-from-one-user-to-the-other"},"1) Move the ",(0,r.kt)("inlineCode",{parentName:"h3"},"/root/.lightning")," directory from one user to the other"),(0,r.kt)("p",null,"For our demo, we have assumed ",(0,r.kt)("strong",{parentName:"p"},"root")," user to ",(0,r.kt)("strong",{parentName:"p"},"sudoer")," user named ",(0,r.kt)("strong",{parentName:"p"},"lgtn"),", thus that'll look like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo mv /root/.lightning /home/lgtn/\n")),(0,r.kt)("h3",{id:"2-move-the-rootfleek-network-directory-from-one-user-to-the-other"},"2) Move the ",(0,r.kt)("inlineCode",{parentName:"h3"},"/root/fleek-network")," directory from one user to the other"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo mv /root/fleek-network /home/lgtn/\n")),(0,r.kt)("h3",{id:"3-confirm-move-by-finding-both-directories"},"3) Confirm move by finding both directories"),(0,r.kt)("p",null,"In the user $HOME directory, you should be able to list the content of the directory and find the ",(0,r.kt)("inlineCode",{parentName:"p"},".lightning")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"fleek-network")," directory."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"ls -la\n")),(0,r.kt)("p",null,"The output should be similar to the following."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"drwxr-x--- 6 lgtn lgtn  4096 Sep 12 13:51 .\ndrwxr-xr-x 3 root root  4096 Sep 11 12:28 ..\ndrwxrwxr-x 5 root root  4096 Sep 11 15:25 .lightning\ndrwxrwxr-x 3 root root  4096 Sep 11 12:28 fleek-network\n")),(0,r.kt)("h2",{id:"change-ownership-of-files"},"Change ownership of files"),(0,r.kt)("p",null,"Once the directories and files are moved, they should have have the wrong ownership, which should be set to ",(0,r.kt)("strong",{parentName:"p"},"root:root"),". We'll now have to change the ownership of the directories and files recursively."),(0,r.kt)("p",null,"Change the ownership of ",(0,r.kt)("inlineCode",{parentName:"p"},"/home/lgtn/.lightning")," to the user ",(0,r.kt)("strong",{parentName:"p"},"lgtn")," as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo chown -R lgtn:lgtn .lightning\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Make sure that you use the ",(0,r.kt)("inlineCode",{parentName:"p"},"-R")," flag to have the ownership changes applied to the parent, the child directories and all the files.")),(0,r.kt)("p",null,"Change the ownership of ",(0,r.kt)("inlineCode",{parentName:"p"},"/home/lgtn/fleek-network")," to the user ",(0,r.kt)("strong",{parentName:"p"},"lgtn")," as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo chown -R lgtn:lgtn fleek-network\n")),(0,r.kt)("p",null,"Once completed, if you list the content of the directory the ownership should have changed from ",(0,r.kt)("inlineCode",{parentName:"p"},"root:root")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"lgtn:lgtn"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"ls -la\n")),(0,r.kt)("p",null,"The output should be similar to the following."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"drwxr-x--- 6 lgtn lgtn  4096 Sep 12 13:51 .\ndrwxr-xr-x 3 root root  4096 Sep 11 12:28 ..\ndrwxrwxr-x 5 lgtn lgtn  4096 Sep 11 15:25 .lightning\ndrwxrwxr-x 3 lgtn lgtn  4096 Sep 11 12:28 fleek-network\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Remember that we are using ",(0,r.kt)("strong",{parentName:"p"},"lgtn")," for our demo. If you have opted for a different username, make sure you use the correct username. To find the username you are logged in with run the command:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"whoami\n")),(0,r.kt)("p",{parentName:"admonition"},"For our demo, we'll assume that you understand that ",(0,r.kt)("strong",{parentName:"p"},"lgtn")," is the user we opted in for our demo.")),(0,r.kt)("h2",{id:"the-lgtn-symbolic-link-symlink"},"The lgtn symbolic link (symlink)"),(0,r.kt)("p",null,"We have the symbolic link that links the binary built from the source code, to the alias ",(0,r.kt)("strong",{parentName:"p"},"lgtn")," that's set under the ",(0,r.kt)("inlineCode",{parentName:"p"},"/usr/local/bin/lgtn")," pathname."),(0,r.kt)("p",null,"For example, you can find where that is linked to by running:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"ls -la $(which lgtn)\n")),(0,r.kt)("p",null,"On the output below, we can see that the ",(0,r.kt)("inlineCode",{parentName:"p"},"/usr/local/bin/lgtn")," points to ",(0,r.kt)("inlineCode",{parentName:"p"},"/root/fleek-network/lightning/target/release/lightning-node"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"lrwxrwxrwx 1 root root 64 Sep 11 15:48 /usr/local/bin/lgtn -> /root/fleek-network/lightning/target/release/lightning-node\n")),(0,r.kt)("p",null,"The target base path is ",(0,r.kt)("inlineCode",{parentName:"p"},"/root")," and we know that we've moved the source code directory to the user home ",(0,r.kt)("inlineCode",{parentName:"p"},"/home/lgtn"),". For this reason, we need to create a new symlink with the updated location of the binary file."),(0,r.kt)("p",null,"Unlink the symlink:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo unlink /usr/local/bin/lgtn\n")),(0,r.kt)("p",null,"Create the symlink:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'sudo ln -s "/home/lgtn/fleek-network/lightning/target/release/lightning-node" /usr/local/bin/lgtn\n')),(0,r.kt)("p",null,"If successful, you should be able to execute the command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"lgtn help\n")),(0,r.kt)("p",null,"The output should look similar to:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"Usage: lgtn [OPTIONS] <COMMAND>\n\nCommands:\n  run           Start the node\n  keys          Handle keys\n  print-config  Print the loaded configuration\n  help          Print this message or the help of the given subcommand(s)\n\nOptions:\n  -c, --config <CONFIG>      Path to the toml configuration file [default: ~/.lightning/config.toml]\n      --with-mock-consensus  Determines that we should be using the mock consensus backend\n  -v...                      Increases the level of verbosity (the max level is -vvv)\n      --log-location         Print code location on console logs\n  -h, --help                 Print help\n  -V, --version              Print version\n")),(0,r.kt)("h2",{id:"update-the-systemd-service-unit"},"Update the Systemd service unit"),(0,r.kt)("p",null,"Open the file, its settings should be similar to the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"[Unit]\nDescription=Fleek Network Node lightning service\n\n[Service]\nType=simple\nMemoryHigh=32G\nRestartSec=15s\nRestart=always\nExecStart=lgtn -c /home/<USERNAME>/.lightning/config.toml run\nStandardOutput=append:/var/log/lightning/output.log\nStandardError=append:/var/log/lightning/diagnostic.log\nEnvironment=TMPDIR=/var/tmp\n\n[Install]\nWantedBy=multi-user.target\n")),(0,r.kt)("p",null,"Since we opted in for the username ",(0,r.kt)("strong",{parentName:"p"},"lgtn")," for our demo, replaced ",(0,r.kt)("inlineCode",{parentName:"p"},"<USERNAME>")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"lgtn")," and it would look like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"[Unit]\nDescription=Fleek Network Node lightning service\n\n[Service]\nType=simple\nMemoryHigh=32G\nRestartSec=15s\nRestart=always\nExecStart=lgtn -c /home/lgtn/.lightning/config.toml run\nStandardOutput=append:/var/log/lightning/output.log\nStandardError=append:/var/log/lightning/diagnostic.log\nEnvironment=TMPDIR=/var/tmp\n\n[Install]\nWantedBy=multi-user.target\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Notice the ",(0,r.kt)("inlineCode",{parentName:"p"},"ExecStart=")," which includes the flag ",(0,r.kt)("inlineCode",{parentName:"p"},"-c")," where the location of the user files is declared. Learn how to ",(0,r.kt)("a",{parentName:"p",href:"#update-the-configtoml-with-user-preferred-file-locations"},"update the config.toml")," to include the user-preferred file paths, e.g. declare the keystore pathname.")),(0,r.kt)("p",null,"Complete the step by reloading the daemon, to apply the newly created changes. You can do this by executing:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo systemctl daemon-reload\n")),(0,r.kt)("h2",{id:"update-the-configtoml-with-user-preferred-file-locations"},"Update the config.toml with user-preferred file locations"),(0,r.kt)("p",null,"Open the ",(0,r.kt)("inlineCode",{parentName:"p"},"/home/lgtn/.lightning/config.toml")," file in your favorite text editor."),(0,r.kt)("p",null,"Replace every instance of ",(0,r.kt)("inlineCode",{parentName:"p"},"~")," (tilde) with the user's home path. We do this to ensure that every time we control the service via systemctl, the configuration file that tells which keystore to use is declared upfront regardless of running it as user or delegating to root with ",(0,r.kt)("strong",{parentName:"p"},"sudo"),". Learn more about ",(0,r.kt)("a",{parentName:"p",href:"/references/Lightning%20CLI/file-permissions-and-ownership"},"file permissions and ownership")," by reading the reference document."),(0,r.kt)(s.ZP,{mdxType:"FindAndReplaceConfigWithUserPaths"}),(0,r.kt)("h2",{id:"start-the-service"},"Start the service"),(0,r.kt)("p",null,"At this stage, you should have migrated the essential files to the user   home."),(0,r.kt)("p",null,"Ideally, you would now manage the service as the ",(0,r.kt)("inlineCode",{parentName:"p"},"user")," (as described in the ",(0,r.kt)("a",{parentName:"p",href:"/references/Systemd/user-service/"},"user service reference"),"). To keep our guide wider to all users, we'll prefix the commands with ",(0,r.kt)("strong",{parentName:"p"},"sudo"),", which elevates the permissions to ",(0,r.kt)("strong",{parentName:"p"},"root"),". But since we have provided the configuration file the ",(0,r.kt)("inlineCode",{parentName:"p"},"-c")," in our ",(0,r.kt)("a",{parentName:"p",href:"#systemd-service"},"systemd service"),", we'll have the user-preferred configuration options ruling. "),(0,r.kt)("p",null,"Start the service by running the command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo systemctl start lightning.service\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Find the timeline of events for the Lightning service by checking the log files. Learn about it in the section ",(0,r.kt)("a",{parentName:"p",href:"/docs/node/install#analyzing-log-messages"},"Log Messages"),".")),(0,r.kt)("p",null,"To learn more, visit the section ",(0,r.kt)("a",{parentName:"p",href:"/docs/node/install#use-systemctl-to-manage-systemd-service"},"Use Systemctl to manage the Lightning Service")),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"We started by giving a brief introduction to ownership of the Lightning CLI files."),(0,r.kt)("p",null,"Jumped through topics of Systemd service that helps the user manage the service in the Linux environment, which helps keep keeps track of all the processes and threads that are spawned."),(0,r.kt)("p",null,"We've gone through the step-by-step process to migrate the Fleek Network CLI and Systemd service setup from one user to the other. To keep it short, we decided to go with the use-case of where the migration happens between a ",(0,r.kt)("strong",{parentName:"p"},"root")," user and a ",(0,r.kt)("strong",{parentName:"p"},"sudoer"),"."),(0,r.kt)("p",null,"Discover more about the project by ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/fleek-network/lightning"},"watching/contributing on GitHub"),", following us on ",(0,r.kt)("a",{parentName:"p",href:"https://twitter.com/fleek_net"},"Twitter"),", and joining ",(0,r.kt)("a",{parentName:"p",href:"https://discord.gg/fleekxyz"},"our community Discord")," for any updates."),(0,r.kt)(a.Z,{name:"Helder Oliveira",image:"https://github.com/heldrida.png",title:"Software Developer + DX",url:"https://github.com/heldrida",mdxType:"Author"}))}g.isMDXComponent=!0},6733:(e,t,n)=>{n.d(t,{ZP:()=>s});var o=n(7462),r=(n(7294),n(3905));const a={toc:[]},i="wrapper";function s(e){let{components:t,...n}=e;return(0,r.kt)(i,(0,o.Z)({},a,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"We recommend creating a ",(0,r.kt)("inlineCode",{parentName:"p"},"non-root")," user with administrative privileges. It'll allow us to install any system requirements."),(0,r.kt)("p",null,"You can create a new user and add to the ",(0,r.kt)("strong",{parentName:"p"},"sudo")," group by running:"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"For our example, we'll be using the name ",(0,r.kt)("inlineCode",{parentName:"p"},"lgtn")," but you can pick whichever you'd like. If you already have a ",(0,r.kt)("strong",{parentName:"p"},"sudoer")," account, you can skip this step.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"adduser lgtn\n")),(0,r.kt)("p",null,"After completing the ",(0,r.kt)("inlineCode",{parentName:"p"},"adduser")," steps, execute the ",(0,r.kt)("inlineCode",{parentName:"p"},"usermod")," to add the ",(0,r.kt)("inlineCode",{parentName:"p"},"user")," to the ",(0,r.kt)("strong",{parentName:"p"},"sudo")," group, as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"usermod -aG sudo lgtn\n")),(0,r.kt)("p",null,"Switch to the new ",(0,r.kt)("strong",{parentName:"p"},"user")," by using the command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"su lgtn\n")),(0,r.kt)("p",null,"Change the directory to the new user's home, as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"cd /home/lgtn\n")))}s.isMDXComponent=!0},3242:(e,t,n)=>{n.d(t,{ZP:()=>s});var o=n(7462),r=(n(7294),n(3905));const a={toc:[]},i="wrapper";function s(e){let{components:t,...n}=e;return(0,r.kt)(i,(0,o.Z)({},a,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In the ",(0,r.kt)("inlineCode",{parentName:"p"},"/home/<USERNAME>/.lightning/config.toml")," you'll find some and more of the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-toml"},'[BLANK]\n\n[application]\ndb_path = "~/.lightning/data/app_db"\n\n[consensus]\nstore_path = "~/.lightning/data/narwhal_store"\n\n[fsstore]\nroot = "~/.lightning/blockstore"\n\n[resolver]\nstore_path = "~/.lightning/data/resolver_store"\n\n[signer]\nconsensus_key_path = "~/.lightning/keystore/consensus.pem"\nnode_key_path = "~/.lightning/keystore/node.pem"\n')),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The configuration properties and values presented above are a shorter version of what you'll find on your ",(0,r.kt)("strong",{parentName:"p"},"configuration.toml"),". We keep it short to make it easier to follow, do not copy and paste.")),(0,r.kt)("p",null,"Find and replace all instances of ~ in the config file ",(0,r.kt)("inlineCode",{parentName:"p"},"/home/<USERNAME>/.lightning/config.toml"),". "),(0,r.kt)("p",null,"Here's an example of how to do it using ",(0,r.kt)("strong",{parentName:"p"},"sed"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'sed -i "s|~/.lightning|/home/<USERNAME>/.lightning|g" "/home/<USERNAME>/.lightning/config.toml"\n')),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Replace the ",(0,r.kt)("inlineCode",{parentName:"p"},"<USERNAME>")," with your username. For example, if you have followed the recommendation to ",(0,r.kt)("a",{parentName:"p",href:"/docs/node/install#create-a-user"},"create a user")," it would look like ",(0,r.kt)("inlineCode",{parentName:"p"},"/home/lgtn/.lightning/config.toml")," for the username ",(0,r.kt)("strong",{parentName:"p"},"lgtn"),".")),(0,r.kt)("p",null,"For example, if your username is ",(0,r.kt)("inlineCode",{parentName:"p"},"lgtn")," that'd look like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'sed -i "s|~/.lightning|/home/lgtn/.lightning|g" "/home/lgtn/.lightning/config.toml"\n')),(0,r.kt)("p",null,"Once modified, you can run a ",(0,r.kt)("inlineCode",{parentName:"p"},"cat")," to see the content of the files to confirm it has been updated."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"cat /home/lgtn/.lightning/config.toml\n")),(0,r.kt)("p",null,"For our example where we opted in for the username ",(0,r.kt)("inlineCode",{parentName:"p"},"lgtn")," that would look like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-toml"},'[BLANK]\n\n[application]\ndb_path = "~/.lightning/data/app_db"\n\n[consensus]\nstore_path = "~/.lightning/data/narwhal_store"\n\n[fsstore]\nroot = "~/.lightning/blockstore"\n\n[resolver]\nstore_path = "~/.lightning/data/resolver_store"\n\n[signer]\nconsensus_key_path = "~/.lightning/keystore/consensus.pem"\nnode_key_path = "~/.lightning/keystore/node.pem"\n')),(0,r.kt)("admonition",{title:"Warning",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Bear in mind that we are keeping the content of the file short to make it easier to read and follow. The content of your configuration file should look slightly different, amongst these it should contain other properties and values. You should not copy and replace the content of your files with the ones presented here.")))}s.isMDXComponent=!0},3872:(e,t,n)=>{n.d(t,{Z:()=>r});var o=n(7294);const r=e=>{let{image:t,name:n,title:r,url:a,communityMember:i=!1}=e;return o.createElement("section",{className:"author_card"},o.createElement("div",null,o.createElement("span",{className:"avatar"},o.createElement("a",{href:a,target:"_blank",alt:n},o.createElement("img",{src:t,alt:n}))),o.createElement("div",null,o.createElement("span",{className:"name"},o.createElement("a",{href:a,target:"_blank",alt:n},n)),o.createElement("span",{className:"title"},r),o.createElement("span",{className:"discord"},i?"Join our community on":"Got questions? Find us on"," ",o.createElement("a",{href:"https://discord.gg/fleekxyz",target:"_blank"},"discord!")))))}},2867:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/transfering-setup-ownership-e59591d6c2b6023384e94dfa4873964a.png"},1e3:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/transfering-setup-ownership-e59591d6c2b6023384e94dfa4873964a.png"}}]);