export interface DBAdapter<T> {
  save(data: any): Promise<T>
}
