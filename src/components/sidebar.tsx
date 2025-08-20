"use client"

import { motion, AnimatePresence } from "framer-motion"
import { LayoutDashboard, Package, ShoppingCart, Users, BarChart3, Settings, ChevronLeft, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"

interface SidebarProps {
    isOpen: boolean
    isMobile: boolean
    isCollapsed?: boolean
    onToggleCollapse?: () => void
}

const sidebarItems = [
    { icon: LayoutDashboard, label: "Dashboard", active: false, href: "/dashboard" },
    { icon: Package, label: "Products", active: false, href: "/products" },
    { icon: ShoppingCart, label: "Orders", active: true, href: "/orders" },
    { icon: Users, label: "Customers", active: false, href: "/customers" },
    { icon: BarChart3, label: "Analytics", active: false, href: "/analytics" },
    { icon: Settings, label: "Settings", active: false, href: "/settings" },
]

export function Sidebar({ isOpen, isMobile, isCollapsed = false, onToggleCollapse }: SidebarProps) {
    const sidebarWidth = isCollapsed && !isMobile ? 80 : 240

    return (
        <>
            <motion.aside
                initial={false}
                animate={{
                    width: isMobile ? (isOpen ? 240 : 0) : sidebarWidth,
                    opacity: isMobile ? (isOpen ? 1 : 0) : 1,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className={`bg-white border-r border-gray-200 flex flex-col shadow-sm ${isMobile ? "absolute z-50 h-full" : "relative"
                    }`}
            >
                <div className="p-6 border-b border-gray-200 flex items-center justify-between">
                    <AnimatePresence mode="wait">
                        {!isCollapsed && (
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.2 }}
                            >
                                <h1 className="text-xl font-bold text-gray-900">Bageto Admin</h1>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {!isMobile && onToggleCollapse && (
                        <Button variant="ghost" size="sm" onClick={onToggleCollapse} className="p-1.5 hover:bg-gray-100">
                            <motion.div animate={{ rotate: isCollapsed ? 180 : 0 }} transition={{ duration: 0.3 }}>
                                <ChevronLeft className="w-4 h-4" />
                            </motion.div>
                        </Button>
                    )}
                </div>

                {/* Navigation */}
                <nav className="flex-1 p-4 space-y-1">
                    {sidebarItems.map((item, index) => (
                        <motion.button
                            key={item.label}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{ scale: 1.02, x: 4 }}
                            whileTap={{ scale: 0.98 }}
                            className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl text-left transition-all duration-200 group relative ${item.active
                                ? "bg-blue-50 text-blue-700 border border-blue-200 shadow-sm"
                                : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                                }`}
                        >
                            {item.active && (
                                <motion.div
                                    layoutId="activeIndicator"
                                    className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-blue-600 rounded-r-full"
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}

                            <item.icon className={`w-5 h-5 flex-shrink-0 ${item.active ? "text-blue-600" : ""}`} />

                            <AnimatePresence mode="wait">
                                {!isCollapsed && (
                                    <motion.span
                                        initial={{ opacity: 0, width: 0 }}
                                        animate={{ opacity: 1, width: "auto" }}
                                        exit={{ opacity: 0, width: 0 }}
                                        transition={{ duration: 0.2 }}
                                        className="font-medium truncate"
                                    >
                                        {item.label}
                                    </motion.span>
                                )}
                            </AnimatePresence>
                        </motion.button>
                    ))}
                </nav>

                <Separator />

                <div className="p-4">
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className={`flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer ${isCollapsed ? "justify-center" : ""
                            }`}
                    >
                        <Avatar className="h-8 w-8 flex-shrink-0">
                            <AvatarImage src="/admin-avatar.png" alt="Admin" />
                            <AvatarFallback className="bg-blue-100 text-blue-600">AD</AvatarFallback>
                        </Avatar>

                        <AnimatePresence mode="wait">
                            {!isCollapsed && (
                                <motion.div
                                    initial={{ opacity: 0, width: 0 }}
                                    animate={{ opacity: 1, width: "auto" }}
                                    exit={{ opacity: 0, width: 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="flex-1 min-w-0"
                                >
                                    <p className="text-sm font-medium text-gray-900 truncate">Admin User</p>
                                    <p className="text-xs text-gray-500 truncate">admin@company.com</p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>

                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`w-full flex items-center gap-3 px-3 py-2 mt-2 rounded-xl text-gray-600 hover:bg-red-50 hover:text-red-600 transition-colors ${isCollapsed ? "justify-center" : ""
                            }`}
                    >
                        <LogOut className="w-4 h-4 flex-shrink-0" />
                        <AnimatePresence mode="wait">
                            {!isCollapsed && (
                                <motion.span
                                    initial={{ opacity: 0, width: 0 }}
                                    animate={{ opacity: 1, width: "auto" }}
                                    exit={{ opacity: 0, width: 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="text-sm font-medium"
                                >
                                    Logout
                                </motion.span>
                            )}
                        </AnimatePresence>
                    </motion.button>
                </div>
            </motion.aside>
        </>
    )
}
