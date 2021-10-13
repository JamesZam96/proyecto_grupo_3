<template>
    <div>
        <nav-lateral></nav-lateral>
        <nav-bar></nav-bar>
        <notification-area></notification-area>

        <section class="full-width pageContent">
		<section class="full-width header-well">
			<div class="full-width header-well-icon">
				<i class="zmdi zmdi-store"></i>
			</div>
			<div class="full-width header-well-text">
				<p class="text-condensedLight">
					INVENTARIO
				</p>
			</div>
		</section>
		<div class="full-width divider-menu-h"></div>
		<div class="mdl-grid">
			<div class="mdl-cell mdl-cell--4-col-phone mdl-cell--8-col-tablet mdl-cell--12-col-desktop">
				<table class="mdl-data-table mdl-js-data-table mdl-shadow--2dp full-width table-responsive">
					<thead>
						<tr>
							<th class="mdl-data-table__cell--non-numeric">Nombre</th>
							<th>Código</th>
							<th>Cantidad</th>
							<th>Precio</th>
							<th>Opciones</th>
						</tr>
					</thead>
					<tbody>
                        
						<tr v-for="listproducts in listProduct" v-bind:key="listproducts._id">
							<td class="mdl-data-table__cell--non-numeric">{{listproducts.nameProduct}}</td>
							<td>{{listproducts.barCodeProduct}}</td>
							<td>{{listproducts.unitsProduct}}</td>
							<td>{{listproducts.priceProduct}}</td>
							<td><button class="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect"><i class="zmdi zmdi-more"></i></button></td>
						</tr>
					</tbody>
				</table>
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

export default {
    components:{
        NavLateral,
        NavBar,
        NotificationArea
    },
    data(){
        return{
            listProduct:[]
        }
    },
    created(){
        (async ()=>{this.listProduct = await api.getProductsAsync()})()
    }
}
</script>