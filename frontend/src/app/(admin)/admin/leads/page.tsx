import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admin - Leads',
  description: 'Manage contact form submissions',
};

const ADMIN_API_KEY = process.env.ADMIN_API_KEY || 'dev-admin-key-change-in-production';
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api/v1';

async function getLeads(page = 1, pageSize = 20, search = '') {
  const params = new URLSearchParams({
    page: page.toString(),
    page_size: pageSize.toString(),
    ...(search && { search }),
  });
  
  const res = await fetch(`${API_URL}/leads?${params}`, {
    headers: { 'X-Admin-API-Key': ADMIN_API_KEY },
    next: { revalidate: 30 },
  });
  
  if (!res.ok) throw new Error('Failed to fetch leads');
  return res.json();
}

export default async function AdminLeadsPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string; search?: string }>;
}) {
  const { page = '1', search = '' } = await searchParams;
  const pageNum = parseInt(page, 10);
  
  try {
    const data = await getLeads(pageNum, 20, search);
    
    return (
      <div className="min-h-screen py-16">
        <div className="shell">
          <div className="mb-8">
            <h1 className="heading text-h2">Leads Management</h1>
            <p className="mt-2 text-[0.9375rem] text-[#5b6478]">View and manage contact form submissions</p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-[#e6eaf2] bg-white shadow-lift">
            <div className="border-b border-[#eef1f7] p-4">
              <form className="flex gap-4 max-w-md">
                <input
                  type="search"
                  name="search"
                  defaultValue={search}
                  placeholder="Search by name, email, company..."
                  className="h-10 flex-1 rounded-full border border-[#e0e6f0] bg-white px-4 text-sm text-[#0b1220] placeholder:text-[#a5adbd] focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500/12"
                />
                <button type="submit" className="h-10 rounded-full bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-700">
                  Search
                </button>
              </form>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full" role="table">
                <thead className="bg-[#f8fafd]">
                  <tr>
                    <th className="px-6 py-3 text-left text-[0.6875rem] uppercase tracking-[0.14em] text-[#98a1b3]">Name</th>
                    <th className="px-6 py-3 text-left text-[0.6875rem] uppercase tracking-[0.14em] text-[#98a1b3]">Email</th>
                    <th className="px-6 py-3 text-left text-[0.6875rem] uppercase tracking-[0.14em] text-[#98a1b3]">Company</th>
                    <th className="px-6 py-3 text-left text-[0.6875rem] uppercase tracking-[0.14em] text-[#98a1b3]">Service</th>
                    <th className="px-6 py-3 text-left text-[0.6875rem] uppercase tracking-[0.14em] text-[#98a1b3]">Status</th>
                    <th className="px-6 py-3 text-left text-[0.6875rem] uppercase tracking-[0.14em] text-[#98a1b3]">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#eef1f7]">
                  {data.leads.length === 0 ? (
                    <tr>
                      <td colSpan={6} className="px-6 py-16 text-center text-[0.9375rem] text-[#7a8399]">
                        No leads found
                      </td>
                    </tr>
                  ) : (
                    data.leads.map((lead: any) => (
                      <tr key={lead.id} className="transition-colors hover:bg-[#f8fafd]">
                        <td className="px-6 py-4">
                          <div className="font-medium text-[#0b1220]">{lead.name}</div>
                        </td>
                        <td className="px-6 py-4 text-[0.875rem] text-[#5b6478]">{lead.email}</td>
                        <td className="px-6 py-4 text-[0.875rem] text-[#5b6478]">{lead.company || '—'}</td>
                        <td className="px-6 py-4">
                          {lead.service_interest ? (
                            <span className="rounded-full border border-blue-200 bg-blue-50 px-2.5 py-1 text-[0.6875rem] text-blue-700">
                              {lead.service_interest}
                            </span>
                          ) : (
                            <span className="text-[#c3cbd9]">—</span>
                          )}
                        </td>
                        <td className="px-6 py-4">
                          <span className={`rounded-full px-2.5 py-1 text-[0.6875rem] ${
                            lead.status === 'new' ? 'border border-amber-200 bg-amber-50 text-amber-700' :
                            lead.status === 'contacted' ? 'border border-blue-200 bg-blue-50 text-blue-700' :
                            lead.status === 'qualified' ? 'border border-emerald-200 bg-emerald-50 text-emerald-700' :
                            'border border-[#e6eaf2] bg-[#f8fafd] text-[#5b6478]'
                          }`}>
                            {lead.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-[0.875rem] text-[#5b6478]">
                          {new Date(lead.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>

            {data.total_pages > 1 && (
              <div className="flex items-center justify-between border-t border-[#eef1f7] px-6 py-4">
                <div className="text-[0.8125rem] text-[#7a8399]">
                  Page {data.page} of {data.total_pages} ({data.total} total)
                </div>
                <div className="flex gap-2">
                  {data.page > 1 && (
                    <a
                      href={`/admin/leads?page=${data.page - 1}${search ? `&search=${encodeURIComponent(search)}` : ''}`}
                      className="rounded-full border border-[#e6eaf2] px-3.5 py-1.5 text-[0.8125rem] text-[#475069] transition-colors hover:border-blue-200 hover:text-blue-700"
                    >
                      Previous
                    </a>
                  )}
                  {data.page < data.total_pages && (
                    <a
                      href={`/admin/leads?page=${data.page + 1}${search ? `&search=${encodeURIComponent(search)}` : ''}`}
                      className="rounded-full border border-[#e6eaf2] px-3.5 py-1.5 text-[0.8125rem] text-[#475069] transition-colors hover:border-blue-200 hover:text-blue-700"
                    >
                      Next
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  } catch (error) {
    return (
      <div className="flex min-h-screen items-center justify-center py-16">
        <div className="text-center">
          <h1 className="heading text-h3 text-red-600">Error loading leads</h1>
          <p className="mt-2 text-[0.9375rem] text-[#5b6478]">Please check that the backend is running and the API key is correct.</p>
        </div>
      </div>
    );
  }
}