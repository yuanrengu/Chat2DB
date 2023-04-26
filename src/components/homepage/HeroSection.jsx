import React from 'react';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';
import ThemedImage from '@theme/ThemedImage';

export default function HeroSection() {
  return (
    <section className="noise-bg no-underline-links px-4 pt-16 lg:py-0">
      <Head>
        <link rel="prefetch" href="/static/landing-page/hero-light.png" />
        <link rel="prefetch" href="/static/landing-page/hero-dark.png" />
      </Head>
      <div className="mx-auto flex max-w-7xl flex-col items-center lg:h-[540px] lg:flex-row">
        <div className="flex-1 text-center lg:text-left">
          <h1 className="mb-6 font-jakarta text-4xl font-bold lg:text-6xl">
            Chat2DB
          </h1>
          <p className="text-sm text-text-400 lg:max-w-lg lg:text-base">
            一款由阿里巴巴开源免费的多数据库客户端工具，支持windows、mac本地安装，也支持服务器端部署，web网页访问。
            和传统的数据库客户端软件Navicat、DBeaver 相比Chat2DB集成了AIGC的能力，能够将自然语言转换为SQL，
            也可以将SQL转换为自然语言，可以给出研发人员SQL的优化建议，极大的提升人员的效率，是AI时代数据库研发人员的利器，
            不懂SQL的运营或业务也可以轻松使用快速查询业务数据、生成报表的能力。
          </p>
          <div className="mt-8 flex flex-col gap-4 lg:flex-row">
            <Link
              href="#start-building"
              className="rounded-sm bg-primary px-12 py-2.5 text-center font-semibold text-white hover:text-white"
            >
              快速接入
            </Link>
            <Link
              href="/guides/quickstart.html"
              className="rounded-sm border border-solid border-primary bg-primary/10 px-12 py-2.5 text-center font-semibold text-primary hover:text-primary dark:border-primary-100 dark:text-primary-100"
            >
              开始了解
            </Link>
          </div>
        </div>
        <div className="">
          <ThemedImage
            sources={{
              light: '/logo/bot1.svg',
              dark: '/logo/bot1.svg',
            }}
            alt="Chat2DB"
            className="lg:w-[600px] lg:ml-16"
          />
        </div>
      </div>
    </section>
  );
}
