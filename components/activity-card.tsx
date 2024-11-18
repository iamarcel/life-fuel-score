import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Activity } from '@/lib/types';
import { LFSLabel } from './lfs-label';
import { FactorChart } from './factor-chart';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';
import { cn } from '@/lib/utils';
import { CSSProperties } from 'react';

interface ActivityCardProps {
  activity: Activity & { score: number };
  className?: string;
  style?: CSSProperties
}

export function ActivityCard({ activity, className, style }: ActivityCardProps) {
  return (
    <Card className={cn(`overflow-hidden`, className)} style={style}>
      <CardHeader className="space-y-1">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl">{activity.name}</CardTitle>
          <Badge
            variant={activity.score >= 70 ? 'default' : activity.score >= 40 ? 'secondary' : 'destructive'}
          >
            LFS {activity.score}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">{activity.description}</p>
        <div className="p-4 bg-muted/50 rounded-lg">
          <LFSLabel score={activity.score} />
        </div>
        <Accordion type="single" collapsible>
          <AccordionItem value="details">
            <AccordionTrigger>Details</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-4">Impact Factors</h4>
                  <FactorChart factors={activity.factors} />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Benefits</h4>
                  <ul className="list-disc pl-4 space-y-1">
                    {activity.benefits.map((benefit, index) => (
                      <li key={index} className="text-sm">{benefit}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Risks</h4>
                  <ul className="list-disc pl-4 space-y-1">
                    {activity.risks.map((risk, index) => (
                      <li key={index} className="text-sm">{risk}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
}