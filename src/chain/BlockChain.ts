import { Block } from '../block/Block';

export class BlockChain {
    private blocks: Block[];
    constructor() {
        this.blocks = [];
    }

    public addBlock(data: string): void {
        const prevBlock = this.blocks[this.blocks.length - 1];
        const prevHash = prevBlock ? prevBlock.hash : '0';
        const height = prevBlock ? prevBlock.height + 1 : 0;
        const newBlock = new Block(prevHash, height, data);
        this.blocks.push(newBlock);
    }

    public getBlocks(): Block[] {
        return this.blocks;
    }
}

