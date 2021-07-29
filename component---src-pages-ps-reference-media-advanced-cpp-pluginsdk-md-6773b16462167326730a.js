"use strict";(self.webpackChunksearch_test=self.webpackChunksearch_test||[]).push([[6037],{16485:function(e,n,s){s.r(n),s.d(n,{_frontmatter:function(){return l},default:function(){return p}});var i=s(22122),t=s(19756),o=(s(15007),s(64983)),a=s(21347),r=["components"],l={},d={_frontmatter:l},u=a.Z;function p(e){var n=e.components,s=(0,t.Z)(e,r);return(0,o.mdx)(u,(0,i.Z)({},d,s,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"c-to-uxp-communication"},"C++ to UXP Communication"),(0,o.mdx)("p",null,"For developers with the intent to utilize the C++ based plugin SDK in conjunction with a UXP based plugin, the C++ SDK now includes a method to communicate with its UXP counterpart. On C++ side, we use the component's plugin name property in the plugin resource to identify plugins, and on UXP side, we use the ",(0,o.mdx)("inlineCode",{parentName:"p"},"id")," field from the ",(0,o.mdx)("inlineCode",{parentName:"p"},"manifest.json")," file."),(0,o.mdx)("h1",{id:"piuxpsuite"},"PIUXPSuite"),(0,o.mdx)("p",null,"The PIUXPSuite communicates with UXP plugins using PIActionDescriptors. Use the ActionDescriptor suite as defined in the SDK's ",(0,o.mdx)("inlineCode",{parentName:"p"},"PIAction.h")," whenever using this suite. To start with, grab ",(0,o.mdx)("a",{parentName:"p",href:"/search-test/78adbbf874cb22c450c9e6222dd9e0fc/PIUXPSuite.h"},"PIUXPSuite.h")," and add it to your C++ project."),(0,o.mdx)("p",null,"The signatures in ",(0,o.mdx)("inlineCode",{parentName:"p"},"PIUXPSuite.h")," are as follows:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-cpp"},"typedef void (*PIUXPMessageNotifier)(PIActionDescriptor descriptor);\ntypedef struct PsUXPSuite1\n{\n    SPAPI SPErr (*SendUXPMessage) (SPPluginRef selfRef, const char* uxpPluginId, PIActionDescriptor descriptor);\n    SPAPI SPErr (*AddUXPMessageListener) (SPPluginRef selfRef, PIUXPMessageNotifier notifier);\n    SPAPI SPErr (*RemoveUXPMessageListener) (SPPluginRef selfRef);\n\n} PsUXPSuite1;\n")),(0,o.mdx)("h1",{id:"csdk-to-uxp-messaging"},"CSDK to UXP messaging"),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"PsUXPSuite1.SendUXPMessage")," can be used to send messages to a UXP plugin given the plugin ID (from ",(0,o.mdx)("inlineCode",{parentName:"p"},"manifest.json"),") and an action descriptor containing the message. "),(0,o.mdx)("h2",{id:"includes-and-globals"},"Includes and globals"),(0,o.mdx)("p",null,"First, make sure to include the right files and declare the globals to store the important pointers."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-cpp"},'// Include these\n#include "PIActions.h" // For PIActionDescriptor\n#include "PIUXPSuite.h" // For messaging\n\n// Your globals\nSPBasicSuite * sSPBasic = NULL; // This is passed to your main function\nSPPluginRef gPlugInRef = NULL; // This is passed to your main function\nPsUXPSuite1* sUxpProcs = NULL; // You acquire this using sSPBasic\nPSActionDescriptorProcs* sDescriptorProcs = NULL; // You acquire this using sSPBasic\n')),(0,o.mdx)("h2",{id:"based-on-plugin-type"},"Based on Plugin Type..."),(0,o.mdx)("h3",{id:"automation-plugins-autopluginmain"},"Automation Plugins: ",(0,o.mdx)("inlineCode",{parentName:"h3"},"AutoPluginMain")),(0,o.mdx)("p",null,"For Automation plugins, the entry method is called ",(0,o.mdx)("inlineCode",{parentName:"p"},"AutoPluginMain")," use the code below to extract the plugin reference and the basic suite."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-cpp"},"DLLExport SPAPI SPErr AutoPluginMain(const char* caller, const char* selector, void* message) {\n\n    SPMessageData* basicMessage = (SPMessageData*) message;\n    sSPBasic = basicMessage->basic;\n    gPlugInRef = basicMessage->self;\n    ...\n")),(0,o.mdx)("h3",{id:"filter-plugins-pluginmain"},"Filter plugins: ",(0,o.mdx)("inlineCode",{parentName:"h3"},"PluginMain")),(0,o.mdx)("p",null,"Filter plugins use an entry method called ",(0,o.mdx)("inlineCode",{parentName:"p"},"PluginMain"),", in which you can grab the basic suite and the plugin reference directly."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-cpp"},"DLLExport MACPASCAL void PluginMain(const int16 selector,\n                                    FilterRecordPtr filterRecord,\n                                    intptr_t * data,\n                                    int16 * result) {\n    sSPBasic = filterRecord->sSPBasic;\n    gPlugInRef = filterRecord->plugInRef; \n    ...\n")),(0,o.mdx)("h2",{id:"acquiring-the-suites"},"Acquiring the suites"),(0,o.mdx)("p",null,"Next up is acquiring the correct suites to create your messages with ActionDescriptors and sending them to the UXP plugin of your choice."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-cpp"},"// in your main method\n    sSPBasic->AcquireSuite(kPSUXPSuite,\n                           kPSUXPSuiteVersion1,\n                           (const void**)&sUxpProcs);\n\n    sSPBasic->AcquireSuite(kPSActionDescriptorSuite,\n                           kPSActionDescriptorSuiteVersion,\n                           (const void**)&sDescriptorProcs);\n\n    PIActionDescriptor desc;\n    sDescriptorProcs->Make(&desc);\n    sDescriptorProcs->PutString(desc, 'helo', \"Hello World!\");\n    sDescriptorProcs->PutFloat(desc, 'fltp', 0.952);\n\n    const char* UXP_MANIFEST_ID = \"com.your.pluginId\";\n    sUxpProcs->SendUXPMessage(gPlugInRef, UXP_MANIFEST_ID, desc);\n}\n")),(0,o.mdx)("h2",{id:"on-your-uxp-plugin"},"On your UXP plugin"),(0,o.mdx)("p",null,"Add a messaging listener using the ",(0,o.mdx)("inlineCode",{parentName:"p"},"messaging")," API group. Any descriptors sent from a CSDK plugin to the ID of this plugin will arrive on this callback."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},"let callback = (o) => { \n    console.log(\"Message from \" + o.pluginId + \":\" + o.message); \n}\n\nrequire('photoshop').messaging.addSDKMessagingListener(callback);\n\n...\n// You can remove your listener using this API\nrequire('photoshop').messaging.removeSDKMessagingListener(callback);\n")),(0,o.mdx)("h1",{id:"uxp-to-csdk-messaging"},"UXP to CSDK messaging"),(0,o.mdx)("p",null,"For communication from a UXP plugin to a C plugin, define a listener within your CPlugin, and utilize both ",(0,o.mdx)("inlineCode",{parentName:"p"},"AddUXPMessageListener")," and ",(0,o.mdx)("inlineCode",{parentName:"p"},"RemoveUXPMessageListener")," at the appropriate time."),(0,o.mdx)("h2",{id:"listener-callback"},"Listener Callback"),(0,o.mdx)("p",null,"All messages sent to this plugin will be handled in this method"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-cpp"},"void UXPMessageHandler(PIActionDescriptor descriptor) {\n    // do something\n}\n")),(0,o.mdx)("h2",{id:"adding-listener"},"Adding listener"),(0,o.mdx)("p",null,"Use the code below where you'd like to start listening to messages."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-cpp"},"sUxpProcs->AddUXPMessageListener(gPlugInRef, UXPMessageHandler);\n")),(0,o.mdx)("h2",{id:"removing-listener"},"Removing listener"),(0,o.mdx)("p",null,"Use the code below to stop listening to messages from UXP plugins."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-cpp"},"sUxpProcs->RemoveUXPMessageListener(gPlugInRef);\n")),(0,o.mdx)("blockquote",null,(0,o.mdx)("p",{parentName:"blockquote"},(0,o.mdx)("em",{parentName:"p"},"NOTE"),": Only one notifier per plugin may be registered.")),(0,o.mdx)("h2",{id:"sending-the-message-from-uxp"},"Sending the message from UXP"),(0,o.mdx)("p",null,"To send messages to the C Plugin, take note of the Component Id as defined in its resouce ",(0,o.mdx)("inlineCode",{parentName:"p"},"PiPL"),". This is the second parameter of the ",(0,o.mdx)("inlineCode",{parentName:"p"},"PIComponentProperty"),"."),(0,o.mdx)("p",null,"With this Id, use the messaging group of the photoshop package to send your message across."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},"let messageContent = {\n    status: \"ok\",\n    filter: 416\n};\nwindow.require('photoshop').messaging.sendSDKPluginMessage(<YourPluginComponentId>, messageContent);\n")))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-ps-reference-media-advanced-cpp-pluginsdk-md-6773b16462167326730a.js.map