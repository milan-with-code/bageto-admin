import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const recentOrders = [
    {
        id: "#3210",
        customer: "John Doe",
        email: "john@example.com",
        amount: "$250.00",
        status: "completed",
    },
    {
        id: "#3209",
        customer: "Jane Smith",
        email: "jane@example.com",
        amount: "$150.00",
        status: "pending",
    },
    {
        id: "#3208",
        customer: "Bob Johnson",
        email: "bob@example.com",
        amount: "$350.00",
        status: "completed",
    },
    {
        id: "#3207",
        customer: "Alice Brown",
        email: "alice@example.com",
        amount: "$200.00",
        status: "cancelled",
    },
]

export function RecentOrders() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Recent Orders</CardTitle>
                <CardDescription>Latest customer orders</CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Order</TableHead>
                            <TableHead>Customer</TableHead>
                            <TableHead>Amount</TableHead>
                            <TableHead>Status</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {recentOrders.map((order) => (
                            <TableRow key={order.id}>
                                <TableCell className="font-medium">{order.id}</TableCell>
                                <TableCell>
                                    <div>
                                        <div className="font-medium">{order.customer}</div>
                                        <div className="text-sm text-muted-foreground">{order.email}</div>
                                    </div>
                                </TableCell>
                                <TableCell>{order.amount}</TableCell>
                                <TableCell>
                                    <Badge
                                        variant={
                                            order.status === "completed"
                                                ? "default"
                                                : order.status === "pending"
                                                    ? "secondary"
                                                    : "destructive"
                                        }
                                    >
                                        {order.status}
                                    </Badge>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    )
}
