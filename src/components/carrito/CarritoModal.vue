<template lang="html" v-show="showCart">
    <div class="min-w-screen h-screen animated fadeIn faster fixed left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover" v-show="showCart">
        <div class="absolute bg-black opacity-80 inset-0 z-0"></div>
         <div class="w-full max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg bg-white">
      <div class="">
        <div class="text-center p-5 flex-auto justify-center">
            <svg class="w16 h-16 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>  
        </div>
        <TablaCarrito :productos="cart" />
        <div class="p-3  mt-2 text-center space-x-4 md:block">
                <button @click="vaciarCarrito()" class="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100">
                Vaciar Carrito
            </button>
            <button @click="closeCarrito()" class="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100">
                Cancelar
            </button>
            <button @click="finalizarCompra()" class="mb-2 md:mb-0 bg-red-500 border border-red-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-red-600">Finalizar Compra</button>
        </div>
        <div v-if="alert">{{alert}}</div>
     </div>
    </div>
    </div>
</template>

<script lang="js">
import apiServices from '@/services/api.services'
  import { mapGetters, mapActions } from 'vuex'
  import TablaCarrito from './TablaCarrito.vue'

  export default  {
    name: 'carrito-modal',
      components: {
         TablaCarrito
    },
    props: {
      showCart: {
            type: Boolean,
            required: true
        },
        },
    mounted () {
    },
    data () {
      return {
          alert:""
      }
    },
    methods: {
         ...mapActions('cart', ['setCompra','setEmptyCart']),
        closeCarrito(){
                this.$emit('cerrar-carrito', false)
        },
         vaciarCarrito(){
                this.setEmptyCart();
        },
        finalizarCompra(){
            if (this.user) {
                var items=[this.cart]
                apiServices.guardarCompra(this.user.id,items);
                this.vaciarCarrito()
                this.closeCarrito();
           /*      this.$emit('finalizar-compra', this.cart) */
            }else{
                  this.alert="Debes iniciar sesion para finalizar la compra"
                    setTimeout(() => this.alert = '', 5000);
            }
               
        } 
    },
    computed: {
             ...mapGetters('user', ['user']),
            ...mapGetters('cart', ['cart']),
    }
}
</script>

<style scoped >

</style>