
export const metadata = { title: "Contact | Khanna Architects" };

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <h1 className="text-3xl font-semibold md:text-4xl">Contact</h1>
      <p className="mt-4 max-w-3xl text-white/75">
        Share your location, plot size, and timeline. We’ll respond with next steps.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="text-lg font-semibold">Reach us</div>
          <div className="mt-4 grid gap-2 text-sm text-white/70">
            <a className="hover:text-white" href="tel:+919810039775">
              Phone: +91 98100 39775
            </a>
            <a className="hover:text-white" href="mailto:Contactskhanna@yahoo.com">
              Email: Contactskhanna@yahoo.com
            </a>
            <a
              className="hover:text-white"
              href="https://wa.me/919810039775"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp: Click to chat
            </a>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="text-lg font-semibold">Quick email</div>
          <p className="mt-2 text-sm text-white/70">
            Opens your email app with a pre-filled template.
          </p>

          <a
            className="mt-5 inline-flex w-fit rounded-full bg-white px-5 py-3 text-sm font-medium text-black hover:bg-white/90"
            href={
              "mailto:Contactskhanna@yahoo.com?subject=Project%20Inquiry%20-%20Khanna%20Architects&body=Hi%20Khanna%20Architects,%0D%0A%0D%0AI%20want%20to%20discuss%20a%20project.%0D%0ALocation:%0D%0APlot%20size:%0D%0AType%20(Residential/Commercial):%0D%0ATimeline:%0D%0ABudget%20range:%0D%0A%0D%0AThanks,%0D%0AName:%0D%0APhone:"
            }
          >
            Email inquiry
          </a>
        </div>
      </div>
    </div>
  );
}
