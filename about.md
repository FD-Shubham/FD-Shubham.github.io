---
layout: default
title: About
permalink: /about/
---

<div class="page-header">
  <p class="page-eyebrow">Background</p>
  <h1 class="page-title">About</h1>
</div>

<div class="about-layout">
  <div>
    <div class="bio-block">
      <div class="section-label">Bio</div>
      <p>I'm a robotics engineer completing my Master's in Robotic Systems Development (MRSD) at <strong>Carnegie Mellon University</strong>, where I work in the Aerial Intelligent Robotics (AIR) Lab on fully-actuated aerial manipulation platforms.</p>
      <p>My work spans the full stack — from low-level embedded autopilot firmware on PX4 and ArduPilot, to state estimation pipelines using visual-inertial odometry, to high-level motion planning and control for contact-rich tasks.</p>
      <p>Before CMU, I led the development of <strong>two deployed offshore cargo UAVs</strong> at F-Drones in Singapore, building end-to-end from autopilot integration to computer-vision precision landing. I also captained a 30-person team to compete in the SAE Aero Design competition, winning "Outstanding Technical Presentation" at the Asia-Pacific level.</p>
    </div>

    <div class="section-label">Experience</div>
    <div class="timeline">
      <div class="timeline-item">
        <div class="tl-year">2024–25</div>
        <div>
          <div class="tl-title">Graduate Researcher</div>
          <div class="tl-org">CMU AIR Lab · Pittsburgh, PA</div>
          <div class="tl-desc">Aerial manipulation with fully-actuated multirotors. VIO state estimation, omni-directional wrench control, contact force sensing for NDT.</div>
        </div>
      </div>
      <div class="timeline-item">
        <div class="tl-year">2021–23</div>
        <div>
          <div class="tl-title">UAV Systems Engineer</div>
          <div class="tl-org">F-Drones · Singapore</div>
          <div class="tl-desc">End-to-end MVP of two cargo UAVs. Autopilot integration, RTK/dual-GPS sensor fusion, computer-vision precision landing on moving vessels.</div>
        </div>
      </div>
      <div class="timeline-item">
        <div class="tl-year">2018–21</div>
        <div>
          <div class="tl-title">Team Captain &amp; Mechanical Design Head</div>
          <div class="tl-org">SAE Aero Design · MIT World Peace University</div>
          <div class="tl-desc">Led 30-member team. Full CAD/FEA/CFD pipeline for heavy-lift fixed-wing aircraft. Won "Outstanding Technical Presentation", Asia-Pacific.</div>
        </div>
      </div>
      <div class="timeline-item">
        <div class="tl-year">2019–23</div>
        <div>
          <div class="tl-title">B.Tech, Mechanical Engineering</div>
          <div class="tl-org">MIT World Peace University</div>
          <div class="tl-desc">Focus on dynamics, control systems, and robotics. Introduced to UAV design through the Aero Design competition team.</div>
        </div>
      </div>
    </div>
  </div>

  <div class="sidebar">
    <img src="/assets/images/Profile.jpg" alt="Shubham Saboo" class="about-photo">

    <div class="sidebar-section">
      <div class="sidebar-label">Details</div>
      <div class="sidebar-row"><span class="sidebar-key">Location</span><span class="sidebar-val">Pittsburgh, PA</span></div>
      <div class="sidebar-row"><span class="sidebar-key">Program</span><span class="sidebar-val">CMU MRSD '25</span></div>
      <div class="sidebar-row"><span class="sidebar-key">Focus</span><span class="sidebar-val">Aerial Robotics</span></div>
      <div class="sidebar-row"><span class="sidebar-key">Email</span><span class="sidebar-val" style="font-size:10px;">spsaboo@andrew.cmu.edu</span></div>
    </div>

    <div class="sidebar-section">
      <div class="sidebar-label">Proficiency</div>
      <div class="skills-list" id="skillsList">
        <div class="skill-row"><div class="skill-name">C++ / Python</div><div class="skill-bar-bg"><div class="skill-bar-fill" data-width="92"></div></div></div>
        <div class="skill-row"><div class="skill-name">PX4 / ArduPilot</div><div class="skill-bar-bg"><div class="skill-bar-fill" data-width="88"></div></div></div>
        <div class="skill-row"><div class="skill-name">ROS 2</div><div class="skill-bar-bg"><div class="skill-bar-fill" data-width="85"></div></div></div>
        <div class="skill-row"><div class="skill-name">Control Theory</div><div class="skill-bar-bg"><div class="skill-bar-fill" data-width="82"></div></div></div>
        <div class="skill-row"><div class="skill-name">State Estimation</div><div class="skill-bar-bg"><div class="skill-bar-fill" data-width="78"></div></div></div>
        <div class="skill-row"><div class="skill-name">Motion Planning</div><div class="skill-bar-bg"><div class="skill-bar-fill" data-width="75"></div></div></div>
      </div>
    </div>
  </div>
