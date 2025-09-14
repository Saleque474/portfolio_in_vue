<template>
  <div class="experience-container">
    <div v-if="experience.length" class="timeline">
      <div
        v-for="(exp, index) in experience"
        :key="exp.role + exp.organization"
        class="timeline-item"
        :class="{ 'timeline-item--left': index % 2 === 0, 'timeline-item--right': index % 2 !== 0 }"
        :style="{ animationDelay: `${index * 0.2}s` }"
      >
        <div class="timeline-content">
          <div class="timeline-marker">
            <div class="timeline-dot"></div>
          </div>

          <div class="experience-card">
            <div class="experience-header">
              <h3 class="experience-role">{{ exp.role }}</h3>
              <div class="experience-company">
                <svg class="company-icon" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd"
                    d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm3 1a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                {{ exp.organization }}
              </div>
            </div>

            <div class="experience-period">
              <svg class="period-icon" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              {{ exp.period }}
            </div>

            <p class="experience-description">{{ exp.description }}</p>
          </div>
        </div>
      </div>
    </div>

    <div v-else class="loading-container">
      <div class="loading-spinner"></div>
      <p>Loading experience...</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Experience',
  data() {
    return {
      experience: [],
    };
  },
  mounted() {
    fetch('/data/experience.json')
      .then((res) => res.json())
      .then((data) => {
        this.experience = data;
      })
      .catch((error) => {
        console.error('Failed to load experience:', error);
      });
  },
};
</script>

<style scoped>
.experience-container {
  max-width: 1140px;
  margin: 2rem auto;
  position: relative;
  width: 100%;
}

.timeline {
  position: relative;
  padding: 2rem 0;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(to bottom, var(--primary-color), var(--secondary-color));
  transform: translateX(-50%);
}

.timeline-item {
  position: relative;
  margin-bottom: 3rem;
  opacity: 0;
  animation: fadeInUp 0.6s ease-out forwards;
}

.timeline-item--left {
  left: 0;
  width: 50%;
  padding-right: 2rem;
  text-align: right;
}

.timeline-item--right {
  left: 50%;
  width: 50%;
  padding-left: 2rem;
}

.timeline-content {
  position: relative;
}

.timeline-marker {
  position: absolute;
  top: 50%;
  left: 100%;
  transform: translate(-50%, -50%);
  z-index: 2;
}

.timeline-item--right .timeline-marker {
  left: 0;
}

.timeline-dot {
  width: 16px;
  height: 16px;
  background: var(--primary-color);
  border: 4px solid var(--card-bg);
  border-radius: 50%;
  box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.2);
}

.experience-card {
  background: var(--card-bg);
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: var(--shadow);
  border: 1px solid var(--border-color);
  transition: all 0.3s ease;
}

.timeline-item--left .experience-card {
  margin-right: 2rem;
}

.timeline-item--right .experience-card {
  margin-left: 2rem;
}

.experience-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
  border-color: var(--primary-color);
}

.experience-header {
  margin-bottom: 1rem;
}

.experience-role {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
  line-height: 1.3;
}

.experience-company {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--secondary-color);
  font-weight: 500;
}

.company-icon {
  width: 1rem;
  height: 1rem;
}

.experience-period {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-muted);
  font-size: 0.9rem;
  margin-bottom: 1rem;
}

.period-icon {
  width: 1rem;
  height: 1rem;
}

.experience-description {
  color: var(--text-secondary);
  line-height: 1.6;
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
  .experience-container {
    max-width: 90%;
  }
}

@media (min-width: 1400px) {
  .experience-container {
    max-width: 85%;
  }
}

@media (min-width: 1600px) {
  .experience-container {
    max-width: 85%;
    width: 85%;
  }
}

@media (min-width: 1920px) {
  .experience-container {
    max-width: 80%;
    width: 80%;
  }
}

/* Responsive Design */
@media (max-width: 576px) {
  .experience-container {
    padding: 0 1rem;
  }

  .timeline {
    padding: 1rem 0;
  }

  .timeline::before {
    left: 18px;
  }

  .timeline-item {
    margin-bottom: 1.75rem;
  }

  .timeline-item--left,
  .timeline-item--right {
    left: 0;
    width: 100%;
    padding-left: 3.5rem;
    padding-right: 0.75rem;
    text-align: left;
  }

  .timeline-item--left .experience-card,
  .timeline-item--right .experience-card {
    margin-left: 1.5rem;
    margin-right: 0;
  }

  .timeline-marker {
    left: 18px;
  }

  .timeline-item--right .timeline-marker {
    left: 18px;
  }

  .experience-card {
    padding: 1rem;
  }

  .experience-role {
    font-size: 1rem;
  }

  .experience-company {
    font-size: 0.9rem;
  }

  .experience-period {
    font-size: 0.8rem;
  }

  .experience-description {
    font-size: 0.9rem;
  }
}

