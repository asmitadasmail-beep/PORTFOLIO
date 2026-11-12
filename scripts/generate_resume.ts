import {
  Document,
  Packer,
  Paragraph,
  TextRun,
  HeadingLevel,
  AlignmentType,
  UnderlineType,
  ExternalHyperlink,
  convertInchesToTwip,
  BorderStyle,
} from 'docx';
import * as fs from 'fs';
import * as path from 'path';

async function generateDocx() {
  const doc = new Document({
    styles: {
      default: {
        document: {
          run: {
            font: 'Calibri',
            size: 22, // 11pt
            color: '222222',
          },
        },
      },
    },
    sections: [
      {
        properties: {
          page: {
            margin: {
              top: convertInchesToTwip(0.6),
              right: convertInchesToTwip(0.6),
              bottom: convertInchesToTwip(0.6),
              left: convertInchesToTwip(0.6),
            },
          },
        },
        children: [
          // Header / Name
          new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { after: 60 },
            children: [
              new TextRun({
                text: 'ASMITA DAS',
                bold: true,
                size: 36, // 18pt
                color: '1A1A1A',
                font: 'Calibri',
              }),
            ],
          }),

          // Contact line
          new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { after: 140 },
            children: [
              new TextRun({ text: '+91 7980995226  |  ', size: 20 }),
              new ExternalHyperlink({
                children: [
                  new TextRun({
                    text: 'asmitadasmail@gmail.com',
                    size: 20,
                    color: '0563C1',
                    underline: { type: UnderlineType.SINGLE },
                  }),
                ],
                link: 'mailto:asmitadasmail@gmail.com',
              }),
              new TextRun({ text: '  |  Bengaluru, India', size: 20 }),
            ],
          }),

          // Links line
          new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { after: 220 },
            children: [
              new ExternalHyperlink({
                children: [
                  new TextRun({
                    text: 'linkedin.com/in/asmita-das-03078738a',
                    size: 20,
                    color: '0563C1',
                    underline: { type: UnderlineType.SINGLE },
                  }),
                ],
                link: 'https://www.linkedin.com/in/asmita-das-03078738a',
              }),
              new TextRun({ text: '  |  ', size: 20 }),
              new ExternalHyperlink({
                children: [
                  new TextRun({
                    text: 'github.com/asmitadasmail-beep',
                    size: 20,
                    color: '0563C1',
                    underline: { type: UnderlineType.SINGLE },
                  }),
                ],
                link: 'https://github.com/asmitadasmail-beep',
              }),
            ],
          }),

          // SECTION: PROFESSIONAL SUMMARY
          createSectionHeader('PROFESSIONAL SUMMARY'),
          new Paragraph({
            spacing: { after: 180, line: 260 },
            children: [
              new TextRun({
                text:
                  'Second-year B.Tech CSE (AI & ML) student with a GPA of 9.5/10, building AI-powered applications and full-stack projects. Experienced in developing web platforms, computer-vision-based monitoring systems and interactive technical simulations. Secured 8th place at Jain University\'s Hack and Crack event. Seeking a Software Development Engineering (SDE) internship.',
              }),
            ],
          }),

          // SECTION: EDUCATION
          createSectionHeader('EDUCATION'),
          new Paragraph({
            spacing: { after: 40 },
            children: [
              new TextRun({ text: 'Jain (Deemed-to-be) University', bold: true }),
              new TextRun({ text: '\t\t\t\t\tAug 2025 – May 2029' }),
            ],
          }),
          new Paragraph({
            spacing: { after: 120 },
            children: [
              new TextRun({
                text: 'B.Tech, Computer Science & Engineering — AI & ML | GPA: 9.5/10 | Bengaluru, India',
                italics: true,
                color: '444444',
              }),
            ],
          }),
          new Paragraph({
            spacing: { after: 40 },
            children: [
              new TextRun({ text: 'Vivekananda Mission School', bold: true }),
            ],
          }),
          new Paragraph({
            spacing: { after: 180 },
            children: [
              new TextRun({
                text: 'Class 12th — 94.5%  |  Class 10th — 98.4%',
                italics: true,
                color: '444444',
              }),
            ],
          }),

          // SECTION: TECHNICAL SKILLS
          createSectionHeader('TECHNICAL SKILLS'),
          createSkillLine('Languages', 'Python, Java, HTML, CSS, JavaScript'),
          createSkillLine('Frontend', 'React, Tailwind CSS'),
          createSkillLine('Backend & APIs', 'FastAPI, Node.js, REST APIs'),
          createSkillLine('AI / GenAI / Computer Vision', 'Prompt Engineering, AI-Assisted Development, OpenCV'),
          createSkillLine('Databases & Cloud', 'PostgreSQL, SQLite, Vercel'),
          createSkillLine('Tools & Version Control', 'Git, GitHub', true),

          // SECTION: PROJECTS
          createSectionHeader('PROJECTS'),

          // Project 1: BIOLYTIX
          new Paragraph({
            spacing: { before: 80, after: 30 },
            children: [
              new TextRun({ text: 'BIOLYTIX – Drug–Disease Interaction Analysis & Biological Explanation System', bold: true }),
            ],
          }),
          new Paragraph({
            spacing: { after: 60 },
            children: [
              new TextRun({
                text: 'React 19, TypeScript, Node.js, Express, Tailwind CSS, 3Dmol.js',
                italics: true,
                color: '555555',
                size: 20,
              }),
            ],
          }),
          createBullet('Developing a biomedical decision-support platform for analysing drug–disease interactions using a deterministic, evidence-based rule engine.'),
          createBullet('Designed a six-stage biological explanation framework connecting disease-related physiological changes, drug mechanisms and potential safety implications.'),
          createBullet('Working on interactive 3D molecular structure visualisation, computational docking simulations, biological pathway exploration and dashboards for interaction severity and risk categorisation.'),

          // Project 2: EXAMSHIELD-AI
          new Paragraph({
            spacing: { before: 120, after: 30 },
            children: [
              new TextRun({ text: 'EXAMSHIELD-AI – AI-Powered Online Exam Proctoring System', bold: true }),
            ],
          }),
          new Paragraph({
            spacing: { after: 60 },
            children: [
              new TextRun({
                text: 'Python, Flask, OpenCV, Computer Vision',
                italics: true,
                color: '555555',
                size: 20,
              }),
            ],
          }),
          createBullet('Developed an online examination proctoring system integrating webcam-based monitoring and computer vision.'),
          createBullet('Implemented face-detection and monitoring components to identify potentially suspicious examination activities; structured frontend, backend and AI-monitoring modules.'),

          // Project 3: GIRLS HOSTEL DETAILS MANAGEMENT SYSTEM
          new Paragraph({
            spacing: { before: 120, after: 30 },
            children: [
              new TextRun({ text: 'GIRLS HOSTEL DETAILS MANAGEMENT SYSTEM', bold: true }),
            ],
          }),
          new Paragraph({
            spacing: { after: 60 },
            children: [
              new TextRun({
                text: 'React, JavaScript, CSS',
                italics: true,
                color: '555555',
                size: 20,
              }),
            ],
          }),
          createBullet('Developed a web-based hostel application with student registration and lifestyle compatibility assessment.'),
          createBullet('Designed a 10-question assessment and weighted compatibility scoring algorithm to generate pairwise reports and room-sharing recommendations.'),

          // Project 4: QUANTUM SUPERPOSITION AND MEASUREMENT
          new Paragraph({
            spacing: { before: 120, after: 30 },
            children: [
              new TextRun({ text: 'QUANTUM SUPERPOSITION AND MEASUREMENT – Interactive Simulation', bold: true }),
            ],
          }),
          new Paragraph({
            spacing: { after: 60 },
            children: [
              new TextRun({
                text: 'React, TypeScript, Vite',
                italics: true,
                color: '555555',
                size: 20,
              }),
            ],
          }),
          createBullet('Developed an interactive web application demonstrating quantum superposition and measurement concepts through visual demonstrations.'),
          createBullet('Built and deployed the application using modern frontend technologies.'),

          // SECTION: PROJECTS (CONTINUED)
          createSectionHeader('PROJECTS (CONTINUED)'),

          // Project 5: MEDICAL INSURANCE AND HEALTHCARE COST ANALYSIS
          new Paragraph({
            spacing: { before: 80, after: 30 },
            children: [
              new TextRun({ text: 'MEDICAL INSURANCE AND HEALTHCARE COST ANALYSIS', bold: true }),
            ],
          }),
          new Paragraph({
            spacing: { after: 60 },
            children: [
              new TextRun({
                text: 'Data Analysis, Statistical Computing, Data Visualization',
                italics: true,
                color: '555555',
                size: 20,
              }),
            ],
          }),
          createBullet('Developed a data analysis project exploring medical insurance and healthcare expenditure patterns.'),
          createBullet('Applied statistical techniques to investigate relationships between healthcare costs and relevant variables, presenting findings through visualisations.'),

          // Project 6: LeetCode Solutions – Data Structures and Algorithms
          new Paragraph({
            spacing: { before: 120, after: 30 },
            children: [
              new TextRun({ text: 'LeetCode Solutions – Data Structures and Algorithms', bold: true }),
            ],
          }),
          new Paragraph({
            spacing: { after: 60 },
            children: [
              new TextRun({
                text: 'Java',
                italics: true,
                color: '555555',
                size: 20,
              }),
            ],
          }),
          createBullet('Practising data structures and algorithms through structured problem-solving and maintaining a GitHub repository of solutions.'),
          createBullet('Working on problems involving arrays, binary search, searching techniques and mathematical algorithms.'),

          // SECTION: CERTIFICATIONS
          createSectionHeader('CERTIFICATIONS'),
          new Paragraph({
            spacing: { before: 80, after: 20 },
            children: [
              new TextRun({ text: 'Learning Graph Neural Networks', bold: true }),
              new TextRun({ text: ' – LinkedIn Learning | September 2026' }),
            ],
          }),
          createBullet('Explored graph-based machine learning concepts, including nodes, edges, graph representations and neural network architectures for relational data.'),

          new Paragraph({
            spacing: { before: 100, after: 20 },
            children: [
              new TextRun({ text: 'Programming Foundations: Discrete Mathematics', bold: true }),
              new TextRun({ text: ' – LinkedIn Learning | September 2026' }),
            ],
          }),
          createBullet('Studied logic, set theory, relations, functions, combinatorics and graph theory, foundational to computer science and algorithm development.'),

          new Paragraph({
            spacing: { before: 100, after: 20 },
            children: [
              new TextRun({ text: 'The Complete Full-Stack Web Development Bootcamp', bold: true }),
              new TextRun({ text: ' – Udemy (Dr. Angela Yu) | July 2026' }),
            ],
          }),
          createBullet('Completed training in frontend and backend development, covering HTML, CSS, JavaScript, React, Node.js, Express.js, SQL and PostgreSQL; built responsive websites and full-stack applications.'),

          // SECTION: ACTIVITIES & ACHIEVEMENTS
          createSectionHeader('ACTIVITIES & ACHIEVEMENTS'),
          createBullet('Secured 8th place among 48 teams at the Hack and Crack event organised by The Turing Club, Jain University.'),
          createBullet('Collaborated on a team-based technical project under hackathon time constraints and contributed to project development and presentation.'),
        ],
      },
    ],
  });

  const buffer = await Packer.toBuffer(doc);
  const outDir = path.resolve(process.cwd(), 'public');
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  const outPath = path.join(outDir, 'Asmita_Das_Resume.docx');
  fs.writeFileSync(outPath, buffer);
  console.log(`Successfully generated DOCX at ${outPath} (${buffer.length} bytes)`);

  // Also create a copy as resume.docx for convenience
  fs.writeFileSync(path.join(outDir, 'resume.docx'), buffer);
}

function createSectionHeader(title: string): Paragraph {
  return new Paragraph({
    spacing: { before: 200, after: 80 },
    border: {
      bottom: {
        color: '333333',
        space: 3,
        style: BorderStyle.SINGLE,
        size: 8,
      },
    },
    children: [
      new TextRun({
        text: title,
        bold: true,
        size: 24, // 12pt
        color: '1A1A1A',
        font: 'Calibri',
      }),
    ],
  });
}

function createSkillLine(category: string, skills: string, isLast = false): Paragraph {
  return new Paragraph({
    spacing: { after: isLast ? 140 : 40 },
    children: [
      new TextRun({ text: `${category}: `, bold: true }),
      new TextRun({ text: skills }),
    ],
  });
}

function createBullet(text: string): Paragraph {
  return new Paragraph({
    bullet: { level: 0 },
    spacing: { after: 40, line: 240 },
    children: [new TextRun({ text })],
  });
}

generateDocx().catch((err) => {
  console.error('Error generating docx:', err);
  process.exit(1);
});
