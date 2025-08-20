"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MoreHorizontal, Search, Eye, Edit, Trash2 } from "lucide-react"

const customers = [
    {
        id: "CU001",
        name: "John Doe",
        email: "john@example.com",
        orders: 12,
        totalSpent: "$1,234.56",
        status: "active",
        joinDate: "2023-01-15",
        avatar: "/male-avatar.png",
    },
    {
        id: "CU002",
        name: "Jane Smith",
        email: "jane@example.com",
        orders: 8,
        totalSpent: "$987.65",
        status: "active",
        joinDate: "2023-02-20",
        avatar: "/diverse-female-avatar.png",
    },
    {
        id: "CU003",
        name: "Bob Johnson",
        email: "bob@example.com",
        orders: 15,
        totalSpent: "$2,345.67",
        status: "active",
        joinDate: "2022-12-10",
        avatar: "/male-avatar-2.png",
    },
    {
        id: "CU004",
        name: "Alice Brown",
        email: "alice@example.com",
        orders: 3,
        totalSpent: "$456.78",
        status: "inactive",
        joinDate: "2023-03-05",
        avatar: "/female-avatar-2.png",
    },
]

export function CustomersTable() {
    const [searchTerm, setSearchTerm] = useState("")

    const filteredCustomers = customers.filter(
        (customer) =>
            customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            customer.email.toLowerCase().includes(searchTerm.toLowerCase()),
    )

    return (
        <Card>
            <CardHeader>
                <CardTitle>All Customers</CardTitle>
                <CardDescription>View and manage customer accounts</CardDescription>
                <div className="flex items-center space-x-2">
                    <div className="relative flex-1 max-w-sm">
                        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input
                            placeholder="Search customers..."
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
                            <TableHead>Customer</TableHead>
                            <TableHead>Orders</TableHead>
                            <TableHead>Total Spent</TableHead>
                            <TableHead>Join Date</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead className="w-[70px]">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {filteredCustomers.map((customer) => (
                            <TableRow key={customer.id}>
                                <TableCell>
                                    <div className="flex items-center space-x-3">
                                        <Avatar className="h-10 w-10">
                                            <AvatarImage src={customer.avatar || "/placeholder.svg"} alt={customer.name} />
                                            <AvatarFallback>
                                                {customer.name
                                                    .split(" ")
                                                    .map((n) => n[0])
                                                    .join("")}
                                            </AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <div className="font-medium">{customer.name}</div>
                                            <div className="text-sm text-muted-foreground">{customer.email}</div>
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell>{customer.orders}</TableCell>
                                <TableCell>{customer.totalSpent}</TableCell>
                                <TableCell>{customer.joinDate}</TableCell>
                                <TableCell>
                                    <Badge variant={customer.status === "active" ? "default" : "secondary"}>{customer.status}</Badge>
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
