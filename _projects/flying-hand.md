---
layout: project
title: "Flying Hand: Aerial Robotic Manipulation"
org: "CMU AIR Lab"
status: "In Progress"
subtitle: "A fully-actuated hexarotor designed to perform contact-based non-destructive testing on industrial infrastructure — offshore platforms, bridges, and storage tanks."
tech: [PX4, CubeOrange+, ROS 2, VIO, F/T Sensing, C++, MAVROS]
permalink: /projects/flying-hand/
---

<img class="project-featured-img" src="/assets/images/flying_hand/ContactWall.JPG" alt="CMU AIR Lab outdoor test facility">

## Overview

Traditional inspection of industrial infrastructure — offshore oil platforms, bridge decks, storage tanks — requires scaffolding, rope access, or expensive crawling robots. The Flying Hand brings the sensor directly to the asset: a fully-actuated aerial robot that hovers stably while applying controlled contact forces for non-destructive testing (NDT).

The platform is a custom hexarotor with fixed tilted rotors, enabling it to generate 6-DoF wrenches — three independent forces and three torques — without reorienting the body. This makes sustained, precise contact with arbitrary surfaces possible in a way that conventional multirotors cannot achieve.

## System Architecture

- **Airframe** — Custom fully-actuated hexarotor with fixed tilted motor mounts, designed for wrench generation across all axes while maintaining hover efficiency.
- **Flight Controller** — CubeOrange+ running PX4 firmware, extended with a custom offboard interaction controller via MAVROS.
- **State Estimation** — VIO pipeline fusing an Intel RealSense T265 tracking camera with onboard IMU for GPS-denied indoor localization.
- **Force / Torque Sensing** — ATI Gamma 6-axis F/T sensor at the end-effector, providing ground-truth contact measurements at 1 kHz for closed-loop force control.
- **Compute** — NVIDIA Jetson running the ROS 2 middleware stack for perception, planning, and high-level control.

## Key Challenges

- **Contact stability** — maintaining stable hover while an end-effector applies lateral and normal forces to a surface requires tight coupling between the force controller and the flight controller; small disturbances can trigger oscillation or loss of contact.
- **State estimation under vibration** — rotor wash and structural resonance corrupt IMU measurements; robust filtering is critical for maintaining centimeter-level positioning accuracy during contact tasks.
- **Wrench allocation** — computing rotor speeds to achieve a desired 6-DoF wrench without actuator saturation, while handling the nonlinear coupling between translational and rotational dynamics.
- **Safety in proximity** — operating an unshielded rotor platform within centimeters of rigid infrastructure requires conservative velocity limits, collision-aware trajectory planning, and hardware-level failsafes.

## Current Status

The airframe has been fabricated and initial hover testing is complete. Flight testing of the interaction controller is underway in the CMU AIR Lab indoor arena. Active development is focused on closing the force-control loop with the ATI F/T sensor and validating the VIO pipeline under rotor-induced vibration.

<div class="photo-grid-2">
  <img src="/assets/images/flying_hand/piloting.JPG" alt="Piloting the Flying Hand at CMU outdoor arena">
  <img src="/assets/images/flying_hand/ContactWall.JPG" alt="CMU AIR Lab outdoor test facility">
  <img src="/assets/images/flying_hand/group_picture.JPG" alt="MRSD team with the Flying Hand hexarotor">
  <img src="/assets/images/flying_hand/group_dimi_john.jpg" alt="Flying Hand team with collaborators">
</div>
