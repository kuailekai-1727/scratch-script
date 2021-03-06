
const InputType = require('../inputType')
const BlockType = require('../blockType')

module.exports = {
    name: 'Operators',
    id: 'math',
    blocks: [{
        name: 'add',
        opcode: 'operator_add',
        type: BlockType.ReporterBlock,
        args: [{
            name: 'NUM1',
            type: InputType.Number
        }, {
            name: 'NUM2',
            type: InputType.Number
        }]
    }, {
        name: 'subtract',
        opcode: 'operator_subtract',
        type: BlockType.ReporterBlock,
        args: [{
            name: 'NUM1',
            type: InputType.Number
        }, {
            name: 'NUM2',
            type: InputType.Number
        }]
    }, {
        name: 'multiply',
        opcode: 'operator_multiply',
        type: BlockType.ReporterBlock,
        args: [{
            name: 'NUM1',
            type: InputType.Number
        }, {
            name: 'NUM2',
            type: InputType.Number
        }]
    }, {
        name: 'divide',
        opcode: 'operator_divide',
        type: BlockType.ReporterBlock,
        args: [{
            name: 'NUM1',
            type: InputType.Number
        }, {
            name: 'NUM2',
            type: InputType.Number
        }]
    }, {
        name: 'random',
        opcode: 'operator_random',
        type: BlockType.ReporterBlock,
        args: [{
            name: 'FROM',
            type: InputType.Number
        }, {
            name: 'TO',
            type: InputType.Number
        }]
    }, {
        name: 'gt',
        opcode: 'operator_gt',
        type: BlockType.BooleanReporter,
        args: [{
            name: 'OPERAND1',
            type: InputType.String
        }, {
            name: 'OPERAND2',
            type: InputType.String
        }]
    }, {
        name: 'lt',
        opcode: 'operator_lt',
        type: BlockType.BooleanReporter,
        args: [{
            name: 'OPERAND1',
            type: InputType.String
        }, {
            name: 'OPERAND2',
            type: InputType.String
        }]
    }, {
        name: 'equals',
        opcode: 'operator_equals',
        type: BlockType.BooleanReporter,
        args: [{
            name: 'OPERAND1',
            type: InputType.String
        }, {
            name: 'OPERAND2',
            type: InputType.String
        }]
    }, {
        name: 'and',
        opcode: 'operator_and',
        type: BlockType.BooleanReporter,
        args: [{
            name: 'OPERAND1',
            type: InputType.Boolean
        }, {
            name: 'OPERAND2',
            type: InputType.Boolean
        }]
    }, {
        name: 'or',
        opcode: 'operator_or',
        type: BlockType.BooleanReporter,
        args: [{
            name: 'OPERAND1',
            type: InputType.Boolean
        }, {
            name: 'OPERAND2',
            type: InputType.Boolean
        }]
    }, {
        name: 'not',
        opcode: 'operator_not',
        type: BlockType.BooleanReporter,
        args: [{
            name: 'OPERAND',
            type: InputType.Boolean
        }]
    }, {
        name: 'join',
        opcode: 'operator_join',
        type: BlockType.ReporterBlock,
        args: [{
            name: 'STRING1',
            type: InputType.String
        }, {
            name: 'STRING2',
            type: InputType.String
        }]
    }, {
        name: 'letterOf',
        opcode: 'operator_letter_of',
        type: BlockType.ReporterBlock,
        args: [{
            name: 'LETTER',
            type: InputType.Integer
        }, {
            name: 'STRING',
            type: InputType.String
        }]
    }, {
        name: 'length',
        opcode: 'operator_length',
        type: BlockType.ReporterBlock,
        args: [{
            name: 'STRING',
            type: InputType.String
        }]
    }, {
        name: 'contains',
        opcode: 'operator_contains',
        type: BlockType.BooleanReporter,
        args: [{
            name: 'STRING1',
            type: InputType.String
        }, {
            name: 'STRING2',
            type: InputType.String
        }]
    }, {
        name: 'mod',
        opcode: 'operator_mod',
        type: BlockType.ReporterBlock,
        args: [{
            name: 'NUM1',
            type: InputType.Number
        }, {
            name: 'NUM2',
            type: InputType.Number
        }]
    }, {
        name: 'round',
        opcode: 'operator_round',
        type: BlockType.ReporterBlock,
        args: [{
            name: 'NUM',
            type: InputType.Number
        }]
    }, {
        name: 'mathop',
        opcode: 'operator_mathop',
        type: BlockType.ReporterBlock,
        args: [{
            name: 'OPERATOR',
            type: InputType.Menu
        }, {
            name: 'NUM',
            type: InputType.Number
        }]
    }, {
        name: 'abs',
        opcode: 'operator_mathop',
        type: BlockType.ReporterBlock,
        args: [{
            name: 'OPERATOR',
            type: InputType.MenuConstant,
            value: 'abs'
        }, {
            name: 'NUM',
            type: InputType.Number
        }]
    }, {
        name: 'floor',
        opcode: 'operator_mathop',
        type: BlockType.ReporterBlock,
        args: [{
            name: 'OPERATOR',
            type: InputType.MenuConstant,
            value: 'floor'
        }, {
            name: 'NUM',
            type: InputType.Number
        }]
    }, {
        name: 'ceil',
        opcode: 'operator_mathop',
        type: BlockType.ReporterBlock,
        args: [{
            name: 'OPERATOR',
            type: InputType.MenuConstant,
            value: 'ceiling'
        }, {
            name: 'NUM',
            type: InputType.Number
        }]
    }, {
        name: 'sqrt',
        opcode: 'operator_mathop',
        type: BlockType.ReporterBlock,
        args: [{
            name: 'OPERATOR',
            type: InputType.MenuConstant,
            value: 'sqrt'
        }, {
            name: 'NUM',
            type: InputType.Number
        }]
    }, {
        name: 'sin',
        opcode: 'operator_mathop',
        type: BlockType.ReporterBlock,
        args: [{
            name: 'OPERATOR',
            type: InputType.MenuConstant,
            value: 'sin'
        }, {
            name: 'NUM',
            type: InputType.Number
        }]
    }, {
        name: 'cos',
        opcode: 'operator_mathop',
        type: BlockType.ReporterBlock,
        args: [{
            name: 'OPERATOR',
            type: InputType.MenuConstant,
            value: 'cos'
        }, {
            name: 'NUM',
            type: InputType.Number
        }]
    }, {
        name: 'tan',
        opcode: 'operator_mathop',
        type: BlockType.ReporterBlock,
        args: [{
            name: 'OPERATOR',
            type: InputType.MenuConstant,
            value: 'tan'
        }, {
            name: 'NUM',
            type: InputType.Number
        }]
    }, {
        name: 'atan',
        opcode: 'operator_mathop',
        type: BlockType.ReporterBlock,
        args: [{
            name: 'OPERATOR',
            type: InputType.MenuConstant,
            value: 'atan'
        }, {
            name: 'NUM',
            type: InputType.Number
        }]
    }, {
        name: 'ln',
        opcode: 'operator_mathop',
        type: BlockType.ReporterBlock,
        args: [{
            name: 'OPERATOR',
            type: InputType.MenuConstant,
            value: 'ln'
        }, {
            name: 'NUM',
            type: InputType.Number
        }]
    }, {
        name: 'log',
        opcode: 'operator_mathop',
        type: BlockType.ReporterBlock,
        args: [{
            name: 'OPERATOR',
            type: InputType.MenuConstant,
            value: 'log'
        }, {
            name: 'NUM',
            type: InputType.Number
        }]
    }, {
        name: 'e',
        opcode: 'operator_mathop',
        type: BlockType.ReporterBlock,
        args: [{
            name: 'OPERATOR',
            type: InputType.MenuConstant,
            value: 'e ^'
        }, {
            name: 'NUM',
            type: InputType.Number
        }]
    }, {
        name: 'powerOfTen',
        opcode: 'operator_mathop',
        type: BlockType.ReporterBlock,
        args: [{
            name: 'OPERATOR',
            type: InputType.MenuConstant,
            value: '10 ^'
        }, {
            name: 'NUM',
            type: InputType.Number
        }]
    }]
}
