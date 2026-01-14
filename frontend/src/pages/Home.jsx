import React from 'react';
import { ArrowRight, Github, Linkedin, Mail, ExternalLink, Calendar, Award, FileText } from 'lucide-react';
import { profileData, skills, projects, experiences, certifications, publications } from '../data/mock';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-5xl mx-auto text-center fade-in-up">
          <div className="mb-6">
            <span className="label-text text-muted-foreground">SOFTWARE DEVELOPER</span>
          </div>
          <h1 className="hero-title mb-6">
            {profileData.name}
          </h1>
          <p className="text-big text-muted-foreground mb-8 max-w-3xl mx-auto">
            {profileData.tagline}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="#projects" className="btn-accent">
              View Projects <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#contact" className="btn-primary">
              Get In Touch
            </a>
          </div>
          <div className="flex items-center justify-center gap-6 mt-12">
            <a
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href={profileData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href={`mailto:${profileData.email}`}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <span className="label-text text-primary">01. ABOUT ME</span>
            <h2 className="section-title mt-4">Who I Am</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-regular text-muted-foreground leading-relaxed mb-6">
                {profileData.bio}
              </p>
              <p className="text-regular text-muted-foreground leading-relaxed">
                When I'm not coding, you can find me contributing to open-source projects, 
                writing technical articles, or exploring new technologies and frameworks.
              </p>
            </div>
            <div className="space-y-4">
              <div className="portfolio-card">
                <div className="text-4xl font-bold text-primary mb-2">4+</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">Years Experience</div>
              </div>
              <div className="portfolio-card">
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">Projects Completed</div>
              </div>
              <div className="portfolio-card">
                <div className="text-4xl font-bold text-primary mb-2">15+</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">Technologies Mastered</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 bg-secondary/30">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <span className="label-text text-primary">02. SKILLS</span>
            <h2 className="section-title mt-4">Technical Expertise</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skillGroup, index) => (
              <div key={index} className="portfolio-card">
                <h3 className="text-xl font-bold mb-4 text-primary">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-sm bg-background border border-border text-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <span className="label-text text-primary">03. PROJECTS</span>
            <h2 className="section-title mt-4">Featured Work</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div key={project.id} className="portfolio-card group">
                <div className="aspect-video bg-secondary mb-4 overflow-hidden">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-xs bg-primary/10 text-primary border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
                  >
                    <Github className="w-4 h-4" /> Code
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:underline flex items-center gap-1"
                    >
                      <ExternalLink className="w-4 h-4" /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6 bg-secondary/30">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <span className="label-text text-primary">04. EXPERIENCE</span>
            <h2 className="section-title mt-4">Work History</h2>
          </div>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="portfolio-card">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                    <div className="text-primary font-medium">{exp.company}</div>
                    <div className="text-sm text-muted-foreground">{exp.location}</div>
                  </div>
                  <div className="text-sm text-muted-foreground mt-2 md:mt-0 flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {new Date(exp.startDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })} - 
                    {exp.current ? 'Present' : new Date(exp.endDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4">{exp.description}</p>
                <div className="space-y-2">
                  {exp.achievements.map((achievement, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-sm">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-muted-foreground">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-6">Certifications</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {certifications.map((cert) => (
                <div key={cert.id} className="portfolio-card flex items-start gap-4">
                  <Award className="w-8 h-8 text-primary flex-shrink-0" />
                  <div>
                    <h4 className="font-bold mb-1">{cert.title}</h4>
                    <div className="text-sm text-muted-foreground">{cert.issuer}</div>
                    <div className="text-xs text-muted-foreground mt-1">
                      {new Date(cert.date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Publications */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-6">Publications & Articles</h3>
            <div className="space-y-4">
              {publications.map((pub) => (
                <a
                  key={pub.id}
                  href={pub.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="portfolio-card flex items-start gap-4 group"
                >
                  <FileText className="w-6 h-6 text-primary flex-shrink-0" />
                  <div className="flex-1">
                    <h4 className="font-bold mb-1 group-hover:text-primary transition-colors">{pub.title}</h4>
                    <div className="text-sm text-muted-foreground">{pub.publisher} • {new Date(pub.date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-12">
            <span className="label-text text-primary">05. CONTACT</span>
            <h2 className="section-title mt-4">Get In Touch</h2>
          </div>
          <p className="text-regular text-muted-foreground mb-8">
            I'm currently open to new opportunities and interesting projects. 
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="portfolio-card text-center">
              <Mail className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="text-sm text-muted-foreground mb-2">Email</div>
              <a href={`mailto:${profileData.email}`} className="text-sm font-medium hover:text-primary transition-colors">
                {profileData.email}
              </a>
            </div>
            <div className="portfolio-card text-center">
              <Linkedin className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="text-sm text-muted-foreground mb-2">LinkedIn</div>
              <a href={profileData.linkedin} target="_blank" rel="noopener noreferrer" className="text-sm font-medium hover:text-primary transition-colors">
                Connect
              </a>
            </div>
            <div className="portfolio-card text-center">
              <Github className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="text-sm text-muted-foreground mb-2">GitHub</div>
              <a href={profileData.github} target="_blank" rel="noopener noreferrer" className="text-sm font-medium hover:text-primary transition-colors">
                Follow
              </a>
            </div>
          </div>
          <a href={`mailto:${profileData.email}`} className="btn-accent inline-flex">
            Send Message <Mail className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-muted-foreground">
            © 2024 {profileData.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href={profileData.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href={profileData.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href={`mailto:${profileData.email}`} className="text-muted-foreground hover:text-foreground transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;