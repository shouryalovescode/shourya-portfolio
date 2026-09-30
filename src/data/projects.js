export const projects = [
  {
    id: 'fairmatch', name: 'FairMatch',
    description: 'Explainable, data-driven resume screening and job matching system that shows why a candidate matches a role.',
    stack: ['React.js', 'FastAPI', 'Python', 'NLP', 'TF-IDF', 'REST API'],
    features: ['Resume PDF/DOCX processing', 'Job description analysis', 'Technical skill extraction', 'TF-IDF and cosine similarity', 'Explainable weighted scoring', 'Candidate comparison', 'Fairness guardrails', 'Model evaluation'],
    live: 'https://fair-match-delta.vercel.app/', github: null,
  },
  {
    id: 'retail', name: 'Retail Insight',
    description: 'Retail analytics and customer intelligence project that predicts high-value customers and explains the drivers.',
    stack: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Scikit-learn', 'XGBoost', 'Streamlit'],
    features: ['Retail sales analysis', 'Customer segmentation and features', 'High-value customer prediction', 'Random Forest and XGBoost', 'Feature importance', 'Interactive analytics dashboard'],
    live: null, github: null,
  },
  {
    id: 'hr', name: 'HR Management Portal',
    description: 'Full-stack HR / employee management system built during my internship at Infinite Computer Solutions.',
    stack: ['React.js', 'Node.js', 'Express.js', 'PostgreSQL'],
    features: ['Authentication', 'Role-based access', 'Admin/User permissions', 'Protected routes', 'Employee management (CRUD)', 'REST APIs', 'Search and pagination', 'Form validation'],
    live: null, github: null,
  },
]
