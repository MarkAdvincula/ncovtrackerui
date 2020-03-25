export class Cities{
    objectIdFieldName: string;
    uniqueIdField: UniqueIdField;
    globalIdFieldName: string;
    geometryType: string;
    spatialReference: SpatialReference;
    fields: Fields[];
    features: Features[];
}

export class UniqueIdField{
    name: string;
    isSystemMaintained: boolean;
}

export class SpatialReference{
    wkid: number;
    latestWkid: number;
}

export class Fields{
    name: string;
    type: string;
    alias: string;
    sqlType: string;
    domain: string;
    defaultValue: string;
}

export class Features{
    attributes: Attributes;
}

export class Attributes{
    value: number;
    residence: string;
}

