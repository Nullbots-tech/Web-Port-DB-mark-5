interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  technologies: string[];
  fullDescription: string;
}

export const projects: Project[] = [
  {
    id: 'ai-chatbot',
    title: 'AI Chatbot',
    category: 'Artificial Intelligence',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Advanced conversational AI chatbot with natural language processing capabilities.',
    technologies: ['Python', 'TensorFlow', 'NLP', 'React', 'Node.js'],
    fullDescription: 'Our AI Chatbot is a sophisticated conversational agent that leverages natural language processing to understand and respond to user queries in a human-like manner. Built with a hybrid architecture combining rule-based responses and deep learning models, this chatbot can be customized for various business applications including customer support, lead generation, and internal knowledge management. The system continuously learns from interactions to improve its responses over time.',
  },
  {
    id: 'eye-disease-classification',
    title: 'Eye Disease Classification',
    category: 'Healthcare AI',
    image: 'https://images.pexels.com/photos/5752274/pexels-photo-5752274.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'AI-powered system that can detect and classify various eye diseases from retinal images.',
    technologies: ['Python', 'TensorFlow', 'OpenCV', 'Deep Learning', 'CNN'],
    fullDescription: 'This eye disease classification system uses convolutional neural networks to analyze retinal images and identify various ophthalmic conditions with high accuracy. Trained on a dataset of thousands of annotated medical images, the model can detect conditions like diabetic retinopathy, glaucoma, and age-related macular degeneration in early stages. The system provides a confidence score with each diagnosis and can be integrated with existing healthcare management systems to streamline the diagnostic process.',
  },
  {
    id: 'skin-disease-classification',
    title: 'Skin Disease Classification',
    category: 'Healthcare AI',
    image: 'https://images.pexels.com/photos/7615460/pexels-photo-7615460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Machine learning system that identifies skin conditions from images with high accuracy.',
    technologies: ['Python', 'PyTorch', 'Computer Vision', 'Transfer Learning', 'Flask'],
    fullDescription: 'Our skin disease classification system is a powerful diagnostic tool that uses computer vision and deep learning to identify various dermatological conditions from images. The system employs transfer learning techniques with state-of-the-art convolutional neural network architectures to achieve high diagnostic accuracy. It can identify over 20 common skin conditions and provides detailed information about each diagnosis, including treatment options and severity assessments. The mobile-friendly web application allows users to upload images securely and receive instant analysis.',
  },
  {
    id: 'ai-storytelling',
    title: 'AI Driven Storytelling Machine',
    category: 'Creative AI',
    image: 'https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Interactive AI system that creates personalized stories based on user input and preferences.',
    technologies: ['GPT-4', 'Python', 'React', 'Node.js', 'DALL-E'],
    fullDescription: 'The AI Driven Storytelling Machine is an innovative system that creates personalized narratives based on user preferences and inputs. Combining natural language processing with creative generation algorithms, it produces unique stories across various genres including fantasy, mystery, science fiction, and children\'s tales. The system can incorporate user-specified characters, settings, and plot elements while maintaining narrative coherence and engagement. Additionally, it can generate accompanying illustrations using image synthesis technology, creating a complete multimedia storytelling experience.',
  },
  {
    id: 'blast-royale',
    title: 'Blast Royale',
    category: 'Game Development',
    image: 'https://images.pexels.com/photos/7915493/pexels-photo-7915493.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Multiplayer battle royale game developed using Unreal Engine with advanced physics and graphics.',
    technologies: ['Unreal Engine', 'C++', 'Blueprints', '3D Modeling', 'Multiplayer Networking'],
    fullDescription: 'Blast Royale is an action-packed battle royale game developed with Unreal Engine. Set in a dynamic, destructible environment, players compete to be the last one standing while navigating an ever-shrinking play area. The game features advanced physics simulation, realistic weapon mechanics, and stunning visual effects. Our team developed all aspects of the game including character design, level creation, gameplay mechanics, and networking infrastructure for seamless multiplayer experiences. The game supports up to 100 players simultaneously with various gameplay modes and customization options.',
  }
];