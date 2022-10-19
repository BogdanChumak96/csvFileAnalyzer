import { Console } from "console";

// import fs from "fs";
// import { WinsAnalazer } from "./analazers/WinsAnalazer";
// import { CsvFileReader } from "./CsvFileReader";
import { MatchReader } from "./MatchReader";
// import { HtmlReport } from "./ReportTarget/HtmlReport";
import { Summary } from "./Summary";

// const csvFileReader = new CsvFileReader('./football.csv')
// const matchReader = new MatchReader(csvFileReader)
const matchReader = MatchReader.fromScv('football.csv')
matchReader.load()

// const summary = new Summary(new WinsAnalazer('Man United'), new ConsoleReport())
// const summary = new Summary(new WinsAnalazer('Man United'), new HtmlReport())
const summary = Summary.winsAnaysWithHtmlReport('Man United')
summary.buildAndPrintReport(matchReader.matches)
