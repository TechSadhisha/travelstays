import { Link, Outlet, useLocation } from "react-router-dom";
import { LayoutDashboard, Building2, PlusCircle, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";

const AdminLayout = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col fixed h-full z-10">
        <div className="p-6 border-b border-gray-200">
          <h1 className="text-xl font-bold text-primary tracking-wide">
            TRAVEL STAYS
            <span className="block text-xs font-normal text-muted-foreground mt-1">Admin Panel</span>
          </h1>
        </div>

        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          <Link to="/admin">
            <Button
              variant={isActive("/admin") ? "secondary" : "ghost"}
              className="w-full justify-start gap-3"
            >
              <LayoutDashboard className="h-4 w-4" />
              Dashboard
            </Button>
          </Link>
          
          <Link to="/admin/properties">
            <Button
              variant={isActive("/admin/properties") ? "secondary" : "ghost"}
              className="w-full justify-start gap-3"
            >
              <Building2 className="h-4 w-4" />
              Properties
            </Button>
          </Link>

          <Link to="/admin/properties/new">
            <Button
              variant={isActive("/admin/properties/new") ? "secondary" : "ghost"}
              className="w-full justify-start gap-3"
            >
              <PlusCircle className="h-4 w-4" />
              Add Property
            </Button>
          </Link>
        </nav>

        <div className="p-4 border-t border-gray-200">
          <Link to="/">
            <Button variant="outline" className="w-full justify-start gap-3 text-red-500 hover:text-red-600 hover:bg-red-50">
              <LogOut className="h-4 w-4" />
              Exit Admin
            </Button>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-64 p-8 overflow-y-auto h-screen">
        <div className="max-w-7xl mx-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;
