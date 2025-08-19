export default function Home() {
  return (
    <div className="min-h-screen bg-base-100">
      {/* Hero Section */}
      <div className="hero bg-gradient-to-r from-primary to-secondary text-primary-content">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">LinkDir</h1>
            <p className="py-6">Your comprehensive link management solution with beautiful UI components</p>
            <button className="btn btn-accent">Get Started</button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="navbar bg-base-200 shadow-lg">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16"></path>
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><a>Dashboard</a></li>
              <li><a>Links</a></li>
              <li><a>Analytics</a></li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">LinkDir</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><a>Dashboard</a></li>
            <li><a>Links</a></li>
            <li><a>Analytics</a></li>
          </ul>
        </div>
        <div className="navbar-end">
          <button className="btn btn-primary">Login</button>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Stats Section */}
        <div className="stats shadow mb-8">
          <div className="stat">
            <div className="stat-figure text-primary">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
              </svg>
            </div>
            <div className="stat-title">Total Links</div>
            <div className="stat-value text-primary">2,847</div>
            <div className="stat-desc">↗︎ 400 (22%)</div>
          </div>
          
          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
              </svg>
            </div>
            <div className="stat-title">Page Views</div>
            <div className="stat-value text-secondary">1,234</div>
            <div className="stat-desc">↗︎ 90 (14%)</div>
          </div>
          
          <div className="stat">
            <div className="stat-figure text-accent">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <div className="stat-title">Active Time</div>
            <div className="stat-value text-accent">86%</div>
            <div className="stat-desc">↗︎ 12% (30 days)</div>
          </div>
        </div>

        {/* Alert Section */}
        <div className="alert alert-info mb-8">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <span>Welcome to LinkDir! This is a showcase of daisyUI components.</span>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Card 1 */}
          <div className="card bg-base-100 shadow-xl">
            <figure><img src="https://picsum.photos/400/200" alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title">Quick Links</h2>
              <p>Create and manage your most important links with ease.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Create Link</button>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Analytics Dashboard</h2>
              <p>Track your link performance with detailed analytics.</p>
              <div className="flex gap-2 mb-4">
                <span className="badge badge-primary">Views</span>
                <span className="badge badge-secondary">Clicks</span>
                <span className="badge badge-accent">Conversion</span>
              </div>
              <div className="card-actions justify-end">
                <button className="btn btn-secondary">View Analytics</button>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Custom Domains</h2>
              <p>Use your own domain for professional branding.</p>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Domain</span>
                </label>
                <input type="text" placeholder="yourdomain.com" className="input input-bordered" />
              </div>
              <div className="card-actions justify-end">
                <button className="btn btn-accent">Configure</button>
              </div>
            </div>
          </div>
        </div>

        {/* Progress and Loading Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">System Status</h2>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span>Server Load</span>
                    <span>75%</span>
                  </div>
                  <progress className="progress progress-primary w-full" value="75" max="100"></progress>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span>Database</span>
                    <span>90%</span>
                  </div>
                  <progress className="progress progress-success w-full" value="90" max="100"></progress>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span>Storage</span>
                    <span>45%</span>
                  </div>
                  <progress className="progress progress-warning w-full" value="45" max="100"></progress>
                </div>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Loading States</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="loading loading-spinner loading-md"></span>
                  <span>Loading data...</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="loading loading-dots loading-md"></span>
                  <span>Processing...</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="loading loading-ring loading-md"></span>
                  <span>Connecting...</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Buttons Showcase */}
        <div className="card bg-base-100 shadow-xl mb-8">
          <div className="card-body">
            <h2 className="card-title">Button Variants</h2>
            <div className="flex flex-wrap gap-2">
              <button className="btn btn-primary">Primary</button>
              <button className="btn btn-secondary">Secondary</button>
              <button className="btn btn-accent">Accent</button>
              <button className="btn btn-neutral">Neutral</button>
              <button className="btn btn-outline">Outline</button>
              <button className="btn btn-ghost">Ghost</button>
              <button className="btn btn-link">Link</button>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              <button className="btn btn-sm">Small</button>
              <button className="btn btn-md">Medium</button>
              <button className="btn btn-lg">Large</button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded-lg">
          <div>
            <p>Copyright © 2024 - All rights reserved by LinkDir</p>
          </div>
          <div>
            <div className="grid grid-flow-col gap-4">
              <a className="link link-hover">About us</a>
              <a className="link link-hover">Contact</a>
              <a className="link link-hover">Privacy Policy</a>
              <a className="link link-hover">Terms of Service</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}