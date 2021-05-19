import mqlQueryStore from "../MqlQueryStore";

const MqlQueryStore = new mqlQueryStore();

describe("queryStore", () => {
  afterEach(() => {
    MqlQueryStore.clear();
  });
  it("tracks queries by id", () => {
    MqlQueryStore.set("test", "test");

    expect(MqlQueryStore.get("test")).toEqual("test");
  });

  it("can clear the store", () => {
    MqlQueryStore.set("test", "test");

    expect(MqlQueryStore.get("test")).toEqual("test");
    MqlQueryStore.clear();

    expect(MqlQueryStore.get("test")).toEqual(undefined);
  });

  it("can return the entire store", () => {
    MqlQueryStore.set("test", "test");
    MqlQueryStore.set("test2", "test2");

    const store = MqlQueryStore.dump();

    expect(store.test).toEqual("test");
    expect(store.test2).toEqual("test2");
  });

  it("only keeps 6 items in the store", async (done) => {
    const doAfterWait = (cb: () => void) =>
      new Promise((resolve) => {
        setTimeout(() => {
          cb();
          resolve(true);
        }, 100);
      });

    await doAfterWait(() => MqlQueryStore.set("1", "1"));
    await doAfterWait(() => MqlQueryStore.set("2", "2"));
    await doAfterWait(() => MqlQueryStore.set("3", "3"));
    await doAfterWait(() => MqlQueryStore.set("4", "4"));
    await doAfterWait(() => MqlQueryStore.set("5", "5"));
    await doAfterWait(() => MqlQueryStore.set("6", "6"));
    await doAfterWait(() => MqlQueryStore.set("7", "7"));

    const store = MqlQueryStore.dump();
    expect(Object.keys(store).length).toEqual(6);
    done();
  });
});
