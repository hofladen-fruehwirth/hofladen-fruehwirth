<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { images } from '@/assets/images'

const router = useRouter()
const menuOpen = ref(false)

function toggleMenu() {
  menuOpen.value = !menuOpen.value
}
</script>

<template>
  <header class="header">
    <div class="container header-inner">
      <button class="logo" @click="router.push('/')">
        <img :src="images.logo" alt="Hofladen Logo" />
        <span class="logo-text">Hofladen</span>
      </button>

      <button class="menu-toggle" @click="toggleMenu" aria-label="Menü">
        <span class="menu-bar"></span>
        <span class="menu-bar"></span>
        <span class="menu-bar"></span>
      </button>

      <nav :class="['nav', { 'nav--open': menuOpen }]">
        <router-link to="/" class="nav-link" @click="menuOpen = false">Start</router-link>
        <router-link to="/products" class="nav-link" @click="menuOpen = false">Produkte</router-link>
        <router-link to="/about" class="nav-link" @click="menuOpen = false">Über uns</router-link>
        <router-link to="/contact" class="nav-link" @click="menuOpen = false">Kontakt</router-link>
        <router-link to="/admin" class="nav-link nav-link--icon" @click="menuOpen = false" title="Admin">
          <img :src="images.gearIcon" alt="Admin" class="gear-icon" />
        </router-link>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.header {
  background: #2d3436;
  color: #fff;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  background: none;
  border: none;
  cursor: pointer;
  color: #fff;
  font-size: 1.25rem;
  font-weight: 700;
}

.logo img {
  height: 40px;
  width: auto;
}

.menu-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
}

.menu-bar {
  width: 24px;
  height: 2px;
  background: #fff;
  border-radius: 2px;
}

.nav {
  display: flex;
  gap: 8px;
}

.nav-link {
  color: #dfe6e9;
  text-decoration: none;
  padding: 8px 16px;
  border-radius: 6px;
  font-weight: 500;
  transition: background 0.2s, color 0.2s;
}

.nav-link:hover,
.nav-link.router-link-active {
  background: #7c9128;
  color: #fff;
}

.nav-link--icon {
  padding: 8px;
  margin-left: 4px;
}

.gear-icon {
  width: 20px;
  height: 20px;
  display: block;
  filter: invert(0.8);
}

.nav-link--icon:hover .gear-icon {
  filter: invert(1);
}

@media (max-width: 768px) {
  .menu-toggle {
    display: flex;
  }

  .nav {
    display: none;
    position: absolute;
    top: 64px;
    left: 0;
    right: 0;
    background: #2d3436;
    flex-direction: column;
    padding: 12px;
    gap: 4px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }

  .nav--open {
    display: flex;
  }
}
</style>
