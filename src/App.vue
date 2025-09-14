<template>
  <LoadingScreen v-if="isLoading" :percent="loadingPercent" />
  <div v-else class="app">
    <nav class="navbar">
      <div class="nav-container">
        <div class="nav-brand">
          <span class="nav-name">{{ profileData?.name || 'Portfolio' }}</span>
        </div>
        <div class="nav-links">
          <a href="#about" class="nav-link">About</a>
          <a href="#projects" class="nav-link">Projects</a>
          <a href="#skills" class="nav-link">Skills</a>
          <a href="#experience" class="nav-link">Experience</a>
          <a href="#contact" class="nav-link">Contact</a>
        </div>
      </div>
    </nav>
    <Home />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Home from '@/pages/Home.vue';
import LoadingScreen from '@/components/LoadingScreen.vue';

const isLoading = ref(true);
const loadingPercent = ref(0);
const profileData = ref(null);

onMounted(async () => {
  // Load profile data
  try {
    const base = import.meta.env.BASE_URL || '/';
    const response = await fetch(`${base}data/profile.json`);
    profileData.value = await response.json();
  } catch (error) {
    console.error('Failed to load profile:', error);
  }

  // Simulate loading all data files
  const base = import.meta.env.BASE_URL || '/';
  const dataFiles = [
    `${base}data/skills.json`,
    `${base}data/projects.json`,
    `${base}data/experience.json`,
    `${base}data/languages.json`,
  ];

  for (let i = 0; i < dataFiles.length; i++) {
    try {
      await fetch(dataFiles[i]);
      loadingPercent.value = Math.round(((i + 1) / dataFiles.length) * 100);
      // Add small delay for visual effect
      await new Promise((resolve) => setTimeout(resolve, 300));
    } catch (error) {
      console.error('Failed to load:', dataFiles[i]);
    }
  }

  isLoading.value = false;
});
</script>

<style>
/* Global Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --primary-color: #6366f1;
  --primary-dark: #4f46e5;
  --secondary-color: #10b981;
  --accent-color: #f59e0b;
  --dark-bg: #0f172a;
  --darker-bg: #020617;
  --card-bg: #1e293b;
  --text-primary: #f8fafc;
  --text-secondary: #cbd5e1;
  --text-muted: #64748b;
  --border-color: #334155;
  --shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

body {
  font-family:
    'Inter',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    sans-serif;
  background: linear-gradient(135deg, var(--dark-bg) 0%, var(--darker-bg) 100%);
  color: var(--text-primary);
  line-height: 1.6;
  overflow-x: hidden;
}

.app {
  min-height: 100vh;
}

/* Navigation */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(15, 23, 42, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--border-color);
  z-index: 1000;
  transition: all 0.3s ease;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
}

.nav-brand {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.nav-logo {
  width: 40px;
  height: 40px;
  filter: brightness(0) invert(1);
}

.nav-name {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-primary);
}

.nav-links {
  display: flex;
  gap: 2rem;
}

.nav-link {
  color: var(--text-secondary);
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  position: relative;
}

.nav-link:hover {
  color: var(--primary-color);
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--primary-color);
  transition: width 0.3s ease;
}

.nav-link:hover::after {
  width: 100%;
}

/* Scroll Animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.fade-in-up {
  animation: fadeInUp 0.6s ease-out forwards;
}

.slide-in-left {
  animation: slideInLeft 0.6s ease-out forwards;
}

.slide-in-right {
  animation: slideInRight 0.6s ease-out forwards;
}

/* Responsive Design */
@media (max-width: 576px) {
  .nav-container {
    padding: 0 1rem;
    height: 60px;
  }

  .nav-links {
    display: none;
  }

  .nav-name {
    font-size: 1rem;
  }

  .nav-logo {
    width: 32px;
    height: 32px;
  }
}

@media (min-width: 577px) and (max-width: 768px) {
  .nav-container {
    padding: 0 1.5rem;
  }

  .nav-links {
    gap: 1.5rem;
  }

  .nav-link {
    font-size: 0.9rem;
  }

  .nav-name {
    font-size: 1.1rem;
  }
}

@media (min-width: 769px) and (max-width: 992px) {
  .nav-container {
    max-width: 900px;
    padding: 0 2rem;
  }

  .nav-links {
    gap: 2rem;
  }

  .nav-name {
    font-size: 1.25rem;
  }
}

@media (min-width: 993px) and (max-width: 1200px) {
  .nav-container {
    max-width: 1100px;
    padding: 0 2.5rem;
  }

  .nav-links {
    gap: 2.5rem;
  }

  .nav-name {
    font-size: 1.3rem;
  }

  .nav-logo {
    width: 45px;
    height: 45px;
  }
}

@media (min-width: 1201px) and (max-width: 1400px) {
  .nav-container {
    max-width: 1300px;
    padding: 0 3rem;
    height: 75px;
  }

  .nav-links {
    gap: 3rem;
  }

  .nav-name {
    font-size: 1.4rem;
  }

  .nav-logo {
    width: 48px;
    height: 48px;
  }

  .nav-link {
    font-size: 1.1rem;
  }
}

@media (min-width: 1401px) {
  .nav-container {
    max-width: 1500px;
    padding: 0 4rem;
    height: 80px;
  }

  .nav-links {
    gap: 3.5rem;
  }

  .nav-name {
    font-size: 1.5rem;
  }

  .nav-logo {
    width: 52px;
    height: 52px;
  }

  .nav-link {
    font-size: 1.15rem;
  }
}
</style>
