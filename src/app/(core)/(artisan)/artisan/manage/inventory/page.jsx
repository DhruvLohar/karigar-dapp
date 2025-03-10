"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';

const viewsData = [
  { month: 'Jan', desktop: 300, mobile: 200 },
  { month: 'Feb', desktop: 500, mobile: 400 },
  { month: 'Mar', desktop: 400, mobile: 300 },
  { month: 'Apr', desktop: 200, mobile: 400 },
  { month: 'May', desktop: 300, mobile: 300 },
  { month: 'Jun', desktop: 200, mobile: 400 },
];

const salesData = [
  { month: 'Jan', sales: 20 },
  { month: 'Feb', sales: 45 },
  { month: 'Mar', sales: 28 },
  { month: 'May', sales: 18 },
  { month: 'June', sales: 24 },
  { month: 'July', sales: 21 },
];

export default function InventoryPage() {
  return (
    <div className="container mx-auto p-6 text-black">
      <h1 className="text-3xl font-bold mb-6">My Products</h1>
      <p className="mb-8">Manage and update all of your products</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card className="bg-white">
          <CardHeader>
            <CardTitle className="text-black">Views Distribution</CardTitle>
            <p className="text-sm text-black">January - June 2024</p>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={viewsData}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="desktop" fill="#f97316" />
                <Bar dataKey="mobile" fill="#14b8a6" />
              </BarChart>
            </ResponsiveContainer>
            <p className="text-sm font-medium mt-4 text-black">Trending up by 5.2% this month</p>
            <p className="text-xs text-black">Showing total visitors for the last 6 months</p>
          </CardContent>
        </Card>

        <Card className="bg-white">
          <CardHeader>
            <CardTitle className="text-black">Total Sales</CardTitle>
            <p className="text-sm text-black">Last 6 Months</p>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={salesData}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="sales" stroke="#f97316" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
            <p className="text-sm font-medium mt-4 text-black">Predicted sales for next month: $21</p>
            <p className="text-xs text-black">Showing total sales for the last 6 months</p>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-white">
        <CardHeader className="flex flex-row items-center justify-between">
          <Input placeholder="Filter Product IDs..." className="max-w-sm bg-white" />
          <Button variant="outline">Columns</Button>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-12">
                  <Checkbox className="border-black" />
                </TableHead>
                <TableHead className="text-black">Product ID</TableHead>
                <TableHead className="text-black">Verified</TableHead>
                <TableHead className="text-black">Title</TableHead>
                <TableHead className="text-black">Price</TableHead>
                <TableHead className="text-black">Raw Material</TableHead>
                <TableHead className="text-black">Category</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell><Checkbox className="border-black" /></TableCell>
                <TableCell className="text-black">ph2y2i4</TableCell>
                <TableCell><span className="text-green-500">Yes</span></TableCell>
                <TableCell className="text-black">Organic Honey</TableCell>
                <TableCell className="text-black">$12.99</TableCell>
                <TableCell className="text-black">Honey</TableCell>
                <TableCell className="text-black">Food Product</TableCell>
                <TableCell><Button variant="outline">Edit Product Details</Button></TableCell>
              </TableRow>
              <TableRow>
                <TableCell><Checkbox className="border-black" /></TableCell>
                <TableCell className="text-black">p5a6b7c8</TableCell>
                <TableCell><span className="text-red-500">No</span></TableCell>
                <TableCell className="text-black">Woolen Scarf</TableCell>
                <TableCell className="text-black">$25.00</TableCell>
                <TableCell className="text-black">Wool</TableCell>
                <TableCell className="text-black">Clothing Product</TableCell>
                <TableCell><Button variant="outline">Edit Product Details</Button></TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <div className="flex items-center justify-between mt-4">
            <p className="text-sm text-black">0 of 2 row(s) selected</p>
            <div className="space-x-2">
              <Button variant="outline">Previous</Button>
              <Button variant="outline">Next</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
