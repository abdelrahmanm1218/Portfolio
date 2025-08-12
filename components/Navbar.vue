<script setup lang="ts">
import { useDisplay } from 'vuetify';
import { ref } from 'vue';

const { smAndUp } = useDisplay()

const links = [
  { text: 'Home', to: '/' },
  { text: 'About', to: '/about' },
  { text: 'Skills', to: '/skills' },
  { text: 'Projects', to: '/projects' },
  { text: 'Experience', to: '/experience' },
]

const drawer = ref(false)
</script>

<template>

  <v-app-bar class="px-4" :elevation="1" rounded color="background">
  <template v-slot:append>
    <v-app-bar-nav-icon v-if="!smAndUp" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
  </template>

  <!-- Logo on the left -->
  <div class="logo-container d-flex align-center cursor-pointer" @click="$router.push('/')">
          <v-img
        src="/am-logo.png"
        alt="Logo"
        width="48"
        height="48"
        class="rounded-circle"
        cover
      />
  </div>

  <!-- Spacer to push navigation to center -->
  <v-spacer />
  <v-spacer/>

  <!-- Navigation Links - Centered -->
  <div v-if="smAndUp" class="d-flex">
    <v-btn
      v-for="link in links"
      :key="link.text"
      variant="text"
      rounded="lg"
      :to="link.to"
      style="color:var(--color-text)"
      class="nav-btn"
    >
      {{ link.text }}
    </v-btn>
  </div>

  <!-- Spacer to push contact button to the right -->
  <v-spacer />
  <v-spacer />

  <!-- CTA Button on the right -->
  <v-btn 
    v-if="smAndUp" 
    color="accent"  
    rounded="lg" 
    variant="elevated" 
    href="mailto:abdelrahmannali14@gmail.com"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Send email to abdelrahmannali14@gmail.com"
  >
    Contact
  </v-btn>
  
</v-app-bar>

  <v-navigation-drawer class="pa-2" v-model="drawer" :location="$vuetify.display.mobile? 'right': undefined" temporary>
    <v-list>
      <v-list-item v-for="link in links" class="drawer-link pa-2" :to="link.to">
        <v-list-item-title class="pa-0" style="color: var(--color-text);">{{ link.text }}</v-list-item-title>
      </v-list-item>

      

    </v-list>
    <v-btn 
        style="display: flex; align-items: center;"
        color="accent"  
        rounded="lg" 
        variant="elevated" 
        href="mailto:abdelrahmannali14@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Send email to abdelrahmannali14@gmail.com"
        density="comfortable"
        
      >
        Contact
      </v-btn>
  </v-navigation-drawer>
</template>

<style scoped>
/* Navbar styling */
.v-btn {
  transition: all 0.3s ease;
}
.nav-btn:hover {
  background-color: var(--color-brand-lighter);
}
.nav-btn.v-btn--active {
  background-color: var(--color-brand-light);
  
}
</style>