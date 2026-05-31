const asset = (name) => `../assets/${name}`;
const whatsappNumber = "242060000000";

const seedServices = [
  ["Tresses africaines", "Tressage soigne avec finition premium.", 18000, "Services femme", "Afi.jpg"],
  ["Nattes collees", "Nattes precises pour look net et durable.", 15000, "Services femme", "Nattes collées.jfif"],
  ["Vanilles", "Twists elegants sur cheveux naturels.", 16000, "Services femme", "Vanille.jpg"],
  ["Tissages", "Pose naturelle, volume et finition invisible.", 25000, "Services femme", "Tiss.jpg"],
  ["Pose de perruque", "Installation ajustee avec rendu naturel.", 20000, "Services femme", "Perruque1.jpg"],
  ["Brushing", "Mise en forme lisse et lumineuse.", 12000, "Services femme", "Brosh.jpg"],
  ["Lissage", "Lissage soyeux avec protection capillaire.", 25000, "Services femme", "Lis.jpg"],
  ["Defrisage", "Texture maitrisee et soin protecteur.", 15000, "Services femme", "Defri.jpg"],
  ["Coloration", "Couleur profonde et conseil de nuance.", 22000, "Services femme", "Orange.jpg"],
  ["Balayage", "Reflets lumineux et dimensions naturelles.", 30000, "Services femme", "Perruque5.jpg"],
  ["Ombre hair", "Degrade couleur moderne et doux.", 32000, "Services femme", "Doux.jpg"],
  ["Chignon", "Chignon chic pour sortie ou ceremonie.", 18000, "Services femme", "Chignon.jpg"],
  ["Coiffure mariage", "Creation ceremonie avec finition luxe.", 45000, "Services femme", "Wedding.jpg"],
  ["Coupe femme moderne", "Coupe structuree selon le visage.", 12000, "Services femme", "Coupe.jpg"],
  ["Boucles", "Boucles definies, souples et brillantes.", 15000, "Services femme", "boucle.jpg"],
  ["Silk press", "Effet soie sur cheveux naturels.", 26000, "Services femme", "slik.jpg"],
  ["Coiffure afro", "Volume, definition et signature afro.", 16000, "Services femme", "AFRO.jpg"],
  ["Coiffure evenementielle", "Style photo-ready pour evenement.", 28000, "Services femme", "Perruque3.jpg"],
  ["Soin hydratant", "Hydratation intense et brillance.", 10000, "Soins femme", "Peau.jpg"],
  ["Soin keratine", "Renforcement et discipline de la fibre.", 25000, "Soins femme", "Keta.jpg"],
  ["Botox capillaire", "Reparation, souplesse et eclat.", 30000, "Soins femme", "Botox1.jpg"],
  ["Soin cheveux abimes", "Routine reparatrice ciblee.", 18000, "Soins femme", "Chute.jpg"],
  ["Soin anti-chute", "Protocole fortifiant du cuir chevelu.", 18000, "Soins femme", "SC.jpg"],
  ["Massage capillaire", "Detente et stimulation du cuir chevelu.", 9000, "Soins femme", "Mas.jpg"],
  ["Spa cheveux", "Experience soin complete et relaxante.", 22000, "Soins femme", "SPA.jpg"],
  ["Traitement cheveux naturels", "Nutrition adaptee aux cheveux naturels.", 20000, "Soins femme", "Nature.jpg"],
  ["Soin nourrissant", "Masque profond et protection.", 12000, "Soins femme", "Masque.jpg"],
  ["Soin cheveux colores", "Protection couleur et eclat durable.", 14000, "Soins femme", "color.jpg"],
  ["Coupe classique", "Coupe propre et intemporelle.", 6000, "Services homme", "Homme1.jpg"],
  ["Degrade americain", "Degrade fondu, net et moderne.", 8000, "Services homme", "dégrader.png"],
  ["Coupe moderne", "Style actuel adapte au visage.", 8000, "Services homme", "Homme2.jpg"],
  ["Coupe VIP", "Diagnostic, coupe, shampoing et finition.", 15000, "Services homme", "Homme3.jpg"],
  ["Rasage", "Rasage precis avec serviette chaude.", 5000, "Services homme", "Homme4.jpg"],
  ["Taille de barbe", "Barbe structuree et contours propres.", 5000, "Services homme", "Barbe.jpg"],
  ["Contours", "Lignes nettes pour finition impeccable.", 3000, "Services homme", "Homme6.jpg"],
  ["Locks homme", "Depart, entretien et finition locks.", 18000, "Services homme", "Men1.jpg"],
  ["Twist", "Twist homme propre et durable.", 12000, "Services homme", "Men.jpg"],
  ["Waves", "Routine waves avec finition brillante.", 10000, "Services homme", "Wave.jpg"],
  ["Coloration homme", "Couleur masculine nuancee.", 15000, "Services homme", "Teinture.jpg"],
  ["Shampooing homme", "Lavage relaxant et soin leger.", 4000, "Services homme", "Champoing.jpg"],
  ["Coupe enfant", "Coupe douce et soignee.", 5000, "Services homme", "Fillette1.jpg"],
  ["Soin barbe", "Soin profond pour barbe douce.", 8000, "Soins homme", "Soin.jpg"],
  ["Hydratation barbe", "Hydratation et parfum subtil.", 6000, "Soins homme", "Hydre.jpg"],
  ["Soin capillaire homme", "Soin cuir chevelu et fibre.", 10000, "Soins homme", "Cap.jpg"],
  ["Massage cuir chevelu", "Massage relaxant et stimulant.", 7000, "Soins homme", "Massage.jpg"],
  ["Traitement anti-pelliculaire", "Purification et confort du cuir chevelu.", 12000, "Soins homme", "Pellicule.jpg"],
  ["Traitement anti-chute homme", "Programme fortifiant homme.", 15000, "Soins homme", "Cheveux.jpg"],
  ["Manucure simple", "Nettoyage, forme et finition.", 6000, "Manucure", "Mani.jpg"],
  ["Manucure luxe", "Soin complet mains et ongles.", 12000, "Manucure", "Manicure2.jpg"],
  ["Pose gel", "Pose gel elegante et durable.", 15000, "Manucure", "gel.jpg"],
  ["Pose capsules", "Longueur et forme sur mesure.", 18000, "Manucure", "Capsule.jpg"],
  ["Vernis simple", "Couleur rapide et propre.", 4000, "Manucure", "Manicure5.jpg"],
  ["Vernis semi-permanent", "Brillance longue tenue.", 9000, "Manucure", "Manicure6.jpg"],
  ["Nail art", "Details artistiques personnalises.", 10000, "Manucure", "Manicure2.jpg"],
  ["Ongles acryliques", "Structure solide et finition premium.", 20000, "Manucure", "Manicure3.jpg"],
  ["French manucure", "French nette, chic et moderne.", 10000, "Manucure", "Manicure1.jpg"],
  ["Reparation ongles", "Correction rapide et invisible.", 3000, "Manucure", "Ongles.jpg"],
  ["Pedicure simple", "Soin pieds essentiel.", 7000, "Pedicure", "Pedicure1.jpg"],
  ["Pedicure spa", "Bain, soin et relaxation.", 15000, "Pedicure", "Pedicure2.jpg"],
  ["Soin des pieds", "Confort, douceur et proprete.", 10000, "Pedicure", "Pedicure3.jpg"],
  ["Gommage pieds", "Exfoliation et peau lisse.", 8000, "Pedicure", "Pedicure4.jpg"],
  ["Massage pieds", "Moment relaxant et profond.", 8000, "Pedicure", "Pedicure5.jpg"],
  ["Vernis pieds", "Couleur elegante pour les pieds.", 4000, "Pedicure", "Pedicure6.jpg"],
  ["Traitement talons abimes", "Soin reparateur intensif.", 12000, "Pedicure", "Talon.jpg"],
  ["Maquillage simple", "Mise en beaute naturelle.", 10000, "Makeup", "Makeup1.jpg"],
  ["Maquillage professionnel", "Teint travaille et longue tenue.", 20000, "Makeup", "Makeup2.jpg"],
  ["Makeup mariage", "Look mariee premium et photo-ready.", 35000, "Makeup", "Mariage.jpg"],
  ["Makeup soiree", "Glamour intense pour sortie.", 18000, "Makeup", "Makeup4.jpg"],
  ["Makeup evenementiel", "Mise en beaute adaptee a l'evenement.", 22000, "Makeup", "Makeup5.jpg"],
  ["Makeup naturel", "Glow subtil et lumineux.", 15000, "Makeup", "glam.jpg"],
  ["Pose faux cils", "Regard intense et propre.", 7000, "Makeup", "cils.jpg"],
  ["Contouring", "Sculpture du visage et lumiere.", 8000, "Makeup", "Contour.jpg"],
  ["Glam makeup", "Look glamour haute intensite.", 25000, "Makeup", "Look.png"],
  ["Retouche maquillage", "Retouche rapide avant shooting ou sortie.", 6000, "Makeup", "Retouche.jpg"]
].map((item, index) => ({
  id: crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${index}`,
  name: item[0],
  description: item[1],
  price: item[2],
  category: item[3],
  image: asset(item[4])
}));

let services = JSON.parse(localStorage.getItem("geokim-services") || "null") || seedServices;
let testimonialIndex = 0;

const qs = (selector) => document.querySelector(selector);
const qsa = (selector) => [...document.querySelectorAll(selector)];
const formatPrice = (price) => `${Number(price).toLocaleString("fr-FR")} FCFA`;

const testimonials = [
  { name: "Prisca M.", text: "Le silk press etait impeccable. Accueil doux, salon magnifique, resultat tres premium.", img: asset("Perruque2.jpg") },
  { name: "Joachim K.", text: "Degrade americain parfait, contours propres. On sent le niveau barber shop haut de gamme.", img: asset("Homme5.jpg") },
  { name: "Mireille B.", text: "Makeup mariage sublime et tenue incroyable. Toute l'equipe a ete professionnelle.", img: asset("Makeup3.jpg") }
];

function saveServices() {
  localStorage.setItem("geokim-services", JSON.stringify(services));
}

function categories() {
  return ["Toutes", ...new Set(services.map((service) => service.category))];
}

function populateFilters() {
  const categoryFilter = qs("#categoryFilter");
  const current = categoryFilter.value || "Toutes";
  categoryFilter.innerHTML = categories().map((cat) => `<option value="${cat}">${cat}</option>`).join("");
  categoryFilter.value = categories().includes(current) ? current : "Toutes";

  const bookingService = qs("#bookingService");
  bookingService.innerHTML = services.map((service) => `<option value="${service.name}">${service.name} - ${formatPrice(service.price)}</option>`).join("");
}

function renderServices() {
  const grid = qs("#servicesGrid");
  const search = qs("#serviceSearch").value.toLowerCase().trim();
  const category = qs("#categoryFilter").value || "Toutes";
  const filtered = services.filter((service) => {
    const matchesSearch = [service.name, service.description, service.category].join(" ").toLowerCase().includes(search);
    const matchesCategory = category === "Toutes" || service.category === category;
    return matchesSearch && matchesCategory;
  });

  grid.innerHTML = filtered.map((service) => `
    <article class="service-card" data-aos="fade-up">
      <img src="${service.image}" alt="${service.name}">
      <div class="service-body">
        <span class="category-pill">${service.category}</span>
        <h3>${service.name}</h3>
        <p>${service.description}</p>
        <div class="service-meta"><span>${formatPrice(service.price)}</span><span><i class="fa-solid fa-star"></i> Premium</span></div>
        <a class="btn btn-primary" href="#reservation" data-book="${service.name}"><i class="fa-solid fa-calendar-check"></i> Reserver</a>
      </div>
    </article>
  `).join("");

  qsa("[data-book]").forEach((button) => {
    button.addEventListener("click", () => {
      qs("#bookingService").value = button.dataset.book;
    });
  });
}

function renderAdmin() {
  const body = qs("#adminTableBody");
  body.innerHTML = services.map((service) => `
    <tr>
      <td>${service.name}</td>
      <td>${service.category}</td>
      <td>${formatPrice(service.price)}</td>
      <td>
        <div class="table-actions">
          <button class="icon-btn" data-edit="${service.id}" aria-label="Modifier ${service.name}"><i class="fa-solid fa-pen"></i></button>
          <button class="icon-btn" data-delete="${service.id}" aria-label="Supprimer ${service.name}"><i class="fa-solid fa-trash"></i></button>
        </div>
      </td>
    </tr>
  `).join("");

  qsa("[data-edit]").forEach((button) => button.addEventListener("click", () => fillForm(button.dataset.edit)));
  qsa("[data-delete]").forEach((button) => button.addEventListener("click", () => deleteService(button.dataset.delete)));
}

function syncUI() {
  populateFilters();
  renderServices();
  renderAdmin();
}

function fillForm(id) {
  const service = services.find((item) => item.id === id);
  if (!service) return;
  qs("#serviceId").value = service.id;
  qs("#serviceName").value = service.name;
  qs("#serviceDescription").value = service.description;
  qs("#servicePrice").value = service.price;
  qs("#serviceCategory").value = service.category;
  qs("#serviceImage").value = service.image;
  qs("#serviceForm").scrollIntoView({ behavior: "smooth", block: "center" });
}

function deleteService(id) {
  services = services.filter((service) => service.id !== id);
  saveServices();
  syncUI();
}

function reservationMessage() {
  const name = qs("#bookingName").value || "";
  const service = qs("#bookingService").value || "";
  const date = qs("#bookingDate").value || "";
  const time = qs("#bookingTime").value || "";
  return `Bonjour GEOKIM-HAIR,\nJe souhaite reserver une prestation.\n\nNom : ${name}\nService : ${service}\nDate : ${date}\nHeure : ${time}\n\nMerci.`;
}

function openWhatsapp() {
  window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(reservationMessage())}`, "_blank");
}

function renderTestimonial() {
  const item = testimonials[testimonialIndex];
  qs("#testimonialCard").innerHTML = `
    <img src="${item.img}" alt="${item.name}">
    <h3>${item.name}</h3>
    <div class="stars">${'<i class="fa-solid fa-star"></i>'.repeat(5)}</div>
    <p>${item.text}</p>
  `;
}

function initGallery() {
  const lightbox = qs("#lightbox");
  const lightboxImg = qs("#lightbox img");
  qsa("#galleryGrid img").forEach((img) => {
    img.addEventListener("click", () => {
      lightboxImg.src = img.src;
      lightbox.classList.add("show");
    });
  });
  qs("#lightbox button").addEventListener("click", () => lightbox.classList.remove("show"));
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) lightbox.classList.remove("show");
  });
}

