"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DollarSign, ShoppingCart, Package, Users } from "lucide-react"
import { useEffect } from "react"

const stats = [
    {
        title: "Total Revenue",
        value: "$45,231.89",
        change: "+20.1% from last month",
        icon: DollarSign,
    },
    {
        title: "Orders",
        value: "2,350",
        change: "+180.1% from last month",
        icon: ShoppingCart,
    },
    {
        title: "Products",
        value: "12,234",
        change: "+19% from last month",
        icon: Package,
    },
    {
        title: "Active Customers",
        value: "573",
        change: "+201 since last hour",
        icon: Users,
    },
]

export function DashboardStats() {

    const URL = process.env.NEXT_PUBLIC_BACKEND_URL;

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await fetch(`${URL}/api/orders`);
                const data = await response.json();
                console.log('data :>> ', data);
            } catch (error) {
                console.error('Error fetching orders:', error);
            }
        }
        fetchOrders()
    }, [URL])

    return (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
                <Card key={stat.title}>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                        <stat.icon className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{stat.value}</div>
                        <p className="text-xs text-muted-foreground">{stat.change}</p>
                    </CardContent>
                </Card>
            ))}
        </div>
    )
}
