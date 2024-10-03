import { defineComponent as r, resolveComponent as k, openBlock as o, createElementBlock as l, createElementVNode as n, normalizeClass as u, createCommentVNode as i, toDisplayString as d, createVNode as m, withCtx as c, createTextVNode as h, createBlock as s } from "vue";
import _ from "lkt-anchor";
const f = { class: "lkt-documentation-card" }, p = { class: "lkt-documentation-card-header" }, g = {
  key: 0,
  class: "lkt-documentation-card-ribbon"
}, L = { class: "lkt-documentation-card-icon" }, b = { class: "lkt-documentation-card-title" }, v = {
  key: 0,
  class: "lkt-documentation-card-intro"
}, C = { class: "lkt-documentation-card-read-more" }, y = /* @__PURE__ */ n("div", { class: "lkt-documentation-card-intro" }, "Or check the project pages", -1), D = { class: "lkt-documentation-card-links" }, N = /* @__PURE__ */ n("i", { class: "lkt-icon-npm" }, null, -1), V = /* @__PURE__ */ n("i", { class: "lkt-icon-github-circled" }, null, -1), B = /* @__PURE__ */ n("i", { class: "lkt-icon-packagist" }, null, -1), E = /* @__PURE__ */ r({
  __name: "LktDocumentationCard",
  props: {
    title: { default: "" },
    intro: { default: "" },
    icon: { default: "" },
    readMoreLink: { default: "" },
    npmLink: { default: "" },
    packagistLink: { default: "" },
    githubLink: { default: "" },
    gitlabLink: { default: "" },
    bitbucketLink: { default: "" }
  },
  setup(e) {
    return (t, M) => {
      const a = k("lkt-anchor");
      return o(), l("div", f, [
        n("div", p, [
          t.icon ? (o(), l("div", g, [
            n("div", L, [
              n("i", {
                class: u(t.icon)
              }, null, 2)
            ])
          ])) : i("", !0),
          n("div", b, d(t.title), 1)
        ]),
        t.intro ? (o(), l("div", v, d(t.intro), 1)) : i("", !0),
        n("div", C, [
          m(a, {
            to: t.readMoreLink,
            class: "lkt-documentation-card-link"
          }, {
            default: c(() => [
              h("Learn more")
            ]),
            _: 1
          }, 8, ["to"])
        ]),
        y,
        n("div", D, [
          t.npmLink ? (o(), s(a, {
            key: 0,
            target: "_blank",
            href: t.npmLink,
            class: "lkt-documentation-card-link npm-link"
          }, {
            default: c(() => [
              N
            ]),
            _: 1
          }, 8, ["href"])) : i("", !0),
          t.githubLink ? (o(), s(a, {
            key: 1,
            target: "_blank",
            href: t.githubLink,
            class: "lkt-documentation-card-link github-link"
          }, {
            default: c(() => [
              V
            ]),
            _: 1
          }, 8, ["href"])) : i("", !0),
          t.packagistLink ? (o(), s(a, {
            key: 2,
            target: "_blank",
            href: t.packagistLink,
            class: "lkt-documentation-card-link packagist-link"
          }, {
            default: c(() => [
              B
            ]),
            _: 1
          }, 8, ["href"])) : i("", !0)
        ])
      ]);
    };
  }
}), z = {
  install: (e, t) => {
    e.component("lkt-documentation-card") === void 0 && e.component("lkt-documentation-card", E), e.component("lkt-anchor") === void 0 && (console.log("ahhhh"), e.use(_));
  }
};
export {
  z as default
};
