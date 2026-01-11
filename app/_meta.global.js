/**
 * Global Metadata Configuration for Nextra Docs
 *
 * This file defines the sidebar / navigation metadata for all documentation sections.
 * Use the `separator()` and `sorted()` helpers from "@/lib/utils" to keep it clean and maintainable.
 */

import { sorted, separator } from "@/lib/utils";
// ---------------------------
// 🔹 Server: Proxmox VE
// ---------------------------
const proxmoxVE = {
  title: "Proxmox VE",
  items: {
    lxc: "",
  },
};

// ---------------------------
// 🔹 Server: Zabbix
// ---------------------------
const zabbix = {
  title: "Zabbix",
  items: {
    "interface-type": "",
    actions: "",
    notification: "",
  },
};

// ---------------------------
// 🔹 Server: Technitium DNS
// ---------------------------
const technitiumDNS = {
  title: "Technitium DNS",
  items: {
    zone: "",
    dhcp: "",
  },
};

// ---------------------------
// 🔹 Server: Nginx Proxy Manager
// ---------------------------
const nginxProxyManager = {
  title: "Nginx Proxy Manager",
  items: {
    "proxy-hosts": "",
    certificates: "",
  },
};

// ---------------------------
// 🔹 Server Group
// ---------------------------
const serverGroup = {
  docker: "",
  "nginx-proxy-manager": nginxProxyManager,
  "proxmox-ve": proxmoxVE,
  "technitium-dns": technitiumDNS,
  zabbix,
};

// ---------------------------
// 🔹 Global Meta Config
// ---------------------------
const metaConfig = {
  docs: {
    type: "page",
    title: "Documentation",
    theme: {
      copyPage: false,
    },
    items: {
      index: "",
      ...separator({ title: "Server" }),
      ...sorted(serverGroup, "asc"),
    },
  },
};

// ---------------------------
// ✅ Export
// ---------------------------
export default metaConfig;
