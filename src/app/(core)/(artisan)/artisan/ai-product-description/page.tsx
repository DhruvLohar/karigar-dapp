"use client";

import React, { useState } from "react";
import { Sparkles, ArrowLeft, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";

export default function AIProductDescriptionPage() {
  const [productName, setProductName] = useState("");
  const [productType, setProductType] = useState("");
  const [keyFeatures, setKeyFeatures] = useState("");
  const [targetAudience, setTargetAudience] = useState("");
  const [tone, setTone] = useState("professional");
  const [loading, setLoading] = useState(false);
  const [generatedDescription, setGeneratedDescription] = useState("");
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await fetch('/api/ai-product-description', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          productName,
          productType,
          keyFeatures,
          targetAudience,
          tone
        }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to generate description');
      }
      
      const data = await response.json();
      setGeneratedDescription(data.description);
    } catch (error) {
      console.error('Error generating product description:', error);
      toast({
        title: "Error",
        description: "Failed to generate product description. Please try again.",
        variant: "destructive",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedDescription);
    toast({
      title: "Copied!",
      description: "Product description copied to clipboard",
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
          <Sparkles className="mr-2 h-6 w-6" /> AI Product Description Generator
        </h1>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="bg-white shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl text-dori">Create Your Product Description</CardTitle>
            <CardDescription>
              Fill in the details about your product and our AI will generate a compelling description
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="productName">Product Name</Label>
                  <Input 
                    id="productName" 
                    placeholder="e.g. Madhubani Painted Cotton Stole" 
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="productType">Product Type</Label>
                  <Input 
                    id="productType" 
                    placeholder="e.g. Handloom textile, Pottery, Woodcraft" 
                    value={productType}
                    onChange={(e) => setProductType(e.target.value)}
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="keyFeatures">Key Features (comma separated)</Label>
                  <Input 
                    id="keyFeatures" 
                    placeholder="e.g. hand-painted, natural dyes, sustainable" 
                    value={keyFeatures}
                    onChange={(e) => setKeyFeatures(e.target.value)}
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="targetAudience">Target Audience</Label>
                  <Input 
                    id="targetAudience" 
                    placeholder="e.g. home decor enthusiasts, fashion-conscious women" 
                    value={targetAudience}
                    onChange={(e) => setTargetAudience(e.target.value)}
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="tone">Tone of Description</Label>
                  <Select value={tone} onValueChange={setTone}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select tone" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="professional">Professional</SelectItem>
                      <SelectItem value="casual">Casual & Friendly</SelectItem>
                      <SelectItem value="luxury">Luxury & Premium</SelectItem>
                      <SelectItem value="traditional">Traditional & Cultural</SelectItem>
                      <SelectItem value="modern">Modern & Trendy</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <Button 
                type="submit" 
                className="w-full mt-6 bg-blue-950 text-white hover:bg-blue-950/90"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Sparkles className="mr-2 h-4 w-4" />
                    Generate Description
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
        
        <Card className="bg-white shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl text-dori">Generated Description</CardTitle>
            <CardDescription>
              Your AI-crafted product description will appear here
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="border rounded-md p-4 min-h-[300px] bg-gray-50 overflow-y-auto">
              {generatedDescription ? (
                <div className="whitespace-pre-line">{generatedDescription}</div>
              ) : (
                <div className="text-gray-400 flex items-center justify-center h-full">
                  Fill in the form and generate your product description
                </div>
              )}
            </div>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button 
              onClick={handleCopy} 
              className="bg-blue-950 text-white hover:bg-blue-950/90"
              disabled={!generatedDescription}
            >
              Copy to Clipboard
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}