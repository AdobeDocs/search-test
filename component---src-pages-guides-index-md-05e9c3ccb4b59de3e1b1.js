"use strict";(self.webpackChunksearch_test=self.webpackChunksearch_test||[]).push([[8450],{65319:function(e,t,o){o.r(t),o.d(t,{_frontmatter:function(){return l},default:function(){return u}});var n=o(22122),a=o(19756),i=(o(15007),o(64983)),s=o(21347),r=["components"],l={},p={_frontmatter:l},d=s.Z;function u(e){var t=e.components,o=(0,a.Z)(e,r);return(0,i.mdx)(d,(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"getting-started-with-uxp-for-photoshop"},"Getting Started with UXP for Photoshop"),(0,i.mdx)("h2",{id:"welcome"},"Welcome!"),(0,i.mdx)("p",null,"Welcome to the world of Adobe Photoshop and UXP (",(0,i.mdx)("strong",{parentName:"p"},"U"),"nified ",(0,i.mdx)("strong",{parentName:"p"},"E"),"tensibility ",(0,i.mdx)("strong",{parentName:"p"},"P"),"latform)! UXP is the modern way to create plugins for Adobe Creative Cloud products, including Photoshop. "),(0,i.mdx)("p",null,"There are a great many things you can do with UXP plugins to extend and enhance Photoshop, to integrate Photoshop with other services (either internal or on the Internet), and to automate workflows that would otherwise require tedious manual effort by a Photoshop user."),(0,i.mdx)("p",null,"UXP plugins can be composed of:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Zero or more ",(0,i.mdx)("inlineCode",{parentName:"li"},"panels")," (windows that persist in the host application)"),(0,i.mdx)("li",{parentName:"ul"},"Zero or more ",(0,i.mdx)("inlineCode",{parentName:"li"},"dialogs")," (a modal window that closes when the user pushes a button)"),(0,i.mdx)("li",{parentName:"ul"},"Zero or more ",(0,i.mdx)("inlineCode",{parentName:"li"},"direct-action commands"),", which have no interface whatsoever")),(0,i.mdx)("p",null,"Plugins can be used for quick workflow-like actions (say, nudge a layer by a configured # of pixels); in that case, perhaps no UI is required (unless an error occurs). A plugin could just be something that could mass rename layers -- in that case, you may want to show a dialog to allow the renaming to be configured, but that UI is not persistent (it goes away when the action is completed). Or, a plugin could have a complex panel UI that reacts to changes in the document (selection changes, tool changes, and so on)."),(0,i.mdx)("p",null,"OR, a plugin can provide all of those things."),(0,i.mdx)("h2",{id:"types-of-plugins"},"Types of Plugins"),(0,i.mdx)("p",null,'Direct-action (aka "headless") plugins are the easiest to write, followed by plugins with modal dialogs. Panels are like writing a full app: often you have to worry about state management, HTML/CSS issues, and so forth.'),(0,i.mdx)("p",null,"A plugin's dialogs and panels contain user interface elements (text fields, buttons, dropdowns, and so on) as well as code that drives Photoshop to do things such as create and modify documents, report on document properties, read and write files, and much more."),(0,i.mdx)("p",null,"As of this writing, UXP is supported in Adobe XD and Adobe Photoshop, with support for more Creative Cloud applications in the pipeline. The long-term goal is to integrate UXP with most Creative Cloud applications, so that developers will have one common kit that works across platforms and applications. Learning UXP now will prepare you to use it with other Creative Cloud Applications."),(0,i.mdx)("p",null,"You'll find everything you need to get started with UXP for Photoshop on this site."),(0,i.mdx)("h2",{id:"other-ways-to-extend-photoshop"},"Other ways to extend Photoshop"),(0,i.mdx)("p",null,"Although UXP is new to Photoshop, it is the future for plugin development for Photoshop and other Creative Cloud applications. But that does ",(0,i.mdx)("em",{parentName:"p"},"not")," mean that other ways of extending Photoshop are going away in the near future."),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"https://www.adobe.com/devnet/photoshop/scripting.html"},"ExtendScript")," has been around for a long time, and will continue to function as UXP evolves. Even though the ExtendScript Toolkit IDE is no longer maintained (due to its 32-bit nature), you can develope ExtendScripts using the ",(0,i.mdx)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=Adobe.extendscript-debug"},"Visual Studio plugin for ExtendScript"),"."),(0,i.mdx)("li",{parentName:"ul"},"The ",(0,i.mdx)("a",{parentName:"li",href:"https://www.adobe.io/apis/creativecloud/cep.html"},"Common Extensibility Platform"),", introduced as a way of extending Creative Suite applications, will also continue to be supported."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"https://www.adobe.com/devnet/photoshop/sdk.html"},"Plugins using native C++")," will also continue to function, although the use case for this type of add-on continues to diminish as the scripting capabilities of Photoshop grow.")),(0,i.mdx)("h2",{id:"the-uxp-technology-stack"},"The UXP Technology Stack"),(0,i.mdx)("p",null,"If you're coming to Photoshop development from Adobe XD, you might know all you need to know about UXP. But if you're brand-new to UXP, read on to learn how to build UXP plugins for Photoshop."),(0,i.mdx)("p",null,"UXP provides a comprehensive extensibility solution, turning JavaScript and HTML markup into controls in native application windows. Unlike older CEP (Common Extensibility Platform) plugins, UXP plugins run within the same process as the host application, with their UI in its own non-blocking thread."),(0,i.mdx)("p",null,"Also unlike CEP plugins, UXP plugins communicate natively with the host application; there is no boundary between JavaScript and ExtendScript that requires passing strings back and forth."),(0,i.mdx)("p",null,"UXP plugins are built using JavaScript (aka ECMAScript), the scripting language of the Web. All but the simplest plugins also use HTML and CSS. The JavaScript engine is ",(0,i.mdx)("a",{parentName:"p",href:"https://v8.dev"},"V8"),", a modern implementation used in many popular browsers. This is in contrast to the engine used in ExtendScript, which is ECMA Edition 3 (about 20 years old). UXP supports all of ES5 and most of ES6 features, including arrow functions, async/await, etc."),(0,i.mdx)("p",null,"Basically, a UXP plugin is running inside a pseudo-browser window, inside the host application (e.g., Photoshop). Even though UXP uses HTML, CSS, and JavaScript, its underlying engine is ",(0,i.mdx)("em",{parentName:"p"},"not")," a full browser (unlike Chromium, which is used in CEP). This means that some HTML and CSS features that you may be used to in web development and CEP are not supported in UXP. Additionally, some JavasScript libraries and many JavaScript frameworks are not supported. An overview of what's supported and what's not in UXP is ",(0,i.mdx)("a",{parentName:"p",href:"../guides/uxp_guide/unsupported/"},"here"),". That page will change as UXP matures and additional functionality is added to its browser, so you might want to bookmark it."),(0,i.mdx)("p",null,"Since UXP is a cross-application cross-platform technology, its API documentation starts ",(0,i.mdx)("a",{parentName:"p",href:"/search-test/uxp/reference-js/"},"here"),", and it applies to all Adobe applications that support UXP. Documentation for Photoshop-specific features that are exposed by UXP starts ",(0,i.mdx)("a",{parentName:"p",href:"../guides/ps_basics/"},"here"),"."),(0,i.mdx)("h2",{id:"key-uxp-features"},"Key UXP Features"),(0,i.mdx)("p",null,"Independent of the host application API, UXP provides features of its own, including:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"File access - UXP can read and write files and folders in the user's filesystem. File accesses outside of the plugin's root folder, the plugin's data folder, and a plugin temporary folder require the user's permission. File I/O is discussed ",(0,i.mdx)("a",{parentName:"p",href:"./uxp_guide/uxp-misc/file-access/"},"here"),". ")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"Network access - UXP supports XMLHttpRequest, WebSockets, and Fetch APIs. Network access is discussed ",(0,i.mdx)("a",{parentName:"p",href:"./uxp_guide/uxp-misc/network-io/"},"here"),".")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"HTML and CSS - UXP supports a subset of HTML and CSS needed to develop plugin UIs.")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"Spectrum CSS - UXP plugins can use platform-native HTML components such as buttons, input fields, etc. But a plugin can also use Spectrum CSS components.")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"Debugging - UXP plugins can be debugged using the UXP Developer Tookit, ",(0,i.mdx)("a",{parentName:"p",href:"./uxp-developer-tool/"},"described here"),".")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"Localization\nIf you want your plugins to be used internationally, you should localize them. ",(0,i.mdx)("a",{parentName:"p",href:"./uxp_guide/uxp-misc/localization-and-platforms/"},"Here's how to localize your plugins"),".")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"Flyout menus\nIf you're writing a panel-based plugin, you have access to the flyout menu (shown at the top right of every panel). Flyout menus are ",(0,i.mdx)("a",{parentName:"p",href:"./uxp_guide/uxp-misc/flyout-menus/"},"described here"),"."))),(0,i.mdx)("h2",{id:"setting-up-for-uxp-development"},"Setting Up for UXP Development"),(0,i.mdx)("p",null,"The first thing you'll want to do to start developing UXP plugins is to understand the development toolchain. ",(0,i.mdx)("a",{parentName:"p",href:"./uxp_guide/uxp-toolchain/"},"This page")," explains describes the tools you'll need.."))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-index-md-05e9c3ccb4b59de3e1b1.js.map