import React from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import ThemedImage from '@theme/ThemedImage';
import {
  AngularIcon,
  // ElectronIcon,
  FlutterIcon,
  HTMLIcon,
  JSIcon,
  KotlinIcon,
  ReactIcon,
  SwiftIcon,
} from '../../icons';
import Head from '@docusaurus/Head';
import { useState } from 'react';

function SDKLink({ href, Icon, label, disabled = false }) {
  return (
    <Link
      className={clsx(
        'flex items-center gap-2 rounded-md p-2 text-current transition hover:bg-secondary-700 hover:text-black hover:no-underline dark:hover:text-white',
        disabled && 'cursor-default'
      )}
      href={!disabled ? href : undefined}
    >
      <Icon className="h-8 w-8" />
      {label}
    </Link>
  );
}

export default function SDKsSection() {
  const [visibleSection, setVisibleSection] = useState('Web');

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const section = entry.target.getAttribute('data-section');

          if (entry.isIntersecting) {
            entry.target.classList.add('intersected');
            setVisibleSection(section);
          }
        }
      },
      { rootMargin: '-50% 0% -50% 0%' }
    );

    const elements = document.querySelectorAll('.sdk-section');
    for (const el of elements) {
      observer.observe(el);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  function Pill({ section }) {
    return (
      <div
        className={clsx(
          'flex-1 cursor-pointer rounded-md py-2 px-6 text-center font-jakarta text-sm font-semibold',
          visibleSection === section
            ? 'bg-primary text-white'
            : 'text-black dark:text-white'
        )}
        onClick={() => {
          document
            .getElementById(section)
            ?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }}
      >
        {`${section[0].toUpperCase()}${section.substring(1)}`}
      </div>
    );
  }

  return (
    <section className="bg-secondary-1000 py-20 px-4" id="start-building">
      <Head>
        <link rel="prefetch" href="/static/landing-page/plugin-sdk-light.png" />
        <link rel="prefetch" href="/static/landing-page/plugin-sdk-dark.png" />
      </Head>
      <div className="mx-auto max-w-7xl">
        <div className="dyte-badge">客户端</div>

        <div className="sticky top-14 z-20 -mt-4 flex flex-col items-center gap-6 bg-secondary-1000 py-6 lg:flex-row lg:justify-between lg:py-0">
          <h2 className="my-0 text-center font-jakarta lg:text-3xl">
            使用方式
          </h2>

          <div className="mx-auto flex h-20 w-full flex-1 items-center justify-center self-start lg:w-auto lg:justify-end">
            <div className="inline-flex items-center rounded-lg bg-zinc-100 p-2 text-sm dark:bg-zinc-800 lg:text-base">
              <Pill section="windows" />
              <Pill section="mac" />
              <Pill section="web" />
            </div>
          </div>
        </div>

        <div
          className="sdk-section my-16 flex flex-col rounded-3xl bg-secondary-900 lg:flex-row"
          data-section="windows"
          id="windows"
        >
          <div className="flex flex-[2] flex-col justify-center p-6 text-center lg:pl-16 lg:text-left">
            <h3 className="text-4xl font-semibold">Windows</h3>
            <p className="text-sm leading-relaxed text-text-400 lg:max-w-sm">
              下载Windows安装包，安装启动后即可使用桌面端或者Web网页端(http://127.0.0.1:10824/)使用
            </p>
            { <Link className="text-sm" href={"https://github.com/alibaba/Chat2DB/releases"}>前往下载 &rarr;</Link> }
          </div>
          <div className="flex-1 bg-secondary-800 p-6 px-8 lg:rounded-l-3xl">
            <h4>UI Kit</h4>
            <p className="text-sm leading-relaxed text-text-400">
              连接数据库之后新建查询Console，除执行基本DML或者DDL之外，可以轻松使用自然语言转SQL，SQL解释，SQL优化，SQL转换等能力
            </p>
            {/*<div>*/}
            {/*  <ul className="mb-0 flex list-none flex-col gap-2 pl-0">*/}
            {/*    <li>*/}
            {/*      <SDKLink href="react-ui-kit" Icon={ReactIcon} label="React" />*/}
            {/*    </li>*/}
            {/*    <li>*/}
            {/*      <SDKLink*/}
            {/*        href="angular-ui-kit"*/}
            {/*        Icon={AngularIcon}*/}
            {/*        label="Angular"*/}
            {/*      />*/}
            {/*    </li>*/}
            {/*    <li>*/}
            {/*      <SDKLink*/}
            {/*        href="ui-kit"*/}
            {/*        Icon={HTMLIcon}*/}
            {/*        label="Web Components"*/}
            {/*      />*/}
            {/*    </li>*/}
            {/*  </ul>*/}
            {/*</div>*/}
          </div>
          <div className="flex-1 rounded-b-3xl bg-secondary-800 p-6 px-8 lg:rounded-r-3xl lg:rounded-bl-none">
            <h4>Requirements</h4>
            <p className="text-sm leading-relaxed text-text-400">
              集成了ChatGPT开放能力，需要在设置中配置OPENAI_API_KEY
            </p>
            {/*<ul className="mb-0 flex list-none flex-col gap-2 pl-0">*/}
            {/*  <li>*/}
            {/*    <SDKLink href="web-core" Icon={JSIcon} label="JavaScript" />*/}
            {/*  </li>*/}
            {/*  <li>*/}
            {/*    <SDKLink href="react-web-core" Icon={ReactIcon} label="React" />*/}
            {/*  </li>*/}
            {/*</ul>*/}
          </div>
        </div>

        <div
          className="sdk-section mb-16 flex flex-col rounded-3xl bg-secondary-900 lg:flex-row"
          data-section="mac"
          id="mac"
        >
          <div className="flex flex-[2] flex-col justify-center p-6 text-center lg:pl-16 lg:text-left">
            <h3 className="text-4xl font-semibold">Mac</h3>
            <p className="text-sm leading-relaxed text-text-400 lg:max-w-sm">
              下载Mac安装包，安装包分arm版本和intel版本，安装启动后即可使用桌面端或者Web网页端(http://127.0.0.1:10824/)使用
            </p>
            { <Link className="text-sm" href={"https://github.com/alibaba/Chat2DB/releases"}>前往下载 &rarr;</Link> }
          </div>
          <div className="flex flex-1 flex-col bg-secondary-800 p-6 px-8 lg:rounded-l-3xl">
            <h4>UI Kit</h4>
            <p className="text-sm leading-relaxed text-text-400">
              连接数据库之后新建查询Console，除执行基本DML或者DDL之外，可以轻松使用自然语言转SQL，SQL解释，SQL优化，SQL转换等能力
            </p>
          </div>
          <div className="flex-1 rounded-b-3xl bg-secondary-800 p-6 px-8 lg:rounded-r-3xl lg:rounded-bl-none">
            <h4>Requirements</h4>
            <p className="text-sm leading-relaxed text-text-400">
              集成了ChatGPT开放能力，需要在设置中配置OPENAI_API_KEY
            </p>
          </div>
        </div>

        <div
          className="sdk-section mb-16 flex flex-col rounded-3xl bg-secondary-900 lg:flex-row"
          data-section="web"
          id="web"
        >
          <div className="flex flex-1 flex-col justify-center p-6 text-center lg:pl-16 lg:text-left">
            <h3 className="text-4xl font-semibold">Web</h3>
            <p className="text-sm leading-relaxed text-text-400 lg:max-w-sm">
              下载源码包，使用JDK17，通过Maven工具编译源代码、生成jar包，启动jar包后即可通过Web网页端(http://127.0.0.1:10824/)使用
            </p>
            { <Link className="text-sm" href={"https://github.com/alibaba/Chat2DB/releases"}>前往下载 &rarr;</Link> }
          </div>
          <div className="flex flex-1 flex-col bg-secondary-800 p-6 px-8 lg:rounded-l-3xl">
            <h4>UI Kit</h4>
            <p className="text-sm leading-relaxed text-text-400">
              连接数据库之后新建查询Console，除执行基本DML或者DDL之外，可以轻松使用自然语言转SQL，SQL解释，SQL优化，SQL转换等能力
            </p>
          </div>
          <div className="flex-1 rounded-b-3xl bg-secondary-800 p-6 px-8 lg:rounded-r-3xl lg:rounded-bl-none">
            <h4>Requirements</h4>
            <p className="text-sm leading-relaxed text-text-400">
              集成了ChatGPT开放能力，需要在设置中配置OPENAI_API_KEY
            </p>
          </div>
        </div>

        {/* <div
          className="sdk-section mb-16 flex flex-col rounded-3xl bg-secondary-900 lg:flex-row"
          data-section="desktop"
          id="desktop"
        >
          <div className="flex flex-[2] flex-col justify-center p-6 text-center lg:pl-16 lg:text-left">
            <div className="mb-4 text-xs font-semibold">COMING SOON</div>
            <h3 className="text-4xl font-semibold">Desktop</h3>
            <p className="text-sm leading-relaxed text-text-400 lg:max-w-sm">
              Take Dyte for a spin to build real-time communication solutions
              for Electron. Read the docs to get started with your desktop
              applications.
            </p>
            <Link href="#" className="text-sm">
              Learn More &rarr;
            </Link>
          </div>
          <div className="flex-1 rounded-3xl bg-secondary-800 p-6 px-8">
            <h4>Core SDK</h4>
            <p className="text-sm leading-relaxed text-text-400">
              Build high-quality custom video and voice calls with real-time
              communication using fully customizable and easy to integrate Core
              SDKs.
            </p>
            <ul className="flex list-none flex-col gap-2 pl-0">
              <li>
                <SDKLink
                  href="#"
                  Icon={ElectronIcon}
                  label="Electron"
                  disabled
                />
              </li>
            </ul>
          </div>
          <div className="flex-1 p-6 px-8">
            <h4>UI Kit</h4>
            <p className="text-sm leading-relaxed text-text-400">
              Integrate video and voice calls to your app or website in minutes
              using Dyte&apos;s prebuilt design library of UI components.
            </p>
            <div>
              <ul className="mb-0 flex list-none flex-col gap-2 pl-0">
                <li>
                  <SDKLink
                    href="#"
                    disabled
                    Icon={ElectronIcon}
                    label="Electron"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div> */}
      </div>
      <div className="text-center text-text-400">
        <p>
          Don&apos;t see your tech stack here?{' '}
          <Link href="https://dyte.io/contact">Contact Us</Link>
        </p>
      </div>
    </section>
  );
}
