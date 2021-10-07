<template>
    <div v-if="loaded">
        <img :src="user.picture.large" alt="">
        <h2>{{user.name.first}}</h2>
    </div>
    <div v-else>
        <!-- <h2>Cargando Información</h2> -->
         <b-spinner variant="success"></b-spinner>
    </div>
</template>

<script>
import api from '@/api'

export default {
    data(){
        return{
            user: {},
            loaded: false
        }
    },
    created(){
        this.getUser(this.$route.query.id);
    },
    methods:{
        getUser(id){
            (async ()=>{
                this.user = await api.getUsersData(id)
                this.loaded = true;
            })();
        }
    }
}
</script>