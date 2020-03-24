<template>
  <div class="bg-gray-100 flex h-screen items-center justify-center w-full">
    <div class="w-full max-w-xs">
      <div class="bg-white mb-2 p-4 shadow">
        <h1 class="mb-4 text-2xl text-center">Login</h1>
        <form>
          <div class="flex flex-col mb-4">
            <label class="cursor-pointer font-bold mb-1" for="name">Username</label>
            <input v-model="name" id="name" class="border border-solid px-2 py-1 rounded w-full" type="text" />
          </div>
          <div class="flex flex-col mb-4">
            <label class="cursor-pointer font-bold mb-1" for="password">Password</label>
            <input v-model="password" id="password" class="border border-solid px-2 py-1 rounded w-full" type="password" />
          </div>
          <div class="flex justify-center mb-2">
            <button @click.prevent="login({ name, password })" class="bg-indigo-700 leading-none rounded mx-2 px-4 py-2 text-white">Masuk</button>
            <router-link class="bg-indigo-700 leading-none rounded mx-2 px-4 py-2 text-white" to='/apply'>Apply</router-link>
          </div>
        </form>
      </div>
      <p class="text-center text-sm text-gray-500">&copy;2020 - HRD Kayaknya</p>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex' // mapMutations,
export default {
  data: () => ({
    error: '',
    name: 'admin',
    password: 'admin',
  }),
  methods: {
    ...mapActions({
      login: 'user/login',
    }),
  }
}
</script>