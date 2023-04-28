import React from 'react';
import Link from '@docusaurus/Link';
import { ArrowUpRight } from 'react-feather';
import Head from '@docusaurus/Head';
import ThemedImage from '@theme/ThemedImage';

export default function APIReferenceSection() {
  return (
    <section className="relative mb-20 px-6">
      <Head>
        <link rel="prefetch" href="/static/landing-page/api-ref-light.png" />
        <link rel="prefetch" href="/static/landing-page/api-ref-dark.png" />
      </Head>
      <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center gap-10 rounded-2xl bg-gradient-to-r from-black to-zinc-800 px-6 py-20 text-center text-white dark:from-zinc-100 dark:to-white dark:text-black lg:flex-row lg:p-20 lg:text-left">
        <Link
          href="/docs/guides/quickstart"
          aria-label="AI Chat SQL"
          className="absolute right-8 top-8 flex h-16 w-16 items-center justify-center rounded-full bg-zinc-600/40 dark:bg-transparent"
        >
          <ArrowUpRight className="h-6 w-6 text-zinc-400 dark:text-black" />
        </Link>
        <div className="flex-1">
          <h2 className="text-4xl">AI Chat SQL</h2>
          <p className="text-zinc-400">
            Chat2DB包含一系列基于ChatGPT的AI
            SQL使用功能，主要包括自然语言转SQL、SQL解释、SQL优化和SQL转换。
            使用这些AI功能，可以将自然语言转换成本地查询SQL，而不仅仅是SQL查询伪代码；可以将SQL解释成自然语言，帮助用户理解复杂的SQL；
            可以针对慢SQL提供全方位的优化建议，提升查询效率；可以转换不同数据库类型的SQL语言，降低数据库迁移难度等等。
          </p>
          <Link
            href="/docs/guides/quickstart"
            className="font-medium text-primary-100 dark:text-primary"
          >
            快速开始 &rarr;
          </Link>
          <ul className="mt-10 flex list-none flex-col gap-4 text-left lg:pl-0">
            <li className="flex flex-col gap-1">
              <Link
                href="https://github.com/alibaba/Chat2DB/blob/main/CHAT2DB_AI_SQL.md#%E8%87%AA%E7%84%B6%E8%AF%AD%E8%A8%80%E8%BD%ACsql"
                className="group font-jakarta font-semibold text-current"
              >
                自然语言转SQL
                <span className="ml-2 opacity-0 transition group-hover:translate-x-2 group-hover:opacity-100">
                  &rarr;
                </span>
              </Link>
              <div className="text-zinc-400">输入自然语言，输出查询SQL</div>
            </li>
            <li className="flex flex-col gap-1">
              <Link
                href="https://github.com/alibaba/Chat2DB/blob/main/CHAT2DB_AI_SQL.md#sql%E8%A7%A3%E9%87%8A"
                className="group font-jakarta font-semibold text-current"
              >
                SQL解释
                <span className="ml-2 opacity-0 transition group-hover:translate-x-2 group-hover:opacity-100">
                  &rarr;
                </span>
              </Link>
              <div className="text-zinc-400">输入SQL，输出自然语言</div>
            </li>
            <li className="flex flex-col gap-1">
              <Link
                href="https://github.com/alibaba/Chat2DB/blob/main/CHAT2DB_AI_SQL.md#sql%E4%BC%98%E5%8C%96"
                className="group font-jakarta font-semibold text-current"
              >
                SQL优化
                <span className="ml-2 opacity-0 transition group-hover:translate-x-2 group-hover:opacity-100">
                  &rarr;
                </span>
              </Link>
              <div className="text-zinc-400">
                输入SQL，输出SQL相关的优化建议
              </div>
            </li>
            <li className="flex flex-col gap-1">
              <Link
                href="https://github.com/alibaba/Chat2DB/blob/main/CHAT2DB_AI_SQL.md#sql%E4%BC%98%E5%8C%96"
                className="group font-jakarta font-semibold text-current"
              >
                SQL转换
                <span className="ml-2 opacity-0 transition group-hover:translate-x-2 group-hover:opacity-100">
                  &rarr;
                </span>
              </Link>
              <div className="text-zinc-400">
                输入SQL，将SQL转换为目标类型的SQL
              </div>
            </li>
          </ul>
        </div>
        <div className="flex flex-1 justify-end">
          <ThemedImage
            sources={{
              light: '/logo/bot2.svg',
              dark: '/logo/bot2.svg',
            }}
            alt="AI Chat SQL Preview"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
