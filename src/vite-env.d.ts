/// <reference types="vite/client" />

interface Window {
  gtag: (command: string, ...args: any[]) => void;
  dataLayer: any[];
  jotformEmbedHandler: (selector: string, baseUrl: string) => void;
}