import { WinsAnalazer } from './analazers/WinsAnalazer'
import {resConvert} from './MatchData'
import { HtmlReport } from './ReportTarget/HtmlReport'


export interface IAnalyzer{
     run(matches: resConvert[]):string{

     } 
}
export interface IOutputTarget{
    print(report:string):void{}
}

export class Summary{
    constructor(public analyzer:IAnalyzer, public outputTarget: IOutputTarget){}
    static winsAnaysWithHtmlReport(team : string):Summary{
        return new Summary(new WinsAnalazer(team), new HtmlReport())
    }
    buildAndPrintReport(matches:resConvert[]):void{
        const output = this.analyzer.run(matches)
        this.outputTarget.print(output)
    }
}

