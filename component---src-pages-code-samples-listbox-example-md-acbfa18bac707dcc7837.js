"use strict";(self.webpackChunksearch_test=self.webpackChunksearch_test||[]).push([[9276],{1152:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return l},default:function(){return d}});var o=n(22122),i=n(19756),s=(n(15007),n(64983)),a=n(21347),m=["components"],l={},r={_frontmatter:l},u=a.Z;function d(e){var t=e.components,n=(0,i.Z)(e,m);return(0,s.mdx)(u,(0,o.Z)({},r,n,{components:t,mdxType:"MDXLayout"}),(0,s.mdx)("h1",{id:"making-a-listbox"},"Making a Listbox"),(0,s.mdx)("p",null,"A listbox is a common UI element that is not implemented in native Photoshop controls nor Spectrum-CSS controls."),(0,s.mdx)("p",null,"But with some creative HTML, CSS and JavaScript, you can make a ",(0,s.mdx)("inlineCode",{parentName:"p"},"sp-menu")," component look and (mostly) act like a listbox."),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-html"},'<sp-menu id="mylistbox" class="listbox" style="height: 300px; margin-left:20px;color:white; width:220px; border:1px white solid; overflow: auto">\n    <sp-menu-item row_id="42" selected>My first project</sp-menu-item>\n    <sp-menu-item row_id="271828">Project number 2</sp-menu-item>\n<sp-menu>\n')),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-js"},"function listboxChange(evt) {\n    const id = evt.target.options[evt.target.selectedIndex].getAttribute('row_id');\n    const value = evt.target.value;\n    // id will be null if if \"row_id\" isn't defined on the <sp-menu-item>\n    console log(`row_id is ${row_id} and value is ${value});\n}\n")))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-code-samples-listbox-example-md-acbfa18bac707dcc7837.js.map