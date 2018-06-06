import {Home} from "home-model.js";
var home = new Home();

Page({

  data: {
  
  },

  onLoad: function (options) {
    this._loadData();
  },
  
  _loadData:function(){
    home.showIndex((res)=>{
      console.log(res);
    });
    
  },
  

})