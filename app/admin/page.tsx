"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { EnhancedButton } from "@/components/ui/enhanced-button"
import { EnhancedCard } from "@/components/ui/enhanced-card"
import {
  Camera,
  Users,
  MessageSquare,
  Calendar,
  Settings,
  BarChart3,
  Upload,

  Plus,
  Eye,
  Shield,
  LogOut,
  TrendingUp,
  Star,
  DollarSign,
  Activity,
  Menu,
  BookOpen,
  HelpCircle
} from "lucide-react"
import PortfolioManager from "@/components/admin/PortfolioManager"
import BookingManager from "@/components/admin/BookingManager"
import MessageManager from "@/components/admin/MessageManager"
import ReviewManager from "@/components/admin/ReviewManager"
import SettingsManager from "@/components/admin/SettingsManager"
import BlogManager from "@/components/admin/BlogManager"
import FAQManager from "@/components/admin/FAQManager"
import LuxuryAnalytics from "@/components/admin/LuxuryAnalytics"
import LuxuryQuickActions from "@/components/admin/LuxuryQuickActions"
import { useDatabase } from "@/lib/database-context"

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [credentials, setCredentials] = useState({ username: "", password: "" })
  const [activeSection, setActiveSection] = useState("overview")
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const { stats } = useDatabase()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Simple authentication - in production, use proper auth
    if (credentials.username === "admin" && credentials.password === "admin123") {
      setIsAuthenticated(true)
    } else {
      alert("Invalid credentials")
    }
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-luxury-charcoal-900 via-luxury-charcoal-800 to-luxury-charcoal-900 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-luxury-gold-500/20 rounded-full blur-3xl animate-luxury-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-luxury-teal-500/20 rounded-full blur-3xl animate-luxury-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-luxury-gold-500/10 rounded-full blur-2xl animate-luxury-float" style={{ animationDelay: '4s' }}></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <EnhancedCard variant="glass" className="w-full max-w-md backdrop-blur-xl border-white/20">
            <CardHeader className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-luxury-charcoal-800 to-luxury-charcoal-700 rounded-full flex items-center justify-center shadow-luxury border border-luxury-gold-400/30"
              >
                <Shield className="w-8 h-8 text-luxury-gold-400" />
              </motion.div>
              <CardTitle className="text-2xl font-display font-bold text-white">Admin Login</CardTitle>
              <CardDescription className="text-gray-200">Enter your credentials to access the dashboard</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin} className="space-y-6">
                <div>
                  <Label htmlFor="username" className="text-white">Username</Label>
                  <Input
                    id="username"
                    type="text"
                    value={credentials.username}
                    onChange={(e) => setCredentials({...credentials, username: e.target.value})}
                    required
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-300"
                    placeholder="Enter username"
                  />
                </div>
                <div>
                  <Label htmlFor="password" className="text-white">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    value={credentials.password}
                    onChange={(e) => setCredentials({...credentials, password: e.target.value})}
                    required
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-300"
                    placeholder="Enter password"
                  />
                </div>
                <EnhancedButton
                  type="submit"
                  variant="gradient"
                  size="lg"
                  fullWidth
                  icon={<Shield className="w-5 h-5" />}
                  iconPosition="left"
                  glow
                >
                  Access Dashboard
                </EnhancedButton>
              </form>
              <div className="mt-6 text-sm text-gray-300 text-center bg-white/5 rounded-lg p-3 border border-white/10">
                <p className="font-medium mb-1">Demo Credentials:</p>
                <p>Username: <span className="font-mono">admin</span></p>
                <p>Password: <span className="font-mono">admin123</span></p>
              </div>
            </CardContent>
          </EnhancedCard>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-luxury-charcoal-50 to-luxury-gold-50 dark:from-luxury-charcoal-900 dark:to-luxury-charcoal-800 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-luxury-gold-500/5 rounded-full blur-3xl animate-luxury-float"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-luxury-teal-500/5 rounded-full blur-3xl animate-luxury-float" style={{ animationDelay: '3s' }}></div>
      </div>

      {/* Header */}
      <header className="relative z-10 bg-white/90 dark:bg-luxury-charcoal-800/90 backdrop-luxury shadow-luxury border-b border-luxury-charcoal-200/30 dark:border-luxury-charcoal-700/30 sticky top-0 z-40">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              {/* Mobile Menu Button */}
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden w-10 h-10 bg-luxury-charcoal-100 dark:bg-luxury-charcoal-700 rounded-xl flex items-center justify-center hover:bg-luxury-charcoal-200 dark:hover:bg-luxury-charcoal-600 transition-colors"
              >
                <Menu className="w-5 h-5 text-luxury-charcoal-700 dark:text-luxury-charcoal-300" />
              </button>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center space-x-4"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-luxury-charcoal-800 to-luxury-charcoal-700 rounded-2xl flex items-center justify-center shadow-luxury border border-luxury-gold-400/30">
                  <Shield className="w-7 h-7 text-luxury-gold-400" />
                </div>
                <div>
                  <h1 className="text-xl md:text-2xl lg:text-3xl font-display font-bold gradient-text-luxury">
                    Admin Dashboard
                  </h1>
                  <p className="text-sm text-luxury-charcoal-600 dark:text-luxury-charcoal-400">
                    Madiun Photography Management
                  </p>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <EnhancedButton
                variant="outline"
                onClick={() => setIsAuthenticated(false)}
                icon={<LogOut className="w-4 h-4" />}
                iconPosition="left"
              >
                Logout
              </EnhancedButton>
            </motion.div>
          </div>
        </div>
      </header>

      <div className="flex flex-col lg:flex-row">
        {/* Sidebar */}
        <aside className={`relative z-10 w-full lg:w-72 bg-white/80 dark:bg-luxury-charcoal-800/80 backdrop-luxury shadow-luxury-lg lg:border-r border-luxury-charcoal-200/30 dark:border-luxury-charcoal-700/30 min-h-auto lg:min-h-[calc(100vh-89px)] ${
          sidebarOpen ? 'block' : 'hidden lg:block'
        }`}>
          <nav className="p-6">
            <div className="space-y-3">
              {[
                { icon: BarChart3, label: "Overview", value: "overview", color: "text-luxury-gold-600" },
                { icon: Camera, label: "Portfolio", value: "portfolio", color: "text-luxury-teal-600" },
                { icon: Calendar, label: "Bookings", value: "bookings", color: "text-luxury-charcoal-600" },
                { icon: MessageSquare, label: "Messages", value: "messages", color: "text-luxury-gold-500" },
                { icon: Users, label: "Reviews", value: "reviews", color: "text-luxury-teal-500" },
                { icon: BookOpen, label: "Blog", value: "blog", color: "text-luxury-gold-400" },
                { icon: HelpCircle, label: "FAQ", value: "faq", color: "text-luxury-teal-400" },
                { icon: Settings, label: "Settings", value: "settings", color: "text-luxury-charcoal-500" },
              ].map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={item.value}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Button
                      variant="ghost"
                      onClick={() => {
                        setActiveSection(item.value)
                        setSidebarOpen(false) // Close sidebar on mobile
                      }}
                      className={`w-full justify-start h-12 text-left hover:bg-gradient-to-r hover:from-luxury-gold-50 hover:to-luxury-teal-50 dark:hover:from-luxury-gold-900/20 dark:hover:to-luxury-teal-900/20 transition-all duration-300 group ${
                        activeSection === item.value
                          ? 'bg-gradient-to-r from-luxury-gold-100 to-luxury-teal-100 dark:from-luxury-gold-900/40 dark:to-luxury-teal-900/40 border-l-4 border-luxury-gold-500'
                          : ''
                      }`}
                    >
                      <IconComponent className={`mr-3 h-5 w-5 ${item.color} group-hover:scale-110 transition-transform duration-300`} />
                      <span className="font-medium">{item.label}</span>
                    </Button>
                  </motion.div>
                );
              })}
            </div>

            {/* Quick Stats in Sidebar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-8 p-4 bg-gradient-to-br from-luxury-gold-50 to-luxury-teal-50 dark:from-luxury-gold-900/20 dark:to-luxury-teal-900/20 rounded-xl border border-luxury-gold-200/20 dark:border-luxury-gold-700/20"
            >
              <h3 className="text-sm font-semibold text-luxury-charcoal-700 dark:text-luxury-charcoal-300 mb-3">Quick Stats</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-luxury-charcoal-600 dark:text-luxury-charcoal-400">Total Bookings</span>
                  <span className="font-semibold text-luxury-gold-600">{stats?.totalBookings || 0}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-luxury-charcoal-600 dark:text-luxury-charcoal-400">Unread Messages</span>
                  <span className="font-semibold text-luxury-teal-600">{stats?.unreadMessages || 0}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-luxury-charcoal-600 dark:text-luxury-charcoal-400">Portfolio Items</span>
                  <span className="font-semibold text-luxury-charcoal-600">{stats?.totalPortfolioItems || 0}</span>
                </div>
              </div>
            </motion.div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-4 lg:p-6">
          <div className="space-y-6">
            {/* Overview Section */}
            {activeSection === "overview" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-8"
              >
                <div className="mb-8">
                  <h2 className="text-3xl font-display font-bold gradient-text-luxury mb-3">Dashboard Overview</h2>
                  <p className="text-luxury-charcoal-600 dark:text-luxury-charcoal-400 text-lg">Monitor your photography business performance and key metrics</p>
                </div>

                {/* Enhanced Stats Cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              >
                {[
                  {
                    title: "Total Revenue",
                    value: `$${stats?.totalRevenue?.toLocaleString() || '0'}`,
                    change: stats?.totalBookings ? `${stats.totalBookings} bookings` : "No bookings yet",
                    changeType: (stats?.totalRevenue || 0) > 0 ? "positive" : "neutral",
                    icon: DollarSign,
                    color: "from-luxury-gold-500 to-luxury-gold-600",
                    bgColor: "bg-luxury-gold-50 dark:bg-luxury-gold-900/20"
                  },
                  {
                    title: "Total Bookings",
                    value: stats?.totalBookings?.toString() || '0',
                    change: stats?.totalBookings ? "Active bookings" : "Start booking",
                    changeType: (stats?.totalBookings || 0) > 0 ? "positive" : "neutral",
                    icon: Calendar,
                    color: "from-luxury-teal-500 to-luxury-teal-600",
                    bgColor: "bg-luxury-teal-50 dark:bg-luxury-teal-900/20"
                  },
                  {
                    title: "Portfolio Images",
                    value: stats?.totalPortfolioItems?.toString() || '0',
                    change: stats?.totalPortfolioItems ? "Images uploaded" : "Upload images",
                    changeType: (stats?.totalPortfolioItems || 0) > 0 ? "positive" : "neutral",
                    icon: Camera,
                    color: "from-luxury-charcoal-600 to-luxury-charcoal-700",
                    bgColor: "bg-luxury-charcoal-50 dark:bg-luxury-charcoal-900/20"
                  },
                  {
                    title: "Client Satisfaction",
                    value: stats?.averageRating ? stats.averageRating.toFixed(1) : "0.0",
                    change: stats?.averageRating ? "Average rating" : "No reviews yet",
                    changeType: (stats?.averageRating || 0) > 4 ? "positive" : "neutral",
                    icon: Star,
                    color: "from-luxury-gold-400 to-luxury-gold-500",
                    bgColor: "bg-luxury-gold-50 dark:bg-luxury-gold-900/20"
                  }
                ].map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <motion.div
                      key={stat.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <EnhancedCard variant="elevated" hover animate className="group">
                        <CardContent className="p-6">
                          <div className="flex items-center justify-between">
                            <div className="flex-1">
                              <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
                                {stat.title}
                              </p>
                              <p className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                                {stat.value}
                              </p>
                              <div className="flex items-center">
                                <TrendingUp className={`w-4 h-4 mr-1 ${
                                  stat.changeType === 'positive' ? 'text-green-500' : 'text-gray-500'
                                }`} />
                                <span className={`text-sm font-medium ${
                                  stat.changeType === 'positive' ? 'text-green-600' : 'text-gray-600'
                                }`}>
                                  {stat.change}
                                </span>
                              </div>
                            </div>
                            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                              <IconComponent className="w-8 h-8 text-white" />
                            </div>
                          </div>
                        </CardContent>
                      </EnhancedCard>
                    </motion.div>
                  );
                })}
              </motion.div>

                {/* Luxury Analytics */}
                <LuxuryAnalytics />

                {/* Luxury Quick Actions */}
                <LuxuryQuickActions />

                {/* Legacy Recent Activity & Quick Actions - Hidden */}
                <div className="hidden grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Recent Bookings */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="lg:col-span-2"
                >
                  <EnhancedCard variant="elevated" animate>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle className="text-xl">Recent Bookings</CardTitle>
                          <CardDescription>Latest client bookings and their status</CardDescription>
                        </div>
                        <Activity className="w-6 h-6 text-purple-600" />
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {/* No recent bookings message */}
                        <div className="text-center py-8">
                          <Calendar className="w-12 h-12 mx-auto text-gray-400 mb-4" />
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">No Recent Bookings</h3>
                          <p className="text-gray-600 dark:text-gray-400 mb-4">Start managing your bookings to see them here</p>
                          <EnhancedButton
                            variant="outline"
                            size="sm"
                            onClick={() => setActiveSection("bookings")}
                          >
                            Manage Bookings
                          </EnhancedButton>
                        </div>
                        {/* Placeholder for when we have real bookings */}
                        {([] as Array<{name: string; date: string; type: string; amount: string; status: string}>).map((booking, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-xl border border-gray-200/50 dark:border-gray-600/50 hover:shadow-md transition-all duration-300"
                          >
                            <div className="flex items-center space-x-4">
                              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                                <Calendar className="w-6 h-6 text-white" />
                              </div>
                              <div>
                                <p className="font-semibold text-gray-900 dark:text-white">{booking.name}</p>
                                <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                                  <span>{booking.date}</span>
                                  <span>•</span>
                                  <span>{booking.type}</span>
                                  <span>•</span>
                                  <span className="font-medium text-green-600">{booking.amount}</span>
                                </div>
                              </div>
                            </div>
                            <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                              booking.status === 'Confirmed'
                                ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                                : booking.status === 'Pending'
                                ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
                                : 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400'
                            }`}>
                              {booking.status}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </EnhancedCard>
                </motion.div>

                {/* Quick Actions */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <EnhancedCard variant="elevated" animate>
                    <CardHeader>
                      <CardTitle className="text-xl">Quick Actions</CardTitle>
                      <CardDescription>Frequently used admin functions</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 gap-4">
                        {[
                          { icon: Upload, label: "Upload Images", color: "from-blue-500 to-cyan-500" },
                          { icon: Plus, label: "New Booking", color: "from-green-500 to-emerald-500" },
                          { icon: MessageSquare, label: "View Messages", color: "from-orange-500 to-red-500" },
                          { icon: Eye, label: "Preview Site", color: "from-purple-500 to-pink-500" }
                        ].map((action, index) => {
                          const IconComponent = action.icon;
                          return (
                            <motion.div
                              key={action.label}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.3, delay: index * 0.1 }}
                            >
                              <EnhancedButton
                                variant="outline"
                                className="w-full h-16 flex-col space-y-2 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 dark:hover:from-purple-900/20 dark:hover:to-pink-900/20 border-2 hover:border-purple-200 dark:hover:border-purple-700 transition-all duration-300"
                                animate
                              >
                                <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${action.color} flex items-center justify-center`}>
                                  <IconComponent className="w-4 h-4 text-white" />
                                </div>
                                <span className="text-sm font-medium">{action.label}</span>
                              </EnhancedButton>
                            </motion.div>
                          );
                        })}
                      </div>
                    </CardContent>
                  </EnhancedCard>
                </motion.div>
                </div>
              </motion.div>
            )}

            {/* Portfolio Section */}
            {activeSection === "portfolio" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Portfolio Management</h2>
                  <p className="text-gray-600 dark:text-gray-400">Manage your photography portfolio and showcase your best work</p>
                </div>
                <PortfolioManager />
              </motion.div>
            )}

            {/* Bookings Section */}
            {activeSection === "bookings" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Booking Management</h2>
                  <p className="text-gray-600 dark:text-gray-400">View and manage client bookings and appointments</p>
                </div>
                <BookingManager />
              </motion.div>
            )}

            {/* Messages Section */}
            {activeSection === "messages" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Message Center</h2>
                  <p className="text-gray-600 dark:text-gray-400">Communicate with clients and manage inquiries</p>
                </div>
                <MessageManager />
              </motion.div>
            )}

            {/* Reviews Section */}
            {activeSection === "reviews" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Review Management</h2>
                  <p className="text-gray-600 dark:text-gray-400">Monitor and respond to client reviews and feedback</p>
                </div>
                <ReviewManager />
              </motion.div>
            )}

            {/* Blog Section */}
            {activeSection === "blog" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Blog Management</h2>
                  <p className="text-gray-600 dark:text-gray-400">Create and manage your blog posts and content</p>
                </div>
                <BlogManager />
              </motion.div>
            )}

            {/* FAQ Section */}
            {activeSection === "faq" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">FAQ Management</h2>
                  <p className="text-gray-600 dark:text-gray-400">Manage frequently asked questions and answers</p>
                </div>
                <FAQManager />
              </motion.div>
            )}

            {/* Settings Section */}
            {activeSection === "settings" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">System Settings</h2>
                  <p className="text-gray-600 dark:text-gray-400">Configure system preferences and account settings</p>
                </div>
                <SettingsManager />
              </motion.div>
            )}
          </div>
        </main>
      </div>
    </div>
  )
}


