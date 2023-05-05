<script>
import { useEmailStore } from "../store/emailStore";
import MailModal from "../components/MailModal.vue";
import PageComponent from "../components/PageComponent.vue";

export default {
  components: {
    MailModal,
    PageComponent
  },
  data() {
    return {
      mailItem: {},
      mailModalShown: false,
      emailStore: useEmailStore()
    }
  },
  methods: {
    toggleMailModal(mail) {
      this.mailItem = mail;
      this.mailModalShown = !this.mailModalShown;
    },
  }
};
</script>

<template>
  <section class="page">
    <PageComponent
      title="Archive"
      :mails="emailStore.archivedMails"
      @openEvent="toggleMailModal"
    />

    <MailModal
      v-if="mailModalShown"
      :mail="mailItem"
      @closeEvent="toggleMailModal"
    />
  </section>  
</template>