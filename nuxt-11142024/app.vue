<script setup lang="ts">
import { ref } from 'vue'

</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
    <div class="container mx-auto p-10 w-full flex items-center justify-center flex-col">
      <h1 class="font-bold text-3xl text-center" >Hello world</h1>
      <button class=" px-4 py-2 border font-bold rounded bg-green-300 hover:bg-green-500">Submit</button>
    </div>
  </div>
</template>

<style scoped>
*{
/*  outline: 1px solid black;*/
}
</style>
