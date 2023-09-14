"use strict";(self.webpackChunkdocta=self.webpackChunkdocta||[]).push([[8273],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=p(n),c=a,m=h["".concat(l,".").concat(c)]||h[c]||u[c]||r;return n?i.createElement(m,o(o({ref:t},d),{},{components:n})):i.createElement(m,o({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[h]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<r;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1799:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var i=n(7462),a=(n(7294),n(3905)),r=n(3872);const o={hide_title:!0,title:"Managing the keystore",slug:"managing-the-keystore",date:new Date("2023-11-14T12:00:00.000Z"),description:"The following will guide you through some of the fundamentals to help understand how to manage the key store at the very basics, and help you persist the key store identity, in any supported system you\u2019re migrating to",category:"Tutorial",tags:["guide","keystore","public keys","private keys","keys"]},s=void 0,l={unversionedId:"Node Operators/managing-the-key-store",id:"Node Operators/managing-the-key-store",title:"Managing the keystore",description:"The following will guide you through some of the fundamentals to help understand how to manage the key store at the very basics, and help you persist the key store identity, in any supported system you\u2019re migrating to",source:"@site/guides/Node Operators/managing-the-key-store.md",sourceDirName:"Node Operators",slug:"/Node Operators/managing-the-keystore",permalink:"/guides/Node Operators/managing-the-keystore",draft:!1,editUrl:"https://github.com/fleek-network/fleek-network-docs/edit/main/guides/Node Operators/managing-the-key-store.md",tags:[{label:"guide",permalink:"/guides/tags/guide"},{label:"keystore",permalink:"/guides/tags/keystore"},{label:"public keys",permalink:"/guides/tags/public-keys"},{label:"private keys",permalink:"/guides/tags/private-keys"},{label:"keys",permalink:"/guides/tags/keys"}],version:"current",lastUpdatedAt:1694704786,formattedLastUpdatedAt:"Sep 14, 2023",frontMatter:{hide_title:!0,title:"Managing the keystore",slug:"managing-the-keystore",date:"2023-11-14T12:00:00.000Z",description:"The following will guide you through some of the fundamentals to help understand how to manage the key store at the very basics, and help you persist the key store identity, in any supported system you\u2019re migrating to",category:"Tutorial",tags:["guide","keystore","public keys","private keys","keys"]},sidebar:"defaultSidebar",previous:{title:"Getting Started",permalink:"/guides/Node Operators/getting-started"},next:{title:"Transfering setup ownership",permalink:"/guides/Node Operators/transfering-setup-ownership"}},p={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Pre-requisites",id:"pre-requisites",level:2},{value:"Configuration file",id:"configuration-file",level:2},{value:"Locating the file",id:"locating-the-file",level:3},{value:"Configuration sections",id:"configuration-sections",level:3},{value:"Type of keys",id:"type-of-keys",level:3},{value:"Key privacy",id:"key-privacy",level:3},{value:"Identity selection",id:"identity-selection",level:3},{value:"Backing up the keystore",id:"backing-up-the-keystore",level:2},{value:"Lower security",id:"lower-security",level:3},{value:"Higher security",id:"higher-security",level:3},{value:"Storage",id:"storage",level:3},{value:"Conclusion",id:"conclusion",level:2}],h={toc:d},u="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,i.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"Fleek Network incentivizes participation by rewarding its node providers. A node is identifiable by an identity, which the reward mechanism uses to identify the node to reward it."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"At time of writing the rewards mechanism hasn't yet been introduced, read the ",(0,a.kt)("a",{parentName:"p",href:"https://blog.fleek.network/post/fleek-network-testnet-plans"},"testnet plans")," to get a high level perspective over the plans. A token and economics paper should be released in the future.")),(0,a.kt)("p",null,"We'll use the term identity to describe the key store declared in the configuration, in our case ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Privacy-Enhanced_Mail"},"PEM")," files. The content of the PEM files and the file itself should be kept secret."),(0,a.kt)("p",null,"The key store is in the file system and the location is defined in the Fleek Network ",(0,a.kt)("inlineCode",{parentName:"p"},"~/.lightning/config.toml"),", as a private key stored in an identity named PEM file (by default ",(0,a.kt)("inlineCode",{parentName:"p"},"consensus.pem")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"node.pem"),"). It's essential to understand this, as you may want to copy the identity to a new server setup, to persist the identity accross to the new server setup."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Security is achieved by issuing users private cryptographic keys. Only the holder of the private key has access to sensitive information, such as an identity, which relates to reputation, rewards, etc. The security of the private key is the responsibility of the user. Unfortunately, Fleek Network is unable to help you regain access to your private key if you've lost or failed to secure it. The private keys are your responsibility.")),(0,a.kt)("p",null,"The following will guide you through some of the fundamentals to help understand how to manage the key store at the very basics, and help you persist the key store identity, in any ",(0,a.kt)("a",{parentName:"p",href:"/docs/node/requirements#server"},"supported system")," you're migrating to."),(0,a.kt)("h2",{id:"pre-requisites"},"Pre-requisites"),(0,a.kt)("p",null,"To follow the guide, you will need the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Familiarity with the command-line interface"),(0,a.kt)("li",{parentName:"ul"},"A basic understanding of ",(0,a.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Public-key_cryptography"},"how public key cryptography works"))),(0,a.kt)("h2",{id:"configuration-file"},"Configuration file"),(0,a.kt)("h3",{id:"locating-the-file"},"Locating the file"),(0,a.kt)("p",null,"The Lightning CLI has a configuration file in the home directory of the user, which by default is located in the path ",(0,a.kt)("inlineCode",{parentName:"p"},"$HOME/.lightning")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"~/.lightning")," under the name ",(0,a.kt)("inlineCode",{parentName:"p"},"config.toml"),". It's generally described as ",(0,a.kt)("inlineCode",{parentName:"p"},"~/.lightning/config.toml"),"."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"The tilde in ",(0,a.kt)("inlineCode",{parentName:"p"},"~/.lightning")," represents ",(0,a.kt)("inlineCode",{parentName:"p"},"$HOME")," which is simpler, but we'll use ",(0,a.kt)("inlineCode",{parentName:"p"},"$HOME")," to make it easy to follow.")),(0,a.kt)("p",null,"If you're following the install recommendations you should be logged in with a ",(0,a.kt)("strong",{parentName:"p"},"sudoer")," account. For our guide, let's imagine that the ",(0,a.kt)("strong",{parentName:"p"},"sudoer")," username we are logged in with is ",(0,a.kt)("strong",{parentName:"p"},"lgtn"),"."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"The word ",(0,a.kt)("strong",{parentName:"p"},"sudo"),' is the abbreviation of the term "super user do". As the name suggests, it is the privilege that a super user, such as an administrator has to do whatever it wants in the system. A super user can be an administrator, like the ',(0,a.kt)("strong",{parentName:"p"},"root")," or what we described here as a user in the group ",(0,a.kt)("strong",{parentName:"p"},"sudo")," aka ",(0,a.kt)("strong",{parentName:"p"},"sudoer"),".")),(0,a.kt)("p",null,"If you are logged in with a username, that'd be:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"/home/<USERNAME>/.lightning/config.toml\n")),(0,a.kt)("p",null,"For our example for user ",(0,a.kt)("inlineCode",{parentName:"p"},"lgtn")," that is:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"/home/lgtn/.lightning/config.toml\n")),(0,a.kt)("p",null,"If you log in with another user, let's say ",(0,a.kt)("inlineCode",{parentName:"p"},"fleek")," it'd be:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"/home/fleek/.lightning/config.toml\n")),(0,a.kt)("p",null,"At any time, you can check which user you are logged in with by running the command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"whoami\n")),(0,a.kt)("p",null,"Here's an example of our user ",(0,a.kt)("inlineCode",{parentName:"p"},"lgtn"),", which for the command above outputs:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"lgtn\n")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"To switch to a particular user, you can run the command ",(0,a.kt)("inlineCode",{parentName:"p"},"su <USERNAME>")," e.g. for the user ",(0,a.kt)("strong",{parentName:"p"},"lgtn")," we would execute the command ",(0,a.kt)("inlineCode",{parentName:"p"},"su lgtn"),".")),(0,a.kt)("p",null,"Now that you know where to locate the configuration file for any given user you are logged in with, learn about the ",(0,a.kt)("a",{parentName:"p",href:"#configuration-sections"},"Configuration sections"),"."),(0,a.kt)("h3",{id:"configuration-sections"},"Configuration sections"),(0,a.kt)("p",null,"The Fleek Network node configuration settings are located in the path ",(0,a.kt)("inlineCode",{parentName:"p"},"$HOME/.lightning/config.toml"),", and it's organized by configuration sections."),(0,a.kt)("p",null,"At the time of writing, we have a TOML file with sections. Here are some examples amongst others:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"application"),(0,a.kt)("li",{parentName:"ul"},"origin-ipfs"),(0,a.kt)("li",{parentName:"ul"},"rpc"),(0,a.kt)("li",{parentName:"ul"},"signer")),(0,a.kt)("p",null,"Each of the sections holds several property names and values. If you are accustomed to the ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/JSON"},"JSON")," or ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/YAML"},"YAML")," formats, you'll find the TOML format a bit similar (if you'd like to learn more about the TOML file format, read about it ",(0,a.kt)("a",{parentName:"p",href:"https://toml.io/en/"},"here"),")."),(0,a.kt)("p",null,"By default and at time of writting the Lightning CLI configuration file (config.toml) is similar to:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'[BLANK]\n\n[application]\ndb_path = "/home/lgtn/.lightning/data/app_db"\nmode = "Prod"\nstorage = "RocksDb"\ntestnet = true\n\n[blockserver]\naddress = "0.0.0.0:4211"\n\n[broadcast]\naddress = "0.0.0.0:4200"\n\n[consensus]\nstore_path = "/home/lgtn/.lightning/data/narwhal_store"\n\n[dht]\naddress = "0.0.0.0:8101"\nbootstrappers = []\n\n[fetcher]\n\n[fsstore]\nroot = "/home/lgtn/.lightning/blockstore"\n\n[[handshake.transport]]\nsignal_address = "0.0.0.0:4210"\ntype = "WebRTC"\n\n[[handshake.worker]]\ntype = "AsyncWorker"\n\n[[handshake.worker]]\ntype = "AsyncWorker"\n\n[[handshake.worker]]\ntype = "AsyncWorker"\n\n[[handshake.worker]]\ntype = "AsyncWorker"\n\n[[origin-ipfs.gateways]]\nauthority = "ipfs.io"\nprotocol = "Https"\n\n[[origin-ipfs.gateways]]\nauthority = "fleek.ipfs.io"\nprotocol = "Https"\n\n[[origin-ipfs.gateways]]\nauthority = "ipfs.runfission.com"\nprotocol = "Https"\n\n[rep-collector]\nreporter_buffer_size = 5\n\n[resolver]\nstore_path = "/home/lgtn/.lightning/data/resolver_store"\n\n[rpc]\naddr = "0.0.0.0"\nport = 4069\n\n[service-executor]\nservices = [0, 1]\n\n[signer]\nconsensus_key_path = "/home/lgtn/.lightning/keystore/consensus.pem"\nnode_key_path = "/home/lgtn/.lightning/keystore/node.pem"\n\n[topology]\ntesting_min_nodes = 9\ntesting_target_k = 8\n')),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Beware that the configuration file might look a bit different depending on the version you're running and the current development features in place by the Fleek Network core team. You shouldn't copy the example above and replace with yours, as this only servers for illustrative purposes.")),(0,a.kt)("p",null,"Some advanced use cases might require dealing with the host and port number binding, depending on the service provider's needs and customization. We'll keep things simple and assume the default settings."),(0,a.kt)("p",null,"In this guide, we are interested in the ",(0,a.kt)("inlineCode",{parentName:"p"},"[signer]")," section settings for the ",(0,a.kt)("inlineCode",{parentName:"p"},"consensus_key_path")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"node_key_path")," which by default is set to ",(0,a.kt)("inlineCode",{parentName:"p"},"~/.lightning/keystore"),"."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"The identity is a text description for the Keystore and at the time of writing we have not yet implemented multiple identity management via the CLI. Thereupon, the identity value serves to find the filename match in the ",(0,a.kt)("inlineCode",{parentName:"p"},"keystore_path"),". This might change as we progress with development. Check the ",(0,a.kt)("a",{parentName:"p",href:"#identity-selection"},"Identity selection")," to learn more about it!")),(0,a.kt)("h3",{id:"type-of-keys"},"Type of keys"),(0,a.kt)("p",null,"There are three types of keys related to the identity of a node and the account ownership. The keys are based in public-key cryptography, or asymmetric cryptography where each key pair consists of a public key and a corresponding private key. The keys are described in the section ",(0,a.kt)("a",{parentName:"p",href:"docs/learn/the-network/#identity-on-the-fleek-network"},"identity on the Fleek Network")," as follows:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"A Node key (ConsensusPublicKey) is ",(0,a.kt)("a",{parentName:"p",href:"https://electriccoin.co/blog/new-snark-curve/"},"BLS12-381")," which facilitates the consensus algorithm or persistence of state, resilience and fault tolerance. Has multi-signature support, the ability to aggregate many signatures into one used for consensus committee when signing certificates")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"A Node Networking key (NodePublicKey) is ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/EdDSA"},"Ed25519")," used for the speed and performance of the network communications")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Account Owner keys are based on ",(0,a.kt)("a",{parentName:"p",href:"https://www.secg.org/sec2-v2.pdf"},"secp256k1"),", which corresponds to an Ethereum Address"))),(0,a.kt)("p",null,"For instance, a public key is open to anybody to see and it represents a unique node identifier in the Fleek Network, a bit like a passport number. On the other hand, the private key is secret and the operator is responsible to store it privately."),(0,a.kt)("p",null,"The Fleek Network relies on cryptography, thus the Fleek Network team and anybody can access, compromise or manipulate the secrets of an identity. On the other hand, the public key can be used by anyone, Fleek Network included, to identify a node or send rewards to the address without jeopardizing identity security."),(0,a.kt)("p",null,"To learn more about the identities on the Fleek Network ",(0,a.kt)("a",{parentName:"p",href:"docs/learn/the-network/#identity-on-the-fleek-network"},"here"),"."),(0,a.kt)("h3",{id:"key-privacy"},"Key privacy"),(0,a.kt)("p",null,"If you don\u2019t keep your private keys secret, you'll have your node compromised."),(0,a.kt)("p",null,"Here are a few examples of what you should not do:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Share the ",(0,a.kt)("inlineCode",{parentName:"li"},"$HOME/.lightning/keystore")," directory file content publicly"),(0,a.kt)("li",{parentName:"ul"},"Track the ",(0,a.kt)("inlineCode",{parentName:"li"},"$HOME/.lightning/keystore")," directory files in a version control repository e.g. git"),(0,a.kt)("li",{parentName:"ul"},'Have poor "rights" permissions in UNIX systems e.g. everyone can read, delete, modify ',(0,a.kt)("inlineCode",{parentName:"li"},"$HOME/.lightning")),(0,a.kt)("li",{parentName:"ul"},"Allow anyone to access the node provider physically without any access control to the operating and file systems e.g. a VPS provider"),(0,a.kt)("li",{parentName:"ul"},"Get rid of a hard drive unformatted or blind erased by selling to somebody or dumping in the bin, which contains ",(0,a.kt)("inlineCode",{parentName:"li"},"$HOME/.lightning/keystore"))),(0,a.kt)("p",null,"There are many other ways of getting compromised, but hopefully, the ones put above give you a good starter into the subject."),(0,a.kt)("p",null,"Remember, the node provider is the only one responsible when managing the key store. Neither Fleek Network nor the most sophisticated AI system presently can compromise the cryptography in use to help you out. You are fully responsible for securing and retaining your private keys."),(0,a.kt)("h3",{id:"identity-selection"},"Identity selection"),(0,a.kt)("p",null,"Multiple identity management is yet to be implemented but in any case, some users might find it trivial to keep multiple identities and switch between them referencing them by name. The following section is not advocating this approach but sharing some approaches that can help certain use-cases."),(0,a.kt)("p",null,"Let's suppose that we've recently moved to a new server setup and copied our previous server keystore keys as ",(0,a.kt)("inlineCode",{parentName:"p"},"consensus.pem")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"node.pem")," and renamed the ",(0,a.kt)("inlineCode",{parentName:"p"},"$HOME/.lightning/keystore/*.pem")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"$HOME/.lightning/keystore/new-*.pem"),"."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"We are using a wildcard ",(0,a.kt)("inlineCode",{parentName:"p"},"*")," to reduce verbosity. The wildcard means as replacement for all the filenames encountered in the path and extension without having to name them individually as we know they are ",(0,a.kt)("inlineCode",{parentName:"p"},"consensus.pem")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"node.pem"),".")),(0,a.kt)("p",null,"To illustrate this scenario, here's an example of how our ",(0,a.kt)("inlineCode",{parentName:"p"},"$HOME/.lightning/keystore")," directory could look like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},".\n\u251c\u2500\u2500 new-consensus.pem\n\u251c\u2500\u2500 new-node.pem\n\u2514\u2500\u2500 old-consensus.pem\n\u2514\u2500\u2500 old-node.pem\n\n0 directories, 4 file\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"old-*.pem")," files are the original key store and ",(0,a.kt)("inlineCode",{parentName:"p"},"new-*.pem")," could correspond to the new identity created while setting up the node in the new server."),(0,a.kt)("p",null,"Since we have ",(0,a.kt)("inlineCode",{parentName:"p"},"[signer]")," set to the default values, in particular:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-toml"},'[signer]\nconsensus_key_path = "/home/lgtn/.lightning/keystore/consensus.pem"\nnode_key_path = "/home/lgtn/.lightning/keystore/node.pem"\n')),(0,a.kt)("p",null,"We'd be required to change and switch to the preferred keys. The identity is switch to the provided values once the node is restarted. Thus, we can switch to any identity by changing the ",(0,a.kt)("inlineCode",{parentName:"p"},"[signer]")," ",(0,a.kt)("inlineCode",{parentName:"p"},"consensus_key_path")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"node_key_path")," pathname values anytime as long we restart the server successfully."),(0,a.kt)("p",null,"To verify which keys are loaded by the Lightning CLI run the command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"lgtn keys show\n")),(0,a.kt)("p",null,"You'd find the public keys in the output, which can be used for comparision and should be different everytime the configuration changes and reloaded. Here's an example of the output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"Node Public Key: RwPpr35H5AAfWwSDFxwYuJv5TA8PWUd2pdBg+UKsORc=\nConsensus Public Key: s36g09qQzaaOJxi0UZDRCXj3HUUWjaGiYrQV6Ylo9Ih6jMvrnxM5s1OpBnsEj5R1AVYcuxlnVR+oyEjgJ3WpI5LOHSN1Q6Zur33vka3IachBEIKIbsiXMJW16vu4n4bG\n")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"The PEM files can be named as you wish, but by default we like to keep it sound to avoid confusion and make it as clear as possible.")),(0,a.kt)("h2",{id:"backing-up-the-keystore"},"Backing up the keystore"),(0,a.kt)("p",null,"When dealing with Fleek Network it's crucial to always be aware of the identity. You should backup private keys in case the unexpected happens, as it's impossible to recover the identity in any other way, including the core team, any other person or system."),(0,a.kt)("p",null,"Backing up your keystore pem files are crucial to ensure the safety and accessibility of your identity on the Fleek Network. For example, if your ",(0,a.kt)("inlineCode",{parentName:"p"},"$HOME/.lightning")," is deleted you'll still be able to restore it if you have backed it up properly."),(0,a.kt)("p",null,"There are many ways to make identity backups, each with its own benefits and drawbacks. At risk of oversimplifying, we'll focus on a simple manual approach to expose some of the principles you should be have awareness."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"The security is never stronger than its weakest link, and it is very likely that the weakest link is not the method itself. It's pointless to encrypt the backup archive with sophisticated methods when the passphrase is weak or of an easy guess.")),(0,a.kt)("p",null,"None of the methods described here are being endorsed by the Fleek Network team use the knowledge provided here for educational purposes only and at your own risk."),(0,a.kt)("h3",{id:"lower-security"},"Lower security"),(0,a.kt)("p",null,"If you opt for the lowest level of security, you can use zip and unzip. The man page of zip described the encryption algorithm used to be weaker than PGP."),(0,a.kt)("p",null,"To zip and encrypto the ",(0,a.kt)("inlineCode",{parentName:"p"},"$HOME/.lightning/keystore")," directory run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"# It'll prompt for password (remember)\nzip --encrypt -r keystore.zip.enc $HOME/.lightning/keystore\n")),(0,a.kt)("p",null,"To unzip and decrypt the ",(0,a.kt)("inlineCode",{parentName:"p"},"keystore.zip.enc"),", you'd run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"# It'll prompt for password (recall)\nunzip keystore.zip.enc -d $HOME/.lightning/keystore\n")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"We provide the unzip destiny target to the flag ",(0,a.kt)("inlineCode",{parentName:"p"},"-d"),". The unzip process outputs the files onto the desired location ",(0,a.kt)("inlineCode",{parentName:"p"},"$HOME/.lightning/keystore"),", thus overriding any contents. If you have any files in the destiny target directory it'll be overriden, effectively replacing with the output of the unzipped directory content, so make sure you backup any files as required.")),(0,a.kt)("h3",{id:"higher-security"},"Higher security"),(0,a.kt)("p",null,"Create a ",(0,a.kt)("inlineCode",{parentName:"p"},"Tar")," archive, which will contain the target directory, files and the Tar stores all of the relative paths in the tarball itself."),(0,a.kt)("p",null,"Create a ",(0,a.kt)("inlineCode",{parentName:"p"},"tarbar")," by executing:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'tar -cf "keystore.tar" $HOME/.lightning/keystore\n')),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"keystore.tar")," should be in the current work directory."),(0,a.kt)("p",null,"Use ",(0,a.kt)("inlineCode",{parentName:"p"},"gpg")," with the ",(0,a.kt)("a",{parentName:"p",href:"ttps://www.gnupg.org/gph/en/manual/x110.html"},"symmetric option"),", it creates the keys for that file and request a password to protect them. If you are familiar with assymetric ",(0,a.kt)("inlineCode",{parentName:"p"},"gpg"),", it's similar but it's not signed with your public key or such."),(0,a.kt)("p",null,"The encryption command is:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"sudo gpg -a --symmetric --cipher-algo AES256 keystore.tar\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"keystore.tar.asc")," should be in the current work directory."),(0,a.kt)("p",null,"To decrypt the ",(0,a.kt)("inlineCode",{parentName:"p"},"keystore.tar.asc")," file, enter:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"sudo gpg -a --output keystore.tar --decrypt keystore.tar.asc\n")),(0,a.kt)("p",null,"To extract the ",(0,a.kt)("inlineCode",{parentName:"p"},"keystore.tar")," is simple, but be aware that it unarchives with the original directory structure, which might be a bit confusing. So, we'll create a new temporary directory for our example that will use to extract to."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"mkdir $HOME/tar_keystore_extract\n")),(0,a.kt)("p",null,"Now, run the command to extract to the target directory, as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"tar -xf keystore.tar -C $HOME/tar_keystore_extract\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"/home/<username>/.lightning/keystore")," should be in the ",(0,a.kt)("inlineCode",{parentName:"p"},"tar_keystore_extract")," directory where you'll find the PEM files."),(0,a.kt)("h3",{id:"storage"},"Storage"),(0,a.kt)("p",null,"The backup archive should only be accessible by yourself. If you decided to store it in a cloud storage provider, be aware of increased security risks. Cloud storage is convenient, but it ultimately puts data into the hands of others. If you're not particularly concerned, or have confidence about the encryption of the files, then that's at your own risk. But it's recommended to store in a physical hard drive that remains disconnected from computers and network devices."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"If you use cloud storage to store your sensitive data, encryption should be your first line of defense. Encrypting files before uploading them to the cloud is crucial to reduce others from accessing information without your permissions and knowledge.")),(0,a.kt)("p",null,"Remember that the security of the private key is the responsibility of the user. Unfortunately, the Fleek Network team and any others are unable to help regain access to private key if lost or failed to secure them. The private keys are the user responsibility. The Fleek Network team doesn't endorse any methods of encryption and storage, the methods described here are for educational purposes only."),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"We've walked through most basics of where the configuration file is located, the configuration settings we use to set up and run the node, the different configuration sections we have, and most importantly the identity section."),(0,a.kt)("p",null,"Additionally, a brief guide on the ",(0,a.kt)("a",{parentName:"p",href:"#identity"},"identity"),", more specifically an introduction to the ",(0,a.kt)("a",{parentName:"p",href:"#type-of-keys"},"type of keys")," and ",(0,a.kt)("a",{parentName:"p",href:"#key-privacy"},"key privacy"),", which we find important to understand for anyone seriously interested in running a node by hinting into some system administration and security principles."),(0,a.kt)("p",null,"Separatily, at risk of oversimpliying provided an brief introduction into the backup of the keystore directory."),(0,a.kt)("p",null,"In the future, we'll introduce more advanced topics that will help you improve the knowledge you get from this, but we are glad that you followed this guide and got some comprehension to help you manage the key store."),(0,a.kt)("p",null,"While we do our best to provide the clearest instructions, there's always space for improvement, therefore feel free to make any contributions by messaging us on our ",(0,a.kt)("a",{parentName:"p",href:"https://discord.gg/fleekxyz"},"Discord")," or by opening a ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/fleek-network"},"PR")," in any of our repositories."),(0,a.kt)("p",null,"Discover more about the project by ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/fleek-network/lightning"},"watching/contributing on Github"),", following us on ",(0,a.kt)("a",{parentName:"p",href:"https://twitter.com/fleek_net"},"Twitter"),", and joining ",(0,a.kt)("a",{parentName:"p",href:"https://discord.gg/fleekxyz"},"our community Discord")," for all the best updates!"),(0,a.kt)(r.Z,{name:"Helder Oliveira",image:"https://github.com/heldrida.png",title:"Software Developer + DX",url:"https://github.com/heldrida",mdxType:"Author"}))}c.isMDXComponent=!0},3872:(e,t,n)=>{n.d(t,{Z:()=>a});var i=n(7294);const a=e=>{let{image:t,name:n,title:a,url:r,communityMember:o=!1}=e;return i.createElement("section",{className:"author_card"},i.createElement("div",null,i.createElement("span",{className:"avatar"},i.createElement("a",{href:r,target:"_blank",alt:n},i.createElement("img",{src:t,alt:n}))),i.createElement("div",null,i.createElement("span",{className:"name"},i.createElement("a",{href:r,target:"_blank",alt:n},n)),i.createElement("span",{className:"title"},a),i.createElement("span",{className:"discord"},o?"Join our community on":"Got questions? Find us on"," ",i.createElement("a",{href:"https://discord.gg/fleekxyz",target:"_blank"},"discord!")))))}}}]);