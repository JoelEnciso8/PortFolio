<script setup>
import { ref ,computed, watch} from "vue";
import Header from "./components/Header.vue";
import Button from "./components/Button.vue";
import { calcularTotalApagar } from "./helpers";

const cantidad = ref(0);
const meses = ref(0)
const MIN = 0
const total = ref(0);
const MAX = 20000
const STEP =178.96



// Metodo 
const formatearDinero = (valor)=>{
    const formatear = new Intl.NumberFormat('en-US',{
        style: 'currency',
        currency:'USD'
    });

    return formatear.format(valor)
};


//function  vue.js 

watch([cantidad, meses],()=>{
    total.value = calcularTotalApagar (cantidad.value, meses.value);
})


const pagoMensual = computed(()=>{
    return total.value / meses.value
});


const handleChangeDecremento = ()=>{
    const valor = cantidad.value - STEP;

    if (valor < MIN) {
        alert('Cantidad Ivalida');
        return;
    }
       
    cantidad.value = valor;

}



const handleChangeIncremento = ()=>{
    const valor = cantidad.value + STEP;

    if (valor > MAX) {
        alert('Cantidad Ivalida');
        return;
    }

    cantidad.value = valor;
}


</script>





<template>
    
    <div class="my-20 max-w-lg mx-auto bg-white shad p-10">
        <Header/>
        
        <div class="flex justify-between mt-10">
            <Button 
            :operador="'-'"
            @fn="handleChangeDecremento"
            /> 

            <Button 
            :operador="'+'"
            @fn="handleChangeIncremento"
            /> 


        </div>
        


        <div class="my-5">

            <input
             type="range"
             class=" w-full bg-gray-200 accent-lime-600 hover:accent-lime-700"
             :min=" MIN "
             :max=" MAX "
             :step="STEP "
            v-model.number="cantidad"

            />

            <p class="text-center my-10 text-5xl font-extrabold text-indigo-600">
                 {{ formatearDinero(cantidad) }}
            </p>

            <h2 class="text-2xl font-extrabold text-gray-500 text-center">

                ELige un <span class=" text-indigo-700 ">Plazo </span> a pagar 

            </h2>

            <select class="w-full p-2 bg border-gray-300 rounded-lg text-center text-xl font-bold text-gray-800 mt-5" 
            v-model.nu="meses"
            >

                <option value="0" disabled selected>Selecciona Meses de pago</option>
                <option value="6">6 Meses</option>
                <option value="12">12 Meses</option>
                <option value="16">16 Meses</option>
                <option value="22">22 Meses</option>
            </select>
        </div>

<div  v-if="total > 0" class= " my-5 space-y-3 bg-gray-50 p-5">
    <h2 class="text-2xl font-extrabold text-gray-500 text-center">
        Resumen <span class="text-indigo-600">de pagos</span>
    </h2>

    <p class="text-xl text-gray-500 font-bold"> {{meses}} Meses </p>
    <p class="text-xl text-gray-800 font-bold"> Total a Pagar: {{ formatearDinero(total) }}</p>
    <p class="text-xl text-gray-500 font-bold">Mensuales: {{formatearDinero(pagoMensual)}}  </p>

</div>

    <p v-else class="text-center">selecciona el plazo a pagar.</p>

</div>
</template>