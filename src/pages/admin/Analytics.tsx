import React from 'react';
import PageHeader from '../../components/PageHeader';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import StatsCard from '../../components/StatsCard';
import { 
  Users, 
  Eye, 
  MousePointerClick, 
  Clock,
  TrendingUp,
  Map,
  DeviceTablet,
  Globe,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';

const Analytics = () => {
  const stats = {
    visitors: '2,345',
    pageViews: '8,567',
    avgTime: '3:24',
    bounceRate: '42.3%'
  };

  const topPages = [
    { path: '/', views: '1,234', title: 'Inicio' },
    { path: '/prestamos-sba', views: '987', title: 'Préstamos SBA' },
    { path: '/blog/guia-prestamos-sba', views: '765', title: 'Guía de Préstamos SBA' },
    { path: '/bienes-raices', views: '654', title: 'Bienes Raíces' },
    { path: '/contactenos', views: '543', title: 'Contáctenos' }
  ];

  const deviceStats = [
    { device: 'Mobile', percentage: 58 },
    { device: 'Desktop', percentage: 32 },
    { device: 'Tablet', percentage: 10 }
  ];

  const locationStats = [
    { country: 'Estados Unidos', visits: '1,234', change: '+12.5%', trending: 'up' },
    { country: 'México', visits: '856', change: '+8.3%', trending: 'up' },
    { country: 'Colombia', visits: '543', change: '-2.1%', trending: 'down' },
    { country: 'España', visits: '432', change: '+5.7%', trending: 'up' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title="Analíticas"
        description="Estadísticas y métricas de rendimiento del sitio web"
        imageSrc="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Tabs defaultValue="overview" className="space-y-8">
          <TabsList>
            <TabsTrigger value="overview">Vista General</TabsTrigger>
            <TabsTrigger value="audience">Audiencia</TabsTrigger>
            <TabsTrigger value="behavior">Comportamiento</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatsCard
                icon={Users}
                value={stats.visitors}
                label="Visitantes Únicos"
              />
              <StatsCard
                icon={Eye}
                value={stats.pageViews}
                label="Vistas de Página"
              />
              <StatsCard
                icon={Clock}
                value={stats.avgTime}
                label="Tiempo Promedio"
              />
              <StatsCard
                icon={MousePointerClick}
                value={stats.bounceRate}
                label="Tasa de Rebote"
              />
            </div>

            {/* Top Pages */}
            <Card>
              <CardHeader>
                <CardTitle>Páginas Más Visitadas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4">Página</th>
                        <th className="text-right py-3 px-4">Vistas</th>
                      </tr>
                    </thead>
                    <tbody>
                      {topPages.map((page, index) => (
                        <tr key={index} className="border-b">
                          <td className="py-3 px-4">
                            <div className="font-medium">{page.title}</div>
                            <div className="text-sm text-gray-500">{page.path}</div>
                          </td>
                          <td className="text-right py-3 px-4">{page.views}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="audience" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Device Distribution */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <DeviceTablet className="h-5 w-5 mr-2" />
                    Dispositivos
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {deviceStats.map((stat, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-32 font-medium">{stat.device}</div>
                        <div className="flex-1">
                          <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-blue-600 rounded-full"
                              style={{ width: `${stat.percentage}%` }}
                            />
                          </div>
                        </div>
                        <div className="w-16 text-right">{stat.percentage}%</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Geographic Distribution */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Globe className="h-5 w-5 mr-2" />
                    Ubicación
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {locationStats.map((stat, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="font-medium">{stat.country}</div>
                        <div className="flex items-center space-x-4">
                          <span>{stat.visits}</span>
                          <span className={`flex items-center ${
                            stat.trending === 'up' ? 'text-green-600' : 'text-red-600'
                          }`}>
                            {stat.trending === 'up' ? (
                              <ArrowUpRight className="h-4 w-4 mr-1" />
                            ) : (
                              <ArrowDownRight className="h-4 w-4 mr-1" />
                            )}
                            {stat.change}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="behavior" className="space-y-6">
            {/* User Flow */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2" />
                  Flujo de Usuarios
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between py-2">
                    <span className="font-medium">Página de Inicio</span>
                    <span className="text-gray-500">45% tasa de entrada</span>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <span className="font-medium">Préstamos SBA</span>
                    <span className="text-gray-500">32% tasa de conversión</span>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <span className="font-medium">Formulario de Contacto</span>
                    <span className="text-gray-500">15% tasa de completado</span>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <span className="font-medium">Blog</span>
                    <span className="text-gray-500">8 min tiempo promedio</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Engagement Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Tiempo en Sitio</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">8:45</div>
                  <div className="text-sm text-gray-500">Promedio por sesión</div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Páginas por Sesión</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">4.2</div>
                  <div className="text-sm text-gray-500">Promedio de páginas</div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Tasa de Conversión</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">3.8%</div>
                  <div className="text-sm text-gray-500">Promedio global</div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Analytics;