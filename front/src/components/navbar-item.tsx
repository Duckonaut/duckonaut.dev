import * as preact from "preact";

export function NavbarItem(props: any) {
  const { name, href, children, rel } = props;

  return (preact.createElement("div", { className: "navbar-item" },
    preact.createElement("a", { className: "navbar-item-" + name, href: href, rel: rel }, children)));
}
