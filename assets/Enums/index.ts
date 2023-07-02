//瓦片类型
export enum TILE_TYPE_ENUM {
  WALL_LEFT_TOP = 'WALL_LEFT_TOP',
  WALL_COLUMN = 'WALL_COLUMN',
  WALL_LEFT_BOTTOM = 'WALL_LEFT_BOTTOM',
  CLIFF_LEFT = 'CLIFF_LEFT',
  WALL_RIGHT_BOTTOM = 'WALL_RIGHT_BOTTOM',
  FLOOR = 'FLOOR',
  CLIFF_CENTER = 'CLIFF_CENTER',
  WALL_ROW = 'WALL_ROW',
  WALL_RIGHT_TOP = 'WALL_RIGHT_TOP',
  CLIFF_RIGHT = 'CLIFF_RIGHT',
}

//事件控制
export enum EVENTMANAGER {
  NEXT_LEVEL = 'NEXT_LEVEL',
  PLAYER_CONTROLLER = 'PLAYER_CONTROLLER',
  PLAYERMOVE_END = 'PLAYER_END',
  PLAYER_BORN = 'PLAYER_BORN',
  ATTACK_PLAYER = 'ATTACK_PLAYER',
  ATTACK_ENEMY = 'ATTACK_ENEMY',
  DOOR_OPEN = 'DOOR_OPEN',
  SMOKE_SHOW = 'SMOKE_SHOW',
  SHAKE_SHOW = 'SHAKE_SHOW',
  RECORD_STEP = 'RECORD_STEP',
  REVOKE_STEP = 'REVOKE_STEP',
  RESTART = 'RESTART',
  EXIT = 'EXIT',
}

//人物控制
export enum CONTROLLER_ENMU {
  TOP = 'TOP',
  BOTTOM = 'BOTTOM',
  LEFT = 'LEFT',
  RIGHT = 'RIGHT',
  TURN_LEFT = 'TURN_LEFT',
  TURN_RIGHT = 'TURN_RIGHT',
}

//状态机
export enum FMS_PARAMS_ENUM {
  TRIGER = 'TRIGER',
  NUMBER = 'NUMBER',
}

export enum PARAMS_NAME_ENUM {
  IDLE = 'IDLE',
  TURN_LEFT = 'TURN_LEFT',
  DRIECTION = 'DRIECTION',
  TURN_RIGHT = 'TURN_RIGHT',
  BLOCKFRONT = 'BLOCKFRONT',
  BLOCKTURNLEFT = 'BLOCKTURNLEFT',
  BLOCKBACK = 'BLOCKBACK',
  BLOCKLEFT = 'BLOCKLEFT',
  BLOCKRIGHT = 'BLOCKRIGHT',
  BLOCKTURNRIGHT = 'BLOCKTURNRIGHT',
  ATTACK = 'ATTACK',
  DEATH = 'DEATH',
  AIRDEATH = 'AIRDEATH',
  SPIKES_TOTAL_COUNT = 'SPIKES_TOTAL_COUNT',
  SPIKES_CUR_COUNT = 'SPIKES_CUR_COUNT',
}

export enum DRIECTION_ENUM {
  TOP = 'TOP',
  BOTTOM = 'BOTTOM',
  LEFT = 'LEFT',
  RIGHT = 'RIGHT',
}

export enum ENTINY_STATE_ENUM {
  IDLE = 'IDLE',
  TURN_LEFT = 'TURN_LEFT',
  TURN_RIGHT = 'TURN_RIGHT',
  BLOCKFRONT = 'BLOCKFRONT',
  BLOCKTURNLEFT = 'BLOCKTURNLEFT',
  BLOCKBACK = 'BLOCKBACK',
  BLOCKLEFT = 'BLOCKLEFT',
  BLOCKRIGHT = 'BLOCKRIGHT',
  BLOCKTURNRIGHT = 'BLOCKTURNRIGHT',
  ATTACK = 'ATTACK',
  DEATH = 'DEATH',
  AIRDEATH = 'AIRDEATH',
}

export enum DIRECTION_ORDER_ENUM {
  TOP = 0,
  BOTTOM = 1,
  LEFT = 2,
  RIGHT = 3,
}

/***
 * 活动单位枚举
 */
export enum ENTITY_TYPE_ENUM {
  PLAYER = 'PLAYER',
  WOODENSKELETON = 'WOODENSKELETON',
  DOOR = 'DOOR',
  IRONSKELETON = 'IRONSKELETON',
  BURST = 'BURST',
  SPIKES_ONE = 'SPIKES_ONE',
  SPIKES_TWO = 'SPIKES_TWO',
  SPIKES_THREE = 'SPIKES_THREE',
  SPIKES_FOUR = 'SPIKES_FOUR',
  SMOKE = 'SMOKE',
}

/***
 * 尖刺类型和总点数映射
 */
export enum SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM {
  SPIKES_ONE = 2,
  SPIKES_TWO = 3,
  SPIKES_THREE = 4,
  SPIKES_FOUR = 5,
}

/***
 * 尖刺当前点数枚举
 */
export enum SPIKES_COUNT_ENUM {
  ZERO = 'ZERO',
  ONE = 'ONE',
  TWO = 'TWO',
  THREE = 'THREE',
  FOUR = 'FOUR',
  FIVE = 'FIVE',
}

/***
 * 尖刺点数类型和数字映射
 */
export enum SPIKES_COUNT_MAP_NUMBER_ENUM {
  ZERO = 0,
  ONE = 1,
  TWO = 2,
  THREE = 3,
  FOUR = 4,
  FIVE = 5,
}

export enum SHAKE_DIRECTION_ENMU {
  TOP = 'TOP',
  BOTTOM = 'BOTTOM',
  LEFT = 'LEFT',
  RIGHT = 'RIGHT',
}

export enum SCENE_ENUM {
  strat = 'start',
  scene = 'scene',
  loading = 'loading',
}