'use client';
import AtomEnvironmentContent from '@/components/markdown/AtomEnvironmentContent/AtomEnvironmentContent';
import FAQContent from '@/components/markdown/FAQContent/FAQContent';
import FlightManualContent from '@/components/markdown/FlightManualContent/FlightManualContent';

const FlightManualPage = ({ params }: { params: { slug: string } }) => {
  const { slug } = params;

  return (
    <div>
      {!slug && <FlightManualContent />}
      {slug === 'faq' && <FAQContent />}
      {slug === 'environment' && <AtomEnvironmentContent />}
    </div>
  );
};

export default FlightManualPage;
