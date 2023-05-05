import { defineStore } from "pinia";

export const useEmailStore = defineStore('emails', {
  state: () => ({  
    allMails: [
      {
        title: "Your 7-Figure Plan Ends at Midnight!",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quod veritatis dicta vitae consequatur enim magnam quam commodi excepturi nisi amet perspiciatis animi voluptatum tenetur, quos dolorem. Expedita, debitis temporibus.",
        archived: false,
        read: false,
        selected: false
      },
      {
        title: "[Weekend Only Deals] Open now to get 5% Off",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quod veritatis dicta vitae consequatur enim magnam quam commodi excepturi nisi amet perspiciatis animi voluptatum tenetur, quos dolorem. Expedita, debitis temporibus.",
        archived: false,
        read: true,
        selected: false
      },
      {
        title: "Your Apple Music Subscription is expiring",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quod veritatis dicta vitae consequatur enim magnam quam commodi excepturi nisi amet perspiciatis animi voluptatum tenetur, quos dolorem. Expedita, debitis temporibus.",
        archived: false,
        read: false,
        selected: false
      },
      {
        title: "You've been invited! Hurry now",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quod veritatis dicta vitae consequatur enim magnam quam commodi excepturi nisi amet perspiciatis animi voluptatum tenetur, quos dolorem. Expedita, debitis temporibus.",
        archived: true,
        read: false,
        selected: false
      },
    ]
  }),
  getters: {
    inboxMails(state) {
      return state.allMails.filter(mail => mail.archived === false);
    },
    archivedMails(state) {
      return state.allMails.filter(mail => mail.archived === true);
    }
  }
})