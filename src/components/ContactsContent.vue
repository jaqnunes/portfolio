<template>
  <div class="my-info">
    <v-divider />
    <v-row class="contacts">
      <v-col
        v-for="contact in contacts"
        :key="contact.name"
        cols="auto"
      >
        <v-card
          class="mx-auto"
          style="padding: 15px"
          width="280"
          color="#262628"
        >
          <v-card-item class="contact-icons">
            <v-icon :icon="'fa' + contact.icon" />
          </v-card-item>
          <v-card-title>
            {{ contact.name }}
          </v-card-title>
          <v-card-actions>
           <v-btn>
            Contact me
            <v-icon icon="fas fa-arrow-right" />
           </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <PageFooter/>
  </div>
</template>
  
<script>
import PageFooter from './PageFooter.vue';
export default {
  name: 'ContactsContent',
  components: {
    PageFooter,
  },
  data() {
    return {
      contacts: [
        { 
          name: 'WhatsApp Business',
          value: '(00) 00000-0000',
          icon: 'b fa-whatsapp fa-5x',
        },
        { 
          name: 'LinkedIn',
          value: 'https://www.linkedin.com/in/jaqnunes/',
          icon: 'b fa-linkedin fa-5x',
        },
        { 
          name: 'GitHub',
          value: 'https://github.com/jaqnunes',
          icon: 'b fa-github fa-5x',
        },
        { 
          name: 'Email',
          value: 'Jackelynenunes@outlook.com',
          icon: 'r fa-envelope fa-5x',
        },
      ]
    }
  }
};
</script>

<style>
.my-info {
  background-color: #151314;
}
.contacts {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
}
.contact-icons {
  display: flex;
  justify-content: center;
}
.v-card-title {
  margin: 1.5% 0;
}
</style>