import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatsCardProps {
  icon: LucideIcon;
  value: string;
  label: string;
}

const StatsCard: React.FC<StatsCardProps> = ({ icon: Icon, value, label }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover-lift">
      <div className="flex items-center mb-4">
        <div className="bg-primary-100 p-3 rounded-lg animate-scale-in">
          <Icon className="h-6 w-6 text-primary-600" />
        </div>
      </div>
      <div className="text-2xl font-bold text-gray-900 mb-1 animate-slide-up">{value}</div>
      <div className="text-sm text-gray-600 animate-slide-up">{label}</div>
    </div>
  );
};

export default StatsCard;