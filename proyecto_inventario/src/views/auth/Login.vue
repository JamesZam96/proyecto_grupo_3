<template>
    <div id="fondo">
        <section class="cover">
	<div class="container-login">
		<p class="text-center" style="font-size: 80px;">
			<i class="zmdi zmdi-account-circle"></i>
		</p>
		<p class="text-center text-condensedLight">Inicia sesión con tu cuenta</p>
		<form>
			<div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
				<input class="mdl-textfield__input" type="email" id="email" v-model="form.email">
				<label class="mdl-textfield__label" for="email">Email</label>
			</div>
			<div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
				<input class="mdl-textfield__input" type="password" id="pass" v-model="form.password">
				<label class="mdl-textfield__label" for="pass">Contraseña</label>
			</div>
			<input @click="login" id="SingIn" class="mdl-button mdl-js-button mdl-js-ripple-effect" style="color: #3F51B5; float:right;" value="Iniciar sesión">
			
			<div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
				<p><a href="/registeruser">Registrar cuenta</a></p>
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
                email:'',
                password:''
            }
        }
    },
    methods:{
        login(){
            // localStorage.setItem('user', this.user);
            // this.$router.push('/home')
            let formData = new URLSearchParams
            formData.append('email', this.form.email)
            formData.append('password', this.form.password)
            console.log(formData)
            axios.post('https://proyecto-express-james.herokuapp.com/login', formData, {
                headers:{
                    "Access-Control-Allow-Methods":"POST",
                    "x-auth-token":"El token que guardaron"
                }
            }).then((response)=>{
                console.log(response)
                localStorage.setItem('token', response.data.token)
                this.$router.push('/home')
            })
        }
    }
}
</script>