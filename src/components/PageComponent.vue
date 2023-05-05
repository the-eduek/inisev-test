<script>
import MailModal from './MailModal.vue';

export default {
  components: {
    MailModal
  },
  emits: [ 'openEvent' ],
  props: {
    title: {
      type: String,
      required: true
    },
    mails: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      selectAll: false
    }
  },
  methods: {
    openMailModal(mail) {
      this.$emit("openEvent", mail);
    },
    selectAllMails() {
      if (this.selectAll) {
        this.mails.forEach(mail => {
          mail.selected = true;
        });
      } else {
        this.mails.forEach(mail => {
          mail.selected = false;
        });
      };
    },
    markAsRead() {
      this.selectedMailList.forEach(mail => {
        mail.read = true;
        mail.selected = false;
      });
    },
    archiveMail() {
      this.selectedMailList.forEach(mail => {
        mail.archived = true;
        mail.selected = false;
      });
    },
    shortcutAction(e, key, action) {
      if ((e.key.toLowerCase() === key.toLowerCase()) && (this.selectedMailList.length > 0)) action();
    },
  },
  computed: {
    selectedMailList() {
      return this.mails.filter(mail => mail.selected)
    },
  },
  mounted() {
    this.mails.forEach(mail => {
      mail.isActive = false;
    });
    window.addEventListener("keydown", (e) => {
      this.shortcutAction(e, 'r', this.markAsRead);
    });
    window.addEventListener("keydown", (e) => {
      this.shortcutAction(e, 'a', this.archiveMail);
    });
  },
  beforeUnmount() {
    window.removeEventListener("keydown", (e) => {
      this.shortcutAction(e, 'r', this.markAsRead);
    });
    window.removeEventListener("keydown", (e) => {
      this.shortcutAction(e, 'a', this.archiveMail);
    });
  },
  watch: {
    selectedMailList(newVal) {
      if (newVal.length === this.mails.length) this.selectAll = true;
      else this.selectAll = false;
    }
  }
};
</script>

<template>
  <section class="page">
    <header>
      <h1 class="page__title">{{ title }}</h1>
      <h2 class="page__subtitle">Emails selected ({{ selectedMailList.length }})</h2>
    </header>
    
    <div class="page__options">
      <div class="checkbox">
        <input
          type="checkbox"
          v-model="selectAll"
          @change="selectAllMails"
        >
        <span class="checkmark"></span>
      </div>
      <button class="btn" @click="markAsRead">Mark as read (r)</button>
      <button class="btn" @click="archiveMail">Archive (a)</button>
    </div>

    <ul class="page__content">
      <li :class="['mail', mail.read ? 'mail--read' : '' ]" v-for="(mail, index) in mails" :key="index">
        <div class="checkbox">
          <input
            type="checkbox"
            v-model="mail.selected"
          >
          <span class="checkmark"></span>
        </div>
        <p class="mail__title" @click="openMailModal(mail)">{{ mail.title }}</p>
      </li>
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
    align-items: center;
    display: flex;
    padding: 2rem 0;

    .btn {
      margin: 0 0 0 1.5rem;
    }
  }

  &__content {
    .mail {
      align-items: center;
      background-color: #f9f9f9;
      border: 1px solid #ddd;
      border-radius: 0.5rem;
      display: flex;
      margin: 0 0 1rem;
      padding: 1.5rem;

      &__title {
        cursor: pointer;
        font-size: 1.125rem;
        padding: 0 0 0 1.5rem;
      }

      &--read {
        .checkbox {
          opacity: 0.5;
        }

        .mail {
          background-color: rgba($color: #f9f9f9, $alpha: 0.5);

          &__title {
            opacity: 0.5;
          }
        }
      }
    }
  }

  .checkbox {
    height: 1rem;
    position: relative;
    width: 1rem;

    input[type="checkbox"] {
      height: 100%;
      opacity: 0;
      width: 100%;

      &:checked ~ .checkmark {
        background-color: #646cff;
        border: 1px solid #646cff;

        &::before{
          display: block;
        }
      }

      &:focus-visible ~ .checkmark {
        border: 1px solid #646cff;
      }
    }

    .checkmark {
      background-color: #fff;
      border: 1px solid #ddd;
      border-radius: 0.125rem;
      height: 100%;
      left: 0;
      pointer-events: none;
      position: absolute;
      top: 0;
      width: 100%;

      &::before {
        content: "";
        position: absolute;
        display: none;
        left: 0.25rem;
        width: calc(50% - 3px);
        height: calc(90% - 3px);
        border: solid white;
        border-width: 0 3px 3px 0;
        top: -1px;
        transform: rotate(40deg);
      }
    }
  }
}
</style>
