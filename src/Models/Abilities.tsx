export interface Abilities {
    dName: string;
    behavior: string[];
    bkbpierce: string;
    target_team: string;
    target_type: string[];
    desc: string;
    attrib: Attribute[];
    mc: string;
    cd: string;
    img: string;
}
export interface Attribute{
    key: string;
    header: string;
    value: string;
}