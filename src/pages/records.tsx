import type { NextPageWithLayout } from '@/types';
import { NextSeo } from 'next-seo';
import DashboardLayout from '@/layouts/dashboard/_dashboard';
import Button from '@/components/ui/button';
import routes from '@/config/routes';
import { WalletMultiButton } from '@demox-labs/aleo-wallet-adapter-reactui';

type SectionProps = {
  title: string;
  bgColor: string;
};

function Section({
  title,
  bgColor,
  children,
}: React.PropsWithChildren<SectionProps>) {
  return (
    <div className="mb-3">
      <div className={`rounded-lg ${bgColor}`}>
        <div className="relative flex items-center justify-between gap-4 p-4">
          <div className="flex items-center ltr:mr-6 rtl:ml-6">
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

const RecordsPage: NextPageWithLayout = () => {
  return (
    <>
      <NextSeo
        title="Start Building on Aleo"
        description="Build on Aleo tutorials"
      />
      <div className="mx-auto w-full px-4 pt-8 pb-14 sm:px-6 sm:pb-20 sm:pt-12 lg:px-8 xl:px-10 2xl:px-0">
        <h2 className="mb-6 text-lg font-medium uppercase tracking-wider text-gray-900 dark:text-white sm:mb-10 sm:text-2xl">
          Start Building
        </h2>
        <Section
          title="How to build Quiz DApp | testnet_3"
          bgColor="transparent"
        >
          &bull; {' '}
          <a href="https://github.com/liolikus/QuizGame">English</a>
          &bull; {' '}
          <a href="https://github.com/liolikus/QuizGame/blob/main/README_RU.md">Russian</a>
        </Section>
        <Section
          title="how to use this site | testnet_3"
          bgColor="bg-white shadow-card dark:bg-light-dark"
        >
          &bull; {' '}
          <a href="https://medium.com/@alex.brunko/my-first-aleo-dapp-creating-onchain-activities-in-tesnet-3-1abc11554e9f">English</a>
          &bull; {' '}
          <a href="https://medium.com/@alex.brunko/%D0%BF%D0%B5%D1%80%D0%B2%D0%BE%D0%B5-%D0%BF%D1%80%D0%B8%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5-%D0%BD%D0%B0-%D0%B0%D0%BB%D0%B5%D0%BE-%D0%B8-%D0%B4%D0%BE%D1%81%D1%82%D1%83%D0%BF%D0%BD%D1%8B%D0%B5-%D0%B0%D0%BA%D1%82%D0%B8%D0%B2%D0%BD%D0%BE%D1%81%D1%82%D0%B8-%D0%B2-%D1%82%D0%B5%D1%81%D0%BD%D0%B5%D1%82-3-d0a849569224">Russian</a>
        </Section>
        <Section
          title="Environment and Leo first run | testnet_3"
          bgColor="transparent"
        >
          &bull; {' '}
          <a href="https://medium.com/@alex.brunko/programming-on-leo-from-newbie-to-newbies-part-1-8c68a8c87984">English</a>
          &bull; {' '}
          <a href="https://medium.com/@alex.brunko/%D0%BF%D1%8B%D1%82%D0%B0%D0%B5%D0%BC%D1%81%D1%8F-%D0%BA%D0%BE%D0%B4%D0%B8%D1%82%D1%8C-%D0%BD%D0%B0-%D0%BB%D0%B5%D0%BE-%D1%87%D0%B0%D1%81%D1%82%D1%8C-%D0%BF%D0%B5%D1%80%D0%B2%D0%B0%D1%8F-c80964b4fef3">Russian</a>
        </Section>

        <Section
          title="first program on Leo | testnet_3"
          bgColor="bg-white shadow-card dark:bg-light-dark"
        >
          &bull; {' '}
          <a href="https://medium.com/@alex.brunko/launch-of-the-first-aleo-program-a18fa3dd3f81">English</a>
          &bull; {' '}
          <a href="https://medium.com/@alex.brunko/%D0%B7%D0%B0%D0%BF%D1%83%D1%81%D0%BA-%D0%BF%D0%B5%D1%80%D0%B2%D0%BE%D0%B9-%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D1%8B-aleo-808b19e00faa">Russian</a>
        </Section>

        <Section
          title="Leo first code and VSC (Visual Studio Code) installing on Win10 | testnet_3"
          bgColor="transparent"
        >
          &bull; {' '}
          <a href="https://medium.com/@alex.brunko/leo-first-code-1752610d50df">English</a>
          &bull; {' '}
          <a href="https://medium.com/@alex.brunko/%D0%BF%D0%B5%D1%80%D0%B2%D1%8B%D0%B9-%D0%BA%D0%BE%D0%B4-%D0%BD%D0%B0-leo-fdcf0b043d3b">Russian</a>
        </Section>

        <Section
          title="Aleo first deploy | testnet_3"
          bgColor="bg-white shadow-card dark:bg-light-dark"
        >
          &bull; {' '}
          <a href="https://medium.com/@alex.brunko/deploying-first-aleo-program-win10-testnet-3-781714aba8d1">English</a>
          &bull; {' '}
          <a href="https://medium.com/@alex.brunko/%D0%B7%D0%B0%D0%BF%D1%83%D1%81%D0%BA-%D0%B8-%D0%B4%D0%B5%D0%BF%D0%BB%D0%BE%D0%B9-%D1%82%D0%B5%D1%81%D1%82%D0%BE%D0%B2%D0%BE%D0%B9-%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D1%8B-aleo-win10-adbe3f45d9b8">Russian</a>
        </Section>

        <Section
          title="Aleo second deploy and Input_ID handling | testnet_3"
          bgColor="transparent"
        >
          &bull; {' '}
          <a href="https://medium.com/@alex.brunko/second-aleo-program-deploy-and-getting-actual-input-id-win10-testnet-3-dfc043184b2e">English</a>
          &bull; {' '}
          <a href="https://medium.com/@alex.brunko/%D0%B4%D0%B5%D0%BF%D0%BB%D0%BE%D0%B8%D0%BC-%D0%B2%D1%82%D0%BE%D1%80%D1%83%D1%8E-%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D1%83-aleo-%D0%B8-%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B0%D0%B5%D0%BC-%D0%BD%D0%BE%D0%B2%D1%8B%D0%B9-input-id-win10-f68682afb59d">Russian</a>
        </Section>

        <Section
          title="The easiest way to connect leo wallet to our site for aleo interacting | testnet_3"
          bgColor="bg-white shadow-card dark:bg-light-dark"
        >
          &bull; {' '}
          <a href="https://medium.com/@alex.brunko/connecting-leo-wallet-to-our-site-in-5-minutes-to-interact-with-aleo-win10-testnet-3-19d8c699cb36">English</a>
          &bull; {' '}
          <a href="https://medium.com/@alex.brunko/%D0%BF%D0%BE%D0%B4%D0%BA%D0%BB%D1%8E%D1%87%D0%B0%D0%B5%D0%BC-leo-wallet-%D0%BA-%D0%BD%D0%B0%D1%88%D0%B5%D0%BC%D1%83-%D1%81%D0%B0%D0%B9%D1%82%D1%83-%D0%B7%D0%B0-5-%D0%BC%D0%B8%D0%BD%D1%83%D1%82-%D0%B4%D0%BB%D1%8F-%D0%B2%D0%B7%D0%B0%D0%B8%D0%BC%D0%BE%D0%B4%D0%B5%D0%B9%D1%81%D1%82%D0%B2%D0%B8%D1%8F-%D1%81-aleo-win10-%D1%82%D0%B5%D1%81%D1%82%D0%BD%D0%B5%D1%82-3-2d045e27e7fd">Russian</a>
        </Section>

        <Section
          title="how to deploy and mint a simple token on Aleo | testnet_3"
          bgColor="transparent"
        >
          &bull; {' '}
          <a href="https://medium.com/@alex.brunko/deploy-and-mint-a-simple-token-on-aleo-win10-testnet-3-part-1-2b753246b27e">English</a>
          &bull; {' '}
          <a href="https://medium.com/@alex.brunko/%D0%B4%D0%B5%D0%BF%D0%BB%D0%BE%D0%B9-%D0%B8-%D0%BC%D0%B8%D0%BD%D1%82-%D0%BF%D1%80%D0%BE%D1%81%D1%82%D0%BE%D0%B3%D0%BE-%D1%82%D0%BE%D0%BA%D0%B5%D0%BD%D0%B0-%D0%BD%D0%B0-%D0%B0%D0%BB%D0%B5%D0%BE-win10-%D1%82%D0%B5%D1%81%D1%82%D0%BD%D0%B5%D1%82-3-%D1%87%D0%B0%D1%81%D1%82%D1%8C-1-6ecee93ebdc9">Russian</a>
        </Section>

        <Section
          title="Getting test credits by yourself in a few seconds | testnet_3"
          bgColor="bg-white shadow-card dark:bg-light-dark"
        >
          &bull; {' '}
          <a href="https://medium.com/@alex.brunko/how-to-get-test-tokens-aleo-credits-in-a-minute-testnet-3-win10-802ecc8c9978">English</a>
          &bull; {' '}
          <a href="https://medium.com/@alex.brunko/%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B0%D0%B5%D0%BC-%D1%82%D0%B5%D1%81%D1%82%D0%BE%D0%B2%D1%8B%D0%B5-%D1%82%D0%BE%D0%BA%D0%B5%D0%BD%D1%8B-aleo-credits-%D0%B7%D0%B0-%D0%BC%D0%B8%D0%BD%D1%83%D1%82%D1%83-testnet-3-win10-cd6d160e9ed7">Russian</a>
        </Section>

        <Section
          title="This site github repo"
          bgColor="transparent"
        >
          &bull; {' '}
          <a href="https://github.com/liolikus/aleo.build">GO GIT!</a>
  
        </Section>

      </div>
    </>
  );
};

RecordsPage.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default RecordsPage;