---
# An instance of the Experience widget.
# Documentation: https://wowchemy.com/docs/page-builder/
widget: experience

# This file represents a page section.
headless: true

# Order that this section appears on the page.
weight: 30

title: Experience
subtitle:

# Date format for experience
#   Refer to https://wowchemy.com/docs/customization/#date-format
date_format: Jan 2006

# Experiences.
#   Add/remove as many `experience` items below as you like.
#   Required fields are `title`, `company`, and `date_start`.
#   Leave `date_end` empty if it's your current employer.
#   Begin multi-line descriptions with YAML's `|2-` multi-line prefix.
experience:
  - title: Doctoral Researcher
    company: EPFL, MLAI, Prof. Mackenzie Weygandt Mathis
    company_url: 'http://www.mackenziemathislab.org/'
    company_logo: mathis
    location: Geneva, Switzerland
    date_start: '2023-05-01'
    date_end: '2027-05-01'
    description: |2-
      * Develop novel representation learning methods for large-scale biological time-series, resulting in Unified CEBRA, a framework for integrating neural recordings across experiments (under review).
      * Led the development of an augmented-reality platform combining game engine, hardware and behavioral experiments, coordinating a 20-author collaboration across three laboratories ([Benquet et al. 2026](#publications)).
      * Mentored 6 MSc and semester students, providing technical guidance on machine learning and software development.

  - title: Research Software Engineer
    company: EPFL, MLAI
    company_url: 'http://www.mackenziemathislab.org/'
    company_logo: mathis
    location: Geneva, Switzerland
    date_start: '2022-10-01'
    date_end: '2023-05-01'
    description: |2-
      * Core contributor to CEBRA, an open-source machine learning framework ([Nature, 2023](https://www.nature.com/articles/s41586-023-06031-6), +1000 GitHub stars).
      * Developed new model architectures, data management & inference pipelines, reproducible API, and software structure.

  - title: Visiting Graduate Student
    company: Harvard University, Uchida laboratory
    company_url: 'https://projects.iq.harvard.edu/uchidalab/home'
    company_logo: harvard
    location: Cambridge, US
    date_start: '2022-02-15'
    date_end: '2022-09-01'
    description: |2-
      * Compared latent representations in recurrent neural networks and biological neural populations during decision making to study biological computation.

  - title: R&D ML Engineer Intern
    company: Rhythm Diagnostic Systems (Medtech)
    company_url: 'https://rdsdiag.com/'
    company_logo: rds
    location: Strasbourg, France
    date_start: '2021-08-01'
    date_end: '2022-02-01'
    description: |2-
      * Evaluated machine learning algorithms for ECG and PPG signal quality assessment to improve a wearable cardiac monitoring device.
      * Designed and benchmarked anomaly detection pipelines on clinical and synthetic datasets, comparing supervised and density estimation approaches.
      * Built reproducible evaluation pipelines and introduced application-specific performance metrics to balance clinical safety, data availability, and computational efficiency.

design:
  columns: '2'
---
