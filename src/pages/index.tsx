import type { NextPageWithLayout } from '@/types';
import { NextSeo } from 'next-seo';
import DashboardLayout from '@/layouts/dashboard/_dashboard';
import Button from '@/components/ui/button';
import routes from '@/config/routes';
import { WalletMultiButton } from '@demox-labs/aleo-wallet-adapter-reactui';

type SectionProps = {
  title: string;
  bgColor: string;
  sectionWidth?: string;
};

export function Section({
  title,
  bgColor,
  children,
  sectionWidth,
}: React.PropsWithChildren<SectionProps>) {
  return (
    <div className="mb-3">
      <div className={`rounded-lg ${bgColor}`}>
        <div className="relative flex items-center justify-between gap-4 p-4">
          <div className={`items-center ltr:mr-6 rtl:ml-6 ${sectionWidth}`}>
            <div>
              <span className="block text-xs font-medium uppercase tracking-wider text-gray-900 dark:text-white sm:text-sm">
                {title}
              </span>
              <span className="mt-1 hidden text-xs tracking-tighter text-gray-600 dark:text-gray-400 sm:block">
                {children}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const GettingStartedPage: NextPageWithLayout = () => {
  return (
    <>
      <NextSeo
        title="aleo.build"
        description="Get started using Aleo!"
      />
      <div className="mx-auto w-full px-4 pt-8 pb-14 sm:px-6 sm:pb-20 sm:pt-12 lg:px-8 xl:px-10 2xl:px-0">
        <h2 className="mb-6 text-lg font-medium uppercase tracking-wider text-gray-900 dark:text-white sm:mb-10 sm:text-2xl">
          Getting Started || THIS IS NOT AN OFFICIAL ALEO DAPP
        </h2>

        <Section
          title="STEP 1 - GET A WALLET"
          bgColor="bg-white shadow-card dark:bg-light-dark"
        >
          &bull; Download and Install {' '}
          
          <a href="https://link.leo.app/chromestore" >Leo Wallet</a>
        </Section>
        <Section title="STEP 2 - CREATE A NEW WALLET ACCOUNT" bgColor="">
          &bull; Import your Private Key if needed
        </Section>
        <Section
          title="STEP 3 - CONNECT YOUR WALLET"
          bgColor="bg-white shadow-card dark:bg-light-dark"
        >

          <WalletMultiButton className="bg-[#B2B6C7]" />
        </Section>
        <Section title="" bgColor="">

        <a href="https://quiz.aleo.build/">
          <Button>Quiz DApp</Button>
        </a>
        <a> </a>
        <a href={`${routes.mint}`}>
          <Button>Mint DApp</Button>
        </a>
        
        </Section>
      </div>
    </>
  );
};

GettingStartedPage.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default GettingStartedPage;