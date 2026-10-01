export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/team", label: "Our Team" },
  { href: "/events", label: "Events" },
  { href: "/projects", label: "Projects" },
  { href: "/journey", label: "Our Journey" },
] as const;

export const mission =
  "To bridge the gap between engineering theory and real-world application. We build sustainable, community-driven hardware solutions that create tangible, lasting impact beyond the classroom.";

export const vision =
  "To shape a generation of engineers who don't just pass coursework, but actively solve localized problems and deploy resilient systems that endure and serve communities.";

export const processSteps = [
  {
    num: "01",
    title: "Empathize & Define",
    body: "Understand people, uncover real needs, and clearly define the problem worth solving.",
  },
  {
    num: "02",
    title: "Ideate & Prototype",
    body: "Explore possibilities, shape the strongest idea, and turn it into a tangible prototype.",
  },
  {
    num: "03",
    title: "Test, Refine & Implement",
    body: "Gather feedback, improve the solution, and move the refined idea toward real-world impact.",
  },
] as const;

export const stats = [
  { value: "8", label: "Projects we are working on", note: "Active student teams this cycle" },
  { value: "18+", label: "Student members on projects", note: "Across multiple engineering disciplines" },
  { value: "3", label: "Faculty mentors", note: "Guiding design, build, and testing" },
  { value: "100+", label: "Active chapter members", note: "And counting across departments" },
  { value: "6 yrs", label: "Chapter history", note: "Building community impact from the Beginning" },
] as const;

