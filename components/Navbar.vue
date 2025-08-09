<script setup lang="ts">
import { useDisplay } from 'vuetify';

const {smAndUp} = useDisplay()

const links = [
  { text: 'Home', to: '/' },
  { text: 'About', to: '/about' },
  { text: 'Skills', to: '/skills' },
  { text: 'Projects', to: '/projects' },
  { text: 'Experience', to: '/experience' },
]
</script>

<template>
  <v-app-bar class="px-4" :elevation="0" rounded>
  <template v-slot:prepend>
    <v-app-bar-nav-icon v-if="!smAndUp"></v-app-bar-nav-icon>
  </template>

  <!-- Logo on the left -->
  <div class="logo-container d-flex align-center" @click="$router.push('/')">
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
    >
      {{ link.text }}
    </v-btn>
  </div>

  <!-- Spacer to push contact button to the right -->
  <v-spacer />
  <v-spacer />

  <!-- CTA Button on the right -->
  <v-btn v-if="smAndUp" color="brand"  rounded="lg" variant="elevated" to="/contact">
    Contact
  </v-btn>
  
</v-app-bar>
</template>

<style scoped>

/* Logo styling */
.logo-container {

  cursor: pointer;
}

.logo-image {
  border-radius: 50% !important;
  border: 2px solid var(--color-brand);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.logo-image:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 12px rgba(18, 53, 36, 0.3);
}

/* Navbar styling */
.v-app-bar {
  background-color: var(--color-card) !important;
  border-bottom: 1px solid var(--color-border);
}
</style>