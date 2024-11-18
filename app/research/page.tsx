import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { AlertTriangle, BookOpen, Brain, FlaskConical } from 'lucide-react';
import Link from 'next/link';

export default function Research() {
  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Research & Methodology</h1>
        <p className="text-xl text-muted-foreground">
          Understanding the science behind Life Fuel Score
        </p>
      </div>

      <Alert>
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Prototype Stage</AlertTitle>
        <AlertDescription className="flex flex-col gap-4">
          <p>
          The current Life Fuel Score system is a prototype designed to demonstrate the concept.
          The scoring algorithm and data are preliminary and will be refined based on scientific research.
          </p>

          <Link href="https://github.com/iamarcel/life-fuel-score" target="_blank">
            <Button>Contribute on GitHub</Button>
          </Link>
        </AlertDescription>
      </Alert>

      <Card>
        <CardHeader>
          <FlaskConical className="w-8 h-8 mb-2 text-primary" />
          <CardTitle>Research Needed</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Area</TableHead>
                <TableHead>Current Status</TableHead>
                <TableHead>Required Research</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Dopamine Response</TableCell>
                <TableCell>Estimated</TableCell>
                <TableCell>
                  <ul className="list-disc pl-4">
                    <li>Neuroscience studies measuring dopamine levels during activities</li>
                    <li>Temporal patterns of dopamine release</li>
                    <li>Individual variation in response</li>
                  </ul>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Long-term Impact</TableCell>
                <TableCell>Theoretical</TableCell>
                <TableCell>
                  <ul className="list-disc pl-4">
                    <li>Longitudinal studies on activity effects</li>
                    <li>Mental health outcomes</li>
                    <li>Behavioral adaptation patterns</li>
                  </ul>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Social Effects</TableCell>
                <TableCell>Preliminary</TableCell>
                <TableCell>
                  <ul className="list-disc pl-4">
                    <li>Social connection quality metrics</li>
                    <li>Community impact studies</li>
                    <li>Cultural variation analysis</li>
                  </ul>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Health Correlation</TableCell>
                <TableCell>Basic</TableCell>
                <TableCell>
                  <ul className="list-disc pl-4">
                    <li>Physical health markers</li>
                    <li>Stress response patterns</li>
                    <li>Sleep quality correlation</li>
                  </ul>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <Brain className="w-8 h-8 mb-2 text-primary" />
            <CardTitle>Current Algorithm Factors</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              <li>
                <strong>Dopamine Release Intensity (DRI)</strong>
                <p className="text-sm text-muted-foreground">
                  Estimated immediate dopamine response based on available literature
                  and expert opinions. Needs validation through clinical studies.
                </p>
              </li>
              <li>
                <strong>Sustainability Factor (SF)</strong>
                <p className="text-sm text-muted-foreground">
                  Theoretical measure of long-term sustainability and benefit.
                  Requires longitudinal research for validation.
                </p>
              </li>
              <li>
                <strong>Social Impact (SI)</strong>
                <p className="text-sm text-muted-foreground">
                  Preliminary assessment of social connection quality and community
                  engagement. Needs standardized metrics.
                </p>
              </li>
              <li>
                <strong>Health Impact (HI)</strong>
                <p className="text-sm text-muted-foreground">
                  Basic health correlation based on existing health research.
                  Requires more specific activity-related health studies.
                </p>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <BookOpen className="w-8 h-8 mb-2 text-primary" />
            <CardTitle>Next Steps</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              <li>
                <strong>Research Partnerships</strong>
                <p className="text-sm text-muted-foreground">
                  Collaborate with universities and research institutions for
                  clinical studies and data collection.
                </p>
              </li>
              <li>
                <strong>Data Collection Framework</strong>
                <p className="text-sm text-muted-foreground">
                  Develop standardized methods for measuring activity impacts
                  across different populations and contexts.
                </p>
              </li>
              <li>
                <strong>Algorithm Refinement</strong>
                <p className="text-sm text-muted-foreground">
                  Update scoring system based on empirical data and peer review.
                </p>
              </li>
              <li>
                <strong>Community Feedback</strong>
                <p className="text-sm text-muted-foreground">
                  Gather user experiences and real-world application data to
                  improve the system.
                </p>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}