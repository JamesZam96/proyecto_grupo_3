<template>
    <div>
        <section class="cover">
	<div class="container-register-user">
		<p class="text-center text-condensedLight">Registrate</p>
		<form>
			<div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
				<input class="mdl-textfield__input" type="text" id="storename" v-model="form.storeName">
				<label class="mdl-textfield__label" for="storename">Nombre de la tienda</label>
			</div>
			<div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
				<input class="mdl-textfield__input" type="text" id="names" v-model="form.names">
				<label class="mdl-textfield__label" for="names">Nombres</label>
			</div>
			<div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
				<input class="mdl-textfield__input" type="text" id="lastnames" v-model="form.lastNames">
				<label class="mdl-textfield__label" for="lastnames">Apellidos</label>
			</div>
			<div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
				<input class="mdl-textfield__input" type="email" id="email" v-model="form.email">
				<label class="mdl-textfield__label" for="email">Email</label>
			</div>
			<div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
				<input class="mdl-textfield__input" type="text" id="phone" v-model="form.phone">
				<label class="mdl-textfield__label" for="phone">Teléfono</label>
			</div>
			<div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
				<input class="mdl-textfield__input" type="password" id="pass" v-model="form.password">
				<label class="mdl-textfield__label" for="pass">Contraseña</label>
			</div>
			<!-- <i class="zmdi zmdi-mail-send"></i> -->
			<input type="button" @click="register" id="Register" class="mdl-button mdl-js-button mdl-js-ripple-effect" style="color: #3F51B5; float:right;" value="Registrar"/>
			<div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
				<p><a href="/login">¿Ya tienes una cuenta?</a></p>
			</div>
		</form>
	</div>
        </section>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            // user:null
            form:{
                storeName:'',
				names:'',
				lastNames:'',
                email:'',
				phone:'',
                password:''
            }
        }
    },
    methods:{
        register(){
            // localStorage.setItem('user', this.user);
            // this.$router.push('/home')
            let formData = new URLSearchParams
			formData.append('storeName', this.form.storeName)
            formData.append('names', this.form.names)
			formData.append('lastNames', this.form.lastNames)
            formData.append('email', this.form.email)
			formData.append('phone', this.form.phone)
            formData.append('password', this.form.password)
            console.log(formData)
            axios.post('https://proyecto-express-james.herokuapp.com/register', formData)
            .then((response)=>{
                if (response.status == 200){
                    console.log(response)
                    this.$router.push('/')
                }
                
                // localStorage.setItem('token', response.data.token)
                // this.$router.push('/home')
            })
        }
    }
}
</script>