<template>
  <div class="contact-container">
    <div class="contact-card">
      <div class="contact-content">
        <h3 class="contact-title">Get In Touch</h3>
        <p class="contact-description">
          I'm always interested in new opportunities and collaborations. Feel free to reach out!
        </p>

        <div class="contact-actions">
          <a
            href="mailto:salequeahmed474@gmail.com?subject=Contact from Portfolio"
            class="contact-button"
          >
            <svg class="button-icon" fill="currentColor" viewBox="0 0 20 20">
              <path
                d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
              ></path>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
            </svg>
            Send Email
          </a>

          <div class="contact-info">
            <div class="contact-detail">
              <svg class="detail-icon" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span>Savar, Dhaka, Bangladesh</span>
            </div>

            <div class="contact-detail">
              <svg class="detail-icon" fill="currentColor" viewBox="0 0 20 20">
                <path
                  d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
                ></path>
              </svg>
              <span>+880 1757 365867</span>
            </div>
          </div>
        </div>

        <div class="social-links">
          <a href="https://github.com/Saleque474" target="_blank" class="social-link">
            <font-awesome-icon :icon="['fab', 'github']" /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/s-a-saleque-a-53053010a/"
            target="_blank"
            class="social-link"
          >
            <font-awesome-icon :icon="['fab', 'linkedin']" /> LinkedIn
          </a>
          <a href="https://wa.me/+8801310797449" target="_blank" class="social-link">
            <font-awesome-icon :icon="['fab', 'whatsapp']" /> WhatsApp
          </a>
        </div>
      </div>

      <div class="contact-illustration">
        <div class="illustration-content">
          <svg
            class="contact-svg"
            viewBox="0 0 400 300"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="200" cy="150" r="80" fill="url(#gradient1)" opacity="0.1" />
            <circle cx="180" cy="130" r="20" fill="var(--primary-color)" opacity="0.8" />
            <circle cx="220" cy="140" r="15" fill="var(--secondary-color)" opacity="0.8" />
            <circle cx="190" cy="170" r="12" fill="var(--accent-color)" opacity="0.8" />
            <path
              d="M160 200 Q200 180 240 200"
              stroke="var(--primary-color)"
              stroke-width="3"
              fill="none"
              opacity="0.6"
            />
            <circle cx="200" cy="150" r="3" fill="var(--text-primary)" opacity="0.8" />
            <defs>
              <linearGradient
                id="gradient1"
                x1="120"
                y1="70"
                x2="280"
                y2="230"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="var(--primary-color)" stop-opacity="0.3" />
                <stop offset="1" stop-color="var(--secondary-color)" stop-opacity="0.1" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact',
};
</script>

<style scoped>
.contact-container {
  max-width: 1140px;
  margin: 0 auto;
  width: 100%;
}

.contact-card {
  background: var(--card-bg);
  border-radius: 16px;
  padding: 2rem;
  box-shadow: var(--shadow-lg);
  border: 1px solid var(--border-color);
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 2rem;
  align-items: center;
  transition: all 0.3s ease;
}

.contact-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  border-color: var(--primary-color);
}

.contact-content {
  flex: 1;
}

