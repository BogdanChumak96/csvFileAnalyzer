"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import fs from "fs";
// import { WinsAnalazer } from "./analazers/WinsAnalazer";
// import { CsvFileReader } from "./CsvFileReader";
const MatchReader_1 = require("./MatchReader");
// import { HtmlReport } from "./ReportTarget/HtmlReport";
const Summary_1 = require("./Summary");
// const csvFileReader = new CsvFileReader('./football.csv')
// const matchReader = new MatchReader(csvFileReader)
const matchReader = MatchReader_1.MatchReader.fromScv('football.csv');
matchReader.load();
// const summary = new Summary(new WinsAnalazer('Man United'), new ConsoleReport())
// const summary = new Summary(new WinsAnalazer('Man United'), new HtmlReport())
const summary = Summary_1.Summary.winsAnaysWithHtmlReport('Man United');
summary.buildAndPrintReport(matchReader.matches);
