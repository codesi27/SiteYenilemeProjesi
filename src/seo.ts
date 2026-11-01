export const SITE = "https://www.asyapii.com";
export const BUSINESS = "AS YAPI PVC & Cam Balkon Sistemleri";

export type Page = {
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

export type Article = {
  path: string;
  label: string;
  h1: string;
  title: string;
  description: string;
  intro: string;
  sections: { heading: string; body: string; points?: string[] }[];
  related: string[];
};

export const home = {
  path: "/",
  title: "Çorlu Cam Balkon, Duşakabin, Sineklik ve PVC Sistemleri | AS YAPI",
  description: "Çorlu'da cam balkon, PVC kapı pencere, duşakabin ve sineklik çözümleri. Ölçü, montaj ve ücretsiz keşif için iletişime geçin. Tekirdağ ve çevresine hizmet.",
  faq: [
    { question: "Çorlu'da cam balkon için keşif yapıyor musunuz?", answer: "Evet, Çorlu'da ölçü ve uygulama için ücretsiz keşif talep edebilirsiniz." },
    { question: "Pimapen tamiri ve PVC pencere ayarı yapıyor musunuz?", answer: "Evet, PVC pencere ve kapılarda ayar, bakım ve onarım için bize ulaşabilirsiniz." },
    { question: "Çorlu dışında hizmet veriyor musunuz?", answer: "Çorlu merkezli olarak Tekirdağ çevresindeki talepleri değerlendiriyoruz. Konumunuza hizmet durumunu netleştirmek için bizi arayın." },
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
    area: "Çorlu cam balkon sistemleri için merkezimiz Çorlu'dadır. Tekirdağ çevresindeki taleplerde konumunuza hizmet durumunu netleştirmek için bizimle görüşebilirsiniz.",
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
    area: "Çorlu merkezli olarak Tekirdağ çevresindeki duşakabin taleplerinde konumunuza hizmet durumunu öğrenmek için görüşebilirsiniz.",
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
    area: "Çorlu merkezli sineklik taleplerinde Tekirdağ çevresindeki konumunuz için iletişime geçebilirsiniz.",
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
    area: "Çorlu merkezli PVC kapı ve pencere uygulamalarında Tekirdağ çevresindeki konumunuz için iletişime geçebilirsiniz.",
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
    area: "Çorlu merkezli bakım taleplerinde Tekirdağ çevresindeki konumunuza hizmet durumunu öğrenmek için bizi arayabilirsiniz.",
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
    area: "Çorlu merkezli cam kapı taleplerinde Tekirdağ çevresindeki konumunuz için iletişime geçebilirsiniz.",
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
    area: "Çorlu merkezli alüminyum uygulamalarında Tekirdağ çevresindeki konumunuz için görüşebilirsiniz.",
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
    area: "Çorlu merkezli küpeşte uygulamalarında Tekirdağ çevresindeki konumunuz için iletişime geçebilirsiniz.",
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

export const articles: Article[] = [
  {
    path: "/rehber/corlu-cam-balkon-yaptirirken",
    label: "Çorlu'da Cam Balkon Yaptırırken Nelere Dikkat Edilmeli?",
    h1: "Çorlu'da Cam Balkon Yaptırırken Nelere Dikkat Edilmeli?",
    title: "Çorlu'da Cam Balkon Yaptırırken Nelere Dikkat Edilmeli? | AS YAPI",
    description: "Çorlu'da cam balkon yaptırmadan önce ölçü, sistem türü, cam ve profil seçimi ile montaj detaylarında nelere dikkat etmeniz gerektiğini öğrenin.",
    intro: "Cam balkon yalnızca görünümle seçilmemelidir. Balkonun cephesi, rüzgâr alma durumu, kullanım amacı ve açılmasını istediğiniz alan doğru sistem kararını doğrudan etkiler.",
    sections: [
      { heading: "Önce kullanım amacını belirleyin", body: "Balkonu dört mevsim kullanmak, rüzgârı azaltmak veya yalnızca yağıştan korunmak farklı sistem ve cam tercihleri gerektirebilir. Keşif sırasında beklentinizi açıkça paylaşın." },
      { heading: "Ölçü ve montaj yüzeyi neden önemlidir?", body: "Her balkonun açıklığı ve zemini farklıdır. Yerinde ölçüm; rayların hizalı çalışması, panellerin rahat hareket etmesi ve sistemin mevcut yapıya uygun sabitlenmesi için gereklidir." },
      { heading: "Teklifleri karşılaştırırken bakılacaklar", body: "Yalnızca toplam fiyata değil, teklif edilen sistem tipine, cam ve profil seçimine, açılım düzenine ve montaj kapsamına bakın.", points: ["Sistemin katlanır, sürgülü, sabit veya giyotin olması", "Cam ve profil özelliklerinin açıkça belirtilmesi", "Ölçü, üretim ve montaj kapsamının net olması"] },
    ],
    related: ["/cam-balkon", "/aluminyum-sistemleri"],
  },
  {
    path: "/rehber/cam-balkon-avantajlari",
    label: "Cam Balkon Sistemlerinin Avantajları Nelerdir?",
    h1: "Cam Balkon Sistemlerinin Avantajları Nelerdir?",
    title: "Cam Balkon Sistemlerinin Avantajları Nelerdir? | AS YAPI Çorlu",
    description: "Cam balkon sistemlerinin kullanım, koruma ve mekân düzeni açısından avantajlarını; doğru sistem seçiminin önemini AS YAPI rehberinde okuyun.",
    intro: "Doğru planlanan bir cam balkon, açık alanın kullanım süresini uzatabilir ve balkonu rüzgâr, toz ile yağışa karşı daha kontrollü bir alana dönüştürebilir.",
    sections: [
      { heading: "Balkonu daha kullanışlı hâle getirir", body: "Cam paneller dış ortam etkisini azaltırken gün ışığını kesmeden balkonun kullanımını destekler. Açılabilir sistemler uygun havalarda balkonun açık kullanımını da korur." },
      { heading: "Temizlik ve düzen avantajı", body: "Dışarıdan gelen toz ve yaprak miktarının azalmasına yardımcı olur. Ray ve hareketli parçaların düzenli temizlenmesi ise sistemin rahat çalışması için önemlidir." },
      { heading: "Her balkon için aynı sistem uygun değildir", body: "Katlanır ve sürgülü sistemlerin açılım biçimleri farklıdır. Balkon geometrisi, cephe koşulları ve kullanım alışkanlığı yerinde değerlendirilmelidir." },
    ],
    related: ["/cam-balkon", "/sineklik"],
  },
  {
    path: "/rehber/corlu-dusakabin-secimi",
    label: "Çorlu'da Duşakabin Seçimi Nasıl Yapılır?",
    h1: "Çorlu'da Duşakabin Seçimi Nasıl Yapılır?",
    title: "Çorlu'da Duşakabin Seçimi Nasıl Yapılır? | AS YAPI",
    description: "Banyonuz için duşakabin seçerken ölçü, kapı açılımı, cam ve temizlik kolaylığı açısından dikkat edilmesi gerekenleri öğrenin.",
    intro: "Duşakabin seçiminde banyonun büyüklüğü kadar giriş yönü, duş alanının şekli ve günlük kullanım alışkanlığı da önemlidir.",
    sections: [
      { heading: "Banyo ölçüsüne uygun açılım", body: "Dar alanlarda sürgülü veya katlanır seçenekler geçiş alanını koruyabilir. Daha geniş banyolarda sabit panel ya da menteşeli çözümler değerlendirilebilir." },
      { heading: "Zemin ve duvar kontrolü", body: "Ölçü alınırken duvarların, duş teknesinin veya zeminin durumu incelenmelidir. Bu kontrol profil hizası ve suyun duş alanında tutulması açısından önem taşır." },
      { heading: "Kullanım ve temizlik", body: "Kapının rahat hareket etmesi, erişilmesi zor yüzeylerin sınırlı olması ve camın düzenli temizlenebilmesi günlük kullanım konforunu artırır." },
    ],
    related: ["/dusakabin", "/cam-kapi"],
  },
  {
    path: "/rehber/pimapen-pencere-neden-kapanmaz",
    label: "Pimapen Pencere Neden Kapanmaz?",
    h1: "Pimapen Pencere Neden Kapanmaz?",
    title: "Pimapen Pencere Neden Kapanmaz? Çorlu Pencere Ayarı | AS YAPI",
    description: "PVC veya Pimapen pencereniz zor kapanıyorsa olası menteşe, kol, kilit ve kanat ayarı sorunlarını öğrenin; Çorlu'da destek alın.",
    intro: "Pencerenin zor kapanması her zaman tüm doğramanın değişmesini gerektirmez. Kanat ayarı, menteşe, kol veya kilit mekanizması kontrol edilmeden parçaları zorlamak sorunu büyütebilir.",
    sections: [
      { heading: "Yaygın kapanmama nedenleri", body: "Kanadın zamanla hizadan çıkması, kilit karşılıklarının ayarsız olması, kol mekanizmasının zorlanması veya menteşe problemleri kapanmayı etkileyebilir." },
      { heading: "Evde ne yapmamalısınız?", body: "Kolu zorlayarak çevirmeyin ve mekanizmaya rastgele müdahale etmeyin. Sorunun hangi noktada olduğunu gözlemleyip bakım talebinde bulunun." },
      { heading: "Ayar mı, parça değişimi mi?", body: "Doğru işlem ancak pencere yerinde incelendiğinde belirlenebilir. Bazı sorunlar ayarla giderilebilirken aşınmış donanım için uygun parça değişimi gerekebilir." },
    ],
    related: ["/pimapen-tamiri", "/pvc-kapi-pencere"],
  },
  {
    path: "/rehber/plise-sineklik-modelleri",
    label: "Plise Sineklik ve Diğer Sineklik Modelleri",
    h1: "Plise Sineklik ve Diğer Sineklik Modelleri",
    title: "Plise Sineklik ve Diğer Sineklik Modelleri | AS YAPI Çorlu",
    description: "Plise, rulo, sürgülü ve sabit sineklik modellerini; pencere ve kapınıza uygun sistemi seçerken dikkat edilecek noktaları karşılaştırın.",
    intro: "Sineklik seçimi açıklığın ölçüsüne, pencere veya kapının açılımına ve kullanım sıklığına göre yapılmalıdır. Tek bir model her alan için ideal değildir.",
    sections: [
      { heading: "Plise sineklik", body: "Kullanılmadığında yana toplanabilen yapısı sayesinde özellikle balkon kapıları ve sık kullanılan geçişlerde değerlendirilebilir." },
      { heading: "Sabit, rulo ve sürgülü seçenekler", body: "Sabit sineklik az kullanılan açıklıklarda sade bir çözüm sunar. Rulo ve sürgülü modellerin uygunluğu doğrama yapısı ve kullanılabilir montaj alanına bağlıdır." },
      { heading: "Özel ölçü neden gerekir?", body: "Çerçevenin açıklığa uyumu, rahat kullanım ve istenmeyen boşlukların önlenmesi için pencere ya da kapının yerinde ölçülmesi önemlidir." },
    ],
    related: ["/sineklik", "/pvc-kapi-pencere"],
  },
  {
    path: "/rehber/pvc-pencere-ayari-bakimi",
    label: "PVC Pencere Ayarı ve Bakımı",
    h1: "PVC Pencere Ayarı ve Bakımı",
    title: "PVC Pencere Ayarı ve Bakımı | AS YAPI Çorlu",
    description: "PVC pencere ve kapılarda ayar ihtiyacının belirtileri, doğru kullanım ve periyodik bakım hakkında pratik bilgiler.",
    intro: "PVC pencerenin rahat açılıp kapanması; kanat, menteşe, kol ve kilit mekanizmasının birlikte uyumlu çalışmasına bağlıdır.",
    sections: [
      { heading: "Ayar gerektiğini gösteren işaretler", body: "Kanadın kasaya sürtmesi, kolun zor dönmesi, pencerenin tam kapanmaması veya açılırken takılması kontrol gerektiğini gösterebilir." },
      { heading: "Günlük kullanımda dikkat edilecekler", body: "Kolu doğru konumda kullanın, kanadı sertçe kapatmayın ve hareketli parçaları zorlamayın. Ray ve yüzeyleri temiz tutmak biriken kirin hareketi engellemesini azaltır." },
      { heading: "Ne zaman destek alınmalı?", body: "Sorun tekrar ediyorsa veya mekanizmada boşluk, kırık ya da belirgin zorlanma varsa pencereyi kullanmaya devam etmeden yerinde kontrol talep edin." },
    ],
    related: ["/pimapen-tamiri", "/pvc-kapi-pencere"],
  },
  {
    path: "/rehber/kupeste-sistemleri-kullanim-alanlari",
    label: "Küpeşte Sistemleri ve Kullanım Alanları",
    h1: "Küpeşte Sistemleri ve Kullanım Alanları",
    title: "Küpeşte Sistemleri ve Kullanım Alanları | AS YAPI Çorlu",
    description: "Balkon, merdiven ve teraslarda kullanılan cam, alüminyum ve paslanmaz küpeşte seçenekleri hakkında bilgi alın.",
    intro: "Küpeşte ve korkuluk sistemleri kullanım alanına, montaj yüzeyine ve mimari görünüme göre planlanır. Malzeme seçimi kadar ölçü ve bağlantı detayları da önemlidir.",
    sections: [
      { heading: "Nerelerde kullanılır?", body: "Balkon kenarları, iç ve dış merdivenler, teras çevreleri ile kot farkı bulunan geçişlerde alanın koşullarına uygun çözümler değerlendirilebilir." },
      { heading: "Malzeme seçenekleri", body: "Paslanmaz çelik, alüminyum ve camlı uygulamalar farklı görünüm ve bakım özellikleri sunar. Seçim yapının mevcut detaylarıyla birlikte düşünülmelidir." },
      { heading: "Keşifte neler incelenir?", body: "Uygulama uzunluğu, köşeler, zemin veya duvar bağlantısı ve alanın kullanım biçimi yerinde incelenerek sistem planlanır." },
    ],
    related: ["/kupeste", "/aluminyum-sistemleri"],
  },
];

export function getPage(path: string) {
  return pages.find((page) => page.path === path.replace(/\/$/, ""));
}

export function getArticle(path: string) {
  return articles.find((article) => article.path === path.replace(/\/$/, ""));
}

export function structuredData(page: Page | Article | typeof home) {
  const url = `${SITE}${page.path === "/" ? "/" : page.path}`;
  const business = {
    "@context": "https://schema.org", "@type": ["HomeAndConstructionBusiness", "LocalBusiness"], "@id": `${SITE}/#business`,
    name: BUSINESS, url: `${SITE}/`, telephone: ["+905322713059", "+905323860057"], email: "55asyapi@gmail.com",
    image: `${SITE}/images/uygulamalar/corlu-cam-balkon-surgulu-sistem.webp`,
    address: { "@type": "PostalAddress", streetAddress: "Reşadiye Mah. Fevzi Çakmak Cad. Avcı Apt. No:71/7", addressLocality: "Çorlu", addressRegion: "Tekirdağ", addressCountry: "TR" },
    openingHoursSpecification: { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], opens: "07:00", closes: "22:00" },
    areaServed: ["Çorlu", "Tekirdağ"],
  };
  const graph: object[] = [business, { "@context": "https://schema.org", "@type": "WebSite", name: BUSINESS, url: `${SITE}/`, inLanguage: "tr-TR" }];
  if ("faq" in page) graph.push({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: page.faq.map(({ question, answer }) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) });
  if ("details" in page) graph.push(
    { "@context": "https://schema.org", "@type": "Service", name: page.h1, description: page.description, url, provider: { "@id": `${SITE}/#business` }, areaServed: { "@type": "City", name: "Çorlu" } },
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: `${SITE}/` },
      { "@type": "ListItem", position: 2, name: page.label, item: url },
    ] },
  );
  if ("sections" in page) graph.push(
    { "@context": "https://schema.org", "@type": "Article", headline: page.h1, description: page.description, mainEntityOfPage: url, author: { "@id": `${SITE}/#business` }, publisher: { "@id": `${SITE}/#business` } },
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: `${SITE}/` },
      { "@type": "ListItem", position: 2, name: "Rehber", item: `${SITE}/#rehber` },
      { "@type": "ListItem", position: 3, name: page.label, item: url },
    ] },
  );
  return graph;
}
