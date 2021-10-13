<template>
    <div>
        <nav-lateral></nav-lateral>
        <nav-bar></nav-bar>
        <notification-area></notification-area>

        <section class="full-width pageContent">
		<section class="full-width header-well">
			<div class="full-width header-well-icon">
				<i class="zmdi zmdi-label"></i>
			</div>
			<div class="full-width header-well-text">
				<p class="text-condensedLight">
					REGISTRO DE CATEGORÍAS
				</p>
			</div>
		</section>
		<div class="mdl-tabs mdl-js-tabs mdl-js-ripple-effect">
			<div class="mdl-tabs__tab-bar">
				<a href="#tabNewCategory" class="mdl-tabs__tab is-active">NUEVA CATEGORÍA</a>
				<a href="#tabListCategory" class="mdl-tabs__tab">LISTA DE CATEGORÍAS</a>
			</div>
			<div class="mdl-tabs__panel is-active" id="tabNewCategory">
				<div class="mdl-grid">
					<div class="mdl-cell mdl-cell--4-col-phone mdl-cell--8-col-tablet mdl-cell--8-col-desktop mdl-cell--2-offset-desktop">
						<div class="full-width panel mdl-shadow--2dp">
							<div class="full-width panel-tittle bg-primary text-center tittles">
								Nueva categoría
							</div>
							<div class="full-width panel-content">
								<form>
									<h5 class="text-condensedLight">Datos de la categoría</h5>
									<div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
										<input class="mdl-textfield__input" type="text" pattern="-?[A-Za-z0-9áéíóúÁÉÍÓÚ ]*(\.[0-9]+)?" id="NameCategory" v-model="form.nameCategory">
										<label class="mdl-textfield__label" for="NameCategory">Nombre</label>
										<span class="mdl-textfield__error">Nombre inválido</span>
									</div>
									<div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
										<input class="mdl-textfield__input" type="text" pattern="-?[A-Za-záéíóúÁÉÍÓÚ ]*(\.[0-9]+)?" id="descriptionCategory" v-model="form.descriptionCategory">
										<label class="mdl-textfield__label" for="descriptionCategory">Descripción</label>
										<span class="mdl-textfield__error">Descripción inválida</span>
									</div>
									<p class="text-center">
										<input @click="registerCategory" class="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored bg-primary" id="btn-addCategory" value="+">
											
										<div class="mdl-tooltip" for="btn-addCategory">Agregar categoría</div>
									<!-- </p> -->
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="mdl-tabs__panel" id="tabListCategory">
				<div class="mdl-grid">
					<div class="mdl-cell mdl-cell--4-col-phone mdl-cell--8-col-tablet mdl-cell--8-col-desktop mdl-cell--2-offset-desktop">
						<div class="full-width panel mdl-shadow--2dp">
							<div class="full-width panel-tittle bg-success text-center tittles">
								Lista de categorias
							</div>
							<div class="full-width panel-content">
								<form action="#">
									<div class="mdl-textfield mdl-js-textfield mdl-textfield--expandable">
										<label class="mdl-button mdl-js-button mdl-button--icon" for="searchCategory">
											<i class="zmdi zmdi-search"></i>
										</label>
										<div class="mdl-textfield__expandable-holder">
											<input class="mdl-textfield__input" type="text" id="searchCategory">
											<label class="mdl-textfield__label"></label>
										</div>
									</div>
								</form>
								<div class="mdl-list">
									<div v-for="category in categories" v-bind:key="category._id">
									<div class="mdl-list__item mdl-list__item--two-line">
										<span class="mdl-list__item-primary-content">
											<i class="zmdi zmdi-label mdl-list__item-avatar"></i>
											<span>{{category.nameCategory}}</span>
											<span class="mdl-list__item-sub-title">{{category.descriptionCategory}}</span>
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
    
    components:{
        NavLateral,
        NavBar,
        NotificationArea
    },
	data(){
		return{
			categories:[],
			form:{
				nameCategory:'',
				descriptionCategory:''
			}
		}
	},
	methods:{
		registerCategory(){
            let formDataCategory = new URLSearchParams
			formDataCategory.append('nameCategory', this.form.nameCategory)
			formDataCategory.append('descriptionCategory', this.form.descriptionCategory)
            
            console.log(formDataCategory)
            axios.post('https://proyecto-express-james.herokuapp.com/registercategory', formDataCategory)
            .then((response)=>{
                if (response.status == 200){
                    console.log(response.data)
                    this.$router.push('/home')
                }
            })
        }
		
	},
	created(){
			(async ()=>{this.categories = await api.getCategoriesAsync()})()
		}
}
</script>