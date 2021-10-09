<template>
    <div>
        <getPruebaC v-bind:clients="clients"></getPruebaC>
        <!-- <div v-for="client in clients" v-bind:key="client._id">
            <h2>{{client.nameClient+" "+client.lastNameClient}}</h2>
            <h2>{{client.phone}}</h2>
        </div> -->
    </div>
</template>

<script>
import api from '@/api'
import getPruebaC from '@/components/getPruebaC'

export default {
    components:{
        getPruebaC
    },
    data(){
        return{
            clients:[]
        }

    },
    created(){
        // api.getUsersPromise().then(data=>console.log(data));
        // api.getUsersPromise().then(data=>this.users=data);
        (async ()=>{this.clients = await api.getClientsAsync()})();
    }
}
</script>
