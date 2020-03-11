<template>
  <transition name="modal-fade">
      <div class="modal-backdrop">
          <div class="modal lg:w-3/5">
              <header class="modal-header">
                  <slot class="w-4/5" name="header">
                      <div></div>
                  </slot><button type="button" @click="close">x</button>
              </header>
              <section class="modal-body">
                  <slot name="body">Isian modalnya</slot>
              </section>
              <footer class="modal-footer">
                  <slot name="footer">
                      <div></div>
                  </slot>
              </footer>
          </div>
      </div>
  </transition>
</template>
<script>
export default {
  name:'Modal',
  methods: {
    close() {
      this.$emit('close');
    },
  },
}
</script>

<style scoped>

  .modal-fade-enter,
  .modal-fade-leave-active {
    opacity: 0;
  }

  .modal-fade-enter-active,
  .modal-fade-leave-active {
    transition: opacity .5s ease
  }



  .modal-backdrop {
    position: fixed;
    z-index: 999;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
    background: #FFFFFF;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    @apply flex;
    @apply flex-col;
    @apply p-5;
    @apply rounded-lg;
  }

  .modal-header {
    @apply flex;
    @apply flex-row;
    @apply py-4;
  }

  .modal-footer {
    @apply flex;
    @apply flex-col;
    @apply py-4;
  }

  .modal-header {
    border-bottom: 1px solid #eeeeee;
    color: #4AAE9B;
    justify-content: space-between;
  }

  .modal-footer {
    border-top: 1px solid #eeeeee;
    justify-content: flex-end;
  }

  .modal-body {
    position: relative;
    @apply py-4;
  }


  .btn-green {
    color: white;
    background: #4AAE9B;
    border: 1px solid #4AAE9B;
    border-radius: 2px;
  }
</style>
