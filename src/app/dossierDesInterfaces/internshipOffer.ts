interface InternshipOffer {
    _id: string;
    title: string;
    description: string;
    enterprise: string;
    startDate: Date;
    endDate: Date;
    program: string;
    requirements: string;
    stageType: string;
    hoursPerWeek: number;
    additionalInfo: string;
    paid: string[];
    skills: string[];
    published: boolean;
    active: boolean;
}