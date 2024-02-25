import { lusitana } from '../ui/fonts';
import { fetchRevenue } from '../lib/data';
import RevenueChart from '../ui/dashboard/revenue-chart';

export default async function Page() {
  const revenue = await fetchRevenue();

  return (
    <main>
      <h1 className={`${lusitana.className}  text-x1 md:text-2x1 mb-4`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {/* <Card title="Collected" value={totalPaidInvoices} type="collected" /> */}
        {/* <Card title="Pending" value={totalPendingInvoices} type="pending" /> */}
        {/* <Card title="Total Invoices" value={numberOfInvoices} type="invoices" /> */}
        {/* <Card
          title="Total Customers"
          value={numberOfCustomers}
          type="customers"
        /> */}
      </div>
      <div className="mt:grid-cols-4 mt-6 grid grid-cols-1 gap-6 lg:grid-cols-8">
        <RevenueChart revenue={revenue} />
        {/* <LatestInvoices latestInvoices={latestInvoices} /> */}
      </div>
    </main>
  );
}
