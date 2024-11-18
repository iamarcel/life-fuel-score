"use client";

import { SocialCardGraphic } from './social-card-graphic';
import { withImageDownload } from './with-image-download';

const DownloadableSocialCard = withImageDownload(SocialCardGraphic, 'life-fuel-score.png');

export function SocialShare() {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Share Your Life Fuel Journey</h2>
        <p className="text-muted-foreground">Spread the word about optimizing your daily activities for better well-being</p>
      </div>
      
      <DownloadableSocialCard />
    </div>
  );
}
