
const InputType = require('../inputType')
const BlockType = require('../blockType')

module.exports = {
    name: 'Looks',
    id: 'looks',
    blocks: [{
        name: 'sayFor',
        opcode: 'looks_sayforsecs',
        type: BlockType.Block,
        args: [{
            name: 'MESSAGE',
            type: InputType.String
        }, {
            name: 'SECS',
            type: InputType.Number
        }]
    }, {
        name: 'say',
        opcode: 'looks_say',
        type: BlockType.Block,
        args: [{
            name: 'MESSAGE',
            type: InputType.String
        }]
    }, {
        name: 'thinkFor',
        opcode: 'looks_thinkforsecs',
        type: BlockType.Block,
        args: [{
            name: 'MESSAGE',
            type: InputType.String
        }, {
            name: 'SECS',
            type: InputType.Number
        }]
    }, {
        name: 'think',
        opcode: 'looks_think',
        type: BlockType.Block,
        args: [{
            name: 'MESSAGE',
            type: InputType.String
        }]
    }, {
        name: 'switchCostume',
        opcode: 'looks_switchcostumeto',
        type: BlockType.Block,
        args: [{
            name: 'COSTUME',
            type: InputType.Menu,
            menuOpcode: 'looks_costume'
        }]
    }, {
        name: 'nextCostume',
        opcode: 'looks_nextcostume',
        type: BlockType.Block
    }, {
        name: 'switchbackdropto',
        opcode: 'looks_switchbackdropto',
        type: BlockType.Block,
        args: [{
            name: 'BACKDROP',
            type: InputType.Menu,
            menuOpcode: 'looks_backdrops'
        }]
    }, {
        name: 'nextBackdrop',
        opcode: 'looks_nextbackdrop',
        type: BlockType.Block
    }, {
        name: 'addSize',
        opcode: 'looks_changesizeby',
        type: BlockType.Block,
        args: [{
            name: 'CHANGE',
            type: InputType.Number
        }]
    }, {
        name: 'setSize',
        opcode: 'looks_setsizeto',
        type: BlockType.Block,
        args: [{
            name: 'SIZE',
            type: InputType.Number
        }]
    }, {
        name: 'changeEffect',
        opcode: 'looks_changeeffectby',
        type: BlockType.Block,
        args: [{
            name: 'CHANGE',
            type: InputType.Number
        }]
    }, {
        name: 'setEffect',
        opcode: 'looks_seteffectto',
        type: BlockType.Block,
        args: [{
            name: 'VALUE',
            type: InputType.Number
        }]
    }, {
        name: 'clearGraphicEffects',
        opcode: 'looks_cleargraphiceffects',
        type: BlockType.Block
    }, {
        name: 'show',
        opcode: 'looks_show',
        type: BlockType.Block,
        args: [{
            name: 'NUM',
            type: InputType.Menu,
            menu: i => i,
            menuOpcode: 'math_integer'
        }]
    }, {
        name: 'hide',
        opcode: 'looks_hide',
        type: BlockType.Block,
        args: [{
            name: 'NUM',
            type: InputType.Menu,
            menu: i => i,
            menuOpcode: 'math_integer'
        }]
    }, {
        name: 'gotofrontback',
        opcode: 'looks_gotofrontback',
        type: BlockType.Block,
        args: [{
            name: 'NUM',
            type: InputType.Number
        }]
    }, {
        name: 'goforwardbackwardlayers',
        opcode: 'looks_goforwardbackwardlayers',
        type: BlockType.Block,
        args: [{
            name: 'NUM',
            type: InputType.Menu,
            menu: i => i,
            menuOpcode: 'math_integer'
        }]
    }, {
        name: 'costumenumbername',
        opcode: 'looks_costumenumbername',
        type: BlockType.Block,
        args: []
    }, {
        name: 'backdropnumbername',
        opcode: 'looks_backdropnumbername',
        type: BlockType.ReporterBlock,
        args: []
    }, {
        name: 'size',
        opcode: 'looks_size',
        type: BlockType.ReporterBlock,
        args: []
    }
    ]
}
