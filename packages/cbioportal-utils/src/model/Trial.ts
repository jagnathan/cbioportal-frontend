export interface ITrialMatch {
    id: string;
    nctId: string | '';
    protocolNo: string | '';
    shortTitle: string | '';
    status: string | '';
    oncotreePrimaryDiagnosisName: string | '';
    gender: string | '';
    matchType: string | '';
    patient_match_values: string | '';
    queries_used: string | '';
    trial_arm_number: number | -1;
    trial_step_number: number | -1;
    trial_match_date: string | '';
    arm_internal_id: string | '';
    arm_code: string | '';
    armDescription: string | '';
    armType: string | '';
    sampleId: string;
    mrn: string;
    trueHugoSymbol: string | '';
    trueProteinChange: string | '';
    vitalStatus: string | '';
    genomicAlteration: string | '';
    trialAgeNumerical: string | '';
    trialOncotreePrimaryDiagnosis: string | '';
}