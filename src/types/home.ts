export interface ColumnsTestBuild {
    id:
        | "starttime"
        | "submitter"
        | "release"
        | "trade_url"
        | "testbed"
        | "passed"
        | "failed"
        | "errored"
    label: string;
}

export interface TestBuild {
    trade_id: number,
    passed: number,
    passx?: number,
    failed: number,
    errored: number,
    blocked?: number,
    skipped?: number,
    starttime: string,
    runtime?: number,
    testbed: string,
    release: string,
    submitter: string,
    trade_url: string,
    jobname?: string,
    device_version?: Array<any>,
    dna_version?: string,
    folder_id?: number
}

export interface ColumsBuildSummary {
    id:
        | "build"
        | "jenkinsUrl"
        | "clusterUrl"
        | "tradeUrl"
        | "startTime"
        | "endTime"
        | "total";
    label: string;
    className?: string;
}

export interface ColumnsTestSummary {
    id:
        | "name"
        | "total"
        | "passed"
        | "failed"
        | "errored"
        | "blocked"
        | "skipped"
        | "ddts"
        | "result";
    label: string;
    align: "center" | "right" | "left" | "inherit" | "justify" | undefined
}

export interface TestSummary {
    suite_id: number,
    name: string,
    result: string,
    runtime?: number,
    log_link?: string,
    trade_id?: number,
    total: number,
    passed: number,
    passx?: number,
    failed: number,
    errored: number,
    blocked: number,
    skipped: number,
    ddts: number

    // useCase: string;
    // total: number;
    // passed: number;
    // failed: number;
    // errored: number;
    // blocked: number;
    // skipped: number;
    // ddts: number;
    // result: string
}

export interface ColumnsTestCase {
    id:
        | "testCase"
        | "result"
        | "failureCategory"
        | "rca"
        | "ddts"
    label: string;
    align: "center" | "right" | "left" | "inherit" | "justify" | undefined,
    minWidth?: number
}


export interface TestCase {
    testCase: string;
    result: string;
    failureCategory: string;
    rca: string;
    ddts: string
}
