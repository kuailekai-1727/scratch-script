// Generated automatically by nearley, version 2.19.3
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }

const moo = require("moo")
const lexer = moo.compile([

    {type: "COMMENT", match: /\/\*[\W\w]*?\*\//, value: x => x.slice(2, -3)},
    {type: "COMMENT", match: /\/{2}(?:.*?)\n?$/, value: x => x.slice(2)},

    {type: "SPACE", match: /\s+/, lineBreaks: true},
    {type: "DELIMITER", match: ";"},

    {type: "STRING",  match: /".*?"/, value: x => JSON.parse(x)},
    {type: "STRING",  match: /'.*?'/, value: x => JSON.parse('"' + x.slice(1, -1) + '"')},
    {type: "NUMBER",  match: /-?[1-9]\d*/, value: x => Number(x)},
    {type: "NUMBER",  match: /-?(?:[1-9]\d*\.\d*|0\.\d*[1-9]\d*|0?\.0+|0)/, value: x => Number(x)},
    {type: "NUMBER",  match: /0x[0-9A-Fa-f]+/, value: x => parseInt(x)},
    {type: "NUMBER",  match: /0b[01]+/, value: x => parseInt(x)},
    {type: "NUMBER",  match: /0[0-7]+/, value: x => parseInt(x)},
    {type: "COLOR",   match: /#[A-Fa-f0-9]{3}(?:[A-Fa-f0-9](?:[A-Fa-f0-9]{2}(?:[A-Fa-f0-9]{2})))?/},

    {type: "COMMA", match: ","},
    {type: "LP", match: "("},
    {type: "RP", match: ")"},
    {type: "LMP", match: "["},
    {type: "RMP", match: "]"},
    {type: "LCB", match: "{"},
    {type: "RCB", match: "}"},
    {type: "GT", match: ">"},
    {type: "LT", match: "<"},
    {type: 'OP', match: /[&|\=\.]{2}|[\+\-\*\/\%\!\<\>=]/},

    // Keywords
    {type: "KW_VAR", match: "var"},
    {type: "KW_IN", match: "in"},
    {type: "KW_LET", match: "let"},
    {type: "KW_WHEN", match: "when"},
    {type: "KW_DEFINE", match: "define"},
    {type: "KW_ATONCE", match: "atonce"},
    {type: "KW_END", match: "end"},
    {type: "KW_WHILE", match: "while"},
    {type: "KW_FOREVER", match: "forever"},
    {type: "KW_REPEAT", match: "repeat"},
    {type: "KW_REGISTER", match: "register"},
    {type: "KW_IF", match: "if"},
    {type: "KW_ELSE", match: "else"},
    {type: "KW_USING", match: "using"},
    {type: "KW_NUMBER", match: "number"},
    {type: "KW_STRING", match: "string"},
    {type: "KW_BOOL", match: "bool"},

    {type: "BLOCKIDEN", match: /[a-zA-Z_][0-9a-zA-Z_]*\.[a-zA-Z_][0-9a-zA-Z_]*/},
    {type: "IDEN", match: /[a-zA-Z_][0-9a-zA-Z_]*/},

    {type: 'UIDEN', match: /[^\n \t"'()<>=*\/+-]+/},
    {type: "ERROR", error: true},
])




function ifCondition (d) {
    return {
        type: "FunctionCall",
        condition: d[4],
        trueBlock: d[8],
        falseBlock: d[12],
        line: d[0].line,
        col: d[0].col
    }
}



function tryCalculate ([left,,sym,,right]) {
    const blocks = {
        "+": "math.add",
        "-": "math.sub",
        "*": "math.multiply",
        "/": "math.devide",
        "<": "math.lt",
        ">": "math.gt",
        "%": "math.mod",
        "||": "math.or",
        "&&": "math.and",
        "!": "math.not",
        "==": "math.equals",
        "..": "math.join",
    }
    return {
        type: "FunctionCall",
        name: blocks[sym],
        args: [left, right].filter(v => !!v),
        line: left.line,
        col: left.col
    }
}
var grammar = {
    Lexer: lexer,
    ParserRules: [
    {"name": "Program", "symbols": ["_", "_Program", "_"], "postprocess":  d => ({
            type: "Program",
            listeners: d[1].filter(ast => ast.type === "EventExpression"),
            procedures: d[1].filter(ast => ast.type === "FunctionDefinition"),
            variables: d[1].filter(ast => ast.type === "VariableDefinition"),
            registers: d[1].filter(ast => ast.type === "RegisterStatement"),
            usings: d[1].filter(ast => ast.type === "UsingStatement")
        }) },
    {"name": "_Program", "symbols": ["OutsideStatement"]},
    {"name": "_Program$subexpression$1", "symbols": ["_", {"literal":";"}, "_"]},
    {"name": "_Program$subexpression$1", "symbols": ["__"]},
    {"name": "_Program", "symbols": ["_Program", "_Program$subexpression$1", "OutsideStatement"], "postprocess":  d => {
            const r = d[0].slice()
            r.push(d[2])
            return r
        } },
    {"name": "OutsideStatement", "symbols": ["Comment"], "postprocess": id},
    {"name": "OutsideStatement", "symbols": ["RegisterStatement"], "postprocess": id},
    {"name": "OutsideStatement", "symbols": ["UsingStatement"], "postprocess": id},
    {"name": "OutsideStatement", "symbols": ["VariableDefinition"], "postprocess": id},
    {"name": "OutsideStatement", "symbols": ["FunctionDefinition"], "postprocess": id},
    {"name": "OutsideStatement", "symbols": ["EventListener"], "postprocess": id},
    {"name": "RegisterStatement$subexpression$1", "symbols": ["__", {"literal":"as"}, "__", (lexer.has("IDEN") ? {type: "IDEN"} : IDEN)]},
    {"name": "RegisterStatement$subexpression$1", "symbols": []},
    {"name": "RegisterStatement", "symbols": [{"literal":"register"}, "__", (lexer.has("STRING") ? {type: "STRING"} : STRING), "RegisterStatement$subexpression$1"], "postprocess":  d => ({
            type: "RegisterStatement",
            file: d[2].value,
            rename: d[3].length === 4 ? d[3][3].value : null,
            line: d[0].line,
            col: d[0].col
        }) },
    {"name": "UsingStatement", "symbols": [{"literal":"using"}, "__", (lexer.has("STRING") ? {type: "STRING"} : STRING)], "postprocess":  d => ({
            type: "UsingStatement",
            file: d[2].value,
            line: d[0].line,
            col: d[0].col
        }) },
    {"name": "Block", "symbols": ["_", "_Block", "_"], "postprocess": d => d[1]},
    {"name": "Block", "symbols": ["_"], "postprocess": v => []},
    {"name": "_Block", "symbols": ["Statement"], "postprocess": d => [d[0]]},
    {"name": "_Block", "symbols": ["_Block", "_", "Statement"], "postprocess":  d => {
            const r = d[0].slice()
            r.push(d[2])
            return r
        } },
    {"name": "Statement$subexpression$1", "symbols": ["_", {"literal":";"}]},
    {"name": "Statement$subexpression$1", "symbols": []},
    {"name": "Statement", "symbols": ["_Statement", "Statement$subexpression$1"], "postprocess": id},
    {"name": "_Statement", "symbols": ["Comment"], "postprocess": id},
    {"name": "_Statement", "symbols": ["RepeatCondition"], "postprocess": id},
    {"name": "_Statement", "symbols": ["SetVariable"], "postprocess": id},
    {"name": "_Statement", "symbols": ["WhileCondition"], "postprocess": id},
    {"name": "_Statement", "symbols": ["IfCondition"], "postprocess": id},
    {"name": "_Statement", "symbols": ["FunctionCall"], "postprocess": id},
    {"name": "EventListener", "symbols": [{"literal":"when"}, "__", (lexer.has("BLOCKIDEN") ? {type: "BLOCKIDEN"} : BLOCKIDEN), "_", {"literal":"("}, "_", "ArgList", "_", {"literal":")"}, "_", "FunctionBody"], "postprocess":  (d, pos, reject) => {
            return {
                type: "EventExpression",
                name: d[2].value,
                args: d[6],
                body: d[10],
                line: d[0].line,
                col: d[0].col
            }
        } },
    {"name": "FunctionDefinition$subexpression$1", "symbols": [(lexer.has("KW_ATONCE") ? {type: "KW_ATONCE"} : KW_ATONCE), "__"]},
    {"name": "FunctionDefinition$subexpression$1", "symbols": []},
    {"name": "FunctionDefinition", "symbols": ["FunctionDefinition$subexpression$1", (lexer.has("KW_DEFINE") ? {type: "KW_DEFINE"} : KW_DEFINE), "__", (lexer.has("IDEN") ? {type: "IDEN"} : IDEN), "_", {"literal":"("}, "_", "ParamList", "_", {"literal":")"}, "_", "FunctionBody"], "postprocess":  d => {
            return {
                type: "FunctionDefinition",
                warp: !!d[0][0],
                name: d[3].value,
                params: d[7],
                body: d[11],
                line: d[0][0] ? d[0][0].line : d[1].line,
                col: d[0][0] ?d[0][0].col : d[1].line
            }
        } },
    {"name": "FunctionCall$subexpression$1", "symbols": [(lexer.has("BLOCKIDEN") ? {type: "BLOCKIDEN"} : BLOCKIDEN)]},
    {"name": "FunctionCall$subexpression$1", "symbols": [(lexer.has("IDEN") ? {type: "IDEN"} : IDEN)]},
    {"name": "FunctionCall", "symbols": ["FunctionCall$subexpression$1", "_", {"literal":"("}, "_", "ArgList", "_", {"literal":")"}, "InCases"], "postprocess":  d => ({
            type: "FunctionCall",
            name: d[0][0].value,
            args: d[4],
            cases: d[7],
            line: d[0][0].line,
            col: d[0][0].col
        }) },
    {"name": "VariableDefinition", "symbols": ["_VariableDefinition"], "postprocess":  ([d]) => ({
            type: "VariableDefinition",
            islocal: d[0].value === "let",
            name: d[2].value,
            value: d[6],
            line: d[0].line,
            col: d[0].col
        }) },
    {"name": "_VariableDefinition", "symbols": [{"literal":"var"}, "__", "VariableName"]},
    {"name": "_VariableDefinition", "symbols": [{"literal":"var"}, "__", "VariableName", "_", {"literal":"="}, "_", "Constant"]},
    {"name": "_VariableDefinition", "symbols": [{"literal":"var"}, "__", "VariableName", "_", {"literal":"="}, "_", "ListConstant"]},
    {"name": "_VariableDefinition", "symbols": [{"literal":"let"}, "__", "VariableName"]},
    {"name": "_VariableDefinition", "symbols": [{"literal":"let"}, "__", "VariableName", "_", {"literal":"="}, "_", "Constant"]},
    {"name": "_VariableDefinition", "symbols": [{"literal":"let"}, "__", "VariableName", "_", {"literal":"="}, "_", "ListConstant"]},
    {"name": "VariableName$subexpression$1", "symbols": [(lexer.has("IDEN") ? {type: "IDEN"} : IDEN)]},
    {"name": "VariableName$subexpression$1", "symbols": [(lexer.has("BLOCKIDEN") ? {type: "BLOCKIDEN"} : BLOCKIDEN)]},
    {"name": "VariableName", "symbols": ["VariableName$subexpression$1"], "postprocess": v => v[0][0]},
    {"name": "IfCondition", "symbols": [{"literal":"if"}, "_", {"literal":"("}, "_", "Expression", "_", {"literal":")"}, "_", "FunctionBody"], "postprocess":  d => ({
            type: "FunctionCall",
            name: "control.if",
            args: [d[4]],
            cases: [{
                    type: "CaseBody",
                    name: {
                        type: "Constant",
                        value: 1,
                        line: d[0].line,
                        col: d[0].col
                    },
                    body: d[8],
                    line: d[0].line,
                    col: d[0].col
                }],
            line: d[0].line,
            col: d[0].col
        }) },
    {"name": "IfCondition", "symbols": [{"literal":"if"}, "_", {"literal":"("}, "_", "Expression", "_", {"literal":")"}, "_", "FunctionBody", "_", {"literal":"else"}, "_", "FunctionBody"], "postprocess":  d => ({
            type: "FunctionCall",
            name: "control.ifelse",
            args: [d[4]],
            cases: [{
                    type: "CaseBody",
                    name: {
                        type: "Constant",
                        value: 1,
                        line: d[0].line,
                        col: d[0].col
                    },
                    body: d[8],
                    line: d[0].line,
                    col: d[0].col
                }, {
                    type: "CaseBody",
                    name: {
                        type: "Constant",
                        value: 2,
                        line: d[0].line,
                        col: d[0].col
                    },
                    body: d[12],
                    line: d[0].line,
                    col: d[0].col
                }],
            line: d[0].line,
            col: d[0].col
        }) },
    {"name": "WhileCondition", "symbols": [{"literal":"forever"}, "_", "FunctionBody"], "postprocess": 
        d => ({
            type: "FunctionCall",
            name: "control.forever",
            args: [],
            cases: [{
                type: "CaseBody",
                name: {
                    type: "Constant",
                    value: 1,
                    line: d[0].line,
                    col: d[0].col
                },
                body: d[2],
                line: d[0].line,
                col: d[0].col
            }],
            line: d[0].line,
            col: d[0].col
        })
            },
    {"name": "WhileCondition", "symbols": [(lexer.has("KW_WHILE") ? {type: "KW_WHILE"} : KW_WHILE), "_", {"literal":"("}, "_", "Expression", "_", {"literal":")"}, "_", "FunctionBody"], "postprocess": 
        d => ({
            type: "FunctionCall",
            name: "control.while",
            args: [d[4]],
            cases: [{
                type: "CaseBody",
                name: {
                    type: "Constant",
                    value: 1,
                    line: d[0].line,
                    col: d[0].col
                },
                body: d[8],
                line: d[0].line,
                col: d[0].col
            }],
            line: d[0].line,
            col: d[0].col
        })
            },
    {"name": "RepeatCondition", "symbols": [{"literal":"repeat"}, "_", {"literal":"("}, "_", "Expression", "_", {"literal":")"}, "_", "FunctionBody"], "postprocess": 
        d => ({
            type: "FunctionCall",
            name: "control.repeat",
            args: [d[4]],
            cases: [{
                type: "CaseBody",
                name: {
                    type: "Constant",
                    value: 1,
                    line: d[0].line,
                    col: d[0].col
                },
                body: d[8],
                line: d[0].line,
                col: d[0].col
            }],
            line: d[0].line,
            col: d[0].col
        })
            },
    {"name": "ArgList", "symbols": ["ExpList"], "postprocess": id},
    {"name": "InCases", "symbols": [], "postprocess": d => []},
    {"name": "InCases", "symbols": ["_", "_InCases"], "postprocess": d => Object.fromEntries(d[0])},
    {"name": "_InCases", "symbols": ["InCase"]},
    {"name": "_InCases", "symbols": ["_InCases", "__", "InCase"], "postprocess": d => {const t = Array.from(d[0]); t.push(d[2]); return t }},
    {"name": "InCase", "symbols": [{"literal":"in"}, "__", "Constant", "__", "FunctionBody"], "postprocess":  d => [d[2].value, {
            type: "CaseBody",
            name: d[2],
            body: d[4],
            line: d[0].line,
            col: d[0].col
        }] },
    {"name": "ParamList", "symbols": [], "postprocess": () => []},
    {"name": "ParamList", "symbols": ["Param"]},
    {"name": "ParamList", "symbols": ["ParamList", "_", {"literal":","}, "_", "Param"], "postprocess": d => { const t = d[0]; t.push(d[4]); return t }},
    {"name": "Param$ebnf$1$subexpression$1$subexpression$1", "symbols": [{"literal":"string"}]},
    {"name": "Param$ebnf$1$subexpression$1$subexpression$1", "symbols": [{"literal":"number"}]},
    {"name": "Param$ebnf$1$subexpression$1$subexpression$1", "symbols": [{"literal":"bool"}]},
    {"name": "Param$ebnf$1$subexpression$1", "symbols": ["_", {"literal":":"}, "_", "Param$ebnf$1$subexpression$1$subexpression$1"]},
    {"name": "Param$ebnf$1", "symbols": ["Param$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "Param$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "Param", "symbols": [(lexer.has("IDEN") ? {type: "IDEN"} : IDEN), "Param$ebnf$1"], "postprocess":  d => ({
            type: "Argument",
            name: d[0].value,
            argumentType: d[1] ? d[1][3][0].value : "string",
            line: d[0].line,
            col: d[0].col
        }) },
    {"name": "FunctionBody", "symbols": [{"literal":"{"}, "Block", {"literal":"}"}], "postprocess": d => d[1]},
    {"name": "SetVariable", "symbols": [(lexer.has("IDEN") ? {type: "IDEN"} : IDEN), "_", {"literal":"="}, "_", "Expression"], "postprocess":  d => ({
            type: "FunctionCall",
            name: "data.setVar",
            args: [{
                type: "Constant",
                value: d[0].value
            }, d[4]],
            line: d[0].line,
            col: d[0].col
        }) },
    {"name": "ExpList", "symbols": ["ExpList", "_", {"literal":","}, "_", "Expression"], "postprocess":  d => {
            const r = d[0].slice()
            r.push(d[4])
            return r
        } },
    {"name": "ExpList", "symbols": ["Expression"], "postprocess": d => (d[0] === undefined || d[0] === null) ? [] : d},
    {"name": "Expression", "symbols": ["ExpOr"], "postprocess": id},
    {"name": "Parenthesized", "symbols": [{"literal":"("}, "Expression", {"literal":")"}], "postprocess": d => d[1]},
    {"name": "ExpOr", "symbols": ["ExpOr", "__", {"literal":"||"}, "__", "ExpAnd"], "postprocess": tryCalculate},
    {"name": "ExpOr", "symbols": ["ExpAnd"], "postprocess": id},
    {"name": "ExpAnd", "symbols": ["ExpAnd", "__", {"literal":"&&"}, "__", "ExpComparison"], "postprocess": tryCalculate},
    {"name": "ExpAnd", "symbols": ["ExpComparison"], "postprocess": id},
    {"name": "ExpComparison", "symbols": ["ExpComparison", "_", {"literal":">"}, "_", "ExpConcatenation"], "postprocess": tryCalculate},
    {"name": "ExpComparison", "symbols": ["ExpComparison", "_", {"literal":"<"}, "_", "ExpConcatenation"], "postprocess": tryCalculate},
    {"name": "ExpComparison", "symbols": ["ExpEquals"], "postprocess": id},
    {"name": "ExpEquals", "symbols": ["ExpComparison", "_", {"literal":"=="}, "_", "ExpConcatenation"], "postprocess": tryCalculate},
    {"name": "ExpEquals", "symbols": ["ExpConcatenation"], "postprocess": id},
    {"name": "ExpConcatenation", "symbols": ["ExpConcatenation", "_", {"literal":".."}, "_", "ExpSum"], "postprocess": tryCalculate},
    {"name": "ExpConcatenation", "symbols": ["ExpSum"], "postprocess": id},
    {"name": "ExpSum", "symbols": ["ExpSum", "_", {"literal":"+"}, "_", "ExpProduct"], "postprocess": tryCalculate},
    {"name": "ExpSum", "symbols": ["ExpSum", "_", {"literal":"-"}, "_", "ExpProduct"], "postprocess": tryCalculate},
    {"name": "ExpSum", "symbols": ["ExpProduct"], "postprocess": id},
    {"name": "ExpProduct", "symbols": ["ExpProduct", "_", {"literal":"*"}, "_", "ExpSum"], "postprocess": tryCalculate},
    {"name": "ExpProduct", "symbols": ["ExpProduct", "_", {"literal":"/"}, "_", "ExpSum"], "postprocess": tryCalculate},
    {"name": "ExpProduct", "symbols": ["ExpProduct", "_", {"literal":"%"}, "_", "ExpSum"], "postprocess": tryCalculate},
    {"name": "ExpProduct", "symbols": [{"literal":"!"}, "_", "ExpSum"], "postprocess": d => tryCalculate([d[2],, d[0]])},
    {"name": "ExpProduct", "symbols": ["Atom"], "postprocess": id},
    {"name": "Atom", "symbols": [], "postprocess": id},
    {"name": "Atom", "symbols": [(lexer.has("BLOCKIDEN") ? {type: "BLOCKIDEN"} : BLOCKIDEN)], "postprocess":  ([name]) => ({
            type: "FunctionCall",
            name: name.value,
            args: [],
            cases: [],
            line: name.line,
            col: name.col
        }) },
    {"name": "Atom", "symbols": [(lexer.has("IDEN") ? {type: "IDEN"} : IDEN)], "postprocess":  ([name]) => ({
            type: "Literal",
            name: name.value,
            line: name.line,
            col: name.col
        }) },
    {"name": "Atom", "symbols": ["Constant"], "postprocess": id},
    {"name": "Atom", "symbols": ["Parenthesized"], "postprocess": id},
    {"name": "Atom", "symbols": ["FunctionCall"], "postprocess": id},
    {"name": "ListConstant", "symbols": [{"literal":"["}, "_", "ListItems", "_", {"literal":"]"}], "postprocess": d => d[2]},
    {"name": "ListConstant", "symbols": [{"literal":"["}, "_", {"literal":"]"}], "postprocess": d => []},
    {"name": "ListItems", "symbols": ["Constant"], "postprocess": d => [d[0]]},
    {"name": "ListItems", "symbols": ["ListItems", "_", {"literal":","}, "_", "Constant"], "postprocess":  d => {
            const r = d[0].slice()
            r.push(d[4])
            return r
        } },
    {"name": "Constant", "symbols": [(lexer.has("STRING") ? {type: "STRING"} : STRING)], "postprocess":  ([d]) => ({
            type: "Constant",
            value: d.value,
            line: d.line,
            col: d.col
        }) },
    {"name": "Constant", "symbols": [(lexer.has("COLOR") ? {type: "COLOR"} : COLOR)], "postprocess":  ([d], l ,reject) => {
            if ([3, 4, 6, 8].includes(d[1].length - 1)) {
                return {
                    type: "Constant",
                    value: d.value,
                    line: d.line,
                    col: d.col
                }
            }
            return reject
        } },
    {"name": "Constant", "symbols": [(lexer.has("NUMBER") ? {type: "NUMBER"} : NUMBER)], "postprocess":  ([d]) => ({
            type: "Constant",
            value: d.value,
            line: d.line,
            col: d.col
        }) },
    {"name": "_", "symbols": [], "postprocess": null},
    {"name": "_", "symbols": ["_", "Comment", "_"], "postprocess": d => d[1]},
    {"name": "_", "symbols": [(lexer.has("SPACE") ? {type: "SPACE"} : SPACE)], "postprocess": null},
    {"name": "__", "symbols": ["_", "Comment", "_"], "postprocess": id},
    {"name": "__", "symbols": [(lexer.has("SPACE") ? {type: "SPACE"} : SPACE)], "postprocess": null},
    {"name": "Comment", "symbols": [(lexer.has("COMMENT") ? {type: "COMMENT"} : COMMENT)], "postprocess":  d => ({
            type: "Comment",
            message: d[0].value,
            line: d[0].line,
            col: d[0].col
        }) }
]
  , ParserStart: "Program"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
