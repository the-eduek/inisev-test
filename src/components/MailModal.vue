<script>
export default {
  emits: [ 'closeEvent' ],
  props: {
    mail: {
      type: Object,
      required: true
    }
  },
  methods: {
    closeMailModal() {
      this.$emit("closeEvent");
    },
    escCloseMailModal(e) {
      if ((e.key.toLowerCase() === 'escape')) this.closeMailModal();
    },
    markAsRead() {
      this.mail.read = true;
    },
    keyMarkAsRead(e) {
      if ((e.key.toLowerCase() === 'r')) this.markAsRead();
    },
    archiveMail() {
      this.mail.archived = true;
      this.closeMailModal();
    },
    keyArchiveMail(e) {
      if ((e.key.toLowerCase() === 'a')) this.archiveMail();  
    }
  },
  mounted() {
    window.addEventListener("keydown", this.escCloseMailModal);
    window.addEventListener("keydown", this.keyMarkAsRead);
    window.addEventListener("keydown", this.keyArchiveMail);
  },
  beforeUnmount() {
    window.removeEventListener("keydown", this.escCloseMailModal);
    window.removeEventListener("keydown", this.keyMarkAsRead);
    window.removeEventListener("keydown", this.keyArchiveMail);
  }
};
</script>

<template>
  <section class="email-view" @click.self="closeMailModal">
    <div class="email">
      <h1 class="email__title" @click="closeMailModal">Close (Esc)</h1>
    
      <div class="email__options">
        <button class="btn" @click="markAsRead">Mark as read (r)</button>
        <button class="btn" @click="archiveMail">Archive (a)</button>
      </div>

      <div class="email__content">
        <h3 class="mail__title">{{ mail.title }}</h3>
        <p>{{ mail.body }}</p>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.email-view {
  background: rgba(0, 0, 0, 0.15);
  display: flex;
  height: 100vh;
  justify-content: end;
  left: 0;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 10;

  .email {
    background: #fff;
    height: 100%;
    padding: 16rem 2rem 2rem;
    width: 75%;

    &__title {
      cursor: pointer;
      font-size: 1rem;
      text-decoration: underline;
      font-weight: 500;
    }

    &__options {
      padding: 0 0 1rem;

      .btn {
        margin: 1rem 0.625rem 0.25rem 0;
      }
    }

    &__content {
      .mail {
      &__title {
          font-size: 1.5rem;
          font-weight: 700;
          margin: 0 0 0.5rem;
        }
      }
    }   
  }
}

@media (min-width: 768px) {
  .email-view {
    .email {
      padding: 2.5rem;
      width: 50%;
    }
  }  
}
</style>
