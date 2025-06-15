
import React, { useState, useEffect } from 'react';
import { ArrowLeft, Wifi, WifiOff, Thermometer, Zap, Droplets, Wind, AlertTriangle, CheckCircle, Settings, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Switch } from '@/components/ui/switch';
import { AuthProvider, useAuth } from '@/hooks/useAuth';
import LoginForm from '@/components/LoginForm';

const IoTDashboard = () => {
  const { user, logout } = useAuth();
  const [devices, setDevices] = useState([
    { id: 1, name: 'Temperature Sensor A1', type: 'temperature', value: 22.5, unit: '°C', status: 'online', battery: 85, location: 'Building A - Floor 1' },
    { id: 2, name: 'Humidity Monitor B2', type: 'humidity', value: 65, unit: '%', status: 'online', battery: 72, location: 'Building B - Floor 2' },
    { id: 3, name: 'Motion Detector C3', type: 'motion', value: 0, unit: '', status: 'online', battery: 91, location: 'Building C - Entrance' },
    { id: 4, name: 'Air Quality Sensor D4', type: 'air', value: 45, unit: 'AQI', status: 'offline', battery: 23, location: 'Building D - Office' },
    { id: 5, name: 'Energy Monitor E5', type: 'energy', value: 1250, unit: 'W', status: 'online', battery: 88, location: 'Building E - Server Room' },
    { id: 6, name: 'Water Level F6', type: 'water', value: 78, unit: '%', status: 'warning', battery: 34, location: 'Building F - Tank' }
  ]);

  const [alerts, setAlerts] = useState([
    { id: 1, type: 'warning', message: 'Low battery on Water Level F6', time: '2 minutes ago', device: 'F6' },
    { id: 2, type: 'error', message: 'Air Quality Sensor D4 is offline', time: '15 minutes ago', device: 'D4' },
    { id: 3, type: 'info', message: 'Energy consumption spike detected', time: '1 hour ago', device: 'E5' }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setDevices(prev => prev.map(device => ({
        ...device,
        value: device.status === 'online' ? 
          device.value + (Math.random() - 0.5) * 2 :
          device.value,
        battery: Math.max(0, device.battery - Math.random() * 0.1)
      })));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getDeviceIcon = (type: string) => {
    switch (type) {
      case 'temperature': return Thermometer;
      case 'humidity': return Droplets;
      case 'motion': return Activity;
      case 'air': return Wind;
      case 'energy': return Zap;
      case 'water': return Droplets;
      default: return Activity;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'online': return 'bg-green-100 text-green-800';
      case 'offline': return 'bg-red-100 text-red-800';
      case 'warning': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const toggleDevice = (deviceId: number) => {
    setDevices(prev => prev.map(device => 
      device.id === deviceId 
        ? { ...device, status: device.status === 'online' ? 'offline' : 'online' }
        : device
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <Link to="/project/6" className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Project Details
          </Link>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">Welcome, {user?.name}</span>
            <Button onClick={logout} variant="outline" size="sm">Logout</Button>
          </div>
        </div>

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">IoT Monitoring Dashboard</h1>
          <p className="text-gray-600">Real-time monitoring and control of IoT devices</p>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Devices</p>
                  <p className="text-3xl font-bold text-gray-900">{devices.length}</p>
                </div>
                <Activity className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Online</p>
                  <p className="text-3xl font-bold text-green-600">{devices.filter(d => d.status === 'online').length}</p>
                </div>
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Offline</p>
                  <p className="text-3xl font-bold text-red-600">{devices.filter(d => d.status === 'offline').length}</p>
                </div>
                <WifiOff className="h-8 w-8 text-red-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Alerts</p>
                  <p className="text-3xl font-bold text-orange-600">{alerts.length}</p>
                </div>
                <AlertTriangle className="h-8 w-8 text-orange-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Device Grid */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Device Status</CardTitle>
                <CardDescription>Monitor and control all connected IoT devices</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {devices.map((device) => {
                    const DeviceIcon = getDeviceIcon(device.type);
                    return (
                      <div key={device.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-4">
                          <DeviceIcon className="h-8 w-8 text-blue-600" />
                          <div>
                            <p className="font-medium">{device.name}</p>
                            <p className="text-sm text-gray-600">{device.location}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4">
                          <div className="text-right">
                            <p className="font-bold">{device.value.toFixed(1)} {device.unit}</p>
                            <div className="flex items-center space-x-2">
                              <Progress value={device.battery} className="w-16 h-2" />
                              <span className="text-xs text-gray-500">{Math.round(device.battery)}%</span>
                            </div>
                          </div>
                          <Badge className={getStatusColor(device.status)}>
                            {device.status === 'online' ? <Wifi className="w-3 h-3 mr-1" /> : <WifiOff className="w-3 h-3 mr-1" />}
                            {device.status}
                          </Badge>
                          <Switch 
                            checked={device.status === 'online'} 
                            onCheckedChange={() => toggleDevice(device.id)}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Alerts Panel */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Recent Alerts</CardTitle>
                <CardDescription>System notifications and warnings</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {alerts.map((alert) => (
                    <div key={alert.id} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                      <AlertTriangle className={`h-5 w-5 mt-0.5 ${
                        alert.type === 'error' ? 'text-red-500' : 
                        alert.type === 'warning' ? 'text-yellow-500' : 'text-blue-500'
                      }`} />
                      <div className="flex-1">
                        <p className="text-sm font-medium">{alert.message}</p>
                        <p className="text-xs text-gray-500">{alert.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle>System Health</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Network Latency</span>
                      <span>23ms</span>
                    </div>
                    <Progress value={77} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Data Processing</span>
                      <span>94%</span>
                    </div>
                    <Progress value={94} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Storage Usage</span>
                      <span>67%</span>
                    </div>
                    <Progress value={67} className="h-2" />
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

const IoTDemo = () => {
  return (
    <AuthProvider>
      <IoTDemoContent />
    </AuthProvider>
  );
};

const IoTDemoContent = () => {
  const { user } = useAuth();
  
  if (!user) {
    return <LoginForm />;
  }
  
  return <IoTDashboard />;
};

export default IoTDemo;