export const projects = [
  // ── 2026 (Active) ──────────────────────────────────────────
  {
    id: "01",
    year: 2026,
    title: "Bio Brick",
    tags: ["Biomass Conversion", "Biofuel Bricks", "Waste to Energy"],
    sdg: "SDG-12",
    status: "Active",
    problem:
      "Large quantities of dry leaves are generated in urban areas, campuses, and residential communities, where open burning is often used for disposal. This practice can release pollutants and particulate matter into the atmosphere while wasting biodegradable biomass that could be converted into a useful resource. There is a need for a low-cost and sustainable method to manage dry leaf waste without relying on open burning.",
    solution:
      "The proposed system converts collected dry leaf biomass into eco-friendly fuel bricks through carbonization under limited-oxygen conditions. The resulting biochar is crushed and mixed with natural binders such as starch and a small amount of wax, then molded and compressed into fuel bricks. This approach provides a productive use for dry leaf waste while reducing the need for open burning, with future scope for utilizing carbonization heat for small-scale energy generation.",
  },
  {
    id: "02",
    year: 2026,
    title: "EcowindX",
    tags: ["Automated Winding", "Motor Efficiency", "Clean Energy"],
    sdg: "SDG-12",
    status: "Active",
    problem:
      "Conventional motor-winding practices can result in uneven coil formation, inconsistent turns, and improper tension, affecting motor performance and energy efficiency. The use of unsuitable or low-quality winding materials and the disposal of damaged coils also contribute to material waste and increased repair costs. There is a need for a precise and consistent method to rewind motor coils while enabling the effective reuse of winding materials.",
    solution:
      "The proposed Automated Motor Winding Machine uses an automated mechanism to rewind damaged or low-quality motor coils with controlled spacing, accurate layering, and consistent wire tension. High-quality copper wire of suitable gauge is used to improve conductivity and durability. By producing more uniform windings and reducing dependence on manual winding, the system aims to improve motor performance, reduce electrical losses, and support efficient coil reuse.",
  },
  {
    id: "03",
    year: 2026,
    title: "Rerubber",
    tags: ["Tyre Recycling", "Eco-Friendly Tiles", "Sustainability"],
    sdg: "SDG-12",
    status: "Active",
    problem:
      "Discarded tyres create a significant environmental challenge because they are non-biodegradable, occupy large amounts of land, and can release harmful substances when improperly burned. Existing tyre-recycling approaches may be costly or limited in availability, resulting in inefficient utilization of tyre waste. There is a need for a practical and sustainable method to convert discarded tyres into useful products.",
    solution:
      "The proposed system converts waste tyres into durable eco-friendly tiles by collecting and shredding discarded tyres into rubber material, processing it, and mixing it with suitable binding materials. The mixture is molded into tile shapes and cured to produce flexible and shock-absorbing tiles suitable for applications such as pavements, playgrounds, and flooring. This approach provides a useful application for tyre waste while promoting material recycling.",
  },
  {
    id: "04",
    year: 2026,
    title: "Hybrid Solar",
    tags: ["Hybrid Energy", "Piezoelectric Harvesting", "Clean Tech"],
    sdg: "SDG-7",
    status: "Active",
    problem:
      "Conventional solar panels primarily generate electricity during periods of sufficient sunlight, resulting in reduced energy generation during cloudy or rainy weather. Rainfall energy is generally underutilized, while separate solar and rain-energy systems can require additional space and infrastructure. Therefore, there is a need for an integrated system that can utilize multiple available weather conditions for energy generation.",
    solution:
      "The proposed Hybrid Energy Panel System integrates a solar panel with piezoelectric sensors within a single structure. During sunlight, the solar panel converts solar energy into electricity, while during rainfall, the mechanical impact and vibrations of raindrops are converted into electrical energy through piezoelectric sensors. The generated energy from both sources is connected to a common battery/storage system, providing a compact approach to multi-source energy harvesting.",
  },
  {
    id: "05",
    year: 2026,
    title: "Aqua BotX",
    tags: ["Aquatic Monitoring", "Autonomous AquaBot", "Water Quality"],
    sdg: "SDG-6",
    status: "Active",
    problem:
      "Lakes and ponds are increasingly affected by floating waste, declining water quality, inadequate fish monitoring, and irregular maintenance. Existing maintenance activities are largely manual and often address individual problems separately, making continuous monitoring and timely intervention difficult. There is a need for an integrated, low-cost, and automated system capable of supporting the maintenance and monitoring of aquatic ecosystems.",
    solution:
      "The proposed AquaBot is an autonomous floating platform that integrates waste collection, water-quality support, fish feeding, and aquatic-life monitoring. A net mechanism collects floating waste, while selected aquatic plants are used for natural water-quality support. A timer-based feeder provides controlled fish feeding, and a camera-based system monitors fish activity and can identify inactive or floating fish for further inspection. The combined system enables multiple aquatic-maintenance functions through a single platform.",
  },
  {
    id: "06",
    year: 2026,
    title: "Detection of Deforestation using Satellite",
    tags: ["Satellite Imaging", "Change Detection", "Environment"],
    sdg: "SDG-15",
    status: "Active",
    problem:
      "Deforestation caused by agriculture, urbanization, and industrial activities is difficult to monitor effectively across large forest regions using traditional manual methods. Delayed detection of forest-cover changes can contribute to biodiversity loss, environmental degradation, and difficulties in managing forest resources. There is a need for a low-cost and automated approach for detecting deforestation over large areas.",
    solution:
      "The proposed system uses satellite imagery from sources such as Landsat or Sentinel to monitor forest regions across different time periods. Image-processing techniques implemented in LabVIEW preprocess and enhance the images, perform segmentation and thresholding, and compare older and newer images to identify reductions in forest cover. The system then highlights suspected deforested regions, provides an estimate of forest loss, and displays before-and-after visual comparisons.",
  },
  {
    id: "07",
    year: 2026,
    title: "SoNar Fire Extinguisher",
    tags: ["Fire Detection", "Acoustic Suppression", "Automation"],
    sdg: "SDG-11",
    status: "Active",
    problem:
      "Indoor fires in homes, hostels, and laboratories can spread rapidly when detection and response are delayed. Conventional fire-safety systems may detect flames without providing precise information about their location or may depend on manual intervention for suppression. This creates a need for an automated system that can detect a fire early, determine its approximate location, and initiate targeted suppression quickly.",
    solution:
      "The proposed system combines flame and temperature sensors for early fire detection with ultrasonic sensors to estimate the distance and direction of the fire source. After detection, the control unit activates an acoustic stage intended to reduce flame intensity, followed by a targeted water-spray mechanism for suppression. This automated two-stage approach aims to provide faster, localized fire response and reduce the spread of indoor fires.",
  },
  {
    id: "08",
    year: 2026,
    title: "AI Based Climate Monitoring",
    tags: ["Drone Monitoring", "AI-Based Analysis", "Climate"],
    sdg: "SDG-13",
    status: "Active",
    problem:
      "Existing climate-monitoring systems are often designed for regional or large-scale analysis and may not provide continuous, real-time environmental data for specific urban or rural locations. Limited localized monitoring can delay the detection of pollution, abnormal environmental conditions, and short-term climate changes. Therefore, a flexible system is needed to collect and analyze environmental data at different localities and altitudes in a timely manner.",
    solution:
      "The proposed AI-Powered Drone-Based Climate Monitoring System uses a drone equipped with environmental sensors to collect localized data such as temperature, humidity, air pressure, particulate matter, UV radiation, and selected greenhouse gases and pollutants. AI-based analysis processes the collected data to identify patterns and unusual environmental changes, while multi-location and multi-altitude monitoring enables broader local coverage. The system can generate alerts and provide environmental insights to support applications such as environmental management, agriculture, urban planning, and disaster response.",
  },

  // ── 2025 (Completed) ───────────────────────────────────────
  {
    id: "09",
    year: 2025,
    title: "Arrhythmia Classification",
    tags: ["ECG Classification", "Bidirectional LSTM", "Healthcare AI"],
    sdg: "SDG-3",
    status: "Completed",
    problem:
      "ECG arrhythmia detection is challenging because cardiac rhythms can be irregular, ECG datasets are often imbalanced, and ECG signals may contain noise, making accurate classification difficult. Conventional analysis can also require significant clinical effort, creating a need for an automated approach that can classify different heartbeat patterns accurately and support continuous ECG monitoring.",
    solution:
      "The proposed SMOTE–Bidirectional LSTM for ECG Arrhythmia Classification system uses SMOTE to address class imbalance in ECG data and a Bidirectional LSTM (Bi-LSTM) model to learn temporal patterns from ECG signals in both directions. The system automatically classifies normal and abnormal heartbeats and is designed to improve arrhythmia detection and support continuous ECG monitoring, achieving high classification accuracy in project evaluations.",
  },
  {
    id: "10",
    year: 2025,
    title: "Fusion 360",
    tags: ["Intelligent Tutoring", "CAD Automation", "AI Assistant"],
    sdg: "SDG-4",
    status: "Completed",
    problem:
      "Learning complex parametric CAD software such as Autodesk Fusion 360 can be difficult for beginners because they must understand 3D modeling, dimensions, constraints, and multiple software tools simultaneously. Existing documentation, video tutorials, and generic AI assistants provide limited real-time awareness of the student's actual CAD model, making it difficult to identify and explain modeling errors at the moment they occur. This creates a feedback gap that can increase frustration and slow the learning process.",
    solution:
      "The proposed Smart Fusion AI Assistant is an intelligent tutoring system integrated directly into the Fusion 360 workspace. It uses a workspace observer and the Fusion 360 API to access the current design state, while an AI backend analyzes structured design information and provides context-aware explanations and step-by-step guidance. The system can validate student designs, identify common modeling and constraint errors, provide interactive feedback, and support voice-based CAD commands, helping beginners learn CAD through real-time, personalized assistance.",
  },
  {
    id: "11",
    year: 2025,
    title: "Vision-Aid",
    tags: ["Assistive Technology", "Object Detection", "Accessibility"],
    sdg: "SDG-3",
    status: "Completed",
    problem:
      "Visually impaired individuals often face difficulties in understanding and navigating their surroundings, which can reduce their independence and increase safety risks. Existing assistive solutions may be expensive, require continuous internet connectivity, or provide limited real-time environmental awareness. Therefore, there is a need for an affordable, offline-capable system that can detect surrounding objects in real time and provide immediate audio guidance.",
    solution:
      "The proposed AI-powered mobile application uses a smartphone camera to capture the user's surroundings and performs on-device object detection without requiring an internet connection. Detected objects are prioritized based on their relevance and converted into clear audio alerts through the smartphone speaker, helping users better understand their environment and navigate more independently.",
  },
  {
    id: "12",
    year: 2025,
    title: "Launch Path",
    tags: ["Decision Intelligence", "Startup Growth", "AI Analytics"],
    sdg: "SDG-8",
    status: "Completed",
    problem:
      "Startups often struggle with unclear market positioning, unorganized data, limited predictive insights, and uncertainty in decision-making. Relying on assumptions and manual tracking can lead to financial risks, delayed growth, and missed business opportunities.",
    solution:
      "Launch Path is an AI-powered Smart Decision Intelligence Platform that converts startup data into actionable insights. It analyzes market and competitor data, tracks financial and business performance, predicts future trends, and provides personalized recommendations to help startup founders make data-driven decisions and plan sustainable growth.",
  },

  // ── 2023 (Completed) ───────────────────────────────────────
  {
    id: "13",
    year: 2023,
    title: "Us 2 U",
    tags: ["Food Donation", "Food Waste", "Community"],
    sdg: "SDG-2",
    status: "Completed",
    problem:
      "Food wastage and hunger continue to exist simultaneously, with excess food from households and restaurants often being discarded while orphanages, nursing homes, and underprivileged communities struggle to access adequate nutrition. The lack of an organized platform to identify people in need, locate surplus food, and coordinate its collection and distribution makes it difficult to efficiently bridge this gap.",
    solution:
      "US TO YOU (U2U) proposes a mobile-based food donation platform that connects individuals and restaurants having surplus food with charitable organizations and communities in need. Users can register, report available food, and provide its location, while the organization identifies verified areas of need and coordinates volunteers to collect and distribute the food. This approach helps reduce food waste while supporting the goal of Zero Hunger.",
  },
  {
    id: "14",
    year: 2023,
    title: "Pranathing",
    tags: ["Emergency Assistance", "Animal Welfare", "Healthcare"],
    sdg: "SDG-3",
    status: "Completed",
    problem:
      "Homeless people and stray or abandoned animals often lack timely access to first aid, medical facilities, rescue services, and community support. Limited awareness, inadequate coordination between people and rescue organizations, and insufficient resources can delay assistance and leave vulnerable individuals and animals without proper care.",
    solution:
      "PRANATHING – A Path to Save Lives proposes an online and offline support platform that helps users report injuries or emergency situations, locate nearby medical facilities, access first-aid guidance, and communicate with rescue personnel. The platform also promotes community participation through rescue reporting, adoption listings, community discussions, and fundraising, creating a coordinated support network for vulnerable people and animals.",
  },
  {
    id: "15",
    year: 2023,
    title: "Smart Traffic Light Control System for Emergency Vehicles",
    tags: ["Emergency Traffic Management", "RFID", "Smart City"],
    sdg: "SDG-9",
    status: "Completed",
    problem:
      "Increasing urban traffic congestion can significantly delay emergency vehicles such as ambulances and fire engines, potentially increasing risks to life and property. Conventional traffic signals generally operate on fixed or predefined timings and may not dynamically prioritize emergency vehicles, making it difficult to create a clear route through congested intersections.",
    solution:
      "The Smart Traffic Light Control System for Emergency Vehicles proposes an intelligent traffic-control system using RFID tags and readers to detect approaching emergency vehicles. The system dynamically adjusts traffic signals to prioritize the emergency vehicle's predicted route and create a clear passage, while considering vehicles approaching from other lanes to reduce unnecessary traffic disruption and improve emergency response movement.",
  },
  {
    id: "16",
    year: 2023,
    title: "WeVolve",
    tags: ["Mental Health", "AI Chatbot", "Youth Support"],
    sdg: "SDG-3",
    status: "Completed",
    problem:
      "Youth and students increasingly face mental health challenges due to academic pressure, busy lifestyles, family issues, and social stigma. Many individuals hesitate to seek professional help because of fear of judgment, lack of awareness, limited accessibility, or the perception that mental health concerns are not serious. This creates a gap in timely emotional support and guidance, affecting their overall well-being and quality of life.",
    solution:
      "WEVOLVE – Be Kind to Your Mind proposes a digital mental-health support platform that provides users with accessible and confidential emotional support. The platform uses NEXA, an AI chatbot, to provide round-the-clock interaction, personalized activities, and guidance based on user responses and behavioural patterns. It also connects users with supportive communities, volunteers, and counsellors, while securely handling user information with consent, helping individuals develop healthier habits and improve their overall well-being.",
  },
  {
    id: "17",
    year: 2023,
    title: "IOT Based Ocean Pollution Monitoring",
    tags: ["IoT Monitoring", "Marine Pollution", "Clean Water"],
    sdg: "SDG-14",
    status: "Completed",
    problem:
      "Ocean pollution threatens marine ecosystems and aquatic life, but existing pollution-monitoring methods are often periodic, costly, and labour-intensive. The lack of continuous, real-time monitoring makes it difficult to detect changes in water quality, identify pollution levels, and respond quickly to environmental anomalies.",
    solution:
      "The IoT-Based Ocean Pollution Monitoring system proposes a network of IoT-enabled sensors deployed on buoys, floating platforms, or underwater locations to continuously measure parameters such as turbidity, pH, dissolved oxygen, and pollutants. Sensor data is transmitted to a central database or cloud platform, where data analytics and machine learning can identify abnormal pollution levels, track pollution patterns, and provide timely environmental insights.",
  },
] as const;



