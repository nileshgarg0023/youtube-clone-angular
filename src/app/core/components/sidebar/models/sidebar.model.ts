export interface ISideBar {
    section: string;
    items: ISideBarItem[];
    mustShowInHide?: boolean;
  }
  
  export interface ISideBarItem {
    name: string;
    icon: string;
    renderInHide?: boolean;
  }