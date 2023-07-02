import { DRIECTION_ENUM, ENTINY_STATE_ENUM, ENTITY_TYPE_ENUM, TILE_TYPE_ENUM } from '../Enums/index'
import { IEntity, ILevel, ISpikes } from '.'

const mapInfo = [
  [
    {
      src: 22,
      type: TILE_TYPE_ENUM.WALL_LEFT_TOP,
    },
    {
      src: 5,
      type: TILE_TYPE_ENUM.WALL_COLUMN,
    },
    {
      src: 5,
      type: TILE_TYPE_ENUM.WALL_COLUMN,
    },
    {
      src: 5,
      type: TILE_TYPE_ENUM.WALL_COLUMN,
    },
    {
      src: 5,
      type: TILE_TYPE_ENUM.WALL_COLUMN,
    },
    {
      src: 13,
      type: TILE_TYPE_ENUM.WALL_LEFT_BOTTOM,
    },
    {
      src: 18,
      type: TILE_TYPE_ENUM.CLIFF_LEFT,
    },
  ],
  [
    {
      src: 1,
      type: TILE_TYPE_ENUM.FLOOR,
    },
    {
      src: 1,
      type: TILE_TYPE_ENUM.FLOOR,
    },
    {
      src: 1,
      type: TILE_TYPE_ENUM.FLOOR,
    },
    {
      src: 1,
      type: TILE_TYPE_ENUM.FLOOR,
    },
    {
      src: 17,
      type: TILE_TYPE_ENUM.CLIFF_CENTER,
    },
    {
      src: 9,
      type: TILE_TYPE_ENUM.WALL_ROW,
    },
    {
      src: 17,
      type: TILE_TYPE_ENUM.CLIFF_CENTER,
    },
  ],
  [
    {
      src: 20,
      type: TILE_TYPE_ENUM.WALL_ROW,
    },
    {
      src: 1,
      type: TILE_TYPE_ENUM.FLOOR,
    },
    {
      src: 1,
      type: TILE_TYPE_ENUM.FLOOR,
    },
    {
      src: 1,
      type: TILE_TYPE_ENUM.FLOOR,
    },
    {
      src: 1,
      type: TILE_TYPE_ENUM.FLOOR,
    },
    {
      src: 9,
      type: TILE_TYPE_ENUM.WALL_ROW,
    },
    {
      src: 19,
      type: TILE_TYPE_ENUM.CLIFF_RIGHT,
    },
  ],
  [
    {
      src: 9,
      type: TILE_TYPE_ENUM.WALL_ROW,
    },
    {
      src: 1,
      type: TILE_TYPE_ENUM.FLOOR,
    },
    {
      src: 1,
      type: TILE_TYPE_ENUM.FLOOR,
    },
    {
      src: 17,
      type: TILE_TYPE_ENUM.CLIFF_CENTER,
    },
    {
      src: 1,
      type: TILE_TYPE_ENUM.FLOOR,
    },
    {
      src: 9,
      type: TILE_TYPE_ENUM.WALL_ROW,
    },
    {
      src: 17,
      type: TILE_TYPE_ENUM.CLIFF_CENTER,
    },
  ],
  [
    {
      src: 9,
      type: TILE_TYPE_ENUM.WALL_ROW,
    },
    {
      src: 1,
      type: TILE_TYPE_ENUM.FLOOR,
    },
    {
      src: 1,
      type: TILE_TYPE_ENUM.FLOOR,
    },
    {
      src: 1,
      type: TILE_TYPE_ENUM.FLOOR,
    },
    {
      src: 1,
      type: TILE_TYPE_ENUM.FLOOR,
    },
    {
      src: 9,
      type: TILE_TYPE_ENUM.WALL_ROW,
    },
    {
      src: 19,
      type: TILE_TYPE_ENUM.CLIFF_CENTER,
    },
  ],
  [
    {
      src: 9,
      type: TILE_TYPE_ENUM.WALL_ROW,
    },
    {
      src: 1,
      type: TILE_TYPE_ENUM.FLOOR,
    },
    {
      src: 17,
      type: TILE_TYPE_ENUM.CLIFF_RIGHT,
    },
    {
      src: 1,
      type: TILE_TYPE_ENUM.FLOOR,
    },
    {
      src: 17,
      type: TILE_TYPE_ENUM.CLIFF_RIGHT,
    },
    {
      src: 9,
      type: TILE_TYPE_ENUM.WALL_ROW,
    },
    {
      src: 19,
      type: TILE_TYPE_ENUM.CLIFF_CENTER,
    },
  ],
  [
    {
      src: 9,
      type: TILE_TYPE_ENUM.WALL_ROW,
    },
    {
      src: 1,
      type: TILE_TYPE_ENUM.FLOOR,
    },
    {
      src: 1,
      type: TILE_TYPE_ENUM.FLOOR,
    },
    {
      src: 1,
      type: TILE_TYPE_ENUM.FLOOR,
    },
    {
      src: 1,
      type: TILE_TYPE_ENUM.FLOOR,
    },
    {
      src: 9,
      type: TILE_TYPE_ENUM.WALL_ROW,
    },
    {
      src: 19,
      type: TILE_TYPE_ENUM.CLIFF_CENTER,
    },
  ],
  [
    {
      src: 27,
      type: TILE_TYPE_ENUM.WALL_ROW,
    },
    {
      src: 5,
      type: TILE_TYPE_ENUM.WALL_COLUMN,
    },
    {
      src: 23,
      type: TILE_TYPE_ENUM.WALL_RIGHT_BOTTOM,
    },
    {
      src: 19,
      type: TILE_TYPE_ENUM.CLIFF_CENTER,
    },
    {
      src: null,
      type: null,
    },
    {
      src: 9,
      type: TILE_TYPE_ENUM.WALL_ROW,
    },
    {
      src: 19,
      type: TILE_TYPE_ENUM.CLIFF_CENTER,
    },
  ],
  [
    {
      src: 9,
      type: TILE_TYPE_ENUM.WALL_ROW,
    },
    {
      src: 1,
      type: TILE_TYPE_ENUM.FLOOR,
    },
    {
      src: 17,
      type: TILE_TYPE_ENUM.CLIFF_CENTER,
    },
    {
      src: 1,
      type: TILE_TYPE_ENUM.FLOOR,
    },
    {
      src: 1,
      type: TILE_TYPE_ENUM.FLOOR,
    },
    {
      src: 9,
      type: TILE_TYPE_ENUM.WALL_ROW,
    },
    {
      src: 19,
      type: TILE_TYPE_ENUM.CLIFF_CENTER,
    },
  ],
  [
    {
      src: 9,
      type: TILE_TYPE_ENUM.WALL_ROW,
    },
    {
      src: 1,
      type: TILE_TYPE_ENUM.FLOOR,
    },
    {
      src: 1,
      type: TILE_TYPE_ENUM.FLOOR,
    },
    {
      src: 16,
      type: TILE_TYPE_ENUM.WALL_LEFT_TOP,
    },
    {
      src: 5,
      type: TILE_TYPE_ENUM.WALL_COLUMN,
    },
    {
      src: 14,
      type: TILE_TYPE_ENUM.WALL_RIGHT_BOTTOM,
    },
    {
      src: 19,
      type: TILE_TYPE_ENUM.CLIFF_CENTER,
    },
  ],
  [
    {
      src: 21,
      type: TILE_TYPE_ENUM.WALL_ROW,
    },
    {
      src: 1,
      type: TILE_TYPE_ENUM.FLOOR,
    },
    {
      src: 22,
      type: TILE_TYPE_ENUM.WALL_RIGHT_TOP,
    },
    {
      src: 14,
      type: TILE_TYPE_ENUM.WALL_RIGHT_BOTTOM,
    },
    {
      src: 17,
      type: TILE_TYPE_ENUM.CLIFF_CENTER,
    },
    {
      src: null,
      type: null,
    },
    {
      src: null,
      type: null,
    },
  ],
]