export const team = [
  {
    name: "M.B. Sree Lakshmi",
    role: "President",
    short: "SL",
    photo: "/team/4years/sree_lakshmi.jpg",
    email: "Sreelakshmimb2746@gmail.com",
    linkedin: "https://www.linkedin.com/in/sree-lakshmi",
  },
  {
    name: "Dodle Sai Manogna",
    role: "Vice President",
    short: "MA",
    photo: "/team/4years/manogna.jpg",
    email: "dsaimanognadsaimanogna@gmail.com",
    linkedin: "https://www.linkedin.com/in/dodle-sai-manogna",
  },
  {
    name: "Maneesha Pagadala",
    role: "Secretary",
    short: "MN",
    photo: "/team/4years/maneesha_new.jpg",
    email: "pagadalamaneesha18@gmail.com",
    linkedin: "https://www.linkedin.com/in/maneesha-pagadala",
  },
  {
    name: "Manthini Madhu Charan",
    role: "Treasurer",
    short: "MC",
    photo: "/team/4years/madhu charan.jpeg",
    email: "madhucharan1707@gmail.com",
    linkedin: "https://www.linkedin.com/in/madhucharan-manthini",
  },
  {
    name: "Mannepu Akhilesh",
    role: "Chapter Ambassador",
    short: "AK",
    photo: "/team/4years/akhilesh.jpg",
    email: "mannepuakhilesh@gmail.com",
    linkedin: "https://www.linkedin.com/in/mannepuakhilesh",
  },
  {
    name: "P. Sandrasindhu",
    role: "Chapter Ambassador",
    short: "SS",
    photo: "/team/4years/sindhu.JPG",
    email: "sindhupanyala@gmail.com",
    linkedin: "https://www.linkedin.com/in/sandra-sindhu-reddy-panyala",
  },
  {
    name: "Peddasale Harikrishna",
    role: "Creative Head",
    short: "HK",
    photo: "/team/4years/harikrishna.jpg",
    email: "harikrishnabunty5@gmail.com",
    linkedin: "",
  },
] as const;

