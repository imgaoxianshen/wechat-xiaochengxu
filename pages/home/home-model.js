import { Base } from "../../utils/util.js";

class Home extends Base {
  constructor() {
    super();
  }

  showIndex(callBack) {
    var params = {
      url: "shop_index.php",
      sCallBack:(res)=>{
        callBack&&callBack(res)
      },
    };
    
    this.request(params);
  }

}

export { Home }