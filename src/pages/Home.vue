<template>
  <main class="home">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-container">
        <div class="hero-content">
          <h1 class="hero-title">Welcome to My Portfolio</h1>
          <p class="hero-subtitle">Full-Stack Developer & Creative Problem Solver</p>
          <div class="hero-buttons">
            <a href="#projects" class="btn btn-primary">View My Work</a>
            <a href="#contact" class="btn btn-secondary">Get In Touch</a>
          </div>
        </div>
        <div class="hero-image">
          <div class="image-container">
            <img src="/assets/profile.png" alt="Profile" class="profile-img" />
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">About Me</h2>
          <div class="section-divider"></div>
        </div>
        <About />
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="section section-alt">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Featured Projects</h2>
          <div class="section-divider"></div>
        </div>
        <Projects />
      </div>
    </section>

    <!-- Skills Section -->
    <section id="skills" class="section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Technical Skills</h2>
          <div class="section-divider"></div>
        </div>
        <Skills />
      </div>
    </section>

    <!-- Experience Section -->
    <section id="experience" class="section section-alt">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Work Experience</h2>
          <div class="section-divider"></div>
        </div>
        <Experience />
      </div>
    </section>

    <!-- Languages Section -->
    <section class="section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Programming Languages</h2>
          <div class="section-divider"></div>
        </div>
        <Languages />
      </div>
    </section>

    <!-- CV Section -->
    <section class="section section-alt">
      <div class="container">
        <div class="cv-section">
          <h2 class="section-title">Curriculum Vitae</h2>
          <p class="cv-description">Download my complete CV or view it online</p>
          <div class="cv-buttons">
            <button @click="showCV = true" class="btn btn-primary btn-large">
              <svg class="btn-icon" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              View CV
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Get In Touch</h2>
          <div class="section-divider"></div>
        </div>
        <Contact />
      </div>
    </section>

    <!-- CV Modal -->
    <div v-if="showCV" class="cv-modal" @click.self="showCV = false">
      <div class="cv-modal-content">
        <button @click="showCV = false" class="close-btn">
          <svg fill="currentColor" viewBox="0 0 20 20">
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <CVView />
      </div>
    </div>
  </main>
</template>

<script>
import About from '@/pages/About.vue';
import Projects from '@/pages/Projects.vue';
import Skills from '@/pages/Skills.vue';
import Experience from '@/pages/Experience.vue';
import Languages from '@/pages/Languages.vue';
import CVView from '@/components/CVView.vue';
import Contact from '@/pages/Contact.vue';

export default {
  name: 'Home',
  components: { About, Projects, Skills, Experience, Languages, CVView, Contact },
  data() {
    return {
      showCV: false,
    };
  },
  mounted() {
    this.initScrollAnimations();
  },
  methods: {
    initScrollAnimations() {
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
          }
        });
      }, observerOptions);

      // Observe all sections
      const sections = document.querySelectorAll('.section');
      sections.forEach((section) => observer.observe(section));
    },
  },
};
</script>

<style scoped>
.home {
  padding-top: 70px; /* Account for fixed navbar */
}

/* Hero Section */
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(16, 185, 129, 0.1) 100%);
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background:
    radial-gradient(circle at 30% 40%, rgba(99, 102, 241, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 70% 60%, rgba(16, 185, 129, 0.1) 0%, transparent 50%);
}

.hero-container {
  max-width: 1140px;
  margin: 0 auto;
  padding: 0rem 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  position: relative;
  z-index: 1;
  width: 100%;
}

.hero-content {
  animation: slideInLeft 0.8s ease-out;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: 1.25rem;
  color: var(--text-secondary);
  margin-bottom: 2rem;
  line-height: 1.6;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
}

.hero-image {
  animation: slideInRight 0.8s ease-out;
  display: flex;
  justify-content: center;
}

.image-container {
  position: relative;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  border: 4px solid var(--primary-color);
}

