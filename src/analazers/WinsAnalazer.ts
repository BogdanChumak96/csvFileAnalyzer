import { resConvert } from "../MatchData";
import { MatchResults } from "../MatchResult";
import { IAnalyzer } from "../Summary";

export class WinsAnalazer implements IAnalyzer {
  constructor(public team: string) {}
  run(matches: resConvert[]): string {
    let wins = 0;
    for (let match of matches) {
      if (match[1] == this.team && match[5] == MatchResults.homeWin) {
        wins += 1;
      } else if (
        match[2] === this.team &&
        match[5] == MatchResults.awayWin
      ) {
        wins += 1;
      }
    }
    return `Team ${this.team} won ${wins}`
  }
}
