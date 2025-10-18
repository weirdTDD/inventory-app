import Sidebar from "../../components/sidebar";

export default function InventoryPage() {
    return (
        <div className="min-h-screen bg-gray-100">
            <Sidebar currentPath="/inventory" />
            <div>
                <h1>Inventory Management</h1>
            </div>
        </div>
    )
}