.profile-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Section Styles */
.section {
  padding: 5rem 0;
  position: relative;
}

.section-alt {
  background: rgba(30, 41, 59, 0.3);
}

.container {
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 2rem;
  width: 100%;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--text-primary);
}

.section-divider {
  width: 80px;
  height: 4px;
  background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
  margin: 0 auto;
  border-radius: 2px;
}

/* CV Section */
.cv-section {
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
}

.cv-description {
  color: var(--text-secondary);
  margin-bottom: 2rem;
  font-size: 1.1rem;
}

.cv-buttons {
  display: flex;
  justify-content: center;
}

/* Button Styles */
.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;
  border: none;
  font-size: 1rem;
}

.btn-primary {
  background: linear-gradient(135deg, var(--primary-color), var(--primary-dark));
  color: white;
  box-shadow: 0 4px 15px rgba(99, 102, 241, 0.3);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(99, 102, 241, 0.4);
}

.btn-secondary {
  background: transparent;
  color: var(--text-primary);
  border: 2px solid var(--border-color);
}

.btn-secondary:hover {
  background: var(--card-bg);
  border-color: var(--primary-color);
  transform: translateY(-2px);
}

.btn-large {
  padding: 1rem 2rem;
  font-size: 1.1rem;
}

.btn-icon {
  width: 1.25rem;
  height: 1.25rem;
}

/* CV Modal */
.cv-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
  backdrop-filter: blur(5px);
}

.cv-modal-content {
  background: var(--card-bg);
  border-radius: 12px;
  max-width: 90vw;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
  border: 1px solid var(--border-color);
}

