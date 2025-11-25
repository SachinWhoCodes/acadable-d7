import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { X, CheckCircle2, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface IdeaSubmissionModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const techStackOptions = [
  "React", "Vue", "Angular", "Node.js", "Python", "Java", "Go", 
  "TypeScript", "PostgreSQL", "MongoDB", "Redis", "AWS", "Docker"
];

const IdeaSubmissionModal = ({ open, onOpenChange }: IdeaSubmissionModalProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [selectedTech, setSelectedTech] = useState<string[]>([]);
  
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    college: "",
    ideaTitle: "",
    problemStatement: "",
    proposedSolution: "",
    track: "",
    stage: "",
    githubLink: "",
    additionalNotes: "",
  });

  const handleTechToggle = (tech: string) => {
    setSelectedTech(prev =>
      prev.includes(tech)
        ? prev.filter(t => t !== tech)
        : [...prev, tech]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.fullName || !formData.email || !formData.ideaTitle || 
        !formData.problemStatement || !formData.proposedSolution || 
        !formData.track || !formData.stage) {
      toast({
        title: "Missing Required Fields",
        description: "Please fill in all required fields marked with *",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    
    // Reset after 3 seconds
    setTimeout(() => {
      setIsSuccess(false);
      onOpenChange(false);
      // Reset form
      setFormData({
        fullName: "",
        email: "",
        college: "",
        ideaTitle: "",
        problemStatement: "",
        proposedSolution: "",
        track: "",
        stage: "",
        githubLink: "",
        additionalNotes: "",
      });
      setSelectedTech([]);
    }, 3000);
  };

  if (isSuccess) {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-[500px]">
          <div className="flex flex-col items-center justify-center py-12 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8 text-green-500" />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">Idea Submitted Successfully!</h3>
              <p className="text-muted-foreground">
                Your idea has been submitted to the Acadable Innovation team. 
                We'll review it and get back to you within 3-5 business days.
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <div>
              <DialogTitle className="text-2xl">Submit Your Idea</DialogTitle>
              <DialogDescription className="mt-2">
                Step 1 of 1 – Tell us about your innovative project
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 py-4">
          {/* Personal Information */}
          <div className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name *</Label>
                <Input
                  id="fullName"
                  placeholder="John Doe"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="college">College / Organization</Label>
              <Input
                id="college"
                placeholder="Your university or organization"
                value={formData.college}
                onChange={(e) => setFormData({ ...formData, college: e.target.value })}
              />
              <p className="text-xs text-muted-foreground">Optional</p>
            </div>
          </div>

          {/* Idea Details */}
          <div className="space-y-4 pt-4 border-t">
            <div className="space-y-2">
              <Label htmlFor="ideaTitle">Idea Title *</Label>
              <Input
                id="ideaTitle"
                placeholder="Give your idea a catchy name"
                value={formData.ideaTitle}
                onChange={(e) => setFormData({ ...formData, ideaTitle: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="problemStatement">Problem Statement *</Label>
              <Textarea
                id="problemStatement"
                placeholder="What problem are you trying to solve? Who faces this problem?"
                rows={4}
                value={formData.problemStatement}
                onChange={(e) => setFormData({ ...formData, problemStatement: e.target.value })}
                required
              />
              <p className="text-xs text-muted-foreground">Describe the problem clearly and concisely</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="proposedSolution">Proposed Solution *</Label>
              <Textarea
                id="proposedSolution"
                placeholder="How will your solution address this problem? What makes it unique?"
                rows={4}
                value={formData.proposedSolution}
                onChange={(e) => setFormData({ ...formData, proposedSolution: e.target.value })}
                required
              />
              <p className="text-xs text-muted-foreground">Explain your approach and key features</p>
            </div>
          </div>

          {/* Project Details */}
          <div className="space-y-4 pt-4 border-t">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="track">Track *</Label>
                <Select value={formData.track} onValueChange={(value) => setFormData({ ...formData, track: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a track" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="web">Web Development</SelectItem>
                    <SelectItem value="mobile">Mobile Development</SelectItem>
                    <SelectItem value="ai-ml">AI/ML</SelectItem>
                    <SelectItem value="tools-devops">Tools/DevOps</SelectItem>
                    <SelectItem value="open-source">Open Source</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="stage">Current Stage *</Label>
                <Select value={formData.stage} onValueChange={(value) => setFormData({ ...formData, stage: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select stage" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="idea">Just an Idea</SelectItem>
                    <SelectItem value="prototype">Rough Prototype</SelectItem>
                    <SelectItem value="mvp">Working MVP</SelectItem>
                    <SelectItem value="live">Live Product</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label>Preferred Tech Stack</Label>
              <div className="flex flex-wrap gap-2 p-3 border rounded-lg bg-muted/30">
                {techStackOptions.map((tech) => (
                  <Badge
                    key={tech}
                    variant={selectedTech.includes(tech) ? "default" : "outline"}
                    className="cursor-pointer transition-all hover:scale-105"
                    onClick={() => handleTechToggle(tech)}
                  >
                    {tech}
                    {selectedTech.includes(tech) && (
                      <X className="ml-1 h-3 w-3" />
                    )}
                  </Badge>
                ))}
              </div>
              <p className="text-xs text-muted-foreground">Click to select/deselect technologies</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="githubLink">GitHub / Project Link</Label>
              <Input
                id="githubLink"
                type="url"
                placeholder="https://github.com/yourusername/project"
                value={formData.githubLink}
                onChange={(e) => setFormData({ ...formData, githubLink: e.target.value })}
              />
              <p className="text-xs text-muted-foreground">Optional – share if you have a repository</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="additionalNotes">Additional Notes</Label>
              <Textarea
                id="additionalNotes"
                placeholder="Any other information you'd like to share..."
                rows={3}
                value={formData.additionalNotes}
                onChange={(e) => setFormData({ ...formData, additionalNotes: e.target.value })}
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Button 
              type="submit" 
              className="flex-1" 
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                "Submit Idea"
              )}
            </Button>
            <Button 
              type="button" 
              variant="outline" 
              onClick={() => window.open("https://discord.gg/acadable", "_blank")}
            >
              Not ready? Join Community
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default IdeaSubmissionModal;