function initEvents() {
  qs("#menuToggle").addEventListener("click", () => qs("#nav").classList.toggle("open"));
  qsa(".nav a").forEach((link) => link.addEventListener("click", () => qs("#nav").classList.remove("open")));
  qs("#serviceSearch").addEventListener("input", renderServices);
  qs("#categoryFilter").addEventListener("change", renderServices);
  qs("#adminToggle").addEventListener("click", () => {
    const panel = qs("#admin");
    const isHidden = panel.hasAttribute("hidden");
    panel.toggleAttribute("hidden", !isHidden);
    qs("#adminToggle").classList.toggle("active", isHidden);
    qs("#adminToggle").setAttribute("aria-expanded", String(isHidden));
    if (isHidden) panel.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  qs("#serviceForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const id = qs("#serviceId").value || (crypto.randomUUID ? crypto.randomUUID() : Date.now().toString());
    const service = {
      id,
      name: qs("#serviceName").value.trim(),
      description: qs("#serviceDescription").value.trim(),
      price: Number(qs("#servicePrice").value),
      category: qs("#serviceCategory").value.trim(),
      image: qs("#serviceImage").value.trim()
    };
    const index = services.findIndex((item) => item.id === id);
    if (index >= 0) services[index] = service;
    else services.unshift(service);
    qs("#serviceForm").reset();
    qs("#serviceId").value = "";
    saveServices();
    syncUI();
  });

  qs("#resetServices").addEventListener("click", () => {
    services = seedServices;
    saveServices();
    syncUI();
  });

  qs("#bookingForm").addEventListener("submit", (event) => {
    event.preventDefault();
    qs("#successModal").classList.add("show");
  });
  qs("#closeModal").addEventListener("click", () => qs("#successModal").classList.remove("show"));
  qs("#bookingWhatsapp").addEventListener("click", openWhatsapp);
  qs("#floatingWhatsapp").addEventListener("click", (event) => {
    event.preventDefault();
    openWhatsapp();
  });

  qs("#prevTestimonial").addEventListener("click", () => {
    testimonialIndex = (testimonialIndex - 1 + testimonials.length) % testimonials.length;
    renderTestimonial();
  });
  qs("#nextTestimonial").addEventListener("click", () => {
    testimonialIndex = (testimonialIndex + 1) % testimonials.length;
    renderTestimonial();
  });

  qs("#toTop").addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  window.addEventListener("scroll", () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    qs("#scrollProgress").style.width = `${(window.scrollY / max) * 100}%`;
    qs("#toTop").classList.toggle("show", window.scrollY > 700);
    qs("#siteHeader").classList.toggle("scrolled", window.scrollY > 80);
  });
}

window.addEventListener("load", () => {
  setTimeout(() => qs("#loader").classList.add("hide"), 550);
});

document.addEventListener("DOMContentLoaded", () => {
  if (window.AOS) AOS.init({ duration: 850, once: true, offset: 80 });
  syncUI();
  renderTestimonial();
  initGallery();
  initEvents();
});
