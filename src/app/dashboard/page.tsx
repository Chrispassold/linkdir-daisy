import Link from 'next/link';

interface ChannelStats {
  totalLinks: number;
  totalClicks: number;
  activeLinks: number;
  reportedLinks: number;
}

interface RecentLink {
  id: number;
  title: string;
  category: string;
  clicks: number;
  expiresAt: string;
}

interface QuickAction {
  href: string;
  label: string;
  variant: 'primary' | 'secondary' | 'accent';
  icon: React.ReactNode;
}

const mockChannelStats: ChannelStats = {
  totalLinks: 12,
  totalClicks: 1234,
  activeLinks: 8,
  reportedLinks: 2,
};

const mockRecentLinks: RecentLink[] = [
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

const quickActions: QuickAction[] = [
  {
    href: '/dashboard/channels/links/new',
    label: 'Add New Link',
    variant: 'primary',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    ),
  },
  {
    href: '/dashboard/channels/settings',
    label: 'Channel Settings',
    variant: 'secondary',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    href: '/dashboard/billing',
    label: 'Upgrade to Pro',
    variant: 'accent',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
];

const renderPageHeader = (): React.ReactNode => {
  return (
    <div className="hero bg-base-100 rounded-box shadow-lg p-4">
      <div className="hero-content flex-col lg:flex-row justify-between w-full">
        <div>
          <h1 className="text-3xl font-bold">Dashboard Overview</h1>
          <p className="text-base-content/70 mt-2">Manage your channels and links</p>
        </div>
        <Link href="/dashboard/channels/new" className="btn btn-primary">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Create New Channel
        </Link>
      </div>
    </div>
  );
};

const renderStatsCards = (stats: ChannelStats): React.ReactNode => {
  const statItems = [
    {
      title: 'Total Links',
      value: stats.totalLinks,
      color: 'text-primary',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
      ),
    },
    {
      title: 'Total Clicks',
      value: stats.totalClicks,
      color: 'text-secondary',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
        </svg>
      ),
    },
    {
      title: 'Active Links',
      value: stats.activeLinks,
      color: 'text-success',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Reported Links',
      value: stats.reportedLinks,
      color: 'text-error',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="stats stats-vertical lg:stats-horizontal shadow bg-base-100 w-full">
      {statItems.map((item) => (
        <div key={item.title} className="stat">
          <div className={`stat-figure ${item.color}`}>
            {item.icon}
          </div>
          <div className="stat-title">{item.title}</div>
          <div className={`stat-value ${item.color}`}>{item.value}</div>
        </div>
      ))}
    </div>
  );
};

const renderQuickActions = (): React.ReactNode => {
  return (
    <div className="flex flex-wrap gap-4">
      {quickActions.map((action) => (
        <Link key={action.href} href={action.href} className={`btn btn-${action.variant}`}>
          {action.icon}
          {action.label}
        </Link>
      ))}
    </div>
  );
};

const renderRecentLinksTable = (links: RecentLink[]): React.ReactNode => {
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body p-0">
        <div className="p-4 border-b border-base-200">
          <h2 className="card-title">Recent Links</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            <thead className="bg-base-200">
              <tr>
                <th>Title</th>
                <th>Category</th>
                <th>Clicks</th>
                <th>Expires</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {links.map((link) => (
                <tr key={link.id}>
                  <td className="font-medium">{link.title}</td>
                  <td>
                    <div className="badge badge-ghost badge-lg">{link.category}</div>
                  </td>
                  <td>
                    <div className="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-info" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                      </svg>
                      {link.clicks}
                    </div>
                  </td>
                  <td>
                    <div className="badge badge-outline">{link.expiresAt}</div>
                  </td>
                  <td>
                    <div className="flex gap-2">
                      <Link href={`/dashboard/channels/links/${link.id}/edit`} className="btn btn-sm btn-ghost btn-square">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                      </Link>
                      <button className="btn btn-sm btn-ghost btn-square text-error">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="card-actions justify-center p-4 border-t border-base-200">
          <Link href="/dashboard/channels" className="btn btn-link">
            View All Links
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default function DashboardPage(): React.ReactNode {
  return (
    <div className="space-y-6">
      {renderPageHeader()}
      {renderStatsCards(mockChannelStats)}
      {renderQuickActions()}
      {renderRecentLinksTable(mockRecentLinks)}
    </div>
  );
}
