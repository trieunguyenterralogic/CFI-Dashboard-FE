// ** Type Imports
import { ColumnsTestBuild, ColumnsTestCase, ColumnsTestSummary, ColumsBuildSummary } from "@type/home";

export const columnsTestBuild: readonly ColumnsTestBuild[] = [
    { 
        id: "startTime", 
        label: "Start time" 
    },
    {
        id: "host",
        label: "Host",
    },
    {
        id: "release",
        label: "Release",
    },
    {
        id: "image",
        label: "Image",
    },
    {
        id: "testbed",
        label: "Testbed",
    },
    {
        id: "passed",
        label: "Passed",
    },
    {
        id: "failed",
        label: "Failed",
    },
    {
        id: "errored",
        label: "Errored",
    },
];

export const columsBuildSummary: readonly ColumsBuildSummary[] = [
    {
        id: "build",
        label: "Build Number",
    },
    {
        id: "jenkinsUrl",
        label: "Jenkins URL",
        className: "!text-blue-primary cursor-pointer",
    },
    {
        id: "clusterUrl",
        label: "Cluster URL",
        className: "!text-blue-primary cursor-pointer",
    },
    {
        id: "tradeUrl",
        label: "Trade URL",
        className: "!text-blue-primary cursor-pointer",
    },
    {
        id: "startTime",
        label: "Start Time",
    },
    {
        id: "endTime",
        label: "End Time",
    },
    {
        id: "total",
        label: "Total Run Time",
    },
];

export const columnsTestSummary: readonly ColumnsTestSummary[] = [
    {   
        id: "useCase", 
        label: "Use Case", 
        align: "left" 
    },
    {
        id: "total",
        label: "Total",
        align: "center"
    },
    {
        id: "passed",
        label: "Passed",
        align: "center"
    },
    {
        id: "failed",
        label: "Failed",
        align: "center"
    },
    {
        id: "errored",
        label: "Errored",
        align: "center"
    },
    {
        id: "blocked",
        label: "Blocked",
        align: "center"
    },
    {
        id: "skipped",
        label: "Skipped",
        align: "center"
    },
    {
        id: "ddts",
        label: "DDTS",
        align: "center"
    },
    {
        id: "result",
        label: "Result",
        align: "center"
    },
];

export const columnsTestCase: readonly ColumnsTestCase[] = [
    {   
        id: "testCase", 
        label: "Test Case", 
        align: "left",
        minWidth: 300
    },
    {
        id: "result",
        label: "Result",
        align: "center"
    },
    {
        id: "failureCategory",
        label: "Failure Category",
        align: "center"
    },
    {
        id: "rca",
        label: "RCA",
        align: "center"
    },
    {
        id: "ddts",
        label: "DDTS",
        align: "center"
    }
];

export const optionSelectModalChart: { value: string, lable: string }[] = [
    {
        value: "SIT migration",
        lable: "SIT migration"
    },
    {
        value: "SDA SIT full regression",
        lable: "SDA SIT full regression"
    },
    {
        value: "Telemetry regression",
        lable: "Telemetry regression"
    },
    {
        value: "UI regression",
        lable: "UI regression"
    },
    {
        value: "Context based regression",
        lable: "Context based regression"
    },
];


