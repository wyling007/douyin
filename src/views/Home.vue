<template>
    <div>
        <!-- <transition name='up'> -->
        <router-view></router-view>
        <!-- </transition> -->
        <tab-bar class="tab"></tab-bar>
    </div>
</template>
<script>
export default {
    name:'Home',
    data(){
        return{

        }
    },
    components:{
        TabBar:()=>import('../components/home/TabBar')
    }
}
</script>

<style scoped>

</style>