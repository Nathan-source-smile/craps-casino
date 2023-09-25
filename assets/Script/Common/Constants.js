export const TIME_LIMIT = 15;
export const COINS_LIMIT = 30;
export const ALARM_LIMIT = 2;
export const BLOCKSIZE = 75;

export const INST_URL = "http://www.ludoteka.com/international_draughts.html";
export const YOUTUBE_URL =
    "https://www.youtube.com/channel/UCR7z9G1Drn-rxtPxDLRiPZA?sub_confirmation=1";
export const INSTAGRAM_URL = "https://www.instagram.com/torofun_ig/";
export const FB_URL = "https://www.facebook.com/torofun";
export const TWITTER_URL = "https://twitter.com/torofungames";
export const PINTEREST_URL = "https://www.pinterest.es/ToroFun/";
export const TF_URL = "https://www.torofun.com";
export const TF_SHOP_URL = "https://www.torofun.com/coins";

export const BET_TYPES = {
    ONE_ROLL: 0,
    MULTI_ROLL: 1,
};

export const POINTS = [4, 5, 6, 8, 9, 10];

export const BET_LIST = [
    {
        id: 0,
        name: "PASS LINE",
        pay_rate: 2,
        commission: 0,
        type: BET_TYPES.MULTI_ROLL,
        rule: "1:1 on come out 7/11 or making point"
    },
    {
        id: 1,
        name: "DON'T PASS BAR",
        pay_rate: 2,
        commission: 0,
        type: BET_TYPES.MULTI_ROLL,
        rule: "1:1 on come out 2/3 or non come out 7.",    
    },
    {
        id: 2,
        name: "COME",
        pay_rate: 2,
        commission: 0,
        type: BET_TYPES.MULTI_ROLL,
        rule: "1:1 on come out 7/11 or making come out",
    },
    {
        id: 3,
        name: "DON'T COME",
        pay_rate: 2,
        commission: 0,
        type: BET_TYPES.MULTI_ROLL,
        rule: "1:1 on come out 2/3 or non come out 7.",
    },
    {
        id: 4,
        name: "PASS ODDS",
        pay_rate: [2.2, 2.5, 3],
        commission: 0,
        type: BET_TYPES.MULTI_ROLL,
        rule: "2:1 on 4/10. 3:2 on 5:9. 6:5 on 6/8."
    },
    {
        id: 5,
        name: "PLACE WIN",
        pay_rate: [2.17, 2.4, 2.5],
        commission: 0,
        type: BET_TYPES.MULTI_ROLL,
        rule: ["9:6 on making point", "7:5 on making point", "7:6 on making point", "7:6 on making point", "7:5 on making point", "9:6 on making point"]
    },
    {
        id: 6,
        name: "BUY",
        pay_rate: [2.14, 2.425, 2.9],
        commission: 0.05,
        type: BET_TYPES.MULTI_ROLL,
        rule: ["2:1 on making point. Vig. 5% of bet.", "3:2 on making point. Vig. 5% of bet.", "6:5 on making point. Vig. 5% of bet.", "6:5 on making point. Vig. 5% of bet.", "3:2 on making point. Vig. 5% of bet.", "2:1 on making point. Vig. 5% of bet.",]
    },
    {
        id: 7,
        name: "BIG SIX",
        pay_rate: 2,
        commission: 0,
        type: BET_TYPES.MULTI_ROLL,
        rule: "1:1 if 6 is rolled before 7.",
    },
    {
        id: 8,
        name: "BIG EIGHT",
        pay_rate: 2,
        commission: 0,
        type: BET_TYPES.MULTI_ROLL,
        rule: "1:1 if 8 is rolled before 7.",
    },
    {
        id: 9,
        name: "HARDWAY SIX",
        pay_rate: 10,
        commission: 0,
        type: BET_TYPES.MULTI_ROLL,
        rule: "9:1 if rolled before 7 or easy 6.",
    },
    {
        id: 10,
        name: "HARDWAY EIGHT",
        pay_rate: 10,
        commission: 0,
        type: BET_TYPES.MULTI_ROLL,
        rule: "9:1 if rolled before 7 or easy 8.",
    },
    {
        id: 11,
        name: "HARDWAY FOUR",
        pay_rate: 8,
        commission: 0,
        type: BET_TYPES.MULTI_ROLL,
        rule: "7:1 if rolled before 7 or easy 4.",
    },
    {
        id: 12,
        name: "HARDWAY TEN",
        pay_rate: 8,
        commission: 0,
        type: BET_TYPES.MULTI_ROLL,
        rule: "7:1 if rolled before 7 or easy 10.",
    },
    {
        id: 13,
        name: "DON'T PASS ODDS",
        pay_rate: [1.83, 1.67, 1.5],
        commission: 0,
        type: BET_TYPES.MULTI_ROLL,
        rule: "1:2 on 4/10. 2:3 on 5/9. 5:6 on 6/8.",
    },
    {
        id: 14,
        name: "ODDS ON COME",
        pay_rate: [2.2, 2.5, 3],
        commission: 0,
        type: BET_TYPES.MULTI_ROLL,
        rule: ["2:1 on marking point", "3:2 on marking point", "6:5 on marking point", "6:5 on marking point", "3:2 on marking point", "2:1 on marking point"]
    },
    {
        id: 15,
        name: "ODDS ON DON'T COME",
        pay_rate: [1.83, 1.67, 1.5],
        commission: 0,
        type: BET_TYPES.MULTI_ROLL,
        rule: ["1:2 on 7 before don't come point", "2:3 on 7 before don't come point", "5:6 on 7 before don't come point", "5:6 on 7 before don't come point", "2:3 on 7 before don't come point", "1:2 on 7 before don't come point",]
    },
    {
        id: 16,
        name: "PLACE LOSE",
        pay_rate: [1.8, 1.625, 1.45],
        commission: 0,
        type: BET_TYPES.MULTI_ROLL,
        rule: ["5:11 on 7 before point.", "5:8 on 7 before point.", "4:5 on 7 before point.", "4:5 on 7 before point.", "5:8 on 7 before point.", "5:11 on 7 before point."]
    },
    {
        id: 17,
        name: "LAY",
        pay_rate: [1.79, 1.63, 1.475],
        commission: 0,
        type: BET_TYPES.MULTI_ROLL,
        rule: ["1:2 on 7 before point. Vig. 5% of win.", "2:3 on 7 before point. Vig. 5% of win.", "5:6 on 7 before point. Vig. 5% of win.", "5:6 on 7 before point. Vig. 5% of win.", "2:3 on 7 before point. Vig. 5% of win.", "1:2 on 7 before point. Vig. 5% of win.",]
    },
    {
        id: 18,
        name: "FIELD",
        pay_rate: [2, 3],
        commission: 0,
        type: BET_TYPES.ONE_ROLL,
        rule: "1 rolled bet. 1:1 on 3/4/9/10/11. 2:1 on 2/12.",
    },
    {
        id: 19,
        name: "CRAPS TWO",
        pay_rate: 31,
        commission: 0,
        type: BET_TYPES.ONE_ROLL,
        rule: "1 rolled bet. 30:1.",
    },
    {
        id: 20,
        name: "CRAPS TWELVE",
        pay_rate: 31,
        commission: 0,
        type: BET_TYPES.ONE_ROLL,
        rule: "1 rolled bet. 30:1.",
    },
    {
        id: 21,
        name: "CRAPS THREE",
        pay_rate: 16,
        commission: 0,
        type: BET_TYPES.ONE_ROLL,
        rule: "1 rolled bet. 15:1.",
    },
    {
        id: 22,
        name: "CRAPS ELEVEN",
        pay_rate: 16,
        commission: 0,
        type: BET_TYPES.ONE_ROLL,
        rule: "1 rolled bet. 15:1.",
    },
    {
        id: 23,
        name: "ANY SEVEN",
        pay_rate: 5,
        commission: 0,
        type: BET_TYPES.ONE_ROLL,
        rule: "1 rolled bet. 4:1.",
    },
    {
        id: 24,
        name: "ANY CRAPS",
        pay_rate: 8,
        commission: 0,
        type: BET_TYPES.ONE_ROLL,
        rule: "1 rolled bet. 7:1 on 2/3/12.",
    },
    {
        id: 25,
        name: "HORN",
        pay_rate: [7.75, 4],
        commission: 0,
        type: BET_TYPES.ONE_ROLL,
        rule: "1 rolled bet. 15:1 on 3:11. 30:1 on 2/12",
    },
]
