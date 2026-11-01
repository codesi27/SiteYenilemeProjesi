export type ProjectImage = {
  src: string;
  alt: string;
  label: string;
  width: number;
  height: number;
  services: string[];
};

export const projectImages: ProjectImage[] = [
  {
    src: "/images/uygulamalar/corlu-cam-balkon-surgulu-sistem.webp",
    alt: "Çorlu'da siyah profilli sürgülü cam balkon uygulaması",
    label: "Sürgülü Cam Balkon",
    width: 1470,
    height: 827,
    services: ["/cam-balkon", "/aluminyum-sistemleri"],
  },
  {
    src: "/images/uygulamalar/corlu-pvc-balkon-pencere-uygulamasi.webp",
    alt: "Çorlu'da beyaz PVC balkon kapatma ve pencere uygulaması",
    label: "PVC Balkon Penceresi",
    width: 1470,
    height: 1306,
    services: ["/pvc-kapi-pencere"],
  },
  {
    src: "/images/uygulamalar/corlu-katlanir-cam-balkon-uygulamasi.webp",
    alt: "Çorlu'da panoramik katlanır cam balkon uygulaması",
    label: "Katlanır Cam Balkon",
    width: 1179,
    height: 1175,
    services: ["/cam-balkon"],
  },
  {
    src: "/images/uygulamalar/corlu-siyah-profilli-dusakabin.webp",
    alt: "Çorlu'da siyah profilli köşe duşakabin uygulaması",
    label: "Siyah Profilli Duşakabin",
    width: 1205,
    height: 1600,
    services: ["/dusakabin"],
  },
  {
    src: "/images/uygulamalar/corlu-kose-dusakabin-uygulamasi.webp",
    alt: "Çorlu'da siyah çerçeveli köşe duşakabin montajı",
    label: "Köşe Duşakabin",
    width: 944,
    height: 1181,
    services: ["/dusakabin"],
  },
  {
    src: "/images/uygulamalar/corlu-aluminyum-kis-bahcesi.webp",
    alt: "Çorlu'da antrasit alüminyum profilli cam kış bahçesi uygulaması",
    label: "Alüminyum Kış Bahçesi",
    width: 1086,
    height: 1448,
    services: ["/aluminyum-sistemleri", "/cam-balkon"],
  },
  {
    src: "/images/uygulamalar/corlu-pvc-kapi-pencere-bina-uygulamasi.webp",
    alt: "Çorlu'da binaya uygulanan antrasit PVC kapı ve pencere sistemleri",
    label: "PVC Kapı ve Pencere",
    width: 1179,
    height: 779,
    services: ["/pvc-kapi-pencere"],
  },
  {
    src: "/images/uygulamalar/corlu-antrasit-pvc-pencere.webp",
    alt: "Çorlu'da antrasit renk PVC pencere uygulaması",
    label: "Antrasit PVC Pencere",
    width: 900,
    height: 1600,
    services: ["/pvc-kapi-pencere"],
  },
  {
    src: "/images/uygulamalar/corlu-plise-sineklik-uygulamasi.webp",
    alt: "Çorlu'da kapı ve pencere için antrasit plise sineklik uygulaması",
    label: "Plise Sineklik",
    width: 1200,
    height: 1600,
    services: ["/sineklik"],
  },
  {
    src: "/images/uygulamalar/corlu-pvc-dograma-imalati.webp",
    alt: "Çorlu'da montaja hazırlanan antrasit PVC pencere doğramaları",
    label: "PVC Doğrama Hazırlığı",
    width: 1536,
    height: 1024,
    services: ["/pvc-kapi-pencere"],
  },
];

export function getServiceImages(path: string) {
  return projectImages.filter((image) => image.services.includes(path));
}
