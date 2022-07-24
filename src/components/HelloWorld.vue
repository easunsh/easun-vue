<template>
  <div class="hello">
   <!-- <h1>{{ msg }}</h1> -->
   <div v-if="loading">loading...</div>
   <h3 v-for="( item , index ) in messages" :key="index">{{ item }}</h3>
   <button @click="getMessages">load</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { mapActions , mapState } from 'vuex';

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  
   computed: {  //计算
    ...mapState({
      loading: 'loading',   //true or false
      messages: 'msg'    // 一个数组
    })
   },


   methods: {
    ...mapActions({
        getMessages: 'getMsg'

    })    
   }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
