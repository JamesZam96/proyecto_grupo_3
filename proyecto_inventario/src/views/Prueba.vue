<template>
    <div class="container">
        <users-table-prueba :users="users" v-if="false"></users-table-prueba>
        <users-prueba v-bind:users="users"></users-prueba>
    </div>
</template>

<script>
import api from '@/api';
import UsersPrueba from '@/components/UsersPrueba' 
import UsersTablePrueba from '@/components/UsersTablePrueba'

export default {
    components:{
        UsersPrueba,
        UsersTablePrueba
    },
    data(){
        return{
            users:[]
        }

    },
    created(){
        // api.getUsersPromise().then(data=>console.log(data));
        // api.getUsersPromise().then(data=>this.users=data);
        (async ()=>{this.users = await api.getUsersAsync()})();
    }
    
}
</script>