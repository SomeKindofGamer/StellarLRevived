let modInfo = {
	name: ":3",
	id: "CTAG455",
	author: "Shoober",
	originalauthor: "Niko_ | ( Citrine )",
	pointsName: "points",
	modFiles: [
	"GameData/SetOne/main.js", 
	"GameData/SetOne/LayerAchievement.js",
	"tree.js"],

	discordName: "",
	discordLink: "",
	initialStartPoints: new Decimal (10), // Used for hard resets and new players
	offlineLimit: 2400,  // In hours
}

// Set your version in num and name
let VERSION = {
	num: "1.0",
	name: "",
}

let changelog = `<h1>Changelog:</h1><br>
  <h3>nothing...</h3><br>
    - Added Nothing<br>
    - nothing lol<br>
    <br>
    <br>`

let winText = `Congratulations! You have reached the end and beaten this game, but for now...`

// If you add new functions anywhere inside of a layer, and those functions have an effect when called, add them here.
// (The ones here are examples, all official functions are already taken care of)
var doNotCallTheseFunctionsEveryTick = ["blowUpEverything", "tierUp", "btcReset", "tehReset", "t1Reset", "factoryInvestment", "type1reset", "hardfork", "HardReset", "MultiplierReset", "RebirthReset", "SRebirthReset", "URebirthReset", "fixBitcoin"]

function getStartPoints(){
    return new Decimal(modInfo.initialStartPoints)
}

// Determines if it should show points/sec
function canGenPoints(){
	return true
}

// Calculate points/sec!
function getPointGen() {
	if(!canGenPoints())
		return new Decimal(0)

	let Production = new Decimal(1)
	Production = Production.mul(buyableEffect("main", "Stellar Point Production"))
	Production = Production.mul(buyableEffect("main", "Ethereum Point Production"))
	Production = Production.mul(buyableEffect("main", "Oreo Point Production"))
	Production = Production.mul(buyableEffect("main", "Bitcoin Point Production"))
	Production = Production.mul(tmp.main.AccelerantBonus)
	Production = Production.mul(tmp.main.OreoPointBoost)
	/*
	let TM1Boost = new Decimal(1.25)
	TM1Boost = TM1Boost.mul(hasMilestone("main", "TM5") ? 1.25 : 1)
	Production = Production.mul(buyableEffect("main", "Stellar Point Production"))
	Production = Production.mul(buyableEffect("main", "Ethereum Point Production"))
	Production = Production.mul(buyableEffect("main", "Bitcoin Point Production"))
	Production = Production.mul(buyableEffect("main", "Tether Point Production"))
	Production = Production.pow(buyableEffect("main", "Time Point Production"))
	Production = Production.mul(player.main.tier.gte(1) ? new Decimal.pow(TM1Boost, player.main.tier) : 1)*/
	Production = Production.pow(tmp.ach.achivementPow)
	Production= Production.add(1)
	return Production
}

// You can add non-layer related variables that should to into "player" and be saved here, along with default values
function addedPlayerData() { return {
}}

// Display extra things at the top of the page
var displayThings = [
]

// Determines when the game "ends"
function isEndgame() {
	return player.points.gte(new Decimal("10^^10"))
}



// Less important things beyond this point!

// Style for the background, can be a function
var backgroundStyle = {

}

// You can change this if you have things that can be messed up by long tick lengths
function maxTickLength() {
	return(3600) // Default is 1 hour which is just arbitrarily large
}

// Use this if you need to undo inflation from an older version. If the version is older than the version that fixed the issue,
// you can cap their current resources with this.
function fixOldSave(oldVersion){
}