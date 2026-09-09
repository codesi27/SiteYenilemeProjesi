import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "Ana Sayfa", href: "#hero" },
  { label: "Hizmetler", href: "#hizmetler" },
  { label: "Hakkımızda", href: "#hakkimizda" },
  { label: "Referanslar", href: "#referanslar" },
  { label: "İletişim", href: "#iletisim" },
];

const PHONES = [
  { label: "Ana Hat", number: "0532 271 30 59", tel: "+905322713059", wa: "905322713059" },
  { label: "WhatsApp / Yedek", number: "0532 386 00 57", tel: "+905323860057", wa: "905323860057" },
];

const SERVICES = [
  {
    title: "Alüminyum Sistemler",
    desc: "Pencere, kapı, cephe ve her türlü alüminyum profil sistemi. Yüksek kaliteli alüminyum profil ve aksesuarlarla uzun ömürlü çözümler.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" stroke="currentColor" strokeWidth="2">
        <rect x="4" y="4" width="40" height="40" rx="2" />
        <line x1="4" y1="16" x2="44" y2="16" />
        <line x1="4" y1="32" x2="44" y2="32" />
        <line x1="16" y1="4" x2="16" y2="44" />
        <line x1="32" y1="4" x2="32" y2="44" />
      </svg>
    ),
  },
  {
    title: "Kapı & Pencere Sistemleri",
    desc: "PVC ve alüminyum kapı-pencere sistemleri, cam kapılar, sürgülü ve katlanır kapılar. Konut, ofis ve işyerlerine özel ölçü üretim.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" stroke="currentColor" strokeWidth="2">
        <rect x="6" y="4" width="36" height="40" rx="2" />
        <line x1="6" y1="24" x2="42" y2="24" />
        <rect x="10" y="8" width="12" height="12" rx="1" />
        <rect x="26" y="8" width="12" height="12" rx="1" />
        <rect x="14" y="28" width="20" height="12" rx="1" />
        <circle cx="24" cy="34" r="1.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    title: "Cam Kapı Sistemleri",
    desc: "Ofis, dükkan ve konut için temperli ve lamine camlı kapı sistemleri. Sürgülü, menteşeli ve döner kapı çeşitleri mevcut.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" stroke="currentColor" strokeWidth="2">
        <rect x="10" y="4" width="28" height="40" rx="2" />
        <line x1="10" y1="24" x2="38" y2="24" />
        <circle cx="33" cy="24" r="2" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    title: "Cam Balkon",
    desc: "Giyotin, katlanır ve sabit cam balkon sistemleri. Isıcamlı seçeneklerle balkonunuzu dört mevsim kullanılabilir yaşam alanına dönüştürün.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" stroke="currentColor" strokeWidth="2">
        <rect x="6" y="8" width="36" height="32" rx="2" />
        <line x1="24" y1="8" x2="24" y2="40" />
        <line x1="6" y1="24" x2="42" y2="24" />
        <line x1="15" y1="8" x2="15" y2="24" />
        <line x1="33" y1="8" x2="33" y2="24" />
      </svg>
    ),
  },
  {
    title: "Küpeşte Sistemleri",
    desc: "Paslanmaz çelik, alüminyum ve cam küpeşte sistemleri. Balkon, merdiven ve teras korkulukları için estetik ve güvenli çözümler.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" stroke="currentColor" strokeWidth="2">
        <line x1="4" y1="12" x2="44" y2="12" strokeWidth="3" />
        <line x1="8" y1="12" x2="8" y2="40" />
        <line x1="16" y1="12" x2="16" y2="40" />
        <line x1="24" y1="12" x2="24" y2="40" />
        <line x1="32" y1="12" x2="32" y2="40" />
        <line x1="40" y1="12" x2="40" y2="40" />
        <line x1="4" y1="40" x2="44" y2="40" />
      </svg>
    ),
  },
  {
    title: "Duşakabin Sistemleri",
    desc: "Sabit, sürgülü ve katlanır duşakabin modelleri. Temperli cam ve krom/mat aksesuar seçenekleriyle banyonuza şıklık katın.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" stroke="currentColor" strokeWidth="2">
        <rect x="8" y="8" width="32" height="36" rx="1" />
        <line x1="24" y1="8" x2="24" y2="44" />
        <path d="M14 20 Q17 17 20 20" />
        <path d="M28 20 Q31 17 34 20" />
        <circle cx="18" cy="28" r="3" />
        <circle cx="30" cy="28" r="3" />
      </svg>
    ),
  },
  {
    title: "Sineklik Sistemleri",
    desc: "Plise, rulo, sürgülü ve sabit sineklik sistemleri. Her pencere ve kapı tipine uygun özel ölçü üretim ile böceklerden korunun.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" stroke="currentColor" strokeWidth="2">
        <rect x="6" y="6" width="36" height="36" rx="2" />
        <line x1="6" y1="14" x2="42" y2="14" />
        <line x1="6" y1="22" x2="42" y2="22" />
        <line x1="6" y1="30" x2="42" y2="30" />
        <line x1="6" y1="38" x2="42" y2="38" />
        <line x1="14" y1="6" x2="14" y2="42" />
        <line x1="22" y1="6" x2="22" y2="42" />
        <line x1="30" y1="6" x2="30" y2="42" />
        <line x1="38" y1="6" x2="38" y2="42" />
      </svg>
    ),
  },
];

