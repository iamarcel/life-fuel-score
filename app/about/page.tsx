import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Brain, Heart, Zap } from 'lucide-react';
import { SocialShare } from '@/components/social-share';

export default function About() {
  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">About Life Fuel Score</h1>
        <p className="text-xl text-muted-foreground">
          Understanding and optimizing our daily activities for better mental well-being
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader>
            <Brain className="w-8 h-8 mb-2 text-primary" />
            <CardTitle>Mental Impact</CardTitle>
            <CardDescription>
              How activities affect our cognitive function and mental clarity
            </CardDescription>
          </CardHeader>
          <CardContent>
            We evaluate activities based on their impact on focus, attention span, and mental energy.
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <Heart className="w-8 h-8 mb-2 text-primary" />
            <CardTitle>Emotional Health</CardTitle>
            <CardDescription>
              The emotional and psychological effects of our daily choices
            </CardDescription>
          </CardHeader>
          <CardContent>
            Understanding how different activities influence our mood, stress levels, and emotional well-being.
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <Zap className="w-8 h-8 mb-2 text-primary" />
            <CardTitle>Long-term Benefits</CardTitle>
            <CardDescription>
              Sustainable practices for lasting well-being
            </CardDescription>
          </CardHeader>
          <CardContent>
            Identifying activities that contribute to long-term happiness and fulfillment.
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>How LFS Works</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            The Life Fuel Score (LFS) is a comprehensive rating system that evaluates activities based on their impact on human well-being, particularly focusing on dopamine release and overall mental health.
          </p>
          <p>
            Each activity is scored on a scale of 0-100, taking into account factors such as:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Immediate vs. long-term benefits</li>
            <li>Impact on mental clarity and focus</li>
            <li>Effect on emotional well-being</li>
            <li>Contribution to personal growth</li>
            <li>Social connection quality</li>
            <li>Physical health benefits</li>
          </ul>
        </CardContent>
      </Card>

      <SocialShare />
    </div>
  );
}