<template>
  <div class="languages-container">
    <div v-if="languages.length" class="languages-grid">
      <div
        v-for="(lang, index) in languages"
        :key="lang.name"
        class="language-card"
        :style="{ animationDelay: `${index * 0.1}s` }"
      >
        <div class="language-circle">
          <svg class="progress-ring" width="120" height="120">
            <circle
              class="progress-ring-circle-bg"
              cx="60"
              cy="60"
              r="50"
              stroke-width="8"
              fill="transparent"
            />
            <circle
              class="progress-ring-circle"
              cx="60"
              cy="60"
              r="50"
              stroke-width="8"
              fill="transparent"
              stroke="blue"
              :stroke-dasharray="2 * Math.PI * 50"
              :stroke-dashoffset="2 * Math.PI * 50 * (1 - lang.rating / 100)"
            />
          </svg>
          <div class="language-content">
            <div class="language-name">{{ lang.name }}</div>
            <div class="language-percentage">{{ lang.rating }}%</div>
          </div>
        </div>
      </div>
    </div>

    <div v-else class="loading-container">
      <div class="loading-spinner"></div>
      <p>Loading languages...</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Languages',
  data() {
    return {
      languages: [],
    };
  },
  mounted() {
    const base = import.meta.env.BASE_URL || '/';

    fetch(`${base}data/languages.json`)
      .then((res) => res.json())
      .then((data) => {
        console.log('Fetched languages data:', data); // Debugging fetched data
        this.languages = data;
      })
      .catch((error) => {
        console.error('Failed to load languages:', error);
      });
  },
};
</script>

<style scoped>
.languages-container {
  max-width: 1140px;
  margin: 0 auto;
  width: 100%;
}

.languages-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 2rem;
  justify-items: center;
}

.language-card {
  opacity: 0;
  animation: fadeInUp 0.6s ease-out forwards;
}

.language-circle {
  position: relative;
  width: 120px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.progress-ring {
  position: absolute;
  transform: rotate(-90deg);
}

.progress-ring-circle-bg {
  stroke: var(--border-color);
}

.progress-ring-circle {
  stroke: url(#gradient);
  stroke-linecap: round;
  transition: stroke-dashoffset 1.5s ease-out;
}

.language-content {
  position: relative;
  z-index: 2;
  text-align: center;
}

.language-name {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.25rem;
}

.language-percentage {
  font-size: 0.9rem;
  color: var(--text-secondary);
  font-weight: 500;
}

.loading-container {
  text-align: center;
  padding: 3rem;
}

.loading-spinner {
  width: 40px;
  height: 40px;
  border: 4px solid var(--border-color);
  border-top: 4px solid var(--primary-color);
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto 1rem;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 0.6;
    transform: translateY(0);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* Gradient definition for progress ring */
.language-card::before {
  content: '';
  position: absolute;
  width: 0;
  height: 0;
  visibility: hidden;
}

.language-card svg {
  filter: drop-shadow(0 4px 8px rgba(99, 102, 241, 0.3));
}

/* Add gradient definition */
.progress-ring defs {
  display: none;
}

.progress-ring-circle {
  stroke: var(--primary-color);
}

@media (min-width: 1200px) {
  .languages-container {
    max-width: 90%;
  }
}

@media (min-width: 1400px) {
  .languages-container {
    max-width: 85%;
  }
}

@media (min-width: 1600px) {
  .languages-container {
    max-width: 85%;
    width: 85%;
  }
}

@media (min-width: 1920px) {
  .languages-container {
    max-width: 80%;
    width: 80%;
  }
}

/* Responsive Design */
@media (max-width: 576px) {
  .languages-container {
    padding: 0 1rem;
  }

  .languages-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.875rem;
  }

  .language-circle {
    width: 75px;
    height: 75px;
  }

  .progress-ring {
    width: 75px;
    height: 75px;
  }

  .progress-ring circle {
    cx: '37.5';
    cy: '37.5';
    r: '28';
    stroke-width: '4';
  }

  .language-name {
    font-size: 0.85rem;
  }

  .language-percentage {
    font-size: 0.75rem;
  }
}

@media (min-width: 577px) and (max-width: 768px) {
  .languages-container {
    padding: 0 1.5rem;
  }

  .languages-grid {
    grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
    gap: 1.25rem;
  }

  .language-circle {
    width: 90px;
    height: 90px;
  }

  .progress-ring {
    width: 90px;
    height: 90px;
  }

  .progress-ring circle {
    cx: '45';
    cy: '45';
    r: '35';
    stroke-width: '5';
  }

  .language-name {
    font-size: 0.95rem;
  }

  .language-percentage {
    font-size: 0.8rem;
  }
}

@media (min-width: 769px) and (max-width: 992px) {
  .languages-container {
    max-width: 900px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .languages-grid {
    grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
    gap: 1.75rem;
  }

  .language-circle {
    width: 110px;
    height: 110px;
  }

  .progress-ring {
    width: 110px;
    height: 110px;
  }

  .progress-ring circle {
    cx: '55';
    cy: '55';
    r: '45';
    stroke-width: '6';
  }

  .language-name {
    font-size: 1.05rem;
  }

  .language-percentage {
    font-size: 0.9rem;
  }
}

@media (min-width: 993px) and (max-width: 1200px) {
  .languages-container {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 2.5rem;
  }

  .languages-grid {
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    gap: 2rem;
  }

  .language-circle {
    width: 120px;
    height: 120px;
  }

  .progress-ring {
    width: 120px;
    height: 120px;
  }

  .progress-ring circle {
    cx: '60';
    cy: '60';
    r: '50';
    stroke-width: '7';
  }

  .language-name {
    font-size: 1.1rem;
  }

  .language-percentage {
    font-size: 0.95rem;
  }
}

@media (min-width: 1201px) and (max-width: 1400px) {
  .languages-container {
    max-width: 1300px;
    margin: 0 auto;
    padding: 0 3rem;
  }

  .languages-grid {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 2.25rem;
  }

  .language-circle {
    width: 130px;
    height: 130px;
  }

  .progress-ring {
    width: 130px;
    height: 130px;
  }

  .progress-ring circle {
    cx: '65';
    cy: '65';
    r: '55';
    stroke-width: '8';
  }

  .language-name {
    font-size: 1.15rem;
  }

  .language-percentage {
    font-size: 1rem;
  }
}

@media (min-width: 1401px) {
  .languages-container {
    max-width: 1600px;
    margin: 0 auto;
    padding: 0 4rem;
  }

  .languages-grid {
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 2.5rem;
  }

  .language-circle {
    width: 140px;
    height: 140px;
  }

  .progress-ring {
    width: 140px;
    height: 140px;
  }

  .progress-ring circle {
    cx: '70';
    cy: '70';
    r: '60';
    stroke-width: '9';
  }

  .language-name {
    font-size: 1.2rem;
  }

  .language-percentage {
    font-size: 1.05rem;
  }
}
</style>
