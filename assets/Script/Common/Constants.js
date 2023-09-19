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
        name: "PASS_LINE",
        pay_rate: 2,
        commission: 0,
        type: BET_TYPES.MULTI_ROLL,
    },
    {
        id: 1,
        name: "D_PASS_LINE",
        pay_rate: 2,
        commission: 0,
        type: BET_TYPES.MULTI_ROLL,
    },
    {
        id: 2,
        name: "COME",
        pay_rate: 2,
        commission: 0,
        type: BET_TYPES.MULTI_ROLL,
    },
    {
        id: 3,
        name: "D_COME",
        pay_rate: 2,
        commission: 0,
        type: BET_TYPES.MULTI_ROLL,
    },
    {
        id: 4,
        name: "PASS_LINE_ODDS",
        pay_rate: [2.2, 2.5, 3],
        commission: 0,
        type: BET_TYPES.MULTI_ROLL,
    },
    {
        id: 5,
        name: "PLACE",
        pay_rate: [2.7, 2.4, 2.8],
        commission: 0,
        type: BET_TYPES.MULTI_ROLL,
    },
    {
        id: 6,
        name: "BUY",
        pay_rate: [2.14, 2.425, 2.9],
        commission: 0.05,
        type: BET_TYPES.MULTI_ROLL,
    },
    {
        id: 7,
        name: "BIG_6",
        pay_rate: 2,
        commission: 0,
        type: BET_TYPES.MULTI_ROLL,
    },
    {
        id: 8,
        name: "BIG_8",
        pay_rate: 2,
        commission: 0,
        type: BET_TYPES.MULTI_ROLL,
    },
    {
        id: 9,
        name: "HARD_6",
        pay_rate: 10,
        commission: 0,
        type: BET_TYPES.MULTI_ROLL,
    },
    {
        id: 10,
        name: "HARD_8",
        pay_rate: 10,
        commission: 0,
        type: BET_TYPES.MULTI_ROLL,
    },
    {
        id: 11,
        name: "HARD_4",
        pay_rate: 8,
        commission: 0,
        type: BET_TYPES.MULTI_ROLL,
    },
    {
        id: 12,
        name: "HARD_10",
        pay_rate: 8,
        commission: 0,
        type: BET_TYPES.MULTI_ROLL,
    },
    {
        id: 13,
        name: "D_PASS_ODDS",
        pay_rate: [1.83, 1.67, 1.5],
        commission: 0,
        type: BET_TYPES.MULTI_ROLL,
    },
    {
        id: 14,
        name: "COME_ODDS",
        pay_rate: [2.2, 2.5, 3],
        commission: 0,
        type: BET_TYPES.MULTI_ROLL,
    },
    {
        id: 15,
        name: "D_COME_ODDS",
        pay_rate: [1.83, 1.67, 1.5],
        commission: 0,
        type: BET_TYPES.MULTI_ROLL,
    },
    {
        id: 16,
        name: "PLACE_LOSE",
        pay_rate: [1.8, 1.625, 1.45],
        commission: 0,
        type: BET_TYPES.MULTI_ROLL,
    },
    {
        id: 17,
        name: "LAY_BET",
        pay_rate: [1.79, 1.63, 1.475],
        commission: 0,
        type: BET_TYPES.MULTI_ROLL,
    },
    {
        id: 18,
        name: "FIELD",
        pay_rate: [2, 3],
        commission: 0,
        type: BET_TYPES.ONE_ROLL,
    },
    {
        id: 19,
        name: "ACES",
        pay_rate: 31,
        commission: 0,
        type: BET_TYPES.ONE_ROLL,
    },
    {
        id: 20,
        name: "TWELVE",
        pay_rate: 31,
        commission: 0,
        type: BET_TYPES.ONE_ROLL,
    },
    {
        id: 21,
        name: "ACE_DEUCE",
        pay_rate: 16,
        commission: 0,
        type: BET_TYPES.ONE_ROLL,
    },
    {
        id: 22,
        name: "YO",
        pay_rate: 16,
        commission: 0,
        type: BET_TYPES.ONE_ROLL,
    },
    {
        id: 23,
        name: "ANY_7",
        pay_rate: 5,
        commission: 0,
        type: BET_TYPES.ONE_ROLL,
    },
    {
        id: 24,
        name: "ANY_CRAPS",
        pay_rate: 8,
        commission: 0,
        type: BET_TYPES.ONE_ROLL,
    },
]
