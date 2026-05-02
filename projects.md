---
layout: default
title: Projects
permalink: /projects/
---

<div class="page-hero">
  <p class="page-eyebrow">Work</p>
  <h1 class="page-hero-title">Projects</h1>
  <p class="page-hero-subtitle">End-to-end autonomous systems — from simulation to deployed hardware.</p>
</div>

<div class="project-list">

  <div class="project-card-full">
    <div class="card-accent-left" style="background: #d4f55a;"></div>
    <div class="card-full-body">
      <div class="card-org">CMU AIR Lab</div>
      <h2 class="card-title">Flying Hand — Aerial Robotic Manipulation</h2>
      <div class="card-role">Graduate Researcher | 2023–Present</div>
      <p class="card-desc">Developing a fully-actuated hexarotor for precise non-destructive testing of industrial assets. Focuses on robust fly-by-wire interaction controllers and precise state estimation for contact-based tasks.</p>
      <ul class="card-bullets">
        <li><strong>Platform Development</strong> — Building a fully-actuated hexarotor capable of exerting 6-DoF wrenches, enabling direct physical interaction and contact-based NDT of industrial assets.</li>
        <li><strong>Control &amp; State Estimation</strong> — Implementing an interaction controller on PX4 and fusing LiDAR, IMU, and depth camera data via EKF for reliable localization in GPS-denied, high-interference environments near metallic structures.</li>
        <li><strong>Simulation</strong> — Building SITL models in ROS/Gazebo to validate control allocation and flight envelopes before live hardware testing.</li>
        <li><strong>Sensing</strong> — Integrating ATI Gamma F/T sensor for contact force measurement during inspection tasks.</li>
      </ul>
      <div class="card-chips">
        <span class="chip">PX4</span>
        <span class="chip">CubeOrange+</span>
        <span class="chip">ROS 2</span>
        <span class="chip">EKF</span>
        <span class="chip">F/T Sensing</span>
        <span class="chip">VIO</span>
        <span class="chip">Gazebo</span>
        <span class="chip">C++</span>
      </div>
      <a href="/projects/flying-hand/" class="section-link card-view-link">View Details →</a>
    </div>
  </div>

  <div class="project-card-full">
    <div class="card-accent-left" style="background: #5b8fff;"></div>
    <div class="card-full-body">
      <div class="card-org">F-Drones</div>
      <h2 class="card-title">Autonomous Cargo UAVs — Hyperlaunch &amp; Hypercopter</h2>
      <div class="card-role">UAV Systems Engineer | 2021–2023</div>
      <p class="card-desc">Spearheaded end-to-end development of two MVP autonomous cargo delivery drones for offshore operations. Led autopilot integration, rigorous flight log analysis, and deployed a computer-vision precision landing system using static H-markers.</p>
      <ul class="card-bullets">
        <li><strong>Autopilot &amp; Flight Control</strong> — Led ArduPilot-based autopilot development, integration, and tuning on STM32 controllers for Hypercopter (heavy-lift hexacopter) and Hyperlaunch (biplane octa-rotor tailsitter VTOL), improving flight performance and reliability.</li>
        <li><strong>Sensor Fusion &amp; Navigation</strong> — Implemented and tuned EKF3 sensor fusion and PID controllers for position, attitude, and altitude. Integrated RTK GPS and dual-GPS moving baseline for precision navigation near vessels in high magnetic-interference environments.</li>
        <li><strong>Computer Vision Landing</strong> — Spearheaded development and testing of a precision landing system using OpenCV and NVIDIA Jetson Nano, increasing autonomous VTOL landing accuracy on moving vessels from 30% to 95%.</li>
        <li><strong>Simulation &amp; Testing</strong> — Built SITL physics and graphics models for proprietary VTOL platforms. Led 100+ hours of structured flight testing and SIL/HIL-based firmware regression testing, reducing system failure rates by 15%.</li>
        <li><strong>Systems Engineering</strong> — Applied V-Model lifecycle to UAV development. Designed quality control processes and defect traceability systems, reducing production time by 50%.</li>
        <li><strong>Communication Systems</strong> — Designed an in-house C2 relay system integrating dual-band (2.4 GHz / 900 MHz) telemetry links. Led alpha/beta testing of cloud-based GCS for maritime logistics.</li>
      </ul>
      <div class="card-chips">
        <span class="chip">ArduPilot</span>
        <span class="chip">EKF3</span>
        <span class="chip">RTK GPS</span>
        <span class="chip">OpenCV</span>
        <span class="chip">SITL/HITL</span>
        <span class="chip">SolidWorks</span>
        <span class="chip">Python</span>
        <span class="chip">Systems Engineering</span>
      </div>
      <a href="/projects/cargo-uavs/" class="section-link card-view-link">View Details →</a>
    </div>
  </div>

  <div class="project-card-full" style="flex-direction: column;">
    <img src="/assets/images/skytroopers/hero.jpg" alt="Skytroopers Final Prototype — AeroDesign Florida 2020" style="width: 100%; height: 240px; object-fit: cover; object-position: center bottom; display: block;">
    <div style="display: flex; flex: 1;">
      <div class="card-accent-left" style="background: #ff6b6b;"></div>
      <div class="card-full-body">
        <div class="card-org">SAE Aero Design — MIT-WPU</div>
        <h2 class="card-title">The Skytroopers — Heavy-Lift Fixed-Wing UAV</h2>
        <div class="card-role">Captain → Senior Advisor | 2018–2021</div>
        <ul class="card-bullets">
          <li><strong>Mechanical Design &amp; Analysis</strong> — Full SolidWorks CAD, FEA (ANSYS), and CFD pipeline for airframe structural integrity and aerodynamic optimization. Used XFLR5 for airfoil selection and stability margin verification.</li>
          <li><strong>Aircraft Built</strong> — Designed and fabricated 5 aircraft across 3 years including a tandem-wing micro-class (1.5 kg payload), box-wing regular-class (10 kg payload), and heavy-lift fixed-wing (7.5 kg payload) using laser-cut balsa, 3D printing, and carbon-fibre composites.</li>
          <li><strong>Competition Results</strong> — Won Outstanding Technical Presentation at SAE Aero Design East Florida 2020, 3rd place Asia-Pacific, Best Technical Presentation 2019, and All India Rank 2 in Fabrication Report 2021.</li>
          <li><strong>Leadership &amp; Fundraising</strong> — Led 30-member team across 3 years. Raised USD 9,600 in sponsorships. Conducted SolidWorks workshop for 40 students generating INR 40,000.</li>
        </ul>
        <div class="card-chips">
          <span class="chip">SolidWorks</span>
          <span class="chip">ANSYS FEA</span>
          <span class="chip">XFLR5</span>
          <span class="chip">CFD</span>
          <span class="chip">Composites</span>
          <span class="chip">Laser Cutting</span>
          <span class="chip">Team Lead</span>
        </div>
        <div style="display: flex; gap: 8px; overflow-x: auto; margin-top: 20px; padding-bottom: 4px; scrollbar-width: thin;">
          <img src="/assets/images/skytroopers/flight.jpg" alt="Aircraft in flight" style="height: 110px; width: 160px; object-fit: cover; border-radius: 6px; flex-shrink: 0;">
          <img src="/assets/images/skytroopers/cad-render.png" alt="SolidWorks CAD render" style="height: 110px; width: 160px; object-fit: cover; border-radius: 6px; flex-shrink: 0;">
          <img src="/assets/images/skytroopers/frame-grass.jpg" alt="Balsa frame structure" style="height: 110px; width: 160px; object-fit: cover; border-radius: 6px; flex-shrink: 0;">
          <img src="/assets/images/skytroopers/fuselage.jpg" alt="Fuselage skeleton build" style="height: 110px; width: 160px; object-fit: cover; border-radius: 6px; flex-shrink: 0;">
          <img src="/assets/images/skytroopers/team-comp.jpg" alt="Team at competition" style="height: 110px; width: 160px; object-fit: cover; border-radius: 6px; flex-shrink: 0;">
          <img src="/assets/images/skytroopers/florida-tarmac.jpg" alt="Aircraft at Florida competition" style="height: 110px; width: 160px; object-fit: cover; border-radius: 6px; flex-shrink: 0;">
          <img src="/assets/images/skytroopers/iitm-event.jpg" alt="Boeing IIT-M event" style="height: 110px; width: 160px; object-fit: cover; border-radius: 6px; flex-shrink: 0;">
        </div>
        <a href="/projects/skytroopers/" class="section-link card-view-link">View Details →</a>
      </div>
    </div>
  </div>

</div>
