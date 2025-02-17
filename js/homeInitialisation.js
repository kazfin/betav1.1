//Author(s): Ethan Scott//

function getRandomIntInclusive(min, max) { //function to grab random integers//
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

//to add a new variable, duplicate each of these functions and change the variable name. to change the default value, just change the number it defaults to below (do not change Age)//

//initialises variables for a new game//
    let Age = 0;
	let Joy = getRandomIntInclusive(25, 75);
	let Health = getRandomIntInclusive(25, 75);
	let Intellect = getRandomIntInclusive(20, 80);
	let Looks = getRandomIntInclusive(20, 80);
	let Money = 0;
	let Karma = 50;
	let rnumber = 0;
	let rfunction = "";
	let revent = "";
	let Logs = "";
    localStorage.setItem("Age", Age);
    localStorage.setItem("Joy", Joy);
    localStorage.setItem("Health", Health);
    localStorage.setItem("Intellect", Intellect);
    localStorage.setItem("Looks", Looks);
    localStorage.setItem("Karma", Karma);
    localStorage.setItem("Money", Money);
	localStorage.setItem("rnumber", rnumber);
	localStorage.setItem("rfunction", rfunction);
	localStorage.setItem("revent", revent);
    localStorage.setItem("Logs", Logs);
	
//hidden variables//
	let Evality = 0; //the degree to which one is evil. different from karma in the sense that Evality is how much Joy you derive from the pain of others, showing a disregard for other people's safety and happiness.//
	let Complacency = getRandomIntInclusive(0, 90); //how stubborn the player is. Has the potenial damage relationships, but can lead to much higher degrees of success in fields such as business//
	let Charisma = getRandomIntInclusive(0, 90); //high charisma is generally something you want. it leads to greater success with relationships and also career, but high charisma can lead to Joy loss when doing something morally wrong. On the other hand, low charisma can lead to greater success with violent, antisocial crimes, such as murder.//
	let Discipline = getRandomIntInclusive(0, 90); //discipline helps to gain skills quicker//
	let Creativity = getRandomIntInclusive(0, 90); //creativity helps in creative jobs and hobbies//
	localStorage.setItem("Evality", Evality);
	localStorage.setItem("Complacency", Complacency);
	localStorage.setItem("Charisma", Charisma);
	localStorage.setItem("Discipline", Discipline);
	localStorage.setItem("Creativity", Creativity);
	
//obscure variables//
	let redirect = "";
	let orgRelationship = ["Police", 50, "Poison Control", 100, "Neighbourhood", 50, "Celebrities", 0]; //relationship with organisations. has default values. numbers to the right of the organisation name are the relationship with said organisation.//
	let Occupation = []; //different from Job. Not the player's career, but what they are otherwise occupied with, be it prison, vacation, human experimentation, et cetera.//
	let Crimes = [];
	let CriminalRecord = [];
	localStorage.setItem("redirect", redirect);
	localStorage.setItem("orgRelationship", JSON.stringify(orgRelationship));
	localStorage.setItem("Occupation", Occupation);
	localStorage.setItem("Crimes", Crimes);
	localStorage.setItem("CriminalRecord", CriminalRecord);
	
//achievement values//
	let Achievements = localStorage.getItem("Achievements");
	let AchRead = localStorage.getItem("AchRead");
	let Stars = localStorage.getItem("Stars");

	if (Achievements === null) { //checks if Achievements exists//
		Achievements = [];
		localStorage.setItem("Achievements", JSON.stringify(Achievements)); //store as JSON//
	} else {
		Achievements = JSON.parse(Achievements); //parse back to an array//
	}
	if (AchRead === null) { //checks if AchRead exists//
		AchRead = [];
		localStorage.setItem("AchRead", JSON.stringify(AchRead));
	} else {
		AchRead = JSON.parse(AchRead); //parse back to an array//
	}
	if (Stars === null) { //checks if Stars exists//
		Stars = 0;
		localStorage.setItem("Stars", Stars);
	} else {
		Stars = parseInt(Stars, 10); //parse back to a number//
	}
	
//relationship values//
	let PersonNames = ["Elizabeth Kevins", "Kevin Kevins", "Barbonious Kevins", "Jaquavius Kevins"]; //the rest of the values are found by looking up the index (what position in the array the value is, starting from 0) of the NPC's name and grabbing the value at such index from the other arrays//
	let PersonRoles = ["Mother", "Father", "Brother", "Brother"];
	let PersonRelationships = [80, 80, 50, 50]; //how close you are with the person, ranging from -100 to 100//
	let PersonAges = [getRandomIntInclusive(18, 50), getRandomIntInclusive(18, 70), 2, 4];
	let PersonTrait1 = [];
	let PersonTrait2 = [];
	let SocialBattery = 100;
	localStorage.setItem("PersonNames", JSON.stringify(PersonNames));
	localStorage.setItem("PersonRoles", JSON.stringify(PersonRoles));
	localStorage.setItem("PersonRelationships", JSON.stringify(PersonRelationships));
	localStorage.setItem("PersonAges", JSON.stringify(PersonAges));
	localStorage.setItem("PersonTrait1", JSON.stringify(PersonTrait1));
	localStorage.setItem("PersonTrait2", JSON.stringify(PersonTrait2));
	localStorage.setItem("SocialBattery", SocialBattery);

//skill trees (there's a lot)//
	let SkillMathematics = 0;
	let SkillEnglish = 0;
	let SkillPhysics = 0;
	let SkillBiology = 0;
	let SkillChemistry = 0;
	let SkillFineMotor = 0;
	let SkillEngineering = 0;
	let SkillFitness = 0;
	let SkillProfessionalism = 0;
	let SkillCreativeWriting = 0;
	let SkillAnalyticalWriting = 0;
	let SkillFilmMaking = 0;
	let SkillPhotography = 0;
	let SkillSpeech = 0;
	let SkillStorytelling = 0;
	let SkillComposition = 0;
	let SkillInstrumentalism = 0;
	let SkillSinging = 0;
	let SkillManagement = 0;
	let SkillEmotionalExpression = 0;
	let SkillPersuasion = 0;
	let SkillCooking = 0;
	localStorage.setItem("SkillMathematics", SkillMathematics);
	localStorage.setItem("SkillEnglish", SkillEnglish);
	localStorage.setItem("SkillPhysics", SkillPhysics);
	localStorage.setItem("SkillBiology", SkillBiology);
	localStorage.setItem("SkillChemistry", SkillChemistry);
	localStorage.setItem("SkillFineMotor", SkillFineMotor);
	localStorage.setItem("SkillFitness", SkillFitness);
	localStorage.setItem("SkillProfessionalism", SkillProfessionalism);
	localStorage.setItem("SkillCreativeWriting", SkillCreativeWriting);
	localStorage.setItem("SkillFilmMaking", SkillFilmMaking);
	localStorage.setItem("SkillPhotography", SkillSpeech);
	localStorage.setItem("SkillSpeech", SkillSpeech);
	localStorage.setItem("SkillStorytelling", SkillStorytelling);
	localStorage.setItem("SkillComposition", SkillComposition);
	localStorage.setItem("SkillInstrumentalism", SkillInstrumentalism);
	localStorage.setItem("SkillSinging", SkillSinging);
	localStorage.setItem("SkillManagement", SkillManagement);
	localStorage.setItem("SkillEmotionalExpression", SkillEmotionalExpression);
	localStorage.setItem("SkillPersuasion", SkillPersuasion);
	localStorage.setItem("SkillCooking", SkillCooking);

//career variables//
	let hasJob = false;
	let Job = "";
	let PartTimeJob = "";
	let SpecialCareer = "";
	let JobPerformance = 0;
	let PartTimePerformance = 0;
	let SpecialPerformance = 0;
	let Salary = 0;
	let Degree = [];
	let workExperience = [];
	let InsuranceWJob = [];
	let InsurancePaidFor = [];
	localStorage.setItem("hasJob", false);
	localStorage.setItem("Job", Job);
	localStorage.setItem("PartTimeJob", PartTimeJob);
	localStorage.setItem("SpecialCareer", SpecialCareer);
	localStorage.setItem("JobPerformance", JobPerformance);
	localStorage.setItem("PartTimePerformance", PartTimePerformance);
	localStorage.setItem("SpecialPerformance", SpecialPerformance);
	localStorage.setItem("Salary", Salary);
	localStorage.setItem("Degree", JSON.stringify(Degree));
	localStorage.setItem("workExperience", JSON.stringify(workExperience));
	localStorage.setItem("InsurancePaidFor", JSON.stringify(InsurancePaidFor));

//console//
	localStorage.setItem("ZGV2ZWxvcGVy", false);
	console.log("new variables set.")
	console.log("new game successfuly set up.")