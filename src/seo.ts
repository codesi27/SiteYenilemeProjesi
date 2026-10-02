export const SITE = "https://www.asyapii.com";
export const BUSINESS = "AS YAPI PVC & Cam Balkon Sistemleri";

type Page = {
  path: string;
  label: string;
  h1: string;
  title: string;
  description: string;
  intro: string;
  details: string;
  uses: string;
  installation: string;
  area: string;
  faq: { question: string; answer: string }[];
  related: string[];
};

export const home = {
  path: "/",
  title: "Çorlu Cam Balkon, PVC, Duşakabin & Sineklik | AS YAPI",
  description: "Çorlu'da cam balkon, PVC kapı pencere, duşakabin ve sineklik çözümleri. Ölçü, montaj ve ücretsiz keşif için iletişime geçin. Tekirdağ ve çevresine hizmet.",
  faq: [
    { question: "Çorlu'da cam balkon için keşif yapıyor musunuz?", answer: "Evet, Çorlu'da ölçü ve uygulama için ücretsiz keşif talep edebilirsiniz." },
    { question: "Pimapen tamiri ve PVC pencere ayarı yapıyor musunuz?", answer: "Evet, PVC pencere ve kapılarda ayar, bakım ve onarım için bize ulaşabilirsiniz." },
    { question: "Çorlu dışında hizmet veriyor musunuz?", answer: "Çorlu merkezli olarak Tekirdağ ve çevresinde, Trakya genelinde hizmet veriyoruz. Konumunuz için bizi arayın." },
  ],
};

