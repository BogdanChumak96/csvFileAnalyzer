import { dateStringtoDate } from "./utils";
import { MatchResults } from "./MatchResult";
import {resConvert} from './MatchData'
import { CsvFileReader } from "./CsvFileReader";

interface IDateReader {
  read(): void;
  data: string[][];
}

export class MatchReader {
  matches: resConvert[] = [];
  constructor(public reader: IDateReader) {}
  static fromScv(filename:string):MatchReader{
    return new MatchReader(new CsvFileReader(filename))
  }
  load(): void {
    this.reader.read();
    this.matches = this.reader.data.map((row: string[]): resConvert => {
      return [
        dateStringtoDate(row[0]),
        row[1],
        row[2],
        parseInt(row[3]),
        parseInt(row[4]),
        row[5] as MatchResults,
        row[6],
      ];
    });
  }
}
