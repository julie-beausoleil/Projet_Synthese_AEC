export interface InternshipRequest {
    _id?: string;
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
    skills: string[];
    published: boolean;
    paid: string[];
    active: boolean;
}


export interface FormulaireInternshipRequestData {
   internshipRequest: InternshipRequest;
   isDisabled: boolean;
}