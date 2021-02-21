import AppDispatcher from "../flux/AppDispatcher";

class HomeStore {
  constructor() {
    this.dispatchToken = AppDispatcher.register(this.dispatcherCallback.bind(this));
  }

  dispatcherCallback(payload) {
    const actionType = payload.type
    switch(actionType){
    case "MY TYPE":console.log(payload.data);
    break;
    }
  }
}

const homeStoreClass = new HomeStore();
export default homeStoreClass;