@media (min-width: 577px) and (max-width: 768px) {
  .experience-container {
    padding: 0 1.5rem;
  }

  .timeline {
    padding: 1.25rem 0;
  }

  .timeline::before {
    left: 20px;
  }

  .timeline-item {
    margin-bottom: 2rem;
  }

  .timeline-item--left,
  .timeline-item--right {
    left: 0;
    width: 100%;
    padding-left: 4rem;
    padding-right: 1rem;
    text-align: left;
  }

  .timeline-item--left .experience-card,
  .timeline-item--right .experience-card {
    margin-left: 2rem;
    margin-right: 0;
  }

  .timeline-marker {
    left: 20px;
  }

  .timeline-item--right .timeline-marker {
    left: 20px;
  }

  .experience-card {
    padding: 1.25rem;
  }

  .experience-role {
    font-size: 1.1rem;
  }

  .experience-company {
    font-size: 0.95rem;
  }

  .experience-period {
    font-size: 0.85rem;
  }

  .experience-description {
    font-size: 0.95rem;
  }
}

@media (min-width: 769px) and (max-width: 992px) {
  .experience-container {
    max-width: 900px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .timeline {
    padding: 2rem 0;
  }

  .timeline-item {
    margin-bottom: 2.5rem;
  }

  .timeline-item--left .experience-card,
  .timeline-item--right .experience-card {
    margin-left: 2.5rem;
    margin-right: 2.5rem;
  }

  .experience-card {
    padding: 1.5rem;
  }

  .experience-role {
    font-size: 1.2rem;
  }

  .experience-company {
    font-size: 1rem;
  }

  .experience-period {
    font-size: 0.9rem;
  }

  .experience-description {
    font-size: 1rem;
  }
}

@media (min-width: 993px) and (max-width: 1200px) {
  .experience-container {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 2.5rem;
  }

  .timeline {
    padding: 2.25rem 0;
  }

  .timeline-item {
    margin-bottom: 3rem;
  }

  .timeline-item--left .experience-card,
  .timeline-item--right .experience-card {
    margin-left: 3rem;
    margin-right: 3rem;
  }

  .experience-card {
    padding: 1.75rem;
  }

  .experience-role {
    font-size: 1.25rem;
  }

  .experience-company {
    font-size: 1.05rem;
  }

  .experience-period {
    font-size: 0.925rem;
  }

  .experience-description {
    font-size: 1.05rem;
  }
}

@media (min-width: 1201px) and (max-width: 1400px) {
  .experience-container {
    max-width: 1300px;
    margin: 0 auto;
    padding: 0 3rem;
  }

  .timeline {
    padding: 2.5rem 0;
  }

  .timeline-item {
    margin-bottom: 3.5rem;
  }

  .timeline-item--left .experience-card,
  .timeline-item--right .experience-card {
    margin-left: 3.5rem;
    margin-right: 3.5rem;
  }

  .experience-card {
    padding: 2rem;
  }

  .experience-role {
    font-size: 1.3rem;
  }

  .experience-company {
    font-size: 1.1rem;
  }

  .experience-period {
    font-size: 0.95rem;
  }

  .experience-description {
    font-size: 1.1rem;
  }
}

@media (min-width: 1401px) {
  .experience-container {
    max-width: 1600px;
    margin: 0 auto;
    padding: 0 4rem;
  }

  .timeline {
    padding: 3rem 0;
  }

  .timeline-item {
    margin-bottom: 4rem;
  }

  .timeline-item--left .experience-card,
  .timeline-item--right .experience-card {
    margin-left: 4rem;
    margin-right: 4rem;
  }

  .experience-card {
    padding: 2.25rem;
  }

  .experience-role {
    font-size: 1.35rem;
  }

  .experience-company {
    font-size: 1.15rem;
  }

  .experience-period {
    font-size: 0.975rem;
  }

  .experience-description {
    font-size: 1.15rem;
  }
}
</style>
