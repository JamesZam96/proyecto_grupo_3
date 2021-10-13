<template>
    <div>
		<nav-bar></nav-bar>
		<notification-area></notification-area>
        <nav-lateral></nav-lateral>
        

        <section class="full-width pageContent">
		<section class="full-width text-center" style="padding: 40px 0;">
			<h3 class="text-center tittles">BIENVENIDO</h3>
			<!-- Tiles -->
			<a href="/createuser">
			<article class="full-width tile">
				<div class="tile-text">
					<span class="text-condensedLight">
						<br>
						<!-- <a href="/createuser"><small>Crear usuario</small></a> -->
						<small>Crear usuario</small>
					</span>
				</div>
				<i class="zmdi zmdi-account tile-icon"></i>
			</article>
			</a>
			<a href="/registerclient">
			<article class="full-width tile">
				<div class="tile-text">
					<span class="text-condensedLight">
						<br>
						<small>Crear cliente</small>
					</span>
				</div>
				<i class="zmdi zmdi-accounts tile-icon"></i>
			</article>
			</a>
			<a href="/registerprovider">
			<article class="full-width tile">
				<div class="tile-text">
					<span class="text-condensedLight">
						<br>
						<small>Crear proveedor</small>
					</span>
				</div>
				<i class="zmdi zmdi-truck tile-icon"></i>
			</article>
			</a>
			<a href="/registerproduct">
			<article class="full-width tile">
				<div class="tile-text">
					<span class="text-condensedLight">
						<br>
						<small>Registrar producto</small>
					</span>
				</div>
				<i class="zmdi zmdi-washing-machine tile-icon"></i>
			</article>
			</a>
			<a href="/categories">
			<article class="full-width tile">
				<div class="tile-text">
					<span class="text-condensedLight">
						<br>
						<small>Registrar categoría</small>
					</span>
				</div>
				<i class="zmdi zmdi-label tile-icon"></i>
			</article>
			</a>
			<a href="/inventory">
			<article class="full-width tile">
				<div class="tile-text">
					<span class="text-condensedLight">
						<br>
						<small>Inventario</small>
					</span>
				</div>
				<i class="zmdi zmdi-store tile-icon"></i>
			</article>
			</a>
		</section>
		
	</section>
    </div>
</template>

<script>
import NavLateral from '@/components/NavLateral.vue'
import NavBar from '@/components/NavBar.vue'
import NotificationArea from '@/components/NotificationArea.vue'

export default {
    name: 'home',
    components:{
        NavLateral,
        NavBar,
        NotificationArea
    }
}
</script>

