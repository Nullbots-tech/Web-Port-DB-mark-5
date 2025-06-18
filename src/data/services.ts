import {
  Globe,
  Paintbrush,
  Gamepad2,
  Smartphone,
  CircuitBoard,
  Brain,
  Box,
  type LucideIcon,
} from 'lucide-react';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  longDescription: string;
}

export const services: Service[] = [
  {
    id: 'web-development',
    title: 'Web Development',
    description: 'We build responsive, fast, and secure websites and web applications tailored to your specific needs.',
    icon: Globe,
    longDescription: 'Our web development team specializes in creating responsive, high-performance websites and web applications. We use the latest technologies and frameworks to ensure your website is fast, secure, and optimized for search engines. From simple landing pages to complex web applications, we have the expertise to bring your vision to life.',
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Designing',
    description: 'We create intuitive, engaging user interfaces and experiences that delight your users and drive conversions.',
    icon: Paintbrush,
    longDescription: 'Our UI/UX design process is centered around creating intuitive, engaging, and visually appealing interfaces. We conduct thorough research to understand your users\' needs and preferences, then design interfaces that are both beautiful and functional. Our designs focus on creating seamless user journeys that drive engagement and conversions.',
  },
  
  {
    id: 'app-development',
    title: 'App Development',
    description: 'We build native and cross-platform mobile applications that deliver exceptional user experiences.',
    icon: Smartphone,
    longDescription: 'We develop mobile applications for iOS and Android platforms that are fast, responsive, and user-friendly. Our mobile development team uses the latest frameworks and technologies to create applications that meet your business objectives while providing an excellent user experience. We focus on creating apps that are not only visually appealing but also functionally robust.',
  },
  {
    id: 'iot-solutions',
    title: 'IOT Solutions',
    description: 'We design and implement Internet of Things solutions that connect your devices and systems for smarter operations.',
    icon: CircuitBoard,
    longDescription: 'Our IoT solutions connect your devices and systems to create smarter, more efficient operations. We design and implement custom IoT architectures that collect, analyze, and act on data from connected devices. Our solutions help businesses automate processes, improve decision-making, and create new revenue opportunities through connected technologies.',
  },
  {
    id: 'ai-ml-solutions',
    title: 'AI & ML Solutions',
    description: 'We leverage artificial intelligence and machine learning to solve complex problems and drive business innovation.',
    icon: Brain,
    longDescription: 'Our AI and machine learning solutions help businesses leverage the power of data to solve complex problems and drive innovation. We develop custom algorithms and models that can analyze data, identify patterns, make predictions, and automate decision-making processes. Our solutions range from natural language processing and computer vision to predictive analytics and recommendation systems.',
  },
  {
    id: '3d-modelling',
    title: '3D Modelling',
    description: 'We create detailed, realistic 3D models and animations for various applications, from gaming to product visualization.',
    icon: Box,
    longDescription: 'Our 3D modeling team creates detailed, realistic models and animations for various applications. Whether you need assets for games, product visualizations, architectural renderings, or marketing materials, we deliver high-quality 3D content that brings your ideas to life. We use industry-standard software and techniques to ensure your 3D assets are optimized for their intended use.',
  },
];