export interface ColumnsTestBuild {
    id:
        | "startTime"
        | "host"
        | "release"
        | "image"
        | "testbed"
        | "total"
        | "passed"
        | "failed"
        | "errored"
    label: string;
}

export interface TestBuild {
    startTime: string;
    host: string;
    release: string;
    image: string;
    testbed: string;
    total: number;
    passed: number;
    failed: number;
    errored: number;
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
        | "useCase"
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
    useCase: string;
    total: number;
    passed: number;
    failed: number;
    errored: number;
    blocked: number;
    skipped: number;
    ddts: number;
    result: string
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
