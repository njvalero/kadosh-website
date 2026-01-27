export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
}

export interface InventoryItem {
  id: number;
  name: string;
  quantity: number;
  category: string;
}

export interface NavItem {
  label: string;
  href: string;
}