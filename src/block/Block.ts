import crypto from 'crypto';

export class Block implements BlockShape {
    public hash: string;
    constructor(
        public prevHash: string,
        public height: number,
        public data: string
    ) {
        this.hash = Block.calculateHash(prevHash, height, data);
    }

    static calculateHash = (prevHash: string, height: number, data: string): string => {
        return crypto.createHash('sha256')
                     .update(`${prevHash}${height}${data}`)
                     .digest('hex');
    }
}