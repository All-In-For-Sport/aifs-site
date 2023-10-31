export type Project = {
    name: string;
    isActive: boolean;
    description: string;
    image: any;
    slug: string;
    startDate: string;
    endDate: string;
    donateCryptoLink?: string;
    donateFiatLink?: string;
    goal: number;
    raised: number;
    about: {
        title: string;
        description: string;
    };
    projectDetails: {
        title: string;
        description: string;
        videoUrl?: string;
    };
    goals: {
        title: string;
        description: string;
        image: string;
    }[];
};
