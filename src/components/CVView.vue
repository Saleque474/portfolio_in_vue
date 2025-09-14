<template>
  <div class="cv-container">
    <div class="cv-view" ref="cvContent">
      <!-- Left Column -->
      <div class="cv-left">
        <div class="profile-header">
          <img
            v-if="profile && profile.profileImage"
            :src="profile.profileImage"
            alt="Profile"
            class="profile-pic"
          />
          <h1 class="profile-name">{{ profile ? profile.name : 'Your Name' }}</h1>
          <p class="profile-title">
            {{ profile ? profile.title : 'Full-Stack Developer' }}
          </p>
        </div>

        <div class="left-section">
          <h3 class="section-title-left">Contact</h3>
          <div v-if="profile" class="contact-info">
            <p>
              <font-awesome-icon :icon="['fas', 'phone']" class="icon" />
              {{ profile.contact.phone || 'N/A' }}
            </p>
            <p>
              <font-awesome-icon :icon="['fas', 'envelope']" class="icon" />
              {{ profile.contact.email }}
            </p>
            <p>
              <font-awesome-icon :icon="['fas', 'location-dot']" class="icon" />
              {{ profile.contact.location || 'N/A' }}
            </p>
            <p v-if="profile.contact.website">
              <font-awesome-icon :icon="['fas', 'globe']" class="icon" />
              {{ profile.contact.website }}
            </p>
          </div>
        </div>

        <div class="left-section">
          <h3 class="section-title-left">Objective</h3>
          <p class="objective-text">{{ profile ? profile.about : '' }}</p>
        </div>

        <div class="left-section">
          <h3 class="section-title-left">Skills</h3>
          <div class="skills-list">
            <div v-for="skill in skills" :key="skill.name" class="skill-item">
              <p>{{ skill.name }}</p>
              <div class="progress-bar">
                <div class="progress" :style="{ width: skill.rating + '%' }"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Right Column -->
      <!-- Right Column -->
      <div class="cv-right">
        <div class="right-section">
          <h2 class="section-title-right">
            <font-awesome-icon :icon="['fas', 'briefcase']" class="icon" /> Work Experience
          </h2>
          <div v-for="exp in experience" :key="exp.role + exp.organization" class="experience-item">
            <div class="item-header">
              <h4 class="item-title">{{ exp.role }}</h4>
              <span class="item-date">{{ exp.period }}</span>
            </div>
            <h5 class="item-subtitle">{{ exp.organization }}</h5>
            <p class="item-description">{{ exp.description }}</p>
          </div>
        </div>

        <div class="right-section">
          <h2 class="section-title-right">
            <font-awesome-icon :icon="['fas', 'graduation-cap']" class="icon" /> Education
          </h2>
          <!-- Placeholder for Education -->
          <div class="experience-item">
            <div class="item-header">
              <h4 class="item-title">Bachelor of Science in Industrial Engineering</h4>
              <span class="item-date">2018 - 2022</span>
            </div>
            <h5 class="item-subtitle">National Institute of Textile Engineering and Research</h5>
            <!-- <p class="item-description">
              Graduated with honors, focusing on software development and artificial intelligence.
            </p> -->
          </div>
        </div>

        <div class="right-section">
          <h2 class="section-title-right">
            <font-awesome-icon :icon="['fas', 'lightbulb']" class="icon" /> Projects
          </h2>
          <div v-for="project in projects" :key="project.title" class="experience-item">
            <div class="item-header">
              <h4 class="item-title">{{ project.title }}</h4>
            </div>
            <p class="item-description">{{ project.description }}</p>
            <p class="technologies">
              <strong>Technologies:</strong> {{ project.technologies.join(', ') }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="actions">
      <button @click="downloadPDF" class="download-btn">
        <font-awesome-icon :icon="['fas', 'download']" class="icon" /> Download as PDF
      </button>
    </div>
  </div>
</template>

<script>
import html2pdf from 'html2pdf.js';

export default {
  name: 'CVView',
  data() {
    return {
      profile: null,
      experience: [],
      skills: [],
      languages: [],
      projects: [],
      loading: true,
      error: null,
    };
  },
  async mounted() {
    try {
      const base = import.meta.env.BASE_URL || '/';
      const [profileRes, expRes, skillsRes, langRes, projectsRes] = await Promise.all([
        fetch(`${base}data/profile.json`),
        fetch(`${base}data/experience.json`),
        fetch(`${base}data/skills.json`),
        fetch(`${base}data/languages.json`),
        fetch(`${base}data/projects.json`),
      ]);

      this.profile = await profileRes.json();
      this.experience = await expRes.json();
      this.skills = await skillsRes.json();
      this.languages = await langRes.json();
      this.projects = await projectsRes.json();

      this.loading = false;
    } catch (error) {
      console.error('Failed to load CV data:', error);
      this.error = error.message;
      this.loading = false;
    }
  },
  methods: {
    downloadPDF() {
      const element = this.$refs.cvContent;
      const opt = {
        margin: 0,
        filename: 'SA_Saleque_Ahmed_Jony_CV.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
      };

      html2pdf().set(opt).from(element).save();
    },
  },
};
</script>

<style scoped>
.cv-container {
  background: #f0f2f5;
  padding: 2rem;
}

.cv-view {
  display: grid;
  grid-template-columns: 1fr 2fr;
  max-width: 8.5in;
  min-height: 11in;
  margin: 0 auto;
  background: #fff;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  font-family: 'Roboto', sans-serif;
}

/* Left Column */
.cv-left {
  background: #2c3e50;
  color: #ecf0f1;
  padding: 2rem;
}

.profile-header {
  text-align: center;
  margin-bottom: 2rem;
}

.profile-pic {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 5px solid #3498db;
  object-fit: cover;
  margin-bottom: 1rem;
}

.profile-name {
  font-size: 1.8rem;
  margin: 0;
  color: #fff;
  font-weight: 700;
}

.profile-title {
  font-size: 1rem;
  color: #bdc3c7;
  margin-top: 0.25rem;
  font-weight: 300;
}

.left-section {
  margin-bottom: 2rem;
}

.section-title-left {
  font-size: 1.2rem;
  color: #3498db;
  border-bottom: 2px solid #3498db;
  padding-bottom: 0.5rem;
  margin-bottom: 1rem;
  text-transform: uppercase;
}

.contact-info p {
  margin: 0.5rem 0;
  display: flex;
  align-items: center;
}

.contact-info .icon {
  margin-right: 0.75rem;
  color: #3498db;
  text-align: center;
  width: 20px; /* Provide a consistent width for alignment */
}

.objective-text {
  line-height: 1.6;
  font-weight: 300;
}

.skills-list .skill-item {
  margin-bottom: 1rem;
}

.skill-item p {
  margin: 0 0 0.5rem 0;
}

.progress-bar {
  background: #34495e;
  border-radius: 5px;
  height: 8px;
  overflow: hidden;
}

.progress {
  background: #3498db;
  height: 100%;
  border-radius: 5px;
}

/* Right Column */
.cv-right {
  padding: 2.5rem;
}

.right-section {
  margin-bottom: 2.5rem;
}

.section-title-right {
  font-size: 1.5rem;
  color: #2c3e50;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  border-bottom: 3px solid #3498db;
  padding-bottom: 0.5rem;
  margin-bottom: 1.5rem;
}

.section-title-right .icon {
  color: #3498db;
}

.experience-item {
  margin-bottom: 1.5rem;
}

.item-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 0.25rem;
}

.item-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: #34495e;
  margin: 0;
}

.item-date {
  font-size: 0.9rem;
  font-weight: 500;
  color: #2c3e50;
}

.item-subtitle {
  font-size: 1rem;
  font-weight: 500;
  color: #7f8c8d;
  margin: 0 0 0.5rem 0;
}

.item-description {
  color: #555;
  line-height: 1.6;
  margin-bottom: 0.5rem;
}

.technologies {
  font-size: 0.9rem;
  color: #34495e;
}

/* Actions */
.actions {
  text-align: center;
  padding: 1.5rem;
  background: #fff;
}

.download-btn {
  background: #3498db;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background 0.3s ease;
}

.download-btn:hover {
  background: #2980b9;
}

.download-btn .icon {
  margin-right: 8px;
}
</style>
