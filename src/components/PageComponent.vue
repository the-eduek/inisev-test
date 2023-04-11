<script>
import MailModal from './MailModal.vue';

export default {
  components: {
    MailModal
  },
  props: {
    title: String,
    mails: Array
  }
};
</script>

<template>
  <section class="page">
    <header>
      <h1 class="page__title">{{ title }}</h1>
      <h2 class="page__subtitle">Emails selected (0)</h2>
    </header>
    
    <div class="page__options">
      <input type="checkbox" name="" id="">
      <button class="btn">Mark as read (r)</button>
      <button class="btn">Archive (a)</button>
    </div>

    <ul class="page__content">
      <li class="mail" v-for="(mail, index) in mails" :key="index">
        <input type="checkbox" name="" id="">
        <p class="mail__title">{{ mail.title }}</p>
      </li>

      <!-- <MailModal /> -->
    </ul>
  </section>
</template>

<style lang="scss" scoped>
.page {
  padding: 5%;

  &__title {
    font-size: 1.75rem;
    font-weight: 500;
    text-transform: capitalize;
  }

  &__subtitle {
    font-size: 2rem;
    font-weight: 700;
    padding: 1rem 0 0;
  }

  &__options {
    padding: 2rem 0;

    .btn {
      border: 1px solid #ddd;
      background-color: #f9f9f9;
      outline: none;
      margin: 0 0 0 1.5rem;
    }
  }

  &__content {
    .mail {
      background-color: #f9f9f9;
      border: 1px solid #ddd;
      border-radius: 0.5rem;
      display: flex;
      margin: 0 0 1rem;
      padding: 1.5rem;

      &__title {
        padding: 0 0 0 1.5rem;
      }
    }
  }
}
</style>
