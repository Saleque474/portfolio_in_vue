<template>
  <div class="projects-container">
    <div v-if="projects.length" class="projects-grid">
      <div
        v-for="(project, index) in projects"
        :key="project.title"
        class="project-card"
        :style="{ animationDelay: `${index * 0.1}s` }"
      >
        <div class="project-image">
          <img v-if="project.image" :src="project.image" :alt="project.title" class="project-img" />
          <div v-else class="project-placeholder">
            <svg fill="currentColor" viewBox="0 0 20 20">
              <path
                fill-rule="evenodd"
                d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
        </div>

        <div class="project-content">
          <h3 class="project-title">{{ project.title }}</h3>
          <p class="project-description">{{ project.description }}</p>

          <div class="project-tech">
            <span v-for="tech in project.technologies" :key="tech" class="tech-tag">
              {{ tech }}
            </span>
          </div>

          <a :href="project.link" target="_blank" rel="noopener noreferrer" class="project-link">
            <svg class="link-icon" fill="currentColor" viewBox="0 0 20 20">
              <path
                fill-rule="evenodd"
                d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z"
                clip-rule="evenodd"
              ></path>
              <path
                fill-rule="evenodd"
                d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z"
                clip-rule="evenodd"
              ></path>
            </svg>
            View Project
          </a>
        </div>
      </div>
    </div>

    <div v-else class="loading-container">
      <div class="loading-spinner"></div>
      <p>Loading projects...</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Projects',
  data() {
    return {
      projects: [],
    };
  },
  mounted() {
    fetch('/data/projects.json')
      .then((res) => res.json())
      .then((data) => {
        this.projects = data;
      })
      .catch((error) => {
        console.error('Failed to load projects:', error);
      });
  },
};
</script>

<style scoped>
.projects-container {
  max-width: 1200px;
  margin: 0 auto;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.project-card {
  background: var(--card-bg);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: var(--shadow);
  border: 1px solid var(--border-color);
  transition: all 0.3s ease;
  opacity: 0;
  animation: fadeInUp 0.6s ease-out forwards;
}

.project-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  border-color: var(--primary-color);
}

.project-image {
  position: relative;
  height: 200px;
  overflow: hidden;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
}

.project-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.project-card:hover .project-img {
  transform: scale(1.1);
}

.project-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.7);
}

.project-placeholder svg {
  width: 3rem;
  height: 3rem;
}

.project-content {
  padding: 1.5rem;
}

.project-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
  line-height: 1.3;
}

.project-description {
  color: var(--text-secondary);
  margin-bottom: 1rem;
  line-height: 1.5;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.tech-tag {
  background: rgba(99, 102, 241, 0.1);
  color: var(--primary-color);
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 500;
  border: 1px solid rgba(99, 102, 241, 0.2);
}

.project-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--primary-color);
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
}

.project-link:hover {
  color: var(--primary-dark);
  transform: translateX(5px);
}

.link-icon {
  width: 1rem;
  height: 1rem;
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
  .projects-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 1601px) {
  .projects-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

/* Responsive Design */
@media (max-width: 576px) {
  .projects-container {
    padding: 0 1rem;
  }

  .projects-grid {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }

  .project-card {
    max-width: 100%;
  }

  .project-content {
    padding: 1rem;
  }

  .project-title {
    font-size: 1rem;
  }

  .project-description {
    font-size: 0.9rem;
  }

  .tech-tag {
    font-size: 0.75rem;
    padding: 0.2rem 0.5rem;
  }
}

@media (min-width: 577px) and (max-width: 768px) {
  .projects-container {
    padding: 0 1.5rem;
  }

  .projects-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .project-card {
    max-width: 100%;
  }

  .project-content {
    padding: 1.25rem;
  }

  .project-title {
    font-size: 1.1rem;
  }

  .project-description {
    font-size: 0.95rem;
  }

  .tech-tag {
    font-size: 0.8rem;
    padding: 0.25rem 0.6rem;
  }
}

@media (min-width: 769px) and (max-width: 992px) {
  .projects-container {
    max-width: 900px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .projects-grid {
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 2rem;
  }

  .project-card {
    max-width: 100%;
  }

  .project-content {
    padding: 1.5rem;
  }

  .project-title {
    font-size: 1.2rem;
  }

  .project-description {
    font-size: 1rem;
  }

  .tech-tag {
    font-size: 0.85rem;
    padding: 0.3rem 0.7rem;
  }
}

@media (min-width: 993px) and (max-width: 1200px) {
  .projects-container {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 2.5rem;
  }

  .projects-grid {
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2.25rem;
  }

  .project-card {
    max-width: 100%;
  }

  .project-content {
    padding: 1.75rem;
  }

  .project-title {
    font-size: 1.25rem;
  }

  .project-description {
    font-size: 1.05rem;
  }

  .tech-tag {
    font-size: 0.875rem;
    padding: 0.3rem 0.75rem;
  }
}

@media (min-width: 1201px) and (max-width: 1400px) {
  .projects-container {
    max-width: 1300px;
    margin: 0 auto;
    padding: 0 3rem;
  }

  .projects-grid {
    grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
    gap: 2.5rem;
  }

  .project-card {
    max-width: 100%;
  }

  .project-content {
    padding: 2rem;
  }

  .project-title {
    font-size: 1.3rem;
  }

  .project-description {
    font-size: 1.1rem;
  }

  .tech-tag {
    font-size: 0.9rem;
    padding: 0.35rem 0.8rem;
  }
}

@media (min-width: 1401px) {
  .projects-container {
    max-width: 1600px;
    margin: 0 auto;
    padding: 0 4rem;
  }

  .projects-grid {
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 3rem;
  }

  .project-card {
    max-width: 100%;
  }

  .project-content {
    padding: 2.25rem;
  }

  .project-title {
    font-size: 1.35rem;
  }

  .project-description {
    font-size: 1.15rem;
  }

  .tech-tag {
    font-size: 0.925rem;
    padding: 0.4rem 0.85rem;
  }
}
</style>
