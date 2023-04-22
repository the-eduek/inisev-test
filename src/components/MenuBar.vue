<script>
import { useEmailStore } from "../store/emailStore";

export default {
  data() {
    return {
      showMenu: false,
      emailStore: useEmailStore()
    }
  }
};
</script>

<template>
  <section class="menu">
    <ul class="menu__options">
      <li>
        <router-link :to="{ name: 'inbox' }">Inbox ({{ emailStore.inboxMails.length }})</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'archive' }">Archive ({{ emailStore.archivedMails.length }})</router-link>
      </li>

      <li><a href="#">Logout</a></li>
    </ul>
  </section>
</template>

<style lang="scss" scoped>
.menu {
  width: 100%;
  z-index: 100;

  &__options{
    background-color: #373636;
    display: flex;
    height: 100%;
    flex-direction: column; 
    padding: 2rem;
    width: 100%;

    li {
      background-color: #fff;
      border-radius: 0.5rem;
      display: flex;
      font-size: 1.125rem;
      margin: 0 0 1rem;
      
      a {
        color: inherit;
        font-weight: 500;
        padding: 0.625rem 1rem;
        text-decoration: inherit;
        width: 100%;
      }

      a:hover {
        color: #535bf2;
      }

      &:last-of-type {
        margin: auto 0 0;
      }
    }
  }
}

@media (min-width: 768px) {
  .menu {
    max-width: 31.25rem;
    width:  40%;
  }
}

@media (min-width: 1024px) {
  .menu {
    width: 35%;
  }
}
</style>