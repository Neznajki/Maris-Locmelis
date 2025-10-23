export interface NavLink {
  label: string;
  href?: string;
  submenu?: NavLink[];
}

export interface PageSection {
  id: string;
  title: string;
  body: string;
}

export interface PageContent {
  slug: string;
  title: string;
  sections: PageSection[];
}

export interface NavProps {
  items: NavLink[];
  openIndex: number | null;
  onToggle: (index: number) => void;
  onCloseAll: () => void;
}

export interface DesktopNavProps extends NavProps {
}
export interface MobileNavProps extends NavProps {
}