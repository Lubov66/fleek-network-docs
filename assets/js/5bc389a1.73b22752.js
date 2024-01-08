"use strict";(self.webpackChunkdocta=self.webpackChunkdocta||[]).push([[9829],{7631:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>l,metadata:()=>h,toc:()=>u});var i=t(5893),s=t(1151),o=t(3872);function r(e){const n={a:"a",admonition:"admonition",p:"p",...(0,s.a)(),...e.components};return(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsxs)(n.p,{children:["During testnet phase, you have to checkout to the testnet branch. For example, the first testnet branch name was ",(0,i.jsx)(n.a,{href:"https://github.com/fleek-network/lightning/tree/testnet-alpha-1",children:"testnet-alpha-1"})," that you would have to be checked in order to run a node successfully. A list of the active branches can be found at anytime in the GitHub repository ",(0,i.jsx)(n.a,{href:"https://github.com/fleek-network/lightning/branches",children:"active branches"}),". While we try our best to update documentation, guides, instructions or any other written content during development, there might be breaking changes that might take some time to reflect in our documents. To avoid disappointment, check into the correct branch or contribute by getting in touch with us, or sending a PR in the relevant context, thank you!"]})})}function a(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}const l={title:"Updating Lightning",hide_title:!0,slug:"updating-lightning",date:new Date("2023-09-19T12:00:00.000Z"),image:"./assets/updating-lightning.png?202309191740",description:"A step-by-step guide to update the Lightning CLI from source code and Service setup",category:"Tutorial",tags:["update","rebuild","guide","setup","configuration"]},c=void 0,h={id:"Node Operators/updating-lightning",title:"Updating Lightning",description:"A step-by-step guide to update the Lightning CLI from source code and Service setup",source:"@site/guides/Node Operators/updating-lightning.md",sourceDirName:"Node Operators",slug:"/Node Operators/updating-lightning",permalink:"/guides/Node Operators/updating-lightning",draft:!1,unlisted:!1,editUrl:"https://github.com/fleek-network/fleek-network-docs/edit/main/guides/Node Operators/updating-lightning.md",tags:[{label:"update",permalink:"/guides/tags/update"},{label:"rebuild",permalink:"/guides/tags/rebuild"},{label:"guide",permalink:"/guides/tags/guide"},{label:"setup",permalink:"/guides/tags/setup"},{label:"configuration",permalink:"/guides/tags/configuration"}],version:"current",lastUpdatedAt:1704722255,formattedLastUpdatedAt:"Jan 8, 2024",frontMatter:{title:"Updating Lightning",hide_title:!0,slug:"updating-lightning",date:"2023-09-19T12:00:00.000Z",image:"./assets/updating-lightning.png?202309191740",description:"A step-by-step guide to update the Lightning CLI from source code and Service setup",category:"Tutorial",tags:["update","rebuild","guide","setup","configuration"]},sidebar:"defaultSidebar",previous:{title:"Transfering setup ownership",permalink:"/guides/Node Operators/transfering-setup-ownership"}},d={image:t(1506).Z},u=[{value:"Introduction",id:"introduction",level:2},{value:"Pre-requisites",id:"pre-requisites",level:2},{value:"Pulling the latest changes",id:"pulling-the-latest-changes",level:2},{value:"Switch to installer username",id:"switch-to-installer-username",level:3},{value:"Change directory to the source code",id:"change-directory-to-the-source-code",level:3},{value:"Checkout to branch",id:"checkout-to-branch",level:3},{value:"Pull the latest changes",id:"pull-the-latest-changes",level:3},{value:"Build the binary from the source code",id:"build-the-binary-from-the-source-code",level:2},{value:"Checkup the symlink setup",id:"checkup-the-symlink-setup",level:2},{value:"Systemd service",id:"systemd-service",level:2},{value:"Verify the setup",id:"verify-the-setup",level:3},{value:"Launching the node as a systemd service",id:"launching-the-node-as-a-systemd-service",level:3},{value:"Health check",id:"health-check",level:2},{value:"Conclusion",id:"conclusion",level:2}];function g(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Update Lightning",src:t(2913).Z+"",width:"1450",height:"816"})}),"\n","\n","\n",(0,i.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsx)(n.p,{children:"Fleek Network's Lightning source code is updated frequently and thus keeping up with changes can be a bit of a chore and especially difficult for users who are trying to have it compiled for the first time, or updating the Lightning CLI binary for their operating systems. While we should have stable releases in the future, at the current phase of development, there's a requirement to follow the contributions directly in the repository: checking in and out, the commits you're interested in running."}),"\n",(0,i.jsxs)(n.p,{children:["In the following guide, we\u2019ll have a simple look into how to pull changes and update Lightning CLI on Linux, which we stick with Ubuntu for simplicity but should be easily transferrable to your ",(0,i.jsx)(n.a,{href:"/docs/node/requirements#server",children:"supported OS"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"pre-requisites",children:"Pre-requisites"}),"\n",(0,i.jsx)(n.p,{children:"To follow the guide, you will need the following:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Familiarity with the command-line interface"}),"\n",(0,i.jsx)(n.li,{children:"Some experience with Git"}),"\n",(0,i.jsx)(n.li,{children:"Have installed and set up the Lightning CLI and service"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"pulling-the-latest-changes",children:"Pulling the latest changes"}),"\n",(0,i.jsxs)(n.p,{children:["Check the latest contributions pushed to the Lightning CLI ",(0,i.jsx)(n.a,{href:"https://github.com/fleek-network/lightning/commits/main",children:"main branch"}),", it'll give you clarity on what's been committed into the source code. Therefore, find out about new features, fixes, improvements, etc by looking directly into the repository history."]}),"\n",(0,i.jsx)(n.h3,{id:"switch-to-installer-username",children:"Switch to installer username"}),"\n",(0,i.jsx)(n.p,{children:"First, switch to the username you've used to install and setup Fleek Network Lightning."}),"\n",(0,i.jsx)(n.p,{children:"To switch to the username you've used throughout the installation process do:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"su <USERNAME>\n"})}),"\n",(0,i.jsxs)(n.p,{children:["For example, if you used the username ",(0,i.jsx)(n.code,{children:"lgtn"})," it'll look like the following command:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"su lgtn\n"})}),"\n",(0,i.jsx)(n.h3,{id:"change-directory-to-the-source-code",children:"Change directory to the source code"}),"\n",(0,i.jsxs)(n.p,{children:["Next, ",(0,i.jsx)(n.code,{children:"change directory"})," to the Lightning directory in your file system."]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["The tild ",(0,i.jsx)(n.code,{children:"~"})," means user $HOME, thus you have to be logged in with the correct user as requested in the ",(0,i.jsx)(n.a,{href:"#switch-to-installer-username",children:"installer username"})," step."]})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"cd <PATH-TO-LIGHTNING-SOURCE-CODE>\n"})}),"\n",(0,i.jsxs)(n.p,{children:["If you have installed it via the recommended instructions, then the default location where the ",(0,i.jsx)(n.a,{href:"https://github.com/fleek-network/lightning",children:"source code"})," is stored should be ",(0,i.jsx)(n.code,{children:"~/fleek-network/lightning"}),". Otherwise, if you opted-in for a custom location then look into your notes before proceeding."]}),"\n",(0,i.jsx)(n.p,{children:"For example, it'd look like the following command:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"cd ~/fleek-network/lightning\n"})}),"\n",(0,i.jsx)(n.h3,{id:"checkout-to-branch",children:"Checkout to branch"}),"\n",(0,i.jsxs)(n.p,{children:["Make sure that you are checked in to the correct branch. For example, if that'd be the first testnet phase it'd be called ",(0,i.jsx)(n.code,{children:"testnet-alpha-1"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"git checkout <BRANCH-NAME>\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Here's an example of how the command would look like for the main default branch with corresponding name ",(0,i.jsx)(n.code,{children:"main"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"git checkout main\n"})}),"\n",(0,i.jsx)(a,{}),"\n",(0,i.jsxs)(n.p,{children:["Here's an example of how the command would look like for the branch name ",(0,i.jsx)(n.code,{children:"testnet-alpha-1"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"git checkout testnet-alpha-1\n"})}),"\n",(0,i.jsx)(n.h3,{id:"pull-the-latest-changes",children:"Pull the latest changes"}),"\n",(0,i.jsx)(n.p,{children:"The syntax to pull the latest commits is the following:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"git pull <REPOSITORY-NAME> <BRANCH-NAME>\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The git pull command is used to fetch and merge changes from the remote repository to the local repository. Here we're pulling from remote named ",(0,i.jsx)(n.code,{children:"origin"})," and branch ",(0,i.jsx)(n.code,{children:"main"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"git pull origin main\n"})}),"\n",(0,i.jsxs)(n.admonition,{type:"tip",children:[(0,i.jsxs)(n.p,{children:["If you've made any changes in the local repository directory, clear them to prevent being blocked. As ",(0,i.jsx)(n.code,{children:"git"})," is a ",(0,i.jsx)(n.code,{children:"version control"})," program that looks for changes and will ask you to do something about it to prevent losing data. Most readers can disregard changes if not contributing to the development by simply ",(0,i.jsx)(n.a,{href:"https://git-scm.com/docs/git-stash",children:"stashing"})," or resetting the changes."]}),(0,i.jsxs)(n.p,{children:["A quick way to clean is to ",(0,i.jsx)(n.code,{children:"stash"})," the changes, for example:"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"git stash \n"})})]}),"\n",(0,i.jsx)(n.p,{children:"You can check yourself, as follows:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"git remote -v\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Our output clearly describes what ",(0,i.jsx)(n.code,{children:"origin"})," is tracking."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"origin\tgit@github.com:fleek-network/lightning.git (fetch)\norigin\tgit@github.com:fleek-network/lightning.git (push)\n"})}),"\n",(0,i.jsx)(n.p,{children:"Alternatively, you can stash and pull, to reset the repository to the origin."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"git fetch origin <BRANCH-NAME>\ngit reset --hard origin/<BRANCH-NAME>\ngit clean -f\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["With ",(0,i.jsx)(n.code,{children:"git"})," you can point to any point in the repository history, there might be lots of reasons you'd want to check into a certain commit or branch, e.g. if you encounter bugs and need to revert to a previous commit or version. That being said, we welcome all kinds of contributions, such as simply reporting bugs. To report issues in our repository visit the ",(0,i.jsx)(n.a,{href:"https://github.com/fleek-network/lightning/issues",children:"issues"})," page to help us improve."]})}),"\n",(0,i.jsx)(n.p,{children:"Here's the output we got after the git pull:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"remote: Enumerating objects: 437, done.\nremote: Counting objects: 100% (437/437), done.\nremote: Compressing objects: 100% (205/205), done.\nremote: Total 397 (delta 242), reused 334 (delta 181), pack-reused 0\nReceiving objects: 100% (397/397), 214.68 KiB | 4.77 MiB/s, done.\nResolving deltas: 100% (242/242), completed with 29 local objects.\nFrom https://github.com/fleek-network/lightning\n * branch            main       -> FETCH_HEAD\n   12b2647..998108d  main       -> origin/main\nUpdating 12b2647..998108d\nFast-forward\n .dockerignore                                     |    6 -\n .gitignore                                        |    2 +\n Cargo.lock                                        |  782 +++++++----------------\n Cargo.toml                                        |    2 +-\n core/application/src/state.rs                     |   12 +-\n core/cli/Cargo.toml                               |   47 ++\n core/cli/readme.md                                |   59 ++\n core/cli/src/args.rs                              |   63 ++\n core/cli/src/cli.rs                               |  136 ++++\n core/cli/src/commands/dev.rs                      |  112 ++++\n core/cli/src/commands/key.rs                      |   92 +++\n\n ...\n"})}),"\n",(0,i.jsx)(n.p,{children:"When your local version of the repository, is up-to-date with the remote repository, you'd get:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"From https://github.com/fleek-network/lightning\n * branch            main       -> FETCH_HEAD\nAlready up to date.\n"})}),"\n",(0,i.jsxs)(n.p,{children:['A "already up to date" message means that you have the latest version of the source code and can proceed with compiling the binary process from the source code to override the ',(0,i.jsx)(n.code,{children:"Lightning CLI"})," version you're on. You can also make any other setup changes that might find necessary. Some changes might be related to the recommended setup of Systemd Service that helps control the Fleek Network Lightning Node binary process, etc."]}),"\n",(0,i.jsx)(n.h2,{id:"build-the-binary-from-the-source-code",children:"Build the binary from the source code"}),"\n",(0,i.jsxs)(n.p,{children:["We're assuming that your system setup hasn't changed, such as Rust toolchain still being installed and setup correctly in the system and any other required dependencies. If you have made changes to your system and need to revisit the setup instructions, check our install document ",(0,i.jsx)(n.a,{href:"/docs/node/install",children:"here"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["First, switch the user and change directory to the Lightning directory in your file system as described in ",(0,i.jsx)(n.a,{href:"#switch-to-installer-username",children:"switch to installer username"})," ",(0,i.jsx)(n.a,{href:"#change-directory-to-the-source-code",children:"change directory to the source code"})," sections."]}),"\n",(0,i.jsx)(n.p,{children:"Recall the command from our install document or getting started guide? As you probably guessed, you need to execute the rust cargo build command. But firstly, we are going to clean and update the Rust package manager, as follows:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"cargo clean\ncargo update\n"})}),"\n",(0,i.jsx)(n.p,{children:"Next, execute the build command to compile the Fleek Network Lightning CLI binary."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"cargo +stable install --locked --path core/cli\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"The build command uses the Rust compiler, which might take a while depending on how speedy the host machine is capable."})}),"\n",(0,i.jsx)(n.p,{children:"Once the Rust compiler completes, the generated binary will be available in the source code project directory."}),"\n",(0,i.jsxs)(n.p,{children:["If you have stick with the default recommendation, that'll be at ",(0,i.jsx)(n.code,{children:"~/.cargo/bin/lightning-node"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"checkup-the-symlink-setup",children:"Checkup the symlink setup"}),"\n",(0,i.jsxs)(n.p,{children:["During the original install and setup process, a symbolic link (symlink) was created linking the generated binary file located in ",(0,i.jsx)(n.code,{children:"~/.cargo/bin/lightning-node"})," to ",(0,i.jsx)(n.code,{children:"/usr/local/bin/lgtn"}),". By placing the symlink in the default installation location of the user, the executable application is available globally as ",(0,i.jsx)(n.code,{children:"lgtn"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"You can see the full absolute path of the symlink and verify if setup correctly by running:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"readlink -f <SYMLINK-NAME>\n"})}),"\n",(0,i.jsxs)(n.p,{children:["If you have followed the recommended name, the symbolic link should be called ",(0,i.jsx)(n.code,{children:"lgtn"}),", short version for ",(0,i.jsx)(n.code,{children:"lightning"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"readlink -f lgtn\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Here's an example where we find the symlink ",(0,i.jsx)(n.code,{children:"lgtn"})," pointing to the absolute path where our source code and originated built binary is located, as described in the ",(0,i.jsx)(n.a,{href:"#build-the-binary-from-the-source-code",children:"build the binary from the source code"})," section."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"/home/<USERNAME>/.cargo/bin/lightning-node\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Alternatively, you can use the ",(0,i.jsx)(n.code,{children:"ls"})," command to identify the symlink."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"ls -la $(which lgtn)\n"})}),"\n",(0,i.jsxs)(n.p,{children:["If you find an error, it's very likely that a symlink is not setup. You can revisit the ",(0,i.jsx)(n.a,{href:"/docs/node/install",children:"installation"})," to learn, or execute the command to link the build binary to the user default install location:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:'sudo ln -s "~/.cargo/bin/lightning-node" /usr/local/bin/lgtn\n'})}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["Make sure that the paths provided to the command ",(0,i.jsx)(n.code,{children:"ln"})," are correct. If you are using customized pathnames or switched to a different username other than the one used for installation it has to change accordingly."]})}),"\n",(0,i.jsx)(n.h2,{id:"systemd-service",children:"Systemd service"}),"\n",(0,i.jsx)(n.p,{children:"It's highly recommended to use systemd to manage the Fleek Network service for node operators. Systemd is a system and service manager for Linux operating systems that provides a consistent way to manage system services across various distributions."}),"\n",(0,i.jsx)(n.h3,{id:"verify-the-setup",children:"Verify the setup"}),"\n",(0,i.jsxs)(n.p,{children:["The recommended setup is to wrap the Lightning binary process as a Systemd service, as instructed in the ",(0,i.jsx)(n.a,{href:"/docs/node/install",children:"install"})," section."]}),"\n",(0,i.jsxs)(n.p,{children:["If you have followed the recommendations, you should have the service file called ",(0,i.jsx)(n.code,{children:"ligthning.service"})," in the path ",(0,i.jsx)(n.code,{children:"/etc/systemd/system/lightning.service"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["The content of ",(0,i.jsx)(n.code,{children:"lightning.service"})," should have some or more of the following properties and values:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"[Unit]\nDescription=Fleek Network Node lightning service\n\n[Service]\nType=simple\nMemoryHigh=32G\nRestartSec=15s\nRestart=always\nExecStart=lgtn -c /home/lgtn/.lightning/config.toml -vv run\nStandardOutput=append:/var/log/lightning/output.log\nStandardError=append:/var/log/lightning/diagnostic.log\nEnvironment=TMPDIR=/var/tmp\n\n[Install]\nWantedBy=multi-user.target\n"})}),"\n",(0,i.jsx)(n.p,{children:"Every time the file is modified, the Systemd process should be reloaded. You can do this by executing:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"sudo systemctl daemon-reload\n"})}),"\n",(0,i.jsxs)(n.p,{children:["To learn more about how to create a Systemd service read the ",(0,i.jsx)(n.a,{href:"/docs/node/install#manual-installation",children:"manual installation"})," document that illustrates the steps required in greater detail."]}),"\n",(0,i.jsx)(n.h3,{id:"launching-the-node-as-a-systemd-service",children:"Launching the node as a systemd service"}),"\n",(0,i.jsx)(n.p,{children:"After completing all the steps and checkups mentioned throughout the guide, you should have the Fleek Network Lightning Service ready to go."}),"\n",(0,i.jsx)(n.p,{children:"To launch the service, execute the following command:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"sudo systemctl start lightning.service\n"})}),"\n",(0,i.jsxs)(n.p,{children:["To learn more about how to use Systemctl to manage the Lightning service, read the document ",(0,i.jsx)(n.a,{href:"/docs/node/install#use-systemctl-to-manage-systemd-service",children:"here"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"health-check",children:"Health check"}),"\n",(0,i.jsx)(n.p,{children:"First, complete all the steps and checkups mentioned throught the guide and once the Node process is running perform a health check."}),"\n",(0,i.jsxs)(n.p,{children:["To run a quick health checkup, send a GET request to ",(0,i.jsx)(n.code,{children:"/health"})," endpoint of the RPC on ",(0,i.jsx)(n.a,{href:"/docs/node/requirements#ports",children:"port"})," 4230."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:'curl -w "\\n" localhost:4230/health\n'})}),"\n",(0,i.jsxs)(n.p,{children:["If successful, you should get the response ",(0,i.jsx)(n.code,{children:"running and staked"}),", as follows:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"running and staked\n"})}),"\n",(0,i.jsxs)(n.p,{children:["If you'd like to learn more about health check, visit the section ",(0,i.jsx)(n.a,{href:"/docs/node/health-check",children:"health check"})," of our documentation."]}),"\n",(0,i.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,i.jsx)(n.p,{children:"The Fleek Network's Ursa CLI is in constant development, there are frequent changes that can introduce features, fixes, and performance improvements, but also breaking changes that in some cases require you to add, including new libraries or packages in your operating system."}),"\n",(0,i.jsx)(n.p,{children:"In the current phase of development, a proper software release cycle for the updates is still in development, thus we pick changes from the source repository to build the Lightning application."}),"\n",(0,i.jsx)(n.p,{children:"We have looked into how to pull the changes via Git, and discussed that contributions can introduce new requirements to the host operating system that leads to updates or changes in the documentation\u2013mentioning how hard it is to keep in sync. Explained how to look into the contributions to understand the nature of the change and get hints about new features."}),"\n",(0,i.jsx)(n.p,{children:"To complete, provided a step-by-step walkthrough the installation and setup process for the Fleek Network Lightning CLI and Systemd service."}),"\n",(0,i.jsxs)(n.p,{children:["Discover more about the project by ",(0,i.jsx)(n.a,{href:"https://github.com/fleek-network/lightning",children:"watching/contributing on GitHub"}),", following us on ",(0,i.jsx)(n.a,{href:"https://twitter.com/fleek_net",children:"Twitter"}),", and joining ",(0,i.jsx)(n.a,{href:"https://discord.gg/fleek",children:"our community Discord"})," for any updates."]}),"\n",(0,i.jsx)(o.Z,{name:"Helder Oliveira",image:"https://github.com/heldrida.png",title:"Software Developer + DX",url:"https://github.com/heldrida"})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(g,{...e})}):g(e)}},3872:(e,n,t)=>{t.d(n,{Z:()=>s});t(7294);var i=t(5893);const s=e=>{let{image:n,name:t,title:s,url:o,communityMember:r=!1}=e;return(0,i.jsx)("section",{className:"author_card",children:(0,i.jsxs)("div",{children:[(0,i.jsx)("span",{className:"avatar",children:(0,i.jsx)("a",{href:o,target:"_blank",alt:t,children:(0,i.jsx)("img",{src:n,alt:t})})}),(0,i.jsxs)("div",{children:[(0,i.jsx)("span",{className:"name",children:(0,i.jsx)("a",{href:o,target:"_blank",alt:t,children:t})}),(0,i.jsx)("span",{className:"title",children:s}),(0,i.jsxs)("span",{className:"discord",children:[r?"Join our community on":"Got questions? Find us on"," ",(0,i.jsx)("a",{href:"https://discord.gg/fleek",target:"_blank",children:"discord!"})]})]})]})})}},1506:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/updating-lightning-e5c2633345bdcc0db715dd87b269b25b.png"},2913:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/updating-lightning-e5c2633345bdcc0db715dd87b269b25b.png"},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>r});var i=t(7294);const s={},o=i.createContext(s);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);