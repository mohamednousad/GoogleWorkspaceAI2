import Chat from "./Chat";

const PERPLEXITY = "https://www.perplexity.ai/";
const SCHOLAR = "https://scholar.google.com/";

export default function Dashboard() {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <header className="mb-6">
        <h1 className="text-2xl font-semibold">GoogleWorkspaceAI — Hub</h1>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <main className="col-span-2 space-y-6">
          <section className="bg-white rounded shadow p-4">
            <h2 className="font-medium mb-3">AI Assistant</h2>
            <Chat />
          </section>

          <section className="bg-white rounded shadow p-4">
            <h2 className="font-medium mb-3">Research Tools</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <iframe
                src={PERPLEXITY}
                className="w-full h-64 border rounded"
                title="Perplexity"
              />
              <iframe
                src={SCHOLAR}
                className="w-full h-64 border rounded"
                title="Google Scholar"
              />
            </div>
          </section>
        </main>

        <aside className="space-y-4">
          <div className="bg-white rounded shadow p-4">
            <h3 className="font-medium">Quick Actions</h3>
            <div className="mt-3 flex flex-col gap-2">
              <button className="w-full py-2 bg-green-600 text-white rounded">
                Create NotebookLM Note
              </button>
              <button className="w-full py-2 bg-blue-600 text-white rounded">
                Summarize Document
              </button>
              <button className="w-full py-2 bg-amber-600 text-white rounded">
                Send Email
              </button>
            </div>
          </div>

          <div className="bg-white rounded shadow p-4">
            <h3 className="font-medium">Integrations</h3>
            <ul className="mt-2 text-sm space-y-1">
              <li>Sheets</li>
              <li>Docs</li>
              <li>Drive</li>
              <li>Gmail</li>
              <li>Calendar</li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
