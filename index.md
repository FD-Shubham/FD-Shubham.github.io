---
layout: default
title: Home
---
# Hi, I'm Shubham Saboo
UAV Systems Engineer with experience in autonomous flight, CV-based landing systems, and long-range VTOL UAVs.


![PLACEHOLDER FOR PROFILE PICTURE]


## Latest Projects
{% for project in site.projects limit:3 %}
- [{{ project.title }}]({{ project.url }}) — {{ project.short }}
{% endfor %}
