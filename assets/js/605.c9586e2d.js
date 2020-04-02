(window.webpackJsonp=window.webpackJsonp||[]).push([[605],{742:function(e,t,a){"use strict";a.r(t);var n=a(28),i=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[e._v("Interfaces in C++ - Epic Wiki")]),e._v(" "),a("h1",{attrs:{id:"interfaces-in-c"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#interfaces-in-c"}},[e._v("#")]),e._v(" Interfaces in C++")]),e._v(" "),a("p",[a("strong",[e._v("Rate this Article:")])]),e._v(" "),a("p",[e._v("3.00")]),e._v(" "),a("p",[a("img",{attrs:{src:"/extensions/VoteNY/images/star_on.gif",alt:""}}),a("img",{attrs:{src:"/extensions/VoteNY/images/star_on.gif",alt:""}}),a("img",{attrs:{src:"/extensions/VoteNY/images/star_on.gif",alt:""}}),a("img",{attrs:{src:"/extensions/VoteNY/images/star_off.gif",alt:""}}),a("img",{attrs:{src:"/extensions/VoteNY/images/star_off.gif",alt:""}}),e._v(" (13 votes)")]),e._v(" "),a("p",[e._v("Approved for Versions:4.11+")]),e._v(" "),a("h2",{attrs:{id:"contents"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#contents"}},[e._v("#")]),e._v(" Contents")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#Overview"}},[e._v("1 Overview")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#Creating_The_Interface"}},[e._v("2 Creating The Interface")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#ReactsToTimeOfDay.h"}},[e._v("2.1 ReactsToTimeOfDay.h")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#ReactsToTimeOfDay.cpp"}},[e._v("2.2 ReactsToTimeOfDay.cpp")])])])]),e._v(" "),a("li",[a("a",{attrs:{href:"#Using_An_Interface_With_C.2B.2B_Classes"}},[e._v("3 Using An Interface With C++ Classes")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#Flower.h"}},[e._v("3.1 Flower.h")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#Flower.cpp"}},[e._v("3.2 Flower.cpp")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#Frog.h"}},[e._v("3.3 Frog.h")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#Frog.cpp"}},[e._v("3.4 Frog.cpp")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#Determining_If_a_Given_Actor_Has_The_Interface"}},[e._v("3.5 Determining If a Given Actor Has The Interface")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#The_Magic_Interfaces"}},[e._v("3.6 The Magic Interfaces")])])])]),e._v(" "),a("li",[a("a",{attrs:{href:"#Overriding_Behaviour_In_Blueprints"}},[e._v("4 Overriding Behaviour In Blueprints")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#Summary"}},[e._v("5 Summary")])])]),e._v(" "),a("h2",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),a("p",[a("em",[e._v("Original Author")]),e._v(" "),a("a",{attrs:{href:"/User:Rama",title:"User:Rama"}},[e._v("Rama")]),e._v(" ("),a("a",{attrs:{href:"/User_talk:Rama",title:"User talk:Rama"}},[e._v("talk")]),e._v(")")]),e._v(" "),a("p",[a("em",[e._v("Updated & Expanded for 4.11")]),e._v(" "),a("a",{attrs:{href:"/User:HuntaKiller",title:"User:HuntaKiller"}},[e._v("HuntaKiller")]),e._v(" Thank you for all that you contribute to the community Rama!")]),e._v(" "),a("p",[a("a",{attrs:{href:"/User:Rama",title:"User:Rama"}},[e._v("Rama")]),e._v(" : You're welcome and thank you for this lovely addition!")]),e._v(" "),a("p",[e._v("Dear Community,")]),e._v(" "),a("p",[e._v("Here's a tutorial on using "),a("strong",[e._v("UE4 C++ Interfaces in 4.11+")])]),e._v(" "),a("p",[e._v("Interfaces allow different objects to share common functions, but allow objects to handle that function differently if it needs to. Any classes that use an interface must implement the functions that are associated with that interface.")]),e._v(" "),a("p",[e._v("This gives you a lot of power over your game actors, allowing you to trigger events both in C++ and in blueprints that your game actors can handle differently.")]),e._v(" "),a("p",[e._v("For example, the interface implemented in this tutorial enables you to have an interface like TimeBasedBehaviour, which has a function ReactToHighNoon, and have a bunch of actors respond to this event differently, each with their own behaviour.")]),e._v(" "),a("p",[e._v("Flower actors that implement this interface could override the ReactToHighNoon method to open blossoms completely Frog actors implementing it could override ReactToHighNoon to hide under rocks, for example")]),e._v(" "),a("p",[e._v("You can then have an event, SunReachedHighNoon that is triggered anywhere (such as the level blueprint, in an actor, or a static blueprint library) which can take any actor, check if it implements the interface, and if it does it can call any of the functions of that interface and the actor will act according to how that specific actor has the behaviours defined.")]),e._v(" "),a("p",[e._v("This means you can trigger events "),a("em",[e._v("anywhere")]),e._v(" and as long as you have a pointer to your actor, you can ask it to do specific things without needing to know its types because you can "),a("strong",[e._v("easily determine whether any given actor has an interface or not by casting an actor to that interface")]),e._v(". If the cast succeeds then the actor "),a("em",[e._v("does")]),e._v(" implement the given interface, and you can call functions using that interface.")]),e._v(" "),a("p",[e._v("We will implement two interface functions: one which forces you to implement default C++ behaviour on any class which uses the interface, a "),a("strong",[e._v("BlueprintNativeEvent")]),e._v(" called ReactToHighNoon(), and one "),a("strong",[e._v("BlueprintImplementableEvent")]),e._v(" which does "),a("em",[e._v("not")]),e._v(" force you to define default C++ behaviour, called ReactToMidnight().")]),e._v(" "),a("h2",{attrs:{id:"creating-the-interface"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#creating-the-interface"}},[e._v("#")]),e._v(" Creating The Interface")]),e._v(" "),a("p",[e._v("The following is an example implementation of a ReactsToTimeOfDay interface.")]),e._v(" "),a("p",[e._v("When following this tutorial and creating your interface, you'd replace ReactToHighNoon() with your function you want to force default behaviour, and ReactToMidnight() with your function that has no default behaviour.")]),e._v(" "),a("p",[e._v("(If you wish the function to be treated as an event, then it must return void. If you wish the function to be able to be overridden in the BP editor, then it must have a non-void return type. Replace the return type of the function with a string or void if you want to perform a simplistic test. The reasoning is discussed further below in the Critical To Note section)")]),e._v(" "),a("h3",{attrs:{id:"reactstotimeofday-h"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reactstotimeofday-h"}},[e._v("#")]),e._v(" ReactsToTimeOfDay.h")]),e._v(" "),a("p",[e._v('// Copyright 1998-2013 Epic Games, Inc. All Rights Reserved.\n \n#pragma once\n \n#include "ReactsToTimeOfDay.generated.h"\n \n/* must have BlueprintType as a specifier to have this interface exposed to blueprints\nwith this line you can easily add this interface to any blueprint class */\nUINTERFACE(BlueprintType)\nclass MYPROJECT_API UReactsToTimeOfDay : public UInterface\n{\nGENERATED_UINTERFACE_BODY()\n};\n \nclass MYPROJECT_API IReactsToTimeOfDay\n{\nGENERATED_IINTERFACE_BODY()\n \npublic:\n//classes using this interface must implement ReactToHighNoon\nUFUNCTION(BlueprintNativeEvent, BlueprintCallable, Category = "MyCategory")\nbool ReactToHighNoon();\n \n//classes using this interface may implement ReactToMidnight\nUFUNCTION(BlueprintImplementableEvent, BlueprintCallable, Category = "MyCategory")\nbool ReactToMidnight();\n \n};')]),e._v(" "),a("h3",{attrs:{id:"reactstotimeofday-cpp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reactstotimeofday-cpp"}},[e._v("#")]),e._v(" ReactsToTimeOfDay.cpp")]),e._v(" "),a("p",[e._v('// Copyright 1998-2013 Epic Games, Inc. All Rights Reserved.\n \n#include "MyProject.h"\n#include "ReactsToTimeOfDay.h"\n \nUReactsToTimeOfDay::UReactsToTimeOfDay(const class FObjectInitializer& ObjectInitializer)\n: Super(ObjectInitializer)\n{\n \n}')]),e._v(" "),a("h2",{attrs:{id:"using-an-interface-with-c-classes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-an-interface-with-c-classes"}},[e._v("#")]),e._v(" Using An Interface With C++ Classes")]),e._v(" "),a("p",[e._v("You have to use "),a("strong",[e._v("multiple inheritance")]),e._v(", and inherit from the IReactsToTimeOfDay class we created.")]),e._v(" "),a("p",[e._v("The first inherited class will be the base class of your actor, anything you want, a ASkeletalMeshActor is used here as an example.")]),e._v(" "),a("h3",{attrs:{id:"flower-h"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flower-h"}},[e._v("#")]),e._v(" Flower.h")]),e._v(" "),a("p",[e._v('//..other includes may appear here depending on your class\n#include "ReactsToTimeOfDay.h"\n#include "ASkeletalMeshActor.generated.h"\n \nUCLASS()\nclass AFlower : public ASkeletalMeshActor,  public IReactsToTimeOfDay\n{\nGENERATED_BODY()\n \npublic:\n/*\n... other AFlower properties and functions declared ...\n*/\n \nUFUNCTION(BlueprintCallable, BlueprintNativeEvent, Category = "MyCategory")\nbool ReactToHighNoon();\nvirtual bool ReactToHighNoon_Implementation() override;\n \n \n};')]),e._v(" "),a("p",[a("em",[e._v("virtual bool ReactToHighNoon_Implementation() override;")]),e._v(" This line tells your class that it has a function of this name and signature to inherit from the interface, which is how calls to the interface functions are able to interact with this class.")]),e._v(" "),a("p",[a("em",[e._v('UFUNCTION(BlueprintCallable, BlueprintNativeEvent, Category = "MyCategory")')]),e._v(" "),a("em",[e._v("bool ReactToHighNoon();")]),e._v(" This tells your class that you can both call and override this function in blueprints. You need this part as well if you want to be able to override C++ functionality within BP, as BlueprintNativeEvents are intended to be used.")]),e._v(" "),a("p",[e._v("Notice that ReactToMidnight(), the BlueprintImplementableEvent, is not defined here. A BlueprintImplementableEvent is "),a("em",[e._v("declared")]),e._v(" (its existance) in our interface, but "),a("em",[e._v("defined")]),e._v(" (its behaviour) in blueprints only.")]),e._v(" "),a("h3",{attrs:{id:"flower-cpp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flower-cpp"}},[e._v("#")]),e._v(" Flower.cpp")]),e._v(" "),a("p",[e._v("//other flower.cpp code\n \nbool AFlower::ReactToHighNoon_Implementation()\n{\n//Default behaviour for how flower would react at noon\n//OpenPetals();\n//AcceptBugs();\n//...\n \nreturn true;\n \n}")]),e._v(" "),a("p",[e._v("Any number of classes and subclasses can implement this interface using this format")]),e._v(" "),a("h3",{attrs:{id:"frog-h"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#frog-h"}},[e._v("#")]),e._v(" Frog.h")]),e._v(" "),a("p",[e._v('//..other includes may appear here depending on your class\n#include "ReactsToTimeOfDay.h"\n#include "AFrog.generated.h"\n \nUCLASS()\nclass AFrog : public ACharacter,  public IReactsToTimeOfDay\n{\nGENERATED_BODY()\n/*\n... other AFrog properties and functions declared ...\n*/\n \nUFUNCTION(BlueprintCallable, BlueprintNativeEvent, Category = "MyCategory")\nbool ReactToHighNoon();\nvirtual bool ReactToHighNoon_Implementation() override;\n \n};')]),e._v(" "),a("h3",{attrs:{id:"frog-cpp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#frog-cpp"}},[e._v("#")]),e._v(" Frog.cpp")]),e._v(" "),a("p",[e._v("//other Frog code\n \nbool AFrog::ReactToHighNoon_Implementation()\n{\n//Default behaviour for how a frog would react at noon\n//GoSwim();\n//...\n \nreturn true;\n}")]),e._v(" "),a("h3",{attrs:{id:"determining-if-a-given-actor-has-the-interface"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#determining-if-a-given-actor-has-the-interface"}},[e._v("#")]),e._v(" Determining If a Given Actor Has The Interface")]),e._v(" "),a("p",[e._v("To determine if an actor implements an interface in either C++ or blueprint, simply cast your class to the interface, if it returns NULL then the object is not using it. If it is successful, you can use that pointer cast to the interface to call your function, which will execute from the proper class.")]),e._v(" "),a("p",[e._v("//Example: somewhere else in code we are trying to see if our object reacts to time of day\n \n//Some pointer is defined to any class inheriting from UObject\nUObject* pointerToAnyUObject;\n \n//....\n \n \nIReactsToTimeOfDay* TheInterface = Cast<IReactsToTimeOfDay>(pointerToAnyUObject);\nif (TheInterface)\n{\n//Don't call your functions directly, use the 'Execute_' prefix\n//the Execute_ReactToHighNoon and Execute_ReactToMidnight are generated on compile\n//you may need to compile before these functions will appear\nTheInterface->Execute_ReactToHighNoon (pointerToAnyUObject);\nTheInterface->Execute_ReactToMidnight (pointerToAnyUObject);\n}\n \n \n//end of code segment")]),e._v(" "),a("p",[a("strong",[e._v("Critical To Note")])]),e._v(" "),a("ul",[a("li",[e._v("Whenever calling your interface functions in C++, never call the direct functions, always use the one with the Execute_ prefix")]),e._v(" "),a("li",[e._v("Your function "),a("em",[e._v("MUST")]),e._v(" have a return value. If your function returns void, UE4 treats it as an event, and you cannot override it (it will not appear in BP as a function you can override). Just have it return a garbage value (like I do above) if you don't need a return value.")])]),e._v(" "),a("h3",{attrs:{id:"the-magic-interfaces"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-magic-interfaces"}},[e._v("#")]),e._v(" The Magic Interfaces")]),e._v(" "),a("p",[a("em",[e._v("TheInterface->Execute_ReactToHighNoon()")])]),e._v(" "),a("p",[e._v("From the above code you can see that the function is being called off of the interface, you never even need to know what type of object you're dealing with, just whether it supports the interface you need.")]),e._v(" "),a("p",[e._v("It produces different results depending on the actual class it is, calling the overridden function. This is called polymorphism.")]),e._v(" "),a("h2",{attrs:{id:"overriding-behaviour-in-blueprints"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overriding-behaviour-in-blueprints"}},[e._v("#")]),e._v(" Overriding Behaviour In Blueprints")]),e._v(" "),a("p",[e._v("Once this is all implemented, the classes that you have set up with the interface in C++ will have its interface functions appear with the blueprint's variables and other functions.")]),e._v(" "),a("p",[a("a",{attrs:{href:"/File:InterfaceBP1.png"}},[a("img",{attrs:{src:"https://d26ilriwvtzlb.cloudfront.net/7/7b/InterfaceBP1.png",alt:"InterfaceBP1.png"}})])]),e._v(" "),a("p",[a("a",{attrs:{href:"/File:InterfaceBP2.png"}},[a("img",{attrs:{src:"https://d26ilriwvtzlb.cloudfront.net/6/6a/InterfaceBP2.png",alt:"InterfaceBP2.png"}})])]),e._v(" "),a("p",[e._v("Again, your function "),a("strong",[e._v("must")]),e._v(" have a return value for it to appear in this list, otherwise it is considered an event and cannot be overridden (AFAIK).")]),e._v(" "),a("h2",{attrs:{id:"summary"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#summary"}},[e._v("#")]),e._v(" Summary")]),e._v(" "),a("p",[e._v("You can trigger global events that only certain actors will respond to")]),e._v(" "),a("p",[e._v("Each actor can respond to an event in their own unique way.")]),e._v(" "),a("p",[e._v("While it's a little bit more complicated of a setup it helps keeping the code "),a("em",[e._v("very")]),e._v(" simple and is much more performance friendly than casting to multiple different types of classes!")]),e._v(" "),a("p",[a("a",{attrs:{href:"/User:Rama",title:"User:Rama"}},[e._v("Rama")]),e._v(" ("),a("a",{attrs:{href:"/User_talk:Rama",title:"User talk:Rama"}},[e._v("talk")]),e._v(")"),a("br"),e._v(" "),a("a",{attrs:{href:"/User:HuntaKiller",title:"User:HuntaKiller"}},[e._v("HuntaKiller")])]),e._v(" "),a("p",[e._v('Retrieved from "'),a("a",{attrs:{href:"https://wiki.unrealengine.com/index.php?title=Interfaces_in_C%2B%2B&oldid=24125",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://wiki.unrealengine.com/index.php?title=Interfaces_in_C%2B%2B&oldid=24125"),a("OutboundLink")],1),e._v('"')]),e._v(" "),a("p",[a("a",{attrs:{href:"/Special:Categories",title:"Special:Categories"}},[e._v("Categories")]),e._v(":")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"/Category:Tutorials",title:"Category:Tutorials"}},[e._v("Tutorials")])]),e._v(" "),a("li",[a("a",{attrs:{href:"/Category:Code",title:"Category:Code"}},[e._v("Code")])]),e._v(" "),a("li",[a("a",{attrs:{href:"/Category:Community_Created_Content",title:"Category:Community Created Content"}},[e._v("Community Created Content")])])]),e._v(" "),a("p",[e._v("Hidden category:")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"/Category:Templates",title:"Category:Templates"}},[e._v("Templates")])])]),e._v(" "),a("p",[a("img",{attrs:{src:"https://tracking.unrealengine.com/track.png",alt:""}})])])}),[],!1,null,null,null);t.default=i.exports}}]);