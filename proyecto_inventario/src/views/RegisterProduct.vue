<template>
    <div>
        <nav-lateral></nav-lateral>
        <nav-bar></nav-bar>
        <notification-area></notification-area>

        <section class="full-width pageContent">
		<section class="full-width header-well">
			<div class="full-width header-well-icon">
				<i class="zmdi zmdi-washing-machine"></i>
			</div>
			<div class="full-width header-well-text">
				<p class="text-condensedLight">
					REGISTRO DE PRODUCTOS
				</p>
			</div>
		</section>
		<div class="mdl-tabs mdl-js-tabs mdl-js-ripple-effect">
			<div class="mdl-tabs__tab-bar">
				<a href="#tabNewProduct" class="mdl-tabs__tab is-active">NUEVO PRODUCTO</a>
				<a href="#tabListProducts" class="mdl-tabs__tab">LISTA DE PRODUCTOS</a>
			</div>
			<div class="mdl-tabs__panel is-active" id="tabNewProduct">
				<div class="mdl-grid">
					<div class="mdl-cell mdl-cell--4-col-phone mdl-cell--8-col-tablet mdl-cell--12-col-desktop">
						<div class="full-width panel mdl-shadow--2dp">
							<div class="full-width panel-tittle bg-primary text-center tittles">
								Nuevo producto
							</div>
							<div class="full-width panel-content">
								<form @submit="upload" enctype="multipart/form-data">
									<div class="mdl-grid">
										<div class="mdl-cell mdl-cell--4-col-phone mdl-cell--8-col-tablet mdl-cell--6-col-desktop">
											<h5 class="text-condensedLight">Información básica</h5>
											<div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
												<input class="mdl-textfield__input" type="number" pattern="-?[0-9- ]*(\.[0-9]+)?" id="BarCode" v-model="form.barCodeProduct">
												<label class="mdl-textfield__label" for="BarCode">Código de barras</label>
												<span class="mdl-textfield__error">Código de barras inválido</span>
											</div>
											<div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
												<input class="mdl-textfield__input" type="text" pattern="-?[A-Za-z0-9áéíóúÁÉÍÓÚ ]*(\.[0-9]+)?" id="NameProduct" v-model="form.nameProduct">
												<label class="mdl-textfield__label" for="NameProduct">Nombre</label>
												<span class="mdl-textfield__error">Nombre inválido</span>
											</div>
											
											<div class="mdl-textfield mdl-js-textfield">
												
												<select class="mdl-textfield__input" v-model="form.categoryProduct">
													
													<option value="" disabled="" selected="">Seleccione categoría</option>
													
														<option v-for="category in optionCategory" v-bind:key="category._id">{{category.nameCategory}}</option>
													
												</select>
												
											</div>
											
											<h5 class="text-condensedLight">Unidades y Precio</h5>
											<div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
												<input class="mdl-textfield__input" type="number" pattern="-?[0-9]*(\.[0-9]+)?" id="StrockProduct" v-model="form.unitsProduct">
												<label class="mdl-textfield__label" for="StrockProduct">Unidades</label>
												<span class="mdl-textfield__error">Número inválido</span>
											</div>
											<div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
												<input class="mdl-textfield__input" type="text" pattern="-?[0-9.]*(\.[0-9]+)?" id="PriceProduct" v-model="form.priceProduct">
												<label class="mdl-textfield__label" for="PriceProduct">Precio</label>
												<span class="mdl-textfield__error">Precio inválido</span>
											</div>
											<div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
												<input class="mdl-textfield__input" type="number" pattern="-?[0-9]*(\.[0-9]+)?" id="discountProduct" v-model="form.discountProduct">
												<label class="mdl-textfield__label" for="discountProduct">% Descuento</label>
												<span class="mdl-textfield__error">Descuento inválido</span>
											</div>	
										</div>
										<div class="mdl-cell mdl-cell--4-col-phone mdl-cell--8-col-tablet mdl-cell--6-col-desktop">
											<h5 class="text-condensedLight">Datos del proveedor y modelo</h5>
											<div class="mdl-textfield mdl-js-textfield">
												<select class="mdl-textfield__input" v-model="form.providerProduct">
													<option value="" disabled="" selected="">Seleccione proveedor</option>
													
													<option v-for="provider in optionProvider" v-bind:key="provider._id">{{provider.nameProvider+" "+provider.lastNameProvider}}</option>
													
												</select>
											</div>
											<div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
												<input class="mdl-textfield__input" type="text"  id="modelProduct" v-model="form.modelProduct">
												<label class="mdl-textfield__label" for="modelProduct">Modelo</label>
												<span class="mdl-textfield__error">Modelo inválido</span>
											</div>
											<div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
												<input class="mdl-textfield__input" type="text" id="markProduct" v-model="form.brandProduct">
												<label class="mdl-textfield__label" for="markProduct">Marca</label>
												<span class="mdl-textfield__error">Marca inválida</span>
											</div>
											<h5 class="text-condensedLight">Otros datos</h5>
											<div class="mdl-textfield mdl-js-textfield">
												<input type="date" class="mdl-textfield__input" v-model="form.dateProduct">
											</div>
											<div class="mdl-textfield mdl-js-textfield">
												<select class="mdl-textfield__input" v-model="form.statusProduct">
													<option value="" disabled="" selected="">Seleccione estado</option>
													<option>Activo</option>
													<option>Desactivado</option>
												</select>
											</div>
											<div class="mdl-textfield mdl-js-textfield">
												<input type="file" accept=".png, .jpg, .jpeg" @change="onFileChange">
											</div>
										</div>
									</div>
									<p class="text-center">
										<input type="submit" class="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored bg-primary" id="btn-addProduct" value="+">
										<div class="mdl-tooltip" for="btn-addProduct">Agregar Producto</div>
									<!-- </p> -->
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="mdl-tabs__panel" id="tabListProducts">
				<div class="mdl-grid">
					<div class="mdl-cell mdl-cell--4-col-phone mdl-cell--8-col-tablet mdl-cell--12-col-desktop">
						<form action="#">
							<div class="mdl-textfield mdl-js-textfield mdl-textfield--expandable">
								<label class="mdl-button mdl-js-button mdl-button--icon" for="searchProduct">
									<i class="zmdi zmdi-search"></i>
								</label>
								<div class="mdl-textfield__expandable-holder">
									<input class="mdl-textfield__input" type="text" id="searchProduct">
									<label class="mdl-textfield__label"></label>
								</div>
							</div>
						</form>
						<div class="full-width text-center" style="padding: 30px 0;">
							<div v-for="product in products" v-bind:key="product._id">
							<div class="mdl-card mdl-shadow--2dp full-width product-card">
								<div class="mdl-card__title">
									<img :src="'https://proyecto-express-james.herokuapp.com'+product.imgProduct" alt="product" class="img-responsive">
								</div>
								<div class="mdl-card__supporting-text">
									<small>{{product.unitsProduct}}</small><br>
									<small>{{product.categoryProduct}}</small>
								</div>
								<div class="mdl-card__actions mdl-card--border">
									{{product.nameProduct}}
									<button class="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
										<i class="zmdi zmdi-more"></i>
									</button>
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
import api from '@/api'
import axios from 'axios'

