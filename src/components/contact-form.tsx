export function ContactForm() {
  return (
    <form className="surface pixel-corner p-6 md:p-8">
      <div className="mb-8 space-y-3">
        <span className="section-kicker">Contact form</span>
        <h2 className="text-3xl font-semibold text-white">Tell us what needs to work.</h2>
        <p className="text-sm leading-7 text-slate-400">
          This is a static frontend form for now. Use it as the structure for a future
          backend or CRM integration.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <label className="space-y-2 text-sm text-slate-300">
          <span>Name</span>
          <input className="form-input" type="text" name="name" placeholder="Your name" />
        </label>

        <label className="space-y-2 text-sm text-slate-300">
          <span>Company</span>
          <input className="form-input" type="text" name="company" placeholder="Company name" />
        </label>

        <label className="space-y-2 text-sm text-slate-300">
          <span>Email</span>
          <input className="form-input" type="email" name="email" placeholder="name@company.com" />
        </label>

        <label className="space-y-2 text-sm text-slate-300">
          <span>Project type</span>
          <select className="form-input" name="projectType" defaultValue="">
            <option value="" disabled>
              Select a track
            </option>
            <option value="ai-app">AI application</option>
            <option value="llm-system">LLM system</option>
            <option value="workflow">Workflow tooling</option>
            <option value="advisory">Strategy and advisory</option>
          </select>
        </label>

        <label className="space-y-2 text-sm text-slate-300 md:col-span-2">
          <span>Project brief</span>
          <textarea
            className="form-textarea"
            name="message"
            placeholder="What is the workflow, team, or business problem you want to solve?"
          />
        </label>
      </div>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-slate-500">
          Preferred response channel: email, product review, or scoped delivery discussion.
        </p>
        <button type="submit" className="button-primary">
          Send inquiry
        </button>
      </div>
    </form>
  );
}
