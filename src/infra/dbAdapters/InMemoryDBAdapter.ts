import { DBAdapter } from '/opt/nodejs/node_modules/src/infra/interfaces/DBAdapter'

export default class InMemoryDbAdapter<T> implements DBAdapter<T> {
  private _data: T[] = []

  public async save(data: any): Promise<T> {
    this._data.push(data)
    return data
  }
}
