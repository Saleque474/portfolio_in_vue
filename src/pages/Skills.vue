<template>
  <div class="skills-container">
    <div v-if="skills.length" class="skills-grid">
      <div
        v-for="(skill, index) in skills"
        :key="skill.name"
        class="skill-card"
        :style="{ animationDelay: `${index * 0.1}s` }"
      >
        <div class="skill-header">
          <div class="skill-info">
            <h3 class="skill-name">{{ skill.name }}</h3>
            <span class="skill-category">{{ skill.category }}</span>
          </div>
          <div class="skill-percentage">{{ skill.rating }}%</div>
        </div>

        <div class="skill-progress">
          <div
            class="skill-bar"
            :style="{ width: skill.rating + '%', animationDelay: `${index * 0.1 + 0.3}s` }"
          ></div>
        </div>
      </div>
    </div>

    <div v-else class="loading-container">
      <div class="loading-spinner"></div>
      <p>Loading skills...</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Skills',
  data() {
    return {
      skills: [],
    };
  },
  mounted() {
    const base = import.meta.env.BASE_URL || '/';
    fetch(`${base}data/skills.json`)
      .then((res) => res.json())
      .then((data) => {
        this.skills = data;
      })
      .catch((error) => {
        console.error('Failed to load skills:', error);
      });
  },
};
</script>

<style scoped>
.skills-container {
  max-width: 1000px;
  margin: 0 auto;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.skill-card {
  background: var(--card-bg);
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: var(--shadow);
  border: 1px solid var(--border-color);
  transition: all 0.3s ease;
  opacity: 0;
  animation: fadeInUp 0.6s ease-out forwards;
}

.skill-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
  border-color: var(--primary-color);
}

.skill-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.skill-info {
  flex: 1;
}

.skill-name {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.25rem;
}

.skill-category {
  display: inline-block;
  background: rgba(16, 185, 129, 0.1);
  color: var(--secondary-color);
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
  border: 1px solid rgba(16, 185, 129, 0.2);
}

.skill-percentage {
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--primary-color);
}

.skill-progress {
  position: relative;
  height: 8px;
  background: var(--border-color);
  border-radius: 4px;
  overflow: hidden;
}

.skill-bar {
  height: 100%;
  background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
  border-radius: 4px;
  width: 0;
  animation: fillBar 1.5s ease-out forwards;
  position: relative;
}

.skill-bar::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  animation: shimmer 2s ease-in-out infinite;
}

@keyframes fillBar {
  from {
    width: 0;
  }
  to {
    width: var(--width);
  }
}

@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
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

@media (min-width: 1200px) {
  .skills-container {
    max-width: 90%;
  }
}

@media (min-width: 1400px) {
  .skills-container {
    max-width: 85%;
  }
  .skills-grid {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
}

@media (min-width: 1600px) {
  .skills-container {
    max-width: 85%;
    width: 85%;
  }
  .skills-grid {
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  }
}

@media (min-width: 1920px) {
  .skills-container {
    max-width: 80%;
    width: 80%;
  }
  .skills-grid {
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  }
}

/* Responsive Design */
@media (max-width: 576px) {
  .skills-container {
    padding: 0 1rem;
  }

  .skills-grid {
    grid-template-columns: 1fr;
    gap: 0.875rem;
  }

  .skill-card {
    padding: 1rem;
  }

  .skill-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
    margin-bottom: 0.75rem;
  }

  .skill-name {
    font-size: 0.95rem;
  }

  .skill-category {
    font-size: 0.7rem;
    padding: 0.2rem 0.5rem;
  }

  .skill-percentage {
    font-size: 0.9rem;
  }

  .skill-progress {
    height: 6px;
  }
}

@media (min-width: 577px) and (max-width: 768px) {
  .skills-container {
    padding: 0 1.5rem;
  }

  .skills-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .skill-card {
    padding: 1.25rem;
  }

  .skill-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
    margin-bottom: 1rem;
  }

  .skill-name {
    font-size: 1rem;
  }

  .skill-category {
    font-size: 0.75rem;
    padding: 0.25rem 0.6rem;
  }

  .skill-percentage {
    font-size: 1rem;
  }

  .skill-progress {
    height: 7px;
  }
}

@media (min-width: 769px) and (max-width: 992px) {
  .skills-container {
    max-width: 900px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .skills-grid {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.25rem;
  }

  .skill-card {
    padding: 1.5rem;
  }

  .skill-header {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1.25rem;
  }

  .skill-name {
    font-size: 1.05rem;
  }

  .skill-category {
    font-size: 0.8rem;
    padding: 0.25rem 0.7rem;
  }

  .skill-percentage {
    font-size: 1.1rem;
  }

  .skill-progress {
    height: 8px;
  }
}

@media (min-width: 993px) and (max-width: 1200px) {
  .skills-container {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 2.5rem;
  }

  .skills-grid {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
  }

  .skill-card {
    padding: 1.75rem;
  }

  .skill-header {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1.5rem;
  }

  .skill-name {
    font-size: 1.1rem;
  }

  .skill-category {
    font-size: 0.825rem;
    padding: 0.3rem 0.75rem;
  }

  .skill-percentage {
    font-size: 1.15rem;
  }

  .skill-progress {
    height: 9px;
  }
}

@media (min-width: 1201px) and (max-width: 1400px) {
  .skills-container {
    max-width: 1300px;
    margin: 0 auto;
    padding: 0 3rem;
  }

  .skills-grid {
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 1.75rem;
  }

  .skill-card {
    padding: 2rem;
  }

  .skill-header {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1.75rem;
  }

  .skill-name {
    font-size: 1.15rem;
  }

  .skill-category {
    font-size: 0.85rem;
    padding: 0.35rem 0.8rem;
  }

  .skill-percentage {
    font-size: 1.2rem;
  }

  .skill-progress {
    height: 10px;
  }
}

@media (min-width: 1401px) {
  .skills-container {
    max-width: 1600px;
    margin: 0 auto;
    padding: 0 4rem;
  }

  .skills-grid {
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
  }

  .skill-card {
    padding: 2.25rem;
  }

  .skill-header {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    margin-bottom: 2rem;
  }

  .skill-name {
    font-size: 1.2rem;
  }

  .skill-category {
    font-size: 0.875rem;
    padding: 0.4rem 0.85rem;
  }

  .skill-percentage {
    font-size: 1.25rem;
  }

  .skill-progress {
    height: 11px;
  }
}
</style>
