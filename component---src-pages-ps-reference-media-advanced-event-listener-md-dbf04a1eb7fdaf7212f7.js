"use strict";(self.webpackChunksearch_test=self.webpackChunksearch_test||[]).push([[6408],{48572:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return l},default:function(){return p}});var o=n(22122),i=n(19756),a=(n(15007),n(64983)),r=n(21347),s=["components"],l={},u={_frontmatter:l},c=r.Z;function p(e){var t=e.components,n=(0,i.Z)(e,s);return(0,a.mdx)(c,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("h1",{id:"event-listeners"},"Event Listeners"),(0,a.mdx)("p",null,"Photoshop emits various event notifications when a user is actively interacting with the application."),(0,a.mdx)("p",null,"During development of your plugin, you can use ",(0,a.mdx)("a",{parentName:"p",href:"../../../classes/photoshop/#eventnotifier"},"app.eventNotifier")," to enumerate all the event types you'd like to be notified about."),(0,a.mdx)("p",null,"In a production environment, this 'catch-all' notifier is unavailable to you. Once you've created a list of key events you'd like to be notified of, use the following action API to register a listener:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},'var listener = (e,d) => { console.log(e,d); }\nrequire(\'photoshop\').action.addNotificationListener([\n    {\n        event: "select"\n    },\n    {\n        event: "open"\n    } // any other events...\n], listener);\n')))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-ps-reference-media-advanced-event-listener-md-dbf04a1eb7fdaf7212f7.js.map