export const pages: Page[] = [
  {
    path: "/cam-balkon", label: "Cam Balkon", h1: "Çorlu Cam Balkon Sistemleri",
    title: "Çorlu Cam Balkon Sistemleri ve Montajı | AS YAPI",
    description: "Çorlu cam balkon sistemleri için ölçü, katlanır ve sürgülü seçenekler, montaj ve bakım bilgisi. Fiyat teklifi ve ücretsiz keşif için AS YAPI'ya ulaşın.",
    intro: "Çorlu cam balkon uygulamalarında balkonun ölçüsüne ve kullanım şekline uygun sistemi birlikte belirliyoruz. Açılma alanı, cam seçimi ve günlük kullanım beklentileri keşif sırasında değerlendirilir.",
    details: "Katlanır cam balkon panelleri bir kenarda toplanarak geniş bir açıklık sağlar; sürgülü cam balkon ise panellerin ray boyunca hareket ettiği alanlarda tercih edilir. Sabit veya giyotin seçenekleri de mekânın koşullarına göre değerlendirilebilir. Cam balkon fiyatları ölçü, cam ve profil seçimi, açılım biçimi ile montaj koşullarına göre değişir; net teklif için yerinde ölçü gerekir.",
    uses: "Konut balkonları, teraslar ve rüzgâra açık oturma alanlarında kullanım ihtiyacına göre uygulanır. Cam yüzeyleri düzenli temizlemek, rayları kirden arındırmak ve hareketli parçaları zorlamadan kullanmak bakım açısından önemlidir.",
    installation: "Keşifte balkonun açıklıkları ölçülür, uygun sistem belirlenir ve uygulama planı oluşturulur. Cam balkon montajı Çorlu'daki mekânın ölçüsüne göre hazırlanmış parçaların yerinde sabitlenmesi ve açılım kontrolleriyle tamamlanır.",
    area: "Çorlu cam balkon sistemleri için merkezimiz Çorlu'dadır; Ergene, Çerkezköy ve Tekirdağ çevresindeki talepler için de bizimle görüşebilirsiniz.",
    faq: [
      { question: "Cam balkon ölçüsü nasıl alınır?", answer: "Açıklık, yükseklik ve montaj yüzeyi yerinde incelenir. Doğru sistem ve fiyat için ücretsiz keşif isteyebilirsiniz." },
      { question: "Katlanır ve sürgülü cam balkon arasında nasıl seçim yapılır?", answer: "Açılmasını istediğiniz alan, ray düzeni ve kullanım alışkanlığınıza göre seçim yapılır; keşifte seçenekleri birlikte değerlendiririz." },
      { question: "Cam balkon fiyatını neler etkiler?", answer: "Ölçüler, cam ve profil tercihi, sistem türü ve montaj koşulları fiyatı etkiler. Teklif için ölçü alınması gerekir." },
    ], related: ["/sineklik", "/aluminyum-sistemleri"],
  },
  {
    path: "/dusakabin", label: "Duşakabin", h1: "Çorlu Duşakabin Ölçü ve Montaj",
    title: "Çorlu Duşakabin Ölçü ve Montaj | AS YAPI",
    description: "Çorlu duşakabin çözümlerinde banyonuza uygun ölçü, cam ve açılım seçimi. Özel ölçü duşakabin montajı ve ücretsiz keşif için AS YAPI'yı arayın.",
    intro: "Çorlu duşakabin ihtiyaçlarında banyonun yerleşimine ve kullanım alanına uygun cam ve açılım seçeneklerini değerlendiriyoruz.",
    details: "Sabit, sürgülü veya katlanır modeller arasından seçim yapılırken giriş genişliği, su sıçrama alanı ve temizlik kolaylığı dikkate alınır. Özel ölçü duşakabin için mevcut zemin ve duvarların durumu da önemlidir.",
    uses: "Konut banyolarında ve kullanım alanı sınırlı duş bölümlerinde yerleşime göre çözüm oluşturulabilir.",
    installation: "Duşakabin ölçü aşamasında duvar, zemin ve açıklık kontrol edilir. Duşakabin montajı sırasında profillerin hizası, cam paneller ve kapı hareketi kontrol edilir.",
    area: "Çorlu merkezli olarak Tekirdağ, Marmaraereğlisi ve çevresindeki duşakabin talepleri için görüşebilirsiniz.",
    faq: [
      { question: "Duşakabin özel ölçü yapılabilir mi?", answer: "Evet, banyonuzun ölçüsüne uygun seçenekler için yerinde ölçü alınabilir." },
      { question: "Hangi duşakabin açılımı banyoma uygundur?", answer: "Kullanılabilir giriş alanına göre sabit, sürgülü veya katlanır seçenekler değerlendirilebilir." },
    ], related: ["/cam-kapi", "/pvc-kapi-pencere"],
  },
  {
    path: "/sineklik", label: "Sineklik", h1: "Çorlu Sineklik Sistemleri",
    title: "Çorlu Sineklik Sistemleri ve Montajı | AS YAPI",
    description: "Çorlu sineklik çözümlerinde pencere ve kapılara uygun ölçüye özel seçenekler. Sineklik montajı, fiyat ve ücretsiz keşif için AS YAPI ile görüşün.",
    intro: "Çorlu sineklik uygulamalarında pencere ve kapının kullanımına uygun ölçüye özel sineklik seçimi yapıyoruz.",
    details: "Pencere sinekliği ve kapı sinekliği için plise, rulo, sürgülü veya sabit seçenekler açıklığın boyutuna ve açılma yönüne göre değerlendirilebilir.",
    uses: "Ev ve iş yerlerinde sık açılan balkon kapıları, pencereler ve farklı doğrama tipleri için uygundur.",
    installation: "Ölçü alındıktan sonra çerçeve ve açılım uyumu kontrol edilerek sineklik montajı yapılır. Kullanım sırasında mekanizmayı zorlamadan açıp kapatmak faydalıdır.",
    area: "Çorlu merkezli sineklik talepleri için Ergene, Kapaklı ve çevre ilçelerden iletişime geçebilirsiniz.",
    faq: [
      { question: "Pencere ve kapılar için sineklik yapılabilir mi?", answer: "Evet, pencere ve kapının tipine göre uygun ölçü ve sistem belirlenebilir." },
      { question: "Hangi sineklik modeli uygundur?", answer: "Açıklığın ölçüsü ve kullanım sıklığına göre plise, rulo, sürgülü veya sabit seçenekler değerlendirilir." },
    ], related: ["/cam-balkon", "/pvc-kapi-pencere"],
  },
  {
    path: "/pvc-kapi-pencere", label: "PVC Kapı ve Pencere", h1: "Çorlu PVC Kapı ve Pencere Sistemleri",
    title: "Çorlu PVC Kapı ve Pencere Sistemleri | AS YAPI",
    description: "Çorlu'da PVC pencere ve kapı sistemleri, ölçü ve montaj. Isı ve ses yalıtımı ihtiyaçlarınız ile Pimapen tamiri ve pencere ayarı için bize ulaşın.",
    intro: "Çorlu'da PVC pencere ve PVC kapı uygulamalarında açıklığın ölçüsü, kullanım biçimi ve yalıtım ihtiyacı birlikte değerlendirilir.",
    details: "PVC doğrama ve Pimapen olarak anılan sistemlerde cam, profil ve açılım tercihleri ısı yalıtımı ve ses yalıtımı beklentisine göre seçilir. Mevcut doğramalarda PVC pencere ayarı veya Pimapen tamiri gerekiyorsa önce sorunun kaynağı incelenir.",
    uses: "Konut ve iş yerlerinde pencere, balkon kapısı ve dışa açılan kapı açıklıklarına göre çözüm planlanabilir.",
    installation: "Yerinde ölçü sonrası uygun sistem hazırlanır; montajda doğramanın hizası, açılıp kapanması ve bağlantıları kontrol edilir.",
    area: "Çorlu merkezli olarak Çerkezköy, Muratlı ve Tekirdağ çevresindeki talepler için iletişime geçebilirsiniz.",
    faq: [
      { question: "PVC pencere ayarı için pencere değişmesi gerekir mi?", answer: "Her zaman gerekmez. Önce açılma, kapanma ve mekanizma durumu kontrol edilir." },
      { question: "PVC kapı ve pencere ölçüsü nasıl belirlenir?", answer: "Montaj yapılacak açıklığın yerinde ölçülmesiyle uygun doğrama ve açılım planlanır." },
    ], related: ["/pimapen-tamiri", "/sineklik"],
  },
  {
    path: "/pimapen-tamiri", label: "Pimapen Tamiri", h1: "Çorlu Pimapen Tamiri ve PVC Pencere Ayarı",
    title: "Çorlu Pimapen Tamiri ve PVC Pencere Ayarı | AS YAPI",
    description: "Çorlu Pimapen tamiri ve PVC pencere ayarı için pencere kolu, menteşe, kilit ve açılma kapanma sorunlarını inceleyelim. Bakım ve onarım için arayın.",
    intro: "Çorlu Pimapen tamiri taleplerinde pencerenin zor açılması, tam kapanmaması veya kol ve kilit sorunları gibi belirtileri değerlendiriyoruz.",
    details: "PVC pencere ayarı, menteşe, pencere kolu ve kilit mekanizması kontrolleri açılma/kapanma sorunlarının kaynağını belirlemeye yardımcı olur. Gerekli bakım ve onarım işlemleri mevcut doğramanın durumuna göre planlanır; her sorunda pencereyi değiştirmek gerekmez.",
    uses: "Konut ve iş yerlerindeki PVC pencere ve kapılarda zamanla oluşan kullanım ve mekanizma sorunları için değerlendirme yapılabilir.",
    installation: "Önce pencerenin açılımı ve donanımı kontrol edilir; uygun ayar veya onarım yapıldıktan sonra hareketi tekrar denenir.",
    area: "Çorlu merkezli bakım taleplerinde Ergene, Çerkezköy ve Tekirdağ çevresinden bizi arayabilirsiniz.",
    faq: [
      { question: "Pencere kolu zor dönüyorsa ne yapılmalı?", answer: "Kolu zorlamadan önce kilit ve menteşe mekanizmasının kontrol edilmesi gerekir. Sorunu anlatmak için bizi arayabilirsiniz." },
      { question: "Kapanmayan PVC pencereye ayar yapılabilir mi?", answer: "Sorunun kaynağına bağlıdır; menteşe, kanat ve kilit kontrolünden sonra uygun işlem belirlenir." },
    ], related: ["/pvc-kapi-pencere", "/sineklik"],
  },
  {
    path: "/cam-kapi", label: "Cam Kapı", h1: "Çorlu Cam Kapı Sistemleri",
    title: "Çorlu Cam Kapı Sistemleri | AS YAPI",
    description: "Çorlu'da cam kapı sistemleri için ölçü, cam ve açılım seçimi, yerinde montaj. Konut ve iş yeri uygulamaları için ücretsiz keşif isteyin.",
    intro: "Çorlu cam kapı uygulamalarında girişin kullanım yoğunluğu ve alanın ölçüsü sistem seçiminde belirleyicidir.",
    details: "Temperli veya lamine cam seçenekleri ile sürgülü ve menteşeli açılım tipleri, mekânın ihtiyaçlarına göre değerlendirilir.",
    uses: "Ofis, dükkân ve konut geçişlerinde iç mekân düzeni ve giriş açıklığına göre uygulanabilir.",
    installation: "Yerinde ölçü ve bağlantı yüzeyi kontrolünden sonra kapı sistemi monte edilir; açılma ve kapanma hareketi denenir.",
    area: "Çorlu merkezli cam kapı talepleri için Tekirdağ ve Saray çevresinden iletişime geçebilirsiniz.",
    faq: [{ question: "Cam kapı için hangi açılım uygundur?", answer: "Geçiş alanına ve kullanım sıklığına göre sürgülü veya menteşeli seçenekler değerlendirilebilir." }],
    related: ["/aluminyum-sistemleri", "/dusakabin"],
  },
  {
    path: "/aluminyum-sistemleri", label: "Alüminyum Sistemleri", h1: "Çorlu Alüminyum Sistemleri",
    title: "Çorlu Alüminyum Kapı ve Pencere Sistemleri | AS YAPI",
    description: "Çorlu alüminyum sistemleri için kapı, pencere ve cephe uygulamalarında ölçü ve montaj. Tekirdağ çevresi için ücretsiz keşif ve teklif alın.",
    intro: "Çorlu alüminyum sistemleri uygulamalarında doğramanın kullanılacağı alanın ölçüsü ve açılım ihtiyacı esas alınır.",
    details: "Alüminyum pencere, kapı ve cephe sistemlerinde profil ve cam tercihleri projenin koşullarına göre belirlenir.",
    uses: "Konut ve ticari alanlardaki kapı, pencere ve cephe açıklıkları için değerlendirilebilir.",
    installation: "Yerinde ölçüm sonrası hazırlanan sistemin montajında bağlantılar, açıklık uyumu ve hareketli parçalar kontrol edilir.",
    area: "Çorlu merkezli olarak Tekirdağ, Kapaklı ve çevresindeki alüminyum uygulamaları için görüşebilirsiniz.",
    faq: [{ question: "Alüminyum pencere için yerinde ölçü alıyor musunuz?", answer: "Evet, açıklığın ve uygulama alanının ölçüsü keşifte değerlendirilebilir." }],
    related: ["/cam-kapi", "/kupeste"],
  },
  {
    path: "/kupeste", label: "Küpeşte", h1: "Çorlu Küpeşte Sistemleri",
    title: "Çorlu Küpeşte ve Korkuluk Sistemleri | AS YAPI",
    description: "Çorlu'da balkon, merdiven ve teraslar için küpeşte sistemleri. Alüminyum, paslanmaz çelik ve cam seçeneklerinde ölçü ve montaj için arayın.",
    intro: "Çorlu küpeşte sistemleri balkon, merdiven ve teraslarda alanın ölçüsüne ve kullanımına göre planlanır.",
    details: "Küpeşte ve korkuluk seçeneklerinde paslanmaz çelik, alüminyum ve camlı uygulamalar değerlendirilebilir; seçim montaj yüzeyine ve kullanım alanına göre yapılır.",
    uses: "Balkon kenarları, merdiven boşlukları ve teras çevrelerinde uygulanabilir.",
    installation: "Ölçü ve sabitleme yüzeyi yerinde incelenir; sistem yerleştirildikten sonra bağlantılar kontrol edilir.",
    area: "Çorlu merkezli olarak Tekirdağ, Şarköy ve çevresindeki küpeşte talepleriniz için iletişime geçebilirsiniz.",
    faq: [{ question: "Küpeşte için hangi malzemeler kullanılabilir?", answer: "Uygulama alanına göre paslanmaz çelik, alüminyum veya camlı seçenekler değerlendirilebilir." }],
    related: ["/aluminyum-sistemleri", "/cam-balkon"],
  },
  {
    path: "/celik-kapi", label: "Çelik Kapı", h1: "Çorlu Çelik Kapı Sistemleri",
    title: "Çorlu Çelik Kapı Sistemleri | AS YAPI",
    description: "Çorlu'da çelik kapı ihtiyacınız için mevcut kapı açıklığını ve uygulama koşullarını değerlendirelim. Ölçü, montaj ve teklif için AS YAPI'yı arayın.",
    intro: "Çorlu çelik kapı ihtiyaçlarında giriş açıklığının ölçüsü ve mevcut kasa koşulları değerlendirilerek uygun uygulama planlanır.",
    details: "Kapı seçimi yapılırken girişin kullanım şekli, açılım yönü ve montaj alanı dikkate alınır. Ürün ve uygulama seçenekleri için yerinde görüşmek en doğru yoldur.",
    uses: "Konut ve iş yeri girişlerinde mevcut açıklığa uygun kapı çözümü değerlendirilebilir.",
    installation: "Keşifte açıklık ölçülür ve kasa yüzeyi incelenir. Montaj sonrasında kapının açılıp kapanması ve kilit hareketi kontrol edilir.",
    area: "Çorlu merkezli olarak Tekirdağ ve çevre ilçelerdeki talepler için bizi arayabilirsiniz.",
    faq: [{ question: "Çelik kapı için ölçü gerekiyor mu?", answer: "Evet, kapı açıklığı ve mevcut kasa yerinde incelenerek uygun çözüm belirlenir." }],
    related: ["/pvc-kapi-pencere", "/cam-kapi"],
  },
];

