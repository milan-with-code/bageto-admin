"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { MoreHorizontal, Search, Eye, Edit, Trash2 } from "lucide-react"

const orders = [
    {
        id: "#3210",
        customer: "John Doe",
        email: "john@example.com",
        amount: "$250.00",
        status: "completed",
        date: "2024-01-15",
        items: 3,
    },
    {
        id: "#3209",
        customer: "Jane Smith",
        email: "jane@example.com",
        amount: "$150.00",
        status: "pending",
        date: "2024-01-14",
        items: 2,
    },
    {
        id: "#3208",
        customer: "Bob Johnson",
        email: "bob@example.com",
        amount: "$350.00",
        status: "completed",
        date: "2024-01-13",
        items: 5,
    },
    {
        id: "#3207",
        customer: "Alice Brown",
        email: "alice@example.com",
        amount: "$200.00",
        status: "cancelled",
        date: "2024-01-12",
        items: 1,
    },
]

export function OrdersTable() {
    const [searchTerm, setSearchTerm] = useState("")

    const filteredOrders = orders.filter(
        (order) =>
            order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
            order.id.toLowerCase().includes(searchTerm.toLowerCase()),
    )

    return (
        <Card>
            <CardHeader>
                <CardTitle>All Orders</CardTitle>
                <CardDescription>Manage and track customer orders</CardDescription>
                <div className="flex items-center space-x-2">
                    <div className="relative flex-1 max-w-sm">
                        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input
                            placeholder="Search orders..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-8"
                        />
                    </div>
                </div>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Order ID</TableHead>
                            <TableHead>Customer</TableHead>
                            <TableHead>Date</TableHead>
                            <TableHead>Items</TableHead>
                            <TableHead>Amount</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead className="w-[70px]">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {filteredOrders.map((order) => (
                            <TableRow key={order.id}>
                                <TableCell className="font-medium">{order.id}</TableCell>
                                <TableCell>
                                    <div>
                                        <div className="font-medium">{order.customer}</div>
                                        <div className="text-sm text-muted-foreground">{order.email}</div>
                                    </div>
                                </TableCell>
                                <TableCell>{order.date}</TableCell>
                                <TableCell>{order.items}</TableCell>
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
                                <TableCell>
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button variant="ghost" className="h-8 w-8 p-0">
                                                <MoreHorizontal className="h-4 w-4" />
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end">
                                            <DropdownMenuItem>
                                                <Eye className="mr-2 h-4 w-4" />
                                                View
                                            </DropdownMenuItem>
                                            <DropdownMenuItem>
                                                <Edit className="mr-2 h-4 w-4" />
                                                Edit
                                            </DropdownMenuItem>
                                            <DropdownMenuItem className="text-destructive">
                                                <Trash2 className="mr-2 h-4 w-4" />
                                                Delete
                                            </DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    )
}
