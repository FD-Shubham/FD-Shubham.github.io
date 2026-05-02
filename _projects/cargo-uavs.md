---
layout: project
title: "Autonomous Cargo UAVs: Hyperlaunch & Hypercopter"
org: "F-Drones · UAV Systems Engineer"
subtitle: "End-to-end MVP development and commercial deployment of two long-range autonomous delivery drones for offshore cargo operations."
tech: [ArduPilot, Python, Computer Vision, RTK GPS, HITL / SITL, MAVLink, Offshore Ops]
permalink: /projects/cargo-uavs/
---

## The Vehicles

<div class="project-media">
  <div class="project-video">
    <iframe src="https://www.youtube.com/embed/DlPiFvWb7Ys" title="Hypercopter — F-Drones" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
  <p class="project-media-caption">Hypercopter — multirotor cargo UAV for short-range offshore delivery</p>

  <div class="project-video">
    <iframe src="https://www.youtube.com/embed/c7JU2yI_ARU?list=PL1HByOdzg_xHiZywH41sfafbXqDZwv2Zp" title="Hyperlaunch — F-Drones" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
  <p class="project-media-caption">Hyperlaunch — fixed-wing VTOL for long-range cargo delivery</p>
</div>

## Overview

At F-Drones, I was the lead engineer on the end-to-end development of two autonomous cargo delivery drones — Hypercopter (multirotor) and Hyperlaunch (fixed-wing VTOL) — from first prototype through commercial offshore deployment.

Both vehicles were designed to operate between vessels and offshore oil platforms, requiring reliable performance in high-wind, GPS-degraded, and magnetically noisy environments. I owned the full stack: autopilot integration, sensor fusion, flight test planning, and precision landing.

## What I Built

- **Autopilot Integration** — Full ArduPilot configuration and tuning for both airframes. Integrated RTK/dual-GPS setups to maintain precision navigation in environments with high magnetic interference from ship superstructures.
- **Precision Landing System** — Developed and deployed a computer vision landing system using static H-Markers on vessel decks, significantly improving VTOL touchdown accuracy during autonomous approaches.
- **Flight Log Analysis Pipeline** — Built tooling in Python to parse and analyze ArduPilot flight logs, enabling rapid identification of control anomalies and regression testing across firmware versions.
- **HITL / SITL Validation** — Designed hardware-in-the-loop and software-in-the-loop simulation workflows that ran before every airframe modification, reducing the risk surface for offshore test campaigns.
- **Ground Control Software** — Contributed to custom GCS development and managed version control workflows across the engineering team via GitHub.

## Testing & Deployment

Over 100 hours of experimental flight testing across indoor arenas, open fields, and offshore vessel decks. The vehicles completed multiple commercial cargo runs, validating the full autonomy stack under real operating conditions.