const player: IEntity = {
  x: 1,
  y: 0,
  direction: DRIECTION_ENUM.BOTTOM,
  state: ENTINY_STATE_ENUM.IDLE,
  type: ENTITY_TYPE_ENUM.PLAYER,
}

const enemies: Array<IEntity> = [
  {
    x: 3,
    y: 4,
    direction: DRIECTION_ENUM.TOP,
    state: ENTINY_STATE_ENUM.IDLE,
    type: ENTITY_TYPE_ENUM.WOODENSKELETON,
  },
  {
    x: 8,
    y: 3,
    direction: DRIECTION_ENUM.LEFT,
    state: ENTINY_STATE_ENUM.IDLE,
    type: ENTITY_TYPE_ENUM.WOODENSKELETON,
  },
]

const spikes: Array<ISpikes> = [
  {
    x: 3,
    y: 2,
    type: ENTITY_TYPE_ENUM.SPIKES_TWO,
    count: 0,
  },
]

const bursts: Array<IEntity> = [
  {
    x: 1,
    y: 4,
    state: ENTINY_STATE_ENUM.IDLE,
    type: ENTITY_TYPE_ENUM.BURST,
    direction: DRIECTION_ENUM.TOP,
  },
  {
    x: 5,
    y: 2,
    state: ENTINY_STATE_ENUM.IDLE,
    type: ENTITY_TYPE_ENUM.BURST,
    direction: DRIECTION_ENUM.TOP,
  },
  {
    x: 5,
    y: 4,
    state: ENTINY_STATE_ENUM.IDLE,
    type: ENTITY_TYPE_ENUM.BURST,
    direction: DRIECTION_ENUM.TOP,
  },
  {
    x: 7,
    y: 3,
    state: ENTINY_STATE_ENUM.IDLE,
    type: ENTITY_TYPE_ENUM.BURST,
    direction: DRIECTION_ENUM.TOP,
  },
  {
    x: 7,
    y: 4,
    state: ENTINY_STATE_ENUM.IDLE,
    type: ENTITY_TYPE_ENUM.BURST,
    direction: DRIECTION_ENUM.TOP,
  },
  {
    x: 8,
    y: 2,
    state: ENTINY_STATE_ENUM.IDLE,
    type: ENTITY_TYPE_ENUM.BURST,
    direction: DRIECTION_ENUM.TOP,
  },
]

const door: IEntity = {
  x: 10,
  y: 1,
  direction: DRIECTION_ENUM.LEFT,
  state: ENTINY_STATE_ENUM.IDLE,
  type: ENTITY_TYPE_ENUM.DOOR,
}

const level14: ILevel = {
  mapInfo,
  player,
  enemies,
  spikes,
  bursts,
  door,
}

export default level14
