import React, { useState } from 'react';
import { ArrowLeft, Building2 } from 'lucide-react';
import OrientationScreen from './OrientationScreen';

interface VentureBuilderProps {
  onBack: () => void;
}

const VentureBuilder: React.FC<VentureBuilderProps> = ({ onBack }) => {
  const [ventureType, setVentureType] = useState<'new' | 'existing' | null>(null);

  const handleSelectVentureType = (type: 'new' | 'existing') => {
    setVentureType(type);
    // Here you would implement the actual venture building flow
    console.log(`Selected venture type: ${type}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-linkedin-background via-linkedin-dark to-linkedin-background">
      {/* Header */}
      <div className="px-6 py-4 border-b border-linkedin-border">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              onClick={onBack}
              className="p-2 bg-linkedin-card hover:bg-linkedin-card/70 text-white rounded-lg transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div>
              <h1 className="text-2xl font-bold text-white">Venture Builder</h1>
              <p className="text-gray-300">Build your venture with AI guidance</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {!ventureType ? (
          <OrientationScreen onSelectVentureType={handleSelectVentureType} />
        ) : (
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-linkedin to-linkedin-light rounded-full flex items-center justify-center mx-auto mb-6">
              <Building2 className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">
              {ventureType === 'new' ? 'New Venture Builder' : 'Existing Venture Enhancement'}
            </h2>
            <p className="text-gray-300 mb-8">
              The venture building flow for {ventureType} ventures will be implemented here.
            </p>
            <button
              onClick={onBack}
              className="bg-linkedin hover:bg-linkedin-dark text-white px-6 py-3 rounded-lg transition-colors"
            >
              Return to Platform
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default VentureBuilder;