// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: nHCjRewDEkTPLhuwjKSJaW
// Component: 2JiXKdUf8VVY

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import { RichLayout } from "@plasmicpkgs/plasmic-rich-components"; // plasmic-import: FNIk-CnxQYXU/codeComponent
import { NavigationBar } from "@plasmicpkgs/plasmic-nav"; // plasmic-import: jGx9tiKJoex/codeComponent

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic_import_table_test.module.css"; // plasmic-import: nHCjRewDEkTPLhuwjKSJaW/projectcss
import sty from "./PlasmicHomepage.module.css"; // plasmic-import: 2JiXKdUf8VVY/css

createPlasmicElementProxy;

export type PlasmicHomepage__VariantMembers = {};
export type PlasmicHomepage__VariantsArgs = {};
type VariantPropType = keyof PlasmicHomepage__VariantsArgs;
export const PlasmicHomepage__VariantProps = new Array<VariantPropType>();

export type PlasmicHomepage__ArgsType = {};
type ArgPropType = keyof PlasmicHomepage__ArgsType;
export const PlasmicHomepage__ArgProps = new Array<ArgPropType>();

export type PlasmicHomepage__OverridesType = {
  root?: p.Flex<"div">;
  richAppLayout?: p.Flex<typeof RichLayout>;
  navigationBar?: p.Flex<typeof NavigationBar>;
  section?: p.Flex<"section">;
  h1?: p.Flex<"h1">;
  text?: p.Flex<"div">;
};

