export interface IMqlQueryStore {
  set: (id: string, value: any) => void;
  get: (id: string) => any;
  dump: () => { [key: string]: any };
  clear: () => void;
}

class MqlQueryStore implements IMqlQueryStore {
  private store: { [key: string]: any } = {};
  private timeSet: { [key: string]: string } = {};

  private trimStore = () => {
    if (Object.keys(this.store).length > 5) {
      let oldest: string | false = false;
      Object.keys(this.timeSet).forEach((time) => {
        if (!oldest) {
          oldest = time;
        } else {
          if (oldest > time) {
            oldest = time;
          }
        }
      });
      if (oldest && this.store[this.timeSet[oldest]]) {
        delete this.store[this.timeSet[oldest]];
      }
    }
  };

  public set = (id: string, value: any) => {
    if (this.store[id]) {
      this.store[id] = value;
      return;
    }
    this.timeSet[Date.now()] = id;
    this.store[id] = value;
    this.trimStore();
  };

  public get = (id: string) => {
    return this.store[id];
  };

  public dump = () => {
    return this.store;
  };

  public clear = () => {
    this.store = {};
    this.timeSet = {};
  };
}

export default MqlQueryStore;
