<template>
    <div>
        <div v-for="client in clients" v-bind:key="client._id">
            <h2>{{client.nameClient+" "+client.lastNameClient}}</h2>
            <h2>{{client.phoneClient}}</h2>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        clients:{
            type: Array,
            default: ()=>[]
        }
    }
}
</script>