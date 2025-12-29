
import Link from 'next/link';

export default function ArchitecturePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-4 flex gap-4">
          <Link href="/" className="text-gray-600">Home</Link>
          <Link href="/dashboard" className="text-gray-600">Dashboard</Link>
          <Link href="/audit" className="text-gray-600">Audit</Link>
          <Link href="/architecture" className="text-blue-600 font-semibold">Architecture</Link>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">System Architecture</h1>
        <p className="text-gray-600 mb-8">Kasparro AI-SEO audit pipeline</p>

        <div className="space-y-8">
          <div className="bg-white rounded-lg border p-6">
            <h2 className="text-xl font-semibold mb-4">1. Input Assembler</h2>
            <p className="mb-4">Collects and structures data from multiple sources</p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 bg-gray-50 rounded">
                <h4 className="font-medium">Web Crawler</h4>
              </div>
              <div className="p-4 bg-gray-50 rounded">
                <h4 className="font-medium">Content Parser</h4>
              </div>
              <div className="p-4 bg-gray-50 rounded">
                <h4 className="font-medium">External Signals</h4>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border p-6">
            <h2 className="text-xl font-semibold mb-4">2. Audit Modules</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {['Content Quality', 'E-E-A-T', 'Semantic', 'Citation', 'Visibility', 'Keyword', 'Technical'].map(m => (
                <div key={m} className="p-4 bg-gray-50 rounded">
                  <h4 className="font-medium">{m}</h4>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg border p-6">
            <h2 className="text-xl font-semibold mb-4">3. Output Surfaces</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {['Dashboard', 'Deep-Dive', 'API', 'PDF Reports'].map(o => (
                <div key={o} className="p-4 bg-gray-50 rounded">
                  <h4 className="font-medium">{o}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}