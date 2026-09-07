import SectionWrapper from './SectionWrapper';
import { navigateTo } from '../utils/navigation';

export default function Flagships({ id }) {
  const handleNavigate = (path) => (e) => {
    e.preventDefault();
    navigateTo(path);
  };

  return (
    <SectionWrapper id={id}>
      <div className="section-label">Flagships</div>
      <h2 className="font-space text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-[1.15] tracking-[-0.02em] mb-8 max-w-[800px] reveal">
        Most deployed. Proven in production.
      </h2>
      <p className="text-[1.05rem] text-muted max-w-[600px] leading-[1.7] reveal">
        The AI solutions we deploy most—selected for their reliability, adaptability, and measurable business impact.
      </p>

      <div className="grid grid-cols-1 min-[900px]:grid-cols-2 gap-0 min-[900px]:gap-16 mt-12 reveal">
        <div>
          <a
            href="/voice"
            onClick={handleNavigate('/voice')}
            className="block py-8 border-b border-border transition-[padding-left] duration-300 hover:pl-4 text-text no-underline cursor-pointer"
          >
            <h3 className="font-space text-[1.3rem] font-semibold mb-2">AI Voice Systems ↝</h3>
            <p className="text-[0.9rem] text-muted leading-[1.6]">
              Intelligent conversational agents that handle inbound and outbound calls, qualify leads, and provide 24/7 support with human-like latency.
            </p>
          </a>
          <a
            href="/autogrowth"
            onClick={handleNavigate('/autogrowth')}
            className="block py-8 border-b border-border transition-[padding-left] duration-300 hover:pl-4 text-text no-underline cursor-pointer"
          >
            <h3 className="font-space text-[1.3rem] font-semibold mb-2">Growth Automation ↝</h3>
            <p className="text-[0.9rem] text-muted leading-[1.6]">
              Scale your outreach and marketing efforts with automated campaigns, intelligent lead scoring, and personalized content generation.
            </p>
          </a>
        </div>
        <div>
          <a
            href="/Bizintel"
            onClick={handleNavigate('/Bizintel')}
            className="block py-8 border-b border-border transition-[padding-left] duration-300 hover:pl-4 text-text no-underline cursor-pointer"
          >
            <h3 className="font-space text-[1.3rem] font-semibold mb-2">Business Intelligence ↝</h3>
            <p className="text-[0.9rem] text-muted leading-[1.6]">
              Transform scattered data into real-time dashboards, predictive analytics, and automated reporting systems that drive executive decision-making.
            </p>
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
}
