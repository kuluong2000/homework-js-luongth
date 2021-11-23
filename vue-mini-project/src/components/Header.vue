<template>
    <container>
        <template v-slot:header>
            <div class="header-title">
                <h1>local storage</h1>
            </div>
        </template>
    </container>
</template>
<script>
import Container from './Container.vue'
export default {
  components: { Container },
    name:"Header"
}
</script>
<style >
    .header{
        padding: 10px;
    background-color: black;
    
}
    .header-title h1{
        width: max-content;
        margin: 0 auto;
        font-size: 38px;
        color: white;
        text-shadow: 0px 10px rgb(216,213,213) ;
       

    }
</style>