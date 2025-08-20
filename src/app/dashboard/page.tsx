import { DashboardStats } from "@/components/dashboard/dashboard-stats"
import { RecentOrders } from "@/components/dashboard/recent-orders"
import { SalesChart } from "@/components/dashboard/sales-chart"
import { TopProducts } from "@/components/dashboard/top-products"

export default function DashboardPage() {
    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold">Dashboard</h1>
                <p className="text-muted-foreground">Welcome back! Here's what's happening with your store.</p>
            </div>

            <DashboardStats />

            <div className="grid gap-6 md:grid-cols-2">
                <SalesChart />
                <TopProducts />
            </div>

            <RecentOrders />
        </div>
    )
}
