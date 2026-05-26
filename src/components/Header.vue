<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { images } from '@/assets/images'

const router = useRouter()
const menuOpen = ref(false)
const isDark = ref(false)

function toggleTheme() {
  isDark.value = !isDark.value
  if (isDark.value) {
    document.documentElement.setAttribute('data-theme', 'dark')
    localStorage.setItem('theme', 'dark')
  } else {
    document.documentElement.removeAttribute('data-theme')
    localStorage.setItem('theme', 'light')
  }
}

function toggleMenu() {
  menuOpen.value = !menuOpen.value
}
</script>

<template>
  <header class="header">
    <div class="container header-inner">
      <button class="logo" @click="router.push('/')">
        <img :src="images.logo" alt="Hofladen Logo" />
      </button>

      <div class="header-right">
        <button class="theme-toggle theme-toggle--mobile" @click="toggleTheme" :title="isDark ? 'Helles Design' : 'Dunkles Design'">
          <svg v-if="isDark" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
            <circle cx="12" cy="12" r="5"/>
            <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
          </svg>
          <svg v-else viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
          </svg>
        </button>

        <button class="menu-toggle" @click="toggleMenu" aria-label="Menü">
          <span class="menu-bar"></span>
          <span class="menu-bar"></span>
          <span class="menu-bar"></span>
        </button>
      </div>

      <nav :class="['nav', { 'nav--open': menuOpen }]">
        <router-link to="/" class="nav-link" @click="menuOpen = false">Start</router-link>
        <router-link to="/products" class="nav-link" @click="menuOpen = false">Produkte</router-link>
        <router-link to="/about" class="nav-link" @click="menuOpen = false">Über uns</router-link>
        <router-link to="/contact" class="nav-link" @click="menuOpen = false">Kontakt</router-link>
        <button class="theme-toggle theme-toggle--desktop" @click="toggleTheme" :title="isDark ? 'Helles Design' : 'Dunkles Design'">
          <svg v-if="isDark" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
            <circle cx="12" cy="12" r="5"/>
            <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
          </svg>
          <svg v-else viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
          </svg>
        </button>
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

[data-theme="dark"] .header {
  background: #1a1a1a;
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 91px;
}

.logo {
  display: flex;
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  color: #fff;
  font-size: 1.25rem;
  font-weight: 700;
}

.logo img {
  height: 84px;
  width: auto;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 8px;
}

.theme-toggle {
  background: none;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 6px;
  color: #dfe6e9;
  cursor: pointer;
  padding: 6px;
  display: flex;
  align-items: center;
  transition: border-color 0.2s, color 0.2s;
}

.theme-toggle:hover {
  border-color: #7c9128;
  color: #b5cc3a;
}

.theme-toggle--desktop {
  display: none;
}

.theme-toggle--mobile {
  display: flex;
}

.menu-toggle {
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  align-items: center;
  gap: 8px;
}

.nav-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
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

@media (min-width: 769px) {
  .theme-toggle--desktop {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 6px;
    padding: 8px;
    color: #dfe6e9;
  }

  .theme-toggle--desktop:hover {
    background: #7c9128;
    color: #fff;
    border: none;
  }

  .theme-toggle--mobile {
    display: none;
  }
}

@media (max-width: 768px) {
  .menu-toggle {
    display: flex;
  }

  .header-inner {
    flex-wrap: wrap;
  }

  .nav {
    display: none;
    position: absolute;
    top: 91px;
    left: 0;
    right: 0;
    background: #2d3436;
    flex-direction: column;
    padding: 12px;
    gap: 4px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }

  [data-theme="dark"] .nav {
    background: #1a1a1a;
  }

  .nav--open {
    display: flex;
  }
}
</style>