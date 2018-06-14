import * as CryptoJS from "crypto-js";

class Block {
    static calculateBlockHash = (
        index: number,
        previousHash: string,
        timestamp: number,
        data: string
      ): string =>
        CryptoJS.SHA256(index + previousHash + timestamp + data).toString();

    static validateStructure = (aBlock: Block): boolean =>
        typeof aBlock.index === "number" &&
        typeof aBlock.hash === "string" &&
        typeof aBlock.previousHash === "string" &&
        typeof aBlock.timestamp === "number" &&
        typeof aBlock.data === "string";

    public index : number;
    public hash : string;
    public previousHash : string;
    public data : string;
    public timestamp : number;
    
    constructor(
        index: number,
        hash: string,
        previousHash: string,
        data: string,
        timestamp: number
      ) {
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timestamp;
      }
}

const genesisBlock: Block = new Block(0, "2020202020", "", "Hello", 123456);

let blockchain: [Block] = [genesisBlock];

const getBlockChain = (): Block[] => blockchain;

// 가장 최근 block값 가져오기
const getLatestBlock = (): Block => blockchain[blockchain.length - 1]; 

const getNewTimeStamp = (): number => Math.round(new Date().getTime() / 1000);

const createNewBlock = (data: string) : Block => { 
    const previousBlock : Block = getLatestBlock();
    const newIndex : number = previousBlock.index + 1;
    const newTimestamp : number = getNewTimeStamp();
    const newHash : string = Block.calculateBlockHash(newIndex, previousBlock.hash, newTimestamp, data );
    const newBlock: Block = new Block(
        newIndex,
        newHash,
        previousBlock.hash,
        data,
        newTimestamp
    );

    addBlock(newBlock);

    return newBlock;
}

const getHashforBlock = (aBlock: Block): string =>
    Block.calculateBlockHash(
    aBlock.index,
    aBlock.previousHash,
    aBlock.timestamp,
    aBlock.data
);

// #블록체인의 기바은 블록들이 자신의 전 블록으로의 링크가 존재함. 체크하는 함수
const isBlockValid = (candidateBlock:Block, previousBlock: Block): boolean => {
    if(!Block.validateStructure(previousBlock))  // 앞선 블록의 데이터가 유효한지 체크 
    {
        return false;
    } else if ( previousBlock.index + 1 !== candidateBlock.index ) {
        return false;
    } else if ( previousBlock.hash !== candidateBlock.previousHash) {
        return false;
    } else if ( getHashforBlock(candidateBlock) !== candidateBlock.hash) {
        return false;
    } else {
        return true;
    }
};

const addBlock = (candidateBlock: Block) : void => {
    if ( isBlockValid(candidateBlock, getLatestBlock()) ) {
        blockchain.push(candidateBlock);
    } else {
        console.log('addBlock false');
    }
}

// console.log(getLatestBlock());
createNewBlock("secondBlock");
createNewBlock("thirdBlock");
// createNewBlock("forthBlock");

console.log(blockchain);

export {};