export function getPage(path: string) {
  return pages.find((page) => page.path === path.replace(/\/$/, ""));
}

export function structuredData(page: Page | typeof home) {
  const url = `${SITE}${page.path === "/" ? "/" : page.path}`;
  const business = {
    "@context": "https://schema.org", "@type": ["LocalBusiness", "Organization"], "@id": `${SITE}/#business`,
    name: BUSINESS, url: `${SITE}/`, telephone: ["+905322713059", "+905323860057"], email: "55asyapi@gmail.com",
    address: { "@type": "PostalAddress", streetAddress: "Reşadiye Mah. Fevzi Çakmak Cad. Avcı Apt. No:71/7", addressLocality: "Çorlu", addressRegion: "Tekirdağ", addressCountry: "TR" },
    openingHoursSpecification: { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], opens: "07:00", closes: "22:00" },
    areaServed: ["Çorlu", "Tekirdağ", "Trakya"],
  };
  const faq = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: page.faq.map(({ question, answer }) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) };
  const graph: object[] = [business, faq, { "@context": "https://schema.org", "@type": "WebSite", name: BUSINESS, url: `${SITE}/` }];
  if ("h1" in page) graph.push(
    { "@context": "https://schema.org", "@type": "Service", name: page.h1, description: page.description, url, provider: { "@id": `${SITE}/#business` }, areaServed: { "@type": "City", name: "Çorlu" } },
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: `${SITE}/` },
      { "@type": "ListItem", position: 2, name: page.label, item: url },
    ] },
  );
  return graph;
}
