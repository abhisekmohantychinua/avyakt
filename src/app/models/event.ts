export interface Event {
  poster?: string;
  title?: string;
  desc?: string;
  participation?: 'SOLO' | 'TEAM' | 'BOTH';
  type?: 'technical' | 'non-technical' | 'cultural';
  contact?: Array<{
    name?: string;
    phone?: number;
  }>;
  rules?: Array<String>;
}
