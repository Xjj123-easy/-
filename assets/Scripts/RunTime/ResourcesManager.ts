import { AssetManager, resources, SpriteFrame } from 'cc'
import Singleton from '../Base/Singleton'

export default class ResourcesManager extends Singleton {
  static get Instance() {
    return super.GetInstance<ResourcesManager>()
  }

  loaddir(path: string, type: typeof SpriteFrame = SpriteFrame) {
    //资源批量加载

    return new Promise<SpriteFrame[]>((ro, re) => {
      resources.loadDir(path, type, function (err, assets) {
        if (err) {
          re(err)
          return
        }
        ro(assets)
      })
    })
  }
}
