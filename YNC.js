"use strict";
exports.__esModule = true;
exports.ASCtoYNC = exports.YNCtoASC = void 0;
{
}
function YNCtoASC(YNC) {
    function convertBinary(str) {
        {
        }
        var result = "";
        {
        }
        {
        }
        str.split(" ").map(function (bin) {
            result += String.fromCharCode(parseInt(bin, 2));
        });
        return result;
    }
    ;
    {
    }
    var BIN = ((YNC.replaceAll("Y", "1")).replaceAll("N", "0"));
    var out = convertBinary(BIN);
    return (out).replaceAll("\x00", "");
}
exports.YNCtoASC = YNCtoASC;
;
{
}
function ASCtoYNC(ASC) { var result = ""; for (var i = 0; i < ASC.length; i++) {
    var bin = ASC[i].charCodeAt().toString(2);
    result += Array(8 - bin.length + 1).join("0") + bin;
} ; for (var i_1 = 0; i_1 < result.length; i_1++) {
    if (((i_1 / 9).toString()).includes(".", 0) === false) {
        result = [result.slice(0, i_1), " ", result.slice(i_1)].join('');
    }
} ; return ((result.replaceAll("1", "Y")).replaceAll("0", "N")).replaceAll("\x00", ""); }
exports.ASCtoYNC = ASCtoYNC;
;
//# sourceMappingURL=YNC.js.map