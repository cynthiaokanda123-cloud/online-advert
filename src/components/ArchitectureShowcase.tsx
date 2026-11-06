import { useState, useEffect } from 'react';
import {
  Boxes,
  Zap,
  GitPullRequest,
  Maximize2,
  Activity,
  Server,
  Database,
  Globe,
  ShieldCheck,
  Cpu,
  Layers,
  ArrowRight,
  Play,
  RotateCcw,
  CheckCircle2
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

type TrafficMode = 'normal' | 'surge' | 'cacheMiss' | 'autoscale';

export function ArchitectureShowcase() {
  const [trafficMode, setTrafficMode] = useState<TrafficMode>('normal');
  const [selectedNodeId, setSelectedNodeId] = useState<string>('lb');
  const [packetTick, setPacketTick] = useState(0);

  // Packet animation loop
  useEffect(() => {
    const speed = trafficMode === 'surge' ? 25 : 45;
    const interval = setInterval(() => {
      setPacketTick((prev) => (prev + 1) % 100);
    }, speed);
    return () => clearInterval(interval);
  }, [trafficMode]);

  // Derived metrics based on traffic mode
  const metrics = {
    normal: { throughput: '3.4k req/s', latency: '36ms', p99: '52ms', hitRatio: '94.6%', pods: 4, health: 'Optimal' },
    surge: { throughput: '24.8k req/s', latency: '48ms', p99: '71ms', hitRatio: '92.1%', pods: 12, health: 'Autoscaling' },
    cacheMiss: { throughput: '2.1k req/s', latency: '82ms', p99: '118ms', hitRatio: '18.4%', pods: 6, health: 'DB Intensive' },
    autoscale: { throughput: '16.5k req/s', latency: '39ms', p99: '59ms', hitRatio: '95.0%', pods: 10, health: 'Stable' }
  }[trafficMode];

  const calloutIcons: Record<string, React.ElementType> = {
    Boxes,
    Zap,
    GitPullRequest,
    Maximize2,
    Activity
  };

  const nodeDetails: Record<
    string,
    { title: string; subtitle: string; spec: string[]; tech: string }
  > = {
    client: {
      title: "Client Layer",
      subtitle: "Edge entry points across web browsers, mobile apps, and webhook consumers.",
      spec: [
        "HTTP/3 and WebSocket TLS 1.3 encryption",
        "Edge caching with Cloudflare / CloudFront CDN",
        "Sub-10ms geographical DNS resolution"
      ],
      tech: "React 19 SPA · iOS/Android Clients · Edge CDN"
    },
    lb: {
      title: "Load Balancer & API Gateway",
      subtitle: "High-throughput reverse proxy, TLS termination, and traffic distribution.",
      spec: [
        "Weighted round-robin & least-connections routing",
        "Token bucket rate-limiting (100 req/sec per IP)",
        "Zero-downtime blue/green rolling deployments"
      ],
      tech: "NGINX / Envoy Proxy · AWS ALB · Redis Rate Limiter"
    },
    services: {
      title: "Microservices Compute Mesh",
      subtitle: "Stateless containerized service replicas auto-scaled horizontally.",
      spec: [
        "Kubernetes Horizontal Pod Autoscaler (HPA) targeting 70% CPU",
        "Non-blocking async Node.js / FastAPI worker runtime",
        "Circuit breakers with resilience fallbacks via Envoy"
      ],
      tech: "Docker · Kubernetes · Node.js · TypeScript · FastAPI"
    },
    cache: {
      title: "Redis In-Memory Cache Tier",
      subtitle: "Sub-millisecond data retrieval layer preventing database saturation.",
      spec: [
        "Cache-aside pattern with probabilistic early expiration",
        "Sub-2ms median read latency for hot user sessions",
        "Redis cluster with automated master-replica failover"
      ],
      tech: "Redis 7.2 Cluster · Sentinel · In-Memory LRU"
    },
    db: {
      title: "PostgreSQL Persistence Tier",
      subtitle: "ACID-compliant relational database with read replicas and connection pooling.",
      spec: [
        "PgBouncer connection pooling supporting 5,000+ client pools",
        "Read-heavy query routing to asynchronous read replicas",
        "B-Tree & GiST indexes optimized for sub-10ms query execution"
      ],
      tech: "PostgreSQL 16 · PgBouncer · AWS RDS Aurora"
    }
  };

  const selectedNode = nodeDetails[selectedNodeId] || nodeDetails.lb;

  return (
    <section id="architecture" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold mb-3">
            <span>SYSTEM DESIGN LAB</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white dark:text-white">
            Interactive <span className="bg-gradient-to-r from-blue-400 via-purple-300 to-pink-400 bg-clip-text text-transparent">Scalable Systems</span> Architecture
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl text-base">
            Watch simulated data packets traverse a high-concurrency architecture. Toggle traffic scenarios to inspect how rate-limiting, caching, and horizontal scaling safeguard reliability.
          </p>
        </div>

        {/* Traffic Simulation Controls */}
        <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-xl mb-8">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
              Scenario:
            </span>
            <div className="flex flex-wrap gap-1.5">
              <button
                onClick={() => setTrafficMode('normal')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  trafficMode === 'normal'
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-900/40'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                Normal Load (3.4k/s)
              </button>
              <button
                onClick={() => setTrafficMode('surge')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  trafficMode === 'surge'
                    ? 'bg-pink-600 text-white shadow-md shadow-pink-900/40'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                Traffic Surge (25k/s)
              </button>
              <button
                onClick={() => setTrafficMode('cacheMiss')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  trafficMode === 'cacheMiss'
                    ? 'bg-purple-600 text-white shadow-md shadow-purple-900/40'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                Simulate Cache Miss
              </button>
              <button
                onClick={() => setTrafficMode('autoscale')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  trafficMode === 'autoscale'
                    ? 'bg-emerald-600 text-white shadow-md shadow-emerald-900/40'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                Auto-Scale Replicas
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>Telemetry: {metrics.health}</span>
          </div>
        </div>

        {/* Interactive Architecture Diagram Box */}
        <div className="relative p-6 sm:p-10 rounded-3xl bg-slate-950/80 border border-slate-800 backdrop-blur-2xl shadow-2xl mb-8 overflow-hidden">
          {/* Subtle Grid Pattern */}
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage:
                'linear-gradient(to right, #334155 1px, transparent 1px), linear-gradient(to bottom, #334155 1px, transparent 1px)',
              backgroundSize: '32px 32px'
            }}
          />

          {/* Top Live Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 pb-8 mb-8 border-b border-slate-800/80 text-center">
            <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
              <span className="text-[10px] text-slate-400 font-mono block">THROUGHPUT</span>
              <span className="text-sm sm:text-base font-bold text-white font-mono tabular-nums">{metrics.throughput}</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
              <span className="text-[10px] text-slate-400 font-mono block">AVG LATENCY</span>
              <span className="text-sm sm:text-base font-bold text-emerald-400 font-mono tabular-nums">{metrics.latency}</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
              <span className="text-[10px] text-slate-400 font-mono block">P99 LATENCY</span>
              <span className="text-sm sm:text-base font-bold text-pink-400 font-mono tabular-nums">{metrics.p99}</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
              <span className="text-[10px] text-slate-400 font-mono block">CACHE HIT RATIO</span>
              <span className="text-sm sm:text-base font-bold text-purple-400 font-mono tabular-nums">{metrics.hitRatio}</span>
            </div>
            <div className="col-span-2 sm:col-span-1 p-3 rounded-xl bg-slate-900/60 border border-slate-800">
              <span className="text-[10px] text-slate-400 font-mono block">ACTIVE REPLICAS</span>
              <span className="text-sm sm:text-base font-bold text-blue-400 font-mono tabular-nums">{metrics.pods} pods</span>
            </div>
          </div>

          {/* Diagram Flow: 5 Nodes with Animated Data Lines */}
          <div className="relative py-8">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 sm:gap-4 relative z-10 items-center">
              {/* Node 1: Clients */}
              <div
                onClick={() => setSelectedNodeId('client')}
                className={`p-4 sm:p-5 rounded-2xl cursor-pointer transition-all duration-300 text-center flex flex-col items-center ${
                  selectedNodeId === 'client'
                    ? 'bg-blue-900/40 border-2 border-blue-400 shadow-lg shadow-blue-500/20'
                    : 'bg-slate-900/70 border border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="w-12 h-12 rounded-xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-blue-400 mb-2">
                  <Globe className="w-6 h-6" />
                </div>
                <h4 className="text-sm font-bold text-white">Clients &amp; Apps</h4>
                <span className="text-[11px] font-mono text-slate-400 mt-1">Global Users</span>
              </div>

              {/* Node 2: Load Balancer */}
              <div
                onClick={() => setSelectedNodeId('lb')}
                className={`p-4 sm:p-5 rounded-2xl cursor-pointer transition-all duration-300 text-center flex flex-col items-center ${
                  selectedNodeId === 'lb'
                    ? 'bg-purple-900/40 border-2 border-purple-400 shadow-lg shadow-purple-500/20'
                    : 'bg-slate-900/70 border border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="w-12 h-12 rounded-xl bg-purple-500/20 border border-purple-400/30 flex items-center justify-center text-purple-400 mb-2">
                  <Layers className="w-6 h-6" />
                </div>
                <h4 className="text-sm font-bold text-white">Load Balancer</h4>
                <span className="text-[11px] font-mono text-slate-400 mt-1">NGINX / Envoy</span>
              </div>

              {/* Node 3: Microservices */}
              <div
                onClick={() => setSelectedNodeId('services')}
                className={`p-4 sm:p-5 rounded-2xl cursor-pointer transition-all duration-300 text-center flex flex-col items-center ${
                  selectedNodeId === 'services'
                    ? 'bg-pink-900/40 border-2 border-pink-400 shadow-lg shadow-pink-500/20'
                    : 'bg-slate-900/70 border border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="w-12 h-12 rounded-xl bg-pink-500/20 border border-pink-400/30 flex items-center justify-center text-pink-400 mb-2">
                  <Cpu className="w-6 h-6" />
                </div>
                <h4 className="text-sm font-bold text-white">Microservices</h4>
                <span className="text-[11px] font-mono text-pink-300 mt-1">
                  {metrics.pods} Instances
                </span>
              </div>

              {/* Node 4: Cache */}
              <div
                onClick={() => setSelectedNodeId('cache')}
                className={`p-4 sm:p-5 rounded-2xl cursor-pointer transition-all duration-300 text-center flex flex-col items-center ${
                  selectedNodeId === 'cache'
                    ? 'bg-emerald-900/40 border-2 border-emerald-400 shadow-lg shadow-emerald-500/20'
                    : 'bg-slate-900/70 border border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-400 mb-2">
                  <Zap className="w-6 h-6" />
                </div>
                <h4 className="text-sm font-bold text-white">Redis Cache</h4>
                <span className="text-[11px] font-mono text-emerald-400 mt-1">&lt; 3ms Reads</span>
              </div>

              {/* Node 5: Database */}
              <div
                onClick={() => setSelectedNodeId('db')}
                className={`p-4 sm:p-5 rounded-2xl cursor-pointer transition-all duration-300 text-center flex flex-col items-center ${
                  selectedNodeId === 'db'
                    ? 'bg-amber-900/40 border-2 border-amber-400 shadow-lg shadow-amber-500/20'
                    : 'bg-slate-900/70 border border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-400/30 flex items-center justify-center text-amber-400 mb-2">
                  <Database className="w-6 h-6" />
                </div>
                <h4 className="text-sm font-bold text-white">PostgreSQL DB</h4>
                <span className="text-[11px] font-mono text-slate-400 mt-1">Primary + Replica</span>
              </div>
            </div>

            {/* Simulated Data Packets Visual Track for Desktop */}
            <div className="hidden md:block relative h-4 my-4 overflow-hidden">
              <div className="absolute inset-x-8 top-1/2 -translate-y-1/2 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 via-pink-500 to-emerald-500 opacity-40" />

              {/* Moving Packets */}
              {[0, 25, 50, 75].map((offset) => {
                const pos = (packetTick + offset) % 100;
                return (
                  <div
                    key={offset}
                    className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-pink-400 shadow-md shadow-pink-400/80 -translate-x-1/2 pointer-events-none"
                    style={{ left: `${pos}%` }}
                  />
                );
              })}
            </div>
          </div>

          {/* Selected Node Deep Dive Inspector */}
          <div className="mt-6 p-6 rounded-2xl bg-slate-900/70 border border-slate-800 backdrop-blur-md">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4 pb-4 border-b border-slate-800">
              <div>
                <span className="text-xs font-mono uppercase text-pink-400 font-semibold tracking-wider">
                  Tier Inspection
                </span>
                <h3 className="text-lg font-bold text-white">{selectedNode.title}</h3>
                <p className="text-xs text-slate-400 mt-0.5">{selectedNode.subtitle}</p>
              </div>
              <div className="px-3 py-1.5 rounded-lg bg-slate-800 text-xs font-mono text-slate-300 border border-slate-700">
                Stack: {selectedNode.tech}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {selectedNode.spec.map((rule, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{rule}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 5 Architecture Pillar Callout Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {PORTFOLIO_DATA.architectureShowcase.concepts.map((concept) => {
            const IconComp = calloutIcons[concept.iconName] || Boxes;

            return (
              <div
                key={concept.title}
                className="p-5 rounded-2xl bg-slate-900/60 dark:bg-slate-900/70 border border-slate-800 hover:border-purple-500/30 backdrop-blur-xl transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-3 group-hover:scale-110 transition-transform">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1.5 group-hover:text-pink-300 transition-colors">
                    {concept.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {concept.summary}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-800/80 text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                  <span>Production standard</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
