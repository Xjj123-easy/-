

 export default class Singleton{
  //设置单例类
  public static _instance:any=null;

  static GetInstance<T>():T{
    if(this._instance===null){
      this._instance=new this();
    }
    return this._instance;
  }

}
