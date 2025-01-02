export default class InMemoryDbAdapter <T>{
  private _data: T[] = []

  public async save(data: any): Promise<T> {
    this._data.push(data)
    return data
  }
}