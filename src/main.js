import './assets/main.css'
// import '@fortawesome/fontawesome-free/css/all.min.css'



import { createApp } from 'vue'
import App from '@/App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faPhone,faEnvelope,faLocationDot,faGlobe ,faBriefcase,faGraduationCap,faLightbulb,faDownload} from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp, faLinkedin,faGithub } from '@fortawesome/free-brands-svg-icons';

library.add(faPhone,faEnvelope,faLocationDot,faGlobe,faBriefcase,faGraduationCap,faLightbulb,faDownload,faWhatsapp, faLinkedin,faGithub)

let app=createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')