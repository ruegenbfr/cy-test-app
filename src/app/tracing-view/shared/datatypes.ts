export interface Position {
    x: number;
    y: number;
}

export interface StationData {
    id: string;
    name: string;
    incoming: string[];
    outgoing: string[];
    isVisible: boolean;
    isSelected: boolean;
    position: Position;
}

export interface DeliveryData {
    id: string;
    name: string;
    isVisible: boolean;
    isSelected: boolean;
    source: string;
    target: string;
}

export interface FCLData {
    stations: StationData[];
    deliveries: DeliveryData[];
}

export interface HighlightingRule {
    type: HighlightingType;
    name: string;
    isVisible: boolean;
    color: string;
    label: string;
}

export enum HighlightingType {
    ApplyToAll = 'Apply to all' as any,
    LogicalCondition = 'Logical Condition' as any,
    ValueCondition = 'Value Condition' as any,
    LogicalValueCondition = 'Logical Value Condition' as any
}

export interface FCLDataSource {
    rawData: any;
    fclData: FCLData;
    source: string;
}

export interface Color {
    r: number;
    g: number;
    b: number;
}

export interface Layout {
    zoom: number;
    pan: Position;
}

export interface TableSettings {
    mode: TableMode;
    width: number;
    stationColumns: string[];
    deliveryColumns: string[];
    showType: ShowType;
}

export enum TableMode {
    STATIONS = 'Stations' as any,
    DELIVERIES = 'Deliveries' as any
}

export enum ShowType {
    ALL = 'All' as any,
    SELECTED_ONLY = 'Selected Only' as any,
    TRACE_ONLY = 'Trace Only' as any
}
