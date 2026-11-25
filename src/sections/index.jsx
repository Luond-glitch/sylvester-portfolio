import Section from '../components/SectionTitle'
import ExperienceTimeline from '../components/ExperienceTimeline'
import ProjectCard from '../components/ProjectCard'
import ImageGallery from '../components/ImageGallery'
import Rating from '../components/Rating'
import ContactForm from '../components/ContactForm'
import SocialLinks from '../components/SocialLinks'
import experience from '../data/experience'
import education from '../data/education'
import skills from '../data/skills'
import { projects, founded } from '../data/projects'
import { gallery } from '../data/galleries'
import { site } from '../data/site'

export const About = () => (
  <Section id="about" title="About" accent="Me" sub="I work where environmental science, software engineering, cybersecurity and community leadership meet.">
    <div className="card"><p>I am an undergraduate in Environmental Science and Technology at the Co-operative University of Kenya. I pair that grounding in climate, natural resources and sustainable development with practical skills in software development, cybersecurity and GIS, so that environmental and community challenges can be tackled with digital tools. I lead and found organisations and initiatives that connect youth, communities and institutions to the Sustainable Development Goals, with a focus on climate resilience and the blue economy.</p></div>
  </Section>)
export const Experience = () => <Section id="experience" title="Professional" accent="Experience & Leadership" sub="Leadership roles across climate, community and campus organisations."><ExperienceTimeline items={experience} /></Section>
export const Education = () => (
  <Section id="education" title="Education &" accent="Training" sub="Formal study and professional training.">
    <div className="grid">{education.map(e => <div className="card" key={e.title}><span className="tag">{e.tag}</span><h3>{e.title}</h3><p>{e.text}</p></div>)}</div></Section>)
export const Projects = () => (
  <Section id="projects" title="Technology" accent="Projects" sub="Digital solutions for mining, fisheries and community organisations.">
    <div className="grid">{projects.map(p => <ProjectCard key={p.id} p={p} />)}</div>
    <h2 style={{ marginTop: 44, fontSize: '1.5rem' }}>Organisations and Initiatives <span>I Founded</span></h2>
    <div className="grid">{founded.map(f => <div className="card" key={f.name}><span className="tag">Founder</span><h3>{f.name}</h3><p>{f.text}</p></div>)}</div>
  </Section>)
export const Skills = () => (
  <Section id="skills" title="Skills &" accent="Competencies" sub="Competencies shown without invented scores.">
    <div className="grid">{Object.entries(skills).map(([k, v]) => <div className="card" key={k}><h3>{k}</h3><div className="chips">{v.map(s => <span key={s}>{s}</span>)}</div></div>)}</div></Section>)
export const ResearchGIS = () => (
  <Section id="research" title="Environmental Research," accent="GIS & Sustainability" sub="Ongoing academic and research work, not published research.">
    <div className="grid">
      <div className="card"><h3>GIS and Spatial Analysis</h3><p>QGIS and Google Earth Pro work, including the study area map for Abimbo Village, Bondo Sub-County, Siaya County, Kenya: boundaries, satellite imagery, georeferencing and map preparation.</p></div>
      <div className="card"><h3>Research Interests</h3><p>Artisanal and small-scale gold mining in Abimbo, water quality, micro-catchment water harvesting, greywater irrigation, tree establishment, ecosystem services, hazardous waste and climate resilience.</p></div>
      <div className="card"><h3>Sustainability</h3><p>Conservation, community-based restoration, climate adaptation, sustainable agriculture, environmental governance and the SDGs.</p></div>
      <div className="slot">Map images (study area, satellite imagery) to be added</div></div></Section>)
export const Impact = () => <Section id="impact" title="Community Work," accent="Leadership & Impact" sub="Conservation, youth, SDG campaigns, partnerships and fieldwork. Photos and captions will be added as supplied." />
export const Gallery = () => <Section id="gallery" title="Photo" accent="Gallery" sub="Click any image to enlarge, then use the arrows or keyboard."><ImageGallery items={gallery} /></Section>
export const Certificates = () => (
  <Section id="certs" title="Certificates &" accent="Achievements">
    <div className="grid">{['Cisco Networking Academy', 'USIU-Africa / Cisco Academy', 'Power Learn Project Academy', 'Aspire Institute'].map(c => <div className="slot" key={c}>{c} certificate: to be added</div>)}</div></Section>)
export const RateMe = () => <Section id="rate" title="Rate" accent="My Portfolio" sub="Tap a star, then tell me what you think."><Rating /></Section>
export const Contact = () => (
  <Section id="contact" title="Let’s" accent="Connect" sub="Open to collaborations, opportunities and partnerships.">
    <div className="grid">
      <div className="card"><h3>Reach me</h3>
        <p>📞 <a className="l" href={`tel:${site.phone}`}>{site.phoneDisplay}</a></p>
        <p>✉️ <a className="l" href={`mailto:${site.email}`}>{site.email}</a></p>
        <p>✉️ <a className="l" href={`mailto:${site.email2}`}>{site.email2}</a></p>
        <p>💬 <a className="l" href={site.whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp</a></p><SocialLinks /></div>
      <div className="card"><ContactForm /></div></div></Section>)
