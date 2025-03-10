"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { ChevronDown } from "lucide-react";

const orders = [
  { id: "o5gr8d9", status: "Success", name: "Ken Smith", email: "ken99@yahoo.com", price: "$318.00" },
  { id: "o3ufeuv4", status: "Success", name: "Abe Johnson", email: "abe45@gmail.com", price: "$242.00" },
  { id: "oder1xs0", status: "Processing", name: "Monserrat Lopez", email: "monserrat44@gmail.com", price: "$837.00" },
  { id: "o5kmd3ae", status: "Success", name: "Silas Walker", email: "silas22@gmail.com", price: "$874.00" },
  { id: "obhqej4p", status: "Failed", name: "Carmella Evans", email: "carmella@hotmail.com", price: "$721.00" },
];

export default function ManageOrdersPage() {
  return (
    <div className="container mx-auto p-6 bg-white text-black">
      <header className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold">Manage Orders</h1>
          <p className="text-gray-500">Manage and update all of your orders</p>
        </div>
        <nav className="space-x-4">
          <a href="#" className="text-black">My Profile</a>
          <a href="#" className="text-black">Crowd Fundings</a>
          <a href="#" className="text-black">Explore Products</a>
          <a href="#" className="text-black">My Orders</a>
          <a href="#" className="text-black">My Cart</a>
        </nav>
      </header>

      <Card className="bg-white">
        <CardHeader className="flex flex-row items-center justify-between">
          <Input placeholder="Filter emails..." className="max-w-sm bg-white" />
          <Button variant="outline" className="bg-white text-black">
            Columns <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-12"><Checkbox className="border-black" /></TableHead>
                <TableHead className="text-black">ORD ID</TableHead>
                <TableHead className="text-black">Status</TableHead>
                <TableHead className="text-black">Customer Name</TableHead>
                <TableHead className="text-black">Email</TableHead>
                <TableHead className="text-black">Order Price</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell><Checkbox className="border-black" /></TableCell>
                  <TableCell className="text-black">{order.id}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded text-white ${
                      order.status === "Success" ? "bg-green-500" :
                      order.status === "Processing" ? "bg-blue-500" :
                      "bg-red-500"
                    }`}>
                      {order.status}
                    </span>
                  </TableCell>
                  <TableCell className="text-black">{order.name}</TableCell>
                  <TableCell className="text-black">{order.email}</TableCell>
                  <TableCell className="text-black">{order.price}</TableCell>
                  <TableCell>...</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className="flex items-center justify-between mt-4">
            <p className="text-sm text-black">0 of 5 row(s) selected</p>
            <div className="space-x-2">
              <Button variant="outline" className="bg-white text-black">Previous</Button>
              <Button variant="outline" className="bg-white text-black">Next</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
