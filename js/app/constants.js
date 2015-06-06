/*jslint browser: true, eqeq: true, white: true, plusplus: true */
/*global angular, console, alert*/

(function () {
  'use strict';

  var app = angular.module('keira2');

  /* Constants mostly taken from https://github.com/Discover-/SAI-Editor/blob/master/SAI-Editor/Enumerators/PublicEnums.cs */

  /* Init arrays */
  app.saiConstants = [];
  app.modalConstants = [];


  /* event constants */
  app.saiConstants.event = {
    UPDATE_IC : 0,
    UPDATE_OOC : 1,
    HEALT_PCT : 2,
    MANA_PCT : 3,
    AGGRO : 4,
    KILL : 5,
    DEATH : 6,
    EVADE : 7,
    SPELLHIT : 8,
    RANGE : 9,
    OOC_LOS : 10,
    RESPAWN : 11,
    TARGET_HEALTH_PCT : 12,
    VICTIM_CASTING : 13,
    FRIENDLY_HEALTH : 14,
    FRIENDLY_IS_CC : 15,
    FRIENDLY_MISSING_BUFF : 16,
    SUMMONED_UNIT : 17,
    TARGET_MANA_PCT : 18,
    ACCEPTED_QUEST : 19,
    REWARD_QUEST : 20,
    REACHED_HOME : 21,
    RECEIVE_EMOTE : 22,
    HAS_AURA : 23,
    TARGET_BUFFED : 24,
    RESET : 25,
    IC_LOS : 26,
    PASSENGER_BOARDED : 27,
    PASSENGER_REMOVED : 28,
    CHARMED : 29,
    CHARMED_TARGET : 30,
    SPELLHIT_TARGET : 31,
    DAMAGED : 32,
    DAMAGED_TARGET : 33,
    MOVEMENTINFORM : 34,
    SUMMON_DESPAWNED : 35,
    CORPSE_REMOVED : 36,
    AI_INIT : 37,
    DATA_SET : 38,
    WAYPOINT_START : 39,
    WAYPOINT_REACHED : 40,
    TRANSPORT_ADDPLAYER_NYI : 41,
    TRANSPORT_ADDCREATURE_NYI : 42,
    TRANSPORT_REMOVE_PLAYER_NYI : 43,
    TRANSPORT_RELOCATE_NYI : 44,
    INSTANCE_PLAYER_ENTER_NYI : 45,
    AREATRIGGER_ONTRIGGER : 46,
    QUEST_ACCEPTED_NYI : 47,
    QUEST_OBJ_COPLETETION_NYI : 48,
    QUEST_COMPLETION_NYI : 49,
    QUEST_REWARDED_NYI : 50,
    QUEST_FAIL_NYI : 51,
    TEXT_OVER : 52,
    RECEIVE_HEAL : 53,
    JUST_SUMMONED : 54,
    WAYPOINT_PAUSED : 55,
    WAYPOINT_RESUMED : 56,
    WAYPOINT_STOPPED : 57,
    WAYPOINT_ENDED : 58,
    TIMED_EVENT_TRIGGERED : 59,
    UPDATE : 60,
    LINK : 61,
    GOSSIP_SELECT : 62,
    JUST_CREATED : 63,
    GOSSIP_HELLO : 64,
    FOLLOW_COMPLETED : 65,
    DUMMY_EFFECT_NYI : 66,
    IS_BEHIND_TARGET : 67,
    GAME_EVENT_START : 68,
    GAME_EVENT_END : 69,
    GO_STATE_CHANGED : 70,
    GO_EVENT_INFORM : 71,
    ACTION_DONE : 72,
    ON_SPELLCLICK : 73,
    FRIENDLY_HEALTH_PCT : 74,
    DISTANCE_CREATURE : 75,
    DISTANCE_GAMEOBJECT : 76,
    MAX : 77
  };

  /* action constants */
  app.saiConstants.action = {
    NONE : 0,
    TALK : 1,
    SET_FACTION : 2,
    MORPH_TO_ENTRY_OR_MODEL : 3,
    SOUND : 4,
    EMOTE : 5,
    FAIL_QUEST : 6,
    ADD_QUEST : 7,
    SET_REACT_STATE : 8,
    ACTIVATE_GOBJECT : 9,
    RANDOM_EMOTE : 10,
    CAST : 11,
    SUMMON_CREATURE : 12,
    THREAT_SINGLE_PCT : 13,
    THREAT_ALL_PCT : 14,
    CALL_AREAEXPLOREDOREVENTHAPPENS : 15,
    UNUSED_16 : 16,
    SET_EMOTE_STATE : 17,
    SET_UNIT_FLAG : 18,
    REMOVE_UNIT_FLAG : 19,
    AUTO_ATTACK : 20,
    COMBAT_MOVEMENT : 21,
    SET_EVENT_PHASE : 22,
    INC_EVENT_PHASE : 23,
    EVADE : 24,
    FLEE_FOR_ASSIST : 25,
    CALL_GROUPEVENTHAPPENS : 26,
    CALL_CASTEDCREATUREORGO : 27,
    REMOVEAURASFROMSPELL : 28,
    FOLLOW : 29,
    RANDOM_PHASE : 30,
    RANDOM_PHASE_RANGE : 31,
    RESET_GOBJECT : 32,
    KILLED_MONSTER : 33,
    SET_INST_DATA : 34,
    SET_INST_DATA64 : 35,
    UPDATE_TEMPLATE : 36,
    DIE : 37,
    SET_IN_COMBAT_WITH_ZONE : 38,
    CALL_FOR_HELP : 39,
    SET_SHEATH : 40,
    FORCE_DESPAWN : 41,
    SET_INVINCIBILITY_HP_LEVEL : 42,
    MOUNT_TO_ENTRY_OR_MODEL : 43,
    SET_PHASE_MASK : 44,
    SET_DATA : 45,
    MOVE_FORWARD : 46,
    SET_VISIBILITY : 47,
    SET_ACTIVE : 48,
    ATTACK_START : 49,
    SUMMON_GO : 50,
    KILL_UNIT : 51,
    ACTIVATE_TAXI : 52,
    WP_START : 53,
    WP_PAUSE : 54,
    WP_STOP : 55,
    ADD_ITEM : 56,
    REMOVE_ITEM : 57,
    INSTALL_AI_TEMPLATE : 58,
    SET_RUN : 59,
    SET_FLY : 60,
    SET_SWIM : 61,
    TELEPORT : 62,
    UNUSED_63 : 63,
    STORE_TARGET_LIST : 64,
    WP_RESUME : 65,
    SET_ORIENTATION : 66,
    CREATE_TIMED_EVENT : 67,
    PLAYMOVIE : 68,
    MOVE_TO_POS : 69,
    RESPAWN_TARGET : 70,
    EQUIP : 71,
    CLOSE_GOSSIP : 72,
    TRIGGER_TIMED_EVENT : 73,
    REMOVE_TIMED_EVENT : 74,
    ADD_AURA : 75,
    OVERRIDE_SCRIPT_BASE_OBJECT : 76,
    RESET_SCRIPT_BASE_OBJECT : 77,
    CALL_SCRIPT_RESET : 78,
    SET_RANGED_MOVEMENT : 79,
    CALL_TIMED_ACTIONLIST : 80,
    SET_NPC_FLAG : 81,
    ADD_NPC_FLAG : 82,
    REMOVE_NPC_FLAG : 83,
    SIMPLE_TALK : 84,
    INVOKER_CAST : 85,
    CROSS_CAST : 86,
    CALL_RANDOM_TIMED_ACTIONLIST : 87,
    CALL_RANDOM_RANGE_TIMED_ACTIONLIST : 88,
    RANDOM_MOVE : 89,
    SET_UNIT_FIELD_BYTES_1 : 90,
    REMOVE_UNIT_FIELD_BYTES_1 : 91,
    INTERRUPT_SPELL : 92,
    SEND_GO_CUSTOM_ANIM : 93,
    SET_DYNAMIC_FLAG : 94,
    ADD_DYNAMIC_FLAG : 95,
    REMOVE_DYNAMIC_FLAG : 96,
    JUMP_TO_POS : 97,
    SEND_GOSSIP_MENU : 98,
    GO_SET_LOOT_STATE : 99,
    SEND_TARGET_TO_TARGET : 100,
    SET_HOME_POS : 101,
    SET_HEALTH_REGEN : 102,
    SET_ROOT : 103,
    SET_GO_FLAG : 104,
    ADD_GO_FLAG : 105,
    REMOVE_GO_FLAG : 106,
    SUMMON_CREATURE_GROUP : 107,
    SET_POWER : 108,
    ADD_POWER : 109,
    REMOVE_POWER : 110,
    GAME_EVENT_STOP : 111,
    GAME_EVENT_START : 112,
    START_CLOSEST_WAYPOINT : 113,
    MAX : 114
  };

  /* target constants */
  app.saiConstants.target = {
    NONE : 0,
    SELF : 1,
    VICTIM : 2,
    HOSTILE_SECOND_AGGRO : 3,
    HOSTILE_LAST_AGGRO : 4,
    HOSTILE_RANDOM : 5,
    HOSTILE_RANDOM_NOT_TOP : 6,
    ACTION_INVOKER : 7,
    POSITION : 8,
    CREATURE_RANGE : 9,
    CREATURE_GUID : 10,
    CREATURE_DISTANCE : 11,
    STORED : 12,
    GAMEOBJECT_RANGE : 13,
    GAMEOBJECT_GUID : 14,
    GAMEOBJECT_DISTANCE : 15,
    INVOKER_PARTY : 16,
    PLAYER_RANGE : 17,
    PLAYER_DISTANCE : 18,
    CLOSEST_CREATURE : 19,
    CLOSEST_GAMEOBJECT : 20,
    CLOSEST_PLAYER : 21,
    ACTION_INVOKER_VEHICLE : 22,
    OWNER_OR_SUMMONER : 23,
    THREAT_LIST : 24,
    CLOSEST_ENEMY : 25,
    CLOSEST_FRIENDLY : 26,
    MAX : 27
  };

  /* creature family constants */
  app.modalConstants.family = [];
  app.modalConstants.family[1] = "Wolf";
  app.modalConstants.family[2] = "Cat";
  app.modalConstants.family[3] = "Spider";
  app.modalConstants.family[4] = "Bear";
  app.modalConstants.family[5] = "Boar";
  app.modalConstants.family[6] = "Crocolisk";
  app.modalConstants.family[7] = "Carrion Bird";
  app.modalConstants.family[8] = "Crab";
  app.modalConstants.family[9] = "Gorilla";
  app.modalConstants.family[11] = "Raptor";
  app.modalConstants.family[12] = "Tallstrider";
  app.modalConstants.family[15] = "Felhunter";
  app.modalConstants.family[16] = "Voidwalker";
  app.modalConstants.family[17] = "Succubus";
  app.modalConstants.family[19] = "Doomguard";
  app.modalConstants.family[20] = "Scorpid";
  app.modalConstants.family[21] = "Turtle";
  app.modalConstants.family[23] = "Imp";
  app.modalConstants.family[24] = "Bat";
  app.modalConstants.family[25] = "Hyena";
  app.modalConstants.family[26] = "Bird of Prey";
  app.modalConstants.family[27] = "Wind Serpent";
  app.modalConstants.family[28] = "Remote Control";
  app.modalConstants.family[29] = "Felguard";
  app.modalConstants.family[30] = "Dragonhawk";
  app.modalConstants.family[31] = "Ravager";
  app.modalConstants.family[32] = "Warp Stalker";
  app.modalConstants.family[33] = "Sporebat";
  app.modalConstants.family[34] = "Nether Ray";
  app.modalConstants.family[35] = "Serpent";
  app.modalConstants.family[37] = "Moth";
  app.modalConstants.family[38] = "Chimaera";
  app.modalConstants.family[39] = "Devilsaur";
  app.modalConstants.family[40] = "Ghoul";
  app.modalConstants.family[41] = "Silithid";
  app.modalConstants.family[42] = "Worm";
  app.modalConstants.family[43] = "Rhino";
  app.modalConstants.family[44] = "Wasp";
  app.modalConstants.family[45] = "Core Hound";
  app.modalConstants.family[46] = "Spirit Beast";

}());
