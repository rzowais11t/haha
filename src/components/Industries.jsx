import SectionWrapper from './SectionWrapper';

export default function Industries() {
  const industries = [
    { num: '(0.1)', title: 'Finance', desc: 'Automate compliance pipelines, real-time risk modeling, algorithmic fraud detection, and high-frequency document processing for institutional scale.', examples: ['Automated regulatory reporting engine', 'Real-time credit risk assessment workflow'] },
    { num: '(0.2)', title: 'Healthcare', desc: 'Deploy compliant patient triage models, medical record synthesis, automated claims processing, and EHR workflow optimization.', examples: ['Automated patient chart summarization', 'Intelligent medical claims routing'] },
    { num: '(0.3)', title: 'Logistics', desc: 'Optimize supply chain telemetry, dynamic fleet routing, automated manifest extraction, and warehouse inventory forecasting.', examples: ['Supply chain bottleneck prediction engine', 'Automated customs document processing'] },
    { num: '(0.4)', title: 'Legal', desc: 'Streamline contract analysis, clause risk scoring, rapid case precedent discovery, and automated due diligence workflows.', examples: ['Enterprise contract review & redlining AI', 'Automated discovery document tagging'] },
    { num: '(0.5)', title: 'Professional Services', desc: 'Accelerate client onboarding, internal knowledge retrieval, RFP response generation, and automated project resource tracking.', examples: ['Automated proposal & RFP generation engine', 'Internal firm knowledge base search agent'] },
    { num: '(0.6)', title: 'Manufacturing', desc: 'Integrate computer vision quality assurance, predictive machine maintenance, factory floor telemetry, and automated inventory leveling.', examples: ['Real-time visual defect detection pipeline', 'Predictive equipment downtime alert system'] },
  ];

  return (
    <SectionWrapper>
      <div className="section-label">Industries & Regions</div>
      <h2 className="font-space text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-[1.15] tracking-[-0.02em] reveal">
        Where we operate.
      </h2>

      <div className="mt-16 relative reveal">
        {industries.map((ind, idx) => (
          <div
            key={idx}
            className="stack-card sticky bg-[#0f0f0f] border-t border-white/15 p-8 min-[900px]:p-12 h-auto min-[900px]:h-[42vh] flex flex-col [box-shadow:0_-10px_40px_rgba(0,0,0,0.6)]"
            style={{ 
              '--card-index': idx + 1,
            }}
          >
            {/* We will handle the responsive top via a tailwind arbitrarily applied style or standard inline style. Since CSS variables were used in HTML, we can just use inline styles directly for top. Note that max-900px uses 60px + index * 28px. We can use a media query for that in standard CSS or just use inline logic if window matches, but it's easier to put a small class in index.css */}
            <div className="flex flex-col gap-5 min-[900px]:gap-8 h-full industry-card-inner">
              <div className="flex justify-between items-center border-b border-white/10 pb-4">
                <h3 className="font-space text-[1.2rem] min-[900px]:text-[2.5rem] font-medium uppercase">{ind.title}</h3>
                <span className="font-space text-[1.5rem] text-muted">{ind.num}</span>
              </div>
              <div className="flex flex-col min-[900px]:flex-row justify-between gap-5 min-[900px]:gap-8">
                <p className="max-w-full min-[900px]:max-w-[500px] text-[0.95rem] min-[900px]:text-[1.1rem] text-muted leading-[1.6]">
                  {ind.desc}
                </p>
                <div className="flex-1 max-w-full min-[900px]:max-w-[400px] flex flex-col">
                  <h4 className="text-[0.85rem] font-semibold text-text border-b border-white/10 pb-2 mb-0">Project examples</h4>
                  <ul className="list-none flex flex-col">
                    {ind.examples.map((ex, i) => (
                      <li key={i} className="text-[0.9rem] text-muted py-3 border-b border-white/5">{ex}</li>
                    ))}
                  </ul>
                  <div className="flex gap-6 justify-end pt-2 text-text text-[1rem] cursor-pointer">← →</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
