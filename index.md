---
layout: default
title: Home
---
# Hi, I'm Shubham Saboo
I am a robotics engineer passionate about building autonomous systems that expand the boundaries of what robots can do in the real world. I’m currently pursuing the M.S. in Robotics (MRSD) at Carnegie Mellon University, where I’m focusing on perception, motion planning, and robust autonomy for aerial and ground robots.

Before CMU, I worked as a UAV Systems Engineer at F-drones, building long-range autonomous delivery aircraft and developing reliable flight autonomy that works in challenging offshore environments. My background includes UAV design, flight controls, computer vision for landing systems, and energy-based range estimation, backed by hands-on testing and deployment experience.

I love building systems end-to-end — from simulation to embedded implementation — and I thrive at the intersection of robotics, autonomy, and reliability engineering.

![WhatsApp Image 2025-10-09 at 19 50 23_cdb5ed96](https://github.com/user-attachments/assets/d4ee8fdd-1052-414b-8a87-90c315b3b329)

## Latest Projects
{% for project in site.projects limit:3 %}
- [{{ project.title }}]({{ project.url }}) — {{ project.short }}
{% endfor %}