.close-btn {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: var(--card-bg);
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: var(--text-secondary);
  z-index: 1;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.close-btn:hover {
  background: var(--dark-bg);
  color: var(--text-primary);
  transform: scale(1.1);
}

.close-btn svg {
  width: 20px;
  height: 20px;
}

@media (min-width: 1200px) {
  .container,
  .hero-container {
    max-width: 90%;
  }
}

@media (min-width: 1400px) {
  .container,
  .hero-container {
    max-width: 85%;
  }
}

@media (min-width: 1600px) {
  .container,
  .hero-container {
    max-width: 85%;
    width: 85%;
  }
}

@media (min-width: 1920px) {
  .container,
  .hero-container {
    max-width: 80%;
    width: 80%;
  }
}

/* Responsive Design */
@media (max-width: 576px) {
  .container {
    padding: 0 1rem;
  }

  .hero-container {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
    padding: 0 1rem;
  }

  .hero-title {
    font-size: 2rem;
  }

  .hero-subtitle {
    font-size: 1rem;
  }

  .hero-buttons {
    flex-direction: column;
    align-items: center;
  }

  .image-container {
    width: 180px;
    height: 180px;
  }

  .section {
    padding: 2.5rem 0;
  }

  .section-title {
    font-size: 1.75rem;
  }

  .section-header {
    margin-bottom: 3rem;
  }

  .btn {
    width: 100%;
    justify-content: center;
  }

  .hero {
    min-height: auto;
    padding: 4rem 0;
  }
}

@media (min-width: 577px) and (max-width: 768px) {
  .container {
    padding: 0 1.5rem;
  }

  .hero-container {
    grid-template-columns: 1fr;
    gap: 2.5rem;
    text-align: center;
    padding: 0 1.5rem;
  }

  .hero-title {
    font-size: 2.25rem;
  }

  .hero-subtitle {
    font-size: 1.1rem;
  }

  .hero-buttons {
    flex-direction: column;
    align-items: center;
  }

  .image-container {
    width: 220px;
    height: 220px;
  }

  .section {
    padding: 3rem 0;
  }

  .section-title {
    font-size: 2rem;
  }

  .section-header {
    margin-bottom: 3.5rem;
  }

  .hero {
    min-height: auto;
    padding: 5rem 0;
  }
}

@media (min-width: 769px) and (max-width: 992px) {
  .container {
    max-width: 900px;
    padding: 0 2rem;
  }

  .hero-container {
    max-width: 900px;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    padding: 0 2rem;
  }

  .hero-title {
    font-size: 2.75rem;
  }

  .hero-subtitle {
    font-size: 1.2rem;
  }

  .hero-buttons {
    flex-direction: row;
    gap: 1.5rem;
  }

  .image-container {
    width: 250px;
    height: 250px;
  }

  .section {
    padding: 4rem 0;
  }

  .section-title {
    font-size: 2.25rem;
  }

  .section-header {
    margin-bottom: 4rem;
  }

  .hero {
    min-height: 90vh;
  }
}

@media (min-width: 993px) and (max-width: 1200px) {
  .container {
    max-width: 1100px;
    padding: 0 2.5rem;
  }

  .hero-container {
    max-width: 1100px;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    padding: 0 2.5rem;
  }

  .hero-title {
    font-size: 3rem;
  }

  .hero-subtitle {
    font-size: 1.25rem;
  }

  .hero-buttons {
    flex-direction: row;
    gap: 2rem;
  }

  .image-container {
    width: 280px;
    height: 280px;
  }

  .section {
    padding: 4.5rem 0;
  }

  .section-title {
    font-size: 2.5rem;
  }

  .section-header {
    margin-bottom: 4.5rem;
  }

  .hero {
    min-height: 95vh;
  }
}

@media (min-width: 1201px) and (max-width: 1400px) {
  .container {
    max-width: 1300px;
    padding: 0 3rem;
  }

  .hero-container {
    max-width: 1300px;
    grid-template-columns: 1fr 1fr;
    gap: 5rem;
    padding: 0 3rem;
  }

  .hero-title {
    font-size: 3.25rem;
  }

  .hero-subtitle {
    font-size: 1.3rem;
  }

  .hero-buttons {
    flex-direction: row;
    gap: 2.5rem;
  }

  .image-container {
    width: 320px;
    height: 320px;
  }

  .section {
    padding: 5rem 0;
  }

  .section-title {
    font-size: 2.75rem;
  }

  .section-header {
    margin-bottom: 5rem;
  }

  .hero {
    min-height: 100vh;
  }
}

@media (min-width: 1401px) and (max-width: 1600px) {
  .container {
    max-width: 1400px;
    padding: 0 4rem;
  }

  .hero-container {
    max-width: 1400px;
    grid-template-columns: 1fr 1fr;
    gap: 6rem;
    padding: 0 4rem;
  }

  .hero-title {
    font-size: 3.5rem;
  }

  .hero-subtitle {
    font-size: 1.35rem;
  }

  .hero-buttons {
    flex-direction: row;
    gap: 3rem;
  }

  .image-container {
    width: 350px;
    height: 350px;
  }

  .section {
    padding: 5.5rem 0;
  }

  .section-title {
    font-size: 3rem;
  }

  .section-header {
    margin-bottom: 5.5rem;
  }

  .hero {
    min-height: 100vh;
  }
}

@media (min-width: 1601px) {
  .container {
    max-width: 1600px;
    padding: 0 5rem;
  }

  .hero-container {
    max-width: 1600px;
    grid-template-columns: 1fr 1fr;
    gap: 8rem;
    padding: 0 5rem;
  }

  .hero-title {
    font-size: 3.75rem;
  }

  .hero-subtitle {
    font-size: 1.4rem;
  }

  .hero-buttons {
    flex-direction: row;
    gap: 3.5rem;
  }

  .image-container {
    width: 400px;
    height: 400px;
  }

  .section {
    padding: 6rem 0;
  }

  .section-title {
    font-size: 3.25rem;
  }

  .section-header {
    margin-bottom: 6rem;
  }

  .hero {
    min-height: 100vh;
  }
}
</style>
