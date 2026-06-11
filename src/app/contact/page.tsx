import { ContactForm } from "@/components/ContactForm";
import { PlatformPanelConsole } from "@/components/PlatformRoutePage";
import { contactChannels } from "@/content/site";
import { pages } from "@/content/pages";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(pages.contact.title, pages.contact.description, "/contact");

export default function ContactPage() {
  const briefingSteps = [
    "Route the inquiry to Labs, Solutions, Health, training, or embedded delivery.",
    "Map the workflow, data, users, constraints, and business owner.",
    "Propose the first useful system shape before the build conversation expands.",
  ];

  const signals = ["AI systems", "Business workflows", "Healthcare ops", "Capability transfer"];

  return (
    <main>
      <section className="contact-platform-hero">
        <div className="contact-platform-copy">
          <p className="eyebrow">Platform briefing</p>
          <h1>Start with the workflow. We will map the system.</h1>
          <p>
            Tell Ignitz what you want to build, automate, train, or staff. The first
            response should route you to the right platform path, not a generic sales loop.
          </p>
          <div className="contact-signal-row" aria-label="Ignitz contact routing signals">
            {signals.map((signal) => (
              <span key={signal}>{signal}</span>
            ))}
          </div>
        </div>
        <div className="contact-briefing-panel" aria-label="Ignitz briefing process">
          <span>What happens next</span>
          <PlatformPanelConsole
            active="Route"
            items={["Intake", "Route", "Map", "Brief"]}
            label="Briefing console"
            primary="Route the inquiry to a system path"
            secondary="Workflow, owner, data, and first useful shape"
            status="Ready"
          />
          <h2>One short intake. A clearer system path.</h2>
          <ol>
            {briefingSteps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </div>
      </section>
      <section className="contact-conversion-section" aria-label="Contact Ignitz">
        <div className="contact-channel-board">
          <p className="eyebrow">Direct routes</p>
          <h2>Talk to the right Ignitz team.</h2>
          <p>
            Use the form for project context. Use direct channels when you already
            know the route or want to schedule the first conversation quickly.
          </p>
          <div className="contact-channel-grid">
            {contactChannels.map((channel) => (
              <a href={channel.href} key={channel.label}>
                <span>{channel.label}</span>
                <strong>{channel.value}</strong>
              </a>
            ))}
          </div>
        </div>
        <ContactForm />
      </section>
    </main>
  );
}
