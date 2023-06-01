/* global monogatari */

// Define the messages used in the game.
monogatari.action ('message').messages ({
	'Help': {
		title: 'Help',
		subtitle: 'Some useful Links',
		body: `
			<p><a href='https://developers.monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p>
			<p><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>
		`
	}
});

// Define the notifications used in the game
monogatari.action ('notification').notifications ({
	'Welcome': {
		title: 'Welcome',
		body: 'This is the Monogatari VN Engine',
		icon: ''
	}
});

function defeated(){
	monogatari.storage().player.chances = monogatari.storage().player.chances - monogatari.storage().player.defea
};
function win(){
	monogatari.storage().player.points = monogatari.storage().player.points + monogatari.storage().player.wp
}
function winner(){
	monogatari.storage().player.points2 = monogatari.storage().player.points2 + monogatari.storage().player.wp2
}
function defeater(){
	monogatari.storage().player.chances2 = monogatari.storage().player.chances2 - monogatari.storage().player.defea
};

// Define the Particles JS Configurations used in the game
monogatari.action ('particles').particles ({

});

// Define the canvas objects used in the game
monogatari.action ('canvas').objects ({

});

// Credits of the people involved in the creation of this awesome game
monogatari.configuration ('credits', {

});


// Define the images that will be available on your game's image gallery
monogatari.assets ('gallery', {

});

// Define the music used in the game.
monogatari.assets ('music', {
	'maintheme': 'bgmusic.mp3',
	'battletime': 'battletime.mp3'
});

// Define the voice files used in the game.
monogatari.assets ('voices', {

});

// Define the sounds used in the game.
monogatari.assets ('sounds', {

});

// Define the videos used in the game.
monogatari.assets ('videos', {

});

// Define the images used in the game.
monogatari.assets ('images', {

});

// Define the backgrounds for each scene.
monogatari.assets ('scenes', {
	'mainBackground': 'MainBack.png',
	'away': 'away.png',
	'burnvi': 'buvi.png',
	'sc1pl': 'plsc1.png',
	'smoke': 'smoky.png',
	'dedo': 'dedu.png',
	'cry': 'froze.png',
	'vill': 'vill.png',
	'stro': 'strongmom.png',
	'nel': 'newlion.png',
	'stae': 'staring.png',
	'fest': 'fast.png',
	'lanch': 'Launch.png',
	'grab': 'grab.png',
	'ready': 'ridy.png',
	'oop': 'oops.png',
	'stop': 'stoop.png',
	'awake': 'awake.png',
	'look': 'lookthyself.png',
	'graby': 'graby.png',
	'runner': 'runner.png',
	'chaser': 'chasers.png',
	'eyes': 'eyes.png',
	//WORDS
	'w1': 'word1.png',
	'w2': 'word2.png',
	'w3':'word3.png',
	'w4':'word4.png',
	'w5':'word5.png',
	'w6':'word6.png',
	// CHAP 1
	'1':'chap1.png',
	'1.1':'chap1.1.png',
	'1.2':'chap1.2.png',
	'1.3':'chap1.3.png',
	'1.4':'chap1.4.png',
	'1.5':'chap1.5.png',
	'1.6':'chap1.6.png',
	'1.7':'chap1.7.png',
	'1.8':'chap1.8.png',
	'1.9':'chap1.9.png',
	'1.10':'chap1.10.png',
	'1.11':'chap1.11.png',
	'1.12':'chap1.12.png',
	'1.13':'chap1.13.png',
	'1.14':'chap1.14.png',
	'1.15':'chap1.15.png',
	'1.16':'chap1.16.png',
	'1.17':'chap1.17.png',

});


