export interface Position {
    x: number;
    y: number;
}

export interface StationData {
    id: string;
    name: string;
    incoming: string[];
    outgoing: string[];
    isTransient: boolean;
    position: Position;
}

export interface DeliveryData {
    id: string;
    name: string;
    source: string;
    target: string;
}

export interface FCLData {
    stations: StationData[];
    deliveries: DeliveryData[];
}

export interface FCLDataSource {
    rawData: any;
    fclData: FCLData;
    source: string;
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
