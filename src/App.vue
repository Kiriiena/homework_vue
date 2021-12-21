<template>
  <div id="app">
    <div class="container">
   <appHeader/>
   <div class="row">
     <div class="col-8">
       <router-view/>
     </div>
     <div class="col-4">
       <sidebar/>
     </div>
   </div>
    
    <appFooter/>
    </div>
  </div>
</template>

<script>
import appHeader from '@/components/header.vue';
import appFooter from '@/components/footer.vue';
import sidebar from '@/components/sidebar.vue';
  export default {
    components:{
      appHeader,
      appFooter,
      sidebar
    }
    
  }
</script>

<style lang="scss" scoped>
.container{
  padding: none;
}
</style>
