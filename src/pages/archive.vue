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
  <section>
    <PageComponent
      title="Archive"
      :mails="emailStore.archivedMails"
    />
  </section>  
</template>