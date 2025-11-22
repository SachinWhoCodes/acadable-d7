import React, { useState } from 'react';
import { ArrowLeft, Search, Shuffle, Star, Plus, ExternalLink, CheckCircle2, Circle, ChevronDown, ChevronRight, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import CourseSidebar from "@/components/CourseSidebar";

interface Problem {
  id: string;
  name: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  completed: boolean;
  starred: boolean;
  leetcodeUrl?: string;
  gfgUrl?: string;
  codeforcesUrl?: string;
  hasNotes: boolean;
}

interface CourseStep {
  id: string;
  title: string;
  description: string;
  totalProblems: number;
  completedProblems: number;
  subSteps: {
    id: string;
    title: string;
    problems: Problem[];
  }[];
}

const CoursePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('All Problems');
  const [openAccordions, setOpenAccordions] = useState<string[]>(['step-1']);

  // Sample course data
  const courseData: CourseStep[] = [
    {
      id: 'step-1',
      title: 'Learn the basics',
      description: 'Fundamentals of programming and basic concepts',
      totalProblems: 31,
      completedProblems: 31,
      subSteps: [
        {
          id: 'basics-easy',
          title: 'Lec 1: Easy Problems',
          problems: [
            {
              id: '1',
              name: 'Two Sum',
              difficulty: 'Easy',
              completed: true,
              starred: false,
              leetcodeUrl: 'https://leetcode.com/problems/two-sum/',
              gfgUrl: 'https://www.geeksforgeeks.org/given-an-array-a-and-a-number-x-check-for-pair-in-a-with-sum-as-x/',
              hasNotes: false
            },
            {
              id: '2',
              name: 'Reverse Integer',
              difficulty: 'Easy',
              completed: true,
              starred: true,
              leetcodeUrl: 'https://leetcode.com/problems/reverse-integer/',
              gfgUrl: 'https://www.geeksforgeeks.org/write-a-program-to-reverse-digits-of-a-number/',
              hasNotes: true
            }
          ]
        }
      ]
    },
    {
      id: 'step-12',
      title: 'Greedy Algorithms [Easy, Medium/Hard]',
      description: 'Master greedy approach to problem solving',
      totalProblems: 16,
      completedProblems: 5,
      subSteps: [
        {
          id: 'greedy-easy',
          title: 'Lec 1: Easy Problems',
          problems: [
            {
              id: '3',
              name: 'Assign Cookies',
              difficulty: 'Easy',
              completed: true,
              starred: false,
              leetcodeUrl: 'https://leetcode.com/problems/assign-cookies/',
              gfgUrl: 'https://www.geeksforgeeks.org/assign-cookies/',
              hasNotes: false
            },
            {
              id: '4',
              name: 'Lemonade Change',
              difficulty: 'Easy',
              completed: false,
              starred: false,
              leetcodeUrl: 'https://leetcode.com/problems/lemonade-change/',
              gfgUrl: 'https://www.geeksforgeeks.org/lemonade-change/',
              hasNotes: false
            }
          ]
        },
        {
          id: 'greedy-medium',
          title: 'Lec 2: Medium/Hard',
          problems: [
            {
              id: '5',
              name: 'N meetings in one room',
              difficulty: 'Medium',
              completed: true,
              starred: false,
              leetcodeUrl: 'https://leetcode.com/problems/meeting-rooms/',
              gfgUrl: 'https://www.geeksforgeeks.org/find-maximum-meetings-in-one-room/',
              hasNotes: false
            },
            {
              id: '6',
              name: 'Jump Game',
              difficulty: 'Medium',
              completed: false,
              starred: true,
              leetcodeUrl: 'https://leetcode.com/problems/jump-game/',
              gfgUrl: 'https://www.geeksforgeeks.org/minimum-number-of-jumps-to-reach-end-of-a-given-array/',
              codeforcesUrl: 'https://codeforces.com/problemset/problem/1455/C',
              hasNotes: false
            }
          ]
        }
      ]
    }
  ];

  const totalProblems = courseData.reduce((sum, step) => sum + step.totalProblems, 0);
  const totalCompleted = courseData.reduce((sum, step) => sum + step.completedProblems, 0);
  const progressPercentage = Math.round((totalCompleted / totalProblems) * 100);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'text-green-400';
      case 'Medium': return 'text-yellow-400';
      case 'Hard': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getDifficultyStats = () => {
    let easy = 0, medium = 0, hard = 0;
    let easyCompleted = 0, mediumCompleted = 0, hardCompleted = 0;

    courseData.forEach(step => {
      step.subSteps.forEach(subStep => {
        subStep.problems.forEach(problem => {
          if (problem.difficulty === 'Easy') {
            easy++;
            if (problem.completed) easyCompleted++;
          } else if (problem.difficulty === 'Medium') {
            medium++;
            if (problem.completed) mediumCompleted++;
          } else {
            hard++;
            if (problem.completed) hardCompleted++;
          }
        });
      });
    });

    return { easy, medium, hard, easyCompleted, mediumCompleted, hardCompleted };
  };

  const stats = getDifficultyStats();

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <div className="border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4 mb-6">
            <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="h-5 w-5" />
              Back to Home
            </Link>
          </div>
          
          <div className="mb-6">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-neon-cyan bg-clip-text text-transparent">
              Striver's A2Z DSA Course
            </h1>
            <p className="text-muted-foreground mb-4 max-w-4xl">
              This course is made for people who want to learn DSA from A to Z for free in a well-organized and structured manner. Master data structures and algorithms with interactive problems, detailed explanations, and comprehensive resources.
            </p>
            <div className="flex flex-wrap gap-4 mb-6">
              <Button variant="outline">
                Know More
              </Button>
              <Button variant="outline" size="sm">
                Track Progress
              </Button>
              <Button variant="outline" size="sm">
                Download Roadmap
              </Button>
            </div>
            
            <div className="p-4 rounded-lg border border-border bg-card/50 mb-6">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Note:</span> You can find <span className="text-primary">LeetCode</span> links for problems available on the internet. However few problems are not there on <span className="text-primary">LeetCode</span> for which you will not find a practice link attached. We cannot use third-party links due to legal constraints.
              </p>
            </div>

            {/* Quick Stats Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="text-center p-4 rounded-lg border border-border bg-card/30">
                <div className="text-2xl font-bold text-primary">{progressPercentage}%</div>
                <div className="text-sm text-muted-foreground">Complete</div>
              </div>
              <div className="text-center p-4 rounded-lg border border-border bg-card/30">
                <div className="text-2xl font-bold text-green-400">{stats.easyCompleted}</div>
                <div className="text-sm text-muted-foreground">Easy Solved</div>
              </div>
              <div className="text-center p-4 rounded-lg border border-border bg-card/30">
                <div className="text-2xl font-bold text-yellow-400">{stats.mediumCompleted}</div>
                <div className="text-sm text-muted-foreground">Medium Solved</div>
              </div>
              <div className="text-center p-4 rounded-lg border border-border bg-card/30">
                <div className="text-2xl font-bold text-red-400">{stats.hardCompleted}</div>
                <div className="text-sm text-muted-foreground">Hard Solved</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area - Two Column Layout */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col xl:flex-row gap-8">
          {/* Left Column - Course Content */}
          <div className="flex-1 xl:w-0">
            {/* Filters and Search */}
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between mb-6">
              <div className="flex gap-2">
                <Button variant={activeFilter === 'All Problems' ? 'default' : 'outline'} size="sm">
                  All Problems
                </Button>
                <Button variant={activeFilter === 'Revision' ? 'default' : 'outline'} size="sm">
                  Revision
                </Button>
              </div>
              
              <div className="flex gap-2 w-full sm:w-auto">
                <div className="relative flex-1 sm:w-64">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search problems..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Button variant="outline" size="sm">
                  <Filter className="h-4 w-4 mr-2" />
                  Difficulty
                </Button>
                <Button variant="outline" size="sm">
                  <Shuffle className="h-4 w-4 mr-2" />
                  Pick Random
                </Button>
              </div>
            </div>

            {/* Course Steps */}
            <div className="space-y-4">
              {courseData.map((step) => (
                <div key={step.id} className="border border-border rounded-lg bg-card/30 backdrop-blur-sm">
                  <Accordion type="multiple" value={openAccordions} onValueChange={setOpenAccordions}>
                    <AccordionItem value={step.id} className="border-none">
                      <AccordionTrigger className="px-6 py-4 hover:no-underline">
                        <div className="flex items-center justify-between w-full mr-4">
                          <div className="flex items-center gap-4">
                            <h3 className="text-lg font-semibold text-left">{step.title}</h3>
                          </div>
                          <div className="flex items-center gap-4">
                            <div className="text-sm text-muted-foreground">
                              {step.completedProblems} / {step.totalProblems}
                            </div>
                            <Progress 
                              value={(step.completedProblems / step.totalProblems) * 100} 
                              className="w-32 h-2"
                            />
                          </div>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-4">
                        <div className="space-y-4">
                          {step.subSteps.map((subStep) => (
                            <div key={subStep.id} className="border border-border rounded-lg bg-card/50">
                              <Accordion type="multiple">
                                <AccordionItem value={subStep.id} className="border-none">
                                  <AccordionTrigger className="px-4 py-3 hover:no-underline">
                                    <div className="flex items-center justify-between w-full mr-4">
                                      <h4 className="font-medium text-left">{subStep.title}</h4>
                                      <div className="text-sm text-muted-foreground">
                                        {subStep.problems.filter(p => p.completed).length} / {subStep.problems.length}
                                      </div>
                                    </div>
                                  </AccordionTrigger>
                                  <AccordionContent className="px-4 pb-4">
                                    <div className="overflow-x-auto">
                                      <table className="w-full">
                                        <thead>
                                          <tr className="border-b border-border">
                                            <th className="text-left py-2 px-2 text-sm font-medium text-muted-foreground">Status</th>
                                            <th className="text-left py-2 px-2 text-sm font-medium text-muted-foreground">Problem</th>
                                            <th className="text-left py-2 px-2 text-sm font-medium text-muted-foreground">Solve</th>
                                            <th className="text-left py-2 px-2 text-sm font-medium text-muted-foreground">Resource</th>
                                            <th className="text-left py-2 px-2 text-sm font-medium text-muted-foreground">Practice</th>
                                            <th className="text-left py-2 px-2 text-sm font-medium text-muted-foreground">Note</th>
                                            <th className="text-left py-2 px-2 text-sm font-medium text-muted-foreground">Revision</th>
                                            <th className="text-left py-2 px-2 text-sm font-medium text-muted-foreground">Difficulty</th>
                                          </tr>
                                        </thead>
                                        <tbody>
                                          {subStep.problems.map((problem) => (
                                            <tr key={problem.id} className="border-b border-border/50 hover:bg-card/50 transition-colors">
                                              <td className="py-3 px-2">
                                                <Checkbox checked={problem.completed} />
                                              </td>
                                              <td className="py-3 px-2 font-medium">
                                                {problem.name}
                                              </td>
                                              <td className="py-3 px-2">
                                                {problem.leetcodeUrl && (
                                                  <Button
                                                    variant="outline"
                                                    size="sm"
                                                    asChild
                                                    className="text-xs"
                                                  >
                                                    <a href={problem.leetcodeUrl} target="_blank" rel="noopener noreferrer">
                                                      Solve
                                                    </a>
                                                  </Button>
                                                )}
                                              </td>
                                              <td className="py-3 px-2">
                                                <div className="flex gap-1">
                                                  {problem.gfgUrl && (
                                                    <Button
                                                      variant="outline"
                                                      size="sm"
                                                      asChild
                                                      className="w-8 h-8 p-0"
                                                    >
                                                      <a href={problem.gfgUrl} target="_blank" rel="noopener noreferrer">
                                                        <span className="text-xs font-bold">G</span>
                                                      </a>
                                                    </Button>
                                                  )}
                                                  {problem.codeforcesUrl && (
                                                    <Button
                                                      variant="outline"
                                                      size="sm"
                                                      asChild
                                                      className="w-8 h-8 p-0"
                                                    >
                                                      <a href={problem.codeforcesUrl} target="_blank" rel="noopener noreferrer">
                                                        <span className="text-xs font-bold">C</span>
                                                      </a>
                                                    </Button>
                                                  )}
                                                </div>
                                              </td>
                                              <td className="py-3 px-2">
                                                {problem.leetcodeUrl && (
                                                  <Button
                                                    variant="outline"
                                                    size="sm"
                                                    asChild
                                                    className="w-8 h-8 p-0"
                                                  >
                                                    <a href={problem.leetcodeUrl} target="_blank" rel="noopener noreferrer">
                                                      <ExternalLink className="h-3 w-3" />
                                                    </a>
                                                  </Button>
                                                )}
                                              </td>
                                              <td className="py-3 px-2">
                                                <Button
                                                  variant="ghost"
                                                  size="sm"
                                                  className="w-8 h-8 p-0 hover:bg-primary/10"
                                                >
                                                  <Plus className="h-3 w-3" />
                                                </Button>
                                              </td>
                                              <td className="py-3 px-2">
                                                <Button
                                                  variant="ghost"
                                                  size="sm"
                                                  className={`w-8 h-8 p-0 ${problem.starred ? 'text-yellow-400 hover:bg-yellow-400/10' : 'hover:bg-primary/10'}`}
                                                >
                                                  <Star className={`h-3 w-3 ${problem.starred ? 'fill-current' : ''}`} />
                                                </Button>
                                              </td>
                                              <td className="py-3 px-2">
                                                <Badge variant="outline" className={`${getDifficultyColor(problem.difficulty)} border-current`}>
                                                  {problem.difficulty}
                                                </Badge>
                                              </td>
                                            </tr>
                                          ))}
                                        </tbody>
                                      </table>
                                    </div>
                                  </AccordionContent>
                                </AccordionItem>
                              </Accordion>
                            </div>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="xl:w-80 xl:flex-shrink-0">
            <div className="sticky top-20">
              <CourseSidebar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePage;