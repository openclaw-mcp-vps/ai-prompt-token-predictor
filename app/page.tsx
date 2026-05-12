export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-medium tracking-wide uppercase">
          AI Prompt Management
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Predict Token Usage{" "}
          <span className="text-[#58a6ff]">Before You Send</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Analyze any prompt and get exact token counts and costs across OpenAI, Anthropic, and more — before you execute. Stop guessing, start optimizing.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block px-8 py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold text-base hover:bg-[#79b8ff] transition-colors"
        >
          Get Started — $15/mo
        </a>
        <p className="mt-3 text-sm text-[#6e7681]">Cancel anytime. No hidden fees.</p>

        {/* Mock UI Preview */}
        <div className="mt-14 rounded-xl border border-[#30363d] bg-[#161b22] p-6 text-left shadow-xl">
          <div className="mb-3 flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#f85149]"></span>
            <span className="w-3 h-3 rounded-full bg-[#e3b341]"></span>
            <span className="w-3 h-3 rounded-full bg-[#3fb950]"></span>
            <span className="ml-2 text-xs text-[#6e7681]">Token Predictor</span>
          </div>
          <div className="rounded-md bg-[#0d1117] border border-[#30363d] p-3 text-sm text-[#8b949e] mb-4">
            Summarize the following article in 3 bullet points, focusing on key insights for a technical audience...
          </div>
          <div className="grid grid-cols-3 gap-3">
            {[
              { model: "GPT-4o", tokens: "312", cost: "$0.0016" },
              { model: "Claude 3.5", tokens: "298", cost: "$0.0009" },
              { model: "GPT-3.5", tokens: "312", cost: "$0.0002" }
            ].map((m) => (
              <div key={m.model} className="rounded-md bg-[#0d1117] border border-[#30363d] p-3">
                <div className="text-xs text-[#58a6ff] font-medium mb-1">{m.model}</div>
                <div className="text-white font-bold text-lg">{m.tokens}</div>
                <div className="text-xs text-[#6e7681]">tokens</div>
                <div className="mt-1 text-xs text-[#3fb950]">{m.cost}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="rounded-xl border border-[#58a6ff] bg-[#161b22] p-8 text-center shadow-lg">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-wide mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$15</div>
          <div className="text-[#6e7681] text-sm mb-6">/month</div>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Unlimited prompt analyses",
              "10+ AI models supported",
              "Real-time cost calculator",
              "Token breakdown by message",
              "Export reports as CSV",
              "Priority support"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#3fb950] font-bold">✓</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold hover:bg-[#79b8ff] transition-colors"
          >
            Subscribe Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "Which AI models are supported?",
              a: "We support all major OpenAI models (GPT-4o, GPT-4, GPT-3.5), Anthropic Claude models (Claude 3.5 Sonnet, Claude 3 Opus, Haiku), and more are added regularly."
            },
            {
              q: "How accurate are the token predictions?",
              a: "We use the same tokenization libraries (tiktoken for OpenAI, claude tokenizer for Anthropic) that the APIs use internally, so predictions are exact — not estimates."
            },
            {
              q: "Can I cancel my subscription anytime?",
              a: "Yes. Cancel anytime from your billing portal with no questions asked. You keep access until the end of your billing period."
            }
          ].map(({ q, a }) => (
            <div key={q} className="rounded-lg border border-[#30363d] bg-[#161b22] p-5">
              <div className="font-semibold text-white mb-2">{q}</div>
              <div className="text-sm text-[#8b949e]">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#30363d] py-6 text-center text-xs text-[#6e7681]">
        © {new Date().getFullYear()} AI Prompt Token Predictor. All rights reserved.
      </footer>
    </main>
  );
}
