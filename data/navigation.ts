export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const footerLinks = {
  company: [
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
    { href: "/products", label: "Products" },
    { href: "/contact", label: "Get Quote" },
  ],
  products: [
    { href: "/products/shade-net", label: "Shade Net" },
    { href: "/products/tape-net", label: "Tape Net" },
  ],
};