export const coordinators = [
  {
    name: "Kamini Shrilekha",
    role: "Resource Co-Ordinator",
    short: "SH",
    photo: "/team/4years/shrilekha.jpg",
    email: "shrilekha2324@gmail.com",
    linkedin: "https://www.linkedin.com/in/kamini-shrilekha-ab15a72a3",
  },
  {
    name: "T. Karthik",
    role: "Photography Co-Ordinator",
    short: "KA",
    photo: "/team/4years/Karthik.png",
    email: "t.karthik9959@gmail.com",
    linkedin: "https://www.linkedin.com/in/karthik-thummanapally",
  },
  {
    name: "Kuthuru Rishik Raj",
    role: "Videography Co-Ordinator",
    short: "RI",
    photo: "/team/4years/rishik.jpeg",
    email: "23r21a05w0@mlrit.ac.in",
    linkedin: "",
  },
  {
    name: "Bhavani Shankar",
    role: "Video editing Co-Ordinator",
    short: "BS",
    photo: "/team/4years/Bhavani Shankar.jpeg",
    email: "Bhavanishankarnalluri@gmail.com",
    linkedin: "https://www.linkedin.com/in/bhavanishankarnalluri",
  },
  {
    name: "Pagidipala Dinesh Kumar",
    role: "Promotion Co-Ordinator",
    short: "DI",
    photo: "/team/4years/dinesh.jpg",
    email: "dineshpandu000@gmail.com",
    linkedin: "",
  },
  {
    name: "Medharametla Bhavith",
    role: "Promotion Co-Ordinator",
    short: "BH",
    photo: "/team/4years/bhavith.jpg",
    email: "medharametlabhavith@gmail.com",
    linkedin: "https://www.linkedin.com/in/bhavith-medharametla",
  },
  {
    name: "Uday Krishna Reddy Mopuri",
    role: "Internal Co-Ordinator",
    short: "UD",
    photo: "/team/4years/uday.jpeg",
    email: "mopuriuday777@gmail.com",
    linkedin: "https://www.linkedin.com/in/mopuri-uday",
  },
  {
    name: "Paluri Bhargavi",
    role: "Internal Co-Ordinator",
    short: "BG",
    photo: "/team/4years/bhargavi.jpg",
    email: "bhargavipaluri00@gmail.com",
    linkedin: "https://www.linkedin.com/in/paluri-bhargavi",
  },
  {
    name: "Alluru Harsha Vardhan",
    role: "External Co-Ordinator",
    short: "HA",
    photo: "/team/4years/harsha.JPG",
    email: "alluruharsha@gmail.com",
    linkedin: "https://www.linkedin.com/in/alluru-harshavardhan",
  },
  {
    name: "Mohammed Zubair",
    role: "Ground works Co-Ordinator",
    short: "ZU",
    photo: "/team/4years/zubair .jpg",
    email: "mdzubair0729@gmail.com",
    linkedin: "https://www.linkedin.com/in/mdzubair01",
  },
  {
    name: "Syed Mehdi Hussain",
    role: "Ground works Co-Ordinator",
    short: "HU",
    photo: "/team/4years/hussain.png",
    email: "syedmehdihussain2911@gmail.com",
    linkedin: "",
  },
] as const;

export const studentDepartments = [
  "Content",
  "Resource",
  "Photography",
  "Videography",
  "Video Editing",
  "Graphic",
  "Projects",
] as const;

export type StudentDepartment = (typeof studentDepartments)[number];

export type StudentMember = {
  name: string;
  department: StudentDepartment;
  year: "II" | "III";
  branch: string;
  short: string;
  photo?: string;
};

