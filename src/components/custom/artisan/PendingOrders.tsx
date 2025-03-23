import React from 'react';
import { Check, ShoppingBag } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

// Sample data - to be replaced with real data from an API
const pendingOrders = [
  {
    id: 'ORD-001',
    customer: 'Priya Singh',
    items: ['Handwoven Scarf', 'Ceramic Pot'],
    total: '₹2,500',
    date: '3 hours ago',
    status: 'pending'
  },
  {
    id: 'ORD-002',
    customer: 'Amit Patel',
    items: ['Bamboo Basket', 'Wooden Figurine'],
    total: '₹1,800',
    date: '1 day ago',
    status: 'pending'
  },
];

export function PendingOrders() {
  return (
    <Card className="bg-white border-dori/10">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-semibold text-dori flex items-center">
          <ShoppingBag className="mr-2 h-5 w-5" />
          Pending Orders
        </CardTitle>
      </CardHeader>
      <CardContent>
        {pendingOrders.length > 0 ? (
          <div className="space-y-4">
            {pendingOrders.map((order) => (
              <div key={order.id} className="border rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-medium text-dori">{order.customer}</h3>
                    <p className="text-sm text-muted-foreground">{order.date}</p>
                  </div>
                  <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">
                    Pending
                  </Badge>
                </div>
                <div className="space-y-1 mb-3">
                  {order.items.map((item, i) => (
                    <p key={i} className="text-sm">• {item}</p>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">{order.total}</span>
                  <div className="space-x-2">
                    <Button variant="outline" size="sm">
                      Details
                    </Button>
                    <Button size="sm" className="bg-green-600 hover:bg-green-700">
                      <Check className="mr-1 h-4 w-4" />
                      Fulfill
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8 text-muted-foreground">
            <ShoppingBag className="mx-auto h-10 w-10 text-muted-foreground/50 mb-3" />
            <p>No pending orders at the moment.</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
} 