(window.webpackJsonp=window.webpackJsonp||[]).push([[385],{439:function(e,t,n){"use strict";n.r(t);var r=n(28),a=Object(r.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("p",[e._v("Create A Custom Weapon - How Firing Works - Epic Wiki")]),e._v(" "),n("h1",{attrs:{id:"create-a-custom-weapon-how-firing-works"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#create-a-custom-weapon-how-firing-works"}},[e._v("#")]),e._v(" Create A Custom Weapon - How Firing Works")]),e._v(" "),n("p",[n("strong",[e._v("Rate this Tutorial:")])]),e._v(" "),n("p",[e._v("4.00")]),e._v(" "),n("p",[n("img",{attrs:{src:"/extensions/VoteNY/images/star_on.gif",alt:""}}),n("img",{attrs:{src:"/extensions/VoteNY/images/star_on.gif",alt:""}}),n("img",{attrs:{src:"/extensions/VoteNY/images/star_on.gif",alt:""}}),n("img",{attrs:{src:"/extensions/VoteNY/images/star_on.gif",alt:""}}),n("img",{attrs:{src:"/extensions/VoteNY/images/star_off.gif",alt:""}}),e._v(" (one vote)")]),e._v(" "),n("p",[e._v("Approved for Versions:4.6, 4.7")]),e._v(" "),n("h2",{attrs:{id:"contents"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#contents"}},[e._v("#")]),e._v(" Contents")]),e._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"#Intro:_How_Firing_Works_in_Unreal_Tournament"}},[e._v("1 Intro: How Firing Works in Unreal Tournament")]),e._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"#Requirements"}},[e._v("1.1 Requirements")])]),e._v(" "),n("li",[n("a",{attrs:{href:"#Classes_Overview"}},[e._v("1.2 Classes Overview")])])])]),e._v(" "),n("li",[n("a",{attrs:{href:"#From_Player_to_Weapon"}},[e._v("2 From Player to Weapon")])]),e._v(" "),n("li",[n("a",{attrs:{href:"#Weapon_States"}},[e._v("3 Weapon States")])])]),e._v(" "),n("h3",{attrs:{id:"intro-how-firing-works-in-unreal-tournament"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#intro-how-firing-works-in-unreal-tournament"}},[e._v("#")]),e._v(" Intro: How Firing Works in Unreal Tournament")]),e._v(" "),n("p",[e._v("So you want to create a custom weapon, but you're unsure how to implement in C++/Blueprints the functionality of your weapon design?")]),e._v(" "),n("p",[e._v("This tutorial is intended to cover some basics in conceptualizing how the pieces of weapon code work together to create the desired weapon behavior. This can be useful if you want to try implementing weapon behavior that may not exist in any known weapons, and thus extending from those weapons is not appropriate.")]),e._v(" "),n("h4",{attrs:{id:"requirements"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),n("ul",[n("li",[e._v("Access to Unreal Tournament C++ Source / GitHub, & Unreal Engine 4 Editor.")]),e._v(" "),n("li",[e._v("Engine version: 4.6")]),e._v(" "),n("li",[e._v("Skill level: Beginner")])]),e._v(" "),n("p",[e._v("At this stage I assume you have all of the Unreal Tournament source files and have successfully compiled the project from source.")]),e._v(" "),n("h4",{attrs:{id:"classes-overview"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#classes-overview"}},[e._v("#")]),e._v(" Classes Overview")]),e._v(" "),n("p",[e._v("This tutorial assumes a fairly basic level of knowledge of Unreal Engine classes, so for that purpose I will be outlining the classes featured in this tutorial and their basic functionality.")]),e._v(" "),n("ul",[n("li",[e._v("UTPlayerController: The UTPlayerController is an abstract entity that acts as an interface between the player and the world. Think of the PlayerController as a 'spirit' that inhabits bodies within the game world.")]),e._v(" "),n("li",[e._v("UTCharacter: The UTCharacter class is the basic class that defines a \"body\" in the game world. Typically this might be a human, but it may also be an alien, a monster, etc. A character is generally 'possessed' by a PlayerController (or a BotController, if it's an AI Bot).")]),e._v(" "),n("li",[e._v("UTCharacterMovement: This object is a component of the Character, it defines movement related properties of a UTCharacter")]),e._v(" "),n("li",[e._v("UTWeapon: A UTWeapon is an inventory item, it is held by a UTCharacter.")]),e._v(" "),n("li",[e._v("UTWeaponState: A UTWeaponState is an object within UTWeapon used to define its state (being held, being fired, being put away, etc).")])]),e._v(" "),n("h3",{attrs:{id:"from-player-to-weapon"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#from-player-to-weapon"}},[e._v("#")]),e._v(" From Player to Weapon")]),e._v(" "),n("p",[e._v("What happens between the player pressing the mouse button and the firing of a weapon? How does a mouse click translate into a shock beam or a cluster of flak shards? When you want to implement behavior that differs from standard weapons this is a question you might find yourself asking. Other tutorials demonstrate that we can call the functions "),n("strong",[e._v("UTWeapon::FireInstantHit()")]),e._v(" or "),n("strong",[e._v("UTWeapon::FireProjectile()")]),e._v(" to fire a hitscan beam or to fire a projectile. We can override these functions to change the behavior of each function individually, but how do we get there?")]),e._v(" "),n("p",[e._v("The first step is to open the Editor and look under the menu "),n("strong",[e._v("Edit")]),e._v(" -> "),n("strong",[e._v("Project Settings")]),e._v(". In the "),n("strong",[e._v("Project Settings")]),e._v(" window we should look at the "),n("strong",[e._v("Input")]),e._v(" section.")]),e._v(" "),n("p",[e._v("As of the writing of this tutorial, the "),n("strong",[e._v("Input")]),e._v(" section for the Unreal Tournament project looks like so:")]),e._v(" "),n("p",[n("a",{attrs:{href:"/File:Editorinput.jpg"}},[n("img",{attrs:{src:"https://d26ilriwvtzlb.cloudfront.net/b/be/Editorinput.jpg",alt:"Editorinput.jpg"}})])]),e._v(" "),n("p",[e._v("This can also be seen in the "),n("strong",[e._v("UnrealTournament/UnrealTournament/Config/DefaultInput.ini")]),e._v(" file:")]),e._v(" "),n("p",[e._v('+ActionMappings=(ActionName="StartFire", Key=LeftMouseButton)\n+ActionMappings=(ActionName="StopFire", Key=LeftMouseButton)\n+ActionMappings=(ActionName="StartFire", Key=Gamepad_RightTrigger)\n+ActionMappings=(ActionName="StopFire", Key=Gamepad_RightTrigger)\n+ActionMappings=(ActionName="StartFire", Key=RightControl)\n+ActionMappings=(ActionName="StopFire", Key=RightControl)\n+ActionMappings=(ActionName="StartAltFire", Key=RightMouseButton)\n+ActionMappings=(ActionName="StopAltFire", Key=RightMouseButton)\n+ActionMappings=(ActionName="StartAltFire", Key=Gamepad_LeftTrigger)\n+ActionMappings=(ActionName="StopAltFire", Key=Gamepad_LeftTrigger)')]),e._v(" "),n("p",[e._v('Whether you\'re looking in the Editor or at DefaultInput.ini, you\'ll see that the important thing that occurs when the player presses the default fire input is the action called "StartFire." So what does StartFire do? Using Visual Studio we can search the entire Unreal Tournament solution (Ctrl+Shift+F) for "StartFire." These results will be found in '),n("strong",[e._v("UTPlayerController::SetupInputComponent()")]),e._v(" :")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v('InputComponent\\-\\>BindAction("StartFire", IE\\_Pressed, this, &AUTPlayerController::OnFire);\nInputComponent\\-\\>BindAction("StopFire", IE\\_Released, this, &AUTPlayerController::OnStopFire);\nInputComponent\\-\\>BindAction("StartAltFire", IE\\_Pressed, this, &AUTPlayerController::OnAltFire);\nInputComponent\\-\\>BindAction("StopAltFire", IE\\_Released, this, &AUTPlayerController::OnStopAltFire);\n')])])]),n("p",[e._v('From here we can see the InputComponent of the PlayerController is binding an action called "StartFire" to the function '),n("strong",[e._v("UTPlayerController::OnFire()")]),e._v(". This tells us that when the player presses left mouse button, the StartFire binding is called and our "),n("strong",[e._v("UTPlayerController::OnFire()")]),e._v(" function is called.")]),e._v(" "),n("p",[e._v("Looking at the implementation of "),n("strong",[e._v("UTPlayerController::OnFire()")]),e._v(" we will see")]),e._v(" "),n("p",[e._v("void AUTPlayerController::OnFire()\n{\nif (GetPawn() != NULL)\n{\nnew(DeferredFireInputs) FDeferredFireInput(0, true);\n}\nelse if (IsInState(NAME_Spectating))\n{\nif ((PlayerState == nullptr || !PlayerState->bOnlySpectator) &&\nbPlayerIsWaiting)\n{\nServerRestartPlayer();\n}\nelse\n{\nServerViewNextPlayer();\n}\n}\nelse\n{\nServerRestartPlayer();\n}\n}")]),e._v(" "),n("p",[e._v("This might look a little confusing at first, but the key element to point out here is the code that executes when we have a pawn. The majority of this code handles spectating only, so only the line")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("\tnew(DeferredFireInputs) FDeferredFireInput(0, true);\n")])])]),n("p",[e._v("Is relevant to the actual firing behavior while the player is alive. What does this line do? In short, it creates an object of type FDeferredFireInput, passing along the FireMode, in this case 0, and whether this input was the start or end of the input.")]),e._v(" "),n("p",[e._v("The definition for the FDefferedFireInput can be seen in the UTPlayerController.h")]),e._v(" "),n("p",[e._v("struct FDeferredFireInput\n{\n/** the fire mode */\nuint8 FireMode;\n/** if true, call StartFire(), false call StopFire() */\nbool bStartFire;\n \nFDeferredFireInput(uint8 InFireMode, bool bInStartFire)\n: FireMode(InFireMode), bStartFire(bInStartFire)\n{}\n};")]),e._v(" "),n("p",[e._v("The FDeferredFireInput struct was created so that fire inputs can be applied in a slightly different order than they would normally occur. If you trace down where the DeferredFireInputs are used, you'll see that they are typically processed in the movement component of the UTCharacter, UTCharacterMovement::TickComponent(). This entire process is a bit circuitous, but the long and short of it is that DeferredFireInputs are ultimately resolved in "),n("strong",[e._v("UTPlayerController::ApplyDeferredFireInputs()")]),e._v(".")]),e._v(" "),n("p",[e._v("void AUTPlayerController::ApplyDeferredFireInputs()\n{\nfor (FDeferredFireInput& Input : DeferredFireInputs)\n{\nif (Input.bStartFire)\n{\nif (UTCharacter != NULL)\n{\nif (StateName == NAME_Playing)\n{\nUTCharacter->StartFire(Input.FireMode);\n}\n}\nelse if (GetPawn() != nullptr)\n{\nGetPawn()->PawnStartFire(Input.FireMode);\n}\n}\nelse if (UTCharacter != NULL)\n{\nUTCharacter->StopFire(Input.FireMode);\n}\n}\nDeferredFireInputs.Empty();\n}")]),e._v(" "),n("p",[e._v("Now we're getting somewhere. In "),n("strong",[e._v("UTPlayerController::ApplyDeferredFireInputs()")]),e._v(" the standard processing of our player input will have us calling a function on our UTCharacter called StartFire, passing along a numerical value for the firemode we're calling. "),n("strong",[e._v("UTCharacter::StartFire()")]),e._v(" looks like so:")]),e._v(" "),n("p",[e._v('void AUTCharacter::StartFire(uint8 FireModeNum)\n{\nUE_LOG(LogUTCharacter, Verbose, TEXT("StartFire %d"), FireModeNum);\n \nif (!IsLocallyControlled())\n{\nUE_LOG(LogUTCharacter, Warning, TEXT("StartFire() can only be called on the owning client"));\n}\n// when feigning death, attempting to fire gets us out of it\nelse if (bFeigningDeath)\n{\nFeignDeath();\n}\nelse if (Weapon != NULL && EmoteCount == 0)\n{\nWeapon->StartFire(FireModeNum);\n}\n}')]),e._v(" "),n("p",[e._v("The important bits here is how UTCharacter passes input to the Weapon class, getting us to our destination at last, calling "),n("strong",[e._v("UTWeapon::StartFire()")]),e._v(".")]),e._v(" "),n("p",[e._v("Here is a small diagram outlining the input flow through these initial classes.")]),e._v(" "),n("p",[n("a",{attrs:{href:"/File:InputDiagramTrim1.jpg"}},[n("img",{attrs:{src:"https://d26ilriwvtzlb.cloudfront.net/a/ad/InputDiagramTrim1.jpg",alt:"InputDiagramTrim1.jpg"}})])]),e._v(" "),n("h3",{attrs:{id:"weapon-states"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#weapon-states"}},[e._v("#")]),e._v(" Weapon States")]),e._v(" "),n("p",[e._v("You might be thinking, \"That's great, you've shown how a single button press translates into a single function call in my weapon, but what happens next?\" This section will walk through the steps of what happens once our player input reaches our weapon.")]),e._v(" "),n("p",[e._v("Starting off, our first point of entry into the Weapon class is the "),n("strong",[e._v("UTWeapon::StartFire()")]),e._v(" function:")]),e._v(" "),n("p",[e._v("void AUTWeapon::StartFire(uint8 FireModeNum)\n{\nif (!UTOwner->IsFiringDisabled())\n{\nbool bClientFired = BeginFiringSequence(FireModeNum, false);\nif (Role < ROLE_Authority)\n{\nServerStartFire(FireModeNum, bClientFired);\n}\n}\n}")]),e._v(" "),n("p",[e._v("As you can see, in games where the client is not the authority (e.g. all online games), this redirects to "),n("strong",[e._v("UTWeapon::ServerStartFire()")]),e._v(". Lets take a brief look there as well:")]),e._v(" "),n("p",[e._v("void AUTWeapon::ServerStartFire_Implementation(uint8 FireModeNum, bool bClientFired)\n{\nif (!UTOwner->IsFiringDisabled())\n{\nBeginFiringSequence(FireModeNum, bClientFired);\n}\n}")]),e._v(" "),n("p",[e._v("Both the clientside and serverside functions here call "),n("strong",[e._v("UTWeapon::BeginFiringSequence()")]),e._v(", so it's important to see how input is passed along through this function to produce the firing behavior.")]),e._v(" "),n("p",[e._v("bool AUTWeapon::BeginFiringSequence(uint8 FireModeNum, bool bClientFired)\n{\nif (UTOwner)\n{\nUTOwner->SetPendingFire(FireModeNum, true);\nif (FiringState.IsValidIndex(FireModeNum) && CurrentState != EquippingState && CurrentState != UnequippingState)\n{\nFiringState[FireModeNum]->PendingFireStarted();\n}\nbool bResult = CurrentState->BeginFiringSequence(FireModeNum, bClientFired);\nif (CurrentState->IsFiring() && CurrentFireMode != FireModeNum)\n{\nOnMultiPress(FireModeNum);\n}\nreturn bResult;\n}\nreturn false;\n}")]),e._v(" "),n("p",[e._v("The next step to pay attention to is in AUTWeapon::BeginFiringSequence involves looking at this next set of lines to execute,")]),e._v(" "),n("p",[e._v("if (FiringState.IsValidIndex(FireModeNum) && CurrentState != EquippingState && CurrentState != UnequippingState)\n{\nFiringState[FireModeNum]->PendingFireStarted();\n}")]),e._v(" "),n("p",[e._v("If you look only at the name of this variable you might think to yourself that the FiringState is a state that controls certain firing behaviors of the weapon. If you've looked through the class structure you've likely seen such things as UTWeaponStateFiringBeam, UTWeaponStateFiringBurst, UTWeaponStateFiringSpinUp. It might seem confusing that somehow your weapon already has a so-called FiringState even though we haven't even fired a shot yet!")]),e._v(" "),n("p",[e._v("The important thing to recognize here is that FiringState is an object of type UUTWeaponState. UUTWeaponState is an object defined to exist within each UTWeapon, but each UTWeaponState corresponds to more than just a particular firing behavior in a weapon. Imagine that you are playing a game and you have in your inventory the Impact Hammer, the Enforcer, the Shock Rifle, and the Rocket Launcher. If we were to call UTWeapon::BeginFiringSequence() on all of these weapons, they would all have a 'firing state.' However, in Unreal Tournament where the player can only have one active weapon at a time, three of those weapons would be in WeaponState UTWeaponStateInactive. The one \"currently-held\" weapon would be in UTWeaponStateActive. There are also transitional states used for equipping and unequipping weapons, as we can see from UTWeapon::BeginFiringSequence().")]),e._v(" "),n("p",[e._v("Moving on, our code above indicates we should call the PendingFireStarted function of our Weapon State class. As I stated above, a held weapon is in the UTWeaponStateActive class, so looking at the function definition "),n("strong",[e._v("UTWeaponStateActive::PendingFireStarted()")]),e._v(" we see:")]),e._v(" "),n("p",[e._v("bool UUTWeaponStateActive::BeginFiringSequence(uint8 FireModeNum, bool bClientFired)\n{\nif (GetOuterAUTWeapon()->FiringState.IsValidIndex(FireModeNum) && GetOuterAUTWeapon()->HasAmmo(FireModeNum))\n{\nGetOuterAUTWeapon()->CurrentFireMode = FireModeNum;\nGetOuterAUTWeapon()->GotoState(GetOuterAUTWeapon()->FiringState[FireModeNum]);\nreturn true;\n}\nreturn false;\n}")]),e._v(" "),n("p",[e._v("Fortunately this is straightforward, knowing that our weapon initially is in state UTWeaponStateActive, we'll want to use the "),n("strong",[e._v("UTWeapon::GotoState()")]),e._v(" function to go to the state specified by our CurrentFireMode/FireModeNum. These actually will vary per weapon, but in all current examples these Firing States are subclasses of UTWeaponStateFiring.")]),e._v(" "),n("p",[e._v("Looking first at "),n("strong",[e._v("UTWeapon::GotoState()")]),e._v(":")]),e._v(" "),n("p",[e._v('void AUTWeapon::GotoState(UUTWeaponState* NewState)\n{\nif (NewState == NULL || !NewState->IsIn(this))\n{\nUE_LOG(UT, Warning, TEXT("Attempt to send %s to invalid state %s"), *GetName(), *GetFullNameSafe(NewState));\n}\nelse if (ensureMsgf(UTOwner != NULL || NewState == InactiveState, TEXT("Attempt to send %s to state %s while not owned"), *GetName(), *GetNameSafe(NewState)))\n{\nif (CurrentState != NewState)\n{\nUUTWeaponState* PrevState = CurrentState;\nif (CurrentState != NULL)\n{\nCurrentState->EndState(); // NOTE: may trigger another GotoState() call\n}\nif (CurrentState == PrevState)\n{\nCurrentState = NewState;\nCurrentState->BeginState(PrevState); // NOTE: may trigger another GotoState() call\nStateChanged();\n}\n}\n}\n}')]),e._v(" "),n("p",[e._v("Again, for the time being we're assuming we will be going to a Weapon State that extends UTWeaponStateFiring. This is the standard base class for firing behavior. "),n("strong",[e._v("UTWeaponStateFiring::BeginState()")]),e._v(" shows us:")]),e._v(" "),n("p",[e._v("void UUTWeaponStateFiring::BeginState(const UUTWeaponState* PrevState)\n{\nGetOuterAUTWeapon()->GetWorldTimerManager().SetTimer(this, &UUTWeaponStateFiring::RefireCheckTimer, GetOuterAUTWeapon()->GetRefireTime(GetOuterAUTWeapon()->GetCurrentFireMode()), true);\nToggleLoopingEffects(true);\nPendingFireSequence = -1;\nbDelayShot = false;\nGetOuterAUTWeapon()->OnStartedFiring();\nFireShot();\nGetOuterAUTWeapon()->bNetDelayedShot = false;\n}")]),e._v(" "),n("p",[e._v("Here we can see that the function "),n("strong",[e._v("UTWeaponStateFiring::FireShot()")]),e._v(" is called.")]),e._v(" "),n("p",[e._v('void UUTWeaponStateFiring::FireShot()\n{\n//float CurrentMoveTime = (GetUTOwner() && GetUTOwner()->UTCharacterMovement) ? GetUTOwner()->UTCharacterMovement->GetCurrentSynchTime() : GetWorld()->GetTimeSeconds();\n//UE_LOG(UT, Warning, TEXT("Fire SHOT at %f (world time %f)"), CurrentMoveTime, GetWorld()->GetTimeSeconds());\nGetOuterAUTWeapon()->FireShot();\n}')]),e._v(" "),n("p",[e._v("In UTWeaponStateFiring the most basic case of firing behavior is implemented. One button press immediately fires the gun, and on release the gun firing behavior ceases. UTWeaponStateFiring::FireShot() thus calls "),n("strong",[e._v("UTWeapon::FireShot()")]),e._v(":")]),e._v(" "),n("p",[e._v('void AUTWeapon::FireShot()\n{\nUTOwner->DeactivateSpawnProtection();\nConsumeAmmo(CurrentFireMode);\n \nif (!FireShotOverride() && GetUTOwner() != NULL) // script event may kill user\n{\nPlayFiringEffects();\nif (ProjClass.IsValidIndex(CurrentFireMode) && ProjClass[CurrentFireMode] != NULL)\n{\nFireProjectile();\n}\nelse if (InstantHitInfo.IsValidIndex(CurrentFireMode) && InstantHitInfo[CurrentFireMode].DamageType != NULL)\n{\nFireInstantHit();\n}\n}\nif (GetUTOwner() != NULL)\n{\nstatic FName NAME_FiredWeapon(TEXT("FiredWeapon"));\nGetUTOwner()->InventoryEvent(NAME_FiredWeapon);\n}\n}')]),e._v(" "),n("p",[e._v("From this point on our weapon code will branch to either "),n("strong",[e._v("UTWeapon::FireProjectile()")]),e._v(" or "),n("strong",[e._v("UTWeapon::FireInstantHit()")]),e._v(". Other tutorials provide ample examples of utilizing these functions for custom firing behavior, so I leave it to the reader to decide how to implement those functions as necessary to achieve desired behavior. For examples of how the Weapon State is used I recommend looking at the "),n("strong",[e._v("UTWeaponStateFiringBurst")]),e._v(" code to see how overriding the Weapon State can allow the user to create functionality where one button press does not necessarily correspond to one shot, but rather to an arbitrary number of shots. Overriding this functionality can allow the user to implement all kinds of exotic and never-before-seen types of functionality!")]),e._v(" "),n("p",[e._v('Retrieved from "'),n("a",{attrs:{href:"https://wiki.unrealengine.com/index.php?title=Create_A_Custom_Weapon_-_How_Firing_Works&oldid=12071",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://wiki.unrealengine.com/index.php?title=Create_A_Custom_Weapon_-_How_Firing_Works&oldid=12071"),n("OutboundLink")],1),e._v('"')]),e._v(" "),n("p",[n("a",{attrs:{href:"/Special:Categories",title:"Special:Categories"}},[e._v("Categories")]),e._v(":")]),e._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"/Category:Unreal_Tournament",title:"Category:Unreal Tournament"}},[e._v("Unreal Tournament")])]),e._v(" "),n("li",[n("a",{attrs:{href:"/Category:UT_Content_Creation",title:"Category:UT Content Creation"}},[e._v("UT Content Creation")])]),e._v(" "),n("li",[n("a",{attrs:{href:"/Category:Tutorials",title:"Category:Tutorials"}},[e._v("Tutorials")])]),e._v(" "),n("li",[n("a",{attrs:{href:"/Category:Code",title:"Category:Code"}},[e._v("Code")])]),e._v(" "),n("li",[n("a",{attrs:{href:"/Category:Community_Created_Content",title:"Category:Community Created Content"}},[e._v("Community Created Content")])])]),e._v(" "),n("p",[e._v("Hidden category:")]),e._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"/Category:Templates",title:"Category:Templates"}},[e._v("Templates")])])]),e._v(" "),n("p",[n("img",{attrs:{src:"https://tracking.unrealengine.com/track.png",alt:""}})])])}),[],!1,null,null,null);t.default=a.exports}}]);