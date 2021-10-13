<template>
    <div>
        <nav-lateral></nav-lateral>
        <nav-bar></nav-bar>
        <notification-area></notification-area>

       <section class="full-width pageContent">
		<section class="full-width header-well">
			<div class="full-width header-well-icon">
				<i class="zmdi zmdi-truck"></i>
			</div>
			<div class="full-width header-well-text">
				<p class="text-condensedLight">
					REGISTRO DE PROVEEDORES
				</p>
			</div>
		</section>
		<div class="mdl-tabs mdl-js-tabs mdl-js-ripple-effect">
			<div class="mdl-tabs__tab-bar">
				<a href="#tabNewProvider" class="mdl-tabs__tab is-active">NUEVO PROVEEDOR</a>
				<a href="#tabListProvider" class="mdl-tabs__tab">LISTA DE PROVEEDORES</a>
			</div>
			<div class="mdl-tabs__panel is-active" id="tabNewProvider">
				<div class="mdl-grid">
					<div class="mdl-cell mdl-cell--4-col-phone mdl-cell--8-col-tablet mdl-cell--8-col-desktop mdl-cell--2-offset-desktop">
						<div class="full-width panel mdl-shadow--2dp">
							<div class="full-width panel-tittle bg-primary text-center tittles">
								Nuevo proveedor
							</div>
							<div class="full-width panel-content">
								<form>
									<h5 class="text-condensedLight">Datos del proveedor</h5>
									<div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
										<input class="mdl-textfield__input" type="number" pattern="-?[0-9]*(\.[0-9]+)?" id="DNIProvider" v-model="form.dniProvider">
										<label class="mdl-textfield__label" for="DNIProvider">Identificación</label>
										<span class="mdl-textfield__error">Número inválido</span>
									</div>
									<div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
										<input class="mdl-textfield__input" type="text" pattern="-?[A-Za-z0-9 ]*(\.[0-9]+)?" id="NameProvider" v-model="form.nameProvider">
										<label class="mdl-textfield__label" for="NameProvider">Nombres</label>
										<span class="mdl-textfield__error">Nombres inválidos</span>
									</div>
                                    <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
										<input class="mdl-textfield__input" type="text" id="lastNameProvider" v-model="form.lastNameProvider">
										<label class="mdl-textfield__label" for="lastNameProvider">Apellidos</label>
										<span class="mdl-textfield__error">Apellidos inválidos</span>
									</div>
									<div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
										<input class="mdl-textfield__input" type="text" id="addressProvider" v-model="form.addressProvider">
										<label class="mdl-textfield__label" for="addressProvider">Dirección</label>
										<span class="mdl-textfield__error">Dirección inválida</span>
									</div>
									<div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
										<input class="mdl-textfield__input" type="tel" pattern="-?[0-9+()- ]*(\.[0-9]+)?" id="phoneProvider" v-model="form.phoneProvider">
										<label class="mdl-textfield__label" for="phoneProvider">Teléfono</label>
										<span class="mdl-textfield__error">Número de teléfono inválido</span>
									</div>
									<div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
										<input class="mdl-textfield__input" type="email" id="emailProvider" v-model="form.emailProvider">
										<label class="mdl-textfield__label" for="emailProvider">Email</label>
										<span class="mdl-textfield__error">Email inválido</span>
									</div>
									<div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
										<input class="mdl-textfield__input" type="text" id="webProvider" v-model="form.webProvider">
										<label class="mdl-textfield__label" for="webProvider">Web</label>
										<span class="mdl-textfield__error">Web inválida</span>
									</div>
									<p class="text-center">
										<input type="button" @click="registerProvider" class="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored bg-primary" id="btn-addProvider" value="+">
										<div class="mdl-tooltip" for="btn-addProvider">Agregar proveedor</div>
									<!-- </p> -->
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="mdl-tabs__panel" id="tabListProvider">
				<div class="mdl-grid">
					<div class="mdl-cell mdl-cell--4-col-phone mdl-cell--8-col-tablet mdl-cell--8-col-desktop mdl-cell--2-offset-desktop">
						<div class="full-width panel mdl-shadow--2dp">
							<div class="full-width panel-tittle bg-success text-center tittles">
								Lista de proveedores
							</div>
							<div class="full-width panel-content">
								<form action="#">
									<div class="mdl-textfield mdl-js-textfield mdl-textfield--expandable">
										<label class="mdl-button mdl-js-button mdl-button--icon" for="searchProvider">
											<i class="zmdi zmdi-search"></i>
										</label>
										<div class="mdl-textfield__expandable-holder">
											<input class="mdl-textfield__input" type="text" id="searchProvider">
											<label class="mdl-textfield__label"></label>
										</div>
									</div>
								</form>
								<div class="mdl-list">
									<div v-for="provider in providers" v-bind:key="provider._id">
									<div class="mdl-list__item mdl-list__item--two-line">
										<span class="mdl-list__item-primary-content">
											<i class="zmdi zmdi-truck mdl-list__item-avatar"></i>
											<span>{{provider.nameProvider+" "+provider.lastNameProvider}}</span>
											<span class="mdl-list__item-sub-title">{{provider.dniProvider}}</span>
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
    // name: 'registerprovider',
    components:{
        NavLateral,
        NavBar,
        NotificationArea
    },
	data(){
		return{
			providers:[],
			form:{
				dniProvider:'',
				nameProvider:'',
				lastNameProvider:'',
				addressProvider:'',
				phoneProvider:'',
				emailProvider:'',
				webProvider:''
			}
		}
	},
	methods:{
		registerProvider(){
            let formDataProvider = new URLSearchParams
			formDataProvider.append('dniProvider', this.form.dniProvider)
			formDataProvider.append('nameProvider', this.form.nameProvider)
			formDataProvider.append('lastNameProvider', this.form.lastNameProvider)
			formDataProvider.append('addressProvider', this.form.addressProvider)
			formDataProvider.append('phoneProvider', this.form.phoneProvider)
			formDataProvider.append('emailProvider', this.form.emailProvider)
			formDataProvider.append('webProvider', this.form.webProvider)
            console.log(formDataProvider)

            axios.post('https://proyecto-express-james.herokuapp.com/registerprovider', formDataProvider)
            .then((response)=>{
                if (response.status == 200){
                    console.log(response.data)
                    this.$router.push('/home')
                }
            })
        }
		
	},
	created(){
			(async ()=>{this.providers = await api.getProvidersAsync()})()
		}

}

</script>

