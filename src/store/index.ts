import { createStore } from 'vuex'



export default createStore({
  state: {  
    loading: false,
    msg: [] as Array<string>
  },

  getters: {    
  },

//mutations设置STATE用的一些方法
mutations: { 
  setLoading( state , data ){
    state.loading = data;
  },   

  setMsg( state , data ){
    state.msg = [...state.msg , ...data];	
  } 
},

/*actions定义获取数据用的方法，然后执行mutations，去设置STATE */
actions: {  
	
  getMsg({ commit }){   // 用 commit函数进行提交，解构得到commit

    commit('setLoading',true);
            
    //模拟异步动作
    setTimeout( () => {

      commit('setLoading',false);
       
      commit('setMsg',['hello','good','byby']);  

    },1000);

  } 
},

modules: {   
  }

})



// export default createStore({
//   state: {
//   },
//   getters: {
//   },
//   mutations: {
//   },
//   actions: {
//   },
//   modules: {
//   }
// })
