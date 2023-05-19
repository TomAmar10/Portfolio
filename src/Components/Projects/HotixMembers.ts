const getWhatsappHotix = (phone: string) => {
  return `http://wa.me/${phone}?text=${encodeURIComponent(
    'אהלן, אשמח לשמוע פרטים על פרויקט "Hotix"'
  )}`;
};

const hotixMembers = [
  {
    name: "Ran Asif",
    image: "assets/ranasif.jpg",
    role: "Co-Founder",
    linkedin: "https://www.linkedin.com/in/ran-asif/",
    phone: "+972549962082",
    whatsapp: getWhatsappHotix("+972549962082"),
  },
  {
    name: "Sapir Fisher",
    image: "assets/sapirfisher.jpg",
    role: "Co-Founder",
    linkedin: "https://www.linkedin.com/in/sapir-fisher-7a9559225/",
    phone: "+972526691055",
    whatsapp: getWhatsappHotix("+972526691055"),
  },
  {
    name: "Tom Amar",
    image: "assets/tomlogo2.png",
    role: "Fullstack Developer",
    linkedin: "https://www.linkedin.com/in/tom-amar-b2494a25a/",
    phone: "+972525416514",
    whatsapp: getWhatsappHotix("+972525416514"),
  },
];

export const getWhatsappTom = () =>
  `http://wa.me/+972525416514?text=${encodeURIComponent(
    "היי טום, הגעתי דרך הפורטפוליו שלך."
  )}`;

export default hotixMembers;
