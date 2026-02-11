exports.getCourses = (req, res) => {
  res.json([
    { id: 1, name: 'AWS Fundamentals', level: 'Beginner' },
    { id: 2, name: 'Docker & Containers', level: 'Intermediate' },
    { id: 3, name: 'CI/CD with GitHub Actions', level: 'Advanced' },
    { id: 4, name: 'Terraform on AWS', level: 'Advanced' }
  ]);
};

