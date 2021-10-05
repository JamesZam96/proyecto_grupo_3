<template>
    <div>
        <!-- Notifications area -->
        <app-notification></app-notification>
        <!-- navBar -->
        <app-navbar></app-navbar>
        <!-- navLateral -->
        <app-navlateral></app-navlateral>
        <!-- pageContent -->
        <section class="full-width pageContent" style="height: 1700px">
            <!-- ESTADÍSTICAS E INFORME DE INVENTARIO -->
            <section class="full-width text-center" style="padding: 40px 0;">
                <h3 class="text-center tittles">ESTADÍSTICAS E INFORME DE INVENTARIO</h3>
            </section>
            <!-- Valoración del inventario actual -->
            <section class="full-width text-center" style="padding: 10px 0;">
                <h4 class="text-center tittles">Valoración del inventario actual</h4>
                <!-- Tiles -->
                <article class="full-width tile" style="margin: 10px;">
                    <div class="tile-text">
                        <span class="text-condensedLight">
                            <!-- 2<br> -->
                            <small>Potencial de ganancia</small>
                            <h5 style="font-weight:bold;">$ 1.485.600</h5>
                        </span>
                    </div>
                    <i class="zmdi zmdi-account tile-icon"></i>
                </article>
                <article class="full-width tile" style="margin: 10px;">
                    <div class="tile-text">
                        <span class="text-condensedLight">
                            <!-- 71<br> -->
                            <small>Valor total comercial</small>
                            <h5 style="font-weight:bold;">$ 12.380.000</h5>
                        </span>
                    </div>
                    <i class="zmdi zmdi-accounts tile-icon"></i>
                </article>
                <article class="full-width tile" style="margin: 10px;">
                    <div class="tile-text">
                        <span class="text-condensedLight">
                            <!-- 7<br> -->
                            <small>Valor total de venta</small>
                            <h5 style="font-weight:bold;">$ 13.865.600</h5>
                        </span>
                    </div>
                    <i class="zmdi zmdi-truck tile-icon"></i>
                </article>
            </section>
            <!-- Productos con mayor rotación -->
            <section class="full-width text-center" style="margin: 10px 0;">
                <h4 class="text-center tittles">Productos con mayor rotación</h4>
                <!-- Tiles -->
                <button class="button button1" style="margin: 10px 30px">Última semana</button>
                <button class="button button2" style="margin: 10px 30px">Último mes</button>
                <button class="button button3" style="margin: 10px 30px">Último semestre</button>
                <button class="button button4" style="margin: 10px 30px">Último año</button>
                <div class="container">
                    <div class="row">
                        <!-- Pie Chart -->
                        <div class="col col-lg-6"><GoogleChart /></div>
                        <!-- Table product information -->
                        <div class="col align-self-center"><TableTurnover /></div>
                    </div>
                </div>
            </section>
            <!-- Alarmas de inventario: cantidad mínima y fechas de vencimiento -->
            <section class="full-width text-center" style="padding: 5px 0;">
                <h4 class="text-center tittles">Alarmas de inventario: cantidad mínima y fechas de vencimiento</h4>
                <div class="container" style="margin: 20px 0;">
                    <div class="row">
                        <!-- Tabla: Productos con cantidad mínima-->
                        <div class="col d-flex justify-content-center">
                            <TableMinQuantity />
                        </div>
                        <!-- Tabla: Productos próximos a vencer-->
                        <div class="col d-flex justify-content-center">
                            <TableDueDate />
                        </div>
                    </div>
                </div>
            </section>
            <!-- Inventario disponible -->
            <section class="full-width text-center" style="padding: 50px 80px;">
                <h4 class="text-center tittles">Inventatio disponible</h4>
                <div><TableInventory /></div>
            </section>


        </section>
    </div>
</template>

<script>
import AppNotification from '@/components/AppNotification.vue';
import AppNavbar from '@/components/AppNavbar.vue';
import AppNavlateral from '@/components/AppNavlateral.vue';
import GoogleChart from '../components/GoogleChart.vue'
import TableInventory from '../components/TableInventory.vue'
import TableTurnover from '../components/TableTurnover.vue'
import TableMinQuantity from '../components/TableMinQuantity.vue'
import TableDueDate from '../components/TableDueDate.vue'

export default{
    name: 'inventory',
    components: {
        AppNotification,AppNavbar,AppNavlateral,GoogleChart,TableInventory,
        TableTurnover, TableMinQuantity, TableDueDate
    }
}
</script>