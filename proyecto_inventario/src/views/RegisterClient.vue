<template>
    <div>
        <nav-lateral></nav-lateral>
        <nav-bar></nav-bar>
        <notification-area></notification-area>
        <section class="full-width pageContent">
		<section class="full-width header-well">
			<div class="full-width header-well-icon">
				<i class="zmdi zmdi-accounts"></i>
			</div>
			<div class="full-width header-well-text">
				<p class="text-condensedLight">
					REGISTRO DE CLIENTES
				</p>
			</div>
		</section>
		<div class="mdl-tabs mdl-js-tabs mdl-js-ripple-effect">
			<div class="mdl-tabs__tab-bar">
				<a href="#tabNewClient" class="mdl-tabs__tab is-active">NUEVO CLIENTE</a>
				<a href="#tabListClient" class="mdl-tabs__tab">LISTA DE CLIENTES</a>
			</div>
			<div class="mdl-tabs__panel is-active" id="tabNewClient">
				<div class="mdl-grid">
					<div class="mdl-cell mdl-cell--4-col-phone mdl-cell--8-col-tablet mdl-cell--8-col-desktop mdl-cell--2-offset-desktop">
						<div class="full-width panel mdl-shadow--2dp">
							<div class="full-width panel-tittle bg-primary text-center tittles">
								Nuevo cliente
							</div>
							<div class="full-width panel-content">
								<form>
									<h5 class="text-condensedLight">DATOS DEL CLIENTE</h5>
									<div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
										<input class="mdl-textfield__input" type="text" pattern="-?[0-9]*(\.[0-9]+)?" id="DNIClient" v-model="form.dniClient">
										<label class="mdl-textfield__label" for="DNIClient">Identificación</label>
										<span class="mdl-textfield__error">Número inválido</span>
									</div>
									<div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
										<input class="mdl-textfield__input" type="text" pattern="-?[A-Za-záéíóúÁÉÍÓÚ ]*(\.[0-9]+)?" id="NameClient" v-model="form.nameClient">
										<label class="mdl-textfield__label" for="NameClient">Nombres</label>
										<span class="mdl-textfield__error">Nombres inválidos</span>
									</div>
									<div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
										<input class="mdl-textfield__input" type="text" pattern="-?[A-Za-záéíóúÁÉÍÓÚ ]*(\.[0-9]+)?" id="LastNameClient" v-model="form.lastNameClient">
										<label class="mdl-textfield__label" for="LastNameClient">Apellidos</label>
										<span class="mdl-textfield__error">Apellidos inválidos</span>
									</div>
									<div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
										<input class="mdl-textfield__input" type="text" id="address1Client" v-model="form.address1Client">
										<label class="mdl-textfield__label" for="address1Client">Dirección 1</label>
										<span class="mdl-textfield__error">Dirección inválida</span>
									</div>
									<div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
										<input class="mdl-textfield__input" type="text" id="address2Client" v-model="form.address2Client">
										<label class="mdl-textfield__label" for="address2Client">Dirección 2</label>
										<span class="mdl-textfield__error">Dirección inválida</span>
									</div>
									<div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
										<input class="mdl-textfield__input" type="tel" pattern="-?[0-9+()- ]*(\.[0-9]+)?" id="phoneClient" v-model="form.phoneClient">
										<label class="mdl-textfield__label" for="phoneClient">Teléfono</label>
										<span class="mdl-textfield__error">Número de teléfono inválido</span>
									</div>
									<div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
										<input class="mdl-textfield__input" type="email" id="emailClient" v-model="form.emailClient">
										<label class="mdl-textfield__label" for="emailClient">Email</label>
										<span class="mdl-textfield__error">Email inválido</span>
									</div>
									<p class="text-center">
										<input @click="registerClient" class="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored bg-primary" id="btn-addClient" value="+">
										<div class="mdl-tooltip" for="btn-addClient">Agregar cliente</div>
									<!-- </p> -->
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="mdl-tabs__panel" id="tabListClient">
				<div class="mdl-grid">
					<div class="mdl-cell mdl-cell--4-col-phone mdl-cell--8-col-tablet mdl-cell--8-col-desktop mdl-cell--2-offset-desktop">
						<div class="full-width panel mdl-shadow--2dp">
							<div class="full-width panel-tittle bg-success text-center tittles">
								Lista de clientes
							</div>
							<div class="full-width panel-content">
								<form action="#">
									<div class="mdl-textfield mdl-js-textfield mdl-textfield--expandable">
										<label class="mdl-button mdl-js-button mdl-button--icon" for="searchClient">
											<i class="zmdi zmdi-search"></i>
										</label>
										<div class="mdl-textfield__expandable-holder">
											<input class="mdl-textfield__input" type="text" id="searchClient">
											<label class="mdl-textfield__label"></label>
										</div>
									</div>
								</form>
								
								<div class="mdl-list">
									<div v-for="client in clients" v-bind:key="client._id">
									<div class="mdl-list__item mdl-list__item--two-line">
										<span class="mdl-list__item-primary-content">
											<i class="zmdi zmdi-account mdl-list__item-avatar"></i>
											<span>{{client.nameClient+" "+client.lastNameClient}}</span>
											<span class="mdl-list__item-sub-title">{{client.dniClient}}</span>
										</span>
										<a class="mdl-list__item-secondary-action" href="#!"><i class="zmdi zmdi-more"></i></a>
									</div>
									
									<li class="full-width divider-menu-h"></li>
									</div>
									
								</div>
								
							</div>
						</div>
						
					</div>
				</div>
			</div>
		</div>
	</section>
    </div>
</template>

<script>
import NavLateral from '@/components/NavLateral.vue'
import NavBar from '@/components/NavBar.vue'
import NotificationArea from '@/components/NotificationArea.vue'
import axios from 'axios'
import api from '@/api'

export default {
    // name: 'registerclient',
    components:{
        NavLateral,
        NavBar,
        NotificationArea
    },
	data(){
		return{
			clients:[],
			form:{
				dniClient:'',
				nameClient:'',
				lastNameClient:'',
				address1Client:'',
				address2Client:'',
				phoneClient:'',
				emailClient:''
			}
		}
	},
	methods:{
		registerClient(){
            let formDataClient = new URLSearchParams
			formDataClient.append('dniClient', this.form.dniClient)
			formDataClient.append('nameClient', this.form.nameClient)
			formDataClient.append('lastNameClient', this.form.lastNameClient)
			formDataClient.append('address1Client', this.form.address1Client)
			formDataClient.append('address2Client', this.form.address2Client)
			formDataClient.append('phoneClient', this.form.phoneClient)
			formDataClient.append('emailClient', this.form.emailClient)
            
            console.log(formDataClient)
            axios.post('https://proyecto-express-james.herokuapp.com/registerclient', formDataClient)
            .then((response)=>{
                if (response.status == 200){
                    console.log(response.data)
                    this.$router.push('/home')
                }
            })
        }
		
	},
	created(){
			(async ()=>{this.clients = await api.getClientsAsync()})()
		}
}
</script>

