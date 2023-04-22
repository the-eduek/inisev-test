<script>
import PageComponent from "../components/PageComponent.vue";
import { useEmailStore } from "../store/emailStore";

export default {
  components: {
    PageComponent
  },
  data() {
    return {
      emailStore: useEmailStore()
    }
  }
};
</script>

<template>
  <section class="page">
    <PageComponent
      title="Archive"
      :mails="emailStore.archivedMails"
    />
  </section>  
</template>