export const MESSAGE_TYPE = {
  // Messages from Server to Client
  SC_START_GAME: "SC_START_GAME",
  SC_END_MISSION: "SC_END_MISSION",
  SC_END_GAME: "SC_END_GAME",
  SC_ROLL_RESULT: "SC_ROLL_RESULT",

  // Messsages from Client to Server
  CS_RESTART_MISSION: "CS_RESTART_MISSION",
  CS_RESTART_GAME: "CS_RESTART_GAME",
  CS_CLAIM_ROLL: "CS_CLAIM_ROLL",
};

export const ROUNDS = {
  MUS_CLAIM: 0,
};