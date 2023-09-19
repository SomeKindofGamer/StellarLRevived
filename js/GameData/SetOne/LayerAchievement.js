addLayer("ach", {
    name: "INF-A", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "INF-A", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#4BDC13",
    row: "side",
    
    achievementNotif() {
      return `Achievement Finished` // little tamper in utils.js at line 276 :troll:
    },
    achivementPow() {
      let Base = new Decimal(0)
      let Achievement = player.ach.achievements.length
      
      let Calculation = new Decimal.pow(1.005, Achievement)
      Base = Base.add(Calculation)
      
      return Base
    },
    achievements: {
      "TTST1": {
            name: "First of many",
            done() { return player.main.points.gt(1) },
            tooltip: "Produce your first Stellar!",
      },
      "TTST2": {
        name: "Thousand",
        done() { return player.main.points.gt(1000) },
        tooltip: "Produce 1,000 Stellar!",
      },
      "TTST3": {
        name: "Wealthy",
        done() { return player.main.points.gt(1e9) },
        tooltip: "Produce 1,000,000,000 Stellar!",
      },
      "TTST4": {
        name: "Richer than Elon Musk",
        done() { return player.main.points.gt(1e18) },
        tooltip: "Produce 1e18 Stellar!",
      },
      "TTST5": {
        name: "More worth than Earth",
        done() { return player.main.points.gt(1e36) },
        tooltip: "Produce 1e36 Stellar!",
      },
      "TTST6": {
        name: "Funnily Rich",
        done() { return player.main.points.gt(1e144) },
        tooltip: "Produce 1e144 Stellar!",
      },
      "TTST7": {
        name: "Unfunnily Rich",
        done() { return player.main.points.gt("1e576") },
        tooltip: "Produce 1e576 Stellar!",
      },
      "TTST8": {
        name: `<img src="images/gihun.jpeg" width="32" height="32">`,
        done() { return player.main.points.gt("1e2304") },
        tooltip: "Produce 1e2,304 Stellar!",
      },
      "TTST9": {
        name: `More worth than Observable Universe `,
        done() { return player.main.points.gt("1e9216") },
        tooltip: "Produce 1e9,216 Stellar!",
      },
      "TTST10": {
        name: `Richer than MrBeast?`,
        done() { return player.main.points.gt("1e36864") },
        tooltip: "Produce 1e36,864 Stellar!",
      },
      "TTST11": {
        name: `Wow.`,
        done() { return player.main.points.gt("1e147456") },
        tooltip: "Produce 1e147,455 Stellar!",
      },
      "TTST12": {
        name: `I don't know what to say`,
        done() { return player.main.points.gt("1e200000") },
        tooltip: "Produce 1e200,000 Stellar!",
      },
      "TTST13": {
        name: `Endless Stellar!`,
        done() { return player.main.points.gt("1e400000") },
        tooltip: "Produce 1e400,000 Stellar!",
      },
      "TTST14": {
        name: `0_0`,
        done() { return player.main.points.gt("1e1000000") },
        tooltip: "Produce 1e1,000,000 Stellar!",
      },
      
      "TTET1": {
        name: `What's this?`,
        done() { return player.main.eth.gt(1) },
        tooltip: "Manufacture 1 Ethereum!",
      },
      "TTET2": {
        name: `Copy of Stellar`,
        done() { return player.main.eth.gt(1000) },
        tooltip: "Manufacture 1,000 Ethereum!",
      },
      "TTET3": {
        name: `Is this currency even worth of grind?`,
        done() { return player.main.eth.gt(1e12) },
        tooltip: "Manufacture 1e12 Ethereum!",
      },
      "TTET4": {
        name: `Rich again`,
        done() { return player.main.eth.gt(1e48) },
        tooltip: "Manufacture 1e48 Ethereum!",
      },
      "TTET5": {
        name: `Elon would be proud`,
        done() { return player.main.eth.gt(1e192) },
        tooltip: "Manufacture 1e129 Ethereum!",
      },
      "TTET6": {
        name: `I own more than I can count`,
        done() { return player.main.eth.gt("1e384") },
        tooltip: "Manufacture 1e384 Ethereum!",
      },
      "TTET7": {
        name: `The gods are pleased`,
        done() { return player.main.eth.gt("1e768") },
        tooltip: "Manufacture 1e768 Ethereum!",
      },
      "TTET8": {
        name: `They forgot to limit my Ethereum manufacturing`,
        done() { return player.main.eth.gt("1e3072") },
        tooltip: `Manufacture 1e3,072 Ethereum!`,
      },
      "TTET9": {
        name: `Is this real?`,
        done() { return player.main.eth.gt("1e12288") },
        tooltip: `Manufacture 1e12,288 Ethereum!`,
      },
      "TTET10": {
        name: `Lumen is pleased`,
        done() { return player.main.eth.gt("1e49512") },
        tooltip: `Manufacture 1e49,512 Ethereum!`,
      },
      "TTET11": {
        name: `Lumen is very pleased`,
        done() { return player.main.eth.gt("1e65000") },
        tooltip: `Manufacture 1e65,000 Ethereum!`,
      },
      "TTET12": {
        name: `oh my`,
        done() { return player.main.eth.gt("1e100000") },
        tooltip: `Manufacture 1e100,000 Ethereum!`,
      },
      
      "TTBT1": {
        name: `A start of new Era`,
        done() { return player.main.btc.gt("1") },
        tooltip: `Fork your first Bitcoin!`,
      },
      "TTBT2": {
        name: `In this video I gave away 1,000 Bitcoin to a random subscriber`,
        done() { return player.main.btc.gt("1000") },
        tooltip: `Fork 1,000 Bitcoin!`,
      },
      "TTBT3": {
        name: `Satoshi upper limit`,
        done() { return player.main.btc.gt("21000000") },
        tooltip: `Fork 21,000,000 Bitcoin!`,
      },
      "TTBT4": {
        name: `Wealthy^2`,
        done() { return player.main.btc.gt("1e18") },
        tooltip: `Fork 1e18 Bitcoin!`,
      },
      "TTBT5": {
        name: `Wealthy^3`,
        done() { return player.main.btc.gt("1e36") },
        tooltip: `Fork 1e36 Bitcoin!`,
      },
      "TTBT6": {
        name: `Wealthy^4`,
        done() { return player.main.btc.gt("1e72") },
        tooltip: `Fork 1e72 Bitcoin!`,
      },
      "TTBT7": {
        name: `Uncle Satoshi would be proud`,
        done() { return player.main.btc.gt("1e144") },
        tooltip: `Fork 1e144 Bitcoin!`,
      },
      "TTBT8": {
        name: `Where do you even get all of this?`,
        done() { return player.main.btc.gt("1e288") },
        tooltip: `Fork 1e288 Bitcoin!`,
      },
      "TTBT9": {
        name: `<img src="images/gihun2.png" width="32" height="32">`,
        done() { return player.main.btc.gt("1e576") },
        tooltip: `Fork 1e576 Bitcoin!`,
      },
      "TTBT10": {
        name: `And still no major inflation at stock market???`,
        done() { return player.main.btc.gt("1e1052") },
        tooltip: `Fork 1e1052 Bitcoin!`,
      },
      "TTBT11": {
        name: `You are very rich.`,
        done() { return player.main.btc.gt("1e2104") },
        tooltip: `Fork 1e2104 Bitcoin!`,
      },
      "TTBT12": {
        name: `maybe a little bit too rich...`,
        done() { return player.main.btc.gt("1e4208") },
        tooltip: `Fork 1e4208 Bitcoin!`,
      },
      
      "TTT1": {
        name: `All that progress gone...`,
        done() { return player.main.tier.gte("1") },
        tooltip: `Obtain Tier 1!`,
      },
      "TTT2": {
        name: `That was easy`,
        done() { return player.main.tier.gte("2") },
        tooltip: `Obtain Tier 2!`,
      },
      "TTT3": {
        name: `That was even easier!`,
        done() { return player.main.tier.gte("3") },
        tooltip: `Obtain Tier 3!`,
      },
      "TTT4": {
        name: `Is this game actually this easy?`,
        done() { return player.main.tier.gte("5") },
        tooltip: `Obtain Tier 5!`,
      },
      "TTT5": {
        name: `Racking these Tiers`,
        done() { return player.main.tier.gte("10") },
        tooltip: `Obtain Tier 10!`,
      },
      "TTT6": {
        name: `Speedrunning through `,
        done() { return player.main.tier.gte("20") },
        tooltip: `Obtain Tier 20!`,
      },
      "TTT7": {
        name: `A challenge please!`,
        done() { return player.main.tier.gte("40") },
        tooltip: `Obtain Tier 40!`,
      },
      "TTT8": {
        name: `a`,
        done() { return player.main.tier.gte("80") },
        tooltip: `Obtain Tier 80!`,
      },
      "TTT9": {
        name: `Okay I was kidding...`,
        done() { return player.main.tier.gte("160") },
        tooltip: `Obtain Tier 160!`,
      },
      "TTT10": {
        name: `Stopppp.....`,
        done() { return player.main.tier.gte("240") },
        tooltip: `Obtain Tier 240!`,
      },
      "TTT11": {
        name: `You must really like these tiers...`,
        done() { return player.main.tier.gte("320") },
        tooltip: `Obtain Tier 320!`,
      },
      "TTT12": {
        name: `How is this possible?`,
        done() { return player.main.tier.gte("480") },
        tooltip: `Obtain Tier 480!`,
      },
      "TTT13": {
        name: `what`,
        done() { return player.main.tier.gte("640") },
        tooltip: `Obtain Tier 640!`,
      },

      "TTFT1": {
        name: `Oreo Production!`,
        done() { return player.main.factories.gt("1") },
        tooltip: `Get your first Factory!`,
      },

      "TTFT2": {
        name: `A good start`,
        done() { return player.main.factories.gt("5") },
        tooltip: `Get your 5th Factory!`,
      },

      "TTFT3": {
        name: `so many oreos`,
        done() { return player.main.factories.gt("10") },
        tooltip: `Get your 10th Factory!`,
      },

      "TTFT4": {
        name: `20 is a good milestone`,
        done() { return player.main.factories.gt("20") },
        tooltip: `Get your 20th Factory!`,
      },

      "TTFT5": {
        name: `UNLIMITED OREOS`,
        done() { return player.main.factories.gt("33") },
        tooltip: `Get your 33rd Factory!`,
      },
      
      "TTFT6": {
        name: `TOO MANY OREOS`,
        done() { return player.main.factories.gt("50") },
        tooltip: `Get your 50th Factory!`,
      },

      "TTFT7": {
        name: `how many is too many again?`,
        done() { return player.main.factories.gt("75") },
        tooltip: `Get your 75th Factory!`,
      },

      "TTFT8": {
        name: `how did you get this many`,
        done() { return player.main.factories.gt("125") },
        tooltip: `Get your 125th Factory!`,
      },

      "TTFT9": {
        name: `okay thats enough`,
        done() { return player.main.factories.gt("180") },
        tooltip: `Get your 180th Factory!`,
      },

      "TTFT10": {
        name: `I SAID THATS ENOUGH`,
        done() { return player.main.factories.gt("250") },
        tooltip: `Get your 250th Factory!`,
      },

      "TTFT11": {
        name: `...`,
        done() { return player.main.factories.gt("333") },
        tooltip: `Get 333 factories!`,
      },

      "TTFT12": {
        name: `i quit`,
        done() { return player.main.factories.gt("450") },
        tooltip: `Get 450 factories!`,
      },

      "Dark1": {
        name: `And everything resets all over again...`,
        done() { return player.main.supertier.gt("1") },
        tooltip: `Get your first Super Tier!`,
      },

      "Dark2": {
        name: `So dark!`,
        done() { return player.main.supertier.gt("2") },
        tooltip: `Get your second Super Tier!`,
      },

      "Dark3": {
        name: `Wow you're good!`,
        done() { return player.main.supertier.gt("5") },
        tooltip: `Get your 5th Super Tier!`,
      },

      "Dark4": {
        name: `this super tier stuff aint shi-`,
        done() { return player.main.supertier.gt("10") },
        tooltip: `Get your 10th Super Tier!`,
      },

      "Dark5": {
        name: `You must be grinding alot!`,
        done() { return player.main.supertier.gt("20") },
        tooltip: `Get your 20th Super Tier!`,
      },

      "Dark6": {
        name: `wow you just dont know when to quit..`,
        done() { return player.main.supertier.gt("50") },
        tooltip: `Get your 50th Super Tier!`,
      },

      "Dark7": {
        name: `How is this even possible`,
        done() { return player.main.supertier.gt("100") },
        tooltip: `Get your 100th Super Tier!`,
      },

      "Dark8": {
        name: `wow...`,
        done() { return player.main.supertier.gt("200") },
        tooltip: `Get your 200th Super Tier!`,
      },

      "TTAC1": {
        name: `Bronze Mastery`,
        done() { return player.ach.achievements.length > 5 },
        tooltip: `Have more than 5 achievements`,
        style() {
          return {
            "background-image": "url('images/MasteryI.png')",
            "background-size": "100% !important"
          }
        },
        unlocked() {
          return player.ach.achievements.length > 5
        }
      },
      "TTAC2": {
        name: `Silver Mastery`,
        done() { return player.ach.achievements.length > 10 },
        tooltip: `Have more than 10 achievements`,
        style() {
          return {
            "background-image": "url('images/MasteryII.png')",
            "background-size": "100% !important"
          }
        },
        unlocked() {
          return player.ach.achievements.length > 10
        }
      },
      "TTAC3": {
        name: `Gold Mastery`,
        done() { return player.ach.achievements.length > 15 },
        tooltip: `Have more than 15 achievements`,
        style() {
          return {
            "background-image": "url('images/MasteryIII.png')",
            "background-size": "100% !important"
          }
        },
        unlocked() {
          return player.ach.achievements.length > 15
        }
      },
      "TTAC4": {
       name: `Diamond Mastery`,
       done() { return player.ach.achievements.length > 20 },
       tooltip: `Have more than 20 achievements`,
       style() {
         return {
           "background-image": "url('images/MasteryIV.png')",
           "background-size": "100% !important"
         }
       },
       unlocked() {
         return player.ach.achievements.length > 20
       }
       },
       "TTAC5": {
        name: `Amethyst Mastery`,
        done() { return player.ach.achievements.length > 30 },
        tooltip: `Have more than 30 achievements`,
        style() {
          return {
            "background-image": "url('images/MasteryV.png')",
            "background-size": "100% !important"
          }
        },
        unlocked() {
          return player.ach.achievements.length > 30
        }
        },
        "TTAC6": {
          name: `Ruby Mastery`,
          done() { return player.ach.achievements.length > 40 },
          tooltip: `Have more than 40 achievements`,
          style() {
            return {
              "background-image" : "url('images/MasteryVI.png')",
              "background-size" : "100% !important"
            }
          },
          unlocked() {
            return player.ach.achievements.length > 40
          }
        },
        "TTAC7": {
          name: `Emerald Mastery`,
          done() { return player.ach.achievements.length > 50 },
          tooltip: `Have more than 50 achievements`,
          style() {
            return {
              "background-image" : "url('images/MasteryVII.png')",
              "background-size" : "100% !important"
            }
          },
          unlocked() {
            return player.ach.achievements.length > 50
          }
        },
        "TTAC8": {
          name: `Grandidierite Mastery`,
          done() { return player.ach.achievements.length > 60 },
          tooltip: `Have more than 50 achievements`,
          style() {
            return {
              "background-image" : "url('images/MasteryVIII.png')",
              "background-size" : "100% !important"
            }
          },
          unlocked() {
            return player.ach.achievements.length > 60
          }
        },
    },

    tabFormat: [
      ["raw-html", function () {
        return options.musicToggle ? `<audio controls autoplay loop hidden><source src=music/achievements.mp3 type<=audio/mp3>loop=true hidden=true autostart=true</audio>`: ``
      }],
            "blank",
            ["display-text", function() { return "<MA style='font-size: 25px'>Achievements: " + player.ach.achievements.length + " / " + (Object.keys(tmp.ach.achievements).length - 2) }],
             ["display-text", function() { return `<MA style='font-size: 25px'>Your acheivements raise Point generation by ^${format(tmp.ach.achivementPow)}</MA><br>
             <MA style="font-size: 20px; color: #595959">1.005x for each achievement</MA>` }],
            "blank", "blank",

       ["display-text", function() { return "Stellar Achievements"}],
       ["row", [["achievement", "TTST1"], ["achievement", "TTST2"], ["achievement", "TTST3"], ["achievement", "TTST4"]]],
       ["row", [["achievement", "TTST5"], ["achievement", "TTST6"], ["achievement", "TTST7"], ["achievement", "TTST8"]]],
       ["row", [["achievement", "TTST9"], ["achievement", "TTST10"], ["achievement", "TTST11"], ["achievement", "TTST12"]]],
       ["row", [["achievement", "TTST12"], ["achievement", "TTST13"], ["achievement", "TTST14"]]],
       "blank",
       "blank",

       ["display-text", function() { return "Ethereum Achievements" }],
       ["row", [["achievement", "TTET1"], ["achievement", "TTET2"], ["achievement", "TTET3"], ["achievement", "TTET4"]]],
       ["row", [["achievement", "TTET5"], ["achievement", "TTET6"], ["achievement", "TTET7"], ["achievement", "TTET8"]]],
       ["row", [["achievement", "TTET9"], ["achievement", "TTET10"], ["achievement", "TTET11"], ["achievement", "TTET12"],]],
       "blank",
       "blank",

        ["display-text", function() { return "Bitcoin Achievements" }],
        ["row", [["achievement", "TTBT1"], ["achievement", "TTBT2"], ["achievement", "TTBT3"], ["achievement", "TTBT4"]]],
        ["row", [["achievement", "TTBT5"], ["achievement", "TTBT6"], ["achievement", "TTBT7"], ["achievement", "TTBT8"]]],
        ["row", [["achievement", "TTBT9"], ["achievement", "TTBT10"], ["achievement", "TTBT11"], ["achievement", "TTBT12"]]],
        "blank",
        "blank",

        ["display-text", function() { return "Tier Achievements" }],
        ["row", [["achievement", "TTT1"], ["achievement", "TTT2"], ["achievement", "TTT3"], ["achievement", "TTT4"]]],
        ["row", [["achievement", "TTT5"], ["achievement", "TTT6"], ["achievement", "TTT7"], ["achievement", "TTT8"]]],
        ["row", [["achievement", "TTT9"], ["achievement", "TTT10"], ["achievement", "TTT11"], ["achievement", "TTT12"]]],
        ["row", [["achievement", "TTT13"]]],
        "blank",
        "blank",

        ["display-text", function() { return "Factory Achievements" }],
        ["row", [["achievement", "TTFT1"], ["achievement", "TTFT2"], ["achievement", "TTFT3"], ["achievement", "TTFT4"]]],
        ["row", [["achievement", "TTFT5"], ["achievement", "TTFT6"], ["achievement", "TTFT7"], ["achievement", "TTFT8"]]],
        ["row", [["achievement", "TTFT9"], ["achievement", "TTFT10"], ["achievement", "TTFT11"], ["achievement", "TTFT12"]]],
        "blank",
        "blank",

        ["display-text", function() { return "Darkness Achievements" }],
        ["row", [["achievement", "Dark1"], ["achievement", "Dark2"], ["achievement", "Dark3"], ["achievement", "Dark4"]]],
        ["row", [["achievement", "Dark5"], ["achievement", "Dark6"], ["achievement", "Dark7"], ["achievement", "Dark8"]]],
        "blank",
        "blank",

        ["display-text", function() { return "Mastery Achievements" }],
        ["row", [["achievement", "TTAC1"], ["achievement", "TTAC2"], ["achievement", "TTAC3"], ["achievement", "TTAC4"]]],
        ["row", [["achievement", "TTAC5"], ["achievement", "TTAC6"], ["achievement", "TTAC7"]]]
  
        ],
    layerShown(){return true}
})
