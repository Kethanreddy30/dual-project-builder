import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card'
import { Badge } from './components/ui/badge'
import { Button } from './components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs'
import { Code2, Database, Github, Linkedin, Mail, Phone, Briefcase, GraduationCap, Award, ExternalLink } from 'lucide-react'

function App() {
  const [activeTab, setActiveTab] = useState('fullstack')

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-foreground">Kethan Reddy</h1>
              <p className="mt-2 text-lg text-muted-foreground">Software Developer & Data Engineer</p>
            </div>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" asChild>
                <a href="https://github.com/kethanreddy30" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://linkedin.com/in/kethan-reddy" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="mailto:kethanreddy407@gmail.com">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="tel:+917032230677">
                  <Phone className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        {/* Portfolio Selector */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-12">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-2 h-14">
            <TabsTrigger value="fullstack" className="text-base">
              <Code2 className="mr-2 h-5 w-5" />
              Full-Stack Developer
            </TabsTrigger>
            <TabsTrigger value="dataengineer" className="text-base">
              <Database className="mr-2 h-5 w-5" />
              Data Engineer
            </TabsTrigger>
          </TabsList>

          {/* Full-Stack Developer Portfolio */}
          <TabsContent value="fullstack" className="mt-8 space-y-8">
            {/* Summary */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Passionate software developer with a strong foundation in building end-to-end applications. 
                  Experienced in understanding real-world problems, designing practical solutions, and delivering 
                  reliable software. Eager to explore new technologies, collaborate with cross-functional teams, 
                  and deliver high-quality solutions.
                </p>
              </CardContent>
            </Card>

            {/* Work Experience */}
            <div>
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Briefcase className="h-8 w-8" />
                Work Experience
              </h2>
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>Software Developer Intern</CardTitle>
                        <CardDescription className="text-base mt-1">CodeTree Software Solutions Pvt. Ltd</CardDescription>
                      </div>
                      <Badge variant="secondary" className="text-sm">Jan 2025 - Apr 2025</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Implemented eKYC verification system with biometric integration and facial recognition</li>
                      <li>Designed RESTful APIs for KYC document verification, validation, and secure data retrieval</li>
                      <li>Built Role-Based Access Control (RBAC) system with multi-level user permissions and access policies</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>Research Intern</CardTitle>
                        <CardDescription className="text-base mt-1">SRM University</CardDescription>
                      </div>
                      <Badge variant="secondary" className="text-sm">Jan 2024 - Apr 2024</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Gathered requirements from multiple departments and translated them into a structured intranet portal</li>
                      <li>Created scalable portal components to support efficient handling of internal data</li>
                      <li>Designed reusable components and modular services to ensure maintainability</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Projects */}
            <div>
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Code2 className="h-8 w-8" />
                Projects
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle>Dynamic Full-Stack E-Commerce Platform</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                      <li>Developed end-to-end e-commerce web application for browsing, ordering, and tracking</li>
                      <li>Implemented backend services for users, products, and orders with secure data handling</li>
                      <li>Designed responsive and intuitive UI for mobile and desktop devices</li>
                    </ul>
                    <div className="flex flex-wrap gap-2 pt-2">
                      <Badge variant="outline">MERN Stack</Badge>
                      <Badge variant="outline">REST API</Badge>
                      <Badge variant="outline">Responsive Design</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle>Online Learning & Course Management</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                      <li>Built web-based platform to manage courses, learning materials, and student enrollments</li>
                      <li>Developed backend workflows for course creation and user activity tracking</li>
                      <li>Improved accessibility with clean and user-friendly interface</li>
                    </ul>
                    <div className="flex flex-wrap gap-2 pt-2">
                      <Badge variant="outline">Full-Stack</Badge>
                      <Badge variant="outline">Database Design</Badge>
                      <Badge variant="outline">UX/UI</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Skills */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Technical Skills</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-3">Programming & Web Development</h4>
                  <div className="flex flex-wrap gap-2">
                    {['HTML', 'CSS', 'JavaScript', 'MERN Stack', 'C++', 'Java', 'Python'].map(skill => (
                      <Badge key={skill}>{skill}</Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Tools & Platforms</h4>
                  <div className="flex flex-wrap gap-2">
                    {['GitHub', 'VS Code', 'Postman', 'AWS', 'XAMPP'].map(skill => (
                      <Badge key={skill} variant="secondary">{skill}</Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Soft Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Problem Solving', 'Analytical Thinking', 'Teamwork', 'Adaptability', 'Communication'].map(skill => (
                      <Badge key={skill} variant="outline">{skill}</Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Data Engineer Portfolio */}
          <TabsContent value="dataengineer" className="mt-8 space-y-8">
            {/* Summary */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Data Engineer with a strong foundation in data analysis and data-driven problem solving. 
                  Comfortable working with data, understanding systems, and contributing to reliable solutions. 
                  Eager to learn new technologies, adapt to evolving tools, and grow in real-world data 
                  engineering environments.
                </p>
              </CardContent>
            </Card>

            {/* Work Experience */}
            <div>
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Briefcase className="h-8 w-8" />
                Work Experience
              </h2>
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>Data Engineer Intern</CardTitle>
                        <CardDescription className="text-base mt-1">Edubot</CardDescription>
                      </div>
                      <Badge variant="secondary" className="text-sm">Jun 2024 - Jul 2024</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Processed, cleaned, and transformed raw datasets to support analytical and business decision-making</li>
                      <li>Built data models and performed exploratory data analysis to identify trends and patterns</li>
                      <li>Created visual reports and dashboards to communicate insights effectively to stakeholders</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>Research Intern</CardTitle>
                        <CardDescription className="text-base mt-1">SRM University</CardDescription>
                      </div>
                      <Badge variant="secondary" className="text-sm">Aug 2025 - Dec 2025</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Developed real-time video anomaly detection system for CCTV surveillance</li>
                      <li>Designed and trained spatio-temporal deep learning model for pattern detection</li>
                      <li>Evaluated system performance on benchmark surveillance datasets</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Projects */}
            <div>
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Database className="h-8 w-8" />
                AI & Data Engineering Projects
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle>Vehicle Type Classification System</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                      <li>Built automated vehicle classification pipeline using object detection and deep learning</li>
                      <li>Applied image preprocessing and feature extraction for improved accuracy</li>
                      <li>Evaluated model performance on large-scale datasets for traffic monitoring</li>
                    </ul>
                    <div className="flex flex-wrap gap-2 pt-2">
                      <Badge variant="outline">Deep Learning</Badge>
                      <Badge variant="outline">Computer Vision</Badge>
                      <Badge variant="outline">Object Detection</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle>Fuzzy-Based Intelligent Decision System</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                      <li>Designed fuzzy inference system to handle uncertainty in decision-making</li>
                      <li>Integrated rule-based reasoning with optimization techniques</li>
                      <li>Validated system behavior through simulations for improved consistency</li>
                    </ul>
                    <div className="flex flex-wrap gap-2 pt-2">
                      <Badge variant="outline">Fuzzy Logic</Badge>
                      <Badge variant="outline">AI Systems</Badge>
                      <Badge variant="outline">Optimization</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow md:col-span-2">
                  <CardHeader>
                    <CardTitle>GenAI RAG-Based Smart Information System</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                      <li>Developed Retrieval-Augmented Generation (RAG) system for context-aware responses</li>
                      <li>Implemented document indexing, semantic search, and prompt orchestration</li>
                      <li>Built end-to-end pipeline for intelligent query handling and knowledge retrieval</li>
                    </ul>
                    <div className="flex flex-wrap gap-2 pt-2">
                      <Badge variant="outline">GenAI</Badge>
                      <Badge variant="outline">RAG</Badge>
                      <Badge variant="outline">Semantic Search</Badge>
                      <Badge variant="outline">NLP</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Skills */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Technical Skills</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-3">Data & AI Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Python', 'SQL', 'Deep Learning', 'Computer Vision', 'Data Analytics', 'GenAI (RAG)'].map(skill => (
                      <Badge key={skill}>{skill}</Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Tools & Platforms</h4>
                  <div className="flex flex-wrap gap-2">
                    {['GitHub', 'VS Code', 'Jupyter Notebook', 'Google Colab', 'AWS'].map(skill => (
                      <Badge key={skill} variant="secondary">{skill}</Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Soft Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Problem Solving', 'Analytical Thinking', 'Teamwork', 'Adaptability', 'Communication'].map(skill => (
                      <Badge key={skill} variant="outline">{skill}</Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Education (Common to both) */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold flex items-center gap-3">
            <GraduationCap className="h-8 w-8" />
            Education
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">B.Tech in Computer Science</CardTitle>
                <CardDescription>SRM University AP</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">2022 - 2026</p>
                <p className="text-sm font-semibold mt-2">CGPA: 8.16</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Intermediate (MPC)</CardTitle>
                <CardDescription>FIITJEE</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">2019 - 2021</p>
                <p className="text-sm font-semibold mt-2">Percentage: 97.1%</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Secondary School</CardTitle>
                <CardDescription>Narayana</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">2018 - 2019</p>
                <p className="text-sm font-semibold mt-2">Grade: 9.8</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Achievements */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-3">
              <Award className="h-7 w-7" />
              Achievements
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-start gap-3">
                <Award className="h-6 w-6 text-primary mt-1" />
                <div>
                  <p className="font-semibold">AWS Certified Cloud Practitioner</p>
                  <p className="text-sm text-muted-foreground">Cloud Computing Certification</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Award className="h-6 w-6 text-primary mt-1" />
                <div>
                  <p className="font-semibold">IMO Gold Medalist</p>
                  <p className="text-sm text-muted-foreground">International Mathematics Olympiad</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Award className="h-6 w-6 text-primary mt-1" />
                <div>
                  <p className="font-semibold">Math Club Leader</p>
                  <p className="text-sm text-muted-foreground">Led Events and Workshops</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-16 py-8 bg-muted/30">
        <div className="container mx-auto px-6 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 Kethan Reddy. All rights reserved.</p>
          <p className="mt-2">Built with React, TypeScript, and Tailwind CSS</p>
        </div>
      </footer>
    </div>
  )
}

export default App