export interface DefaultHomepageProps {}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicHomepage__RenderFunc(props: {
  variants: PlasmicHomepage__VariantsArgs;
  args: PlasmicHomepage__ArgsType;
  overrides: PlasmicHomepage__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = ph.useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};

  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            plasmic_antd_5_hostless_css.plasmic_tokens,
            sty.root
          )}
        >
          <RichLayout
            data-plasmic-name={"richAppLayout"}
            data-plasmic-override={overrides.richAppLayout}
            className={classNames("__wab_instance", sty.richAppLayout)}
            layout={"side" as const}
            logoElement={
              <p.PlasmicImg
                alt={""}
                className={classNames(sty.img__leAM)}
                displayHeight={"auto" as const}
                displayMaxHeight={"none" as const}
                displayMaxWidth={"none" as const}
                displayMinHeight={"0" as const}
                displayMinWidth={"0" as const}
                displayWidth={"auto" as const}
                src={"https://static1.plasmic.app/fake-logo.svg" as const}
              />
            }
            navMenuItems={[{ path: "/", name: "Home" }]}
            title={"App title" as const}
          >
            <NavigationBar
              data-plasmic-name={"navigationBar"}
              data-plasmic-override={overrides.navigationBar}
              brand={
                <p.PlasmicLink
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    sty.link__fUwcg
                  )}
                  component={Link}
                  href={"#" as const}
                  platform={"nextjs"}
                >
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img__ktFec)}
                    displayHeight={"40px" as const}
                    displayMaxHeight={"none" as const}
                    displayMaxWidth={"none" as const}
                    displayMinHeight={"0" as const}
                    displayMinWidth={"0" as const}
                    displayWidth={"auto" as const}
                    src={
                      "https://static1.plasmic.app/nav-logo-placeholder.svg" as const
                    }
                  />
                </p.PlasmicLink>
              }
              className={classNames("__wab_instance", sty.navigationBar)}
              closeButton={
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__ekYz)}
                  displayHeight={"auto" as const}
                  displayMaxHeight={"none" as const}
                  displayMaxWidth={"none" as const}
                  displayMinHeight={"0" as const}
                  displayMinWidth={"0" as const}
                  displayWidth={"auto" as const}
                  src={"https://static1.plasmic.app/close.svg" as const}
                />
              }
              forceOpenMenu={false}
              itemsGap={8 as const}
              menuItems={
                <React.Fragment>
                  <p.PlasmicLink
                    className={classNames(
                      projectcss.all,
                      projectcss.a,
                      projectcss.__wab_text,
                      sty.link__dgyne
                    )}
                    component={Link}
                    href={"/" as const}
                    platform={"nextjs"}
                  >
                    {"Home"}
                  </p.PlasmicLink>
                  <p.PlasmicLink
                    className={classNames(
                      projectcss.all,
                      projectcss.a,
                      projectcss.__wab_text,
                      sty.link___6JIxB
                    )}
                    component={Link}
                    href={"/" as const}
                    platform={"nextjs"}
                  >
                    {"About"}
                  </p.PlasmicLink>
                  <p.PlasmicLink
                    className={classNames(
                      projectcss.all,
                      projectcss.a,
                      projectcss.__wab_text,
                      sty.link___4TpPf
                    )}
                    component={Link}
                    href={"/" as const}
                    platform={"nextjs"}
                  >
                    {"Contact"}
                  </p.PlasmicLink>
                </React.Fragment>
              }
              openButton={
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__yju8R)}
                  displayHeight={"auto" as const}
                  displayMaxHeight={"none" as const}
                  displayMaxWidth={"none" as const}
                  displayMinHeight={"0" as const}
                  displayMinWidth={"0" as const}
                  displayWidth={"auto" as const}
                  src={"https://static1.plasmic.app/menu.svg" as const}
                />
              }
              responsiveBreakpoint={768 as const}
            />

            <section
              data-plasmic-name={"section"}
              data-plasmic-override={overrides.section}
              className={classNames(projectcss.all, sty.section)}
            >
              <h1
                data-plasmic-name={"h1"}
                data-plasmic-override={overrides.h1}
                className={classNames(
                  projectcss.all,
                  projectcss.h1,
                  projectcss.__wab_text,
                  sty.h1
                )}
              >
                {"hello"}
              </h1>
              <div
                data-plasmic-name={"text"}
                data-plasmic-override={overrides.text}
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text
                )}
              >
                <React.Fragment>
                  <React.Fragment>
                    {
                      "If you haven't already done so, go back and learn the basics by going through the Plasmic Levels tutorial.\n\nIt's always easier to start from examples! Add a new page using a template\u2014do this from the list of pages in the top toolbar.\n\nOr press the big blue + button to start inserting items into this page.\n\nIntegrate this project into your codebase\u2014press the "
                    }
                  </React.Fragment>
                  <span
                    className={"plasmic_default__all plasmic_default__span"}
                    style={{ fontWeight: 700 }}
                  >
                    {"Code"}
                  </span>
                  <React.Fragment>
                    {
                      " button in the top right and follow the quickstart instructions.\n\nJoin our Slack community (icon in bottom left) for help any time."
                    }
                  </React.Fragment>
                </React.Fragment>
              </div>
            </section>
          </RichLayout>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "richAppLayout", "navigationBar", "section", "h1", "text"],
  richAppLayout: ["richAppLayout", "navigationBar", "section", "h1", "text"],
  navigationBar: ["navigationBar"],
  section: ["section", "h1", "text"],
  h1: ["h1"],
  text: ["text"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  richAppLayout: typeof RichLayout;
  navigationBar: typeof NavigationBar;
  section: "section";
  h1: "h1";
  text: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHomepage__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHomepage__VariantsArgs;
    args?: PlasmicHomepage__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHomepage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicHomepage__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicHomepage__ArgProps,
          internalVariantPropNames: PlasmicHomepage__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicHomepage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHomepage";
  } else {
    func.displayName = `PlasmicHomepage.${nodeName}`;
  }
  return func;
}

export const PlasmicHomepage = Object.assign(
  // Top-level PlasmicHomepage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    richAppLayout: makeNodeComponent("richAppLayout"),
    navigationBar: makeNodeComponent("navigationBar"),
    section: makeNodeComponent("section"),
    h1: makeNodeComponent("h1"),
    text: makeNodeComponent("text"),

    // Metadata about props expected for PlasmicHomepage
    internalVariantProps: PlasmicHomepage__VariantProps,
    internalArgProps: PlasmicHomepage__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicHomepage;
/* prettier-ignore-end */
