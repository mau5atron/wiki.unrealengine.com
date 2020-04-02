(window.webpackJsonp=window.webpackJsonp||[]).push([[917],{1436:function(t,e,a){"use strict";a.r(e);var r=a(28),i=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("Plugins, How To Package Custom Plugins With Your Game - Epic Wiki")]),t._v(" "),a("h1",{attrs:{id:"plugins-how-to-package-custom-plugins-with-your-game"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#plugins-how-to-package-custom-plugins-with-your-game"}},[t._v("#")]),t._v(" Plugins, How To Package Custom Plugins With Your Game")]),t._v(" "),a("h2",{attrs:{id:"contents"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#contents"}},[t._v("#")]),t._v(" Contents")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#Overview"}},[t._v("1 Overview")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#1._Must_Be_Engine_Plugin"}},[t._v("2 1. Must Be Engine Plugin")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#2._Must_Pre-Compile_For_All_Destination_Platforms"}},[t._v("3 2. Must Pre-Compile For All Destination Platforms")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#3._Must_Be_Listed_as_Installed_in_.uplugin"}},[t._v("4 3. Must Be Listed as Installed in .uplugin")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#Troubleshooting_for_Buyers_of_Plugins"}},[t._v("5 Troubleshooting for Buyers of Plugins")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#Conclusion"}},[t._v("6 Conclusion")])])]),t._v(" "),a("h2",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),a("p",[a("em",[t._v("Author:")]),t._v(" "),a("a",{attrs:{href:"/User:Rama",title:"User:Rama"}},[t._v("Rama")]),t._v(" ("),a("a",{attrs:{href:"/User_talk:Rama",title:"User talk:Rama"}},[t._v("talk")]),t._v(")")]),t._v(" "),a("p",[t._v("Hi there!")]),t._v(" "),a("p",[t._v("After upgrading my "),a("a",{attrs:{href:"https://forums.unrealengine.com/showthread.php?3851-(39)-Rama-s-Extra-Blueprint-Nodes-for-You-as-a-Plugin-No-C-Required!",target:"_blank",rel:"noopener noreferrer"}},[t._v("Victory Plugin"),a("OutboundLink")],1),t._v(" to 4.11 I realized the rules have changed regarding how to package a custom plugin with any project.")]),t._v(" "),a("p",[t._v("Here are the rules as I now understand them!")]),t._v(" "),a("h2",{attrs:{id:"_1-must-be-engine-plugin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-must-be-engine-plugin"}},[t._v("#")]),t._v(" 1. Must Be Engine Plugin")]),t._v(" "),a("p",[t._v("You can develop your plugin at the project level, but for people without C++ access to be able to package it, you must move it to the Engine/Plugins directory for the appropriate engine version.")]),t._v(" "),a("p",[t._v("Make sure you put runtime plugins in "),a("strong",[t._v("Engine/Plugins/Runtime")])]),t._v(" "),a("h2",{attrs:{id:"_2-must-pre-compile-for-all-destination-platforms"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-must-pre-compile-for-all-destination-platforms"}},[t._v("#")]),t._v(" 2. Must Pre-Compile For All Destination Platforms")]),t._v(" "),a("p",[t._v("Via the .sln file in Visual Studio you must do a full rebuild for all destination platforms that you want to support, generating the appropriate files under Binaries for your plugin.")]),t._v(" "),a("p",[t._v("So if you want to package for Development (Game) x64 you must compile in Visual Studio, prior to packaging in the Editor.")]),t._v(" "),a("h2",{attrs:{id:"_3-must-be-listed-as-installed-in-uplugin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-must-be-listed-as-installed-in-uplugin"}},[t._v("#")]),t._v(" 3. Must Be Listed as Installed in .uplugin")]),t._v(" "),a("p",[t._v("Open your .uplugin in a text editor and make sure that Installed is set to be true!")]),t._v(" "),a("p",[t._v('"Installed": true,')]),t._v(" "),a("p",[a("strong",[t._v("Your plugin will not package unless this is set to true! -Rama")])]),t._v(" "),a("h2",{attrs:{id:"troubleshooting-for-buyers-of-plugins"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting-for-buyers-of-plugins"}},[t._v("#")]),t._v(" Troubleshooting for Buyers of Plugins")]),t._v(" "),a("p",[t._v("If you bought a plugin that is not packaging, you can do Step 1 and Step 3 yourself!")]),t._v(" "),a("p",[t._v("Make sure your plugin is moved to the engine folder as mentioned above, and make sure that Installed is set to true in the .uplugin.")]),t._v(" "),a("p",[t._v("If the plugin provider did not precompile the .lib files you should ask them to do so.")]),t._v(" "),a("h2",{attrs:{id:"conclusion"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#conclusion"}},[t._v("#")]),t._v(" Conclusion")]),t._v(" "),a("p",[t._v("I hope you found this wiki very helpful for your plugin development and packaging process!")]),t._v(" "),a("p",[t._v("Enjoy!")]),t._v(" "),a("p",[a("a",{attrs:{href:"/User:Rama",title:"User:Rama"}},[t._v("Rama")]),t._v(" ("),a("a",{attrs:{href:"/User_talk:Rama",title:"User talk:Rama"}},[t._v("talk")]),t._v(")")]),t._v(" "),a("p",[t._v('Retrieved from "'),a("a",{attrs:{href:"https://wiki.unrealengine.com/index.php?title=Plugins,_How_To_Package_Custom_Plugins_With_Your_Game&oldid=17818",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://wiki.unrealengine.com/index.php?title=Plugins,_How_To_Package_Custom_Plugins_With_Your_Game&oldid=17818"),a("OutboundLink")],1),t._v('"')]),t._v(" "),a("p",[a("a",{attrs:{href:"/Special:Categories",title:"Special:Categories"}},[t._v("Categories")]),t._v(":")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"/Category:Tutorials",title:"Category:Tutorials"}},[t._v("Tutorials")])]),t._v(" "),a("li",[a("a",{attrs:{href:"/Category:Code",title:"Category:Code"}},[t._v("Code")])]),t._v(" "),a("li",[a("a",{attrs:{href:"/Category:Community_Created_Content",title:"Category:Community Created Content"}},[t._v("Community Created Content")])])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://tracking.unrealengine.com/track.png",alt:""}})])])}),[],!1,null,null,null);e.default=i.exports}}]);