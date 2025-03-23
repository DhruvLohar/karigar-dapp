"use client";

import React, { useState } from "react";
import { LineChart, ArrowLeft, Loader2, Calendar, Share2, Instagram, Facebook, Newspaper, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";

export default function AIMarketingPlannerPage() {
  const [productInfo, setProductInfo] = useState("");
  const [targetAudience, setTargetAudience] = useState("");
  const [budget, setBudget] = useState("");
  const [timeframe, setTimeframe] = useState("1month");
  const [platforms, setPlatforms] = useState<string[]>(["instagram", "facebook"]);
  const [loading, setLoading] = useState(false);
  const [marketingPlan, setMarketingPlan] = useState<any>(null);
  const { toast } = useToast();

  const handlePlatformChange = (platform: string) => {
    if (platforms.includes(platform)) {
      setPlatforms(platforms.filter(p => p !== platform));
    } else {
      setPlatforms([...platforms, platform]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await fetch('/api/ai-marketing-planner', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          productInfo,
          targetAudience,
          budget,
          timeframe,
          platforms
        }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to generate marketing plan');
      }
      
      const data = await response.json();
      setMarketingPlan(data);
    } catch (error) {
      console.error('Error generating marketing plan:', error);
      toast({
        title: "Error",
        description: "Failed to generate marketing plan. Please try again.",
        variant: "destructive",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = () => {
    // Create a blob with the marketing plan data
    const blob = new Blob([JSON.stringify(marketingPlan, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    // Create a temporary anchor element and trigger download
    const a = document.createElement('a');
    a.href = url;
    a.download = 'marketing-plan.json';
    document.body.appendChild(a);
    a.click();
    
    // Clean up
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    toast({
      title: "Downloaded!",
      description: "Marketing plan downloaded successfully",
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center mb-6">
        <Link href="/artisan/home">
          <Button variant="ghost" className="p-0 mr-2">
            <ArrowLeft className="h-5 w-5 text-dori" />
          </Button>
        </Link>
        <h1 className="text-3xl font-bold text-dori flex items-center">
          <LineChart className="mr-2 h-6 w-6" /> AI Marketing Planner
        </h1>
      </div>
      
      <div className="grid grid-cols-1 gap-8">
        <Card className="bg-white shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl text-dori">Create Your Marketing Plan</CardTitle>
            <CardDescription>
              Provide details about your products and business, and our AI will generate a targeted marketing strategy
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="productInfo">Tell us about your products</Label>
                  <Textarea 
                    id="productInfo" 
                    placeholder="Describe your products, their unique features, and what makes them special" 
                    value={productInfo}
                    onChange={(e) => setProductInfo(e.target.value)}
                    className="min-h-[100px]"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="targetAudience">Who is your target audience?</Label>
                  <Textarea 
                    id="targetAudience" 
                    placeholder="Describe the people most likely to buy your products - age, interests, location, etc." 
                    value={targetAudience}
                    onChange={(e) => setTargetAudience(e.target.value)}
                    className="min-h-[100px]"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="budget">Monthly Marketing Budget (₹)</Label>
                  <Input 
                    id="budget" 
                    type="number"
                    placeholder="e.g. 5000" 
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="timeframe">Marketing Plan Timeframe</Label>
                  <Select value={timeframe} onValueChange={setTimeframe}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select timeframe" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1month">1 Month</SelectItem>
                      <SelectItem value="3month">3 Months</SelectItem>
                      <SelectItem value="6month">6 Months</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label>Marketing Platforms</Label>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <Button 
                      type="button"
                      variant={platforms.includes("instagram") ? "default" : "outline"}
                      className={platforms.includes("instagram") ? "bg-blue-950 text-white" : ""}
                      onClick={() => handlePlatformChange("instagram")}
                    >
                      <Instagram className="mr-2 h-4 w-4" />
                      Instagram
                    </Button>
                    <Button 
                      type="button"
                      variant={platforms.includes("facebook") ? "default" : "outline"}
                      className={platforms.includes("facebook") ? "bg-blue-950 text-white" : ""}
                      onClick={() => handlePlatformChange("facebook")}
                    >
                      <Facebook className="mr-2 h-4 w-4" />
                      Facebook
                    </Button>
                    <Button 
                      type="button"
                      variant={platforms.includes("blog") ? "default" : "outline"}
                      className={platforms.includes("blog") ? "bg-blue-950 text-white" : ""}
                      onClick={() => handlePlatformChange("blog")}
                    >
                      <Newspaper className="mr-2 h-4 w-4" />
                      Blog
                    </Button>
                  </div>
                </div>
              </div>
              
              <Button 
                type="submit" 
                className="w-full mt-6 bg-blue-950 text-white hover:bg-blue-950/90"
                disabled={loading || platforms.length === 0}
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Generating Plan...
                  </>
                ) : (
                  <>
                    <LineChart className="mr-2 h-4 w-4" />
                    Generate Marketing Plan
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
        
        {marketingPlan && (
          <Card className="bg-white shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl text-dori">Your Marketing Plan</CardTitle>
              <CardDescription>
                {marketingPlan.summary}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="overview">
                <TabsList className="mb-4">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="platforms">Platform Strategies</TabsTrigger>
                  <TabsTrigger value="calendar">Content Calendar</TabsTrigger>
                  <TabsTrigger value="budget">Budget Allocation</TabsTrigger>
                </TabsList>
                
                <TabsContent value="overview" className="space-y-4">
                  <div className="p-4 bg-blue-950/10 rounded-lg">
                    <h3 className="font-semibold text-lg text-dori mb-2">Marketing Summary</h3>
                    <p>{marketingPlan.summary}</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg text-dori mb-2">Platforms</h3>
                    <div className="flex flex-wrap gap-2">
                      {marketingPlan.platforms.map((platform: any, index: number) => (
                        <Badge key={index} className="px-3 py-1 bg-blue-950/20 text-dori hover:bg-blue-950/40">
                          {platform.name.charAt(0).toUpperCase() + platform.name.slice(1)}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg text-dori mb-2">Key Focus Areas</h3>
                    <ul className="list-disc list-inside">
                      {marketingPlan.calendar.map((week: any, index: number) => (
                        <li key={index} className="mb-1">{week.focus}</li>
                      ))}
                    </ul>
                  </div>
                </TabsContent>
                
                <TabsContent value="platforms">
                  <Accordion type="single" collapsible className="w-full">
                    {marketingPlan.platforms.map((platform: any, index: number) => (
                      <AccordionItem key={index} value={`platform-${index}`}>
                        <AccordionTrigger data-value={`platform-${index}`}>
                          {platform.name.charAt(0).toUpperCase() + platform.name.slice(1)} Strategy
                        </AccordionTrigger>
                        <AccordionContent data-value={`platform-${index}`}>
                          <div className="space-y-3">
                            <p><span className="font-semibold">Strategy:</span> {platform.strategy}</p>
                            <div>
                              <p className="font-semibold mb-1">Content Ideas:</p>
                              <ul className="list-disc list-inside">
                                {platform.contentIdeas.map((idea: string, i: number) => (
                                  <li key={i}>{idea}</li>
                                ))}
                              </ul>
                            </div>
                            <p><span className="font-semibold">Recommended Posting Schedule:</span> {platform.postingSchedule}</p>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </TabsContent>
                
                <TabsContent value="calendar">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {marketingPlan.calendar.map((week: any, index: number) => (
                      <Card key={index} className="border border-blue-950/20">
                        <CardHeader className="pb-2">
                          <div className="flex items-center">
                            <Calendar className="mr-2 h-4 w-4 text-dori" />
                            <CardTitle className="text-md">Week {week.week}</CardTitle>
                          </div>
                          <CardDescription><span className="font-medium">Focus:</span> {week.focus}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-1">
                            {week.activities.map((activity: string, i: number) => (
                              <li key={i} className="flex items-start">
                                <Check className="mr-2 h-4 w-4 text-green-500 mt-0.5" />
                                <span>{activity}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="budget">
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg text-dori">Budget Allocation (₹{budget})</h3>
                    
                    <div className="space-y-4">
                      {marketingPlan.budgetAllocation.map((item: any, index: number) => (
                        <div key={index} className="space-y-1">
                          <div className="flex justify-between">
                            <span className="font-medium">{item.category}</span>
                            <span>{item.amount} ({item.percentage}%)</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div 
                              className="bg-dori h-2.5 rounded-full" 
                              style={{ width: `${item.percentage}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-4 p-4 bg-blue-950/10 rounded-lg">
                      <h4 className="font-semibold mb-2">Budget Recommendations</h4>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Consider allocating more to content creation in initial months</li>
                        <li>For limited budgets, focus on organic growth with periodic paid promotions</li>
                        <li>Track ROI on different platforms and adjust allocation accordingly</li>
                      </ul>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button 
                onClick={handleDownload}
                className="bg-blue-950 text-white hover:bg-blue-950/90"
              >
                <Share2 className="mr-2 h-4 w-4" />
                Download Plan
              </Button>
            </CardFooter>
          </Card>
        )}
      </div>
    </div>
  );
}