</div>

<section>
  <div class="section-label">Focus Areas</div>
  <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:1rem;margin-bottom:1rem;">
    <div class="stack-item" style="flex-direction:column;align-items:flex-start;gap:8px;padding:18px;">
      <div style="font-size:11px;font-weight:600;color:var(--accent);">✦ Autopilot &amp; Flight Control</div>
      <p style="font-size:12px;color:var(--text-muted);line-height:1.65;margin:0;">ArduPilot and PX4 autopilot development, tuning, and integration. EKF3 sensor fusion, PID/LQR control, IMU damping and filtering for robust state estimation in harsh environments.</p>
    </div>
    <div class="stack-item" style="flex-direction:column;align-items:flex-start;gap:8px;padding:18px;">
      <div style="font-size:11px;font-weight:600;color:var(--accent);">✦ Computer Vision &amp; Perception</div>
      <p style="font-size:12px;color:var(--text-muted);line-height:1.65;margin:0;">Precision landing systems using OpenCV and PyTorch on NVIDIA Jetson. Object detection, helipad tracking, and LiDAR-based obstacle avoidance with Dijkstra and Bendy-Ruler algorithms.</p>
    </div>
    <div class="stack-item" style="flex-direction:column;align-items:flex-start;gap:8px;padding:18px;">
      <div style="font-size:11px;font-weight:600;color:var(--accent);">✦ Simulation &amp; Testing</div>
      <p style="font-size:12px;color:var(--text-muted);line-height:1.65;margin:0;">SITL/HITL model development for VTOL platforms. SIL/HIL-based firmware regression testing, V-Model V&amp;V lifecycle, structured flight test planning and post-flight log analysis.</p>
    </div>
    <div class="stack-item" style="flex-direction:column;align-items:flex-start;gap:8px;padding:18px;">
      <div style="font-size:11px;font-weight:600;color:var(--accent);">✦ Systems Engineering</div>
      <p style="font-size:12px;color:var(--text-muted);line-height:1.65;margin:0;">V-Model lifecycle application, requirements analysis, QC process design, defect traceability, and operational SOP development for commercial UAV deployment.</p>
    </div>
    <div class="stack-item" style="flex-direction:column;align-items:flex-start;gap:8px;padding:18px;">
      <div style="font-size:11px;font-weight:600;color:var(--accent);">✦ Aerial Manipulation</div>
      <p style="font-size:12px;color:var(--text-muted);line-height:1.65;margin:0;">Fully-actuated multirotor design for contact-based NDT. 6-DoF wrench control, force/torque sensing integration, and GPS-denied localization near metallic structures.</p>
    </div>
    <div class="stack-item" style="flex-direction:column;align-items:flex-start;gap:8px;padding:18px;">
      <div style="font-size:11px;font-weight:600;color:var(--accent);">✦ Mechanical Design &amp; Prototyping</div>
      <p style="font-size:12px;color:var(--text-muted);line-height:1.65;margin:0;">SolidWorks (Expert), ANSYS FEA, XFLR5, CFD. 3D printing, laser cutting, carbon/glassfibre composites, and rapid prototyping for UAV airframes and sensor mounts.</p>
    </div>
  </div>
</section>