const STATS = [
  { value: "35+", label: "Yıllık Deneyim" },
  { value: "2.500+", label: "Tamamlanan Proje" },
  { value: "98%", label: "Müşteri Memnuniyeti" },
  { value: "7/24", label: "Teknik Destek" },
];

const TESTIMONIALS = [
  {
    name: "Mehmet Yılmaz",
    location: "Kadıköy, İstanbul",
    text: "Cam balkon montajında çok titiz çalıştılar. İşçilik kalitesi ve kullanılan malzeme gayet iyi. Kesinlikle tavsiye ederim.",
    rating: 5,
  },
  {
    name: "Ayşe Kaya",
    location: "Beşiktaş, İstanbul",
    text: "Pergola sistemimizi AS YAPI kurdu. Hem ölçüm hem montaj çok hızlı ve temiz oldu. Fiyat-performans açısından mükemmel.",
    rating: 5,
  },
  {
    name: "Okan Demir",
    location: "Üsküdar, İstanbul",
    text: "Balkonumu cam balkon sistemine çevirdim. Kışın da rahatça kullanabiliyorum. Ekip çok profesyonel ve kibar davrandı.",
    rating: 5,
  },
];

const GALLERY = [
  {
    url: "https://images.unsplash.com/photo-1616877575565-6908da8619f5?w=600&h=400&fit=crop&auto=format",
    alt: "Modern cam balkon sistemi",
    label: "Cam Balkon",
  },
  {
    url: "https://images.unsplash.com/photo-1766087752966-b9a7b058b7da?w=600&h=400&fit=crop&auto=format",
    alt: "Motorlu pergola sistemi",
    label: "Pergola",
  },
  {
    url: "https://images.unsplash.com/photo-1775733924075-11e542629502?w=600&h=400&fit=crop&auto=format",
    alt: "Modern balkon görünümü",
    label: "Cam Balkon",
  },
  {
    url: "https://images.unsplash.com/photo-1494884113216-952a0c2c1a30?w=600&h=400&fit=crop&auto=format",
    alt: "Teras alanı",
    label: "Tente Sistemi",
  },
  {
    url: "https://images.unsplash.com/photo-1775733923991-e7223f9f44bc?w=600&h=400&fit=crop&auto=format",
    alt: "Dış mekan düzenlemesi",
    label: "Pergola",
  },
  {
    url: "https://images.unsplash.com/photo-1595039357995-905cad2933e3?w=600&h=400&fit=crop&auto=format",
    alt: "Modern bina cephesi",
    label: "Cephe Sistemi",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5 mb-3">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} viewBox="0 0 16 16" className="w-4 h-4 fill-[#e85d14]">
          <path d="M8 1l1.8 3.6L14 5.5l-3 2.9.7 4.1L8 10.4l-3.7 2.1.7-4.1L2 5.5l4.2-.9z" />
        </svg>
      ))}
    </div>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [formData, setFormData] = useState({ name: "", phone: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [activePhone, setActivePhone] = useState<number | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (activePhone === null) return;
    const close = (e: MouseEvent) => {
      if (!(e.target as Element).closest(".phone-popup")) setActivePhone(null);
    };
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, [activePhone]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`AS YAPI - Yeni Keşif Talebi: ${formData.name}`);
    const body = encodeURIComponent(
      `Ad Soyad: ${formData.name}\nTelefon: ${formData.phone}\nHizmet: ${formData.service || "Belirtilmedi"}\n\nMesaj:\n${formData.message || "-"}`
    );
    window.location.href = `mailto:55asyapi@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ name: "", phone: "", service: "", message: "" });
  };

  return (
    <div className="min-h-full bg-[#0f1117] text-[#f0f0f0] font-[Outfit,sans-serif] overflow-x-hidden">

      {/* ─── NAVBAR ─── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-[#0f1117]/95 backdrop-blur-sm shadow-lg shadow-black/30" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-[#e85d14] flex items-center justify-center font-[Barlow_Condensed,sans-serif] font-900 text-white text-lg tracking-tight">
              AS
            </div>
            <div className="leading-none">
              <div className="font-[Barlow_Condensed,sans-serif] font-800 text-xl tracking-widest text-white">AS YAPI PVC & CAM</div>
              <div className="text-[10px] tracking-[0.2em] text-[#e85d14] uppercase">Trakya'nın Güvenilir Markası</div>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm tracking-widest uppercase text-[#c8cdd8] hover:text-[#e85d14] transition-colors duration-200 font-medium"
              >
                {link.label}
              </a>
            ))}
            <div className="relative phone-popup">
              <button
                onClick={() => setActivePhone(activePhone === 99 ? null : 99)}
                className="bg-[#e85d14] text-white text-sm font-semibold px-5 py-2.5 uppercase tracking-wider hover:bg-[#ff6b24] transition-colors duration-200 flex items-center gap-2"
              >
                <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Hemen Ara
              </button>
              {activePhone === 99 && (
                <div className="absolute right-0 top-full mt-2 w-60 bg-[#1a1f2e] border border-white/10 shadow-xl z-50 phone-popup">
                  {PHONES.map((p) => (
                    <div key={p.wa} className="p-3 border-b border-white/5 last:border-0">
                      <div className="text-[10px] text-[#8a94a8] uppercase tracking-widest mb-2">{p.label}</div>
                      <div className="flex gap-2">
                        <a href={`tel:${p.tel}`} className="flex-1 bg-[#262c3e] text-white text-xs py-2 px-3 flex items-center justify-center gap-1.5 hover:bg-[#e85d14] transition-colors">
                          <svg viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5">
                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                          </svg>
                          Ara
                        </a>
                        <a href={`https://wa.me/${p.wa}?text=Merhaba%2C%20ücretsiz%20keşif%20hakkında%20bilgi%20almak%20istiyorum.`} target="_blank" rel="noreferrer" className="flex-1 bg-[#25d366]/20 text-[#25d366] text-xs py-2 px-3 flex items-center justify-center gap-1.5 hover:bg-[#25d366] hover:text-white transition-colors">
                          <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.553 4.103 1.522 5.827L.057 23.882l6.219-1.433A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.788 9.788 0 01-4.99-1.368l-.357-.212-3.696.852.88-3.574-.233-.369A9.818 9.818 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182S21.818 6.58 21.818 12 17.42 21.818 12 21.818z" />
                          </svg>
                          WhatsApp
                        </a>
                      </div>
                      <div className="text-white text-sm font-semibold mt-2">{p.number}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <button
            className="lg:hidden p-2 text-[#e85d14]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menü"
          >
            <div className={`w-6 h-0.5 bg-current transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
            <div className={`w-6 h-0.5 bg-current mt-1.5 transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`} />
            <div className={`w-6 h-0.5 bg-current mt-1.5 transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
          </button>
        </div>

        {menuOpen && (
          <div className="lg:hidden bg-[#1a1f2e] border-t border-white/10 px-6 py-4 flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm tracking-widest uppercase text-[#c8cdd8] hover:text-[#e85d14] transition-colors py-2 border-b border-white/5"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+905322713059"
              className="bg-[#e85d14] text-white text-sm font-semibold px-5 py-3 uppercase tracking-wider text-center mt-2"
            >
              Ücretsiz Keşif
            </a>
          </div>
        )}
      </nav>

      {/* ─── HERO ─── */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1616877575565-6908da8619f5?w=1600&h=900&fit=crop&auto=format')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f1117] via-[#0f1117]/80 to-[#0f1117]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f1117] via-transparent to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-0.5 bg-[#e85d14]" />
              <span className="text-[#e85d14] text-xs tracking-[0.3em] uppercase font-semibold">
                35+ Yıllık Tecrübe — Tekirdağ, Edirne, Kırklareli
              </span>
            </div>

            <h1
              className="font-[Barlow_Condensed,sans-serif] font-900 text-7xl md:text-8xl lg:text-9xl uppercase leading-none tracking-tight text-white mb-6"
              style={{ fontStyle: "italic" }}
            >
              YAPI
              <br />
              <span className="text-[#e85d14]">ÇÖZÜM</span>
              <br />
              MERKEZİ
            </h1>

            <p className="text-lg text-[#c8cdd8] max-w-xl leading-relaxed mb-10">
              Alüminyum, cam balkon, küpeşte, duşakabin ve sineklik sistemlerinde Trakya'nın lider markası.
              Ücretsiz keşif ve ölçüm hizmetimizden yararlanın.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#iletisim"
                className="bg-[#e85d14] text-white font-semibold px-8 py-4 uppercase tracking-wider text-sm hover:bg-[#ff6b24] transition-colors duration-200 text-center"
              >
                Ücretsiz Keşif İste
              </a>
              <a
                href="#hizmetler"
                className="border border-white/30 text-white font-semibold px-8 py-4 uppercase tracking-wider text-sm hover:border-[#e85d14] hover:text-[#e85d14] transition-colors duration-200 text-center"
              >
                Hizmetlerimiz
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <div className="w-0.5 h-8 bg-[#e85d14]/60" />
          <svg viewBox="0 0 20 20" fill="#e85d14" className="w-4 h-4 opacity-60">
            <path d="M10 14l-5-5h10z" />
          </svg>
        </div>
      </section>

      {/* ─── STATS BAR ─── */}
      <section className="bg-[#e85d14] py-6">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x divide-white/30">
            {STATS.map((s) => (
              <div key={s.label} className="text-center px-6">
                <div className="font-[Barlow_Condensed,sans-serif] font-900 text-4xl text-white">{s.value}</div>
                <div className="text-white/80 text-xs uppercase tracking-widest mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section id="hizmetler" className="py-28 bg-[#0f1117]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-0.5 bg-[#e85d14]" />
            <span className="text-[#e85d14] text-xs tracking-[0.3em] uppercase font-semibold">Ne Yapıyoruz</span>
          </div>
          <h2 className="font-[Barlow_Condensed,sans-serif] font-800 text-5xl md:text-6xl uppercase text-white mb-16">
            Hizmetlerimiz
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
            {SERVICES.map((s, i) => (
              <div
                key={s.title}
                className="bg-[#1a1f2e] p-8 group hover:bg-[#1e2435] transition-colors duration-300 flex flex-col gap-6"
              >
                <div className="text-[#e85d14] group-hover:scale-110 transition-transform duration-300 w-fit">
                  {s.icon}
                </div>
                <div>
                  <h3 className="font-[Barlow_Condensed,sans-serif] font-700 text-2xl uppercase text-white mb-3">
                    {s.title}
                  </h3>
                  <p className="text-[#8a94a8] text-sm leading-relaxed">{s.desc}</p>
                </div>
                <div className="mt-auto">
                  <div className="w-0 h-0.5 bg-[#e85d14] group-hover:w-full transition-all duration-400" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ABOUT ─── */}
      <section id="hakkimizda" className="py-28 bg-[#1a1f2e]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-[4/3] bg-[#262c3e] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1766087752966-b9a7b058b7da?w=800&h=600&fit=crop&auto=format"
                  alt="AS YAPI Pergola Uygulaması"
                  className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-[#e85d14] p-6 hidden md:block">
                <div className="font-[Barlow_Condensed,sans-serif] font-900 text-5xl text-white leading-none">35+</div>
                <div className="text-white/80 text-xs uppercase tracking-widest mt-1">Yıl Tecrübe</div>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-0.5 bg-[#e85d14]" />
                <span className="text-[#e85d14] text-xs tracking-[0.3em] uppercase font-semibold">Biz Kimiz</span>
              </div>
              <h2 className="font-[Barlow_Condensed,sans-serif] font-800 text-5xl md:text-6xl uppercase text-white mb-6">
                AS YAPI PVC & CAM<br />Hakkında
              </h2>
              <p className="text-[#8a94a8] leading-relaxed mb-6">
                35 yılı aşkın tecrübesiyle Trakya'nın güvenilir alüminyum ve cam sistemleri markası olan AS YAPI, Tekirdağ, Edirne ve Kırklareli'nde binlerce projeyi başarıyla tamamlamıştır.
              </p>
              <p className="text-[#8a94a8] leading-relaxed mb-10">
                Alüminyum sistemlerden cam balkona, küpeşteden duşakabine, sineklikten cam kapıya kadar geniş ürün yelpazemizle hizmetinizdeyiz. Her projede müşteri memnuniyetini ve uzun ömürlü kaliteyi ön planda tutuyoruz.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  "Ücretsiz Keşif & Ölçüm",
                  "Kendi Üretim Atölyesi",
                  "Profesyonel Montaj Ekibi",
                  "7/24 Teknik Destek",
                  "Garantili İşçilik",
                  "Rekabetçi Fiyatlar",
                ].map((f) => (
                  <div key={f} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-[#e85d14] rounded-full flex-shrink-0" />
                    <span className="text-sm text-[#c8cdd8]">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── GALLERY ─── */}
      <section id="referanslar" className="py-28 bg-[#0f1117]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-0.5 bg-[#e85d14]" />
            <span className="text-[#e85d14] text-xs tracking-[0.3em] uppercase font-semibold">Projelerimiz</span>
          </div>
          <h2 className="font-[Barlow_Condensed,sans-serif] font-800 text-5xl md:text-6xl uppercase text-white mb-16">
            Referans Galerisi
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-1">
            {GALLERY.map((item, i) => (
              <div key={i} className="relative aspect-[4/3] bg-[#1a1f2e] overflow-hidden group">
                <img
                  src={item.url}
                  alt={item.alt}
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="font-[Barlow_Condensed,sans-serif] font-700 text-white uppercase tracking-wider">
                    {item.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="py-28 bg-[#1a1f2e]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-0.5 bg-[#e85d14]" />
            <span className="text-[#e85d14] text-xs tracking-[0.3em] uppercase font-semibold">Müşteri Yorumları</span>
          </div>
          <h2 className="font-[Barlow_Condensed,sans-serif] font-800 text-5xl md:text-6xl uppercase text-white mb-16">
            Müşterilerimiz<br />Ne Diyor?
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="bg-[#0f1117] p-8 border border-white/5 hover:border-[#e85d14]/30 transition-colors duration-300">
                <StarRating count={t.rating} />
                <p className="text-[#8a94a8] text-sm leading-relaxed mb-6 italic">"{t.text}"</p>
                <div className="border-t border-white/5 pt-4">
                  <div className="font-semibold text-white text-sm">{t.name}</div>
                  <div className="text-[#e85d14] text-xs mt-0.5">{t.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA BAND ─── */}
      <section className="py-20 bg-[#e85d14] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="absolute font-[Barlow_Condensed,sans-serif] text-9xl font-900 uppercase text-white whitespace-nowrap"
              style={{ top: `${i * 80 - 20}px`, left: `${(i % 2) * -100}px`, letterSpacing: "0.3em" }}
            >
              AS YAPI PVC & CAM &nbsp; ÇORLU &nbsp; TEKİRDAĞ &nbsp;
            </div>
          ))}
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-[Barlow_Condensed,sans-serif] font-900 text-5xl md:text-6xl uppercase text-white mb-4">
            Ücretsiz Keşif Randevusu Alın
          </h2>
          <p className="text-white/80 mb-8 text-lg max-w-xl mx-auto">
            Uzman ekibimiz evinize gelsin, ölçüm yapsın ve size en uygun çözümü ücretsiz sunsun.
          </p>
          <a
            href="#iletisim"
            className="inline-block bg-white text-[#e85d14] font-bold px-10 py-4 uppercase tracking-wider text-sm hover:bg-[#0f1117] hover:text-white transition-colors duration-300"
          >
            Hemen Başvur
          </a>
        </div>
      </section>

      {/* ─── CONTACT ─── */}
      <section id="iletisim" className="py-28 bg-[#0f1117]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-0.5 bg-[#e85d14]" />
                <span className="text-[#e85d14] text-xs tracking-[0.3em] uppercase font-semibold">Bize Ulaşın</span>
              </div>
              <h2 className="font-[Barlow_Condensed,sans-serif] font-800 text-5xl md:text-6xl uppercase text-white mb-8">
                İletişim
              </h2>

              <div className="space-y-4 mb-10">
                {/* Phone cards with call + WhatsApp options */}
                {PHONES.map((p, idx) => (
                  <div key={p.wa} className="relative phone-popup">
                    <button
                      onClick={() => setActivePhone(activePhone === idx ? null : idx)}
                      className="w-full flex items-center gap-4 group text-left"
                    >
                      <div className="w-10 h-10 bg-[#e85d14]/15 flex items-center justify-center text-[#e85d14] flex-shrink-0 group-hover:bg-[#e85d14] group-hover:text-white transition-colors">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.59A2 2 0 012.18 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.15a16 16 0 006.94 6.94l1.41-1.41a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-xs text-[#8a94a8] uppercase tracking-widest mb-0.5">{p.label}</div>
                        <div className="text-white font-semibold">{p.number}</div>
                      </div>
                      <svg viewBox="0 0 20 20" fill="currentColor" className={`w-4 h-4 text-[#e85d14] ml-auto transition-transform ${activePhone === idx ? "rotate-180" : ""}`}>
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                    {activePhone === idx && (
                      <div className="mt-2 ml-14 flex gap-2 phone-popup">
                        <a
                          href={`tel:${p.tel}`}
                          className="flex-1 bg-[#262c3e] border border-white/10 text-white text-xs py-2.5 px-3 flex items-center justify-center gap-2 hover:bg-[#e85d14] hover:border-[#e85d14] transition-colors font-medium"
                        >
                          <svg viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5">
                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                          </svg>
                          Ara
                        </a>
                        <a
                          href={`https://wa.me/${p.wa}?text=Merhaba%2C%20ücretsiz%20keşif%20hakkında%20bilgi%20almak%20istiyorum.`}
                          target="_blank"
                          rel="noreferrer"
                          className="flex-1 bg-[#25d366]/10 border border-[#25d366]/30 text-[#25d366] text-xs py-2.5 px-3 flex items-center justify-center gap-2 hover:bg-[#25d366] hover:text-white transition-colors font-medium"
                        >
                          <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" /><path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.553 4.103 1.522 5.827L.057 23.882l6.219-1.433A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.788 9.788 0 01-4.99-1.368l-.357-.212-3.696.852.88-3.574-.233-.369A9.818 9.818 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182S21.818 6.58 21.818 12 17.42 21.818 12 21.818z" />
                          </svg>
                          WhatsApp
                        </a>
                      </div>
                    )}
                  </div>
                ))}

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#e85d14]/15 flex items-center justify-center text-[#e85d14] flex-shrink-0">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-[#8a94a8] uppercase tracking-widest mb-1">E-posta</div>
                    <a href="mailto:55asyapi@gmail.com" className="text-white font-medium hover:text-[#e85d14] transition-colors">55asyapi@gmail.com</a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#e85d14]/15 flex items-center justify-center text-[#e85d14] flex-shrink-0">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-[#8a94a8] uppercase tracking-widest mb-1">Adres</div>
                    <div className="text-white font-medium">Reşadiye Mah. Fevzi Çakmak Cad. Avcı Apt. No:71/7 Çorlu / Tekirdağ</div>
                  </div>
                </div>
              </div>

              <div className="border border-white/5 p-6 bg-[#1a1f2e]">
                <div className="text-xs text-[#e85d14] uppercase tracking-widest mb-2">Çalışma Saatleri</div>
                <div className="text-white font-medium">Her Gün — 7/24</div>
                <div className="text-[#8a94a8] text-sm">07:00 – 22:00</div>
              </div>
            </div>

            <div>
              {submitted ? (
                <div className="h-full flex items-center justify-center bg-[#1a1f2e] border border-[#e85d14]/30 p-12 text-center">
                  <div>
                    <div className="w-16 h-16 bg-[#e85d14] mx-auto mb-6 flex items-center justify-center">
                      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" className="w-8 h-8">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <h3 className="font-[Barlow_Condensed,sans-serif] font-700 text-3xl text-white uppercase mb-3">
                      Başvurunuz Alındı!
                    </h3>
                    <p className="text-[#8a94a8]">En kısa sürede sizinle iletişime geçeceğiz.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-[#1a1f2e] p-8 border border-white/5 space-y-5">
                  <h3 className="font-[Barlow_Condensed,sans-serif] font-700 text-2xl text-white uppercase mb-2">
                    Ücretsiz Keşif Formu
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs text-[#8a94a8] uppercase tracking-widest block mb-2">Ad Soyad *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-[#262c3e] border border-white/10 text-white px-4 py-3 text-sm focus:outline-none focus:border-[#e85d14] transition-colors"
                        placeholder="Adınız Soyadınız"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-[#8a94a8] uppercase tracking-widest block mb-2">Telefon *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[#262c3e] border border-white/10 text-white px-4 py-3 text-sm focus:outline-none focus:border-[#e85d14] transition-colors"
                        placeholder="05XX XXX XX XX"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs text-[#8a94a8] uppercase tracking-widest block mb-2">Hizmet</label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-[#262c3e] border border-white/10 text-white px-4 py-3 text-sm focus:outline-none focus:border-[#e85d14] transition-colors"
                    >
                      <option value="">Hizmet Seçin</option>
                      <option>Alüminyum Sistemler</option>
                      <option>Kapı & Pencere Sistemleri</option>
                      <option>Cam Balkon</option>
                      <option>Küpeşte Sistemleri</option>
                      <option>Duşakabin</option>
                      <option>Sineklik Sistemleri</option>
                      <option>Diğer</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs text-[#8a94a8] uppercase tracking-widest block mb-2">Mesaj</label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[#262c3e] border border-white/10 text-white px-4 py-3 text-sm focus:outline-none focus:border-[#e85d14] transition-colors resize-none"
                      placeholder="Projeniz hakkında kısaca bilgi verin..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#e85d14] text-white font-semibold py-4 uppercase tracking-wider text-sm hover:bg-[#ff6b24] transition-colors duration-200"
                  >
                    Keşif Randevusu Talep Et
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="bg-[#0a0d13] border-t border-white/5 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-10 mb-10">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-[#e85d14] flex items-center justify-center font-[Barlow_Condensed,sans-serif] font-900 text-white text-sm">
                  AS
                </div>
                <div>
                  <div className="font-[Barlow_Condensed,sans-serif] font-800 text-lg tracking-widest text-white">AS YAPI PVC & CAM</div>
                  <div className="text-[9px] tracking-[0.2em] text-[#e85d14] uppercase">Trakya'nın Güvenilir Markası</div>
                </div>
              </div>
              <p className="text-[#8a94a8] text-sm leading-relaxed">
                35 yılı aşkın deneyimimizle Trakya genelinde alüminyum, cam balkon, küpeşte, duşakabin ve sineklik sistemleri kurulumu yapıyoruz.
              </p>
            </div>

            <div>
              <div className="text-xs text-[#e85d14] uppercase tracking-widest mb-4">Hizmetler</div>
              <ul className="space-y-2">
                {["Alüminyum Sistemler", "Kapı & Pencere Sistemleri", "Cam Balkon", "Küpeşte Sistemleri", "Duşakabin", "Sineklik Sistemleri"].map((s) => (
                  <li key={s}>
                    <a href="#hizmetler" className="text-[#8a94a8] text-sm hover:text-white transition-colors">
                      {s}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="text-xs text-[#e85d14] uppercase tracking-widest mb-4">İletişim</div>
              <div className="space-y-2 text-[#8a94a8] text-sm">
                <a href="tel:+905322713059" className="block hover:text-white transition-colors">0532 271 30 59</a>
                <a href={`https://wa.me/905323860057`} target="_blank" rel="noreferrer" className="block hover:text-[#25d366] transition-colors">0532 386 00 57 (WhatsApp)</a>
                <a href="mailto:55asyapi@gmail.com" className="block hover:text-white transition-colors">55asyapi@gmail.com</a>
                <div>Çorlu / Tekirdağ</div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-[#8a94a8] text-xs">© 2026 AS YAPI PVC & CAM. Tüm hakları saklıdır.</div>
            <div className="text-[#8a94a8] text-xs">www.asyapii.com</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
