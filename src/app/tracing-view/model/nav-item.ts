export interface NavItem {
    displayName: string;
    tooltip?: string;
    iconName: string;
    action?: () => void;
    route?: string;
    children?: NavItem[];
}
