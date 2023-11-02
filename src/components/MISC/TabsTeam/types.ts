export interface IMemberTeam {
  name?: string;
  photo?: string;
  position?: string;
  text?: string;
  linkedin?: string;
  width?: string;
}

export type ITabPanel = {
  children: React.ReactNode;
  openTab: number;
  numberTab: number;
  tabId: string;
};

export type ITab = {
  active: boolean;
  href: string;
  onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  label: string;
};