export default {
    
    components:{
        NavLateral,
        NavBar,
        NotificationArea
    },
	data(){
		return{
			optionCategory:[],
			optionProvider:[],
			products:[],
			form:{
				barCodeProduct:'',
				nameProduct:'',
				categoryProduct:'',
				unitsProduct:'',
				priceProduct:'' ,
				discountProduct:'',
				providerProduct:'',
				modelProduct:'',
				brandProduct:'',
				dateProduct:'',
				statusProduct:'',
				imgProduct:''
			}
		}
	},
	methods:{
		onFileChange(e){
			let files = e.target.files || e.dataTransfer.files
			if(!files.length) return;
			this.form.imgProduct = files[0]
			console.log(this.form.imgProduct)
		},
		upload(){
			let formData = new FormData()
			formData.append('barCodeProduct', this.form.barCodeProduct)
			formData.append('nameProduct', this.form.nameProduct)
			formData.append('categoryProduct', this.form.categoryProduct)
			formData.append('unitsProduct', this.form.unitsProduct)
			formData.append('priceProduct', this.form.priceProduct)
			formData.append('discountProduct', this.form.discountProduct)
			formData.append('providerProduct', this.form.providerProduct)
			formData.append('modelProduct', this.form.modelProduct)
			formData.append('brandProduct', this.form.brandProduct)
			formData.append('dateProduct', this.form.dateProduct)
			formData.append('statusProduct', this.form.statusProduct)
			formData.append('imgProduct', this.form.imgProduct)

			axios.post('https://proyecto-express-james.herokuapp.com/registerproduct', formData, {
				header:{
					'Access-Control-Allow-Methods':'POST'
				}
			})
			.then((response)=>{
				console.log(response)
				this.$router.push('/home')
			})
		}
	},
	created(){
			(async ()=>{this.optionCategory = await api.getCategoriesAsync()})(),
			(async ()=>{this.optionProvider = await api.getProvidersAsync()})(),
			(async ()=>{this.products = await api.getProductsAsync()})()
		}
}
</script>

