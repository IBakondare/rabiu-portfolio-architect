
import React, { useState, useEffect } from 'react';
import { ArrowLeft, Package, Truck, MapPin, Shield, Clock, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const BlockchainDemo = () => {
  const [selectedProduct, setSelectedProduct] = useState(0);
  const [trackingStage, setTrackingStage] = useState(2);

  const products = [
    {
      id: "BC001",
      name: "Organic Coffee Beans",
      origin: "Colombia",
      farmer: "Juan Rodriguez",
      certification: "Fair Trade Organic",
      currentLocation: "Distribution Center, Miami"
    },
    {
      id: "BC002", 
      name: "Premium Chocolate",
      origin: "Ecuador",
      farmer: "Maria Santos",
      certification: "Rainforest Alliance",
      currentLocation: "Processing Plant, Belgium"
    }
  ];

  const supplyChainStages = [
    {
      stage: "Farm Origin",
      location: "Huila, Colombia",
      timestamp: "2024-01-15 08:00",
      status: "completed",
      details: "Harvested by certified organic farm",
      icon: Package
    },
    {
      stage: "Processing",
      location: "Bogotá, Colombia", 
      timestamp: "2024-01-16 14:30",
      status: "completed",
      details: "Quality tested and processed",
      icon: Shield
    },
    {
      stage: "Shipping",
      location: "En route to Miami",
      timestamp: "2024-01-18 09:15",
      status: "current",
      details: "Container MSCU1234567",
      icon: Truck
    },
    {
      stage: "Distribution",
      location: "Miami, FL",
      timestamp: "2024-01-22 11:00",
      status: "pending",
      details: "Awaiting customs clearance",
      icon: MapPin
    }
  ];

  const blockchainData = {
    blockHash: "0x7d865e959b2466918c9863afca942d0fb89d7c9ac0c99bafc3749504ded97730",
    transactionHash: "0x9b9e8d4c2b5a6c7f3e8d2a1b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d",
    gasUsed: "21,000",
    timestamp: "2024-01-18 09:15:42 UTC"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link to="/project/2" className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-8 transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Project Details
        </Link>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <Card className="bg-white/80 backdrop-blur-sm border-purple-200">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-2xl text-purple-900">Blockchain Supply Chain Tracker</CardTitle>
                    <CardDescription>Transparent product journey from farm to consumer</CardDescription>
                  </div>
                  <Badge className="bg-purple-100 text-purple-800">Live Demo</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  {products.map((product, index) => (
                    <Card 
                      key={index}
                      className={`cursor-pointer transition-all ${
                        selectedProduct === index 
                          ? 'border-purple-400 bg-purple-50' 
                          : 'border-gray-200 hover:border-purple-300'
                      }`}
                      onClick={() => setSelectedProduct(index)}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between mb-2">
                          <Badge variant="outline">{product.id}</Badge>
                          <Package className="h-4 w-4 text-purple-600" />
                        </div>
                        <h3 className="font-semibold">{product.name}</h3>
                        <p className="text-sm text-gray-600">{product.origin}</p>
                        <p className="text-xs text-purple-700 mt-1">{product.certification}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <Card className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">Product Journey</h3>
                    <div className="space-y-4">
                      {supplyChainStages.map((stage, index) => (
                        <div key={index} className="flex items-center space-x-4">
                          <div className={`p-2 rounded-full ${
                            stage.status === 'completed' ? 'bg-green-500' :
                            stage.status === 'current' ? 'bg-yellow-500 animate-pulse' :
                            'bg-gray-400'
                          }`}>
                            <stage.icon className="h-4 w-4" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <h4 className="font-semibold">{stage.stage}</h4>
                              <Badge className={`${
                                stage.status === 'completed' ? 'bg-green-100 text-green-800' :
                                stage.status === 'current' ? 'bg-yellow-100 text-yellow-800' :
                                'bg-gray-100 text-gray-800'
                              }`}>
                                {stage.status}
                              </Badge>
                            </div>
                            <p className="text-sm opacity-90">{stage.location}</p>
                            <p className="text-xs opacity-75">{stage.details}</p>
                            <p className="text-xs opacity-60">{stage.timestamp}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="mr-2 h-5 w-5" />
                  Blockchain Verification
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div>
                      <label className="text-sm font-medium text-gray-700">Block Hash</label>
                      <p className="text-xs font-mono bg-gray-100 p-2 rounded break-all">{blockchainData.blockHash}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700">Transaction Hash</label>
                      <p className="text-xs font-mono bg-gray-100 p-2 rounded break-all">{blockchainData.transactionHash}</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <label className="text-sm font-medium text-gray-700">Gas Used</label>
                      <p className="text-sm bg-green-100 text-green-800 p-2 rounded">{blockchainData.gasUsed}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700">Timestamp</label>
                      <p className="text-sm bg-blue-100 text-blue-800 p-2 rounded">{blockchainData.timestamp}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg">Product Details</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700">Product ID</label>
                    <p className="font-mono text-sm">{products[selectedProduct].id}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">Farmer</label>
                    <p className="text-sm">{products[selectedProduct].farmer}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">Origin</label>
                    <p className="text-sm">{products[selectedProduct].origin}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">Current Location</label>
                    <p className="text-sm">{products[selectedProduct].currentLocation}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">Certification</label>
                    <Badge className="bg-green-100 text-green-800">{products[selectedProduct].certification}</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg">Smart Contract Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <span className="text-sm font-medium">Ownership Verified</span>
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  </div>
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <span className="text-sm font-medium">Quality Certified</span>
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  </div>
                  <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                    <span className="text-sm font-medium">In Transit</span>
                    <Clock className="h-4 w-4 text-yellow-600" />
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm font-medium">Delivery Pending</span>
                    <Clock className="h-4 w-4 text-gray-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg">Network Stats</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Network:</span>
                    <span className="font-medium">Ethereum</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Gas Price:</span>
                    <span className="font-medium">25 Gwei</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Block Number:</span>
                    <span className="font-medium">#18,890,123</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Confirmations:</span>
                    <span className="font-medium text-green-600">156</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockchainDemo;
