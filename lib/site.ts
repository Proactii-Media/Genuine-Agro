export const site = {
    name: "Genuine Agro Shade Net",
    tagline: "Shaping Growth Under Shade",
    owner: "Manishkumar Hariram Bhanushali",
    email: "chauhanbabli210@gmail.com",
    phone: "+917383521849",
    phoneDisplay: "+91 73835 21849",
    whatsapp: "917383521849",
    address: {
      line1: "Plot No. 4301 B",
      line2: "Opposite Saloni Paper Machine Pvt Ltd",
      city: "Vapi",
      state: "Gujarat",
      zip: "396193",
      country: "India",
    },
    url: "https://genuineagroshade.com",
  } as const;
  
  export const whatsappLink = (msg = "Hello, I'd like to enquire about your shade nets.") =>
    `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(msg)}`;
  
  export const products = [
    { slug: "shade-net", name: "Shade Net", desc: "UV-stabilised HDPE knitted shade nets for crop and greenhouse protection.", shade: "35% – 90%" },
    { slug: "tape-net", name: "Tape Net", desc: "High tensile tape-woven nets for heavy-duty agricultural shading.", shade: "50% – 75%" },
    { slug: "anti-bird-net", name: "Anti Bird Net", desc: "Fine mesh HDPE bird protection nets for orchards and vineyards.", shade: "N/A" },
    { slug: "greenhouse-net", name: "Greenhouse Net", desc: "Climate-controlled polyhouse shading with diffused light transmission.", shade: "40% – 75%" },
    { slug: "safety-net", name: "Safety Net", desc: "Industrial-grade construction and fall arrest safety netting.", shade: "N/A" },
    { slug: "coconut-support-net", name: "Coconut Support Net", desc: "High-strength support nets for coconut plantations and heavy crops.", shade: "N/A" },
    { slug: "insect-net", name: "Insect Net", desc: "Ultra-fine mesh insect exclusion nets for controlled cultivation.", shade: "N/A" },
    { slug: "hdpe-net", name: "HDPE Net", desc: "Premium virgin HDPE nets engineered for extreme weather durability.", shade: "Custom" },
  ] as const;
  