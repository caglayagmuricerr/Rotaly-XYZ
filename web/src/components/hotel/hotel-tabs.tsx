"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Rating, RatingButton } from "../ui/shadcn-io/rating";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin } from "lucide-react";

export default function HotelTabs() {
  return (
    <div className="mt-8 bg-white dark:bg-card rounded-lg shadow-md p-6">
      <Tabs defaultValue="description" className="w-full">
        <TabsList className="grid w-full grid-cols-3 ">
          <TabsTrigger value="description">Açıklama</TabsTrigger>
          <TabsTrigger value="reviews">Değerlendirme</TabsTrigger>
          <TabsTrigger value="map">Harita</TabsTrigger>
        </TabsList>

        <TabsContent
          value="description"
          className="pt-4 text-gray-700 dark:text-gray-300"
        >
          <h2 className="text-xl font-semibold mb-3">
            Marakeş&apos;in Kalbinde Huzurlu Bir Kaçış
          </h2>
          <p className="mb-4">
            Marakeş&apos;in kalbinde yer alan Riad Deluxe, geleneksel Fas
            mimarisiyle modern konforu birleştiriyor. Geniş avlusu, serinletici
            havuzu ve huzurlu bahçeleriyle şehrin gürültüsünden uzaklaşmak için
            ideal bir sığınak sunar. Her odası özenle dekore edilmiş olup, Fas
            el sanatlarının zenginliğini yansıtır.
          </p>
          <p className="mb-4">
            Tüm önemli turistik mekanlara yürüme mesafesinde olan otelimiz,
            Djemaa el-Fna Meydanı&apos;na ve Medine çarşılarına kolay erişim
            sağlar. Misafirlerimiz, geleneksel Fas hamamımızda rahatlayabilir
            veya çatı terasımızda panoramik şehir manzarası eşliğinde nane çayı
            keyfi yapabilirler.
          </p>
          <h3 className="text-lg font-semibold mb-2 mt-4">Odalar ve Süitler</h3>
          <ul className="list-disc list-inside mb-4 space-y-1">
            <li>Özenle dekore edilmiş, konforlu odalar ve lüks süitler.</li>
            <li>
              Her odada özel banyo, klima, ücretsiz Wi-Fi ve düz ekran TV.
            </li>
            <li>Geleneksel Fas el sanatları ve modern olanaklar.</li>
          </ul>
          <h3 className="text-lg font-semibold mb-2 mt-4">Hizmetler</h3>
          <ul className="list-disc list-inside mb-4 space-y-1">
            <li>24 Saat Resepsiyon</li>
            <li>Oda Servisi</li>
            <li>Ücretsiz Wi-Fi</li>
            <li>Restoran ve Bar</li>
            <li>Açık Havuz</li>
            <li>Geleneksel Hamam</li>
            <li>Çatı Terası</li>
            <li>Havalimanı Transferi (ek ücretli)</li>
          </ul>
          <h3 className="text-lg font-semibold mb-2 mt-4">Yerel İpuçları</h3>
          <ul className="list-disc list-inside mb-4 space-y-1">
            <li>
              Djemaa el-Fna Meydanı&apos;nı ziyaret edin ve akşam yemeği için
              yerel yemek tezgahlarını deneyin.
            </li>
            <li>
              Medine&apos;nin dar sokaklarında kaybolun ve el yapımı ürünler
              bulun.
            </li>
            <li>Jardin Majorelle&apos;i keşfedin.</li>
            <li>Baharat çarşılarını ziyaret edin.</li>
          </ul>
        </TabsContent>

        <TabsContent
          value="reviews"
          className="pt-4 text-gray-700 dark:text-gray-300"
        >
          <h2 className="text-xl font-semibold mb-3">
            Misafir Değerlendirmeleri (125)
          </h2>
          <div className="mb-4 flex items-center gap-4">
            <div className="flex flex-col items-center">
              <span className="text-5xl font-bold text-blue-600">4.8</span>
              <Rating defaultValue={4.8} readOnly>
                {Array.from({ length: 5 }).map((_, index) => (
                  <RatingButton
                    key={index}
                    size={20}
                    className="text-yellow-500"
                  />
                ))}
              </Rating>
              <span className="text-sm text-gray-500">Mükemmel</span>
            </div>
            <div className="flex-1 space-y-2">
              {[5, 4, 3, 2, 1].map((starCount) => (
                <div key={starCount} className="flex items-center gap-2">
                  <span className="text-sm">{starCount} Yıldız</span>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div
                      className="bg-blue-600 h-2.5 rounded-full"
                      style={{
                        width:
                          starCount === 5
                            ? "90%"
                            : starCount === 4
                            ? "70%"
                            : starCount === 3
                            ? "30%"
                            : starCount === 2
                            ? "10%"
                            : "5%",
                      }} // Example widths
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Individual Reviews (mock) */}
          <div className="border-t pt-4 mt-4 space-y-6">
            <div className="border rounded-lg p-4">
              <div className="flex items-center mb-2">
                <div className="font-semibold mr-2">Ayşe Yılmaz</div>
                <Rating defaultValue={5} readOnly>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <RatingButton
                      key={index}
                      size={14}
                      className="text-yellow-500"
                    />
                  ))}
                </Rating>
                <span className="text-sm text-gray-500 ml-2">5 gün önce</span>
              </div>
              <p className="text-sm">
                &quot;Harika bir deneyimdi! Otelin konumu muhteşem, personel çok
                ilgili ve odalar tertemizdi. Kesinlikle tekrar kalacağım.&quot;
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <div className="flex items-center mb-2">
                <div className="font-semibold mr-2">Mehmet Demir</div>
                <Rating defaultValue={4} readOnly>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <RatingButton
                      key={index}
                      size={14}
                      className="text-yellow-500"
                    />
                  ))}
                </Rating>
                <span className="text-sm text-gray-500 ml-2">2 hafta önce</span>
              </div>
              <p className="text-sm">
                &quot;Otel çok şık, Fas atmosferini sonuna kadar yaşatıyor.
                Kahvaltı biraz daha çeşitli olabilirdi ama genel olarak çok
                memnun kaldık.&quot;
              </p>
            </div>
            <Button variant="outline" className="w-full mt-4">
              Tüm Değerlendirmeleri Gör
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="map" className="pt-4">
          <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
          <Card className="border border-gray-200 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-gray-900 dark:text-white flex items-center">
                <MapPin className="h-5 w-5 text-red-500 mr-2" />
                Otel Konumu
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0 h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6016.451935958043!2d28.980267249633762!3d41.064053019894764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab71cc5d69f1f%3A0x51e922b9e59b5a9b!2zaXN0YW5idWwgcm90YXJ5IGt1bMO8YsO8IGRlcm5lxJ9p!5e0!3m2!1str!2str!4v1754138151565!5m2!1str!2str"
                className="w-full h-[300px] rounded-b-lg"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
              />
              <div className="p-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Rotaly Merkez Ofisi</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Bertance Bulvarı, Sevin Apartman No:64 D:11<br />
                      Balmumcu Beşiktaş / İstanbul
                    </p>
                  </div>
                  <Image
                    src="/images/logo3.png"
                    alt="Rotaly Logo"
                    width={50}
                    height={50}
                    className="rounded-lg"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
