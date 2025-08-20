import { OrdersTable } from "@/components/orders/orders-table"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

export default function OrdersPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold">Orders</h1>
                    <p className="text-muted-foreground">Manage and track all customer orders</p>
                </div>
                <Button>
                    <Plus className="mr-2 h-4 w-4" />
                    New Order
                </Button>
            </div>

            <OrdersTable />
        </div>
    )
}
