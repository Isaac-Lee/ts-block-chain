import { BlockChain } from './chain/BlockChain';

const blockchain = new BlockChain();
blockchain.addBlock('First block');
blockchain.addBlock('Second block');
blockchain.addBlock('Third block');
blockchain.addBlock('Fourth block');

console.log(blockchain.getBlocks());