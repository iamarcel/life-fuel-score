"use client";

import { ComponentType } from 'react';
import { Button } from '@/components/ui/button';
import { useToPng } from '@hugocxl/react-to-image';

export function withImageDownload<T extends object>(
  WrappedComponent: ComponentType<T>,
  filename: string = 'image.png'
) {
  return function WithImageDownloadComponent(props: T) {
    const [_, convert, ref] = useToPng<HTMLDivElement>({
      quality: 0.8,
      onSuccess: (data) => {
        const link = document.createElement('a');
        link.download = filename;
        link.href = data;
        link.click();
      },
    });

    return (
      <div className="space-y-6">
        <div className="mx-auto max-w-3xl border border-border rounded-xl p-8">
          <div ref={ref} className="mx-auto">
            <WrappedComponent {...props} />
          </div>
        </div>
        <div className="text-center">
          <Button onClick={convert} size="lg">
            Save as Image
          </Button>
        </div>
      </div>
    );
  };
}
