import { _decorator, Component, Node, AnimationClip, Animation, SpriteFrame } from 'cc'
import { FMS_PARAMS_ENUM, PARAMS_NAME_ENUM } from '../../Enums'
import { State } from '../Base/State'
import SubStateMachine from './SubStateMachine'
const { ccclass, property } = _decorator

type ParamValueType = boolean | number

export interface IParmValue {
  type: FMS_PARAMS_ENUM
  value: ParamValueType
}

export const GetParamsTrigger = () => {
  return {
    type: FMS_PARAMS_ENUM.TRIGER,
    value: false,
  }
}

export const GetParamsNUmber = () => {
  return {
    type: FMS_PARAMS_ENUM.NUMBER,
    value: 0,
  }
}

@ccclass('StateMachine')
export abstract class StateMachine extends Component {
  //当前状态 播放动画
  private _currentState: State | SubStateMachine = null

  animationComponent: Animation

  public waitingList: Array<Promise<SpriteFrame[]>> = []
  //参数列表
  param: Map<string, IParmValue> = new Map()

  //状态机列表
  stateMachine: Map<string, State | SubStateMachine> = new Map()

  get currentState() {
    return this._currentState
  }

  set currentState(newState) {
    if (!newState) {
      return
    }
    this._currentState = newState
    this._currentState.run()
  }

  getParams(paramName: string) {
    if (this.param.has(paramName)) {
      return this.param.get(paramName).value
    }
  }

  setParams(paramName: string, value: ParamValueType) {
    if (this.param.has(paramName)) {
      this.param.get(paramName).value = value

      this.run()
      this.reseTrigger()
    }
  }
  reseTrigger() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    for (const [, value] of this.param) {
      if (value.type === FMS_PARAMS_ENUM.TRIGER) {
        value.value = false
      }
    }
  }

  abstract run(): void
  abstract init(): void
}