function initials(name: string) {
  const parts = name.replace(/\./g, " ").trim().split(/\s+/).filter(Boolean);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export const studentMembers: StudentMember[] = [
  { name: "Aditya Kellampalli", year: "III", branch: "AERO", department: "Content", short: initials("Aditya Kellampalli"), photo: "/team/3years/Aditya.png" },
  { name: "Baindla Yashwanth Kumar", year: "III", branch: "AERO", department: "Resource", short: initials("Baindla Yashwanth Kumar"), photo: "/team/3years/Yashwanth.jpg" },
  { name: "Kishan Gunnu", year: "III", branch: "AERO", department: "Resource", short: initials("Kishan Gunnu"), photo: "/team/3years/kishan.jpg" },
  { name: "Avyakth Reddy Mosali", year: "III", branch: "AERO", department: "Photography", short: initials("Avyakth Reddy Mosali"), photo: "/team/3years/avyakth.jpg" },
  { name: "Nannuta Ruthik", year: "III", branch: "AERO", department: "Resource", short: initials("Nannuta Ruthik"), photo: "/team/3years/Ruthik.jpg" },
  { name: "Pasupulati Roshan", year: "III", branch: "AERO", department: "Video Editing", short: initials("Pasupulati Roshan"), photo: "/team/3years/roshan.png" },
  { name: "Cheruku Sathvika", year: "III", branch: "CSD", department: "Content", short: initials("Cheruku Sathvika"), photo: "/team/3years/sathvika.jpg" },
  { name: "Kankati Achyuth", year: "III", branch: "CSD", department: "Graphic", short: initials("Kankati Achyuth"), photo: "/team/3years/achyuth.jpg" },
  { name: "Perukari Sudha Chandana", year: "III", branch: "CSD", department: "Content", short: initials("Perukari Sudha Chandana"), photo: "/team/3years/Sudha Chandana.jpg" },
  { name: "Ashritha", year: "III", branch: "CSE", department: "Video Editing", short: initials("Ashritha"), photo: "/team/3years/Ashritha .jpg" },
  { name: "Mallela Hemanth Kumar Reddy", year: "III", branch: "CSE", department: "Video Editing", short: initials("Mallela Hemanth Kumar Reddy"), photo: "/team/3years/Hemanth.JPG" },
  { name: "Kempula Shubhra", year: "III", branch: "CSM", department: "Content", short: initials("Kempula Shubhra"), photo: "/team/3years/shubhra.jpg" },
  { name: "Botlagunta Himagiri", year: "III", branch: "ECE", department: "Video Editing", short: initials("Botlagunta Himagiri"), photo: "/team/3years/himagiri.jpg" },
  { name: "Guttula Uma Rishitha", year: "III", branch: "ECE", department: "Graphic", short: initials("Guttula Uma Rishitha"), photo: "/team/3years/Uma.jpg" },
  { name: "Karthikeya", year: "III", branch: "ECE", department: "Video Editing", short: initials("Karthikeya"), photo: "/team/2years/karthikeya.jpeg" },
  { name: "Puppala Harisena Chary", year: "III", branch: "EEE", department: "Graphic", short: initials("Puppala Harisena Chary"), photo: "/team/3years/Harisena .png" },
  { name: "Palli Vivek", year: "III", branch: "MECH", department: "Projects", short: initials("Palli Vivek"), photo: "/team/3years/vivek.png" },
  { name: "Mahathi Reddy", year: "II", branch: "CSD", department: "Content", short: initials("Mahathi Reddy"), photo: "/team/2years/MAHATHI.jpg" },
  { name: "Nelli Manaswini", year: "II", branch: "CSE", department: "Graphic", short: initials("Nelli Manaswini"), photo: "/team/2years/Manaswini Nelli.jpg" },
  { name: "Aditya Narayana", year: "II", branch: "CSE", department: "Graphic", short: initials("Aditya Narayana"), photo: "/team/2years/Aditya Narayan.jpg" },
  { name: "Chaitanya Sai", year: "II", branch: "CSE", department: "Resource", short: initials("Chaitanya Sai"), photo: "/team/2years/Chaitanya.jpg" },
  { name: "Gundevena Dharshini", year: "II", branch: "CSE", department: "Resource", short: initials("Gundevena Dharshini"), photo: "/team/2years/Dharshini Gundevena.jpg" },
  { name: "H Tarun Kumar Reddy", year: "II", branch: "CSE", department: "Content", short: initials("H Tarun Kumar Reddy"), photo: "/team/2years/Tarun.JPG" },
  { name: "Pooja Vanga", year: "II", branch: "CSE", department: "Resource", short: initials("Pooja Vanga"), photo: "/team/2years/Pooja.jpeg" },
  { name: "B.V.S. Pavan", year: "II", branch: "CSE", department: "Graphic", short: initials("B.V.S. Pavan"), photo: "/team/2years/Pavan Bonthu.jpg" },
  { name: "N. Praneeth Goud", year: "II", branch: "CSE", department: "Video Editing", short: initials("N. Praneeth Goud"), photo: "/team/2years/praneeth.png" },
  { name: "G. Nithisha", year: "II", branch: "CSE", department: "Resource", short: initials("G. Nithisha"), photo: "/team/2years/NITHISHA GUNTAKA.jpg" },
  { name: "K. Vaishnavi", year: "II", branch: "CSE", department: "Content", short: initials("K. Vaishnavi"), photo: "/team/2years/Vaishu Vaishnavi.jpg" },
  { name: "M. Sumith Kumar", year: "II", branch: "CSE", department: "Resource", short: initials("M. Sumith Kumar"), photo: "/team/2years/Sumith Mullangi.jpeg" },
  { name: "Rakshitha. G", year: "II", branch: "CSM", department: "Graphic", short: initials("Rakshitha. G"), photo: "/team/2years/Rakshitha_.png" },
  { name: "Kotagiri Sri Charan", year: "II", branch: "CSM", department: "Photography", short: initials("Kotagiri Sri Charan"), photo: "/team/2years/sri.png" },
  { name: "Satvik Reddy", year: "II", branch: "CSM", department: "Video Editing", short: initials("Satvik Reddy"), photo: "/team/2years/satvik.jpg" },
  { name: "B Sai charan", year: "II", branch: "CSM", department: "Video Editing", short: initials("B Sai charan"), photo: "/team/2years/sai.jpg" },
  { name: "Mekapothula Shiva manikanta", year: "II", branch: "CSM", department: "Video Editing", short: initials("Mekapothula Shiva manikanta"), photo: "/team/2years/shiva .jpg" },
  { name: "M. vivek", year: "II", branch: "CSM", department: "Videography", short: initials("M. vivek"), photo: "/team/2years/vivek.JPG" },
  { name: "Y. Ramya", year: "II", branch: "CSM", department: "Graphic", short: initials("Y. Ramya"), photo: "/team/2years/Ramya.jpg" },
  { name: "Harinivas", year: "II", branch: "MECH", department: "Content", short: initials("Harinivas"), photo: "/team/2years/HARINIVAS.jpg" },
  { name: "R. Venkatesh", year: "II", branch: "MECH", department: "Videography", short: initials("R. Venkatesh"), photo: "/team/2years/VENKATESH.jpeg" },
];

export const facultyAdvisor = {
  name: "Dr. N. Yuganand",
  role: "Faculty Advisor",
  department: "EWB-IUCEE-IEEE MLRIT Student Chapter",
  email: "yuganand@mlrit.ac.in",
  bio: "Guiding student leaders, engineering research, and community-focused sustainable projects across MLRIT cohorts.",
  short: "DY",
  photo: "/team/yuganand.jpg",
} as const;

export const keyAchievements = [
  {
    id: "01",
    title: "Best IUCEE Student Chapter Award (ICTIEE 2026)",
    category: "International Recognition",
    description:
      "Honored for excellence in student leadership, community-focused engineering, and consistent chapter engagement.",
    tag: "ICTIEE 2026",
    photo: "/achievements/ictiee-2026.jpg",
  },
  {
    id: "02",
    title: "VISIONAID",
    category: "POC Poster Presentation",
    description:
      "Recognized in the POC poster presentation category for developing smart assistive technology aimed at improving mobility for visually impaired individuals.",
    tag: "Assistive Tech",
    photo: "/achievements/vision-aid_new.jpg",
  },
  {
    id: "03",
    title: "HDSE Leadership Initiative Winner",
    category: "Leadership & Innovation",
    description:
      "Recognized as winners in the HDSE Leadership Intensive program for outstanding humanitarian design, leadership, and impactful community problem-solving.",
    tag: "HDSE 2025",
    photo: "/events/hdse-2025.jpg",
  },
] as const;

export const testimonials = [
  {
    quote:
      "During my tenure in EWB-IUCEE-IEEE MLRIT, I developed strong ownership, accountability, and the ability to manage responsibilities under pressure. More than experience, it has been a defining part of my student life.",
    name: "Architha Reddy Pabbathi",
    role: "Ex-President",
  },
  {
    quote:
      "My tenure as Treasurer was a transformative experience in professional accountability and leadership. I developed essential skills in event management and high-pressure decision-making.",
    name: "Harsith Gourishetti",
    role: "Ex-Treasurer",
  },
  {
    quote:
      "Being part of this chapter allowed me to apply my skills to real-world challenges and grow as a leader. Their ability to deliver practical solutions is unmatched.",
    name: "Sai Kumar",
    role: "Ex-Project Manager",
  },
  {
    quote:
      "Serving as Secretary was a formative engagement in discipline, ownership, and intent. The experience remains a defining influence on how I approach responsibility and impact.",
    name: "Shaik Ruksana",
    role: "Ex-Secretary",
  },
  {
    quote:
      "Being part of the chapter was a defining experience. I worked with research while guiding others, turning challenges into meaningful outcomes.",
    name: "Aligeti Sharanya",
    role: "Ex-Lead R&D",
  },
  {
    quote:
      "My tenure as Social Media Manager strengthened my skills in digital communication and teamwork, contributing to event promotions and our digital presence.",
    name: "Vishnu Adari",
    role: "Ex-Social Media Manager",
  },
] as const;

export const journeyPhases = [
  {
    year: "2016",
    title: "The Beginning",
    body: "Founded as IUCEE-SPEED, the chapter began with a vision to connect engineering education with practical learning and community-focused initiatives.",
  },
  {
    year: "2020",
    title: "A New Chapter",
    body: "The chapter evolved into the EWB-IUCEE-MLRIT Student Chapter Body, strengthening its focus on sustainability, social responsibility, and hands-on engineering.",
  },
  {
    year: "2024",
    title: "Strengthening Our Network",
    body: "Collaborated with IEEE to expand technical engagement, student opportunities, and professional connections.",
  },
  {
    year: "2026",
    title: "Building a Stronger Community",
    body: "From national-level initiatives and collaborative projects to hosting the All India EWB Meet, the chapter grew its network and strengthened student-led impact.",
  },
  {
    year: "2026",
    title: "Recognized for Our Journey",
    body: "Recognized as the Best IUCEE Student Chapter at ICTIEE 2026, marking a significant milestone in our journey of innovation, sustainability, and leadership.",
  },
] as const;

export const upcomingEvents = [
  {
    title: "IEEE Day 2026",
    date: "Coming soon",
    location: "To be announced",
    tagline: "Engineering. Medicine. Standards. Together.",
    body: "Celebrating IEEE Day with expert talks, interdisciplinary learning, and the convergence of engineering and technology.",
  },
  {
    title: "Eloqvent 2026",
    date: "Coming soon",
    location: "MLR Institute of Technology, Hyderabad",
    tagline: "Tech. Talk. Triumph.",
    body: "A flagship communication and technology event featuring talks, presentations, and competitions that build leadership and professional skills.",
  },
] as const;

export const events = [
  {
    title: "Mitti Se Murti 2026",
    subtitle:
      "An eco-friendly Ganesh idol-making workshop for primary school children, promoting natural clay over Plaster of Paris and raising awareness about its impact on water bodies and aquatic life.",
    date: "11 September 2026",
    location: "Zilla Parishad High School, Gundlapochampally",
    tag: "CELEBRATE TRADITIONALLY, CREATE SUSTAINABLY.",
    tagTone: "leaf" as const,
    gradient: "from-[#1f5c45] via-[#2d7a5a] to-[#3d9b6e]/40",
    photos: ["/events/mitti-se-murti-2026.png"],
    instagram: "https://www.instagram.com/p/DdK6yo2DxDM/",
  },
  {
    title: "6th National Education Policy Workshop",
    subtitle:
      "Explored flexibility and interdisciplinary education under NEP — covering internships, credit transfer, MEXI opportunities, AICTE guidelines, and digital learning platforms like SWAYAM.",
    date: "29 July 2026",
    location: "Mini Auditorium, MLR Institute of Technology",
    tag: "FLEXIBILITY AND INTERDISCIPLINARY EDUCATION.",
    tagTone: "forest" as const,
    gradient: "from-[#143d2e] via-[#1f5c45] to-[#0c1612]",
    photos: ["/events/nep-2026.png"],
    instagram: "https://www.instagram.com/p/Dbkc2tjDytT",
  },
  {
    title: "HDSE Leadership Intensive 2026",
    subtitle:
      "A five-day immersive program on humanitarian design, design thinking, and leadership at Agastya International Foundation — MLRIT team's project 'PlastiNova' secured 4th position.",
    date: "12–16 July 2026",
    location: "Agastya International Foundation Campus, Kuppam, Andhra Pradesh",
    tag: "HUMANITARIAN DESIGN, LEADERSHIP & SOCIAL INNOVATION.",
    tagTone: "amber" as const,
    gradient: "from-[#3d2a12] via-[#1f5c45] to-[#143d2e]",
    photos: ["/events/hdse-2026.png"],
    instagram: "https://www.instagram.com/p/DbQSVBWDxRa",
  },
  {
    title: "Educational Visit to ICRISAT",
    subtitle:
      "Explored digital agriculture, climate-resilient crops, AI-based smart irrigation, and sustainable farming at ICRISAT — connecting engineering, research, and real-world agricultural challenges.",
    date: "16 July 2026",
    location: "International Crops Research Institute for the Semi-Arid Tropics (ICRISAT), Patancheru, Hyderabad",
    tag: "TRANSFORMING AGRICULTURE THROUGH RESEARCH, INNOVATION & TECHNOLOGY.",
    tagTone: "leaf" as const,
    gradient: "from-[#0c1612] via-[#1f5c45] to-[#2d7a5a]",
    photos: ["/events/icrisat-2026.png"],
    instagram: "https://www.instagram.com/p/Da217Ndj0bK",
  },
  {
    title: "Workshop on SDG's Implementation in Higher Education",
    subtitle:
      "Explored the implementation of all 17 SDGs in higher education — covering sustainable campus practices, the TRIIMPACT SDG Centre of Excellence model, and collaborative sustainability initiatives.",
    date: "11 June 2026",
    location: "Mini Auditorium, MLRIT",
    tag: "PLANTING THE SEEDS OF SUSTAINABLE CHANGE.",
    tagTone: "forest" as const,
    gradient: "from-[#1f5c45] via-[#143d2e] to-[#0c1612]",
    photos: ["/events/sdg-2026.png"],
    instagram: "https://www.instagram.com/p/DZg9lDGDyqS",
  },
  {
    title: "10th EWB India All India Chapters Meet (AICM) 2026",
    subtitle:
      "A two-day national gathering of EWB chapters featuring keynotes, panels, and knowledge-sharing on sustainable development — showcasing initiatives and strengthening collaboration across India.",
    date: "23–24 January 2026",
    location: "MLR Institute of Technology, Hyderabad",
    tag: "CONNECTING CHAPTERS. INSPIRING SUSTAINABLE IMPACT.",
    tagTone: "leaf" as const,
    gradient: "from-[#0c1612] via-[#1f5c45] to-[#d97706]/35",
    photos: ["/events/aicm-2026.jpg"],
    instagram:
      "https://www.instagram.com/p/DT8J-4BjxY9/?img_index=11&igsh=MWliNzR5NHllZ2Z2Mw==",
  },
  {
    title: "IASF 2026",
    subtitle:
      "A premier conference with project showcases, EduAIThon, mentoring, and workshops — connecting students, educators, researchers, and industry to engineer tomorrow.",
    date: "7–10 January 2026",
    location: "GITAM University, Bengaluru",
    tag: "INNOVATING TODAY. ENGINEERING TOMORROW.",
    tagTone: "amber" as const,
    gradient: "from-[#143d2e] via-[#2d7a5a] to-[#0c1612]",
    photos: ["/events/iasf-2026.jpg"],
    instagram:
      "https://www.instagram.com/p/DTVfEk4j9VD/?img_index=3&igsh=bHd4bnFmY29lMWJ6",
  },
  {
    title: "AI in the Classroom 2025",
    subtitle:
      "A special session on opportunities, challenges, and ethical use of AI in education — inspiring educators and students to embrace innovation for the future of learning.",
    date: "11 November 2025",
    location: "MLR Institute of Technology, Hyderabad",
    tag: "EMPOWERING EDUCATION THROUGH AI.",
    tagTone: "forest" as const,
    gradient: "from-[#1f5c45] via-[#143d2e] to-[#1a2e26]",
    photos: ["/events/ai-classroom-2025.jpg"],
    instagram:
      "https://www.instagram.com/p/DRCYZukj1Qp/?img_index=5&igsh=MXJ4czA2Z2syNW96cg==",
  },
  {
    title: "IEEE Day 2025",
    subtitle:
      "Celebrating the convergence of engineering, medicine, and technology with expert talks on IEEE standards, professional growth, and sustainable healthcare innovations.",
    date: "7 October 2025",
    location: "Arundhathi Institute of Medical Sciences (AIMS), Hyderabad",
    tag: "ENGINEERING. MEDICINE. STANDARDS. TOGETHER.",
    tagTone: "leaf" as const,
    gradient: "from-[#0c1612] via-[#1f5c45] to-[#2d7a5a]",
    photos: ["/events/ieee-day-2025.jpg"],
    instagram:
      "https://www.instagram.com/p/DPg16g6jwp4/?img_index=5&igsh=NHIxMG1pM3doMDR6",
  },
  {
    title: "Industrial Visit – IICT",
    subtitle:
      "Practical exposure to advanced research and sustainable technologies — clean energy, biogas, microbial fuel cells, and analytical systems beyond the classroom.",
    date: "8 July 2025",
    location: "Indian Institute of Chemical Technology (IICT), Secunderabad",
    tag: "LEARNING BEYOND THE CLASSROOM.",
    tagTone: "amber" as const,
    gradient: "from-[#1a4d3a] via-[#0c1612] to-[#3d2a12]",
    photos: ["/events/iict-2025.jpg"],
    instagram:
      "https://www.instagram.com/p/DL5GOyjT0qG/?igsh=dTc4anpqOXh0dzRq",
  },
  {
    title: "HDSE Leadership Intensive 2025",
    subtitle:
      "A five-day immersive program on humanitarian design, leadership, and social entrepreneurship with design thinking workshops and SDG-aligned challenges.",
    date: "2–6 June 2025",
    location: "Agastya International Foundation, Kuppam",
    tag: "LEAD WITH PURPOSE. INNOVATE WITH IMPACT.",
    tagTone: "leaf" as const,
    gradient: "from-[#143d2e] via-[#1f5c45] to-[#0c1612]",
    photos: ["/events/hdse-2025.jpg"],
    instagram:
      "https://www.instagram.com/p/DKuTWafTMvW/?img_index=5&igsh=MWJucDAyZTNheTRhag==",
  },
  {
    title: "IASF 2025",
    subtitle:
      "A national innovation forum with project presentations, workshops, and peer collaboration — building sustainable, technology-driven solutions with real-world impact.",
    date: "7–8 January 2025",
    location: "VNR VJIET College",
    tag: "INNOVATING IDEAS. CREATING IMPACT.",
    tagTone: "forest" as const,
    gradient: "from-[#2d7a5a] via-[#143d2e] to-[#0c1612]",
    photos: ["/events/iasf-2025.jpg"],
    instagram: "https://www.instagram.com/p/DEpKZYoz1qc/?img_index=1",
  },
  {
    title: "Eloqvent 2024",
    subtitle:
      "A two-day event on technology, communication, and leadership — technical talks, presentations, and competitions to showcase ideas and build professional skills.",
    date: "28–29 October 2024",
    location: "MLR Institute of Technology, Hyderabad",
    tag: "TECH. TALK. TRIUMPH.",
    tagTone: "amber" as const,
    gradient: "from-[#1f5c45] via-[#0c1612] to-[#d97706]/30",
    photos: ["/events/eloqvent-2024.jpg"],
    instagram:
      "https://www.instagram.com/p/DB0iax9TIjf/?img_index=10&igsh=dHFyZW5qeW9qMDVm",
  },
  {
    title: "Engineers Student Forum Regional (ESFR) 2024",
    subtitle:
      "A two-day regional forum on sustainable entrepreneurship and climate action — expert sessions and collaborative problem-solving for impactful solutions.",
    date: "21–22 June 2024",
    location: "MLR Institute of Technology, Hyderabad",
    tag: "INNOVATE. COLLABORATE. TRANSFORM.",
    tagTone: "leaf" as const,
    gradient: "from-[#0c1612] via-[#1f5c45] to-[#3d9b6e]/50",
    photos: ["/events/esfr-2024.jpg"],
    instagram:
      "https://www.instagram.com/p/C8gFPxLvf3K/?img_index=9&igsh=aXp2cXJiYzcxNXh6",
  },
  {
    title: "Vantage 2023",
    subtitle:
      "An inspiring guest lecture with Mrs. Sampada Pachaury, Former Director of IUCEE — career development, leadership, and future opportunities for students.",
    date: "22 November 2023",
    location: "Auditorium, MLR Institute of Technology, Hyderabad",
    tag: "LEARN FROM EXPERIENCE. LEAD WITH VISION.",
    tagTone: "forest" as const,
    gradient: "from-[#143d2e] via-[#1a4d3a] to-[#0c1612]",
    photos: ["/events/vantage-2023-a.jpg", "/events/vantage-2023-b.jpg"],
    instagram:
      "https://www.instagram.com/p/C0JnxoOJYQ8/?img_index=1&igsh=MTltNmc4d2xjcThzag==",
  },
  {
    title: "EloqVent 2023",
    subtitle:
      "A regional event on communication, critical thinking, and leadership — Root Riddle and Elocution tracks with expert-led sessions to build confident public speaking.",
    date: "9–10 October 2023",
    location: "MLR Institute of Technology, Hyderabad",
    tag: "THINK. SPEAK. INSPIRE.",
    tagTone: "amber" as const,
    gradient: "from-[#1f5c45] via-[#143d2e] to-[#3d2a12]",
    photos: ["/events/eloqvent-2023.jpg"],
    instagram:
      "https://www.instagram.com/p/CyTjrhqpDF5/?img_index=9&igsh=a2NqdXBpZXZkd2Zh",
  },
] as const;

export const furtherQueries = {
  heading: "For Further Queries",
  body: "Have questions about our student-led initiatives, workshops, research, or interested in collaborating? Please reach out to our team.",
  emails: [
    {
      label: "General Email",
      address: "ewb-iucee@mlrinstitutions.ac.in",
    },
    {
      label: "Faculty Advisor",
      address: "yuganand@mlrit.ac.in",
    },
  ],
} as const;

export const workingPrinciple = [
  "Survey",
  "Pick up idea",
  "Brainstorming session",
  "Develop prototype",
  "Showcase to stakeholder",
  "Review & suggestions",
  "Real-time product",
  "Deliver to stakeholder",
] as const;

export const chapterOperates = [
  {
    num: "01",
    title: "Understanding Real-World Needs",
    body: "Our chapter begins by identifying challenges that exist beyond the classroom. We focus on understanding the needs of communities, students, industries, and society to recognize problems where engineering knowledge can contribute to practical and meaningful solutions.",
  },
  {
    num: "02",
    title: "Learning Through Experience",
    body: "We believe learning becomes more valuable when it is connected to real experiences. Through workshops, expert interactions, industrial visits, technical sessions, and hands-on activities, we provide students with opportunities to strengthen their knowledge and understand how engineering concepts are applied in real-world situations.",
  },
  {
    num: "03",
    title: "Developing Ideas with Purpose",
    body: "Once a problem is understood, students are encouraged to explore different possibilities and develop ideas around it. We create an environment where students can question existing approaches, think creatively, and use their technical knowledge to develop solutions that are purposeful, practical, and relevant.",
  },
  {
    num: "04",
    title: "Connecting Minds and Expertise",
    body: "Innovation becomes stronger when different perspectives come together. Our chapter encourages collaboration among students, mentors, faculty, professionals, and peers, creating opportunities to exchange knowledge, receive guidance, and look at problems from different perspectives.",
  },
  {
    num: "05",
    title: "Transforming Ideas into Solutions",
    body: "We encourage students to move beyond simply discussing an idea. Through projects, prototypes, experiments, and initiatives, ideas are developed into tangible solutions. Feedback and continuous improvement help students understand what works, identify gaps, and refine their approach.",
  },
  {
    num: "06",
    title: "Taking Ideas Towards Implementation",
    body: "The process does not end with developing a concept. We encourage students to take their refined ideas towards practical implementation, where they can be tested in real contexts and adapted based on actual requirements, creating solutions with meaningful and sustainable impact.",
  },
] as const;
