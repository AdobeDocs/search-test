"use strict";(self.webpackChunksearch_test=self.webpackChunksearch_test||[]).push([[6714],{5709:function(e,a,n){n.r(a),n.d(a,{_frontmatter:function(){return p},default:function(){return x}});var t=n(22122),r=n(19756),l=(n(15007),n(64983)),m=n(21347),d=["components"],p={},o={_frontmatter:p},i=m.Z;function x(e){var a=e.components,n=(0,r.Z)(e,d);return(0,l.mdx)(i,(0,t.Z)({},o,n,{components:a,mdxType:"MDXLayout"}),(0,l.mdx)("h1",{id:"layer"},"Layer"),(0,l.mdx)("p",null,"A Photoshop Layer.\nUltimately, this will have subclasses denoting all layer types."),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},(0,l.mdx)("strong",{parentName:"p"},"Layer")),(0,l.mdx)("p",{parentName:"li"},"↳ ",(0,l.mdx)("a",{parentName:"p",href:"/search-test/ps_reference/classes/grouplayer/"},"GroupLayer")))),(0,l.mdx)("h2",{id:"accessors"},"Accessors"),(0,l.mdx)("h3",{id:"bounds"},"bounds"),(0,l.mdx)("p",null,"• ",(0,l.mdx)("strong",{parentName:"p"},"get bounds"),"(): ",(0,l.mdx)("em",{parentName:"p"},"PsCommon.Bounds")),(0,l.mdx)("p",null,"Bounds of the layer, including the effects"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"const { left, top, right, bottom } = layer.bounds\n")),(0,l.mdx)("hr",null),(0,l.mdx)("h3",{id:"boundsnoeffects"},"boundsNoEffects"),(0,l.mdx)("p",null,"• ",(0,l.mdx)("strong",{parentName:"p"},"get boundsNoEffects"),"(): ",(0,l.mdx)("em",{parentName:"p"},"PsCommon.Bounds")),(0,l.mdx)("p",null,"Bounds of the layer excluding effects"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"const { left, top, right, bottom } = layer.boundsNoEffects\n")),(0,l.mdx)("hr",null),(0,l.mdx)("h3",{id:"kind"},"kind"),(0,l.mdx)("p",null,"• ",(0,l.mdx)("strong",{parentName:"p"},"get kind"),"(): ",(0,l.mdx)("em",{parentName:"p"},"LayerKind")),(0,l.mdx)("p",null,"Kind of the layer"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"if (layer.kind === LayerKind.TEXT) {\n  ...\n}\n")),(0,l.mdx)("hr",null),(0,l.mdx)("h3",{id:"linkedlayers"},"linkedLayers"),(0,l.mdx)("p",null,"• ",(0,l.mdx)("strong",{parentName:"p"},"get linkedLayers"),"(): ",(0,l.mdx)("em",{parentName:"p"},(0,l.mdx)("a",{parentName:"em",href:"#"},"Layer"),"[]")),(0,l.mdx)("p",null,"Layers linked to this layer"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"const layers = layerAA.linkedLayers\nlayers.forEach((layer) => {\n  ...\n})\n")),(0,l.mdx)("hr",null),(0,l.mdx)("h3",{id:"parent"},"parent"),(0,l.mdx)("p",null,"• ",(0,l.mdx)("strong",{parentName:"p"},"get parent"),"(): ",(0,l.mdx)("em",{parentName:"p"},(0,l.mdx)("a",{parentName:"em",href:"/search-test/ps_reference/classes/grouplayer/"},"GroupLayer")," | null")),(0,l.mdx)("p",null,"The group layer this layer is in,\nnull if layer has no parent"),(0,l.mdx)("h2",{id:"methods"},"Methods"),(0,l.mdx)("h3",{id:"delete"},"delete"),(0,l.mdx)("p",null,"▸ ",(0,l.mdx)("strong",{parentName:"p"},"delete"),"(): ",(0,l.mdx)("em",{parentName:"p"},"void")),(0,l.mdx)("p",null,"Deletes this layer from the document."),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"const layers = document.layers\nlayers && layers[0] && layers[0].delete()\n")),(0,l.mdx)("p",null,"number of layer elements deleted"),(0,l.mdx)("hr",null),(0,l.mdx)("h3",{id:"duplicate"},"duplicate"),(0,l.mdx)("p",null,"▸ ",(0,l.mdx)("strong",{parentName:"p"},"duplicate"),"(",(0,l.mdx)("inlineCode",{parentName:"p"},"targetDocument?"),": ",(0,l.mdx)("a",{parentName:"p",href:"/search-test/ps_reference/classes/document/"},"Document"),", ",(0,l.mdx)("inlineCode",{parentName:"p"},"name?"),": string): ",(0,l.mdx)("em",{parentName:"p"},"Promise‹",(0,l.mdx)("a",{parentName:"em",href:"#"},"Layer"),"›")),(0,l.mdx)("p",null,"Duplicates the layer, creating a copy above it in layer stack,\nand returns the newly created layer."),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"// duplicate a layer\nconst copyLayer = await layer.duplicate()\n\n// extract to a new document\nconst exportDoc = psApp.documents[1]\nconst exportedLayer = await layer.duplicate(exportDoc)\n")),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},(0,l.mdx)("inlineCode",{parentName:"strong"},"async"))," "),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Parameters:")),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Name"),(0,l.mdx)("th",{parentName:"tr",align:null},"Type"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"targetDocument?")),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("a",{parentName:"td",href:"/search-test/ps_reference/classes/document"},"Document")),(0,l.mdx)("td",{parentName:"tr",align:null},"if specified, duplicate to a different document target.")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"name?")),(0,l.mdx)("td",{parentName:"tr",align:null},"string"),(0,l.mdx)("td",{parentName:"tr",align:null},"-")))),(0,l.mdx)("hr",null),(0,l.mdx)("h3",{id:"flip"},"flip"),(0,l.mdx)("p",null,"▸ ",(0,l.mdx)("strong",{parentName:"p"},"flip"),"(",(0,l.mdx)("inlineCode",{parentName:"p"},"axis"),': "horizontal" | "vertical" | "both"): ',(0,l.mdx)("em",{parentName:"p"},"Promise‹void›")),(0,l.mdx)("p",null,"Flips the layer on one or both axis."),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},'// flip horizontally\nawait layer.flip("horizontal")\n')),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},(0,l.mdx)("inlineCode",{parentName:"strong"},"async"))," "),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Parameters:")),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Name"),(0,l.mdx)("th",{parentName:"tr",align:null},"Type"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"axis")),(0,l.mdx)("td",{parentName:"tr",align:null},'"horizontal" ',"|",' "vertical" ',"|",' "both"'),(0,l.mdx)("td",{parentName:"tr",align:null},'Which axis (or both) to flip the layer on.             - "horizontal": flip layer on horizontal axis             - "vertical": flip layer on vertical axis             - "both": flip layer on both axes')))),(0,l.mdx)("hr",null),(0,l.mdx)("h3",{id:"link"},"link"),(0,l.mdx)("p",null,"▸ ",(0,l.mdx)("strong",{parentName:"p"},"link"),"(",(0,l.mdx)("inlineCode",{parentName:"p"},"targetLayer"),": ",(0,l.mdx)("a",{parentName:"p",href:"#"},"Layer"),"): ",(0,l.mdx)("em",{parentName:"p"},(0,l.mdx)("a",{parentName:"em",href:"#"},"Layer"),"[]")),(0,l.mdx)("p",null,"Creates a link between this layer and the target layer if not already linked,\nand returns a list of layers linked to this layer."),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},'// link two layers together\nconst linkedLayers = strokes.link(fillLayer)\nlinkedLayers.forEach((layer) => console.log(layer.name))\n> "strokes"\n> "fillLayer"\n')),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Parameters:")),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Name"),(0,l.mdx)("th",{parentName:"tr",align:null},"Type"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"targetLayer")),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("a",{parentName:"td",href:"#"},"Layer")),(0,l.mdx)("td",{parentName:"tr",align:null},"layer to link with")))),(0,l.mdx)("p",null,"array of linked layers"),(0,l.mdx)("hr",null),(0,l.mdx)("h3",{id:"moveabove"},"moveAbove"),(0,l.mdx)("p",null,"▸ ",(0,l.mdx)("strong",{parentName:"p"},"moveAbove"),"(",(0,l.mdx)("inlineCode",{parentName:"p"},"target?"),": LayerTypes): ",(0,l.mdx)("em",{parentName:"p"},"void")),(0,l.mdx)("p",null,"Moves the layer to a position above the target layer or group.\nIf no target layer is defined, move this layer up one slot."),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"foregroundLayer.moveAbove(backingLayer)\n// foregroundLayer\n// backingLayer\n")),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Parameters:")),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Name"),(0,l.mdx)("th",{parentName:"tr",align:null},"Type"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"target?")),(0,l.mdx)("td",{parentName:"tr",align:null},"LayerTypes"),(0,l.mdx)("td",{parentName:"tr",align:null},"layer or group that will proceed this layer.")))),(0,l.mdx)("hr",null),(0,l.mdx)("h3",{id:"movebelow"},"moveBelow"),(0,l.mdx)("p",null,"▸ ",(0,l.mdx)("strong",{parentName:"p"},"moveBelow"),"(",(0,l.mdx)("inlineCode",{parentName:"p"},"target?"),": LayerTypes): ",(0,l.mdx)("em",{parentName:"p"},"void")),(0,l.mdx)("p",null,"Moves the layer to a position below the target layer or group.\nIf no target layer is defined, move this layer down one slot."),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"backingLayer.moveBelow(foregroundLayer)\n// foregroundLayer\n// backingLayer\n")),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Parameters:")),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Name"),(0,l.mdx)("th",{parentName:"tr",align:null},"Type"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"target?")),(0,l.mdx)("td",{parentName:"tr",align:null},"LayerTypes"),(0,l.mdx)("td",{parentName:"tr",align:null},"layer or group that will preceed this layer.")))),(0,l.mdx)("hr",null),(0,l.mdx)("h3",{id:"nudge"},"nudge"),(0,l.mdx)("p",null,"▸ ",(0,l.mdx)("strong",{parentName:"p"},"nudge"),"(",(0,l.mdx)("inlineCode",{parentName:"p"},"horizontal"),": number | PercentValue | PixelValue, ",(0,l.mdx)("inlineCode",{parentName:"p"},"vertical"),": number | PercentValue | PixelValue): ",(0,l.mdx)("em",{parentName:"p"},"Promise‹void›")),(0,l.mdx)("p",null,"Moves the layer."),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},'// nudge the layer to the left by 200px\nawait layer.nudge(-200, 0)\n\n// move the layer one height down\nlet percent = (v) => ({ _unit: "percentUnit", _value: v })\nawait layer.nudge(percent(0), percent(100))\n')),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},(0,l.mdx)("inlineCode",{parentName:"strong"},"async"))," "),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Parameters:")),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Name"),(0,l.mdx)("th",{parentName:"tr",align:null},"Type"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"horizontal")),(0,l.mdx)("td",{parentName:"tr",align:null},"number ","|"," PercentValue ","|"," PixelValue"),(0,l.mdx)("td",{parentName:"tr",align:null},"Numeric value to offset layer by in pixels or percent")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"vertical")),(0,l.mdx)("td",{parentName:"tr",align:null},"number ","|"," PercentValue ","|"," PixelValue"),(0,l.mdx)("td",{parentName:"tr",align:null},"Numeric value to offset layer by in pixels or percent")))),(0,l.mdx)("hr",null),(0,l.mdx)("h3",{id:"rotate"},"rotate"),(0,l.mdx)("p",null,"▸ ",(0,l.mdx)("strong",{parentName:"p"},"rotate"),"(",(0,l.mdx)("inlineCode",{parentName:"p"},"angle"),": number | AngleValue, ",(0,l.mdx)("inlineCode",{parentName:"p"},"options?"),": object): ",(0,l.mdx)("em",{parentName:"p"},"Promise‹void›")),(0,l.mdx)("p",null,"Rotates the layer."),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"// rotate 90 deg counter clockwise\nawait layer.rotate(-90)\n")),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},(0,l.mdx)("inlineCode",{parentName:"strong"},"async"))," "),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Parameters:")),(0,l.mdx)("p",null,"▪ ",(0,l.mdx)("strong",{parentName:"p"},"angle"),": ",(0,l.mdx)("em",{parentName:"p"},"number | AngleValue")),(0,l.mdx)("p",null,"Angle to rotate the layer by in degrees"),(0,l.mdx)("p",null,"▪",(0,l.mdx)("inlineCode",{parentName:"p"},"Optional"),"  ",(0,l.mdx)("strong",{parentName:"p"},"options"),": ",(0,l.mdx)("em",{parentName:"p"},"object")),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Name"),(0,l.mdx)("th",{parentName:"tr",align:null},"Type"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"interpolation?")),(0,l.mdx)("td",{parentName:"tr",align:null},"InterpolationMethod"),(0,l.mdx)("td",{parentName:"tr",align:null},"Interpolation method to use when resampling the image @default InterpolationMethod.bilinear")))),(0,l.mdx)("hr",null),(0,l.mdx)("h3",{id:"scale"},"scale"),(0,l.mdx)("p",null,"▸ ",(0,l.mdx)("strong",{parentName:"p"},"scale"),"(",(0,l.mdx)("inlineCode",{parentName:"p"},"width"),": number | PercentValue, ",(0,l.mdx)("inlineCode",{parentName:"p"},"height"),": number | PercentValue, ",(0,l.mdx)("inlineCode",{parentName:"p"},"options?"),": object): ",(0,l.mdx)("em",{parentName:"p"},"Promise‹void›")),(0,l.mdx)("p",null,"Scales the layer."),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"await layer.scale(80, 80)\n")),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},(0,l.mdx)("inlineCode",{parentName:"strong"},"async"))," "),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Parameters:")),(0,l.mdx)("p",null,"▪ ",(0,l.mdx)("strong",{parentName:"p"},"width"),": ",(0,l.mdx)("em",{parentName:"p"},"number | PercentValue")),(0,l.mdx)("p",null,"Numeric percentage to scale layer horizontally"),(0,l.mdx)("p",null,"▪ ",(0,l.mdx)("strong",{parentName:"p"},"height"),": ",(0,l.mdx)("em",{parentName:"p"},"number | PercentValue")),(0,l.mdx)("p",null,"Numeric percentage to scale layer vertically"),(0,l.mdx)("p",null,"▪",(0,l.mdx)("inlineCode",{parentName:"p"},"Optional"),"  ",(0,l.mdx)("strong",{parentName:"p"},"options"),": ",(0,l.mdx)("em",{parentName:"p"},"object")),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Name"),(0,l.mdx)("th",{parentName:"tr",align:null},"Type"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"interpolation?")),(0,l.mdx)("td",{parentName:"tr",align:null},"InterpolationMethod"),(0,l.mdx)("td",{parentName:"tr",align:null},"Interpolation method to use when resampling the image @default InterpolationMethod.bilinear")))),(0,l.mdx)("hr",null),(0,l.mdx)("h3",{id:"skew"},"skew"),(0,l.mdx)("p",null,"▸ ",(0,l.mdx)("strong",{parentName:"p"},"skew"),"(",(0,l.mdx)("inlineCode",{parentName:"p"},"angleH"),": number | AngleValue, ",(0,l.mdx)("inlineCode",{parentName:"p"},"angleV"),": number | AngleValue, ",(0,l.mdx)("inlineCode",{parentName:"p"},"options?"),": object): ",(0,l.mdx)("em",{parentName:"p"},"Promise‹void›")),(0,l.mdx)("p",null,"Applies a skew to the layer."),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"// parellelogram shape\nawait layer.skew(-15, 0)\n")),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},(0,l.mdx)("inlineCode",{parentName:"strong"},"async"))," "),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Parameters:")),(0,l.mdx)("p",null,"▪ ",(0,l.mdx)("strong",{parentName:"p"},"angleH"),": ",(0,l.mdx)("em",{parentName:"p"},"number | AngleValue")),(0,l.mdx)("p",null,"Horizontal angle to skew by"),(0,l.mdx)("p",null,"▪ ",(0,l.mdx)("strong",{parentName:"p"},"angleV"),": ",(0,l.mdx)("em",{parentName:"p"},"number | AngleValue")),(0,l.mdx)("p",null,"Vertical angle to skew by"),(0,l.mdx)("p",null,"▪",(0,l.mdx)("inlineCode",{parentName:"p"},"Optional"),"  ",(0,l.mdx)("strong",{parentName:"p"},"options"),": ",(0,l.mdx)("em",{parentName:"p"},"object")),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Name"),(0,l.mdx)("th",{parentName:"tr",align:null},"Type"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"interpolation?")),(0,l.mdx)("td",{parentName:"tr",align:null},"InterpolationMethod")))),(0,l.mdx)("hr",null),(0,l.mdx)("h3",{id:"unlink"},"unlink"),(0,l.mdx)("p",null,"▸ ",(0,l.mdx)("strong",{parentName:"p"},"unlink"),"(): ",(0,l.mdx)("em",{parentName:"p"},"Promise‹void›")),(0,l.mdx)("p",null,"Unlinks the layer from any existing links."),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"// detach layer from any existing links\nawait layer.unlink()\n")),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},(0,l.mdx)("inlineCode",{parentName:"strong"},"async"))))}x.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-ps-reference-classes-layer-md-f2c54696a90372800103.js.map