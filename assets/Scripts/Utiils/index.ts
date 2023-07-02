import { Node, UITransform, Layers, SpriteFrame } from 'cc'

/**
 * Predefined variables
 * Name = BattleManager
 * DateTime = Fri May 19 2023 14:21:20 GMT+0800 (中国标准时间)
 * Author = 杰哥真好
 * FileBasename = BattleManager.ts
 * FileBasenameNoExtension = BattleManager
 * URL = db://assets/Scripts/Scene/BattleManager.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/zh/
 *
 */

export const creatUINode = (name: string = '') => {
  const node = new Node(name)
  const tranfrom = node.addComponent(UITransform)
  // tranfrom.setAnchorPoint(0,1);
  node.layer = 1 << Layers.nameToLayer('UI_2D')
  return node
}
export const randombyLength = (len: number) =>
  Array.from({ length: len }).reduce<string>((total, item) => total + Math.floor(Math.random() * 10), '')

export const RandomNumer = (start: number, end: number) => {
  return Math.floor(start + (end - start) * Math.random())
}
const reg = /\((\d+)\)/
export const getStrNumber = (str: string) => {
  return parseInt(str.match(reg)[1] || '0')
}
export const sortspriteFrame = (sp: SpriteFrame[]) => sp.sort((a, b) => getStrNumber(a.name) - getStrNumber(b.name))
