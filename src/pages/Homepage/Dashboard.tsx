
import DashboardNavbar from "../../layout/DashboardNavbar";
import Button from "../../components/ui/button/Button";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../components/ui/card/card";
import { FilePlus, FolderPlus, Clock, Star, Search } from "lucide-react";
import { Input } from "../../components/ui/input/Input";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardNavbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="md:flex md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
            <p className="mt-1 text-sm text-gray-500">
              Manage your documents and folders
            </p>
          </div>
          <div className="mt-4 md:mt-0 flex space-x-3">
            <Button className="bg-blue-600 hover:bg-blue-700">
              <FilePlus className="mr-2 h-4 w-4" />
              New Document
            </Button>
            <Button variant="outline">
              <FolderPlus className="mr-2 h-4 w-4" />
              New Folder
            </Button>
          </div>
        </div>

        <div className="mb-8">
          <div className="relative max-w-xl">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              type="text"
              placeholder="Search documents..."
              className="pl-10 pr-4 py-2 w-full"
            />
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Recent Documents</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <Card key={item} className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base font-medium">Project Proposal</CardTitle>
                  <CardDescription className="text-xs flex items-center">
                    <Clock className="mr-1 h-3 w-3" /> Edited 2h ago
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-sm pb-3">
                  <p className="text-gray-500 line-clamp-2">
                    This document contains the project proposal for the new marketing campaign.
                  </p>
                </CardContent>
                <CardFooter className="pt-0 flex justify-between">
                  <span className="text-xs text-gray-500">PDF • 2.4MB</span>
                  <Button  size="sm" className="h-8 w-8 p-0">
                    <Star className="h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Shared with me</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2].map((item) => (
              <Card key={item} className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base font-medium">Q4 Budget Report</CardTitle>
                  <CardDescription className="text-xs flex items-center">
                    <Clock className="mr-1 h-3 w-3" /> Shared by Jane Doe
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-sm pb-3">
                  <p className="text-gray-500 line-clamp-2">
                    Financial report for Q4 with budget planning for next year.
                  </p>
                </CardContent>
                <CardFooter className="pt-0 flex justify-between">
                  <span className="text-xs text-gray-500">XLSX • 1.8MB</span>
                  <Button  size="sm" className="h-8 w-8 p-0">
                    <Star className="h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-lg font-medium text-gray-900 mb-4">Folders</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {["Marketing", "Legal", "Finance", "Personal"].map((folder) => (
              <Card key={folder} className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base font-medium flex items-center">
                    <svg
                      className="w-6 h-6 mr-2 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                      />
                    </svg>
                    {folder}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm pb-2">
                  <p className="text-gray-500">
                    {Math.floor(Math.random() * 30) + 5} files
                  </p>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button  size="sm" className="text-blue-600 hover:text-blue-700 p-0">
                    Open folder
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;