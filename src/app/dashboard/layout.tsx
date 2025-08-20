import type React from "react"
import { AppSidebar } from "@/components/layout/app-sidebar"
import { Header } from "@/components/layout/header"
import { SidebarProvider } from "@/components/ui/sidebar"

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <SidebarProvider>
            <div className="flex min-h-screen w-full">
                <AppSidebar />
                <div className="flex-1">
                    <Header />
                    <main className="flex-1 p-6">{children}</main>
                </div>
            </div>
        </SidebarProvider>
    )
}
