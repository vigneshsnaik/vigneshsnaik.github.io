---
title: xTend
description: |
  A health emergency device.
period:
  from: "September 2022"
  to: "December 2023"
priority: 4
img: "/assets/works/xTend/thumbnail.webp"
tags:
  - "https://img.shields.io/badge/Arduino-00979D?style=for-the-badge&logo=Arduino&logoColor=white"
  - "https://img.shields.io/badge/Flutter-02569B?style=for-the-badge&logo=Flutter&logoColor=white"
  - "https://img.shields.io/badge/NodeMCU-1B1B1B?style=for-the-badge&logo=NodeMCU&logoColor=white"
  - "https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=Firebase&logoColor=white"
  - "https://img.shields.io/badge/Sensors-FF6F00?style=for-the-badge&logo=Sensors&logoColor=white"
---

#### Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Use Cases](#use-cases)
- [System Architecture](#system-architecture)
- [Key Functionalities](#key-functionalities)
- [Screenshots/Visuals](#screenshotsvisuals)
- [Collaborators](#collaborators)
- [Future Enhancements](#future-enhancements)

---

#### Project Overview

xTend is a comprehensive health emergency management system designed to save lives during the critical "Golden Hour" following a medical emergency. The project includes:

- **xTend App**: A smartphone application for managing health emergencies.
- **xBand**: A smart wearable for detecting accidents and health anomalies.

#### Features

- **Accident Detection**: Using sensors like gyroscopes and accelerometers.
- **Real-Time Health Monitoring**: Tracks heart rate and oxygen levels.
- **Ambulance Summoning**: Automatically dispatches ambulances with the best routes.
- **Hospital Prioritization**: Suggests hospitals based on condition and proximity.
- **Medical Records**: Digital storage for easy retrieval by healthcare providers.
- **Family Notifications**: Alerts family members during emergencies.

#### Technologies Used

##### Hardware

- **ESP32 Board**: Bluetooth and Wi-Fi communication.
- **MAX30100**: Pulse oximeter sensor.
- **MPU6500**: Gyroscope and accelerometer.
- **Heart Beat Pulse Sensor**: For accurate heart rate readings.

##### Software

- **Flutter**: Mobile app development.
- **Firebase**: Backend for data management.
- **Arduino IDE**: Firmware development for xBand.

#### Use Cases

1. **Road Accident Victims**: Immediate help for accident cases.
2. **Elderly Living Alone**: Health monitoring and emergency assistance.
3. **General Health Anomalies**: Early detection of serious health issues.

#### System Architecture

1. **xBand**:

   - Hardware sensors to detect emergencies.
   - Connects to the xTend app via Bluetooth/Wi-Fi.

2. **xTend App**:
   - Cloud-based platform for data synchronization.
   - Interfaces with hospitals, ambulance services, and users.

#### Key Functionalities

- **Emergency Detection**:

  - Sensors monitor conditions like accidents, low oxygen, or abnormal heart rate.
  - Triggers an SOS alert in emergencies.

- **Medical Records**:
  - Securely stores treatment history in the cloud.
  - Provides instant access to doctors.

#### Collaborators

- <a href="https://github.com/abhinavmohanan" target="_blank">Abhinav M M</a>
- <a href="https://github.com/anishpillai2002" target="_blank">Anish Pillai</a>
- **<a href="https://github.com/vigneshsnaik" target="_blank">Vignesh S Naik</a>**
