import { useState, FormEvent, SyntheticEvent } from 'react';
import type { NextPageWithLayout } from '@/types';
import { NextSeo } from 'next-seo';
import DashboardLayout from '@/layouts/dashboard/_dashboard';
import Trade from '@/components/ui/trade';
import { useWallet } from '@demox-labs/aleo-wallet-adapter-react';
import { LeoWalletAdapter } from '@demox-labs/aleo-wallet-adapter-leo';
import { Check } from '@/components/icons/check';
import Button from '@/components/ui/button';
import { Section } from '.';
import {
  Transaction,
  WalletAdapterNetwork,
  WalletNotConnectedError,
} from '@demox-labs/aleo-wallet-adapter-base';

const mintPage: NextPageWithLayout = () => {
  const THE_LIOLIK_PROGRAM_NAME = 'a.aleo';

  const { wallet, publicKey, requestRecords} = useWallet();

  // Bake Cookie State
  let [bakeCookieToAddress, setBakeCookieToAddress] = useState('');
  let [cookieType, setCookieType] = useState<number | undefined>();
  let [cookieType1, setCookieType1] = useState<number | undefined>();
  
  let [bakeCookieTxPayload, setBakeCookieTxPayload] = useState<string>('');

  // Eat Cookie State
  let [eatCookieRecord, setEatCookieRecord] = useState<string>('');
  let [eatCookieTxPayload, setEatCookieTxPayload] = useState<string>('');




  const handleBakeCookieSubmit = async (event: any) => {
    event.preventDefault();
    if (!publicKey) throw new WalletNotConnectedError();

    const inputs = [
      bakeCookieToAddress,
      `${cookieType}u64`,
      
    ];

    const aleoTransaction = Transaction.createTransaction(
      publicKey,
      WalletAdapterNetwork.Testnet,
      THE_LIOLIK_PROGRAM_NAME,
      'mint_public',
      inputs,
      'https://provers.s3.us-west-2.amazonaws.com/mint_public.prover'
    );

    console.log(aleoTransaction);

    const txPayload =
      (await (wallet?.adapter as LeoWalletAdapter).requestTransaction(
        aleoTransaction
      )) || '';
    if (event.target?.elements[0]?.value) {
      event.target.elements[0].value = '';
    }
    setBakeCookieTxPayload('Check your wallet to see the token transaction');
  };

  const handleEatCookieSubmit = async (event: any) => {
    event.preventDefault();
    if (!publicKey) throw new WalletNotConnectedError();
    const records = await requestRecords!('a.aleo');
    const recordToSpend = records.filter(rec => !rec.spent)[0];

    const inputs = [recordToSpend, eatCookieRecord, `${cookieType1}u64`];
    

    const aleoTransaction = Transaction.createTransaction(
      publicKey,
      WalletAdapterNetwork.Testnet,
      THE_LIOLIK_PROGRAM_NAME,
      'transfer_public',
      inputs,
      'https://provers.s3.us-west-2.amazonaws.com/transfer_public.prover'
    );

    const txPayload =
    (await (wallet?.adapter as LeoWalletAdapter).requestTransaction(
      aleoTransaction
    )) || '';
  if (event.target?.elements[0]?.value) {
    event.target.elements[0].value = '';
  }
    setEatCookieTxPayload(
      `Check your wallet to see the transaction. \n 
      Note: Spent status may take awhile to update.`
    );
  };

  const handleToAddressChange = (event: any) => {
    event.preventDefault();
    setBakeCookieToAddress(event.currentTarget.value);
  };
  const handleCookieTypeChange = (event: any) => {
    event.preventDefault();
    setCookieType(event.currentTarget.value);
  };
  const handleCookieType1Change = (event: any) => {
    event.preventDefault();
    setCookieType1(event.currentTarget.value);
  };
  
  

  const handleEatCookieRecordChange = (event: any) => {
    event.preventDefault();
    setEatCookieRecord(event.currentTarget.value);
  };

  return (
    <>
      <NextSeo
        title="Mint a-Token"
        description="Mint and transfer a-Token"
      />
      <div className="mx-auto w-full px-4 pt-8 pb-14 sm:px-6 sm:pb-20 sm:pt-12 lg:px-8 xl:px-10 2xl:px-0">
        <h2 className="mb-2 text-lg font-medium uppercase tracking-wider text-gray-900 dark:text-white sm:mb-6 sm:text-2xl">
          Mint and transfer the a-Token
        </h2>
        <p className="mb-6 hidden w-1/2 text-xs tracking-tighter text-gray-600 dark:text-gray-400 sm:block">
           <br />

        </p>
        <Section
          title="Mint a-Token"
          bgColor="bg-white shadow-card dark:bg-light-dark"
          sectionWidth="w-1/2"
        >
          <form
            className="relative flex w-full flex-col rounded-full md:w-auto"
            noValidate
            role="search"
            onSubmit={async (event: SyntheticEvent<HTMLFormElement>) => {
              await handleBakeCookieSubmit(event);
            }}
          >
            <p className="mt-6">Address to mint the a-Token: </p>
            <label className="flex w-full items-center py-4">
              <input
                className="h-11 w-full appearance-none rounded-lg border-2 border-gray-200 bg-transparent py-1 text-sm tracking-tighter text-gray-900 outline-none transition-all placeholder:text-gray-600 focus:border-gray-900 ltr:pr-5 ltr:pl-10 rtl:pr-10 dark:border-gray-600 dark:text-white dark:placeholder:text-gray-500 dark:focus:border-gray-500"
                placeholder="Your wallet address"
                autoComplete="off"
                onChange={(event: FormEvent<Element>) =>
                  handleToAddressChange(event)
                }
                value={bakeCookieToAddress}
              />
              <span className="pointer-events-none absolute flex h-full w-8 cursor-pointer items-center justify-center text-gray-600 hover:text-gray-900 ltr:left-0 ltr:pl-2 rtl:right-0 rtl:pr-2 dark:text-gray-500 sm:ltr:pl-3 sm:rtl:pr-3">
                <Check className="h-4 w-4" />
              </span>
            </label>
            <p className="mt-4">Token quantity </p>
            <label className="flex w-full items-center py-4">
              <input
                className="h-11 w-full appearance-none rounded-lg border-2 border-gray-200 bg-transparent py-1 text-sm tracking-tighter text-gray-900 outline-none transition-all placeholder:text-gray-600 focus:border-gray-900 ltr:pr-5 ltr:pl-10 rtl:pr-10 dark:border-gray-600 dark:text-white dark:placeholder:text-gray-500 dark:focus:border-gray-500"
                placeholder="1-100"
                autoComplete="off"
                onChange={(event: FormEvent<Element>) =>
                  handleCookieTypeChange(event)
                }
                value={cookieType}
              />
              <span className="pointer-events-none absolute flex h-full w-8 cursor-pointer items-center justify-center text-gray-600 hover:text-gray-900 ltr:left-0 ltr:pl-2 rtl:right-0 rtl:pr-2 dark:text-gray-500 sm:ltr:pl-3 sm:rtl:pr-3">
                <Check className="h-4 w-4" />
              </span>
            </label>

            <div className="flex items-center justify-center">
              <Button
                disabled={!publicKey || bakeCookieToAddress.length < 1}
                type="submit"
                color="white"
                className="shadow-card dark:bg-gray-700 md:h-10 md:px-5 xl:h-12 xl:px-7"
              >
                {!publicKey ? 'Connect Your Wallet' : 'Submit'}
              </Button>
            </div>
          </form>
          {bakeCookieTxPayload && (
            <div className="mt-5 inline-flex w-full items-center rounded-full bg-white shadow-card dark:bg-light-dark xl:mt-6">
              <div className="inline-flex h-full shrink-0 grow-0 items-center rounded-full px-4 text-xs text-white sm:text-sm">
                Check your wallet to see the transaction
              </div>
            </div>
          )}
        </Section>

        <Section
          title="Transfer a-Token"
          bgColor="bg-white shadow-card dark:bg-light-dark"
          sectionWidth="w-1/2"
        >
          <form
            className="relative flex w-full flex-col rounded-full md:w-auto"
            noValidate
            role="search"
            onSubmit={async (event: SyntheticEvent<HTMLFormElement>) => {
              await handleEatCookieSubmit(event);
            }}
          >
            <p className="mt-6">Address to transfer the a-Token: </p>
            <label className="flex w-full items-center py-4">
              <input
                className="h-11 w-full appearance-none rounded-lg border-2 border-gray-200 bg-transparent py-1 text-sm tracking-tighter text-gray-900 outline-none transition-all placeholder:text-gray-600 focus:border-gray-900 ltr:pr-5 ltr:pl-10 rtl:pr-10 dark:border-gray-600 dark:text-white dark:placeholder:text-gray-500 dark:focus:border-gray-500"
                placeholder="Recipient address"
                autoComplete="off"
                onChange={(event: FormEvent<Element>) =>
                  handleEatCookieRecordChange(event)
                }
                value={eatCookieRecord}
              />
              <span className="pointer-events-none absolute flex h-full w-8 cursor-pointer items-center justify-center text-gray-600 hover:text-gray-900 ltr:left-0 ltr:pl-2 rtl:right-0 rtl:pr-2 dark:text-gray-500 sm:ltr:pl-3 sm:rtl:pr-3">
                <Check className="h-4 w-4" />
              </span>

            </label>

              <p className="mt-4">Token quantity </p>
            <label className="flex w-full items-center py-4">
              <input
                className="h-11 w-full appearance-none rounded-lg border-2 border-gray-200 bg-transparent py-1 text-sm tracking-tighter text-gray-900 outline-none transition-all placeholder:text-gray-600 focus:border-gray-900 ltr:pr-5 ltr:pl-10 rtl:pr-10 dark:border-gray-600 dark:text-white dark:placeholder:text-gray-500 dark:focus:border-gray-500"
                placeholder="1-100"
                autoComplete="off"
                onChange={(event: FormEvent<Element>) =>
                  handleCookieType1Change(event)
                }
                value={cookieType1}
              />
              <span className="pointer-events-none absolute flex h-full w-8 cursor-pointer items-center justify-center text-gray-600 hover:text-gray-900 ltr:left-0 ltr:pl-2 rtl:right-0 rtl:pr-2 dark:text-gray-500 sm:ltr:pl-3 sm:rtl:pr-3">
                <Check className="h-4 w-4" />
              </span>
            
            </label>
            <div className="flex items-center justify-center">
              <Button
                disabled={!publicKey || eatCookieRecord.length < 1}
                type="submit"
                color="white"
                className="shadow-card dark:bg-gray-700 md:h-10 md:px-5 xl:h-12 xl:px-7"
              >
                {!publicKey ? 'Connect Your Wallet' : 'Submit'}
              </Button>
            </div>
          </form>
          {eatCookieTxPayload && (
            <div className="mt-5 inline-flex w-full items-center rounded-full bg-white shadow-card dark:bg-light-dark xl:mt-6">
              <div className="inline-flex h-full shrink-0 grow-0 items-center rounded-full px-4 text-xs text-white sm:text-sm">
                {eatCookieTxPayload}
              </div>
            </div>
          )}
        </Section>
      </div>
    </>
  );
};

mintPage.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default mintPage;