<section>
  <div class="section-label">Skills</div>
  <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:1.5rem 3rem;">
    <div>
      <div style="font-size:10px;font-weight:600;letter-spacing:0.15em;text-transform:uppercase;color:var(--text-faint);margin-bottom:8px;padding-bottom:8px;border-bottom:1px solid var(--border);">Programming &amp; Software</div>
      <p style="font-size:12px;color:var(--text-muted);line-height:1.75;margin:0;">Python, C/C++, MATLAB, Lua, Simulink, Git, Linux, Mission Planner, QGroundControl</p>
    </div>
    <div>
      <div style="font-size:10px;font-weight:600;letter-spacing:0.15em;text-transform:uppercase;color:var(--text-faint);margin-bottom:8px;padding-bottom:8px;border-bottom:1px solid var(--border);">Robotics &amp; Middleware</div>
      <p style="font-size:12px;color:var(--text-muted);line-height:1.75;margin:0;">ROS/ROS 2, PX4, ArduPilot, MAVLink, Gazebo, MuJoCo, Betaflight</p>
    </div>
    <div>
      <div style="font-size:10px;font-weight:600;letter-spacing:0.15em;text-transform:uppercase;color:var(--text-faint);margin-bottom:8px;padding-bottom:8px;border-bottom:1px solid var(--border);">Perception &amp; CV</div>
      <p style="font-size:12px;color:var(--text-muted);line-height:1.75;margin:0;">OpenCV, PyTorch, SLAM, Visual Odometry</p>
    </div>
    <div>
      <div style="font-size:10px;font-weight:600;letter-spacing:0.15em;text-transform:uppercase;color:var(--text-faint);margin-bottom:8px;padding-bottom:8px;border-bottom:1px solid var(--border);">Control &amp; Autonomy</div>
      <p style="font-size:12px;color:var(--text-muted);line-height:1.75;margin:0;">PID/LQR, EKF/UKF, Kalman Filters, State Estimation, Motion Planning, Localization</p>
    </div>
    <div>
      <div style="font-size:10px;font-weight:600;letter-spacing:0.15em;text-transform:uppercase;color:var(--text-faint);margin-bottom:8px;padding-bottom:8px;border-bottom:1px solid var(--border);">Hardware</div>
      <p style="font-size:12px;color:var(--text-muted);line-height:1.75;margin:0;">Pixhawk, NVIDIA Jetson, LiDAR, RTK GPS, IMU, BLDC Motors, ESCs, Arduino, RGB Cameras</p>
    </div>
    <div>
      <div style="font-size:10px;font-weight:600;letter-spacing:0.15em;text-transform:uppercase;color:var(--text-faint);margin-bottom:8px;padding-bottom:8px;border-bottom:1px solid var(--border);">Design &amp; Fabrication</div>
      <p style="font-size:12px;color:var(--text-muted);line-height:1.75;margin:0;">SolidWorks (Expert), Fusion 360, ANSYS, XFLR5, 3D Printing, Laser Cutting, Carbon/Glassfibre Composites, Soldering</p>
    </div>
  </div>
</section>

<section>
  <div class="section-label">Research &amp; Other Projects</div>
  <div class="timeline">
    <div class="timeline-item">
      <div class="tl-year">Pub.</div>
      <div>
        <div class="tl-title">Energy-Based Range Estimation for UAVs</div>
        <div class="tl-org">Under publication</div>
        <div class="tl-desc">Methodology to estimate UAV range from autopilot dataflash logs using energy consumption per flight phase and regression models.</div>
      </div>
    </div>
    <div class="timeline-item">
      <div class="tl-year">F-Drones</div>
      <div>
        <div class="tl-title">In-house C2 Relay System</div>
        <div class="tl-org">F-Drones · Singapore</div>
        <div class="tl-desc">Dual-band (2.4 GHz / 900 MHz) telemetry relay system extending communication beyond radio line-of-sight.</div>
      </div>
    </div>
    <div class="timeline-item">
      <div class="tl-year">F-Drones</div>
      <div>
        <div class="tl-title">SITL Models for Tailsitter &amp; Deca-Copter</div>
        <div class="tl-org">F-Drones · Singapore</div>
        <div class="tl-desc">Physics and graphics SITL models for a patented tailsitter UAV and custom deca-rotor configuration in ArduPilot and RealFlight.</div>
      </div>
    </div>
    <div class="timeline-item">
      <div class="tl-year">MIT-WPU</div>
      <div>
        <div class="tl-title">Scramjet CFD Study</div>
        <div class="tl-org">Final Year Capstone · MIT World Peace University</div>
        <div class="tl-desc">Comparison and validation of turbulence models for hypersonic flow simulation using ANSYS CFD.</div>
      </div>
    </div>
  </div>
</section>
