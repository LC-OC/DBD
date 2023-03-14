/* MODELE 
     {
    id: ,
    name: ",
    img: "",
    perks: [
      {
        name_perks: "",
        description_perks: "",
        icon_perks: "",
      },
       {
        name_perks: "",
        description_perks: "",
        icon_perks: "",
      },
       {
        name_perks: "",
        description_perks: "",
        icon_perks: "",
      },
    ],
  },
  { id: ,
    name: "",
    img: "",}
*/

export const SURVIVORS_DATA = [
  {
    id: "meg",
    name: "Meg Thomas",
    img: "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/c/c8/New_Store_Meg.png",
    img_wraper:
      "https://r.res.easebar.com/pic/20221009/f68e8f02-bf59-4b14-a8aa-3790e325196f.jpg",
    description:
      "Though Meg excelled at schoolwork, she was prone to flying off the rails. Perhaps it was her mother that instilled the fierce streak in her. Maybe it was her father leaving when she was a baby. Fortunately, an athletics coach encouraged her to channel her misspent energy on the track, a path that led to a college scholarship. When her mother fell ill, Meg decided to give up her athletic dreams to care for her – until one summer’s day, on a run deep in the woods, Meg simply vanished.",
    perks: [
      {
        name_perks: "Quick & Quiet",
        description_perks:
          "You do not make as much noise as others when quickly vaulting over obstacles or hiding in Lockers. Suppresses both the Loud Noise Notification and the sound effects triggered by rushing to vault window, pallets, or rushing to enter or exit lockers. Quick & Quiet has a cool-down of 30/25/20 seconds.",
        icon_perks:
          "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/0/05/QuickAndQuiet.gif",
      },
      {
        name_perks: "Sprint Burst",
        description_perks:
          "When starting to run, break into a sprint at 150 % of your normal Running Movement speed for 3 seconds. Sprint Burst causes the Exhausted Status Effect for 60/50/40 seconds. Sprint Burst cannot be used when Exhausted.",
        icon_perks:
          "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/8/84/SprintBurst.gif",
      },
      {
        name_perks: "Adrenaline",
        description_perks:
          "You are fuelled by unexpecting energy when on the verge of escape. Once the Exit Gates are powered, instantly heal one Health State and sprint at 150 % of your normal Running Movement speed for 5 seconds. Adrenaline is on hold if you are disabled at the moment it triggers and will instead activate upon being freed. If playing against The Nightmare, Adrenaline will wake you from the Dream World upon activation. Adrenaline ignores an existing Exhaustion timer, but causes the Exhaust Status Effect for 60/50/40 seconds.",
        icon_perks:
          "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/a/af/Adrenaline.gif",
      },
    ],
  },
  {
    id: "dwight",
    name: "Dwight Fairfield",
    img: "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/5/5c/New_Store_Dwight.png",
    img_wraper: "https://zupimages.net/up/23/10/4bar.jpg",
    description:
      "Dwight strove to be one of the cool kids, but never quite had the charisma. Cut by the football team. Ignored by the basketball team. Grades, distinctly below average. One weekend, on a team-building exercise from his dead-end job, his boss led them deep into the woods. Out came the family recipe moonshine. Dwight remembered taking the first sip before waking up late the next morning all alone. A laughing stock once more, Dwight began hiking his way out of the woods. He was never seen again.",
    perks: [
      {
        name_perks: "Bond",
        description_perks:
          "Unlocks potential in your Aura-reading ability: The Auras of all other Survivors within 20/28/36 metres of your location are revealed to you.",
        icon_perks:
          "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/8/8c/Bond.gif",
      },
      {
        name_perks: "Prove Thyself",
        description_perks:
          "Increases your Repair speed by +15 % for each other Survivor within 4 metres of your location, up to a maximum of +45 %. This effect is also applied to all other Survivors within that range. Grants 50/75/100 % bonus Bloodpoints for Co-operative actions. Survivors can only be affected by one instance of Prove Thyself at a time.",
        icon_perks:
          "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/4/4e/ProveThyself.gif",
      },
      {
        name_perks: "Leader",
        description_perks:
          "You are able to organise a team to cooperate more efficiently. Increases the Action speeds of other Survivors in Healing, Sabotaging, Unhooking, Cleansing, Opening, and Unlocking by 15/20/25 % while they are within 8 metres of your location. This effect lingers for 15 seconds when leaving Leader's range. Survivors can only be affected by one instance of Leader at a time.",
        icon_perks:
          "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/7/7a/Leader.gif",
      },
    ],
  },
  {
    id: "claudette",
    name: "Claudette Morel",
    img: "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/3/3f/New_Store_Claudette.png",
    img_wraper: "https://zupimages.net/up/23/10/joba.png",
    description:
      "Ever since Claudette got her first science kit, she loved experiments. Her passion led to an early college scholarship. Chat rooms and forums became her main source of social interaction, answering botany questions under her moniker of Science Girl. One evening, Claudette sought to be close to nature. Within minutes, the once-familiar woods twisted into something unrecognizable, shrouding her in otherworldly fog. She never found her way back. Her forum only started to wonder where she was a week after she stopped posting.",
    perks: [
      {
        name_perks: "Empathy",
        description_perks:
          "Unlocks potential in your Aura-reading ability: The Auras of SurvivorsIcon in the Injured State or in the Dying StateIconHelp dying.png within 64/96/128 metres of your location are revealed to you. Empathy does not reveal the Aura of a Survivor being carried by the Killer.",
        icon_perks:
          "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/4/48/Empathy.gif",
      },
      {
        name_perks: "Botany Knowledge",
        description_perks:
          "You transform plants found around The Campfire into tinctures that slow down bleeding. Increases your Healing speed by 30/40/50 %. Reduces the Healing efficiency of Med-Kits by -20 %.",
        icon_perks:
          "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/b/bb/BotanyKnowledge.gif",
      },
      {
        name_perks: "Self-Care",
        description_perks:
          "Unlocks the Self-Care ability, allowing you to self-heal without needing a Med-Kit at 25/30/35 % of the normal Healing speed.",
        icon_perks:
          "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/8/86/Self-Care.gif",
      },
    ],
  },
  {
    id: "jake",
    name: "Jake Park",
    description:
      "Growing up the son of a wealthy CEO put the weight of the world on Jake Park. Yet neither money nor ambition fulfilled him. The secrecy surrounding his grandfather’s legacy drove him on a search for answers -- much to his father’s frustration. His quest was a lonely one, and many nights he found himself haunted by questions of identity. Before long, Jake Park was lost to the world, living off the land as a survivalist. That is, until the fog engulfed the forest.",
    img: "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/0/04/New_Store_Jake.png",
    img_wraper:
      "https://steamuserimages-a.akamaihd.net/ugc/1476569890330308307/CE4F500AD18A95658E8CD86EFF985AA387606163/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false",
    perks: [
      {
        name_perks: "Iron Will",
        description_perks:
          "You are able to concentrate and enter a meditative-like state to numb some pain. Reduces the volume of Grunts of Pain while in the Injured State by 25/50/75 %. Iron Will cannot be used when suffering from Exhaustion, but does not cause the Exhausted Status Effect.",
        icon_perks:
          "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/a/a1/IronWill.gif",
      },
      {
        name_perks: "Calm Spirit",
        description_perks:
          "Animals seem to trust you as they often stay calm in your presence. Prevents Crows from being alerted by your proximity and flying off, unless they are being stepped on. Suppresses the urge to scream from any cause at all times. Suppresses all noises related to unlocking Chests, and cleansing or blessing Totems. Reduces their Interaction speed by 40/35/30 %.",
        icon_perks:
          "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/d/d8/CalmSpirit.gif",
      },
      {
        name_perks: "Saboteur",
        description_perks:
          "Unlocks potential in your Aura-reading ability: For the duration of the Killer carrying another Survivor, you see the Aura of every Hook within 56 metres of the pick-up location: The Auras of regular Hooks are revealed to you in white. The Auras of Scourge Hooks are revealed to you in yellow. Unlocks the ability to sabotage Hooks without needing a Toolbox: Sabotaging a Hook without a Toolbox takes 2.5 seconds. The Sabotage action has a cool-down of 90/75/60 seconds.",
        icon_perks:
          "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/0/02/Saboteur.gif",
      },
    ],
  },
  {
    id: "nea",
    name: "Nea Karlsson",
    description:
      "Nea grew up in the small town of Hjo in Sweden, veering away from expected normalcy. Her tag -- Mashtyx -- quickly decorated her hometown. Nea made a sport of tagging government buildings, avoiding authorities with nimble agility. She might have gone too far when her friends dared her to tag the abandoned Crotus Prenn Asylum, but Nea was never one to back down from a challenge. She never returned. When police arrived, all they found was her unfinished tag above the door.",
    img: "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/b/ba/New_Store_Nea.png",
    img_wraper:
      "https://assets.deadbydaylight.com/nea_hag_skate_684032b9fa.jpg",
    perks: [
      {
        name_perks: "Balanced Landing",
        description_perks:
          "Your agility and cat-like relexes are incomparable. When falling from great heights, you benefit from the following effects: Reduces the Stagger duration by 75 %. Suppresses Grunts of Exertion from falling. Upon landing, break into a sprint at 150 % of your normal Running Movement speed for 3 seconds. Balanced Landing causes the Exhausted Status Effect for 60/50/40 ",
        icon_perks:
          "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/2/2b/BalancedLanding.gif",
      },
      {
        name_perks: "Urban Evasion",
        description_perks:
          "Years of evading the cops taught you a thing or two about stealth. Increases your Crouching Movement speed by 90/95/100 %.",
        icon_perks:
          "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/a/a0/UrbanEvasion.gif",
      },
      {
        name_perks: "Streetwise",
        description_perks:
          "Long nights out taught you to do a lot with what you have got. Increases the Efficiency of your Items by 15/20/25 %. Streetwise extends its effect to all other Survivors within 8 metres of your location and lingers for 15 seconds.",
        icon_perks:
          "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/e/ef/Streetwise.gif",
      },
    ],
  },
  {
    id: "laurie",
    name: "Laurie Strode",
    description:
      "Laurie Strode wanted a quiet life in the suburbs, hanging out with friends and family. Maybe even going on a date or two. She did her homework and was liked by her friends, teachers, and family. A typical teenager – until a simple night of babysitting changed the course of her life forever. A night filled with bloody knives and screams from afar -- with pure, unstoppable Evil. Luckily, Laurie is made of something stronger. Something that won't give up.",
    img: "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/9/90/New_Store_Laurie.png",
    img_wraper:
      "https://pbs.twimg.com/media/Fa9wowJWYAAjyrb?format=jpg&name=4096x4096",
    perks: [
      {
        name_perks: "Sole Survivor",
        description_perks:
          "As more of your friends fall to the Killer, you become shrouded in isolation and the Killer's Aura-reading abilities towards you are disrupted. Each time a Survivor other than yourself is killed or sacrificed, Sole Survivor gains 1 Token, up to a maximum of 3 Tokens: Each Token grants a stack-able radius of 20/22/24 metres within which the Killer is unable to read your AuraIconHelp auras.png, up to a maximum of 60/66/72 metres. Once you are the last Survivor standing, you benefit from the following effects: Increases your Repair speed of Generators by +75 %. Increases your Opening speed of the Exit Gates and the Hatch by +50 %. Increases the odds of becoming the Killer's initial Obsession by +100 %. The Killer can only be obsessed with Survivor at a time.",
        icon_perks:
          "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/7/7b/SoleSurvivor.gif",
      },
      {
        name_perks: "Object of Obsession",
        description_perks:
          "A supernatural bond links you to the Killer. Whenever the Killer reads your Aura and for the same duration as they do so, Object of Obsession activates: The Killer's Aura is revealed to you. Increases your Action speeds in Repairing, Healing, and Cleansing by 2/4/6 %. If you are the Obsession, your Aura is automatically revealed to the Killer for 3 seconds every 30 seconds. Increases the odds of becoming the Killer's initial Obsession by +100 %. The Killer can only be obsessed with Survivor at a time.",
        icon_perks:
          "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/1/1e/ObjectOfObsession.gif",
      },
      {
        name_perks: "Decisive Strike",
        description_perks:
          "Using whatever is at hand, you stab your aggressor in an ultimate attempt to escape. After being unhooked or unhooking yourself, Decisive Strike activates for the next 40/50/60 seconds: When being grabbed or picked up by the Killer, succeed a Skill Check to automatically escape their grasp, stunning them for 3 seconds. Successfuly stunning the Killer will disable Decisive Strike for the remainder of the Trial and result in you becoming the Obsession. While Decisive Strike is active, performing Conspicuous Actions will deactivate it for the remainder of the Trial. Decisive Strike deactivates once the Exit Gates are powered. Increases the odds of becoming the Killer's initial Obsession by +100 %. The Killer can only be obsessed with Survivor at a time.",
        icon_perks:
          "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/4/44/DecisiveStrike.gif",
      },
    ],
  },
  {
    id: "ace",
    name: "Ace Visconti",
    description:
      "With his sharp Italian looks, grey-streaked hair and silver tongue, Ace Visconti might pass for an ageing 50's movies star – but his heart has always belonged to the cards. From his roots as a poor boy in Argentina, he gambled, scammed, seduced, and smooth-talked his way to a life of luxury as a high roller in the land of opportunity. Eventually, he racked up too many debts with the wrong kind of people. When they finally came to collect, Ace was nowhere to be found.",
    img: "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/3/3e/New_Store_Ace.png",
    img_wraper:
      "https://assets.deadbydaylight.com/ace_adam_mean_streets_6bd3454bba.png",
    perks: [
      {
        name_perks: "Up the Ante",
        description_perks:
          "All will be well in the end, you just know it. Your confidence strengthens the feeling of hope for those around you. For Each Survivor still in the Trial, Up the Ante gains 1 Token. Each Token applies a stack-able 1/2/3 % bonus to the Luck of all Survivors, up to a maximum of 3/6/9 %.",
        icon_perks:
          "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/b/bb/UpTheAnte.gif",
      },
      {
        name_perks: "Open-Handed",
        description_perks:
          "Strengthens the potential in your and your team's Aura-reading abilities. Extends the radius of all Survivor-based Aura-reading abilities by 8/12/16 metres. Survivors can only be affected by one instance of Open-Handed at a time.",
        icon_perks:
          "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/6/65/Open-Handed.gif",
      },
      {
        name_perks: "Ace in the Hole",
        description_perks:
          "Lady Luck always seems to be throwing something good your way. When retrieving an Item from a Chest, there is a chance an Add-on will be attached to it. 100 % chance for an Add-on of Very Rare Rarity or lower. 10/25/50 % chance for a second Add-on of Uncommon Rarity or lower. Ace in the Hole allows you to keep any Add-ons your Item has equipped upon escaping.",
        icon_perks:
          "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/2/2f/AceInTheHole.gif",
      },
    ],
  },
  {
    id: "bill",
    name: "Bill Overbeck",
    description:
      "It took two tours in Vietnam, a handful of medals, and an honourable discharge to get William 'Bill' Overbeck to stop fighting and try to live a peaceful life. After decades spent drifting aimlessly, Bill woke to find the world he knew was gone. A plague was turning normal people into mindless killing machines. He soon found other Survivors, and together they fled from the infected hordes. In the end, he sacrificed himself to ensure their safety. Bill was left for dead, his body never found.",
    img: "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/0/01/New_Store_Bill.png",
    img_wraper: "https://pbs.twimg.com/media/FbaUOAlWAAEw3z7.jpg",
    perks: [
      {
        name_perks: "Left Behind",
        description_perks:
          "You will get the job done... no matter the cost. When you are the last Survivor remaining in the Trial, the Aura of the Hatch is revealed to you when you are within 24/28/32 metres.",
        icon_perks:
          "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/7/71/LeftBehind.gif",
      },
      {
        name_perks: "Borrowed Time",
        description_perks:
          "You are fuelled with an unexpected energy when saving an ally from a Hook. Survivors you unhook benefit from the following effects: Extends the duration of their Endurance Status Effect by 6/8/10 seconds. Extends the duration of their Haste Status Effect by 10 seconds.",
        icon_perks:
          "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/5/5d/BorrowedTime.gif",
      },
      {
        name_perks: "Unbreakable",
        description_perks:
          "Past battles have taught you a thing or two about survival. Once per Trial, you can completely recover from the Dying State. Your Recovery speed is increased by 25/30/35 %.",
        icon_perks:
          "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/a/a6/Unbreakable.gif",
      },
    ],
  },
  {
    id: "feng",
    name: "Feng Min",
    description:
      "Feng Min pushed her limits to prove she was the best. Sleep was less important to her than E-Sports training. She filled stadiums with adoring fans. The pressure to be the best grew stronger and stronger. She pushed herself too far, slept too little, and her performance slipped. She started to lose, spiralling into self-destruction. She wandered the streets and visited bars, waking up in places she didn't remember. Eventually, she woke up somewhere different -- in a never-ending nightmare.",
    img: "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/d/d9/New_Store_Feng.png",
    img_wraper:
      "https://assets.deadbydaylight.com/feng_spring_ensembles_ff5882a93f.png",
    perks: [
      {
        name_perks: "Lithe",
        description_perks:
          "After performing a rushed vault, break into a sprint of 150 % of your normal Running Movement speed for a maximum of 3 seconds. Lithe causes the Exhausted Status Effect for 60/50/40 seconds. Lithe cannot be used when Exhausted.",
        icon_perks:
          "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/8/8d/Lithe.gif",
      },
      {
        name_perks: "Alert",
        description_perks:
          "Your acute senses are on high alert. Whenever the Killer destroys a Pallet or a Breakable Wall, or damages a Generator, their Aura is revealed to you for 3/4/5 seconds.",
        icon_perks:
          "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/e/e7/Alert.gif",
      },
      {
        name_perks: "Technician",
        description_perks:
          "You are apt at handling machinery with the greatest care and precision. Failing a Skill Check while repairing: Prevents the Generator Explosion. Applies the default Regression penalty. Applies an additional Regression penalty of 5/4/3 %. Technician reduces the audible range of your Generator-repairing noises by 8 metres.",
        icon_perks:
          "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/0/00/Technician.gif",
      },
    ],
  },
  {
    id: "david",
    name: "David King",
    description:
      "Free from the constraints of a career and enabled by family wealth, David King spent most of his time at the pub, drinking, watching games, and getting into fights. Few knew that he was an occasional 'debt collector' or that he fought in clandestine bare-knuckle fight clubs. When David King stopped showing up to the pub, his friends were not surprised. They figured he had finally picked a fight with someone stronger. In a way, they were right.",
    img: "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/f/f5/New_Store_David.png",
    img_wraper:
      "https://deadbydaylight.com/static/6eadc245b47e760e6a2d928e9b4432a3/bb1c4/survivor_davidking_lore_05476cb958.jpg",
    perks: [
      {
        name_perks: "We're Gonna Live Forever",
        description_perks:
          "Your few friends deserve the best protection. Increases your Healing speed by 100 % when healing a dying Survivor. When performing any of the following actions, We're Gonna Live Forever gains 1 Token: Performing a Safe Hook Rescue, Taking a Protection Hit for an injured Survivor, Stunning or Blinding the Killer to rescue a carried Survivor.Consume 1 Token to grant the Endurance Status Effect for 6/8/10 seconds to any Survivor healed from the Dying State.",
        icon_perks:
          "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/0/0f/WereGonnaLiveForever.gif",
      },
      {
        name_perks: "Dead Hard",
        description_perks:
          "Activate-able Perk. You can take a beating. When you are injured, tap into your adrenaline bank to avoid damage. Press the Active Ability button while running to trigger the Endurance Status Effect for 0.5 seconds. Dead Hard causes the Exhausted Status Effect for 60/50/40 seconds. Dead Hard cannot be used when Exhausted.",
        icon_perks:
          "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/e/ea/DeadHard.gif",
      },
      {
        name_perks: "No Mither",
        description_perks:
          "Go on out, kid, it is just a scratch. Your thick blood coagulates practically instantly. You suffer from the Broken Status Effect for the entire Trial, but benefit from the following effects: Pools of Blood are suppressed. When injured or dying, Grunts of Pain are reduced by 25/50/75 %. Your Recovery speed is increased by 15/20/25 %. You can recover fully from the Dying State.",
        icon_perks:
          "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/5/57/NoMither.gif",
      },
    ],
  },
  {
    id: "quentin",
    name: "Quentin Smith",
    description:
      "Quentin never attracted attention in a library, no matter how strange the texts he requested. He devoured all the information he could find on shared dream worlds, lucid dreaming, and the methods to control the dream space. Forcing himself to stay awake through a steady diet of pills and energy drinks, he scoured dusty tomes for myths about demons residing in dreams, trapping their victims, and feeding off terror. He worked quickly, as he knew that Freddy would soon be coming.",
    img: "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/3/31/New_Store_Quentin.png",
    img_wraper:
      "https://deadbydaylight.com/static/57c37dd3c1e291825050317779c37114/998ec/quentin_pharmacy_screen_534865be6c.jpg",
    perks: [
      {
        name_perks: "Wake Up !",
        description_perks:
          "Unlocks potential in your Aura-reading ability. Once all Generators are completed, Wake Up! activates: The Auras of the Exit Gate Switches are revealed to you within 128 metres. When opening an Exit Gate, your Aura is revealed to all other Survivors within 128 metres. You open Exit Gates 15/20/25 % faster.",
        icon_perks:
          "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/0/09/WakeUp.gif",
      },
      {
        name_perks: "Pharmacy",
        description_perks:
          "You have a knack for finding medicine. Whenever you are in the Injured State, Pharmacy activates: Increases the Unlocking speed of Chests by 40/60/80 %. Reduces the Hearing range of noises related to Unlocking by -8 metres. Guarantees an Emergency Med-Kit when unlocking a Chest.",
        icon_perks:
          "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/0/08/Pharmacy.gif",
      },
      {
        name_perks: "Vigil",
        description_perks:
          "You look over your friends even in dire situations. Increases your Recovery rate from the Blindness, Broken, Exhaustion, Exposed, Haemorrhage, Hindered, and Oblivious Status Effects by 20/25/30 %. This effect also applies to all other Survivors within 8 metres of your location and lingers for 15 seconds.",
        icon_perks:
          "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/1/16/Vigil.gif",
      },
    ],
  },
  {
    id: "tapp",
    name: "David Tapp",
    description:
      "When David Tapp was assigned the Jigsaw case, it seemed like another lunatic with a flair for the over-dramatic. A stroke of insight brought him and his partner to an abandoned mannequin factory, where they discovered Jigsaw’s lair. The man managed to escape, slashing Tapp's throat. His partner pursued and fell victim to a fatal trap. Tapp failed to go by the book and it had resulted in a Detective's death. He was discharged from the force, left with a ruined throat and a guilt-driven obsession.",
    img: "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/7/71/New_Store_Tapp.png",
    img_wraper:
      "https://deadbydaylight.com/static/fdafa312f35f51e5ca090049bdea7ce8/691d2/survivor_davidtapp_lore_0832048425.png",
    perks: [
      {
        name_perks: "Tenacity",
        description_perks:
          "There is nothing stopping you. Your ferocious tenacity in dire situations allow you to benefit from the following effects: Increases your Crawling speed by 30/40/50 %. Grants the ability to crawl and recover at the same time. Reduces the volume of Grunts of Pain while in the Dying State by -75 %.",
        icon_perks:
          "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/9/95/Tenacity.gif",
      },
      {
        name_perks: "Detective's Hunch",
        description_perks:
          "Unlocks potential in your Aura-reading ability. Each time a Generator is completed, the Auras of any Generators, Chests, and Totems within 32/48/64 metres are revealed to you for 10 seconds. If you are holding a Map, any objects revealed by Detective's Hunch will automatically be tracked by it.",
        icon_perks:
          "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/3/33/DetectivesHunch.gif",
      },
      {
        name_perks: "Stake Out",
        description_perks:
          "Getting close to the Killer fills you with determination. Every 15 seconds you are within the Killer's Terror Radius, while not being chased, Stake Out gains 1 Token, up to a maximum of 2/3/4 Tokens. When Stake Out has at least 1 Token, Good Skill Checks consume 1 Token and are considered Great Skill Checks, granting an additional Progression bonus of 1 %. Great Skill Checks do not consume any Tokens.",
        icon_perks:
          "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/d/db/StakeOut.gif",
      },
    ],
  },
  {
    id: "kate",
    name: "Kate Denson",
    description:
      "Kate Denson wrote songs to lift people out of dark places. The spotlight and success were nothing compared to the connections she forged with her fans. With a guitar in hand, Kate sang of love, friendship, and family, writing music and lyrics from a secluded grove in the forest. But that was then. These days, she’s haunted by a dark and disturbing melody, otherworldly in nature, burrowing deep into the recesses her mind. She wants it to stop, and yet – it's almost welcoming.",
    img: "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/0/0f/New_Store_Kate.png",
    img_wraper:
      "https://assets.deadbydaylight.com/08_curtain_call_key_art_5c0fa9a579.png",
    perks: [
      {
        name_perks: "Dance With Me",
        description_perks:
          "When performing a rushed action to vault a WindowIconHelp window.png, Pallet, or leave a Locker, you will not leave any Scratch Marks for the next 3 seconds. Dance With Me has a cool-down of 60/50/40 seconds.",
        icon_perks:
          "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/e/e6/DanceWithMe.gif",
      },
      {
        name_perks: "Windows of Opportunity",
        description_perks:
          "Unlocks potential in your Aura-reading ability. The AurasIconHelp auras.png of Breakable Walls, Pallets, and Windows are revealed to you within 24/28/32 metres.",
        icon_perks:
          "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/6/6c/WindowsOfOpportunity.gif",
      },
      {
        name_perks: "Boil Over",
        description_perks:
          "You are a battler and do everything to escape a foe's grasp. While being carried by the Killer, the following effects apply: Increases the intensity of the Struggle Effects on the Killer from your Wiggling by 60/70/80 %. Obscures the Auras of all Hooks from the Killer's Aura-reading abilities within 16 metres. Fills your Wiggle Meter by 33 % of your current Wiggle progression upon landing, when the Killer drops from great heights.",
        icon_perks:
          "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/7/7e/BoilOver.gif",
      },
    ],
  },
  {
    id: "adam",
    name: "Adam Francis",
    description:
      "After growing up in Jamaica, Adam Francis' passion for literature landed him a teaching position in Japan. He learned the language and embraced the culture, forging genuine connections with his students. On the way to work, his train derailed, flipping upside down with a violent screech. As an unhinged door careened toward a passenger, Adam shielded the woman from harm, bracing for an impact that never came. Opening his eyes, he saw darkness, as tendrils of black fog swirled amidst the wreckage.",
    img: "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/0/05/New_Store_Adam.png",
    img_wraper:
      "https://deadbydaylight.com/static/727cf19ddeb5176f7f3e52dc9c33184a/54ac6/survivor_adam_lore_452d7259fe.webp",
    perks: [
      {
        name_perks: "Diversion",
        description_perks:
          "After being within the Killer's Terror Radius for 40/35/30 seconds without being chased, Diversion activates: Press the Active Ability button while crouched and motionless to throw a pebble, creating a distraction for the Killer at a distance of 20 metres from your location. The distraction consists of the following: Triggers a Loud Noise Notification. Creates fake Scratch Marks. Diversion deactivates after use and resets its timer.",
        icon_perks:
          "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/f/ff/Diversion.gif",
      },
      {
        name_perks: "Deliverance",
        description_perks:
          "After performing a Safe Hook Rescue on another Survivor, Deliverance activates: Causes your next Self-Unhook attempt to always succeed. Causes the Broken Status Effect for 100/80/60 seconds after unhooking yourself. Deliverance is not available during the second Hook Stage or if you are hooked as the last living Survivor in the Trial, regardless of your Hook Stage then.",
        icon_perks:
          "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/2/24/Deliverance.gif",
      },
      {
        name_perks: "Autodictat",
        description_perks:
          "You start the Trial with a Progression penalty of -25 % for succeeding a Good Skill Check while healing another Survivor. Succeeding a Good Skill Check while healing another Survivor grants 1 Token, up to a maximum of 3/4/5 Tokens. Each Token grants a stack-able Progression bonus of +15 % for succeeding a Good Skill Check while healing another Survivor. Suppresses Great Skill Checks while healing another Survivor. Autodidact remains inactive while healing another Survivor using a Med-Kit.",
        icon_perks:
          "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/7/7d/Autodidact.gif",
      },
    ],
  },
  {
    id: "jeff",
    name: "Jeff Johansen",
    description: "",
    img: "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/7/7d/New_Store_Jeff.png",
    img_wraper:
      "https://deadbydaylight.com/static/0f467e00ad3644e098f54ec581608acc/54ac6/survivor_jeff_lore_fa85e65c3c.webp",
    perks: [
      {
        name_perks: "Breakdown",
        description_perks:
          "Each time you are unhooked or unhook yourself, the Hook breaks and the Killer's Aura is revealed to you for 4/5/6 seconds. A Hook broken by Breakdown takes 180 seconds to respawn.",
        icon_perks:
          "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/2/26/Breakdown.gif",
      },
      {
        name_perks: "Aftercare",
        description_perks:
          "Unlocks potential in your Aura-reading ability. You see the Aura of the last 1/2/3 Survivor(s): You have rescued from a Hook, or who have rescued you from a Hook. You have completed a Healing action on, or who have completed a Healing action on you. They also see your Aura. All effects of Aftercare are reset upon being hooked by the Killer.",
        icon_perks:
          "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/7/7d/Aftercare.gif",
      },
      {
        name_perks: "Distortion",
        description_perks:
          "You start the trial with 3 Tokens. Whenever the Killer attempts to read your AuraIconHelp auras.png, Distortion activates and 1 Token is consumed: Your Aura will not be shown to the Killer and you will not leave any Scratch Marks for the next 6/8/10 seconds. Every 30 seconds you are within the Killer's Terror Radius, Distortion gains back 1 Token. Distortion does not activate when you are in the Dying State. Distortion cannot accumulate more Tokens than its initial count.",
        icon_perks:
          "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/5/58/Distortion.gif",
      },
    ],
  },
  {
    id: "jane",
    name: "Jane Romero",
    description:
      "Jane Romero grew up her actress mother’s shadow, inspired by her on-screen presence and resentful of her real-life absence. She too was drawn to the stage, honing her talents as a performer and director. Despite being inundated with auditions for stereotypical, underdeveloped roles, Jane found success with her own nationally aired talk show: The Jane Romero Show. At least, until a night drive down a slick highway sent her plunging into icy black depths – or so her grieving fans believed.",
    img: "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/f/f4/New_Store_Jane.png",
    img_wraper:
      "https://assets.deadbydaylight.com/lore_jane_romero_cacf9879a6.png",
    perks: [
      {
        name_perks: "Solidarity",
        description_perks:
          "Sharing painful experiences has the power to heal. When injured, healing another Survivor without using a Med-Kit also heals you with a Conversion rate of 40/45/50 %.",
        icon_perks:
          "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/7/77/Solidarity.gif",
      },
      {
        name_perks: "Poised",
        description_perks:
          "Achieving goals boosts your confidence. After a Generator is completed, you will not leave any Scratch Marks for the next 6/8/10 seconds.",
        icon_perks:
          "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/a/a3/Poised.gif",
      },
      {
        name_perks: "Head On",
        description_perks:
          "When your mind is set, there better be no one standing in your way. While standing in a Locker for 3 seconds, Head On activates: When performing a rushed action to leave a Locker, stun the Killer for 3 seconds if they are within range. Head On causes the Exhausted Status Effect for 60/50/40 seconds. Head On cannot be used when Exhausted or when you have accrued Idle Crows.",
        icon_perks:
          "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/4/4b/HeadOn.gif",
      },
    ],
  },
];
