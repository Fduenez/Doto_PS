export class HeroStat {
    public id: number;
    public name: string;
    public localized_name: string;
    public primary_attr: string;
    public attack_type: string;
    public roles: string[];
    public img: string;
    public icon: string;
    public base_health: number;
    public base_health_regen: number;
    public base_mana: number;
    public base_mana_regen: number;
    public base_armor: number;
    public base_mr: number;
    public base_attack_min: number;
    public base_attack_max: number;
    public base_str: number;
    public base_agi: number;
    public base_int: number;
    public str_gain: number;
    public agi_gain: number;
    public int_gain: number;
    public attack_range: number;
    public projectile_speed: number;
    public attack_rate: number;
    public base_attack_time: number;
    public attack_point: number;
    public move_speed: number;
    public turn_rate: number;
    public cm_enabled: boolean;
    public legs: number;
    public day_vision: number;
    public night_vision: number;
    public hero_id: number;
    public turbo_picks: number;
    public turbo_wins: number;
    public pro_ban: number;
    public pro_win: number;
    public pro_pick: number;
    public one_pick: number;
    public one_win: number;
    public two_pick: number;
    public two_win: number;
    public three_pick: number;
    public three_win: number;
    public four_pick: number;
    public four_win: number;
    public five_pick: number;
    public five_win: number;
    public six_pick: number;
    public six_win: number;
    public seven_pick: number;
    public seven_win: number;
    public eight_pick: number;
    public eight_win: number;
    public null_pick: number;
    public null_win: number;

    constructor(
        id: number,
        name: string,
        localized_name: string,
        primary_attr: string,
        attack_type: string,
        roles: string[],
        img: string,
        icon: string,
        base_health: number,
        base_health_regen: number,
        base_mana: number,
        base_mana_regen: number,
        base_armor: number,
        base_mr: number,
        base_attack_min: number,
        base_attack_max: number,
        base_str: number,
        base_agi: number,
        base_int: number,
        str_gain: number,
        agi_gain: number,
        int_gain: number,
        attack_range: number,
        projectile_speed: number,
        attack_rate: number,
        base_attack_time: number,
        attack_point: number,
        move_speed: number,
        turn_rate: number,
        cm_enabled: boolean,
        legs: number,
        day_vision: number,
        night_vision: number,
        hero_id: number,
        turbo_picks: number,
        turbo_wins: number,
        pro_ban: number,
        pro_win: number,
        pro_pick: number,
        one_pick: number,
        one_win: number,
        two_pick: number,
        two_win: number,
        three_pick: number,
        three_win: number,
        four_pick: number,
        four_win: number,
        five_pick: number,
        five_win: number,
        six_pick: number,
        six_win: number,
        seven_pick: number,
        seven_win: number,
        eight_pick: number,
        eight_win: number,
        null_pick: number,
        null_win: number) {
        this.id = id;
        this.name = name;
        this.localized_name = localized_name;
        this.primary_attr = primary_attr;
        this.attack_type = attack_type;
        this.roles = roles
        this.img = img
        this.icon = icon
        this.base_health = base_health
        this.base_health_regen = base_health_regen;
        this.base_mana = base_mana;
        this.base_mana_regen = base_mana_regen;
        this.base_armor = base_armor;
        this.base_mr = base_mr;
        this.base_attack_min = base_attack_min;
        this.base_attack_max = base_attack_max;
        this.base_str = base_str;
        this.base_agi = base_agi;
        this.base_int = base_int;
        this.str_gain = str_gain;
        this.agi_gain = agi_gain;
        this.int_gain = int_gain;
        this.attack_range = attack_range;
        this.projectile_speed = projectile_speed;
        this.attack_rate = attack_rate;
        this.base_attack_time = base_attack_time;
        this.attack_point = attack_point;
        this.move_speed = move_speed;
        this.turn_rate = turn_rate;
        this.cm_enabled = cm_enabled;
        this.legs = legs;
        this.day_vision = day_vision;
        this.night_vision = night_vision;
        this.hero_id = hero_id;
        this.turbo_picks = turbo_picks;
        this.turbo_wins = turbo_wins;
        this.pro_ban = pro_ban;
        this.pro_win = pro_win;
        this.pro_pick = pro_pick;
        this.one_pick = one_pick;
        this.one_win = one_win;
        this.two_pick = two_pick;
        this.two_win = two_win;
        this.three_pick = three_pick;
        this.three_win = three_win;
        this.four_pick = four_pick;
        this.four_win = four_win;
        this.five_pick = five_pick;
        this.five_win = five_win;
        this.six_pick = six_pick;
        this.six_win = six_win;
        this.seven_pick = seven_pick;
        this.seven_win = seven_win;
        this.eight_pick = eight_pick;
        this.eight_win = eight_win;
        this.null_pick = null_pick;
        this.null_win = null_win;
    }
}

