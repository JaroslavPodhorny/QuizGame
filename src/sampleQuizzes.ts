
//vytvořeno pomocí ai

import type { Quiz } from "./types/quizBlueprint";

export const sampleQuizzes: Quiz[] = [
  {
id: "quiz-history-101",
title: "World History Basics",
description: "Test your knowledge of major historical events",
duration: "15 minutes",
createdBy: "Admin",
createdAt: new Date().toISOString(),
category: "History",
keywords: ["history", "world", "events"],
isPublished: true,
thumbnail: "📚",
questions: [
{ title: "In what year did World War II end?", type: "Multiple choice", answers: ["1943", "1944", "1945", "1946"], correctAnswerIndex: 2 },
{ title: "The Roman Empire fell in 476 AD.", type: "True/False", answers: [true], correctAnswerIndex: 0 },
{ title: "The Renaissance began in ___", type: "Fill in the blank", answers: ["Italy"], correctAnswerIndex: 0 },
{ title: "Who was the first emperor of Rome?", type: "Multiple choice", answers: ["Julius Caesar", "Augustus", "Nero", "Tiberius"], correctAnswerIndex: 1 },
{ title: "The Great Wall is located in China.", type: "True/False", answers: [true], correctAnswerIndex: 0 },
{ title: "The Magna Carta was signed in ___", type: "Fill in the blank", answers: ["1215"], correctAnswerIndex: 0 },
{ title: "Which empire was known for its road network?", type: "Multiple choice", answers: ["Persian", "Roman", "Ottoman", "Byzantine"], correctAnswerIndex: 1 },
{ title: "The Cold War ended in 1991.", type: "True/False", answers: [true], correctAnswerIndex: 0 },
{ title: "The French Revolution began in ___", type: "Fill in the blank", answers: ["1789"], correctAnswerIndex: 0 },
{ title: "Who discovered America (for Europeans)?", type: "Multiple choice", answers: ["Columbus", "Vespucci", "Magellan", "Cook"], correctAnswerIndex: 0 },
{ title: "The Berlin Wall fell in 1989.", type: "True/False", answers: [true], correctAnswerIndex: 0 },
{ title: "The ancient civilization of Mesopotamia was located between the Tigris and ___ rivers.", type: "Fill in the blank", answers: ["Euphrates"], correctAnswerIndex: 0 }
]
},


{
id: "quiz-history-ancient-01",
title: "Ancient Civilizations",
description: "Explore early human societies and their achievements",
duration: "18 minutes",
createdBy: "Admin",
createdAt: new Date().toISOString(),
category: "History",
keywords: ["ancient", "civilizations", "history"],
isPublished: true,
thumbnail: "🏺",
questions: [
{ title: "Which river was crucial to Ancient Egypt?", type: "Multiple choice", answers: ["Tigris", "Euphrates", "Nile", "Indus"], correctAnswerIndex: 2 },
{ title: "Rome was founded in 753 BC.", type: "True/False", answers: [true], correctAnswerIndex: 0 },
{ title: "Mesopotamian writing was called ___", type: "Fill in the blank", answers: ["cuneiform"], correctAnswerIndex: 0 },
{ title: "Machu Picchu was built by the ___ Empire", type: "Multiple choice", answers: ["Aztec", "Inca", "Maya", "Olmec"], correctAnswerIndex: 1 },
{ title: "The Hanging Gardens were in Babylon.", type: "True/False", answers: [true], correctAnswerIndex: 0 },
{ title: "The first known code of law was the Code of ___", type: "Fill in the blank", answers: ["Hammurabi"], correctAnswerIndex: 0 },
{ title: "Which civilization built the pyramids of Giza?", type: "Multiple choice", answers: ["Egyptians", "Romans", "Greeks", "Persians"], correctAnswerIndex: 0 },
{ title: "The Indus Valley Civilization used early forms of sewage systems.", type: "True/False", answers: [true], correctAnswerIndex: 0 },
{ title: "The capital of the Persian Empire was ___", type: "Fill in the blank", answers: ["Persepolis"], correctAnswerIndex: 0 },
{ title: "Which civilization created democracy?", type: "Multiple choice", answers: ["Sparta", "Athens", "Rome", "Babylon"], correctAnswerIndex: 1 },
{ title: "The Great Sphinx is located in Giza.", type: "True/False", answers: [true], correctAnswerIndex: 0 },
{ title: "The ancient Sumerians invented the wheel.", type: "True/False", answers: [true], correctAnswerIndex: 0 }
]
},


{
id: "quiz-science-bio",
title: "Biology Fundamentals",
description: "Learn about living organisms and biological processes",
duration: "20 minutes",
createdBy: "Admin",
createdAt: new Date().toISOString(),
category: "Science",
keywords: ["biology", "science", "life"],
isPublished: true,
thumbnail: "🧬",
questions: [
{ title: "What is the powerhouse of the cell?", type: "Multiple choice", answers: ["Nucleus", "Mitochondria", "Ribosome", "Chloroplast"], correctAnswerIndex: 1 },
{ title: "Photosynthesis produces oxygen.", type: "True/False", answers: [true], correctAnswerIndex: 0 },
{ title: "DNA replication is called ___", type: "Fill in the blank", answers: ["replication"], correctAnswerIndex: 0 },
{ title: "Which is not a kingdom of life?", type: "Multiple choice", answers: ["Animalia", "Plantae", "Metallica", "Fungi"], correctAnswerIndex: 2 },
{ title: "Humans are made of eukaryotic cells.", type: "True/False", answers: [true], correctAnswerIndex: 0 },
{ title: "The basic unit of life is the ___", type: "Fill in the blank", answers: ["cell"], correctAnswerIndex: 0 },
{ title: "Which organ pumps blood?", type: "Multiple choice", answers: ["Liver", "Heart", "Kidney", "Lungs"], correctAnswerIndex: 1 },
{ title: "Enzymes speed up chemical reactions.", type: "True/False", answers: [true], correctAnswerIndex: 0 },
{ title: "Plants absorb water through their ___", type: "Fill in the blank", answers: ["roots"], correctAnswerIndex: 0 },
{ title: "Which macromolecule carries genetic information?", type: "Multiple choice", answers: ["Proteins", "Carbohydrates", "Lipids", "Nucleic acids"], correctAnswerIndex: 3 },
{ title: "Mitosis results in two identical daughter cells.", type: "True/False", answers: [true], correctAnswerIndex: 0 },
{ title: "The process of converting glucose into energy is called ___", type: "Fill in the blank", answers: ["cellular respiration"], correctAnswerIndex: 0 }
]
},


{
id: "quiz-science-physics",
title: "Physics Essentials",
description: "Basics of motion, energy, and matter",
duration: "22 minutes",
createdBy: "Admin",
createdAt: new Date().toISOString(),
category: "Science",
keywords: ["physics", "energy", "motion"],
isPublished: true,
thumbnail: "⚛️",
questions: [
{ title: "What is the SI unit of force?", type: "Multiple choice", answers: ["Joule", "Newton", "Watt", "Pascal"], correctAnswerIndex: 1 },
{ title: "Velocity is a vector quantity.", type: "True/False", answers: [true], correctAnswerIndex: 0 },
{ title: "The speed of light is approximately ___ m/s", type: "Fill in the blank", answers: ["300000000"], correctAnswerIndex: 0 },
{ title: "Which law states that force equals mass times acceleration?", type: "Multiple choice", answers: ["First Law", "Second Law", "Third Law", "Fourth Law"], correctAnswerIndex: 1 },
{ title: "Kinetic energy depends on velocity.", type: "True/False", answers: [true], correctAnswerIndex: 0 },
{ title: "The tendency of an object to resist change in motion is called ___", type: "Fill in the blank", answers: ["inertia"], correctAnswerIndex: 0 },
{ title: "What is the SI unit of energy?", type: "Multiple choice", answers: ["Watt", "Joule", "Newton", "Pascal"], correctAnswerIndex: 1 },
{ title: "Friction always opposes motion.", type: "True/False", answers: [true], correctAnswerIndex: 0 },
{ title: "The acceleration due to gravity is approximately ___ m/s²", type: "Fill in the blank", answers: ["9.8"], correctAnswerIndex: 0 },
{ title: "Which type of wave requires a medium to travel?", type: "Multiple choice", answers: ["Electromagnetic", "Sound", "Light", "Radio"], correctAnswerIndex: 1 },
{ title: "All objects fall at the same rate in a vacuum.", type: "True/False", answers: [true], correctAnswerIndex: 0 },
{ title: "The study of motion without considering forces is called ___", type: "Fill in the blank", answers: ["kinematics"], correctAnswerIndex: 0 }
]
}
];
