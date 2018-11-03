import { Store, StoreOptions } from 'vuex';

export class DataStore<S> {
  /**
   * Factory
   * @param option 
   */
  public static create<S>(option: StoreOptions<S>) {
    const result = new DataStore<S>(option);
    return result;
  }
  public $$vuexStoreInstance: Store<any> = null;
  private constructor(option: StoreOptions<S>) {
    this.$$vuexStoreInstance = new Store<S>(option);
  }
}
