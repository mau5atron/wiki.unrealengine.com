(window.webpackJsonp=window.webpackJsonp||[]).push([[299],{657:function(e,t,a){"use strict";a.r(t);var r=a(28),o=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[e._v("Camera Animation FBX Export from 3ds Max - Epic Wiki")]),e._v(" "),a("h1",{attrs:{id:"camera-animation-fbx-export-from-3ds-max"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#camera-animation-fbx-export-from-3ds-max"}},[e._v("#")]),e._v(" Camera Animation FBX Export from 3ds Max")]),e._v(" "),a("p",[e._v("The process is simple, the steps are outline below, or you can consult this video:")]),e._v(" "),a("p",[a("a",{attrs:{href:"http://www.youtube.com/embed/RtKdJ9wZMls",target:"_blank",rel:"noopener noreferrer"}},[e._v("Exporting 3ds Max Camera animation to UE4"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("I will be posting a MaxScript soon, that shoudl streamline the process.")]),e._v(" "),a("ol",[a("li",[e._v("Complete your camera animation.")]),e._v(" "),a("li",[e._v("Create a Dummy/null at 0,0,0")]),e._v(" "),a("li",[e._v("clone your original camera and parent it to the Dummy.")]),e._v(" "),a("li",[e._v("rotate the dummy -90 degrees on the Z-Axis.")]),e._v(" "),a("li",[e._v("create a new free camera")]),e._v(" "),a("li",[e._v("Add a position constraint and select the first duplicate camera (the one attached to the null) as the source")]),e._v(" "),a("li",[e._v("Do the same for Orientation.")]),e._v(" "),a("li",[e._v("right click and choose \"Wire Parameter\", select the Object>Fov property, then in the scene selection, choose the original or cloned camera, and ensure the source camera is driving this clone's FOV value (you could do this for all params, but i'm not sure if near/far planes or other info comes over or is usable yet)")]),e._v(" "),a("li",[e._v("Go to the Motion tab, select trajectories, set your sample range to the length of your animation, ensure the samples are set to the entirety of the range, then Collapse. you now have a camera that has all the relative transforms of the original, but rotated around the world, with no other hierarchy to interfere with the export.")]),e._v(" "),a("li",[e._v("Select your export camera, choose Export>selected, write out your FBX, and import into matinee.")])]),e._v(" "),a("p",[e._v("There you go! Nice, working camera animation that points where you want it!")]),e._v(" "),a("p",[e._v('Retrieved from "'),a("a",{attrs:{href:"https://wiki.unrealengine.com/index.php?title=Camera_Animation_FBX_Export_from_3ds_Max&oldid=5616",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://wiki.unrealengine.com/index.php?title=Camera_Animation_FBX_Export_from_3ds_Max&oldid=5616"),a("OutboundLink")],1),e._v('"')]),e._v(" "),a("p",[a("a",{attrs:{href:"/Special:Categories",title:"Special:Categories"}},[e._v("Category")]),e._v(":")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"/Category:Tutorial",title:"Category:Tutorial"}},[e._v("Tutorial")])])]),e._v(" "),a("p",[a("img",{attrs:{src:"https://tracking.unrealengine.com/track.png",alt:""}})])])}),[],!1,null,null,null);t.default=o.exports}}]);