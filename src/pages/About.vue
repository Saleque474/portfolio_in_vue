<template>
  <div class="about-container">
    <div v-if="profile" class="about-card">
      <div class="about-content">
        <div class="about-text">
          <h3 class="about-name">{{ profile.name }}</h3>
          <p class="about-description">{{ profile.about }}</p>

          <div class="contact-info">
            <div class="contact-item">
              <svg class="contact-icon" fill="currentColor" viewBox="0 0 20 20">
                <path
                  d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                ></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
              <span>{{ profile.contact.email }}</span>
            </div>

            <div v-if="profile.contact.phone" class="contact-item">
              <svg class="contact-icon" fill="currentColor" viewBox="0 0 20 20">
                <path
                  d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
                ></path>
              </svg>
              <span>{{ profile.contact.phone }}</span>
            </div>

            <div v-if="profile.contact.location" class="contact-item">
              <svg class="contact-icon" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span>{{ profile.contact.location }}</span>
            </div>
          </div>
        </div>

        <div class="about-image">
          <img
            v-if="profile.profileImage"
            :src="profile.profileImage"
            alt="Profile"
            class="profile-image"
          />
        </div>
      </div>
    </div>
    <div v-else class="loading-card">
      <div class="loading-spinner"></div>
      <p>Loading profile...</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      profile: null,
    };
  },
  mounted() {
    const base = import.meta.env.BASE_URL || '/';
    fetch(`${base}data/profile.json`)
      .then((res) => res.json())
      .then((data) => {
        this.profile = data;
      })
      .catch((error) => {
        console.error('Failed to load profile:', error);
      });
  },
};
</script>

<style scoped>
.about-container {
  max-width: 1140px;
  margin: 0 auto;
  width: 100%;
}

.about-card {
  background: var(--card-bg);
  border-radius: 16px;
  padding: 2rem;
  box-shadow: var(--shadow-lg);
  border: 1px solid var(--border-color);
  transition: all 0.3s ease;
}

.about-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
}

.about-content {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 2rem;
  align-items: center;
}

.about-text {
  flex: 1;
}

.about-name {
  font-size: 2rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1rem;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.about-description {
  font-size: 1.1rem;
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 2rem;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: var(--text-secondary);
  transition: color 0.3s ease;
}

.contact-item:hover {
  color: var(--primary-color);
}

.contact-icon {
  width: 1.25rem;
  height: 1.25rem;
  color: var(--primary-color);
  flex-shrink: 0;
}

.about-image {
  flex-shrink: 0;
}

.profile-image {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid var(--primary-color);
  box-shadow: 0 8px 25px rgba(99, 102, 241, 0.3);
  transition: all 0.3s ease;
}

.profile-image:hover {
  transform: scale(1.05);
  box-shadow: 0 12px 35px rgba(99, 102, 241, 0.4);
}

.loading-card {
  background: var(--card-bg);
  border-radius: 16px;
  padding: 3rem;
  text-align: center;
  border: 1px solid var(--border-color);
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

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@media (min-width: 1200px) {
  .about-container {
    max-width: 90%;
  }
}

@media (min-width: 1400px) {
  .about-container {
    max-width: 85%;
  }
}

@media (min-width: 1600px) {
  .about-container {
    max-width: 85%;
    width: 85%;
  }
}

@media (min-width: 1920px) {
  .about-container {
    max-width: 80%;
    width: 80%;
  }
}

/* Responsive Design */
@media (max-width: 576px) {
  .about-container {
    padding: 0 1rem;
  }

  .about-card {
    padding: 1.25rem;
  }

  .about-content {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 1.25rem;
  }

  .about-name {
    font-size: 1.5rem;
  }

  .about-description {
    font-size: 0.95rem;
  }

  .profile-image {
    width: 110px;
    height: 110px;
  }

  .contact-info {
    gap: 0.625rem;
  }

  .contact-item {
    font-size: 0.9rem;
  }
}

@media (min-width: 577px) and (max-width: 768px) {
  .about-container {
    padding: 0 1.5rem;
  }

  .about-card {
    padding: 1.5rem;
  }

  .about-content {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 1.5rem;
  }

  .about-name {
    font-size: 1.75rem;
  }

  .about-description {
    font-size: 1rem;
  }

  .profile-image {
    width: 130px;
    height: 130px;
  }

  .contact-info {
    gap: 0.75rem;
  }

  .contact-item {
    font-size: 0.95rem;
  }
}

@media (min-width: 769px) and (max-width: 992px) {
  .about-container {
    max-width: 700px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .about-card {
    padding: 2rem;
  }

  .about-content {
    grid-template-columns: 1fr auto;
    text-align: left;
    gap: 2rem;
  }

  .about-name {
    font-size: 1.9rem;
  }

  .about-description {
    font-size: 1.05rem;
  }

  .profile-image {
    width: 140px;
    height: 140px;
  }

  .contact-info {
    gap: 0.875rem;
  }

  .contact-item {
    font-size: 1rem;
  }
}

@media (min-width: 993px) and (max-width: 1200px) {
  .about-container {
    max-width: 750px;
    margin: 0 auto;
    padding: 0 2.5rem;
  }

  .about-card {
    padding: 2.25rem;
  }

  .about-content {
    grid-template-columns: 1fr auto;
    text-align: left;
    gap: 2.25rem;
  }

  .about-name {
    font-size: 2rem;
  }

  .about-description {
    font-size: 1.1rem;
  }

  .profile-image {
    width: 150px;
    height: 150px;
  }

  .contact-info {
    gap: 1rem;
  }

  .contact-item {
    font-size: 1.05rem;
  }
}

@media (min-width: 1201px) and (max-width: 1400px) {
  .about-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 0 3rem;
  }

  .about-card {
    padding: 2.5rem;
  }

  .about-content {
    grid-template-columns: 1fr auto;
    text-align: left;
    gap: 2.5rem;
  }

  .about-name {
    font-size: 2.1rem;
  }

  .about-description {
    font-size: 1.15rem;
  }

  .profile-image {
    width: 160px;
    height: 160px;
  }

  .contact-info {
    gap: 1.125rem;
  }

  .contact-item {
    font-size: 1.1rem;
  }
}

@media (min-width: 1401px) {
  .about-container {
    max-width: 850px;
    margin: 0 auto;
    padding: 0 4rem;
  }

  .about-card {
    padding: 2.75rem;
  }

  .about-content {
    grid-template-columns: 1fr auto;
    text-align: left;
    gap: 3rem;
  }

  .about-name {
    font-size: 2.2rem;
  }

  .about-description {
    font-size: 1.2rem;
  }

  .profile-image {
    width: 170px;
    height: 170px;
  }

  .contact-info {
    gap: 1.25rem;
  }

  .contact-item {
    font-size: 1.15rem;
  }
}
</style>
