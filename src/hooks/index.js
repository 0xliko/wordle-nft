import { ethers } from 'ethers';
import { Contract } from '@ethersproject/contracts';
import { useContractCall, useContractFunction } from '@usedapp/core';
import SisyphusABI from '../abi/WordleABI.json';
import { WordleContractAddress } from '../contracts';

const WordleContractInterface = new ethers.utils.Interface(SisyphusABI);
const wordleContract = new Contract(
  WordleContractAddress,
  WordleContractInterface
);
export const usePrice = () => {
  const [price] =
    useContractCall({
      abi: WordleContractInterface,
      address: WordleContractAddress,
      method: 'PRICE',
      args: [],
    }) ?? [];

  return price;
};
export const useTotalSupply = () => {


  const result = useContractCall({
      abi: WordleContractInterface,
      address: WordleContractAddress,
      method: 'totalSupply',
      args: [],
    }) ?? [];
  console.log(result,"")
  const [totalSupply] = result;
  return totalSupply;
};
export const useBalanceOf = (address) => {
  const [balanceOf] =
    useContractCall(
      address && {
        abi: WordleContractInterface,
        address: WordleContractAddress,
        method: 'balanceOf',
        args: [address],
      }
    ) ?? [];

  return balanceOf;
};
export const useMint = () => {
    const { state, send, event } = useContractFunction(
        wordleContract,
        'mint',
        {}
    );
    return { state, send, event };
};

