interface IParams {
    email?: string;
    screen?: string;
    data?: any;
    type?: string;
}

export interface INavigation {
    navigate: (pathd: string, params?: IParams) => void;
    goBack: () => void;
    setOptions: (options: any) => void;
}