// Define the Characters
monogatari.characters ({
	'a': {
		name: '{{player.name}}',
		color: '#F0F8FF',
		sprites: {
			son : 'Ariel.png'
		},
		expressions: {
			normal: 'ArielFace.png'
		}
	},
	'm': {
		name: 'Gura',
		color: '#A52A2A',
		sprites: {
			mothe: 'Gura.png'
		},
		expressions: {
			normal: 'GuraFace.png'
		}
	},
	'y': {
		name: 'Yaku',
		color: '#556B2F',
		expressions: {
			normal: 'yaku.png'
		}
	},
	'l': {
		name: 'Mandel',
		color: '#7FFFD4',
		expressions: {
			normal: 'Mandel.png'
		}
	},
	'r': {
		name: 'Ronin',
		color: '#EEE8AA',
		expressions: {
			normal: 'Ronin2.png'
		}
	},
	'g': {
		name: 'Guard',
		color: '#FF7F50',
		expressions: {
			normal: 'guard.png'
		}
	},
});

monogatari.script ({
	// The game starts here.
	'Start': [
		/*'show notification Welcome',
		{
			'Input': {
				'Text': 'Enter your Name',
				'Validation': function (input) {
					return input.trim ().length > 0;
				},
				'Save': function (input) {
					this.storage ({
						player: {
							name: input
						}
					});
					return true;
				},
				'Revert': function () {
					this.storage ({
						player: {
							name: ''
						}
					});
				},
				'Warning': 'You must enter a name!'
			}
		},*/
		// PROLOGUE //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		'play music maintheme with loop',
		'show scene black',
		'm:normal Run, {{player.name}}!, Go where they wont find you! TESTING TESTING',
		'show scene away',
		'Your mother screamed, while keeping the leosapien away',
		'show scene smoke with FadeIn',
		'The acrid smell of smoke filled your nose, and the heat of the flames prickled at your skin.',
		'show scene dedo',
		'The lifeless face of the people whom you once knew, now lays on the ground, either with blood on their face, or no face at all. ',
		'show scene cry',
		'In a daze, you stand frozen, unable to decide.',
		'show scene black',
		{
			'Choice': {
				'Dialog': 'What will you do?',
				'run': {
					'Text': '> Run away',
					'Do': 'jump runaway'
				},
				'mother': {
					'Text': '> Dont leave',
					'Do': 'jump walkmother'
				}
			}
		}
	],

	'runaway': [
		'show scene runner',
		'As you turned your back on the burning remains of your village, the screams of the dying still ringing in your ears, you felt a sense of despair settle over you like a heavy shroud. You had lost everything - your family, your home, your way of life.',
		'show scene chaser',
		'Suddenly, a loud thumping noise pierced through the chaos around you, the sound of two creatures running on all fours in hot pursuit. You didnt need to turn around to know that they were lion-sapiens, the same ones who had attacked your village and left it in ruins.',
		'Fear and adrenaline surged through your body as you realized that you were their next target.',
		'show scene black',
		{
			'Choice': {
				'Dialog': 'What will you do?',
				'fight': {
					'Text': 'Fight Back',
					'Do': 'jump fighting'
				},
			}
		}
	],
	'fighting': [
		'show scene eyes',
		'You were paralyzed with fear, knowing that you were no match for the lion-sapiens in front of you. As the forehead-marked leo-sapien raised his knife, you closed your eyes, waiting for the inevitable. ',
		'But then, a voice interrupted the impending violence.',
		'show scene black',
		'r:normal Stop! Hes just a child.',
		'y:normal What do you think youre doing? hes my prey!',
		'r:normal Youre going too far.',
		'y:normal Hmmph! Next time, Ill get you.',
		'centered The leo-sapien have let you go...',
		{
			'Choice':{
				'Dialog': '',
				'wake': {
					'Text' : 'Continue',
					'Do': 'jump waked'
				}
			}
		}
	],
	'waked': [
		'show scene black',
		'centered 5 Years later...',
		'show scene awake',
		'As you stirred awake, the forest canopy above provided a flickering, dappled shade on your face. Your chest heaved, as you gasped for breath, sweat trickling down your forehead, the nightmare still haunting you after five long years.',
		'show scene look',
		'With a shaky hand, you rummaged through your satchel, pulling out a jagged shard of glass. You gazed into its reflection, your one good eye glaring back at you. The other, a milky orb of scar tissue, a bitter reminder of the turkey-sapiens attack from the day before.',
		'show scene graby',
		'You rose to your feet, clutching the shard tightly, and set out on your journey once again. The search for the lion-sapiens who had mercilessly slaughtered your entire clan was your sole purpose in life. Nothing else mattered anymore.',
		'show scene black',
		{
			'Choice': {
				'Dialog': '',
				'yesno': {
					'Text': '>Continue',
					'Do' : 'jump chap1'
				},
			}
		}
	],

	'walkmother': [
		'show scene stro',
		'You disobeyed your mothers command to flee and instead rushed towards her, witnessing as she dispatched her current foe with a swift motion.',
		'show scene black',
		'm:normal What are you doing! I told you to run!',
		'a:normal I cant leave you!',
		'show scene nel',
		'However, before you could fully exhale in relief, another leo-sapien stepped up to take the fallens place.',
		'show scene black',
		{
			'Choice': {
				'Dialog': 'What will you do?',
				'hilpr': {
					'Text': 'Help your Mother',
					'Do': 'jump helpmom'
				},
			}
		}
	],
	'helpmom': [
		'show scene stae',
		'As your mother turned to face the new attacker, you saw his eyes fixated on you, gleaming with malicious intent.',
		'show scene lanch',
		'Without hesitation, he lunged forward and grabbed you',
		'show scene black',
		'y:normal Come here you!',
		'show scene grab',
		'he held you hostage with a knife at your throat.',
		'show scene black',
		{
			'Choice': {
				'Dialog': 'What will you do?',
				'yesno': {
					'Text': 'Struggle',
					'Do' : 'jump foughtback'
				}
			}
		}

	],
	'foughtback': [
		'a:normal Let m-me go!',
		'You fought to break free from the leo-sapiens grip, your muscles strained with effort.',
		'show scene fest',
		'Suddenly, a dagger whizzed past your head and buried itself in the attackers shoulder, forcing him to release you.',
		'show scene black',
		'm:normal Mandel! I was woried about you.',
		'l:normal Dont worry about me, Ariel run! me and mom will handle this.',
		'show scene nel',
		'The leo-sapien stood in the middle of the three of you, frustration etched on his face as he surveyed the situation.',
		'show scene black',
		{
			'Choice': {
				'Dialog': 'What will you do?',
				'yesno': {
					'Text': 'Fight together',
					'Do' : 'jump stay'
				},
			}
		}

	],
	'stay': [
		'show scene ready',
		'Your mother and brother lunged towards the attacker with weapons raised, ready to end the fight in a matter of seconds. ',
		'show scene oop',
		'But their confidence was misplaced, as the leo-sapien sprung a trap that sent them plummeting into a pit, leaving only their heads exposed.',
		'show scene black',
		'y:normal HA-HA-HAHA-HA,',
		'y:normal You gullible fools! Did you really think Deers stand a chance against a Lion like me?',
		'centered "I AM THE HUNTER."',
		'show scene stop',
		'The leo rushed towards you whan he was suddenly interrupted by another leo-sapien with a beautiful golden fur.',
		'r:normal Hes just a child, Let him go.',
		'show scene black',
		{
			'Choice': {
				'yesno': {
					'Text': '> Continue',
					'Do' : 'jump waked'
				},
			}
		}

	],

	//for Copy Paste
	/*'empty': [
		'Hello',
		{
			'Choice': {
				'Dialog': 'What will you do?',
				'yesno': {
					'Text': '>yes',
					'Do' : 'jump there'
				},
				'noyes': {
					'Text': '>no',
					'Do' : 'jump where'
				},
				
			}
		}

	],*/
	// END OF PROLOGUE //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	'chap1': [
		'show scene 1',
		'You traveled tirelessly from one village to another, determined to find any leads on the gold-fur leo-sapien. You interviewed victimized tribes and exhausted every possible resource to track them down, but to no avail.',
		'show scene black',
		'Bong!, Bong!, Bong!',
		'a:normal What is that?',
		'show scene 1.1',
		'As you rested beneath the shade of a tree, you heard the distant sound of drum beats and saw smoke rising from a nearby village.',
		'show scene 1.2',
		'You found tribes from different regions gathered together, celebrating as one. It was a stark contrast to the terror and fear you had witnessed in the villages you had visited before.',
		'show scene black',
		{
			'Choice': {
				'Dialog': '',
				'yesno': {
					'Text': '>Join',
					'Do' : 'jump chap1.1'
				},
			}
		}

	],
	'chap1.1': [
		'show scene black',
		'a:normal What is this smell?',
		'show scene 1.3',
		'You suddenly felt a sharp pain in your chest. The place stroke familiarity, not because youve visited this before, not because you saw a long lost friend, but because of the putrid smell everyone in there seems to enjoy.',
		'show scene 1.4',
		'The smell of burning venison(deer meat), specifically, the ones being cooked. They ate in joy, while the smell brought you back to the time where you saw your village burned, along with your people in it.',
		'show scene black',
		{
			'Choice': {
				'Dialog': 'What will you do?',
				'noyes': {
					'Text': '>Roam Around',
					'Do' : 'jump chap1.2'
				}
				
			}
		}

	],
	'chap1.2': [
		'show scene 1.5',
		'A short distance from the entrance, you spotted a lively saloon where people gathered to celebrate. Stepping inside, the scene unfolded before you—a captivating sight if you could overlook the pungent smell that lingered in the air. Deep down, you knew it was unlikely to find the answers you sought from a gathering of intoxicated individuals.',
		'show scene 1.6',
		'Within the bustling space, a group of boisterous Lepus-sapiens caught your attention. They laughed heartily, clinking their drinks together in cheerful toasts. Their lively energy filled the room, temporarily pushing aside any lingering worries you had.',
		'show scene 1.7',
		'In a corner, a solitary Sphingas-sapien sat at a circular table, nursing a drink with an air of contemplation. Their enigmatic presence intrigued you, hinting at untold stories and wisdom gained from countless experiences.',
		'show scene 1.8',
		'Behind the bar stood the bartender, a weathered figure who seemed to possess an endless well of tales from behind those weary eyes. They expertly poured drinks, their hands moving with practiced grace, as they kept a watchful eye on the revelry unfolding before them.',
		'show scene black',
		{
			'Choice': {
				'Dialog': 'What will you do?',
				'yesno': {
					'Text': '>Approach the bartender.',
					'Do' : 'jump chap1.3'
				},
			}
		}

	],
	'chap1.3': [
		'show scene 1.9',
		'You cautiously approached the bartender,',
		'show scene 1.10',
		'their features initially shrouded in the dimly lit interior of the saloon.',
		'show scene 1.11',
		'As you drew nearer, a glimmer of light from a nearby window unveiled a shocking sight—a leo-sapien with golden fur, the very same individual who had orchestrated the burning of your village, yet inexplicably spared your life.',
		'show scene black',
		{
			'Choice': {
				'Dialog': 'What will you do?',
				'yesno': {
					'Text': '>Fight',
					'Do' : 'jump fightver1'
				},
			}
		}

	],
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	'fightver1': [
		'stop music maintheme',
		'play music battletime with loop',
		'show scene w1',
		{
			'Choice': {
				'Dialog': 'Hint: // A vehement wind',
				'yesno': {
					'Text': '>Forceful',
					"onChosen": function(){win()},
					'Do' : 'jump fightver1.2'
				},
				'noyes': {
					'Text': '>Strong',
					"onChosen": function(){defeated()},
					'Do' : 'jump defeat1'
				},
				'yeno': {
					'Text': '>Extreme',
					"onChosen": function(){defeated()},
					'Do' : 'jump defeat1'
				}
			}
		}

	],
	'defeat1': [
		{'Conditional': {
			'Condition': function(){
				return (monogatari.storage().player.chances == 0);
			},
			'True': 'jump death',
			'False': 'You now only have {{player.chances}} chances left'
		}},
		{
			'Choice': {
				'Dialog': '',
				'yesno': {
					'Text': '>Next Question...',
					'Do' : 'jump fightver1.2'
				},
			}
		}

	],
	'death': [
		'stop music battletime',
		'play music maintheme with loop',
		'The fight against the bartender-disguised Leo-sapien ended in defeat for you. Despite his waning strength, he still possessed the ruthlessness of a general who had once orchestrated the destruction of an entire village. As the commotion unfolded, the guards burst onto the scene.',
		'Reacting swiftly, you see the guards spring into action, pursuing the Leo-sapien as he swiftly makes his escape through the saloon window.',
		'You died, unknown by the world and your hatred against it.',
		{
			'Choice': {
				'Dialog': 'Game Over',
				'yesno': {
					'Text': '>End',
					'Do' : 'end'
				},
			}
		}

	],
	'fightver1.2': [
		'show scene black',
		'you now have {{player.points}} points.',
		'show scene w2',
		{
			'Choice': {
				'Dialog': 'Hint // She played several roles with equal aplomb.',
				'yesno': {
					'Text': '>Performance',
					"onChosen": function(){defeated()},
					'Do' : 'jump defeat2'
				},
				'noyes': {
					'Text': '>Confidence',
					"onChosen": function(){win()},
					'Do' : 'jump eval1.2'
				},
				'nol': {
					'Text': '>Creativity',
					"onChosen": function(){defeated()},
					'Do' : 'jump defeat2'
				},
			}
		}

	],
	'eval1.2': [
		'you now have {{player.points}} points.',
		{'Conditional': {
			'Condition': function(){
				console.log(monogatari.storage().player.points);
				return (monogatari.storage().player.points == 2);
			},
			'True': 'jump won',
			'False': 'jump fightver1.3',
		}},
	],
	'defeat2': [
		{'Conditional': {
			'Condition': function(){
				return (monogatari.storage().player.chances == 0);
			},
			'True': 'jump death',
			'False': 'You now only have {{player.chances}} chances left'
		}},
		{
			'Choice': {
				'Dialog': '',
				'yesno': {
					'Text': '>Next Question...',
					'Do' : 'jump fightver1.3'
				},
			}
		}

	],
	'fightver1.3': [
		'show scene black',
		'you now have {{player.points}} points.',
		{'Conditional': {
			'Condition': function(){
				return (monogatari.storage().player.points == 2);
			},
			'True': 'jump won',
			'False': 'Next Question...',
		}},
		'show scene w3',
		{
			'Choice': {
				'Dialog': 'Hint // She refused to take a subservient role in the marriage.',
				'yesno': {
					'Text': '>Lowly',
					"onChosen": function(){defeated()},
					'Do' : 'jump defeat3'
				},
				'noes': {
					'Text': '>Submissive',
					"onChosen": function(){win()},
					'Do' : 'jump eval'
				},
				'noyes': {
					'Text': '>Opressive',
					"onChosen": function(){defeated()},
					'Do' : 'jump defeat3'
				},
				
			}
		}
	],
	'defeat3': [
		{'Conditional': {
			'Condition': function(){
				return (monogatari.storage().player.chances == 0);
			},
			'True': 'jump death',
			'False': 'You now only have {{player.chances}} chances left'
		}},
	],
	'eval': [
		'you now have {{player.points}} points.',
		{'Conditional': {
			'Condition': function(){
				return (monogatari.storage().player.points == 2);
			},
			'True': 'jump won',
			'False': 'jump death',
		}},
	],
	///////////////////////////////////////////////////////////////////////////////////////////////
	//As the guards swiftly arrived at the scene, their stern voices echoed through the air.Guards: "You've caused enough trouble! Come with us!"Before you could react, the Leo-sapien seized the opportunity to escape, vanishing into the distance and leaving behind a dense cloud of smoke from a dropped smoke bomb. In the aftermath, you found yourself facing three guards, all Simia-sapiens, their spears raised with the sharp edges pointing directly at you. The tense standoff began, with each guard ready to defend their territory.
	//As the guards closed in, their spears thrust forward with deadly precision. The sharp edge of a Simia-sapien's spear pierced through your body, sealing your fate. In that moment, your life flickered away, and your quest for vengeance came to a tragic end. Regrettably, your journey was cut short, and you were unable to achieve any significant impact or fulfill your ultimate goals. The world would continue its turbulent existence, unaware of the potential you once held.You died, unknown by the world and your hatred against it. Not an hour later, they continued celebrating. They feasted on your remains.
	//With unwavering determination, you engaged the guards in a fierce battle, one by one. Your skill and strength proved superior as you swiftly incapacitated each guard, leaving them with no chance of defense. Their defeated bodies lay motionless on the ground as you stood triumphant, panting from the intense combat. Sensing the urgency to leave before reinforcements arrived, you swiftly departed from the scene, leaving behind the defeated guards as a testament to your formidable prowess.The death of the merchant gave rise to a legend of a crazy drunkard who, under the influence, fearlessly killed three guards. This tale circulated among the village, instilling fear and discipline among the children.
	//Utilizing your superior dexterity and agility, you sprinted away from the approaching guards with all your might. Every step was calculated, every movement precise, as you skillfully evaded their pursuit. Your hybrid traits granted you an advantage, allowing you to navigate through obstacles and vanish into the shadows, leaving the guards empty-handed and unable to capture you. Your escape was a testament to your quick thinking and physical prowess, ensuring your freedom and preserving your quest for vengeance.
	'won': [
		'stop music battletime',
		'play music maintheme',
		'show scene 1.12',
		'You stand there in disbelief, witnessing the once-mighty Leo-Sapien, the formidable general of a once-great tribe, now kneeling before you.',
		'show scene black',
		{
			'Choice': {
				'Dialog': 'What will you do?',
				'yesno': {
					'Text': '>Spare him',
					'Do' : 'jump chap1.4'
				},
				'noyes': {
					'Text': '>Kill him',
					'Do' : 'jump chap1.4'
				},
				
			}
		}

	],
	'chap1.4': [
		'show scene 1.13',
		'As the guards swiftly arrived at the scene, their stern voices echoed through the air.',
		'show scene black',
		'g:normal Youve caused enough trouble! Come with us!',
		'show scene 1.14',
		'the Leo-sapien seized the opportunity to escape, vanishing into the distance and leaving behind a dense cloud of smoke from a dropped smoke bomb.',
		'show scene 1.15',
		'In the aftermath, you found yourself facing three guards, all Simia-sapiens, their spears raised with the sharp edges pointing directly at you.',
		'show scene black',
		{
			'Choice': {
				'Dialog': 'What will you do?',
				'yesno': {
					'Text': '>fight',
					'Do' : 'jump fight2'
				},
				'noyes': {
					'Text': '>runaway',
					'Do' : 'jump run1'
				},
				
			}
		}

	],
	'run1': [
		'show scene 1.17',
		'Utilizing your superior dexterity and agility, you sprinted away from the approaching guards with all your might. Every step was calculated, every movement precise, as you skillfully evaded their pursuit.',
		'Your hybrid traits granted you an advantage, allowing you to navigate through obstacles and vanish into the shadows, leaving the guards empty-handed and unable to capture you. Your escape was a testament to your quick thinking and physical prowess, ensuring your freedom and preserving your quest for vengeance.',
		{
			'Choice': {
				'Dialog': '',
				'yesno': {
					'Text': '>End of Chapter 1',
					'Do' : 'End'
				},
			}
		}

	],
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////
	'fight2': [
		'stop music maintheme',
		'play music battletime with loop',
		'show scene w4',
		{
			'Choice': {
				'Dialog': 'Hint: // A barrage of racist invectives',
				'yesno': {
					'Text': '>Abusive',
					"onChosen": function(){winner()},
					'Do' : 'jump fightver2.2'
				},
				'noyes': {
					'Text': '>Comments',
					"onChosen": function(){defeater()},
					'Do' : 'jump defeat1.2'
				},
				'yeno': {
					'Text': '>Remarks',
					"onChosen": function(){defeater()},
					'Do' : 'jump defeat1.2'
				}
			}
		}

	],
	'defeat1.2': [
		{'Conditional': {
			'Condition': function(){
				return (monogatari.storage().player.chances2 == 0);
			},
			'True': 'jump death',
			'False': 'You now only have {{player.chances2}} chances left'
		}},
		{
			'Choice': {
				'Dialog': '',
				'yesno': {
					'Text': '>Next Question...',
					'Do' : 'jump fightver1.2'
				},
			}
		}

	],
	'death2': [
		'stop music battletime',
		'play music maintheme with loop',
		'show scene black',
		'As the guards closed in, their spears thrust forward with deadly precision. The sharp edge of a Simia-sapiens spear pierced through your body, sealing your fate. In that moment, your life flickered away, and your quest for vengeance came to a tragic end. Regrettably, your journey was cut short, and you were unable to achieve any significant impact or fulfill your ultimate goals. The world would continue its turbulent existence, unaware of the potential you once held.You died, unknown by the world and your hatred against it. Not an hour later, they continued celebrating. They feasted on your remains.',
		{
			'Choice': {
				'Dialog': 'Game Over',
				'yesno': {
					'Text': '>End',
					'Do' : 'end'
				},
			}
		}

	],
	/////////////////////////////////////////////////////////////////////////////////////////////////////////
	'fightver2.2': [
		'show scene black',
		'you now have {{player.points2}} points.',
		'show scene w5',
		{
			'Choice': {
				'Dialog': 'Hint // It will take considerable ingenuity to fix these problems.',
				'yesno': {
					'Text': '>performance',
					"onChosen": function(){defeater()},
					'Do' : 'jump defeat2.3'
				},
				'noyes': {
					'Text': '>effort',
					"onChosen": function(){defeater()},
					'Do' : 'jump defeat2.3'
				},
				'nol': {
					'Text': '>cleverness',
					"onChosen": function(){winner()},
					'Do' : 'jump eval2.2'
					
				},
			}
		}

	],
	'eval2.2': [
		'you now have {{player.points2}} points.',
		{'Conditional': {
			'Condition': function(){
				console.log(monogatari.storage().player.points2);
				return (monogatari.storage().player.points2 == 2);
			},
			'True': 'jump won2',
			'False': 'jump fightver2.3',
		}},
	],
	'defeat2.3': [
		{'Conditional': {
			'Condition': function(){
				return (monogatari.storage().player.chances2 == 0);
			},
			'True': 'jump death2',
			'False': 'You now only have {{player.chances2}} chances left'
		}},
		{
			'Choice': {
				'Dialog': '',
				'yesno': {
					'Text': '>Next Question...',
					'Do' : 'jump fightver2.3'
				},
			}
		}

	],
	'fightver2.3': [
		'show scene black',
		'you now have {{player.points2}} points.',
		{'Conditional': {
			'Condition': function(){
				return (monogatari.storage().player.points2 == 2);
			},
			'True': 'jump won2',
			'False': 'Next Question...',
		}},
		'show scene w6',
		{
			'Choice': {
				'Dialog': 'Hint // Collosal statues and other monumental constructions that were intended to emblazon his name for eons to come.',
				'yesno': {
					'Text': '>immortalize',
					"onChosen": function(){defeater()},
					'Do' : 'jump defeat3.2'
				},
				'noes': {
					'Text': '>Inscribe',
					"onChosen": function(){winner()},
					'Do' : 'jump eval2.3'
				},
				'noyes': {
					'Text': '>Destroy',
					"onChosen": function(){defeater()},
					'Do' : 'jump defeat3.2'
				},
				
			}
		}
	],
	'defeat3.2': [
		{'Conditional': {
			'Condition': function(){
				return (monogatari.storage().player.chances2 == 0);
			},
			'True': 'jump death2',
			'False': 'You now only have {{player.chances2}} chances left'
		}},
	],
	'eval2.3': [
		'you now have {{player.points2}} points.',
		{'Conditional': {
			'Condition': function(){
				return (monogatari.storage().player.points2 == 2);
			},
			'True': 'jump won2',
			'False': 'jump death2',
		}},
	],
	'won2': [
		'stop music battletime',
		'play music maintheme',
		'show scene 1.16',
		'With unwavering determination, you engaged the guards in a fierce battle, one by one. Your skill and strength proved superior as you swiftly incapacitated each guard, leaving them with no chance of defense. Their defeated bodies lay motionless on the ground as you stood triumphant, panting from the intense combat.',
		'show scene 1.17',
		'Sensing the urgency to leave before reinforcements arrived, you swiftly departed from the scene, leaving behind the defeated guards as a testament to your formidable prowess.The death of the merchant gave rise to a legend of a crazy drunkard who, under the influence, fearlessly killed three guards. This tale circulated among the village, instilling fear and discipline among the children.',
		'end'

	],

});