import Link from 'next/link';

export default function DashboardPage() {
  // Mock data for demonstration
  const channelStats = {
    totalLinks: 12,
    totalClicks: 1234,
    activeLinks: 8,
    reportedLinks: 2,
  };

  const recentLinks = [
    {
      id: 1,
      title: 'Summer Sale Electronics',
      category: 'Electronics',
      clicks: 156,
      expiresAt: '2024-07-01',
    },
    {
      id: 2,
      title: 'Fashion Week Special',
      category: 'Fashion & Accessories',
      clicks: 89,
      expiresAt: '2024-06-15',
    },
    {
      id: 3,
      title: 'Home Decor Deals',
      category: 'Home & Kitchen',
      clicks: 245,
      expiresAt: '2024-06-30',
    },
  ];

  return (
    <div className="space-y-6">
      {/* Page Title */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Dashboard Overview</h1>
        <Link href="/dashboard/channels/new" className="btn btn-primary">
          Create New Channel
        </Link>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="stat bg-base-100 rounded-box shadow">
          <div className="stat-title">Total Links</div>
          <div className="stat-value">{channelStats.totalLinks}</div>
        </div>
        <div className="stat bg-base-100 rounded-box shadow">
          <div className="stat-title">Total Clicks</div>
          <div className="stat-value">{channelStats.totalClicks}</div>
        </div>
        <div className="stat bg-base-100 rounded-box shadow">
          <div className="stat-title">Active Links</div>
          <div className="stat-value text-success">{channelStats.activeLinks}</div>
        </div>
        <div className="stat bg-base-100 rounded-box shadow">
          <div className="stat-title">Reported Links</div>
          <div className="stat-value text-error">{channelStats.reportedLinks}</div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="flex flex-wrap gap-4">
        <Link href="/dashboard/channels/links/new" className="btn btn-outline btn-primary">
          Add New Link
        </Link>
        <Link href="/dashboard/channels/settings" className="btn btn-outline">
          Channel Settings
        </Link>
        <Link href="/dashboard/billing" className="btn btn-outline">
          Upgrade to Pro
        </Link>
      </div>

      {/* Recent Links Table */}
      <div className="bg-base-100 rounded-box shadow">
        <div className="p-4 border-b border-base-200">
          <h2 className="text-xl font-semibold">Recent Links</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            <thead>
              <tr>
                <th>Title</th>
                <th>Category</th>
                <th>Clicks</th>
                <th>Expires</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {recentLinks.map((link) => (
                <tr key={link.id}>
                  <td>{link.title}</td>
                  <td>
                    <div className="badge badge-ghost">{link.category}</div>
                  </td>
                  <td>{link.clicks}</td>
                  <td>{link.expiresAt}</td>
                  <td>
                    <div className="flex gap-2">
                      <Link href={`/dashboard/channels/links/${link.id}/edit`} className="btn btn-sm btn-ghost">
                        Edit
                      </Link>
                      <button className="btn btn-sm btn-ghost text-error">
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-4 text-center">
          <Link href="/dashboard/channels" className="btn btn-link">
            View All Links
          </Link>
        </div>
      </div>
    </div>
  );
}
