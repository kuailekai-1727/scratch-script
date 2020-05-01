const uid = require('./uid')
const CoreBlocks = require('./blocks/index')
const InputType = require('./inputType')

const get = (obj, path, defaultValue = undefined) => {
    const travel = regexp =>
        String.prototype.split
            .call(path, regexp)
            .filter(Boolean)
            .reduce((res, key) => (res !== null && res !== undefined ? res[key] : res), obj)
    const result = travel(/[,[\]]+?/) || travel(/[,[\].]+?/)
    return result === undefined || result === obj ? defaultValue : result
}

function blocksHelper (blocks) {
    const _blocks = blocks
    return {
        saveBlock (block) {
            const id = uid()
            _blocks[id] = block
            return id
        },
        getTopBlock (block) {
            let temp = _blocks[block.parent]
            while (temp.parent !== null) {
                temp = _blocks[temp.parent]
            }
            return temp
        },
        newBlock () {
            const block = {
                opcode: '',
                next: null,
                parent: null,
                inputs: {},
                fields: {},
                shadow: false,
                topLevel: false,
                x: 0,
                y: 0
            }
            this.saveBlock(block)
            return block
        }
    }
}

const ShadowType = {
    /**
     * 1
     */
    SameShadow: 1,
    /**
     * 2
     */
    NoShadow: 2,
    /**
     * 3
     */
    DifferentShadow: 3
}

/**
 * Generate blocks object from the ast.
 * @param {any} ast The AST object that generated by parser.
 * @returns {any} The block object.
 */
function generator (
    ast,
    blocks = {},
    askForModule = () => { throw new Error('This caller doesn\'t supplied module resolve function.') }
) {
    const helper = blocksHelper(blocks)
    function generate (node, parentId = null) {
        // console.log(node)
        switch (node.type) {
        case 'UsingStatement':
        {
            return askForModule()
        }
        case 'FunctionDefintion':
        {
            node.id = uid()
        }
        case 'EventExpression':
        {
        }
        case 'LoopExpression':
        {
        }
        case 'ConditionExpression':
        {
        }
        case 'FunctionCall':
        {
        }
        case 'Literal':
        {
        }
        }
    }
    // Give variables a uid for indexing.
    ast.variables.forEach(v => { v.id = uid() })
    ast.procedures.forEach((node) => { generate(node) })
    ast.listeners.forEach((node) => { generate(node) })
    return {
        blocks,
        ast
    }
}

module.exports = generator