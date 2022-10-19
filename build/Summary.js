git config --list"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary = void 0;
const WinsAnalazer_1 = require("./analazers/WinsAnalazer");
const HtmlReport_1 = require("./ReportTarget/HtmlReport");
{
}
{ }
class Summary {
    constructor(analyzer, outputTarget) {
        this.analyzer = analyzer;
        this.outputTarget = outputTarget;
    }
    static winsAnaysWithHtmlReport(team) {
        return new Summary(new WinsAnalazer_1.WinsAnalazer(team), new HtmlReport_1.HtmlReport());
    }
    buildAndPrintReport(matches) {
        const output = this.analyzer.run(matches);
        this.outputTarget.print(output);
    }
}
exports.Summary = Summary;
