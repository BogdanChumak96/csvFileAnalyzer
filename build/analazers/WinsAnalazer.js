"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WinsAnalazer = void 0;
const MatchResult_1 = require("../MatchResult");
class WinsAnalazer {
    constructor(team) {
        this.team = team;
    }
    run(matches) {
        let wins = 0;
        for (let match of matches) {
            if (match[1] == this.team && match[5] == MatchResult_1.MatchResults.homeWin) {
                wins += 1;
            }
            else if (match[2] === this.team &&
                match[5] == MatchResult_1.MatchResults.awayWin) {
                wins += 1;
            }
        }
        return `Team ${this.team} won ${wins}`;
    }
}
exports.WinsAnalazer = WinsAnalazer;