.contact-title {
  font-size: 2rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1rem;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.contact-description {
  color: var(--text-secondary);
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
}

.contact-actions {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.contact-button {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  background: linear-gradient(135deg, var(--primary-color), var(--primary-dark));
  color: white;
  text-decoration: none;
  padding: 1rem 2rem;
  border-radius: 12px;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(99, 102, 241, 0.3);
  border: none;
  cursor: pointer;
}

.contact-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(99, 102, 241, 0.4);
}

.button-icon {
  width: 1.25rem;
  height: 1.25rem;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.contact-detail {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: var(--text-secondary);
  transition: color 0.3s ease;
}

.contact-detail:hover {
  color: var(--primary-color);
}

.detail-icon {
  width: 1.25rem;
  height: 1.25rem;
  color: var(--primary-color);
  flex-shrink: 0;
}

.contact-illustration {
  flex-shrink: 0;
}

.illustration-content {
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.contact-svg {
  width: 100%;
  height: 100%;
  opacity: 0.8;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 2rem;
}

.social-link {
  color: var(--text-primary);
  text-decoration: none;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.social-link:hover {
  color: var(--primary-color);
}

@media (min-width: 1200px) {
  .contact-container {
    max-width: 90%;
  }
}

@media (min-width: 1400px) {
  .contact-container {
    max-width: 85%;
  }
}

@media (min-width: 1600px) {
  .contact-container {
    max-width: 85%;
    width: 85%;
  }
}

@media (min-width: 1920px) {
  .contact-container {
    max-width: 80%;
    width: 80%;
  }
}

/* Responsive Design */
@media (max-width: 576px) {
  .contact-container {
    padding: 0 1rem;
  }

  .contact-card {
    padding: 1.25rem;
    grid-template-columns: 1fr;
    gap: 1.25rem;
    text-align: center;
  }

  .contact-illustration {
    order: -1;
  }

  .illustration-content {
    width: 120px;
    height: 120px;
  }

  .contact-title {
    font-size: 1.5rem;
  }

  .contact-description {
    font-size: 0.95rem;
  }

  .contact-button {
    padding: 0.75rem 1.25rem;
    font-size: 0.95rem;
  }

  .contact-info {
    gap: 0.625rem;
  }

  .contact-detail {
    font-size: 0.9rem;
  }
}

@media (min-width: 577px) and (max-width: 768px) {
  .contact-container {
    padding: 0 1.5rem;
  }

  .contact-card {
    padding: 1.5rem;
    grid-template-columns: 1fr;
    gap: 1.5rem;
    text-align: center;
  }

  .contact-illustration {
    order: -1;
  }

  .illustration-content {
    width: 140px;
    height: 140px;
  }

  .contact-title {
    font-size: 1.75rem;
  }

  .contact-description {
    font-size: 1rem;
  }

  .contact-button {
    padding: 0.875rem 1.5rem;
    font-size: 1rem;
  }

  .contact-info {
    gap: 0.75rem;
  }

  .contact-detail {
    font-size: 0.95rem;
  }
}

@media (min-width: 769px) and (max-width: 992px) {
  .contact-container {
    max-width: 700px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .contact-card {
    padding: 2rem;
    grid-template-columns: 1fr auto;
    gap: 2rem;
    text-align: left;
  }

  .contact-illustration {
    order: 1;
  }

  .illustration-content {
    width: 180px;
    height: 180px;
  }

  .contact-title {
    font-size: 1.9rem;
  }

  .contact-description {
    font-size: 1.05rem;
  }

  .contact-button {
    padding: 1rem 2rem;
    font-size: 1.05rem;
  }

  .contact-info {
    gap: 0.875rem;
  }

  .contact-detail {
    font-size: 1rem;
  }
}

@media (min-width: 993px) and (max-width: 1200px) {
  .contact-container {
    max-width: 750px;
    margin: 0 auto;
    padding: 0 2.5rem;
  }

  .contact-card {
    padding: 2.25rem;
    grid-template-columns: 1fr auto;
    gap: 2.25rem;
    text-align: left;
  }

  .contact-illustration {
    order: 1;
  }

  .illustration-content {
    width: 190px;
    height: 190px;
  }

  .contact-title {
    font-size: 2rem;
  }

  .contact-description {
    font-size: 1.1rem;
  }

  .contact-button {
    padding: 1.1rem 2.25rem;
    font-size: 1.1rem;
  }

  .contact-info {
    gap: 1rem;
  }

  .contact-detail {
    font-size: 1.05rem;
  }
}

@media (min-width: 1201px) and (max-width: 1400px) {
  .contact-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 0 3rem;
  }

  .contact-card {
    padding: 2.5rem;
    grid-template-columns: 1fr auto;
    gap: 2.5rem;
    text-align: left;
  }

  .contact-illustration {
    order: 1;
  }

  .illustration-content {
    width: 200px;
    height: 200px;
  }

  .contact-title {
    font-size: 2.1rem;
  }

  .contact-description {
    font-size: 1.15rem;
  }

  .contact-button {
    padding: 1.2rem 2.5rem;
    font-size: 1.15rem;
  }

  .contact-info {
    gap: 1.125rem;
  }

  .contact-detail {
    font-size: 1.1rem;
  }
}

@media (min-width: 1401px) {
  .contact-container {
    max-width: 850px;
    margin: 0 auto;
    padding: 0 4rem;
  }

  .contact-card {
    padding: 2.75rem;
    grid-template-columns: 1fr auto;
    gap: 3rem;
    text-align: left;
  }

  .contact-illustration {
    order: 1;
  }

  .illustration-content {
    width: 220px;
    height: 220px;
  }

  .contact-title {
    font-size: 2.2rem;
  }

  .contact-description {
    font-size: 1.2rem;
  }

  .contact-button {
    padding: 1.3rem 2.75rem;
    font-size: 1.2rem;
  }

  .contact-info {
    gap: 1.25rem;
  }

  .contact-detail {
    font-size: 1.15rem;
  }
}
</style>
