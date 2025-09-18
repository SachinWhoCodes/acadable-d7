import React from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  BookOpen, 
  Trophy, 
  Star, 
  ExternalLink, 
  Code, 
  Target, 
  TrendingUp,
  Users,
  Calendar,
  Award,
  Zap,
  FileText
} from 'lucide-react';

const CourseSidebar = () => {
  const leaderboardData = [
    { rank: 1, name: "Rahul Sharma", solved: 342, streak: 15 },
    { rank: 2, name: "Priya Patel", solved: 298, streak: 12 },
    { rank: 3, name: "Arjun Kumar", solved: 276, streak: 8 },
    { rank: 4, name: "Sneha Singh", solved: 254, streak: 6 },
    { rank: 5, name: "Vikash Yadav", solved: 231, streak: 4 },
  ];

  const dsaResources = [
    { title: "Time Complexity Guide", type: "Article", difficulty: "Beginner" },
    { title: "Dynamic Programming Patterns", type: "Video", difficulty: "Advanced" },
    { title: "Graph Algorithms Cheat Sheet", type: "PDF", difficulty: "Intermediate" },
    { title: "Binary Search Templates", type: "Code", difficulty: "Intermediate" },
  ];

  const suggestedCourses = [
    { title: "System Design Fundamentals", progress: 0, difficulty: "Advanced" },
    { title: "Web Development Bootcamp", progress: 23, difficulty: "Beginner" },
    { title: "Machine Learning Basics", progress: 0, difficulty: "Intermediate" },
  ];

  return (
    <div className="space-y-6 p-4">
      {/* Quick Stats */}
      <Card className="p-6 bg-gradient-to-r from-primary/10 to-neon-cyan/10 border-primary/20">
        <div className="flex items-center gap-3 mb-4">
          <Target className="h-5 w-5 text-primary" />
          <h3 className="font-semibold text-lg">Your Progress</h3>
        </div>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Problems Solved</span>
            <span className="font-bold text-primary">179/455</span>
          </div>
          <Progress value={39} className="h-2" />
          <div className="grid grid-cols-2 gap-4 pt-2">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400">81</div>
              <div className="text-xs text-muted-foreground">Easy</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-400">75</div>
              <div className="text-xs text-muted-foreground">Medium</div>
            </div>
          </div>
        </div>
      </Card>

      {/* Study Streak */}
      <Card className="p-6 bg-gradient-to-r from-orange-500/10 to-red-500/10 border-orange-500/20">
        <div className="flex items-center gap-3 mb-4">
          <Zap className="h-5 w-5 text-orange-400" />
          <h3 className="font-semibold text-lg">Study Streak</h3>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-orange-400 mb-2">7 Days</div>
          <p className="text-sm text-muted-foreground">Keep it up! You're on fire 🔥</p>
          <div className="flex justify-center gap-1 mt-3">
            {[...Array(7)].map((_, i) => (
              <div key={i} className="w-6 h-6 rounded bg-orange-400/20 flex items-center justify-center">
                <div className="w-3 h-3 rounded bg-orange-400"></div>
              </div>
            ))}
          </div>
        </div>
      </Card>

      {/* Leaderboard */}
      <Card className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <Trophy className="h-5 w-5 text-yellow-400" />
          <h3 className="font-semibold text-lg">Leaderboard</h3>
        </div>
        <div className="space-y-3">
          {leaderboardData.map((user, index) => (
            <div key={user.rank} className="flex items-center gap-3 p-2 rounded-lg hover:bg-card/50 transition-colors">
              <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                index === 0 ? 'bg-yellow-400 text-black' :
                index === 1 ? 'bg-gray-400 text-black' :
                index === 2 ? 'bg-amber-600 text-white' :
                'bg-muted text-muted-foreground'
              }`}>
                {user.rank}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium truncate">{user.name}</div>
                <div className="text-xs text-muted-foreground">{user.solved} solved</div>
              </div>
              <div className="flex items-center gap-1 text-xs text-orange-400">
                <Zap className="h-3 w-3" />
                {user.streak}
              </div>
            </div>
          ))}
        </div>
        <Button variant="outline" size="sm" className="w-full mt-4">
          View Full Leaderboard
        </Button>
      </Card>

      {/* DSA Resources */}
      <Card className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <BookOpen className="h-5 w-5 text-neon-blue" />
          <h3 className="font-semibold text-lg">DSA Resources</h3>
        </div>
        <div className="space-y-3">
          {dsaResources.map((resource, index) => (
            <div key={index} className="p-3 rounded-lg border border-border/50 hover:bg-card/50 transition-colors cursor-pointer">
              <div className="flex items-start justify-between gap-2">
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-medium truncate">{resource.title}</h4>
                  <div className="flex items-center gap-2 mt-1">
                    <Badge variant="outline" className="text-xs">
                      {resource.type}
                    </Badge>
                    <Badge variant="outline" className={`text-xs ${
                      resource.difficulty === 'Beginner' ? 'text-green-400 border-green-400/50' :
                      resource.difficulty === 'Intermediate' ? 'text-yellow-400 border-yellow-400/50' :
                      'text-red-400 border-red-400/50'
                    }`}>
                      {resource.difficulty}
                    </Badge>
                  </div>
                </div>
                <ExternalLink className="h-4 w-4 text-muted-foreground flex-shrink-0" />
              </div>
            </div>
          ))}
        </div>
        <Button variant="outline" size="sm" className="w-full mt-4">
          Browse All Resources
        </Button>
      </Card>

      {/* Course Suggestions */}
      <Card className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <TrendingUp className="h-5 w-5 text-neon-green" />
          <h3 className="font-semibold text-lg">Suggested Courses</h3>
        </div>
        <div className="space-y-4">
          {suggestedCourses.map((course, index) => (
            <div key={index} className="p-3 rounded-lg border border-border/50 hover:bg-card/50 transition-colors">
              <div className="flex items-start justify-between gap-2 mb-2">
                <h4 className="text-sm font-medium">{course.title}</h4>
                <Badge variant="outline" className={`text-xs ${
                  course.difficulty === 'Beginner' ? 'text-green-400 border-green-400/50' :
                  course.difficulty === 'Intermediate' ? 'text-yellow-400 border-yellow-400/50' :
                  'text-red-400 border-red-400/50'
                }`}>
                  {course.difficulty}
                </Badge>
              </div>
              {course.progress > 0 ? (
                <div>
                  <div className="flex justify-between text-xs text-muted-foreground mb-1">
                    <span>Progress</span>
                    <span>{course.progress}%</span>
                  </div>
                  <Progress value={course.progress} className="h-1" />
                </div>
              ) : (
                <Button variant="outline" size="sm" className="w-full">
                  Start Course
                </Button>
              )}
            </div>
          ))}
        </div>
      </Card>

      {/* Study Plan */}
      <Card className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <Calendar className="h-5 w-5 text-neon-purple" />
          <h3 className="font-semibold text-lg">Today's Plan</h3>
        </div>
        <div className="space-y-3">
          <div className="flex items-center gap-3 p-2 rounded-lg bg-card/30">
            <div className="w-2 h-2 rounded-full bg-green-400"></div>
            <span className="text-sm">Complete 3 Easy problems</span>
            <Badge variant="outline" className="ml-auto text-xs">2/3</Badge>
          </div>
          <div className="flex items-center gap-3 p-2 rounded-lg bg-card/30">
            <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
            <span className="text-sm">Review Dynamic Programming</span>
            <Badge variant="outline" className="ml-auto text-xs">Todo</Badge>
          </div>
          <div className="flex items-center gap-3 p-2 rounded-lg bg-card/30">
            <div className="w-2 h-2 rounded-full bg-red-400"></div>
            <span className="text-sm">Attempt 1 Hard problem</span>
            <Badge variant="outline" className="ml-auto text-xs">Todo</Badge>
          </div>
        </div>
      </Card>

      {/* Achievement */}
      <Card className="p-6 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border-purple-500/20">
        <div className="flex items-center gap-3 mb-4">
          <Award className="h-5 w-5 text-purple-400" />
          <h3 className="font-semibold text-lg">Recent Achievement</h3>
        </div>
        <div className="text-center">
          <div className="w-16 h-16 rounded-full bg-purple-400/20 flex items-center justify-center mx-auto mb-3">
            <Star className="h-8 w-8 text-purple-400 fill-current" />
          </div>
          <h4 className="font-semibold mb-1">Array Master!</h4>
          <p className="text-sm text-muted-foreground">Completed all array problems</p>
        </div>
      </Card>

      {/* Ad Space */}
      <Card className="p-6 bg-gradient-to-r from-neon-blue/10 to-neon-cyan/10 border-neon-blue/20">
        <div className="text-center">
          <Code className="h-12 w-12 text-neon-blue mx-auto mb-3" />
          <h3 className="font-semibold mb-2">Acadable Premium</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Unlock advanced features, detailed solutions, and personalized learning paths
          </p>
          <Button variant="neon" size="sm" className="w-full">
            Upgrade Now
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default CourseSidebar;